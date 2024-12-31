# free-for.dev

开发者和开源作者现在有很多服务提供免费层次，但要找到所有它们需要花费时间来做明智的决定。

这个列表列出了软件（SaaS、PaaS、IaaS等）和其他免费提供给开发者的服务。

本列表的范围仅限于系统管理员、DevOps 实践者等基础设施开发者可能会发现有用的东西。我们热爱所有免费服务，但最好保持主题。有时候这条界线很模糊，所以这是有偏见的；如果有我没有接受的贡献，不要感到冒犯。

此列表来自拉取请求、审查、想法和 1600 多人的工作成果。您也可以通过发送 [拉取请求](https://github.com/ripienaar/free-for-dev) 来添加更多服务或将提供更改或退役的服务移除出去。

[![跟踪卓越列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这个列表仅适用于服务形式，不包括开源软件。为了符合资格，服务必须提供免费层次，而不仅仅是免费试用。如果按时间段计费，免费层次至少应为一年。我们还会从安全角度考虑免费层次，因此单点登录（SSO）是可以的，但我不会接受将 TLS 限制为仅付费层的服务。

# 目录

  * [主要云服务商的免费额度](#主要云服务商的免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [组件存储库](#组件存储库)
  * [平台即服务](#平台即服务)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成与部署](#持续集成与部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索与浏览](#代码搜索与浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图上的数据可视化](#地图上的数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计与用户体验](#设计与用户体验)
  * [设计灵感](#设计灵感)
  * [开发者博客网站](#开发者博客网站)
  * [域名服务](#域名服务)
  * [Docker相关服务](#Docker相关服务)
  * [域名注册](#域名注册)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
  * [特性和开关管理平台](#特性和开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式AI](#生成式AI)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境与代码编辑](#集成开发环境与代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪与项目管理](#问题跟踪与项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发与反馈](#移动应用分发与反馈)
  * [管理系统](#管理系统)
  * [消息和流媒体](#消息和流媒体)
  * [其他](#其他)
  * [监控](#监控)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)


## 主要云服务商的免费额度

  * [Google Cloud Platform](https://cloud.google.com)（谷歌云平台）
    - App Engine：每天28台前端实例，9台后端实例
    - Cloud Firestore：1GB存储，每日5万次读取，2万次写入，2万次删除
    - Compute Engine：1台非抢占式e2-micro实例，30GB硬盘，5GB快照存储（仅限某些地区），北美到其他所有区域（不含中国和澳大利亚）每月1GB网络出港
    - Cloud Storage：5GB存储，1GB网络出港
    - Cloud Shell：基于Web的Linux shell/主要IDE，提供5GB持久存储，每周使用限制为60小时
    - Cloud Pub/Sub：每月10GB的消息量
    - Cloud Functions：每月200万次调用（包括背景和HTTP调用）
    - Cloud Run：每月200万次请求，360,000GB-秒内存，180,000vCPU-秒计算时间，北美地区每月1GB网络出港
    - Google Kubernetes Engine：对于一个区域集群，没有集群管理费，用户节点以标准Compute Engine定价计费
    - BigQuery：每月1TB查询，每月10GB存储
    - Cloud Build：每天120分钟构建时间
    - Cloud Source Repositories：最多5个用户，50GB存储，50GB出港数据
    - [Google Colab](https://colab.research.google.com/)：免费的Jupyter Notebook开发环境
    - [idx.dev](https://idx.dev)：Google项目IDX，基于云端的在线VSCode开发环境
    - 更详细列表：![](https://cloud.google.com/free)

  * [Amazon Web Services](https://aws.amazon.com)（亚马逊网络服务）
    - CloudFront：每月1TB出港和每月200万函数调用
    - CloudWatch：10个自定义度量和10个警报
    - CodeBuild：每月100分钟构建时间
    - CodeCommit：5个活跃用户、50GB存储和每月10,000个请求
    - CodePipeline：每月1个活跃管道
    - DynamoDB：25GB NoSQL数据库
    - EC2：每月750小时的t2

    - [ Workers](https://developers.cloudflare.com/workers/) - 免费在 Cloudflare 的全球网络上部署无服务器代码——每天 10 万个请求。
    - [ Workers KV](https://developers.cloudflare.com/kv) - 每天 1 万个读取请求，每天 1000 个写入请求，每天 1000 个删除请求，每天 1000 个列表请求，可存储 1 GB 数据
    - [ R2](https://developers.cloudflare.com/r2/) - 每月 10 GB，每月 100 万个 A 类操作，每月 1000 万个 B 类操作
    - [ D1](https://developers.cloudflare.com/d1/) - 每天 5 万个读取行，每天 1 万个写入行，1 GB 存储空间
    - [ Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上构建并部署您的 Web 应用。每月 500 次构建，可配 100 个定制域名，集成 SSL，无限访问席位，无限预览部署，并通过 Cloudflare Workers 集成实现全栈功能。
    - [ Queues](https://developers.cloudflare.com/queues/) - 每月 100 万个操作
    - [ TURN](https://developers.cloudflare.com/calls/turn/) - 每个月免费提供 1TB（出站）流量。

**[⬆️ 返回目录](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一个协作工具，用于从头到尾可视化构建和管理云基础设施。
  * [Cloud 66](https://www.cloud66.com/) - 免费用于个人项目（包括一个部署服务器和一个静态网站），Cloud 66提供了所有构建、部署和扩展应用程序所需的功能，无需担心“服务器管理”带来的困扰。
  * [Pulumi](https://www.pulumi.com/) - 当今现代化的“基础设施即代码”平台，允许你使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) - Terraform Cloud。提供免费的远程状态管理和团队协作，适用于最多500个资源。
  * [scalr.com](https://scalr.com/) - Scalr 是一个 Terraform 自动化和协作（TACO）产品，用于更好地管理和自动化由 Terraform 管理的基础设施和配置。支持完整的 Terraform CLI，集成 OPA，并采用层级配置模型。无 SSO 附加费，所有功能全包含。免费版每月最多20次运行。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员自动化在 AWS 上的部署。对于免费版，一个开发者（单个用户）可以部署无限数量的静态站点、网络服务和环境。免费版每月提供20次执行任务，包括预览和自动部署等功能。

**[⬆️ 返回顶端](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 免费提供最多5个用户支持的无限公开和私人Git存储库，具有CI/CD功能的Pipelines
  * [chiselapp.com](https://chiselapp.com/) — 提供无限数量的公开和私人Fossil存储库
  * [codebasehq.com](https://www.codebasehq.com/) — 免费项目一个，享有100 MB空间和两个用户权限
  * [Codeberg](https://codeberg.org/) — 免费的公共和私人Git存储库，专为免费开源项目设计（不限合作者）。由[Forgejo](https://forgejo.org/)支持。提供基于Codeberg的静态网站托管、CI/CD服务、翻译托管、包和容器托管、项目管理以及问题跟踪功能
  * [GitGud](https://gitgud.io) — 提供无限的公共和私人存储库，终身免费。由GitLab和Sapphire驱动，不提供CI/CD服务
  * [GitHub](https://github.com/) — 免费访问无限数量的公共存储库，且无限数量的私人存储库（与无限合作者）。提供CI/CD、开发环境、静态托管、包和容器托管、项目管理和AI Copilot功能
  * [gitlab.com](https://about.gitlab.com/) — 提供最多5个合作者的无限公共和私人Git存储库。包含CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit是基于GitLab软件的Framasoft的开放源代码软件代码协作平台，提供CI、静态页面、项目页面和问题跟踪服务
  * [heptapod.net](https://foss.heptapod.net/) — 是一个基于GitLab社区版的友好的 Fork，支持Mercurial
  * [ionicframework.com](https://ionicframework.com/appflow) — 提供应用开发所需的存储库和工具，还提供Ionic库
  * [NotABug](https://notabug.org) — 一个基于Git的免费自由软件代码协作平台，专为开源许可项目设计
  * [OSDN](https://osdn.net/) — 提供SVN/Git/Mercurial/Bazaar/CVS存储库的免费服务，面向

## API、数据和机器学习

  **JSONGrid**: 免费工具将复杂 JSON 数据可视化、编辑、过滤成漂亮的表格。您可以链接分享 JSON 数据。

**Zerosheets**: 可以将 Google Sheets 转换为强大的 API，快速构建原型、网站和应用。免费版每月有 500 个请求额度。

**IP.City**: 每日免费提供 100 个 IP 地理定位请求。

**Abstract API**: 提供多种用途的 API 包括 IP 地理定位、性别检测、邮箱验证等。

**Apify**: 网页抓取和自动化平台，创建任何网站的数据 API。免费版每月提供 5 美元平台信用预留。

**APITemplate.io**: 自动生成 PDF 和图像文件，无需 CSS/HTML，免费版每月 50 个图像限制和 3 个模板。

**APIToolkit.io**: 检查和监控您 API 的强大工具，免费版支持每月 20,000 个请求。

**APIVerve**: 立即获取超过 120 个免费 API，重视质量、一致性与可靠性。每月包含 50 个 API 令牌。

**Arize AI**: 机器学习可观测性平台，监控模型并解决数据质量与性能问题。个人和学术首批免费，最多支持两个模型。

**Atlas toolkit**: 用于开发单页 web 应用的轻量级库，支持多种语言如 Java、Node.js 等。

**Beeceptor**: 快速创建 REST API 模拟器，伪造响应，免费版限每日 50 个请求，公开面板，启用开放端点。

**bigml.com**: 云端托管机器学习算法，开发免费任务不限，16 MB 数据限制。

**Browse AI**: 在线抓取和监控网络上的数据，每月提供 50 个信用。

**BrowserCat**: 无头浏览器 API 用于自动化、抓取、AI 代理访问等，免费版每月提供 1,000 个请求。

**Bruzu**: API 生成大量图片变种，免费版加上水印。

**Calendarific**: 提供 200 多个国家的公共节假日 API 服务，免费版包含每月 1,000 个调用。

**Canopy**: Amazon API 提供商品搜索和类别数据，免费版

  * [Doczilla](https://www.doczilla.app/) — 一款用于直接从 HTML/CSS/JS 代码生成屏幕截图或 PDF 的 SaaS API。免费计费计划每月支持 250 个文档。
* [Doppio](https://doppio.sh/) — 一种管理 API，用于生成和私密存储 PDF 和屏幕截图，采用顶级渲染技术。免费计划每月可生成 400 个 PDF 和屏幕截图。
* [dreamfactory.com](https://dreamfactory.com/) — 开源 REST API 后端，适用于移动、Web 和 IoT 应用。轻松链接任何 SQL 或 NoSQL 数据库、文件存储系统或外部服务，它瞬间创建出包含实时文档和用户管理的全方位REST API平台。
* [DynamicDocs](https://advicement.io) — 根据 LaTeX 模板，使用 JSON to PDF API 生成 PDF 文档。免费计划允许每月 50 次API调用和模板库访问。
* [Efemarai](https://efemarai.com) — 一个用于 ML模型和数据的测试和调试平台。可视化任何计算图。开发者每月免费提供 30 个调试会话。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 一款免费的基于网络的 HTTP 客户端，用于发送 HTTP 请求。
* [Export SDK](https://exportsdk.com) — 提供拖放模板编辑器的 PDF 生成 API，提供 SDK 和无代码集成。免费计划每月有 250 页，无限用户，以及三个模板。
* [Fern](https://buildwithfern.com) — 根据 API 定义生成 SDK，可用于流行语言，同时为 API 参考文档生成网页。您可以添加 Markdown 在 Fern 上托管您的完整文档解决方案。支持 OpenAPI。
* [file.coffee](https://file.coffee/) — 提供存储文件服务，单文件最大容量为 15MB（有账户时提供 30MB）。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 用于信用卡支付欺诈检查的订单交易筛查 API。免费版每月可处理 500 笔交易。
* [Geekflare API](https://geekflare.com/api) — 提供屏幕截图、网站审计、TLS扫描、DNS查找、测试

  * **Market Data API**：提供实时和历史金融数据，如股票、期权、共同基金等。免费版每天可进行100次API请求。
  * **Meteosource Weather API**：提供全球天气数据，基于机器学习，预测更准确。免费版每日400次调用。
  * **microlink.io**：将任何网站转化为元标签规范、美观链接预览、抓取能力或屏幕截图服务。每天免费100次请求。
  * **Mindee**：强大的OCR软件和API平台，基于计算机视觉和机器学习识别文档中的关键信息。免费版每月处理250页。
  * **Mintlify**：简洁的API文档设计工具，提供美观的UI、搜索功能和交互式预览。免费版支持1个编辑器。
  * **monkeylearn.com**：文本分析，机器学习，每月免费300个查询。
  * **MockAPI**：用于快速搭建模拟API的简单工具，含4个资源的免费项目。
  * **Mockfly**：API模拟和功能标志管理工具，免费版每天500次请求。
  * **Mocki**：创建同步到GitHub仓库的模拟GraphQL和REST API，简单REST API免费开发和使用。
  * **Mocko.dev**：提供云端API代理，免费测试和集成测试。
  * **Mocky**：HTTP响应生成器，云端使用或离线模式，免费开源。
  * **reqres.in**：免费的RESTful API托管服务，用于AJAX请求响应。
  * **microenv.com**：为开发者创建模拟REST API，可生成和部署到Docker容器。
  * **Multi-Exit IP Address Checker**：检查您的出口IP跨多个节点，理解IP在全球各地和服务的显示，免费工具。
  * **neptune.ai**：MLOps的元数据管理平台，个人用户免费，包含1成员、100GB存储和200h监控。
  * **News API**：通过代码搜索新闻并获取JSON结果，开发者每月免费3000次查询。
  * **GoCardless**：免费开放银行数据API，适用于PSD2，支持欧盟和英国2300+银行连接。
  * **Nyckel**：训练、部署和调用图像和文本ML模型，免费训练500

  * [ROBOHASH](https://robohash.org/) - 一个网络服务，可以根据任何文本生成独特且酷炫的图片。
  * [SaturnCloud](https://saturncloud.io/) - 数据科学云计算环境，允许运行Jupyter笔记本和Dask集群。每月提供30小时免费计算资源和3小时的Dask资源。
  * [Scraper's Proxy](https://scrapersproxy.com) — 提供简单HTTP代理API用于抓取网站，能匿名抓取，处理限制、阻止和验证码问题。首次100个成功抓取请求是免费的，还包括用于JavaScript渲染的服务（更多服务可通过联系客服获取）。
  * [ScrapingAnt](https://scrapingant.com/) — 提供无头Chrome抓取API和免费检查代理服务。支持JavaScript渲染，提供可轮换的付费代理，能避免验证码。有免费计划可供选择。
  * [ScraperBox](https://scraperbox.com/) — 使用真正的Chrome浏览器和代理轮换，提供无被检测的网络抓取API。只需简单的API调用即可抓取任何网页。免费计划允许每月1000次请求。
  * [ScrapingDog](https://scrapingdog.com/) — 提供百万代理、浏览器和验证码处理能力，只需一次API调用，就能获取任何网页的HTML。包含了Web Scraper for Chrome & Firefox和处理大量抓取需求的软件。有免费计划。
  * [scrapinghub.com](https://scrapinghub.com) — 提供数据抓取的可视化界面以及插件，免费计划包含在共享服务器上无限制的抓取。
  * [Simplescraper](https://simplescraper.io) — 在每次操作后触发Webhook。免费计划包括1000个云抓取积分。
  * [Select Star](https://www.selectstar.com/) - 是一个智能数据发现平台，自动分析和文档化你的数据。免费层提供1个数据源上限，100张表，10个用户。
  * [Sheetson](https://sheetson.com) - 即时将任何Google Sheets转换为RESTful API。有免费的计划可供选择。
  * [Shipyard](https://www.shipyardapp.com) — 是一个低代码版的数据整合平台，云端运行，支持低代码模板和编程（Python

  * [Zuplo](https://zuplo.com/) - 一个免费的API管理平台，用于设计、构建和部署API到边缘。在几分钟内为任何API添加API密钥认证、速率限制、开发者文档和货币化。基于OpenAPI，完全支持Web标准API和TypeScript。免费版提供多达10个项目、无限个生产边缘环境、250个API密钥、每月100K次请求和1GB的出站流量。

**[⬆️ 返回顶部](#目录)**

## 组件存储库

  * [Artifactory](https://jfrog.com/start-free/) - 是一个支持多种包格式的存储库，如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS。还包括包扫描工具XRay和CI/CD工具Pipelines（原名Shippable），每月提供2000分钟的免费CI/CD分钟数。
  * [central.sonatype.org](https://central.sonatype.org) - 作为Apache Maven、SBT和其他构建系统的默认存储库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的、私有的和公共的Maven和PyPI存储库。对开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) - 一个简单、安全、集中的存储服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等项目。免费层级及对开源项目免费。
  * [jitpack.io](https://jitpack.io/) - 为GitHub上的JVM和Android项目提供的Maven存储库，公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) - 提供使用方便的存储托管，支持Maven、RPM、DEB、PyPi、NPM和RubyGem包（有免费层级）。
  * [repsy.io](https://repsy.io) - 提供1 GB免费的私有/公共Maven存储库。
  * [Gemfury](https://gemfury.com) - 提供私有和公共的存储库，支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM。对公开项目免费。
  * [paperspace](https://www.paperspace.com/) - 提供构建、扩展AI模型，开发、训练和部署AI应用。免费计划：公开项目，5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 提供私有云托管的Python、Debian、NPM包和Docker注册表存储库。对开源/公开项目有免费版。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。云中免费提供10GB存储、10GB

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一款免费的云端代码片段管理器，适用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com) — 个人和企业团队存储、分享和同步敏感数据最简单且最安全的方式。
  * [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公共访问组免费，无限用户，历史记录和集成。提供自托管开源版本。
  * [cally.com](https://cally.com/) — 为会议寻找最佳时间和日期。易于使用，适用于小团队和个人大组。
  * [Calendly](https://calendly.com) — 款连接和安排会议的工具。免费版提供每个用户1个日历连接和无限会话。提供桌面和移动应用。
  * [Discord](https://discord.com/) — 具有公共或私人房间的聊天功能。支持Markdown文本、语音、视频和屏幕分享。免费用户提供无限用户。
  * [Telegram](https://telegram.org/) — 适合追求快速、可靠消息和通话的各方。企业用户和小团队可能喜欢其大群组、用户名、桌面应用以及强大的文件分享功能。
  * [Dubble](https://dubble.so/) — 免费的步骤指导创建器。截图、记录过程并与团队协作。支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 实时与团队交流。支持IDE、终端分享、语音、视频和屏幕共享。免费版适用于小团队。
  * [Dyte](https://dyte.io) - 高度开发者友好的现场视频和音频 SDK，配以协作插件以提升生产力和参与度。免费版每月提供10,000分钟的实时视频/音频使用量。
  * [evernote.com](https://evernote.com/) — 信息组织工具。分享笔记并与他人协作。
  * [Fibery](https://fibery.io/) — 连接式工作空间平台。单用户免费，最多2 GB磁盘空间。
  * [flock.com](https://flock.com) — 提高团队沟通效率的平台。免费提供无限消息、频道、用户、应用程序和集成。
  * [Gather](https://www.gather.town/) — 一个改善在线聚会

  - [**seafile.com**](https://www.seafile.com/) — 私有或云存储，文件共享、同步和讨论。云版本仅提供1GB存储空间。
- [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，将来自多个仓库的贡献整合到单一报告中。
- [通过浏览器进行屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册，直接通过浏览器与合作者共享屏幕。免费版。
- [Slab](https://slab.com/) — 一款专为团队设计的知识管理服务。小型团队免费。
- [slack.com](https://slack.com/) — 免费版适用于无限用户，部分功能受限。
- [Spectrum](https://spectrum.chat/) - 免费创建公共或私人社区。
- [StatusPile](https://www.statuspile.com/) — 一个跟踪上游供应商状态页面的仪表板。 
- [ Stickies](https://stickies.app/) — 用于头脑风暴、内容策划和注释的可视化协作应用程序。免费版最多可获得3个画布，无限用户和1GB存储空间。
- [Stacks](https://betterstacks.com/) — 内容工作区，集成笔记、链接和文件存储，以应对信息过载。个人版永久免费。
- [talky.io](https://talky.io/) — 轻松进行群组视频聊天。匿名，点对点，无需插件、注册或支付。
- [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持看板和敏捷实施，包含集成时程跟踪。五名用户和三个项目组合免费试用。
- [Teamplify](https://teamplify.com) - 提高团队开发流程，通过团队分析和智能日常站会。小型团队可免费使用。
- [Tefter](https://tefter.io) - 带有强大Slack集成的书签应用程序。对开源团队免费。
- [TeleType](https://teletype.oorja.io/) — 分享终端、语音、代码、白板等。无须登录即可进行端到端加密的开发者协作。
- [TimeCamp](https://www.timecamp.com/) - 免费的时钟跟踪软件，适用于无限用户，可

**[回到顶部](#目录)**

## 内容管理系统

  * [Acquia.com](https://www.acquia.com/) — 提供Drupal站点托管服务。开发者可以使用免费套餐。还提供免费开发工具，如Acquia Dev Desktop。
  * [Contentful](https://www.contentful.com/) — 是一个无头CMS。云上的内容管理和分发API。包括一个免费的Community空间，配备五个用户、25,000条记录、48个内容类型和2个本地化区域。
  * [Cosmic](https://www.cosmicjs.com/) — 是无头CMS和API工具包。为开发者提供了免费的个人计划。
  * [Crystallize](https://crystallize.com) — 是一个支持电子商务的无头PIM（产品信息管理）。内置GraphQL API。免费版本包括不限制的用户、1,000个目录项、每月5GB带宽和每月25,000个API调用。
  * [DatoCMS](https://www.datocms.com/) — 提供为小型项目提供的免费套餐。DatoCMS是一个基于GraphQL的CMS。在较低级别，您有每月100,000次调用的限制。
  * [Directus](https://directus.io) — 是一个完全免费且开源的用于管理本地或云端资产和数据库内容的平台。没有限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 是一个无头CMS，直接将JSON内容存储在您的Git存储库中。无限制。
  * [kontent.ai](https://www.kontent.ai) - 一个内容即服务平台，同时为营销人员提供强大的支持。开发人员计划提供两个用户，无限项目，每个项目提供两个环境，500个内容项，支持两种语言的交付和管理API以及自定义元素。您可以使用更详细计划以满足需求。
  * [Prismic](https://www.prismic.io/) — 是无头CMS。带托管和可扩展API的内容管理界面。社区计划提供对一个用户无限API调用、文档、自定义类型、资产和本地化区域的支持。对于公开内容/开源项目，提供更大的免费计划。
  * [Sanity.io](https://www.sanity.io/) - 一个针对结构化内容的平台，提供开源编辑环境和实时托管数据存储。每个项目提供无限项目、无限管理用户

## 代码生成

  * [AppInvento](https://appinvento.io/) — AppInvento是一款免费的无代码应用构建器。在这个自动生成的后端代码中，用户对源代码有完全访问权，并且有无限的API和路由，支持深度集成。免费计划包括三个项目、五个表格和一个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody是一款编程AI助手，它使用AI和对代码库的深入理解，帮助你快速编写和理解代码。Cody提供了不同LLMs（包括本地推理）的选择，支持各种IDE，支持所有主流编程语言，并且有免费计划。免费计划为开发者每月提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500个自动完成（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — DhiWise利用创新的代码生成技术，将Figma设计无缝转换为动态的Flutter和React应用程序，优化您的工作流程，让构建优质的移动和Web体验比以往任何时候都更快速。
  * [Codeium](https://www.codeium.com/) — Codeium是一款基于AI的代码完成工具，支持20多种编程语言（如Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并集成到所有主要的独立和网络IDE中。
  * [Fern](https://buildwithfern.com) - 写API定义并使用它们生成流行语言（如TypeScript、Python、Java、Go等）的SDKs/客户端库。支持OpenAPI。免费版最多为20个端点生成代码。
  * [Metalama](https://www.postsharp.net/metalama) — 专为C#设计。Metalama在编译时动态生成代码的骨架，使你的源代码保持清晰。开源项目免费，其商业友好的免费版包括三个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是为VSCode、JetBrains和Neovim提供的一款快速AI代码完成插件。免费版提供无限制的行内完成。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过提供从全球代码中学习的洞察力，帮助开发者更快地创建更好的软件。插件可用。
  *

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 提供编写、审阅和部署代码的完整工作流，免费用户一个，100MB 存储空间，用于一个仓库
  * [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，但MS IE 9在Vista下1024 x 768分辨率的3分钟免费会话
  * [codacy.com](https://www.codacy.com/) — 自动代码审查，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS、CoffeeScript，开源项目和无限公开或私人仓库是免费的
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 自动化基础设施即代码审查工具，用于DevOps，集成GitHub、Bitbucket、GitLab（甚至自托管）。除了标准语言，它还会分析Ansible、Terraform、CloudFormation、Kubernetes等。[开源免费](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev)
  * [CodeBeat](https://codebeat.co) — 自动代码审查平台，适用于多种语言。对公开仓库，使用Slack和电子邮件集成，永远是免费的
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查，开源项目和无限个组织私人仓库（最多4个合作者）是免费的。同样对学生和机构也有免费服务
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（SaaS），对开源是免费的，同时还有一个免费的私人仓库
  * [CodeFactor](https://www.codefactor.io) — 对Git的自动代码审查。免费版包含无限数量的用户、公开仓库，以及一个私人仓库
  * [coderabbit.ai](https://coderabbit.ai) — AI驱动的代码审查工具，与GitHub/GitLab集成。免费版包括每小时200个文件的分析、每小时3次审查和每小时50次对话。对于开源项目，终生免费
  * [codescene.io](https://codescene.io/) — 根据开发者如何与代码交互，CodeScene将技术债务进行优先级排序，可视化团队耦合和系统掌握等组织因素。对开源项目是免费的
 

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/)：32种不同的包管理器的搜索和依赖更新通知，对开源免费
  * [Namae](https://namae.dev/)：搜索GitHub、Gitlab、Heroku、Netlify等网站，查找项目名称的可用性。
  * [searchcode.com](https://searchcode.com/)：全面的文本代码搜索，对开源免费
  * [tickgit.com](https://www.tickgit.com/)：发现`TODO`注释（和其他标记）以确定值得回去改进的代码区域。
  * [CodeKeep](https://codekeep.io)：代码片段的Google Keep。组织、发现和分享代码片段，拥有强大的代码截图工具，包括预设模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## 持续集成与部署

  * [AccessLint](https://github.com/marketplace/accesslint) — 让网页可访问性测试融入你的开发流程。开源和教育项目免费。
  * [appcircle.io](https://appcircle.io) — 可以为移动应用打造企业级的DevOps平台，自动构建、测试和发布到应用商店，加快开发和发布的效率。免费额包括每构建的最多30分钟构建时间、每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows环境的持续集成服务，开源项目免费。
  * [Argonaut](https://argonaut.dev/) - 在云中轻松部署应用和基础设施。支持自定义和第三方应用在Kubernetes和Lambda环境中部署，免费版限制在5个域名和2名用户内支持无限的应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD服务，开源项目200次免费构建/月，10分钟构建时长与2名团队成员。其中，原生或混合应用10分钟构建时间，开源项目额外提供45分钟构建时长和+1个并发构建服务。
  * [buddy.works](https://buddy.works/) — CI/CD工具，包含五次免费项目的构建和一个并发运行（每月120次执行）
  * [Buildkite](https://buildkite.com) — CI管道，对于3名用户和每月5k分钟的作业时间完全免费。Test Analytics的免费开发者版包括每月10万次测试执行，针对开源项目提供更多免费资源。
  * [bytebase.com](https://www.bytebase.com/) — 数据库的CI/CD和DevOps服务。在20个用户和10个数据库实例内是免费的。
  * [CircleCI](https://circleci.com/) — 全面的免费套餐，包含托管CI/CD服务中的所有功能，支持GitHub、GitLab和BitBucket仓库。它提供多种资源类别，如Docker、Windows、Mac OS、ARM执行器、本地运行器、测试拆分、Docker层缓存等功能。对于私有项目，每月最高执行时间为6000分钟、不限协作者、最多30个并行构建，开源项目提供每月80,000分钟免费构建时间

## Testing

  * [Applitools](https://applitools.com) — 提供智能视觉验证功能，适用于 web、原生移动和桌面应用。可与几乎所有的自动化解决方案（如 Selenium 和 Karma）和远程运行器集成（如 Sauce Labs、Browser Stack））。开源免费，单个用户有免费版本，但每周只能使用有限数量的检查点。
  * [Appetize](https://appetize.io) — 在云端的 Android 手机和平板模拟器及 iPhone/iPad 模拟器上直接测试您的 Android 和 iOS 应用。免费版允许同时支持两个会话，每月使用时长为30分钟，不限应用大小。
  * [Apptim](https://apptim.com) — 一款旨在让没有性能工程技能的人也能评估应用性能和用户体验（UX）的移动测试工具。使用个人设备的桌面版完全免费，支持无限数量的iOS和Android测试。
  * [Argos](https://argos-ci.com) — 为开发者提供的开源视觉测试工具。支持无限个项目，每月可生成5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) — 连续基准测试工具套件，用于捕捉 CI 性能下降。对所有公开项目提供免费服务。
  * [browserstack.com](https://www.browserstack.com/) — 提供手动和自动化浏览器测试，[开源用户免费](https://www.browserstack.com/open-source)。
  * [BugBug](https://bugbug.io/) — 一个针对 web 应用的轻量级自动化测试工具，易于学习，无需编程。免费为个人电脑上的无限测试提供支持。另外，可以按月付费获取云监控和 CI/CD 集成服务。
  * [Checkly](https://checklyhq.com) — 适用于现代 DevOps 的基于代码的合成监控工具。以传统供应商十分之一的价格监控您的 API 和应用。为开发者提供慷慨的免费版。
  * [checkbot.io](https://www.checkbot.io/) — 是一个浏览器扩展，可检查您的网站是否遵循50+ SEO、速度和安全最佳实践。对于较小的网站，有免费版。
  * [cypress.io](https://www.cypress.io/) — 快速、简单且可靠的针对浏览器内的任何内容的测试工具。Cypress Test Runner 免费

  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和查看webhook。将其转发至本地主机，或者从历史中重放。免费使用。
  * [Vaadin](https://vaadin.com) - 使用Java或TypeScript构建可伸缩的用户界面，利用集成工具、组件和设计系统，快速迭代、设计得更好，简化开发流程。五个项目的无限项目，免费维护五年。
  * [websitepulse.com](https://www.websitepulse.com/tools/) - 提供各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中用唯一的URL调试和查看webhook或HTTP请求。完全免费，您可以创建无限数量的URL，并获得建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和电子邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 一站式应用安全平台，涵盖了 SCA、SAST、CSPM、DAST、秘密管理、IaC、恶意软件、容器扫描、过时...免费方案包括两个用户，10个仓库的扫描，1个云，2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 发现您网络中的疑似被攻陷系统
  * [Altcha.org](https://altcha.org/anti-spam) - 一款基于自然语言处理和机器学习的网站和API反垃圾邮件过滤器。免费计划每天支持每个域名发送200个请求。
  * [atomist.com](https://atomist.com/) — 一款加速并简化各种开发任务自动化的方式。现已进入beta阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊网络服务(AWS)安全和合规审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度指示器(Indicator of Compromise, IOC)。部分数据在 GitHub 上提供[https://github.com/unknownhad/AWSAttacks]。完整列表可通过 API 获取。
  * [CodeNotary.io](https://www.codenotary.io/) — 提供开源平台，通过不可篡改的方式来证明代码、文件、目录或容器的正确性。
  * [crypteron.com](https://www.crypteron.com/) — 云优先、对开发者友好的安全平台，防止.NET和Java应用程序中的数据泄露。
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个无需处理复杂工具或编程语言，即可分析和解码编码数据的简单直观的网络应用。如同加密学及加密的瑞士军刀。所有功能均可免费使用，无限制。如果您想自托管，它是开源的。
  * [DAS](https://signup.styra.com/) — Styra DAS 免费版，提供完整的权限管理，用于创建、部署和管理Open Policy Agent(OPA)授权流程。
  * [Datree](https://www.datree.io/) — 开源命令行工具，确保Kubernetes配置不会出现错误，

#### [回到顶部](#目录)

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 提供给应用程序和API的细粒度授权服务。免费支持1000个每月活跃用户（MAUs）和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) -无缝集成单点登录（SSO）、多因素认证（MFA）、密码less身份验证等。包含前端和后端应用的SDK。免费提供1000个MAUs和五个身份提供商。
  * [Auth0](https://auth0.com/) - 托管SSO服务。免费计划包含25,000个MAUs、无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 几分钟内为您的应用程序添加密码less、一次性密码（OTP）、两步验证（2FA）和SSO。包含前端组件，免费提供5000个MAUs。
  * [Authress](https://authress.io/) - 提供身份验证登录和访问控制，具有无限项目的单个提供商。支持Facebook、Google、Twitter等。前1000个API调用是免费的。
  * [Authy](https://authy.com) - 多设备的两因素认证（2FA），用作Google Authenticator的替代方案。免费提供100次成功验证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个全面的授权管理系统，用于编写、测试和部署访问策略。可提供细粒度授权和访问控制，免费提供100个每月活跃原则（MAU）。
  * [Clerk](https://clerk.com) - 用户管理、身份验证、MFA/2FA、预建UI组件，包括登录、注册、用户资料等。免费支持10,000个MAU。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak 身份和访问管理作为服务。免费提供100个用户和一个领域 (realm)。
  * [Corbado](https://www.corbado.com/) - 在新或现有应用中添加密码钥匙认证。无限MAU版本免费。
  * [Descope](https://www.descope.com/) - 高度自定义的认证流程

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的首选平台，用于确保移动应用正常工作。免费版：一个应用、分析、无限版本及安装、以及反馈收集。
  * [Loadly](https://loadly.io) - 提供iOS和Android应用的发行服务，提供完全免费的服务，包括无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备上。免费版：应用上传、加密链接、1天有效期、10次安装。
  * [InstallOnAir](https://www.installonair.com) - 过空中分发iOS和Android应用。免费版：无限上传、私有链接、访客2天过期、注册用户60天有效。
  * [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用发行。免费计划包括一个项目、三个应用版本、500MB存储、每月100个应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费版包含5个应用、每月50次下载和最大文件大小为100MB。

**[⬆️ 返回顶部](#目录)**

## Management System

  * [bitnami.com](https://bitnami.com/) — 在云基础设施提供商（IaaS）上部署准备好的应用程序。包括一个免费的 AWS 微型实例管理服务
  * [Esper](https://esper.io) — 为Android设备提供MDM（设备管理）和MAM（应用程序管理）的DevOps解决方案。一百台设备免费，每个用户许可配额1个，且应用存储空间为25MB
  * [jamf.com](https://www.jamf.com/) — 专注于ipad、iPhone和Mac设备的设备管理，免费提供三个设备的管理服务
  * [Miradore](https://miradore.com) — 设备管理服务。保持设备车队的最新状态，并提供无限数量设备的安全管理。基础功能在免费计划中可用
  * [moss.sh](https://moss.sh) - 协助开发者部署和管理他们的web应用程序和服务器。每月免费提供25次git部署
  * [runcloud.io](https://runcloud.io/) — 主要是针对PHP项目的服务器管理服务。免费提供1台服务器的访问权限
  * [ploi.io](https://ploi.io/) — 用于轻松管理服务器和部署站点的服务器管理工具。免费提供1台服务器的使用权

**[⬆️ 返回顶部](#目录)**

## 消息和流媒体

  * [Ably](https://www.ably.com/) - 提供实时消息传递服务，具有存在、持久性和保证交付功能。免费计划包括每月300万消息、100个峰值连接和100个峰值通道。
  * [cloudamqp.com](https://www.cloudamqp.com/) - 提供RabbitMQ服务。Little Lemur计划：每月最大100万消息、20个并发连接、最多100个队列、最多10,000条排队消息，支持不同AZ的多个节点。
  * [courier.com](https://www.courier.com/) - 提供单一API，支持推送、应用程序内、电子邮件、聊天、SMS等通信渠道，还提供模板管理等功能。免费计划包含每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) - 为开发者提供多通道通知基础设施，内置预构建的内置应用收件箱和无代码模板编辑器。免费计划包含每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的MQTT设备连接到云原生物联网消息代理。免费连接最多100个设备（无需信用卡），无限期免费使用。
  * [knock.app](https://knock.app) - 为开发者提供的通知基础设施。通过单一API支持多种渠道，如应用程序内、电子邮件、SMS、Slack和推送。免费计划包含每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟内为软件添加用户通知。免费计划包含每月10,000条通知、100条SMS和自动呼叫。
  * [Novu.co](https://novu.co) - 开源通知基础设施，专为开发者设计。提供管理和处理所有通信渠道（邮件、短信、直接、应用程序内和推送）的简单组件和API。免费计划包含每月30,000条通知，数据保留期为90天。
  * [pusher.com](https://pusher.com/) - 实时消息服务。免费方案支持最多100个同时连接和每天200,000条消息。
  * [scaledrone.com](https://www.scaledrone.com/) -

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费每天最多支持100,000条日志记录，保留期24小时
  * [logentries.com](https://logentries.com/) — 免费每月最多5GB存储，保留期7天
  * [loggly.com](https://www.loggly.com/) — 单个用户免费，每天最多200MB，保留期7天
  * [logz.io](https://logz.io/) — 免费每天最多1GB，保留期为1天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 管理引擎提供动力的日志管理服务。免费计划提供50GB存储，15天存储保留和7天搜索。
  * [papertrailapp.com](https://papertrailapp.com/) — 48小时搜索，7天归档，每月50MB
  * [sematext.com](https://sematext.com/logsene) — 免费每天最多500MB，保留期7天
  * [sumologic.com](https://www.sumologic.com/) — 免费每天最多500MB，保留期7天
  * [logflare.app](https://logflare.app/) — 对每个应用每月最多12,960,000条记录免费，保留期3天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理，每月免费1GB，保留期3天
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费1,000条用户活动日志记录，对最多5个项目，保留期1个月
  * [openobserve.ai](https://openobserve.ai/) - 每月免费200GB的数据摄入，15天保留期

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 无限项目，无限字符串和开源的合作者
  * [gitlocalize.com](https://gitlocalize.com) - 对私有和公共仓库都是免费且无限的
  * [Lecto](https://lecto.ai/) - 提供免费版（免费 30 个请求，每个请求最多 1000 个翻译字符）。已与 Loco Translate 的 WordPress 插件集成。
  * [lingohub.com](https://lingohub.com/) — 3 个用户免费，开源项目永久免费
  * [localazy.com](https://localazy.com) - 对 1000 个源语言字符串免费，不限语言、贡献者数量，提供初创和开源优惠
  * [Localeum](https://localeum.com) - 礼品包含 1000 个字符串，一名用户，不限语言，无限项目
  * [localizely.com](https://localizely.com/) — 免费提供给开源项目
  * [Loco](https://localise.biz/) — 免费提供高达 2000 个翻译，无限翻译者，每项目最多支持 10 种语言，1000 个可翻译资产每项目
  * [oneskyapp.com](https://www.oneskyapp.com/) — 首个免费版本最多支持 5 位用户，开源项目也是免费的
  * [POEditor](https://poeditor.com/) — 免费最多 1000 个字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费最多 100 个翻译键，无限字符串，无限语言，初创优惠
  * [Texterify](https://texterify.com/) - 免费提供给单个用户
  * [Tolgee](https://tolgee.io) - 免费 SaaS 提供有限翻译，自托管版本永远免费
  * [transifex.com](https://www.transifex.com/) — 免费提供给开源项目
  * [Translation.io](https://translation.io) - 免费提供给开源项目
  * [Translized](https://translized.com) - 免费最多 1000 个字符串

## 监控

  - [UptimeObserver.com](https://uptimeobserver.com) - 提供20个每5分钟一次的监控器和自定义状态页面，甚至适用于商业用途。享受无限的实时电子邮件和Telegram通知，无需信用卡即可开始使用。
- [Pingmeter.com](https://pingmeter.com/) - 提供5个每10分钟一次的监控器，可以监控SSH、HTTP、HTTPS和自定义TCP端口。
- [alerty.ai](https://www.alerty.ai) - 提供免费的应用性能管理（APM）和监控服务，适用于前端、后端、数据库等，还有免费的代理运行。
- [appdynamics.com](https://www.appdynamics.com/) - 免费版可提供24小时指标，但应用性能管理（APM）代理仅限于Java、.NET、PHP和Node.js中的一个。
- [appneta.com](https://www.appneta.com/) - 免费版保留1小时数据。
- [appspector.com](https://appspector.com/) - 提供远程iOS/Android/Flutter调试的控制中心。免费版适用于小流量使用，日志存储上限为64MB。
- [assertible.com](https://assertible.com) - 提供自动化API测试和监控，团队和个人版均有免费计划。
- [bleemeo.com](https://bleemeo.com) - 免费版包含3台服务器、5个监控器、无限用户、无限仪表板和报警规则。
- [checklyhq.com](https://checklyhq.com) - 开源的端到端/Synthetic监控和深入API监控，适用于开发者。免费版包含5个用户和50,000+检查运行次数。
- [cloudsploit.com](https://cloudsploit.com) - AWS安全和配置监控。免费版提供无限按需扫描，无限存储账户。订阅版提供自动化扫描和API访问等功能。
- [cronitor.io](https://cronitor.io/) - 对cron作业、网站、API等进行性能洞察和监控。免费版提供5个监控器。
- [datadoghq.com](https://www.datadoghq.com/) - 免费版适用于不超过5个节点的数据。
- [deadmanssnitch.com](https://deadmansnitch.com/) - 专门针对cron作业的监控，提供1个免费监控，推荐其他用户

  以下是若干网站监控服务及其特点，包括免费版的限制：

1. [statuscake.com](https://www.statuscake.com/) - 网站监控，免费版本有限制。
2. [statusgator.com](https://statusgator.com/) - 状态页面监控，3个监控免费。
3. [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - 服务器监控，包括运行时、DNS和域名监测。免费版可监测10台服务器、10个运行状态和10个域名。
4. [thousandeyes.com](https://www.thousandeyes.com/) - 网络和用户体验监控，免费包含3个位置和20个主要网络服务的数据流。
5. [uptimerobot.com](https://uptimerobot.com/) - 网站监控，50个监控免费。
6. [uptimetoolbox.com](https://uptimetoolbox.com/) - 五个网站的免费监测，每60秒更新一次，公开状态页面。
7. [zenduty.com](https://www.zenduty.com/) - 一站式网络运营、SRE和DevOps团队管理平台，5个用户免费。
8. [instatus.com](https://instatus.com) - 获得一个美观的页面，马上可用，无限子页面和团队无限免费。
9. [Squadcast.com](https://squadcast.com) - 专为SRE优化的事件管理软件。10个用户可免费享用无限时长的计划。
10. [RoboMiri.com](https://robomiri.com/) - 稳定性监控，提供多种检查（如cronjob、关键词、网站、端口、ping），免费版包括25个检查，每3分钟一次，支持电话、短信、邮件和Webhook通知。
11. [Better Stack](https://betterstack.com/better-uptime) - 一站式服务，包括运行时管理、状况报告、调度报警和状态页面。免费版包含10个监控，每3分钟检查一次。
12. [Pulsetic](https://pulsetic.com) - 包括10个监控、6个月历史监控、无限状态页面和自定义域名。无限时间免费使用，无限电子邮件通知，无需信用卡。
13. [Wachete](https://www.w

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供截图和点击跟踪的JavaScript错误跟踪。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用后，每月免费提供2,000个错误。
  * [elmah.io](https://elmah.io/) — 为Web开发者提供错误记录和运行状况监控。开源项目提供免费的 Small Business 订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。小团队免费，可支持每年100万用户会话。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3k事件免费，1个用户，开源并且易于自托管以无限使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误跟踪器。兼容开源Sentry SDK。每月有1,000个事件免费，或可以自托管无限制。
  * [honeybadger.io](https://www.honeybadger.io) - 事故、运行状况与定时任务监控。免费版可为小团队和开源项目提供（每月12,000个错误）。
  * [memfault.com](https://memfault.com) — 云设备观察和调试平台。免费提供对Nordic、NXP和Laird设备的支持。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每天可处理5,000个错误，不限用户，30天保留。
  * [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常，免费提供5k/月的错误报告，自托管则无限制。
  * [Axiom](https://axiom.co/) — 存储多达0.5TB的日志，保留30天。包含Vercel等平台集成，支持邮件/Discord通知和高级数据查询。
  * [Semaphr](https://semaphr.com) — 免费提供完整的移动应用 kill switch（关闭服务）。
  * [Jam](https://jam.dev) - 点击即可提交开发者友好的错误报告。无限使用且免费计划。
  * [Whitespace](https://whitespace.dev) —

## Search

  * [algolia.com](https://www.algolia.com/) — 提供 typo-tolerance、相关性和 UI 库的托管搜索解决方案，轻松创建搜索体验。免费的 "Build" 计划包括 1M 个文档和每月 10K 次搜索。还提供 [Algolia 开发者文档搜索](https://docsearch.algolia.com/) 服务，完全免费。
  * [bonsai.io](https://bonsai.io/) — 免费 1 GB 内存和 1 GB 存储空间
  * [CommandBar](https://www.commandbar.com/) - 提供服务的统一搜索栏，一种基于网络的 UI 组件/插件，让用户能在您产品中搜索内容、导航、特性等，提高可发现性。免费套餐适用于每月活跃用户达 1,000 人，不限制命令数。
  * [Magny](https://magny.io) - 是一个基于云的服务，帮助您实现命令面板（如在应用内搜索），通过优化用户体验和效率，显著减少用户在应用中查找内容所需时间。
  * [Orama Cloud](https://orama.com/pricing) — 免费包含 3 个索引、每个索引 100K 个文档、不限的全文搜索/向量搜索/混合搜索，同时提供 60 天的数据分析。
  * [searchly.com](http://www.searchly.com/) — 免费提供 2 个索引和 20 MB 存储。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * **[FreeCodeCamp](https://www.freecodecamp.org/) - **提供免费的课程和证书，包含数据分析、信息安全、Web开发等领域。
  * **The Odin Project](https://www.theodinproject.com/) - **免费的开源平台，以JavaScript和Ruby为主导，专注于Web开发学习。
  * **Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - **提供大量经验丰富专业人士的简历模板，可免费克隆、编辑，支持 ATS（Applicant Tracking System，招聘管理系统）优化。
  * **DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - **由产业领袖提供的免费短课程，快速实践生成式人工智能工具和技术，每小时完成学习。
  * **LabEx](https://labex.io) - **通过互动实验室和实践项目，提升Linux、DevOps、网络安全、编程、数据分析等技能。
  * **Roadmap.sh** - **免费的学习路线图，涵盖从区块链到用户体验设计等各种开发领域知识。
  * **Cisco Networking Academy, Skills for All** - **提供免费的证书类课程，涵盖网络安全、网络和Python等领域知识。**
  * **MIT OpenCourseWare** - **麻省理工学院的在线开放课程资源，免费分享全球学者教育者的知识，其YouTube频道可在[@mitocw](https://www.youtube.com/@mitocw/featured)找到。**
  * **W3Schools** - **免费教程涵盖HTML、CSS、JavaScript等Web开发技术。**
  * **Khan Academy**
      * **提供免费的在线指南，包括基础和高级HTML/CSS、JavaScript和SQL的学习。**

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 提供免费、临时的测试邮箱。
  * [AhaSend](https://ahasend.com) - 商业交易邮件服务，免费版每月1000封邮件限制，无限域名、团队成员和网络钩子，免费方案提供无限制的邮件路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名转发邮箱，可免费创建无限制的邮箱别名。
  * [Antideo](https://www.antideo.com) - 免费版提供每小时10个API请求，用于邮箱验证、IP和电话号码验证，无需信用卡。
  * [Brevo](https://www.brevo.com/) - 月免费额度9,000封邮件、日限额300封。
  * [OneSignal](https://onesignal.com/) - 月免费10,000封邮件，无需信用卡。
  * [Bump](https://bump.email/) - 提供10个免费的Bump邮箱和一个自定义域名。
  * [Burnermail](https://burnermail.io/) - 免费5个临时邮箱地址，1个邮箱，7天邮件记录存储。
  * [Buttondown](https://buttondown.email/) - 新闻通讯服务，免费版最多100个订阅者。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST处理收件，包含每月10,000封免费外出交易邮件服务。
  * [Contact.do](https://contact.do/) - 用链接形式的联系表单（像bitly用于联系表单）。
  * [debugmail.io](https://debugmail.io/) - 专为开发者设计的易于使用的测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 预备免费邮箱地址，最多2个，带100MB存储空间，支持IMAP、POP3、SMTP，以及SPF和DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) - 月免费发送9,000封邮件，每天300封。
  * [EmailOctopus](https://emailoctopus.com) - 免费版提供2,500个订阅者和每月1

  * [外卖](https://takeout.bysourfruit.com) - 持续更新的电子邮件服务，让发送邮件变得简单。每月免费500封交易邮件。
  * [temp-mail.io](https://temp-mail.io) — 提供一次性免费临时电子邮件服务，一次支持多个邮箱，以及转发功能
  * [tinyletter.com](https://tinyletter.com/) — 免费版提供每月5000个订阅者
  * [触达铅通](https://touchlead.app) — 多功能营销自动化工具，包含线索管理、表单构建和自动化。限定了免费的线索和自动化数量
  * [垃圾邮件盒](https://www.trashmail.com) — 提供免费的临时邮箱，支持转发和自动地址失效
  * [Tuta](https://tuta.com/) — 提供免费安全电子邮件账户服务，内置端到端加密，无广告，无追踪。免费提供1GB存储和一个日历（Tuta还有一个[付费计划](https://tuta.com/pricing)）。Tuta也部分是[开源](https://github.com/tutao/tutanota)，可以自行托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证API，提供邮箱确认和检测一次性邮箱服务，每天免费25个邮箱验证。
  * [verimail.io](https://verimail.io/) — 批量和API电子邮件验证服务。每月免费100个验证
  * [Zoho](https://www.zoho.com) — 起初作为电子邮件提供者，但现在提供一整套服务，其中一些有免费计划。提供免费服务的服务列表：
     - [电子邮件](https://zoho.com/mail) 免费版适用于5个用户。每个用户5GB存储，单个域名内25MB附件大小限制。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist的免费版包括一个并发远程支持执照和针对个人和专业人士的无限时长的5台无人值守计算机许可。
     - [Sprints](https://zoho.com/sprints) 免费版适用于5个用户、5个项目和500MB存储空间。
     - [文档](https://zoho.com/docs) — 免费版适用于5个用户，

## 特性和开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat是一个以开发者为中心的特性开关服务，提供无限制的团队规模、优秀的支持和合理的价格。免费计划包含10个开关、两个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 信心十足地发布功能；管理跨Web、移动和服务器端应用程序的特性开关。使用我们的托管API，部署到您的私有云，或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的特性开关和A/B测试服务，内置贝叶斯统计分析引擎。免费提供给最多3个用户，无限的开关和实验。
  * [Hypertune](https://www.hypertune.com) - 安全的特性开关、A/B测试、分析和应用配置，具有Git风格的版本控制以及本地内存中的同步评估。免费版最多支持5个团队成员，且不限开关和A/B测试的数量。
  * [Molasses](https://www.molasses.app) - 强大的特性开关和A/B测试。免费版支持3个环境，每个环境可配置5个特性和性测试。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域特性切换管理平台。免费计划包含10个开关、两个环境和无限请求。SDK、分析仪表板、发布日历、Slack通知等功能在无限免费计划中均包含。
  * [Statsig](https://www.statsig.com) - 功能强大，用于特性管理、A/B测试、分析等的平台。其慷慨的免费计划提供无限席位、开关、实验和动态配置，每月支持1百万次事件。
  * [Abby](https://www.tryabby.com) - 开源的特性和A/B测试，配置为代码和完整的TypeScript SDK。与Next.js和React等框架的强集成，免费提供大量选项，价格亲民，扩展成本较低。

## 字体

  * [dafont](https://www.dafont.com/) - 这个网站上的字体是作者的财产，可能是自由软件、共享软件、演示版本或公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器、字体渲染器和字体提交器。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供免费字体供商业用途，精选了一系列易于使用的字体。
  * [Google Fonts](https://fonts.google.com/) - 许多字体可以通过下载或链接到谷歌的CDN快速轻松地安装到网站。
  * [FontGet](https://www.fontget.com/) - 提供各种字体下载，整洁地标记了类别。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务，包含专业级别字体的不断增长的库，个人和商业使用均免费。
  * [Befonts](https://befonts.com/) - 提供独家字体供个人或商业使用。
  * [Font of web](https://fontofweb.com/) - 使用这个工具可以识别网站上使用的字体及其用法。
  * [Bunny](https://fonts.bunny.net) - 专注于隐私的Google字体。
  * [FontsKey](https://www.fontskey.com/) - 提供个人使用的免费和商业收费字体，可以通过文本快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) - 是一项用于使用CSS向网站分发字体家族的免费开源服务。
  * [Fontsensei](https://fontsensei.com/) - 提供用户标记的开源Google字体，支持中日韩(CJK)字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大的开发者友好的表单构建器。创建注册和登录、用户入门、支付流程、复杂财务应用等。免费计划每月允许250次提交和5个活跃表单。
  * [Form-Data](https://form-data.com) - 无需代码的表单后端。包含垃圾邮件过滤器、电子邮件通知、自动响应、Webhook、Zapier、重定向、AJAX或POST等。免费版提供无限表格、每月20次提交以及加装Form-Data徽章可额外获得2000次提交。
  * [FabForm](https://fabform.io/) - 为聪明开发者的表单后端平台。免费计划每月允许250次表单提交。现代化用户界面友好。与Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) - HTML表单提交的端点。提供通知、垃圾邮件阻止器和符合GDPR的数据处理。基本使用免费。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划每月允许100次提交。
  * [formingo.co](https://www.formingo.co/) - 静态网站的简单HTML表单。无需注册账户即可开始使用。免费计划每月允许500次提交和自定义回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表格，每月50次提交，包含垃圾邮件保护、电子邮件通知和拖放式设计器，能导出HTML。还提供自定义字段规则、团队、谷歌表格、Slack、ActiveCampaign和Zapier集成等额外功能。
  * [formlets.com](https://formlets.com/) - 在线表单，每月提供无限单页表单，每月100次提交，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子邮件的服务，免费版允许无限表单，每月250次提交，并由客户服务团队支持。
  * [Formspree.io](https://formspree.io/) - 使用HTTP POST请求发送电子邮件。免费版限制每月每个表单提交50次。
  * [Formsubmit.co](https://formsubmit.co/) — 对于HTML表单

## 生成式AI

  * [Keywords AI](https://keywordsai.co) - 最好的LLM监控平台。只需两行代码即可调用200多个LLM。每月免费提供10,000次请求，平台功能免费使用！
  * [Portkey](https://portkey.ai/) - 为Gen AI应用提供控制面板，包括观测套件和AI网关。每月免费发送和记录10,000次请求。
  * [Braintrust](https://www.braintrustdata.com/) - 提供评估、提示玩场和Gen AI数据管理。免费计划每周最多提供1,000行私有评估行。
  * [Findr](https://www.usefindr.com/) - 统一搜索工具，可以在一次搜索中查询所有应用。提供搜索助手，使用您的信息回答问题。免费计划提供无限统一搜索和每日5次共乘查询。
  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。整个平台免费，前提是你提供自己的API密钥。
  * [Clair](https://askclair.ai/) - 临床AI参考。学生可免费访问专业工具集，包括开放式搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和 stewardship。此外，还提供专业版免费试用。
  * [Langtrace](https://langtrace.ai) - 使开发者能够跟踪、评估、管理和调试与LLM应用程序性能相关的提示和数据集问题。它支持任何LLM的开放标准观测器日志，并与任何观测器客户端兼容。免费计划每月提供50,000笔追踪。
  * [Ultra AI](https://ultraai.app) - AI产品命令中心。功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型降级和用户请求限制。免费版每月10,000+请求，但不包括缓存功能。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 评估、测试并在开发和生产周期中部署LLM应用程序。
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。免费版包含每月50,000次观察和所有平台功能。[开源](https://github.com

## 内容分发网络和保护

  * [**bootstrapcdn.com**](https://www.bootstrapcdn.com/) - 针对bootstrap, bootswatch和fontawesome.io的CDN
  * [cdnjs.com](https://cdnjs.com/) - 简单、快速、可靠的。cdnjs 是一款由Cloudflare提供的免费且开源的CDN服务，已被超过11%的网站信赖。
  * [**developers.google.com**](https://developers.google.com/speed/libraries/) - Google托管库是一个内容分发网络，用于最受欢迎的开源JavaScript库
  * [Stellate](https://stellate.co/) - Stellate 是一个快速、可靠的为GraphQL API提供的CDN，前两个服务免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) - 一款免费的、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) - 谷歌AJAX CDN 提供流行第三方JavaScript库（如jQuery），可轻松将其添加到您的Web应用。
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 免费DDoS防护和SSL证书
  * [Skypack](https://www.skypack.dev/) - 完全基于ES模块的JavaScript CDN，前一域名每月可享100万次免费请求。
  * [raw.githack.com](https://raw.githack.com/) - 云flare托管的文件托管服务，替代了**rawgit.com**
  * [section.io](https://www.section.io/) - 简单的Varnish缓存搭建和管理解决方案。据说对一个站点免费。
  * [statically.io](https://statically.io/) - 用于Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关的资源和图片的CDN。
  * [toranproxy.com](https://toranproxy.com/) - 对于Packagist和GitHub的代理。免费供个人使用，一开发者版，不提供技术支持。
  * [UNPKG](https://unpkg.com/) - npm上所有内容的CDN。
  * [weserv](https://images.weserv.nl/) - 集成图片缓存和缩放服务。实时处理并缓存全球图片。
  * [Namecheap Supersonic](

## 平台即服务

  * [anvil.works](https://anvil.works/) - 使用纯Python进行Web应用开发。免费套餐允许无限个应用，但有30秒的超时限制。
  * [appwrite](https://appwrite.io) - 免费套餐包含无限制的项目，支持WebSocket和身份验证服务。每个项目有1个数据库、3个存储桶、5个函数。
  * [configure.it](https://www.configure.it/) - 移动应用开发平台，适用于带有限制的两个项目，但不设资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 开源的跨平台移动应用开发工具，允许Java或Kotlin开发者无限数量商业项目的免费使用。
  * [deco.cx](https://www.deco.cx/en/dev) - 利用TypeScript编写的边缘原生前端平台，提供了视觉CMS，A/B测试和实时分析等功能。适用于内容丰富和企业级电商网站。免费套餐限每月5000页视图或开源/个人项目使用。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，用于在全球范围边缘运行JavaScript、TypeScript和WebAssembly。免费版包含每天10万次请求和每月100GB数据传输。
  * [domcloud.co](https://domcloud.co) - 提供CI/CD服务的Linux托管服务，支持GitHub、SSH和MariaDB/Postgres数据库。免费版本限1GB存储和1GB网络每月，只限免费域名。
  * [encore.dev](https://encore.dev/) — 基于静态分析的后端框架，提供了自动化的基础设施、无模板代码等。提供爱好项目免费云托管服务。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在用户的AWS账户上部署Web服务、数据库等，提供类似Git推送的工作流。免费版允许个人GitHub仓库的1名开发者。AWS的费用由AWS计费，但使用免费版等服务。
  * [gigalixir.com](https://gigalixir.com/) - 提供一个永不休眠的免费实例和Phoenix/Elixir应用程序的免费版PostgreSQL数据库，限2个连接、10,000行和无备份功能。
  * [Glitch](https://glitch.com/) - 提供公共免费托管

## 平台即服务

  * [Activepieces](https://www.activepieces.com) - 创建自动化流程，将多个应用连接到您的应用程序后端。例如，当应用程序发生事件时发送Slack消息或在Google Sheet中添加一行。每月最多免费5,000个任务。
  * [back4app.com](https://www.back4app.com) - Back4App 是一个易于使用、灵活且可扩展的基于 Parse 平台的后端。
  * [backendless.com](https://backendless.com/) - 用于移动和Web的 Baas（Backend as a Service），免费提供1 GB文件存储，每月50,000个推送通知，以及1,000个数据对象在表格中。
  * [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在我们的函数运行时和托管存储上为您的人工智能API提供一键引导，无需在线编辑器或使用您最喜欢的工具即可本地主机构建和托管。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC Developer Program 提供了构建和部署企业级数字创新的文档和资源。拥有全面的个人沙箱，包括平台、SDK和可供构建和定制应用的组件库。
  * [connectycube.com](https://connectycube.com) - 无限制的聊天消息、点对点语音和视频通话、文件附件和推送通知。最多1,000个用户的免费版本。
  * [convex.dev](https://convex.dev/) - 反应式后端作为服务（BaaS），托管您的数据（包含关系和可序列化ACID事务的文档）、Serverless函数和WebSocket，用于向各种客户端推送更新。免费计划针对小型项目提供服务，最多支持1M条记录和5M每月function调用。
  * [darklang.com](https://darklang.com/) - 结合了编辑器和基础设施的托管语言。在发布期间访问，计划在发布后提供慷慨的免费层次。
  * [Firebase](https://firebase.com) - Firebase 帮助您构建并运行成功应用。Spark 计划的免费版本提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab 等功能。A/B 测试、分析、应用分发、应用索引、云

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个专为构建具有自定义移动和网页应用的商业流程应用而设计的低代码平台。提供拖放界面、离线支持、实时位置跟踪和与第三方服务的集成等功能。
  * [Basedash](https://www.basedash.com) — 用于构建内部管理面板和仪表板的低代码平台，支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源的低代码平台，几分钟内即可创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
  * [appsmith](https://www.appsmith.com/) — 用于构建行政面板、内部工具和仪表板的项目。它与15+数据库和任何API集成。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。它可以连接数据库、云存储、GraphQL、API端点、Airtable等，通过拖放应用构建器进行开发。
  * [ReTool](https://retool.com/) — 用于内部应用构建的低代码平台，具有高度可定制性。如果你能用JavaScript和API编写，那么就可以在ReTool中实现。免费版最多支持每月5个用户，不限应用和API连接。
  * [DronaHQ](https://www.dronahq.com/) — 辅助工程团队和产品经理快速构建内部工具、定制用户旅程、数字化体验、自动化和定制admin面板的低代码平台。
  * [ILLA Cloud](https://www.illacloud.com/) — 一个强大的开源低代码平台，为开发人员构建内部工具提供支持。利用ILLA的组件和操作库，开发者可以节省大量构建工具的时间。免费版最多支持5个团队成员。
  * [outsystems.com](https://www.outsystems.com/) — 提供企业级Web开发平台即服务，无论在本地还是云端。免费的“个人环境”提供无限代码和最多1 GB数据库支持。
  * [UI Bakery](https://uibakery.io) — 一个低代码平台，用于更快地创建定制网页应用。支持通过拖放构建UI，高度定制，通过JavaScript、Python和SQL提供支持。提供云和自托管解决方案，免费版最多支持5个用户。


## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 包含MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器、FTP访问、WebDAV和SSH支持的100 MB免费网络托管。还包括邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名、PHP、MySQL、应用安装器、电子邮件发送、无广告。
  * [Bohr](https://bohr.io) — 用于非商业项目的免费版，开发者优先部署和开发平台，通过减少基础设施烦恼并加快部署速度。
  * [Bubble](https://bubble.io/) — 无需编程构建Web和移动应用的视觉编程工具，Bubble品牌版免费。
  * [dAppling Network](https://www.dappling.network/) — 基于Web3的去中心化网络托管平台，专注于提高网站可用性和安全性，增加用户访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) — 在App平台入门级免费构建并部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive上传到网络。仅适用于静态站点，永久免费。每个Google/微软账户只能有一个网站。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 用于本地站点托管和实时共享的开发者桌面应用，支持使用其美观的用户界面、API和/或命令行界面随意操作。
  * [Fern](https://buildwithfern.com) — 使用Fern的免费计划在 Fern 上构建和托管基于Markdown的文档站点，可自动从API定义文件生成站点的API参考。托管地址为 _yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 全方位的免费托管服务，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP E-Mail，免费二级域名、免费域名托管、DNS编辑器、网站统计，以及其他免费主机不提供的众多功能。
  * [Freehostia](https://www.freehostia.com) — 提供包括首屈一指的控制面板和50

## 域名服务

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析器，速度快且安全（加密DNS查询）用以绕过网络提供商的DNS封锁、防止DNS查询监视以及[屏蔽成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。此外还能通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：它仅是个DNS解析器，而非DNS主机。

  * [1984.is](https://www.1984.is/product/freedns/) — 提供API和其他免费DNS功能的免费DNS服务。
  * [cloudns.net](https://www.cloudns.net/) - 免费DNS托管，可托管1个域名，最多50个记录。
  * [deSEC](https://desec.io) - 以安全为设计目标的免费DNS托管服务。基于开源软件，由SSE支持。
  * [dns.he.net](https://dns.he.net/) - 包含动态DNS支持的免费DNS托管服务。
  * [Zonomi](https://zonomi.com/) - 包含即时DNS传播的免费DNS托管服务。免费计划：1个DNS区（域名），最多10个DNS记录。
  * [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
  * [duckdns.org](https://www.duckdns.org/) — 针对初学者设计的免费动态DNS，免费层级最多支持5个域名。附带各种配置指南。
  * [Dynv6.com](https://dynv6.com/) - 提供API支持的免费动态DNS服务，支持多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管。另提供基于公共用户贡献域名的一系列子域名。注册后通过“Subdomains”菜单获取免费子域名。
  * [luadns.com](https://www.luadns.com/) — 免费DNS托管，可免费托管3个域名，限制在合理

## 域名注册

  * [eu.org](https://nic.eu.org) - 提供免费的 eu.org 域名。申请通常在14天内批准。
  * [pp.ua](https://nic.ua/) - 提供免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 提供免费的 us.kg 子域名。

**[⬆️ 返回目录顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) - 与AWS S3兼容，支持APIs、界面操作、命令行界面（CLI）和其它上传方法，能够安全、方便且高效地将IPFS和Arweave网络中的文件上传和存储。注册用户可免费获得6 GB的IPFS存储和300 MB的Arweave存储，同时，Arweave文件上传小于150 KB的免费。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2云存储。无限时长的免费10 GB（类似Amazon S3的对象存储）。
  * [filebase.com](https://filebase.com/) - 由区块链支持的S3兼容对象存储。无限期时长的免费存储空间5 GB。
  * [Tebi](https://tebi.io/) - S3兼容的对象存储。免费提供25 GB存储和250 GB的出口流量。
  * [iDrive e2](https://www.idrive.com/e2/) - S3兼容对象存储，提供每月10 GB免费存储和10 GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容的对象存储，免费提供15 GB存储空间和每月15 GB下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - 提供开源数据平台上的免费PostgreSQL、MySQL和Redis服务。单节点，1个CPU，1GB RAM，以及PostgreSQL和MySQL的5GB存储。轻松升级到更广泛的计划或跨云服务。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是无限制基础的关联数据库，1,200条记录/基础，每月1,000个API请求。
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra作为服务，[免费试用版提供80GB](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 容易使用的JavaScript无服务器API/后端服务和NoSQL数据库，功能包括函数、MongoDB风格查询、键值查询、任务系统、实时消息、工人队列、强大的命令行接口和基于Web的数据管理器。免费版提供5GB存储和每分钟60个API请求。包含2名开发者，无需信用卡。
  * [CrateDB](https://crate.io/) — 实时分析的分布式开源SQL数据库。[免费版CRFREE](https://crate.io/lp-crfree)：单节点，2个CPU，2GiB内存，8GiB存储。每个组织一个集群，无需付款方法。
  * [FaunaDB](https://fauna.com/) — 具有原生GraphQL、多模型访问和每日免费版本（最高100MB）的无服务器云端数据库。
  * [Upstash](https://upstash.com/) — 免费提供无服务器Redis，提供每日免费额度，最大数据库大小256MB，同时支持20个并发连接。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费版提供512MB存储空间。
  * [redsmin.com](https://www.redsmin.com/) — 提供Redis监控和管理的在线实时服务，监控1个Redis实例是免费的。
  * [redislabs](https://redislabs.com/try-free/) — 免费30MB Redis实例。
  * [MemCachier](https://www.memcachier.com/) —

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 使用一键命令为本地localhost提供公共URL服务，无需下载。支持HTTPS、TCP、TLS隧道。免费版限制60分钟的隧道生命周期。
  * [conveyor.cloud](https://conveyor.cloud/) — 为Visual Studio开发的扩展，可将IIS Express服务暴露出局域网或通过隧道连接到公共URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi 是一款基于云的虚拟私人网络服务，帮助团队远程拓展局域网网络，免费版支持无限网络，但最多支持5人。
  * [Mirna Sockets](https://mirna.cloud/) — 免费的Socket-as-a-Service平台，部署WebSocket服务器代码时提供一个wss:// URL，并提供性能监控功能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公共URL访问。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务器暴露出公共URL。提供免费的公共版和开源[代码](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 与localtunnel类似，暴露出本地服务器的公共URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo.net](https://serveo.net/) — 免安装、免注册将本地服务器暴露到互联网。提供免费的子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过虚拟局域网(VPN)连接多台计算机，不限制连接数（替代Hamachi）。
  * [segment.com](https://segment.com/) — 事件传递和路由的集线器，每月免费提供100,000个事件。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](

## 问题跟踪与项目管理

  以下是列出的一些项目管理工具，以及它们各自的主要特点：

1. [acunote.com](https://www.acunote.com/) — 免费的项目经理和敏捷软件，适用于最多5个团队成员

2. [asana.com](https://asana.com/) — 免费版适用于私人项目并允许与协作

3. [Backlog](https://backlog.com) — 一个集成了所有团队需要的发布优秀项目的平台。免费计划提供1个项目，10个用户和100MB存储空间。

4. [Basecamp](https://basecamp.com/personal) — 进行待办事项列表管理，里程碑控制，论坛式即时消息，文件分享以及时间跟踪。免费版提供3个项目，20个用户，1GB存储空间。

5. [bitrix24.com](https://www.bitrix24.com/) — 内部联网和项目管理工具，免费版有无限制用户和5GB存储空间。

6. [cacoo.com](https://cacoo.com/) — 在线实时图表工具，支持流程图、UML和网络。免费版最多支持15个用户和25个表格。

7. [Chpokify](https://chpokify.com/) — 团队基于的规划扑克，节省冲刺估算时间。免费提供给5个用户，免费集成了Jira，以及无限视频通话等。

8. [clickup.com](https://clickup.com/) — 项目管理工具。有免费版，提供云存储的付费版本。适用于移动应用和Git集成。

9. [Clockify](https://clockify.me) — 时间追踪和工时表应用，允许跨项目追踪工作时间。无限用户，永远免费。

10. [Cloudcraft](https://cloudcraft.co/) — 设计专业架构图，几分钟内完成。免费版适合单用户的无限私人图表。

11. [Codegiant](https://codegiant.io) — 项目管理与源代码托管及持续集成/持续部署。免费版提供无限仓库、项目和文档，以及最多5个团队成员。

12. [Confluence](https://www.atlassian.com/software/confluence) — Atlassian的内容协作工具，帮助团队高效共享知识。免费版适用于10个用户。

13. [contriber.com](https://www.contriber.com/) — 可定制的项目

  * [快捷通道](https://shortcut.com/) - 项目管理平台。最多10个用户终身免费。
  * [塔杜姆](https://tadum.app) - 为定期会议设计的会议议程和会议记录应用程序，团队最多10人免费。
  * [塔加.io](https://taiga.io/) - 为初创企业和服务型开发者设计的项目管理平台，开源免费。
  * [塔拉AI](https://tara.ai/) - 简单的冲刺管理服务。免费版无限任务、冲刺和工作区，不限用户。
  * [目标流程](https://www.targetprocess.com/) - 从看板和敏捷到几乎任何操作流程的可视化项目管理。无限用户免费，但有数据实体数量限制（[更多详情](https://www.targetprocess.com/pricing/)）。
  * [Taskade](https://www.taskade.com/) - 实时协作任务列表和团队大纲。免费版包含一个工作区，无限任务和项目；1GB文件存储；1周项目历史；视频会议最多5名参与者。
  * [taskulu.com](https://taskulu.com/) - 基于角色的项目管理。最多5个用户免费。支持GitHub/Trello/Dropbox/Google Drive 集成。
  * [Teaminal](https://www.teaminal.com) - 远程团队的周报会议、回顾会和冲刺规划工具。最多15个用户免费。
  * [teamwork.com](https://teamwork.com/) - 项目管理和团队聊天。五个用户和两个项目的免费版。有付费计划。
  * [teleretro.com](https://www.teleretro.com/) - 简单有趣的回顾工具，包括破冰活动、表情和动画。免费版包含三个回顾会，无限会员。
  * [Testlio](https://testlio.com/) - 问题跟踪、测试管理和预发布测试平台。私人使用免费。
  * [Terrastruct](https://terrastruct.com/) - 专为软件架构设计的在线绘图工具。免费版最多4层图。
  * [Todoist](https://todoist.com/) - 协同和个人任务管理。免费版：五个活动项目、项目内五个用户、上传文件5MB、三个过滤器和一周的活动记录。
  * [Trello](https://trello.com/) -

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件共享平台，提供无限速度、带宽和文件数量等。主要针对与Android应用开发相关的文件，如APK构建、自定义ROM和修改等，但似乎也接受其他文件。
  * [borgbase.com](https://www.borgbase.com/) — Borg备份的简单且安全的离线备份托管服务。免费提供10 GB备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务，提供10 GB免费存储。
  * [sync.com](https://www.sync.com/) - 终端到终端的云存储服务，免费提供5 GB存储空间。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务，免费提供最多10 GB存储。
  * [sirv.com](https://sirv.com/) — 提供智能图像CDN，可实时优化和调整大小。免费版包含500 MB存储空间和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全功能的图像优化和CDN服务，全球有1500+节点。提供图像缩放、压缩和水印等多种功能。免费计划每月提供25GB CDN流量、25GB缓存存储和无限变换操作。
  * [cloudinary.com](https://cloudinary.com/) — 提供图片上传、处理、存储和分发服务，支持Ruby、Python、Java、PHP、Objective-C等多种编程语言。免费版包含每月25积分。1积分等于1000次图像转换、1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) — 提供在网页中嵌入媒体的API，支持响应式图像缩放和网页内容提取。对于每月最多5000个URL的免费服务，限速15次请求/秒。
  * [filestack.com](https://www.filestack.com/) — 文件选择、处理和发送平台，免费提供250个文件、500次转换和3 GB带宽。
  * [file.io](https://www.file.io) - 提供2 GB文件存储，上传的文件在下载一次后自动删除。通过REST API操作存储，速率

  * [DocsParse](https://docsparse.com/) – 利用GPT的强大功能，处理PDF、图像并将它们转化为结构化的JSON、CSV、EXCEL格式数据。每月可免费获得30个信用积分。


**[返回顶部](#目录)**

## 设计与用户体验

  * [所有免费素材](https://allthefreestock.com) - 提供精心挑选的免费图片、音频和视频资源列表。
  * [Float UI](https://floatui.com/) - 是一款免费的网络开发工具，帮助快速创建现代、响应式网站，设计简洁，即使对非设计师也友好。
  * [Ant Design Landing Page](https://landing.ant.design/) - 提供由Ant Motion动画组件构建的模板。提供丰富的主页模板，可以直接下载代码包，快速使用。还可用编辑器快速创建专属页面。
  * [Backlight](https://backlight.dev/) - 为开发者和设计师团队设计的全功能代码平台，可用于构建、文档化、发布、扩展设计系统。免费版允许最多3个编辑者在一个设计系统上工作，并且有无限数量的查看者。
  * [BoxySVG](https://boxy-svg.com/app) - 是一款免费的可安装的Web应用，用于绘制SVG图形并导出为SVG、PNG、JPEG等格式。
  * [Carousel Hero](https://carouselhero.com/) - 是一个免费的在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 提供一致性开源图标，如React、Vue和Svelte的SVG。
  * [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，还提供付费集成。
  * [cloudconvert.com](https://cloudconvert.com/) - 能够将几乎任何内容转换成任何格式，支持包括视频和GIF在内的共208种格式。
  * [CodeMyUI](https://codemyui.com) - 收录精心挑选的网页设计和UI灵感，并附带代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建调色板或从顶级调色板中获取灵感。
  * [coolors](https://coolors.co/) - 色彩调色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 提供精心挑选的品牌适合的调色板。
  * [css-gradient.com](https://www.css-gradient.com/) - 可以快速生成跨浏览器自定义CSS渐变的免费工具，支持RGB和HEX格式。
  * [easy

  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划最多允许进行五个步骤的步行式引导。
  * [Webflow](https://webflow.com) - 基于所见即所得的网站构建器，带有动画功能和网站托管。两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 用于基于Tailwind CSS的设计的所见即所得网站构建器。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 合作流程图、线框图、便利贴和思维导图。创建多达四个免费面板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发人员协作平台。展示设计、资产和风格指南。一个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人且独特的图形和图像。
  * [Responsively App](https://responsively.app) - 一个免费的开发工具，用于更快更精确地开发响应式web应用。
  * [SceneLab](https://scenelab.io) - 在线mockup图形编辑器，拥有不断扩大的免费设计模板库。
  * [xLayers](https://xlayers.dev) - 预览并转换Sketch设计文件为Angular、React、Vue、LitElement、Stencil、Xamarin等格式（开源：[https://github.com/xlayers/xlayers](https://github.com/xlayers/xlayers)）。
  * [Grapedrop](https://grapedrop.com/) — 响应式、强大、SEO优化的网页构建器，基于GrapesJS框架。免费计划包含五个页面，无限定制域名，所有功能，使用简单。
  * [Mastershot](https://mastershot.app) - 完全免费的基于浏览器的视频编辑器。无水印，最高支持1080p导出选项。
  * [Unicorn Platform](https://unicornplatform.com/) - 简单的落地页构建器，包含主机服务。一个网站免费。
  * [SVGmix.com](https://www.svgmix.com/) - 一个30万+的免费SVG图标、集合和品牌logo的仓库。它有一个内置的浏览器编辑程序，便于快速文件编辑。
  * [svgrepo

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - 展示所有最佳设计网站（由设计师投票）。
  * [Behance](https://www.behance.net/) - 设计展示平台，设计师可以展示他们的作品。按类别（如UI/UX项目）进行筛选。
  * [dribbble](https://dribbble.com/) - 设计灵感社区，通常展示不来自实际应用的独特设计。
  * [Landings](https://landings.dev/) - 提供基于您偏好的优质着陆页设计。寻找灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - 特点为6025个着陆页范例、免费设计书籍、网络上免费UI组件的展示库。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - 定期更新的着陆页截屏，包含桌面、平板和移动设备版本。
  * [Mobbin](https://mobbin.design/) - 为您提供5万以上的完整搜索移动应用截屏，节约UI/UX研究时间。
  * [Uiland Design](https://uiland.design/) - 探索非洲和世界各地领先的公司移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - 撰集了最出色的UI/UX界面设计范例，包括iOS和Android，适合设计师、开发者和产品制作者参考。
  * [Page Flows](https://pageflows.com/) - 提供多款移动和网络应用的完整流程视频及截图，搜索和索引功能出色。
  * [Screenlane](https://screenlane.com/) - 启发灵感并跟踪最新网页和移动应用UI设计趋势，可按模式和应用类型筛选。
  * [scrnshts](https://scrnshts.club/) - 一个精心挑选的应用商城设计截图精选集。
  * [UI Garage](https://uigarage.net/) - 每日提供设计师和开发者UI灵感和模式，帮助找到项目的灵感、工具及最佳资源。
  * [Refero](https://refero.design/) - 收录并可搜索的优秀网络应用设计参考库。**

**[⬆️ 返回顶部](#目录)**

## 地图上的数据可视化

  * [IP 地理位置](https://ipgeolocation.io/) - 提供免费的开发者计划，每月30,000次请求。
  * [carto.com](https://carto.com/) - 使用您的和公开数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) - 易用的地图工具。每月50,000次免费查询（地图瓷砖、db2vector、高程）。
  * [developers.arcgis.com](https://developers.arcgis.com) - 提供地图、地理数据存储、分析、地理编码、路由等各项API和SDK，覆盖web、桌面和移动平台。每月免费基础地图瓷砖200万次、非存储式地理编码20,000次、简单的路线20,000次、5,000次行驶时间计算和每月5GB的免费地图瓷砖+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、场所搜索和来自Places API和Pilgrim SDK的上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 提供矢量和栅格地图贴图、地理编码、场所、路由、轮廓线API。每日免费请求3,000次。
  * [geocod.io](https://www.geocod.io/) - API或CSV上传的地理编码。每日免费查询2,500次。
  * [geocodify.com](https://geocodify.com/) - API或CSV上传的地理编码和地理解析。每月10,000次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用的REST/JSON/JSONP IP地理位置查找API。
  * [giscloud.com](https://www.giscloud.com/) - 在线可视化、分析和分享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) - 提供免费开发者套餐，包括路由、路径优化、距离矩阵、地理编码和地图匹配等功能。
  * [here](https://developer.here.com/) - 提供地图和位置感知应用的API和SDK。免费额度每月250,000次交易。
  * [locationiq.com](https://locationiq.com/) - 地理

## 包构建系统

  * <https://build.opensuse.org/> — 提供多个发行版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。
* <https://copr.fedorainfracloud.org> — 为 Fedora 和 EL 运行基于 Mock 的 RPM 构建服务。
* <https://help.launchpad.net/Packaging> — Ubuntu 和 Debian 的构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境与代码编辑

  * [3v4l](https://wow.maker.readthedocs.io/en/latest/installation.html) - 能在网上体验多种 PHP 版本的代码运行环境
  * [Android Studio](https://developer.android.com/studio) - Google 的 Android 应用开发 IDE，开源且适用于 Windows、Mac、Linux 和 Chromebook
  * [Android Studio Preview](https://developer.android.com/studio/preview) - Android 开发者的预览版IDE，更快捷的开发工具有助于避免错误
  * [AndroidIDE](https://chrome.google.com/webstore/detail/android-ide/nkbmgkndokcmnbfnfimgnmpdkibmmkgn) - 一款开源的 Android 开发 IDE，能在 Android 设备上实现实时开发
  * [Apache NetBeans](https://netbeans.apache.org/) - 广泛使用且开放源码的开发环境和工具平台
  * [Apiary](https://apiary.io/) - 用于协作设计 API 的平台，提供即时的 API mock、生成文档（免费版支持 随时可修改的 API 模板和一个管理员账号下的无限用户）
  * [Barebone's TextWrangler](https://www.barebones.com/textwrangler/) - 在 macOS 上流行的一款文本编辑器，有免费的免费版和包含更多功能的付费版
  * [Binder](https://mybinder.org/) - 使用 Git 仓库快速创建互动的笔记本，免费且公开服务
  * [BlueJ](https://bluej.org) - 专为初学者设计的 Java 开发环境，由 Oracle 支持，具有简洁用户界面
  * [Bootimize.io](https://bootimize.io) - 为 Spring Boot 创建应用的在线工具，支持自定义数据库和 REST API
  * [Brackets](http://brackets.io/) - 一款针对 HTML5 开发的轻量级文本编辑器，具有易用性和高度可扩展性
  * [Cacher](https://www.cacher.io/) - 一款代码片段整理工具，支持100多种编程语言
  * [Code::Blocks](https://www.codeblocks.org/) - 一款免费的 C/C++ 开发者IDE，可用于 Mac, Windows 和 Linux 系统
  * [Cody](https://github.com/sourcegraph/cody) - 一款免费

  * [**VSCodium**](https://vscodium.com/)：由社区驱动，不含 telemetry 和追踪，是微软编辑器 VSCode 的自由许可二进制分发版。
  * [wakatime.com](https://wakatime.com/)：使用文本编辑器插件测量您的编码活动的量化自我指标，免费版功能有限。
  * [Wave Terminal](https://waveterm.dev/)：一个开源的、跨平台的终端，为无缝工作流程提供支持。可以渲染任何内容，保存会话和历史。基于开放的 web 标准，适用于 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/)：一个在浏览器中的 IDE，隔离编写 web 组件，提供 58 个预设模板，支持故事讲述和测试功能。
  * [PHPSandbox](https://phpsandbox.io/)：一个在线的 PHP 开发环境。
  * [WebDB](https://webdb.app)：免费高效的数据库 IDE，提供服务器发现、ERD、数据生成器、AI、NoSQL 结构管理器、数据库版本控制等功能。
  * [Zed](https://zed.dev/)：由 Atom 和 Tree-sitter 的创作者打造的高性能多人代码编辑器。

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。用于个人用途是免费的。
  * [Hightouch](https://hightouch.com/) - Hightouch是一个反ETL平台，帮助你同步客户数据从数据仓库到CRM、营销和支持工具。免费版提供一个数据同步目的地。
  * [Avo](https://avo.app/) — 简化了分析发布工作流。提供单一源真理跟踪计划、类型安全的分析跟踪库、内置调试器以及数据可见性，以在发布前捕捉所有数据问题。免费版适用于两个工作空间成员和1小时的数据可见性回溯。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版提供最多10,000个移动应用用户，以及深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 一个开源的分析解决方案，允许用户从多个协作平台聚合信息作为不同的数据源（如Git、GitHub和GitLab）。免费版包含无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反ETL与运营分析平台。免费版可同步数据仓库中的10个字段到60多个SaaS应用，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费版适用于一个网站，提供3,000个视图的分析。
  * [Databox](https://databox.com) — 通过整合其他分析和BI平台为企业提供洞察和分析。免费版提供3个用户、仪表板和数据来源，11百万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 单个网站每月2,000次页面浏览量。
  * [amplitude.com](https://amplitude.com/) — 100万每月事件，达2个应用程序。
  * [GoatCounter](https://www.goatcounter.com/) — 开源的网络分析平台，作为托管服务（免费用于非商业用途）或自托管应用提供。免费版适用于非商业用途，包括无限站点、6个月的数据保留和每月100,000页面浏览量。
  * [Google Analytics](https://analytics.google

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个站点每日访问量1,000页，三个热图，三个小部件，免费的bug跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 公开源的会话回放工具，包括用于bug重制的开发工具、实时支持的会话模式和产品分析套件。每月提供1,000次会话，访问所有功能，数据保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000个会话，数据保留30天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000个会话，数据保留在一个月内，支持三个用户。更多信息参见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个站点每月1,050页访问量，无限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 免费提供一个月内2,500个会话，限于一个站点
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，没有“流量限制”，没有项目限制，且不抽样
  * [mouseflow.com](https://mouseflow.com/) — 免费提供一个站点每月500次会话
  * [mousestats.com](https://www.mousestats.com/) — 免费提供一个站点每月100次会话
  * [smartlook.com](https://www.smartlook.com/) — 提供针对Web和移动应用的免费套餐（每月1,500次会话），包含三个热图、一个漏斗，数据历史保留一个月
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月最多5,000次访问是免费的
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并观看用户如何使用您的网站或应用程序

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/) — 使用全球电话号码验证和查询的JSON API。每月100个API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证，提供免费、快速、可靠的JSON API。每月1000个请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 全平台的订阅管理工具，整合了分析、A/B测试、Apple Search Ads、远程配置和增长工具，优化应用内购和盈利。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页应用。免费版本可追踪每月高达10k美元的收入。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) - 根据访问者地理位置动态调整价格，扩展业务至全球和新市场（购买力平价）。免费计划包含每月7,500个API请求。
  * [Glassfy](https://glassfy.io/) - 提供跨平台（iOS、Android、Stripe和Paddle）的订阅基础设施、实时订阅事件和内置的盈利工具。免费额度支持每月10k美元收入。
  * [Adapty.io](https://adapty.io/) - 一站式解决方案，提供开源SDK，用于集成移动应用内的订阅功能，适用于iOS、Android、React Native、Flutter、Unity或网页应用。免费版本包含每月10k美元收入。
  * [CoinMarketCap](https://coinmarketcap.com/api/) - 提供加密货币市场数据，包含最新的加密货币和法币汇率。免费版提供每月10,000次调用权限。
  * [CurrencyFreaks](https://currencyfreaks.com/) - 提供当前和历史汇率。免费的DEVELOPER计划包含每月1,000次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) - 提供加密货币市场数据，包括最新的交易平台汇率以及历史数据。Demo API稳定限速30次/分钟，每月调用次数为10,000次。
  * [CurrencyApi](https://currencyapi.net/) - 实时汇率和物理及加密货币换算。免费版提供每月1,250个API请求。
  * [currencylayer](https://currencylayer.com/) - 可靠的汇率和货币转换工具，每月免费100次API请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每天更新一次，每月限制1,500次请求。
  * [Fraud

## Docker相关服务

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，团队可获得30个免费私有仓库，用于构建和存储Docker映像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1 GB的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 提供1个免费的私有仓库和无限的公共仓库，用来构建和存储Docker映像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动且有趣的学习Docker的平台。
  * [quay.io](https://quay.io/) — 提供无限制的免费公开仓库来构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp提供的Vagrant Cloud服务。Vagrant box的托管平台。
  * [Vagrantbox.es](https://www.vagrantbox.es/) - 一个替代的公共虚拟机盒索引网站。

**[⬆️ 返回顶部](#目录)**

## 开发者博客网站

  * [BearBlog](https://bearblog.dev/) - 基于 Markdown 的轻量级博客和网站构建器。
  * [Dev.to](https://dev.to/) - 开发者分享想法和互助成长的平台。
  * [Hashnode](https://hashnode.com/) — 为开发者提供的无烦恼博客软件！
  * [Medium](https://medium.com/) - 更深入地思考对你而言重要的事情。
  * [AyeDot](https://ayedot.com/) — 免费以现代多媒体短格式迷你博客的形式分享你的想法、知识和故事到全世界。  

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * GraphComment(图评论)：是帮助您从网站受众建立活跃社区的评论平台。
  * Utterances(utterances)：这是一种基于GitHub issue的轻量级评论小部件。可以使用GitHub issue为博客评论、维基页面等提供功能！
  * Disqus(Disqus)：是一个由网络上数百万网站使用的社区平台。
  * Remarkbox(remarkbox)：是一个开源的托管评论平台，你只需为“几个域名上的一个管理员，可以完全控制行为和外观”付费。
  * IntenseDebate(深度辩论)：为WordPress、Tumblr、Blogger等多个网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) - 基于 AWS Lambda 和 Chrome 的屏幕截图 API。它支持全页面捕获、定时和视口尺寸。
  * [microlink.io](https://microlink.io/) - 将任何网站转化为包括元标签标准化、美观链接预览、抓取功能或云服务截图的数据。每月免费提供250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简洁的API调用来生成网站截图。设计为可扩展，托管在 Google Cloud 上。每月提供100张免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) - 提供高度自定义的网站截图。每月免费提供100张截图。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 捕获每月100张截图，包括png、gif 和 jpg 格式，支持完整内容捕获，不仅限于首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) - 浏览器自动化和页面渲染。自2017年起提供免费阶段，每天最多500个页面。
  * [Webshrinker.com](https://webshrinker.com) - 提供网站截图和域名洞察API服务。每月免费请求100次。
  * [Httpic.com](https://httpic.com) - 将任何网站转换为jpg、png或pdf格式。支持整页截图、自定义视口调整和注入自定义代码。免费版每月150张图片。
  * [Screenshots](https://screenshotson.click) - 专为截图设计的API。提供高度自定义的捕获选项。每月免费提供100张截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳去处。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一个完全托管和管理的移动应用 CI/CD 平台。您可以使用图形用户界面 (GUI) 基础的 CI/CD 工具进行构建、测试和部署。免费版每月提供 500 分钟免费时间，并配备 2.3 GHz 频率和 8 GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放界面，用于使用 Flutter 构建移动应用。

**[回到顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 这是一个非常快速的x86虚拟机，可以运行Linux和Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 这是一个开源的OpenRISC虚拟机，可运行支持网络的Linux。
  * [v86](https://copy.sh/v86) — 这是一个x86虚拟机，能够在浏览器中直接运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 助力实现隐私设计的审计和持续工作流程，帮助组织遵守GDPR和其他法规。免费版仅限小团队使用，而SaaS版本是收费的。
  * [Osano](https://www.osano.com/) - 提供从GDPR代理到Cookie banner的一站式合规管理平台。免费版提供基础功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和Cookie政策以及合作伙伴管理。免费版提供有限的隐私和Cookie政策，以及Cookie banner。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie banner、审计和多语言合规管理解决方案。免费版提供一次扫描和一个单个banner。
  * [Ketch](https://www.ketch.com/) - 合规管理和隐私框架工具。免费版提供大部分功能，但访客数量有限。
  * [Concord](https://www.concord.tech/) - 涵盖全数据隐私管理的平台，包括同意管理、数据请求处理（DSARs）和数据映射。免费版提供核心的同意管理功能，还为经过验证的开源项目提供更高级别的免费方案。

**[回到顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为社交媒体创建具有审美感的代码、文本或图片截图。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可以作为漂亮图片分享在推特或Facebook帖子上，或作为链接（如聊天或论坛）。
  * [Blynk](https://blynk.io) - 一个提供API的SaaS（软件即服务），用于控制、构建和评估物联网设备。免费开发者计划，包含5个设备，免费云存储。移动应用也支持。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一款具备强大多行计算器功能的笔记应用（PWA，Progressive Web App）。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建并以美观的截图样式分享代码片段。常用于在推特或博客文章中展示代码片段。
  * [Code Time](https://www.software.com/code-time) - 一个VS Code、Atom、IntelliJ和Sublime Text等编辑器的扩展，用于时间跟踪和编码指标。
  * [Codepng](https://www.codepng.app) - 从源代码中制作出色的截图分享在社交媒体上。
  * [CodeToImage](https://codetoimage.com/) - 将代码或文本转化为可用于社交媒体分享的截图。
  * [Cronhooks](https://cronhooks.io/) - 安排按时或定期的Webhooks。免费计划允许5次临时调度。
  * [cron-job.org](https://cron-job.org) - 在线 cronjob 服务。无限量的作业是免费的。
  * [datelist.io](https://datelist.io) - 在线预订/预约管理系统。免费计划每月最多支持5个预订，包含一个日历。
  * [Domain Forward](https://domain-forward.com/) - 一个工具，可以简单转发任何URL或域名。免费版支持5个域名和每月20万次请求。
  * [Elementor](https://elementor.com) - 易于使用的WordPress网站构建器。带40+基础库的免费计划可选。
  * [Format Express](https://www.format-express.dev) - 在线格式化JSON/ XML / SQL，即时显示。
  * [FOSSA](https://f

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) - 免费供2台设备使用，不限制会话数量和时长
  * [Apache Guacamole™](https://guacamole.apache.org/) - 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) - 需要时提供支持并永久设备访问（免费每天2个会话）
  * [RustDesk](https://rustdesk.com/) - 为所有人提供的开源虚拟/远程桌面基础设施！

**[回到顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) - 提供免费/付费素材，如精灵、贴图和角色包。
  * [Gamefresco.com](https://gamefresco.com/) - 发现、收集并分享来自全球游戏艺术家的免费游戏素材。
  * [GameDevMarket](https://gamedevmarket.net) - 提供免费/付费素材，如2D/3D/音频/界面。
  * [OpenGameArt](https://opengameart.org) - 提供开源游戏素材，如音乐、声音、精灵和GIF。
  * [CraftPix](https://craftpix.net) - 提供免费/付费素材，包括2D/3D/音频/界面背景/图标/贴图集/游戏套件。
  * [Game Icons](https://game-icons.net/) - 提供风格化的SVG/PNG图标，以CC-BY授权发布。
  * [LoSpec](https://lospec.com/) - 在线工具，用于创建像素艺术和其他限制性数字艺术，有大量的教程/调色板列表供游戏选择。
  * [ArtStation](https://www.artstation.com/) - 2D/3D资源及音频、图标、贴图集、游戏套件的市场，也可用于展示艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资源以及使用其免费版创建游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 提供免费低多边形3D资源。
  * [3Dassets.one](https://3dassets.one/) - 提供8000多个免费/付费3D模型及用于纹理制作的PBR材料。
  * [Kenney](https://www.kenney.nl/assets/) - 提供免费的（CC0 1.0 Universal许可）2D/3D/音频/界面游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 提供免费和付费的纹理（可变分辨率）、模型、HDR渲染和刷子。提供免费插件用于导出至软件如Blender。
  * [Freesound](https://freesound.org/) - 提供免费的、具备不同CC许可的协作音效库。  
**[⬆️ 返回顶部](#目录)**

## Other Free Resources

  * [Wikimint Developer](https://developer.wikimint.com/p/tools.html) - 提供免费的网络开发工具，包括CSS压缩和解压缩、图像优化、图像缩放、大小写转换、CSS验证器、JavaScript编译器、HTML编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可获得高达200小时的音频转录服务，是免费的。
  * [get.localhost.direct](https://get.localhost.direct) - 为localhost开发提供了一个更好的带有子域支持的`.localhost.direct` 免费 Wildcard 公共CA签名SSL证书。
  * [Framacloud](https://degooglisons-internet.org/en/) - 由法国非盈利组织Framasoft[法]维护的免费/自由开源软件和SAAS列表。
  * [GitHub for Dev](https://github.com/tvvocold/FOSS-for-Dev) - 为开发者提供的免费开源软件库。
  * [GitHub Education](https://education.github.com/pack) - 提供免费服务，学生需注册。 
  * [Markdown Tools](https://markdowntools.com) - 能将HTML、CSV、PDF、JSON和Excel文件转换为Markdown或反之的工具。
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) - 获取免费试用版，包括90天的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），到期后只要有开发活动则可续订。
  * [Pyrexp](https://pythonium.net/regex) - 免费的基于网络的正则表达式测试器和可视化调试工具。
  * [Red Hat for Developers](https://developers.redhat.com) - 为开发者提供免费的Red Hat产品，如RHEL、OpenShift、CodeReady等。仅限个人版，提供参考电子书。
  * [smsreceivefree.com](https://smsreceivefree.com/) - 提供免费的临时和一次性手机号码服务。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 提供免费的测试短信发送和接收服务。
  * [SimpleBackups.com](https://simplebackups.com/) - 提供