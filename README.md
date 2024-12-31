# free-for.dev

如今，开发者和开源人员有很多服务提供免费试用，但要作出明智选择就需要花费不少时间。

以下是一些软件（SaaS、PaaS、IaaS等）和其他提供的免费开发者版服务。

这个特定列表的范围仅限于系统管理员、DevOps从业者等基础设施开发人员可能会发现有用的东西。我们喜欢所有这些免费服务，但最好保持主题。这有时就是一道灰色的界限，所以这带有主观色彩，请不要因我拒绝您的贡献而感到不快。

这个列表源自多个拉取请求、评审、创意和1600+人的贡献。您可以通过发送[Pull Requests](https://github.com/ripienaar/free-for-dev)来增加更多服务或移除那些服务的提供已经改变或退役的。

[![跟踪棒极了列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这个列表仅适用于基于服务的产品，而非自托管软件。要想被收录，服务必须提供免费版，而非只是免费试用。如果时间按量计费，免费版至少要持续一年。我们还会从安全角度来考虑，所以SSO是可以接受的，但那些把TLS限制为付费级服务的产品我不会接受。

# 目录

  * [主要云提供商的免费限制](#主要云提供商的免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [工件存储库](#工件存储库)
  * [BaaS（后端即服务）](#BaaS（后端即服务）)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成和持续部署](#持续集成和持续部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图上的数据可视化](#地图上的数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户体验](#设计和用户体验)
  * [设计灵感](#设计灵感)
  * [开发者博客网站](#开发者博客网站)
  * [域名服务](#域名服务)
  * [Docker相关](#Docker相关)
  * [域名管理](#域名管理)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
  * [特性开关管理平台](#特性开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [IaaS（基础设施即服务）](#IaaS（基础设施即服务）)
  * [IDE和代码编辑器](#IDE和代码编辑器)
  * [国际移动电话号码验证API和SDK](#国际移动电话号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息传递和流媒体](#消息传递和流媒体)
  * [其他](#其他)
  * [监控](#监控)
  * [PaaS（平台即服务）](#

## 主要云提供商的免费限制

  * Google Cloud Platform
    * App Engine：每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore：1GB存储，每天5万次读取、2万次写入和2万次删除操作
    * Compute Engine：1个非抢占式e2-micro实例，30GB硬盘，5GB快照存储（仅限于某些地区），每月从北美到所有区域目的地1GB的网络出站（不包括中国和澳大利亚）
    * Cloud Storage：5GB存储，每月1GB网络出站
    * Cloud Shell：基于Web的Linux shell/主要IDE，有5GB持久存储，每周60小时限制
    * Cloud Pub/Sub：每月处理10GB的消息
    * Cloud Functions：每月200万次调用（包括后台和HTTP调用）
    * Cloud Run：每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，北美每月从北美出站1GB网络流量
    * Google Kubernetes Engine：管理一个专区集群的费用为零，每个用户节点按标准Compute Engine价格收费
    * BigQuery：每月查询1TB，存储每月10GB
    * Cloud Build：每天120分钟构建时间
    * Cloud Source Repositories：最多5个用户，50GB存储和50GB出站流量
    * [Google Colab](https://colab.research.google.com/)：免费Jupyter Notebooks开发环境
    * [idx.dev](https://idx.dev)：Google Project IDX，基于Google Cloud的在线VSCode
    * 全部详细列表 - <https://cloud.google.com/free>
    
  * Amazon Web Services
    * [CloudFront](https://aws.amazon.com/cloudfront/)：每月1TB出站流量，每月20万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/)：10个自定义指标和10个报警
    * [CodeBuild](https://aws.amazon.com/codebuild/)：每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/)：5个活跃用户，50GB存储和每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/)

    * [Workers](https://developers.cloudflare.com/workers/) — 在 Cloudflare 的全球网络上部署无服务器代码，免费，每天高达 10 万个请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天 1 万个读取请求，每天 1000 个写入请求，每天 1000 个删除请求，每天 1000 个列表请求，存储数据 1 GB
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10 GB，每月 100 万次 Class A 操作，每月 1000 万次 Class B 操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天 50 万个读取行，每天 1 万个写入行，存储 1 GB
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上构建和部署您的 web 应用。每月 500 个构建，最多 100 个自定义域名，集成 SSL，无限访问量，无限预览部署，以及通过 Cloudflare Workers 集成的完整栈功能。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 每月免费（向外发送）流量 1 TB。  

**顶部**[⬆️]

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一个协作解决方案，用视觉方式构建和管理端到端的云基础设施。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），Cloud 66为你的应用程序在任何云上构建、部署和扩展提供了所需的一切，无需面对“服务器管理”的头疼。
  * [Pulumi](https://www.pulumi.com/) - 一个现代化的基础设施即代码平台，允许你使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) - Terraform Cloud。免费的远程状态管理和团队协作，适用于最多500个资源。
  * [scalr.com](https://scalr.com/) - Scalr是用于 Terraform 自动化和协作（TACO）的产品，有助于改进在 Terraform 管理的基础设施和配置上的协作和自动化。完全支持 Terraform CLI，整合 OPA，并采用层次化的配置模型。没有SSO要求。所有功能都包含在内。免费版每月可使用50个运行次数。
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发者自动化AWS上的部署。在免费版，一个开发者（单用户）可以无限制地部署静态站点、网络服务和环境。免费版包含每月20次作业执行，预览和自动部署功能都在免费版内。

**[⬆️ 回目录](#目录)**

## Source Code Repos

  * [比特bucket](https://bitbucket.org/) — 为最多5名用户提供的无限公开和私有Git仓库, 还提供CI/CD管道
  * [chiselapp.com](https://chiselapp.com/) — 无限公开和私有Fossil存储库
  * [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目, 包含100 MB空间和两个用户
  * [Codeberg](https://codeberg.org/) — 免费公开和私有Git仓库, 专为免费和开源项目(不限协作人数)提供。由[Forgejo](https://forgejo.org/)提供支持。包括静态网站托管[Codeberg Pages](https://codeberg.page/)、CI/CD托管[Codeberg的CI](https://docs.codeberg.org/ci/)、翻译托管[Codeberg Translate](https://translate.codeberg.org/)。还提供包和容器托管、项目管理以及问题跟踪
  * [GitGud](https://gitgud.io) — 无限私有和公共仓库。永久免费。使用GitLab和Sapphire提供支持。未提供CI/CD
  * [GitHub](https://github.com/) — 无限公共仓库和无限私有仓库(最多5个协作作者)。包含CI/CD、开发环境、静态托管、包和容器托管、项目管理以及AI Copilot
  * [gitlab.com](https://about.gitlab.com/) — 无限公开和私有Git仓库, 支持最多5位协作者。包含CI/CD、静态托管、容器注册表、项目管理以及问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit是基于GitLab的Framasoft软件的软件仓库, 提供CI、静态页面、项目页面和问题跟踪
  * [heptapod.net](https://foss.heptapod.net/) — 基于GitLab开源版的友好分支, 支持Mercurial
  * [ionicframework.com](https://ionicframework.com/appflow) — 提供开发 Ionic 应用所需的仓库和工具, 也有配有一个Ionic仓库
  * [NotABug](https://notabug.org) — 是针对已授权项目的免费软件代码协作平台, Git为基础
  * [OSDN](https://osdn.net/)

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 是一个免费工具，用于可视化、编辑和过滤复杂的 JSON 数据，将其转换为漂亮的表格网格。您可以通过链接保存和分享 JSON 数据。
  * [Zerosheets](https://zerosheets.com) - 让您的 Google Sheets 表格变为强大的 API，用于快速构建原型、网站、应用等。免费计划每月有500次请求。
  * [IP.City](https://ip.city) - 免费提供每日100个IP地址的地理位置信息。
  * [Abstract API](https://www.abstractapi.com) - 提供一系列API以满足不同需求，例如IP定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) - 是一款网络爬取和自动化平台，可为任何网站创建一个API并提取数据。带有限制的免费计划每月包含5美元平台信用。
  * [APITemplate.io](https://apitemplate.io) - 非常易用，能自动生成图像和PDF文档，配合自动化工具如Zapier和Airtable。免费版每月50个图像和三个模板限制。
  * [APIToolkit.io](https://apitoolkit.io) - 一个集为一体的工具，帮助你全面理解 API 和后台的运作。免费版针对每月不超过20,000次的服务器请求。
  * [APIVerve](https://apiverve.com) - 可在免费计划下直接访问120多个API，这些API设计时注重质量、一致性和可靠性。免费计划每月包含50个API令牌。
  * [Arize AI](https://arize.com/) - 提供机器学习可观测性，监控模型的可预测性等问题。免费版支持两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 一个可以轻松开发单页面 web 应用，并随时可用的轻量级库。支持 Java、Node.js、Perl、Python 和 Ruby。
  * [Beeceptor](https://beeceptor.com) - 快速模拟REST API，伪造API响应等。免费版限每日50次请求，以及公开的仪表板和开放的端点（可让通过仪表板链接的人查看提交和答案）。
  * [bigml.com](https://bigml.com/) - 提供托管的机器学习

  * [Doczilla](https://www.doczilla.app/) — 提供HTML/CSS/JS代码的截图或PDF生成的SaaS API。免费版每月允许生成250份文档。
  * [Doppio](https://doppio.sh/) — 提供PDF和截图生成管理API，采用顶级渲染技术。免费版每月限制400份PDF和截图。
  * [DreamFactory](https://dreamfactory.com/) — 开源REST API后端，适用于移动应用、Web应用和IoT 应用。支持连接任何SQL/NoSQL数据库、文件存储系统或外部服务，自动生成全面的REST API平台，带有实时文档和用户管理功能。
  * [DynamicDocs](https://advicement.io) — 通过JSON到PDF API生成PDF文档，模板基于LaTeX。免费版每月允许50次API调用和使用模板库。
  * [Efemarai](https://efemarai.com) — 用于ML模型和数据的测试和调试平台。可可视化任何计算图。开发者免费权限提供每月30个调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 基于网络的免费HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) — 提供拖放模板编辑的PDF生成API，提供SDK和无代码集成。免费版每月250页，不限用户数，可使用三个模板。
  * [Fern](https://buildwithfern.com) — 根据API定义生成不同语言的SDK，以及生成API参考文档网页。支持OpenAPI。通过提供Markdown页面并使用Fern托管，实现完整文档解决方案。
  * [file.coffee](https://file.coffee/) — 平台，可存储单个文件最高达15MB（拥有账户时可增至30MB）。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 用于信用卡支付欺诈筛选订单交易。免费的微计划每月可进行500次交易检测。
  * [Geekflare API](https://geekflare.com/api) — 提供截图、网站审计、TLS扫描、DNS查询、测试TTFB等功能。免费版提供3000个API请求。
  * [GeoCod](https://geocod.xyz) —

  * [Market Data API](https://www.marketdata.app) - 提供实时和历史金融数据，适用于股票、期权、共同基金等。免费版允许每天最多100次API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 提供全球天气API，提供当前和预报天气数据。免费提供每日400次调用。
  * [microlink.io](https://microlink.io/) - 能将任何网站转换为元数据、美化链接预览、屏幕截图、网页抓取等服务，100次请求/天，免费使用。
  * [Mindee](https://developers.mindee.com/docs) — 提供强大的OCR软件和基于API的平台，通过计算机视觉和机器学习自动处理文档处理层。免费版每月支持250页。
  * [Mintlify](https://mintlify.com) — 是API文档的现代规范，提供了美观的UI和维护界面。免费版限1个编辑器使用。
  * [MonkeyLearn.com](https://monkeylearn.com/) - 提供文本分析功能，免费使用每月300个查询。
  * [MockAPI](https://www.mockapi.io/) — 帮助你快速创建API模拟、生成定制数据和使用REST接口执行操作的工具。可用于原型测试/学习。免费版带限于一个项目/4个资源。
  * [Mockfly](https://www.mockfly.dev/) — 一个可信的API开发工具，用于API模拟和特征旗管理。免费版提供每日500次请求。
  * [Mocki](https://mocki.io) - 可以创建与GitHub仓库同步的GraphQL和REST API模拟。简单REST API开发和使用免注册。
  * [Mocko.dev](https://mocko.dev/) — 助于API映射、云中选择要模拟的端点和查看请求，免费提供。
  * [Mocky](https://designer.mocky.io/) - web应用，用于生成基于HTTP请求的自定义HTTP响应。开源版也在[GitHub](https://github.com/julien-lafont/Mocky)上。
  * [reqres.in](https://reqres.in) - 一个免费的RESTful API，已准备好响应您的AJAX请求。
  * [microenv.com](https://microenv.com

  * [ROBOHASH](https://robohash.org/) - 从任何文本生成独特且酷炫的图片的网络服务。
  * [SaturnCloud](https://saturncloud.io/) - 数据科学云环境，支持运行Jupyter笔记本和Dask集群。每月免费30小时计算资源和3小时Dask时间。
  * [Scraper's Proxy](https://scrapersproxy.com) — 提供简单HTTP代理API进行网络抓取。抓取时匿名，无需担心限制、屏蔽或验证码，每月前100次成功刮取免费，包括支持使用JavaScript渲染（联系支持获取更多服务）。
  * [ScrapingAnt](https://scrapingant.com/) — 提供无头Chrome抓取API和免费检查代理服务。支持JavaScript渲染和高级旋转代理，避免验证码。有免费计划可供选择。
  * [ScraperBox](https://scraperbox.com/) — 使用真实Chrome浏览器和代理轮询的不可检测网页抓取API。只需简单调用就能刮取任何网页内容，免费计划每周1000个请求。
  * [ScrapingDog](https://scrapingdog.com/) — 抓取脚本处理百万代理、浏览器和验证码，让你通过单一API调用获取任何网页的HTML内容。包括Web Scraper for Chrome & Firefox以及软件以满足即时抓取需求。有免费计划。
  * [scrapinghub.com](https://scrapinghub.com) — 提供可视界面和插件的数据抓取服务，免费计划包括无限抓取，共享服务器使用。
  * [Simplescraper](https://simplescraper.io) — 提供每个操作后触发webhook的功能。免费计划包含1000云刮取信用。
  * [Select Star](https://www.selectstar.com/) - 智能数据发现平台，能够自动分析和文档化数据，轻量级层级可免费试用，单个数据源、最多100个表单和10个用户。
  * [Sheetson](https://sheetson.com) - 即时将Google Sheets转变为RESTful API，有免费版可选择。
  * [Shipyard](https://www.shipyardapp.com) — 云中的低代码数据编排平台，混合使用低代码模板和Python、Node.js、Bash或SQL代码进行构建。

  * [Zuplo](https://zuplo.com/) - 一个免费的API管理平台，用于设计、构建和部署API到边缘。几分钟内即可为任何API添加API密钥身份验证、速率限制、开发者文档和货币化。它原生支持OpenAPI，并且完全可编程，支持Web标准API和TypeScript。免费计划提供10个项目，无限的生产边缘环境，250个API密钥，每月10万个请求，以及1GB的出站流量。

**[⬆️ 返回目录](#目录)**

## 工件存储库

  * [Artifactory](https://jfrog.com/start-free/) - 类似Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS支持的组件仓库。它还包括扫描工具XRay和CI/CD工具Pipelines（以前称为Shippable），每月有2,000分钟的免费CI/CD时间。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认组件仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven和PyPI仓库。对于开源项目是免费的。
  * [cloudsmith.io](https://cloudsmith.io) — 提供简单、安全和集中的存储服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。有免费层级，且开源项目完全免费。
  * [jitpack.io](https://jitpack.io/) - 为GitHub上的JVM和Android项目提供的Maven仓库。公共项目是免费的。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 提供Maven、RPM、DEB、PyPi、NPM和RubyGem包的使用简便的仓库托管服务（有免费层级）。
  * [repsy.io](https://repsy.io) — 免费的私人和公共Maven仓库，提供1 GB存储空间。
  * [Gemfury](https://gemfury.com) — 提供Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公共组件仓库。公共项目是免费的。
  * [paperspace](https://www.paperspace.com/) — 建立并扩展AI模型，开发、训练和部署AI应用程序。免费版提供：公开项目的功能，包含5GB存储和基本实例。
  * [RepoForge](https://repoforge.io) - 私有云托管的Python、Debian、NPM包和Docker注册表服务。开源项目有免费计划。
  * [RepoFlow](https://repoflow.io) - 简化组件管理，支持npm、PyPI、Docker、Go等。云端免费功能包含10GB存储、10GB带宽、100个组件

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个云端代码片段管理工具，用于个人和团队协作。
  * [Bitwarden](https://bitwarden.com) — 最方便、最安全的个人、团队和企业存储、共享和同步敏感数据的方式。
  * [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。免费公开小组，无限用户，历史记录和集成。另外提供开源自托管版本。
  * [cally.com](https://cally.com/) — 为会议寻找完美的时间和日期。使用简单，适合小型和大型团队。
  * [Calendly](https://calendly.com) — 一个连接和安排会议的工具。免费版提供每个用户1个日历连接和无限的会话。有桌面和移动应用。
  * [Discord](https://discord.com/) — 公开或私密房间的聊天。包括Markdown文本、语音、视频和屏幕共享功能。不限用户量，免费。
  * [Telegram](https://telegram.org/) — 适合追求快速、可靠的通讯和电话的每个人。商业用户和小型团队可能会欣赏大的群组、用户名、桌面应用和强大的文件共享功能。
  * [Dubble](https://dubble.so/) — 带屏幕截图和过程文档的免费一步创建指南工具。支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 实时与团队沟通。支持IDE、终端共享，语音、视频和屏幕共享。免费版适合小型团队。
  * [Dyte](https://dyte.io) — 开发者友好的实时视频和音频SDK，包含增强生产力和参与度的协作插件。免费版本每月提供10,000分钟的实时视频/音频使用。
  * [Evernote.com](https://evernote.com/) — 信息组织工具。便于分享笔记并与他人协作。
  * [Fibery](https://fibery.io/) — 连接式工作空间平台。单用户免费，2GB磁盘空间。
  * [Flock.com](https://flock.com) — 团队快速通信的更好方式。免费提供无限消息、频道、用户、应用和集成。
  * [Gather](https://www.gather.town/) - 一种更优质的在线见面方式。聚焦于可以

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步和讨论。云版本仅提供 1 GB 空间。
  * [Sema](https://www.semasoftware.com/) - 免费的开发者作品集工具，可将多个存储库的贡献汇总并生成报告。
  * [通过浏览器的屏幕分享](https://screensharing.net) — 免费的屏幕分享工具，可通过浏览器直接与同事分享您的屏幕，无需下载或注册。免费使用。
  * [Slab](https://slab.com/) — 一款面向团队的现代知识管理系统。最多10个用户可以免费使用。
  * [slack.com](https://slack.com/) — 无限用户免费，部分功能有限制。
  * [Spectrum](https://spectrum.chat/) — 免费创建公共或私有社区。
  * [StatusPile](https://www.statuspile.com/) — 一个显示上游提供商状态页面的服务。你能否追踪你的上游提供商的状态页面？
  * [Stickies](https://stickies.app/) — 用于头脑风暴、内容策划和笔记的视觉协作应用。3个墙、无限用户和1 GB 存储是免费的。
  * [Stacks](https://betterstacks.com/) — 包含集成笔记、链接和文件存储的信息工作空间，帮助您应对信息过载。个人计划永远免费。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名、对等，无需插件、注册或付款。
  * [Teamhood](https://teamhood.com/) - 免费项目、任务和问题跟踪软件。支持看板泳道和完整的Scrum实施，具有集成的时间跟踪功能。最多支持5个用户和3个项目组合是免费的。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日Standup来改进团队开发流程。适用于小型团队的免费测试版，含全面的休假管理功能。
  * [Tefter.io](https://tefter.io) — 网络书签应用程序，具有强大的Slack集成。适用于开源团队的免费版本可用。
  * [TeleType](https://teletype.oorja.io/) — 分享终端、语音、代码、白板等，

**[回到顶部](#目录)**

## 内容管理系统

  * [阿克西亚](https://www.acquia.com/) — 提供 Drupal 网站的托管服务。针对开发者提供免费层次。也提供如 Acquia Dev Desktop 等免费开发工具。
  * [Contentful](https://www.contentful.com/) — 头部无 CMS。云端内容管理和交付 API。其中包括一个免费的 Community 空间，有五名用户、25,000 个记录、48 个内容类型和两种语言。
  * [宇宙](https://www.cosmicjs.com/) — 头部无 CMS 和 API 工具套件。为开发者提供了免费个人计划。
  * [结晶](https://crystallize.com) — 包含电商支持的头部 PIM。内置 GraphQL API。免费版包括无限用户、1,000 个目录项目、每月 5 GB 带宽和每月 25,000 个 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层次。基于 GraphQL 的 CMS。在较低层次，每月有 100,000 次调用。
  * [Directus](https://directus.io) — 头部无 CMS。一个完全免费和开源的平台，在本地或云端管理资产和数据库内容。没有任何限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 存储 JSON 内容到您的 Git 存储库的头部无 CMS。没有限制。
  * [kontent.ai](https://www.kontent.ai) - 一个内容即服务平台，提供头部 CMS 的所有好处，同时加强了营销人员的权力。开发人员计划为两名用户提供了无限的项目，每个项目有两个环境，500 个内容项目，两种语言，包括 Delivery 和 Management API，以及自定义元素支持。你可以使用更详细的计划来满足你的需求。
  * [Prismic](https://www.prismic.io/) — 头部无 CMS。内容管理界面，拥有完整的托管和可扩展的 API。社区计划为一名用户提供无限 API 调用、文档、自定义类型、资产和本地化。这些都是您下一个项目所需的一切。对内容开放/开源项目有更大的免费方案。
  * [Sanity.io](https://www.sanity.io/)

## 代码生成

  **[⬆️ 返回目录](#表格内容)**

* [Appinvento](https://appinvento.io/) - AppInvento是一个免费的无代码应用构建器。在自动生成的后端代码中，用户对源代码拥有完全访问权限，并且不限制API和路由，这支持大量集成。免费计划包含三个项目、五个表和一个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody是一个代码AI助手，利用AI和对代码库的深入理解，帮助您更快地编写和理解代码。Cody为开发人员提供了LLM（包括本地推理）的选择，支持多种IDE，支持所有主流编程语言，并有一个免费计划。免费计划每月为开发者提供20个聊天消息（使用Claude 3 Sonnet作为LLM）和500个自动完成（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) - 通过DhiWise创新的代码生成技术，您可以无缝将Figma设计转化为动态的Flutter和React应用，优化您的工作流程，更快地创建出色的移动和Web体验。
  * [Codeium](https://www.codeium.com/) - Codeium是一个免费的AI驱动代码完成工具，支持多种编程语言（如Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并与所有主要的独立和Web IDE集成。
  * [Fern](https://buildwithfern.com) - 编写API定义，使用它们来生成TypeScript、Python、Java、Go等流行语言的SDKs/客户端库。支持OpenAPI完全功能。免费级别最多可以生成20个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于C#。 Metalama在编译时动态生成代码的骨架，保持源代码干净。开源项目为免费，商业友好的免费版包含三个方面。
  * [Supermaven](https://www.supermaven.com/) - Supermaven是VSCode、JetBrains和Neovim的快速AI代码完成插件。免费版提供无限的行内完成。
  * [tabnine.com](https://www.tabnine.com/) - Tabnine通过提供从全球所有代码中学习到的洞察力，帮助开发者更快地创建出更好的软件。插

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 包括代码编写、评审和部署的完整工作流程。新用户可免费创建一个账户，一个包含100 MB存储空间的仓库。

* [browserling.com](https://www.browserling.com/) — 实时跨浏览器在线测试。免费版限制为3分钟，使用Windows Vista系统、分辨率1024 x 768的IE9进行测试。

* [codacy.com](https://www.codacy.com/) — 自动化的代码审查工具，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript。不限制公共和私有仓库的免费使用。

* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 自动化的基础设施作为代码审查工具，集成GitHub、Bitbucket、GitLab（包括自托管）。它除了标准语言外，还能分析Ansible、Terraform、CloudFormation、Kubernetes等。开源免费使用。

* [CodeBeat](https://codebeat.co) — 自动化代码审查平台，支持多种语言。公共仓库永远免费，支持Slack和电子邮件集成。

* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源和无限制组织内私有仓库（最多4个协作者）免费，对在校学生和机构同样免费。

* [codecov.io](https://codecov.io/) — 代码覆盖率工具（SaaS），开源项目免费，此外还提供一个免费的私有仓库。

* [CodeFactor](https://www.codefactor.io) — 自动化的Git代码审查，免费版包括不限用户和公共仓库，一个私有仓库。

* [coderabbit.ai](https://coderabbit.ai) — 基于AI的代码审查工具，集成GitHub和GitLab。免费层级包括每小时200个文件、3个审查和50个对话。开源项目免费使用。

* [codescene.io](https://codescene.io/) — 依据代码开发方式而优先排序技术债务，并展示团队耦合和系统掌握的知识图谱。免费版适用于开源项目。

* [CodSpeed](https://codspeed.io) — 在持续集成管道中自动性能跟踪，预防部署之前的性能衰退。开源项目永远免费。

* [coveralls.io](https://coveralls.io/) — 展

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) - 搜索32种不同包管理器的库，并获取开源项目的依赖更新通知，免费使用
  * [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站上搜索项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) - 全文本代码搜索服务，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) - 显示`TODO`注释（和其他标志），帮助识别需要改进的代码区域。
  * [CodeKeep](https://codekeep.io) - 为代码片段提供的Google Keep。组织、发现和分享代码片段，拥有强大的代码截图工具，包含预设模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * **[AccessLint](https://github.com/marketplace/accesslint)** - 将自动化网页无障碍测试纳入开发流程。对于开源和教育目的免费。
  * **[appcircle.io](https://appcircle.io)** - 企业级移动DevOps平台，自动构建、测试和发布移动应用，助您快速高效地完成发布周期。免费附带限制：每构建最多30分钟，每月20个构建，1个并发构建。
  * **[appveyor.com](https://www.appveyor.com/)** - 专为Windows的CD服务，开源项目免费。
  * **[Argonaut](https://argonaut.dev/)** - 在几分钟内部署应用和基础设施，支持自定义部署和在Kubernetes和Lambda环境中的第三方应用。免费版最多支持5个域名和2名用户无限制的应用和部署。
  * **[bitrise.io](https://www.bitrise.io/)** - 专为移动应用（原生或混合）的CI/CD服务，开源项目可享受45分钟构建时间、+1并发构建和不限团队规模的免费版（限时10分钟构建、每月200次构建）。
  * **[buddy.works](https://buddy.works/)** - 可提供5个免费项目和1个并发运行的CI/CD服务（每月120次执行）。
  * **[Buildkite](https://buildkite.com)** - CI管道免费版包含3名用户和每月5000个工作分钟。免费开发者测试分析版包括每月100000次执行，开源项目可获得更多免费内容。
  * **[bytebase.com](https://www.bytebase.com/)** - 数据库CI/CD和DevOps服务，免费版适用于20名用户以下和10个数据库实例。
  * **[CircleCI](https://circleci.com/)** - 包含托管CI/CD服务所有功能的免费完整版，支持GitHub、GitLab和Bitbucket仓库。资源类别全面，包括Docker、Windows、Mac OS、ARM执行器、本地运行器、测试拆分、Docker层缓存等高级功能。私有项目每月免费执行时间6000分钟，不限制协作人，可有30个并行工作，开源项目另有免费180,000分钟构建权限。
 

## Testing

  * [Applitools.com](https://applitools.com/) — 智能视觉验证，针对Web、原生移动和桌面应用。它几乎可以与所有自动化解决方案（如Selenium和Karma）和远程运行器（如Sauce Labs、Browser Stack）集成。开源免费。单个用户免费版有限的检查点，每周一次。
  * [Appetize](https://appetize.io/) — 在云端的Android手机和平板电脑模拟器以及iPhone/iPad模拟器上测试您的Android和iOS应用。免费提供两个并发会话，每月30分钟使用时间。对于应用的大小没有限制。
  * [Apptim](https://apptim.com) — 一个手机测试工具，让没有性能工程技能的人也能评估应用的性能和用户体验（UX）。使用您自己的设备的桌面版完全免费，无限次在iOS和Android上进行测试。
  * [Argos](https://argos-ci.com) - 开源的视觉测试工具。无限项目，每月最多5,000张截图。对于开源项目免费。
  * [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于检测CI性能退步。对所有公开项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动浏览器测试，开源项目[免费试用](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 一个轻量级的web应用测试自动化工具，易于学习且无需编程。在您的电脑上免费运行无限次测试。每月额外付费可获得云监控和CI/CD集成。
  * [Checkly](https://checklyhq.com) - 适用于现代DevOps的代码第一合成监控。比传统提供商便宜地监控您的API和应用。由一个"只读代码"的监控工作流和Playwright驱动，提供极大的开发者免费额度。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，检查您的网站是否遵循50多条SEO、速度和安全性最佳实践。免费版适用于小规模网站。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的针对浏览器中任何内容的测试。Cypress测试运行器始终是免费开源的，无

  * **[UseWebhook.com](https://usewebhook.com)** - 在浏览器中捕获并检查webhook。转发到本地主机，或从历史中重放。可以免费使用。
  * **[Vaadin](https://vaadin.com)** - 使用Java或TypeScript构建可扩展的用户界面，并利用集成工具、组件和设计系统，以更快的速度迭代、设计得更好，简化开发流程。附带五年免费维护的无限项目。
  * **[websitepulse.com](https://www.websitepulse.com/tools/) - ** - 一系列免费的网络和服务器工具。
  * **[webhook-test.com](https://webhook-test.com)** - 在集成过程中，使用唯一的URL调试和检查webhook和HTTP请求。完全免费，您可以创建无限的URL并接收推荐。
  * **[webhook.site](https://webhook.site)** - 通过自定义URL验证webhook、外出HTTP请求或电子邮件。临时URL和电子邮件始终免费。
  * **[webhookbeam.com](https://webhookbeam.com)** - 设置webhook并通过推送通知和电子邮件监控它们。

**[⬆️ 返回目录](#目录)**

## Security and PKI

  - [aikido.dev](https://www.aikido.dev) — 提供全方位的应用安全平台，涵盖SCA、SAST、CSPM、DAST、机密管理、IAC、恶意软件、容器扫描、已过时等服务。免费计划包含两个用户、扫描10个仓库、1个云端、2个容器和1个域名。
- [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 侦测网络中的被攻击系统。
- [Altcha.org](https://altcha.org/anti-spam) — 一个以自然语言处理和机器学习为动力的网站和API的垃圾信息过滤器。免费计划每天提供200次请求 per 域。
- [atomist.com](https://atomist.com/) — 一个自动化多种开发任务的更快、更方便的方法，目前还在测试阶段。
- [cloudsploit.com](https://cloudsploit.com/) — 亚马逊网络服务（AWS）安全和合规性审计与监控。
- [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度威胁指标（IOC）列表，部分内容在GitHub上（https://github.com/unknownhad/AWSAttacks）。完整列表可通过API获取。
- [CodeNotary.io](https://www.codenotary.io/) — 公开源平台，提供为代码、文件、目录和容器提供不可更改的证明。
- [crypteron.com](https://www.crypteron.com/) — 一个云优先、面向开发者的安全平台，防止.NET和Java应用程序的数据泄露。
- [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单直观的网络应用，用于分析和编码/解码数据，无需使用复杂工具或编程语言，就像加密工具的瑞士军刀。所有功能都是免费使用的，无限制。如果你想自托管，它是开源的。
- [DAS](https://signup.styra.com/) — Styra DAS 免费版，全面生命周期策略管理，用于创建、部署和管理Open Policy Agent（OPA）授权。
- [Datree](https://www.datree.io/) — 开源命令行工具，用于防止Kubernetes配置错误，确保配置文件和Helm图表符合最佳实践及组织政策。
-

**[回到顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 卓越的细粒度授权作为服务，适用于应用程序和API。免费版本提供1000个MAU（每月活跃用户）和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO（单点登录）、MFA（多因素认证）、无密码登录等功能。提供前端和后端应用的SDK。免费提供1000个MAU和5个身份提供商。
  * [Auth0](https://auth0.com/) - 部署的单点登录服务。免费计划包含25,000个MAU，无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 几分钟内为您的应用添加密码less、OTP（一次性密码）、2FA（二次认证）和SSO（单点登录）。前端已包含。免费提供5000个MAU。
  * [Authress](https://authress.io/) - 认证登录和访问控制，为每个项目提供无限的身份提供商。支持Facebook、Google、Twitter等。前1000个API调用是免费的。
  * [Authy](https://authy.com) - 多设备的两因素认证（2FA），备选Google Authenticator。前100次成功验证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。提供精细粒度的授权与访问控制，100个每月活跃主体免费。
  * [Clerk](https://clerk.com) - 用户管理、身份验证、2FA/MFA、预构建的UI组件，如登录、注册、用户资料等。免费提供10,000个每月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) - 关系型身份和访问管理作为服务（Keycloak）。包含100名用户和一个域的免费版。
  * [Corbado](https://www.corbado.com/) - 为现有或新建应用添加无密码身份验证。无限MAU（每月活跃用户）免费。
  * [Descope](https://www.descope.com/)

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 你的移动应用确保按预期工作的一站式平台。免费计划包括一个应用、分析、无限版本和安装，以及收集反馈。
  * [Loadly](https://loadly.io) - 提供iOS和Android应用的免费分发服务，包括无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费计划包括应用上传、密码保护的链接、1天过期期和10次安装。
  * [InstallOnAir](https://www.installonair.com) - 在空中分发iOS和Android应用。免费计划包括无限上传、私人链接、对访客2天过期、对注册用户60天过期。
  * [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发。免费计划包括一个项目、三个应用版本、500 MB存储和每月100个应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括五个应用、每月50次下载和最大100 MB的文件大小。

**[⬆️ 回到顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/)——在云平台部署预配置的应用程序。免费提供1台AWS微型实例的管理服务。
  * [Esper](https://esper.io)——专为Android设备提供MDM（管理设备）和MAM（管理应用程序）的DevOps解决方案。免费赠送100台设备，但每位用户仅限一个许可证，并且提供25 MB的应用存储空间。
  * [jamf.com](https://www.jamf.com/)——适用于iPads、iPhone和Mac的设备管理服务，免费提供三台设备管理。
  * [Miradore](https://miradore.com)——设备管理服务，帮助您跟踪设备舰队并确保设备安全。免费提供基本功能，但可以无限量地免费安全使用。
  * [moss.sh](https://moss.sh) ——协助开发者部署和管理Web应用程序和服务器。免费额度每月支持25次Git部署。
  * [runcloud.io](https://runcloud.io/)——侧重于PHP项目的服务器管理工具，免费提供最多1台服务器的支持。
  * [ploi.io](https://ploi.io/)——用于轻松管理与部署服务器和网站的服务器管理工具。免费版支持1台服务器。

**回到目录顶部**[^回目录]

## 消息传递和流媒体

  **[⬆️ 返回目录](#目录)**

\[1\] **[Ably](https://www.ably.com/)**
实时消息服务，包含存在、持久性和保证交付。免费版提供每月3百万消息、100个峰值连接和100个峰值通道。

\[2\] **[cloudamqp.com](https://www.cloudamqp.com/)**
作为服务提供RabbitMQ。小 lemur 计划：每月最高100万条消息、最多20个并发连接、最多100个队列、最多10000条待发消息、可以在不同AZ中使用多个节点。

\[3\] **[courier.com](https://www.courier.com/)**
专为开发者设计的推送、内嵌应用、邮件、聊天、短信和其他消息通道的一个单一API，包括模板管理等功能。免费版包含每月10000条消息。

\[4\] **[engagespot.co](https://engagespot.co/)**
为开发者提供的多渠道通知基础设施，带有预构建的内嵌应用邮箱和无代码模板编辑器。免费计划同样包含每月10000条消息。

\[5\] **[HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/)**
将MQTT设备连接到云原生物联网消息代理。免费版支持最多100个设备连接（无需信用卡）无限期使用。

\[6\] **[knock.app](https://knock.app)**
开发者通知结构。使用单一API发送到多通道（如内嵌应用、邮件、短信、Slack和推送）。免费版包含每月10000条消息。

\[7\] **[NotificationAPI.com](https://www.notificationapi.com/)**
在5分钟内为任何软件添加用户通知。免费版包括每月10000条通知、100条短信和自动化电话。

\[8\] **[Novu.co](https://novu.co)**
开源的通知基础设施，专为开发者设计。邮件、短信、定向、内嵌应用和推送等通信渠道的简单组件和API，免费版提供每月30000条通知，同时保留90天数据。

\[9\] **[pusher.com](https://pusher.com/)**
实时消息服务。对于最多100个并发连接和

## 日志管理

  * [bugfender.com](https://bugfender.com/) - 免费，每天最多可获取100,000条日志，保留24小时
  * [logentries.com](https://logentries.com/) - 免费，每月最多存储5GB，保留7天
  * [loggly.com](https://www.loggly.com/) - 单用户免费，每天最多可存储200MB，保留7天
  * [logz.io](https://logz.io/) - 免费，每天最多1GB，保留1天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - 由Manage Engine提供的一体化日志管理服务。免费版提供50GB存储空间，15天存储保留和7天搜索功能。
  * [papertrailapp.com](https://papertrailapp.com/) - 搜索：48小时，归档：7天，每月50MB
  * [sematext.com](https://sematext.com/logsene) - 免费，每天最多500MB，保留7天
  * [sumologic.com](https://www.sumologic.com/) - 免费，每天最多500MB，保留7天
  * [logflare.app](https://logflare.app/) - 免费，每月最多12,960,000条条目，保留3天
  * [logtail.com](https://logtail.com/) - 基于ClickHouse的日志管理服务，免费每月最多1GB，保留3天
  * [logzab.com](https://logzab.com/) - 审计跟踪管理系统。免费提供每月1,000条用户活动日志记录，最多支持5个项目，保留期1个月。
  * [openobserve.ai](https://openobserve.ai/) - 免费提供每月200GB的数据收集，保留15天

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) - 提供无限项目的、无限字符串的以及开源项目的协作功能
  * [gitlocalize.com](https://gitlocalize.com) - 免费且适用于私人和公共仓库，都无限制
  * [Lecto](https://lecto.ai/) - 具有机器翻译API，免费版本包含30次免费请求和每请求1000个翻译字符。已与Loco Translate的WordPress插件集成。
  * [lingohub.com](https://lingohub.com/) - 免费版最多3个用户，开源项目永远免费
  * [localazy.com](https://localazy.com) - 1000个源语言字符串免费，语言、贡献者不限，提供创业和开源优惠
  * [Localeum](https://localeum.com) - 免费版最多1000个字符串，一个用户，语言、项目无限
  * [localizely.com](https://localizely.com/) - 对开源免费
  * [Loco](https://localise.biz/) - 免费版本最多2000个翻译，不限译者，每项目10种语言，1000个可翻译资产/项目
  * [oneskyapp.com](https://www.oneskyapp.com/) - 有限的免费版最多5个用户，开源项目免费
  * [POEditor](https://poeditor.com/) - 免费版最多1000个字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费版最多100个翻译键，字符串、语言无限，提供创业优惠
  * [Texterify](https://texterify.com/) - 免费适用于单个用户
  * [Tolgee](https://tolgee.io) - SaaS版本有限翻译，自有版本永远免费
  * [transifex.com](https://www.transifex.com/) - 对开源免费
  * [Translation.io](https://translation.io) - 对开源免费
  * [Translized](https://translized.com) - 免费版最多1000个字符串，一个用户，语言、项目无限
  * [webtranslateit.com](https://webtranslateit.com/) - 免费版最多500个

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) — 获取每5分钟一次的20个监控，甚至可用于商业用途。享受无限时的实时电子邮件和Telegram通知，无需信用卡即刻开始。
  * [Pingmeter.com](https://pingmeter.com/) — 提供每10分钟一次的5个监控，支持SSH、HTTP、HTTPS和自定义TCP端口。
  * [alerty.ai](https://www.alerty.ai) — 免费APM和监控，适用于前端、后端、数据库等，并提供免费运行的代理。
  * [appdynamics.com](https://www.appdynamics.com/) — 免费提供为期24小时的指标，应用性能管理代理仅限一个Java、一个.NET、一个PHP和一个Node.js应用程序。
  * [appneta.com](https://www.appneta.com/) — 免费使用，数据保留时间为1小时。
  * [appspector.com](https://appspector.com/) — 远程iOS/Android/Flutter调试的管理工具。对于小流量使用，免费赠送64MB日志存储。
  * [assertible.com](https://assertible.com) — 自动化API测试和监控，团队和个人都有免费计划。
  * [bleemeo.com](https://bleemeo.com) — 免费提供3个服务器、5个监控、无限用户、无限仪表板和报警规则。
  * [checklyhq.com](https://checklyhq.com) — 开源的端到端/synthetic监控和深度API监控，免费版包含五用户和50,000多次检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控，免费提供无限的按需扫描、无限用户和存储账户。订阅版包括自动化扫描、API访问等。
  * [cronitor.io](https://cronitor.io/) — 对cron作业、网站、API等提供性能洞察和监控。免费版提供五个仪表。
  * [datadoghq.com](https://www.datadoghq.com/) — 免费提供上限为5个节点。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) — 对cron作业进行监控。免费提供一个监控，邀请他人注册可以获得更多。
  * [downtimemonkey.com](https://downtim

  * [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试但有限制
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，3个监视器免费
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控，运行状态监控，DNS 和域名监控。免费监控10个服务器、10个运行状态和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个位置和20个主要网络服务的数据馈送。
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50个监控免费
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 五个网站的免费监控，每60秒间隔，公开状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 提供网络操作、站点可靠性工程和DevOps团队的整体事件管理、警报、待办事项管理以及响应编排平台。对于最多5名用户，免费提供服务。
  * [instatus.com](https://instatus.com) - 10秒内即可获得精美的状态页面。永久免费，提供无限制的订阅和无限制的团队。
  * [Squadcast.com](https://squadcast.com) - Squadcast 是一项全面的事件管理软件，旨在帮助您推广 SRE 最佳实践。为最多10名用户提供免费的永久计划。
  * [RoboMiri.com](https://robomiri.com/) — RoboMiri 是一个稳定的运行状态监控服务，提供广泛监控类型：定时任务、关键词、网站、端口、ping。免费提供25个检查，每3分钟检查一次，并提供电话呼叫、短信、电子邮件和Webhook的警报。
  * [Better Stack](https://betterstack.com/better-uptime) - Uptime监控、事件管理、待办事项调度和状态页面在单一产品中提供。免费版包括10个监控，每隔3分钟检查一次，并提供状态页面。
  * [Pulsetic](https://pulsetic.com) - 包含10个监控、6个月的历史运行状态

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供截图和点击跟踪的JavaScript错误跟踪。对开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用后，每月2,000次错误免费。
  * [elmah.io](https://elmah.io/) — 为Web开发者提供错误日志和网站监控。对开源项目提供免费的small business订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。对于小团队而言，每年1,000,000个用户会话免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000个事件/1个用户免费。开源可用于无限使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误跟踪。与开源Sentry SDK兼容。1,000个事件/月免费，或者可以无限制地自我托管。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时和定时任务监控。对小团队和开源项目（每月12,000个错误）免费。
  * [memfault.com](https://memfault.com) - 云设备可观测性和调试平台。免费提供对Nordic、NXP和Laird设备的100个设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划包含每月5,000个错误、无限用户，30天保留记录。
  * [sentry.io](https://sentry.io/) — Sentry 实时追踪应用异常，有小型免费计划。每月5,000个错误/1用户免费，自托管时不限制使用。
  * [Axiom](https://axiom.co/) — 存储高达0.5TB日志，保留30天。包括与Vercel等平台的集成以及通过电子邮件/ Discord通知器进行高级数据查询。
  * [Semaphr](https://semaphr.com) — 免费的移动应用全方位杀开关。
  * [Jam](https://jam.dev) - 一键式开发者友好的错误报告。免费计划无限

## Search

  * [algolia.com](https://www.algolia.com/) - 提供带有拼写容错、相关性和UI库的托管搜索解决方案，轻松创建搜索体验。免费的`Build`计划包含100万文档和每月1万搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) - 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 作为服务的统一搜索栏，基于Web的UI小部件或插件，可以让您的用户搜索产品内的内容、导航、特性等，提高认可度。免费版适用于每月活跃用户达1,000，命令数量不限。
  * [Magny](https://magny.io) - SaaS服务，帮助实现命令调色板（如内部搜索），显著减少用户在应用中查找内容的时间，提高用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) - 免费版包含3个索引，每个索引100K文档，不限制全文本、向量或混合搜索，以及60天的分析功能。
  * [searchly.com](http://www.searchly.com/) - 免费提供2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreecodeCamp](https://www.freecodecamp.org/) - 提供免费课程和数据分析、信息安全、Web开发等领域的认证的开源平台。
  * [The Odin Project](https://www.theodinproject.com/) - 免费且基于开源的平台，专注于JavaScript和Ruby，适合web开发学习。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量基于经验的专业简历模板，可以克隆、编辑并下载，适用于 ATS。
  * [DeepLearning.AI 短课程](https://www.deeplearning.ai/short-courses/) - 来自行业领导者的免费短课程，让你在一小时内亲自动手学习最新生成式AI工具和技术。
  * [LabEx](https://labex.io) - 通过交互式实验室和实际项目提升Linux、DevOps、网络安全、编程、数据科学等领域技能。
  * [Roadmap.sh](https://roadmap.sh) - 提供覆盖软件开发所有方面的学习路线图，从区块链到用户体验设计。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费的与认证相结合的课程，包括网络安全、网络和Python等主题。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - 是麻省理工学院的在线出版物，免费分享来自超过2500门课程的材料，全球的学者和教育者都可以使用。合作伙伴频道可以在[这里](https://www.youtube.com/@mitocw/featured)找到。
  * [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 提供免费在线教程，教你学习基础和高级的HTML/CSS、JavaScript和SQL。

**[返回目录顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 用于测试的免费临时邮箱服务。
  * [AhaSend](https://ahasend.com) - 提供交易性电子邮件服务，免费版每月1000封邮件，可无限制地使用多个域名、团队成员、Webhook以及消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源的匿名邮箱转发服务，可免费创建无限邮箱别名。
  * [Antideo](https://www.antideo.com) — 免费计划中提供每小时10个API请求，用于验证电子邮件、IP和手机号。
  * [Brevo](https://www.brevo.com/) — 免费版每月可发送9000封邮件，每天300封。
  * [OneSignal](https://onesignal.com/) - 免费版每月发送10000封邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费提供10个Bump电子邮件地址，支持一个自定义域名。
  * [Burnermail](https://burnermail.io/) - 免费版提供5个 Burner 邮箱地址，一个邮箱，7天的邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 用于创建和发送新闻简讯，免费版支持100个订阅者。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST提供入站邮件并提供交易性出站邮件服务，月免费版10000封邮件。
  * [Contact.do](https://contact.do/) — 提供链接形式的联系表单（使用Bitly创建联系表单）。
  * [debugmail.io](https://debugmail.io/) — 为开发者设计的易于使用的测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 免费提供最多2个邮箱在您的域名下，附带100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) - 免费版每月发送9000封邮件，每天300封。
  * [EmailOctopus](https://emailoctopus.com) -

  * [Takeout](https://takeout.bysourfruit.com) - 不断更新的电子邮件服务，让发送电子邮件变得简单。每月免费交易电子邮件500封。
  * [temp-mail.io](https://temp-mail.io) — 免费临时电子邮件服务，一次支持多个电子邮件，并提供转发功能
  * [tinyletter.com](https://tinyletter.com/) — 免费版每月5000个订阅者
  * [Touchlead](https://touchlead.app) - 一个多用途的市场营销自动化工具，具有 Leads 管理、表单构建和自动化功能。免费版有限的 Leads 和自动化数量
  * [trashmail.com](https://www.trashmail.com) - 零费用的临时邮箱，支持转发并自动过期
  * [Tuta](https://tuta.com/) - 免费的邮件账户服务提供商，带有内置端对端加密、无广告、无追踪。免费版支持1GB存储和一个日历。Tuta也有部分开源（[tutanota的GitHub链接](https://github.com/tutao/tutanota)），可以自托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 邮箱实时验证API，提供了邮箱确认并且能检测到一次性邮箱地址；每天免费25条验证。
  * [verimail.io](https://verimail.io/) — 批量和API邮箱验证服务。每月免费100条验证。
  * [Zoho](https://www.zoho.com) — 最初是邮件提供商，现在提供一系列服务，其中一些有免费计划。包含免费服务的项目：
     - [Email](https://zoho.com/mail) — 免费版适用于5位用户，每位用户5GB存储，每条邮件附件大小限制为25MB，仅限一个域名。
     - [Zoho Assist](https://www.zoho.com/assist) — 免费版提供了1个活在支持许可证和无限久的5个无人操作计算机许可证，适用于专业和个人用途。
     - [Sprints](https://zoho.com/sprints) — 免费版适用于5位用户，5个项目，500MB存储。
     - [Docs](https://zoho.com/docs) — 免费版适用于5个用户，1GB上传限制

## 特性开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一个面向开发者的特征旗帜服务，提供无限制的团队大小、优秀的支持和合理的价格。免费计划支持10个标志，两个环境，1个产品以及每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 信心满满地发布新功能；在Web、移动和服务器端应用中管理特征标志。可用托管API、部署到私有云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的特征旗帜及A/B测试提供商，带有内置的贝叶斯统计分析引擎。免费版支持3个用户，无限数量的特征标志和实验。
  * [Hypertune](https://www.hypertune.com) - 提供类型安全的特征标志、A/B测试、分析与应用配置，带有Git式版本控制和内存中的本地标志评估。免费版支持最多5个团队成员，无限制的特征标志和A/B测试。
  * [Molasses](https://www.molasses.app) - 功能强大的功能标志和A/B测试。免费支持3个环境，每个环境提供5个标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域特征开关管理平台。免费计划包含10个标志、两个环境以及无限制的请求。SDK、分析仪表板、发布日历、Slack通知以及其他功能均包含在内。
  * [Statsig](https://www.statsig.com) - 一个功能强大的管理平台，包括特征管理、A/B测试、分析等。免费版提供无限用户座席、标志、实验和动态配置，支持每月100万事件。
  * [Abby](https://www.tryabby.com) - 开源的特征旗帜及A/B测试。配置代码和强类型TypeScript SDK。与Next.js和React等框架的强大集成。有慷慨的免费层级和便宜的扩展选项。

## 字体

  * [dafont](https://www.dafont.com/) - 这个网站上的字体是作者的财产，可以是免费软件、共享软件、演示版本或公有领域作品。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，包括@font-face、单位转换器、字体渲染器和字体提交器。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供商业版权的免费字体，精心挑选并以易于使用的格式展示。
  * [Google Fonts](https://fonts.google.com/) - 许多字体轻松快捷地通过下载或链接到Google的CDN在网站上安装。
  * [FontGet](https://www.fontget.com/) - 收集了多种可以下载的字体，并通过标签整齐分类。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务，不断增加专业级别的字体，完全免费供个人和商业使用。
  * [Befonts](https://befonts.com/) - 提供多种独特的字体，适用于个人或商业用途。
  * [Font of web](https://fontofweb.com/) - 查找网站上使用的字体以及它们的使用方式。
  * [Bunny](https://fonts.bunny.net) - 注重隐私的Google Fonts版本。
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体，供个人使用，可输入文本快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) - 是一个提供免费和开源字体服务，用于通过CSS为网站提供字体家族。
  * [Fontsensei](https://fontsensei.com/) - 是用户标记的开源Google字体，支持CJK（中文、日文、韩文）字体标签。

**[回到顶部](#目录)**

## 表单

  **表格内容:**

| 免费服务 | 描述 |
| --- | --- |
| Feathery | 开发者友好的表格构建器，适用于构建注册、登录、用户引导、支付流程、复杂财务应用等。免费计划每月250次提交，五个活跃表格。 |
| Form-Data | 没有代码的表格后端，包含垃圾邮件过滤、邮件通知、自动回复、Webhook、Zapier、重定向、AJAX或POST功能等。免费版不限表格数量，每月20次提交，额外2000次提交可通过戴Form-Data徽章解锁。 |
| FabForm | 专为智能开发者设计的表格后端平台，每月免费250次提交。现代图形用户界面友好，可与Google Sheets、Airtable、Slack、邮件和其他系统集成。 |
| Form.taxi | HTML表格提交的终点服务，支持通知、垃圾邮件阻止和GDPR合规的数据处理，基础使用免费。 |
| Formcarry | 提供HTTP POST表格提交，免费版每月100次提交。 |
| Formingo | 适用于静态网站的易用表格，注册即可开始，免费版每月500次提交，可自定义回复邮件地址。 |
| FormKeep | 提供无限制表格，每月50次提交，包含垃圾邮件保护、邮件通知、拖放设计工具，支持将表格导出为HTML。额外特性包括定制字段规则、团队协作和集成Google Sheets、Slack、ActiveCampaign和Zapier。 |
| formlets.com | 在线表格，限单页表格每月无限，每月100次提交，邮件通知功能。 |
| Formspark.io | 单点表格到邮件服务，免费版无限表格，每月250次提交，客服支持。 |
| Formspree.io | 使用HTTP POST请求发送电子邮件，免费计划限制每表每月50次提交。 |
| Formsubmit.co | 提供简单表格提交接口，永久免费，无需注册。 |
| Formlick.com | 类似Typeform的替换选项，终身交易。用户可创建1个免费表格和无限提交，付费版则无限制。 |
| getform.io | 设计师和开发者使用的表格后端平台，1个表格，50次提交，单文件上传，100MB文件存储。 |
| HeroTofu | 包含机器人

## 生成式人工智能

  * [Keywords AI](https://keywordsai.co) - 最好的LLM监控平台。只需两行代码即可调用200多个LLM。每月免费10,000个请求，平台功能免费！
  * [Portkey](https://portkey.ai/) - 用于Gen AI应用的控制面板，内置观察工具套件和AI网关。每月免费发送和日志记录高达10,000个请求。
  * [Braintrust](https://www.braintrustdata.com/) - 包括评估、提示游乐场和数据管理的Gen AI工具。免费计划每周提供1,000行私人评估。
  * [Findr](https://www.usefindr.com/) - 全能搜索工具，让你同时搜索所有应用。搜索助手，使用您的信息回答问题。免费计划提供无限的统一搜索，以及每日5个协作者询问。
  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。整个平台是免费的，只要您提供自己的API密钥。
  * [Clair](https://askclair.ai/) - 临床AI参考平台。学生可以免费使用专业工具套件，包括Open Search、临床摘要、药物审查、药物相互作用、ICD-10代码和 stewardship。专业套件的免费试用也提供。
  * [Langtrace](https://langtrace.ai) - 帮助开发者跟踪、评估、管理提示和数据集，调试与LLM应用性能有关的问题。它为任何LLM创建开放的可观测性标准跟踪，有助于可观察性，并且与任何可观测性客户端兼容。免费计划提供每月50,000个跟踪。
  * [Ultra AI](https://ultraai.app) - 为您的产品提供AI控制中心。特色包括多提供商AI网关、提示管理器、缓存、日志、分析、模型回退和用户速率限制。免费版每月提供10,000+请求，所有功能除缓存外。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 您的开发和生产生命周期中的LLM应用进行评估、测试和部署。
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析并迭代LLM应用。免费

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 用于bootstrap, bootswatch和fontawesome.io的CDN
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。cdnjs是一个功能强大的免费开源CDN服务，被超过11%的网站所信赖，由Cloudflare提供支持。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是一个为最受欢迎的开源JavaScript库提供内容分发网络的平台。
  * [stellate.co](https://stellate.co/) - Stellate是一个快速、可靠的GraphQL API CDN，前两个服务是免费的。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了流行的第三方JavaScript库，如jQuery，并允许您轻松地将其添加到Web应用程序中。
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费提供DDoS保护和SSL证书。
  * [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。对于每个域名每月的100万请求免费。
  * [raw.githack.com](https://raw.githack.com/) — 作为**rawgit.com**的现代化替代方案，使用Cloudflare简单地托管文件。
  * [section.io](https://www.section.io/) — 一种简单的方法来启动和管理完整的Varnish Cache解决方案。据称一个站点永远免费。
  * [statically.io](https://statically.io/) — CDN用于Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资产和图片。
  * [toranproxy.com](https://toranproxy.com/) — 用于Packagist和GitHub的代理服务。永不失败的CD。个人使用免费，单开发者，无支持。
  * [UNPKG](https://unpkg.com/) — CDN用于npm上的一切。
  * [weserv](https://images.weserv.nl/) — 一个活体图像缓存和调整服务。在遍布全球的缓存中实现实时图像操作。
  * [Namecheap Supersonic](

## PaaS

  * [anvil.works](https://anvil.works) - 使用Python构建Web应用。免费版提供无限数量的应用和30秒的超时限制。
  * [appwrite](https://appwrite.io) - 无限项目，无项目暂停（支持WebSockets）和身份验证服务。免费版提供1个数据库、3个存储桶和每个项目5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，免费提供两个项目，有限功能，但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 源开源、跨平台的移动应用开发工具包，适用于Java和Kotlin开发者。商业用途免费，无限项目数量。
  * [deco.cx](https://www.deco.cx/en/dev) - 基于边缘的前端平台，使用TypeScript代码自动生成可视化内容管理系统。自带A/B测试、内容细分和实时分析。适合内容型和企业级电子商务网站。月度免费无限制或免费开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，可在全球边缘运行JavaScript、TypeScript和WebAssembly。免费版包含每日10万次请求和每月100 GiB数据传输。
  * [domcloud.co](https://domcloud.co) - Linux托管服务，提供CI/CD、GitHub、SSH和MariaDB/Postgres数据库支持。免费版提供1 GB存储和每月1 GB网络限制，仅适用于免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析的后端框架，可提供自动基础设施、无需 boilerplate 代码等。提供免费的云托管，适用于业余项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在自己的AWS账户上部署web服务、数据库等，采用Git推送风格工作流。个人GitHub仓库上的用户有免费版，AWS费用通过AWS账单计算，但可以使用信用和AWS免费试用。
  * [gigalixir.com](https://gigalixir.com/) - 提供永不睡眠的免费实例和Elixir/Phoenix应用的免费版PostgreSQL数据库，限2个连接、10,000行和无备份。
  * [Glitch](https://glitch.com/) — 免

## BaaS（后端即服务）

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程来连接你的应用程序后端中的多个应用。例如，在你的应用中触发事件时发送Slack消息或增加Google Sheets的行数。每月免费提供最多5,000个任务。
  * [back4app.com](https://www.back4app.com) - 非常易用、灵活且可扩展的基于PARSE平台的后端服务。
  * [backendless.com](https://backendless.com/) — 提供移动和Web端的Baas服务，包括1GB文件存储免费，每月50,000个推送通知，以及1,000个数据对象在表中。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 通过我们的AI，可以在我们的函数运行时和托管存储上为你的Python API快速启动。可以在我们的在线编辑器中免费在线构建和托管，或者使用你喜欢的工具本地构建。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供了构建和部署企业级数字化创新的文档和资源。提供了一个全面的个人沙箱，包括平台、SDK和一系列可以用来构建和定制应用程序的组件。
  * [connectycube.com](https://connectycube.com) - 提供无限的聊天消息、点对点语音和视频通话、文件附件和推送通知。针对不超过1,000名用户的应用是免费的。
  * [convex.dev](https://convex.dev/) - 一个反应式后端作为服务，托管你的数据（包含关系和可序列化ACID事务的文档）、函数式服务和WebSocket，以实现实时更新到多个客户端。小项目免费提供1M记录和每月5M次函数调用的预算。
  * [darklang.com](https://darklang.com/) - 结合了在线编辑器和基础设施的托管语言。在beta阶段可用，并计划在beta结束后提供慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase帮助你构建和运行成功应用。Spark套餐提供免费的服务，包括身份验证、托管、Firebase ML、实时数据库、云存储、Testlab、A/B测试、分析、应用分发、App Indexing、云消息（FCM）、崩溃日志、

## 低代码平台

  * [Clappia](https://www.clappia.com)——专为构建具有定制移动应用程序和网络应用程序的商业流程应用而设计的低代码平台。提供了拖放界面，具有离线支持、实时位置跟踪等功能，并且可以集成各种第三方服务。
  * [Basedash](https://www.basedash.com)——用于内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/)—— Budibase是一个开源的低代码平台，可以在几分钟内创建内部应用程序。支持PostgreSQL、MySQL、MSSQL、MongoDB、REST API、Docker和K8s。
  * [appsmith](https://www.appsmith.com/)——用于构建管理面板、内部工具和仪表盘的低代码项目。集成15+数据库和任何API。
  * [ToolJet](https://www.tooljet.com/)——用于构建业务应用的可扩展低代码框架。连接数据库、云存储、GraphQL、API端点、Airtable等，通过拖放应用构建器进行构建。
  * [ReTool](https://retool.com/)——用于构建内部应用的低代码平台。Retool非常可定制。只要能用JavaScript和API编写，你就能在Retool中实现。免费版每月支持五个用户，无限应用和API连接。
  * [DronaHQ](https://www.dronahq.com/)—— DronaHQ是一个低代码平台，帮助工程团队和产品经理快速创建内部工具、定制用户旅程、数字体验、自动化和自定义管理面板等应用程序，速度提高10倍。
  * [ILLA Cloud](https://www.illacloud.com/)——ILAA Cloud是一个强大且开源的低代码平台，供开发人员构建内部工具。利用ILAA的组件和行动库，开发人员可以节省大量时间在构建工具上。5名团队成员免费。
  * [outsystems.com](https://www.outsystems.com/)——适用于本地或云的企业级Web开发平台服务，免费的“个人环境”提供无限代码和最多1GB数据库。
  * [UI Bakery](https://uibakery.io)——低代码平台，加速定制网络应用的构建。支持使用拖放构建UI，并通过JavaScript、Python和SQL进行高度自定义。提供云和自托管解决方案。最多支持5个用户是免费的。
  * [

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 您可以享受100 MB免费的网站托管服务，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器、FTP访问、WebDAV和SSH；还包括邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 提供免费的网站托管服务，赠送免费短域名，支持PHP、MySQL，此外还包含应用安装器、邮件发送功能以及无广告。
  * [Bohr](https://bohr.io) — 专为非商业项目免费开放，同时它是一个以开发者为优先的部署和开发平台，可减少基础设施管理的麻烦，并加快搭建速度。
  * [Bubble](https://bubble.io/) — 使用视觉编程构建无需代码的Web和移动应用，免费版会有Bubble品牌。
  * [dAppling Network](https://www.dappling.network/) — 是一个分散式网站托管平台，专注于提升Web3前端的可用性和安全性，为用户提供额外的访问入口。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 免费在App平台入门等级部署并构建三个静态网站。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive上传到网页。仅支持静态网站，永久免费，一个Google/Microsoft帐户只能托管一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 一个桌面应用程序，可本地托管网站并实时共享。您可以根据需求使用其美观的用户界面、API或命令行界面。
  * [Fern](https://buildwithfern.com) - 使用Fern的免费版构建并托管基于Markdown的文档网站。您可以自动生成网站的API参考，网站会部署在 _yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 提供免费的网站托管服务，支持PHP 5、Perl、CGI，包括MySQL、FTP、文件管理器、POP邮件等，还提供免费二级域名、免费域名托管、DNS编辑器等功能。
  * [Freehostia](https://www.freehostia.com) — 免费提供包括行业领先的控制

## 域名服务

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费公共DNS 解析器，速度快且安全（加密DNS查询），由Cloudflare提供。对绕过互联网提供商的DNS封锁、防止DNS查询被窥探和[屏蔽成人与恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)很有帮助。它还可通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)接口使用。注意：这只是DNS解析器，而不是DNS提供者。

* [1984.is](https://www.1984.is/product/freedns/) — 免费DNS服务，包含API和其他免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) — 免费DNS托管，可容纳1个域名和50条记录。
* [deSEC](https://desec.io) - 以安全性为设计目标的免费DNS托管服务，基于开源软件，由[SSE](https://www.securesystems.de/)支持。
* [dns.he.net](https://dns.he.net/) — 免费DNS托管服务，支持动态DNS。
* [Zonomi](https://zonomi.com/) — 提供即时DNS传播的免费DNS托管服务。免费计划包括1个DNS区域（域名），最多支持10条DNS记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费DDNS，免费层级最多支持5个域名，配置指南适用于多种环境。
* [Dynv6.com](https://dynv6.com/) — 提供API支持的免费DDNS服务，可管理各种DNS类型记录（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管。此外，还能提供基于公众贡献域名的免费子域。注册后，从“子域”菜单获取免费子域。
* [luadns.com](https://www.luadns.com/) — 提供免费DNS托管，3个域名，功能限制合理。
*

## 域名管理

  * [eu.org](https://nic.eu.org) - 提供免费的 eu.org 域名。通常在14天内批准申请。
  * [pp.ua](https://nic.ua/) - 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 提供免费的 us.kg 子域名。

**[返回顶部](#目录)**

## IaaS（基础设施即服务）

  * [4EVERLAND](https://www.4everland.org/) — 支持与AWS S3兼容 - API、接口操作、CLI和其他上传方法，从IPFS和Arweave网络以安全、方便和高效的方式上传和存储文件。注册用户可以免费获得6 GB的IPFS存储和300 MB的Arweave存储。任何Arweave文件上传小于150 KB的都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2云存储。免费10 GB（类似Amazon S3的）对象存储，长期使用。
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。无限期限内提供5 GB免费存储。
  * [Tebi](https://tebi.io/) - S3兼容的对象存储。免费提供25 GB存储和250 GB出站传输。
  * [iDrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月包含10 GB免费存储和10 GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容的对象存储。每月赠送15 GB免费存储和15 GB下载量。

**[回到顶部](#内容索引)**

## 托管数据服务

  **\[⬆️ 返回目录顶端\]** 

* [Aiven](https://aiven.io/) - Aiven提供了在开源数据平台上的免费PostgreSQL、MySQL和Redis服务。单节点、1个CPU、1GB内存，以及PostgreSQL和MySQL的5GB存储。轻松升级到更全面的计划或跨云服务。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关系数据库，提供无限制的基础，每个基础1,200行，每月1,000 API请求。
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 作为服务的云原生Cassandra，有[80GB的免费层次](https://www.datastax.com/products/datastax-astra/pricing)。
  * [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端和NoSQL数据库服务，提供函数、MongoDB风格查询、键值查找、任务系统、实时消息、工作队列和强大的命令行界面，以及基于Web的数据管理器。免费计划提供5GB存储和每分钟60个API调用。包含2名开发人员。无需信用卡注册。
  * [CrateDB](https://crate.io/) - 分布式的Open Source SQL数据库，用于实时分析。[免费层次CRFREE](https://crate.io/lp-crfree)：单节点，2个CPU，2 GiB内存，8 GiB存储。每个组织一个集群，无需支付任何费用。
  * [FaunaDB](https://fauna.com/) — 为服务器端数据库，具有原生GraphQL、多模型访问，提供每日免费层次至100 MB。
  * [Upstash](https://upstash.com/) — 提供无服务器Redis，免费层次提供每天10,000个请求、256MB的最大数据库大小和20个并发连接。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层次提供512 MB存储。
  * [redsmin.com](https://www.redsmin.com/) — 实时在线监控和管理系统，针对Redis，监控1个Redis实例是免费的。
  * [redislabs](https://redislabs.com/try-free/) - 提供免费的30MB Redis实例

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  以下是列表中的服务以及链接：

1. [Pinggy](https://pinggy.io) (仅需一个命令，无需下载即可为本地主机提供公有URL。支持HTTPS、TCP、TLS隧道。免费计划有60分钟的隧道生命周期。)
2. [conveyor.cloud](https://conveyor.cloud/) (Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道提供到公有URL。)
3. [Hamachi](https://www.vpn.net/) (LogMeIn Hamachi：托管的虚拟私有网络服务，允许分发团队安全扩展局域网（LAN）网络。免费计划支持无限网络，最多5人。)
4. [Mirna Sockets](https://mirna.cloud/) (免费Socket作为服务平台，提供ws:// URL，用于部署Web Socket服务器并在监控性能的同时运行。)
5. [localhost.run](https://localhost.run/) (通过隧道将本地运行的服务暴露到公有URL。)
6. [localtunnel](https://theboroer.github.io/localtunnel-www/) (通过隧道公开本地服务器。有免费托管版本和开源代码。)
7. [ngrok.com](https://ngrok.com/) (公开本地服务器的隧道服务。)
8. [cname.dev](https://cname.dev/) (免费且安全的动态反向代理服务。)
9. [serveo](https://serveo.net/) (无需安装或注册，即可将本地服务器发布到互联网。免费二级域名，无限制。)
10. [Radmin VPN](https://www.radmin-vpn.com/) (通过零配置的VPN连接多台计算机，类似局域网网络。无限的对等连接。)
11. [Segment](https://segment.com/) (事件转发和路由到第三方服务的中心。免费方案支持每月100,000个事件。)
12. Google STUN（支持协议）: [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
13. Twilio STUN：[stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
14. [Tailscale](https://tailscale.com/) (基于开源WireGuard协议的无配置式

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 提供最多5名团队成员的免费项目管理及SCRM软件
  * [asana.com](https://asana.com/) — 私人项目合作免费
  * [Backlog](https://backlog.com) — 在一个平台上为团队提供发布伟大项目的所需的一切。免费计划提供一个项目、十个用户及100MB存储空间。
  * [Basecamp](https://basecamp.com/personal) — 提供任务列表、里程碑管理、论坛类型的通讯、文件共享和时间追踪，最多3个项目、20用户和1GB存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 内部网络和项目管理工具，免费版本有无限用户限制的5GB存储。
  * [cacoo.com](https://cacoo.com/) — 在线、实时的图表（流程图、UML或网络图），免费参加最多15名用户，25个文件。
  * [Chpokify](https://chpokify.com/) — 基于团队的Poker规划工具，节省冲刺估算时间。免费版最多支持5名用户，免费Jira集成，无限视频通话，无限团队和会话。
  * [clickup.com](https://clickup.com/) — 项目管理工具。免费版提供云存储的付费版本。移动应用和Git集成可用。
  * [Clockify](https://clockify.me) — 时间追踪和工时表应用程序，允许您跟踪跨项目的工时。无限用户，永远免费。
  * [Cloudcraft](https://cloudcraft.co/) — 几分钟内用Cloudcraft视觉设计师设计专业的架构图，为AWS优化，具有智能组件，显示实时数据。免费计划提供单个用户无限的私人图表。
  * [Codegiant](https://codegiant.io) — 集项目管理、版本控制系统托管及CI/CD的工具。免费版提供无限的仓库、项目和文档，五名团队成员，每月500分钟CI/CD，每月30000秒的无服务器代码运行，1GB的仓库存储。
  * [Confluence](https://www.atlassian.com/software/confluence) — 由Atlassian提供的内容协作工具，帮助团队有效协作和分享知识。免费版最多支持1

  * [Shortcut](https://shortcut.com/) - 项目管理平台。最多10名用户可免费使用。
  * [Tadum](https://tadum.app) - 专为定期会议设计的会议议程和纪要应用，10人团队免费。
  * [taiga.io](https://taiga.io/) — 为初创公司和敏捷开发人员设计的项目管理平台，开源免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费计划包含无限任务、冲刺和工作空间，没有用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 从看板和敏捷到几乎任何操作流程的可视化项目管理。免费用户无限，最多存储1,000个数据实体。[了解详情](https://www.targetprocess.com/pricing/)
  * [taskade.com](https://www.taskade.com/) — 实时协作待办事项列表和团队大纲。免费计划一个工作区，无限任务和项目；1GB文件存储；1周项目历史；视频会议最多五名参与者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。最多5名用户免费。可与GitHub/Trello/Dropbox/Google Drive集成。
  * [Teaminal](https://www.teaminal.com) - 远程团队的站立会议、回顾和冲刺规划工具。最多15名用户免费。
  * [teamwork.com](https://teamwork.com/) - 项目管理及团队聊天。最多5名用户和两个项目的免费版。有付费版。
  * [teleretro.com](https://www.teleretro.com/) — 包含破冰、表情和GIF的简单有趣回顾工具。免费计划包括三个回顾和无限成员。
  * [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和beta测试平台。免费用于私人用途。
  * [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图绘制工具。免费版最多每张图表4层。
  * [todoist.com](https://todoist.com/) — 协作和个人任务管理。免费版包括：5个活动项目、5个项目成员、上传文件至5MB、3个过滤器和1周活动历史。
 

## Storage and Media Processing

  * **[AndroidFileHost](https://androidfilehost.com/)** - 一个免费的文件分享平台，提供无限速度、带宽、文件数量、下载次数等功能。主要用于Android开发相关的文件，如APK构建、自定义ROM和修改等，但也接受其他文件。

  * **[borgbase.com](https://www.borgbase.com/)**
    - 一个提供简单和安全的外部备份服务的网站，适合[Borg Backup](https://www.borgbackup.com/)。10GB的免费备份空间和两个存储库。

  * **[icedrive.net](https://www.icedrive.net/)**
    - 简单的云端存储服务，提供10GB的免费储存空间。

  * **[sync.com](https://www.sync.com/)**
    - 结尾至结尾的云端存储服务，5GB的免费存储空间。

  * **[pcloud.com](https://www.pcloud.com/)**
    - 云存储服务，提供最多10GB的免费存储。

  * **[sirv.com](https://sirv.com/)**
    - 智能图片CDN，提供实时图片优化和调整大小功能。免费版包括500MB存储和2GB带宽。

  * **[cloudimage.io](https://www.cloudimage.io/en/home)**
    - 全面的图片优化和CDN服务，有全球1500+点，提供图像调整、压缩、水印等功能。免费计划每月提供25GB的CDN流量、25GB缓存存储和无限转换。

  * **[cloudinary.com](https://cloudinary.com/)**
    - 图片上传、强大操作、存储和分发的网站和应用，支持Ruby、Python、Java、PHP、Objective-C等多种编程语言。免费版每月包含25个信用，一个信用等于1000张图像变换、1GB存储或1GB的CDN使用。

  * **[embed.ly](https://embed.ly/)**
    - 提供嵌入媒体在网页的API，响应式图片缩放和从网页提取元素。免费版每月5000个URL和15次 request/second 限制。

  * **[filestack.com](https://www.filestack.com/)**
    - 文件选择、转换和分发服务，免费版允许使用250个文件

  * [DocsParse](https://docsparse.com/) – 利用GPT的强大功能，处理PDF、图像并将其转换为结构化的JSON、CSV和EXCEL格式数据。每月免费30个信用积分。


**[⬆️ 返回顶部](#目录)**

## 设计和用户体验

  * [AllTheFreeStock](https://allthefreestock.com) - 提供免费的股票图片、音频和视频的精选列表。
  * [Float UI](https://floatui.com/) - 是一个免费的网页开发工具，用于快速创建现代且响应式的网站，具有流线型设计，即使是非设计师也能使用。
  * [Ant Design Landing Page](https://landing.ant.design/) - 提供一个由Ant Motion动画组件构建的模板。提供丰富的首页模板，您可下载模板代码包并快速使用。此外，编辑器还可以快速搭建您自己的专属页面。
  * [Backlight](https://backlight.dev/) - 一个专为开发者和设计师合作设计的完整编码平台，团队在这里构建、记录、发布、扩展和维护设计系统。免费计划允许最多3名编辑在同一设计系统上工作，无限多的查看者。
  * [BoxySVG](https://boxy-svg.com/app) - 是一个可安装的免费Web应用，用于绘制SVG图形并以SVG、PNG、JPEG和其它格式进行导出。
  * [Carousel Hero](https://carouselhero.com/) - 是一个免费在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 提供一致的开源图标，如React、Vue和Svelte的SVG。
  * ![clevebrush.com](https://www.cleverbrush.com/) - 免费的图形设计/照片拼贴应用。还有付费版，作为组件集成使用。
  * [cloudconvert.com](https://cloudconvert.com/) - 将任何内容转换为任何格式，支持208种格式，包括视频和GIF。
  * [CodeMyUI](https://codemyui.com) - 收集了Web设计及UI灵感，包含代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色板或从顶级配色板获得灵感。
  * [coolors](https://coolors.co/) - 颜色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 手选的色彩调色板，专为品牌设计而选。
  * [css-gradient.com](https://www.css-gradient.com/) - 提供一个免费工具，快速生成跨浏览器的自定义CSS渐变，有

  * [walkme.com](https://www.walkme.com/) — 企业级指引和参与平台，免费计划支持最多5步骤的引导。
  * [Webflow](https://webflow.com) - 不需编码的网站构建器，支持动画和网站托管。两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 针对基于TailwindCSS设计的网站构建器。非商业用途下免费。
  * [whimsical.com](https://whimsical.com/) - 合作流程图、线框图、便利贴和思维导图。创建免费的4个面板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发人员协作平台，展示设计、资产和样式指南。免费支持一个项目。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人的独特图形和图像。
  * [Responsively App](https://responsively.app) - 帮助更快速、精准地开发响应式web应用的免费开发工具。
  * [SceneLab](https://scenelab.io) - 提供大量免费设计模板的在线模拟图形编辑器。
  * [xLayers](https://xlayers.dev) - 支持Sketch设计文件预览、转换（免费开源版：https://github.com/xlayers/xlayers）。
  * [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大且SEO优化的网页构建工具。免费版包括五个页面，不限定制域名等功能。
  * [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，支持无水印1080p导出。
  * [Unicorn Platform](https://unicornplatform.com/) - 拥有托管服务的易用着陆页构建器。提供一个免费网站。
  * [SVGmix.com](https://www.svgmix.com/) - 提供超过30万个免费SVG图标、集合和品牌标志的库。适用于浏览器内的简单矢量编辑。
  * [svgrepo.com](https://www.svgrepo.com/) - 搜索和找到最适合项目的矢量图库，可免费下载SVG矢量图。
  * [haikei.app](https://www.haikei.app/) — 生成

## 设计灵感

  * [awwwards](https://www.awwwards.com/) - [最佳设计网站](https://www.awwwards.com/)，由设计师投票选出。
  * [Behance](https://www.behance.net/) - [设计作品展示平台](https://www.behance.net/)，设计师展示作品的地方，可以按UI/UX项目分类筛选。
  * [dribbble](https://dribbble.com/) - [独特设计灵感](https://dribbble.com/) ，通常不含实际应用的设计。
  * [Landings](https://landings.dev/) - [网页截图](https://landings.dev/)，根据你的喜好挑选设计灵感的最佳登录页面。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登录页/UI组件/网页截图](https://www.lapa.ninja/)，展示6025个最佳登录页面示例、设计师免费书籍和来自互联网的免费UI组件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登录页面设计](https://www.lovelylanding.net/)，频繁更新登录页面的截图，包括桌面、平板和手机版本。
  * [Mobbin](https://mobbin.design/) - [手机截图](https://mobbin.design/)，通过我们50,000+完整的可搜索手机应用截图，节省UI/UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动和网页UI设计](https://uiland.design/)，展示非洲和世界领先公司的设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [手机截图设计灵感库](https://www.mobile-patterns.com/)，包含iOS和Android UI UX最佳模式，供设计师、开发者和产品创作者参考。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频和截图](https://pageflows.com/)，展示多个移动和网页应用的完整流程视频和截图，可搜索。
  * [Screenlane](https://screenlane.com/) - [手机/网页UI设计灵感](https://screenlane.com/)，提供灵感和跟进最新设计趋势，可按模式和应用过滤。
  * [scrnshts](https://scrnshts.club/) - [精选应用商店设计截图](https://scrnshts.club/)，精心挑选的设计参考集。
  * [UI

## 地图上的数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求。
  * [carto.com](https://carto.com/) — 从您的数据和公开数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 高效的地图工具。每月提供50,000次免费查询（地图瓦片、db2vector、海拔信息）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供Web、桌面和移动设备的地图、地理空间数据存储、分析、地理编码、路由等API和SDK。免费内容包括每月两百万次基础地图瓦片、20,000次非存储的地理编码、20,000条简单路由、5,000次驾驶时间计算以及每月5GB的免费地图瓦片和数据存储。
  * [Foursquare](https://developer.foursquare.com/) — 提供来自Places API和Pilgrim SDK的位置发现、地点搜索和基于场景的内容。
  * [geoapify.com](https://www.geoapify.com/) — 提供矢量和栅格地图瓦片、地理编码、地点、路由、等值线API。免费请求额度为每日3,000次。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。免费每日查询次数为2,500次。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月提供10,000次免费查询。
  * [geojs.io](https://www.geojs.io/) — 提供高度可用的REST/JSON/JSONP IP位置查找API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和分享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) — 可为路由、路径优化、距离矩阵、地理编码和地图匹配提供免费开发者套餐。
  * [here](https://developer.here.com/) — 提供地图和位置敏感应用的API和SDK。每月免费交易额度为250,000次。
  * [locationiq.com

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 多个发行版（SUSE，EL，Fedora，Debian 等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 用于 Fedora 和 EL 的基于 Mock 的 RPM 构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu 和 Debian 的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE和代码编辑器

  * [3v4l](https://3v4l.org/)：一个免费的在线 PHP 壳和代码片段分享网站，可以在300多个PHP版本上运行你的代码
  * [Android Studio](https://developer.android.com/studio)：提供快速构建各种Android设备应用的工具，开源IDE，对所有人免费，适合用于Android应用开发。支持Windows、Mac、Linux和ChromeOS操作系统。
  * [AndroidIDE](https://m.androidide.com/)：一个开源的IDE，用于在Android设备上开发真正的基于Gradle的Android应用。
  * [Apache Netbeans](https://netbeans.apache.org/)：一个开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/)：一个协作设计API的工具，即时API模拟和生成文档（免费版对无限API蓝图和个人扩展到一个管理员账户以及托管文档的用户使用是免费的）。
  * [BBEdit](https://www.barebones.com/)：MacOS上受欢迎且可扩展的编辑器，免费模式提供了强大功能的核心集以及进阶功能的升级路径。
  * [Binder](https://mybinder.org/)：将Git仓库转换为交互笔记本集合，免费公共服务。
  * [BlueJ](https://bluej.org)：专为初学者设计的免费Java开发环境，由Oracle提供支持，具有简单图形用户界面，用于帮助初学者。
  * [Bootify.io](https://bootify.io/)：一个提供定制数据库和RESTful API的Spring Boot应用生成器。
  * [Brackets](http://brackets.io/)：一个专门为Web开发定制的开源文本编辑器，轻量、易用且高度可定制。
  * [cacher.io](https://www.cacher.io)：一个代码片段管理器，具备标签功能支持100多种编程语言。
  * [Code::Blocks](https://codeblocks.org)：一个免费的Fortran和C/C++ IDE，开源，跨Windows、macOS和Linux运行。
  * [Cody](https://sourcegraph.com/cody)：一个免费的AI编程助手，能够编写（代码块、自动完成、单元测试）、理解（了解整个代码库）、修复和查找代码。适用于VS Code、JetBrains及在线使用。
  * [codiga.io](https://codiga.io/)：一个代码协作助手

  * [VSCodium](https://vscodium.com/) - 由社区驱动的，没有 telemetry/tracking，并且是使用微软编辑器VSCode的免费二进制分发版本。
  * [wakatime.com](https://wakatime.com/) - 使用文本编辑器插件，为您的编码活动提供量化的自我指标，免费计划有限。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源的、跨平台的终端，支持无缝工作流程。可以在线渲染，并保存会话和历史。适用于 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) - 一个在浏览器中的 IDE，用于在隔离环境下编写 web 组件，提供 58 个模板，支持故事和测试。
  * [PHPSandbox](https://phpsandbox.io/) - 一个在线的PHP开发环境。
  * [WebDB](https://webdb.app) - 免费高效的数据库 IDE。包括服务器发现、ERD、数据生成器、AI、NoSQL 结构管理器、数据库版本控制等更多功能。
  * [Zed](https://zed.dev/) - Zed 是由 Atom 和 Tree-sitter 创建者的高性能多人代码编辑器。

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 一个数据云观察解决方案（Snowflake）。适用于个人免费使用。
  * [Hightouch](https://hightouch.com/) - Hightouch是一款反向ETL平台，帮助你将客户数据从数据仓库同步到CRM、营销工具和支持工具。基础版提供一个目的地的数据同步。
  * [Avo](https://avo.app/) — 简化分析发布流程。提供单源真相跟踪计划、类型安全的分析跟踪库、内置于应用程序的调试器以及数据观察，以在发布前捕捉所有数据问题。基础版免费对2个工作空间成员并提供1小时的数据观察回溯。
  * [Branch](https://www.branch.io) — 移动分析平台。基础版提供最多10,000个移动应用用户，并包含深度链接及其它服务。
  * [Cauldron](https://cauldron.io) — 开源的分析解决方案，允许用户从多个协作平台聚合信息，作为不同类型的数据源（Git、GitHub和GitLab）。基础版包括不限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向ETL与操作分析平台。免费同步数据仓库中的10个字段至60多个SaaS应用，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。基础版为单个网站提供3,000次浏览分析。
  * [Databox](https://databox.com) — 通过结合其他分析和BI平台提供商业洞察和分析。基础版提供3个用户、仪表板及数据源。带有1100万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 1个网站每月2000个页面浏览量（PV）。
  * [amplitude.com](https://amplitude.com/) — 月度事件100,000次，最多2个应用。
  * [GoatCounter](https://www.goatcounter.com/) — 开源网络分析平台，作为托管服务（免费用于非商业用途）提供，或可作为自托管应用。基础版适用于非商业用途，包括不限制的网站、6个月的数据保留期限以及每月100,00

**[返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每站每日1,000页面访问量，三个热图，三个小部件，免费的 Bug 跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放，包含开发者工具用于复现问题、实时支持以及产品分析套件。每月1,000次会话，访问所有功能，并且保留7天数据。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，保留30天，错误追踪和实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保存一个月，三个用户席位。详情请参阅[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每站每日1,050页面访问量，无限热图，存储3个月数据
  * [inspectlet.com](https://www.inspectlet.com/) — 免费提供一个网站每月2,500次会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，没有流量限制、项目限制，且不采样
  * [mouseflow.com](https://mouseflow.com/) — 免费版提供一个网站每月500次会话
  * [mousestats.com](https://www.mousestats.com/) — 免费版允许一个网站每月100次会话
  * [smartlook.com](https://www.smartlook.com/) — 提供免费版适用于web和移动应用（每月1,500次会话），包含三个热图、一个漏斗，数据保存1个月
  * [howuku.com](https://howuku.com) — 跟踪用户互动、参与度和事件。免费提供每月5,000次访问次数
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并查看用户如何使用您的网站或应用。为小项目提供免费无限时间的记录

**[

## 国际移动电话号码验证API和SDK

  * [numverify](https://numverify.com/) - 全球电话号码验证和查找的JSON API。每月100个API请求
  * [veriphone](https://veriphone.io/) - 全球电话号码验证，免费、快速、可靠的JSON API。每月1000个请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * **[Qonversion](http://qonversion.io/)** - 一款一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，助力优化内购和变现。支持iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。免费版每月最多可追踪10k美元收入。
  * **[ParityVend](https://www.ambeteco.com/ParityVend/)** - 自动依据访客位置调整价格，以便在全球扩展业务，探索新市场（购买力平价）。免费版包括每月7,500次API请求。
  * **[Glassfy](https://glassfy.io/)** - 提供内购订阅基础设施、实时订阅事件和跨iOS、Android、Stripe和Paddle的内置变现工具。免费版每月最多支持10k美元收入。
  * **[Adapty.io](https://adapty.io/)**
  * **[CoinMarketCap](https://coinmarketcap.com/api/)**
  * **[CurrencyFreaks](https://currencyfreaks.com/)**
  * **[CoinGecko](https://www.coingecko.com/en/api)**
  * **[CurrencyApi](https://currencyapi.net/)**
  * **[currencylayer](https://currencylayer.com/)**
  * **[exchangerate-api.com](https://www.exchangerate-api.com)**
  * **[FraudLabsPRO](https://www.fraudlabspro.com)**
  * **[FxRatesAPI](https://fxratesapi.com)**
  * **[Moesif API Monetization](https://www.moesif.com/)**
  * **[Nami ML](https://www.namiml.com/)**
  * **[RevenueCat](https://www.revenuecat.com/)**
  * **[vatlayer](https://vatlayer.com/)**
  * **[Currencyapi](https://currencyapi.com)**

**返回顶部**点此跳转至目录**[⬆️](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 提供20个免费的私有存储库给开发者，30个给团队来构建和存储Docker镜像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1GB私有存储库空间
  * [Docker Hub](https://hub.docker.com) — 只赠送1个免费的私有存储库，但是公有存储库无限制，可以用来构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互的有趣学习Docker的平台
  * [quay.io](https://quay.io/) — 免费提供无限的公共存储库，用来构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的Docker镜像存储服务

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp的Vagrant Cloud。Vagrant的盒状物托管服务。
  * [Vagrantbox.es](https://www.vagrantbox.es/) - 一个公共镜像存储库的替代选择

**[⬆️ 返回目录顶部](#目录)**

## 开发者博客网站

  **[回到顶部](#目录)**

* [BearBlog](https://bearblog.dev/) - 简约的、Markdown驱动的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 开发者分享想法和互助成长的平台。
  * [Hashnode](https://hashnode.com/) — 为开发者打造的无麻烦博客软件！
  * [Medium](https://medium.com/) — 更深入地思考对你而言重要的事情。
  * [AyeDot](https://ayedot.com/) — 免费以现代多媒体短格式迷你博客的形式，与世界分享你的想法、知识和故事。

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/)：GraphComment是一个评论平台，有助于您从网站观众中建立活跃的社区。
  * [Utterances](https://utteranc.es/)：一个基于GitHub问题的轻量级评论 widget。使用 GitHub 问题进行博客评论、维基页面等功能！
  * [Disqus](https://disqus.com/)：Disqus 是一个被网络上成千上万的网站使用的社区平台。
  * [Remarkbox](https://www.remarkbox.com/)：开源托管评论平台，按需付费，支持“一位管理员管理多个域名，完全控制行为和外观”。
  * [IntenseDebate](https://intensedebate.com/)：为 WordPress、Tumblr、Blogger 和众多其他网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) - 基于AWS Lambda和Chrome的截图API。它支持全页面捕获，时间戳记录，以及视口尺寸。
  * [microlink.io](https://microlink.io/) — 可将任意网站转换为元标签标准化、美观的链接预览、爬虫能力或作为服务的截图。每天免费提供250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简单的API调用生成网站截图。设计用于扩展，托管在Google Cloud上。每月免费提供100个截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 提供高度可定制的网站快照捕获。每月免费100张快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 捕获每月100张截图，格式有png、gif和jpg，包括全页面截图，而不仅仅是主页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 自动化浏览器和页面渲染。免费版提供每天最多500页。自2017年起提供免费版。
  * [Webshrinker.com](https://webshrinker.com) - Web Shrinker 提供网站截图和域名智能API服务。每月免费提供100次请求。
  * [Httpic.com](https://httpic.com) - 将任何网站转换为jpg、png或pdf。支持全页面截图、视口调整和自定义代码注入。免费版每月提供150张图片。
  * [Screenshots](https://screenshotson.click) — 你的截图API，提供高度可定制的截图选项。每月免费提供100张截图。

**[回到顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线 IDE，是构建、调试和创建跨平台项目的最佳去处。无需 Mac 即可构建 iOS 和 Android 应用程序。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一个全面托管和管理的移动应用 CI/CD。您可以使用基于 GUI 的 CI/CD 工具构建、测试和部署。免费版提供每月 500 分钟免费使用时长，以及一台配备 2.3 GHz 和 8 GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放界面，用于使用 Flutter 构建移动应用。

**[回到顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 能够运行Linux和Windows 2k的非常快速的x86虚拟机。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 具有网络支持的OpenRISC虚拟机，可运行Linux。
  * [v86](https://copy.sh/v86) — 能够在浏览器中直接运行Linux和其他操作系统的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审核和持续工作流程帮助实施隐私设计，以确保组织符合GDPR和其他法规。免费版针对较小团队有限制，而SaaS版仅供使用。
  * [Osano](https://www.osano.com/) - 合规管理与cookie政策平台，提供从GDPR代表到cookie通知的各种功能。免费版提供基础功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和cookie政策，以及同意管理。免费版提供有限的隐私和cookie政策，以及cookie通知。
  * [Cookiefirst](https://cookiefirst.com/) - 提供cookie通知、审计和多语言同意管理解决方案。免费版提供一次扫描和单个通知。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版有限制的访问者数量，提供大部分功能。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费版包含核心同意管理功能，并为经过验证的开源项目提供更高级的免费计划。

**[回到顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 用于创建社交媒体分享的代码、文本或图片的审美截图。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可用于分享美观的图片（例如Twitter/Facebook帖子）或链接（例如聊天或论坛）。
  * [Blynk](https://blynk.io) - 提供API的云端服务，用于控制、构建和评估物联网设备。免费开发者计划可以免费接入5个设备，还有免费云和数据存储。还有配套的移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大内置多行计算器的记事应用（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建并分享美化后、类似截图的代码片段。通常用于Twitter或博客文章上美观地分享代码片段。
  * [Code Time](https://www.software.com/code-time) - 用于VS Code、Atom、IntelliJ、Sublime Text等的停时跟踪和编程指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建优秀的截图，用于社交媒体分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本截图以分享到社交媒体。
  * [Cronhooks](https://cronhooks.io/) - 定时或周期性执行网络钩子。免费计划允许5次即期任务调度。
  * [cron-job.org](https://cron-job.org) - 一个在线cronjob服务。无限计数的作业是免费的。
  * [datelist.io](https://datelist.io) - 在线预订/预约日程系统。每月免费提供5次预订，包括1个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单易用的工具，可以将任何URL或域名转发。免费提供5个域名和每月20万次请求。
  * [Elementor](https://elementor.com) - WordPress网站构建器。提供40多个基本小部件的免费版本。
  * [Format Express](https://www.format-express.dev) - 实时在线格式化JSON、XML和SQL。
  * [FOSSA](https://fossa.com/) - 用于第三方代码、

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) — 免费使用2个设备，不限制会话数量和时长
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 需要时支持和设备的长期访问（免费每天2次会话）
  * [RustDesk](https://rustdesk.com/) - 为所有人提供的开源虚拟/远程桌面基础设施！
  **[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets)：包含免费/付费素材，比如精灵、图层集和角色包。
  * [Gamefresco.com](https://gamefresco.com/)：发现、收集来自世界各地游戏艺术家的免费游戏资产并分享。
  * [GameDevMarket](https://gamedevmarket.net)：提供免费/付费素材，如2D、3D、音频和GUI。
  * [OpenGameArt](https://opengameart.org)：开源游戏资源，例如音乐、声音、精灵和GIFs。
  * [CraftPix](https://craftpix.net)：包括免费/付费素材，例如2D、3D、音频、GUI、背景、图标、图层集和游戏套件。
  * [Game Icons](https://game-icons.net/)：提供免费的可定制SVG/PNG图标，遵循CC-BY许可。
  * [LoSpec](https://lospec.com/)：在线像素艺术和限制性数字艺术创作工具，提供众多教程和颜色列表供游戏设计者选择。
  * [ArtStation](https://www.artstation.com/)：市场，包含免费/付费2D、3D资产、音频以及图标、图层集和游戏套件。也可用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/)：社区共享资产，以及使用免费计划创作您的游戏资产。
  * [Poly Pizza](https://poly.pizza/)：免费低多边形3D素材。
  * [3Dassets.one](https://3dassets.one/)：超过8000个免费/付费3D模型和PBR材质，用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/)：免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏素材。
  * [Poliigon](https://www.poliigon.com/)：免费的材质（具有可变分辨率）、模型、HDRIs和画笔。提供免费插件以导出至软件如Blender。
  * [Freesound](https://freesound.org/)：免费、协作的声效库，提供不同的CC许可。

**[⬆️ 返回顶部](#目录)**

## Other Free Resources

  **[⬆️ 返回目录](#目录)**

* **[Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 提供免费的Web开发工具，包括 CSS 压缩、解压缩、图片优化、尺寸调整、大小写转换器、CSS校验、JavaScript编译器、HTML编辑器等。**
  * [ElevateAI](https://www.elevateai.com) - 每月可获取多达200小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) - 适用于本地开发的 Wildcard 公共CA签名SSL证书，支持子域名。
  * [Framacloud](https://degooglisons-internet.org/en/) - 法国非营利组织 Framerasoft 列举的一份免费/开源软件及软件即服务(SaaS)列表。
  * [GitHub - 免费开源软件资源库](https://github.com/tvvocold/FOSS-for-Dev) - 为开发者提供的免费和开源软件资源平台。
  * **[GitHub 教育资源](https://education.github.com/pack) - 专为学生提供的免费服务合集，注册需要。**
  * [Markdown Tools](https://markdowntools.com) - 用于转换HTML、CSV、PDF、JSON和Excel文件格式的工具。
  * **[Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) - 获取Microsoft 365平台开发所需的免费沙箱、工具和其他资源，订阅为期90天的Microsoft 365 E5订阅（不含Windows），到期后自动续期，活跃开发期间有效（通过行为数据追踪和算法衡量）。**
  * [Pyrexp](https://pythonium.net/regex) - 免费的在线正则表达式测试器和可视化调试工具。
  * [RedHat for Developers](https://developers.redhat.com) - 为开发者免费提供Red Hat产品，如RHEL、OpenShift、CodeReady等，仅个人计划可用。还提供免费参考电子书。
  * [smsreceivefree.com](https://smsreceivefree.com/) - 提供临时和一次性电话号码服务。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 免费