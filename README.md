# free-for.dev

如今，开发者和开源作者有许多服务提供免费试用，但是筛选这些信息需要时间，来做明智的决定。

这里列出了软件（SaaS、PaaS、IaaS 等），以及其他具有免费开发者版的服务。

本列表专门针对系统管理员、DevOps 工程师等基础设施开发者可能感兴趣的工具。我们热爱所有免费服务，但由于话题限制，可能会有主观判断。如果我没有接受您的贡献，不要感到不快。

这个列表源自于来自 1600+ 人的 Pull 请求、审查、想法和工作。您也可以通过发送 [Pull Request](https://github.com/ripienaar/free-for-dev) 来添加更多服务，或移除那些提供已更改或已退役的特性。

[![](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这个列表只包含作为服务提供，而非自托管软件。要符合资格，一项服务必须提供免费版，而不仅仅是免费试用。如果基于时间计费，免费版必须至少提供一年。我们也会从安全性角度考虑，单点登录（SSO）是可以的，但我不会接受仅限付费才能使用加密服务的选项。

# 目录

  * [主要云服务提供商的免费限制](#主要云服务提供商的免费限制)
  * [云管理系统](#云管理系统)
  * [分析、事件和统计](#分析、事件和统计)
  * [APIs、数据与机器学习](#APIs、数据与机器学习)
  * [软件仓库](#软件仓库)
  * [后端即服务(BaaS)](#后端即服务(BaaS))
  * [低代码平台](#低代码平台)
  * [内容分发网络和防护](#内容分发网络和防护)
  * [持续集成与部署(CI/CD)](#持续集成与部署(CI/CD))
  * [内容管理系统(CMS)](#内容管理系统(CMS))
  * [代码生成](#代码生成)
  * [代码质量检查](#代码质量检查)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图上的数据可视化](#地图上的数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计与UI](#设计与UI)
  * [设计灵感](#设计灵感)
  * [开发者博客站点](#开发者博客站点)
  * [域名管理](#域名管理)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
  * [特性开关管理平台](#特性开关管理平台)
  * [字体](#字体)
  * [表单处理](#表单处理)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务(IaaS)](#基础设施即服务(IaaS))
  * [集成开发环境(IDE)与代码编辑](#集成开发环境(IDE)与代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息与流传输](#消息与流传输)
  * [其他](#其他)
  * [监控](#监控)
  * [平台即服务(PaaS)](#平台即服务(PaaS))
  * [包构建系统](#包构建系统)
  * [支付和

## 主要云服务提供商的免费限制

  * **[Google Cloud Platform](https://cloud.google.com)** (每月免费资源额度)
    * App Engine - 每天28个前端实例小时和9个后端实例小时
    * Cloud Firestore - 1GB 存储容量，每天50,000次读取，20,000次写入和20,000次删除
    * Compute Engine - 1个非抢占式 Linux e2-micro 实例，30GB 硬盘，5GB 云备份存储（针对某些地区），每月从北美到所有地区目的地的1GB网络出站流量（不含中国和澳大利亚）
    * Cloud Storage - 5GB存储空间，每月1GB网络出站流量
    * Cloud Shell - 基于Web的Linux终端/主要IDE，配备5GB持久化存储，每周使用限制为60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包括背景和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月北美地区1GB网络出站流量
    * Google Kubernetes Engine - 对一个区的集群管理费免费，用户节点按常规Compute Engine定价计费
    * BigQuery - 每月查询1TB数据，存储每月10GB
    * Cloud Build - 每天120分钟构建时间
    * Cloud Source Repositories - 每个团队最多5名用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebook开发环境
    * [idx.dev](https://idx.dev) - Google 项目IDX，基于Google Cloud的在线Visual Studio Code环境
    * 更详细列表：<https://cloud.google.com/free>

* **[Amazon Web Services (AWS)](https://aws.amazon.com)** (每月免费资源额度)
    * CloudFront - 每月1TB数据出站和每月200万Lambda函数调用
    * CloudWatch - 10个自定义指标和10个警报
   

    * [DevTest Labs](https://www.azure.com/services/devtest-lab/) - 提供快速、简单、轻量级的开发测试环境
    * [Active Directory](https://www.azure.com/services/active-directory/) - 500,000 用户对象
    * [Active Directory B2C](https://www.azure.com/services/active-directory/external-identities/b2c/) - 每月存储50,000 用户
    * [Azure DevOps](https://www.azure.com/services/devops/) - 5 个活跃用户，无限个私有 Git 存储库
    * [Azure Pipelines](https://www.azure.com/services/devops/pipelines/) - 免费支持10个并行工作项，Linux、macOS和Windows平台上的开放源代码无限运行时间
    * [Microsoft IoT Hub](https://www.azure.com/services/iot-hub/) - 每天8,000 条消息
    * [负载均衡器](https://www.azure.com/services/load-balancer/) - 一个免费的公共负载均衡IP（VIP）
    * [通知中心](https://www.azure.com/services/notification-hubs/) - 每月100万条推送通知
    * 带宽：[详情](https://www.azure.com/pricing/details/bandwidth/) - 15GB 内部（12个月）和5GB 传出流量每月
    * [Cosmos DB](https://www.azure.com/services/cosmos-db/) - 25GB 存储和1,000 RUs 预置吞吐量
    * [静态网站](https://www.azure.com/pricing/details/app-service/static/) - 使用免费SSL、身份验证/授权和自定义域名构建、部署和托管静态应用和无服务器函数
    * 存储：[详情](https://www.azure.com/services/storage/) - 12个月5GB 文件或Blob存储
    * [认知服务](https://www.azure.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、面部检测、机器人等），免费层级包含少量交易
    * [认知索引](https://www.azure.com/services/search/#features) - AI驱动的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes 服务](

* [Cloudflare](https://www.cloudflare.com/) - 提供多种服务：
  * **Application Services**（[应用服务](https://www.cloudflare.com/plans/)）：无限域名免费DNS、DDoS防护、CDN、免费SSL、防火墙规则、页面规则、WAF、Bot Mitigation、免费的无限制速率限制（每个域名一条规则）、分析、电子邮件转发。
  * **Zero Trust & SASE**（[零信任与SASE服务](https://www.cloudflare.com/plans/zero-trust-services/)）：最多50用户、24小时活动日志记录、三个网络位置。
  * **Cloudflare Tunnel**（[Cloudflare隧道](https://www.cloudflare.com/products/tunnel/)）：无需账户即可通过隧道将本地运行的HTTP端口暴露到trycloudflare.com下的随机子域名上。更多功能（TCP隧道、负载平衡、VPN）可在[Zero Trust](https://www.cloudflare.com/products/zero-trust/)的免费计划中实现。
  * **Workers**（[工作器](https://developers.cloudflare.com/workers/)）：免费在全球网络上部署无服务器代码（每日10万次请求）。
  * **Workers KV**（[工作器KV](https://developers.cloudflare.com/kv)）：每日10万次读取请求、1000次写入请求、1000次删除请求、1000次列表请求，存储容量1GB。
  * **R2**（[R2](https://developers.cloudflare.com/r2/)）：每月10GB存储空间、100万条Class A操作、1000万条Class B操作。
  * **D1**（[D1](https://developers.cloudflare.com/d1/)）：每日5万条读取记录、100k条写入记录、1GB存储。
  * **Pages**（[页面](https://developers.cloudflare.com/pages/)）：在Cloudflare的快速、安全全球网络上构建和部署应用。每月500个构建、100个自定义域名、集成SSL、无限访问席位、无限预发布部署以及通过Cloudflare Workers集成的全栈能力。
  * **Queues**（[队列](https://developers.cloudflare.com/queues/)）：每月100万次操作。
  * **TURN**（[TURN](https

## 云管理系统

  * **[Brainboard](https://www.brainboard.co)**：这是一个协作型工具，用于从端到端构建和管理云基础设施。
  * **[Cloud 66](https://www.cloud66.com/)**：个人项目免费（包括一个部署服务器和一个静态站点），Cloud 66可以让你无需烦恼“服务器管理工作”，一站式构建、部署和扩展应用程序到任何云服务。
  * **[Pulumi](https://www.pulumi.com/)**：一个现代化的基础设施即代码平台，它允许你使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * **[terraform.io](https://www.terraform.io/) - Terraform Cloud**：提供免费的远程状态管理以及团队协作，支持最多500个资源。 
  * **[Scalr](https://scalr.com/) - Scalr**：这是一个专为Terraform自动化和协作（TACO）设计的工具，帮助优化对Terraform管理和配置的协作和自动化。它支持完整 Terraform CLI，集成 OPA，具有分层配置模式。无单点登录要求。所有功能免费，每月可免费使用50个运行。
  * **[deployment.io](https://deployment.io)**：Deployment.io 是帮助开发者在 AWS 上自动部署的工具。在免费版中，一个开发者（单用户）可以无限量部署静态网站、网络服务和环境，每月免费提供20次执行任务，包含预览和自动部署。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 面向最多5位用户的公开和私人Git存储库，附带CI/CD功能
  * [chiselapp.com](https://chiselapp.com/) — 无限的公开和私人Fossil存储库
  * [codebasehq.com](https://www.codebasehq.com/) — 包括一个免费项目，空间大小为100 MB，最多支持2名用户
  * [Codeberg](https://codeberg.org/) — 对免费和开源项目提供无限的公开和私人Git存储库（包含了无限制的合作者）。由[Forgejo](https://forgejo.org/)提供支持。还提供了静态网站托管功能，使用[Codeberg Pages](https://codeberg.page/)；CI/CD托管通过[Codeberg的CI](https://docs.codeberg.org/ci/)；翻译服务则由[Codeberg Translate](https://translate.codeberg.org/)提供。还包括包和容器管理、项目管理和问题跟踪功能
  * [GitGud](https://gitgud.io) — 无限的公开和私有存储库，永远免费。由GitLab和Sapphire驱动。未提供CI/CD服务
  * [GitHub](https://github.com/) — 无限的公开存储库，以及无限的私有存储库（包括无限制的合作者）。提供CI/CD、开发环境、静态主机、包和容器托管、项目管理和AI Copilot功能
  * [gitlab.com](https://about.gitlab.com/) — 提供无限的公开和私人Git存储库，最多支持5名合作者。功能包括CI/CD、静态主机、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — 基于GitLab开源软件的Framasoft软件存储库，包含CI、静态页面、项目页面和问题跟踪功能
  * [heptapod.net](https://foss.heptapod.net/) — 为Mercurial提供支持的GitLab社区版的友好分支
  * [ionicframework.com](https://ionicframework.com/appflow) — 提供开发Ionic应用的存储库和工具；此外，还拥有一个Ionic项目存储库
  * [NotABug](https://notabug.org) — 是一个基于自由许可证的免费代码合作平台，

## APIs、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具将复杂 JSON 数据可视化、编辑和过滤为美观的表格网格。通过链接保存并分享 JSON 数据。
  * [Zerosheets](https://zerosheets.com) - 转换 Google Sheets 表格为强大的 API，快速构建原型、网站、应用等。每月免费提供 500 个请求。
  * [IP.City](https://ip.city) — 每天免费的 100 次 IP 地理定位请求
  * [Abstract API](https://www.abstractapi.com) — 针对多种用途的 API 集合，包括 IP 地理定位、性别识别或电子邮件验证。
  * [Apify](https://www.apify.com/) - 网络抓取和自动化平台，为任何网站创建 API 并提取数据。免费计划每月包含5美元平台信用。
  * [APITemplate.io](https://apitemplate.io) - 基于简单 API 或自动化工具如 Zapier 和 Airtable 自动生成图像和 PDF 文件。不需要 CSS/HTML。免费版包含每月 50 张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) — 您了解 API 和后端所需的一切工具。使用自动化的 API 合同验证和监控。免费计划覆盖每月最多 20,000 次请求的服务器。
  * [APIVerve](https://apiverve.com) - 得即时访问 120 多个免费 API，质量和一致性经过优化。免费计划限制为每月 50 个 API Token。
  * [Arize AI](https://arize.com/) - 机器学习监控，用于模型监控和解决数据质量、性能漂移等问题。免费版最多支持两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于开发即时可用的单页 web 应用程序。支持 Java、Node.js、Perl、Python 和 Ruby。
  * [Beeceptor](https://beeceptor.com) - 快速模拟 REST API，伪造 API 回应等。免费版每天有 50 个请求，公开面板，公开端点（任何拥有面板链接的人都可以查看提交和答案）。
  * [

  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验追踪、模型生产管理、模型仓库和完整的数据追溯，覆盖从训练到生产的工作流程。对个人和学者免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的电商API，用于构建、下订单和管理前端订单。开发者计划允许每月100个订单，最多可免费创建1,000个商品。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API，支持Node.js、PHP和Python库。免费版有限制于文件大小和每天的转换次数。
  * [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家、区域、省、城市、邮编等广泛信息的API和微服务。免费试用包括每天100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，用于应用间的同步。可以创建实时仪表板、报告，转换数据并备份洞察。免费版包含无限用户、每月100个运行，以及无限定制。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API，自动生成PDF文档，基于可复用模板。免费版配给每月100个PDF和3个模板。
  * [CurlHub](https://curlhub.io) - 用于检查和调试API调用的代理服务。免费版包括每月10,000个请求。
  * [CurrencyScoop](https://currencyscoop.com) - 提供金融科技应用的实时货币数据API。免费版包括每月5,000次调用。
  * [Cube](https://cube.dev/) - 帮助数据工程师和应用开发者访问现代数据存储的数据，对数据进行一致的定义并跨应用程序提供。 Cube Cloud的免费版提供每月1GB的数据传输。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件分享服务。数据访问后自动销毁。通过浏览器或命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需代码即可将

  * [DeepAR](https://developer.deepar.ai) — 使用一个SDK为所有平台提供增强现实面部滤镜。免费计划最多提供10个每月活跃用户（MAU），并且可以追踪4张面孔。
  * [Deepnote](https://deepnote.com) — 一个全新的数据科学笔记本。Jupyter支持实时协作和云中的运行。免费套餐包括无限的个人项目、高达750小时的标准硬件时长，以及最多3名编辑人员的团队。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云端的网络抓取和数据抽取平台，可将任何网站转换为数据集或作为API一起工作。免费计划每月包含5,000个页面请求。
  * [Disease.sh](https://disease.sh/) — 提供构建与Covid-19相关的有用应用的精确数据的免费API。
  * [Doczilla](https://www.doczilla.app/) — 为HTML/CSS/JS代码直接生成屏幕截图或PDF的云端API。免费计划允许每月250文档。
  * [Doppio](https://doppio.sh/) — 是一个管理API，通过顶级渲染技术生成并私密存储PDF和屏幕截图。免费计划允许每月400个PDF和屏幕截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 开源的REST API后端，用于移动、Web和IoT应用程序。连接任何SQL/NoSQL数据库、文件存储系统或外部服务，它立即创建一个具有实时文档和用户管理的全面REST API平台。
  * [DynamicDocs](https://advicement.io) — 根据LaTeX模板使用JSON到PDF API生成PDF文档。免费计划允许每月50个API调用和访问模板库。
  * [Efemarai](https://efemarai.com) — 用于ML模型和数据的测试和调试平台。可以可视化任何计算图。程序员每月免费提供30个调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 免费的基于Web的HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) — 使用拖放模板编辑器的PDF生成API，提供了SDK和无代码集成。免费计划每月有250页，无限用户和三个模板

  * [Glitterly](https://glitterly.app/) - 从基础模板自动生成动态图像的程序。提供RESTful API及无代码集成。免费版每个月有50个动态图和五种模板。
  * [GoodData](https://www.gooddata.com/) - 数据服务 - 创建交互式且具有洞察力的数据仪表板。免费版包含五个工作空间和每个工作空间100MB的空间。
  * [Hex](https://hex.tech/) - 一个用于笔记本、数据应用和知识库的协作数据平台。社区版是免费的，最多支持三位作者和五个项目。每个作者一个计算配置，有4GB的RAM。
  * [Hook0](https://www.hook0.com/) - Hook0是一个开源的Webhooks-as-a-service (WaaS)，让在线产品轻松提供Webhooks。免费版每月可以发送多达3,000个事件，且保留历史记录七天。
  * [Hoppscotch](https://hoppscotch.io) - 一个免费、快速且美观的API请求构建器。
  * [Hybiscus](https://hybiscus.dev/) - 使用简单的声明性API构建PDF报告。免费版每月包括最多100份单页报告，可定制颜色方案和字体。
  * [Invantive Cloud](https://cloud.invantive.com/) - 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问70多个（云端）平台，如Exact Online、Twinfield、ActiveCampaign或Visma。免费版针对开发人员和实施顾问，部分平台有数据量限制。
  * [ipaddress.sh](https://ipaddress.sh) - 提供不同[-格式](https://about.ipaddress.sh/)获取公共IP地址的简单服务。
  * [ipbase.com](https://ipbase.com) - IP地理定位API - 可以无限免费使用，每月不超过150次请求。
  * [IP Geolocation](https://ipgeolocation.io/) - IP地理定位API - 开发者免费版，每月有3万个请求（每日1千）的限制。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) - 来自Abstract的IP地理定位API - 提供广泛免费版，每月2万个请求。
  * [IP2Location](https://

  * [IPTrace](https://iptrace.io) — 这是一个简单易用的API，为您的企业提供可靠且有用的IP地理位置数据。
  * [JSON2Video](https://json2video.com) — 一个视频编辑API，可以自动化视频营销和社交媒体视频制作，程序或无代码操作。
  * [JSON IP](https://getjsonip.com) — 返回请求来源的公共IP地址。免费版无需注册。使用CORS，可以通过浏览器的客户端JavaScript直接从服务器请求数据。适用于监控客户端和服务器IP的变化。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 一项免费服务，帮助开发者储存JSON对象，并将其作为REST API在应用中使用。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建一个假的REST API，自定义HTTP状态码、标头和响应体。
  * [konghq.com](https://konghq.com/) — API市场和强大的私有和公共API工具。免费版有限制，如监控、报警和支持等方面的某些功能。
  * [Kreya](https://kreya.app) — 免费gRPC GUI客户端，用于调用和测试gRPC API。可导入gRPC API通过服务器反射。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进您的机器学习模型。免费等级允许使用最多1000个样本的 datasets。
  * [LoginLlama](https://loginllama.app) — 提供登录安全API，检测欺诈和可疑登录并通知客户。每月免费1000次登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 使用真实的邮件服务器连接进行电子邮件验证服务。免费计划每月300次验证。
  * [Market Data API](https://www.marketdata.app) —提供实时和历史金融市场数据，包括股票、期权、共同基金等。免费版每日免费100次API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 提供全球实时和预报天气数据的API。免费计划每天400次调用。
  * [microlink.io](https://microlink.io/) — 将任何网站转化为数据，如元标记规范化、美观的链预览、抓取功能或作为服务的屏幕截图

  * [Mocki](https://mocki.io) - 这个工具允许你创建与GitHub仓库同步的 GraphQL 和 REST API模拟。简单的 REST API 可以免费开发和使用，无需注册。
  * [Mocko.dev](https://mocko.dev/) — 用云代理你的 API，并选择哪些端点进行模拟，以便查看流量，全部免费。加快开发和集成测试的速度。
  * [Mocky](https://designer.mocky.io/) - 这是一款用以生成定制 HTTP 响应以模拟 HTTP 请求的简单 web 应用。它也有开源版本，链接如下：[open source](https://github.com/julien-lafont/Mocky)。
  * [reqres.in](https://reqres.in) - 这是一个免费托管的 REST API，可以响应你的 AJAX 请求。
  * [microenv.com](https://microenv.com) —  这是一个为开发者创建模拟 REST API 的工具，还提供了生成代码和 Docker 容器应用的能力。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 这是一个免费简单的工具，可以跨多个节点检查你的出口 IP 地址，帮助你理解 IP 在不同全球区域和服务中的显示。适用于测试规则式 DNS 分割工具如 Control D。
  * [neptune.ai](https://neptune.ai/) - 用来记录、存储、显示、整理、比较并查询机器学习操作元数据。个人免费版：1 名成员，100GB 的元数据存储，每月200小时的监控。
  * [News API](https://newsapi.org) — 通过代码搜索网络上的新闻并获取 JSON 结果。开发者每月可使用免费的3000个查询。
  * [GoCardless](https://gocardless.com/) — 提供免费的开放银行数据 API，符合PSD2标准，可在 EU+UK 连接2300多个银行。
  * [Nyckel](https://www.nyckel.com) — 针对图片和文本的 ML 模型进行训练、部署和调用。免费版允许最多5000个训练数据，每月1000次模型调用。
  * [Observable](https://observablehq.com/) — 是一个用于创建、协作和数据分析的地方。免费版：无限的笔记本、无限的发布、

  * [ PrefectCloud](https://www.prefect.io/cloud/) - 提供数据流自动化的一站式平台。所有计划每月均包含20,000次免费运行，足以支持大多数小型企业的数据提取、加载和转换 (ETL)。
  * [Preset Cloud](https://preset.io/) - 提供托管的Apache Superset服务。最多5个用户的团队永远免费，包含无限的仪表板和图表、无需编码的图表构建器以及协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 用于创作者和开发者的提示工程平台。提供提示工程库、表单和API。免费计划提供一个提示构造形式、一个提示API端点以及每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用AI和大型语言模型如GPT-3，简单地在Google Sheets中使用表格公式进行文本转换、理解和分析。每月免费提供2,000个信用。
  * [Crawlbase](https://crawlbase.com/) - 可以无需代理、基础设施或浏览器直接抓取和爬取网站。我们为您解决验证码并防止被屏蔽。免费提供1000次调用。
  * [Public-Apis GithubRepo](https://github.com/public-apis/public-apis) - 一个免费公共API的列表。
  * [Supportivekoala](https://supportivekoala.com/) - 允许根据模板自动生成图像。免费计划允许每周创建100张图像。
  * [QuickMocker](https://quickmocker.com/) - 在您自己的子域下管理在线伪造的API端点，转发请求到本地URL进行Webhook开发和测试，支持正则表达式和多个HTTP方法。免费账户包括一个随机子域、十个端点以及更多限制。
  * [Rapidapi](https://rapidapi.com/) - 全球最大的API中心，数百万开发者查找并连接数千个API，通过互动示例和挑战进行API开发。
  * [RequestBin.com](https://requestbin.com) - 创建一个免费端点，你可以发送HTTP请求到该端点。所有发送到该端点的HTTP请求将被记录，包括相关负载和头部，便于观察Webhook和其它服务的推荐。
  * [Roboflow](https://roboflow.com) - 无需机器学习

  * [ScraperBox](https://scraperbox.com/) — 使用真人Chrome浏览器和代理轮换进行无感知的网络抓取。仅需一次简单的API调用即可刮取任何网页。免费版本每月可进行1000次请求。
  * [ScrapingDog](https://scrapingdog.com/) — ScrapingDog处理数百万代理、浏览器和验证码，确保一次API调用就能获取任何网页的HTML内容。还包括Chrome和Firefox的Web Scraper以及即时抓取需求的软件。也有免费版本可供选择。
  * [scrapinghub.com](https://scrapinghub.com) — 使用可视化界面和插件进行数据抓取。免费计划包括共享服务器上的不限量抓取。
  * [Simplescraper](https://simplescraper.io) — 每次操作后触发Webhook。免费计划包括100个云刮片信用。
  * [Select Star](https://www.selectstar.com/) — 是一款智能数据发现平台，可以自动分析和文档化数据。免费的轻量级级别带有1个数据源、多达100张表和10个用户。
  * [Sheetson](https://sheetson.com) — 即时将任何谷歌表格转换为RESTful API。免费计划可供使用。
  * [Shipyard](https://www.shipyardapp.com) — 云中低代码数据编排平台，可混合使用低代码模板和你的代码（Python、Node.js、Bash、SQL）。免费开发者计划每月提供10小时的运行时间，足够自动化多个工作流。
  * [shrtcode API](https://shrtco.de/docs) — 无需授权的免费URL缩短API，且无请求限制。
  * [SerpApi](https://serpapi.com/) — 实时搜索引擎抓取API，返回Google、YouTube、Bing、百度、沃尔玛等搜索引擎的结构化JSON结果。免费计划包括每月100次成功的API调用。
  * [SmartParse](https://smartparse.io) — 是一款数据迁移和CSV到API的平台，提供节省时间和成本的开发者工具。免费版包含每月300个处理单元、浏览器上传、数据隔离、电路断路器和任务警报。
  * [Sofodata](https://www.sofodata.com/) — 从CSV文件创建安全的RESTful

  * [Weights & Biases](https://wandb.ai) — 开发者首选的机器学习部署平台。使用实验追踪、数据集版本管理和模型管理，更快构建更好的模型。个人项目的免费版包含 100 GB 存储空间。
  * [wit.ai](https://wit.ai/) — 专门针对开发者的自然语言处理 (NLP) 服务。
  * [wolfram.com](https://wolfram.com/language/) — 在云端内置知识驱动的算法。
  * [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化的 API。免费版每月 30,000 API 调用。
  * [ZenRows](https://www.zenrows.com/) — 一个网络抓取 API 和代理服务器，可以避开反机器人解决方案，提供 JavaScript 渲染、代理轮换和地理位置定向。免费版提供 1,000 API 调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 提供无头浏览器、居民IP和简单计费选项的网络抓取 API。每月免费提供 1,000 API 调用，学生和非营利组织另有额外积分。
  * [ip-api](https://ip-api.com) — 地理位置 IP API，非商业用途免费，无需 API 密钥，免费版限制同一 IP 地址每分钟不超过 45 个请求。
  * [WebScraping.AI](https://webscraping.ai) — 提供自动解析的简单网络抓取 API，支持 Chrome 渲染和代理。每月免费提供 2,000 API 调用。
  * [Zipcodebase](https://zipcodebase.com) — 免费 Zip 代码 API，提供全世界邮政编码数据，每月免费调用次数为 10,000 次。
  * [huggingface.co](https://huggingface.co) — 用于构建、训练和部署 Pytorch、TensorFlow 和 JAX 的自然语言处理模型。免费版每月最多 30,000 个输入字符。
  * [vatcheckapi.com](https://vatcheckapi.com) — 简单且免费的 VAT 号码验证 API，每月免费调用次数为 500

  * [Zuplo](https://zuplo.com/) - 免费的API管理平台，用于设计、构建和部署API到边缘。为任何API添加API密钥认证、速率限制、开发人员文档和盈利，几分钟内即可完成。与OpenAPI兼容并且完全基于Web标准和TypeScript。免费计划提供最多10个项目，无限个生产边缘环境，250个API密钥，每月100K请求和1GB出站流量。

**[⬆️ 返回顶部](#目录)**

## 软件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS等多种包格式的存储库。它包含了包扫描工具XRay和CI/CD工具Pipelines（以前称为Shippable），后者每月提供2,000分钟的免费CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认存储库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven和PyPi存储库。对开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全的集中式存储服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。有免费版，开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 用于GitHub上的JVM和Android项目的Maven存储库，免费提供给公共项目。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 简单易用的Maven、RPM、DEB、PyPi、NPM和RubyGem包存储服务（有免费层次）。
  * [repsy.io](https://repsy.io) — 免费的1 GB 私有和公共Maven存储。
  * [Gemfury](https://gemfury.com) — 提供Maven、PyPi、NPM、Go Module、Nuget、APT和RPM存储库的私有和公共存储。免费公开项目。
  * [paperspace](https://www.paperspace.com/) — 用于构建和扩展AI模型、开发训练和部署AI应用的服务。免费计划包括：公共项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 云托管的私有Python、Debian、NPM包和Docker注册表。免费版适用于开源/公众项目。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化了包管理，支持npm、PyPI、Docker、Go、Helm等。免费提供云版10GB存储、10GB带宽、100个

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一款针对个人和团队的免费云基础代码片段管理器。
  * [Bitwarden](https://bitwarden.com) - 最简单且最安全的个人、团队和企业存储、共享和同步敏感数据的方式。
  * [Braid](https://www.braidchat.com/) - 专为团队设计的聊天应用。免费版提供公开访问组、无限用户、历史记录和集成，以及开源版本供自托管。
  * [cally.com](https://cally.com/) - 为会议找到完美的时间和日期。易于使用，适用于小团队和大团队。
  * [Calendly](https://calendly.com) - 连接和安排会议工具。免费版提供每个用户1个日历连接和无限会议。桌面和移动应用也提供。
  * [Discord](https://discord.com/) - 它有公共/私密房间聊天功能，支持Markdown文本、语音、视频和屏幕共享。免费版不限用户数量。
  * [Telegram](https://telegram.org/) - 一个用于快速、可靠的通信和电话的平台，适用于商业用户和小团队，提供大群、用户名、桌面客户端和强大的文件分享选项。
  * [Dubble](https://dubble.so/) - 免费的步骤-by-步骤指南创建器，适合截图、记录过程和团队协作，还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) - 实时与团队沟通，例如与IDE、终端共享、语音、视频和屏幕共享。适用于小团队的免费版。
  * [Dyte](https://dyte.io) - 开发者友好的实时视频和音频SDK，具有协作插件以提高生产力。免费版包含每月10,000分钟的实时视频/音频使用量。
  * [evernote.com](https://evernote.com/) - 信息整理工具，可以让您分享笔记并与他人合作。
  * [Fibery](https://fibery.io/) - 连接工作空间平台，单用户免费，2GB存储空间。
  * [flock.com](https://flock.com) - 快速协作工具，提供免费无限消息、频道、用户、应用程序和集成。
  * [Gather](https://www.gather.town/) - 一款专注于自定义空间

  * [HeySpace](https://hey.space) - 带聊天、日历、时间线、视频通话的任务管理工具。5用户免费版。
  * [helplightning.com](https://www.helplightning.com/) — 提供增强现实帮助的视频服务。免费版不包括分析、加密和支持。
  * [ideascale.com](https://ideascale.com/) — 允许客户提交想法并投票，1社区里对25名成员免费。
  * [Igloo](https://www.igloosoftware.com/) — 内部门户，用于分享文档、博客、日历等。10用户免费。
  * [Keybase](https://keybase.io/) — 作为Slack的开源替代方案，Keybase确保所有聊天和文件安全，适用于家庭、团队和公司。
  * [Google Meet](https://meet.google.com/) — 适用于企业在线视频会议的Google Meet确保安全、轻松加入在线会议。
  * [/meet for Slack](https://meetslack.com) — 通过Slack中的`/meet`，在任何频道、群组或个人对话中即可直接开始Google Meet会议。免费版无限制。
  * [Livecycle](https://www.livecycle.io/) — Livecycle是一个包容的协作平台，让跨职能产品团队和开源项目无需摩擦地协作。
  * [Lockitbot](https://www.lockitbot.com/) — 在Slack内锁定共享资源，如房间、开发环境、服务器等。最多2个资源免费。
  * [MarkUp](https://www.markup.io/) — MarkUp允许您直接对网站、PDF和图片收集反馈。
  * [Proton Pass](https://proton.me/pass) — 具有内置电子邮件别名、2FA验证器、分享和密钥管理的密码管理器。提供Web、浏览器扩展、移动应用和桌面版。
  * [Visual Debug](https://visualdebug.com) - 用于改善开发者与客户端之间的交流的视觉反馈工具。
  * [meet.jit.si](https://meet.jit.si/) — 轻松视频交谈和屏幕共享，完全免费。
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free) — Microsoft Teams是一个基于聊天的数字中心，结合了讨论、内容和应用程序在一个位置。对500K用户免费。


  * [波荡](https://pendulums.io/) - 波荡是一个免费的时间跟踪工具，通过简洁界面和有价值的统计数据帮助你更好地管理时间。
  * [Pumble](https://pumble.com) - 免费团队聊天应用，无限用户和消息历史，永远免费。
  * [Raindrop.io](https://raindrop.io) - 私人且安全的跨平台书签应用，支持macOS、Windows、Android、iOS和Web，免费提供无限书签和协作功能。
  * [element.io](https://element.io/) - 基于Matrix的开源通信工具，提供群聊、直接消息、端到端加密文件传输、语音和视频通话以及与其他服务轻松集成的能力。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具有多渠道功能、Matrix联邦、与其他应用桥接、无限消息和完整聊天历史。
  * [seafile.com](https://www.seafile.com/) - 私有或云端存储、文件分享、同步和讨论，云端版仅提供1GB空间。
  * [Sema](https://www.semasoftware.com/) - 免费开发人员作品集工具，可将多个仓库的贡献汇总到单一报告中。
  * [通过浏览器进行屏幕分享](https://screensharing.net) - 免费屏幕共享工具，通过浏览器与协作伙伴分享屏幕，无需下载或注册，完全免费。
  * [Slab](https://slab.com/) - 专为团队设计的现代知识管理系统，10个用户以下免费。
  * [slack.com](https://slack.com/) - 对于无限用户提供有限功能的免费版。
  * [Spectrum](https://spectrum.chat/) - 免费创建公共或私人的社区。
  * [StatusPile](https://www.statuspile.com/) - 网站状态截图集锦工具，可以追踪上游服务的状态页。
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容筛选和记事的视觉协作应用，免费提供3个墙、无限用户和1GB存储空间。
  * [Stacks](https://betterstacks.com/) - 内容工作空间，具有集成笔记、链接和文件存储，帮助管理信息过载。个人版永久免费。
  * [talky.io](https://talky.io/) -

  * [tldraw.com](https://tldraw.com) — 免费的开源白板和绘图工具，具有智能箭头、对齐、便签和SVG导出功能。还有供协作编辑的多人模式。VS Code的官方免费扩展也已提供。
  * [BookmarkOS.com](https://bookmarkos.com) - 一个可定制的在线桌面，提供一站式书签管理器、标签管理器和任务管理器，还支持文件夹协作。
  * [typetalk.com](https://www.typetalk.com/) — 通过在线即时消息或移动设备与团队分享和讨论想法。
  * [Tugboat](https://tugboat.qa) - 提前预览每个拉取请求，自动化且按需进行。对所有用户免费，非营利组织用户有免费的Nano级别服务。
  * [whereby.com](https://whereby.com/) — 一键视频对话，免费版（之前称为appear.in）。
  * [windmill.dev](https://windmill.dev/) - 开源的开发者平台，可以快速构建生产级别的多步骤自动化和内部应用，仅需极少的Python和TypeScript脚本。免费用户最多可创建和参与三个免费版工作区。
  * [vadoo.tv](https://vadoo.tv/) — 简单的视频上传和营销服务。一键上传视频，记录、管理、分享等。免费版提供10个视频、1 GB存储空间和每月10 GB带宽。
  * [userforge.com](https://userforge.com/) - 让设计和开发保持同步的在线工具，包括关联的人物、用户故事和上下文映射。免费版最多支持3个角色和2名协作者。
  * [wistia.com](https://wistia.com/) — 提供视频托管、观众分析、高清视频分发和营销工具的视频服务，带有限时Wistia品牌播放器和25个视频数量。
  * [wormhol.org](https://www.wormhol.org/) — 直接文件分享服务。无限文件上传，每次最多5GB，可供多个同伴访问。
  * [Wormhole](https://wormhole.app/) - 安全的文件分享，5 GB以内的文件使用端到端加密，最长24小时。对于大于5GB的文件，它使用对等传输方式直接

  * [Pullflow](https://pullflow.com) — 提供了AI增强的代码审查协作平台，支持GitHub、Slack和VS Code。
  * [Webex](https://www.webex.com/) — 提供视频会议，免费版提供每次40分钟会议，最多100名参与者。
  * [RingCentral](https://www.ringcentral.com/) — 提供视频会议，免费版提供每次50分钟会议，最多100名参与者。
  * [GitBook](https://www.gitbook.com/) — 用于捕捉和记录技术知识的平台，适用于产品文档、内部知识库和API。个人开发者可用免费版。
  * [transfernow](https://www.transfernow.net/) — 最简单、最快和最安全的文件传输和分享界面。发送照片、视频和其他大型文件不必订阅。
  * [paste.sh](https://paste.sh/) — 一个基于JavaScript和Crypto的简单粘贴网站。
  * [Revolt.chat](https://revolt.chat/) — 一个开源的[Discord](https://discord.com/)替代方案，强调隐私。提供大多数Discord特性和免费，是一个安全、快速的全能应用程序。所有功能均免费，支持官方和非官方插件。
  * [Tencent RTC](https://trtc.io/) — 腾讯实时通信（TRTC）提供群组音频/视频通话解决方案。前一年提供10,000分钟免费通话。
  * [Pastefy](https://pastefy.app/) — 一款美观且简洁的Pastebin，可选客户端加密、多标签粘贴、API、高亮编辑器等。
  * [SiteDots](https://sitedots.com/) — 直接在您的网站上分享网站项目的反馈，无需仿真、Canvas或工作绕道。完全免费阶段可用。

## 内容管理系统(CMS)

  * [Acquia.com](https://www.acquia.com/) - 提供Drupal网站托管服务。开发者免费级别，还有免费开发工具（如Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) - 头部无内容管理系统。基于云的Content Management & Delivery API。包含一个免费的Community空间，包括5个用户、25,000条记录、48个内容类型和2个本地化区域。
  * [Cosmic](https://www.cosmicjs.com/) - 头部无内容管理系统和API工具包。为开发者提供了免费的个人计划。
  * [Crystallize](https://crystallize.com) - 集成了电子商务功能的头部无PIM。内置GraphQL API。免费版本包含无限用户、1,000个目录项、每月5GB带宽和每月25,000个API调用。
  * [DatoCMS](https://www.datocms.com/) - 小项目提供免费级别。DatoCMS基于GraphQL。基础级别允许每月100,000次调用。
  * [Directus](https://directus.io) - 头部无内容管理系统，完全免费且开源。可以离线或在云端管理资产和数据库内容，无限制或付费墙。
  * [FrontAid](https://frontaid.io/) - 存储JSON内容在Git仓库内的头部无内容管理系统。无限制。
  * [kontent.ai](https://www.kontent.ai) - 内容-as-a-Service 平台，提供无头CMS优势，同时赋能营销团队。开发者计划包含2个用户，无限项目，每个项目两个环境，500个内容项目，2种语言、 Delivery & Management API以及自定义元素支持。可根据需要选择更详细计划。
  * [Prismic](https://www.prismic.io/) - 头部无内容管理系统，提供了云托管和可伸缩的管理界面和API。社区计划为一个用户提供无限API调用、文档、自定义类型、资产和本地化。对于开源项目，有更大免费计划。
  * [Sanity.io](https://www.sanity.io/) - 结构化内容平台，提供开源编辑环境和实时托管数据存储。一个项目包含无限项目、无限管理员用户、3个非管理员用户、

  * [Storyblok](https://www.storyblok.com) - 一个为开发者和市场人员设计的无头内容管理系统，可与所有现代框架配合使用。社区版（免费）提供了管理API、可视化编辑器、10个源、自定义字段类型、国际化（无限语言/地区）、资产管理器（最高2500个资产）、图片优化服务、搜索查询、Webhook以及每月250GB的流量。
  * [WPJack](https://wpjack.com) - 在5分钟内将WordPress部署在任何云上！免费版包含1台服务器、2个网站、免费SSL证书以及不限数量的Cron作业。无时间限制，永远有效。您的网站，您做主。

**[⬆️ 返回目录](#目录)**

## 代码生成

  **[返回目录顶部](#目录)**

- [Appinvento](https://appinvento.io/) - AppInvento是一个免费的无代码应用构建器。在自动生成的后端代码中，用户可以访问源代码并对代码和无限API、路由完全访问，实现深度集成。免费计划包含3个项目、5张表和一个Google附加组件。
- [Cody AI](https://sourcegraph.com/cody) - Cody是一个代码AI助手，它利用AI和对代码库的深入理解帮助开发者更快地编写和理解代码。Cody为开发者提供了LLM（包括本地推理）的选择，支持各种IDE，支持所有流行编程语言，并有一个免费计划。免费计划每月为开发者提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动完成（使用Starcoder 16b）。
- [DhiWise](https://www.dhiwise.com/) - 通过DhiWise创新的代码生成技术，轻松将Figma设计转化为动态的Flutter和React应用程序，优化您的工作流程，更快地构建出色的移动和Web体验。
- [Codeium](https://www.codeium.com/) - Codeium是一个免费的AI代码补全工具，支持20多种编程语言（如Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等）并集成到所有主要的独立和Web IDE中。
- [Fern](https://buildwithfern.com) - 撰写API定义，然后使用它们生成TypeScript、Python、Java、Go等流行语言的SDK和客户端库。支持OpenAPI。免费版最多支持20个端点的代码生成。
- [Metalama](https://www.postsharp.net/metalama) - 仅适用于C#。Metalama在编译期间动态生成代码骨架，保持源代码的清洁。对于开源项目是免费的，其商业友好的免费版包含三个方面。
- [Supermaven](https://www.supermaven.com/) - Supermaven是为VSCode、JetBrains和Neovim提供的快速AI代码补全插件。免费版提供无限的内联补全功能。
- [tabnine.com](https://www.tabnine.com/) - Tabnine通过提供从全球代码中学来的洞察，帮助开发者更高效地开发软件。此插件可用。
-

## 代码质量检查

  * [beanstalkapp.com](https://beanstalkapp.com/) — 提供编写、审查和部署代码的完整流程，免费账户允许一位用户和一个存储空间为100 MB的仓库
  * [browserling.com](https://www.browserling.com/) — 实时跨平台浏览器测试工具，但免费账户的使用时间有限（例如，只有在Windows Vista系统下，1024 x 768分辨率下的Internet Explorer 9才能使用3分钟）
  * [codacy.com](https://www.codacy.com/) — 自动代码审查服务，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript，免费版本适用于无限公开仓库和私人仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 自动化基础设施作为代码审查工具，适用于DevOps开发，可与GitHub、Bitbucket和GitLab（包括自托管）集成。除了标准语言外，它还支持Ansible、Terraform、CloudFormation、Kubernetes等。开源版本是免费的
  * [CodeBeat](https://codebeat.co) — 自动代码审查平台，支持多种语言。对公开仓库免费，并支持Slack和电子邮件集成
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，免费公开仓库不限数量和不超过4个协作者的组织型私有仓库。对学生和机构也提供免费服务
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（软件即服务），提供开源项目的免费服务以及一个免费私有仓库
  * [CodeFactor](https://www.codefactor.io) — 为Git提供的自动代码审查服务，免费版包括不限用户数、公共仓库和一个私有仓库
  * [coderabbit.ai](https://coderabbit.ai) — AI驱动的代码审查工具，与GitHub和GitLab集成。免费版包含每小时200个文件分析、每小时3个审查和每小时50个对话。开源项目永远免费
  * [codescene.io](https://codescene.io/) — 根据开发人员如何使用代码进行优先级排序的代码债务分析并可视化团队耦合和系统掌握等组织层面的信息。开源项目是免费的
  * [CodSpeed](https://codspeed.io) —

  * [gerrithub.io](https://review.gerrithub.io/) — 为GitHub仓库提供免费的Gerrit代码审查
  * [gocover.io](https://gocover.io/) — 用于分析任何 Go 包的覆盖率
  * [goreportcard.com](https://goreportcard.com/) — 为 Go 项目提供代码质量检查，免费开放源代码服务
  * [gtmetrix.com](https://gtmetrix.com/) — 分析并提供优化网站的详尽建议
  * [holistic.dev](https://holistic.dev/) — 专业的PostgreSQL优化静态代码分析工具，性能、安全性和架构问题自动检测
  * [houndci.com](https://houndci.com/) — 对 GitHub 提交的代码评论质量，对开源项目免费
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构工具，提供框架迁移、代码分析和修复，对开源项目免费
  * [reviewable.io](https://reviewable.io/) — 为 GitHub 仓库提供代码审查服务，免费适用于公开或个人仓库
  * [parsers.dev](https://parsers.dev/) - 作为服务提供抽象语法树解析器和中间表示编译器
  * [scan.coverity.com](https://scan.coverity.com/) — 静态代码分析，支持Java、C/C++、C#和JavaScript，对开源免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续审查平台，免费适用于开源项目
  * [semanticdiff.com](https://app.semanticdiff.com/) — 关于GitHub拉取请求和提交的编程语言感知的差异工具，免费公立仓库可用
  * [shields.io](https://shields.io) — 为开源项目提供质量元数据徽标
  * [sonarcloud.io](https://sonarcloud.io) — 自动源代码分析，支持Java、JavaScript、C/C++等语言，对开源免费
  * [SourceLevel](https://sourcelevel.io/) — 自动代码审查和团队分析，开源和最多5名协作者的组织免费
  * [webceo.com](https://www.webceo.com/) — SEO工具，同时提供代码验证和多设备类型检测
  * [zoompf.com](https

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 在32个不同的包管理器中搜索和获取依赖更新的提示，对开源免费
  * [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等众多网站上搜索您的项目名的可用性。
  * [searchcode.com](https://searchcode.com/) — 全面的文本基础代码搜索，开源免费版本可用
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（和其他标记）来识别值得返回进行改进的代码区域。
  * [CodeKeep](https://codekeep.io) - 为代码片段打造的Google Keep。组织、发现并分享代码片段，具有强大的代码截图工具，内置模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## 持续集成与部署(CI/CD)

  * [AccessLint](https://github.com/marketplace/accesslint) — 将自动化Web可访问性测试纳入您的开发工作流程。开源和教育目的免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布商店，加快高效的发布周期。对于每次构建的最大构建时间为30分钟，每月20次构建和1个并发构建是免费的。
  * [appveyor.com](https://www.appveyor.com/) — 专为Windows设计的CI/CD服务，开源项目免费。
  * [Argonaut](https://argonaut.dev/) — 几分钟内在云端部署应用和基础设施。支持在Kubernetes和Lambda环境中部署自定义和第三方应用。免费版提供无限应用程序和部署，针对5个域名和2名用户。
  * [bitrise.io](https://www.bitrise.io/) — 专为移动应用设计的CI/CD，包括原生和混合应用。200次免费构建/月，每次构建10分钟，最多支持两名团队成员。开源项目将享有45分钟构建时间，+1个并发构建和无限团队规模。
  * [buddy.works](https://buddy.works/) — CI/CD服务，5个免费项目和1个并发执行（每月120次执行）。  
  * [Buildkite](https://buildkite.com) — CI管道：3名用户和每月5000分钟的作业时间免费。测试分析的免费开发者版包括每月100,000次测试执行，开源项目会获得更多免费。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。对于20名用户以内和10个数据库实例为免费。
  * [CircleCI](https://circleci.com/) — 免费计划提供所有功能，作为托管的CI/CD服务，适用于GitHub、GitLab和BitBucket仓库。拥有多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试拆分、Docker层缓存等高级CI/CD特性。私有项目中免费提供每月6000分钟执行时间、无限合作者、30个并发任务，并为开源项目提供每月80,000分钟的免费构建时间。
 

  * [Make](https://www.make.com/en) - 工作流自动化工具，允许您通过界面连接应用并自动化工作流程。它支持众多应用和主流API。对公开的GitHub仓库免费，并提供免费层级，包括100 Mb存储、1000个操作和至少15分钟的最小间隔。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码（IaC）管理平台。免费版功能包括：协同IaC、Terraform模块注册、聊天机器人的集成、与Open Policy Agent的持续资源合规、使用SAML 2.0的单点登录和访问公共工作者池（每月最多200分钟）。
  * [microtica.com](https://microtica.com/) - 提供现成基础设施组件的初创环境，免费部署AWS应用，并支持生产负载。免费层级包括1个环境（在您的AWS账号下）、2个Kubernetes服务、每月100分钟构建时间和20个每月部署配额。
  * [Nx Cloud](https://nx.dev/ci) - 用以加快CI上的monorepo速度，功能包括远程缓存、任务跨机器分布，乃至自动化您的端到端测试。有免费计划，适用于最多30个贡献者，包含慷慨的150,000个信用积分。
  * [blacksmith.sh](https://www.blacksmith.sh/) - 无需信用卡即可享用的GitHub Actions管理性能运行器，每月提供3,000分钟免费使用。
  * [Terramate](https://terramate.io/) - 为Terraform、OpenTofu和Terragrunt等IaC工具的编排和管理平台。提供至2个用户全功能的免费版本。

**[⬆️ 返回顶部](#目录)**

## Testing

  * [Applitools.com](https://applitools.com/) — 为Web、Native移动和桌面应用提供智能视觉验证。几乎可以与所有自动化解决方案（如Selenium和Karma）和远程运行器（Sauce Labs、Browser Stack）集成。开源免费，但单用户免费版每周仅限有限的检查点。
* [Appetize](https://appetize.io) — 你可以直接在浏览器上通过这个基于云的Android手机和平板电脑模拟器及iPhone/iPad模拟器测试你的Android和iOS应用。免费版包括两个并发会话，每月30分钟使用时间。对应用大小无限制。
* [Apptim](https://apptim.com) — 一个能帮助不具备性能测试技能的人评估应用性能和用户体验（UX）的移动测试工具。在使用你的设备的桌面版本是完全免费的，iOS和Android平台上的无限制测试。
* [Argos](https://argos-ci.com) — 一个为开发者提供的开源视觉测试工具。无限项目，每月最大5000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) — 持续基准测试工具套件，用于检测CI性能衰退。对所有公开项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动浏览器测试，[开源免费方案](https://www.browserstack.com/open-source?ref=pricing)。
* [BugBug](https://bugbug.io/) - 用于Web应用的轻量级测试自动化工具。易于学习，无需编程。免费版可在自己的电脑上运行无限测试。除了每月费用，你还可获得云监控和CI/CD集成。
* [Checkly](https://checklyhq.com) - 用于现代DevOps的基于代码的合成监控。以传统提供商数分之一的价格监视你的API和应用。由Monitoring as Code工作流和Playwright驱动。开发者免费试用版很慷慨。
* [checkbot.io](https://www.checkbot.io/) — 一个浏览器扩展，检查你的网站是否符合50多个SEO、速度和安全最佳实践。适用于较小网站的免费版。
* [cypress.io](https://www.cypress.io/) — 用于浏览器中的快速、轻松和可靠的测试。Cypress Test Runner始终免费且开源，无限制。Cypress Dashboard对于开源项目最多5名用户免费

  * [knapsackpro.com](https://knapsackpro.com) - 提升测试速度，使用任何CI提供商的最佳测试套件并行化。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费计划支持最多10分钟的测试文件，以及为开源项目提供的无限免费计划。
  * [lambdatest.com](https://www.lambdatest.com/) - 手动、可视化的浏览器测试，包括 selenium 和 cypress，[对开源提供免费支持](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 自动创建API和负载测试，通过分析网络流量分析。每月模拟最多50个并发用户，免费试用期可长达60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 整体视觉回归测试，适用于您的 Storybook、Ladle、Histoire 故事和 Web 应用。无限团队成员，对开源项目完全免费，每月可拍摄7,000张快照。
  * [octomind.dev](https://www.octomind.dev/) - 生成、运行并维护借助AI辅助的 playwright UI 测试。
  * [percy.io](https://percy.io) - 将视觉测试添加到任何网页应用、静态网站、样式指南或组件库。无限团队成员，演示应用和无限项目，每月5,000张快照。
  * [preflight.com](https://preflight.com) - 无需编码的自动化Web测试。在浏览器中录制测试，使其抵抗UI更改并在Windows机器上运行。能与CI/CD集成吗？免费计划包括每月50次测试运行，包括视频、HTML会话等。
  * [qase.io](https://qase.io) - 用于开发和QA团队的测试管理工具。管理测试用例，构建测试运行，执行测试，跟踪缺陷并衡量影响。免费层次包括所有核心功能，500MB可用于附件，最多支持3位用户。
  * [Repeato](https://repeato.app/) - 无需编码的手机应用自动化测试工具，基于计算机视觉和AI构建。支持原生应用、flutter、react-native、web和ionic等众多框架。免费计划有限制iOS和Android各10个

  * [testingbot.com](https://testingbot.com/) — Selenium 浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 提供自动化测试结果发布的平台和GitHub上实施手动测试为代码的框架。该服务适用于[开源开发者免费](https://github.com/marketplace/testspace-com)，并支持每月450个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行测试框架集成。开源软件开发者、个体、教育工作者和小型团队可申请折扣或免费产品，超出基本免费项目之外。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，利用集成工具、组件及设计系统，提高迭代速度、设计质量并简化开发过程。不限项目数，五年的免费维护期。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供各种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成期间使用独特的URL调试和检查webhook或HTTP请求。完全免费，您可以创建无限数量的URL和接收推荐。
  * [webhook.site](https://webhook.site) - 验证webhook、出站HTTP请求或电子邮件，通过自定义URL进行。总是提供临时URL和电子邮件地址，完全免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和电子邮件监控它们。

**[⬆️ 返回顶部](#目录)**

## Security and PKI

  - [aikido.dev](https://www.aikido.dev) — 包罗万象的安全平台，涵盖SCA（依赖性安全检查）、SAST（静态应用安全测试）、CSPM（云安全态势感知）、DAST（动态应用安全测试）、机密信息管理、IaC（基础设施即代码）、恶意软件、容器扫描、过时组件检测等。免费版包含两个用户，10个仓库扫描权限，1个云端环境，2个容器和1个域名扫描。
- [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 协助你发现网络中被攻陷的系统。
- [Altcha.org](https://altcha.org/anti-spam) — 一个使用自然语言处理和机器学习技术的网站和API反垃圾邮件服务。免费版每天允许每个域名200个请求。
- [atomist.com](https://atomist.com/) — 一个更快捷的自动化开发任务的方式，目前在测试阶段。
- [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务（AWS）的安全审计和合规监控工具。
- [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度威胁指示符（IOC）集合。一部分可从GitHub获得（[https://github.com/unknownhad/AWSAttacks]），全文可以通过API获取。
- [CodeNotary.io](https://www.codenotary.io/) — 一个加密存储的开源平台，提供不可篡改的证明来验证代码、文件、目录或容器。
- [crypteron.com](https://www.crypteron.com/) — 开发者友好的云安全平台，防止.NET和Java应用程序中的数据泄露。
- [CyberChef](https://gchq.github.io/CyberChef/) — 一个无需处理复杂工具或编程语言的简单易用的网络应用，用于数据分析和解码/编码。这是一个加密和解密的瑞士军刀。所有功能均免费且无限制。如果你愿意自己托管，它是开源的。
- [DAS](https://signup.styra.com/) — 斯特里亚（Styra）DAS 是用于全生命周期的策略管理工具，用于创建、部署和管理 Open Policy Agent (OPA) 的授权

  * [Internet.nl](https://internet.nl) — 测试现代互联网标准，如IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE
  * [keychest.net](https://keychest.net) — SSL证书过期管理与带有集成CT数据库的证书购买
  * [letsencrypt.org](https://letsencrypt.org/) — 提供所有主要浏览器信任的免费SSL证书颁发机构
  * [meterian.io](https://www.meterian.io/) — 监控Java、JavaScript、.NET、Scala、Ruby和Node.js项目的依赖关系中的安全漏洞。免费提供一个私有项目，开源项目不受限制
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 查找并修复您的网站中的安全漏洞
  * [opswat.com](https://www.opswat.com/) — 对电脑、设备、应用程序、配置进行安全监控，免费提供25用户和30天历史记录服务
  * [openapi.security](https://openapi.security/) — 免费工具，快速检查任何基于OpenAPI/Swagger的API的安全性，无需注册
  * [pixee.ai](https://pixee.ai) — 自动化产品安全工程师，作为GitHub机器人锁定Java代码库，自动解决漏洞，其他语言即将推出
  * [pyup.io](https://pyup.io) — 监控Python依赖的安全漏洞并自动更新。免费提供一个私有项目，开源项目不受限制
  * [qualys.com](https://www.qualys.com/community-edition) — 查找Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — 报告CSP和HPKP违规
  * [ringcaptcha.com](https://ringcaptcha.com/) — 免费工具，可将电话号码用作标识符
  * [seclookup.com](https://www.seclookup.com/) - 提供域威胁指标到SIEM的增强，提供全面的域名信息，提高威胁检测和响应。免费获取50K次查询[在此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 检查并修复开源依赖包中的已知安全漏洞。为开源项目提供无限测试和修复，私有项目有限制为每月200次测试。
  * [ss

  * [Virgil Security](https://virgilsecurity.com/) - 实现端到端加密、数据库保护、物联网安全等功能的工具和服务。适用于最多250个用户的应用是免费的。
  * [Vulert](https://vulert.com) - Vulert会持续扫描你的开源依赖项，查找新的漏洞，推荐修复方法，无需安装或访问你的代码库。开源项目是免费的。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键安全扫描你的GraphQL端点。无需登录，免费使用。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 在公共GitHub存储库、精选片段、问题和评论中的2000万个已曝光秘密中免费搜索。

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 作为服务的细化授权，适用于应用程序和API。免费支持1000个MAU和100个授权者实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 统一单点登录（SSO）、多因素认证（MFA）、无密码认证等功能的无缝集成。提供前端和后端应用的SDK。免费版支持1000个MAU和五个身份提供者。
  * [Auth0](https://auth0.com/) — 宿主机SSO。免费计划包括25,000个MAU，无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 几分钟内在应用中实现无密码、一次性密码（OTP）、双重认证（2FA）和SSO。自带前端组件。免费版支持5000个MAU。
  * [Authress](https://authress.io/) — 登录和访问控制。无限的身份提供者支持任何项目，包括Facebook、Google、Twitter等。前1000个API调用免费。
  * [Authy](https://authy.com) - 多设备的双重验证（2FA），可备份。可替代Google Authenticator。免费提供最多100次成功验证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权及访问控制，免费版支持100个每月活跃用户。
  * [Clerk](https://clerk.com) — 用户管理、身份验证、2FA/MFA，提供现成的UI组件，包括登录、注册、用户资料等。免费版支持10,000个MAU。
  * [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak身份管理和访问管理作为服务。免费版支持100个用户和一个领域。
  * [Corbado](https://www.corbado.com/) — 添加适用于新或现有应用程序的密钥密码认证。无限MAU免费。
  * [Descope](https://www.descope.com/) — 高度定制的认证流程，支持无代码和API/SDK方式。免费版每月活跃用户

  * [Stack Auth](https://stack-auth.com) — 不那么糟糕的开源身份验证。开发者最友好的解决方案，5分钟即可启动。免费提供自托管服务，或提供有偿的托管 SaaS，包含10,000个免费月活跃用户（MAU）。
  * [SuperTokens](https://supertokens.com/) - 与您的应用原生集成的开源用户身份验证，快速启动并控制用户体验。免费版支持5,000个MAU。
  * [Warrant](https://warrant.dev/) — 为您的应用提供的托管企业级授权和访问控制服务。免费版包含1,000,000次每月API请求和1,000条授权规则。
  * [ZITADEL Cloud](https://zitadel.com) — 一体化用户管理和访问管理解决方案，适用于您和B2B场景。免费版支持25,000个已验证请求，配置所有安全功能（没有关于OTP、无密码登录、策略等的付费门槛）。
  * [PropelAuth](https://propelauth.com) — 初始可只需几行代码卖给任何规模的公司，免费版支持200个用户和10,000封事务性电子邮件（带有“由PropelAuth提供支持”的水印）。
  * [Logto](https://logto.io/) - 开发、保护和管理您的产品的用户身份，包括身份验证和授权。免费版支持5,000个MAU，同时提供开源的自托管选项。
  * [WorkOS](https://workos.com/) - 免费用户管理和身份验证，包含1,000,000个MAU的支持。功能包括电子邮件/密码、社交登录、Magic Auth、MFA等。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 你的首选平台，确保你的移动应用正常运行。免费计划：一个应用、分析、无限版本和安装，以及收集反馈。
  * [Loadly](https://loadly.io) - iOS 和 Android 的 beta 应用分发服务提供完全免费的服务，包括无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用部署到设备。免费计划：应用上传、密码保护的链接、1 天过期期、10 次安装。
  * [InstallOnAir](https://www.installonair.com) - 过空分发 iOS 和 Android 应用。免费计划：无限上传、私有链接、访客 2 天过期、注册用户 60 天。
  * [GetUpdraft](https://www.getupdraft.com) - 为测试分发移动应用。免费计划包括一个应用项目、三个应用版本、500 MB 存储和每月 100 次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包含5个应用、每月50次下载，文件最大大小为100MB。

**[⬆️ 返回目录顶端](#目录)**

## 管理系统

  * **[bitnami.com](https://bitnami.com/)：** 在 IaaS 上部署预装配应用。免费提供 1 个 AWS 微型实例的管理。
  * **[Esper](https://esper.io)：** 为 Android 设备提供 MDM 和 MAM。免费提供 1 个用户许可，以及 25 MB 应用程序存储空间，可管理 100 台设备。
  * **[jamf.com](https://www.jamf.com/)：** 对 iPad、iPhone 和 Mac 设备的设备管理，免费提供 3 台设备。
  * **[Miradore](https://miradore.com)：** 设备管理服务。及时了解设备群体并保证设备安全，无限制设备的免费服务。免费计划提供基础功能。
  * **[moss.sh](https://moss.sh)：** 帮助开发者部署和管理他们的 web 应用和服务器。每月最多可免费部署 25 个 git 项目。
  * **[runcloud.io](https://runcloud.io/)：** 主要专注于 PHP 项目的服务器管理。免费提供 1 个服务器。
  * **[ploi.io](https://ploi.io/)：** 管理和部署服务器及站点的服务器管理工具。免费提供一个服务器的管理服务。

**[⬆️ 返回顶部](#目录)**

## 消息与流传输

  * [Ably](https://www.ably.com/) - 提供实时消息服务，带有存在感、持久性和保证交付。免费计划包括每月300万消息、100个并发连接和100个频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ 服务。Lemur 计划：每月最大100万消息、并发连接20个、最多100个队列、队列中最多1万个消息，可在不同 AZ 中多个节点部署。
  * [courier.com](https://www.courier.com/) — 为开发者提供一键推送、应用内、电子邮件、即时通讯、短信等多个渠道的通知基础设施，附带模板管理和更多功能。免费计划包含每月1万消息。
  * [engagespot.co](https://engagespot.co/) — 多渠道开发者通知基础设施，预建了应用内收件箱和无代码模板编辑器。免费计划包括每月1万消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的MQTT 设备连接到托管的云 IoT 消息代理。免费配置可达100个设备（无需信用卡）。
  * [knock.app](https://knock.app) — 专为开发者设计的通知基础设施，一条API可用于多个通道：应用内、邮件、短信、Slack 和推送。免费计划每月1万条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟内在任何软件中添加用户通知。免费计划包括每月1万次通知和100条短信以及自动电话。
  * [Novu.co](https://novu.co) — 开源开发者通知基础设施。简单组件和统一管理电子邮件、短信、直接消息、应用内及推送等通信通道。免费计划支持每月3万条通知，90日数据保留。
  * [pusher.com](https://pusher.com/) — 实时消息服务。最多支持100个并发连接和每日20万消息。
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费提供20个并发连接和每日10万事件。
  * [synadia.com](https://synadia.com/ngs) — 由 NATS.io 提供的服务。全球部署

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) - 每天免费存储高达100,000条日志，保留时间为24小时
  * [logentries.com](https://logentries.com/) - 免费版每月提供5GB存储，保留时间为7天
  * [loggly.com](https://www.loggly.com/) - 单个用户免费，每天200MB，保留时间为7天
  * [logz.io](https://logz.io/) - 免费提供每天1GB的存储，保留时间为1天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - 由Manage Engine提供支持的日志管理服务。免费计划提供50GB存储，15天存储保留和7天搜索功能。
  * [papertrailapp.com](https://papertrailapp.com/) - 提供48小时搜索，7天归档，每月50MB存储空间
  * [sematext.com](https://sematext.com/logsene) - 免费提供每天500MB存储，保留时间为7天
  * [sumologic.com](https://www.sumologic.com/) - 免费每天提供500MB存储，保留时间为7天
  * [logflare.app](https://logflare.app/) - 为每个应用每月提供高达12,960,000条条目的免费，保留时间为3天
  * [logtail.com](https://logtail.com/) - 基于ClickHouse的SQL兼容日志管理系统。免费每月提供1GB存储，保留时间为3天
  * [logzab.com](https://logzab.com/) - 审计跟踪管理系统。免费每月提供对1,000条用户活动日志的访问，保留时间为1个月，最多5个项目
  * [openobserve.ai](https://openobserve.ai/) - 200GB/月免费读取，15天保存期限

**[回到顶部](#内容列表)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 提供无限项目、无限字符串和开源协作的无限可能
  * [gitlocalize.com](https://gitlocalize.com) — 免费且不限制私有和公共仓库使用
  * [Lecto](https://lecto.ai/) — 提供机器翻译API，免费版（30次免费请求，每请求1000个字符）。与Loco Translate WordPress插件集成
  * [lingohub.com](https://lingohub.com/) — 免费版本支持3名用户，开源项目永远免费
  * [localazy.com](https://localazy.com) — 前1000个源语言字符串免费，不限语言、贡献者，初创公司和开源项目有优惠
  * [Localeum](https://localeum.com) — 免费版支持1000个字符串，一个用户，不限语言、项目
  * [localizely.com](https://localizely.com/) — 全开源项目免费
  * [Loco](https://localise.biz/) — 免费赠送2000次翻译，无限译者，每项目最多10种语言，1000个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限制的免费版本可供5个用户使用，并且开源项目免费
  * [POEditor](https://poeditor.com/) — 免费版本最多支持1000个字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费版包含100个翻译键，无限字符串、无限语言和创业公司优惠
  * [Texterify](https://texterify.com/) - 单个用户免费
  * [Tolgee](https://tolgee.io) - 提供免费SaaS版，有限的翻译功能，完全免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 全开源项目免费
  * [Translation.io](https://translation.io) - 全开源项目免费
  * [Translized](https://translized.com) - 免费版1000个字符串，一个用户，不限语言、项目
  * [webtranslateit.com](https://webtranslate

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) - 免费提供20个以5分钟间隔的监控器和自定义状态页面，包括商业用途。你可以通过电子邮件和Telegram获得无限制的实时通知。开始使用无需信用卡。
  * [Pingmeter.com](https://pingmeter.com/) - 提供5个间隔10分钟的监控，可以监控SSH、HTTP、HTTPS，以及自定义TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 免费提供应用性能管理和监控，包括FE、BE、DB等，并且有免费运行的代理服务。
  * [appdynamics.com](https://www.appdynamics.com/) — 免费版提供24小时指标，应用性能管理代理限于一个Java、一个.NET、一个PHP和一个Node.js。
  * [appneta.com](https://www.appneta.com/) — 免费使用，保留数据长达1小时。
  * [appspector.com](https://appspector.com/) - 针对远程iOS/Android/Flutter调试的控制中心。小型流量使用（64MB日志）是免费的。
  * [assertible.com](https://assertible.com) - 自动化API测试和监控，团队和个人免费计划。
  * [bleemeo.com](https://bleemeo.com) - 免费版包含3个服务器、5个监控器、无限用户、无限仪表板和规则。
  * [checklyhq.com](https://checklyhq.com) - 开源全端到端/合成监控以及深度API监控。免费版包含5个用户和5万次运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控。免费版提供无限告警扫描、无限用户和存储账户。订阅版提供自动化扫描、API访问等。
  * [cronitor.io](https://cronitor.io/) - 对于Cron作业、网站、API等提供性能洞察和监控。免费版包含5个监控器。
  * [datadoghq.com](https://www.datadoghq.com/) — 免费版适用于5个节点以内的服务。
  * [deadmanssnitch.com](https://deadmansnitch.com/) — 监控Cron任务。一个免费监控器，通过推荐他人注册还可增加。


  * [keychest.net/speedtest](https://keychest.net/speedtest) - 进行独立的网络速度测试和针对DigitalOcean的TLS握手延迟测试。
  * [letsmonitor.org](https://letsmonitor.org) - 提供SSL监控，对于最多5个监控是免费的。
  * [linkok.com](https://linkok.com) - 是一个在线的死链检查工具，对于小网站（最多100页）完全免费。对于开源项目也是完全免费的。
  * [loader.io](https://loader.io/) - 提供免费的负载测试工具但有使用限制。
  * [netdata.cloud](https://www.netdata.cloud/) - 开源的实时监控工具，产品仍在发展中，可以在GitHub上找到。
  * [newrelic.com](https://www.newrelic.com) - New Relic的可观测性平台，旨在协助工程师打造更完美的软件。支持从单体到无服务器架构的全面监控。免费层级包含每月100GB的数据摄入、一个免费的全功能用户以及无限的免费主要用户。
  * [Middleware.io](https://middleware.io/) - middeware的可观测性平台提供全面的多应用程序和堆栈监控，让你能够进行大规模的监控和诊断。针对开发人员的免费计划提供日志监控（最多100万条事件）、基础设施监控及APM（最多2个主机）。
  * [nixstats.com](https://nixstats.com) - 对一个服务器提供免费服务。包括电子邮件通知、公共状态页面、每60秒更新一次，等等。
  * [OnlineOrNot.com](https://onlineornot.com/) - 监控网站、API的可用性，以及定时任务和cron作业。提供状态页面，前五个检查免费，每三分钟间隔一次。免费版通过Slack、Discord、电子邮件发送警报。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) - 检查网站是否因中国的防火墙受到限制。通过比较在中国和美国服务器上检测到的DNS结果和ASN信息，识别DNS污染。
  * [opsgenie.com](https://www.opsgenie.com/) - 强大的告警和故障处理管理工具，用于确保服务始终在线。免费用户最多5个。
  * [paessler.com](https://www.paessler

  * [sematext.com](https://sematext.com/) — 提供24小时指标的免费服务，无限服务器配额，10个自定义指标，50万自定义指标数据点，无限仪表板、用户等。
  * [sitemonki.com](https://sitemonki.com/) — 提供网站、域名、Cron及SSL监控，前5个类别是免费的。
  * [sitesure.net](https://sitesure.net) - 提供网站和Cron监控，免费配额为2个。
  * [skylight.io](https://www.skylight.io/) — 针对Rails应用的免费服务，100,000个请求以内。
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查 Ping、DNS 等。
  * [stathat.com](https://www.stathat.com/) — 可以免费开始使用10个统计指标，无过期限制。
  * [statuscake.com](https://www.statuscake.com/) — 提供网站监控，无限测试也是免费的，但有限制。
  * [statusgator.com](https://statusgator.com/) — 网站状态页监控，免费配额为3个监控。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 提供服务器、运行时监控、DNS及域名监控。免费版可同时监控10个服务器、10个运行状态和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 测试网络和用户体验。免费版包含3个地点和20个主要网络服务的数据源。
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，免费配额为50个监控。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 5个网站的免费监控，间隔60秒，公开状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 提供网络运营、站点可靠性工程和DevOps团队需的全面问题管理、警报、当班管理和响应调度平台。免费版最多支持5个用户。
  * [instatus.com](https://instatus.com) - 

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供屏幕截图和点击轨迹的 JavaScript 错误跟踪。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) - 首次试用后，每月最多2,000个错误免费。
  * [elmah.io](https://elmah.io/) - 为Web开发者提供错误日志和运行状况监控。开源项目提供小型企业版免费订阅。
  * [Embrace](https://embrace.io/) - 移动应用监控。小型团队支持每年最多100万用户会话免费。
  * [exceptionless](https://exceptionless.com) - 实时错误、特性、日志报告等。每月3k事件/1用户免费，开源且易于自托管以获得无限使用。
  * [GlitchTip](https://glitchtip.com/) - 简单的开源错误跟踪。免费提供每月1,000事件，可自托管不限制。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行状况和cron监控。小团队及开源项目（每月12,000个错误）免费。
  * [memfault.com](https://memfault.com) - 云设备观察和调试平台。Nordic、NXP和Laird设备有100台设备免费。
  * [rollbar.com](https://rollbar.com/) - 异常和错误监控，免费计划每月限5,000个错误，不限用户，30天保留。
  * [sentry.io](https://sentry.io/) - Sentry实时跟踪应用异常。5k错误/1用户每月免费，自托管无限制。
  * [Axiom](https://axiom.co/) - 存储最多0.5 TB的日志，保留30天。包含与Vercel等平台的集成，以及高级数据查询以及电子邮件/Discord通知。
  * [Semaphr](https://semaphr.com) - 移动应用的全功能终止开关，免费。
  * [Jam](https://jam.dev) - 一键式开发者友好的错误报告。免费版提供无限错误。
  * [Whitespace](https://whitespace.dev) - 直接在浏览器中进行单击的错误报告。

## Search

  * [algolia.com](https://www.algolia.com/) — 提供带有拼写容忍度、相关性以及UI库的托管搜索解决方案，轻松创建搜索体验。免费的“构建”计划包含100万文档和每月1万个搜索。它还提供免费的[开发文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费提供1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) — 作为服务的统一搜索栏，基于Web的UI组件/插件，帮助用户搜索您的产品的内容、导航、功能等，提高可发现性。对于每月活跃用户（MAU）不超过1,000个的免费，命令不限制数量。
  * [Magny](https://magny.io) — 作为服务（SaaS）来帮助实施命令面板（如应用程序内搜索），通过提升用户体验和效率，显著减少用户在应用程序中查找任何内容的时间。
  * [Orama Cloud](https://orama.com/pricing) — 免费提供3个索引、100,000个文档/索引、无限的全文本/向量/混合搜索，以及60天的分析数据。
  * [searchly.com](http://www.searchly.com/) — 免费提供2个索引和20MB存储空间。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreecodeCamp](https://www.freecodecamp.org/) - 提供免费课程和认证的开源平台，涵盖数据分析、信息安全、Web开发等多个领域。
  * [The Odin Project](https://www.theodinproject.com/) - 免费的开源平台，课程以JavaScript和Ruby为主，针对Web开发。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量免费的专业简历模板，可直接克隆、编辑并下载，经过ATS优化。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 来自行业领导者的免费短课，只需一小时左右，就能了解最新的生成AI工具和技术。
  * [LabEx](https://labex.io) - 通过互动实验室和实际项目，培养你在Linux、DevOps、网络安全、编程和数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 提供涵盖开发各个方面（如区块链到UX设计）的学习路径。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费认证课程，如网络安全、网络技术和Python。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - 免费公开麻省理工学院超过2500门课程的资料，与全球的学习者和教育者分享知识。视频频道查看地址：[@mitocw](https://www.youtube.com/@mitocw/featured)
  * [W3Schools](https://www.w3schools.com/) - 提供免费教程，讲解HTML、CSS、JavaScript等Web开发技术。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费在线学习资源，适合学习基本和高级的HTML/CSS、JavaScript以及SQL。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  以下是为测试提供的免费临时邮箱服务：

1. [10minutemail](https://10minutemail.com) - 提供免费的临时邮箱。
2. [AhaSend](https://ahasend.com) - 交易性电子邮件服务，每月免费1000封邮件，不限域名、团队成员、Webhook和消息路由。
3. [AnonAddy](https://anonaddy.com) - 开源匿名邮箱转发，可免费创建无限电子邮件别名。
4. [Antideo](https://www.antideo.com) - 免费版提供每小时10次邮件验证、IP和电话号码验证API请求，无需信用卡。
5. [Brevo](https://www.brevo.com/) - 免费每月9000封邮件，每天300封。
6. [OneSignal](https://onesignal.com/) - 免费月度10000封邮件，无需信用卡。
7. [Bump](https://bump.email/) - 免费10个Bump电子邮件地址，一个定制域名。
8. [Burnermail](https://burnermail.io/) - 免费5个 Burner电子邮箱地址、1个邮箱、7天邮件历史记录。
9. [Buttondown](https://buttondown.email/) - 新闻简报服务，免费至100个订阅者。
10. [CloudMailin](https://www.cloudmailin.com/) - 免费通过HTTP POST接收邮件、提供交易性传出邮箱，每月10000封免费邮件。
11. [Contact.do](https://contact.do/) - 在链接中提供联系表单（Bitly用于联系表单）。
12. [debugmail.io](https://debugmail.io/) - 一种方便开发者使用的测试邮件服务器。
13. [DNSExit](https://dnsexit.com/) - 对于免费域名，可获得2个电子邮箱地址和100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM。
14. [EmailLabs.io](https://emaillabs.io/en) - 每月免费发送9000封邮件，每日可达300封。
15. [EmailOctopus](https://emailoctopus.com) - 最多2500个订阅者和每月10000封

  * [ImprovMX](https://improvmx.com) – 免费邮箱转发。
  * [EForw](https://www.eforw.com) – 可在您的域名下接收和发送邮件的免费邮箱转发服务。
  * [Inboxes App](https://inboxesapp.com) — 通过Chrome扩展，每天最多创建3个临时邮箱，完成之后即可删除。适用于测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时或一次性邮箱，可保留至3天。开源并可自托管。
  * [mail-tester.com](https://www.mail-tester.com) — 检查电子邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月免费20次。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 免费服务，由roundsphere.com提供，检查电子邮件的DNS/SPF/DKIM/DMARC设置。
  * [mailcatcher.me](https://mailcatcher.me/) — 捕捉邮件并通过Web界面提供查看。
  * [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成，用于电子邮件API，每月免费3,000封邮件。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每月120次请求（约86,400/月）。
  * [Mailchimp](https://mailchimp.com/) — 免费使用，限制500订阅者和1,000封每月邮件。
  * [Maildroppa](https://maildroppa.com) - 免费提供100个订阅者和无限封邮件，以及自动化功能。
  * [MailerLite.com](https://www.mailerlite.com) — 免费提供每月1,000个订阅者和12,000封邮件。
  * [MailerSend.com](https://www.mailersend.com) – 交易邮件免费提供3,000封每月邮件（每天200封发送限制）。
  * [mailinator.com](https://www.mailinator.com/) – 免费、公开的邮箱系统，您可以使用任何想用的邮箱。
  * [Mailjet](https://www.mailjet.com

  * [QuickEmailVerification](https://quickemailverification.com) - 免费帐户可每天验证100封邮件，同时还提供其他免费功能，如DEA探测器、DNS查询、SPF探测器等。
  * [Resend](https://resend.com) - 开发人员用的事务性电子邮件API。每月3,000封邮件，每日免费100封，支持一个自定义域名。
  * [Sender](https://www.sender.net) - 月度上限15,000封邮件，订阅者上限2,500人。
  * [SendGrid](https://sendgrid.com/) - 提供每月100封邮件和2,000个联系人的免费版。
  * [Sendpulse](https://sendpulse.com) - 免费版每月限制500名订阅者、15,000封邮件。
  * [SimpleLogin](https://simplelogin.io/) - 开源的自助托管电子邮件别名/转发解决方案。免费．5别名，无限带宽，无限制的发送和回复服务。教育工作者（学生、研究者等）免费。
  * [Substack](https://substack.com) - 免费的无限版邮件服务。开始收费后付款使用。
  * [Sweego](https://www.sweego.io/) - 专为开发者设计的欧洲事务性电子邮件API。每日免费发送500封邮件。
  * [Takeout](https://takeout.bysourfruit.com) - 不断更新的邮件服务，简化发送过程。每月免费500条事务邮件。
  * [temp-mail.io](https://temp-mail.io) - 提供一次性临时电子邮件服务，支持一次多封邮件和转发功能。
  * [tinyletter.com](https://tinyletter.com/) - 免费版每月支持5,000名订阅者。
  * [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包括线索管理、表单构建和自动化。有限的线索和自动化免费。
  * [trashmail.com](https://www.trashmail.com) - 提供一次性电子邮件地址并自动过期，推送邮件和转发服务。
  * [Tuta](https://tuta.com/) - 提供免费帐户的电子邮件服务，内置端到端加密

     - [Vault](https://zoho.com/vault) — 密码管理适用于个人。
     - [Showtime](https://zoho.com/showtime) — 一款适用于远程会议培训的另外一种会议软件，最多支持5个参会者。
     - [Notebook](https://zoho.com/notebook) — 一个免费的笔记应用，替代Evernote。
     - [Wiki](https://zoho.com/wiki) — 免费用于三名用户，50 MB存储空间，无限页面，zip备份，RSS和Atom馈源，访问控制和自定义CSS。
     - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，免费包含20个客户/订阅和1个用户，支付托管由Zoho处理。最后40个订阅指标会被存储。
     - [Checkout](https://zoho.com/checkout) — 产品计费管理，包括3个页面和最多50笔支付。
     - [Desk](https://zoho.com/desk) — 客户支持管理，包含三个代理人，私有知识库以及电子邮件工单。它与[Zoho Assist](https://zoho.com/assist)集成，支持一位远程技术员和5台无需管理的电脑。
     - [Cliq](https://zoho.com/cliq) — 团队聊天软件，含100 GB存储空间，不限用户，每个频道最多100名用户，并支持SSO。
     - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
     - [Forms](https://zoho.com/forms) - 表单创建器
     - [Sign](https://zoho.com/sign) — 纸质签名
     - [Surveys](https://zoho.com/surveys) - 在线调查
     - [Bookings](https://zoho.com/bookings) - 预约安排
  * [Maileroo](https://maileroo.com) - SMTP中继和为开发者提供的电子邮件API。每月可发送5000封邮件，无限域名，免费电子邮件验证，黑名单监控，邮件测试器等功能。  

**[⬆️ 返回顶部](#目录)**

## 特性开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat是一个以开发者为中心的特性开关服务，提供无限团队大小、优秀支持和合理的价格标签。免费计划支持10个标志、两个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 确保有把握地发布特性；管理跨网页、移动和服务器端应用的特性开关。使用我们的托管API、部署到私人云，或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源特性开关和A/B测试服务，内置贝叶斯统计分析引擎。免费版提供给3个用户，无限的特性开关和试验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的特性开关、A/B测试、分析和应用程序配置，具备Git风格的版本控制以及本机内存、即时的本地开关评估。免费版支持5个团队成员，且无限特性开关和A/B测试。
  * [Molasses](https://www.molasses.app) - 功能强大的特性开关和A/B测试。免费计划可支持3个环境，每个环境五个性质开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域特性开关管理平台。免费版支持10个开关、两个环境和无限制的请求。包含了SDK、分析仪表板、发布日历、Slack通知等其他所有功能。无限免费计划可用。
  * [Statsig](https://www.statsig.com) - 强大用于特性和A/B测试、分析等功能的平台。其慷慨的免费版提供无限用户、标志、试验和动态配置，支持每月100万次事件。
  * [Abby](https://www.tryabby.com) - 开源的特性开关与A/B测试，配置为代码及完全类型化的TypeScript SDK。与Next.js和React等框架配合良好。免费层级充裕且价格合理，适合从容扩展。

## 字体

  * [dafont](https://www.dafont.com/) - 这个网站上的字体是作者的财产，可以是免费软件、共享软件、演示版或公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，如@font-face、单位转换器、字体呈现器和字体提交器。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供许可适合商业用途的免费字体，精心挑选了这些字体并以用户友好的格式展示。
  * [Google Fonts](https://fonts.google.com/) - 许多字体可以方便快速地通过下载或链接到Google的CDN安装到网站上。
  * [FontGet](https://www.fontget.com/) - 提供多种字体下载，根据标签整理得井井有条。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务，不断增长的专业级字体库，个人和商业使用完全免费。
  * [Befonts](https://befonts.com/) - 提供几种独特的字体，可供个人或商业用途。
  * [Font of web](https://fontofweb.com/) - 检测网站上的所有字体及其用法。
  * [Bunny](https://fonts.bunny.net) - 一款注重隐私的Google字体。
  * [FontsKey](https://www.fontskey.com/) - 提供个人使用免费和商业付费字体，可输入文本进行快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) - 免费且开源的为网站提供字体系列的CSS服务。
  * [Fontsensei](https://fontsensei.com/) - 用户自定义标记的开源Google字体，包含CJK（中文、日文、韩文）字体标签。

**回到顶部**\[⬆️\]

## 表单处理

  * [Feathery](https://feathery.io) - 能力强大且易于开发人员使用的表单构建工具。你可以创建注册和登录表单、用户引导流程、付款流、复杂的财务应用程序等。免费计划允许每月250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。具有垃圾邮件过滤器、电子邮件通知和自动响应、Webhook、Zapier、重定向、AJAX或POST等功能。免费计划为无限表单、每月20次提交，以及带有Form-Data徽章的额外2000次提交。
  * [FabForm](https://fabform.io/) - 针对聪明开发者设计的表单后端平台。免费计划允许每月250次表单提交。拥有现代化的用户界面和友好的功能。与Google Sheets、Airtable、Slack、电子邮件等广泛集成。
  * [Form.taxi](https://form.taxi/) - 用于接收HTML表单提交的端点。提供通知、垃圾邮件拦截和符合GDPR的数据处理功能。基础用法有免费计划。
  * [Formcarry.com](https://formcarry.com) - 提供HTTP POST表单端点，免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/) - 专注于静态网站的简单HTML表单。无需注册即可开始使用，免费计划每月允许500次提交和自定义回复电子邮件。
  * [FormKeep.com](https://www.formkeep.com/) - 无限制的表单，每月50次提交，提供垃圾邮件保护、电子邮件通知及拖拽式设计工具（支持HTML导出）。额外功能包括自定义字段规则、团队协作，以及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
  * [formlets.com](https://formlets.com/) - 在线表单，不限单个页面表单/月，每月100次提交，支持电子邮件通知。
  * [formspark.io](https://formspark.io/) - 将表单转换为电子邮件的服务，免费计划允许无限数量的表单和每月250次提交，客服团队提供支持。
  * [Formspree.io](https://formspree.io/) - 使用HTTP POST请求发送电子邮件。

  * [Pageclip](https://pageclip.co/) - 免费版提供一个站点、一个表单和每月1000个提交量。
  * [Qualtrics Survey](https://qualtrics.com/free-account) - 使用此一流工具创建专业的表单和调查。有50多种专家设计的调查模板。免费账户有限制，包括一个活动调查、每调查100个回应和8种回应类型。
  * [Screeb](https://screeb.app/) - 在应用内进行调查和产品分析，理解用户行为。无限期的免费版提供500每月活跃用户、无限回应和事件、多个集成、导出功能和定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 强大且易于使用的网站表单后端，免费版允许每月50个提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义重定向、自定义回应页面、Telegram和Slack机器人，以及单次邮件通知。
  * [Survicate](https://survicate.com/) - 从所有来源获取反馈，并使用同一工具发送跟进调查。自动分析反馈并使用AI提取洞察。免费提供电子邮件、网站、产品、移动端调查服务，以及每月25次回应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 轻松在不写服务器端代码的情况下集成HTML表单，用户提交表单后，邮箱会收到含表单内容的邮件。
  * [stepFORM.io](https://stepform.io) - 问卷和表单构建工具。免费版提供5个表单、每表单最多3步和每月50个回应。
  * [Typeform.com](https://www.typeform.com/) - 在网站上嵌入美观的表单。免费版仅限每个表单10个字段，每月100个回应。
  * [WaiverStevie.com](https://waiverstevie.com) - 提供REST API的电子签名平台，可接收Webhook通知。免费版水印已签文件，但不限制信封和签名。
  * [Web3Forms](https://web3forms.com) - 为静态和JAMStack网站提供的联系表单，无需编写后端代码。免费版允许无限表单、无限域名和每月

  - [feedback.fish](https://feedback.fish/) - 免费版本最多收集25条反馈。轻松集成React和Vue组件。

**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。只需两行代码，即可调用200多个LLM。每月免费请求额度为10,000次，平台功能免费！
  * [Portkey](https://portkey.ai/) - 为Gen AI应用打造的控制面板，包含观测套件和AI网关。每月免费提供10,000次发送记录。
  * [Braintrust](https://www.braintrustdata.com/) - 提供评估、提示游乐场和Gen AI数据管理的工具。免费版最多支持每周1,000行私人评估。
  * [Findr](https://www.usefindr.com/) - 能够同时搜索所有应用的通用搜索工具。具备问答功能的搜索引擎助手。免费版提供无限统一搜索和5个每日共乘副驾驶查询。
  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。整个平台免费，只要您提供自己的API密钥即可使用。
  * [Clair](https://askclair.ai/) - 临床AI参考工具。学生免费使用专业工具集，包含开放搜索、临床摘要、药物审查、药物相互作用、ICD-10编码和 stewardship。提供专业工具集的免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估与LLM应用性能相关的提示、数据和问题。提供适用于任何LLM的开放标准日志，便于观测。免费版提供每月50,000个跟踪。
  * [Ultra AI](https://ultraai.app) - 产品AI指令中心，功能包括多提供商AI网关、提示管理、缓存、日志、分析和模型降级。永久免费版提供每月10,000+请求，除缓存外包含所有功能。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产周期中评估、测试并部署LLM应用的工具。
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析并迭代他们的LLM应用。免费版每月包含50,000次观察，所有平台功能均免费。[开源](https://github.com/langfuse/langfuse)


## 内容分发网络和防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 为bootstrap, bootswatch和fontawesome.io提供的CDN服务
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速和可靠的内容分发服务。cdnjs是一个免费开源服务，由Cloudflare提供支持，已被11%以上的网站所信任。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管的库是一个内容分发网络，提供了最受欢迎的开源JavaScript库
  * [stellate.co/](https://stellate.co/) — Stellate是一个快速、可靠的服务，用于托管GraphQL API，并且对前两个服务免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速和可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了流行第三方JavaScript库，如jQuery，使您能够轻松在Web应用中添加它们。
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 提供免费DDoS防护和SSL证书
  * [Skypack](https://www.skypack.dev/) — 100%纯ES模块JavaScript的CDN。对一个域名每月100万次请求免费。
  * [raw.githack.com](https://raw.githack.com/) — 对于Cloudflare来说，提供了一个现代化的替代版本，用于直接托管文件
  * [section.io](https://www.section.io/) — 一个简单的方法来启动和管理完整的Varnish缓存解决方案。据说一个网站永远免费
  * [statically.io](https://statically.io/) — CDN用于Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资产和图片
  * [toranproxy.com](https://toranproxy.com/) — 代理Packagist和GitHub。免费用于个人使用，单开发者，无支持
  * [UNPKG](https://unpkg.com/) — CDN用于npm上的所有内容
  * [weserv](https://images.weserv.nl/) — 一个全球的图片缓存和缩放服务。在动态操控全球缓存下的图片。
  * [Namecheap Supersonic](https://www.namecheap.com/sup

## 平台即服务(PaaS)

  * [anvil.works](https://anvil.works) - 使用Python构建Web应用。免费版提供无限应用数量和30秒超时。
  * [appwrite](https://appwrite.io) - 免费版提供无限项目，无项目暂停限制，支持Websocket，包括1个数据库、3个存储桶和每个项目5个函数。
  * [configure.it](https://www.configure.it/) - 移动应用开发平台，支持两个项目，功能有限但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 针对Java/Kotlin开发者的跨平台移动应用开发工具，商业用途免费，不限项目数量。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，提供可视化CMS，自动生成于TypeScript代码，内置A/B测试等功能。免费版限5,000每月页面浏览量，个人或开源项目适用。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，在全球边缘运行JavaScript、TypeScript和WebAssembly。免费版包括每天100,000请求和每月100 GiB数据传输。
  * [domcloud.co](https://domcloud.co) - Linux主机，提供CI/CD功能，支持GitHub、SSH和MariaDB/Postgres数据库。免费版限1 GB存储和1 GB网络/月，只能用于免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析提供自动基础设施、无模板代码等，免费云托管适用于爱好项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在用户自己AWS账户上部署服务、数据库等，基于Git推送到AWS。个人GitHub仓库用户有免费版，AWS费用按AWS计费，可使用折扣和免费服务。
  * [gigalixir.com](https://gigalixir.com/) - 提供永不睡眠的免费实例和2个连接、10,000行数据的免费PostgreSQL数据库，用于部署Elixir/Phoenix应用。
  * [Glitch](https://glitch.com/) - 免费公共托管，支持代码共享和实时协作。免费计划每月限1,000小时。
  * [Lade](https://www.lade.io/) -

  * [Napkin](https://www.napkin.io/) - 提供函数即服务（FaaS） ，内存限制为500MB，默认超时时间为15秒，每月包含5,000个免费API调用，速率限制为每秒5次。
  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy 服务。 Meteor为Meteor应用提供的云平台包括免费的MongoDB共享托管和自动SSL。
  * [Northflank](https://northflank.com) — 构建、部署微服务、工作流程和托管数据库。它提供了强大的用户界面、API和命令行接口。无缝扩展从版本控制和外部Docker注册表的容器，并且免费版包括两个服务、两个定时任务和一个数据库。
  * [YepCode](https://yepcode.io) - 一体化平台，用于在无代码环境中连接API和服务。它结合了无代码工具的敏捷性和使用编程语言的能力。免费版包含[1,000个yeps](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，可快速构建、部署并管理现代API。包括内置CI/CD、GitHub集成和自动HTTPS。免费计划提供3个项目、1GB的出口带宽和每月300分钟的构建时间[免费计划](https://wundergraph.com/pricing)。
  * [Zeabur](https://zeabur.com) - 一键部署服务。免费版支持三个服务，每月免费5美元信用金额。
  * [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建、部署和运行服务。免费版支持与mogenius连接本地Kubernetes，允许开发人员在自己的机器上创建生产级测试环境。
  * [genezio](https://genezio.com/) - 提供无服务器函数服务，免费版每月包含1百万个函数调用、100GB带宽和10个定时任务，专为非商业或学术用途设计。

**[回到顶部](#目录)**

## 后端即服务(BaaS)

  * [Activepieces](https://www.activepieces.com) - 创建自动化流程, 将多个应用程序连接到应用后端。例如, 当在您的应用中触发事件时发送Slack消息或向Google表格添加一行。每月最多免费5000个任务。
  * [back4app.com](https://www.back4app.com) - back4app是一个易用的、灵活的和可扩展的基于 Parse 平台的后端。
  * [backendless.com](https://backendless.com/) - 提供移动和 web 背景色服务, 免费包含1GB文件存储、每月5万次推送通知和1000个数据对象表。
  * [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI会在我们的函数运行时和托管存储上为您的Python API搭建并在线编辑器中免费构建和托管,或者用您喜欢的工具本地部署。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供构建和部署企业数字化创新的文档和资源。可以访问包含平台、SDK和用于构建和定制应用的组件的完整个人开发箱。
  * [connectycube.com](https://connectycube.com) - 无限量聊天消息、一对一音频/视频通话、文件附加和推送通知。对于1000用户以下的应用是免费的。
  * [convex.dev](https://convex.dev/) - 实时后端服务,托管您的数据(有关系的文档和可序列化的ACID事务)、无服务器函数和WebSocket以流式更新到不同客户端。小型项目免费,包括最多100万记录和每月500万函数调用。
  * [darklang.com](https://darklang.com/) - 集合编辑器和基础设施的托管语言环境。在内部测试期间可访问,后续测试后会提供慷慨的免费层次。
  * [Firebase](https://firebase.com) - Firebase助您成功构建和运行应用。Spark免费计划提供Auth、Hosting、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、应用索引、云消息(FCM)、崩溃日志、动态链接、内送到消息、性能监控、预测和远程配置始终是免费的。


  以下是提供的一些免费或有限制的推送通知服务以及开发平台，供您参考：

1. [PubNub](https://www.pubnub.com/) — 免费服务适用于每月100万条消息和100个每日活跃设备。
2. [Pushbots](https://pushbots.com/) — 推送通知服务，免费额度为每月150万次推送。
3. [Pushcrew](https://pushcrew.com/) — 提供无限通知的推送服务，适用于至多2,000个订阅者。
4. [Pusher](https://pusher.com/beams) — 免费且无限的推送服务，针对每月2,000名活跃用户，支持iOS和Android设备的单个API。
5. [Quickblox](https://quickblox.com/) — 提供即时消息、视频和语音通话、推送通知的通信后端。
6. [Restspace.io](https://restspace.io/) — 用于配置服务器，支持身份验证、数据、文件、邮件API、模板等功能，可进行数据处理。
7. [Salesforce Developer Program](https://developer.salesforce.com/signup) — 通过拖放工具快速构建应用，自定义数据模型，使用Apex代码，通过强大的API进行集成。免费开发者计划可访问完整云平台。
8. [ServiceNow Developer Program](https://developer.servicenow.com/) — 快速构建、测试和部署应用程序，免费提供实例和早期预览功能。
9. [Simperium](https://simperium.com/) — 实时数据同步，跨平台支持，最多2,500个用户/月，提供结构化数据的发送和存储。
10. [Singlebase.cloud](https://singlebase.cloud) — AI驱动的全能后端平台，提供Vector DB、关系型文档DB、Auth、Search和Storage等功能。免费/起步计划包含关系型文档DB、Auth、Search和Storage。
11. [Stackstorm](https://stackstorm.com/) — 针对应用、服务和工作流程的事件驱动自动化，免费版不包含flow、访问控制和LDAP。
12. [Streamdata.io](https://streamdata.io/) — 变换任何REST API为事件驱动流API。免费计划支持100万条消息和10个并发连接。
13. [Supabase](

## 低代码平台

  * **[Clappia](https://www.clappia.com)** — 一款专为构建具有可定制网络和移动应用程序的业务流程应用而设计的低代码平台。它提供了拖放界面、离线支持、实时位置追踪和与第三方服务的集成。
  * **[Basedash](https://www.basedash.com)** — 用于构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
  * **[BudiBase](https://budibase.com/)** — Budibase是一个开源的低代码平台，可在几分钟内创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
  * **[appsmith](https://www.appsmith.com/)** — 用于构建管理面板、内部工具和仪表板的低代码项目。集成15+数据库和任何API。
  * **[ToolJet](https://www.tooljet.com/)** — 一个可扩展的低代码框架，用于构建业务应用。它与数据库、云存储、GraphQL、API端点、Airtable等连接，并使用拖放应用程序构建器。
  * **[ReTool](https://retool.com/)** — 为内部应用程序开发的低代码平台。Retool高度可定制。如果能用JavaScript和API编写，可以在Retool中实现。免费版支持每月最多5名用户，不限制应用和API连接数。
  * **[DronaHQ](https://www.dronahq.com/)** — DronaHQ是一个帮助工程团队和产品负责人快速构建内部工具、定制用户流程、数字体验、自动化和定制管理面板的低代码平台。
  * **[ILLA Cloud](https://www.illacloud.com/)** — 一个功能强大的开源低代码平台，为开发者开发内部工具提供帮助。通过使用ILLA的组件和动作库，开发者可以节省大量的开发时间。免费版适用于5个团队成员。
  * **[outsystems.com](https://www.outsystems.com/)** — 提供企业级网页开发PaaS，适用于本地或云环境。免费的“个人环境”提供无限代码支持和最多1GB数据库。
  * **[UI Bakery](https://uibakery.io)** — 一个加快自定义Web应用程序构建的低代码平台。支持使用拖放创建UI，并通过JavaScript、Python和SQL提供高度

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) - 免费提供100 MB的web托管服务，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义web服务器，通过FTP、WebDAV和SSH访问，还包括邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) - 提供免费web托管服务，附带免费简短域名，支持PHP、MySQL和App Installer，具备邮件发送功能且无广告。
  * [Bohr](https://bohr.io) - 非商业项目免费，且作为开发者首选的部署和开发平台，简化基础设施管理并加快设置速度。
  * [Bubble](https://bubble.io/) - 使用视觉编程构建无需编码的web和移动应用，免费版本包含Bubble品牌显示。
  * [dAppling Network](https://www.dappling.network/) - 去中心化的Web3前端托管平台，专注于提高服务持续性和安全性，为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform Starter层级上免费创建并部署三个静态网站。
  * [Drive To Web](https://drv.tw) - 直接从Google Drive和OneDrive上传到网络，仅限静态网站，永久免费，每个Google/Microsoft账户可创建一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 本地网站主机和实时分享的开发者桌面应用，使用美观的用户界面、API或CLI都能灵活操作。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上搭建和托管基于Markdown的文档站点，可自动创建网站的API参考，位于_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) - 提供免费主机，包括PHP 5、Perl、CGI等，附加功能如MySQL、FTP、文件管理器、电子邮件、免费二级域名、DNS编辑器、站内统计等。
  * [Freehostia](https://www.freehostia.com) - 提供所有控台ONE-click安装50多个免费应用的免费服务，无需强制广告，快速设置。
  * [HelioHost

  * [SourceForge](https://sourceforge.net/) — 找到、创建并免费发布开源软件
  * [surge.sh](https://surge.sh/) — 静态网页发布平台，适用于前端开发者。提供无限站点、自定义域名支持
  * [telegra.ph](https://telegra.ph/) — 使用 Quill 轻松创建网页
  * [tilda.cc](https://tilda.cc/) — 一个站点，50 页，50 MB 存储，仅限170多个预设块之一，不支持字体、图标和自定义域名
  * [Vercel](https://vercel.com/) — 建立、部署和托管网站，提供免费SSL、全球CDN和每次`git push`的唯一预览URL。适合Next.js和其它静态网站生成器
  * [Versoly](https://versoly.com/) — 针向SaaS的网站构建器 - 允许无限网站、70+ 模块、五种模板，可自定义CSS、图标、SEO和表单。不支持自定义域名
  * [Qoddi](https://qoddi.com) - 类似Heroku的PaaS服务，以开发者为中心，提供全套功能。免费版适合静态资源、预览和开发者应用
  * [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费Flarum托管，适用于最多250名用户（捐赠可移除页脚水印）
  * [fleek.co](https://fleek.co/) — 免费创建现代网站和应用，无缝集成开放Web及其协议，不限网站，每月50 GB带宽
  * [MDB GO](https://mdbgo.com/) — 为一个项目提供免费宿主机，持续两周的容器有效期，每个项目500 MB RAM，SFTP支持5GB磁盘空间
  * [Patr Cloud](https://patr.cloud/) — 一个易用的云平台，付费服务包括免费托管三个静态网站
  * [Serv00.com](https://serv00.com/) — 免费提供3GB网站空间，每日备份（7天）。支持定时任务、SSH访问、代码库（GIT、SVN、Mercurial）、数据库（MySQL、PostgreSQL、MongoDB）、

## DNS

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析器，速度和安全性高（加密DNS查询），可用于绕过互联网供应商的DNS封锁，防止DNS查询监视，并且可以[阻止成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它也可以通过API[使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注意：仅仅是一个DNS解析器，不是DNS服务提供商。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供API和其他免费DNS功能的免费DNS服务。
  * [cloudns.net](https://www.cloudns.net/) — 提供免费DNS托管，最多支持1个域名和50个记录。
  * [deSEC](https://desec.io) - 以安全为设计目的的免费DNS托管服务，基于开源软件，由[SSE](https://www.securesystems.de/)支持。
  * [dns.he.net](https://dns.he.net/) — 提供动态DNS支持的免费DNS托管服务。
  * [Zonomi](https://zonomi.com/) — 提供即时DNS传播的免费DNS托管服务。免费计划：1个DNS区（域名），最多支持10个DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
  * [duckdns.org](https://www.duckdns.org/) — 免费DDNS，免费层次最多支持5个域名。提供了各种配置指南。
  * [Dynv6.com](https://dynv6.com/) — 提供API支持的免费DDNS服务，支持大量DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）管理。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管。还提供根据众多用户提交的公共域[免费子域](https://freedns.afraid.org/domain/registry/)。注册后，从"子域"菜单获得免费子域。
  * [luadns.com](https://www.luadns

## 域名管理

  * [eu.org](https://nic.eu.org) — 提供免费的 eu.org 域名。一般在14天内批准申请。
  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务(IaaS)

  * [4EVERLAND](https://www.4everland.org/) - 与AWS S3兼容 - 提供API、界面操作、CLI和上传方法等接口，方便快捷地将IPFS和Arweave网络中的文件存储在安全的地方。注册用户可免费获得6 GB的IPFS存储和300MB的Arweave存储。Arweave上传文件小于150 KB的部分是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2云存储。提供无限时长的免费10 GB（类似Amazon S3的）对象存储。
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。无限期免费提供5 GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。提供免费25 GB存储和250GB的外传带宽。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月可免费使用10 GB存储空间和10 GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费提供15 GB存储和15GB下载速率。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven提供了其开源数据平台上的免费PostgreSQL、MySQL和Redis计划。单个节点，1个CPU，1GB内存，以及对于PostgreSQL和MySQL，5GB存储空间。轻松迁移至更大规模计划或跨云部署。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关系型数据库，有无限数量的基础，每个基础有1,200行和每月1,000个API请求。
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 作为服务的云原生Cassandra，免费提供80GB层级。[了解更多免费层级信息](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端服务，以及NoSQL数据库服务，包括函数、MongoDB查询、键值对查询、工作系统、实时消息、工作者队列、强大的CLI和基于Web的数据管家。免费计划有5GB存储和每分钟60个API调用。包括2名开发者。无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源SQL数据库，用于实时分析。[免费层级CRFREE](https://crate.io/lp-crfree)，一个节点，2个CPU，2 GiB内存，8 GiB存储。每个组织一个集群，无需支付方式。
  * [FaunaDB](https://fauna.com/) — 提供原生GraphQL的无服务器云数据库，支持多模型访问，每天有免费的100 MB容量。
  * [Upstash](https://upstash.com/) — 提供无服务器Redis，免费版包括每天10,000个请求，最大数据库大小为256MB，20个并发连接。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费提供512 MB存储。
  * [redsmin.com](https://www.redsmin.com/) — 在线实时监控和管理Redis服务的在线工具，免费版支持一个Redis实例的监控。
  * [redislabs](https://redislabs.com/try-free/) — 免费提供30MB的Redis实例。
  * [Mem

  * [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 提供免费的CockroachDB，最多5GB和1vCPU（对[请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta)有限制）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 一个基于原生图数据库的托管平台/分析平台，带有Cypher查询语言和REST API。对图大小有限制（节点50,000个，关系175,000个）
  * [Neon](https://neon.tech/) — 管理PostgreSQL，提供0.5 GB的存储（总存储），1个项目，10个分支，无限数量的数据库，主分支始终可用（5分钟后自动暂停），非主分支计算每月有20小时的活跃时间（总计）
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 一个基于原生图数据库的托管服务，带有GraphQL API。每日数据传输量限制为1 MB
  * [Tinybird](https://tinybird.co) — 一款基于HTTP的无服务器托管ClickHouse，支持无连接数据摄入。您可以将SQL查询作为托管的HTTP API发布。免费版没有时间限制，存储空间10GB + 每天1000个API请求
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 基于原生图数据库的托管平台/分析平台，使用SQL-like图查询语言和RESTful API。免费实例具有2 vCPU、8GB内存和50GB存储，活跃1小时后会进入休眠状态
  * [TerminusCMS](https://terminusdb.com/pricing) — 为TerminusDB提供的免费服务，TerminusDB是用Prolog和Rust编写的文档和图数据库。具体为开发人员免费，企业部署和支持需要付费
  * [YugabyteDB](https://cloud.yugabyte.com) — YugabyteDB是一款与PostgreSQL兼容的分布式SQL数据库。免费云套件包括2个vCPU、4GB RAM和10GB磁盘
  * [filess.io](https://file

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  以下是Markdown文本的中文翻译：

* [Pinggy](https://pinggy.io) — 一键实现对本地localhost的公共URL访问，无需下载，支持HTTPS、TCP、TLS隧道。免费计划的隧道时长为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — 用于将IIS Express暴露给本地网络或通过隧道提供公共URL的Visual Studio扩展。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一款托管的VPNs服务，可以让您安全地将局域网（LAN）网络扩展到分布式团队，其免费版支持无限网络，最多允许5人。
  * [Mirna Sockets](https://mirna.cloud/) — 免费的Socket-as-a-Service平台，当您部署Web Socket服务器代码时，它将提供一个`wss://`URL，还能监控性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器公开至公共URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 类似功能，通过隧道将本地服务器暴露给公共URL。有免费的托管版本，同时开源 [GitHub](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 类似的URL转发服务。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 免安装、无注册，将自己的服务器提供给互联网。提供免费二级域名，没有使用限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPNs连接多台计算机，功能类似Hamachi。无限的对等连接。
  * [segment.com](https://segment.com/) — 用于事件转发的平台，提供100,000次免费事件月度处理量。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)（Google STUN服务器）
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=

  * [btunnel](https://www.btunnel.in/) — 将本地主机和本地TCP服务器暴露到互联网。免费套餐包括文件服务器、自定义HTTP请求和响应头、基本身份验证保护，以及1小时的隧道超时时间。

**[↑ 返回目录顶部](#目录)**

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 适用于最多5个团队成员的免费项目管理和敏捷管理软件
  * [asana.com](https://asana.com/) — 合作团队的私人项目是免费的
  * [Backlog](https://backlog.com) — 在一个平台上提供团队释放出色项目的所需一切。免费计划提供一个项目、10个用户和100MB的存储空间
  * [Basecamp](https://basecamp.com/personal) - 待办事项列表、里程碑管理、类似论坛的消息传递、文件共享和时间跟踪。最多可提供3个项目、20个用户和1GB的存储空间
  * [bitrix24.com](https://www.bitrix24.com/) — 是一个内部网和项目管理工具。免费计划支持无限用户，提供5GB存储空间
  * [cacoo.com](https://cacoo.com/) — 在线实时图表，如流程图、UML和网络图。免费版最多可容纳15个用户/图表，25张工作表
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克，节约木棍和敏捷估算时间。免费版最多支持5名用户，免费集成Jira，无限视频通话，无限团队和会话
  * [clickup.com](https://clickup.com/) — 项目管理工具。免费提供云存储，还有付费版。移动应用程序和Git集成可用
  * [Clockify](https://clockify.me) — 一个时间追踪和时间单应用，允许您跨项目追踪工作时间。免费版不限用户，永久免费
  * [Cloudcraft](https://cloudcraft.co/) — 几乎在几分钟内使用Cloudcraft可视化设计师设计专业的架构图，这款工具对AWS优化，智能组件可显示实时数据。免费版单用户允许无限私有图表
  * [Codegiant](https://codegiant.io) — 支持仓库托管和CI/CD的项目管理。免费版提供无限仓库、项目与文档，可供5名团队成员使用，每月500分钟CI/CD，30000分钟Serverless Code Run，1GB仓库存储
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian的内容协作工具

  * [Hygger](https://hygger.io) — 项目管理系统。免费版提供无限用户、项目和看板，以及 100 MB 存储空间。
  * [Instabug](https://instabug.com) — 报告移动应用中的 bug 和获取内购反馈的全面 SDK。免费版最多支持 1 个应用和 1 名成员。
  * [WishKit](https://wishkit.io) — 用于 iOS 和 macOS 应用的内购用户反馈收集工具，可根据用户投票优先处理功能。免费版最多支持 1 个应用。
  * [Ilograph](https://www.ilograph.com/) — 提供互动图表，用户可以从多个角度和详细程度查看基础设施，支持基于代码表示图表。免费层级包含无限私图，最多支持 3 个观众。
  * [Jira](https://www.atlassian.com/software/jira) — 高级软件开发项目管理工具，广泛用于企业环境。免费版最多支持 10 名用户。
  * [kanbanflow.com](https://kanbanflow.com/) — 以板为基础的项目管理工具。免费版提供更丰富的选项。
  * [kanbantool.com](https://kanbantool.com/) — 带看板的项目管理。免费版包含两个板和两个用户，不支持附加文件。
  * [Kitemaker.co](https://kitemaker.co) - 通过 Slack、Discord、Figma 和 Github 全流程协作产品开发过程。免费版最多支持 250 个工作项。无限制用户和空间。
  * [Kiter.app](https://www.kiter.app/) - 便于任何人管理求职和跟踪面试、机会和联系人。提供强大的网页应用和 Chrome 扩展，完全免费。
  * [Kumu.io](https://kumu.io/) — 动画和装饰关系图，支持过滤、聚类、导入电子表格等功能。免费层级允许无限公共项目。暂无图形大小限制。学生有免费的私有项目。若不想公开文件，沙箱模式可选。
  * [Linear](https://linear.app/) — 简洁界面的bug追踪工具。免费版支持无限成员，上传文件大小限制为 10MB，250 个问题（不含归档）。
  * [leiga.com

  * [plan.io](https://plan.io/) — 项目管理，附带存储库托管及更多功能，2名用户和10名客户免费，500MB存储空间。
  * [Plane](https://plane.so/) — 简单、可扩展的开源项目管理和产品管理工具。无限会员免费，上传文件大小限制5MB，可创建1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费在线规划扑克（估算工具）。
  * [point.poker](https://www.point.poker/) - 在线规划扑克（基于共识的估算工具）。无限用户、团队、会话、轮次和投票免费，无需注册。
  * [ScrumFast](https://www.scrumfast.com) - 有直观界面的敏捷看板，5名用户免费。
  * [Shake](https://www.shakebugs.com/) - 为移动应用提供的内置bug报告和反馈工具，免费版允许每个应用每月上报10个bug。
  * [Shortcut](https://shortcut.com/) - 项目管理平台，10名用户免费。
  * [Tadum](https://tadum.app) - 按需设计的会议议程和记录应用，10名团队成员免费。
  * [taiga.io](https://taiga.io/) — 专为初创公司和敏捷开发人员设计的项目管理平台，开源项目免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费版无限任务、冲刺和工作空间，没有用户数量限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 从看板、Scrum到几乎所有操作流程的视觉项目管理，无限用户免费，包含1,000个数据实体【更多详情】(https://www.targetprocess.com/pricing/)
  * [taskade.com](https://www.taskade.com/) — 实时协作任务清单和团队结构。免费版一个工作区，无限任务和项目，1GB文件存储，1周项目历史，视频会议最多5人。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。5名用户免费。支持GitHub、Trello、Dropbox、Google Drive等集成。
  * [

  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费为开源项目和私人项目提供的托管 YouTrack（InCloud）。包括时间跟踪和敏捷看板
  * [zenhub.com](https://www.zenhub.com) — 属于 GitHub 的项目管理解决方案。免费提供公开仓库、开源项目和非营利组织的服务
  * [zenkit.com](https://zenkit.com) — 项目管理和协作工具。免费版适合最多 5 名成员和 5 GB 附件
  * [Zube](https://zube.io) — 提供项目管理功能，免费版包括 4 个项目和 4 个用户。支持 GitHub 集成
  * [Toggl](https://toggl.com/) — 提供的两项免费生产力工具：[Toggl Track](https://toggl.com/track/) 用于时间管理和跟踪，免费版专为自由职业者设计，提供无缝的时间跟踪和报告，支持无限的跟踪记录、项目、客户、标签、报告等功能；[Toggl Plan](https://toggl.com/plan/) 提供任务计划功能，免费版针对单个开发者，支持无限任务、里程碑和时间线
  * [Sflow](https://sflow.io) — sflow.io 是针对敏捷软件开发、市场营销、销售和客户服务的项目管理工具，特别适合外包和跨组织协作项目。提供免费版，包含 3 个项目和 5 位成员服务
  * [Pulse.red](https://pulse.red) — 为项目设计的免费简约时间跟踪和 timesheet 应用

**[⬆️ 返回目录](#目录)**

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件分享平台，提供无限速度、带宽、文件数、下载数等功能。主要用于Android开发相关的文件，如APK构建、自定义ROM和修改，但也接受其他文件。
  * [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单且安全的远程备份托管服务。免费备份空间10 GB，两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务，免费提供10 GB存储空间。
  * [sync.com](https://www.sync.com/) - 终端到终端的云存储服务，有5 GB的免费存储空间。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务，免费提供最多10 GB的存储空间。
  * [sirv.com](https://sirv.com/) — 智能图像CDN，提供即兴图像优化和调整。免费版包括500 MB存储空间和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 提供全面的图像优化和全球CDN服务，提供1500多个点。有图像缩放、压缩和水印的各种功能。月度免费计划包括25 GB的CDN流量，25 GB缓存存储和无限次转换。
  * [cloudinary.com](https://cloudinary.com/) — 提供图片上传、高级操作、存储和分发服务，支持Ruby、Python、Java、PHP、Objective-C等语言。免费版本包含25个每月积分，每个积分相当于1000次图像转换，1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) — 提供嵌入媒体到网页的API，响应式图像缩放，以及从网页中提取元素。免费提供每月最多5000个URL的访问，每秒钟15次请求。
  * [filestack.com](https://www.filestack.com/) — 文件选择、转换和分发服务，免费包括250个文件、500次转化和3 GB带宽。
  * [file.io](https://www.file.io) - 提供2 GB文件存储空间，上传的文件在下载一次后自动删除

  * [kraken.io](https://kraken.io/) — 提供网站性能图像优化服务，免费版支持最高1 MB 文件大小
  * [kvstore.io](https://www.kvstore.io/) — 关键值存储服务，免费版允许100个键和每个键1 KB存储空间，每小时100个调用
  * [npoint.io](https://www.npoint.io/) — 具有协作模式的JSON 空间存储
  * [nitropack.io](https://nitropack.io/) - 自动优化网站速度，包括前端优化（缓存、图像和代码优化、CDN）。免费版每月限5,000个页面视图
  * [otixo.com](https://www.otixo.com/) — 一个便捷的云存储文件加密、分享、复制和移动工具。基本版提供无限量传输，但最大文件大小250 MB，且最多允许五个加密文件
  * [packagecloud.io](https://packagecloud.io/) — 主机YUM、APT、RubyGem 和 PyPI 的仓库。有限的免费版和开源计划通过请求提供
  * [getpantry.cloud](https://getpantry.cloud/) — 单纯的JSON数据存储API，适合个人项目、黑客松和移动应用
  * [Pinata IPFS](https://pinata.cloud) — 非常简单地上传和管理IPFS文件的服务，提供友好的用户界面和API。免费1 GB存储空间和API访问
  * [placekitten.com](https://placekitten.com/) — 提供小猫图片，用于制作占位图的快速服务
  * [plot.ly](https://plot.ly/) — 绘制和分享数据，免费版包含无限公开文件和10个私人文件
  * [podio.com](https://podio.com/) — 使用最多5人的团队并试用基础版功能（不包括用户管理）
  * [QuickChart](https://quickchart.io) — 生成嵌套图像图表、图形和二维码
  * [redbooth.com](https://redbooth.com) — 免费版支持两用户间的文件同步
  * [resmush.it](https://resmush.it) — 提供免费的图像优化API，适用于WordPress、Drupal和Magento等常见CMS。已处理

  * [**internxt.com**](https://internxt.com) - Internxt Drive 是一个基于绝对隐私和无懈可击安全的零知识文件存储服务。注册并免费获取10GB，永久有效！
  * [**degoo.com**](https://degoo.com/) - 基于AI的云存储，免费提供20GB空间，支持三台设备，推荐奖励5GB（90天账户未活动）。
  * [**MConverter.eu**](https://mconverter.eu/) - 批量转换文件。支持众多文件格式，包括新格式如**AVIF**（<https://mconverter.eu/convert/to/avif/>）。从视频中提取所有图像帧。每天免费处理两批，每批不超过10个100MB文件。
  * [**ImageEngine**](https://imageengine.io/) - ImageEngine 是一个易于使用的全球图片内容分发网络。设置快速，支持AVIF和JPEGXL，提供WordPress、Magento、React、Vue等插件。点击这里申请免费开发者账号：[**https://imageengine.io/developer-program/**](https://imageengine.io/developer-program/).
  * [**DocsParse**](https://docsparse.com/) - GPT驱动的AI处理PDF、图像，将其结构化为JSON、CSV、EXCEL等格式的数据。每月赠送30个信用积分。

**[⬆️ 返回顶部](#目录)**

## 设计与UI

  * [AllTheFreeStock](https://allthefreestock.com) - 提供了一个收录的免费图片、音频和视频列表。
  * [Float UI](https://floatui.com/) - 为快速创建具有现代感和响应式的网站设计的免费网络开发工具，即便对设计师来说也不再困难。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供了一个由 Ant Motion 组件构建的模板。它提供了丰富的主页模板，下载示例代码包，轻松使用。您还可以使用编辑器快速构建专属于您的页面。
  * [Backlight](https://backlight.dev/) - 采用设计师与开发者之间的协作为核心，Backlight 是一个完整的编码平台，团队在此上构建、文档化、发布、扩展和维护设计系统。免费计划支持至多3个编辑者针对一个设计系统工作，并允许无限量观众访问。
  * [BoxySVG](https://boxy-svg.com/app) - 这是一个可安装的 Web 应用程序，用于绘制 SVG 框图并导出 SVG、PNG、jpeg 等格式的文件。
  * [Carousel Hero](https://carouselhero.com/) - 提供免费在线工具，创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 包含格式化开源图标，包括为 React、Vue 和 Svelte 发布的 SVG 格式。
  * [clevebrush.com](https://www.cleverbrush.com/) - 一个免费图形设计/照片拼贴应用程序，还提供付费集成作为组件。
  * [cloudconvert.com](https://cloudconvert.com/) - 将任意文件转换成任意格式，包括208种格式，如视频和 gif。
  * [CodeMyUI](https://codemyui.com) - 收录精选的 Web 设计与 UI 激发灵感，附有代码片段。
  * [ColorKit](https://colorkit.co/) - 创建在线颜色板，或从顶级调色板获取灵感。
  * [coolors](https://coolors.co/) - 颜色调色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 手精心挑选的适用于品牌的调色板。
  * [css-gradient.com](https://www.css-gradient.com

  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一个原型设计工具。 - 它是完全免费且开源的。
  * [lensdump.com](https://lensdump.com/) - 免费云图片存储服务。
  * [Lorem Picsum](https://picsum.photos/) - 一个易用的免费工具，提供风格化的占位图。在 URL 后添加你期望的图片大小（宽度和高度），就能得到随机图片。
  * [LottieFiles](https://lottiefiles.com/) - 世界上最大的在线平台，提供为设计师、开发者等打造的世界上最微小的动画格式。你可以访问 Lottie 的动画工具和安卓、iOS 和 Web 平台插件。
  * [MagicPattern](https://www.magicpattern.design/tools) - 一个 CSS 和 SVG 背景生成器和工具集合，包括渐变、图案和球体。
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型制作、协作工具，免费计划限于单个用户和项目。
  * [Mindmup.com](https://www.mindmup.com/) - 免费无限制思维导图，在云端存储。你的思维导图随时随地可用，可从任何设备访问。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一个强大的设计协作及交接工具。免费计划包含三个用户和五个项目，所有功能可用。
  * [mockupmark.com](https://mockupmark.com/create/free) - 创建可用于社交媒体和电子商务的 T 恤和衣物样式的免费真实mockups，共有40个。
  * [Mossaik](https://mossaik.app) - 提供不同工具的免费 SVG 图像生成器，如波浪、点状和图案。
  * [movingpencils.com](https://movingpencils.com) -基于浏览器的矢量编辑器，完全免费。
  * [Octopus.do](https://octopus.do) - 实时可视化的网站构建器。快速构建网站架构并与团队或客户共享。
  * [Pencil](https://github.com/evolus/pencil) - 基于 Electron 开源设计工具。
  * [Penpot](https://penpot.app) - 一种基于 Web 的开源设计和原型制作工具

  * [smartmockups.com](https://smartmockups.com/) — 创建产品演示。提供200个免费模板。
  * [tabler-icons.io](https://tabler-icons.io/) — 提供1500多个可复制粘贴的SVG编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 生成带名字缩写的头像。可以直接将链接添加到网页或应用中。通过URL支持配置。
  * [unDraw](https://undraw.co/) — 持续更新的美丽SVG图片集合，完全免费使用，无需提及来源。
  * [unsplash.com](https://unsplash.com/) - 免费库存照片，用于商业或非商业用途（可以随意使用）。
  * [vectr.com](https://vectr.com/) — 网页与桌面免费设计工具。
  * [walkme.com](https://www.walkme.com/) — 专业级路径引导与激活平台，免费版包含3个步骤内的引导。
  * [Webflow](https://webflow.com) - WYSIWYG网站构建器，带动画与网站托管。免费提供两个项目。
  * [Updrafts.app](https://updrafts.app) - 针对TailwindCSS设计的WYSIWYG网站构建器。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、草图、便签和思维导图。创建4个免费板格。
  * [Zeplin](https://zeplin.io/) — 设计师与开发者的协作平台。展示设计、资产和样式指南。免费项目参与一次。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑互动、独特的图像和图形。
  * [Responsively App](https://responsively.app) - 为响应式Web应用快速开发提供免费工具，提高精度。
  * [SceneLab](https://scenelab.io) - 在线演示图图形编辑器，包含不断增长的免费设计模板库。
  * [xLayers](https://xlayers.dev) - 预览并使用免费开源的 Sketch 设计文件转换为 Angular、React、Vue、LitElement、Stencil、Xamarin 等。
  * [Grapedrop](https://grapedrop.com/) —

  * [vector.express](https://vector.express) — 快速轻松地将AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG等向量文件转换。
  * [Vertopal](https://www.vertopal.com) — Vertopal是一个免费的在线文件转换平台，支持多种格式转换，包括JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
  * [okso.app](https://okso.app) — 简约在线绘画应用，快速创建草图和视觉注释。支持PNG、JPG、SVG和WEBP格式导出。作为PWA可安装。对所有人免费，无需注册。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) — 提供黑白免费SVG剪切文件。
  * [Lucide](https://lucide.dev) — 一个可定制的、一致的SVG图标工具包，完全免费。
  * [Logo.dev](https://www.logo.dev) — 提供4400万+公司的公司logo API，易于使用，前10000个API调用免费。
  * [MDBootstrap](https://mdbootstrap.com/) — 个人和商业用途均可免费使用Bootstrap、Angular、React和Vue UI组件库，包含700多个组件、模板、1分钟安装、详尽教程和庞大的社区。
  * [TW Elements](https://tw-elements.com/) — 以Tailwind CSS重新创建的Bootstrap组件，设计更优秀，功能更多。
  * [DaisyUI](https://daisyui.com/) — 免费，提供“使用Tailwind CSS，减少类名”优势的组件，例如按钮。
  * [Scrollbar.app](https://scrollbar.app) — 一个简单免费的web应用，用于设计自定义的网页滚动条。
  * [css.glass](https://css.glass/) — 非常免费的web应用，使用CSS创建玻璃效果设计。
  * [hypercolor.dev](https://hypercolor.dev/) — 收录的Tailwind CSS颜色渐变集合，同时还提供了多种渐变生成器。
  * [iconify.design](https://icon-sets.iconify.design/) — 汇聚100多个图标包的界面，允许跨图标包搜索，导出单个图标为

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - 展示所有设计得最好的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - 设计作品展示平台。设计师可以展示他们的作品，也可以按 UI/UX 项目分类浏览。
  * [dribbble](https://dribbble.com/) - 设计灵感展示，通常不包含实际应用。
  * [Landings](https://landings.dev/) - 网页截图库。根据你的偏好找到最适合的设计灵感落地页。
  * [Lapa Ninja](https://www.lapa.ninja/) - 落地页/UI 套件/网页截图库。包含 6025 个最佳落地页例子，以及设计师和网络上的免费 UI 套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - 落地页设计。不断更新的落地页截图，包括 Desktop、Tablet 和 Mobile。
  * [Mobbin](https://mobbin.design/) - 移动应用截图库。使用我们的数据库，可以节省数小时的 UI/UX 研究时间，包含 50,000+ 可搜索的截图。
  * [Uiland Design](https://uiland.design/) - 探索非洲和世界各地领先公司的移动和网页 UI 设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - 移动/网页 UI 纹理库。包含精美的 UI/UX 模板，方便设计师、开发者和产品制造商参考，分为 iOS 和 Android。
  * [Page Flows](https://pageflows.com/) - 移动/网页视频截图。展示多个移动和网页应用的完整流程，包含视频和截图，搜索指数高。
  * [Screenlane](https://screenlane.com/) - 获取灵感并了解最新的web & mobile UI设计趋势。按模式和应用分类过滤。
  * [scrnshts](https://scrnshts.club/) - 手精选的应用商店设计截图佳作集合。
  * [UI Garage](https://uigarage.net/) - 每日UI灵感与模式，供设计师和开发者寻找灵感、工具和项目所需的最佳资源。
  * [Refero](https://refero.design/) - 收录并搜索的优秀网页

## 地图上的数据可视化

  * [IP定位](https://ipgeolocation.io/) — 提供30K每月请求数的免费开发者计划。
  * [carto.com](https://carto.com/) — 创建地图和从您的及公开数据创建地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 无缝工作的地图工具。每月5万个免费查询（地图瓦片、db2vector、高度）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供跨Web、桌面和移动平台的地图、地理空间数据存储、分析、地理编码、路由等的API和SDK。包括每月200万个免费基础地图瓦片、2万个非存储的地理编码、2万个简单的路线、5千个驾驶时间计算以及5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK提供地点发现、场所搜索和上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/) — 提供矢量和栅格地图瓦片、地理编码、地点、路线、等高线API。每天免费请求3000次。
  * [geocod.io](https://www.geocod.io/) — 提供通过API或CSV上传的地理编码服务。每天免费2500次查询。
  * [geocodify.com](https://geocodify.com/) — 提供通过API或CSV上传的地理编码和地理解析服务。每月免费1万个查询。
  * [geojs.io](https://www.geojs.io/) — 提供高可用的REST/JSON/JSONP IP定位查找API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) — 提供路线规划、路线优化、距离矩阵、地理编码和地图匹配的免费开发者包。
  * [here](https://developer.here.com/) — 提供地图和位置感知应用的API和SDK。每月免费提供25万个交易。
  * [locationiq.com](https://locationiq.com/) — 提供地理编码、地图和路线API。每天免费请求5000次。
  * [mapbox.com](https://www.mapbox

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 多个发行版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 为 Fedora 和 EL 提供基于 Mock 的 RPM 构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu 和 Debian 的构建服务。

**[返回顶部](#目录)**

## 集成开发环境(IDE)与代码编辑

  * [3v4l](https://3v4l.org/) - 一个免 费的在线 PHP 脚本运行和共享站点，可以在300多个PHP版本上运行你的代码
  * [Android Studio](https://developer.android.com/studio) - Android Studio 提供了为各种Android设备快速开发应用的最快工具。开源IDE对所有人都免费，是安卓应用开发的最佳选项。支持Windows、Mac、Linux和Chrome OS。
  * [AndroidIDE](https://m.androidide.com/) - 开源自用的IDE，能在Android设备上开发真正的基于Gradle的Android应用。
  * [Apache NetBeans](https://netbeans.apache.org/) - 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) - 协作设计API，实时API模拟和自动生成文档，免费版限于无限API蓝图和单个管理员账户下无限用户，且带有托管文档。
  * [BBEdit](https://www.barebones.com/) - 一款广泛流行的macOS文本编辑器。免费模式提供了强大的核心功能集，可升级至高级功能。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为一系列交互式笔记本。这是一个免费的公共服务。
  * [BlueJ](https://bluej.org) - 一个针对初学者设计的免费Java开发环境，由Oracle支持，具有简单图形用户界面，有利于初学者。
  * [Bootify.io](https://bootify.io/) - 为定制数据库和REST API生成Spring Boot应用的工具。
  * [Brackets](http://brackets.io/) - 一个专为Web开发设计的开源文本编辑器，轻量级、易用且高度可定制。
  * [cacher.io](https://www.cacher.io) - 代码片段整理器，有标签支持并与100多种编程语言兼容。
  * [Code::Blocks](https://codeblocks.org) - 免费的C、C++和Fortran集成开发环境，开源且支持Windows、macOS和Linux。
  * [Cody](https://sourcegraph.com/cody) - 免费的AI代码辅助器，可以生成（代码块、完成和单元测试）、理解（整个代码库的知识）、修复和查找代码。适用于VS Code、JetBrains和在线使用。
  * [cod

  * [fakejson.com](https://fakejson.com/) - FakeJSON 是一个 API，帮助您快速使用其 API 生成假数据。请求描述您想要什么以及您希望如何获取。API 返回 JSON 格式的结果。在概念演示和假数据的测试阶段加速产品上市。
  * [GetVM](https://getvm.io) - 钩子般的免费 Linux 和 IDE 窗口Chrome 应用。免费版每天包含 5 个虚拟机。
  * [GitPod](https://www.gitpod.io) - 用于 GitHub 项目的一键式即开即用开发环境。免费版每月包含 50 小时。
  * [ide.goorm.io](https://ide.goorm.io) - GoormIDE 是云端全功能的 IDE，支持多语言，基于 Linux 的容器，及完整的 web 基于终端，端口转发，自定义 URL，实时协作、聊天，分享链接，Git/子版本控制支持等。更多功能（免费版包含每个容器 1GB 内存和 10GB 存储空间，5 个容器槽位）。
  * [JDoodle](https://www.jdoodle.com) - 在线编译器和编辑器，支持 60 多种编程语言，免费计划每天对 REST API 渲染提供的代码额度为 200 信用。
  * [jetbrains.com](https://jetbrains.com/products.html) - 产品开发工具、IDE 和部署工具（例如[ IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源项目和用户组有免费许可证。
  * [jsbin.com](https://jsbin.com) - JS Bin 是另一个前端（HTML、CSS、JavaScript）的练习场和代码共享站点。还支持 Markdown、Jade 和 Sass。
  * [jsfiddle.net](https://jsfiddle.net/) - JS Fiddle 是一个用于前端的练习场和代码共享站点，支持协作。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 包含一些返回 JSON 格式假数据的 REST API 端点。如果想在本地运行服务器，源代码也可获取。
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarus 是一个兼容 Del

  * [stackblitz.com](https://stackblitz.com/) — 一个在线/云代码IDE，用于创建、编辑和部署全栈应用。支持任何受欢迎的基于Node.js的前端和后端框架。快速创建新项目的链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) — Sublime Text是一个流行、多功能且高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) — 重新定义和优化的代码编辑器，专为构建和调试现代Web和云应用而设计。由微软开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 具有数千个扩展的全功能IDE，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android），桌面、Web和云开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) — 社区驱动、无跟踪且遵循开源许可的VSCode的免费二进制分发版本。
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件监测您的编码活动的自我量化指标，有限的免费计划。
  * [Wave Terminal](https://waveterm.dev/) — Wave是一个开源的、跨平台的终端，提供无缝工作流程。支持任何内容内嵌。保存会话和历史记录。支持基于开放网络标准。适用于MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 在浏览器中的IDE，用于隔离编写Web组件，提供58个模板、支持故事和测试功能。
  * [PHPSandbox](https://phpsandbox.io/) — 网络开发环境，针对PHP。
  * [WebDB](https://webdb.app) - 免费高效的数据库IDE。功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等。
  * [Zed](https://zed.dev/) — Zed是Atom和Tree-sitter的创作者开发的一款高性能、多人协作代码编辑器。

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev)——数据云观察解决方案（Snowflake）。个人使用是免费的。
  * [Hightouch](https://hightouch.com/)——Hightouch是Reverse ETL平台，用于将客户数据从数据仓库同步到CRM、营销和支持工具。免费版提供一个数据同步目的地。
  * [Avo](https://avo.app/)——简化了分析发布流程。单源真相跟踪计划，类型安全的分析跟踪库，内置调试器，以及数据可观察性来捕获所有数据问题，以便在发布前发现。免费版提供两个工作空间成员和1小时的数据可观察性回顾。
  * [Branch](https://www.branch.io)——移动分析平台。免费版支持最多10,000个移动应用用户，并包括深度链接和其他服务。
  * [Cauldron](https://cauldron.io)——分析开源解决方案，允许用户从多个协作平台聚合信息，作为不同类型的数据源（例如Git、GitHub和Gitlab）。免费版包括无限数量的报告。
  * [Census](https://www.getcensus.com/)——反向ETL与运营分析平台。可以从数据仓库同步10个字段到60多个SaaS应用，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com)——网站分析平台。免费版适用于一个网站，包含3,000视图的分析。
  * [Databox](https://databox.com)——商业洞察与分析，通过结合其他分析和BI平台来实现。免费版提供3个用户，仪表板和数据源，以及11M历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/)——适用于1个网站的每月2,000个页面浏览量。
  * [amplitude.com](https://amplitude.com/)——每月100万个事件，最多支持2个应用。
  * [GoatCounter](https://www.goatcounter.com/)——开源的网站分析平台，既可以作为托管服务（非商业使用免费）也可以作为本地应用。它提供易用且尊重隐私的网络分析，替代Google Analytics或Matomo。免费版适用于非商业使用，包含无限站点、6个月的数据保留和每月100,000个页面浏览量。
  * [Google Analytics

  * [Mixpanel](https://mixpanel.com/) — 100,000每月跟踪用户，不限数据历史和座位，或美国或欧盟数据存储区域
  * [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（免费最多500,000个API调用/月）
  * [optimizely.com](https://www.optimizely.com) — A/B测试解决方案，免费入门计划，单网站，1个iOS应用程序和1个Android应用程序
  * [Microsoft PowerBI](https://powerbi.com) — 微软的商业洞察和分析。免费版提供有限使用，包含100万个用户许可。
  * [Row Zero](https://rowzero.io) — 非常快速、连接的电子表格。直接连接到数据数据库、S3和API。立即导入、分析、绘制和共享数百万行。永久免费的三个工作簿。
  * [sematext.com](https://sematext.com/cloud/) — 免费提供每月最多50,000个操作，1天数据保留，无限仪表板、用户等。
  * [Similar Web](https://similarweb.com) — 网站和移动应用的分析。免费计划提供每个指标五个结果，一个月的移动应用数据和三个月的网站数据。
  * [StatCounter](https://statcounter.com/) — 网站观众分析。免费版提供对最近500名访问者的分析。
  * [Statsig](https://statsig.com) — 包括分析、特征标记和A/B测试的全栈平台。免费提供每月最多1百万计数的事件。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建，并使Tableau完美符合您的组织需求。免费开发人员计划提供Tableau Online的个人开发沙盒许可证。版本是最新的预发布版本，以便数据开发者可以测试这个卓越平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实人身上测试设计和原型，并跟踪访客。免费提供一个用户，无限测试。
  * [woopra.com](https://www.woopra.com/) — 免费用户分析平台，提供500K个操作的存储，90天数据保留，

  * [Umami](https://umami.is/) - 简单、快速、注重隐私、开源的 Google Analytics 替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私保护型 Google Analytics 替代品。无限页面浏览量，无限访客，无限页面热图和目标跟踪。对于最多 3 个域名和每个域名每天 600 次会话回放是免费的。
  * [AppFit](https://appfit.io) - AppFit 是一个综合的分析和产品管理工具，旨在方便跨平台管理和收集分析和产品更新。免费计划每月提供 10,000 个事件、产品日志和每周洞察。
  * [Seline](https://seline.so) - Seline 是一个简单且注重隐私的网站和产品分析工具。无 cookie、轻量级、独立运行。免费计划每月支持 3,000 个事件，并提供所有功能，如仪表板、用户旅程、漏斗等。

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) - 每个网站：每天1,000页面浏览量，三个热图，三个小部件，免费的错误追踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话重播工具，带开发人员工具进行问题复现、实时支持和产品分析套件。每月1,000会话，提供所有功能和7天数据保留。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000会话，30天保留期，错误追踪，实时模式
  * [FullStory.com](https://www.fullstory.com) - 每月1,000会话，一个月的数据保留期，三个用户席位。更多信息请参阅[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) - 每个网站：每月1,050页面浏览量，无限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) - 一个网站每月免费提供2,500个会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，无流量限制，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) - 一个网站每月免费提供500个会话
  * [mousestats.com](https://www.mousestats.com/) - 一个网站每月免费提供100个会话
  * [smartlook.com](https://www.smartlook.com/) - 提供Web和移动应用的免费套餐（每月1,500个会话），三个热图，一个漏斗，1个月的数据历史
  * [howuku.com](https://howuku.com) - 跟踪用户互动、参与度和事件。每月免费提供5,000次访问
  * [UXtweak.com](https://www.uxtweak.com/) - 记录并查看访客如何使用您的网站或应用。为小项目提供无限时间的免费记录服务

**回到顶部** [⬆️]

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查找的JSON接口。每个月100个API请求。
  * [veriphone](https://veriphone.io/) — 全球电话号码验证，提供免费、快速、可靠的JSON API。每月1000次请求。  

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 一个全平台的订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化内购和货币化。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。免费版最多可追踪每月$10k收入。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) — 自动根据访客位置调整价格，拓展业务覆盖全球和新市场（购买力平价）。免费计划包含每月7,500个API请求。
  * [Glassfy](https://glassfy.io/) — 内购订阅基础设施，支持iOS、Android、Stripe和Paddle的实时订阅事件和货币化工具。免费版最多每月$10k收入。
  * [Adapty.io](https://adapty.io/) — 一站式解决方案，开源SDK，适用于移动内购订阅，支持iOS、Android、React Native、Flutter、Unity或Web应用。免费版最多每月$10k收入。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密和法币兑换率。免费版每月提供10,000个调用信用。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币兑换率。免费开发者计划包含每月1,000个请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币兑换率和历史数据。演示API具有稳定的每分钟30次调用限制和每月10,000次调用的上限。
  * [CurrencyApi](https://currencyapi.net/) — 提供实物和加密货币的实时货币汇率。免费版每月提供1,250个API请求。
  * [currencylayer](https://currencylayer.com/) — 可靠的汇率和货币转换服务，免费版每月100个API调用。
  * [exchangerate-api.com](https://www.exchangerate-api.com) — 易用的货币转换JSON API。免费版每天更新一次，每月限1,500个请求。
  * [FraudLabsPRO

## Docker Related

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，为团队提供30个免费的私有仓库来构建和存储 Docker 图像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理系统解决方案。免费版提供1 GB的存储空间用于私有仓库。
  * [Docker Hub](https://hub.docker.com) — 提供一个免费的私有仓库和无限的公共仓库来构建和存储 Docker 镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动且有趣的教育平台，帮助你学习 Docker。
  * [quay.io](https://quay.io/) — 提供无限免费公共仓库构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 一个匿名且临时的 Docker 镜像仓库

**[⬆️ 返回目录顶端](#目录)**

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) — HashiCorp的Vagrant Cloud。Vagrant box的托管平台。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 另一个公共box索引的替代方案

**[⬆️ 返回目录顶端](#目录)**

## 开发者博客站点

  * [BearBlog](https://bearblog.dev/) - 使用极简主义风格和Markdown构建博客和网站的工具。
  * [Dev.to](https://dev.to/) - 开发者分享观点和互相成长的平台。
  * [Hashnode](https://hashnode.com/) - 为开发者提供的无麻烦博客软件！
  * [Medium](https://medium.com/) - 深思对你而言重要的事情。
  * [AyeDot](https://ayedot.com/) - 免费以现代多媒体短格式迷你博客的形式，与世界分享你的想法、知识和故事。  

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个从网站受众构建活跃社区的评论平台。
  * [Utterances](https://utteranc.es/) - 一个基于GitHub问题的轻量级评论插件。你可以使用GitHub问题为博客评论、维基页面等添加评论!
  * [Disqus](https://disqus.com/) - Disqus 是一个被互联网上成千上万的网站广泛使用的社区平台。
  * [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，按需支付“一个管理员管理几个域名，完全控制行为和外观”。
  * [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等众多网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持全页面抓取，捕捉时间点以及视口尺寸。
  * [microlink.io](https://microlink.io/) — 将任意网站转化为包含元标签规范化、美观链接预览、抓取能力或作为服务的截图等功能。每日免费额度为250个请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简单API调用来生成网页截图的工具。设计可扩展，托管在Google Cloud上。每月提供免费100个截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 为任意网站捕获高度可定制的快照。每月免费100个快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 月捕获100个截图，支持png、gif和jpg格式，包括完整页面抓取，而不仅仅是首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 提供浏览器自动化和页面渲染功能。免费版每日最多支持500页。自2017年起免费。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker提供网站截图和域名智能API服务。每月免费100个请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转化成jpg、png或pdf。支持全页面截图、调整视口和注入自定义代码。免费版每月150个图片。
  * [Screenshots](https://screenshotson.click) — 为截图设计的API。捕捉选项高度可定制，每月免费100个截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/)：FlutLab是一个现代化的Flutter在线 IDE，也是创建、调试和构建跨平台项目的最佳场所。使用Flutter构建iOS应用（无需Mac）和Android应用。
  * [CodeMagic](https://codemagic.io/)：CodeMagic是一个完全托管的移动应用CI/CD平台。您可以通过图形化的CI/CD工具进行构建、测试和部署。免费版提供每月500分钟的免费时长和服务，提供Mac Mini实例，配备2.3 GHz处理器和8 GB RAM。
  * [FlutterFlow](https://flutterflow.io/)：FlutterFlow是一个基于浏览器的拖放界面，用于使用Flutter构建移动应用。

**[回到顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * **[JsLinux](https://bellard.org/jslinux)**：一个非常快速的x86虚拟机，可以运行Linux和Windows 2k。
  * **[Jor1k](https://s-macke.github.io/jor1k/demos/main.html)**：一个可以运行Linux并支持网络的OpenRISC虚拟机。
  * **[v86](https://copy.sh/v86)**：一个可以在浏览器中直接运行Linux和其他操作系统的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 帮助通过审计和持续的工作流程来实施隐私设计，以便组织符合GDPR和其他法规。免费版仅适用于小型团队，SaaS版本才有提供。
  * [Osano](https://www.osano.com/) - 提供从GDPR代理到Cookie banner的全面合规管理平台。免费版提供基础功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私与Cookie政策管理，以及同意管理。免费版提供有限的隐私和Cookie政策，以及Cookie banner功能。
  * [Cookiefirst](https://cookiefirst.com/) - 包含Cookie banner、审计和多语言同意管理的解决方案。免费版提供一次扫描和单个banner。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大部分功能，但限制访问者数量。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费版包括核心同意管理功能，对于已验证的开源项目，他们还提供更高级的免费计划。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为社交媒体创建有审美感的代码、文本或图片截图。
  * [BinShare.net](https://binshare.net) - 提供代码或二进制文件创建和分享，可用于在Twitter或Facebook发布优美图片，或作为链接用于聊天和论坛。
  * [Blynk](https://blynk.io) - 提供控制、构建和评估物联网设备的云端服务。免费开发者计划允许5个设备，免费云存储。还有移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大多行计算器的笔记应用（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建和分享代码片段，以美观的截图格式显示，通常用于在Twitter或博客文章中展示代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等支持的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码生成出色的截图，用于社交媒体分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本截图，便于在社交媒体分享。
  * [Cronhooks](https://cronhooks.io/) - 为定时或定期Webhook提供服务。免费计划允许5个非定期调度。
  * [cron-job.org](https://cron-job.org) - 在线运行Cron作业的平台，无限的工作在免费版中是免费的。
  * [datelist.io](https://datelist.io) - 一个在线预订/约会预订系统，免费版包含每月5次预订和一个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单地将任何URL或域名转发的工具，免费版有5个域名和每月20万个请求的限制。
  * [Elementor](https://elementor.com) - WordPress搭建网站的工具，提供免费计划，包含40多个基本小部件。
  * [Format Express](https://www.format-express.dev) - 实时在线格式化JSON、XML和SQL。
  * [FOSSA](https://fossa.com/) - 为第三方代码、许可证合规性与漏洞提供全面管理的工具。
  * [Hook

  * [QuickType.io](https://quicktype.io/) - 快速自动生成模型/类/类型/接口和序列化器，用于快速、安全地处理任何编程语言中的数据。将JSON转换为任何语言的优美且类型安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 一个移动友好的工具，提供多种随机生成的密钥和密码，可用来保护应用程序、服务或设备。
  * [ray.so](https://ray.so/) - 创建代码片段的精美图片。
  * [readme.com](https://readme.com/) — 使用简化的界面轻松制作美观的文档，对开源项目免费。
  * [redirection.io](https://redirection.io/) — 一个用于商业、营销和SEO管理HTTP重定向的云端工具。
  * [redirect.ing](https://redirect.ing/) - 快速且安全的域名重定向，无需管理服务器或SSL证书。免费计划包括10个域名和每月100,000次请求。
  * [redirect.pizza](https://redirect.pizza/) - 简单管理重定向，支持HTTPS。免费计划包含10个源和每月100,000次访问。
  * [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET、POST、PUT、DELETE和HEAD等常用请求方法。支持头信息和令牌身份验证。还提供基本登录系统以保存请求。
  * [Smartcar API](https://smartcar.com) - 为汽车提供API，用于定位、获取油箱、电池电量、里程等信息。
  * [snappify](https://snappify.com) - 为开发者创建出色的可视化效果。可制作美观的代码片段或专业技术演示。免费计划包含最多3个Snap，无限下载，每月最多5次AI代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据所给纬度和经度获取日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 提供实时PubSubHubbub兼容的订阅功能，支持出口和分析。免费版提供的定制较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查。在线分析结果。免费版允许

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) — 免费针对2台设备，对会话的数目和时长没有限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 提供按需支持和设备的长期访问权限（免费每天2个会话）
  * [RustDesk](https://rustdesk.com/) - 为大家提供的开源虚拟/远程桌面基础设施！
**[回到顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 提供免费/付费素材，如精灵、贴图集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自世界各地游戏艺术家的免费游戏素材。
  * [GameDevMarket](https://gamedevmarket.net) — 提供免费/付费素材，如2D、3D、音频、UI。
  * [OpenGameArt](https://opengameart.org) — 提供开源游戏素材，如音乐、音效、精灵和GIF。
  * [CraftPix](https://craftpix.net) — 提供免费/付费素材，如2D、3D、音频、UI、背景、图标、贴图集和游戏套件。
  * [Game Icons](https://game-icons.net/) — 提供免费的可编辑SVG/PNG图标，遵守CC-BY许可协议。
  * [LoSpec](https://lospec.com/) — 在线工具用于创作像素艺术和其他限制性数字艺术，提供大量教程和调色板列表供您的游戏选择。
  * [ArtStation](https://www.artstation.com/) — 市场提供免费/付费2D、3D资产、音频、图标、贴图集和游戏套件。此外，它还可用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/) — 社区提供资产，同时使用其免费计划可创建自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资产。
  * [3Dassets.one](https://3dassets.one/) — 提供8000多种免费/付费3D模型，并提供用于制作纹理的PBR材质。
  * [Kenney](https://www.kenney.nl/assets/) — 提供免费（采用CC0 1.0通用许可）2D、3D、音频和UI游戏素材。
  * [Poliigon](https://www.poliigon.com/) — 提供免费和付费纹理（可变分辨率）、模型、HDRIs和画笔。提供免费插件导出至软件如Blender。
  * [Freesound](https://freesound.org/) — 提供带有不同CC许可的免费协作音效库。

**[⬆️ 返回顶部](#目录

## Other Free Resources

  * [Wikimint开发者](https://developer.wikimint.com/p/tools.html) - 为Web开发者提供的免费工具，包括CSS压缩/解压缩、图像优化、图像调整尺寸、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可免费获取多达200小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) - 提供一个更好的带有子域名支持的`*.localhost.direct`泛域名证书，适用于本地开发中的安全SSL连接。
  * [Framacloud](https://degooglisons-internet.org/en/) - 由法国公益组织Framasoft列出的免费/开源软件和服务列表：[Framasoft](https://framasoft.org/en/)。
  * [GitHub Education](https://education.github.com/pack) - 为学生提供的免费服务集合。需要注册。
  * [Markdown工具](https://markdowntools.com) - 支持HTML、CSV、PDF、JSON和Excel转换为Markdown或反之的工具。
  * [微软365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) - 获取用于Microsoft 365平台开发的免费沙箱、工具和资源。订阅为90天的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括Windows），可续期，订阅会自动续期，直到活跃开发（根据使用数据和算法判断）。
  * [Pyrexp](https://pythonium.net/regex) - 免费在线正则表达式测试器和可视化调试工具。
  * [Red Hat for Developers](https://developers.redhat.com) - 为开发者提供免费访问Red Hat产品（如RHEL、OpenShift、CodeReady等），仅提供个人计划。还有供参考的免费电子书。
  * [smsreceivefree.com](https://smsreceivefree.com/) - 提供临时和无归属电话号码，免费使用。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 免费供测试发送和接收短信的服务。
  * [SimpleBackups.com](https://simplebackups.com/) - 自动备份服务，

  * [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 为你项目准备的100+按钮。
  * [WrapPixel](https://www.wrappixel.com/) — 提供Angular、React、VueJs、NextJS和NuxtJS创建的高质量免费和付费后台模板下载。
  * [Utils.fun](https://utils.fun/en) — 利用浏览器计算能力的日常和开发工具，包括水印生成、屏幕录制、编码解码、加密解密和代码格式化等，完全免费且不会上传任何数据到云端处理。
  * [Free Code Tools](https://freecodetools.org/) — 包括Markdown编辑器、代码压缩美化工具、二维码生成器、Open Graph生成器、Twitter卡片生成器等高效且完全免费的代码工具。
  * [regex101](https://regex101.com/) — 一个免费网站，用于测试和调试正则表达式，并提供编辑器、测试工具，以及学习正则的有用文档和资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) — 提供包括格式化器、压缩工具和转换器在内的100+开发工具。
  * [AdminMart](https://adminmart.com/) — 提供基于Angular、Bootstrap、React、VueJs、NextJS和NuxtJS的高质量免费和付费后台模板和网站模板。
  * [Glob tester](https://globster.xyz/) — 设计和测试glob模式的网站，还提供学习glob模式资源。
  * [SimpleRestore](https://simplerestore.io) — 能轻松恢复MySQL备份，远程数据库无需代码或服务器即可恢复备份。
  * [360Converter](https://www.360converter.com/) — 免费的转换平台，支持视频到文本、音频到文本、语音识别等转换，对短视频或YouTube教程可能很有帮助。
  * [QRCodeBest](https://qrcode.best/) — 创建自定义二维码，提供13个模板、隐私保护和个人品牌形象，支持跟踪像素、项目分类和无限团队座位。
  * [PostPulse](https://post-pulse.io) — 提升在线存在感，优化SEO和网站排名，每月AI生成的SEO优化内容到你的网站——免费版提供每月手动发布一篇文章的权限。
  * [PageTools](https