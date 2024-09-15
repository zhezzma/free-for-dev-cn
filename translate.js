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
        combinedSections.push(sections[i] + '\n' + (sections[i + 1] || '').trim());
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
                    finalSections.push(currentSection.trim());
                    currentSection = '';
                }
                currentSection += line + '\n';
            }
            if (currentSection.trim()) {
                finalSections.push(currentSection.trim());
            }
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
                { role: "system", content: "You are a translator. Translate the following text to Chinese. Keep the original Markdown formatting." },
                { role: "user", content: section }
            ],
        });
        console.log(`Translated section ${index + 1} of ${total}`);
        return response.choices[0].message.content;
    }

    try {
        const content = readFileSync(inputFile, 'utf8');
        const sections = splitContent(content);
        console.log(`Split into ${sections.length} sections`);

        const translationPromises = sections.map((section, index) => 
            translateSection(section, index, sections.length)
        );

        const translatedSections = await Promise.all(translationPromises);
        const translatedContent = translatedSections.join('\n\n');

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