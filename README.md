# free-for.dev

开发人员和开源作者现在有许多提供免费服务的选项，但是要找到所有这些服务并且做出明智的决策需要花费时间。

这是一个软件（[Software as a Service, SaaS](Software作为服务) 、[Platform as a Service, PaaS](平台作为服务) 、 [Infrastructure as a Service, IaaS](基础设施作为服务) 等）和其他具有免费开发者层的产品清单。

这个清单的范围仅限于基础设施开发人员（[System Administrator](系统管理员) 、 [DevOps Practitioners](DevOps从业者) 等）可能会觉得有用的东西。我们喜欢所有的免费服务，但是最好保持专注。有时候这是一条灰色地带，所以这是一个有主观意见的清单，请不要因为我没有接受你的贡献而感到冒犯。

这个清单是由 1600 多人通过 [Pull Requests](拉取请求) 、审查、想法和工作完成的。你也可以通过发送 [Pull Requests](https://github.com/ripienaar/free-for-dev) 来添加更多服务或者删除那些已经更改或不再提供的服务。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这个清单只适用于作为服务的产品，而不包括自托管软件。要被纳入这个清单，一个服务必须提供免费层，而不仅仅是一个免费试用。如果免费层是按时间划分的，那么必须至少提供一年。我们也会从安全角度考虑免费层，因此 [Single Sign-On, SSO](单点登录) 是可以的，但是我不会接受将 [Transport Layer Security, TLS](传输层安全) 限制为仅限于付费层的服务。

# 目录

  * [主要云服务提供商的免费额度限制](#%E4%B8%BB%E8%A6%81%E4%BA%91%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E5%95%86%E7%9A%84%E5%85%8D%E8%B4%B9%E9%A2%9D%E5%BA%A6%E9%99%90%E5%88%B6)
  * [云管理解决方案](#%E4%BA%91%E7%AE%A1%E7%90%86%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88)
  * [分析、事件和统计](#%E5%88%86%E6%9E%90%E3%80%81%E4%BA%8B%E4%BB%B6%E5%92%8C%E7%BB%9F%E8%AE%A1)
  * [API、数据和机器学习](#api%E3%80%81%E6%95%B0%E6%8D%AE%E5%92%8C%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0)
  * [构件仓库](#%E6%9E%84%E4%BB%B6%E4%BB%93%E5%BA%93)
  * [后端即服务](#%E5%90%8E%E7%AB%AF%E5%8D%B3%E6%9C%8D%E5%8A%A1)
  * [低代码平台](#%E4%BD%8E%E4%BB%A3%E7%A0%81%E5%B9%B3%E5%8F%B0)
  * [内容分发网络和保护](#%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9C%E5%92%8C%E4%BF%9D%E6%8A%A4)
  * [持续集成和持续部署](#%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E5%92%8C%E6%8C%81%E7%BB%AD%E9%83%A8%E7%BD%B2)
  * [内容管理系统](#%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F)
  * [代码生成](#%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90)
  * [代码质量](#%E4%BB%A3%E7%A0%81%E8%B4%A8%E9%87%8F)
  * [代码搜索和浏览](#%E4%BB%A3%E7%A0%81%E6%90%9C%E7%B4%A2%E5%92%8C%E6%B5%8F%E8%A7%88)
  * [崩溃和异常处理](#%E5%B4%A9%E6%BA%83%E5%92%8C%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86)
  * [地图数据可视化](#%E5%9C%B0%E5%9B%BE%E6%95%B0%E6%8D%AE%E5%8F%AF%E8%A7%86%E5%8C%96)
  * [托管数据服务](#%E6%89%98%E7%AE%A1%E6%95%B0%E6%8D%AE%E6%9C%8D%E5%8A%A1)
  * [设计和用户界面](#%E8%AE%BE%E8%AE%A1%E5%92%8C%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2)
  * [设计灵感](#%E8%AE%BE%E8%AE%A1%E7%81%B5%E6%84%9F)
  * [开发者博客网站](#%E5%BC%80%E5%8F%91%E8%80%85%E5%8D%9A%E5%AE%A2%E7%BD%91%E7%AB%99)
  * [域名系统](#%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F)
  * [Docker相关](#docker%E7%9B%B8%E5%85%B3)
  * [域名](#%E5%9F%9F%E5%90%8D)
  * [教育和职业发展](#%E6%95%99%E8%82%B2%E5%92%8C%E8%81%8C%E4%B8%9A%E5%8F%91%E5%B1%95)
  * [电子邮件](#%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6)
  * [功能开关管理平台](#%E5%8A%9F%E8%83%BD%E5%BC%80%E5%85%B3%E7%AE%A1%E7%90%86%E5%B9%B3%E5%8F%B0)
  * [字体](#%E5%AD%97%E4%BD%93)
  * [表单](#%E8%A1%A8%E5%8D%95)
  * [生成式AI](#%E7%94%9F%E6%88%90%E5%BC%8Fai)
  * [基础设施即服务](#%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E5%8D%B3%E6%9C%8D%E5%8A%A1)
  * [集成开发环境和代码编辑](#%E9%9B%86%E6%88%90%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E5%92%8C%E4%BB%A3%E7%A0%81%E7%BC%96%E8%BE%91)
  * [国际移动号码验证API和SDK](#%E5%9B%BD%E9%99%85%E7%A7%BB%E5%8A%A8%E5%8F%B7%E7%A0%81%E9%AA%8C%E8%AF%81api%E5%92%8Csdk)
  * [问题跟踪和项目管理](#%E9%97%AE%E9%A2%98%E8%B7%9F%E8%B8%AA%E5%92%8C%E9%A1%B9%E7%9B%AE%E7%AE%A1%E7%90%86)
  * [日志管理](#%E6%97%A5%E5%BF%97%E7%AE%A1%E7%90%86)
  * [移动应用分发和反馈](#移动应用分

## Major Cloud Providers

  * [Google Cloud Platform](https://cloud.google.com)（谷歌云平台）
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（仅限某些区域），每月1 GB从北美到所有区域的出向网络流量（除中国和澳大利亚）
    * Cloud Storage - 5GB，1GB出向网络流量
    * Cloud Shell - 基于Web的Linux shell/主要IDE，5GB持久性存储，60小时限制/周
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括背景和HTTP调用）
    * Cloud Run - 每月200万请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1 GB从北美出向网络流量
    * Google Kubernetes Engine - 一个区域集群无需集群管理费，每个用户节点按照标准Compute Engine价格收费
    * BigQuery - 每月1 TB查询，10 GB存储
    * Cloud Build - 每天120分钟构建时间
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出向流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter笔记本开发环境。
    * [idx.dev](https://idx.dev)谷歌项目IDX。在谷歌云上运行的在线VSCode。
    * 完整、详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)（亚马逊网络服务）
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出向流量和200万函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个报警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/code

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare的全球网络上免费部署无服务[serversless]（无服务代码）代码 — 每天100k次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天100k次读取请求，每天1000次写入请求，每天1000次删除请求，每天1000次列表请求，1 GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10 GB，每月100万次A类操作，每月1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天500万行读取，每天10万行写入，1 GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署您的网页应用。每月500次构建，100个自定义域名，集成SSL，无限可访问席位，无限预览部署，并通过Cloudflare Workers集成实现全栈能力。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量。

**[⬆️ 返回顶部](#目录)**

## Cloud management solutions

  * [Brainboard](https://www.brainboard.co) - 一种协同解决方案，用于从端到端可视化构建和管理云基础设施。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包括一个部署服务器和一个静态站点），Cloud 66 为您提供了在任何云上构建、部署和增长应用程序所需的一切，而无需担心“服务器相关”的问题。
  * [Pulumi](https://www.pulumi.com/) — 一种现代的基础设施即代码平台，允许您使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform 云。对于最多 500 个资源，免费提供远程状态管理和团队协作。
  * [scalr.com](https://scalr.com/) - Scalr 是一种 Terraform 自动化和协作 (TACO) 产品，用于提高基础设施和配置的协作和自动化，受 Terraform 管理。完全支持 Terraform 命令行接口 (CLI)、OPA 集成和分层配置模型。无单点登录 (SSO) 额外费用。所有功能均包含在内，每月可使用 50 次运行的免费服务。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员在 Amazon Web Services (AWS) 上自动执行部署。在我们的免费层中，开发人员（单用户）可以部署无限制的静态站点、Web 服务和环境。我们每月提供 20 次作业执行的免费服务，包括预览和自动部署，均包含在免费层中。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 为最多 5 名用户提供无限的公共和私有 [Git](https://baike.baidu.com/item/Git/1264878) （版本控制系统）仓库，附带 [CI/CD](https://baike.baidu.com/item/CI/CD/19360783) 流水线
  * [chiselapp.com](https://chiselapp.com/) — 为 [Fossil](https://fossil-scm.org/) 版本控制系统提供无限的公共和私有仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 为一个项目提供 100 MB 空间和两个用户的免费服务
  * [Codeberg](https://codeberg.org/) — 为开源项目提供无限的公共和私有 [Git](https://baike.baidu.com/item/Git/1264878) 仓库（无限协作者）。由 [Forgejo](https://forgejo.org/) 驱动。支持静态网站托管 [Codeberg Pages](https://codeberg.page/)、 CI/CD 托管 [Codeberg's CI](https://docs.codeberg.org/ci/) 和翻译托管 [Codeberg Translate](https://translate.codeberg.org/)。同时包括包托管、容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 为私有和公共仓库提供无限容量。永远免费。由 [GitLab](https://about.gitlab.com/) 和 [Sapphire](https://sapphire.gitgud.io/) 驱动。未提供 CI/CD
  * [GitHub](https://github.com/) — 为公共仓库和私有仓库（无限协作者）提供无限容量。包括 CI/CD、开发环境、静态托管、包和容器托管、项目管理和 [AI Copilot](https://github.com/features/copilot)
  * [gitlab.com](https://about.gitlab.com/) — 为最多 5 名协作者提供无限的公共和私有 [Git](https://baike.baidu.com/item/Git/1264878) 仓库。包括 CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  *

## APIs, Data, and ML

  * [JSONGrid](https://jsongrid.com) -免费工具，用于可视化、编辑和过滤复杂的 [JSON](JavaScript对象表示法) 数据，转换为美观的表格。可以保存和分享 [JSON](JavaScript对象表示法) 数据通过链接。
  * [Zerosheets](https://zerosheets.com) - 将 [Google Sheets](谷歌表格) 电子表格转换为强大的 [API](应用程序接口)，快速开发原型、网站、应用程序等。免费版每月提供500次请求。
  * [IP.City](https://ip.city) — 每天100次免费的 [IP](互联网协议) 地理位置请求
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的 [API](应用程序接口) 套件，包括 [IP](互联网协议) 地理位置、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网页抓取和自动化平台，用于为任何网站创建 [API](应用程序接口)并提取数据。提供现成的抓取器、集成的代理和自定义解决方案。免费计划每月包含5美元的平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的 [API](应用程序接口) 或自动化工具（如 [Zapier](zapier) 与 [Airtable](airtable)）自动生成图像和 [PDF](便携式文档格式) 文档。无需 [CSS](层叠样式表)/[HTML](超文本标记语言)。免费计划每月包含50张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 所有您需要的工具，以完全理解 [API](应用程序接口) 和后端的发生了什么。具有自动 [API](应用程序接口) 契约验证和监控。免费计划涵盖了每月最多20,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 立即访问120+ 个免费的 [API](应用程序接口)，以质量、一致性和可靠性为重点构建。免费计划每月

  * [Doczilla](https://www.doczilla.app/) — 一个提供生成截图或从 HTML/CSS/JS 代码直接生成 PDF 的 SaaS API（软件即服务 API）。免费计划允许每月生成 250 个文档。
  * [Doppio](https://doppio.sh/) — 一个托管 API，用于生成和私存 PDF 和截图，采用顶级渲染技术。免费计划允许每月生成 400 个 PDF 和截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动设备、网页和 IoT 应用的开源 REST API 后端。连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，它会立即创建一个全面的 REST API 平台，包括实时文档和用户管理。
  * [DynamicDocs](https://advicement.io) - 使用基于 LaTeX 模板的 JSON 到 PDF API 生成 PDF 文档。免费计划每月允许 50 次 API 调用，并可以访问模板库。
  * [Efemarai](https://efemarai.com) - 用于机器学习模型和数据的测试和调试平台。可以可视化任何计算图。开发人员每月可享受 30 次免费调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 免费的基于 Web 的 HTTP 客户端，用于发送 HTTP 请求。
  * [Export SDK](https://exportsdk.com) - 拖拽式模板编辑器的 PDF 生成 API，提供 SDK 和无代码集成。免费计划每月有 250 页，用户无限制，提供三个模板。
  * [Fern](https://buildwithfern.com) - 使用 API 定义生成流行语言的 SDK，并生成 API 参考文档网页。向 API 参考中添加 Markdown 页面，并使用 Fern 托管它们以获得完整的文档解决方案。完全支持 OpenAPI。
  * [file.coffee](https://file.coffee/) - 一个平台，你可以在这里存储最多 15MB 的文件（注册后每个文件最多 30MB）。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 屏幕订单交易信用卡支付欺诈的 API。

  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史财务数据。免费版允许每天进行100次API请求。
  * [Meteosource 天气API](https://www.meteosource.com/) - 全球天气API，提供当前和预报天气数据。预报基于多个天气模型的机器学习组合，以实现更高的准确性。免费计划每天包含400次调用。
  * [microlink.io](https://microlink.io/) - 将任何网站转换为数据，例如元标签规范化、美化链接预览、网页抓取能力或服务形式的截图。每天100次请求免费。
  * [Mindee](https://developers.mindee.com/docs) - Mindee是一种功能强大的OCR软件和API优先平台，帮助开发人员通过使用计算机视觉和机器学习对关键信息进行数据识别来标准化文档处理层，从而自动化应用程序的工作流程。免费层提供每月250页。
  * [Mintlify](https://mintlify.com) - 现代API文档标准。美观、易于维护的UI组件、应用内搜索和交互式演示场。一个编辑器免费。
  * [monkeylearn.com](https://monkeylearn.com/) - 使用机器学习进行文本分析，免费300个查询/月。
  * [MockAPI](https://www.mockapi.io/) - MockAPI是一个简单的工具，允许您快速模拟API、生成自定义数据并使用RESTful接口执行操作。MockAPI旨在成为一种原型设计/测试/学习工具。免费版每个项目包含一个资源。
  * [Mockfly](https://www.mockfly.dev/) - Mockfly是API模拟和功能标志管理的可靠开发工具。使用直观的接口快速生成和控制模拟API。免费层每天提供500次请求。
  * [Mocki](https://mocki.io) - 一个允许您创建模拟GraphQL和REST API的工具，并同步到GitHub仓库。简单的REST API可免费开发和使用，无需注册。
  * [Mocko.dev](https://mocko.dev/) - 在云中代理您的API，

  * [ROBOHASH](https://robohash.org/) - 一个可以根据任意文本生成唯一且酷炫图像的 Web 服务。
  * [SaturnCloud](https://saturncloud.io/) - 一个数据科学云环境，支持运行 Jupyter 笔记本和 Dask 集群。每月提供 30 小时的免费计算时间和 3 小时的 Dask 时间。
  * [Scraper's Proxy](https://scrapersproxy.com) — 一个简单的 HTTP 代理 API，用于网页爬取。匿名爬取，摆脱限制、屏蔽和验证码的烦恼。每月前 100 次成功爬取免费，包括 JavaScript 渲染（联系支持可获得更多）。
  * [ScrapingAnt](https://scrapingant.com/) — 一个无头 Chrome 爬取 API 和免费代理服务。支持 JavaScript 渲染、高级代理旋转和验证码避免。免费计划可用。
  * [ScraperBox](https://scraperbox.com/) — 一个使用真实 Chrome 浏览器和代理旋转的不可检测网页爬取 API。使用一个简单的 API 调用来爬取任何网页。免费计划每月有 1000 次请求。
  * [ScrapingDog](https://scrapingdog.com/) — ScrapingDog 处理数百万代理、浏览器和验证码，以提供任意网页的 HTML。在单个 API 调用中。它还包括 Web Scraper for Chrome & Firefox 和用于即时爬取需求的软件。免费计划可用。
  * [scrapinghub.com](https://scrapinghub.com) — 数据爬取，带有可视化接口和插件。免费计划包括在共享服务器上进行无限爬取。
  * [Simplescraper](https://simplescraper.io) — 在每个操作后触发您的 webhook。免费计划包括 100 个云爬取积分。
  * [Select Star](https://www.selectstar.com/) - 一个智能数据发现平台，自动分析和文档化您的数据。免费的轻量级版本，支持 1 个数据源，最高 100 张表和 10 个用户。
  * [

  * [Zuplo](https://zuplo.com/) - 免费的API管理平台，用于设计、构建和部署到Edge的API。可以在几分钟内为任何API添加API密钥身份验证、限速、开发者文档和货币化。支持 OpenAPI-native，完全使用 web 标准 API 和 Typescript 实现。免费计划提供最多10个项目、无限生产边缘环境、250个API密钥、每月10万次请求和1GB的出口流量。

**[⬆️ 返回顶部](#目录)**

## Artifact Repos

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的[构件仓库（Artifact Repository）](https://zh.wikipedia.org/wiki/%E6%9E%84件%E4%BB%93%E5%BA%93)。包括[包扫描工具XRay](https://jfrog.com/xray/)和[CI/CD工具Pipelines（前身为Shippable）](https://jfrog.com/pipelines/)，每月有2000分钟的CI/CD免费使用额度。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认[构件仓库](https://zh.wikipedia.org/wiki/%E6%9E%84件%E4%BB%93%E5%BA%93)。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的，私有的和公共的Maven和PyPi[仓库](https://zh.wikipedia.org/wiki/%E4%BB%93%E5%BA%93)。对于[开源项目](https://zh.wikipedia.org/wiki/%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE)免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中的[仓库服务](https://zh.wikipedia.org/wiki/%E4%BB%93%E5%BA%93)用于Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。有免费使用额度和免费的[开源](https://zh.wikipedia.org/wiki/%E5%BC%80%E6%BA%90%E8%BD%AF%E4%BB%B6)服务。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的[Maven仓库](https://zh.wikipedia.org/wiki/Maven)，对于公共项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — Maven、RPM、DEB、PyPi、NPM和RubyGem[包](https://zh.wikipedia.org/wiki/%E5%8C%85%E7%

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的基于云的代码片段管理器，适用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com) — 最简便和最安全的方式用于个人、团队和商业组织存储、共享和同步敏感数据。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用。公共访问组免费，用户数量无限制，历史记录和集成均无限制。同时，也提供可自托管的开源版本。
  * [cally.com](https://cally.com/) — 找到会议的完美时间和日期。简单易用，对于小组和大组都很有效。
  * [Calendly](https://calendly.com) — Calendly 是用于连接和安排会议的工具。免费计划提供每用户1个日历连接和无限的会议次数。同时还提供桌面和移动应用。
  * [Discord](https://discord.com/) — 支持公共/私人房间的聊天应用。支持 Markdown 文本、语音、视频和屏幕共享。对于无限用户免费。
  * [Telegram](https://telegram.org/) — Telegram 面向所有想要快速、可靠的消息和通话服务的用户。商业用户和小团队可能会喜欢大组、用户名、桌面应用和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建工具。支持截图、文档过程和与团队合作。同时还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 与您的团队实时交谈和协作。支持 IDE 配对编程、终端共享、语音、视频和屏幕共享。对于小团队免费。
  * [Dyte](https://dyte.io) - 最为开发者友好的实时视频和音频 SDK，具有提高生产力和参与度的协作插件。免费层包含每月 10,000 分钟的实时视频/音频使用量。
  * [evernote.com](https://evernote.com/) — 信息组织工具。共享您的笔记并与他

  * [seafile.com](https://www.seafile.com/) — 私人或云存储，文件共享，同步，讨论。云版本只有1 GB
  * [Sema](https://www.semasoftware.com/) -免费的开发者作品集工具，可以整合和快照多个存储库的贡献，生成单个报告。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，直接在浏览器中与协作者共享屏幕，无需下载或注册。免费。
  * [Slab](https://slab.com/) — 一种现代的知识管理服务，适用于团队。最多支持10个用户的免费版本。
  * [slack.com](https://slack.com/) — 无限制用户的免费版本，部分功能有限
  * [Spectrum](https://spectrum.chat/) - 免费创建公共或私人社区。
  * [StatusPile](https://www.statuspile.com/) - 一个状态页的集合。你是否可以跟踪上游提供商的状态页？
  * [Stickies](https://stickies.app/) - 视觉协作应用，用于头脑风暴、内容策划和笔记。最多支持3个墙，无限制用户和1 GB存储的免费版本。
  * [Stacks](https://betterstacks.com/) - 带有集成笔记、链接和文件存储的内容工作空间，用于浏览信息过载。永久免费的个人计划。
  * [talky.io](https://talky.io/) — 免费的组视频聊天。匿名。点对点。无需插件、注册或付款即可使用。
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持使用泳道和完整Scrum实现的看板。有集成的时间跟踪。最多支持5个用户和3个项目集的免费版本。
  * [Teamplify](https://teamplify.com) - 使用Team Analytics和智能每日立会提高团队开发流程。包括适用于远程第一团队的全功能休假管理。最多支持5个用户的小组的免费版本。
  * [Tefter

**[⬆️ 返回顶部](#目录)**

## CMS

  * [acquia.com](https://www.acquia.com/) — 为 [Drupal](Drupal 网站建设框架) 网站提供托管服务。开发者可使用免费แผน套餐。同时，还提供免费的开发工具（如 Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) — 无头 [CMS](内容管理系统)。提供基于云的内容管理和交付 [API](应用程序接口)。包含一个免费的社区空间，包括五个用户、25K 记录、48 个内容类型和 2 个语言环境。
  * [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。开发者个人计划免费。
  * [Crystallize](https://crystallize.com) — 支持电子商務的无头 [PIM](产品信息管理)。内置 [GraphQL](查询语言) API。免费版本包括无限用户、1000 个产品目录、5 GB/月带宽和 25k/月 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小项目提供免费计划。DatoCMS 是基于 [GraphQL](查询语言) 的 CMS。在较低的计划中，您每月有 100k 次调用。
  * [Directus](https://directus.io) — 无头 CMS。完全免费、开源的平台，用于在本地或云端管理资产和数据库内容。没有任何限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 无头 CMS，将 [JSON](数据交换格式) 内容直接存储在您的 [Git](版本控制系统) 仓库中。没有任何限制。
  * [kontent.ai](https://www.kontent.ai) - 一个 [CaaS](内容即服务) 平台，为您提供所有无头 CMS 的益处，同时也赋予营销人员权力。开发者计划提供两个用户、无限项目（每个项目两个环境）、500 个内容项、两个语言环境、交付和管理 API，以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
  * [Prismic](https://www.prismic.io/) — 无头 CMS。内容管理界面与完全托管和可伸缩的 API。社区计划提供

## Code Generation

  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用构建工具（No code app builder）。在自动生成的后端代码中，用户可以完全访问源代码和无限的 API 和路由，实现广泛的集成。免费计划包括三个项目、五个表格和一个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一个利用 AI 和对代码库的深入理解来帮助开发人员更快速地编写和理解代码的编码 AI 助手。Cody 为开发人员提供了选择 LLMs（包括本地推理）的选项，支持多种 IDE，支持所有流行的编程语言，并且有免费计划。免费计划每月提供开发人员 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用 DhiWise 的创新代码生成技术，将 Figma 设计无缝地转换为动态的 Flutter 和 React 应用，优化您的工作流程，并帮助您比以往任何时候都更快地创建出色的移动和 Web 体验。
  * [Codeium](https://www.codeium.com/) — Codeium 是一个免费的 AI 驱动的代码补全工具。它支持 20 多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等）和与所有重要的独立和 Web IDE 集成。
  * [Fern](https://buildwithfern.com) - 编写 API 定义并使用它们来生成流行语言（如 TypeScript、Python、Java、Go 等）中的 SDK/客户端库。完全支持 OpenAPI。免费层生成最多 20 个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于 C#。Metalama 在编译过程中生成代码的样板文件，因此您的源代码保持干净。它适用于开源项目免费，并且具有商业友好的免费层，包括三个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是一个适用于 VSCode

## Code Quality

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的工作流程，用于编写、审查和部署代码），一个用户的免费账户，以及一个拥有 100 MB 存储空间的仓库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费使用 3 分钟的会话，仅限 MS IE 9 在 Vista 下 1024 x 768 分辨率
  * [codacy.com](https://www.codacy.com/) — 为 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 提供自动代码审查，免费用于无限公共和私人仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向 DevOps 的自动化基础设施即代码审查工具，集成 GitHub、Bitbucket 和 GitLab（甚至自托管）。除了标准语言外，它还分析 Ansible、Terraform、CloudFormation、Kubernetes 等。（开源免费）
  * [CodeBeat](https://codebeat.co) — 适用于多种语言的自动代码审查平台。对于公共仓库永久免费，并集成 Slack 和电子邮件。
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查，针对开源和组织拥有的私人仓库免费（最多 4 位协作者）。对学生和机构也免费。
  * [codecov.io](https://codecov.io/) — 代码覆盖工具（SaaS），针对开源和一个私人仓库免费
  * [CodeFactor](https://www.codefactor.io) — 适用于 Git 的自动代码审查。免费版本包括无限用户，公共仓库和一个私人仓库。
  * [coderabbit.ai](https://coderabbit.ai) — 集成 GitHub/GitLab 的 AI 驱动代码审查工具。免费层包括每小时 200 个文件，3 次审查和 50 次对话，每小时。对于开源项目永久免费。
  * [codescene.io](https://codescene.io/) - CodeScene 根据开发人员如何处理代码和可视化组织因素（如团队耦合和系统掌握）来优

## Code Search and Browsing

  * [libraries.io](https://libraries.io/) — 为32种不同的包管理器提供搜索和依赖更新通知，面向开源免费
  * [Namae](https://namae.dev/) - 搜索 GitHub、Gitlab、Heroku、Netlify 等多个网站以查看项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 面向 Open Source 的全面文本代码搜索，免费
  * [tickgit.com](https://www.tickgit.com/) — 显示 `TODO` 注释（和其他标记）以确定值得改进的代码区域。
  * [CodeKeep](https://codekeep.io) - 代码片段的 Google Keep。组织、发现和共享代码片段，具有强大的代码截图工具，内置模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## CI and CD

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动的网页无障碍测试引入到您的开发工作流中。对于开源和教育目的免费使用。
  * [appcircle.io](https://appcircle.io) — 一个企业级的移动 DevOps 平台，自动化构建、测试和发布移动应用，实现更快、更高效的发布周期。免费使用，最大构建时间为 30 分钟，每次构建 20 次，1 个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — 适用于 Windows 的持续集成服务，免费用于开源项目。
  * [Argonaut](https://argonaut.dev/) - 在云中部署应用和基础设施，仅需几分钟。支持在 Kubernetes 和 Lambda 环境中进行定制和第三方应用部署。免费版本允许为 5 个域和 2 个用户部署无限应用。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的持续集成和交付。每月 200 次免费构建，构建时间 10 分钟，2 名团队成员。开源项目可获得 45 分钟构建时间、+1 并发和无限团队大小。
  * [buddy.works](https://buddy.works/) — 一个持续集成和交付工具，提供 5 个免费项目和 1 个并发运行（120 次执行/月）。
  * [Buildkite](https://buildkite.com) CI 流水线免费，适用于 3 名用户和 5,000 次任务/月。测试分析免费开发人员版本，包括每月 100,000 次测试执行，开源项目可获得更多免费包含。
  * [bytebase.com](https://www.bytebase.com/) — 数据库持续集成和交付与 DevOps。免费使用，适用于少于 20 名用户和 10 个数据库实例。
  * [CircleCI](https://circleci.com/) — 全面免费计划，包含主机托管持续集成和交付服务的所有功能，适用于 GitHub、GitLab 和 BitBucket 存储库。提供多种资源类别、Docker、Windows、Mac OS 和 ARM

## Testing

  * [Applitools.com](https://applitools.com/) — 为 Web、原生移动应用和桌面应用提供的智能视觉验证。与几乎所有自动化解决方案（如 Selenium 和 Karma）和远程运行器（Sauce Labs、Browser Stack）集成。开源免费。单用户有限的检查点每周免费。
  * [Appetize](https://appetize.io) — 在基于云的 Android 手机/平板电脑模拟器和 iPhone/iPad 模拟器上测试您的 Android 和 iOS 应用，直接在您的浏览器中。免费套餐包括两个并发会话，每月使用时间为 30 分钟。不限制应用大小。
  * [Apptim](https://apptim.com) — 一个移动测试工具，允许没有性能工程技能的人评估应用的性能和用户体验（UX）。使用您自己的设备的桌面版本 100% 免费，在 iOS 和 Android 上进行无限次测试。
  * [Argos](https://argos-ci.com) - 开源的视觉测试，适用于开发人员。无限项目，每月 5,000 张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一个连续enchmarking 工具套件，用于捕获 CI 性能回归。所有公开项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动浏览器测试，[开源免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级测试自动化工具，用于 Web 应用程序。易于学习，不需要编码。在您自己的计算机上可以免费运行无限次测试。您还可以获取云监控和 CI/CD 集成，需额外付费。
  * [Checkly](https://checklyhq.com) - 面向现代 DevOps 的代码优先合成监控。以传统提供商的一小部分价格监控您的 API 和应用程序。由监控即代码工作流和 Playwright 提供支持。为开发人员提供慷慨的免费套餐。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否遵循

  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查 webhooks（Webhook，[网络钩子](https://zh.wikipedia.org/wiki/Webhook)）。可以转发到 localhost 或从历史记录中重放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用 Java 或 TypeScript 构建可扩展的 UI，利用集成工具、组件和设计系统更快地迭代、设计更好、简化开发流程。提供无限项目和五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成期间，使用唯一 URL 调试和检查 webhooks 和 HTTP 请求。完全免费，可以创建无限 URL 并接受推荐。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 webhooks、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置 webhooks 并通过推送通知和电子邮件监控它们。

**[⬆️ 返回顶部](#目录)**

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 全面的应用安全平台，涵盖SCA、SAST、CSPM、DAST、Secrets、IaC、Malware、容器扫描、EOL等。免费计划包括两个用户、扫描10个仓库、1个云、2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 在你的网络中发现受损系统
  * [Altcha.org](https://altcha.org/anti-spam) - 为网站和API提供的垃圾邮件过滤器，利用自然语言处理和机器学习技术。免费计划包括每天每个域名200个请求。
  * [atomist.com](https://atomist.com/) — 更快、更便捷地自动化各种开发任务。目前处于beta阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — Amazon Web Services（AWS）安全和合规审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) —针对公共云基础设施的高置信度指标，部分内容可在GitHub（https://github.com/unknownhad/AWSAttacks）获取，完整列表可通过API访问
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，提供不可篡改的证明来证明代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 面向云的、开发者友好的安全平台，防止.NET和Java应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单、直观的Web应用程序，用于分析和编码/解码数据，而无需处理复杂的工具或编程语言。类似于密码学和加密的瑞士军刀。所有功能都可以免费使用，无限制。开源，如果你想自行托管。
  * [DAS](https://signup.styra.com/) — Styra DAS Free，OPA授权的完整生命周期策略管理，用于创建、部署和管理
  *

**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供的细粒度授权服务。免费，适用于最高1000名月活跃用户（MAUs）和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素认证（MFA）、免密认证等功能。包括用于前端和后端应用程序的SDK。免费，适用于最高1000名MAUs和五个身份提供者。
  * [Auth0](https://auth0.com/) — 主机 Single Sign-On（SSO）。免费计划包括 25,000 名 MAUs、无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 将免密登录、一次性密码（OTPs）、双因素认证（2FA）和SSO集成到您的应用程序中，仅需几分钟即可完成。所有前端功能都包含在内。免费，适用于最高5000名MAUs。
  * [Authress](https://authress.io/) — 认证登录和访问控制，适用于任何项目的无限身份提供者。包括Facebook、Google、Twitter等。前1000次API调用免费。
  * [Authy](https://authy.com) - 在多个设备上提供双因素认证（2FA），并支持备份。可以替代Google Authenticator。免费，适用于最高100次成功认证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个用于编写、测试和部署访问策略的完整授权管理系统。提供细粒度授权和访问控制，免费，适用于最高100个月活跃主体。
  * [Clerk](https://clerk.com) — 用户管理、认证、2FA/MFA、预构建的UI组件用于登录、注册、用户资料等。免费，适用于最高10,000名月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak 身份和访问管理服务。免费，适用于最高100名用户和一个领域。
  * [Corbado](

## Mobile App Distribution and Feedback

  * [TestApp.io](https://testapp.io) - 您的首选平台，用于确保您的移动应用程序按预期工作。免费计划：一个应用程序、分析、无限版本和安装以及反馈收集。
  * [Loadly](https://loadly.io) - iOS 和 Android 测试版应用程序分发服务提供完全免费的服务，包括无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用程序部署到设备。免费计划：应用程序上传、密码保护链接、1 天过期、十次安装。
  * [InstallOnAir](https://www.installonair.com) - 在空中分发 iOS 和 Android 应用程序。免费计划：无限上传、私人链接、2 天过期（对于客人）和 60 天过期（对于注册用户）。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用程序用于测试。免费计划包括一个应用程序项目、三个应用程序版本、500 MB 存储空间和每月 100 个应用程序安装。
  * [Appho.st](https://appho.st) - 移动应用程序托管平台。免费计划包括五个应用程序、50 个每月下载和最大文件大小 100 MB。

**[⬆️ 返回顶部](#目录)**

## Management System

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预准备应用，管理一个AWS微实例免费
  * [Esper](https://esper.io) — Android设备的MDM和MAM带有DevOps，一百台设备免费，附带一个用户许可和25MB的应用存储。
  * [jamf.com](https://www.jamf.com/) — iPads、iPhones和Macs的设备管理，三个设备免费
  * [Miradore](https://miradore.com) — 设备管理服务。保持对设备群的更新，并免费安全管理无限设备。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理他们的Web应用和服务器。每月免费25次git部署
  * [runcloud.io](https://runcloud.io/) - 以PHP项目为主的服务器管理。最多可管理一台服务器免费。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，用于轻松管理和部署服务器和站点。支持一台服务器免费。

**[⬆️ 返回顶部](#目录)**

## Messaging and Streaming

  * [Ably](https://www.ably.com/) - 实时消息服务，支持presence、持久性和保证交付。免费计划包括每月300万条消息、100个高峰连接和100个高峰频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ服务。Little Lemur计划：最大1百万条消息/月，最大20个并发连接，最大100个队列，最大10,000个排队消息，多个节点位于不同的可用区（AZ）中
  * [courier.com](https://www.courier.com/) — 单一API支持推送、应用内、电子邮件、聊天、短信等多种消息通道，配备模板管理和其他功能。免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 面向开发者的多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接到云原生物联网消息代理。连接最多100台设备（无需信用卡）免费使用。
  * [knock.app](https://knock.app) – 面向开发者的通知基础设施。通过单一API调用向多个频道（如应用内、电子邮件、短信、Slack和推送）发送消息。免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟内为任何软件添加用户通知。免费计划包括每月10,000条通知+100条短信和自动呼叫。
  * [Novu.co](https://novu.co) — 开源通知基础设施，用于开发者。管理所有通信渠道（电子邮件、短信、直接消息、应用内和推送）的一站式解决方案。免费计划包括每月30,000条通知，保留期为90天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。最多100个同时连接和每天200,000条消息免费使用。
  * [scaledrone.com

## Log Management

  * [bugfender.com](https://bugfender.com/) — 每天免费记录高达100k行日志，保留期为24小时
  * [logentries.com](https://logentries.com/) — 每月免费记录高达5 GB，保留期为七天
  * [loggly.com](https://www.loggly.com/) — 单用户免费，200MB/天，保留期为七天
  * [logz.io](https://logz.io/) — 每天免费记录高达1 GB，保留期为一天
  * [ManageEngine Log360 云](https://www.manageengine.com/cloud-siem/) — Manage Engine 的日志管理服务。免费套餐提供 50 GB 的存储空间，保留期为 15 天，搜索保留期为 7 天。
  * [papertrailapp.com](https://papertrailapp.com/) — 搜索保留期为48小时，存档保留期为七天，每月50 MB
  * [sematext.com](https://sematext.com/logsene) — 每天免费记录高达 500 MB，保留期为七天
  * [sumologic.com](https://www.sumologic.com/) — 每天免费记录高达 500 MB，保留期为七天
  * [logflare.app](https://logflare.app/) — 每个应用每月免费记录高达12,960,000条日志，保留期为3天
  * [logtail.com](https://logtail.com/) — 基于 ClickHouse 的 SQL 兼容的日志管理。每月免费记录高达 1 GB，保留期为三天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费记录高达 1,000 条用户活动日志，保留期为一个月，支持高达 5 个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月免费记录高达 200 GB，保留期为 15 天

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 最多可以创建无限个项目，无限字符串和无限协作者的开源项目（Open Source）
  * [gitlocalize.com](https://gitlocalize.com) - 对私有和公有仓库都可以免费使用，无限使用
  * [Lecto](https://lecto.ai/) - 机器翻译API，免費層（每天30個免費请求，每個请求1000个翻译字符）。与Loco Translate Wordpress插件集成。
  * [lingohub.com](https://lingohub.com/) — 最多三个用户使用免费，开源项目（Open Source）永遠免費
  * [localazy.com](https://localazy.com) - 免费使用1,000个源语言字符串，无限语言，无限貢獻者，提供給初創公司和开源项目的優惠方案
  * [Localeum](https://localeum.com) - 最多1,000个字符串，单个用户，无限语言，无限项目，免費使用
  * [localizely.com](https://localizely.com/) — 对开源项目免費使用
  * [Loco](https://localise.biz/) — 最多2,000个翻译，无限译者，每个项目最多十种语言，每个项目1,000个可翻译资产，免費使用
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限免費版本，適用於最多五个用户，开源項目免費使用
  * [POEditor](https://poeditor.com/) — 最多1,000个字符串，免費使用
  * [SimpleLocalize](https://simplelocalize.io/) - 免費使用100个翻译鍵，无限字符串，无限语言，提供給初創公司的優惠方案
  * [Texterify](https://texterify.com/) - 單个用户免費使用
  * [Tolgee](https://tolgee.io) - 免費的SaaS服務，۲۰۱翻译限制，永久免費的自托管版本
  * [transifex.com](https://www.transifex.com/) — 对开源项目免費使用
  * [Translation.io](https://translation.io) -

## Monitoring

  以下是一份带有Markdown标记的翻译内容：

* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个按5分钟间隔的 uptime 监测和自定义状态页面，即使用于商业用途。通过电子邮件和 [Telegram](https://telegram.org)（Telegram 即时通讯软件）享受无限的实时通知。无需信用卡即可开始使用。
  * [Pingmeter.com](https://pingmeter.com/) - 5个 uptime 监测，间隔10分钟。监测 [SSH](https://en.wikipedia.org/wiki/Secure_Shell)（安全外壳协议）、[HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)（超文本传输协议）、[HTTPS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/HTTPS)（超文本传输协议安全版）和任何自定义的 [TCP](https://zh.wikipedia.org/wiki/TCP)（传输控制协议）端口。
  * [alerty.ai](https://www.alerty.ai) - 免费的 [APM](https://en.wikipedia.org/wiki/Application_performance_management)（应用性能管理）和监控，适用于前端（FE）、后端（BE）、数据库（DB）等，还有免费的agent运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 为24小时的指标提供免费服务，应用性能管理agent仅限于一个 [Java](https://www.java.com/)、一个 [.NET](https://dotnet.microsoft.com/)、一个 [PHP](https://www.php.net/) 和一个 [Node.js](https://nodejs.org/)。
  * [appneta.com](https://www.appneta.com/) — 免费，数据保留1小时。
  * [appspector.com](https://appspector.com/) - 远程 [iOS](https://www.apple.com/ios/)、[Android](https://www.android.com/) 和 [Flutter](https://flutter.dev/) 调试的任务控制中心。小流量使用免费（64MB的日志）。
  * [assertible.com](https://assertible.com) — 自动化 [API](https://en.wikipedia.org/wiki/API) 测试和监控。为团队和个人提供免费计划。
  * [bleemeo.com](https://bleeme

  * [statuscake.com](https://www.statuscake.com/) — 网站监控，免费测试不限量但有所限制
  * [statusgator.com](https://statusgator.com/) — 状态页监控，3个监控器免费
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控，正常运行时间监控，DNS和域名监控。免费监控10个服务器，10个正常运行时间，和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。3个位置和20个主要Web服务的数据馈送免费
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50个监控器免费
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 5个网站的免费监控，60秒间隔，公共状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 面向网络操作、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应编排平台。最多5个用户免费。
  * [instatus.com](https://instatus.com) - 在10秒内获得一个漂亮的状态页面。永久免费，无限订阅和团队。
  * [Squadcast.com](https://squadcast.com) - Squadcast是一款面向事件管理的端到端软件，旨在帮助您推广SRE最佳实践。最多10个用户的免费计划可用。
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控器，提供多种监控方式：cronjob、关键字、网站、端口、ping。25个正常运行时间检查，每3分钟检查一次，免费。通过电话、短信、电子邮件和Webhooks发送告警。
  * [Better Stack](https://betterstack.com/better-uptime) - 正常运行时间监控、事件管理、值班安排/告警和状态页面在一个产品中。免费计划包括10个监控器，3分钟检查频率和状态页面。


## Crash and Exception Handling

  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误跟踪工具，提供截图和点击轨迹记录。开源项目免费使用。
  * [bugsnag.com](https://www.bugsnag.com/) — 试用期后，每月可免费使用2000个错误报告
  * [elmah.io](https://elmah.io/) — Web 开发者错误日志和运行时监控工具。开源项目可免费使用 Small Business 订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。小团队可免费使用，年用户会话次数不超过100万。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月可免费使用3k事件/1用户。开源且易于自行托管，使用无限制。
  * [GlitchTip](https://glitchtip.com/) — 简单、开源错误跟踪。兼容开源Sentry SDK。每月可免费使用1000个事件，或可自行托管无限制使用
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时和定时任务监控。小团队和开源项目可免费使用（每月12000个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。对于[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备，前100个设备可免费使用。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5000个错误，无用户限制，保留30天
  * [sentry.io](https://sentry.io/) — Sentry实时跟踪应用异常，具有小免费计划。每月可免费使用5k个错误/1个用户，如果自行托管则无限制使用
  * [Axiom](https://axiom.co/) — 存储最多0.5 TB的日志，保留30天。包括与Vercel等平台

## Search

  * [algolia.com](https://www.algolia.com/) — 提供包含拼写容错（typo-tolerance）、相关性和界面库的托管搜索解决方案，以便轻松创建搜索体验。免费的“Build”计划包括100万条文档和每月10,000次搜索。同时，也提供[开发者文档搜索](https://docsearch.algolia.com/)功能，完全免费。
  * [bonsai.io](https://bonsai.io/) — 免费提供1 GB内存和1 GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 作为服务的统一搜索栏，基于Web的UI部件/插件，允许用户在您的产品中搜索内容、导航、功能等，提高发现度。对于每月1,000名活跃用户，免费使用，不限命令。
  * [Magny](https://magny.io) - SaaS服务，帮助实现命令面板（例如在应用内搜索），显著减少用户在应用中查找内容的时间，提升用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费提供3个索引，100K文档/索引，不限全文/向量/混合搜索，60天分析
  * [searchly.com](http://www.searchly.com/) — 免费提供2个索引和20 MB存储空间

**[⬆️ 回到顶部](#目录)**

## Education and Career Development

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供免费的数据分析、信息安全、Web开发等课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，关注 JavaScript 和 Ruby 开发的课程。
  * [免费专业简历模板和编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量经验丰富的专业人士的简历模板，支持克隆、编辑和下载，并支持 ATS 优化。
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 免费短期课程，由行业专家授课，帮助您在一小时内掌握最新的生成式 AI 工具和技术。
  * [LabEx](https://labex.io) - 通过交互式实验室和实际项目开发 Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，涵盖从区块链到 UX 设计的所有开发方面。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络和 Python 等主题的免费认证课程。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 是在线出版的 2500 多个 MIT 课程材料，免费与各地的学习者和教育者共享。YouTube 频道可在[@mitocw](https://www.youtube.com/@mitocw/featured)找到。
  * [W3Schools](https://www.w3schools.com/) - 提供 HTML、CSS、JavaScript 等 Web 开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费的在线指南，用于学习基本和高级 HTML/CSS、JavaScript 和 SQL。

**[⬆️ 返回顶部](#目录)**

## Email

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 事务性邮箱服务，每月1000封邮件免费，具有无限域名、团队成员、Webhooks和消息路由的免费计划。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮箱转发，免费创建无限邮箱别名。
  * [Antideo](https://www.antideo.com) — 每小时10个API请求，用于邮箱验证、IP和电话号码验证的免费层。不需要信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封邮件免费。
  * [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费10个Bump邮箱地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费5个Burner邮箱地址，1个邮箱，7天邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 订阅邮件服务，最多100个订阅者免费。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和发送交易邮件 - 每月10000封邮件免费。
  * [Contact.do](https://contact.do/) — 联系表单链接（Bitly用于联系表单）。
  * [debugmail.io](https://debugmail.io/) — 开发人员的易于使用的测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 每个域名最多2个邮箱免费，100MB存储空间。IMAP，POP3，SMTP，SPF/DKIM支持。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月最多发送9000封邮件，每天最多300封邮件。
  * [EmailOctopus](https://emailoctopus.com) - 最多2500个订阅者和每月10000封邮件免费。
  * [EmailJS](https://www.emailjs.com/) – 这不是一个完整

  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，使发送电子邮件变得容易。每月500个事务性电子邮件免费。
  * [temp-mail.io](https://temp-mail.io) —एक免费的临时电子邮件服务，支持同时创建多个电子邮件和转发
  * [tinyletter.com](https://tinyletter.com/) — 每月5,000个订阅者免费
  * [Touchlead](https://touchlead.app) - 一个多功能的Marketing Automation工具，具有线索管理、表单构建和自动化功能。对于有限数量的线索和自动化免费
  * [trashmail.com](https://www.trashmail.com) - 免费的可弃用电子邮件地址，支持转发和自动地址过期
  * [Tuta](https://tuta.com/) - 免费的安全电子邮件账户服务提供商，内置端到端加密，无广告，无跟踪。免费1GB存储，一个日历（Tuta还有一个[付费计划](https://tuta.com/pricing)）. Tuta也部分[开源](https://github.com/tutao/tutanota)，因此您可以自行托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证API，支持邮箱确认和可弃用电子邮件地址检测；每天25个免费电子邮件验证。
  * [verimail.io](https://verimail.io/) — 批量和API电子邮件验证服务。100个免费验证/月
  * [Zoho](https://www.zoho.com) —Initially作为电子邮件提供商，但现在提供一套服务，其中一些服务有免费计划。以下服务具有免费计划：
     - [Email](https://zoho.com/mail)免费用于5个用户。5GB/用户 & 25 MB附加文件大小限制，一个域名。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist的免费计划包括一个并发远程支持许可证和5个无人值守计算机许可证，用于无限时间，适用于专业和个人使用。
     - [S

## Feature Toggles Management Platforms

  * [ConfigCat](https://configcat.com) - ConfigCat（配置猫）是一个面向开发者的功能开关服务，具有无限团队大小、优秀的支持和合理的价格标签。免费计划最多可支持10个标志、两个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 准确无误地发布功能；在Web、移动和服务器端应用程序中管理功能标志。使用我们的托管API、部署到自己的私有云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的功能标志和A/B测试提供者，内置贝叶斯统计分析引擎。最多可支持3个用户，功能标志和实验数量无限制。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能标志、A/B测试、分析和应用配置，具有Git风格的版本控制和同步、内存、本地标志评估。最多可支持5个团队成员，功能标志和A/B测试数量无限制。
  * [Molasses](https://www.molasses.app) - 强大的功能标志和A/B测试。最多可支持3个环境，每个环境有5个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能开关管理平台。免费计划最多可支持10个标志、两个环境和无限请求。SDK、分析仪表板、发布日历、Slack通知和所有其他功能都包含在无限免费计划中。
  * [Statsig](https://www.statsig.com) - 一个用于功能管理、A/B测试、分析等的强大平台。其慷慨的免费计划提供无限座位、标志、实验和动态配置，支持最多1百万次事件每月。
  * [Abby](https://www.tryabby.com) - 开源功能标志和A/B测试。代码作为配置（Configuration as Code）和完全类型的Typescript SDK。与Next.js和React等框架有强大的集成。慷慨的免费级别和便宜的扩展选项

## Font

  * [dafont](https://www.dafont.com/) - 本网站上的字体归其作者所有，可能是免费软件（freeware）、共享软件（shareware）、试用版本（demo versions）或公共领域（public domain）。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器（Units Converter）、字体辅助工具（Font Hinter）和字体提交工具（Font Submitter）。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 商用授权的免费字体。手工挑选这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以容易快速地通过下载或链接到Google的内容分发网络（CDN）安装到网站上。
  * [FontGet](https://www.fontget.com/) - 提供多种可下载的字体，并且带有标签的整理。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个日渐增长的专业级字体集合，100%免费用于个人和商业用途。
  * [Befonts](https://befonts.com/) - 提供多种适用于个人或商业使用的独特字体。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体及其使用方式。
  * [Bunny](https://fonts.bunny.net) 面向隐私的Google Fonts
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体用于个人使用，并可以输入文本进行快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) 免费和开源服务，使用CSS将字体家族传递到网站。
  * [Fontsensei](https://fontsensei.com/) 开源的Google字体，由用户标记。同时支持CJK（汉语、日语、韩语）字体标记。
**[⬆️ 返回顶部](#目录)**

## Forms

  * [Feathery](https://feathery.io) - 功能强大、开发者友好的表单构建工具。可用于构建注册和登录、用户入门、付款流程、复杂的金融应用等。免费计划允许每月最多250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无需编码的表单后端。具有垃圾邮件过滤、电子邮件通知和自动回复、Webhook、Zapier、重定向、AJAX或POST等功能。免费计划提供无限表单、每月20次提交，并且在附带Form-Data徽标的情况下可以获得2000次额外提交。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费计划允许每月250次表单提交。现代化友好的GUI。集成 Google Sheets、Airtable、Slack、电子邮件等。
  * [Form.taxi](https://form.taxi/) — HTML表单提交的端点。具有通知、垃圾邮件拦截器和符合GDPR的数据处理。免费计划适用于基本用途。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/)- 为静态网站提供易用的HTML表单。您可以在不注册帐户的情况下开始使用，免费计划允许每月500次提交和可自定义的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，垃圾邮件保护、电子邮件通知和拖放设计器，可导出HTML。其他功能包括自定义字段规则、团队和与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
  * [formlets.com](https://formlets.com/) — 在线表单，每月无限单页表单、100次提交、电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子邮件服务，免费计划允许无限表单，每月

## Generative AI

  * [Keywords AI](https://keywordsai.co) - 最佳的 [LLM（大型语言模型）](https://baike.baidu.com/item/%E5%A4%A7%E5%9E%8B%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B) 监控平台。只需两行代码即可调用 200+ 个 LLM，且每月有 10,000 次免费请求，平台功能无需付费！
  * [Portkey](https://portkey.ai/) - 面向 [Gen AI（通用人工智能）](https://baike.baidu.com/item/%E9%80%9A%E7%94%A8%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD) 应用的控制面板，包含可观察性套件和 AI 网关。每月可免费发送和记录最多 10,000 个请求。
  * [Braintrust](https://www.braintrustdata.com/) - 为 [Gen AI](https://baike.baidu.com/item/%E9%80%9A%E7%94%A8%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD) 提供评估、提示游乐场和数据管理。免费计划每周提供最多 1,000 条私人评估记录。
  * [Findr](https://www.usefindr.com/) - 可同时搜索所有应用程序的通用搜索。具有使用您自己的信息回答问题功能的搜索助手。免费计划提供无限的统一搜索和每天 5 个共同驾驶查询。
  * [ReportGPT](https://report-gpt.io) - 由 [AI（人工智能）](https://baike.baidu.com/item/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD) 驱动的写作助手。只要您带来自己的 [API（应用程序接口）](https://baike.baidu.com/item/API/10154) 密钥，该平台即可免费使用。
  * [Clair](https://askclair.ai/) - 临床 [AI](https://baike.baidu.com/item/%E4%BA%BA

## CDN and Protection

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — CDN用于Bootstrap，Bootswatch和fontawesome.io（内容分发网络，用于分发前端框架和库）
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发服务，免费且开源，受信任的服务，保护了11％以上的所有网站，使用Cloudflare（云服务提供商）
  * [developers.google.com](https://developers.google.com/speed/libraries/) — 谷歌托管库（Google Hosted Libraries）是一个为最流行的开源JavaScript库提供的内容分发网络
  * [Stellate](https://stellate.co/) - Stellate是一个非常快速、可靠的 GraphQL API 的CDN，两个服务免費
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源CDN，支持npm、GitHub、WordPress、Deno等
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管流行的第三方JavaScript库，如jQuery，并使您能够轻松地将它们添加到Web应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
  * [Skypack](https://www.skypack.dev/) — 100％本地ES模块JavaScript CDN，每个域名每月1百万次请求免费
  * [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，只是使用Cloudflare托管文件
  * [section.io](https://www.section.io/) — 一个简单的方法来设置和管理Varnish Cache解决方案，适用于一个网站永久免费
  * [statically.io](https://statically.io/) — 用于Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资产和图像的CDN
  * [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理，从不出错的持续集成，个人使用，单一开发者，无支持，免费
  * [UNPKG](https://unpkg.com/) — npm上一切的CD

## PaaS

  * [anvil.works](https://anvil.works) - 使用Python进行Web应用程序开发，无需其他语言。免费版本无应用程序数量限制，30秒超时。
  * [appwrite](https://appwrite.io) - 无限项目数，支持WebSockets和身份验证服务，不会暂停项目。免费版本每个项目包含1个数据库，3个存储桶，5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用程序开发平台，免费使用两个项目，功能有限，但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) — 开源、跨平台、移动应用程序开发工具链，适用于Java/Kotlin开发者。商业用途免费，项目数量无限制。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，自动生成TypeScript代码的可视化CMS。内置A/B测试、内容分段和实时分析。适用于内容密集和企业电子商务网站。免费使用，月页面浏览量不超过5,000次，或用于开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，全球边缘运行JavaScript、TypeScript和WebAssembly。免费版本每天100,000次请求，月数据传输量100 GiB。
  * [domcloud.co](https://domcloud.co) – Linux主机服务，提供GitHub、SSH和MariaDB/Postgres数据库的CI/CD。免费版本存储1 GB，网络/month 1 GB，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 后端框架，使用静态分析提供自动基础设施、无样板代码等。包括免费云托管，适用于爱好者项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在AWS账户上部署Web服务、数据库等，使用Git push样式工作流。个人GitHub仓库上免费版本，适用于1名开发者。AWS费用通过AWS账单，但可以使用积分和AWS免费版本。
  * [gigalixir.com](https://gigalixir.com/) - 提供一个永不休眠的实例和一个

## BaaS

  * [Activepieces](https://www.activepieces.com) - 构建自动化工作流以在您的应用程序后端连接多个应用程序。例如，当您的应用程序触发事件时，向Slack发送消息或添加Google Sheets行。每月最多可执行5,000个任务。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse平台的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和Web后端即服务（Baas），提供1 GB的文件存储、每月50,000条推送通知和1,000个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在我们的函数运行时和托管存储中引导您的Python API，免费在线编辑器或使用您喜欢的工具进行本地构建和托管。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供构建和部署企业数字创新所需的文档和资源。提供一个全面、个人化的沙盒，包括平台、SDK和一组可用于构建和定制应用程序的组件。
  * [connectycube.com](https://connectycube.com) - 不限聊天消息、点对点语音和视频呼叫、文件附件和推送通知。适用于最多1,000名用户的应用程序。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管您的数据（带关系和可序列化ACID事务的文档）、无服务器函数和WebSockets以将更新流式传输到各种客户端。适用于小型项目免费 - 最多1M记录、5M月度函数调用。
  * [darklang.com](https://darklang.com/) - 结合编辑器和基础设施的托管语言。可在beta版本中访问，计划在beta后提供免费套餐。
  * [Firebase](https://firebase.com) — Firebase帮助您构建和运行成功的应用程序。免费的Spark计划提供身份验证、托管、Firebase ML、实

## Low-code Platform

  * [Clappia](https://www.clappia.com) — 一款低代码平台，旨在帮助用户构建具有可自定义的移动端和网页端应用的商业流程应用程序。提供拖拽式界面、离线支持、实时定位跟踪和与各种第三方服务集成等功能。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表盘。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源的低代码平台，用于在几分钟内创建内部应用程序。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。集成15+个数据库和任何API。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建商业应用程序。连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖拽式应用程序构建器构建应用程序。
  * [ReTool](https://retool.com/) — 低代码平台，用于构建内部应用程序。ReTool高度可定制。如果您可以使用JavaScript和API编写代码，则可以在ReTool中创建。免费层允许每个月最多5个用户，不限制应用程序和API连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板、运营应用程序，速度提高10倍。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud是一个基于开源的低代码平台，适用于开发者构建内部工具。通过使用ILLA的组件和操作库，开发者可以节省大量时间来构建工具。最多5个团队成员免费使用。
  * [outsystems.com](https://www.outsystems.com/) — 企业Web开发PaaS，适用于

## Web Hosting

  以下是一些免费的Web托管服务选项：
* [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费Web托管，支持 MySQL（关系型数据库管理系统），PostgreSQL（关系型数据库管理系统），CouchDB（NoSQL数据库），MongoDB（NoSQL数据库），PHP，Python，Ruby，Node.js，Elixir，Java，Deno，自定义Web服务器，通过FTP，WebDAV和SSH访问；包括邮箱，邮件列表和应用程序安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费Web托管+免费短域名，PHP，MySQL，应用程序安装器，电子邮件发送和无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费+开发者优先的部署和开发平台，尽量减少基础设施的麻烦和加速设置。
  * [Bubble](https://bubble.io/) — 可视化编程，用于构建Web和移动应用程序，无需代码，带有Bubble品牌的免费版本。
  * [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化Web托管平台，专注于提高可用性和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在应用程序平台入门级别上建立和部署三个静态站点，免费。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到Web，仅支持静态站点，永久免费，每个Google/微软账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 开发人员桌面应用程序，用于托管站点和共享公有资源（实时）。使用其精美的界面、API和/或CLI，您可以按照自己的方式工作。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上建立和托管基于Markdown的文档站点。您甚至可以从API定义文件自动生成站点的API参考。站点托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehosting

## DNS

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费公共DNS解析器（[DNS Resolver](https://zh.wikipedia.org/wiki/DNS）），快速且安全（对DNS查询进行加密），由[Cloudflare](https://zh.wikipedia.org/wiki/Cloudflare)提供。适用于绕过互联网服务提供商的DNS屏蔽，防止DNS查询窃听以及[屏蔽成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可以通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：仅为DNS解析器，不是DNS主机。
  * [1984.is](https://www.1984.is/product/freedns/) — 免费DNS服务，含API和许多其他免费DNS功能。
  * [cloudns.net](https://www.cloudns.net/) — 最多1个域名的免费DNS主机，含50条记录
  * [deSEC](https://desec.io) - 免费DNS主机，支持API，注重安全性，采用开源软件，得到[SSE](https://www.securesystems.de/)支持。
  * [dns.he.net](https://dns.he.net/) — 带有动态DNS支持的免费DNS主机服务
  * [Zonomi](https://zonomi.com/) — 免费DNS主机服务，实时DNS传播。免费计划：1个DNS区域（域名）最多10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS主机。
  * [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，免费层最多5个域名。含各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，[API支持](https://dynv6.com/docs/apis)，管理许多DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免

## Domain

  * [eu.org](https://nic.eu.org) — 免费的 eu.org 域名。申请通常在 14 天内批准。
  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## IaaS

  * [4EVERLAND](https://www.4everland.org/) — 支持 [AWS S3](Amazon Web Services Simple Storage Service) 兼容的 API、界面操作、[CLI](Command-Line Interface, 命令行接口)、以及其他上传方法，能够安全、方便、高速地从 [IPFS](InterPlanetary File System,星际文件系统) 和 [Arweave](一款基于区块链的文件存储系统) 网络上传和存储文件。注册用户可以免费获得 6 GB 的 IPFS 存储空间和 300MB 的 Arweave 存储空间。任何小于 150 KB 的 Arweave 文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2 云存储。免费 10 GB (类似 Amazon S3) 对象存储，永久有效
  * [filebase.com](https://filebase.com/) - 由区块链驱动的 S3 兼容对象存储。免费 5 GB 存储空间，有效期不限。
  * [Tebi](https://tebi.io/) - 支持 S3 兼容的对象存储。免费 25 GB 存储空间和 250GB 出站传输带宽。
  * [Idrive e2](https://www.idrive.com/e2/) - 支持 S3 兼容的对象存储。免费 10 GB 存储空间和每月 10 GB 下载带宽。
  * [C2 对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 支持 S3 兼容的对象存储。免费 15 GB 存储空间和每月 15 GB 下载量。

**[⬆️ 返回顶部](#目录)**

## Managed Data Services

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，单节点，1 CPU，1GB RAM，并且对于 PostgreSQL 和 MySQL，5GB 存储。易于迁移至更高级的计划或切换云服务。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关联数据库，具有无限的基础，1,200 行/基础和 1,000 API 请求/月
  * [Astra](https://www.datastax.com/products/datastax-astra/) — Cloud Native Cassandra 作为服务，具有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 服务器无服务 API/后端和 NoSQL 数据库服务，具有函数、Mongdb 风格的查询、键值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划具有 5GB 存储和 60/分钟 API 调用。包含 2 名开发人员。无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。 [免费层 CRFREE](https://crate.io/lp-crfree)：单节点，2 CPU，2 GiB 内存，8 GiB 存储。每个组织一个集群，无需支付方式。
  * [FaunaDB](https://fauna.com/) — 无服务器云数据库，具有原生 GraphQL、多模型访问和每日免费层，最高 100 MB
  * [Upstash](https://upstash.com/) — 无服务器 Redis，免费层最高 10,000 次请求/天，256MB 最大数据库大小和 20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — 在线实时监控和管理服务，用于 Redis，监控 1 个 Redis 实例免费
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 使用单一命令将本地主机暴露到公共 URL，无需下载，支持 HTTPS / TCP / TLS 通道。免费计划的通道生命周期为 60 分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio 扩展，用于将 IIS Express 暴露到本地网络或通过通道暴露到公共 URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi 是一个托管的 VPN 服务，允许您将 LAN-like 网络安全扩展到分布式团队中，免费计划允许创建无限网络，最多 5 人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的 Socket 服务平台，当您部署 Web Socket 服务器代码时，会提供一个 wss:// URL，同时还允许您监测其性能。
  * [localhost.run](https://localhost.run/) — 将本地运行的服务器通过通道暴露到公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 将本地运行的服务器通过通道暴露到公共 URL。提供免费的托管版本和 [开源版本](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 将本地运行的服务器通过通道暴露到公共 URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网中，无需安装，无需注册。提供免费的子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过启用 LAN-like 网络的 VPN 连接多台计算机。支持无限的对等点（Hamachi 替代品）。
  * [segment.com](https://segment.com/) — 事件转换和路由到其他第三方服务的中心。每月 100,000 事件免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun

## Issue Tracking and Project Management

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和 [SCRUM](SCRUM 是一种用于管理和完成复杂项目的框架) 软件，适用于最多 5 名团队成员
  * [asana.com](https://asana.com/) — 适用于私人项目的免费版本，支持多个协作者
  * [Backlog](https://backlog.com) — 一个平台集成了团队所有的项目需求，免费版本提供 1 个项目，10 名用户和 100MB 的存储空间
  * [Basecamp](https://basecamp.com/personal) - 任务列表、里程碑管理、类似论坛的留言板、文件共享和时间跟踪。最多支持 3 个项目、20 名用户和 1GB 的存储空间
  * [bitrix24.com](https://www.bitrix24.com/) — 内联网和项目管理工具，免费版本为无限用户提供 5GB 存储空间
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、[UML](UML 是一种用于软件建模的语言)、网络图。免费版本最多支持 15 名用户/图表，25 个表格
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克牌游戏，节省冲刺评估时间。免费版本最多支持 5 名用户，提供免费的 [Jira](Jira 是一种项目管理软件) 整合、无限视频通话、无限团队和无限会议
  * [clickup.com](https://clickup.com/) — 项目管理，免费版本支持云存储，移动应用和 [Git](Git 是一种版本控制系统) 整合
  * [Clockify](https://clockify.me) - 时间跟踪和时间表应用，允许您跨项目跟踪工作时间。无限用户，完全免费
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的架构图表，仅需几分钟，使用 Cloudcraft 视觉设计器，优化用于 [AWS](AWS 是一种云计算服务) 的智能组件，可以显示实时数据。免费

  * [Shortcut](https://shortcut.com/) - 项目管理平台。最多10个用户可永久免费使用。
  * [Tadum](https://tadum.app) - 为定期会议设计的会议议程和会议纪要应用程序，适用于最多10个人的团队，免费使用。
  * [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，适用于开源项目免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费计划具有无限任务、冲刺和工作空间，无用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从Kanban和Scrum到几乎任何运营流程。适用于无限用户，最高达1,000个数据实体的免费版{[更多详细信息](https://www.targetprocess.com/pricing/)}。
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划包括一个工作空间，具有无限任务和项目；1GB文件存储；1周项目历史；和每次视频会议最多五名参与者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。最多可供5个用户免费使用。集成了GitHub/Trello/Dropbox/Google Drive。
  * [Teaminal](https://www.teaminal.com) - 远程团队的站立式会议、回顾和冲刺规划工具。最多可供15个用户免费使用。
  * [teamwork.com](https://teamwork.com/) — 项目管理和团队聊天。适用于五个用户和两个项目的免费版。还可使用高级计划。
  * [teleretro.com](https://www.teleretro.com/) — 简单且有趣的回顾工具，包含破冰、GIF和表情符号。免费计划包括三个回顾和无限成员。
  * [testlio.com](https://testlio.com/) —问题跟踪、测试管理和beta测试平台。私人使用免费。
  * [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件共享平台，具有无限的速度、带宽、文件数量、下载次数等功能。主要针对Android开发相关文件，如APK构建、自定义ROM和修改等。但也接受其他类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单且安全的异地备份托管服务，支持[Borg Backup](Borg Backup备份工具)。提供10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。提供10 GB免费存储空间。
  * [sync.com](https://www.sync.com/) - 端到端的云存储服务。提供5 GB免费存储空间。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。提供高达10 GB免费存储空间。
  * [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时图像优化和缩放。免费套餐包括500 MB存储空间和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，在全球拥有1500+节点。提供多种图像缩放、压缩和水印功能。开放源代码插件用于响应式图像、360度图像制作和图像编辑。免费月度计划提供25GB CDN流量、25GB缓存存储和无限变换。
  * [cloudinary.com](https://cloudinary.com/) — 为网站和应用程序提供图像上传、强大的处理、存储和交付，支持Ruby、Python、Java、PHP、Objective-C等库。免费套餐包括25个月度积分，一个积分等于1000次图像变换、1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) — 提供在网页中嵌入媒体的API、响应式图像缩放和从网页中提取元素的功能。免费套餐支持每月5000个URL，每秒15个请求。
  * [filestack.com](https://www.filestack.com/) —

  * [DocsParse](https://docsparse.com/) – 使用 [GPT](通用生成模型) 的 AI 处理 [PDF](便携式文档格式)、图像，转换成 [JSON](JavaScript对象表示法)、[CSV](逗号分隔值)、[EXCEL](电子表格) 格式的结构化数据，每月可免费使用30次。


**[⬆️ 返回顶部](#目录)**

## Design and UI

  * [AllTheFreeStock](https://allthefreestock.com) - 一个精选的免费 stock 图像、音频和视频列表。
  * [Float UI](https://floatui.com/) - 一个免费的 web 开发工具，用于快速创建现代化、响应式的网站，具有时尚的设计，即使对于非设计师。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供了一个由 Ant Motion 的 motion 组件构建的模板。它有一个丰富的首页模板，下载模板代码包，可以快速使用。你也可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) —— 在开发者和设计师之间的协作中，Backlight 是一个完整的编码平台，团队可以在这里构建、文档、发布、扩展和维护设计系统。免费计划允许最多 3 个编辑器在一个设计系统上工作，拥有无限的查看者。
  * [BoxySVG](https://boxy-svg.com/app) —— 一个免费的可安装的 Web 应用程序，用于绘制 SVG 和导出 SVG、PNG、JPEG 等格式。
  * [Carousel Hero](https://carouselhero.com/) - 一个免费的在线工具，用于创建社交媒体轮播。
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，如 SVG，适用于 React、Vue 和 Svelte。
  * [clevebrush.com](https://www.cleverbrush.com/) —— 免费的图形设计/照片拼贴应用程序。他们还提供了作为组件的付费集成。
  * [cloudconvert.com](https://cloudconvert.com/) —— 将任何东西转换为任何东西。支持 208 种格式，包括视频和 GIF。
  * [CodeMyUI](https://codemyui.com) - 一个精选的 Web 设计和 UI 灵感集合，带有代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶级调色板获取灵感。
  * [coolors](https://coolors.co/) - 颜色调色板生成器。免费。


  * [walkme.com](https://www.walkme.com/) — 企业级 (Enterprise Class) 指导和参与平台（Guidance and Engagement Platform），免费计划包含三个步骤（walk-thru），每个步骤最多 5 步。
  * [Webflow](https://webflow.com) - 可视化 (WYSIWYG) 网站构建工具，支持动画和网站托管。两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 基于 tailwindcss 设计的可视化网站构建工具。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图 (flowcharts)、线框图 (wireframes)、便利贴 (sticky notes) 和思维导图 (mind maps)。创建最多 4 个免费的板块。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。一个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 创建和编辑引人入胜的、独特的图形和图片。
  * [Responsively App](https://responsively.app) - 一个免费的开发工具，用于更快、更精确的响应式 web 应用开发。
  * [SceneLab](https://scenelab.io) - 在线模拟图形编辑器，拥有不断增长的免费设计模板集合。
  * [xLayers](https://xlayers.dev) - 预览和转换 Sketch 设计文件到 Angular、React、Vue、LitElement、Stencil、Xamarin 等（免费和开源，地址：https://github.com/xlayers/xlayers）。
  * [Grapedrop](https://grapedrop.com/) — 基于 GrapesJS 框架的响应式、强大的、SEO 优化的网页构建工具。前五页免费，自定义域名无限制，所有功能和简单使用。
  * [Mastershot](https://mastershot.app) - 完全免费的浏览器内视频编辑器。无水印，最高 1080p 导出选项。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松的启动

## Design Inspiration

  * [awwwards.](https://www.awwwards.com/) - [最佳网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示他们的作品的平台。可以根据类别筛选UI/UX项目。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
  * [Landings](https://landings.dev/) - [Web截图] 根据您的偏好找到最好的登陆页面以供设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登陆页面 / UI工具包 / Web截图] Lapa Ninja是一个展示了来自互联网上最好的6025个登陆页面示例、为设计师免费的书籍和UI工具包的画廊。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登陆页面设计] 经常更新的登陆页面截图。包括桌面、平板电脑和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动设备截图] 使用我们的50,000+可搜索的移动应用程序截图库节省UI & UX研究的时间。
  * [Uiland Design](https://uiland.design/) - [移动设备截图] 探索来自非洲和世界各地领先公司的移动设备和Web UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动设备截图] 一个设计灵感库，用于展示最好的UI UX模式（iOS和Android）供设计师、开发人员和产品制作者参考。
  * [Page Flows](https://pageflows.com/) - [移动设备 / Web视频和截图] 许多移动设备和Web应用程序的完整流程的视频。包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动设备截图] 获取灵感并跟上最新的Web & 移动应用程序UI设计趋势。可以根据模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动

## Data Visualization on Maps

  * [IP Geolocation](https://ipgeolocation.io/) — 免费的开发者计划，每月可进行30,000次请求。
  * [carto.com](https://carto.com/) — 从您自己的数据和公共数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样工作的地图工具。每月五万次免费查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 适用于地图、地理空间数据存储、分析、地理编码、路由等的API和SDK，支持Web、桌面和移动设备。每月可免费使用200万个基础地图瓦片、20,000个非存储地理编码、20,000个简单路线、5,000个驾驶时间计算和5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、场所搜索和上下文感知内容来自Places API和Pilgrim SDK。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和光栅地图瓦片、地理编码、场所、路由、等值线API。每天三千次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天2,500次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月10,000次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性REST/JSON/JSONP IP地理位置查找API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 提供免费的开发者套餐，用于路由、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/) — 适用于

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 面向多个发行版的包构建服务（SUSE，EL，Fedora，Debian等）。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL的RPM包构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian的包构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE and Code Editing

  * [3v4l](https://3v4l.org/) - 免费的在线PHP shell和代码共享网站，可以在300+个PHP版本中运行代码
  * [Android Studio](https://developer.android.com/studio) — Android Studio为每种Android设备提供了最快的构建应用工具。开源IDE免费提供给所有人，是最好的Android应用开发工具。可在Windows、Mac、Linux和ChromeOS上使用！
  * [AndroidIDE](https://m.androidide.com/) — 一个开源IDE，用于在Android设备上开发基于Gradle的Android应用程序。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 协作设计API，具有实时API mock和生成文档（免费提供无限API蓝图和无限用户，配备一个管理员账户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是macOS上的一个流行的可扩展编辑器。免费模式提供了一个[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并且可以升级到高级功能。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的集合。这是一个免费的公共服务。
  * [BlueJ](https://bluej.org) — 一个免费的Java开发环境，专为初学者设计，全球数百万人使用。由Oracle提供支持，具有简单的GUI界面，帮助初学者使用。
  * [Bootify.io](https://bootify.io/) - Spring Boot应用程序生成器，支持自定义数据库和REST API。
  * [Brackets](http://brackets.io/) - Brackets是专为网络开发设计的开源文本编辑器。它轻量、易于使用、可高度定制。
  * [cacher.io](https://www.cacher.io) — 代码片段组织器，支持标签和100+编程语言。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
  * [

  * [VSCodium](https://vscodium.com/) - 面向社区驱动的，无遥测/跟踪的，自由许可的二进制分布式 [Visual Studio Code（VSCode）](https://code.visualstudio.com/) 编辑器
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件对您的编码活动进行数量化的自我指标，免费计划有限。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一种开放源码、跨平台的终端，用于无缝工作流程。内联渲染任何内容。保存会话和历史记录。由开放网络标准提供支持。支持 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 在线 [IDE](https://baike.baidu.com/item/IDE/3921320) 环境，用于在 58 个可用模板的隔离环境中编写 [Web Component](https://www.w3.org/wiki/WebComponents/)，支持 [Storybook](https://storybook.js.org/) 和测试。
  * [PHPSandbox](https://phpsandbox.io/) — 适用于 [PHP](https://www.php.net/) 的在线开发环境
  * [WebDB](https://webdb.app) - 免费的高效数据库 [IDE](https://baike.baidu.com/item/IDE/3921320)。支持服务器发现，[ERD](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E6%A8%A1%E5%9E%8B) ，数据生成，[AI](https://baike.baidu.com/item/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD/9180) ，[NoSQL](https://baike.baidu.com/item/NoSQL/6200606) 结构管理，数据库版本控制等。
  * [Zed](https://zed.dev/) - Zed 是由 [Atom](https://atom.io/) 和 [Tree-sitter](https://tree-sitter.github.io/tree-sitter/) 的创建者开发的高性能的多人编码编辑器。

**[⬆️ 返回顶部](#目录)**

## Analytics, Events and Statistics

  * [Dwh.dev](https://dwh.dev) - 数据云可观察性解决方案（Snowflake）。适用于个人使用的免费版本。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，帮助您将客户数据从数据仓库同步到 CRM、营销和支持工具。免费版本提供一个目的地来同步数据。
  * [Avo](https://avo.app/) — 简化分析发布工作流。单一事实来源跟踪计划、类型安全分析跟踪库、应用程序调试器和数据可观察性，以捕获所有数据问题在发布之前。免费适用于两个工作空间成员和 1 小时数据可观察性回顾。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版本提供高达 10K 移动应用用户，深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（Git、Github 和 Gitlab）。免费版本包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 和运营分析平台。从数据仓库同步 10 个字段到 60+ SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划适用于一个网站，3000 次浏览次数分析。
  * [Databox](https://databox.com) — 通过组合其他分析和 BI 平台来获得业务洞察和分析。免费计划提供 3 个用户、仪表板和数据源。11M 历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 2,000 次页面浏览量，适用于一个网站
  * [amplitude.com](https://amplitude.com/) — 每月 1 百万次事件，高达 2 个应用程序
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源的 Web 分析平台，提供托管服务（非商业用途免费）或自托管

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个网站：每天 1,000 次页面浏览，三个热图，三个小部件，免费的 bug 跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，具有用于 bug 重现的开发工具，实时支持的实时会话和产品分析套件。每月 1,000 个会话，具有所有功能的使用权和 7 天的保留期。
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 个会话，保留期 30 天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月 1,000 个会话，数据保留期一个月，三个用户席位。更多信息请参阅 [这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个网站：每月 1,050 次页面浏览，热图无限制，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 为一个网站每月提供 2,500 个免费会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，具有“无流量限制”，无项目限制和无抽样
  * [mouseflow.com](https://mouseflow.com/) — 为一个网站每月提供 500 个免费会话
  * [mousestats.com](https://www.mousestats.com/) — 为一个网站每月提供 100 个免费会话
  * [smartlook.com](https://www.smartlook.com/) — 网页和移动应用的免费套餐（每月 1,500 个会话），三个热图，一个漏斗，1 个月的数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。最多 5,000 次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 录制和观看访问者如何使用您的网站或应用程序。适

## International Mobile Number Verification API and SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询JSON API，每月100个API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证的免费、快速、可靠的JSON API，每月1000个请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 全面的跨平台订阅管理平台，提供分析（analytics）、A/B 测试（A/B testing）、Apple 搜索广告（Apple Search Ads）、远程配置（remote configs）和增长工具（growth tools），用于优化应用内购买和赋能（monetization）。支持 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 web。免费使用，最高月收入为 10,000 美元。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，以便将业务扩展到全球并进入新的市场（购买力平价）。免费计划包括每月 7,500 个 API 请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和内置的赋能工具，支持 iOS、Android、Stripe 和 Paddle。免费使用，最高月收入为 10,000 美元。
  * [Adapty.io](https://adapty.io/) – 一站式解决方案，开源 SDK 支持移动应用内订阅集成，支持 iOS、Android、React Native、Flutter、Unity 或 web 应用。免费使用，最高月收入为 10,000 美元。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法定货币汇率。免费层提供每月 10,000 次调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。免费的 DEVELOPER 计划可用，每月 1,000 次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币汇率和历史数据。演示 API 提供每分钟 30 次调用和每月 10,000 次调用限制。
  * [CurrencyApi](https://currencyapi.net/) — 提供实时货币汇率，支持物理货币和加密货币，支持 JSON 和 XML 格式。免费层提供每月 1,250 次 API 请求。
  * [currenc

## Docker Related

  * [canister.io](https://canister.io/) — 为开发人员提供 20 个免费的私有仓库，为团队提供 30 个免费的私有仓库，以构建和存储 Docker 镜像
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费版提供 1 GB 的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 一个免费的私有仓库和无限公共仓库用于构建和存储 Docker 镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的 Docker playground 
  * [quay.io](https://quay.io/) — 使用无限免费公共仓库构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名和短暂的 Docker 镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云（Vagrant云托管'). Vagrant_box 主机托管.
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个替代公共盒子索引

**[⬆️ 返回顶部](#目录)**

## Dev Blogging Sites

  * [BearBlog](https://bearblog.dev/) - 极简主义的、由 Markdown 驱动的博客和网站构建工具（Minimalist, Markdown-powered blog and website builder）。
  * [Dev.to](https://dev.to/) - 程序员分享想法和互相帮助的平台（Where programmers share ideas and help each other grow）。
  * [Hashnode](https://hashnode.com/) — 开发人员无忧无虑的博客软件（Hassle-free Blogging Software for Developers）。
  * [Medium](https://medium.com/) — 更深思熟虑地思考与你相关的事务（Get more thoughtful about what matters to you）。
  * [AyeDot](https://ayedot.com/) — 免费分享你的想法、知识和故事，形式为现代多媒体短格式 Miniblogs（Share your ideas, knowledge, and stories with the world for Free in the form of Modern multimedia short-format Miniblogs）。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站的观众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个建立在 [GitHub](https://github.com/) (GitHub代码托管平台)议题上的轻量级评论小部件。使用 GitHub 议题用于博客评论、wiki 页面等！
  * [Disqus](https://disqus.com/) - Disqus 是一个全网使用的社区平台，已被成千上万个网站所采用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源评论平台，按照“一个管理员在几个域名上拥有完全控制权”的原则，你可以支付任意金额。“One moderator on a few domains with complete control over behavior & appearance”
  * [IntenseDebate](https://intensedebate.com/) - 为 [WordPress](https://wordpress.com/)、[Tumblr](https://www.tumblr.com/)、[Blogger](https://www.blogger.com/) 等网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 一个基于 Aws Lambda 和 Chrome 的截图 API。支持全页面截图、截图时间和视口尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，例如元标签规范化、链接预览、网页抓取功能或截图服务。每天有 250 个请求的免费额度。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图 API 通过简单的 API 调用生成任何网站的截图。可扩展且托管在 Google Cloud 上。每月提供 100 张免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 捕获任何网站的高度可定制的快照。每月免费 100 张快照
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 捕获每月 100 张快照，png、gif 和 jpg 格式，包括全长截图，不仅仅是首页
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费套餐每天提供最多 500 页。自 2017 年起提供免费套餐。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名智能 API 服务。每月免费 100 个请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为 jpg、png 或 pdf。捕获全页面截图，调整视口，并注入自定义代码。每月 150 张图片的免费套餐。
  * [Screenshots](https://screenshotson.click) — 您的截图 API。具有高度可定制的截图选项。每月免费 100 张截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代的 Flutter 在线集成开发环境（Integrated Development Environment，IDE），它是创建、调试和构建跨平台项目的最佳选择。可以使用 Flutter 构建 iOS（无需 Mac）和 Android 应用程序。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一款完全托管的移动应用程序持续集成/持续部署（CI/CD）工具。您可以使用图形用户界面（GUI）构建、测试和部署应用程序。免费版本提供每月 500 分钟的免费使用时间和一个带有 2.3 GHz 处理器和 8 GB RAM 的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) -  FlutterFlow 是一个基于浏览器的拖放界面，用于构建移动应用程序，使用 Flutter 进行开发。

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的x86虚拟机，能够运行Linux和Windows 2000。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个OpenRISC虚拟机，能够带有网络支持运行Linux。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，能够直接在浏览器中运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流来实现设计隐私，以便组织遵守 [GDPR（通用数据保护条例)](https://www.bearer.sh/) 和其他法规。免费版本仅限于较小的团队和 [SaaS（软件即服务)](https://www.bearer.sh/) 版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，包括从 [GDPR](https://www.osano.com/) 代理到 [Cookie](https://www.osano.com/) 横幅等所有内容。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 [Cookie](https://www.iubenda.com/) 政策以及同意管理。免费版本提供有限的隐私和 [Cookie](https://www.iubenda.com/) 政策，以及 [Cookie](https://www.iubenda.com/) 横幅。
  * [Cookiefirst](https://cookiefirst.com/) - [Cookie](https://cookiefirst.com/) 横幅、审计和多语言同意管理解决方案。免费版本提供一次扫描和单个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，但访客数量有限。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理 ([DSARs](https://www.concord.tech/)) 和数据映射。免费版本包括核心同意管理功能，他们还为经过验证的开源项目提供更高级的免费版本。

**[⬆️ 返回顶部](#目录)**

## Miscellaneous

  * [BackgroundStyler.com](https://backgroundstyler.com) - 在社交媒体上分享您的代码、文本或图像的美观截图。
  * [BinShare.net](https://binshare.net) - 创建和共享代码或二进制文件。可作为美丽的图像共享（例如 Twitter / Facebook帖子）或作为链接共享（例如聊天或论坛）。
  * [Blynk](https://blynk.io) — 一种 [SaaS](Software-as-a-Service，软件即服务) 平台，提供 [API](Application Programming Interface，应用程序接口) 控制、构建和评估 [IoT](Internet of Things，物联网) 设备。免费开发者计划包括5个设备、免费云和数据存储。移动应用也可用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个具有强大的多行计算器的笔记应用（[PWA](Progressive Web App，渐进式网络应用））。
  * [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图格式创建和共享代码片段。通常用于在 Twitter 或博客帖子中美观地分享/展示代码片段。
  * [Code Time](https://www.software.com/code-time) - 一种用于 [VS Code](Visual Studio Code，视觉工作室代码编辑器)、[Atom](一种文本编辑器)、[IntelliJ](集成开发环境)、[Sublime Text](一款文本编辑器) 等的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建优异的快照以在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图以在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排按时或定期的 [Webhooks](Web钩子，用于在线应用程序之间的数据传递)。免费计划允许 5 个自定义调度。
  * [cron-job.org](https://cron-job.org) - 在线 [Cron](一种 Unix 计划任务) 服务。无限个作业免费。
  * [dat

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) —  最多支持 2 个设备，无会话数量和时长限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需支持和设备永久访问（每天 2 个免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施

**[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 免费/付费的assets，如精灵图（sprite）、瓦片集（tile set）和角色包（character packs）。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自游戏艺术家们的免费游戏assets。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费的assets，如2D、3D、音频（Audio）、GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏assets，如音乐、声音、精灵图和GIF图。
  * [CraftPix](https://craftpix.net) — 免费/付费的assets，如2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件（game kits）。
  * [Game Icons](https://game-icons.net/) - 免费的SVG/PNG图标，提供CC-BY许可证。
  * [LoSpec](https://lospec.com/) — 在线工具，用于创建像素艺术（pixel art）和其他数字艺术，提供许多教程和调色板（palette）供选择。
  * [ArtStation](https://www.artstation.com/) - 2D、3D资产和音频的市场（MarketPlace），包括免费和付费的资源，如图标、瓦片集和游戏套件，也可以用来展示您的艺术作品集（art portfolio）。
  * [Rive](https://rive.app/community/) - 社区assets，以及使用免费计划创建您自己的游戏assets。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形（low poly）3D资产。
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费的3D模型和PBR材质，用于创建纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0 Universal许可证）的2D、3D、音频和UI游戏assets。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（具有可变解析度）、模型、HDRIs和brushes，提供免费插件来

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 为 Web 开发者提供的常用工具，包括 CSS压缩、CSS 解压缩、图像优化、图像缩放、大小写转换、CSS 验证、JavaScript 编译、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月提供最多 200 小时的音频转录服务，免费使用。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的 `*.localhost.direct` 通配符公共 CA 签名的 SSL 证书，支持子域名，用于本地开发。
  * [Framacloud](https://degooglions-internet.org/en/) — 由法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费开源软件和 SaaS 列表。
  * [github.com — 开源软件](https://github.com/tvvocold/FOSS-for-Dev) — 开发者的开源软件中心。
  * [GitHub 教育版](https://education.github.com/pack) — 为学生提供的一套免费服务，需注册。
  * [Markdown 工具](https://markdowntools.com) - 将 HTML、CSV、PDF、JSON 和 Excel 文件与 Markdown 进行转换的工具。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒、工具和构建 Microsoft 365 平台解决方案所需的资源。该订阅包含 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续期，如你积极参与开发（通过遥测数据和算法衡量）。
  * [Pyrexp](https://pythonium.net/regex) — 基于 Web 的正则表达式测试和可视化工具，用于调试正则表达式。
  * [RedHat 开发者](https://developers.redhat.com) — 为开发者提供的 Red Hat 产品的免费访问，包括 RHEL、OpenShift、CodeReady 等，仅限个人计划。同时提供免费的电子书参考。
  * [sms