import { readFileSync, writeFileSync } from 'fs';
import { OpenAI } from 'openai';
import dotenv from 'dotenv';
import {ChatCompletion,getBearToken,setEnvVariable} from "@baiducloud/qianfan";


// 加载环境变量
dotenv.config();


async function qianfan() {
    setEnvVariable('QIANFAN_ACCESS_KEY','');
    setEnvVariable('QIANFAN_SECRET_KEY','');

    // const qianfan = new  ChatCompletion({
    //     version: 'v2',
    // });
    // const resp = await qianfan.chat({
    //     messages: [
    //         {
    //             role: 'user',
    //             content: '今天深圳天气',
    //         },
    //     ],
    //  }, "ernie-speed-128k");
    //  console.log(resp?.choices);

    const bearToken = await getBearToken();
    console.log(bearToken);

    const openai = new OpenAI({
        baseURL: "https://qianfan.baidubce.com/v2",
        apiKey: bearToken.token,
    });
    const response = await openai.chat.completions.create({
        max_tokens: 4096,
        stream: false,
        temperature: 0.1,
        model: "ernie-speed-128k",
        messages: [
            {
                role: 'user',
                content: '今天深圳天气',
            },
        ],
    });
    console.log(JSON.stringify(response));
}


// 初始化OpenAI实例
let openai = new OpenAI({
    baseURL: process.env.OPENAI_BASE_URL,
    apiKey: process.env.OPENAI_API_KEY,
});

if(process.env.OPENAI_API_KEY.includes(":"))
{
    const [QIANFAN_ACCESS_KEY,QIANFAN_SECRET_KEY] =  process.env.OPENAI_API_KEY.split(":");
    setEnvVariable('QIANFAN_ACCESS_KEY',QIANFAN_ACCESS_KEY);
    setEnvVariable('QIANFAN_SECRET_KEY',QIANFAN_SECRET_KEY);
    const bearToken = await getBearToken();
    console.log(bearToken);
    openai = new OpenAI({
        baseURL: "https://qianfan.baidubce.com/v2",
        apiKey: bearToken.token,
    });
}



/**
 * 延迟函数，用于请求失败后的重试等待
 * @param {number} ms 延迟毫秒数
 * @returns {Promise<void>}
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// 配置参数
const CONFIG = {
    maxSectionLength: 8000,    // 每个部分的最大长度
    maxRetries: 5,            // 最大重试次数
    retryDelay: 5000,         // 重试延迟时间(ms)
    requestInterval: 30000,    // 请求间隔时间(ms)，即每20秒一个请求
    concurrentLimit: 5,      // 并发请求数限制
};

/**
 * 将标题转换为ID
 * @param {string} header 标题文本
 * @returns {string} 转换后的ID
 */
function convertToId(header) {
    return header.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}


/**
 * 信号量类，用于控制并发
 */
class Semaphore {
    constructor(max) {
        this.max = max;
        this.count = 0;
        this.queue = [];
    }

    async acquire() {
        if (this.count < this.max) {
            this.count++;
            return Promise.resolve();
        }

        return new Promise(resolve => {
            this.queue.push(resolve);
        });
    }

    release() {
        this.count--;
        if (this.queue.length > 0 && this.count < this.max) {
            this.count++;
            const next = this.queue.shift();
            next();
        }
    }
}


/**
 * 队列处理函数
 * @param {Array} items 待处理项
 * @param {Function} handler 处理函数
 * @returns {Promise<Array>} 处理结果
 */
async function processQueue(items, handler) {
    const results = new Array(items.length);
    const semaphore = new Semaphore(CONFIG.concurrentLimit);
    const promises = [];

    for (let i = 0; i < items.length; i++) {
        const promise = (async () => {
            await semaphore.acquire();
            try {
                console.log(`处理队列项 ${i + 1}/${items.length}`);
                const result = await handler(items[i], i);
                results[i] = result;
            } catch (error) {
                console.error(`处理队列项 ${i + 1} 失败:`, error);
                // 可以考虑更完善的错误处理机制
                // 比如将错误信息记录到日志文件，或者根据错误类型进行不同的处理
                throw error;
            } finally {
                // 在 finally 语句块中统一进行等待
                if (i < items.length - 1) {
                    console.log(`等待 ${CONFIG.requestInterval}ms 后处理下一项...`);
                    await delay(CONFIG.requestInterval);
                }
                semaphore.release();
            }
        })();
        promises.push(promise);
    }

    await Promise.all(promises);
    return results;
}


