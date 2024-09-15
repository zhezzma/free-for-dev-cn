import { readFileSync, writeFileSync } from 'fs';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const openai = new OpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
});



const maxSectionLength = 8000;

function convertToId(header) {
    return header.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function splitContent(content) {
    // 首先，统一换行符为 \n
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    const sections = content.split(/^(#{1,2}\s.+(?:\n+|$))/m);
    let result = [];
    let currentSection = null;

    for (let i = 1; i < sections.length; i += 2) {
        const headerWithNewlines = sections[i];
        const [header, ...newlines] = headerWithNewlines.split('\n');
        const text = sections[i + 1] || '';

        currentSection = {
            id: convertToId(header.replace(/^#+\s/, '')),
            header: header,
            text: text,
            sections: [],
            leadingSpaces: [],
            translations: []
        };

        const lines = text.split('\n');
        let currentSubSection = '';
        let currentLeadingSpace = '';

        for (let line of lines) {
            const lineLeadingSpace = line.match(/^(\s*)/)[1];

            if (currentSubSection.length + line.length > maxSectionLength) {
                currentSection.sections.push(currentSubSection);
                currentSection.leadingSpaces.push(currentLeadingSpace);
                currentSubSection = '';
                currentLeadingSpace = '';
                continue;
            }

            if (currentSubSection === '') {
                currentLeadingSpace = lineLeadingSpace;
            }

            currentSubSection += line + '\n';
        }

        if (currentSubSection.trim().length > 0) {
            currentSection.sections.push(currentSubSection);
            currentSection.leadingSpaces.push(currentLeadingSpace);
        }

        result.push(currentSection);
    }

    return result;
}

async function translateTableOfContents(sections, openai) {
    const tocSection = sections.find(section => section.id === 'table-of-contents');
    if (!tocSection) {
        console.log("Table of Contents not found");
        return {};
    }

    const linkRegex = /^\s*\*\s\[(.+)\]\(#(.+)\)\s*$/;
    const idTextMap = {};

    const translatedSections = await Promise.all(tocSection.sections.map(async (section, index) => {
        const response = await openai.chat.completions.create({
            model: process.env.OPENAI_MODEL_ID,
            messages: [
                {
                    role: "system",
                    content: `请翻译以下目录项，保持原有的格式:
                    1. 保持星号和缩进不变
                    2. 只翻译方括号[]内的文本
                    3. 保持圆括号()内的链接不变`
                },
                { role: "user", content: section }
            ],
        });

        const translatedContent = response.choices[0].message.content;
        console.log(`Translated TOC section ${index + 1} of ${tocSection.sections.length}`);

        const translatedLines = translatedContent.split('\n').map(line => {
            const match = line.match(linkRegex);
            if (match) {
                let [, translatedText, id] = match;
                translatedText = translatedText.replace(/\s+/g, '');
                idTextMap[id] = translatedText;
                return `${tocSection.leadingSpaces[index]}* [${translatedText}](#${translatedText})`;
            }
            return line;
        });

        return translatedLines.join('\n');
    }));

    tocSection.translations = translatedSections;

    // 替换链接
    Object.entries(idTextMap).forEach(([id, text]) => {
        const encodedText = encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'));
        tocSection.translations = tocSection.translations.map(translation =>
            translation.replace(new RegExp(`\\(#${id}\\)`, 'g'), `(#${encodedText})`));
    });

    return idTextMap;
}
async function translateToChineseAndSave(inputFile, outputFile) {
    try {
        const content = readFileSync(inputFile, 'utf8');
        const sections = splitContent(content);
        console.log(`Split into ${sections.length} sections`);

        const idTextMap = await translateTableOfContents(sections, openai);

        // 提取所有需要翻译的部分
        const allSectionsToTranslate = sections.filter(section => section.id !== 'table-of-contents')
            .flatMap(section =>
                section.sections.map((text, index) => ({ sectionId: section.id, index, text }))
            );

        console.log(`Preparing to translate ${allSectionsToTranslate.length} subsections`);

        // 批量翻译
        const translatedSections = await Promise.all(allSectionsToTranslate.map(async ({ sectionId, index, text }) => {
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
5. 保持原文的链接格式不变，只翻译链接文本。
​`
                    },
                    { role: "user", content: text.trim() }
                ],
            });
            console.log(`Translated subsection ${index + 1} of section ${sectionId}`);
            return { sectionId, index, content: response.choices[0].message.content };
        }));

        // 将翻译结果存储到相应的 section 对象中
        sections.forEach(section => {
            if (section.id !== 'table-of-contents') {
                section.translations = translatedSections
                    .filter(ts => ts.sectionId === section.id)
                    .sort((a, b) => a.index - b.index)
                    .map(ts => section.leadingSpaces[ts.index] + ts.content);
            }
        });

        // 替换 header 并组合成完整的翻译结果
        const translatedContent = sections.map(section => {
            const headerLevel = section.header.match(/^(#+)/)[1];
            const newHeader = idTextMap[section.id] ? `${headerLevel} ${idTextMap[section.id]}` : section.header;
            return [newHeader, ...section.translations].join('\n\n');
        }).join('\n\n');

        // // 更新链接
        // const updatedContent = translatedContent.replace(/\[([^\]]+)\]\(#([^)]+)\)/g, (match, linkText, linkId) => {
        //     const translatedLinkText = idTextMap[linkId] || linkText;
        //     const encodedLinkText = encodeURIComponent(translatedLinkText.toLowerCase().replace(/\s+/g, '-'));
        //     return `[${translatedLinkText}](#${encodedLinkText})`;
        // });

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