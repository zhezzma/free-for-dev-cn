# free-for.dev

开发人员（Developers）和开源作者（Open Source authors）现在有很多提供免费试用层（free tiers）的服务，但要找到所有这些服务并对其进行评估需要花费大量时间。

这是一个软件（SaaS（软件即服务）、PaaS（平台即服务）、IaaS（基础设施即服务）等）以及其他配套服务的免费开发者层列表。

该列表的范围仅限于基础设施开发人员（系统管理员（System Administrator）、DevOps 从业人员（DevOps Practitioners）等）可能会觉得有用的内容。我们喜欢所有提供的免费服务，但最好还是要保持话题的聚焦。有时这是一个灰色地带，所以这是一种主观的意见；如果我不接受你的贡献，请不要感到冒犯。

该列表是由1600多个人通过Pull Requests（拉取请求）、审查、想法和工作得出的结果。你也可以通过发送[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务或移除那些提供的服务已更改或已退役的服务。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅适用于即服务（as-a-Service）方案，而不适用于自托管软件（self-hosted software）。要被列入此列表，服务必须提供免费层（free tier），而不仅仅是免费试用（free trial）。如果是按时间分段的，则免费层必须至少持续一年。此外，我们还从安全角度考虑免费层，因此单点登录（SSO）是可以接受的，但我不会接受将TLS（传输层安全协议）限制在付费层的服务。

# 目录

  * [主要云服务提供商的永久免费限制](#主要云服务提供商的永久免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [构件仓库](#构件仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成和持续部署](#持续集成和持续部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面](#设计和用户界面)
  * [设计灵感](#设计灵感)
  * [开发者博客平台](#开发者博客平台)
  * [域名系统](#域名系统)
  * [与Docker相关](#与Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成性人工智能](#生成性人工智能)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息和流媒体](#消息和流媒体)
  * [杂

## 主要云服务提供商的永久免费限制

  * [Google Cloud Platform](https://cloud.google.com)（谷歌云平台）
    * App Engine - 每天28个前端实例小时，每天9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB硬盘，5GB快照存储（仅限于某些区域），每月从北美到所有区域的1 GB网络出口（除中国和澳大利亚）
    * Cloud Storage - 5GB，1GB网络出口
    * Cloud Shell - 基于Web的Linux shell/主要IDE，具有5GB的持久存储。每周60小时限制
    * Cloud Pub/Sub - 每月10GB的消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月从北美到1 GB网络出口
    * Google Kubernetes Engine - 不收取一个区域集群的管理费。每个用户节点按照标准Compute Engine定价收费
    * BigQuery - 每月1 TB的查询，每月10 GB的存储
    * Cloud Build - 每天120分钟构建时间
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出口
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境。
    * [idx.dev](https://idx.dev) Google Project IDX. 在Google Cloud上运行的在线VSCode。
    * 全面、详细的列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)（亚马逊网络服务）
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个报警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws

    * [Workers](https://developers.cloudflare.com/workers/) - 在 Cloudflare 全球网络上免费部署无服务器代码——每天100k次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天 100k 次读取请求，每天 1000 次写入请求，每天 1000 次删除请求，每天 1000 次列表请求，1 GB 存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10 GB，每月 100 万次 Class A 操作，每月 1 亿次 Class B 操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天 500 万行读取，每天 10 万行写入，1 GB 存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上开发和部署 Web 应用。每月 500 次构建，100 个自定义域名，集成 SSL，无限可访问席位，无限预览部署，以及通过 Cloudflare Workers 集成的全栈功能。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月 1TB 免费（出站）流量。

**[⬆️ 回到顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 协作解决方案，用于从端到端可视化构建和管理云基础设施。
  * [Cloud 66](https://www.cloud66.com/) - 适用于个人项目的免费服务（包括一个部署服务器和一个静态站点），Cloud 66 为您提供了在任何云上构建、部署和增长应用程序所需的一切，而无需担心“服务器事务”。
  * [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许您使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。对于多达 500 个资源，为远程状态管理和团队协作提供免费服务。
  * [scalr.com](https://scalr.com/) - Scalr 是 Terraform Automation and Collaboration (TACO) 产品，用于改进 Terraform 管理的基础设施和配置的协作和自动化。完全支持 Terraform CLI，集成了 OPA，并具有分层配置模型。没有单点登录税。所有功能都包含在内。每月可免费使用 50 次运行。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上自动化部署。在我们的免费层中，单个开发者可以部署无限的静态站点、Web 服务和环境。我们每月提供 20 次免费作业执行，预览和自动部署包含在免费层中。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 支持最多 5 名用户的无限制公共和私有 Git 仓库，含有 [Pipelines](https://confluence.atlassian.com/bitbucket/pipelines-792497806.html（Continuous Integration/Continuous Deployment，持续集成/持续交付）） 
  * [chiselapp.com](https://chiselapp.com/) — 无限制的公共和私有 [Fossil](https://fossil-scm.org/（一种版本控制系统）) 仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 一个具有 100 MB 空间和两个用户的免费项目
  * [Codeberg](https://codeberg.org/) — FaceBook 的开源代码仓库的无限制公共和私有 Git 仓库，适用于免费和开源项目（具有无限制的协作者）。由 [Forgejo](https://forgejo.org/（一个 Git 服务器）) 提供支持。支持静态网站托管 [Codeberg Pages](https://codeberg.pages/（类似于 GitHub Pages）) 和 CI/CD 托管 [Codeberg's CI](https://docs.codeberg.org/ci/（持续集成）) 以及翻译托管 [Codeberg Translate](https://translate.codeberg.org/（托管翻译）)。包括软件包和容器托管、项目管理以及问题跟踪功能
  * [GitGud](https://gitgud.io) — 无限私有和公共仓库。永久免费。由 [GitLab](https://gitlab.com/（一个 DevOps 平台）) 和 [Sapphire](https://sapphire.gitgud.io/（一个 Git 仓库管理器）) 提供支持。CI/CD 不包含在内。
  * [GitHub](https://github.com/) — 无限制的公共仓库和无限制的私有仓库（具有无限制的协作者）。包括 CI/CD、开发环境、静态托管、软件包和容器托管、项目管理以及 AICopilot
  * [gitlab.com](https://about.gitlab.com/) — 无限制的公共和私有 Git 仓库，支持最多 5 名协作者。包括 CI/CD、静态托管、容器注册、项目管理和

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑和过滤复杂的JSON数据到漂亮的表格中。可以保存和共享JSON数据通过链接。
  * [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转换为强大的API，快速开发原型、网站、应用程序等。免费版每月有500个请求。
  * [IP.City](https://ip.city) — 每天100个免费的IP定位请求
  * [Abstract API](https://www.abstractapi.com) — 为各种用例提供API套件，包括IP定位、性别检测、电子邮件验证等。
  * [Apify](https://www.apify.com/) — Web爬虫和自动化平台，用于为任何网站创建API和提取数据。预制爬虫、集成代理和自定义解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 自动生成图像和PDF文档，使用简单的API或自动化工具，如Zapier和Airtable。无需CSS/HTML。免费计划每月包含50张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 所有您需要的工具，用于完全理解API和后端发生了什么。具有自动API契约验证和监控。免费计划涵盖每月最多20,000个请求的服务器。
  * [APIVerve](https://apiverve.com) - 立即访问120+个免费API，具有质量、一致性和可靠性。免费计划每月最多包含50个API令牌。
  * [Arize AI](https://arize.com/) - 机器学习可观察性，用于监控和分析模型问题，例如数据质量和性能漂移。最多两个模型免费。
  * [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于开发单页Web应用程序，可即时访问。可用于Java、Node.js、Perl、Python和Ruby。
  * [Beeceptor](https://beeceptor.com) - 模拟Rest API仅需几秒钟，伪造API响应等。

  * [Doczilla](https://www.doczilla.app/) — 一个基于 [HTML](https://zh.wikipedia.org/wiki/HTML)/[CSS](https://zh.wikipedia.org/wiki/CSS)/[JS](https://zh.wikipedia.org/wiki/JavaScript) 代码的 [API](https://zh.wikipedia.org/wiki/API)，用于直接生成截图或 [PDF](https://zh.wikipedia.org/wiki/PDF) 文件。免费计划允许每月生成250个文档。
  * [Doppio](https://doppio.sh/) — 一个托管的生成 [PDF](https://zh.wikipedia.org/wiki/PDF) 和截图的 [API](https://zh.wikipedia.org/wiki/API)，它使用顶级渲染技术，并可以私密存储这些文件。免费计划允许每月生成400个 [PDF](https://zh.wikipedia.org/wiki/PDF) 文件或截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 一个开源的针对 [移动应用](https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8B%95%E5%BA%94%E7%94%A8)、[Web](https://zh.wikipedia.org/wiki/Web) 和 [IoT](https://zh.wikipedia.org/wiki/IoT) 应用的后端 [REST API](https://zh.wikipedia.org/wiki/REST)。你可以连接任何 [SQL](https://zh.wikipedia.org/wiki/SQL)/[NoSQL](https://zh.wikipedia.org/wiki/NoSQL) 数据库、文件存储系统或外部服务，当你这样做时，它会立即创建一个包含实时文档和用户管理的综合 [REST API](https://zh.wikipedia.org/wiki/REST) 平台。
  * [DynamicDocs](https://advicement.io) - 一个使用基于 [LaTeX](https://zh.wikipedia.org/wiki/LaTeX) 模板的 [JSON](https://zh.wikipedia.org/wiki/JSON) 到 [PDF](https://zh.wikipedia.org/wiki/PDF) [API](https://zh.wikipedia.org/wiki/API) 生成 [PDF](https://zh.wikipedia.org/wiki/PDF) 文档的工具。免费计划允许每月进行50次 [API](https://zh.wikipedia.org/wiki/API) 调用，并提供访问模板库的权限。
  * [Efemarai](https://efemarai.com) - 一个

  * [Market Data API](https://www.marketdata.app) - 提供实时和历史金融数据，包括股票、期权、共同基金等。免费计划允许每天进行100次API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预测采用机器学习结合多个天气模型以实现更高的准确性。免费计划每天提供400次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，例如元标签标准化、链接预览、网页抓取能力或截图服务。每天100次请求免费。
  * [Mindee](https://developers.mindee.com/docs) – Mindee是一款强大的OCR软件和API优先平台，帮助开发人员通过标准化文档处理层来自动化应用程序的工作流程，使用计算机视觉和机器学习进行数据识别以获取关键信息。免费层每月提供250页。
  * [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件，应用内搜索，交互式游戏场。支持1个编辑器。
  * [monkeylearn.com](https://monkeylearn.com/) —使用机器学习进行文本分析，免费300次查询/月。
  * [MockAPI](https://www.mockapi.io/) — MockAPI是一个简单的工具，允许您快速创建模拟API，生成自定义数据，并使用RESTful接口执行操作。MockAPI旨在作为原型设计/测试/学习工具。每个项目最多4个资源，免费。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly是API模拟和功能标志管理的可靠开发工具。使用直观的接口快速生成和控制模拟API。免费层每天提供500次请求。
  * [Mocki](https://mocki.io) - 一个工具，允许您创建模拟的GraphQL和REST API，与GitHub存储库同步。简单的REST API可以在无需注册的情况下免费开发和使用。
  * [Mocko.dev](https://mocko.dev/) — 在云中代理您的API，选择要模拟

  * [ROBOHASH](https://robohash.org/) - 一个从任何文本生成唯一且酷炫图像的 Web 服务。
  * [SaturnCloud](https://saturncloud.io/) - 一个数据科学云环境，允许运行 Jupyter 笔记本和 Dask 集群。每月免费计算 30 小时，每月 3 小时 Dask。
  * [Scraper's Proxy](https://scrapersproxy.com) — 一个简单的 HTTP 代理 API，用于网页爬取。无需担心限制、阻塞或验证码，在 anvonymously 状态下爬取。每月前 100 次成功爬取免费，包括 JavaScript 渲染（如果您联系支持，更多可用）。
  * [ScrapingAnt](https://scrapingant.com/) — 头部 Chrome 爬取 API 和免费检查代理服务。JavaScript 渲染、Premium 旋转代理、CAPTCHAs 避免。免费计划可用。
  * [ScraperBox](https://scraperbox.com/) — 使用真实 Chrome 浏览器和代理旋转的不可检测网页爬取 API。使用简单的 API 调用爬取任何网页。免费计划每月有 1000 个请求。
  * [ScrapingDog](https://scrapingdog.com/) — Scrapingdog 处理数百万代理、浏览器和 CAPTCHAs，以提供网页的 HTML 在单个 API 调用中。它还包括用于 Chrome 和 Firefox 的 Web 抓取器和即时抓取需求软件。免费计划可用。
  * [scrapinghub.com](https://scrapinghub.com) — 使用可视化界面和插件进行数据爬取。免费计划包括在共享服务器上无限爬取。
  * [Simplescraper](https://simplescraper.io) — 在每个操作后触发您的 Webhook。免费计划包括 100 个云爬取积分。
  * [Select Star](https://www.selectstar.com/) - 一个智能数据发现平台，自动分析和文档您的数据。免费轻量级计划，包括 1 个数据源、最多 100 张表和 10 个用户。
  * [Sheetson](https

  * [Zuplo](https://zuplo.com/) - 免费的 API 管理平台，用于设计、构建和部署 API 到边缘（Edge）。在几分钟内为任何 API 添加 API 密钥认证、限速、开发者文档和货币化。支持 OpenAPI-native 和完全可编程的 Web 标准 API & Typescript。免费计划提供最多 10 个项目、无限生产边缘环境、250 个 API 密钥、每月 100K 次请求和 1GB 出站流量。

**[⬆️ 返回顶部](#目录)**

## 构件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），每月有2,000分钟的CI/CD免費使用。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公开的Maven和PyPi仓库。开源项目免费使用。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中化的Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等的仓库服务。有免费层级，开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 方便使用的Maven、RPM、DEB、PyPi、NPM和RubyGem包的仓库托管（有免费层级）。
  * [repsy.io](https://repsy.io) — 1 GB免费的私有/公开Maven仓库。
  * [Gemfury](https://gemfury.com) — Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公开制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公开项目，5Gb存储，基本实例。
  * [RepoForge](https://repoforge.io) - Python、Debian、NPM包和Docker注册表的私有云托管仓库。开源/公开项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。可以免费试用，包括10GB

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个用于个人和团队协作的免费云端代码片段管理工具。
  * [Bitwarden](https://bitwarden.com) — 为个人、团队和企业提供最容易和最安全的方式来存储、分享和同步敏感数据。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用。对于公开访问的群组，拥有无限用户、历史记录和集成功能。此外，还提供了自托管的开源版本。
  * [cally.com](https://cally.com/) — 提供简单易用的会議时间和日期安排工具，适用于小型和大型团队。
  * [Calendly](https://calendly.com) — Calendly 是连接和安排会议的工具。免费计划提供每用户一个日历连接和无限的会议次数。同时还提供了桌面和移动应用程序。
  * [Discord](https://discord.com/) — 支持公开/私人房间的聊天工具，拥有 Markdown 文本、语音、视频和屏幕共享功能，对于无限数量的用户免费。
  * [Telegram](https://telegram.org/) — Telegram 适用于所有希望拥有快速、可靠的消息和通话服务的人。商业用户和小型团队可能会喜欢大型群组、用户名、桌面应用程序和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建工具。截图、记录流程并与团队合作。同时也支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 实时与团队讨论和协作。支持 IDE 配对编程、终端共享、语音、视频和屏幕共享，对于小型团队免费。
  * [Dyte](https://dyte.io) - 开发者友好的实时视频和音频 SDK，具有提高生产力和参与度的协作插件。免费套餐包括每月 10,000 分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/) — 信息组织工具。共享您的笔记，与他人

  * [seafile.com](https://www.seafile.com/) — 私有或云存储，文件共享，同步，讨论。云版仅有 1 GB
  * [Sema](https://www.semasoftware.com/) - 免费的开发者作品集工具，能够将多个仓库的贡献合并成一个报告。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，从浏览器中与合作伙伴共享屏幕，无需下载或注册。
  * [Slab](https://slab.com/) — 现代的知识管理服务，适用于团队。最多 10 个用户免费。
  * [slack.com](https://slack.com/) — 无限用户，但有一些功能限制
  * [Spectrum](https://spectrum.chat/) - 免费创建公共和私人社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。您可以跟踪上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/) - 视觉协作应用，用于头脑风暴，内容策划和笔记。最多 3 个 Walls，任意多用户，1 GB 存储空间免费。
  * [Stacks](https://betterstacks.com/) - 内容工作区，集成了笔记，链接和文件存储，用于应对信息过载。永久免费的个人计划。
  * [talky.io](https://talky.io/) — 免费的群视频聊天。匿名。点对点。无需插件，注册或支付。
  * [Teamhood](https://teamhood.com/) - 免费的项目，任务和问题跟踪软件。支持 Kanban 和 Scrum 实现。集成了时间跟踪。最多 5 个用户和 3 个项目组合免费。
  * [Teamplify](https://teamplify.com) - 改进团队开发流程，使用团队分析和智能日常站立会议。包括远程第一团队的完整功能时间跟踪。最多 5 个用户的小型团队免费。
  * [Tefter](https://tefter.io) - 书签应用，拥有强大的

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — 为 [Drupal](https://baike.baidu.com/item/Drupal/9385816) 站点提供托管。开发者可使用免费版本。同时，也提供免费的开发工具（如 Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) — [头less](https://www.contentful.com/blog/what-is-headless-cms/) [CMS](https://baike.baidu.com/item/内容管理系统/3805053)。在云端提供内容管理和交付 API。包括一个免费的社区空间，包含五个用户，25K 记录，48 个内容类型，2 个区域。
  * [Cosmic](https://www.cosmicjs.com/) — 头less CMS 和 API 工具包。为开发者提供免费的个人计划。
  * [Crystallize](https://crystallize.com) — 支持电子商务的头less [PIM](https://baike.baidu.com/item/产品信息管理/4574119)。内置 [GraphQL](https://graphql.cn/) API。免费版本包括无限用户，1000 个目录项，5 GB/月带宽，25k/月 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费版本。DatoCMS 是一个基于 [GraphQL](https://graphql.cn/) 的 CMS。在较低版本中，每月有 100k 次调用。
  * [Directus](https://directus.io) — 头less CMS。一个完全免费和开源的平台，用于管理资产和数据库内容，无论是在本地还是在云端。没有限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 头less CMS，将 JSON 内容直接存储在您的 [Git](https://baike.baidu.com/item/Git/12647238) 存储库中。没有限制。
  * [kontent.ai](https://www.kontent.ai) - 一个 [Content-as-a-Service](https://baike.baidu.com/item/内容即服务/49444463) 平台，为您提供所有头less CMS 的益处，同时赋予营销人员权力。开发者计划为两个用户提供无限项目，每个项目有两个环境，500 个内容项

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用程序构建工具（No code app builder）。在自动生成的后端代码中，用户可以完全访问源代码和无限的API和路由，让用户可以进行深入的集成。免费计划包括三个项目、五个表格和一个谷歌插件（Google add-on）。
  * [Cody AI](https://sourcegraph.com/cody) - Cody是一个使用人工智能（AI）和深度理解代码库来帮助用户更快地编写和理解代码的编码助手。Cody为开发人员提供了选择LLM（包括本地推理）的选项，支持多种集成开发环境（IDE），支持所有流行的编程语言，并且有免费计划。免费计划每月为开发人员提供20条聊天消息（使用 Claude 3 Sonnet 作为LLM）和500次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用DhiWise的创新代码生成技术，可以无缝地将Figma设计转换为动态的Flutter和React应用程序，从而优化工作流程并帮助快速打造出色的移动和Web体验。
  * [Codeium](https://www.codeium.com/) — Codeium是一个免费的AI驱动的代码补全工具（AI-powered code completion tool）。它支持超过20多种编程语言（包括Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并与所有重要的独立和Web集成开发环境（IDE）集成。
  * [Fern](https://buildwithfern.com) - 编写API定义并使用它们在流行语言（如TypeScript、Python、Java、Go等）中生成SDK/客户端库。完全支持OpenAPI。免费层可以为最多20个端点生成代码。
  * [Metalama](https://www.postsharp.net/metalama) - 只适用于C#。Metalama在编译期间动态生成代码的样板（boilerplate），使得源代码保持干净。对于开源项目是免费的，其商业友好免费层包括三个方面。
  * [Supermaven](https://www.superm

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个用于编写、审阅和部署代码的完整工作流程（Code Review 工作流程），包括一个用户的免费账户和一个存储空间为 100 MB 的仓库
  * [browserling.com](https://www.browserling.com/) — 交互式的跨浏览器测试（Cross-browser testing），免费使用仅限 3 分钟的会话，支持 Microsoft Internet Explorer 9 在 Vista下的 1024 x 768 分辨率
  * [codacy.com](https://www.codacy.com/) — 支持 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 等语言的自动代码审查（Automated code reviews），可用于无限多个公开和私有仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 基于 DevOps 的自动化基础设施代码审查工具（Infrastructure as Code review tool），与 GitHub、Bitbucket 和 GitLab 集成（包括自托管版本），可分析 Standard 语言、Ansible、Terraform、CloudFormation、Kubernetes 等（开源免费）
  * [CodeBeat](https://codebeat.co) — 支持多种编程语言的自动代码审查平台（Automated Code Review Platform），可用于公开仓库，支持 Slack 和电子邮件集成，永久免费
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查（Automated code review），可用于开源项目和组织拥有且最多 4 名协作者的私有仓库，学生和机构也可免费使用
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（Code coverage tool，SaaS），可用于开源项目和一个私有仓库
  * [CodeFactor](https://www.codefactor.io) — Git 的自动代码审查工具（Automated Code Review for Git），免费版本包括无限多个用户、公开仓库和一个私有仓库
  * [coderabbit.ai](https://coderabbit.ai) — 集成 GitHub/GitLab 的 AI 驱动代码审查工具（AI-powered code review tool），免费版本包括每小时 200 个文件、3 次审

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 为32种不同的包管理器提供搜索和依赖更新通知，开源项目免费使用
  * [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等网站中搜索项目名称的可用性
  * [searchcode.com](https://searchcode.com/) — 全面的文本代码搜索，开源项目免费使用
  * [tickgit.com](https://www.tickgit.com/) — 显示 `TODO` 注释（和其他标记）以识别代码中值得改进的区域
  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和共享代码片段，具有强大的代码截图工具，带有预设模板和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动的 Web 无障碍测试融入您的开发工作流程。对于开源和教育目的，免费使用。
  * [appcircle.io](https://appcircle.io) — 一个企业级的移动端 DevOps 平台，自动化构建、测试和发布移动应用以实现更快、更高效的发布周期。对于每次构建每分钟最多 30 分钟、每月 20 次构建和 1 个并发构建，免费使用。
  * [appveyor.com](https://www.appveyor.com/) — 面向 Windows 的 CD 服务，对于开源免费
  * [Argonaut](https://argonaut.dev/) - 在几分钟内在您的云端部署应用和基础设施。支持在 Kubernetes 和 Lambda 环境中自定义和第三方应用部署。免费版本允许为 5 个域和 2 个用户无限部署应用和构建。
  * [bitrise.io](https://www.bitrise.io/) — 适用于移动应用的 CI/CD，native 或 hybrid。每月 200 次免费构建、10 分钟构建时间和 2 名团队成员。对于开源项目，每月可获得 45 分钟构建时间、+1 并发和无限团队规模。
  * [buddy.works](https://buddy.works/) — 一个 CI/CD，每月 120 次执行、5 个免费项目和 1 个并发运行
  * [Buildkite](https://buildkite.com) CI 管道免费适用于 3 名用户和每月 5k 工作分钟。测试分析免费开发人员层级包含每月 100k 次测试执行，并为开源项目包含更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps。免费适用于 20 名用户和 10 个数据库实例
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包含所有特性，适用于 GitHub、GitLab 和 BitBucket 仓库的 CI/CD 服务。多个资源类别、Docker、Windows、Mac OS、ARM 执行器、 本地运行者、测试分割、

## Testing

  * [Applitools.com](https://applitools.com/) — 为网页、_native_移动应用和桌面应用提供智能可视化验证。可以与几乎所有自动化解决方案（如Selenium和Karma）和远程运行器（Sauce Labs、Browser Stack）集成。对于开源项目免费。对于单个用户，每周可用资源有限的免费版本。
  * [Appetize](https://appetize.io) — 在基于云的安卓手机/平板模拟器和iPhone/iPad模拟器上测试您的安卓和iOS应用程序。直接在您的浏览器中运行。免费版本包括每月30分钟的两次会话，每个会话无限制的应用大小。
  * [Apptim](https://apptim.com) — 一种移动测试工具，允许没有性能工程技能的人评估应用程序的性能和用户体验（UX）。使用您自己的设备的桌面版本100%免费，无限测试应用于iOS和安卓。
  * [Argos](https://argos-ci.com) - 开源的视觉测试，适用于开发者。每月最多5000张截图，无限项目。对于开源项目免费。
  * [Bencher](https://bencher.dev/) - 持续基准测试工具包，用于捕获CI性能回归。对于所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级的网页应用程序自动化测试工具。易于学习，无需编码。在您的计算机上运行无限测试。每月额外费用可获得云监控和CI/CD集成。
  * [Checkly](https://checklyhq.com) - 为现代DevOps提供代码优先的合成监控。以传统提供商的一小部分成本监控您的API和应用程序。由监控即代码工作流和Playwright驱动。对于开发者提供慷慨的免费版本。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展程序，测试您的网站是否遵循50

  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查 webhooks (.webhook) 。可以转发到localhost或者重放历史记录。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的UI，利用集成工具、组件和设计系统来更快速地迭代、更好地设计并简化开发过程。提供五年免费维护的无限项目。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中，使用唯一的URL调试和检查webhooks和HTTP请求。完全免费，可以创建无限的URL并得到推荐。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证webhooks，出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhooks并通过push通知和电子邮件监控它们。

**[⬆️ 返回顶部](#目录)**

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — （全面的应用安全平台）SCA、SAST、CSPM、DAST、Secrets、IaC、Malware、容器扫描、EOL等全方位覆盖。免费计划包括两个用户、扫描10个仓库、1个云、2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) —に見つかった_UXYour Network》（网络中受损系统的发现）
  * [Altcha.org](https://altcha.org/anti-spam) - 一个用于网站和API的垃圾邮件过滤器，使用自然语言处理和机器学习。免费计划每天每个域名200次请求。
  * [atomist.com](https://atomist.com/) — （自动化开发任务）更快、更方便的自动化开发任务方式。现在处于beta测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — （AWS安全和合规）Amazon Web Services（AWS）安全和合规审计和监控
  * [公共云威胁情报](https://cloudintel.himanshuanand.com/) — 公共云基础设施的高置信度指标，部分内容可在github（https://github.com/unknownhad/AWSAttacks）获取。完整列表可通过API获取
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，用来对代码、文件、目录或容器进行校验成不可篡改的证明
  * [crypteron.com](https://www.crypteron.com/) — 基于云的、面向开发者的安全平台，防止.NET和Java应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单、直观的Web应用，用于分析和解码/编码数据，而无需使用复杂的工具或编程语言。就像密码学和加密的瑞士军刀一样。所有功能都可以免费使用，无限制。开源，如果你想自行托管。
  * [DAS](https://signup.styra.com/) — Sty

**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 应用程序和API的细粒度授权服务。最多1000个月度活跃用户（MAUs）和100个授权实例免费。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素认证（MFA）、免密认证等。包括用于前端和后端应用的SDK。最多1000个MAUs和5个身份提供者免费。
  * [Auth0](https://auth0.com/) —托管单点登录（SSO）。免费计划包括25,000个MAUs、无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 将免密、OTP、2FA、SSO等功能添加到您的应用程序中，仅需几分钟。所有前端功能都包含在内。最多5000个MAUs免费。
  * [Authress](https://authress.io/) —身份验证登录和访问控制，对于任何项目，无限身份提供者。Facebook、Google、Twitter等。前1000个API调用免费。
  * [Authy](https://authy.com) - 在多个设备上使用双因素认证（2FA），并备份。Google Authenticator的替代品。最多100次成功认证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个用于创建、测试和部署访问策略的完整授权管理系统。细粒度授权和访问控制，最多100个月度活跃主体免费。
  * [Clerk](https://clerk.com) —用户管理、身份验证、2FA/MFA、内置的登录、注册、用户资料等UI组件。最多10,000个月度活跃用户免费。
  * [Cloud-IAM](https://www.cloud-iam.com/) —Keycloak Identity and Access Management服务。最多100个用户和1个领域免费。
  * [Corbado](https://www.corbado.com/) —为新建或现有应用程序添加基于密码的认证。无限MAUs免费。
  * [Descope](https://www

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用测试平台，确保应用按照预期运行。免费计划：支持一个应用，分析，版本和安装无限制，以及反馈收集。
  * [Loadly](https://loadly.io) - iOS和Android的beta应用分发服务，提供完全免费的服务，包括无限制下载，高速下载和无限制上传。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费计划：应用上传，密码保护链接，链接有效期1天，十次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过网络分发iOS和Android应用。免费计划：无限制上传，私有链接，访客的链接有效期2天，注册用户的链接有效期60天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用进行测试。免费计划包括一个应用项目，三个应用版本，500 MB存储空间，每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括五个应用，50次月下载，最大文件大小100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在 [IaaS](Infrastructure as a Service，基础设施即服务) 上部署已准备好的应用程序。管理一个 [AWS](Amazon Web Services，亚马逊网络服务) 微型实例免费
  * [Esper](https://esper.io) — 为 [Android](安卓) 设备提供的 [MDM](Mobile Device Management，移动设备管理) 和 [MAM](Mobile Application Management，移动应用管理)，具有 [DevOps](开发运维) 功能。具有一个用户许可证和 25 MB 应用程序存储空间的 100 个设备免费
  * [jamf.com](https://www.jamf.com/) —用于 [iPad](iPad)，[iPhone](iPhone) 和 [Mac](Mac) 的设备管理，三个设备免费
  * [Miradore](https://miradore.com) — 设备管理服务。保持设备群的更新并安全地管理无限数量的设备。免费计划提供基本功能
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理他们的 web 应用程序和服务器。每月最多 25 个 [Git](Git 版本控制系统) 部署免费
  * [runcloud.io](https://runcloud.io/) - 服务器管理，主要针对 [PHP](PHP编程语言) 项目。最多支持一个服务器免费
  * [ploi.io](https://ploi.io/) - 服务器管理工具，可以轻松管理和部署您的服务器和网站。最多支持一个服务器免费

**[⬆️ 返回顶部](#目录)**

## 消息和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，具有 presence （存在性）、persistence （持久性）和 guaranteed delivery （保证交付）。 免费计划包括每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — 作为服务的 [RabbitMQ](https://www.rabbitmq.com/，消息代理) 。 Little Lemur 计划：每月最多100万条消息、最多20个并发连接、最多100个队列、最多10,000条队列消息、多个节点位于不同 [AZ](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/using-regions-availability-zones.html，可用区)。
  * [courier.com](https://www.courier.com/) — 集成推送、应用内、电子邮件、聊天、短信和其他消息渠道的单一 [API](https://www.restartcn.com/api/) ，具有模板管理和其他功能。 免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 为开发者提供的多渠道通知基础设施，具有预建的应用内收件箱和无代码模板编辑器。 免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将 [MQTT](https://www.mqtt.org/， 物联网消息协议) 设备连接到云原生 [IoT](https://www.iotTechn dofthings.com/) 消息代理。 免费连接最多100个设备（无需信用卡），永久有效。
  * [knock.app](https://knock.app) – 为开发者提供的通知基础设施。 使用单个 [API](https://www.restartcn.com/api/) 调用发送多个渠道的消息，例如应用内、电子邮件、短信、 [Slack](https://grafana.com/blog/2022/03/08/what-is-slack/) 和推送。 免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最多100k日志行，保留24小时
  * [logentries.com](https://logentries.com/) — 每月最多5 GB，保留七天
  * [loggly.com](https://www.loggly.com/) — 单用户免费，200MB/天，保留七天
  * [logz.io](https://logz.io/) — 每天最多1 GB，保留一天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — [管理引擎](Manage Engine)提供的日志管理服务。免费计划提供50 GB存储空间，保留15天，搜索保留7天。
  * [papertrailapp.com](https://papertrailapp.com/) — 搜索48小时，存档七天，50 MB/月
  * [sematext.com](https://sematext.com/logsene) — 每天最多500 MB，保留七天
  * [sumologic.com](https://www.sumologic.com/) — 每天最多500 MB，保留七天
  * [logflare.app](https://logflare.app/) — 每月每个应用最多12,960,000条日志，保留3天
  * [logtail.com](https://logtail.com/) — 基于[ClickHouse](ClickHouse)的[SQL](SQL)兼容日志管理。每月最多1 GB，保留三天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月最多1,000个用户活动日志，保留一个月，适用于最多5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月最多200 GB的日志收集，保留15天

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 为开源项目（Open Source）提供无限项目、无限字符和协作者
  * [gitlocalize.com](https://gitlocalize.com) - 适用于私有和公有仓库的免费和无限服务
  * [Lecto](https://lecto.ai/) - 机器翻译 API，拥有免费套餐（每天30次免费请求，每次请求可翻译1000个字符）。集成于Loco Translate Wordpress插件。
  * [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
  * [localazy.com](https://localazy.com) - 1000个源语言字符免费，语言、贡献者无限制，支持初创企业和开源项目
  * [Localeum](https://localeum.com) - 最多1000个字符，单用户，语言和项目无限制
  * [localizely.com](https://localizely.com/) — 开源项目免费
  * [Loco](https://localise.biz/) — 最多2000次翻译，译者无限制，每项目最多10种语言，每项目最多1000个可翻译资源
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限免费版，适用于最多5名用户，开源项目免费
  * [POEditor](https://poeditor.com/) — 最多1000个字符免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多100个翻译关键字，字符无限制，语言无限制，支持初创企业
  * [Texterify](https://texterify.com/) - 单用户免费
  * [Tolgee](https://tolgee.io) - 免费的SaaS服务，翻译次数有限，自托管版本永久免费
  * [transifex.com](https://www.transifex.com/) — 开源项目免费
  * [Translation.io](https://translation.io) - 开源项目免费
  * [Translized](https://translized.com) - 最多1000个字符，单用户，语言和项目无限制
  * [webtranslateit.com](https://webtranslateit.com

## Monitoring

  * [UptimeObserver.com](https://uptimeobserver.com) - 获取 20 个运行时间监控器，间隔 5 分钟，并且可以自定义状态页面，即使用于商业用途。通过电子邮件和 Telegram 无限制地享受实时通知，无需信用卡即可开始。
  * [Pingmeter.com](https://pingmeter.com/) - 5 个运行时间监控器，间隔 10 分钟。监控 SSH、HTTP、HTTPS 和任何自定义 TCP 端口。
  * [alerty.ai](https://www.alerty.ai) - 免费的 APM 和监控服务，适用于您的前端、后端、数据库等 + 免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 24 小时指标免费，应用性能管理代理仅限于一个 Java、一个 .NET、一个 PHP 和一个 Node.js
  * [appneta.com](https://www.appneta.com/) — 免费，数据保留 1 小时
  * [appspector.com](https://appspector.com/) - 远程 iOS/Android/Flutter 调试的任务控制中心。免费用于小流量使用（64MB 日志）。
  * [assertible.com](https://assertible.com) — 自动化 API 测试和监控服务。免费计划适用于团队和个人。
  * [bleemeo.com](https://bleemeo.com) - 免费用于 3 个服务器，5 个运行时间监控器，无限用户，无限仪表盘，无限告警规则。
  * [checklyhq.com](https://checklyhq.com) - 面向开发者的开源 E2E/Synthetic 监控和深度 API 监控。免费计划包括五个用户和 50,000+ 次检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS 安全性和配置监控服务。免费：无限按需扫描，无限用户，无限存储账户。订阅：自动扫描，API 访问等。
  * [cronitor.io](https://cronitor.io/) - cron 作业、网站、API 等的性能洞察和运行时间监控服务。免费层包括五个监控器。
  * [datadoghq

  * [statuscake.com](https://www.statuscake.com/) — 网站监控，免费测试不限量，但有限制
  * [statusgator.com](https://statusgator.com/) — 状态页监控，3个监控免费
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS与域名监控。免费监控10个服务器，10个运行时间，和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。3个位置和20个主要Web服务的数据免费
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50个监控免费
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公共状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 端到端的事故管理、告警、值班管理和响应编排平台，用于网络运营、站点可靠性工程和DevOps团队。最多5个用户免费。
  * [instatus.com](https://instatus.com) - 在10秒内获取一个美丽的状态页面。永久免费，具有无限订阅和无限团队。
  * [Squadcast.com](https://squadcast.com) - Squadcast是一款端到端的事故管理软件，旨在帮助您促进SRE最佳实践。最多10个用户的免费计划可用。
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的运行时间监控器，提供广泛的监控：cronjob、关键字、网站、端口、ping。25个运行时间检查，3分钟间隔检查免费。通过电话、短信、电子邮件和Webhooks发送警报。
  * [Better Stack](https://betterstack.com/better-uptime) - 运行时间监控、事故管理、值班安排/警报和状态页面在单个产品中。免费计划包括10个监控，3分钟检查频率和状态页面。
  * [Pulsetic

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - Js错误跟踪，具有屏幕截图和点击轨迹功能。对于开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 在初始试用之后，每月前2000个错误免费
  * [elmah.io](https://elmah.io/) — Web开发者的错误日志记录和运行时监控。开源项目可以免费使用Small Business订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。小团队每年最多可拥有100万个用户会话免费使用。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3k事件/1用户免费。开源且易于自行托管，使用无限制。
  * [GlitchTip](https://glitchtip.com/) — 简单、开源错误跟踪。兼容开源Sentry SDK。每月1000个事件免费，或者可以自行托管无限制使用
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时和 cron 监控。小团队和开源项目免费使用（每月12,000个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。免费支持[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备，每种100台。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5,000个错误，用户数量不限，保留期30天
  * [sentry.io](https://sentry.io/) — Sentry实时跟踪应用异常，并且有小型免费计划。每月5k错误/1用户免费，自托管使用无限制
  * [Axiom](https://axiom.co/) — 存储最多0.5 TB的日志，保留期30天。包含与Vercel等平台的集成和高级数据查询，

## Search

  * [algolia.com](https://www.algolia.com/) — 支持自动补全、相关性搜索和 UI 库的托管搜索解决方案，易于创建搜索体验。免费的“Build”计划包括 1M 文档和 10K 次搜索/月。同时，Algolia 还提供免费的 [开发者文档搜索](https://docsearch.algolia.com/) 功能。
  * [bonsai.io](https://bonsai.io/) — 免费提供 1 GB 内存和 1 GB 存储空间
  * [CommandBar](https://www.commandbar.com/) - 统一搜索条（Unified Search Bar）服务，提供基于 Web 的 UI 小部件/插件，允许用户在您的产品中搜索内容、导航、功能等，从而提高产品的可发现性。对于 1,000 名月活跃用户免费，命令数量不限。
  * [Magny](https://magny.io) - SaaS 服务，帮助实现命令面板（例如，在应用程序中搜索），这大大减少了用户在应用程序中查找任何内容所花费的时间，提高了用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费提供 3 个索引、100K 文档/索引、无限全文/向量/混合搜索，以及 60 天的分析服务
  * [searchly.com](http://www.searchly.com/) — 免费提供 2 个索引和 20 MB 存储空间

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源的平台，提供JavaScript和Ruby的课程，专门针对Web开发。
  * [免费的专业简历模板和编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，拥有许多经验丰富的专业人士的简历模板，供您克隆、编辑和下载，支持 ATS 优化。
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 行业领先专家的免费短期课程，提供一小时内掌握最新的生成式AI工具和技术的实践经验。
  * [LabEx](https://labex.io) - 通过交互式实验室和真实项目，提高您的Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，涵盖从区块链到UX设计的所有开发方面。
  * [Cisco网络学院，适合所有人](https://skillsforall.com/) - 提供网络安全、网络和Python等领域的免费认证课程。
  * [MIT开放课程](https://ocw.mit.edu/) - MIT开放课程是来自2500多个MIT课程的在线出版物，免费与世界各地的学习者和教育者分享知识。Youtube频道可以在[@mitocw](https://www.youtube.com/@mitocw/featured)找到。
  * [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程。
  * [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 免费的在线指南，用于学习基本和高级HTML/CSS、JavaScript和SQL。

**[⬆️ 回到顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费的临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 服务提供每月1000封免费邮件，具有无限域名、团队成员、Webhook和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮箱转发，免费创建无限的邮箱别名。
  * [Antideo](https://www.antideo.com) — 每小时10个API请求，用于邮箱验证、IP和电话号码验证，不需要信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9000封邮件、每天300封邮件免费。
  * [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费10个Bump邮箱地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费5个Burner邮箱地址，1个邮件箱，7天邮件历史。
  * [Buttondown](https://buttondown.email/) — 新闻邮件服务，免费支持最多100个订阅者。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和发送邮件，免费每月10000封邮件。
  * [Contact.do](https://contact.do/) — 联系表单链接（类似bitly）。
  * [debugmail.io](https://debugmail.io/) — 开发人员的测试邮件服务器，易于使用。
  * [DNSExit](https://dnsexit.com/) - 支持最多2个邮箱地址，100MB存储空间，IMAP、POP3、SMTP、SPF/DKIM支持。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封。
  * [EmailOctopus](https://emailoctopus.com) - 最多2500个订阅者，每月10000封邮件免费。
  * [EmailJS](https://www.emailjs.com/) – 不是整个邮箱服务器，而是一个邮箱客户端，可在客户端

  * [Takeout](https://takeout.bysourfruit.com) - 一个持续更新的电子邮件服务，使得发送电子邮件变得容易。每月500封免费的交易电子邮件。
  * [temp-mail.io](https://temp-mail.io) — 免费的临时电子邮件服务，可以同时获取多个电子邮件和转发功能
  * [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
  * [Touchlead](https://touchlead.app) - 一个多功能的营销自动化工具，包括潜在客户管理、表单生成器和自动化功能。适用于有限数量的潜在客户和自动化的免费版本
  * [trashmail.com](https://www.trashmail.com) - 免费的临时电子邮件地址，具有转发和自动过期功能
  * [Tuta](https://tuta.com/) - 免费的安全电子邮件账户服务提供商，内置端到端加密，无广告，无追踪。免费1GB存储空间，一个日历（Tuta 也有[付费计划](https://tuta.com/pricing)）。Tuta 部分为[开源](https://github.com/tutao/tutanota)，因此您可以自行托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证 API，具有邮箱确认和一次性电子邮件地址检测功能；每天免费验证25封电子邮件。
  * [verimail.io](https://verimail.io/) — 批量和 API 电子邮件验证服务。每月免费验证100封电子邮件
  * [Zoho](https://www.zoho.com) — 最初是作为电子邮件提供商开始的，但现在提供一套服务，其中一些服务具有免费计划。以下服务具有免费计划：
     - [电子邮件](https://zoho.com/mail) 免费适用于5名用户。每用户5GB、25 MB 附件限制，一个域名。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist 的永久免费计划包含一个并发远程支持许可证和一个无限时间的5个未受监督的

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一个面向开发者的 [特性开关服务]（Feature Flag Service），无限团队大小，出色的支持和合理的价格标签。免费计划最多可包含10个开关，两个环境，1个产品，以及每月5百万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；在Web，移动和服务器端应用程序中管理特性开关。使用我们的托管 API，部署到自己的私有云，或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的特性开关和 A/B 测试提供商，内置 [贝叶斯统计分析引擎]（Bayesian statistical analysis engine）。最多可包含 3 个用户， 无限特性开关和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的特性开关，A/B 测试，分析和应用程序配置，具有 Git 风格的版本控制和同步，内存，局部标志评估。最多可包含 5 个团队成员， 无限特性开关和 A/B 测试。
  * [Molasses](https://www.molasses.app) - 强大的特性开关和 A/B 测试。最多可包含 3 个环境，每个环境可包含 5 个特性开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级，多区域特性开关管理平台。免费计划最多可包含 10 个开关，两个环境， 无限请求。SDK，分析仪表盘，发布日历，Slack 通知，以及所有其他功能都包含在无限免费计划中。
  * [Statsig](https://www.statsig.com) - 一个功能强大的平台，用于特性管理，A/B 测试，分析等。其慷慨的免费计划提供无限座位，开关，实验和动态配置，支持最多 1 百万次事件每月。
  * [Abby](https://www.tryabby.com) - 开源特性开关和 A/B 测试。配置代码和完全类型的 Typescript SDK。与 Next.js 和 React

## 字体

  * [dafont](https://www.dafont.com/) - 本网站上的字体都是其作者的财产，或者是免费软件（freeware）、共享软件（shareware）、演示版本（demo versions）或者公共领域（public domain）。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face, Units Converter, Font Hinter 和 Font Submitter。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 免费字体，适用于商业用途。手工挑选这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以轻松快速地通过下载或链接至 Google 的 [内容分发网络（CDN）](https://zh.wikipedia.org/wiki/内容分发网络) 安装到网站上。
  * [FontGet](https://www.fontget.com/) - 提供多种字体下载，并以标签进行整理。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个日益增长的专业级字体集合，100% 免费用于个人和商业用途。
  * [Befonts](https://befonts.com/) - 提供多种独特的字体，用于个人或商业用途。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体及其使用方式。
  * [Bunny](https://fonts.bunny.net) 面向隐私的 [Google Fonts](https://fonts.google.com/)。
  * [FontsKey](https://www.fontskey.com/) - 提供免费和付费字体，用于个人使用，可以输入文本进行快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) 免费且开源的服务，使用 [CSS](https://zh.wikipedia.org/wiki/CSS) 将字体家族提供给网站。
  * [Fontsensei](https://fontsensei.com/) 用户标记的开源 [Google Fonts](https://fonts.google.com/)，包含 [CJK（中文、日文、韩文）](https://zh.wikipedia.org/wiki/CJK統合漢字) 字体标签。

**[⬆️ 返回顶部](#table

## 表单

  * [Feathery](https://feathery.io) - 功能强大、面向开发者的表单构建工具。可用于构建注册与登录、用户引导、支付流程、复杂的金融应用等。免费计划允许每月最多250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无需编码的表单后端。支持垃圾邮件过滤、电子邮件通知和自动响应、webhooks、Zapier集成、重定向、AJAX或POST等。免费计划提供无限表单、每月20次提交，并在显示Form-Data徽标时额外提供2000次提交。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费计划每月允许250次表单提交。友好、现代化的图形界面。支持与Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) - HTML表单提交的端点。支持通知、垃圾邮件拦截和符合GDPR的数据处理。免费计划适用于基本用途。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/)- 静态网站的易用HTML表单。无需注册帐户即可开始使用。免费计划允许每月500次提交和可自定义的回复邮箱地址。
  * [FormKeep.com](https://www.formkeep.com/) - 提供无限表单， 每月50次提交，垃圾邮件保护，电子邮件通知，以及可导出HTML的拖放式设计器。额外功能包括自定义字段规则、团队和与Google Sheets、Slack、ActiveCampaign、Zapier等的集成。
  * [formlets.com](https://formlets.com/) — 在线表单，每月无限单页表单，100次提交，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单转电子邮件服务，免费计划允许无

## 生成性人工智能

  * [Keywords AI](https://keywordsai.co) - 最好的LLM监控平台（Large Language Model，[大型语言模型]）。仅需两行代码即可调用200+个LLM，且每月拥有10,000次免费请求和0美元的平台功能！
  * [Portkey](https://portkey.ai/) - 面向Gen AI应用的控制面板，具有可观察性套件和AI网关。每月最多可免费发送和记录10,000次请求。
  * [Braintrust](https://www.braintrustdata.com/) - Gen AI的求值、提示游乐场和数据管理。免费计划每周可获得最多1,000个私人求值行。
  * [Findr](https://www.usefindr.com/) - 支持同时搜索所有应用的通用搜索，支持使用您的信息回答问题的搜索助手。免费计划提供无限制的统一搜索和每日5次协同搜索请求。
  * [ReportGPT](https://report-gpt.io) - 基于AI的写作助手。只要您带来自己的API密钥，整个平台都是免费的。
  * [Clair](https://askclair.ai/) - 临床AI参考。学生可以免费访问专业工具套件，包括开放搜索、临床摘要、医疗审查、药物相互作用、ICD-10代码和环卫管理。此外，还有一个专业套件的免费试用版本。
  * [Langtrace](https://langtrace.ai) - 使开发人员能够跟踪、评估、管理提示和数据集，并解决与LLM应用程序性能相关的问题。它为任何LLM创建开放遥测标准跟踪，从而有助于可观察性，并且与任何可观察性客户端配合使用。免费计划每月提供50K条跟踪记录。
  * [Ultra AI](https://ultraai.app) - 您产品的AI指挥中心。功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型回退和用户限速。免费的永久计划每月提供10k+个请求和除缓存以外的所有功能。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 评估、

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — [Bootstrap]( Bootstrap，一个流行的前端框架 )的 CDN ，同时支持 [Bootswatch]( Bootswatch，一个Bootstrap主题提供商 )和 [fontawesome.io]( fontawesome.io，一个图标库 )
  * [cdnjs.com](https://cdnjs.com/) — Simple. Fast. Reliable. Content delivery at its finest. cdnjs 是一个免费开源的 CDN 服务，已被超过 11% 的网站所信赖，基于 [Cloudflare]( Cloudflare，一个内容分发网络和安全公司 )
  * [developers.google.com](https://developers.google.com/speed/libraries/) — [Google Hosted Libraries]( Google托管库 )是一个为最流行的开源 JavaScript 库提供内容分发网络
  * [Stellate](https://stellate.co/) - Stellate 是一个为您的 [GraphQL]( GraphQL，一个查询语言 ) API 提供的超快、可靠的 CDN，并且对于两个服务是免费的
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 CDN。支持 [npm]( npm，Node.js包管理器 )、[GitHub]( GitHub，代码托管平台 )、[WordPress]( WordPress，内容管理系统 )、[Deno]( Deno，一个运行时环境 )等
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — [Microsoft Ajax]( Microsoft Ajax，一个为Web应用提供JavaScript库的 CDN )托管流行的第三方 JavaScript 库，如 [jQuery]( jQuery，一个JavaScript库 )，并使您可以轻松将它们添加到您的 Web 应用中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的 [DDoS]( DDoS，分布式拒绝服务攻击 )保护和 [SSL]( SSL，安全套接字层 )证书
  * [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN，每个域名每月免费 1 百万请求
  * [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，使用 [Cloudflare]( Cloudflare )托管文件
  *

## PaaS

  * [anvil.works](https://anvil.works) - 仅使用 Python 进行 Web 应用开发。免费版本支持无限应用和 30 秒超时。
  * [appwrite](https://appwrite.io) - 无限项目，不暂停项目（支持 WebSockets），并且具有身份验证服务。免费版本每个项目包含 1 个数据库、3 个存储桶和 5 个函数。
  * [configure.it](https://www.configure.it/) — 手机应用开发平台，免费版本支持两个项目，功能有限但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源、跨平台移动应用开发工具链。商业用途免费，项目数无限。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，具有从 TypeScript 代码自动生成的可视化 CMS。内置 A/B 测试、内容分段和实时分析。非常适合内容密集和企业电子商务网站。免费版本每月可使用 5,000 次页面查看或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，支持在边缘全局运行 JavaScript、TypeScript 和 WebAssembly。免费版本每天包含 100,000 次请求和每月 100GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – Linux 主机服务，提供 GitHub、SSH 和 MariaDB/Postgres 数据库的 CI/CD。免费版本有 1 GB 存储和 1 GB 网络/月限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 使用静态分析的后端框架，提供自动基础设施、无样板代码等。包含免费云托管，适用于爱好者项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 部署 Web 服务、数据库等到您自己的 AWS 账户，使用 Git 推送风格工作流。免费版本适用于个人 GitHub 仓库的个人开发者。AWS 成本通过 AWS 计费，但您可以使用积分和 AWS 免费层级。
  * [gigalixir.com](

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化工作流以在您的应用程序后端连接多个应用程序。例如，当您的应用程序触发事件时，可以发送Slack消息或添加Google Sheet行。每月最多可进行5,000次任务的免费服务。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse Platform的易于使用、灵活和可扩展的后端服务。
  * [backendless.com](https://backendless.com/) — 移动和Web后端即服务，提供1 GB的文件存储、每月50,000条推送通知和1,000个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在我们的函数运行时和托管存储中引导您的Python API，免费构建和托管在我们的在线编辑器或使用您喜欢的工具进行本地构建。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供构建和部署数字创新所需的文档和资源。访问包括平台、SDK和可用于构建和定制应用程序的组件库的全面个人沙盒。
  * [connectycube.com](https://connectycube.com) - 不限量的聊天消息、点对点语音和视频通话、文件附件和推送通知。最多可支持1000个用户的免费服务。
  * [convex.dev](https://convex.dev/) - 反应式的后端即服务，托管您的数据（带关系和可序列化ACID事务的文档）、无服务器函数和WebSockets，以便将更新流式传输到各个客户端。最多可支持1M记录、5M个月度函数调用的免费服务。
  * [darklang.com](https://darklang.com/) - 托管语言，结合编辑器和基础设施。可在测试阶段访问，大容量的免费层计划在测试后实施。
  * [Firebase](https://firebase.com) — Firebase帮助您构建和运行成功的应用程序。免费的Spark计划提供身份验证、托管、Firebase ML、

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个低代码平台，设计用于构建具有可定制的移动和 web 应用的商业流程应用。提供拖拽式界面、离线支持、实时位置跟踪和与各种第三方服务集成等功能。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表盘。支持 SQL 数据库和 REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源的低代码平台，用于快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s等。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。集成15+个数据库和任何API。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建商业应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖拽式应用构建器构建应用。
  * [ReTool](https://retool.com/) — 低代码平台，用于构建内部应用。Retool具有高度的可定制性。如果你可以使用JavaScript和API编写代码，你就可以在Retool中实现它。免费版本允许每月最多5个用户，不限制应用和API连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ - 一个低代码平台，帮助工程团队和产品经理构建内部工具、自定义用户体验、数字体验、自动化、自定义管理面板、运营应用，速度提高10倍。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud - 一个强大的开源低代码平台，供开发人员构建内部工具。使用ILLA的组件和操作库，开发人员可以节省大量构建工具的时间。适用于5名团队成员。
  * [outsystems.com](https://www.outsystems.com/) — 企业网页开发PaaS，支持本地或云端部署，免费的“个人

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费的Web托管服务，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，自定义Web服务器，通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用程序安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费的Web托管服务+免费短域名，PHP、MySQL、应用程序安装器、电子邮件发送和无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费使用+开发者优先的部署和开发平台，减少基础设施麻烦，快速设置。
  * [Bubble](https://bubble.io/) — 使用可视化编程构建Web和移动应用程序，无需代码，Bubble品牌免费。
  * [dAppling Network](https://www.dappling.network/) - 为Web3前端提供的去中心化Web托管平台，专注于提高可用性和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform Starter层上免费构建和部署三个静态网站。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到Web，仅静态网站。永久免费。每个Google/微软账户一个网站。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个用于在本地托管网站并公开分享（实时）的开发者桌面应用程序，可以使用其漂亮的用户界面、API和/或CLI。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上构建和托管基于Markdown的文档网站。甚至可以从API定义文件自动生成API参考文档。网站托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管服务，包含PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子域名、免费域名托管、DNS区域编辑器、

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费的公共DNS解析服务，速度快，安全（加密您的DNS查询），由Cloudflare提供。可以用来绕过ISP的DNS屏蔽，防止DNS查询窥探，以及[屏蔽成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可以通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：仅是一个DNS解析器，不是DNS主机。
  * [1984.is](https://www.1984.is/product/freedns/) — 免费的DNS服务，包含API和许多其他免费的DNS功能。
  * [cloudns.net](https://www.cloudns.net/) — 免费的DNS主机，支持最多1个域名和50条记录。
  * [deSEC](https://desec.io) - 免费的DNS主机，支持API，注重安全。运行在开源软件上，受[SSE](https://www.securesystems.de/)支持。
  * [dns.he.net](https://dns.he.net/) — 免费的DNS主机服务，支持动态DNS。
  * [Zonomi](https://zonomi.com/) — 免费的DNS主机服务，具有即时DNS传播。免费计划：1个DNS区域（域名）最多包含10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费的DNS主机。
  * [duckdns.org](https://www.duckdns.org/) — 免费的DDNS服务，免费套餐最多支持5个域名。包含各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) — 免费的DDNS服务，支持[API](https://dynv6.com/docs/apis)，并支持管理许多类型的DNS记录（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费的DNS主机，也提供基于众多公共用户

## 域名

  * [eu.org](https://nic.eu.org) — 免费eu.org域名，通常在14天内批准。
  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名。
  * [us.kg](https://nic.us.kg/) - 免费us.kg子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 与 [AWS](亚马逊网络服务) S3 兼容 - 支持API、接口操作、[CLI](命令行接口)、以及其他上传方法，以安全、方便、高效的方式从 [IPFS](星际文件系统) 和 [Arweave](网络存储解决方案) 网络上传和存储文件。注册用户可以免费获得 6 GB 的 IPFS 存储空间和 300MB 的 Arweave 存储空间。任何小于 150 KB 的 Arweave 文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) — [Backblaze](备份解决方案) B2 云存储。免费 10 GB ([Amazon](亚马逊) S3 类型) 对象存储，有效期不限
  * [filebase.com](https://filebase.com/) - 支持 [S3](简单存储服务) 协议的对象存储，由区块链驱动。免费 5 GB 存储空间，有效期不限。
  * [Tebi](https://tebi.io/) - 支持 S3 协议的对象存储。免费 25 GB 存储空间和 250GB 出站传输。
  * [Idrive e2](https://www.idrive.com/e2/) - 支持 S3 协议的对象存储。免费 10 GB 存储空间，每月 10 GB 下载带宽。
  * [C2 对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 支持 S3 协议的对象存储。免费 15 GB 存储空间，每月 15 GB 下载量。

**[⬆️ 回到顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，在其开源数据平台上。单节点，1 CPU，1GB RAM，对于 PostgreSQL 和 MySQL，5GB 存储。易于迁移到更广泛的计划或跨云。
  * [airtable.com](https://airtable.com/) — 看起来像一个电子表格，但它是一个关系型数据库，无限基础，1,200 行/基础，和 1,000 API 请求/月
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 作为服务，拥有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 服务器无服务 API/后端和 NoSQL 数据库服务，具有函数、Mongdb-ish 查询、键/值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划包括 5GB 存储和 60/分钟 API 调用。包含 2 名开发者，无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。[免费层 CRFREE](https://crate.io/lp-crfree)：一个节点，2 CPU，2 GiB 内存，8 GiB 存储。每个组织一个集群，无需支付方法。
  * [FaunaDB](https://fauna.com/) — 服务器无服务云数据库，具有原生 GraphQL、多模型访问和每日免费层，最高 100 MB
  * [Upstash](https://upstash.com/) — 服务器无服务 Redis，免费层最高 10,000 次请求/天，256MB 最大数据库大小，20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — Redis 的在线实时监控和管理服务，监控 1 个 Redis 实例免费
  * [redislabs](https://redislabs.com/try-free/) - 免费 30

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 使用单个命令为本地主机生成公用 URL，无需下载。支持 HTTPS / TCP / TLS 隧道，免费计划的隧道生命周期为 60 分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio 扩展，用于将 IIS Express 暴露到本地网络或通过隧道暴露到公用 URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi 是一个托管的 VPN 服务，允许你安全地将 LAN 类似网络扩展到分布式团队，免费计划允许创建无限网络，且最多支持 5 人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的基于网络套接字的服务平台，可以在部署 Web Socket 服务器代码时提供 wss:// URL，且允许监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公用 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露到公用 URL。免费的托管版本和 [开源代码](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露到公用 URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过 VPN 启用 LAN 类似网络连接多个计算机。无限对等点（Hamachi 替代品）。
  * [segment.com](https://segment.com/) — Translation 和事件路由中心，可以将事件转化并路由到其他第三方服务。100,000 次事件/月免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
 

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和SCRUM软件，适用于最多5名团队成员
  * [asana.com](https://asana.com/) — 为包含协作者的私人项目提供免费服务
  * [Backlog](https://backlog.com) — 一个平台集成所有功能，帮助团队发布伟大的项目。免费计划提供1个项目，10名用户和100MB存储空间。
  * [Basecamp](https://basecamp.com/personal) - 任务列表、里程碑管理、类似论坛的消息传递、文件共享和时间跟踪。最多3个项目、20名用户和1GB存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具。免费计划提供5GB存储空间，适用于无限用户。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、UML、网络图。免费版最多15名用户/图表，25张表格
  * [Chpokify](https://chpokify.com/) — 基于团队的计划扑克牌，节省冲刺预估时间。免费适用于最多5名用户，免费Jira集成，无限视频通话，无限团队，无限会话。
  * [clickup.com](https://clickup.com/) — 项目管理。免费，高级版包含云存储。移动应用程序和Git集成可用。
  * [Clockify](https://clockify.me) - 时间跟踪器和时间表应用程序，允许您跨项目跟踪工作时间。无限用户，永远免费。
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的架构图表，仅需几分钟，使用Cloudcraft可视化设计器，针对AWS进行优化，包含智能组件，可显示实时数据。免费计划为单个用户提供无限私人图表。
  * [Codegiant](https://codegiant.io) — 项目管理，包含存储库托管和CI/CD。免费计划提供无限存储库、项目和文档，适用于5名团队

  * [Shortcut](https://shortcut.com/) - 项目管理平台（Project management platform）。对于十名用户或以下的团队永久免费。
  * [Tadum](https://tadum.app) - 为定期会议设计的会议议程和会议纪要应用程序（Meeting agenda and minutes app），对于十名用户或以下的团队免费。
  * [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发者的项目管理平台（Project management platform），对于开源项目（Open Source）免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务（Simple sprint management service）。免费计划具有无限制的任务、冲刺和工作空间，没有用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 从看板（Kanban）和Scrum到几乎任何运营流程的可视化项目管理（Visual project management）。对于无限制的用户和1000个数据实体免费（[更多详情](https://www.targetprocess.com/pricing/)）。
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲（Real-time collaborative task lists and team outlines）。免费计划具有一个工作空间，具有无限制的任务和项目；1GB文件存储；1周项目历史；以及每次视频会议五位与会者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理（Role based project management）。对于五名用户或以下免费。支持GitHub/Trello/Dropbox/Google Drive集成。
  * [Teaminal](https://www.teaminal.com) - 远程团队的站立会议、回顾和冲刺规划工具（Standup, retro, and sprint planning tool for remote teams）。对于十五名用户或以下免费。
  * [teamwork.com](https://teamwork.com/) — 项目管理和团队聊天（Project management & Team Chat）。对于五名用户和两个项目免费。可用付费计划。
  * [teleretro.com](https://www.teleretro.com/) — 简单且有趣的反思工具，具有破冰游戏、GIF和表情符号（Simple and fun retrospective tool with icebreakers, gifs and emojis）。免费计划

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件共享平台，具有无限速度、无限带宽、无限文件数量、无限下载次数等特点。它主要针对安卓开发相关文件，如APK构建、自定义ROM和修改等。但似乎也接受其他类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单且安全的Borg Backup远程备份托管。10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB免费存储空间
  * [sync.com](https://www.sync.com/) - 端到端的云存储服务。5 GB免费存储空间
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多可享受10 GB免费存储空间
  * [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时图像优化和缩略图。免费套餐包含500 MB存储空间和2 GB的带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，在全球拥有1500多个节点。提供多种图像缩略、压缩和水印函数。响应式图像、360度图像制作和图像编辑的开源插件。免费月度套餐包含25 GB的CDN流量、25 GB的缓存存储空间和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图像上传、强大的处理、存储和分发服务，支持Ruby、Python、Java、PHP、Objective-C等语言。免费套餐包含25个月度积分，一个积分等于1000次图像转换、1 GB存储空间或1 GB的CDN使用。
  * [embed.ly](https://embed.ly/) — 提供嵌入网页媒体的API、响应式图像缩略和从网页提取元素。免费套餐每月最多支持5000个URL，15次/秒的请求速率
  * [filestack.com](

  * [DocsParse](https://docsparse.com/) – 由 [GPT](通用预训练模型, General Pre-trained Transformer) 驱动的人工智能处理 [PDF](便携式文档格式, Portable Document Format)，图片，将其转换为 [JSON](Javascript 对象表示, JavaScript Object Notation)， [CSV](逗号分隔值, Comma Separated Values)， [EXCEL](电子表格软件) 格式化的结构化数据。每月可免费使用30次。


**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 免费的 [股票图片（Stock Images）](https://zh.wikipedia.org/wiki/股票图片) 、音频和视频的精选列表。
  * [Float UI](https://floatui.com/) - 免费的网页开发工具，用于快速创建现代化、响应式的网站和具有时尚设计的网页，即使对于非设计师也适用。
  * [Ant Design Landing Page](https://landing.ant.design/) - [Ant Design](https://ant.design/) 行业着陆页提供了一个由 [Ant Motion](https://motion.ant.design/) 的动态组件构建的模板。它具有丰富的首页模板，下载模板代码包，可以快速使用。你也可以使用编辑器快速创建自己的专用页面。
  * [Backlight](https://backlight.dev/) —— Backlight是一款全面性的编码平台，旨在促进开发者和设计师之间的合作。其中，免费计划允许最多3名编辑者共同合作一个设计系统，并且可以拥有无限的浏览者。
  * [BoxySVG](https://boxy-svg.com/app) ——用于绘制SVG和导出SVG、PNG、jpeg等格式的免费可安装Web应用程序。
  * [Carousel Hero](https://carouselhero.com/) - 创建社交媒体旋转木马的免费在线工具。
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，例如React、Vue和Svelte的SVG图标。
  * [cleverbrush.com](https://www.cleverbrush.com/) ——免费的图形设计/照片拼贴应用程序。同时，他们还提供了组件形式的付费集成。
  * [cloudconvert.com](https://cloudconvert.com/) —— 将任何格式转换为任何格式。支持208种格式，包括视频和GIF。
  * [CodeMyUI](https://codemyui.com) - 精选的网页设计和用户界面灵感，配有代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶级调色板中获取灵感。
  * [coolors](https://coolors.co/)

  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台（Enterprise Class Guidance and Engagement Platform），免费计划支持最多3个向导，每个向导最多5步。
  * [Webflow](https://webflow.com) - 支持动画和网站托管的WYSIWYG网站构建工具（网站构建工具），免费使用两个项目。
  * [Updrafts.app](https://updrafts.app) - 基于Tailwind CSS设计的WYSIWYG网站构建工具，非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 支持协作的流程图、线框图、便利贴和思维导图工具。最多创建4个免费板块。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台，展示设计、资产和样式指南，免费使用一个项目。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人、独特的图形和图像。
  * [Responsively App](https://responsively.app) - 快速、精确的响应式Web应用开发工具，免费使用。
  * [SceneLab](https://scenelab.io) - 拥有大量免费设计模板的在线模拟图形编辑器。
  * [xLayers](https://xlayers.dev) - 预览和转换Sketch设计文件为Angular、React、Vue、LitElement、Stencil、Xamarin等格式（免费开源，GitHub仓库：https://github.com/xlayers/xlayers）。
  * [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大、SEO优化的网页构建工具，前五页免费，自定义域名、所有功能和简单使用无限制。
  * [Mastershot](https://mastershot.app) - 完全免费的浏览器内视频编辑器，无水印，支持最高1080p导出。
  * [Unicorn Platform](https://unicornplatform.com/) - 不需要编码的登陆页构建工具，包含托管功能，一个网站免费。
  * [SVGmix.com](https://www.svgmix.com/) -

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [最好的网站] 设计师投票选出的最佳设计网站。
  * [Behance](https://www.behance.net/) - [设计展示] 一个让设计师展示作品的地方，支持按 UI/UX 项目分类筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不是来自真实应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据你的偏好，找到最好的登陆页面以供设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登陆页面 / UI 设计套件 / 网页截图] Lapa Ninja 是一份画廊，展示了 6025 个最佳的登陆页面示例，设计师的免费书籍和来自互联网的免费 UI 设计套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登陆页面设计] 经常更新的登陆页面截图，包括桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动设备截图] 使用我们 50,000+ 全文搜索的移动应用截图库，节省 UI & UX 研究的时间。
  * [Uiland Design](https://uiland.design/) - [移动设备截图] 探索来自非洲和世界各地领先公司的移动设备和网页 UI 设计。
  * [移动设备模式](https://www.mobile-patterns.com/) - [移动设备截图] 一个设计灵感库，展示了最好的 UI UX 模式（iOS 和 Android），供设计师、开发者和产品创作者参考。
  * [页面流程](https://pageflows.com/) - [移动设备 / 网页视频和截图] 许多移动设备和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动设备截图] 保持与最新的网页和移动应用 UI 设计趋势同步。可按模式和应用进行筛选。
  * [scrnshts](https

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 免费的开发者计划每月可享受30K次请求。
  * [carto.com](https://carto.com/) — 创建来自公开数据和您自己的地理数据的 mapa 和地理空间 API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样工作的地图工具。五万次免费月度查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — web、桌面和移动端的地图、地理空间数据存储、分析、地理编码、路由等 API 和 SDK。每月免费提供200万基础地图瓦片、20,000个非存储地理编码、20,000条简单路线、5,000条驾驶时间计算和5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - Places API 和 Pilgrim SDK 提供的位置发现、场馆搜索和上下文-aware 内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和栅格地图瓦片、地理编码、地点、路由、等值线 API。每天3000次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过 API 或 CSV 上传进行地理编码。每天2500次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过 API 或 CSV 上传进行地理编码和地理解析。每月1万次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性 REST/JSON/JSONP IP 地理位置查找 API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 提供免费的开发者套餐，用于路线、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/) — 地图和位置感知应用的 API 和

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 为多个Linux发行版（SUSE，Enterprise Linux，Fedora，Debian等）提供的软件包 [build服务](服务)。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于 [Mock](Mock) 的 [RPM](RPM包管理器) build服务，用于Fedora和Enterprise Linux。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — [Ubuntu](Ubuntu操作系统) 和 [Debian](Debian操作系统) 的build服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP shell和代码分享站点，可以在300+个PHP版本中运行代码
  * [Android Studio](https://developer.android.com/studio) — 为每种类型的Android设备提供最快的应用构建工具的Android Studio。开源IDE对每个人都是免费的，是最好的Android应用开发工具。可用于Windows、Mac、Linux，甚至ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) — 一个开源IDE，用于在Android设备上开发基于Gradle的Android应用。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 支持即时API模拟和生成文档的协同API设计工具（免费使用，具有无限API蓝图和无限用户，包括一个管理员帐户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费模式提供[功能强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)及对高级功能的升级路径。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的集合。这是一个免费的公共服务。
  * [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万用户使用。由Oracle提供支持，具有简单的GUI，帮助初学者入门。
  * [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用程序生成器。
  * [Brackets](http://brackets.io/) - Brackets是一款专门为网页开发设计的开源文本编辑器。它轻量、易用且高度可定制。
  * [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段组织器，具有标签功能。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源且可在Windows、macOS和Linux

  * [VSCodium](https://vscodium.com/) - 社区驱动的 [Microsoft](Microsoft微软) 编辑器 [VSCode](VSCode) 的二进制分发版本，不会进行遥测/跟踪，并且具有自由许可
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件来量化自我的编码活动指标，免费计划有限
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源的、跨平台的终端，为无缝的工作流程提供了条件。支持内联渲染、保存会话和历史记录，基于开源的 Web 标准。支持 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 支持 58 个模板、故事和测试的网页组件代码编辑器，可以在浏览器中编写和隔离地测试 web 组件。
  * [PHPSandbox](https://phpsandbox.io/) — PHP 的在线开发环境
  * [WebDB](https://webdb.app) - 免费、高效的数据库 IDE。其功能包括服务器发现、ERD（实体关系图）、数据生成、AI、NoSQL 结构管理、数据库版本控制等。
  * [Zed](https://zed.dev/) - Zed 是由 [Atom](Atom) 和 [Tree-sitter](Tree-sitter) 的创建者开发的高性能多人代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch是一种反向ETL平台，帮助您从数据仓库同步客户数据到CRM、营销和支持工具。免费套餐提供一个目的地来同步数据。
  * [Avo](https://avo.app/) — 简化的分析发布工作流程。单一来源的跟踪计划，类型安全的分析跟踪库，应用内调试器和数据可观测性，以便在发布前捕获所有数据问题。免费适用于两个工作空间成员和1小时的数据可观测性回顾。
  * [Branch](https://www.branch.io) — 移动分析平台。免费套餐提供最多10K移动应用程序用户，具有深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（Git、Github和Gitlab）。免费套餐包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。从数据仓库同步10个字段到60+ SaaS，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划适用于一个网站，有3000次查看分析。
  * [Databox](https://databox.com) — 通过结合其他分析和BI平台获得商业洞察和分析。免费计划提供3个用户、仪表盘和数据源。11M历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月2,000次页面浏览量，适用于1个网站
  * [amplitude.com](https://amplitude.com/) — 每月1百万个事件，最高可支持2个应用程序
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一种开源的网络分析平台，作为托管服务（用于非商业用途）或自托管应用程序提供。它旨在提供易于使用和

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个站点：1,000 次页面查看/天，三个热力图，三个小部件，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，具有开发人员工具用于 bug 复制，实时会话用于实时支持，以及产品分析套件。每月 1,000 次会话，可访问所有功能，保留 7 天。
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 次会话，保留 30 天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月 1,000 次会话，数据保留一个月，三个用户席位。更多信息 [点击这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个站点：每月 1,050 次页面查看，无限热力图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 为一个网站每月免费 2,500 次会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，无流量限制，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 为一个网站每月免费 500 次会话
  * [mousestats.com](https://www.mousestats.com/) — 为一个网站每月免费 100 次会话
  * [smartlook.com](https://www.smartlook.com/) — web 和移动应用的免费套餐（每月 1,500 次会话），三个热力图，一个漏斗，1 个月数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与和事件。免费适用于每月 5,000 次访问
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并观看访问者如何使用您的网站或应用程序。小型项目免费，时间不限

**[⬆️ 返回顶部](#table

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询 [JSON API](API)。每月100个API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证的免费、快速、可靠的 [JSON API](API)。每月1000个请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 集成式跨平台订阅管理平台，提供分析、A/B测试、[Apple Search Ads](苹果搜索广告)（Apple Search Ads）、远程配置和增长工具，以优化应用内购买和盈利。兼容 [iOS](iOS操作系统)、[Android](安卓操作系统)、[React Native](React Native跨平台开发框架)、[Flutter](Flutter跨平台开发框架)、[Unity](Unity游戏引擎)、[Cordova](Apache Cordova混合应用开发框架)、[Stripe](Stripe在线支付系统) 和 web。每月跟踪收入（monthly tracked revenue）最高可达10,000美元免费使用。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) –根据访问者位置自动调整价格，以扩大您的业务覆盖全球和触达新市场（购买力平价）。免费计划包括每月7,500次API请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和开箱即用的盈利工具，支持[iOS](iOS操作系统)、[Android](安卓操作系统)、[Stripe](Stripe在线支付系统) 和 [Paddle](Paddle在线支付系统)。每月收入最高可达10,000美元免费使用。
  * [Adapty.io](https://adapty.io/) – 一个整体解决方案，提供开源SDK用于移动应用内订阅集成，支持[iOS](iOS操作系统)、[Android](安卓操作系统)、[React Native](React Native跨平台开发框架)、[Flutter](Flutter跨平台开发框架)、[Unity](Unity游戏引擎) 或 web 应用。每月收入最高可达10,000美元免费使用。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币和法定货币汇率。免费层提供每月10,000次调用信用。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率数据。开发者免费计划每月可用1,000次请求。
  * [CoinGecko](https://www.coingecko.com/en/api

## 与Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，为团队提供30个免费的私有仓库，用于构建和存储Docker镜像
  * [容器注册服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版本提供1 GB的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 提供一个免费的私有仓库和无限数量的公有仓库，用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的Docker学习平台。
  * [quay.io](https://quay.io/) — 提供无限数量的免费公有仓库，用于构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名和临时的Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp 的 Vagrant 云（Vagrant云平台）. Vagrant box 的托管平台.
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个替代的公共盒子索引

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的、基于 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员们分享想法、互相帮助成长的平台。
  * [Hashnode](https://hashnode.com/) — 为开发人员提供的无忧博客软件。
  * [Medium](https://medium.com/) — 更深入地思考那些对你来说至关重要的事。
  * [AyeDot](https://ayedot.com/) — 在现代多媒体短格式Miniblogs中免费与世界分享你的想法、知识和故事。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站的受众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个基于 GitHub Issue 的轻量级评论小工具。使用 GitHub Issue 来评论博客文章、wiki 页面等！
  * [Disqus](https://disqus.com/) - Disqus 是一个被互联网上数十万网站使用的社区平台。
  * [Remarkbox](https://www.remarkbox.com/) - 开源的托管评论平台，按需付费，"一个管理员可以完全控制几个域名的行为和外观"
  * [IntenseDebate](https://intensedebate.com/) - 一个针对 WordPress、Tumblr、Blogger 和许多其他网站平台的功能丰富的评论系统。

**[⬆️ 回到顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 一个基于 [Aws Lambda](AWSLambda) 和 [Chrome](谷歌浏览器) 的截图 API。支持全页截图、捕获计时和视口尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，包括元标签规范化、美丽链接预览、网页爬取能力或截图作为服务。每天提供250个免费请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图 API 使用简单的 API 调用来生成任何网站的截图。设计用于扩展，并托管在 [Google Cloud](谷歌云) 上。提供每月100个免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 捕获任何网站的高度可定制的快照。100个快照/月免费
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 捕获每月100个快照，支持png、gif和jpg格式，包括全长截图，不仅仅是首页
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费套餐提供每天最多500个页面。自2017年以来免费。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名智能 API 服务。每月100个免费请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为jpg、png或pdf。捕获全页截图，调整视口，注入自定义代码。每月150张图片免费。
  * [Screenshots](https://screenshotson.click) — 您的截图 API。具有高度可定制的捕获选项。每月100个截图免费。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab是一个现代的Flutter在线集成开发环境（Integrated Development Environment，IDE），同时也是创建、调试和构建跨平台项目的最佳场所。使用Flutter可以构建iOS（无需Mac）和安卓应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic是一个完全托管和管理的CI/CD（持续集成/持续交付）工具，适用于移动应用。您可以使用图形化的CI/CD工具进行构建、测试和部署。免费版本提供每月500分钟的使用时间和一个配备2.3 GHz CPU和8 GB RAM的Mac Mini实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow是一个基于浏览器的拖拽式界面，用于使用Flutter构建移动应用。

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的 x86 虚拟机（Virtual Machine），能够运行 [Linux](https://zh.wikipedia.org/wiki/Linux) 和 [Windows 2000](https://zh.wikipedia.org/wiki/Windows_2000)。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个 OpenRISC 虚拟机（虚拟机），能够运行 [Linux](https://zh.wikipedia.org/wiki/Linux) 并支持网络。
  * [v86](https://copy.sh/v86) — 一个 x86 虚拟机，能够直接在浏览器中运行 [Linux](https://zh.wikipedia.org/wiki/Linux) 以及其他操作系统。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续的工作流程帮助实施按设计实现隐私（privacy by design），以确保组织遵守 [GDPR（通用数据保护条例）](https://gdpr-info.eu/) 和其他法规。免费版本仅适用于较小的团队且仅限SaaS版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，包括从 [GDPR](https://gdpr-info.eu/) 代表到 [Cookie](https://zh.wikipedia.org/wiki/HTTP%E6%8A%95%E7%89%A9) 横幅等一切。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 [Cookie](https://zh.wikipedia.org/wiki/HTTP%E6%8A%95%E7%89%A9) 政策以及同意管理。免费版本提供有限的隐私和 [Cookie](https://zh.wikipedia.org/wiki/HTTP%E6%8A%95%E7%89%A9) 政策以及 [Cookie](https://zh.wikipedia.org/wiki/HTTP%E6%8A%95%E7%89%A9) 横幅。
  * [Cookiefirst](https://cookiefirst.com/) - [Cookie](https://zh.wikipedia.org/wiki/HTTP%E6%8A%95%E7%89%A9) 横幅、审计和多语言同意管理解决方案。免费版本提供一次性扫描和单个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，访客数量有限。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理 ([DSARs](https://gdpr-info.eu/issues/data-subject-access-request/)) 和数据映射。免费版本包括核心同意管理功能，他们还为经过验证的开源项目提供更高级的计划，且免费使用。

**[⬆️ 返回顶部](#目录)**

## Miscellaneous

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图像创建美观的截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件。可以作为美丽的图像分享，例如用于 Twitter 或 Facebook 的帖子，也可以作为链接分享，例如用于聊天或论坛。
  * [Blynk](https://blynk.io) — 一种具有API的SaaS，用于控制、构建和评估物联网设备。开发者计划免费，包含5个设备、免费云存储和数据存储。移动应用也可用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个具有强大内置多行计算器的笔记应用（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图格式创建和分享代码片段。通常用于在Twitter或博客文章中美观地分享/展示代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建优秀的快照以分享到社交媒体。
  * [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图以分享到社交媒体。
  * [Cronhooks](https://cronhooks.io/) - 安排一次或定期的网络勾子。免费计划允许5个临时计划。
  * [cron-job.org](https://cron-job.org) - 在线cronjob服务。无限任务免费。
  * [datelist.io](https://datelist.io) - 在线预约/预订系统。每月最多5个预订，包含1个日历，免费。
  * [Domain Forward](https://domain-forward.com/) - 一个直接的工具，用于转发任何URL或域名。最多5个域名和200k次请求每月免费。
  * [Elementor](https://elementor.com) — WordPress网站构建器。免费计划可用，包含40+基本小工具。
  *

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) — 为2个设备提供免费服务，无会议数量和时长限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 需求响应式支持和设备永久访问（每天2个免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 免费/付费的资产，如精灵（sprites）、瓦片集（tile sets）和角色包（character packs）。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自游戏艺术家们的免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费的资产，如2D、3D、音频、GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资产，如音乐、音效、精灵和GIF图。
  * [CraftPix](https://craftpix.net) — 免费/付费的资产，如2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
  * [Game Icons](https://game-icons.net/) - 免费的可样式SVG/PNG图标，采用CC-BY许可协议。
  * [LoSpec](https://lospec.com/) — 用于创建像素艺术和其他限制性数字艺术的在线工具，提供许多教程和调色板选择，适用于您的游戏。
  * [ArtStation](https://www.artstation.com/) - 2D、3D资产和音频的市场平台，包括图标、瓦片集和游戏套件。同时，也可用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，以及使用其免费计划创建您自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形3D资产。
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费的3D模型和PBR材质，用于创建纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（具有可变分辨率）、模型、HDRIs和画笔。提供免费插件以导出到Blender等软件。
  * [Freesound](https

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 为Web开发者提供的免费工具，包括CSS压缩、展开，图片优化，图片缩放，大小写转换，CSS验证，JavaScript编译，HTML编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可免费获得高达200小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名，用于localhost开发。
  * [Framacloud](https://degooglisons-internet.org/en/) — 由法国非营利组织[Framasoft](https://framasoft.org/en/)提供的免费/开源软件和SaaS列表。
  * [github.com — FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费和开源软件的中心。
  * [GitHub 教育版](https://education.github.com/pack) — 为学生提供的一系列免费服务。需要注册。
  * [Markdown 工具](https://markdowntools.com) - 将HTML，CSV，PDF，JSON和Excel文件转换为和从Markdown的工具。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒，工具和其他用于在Microsoft 365平台上构建解决方案的资源。订阅包括90天的[Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括Windows），可续期。如果您处于活跃的开发状态（通过遥测数据和算法衡量），则可续期。
  * [Pyrexp](https://pythonium.net/regex) — 免费的基于Web的正则表达式测试器和可视化工具，用于调试正则表达式。
  * [RedHat for Developers](https://developers.redhat.com) — 免费访问Red Hat产品，包括RHEL，OpenShift，CodeReady等，仅限开发者使用。个人计划还提供免费的电子书。
  * [smsreceivefree.com](https://smsreceivefree