/**
 * 
 * @param {Array} items 待处理项
 * @param {Function} handler 处理函数
 * @returns {Promise<Array>} 处理结果
 */
async function processItemsConcurrently(items, processor) {
    // 使用 Promise.all 并行处理所有项目
    const promises = items.map((item, index) => processor(item, index));
    return Promise.all(promises);
  }

/**
 * 带重试机制的翻译请求
 * @param {string} text 待翻译文本
 * @param {string} role 翻译角色提示
 * @param {Object} context 翻译上下文
 * @param {string} context.type 翻译类型 ('toc'|'content')
 * @param {string} context.sectionId 所属章节ID
 * @param {number} context.index 在章节中的索引
 * @returns {Promise<string>} 翻译结果
 */
async function translateWithRetry(text, role, context = {}) {
    const { type = '未知', sectionId = '未知', index = -1 } = context;
    const contextInfo = `类型: ${type}, 章节: ${sectionId}, 索引: ${index}`;
    
    for (let i = 0; i < CONFIG.maxRetries; i++) {
        try {
            console.log(`开始翻译 [${contextInfo}], 长度: ${text.length} 字符`);
            const response = await openai.chat.completions.create({
                max_tokens: 4096,
                stream: false,
                temperature: 0.1,
                model: process.env.OPENAI_MODEL_ID,
                messages: [
                    { role: "system", content: role },
                    { role: "user", content: text.trim() }
                ],
            });
            console.log(`翻译成功 [${contextInfo}]`);
            return response.choices[0].message.content;
        } catch (error) {
            console.error(`翻译失败 [${contextInfo}] (尝试 ${i + 1}/${CONFIG.maxRetries}):`, error.message);
            if (i < CONFIG.maxRetries - 1) {
                console.log(`等待 ${CONFIG.retryDelay}ms 后重试...`);
                await delay(CONFIG.retryDelay);
            } else {
                throw new Error(`翻译失败 [${contextInfo}]，已达到最大重试次数: ${error.message}`);
            }
        }
    }
}

/**
 * 将内容按标题拆分成多个部分
 * @param {string} content 原始内容
 * @returns {Array} 拆分后的部分
 */
