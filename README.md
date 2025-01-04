# free-for.dev

开发者和开源作者现在有很多提供免费套餐的服务，但是找到所有这些服务需要花费时间来做出明智的决定。

这是一个软件（[SaaS](https://baike.baidu.com/item/SaaS/2208566)（软件即服务）、[PaaS](https://baike.baidu.com/item/PaaS/2208571)（平台即服务）、[IaaS](https://baike.baidu.com/item/IaaS/2208572)（基础设施即服务）等）和其他提供免费开发者套餐的服务列表。

本列表的范围仅限于基础设施开发者（[系统管理员](https://baike.baidu.com/item/%E7%B3%BB%E7%BB%9F%E7%AE%A1%E7%90%86%E5%91%98)（System Administrator）、[DevOps 实践者](https://baike.baidu.com/item/DevOps/15192810)（DevOps Practitioners）等）可能会觉得有用的东西。我们喜欢所有免费服务，但是保持在主题范围内会更好。有时候界限会比较模糊，因此这是一个主观的决定；如果我没有接受你的贡献，请不要感到冒犯。

本列表是由 1600 多人完成的 [Pull Requests](https://github.com/ripienaar/free-for-dev)（拉取请求）、审查、想法和工作结果。你也可以通过发送拉取请求来添加更多服务或删除已经更改或停用的服务。

[![跟踪 Awesome 列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅适用于服务型产品，而不适用于自托管软件。要被纳入本列表，服务必须提供免费套餐，而不仅仅是免费试用。免费套餐必须至少持续一年，如果它是时间段制的。我们还从安全角度出发考虑免费套餐，因此 [SSO](https://baike.baidu.com/item/SSO/6580895)（单点登录）是可以的，但我不会接受仅对付费套餐提供 [TLS](https://baike.baidu.com/item/TLS/8810486)（传输层安全）的服务。

# 目录

  * [主要云服务提供商的免费限制](#主要云服务提供商的免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [构件仓库](#构件仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [内容分发和保护](#内容分发和保护)
  * [持续集成和持续部署](#持续集成和持续部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [在地图上进行数据可视化](#在地图上进行数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面](#设计和用户界面)
  * [设计灵感](#设计灵感)
  * [开发博客](#开发博客)
  * [域名系统](#域名系统)
  * [与Docker相关](#与Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能切换管理平台](#功能切换管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际手机号码验证API和SDK](#国际手机号码验证API和SDK)
  * [问题追踪和项目管理](#问题追踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分布和反馈](#移动应用分布和反馈)
  * [管理系统](#管理系统)
  * [消息和流媒体](#消息和流媒体)
  * [杂项](#misc

## 主要云服务提供商的免费限制

  * [Google云平台（Google Cloud Platform）](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，每天9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000读取，20,000写入，20,000删除
    * Compute Engine - 1个非抢占式e2-micro，30GB硬盘，5GB快照存储（仅限于某些区域），每月1 GB从北美到所有地区的网络出口（不包括中国和澳大利亚）
    * Cloud Storage - 5GB，1GB网络出口
    * Cloud Shell - 基于Web的Linux shell/主要IDE，具有5GB的持久存储，每周60小时限制
    * Cloud Pub/Sub - 每月10GB的消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1 GB从北美的网络出口
    * Google Kubernetes Engine - 一个区域集群无需管理费，每个用户节点按标准Compute Engine价格收费
    * BigQuery - 每月1 TB查询，每月10 GB存储
    * Cloud Build - 每天120分钟构建时间
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出口
    * [Google Colab](https://colab.research.google.com/) -免费的Jupyter Notebooks开发环境。
    * [idx.dev](https://idx.dev) Google Project IDX。在线VSCode运行在Google Cloud。
    * 完整、详细列表 - https://cloud.google.com/free

  * [Amazon Web Services（AWS）](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口和200万函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个报警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月10,

    * 日志分析 - 每日500MB的日志
    * 详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)(云flare，[内容分发网络](https://baike.baidu.com/item/%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9C))
    * [应用服务](https://www.cloudflare.com/plans/)(Application Services) - 为无限域名提供免费的 [DNS](https://baike.baidu.com/item/DNS/352475)，[DDoS](https://baike.baidu.com/item/DDoS/2278481)防御，[CDN](https://baike.baidu.com/item/CDN/1951068)，以及免费的[SSL](https://baike.baidu.com/item/SSL/320437)，防火墙规则，网页规则，[WAF](https://baike.baidu.com/item/WAF/11160344)，Bot缓解，免费不计量速率限制 - 每个域名1条规则，[分析](https://baike.baidu.com/item/%E5%88%86%E6%9E%90/6270586)，[邮件](https://baike.baidu.com/item/%E9%82%AE%EF%BC%88%E7%BD%91%E7%AB%99%EF%BC%89/547792)转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/)(Zero Trust & SASE) - 最多50个用户，24小时的活动记录，三个网络位置
    * [Cloudflare隧道](https://www.cloudflare.com/products/tunnel/)(Cloudflare Tunnel) - 可以在trycloudflare.com上通过隧道将本地运行的[HTTP](https://baike.baidu.com/item/HTTP/24377)端口暴露给一个随机的子域名，使用[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)，无需账户。更多功能（[TCP](https://baike.baidu.com/item/TCP/80774)隧道，负载均衡，[VPN](https://baike

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一种用于从端到端视觉构建和管理云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 免费用于个人项目（包括一个部署服务器和一个静态站点），Cloud 66 提供构建、部署和扩展应用于任何云的所有必要条件，而无需担心“服务器问题”。
  * [Pulumi](https://www.pulumi.com/) — 一个现代的代码基础设施平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform云。最多支持500个资源的免费远程状态管理和团队协作。
  * [scalr.com](https://scalr.com/) - Scalr是一种 Terraform 자동化和协作（TACO）产品，用于改善基础设施和配置的协作和自动化，后者由Terraform管理。 完整的Terraform CLI支持，OPA集成和分层配置模型。 无SSO税。 所有功能都包含在内。 使用月度免费运行50次。
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发人员自动化AWS的部署。 在我们的免费版本中，开发人员（单用户）可以部署无限制的静态站点、Web服务和环境。 我们每月提供20个免费的作业执行，包括预览和自动部署。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 支持最多 5 名用户的无限公共和私有 Git 仓库，包含 [Pipelines](Pipelines) （持续集成/持续部署）
  * [chiselapp.com](https://chiselapp.com/) — 无限公共和私有 [Fossil](Fossil版本控制系统) 仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含 100 MB 空间和两个用户
  * [Codeberg](https://codeberg.org/) — 为免费和开源项目提供无限公共和私有 Git 仓库（支持无限协作者）。由 [Forgejo](https://forgejo.org/) 提供支持。使用 [Codeberg Pages](https://codeberg.page/) 进行静态网站托管。使用 [Codeberg's CI](https://docs.codeberg.org/ci/) 进行 CI/CD 托管。使用 [Codeberg Translate](https://translate.codeberg.org/) 进行翻译托管。包括包和容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 无限私有和公共仓库，免费永远。由 [GitLab](GitLab，一个代码仓库平台) 和 Sapphire 提供支持，不包含 CI/CD
  * [GitHub](https://github.com/) — 无限公共仓库和无限私有仓库（支持无限协作者）。包括 CI/CD、开发环境、静态托管、包和容器托管、项目管理和 AI Copilot
  * [gitlab.com](https://about.gitlab.com/) — 支持最多 5 名协作者的无限公共和私有 Git 仓库。包括 CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit 是基于 GitLab 软件的 Framasoft 软件仓库，包括 CI、静态页面、项目页面和问题跟踪
  * [heptapod.net](https://foss.heptapod.net/) — Heptapod 是 GitLab Community Edition 的友好分支，支持 Mercurial
  *

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑、过滤复杂的 [JSON](https://zh.wikipedia.org/wiki/JSON) 数据到漂亮的表格中。可以保存和通过链接共享 [JSON](https://zh.wikipedia.org/wiki/JSON) 数据。
  * [Zerosheets](https://zerosheets.com) - 将您的 [Google Sheets](https://www.google.com/sheets/about/) 电子表格转换为强大的 [API](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E6%94%BB%E6%8A%80) 以快速开发原型、网站、应用程序等。免费计划每月可使用 500 次请求。
  * [IP.City](https://ip.city) — 每天 100 个免费的 [IP](https://zh.wikipedia.org/wiki/IP) 地理位置请求
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的 [API](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E6%94%BB%E6%8A%80) 套件，包括 [IP](https://zh.wikipedia.org/wiki/IP) 地理位置、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网页抓取和自动化平台，用于为任何网站创建 [API](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E6%94%BB%E6%8A%80) 和提取数据。预制的抓取器、集成的代理和自定义解决方案。免费计划每月包含 5 美元的平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的 [API](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E6%94%BB%E6%8A%80) 或自动化工具（如 [Zapier](https://zapier.com/) & [Airtable](https://airtable.com/)）自动生成图像和 [PDF](https://zh.wikipedia.org/wiki/%E6%A0%B8%E5%BF%83%E6%

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库（Database）模式设计和建模工具，其免费入门版提供2个数据库模型和每个模型10个表。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实（Augmented Reality，AR）人脸滤镜，仅需一个软件开发工具包（SDK）。免费版提供每月活跃用户（Monthly Active Users，MAU）10人和跟踪最多4张面孔的功能。
  * [Deepnote](https://deepnote.com) - 一种新的数据科学笔记本，兼容[Jupyter Notebook](https://jupyter.org/)，支持实时协作和云运行。免费层包含无限个人项目、每月最高750小时标准硬件和最多3名编辑的团队。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的网络爬虫和数据提取平台，可以将任何网站转换为数据集或将其用作应用程序接口（Application Programming Interface，API）。免费版每月提供5,000页请求。
  * [Disease.sh](https://disease.sh/) — 提供准确[COVID-19](https://zh.wikipedia.org/wiki/2019冠狀病毒病疫情)数据的免费API，用于构建与[COVID-19]相关的有用应用程序。
  * [Doczilla](https://www.doczilla.app/) — 一个软件即服务（Software as a Service，SaaS）的API，它能够直接从HTML/CSS/JS代码生成屏幕截图或PDF。免费版每月允许250个文档。
  * [Doppio](https://doppio.sh/) — 用于生成和私密存储PDF和屏幕截图的托管API，使用顶级渲染技术。免费版每月允许400个PDF和屏幕截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动设备、Web和[物联网（Internet of Things，IoT）](https://zh.wikipedia.org/wiki/物联网)应用程序的开源[REST API](https://zh.wikipedia.org/wiki/REST)后端。连接任何SQL/NoSQL数据库、文件存储系统

  * [IPTrace](https://iptrace.io) — 一个提供可靠和有用的IP地址地理位置数据的极其简单的API。
  * [JSON2Video](https://json2video.com) - 一个用于自动化视频营销和社交媒体视频的视频编辑API，既可以编程使用，也可以无需编码。
  * [JSON IP](https://getjsonip.com) — 返回请求它的客户端的公用IP地址。无需注册即可使用免费套餐。使用CORS，数据可以直接从浏览器使用客户端JS请求。适用于需要监测客户端和服务器IP地址变化的服务。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 一个帮助开发者存储JSON对象并在应用程序中将其用作REST API的免费服务。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建假的REST API，并自定义HTTP状态代码、头部和响应体。
  * [konghq.com](https://konghq.com/) — API市场和功能强大的私有和公共API工具。免费套餐的一些功能，例如监控、警报和支持，功能有限。
  * [Kreya](https://kreya.app) — 免费的gRPC GUI客户端，可以调用和测试gRPC API。可以通过服务器反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进你的机器学习模型。可以免费使用最多1000个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 一个用于检测欺诈和可疑登录并通知客户的登录安全API。每月1000次登录免费。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 使用实际邮件服务器连接确认有效电子邮件的电子邮件验证服务。免费API计划每月有300次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、互助基金等的实时和历史财务数据。免费套餐允许每天100次API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球

  * [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL
  * [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化的完整平台。所有计划每月包含20,000次免费运行，足以满足大多数小型企业的ETL需求。
  * [Preset Cloud](https://preset.io/) - 托管Apache Superset服务。对于最多5个用户的团队永久免费，具有无限dashboard和图表，无代码图表构建器和协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 为创作者和开发人员提供的提示工程平台。它提供提示工程库、表单和API。免费计划提供一个提示形成，一个提示API端点，每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用简单的电子表格公式来转换、理解和分析Google Sheets中的文本，利用AI和大型语言模型，如GPT-3。前2,000个信用额度每月免费。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被阻止。前1000次调用免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板根据您的输入自动生成图像。免费计划允许您每周创建最多100张图像。
  * [QuickMocker](https://quickmocker.com/) — 在您的子域名下管理在线虚假API端点，转发请求到localhost URL以进行Webhooks开发和测试，使用RegExp和多个HTTP方法的URL路径，优先考虑端点，超过100个快码（动态或假响应值）用于响应模板，从OpenAPI（Swagger）规范的JSON格式导入，代理请求，限制端点的IP地址和授权头。免费帐户提供一个随机子域名，10个端点，5个RegExp URL路径，每个端点50个快码，每

  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方Webhook（Webhook）并在本地（localhost）调试它们的工具（ngrok风格）。开源且可自行托管。免费的个人域名 *username*.github.webhook.store，免费的公共域名 *anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai) — 面向开发者的MLOps（机器学习操作）平台。通过实验跟踪、数据集版本控制和模型管理来构建更好的模型。仅为个人项目提供免费版本，包含100 GB的存储空间。
  * [wit.ai](https://wit.ai/) — 面向开发者的自然语言处理（NLP）工具。
  * [wolfram.com](https://wolfram.com/language/) — 基于知识的算法云平台。
  * [wrapapi.com](https://wrapapi.com/) — 将任何网站转化为参数化的API。每月30,000次API调用。
  * [ZenRows](https://www.zenrows.com/) — 网页抓取API及代理服务器，可以绕过任何反爬虫机制，同时提供javascript渲染、轮换代理和地理定位。免费版本每月包含1,000次API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 网页抓取API，包含无头浏览器、居住IP和直接定价。每月1,000次免费API调用，对学生和非营利组织提供额外积分。
  * [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，但同一IP地址每分钟仅限45次请求。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页抓取API，内置解析、Chrome渲染和代理。每月2,000次免费API调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费的邮政编码API，访问全球邮政编码数据。每月10,000次免费请求。
  * [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow

## 构件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven，Docker，Cargo，Helm，PyPI，CocoaPods和GitLFS）的工件仓库（Artifact Repository）。包括包扫描工具XRay和CI/CD工具Pipelines（前身为Shippable），每月有2000分钟的CI/CD免费使用时间。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认工件仓库（Artifact Repository）。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的，私有和公有，Maven和PyPi仓库。对于开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中化的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。有免费的使用层次，以及对开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，对公有项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — Maven、RPM、DEB、PyPi、NPM和RubyGem包的易用仓库托管（有免费层次）。
  * [repsy.io](https://repsy.io) — 1 GB免费的私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公有工件存储库，对公有项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公有项目，5Gb存储，基础实例。
  * [RepoForge](https://repoforge.io) - Python、Debian、NPM包和Docker注册表的私有云托管仓库，对开源/公有项目免费。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化了包管理，支持npm、PyPI、D

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的基于云的代码片段管理器，适用于个人和团队代码共享。
  * [Bitwarden](https://bitwarden.com) — 最安全的个人、团队和商业组织存储、共享和同步敏感数据的方式。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用。公共群组免费，用户无限，聊天记录和集成无限制，还提供自托管的开源版本。
  * [cally.com](https://cally.com/) — 找到会议的最佳时间和日期。使用简单，适合小型和大型团队。
  * [Calendly](https://calendly.com) — Calendly是连接和安排会议的工具。免费计划提供每用户1个日历连接和无限会议。桌面和移动应用程序也可用。
  * [Discord](https://discord.com/) — 支持公共和私人房间的聊天应用，具有Markdown文本、语音、视频和屏幕共享功能。支持无限用户，且免费。
  * [Telegram](https://telegram.org/) — Telegram适用于希望拥有快速、可靠消息和通话的用户。商业用户和小团队可能会喜欢大型群组、用户名、桌面应用程序和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建工具。可以截取屏幕、记录过程并与团队协作，还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 实时与团队谈话和协作。支持IDE配对编程、终端共享、语音、视频和屏幕共享。适用于小型团队免费。
  * [Dyte](https://dyte.io) - 最适合开发者的实时视频和音频SDK，具有提高生产力和参与度的协作插件。免费版本包含每月10,000分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/) — 信息组织工具，支持共享笔记和与他人合作。
  * [Fibery

  * [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，帮助您以简单易用的界面和有价值的统计数据更好地管理时间。
  * [Pumble](https://pumble.com) - 免费团队聊天应用程序，无限用户和消息历史，永久免费。
  * [Raindrop.io](https://raindrop.io) - 适用于macOS、Windows、Android、iOS和Web的私人和安全书签应用程序。免费、无限书签和协作。
  * [element.io](https://element.io/) - 一个建立在 [Matrix（矩阵）](https://matrix.org/) 之上的去中心化和开源通信工具。支持群聊、直接消息、加密文件传输、语音和视频聊天，并且可以轻松与其他服务集成。
  * [Rocket.Chat](https://rocket.chat/) - 具有全渠道功能、[Matrix](https://matrix.org/) 联盟、桥接其他应用程序、无限消息和完整消息历史的开源通信平台。
  * [seafile.com](https://www.seafile.com/) — 私人或云存储、文件共享、同步、讨论。云版本仅有 1 GB。
  * [Sema](https://www.semasoftware.com/) -免费的开发者作品集工具，能够从多个仓库中整合和快照贡献到一个报告中。
  * [Screen Sharing via Browser](https://screensharing.net) -免费的屏幕共享工具，从浏览器中与协作者共享您的屏幕，无需下载或注册。
  * [Slab](https://slab.com/) -面向团队的现代知识管理服务。最多可支持10个用户使用免费版。
  * [slack.com](https://slack.com/) — 对于无限用户有一些功能限制的免费版
  * [Spectrum](https://spectrum.chat/) -免费创建公共或私人社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。您可以跟踪上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/) -用于脑力激荡、内容策

  * [Pullflow](https://pullflow.com) — Pullflow 提供一个基于 [人工智能（AI）](https://zh.wikipedia.org/wiki/人工智能) 的平台，用于在 [GitHub](https://github.com/)、[Slack](https://slack.com/) 和 [VS Code](https://code.visualstudio.com/) 上进行代码审查合作。
  * [Webex](https://www.webex.com/) — 视频会议，免费计划提供每次会议 40 分钟，支持 100 名参与者。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议，免费计划提供每次会议 50 分钟，支持 100 名参与者。
  * [GitBook](https://www.gitbook.com/) — 一个用于捕获和记录技术知识的平台，从产品文档到内部知识库和 [API](https://zh.wikipedia.org/wiki/API)。为个人开发者提供免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单、最快、最安全的接口用于传输和共享文件。无需强制订阅即可发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/) — 一个使用 [JavaScript](https://zh.wikipedia.org/wiki/JavaScript) 和 [加密技术（Crypto）](https://zh.wikipedia.org/wiki/加密) 的简单粘贴网站。
  * [Revolt.chat](https://revolt.chat/) — 一个开源的 [Discord](https://discord.com/) 替代品，尊重您的隐私。它具有与 Discord 类似的功能，但全部免费。Revolt 是一个安全、快速、完全免费的全功能应用程序，并且支持（官方和非官方）插件，不像大多数主流聊天应用程序。
  * [Tencent RTC](https://trtc.io/) — [腾讯实时通信（TRTC）](https://cloud.tencent.com/product/trtc) 提供了群组音频/视频通话的解决方案。第一年每月免费 10,000 分钟。
  * [Pastefy](https://pastefy.app/) - 一个美观、简单的 [Pastebin](https://zh.wikipedia.org/wiki/Pastebin)，支持可选的客户端加密、多标签粘贴

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — 为 [Drupal](Drupal 网站内容管理系统) 站点提供托管服务。开发人员可以免费使用，还提供了诸如 Acquia Dev Desktop 之类的免费开发工具。
  * [Contentful](https://www.contentful.com/) — 无头 [内容管理系统（CMS）](内容管理系统) 。基于云的内容管理和交付 [API](应用程序接口) 。包含一个免费的社区空间，包括五个用户，25K 条记录，48 种内容类型，2 个语言环境。
  * [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。为开发人员提供免费的个人计划。
  * [Crystallize](https://crystallize.com) — 支持电商的无头 [产品信息管理系统（PIM）](产品信息管理系统) 。内置 [GraphQL](GraphQL 查询语言) API。免费版本包括无限用户，1000 个目录项，5 GB/月带宽，25k/月 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小项目提供免费版本。DatoCMS 是基于 [GraphQL](GraphQL 查询语言) 的 CMS。在较低的层级，您每月有 100k 次调用。
  * [Directus](https://directus.io) — 无头 CMS。完全免费和开源的平台，用于在本地或云中管理资产和数据库内容。没有任何限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储在您的 [Git](Git 版本控制系统) 存储库中的无头 CMS。没有任何限制。
  * [kontent.ai](https://www.kontent.ai) - 一个 [内容即服务（CaaS）](内容即服务) 平台，为您提供所有无头 CMS 的优势，同时赋予市场营销人员权力。开发人员计划为两个用户提供无限项目，每个项目有两个环境，500 个内容项，两个语言环境的交付和管理 API，以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
  * [Prismic](https://www.prismic.io/) — 无头 CMS。内容管理接口具有

## 代码生成

  * [AppInvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用程序构建器（No code app builder）。在自动生成的后端代码中，用户可以完全访问源代码和无限的 API 和路由，从而实现广泛的集成。免费计划包括三个项目，五个表格和一个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一个使用人工智能（AI）和对代码库的深入理解来帮助开发者更快地编写和理解代码的编码 AI 助手。Cody 为开发者提供了多种大型语言模型（LLM）的选择（包括本地推理），支持各种集成开发环境（IDE），支持所有流行的编程语言，并且有一个免费计划。免费计划每月为开发者提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 个自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用 DhiWise 的创新代码生成技术，将 Figma 设计无缝转换为动态的 Flutter 和 React 应用程序，优化您的工作流程，帮助您更快地创造出异常的移动和 Web 体验。
  * [Codeium](https://www.codeium.com/) — Codeium 是一个免费的 AI 助手的代码补全工具。它支持超过 20 多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等）和与所有重要的独立和 Web IDE 集成。
  * [Fern](https://buildwithfern.com) - 编写 API 定义并使用它们生成流行语言（如 TypeScript、Python、Java、Go 等）中的 SDK/客户端库。完全支持 OpenAPI。免费层生成最多 20 个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于 C#。Metalama 在编译过程中自动生成代码的样板代码，这样您的源代码保持干净。它适用于开源项目免费，并且其商业友好的免费层包括三个方面。
  * [Supermaven](https://www.super

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个用于编写、审查和部署代码的完整工作流程，包括一个供一个用户使用的免费账户和一个具有100 MB存储空间的仓库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，仅限3分钟的会话，支持MS IE 9在Vista下的1024 x 768分辨率
  * [codacy.com](https://www.codacy.com/) — 自动代码审查工具，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript，免费用于无限公共和私有仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 自动化基础设施即代码审查工具，集成GitHub、Bitbucket和GitLab（包括自托管版本）。除了标准语言外，还分析Ansible、Terraform、CloudFormation、Kubernetes等。（开源免费）
  * [CodeBeat](https://codebeat.co) — 自动代码审查平台，支持许多语言。对于公共仓库，永久免费，具有Slack和电子邮件集成。
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查，免费用于开源和拥有无限组织拥有的私有仓库（最多4个协作者）。也免费适用于学生和机构。
  * [codecov.io](https://codecov.io/) — 代码覆盖工具（SaaS），免费用于开源和一个免费私有仓库
  * [CodeFactor](https://www.codefactor.io) — 自动代码审查工具，适用于Git。免费版本包括无限用户、公共仓库和一个私有仓库。
  * [coderabbit.ai](https://coderabbit.ai) — 人工智能驱动的代码审查工具，集成GitHub/GitLab。免费版本包括每小时200个文件、每小时3次审查和每小时50次对话。对于开源项目永久免费。
  * [codescene.io](https://codescene.io/) - 根据开发人员如何处理代码和组织因素（如团队耦合性和系统掌握度）来优先

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 为32种不同的包管理器进行搜索和依赖更新通知，开源项目免费使用（[开源](https://zh.wikipedia.org/wiki/%E5%BC%80%E6%BA%90)）
  * [Namae](https://namae.dev/) - 在像 [GitHub](https://github.com/) ([代码托管平台](https://zh.wikipedia.org/wiki/GitHub))、[Gitlab](https://about.gitlab.com/) ([代码托管平台](https://zh.wikipedia.org/wiki/GitLab))、[Heroku](https://www.heroku.com/) ([云平台](https://zh.wikipedia.org/wiki/Heroku))、[Netlify](https://www.netlify.com/) ([云平台](https://zh.wikipedia.org/wiki/Netlify)) 等多个网站中搜索项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费使用
  * [tickgit.com](https://www.tickgit.com/) — 显示 `TODO` 注释（和其他标记），以确定代码中值得改进的区域。
  * [CodeKeep](https://codekeep.io) - 代码片段的 [Google Keep](https://keep.google.com/)。组织、发现和共享代码片段，具有强大的代码截图工具，包含预设模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动的 Web 可访问性测试（Web Accessibility Testing）引入您的开发工作流中。对于开源和教育目的免费。
  * [appcircle.io](https://appcircle.io) — 一个针对移动端的企业级 DevOps 平台，能够自动化构建、测试和发布移动应用，从而实现更快速、更高效的发布周期。每个构建最长 30 分钟，20 次月度构建和 1 个并发构建免费。
  * [appveyor.com](https://www.appveyor.com/) —针对 Windows 的持续集成（CD）服务，开源免费。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内在您的云上部署应用和基础设施。支持在 Kubernetes 和 Lambda 环境中自定义和第三方应用部署。免费层允许 5 个域和 2 个用户的无限应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的持续集成/持续部署（CI/CD），原生或混合。每月 200 次免费构建，构建时间 10 分钟，2 个团队成员。开源项目每月获得 45 分钟构建时间，+1 并发和无限团队大小。
  * [buddy.works](https://buddy.works/) — 带有 5 个免费项目和 1 个并发运行（每月 120 次执行）的 CI/CD。
  * [Buildkite](https://buildkite.com) CI 流水线免费适用于 3 个用户和每月 5,000 分钟的作业。测试分析免费开发者层包含每月 100,000 次测试执行，并且对于开源项目有更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps。免费适用于少于 20 个用户和 10 个数据库实例。
  * [CircleCI](https://circleci.com/) — 适用于 GitHub、GitLab 和 BitBucket 存储库的全面免费计划，包括所有功能在托管 CI/CD 服务中。多个资源类别、Docker

## Testing

  * [Applitools.com](https://applitools.com/) — 为 Web、原生移动应用和桌面应用提供智能视觉验证。集成几乎所有自动化解决方案（如 [Selenium](https://www.selenium.dev/) 和 [Karma](https://karma-runner.github.io/)）和远程运行器（[Sauce Labs](https://saucelabs.com/)、[Browser Stack](https://www.browserstack.com/)）。开源项目免费，单用户免费套餐，每周限制检查点数量。
  * [Appetize](https://appetize.io) — 在基于云的 Android 手机/平板电脑模拟器和 iPhone/iPad 模拟器上测试您的 Android 和 iOS 应用，直接在浏览器中运行。免费套餐包括两个并发会话，每月使用时间30分钟，无应用大小限制。
  * [Apptim](https://apptim.com) — 一个允许没有性能工程技能的人评估应用性能和用户体验（UX）的移动测试工具。使用您自己的设备的桌面版本100% 免费，在 iOS 和 Android 上具有无限测试。
  * [Argos](https://argos-ci.com) - 面向开发人员的开源视觉测试。无限项目，每月 5,000 张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套连续基准测试工具，以捕获 CI 性能回归。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级 Web 应用测试自动化工具。易于学习，无需编码。在自己的计算机上免费运行无限次测试。还可以额外获得云监控和 CI/CD 集成。
  * [Checkly](https://checklyhq.com) - 针对现代 DevOps 的代码优先的合成监控。以传统提供商的一小部分价格监控您的 API 和应用。由监控即代码工作流和 [Playwright](https://playwright.dev/) 提供支持。开发人员的免费套餐很慷慨。
 

  * [TestCollab](https://testcollab.com) - 一款用户友好的测试管理软件，其免费计划包括 [Jira](Jira 项目管理工具) 集成、无限项目、使用 CSV/XLSx 导入测试用例、时间跟踪和 1 GB 文件存储。
  * [testingbot.com](https://testingbot.com/) — [Selenium](Selenium 浏览器自动化工具) 浏览器和设备测试，[免费用于开源软件](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 一个用于发布自动化测试结果的仪表盘和一个使用 [GitHub](GitHub 代码托管平台) 实现手动测试作为代码的框架。该服务是 [免费用于开源软件](https://github.com/marketplace/testspace-com)，可使用 450 个每月结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发者、个人、教育者和刚开始的小团队可以请求折扣和免费服务，超出基本免费项目。
  * [UseWebhook.com](https://usewebhook.com) - 捕获和检查从浏览器的网络钩子（webhook）。转发到本地主机，或者从历史记录中重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用 [Java](Java 编程语言) 或 [TypeScript](TypeScript 编程语言) 构建可扩展的 UI，并使用集成的工具、组件和设计系统加快迭代速度，改善设计，简化开发过程。无限项目，五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 调试和检查网络钩子和 HTTP 请求，使用集成的唯一 URL。完全免费，您可以创建无限的 URL 并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证网络钩子、发出的 HTTP 请求或电子邮件。临时 URL 和

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 一站式应用安全平台，涵盖 [SCA（软件组件分析）](https://www.aikido.dev)（Software Composition Analysis）、[SAST（安全静态代码分析）](https://www.aikido.dev)（Static Application Security Testing）、[CSPM（云安全姿态管理）](https://www.aikido.dev)（Cloud Security Posture Management）、[DAST（动态应用安全测试）](https://www.aikido.dev)（Dynamic Application Security Testing）、Secrets、[IaC（基础设施即代码）](https://www.aikido.dev)（Infrastructure as Code）、恶意软件、容器扫描、[EOL（结束生命周期）](https://www.aikido.dev)（End-of-Life）等。免费计划包括两个用户、扫描10个仓库、1个云、2个容器和1个域。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 在您的网络中发现受损系统
  * [Altcha.org](https://altcha.org/anti-spam) - 为网站和API提供的垃圾邮件过滤器，使用自然语言处理和机器学习。免费计划每天每个域名200次请求。
  * [atomist.com](https://atomist.com/) — 更快捷、更方便地自动化各种开发任务，现在处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — [AWS（亚马逊网络服务）](https://cloudsploit.com)（Amazon Web Services）安全性和合规性审计和监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 高置信度的公有云基础设施的[IOC（妥协指标）](https://cloudintel.himanshuanand.com)（Indicator of Compromise），部分内容可在github（https://github.com/unknownhad/AWSAttacks）上找到，完整列表可通过API访问
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，提供不可篡改的证明来不化代码、文件、目录或容

  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码对数据进行加密和解密，并自动管理密钥。对于一个应用程序和每月最多1,000,000次加密操作是免费的。
  * [Virgil Security](https://virgilsecurity.com/) — 为您的数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。对于最多250个用户的应用程序是免费的。
  * [Vulert](https://vulert.com) - Vulert持续监控您的开源依赖项中的新漏洞，推荐修复方法，无需安装或访问您的代码库。对于开源项目是免费的。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式扫描您的GraphQL端点的安全性。免费，无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 在20 million个公共GitHub仓库、代码片段、问题和评论中搜索泄露的密钥。免费。


**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 对应用程序和API的细粒度授权服务。最多1000个月活跃用户（MAU）和100个授权实例免费。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素身份验证（MFA）、无密码身份验证等。包括前端和后端应用程序的SDK。最多1000个MAU和五个身份提供者免费。
  * [Auth0](https://auth0.com/) — 托管的单点登录（SSO）。免费计划包括25,000个MAU，不限社会化连接，自定义域名等。
  * [Authgear](https://www.authgear.com) - 在几分钟内将无密码登录、一次性密码（OTP）、两步验证（2FA）和单点登录（SSO）等功能引入您的应用程序。所有前端内容均已包含。最多5000个MAU免费。
  * [Authress](https://authress.io/) — 身份验证登录和访问控制，对任何项目提供无限的身份提供者，包括Facebook、Google、Twitter等。前1000个API调用免费。
  * [Authy](https://authy.com) - 多设备的两步验证（2FA），具有备份功能。可以取代Google Authenticator。最多100次成功身份验证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权和访问控制，最多100个月活跃主体免费。
  * [Clerk](https://clerk.com) — 用户管理、身份验证、两步验证/多步验证（2FA/MFA）、预构建的UI组件用于登录、注册、用户资料等。最多10,000个月活跃用户免费。
  * [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak身份和访问管理服务（IaaS）。最多100个用户和一个领域免费。
  * [Corbado](https://www.corbado.com/) — 将基于密钥的身份验证

## 移动应用分布和反馈

  * [TestApp.io](https://testapp.io) - 您的首选平台，确保您的移动应用程序按预期工作。免费计划：一个应用程序、分析、无限版本和安装，以及反馈收集。
  * [Loadly](https://loadly.io) - 提供完全免费的iOS和Android应用程序分发服务，具有无限下载、高速下载和无限上传功能。
  * [Diawi](https://www.diawi.com) - 将iOS和Android应用程序直接部署到设备。免费计划：应用程序上传、密码保护链接、1天过期、十次安装。
  * [InstallOnAir](https://www.installonair.com) - 在空中分发iOS和Android应用程序。免费计划：无限上传、专用链接、客人2天过期、注册用户60天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用程序进行测试。免费计划包括一个应用程序项目、三个应用程序版本、500 MB存储空间和每月100个应用程序安装。
  * [Appho.st](https://appho.st) - 移动应用程序托管平台。免费计划包括五个应用程序、50个月下载量和最大的文件大小为100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预备好的应用程序。管理1个AWS微实例免费
  * [Esper](https://esper.io) — 为Android设备提供的MDM和MAM，具有DevOps功能。具有一个用户许可证和25 MB应用程序存储空间，可以免费使用100个设备。
  * [jamf.com](https://www.jamf.com/) — 用于管理iPad、iPhone和Macs的设备管理，三个设备免费
  * [Miradore](https://miradore.com) — 设备管理服务。跟踪您的设备群和安全无限设备免费。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发人员部署和管理他们的Web应用程序和服务器。每月免费使用25个Git部署
  * [runcloud.io](https://runcloud.io/) - 服务器管理，主要侧重于PHP项目。免费使用一个服务器。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理和部署服务器和网站。一个服务器免费使用。

**[⬆️ 回到顶部](#目录)**

## 消息和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，支持存在感（presence）、持久性（persistence）和保证交付（guaranteed delivery）。免费计划包括每月300万条消息、100个峰值连接和100个峰值通道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ 作为服务（RabbitMQ as a Service）。Little Lemur 计划：每月最多100万条消息、最多20个并发连接、最多100个队列、最多10,000条排队消息、多个节点在不同可用区（AZ）。
  * [courier.com](https://www.courier.com/) — 单个 API 的推送、应用内、邮件、聊天、短信和其他消息渠道，带有模板管理和其他功能。免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 为开发者提供的多渠道通知基础设施，具有预构建的应用内收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的 MQTT 设备连接到云原生 IoT 消息代理。免费连接最多100个设备（无需信用卡），永久有效。
  * [knock.app](https://knock.app) – 通知基础设施为开发者。向多个渠道发送消息，如应用内、邮件、短信、Slack 和推送，使用单个 API 调用。免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在 5 分钟内将用户通知添加到任何软件中。免费计划包括每月10,000条通知 + 100条短信和自动呼叫。
  * [Novu.co](https://novu.co) — 开源通知基础设施为开发者。简单组件和 API 用于管理所有通信渠道在一个地方：电子邮件、短信、直接、应用内和推送。免费计划包括每月30,000条通知，保留期90天。
  * [pusher.com

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最多100k日志行，保留24小时
  * [logentries.com](https://logentries.com/) — 每月最多5 GB，保留7天
  * [loggly.com](https://www.loggly.com/) — 单个用户免费，200MB/天，保留7天
  * [logz.io](https://logz.io/) — 每天最多1 GB，保留1天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 由Manage Engine提供的日志管理服务。免费计划提供50 GB存储空间，保留15天，搜索保留7天。
  * [papertrailapp.com](https://papertrailapp.com/) — 搜索保留48小时，存档保留7天，50 MB/月
  * [sematext.com](https://sematext.com/logsene) — 每天最多500 MB，保留7天
  * [sumologic.com](https://www.sumologic.com/) — 每天最多500 MB，保留7天
  * [logflare.app](https://logflare.app/) — 每个应用每月最多12,960,000条记录，保留3天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月最多1 GB，保留3天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月最多1,000个用户活动日志，保留1个月，适用于最多5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月最多200 GB的引入量，保留15天

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) —针对 [开源项目（Open Source）](https://zh.wikipedia.org/wiki/%E5%BC%80%E6%BA%90) 的无限项目、无限字符串和协作者
  * [gitlocalize.com](https://gitlocalize.com) - 面向私有和公共仓库免费且无限制
  * [Lecto](https://lecto.ai/) - 机器翻译 [API](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3)，包含免费套餐（每请求30次免费，请求内1000字符翻译）。集成于 [Loco](https://localise.biz/) [Wordpress](https://zh.wikipedia.org/wiki/Wordpress) 插件
  * [lingohub.com](https://lingohub.com/) —最多3个用户免费，开源项目始终免费
  * [localazy.com](https://localazy.com) - 1000源语言字符串免费，多语言支持，无限制贡献者，初创公司和开源项目优惠
  * [Localeum](https://localeum.com) - 最多1000字符串，一个用户，多语言支持，无限制项目
  * [localizely.com](https://localizely.com/) —针对开源项目免费
  * [Loco](https://localise.biz/) —最多2000翻译，无限制翻译人员，每项目10种语言，每项目1000可翻译资源
  * [oneskyapp.com](https://www.oneskyapp.com/) —针对5个以内的用户提供有限的免费版，开源项目免费
  * [POEditor](https://poeditor.com/) —最多1000字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多100翻译键，无限制字符串，多语言支持，初创公司优惠
  * [Texterify](https://texterify.com/) - 单用户免费
  * [Tolgee](https://tolgee.io) - 有限翻译的免费 [SaaS](https://zh.wikipedia.org/wiki/%E8%99%9A%E6%8B%9F%E6%9C%8D%E5%8A%A

## Monitoring

  * [UptimeObserver.com](https://uptimeobserver.com) - 免费提供20个运行时监控（间隔5分钟），以及可自定义的状态页，即使是用于商业用途也完全免费。您还可以通过电子邮件和Telegram享受无限的实时通知，无需信用卡即可开始使用。
  * [Pingmeter.com](https://pingmeter.com/) - 提供5个运行时监控（间隔10分钟），可监控SSH、HTTP、HTTPS和任意自定义的TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 为您的前端（FE）、后端（BE）、数据库（DB）等提供免费的应用性能管理（APM）和监控服务，还有免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 提供24小时的指标监控，应用性能管理代理仅限用于一个Java、一个.NET、一个PHP和一个Node.js环境。
  * [appneta.com](https://www.appneta.com/) — 免费使用，数据保留时间为1小时。
  * [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的任务控制中心。对于小流量使用（64MB日志），完全免费。
  * [assertible.com](https://assertible.com) — 提供自动化API测试和监控服务，团队和个人都可以使用免费计划。
  * [bleemeo.com](https://bleemeo.com) - 免费用于3台服务器、5个运行时监控、无限用户、无限仪表盘和无限报警规则。
  * [checklyhq.com](https://checklyhq.com) - 开源的端到端（E2E）/合成监控和深度API监控，针对开发者。免费计划包括5个用户和50,000+检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — 提供AWS安全性和配置监控。免费使用：无限按需扫描、无限用户、无限存储账户。订阅：自动扫描、API访问等。
  * [cronitor.io](https://cronitor.io/) - 为cron作业、网站、API

  * [sematext.com](https://sematext.com/) — 免费24小时指标， 无限制服务器，十个自定义指标，500,000个自定义指标数据点，无限制仪表盘，用户等
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron & SSL监控，每个类别5个免费监控
  * [sitesure.net](https://sitesure.net) - 网站和Cron监控，2个免费监控
  * [skylight.io](https://www.skylight.io/) — 第100,000个请求免费（仅限Rails）
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
  * [stathat.com](https://www.stathat.com/) — 开始使用十个统计数据，无过期时间
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限制免费测试（有条件）
  * [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监控
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS & 域名监控。监控10台服务器、10个运行时间和10个域名免费
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。3个位置和20个主要Web服务的数据免费
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50个免费监控
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 5个网站的免费监控，60秒间隔，公共状态页
  * [zenduty.com](https://www.zenduty.com/) — 端到端事件管理、告警、值班管理和响应编排平台，适用于网络运营、站点可靠性工程和DevOps团队。最多5个用户免费
  * [instatus.com](https://instatus.com) - 在10秒内获取美丽的状态页。永久免费，订阅和团

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误跟踪，包括截图和点击记录。对于开源项目免费使用。
  * [bugsnag.com](https://www.bugsnag.com/) — 在初始试用期后，每月最多 2,000 个错误免费。
  * [elmah.io](https://elmah.io/) — Web开发者的错误日志和运行时间监控。对于开源项目，提供免费的「小型企业」订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。对于每年最多 1 百万用户会话的小团队免费使用。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月最多 3,000 个事件/1 用户免费。开源且易于自行托管以实现无限制使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误跟踪。兼容开源Sentry SDK。每月最多 1,000 个事件免费，或者可以自行托管以无限制使用。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和cron监控。对于小团队和开源项目免费（每月 12,000 个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。对于[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费提供 100 个设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月最多 5,000 个错误，不限制用户，30 天保留期。
  * [sentry.io](https://sentry.io/) — Sentry实时跟踪应用异常，有一个小型免费计划。每月最多 5,000 个错误/1 用户免费，若自行托管则无限制使用。
  * [Axiom](https://axiom.co/) — 存储最多 0.5

## Search

  * [algolia.com](https://www.algolia.com/) — 提供-hosted 搜索解决方案，包括_potential-tolerance_、_relevance_和_UI_库，_easily_创建搜索体验。Free 的 "Build" 计划包包括 1M documents 和 10K searches/month。也提供 [developer documentation search](https://docsearch.algolia.com/) 供免费使用。
  * [bonsai.io](https://bonsai.io/) — 免费 1 GB 内存和 1 GB 存储
  * [CommandBar](https://www.commandbar.com/) - Unified Search Bar as-a-service，_web_-based UI 小工具/_plugin_，允许用户在您的产品中搜索内容、导航、功能等，从而帮助发现。免费使用，适用于最多 1,000 名月活跃用户，_commands_数量不限。
  * [Magny](https://magny.io) - SaaS 服务，帮助实现命令面板（例如_in-app_搜索），这显著减少了用户在应用中查找任何内容所需的时间，提高了用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费 3 个索引，100K documents/索引，不限全文/向量/混合搜索，60 天分析
  * [searchly.com](http://www.searchly.com/) — 免费 2 个索引和 20 MB 存储

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供免费的 [数据分析](Data Analysis) 、 [信息安全](Information Security) 、 [Web 开发](Web Development) 等课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，拥有专注于 [JavaScript](JavaScript) 和 [Ruby](Ruby) 的 Web 开发课程。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供许多经验丰富的专业人士的简历模板，支持克隆、编辑和下载，且经过 [ATS](ATS) 优化。
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业领先专家的免费短期课程，帮助您在一小时或更短的时间内获取最新的 [生成式 AI](generative AI) 工具和技术的实践经验。
  * [LabEx](https://labex.io) - 通过交互式实验室和真实世界的项目，开发 [Linux](Linux) 、 [DevOps](DevOps) 、 [网络安全](Cybersecurity) 、 [编程](Programming) 、 [数据科学](Data Science) 等方面的技能。
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，涵盖从 [区块链](Blockchain) 到 [UX 设计](UX Design) 的所有开发方面。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费的与认证相关的课程，涵盖网络安全、网络和 [Python](Python) 等主题。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - 麻省理工学院开放课程，是一个在线发布的超过 2500 门麻省理工学院课程材料的平台，免费与全球的学习者和教育者分享知识。可以在 [Youtube](https://www.youtube.com/@mitocw/featured) 上找到[@mitocw](https://www.youtube.com/@mitocw/featured) 频道。
  * [W3Schools](https://www.w3schools.com/) - 提供 [HTML](HTML

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费、临时邮箱用于测试。
  * [AhaSend](https://ahasend.com) - 交易邮箱服务，免费使用1000封电子邮件每月，拥有无限域名、团队成员、webhook和消息路由的免费计划。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮箱转发，免费创建无限邮箱别名。
  * [Antideo](https://www.antideo.com) - 免费邮箱验证、IP和电话号码验证，每小时10次API请求，无需信用卡。
  * [Brevo](https://www.brevo.com/) - 每月9,000封电子邮件，300封电子邮件每天免费。
  * [OneSignal](https://onesignal.com/) - 每月10,000封电子邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费10个Bump邮箱地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费5个Burner邮箱地址，1个邮箱，7天邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 新闻邮件服务，免费订阅者最多100人。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收电子邮件，及发送交易电子邮件，免费10,000封电子邮件每月。
  * [Contact.do](https://contact.do/) — 链接中的联系表单（类似于bitly）。
  * [debugmail.io](https://debugmail.io/) — 开发人员易用的测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 最多2个电子邮件地址在您的域名下免费使用，100MB存储空间。IMAP、POP3、SMTP、SPF/DKIM支持。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9,000封电子邮件，每天最多300封。
  * [EmailOctopus](https://emailoctopus.com) - 最多2,500订阅者，每月10,000封电子邮件免费。
  * [Email

  * [QuickEmailVerification](https://quickemailverification.com) — 每天免费验证100封邮件的免费层次，以及其他免费API，如 [DEA](DEA 解费地址(Anti-Money Laundering)) 检测器、[DNS](域名解析服务)查找、[SPF](发件人策略框架)检测器等。
  * [Resend](https://resend.com) - 交易性电子邮件API，适用于开发者。每月3,000封邮件，100封邮件/天免费，一个自定义域名。
  * [Sender](https://www.sender.net) 每月最多15,000封电子邮件，最多2,500名订阅者
  * [SendGrid](https://sendgrid.com/) — 每天100封电子邮件和2,000个联系人免费
  * [Sendpulse](https://sendpulse.com) — 500名订阅者/月，15,000封电子邮件/月免费
  * [SimpleLogin](https://simplelogin.io/) – 开源、自托管的电子邮件别名/转发解决方案。5个别名免费，带宽无限制，回复/发送无限制。面向教育人员（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 无限制的免费通讯服务。当你开始收费时开始付费。
  * [Sweego](https://www.sweego.io/) -欧洲开发者交易性电子邮件API。500封电子邮件/天免费。
  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，轻松发送电子邮件。每月500封交易电子邮件免费。
  * [temp-mail.io](https://temp-mail.io) — 多个电子邮件可同时使用，并转发的免费一次性临时电子邮件服务
  * [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
  * [Touchlead](https://touchlead.app) - 一个多功能的营销自动化工具，具有潜在客户管理、表单构建器和自动化功能。适用于有限数量的潜在客户和自动

## 功能切换管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一项针对开发者的功能开关（feature flag）服务，具有无限团队规模、优异的支持和合理的价格标签。免费计划最高支持10个标志、两个环境、1个产品和每月500万个请求。
  * [Flagsmith](https://flagsmith.com) - 在网页、移动和服务器端应用程序中自信地发布特性；在整个系统中管理功能开关。使用我们的托管API、部署到您自己的私有云，或者在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试提供商，内置贝叶斯统计分析引擎。适用于最多3个用户，功能开关和实验数量不限。 
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用程序配置，具有类似Git的版本控制和同步的内存本地标志评估。对于最多5个团队成员免费，功能开关和A/B测试数量不限。
  * [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试。每个环境最多免费支持3个环境和5个功能开关。
  * [Toggled.dev](https://www.toggled.dev) - 面向企业的、可扩展的多区域功能切换管理平台。免费计划最多支持10个标志、两个环境、不限请求数。SDK、分析仪表盘、发布日历、Slack通知和所有其他功能都包含在无限免费计划中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等的强大平台。其慷慨的免费计划提供无限座位、标志、实验和动态配置，支持每月最高100万个事件。
  * [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试。配置即代码和完全类型化的TypeScript SDK。与Next.js和React等框架强烈集成。慷慨的免费层次和廉价的扩展选

## 字体

  * [dafont](https://www.dafont.com/) - 本网站上提供的字体是其作者的所有物，分为免费软件（freeware）、共享软件（shareware）、演示版本（demo versions）或公共领域（public domain）。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器（Units Converter）、字体阴影（Font Hinter）和字体提交工具（Font Submitter）。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供免费字体，适用于商业用途。手工选择这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以轻松快速地通过下载或链接到Google的内容分发网络（CDN）在网站上安装。
  * [FontGet](https://www.fontget.com/) - 提供了大量可下载的字体，并以标签的形式整齐分类。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个专业级别的字体集合，100%免费用于个人和商业用途。
  * [Befonts](https://befonts.com/) - 提供多种独特的字体，用于个人或商业用途。
  * [Font of web](https://fontofweb.com/) - 可以识别出网站上使用的所有字体及其使用方法。
  * [Bunny](https://fonts.bunny.net) 面向隐私的Google Fonts
  * [FontsKey](https://www.fontskey.com/) - 提供免费和付费的商业字体，用于个人用途，可以输入文本快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) 免费且开源的服务，使用CSS将字体家族 достав到网站。
  * [Fontsensei](https://fontsensei.com/) 是开源的Google字体，由用户添加标签，包含CJK（中文、日文、韩文）字体标签。

**[⬆️ 回到顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 强大的、面向开发者的表单构建工具。可以构建注册、登录、用户引导、支付流程、复杂的金融应用程序等。免费计划允许每月最多250次提交和5个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。支持垃圾邮件过滤、电子邮件通知和自动回复、webhook、Zapier集成、重定向、AJAX或POST等功能。免费计划提供无限表单、20次提交/月，并且带有Form-Data徽章可以额外获得2000次提交。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费计划每月允许250次表单提交。现代化的GUI和Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) — 适用于HTML表单提交的endpoint。支持通知、垃圾邮件拦截和GDPR合规数据处理。基本使用免费。
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单endpoint。免费计划每月允许100次提交。
  * [formingo.co](https://www.formingo.co/) - 适用于静态网站的易用HTML表单。无需注册账户即可开始使用。免费计划每月允许500次提交和自定义回复邮箱地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，50次月提交，垃圾邮件保护，电子邮件通知和可导出HTML的拖放设计器。额外功能包括自定义字段规则、团队和Google Sheets、Slack、ActiveCampaign、Zapier集成。
  * [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，电子邮件通知。
  * [formspark.io](https://formspark.io/) -  表单至邮件服务。免费计划允许无限表单，每月250次提交，支持客户辅助团队。
  * [

  * [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，配备GPT（[通用预训练模型](https://zh.m.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E9%A2%84%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B)）的AI分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集25条反馈。提供React和Vue组件，易于集成。
**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [Keywords AI（关键词AI）](https://keywordsai.co) - 最好的LLM（大语言模型）监控平台。一种格式可以用2行代码调用200+ LLMs。每月有10,000个免费请求，平台功能无需付费！
  * [Portkey（港口键）](https://portkey.ai/) - 面向Gen AI应用的控制面板，包含可观察性套件和AI网关。每月可免费发送和记录多达10,000个请求。
  * [Braintrust（脑信托）](https://www.braintrustdata.com/) - 用于Gen AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000个私人评估行。
  * [Findr（寻找者）](https://www.usefindr.com/) - 支持同时搜索所有应用的通用搜索。支持使用您的信息回答问题的搜索助手。免费计划提供无限统一搜索和5个每日合作飞行员查询。
  * [ReportGPT（报告GPT）](https://report-gpt.io) - AI驱动的写作助手。整个平台免费使用，只要您带来自己的API密钥。
  * [Clair（克莱尔）](https://askclair.ai/) - 临床AI参考。学生可以免费访问专业工具套件，包括Open Search、临床总结、Med Review、药物相互作用、ICD-10代码和管理。同时，专业套件还提供免费试用。
  * [Langtrace（语言跟踪）](https://langtrace.ai) - 允许开发者跟踪、评估、管理提示和数据集，并调试与LLM应用程序性能相关的问题。它为任何LLM创建开放遥测标准跟踪，帮助提高可观察性，并与任何可观察性客户端配合使用。免费计划每月提供50K跟踪。
  * [Ultra AI（超级AI）](https://ultraai.app) - 您的产品的AI命令中心。功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型回退和用户速率限制。永远免费计划每月提供10k+请求和除缓存外的

## 内容分发和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — Bootstrap（Bootstrap 框架）, Bootswatch（Bootswatch 主题）和 fontawesome.io（FontAwesome 图标库）的 CDN 服务
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。内容分发的最佳选择。 cdnjs 是一个免费、开源的 CDN 服务，受信于超过 11% 的所有网站， 由 Cloudflare 提供支持。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库（Google Hosted Libraries）是一个内容分发网络，为最流行的开源 JavaScript 库提供服务
  * [Stellate](https://stellate.co/) - Stellate 是一个超快、可靠的 CDN，用于您的 GraphQL API，免费使用两个服务。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 CDN。支持 npm，GitHub，WordPress，Deno 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管流行的第三方 JavaScript 库，如 jQuery，使您可以轻松将它们添加到 Web 应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的 DDoS 防护和 SSL 证书
  * [Skypack](https://www.skypack.dev/) — 100% 本地 ES 模块 JavaScript CDN。每个域名每月免费 1 万次请求。
  * [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，使用 Cloudflare 托管文件
  * [section.io](https://www.section.io/) — 一个简单的方式来创建和管理一个完整的 Varnish Cache 解决方案。据称，一个站点永远免费
  * [statically.io](https://statically.io/) — Git 仓库（GitHub，GitLab，Bitbucket）的 CDN，WordPress 相关资产和图像
  * [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永远不会失败的 CD。个人使用，单个开发者，免费

## PaaS

  * [anvil.works](https://anvil.works) - 只需使用 Python 即可开发 Web 应用。免费套餐，无限应用且超时时间为 30 秒。
  * [appwrite](https://appwrite.io) - 无限项目，不暂停项目（支持 Websocket）和身份验证服务。免费套餐每个项目包含 1 个数据库、3 个桶和 5 个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，两个项目免费，功能有限但无资源限制
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源、跨平台移动应用开发工具链。商业使用免费，项目数量无限制
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，具有从 TypeScript 代码自动生成的视觉 CMS。内置 A/B 测试、内容分段和实时分析。适合内容丰富和企业电子商务网站。免费套餐每月页面浏览量最高 5k 或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，支持边缘全局运行 JavaScript、TypeScript 和 WebAssembly。免费套餐每天包含 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – Linux 主机服务，提供 GitHub、SSH 和 MariaDB/Postgres 数据库的 CI/CD。免费版本存储空间 1 GB，网络限制 1 GB/月，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 使用静态分析提供自动化基础设施、无样板代码和更多功能的后端框架。包括爱好者项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 使用 Git 推送样式工作流，在您的 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 存储库的单个开发者的免费套餐。AWS 成本通过 AWS 收费，但您可以使用信用额度和 AWS 免费套餐。
  * [gigalixir.com](https://gigalix

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程以连接应用程序后端中的多个应用程序。例如，当应用程序中发生事件时，可以发送Slack消息或添加谷歌表格行。每月最多5,000个任务免费。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse Platform的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和Web后端即服务，提供1 GB文件存储、每月50,000条推送通知和1,000个数据对象的表格。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将启动您的Python API在我们的函数运行时和托管存储中，构建和托管在我们的在线编辑器或使用您喜欢的工具进行本地构建。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源来构建和部署企业的数字化创新。访问一个包含平台、SDK和组件库的综合个人沙盒，这些组件可以用于构建和定制应用程序。
  * [connectycube.com](https://connectycube.com) - 不限聊天消息、点对点语音和视频通话、文件附件和推送通知。最多1,000个用户的应用程序免费。
  * [convex.dev](https://convex.dev/) - 反应式后端即服务，托管您的数据（具有关系和可序列化ACID事务的文档）、服务器端函数和WebSockets以将更新流式传输到各个客户端。适用于小型项目免费 - 最多1M记录、5M月度函数调用。
  * [darklang.com](https://darklang.com/) - 结合编辑器和基础设施的托管语言。在测试版期间可访问，测试版后计划有一个慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase帮助您构建和运行成功的应用程序。免费的Spark计划提供身份验证、托管、Firebase ML

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一种低代码平台，用于构建可自定义的移动和Web应用的业务流程应用。提供拖放界面、离线支持、实时位置跟踪等功能，以及与各种第三方服务的集成。
  * [Basedash](https://www.basedash.com) — 用于构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — 一个开源的低代码平台，用于创建内部应用程序。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s等。
  * [appsmith](https://www.appsmith.com/) — 一个低代码项目，用于构建管理面板、内部工具和仪表盘。集成15多个数据库和任意API。
  * [ToolJet](https://www.tooljet.com/) — 一个可扩展的低代码框架，用于构建业务应用程序。连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖放应用程序构建器构建应用程序。
  * [ReTool](https://retool.com/) — 一个低代码平台，用于构建内部应用程序。Retool高度可定制，如果您可以使用JavaScript和API编写代码，您可以在Retool中实现。免费版本允许每月最多五个用户，应用程序和API连接无限制。
  * [DronaHQ](https://www.dronahq.com/) — 一个低代码平台，帮助工程团队和产品经理构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板、运营应用程序，速度提高10倍。
  * [ILLA Cloud](https://www.illacloud.com/) — 一个强大的开源低代码平台，供开发人员构建内部工具。使用ILLA的组件和操作库，开发人员可以节省大量构建工具的时间。免费适用于5个团队成员。
  * [outsystems.com](https://www.outsystems.com/) — 企业Web开发PaaS，适用于本地或云环境，免费的“个人环境”提供无限代码和最多1 GB数据库。


## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 提供100 MB的免费网页托管服务，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义网页服务器，通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用程序安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费网页托管 + 免费短域名，PHP、MySQL、应用程序安装器、电子邮件发送和无广告。
  * [Bohr](https://bohr.io) — 免费用于非商业项目 + 开发者优先的部署和开发平台，尽量减少基础设施繁琐和加速设置。
  * [Bubble](https://bubble.io/) — 使用视觉编程构建网页和移动应用程序，无需代码，带有Bubble品牌的免费版。
  * [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化网页托管平台，专注于提高可用性和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在应用程序平台启动器层上免费构建和部署三个静态网站。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管网站。仅限静态网站。永久免费。每个Google/Microsoft帐户一个网站。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个用于托管网站和实时共享的开发者桌面应用程序。使用其美丽的用户界面、API和/或CLI工作。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上构建和托管基于Markdown的文档网站。您甚至可以从API定义文件自动为您的网站生成API参考。该网站托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管带PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费的公用 [DNS](Domain Name System, 域名系统) 解析器，速度快且安全（加密您的 [DNS](域名系统) 查询），由 [Cloudflare](云flare) 提供。有助于绕过您的互联网服务提供商的 [DNS](域名系统) 屏蔽，防止 [DNS](域名系统) 查询窥探，并 [屏蔽成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它也可以通过 [API](Application Programming Interface, 应用程序接口) 使用。注意：仅是一个 [DNS](域名系统) 解析器，不是一个 [DNS](域名系统) 主机。
  * [1984.is](https://www.1984.is/product/freedns/) — 拥有 [API](应用程序接口) 和许多其他免费 [DNS](域名系统) 功能的免费 [DNS](域名系统) 服务。
  * [cloudns.net](https://www.cloudns.net/) — 最多支持 1 个域名的免费 [DNS](域名系统) 主机，含 50 条记录
  * [deSEC](https://desec.io) -面向安全设计的免费 [DNS](域名系统) 主机，支持 [API](应用程序接口)。运行在开源软件上，并由 [SSE](Secure Systems Engineering, 安全系统工程) 支持。
  * [dns.he.net](https://dns.he.net/) — 支持动态 [DNS](域名系统) 的免费 [DNS](域名系统) 主机服务
  * [Zonomi](https://zonomi.com/) — 支持立即 [DNS](域名系统)播送的免费 [DNS](域名系统) 主机服务。免费计划：1 个 [DNS](域名系统) 区域（域名）含最多 10 条 [DNS](域名系统) 记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费 [DNS](域名系统) 主机。
  * [duckdns.org](https://www.duckdns.org/)

## 域名

  * [eu.org](https://nic.eu.org) — 免费eu.org域名，请求通常在14天内批准。
  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名。
  * [us.kg](https://nic.us.kg/) - 免费us.kg子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 与 [AWS S3](https://aws.amazon.com/cn/s3/) 兼容 - 支持API、接口操作、[CLI](https://zh.wikipedia.org/wiki/命令行界面)（命令行接口）和其他上传方法，以安全、方便、效率的方式从 [IPFS](https://zh.wikipedia.org/wiki/星际文件系统) 和 [Arweave](https://www.arweave.org/) 网络上传和存储文件。注册用户可以免费获得6 GB的IPFS存储空间和300MB的Arweave存储空间。任何小于150 KB的Arweave文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) — [Backblaze B2](https://www.backblaze.com/b2/) 云存储。无限期免费10 GB（类似 [Amazon S3](https://aws.amazon.com/cn/s3/) ）的对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。无限期免费5 GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容的对象存储。免费25 GB存储空间和250GB外网传输流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容的对象存储。免费10 GB存储空间和每月10 GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容的对象存储。免费15 GB存储空间和每月15 GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，包含单节点、1 CPU、1GB RAM，PostgreSQL 和 MySQL 包含 5GB 存储。可以轻松迁移到更高级别的计划或跨云服务。
  * [airtable.com](https://airtable.com/) — 看起来像一个电子表格，但它是一个关系型数据库，具有无限的基数、1200 行/基数和 1000 个 API 请求/月
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 基于云的 Cassandra 服务，拥有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 服务器无边界 API/后端和 NoSQL 数据库服务，包含函数、Mongdb-ish 查询、键值查询、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划包含 5GB 存储和每分钟 60 个 API 调用，包含 2 名开发人员，无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。 [免费层 CRFREE](https://crate.io/lp-crfree)：单节点，2 CPU，2 GiB 内存，8 GiB 存储。每个组织一个集群，无需支付方法。
  * [FaunaDB](https://fauna.com/) — 服务器无边界云数据库，具有原生 GraphQL、多模型访问和每日免费层，最高可达 100 MB
  * [Upstash](https://upstash.com/) — 服务器无边界 Redis，免费层每天最高可达 10,000 个请求，256MB 最大数据库大小，20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层可获得 512 MB 存储
  * [redsmin.com](https://www.redsmin.com/) — Redis 的在线实时监控和管理服务，监控 1 个 Redis 实例免费
  * [redislabs](https://

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 使用单个命令为localhost设置公用网址，无需下载。支持HTTPS / TCP / TLS隧道。免费计划的隧道有效期为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，用于将IIS Express暴露到本地网络或通过隧道暴露到公用网址。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管的VPN服务，允许您安全地将类似局域网的网络扩展到分布式团队，免费计划可允许无限网络，最多5人。
  * [Mirna Sockets](https://mirna.cloud/) - Socket即服务平台，部署Web Socket Server代码时提供wss://网址，并允许您监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公用网址。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露到公用网址。免费托管版本和[开源](https://github.com/localtunnel/localtunnel)版本。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露到公用网址。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN使多台计算机相互连接。无限制对等网络。（Hamachi的替代品）
  * [segment.com](https://segment.com/) — 与其他第三方服务进行事件转换和路由的枢纽。每月10万次事件免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:

## 问题追踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和 [SCRUM](SCRUM软件开发方法) 软件，适用于最多5名团队成员
  * [asana.com](https://asana.com/) — 私人项目协作，免费
  * [Backlog](https://backlog.com) — 一个平台包含您的团队所需的一切，以发布优秀项目。免费计划提供1个项目，10名用户和100MB的存储空间。
  * [Basecamp](https://basecamp.com/personal) - 待办事项清单、里程碑管理、类似论坛的消息传递、文件共享和时间跟踪。最多3个项目、20名用户和1GB的存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 内联网和项目管理工具。免费计划为无限用户提供5GB存储空间。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、[UML](统一建模语言)、网络。免费，最高15名用户/图表，25张表格
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克牌，节省冲刺估算的时间。最多5名用户免费，免费的[Jira](Jira项目管理工具)集成，视频通话无限，团队无限，会话无限。
  * [clickup.com](https://clickup.com/) — 项目管理。免费，高级版本包含云存储。移动应用程序和[Git](Git版本控制系统)集成可用。
  * [Clockify](https://clockify.me) - 时间跟踪器和时表应用程序，允许您跨项目跟踪工作时间。无限用户，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的架构图表，仅需几分钟即可使用Cloudcraft视觉设计器，针对[Amazon Web Services（AWS）](Amazon Web Services)进行优化，智能组件显示实时数据。免费计划为单个用户提供无限私人图表。
  * [Codegiant](https://codeg

  * [plan.io](https://plan.io/) — 项目管理，仓库托管等功能。两个用户，十个客户，500MB存储空间免费使用
  * [Plane](https://plane.so/) - Plane是一个简单、可扩展、开源的项目和产品管理工具。无限成员，文件上传大小最多5MB，1000个问题，免费使用
  * [planitpoker.com](https://www.planitpoker.com/) — 在线规划扑克（估算工具）免费使用
  * [point.poker](https://www.point.poker/) - 在线规划扑克（基于协商的估算工具）。无限用户，团队，会话，回合，投票，不需要注册，免费使用
  * [ScrumFast](https://www.scrumfast.com) - Scrum板，拥有非常直观的界面，免费使用，最高5个用户
  * [Shake](https://www.shakebugs.com/) - 移动应用内的错误报告和反馈工具。免费计划，每个应用每月10个错误报告
  * [Shortcut](https://shortcut.com/) - 项目管理平台。免费使用，最高10个用户，永久有效
  * [Tadum](https://tadum.app) - 为反复举行的会议设计的会议议程和会议纪要应用，免费使用，最高10个团队成员
  * [taiga.io](https://taiga.io/) — 项目管理平台，适合初创公司和敏捷开发人员，免费使用，仅适用于开源项目
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费计划，有无限任务，冲刺和工作空间，无用户限制
  * [targetprocess.com](https://www.targetprocess.com/) — 视觉项目管理，从看板和Scrum到几乎任何运营流程。免费使用，无限用户，最高1000个数据实体 {[更多细节](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划，有一个工作空间，无限任务和项目；1GB文件存储；1周项目历史；每次视频会议

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件分享平台，具有无限速度、带宽、文件数量、下载次数等功能。主要针对Android开发相关文件，如APK构建、自定义ROM和修改等，但也接受其他文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单安全的离站备份托管，用于Borg Backup。10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB免费存储
  * [sync.com](https://www.sync.com/) - 端到端云存储服务。5 GB免费存储
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多10 GB免费存储
  * [sirv.com](https://sirv.com/) — 智能图片CDN，具有即时图片优化和调整尺寸功能。免费套餐包括500 MB存储和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图片优化和CDN服务，在全球拥有1500+节点。各种图片调整尺寸、压缩和水印功能。开源插件用于响应式图片、360度图片制作和图片编辑。免费每月计划，包括25GB CDN流量、25GB缓存存储和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 图片上传、强大的操作、存储和分发，适用于网站和应用，包括Ruby、Python、Java、PHP、Objective-C等库。免费套餐包括25个每月积分，一个积分等于1000次图片转换、1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) — 提供在网页中嵌入媒体的API、响应式图片缩放和从网页中提取元素。免费至5,000个URL/月，15次请求/秒
  * [filestack.com](https://www.filestack.com/) — 文件选择器、转换和分发，免费250个文件、500次转换和3 GB带宽
  * [file.io](https://www

  * [imagekit.io](https://imagekit.io) – 图像 CDN，具有自动优化、实时转换和可以在几分钟内与现有设置集成的存储功能。免费计划包括每月高达 20GB 的带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive 是一个基于绝对隐私和坚定安全的零知识文件存储服务。注册并免费获得 10 GB，永久有效！
  * [degoo.com](https://degoo.com/) – 基于 [AI](人工智能) 的云存储，免费高达 20 GB，三个设备，5 GB 推荐奖励（90 天账户不活动）。
  * [MConverter.eu](https://mconverter.eu/) – 批量转换文件。支持许多文件格式，包括新的格式如 [AVIF](https://mconverter.eu/convert/to/avif/)。从视频中提取所有图像帧。每天免费处理高达十个 100MB 的文件，分批处理两个。
  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一个易于使用的全局图像 CDN。设置时间少于 60 秒。具有 [AVIF](人工智能图像文件格式) 和 [JPEGXL](JPEG 扩展)支持，具有 [WordPress](WordPress) 、[Magento](Magento) 、[React](React) 、[Vue](Vue) 插件等。[申请免费开发者帐户](https://imageengine.io/developer-program/)。
  * [DocsParse](https://docsparse.com/) – 由 [GPT](通用预训练模型) 驱动的 [AI](人工智能) 处理 [PDF](便携式文档格式) 、图像，转换为 [JSON](JavaScript 对象表示法) 、[CSV](逗号分隔值) 、[EXCEL](Excel) 格式的结构化数据。每月免费获得 30 创作积分。

**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 一个整理好的免费（Free）图像、音频和视频列表。
  * [Float UI](https://floatui.com/) - 一个免费的网络开发工具，用于快速创建现代化、响应式（Responsive）网页，具有时尚的设计，即使是非设计师（Non-designer）也可以使用。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供了一个由 Ant Motion 的动态组件构建的模板。它具有丰富的首页模板，可以下载模板代码包，并可以快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) — Backlight 是一个完整的编码平台，旨在开发者和设计师之间的协作。它允许团队构建、记录、发布、扩展和维护设计系统（Design System）。免费计划允许最多 3 位编辑者在一个设计系统上协作，有无限的查看者。
  * [BoxySVG](https://boxy-svg.com/app) — 一个免费的可安装 Web 应用，用于绘制 SVG 并以 SVG、PNG、JPEG 等格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 一个免费的在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 一套一致的开源图标，包括 SVG 格式，适用于 React、Vue 和 Svelte。
  * [cleverbrush.com](https://www.cleverbrush.com/) — 一个免费的图形设计/照片拼贴应用。他们还提供此应用的付费集成版本。
  * [cloudconvert.com](https://cloudconvert.com/) — 可以将任何格式转换为任何其他格式的工具，支持 208 种格式，包括视频和 GIF।
  * [CodeMyUI](https://codemyui.com) - 一个精心收集的网络设计和 UI 灵感集合，含代码片段。
  * [ColorKit](https://colorkit.co/) - 创建色彩调色板或从顶级调色板中获取灵感。
  * [co

  * [storyset.com](https://storyset.com/) — 使用此工具为您的项目创建令人难以置信的免费自定义插图。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品 [Mockup](https://zh.wikipedia.org/wiki/Mockup) 模拟图，提供200个免费模板。
  * [tabler-icons.io](https://tabler-icons.io/) — 超过1500个可复制和粘贴、可编辑的 [SVG](https://zh.wikipedia.org/wiki/SVG) 图标。
  * [UI Avatars](https://ui-avatars.com/) - 根据名字首字母生成头像。可以直接在网页或应用中使用这些头像的链接，并支持通过 [URL](https://zh.wikipedia.org/wiki/URL) 参数进行配置。
  * [unDraw](https://undraw.co/) - 一套不断更新的漂亮的 [SVG](https://zh.wikipedia.org/wiki/SVG) 图像集合，您可以完全免费使用，不需要署名。
  * [unsplash.com](https://unsplash.com/) - 适用于商业和非商业用途的免费 [Stock Photo](https://zh.wikipedia.org/wiki/Stock_photo) 图片（[do-whatever-you-want license](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%94%B1%E5%8D%8F%E8%AE%AE)）。
  * [vectr.com](https://vectr.com/) — 适用于网络和桌面的免费设计应用程序。
  * [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，免费计划最多包含三个向导，每个向导最多包含5个步骤。
  * [Webflow](https://webflow.com) - 支持动画和网站托管的 [WYSIWYG](https://zh.wikipedia.org/wiki/WYSIWYG) 网站生成器。免费用于两个项目。
  * [Updrafts.app](https://updrafts.app) - 针对 [Tailwind CSS](https://zh.wikipedia.org/wiki/Tailwind_CSS) 设计的 [WYSIWYG](https://zh.wikipedia.org/wiki/WYSIWYG) 网站生成器。免费用于非商业用途。
  * [whimsical.com](https

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站]（由设计师投票选出的最佳设计网站）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台。可以根据类别（如 UI/UX 项目）进行筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 展示出宛如概念设计的独特设计灵感，大多非真实应用界面。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好查找最佳的网页登陆页以供设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登陆页 / UI 工具包 / 网页截图] Lapa Ninja 是一个展示来自全球 6025 个最佳登陆页示例的画廊，提供免费的设计师书籍和 UI 工具包。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登陆页设计] 经常更新的登陆页截图。包括台式机、平板电脑和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动设备截图] 通过我们的 50,000+ 充分可搜索的移动应用截图库，节省数小时的 UI 和 UX 研究时间。
  * [Uiland Design](https://uiland.design/) - [移动设备截图] 浏览来自非洲和世界各地领先公司的移动设备和 Web UI 设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动设备截图] 一个设计灵感库，展示出最精美的 UI UX 模式（iOS 和 Android），供设计师、开发者和产品制造商参考。
  * [Page Flows](https://pageflows.com/) - [移动设备/网页视频和截图] 记录了许多移动设备和网页应用的完整流程视频。同时包括截图，高可搜索性和索引。
  * [Screenlane](https://screenlane.com/) - [移动设备截图] 获取灵感并跟上最新的网页和移动应用 UI 设计

## 在地图上进行数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 免费开发者计划（developer plan），每月可请求30K次。
  * [carto.com](https://carto.com/) — 从您的数据和公共数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样运作的映射工具。每月有五万个免费查询（地图瓦片、 db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 为地图、地理空间数据存储、分析、地理编码、路由和更多提供API和SDK，支持Web、桌面和移动设备。每月可免费获得200万基础地图瓦片、20,000个非存储地理编码、20,000个简单路线、5,000个驱动时间计算和5GB免费的瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、场所搜索和从Places API和Pilgrim SDK获取的上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量地图瓦片、栅格地图瓦片、地理编码、场所、路由和等时线API。每天有三千个免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天有2,500个免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月有10,000个免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查找API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 提供免费的开发者套餐，用于路由、路由优化、距离矩阵、地理编码和地图匹配。
  * [here](

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多个Linux发行版（SUSE、[Enterprise Linux](企业级Linux)， [Fedora](费多拉)， [Debian](德比安)等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于[Mock](模拟环境)的[Fedora](费多拉)和[EL](企业级Linux)的[RPM](红帽包管理器)构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — [Ubuntu](乌班图)和[Debian](德比安)的软件包构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP shell 和代码分享网站，支持300+版本的PHP
  * [Android Studio](https://developer.android.com/studio) — Android Studio提供了构建Android应用程序的最快工具，支持所有类型的Android设备。开源的IDE免费提供给所有人，是最好的Android应用开发工具。可在Windows、Mac、Linux和ChromeOS上使用！
  * [AndroidIDE](https://m.androidide.com/) —無料开放源码的IDE，用于在Android设备上开发真实的、基于Gradle的Android应用程序。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 协作设计API，提供即时的API模拟和生成文档（无限API蓝图和用户，一个管理员帐户和托管文档，免费）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费模式提供了一组[强大的核心功能](https://www.barebones.com/products/bbedit/comparison.html)，并可以升级到高级功能。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集。它是免费的公共服务。
  * [BlueJ](https://bluej.org) —免费的Java开发环境，专为初学者设计，全球数百万用户。由Oracle提供支持，简单的GUI帮助初学者。
  * [Bootify.io](https://bootify.io/) - Spring Boot应用程序生成器，支持自定义数据库和REST API。
  * [Brackets](http://brackets.io/) - Brackets是一款专门为Web开发设计的开源文本编辑器。它轻量、易于使用且高度可定制。
  * [cacher.io](https://www.cacher.io) —支持100+编程语言的代码片段组织工具，具有标签支持。
  * [Code::Blocks](https://codeblocks.org) —免费的Fortran & C/C++ IDE。开源，支持Windows、macOS和Linux。
  * [Cody](

  * [SoloLearn](https://code.sololearn.com) — 一个基于云的编程平台（cloud programming playground），非常适合运行代码片段。支持多种编程语言（programming languages）。无需注册（registration）即可运行代码，但在保存代码到他们的平台时是必要的。同时提供了针对初学者和中级开发者的免费课程（free courses）。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云端代码编辑器（Online/Cloud Code IDE），用于创建、编辑和部署全栈应用（full-stack apps）。支持任何基于 [Node.js](https://nodejs.org/) 的前端和后端框架。创建新项目的快捷链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行、多功能且高度可定制的文本编辑器（text editor），用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 代码编辑器（code editor）重新定义并优化，用于构建和调试现代 Web 和云应用（modern web and cloud applications）。由 [Microsoft](https://www.microsoft.com/) 开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) —功能齐全的集成开发环境（IDE），包含数千个扩展插件（extensions），支持跨平台应用开发（cross-platform app development）（可下载 [Microsoft](https://www.microsoft.com/) 扩展用于 [iOS](https://www.apple.com/ios/) 和 [Android](https://www.android.com/)），桌面、Web 和云开发，多语言支持（[C#](https://docs.microsoft.com/en-us/dotnet/csharp/), [C++](https://isocpp.org/), [JavaScript](https://www.javascript.com/), [Python](https://www.python.org/), [PHP](https://www.php.net/) 等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动的、无追踪、自由许可的 [Microsoft](https://www.microsoft.com/) 编辑器 [VSCode](https://code.visualstudio.com/) 的二进制分发版本。
  * [w

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观察性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一种反向 ETL 平台，帮助您从数据仓库同步客户数据到 CRM、营销和支持工具。免费版本提供一个目标来同步数据。
  * [Avo](https://avo.app/) — 简化的分析发布工作流程。单一来源的跟踪计划、类型安全的分析跟踪库、应用程序调试器和数据可观察性以捕获发布之前的所有数据问题。两个工作空间成员和 1 小时数据可观察性回顾免费。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版本提供最多 10K 移动应用用户，深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（Git、Github 和 Gitlab）。免费版本包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 和运营分析平台。从数据仓库同步 10 个字段到 60+ SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划为一个网站提供 3000 次浏览分析。
  * [Databox](https://databox.com) — 通过结合其他分析和 BI 平台获得商业洞察和分析。免费计划提供 3 个用户、仪表盘和数据源。11M 历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 2,000 次页面浏览量，适用于 1 个网站
  * [amplitude.com](https://amplitude.com/) — 每月 1,000 万个事件，最多 2 个应用程序
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源的 Web 分析平台，可作为托管服务（非商业用途免费）或自托管应用程序使用。它

  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源 [Google Analytics](https://analytics.google.com/) 替代品。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的、轻量级的注重隐私的 [Google Analytics](https://analytics.google.com/) 替代品。无限页面浏览量、无限访客、无限页面热力图和目标跟踪。对于最多 3 个域名和每个域名 600 会话回放免费使用。
  * [AppFit](https://appfit.io) - [AppFit](https://appfit.io) 是一款全面的分析和产品管理工具，旨在实现跨平台的分析和产品更新的无缝管理。免费计划包括每月 10,000 个事件、产品日志和每周洞察。
  * [Seline](https://seline.so) - [Seline](https://seline.so) 是一款简单且注重隐私的网站和产品分析工具。无需Cookie、轻量、独立。免费计划包括每月 3,000 个事件，并提供对所有功能的访问权限，例如仪表盘、用户旅程、漏斗等。

**[⬆️ 回到顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个网站：1,000 次页面浏览/天，三个热力图，三个小部件，免费的 Bug 追踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，用于 Bug 重现的开发工具，实时支持的实时会话和产品分析套件。每月 1,000 次会话，拥有所有功能的使用权和 7 天的保留期。
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 次会话，保留期 30 天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月 1,000 次会话，数据保留期为一个月，三个用户席位。更多信息，请点击 [这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个网站：每月 1,050 次页面浏览，不限热力图，数据存储为三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 为一个网站每月提供 2,500 次免费会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) -完全免费的会话录制，“无流量限制”，无项目限制和无采样
  * [mouseflow.com](https://mouseflow.com/) — 为一个网站每月提供 500 次免费会话
  * [mousestats.com](https://www.mousestats.com/) — 为一个网站每月提供 100 次免费会话
  * [smartlook.com](https://www.smartlook.com/) —适用于 Web 和移动应用程序的免费套餐（每月 1,500 次会话），三个热力图，一个漏斗，1 个月的数据历史记录
  * [howuku.com](https://howuku.com) — 跟踪用户交互，参与度和事件。免费适用于最多 5,000 次每月访问量
  * [UXtweak.com](https://www.uxtweak.com/) — 记录和观看访客如何

## 国际手机号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球手机号码验证和查询的JSON API，每月100个API请求
  * [veriphone](https://veriphone.io/) — 全球手机号码验证，快速、可靠的JSON API，每月1000个请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 跨平台订阅管理平台，提供分析（Analytics）、A/B 测试、Apple Search Ads、远程配置（Remote Configs）等功能，用于优化应用内购买和盈利。支持 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 Web。月度收入在 10,000 美元以下免费使用。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，扩大业务范围，进入新市场（购买力平价）。免费计划包括每月 7,500 个 API 请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和开箱即用的盈利工具，支持 iOS、Android、Stripe 和 Paddle。月度收入在 10,000 美元以下免费使用。
  * [Adapty.io](https://adapty.io/) – 一站式解决方案，提供开源 SDK，用于移动应用内订阅集成，支持 iOS、Android、React Native、Flutter、Unity 或 Web 应用。月度收入在 10,000 美元以下免费使用。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法定货币兑换率。免费层提供每月 10,000 个调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币兑换率。免费 DEVELOPER 计划可用，每月 1,000 个请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币兑换率和历史数据。演示 API 具有每分钟 30 次调用和每月 10,000 次调用限制。
  * [CurrencyApi](https://currencyapi.net/) — 提供实时货币汇率，包括物理货币和加密货币，采用 JSON 和 XML 格式。免费层提供每月 1,250 个 API 请求。
  * [currencylayer](https://currencylayer.com/) — 为

## 与Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供 20 个免费的私有仓库，为团队提供 30 个免费的私有仓库，以构建和存储Docker镜像
  * [Container Registry Service](https://container-registry.com/) - 基于 [Harbor](https://goharbor.io/) 的容器管理解决方案。免费版提供 1 GB 的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 提供一个免费的私有仓库和无限数量的公开仓库来构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的Docker的学习平台。
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限数量的免费公开仓库
  * [ttl.sh](https://ttl.sh/) - 匿名和短暂的Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp（哈希集团）的Vagrant Cloud，是用于[Vagrant](https://www.vagrantup.com/)盒子的托管服务。
  * [Vagrantbox.es](https://www.vagrantbox.es/) —— 一个公共[Vagrant](https://www.vagrantup.com/)盒子的替代索引

**[⬆️ 返回顶部](#目录)**

## 开发博客

  * [BearBlog](https://bearblog.dev/) - 极简主义的 [Markdown](https://zh.wikipedia.org/wiki/Markdown) （标记语言）驱动的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员分享想法和相互帮助的平台。
  * [Hashnode](https://hashnode.com/) — 适合开发者的无忧博客软件。
  * [Medium](https://medium.com/) — 更加深思熟虑地思考与你相关的事情。
  * [AyeDot](https://ayedot.com/) — 与世界分享你的想法、知识和故事，免费以现代多媒体短格式 Miniblogs 的形式呈现。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站受众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个轻量级的评论插件，基于 [GitHub](GitHub) issues 构建。使用 [GitHub](GitHub) issues 来处理博客评论、wiki 页面和更多内容！
  * [Disqus](https://disqus.com/) - [Disqus](Disqus) 是一个网路社区平台，被数十万个网站在全球范围内使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源评论平台，按需付费，提供“对一个或多个域名上所有评论进行完全控制的权限”。
  * [IntenseDebate](https://intensedebate.com/) - 为 [WordPress](WordPress)、[Tumblr](Tumblr)、[Blogger](Blogger) 等多个网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 基于 [AWS Lambda](https://aws.amazon.com/lambda/) （无服务器计算服务）和 [Chrome](https://www.google.com/chrome/) 的截图 API，支持全页面截图、捕获计时和视口尺寸。
  * [microlink.io](https://microlink.io/) – 可以将任何网站转换为数据，包括元标签规范化、美化链接预览、网页抓取能力或截图服务。每天免费 250 次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图 API 使用简单的 API 调用生成任何网站的截图。设计用于扩展并托管在 [Google Cloud](https://cloud.google.com/) 上。每月提供 100 次免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 可以捕获任何网站的高度可定制的快照。每月免费 100 次快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 可以捕获每月 100 次快照，支持 png、gif 和 jpg 格式，包括全长捕获，不仅限于首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费套餐每天最多提供 500 页。2017 年推出的免费套餐。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名智能 API 服务。每月免费 100 次请求。
  * [Httpic.com](https://httpic.com) — 可以将任何网站转换为 jpg、png 或 pdf。捕获全页面截图，调整视口，并注入自定义代码。每月 150 张图片的免费套餐。
  * [Screenshots](https://screenshotson.click) — 您的截图 API，具有高度可定制的捕获选项。每月免费 100 次截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代的基于网页的 Flutter 集成开发环境（Integrated Development Environment，IDE），是创建、调试和构建跨平台项目的最佳去处。使用 Flutter 可以构建 iOS（无需 Mac）和 Android 应用程序。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一款完全托管的移动应用程序 [持续集成/持续部署（Continuous Integration/Continuous Deployment，CI/CD）](https://en.wikipedia.org/wiki/Continuous_integration) 工具。您可以使用基于图形用户界面（Graphical User Interface，GUI）的 CI/CD 工具构建、测试和部署应用程序。免费版本每月提供 500 分钟的使用时间和一个配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) -  FlutterFlow 是一个基于浏览器的拖拽式界面，用于使用 Flutter 构建移动应用程序。

**[⬆️ 回到顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的x86虚拟机，能够运行Linux和Windows 2000（操作系统）。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —  一个OpenRISC虚拟机，能够运行具有网络支持的Linux。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，能够直接在浏览器中运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流来帮助实施「隐私保护设计（Privacy by Design）」，使组织符合通用数据保护条例（[GDPR](https://gdpr-info.eu/））和其他法规要求。免费版本仅限于较小团队和SaaS版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，涵盖从GDPR代理到Cookie横幅的所有功能。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和Cookie政策以及同意管理。免费版本提供有限的隐私和Cookie政策以及Cookie横幅。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计和多语言同意管理解决方案。免费版本提供一次性扫描和单个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，但访问人数有限。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费版本包括核心同意管理功能，他们还为已验证的开源项目提供更高级的免费计划。

**[⬆️ 回到顶部](#目录)**

## Miscellaneous

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图像创建美观的截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件。可作为美观的图像（例如用于 Twitter / Facebook 帖子）或链接（例如用于聊天或论坛）进行分享。
  * [Blynk](https://blynk.io) — 一个具有 API 的 [软件即服务（SaaS）](Software as a Service（SaaS）)产品，用于控制、构建和评估 [物联网（IoT）](Internet of Things（IoT）) 设备。免费开发者计划包含 5 个设备，免费云和数据存储。移动应用程序也可用。
  * [Bricks 笔记计算器](https://free.getbricks.app/) - 一个具有强大的内置多行计算器的笔记应用程序（[渐进式Web应用（PWA）](Progressive Web App（PWA）））。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建和分享代码片段的美观截图格式。通常用于在 Twitter 或博客文章中美观地分享/展示代码片段。
  * [代码时间](https://www.software.com/code-time) - 一个用于 [Visual Studio Code（VS Code）](Visual Studio Code（VS Code）)、[Atom](https://atom.io/)、[IntelliJ](https://www.jetbrains.com/zh-cn/intellij-idea/)、[Sublime Text](https://www.sublimetext.com/) 等的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从您的源代码创建优秀的快照，以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图，以便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) -_SCHEDULE_ 分时或重复的 [Webhook](Webhook)_. 免费计划允许 5 个一次性调度。
  * [cron-job.org](https://cron-job.org) - 在线_[cronjob](cronjob)_ 服务

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) — 免费用于2个设备，无会话数量和时长限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端 [远程桌面门户](Remote Desktop) (客户端即客户端软件，指在用户终端运行的软件，与服务器软件相对)
  * [RemSupp](https://remsupp.com) — 按需支持和永久访问设备（每天2次免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 类似精灵（sprites）、瓦片集（tile sets）和角色包（character packs）的免费/付费资源
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自世界各地游戏艺术家的免费游戏资源
  * [GameDevMarket](https://gamedevmarket.net) — 类似2D、3D、音频、GUI的免费/付费资源
  * [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、声音、精灵和GIF
  * [CraftPix](https://craftpix.net) — 类似2D、3D、音频、GUI、背景、图标、瓦片集、游戏套件的免费/付费资源
  * [Game Icons](https://game-icons.net/) - 使用CC-BY许可提供的可样式化的SVG/PNG图标
  * [LoSpec](https://lospec.com/) — 用于创建像素艺术和其他限制性数字艺术的在线工具，拥有大量的教程和用于选择游戏的调色板列表
  * [ArtStation](https://www.artstation.com/) - 免费/付费2D、3D资产和音频、图标、瓦片集、游戏套件的市场。同时也可以用于展示您的艺术作品集
  * [Rive](https://rive.app/community/) - 社区资源以及使用其免费计划创建您自己的游戏资源
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形（low poly）3D资源
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费的3D模型和PBR材质，用于制作纹理
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0通用许可）2D、3D、音频和UI游戏资源
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（具有可变分辨率）、模型、HDRIs和刷子。提供免费的插件以导出到Blender等软件
  * [

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 始终免费的网页开发工具，包括 CSS 压缩、解压缩、图像优化、图像重置、字符转换器、CSS 验证器、JavaScript 编译器、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月获得多达 200 小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) — 更好的 `*.localhost.direct` 通配符公钥证书用于本地主机开发，支持子域。
  * [Framacloud](https://degooglions-internet.org/en/) — 由法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/开源软件和 SaaS 列表。
  * [github.com — 开发者开源软件](https://github.com/tvvocold/FOSS-for-Dev) — 开发者的免费开源软件中心。
  * [GitHub 教育](https://education.github.com/pack) — 学生免费服务集合，需要注册。
  * [Markdown 工具](https://markdowntools.com) - 将 HTML、CSV、PDF、JSON 和 Excel 文件转换为 Markdown 及其逆向转换工具。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒、工具和其他构建 Microsoft 365 平台解决方案所需的资源。订阅包括 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续期，续期条件是需要保持活跃的开发活动（通过遥测数据和算法衡量）。
  * [Pyrexp](https://pythonium.net/regex) — 免费的基于 web 的正则表达式测试和可视化工具，用于调试正则表达式。
  * [RedHat 开发者](https://developers.redhat.com) — 面向开发者的 Red Hat 产品免费访问，包括 RHEL、OpenShift、CodeReady 等，仅限个人计划。同时提供免费的电子书作为参考。