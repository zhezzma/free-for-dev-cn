# free-for.dev

开发者和开源作者现在有很多提供免费服务的选择，但要花费时间找到并做出明智的决定。

这是一个软件（[Software as a Service, SaaS](软件即服务) ([SaaS](https://en.wikipedia.org/wiki/Software_as_a_service "Software as a Service")）、[Platform as a Service, PaaS](平台即服务) ([PaaS](https://en.wikipedia.org/wiki/Platform_as_a_service "Platform as a Service")）、[Infrastructure as a Service, IaaS](基础设施即服务) ([IaaS](https://en.wikipedia.org/wiki/Infrastructure_as_a_service "Infrastructure as a Service")）等）和其他提供免费开发者服务的清单。

本列表的范围仅限于基础设施开发者（[System Administrator](系统管理员)、[DevOps Practitioners](DevOps 实践者)等）可能会觉得有用的东西。我们喜欢所有免费服务，但最好保持专注。有时这是一个灰色地带，因此这是一个有观点的列表；如果我不接受你的贡献，请不要感到冒犯。

本列表是由 1600 多人通过 [Pull Requests](拉取请求)、审查、想法和工作完成的。你也可以通过发送 [Pull Requests](https://github.com/ripienaar/free-for-dev) 来添加更多服务或删除那些服务条款已更改或停用的服务，从而帮助我们。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅适用于即服务（as-a-Service）产品，而不适用于自托管软件。要符合资格，服务必须提供免费版本，而不仅仅是一个免费试用版本。如果该版本是在特定时间范围内提供的，免费版本必须至少提供一年。我们还从安全角度考虑免费版本，因此单点登录（[Single Sign-On, SSO](单点登录)）是可以的，但我不会接受仅将 [Transport Layer Security, TLS](传输层安全性) 限制为付费版本的服务。

# 目录

  * [主要云服务提供商的免费限制](#主要云服务提供商的免费限制)
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
  * [数据地图可视化](#数据地图可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面](#设计和用户界面)
  * [设计灵感](#设计灵感)
  * [开发博客网站](#开发博客网站)
  * [域名系统](#域名系统)
  * [Docker相关](#Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际移动电话号码验证API和SDK](#国际移动电话号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息和流媒体](#消息和流媒体)
  * [杂项

## 主要云服务提供商的免费限制

  * [Google Cloud Platform（谷歌云平台）](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，每天9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取、20,000次写入、20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（仅限某些区域），每月1 GB从北美到所有区域的网络出流量（不包括中国和澳大利亚）
    * Cloud Storage - 5GB，1GB网络出流量
    * Cloud Shell - 基于Web的Linux shell/主要IDE，具有5GB的持久存储，每周60小时限制
    * Cloud Pub/Sub - 每月10GB的消息
    * Cloud Functions - 每月200万次调用（包括背景和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1 GB从北美的网络出流量
    * Google Kubernetes Engine - 一个区域集群无需管理费，每个用户节点按照标准Compute Engine定价收费
    * BigQuery - 每月1 TB的查询，每月10 GB的存储
    * Cloud Build - 每天120分钟的构建时间
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出流量
    * [Google Colab（谷歌Colab）](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [idx.dev（idx.dev）](https://idx.dev) Google Project IDX，在Google Cloud上运行的在线VSCode
    * 完整、详细列表 - https://cloud.google.com/free

  * [Amazon Web Services（亚马逊网络服务）](https://aws.amazon.com)
    * [CloudFront（云前端）](https://aws.amazon.com/cloudfront/) - 每月1TB出流量和200万函数调用
    * [CloudWatch（云监控）](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个报警
    * [CodeBuild（代码构建）](https://aws

    * 日志分析 - 每日500MB的日志
    * 完整、详细的列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 不限域名的免费DNS，DDoS保护，内容分发网络（CDN），以及免费SSL，防火墙规则和页面规则，网络应用防火墙（WAF），Bot缓解，免费不限速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时的活动日志，三个网络位置
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) -您可以将本地运行的HTTP端口通过隧道暴露在trycloudflare.com的随机子域上，使用[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)，无需账户。更多功能（TCP隧道，负载均衡，VPN）在[零信任](https://www.cloudflare.com/products/zero-trust/)免费计划中。
    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare的全球网络上免费部署无服务器代码—每日10万次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，每天1 GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10 GB，每月100万次Class A操作，每月1亿次Class B操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，100k行写入，1 GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare的快速、安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，不限访问席位，不限预览部署，并通过Cloudflare Workers集成提供全栈能力

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 用于从端到端可视化构建和管理云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 适用于个人项目（包括一个部署服务器和一个静态站点）的免费服务，Cloud 66 为您提供在任何云上构建、部署和增长应用程序所需的一切，而无需管理服务器相关事务。
  * [Pulumi](https://www.pulumi.com/) - 现代基础设施即代码平台，允许您使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) - Terraform云。为最多500个资源提供免费的远程状态管理和团队协作。
  * [scalr.com](https://scalr.com/) - Scalr 是一个Terraform自动化和协作（TACO）产品，用于在Terraform管理的基础设施和配置上提高协作和自动化。具有完整的Terraform CLI支持、OPA集成和分层配置模型，无单点登录税收。所有功能都包含在内，每月最多可使用50次运行的免费服务。
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。我们的免费层允许单个开发者（单用户）部署无限的静态站点、Web服务和环境。我们每月为免费层提供20次作业执行，并包含预览和自动部署。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 5个用户以下的公共和私人Git仓库（免费）以及CI/CD流水线
  * [chiselapp.com](https://chiselapp.com/) — 公共和私人Fossil仓库（不限数量）
  * [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，100 MB空间，支持两个用户
  * [Codeberg](https://codeberg.org/) — 公共和私人Git仓库（免费，开源项目，不限协作者数量）。由[Forgejo](https://forgejo.org/)提供支持。静态网站托管服务[Codeberg Pages](https://codeberg.page/)。CI/CD托管服务[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管服务[Codeberg Translate](https://translate.codeberg.org/)。包括软件包和容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 公共和私人仓库（不限数量，永久免费）。由GitLab和Sapphire提供支持，不提供CI/CD
  * [GitHub](https://github.com/) — 公共和私人仓库（不限数量，不限协作者数量）。包括CI/CD、开发环境、静态托管、软件包和容器托管、项目管理和AI Copilot
  * [gitlab.com](https://about.gitlab.com/) — 公共和私人Git仓库（5个协作者以下，不限数量）。包括CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit是基于Gitlab软件的Framasoft软件开发平台，包括CI、静态页面、项目页面和问题跟踪
  * [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的友好分支，支持Mercurial
  * [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发的仓库和工具，还包括一个Ionic仓库
  * [NotABug](https://notabug.org) — NotABug.org是一个面向开源项目的免费

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于将复杂的 [JSON](JavaScript 对象表示法) 数据可视化、编辑和过滤为漂亮的表格网格。可以保存和通过链接共享 [JSON](JavaScript 对象表示法) 数据。
  * [Zerosheets](https://zerosheets.com) - 将 [Google Sheets](谷歌表格) elektron 表格转换为强大的 [API](应用程序接口) ，用于快速开发原型、网站、应用程序等。免费版本每月可使用 500 次请求。
  * [IP.City](https://ip.city) — 每天可免费使用 100 次 [IP](互联网协议) 地理位置请求。
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的 [API](应用程序接口) 套件，包括 [IP](互联网协议) 地理位置、性别检测和电子邮件验证。
  * [Apify](https://www.apify.com/) — 网页爬取和自动化平台，用于为任何网站创建 [API](应用程序接口) 并提取数据。已准备好用于爬取、集成代理和自定义解决方案。免费版本每月包含 5 美元的平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的 [API](应用程序接口) 或自动化工具（如 [Zapier](扎皮尔) 和 [Airtable](航空台) ）自动生成图像和 [PDF](便携式文档格式) 文档。不需要 [CSS](层叠样式表) / [HTML](超文本标记语言) 。免费版本每月包含 50 张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 所有必要的工具，以充分了解 [API](应用程序接口) 和后端的工作情况。带有自动 [API](应用程序接口) 契约验证和监控。免费版本覆盖每月最多 20,000 次请求的服务器。
  * [APIVerve](https://apiverve.com) - 获取 120+ 个以质量、一致性和可靠性为重点构建的免费 [API

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库架构设计和建模工具，免费入门计划包括 2 个数据库模型和每个模型最多 10 张表。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实脸部滤镜，仅需一个 SDK。免费计划提供最多 10 名月活跃用户（MAU）和跟踪最多 4 张脸的功能。
  * [Deepnote](https://deepnote.com) - 一个新的数据科学笔记本，兼容 Jupyter，支持实时协作和云端运行。免费套餐包括无限的个人项目、最多 750 小时的标准硬件和最多 3 名编辑的团队。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的网页抓取和数据提取平台，能够将任何网站转换为数据集或将其用作 API。免费计划每月包含 5K 次页面请求。
  * [Disease.sh](https://disease.sh/) — 提供准确数据以构建 Covid-19 相关应用的免费 API。
  * [Doczilla](https://www.doczilla.app/) — 一种 SaaS API，能够直接从 HTML/CSS/JS 代码生成截图或 PDF。免费计划每月允许生成 250 个文档。
  * [Doppio](https://doppio.sh/) — 管理 API，用于生成和私密存储 PDF 和截图，利用顶级渲染技术。免费计划每月允许生成 400 个 PDF 和截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动设备、Web 和 IoT 应用的开源 REST API 后端。连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，它将立即创建一个全面的 REST API 平台，包括实时文档和用户管理。
  * [DynamicDocs](https://advicement.io) - 使用基于 LaTeX 模板的 JSON 到 PDF API 生成 PDF 文档。免费计划每月允许 50 次 API 调用和访问模板库。
  * [Efemarai](https://efemarai.com) - 面

  * [IPTrace](https://iptrace.io) — 一个令人尴尬的简单 API，它为您的业务提供可靠和有用的 IP 地理位置数据。
  * [JSON2Video](https://json2video.com) - 一个用于自动化视频营销和社交媒体视频的视频编辑 API，支持程序化或无代码操作。
  * [JSON IP](https://getjsonip.com) — 返回客户端的公共 IP 地址，无需注册即可使用免费套餐。使用 CORS，数据可以使用客户端 JS 直接从浏览器请求。适用于服务的客户端和服务器 IP 更改监控，请求无限制。
  * [JSON Serve](https://jsonserve.com/) — 一个免费服务，帮助开发者存储 JSON 对象并将其用作应用程序中的 REST API。
  * [JSONing](https://jsoning.com/api/) — 从 JSON 对象创建模拟 REST API，并自定义 HTTP 状态码、头部和响应体。
  * [Konghq](https://konghq.com/) — API 市场和强大的私有和公共 API 工具。免费套餐限制了某些功能，如监控、警报和支持。
  * [Kreya](https://kreya.app) — 自由的 gRPC GUI 客户端，用于调用和测试 gRPC API。可以通过服务器反射导入 gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进您的机器学习模型。使用最多 1000 个样本的数据集，免费使用。
  * [LoginLlama](https://loginllama.app) - 一个登录安全 API，用于检测欺诈和可疑登录，并通知您的客户。每月 1000 次登录免费。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 电子邮件验证服务，使用真实邮件服务器连接确认有效电子邮件。免费 API 计划每月有 300 个验证。
  * [Market Data API](https://www.marketdata.app) - 提供现时和历史的财务数据，包括股票、期权、互助基金等。Free Forever API 套餐每天允许 100 个请求，不收取费用。
  * [Meteosource

  * [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL
  * [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化的完整平台。所有计划每月包括20,000次免费运行，这足够为大多数小型企业提供ETL支持。
  * [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。针对最多5个用户的团队，永久免费，功能包括无限制的仪表盘和图表、无代码图表构建器和协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 面向创作者和开发者的提示工程平台。提供提示工程库、表单和API。免费计划提供一个提示形成、一个提示API端点和每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用简单的Google表格公式，在Google表格中使用AI和大型语言模型（如GPT-3）转换、理解和分析文本。每月前2,000个信用额度免费。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止您被阻止。前1000次调用是免费的。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板自动生成图像。免费计划允许您每周创建最多100张图像。
  * [QuickMocker](https://quickmocker.com/) — 在自己的子域名下管理在线假API端点，将请求转发到本地URL用于webhook开发和测试，使用正则表达式和多个HTTP方法用于URL路径，优先考虑端点，超过100个快捷码（动态或假响应值）用于响应模板化，从OpenAPI（Swagger）规范的JSON格式导入，代理请求，根据IP地址和授权头限制端点。免费帐户提供一个随机子域名，10个端点，5

  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方Webhook（Webhook）并在localhost（ngrok样式）上调试的工具。开源且可自托管。个人域名*username*.github.webhook.store免费，公共域名*anything*.webhook.store免费。
  * [Weights & Biases](https://wandb.ai) — 面向开发者的MLOps平台（机器学习操作平台）。通过实验跟踪、数据集版本控制和模型管理更快地构建更好的模型。个人项目的免费套餐包括100 GB的存储空间。
  * [wit.ai](https://wit.ai/) — 为开发者提供的自然语言处理（NLP）工具。
  * [wolfram.com](https://wolfram.com/language/) — 基于知识的算法云服务。
  * [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API。每月30,000个API调用。
  * [ZenRows](https://www.zenrows.com/) — 网页抓取API和代理服务器，可以绕过任何防爬虫解决方案，同时提供JavaScript渲染、轮换代理和地理定位。免费套餐包含1,000个API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 提供无头浏览器、住宅IP和直截了当定价的网页抓取API。每月1,000个免费API调用，学生和非盈利组织可获得额外积分。
  * [ip-api](https://ip-api.com) — IP地址地理位置API，非商业用途免费，无需API密钥，同一IP地址的免费计划限制为每分钟45个请求。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页抓取API，内置解析、Chrome渲染和代理。每月2,000个免费API调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮政编码API，全球邮政编码数据。每月10,000个免费请求。
  * [huggingface.co](https://huggingface.co) - 为Pytorch、Tensor

## 构件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的[工件仓库](Artifact Repository)。包括包扫描工具XRay和CI/CD工具Pipelines（前身为Shippable），每月免费提供2000分钟的CI/CD时间。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认[工件仓库](Artifact Repository)。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的，私有和公共的Maven和PyPi[仓库](Repository)。对于开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中化的[仓库](Repository)服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层次 + 开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven[仓库](Repository)，公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — Maven、RPM、DEB、PyPi、NPM和RubyGem包的易于使用的[仓库](Repository)托管（具有免费层次）。
  * [repsy.io](https://repsy.io) — 1 GB免费的私有/公开Maven[仓库](Repository)。
  * [Gemfury](https://gemfury.com) — Maven、PyPi、NPM、Go Module、Nuget、APT和RPM[仓库](Repository)的私有和公开[工件仓库](Artifact Repository)。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公开项目，5Gb存储，基本实例。
  * [RepoForge](https://repoforge.io) - Python、Debian、NPM包和Docker注册表的私有云托管[仓库](Repository)。开源/公开项目免费计划。
  *

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的基于云的代码片段管理器，用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com) — 最容易和最安全的方式为个人、团队和企业组织存储、共享和同步敏感数据。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用程序。公共组免费，用户数无限，历史记录和集成也无限。同时，还提供自托管的开源版本。
  * [cally.com](https://cally.com/) — 找到会议的最佳时间和日期。使用简单，适合小组和大组。
  * [Calendly](https://calendly.com) — Calendly 是连接和安排会议的工具。免费计划提供每用户一个日历连接和无限会议。同时还提供桌面和移动应用程序。
  * [Discord](https://discord.com/) — 支持公私聊天室的应用。支持 Markdown 文本、语音、视频和屏幕共享。用户数无限免费。
  * [Telegram](https://telegram.org/) — Telegram 适合所有需要快速、可靠消息和通话的人。商业用户和小团队可能会喜欢大群组、用户名、桌面应用程序和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创作工具。可以截图、记录过程并与团队协作。同时，还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 与团队实时通话和协作。支持 IDE 对编程、终端共享、语音、视频和屏幕共享。适合小团队免费使用。
  * [Dyte](https://dyte.io) - 最适合开发人员的实时视频和音频 SDK，具有增强生产力和参与度的协作插件。免费版本包括每月 10,000 分钟的实时视频/音频使用时间。
  * [evernote.com](https://evernote.com/) — 信息组织工具。可以分享笔记与他人合作
  * [Fibery](https://fib

  * [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，帮助您以更好的方式管理时间，具有易用的界面和有价值的统计数据。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用。无限用户和消息历史，永久免费。
  * [Raindrop.io](https://raindrop.io) - 面向 macOS、Windows、Android、iOS 和 Web 的私人和安全的书签应用。免费无限书签和协作。
  * [element.io](https://element.io/) — 一个建立在 [Matrix](https://matrix.org/)之上的去中心化和开源的通信工具。群聊、直接消息、加密文件传输、语音和视频聊天、以及与其他服务的易于集成。
  * [Rocket.Chat](https://rocket.chat/) - 开源的通信平台，具有全渠道功能、[Matrix](https://matrix.org/) 联盟、与其他应用的桥接、无限消息和完整的消息历史。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步、讨论。云版本仅有 1 GB
  * [Sema](https://www.semasoftware.com/) - 免费的开发者Portfolio工具，可以跨多个仓库整合和快照贡献，并生成一个报告。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，从浏览器直接与协作伙伴共享屏幕，无需下载或注册。
  * [Slab](https://slab.com/) — 为团队提供的现代知识管理服务。最多10个用户免费。
  * [slack.com](https://slack.com/) — 对于无限用户有一些功能限制，但仍然免费
  * [Spectrum](https://spectrum.chat/) - 创建免费的公有或私有的社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。您可以跟踪上游提供者的状态页吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容策划和笔记的视觉

  * [Pullflow](https://pullflow.com) — Pullflow 提供了一个增强了人工智能（AI）的平台，用于跨 GitHub、Slack 和 VS Code 的代码审查协作。
  * [Webex](https://www.webex.com/) — 可以免费使用的视频会议平台，每次会议最长 40 分钟，支持 100 位与会者。
  * [RingCentral](https://www.ringcentral.com/) — 可以免费使用的视频会议平台，每次会议最长 50 分钟，支持 100 位参与者。
  * [GitBook](https://www.gitbook.com/) — 一个用于捕获和记录技术知识的平台，从产品文档到内部知识库和 API。个人开发者可以免费使用。
  * [transfernow](https://www.transfernow.net/) — 最简单、最快、最安全的文件传输和共享接口。不需要订阅就可以发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/) — 基于 JavaScript 和加密的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/) — 一个开源的 [Discord](https://discord.com/) 替代品，尊重用户隐私，并且拥有大多数 Discord 的专有功能，且全部免费。Revolt 是一个安全且快速的全方位应用，100% 免费。所有功能都是免费的，还支持（官方和非官方）插件，不像大多数主流聊天应用。
  * [Tencent RTC](https://trtc.io/) — 腾讯实时通信（TRTC）为群组音频/视频通话提供解决方案。首年每月可免费使用 10,000 分钟。
  * [Pastefy](https://pastefy.app/) - 一个带有可选客户端加密、多标签粘贴、API、高亮编辑器等功能的漂亮且简单的 Pastebin。
  * [SiteDots](https://sitedots.com/) - 可以直接在网站上分享对网站项目的反馈，无需模拟、画布或变通方法。完全功能的免费层。
**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — 为 [Drupal](https://www.drupal.org/（内容管理系统）网站提供的托管服务。开发者可以免费使用，包括免费的开发工具（如 Acquia Dev Desktop）等。
  * [Contentful](https://www.contentful.com/) — [无头CMS](https://www.contentful.com/rfcontents/what-is-a-headless-cms/（无头内容管理系统））。在云端提供内容管理和交付API。免费的社区空间包括五个用户、25K条记录、48个内容类型和2个语言设置。
  * [Cosmic](https://www.cosmicjs.com/) — 无头CMS和API工具包。开发者可以免费使用个人计划。
  * [Crystallize](https://crystallize.com) — 支持电子商务的无头 [PIM（产品信息管理）](https://zh.wikipedia.org/wiki/产品信息管理)。内置 [GraphQL](https://graphql.org/（查询语言）API）。免费版本包括无限用户、1000个目录项、5 GB/月带宽和25k/月API调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。DatoCMS是一个基于 [GraphQL](https://graphql.org/（查询语言）的CMS。在低级套餐中，每月有100k次调用。
  * [Directus](https://directus.io) — 无头CMS。一个完全免费和开源的平台，用于在本地或云端管理资产和数据库内容。没有任何限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 无头CMS，将JSON内容直接存储在您的Git仓库中。无限制。
  * [kontent.ai](https://www.kontent.ai) - 一个 [内容即服务](https://zh.wikipedia.org/wiki/内容即服务) 平台，为您提供无头CMS的所有好处，同时赋予市场营销人员权力。开发者计划为两个用户提供无限项目，每个项目有两个环境，500个内容项，两个语言的_delivery_和管理API，以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
  * [Prismic](https://www.prismic.io

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码（No code）应用程序构建工具。在自动生成的后端代码中，用户对源代码拥有完整的访问权限和无限的 API 和路由，允许进行广泛的集成。免费计划包括三个项目、五个表格和一个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一个使用人工智能（AI）和对代码库深入理解的编码助手，帮助开发者更快地编写和理解代码。Cody 为开发者提供了选择大型语言模型（LLMs）的选项（包括本地推理），支持各种集成开发环境（IDEs），支持所有流行的编程语言，并且有一个免费计划。免费计划为开发者每月提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用 DhiWise 的创新代码生成技术，无缝地将 Figma 设计转换为动态的 Flutter 和 React 应用程序，优化工作流程，帮助您比以往任何时候都更快地创建出色的移动端和 Web 体验。
  * [Codeium](https://www.codeium.com/) — Codeium 是一个免费的由人工智能（AI）驱动的代码补全工具。它支持超过 20 种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等）并与所有主要的独立和 Web 集成开发环境（IDEs）集成。
  * [Fern](https://buildwithfern.com) - 编写 API 定义并使用它们生成流行语言（例如 TypeScript、Python、Java、Go 等）中的 SDK/客户端库。完全支持 OpenAPI。免费层可生成最多 20 个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 只适用于 C#。Metalama 在编译期间实时生成代码的样板，保持源代码的清晰。对于开源项目是免费的，其商业友好的免费层包括

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个完整的工作流程，用于编写、审查和部署代码), 一个用户的免费账户，一个存储空间为100 MB的仓库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，只有3分钟的会话，支持 MS IE 9 在 Vista 下以 1024 x 768 分辨率运行
  * [codacy.com](https://www.codacy.com/) — 自动化代码审查，支持 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript，对于无限的公开和私有仓库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 自动化的基础设施即代码审查工具，适用于 DevOps，与 GitHub、Bitbucket 和 GitLab（包括自托管）集成。除了标准语言外，它还分析 Ansible、Terraform、CloudFormation、Kubernetes 等等。（开源免费）
  * [CodeBeat](https://codebeat.co) — 自动化代码审查平台，支持多种语言。对于公开仓库具有 Slack 和电子邮件集成功能，永久免费。
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，适用于开源和无限组织拥有的私有仓库（最多 4 位协作者）。对于学生和机构也免费。
  * [codecov.io](https://codecov.io/) — 代码覆盖工具（SaaS），适用于开源和一个免费的私有仓库
  * [CodeFactor](https://www.codefactor.io) — 自动化代码审查，适用于 Git。免费版本包括无限用户、公开仓库和一个私有仓库。
  * [coderabbit.ai](https://coderabbit.ai) — AI 驱动的代码审查工具，与 GitHub/GitLab 集成。免费层包括每小时 200 个文件、每小时 3 次审查和每小时 50 次对话。对于开源项目永久免费。
  * [codescene.io](https://codescene.io/) - CodeScene 根据开发人员如何处理代码和可视化组织因素

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 搜索和依赖更新通知，支持32种不同的包管理器，对开源项目免费
  * [Namae](https://namae.dev/) - 搜索GitHub、Gitlab、Heroku、Netlify等多个网站，查找项目名称的可用性
  * [searchcode.com](https://searchcode.com/) — 基于文本的全面代码搜索，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（和其他标记），帮助识别改进代码的区域
  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现、分享代码片段，拥有功能强大的代码截图工具，内置模板和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动的 Web 无障碍测试引入您的开发工作流程。对于开源和教育目的免费。
  * [appcircle.io](https://appcircle.io) — 一个针对移动端的企业级 DevOps 平台，自动构建、测试和发布移动应用，以实现更快、更高效的发布周期。每次构建最多 30 分钟，20 个月度构建，1 个并发构建免费。
  * [appveyor.com](https://www.appveyor.com/) —Windows 的 CD 服务，开源项目免费。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内将应用程序和基础设施部署到您的云环境中。支持自定义和第三方应用程序在 Kubernetes 和 Lambda 环境上的部署。免费层允许为 5 个域和 2 个用户部署无限的应用程序和环境。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的 CI/CD 工具，无论是原生应用还是混合应用。每月 200 次免费构建，构建时间 10 分钟，2 名团队成员。开源项目获得 45 分钟构建时间，+1 并发性和无限团队大小。
  * [buddy.works](https://buddy.works/) — 一个 CI/CD 工具，包含 5 个免费项目和 1 个并发运行（每月 120 次执行）。
  * [Buildkite](https://buildkite.com) CI 流水线对于 3 名用户和每月 5,000 次作业分钟免费。测试分析的免费开发者层包括每月 100,000 次测试执行，开源项目可获得更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps 工具。免费适用于 20 名用户以下和 10 个数据库实例。
  * [CircleCI](https://circleci.com/) — 一個全面性的免费计划，包含所有功能，適用於 GitHub、GitLab 和 BitBucket 仓库的 CI/CD 服务。支持多种资源类别、Docker、Windows、Mac OS、ARM 执行

## Testing

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供的智能可视化验证。集成到几乎所有自动化解决方案（如[Selenium](https://www.selenium.dev/) 和 [Karma](https://karma-runner.github.io/)）和远程运行器（[Sauce Labs](https://saucelabs.com/)、[Browser Stack](https://www.browserstack.com/)）中。对于开源项目免费，单用户有免费级别，每周有限的检查点。
  * [Appetize](https://appetize.io) — 在基于云的安卓手机/平板模拟器和iPhone/iPad模拟器中测试您的安卓和iOS应用，直接在浏览器中运行。免费级别包括两个并发会话，每月使用30分钟。应用大小无限制。
  * [Apptim](https://apptim.com) — 一个移动测试工具，允许没有性能工程技能的人员评估应用的性能和用户体验（UX）。使用您自己的设备的桌面版本100%免费，在iOS和安卓上进行无限次测试。
  * [Argos](https://argos-ci.com) - 开源的可视化测试，适用于开发人员。每月5,000张截图，适用于无限项目。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套连续基准测试工具，用于捕获CI性能回归。适用于所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级的Web应用自动化测试工具。易于学习，不需要编码。在您自己的计算机上免费运行无限次测试。还提供云监控和CI/CD集成，需额外付费。
  * [Checkly](https://checklyhq.com) - 采用代码为先的合成监控，适用于现代DevOps。以传统提供商的一小部分成本监控您的API和应用。由监控即代码工作流和[Playwright](https://playwright

  * [TestCollab](https://testcollab.com) - 一个用户友好的测试管理软件，其免费计划包括与 [Jira](https://www.atlassian.com/software/jira) 集成、无限项目、使用 CSV/XLSx 导入测试用例、时间跟踪和 1 GB 文件存储。
  * [testingbot.com](https://testingbot.com/) — [Selenium](https://www.selenium.dev/) 浏览器和设备测试，[免费用于开源项目](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 一个发布自动化测试结果的仪表盘和一个使用 [GitHub](https://github.com/) 实现手动测试代码的框架。该服务是 [免费用于开源项目](https://github.com/marketplace/testspace-com)，并支持每月 450 个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与热门测试框架集成。开源软件开发人员、个人、教育工作者和刚刚开始的小团队可以请求折扣和免费服务，超出基本免费项目。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查 webhooks。转发到本地主机或从历史记录中重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用 [Java](https://www.java.com/) 或 [TypeScript](https://www.typescriptlang.org/) 构建可扩展的 UI，并使用集成工具、组件和设计系统更快地迭代、设计更好、简化开发流程。五年内无限项目免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 使用集成期间的唯一 URL 调试和检查 webhooks 和 HTTP 请求。完全免费，您可以创建无限 URL 并接收推荐。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 webhooks、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件地址始终免费。
  * [webhookbeam

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 全面的应用安全平台，涵盖[SCA（软件组件分析）](Software Composition Analysis)，[SAST（安全静态代码分析）](Static Application Security Testing)，[CSPM（云安全态势管理）](Cloud Security Posture Management)，[DAST（动态应用安全测试）](Dynamic Application Security Testing)，Secrets，[IaC（基础设施即代码）](Infrastructure as Code)，Malware，容器扫描，EOL等。免费计划包括两个用户，扫描 10 个仓库，1 个云，2 个容器和 1 个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 在您的网络中发现已损坏的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 使用自然语言处理和机器学习为网站和 API 提供的垃圾邮件过滤器。免费计划每天每个域名有 200 个请求。
  * [atomist.com](https://atomist.com/) — 更快捷、更方便的方式来自动化各类开发任务。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — [Amazon Web Services (AWS)](Amazon Web Services) 安全和合规审计及监控
  * [公共云威胁情报](https://cloudintel.himanshuanand.com/) — 面向公共云基础设施的高置信度 IoC（指标表），一部分内容可在 GitHub 获取（https://github.com/unknownhad/AWSAttacks），完整列表可通过 API 获取
  * [CodeNotary.io](https://www.codenotary.io/) — 拥有不可篡改证明的开源平台，用于对代码、文件、目录或容器进行公证
  * [crypteron.com](https://www.crypteron.com/) — 面向云端的、开发者友好的安全平台，防止 [.NET](.NET) 和 [Java](Java) 应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个用于分析和解码/编

  * [Ubiq Security](https://ubiqsecurity.com/) — 只需三行代码即可加密和解密数据，且具有自动密钥管理功能。可免费使用一个应用程序，且每月最高可进行1,000,000次加密。
  * [Virgil Security](https://virgilsecurity.com/) — 提供实施端到端加密、数据库保护、物联网安全等功能的工具和服务，适用于您的数字解决方案。对于拥有250个用户以下的应用程序可免费使用。
  * [Vulert](https://vulert.com) - Vulert持续监测您的开源依赖项中的新漏洞，推荐修复方案，无需安装或访问您的代码库。对于开源项目可免费使用。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键扫描您的GraphQL端点安全性。免费，无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 在公共GitHub仓库、代码片段、问题和评论中搜索20亿个泄露的机密信息。免费。


**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供细粒度的授权服务（Authorization as a Service）。免费使用，最高支持1000个月活跃用户（MAUs）和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素认证（MFA）、无密码认证等功能。包含前端和后端应用的SDK，免费使用，最高支持1000个MAUs和五个身份提供者。
  * [Auth0](https://auth0.com/) — 支持主机单点登录（Hosted SSO）的服务。免费计划包含25,000个MAUs、无限社交连接、自定义域名等功能。
  * [Authgear](https://www.authgear.com) - 快速为您的应用程序添加无密码认证、一次性密码（OTPs）、双因素认证（2FA）和单点登录（SSO）功能。所有前端功能都包含在内，免费使用，最高支持5000个MAUs。
  * [Authress](https://authress.io/) — 为任何项目提供认证登录和访问控制，支持无限的身份提供者，包括Facebook、Google、Twitter等。前1000次API调用免费。
  * [Authy](https://authy.com) - 在多个设备上提供双因素认证（2FA），包括备份功能。可以作为Google Authenticator的替代品，免费使用，最高支持100次成功认证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于创建、测试和部署访问策略。提供细粒度的授权和访问控制，免费使用，最高支持100个月活跃的主体。
  * [Clerk](https://clerk.com) — 提供用户管理、认证、双因素/多因素认证、预建的UI组件用于登录、注册、用户资料等。免费使用，最高支持10,000个月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) — 基于Keycloak的身份与访问管理服务

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用程序测试平台，确保移动应用程序按预期运行。免费计划：一个应用程序，分析，版本和安装次数无限制，以及反馈收集。
  * [Loadly](https://loadly.io) - iOS和Android应用程序(beta)分发服务，提供完全免费的服务，拥有无限下载量、高速下载和无限上传功能。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用程序部署到设备。免费计划：应用程序上传，密码保护链接，1天有效期，和10次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过空中方式（over the air）分发iOS和Android应用程序。免费计划：无限上传，私人链接，2天有效期（对访客），60天有效期（对注册用户）。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用程序进行测试。免费计划包括一个应用程序项目，三个应用程序版本，500 MB存储空间和每月100个应用程序安装。
  * [Appho.st](https://appho.st) - 移动应用程序托管平台。免费计划包括5个应用程序，50次每月下载次数，最大文件大小为100 MB。

**[⬆️ 回到顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署准备好的应用程序。免费管理1个AWS微实例
  * [Esper](https://esper.io) — 面向Android设备的[MDM（移动设备管理）](https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8A%A8%E8%AE%BE%E5%A4%87%E7%AE%A1%E7%90%86)和[MAM（移动应用管理）](https://zh.wikipedia.org/wiki/%E7%A7%BB%E5%8A%A8%E5%BA%94%E7%94%A8%E7%AE%A1%E7%90%86)，具有[DevOps](https://zh.wikipedia.org/wiki/DevOps)功能。使用一个用户许可证并拥有25 MB应用存储，可免费管理100个设备。
  * [jamf.com](https://www.jamf.com/) — 用于[iPads](https://www.apple.com/zh-cn/ipad/)、[iPhones](https://www.apple.com/zh-cn/iphone/)和[Macs](https://www.apple.com/zh-cn/mac/)的设备管理，免费管理3个设备
  * [Miradore](https://miradore.com) — 设备管理服务。保持对设备群的更新，并可免费安全管理无限数量的设备。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理他们的Web应用程序和服务器。每月免费提供25次git部署
  * [runcloud.io](https://runcloud.io/) - 主要针对[PHP](https://www.php.net/)项目的服务器管理。免费适用于1个服务器。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，用于轻松管理和部署服务器和网站。适用于1个服务器免费。

**[⬆️ 返回顶部](#目录)**

## 消息和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，具有在线状态、持久化和保证交付功能。免费计划包括每月300万条消息、100个峰值连接和100个峰值通道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — 作为服务的[RabbitMQ](RabbitMQ 消息代理)。Little Lemur计划：每月最多100万条消息、最多20个并发连接、最多100个队列、最多10,000条排队消息、多个节点在不同的可用区（AZ's）
  * [courier.com](https://www.courier.com/) — 单个API用于推送、应用内、电子邮件、聊天、短信和其他消息通道，具有模板管理和其他功能。免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 开发者的多通道通知基础设施，具有预先构建的应用内收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的[MQTT](MQTT协议)设备连接到Cloud Native IoT消息代理。免费连接最多100个设备（无需信用卡）并永久保留。
  * [knock.app](https://knock.app) – 开发者的通知基础设施。发送到多个通道，如应用内、电子邮件、短信、Slack和推送，使用单个API调用。免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟内向任何软件添加用户通知。免费计划包括每月10,000条通知+100条短信和自动呼叫。
  * [Novu.co](https://novu.co) — 开发者的开源通知基础设施。简单的组件和API用于在一个地方管理所有通信通道：电子邮件、短信、直接、应用内和推送。免费计划包括每月30,000条通知，保留期为90天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最多100k日志行，保留24小时
  * [logentries.com](https://logentries.com/) — 每月最多5 GB，保留七天
  * [loggly.com](https://www.loggly.com/) — 单用户免费，200MB/天，保留七天
  * [logz.io](https://logz.io/) — 每天最多1 GB，保留一天
  * [ManageEngine Log360 云](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费计划提供50 GB存储空间，15天存储保留和7天搜索。
  * [papertrailapp.com](https://papertrailapp.com/) — 48小时搜索，七天存档，50 MB/月
  * [sematext.com](https://sematext.com/logsene) — 每天最多500 MB，保留七天
  * [sumologic.com](https://www.sumologic.com/) — 每天最多500 MB，保留七天
  * [logflare.app](https://logflare.app/) — 每个应用每月最多12,960,000条日志，保留3天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月最多1 GB，保留三天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月最多1,000个用户活动日志，保留1个月，适用于最多5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月200 GB的摄入量免费，保留15天

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 不限项目、字符串和协作者适用于开源（Open Source）项目
  * [gitlocalize.com](https://gitlocalize.com) - 面向私有和公有仓库免费不限量
  * [Lecto](https://lecto.ai/) --Free翻译API（30个免费请求，每个请求1000个翻译字符）。集成了Wordpress的Loco Translate插件。
  * [lingohub.com](https://lingohub.com/) — 最多3个用户免费，开源项目永远免费
  * [localazy.com](https://localazy.com) - 1000个源语言字符串免费，语言、贡献者不限，初创公司和开源项目优惠
  * [Localeum](https://localeum.com) - 最多1000个字符串，一个用户，语言、项目不限，免费
  * [localizely.com](https://localizely.com/) — 开源项目免费
  * [Loco](https://localise.biz/) — 最多2000个翻译，翻译人员不限，每个项目最多10种语言，1000个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 限制免费版最多5个用户，开源项目免费
  * [POEditor](https://poeditor.com/) — 最多1000个字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多100个翻译键，字符串不限，语言不限，初创公司优惠
  * [Texterify](https://texterify.com/) - 单用户免费
  * [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 开源项目免费
  * [Translation.io](https://translation.io) - 开源项目免费
  * [Translized](https://translized.com) - 最多1000个字符串，一个用户，语言、项目不限，免费
  * [webtranslateit.com](https://webtranslateit.com/) — 最多500个字符串免费
  * [we

## Monitoring

  * [UptimeObserver.com](https://uptimeobserver.com) - 可以获得20个运行时间监控器，间隔时间为5分钟，还有一个可自定义的状态页面，即使用于商业用途也可以。通过电子邮件和Telegram可以享受无限制的实时通知，不需要信用卡即可开始使用。
  * [Pingmeter.com](https://pingmeter.com/) - 5个运行时间监控器，间隔时间为10分钟。可以监控SSH、HTTP、HTTPS和任何自定义的TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 为前端（FE）、后端（BE）、数据库（DB）等提供免费的应用性能监控（APM）和监控，另外还包括免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 免费提供24小时的指标数据，应用性能管理代理仅限于一个Java、一个.NET、一个PHP和一个Node.js。
  * [appneta.com](https://www.appneta.com/) — 免费，数据保留时间为1小时。
  * [appspector.com](https://appspector.com/) - البته远程iOS/Android/Flutter调试的任务控制中心。对于小流量使用（64MB日志）是免费的。
  * [assertible.com](https://assertible.com) — 自动化API测试和监控。为团队和个人提供免费计划。
  * [bleemeo.com](https://bleemeo.com) - 免费适用于3个服务器，5个运行时间监控器，úmero用户，úmero仪表盘，没有限量的报警规则。
  * [checklyhq.com](https://checklyhq.com) - 开源的E2E（从端到端）/合成监控和深度API监控，适合开发者。免费计划包括五个用户和50k+检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — 适用于AWS的安全性和配置监控。免费：不限量的按需扫描，不限量用户，不限量存储账号。订阅：自动扫描，API访问等。
  * [crontitor.io](https://crontitor.io/) - 为cron作业

  * [sematext.com](https://sematext.com/) — 为24小时指标、无限服务器、十个自定义指标、500,000个自定义指标数据点、无限仪表盘、用户等提供免费服务。
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron和SSL监控，每个类别提供5个免费监控器。
  * [sitesure.net](https://sitesure.net) - 网站和Cron监控，提供2个免费监控器。
  * [skylight.io](https://www.skylight.io/) — 前100,000个请求免费（仅适用于Ruby on Rails）。
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等。
  * [stathat.com](https://www.stathat.com/) — 启动十个统计项，免费且无限期。
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，免费测试无限，但有限制。
  * [statusgator.com](https://statusgator.com/) — 状态页监控，提供3个免费监控器。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、在线监控、DNS和域名监控。免费监控10个服务器、10个在线时间和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控，提供3个位置和20个主要Web服务的免费数据馈送。
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，提供50个免费监控器。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 为5个网站提供免费监控，60秒间隔，公共状态页。
  * [zenduty.com](https://www.zenduty.com/) — 端到端事件管理平台，适用于网络运营、网站可靠性工程和DevOps团队，支持警报、值班管理和响应编排。最多5个用户免费。
  * [instatus.com](https://instatus.com

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 使用截图和点击轨迹的JavaScript错误追踪。对于开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始化试用后免费，适用于每月高达2,000个错误
  * [elmah.io](https://elmah.io/) — 网页开发者的错误日志记录和运行时间监控。对于开源项目提供免费的Small Business订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。对于小团队每年最多1百万用户会话免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000个事件/1个用户免费。开源，易于自行托管以实现无限制使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误追踪。兼容开源Sentry SDK。每月1,000个事件免费，或者可以自行托管以无限制使用
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和cron监控。对于小团队和开源项目免费（每月12,000个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观察性和调试平台。对于[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备，前100个设备免费。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5,000个错误，不限制用户，30天保留
  * [sentry.io](https://sentry.io/) — Sentry实时跟踪应用异常，并且有一个小的免费计划。每月5,000个错误/1个用户免费，若自行托管则无限制使用
  * [Axiom](https://axiom.co/) — 存储最多0.5 TB的日志，保留30天。包含与Vercel等平台

## Search

  * [algolia.com](https://www.algolia.com/) — 支持有 [ spell-check（拼写检查） ]、相关性和 UI 库的托管搜索解决方案，使得轻松创建搜索体验。免费的 "Build" 计划包含 1M 文档和 10K 次搜索/月。还提供免费的 [开发人员文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费 1 GB 内存和 1 GB 存储
  * [CommandBar](https://www.commandbar.com/) - 统一搜索条（Unified Search Bar）作为服务，基于 Web 的 UI 小部件/插件，允许您的用户在您的产品中搜索内容、导航、功能等，从而提高发现能力。最多 1,000 名月度活跃用户免费，命令无限制。
  * [Magny](https://magny.io) - SaaS 服务，帮助实现命令面板（例如应用内搜索），显著减少用户在应用中查找任何内容的时间，利用用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费 3 个索引，100K 文档/索引，无限制全文/向量/混合搜索，60 天分析
  * [searchly.com](http://www.searchly.com/) — 免费 2 个索引和 20 MB 存储

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析（Data Analysis）、信息安全（Information Security）、网页开发（Web Development）等领域的免费课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，具有专注于JavaScript和Ruby的网页开发课程。
  * [免费专业简历模板和编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，包含大量简历模板，来自经验丰富的专业人士，能够克隆、编辑和下载，符合申请者跟踪系统（ATS）优化。
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 行业领先专家的免费短期课程，能够在一个小时内或更短时间内使用最新的生成式人工智能工具和技术获得实践经验。
  * [LabEx](https://labex.io) - 通过交互式实验室和实际项目开发Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 覆盖开发的所有方面，从区块链（Blockchain）到用户体验设计（UX Design）的免费学习路线图。
  * [Cisco网络学院，技能提升](https://skillsforall.com/) - 提供网络安全、网络和Python等领域的免费认证课程。
  * [MIT开放课程](https://ocw.mit.edu/) - MIT开放课程是超过2,500门MIT课程材料的在线出版物，与全球学习者和教育者免费分享知识。可以在YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)中找到。
  * [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等网页开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 基本和高级HTML/CSS、JavaScript和SQL的免费在线指南。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱用于测试。
  * [AhaSend](https://ahasend.com) - 交易型邮件服务，每月免费发送1000封邮件，支持无限域名、团队成员、Webhooks和邮件路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮箱转发服务，可以免费创建无限个邮箱别名。
  * [Antideo](https://www.antideo.com) — 每小时10个API请求用于邮箱验证、IP和电话号码验证，不需要信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封邮件免费。
  * [OneSignal](https://onesignal.com/) — 每月1万封邮件，不需要信用卡。
  * [Bump](https://bump.email/) - 免费10个Bump邮箱 地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费5个Burner邮箱地址，1个邮箱，7天邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 新闻通讯服务，免费支持最多100个订阅者。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收和发送邮件，每月免费发送1万封邮件。
  * [Contact.do](https://contact.do/) — 联系表单链接（类似Bitly的联系表单）。
  * [debugmail.io](https://debugmail.io/) — 值得信赖的测试邮件服务器，开发人员易于使用。
  * [DNSExit](https://dnsexit.com/) - 每个域名可免费使用两个邮箱，每个邮箱支持100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封邮件。
  * [EmailOctopus](https://emailoctopus.com) - 免费支持最多2500个订阅者和每月1万封邮件。
  * [EmailJS](https://www.emailjs.com

  * [QuickEmailVerification](https://quickemailverification.com) — 每天验证 100 封电子邮件的免费服务，包括其他免费 API，如 DEA 检测器、DNS 查询、SPF 检测器等。
  * [Resend](https://resend.com) - 用于开发者的交易电子邮件 API，每月 3,000 封电子邮件，每天 100 封电子邮件免费，一个自定义域名。
  * [Sender](https://www.sender.net) 每月最多 15,000 封电子邮件，最多 2,500 名订阅者
  * [SendGrid](https://sendgrid.com/) — 每天 100 封电子邮件和 2,000 名联系人免费
  * [Sendpulse](https://sendpulse.com) — 每月 500 名订阅者，每月 15,000 封电子邮件免费
  * [SimpleLogin](https://simplelogin.io/) – 开源、自托管的电子邮件别名/转发解决方案。免费 5 个别名，无限带宽，无限回复/发送。为教育工作者（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 无限免费新闻稿服务。当您开始收费时开始付费。
  * [Sweego](https://www.sweego.io/) - 面向开发者的欧洲交易电子邮件 API，每天 500 封电子邮件免费。
  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，轻松发送电子邮件。每月 500 封交易电子邮件免费。
  * [temp-mail.io](https://temp-mail.io) — 免费的一次性临时电子邮件服务，支持同时使用多个电子邮件地址和转发
  * [tinyletter.com](https://tinyletter.com/) — 每月 5,000 名订阅者免费
  * [Touchlead](https://touchlead.app) - 一个多功能的营销自动化工具，包括潜在客户管理、表单生成器和自动化。针对有限数量的潜在客户和自动化免费。
  * [trashmail.com](https://www.trashmail.com) - 免

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat（配置猫）是一种面向开发者的功能标志服务，具有无限团队大小、优秀的支持和合理的价格标签。免费计划包含最多10个标志、两个环境、1个产品和每月500万个请求。
  * [Flagsmith](https://flagsmith.com) - 按照您的意愿发布功能；在Web、移动和服务器端应用程序中管理功能标志。使用我们的托管API、部署到自己的私有云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能标志和A/B测试提供者，具备内置的贝叶斯统计分析引擎。最多3个用户免费使用，无限功能标志和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能标志、A/B测试、分析和应用配置，具有Git风格的版本控制和同步、内存、本地标志评估。最多5个团队成员免费使用，无限功能标志和A/B测试。
  * [Molasses](https://www.molasses.app) - 强大的功能标志和A/B测试。最多3个环境免费使用，每个环境有5个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能切换管理平台。免费计划包含最多10个标志、2个环境和无限请求。SDK、分析仪表盘、发布日历、Slack通知和所有其他功能都包含在无限免费计划中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析和更多的强大平台。其慷慨的免费计划提供无限座位、标志、实验和动态配置，支持每月最高100万个事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志和A/B测试。配置即代码和完全类型化的TypeScript SDK。与Next.js和React等框架有强大的集成。慷慨的免费级别和廉价的扩展选项。

**[⬆️

## 字体

  * [dafont](https://www.dafont.com/) - 这个网站上的字体是其作者的财产，可以是免费软件（freeware）、共享软件（shareware）、演示版本（demo versions）或公共领域（public domain）。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器（Units Converter）、字体暗示（Font Hinter）和字体提交者（Font Submitter）。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 为商业工作授权的免费字体。手工挑选这些字体，并以容易使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以轻松快速地通过下载或链接到Google的[内容分发网络（CDN）](https://zh.wikipedia.org/wiki/%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9C) 在网站上安装。
  * [FontGet](https://www.fontget.com/) - 提供各种可下载的字体，且以标签（tags）整齐分类。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个日益增长的专业级字体集合，个人和商业用途100%免费。
  * [Befonts](https://befonts.com/) - 提供多种适用于个人或商业用途的独特字体。
  * [Font of web](https://fontofweb.com/) - 确定网站中使用的所有字体及其使用方法。
  * [Bunny](https://fonts.bunny.net) 面向隐私的 [Google Fonts](https://zh.wikipedia.org/wiki/Google_Fonts) 
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体用于个人使用，可以输入文本进行快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) 免费和开源服务，使用CSS将字体家族交付给网站。
  * [Fontsensei](https://fontsensei.com/) 来自用户的开源 [Google Fonts](https://fonts.google.com

## 表单

  以下是Markdown文本的中文翻译版本：

* [Feathery](https://feathery.io) - 强大的、开发者友好的表单构建工具（表单构建工具）。可以构建注册和登录、用户引导、支付流程、复杂的金融应用程序等。免费计划每月允许250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。包括垃圾邮件过滤、电子邮件通知和自动响应、Webhooks、Zapier、重定向、AJAX或POST等。免费计划提供无限表单、20次提交/月，并且带有Form-Data徽章可获得额外2000次提交。
  * [FabForm](https://fabform.io/) - 表单后端平台，适用于智能开发人员。免费计划每月允许250次表单提交。友好的现代GUI。集成Google Sheets、Airtable、Slack、Email等。
  * [Form.taxi](https://form.taxi/) - HTML表单提交端点。包括通知、垃圾邮件拦截器和GDPR合规数据处理。基本使用的免费计划。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划允许100次月提交。
  * [formingo.co](https://www.formingo.co/)- 静态网站简单HTML表单。无需注册帐户即可开始使用。免费计划每月允许500次提交和可自定义的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，50次月提交，垃圾邮件保护，电子邮件通知和可以导出HTML的拖放设计师。其他功能包括自定义字段规则、团队和集成到Google Sheets、Slack、ActiveCampaign和Zapier。
  * [formlets.com](https://formlets.com/) - 在线表单，无限单页表单/月，100次提交/月，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子邮件服务，免费计划允许无限表单，250次

  * [Sprig](https://sprig.com/) - 每月1个产品内调查或带回放的调查，附带GPT（[通用预训练模型，General Pre-trained Transformer](https://baike.baidu.com/item/%E9%80%9A%E7%94%A8%E9%A2%84%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B)）的人工智能分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集25条反馈estreabilité提交。提供React和Vue组件，易于集成。
**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [Keywords AI](https://keywordsai.co)（关键词AI）- 最好的LLM监控平台。使用两行代码调用200+个LLM，且每月有10,000次免费请求，平台功能完全免费！
  * [Portkey](https://portkey.ai/)（宝物管理面板）- 生成式AI应用的控制面板，包括可观察性工具包和AI网关。每月可发送并记录多达10,000次请求，完全免费。
  * [Braintrust](https://www.braintrustdata.com/)（大脑信托）- 生成式AI的评估、提示游乐场和数据管理。免费计划提供每周最多1,000行私人评估数据。
  * [Findr](https://www.usefindr.com/)（查找器）- 通用搜索工具，允许同时搜索所有应用。搜索助手可以使用您的信息回答问题。免费计划提供无限统一搜索和每天5次协助查询。
  * [ReportGPT](https://report-gpt.io)（报告GPT）- AI驱动的写作助手。整个平台完全免费，只需要您提供自己的API密钥。
  * [Clair](https://askclair.ai/)（克莱尔）- 临床AI参考。学生可以免费访问专业工具套件，包括开源搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。另外，还有专业套件的免费试用。
  * [Langtrace](https://langtrace.ai)（语言跟踪）- 允许开发人员跟踪、评估、管理提示和数据集，调试与LLM应用程序性能相关的问题。它为任何LLM创建开放遥测标准跟踪，有助于可观察性，并且可以与任何可观察性客户端合作。免费计划提供每月50,000次跟踪。
  * [Ultra AI](https://ultraai.app)（超级AI）- 您产品的AI命令中心。功能包括多提供商AI网关、提示管理、缓存、日志、分析、模型回退和用户速率限制。永久免费计划提供每月10,000+次请求和除缓存外的所有功能。


## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.githubusercontent.com/) — [Bootstrap](Bootstrap 框架) 的 [CDN](内容分发网络)，还包括 [Bootswatch](Bootswatch 主题) 和 [Font Awesome](Font Awesome 图标库)
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发。是开源的 [CDN](内容分发网络) 服务，已被超过 11% 的网站信任，由 [Cloudflare](Cloudflare) 提供支持。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google 内容分发网络，用于托管最流行的开源 [JavaScript](JavaScript 编程语言) 库
  * [Stellate](https://stellate.co/) - Stellate 是针对 [GraphQL](GraphQL 查询语言) API 的超快、可靠的 [CDN](内容分发网络)，可免费使用两个服务。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源 [CDN](内容分发网络)，支持 [npm](npm 包管理器)、[GitHub](GitHub 代码托管平台)、[WordPress](WordPress 内容管理系统)、[Deno](Deno 编程语言) 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft [Ajax](Ajax 异步请求) [CDN](内容分发网络)，托管流行的第三方 [JavaScript](JavaScript 编程语言) 库，如 [jQuery](jQuery 库)，并允许轻松将它们添加到 Web 应用程序中。
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费 [DDoS](Distributed Denial of Service) 保护和 [SSL](Secure Sockets Layer) 证书
  * [Skypack](https://www.skypack.dev/) — 100% 原生 [ES Module](ECMAScript 模块) [JavaScript](JavaScript 编程语言) [CDN](内容分发网络)，每个域名每月可免费使用 1 百万次请求。
  * [raw.githack.com](https://raw.githack.com/) — 现代替代 [rawgit.com](rawgit.com)，利用

## PaaS

  * [anvil.works](https://anvil.works) - 使用 Python 进行 Web 应用开发，不需要其他编程语言。免费版本提供无限应用和 30 秒超时。
  * [appwrite](https://appwrite.io) - 无限项目，不暂停项目（支持 WebSockets）和身份验证服务。免费版本每个项目提供 1 个数据库，3 个桶，5 个函数。
  * [configure.it](https://www.configure.it/) - 移动应用开发平台，免费版本可用于两个项目，功能有限，但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 开源、跨平台、移动应用开发工具链，适用于 Java/Kotlin 开发者。免费版本可用于商业用途，无项目数量限制。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，具有自动从 TypeScript 代码生成的视觉 CMS。内置 A/B 测试、内容分段和实时分析。适合内容密集和企业电子商务网站。免费版本可用于每月 5k 页面浏览量或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，在全球边缘运行 JavaScript、TypeScript 和 WebAssembly。免费版本每天包括 100,000 个请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) - Linux 主机服务，提供与 GitHub、SSH 和 MariaDB/Postgres 数据库的 CI/CD。免费版本有 1 GB 存储和 1 GB 网络/月限制，并且仅限于免费域名。
  * [encore.dev](https://encore.dev/) - 后端框架，使用静态分析提供自动基础设施、无需样板代码等。包括免费云托管，适用于爱好者项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 使用 Git 推送式工作流，在自己的 AWS 账户上部署 Web 服务、数据库等。免费版本适用于个人 GitHub 存储库的单个开发者。AWS 成本由 AWS 账单，但可以使用抵用券和 AWS 免费版本。
  * [gig

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化工作流来将多个应用连接在您的应用程序后端。例如，当您的应用程序触发事件时，发送Slack消息或将Google表格行添加到您的应用程序。每月最多可执行5,000项任务的免费服务。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse（解析）平台的后端服务，易于使用、灵活且可扩展。
  * [backendless.com](https://backendless.com/) — 面向移动端和Web端的后端服务，提供1 GB的文件存储、每月50,000条Push通知和1,000条数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在我们的函数运行时和托管存储上引导您的Python API，免费构建和托管在我们的在线编辑器或使用您喜欢的工具在本地。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，用于构建和部署数字创新。访问一个全面、个性化的沙盒，包括平台、SDK和一个可以用于构建和定制应用的组件库。
  * [connectycube.com](https://connectycube.com) - 无限聊天消息、点对点语音和视频通话、文件附件和推送通知。对于最多1000个用户的应用程序免费使用。
  * [convex.dev](https://convex.dev/) - 反应式后端服务，托管您的数据（包含关系的文档和可序列化的ACID事务）、无服务器函数和WebSockets以流式传输更新到各种客户端。适用于小型项目免费 - 最多1M记录、5M每月函数调用。
  * [darklang.com](https://darklang.com/) - 结合编辑器和基础设施的托管语言。在测试阶段可访问，测试后计划提供慷慨的免费版本。
  * [Firebase](https://firebase.com) — Firebase帮助您构建和运行成功的应用程序。免费的Spark计划

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个低代码平台，用于构建具有可自定义的移动和 Web 应用的业务流程应用程序，提供拖放界面、离线支持、实时位置跟踪和与各种第三方服务集成等功能。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表盘。支持 SQL 数据库和 REST API。
  * [BudiBase](https://budibase.com/) — Budibase 是一个开源低代码平台，用于在几分钟内创建内部应用程序。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。与 15+ 个数据库和任何 API 进行集成。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用程序。连接到数据库、云存储、GraphQL、API 端点、Airtable 等，使用拖放应用程序构建器构建应用程序。
  * [ReTool](https://retool.com/) — 低代码平台，用于构建内部应用程序。Retool 非常灵活。如果可以使用 JavaScript 和 API 编写，它可以在 Retool 中实现。免费层允许每月最多 5 个用户，不限应用程序和 API 连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ - 一个低代码平台，帮助工程团队和产品经理以 10 倍的速度构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板和运营应用程序。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud - 一个健壮的开源低代码平台，用于开发内部工具。使用 ILLA 的组件和操作库，开发人员可以节省大量构建工具的时间。对于 5 名团队成员免费。
  * [outsystems.com](https://www.outsystems.com/) — 内置开发环境 PaaS，用于本地或云环境

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 提供100 MB免费的Web托管服务，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费的Web托管和免费的短域名，支持PHP、MySQL、应用安装器、电子邮件发送和无广告。
  * [Bohr](https://bohr.io) — 免费用于非商业项目的开发者主导部署和开发平台，减少基础设施麻烦，快速设置。
  * [Bubble](https://bubble.io/) — 通过视觉编程构建Web和移动应用，无需代码，带有Bubble品牌。
  * [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化Web托管平台，专注于提高正常运行时间和安全性，为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在应用平台的入门级别上免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 从Google Drive和OneDrive直接托管到Web，仅限静态站点，永久免费，每个Google/Microsoft账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个用于托管本地站点和实时共享站点的开发者桌面应用，使用其美观的用户界面、API和/或CLI。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上构建和托管基于Markdown的文档站点，您甚至可以从API定义文件为您的站点自动生成API参考。站点托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管具有PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子域名、免费域名托管、

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费公共DNS解析器，速度快且安全（加密您的DNS查询），由[Cloudflare](https://www.cloudflare.com/（云flare，内容交付网络）提供。可用于绕过您的网络服务提供商的DNS拦截，防止DNS查询窥探，并[屏蔽成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：仅为DNS解析器，不是DNS主机。
  * [1984.is](https://www.1984.is/product/freedns/) —带有API和许多其他免费DNS功能的免费DNS服务。
  * [cloudns.net](https://www.cloudns.net/) —最多支持1个域名的免费DNS主机，包含50条记录
  * [deSEC](https://desec.io) - 带有API支持的免费DNS主机，注重安全。运行在开源软件上，得到[SSE](https://www.securesystems.de/（安全系统）支持。
  * [dns.he.net](https://dns.he.net/) —带有动态DNS支持的免费DNS主机服务
  * [Zonomi](https://zonomi.com/) —带有即时DNS传播的免费DNS主机服务。免费计划：1个DNS区域（域名）包含最多10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) —免费DNS主机。
  * [duckdns.org](https://www.duckdns.org/) —免费DDNS服务，免费版最多支持5个域名。包含各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) —带有[API支持](https://dynv6.com/docs/apis)和大量DNS记录类型管理（如CNAME、MX、SPF、SRV、TXT等）的免费DDNS服务。
  * [freedns.afraid.org](https://freedns.afraid.org/) —免费

## 域名

  * [eu.org](https://nic.eu.org) — 免费的 eu.org 域名（[欧盟组织](European Union））。通常在14天内审核通过。
  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 与 [AWS](Amazon Web Services, 亚马逊云服务) S3 兼容 - 支持S3的APIs、接口操作、[CLI](命令行接口, Command Line Interface)、及其他上传方法，以安全、方便、高效的方式上传和存储来自 [IPFS](星际文件系统, InterPlanetary File System) 和 [Arweave](Arweave区块链, 一种去中心化存储解决方案) 网络的文件。注册用户可获得6 GB的IPFS存储空间和300MB的Arweave存储空间，免费使用。任何小于150 KB的Arweave文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) — [Backblaze](Backblaze, 一家云存储公司) B2云存储。永久免费10 GB（类似 [Amazon S3](亚马逊简单存储服务) ）对象存储。
  * [filebase.com](https://filebase.com/) - 受[区块链](Blockchain)驱动的S3兼容对象存储。5 GB免费存储，有效期不限。
  * [Tebi](https://tebi.io/) - 支持S3兼容的对象存储。免费25 GB存储空间和250GB的出站传输带宽。
  * [Idrive e2](https://www.idrive.com/e2/) - 支持S3兼容的对象存储。10 GB免费存储空间，每月10 GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - 支持S3兼容的对象存储。15 GB免费存储空间，每月15 GB下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，采用开源数据平台。单节点，1 CPU，1GB RAM，PostgreSQL 和 MySQL unterstüt_ft(storage) 5GB。易于迁移到更大型计划或跨云服务。
  * [airtable.com](https://airtable.com/) — 跟 spreadsheet 类似，但它是一个关系数据库，unlimited bases，每个基数最多 1,200 行，且每月最多 1,000 个 API 请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 基于 [Cassandra](https://en.wikipedia.org/wiki/Apache_Cassandra) 的云原生服务，具有 80GB 免费包（[Pricing](https://www.datastax.com/products/datastax-astra/pricing)）
  * [codehooks.io](https://codehooks.io/) —易于使用的 JavaScript 服务，Serverless API/后端和 NoSQL 数据库服务，包括函数、类似 MongoDB 的查询、键值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划包括 5GB 存储和每分钟 60 个 API 调用。包含 2 个开发者。无需信用卡。
  * [CrateDB](https://crate.io/) - 面向实时分析的分布式开源 SQL 数据库。[免费套餐 CRFREE](https://crate.io/lp-crfree)：单节点、2 CPU、2GiB 内存、8GiB 存储。每个组织一个集群，不需要付款方式。
  * [FaunaDB](https://fauna.com/) — 服务器端云数据库，具有原生 GraphQL、多模型访问和每日免费套餐，最高 100 MB
  * [Upstash](https://upstash.com/) — 服务器端 Redis，免费套餐最多每天 10,000 次请求，最大数据库大小 256MB，最多 20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费套餐提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — 对 Redis 的在线实时监控

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 在 localhost 上使用单一命令创建公共 URL，无需下载。支持 HTTPS / TCP / TLS 隧道。免费计划的隧道生命周期为 60 分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio 扩展，用于将 IIS Express 暴露给本地网络或通过隧道暴露给公共 URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi 是一个托管的 VPN 服务，允许您安全地将 LAN 类型的网络扩展到分布式团队中，免费计划允许创建无限网络，最多 5 人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的套接字即服务平台，部署 WebSocket 服务器代码时提供 wss:// URL，同时允许监视其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露给公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露给公共 URL。免费托管版本和 [开源](https://github.com/localtunnel/localtunnel) 版本。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露给公共 URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露给互联网。无需安装，无需注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过 VPN 连接多台计算机，实现 LAN 类型的网络。无限对等节点。(Hamachi 的替代品)
  * [segment.com](https://segment.com/) —.translate 和 route 事件到其他第三方服务的中心。100,000 事件/月免费
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和SCRUM软件，适用于最多5名团队成员
  * [asana.com](https://asana.com/) — 私人项目可免费使用，有collaborators（协作者）参与
  * [Backlog](https://backlog.com) — 一个包含所有功能的项目管理平台。免费计划提供1个项目，十个用户和100MB的存储空间。
  * [Basecamp](https://basecamp.com/personal) - 任务列表、里程碑管理、类似论坛的消息、文件共享和时间跟踪。最多3个项目，20个用户和1GB的存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 企业内部网和项目管理工具。免费计划有5GB存储空间，适用于无限用户。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、UML、网络图。免费版本最多15个用户/图表，25个表格
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克牌，节省冲刺估计的时间。可免费使用，适用于最多5个用户，免费的Jira集成，视频通话无限，团队和会议次数无限。
  * [clickup.com](https://clickup.com/) — 项目管理。免费版本，云存储的高级版本。移动应用和Git集成可用。
  * [Clockify](https://clockify.me) - 时间跟踪和时间表应用程序，可以跨项目跟踪工作小时数。无限用户，免费使用。
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的架构图表，只需几分钟，使用Cloudcraft的可视化设计器，针对AWS进行优化，并展示智能组件的实时数据。免费计划提供单用户的无限私有图表。
  * [Codegiant](https://codegiant.io) — 项目管理，包含仓库托管和CI/CD。免费计划提供无限仓库、项目和文档，适用于5名团队成员。

  * [plan.io](https://plan.io/) — 项目管理，包含仓库托管和更多选项。免费版支持两名用户、十个客户和500MB存储
  * [Plane](https://plane.so/) - Plane是一个简单、可扩展、开源的项目和产品管理工具。免费版支持无限成员、最多5MB文件上传、1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费在线规划扑克（估算工具）
  * [point.poker](https://www.point.poker/) - 在线规划扑克（基于共识的估算工具）。免费版支持无限用户、团队、会议、回合和投票，无需注册。
  * [ScrumFast](https://www.scrumfast.com) - Scrum板，具有非常直观的界面，免费版支持最多5名用户。
  * [Shake](https://www.shakebugs.com/) - 移动应用内的Bug报告和反馈工具。免费版， 每个应用每月十个Bug报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台。免费版支持最多10名用户，永久有效。
  * [Tadum](https://tadum.app) - 为定期会议设计的会议议程和笔记应用，免费版支持最多10名用户。
  * [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发者的项目管理平台，免费版支持开源项目
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费版不限制任务、冲刺、工作空间的数量。
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板和Scrum到几乎任何业务流程。免费版支持无限用户，最多1,000个数据实体 {[更多信息](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费版包含一个工作空间，具有无限任务和项目；1GB文件存储；1周项目历史；以及每个视频会议最多五名与

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，具有无限速率、无限带宽、无限文件数量、无限下载数量等功能。主要面向Android开发相关文件，如APK构建、自定义ROM和修改等，但也接受其他类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — Borg Backup 的简单安全的异地备份托管。10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB免费存储
  * [sync.com](https://www.sync.com/) - 端到端的云存储服务。5 GB的免费存储
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10 GB的免费存储
  * [sirv.com](https://sirv.com/) — 智能图像CDN，具备实时图像优化和调整大小功能。免费层包括500 MB的存储和2 GB的带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，在全球拥有1500+个节点。提供各种图像调整大小、压缩和加水印功能。支持响应式图像、360度图像和图像编辑的开源插件。免费月度计划，包含25GB的CDN流量、25GB的缓存存储和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 图像上传、强大的处理、存储和传递，支持Ruby、Python、Java、PHP、Objective-C等库。免费层包含25个月度积分，一个积分等于1000次图像转换、1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) — 提供将媒体嵌入网页、响应式图像缩放和从网页提取元素的API。免费适用于每月5000个URL，速率为每秒15个请求
  * [filestack.com](https://www.filestack.com/) — 文件选择器、转换和传递，免费适用于250个文件

  * [imagekit.io](https://imagekit.io) – 图片内容分发网络（Image CDN），具有自动优化、实时转换和存储功能，可以在几分钟内与现有设置集成。免费计划包含每月高达20GB的流量。
  * [internxt.com](https://internxt.com) – Internxt Drive是一个基于绝对隐私和严格安全的零知识文件存储服务。注册并免费获得10 GB的存储空间，永久有效！
  * [degoo.com](https://degoo.com/) – 基于人工智能（AI）的云存储，免费使用空间高达20 GB，支持三个设备，推荐奖励5 GB（账户90天不活动）。
  * [MConverter.eu](https://mconverter.eu/) – 批量转换文件，支持多种文件格式，包括像[AVIF](https://mconverter.eu/convert/to/avif/)这样的新格式。从视频中提取所有图像帧。免费使用，每天处理十个100MB文件，分批处理每次两个文件。
  * [ImageEngine](https://imageengine.io/) – ImageEngine是一个易于使用的全局图片内容分发网络（CDN）。设置时间不到60秒，支持AVIF和JPEGXL，具有WordPress、Magento、React、Vue等插件。[此处](https://imageengine.io/developer-program/)注册您的免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 由GPT驱动的PDF和图像转换为结构化数据（JSON、CSV、EXCEL格式）的AI处理。每月免费30次。

**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 一个免费的 [Stock](存储) 图片、音频和视频的精选列表。
  * [Float UI](https://floatui.com/) - 一个免费的网页开发工具，用于快速创建具有时尚设计的现代响应式网站，适用于非设计师。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供了由 Ant Motion 的运动组件构建的模板。它具有丰富的首页模板，下载模板代码包，即可快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) — 一个完整的 [Coding](编码) 平台，侧重于开发者和设计师之间的合作，用于构建、记录、发布、扩展和维护 [Design Systems](设计系统)。免费计划允许最多 3 个编辑器对一个设计系统进行编辑，并且提供无限的查看者。
  * [BoxySVG](https://boxy-svg.com/app) — 一个可以安装的免费 Web 应用程序，用于绘制 [SVG](可缩放矢量图形) 并以 SVG、PNG、JPEG 等格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 一个免费的在线工具，用于创建社交媒体幻灯片。
  * [Circum Icons](https://circumicons.com) - 为 [React](响应式框架)、[Vue](视图框架)、[Svelte](斯维尔特框架) 提供的一致的开源图标，例如 SVG。
  * [clevebrush.com](https://www.cleverbrush.com/) — 一个免费的图形设计/照片拼贴应用程序，也提供付费的集成组件。
  * [cloudconvert.com](https://cloudconvert.com/) — 可以将任何格式转换为其他任何格式，支持 208 种格式，包括视频和 GIF。
  * [CodeMyUI](https://codemyui.com) - 一份手工收集的 Web 设计和 UI 灵感代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶

  * [storyset.com](https://storyset.com/) — 使用此工具创建令人难以置信的定制插图。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模型。
  * [tabler-icons.io](https://tabler-icons.io/) — 1500多个免费的复制和粘贴SVG可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 根据名字生成带有首字母的头像。可直接在Web应用中热链_URL。
  * [unDraw](https://undraw.co/) - 一个不断更新的美丽SVG图片集合，可完全免费使用，不需要署名。
  * [unsplash.com](https://unsplash.com/) - 免费的商用和非商用股票照片（随意使用许可）。
  * [vectr.com](https://vectr.com/) — 适用于Web + 桌面免费设计应用。
  * [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，最多三个步骤/步骤的免费计划。
  * [Webflow](https://webflow.com) - 拥有动画和网站托管功能的可视化网站生成器，前两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 基于tailwindcss设计的可视化网站生成器。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。创建最多四个免费板块。
  * [Zeplin](https://zeplin.io/) — 健全的设计师和开发者协作平台。显示设计、资产和样式指南，单个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 创建和编辑引人入胜的、独特的图形和图像。
  * [Responsively App](https://responsively.app) - 快速精确的响应式Web应用开发的免费开发工具。
  * [SceneLab](https://scenelab.io) - 带有不断增加的免费设计模板集合的在线模拟图形编辑器
  *

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 设计师们投票选出的最佳设计网站汇集地。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示自己的作品的平台，支持按类别（如UI/UX项目）筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感收集，通常不来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好，找到用于设计灵感的最佳登陆页。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登陆页 / UI KIts / 网页截图] Lapa Ninja 是一个展示了来自全球网络上最佳的6025个登陆页例子、提供免费的设计书籍和UI套件的画廊。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登陆页设计] 经常更新的登陆页截图，包括桌面、平板和移动设备的截图。
  * [Mobbin](https://mobbin.design/) - [移动设备截图] 通过我们库中超过50,000张全可搜索的移动应用截图，节省您的UI & UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动设备截图] 探索来自非洲和世界各地领先公司的移动端和Web UI设计。
  * [移动模式](https://www.mobile-patterns.com/) - [移动设备截图] 一个设计灵感库，特点是精心挑选的UI UX模式（适用于iOS和Android），供设计师、开发者和产品制作者参考。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频和截图] 许多移动和网页应用的完整流程视频，包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动设备截图] 获取灵感并跟上最新的Web & 移动应用UI设计趋势，支持按模式和应用筛选。
  * [scrnshts

## 数据地图可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 免费的 DEVELOPER 计划，每月 30K 次请求。
  * [carto.com](https://carto.com/) — 从您的和公共数据创建地图和地理空间 API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样工作的地图工具。每月五万次免费查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 适用于 web、桌面和移动设备的地图、地理空间数据存储、分析、地理编码、路由等 API 和 SDK。每月免费基础地图瓦片 200 万次，非存储地理编码 20,000 次，简单路线 20,000 次，驾驶时间计算 5,000 次，免费瓦片和数据存储 5GB。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、场所搜索和 Places API 和 Pilgrim SDK 的上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/) -矢量和栅格地图瓦片、地理编码、场所、路由、等时线 API。每天 3,000 次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过 API 或 CSV 上传进行地理编码。每天 2,500 次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过 API 或 CSV 上传进行地理编码和地理解析。每月 10,000 次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性的 REST/JSON/JSONP IP 地理位置查找 API。
  * [giscloud.com](https://www.giscloud.com/) — 在网上可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 一個免費的开发者套餐可供路线查找、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 适用于多个Linux发行版（SUSE， EL，Fedora，Debian等）的包（Package）构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM包构建服务，支持Fedora和EL。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian的包构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP shell和代码分享网站，支持300+个PHP版本
  * [Android Studio](https://developer.android.com/studio) — Android Studio为构建Android应用提供了最快的工具，适用于所有类型的Android设备。开源IDE对每个人都是免费的，是Android应用开发的最佳选择。可用于Windows、Mac、Linux和ChromeOS。
  * [AndroidIDE](https://m.androidide.com/) — Android设备上的开源IDE，用于开发基于Gradle的真实Android应用。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 协同设计API，具有即时API模拟和生成文档功能（无限API蓝图和无限用户，一个管理员账户和托管文档均免费）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费模式提供了强大的核心功能集和升级到高级功能的路径。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的集合。它是一个免费的公共服务。
  * [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万用户使用。由Oracle提供支持，拥有简单的GUI以帮助初学者。
  * [Bootify.io](https://bootify.io/) - spring boot应用生成器，支持自定义数据库和REST API。
  * [Brackets](http://brackets.io/) - Brackets是一款专门为Web开发设计的开源文本编辑器。它轻量级、易于使用且可高度自定义。
  * [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段组织器，具有标签支持。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
  * [Cody](https://sourcegraph.com/cody) - 免费的AI代码助手，可以编写（

  * [SoloLearn](https://code.sololearn.com) — 一个适合运行代码片段的云端编程平台（cloud programming playground）。支持多种编程语言（programming languages）。运行代码不需要注册，但保存代码到他们的平台时需要注册。同时，他们还为初学者和中级编码人员提供免费的课程。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云端代码编辑器（Code IDE），用于创建、编辑和部署全栈应用（full-stack apps）。支持任何流行的基于 NodeJs 的前端和后端框架。创建新项目的捷径：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一种流行的、多功能的和高度可定制的文本编辑器（text editor），用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 代码编辑器重新定义和优化，用于构建和调试现代 web 和云应用程序。由 Microsoft 开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 具有数千个扩展的功能齐全的集成开发环境（IDE），支持跨平台应用开发（Microsoft 扩展可用于下载 iOS 和 Android）、桌面应用开发、web 和云开发，支持多种语言（C#、C++、JavaScript、Python、PHP 等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动的、无遥测/跟踪的、自由许可的 Microsoft 编辑器 VSCode 的二进制发行版。
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件对您的编码活动进行量化的自我指标，免费计划有限。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一种开源的、跨平台的终端（terminal），用于实现无缝工作流程。可以内联渲染任何内容，保存会话和历史记录。由开放的 web 标准驱动。支持 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内编码 web

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云观察解决方案（Snowflake）。用于个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，帮助您从数据仓库同步客户数据到 CRM、营销和支持工具。免费版本提供一个同步数据的目标。
  * [Avo](https://avo.app/) — 简化的分析发布工作流程。单源追踪计划、类型安全分析跟踪库、应用内调试器和数据可观察性，以在您发布之前捕获所有数据问题。免费适用于两个工作空间成员和 1 小时数据可观察性追溯。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版本可支持高达 10K 移动应用用户，具有深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息，以不同类型的数据源（Git、Github 和 Gitlab）。免费版本包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 与运营分析平台。同步 10 个字段从您的数据仓库到 60+ SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划适用于一个网站，具有 3000 次查看分析。
  * [Databox](https://databox.com) — 通过组合其他分析和 BI 平台进行业务洞察和分析。免费计划提供 3 个用户、仪表盘和数据源，11M 历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 2,000 次页面查看，适用于 1 个网站
  * [amplitude.com](https://amplitude.com/) — 每月 1百万 事件，适用于高达 2 个应用程序
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源的网页分析平台，既可作为托管服务（用于非商业用途免费）提供，也可作为自

  * [Umami](https://umami.is/) - 简单、快速、注重隐私、开源的 [Google Analytics](https://www.google.com/analytics/) 替代品。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费、轻量级、注重隐私的 [Google Analytics](https://www.google.com/analytics/) 替代品。无限页面浏览量、无限访客、无限页面热力图和目标跟踪。对于最多 3 个域和每个域 600 个会话回放免费。
  * [AppFit](https://appfit.io) - AppFit 是一款综合性的分析和产品管理工具，旨在实现分析和产品更新的跨平台无缝管理。免费计划包括每月 10,000 个事件、产品日志和每周见解。
  * [Seline](https://seline.so) - Seline 是一个简单和私密的网站和产品分析工具。无Cookie、轻量级、独立。免费计划包括每月 3,000 个事件，并提供对我们所有功能的访问，包括仪表板、用户旅程、漏斗等。

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个网站：1,000 次页面浏览/天，三个热力图，三个小部件，免费的 bug 跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话重放（Session Replay），具有开发者工具用于 bug 重现（Bug Reproduction），实时支持会话（Live Session），和产品分析套件（Product Analytics Suite）。每月一千次会话（One thousand sessions/month），访问所有功能，并保留 7 天。
  * [LogRocket.com](https://www.logrocket.com) - 每月一千次会话（1,000 sessions/month），保留 30 天（30-day retention），错误跟踪（Error Tracking），实时模式（Live Mode）
  * [FullStory.com](https://www.fullstory.com) — 每月一千次会话（1,000 sessions/month），数据保留一个月（one month data retention），三个用户席位（three user seats）。更多信息请查看 [这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个网站（Per site）：1,050 次页面浏览/月（pages views/month），无限热力图（unlimited heatmaps），数据存储三个月（data stored for three months）
  * [inspectlet.com](https://www.inspectlet.com/) — 2,500 次会话/月（2,500 sessions/month）免费用于一个网站
  * [Microsoft Clarity](https://clarity.microsoft.com/) -会话记录完全免费（Session recording completely free），无流量限制（"no traffic limits"），无项目限制（no project limits），无采样（no sampling）
  * [mouseflow.com](https://mouseflow.com/) — 500 次会话/月（500 sessions/month）免费用于一个网站
  * [mousestats.com](https://www.mousestats.com/) — 100 次会话/月（100 sessions/month）免费用于一个网站
  * [smartlook.com](https://www.smartlook.com/) — 网站和移动应用的免费套餐（free packages for web and mobile apps）（1500 次会话/

## 国际移动电话号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询的JSON API，每月100次API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证的免费、快速、可靠的JSON API，每月1000次请求

**[⬆️ 回到顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，以优化应用内购买和盈利。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。免费使用，最高可追踪10,000美元的月度收入。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，以扩大全球业务并接触新市场（购买力平价）。免费计划包括每月7,500次API请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和开箱即用的盈利工具，支持iOS、Android、Stripe和Paddle。免费使用，最高可达10,000美元的月度收入。
  * [Adapty.io](https://adapty.io/) – 移动应用内订阅集成的一站式解决方案，提供开源SDK，支持iOS、Android、React Native、Flutter、Unity或Web应用。免费使用，最高可达10,000美元的月度收入。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法币汇率。免费层提供每月10,000次调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。开发者免费计划可用，每月1,000次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币汇率和历史数据。演示API具有每分钟30次调用和每月10,000次调用限制。
  * [CurrencyApi](https://currencyapi.net/) — 提供实时货币汇率，包括物理货币和加密货币，返回JSON和XML格式。免费层每月提供1,250次API请求。
  * [currencylayer](https://currencylayer.com/) — 可靠的汇率和货币转换服务，为您的业务提供100次API请求/

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，为团队提供30个免费的私有仓库，用于构建和存储Docker镜像
  * [容器注册服务（Container Registry Service）](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版本提供1 GB的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 一个免费的私有仓库和无限数量的公有仓库，用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的Docker学习平台。
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限数量的免费公有仓库
  * [ttl.sh](https://ttl.sh/) - 匿名和短暂的Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant 云（Vagrant Cloud）](https://app.vagrantup.com) - HashiCorp 公司的 Vagrant 云。用于 [Vagrant](https://www.vagrantup.com/) 容器的托管。
  * [vagrantbox.es](https://www.vagrantbox.es/) —— 一个替代的公共 [Vagrant box](https://www.vagrantup.com/docs/boxes) 索引

**[⬆️ 返回顶部（Back to Top）](#目录)**

## 开发博客网站

  * [BearBlog](https://bearblog.dev/) - 极简主义的、基于Markdown的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的平台。
  * [Hashnode](https://hashnode.com/) — 无忧无虑的博客软件，为开发者提供了一个便捷的博客平台。
  * [Medium](https://medium.com/) — 关注那些对你重要的事物，深入思考，并与他人分享。
  * [AyeDot](https://ayedot.com/) — 在Multimedia Miniblogs的形式下，与世界分享你的想法、知识和故事，所有这些都可以不用花费一分钱。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助你从网站受众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个基于 [GitHub](https://github.com/) (GitHub) 问题的轻量级评论小工具。使用 GitHub 问题进行博客评论、wiki 页面等！
  * [Disqus](https://disqus.com/) - Disqus 是一个被成千上万个网站使用的网络社区平台。
  * [Remarkbox](https://www.remarkbox.com/) - 开源评论平台，付费方式为“一名管理员在几个域名上拥有完全的控制权，仅需支付你能支付的金额”
  * [IntenseDebate](https://intensedebate.com/) - 一个适用于 [WordPress](https://wordpress.com/)、[Tumblr](https://www.tumblr.com/)、[Blogger](https://www.blogger.com/) 和其他许多网站平台的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 基于 [AWS Lambda](https://aws.amazon.com/cn/lambda/)（无服务器计算服务）和 [Chrome](https://www.google.com/chrome/) 的截图 [API](https://cn.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3)。支持全页面截图、捕捉时间和视口维度。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，例如元标签标准化、美化链接预览、网页抓取能力或截图服务。每天有 250 个免费请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图 [API](https://en.wikipedia.org/wiki/Application_programming_interface) 使用简单的 [API](https://en.wikipedia.org/wiki/Application_programming_interface) 调用生成任何网站的截图。设计用于扩展并托管在 [Google Cloud](https://cloud.google.com/) 上。提供每月 100 个免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 捕获任何网站的高度可自定义的快照。免费 100 次快照/月
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 捕获 100 个快照/月，png、gif 和 jpg，包括全长截图，不仅仅是主页
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费套餐每天提供最多 500 页。自 2017 年起提供免费套餐。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名 [API](https://en.wikipedia.org/wiki/Application_programming_interface) 服务。免费 100 次请求/月。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为 jpg、png 或 pdf。捕获全页面截图，调整视口，并注入自定义代码。免费套餐每月 150 张图像。
  * [Screenshots](https://screenshotson.click) — 您的截图 [API](https://en.wikipedia.org/wiki/Application

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab是一个现代的[Flutter](Flutter框架)在线集成开发环境（IDE），是创建、调试和构建跨平台项目的最佳场所。使用Flutter可以构建[iOS](iOS系统)（无需MAC电脑）和[Android](安卓系统)应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic是一个完全托管的移动应用[CI/CD](持续集成/持续部署)工具。您可以使用带有图形界面的CI/CD工具来构建、测试和部署应用。_free_层提供500分钟/月的免费使用时间和拥有2.3 GHz运算速度、8 GB内存的Mac Mini实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow是一个基于浏览器的拖拽式界面，用于使用Flutter构建移动应用。

**[⬆️ 回到顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的x86虚拟机，能够运行[Linux](Linux操作系统)和[Windows 2k](Windows 2000)。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个[OpenRISC](开放指令集架构)虚拟机，能够运行拥有网络支持的[Linux](Linux操作系统)。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，能够直接在浏览器中运行[Linux](Linux操作系统)和其他操作系统。

**[⬆️ 回到顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流程确保以设计好的隐私方式来帮助组织遵守通用数据保护条例（[GDPR](https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E6%95%B0%E6%8D%AE%E4%BF%9D%E6%8A%A4%E6%9D%A1%E6%9C%AC））和其他法规。免费版本仅限小团队和软件即服务（[SaaS](https://zh.wikipedia.org/wiki/%E8%BA%AB%E4%B8%80%E6%9C%8D%E5%8B%99%E8%BD%AF%E4%BB%B6））版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，提供从通用数据保护条例（GDPR）代表到Cookie橱窗的所有功能。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和Cookie策略以及同意管理。免费版本提供限定的隐私和Cookie策略以及Cookie橱窗。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie橱窗、审计和多语言同意管理解决方案。免费版本提供一次性扫描和单一的橱窗。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，但是访客数量有限。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理（数据主体请求，[DSARs](https://zh.wikipedia.org/wiki/%E6%95%B0%E6%8D%AE%E4%B8%BB%E8%BA%AB%E8%AF%B7%E6%B1%82)）和数据映射。免费版本包括核心同意管理功能，并且他们也为经过验证的开源项目提供更高级的免费计划。

**[⬆️ 返回顶部](#目录)**

## Miscellaneous

  * [BackgroundStyler.com](https://backgroundstyler.com) - 创建代码、文本或图像的美观截图来分享在社交媒体上。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件。可以作为漂亮的图像（例如Twitter/Facebook帖子）或链接（例如聊天或论坛）分享。
  * [Blynk](https://blynk.io) — 一个具有API的SaaS，用于控制、构建和评估IoT设备。免费开发者计划带有5个设备，免费云和数据存储。移动应用程序也可用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大内置多行计算器的笔记应用（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建和分享代码片段的美观截图格式。通常用于在Twitter或博客帖子中美观地分享/展示代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建优异的快照来分享在社交媒体上。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图来分享在社交媒体上。
  * [Cronhooks](https://cronhooks.io/) - 安排按时或重复的Webhooks。免费计划允许5个临时计划。
  * [cron-job.org](https://cron-job.org) - 在线cronjobs服务。无限任务免费。
  * [datelist.io](https://datelist.io) - 在线预约/预定系统。免费至5个预约每月，包括1个日历。
  * [Domain Forward](https://domain-forward.com/) - 一个直截了当的工具，用于转发任何URL或域名。免费至5个域名和200k请求每月。
  * [Elementor](https://elementor.com) — WordPress网站构建工具。免费计划带有40+基本小部件。
  * [Format Express](https

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) — 免费支持2个设备，无限制的会话数量和时长
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需支持和设备的永久访问（免费2次/天）
  * [RustDesk](https://rustdesk.com/) - 适用于所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 免费/付费资产，如精灵图（sprites）、tile集（tile sets）和角色包（character packs）。
  * [Gamefresco.com](https://gamefresco.com/) — 从全球游戏艺术家那里发现、收集和共享免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资产，如2D、3D、音频、GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资产，如音乐、声音、精灵图和GIF。
  * [CraftPix](https://craftpix.net) — 免费/付费资产，如2D、3D、音频、GUI、背景、图标、tile集、游戏套件。
  * [Game Icons](https://game-icons.net/) - 提供免费的，可样式化的SVG/PNG图标，采用CC-BY许可证。
  * [LoSpec](https://lospec.com/) — 创建像素艺术和其他限制性数字艺术的在线工具，拥有很多教程和色板列表可供选择，用于创建游戏。
  * [ArtStation](https://www.artstation.com/) - 2D、3D资产、音频、图标、tile集、游戏套件的免费/付费市场。也可以用来展示你的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，以及使用其免费计划创建你自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形3D资产。
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型，以及PBR材料用于创建纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费纹理（具有可变分辨率）、模型、HDRIs和笔刷。提供免费插件以导出到Blender等软件。
  * [Freesound](https://freesound.org/)

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 为 Web 开发者提供的免费工具，包括 CSS 压缩、展开，图片优化，图片重置，大小写转换，CSS 验证，JavaScript 编译，HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月免费获得最多 200 小时的音频转录。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的 `*.localhost.direct` 通配符公钥 CA 签名的 SSL 证书，用于 localhost 开发，支持子域名。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/自由开源软件和 SaaS 列表。
  * [github.com — FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) — 为开发者提供的免费和开源软件中心。
  * [GitHub Education](https://education.github.com/pack) — 为学生提供的一组免费服务，需要注册。
  * [Markdown 工具](https://markdowntools.com) - 将 HTML、CSV、PDF、JSON 和 Excel 文件转换为 Markdown 的工具，以及相反的转换。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒、工具和其他构建 Microsoft 365 平台解决方案所需的资源。订阅为 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续期，如有开发活动（通过遥测数据和算法衡量）。
  * [Pyrexp](https://pythonium.net/regex) —用于调试正则表达式的免费基于 Web 的正则表达式测试器和可视化工具。
  * [RedHat for Developers](https://developers.redhat.com) — 为开发者提供的 Red Hat 产品的免费访问，包括 RHEL、OpenShift、CodeReady 等，仅限个人计划。同时提供免费电子书作为参考。
  * [