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
                    role: "system", content: `
请将Markdown 文本翻译成中文，同时遵守以下规则:

1. 严格保持原文的Markdown格式不变，包括但不限于标题、列表、代码块、引用等。

2. 翻译Markdown链接时,遵循以下格式:
   - 原文: [Link text](#link-reference)
   - 正确翻译: [链接文本](#链接引用)
   - 错误翻译: [链接 文本](#链接 引用)

   确保链接文本和引用部分在翻译后不包含空格,以保持链接的正确性。

3. 专有名词、缩写等可以保留英文,但在首次出现时可在括号内提供中文解释。

4. 代码块、命令行指令等技术内容保持原样不翻译。

5. 注意调整语序,使翻译后的文本符合中文的表达习惯,同时保持原意。

​` },
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