function splitContent(content) {
    console.log('开始拆分内容...');
    // 统一换行符为 \n
    content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

    // 按标题拆分内容
    const sections = content.split(/^(#{1,2}\s.+(?:\n+|$))/m);
    let result = [];
    let currentSection = null;

    // 遍历拆分后的部分
    for (let i = 1; i < sections.length; i += 2) {
        const headerWithNewlines = sections[i];
        const [header, ...newlines] = headerWithNewlines.split('\n');
        const text = sections[i + 1] || '';

        // 创建当前部分对象
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

        // 遍历当前部分的每一行
        for (let line of lines) {
            const lineLeadingSpace = line.match(/^(\s*)/)[1];

            // 如果当前子部分长度超过最大长度，则将其添加到sections中
            if (currentSubSection.length + line.length > CONFIG.maxSectionLength) {
                currentSection.sections.push(currentSubSection);
                currentSection.leadingSpaces.push(currentLeadingSpace);
                currentSubSection = '';
                currentLeadingSpace = '';
                continue;
            }

            // 如果当前子部分为空，则设置当前行的前导空格
            if (currentSubSection === '') {
                currentLeadingSpace = lineLeadingSpace;
            }

            currentSubSection += line + '\n';
        }

        // 将剩余的子部分添加到sections中
        if (currentSubSection.trim().length > 0) {
            currentSection.sections.push(currentSubSection);
            currentSection.leadingSpaces.push(currentLeadingSpace);
        }

        result.push(currentSection);
    }

    console.log(`内容拆分完成，共 ${result.length} 个部分`);
    return result;
}

/**
 * 翻译目录部分
 * @param {Array} sections 所有部分
 * @returns {Object} 翻译映射
 */
async function translateTableOfContents(sections) {
    console.log('开始翻译目录...');
    const tocSection = sections.find(section => section.id === 'table-of-contents');
    if (!tocSection) {
        console.log("警告: 未找到目录部分");
        return {};
    }

    const linkRegex = /^\s*\*\s\[(.+)\]\(#(.+)\)\s*$/;
    const idTextMap = {};

    console.log(`目录共有 ${tocSection.sections.length} 个子部分需要翻译`);
    
    // 使用队列处理替代 Promise.all
    const translatedSections = await processItemsConcurrently(
        tocSection.sections,
        async (section, index) => {
            console.log(`翻译目录第 ${index + 1}/${tocSection.sections.length} 部分`);
            const translatedContent = await translateWithRetry(section, `
请翻译以下目录项，保持原有的格式:
1. 保持星号和缩进不变
2. 只翻译方括号[]内的文本
3. 保持圆括号()内的链接不变
4. 确保翻译的通顺性和准确性
5. 只返回翻译的结果,不返回任何无关文字`, {
                type: 'toc',
                sectionId: 'table-of-contents',
                index: index
            });

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
        }
    );

    tocSection.translations = translatedSections;

    // 更新链接
    console.log('更新目录链接...');
    Object.entries(idTextMap).forEach(([id, text]) => {
        const encodedText = encodeURIComponent(text.toLowerCase().replace(/\s+/g, '-'));
        tocSection.translations = tocSection.translations.map(translation =>
            translation.replace(new RegExp(`\\(#${id}\\)`, 'g'), `(#${encodedText})`));
    });

    console.log('目录翻译完成');
    idTextMap['free-for-dev'] = 'free-for.dev';
    idTextMap['table-of-contents'] = '目录';
    return idTextMap;
}

/**
 * 主翻译函数
 * @param {string} inputFile 输入文件路径
 * @param {string} outputFile 输出文件路径
 */
async function translateToChineseAndSave(inputFile, outputFile) {
    console.log(`开始处理文件: ${inputFile}`);
    try {
        const content = readFileSync(inputFile, 'utf8');
        const sections = splitContent(content);
        
        // 先翻译目录
        const idTextMap = await translateTableOfContents(sections, openai);

        // 提取并翻译正文内容
        const allSectionsToTranslate = sections.filter(section => section.id !== 'table-of-contents')
            .flatMap(section =>
                section.sections.map((text, index) => ({ sectionId: section.id, index, text }))
            );

        console.log(`准备翻译 ${allSectionsToTranslate.length} 个子部分`);
        const startTime = Date.now();

        // 批量翻译
        // 使用队列处理替代 Promise.all
        const translatedSections = await processItemsConcurrently(
            allSectionsToTranslate,
            async ({ sectionId, index, text }, totalIndex) => {
                console.log(`翻译进度: ${totalIndex + 1}/${allSectionsToTranslate.length}`);
                let translatedContent = await translateWithRetry(text, `
    请将Markdown文本翻译成中文，同时遵守以下规则:
    1. 严格保持原文的Markdown格式不变，包括但不限于标题、列表、代码块、引用等
    2. 专有名词、缩写等保留英文
    3. 代码块、命令行指令等技术内容保持原样不翻译
    4. 调整语序使翻译符合中文表达习惯，同时保持原意
    5. 保持原文的链接格式不变，只翻译链接文本
    6. 只返回翻译的结果,不返回任何无关文字`, {
                    type: 'content',
                    sectionId: sectionId,
                    index: index
                });
    
                translatedContent = translatedContent.replace("(#table-of-contents)", "(#目录)");
                return { sectionId, index, content: translatedContent };
            }
        );

        // 计算翻译用时
        const duration = (Date.now() - startTime) / 1000;
        console.log(`翻译完成，用时 ${duration.toFixed(1)} 秒`);

        // 组织翻译结果
        console.log('整理翻译结果...');
        sections.forEach(section => {
            if (section.id !== 'table-of-contents') {
                section.translations = translatedSections
                    .filter(ts => ts.sectionId === section.id)
                    .sort((a, b) => a.index - b.index)
                    .map(ts => section.leadingSpaces[ts.index] + ts.content);
            }
        });

        // 生成最终内容
        const translatedContent = sections.map(section => {
            const headerLevel = section.header.match(/^(#+)/)[1];
            const newHeader = idTextMap[section.id] ? `${headerLevel} ${idTextMap[section.id]}` : section.header;
            console.log(`翻译标题 idTextMap[${section.id}]: ${section.header} -> ${newHeader}`);
            return [newHeader, ...section.translations].join('\n\n');
        }).join('\n\n');

        // 保存结果
        writeFileSync(outputFile, translatedContent.trim());
        console.log(`翻译结果已保存到: ${outputFile}`);
    } catch (error) {
        console.error('翻译过程出错:', error);
        throw error;
    }
}

// 主程序入口
const inputFile = process.argv[2];
const outputFile = process.argv[3] || 'README.md';

if (!inputFile) {
    console.error('请指定输入文件路径');
    process.exit(1);
}

console.log('翻译任务开始...');
translateToChineseAndSave(inputFile, outputFile)
    .then(() => console.log('翻译任务完成'))
    .catch(error => {
        console.error('翻译任务失败:', error);
        process.exit(1);
    });
