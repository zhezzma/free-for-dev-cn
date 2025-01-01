# free-for.dev

现在，开发者和开源作者有很多提供免费试用的服务，但是找到它们并做出明智的决定往往需要花费大量时间。

这是一个关于软件（SaaS、PaaS、IaaS 等）和其他类型的免费开发者版服务的列表。

这个特定列表的范围仅限于系统管理员、DevOps 工程师等基础设施开发者可能会发现有用的内容。我们喜欢所有的免费服务，但保持主题会更有意义。有时候，界限并不那么明确，所以这部分是主观的。如果您对被拒绝的贡献感到不满，不必介意。

这个列表源于 Pull 请求、评审、想法以及 1600 多人共同完成的工作。您也可以通过 [Pull 请求](https://github.com/ripienaar/free-for-dev) 添加更多服务或移除服务，如果它们的服务性质发生改变或已退役。

[![跟踪.awesome列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意：** 这个列表只包含作为服务提供的内容，不包括自托管软件。服务要合格列入，必须提供免费版，而不仅仅是试用版。如果时间计量，免费版必须至少持续一年。我们还从安全性角度考虑免费版，SSO 是接受的，但我不会接受只对付费版提供 TLS 限制的服务。

# 目录

  * [主要云提供商的免费限制](#主要云提供商的免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计数据](#分析、事件和统计数据)
  * [APIs、数据和机器学习](#APIs、数据和机器学习)
  * [artifact存储库](#artifact存储库)
  * [BaaS（后端即服务）](#BaaS（后端即服务）)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成和持续交付](#持续集成和持续交付)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和UI](#设计和UI)
  * [设计灵感](#设计灵感)
  * [开发博客网站](#开发博客网站)
  * [DNS](#DNS)
  * [Docker相关的](#Docker相关的)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [特性开关管理平台](#特性开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式AI](#生成式AI)
  * [IaaS（基础设施即服务）](#IaaS（基础设施即服务）)
  * [IDE和代码编辑](#IDE和代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息传递和流媒体](#消息传递和流媒体)
  * [其他类别](#其他类别)
  * [监控](#监控)
  * [PaaS（平台即服务）](#PaaS（平台即服务）)
  * [

## 主要云提供商的免费限制

  * **Google Cloud Platform**（谷歌云平台）
    - [App Engine](https://cloud.google.com/appengine)：28个前端实例小时/天，9个后台实例小时/天
    - [Cloud Firestore](https://cloud.google.com/firestore)：1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    - [Compute Engine](https://cloud.google.com/compute)：1个非抢占式e2-micro实例，30GB硬盘，5GB备份存储（限特定区域），北美每月1GB网络出站至所有区域目的地（不含中国和澳大利亚）
    - [Cloud Storage](https://cloud.google.com/storage)：5GB存储，1GB网络出站
    - [Cloud Shell](https://cloud.google.com/shell)：基于Web的Linux Shell/主要IDE，带有5GB持久存储。每周限60小时
    - [Cloud Pub/Sub](https://cloud.google.com/pubsub)：每月10GB的消息
    - [Cloud Functions](https://cloud.google.com/functions)：每月200万个调用（包括背景和HTTP调用）
    - [Cloud Run](https://cloud.google.com/run)：每月200万个请求，360,000GB-秒内存，180,000vCPU-秒计算时间，每月北美1GB网络出站
    - [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)：无单个区域集群的管理费用，每个用户节点按标准Compute Engine定价收费
    - [BigQuery](https://cloud.google.com/bigquery)：每月1TB查询，每月底10GB存储空间
    - [Cloud Build](https://cloud.google.com/build)：每天120分钟构建时长
    - [Cloud Source Repositories](https://cloud.google.com/source-repositories)：最多5名用户，50GB存储，50GB出站带宽
    - **[Google Colab](https://colab.research.google.com)**：免费开发环境，支持Jupyter Notebooks
    - **[idx.dev](https://idx.dev)** Google项目IDX，基于云端的在线VSCode环境
    - 全详细清单 - <https://cloud.google.com/free>

  * **Amazon Web Services**（

    **日志分析 - 每天500MB的日志量**
1. **完整详细列表** : [IBM Cloud 免费版](https://www.ibm.com/cloud/free/)

### Cloudflare
1. **应用程序服务**
    - 免费DNS支持无限个域名，DDoS防护，CDN，免费SSL，防火墙规则和页面规则，WAF（网络应用防火墙），Bot Mitigation（针对恶意机器人防护），免费无限制速率限制 - 每个域名一条规则，分析，电子邮件转发
    - [零信任 & SASE](https://www.cloudflare.com/plans/zero-trust-services/)：支持50个用户，24小时活动记录，三个网络位置
    - [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/)：无需账户即可在trycloudflare.com上将本地运行的HTTP端口暴露为隧道，可通过[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)，涵盖更多功能（TCP隧道、负载均衡、VPNs）在零信任[免费方案](https://www.cloudflare.com/products/zero-trust/)中
    - [Workers](https://developers.cloudflare.com/workers/)：在Cloudflare全球网络上免费部署无服务器代码-每日请求达100,000次
    - [Workers KV](https://developers.cloudflare.com/kv)：每日100,000次读请求，1,000次写请求，1,000次删除请求，1,000次列表请求，存储数据1GB
    - [R2](https://developers.cloudflare.com/r2/)：每月10GB存储量，每月1,000,000个A类操作，10,000,000个B类操作
    - [D1](https://developers.cloudflare.com/d1/)：每日5,000,000行读取，每日100,000行写入，1GB存储空间
    - [Pages](https://developers.cloudflare.com/pages/)：在Cloudflare快速、安全的全球网络上开发和部署您的网络应用。每月500个构建，100个自定义域名，集成SSL，无限可访问席位，无限预览部署，以及通过Cloudflare Workers集成的

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一个可视化协作工具，用于从头到尾构建和管理云基础设施。
  * [Cloud 66](https://www.cloud66.com/) - 对个人项目免费（包含一个部署服务器和一个静态站点），Cloud 66帮助您在任何云上构建、部署和扩展应用，而无需担心“服务器相关的问题”。
  * [Pulumi](https://www.pulumi.com/) - 一个现代的基础设施即代码平台，使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) - Terraform Cloud。为最多500个资源提供免费的远程状态管理和团队协作。
  * [scalr.com](https://scalr.com/) - Scalr是一个用于与Terraform管理的基础设施和配置进行更好协作和自动化的工具。支持完整的Terraform CLI，集成OPA，以及分级配置模型。无需SSO权限，所有功能都包含在内。免费版每月可以使用50个任务执行。
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。在免费层面上，开发者（单用户）可以部署无限的静态站点、网络服务和环境。每月包含预览和自动部署的免费版提供20个作业执行。

**[⬆️ 返回目录顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 提供最多5个用户使用，无限公开和私有Git仓库，并且包含CI/CD功能的Pipelines
  * [chiselapp.com](https://chiselapp.com/) — 提供无限数量的公开和私有Fossil仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 免费一个项目，包含100MB空间和2个用户的空间
  * [Codeberg](https://codeberg.org/) — 提供免费和开源项目的无限公开和私有Git仓库。由[Forgejo](https://forgejo.org/)支持。还有静态网站托管[Codeberg Pages](https://codeberg.page/)，CI/CD通过[Codeberg's CI](https://docs.codeberg.org/ci/)，还有[Codeberg Translate](https://translate.codeberg.org/)进行翻译托管。功能包括包和容器托管、项目管理、问题跟踪等
  * [GitGud](https://gitgud.io) — 免费提供无限数量的私有和公开仓库。由GitLab与Sapphire驱动。不提供CI/CD服务
  * [GitHub](https://github.com/) — 包含无限数量的公开仓库和无限数量的私有仓库（每个可以有无限合作者）。包含 CI/CD、开发环境、静态托管、包和容器托管、项目管理和AIcopilot人工智能助手
  * [gitlab.com](https://about.gitlab.com/) — 提供无限数量的公共和私有Git仓库，支持最多5个合作者。包含 CI/CD、静态托管、容器镜像仓库、项目管理以及问题追踪
  * [framagit.org](https://framagit.org/) — 该服务是基于GitLab软件的Framasoft 软件开发 forge，功能包括CI、静态页面、项目页面和问题追踪
  * [heptapod.net](https://foss.heptapod.net/) — 是GitLab Community Edition的一个友好的分支，支持Mercurial
  * [ionicframework.com](https://ionicframework.com/appflow) — 提供开发Ionic应用程序所需的仓库和工具。同时也提供Ionic的项目仓库
  * [NotABug](https://notabug.org) — 一个基于Git的免费开源代码协作平台，特定于自由开源项目
  *

## APIs、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑和过滤复杂JSON数据，将其精美转换为表格网格。通过链接分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将您的Google表格转换为强大的API，快速开发原型、网站、应用等。每月免费提供500个请求。
  * [IP.City](https://ip.city) — 每天免费提供100个IP地址的地理定位请求。
  * [Abstract API](https://www.abstractapi.com) — 提供各种用途的API套件，包括IP定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网页抓取和自动化平台，为任何网站创建API并提取数据。免费计划每月包含5美元的平台信用。
  * [APITemplate.io](https://apitemplate.io) - 使用简单API或自动化工具如Zapier和Airtable自动生成图像和PDF文档。免费版包含每月50个图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 提供理解API和后端所有必要工具的套装。自动进行API合同验证和监控。免费计划适用于每月20,000个请求的服务器。
  * [APIVerve](https://apiverve.com) - 尽享超过120个免费API，以质量、一致性、可靠性为核心构建。免费计划包含每月50个API令牌。
  * [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和解决数据质量、性能漂移等问题。免费计划包含两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 一个轻量级库，用于构建可即时访问的单页Web应用，支持Java、Node.js、Perl、Python和Ruby。
  * [Beeceptor](https://beeceptor.com) - 分秒之间模拟REST API，伪造API响应等。每天免费提供50个请求，公共仪表板以及开放端点（任何人都可以通过仪表板链接查看提交和响应）。
  * [bigml.com](https://bigml.com/) — 提供托管机器学习算法。开发免费任务无限，单个任务数据限制为16 MB。
  * [Browse

  * [DB 设计师](https://www.dbdesigner.net/) — 一款基于云端的数据库模式设计和建模工具，提供免费试用版，包括2个数据库模型和每个模型最多10个表。
  * [DeepAR](https://developer.deepar.ai) — 用于任何平台的增强现实面部滤镜 SDK。免费账户每月最多支持10个活跃用户（MAU），并追踪多达4张人脸。
  * [Deepnote](https://deepnote.com) - 具有实时协作功能的新型数据科学笔记本。免费版包含无限个人项目、标准硬件最多750小时的使用时间和最多3名编辑的团队支持。
  * [Diggernaut](https://www.diggernaut.com/) — 集成到任何网站的云端网站抓取和数据提取平台，可将网页转换为数据集或API使用。免费版每月允许5K次页面请求。
  * [Disease.sh](https://disease.sh/) — 提供构建与 Covid-19 相关应用所需准确数据的免费 API。
  * [Doczilla](https://www.doczilla.app/) — 一款基于云端的 API 助手，用于直接根据 HTML/CSS/JS 代码生成屏幕快照或 PDF。免费版每月支持250个文档。
  * [Doppio](https://doppio.sh/) — 提供顶级渲染技术生成和私密存储 PDF和屏幕截图的管理 API。免费版每月允许400个 PDF和屏幕截图。
  * [Dreamfactory](https://dreamfactory.com/) — 开源的 REST API 后端，适用于移动、Web 和 IoT 应用。连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，立即创建功能全面的REST API平台，附加实时文档和用户管理。
  * [DynamicDocs](https://advicement.io) - 使用 LaTeX 模板生成基于 JSON 的 PDF 文档。免费版每月允许50个 API 调用，并可访问模板库。
  * [Efemarai](https://efemarai.com) — 一个用于模型和数据测试与调试的平台。免费版本每月为开发者提供30个调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 免费的基于网络的 HTTP 客户端，

  * [IPTrace](https://iptrace.io) - 提供可靠和有用的IP位置数据的简单API。
  * [JSON2Video](https://json2video.com) - 一个自动化视频营销和社交媒体视频的视频编辑API，可编程或无需代码操作。
  * [JSON IP](https://getjsonip.com) — 获取客户端请求的公共IP地址。免费版无需注册。使用CORS，您可以直接从浏览器使用客户端端JS获取数据。便于监控客户端和服务器IP的变化。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 免费服务，帮助开发者存储JSON对象并将其作为REST API在应用程序中使用。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建假REST API，可自定义HTTP状态代码、头和响应体。
  * [konghq.com](https://konghq.com/) — API市场以及强大的私有和公共API工具。免费版有限制一些功能如监控、警报和支持。
  * [Kreya](https://kreya.app) — 免费gRPC GUI客户端，用于调用和测试gRPC API，可导入通过服务器反射的gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确数据改善机器学习模型。免费版允许使用最多1000样本数据。
  * [LoginLlama](https://loginllama.app) — 用于检测欺诈和可疑登录的安全API，并通知客户。每月免费提供1000登录次数。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 利用真实邮件服务器连接进行电子邮件验证服务。免费版每月可验证300个电子邮箱。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等实时和历史金融数据。免费Forever版每天100个API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 提供全球实时和预报天气数据的气象API。免费计划每天400次请求。
  * [microlink.io](https://microlink.io/) — 将任何网站转化为元标签标准化、美观链接预览、数据抓取或云服务下的截图能力。免费每天100次请求。
  * [Mindee](

  * [Insomnia](https://insomnia.rest) - 一个开源的API客户端，用于设计和测试API，支持REST和GraphQL。
  * [PrefectCloud](https://www.prefect.io/cloud/) — 提供数据流自动化的完整平台。所有计划每月包含20,000次免费运行。这足以支持大多数小型企业的ETL。
  * [Preset Cloud](https://preset.io/) - 一个托管的Apache Superset服务。五个用户以下的团队是永久免费的，包含无限的仪表板和图表、无代码图表构建器和协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 一个面向创作者和开发者的提示工程平台。它提供提示工程库、表单和API。免费计划提供一个提示结构、一个提示API端点，以及每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用AI和大型语言模型（如GPT-3），使用简单的Google Sheets电子表格公式来转换、理解和分析文本。每月前2,000个信用卡记分是免费的。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可抓取和刮擦网站。我们为您解决验证码，并防止您被屏蔽。前1000次调用是免费的。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 包含免费公开API的列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板自动生成根据输入的图像。免费计划允许您每周创建最多100张图像。
  * [QuickMocker](https://quickmocker.com/) — 以自己的子域名管理在线假API端点，将请求转发到本地URL进行Webhook开发和测试，支持正则表达式和多种HTTP方法URL路径等。免费账户提供一个随机子域名，十个端点，5条URL路径正则表达式，每个端点50个短代码，每天100个请求，以及要求日志中的50条记录。
  * [Rapidapi](https://rapidapi.com/) — 世界上最大的API中心，数百万开发人员发现并连接几千个API，使用有趣挑战（有解决方案）和互动示例进行API开发。
  *

  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方Webhook并在本地调试(类似于ngrok)的工具。开源并可自托管。提供免费个人域名 *username*.github.webhook.store，以及免费公共域名 *anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai) - 开发者优先的MLOps平台。通过实验追踪、数据集版本控制和模型管理，更快构建更好的模型。仅对个人项目提供免费层级，包括100 GB的存储空间。
  * [wit.ai](https://wit.ai/) - 用于开发者的自然语言处理工具。
  * [wolfram.com](https://wolfram.com/language/) - 云端知识驱动算法。
  * [wrapapi.com](https://wrapapi.com/) - 将任何网站转换成具有参数的API。每个月提供3万个API调用额度。
  * [ZenRows](https://www.zenrows.com/) - 网页抓取API和代理服务器，可绕过反机器人的解决方案，同时支持JavaScript渲染、代理轮换和地理定向。免费版提供1000个API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) - 带有无头浏览器、居民IP和简单定价的网页抓取API。每月提供1000个免费API调用，并为学生和非营利组织提供额外积分。
  * [ip-api](https://ip-api.com) - IP定位API，适用于非商业用途，无需API密钥，免费计划时，同一IP地址每分钟限制在45个请求。
  * [WebScraping.AI](https://webscraping.ai) - 提供内置解析、Chrome渲染和代理的简单网页抓取API。每月提供2000个免费调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费提供全球邮政编码数据的邮编API。每月免费请求额度为1万个。
  * [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费版每月最多3万个字符输入。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单且免费的V

## artifact存储库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS等多种包格式的艺术品仓库。包括包扫描工具XRay和CI/CD工具Pipelines（之前称为Shippable），每月提供2,000分钟的免费CI/CD时间。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认艺术品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的，私有和公共的Maven和PyPi仓库。免费供开源项目使用。
  * [cloudsmith.io](https://cloudsmith.io) — 简单，安全，集中的服务，支持Java/Maven、Red Hat、Debian、Python、Ruby、Vagrant等。提供免费层级，以及对开源项目的免费支持。
  * [jitpack.io](https://jitpack.io/) — 用于GitHub上的JVM和Android项目的Maven仓库，公共项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 用于Maven、RPM、DEB、PyPI、NPM和RubyGem包的易于使用的仓库托管服务（有免费层级）。
  * [repsy.io](https://repsy.io) — 1 GB免费的私有/公共Maven存储库。
  * [Gemfury](https://gemfury.com) — 提供Maven、PyPI、NPM、Go Module、Nuget、APT和RPM仓库的私有和公共艺术品库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用程序。免费计划：公共项目，5Gb存储，基础实例。
  * [RepoForge](https://repoforge.io) - 私有的云托管仓库，支持Python、Debian、NPM包和Docker注册表。对开源/公共项目提供免费计费。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用版包含10GB存储、10GB带宽、100个包

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的云端代码片段管理器，用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com) — 最简单、最安全的为个人、团队和企业组织存储、分享和同步敏感数据的方式。
  * [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。免费版适用于公开访问组，不限用户数，历史记录和集成。还提供自托管开源版本。
  * [cally.com](https://cally.com/) — 寻找会议的完美时间和日期。易于使用，适用于小团队和大团队。
  * [Calendly](https://calendly.com) — Calendly 是连接和安排会议的工具。免费计划提供每个用户1个日历连接和无限的会话。也提供桌面和移动应用。
  * [Discord](https://discord.com/) — 具有公共或私人房间的聊天平台，支持 Markdown 文本、语音、视频和屏幕共享。免费版支持无限用户。
  * [Telegram](https://telegram.org/) — 更换快速、可靠的短信和通话服务。企业用户和小型团队可能会喜欢大型群组、用户名、桌面应用和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建器。抓取屏幕截图、记录过程并与团队协作。还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 实时与团队聊天和协作。支持 IDE、终端共享、语音、视频和屏幕共享。免费版适用于小型团队。
  * [Dyte](https://dyte.io) — 高度适合开发者使用的实时视频和音频 SDK，配备了增强生产力和参与度的协作插件。免费版包含每月10,000分钟的实时视频/音频使用量。
  * [evernote.com](https://evernote.com/) — 信息整理工具。分享笔记并与他人合作。
  * [Fibery](https://fibery.io/) — 连接工作空间平台，单个用户免费，2GB的存储空间。
  * [flock.com](https://flock.com) — 提供团队更快的沟通方式。免费版包括无限消息、频道、用户、应用及集成。
  * [Gather

  * [摆钟](https://pendulums.io/) — 是一个免费的时间跟踪工具，通过简单易用的界面帮助你更好地管理时间，并提供有价值的数据统计。
  * [Pumble](https://pumble.com) — 免费团队聊天应用，无限用户和消息记录，永远免费。
  * [Raindrop.io](https://raindrop.io) — 私密、安全的书签管理应用，适用于macOS、Windows、Android、iOS和Web。免费无限书签，支持协作。
  * [Element.io](https://element.io/) — 基于矩阵的去中心化开源通信工具，提供群聊、一对一消息、加密文件传输、语音和视频通话以及与其他服务的轻松集成。
  * [Rocket.Chat](https://rocket.chat/) — 开源通信平台，拥有多渠道功能、矩阵联盟、与其他应用的桥接、无限消息以及完整的消息历史记录。
  * [seafile.com](https://www.seafile.com/) — 私有存储或云存储，文件分享、同步、讨论。云版本仅包含1GB存储空间。
  * [Sema](https://www.semasoftware.com/) — 免费的开发人员作品集工具，可将多仓库的贡献汇总并整合到单一报告中。
  * [Browser上的屏幕分享](https://screensharing.net) — 免费屏幕共享工具，无需下载或注册即可与合作者共享屏幕。
  * [Slab](https://slab.com/) — 一个现代的团队知识管理服务，10个用户以下免费。
  * [slack.com](https://slack.com/) — 无限用户免费，但某些功能有限。
  * [Spectrum](https://spectrum.chat/) — 免费创建公开或私密社区。
  * [StatusPile](https://www.statuspile.com/) — 用于监控上游提供者状态页面的状态页面工具。
  * [Stickies](https://stickies.app/) — 可视协作应用，用于头脑风暴、内容组织和笔记，免费版本包含3个墙体、无限用户和1GB存储。
  * [Stacks](https://betterstacks.com/) — 内容工作区，具有集成的笔记、链接和文件存储功能，用于应对信息过载。个人版永久免费。
  * [talky.io](https://talky.io/) — 免费

  * [Pullflow](https://pullflow.com)——提供增强的人工智能平台，用于Github、Slack和VS Code之间的代码审查协作。
  * [Webex](https://www.webex.com/)——视频会议，免费计划提供每场会议40分钟，可容纳100名参会者。
  * [RingCentral](https://www.ringcentral.com/)——视频会议，免费计划提供每场会议50分钟，可容纳100名参与者。
  * [GitBook](https://www.gitbook.com/)——一个用于捕获和记录技术知识的平台，范围从产品文档、内部知识库到API。免费版适用于个人开发者。
  * [transfernow](https://www.transfernow.net/)——最简单、最快且最安全的文件传输和分享界面。无需订阅即可发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/)——基于JavaScript和加密的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/)——一个开源的[Discord](https://discord.com/)替代品，注重隐私。它还提供Discord大部分专有功能，免费使用。Revolt是一个集安全、快速和全部功能于一身的应用，100%免费，并支持（官方和 unofficial）插件。
  * [Tencent RTC](https://trtc.io/)——腾讯实时通信（TRTC）提供群组音频/视频通话解决方案。首年免费时长10,000分钟。
  * [Pastefy](https://pastefy.app/)——美观且简单的 Pastebin，可选的客户端加密、多标签粘贴、API、高亮编辑器等。
  * [SiteDots](https://sitedots.com/)——直接在网站项目上分享反馈，无需仿真、canvas或工作流。完全免费版功能齐全。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Acquia.com](https://www.acquia.com/) — 提供Drupal站点托管。对开发者提供免费层次。免费开发工具（例如Acquia Dev Desktop）也已就绪。
  * [内容管理器](https://www.contentful.com/) — 预体内容管理器。云上的内容管理和交付API。它包含一个免费的社区空间，其中包括五个用户、25,000个记录、48个内容类型和2个区域。
  * [Cosmic](https://www.cosmicjs.com/) — 预体内容管理器和API工具包。为开发者提供免费个人计划。
  * [Crystalize](https://crystallize.com) — 预体产品目录管理和电商支持。自带GraphQL API。免费版包括不限制的用户、1,000个目录项、每月5GB带宽和每月25,000次API调用。
  * [DatoCMS](https://www.datocms.com/) — 对小型项目提供免费层次。DatoCMS是一个基于GraphQL的内容管理系统。较低层次，您每月有100,000次调用。
  * [Directus](https://directus.io) — 预体内容管理系统。一个完全免费且开源的平台，用于本地或云中管理资产和数据库内容。无限制，也无支付壁垒。
  * [FrontAid](https://frontaid.io/) — 预体内容管理系统，将JSON内容直接存储在您的Git存储库中。没有限制。
  * [kontent.ai](https://www.kontent.ai) - 内容服务提供平台，让您在保持预体内容管理系统所有益处的同时，还能增强营销人员的实力。开发者计划提供两个用户，每个用户无限项目，每个环境有两个，500个内容项，两种语言配送和管理API，以及自定义元素支持。您可以根据需求使用更详细的计划。
  * [Prismic](https://www.prismic.io/) — 预体内容管理系统。具有完全托管和可扩展API的内容管理界面。社区计划为一个用户提供不限数量的API调用、文档、自定义类型、资产和区域。这是您下一个项目所需的一切。为开源/开源项目提供了更大的免费计划。
  * [Sanity.io](https://www.sanity.io/) - 为结构化内容提供平台，以及开源

## 代码生成

  * [Appinvento](https://appinvento.io/) - AppInvento是一个免费的无代码应用构建器。在自动产生的后端代码中，用户可以完全访问源代码，并且不限制API和路由，支持广泛集成。免费计划包括三个项目、五个表单和一个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody是一款编程AI助理，使用AI和对代码库的深入理解帮助您更快地编写和理解代码。Cody为开发者提供了多个LLM（包括本地推理）的选择，支持各种IDE，支持所有主流编程语言，并有一个免费计划。免费计划提供每月20个聊天消息（使用Claude 3 Sonnet LLM）和500个自动完成（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) - 利用DhiWise的创新代码生成技术，您可以无缝地将Figma设计转化为动态的Flutter和React应用，优化您的工作流程，让构建出色移动和Web体验的速度前所未有的快。
  * [Codeium](https://www.codeium.com/) - Codeium是一个基于AI的代码自动完成工具。它支持多种编程语言（如Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等）并集成在所有主要的独立IDE和Web IDE中。
  * [Fern](https://buildwithfern.com) - 编写API定义并使用它们为TypeScript、Python、Java、Go等流行语言生成SDK和客户端库。完全支持OpenAPI。免费版最多可以生成20个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 适用于C#。Metalama在编译时动态生成代码模板，保持源代码干净。开源项目免费，商业友好版免费版包含三个方面。
  * [Supermaven](https://www.supermaven.com/) - Supermaven是一个为VSCode、JetBrains和Neovim提供的快速AI代码完成插件。免费版提供无限的行内完成。
  * [tabnine.com](https://www.tabnine.com/) - Tabnine通过提供从全球代码中学来的洞察来帮助开发者更快地创建更好的软件。有插件可用。
  * [v0.dev](https://v0.dev/) - v0利用

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个完整的流程，用于编写、审阅和部署代码。它提供一个单用户免费账户和一个带有100MB存储的仓库。

  * [browserling.com](https://www.browserling.com/) — 实时、交互式的跨浏览器测试，但仅限免费使用3分钟的会话，且仅支持Windows Vista下在1024x768分辨率下的Internet Explorer 9。

  * [codacy.com](https://www.codacy.com/) — 自动代码审查工具，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript。免费版可无限访问公开和私有仓库。

  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 全自动的基础设施代码审查工具，用于DevOps，支持GitHub、Bitbucket和GitLab（包括自托管）。它除了支持标准语言外，还分析Ansible、Terraform、CloudFormation、Kubernetes等。开源免费版本可用。

  * [CodeBeat](https://codebeat.co) — 自动代码审查平台，针对多种语言可用。公共仓库永久免费，并支持Slack和电子邮件集成。

  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查工具，对开源免费，无限的私人组织仓库（不超过4个合作者）也是免费的，学生和院校同样免费。

  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（软件即服务），对开源项目免费，提供一个免费的私人仓库。

  * [CodeFactor](https://www.codefactor.io) — 为Git提供自动代码审查，免费版本包括无限用户、公共仓库及一个私人仓库。

  * [coderabbit.ai](https://coderabbit.ai) — 利用人工智能的代码审查工具，集成了GitHub和GitLab。开源项目永久免费，基本版本包括每小时200文件、每小时3条审查和每小时50个对话。

  * [codescene.io](https://codescene.io/) — CodeScene根据开发人员如何使用代码来优先处理技术债务，并可视化团队耦合和系统掌握等组织因素。对开源项目免费。

  * [CodSpeed](https://codspeed.io) — 为自动化性能跟踪提供连续集成管道。

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 一个免费的开源服务，用于搜索32种不同的包管理器并获取依赖更新通知
  * [Namae](https://namae.dev/) — 查找包括GitHub、GitLab、Heroku、Netlify等网站上项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 全文本代码搜索，免费对开源开源项目开放。
  * [tickgit.com](https://www.tickgit.com/) — 展示`TODO`注释（以及其他标记）以确定代码中待改进的区域。
  * [CodeKeep](https://codekeep.io) - 类似Google Keep的代码片段管理工具。组织、发现和分享代码片段，配有预设模板和链接功能的强大的代码截图工具。

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将无障碍Web测试自动化纳入开发流程。它对开源和教育项目是免费的。
  * [appcircle.io](https://appcircle.io) — 提供企业级移动DevOps平台，自动化构建、测试和应用商店发布，帮助你更快、更高效地完成应用程序发布周期。免费最多允许每个构建30分钟构建时间，每月20个构建次数和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — 免费适用于开源项目的Windows CD服务。
  * [Argonaut](https://argonaut.dev/) - 十分钟内将应用和基础设施部署到云上。支持在Kubernetes和Lambda环境中部署自定义和第三方应用。免费版允许多个应用和部署，对5个域名和2个用户无限制。
  * [bitrise.io](https://www.bitrise.io/) — 为移动应用提供CI/CD服务，支持原生和混合应用。免费版提供200次/月构建，每次最多10分钟构建时间，允许2个团队成员。开源项目专享45分钟构建时间，增加并发次数和无限制团队规模。
  * [buddy.works](https://buddy.works/) — 免费CI/CD服务，提供5个项目和1个并发运行（每月120次执行）。
  * [Buildkite](https://buildkite.com) — 免费的CI pipeline服务，对3个用户和每月5000分钟的作业时间提供支持。免费的测试分析开发者版包括每月10万次测试执行，开源项目有更多的免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 提供数据库CI/CD和DevOps服务。免费版适用于20个用户内和10个数据库实例。
  * [CircleCI](https://circleci.com/) — 主机的一项完整免费计划，包含GitHub、GitLab、Bitbucket仓库中的所有CI/CD功能。提供多种资源类型、Docker支持、Windows/Mac OS/ARM执行器、本地跑批器、测试拆分、Docker层缓存和高级CI/CD功能。对私人项目，免费提供每月6000分钟执行时间，不限协作开发者、30个并行任务，以及

## Testing

  * [Applitools.com](https://applitools.com/) — 高级视觉验证服务，适用于Web、原生移动和桌面应用。可以与几乎所有的自动化解决方案（如Selenium和Karma）和远程运行器（如Sauce Labs、Browser Stack）集成。开源免费，单个用户有免费版，但每周有限的检查点数量。
  * [Appetize](https://appetize.io) — 在云上的Android手机和平板电脑模拟器以及iPhone/iPad模拟器上直接在浏览器中测试您的Android和iOS应用。免费版包含两个并发会话，每月30分钟的使用时长，不限应用大小。
  * [Apptim](https://apptim.com) — 一款无需性能工程技能即可评估应用性能和用户体验（UX）的移动测试工具。使用您自己的设备的桌面版本完全免费，不限iOS和Android的测试次数。
  * [Argos](https://argos-ci.com) — 为开发者提供的开源视觉测试服务。无限项目，每月5000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) — 可持续性能基准工具套件，用于捕获CI性能退化。所有公开项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源可用，提供更多折扣](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) — 为Web应用程序提供的轻量级测试自动化工具，易于学习，无需编码。在自己的计算机上可以免费运行无限数量的测试。云监控和CI/CD集成需要月费。
  * [Checkly](https://checklyhq.com) - 针对现代DevOps的基于代码的合成监控，以极低的价格监控API和应用。由Monitoring as Code工作流和Playwright驱动。为开发者提供非常友好的免费版。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，检查您的网站是否遵循50+的SEO、速度和安全最佳实践。对于小型网站，有免费版。
  * [cypress.io](https://www.cypress.io/) - 给Web浏览器中的任何内容提供快速、简单和可靠的测试。Cypress Test Runner永远免费开源，无限制。对于开源

  * [TestCollab](https://testcollab.com) - 友好的测试管理软件，其免费计划包含与Jira集成、无限项目、通过CSV/XLSx导入测试用例、时间跟踪和1 GB文件存储功能。
  * [testingbot.com](https://testingbot.com/) - 提供Selenium浏览器和设备测试，[免费供开源使用](https://testingbot.com/open-source)。
  * [Testspace.com](https://testspace.com/) - 用于发布自动化测试结果的仪表板和用于通过GitHub实现手动测试的框架。服务对开源项目[免费](https://github.com/marketplace/testspace-com)，每月最多可显示450条结果。
  * [tesults.com](https://www.tesults.com) - 报告测试结果和管理测试用例。可与流行测试框架集成。开源软件开发者、个人、教育工作者和小团队开始可以申请折扣或免费的额外服务，超出基本免费项目。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或重播历史请求。完全免费使用。
  * [Vaadin](https://vaadin.com) - 使用Java或TypeScript构建可扩展的UI，并利用集成工具、组件和设计系统以更快迭代、更好地设计和简化开发流程。五年的免费维护支持无限项目。
  * [websitepulse.com](https://www.websitepulse.com/tools/) - 提供多种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成期间使用独特的URL调试和检查Webhook和HTTP请求。完全免费，可创建无限数量的URL并接收建议。
  * [webhook.site](https://webhook.site) - 验证Webhook、出站HTTP请求或电子邮件，使用自定义URL。总是提供临时URL和电子邮件地址，无需付费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置和监控Webhook，通过推送通知和电子邮件报告状态。

[返回目录](#目录)

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 包含SCA、SAST、CSPM、DAST、秘密管理、IaC、恶意软件、容器扫描以及更多安全功能的全平台，基础版包含两个用户、10个仓库扫描权限、1个云端、2个容器和1个域。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 发现网络中的被攻击系统
  * [Altcha.org](https://altcha.org/anti-spam) - 一款基于自然语言处理和机器学习的网站和API反垃圾邮件服务。基础版每日200次请求限制针对每个域。
  * [atomist.com](https://atomist.com/) — 能更快更方便地自动化各种开发任务，现已进入 beta 版。
  * [cloudsploit.com](https://cloudsploit.com/) — 专注于 Amazon Web Services (AWS) 的安全审核与监控。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度威胁指标(IOC)列表，部分可在 GitHub 获取（[https://github.com/unknownhad/AWSAttacks](https://github.com/unknownhad/AWSAttacks)），完整列表可通过 API 获取。
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台提供不可更改的证明机制来存证代码、文件或容器。
  * [crypteron.com](https://www.crypteron.com/) — 专为云开发者设计的安全平台，防止.NET和Java应用中的数据泄露。
  * [CyberChef](https://gchq.github.io/CyberChef/) — 无需应对复杂工具或编程语言，提供简单直观的在线数据分析与编码解码应用，就像加密工具的瑞士军刀。所有功能免费无限制使用，可开源自建。
  * [DAS](https://signup.styra.com/) — Styra DAS 提供免费的完整生命周期的策略管理工具，创建、部署并管理 Open Policy Agent (OPA) 授权。
  * [Datree](https://www.datree.io/) — 一个开源 CLI 工具，通过确保开发配置符合最佳实践和你的组织政策，防止 Kubernetes 错误配置

  * [Ubiq Security](https://ubiqsecurity.com/) - 仅需三行代码即可加密和解密数据，并自动管理密钥。免费试用适用于一个应用，每月最多支持1,000,000次加密。
  * [Virgil Security](https://virgilsecurity.com/) - 提供将在您的数字解决方案中实现端到端加密、数据库保护、物联网安全等功能的工具和服务。免费试用适用于250个用户以下的应用。
  * [Vulert](https://vulert.com) - 持续监控您的开源依赖项中的新漏洞，并推荐修复，而无需安装或访问您的代码库。免费适用于开源项目。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式安全扫描您的GraphQL端点。免费使用，无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个公开的GitHub仓库、gist、问题和评论中的已泄漏秘密。

**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 一个为应用程序和 API 提供细粒度授权的服务。免费额度包括1000个MAU和100个授权者实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝整合Single Sign-On（SSO）、Multi-Factor Authentication（MFA）和密码less认证等功能。提供前端和后端应用的SDK。免费额度包含1000个MAU和5个身份提供者。
  * [Auth0](https://auth0.com/) - 提供托管SSO服务。免费计划包括25000个MAU、无限社交连接、自定义域名等功能。
  * [Authgear](https://www.authgear.com) - 几分钟内为您的应用添加密码less、One-Time Passwords（OTP）、二次验证（2FA）和SSO。前端功能已包含在内。免费额度至5000个MAU。
  * [Authress](https://authress.io/) - 提供身份验证登录和访问控制，不限制为任何项目使用的身份提供者，如Facebook、Google、Twitter等。前1000个API调用是免费的。
  * [Authy](https://authy.com) - 多设备上的两因素认证（2FA），带有备份选项。可作为Google Authenticator的替换方案。前100次成功验证是免费的。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。提供细粒度授权和访问控制，免费额度至100个每月活跃主体。
  * [Clerk](https://clerk.com) - 用户管理、身份验证、2FA/MFA，为登录、注册、用户资料等预构建UI组件。免费额度包含10000个每月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak作为服务的身份和访问管理。免费额度可包含100个用户和一个域。
  * [Corbado](https://www.corbado.com/) - 将密码keyless的第一重认证添加到新或现有应用中。无限MAU是免费的。
  * [Descope](https://www

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 用于确保您的移动应用正常工作的首选平台。 免费计划：一款应用、分析、无限版本和安装、并支持收集反馈。
  * [Loadly](https://loadly.io) - 提供iOS和Android应用的测试分发服务，包含无限下载、高速下载、无限上传的完全免费服务。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。 免费计划：应用上传、密码保护链接、1天过期期限、10台设备安装。
  * [InstallOnAir](https://www.installonair.com) - 空中分发iOS和Android应用。 免费计划：无限上传、私有链接、访客2天过期，注册用户60天。
  * [GetUpdraft](https://www.getupdraft.com) - 测试分发移动应用的工具。 免费计划包括一个项目、三个版本的应用、500 MB存储空间和每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。 包含5个应用、每月50次下载并通过最大文件大小100 MB的限制。

**[⬆️ 返回目录](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) - 在 IaaS 上部署准备好的应用程序。管理1个免费的 AWS 微型实例。
  * [Esper](https://esper.io) - 为 Android 设备提供MDM (Mobile Device Management) 和MAM (Mobile App Management) DevOps 功能。免费提供100台设备和1个用户许可，以及25 MB 应用程序存储空间。
  * [jamf.com](https://www.jamf.com/) - 用于 iPad、iPhone 和 Mac 的设备管理，3台设备免费。
  * [Miradore](https://miradore.com) - 设备管理服务。及时了解设备车队并保证设备安全。免费版提供基础功能。无限量设备求偿免费，但部分高级功能有限。
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理他们的 web 应用和服务器。每月最多提供25个git部署免费。
  * [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。1台服务器免费。
  * [ploi.io](https://ploi.io/) - 用于轻松管理并部署服务器和网站的服务器管理工具。一服务器免费使用。  
**[⬆️ 返回目录](#目录)**

## 消息传递和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，包含存在指示、持久性和保证交付。免费计划包括每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQaaS。小 lemur 计划：最大每月100万条消息、最多并发20个连接、最多100个队列、最多排队10,000条消息，并支持跨越不同可用区的多个节点。
  * [courier.com](https://www.courier.com/) — 一个提供应用于内推送、电子邮件、邮件、聊天、短信等各种通信渠道的单一API，同时还有模板管理和其他功能。免费计划包含每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 针对开发者的多通道通知基础设施，包括预构建好的内应用收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接到基于云的物联网消息代理。免费连接最多100个设备（无需信用卡）永久使用。
  * [knock.app](https://knock.app) - 提供开发者的通知基础设施。一次API调用即可向多个渠道发送，如内应用、电子邮件、短信、Slack和推送。免费版包含每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟内将用户通知添加到任何软件。免费版包含每月10,000条通知，+100条SMS和自动电话。
  * [Novu.co](https://novu.co) — 开源开发者通知基础设施。一个地点管理所有通信渠道的简单组件和API：电子邮件、短信、直接消息、内应用和推送。免费版包括每月30,000条通知，配90天数据保留。
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费版最大支持100个同时连接和每天200,000条消息。
  * [scaledrone.com](https://www.scaledrone

## 日志管理

  以下是一些提供免费日志管理服务的公司及其各自的特点：

1. [Bugfender](https://bugfender.com/) - 免费提供每天最多100,000条日志，保留时间为24小时。
2. [Logentries](https://logentries.com/) - 免费版提供每月5GB存储空间，保留时间为7天。
3. [Loggly](https://www.loggly.com/) - 单个用户免费，每天限200MB，保留7天。
4. [Logz.io](https://logz.io/) - 免费版每日提供1GB存储，仅保留1天。
5. **ManageEngine Log360 Cloud** - 管理引擎提供的日志管理服务。免费版提供50GB存储，15天存储保留和7天搜索。
6. [Papertrailapp.com](https://papertrailapp.com/) - 提供48小时搜索，7天归档，每月50MB存储。
7. [Sematext.com](https://sematext.com/logsene) - 免费版每日限500MB，保留7天。
8. [Sumologic.com](https://www.sumologic.com/) - 免费版同上，每日限500MB，保留7天。
9. [Logflare.app](https://logflare.app/) - 为每个应用每月提供最多12,960,000条记录的免费服务，保留3天。
10. [Logtail.com](https://logtail.com/) - ClickHouse基础的SQL兼容日志管理，每月免费1GB，保留3天。
11. [Logzab.com](https://logzab.com/) - 免费审计跟踪管理系统，每月1,000个用户活动日志，保留1个月，最多支持5个项目。
12. [Openobserve.ai](https://openobserve.ai/) - 免费版提供每月200GB的接收量，15天的保留期。

**返回顶部** [⬆️]

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 对开源项目提供无限项目、无限字符串和协作功能
  * [gitlocalize.com](https://gitlocalize.com) - 免费且不限于私有和公共仓库
  * [Lecto](https://lecto.ai/) - 提供机器翻译API，免费级别（30个免费请求，每个请求1000个翻译字符）。与 Loco Translate 插件集成使用。
  * [lingohub.com](https://lingohub.com/) — 3名用户免费，对开源项目永久免费
  * [localazy.com](https://localazy.com) - 免费支持最多1000个源语言字符串，无限语言、贡献者，针对初创公司和开源项目有优惠
  * [Localeum](https://localeum.com) - 免费支持1000个字符串，一个用户，无限语言和项目
  * [localizely.com](https://localizely.com/) — 对开源项目免费
  * [Localise](https://localise.biz/) — 免费支持2000个翻译，无限翻译者，每项目最多10种语言，每项目最多1000个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限的免费版，最多支持5名用户，开源项目免费
  * [POEditor](https://poeditor.com/) — 免费支持1000个字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费提供100个翻译键，无限字符串，无限语言，有创业优惠
  * [Texterify](https://texterify.com/) - 免费对单个用户开放
  * [Tolgee](https://tolgee.io) - 提供免费的云端SaaS，翻译有限，也有永久免费的自我托管版本
  * [transifex.com](https://www.transifex.com/) — 对开源项目免费
  * [Translation.io](https://translation.io) - 对开源项目免费
  * [Translized](https://translized.com) - 免费支持1000个字符串，一个用户，无限语言和项目
  * [webtranslateit.com](https://webtranslateit.com

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) - 获取带有5分钟间隔的20个_uptime_监控器和可定制的状态页面，包括商业使用。享受无限制的实时电子邮件和Telegram通知。开始使用无需信用卡。
  * [PingMeter.com](https://pingmeter.com/) - 有5个监控器，间隔10分钟。监控SSH、HTTP、HTTPS和自定义TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 免费的APM和监控，适用于前端、后端、数据库等，还包括免费的代理执行次数。 
  * [appdynamics.com](https://www.appdynamics.com/) - 免费提供24小时指标服务，应用性能管理代理限于一个Java、一个.NET、一个PHP和一个Node.js。
  * [appneta.com](https://www.appneta.com/) - 免费版支持1小时的数据保留。
  * [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的使命控制中心。免费版适用于较小的流量（64 MB日志）。
  * [assertible.com](https://assertible.com) - 自动化的API测试和监控。团队和个人都有免费计划。
  * [bleemeo.com](https://bleemeo.com) - 免费版包含3台服务器、5个运行时监控器、无限用户、无限仪表板、无限警报规则。
  * [checklyhq.com](https://checklyhq.com) - 开源的端到端/Synthetic监控和深度API监控。免费版包含5个用户和50,000次以上检查运行。
  * [cloudsploit.com](https://cloudsploit.com) - AWS安全性和配置监控。免费版提供无限制的标准服务扫描、无限用户、无限存储的账户。订阅版包含自动化扫描、API访问等。
  * [cronitor.io](https://cronitor.io/) - 为cron作业、网站、API等提供性能洞察和运行时监控。免费版包含5个监控器。
  * [datadoghq.com](https://www.datadoghq.com/) - 免费版支持5个节点。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - 对cron作业进行监控。免费包含一个

  * [sematext.com](https://sematext.com/) — 首24小时免费，不限服务器，10个自定义指标，50万点自定义指标数据，不限仪表板、用户等。
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron & SSL监控，免费5个监控每一个类别。
  * [sitesure.net](https://sitesure.net) — 网站和Cron监控 - 免费2个监控。
  * [skylight.io](https://www.skylight.io/) — 首10万个请求免费（仅限Rails）
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等。
  * [stathat.com](https://www.stathat.com/) — 开始使用10个统计量免费，永无过期日期。
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试但有限制。
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，免费3个监控。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、 uptime监控、DNS & 域名监控。监控10台服务器、10个uptime、10个域名免费。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。初始3个位置和20个主要网络服务的数据源免费。
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50个免费监控。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 前5个网站的免费监测，60秒间隔，公开状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 从端到端的事件管理、警报、值班管理、响应协调平台，适用于网络运营、 Site Reliability Engineering和DevOps团队。最多5个用户免费。
  * [instatus.com](https://instatus.com) - 在10秒内获得漂亮的状态页面。免费版无限订阅和无限团队。
  * [Squad

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供屏幕截图和点击轨迹的 JavaScript 错误跟踪。开源项目可以免费使用。
  * [bugsnag.com](https://www.bugsnag.com/) - 初始试用后，每月最多可免费报告2,000个错误。
  * [elmah.io](https://elmah.io/) - 为Web开发者提供错误日志和运行时监控。开源项目可获得免费的中小企业订阅服务。
  * [Embrace](https://embrace.io/) - 移动应用监控。为小型团队提供每年最多100万用户会话的免费服务。
  * [exceptionless](https://exceptionless.com) - 实时错误、特性和日志报告等。免费版提供每月3,000个事件或1个用户，开源且易于自托管以实现无限使用。
  * [GlitchTip](https://glitchtip.com/) - 简单且开源的错误追踪。免费版每月有1,000个事件，或者可以自托管并无限制使用。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时和cron监控。对小型团队和开源项目（每月12,000个错误）免费。
  * [memfault.com](https://memfault.com) - 云设备可观测性和调试平台。免费版提供[北欧](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备的100个设备。
  * [rollbar.com](https://rollbar.com/) - 异常和错误监控，免费版每月5,000个错误，不限用户，30天保留记录。
  * [sentry.io](https://sentry.io/) - Sentry实现实时应用异常追踪，有小规模的免费计划。免费版提供每月5,000个错误/1用户，自托管使用时无限制。
  * [Axiom](https://axiom.co/) - 存储最多0.5 TB日志，30天保留。包含与Vercel等平台的集成和高级数据查询，支持电子邮件/Discord通知。
  *

## Search

  * [algolia.com](https://www.algolia.com/) — 提供带有拼写容错、相关性和UI库的托管搜索解决方案，便于轻松创建搜索体验。免费的 "Build" 计划包括1M文档和每月10K次搜索。还为开发者提供了免费的[文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储
  * [CommandBar](https://www.commandbar.com/) — 作为服务提供的统一搜索栏，是一个基于Web的UI部件/插件，允许用户在您的产品中搜索内容、导航、功能等，提高可发现性。前1,000名月活跃用户免费，命令数量不限。
  * [Magny](https://magny.io) - 作为服务的智能工具，帮助实施命令面板（如应用程序内搜索），显著减少了用户在应用中查找任何内容的时间，提高了用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引、100K文档/索引、无限全文本/向量/混合搜索，60天分析时间。
  * [searchly.com](http://www.searchly.com/) — 免费提供2个索引和20MB存储空间。

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 这是一个开源平台，提供免费的课程和数据分析、信息安全、Web 开发等领域的认证。
  * [The Odin Project](https://www.theodinproject.com/) - 一个免费的、开源的平台，专注于JavaScript和Ruby的Web开发课程。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 提供许多成熟的专家简历模板，可以克隆、编辑并下载，优化了用于申请跟踪系统（ATS）。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 行业领先专家提供的短暂免费课程，让你在不到一小时的时间内亲手指导，了解最新的生成人工智能工具和技术。
  * [LabEx](https://labex.io) - 通过互动实验室和真实项目，专注于Linux、DevOps、网络安全、编程、数据科学等技能的提升。
  * [Roadmap.sh](https://roadmap.sh) - 路径规划网站，涵盖从区块链到UX设计的全方位开发学习内容。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费的与认证相关的课程，内容涵盖网络安全、网络和Python等。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - 维基从麻省理工学院的2500多门课程中发布免费材料，与全球的学者和学习者共享知识。YouTube频道列为[@mitocw](https://www.youtube.com/@mitocw/featured)。
  * [W3Schools](https://www.w3schools.com/) - 提供免费教程，教授Web开发技术，如HTML、CSS、JavaScript等。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 提供免费的在线指南，学习基础和高级HTML/CSS、JavaScript和SQL。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 用于测试的免费临时邮箱。
  * [AhaSend](https://ahasend.com) - 交易邮件服务，每月免费1000封邮件，无限域名、团队成员、Webhook和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，可免费创建无限电子邮件别名。
  * [Antideo](https://www.antideo.com) - 免费提供每小时10个邮件验证API请求，IP和电话号码验证。无需信用卡。
  * [Brevo](https://www.brevo.com/) - 免费每月9000封邮件，每天300封。
  * [OneSignal](https://onesignal.com/) - 免费每月10000封邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费10个Bump电子邮件，一个自定义域名。
  * [Burnermail](https://burnermail.io/) - 免费5个Burner电子邮件地址，1个邮箱，7天邮箱历史记录。
  * [Buttondown](https://buttondown.email/) - 新闻letter服务，100个订阅者免费。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST解析接收邮件，交易邮件发送-每月免费10000封邮件。
  * [Contact.do](https://contact.do/) - 将联系表单转化为链接（Bitly格式的联系表单）。
  * [debugmail.io](https://debugmail.io/) - 开发人员使用的简单邮件服务器测试工具。
  * [DNSExit](https://dnsexit.com/) - 免费支持您的域名的2个电子邮件地址，存储空间100MB，支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天300封。
  * [EmailOctopus](https://emailoctopus.com) - 免费服务提供2500个订阅者和每月10,000封邮件。
  * [EmailJS](https://www.emailjs.com/) - 邮件

  * [QuickEmailVerification](https://quickemailverification.com) — 免费提供 100 次/日的电子邮件验证，同时还提供免费 API 如 DEA Detector、DNS 查询、SPF Detector 等。
  * [Resend](https://resend.com) — 为开发者设计的交易电子邮件 API。每月 3,000 封邮件，每天可免费发送 100 封，限定一个自定义域名。
  * [Sender](https://www.sender.net) — 每月发送 15,000 封邮件，最多支持 2,500 个订阅者。
  * [SendGrid](https://sendgrid.com/) — 每天免费发送 100 封邮件，2,000 个联系人免费。
  * [Sendpulse](https://sendpulse.com) — 免费 500 名订阅者月，每月可免费发送 15,000 封邮件。
  * [SimpleLogin](https://simplelogin.io/) — 开源、可自我托管的电子邮箱别名/转发解决方案。免费提供 5 个别名，无限带宽，无限回复/发送，教育资源（如学生、研究者等）的免费版。
  * [Substack](https://substack.com) — 无限量免费的新闻简讯服务，开始收费时才需要付款。
  * [Sweego](https://www.sweego.io/) — 为开发者设计的欧洲交易电子邮件 API，每天免费 500 封邮件。
  * [Takeout](https://takeout.bysourfruit.com) — 永远会更新的电子邮件服务，发送电子邮件简单。每月 500 次交易电子邮件免费。
  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时电子邮件服务，支持同时多个邮件和转发。
  * [tinyletter.com](https://tinyletter.com/) — 每月免费 5,000 名订阅者。
  * [Touchlead](https://touchlead.app) - 集多种营销自动化功能于一身，包括线索管理、表单构建和自动化。有限制的免费版，适用于少量线索和自动化。
  * [trashmail.com](https://www.trashmail.com) — 非

## 特性开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一个以开发者为中心的功能标志服务，具有无限制的团队大小、出色的支持和合理的价格标签。免费计划支持10个标志、两个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 信心满满地发布功能；在 web、移动和服务器端应用中管理功能标志。使用我们的托管 API、部署到私人云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的功能标志和 A/B 测试提供商，内置贝叶斯统计分析引擎。免费版面向3名用户，支持无限多的功能标志和实验。
  * [Hypertune](https://www.hypertune.com) - 安全类型的功能标志、A/B 测试、分析和应用配置，具有类似 Git 的版本控制和即时内存本地标志评估。免费版支持5个团队成员，无限功能标志和 A/B 测试。
  * [Molasses](https://www.molasses.app) - 功能强大的标志和 A/B 测试。免费版包含3个环境，每个环境可有五个标志。
  * [Toggled.dev](https://www.toggled.dev) - 面向企业的可扩展多区域功能切换管理平台。免费计划支持10个标志、两个环境和无限请求。 SDK、分析仪表板、发布日历、Slack 通知以及所有其他功能都包含在无尽的免费计划中。
  * [Statsig](https://www.statsig.com) - 强大的功能管理、A/B 测试、分析等解决方案。免费版提供无限用户、标志、实验和动态配置，支持每月最多100万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志与 A/B 测试。配置即代码和全类型 TypeScript SDK。与 Next.js 和 React 等框架有强大的集成。免费版慷慨且价格便宜，易于扩展。

## 字体

  * [dafont](https://www.dafont.com/) - 网站上展示的字体为作者财产，它们可能是免费软件、共享软件、演示版本或公开领域资源。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，如@font-face、单位转换器、字体呈现器和字体提交器。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供供商业项目使用的免费字体，并挑选出易于使用的字体打包展示。
  * [Google Fonts](https://fonts.google.com/) - 许多字体可通过下载或在Google内容分发网络（CDN）的链接方便地应用到网站上。
  * [FontGet](https://www.fontget.com/) - 提供多种字体下载，以标签形式整齐分类。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务，不断汇集专业级字体，免费供个人和商业用途。
  * [Befonts](https://befonts.com/) - 提供一些独特字体，供个人或商业使用。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的全部字体及其使用方式。
  * [Bunny](https://fonts.bunny.net) - 注重隐私的Google Fonts 极简版。
  * [FontsKey](https://www.fontskey.com/) - 提供免费和个人商业版本的字体，用户可快速输入文本筛选。
  * [fonts.xz.style](https://fonts.xz.style/) - 一个提供免费开源字体服务，通过CSS将字体家族应用于网站。
  * [Fontsensei](https://fontsensei.com/) - 用户标记的开源Google字体，支持CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建器。创建登录注册、用户引导、支付流程和更复杂的金融应用等。免费计划每月最多支持250次提交，以及五个活跃表单。
  * [Form-Data](https://form-data.com) - 无需代码的表单后端。具有垃圾邮件过滤、电子邮件通知、自动回复、Webhook、Zapier、重定向、AJAX或POST等功能。免费版提供无限表单、每月20次提交，以及通过Form-Data徽章额外增加2000次提交。
  * [FabForm](https://fabform.io/) - 为智能开发者设计的表单后端平台。免费计划每月允许250次表单提交。现代友好的用户界面，集成Google Sheets、Airtable、Slack、Email等。
  * [Form.taxi](https://form.taxi/) - HTML表单提交的终点站。提供通知、垃圾邮件屏蔽和GDPR合规的数据处理。基础使用免费。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单接收端点，免费计划每月最多100次提交。
  * [formingo.co](https://www.formingo.co/) - 为静态网站设计的简单HTML表单。无须注册即可试用，免费计划每月支持500次提交和可定制的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，垃圾邮件防护，电子邮件通知，拖拽设计工具（能导出HTML）。特色功能包括自定义字段规则、团队和与Google Sheets、Slack、ActiveCampaign、Zapier的集成。
  * [formlets.com](https://formlets.com/) — 在线表格，限每月创建单页表单无限个，每月提交100次，邮件通知。
  * [formspark.io](https://formspark.io/) - 将表单转换为电子邮件的服务。免费版允许无限表格，每月250次提交，并由客服支持。
  * [Formspree.io](https://formspree.io/) — 使用HTTP POST请求发送电子邮件。免费级别限制为每月每个表单50次提交。
  * [Formsubmit.co](https://formsubmit.co/) —

  * [Sprig](https://sprig.com/) - 每月进行一次产品内调查，或者使用GPT驱动的AI分析的调查。其中提供了1次内产品调查或带有回放功能的调查。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许总共收集25次反馈提交。易于与React和Vue组件集成，提供了配套的组件。

**[⬆️ 返回目录顶端](#目录)**

## 生成式AI

  * [关键词AI](https://keywordsai.co) - 最佳的LLM监控平台。只需两行代码即可调用200多个LLM。每月免费10,000次请求，平台功能免费！
  * [Portkey](https://portkey.ai/) - 用于Gen AI应用的控制面板，配备观测套件和AI网关。每月免费发送和记录多达10,000次请求。
  * [大思想群体](https://www.braintrustdata.com/) - 提供评估、提示游乐场和Gen AI的数据管理。免费版每周提供1,000行私人评估。
  * [Findr](https://www.usefindr.com/) - 统一搜索工具，可在一次搜索中遍历所有应用。搜索助手，可利用您的信息回答问题。免费版提供无限统一搜索和每日5个协作查询。
  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。只要您提供API密钥，整个平台都是免费的。
  * [Claire](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包括Open Search、临床摘要、药物评论、药物相互作用、ICD-10代码和药效学。还提供专业套件的免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，以及调试与LLM应用性能相关的问题。支持开放标准日志，用于观测并兼容任何观测客户端。免费版提供每月50,000个跟踪。
  * [超级AI](https://ultraai.app) - 产品AI指挥中心，功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型降级和用户速率限制。终身免费版提供每月10,000+请求，但不包含缓存。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 审查、测试和在开发和生产周期中部署LLM应用。
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析并改进LLM应用。免费版包含每月50,000次观察和平台所有功能。[#开源](

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 为bootstrap、bootswatch和fontawesome.io提供CDN服务
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速且可靠的。CDN服务中最出色的。cdnjs是一个免费且开源的CDN服务，由Cloudflare提供支持，已被11%以上网站信任。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是一个用于流行开源 JavaScript 库的内容分发网络
  * [stellate.co](https://stellate.co/) - Stellate是一个闪电般的快速、可靠的GraphQL API CDN，且对免费服务前两项免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft的Ajax CDN托管着流行第三方JavaScript库，如jQuery，并帮助您轻松将其添加到Web应用程序中。
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
  * [Skypack](https://www.skypack.dev/) — 100% 的本土 ES 模块JavaScript CDN。免费提供每月100万个请求的访问。
  * [raw.githack.com](https://raw.githack.com/) — 使用Cloudflare简单地托管文件的现代化替代服务。
  * [section.io](https://www.section.io/) — 一个简单的方式来启动和管理完整的Varnish缓存解决方案。据说单个站点可以永久免费使用。
  * [statically.io](https://statically.io/) — 对于Git仓库（GitHub、GitLab、Bitbucket）的CDN、WordPress相关资产和图像
  * [toranproxy.com](https://toranproxy.com/) — 代理Packagist和GitHub。无失败CD。个人使用和个人开发者免费，但不提供支持。
  * [UNPKG](https://unpkg.com/) — npm上所有资源的CDN
  * [weserv](https://images.weserv.nl/) — 一个图像缓存和尺寸调整服务。全球缓存，实时操作图像。
  * [Namecheap Supersonic](https://www.name

## PaaS（平台即服务）

  * [anvil.works](https://anvil.works) - 使用 Python 开发网络应用。免费版包括无限应用和每次请求 30 秒的超时。
  * [appwrite](https://appwrite.io) - 允许无限项目，无项目暂停 (支持 web 子套件) 和身份验证服务。免费级别有 1 个数据库、3 个存储桶、每个项目 5 个函数。
  * [configure.it](https://www.configure.it/) — 一个手机应用开发平台，针对两个项目免费，有限功能但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 为使用 Java 或 Kotlin 的开发者提供的开源、跨平台移动应用开发工具链。商业使用中可免费开发无限数量项目。
  * [deco.cx](https://www.deco.cx/en/dev) - 一个边缘本地的前端平台，源自 TypeScript 代码的可视化内容管理系统自动生成。内置 A/B 测试、内容细分和实时分析。适用于内容密集型企业电子商务网站。免费提供每月 5,000 页浏览量或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统，覆盖全球边缘。免费条款包括每天 100,000 个请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) — Linux 提供的服务，支持 GitHub 的 CI/CD、SSH 和 MariaDB/Postgres 数据库。免费版每月存储空间和网络只有 1 GB，仅限于免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析提供自动基础设施、无模板代码的后端框架。为爱好项目提供免费云托管服务。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在用户个人 GitHub 仓库上的 AWS 账户上部署网络服务、数据库等。免费版为单开发者，AWS 费用通过 AWS 账户计算，但允许使用免费金额和 AWS 免费层级。
  * [gigalixir.com](https://gigalixir.com/) - 提供一个永不休眠的免费实例，以及受限为 2 个连接、10,000

## BaaS（后端即服务）

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接到您的应用后端。例如，当事件在您的应用中触发时发送Slack消息或在Google表格中添加一行。每月免费5,000个任务。
  * [back4app.com](https://www.back4app.com) - back4app是一个易于使用、灵活且可扩展的基于Parse平台的后端。
  * [backendless.com](https://backendless.com/) - 后端即服务（Baas），提供1GB的文件存储免费，每月5万条推送通知，以及1,000个表中的数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI会在我们的函数运行时和托管存储上启动你的Python API，并在我们的在线编辑器中或使用您最喜欢的工具的地方进行本地构建和托管。免费使用。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供构建和部署企业数字化创新的文档和资源。它包括平台、SDK和可用于构建和定制应用的组件库的完整个人信息沙箱。
  * [connectycube.com](https://connectycube.com) - 没有限制的聊天消息，点对点的语音和视频通话，文件附件和推送通知。对于不超过1,000用户的应用是免费的。
  * [convex.dev](https://convex.dev/) - 反馈式后端即服务，托管您的数据（具有关系和可序列化ACID事务的文档）、无服务器函数以及用于向多个客户端流式传输更新的WebSocket。对小型项目免费，提供1M条记录和每月5M次无服务器函数调用。
  * [darklang.com](https://darklang.com/) - 将开发环境、编辑器和基础设施结合在一起。在 beta 版本期间可访问， beta 之后计划提供慷慨的免费层级。
  * [Firebase](https://firebase.com) - Firebase帮助您构建和运行成功应用。Spark Plan 免费提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab，以及A/B测试、分析、应用分发、应用索引、云消息(FCM)、Crashlytics、动态

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一款专为企业流程应用构建的低代码平台，支持定制化的移动和Web应用。提供拖放界面、离线支持、实时位置跟踪和与多种第三方服务的集成。
  * [Basedash](https://www.basedash.com) — 专为内部管理员面板和仪表板设计的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — 开源的低代码平台，用于几分钟内创建企业内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、REST API、Docker和K8s。
  * [appsmith](https://www.appsmith.com/) — 构建管理员面板、内部工具和仪表板的低代码项目。集成15+数据库和任何API。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建商业应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖放应用构建器。
  * [ReTool](https://retool.com/) — 用于构建内部应用的低代码平台。Retool高度可定制。如果能用JavaScript和API编写，你可以在Retool中实现。免费版每月最多支持五名用户，不限应用程序和API连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是帮助工程团队和产品经理快速构建内部工具、用户旅程、数字体验、自动化和操作应用的低代码平台。
  * [ILLA Cloud](https://www.illacloud.com/) — 一款强大的开源低代码平台，助开发者构建内部工具。通过ILLA的组件和操作库，开发人员可以节省大量时间。免费版允许5个团队成员使用。
  * [outsystems.com](https://www.outsystems.com/) — 企业级基于Web的开发PaaS（平台即服务），提供本地部署或云解决方案。免费的“个人环境”提供无限代码支持和最多1GB数据库。
  * [UI Bakery](https://uibakery.io) — 用于快速构建定制web应用的低代码平台。支持使用拖放和JavaScript、Python、SQL等进行高级自定义。云和自行托管解决方案均可提供，免费版最多支持5个用户。
  * [Mendix](https://

## Web Hosting

  * [ Alwaysdata ](https://www.alwaysdata.com/) — 免费的100 MB Web 部署支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义 Web 服务器、通过 FTP、WebDAV 和 SSH 访问；含邮件箱、邮件列表和应用安装器。
  * [ Awardspace.com ](https://www.awardspace.com) — 免费 Web 部署+免费短域名，支持 PHP、MySQL、应用安装器、电子邮件发送及无广告。
  * [ Bohr ](https://bohr.io) — [开源](https://github.com/bohrio/bohr)（非商业项目免费）+ 开发者优先部署和开发平台，减少基础设施麻烦，加快部署速度。
  * [ Bubble ](https://bubble.io/) — 无需编码的视觉编程，用于构建 Web 和移动应用，Bubble 品牌标识免费。
  * [ dAppling 网络 ](https://www.dappling.network/) — 去中心化的 Web 部署平台，专注于提高 uptime 和安全性，为用户提供额外访问入口，适合 Web3 前端。
  * [ DigitalOcean ](https://www.digitalocean.com/pricing) - 在 App 平台起始版免费部署和构建三个静态站点。
  * [ Drive To Web ](https://drv.tw) — 直接将 Google Drive 和 OneDrive 中的内容发布到网页。仅支持静态网页，永远免费，每个 Google/Microsoft 账户限一个网站。
  * [ Fenix Web Server ](https://preview.fenixwebserver.com) — 开发者桌面应用，本地网站开发和实时共享，使用美观 UI 或 API/CLI 方式工作。
  * [ Fern ](https://buildwithfern.com) - 用 Fern 的免费计划在 Fern 上构建和部署基于 Markdown 的文档。可从 API 定义文件自动生成站点的 API 参考。网站部署在 _yoursite_.docs.buildwithfern.com。
  * [ Free Hosting ](https://freehostingnoads.net/) — 免费提供 PHP 5、Perl CGI、MySQL、FTP 文件管理器、POP 电子邮件等，支持子域名、域名绑定、DNS 编辑

## DNS

  - Cloudflare [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/)：免费公共DNS解析器，速度快且安全（加密你的DNS查询）。可绕过互联网服务提供商的DNS封锁，防止DNS查询窥探，以及[保护成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)，还可通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：这只是DNS解析器，不是DNS提供者。
  - [1984.is](https://www.1984.is/product/freedns/)：免费DNS服务，包含API和多种免费DNS功能。
  - [cloudns.net](https://www.cloudns.net/)：免费DNS托管，最多一个域名，50条记录。
  - [deSEC](https://desec.io)：以安全为中心的免费DNS托管，基于开源软件，并由[SSE](https://www.securesystems.de/)支持。
  - [dns.he.net](https://dns.he.net/)：免费DNS托管服务，支持动态DNS。
  - [Zonomi](https://zonomi.com/)：免费DNS托管服务，解析立即生效。免费计划：1个DNS区（域名），最多10个DNS记录。
  - [dnspod.com](https://www.dnspod.com/)：免费DNS托管。
  - [duckdns.org](https://www.duckdns.org/)：免费DDNS，免费-tier最多5个域名。提供各种设置的配置指南。
  - [Dynv6.com](https://dynv6.com/)：免费DDNS服务，带[API支持](https://dynv6.com/docs/apis)，支持多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  - [freedns.afraid.org](https://freedns.afraid.org/)：免费DNS托管。此外，还提供基于众多公共用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后，从"子域名"菜单获取免费子域名。
  - [luadns.com](https://www.luadns.com/)：免费DNS托管，最多三个域名，所有功能

## 域名

  * [eu.org](https://nic.eu.org) - 提供免费的 eu.org 域名。申请通常会在 14 天内得到批准。
  * [pp.ua](https://nic.ua/) - 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回目录顶端](#目录)**

## IaaS（基础设施即服务）

  * [4EVERLAND](https://www.4everland.org/) - 支持与 AWS S3 配套使用 - API、界面操作、命令行界面 (CLI) 和其他上传方式。可以安全、方便和高效地将IPFS和Arweave网络中的文件上传并存储。注册用户可免费获得6 GB IPFS存储空间和300MB Arweave存储空间。所有小于150 KB的Arweave文件上传均为免费。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2 云存储。提供无限时间内的免费 10 GB (类似于 Amazon S3) 存储空间。
  * [filebase.com](https://filebase.com/) - 基于区块链的 S3 兼容对象存储。无限时长的免费存储空间5 GB。
  * [Tebi](https://tebi.io/) - 具有 S3 兼容性的对象存储。免费赠送25 GB存储空间和250 GB的出站传输量。
  * [iDrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10 GB存储空间和10 GB下载带宽。
  * [C2 对象存储](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容的对象存储。每月免费15 GB存储空间和15 GB下载。回到目录**[⬆️]**。

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台中提供免费的PostgreSQL、MySQL和Redis方案。单节点，1个CPU，1GB内存，以及对于PostgreSQL和MySQL，5GB的存储空间。轻松升级到更广泛的计划或在多个云服务商之间迁移。
  * [airtable.com](https://airtable.com/) - 看起来像电子表格，但实际上是一个关系数据库，拥有无限的基座，每基座1,200行，每月1,000个API请求。
  * [Astra](https://www.datastax.com/products/datastax-astra/) - 服务型的云原生Cassandra，提供免费层面[80GB](https://www.datastax.com/products/datastax-astra/pricing)。
  * [codehooks.io](https://codehooks.io/) - 易用的无服务器JavaScript API/后端服务和NoSQL数据库，包含函数、Mongodb查询、键值查找、工作流系统、实时消息、工作者队列、强大命令行界面和网页数据管理器。免费版有5GB存储和每分钟60个API调用，包含2名开发者。不需要信用卡。
  * [CrateDB](https://crate.io/) - 开源分布式实时分析SQL数据库。[免费版CRFREE](https://crate.io/lp-crfree)：单节点，2个CPU，2 GiB内存，8 GiB存储。每个组织一个群集，无需付款方式。
  * [FaunaDB](https://fauna.com/) - 服务器less云数据库，支持原生GraphQL、多模型访问，每日免费可达100MB存储。
  * [Upstash](https://upstash.com/) - 免费提供每天最多10,000个请求的无服务器Redis，最大数据库大小256MB，最多并发连接20个。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费版提供512 MB存储。
  * [redsmin.com](https://www.redsmin.com/) - 提供在线实时Redis监控和管理服务，免费监控1个Redis实例。
  * [redislabs](https://redislabs.com/try-free/) - 提供免费30MB Redis实例。
  * [MemCachier](https://www.mem

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io)——只需一个命令，即可为localhost提供公共服务网址，无需下载。支持HTTPS、TCP和TLS隧道。免费版的隧道使用时长为60分钟。

* [conveyor.cloud](https://conveyor.cloud/)——为Visual Studio插件，通过IIS Express将本地网络或隧道暴露到公共网址上。

* [Hamachi](https://www.vpn.net/)——LogMeIn Hamachi是一个托管的VPN服务，能安全地将分布式团队的局域网网络扩展到全世界，免费版允许无限量的网络，最多支持5人。

* [Mirna Sockets](https://mirna.cloud/)——免费的Socket服务，当你部署或监控WebSocket服务器时，它会提供一个wss:// URL。

* [localhost.run](https://localhost.run/)——通过隧道将运行中的本地服务器暴露到公开网址上。

* [localtunnel](https://theboroer.github.io/localtunnel-www/)——类似上面的服务，免费版本开放源码，适用于本地服务器套接字映射到公共URL。

* [ngrok.com](https://ngrok.com/) ——本地服务器公开URL的隧道服务。

* [cname.dev](https://cname.dev/)——免费且安全的动态反向代理服务。

* [serveo](https://serveo.net/)——无需安装、无需注册，直接暴露本地服务器到互联网上，提供免费二级域名，无限制。

* [Radmin VPN](https://www.radmin-vpn.com/)——通过提供虚拟局域网性质的VoIP网络，连接多台设备(VPN替代方案)。无限规模的连接数。

* [segment.com](https://segment.com/)——数据事件集线器，将数据路由到其他第三方服务，免费提供100,000个事件/月。

* Google STUN——[stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)（谷歌STUN服务器）

* Twilio STUN——[stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)（Twilio STUN服务）

* [Tailscale](https://tailscale.com/)——无需配置的分布式虚拟私有网络，基于开源的

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) - 强大的免费项目管理和 Scrum 软件，适用于最多5名团队成员
  * [asana.com](https://asana.com/) - 免费适用于私人项目并支持协作
  * [Backlog](https://backlog.com) - 在一个平台上提供您的团队为完成好项目所需的一切。免费计划包含1个项目、10名用户和100MB存储空间。
  * [Basecamp](https://basecamp.com/personal) - 包括待办事项列表、里程碑管理、论坛样式的消息、文件分享和时间追踪。免费计划支持多达3个项目、20名用户和1GB的存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) - 功能强大的企业内网和项目管理工具。免费版无限用户限制在5GB存储。
  * [cacoo.com](https://cacoo.com/) - 实时在线图表工具：流程图、UML、网络图。免费的最大限制是15名用户/图表及25张图纸。
  * [Chpokify](https://chpokify.com/) - 团队基于的规划扑克工具，节省燃尽图估算时间。免费版支持5名用户、免费的Jira集成、无限视频通话、无限团队和无限会话。
  * [clickup.com](https://clickup.com/) - 项目管理工具。免费与云存储兼容，也有高级版本。移动应用和Git集成可用。
  * [Clockify](https://clockify.me) - 时间跟踪和时间表应用，帮助您跟踪项目工作时间。无限用户，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) - 仅单用户免费版可使用无限私有架构图，几分钟内用云craft设计专业架构，优化为AWS，显示实时数据。
  * [Codegiant](https://codegiant.io) - 包括代码库托管与CI/CD功能的项目管理平台。免费版提供无限代码库、项目和文档，支持5名团队成员；每月500分钟CI/CD，30000分钟服务器less代码运行，1GB代码库存储。
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 的内容协作工具，

  * [plan.io](https://plan.io/) — 提供了项目管理以及存储库托管等功能。对于两个用户和十名客户，包含500MB的存储空间是免费的。
  * [Plane](https://plane.so/) — 一个简单、可扩展的开源项目和产品管理工具。无限成员数量是免费的，文件上传大小最大5MB，可创建1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
  * [point.poker](https://www.point.poker/) — 在线计划扑克（基于共识的估算工具）。不限用户、团队或会议次数，免费。无需注册。
  * [ScrumFast](https://www.scrumfast.com) — 提供直观界面的Scrum看板，免费版本最多容纳5位用户。
  * [Shake](https://www.shakebugs.com/) —移动应用的内上报bug和获取反馈工具。免费版本允许每个应用每月上报10个bug报告。
  * [Shortcut](https://shortcut.com/) — 项目管理平台。免费版最多支持10位用户长期使用。
  * [Tadum](https://tadum.app) — 专为常规会议设计的会议议程和会议记录应用程序，团队10人以下免费。
  * [taiga.io](https://taiga.io/) — 为初创公司和敏捷开发者设计的项目管理平台，开源项目免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费版任务、冲刺和工作空间数量不限，不限用户。
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，从看板到任何业务流程都可以。免费版支持无限用户，最多1000个实体数据。[更多详情](https://www.targetprocess.com/pricing/)
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费版包括一个工作区，无限任务和项目、1GB文件存储、前提版本一周的项目历史记录以及最多五人视频会议。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。免费版本最多支持5人，可与GitHub

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，享有无限速度、带宽、文件数量、下载次数等服务。主要用于Android开发者相关的文件，如APK构建、自定义ROM和修改等内容，但看起来也接受其他任何类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单而安全的远程备份托管服务，适用于Borg Backup。 免费备份空间为10 GB，两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务，免费存储空间10 GB。
  * [sync.com](https://www.sync.com/) - 全方位云存储服务，提供5 GB免费存储。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务，最多可提供10 GB的免费存储。
  * [sirv.com](https://sirv.com/) — 智能图像CDN，提供了实时图像优化和缩放功能。免费计费：500 MB存储和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，全球拥有1500多个点覆盖。提供多种图像缩放、压缩和水印功能，包括响应式图像、360环境图和图像编辑的开源插件。免费套餐每月包含25 GB的CDN流量、25 GB的缓存存储和无限次转换。
  * [cloudinary.com](https://cloudinary.com/) — 图片上传、强大处理、存储和分发，支持多种编程语言（Ruby、Python、Java、PHP、Objective-C等）。免费版包括每个月25个信用，一个信用等于1000个图片操作、1 GB存储或1 GB的CDN使用。
  * [embed.ly](https://embed.ly/) — 提供网站内嵌媒体的API、响应式图像缩放以及从网页中提取元素。免费使用，每月最多5000个URL，15个请求/秒。
  * [filestack.com](https://www.filestack.com/) — 文件选择、转换和分发，免费版包含250个文件、500次转换和3 GB带宽。
  * [file.io

  * [imagekit.io](https://imagekit.io) – 提供自动优化、实时转换和几分钟内即可集成现有设置的图像CDN。免费版每月带宽可达20GB。
  * [internxt.com](https://internxt.com) – 基于绝对隐私和毫不妥协的安全性的文件存储服务Internxt Drive。注册后即可免费获得10GB存储空间，永久有效！
  * [degoo.com](https://degoo.com/) – AI驱动的云存储服务，免费空间20GB，支持3台设备。每推荐一位用户获得5GB奖励（90天未登录账户后自动失效）。
  * [MConverter.eu](https://mconverter.eu/) – 批量转换文件，支持众多格式，包括新格式AVIF。从视频中提取所有图像帧。每天免费处理最多10个100MB文件（分批处理）。
  * [ImageEngine](https://imageengine.io/) – 易用的全球图像CDN，设置快速，支持AVIF和JPEGXL，提供WordPress、Magento、React和Vue等插件。立即[申请免费开发者账户](https://imageengine.io/developer-program/)。
  * [DocsParse](https://docsparse.com/) – 使用GPT的强大AI功能，可以将PDF、图像转换为JSON、CSV或EXCEL等结构化数据。每月免费提供30个信用点。

**[⬆️ 返回顶部](#表目录)**

## 设计和UI

  * [所有免费素材](https://allthefreestock.com) - 提供一个精心挑选的免费图片、音频和视频列表。
  * [浮点UI](https://floatui.com/) - 这是一款免费的网页开发工具，可帮助非设计师快速创建现代、响应式的网站，设计简洁优雅。
  * [Ant Design 落地页](https://landing.ant.design/) - 提供由 Ant Motion 动画组件构建的模板。它提供了丰富的首页模板，您可以下载代码包并快速使用。还可以使用编辑器快速创建自己的专用页面。
  * [Backlight](https://backlight.dev/) - 这是一个注重团队协作的完整编码平台，用于开发、文档、发布、扩展和维护设计系统。免费版支持最多3名编辑器在同一设计系统上工作，并有无限观众。
  * [BoxySVG](https://boxy-svg.com/app) - 这是一个可安装在浏览器上的免费Web应用程序，用于绘制SVG和导出为SVG、PNG、JPEG等格式。
  * [轮播英雄](https://carouselhero.com/) - 一个免费的在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 提供一致性开源图标，适合React、Vue和Svelte等。
  * [cleverbrush.com](https://www.cleverbrush.com/) - 自由提供图形设计或照片拼贴应用程序。也提供付费集成作为组件。
  * [cloudconvert.com](https://cloudconvert.com/) - 将任何内容转换为任何内容，支持208种格式，包括视频和GIF。
  * [codemyui.com](https://codemyui.com) - 收录精选的Web设计和UI灵感，附带代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建或从顶级配色方案中获得灵感。
  * [coolors](https://coolors.co/) - 色彩调色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 手选适应品牌的色彩组合。
  * [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器的自定义CSS渐变工具，提供RGB和HEX格式。
  * [easyvectors.com](https://easyv

  * [storyset.com](https://storyset.com/) — 使用这个工具为你的项目创建令人惊叹的自定义插图，完全免费。
  * [smartmockups.com](https://smartmockups.com/) — 创作产品示例，附带200个免费示例。
  * [tabler-icons.io](https://tabler-icons.io/) — 提供1500多个可编辑的SVG矢量图标，免费下载并直接使用。
  * [UI Avatars](https://ui-avatars.com/) - 生成个性化的头像，使用姓名中的首字母。可以直接链接到您的网站或应用中，支持通过URL配置参数。
  * [unDraw](https://undraw.co/) — 这是一个不断更新的漂亮SVG图片集合，您无需归功于就可以完全免费使用它们。
  * [unsplash.com](https://unsplash.com/) - 提供免费的商业和非商业用途的股票照片（无限制使用许可）。
  * [vectr.com](https://vectr.com/) — 是一个免费的网络和台式机使用的设计应用。
  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划允许最多包括5步的导览。
  * [Webflow](https://webflow.com) - 动画功能齐全的所见即所得网站构建器，自带网站托管，免费项目数为两个。
  * [Updrafts.app](https://updrafts.app) - 专注于基于TailwindCSS的设计的简单Web构建器，非商业用途免费。
  * [whimsical.com](https://whimsical.com/) — 具有协作功能的流程图、线框、便签和思维导图工具。免费版创建最多4个面板。
  * [Zeplin](https://zeplin.io/) — 设计者和开发者的协作平台。展示设计、资产和样式指南。免费适用于一个项目。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人的独一无二的图形和图片。
  * [Responsively App](https://responsively.app) - 设计更快更精确响应式Web应用程序开发的免费工具。
  * [SceneLab](https://scenelab.io) - 提供免费设计模板的在线mockup图形编辑器。
  * [xLayers

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [优秀设计网站] 展示了所有由设计师投票选出的最佳设计网站。
  * [Behance](https://www.behance.net/) - [设计作品集] 设计师展示自己作品的地方。可以根据UI/UX项目类别进行筛选。
  * [dribbble](https://dribbble.com/) - [设计灵感] 提供独特的设计灵感，通常不来自实际应用。
  * [Landings](https://landings.dev/) - [网页截屏] 根据你的喜好，寻找最棒的登陆页面设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登陆页面/UI 套件/网页截屏] Lapa Ninja是一个展示最优秀6025个登陆页面范例的画廊，还有设计师免费书籍和网络上的免费UI套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登陆页面设计] 定期更新的登陆页面截图，包含桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动截屏] 用我们的50,000+可搜索完整移动应用截屏，大幅节省UI和UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动/网页截屏] 探索非洲和世界各地领先公司的移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截屏] 设计灵感库，收录了最优质的UI UX模式（适用于iOS和Android），供设计师、开发者和产品经理参考。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频和截屏] 展示众多移动和网页应用的全程流程视频和截图。搜索和索引功能强大。
  * [Screenlane](https://screenlane.com/) - [移动截屏] 获取设计灵感，了解最新网络和移动应用UI设计趋势。可以按模式和应用进行筛选。
  * [scrnshts](https://scrnshts.club/) - [移动截屏] 手选的优秀应用商店设计截图集合。
  * [UI Garage](https://uigarage.net/) - [移动/网页截屏] 每日为设计师和开发者提供UI灵感

## 地图数据可视化

  * [IP地理定位](https://ipgeolocation.io/) — 针对开发者的免费计划每月包含3万个请求。
  * [carto.com](https://carto.com/) — 从您的数据和公开数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 准备就绪的的地图工具。每月5万个免费查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 包括网络、桌面和移动设备的接口和SDK，用于地图、地理空间数据存储、分析、地理编码、路由等。每月提供200万个免费基础地图瓦片、2万个非存储的地理编码、2万个简单路线、5000个驾车时间计算和每月5GB的免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 从Places API和Pilgrim SDK获取位置发现、场馆搜索和基于场所的内容。
  * [geoapify.com](https://www.geoapify.com/) — 向量和栅格地图瓦片、地理编码、地点、路由、等值线API。每日免费请求次数为3000个。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传提供地理编码。每日免费查询次数为2500次。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传实现地理编码和地点解析。每月免费查询次数为1万个。
  * [geojs.io](https://www.geojs.io/) - 高可用的REST/JSON/JSONP IP地理定位查询API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和分享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) — 提供免费的开发人员包，包括路线、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/) — 为地图和位置感知应用提供的接口和SDK。每月免费事务次数为25万个。
  * [locationiq.com](https://locationiq.com/) — 提供地理编码、地图和路由API。每日免费请求次数为5

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) - 一个多发行版的软件包构建服务（包括 SUSE、EL、Fedora、Debian 等）。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) - 用于Fedora和EL的基于Mock的RPM构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) - Ubuntu和Debian的构建服务。

**[⬆️ 返回目录顶部](#目录)**

## IDE和代码编辑

  * [3v4l](https://3v4l.org/) - 一个提供免费在线 PHP 环境的代码片段分享平台，可以在超过300个PHP版本中运行代码。
* [Android Studio](https://developer.android.com/studio) - 安卓开发工具，提供快速创建各种Android设备应用的工具。开源IDE，对所有人免费，适用于Windows、Mac、Linux和ChromeOS。
* [AndroidIDE](https://m.androidide.com/) - 开源的IDE，用于在实际的Android设备上开发功能齐全的Android应用程序。
* [Apache NetBeans](https://netbeans.apache.org/) - 一个开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) - 协作设计API的工具，能即时生成API模版和文档（免费版无限API蓝图和一个管理账户下的无限用户，以及在线文档）。
* [BBEdit](https://www.barebones.com/) -  macos上流行的可扩展文本编辑器。免费版本提供强大核心功能，可升级至更多高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转化为互动笔记本集合。免费公共服务。
* [BlueJ](https://bluej.org) - 专为初学者设计的免费Java开发环境，由Oracle支持，通过简单图形界面帮助初学者。
* [Bootify.io](https://bootify.io/) - 生成自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 一款专为Web开发设计的开源文本编辑器，轻量且易用。
* [cacher.io](https://www.cacher.io) - 功能丰富的代码片段管理器，支持100多种编程语言。
* [Code::Blocks](https://codeblocks.org) - 免费的C/C++和Fortran IDE。开源，支持Windows, macOS及Linux。
* [Cody](https://sourcegraph.com/cody) - 免费的AI代码助手，可编写代码（代码块、智能补全、单元测试）、理解整个代码库、修复、查找代码。适用于Visual Studio Code、JetBrains及其在线版本。
* [codiga.io](https://codiga.io/) - 一款编码辅助工具，可在IDE内直接搜索、定义和重用代码片段。适用于个人和小型

  * [SoloLearn](https://code.sololearn.com) — 一个云编程平台，适合运行代码片段。支持多种编程语言。运行代码不需要注册，但保存代码在他们的平台是必需的。另外，它还为初学者和中级开发者提供免费课程。
  * [stackblitz.com](https://stackblitz.com/) — 网络/云端代码IDE，用于创建、编辑和部署全栈应用程序。支持所有流行的基于Node.js的前端和后端框架。创建新项目的简短链接: [https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) — Sublime Text是一款流行的、多功能且高度可定制的文本编辑器，适用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) — 经过重新定义和优化的代码编辑器，专为构建和调试现代Web和云应用而设计。由微软开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能的IDE，配备数千个扩展，跨平台应用开发（可下载Microsoft扩展为iOS和Android开发），桌面、Web和云开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) — 社区驱动的，无追踪/日志，免费和无许可的VS Code二进制发行版。
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件提供关于您编码活动的量化自我指标，适用于免费使用，但有限计划。
  * [Wave Terminal](https://waveterm.dev/) — Wave是一个开源的、跨平台的终端，提供无缝工作流程。可以渲染任何内容，保存会话和历史记录。基于开放网络标准，适用于MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 在浏览器中使用的IDE，专为单独编写web组件而设计，提供58个模板、故事支持和测试。
  * [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
  * [WebDB](https://webdb.app) - 免费且高效的数据库IDE。特性包括服务器发现、ERD模型、数据生成器、人工智能、NoSQL结构管理

## 分析、事件和统计数据

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人用途免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，可帮助您将客户数据从数据仓库同步到 CRM、营销和支持工具。免费版为您提供一个数据同步目的地。
  * [Avo](https://avo.app/) — 简单化的分析发布工作流程。单源真理跟踪计划、类型安全的分析跟踪库，内置调试器以及捕获数据问题的数据观察能力。免费提供两个工作空间成员和1小时的数据观察回溯。
  * [Branch](https://www.branch.io) — 手机应用分析平台。免费版提供最多1万个移动应用用户的深链接服务以及其他服务。
  * [Cauldron](https://cauldron.io) — 一个开源的分析解决方案，允许用户聚合来自多个协作平台的信息，将其视为多种类型的数据源（如Git、GitHub、Gitlab）。免费版包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 和操作分析平台。免费同步数据仓库中的10字段到60多个SaaS应用，例如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费版为单一网站提供3000次视图分析。
  * [Databox](https://databox.com) — 通过结合其他分析和BI平台为企业提供洞察。免费版包括3个用户、仪表板和数据源，以及1100万历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 为1个网站提供每月2000次页面访问量。
  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多支持2个应用。
  * [GoatCounter](https://www.goatcounter.com/) — 基于开源的网站分析平台，提供托管服务（非商业用途免费），支持自托管应用。免费版适用于非商业用途，包含无限网站、6个月数据保留和每月10万次页面视图。
  * [Google Analytics](https://analytics.google.com/) — 谷歌

  * **[Umami](https://umami.is/) —— 一个简单、快速、注重隐私的开源 Google Analytics 替代方案。**
* **[TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) —— 一个免费的轻量级的注重隐私的 Google Analytics 替代品。提供无限的页面浏览量、访客数和页面热力图及目标跟踪。对于多达3个域名和每个域名600个会话回放是免费的。**
* **[AppFit](https://appfit.io) —— AppFit 是一个全面的分析和产品管理工具，旨在为跨平台管理分析和产品更新提供无缝支持。免费版包括每月10,000个事件、产品日志和每周洞察。**
* **[Seline](https://seline.so) —— Seline 是一个简单且私密的网站和产品分析工具。无 cookie、轻便且独立。免费版提供每月3,000个事件，涵盖仪表板、用户旅程、漏斗等功能。**

**[⬆️ 返回目录](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) - 每个站点：1,000个页面浏览量/日，三个热图、三个小部件，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话重放，带有用于bug再现的开发工具、实时会话以支持实时支持，以及产品分析套件。1,000个会话/月，可访问所有功能，数据保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 1,000个会话/月，30天保留，错误追踪和实时模式
  * [FullStory.com](https://www.fullstory.com) - 1,000个会话/月，数据保留1个月，三个用户席位。更多信息[在这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) - 每个站点：1,050个页面浏览量/月，无限热图，数据存储3个月
  * [inspectlet.com](https://www.inspectlet.com/) - 免费为一个网站提供2,500个会话/月
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，无流量限制，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) - 一个网站每月500个会话免费
  * [mousestats.com](https://www.mousestats.com/) - 一个网站每月100个会话免费
  * [smartlook.com](https://www.smartlook.com/) - 免费提供网络和移动应用包（1,500个会话/月），三个热图，一个漏斗，1个月的数据历史
  * [howuku.com](https://howuku.com) - 跟踪用户交互、参与和事件。每月最多5,000次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) - 记录并查看访客如何使用您的网站或应用。为小项目提供免费无限时间记录

**[⬆

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/) - 提供全球电话号码验证与搜索的JSON API。每月100个API请求
  * [veriphone](https://veriphone.io/) - 全球手机号码验证的免费、快速且可靠的JSON API。每月1000次请求

**[⬆️ 返回目录顶端](#目录)**

## Payment and Billing Integration

  以下是用于跨平台订阅管理的几个平台，它们提供了不同的服务和免费额度：

1. [Qonversion](https://qonversion.io/) - 全方位跨平台订阅管理平台，支持分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化内购和变现。适用于iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页。免费版最多可追踪每月10k的收入。

2. [ParityVend](https://www.ambeteco.com/ParityVend/) – 自动根据用户位置调整价格，帮助企业全球化扩张。免费版包含每月7,500个API请求。

3. [Glassfy](https://glassfy.io/) - 提供内购订阅基础设施、实时事件和iOS、Android、Stripe和Paddle的变现工具。免费版最多每月支持10k的收入。

4. [Adapty.io](https://adapty.io/) - 一站式解决方案，包含开源SDK，适用于移动应用内订阅集成，覆盖iOS、Android、React Native、Flutter、Unity或网页。免费版最多每月10k收入。

5. [CoinMarketCap](https://coinmarketcap.com/api/) - 提供加密货币市场数据，包括最新的加密和法定货币汇率。免费版提供每月10K调用额度。

6. [CurrencyFreaks](https://currencyfreaks.com/) - 提供当前和历史汇率信息，DEVELOPER计划免费，每月1000个请求。

7. [CoinGecko](https://www.coingecko.com/en/api) - 提供加密货币市场数据，包括最新汇率和历史数据。免费版有固定的更新频率和每月调用次数。

8. [CurrencyApi](https://currencyapi.net/) - 提供实时和加密货币汇率，免费版每月1,250个API请求。

9. [currencylayer](https://currencylayer.com/) - 提供可靠的汇率和货币转换服务，每月免费100次API请求。

10. [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的币种转换JSON API，每日更新一次，免费版限制每日1,500次请求。

11. [FraudLabsPRO](https://www.fraudlabspro.com) - 防止支付

## Docker相关的

  * [canister.io](https://canister.io/) - 为开发者提供20个免费私人库，为团队提供30个免费私人库来构建和存储 Docker 镜像
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费版提供 1 GB 的存储空间用于私人仓库。
  * [Docker Hub](https://hub.docker.com) - 提供1个免费的私人仓库和无限的公开仓库，用于构建和存储 Docker 图像
  * [Play with Docker](https://labs.play-with-docker.com/) - 一个简单、互动式且有趣的 Docker 学习平台
  * [quay.io](https://quay.io/) - 免费提供无限的公开仓库，用于构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的 Docker 镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp的Vagrant Cloud。Vagrant box的托管平台。
  * [Vagrantbox.es](https://www.vagrantbox.es/) - 一个公共镜像仓库的替代选择

**[⬆️ 返回顶部](#目录)**

## 开发博客网站

  * [BearBlog](https://bearblog.dev/) - 一个极简的、基于 Markdown 的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 开发者分享想法和互相帮助的平台。
  * [Hashnode](https://hashnode.com/) — 为开发者量身打造的博客软件，无烦扰！
  * [Medium](https://medium.com/) — 更加深入地思考对你而言重要的事情。
  * [AyeDot](https://ayedot.com/) — 免费使用现代多媒体的短格式迷你博客与世界分享你的想法、知识和故事。

**[⬆️ 返回目录](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com)：GraphComment是一个评论平台，帮助您从网站受众中建立活跃的社区。
  * [Utterances](https://utteranc.es)：这是一个基于GitHub问题的轻量级评论小部件。使用GitHub问题进行博客评论、维基页面等！
  * [Disqus](https://disqus.com)：Disqus是一个网络社区平台，被网络上数以万计的网站使用。
  * [Remarkbox](https://www.remarkbox.com)：开源的托管评论平台，可以根据使用情况进行支付，体验“一名管理员管理少数域名，完全控制行为和外观”。
  * [IntenseDebate](https://intensedebate.com)：这是一款功能丰富的WordPress、Tumblr、Blogger和其他众多网站平台的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持全页面捕获、定时和视口尺寸。
  * [microlink.io](https://microlink.io/) — 可将任何网站转换为元标签标准化、美观的链接预览、爬虫功能或作为服务的截图。免费每日250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简洁的API调用生成网站截图。设计易于扩展，托管在Google Cloud上。每月提供100次免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 为任何网站捕获高度可定制的快照。每月免费100次。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 捕获每月100次的快照，格式包括png、gif和jpg，包括完整页面捕获，而不仅仅首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。自2017年起，免费版提供每天最多500页。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker提供网站截图和域名情报API服务。免费每月100次请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换成jpg、png或pdf。支持全页面截图、调整视口并注入自定义代码。免费版本每月150张图片。
  * [Screenshots](https://screenshotson.click) — 为您提供截图的API。提供高度自定义的捕获选项。每月免费100次截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab是一个现代的Flutter线上IDE，也是创建、调试和构建跨平台项目的最佳场所。使用Flutter构建iOS应用（无需Mac）和Android应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic是一个全托管的移动应用的CI/CD服务。你可以使用图形化的CI/CD工具进行构建、测试和部署。免费版每月提供500分钟的免费时间，以及一个带有2.3 GHz和8 GB内存的Mac Mini实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow是一个基于浏览器的拖放界面，用于使用Flutter构建移动应用。

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [ JsLinux](https://bellard.org/jslinux) — 一个非常快速的x86虚拟机，可以运行Linux和Windows 2k。
  * [ Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个支持网络的OpenRISC虚拟机，能够运行带有网络支持的Linux。
  * [v86](https://copy.sh/v86) — 一个能够在浏览器中直接运行Linux和其他操作系统的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 帮助通过审计和连续工作流实现隐私设计原则，以确保组织符合GDPR和其他法规。免费版只适用于小团队，而SaaS版本有其限制。
  * [Osano](https://www.osano.com/) - 提供同意管理与合规平台，涵盖从GDPR代理到cookie警告栏的方方面面。免费版提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 提供隐私和cookie策略以及同意管理工具。免费版提供有限的隐私和cookie政策以及cookie警告栏功能。
  * [Cookiefirst](https://cookiefirst.com/) - 提供cookie警告栏、审计以及多语言同意管理解决方案。免费版提供一次性扫描和一个单个警告栏。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大部分功能，但访客数有限制。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、数据请求处理（DSARs）以及数据映射。免费版包含核心同意管理功能，而且他们也为经过验证的开源项目提供更高级别的免费服务。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 用于社交媒体上创建美观代码、文本或图片截图的网站。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可将其作为美观的图片分享在Twitter / Facebook上，或作为链接在聊天或论坛中提供。
  * [Blynk](https://blynk.io) — 提供API的云端SaaS，用于控制、构建和评估物联网设备。免费开发者计划支持5台设备，免费云和数据存储，还有移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个笔记应用（PWA），拥有强大的多行计算器功能。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建并分享代码片段的美观截图格式。通常用于在Twitter或博客文章上美观展示代码片段。
  * [Code Time](https://www.software.com/code-time) - 为VS Code、Atom、IntelliJ、Sublime Text等提供时间追踪和编码指标的扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建出色的截图，以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本截图以便分享在社交媒体上。
  * [Cronhooks](https://cronhooks.io/) - 计划定时或反复的网络事件。免费计划允许多达5次临时计划。
  * [cron-job.org](https://cron-job.org) - 在线Cronjob服务，无限制的工作是免费的。
  * [datelist.io](https://datelist.io) - 在线预订/预约管理系统。免费计划每月包含5次预订，附带1个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单工具，可将任何URL或域名重定向。免费提供5个域名和每月20万次请求。
  * [Elementor](https://elementor.com) - WordPress网站构建器，提供免费计划，包含40多个基础小部件。
  * [Format Express](https://www.format-express.dev) - 在线快速格式化JSON / XML / SQL。
  * [FOSSA](https://fossa.com/) - 用于第三方代码管理、许可证合规性和漏洞管理的

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) — 免费使用2台设备，对会话的数量和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 需求支持和设备的长期访问（免费每日2次会话）
  * [RustDesk](https://rustdesk.com/) - 为所有人提供的开源虚拟/远程桌面基础设施！
  **[回到顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 提供免费/付费素材，如精灵、贴图、角色包等。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享源自全球游戏艺术家的免费游戏素材。
  * [GameDevMarket](https://gamedevmarket.net) — 提供免费/付费的2D、3D、音频和GUI素材。
  * [OpenGameArt](https://opengameart.org) — 提供开源游戏素材，如音乐、声音、精灵和GIF。
  * [CraftPix](https://craftpix.net) — 提供免费/付费的2D、3D、音频、GUI、背景、图标、贴图集和游戏套件。
  * [Game Icons](https://game-icons.net/) - 提供CC-BY许可的可自定义矢量/PNG图标。
  * [LoSpec](https://lospec.com/) — 提供在线工具创作像素艺术和其他有约束的数字艺术，有丰富的教程和调色板列表供您游戏选择。
  * [ArtStation](https://www.artstation.com/) - 提供2D、3D资产（免费/付费）、音频、图标、贴图集和游戏套件。也可用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/) — 社区资产以及使用其免费计划创建自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) — 提供免费低 poly 三维模型。
  * [3Dassets.one](https://3dassets.one/) — 提供超过8000个免费/付费3D模型，以及用于制作纹理的PBR材料。
  * [Kenney](https://www.kenney.nl/assets/) - 提供免费的CC0 1.0 Universal 许可的2D、3D、音频和UI游戏素材。
  * [Poliigon](https://www.poliigon.com/) — 提供免费和付费的纹理（可变分辨率）、模型、HDRIs、画笔。还提供免费插件，支持导出至软件如Blender。
  * [Freesound](https://freesound.org/) — 提供协作式音乐库，提供不同类型的CC许可。

**[⬆️ 返回目录](#目录)**

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 这是为 web 开发者提供的免费工具，包括 CSS 压缩、解压缩、图像优化、图像调整大小、大小写转换器、CSS 校验器、JavaScript 编译器、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月提供高达 200 小时的音频转录免费服务。
  * [get.localhost.direct](https://get.localhost.direct) - 一个更好的本地开发 `*.localhost.direct` 公开 CA 签名 SSL 证书，支持子域名。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 制作的免费/自由开源软件和 SaaS 列表。
  * [github.com — 为开发者而生的 FOSS](https://github.com/tvvocold/FOSS-for-Dev) — 一个汇集免费和开源软件的开发工具库。
  * [GitHub 教育](https://education.github.com/pack) — 为学生提供的免费服务集合。需要注册。
  * [Markdown Tools](https://markdowntools.com) — 用于将 HTML、CSV、PDF、JSON 和 Excel 文件转换为 Markdown，以及反向转换的工具。
  * [Microsoft 365 开发人员计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取用于微软 365 平台开发的免费沙箱、工具和其他资源。订阅是 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含 Windows），到期后可续订，条件是有开发活动（通过遥感数据分析和算法衡量）。
  * [Pyrexp](https://pythonium.net/regex) — 一款免费的在线正则表达式测试器和可视化工具，用于调试正则表达式。
  * [RedHat 对开发者](https://developers.redhat.com) — 免费访问 Red Hat 产品，例如 RHEL、OpenShift、CodeReady 等，仅面向开发人员。提供个人计划，