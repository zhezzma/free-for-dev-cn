import { readFileSync, writeFileSync } from 'fs';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const maxSectionLength = 8000;
function splitContent(content) {
    
    // 先按header分割
    const sections = content.split(/^(#{1,6}\s.+)$/m);
    let combinedSections = [];

    // 合并header和其内容
    for (let i = 1; i < sections.length; i += 2) {
        combinedSections.push(sections[i] + '\n' + (sections[i + 1] || ''));
    }
    // 合并相邻的小节
    let merged = true;
    while (merged) {
        merged = false;
        for (let i = 0; i < combinedSections.length - 1; i++) {
            if (combinedSections[i].length + combinedSections[i + 1].length <= maxSectionLength) {
                combinedSections[i] += '\n\n' + combinedSections[i + 1];
                combinedSections.splice(i + 1, 1);
                merged = true;
                break;
            }
        }
    }

    // 进一步分割大段落
    let finalSections = [];
    for (let section of combinedSections) {
        if (section.length > maxSectionLength) {
            let lines = section.split('\n');
            let currentSection = '';
            for (let line of lines) {
                if (currentSection.length + line.length > maxSectionLength) {
                    finalSections.push(currentSection);
                    currentSection = '';
                }
                currentSection += line + '\n';
            }
            finalSections.push(currentSection);
        } else {
            finalSections.push(section);
        }
    }

    return finalSections;
}

async function translateToChineseAndSave(inputFile, outputFile) {
    const openai = new OpenAI({
        baseURL: process.env.OPENAI_BASE_URL,
        apiKey: process.env.OPENAI_API_KEY,
    });

    async function translateSection(section, index, total) {
        const response = await openai.chat.completions.create({
            model: process.env.OPENAI_MODEL_ID,
            messages: [
                {
                    role: "system", content: `[角色]：专业的Markdown文档翻译专家
[技能]：精通Markdown语法、中英文翻译、文档格式保持
[背景]：需要将Markdown格式的英文文档准确翻译成中文，保持原有格式
[任务]：翻译Markdown文档为中文，保持原格式不变
[流程]：

仔细阅读原文档，识别Markdown语法元素
翻译正文内容为中文
保持Markdown语法标记不变
不翻译链接文本、代码块等特殊内容
校对翻译结果，确保格式正确
[特性]：
准确的中文翻译
与原文完全一致的Markdown格式
链接文本、代码等特殊内容保持原样
整体排版与原文一致` },
                { role: "user", content: section }
            ],
        });
        console.log(`Translated section ${index + 1} of ${total}`);
        return { index, content: response.choices[0].message.content };
    }

    try {
        const content = readFileSync(inputFile, 'utf8');
        const sections = splitContent(content);
        console.log(`Split into ${sections.length} sections`);

        const translationPromises = sections.map((section, index) =>
            translateSection(section, index, sections.length)
        );

        const translatedSections = await Promise.all(translationPromises);

        // 按原始顺序排序翻译结果
        const sortedTranslations = translatedSections
            .sort((a, b) => a.index - b.index)
            .map(item => item.content);

        const translatedContent = sortedTranslations.reduce((acc, current, index) => {
            if (index === 0) {
                return current;
            }
            if (current.startsWith('#')) {
                return acc + '\n\n' + current;
            } else {
                return acc + '\n' + current;
            }
        }, '');

        writeFileSync(outputFile, translatedContent.trim());
        console.log(`Translation completed and saved to ${outputFile}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// 获取命令行参数
const inputFile = process.argv[2];
const outputFile = process.argv[3] || 'README.md';

translateToChineseAndSave(inputFile, outputFile);