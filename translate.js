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
    const sections = content.split(/^(#{1,2}\s.+)$/m);
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
请将Markdown文本翻译成中文，同时遵守以下规则:
1. 严格保持原文的Markdown格式不变，包括但不限于标题、列表、代码块、引用等。
2. 专有名词、缩写等可以保留英文,但在首次出现时可在括号内提供中文解释。
3. 代码块、命令行指令等技术内容保持原样不翻译。
4. 注意调整语序,使翻译后的文本符合中文的表达习惯,同时保持原意。
​` },
                { role: "user", content: section.trim() }
            ],
        });
        console.log(`Translated section ${index + 1} of ${total}`);
        return { index, section, content: response.choices[0].message.content };
    }

    try {
        const content = readFileSync(inputFile, 'utf8');
        const sections = splitContent(content);
        console.log(`Split into ${sections.length} sections`);
        // 记录每个section的前导空格
        const leadingSpaces = sections.map(section => {
            const match = section.match(/^(\s*)/);
            return match ? match[1] : '';
        });


        const translationPromises = sections.map((section, index) =>
            translateSection(section, index, sections.length)
        );

        const translatedSections = await Promise.all(translationPromises);

        // 按原始顺序排序翻译结果
        const sortedTranslations = translatedSections
            .sort((a, b) => a.index - b.index)
            .map(item =>  leadingSpaces[item.index] + item.content);

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

        const regex = /\[([^\]]+)\]\(#([^)]+)\)/g;

        const replacer = (match, p1, p2) => {
            const linkText = p1.replace(/\s+/g, '');
            const linkRef = p2.replace(/\s+/g, '');
            return `[${linkText}](#${linkRef})`;
        };
        writeFileSync(outputFile, translatedContent.trim().replace(regex, replacer));
        console.log(`Translation completed and saved to ${outputFile}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

// 获取命令行参数
const inputFile = process.argv[2];
const outputFile = process.argv[3] || 'README.md';

translateToChineseAndSave(inputFile, outputFile);