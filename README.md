# free-for.dev

开发人员和开源作者现在有许多服务提供免费试用，但找到它们需要时间来做明智的决定。

这是关于软件（SaaS、PaaS、IaaS 等）和其他提供的开发者免费试用版列表。

此特定列表的范围局限于基础设施开发者（系统管理员、DevOps 实践者等）可能发现有用的东西。我们喜欢所有免费服务，但保持主题可能会有些困难；此列表具有主观性，如果您不接受我的贡献，请不要感到冒犯。

这个列表源于 Pull Request、评审、想法和来自1600多人的工作。您也可以通过向 [Pull Request](https://github.com/ripienaar/free-for-dev) 发送贡献来添加更多服务或移除那些提供更改或已退休的服务。

[![跟踪极好的列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅适用于服务形式，而非自托管软件。为了符合资格，服务必须提供免费试用版，而不仅仅是免费试用。如果是以时间分桶的形式，免费试用版至少需要持续一年。我们还从安全角度考虑免费试用版，所以单点登录(SSO)是可以的，但我不会接受仅限于付费级别的TLS限制服务。

# 目录

  * [主要云提供商的免费限制](#主要云提供商的免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [APIs、数据和机器学习](#APIs、数据和机器学习)
  * [艺术作品存储库](#艺术作品存储库)
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
  * [设计与用户体验](#设计与用户体验)
  * [设计灵感](#设计灵感)
  * [开发者博客网站](#开发者博客网站)
  * [DNS（域名系统）](#DNS（域名系统）)
  * [与Docker相关](#与Docker相关)
  * [域名服务](#域名服务)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
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
  * [其他](#其他)
  * [监控](#监控)
  * [PaaS（平台即服务）](

## 主要云提供商的免费限制

  * [Google Cloud Platform](https://cloud.google.com):
    * App Engine - 28前端实例小时/天，9个后端实例小时/天
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro，30GB硬盘，5GB快照存储（仅限某些区域），每月从北美到所有区域目的地的1GB网络流出（不包括中国和澳大利亚）
    * Cloud Storage - 5GB，1GB网络流出
    * Cloud Shell - 基于Web的Linux shell/主IDE，拥有5GB持久存储空间。每周限制60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000GB-秒内存，180,000vCPU-秒的计算时间，以及每月从北美到所有地区目的地的1GB网络流出
    * Google Kubernetes Engine - 对一个区域能力模式集群的无管理费用。每个用户节点按照标准Compute Engine定价计费
    * BigQuery - 每月查询1TB，每月存储10GB
    * Cloud Build - 每天120分钟构建时间
    * Cloud Source Repositories - 最多5个用户，50GB存储和50GB出站流量
    * [Google Colab](https://colab.research.google.com) - 免费Jupyter Notebook开发环境
    * [idx.dev](https://idx.dev) Google Project IDX。线上运行在Google Cloud上的VSCode
    * 更详细列表 - <https://cloud.google.com/free>
  
  * [Amazon Web Services](https://aws.amazon.com):
    * [CloudFront](https://aws.amazon.com/cloudfront) - 每月1TB流出和每月200万函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch) - 10个自定义指标和10个警报
    * [CodeBuild](https://aws.amazon.com/codebuild) -

    * [开发测试实验室](https://azure.microsoft.com/services/devtest-lab/) - 提供快速、简单和精简的开发测试环境
    * [活动目录](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [活动目录B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月可存储50,000名用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限个私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 免费的10个并行作业，对于开源的Linux、macOS和Windows，可无限使用分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每日8,000条消息
    * [负载均衡器](https://azure.microsoft.com/services/load-balancer/) - 免费公共负载均衡IP (VIP)
    * [通知中心](https://azure.microsoft.com/services/notification-hubs/) - 1,000,000条推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/) - 每月15GB流入量(12个月)和5GB出流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1,000 RU的预留吞吐量
    * [静态网站](https://azure.microsoft.com/pricing/details/app-service/static/) - 使用免费SSL、身份验证/授权和自定义域构建、部署和托管静态应用和无服务器函数
    * [存储](https://azure.microsoft.com/services/storage/) - 12个月的5GB LRS文件或Blob存储
    * [认知服务](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（例如计算机视觉、翻译、人脸检测、机器人等），免费提供包括有限交易量的层级
    * [认知搜索](https://azure.microsoft.com/services/search/#features) - AI驱动的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes服务](https://azure.microsoft.com/services/kubernetes-service/) -

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 免费为无限数量的域名提供DNS服务，DDoS防护、CDN，还包括免费SSL、防火墙规则和页面规则、WAF、机器人阻止、免费无限制速率限制 - 每个域名1条规则、分析、电子邮件转发
    * [零信任与安全即服务](https://www.cloudflare.com/plans/zero-trust-services/) - 面向50个用户，提供24小时活动日志记录，三个网络位置
    * [Cloudflare隧道](https://www.cloudflare.com/products/tunnel/) - 无需帐户即可通过隧道将本地运行的HTTP端口暴露到 trycloudflare.com 的随机子域名上。[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)。更高级功能（TCP隧道、负载均衡、虚拟专用网络）在 [零信任](https://www.cloudflare.com/products/zero-trust/) 免费计划中提供。
    * [工作者](https://developers.cloudflare.com/workers/) - 免费在Cloudflare的全球网络上部署无服务器代码 - 每天10万次请求。
    * [工作者KV](https://developers.cloudflare.com/kv) - 每天10万次读请求，每天1000次写入请求，每天1000次删除请求，每天1000次列表请求，存储数据1 GB
    * [R2](https://developers.cloudflare.com/r2/) - 10 GB/月，每月100万条A类操作，每月100万条B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天500万行读取，每天100k行写入，1 GB存储
    * [页面](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署您的Web应用。每月500次构建，100个自定义域名集成SSL，无限访问权限，无限预览部署，以及通过Cloudflare工作者集成的全栈功能。
    * [队列](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 针对视觉构建和管理端到端云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 对于个人项目（包含一个部署服务器和一个静态站点）是免费的。Cloud 66为在任何云上构建、部署和扩展应用程序提供所需的一切，省去了“服务器管理”的烦恼。
  * [Pulumi](https://www.pulumi.com/) — 提供了一个现代的基础设施即代码平台，您可以使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。为最多500个资源提供免费的远程状态管理和团队协作。
  * [Scalr](https://scalr.com/) - Scalr是用于更好地在由Terraform管理的基础设施和配置上进行协作和自动化的产品。它支持完整的Terraform CLI、OPA集成以及分层配置模型。无单点登录（SSO）费用。所有功能都包含在内。每月可免费使用到50次运行。
  * [deployment.io](https://deployment.io) - Deployment.io 有助于开发人员自动化AWS部署。在免费版中，单个开发者可以部署不限数量的静态网站、网络服务和环境。每月免费提供20次作业执行，免费版包括预览和自动部署。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 免费提供最多5个用户的无限公开和私人 Git 存储库，以及CI/CD流程的Pipelines
  * [chiselapp.com](https://chiselapp.com/) — 免费无限的公开和私人 Fossil 存储库
  * [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，空间大小为100 MB，两名用户
  * [Codeberg](https://codeberg.org/) — 对免费和开源项目提供无限的公共和私人 Git 存储库（无协作限制）。由 [Forgejo](https://forgejo.org/) 提供动力。静态网站托管使用 [Codeberg Pages](https://codeberg.page/)。通过 [Codeberg的CI](https://docs.codeberg.org/ci/) 提供CI/CD流程。翻译托管服务为 [Codeberg Translate](https://translate.codeberg.org/)。还提供包和容器托管、项目管理以及问题跟踪
  * [GitGud](https://gitgud.io) — 免费无限的公共和私人存储库，永不过期。由GitLab和Sapphire驱动，但未提供CI/CD服务
  * [GitHub](https://github.com/) — 提供无限公开存储库，无限私人存储库（与无限协作者）。包含CI/CD、开发环境、静态托管、包和容器托管、项目管理和AI代码伴侣
  * [gitlab.com](https://about.gitlab.com/) — 提供无限公共和私人 Git 存储库，最多支持5名协作者。包含CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — 一个基于GitLab软件的Framasoft软件代码协作平台，提供CI、静态页面、项目页面和问题跟踪功能
  * [heptapod.net](https://foss.heptapod.net/) — 是GitLab社区版的一个友善分叉，支持Mercurial
  * [ionicframework.com](https://ionicframework.com/appflow) — 提供 Ionic 应用开发的存储库和工具，还包括一个 Ionic 存储库
  * [NotABug](https://notabug.org) — 是一个基于GNU许可的免费代码协作平台，用于自由许可

## APIs、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂 JSON 数据可视化、编辑和过滤成漂亮的表格网格。可以链接分享 JSON 数据。
  * [Zerosheets](https://zerosheets.com) - 将 Google Sheets 转成强大的 API，快速开发原型、网站、应用等。每月有 500 个免费请求。
  * [IP.City](https://ip.city) — 每天免费提供 100 个 IP 地理位置查询。
  * [Abstract API](https://www.abstractapi.com) — 具备多种用途的 API 集合，包括 IP 地理位置检测、性别识别和电子邮件验证。
  * [Apify](https://www.apify.com/) - 网页抓取和自动化平台，为任何网站创建 API 提取数据。提供现成的抓取器、集成代理和定制解决方案。免费账户每月包含 5 美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的 API 或自动化工具（如 Zapier 和 Airtable）自动生成图片和 PDF 文件。无需 CSS/HTML。免费计划包含每月 50 张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 了解 API 后端一切运行状况所需工具。自动验证和监控 API 合同。免费版本涵盖每月最多 20,000 个请求的服务器。
  * [APIVerve](https://apiverve.com) - 快速接入 120 多个高质量、一致性和可靠性打造的 API。免费计划每月包含 50 个 API 令牌。
  * [Arize AI](https://arize.com/) - 机器学习可观测性服务，监控模型并解决数据质量和性能漂移等问题。免费最多支持两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于快速构建即开即用的单页 web 应用。支持 Java、Node.js、Perl、Python 和 Ruby。
  * [Beeceptor](https://beeceptor.com) - 快速模拟 REST API，伪造 API 响应等。免费每日 50 次请求，公开面板，公开端点（任何有面板链接的人都

  * [CometML](https://www.comet.com/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册以及完整的数据血缘关系，覆盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可构建、处理和管理订单的可组合商业API。开发者计划每月允许100个订单，最多可免费提供1,000个条目（SKU）。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频、电子书等多种格式。提供REST API，支持Node.js、PHP和Python库。免费版限制文件大小和每天转换数量。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、区域、省份、城市等详细信息的API和微服务。免费版每日最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，用于应用间数据同步。提供实时仪表盘、值转换和存储功能。免费版无限用户、每月100次运行，无限集成。
  * [CraftMyPDF](https://craftmypdf.com/) - 从可复用模板自动生成PDF文档，有拖放编辑器和简单API。免费版包含每月100个PDF和3个模板。
  * [CurlHub](https://curlhub.io) - 代理服务，用于检验和调试API请求。免费计划包括每月10,000个请求。
  * [CurrencyScoop](https://currencyscoop.com) - 为金融科技应用提供实时货币数据API。免费版每月包含5,000次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者访问现代数据存储的数据，组织一致的数据定义，并将其发送给每一个应用。使用Cube Cloud提供更快的方法，免费版每天允许1GB数据传输。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单的免费文件分享服务，数据在访问后会自我销毁。可通过浏览器或命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 将Airtable与任何应用或API无代码连接

  * [DeepAR](https://developer.deepar.ai) — 提供一种SDK，为任何平台的增强现实面部滤镜。免费版最多提供每月10名活跃用户（MAU），并能追踪最多4张面孔。
  * [Deepnote](https://deepnote.com) - 款新的数据科学笔记本。Jupyter兼容实时协作并运行在云端。免费版包括无限个人项目、最多750小时的标准硬件和最多3个编辑器的团队使用。
  * [Diggernaut](https://www.diggernaut.com/) — 云基础的网络抓取和数据提取平台，能将任何网站转换为数据集或将其作为API使用。免费计划每月可发送5000个页面请求。
  * [Disease.sh](https://disease.sh/) — 提供一个免费API，为构建与Covid-19相关的有用应用程序提供准确的数据。
  * [Doczilla](https://www.doczilla.app/) — 用于从HTML/CSS/JS代码直接生成屏幕截图或PDF的SaaS API。免费版每月允许生成250份文档。
  * [Doppio](https://doppio.sh/) — 管理并私密存储PDF和屏幕截图的API，使用顶级渲染技术。免费版限额每月400份PDF和屏幕截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 开源REST API后台，为移动、Web和IoT应用提供服务。只需连接任何SQL/NoSQL数据库、文件存储系统或外部服务，即刻创建一个包含实时文档和用户管理的完整REST API平台。
  * [DynamicDocs](https://advicement.io) - 通过使用LaTeX模板生成PDF文档的JSON到PDF API。免费版每月允许50个API调用和访问模板库。
  * [Efemarai](https://efemarai.com) — ML模型和数据的测试调试平台。免费版为开发者提供每月30个调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 免费基于网络的HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) - PDF生成API，具有拖放模板编辑器和SDK，支持无代码集成。免费版提供250个每月页面，无限用户和3个

  * [Glitterly](https://glitterly.app/) - 通过基模板程序化生成动态图像。提供 RESTful API 和无代码集成。免费版每月包含 50 个生成图像和五个模板。
  * [GoodData](https://www.gooddata.com/) - 数据服务 - 创建交互式和富有洞察力的仪表板。免费版提供五个工作区和每个工作区 100 MB 的存储空间。
  * [Hex](https://hex.tech/) - 一个协作数据平台，用于笔记本、数据应用和知识库。免费社区版支持最多三个作者和五个项目。每个作者一个计算配置，有 4GB 内存。
  * [Hook0](https://www.hook0.com/) - Hook0 是一个开源的 Webhooks-as-a-Service (WAAS)，方便在线产品提供 Webhooks 功能。免费版提供每月可发送 3,000 个事件并在 7 天内保留历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 一个免费、快速且美观的 API 请求构建器。
  * [Hybiscus](https://hybiscus.dev/) - 使用简单的声明性 API 构建 pdf 报告。免费版包含每月最多 100 个单页报告，允许自定义颜色方案和字体。
  * [Invantive Cloud](https://cloud.invantive.com/) - 通过 Invantive SQL 或 OData4 访问超过 70 个（云）平台，如 Exact Online、Twinfield、ActiveCampaign 或 Visma。包含数据复制和交换。适用于开发人员和实施顾问的免费计划。针对特定平台提供免费版本，但数据量有限。
  * [ipaddress.sh](https://ipaddress.sh) - 服务，提供不同格式的 [公共 IP 地址](https://about.ipaddress.sh/)。
  * [ipbase.com](https://ipbase.com) - IP 地理定位 API，基础版每月提供 150 次请求。
  * [IP Geolocation](https://ipgeolocation.io/) - IP 地理定位 API。为开发人员提供的免费版每月的请求限制为 30,000 次（每天 1,000 次）。
  * [Abstract API](https://www

  * [IPTrace](https://iptrace.io) — 这是一个提供可靠和有用的IP位置数据的简单 API 服务。
  * [JSON2Video](https://json2video.com) — 视频编辑 API，自动化视频营销和社交媒体视频，可编程或无代码操作。
  * [JSON IP](https://getjsonip.com) — 返回客户端的公共IP地址，无需注册。免费版支持跨源资源共享(CORS)，直接从浏览器使用客户端侧 JavaScript 请求数据，对于监控客户端和服务器IP变化很有用。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 免费服务，帮助开发者存储 JSON 对象并将其作为 REST API 在应用程序中使用。
  * [JSONing](https://jsoning.com/api/) — 从 JSON 对象创建一个假的 REST API，可以自定义HTTP状态码、头信息和响应体。
  * [Konghq.com](https://konghq.com/) — API 市场和强大的私有和公开API工具。免费版有限制一些功能，如监控、报警和支持。
  * [Kreya](https://kreya.app) — 免费的 gRPC GUI 客户端，用于调用和测试 gRPC API，支持从服务器反射导入 API。
  * [Lightly](https://www.lightly.ai/) — 使用正确数据改进机器学习模型，免费使用最多1000个样本的数据。
  * [LoginLlama](https://loginllama.app) — 登录安全 API，检测欺诈和可疑登录，并通知客户，月度免费试用1000个登录次数。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 邮箱验证服务，通过真正邮件服务器连接确认邮件有效，免费版每月可验证300个邮箱。
  * [Market Data API](https://www.marketdata.app) — 提供股票、期权、共同基金等实时和历史金融数据，免费版每天可进行100次请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 提供全球实时和预报天气数据的 API。免费计划每日调用次数为400次。
  * [microlink.io](https://microlink.io/) — 将任何网站转换为数据，如元标签规范、美观的链接

  * [Mocki](https://mocki.io) - 这是一个工具，可让您创建与 GitHub 存储库同步的模拟 GraphQL 和 REST API。简单的 REST API 不需要注册即可免费开发和使用。
  * [Mocko.dev](https://mocko.dev/) — 在云端代理您的 API，选择要模拟的端点，并检查流量，免费。加快开发和集成测试速度。
  * [Mocky](https://designer.mocky.io/) - 一个简单的网络应用，用于生成自定义 HTTP 响应以模拟 HTTP 请求。它也提供 [开源版本](https://github.com/julien-lafont/Mocky)。
  * [reqres.in](https://reqres.in) - 一个免费托管的 REST API，可用于响应 AJAX 请求。
  * [microenv.com](https://microenv.com) — 用于开发者的假 REST API，可生成代码和 Docker 容器应用。
  * [Multi-Exit IP 地址检查器](https://ip.alstra.ca/) — 这是一个免费且简单的工具，可以帮助您在多个节点上检查您的出口 IP 地址，了解 IP 对不同全球区域和服务的显示情况。这对于测试基于规则的 DNS 切换工具如 Control D 有帮助。
  * [neptune.ai](https://neptune.ai/) - 记录、存储、显示、组织、比较和查询所有 MLOps 的元数据。个人用户：1 个成员，100 GB 的元数据存储，每月200小时监控。
  * [News API](https://newsapi.org) — 通过代码在互联网上搜索新闻并获取 JSON 结果。开发者每月可免费使用3,000个查询。
  * [GoCardless](https://gocardless.com/) — 免费开源银行数据 API。适用于PSD2。在欧盟和英国连接2300多家银行。
  * [Nyckel](https://www.nyckel.com) — 为图像和文本 ML 模型提供训练、部署和调用服务。免费训练：最多5,000件训练数据。每月1,000次模型调用免费。
  * [Observable](https://observablehq.com/) — 一个可用于创建、协作和学习数据的空间。免费：无限笔记本、无限发布、每个笔记本最多五个编辑器。
  * [OCR

  * [ PrefectCloud](https://www.prefect.io/cloud/) — 一个完整的数据流自动化的平台。所有计划每个月都包含20,000次免费运行。这对于大多数小型企业来说，已经足够驱动ETL了。
  * [Preset Cloud](https://preset.io/) - 一个托管的Apache Superset服务。对于5个用户以下的团队，永远免费，提供无限的仪表板和图表、无代码图表构建器以及协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 专为创作者和开发者设计的prompt工程平台。它提供prompt工程库、表单和API。免费计划提供一个prompt形成，一个prompt API端点，以及每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用AI和像GPT-3这样的大型语言模型，只需简单的Google Sheets电子表格公式，即可转换、理解并分析文本。每月前2,000个积分是免费的。
  * [Crawlbase](https://crawlbase.com/) — 能够在无需代理、基础设施或浏览器的情况下抓取和抓取网站。我们为您解决验证码，并防止您被封锁。首次通话免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 列出免费的公共API列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板自动创建图像。免费计划允许您每周创建多达100张图像。
  * [QuickMocker](https://quickmocker.com/) — 在自定义子域名下管理在线假API端点，将请求转发到本地URL进行Webhook开发和测试，使用正则表达式和多个HTTP方法处理URL路径，优先级端点，超过100种短代码（动态或假响应值）用于响应模板，导入OpenAPI（Swagger）JSON格式规范，代理请求，根据IP地址和授权头限制端点。免费账户提供一个随机子域名，十个端点，5个正则表达式URL路径，每个端点50个短代码，每天100个请求，以及请求日志中的50条历史记录。
  * [Rapidapi](https://rapidapi.com/) - 世界上最大的API中心，数百万开发者寻找并连接数千个API，使用有趣的

  * [ScraperBox](https://scraperbox.com/) - 使用真正Chrome浏览器及代理服务器轮流切换的抓取API，通过简单的API调用即可抓取任何网页。免费计划每月有1000个请求。
  * [ScrapingDog](https://scrapingdog.com/) - ScrapingDog处理数百万代理、浏览器和验证码，一个API调用即可获取网页HTML信息。它还包括Chrome和Firefox的Web Scraper以及用于快速抓取需求的软件。有免费计划。
  * [scrapinghub.com](https://scrapinghub.com) - 可视化界面和插件的数据抓取服务。免费计划包括共享服务器上的无限抓取。
  * [Simplescraper](https://simplescraper.io) - 在每次操作后触发Webhook。免费计划包含100个云端抓取信用。
  * [Select Star](https://www.selectstar.com/) - 是一个自动分析和文档化的智能数据发现平台，免费版提供1个数据源、最多100个表和10个用户。
  * [Sheetson](https://sheetson.com) - 立即将Google Sheets转换为RESTful API。有免费计划。
  * [Shipyard](https://www.shipyardapp.com) - 低代码云端数据流程控制平台。使用低代码模板和自定义代码（Python、Node.js、Bash、SQL）构建。免费开发者计划提供每月10小时运行时间，适用于单个用户，适合自动化多个工作流程。
  * [shrtcode API](https://shrtco.de/docs) - 无授权的免费短链接生成API，无请求限制。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API，返回Google、YouTube、Bing、Baidu等搜索结果的结构化JSON。免费计划包括每月100个成功的API调用。
  * [SmartParse](https://smartparse.io) - 是一个数据迁移和CSV到API平台，提供节省时间和成本的开发工具。免费版包括每月300个处理单位、浏览器上传、数据隔离等功能。
  * [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV后，可以通过API快速访问数据，便于更快地开发应用。免费计划包括2个API

  * [Weights & Biases](https://wandb.ai) — 开发人员首选的MLOps平台。通过实验跟踪、数据集版本管理和模型管理，更快地构建更好的模型。个人项目免费版，包含100 GB的存储空间。
  * [wit.ai](https://wit.ai/) — 为开发者提供的自然语言处理(NLP)。
  * [wolfram.com](https://wolfram.com/language/) — 在云端内置基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) — 可将任何网站转化为参数化的API。每月3万个API调用。
  * [ZenRows](https://www.zenrows.com/) — 威布尔抓取API和代理服务器，能够绕过任何反机器人解决方案，提供JavaScript渲染、代理轮换和地理定向功能。免费版提供1000个API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 带头部浏览器的网页抓取API，居民IP支持，价格实惠。每月1000个免费API调用，针对学生和非营利组织提供额外的积分。
  * [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，免费版限制同一IP地址每分钟45个请求。
  * [WebScraping.AI](https://webscraping.ai) — 简单的网页抓取API，内置解析、Chrome渲染和代理支持。每月2000个免费API调用。
  * [Zipcodebase](https://zipcodebase.com) — 免费的邮编API，访问全球邮政编码数据。每月1万个免费请求。
  * [huggingface.co](https://huggingface.co) — 使用Pytorch、TensorFlow和Jax构建、训练和部署NLP模型。免费版最多3万个输入字符/月。
  * [vatcheckapi.com](https://vatcheckapi.com) — 简单免费的VAT号验证API。每月500个免费请求。
  * [numlookupapi.com](https://numlookupapi.com) — 免费电话号码验证API，每月10万个免费请求。
  * [Volca](https://volca.io#api) — 提供编程语言和技术系统列表的

  * [Zuplo](https://zuplo.com/) - 免费的API管理平台，用于设计、构建并部署API到边缘。在几分钟内为任何API添加API密钥认证、速率限制、开发者文档和计费。它是OpenAPI原生的，并支持Web标准API和TypeScript。免费版提供最多10个项目、无限的生产边缘环境、250个API密钥、100,000个每月请求和1GB的传出数据。

**[⬆️ 返回目录](#目录)**

## 艺术作品存储库

  - [Artifactory](https://jfrog.com/start-free/) - 是一个支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的仓库服务。还包括包扫描工具XRay和CI/CD工具Pipelines（前身为Shippable），其免费版提供每月2,000分钟的CI/CD时长。
  - [central.sonatype.org](https://central.sonatype.org) - 是Apache Maven、SBT和其他构建系统的默认仓库。
  - [cloudrepo.io](https://cloudrepo.io) - 是一个基于云的私有和公开的Maven和PyPi仓库，开源项目免费使用。
  - [cloudsmith.io](https://cloudsmith.io) - 是一个简单、安全、中心化的服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等的存储库。有一款免费套餐以及为开源项目免费服务。
  - [jitpack.io](https://jitpack.io/) - 是一个针对GitHub上的JVM和Android项目的Maven仓库，公共项目免费。
  - [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) - 提供易于使用的Maven、RPM、DEB、PyPi、NPM和RubyGem包存储解决方案，带免费层级。
  - [repsy.io](https://repsy.io) - 提供1 GB免费的私有和公开的Maven仓库。
  - [Gemfury](https://gemfury.com) - 提供私有和公共的Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库。公共项目免费。
  - [paperspace](https://www.paperspace.com/) - 用于构建和扩展AI模型、开发、训练和部署AI应用的平台。免费版：公开项目，5GB存储，基础实例。
  - [RepoForge](https://repoforge.io) - 是一个云托管的私有Python、Debian、NPM包和Docker注册表服务。开源和公开项目有免费版。
  - [RepoFlow](https://repoflow.io) - 提供简化包管理的功能，支持npm、PyPI、Docker、Go、Helm等。10GB存储、10GB带宽、100个包和无限

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的云端代码片段管理器，适用于个人和团队的代码。 
  * [Bitwarden](https://bitwarden.com) - 存储、共享和同步敏感数据的最简单且最安全的解决方案。适用于个人、团队和企业。
  * [Braid](https://www.braidchat.com/) - 专为团队设计的聊天应用。免费版提供公共访问群体、无限用户、历史记录和集成。同时也有可自托管的开源版本。
  * [cally.com](https://cally.com/) - 让您轻松找到会议的最佳时间和日期。对于小团队和大型团队来说都很好用。
  * [Calendly](https://calendly.com) - 连接和安排会议的工具。免费计划提供每个用户1个日历连接和无限会话，提供桌面和移动应用。
  * [Discord](https://discord.com/) - 提供公共和私人聊天室，支持Markdown文本、语音、视频和屏幕共享。对用户无限量免费。
  * [Telegram](https://telegram.org/) - 适用于寻求快速、可靠的通讯和通话的每个人。它具有大群组、用户名、桌面应用和强大的文件共享功能，可能会吸引企业用户和小团队。
  * [Dubble](https://dubble.so/) - 免费的步骤说明创作器。截屏、记录过程以及与团队协作。还支持离线屏幕录制。
  * [Duckly](https://duckly.com/) - 实时与团队沟通，包括IDE、终端共享、语音、视频和屏幕共享。适合小型团队，免费版有限。
  * [Dyte](https://dyte.io) - 开发者友好的直播视频和音频SDK，提供协作插件提升生产力和参与度。免费版包括每月10,000分钟的实时视频/音频使用时间。
  * [evernote.com](https://evernote.com/) - 组织信息的工具，可以分享笔记并与他人协作。
  * [Fibery](https://fibery.io/) - 连接的工作空间平台，单用户免费提供2 GB磁盘空间。
  * [flock.com](https://flock.com) - 团队沟通的快速途径，免费版提供无限消息、频道、用户、应用和集成。
  *

  * [HeySpace](https://hey.space) - 提供任务管理、聊天、日历、时间线和视频通话的工具。最多支持5个用户免费。
  * [helplightning.com](https://www.helplightning.com/) — 使用增强现实进行远程协助，免费版不包含分析、加密和支持。
  * [ideascale.com](https://ideascale.com/) — 提供客户提交想法和投票功能，免费版适用于1个社区的25名成员。
  * [Igloo](https://www.igloosoftware.com/) — 内部分享文档、博客、日历等的平台，最多10个用户可免费使用。
  * [Keybase](https://keybase.io/) — 作为Slack的开源替代品，保证聊天和文件的安全。适用于家庭、团队和企业。
  * [Google Meet](https://meet.google.com/) — 用于商务在线视频会议的工具。提供安全、便捷的会议体验。
  * [通过Slack运行的 Meet](https://meetslack.com) — 从Slack中直接发起Google Meet会议，免费无限制。
  * [Livecycle](https://www.livecycle.io/) — 为跨职能产品团队和开源项目提供无缝协作的平台。
  * [Lockitbot](https://www.lockitbot.com/) — 在Slack中预订和锁定共享资源，如房间、开发环境和服务器，最多支持2个资源免费。
  * [MarkUp](https://www.markup.io/) — 用于收集网页、PDF和图片上的反馈工具。
  * [Proton Pass](https://proton.me/pass) — 集成了邮箱别名、2FA、分享和密码密钥的密码管理器。支持在web、浏览器扩展和移动/桌面应用上使用。
  * [Visual Debug](https://visualdebug.com) — 提供视觉反馈以改善开发者与客户的沟通。
  * [meet.jit.si](https://meet.jit.si/) — 支持一键式视频通话和屏幕共享，完全免费。
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 微软 Teams 是一个基于聊天的数字化中心，将对话、内容和应用整合在一个场合中。最多支持500,000个用户免费。
  * [Miro](https://miro

  * [普林普斯](https://pendulums.io/) - Pendulums 是一个免费的时间追踪工具，它使用简洁的界面和有价值的统计数据帮助您更好地管理时间。
  * [普姆](https://pumble.com) - 一个免费的团队聊天应用。无限用户和消息历史，永远免费。
  * [Raindrop.io](https://raindrop.io) - 私有且安全的书签应用，支持 macos、Windows、Android、iOS 和 Web。免费提供无限书签和协作功能。
  * [element.io](https://element.io/) - 一个基于 Matrix 构建的去中心化和开源通信工具，支持群聊、直接消息、加密文件传输、语音和视频通话，以及与其他服务的简单集成。
  * [Rocketchat](https://rocket.chat/) - 开源的全渠道通信平台，具有矩阵联邦、与其他应用的桥接、无限消息传递和完整的消息历史功能。
  * [seafile.com](https://www.seafile.com/) - 私有或云端存储，文件分享、同步、讨论。云端版只有 1 GB 容量。
  * [Sema](https://www.semasoftware.com/) - 免费的开发者展示工具，可用于将多个仓库中的贡献汇总成一份报告。
  * [通过浏览器进行屏幕分享](<https://screensharing.net:]) - 免费屏幕共享工具，无需下载或注册即可直接与协作者分享屏幕。完全免费。
  * [Slab](https://slab.com/) - 一个现代的团队知识管理系统。最多支持 10 名用户是免费的。
  * [Slack](https://slack.com/) - 无限用户版本提供有限的功能，是免费的。
  * [Spectrum](https://spectrum.chat/) - 免费创建公共或私有社区。
  * [StatusPile](https://www.statuspile.com/) - 一种堆栈状态跟踪工具。您能跟踪上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容策划和笔记的视觉协作应用。免费版支持 3 块墙壁、无限用户和 1 GB 存储。
  * [Stacks](https://betterstacks.com/) - 内容工作区，集成了笔记、链接和文件存储，以帮助应对信息过载

  * [tldraw.com](https://tldraw.com) — 然而免费开源的白板和绘图工具，拥有智能箭头、对齐、注释和SVG导出功能。它还支持多人协作编辑。VS Code也有官方免费插件。
  * [BookmarkOS.com](https://bookmarkos.com) — 免费提供完整的书签管理器、标签管理器和任务管理器，它在可自定义的在线桌面环境中支持文件夹协作。
  * [typetalk.com](https://www.typetalk.com/) — 在网站或移动设备上通过即时消息与团队分享与讨论想法。
  * [Tugboat](https://tugboat.qa) — 自动预览每一份拉取请求，全程免费，非营利组织还有额外的免费纳米层次。
  * [whereby.com](https://whereby.com/) — 单击视频通话，曾经叫作appear.in，现在是免费的。
  * [windmill.dev](https://windmill.dev/) — 开源开发者平台，用极少的Python和TypeScript脚本快速构建生产级别的自动化和内部应用。免费用户最多可以建立和加入三个非预付费工作空间。
  * [vadoo.tv](https://vadoo.tv/) — 简化视频托管和营销，一键上传视频，记录、管理、分享等。免费版提供最多10个视频、1GB存储和每月10GB带宽。
  * [userforge.com](https://userforge.com/) — 连接在线用户故事和上下文映射，帮助设计和开发保持同步，最多支持3个角色和2个协作者，免费使用。
  * [wistia.com](https://wistia.com/) — 视频托管，提供观看者分析、高清视频配送和营销工具，了解访问者，免费版提供最多25个视频和带有品牌标识的播放器。
  * [wormhol.org](https://www.wormhol.org/) — 简单的文件共享服务，最多上传5GB的文件，与任意多的用户共享。
  * [Wormhole](https://wormhole.app/) — 加密文件分享，最长24小时。大文件大于5GB会使用点对点方式进行传输。
  * [zoom.us](https://zoom.us/) — 提供加密视频和网络会议附加功能。

  * **Pullflow**：一款具备人工智能增强的代码审查协作平台，支持GitHub、Slack和VS Code。
  * **Webex**：提供视频会议服务，免费版每场提供40分钟会议时间，适用于100名参与者。
  * **RingCentral**：视频会议服务，免费版提供50分钟会议时间，适用于100名与会者。
  * **GitBook**：用于记录和文档化的技术知识平台，涵盖产品文档到内部知识库和API，对个人开发者有免费套餐。
  * **transfernow**：简单快速的文件传输和分享接口，无强制订阅即可发送大文件，包括照片、视频等。
  * **paste.sh**：基于JavaScript和加密的简易粘贴网站。
  * **Revolt.chat**：开源的**Discord**替代方案，注重隐私并提供大部分Discord特性的免费版本。Revolt是一个安全、快速的综合应用，所有功能均免费，并支持官方和非官方插件。
  * **Tencent RTC**：腾讯实时通信提供群组音视频通话解决方案，新用户首年免费享有10,000分钟通话分钟数。
  * **Pastefy**：一个美观且简单的过去粘贴工具，支持可选的客户端加密、多标签粘贴、API、带高亮的编辑器等功能。
  * **SiteDots**：便于网站项目直接反馈的工具，无需模拟、画布或技巧，免费版完全功能可用。

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — 提供Drupal站点的托管服务。开发人员可免费使用，还有免费开发工具（如Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) — 头盔型内容管理系统。云端的内容管理和分发API。提供一个免费的Community空间，包含5个用户，25,000条记录，48种内容类型和两种语言。
  * [Cosmic](https://www.cosmicjs.com/) — 头盔型 CMS 和API工具包。开发人员可使用免费个人计划。
  * [Crystallize](https://crystallize.com) — 集成了电商功能的头盔型PIM。内置GraphQL API。免费版包括无限用户，1000个目录项目，每月5GB带宽和每月25,000次API调用。
  * [DatoCMS](https://www.datocms.com/) — 为小型项目提供免费版。DatoCMS基于GraphQL的CMS。入门级免费版提供每月100,000次调用。
  * [Directus](https://directus.io) — 完全免费且开源的头盔型CMS，用于管理本地或云端的资产和数据库内容。没有限制或费用。
  * [FrontAid](https://frontaid.io/) — 内容存储在Git仓库内的JSON格式的头盔型CMS。没有限制。
  * [kontent.ai](https://www.kontent.ai) - 内容即服务（Content-as-a-Service）平台，提供了头盔型CMS的所有便利，同时还能赋能营销人员。开发者计划有两用户，无限项目，每个用户有两个环境，500个内容项，两种语言的分发和管理API，以及定制元素支持。可根据实际需求选择更详细的计划。
  * [Prismic](https://www.prismic.io/) — 内容管理界面和全托管、可扩展的API。社区计划提供无限API调用、文档、自定义类型、资产和多语言支持给一个用户。对于开源项目有更大的免费版本。
  * [Sanity.io](https://www.sanity.io/) — 结构化内容平台，拥有开源编辑环境和实时托管的数据存储。无限项目，免费提供无限管理用户，三个非管理员用户，两个

  * [Storyblok](https://www.storyblok.com) - 一个为开发者和营销人员设计的无头CMS，适用于所有现代框架。社区免费版提供管理API、可视化编辑器、十个源、自定义字段类型、国际化（不限制语言/区域）功能、资产管理器（最多2500个资产）、图片优化服务、搜索查询、Webhook，以及每月250GB的流量。
  * [WPJack](https://wpjack.com) - 在5分钟内在任何云端部署WordPress！基础免费版包含1台服务器、2个网站、免费SSL证书以及无限定时任务。无时间限制或到期日期，随你构建网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [AppInvento](https://appinvento.io/) - AppInvento 是一个免费的无代码应用构建器。在自动生成的后端代码中，用户可以访问全部源代码并使用无限的API和路由进行深入集成。免费计划包括三个项目、五个表格和一个Google插件。

* [Cody AI](https://sourcegraph.com/cody) - Cody 是一个代码AI助手，它利用AI和对代码库的深入理解帮助你更快地编写和理解代码。Cody 支持多种 LLM（包括本地推理），支持各种 IDE，支持所有主流编程语言，并有一个免费计划。免费计划为开发者每月提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500个自动补全（使用Starcoder 16b）。

* [DhiWise](https://www.dhiwise.com/) - DhiWise的创新代码生成技术让你轻松地将Figma设计转化为动态的Flutter和React应用程序，优化你的工作流程，帮助你比以往更快地创建卓越的移动和网页体验。

* [Codeium](https://www.codeium.com/) - Codeium 是一个免费的AI驱动的代码补全工具，支持20多种编程语言（如Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等）并与大多数独立和网络IDE集成。

* [Fern](https://buildwithfern.com) - 使用Fern编写API定义并利用它们生成TypeScript、Python、Java、Go等流行语言的SDK和客户端库。完全支持OpenAPI。免费版最多生成20个端点的代码。

* [Metalama](https://www.postsharp.net/metalama) - 仅限C#。Metalama在编译时动态生成代码骨架，保持源代码整洁。开源项目是免费的，商用友好版包括三个方面。

* [Supermaven](https://www.supermaven.com/) - Supermaven是针对VSCode、JetBrains和Neovim的快速AI代码补全插件。免费版提供无限的内联补全。

* [tabnine.com](https://www.tabnine.com/) - Tabnine通过提供从全球所有代码中学习到的见解，帮助开发者更快地创建更好的软件。提供了插件。

* [v0.dev](https://v0.dev/) - v0使用AI

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 提供撰写、评审及部署代码的完整工作流，可免费创建一个用户账户，以及一个存储空间为100 MB的仓库
  * [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互式测试，免费支持3分钟的MS IE 9在Vista下的1024 x 768分辨率 session
  * [codacy.com](https://www.codacy.com/) — 自动化代码审查服务，适用于PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript，对公开仓库不限制，对私有仓库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 用于DevOps的自动化基础设施作为代码审查工具，支持GitHub、Bitbucket和GitLab（包括自托管版本），提供了标准语言及Ansible、Terraform、CloudFormation、Kubernetes等的分析，开源版本免费
  * [CodeBeat](https://codebeat.co) — 多语言的自动化代码审查平台，对于公开仓库提供了免费版，支持集成Slack和电子邮件通知
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查服务，开源项目是免费的，对于私人仓库有限制（最多4名同事），学生和学术机构也可免费使用
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（SaaS），开源项目和1个免费私有仓库免费
  * [CodeFactor](https://www.codefactor.io) — 支持Git的自动化代码审查工具，包含无限用户、公开仓库和一个免费私有仓库
  * [coderabbit.ai](https://coderabbit.ai) — 基于AI的代码审查工具，与GitHub/GitLab集成。免费版支持每小时200文件、3次审查和50次对话。对开源项目永远免费
  * [codescene.io](https://codescene.io/) — 代码场景根据开发者如何使用代码来优先处理技术债务，并可视化团队耦合和系统掌握等组织因素。开源项目免费
  * [CodSpeed](https://codspeed.io) — 自动性能跟踪CI管道。在部署前检测性能退化，得益于精准和一致的指标。开源

  * [gerrithub.io](https://review.gerrithub.io/) — [Gerrit](https://review.gerrithub.io/) 代码审查服务，免费用于 GitHub 存储库
  * [gocover.io](https://gocover.io/) — 为任何 Go 包提供代码覆盖率
  * [goreportcard.com](https://goreportcard.com/) — 用于 Go 项目的代码质量检查，针对开源项目是免费的
  * [gtmetrix.com](https://gtmetrix.com/) — 提供网站优化报告以及详尽的改进建议
  * [holistic.dev](https://holistic.dev/) — 用于 Postgresql 优化的最顶尖静态代码分析器。服务性能、安全性和架构数据库问题的自动检测
  * [houndci.com](https://houndci.com/) — 提供针对 GitHub 提交的代码质量评论，对开源是免费的
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构。Moderne 提供框架迁移、代码分析和修复，以及代码规模下无与伦比的转换能力，帮助开发者专注于构建新事物而非维护旧的。对开源项目免费
  * [reviewable.io](https://reviewable.io/) — 为 GitHub 存储库的代码审查服务，对公开的或个人库免费
  * [parsers.dev](https://parsers.dev/) — 提供作为服务的抽象语法树解析器和中间语言编译器
  * [scan.coverity.com](https://scan.coverity.com/) — 为 Java、C/C++、C# 和 JavaScript 提供静态代码分析，对开源项目免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，对开源项目免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — 适用于 GitHub pull requests 和 commits 的编程语言智能差异工具，对公共仓库免费
  * [shields.io](https://shields.io) — 提供开源项目质量指标的徽章
  * [sonarcloud.io](https://sonarcloud.io) — 自动源代码分析，支持 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 等多种语言，对

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 搜索和32种不同包管理器的相关依赖更新，对开源项目免费
  * [Namae](https://namae.dev/) - 搜索GitHub、GitLab、Heroku、Netlify等多个网站，检查您的项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 全面的文本基础代码搜索，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) — 识别代码中值得回过头改进的部分，如`TODO`注释（和其他标记）。
  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现并分享代码片段，支持强大的代码截图工具，预设模板和链接功能。  

**[⬆️ 返回顶端](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — **AccessLint**将自动化的网页可访问性测试带入了您的开发工作流程中。开源项目和教育目的免费可用。
  * [appcircle.io](https://appcircle.io) — 一个企业级移动 DevOps 平台，可自动化移动应用的构建、测试和发布商店，加快高效的发布周期。免费提供30分钟内的最大构建时间、每月20次构建和1次并发构建。
  * [appveyor.com](https://www.appveyor.com/) — 专为Windows的持续部署服务，开源项目免费。
  * [Argonaut](https://argonaut.dev/) - 几分钟内部署应用和基础设施到云。支持Kubernetes和Lambda环境下的自定义和第三方应用部署。免费层允许无限数量应用和部署，针对5个域名和2个用户。
  * [bitrise.io](https://www.bitrise.io/) — 针对移动应用(CI/CD)的工具，可为原生或混合应用提供服务。免费版包括每月200次构建，每次10分钟内构建时间，两个团队成员。开源项目额外提供45分钟构建时间和+1并发，以及不限团队大小。
  * [buddy.works](https://buddy.works/) — 提供CI/CD，免费提供五个项目和一次并发运行(每月120次执行)。
  * [Buildkite](https://buildkite.com) — CI管道: 免费版适合3名用户并提供每月5千个工作时间。测试分析的免费开发者版包含每月10万次测试执行，开源项目可进一步免费扩展现有功能。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。必要时免费提供给20名用户和10个数据库实例。
  * [CircleCI](https://circleci.com/) — 包含所有托管CI/CD服务功能的免费计划，支持GitHub、GitLab和Bitbucket仓库。执行时长每月免费至6000分钟，不限协作人员，私有项目30个并行作业，开源项目最多80,000分钟的免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) — 公开GitHub仓库免费。
 

  * [Make](https://www.make.com/en) — 工作流自动化工具，它允许您通过界面连接应用并自动化工作流程。它支持很多应用和最受欢迎的API。对公共GitHub存储库免费，免费版包含100 MB存储空间，1000个操作和至少15分钟的最小间隔。
  * [Spacelift](https://spacelift.io/) — 为基础设施即代码的管理平台。免费计划功能包括：IaC协作、Terraform模块注册、聊天操作整合、Open Policy Agent持续资源合规性、通过SAML 2.0实现SSO，以及访问公共工作者池：每月最多200分钟。
  * [microtica.com](https://microtica.com/) — 提供现成基础设施组件的创业环境，免费在AWS上部署应用，并支持生产工作负载。免费套餐包括1个环境（在你的AWS账户中）、2个Kubernetes服务、每月100分钟构建时间和20次每月部署。
  * [Nx Cloud](https://nx.dev/ci) — 通过远程缓存、任务分布式执行（跨机器）甚至自动化大端到端测试运行，加快您的单体仓库在CI上的速度。免费版适用于最多30个贡献者，包含慷慨的150k积分。
  * [blacksmith](https://www.blacksmith.sh/) — 专为GitHub Actions设计的管理性能运行器，提供每月3000分钟免费使用，无需信用卡即可获取。
  * [Terramate](https://terramate.io/) — 为Terraform、OpenTofu和Terragrunt之类的IaC工具提供编排和管理平台。免费版支持2用户，包括所有功能。

**[⬆️ 返回顶部](#目录)**

## Testing

  * [Applitools.com](https://applitools.com/) — 智能视觉验证工具，适用于Web、本地移动应用和桌面应用程序。它几乎与所有自动化解决方案（如Selenium和Karma）和远程运行者（Sauce Labs，Browser Stack）集成，开源免费。还有一个针对单个用户免费版本，每周有限制的检查点数。
  * [Appetize](https://appetize.io) — 用基于云的Android手机和平板电脑模拟器以及iPhone和iPad模拟器在浏览器中直接测试您的Android和iOS应用。免费版包括两个并发会话，每月使用时长为30分钟，不限应用大小。
  * [Apptim](https://apptim.com) — 提供无需性能工程技能的人检查应用性能和用户体验（UX）的移动测试工具。桌面版使用您的设备是完全免费的，不论是iOS还是Android，测试次数不限。
  * [Argos](https://argos-ci.com) - 开源视觉测试开发工具，免费版无限项目，每月5000个截图限制。对开源项目免费。
  * [Bencher](https://bencher.dev/) — 一个持续基准工具套件，用于检测持续集成（CI）性能退化。对所有公开项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源免费版](https://www.browserstack.com/open-source?ref=pricing)。
  * [BugBug](https://bugbug.io/) - 专为Web应用设计的轻量级测试自动化工具，无需编程就能使用。您可以在自己的电脑上免费运行无限测试。额外的云监控和CI/CD集成需每月付费。
  * [Checkly](https://checklyhq.com) - 基于现代DevOps的代码驱动合成监控。以传统供应商的低价监控API和应用。由“监控即代码”工作流和Playwright提供支持。对开发者有慷慨的免费计划。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，检查网站遵循的50多项SEO、速度和安全最佳实践。对于较小的网站提供免费版本。
  * [cypress.io](https://www.cypress.io/) — 针对浏览器一切的快速、简单和可靠的测试工具。Cypress Test Runner永远

  * [knapsackpro.com](https://knapsackpro.com) - 使用最优的测试套件并行化来加速你的测试。在任何持续集成平台上分割Ruby和JavaScript测试，节省时间。免费计划支持最多10分钟的测试文件，对开源项目提供无限时的免费计划。
  * [lambdatest.com](https://www.lambdatest.com/) — 使用Selenium和Cypress进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)。
  * [loadmill.com](https://www.loadmill.com/) - 自动分析网络流量生成API和负载测试。每月免费模拟高达50个并发用户60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用进行全视觉回归测试。无限团队成员，开源项目完全免费，每月可保留7,000个快照。
  * [octomind.dev](https://www.octomind.dev/) - 通过AI辅助的测试用例生成，自动生成、运行并维护Playwright UI测试。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、样式指南或组件库增加视觉测试。无限团队成员、演示应用和无限项目，每月5,000个快照。
  * [preflight.com](https://preflight.com) - 无需编码的自动化Web测试。在浏览器上录制测试，对UI更改有韧性，并在Windows机器上运行。免费计划包含每月50次测试运行，包括视频、HTML会话等。
  * [qase.io](https://qase.io) - 为Dev和QA团队提供的测试管理系统。管理测试用例、创建测试运行、执行测试、跟踪缺陷、测量影响。免费版包含所有基础功能，提供500MB附件空间以及最多3个用户。
  * [Repeato](https://repeato.app/) - 基于电脑视觉和AI的移动应用自动化测试工具。支持原生应用、Flutter、React Native、Web、Ionic等框架。免费版限10个iOS和10个Android测试，但包含付费计划大部分功能，包括无限测试运行。
  * [Requestly](https://

  * [testingbot.com](https://testingbot.com/) — 进行 Selenium 浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) — 用于发布自动化测试结果的仪表板和作为代码实现手动测试的框架，通过GitHub。该服务 [对开源项目免费](https://github.com/marketplace/testspace-com)，每月有450套结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行测试框架集成。开源软件开发者、个人、教育工作者和小团队可以通过请求得到折扣或免费服务，超过基础免费项目。
  * [UseWebhook.com](https://usewebhook.com) — 从浏览器捕获并检查 webhooks。将其转发到本地或从历史记录中重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用 Java 或 TypeScript 构建可扩展的用户界面，并利用集成工具、组件和设计系统，加快迭代速度、提升设计质量以及简化开发流程。无限项目可享受五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) — 在集成期间使用独特的 URL 调试和检查 webhooks 和 HTTP 请求。完全免费，可以创建无限数量的 URL 并接收建议。
  * [webhook.site](https://webhook.site) — 使用自定义 URL 验证 webhooks、出站HTTP请求或电子邮件。总是免费提供临时 URL 和电子邮件地址。
  * [webhookbeam.com](https://webhookbeam.com) — 设置 webhooks 并通过推送通知和电子邮件进行监控。

**[回到目录顶部](#目录)**

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 集成的应用安全平台，涵盖SCA（源代码安全分析）、SAST（静态应用程序安全测试）、CSPM（云安全 posture management）、DAST（动态应用安全测试）、机密管理、IaC（基础设施即代码）、恶意软件、容器扫描、过时软件...免费版提供两个用户，可扫描10个仓库，1个云环境，2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 一个采用自然语言处理和机器学习的网站和API的垃圾邮件过滤器。免费版每日限制200个请求/域名。
  * [atomist.com](https://atomist.com/) — 一种更快、更方便的自动化开发工作流工具，目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊网络服务（AWS）的安全审查和合规监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 高置信度针对公共云基础设施的指示器，部分在github上开源 [https://github.com/unknownhad/AWSAttacks]。完整列表可通过API获取。
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，可以对代码、文件、目录或容器进行不可磨灭的证明
  * [crypteron.com](https://www.crypteron.com/) — 专为.NET和Java应用设计的云端，面向开发者的安全平台，阻止数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单的、用户友好的网页应用，无需处理复杂的工具或编程语言，即可分析和解码/编码数据。就像一个包含加密与解密工具的瑞士军刀。所有功能免费，没有使用限制。你也可以选择开源，自行托管。
  * [DAS](https://signup.styra.com/) — Styra DAS 免费版，包括全程的政策管理，用于创建、部署和管理Open Policy Agent (OPA) 的授权操作。
  * [Dat

  * [Internet.nl](https://internet.nl) - 用于测试现代互联网标准的工具，如IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE。
  * [keychest.net](https://keychest.net) - 提供SSL到期管理以及集成CT数据库的证书购买服务。
  * [letsencrypt.org](https://letsencrypt.org/) - 为所有主流浏览器信任的免费SSL证书颁发机构。
  * [meterian.io](https://www.meterian.io/) - 安全检查Java、JavaScript、.NET、Scala、Ruby和Node.js项目的依赖库漏洞。私有项目免费，开源项目无限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) - 检查并修复网站中的安全漏洞。
  * [opswat.com](https://www.opswat.com/) - 电脑、设备、应用、配置的免费安全监控，25个用户和30天历史记录。
  * [openapi.security](https://openapi.security/) - 快速检查OpenAPI/Swagger基础的API安全性的免费工具，无需注册。
  * [pixee.ai](https://pixee.ai) - 自动化的GitHub机器人，为Java代码库提交PR来自动解决漏洞，其他语言即将上线。
  * [pyup.io](https://pyup.io) - 监控Python依赖的安全漏洞并自动更新。私有项目免费，开源项目无限。
  * [qualys.com](https://www.qualys.com/community-edition) - 发现web应用漏洞并审计OWASP风险。
  * [report-uri.io](https://report-uri.io/) - 处理CSP和HPKP违规报告。
  * [ringcaptcha.com](https://ringcaptcha.com/) - 使用电话号码作为唯一标识的工具，部分内容免费。
  * [seclookup.com](https://www.seclookup.com/) - 提供SIEM域名威胁指标增强和详细域名信息，免费获取50,000次查询[这里](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) - 查找并修复开源依赖库的已知安全漏洞。开源项目无限测试和修复，私有项目每月限制200次。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) - 深入分析任何SSL web

  * [Virgil Security](https://virgilsecurity.com/) — 提供端到端加密、数据库保护、物联网安全等功能的工具和服务。适用于最多250个用户的应用程序，免费。
  * [Vulert](https://vulert.com) - 持续监控你的开源依赖项中的新漏洞，并提供修复建议，无需安装或访问你的代码库，开源项目免费。
  * [Escape GraphQL 快速扫描](https://escape.tech/) - 一键安全扫描你的GraphQL端点。无需登录，免费。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索公共GitHub存储库、gist、问题和评论中的2000万个暴露的机密信息。

**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 适用于应用和API的细粒度授权服务。免费版提供多达1000个每月活跃用户（MAU）和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素认证（MFA）、无密码验证等功能。包含前端和后端应用的SDK。免费版提供最多1000个MAU和五个身份提供商。
  * [Auth0](https://auth0.com/) - 提供托管SSO服务。免费版涵盖了25,000个MAU，无限社交媒体连接，自定义域名等。
  * [Authgear](https://www.authgear.com) - 分分钟即可为应用程序加上无密码登录、一次性密码（OTPs）、2FA、SSO等功能。所有前端资源都包含在内。免费提供5000个MAU。
  * [Authress](https://authress.io/) - 提供身份验证登录和访问控制，支持无限身份提供商，包括Facebook、Google、Twitter等。前1000个API调用是免费的。
  * [Authy](https://authy.com) - 多设备的双因素认证（2FA），提供备份。可替代谷歌身份验证器。前100次成功验证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一套完整的授权管理系统，用于编写、测试和部署访问策略。提供细粒度授权和访问控制，免费提供100个每月活跃主体。
  * [Clerk](https://clerk.com) - 用户管理、身份验证、2FA/MFA，以及预先构建的UI组件，如登录、注册、用户资料等。免费提供10,000个每月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) - 作为服务（aaS）的身份与访问管理（IAM）。免费提供100个用户和一个领域。
  * [Corbado](https://www.corbado.com/) - 添加无密码认证至新应用或现有应用，无限MAU免费。
  * [Descope](https://www.descope.com/) - 高度定制化的身份验证流程，提供无代码

  * [Stack Auth](https://stack-auth.com) - 这是一个开源的身份验证解决方案，强大且易用。五分钟左右就可以开始，可以免费自托管，也提供一个带10,000个免费月活跃用户的管理SaaS版本。
  * [SuperTokens](https://supertokens.com/) - 是一个原生集成到您的应用中的开源用户身份验证，快速开始并控制用户体验。免费版支持5,000个MAUs。
  * [Warrant](https://warrant.dev/) - 是一款为您的应用提供企业级授权和访问控制服务的托管服务。免费版包含1百万每月API请求和1,000个授权规则。
  * [ZITADEL Cloud](https://zitadel.com) - 是一个易于设置并支持多租户（B2B）场景的用户管理和访问管理解决方案。免费版提供25,000个已认证请求，包含所有安全功能（无付费版需要支付 OTP、无密码、策略等功能的费用）。
  * [PropelAuth](https://propelauth.com) - 利用几行代码即可立即向您的企业销售，最多200个用户和10,000封事务性邮件（带有"由PropelAuth提供动力"的水印商标）。
  * [Logto](https://logto.io/) - 开发、安全并管理产品的用户身份，适用于身份验证和授权。免费提供5,000个MAUs的可用服务，也提供开源的自托管选项。
  * [WorkOS](https://workos.com/) - 免费的用户管理和身份验证服务供1百万MAUs使用。支持电子邮件/密码、社交登录、Magic Auth、MFA等功能。

**[⬆️ 回顶部](#目录)**

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 用于确保您的移动应用按预期工作的首选平台。免费版：一个应用，分析，无限版本和安装，以及反馈收集。
  * [Loadly](https://loadly.io) - 提供iOS和Android应用的测试分发服务，完全免费，包含无限下载，高速下载，无限上传。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版：应用上传，密码保护的链接，1天过期，10次安装。
  * [InstallOnAir](https://www.installonair.com) - 远程分发iOS和Android应用。免费版：无限上传，私有链接，客人2天过期，注册用户60天。
  * [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发。免费计划包括一个应用项目，三个应用版本，500 MB存储，以及每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费版包括五个应用，每月50次下载，单个文件最大大小为100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。管理1个AWS微实例免费
  * [Esper](https://esper.io) — 用于 Android 设备的 MDM 和 MAM，具有 DevOps。一个用户许可和25MB应用存储空间，赠送100台设备。
  * [jamf.com](https://www.jamf.com/) — 为 iPad、iPhone 和 Macs 的设备管理，免费赠送3台设备
  * [Miradore](https://miradore.com) — 设备管理服务。及时了解设备车队情况并确保设备安全，免费版提供基本功能。还可无限设备免费，但有限制。
  * [moss.sh](https://moss.sh) — 帮助开发者部署和管理Web应用和服务器。每月最多25次 git 部署，免费使用。
  * [runcloud.io](https://runcloud.io/) — 主要针对 PHP 项目的服务器管理。免费赠送1台服务器。
  * [ploi.io](https://ploi.io/) — 服务器管理工具，轻松管理并部署服务器和网站。免费使用一台服务器。

## 消息传递和流媒体

  以下是推荐的一些实时消息服务提供商，包含了它们的主要特性和免费计划：

1. [Ably](https://www.ably.com/) - 实时信息服务，支持存在、持久和保证交付。免费计划包括每月300万条消息、100个峰值连接和100个峰值通道。

2. [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ服务，小 lemur 建议：每月最大100万消息、20个并发连接、100个队列和最多1万条队列消息。可在不同AZ中添加节点。

3. [courier.com](https://www.courier.com/) - 提供推送、应用内、邮件、聊天、SMS等多通道消息，包括模板管理。免费计划包含每月1万条消息。

4. [engagespot.co](https://engagespot.co/) - 用于开发者的多渠道通知基础设施，预设一个应用内收件箱和无代码模板编辑器。免费计划包含每月1万条消息。

5. [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 连接到云原生物联网消息代理，免费连接100个设备，无需信用卡（长期赠送100设备）。

6. [knock.app](https://knock.app) - 为开发者提供的通知基础设施，支持多种渠道（如应用内、邮件、SMS、Slack等）。免费计划包含每月1万条消息。

7. [NotificationAPI.com](https://www.notificationapi.com/) - 添加用户通知至任何软件，5分钟完成。免费计划包括每月1万条通知（含100条短信和自动电话）。

8. [Novu.co](https://novu.co) - 开源通知基础设施，管理和整合邮件、短信、直接消息、应用内和推送等渠道，免费版包含每月3万条通知，90天数据保留。

9. [pusher.com](https://pusher.com/) - 实时消息服务，配套100个同时连接和20万/日消息量。

10. [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务，免费包含20个同时连接和10万/日事件。

11. [synadia.com](https://synadia.com/ngs) - NATS.io

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最多免费100k日志条目，保留24小时
  * [logentries.com](https://logentries.com/) — 每月免费5GB存储，保留时间7天
  * [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留时间7天
  * [logz.io](https://logz.io/) — 每天最多免费1GB，保留1天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 由Manage Engine提供支持的管理日志服务。免费版提供50GB存储，15天存储保留，7天搜索。
  * [papertrailapp.com](https://papertrailapp.com/) — 48小时搜索，7天归档，每月50MB
  * [sematext.com](https://sematext.com/logsene) — 免费至每天500MB，保留7天
  * [sumologic.com](https://www.sumologic.com/) — 免费至每天500MB，保留7天
  * [logflare.app](https://logflare.app/) — 每月每个应用最多12,960,000条记录，保留3天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理系统。每月免费1GB，保留3天
  * [logzab.com](https://logzab.com/) — 集成审计跟踪管理系统。每月免费1,000条用户操作记录，最多5个项目，保留期限1个月。
  * [openobserve.ai](https://openobserve.ai/) - 200GB/月免费摄入，15天保留

---

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 无缝集成无限项目，无限字符串和开源项目的协作者
  * [gitlocalize.com](https://gitlocalize.com) - 免费且不限制私有和公共仓库
  * [Lecto](https://lecto.ai/) - 自动翻译API，提供免费层级（30次免费请求，每个请求可翻译1000个字符）。已与[Loco Translate](https://wordpress.org/plugins/loco-translate/) WordPress 插件集成。
  * [lingohub.com](https://lingohub.com/) — 3个用户免费，免费开源项目永不改变
  * [localazy.com](https://localazy.com) - 1000个源语言字符串免费，不限语言、贡献者数量，创业公司和开源项目有优惠
  * [Localeum](https://localeum.com) - 1000个字符串免费，一个用户，无限语言，无限项目
  * [localizely.com](https://localizely.com/) — 免费开源项目
  * [Loco](https://localise.biz/) — 前1200个翻译免费，无限翻译者，每项目10种语言，每项目1000个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限的免费版，用户上限5人，免费开源项目
  * [POEditor](https://poeditor.com/) — 免费支持1000个字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 头100个翻译键免费，无限字符串，无限语言，创业公司优惠
  * [Texterify](https://texterify.com/) - 单个用户免费
  * [Tolgee](https://tolgee.io) - 免费 SaaS 提供有限翻译次数，可选择永久免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 免费开源项目
  * [Translation.io](https://translation.io) - 免费开源项目
  * [Translized](https://translized.com) - 1000个字符串内免费，一个用户，无限语言和项目
  * [webtranslateit.com

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) - 提供20个5分钟间隔的监控器和可定制的健康检查页面，即使是商业用途也能使用。享受无限的实时电子邮件和Telegram通知。开始使用无需信用卡。
  * [Pingmeter.com](https://pingmeter.com/) - 包含5个10分钟间隔的监控，支持SSH、HTTP、HTTPS和自定义TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 免费提供前端、后端、数据库等监控以及免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) - 免费方案可获取24小时的数据指标，应用性能管理代理功能有限，仅适用于一个Java、一个.NET、一个PHP和一个Node.js。
  * [appneta.com](https://www.appneta.com/) - 免费版提供1小时的数据保留。
  * [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的全面管理。免费版本适合小流量使用（64MB日志存储上限）。
  * [assertible.com](https://assertible.com) - 自动化API测试和监控，团队和个人有免费版本。
  * [bleemeo.com](https://bleemeo.com) - 免费版包含3台服务器、5个监控器、无限用户、无限仪表盘和报警规则。
  * [checklyhq.com](https://checklyhq.com) - 开源端到端和深度API监控，针对开发者，免费版包含5个用户和50,000次运行检查。
  * [cloudsploit.com](https://cloudsploit.com) - AWS安全性和配置监控，免费版包含无限的按需扫描、无限用户和存储账户。订阅版提供自动化扫描、API访问等更多功能。
  * [cronitor.io](https://cronitor.io/) - 对cron作业、网站、API等提供性能洞察和运行状况监控。免费版提供5个监控器。
  * [datadoghq.com](https://www.datadoghq.com/) - 免费版适用于最多5个节点的监控。
  * [deadmanssnitch.com](https://deadmansnitch.com/) - 用于监控cron作业，免费提供1个监控，推荐他人注册可以获得

  * [keychest.net/speedtest](https://keychest.net/speedtest) - 独立的网络速度测试和对Digital Ocean的TLS握手延迟测试
  * [letsmonitor.org](https://letsmonitor.org) - SSL监控，对于不超过5个监控是免费的
  * [linkok.com](https://linkok.com) - 在线检查断开链接，针对小网站（100页以内）完全免费，对开源项目完全免费
  * [loader.io](https://loader.io/) - 免费负载测试工具，但有限制
  * [netdata.cloud](https://www.netdata.cloud/) - Netdata是一个开源工具，用于实时收集指标。这是一个增长中的产品，也可以在GitHub找到！
  * [newrelic.com](https://www.newrelic.com) - 新的Relic观测平台，旨在帮助工程师创建更完美的软件。从单体应用到无服务器应用，您可以为所有服务进行仪器分析、调试和优化整个软件栈。免费版提供每月100GB的数据接入量，一个免费的完整访问用户和无限的免费主要用户。
  * [Middleware.io](https://middleware.io/) - Middleware观测平台提供对应用和栈的完整可见性，让您可以在规模上监控和诊断问题。对开发社区的免费版提供了日志监控（最多100万个日志事件）、基础设施监控和APM（对最多2台主机）。
  * [nixstats.com](https://nixstats.com) - 对于一台服务器免费。电子邮件通知、公开状态页面、60秒间隔等。
  * [OnlineOrNot.com](https://onlineornot.com/) - 提供网站和服务端API的在线监控，以及对 cron 作业和计划任务的监控。也提供状态页面。免费前五次检查，间隔3分钟。免费版通过Slack、Discord和电子邮件发送警报。
  * [OntarioNet.ca, CN Test](https://cntest.ontarionet.ca) - 检查网站是否被中国的大防火墙封锁。它通过比较来自中国和美国服务器的DNS结果和ASN信息来识别DNS污染。
  * [opsgenie.com](https://www.opsgenie.com/) - 强大的警报管理和操作员维护服务，以确保服务持续运行。免费版最多5个用户。
  * [pa

  * [sematext.com](https://sematext.com/) — 免费提供24小时指标，无限服务器，10个自定义指标，500,000个自定义指标数据点，无限面板，用户等。
  * [sitemonki.com](https://sitemonki.com/) — 网站，域名，Cron和SSL监控，每个类别免费5个监测器。
  * [sitesure.net](https://sitesure.net) - 网站和cron监控 - 免费2个监测器。
  * [skylight.io](https://www.skylight.io/) — 铁轨只提供100,000个请求的免费。
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping，DNS等。
  * [stathat.com](https://www.stathat.com/) — 免费开始10个统计指标，无过期时间。
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试免费但有限制。
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，免费3个监测器。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控，运行时监控，DNS和域名监控。免费监控10台服务器，10个运行时间，10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费3个位置和20个主要网络服务数据源。
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，免费50个监测器。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 5个网站的免费监控，60秒级间隔，公开状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 提供端到端的事件管理，警报，轮值管理，响应执行平台的网络操作，项目可靠性工程，DevOps团队。免费包含5个用户。
  * [instatus.com](https://instatus.com) - 极简10秒构建美丽状态页面。无限子账号和

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供屏幕截图和点击轨迹的 JavaScript 错误追踪。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) - 初始体验后，每月最多2,000个错误免费。
  * [elmah.io](https://elmah.io/) - 为网页开发者提供错误日志和监控。开源项目提供免费的小企业订阅。
  * [Embrace](https://embrace.io/) - 移动应用监控。小型团队免费，每年最多支持100万用户会话。
  * [exceptionless](https://exceptionless.com) - 实时错误、功能、日志报告等。免费3,000个事件/月或单用户，开源并可轻松自托管以实现无限制使用。
  * [GlitchTip](https://glitchtip.com/) - 简单的开源错误追踪，兼容开源Sentry SDK。每月1,000个事件免费，或可以自托管，无限制使用。
  * [honeybadger.io](https://www.honeybadger.io) - 例外、维护和定时任务监控。对小团队和开源项目（每月12,000个错误）免费。
  * [memfault.com](https://memfault.com) - 云端设备可观测性和调试平台。免费支持Nordic、NXP和Laird设备。
  * [rollbar.com](https://rollbar.com/) - 用于异常和错误监控的平台，免费计划提供每月5,000个错误、无限用户，30天保留。
  * [sentry.io](https://sentry.io/) - Sentry 实时追踪应用异常，有小规模免费计划。每月5,000个错误/1用户免费，自托管无限制使用。
  * [Axiom](https://axiom.co/) - 提供存储0.5 TB日志的方案并保留30天。包含了与Vercel和邮件/Discord通知器等功能的高级数据查询集成。
  * [Semaphr](https://semaphr.com) - 提供手机应用的全面停止开关，免费一体化解决方案。
  * [Jam](https://jam.dev) - 开发者友好的一键式错误报告，免费计划提供无限数量的Jam。
 

## Search

  * [algolia.com](https://www.algolia.com/) — 提供包含拼写纠正、相关性和UI库的托管搜索解决方案，轻松创建搜索体验。免费的 "Build" 计划包含了100万个文档和每月1万个搜索。还提供了[ Algolia开发者文档搜索](https://docsearch.algolia.com/)服务，也是免费的。
  * [bonsai.io](https://bonsai.io/) — 免费提供1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 提供内容搜索服务，基于Web的UI组件插件，帮助用户搜索您产品中的相关内容、导航、功能等，提升发现性。免费版适用于每月1000名活跃用户，不限命令数量。
  * [Magny](https://magny.io) - 是一款SaaS服务，帮助实现命令面板（如应用内搜索），显著减少用户查找应用内容的时间，提升用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费提供3个索引、每个索引10万个文档、不限制的全文/向量/混合搜索，以及60天的分析数据。
  * [searchly.com](http://www.searchly.com/) — 免费提供2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 提供免费的课程和认证，涉及数据分析、信息安全、Web 开发等多个领域。
  * [The Odin Project](https://www.theodinproject.com/) - 免费开源平台，专注于JavaScript和Ruby，为Web开发提供课程。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 一个提供大量经验型专业人士简历模板的免费平台，可以克隆、编辑并下载，适用于ATS优化。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 由行业领先专家提供的免费短课程，一小时左右就能体验最新的人工智能生成工具和技术。
  * [LabEx](https://labex.io) - 通过互动实验室和实际项目，培养Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 提供覆盖开发所有方面的免费学习路线图，从区块链到 UX 设计。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费符合认证的课程，如网络安全、网络和Python等主题。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT 开放课程网页是一个在线出版物，免费分享来自超过2500门MIT课程的材料，面向全球学习者和教育者。YouTube频道可以在[@mitocw](https://www.youtube.com/@mitocw/featured)找到。
  * [W3Schools](https://www.w3schools.com/) - 提供关于HTML、CSS、JavaScript等的免费网页开发教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 提供免费在线教程，学习基础和高级HTML/CSS、JavaScript和SQL。

**[⬆️ 返回目录](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费的测试用暂存电子邮件
  * [AhaSend](https://ahasend.com) - 交易性电子邮件服务，每月免费1000封邮件，免费版无限域名、团队成员、Webhook和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名电子邮件转发，免费创建无限数量的电子邮件别名
  * [Antideo](https://www.antideo.com) — 免费版每小时可进行10次电子邮件验证、IP和电话号码验证，无需信用卡。
  * [Brevo](https://www.brevo.com/) - 每月免费9000封邮件，每天300封
  * [OneSignal](https://onesignal.com/) - 每月免费10000封邮件，无需信用卡
  * [Bump](https://bump.email/) - 免费10个Bump电子邮件地址和一个自定义域名
  * [Burnermail](https://burnermail.io/) - 免费5个Burner电子邮件地址，1个邮箱和7天邮箱历史记录
  * [Buttondown](https://buttondown.email/) - 新闻稿服务。免费100名订阅者
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收和交易性出站发送电子邮件 - 每月免费10000封邮件
  * [Contact.do](https://contact.do/) - 链接式联系表单（ bitly 用于联系表单）
  * [debugmail.io](https://debugmail.io/) - 用于开发人员的易于使用的测试邮件服务器
  * [DNSExit](https://dnsexit.com/) - 免费使用 domain 下最多2个电子邮件地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) - 免费每月发送9000封邮件，每日最多300封
  * [EmailOctopus](https://emailoctopus.com) - 免费2500名订阅者和每月10000封邮件
  * [EmailJS](https

  * [ImprovMX](https://improvmx.com) – 免费邮箱转发。
  * [EForw](https://www.eforw.com) – 免费为一个域名提供邮箱转发。从您的域名接收和发送电子邮件。
  * [Inboxes App](https://inboxesapp.com) – 创建每天最多3个临时邮箱，然后在方便的Chrome扩展程序中删除它们。非常适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) – 免费临时/丢弃邮箱，每天最多自动删除3天的邮件。开源并且可以自托管。
  * [mail-tester.com](https://www.mail-tester.com) – 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月免费20个。
  * [dkimvalidator.com](https://dkimvalidator.com/) – 由roundsphere.com提供的免费服务，检查邮件的DNS/SPF/DKIM/DMARC设置是否正确。
  * [mailcatcher.me](https://mailcatcher.me/) – 捕获邮件并通过Web界面提供。
  * [mailchannels.com](https://www.mailchannels.com) – 邮件API，提供REST API和SMTP集成，每月免费3,000封邮件。
  * [Mailcheck.ai](https://www.mailcheck.ai/) – 阻止用户使用临时邮箱注册，每月120个请求（约86,400个）。
  * [Mailchimp](https://mailchimp.com/) – 免费提供500个订阅者和1,000封每月邮件。
  * [Maildroppa](https://maildroppa.com) – 免费提供100个订阅者和无限数量的邮件以及自动化功能。
  * [MailerLite.com](https://www.mailerlite.com) – 免费提供每月1,000个订阅者和12,000封邮件。
  * [MailerSend.com](https://www.mailersend.com) – 邮件API，SMTP。为事务性邮件提供免费服务，每月免费3,000封邮件。
  * [mailinator.com](https://www.mailinator.com/) – 免费公开电子邮件系统，您可以使用任何邮箱。
  * [Mailjet](https://www.mailjet.com

  * [QuickEmailVerification](https://quickemailverification.com) — 免费在免费层级验证100个电子邮件每日，还有其他免费API如DEA检测器、DNS查找、SPF检测器等。
  * [Resend](https://resend.com) — 为开发者提供的交易电子邮件API。每月3,000封电子邮件，每天免费100封，一个自定义域名。
  * [Sender](https://www.sender.net) — 每月最高15,000封电子邮件，最多2,500个订阅者。
  * [SendGrid](https://sendgrid.com/) — 免费赠送每天100封电子邮件和2,000个联系人。
  * [Sendpulse](https://sendpulse.com) — 每月赠送500个订阅者，每月15,000封邮件免费。
  * [SimpleLogin](https://simplelogin.io/) — 开源且可自托管的电子邮件别名/转发解决方案。5个免费别名，无限带宽，无限回复/发送。教育人员（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 不限数量的免费新闻通讯服务。开始收费时开始付款。
  * [Sweego](https://www.sweego.io/) — 欧洲为开发者提供的交易电子邮件API。免费赠送每天500封邮件。
  * [Takeout](https://takeout.bysourfruit.com) — 不断更新的服务使得发送电子邮件变得容易。免费赠送每月500封事务电子邮件。
  * [temp-mail.io](https://temp-mail.io) — 免费的临时电子邮件服务，可以同时使用多个电子邮件并转发。
  * [tinyletter.com](https://tinyletter.com/) — 免费赠送每月5,000个订阅者。
  * [Touchlead](https://touchlead.app) — 多功能营销自动化工具，包括线索管理、表单建立和自动化，免费版有限数量的线索和自动化功能。
  * [trashmail.com](https://www.trashmail.com) — 免费提供一次性电子邮件地址和自动过期地址转发。
  * [Tuta](https://tuta.com/) — 支持安全电子邮件的免费服务供应商，内置端到端加密，无广告，无

     - **[Vault](https://zoho.com/vault)**：密码管理，个人可使用。
   - **[Showtime](https://zoho.com/showtime)**：适用于最多5名远程参会者的培训会议软件。
   - **[Notebook](https://zoho.com/notebook)**：Evernote的免费替代品。
   - **[Wiki](https://zoho.com/wiki)**：免费提供给3名用户，存储50MB，不限页面数量，支持zip备份、RSS/Atom feed、访问控制及自定义CSS。 
   - **[Subscriptions](https://zoho.com/subscriptions)**：免费版包含20个客户/订阅和1个用户，Zoho负责所有支付处理。存储最后40个订阅数据。
   - **[Checkout](https://zoho.com/checkout)**：产品计费管理，最多3页和50个支付选项。
   - **[Desk](https://zoho.com/desk)**：客户服务管理，包括三个代理、私人知识库和电子邮件工单。可通过[Assist](https://zoho.com/assist)与1名远程技术人员和5台无人值守设备集成。
   - **[Cliq](https://zoho.com/cliq)**：团队聊天软件，有100GB存储，无限用户，每个频道100个用户，并支持SSO。
   - **[Campaigns](https://zoho.com/campaigns)**：电子邮件营销。
   - **[Forms](https://zoho.com/forms)**：表单创建器。
   - **[Sign](https://zoho.com/sign)**：无纸化签名。
   - **[Surveys](https://zoho.com/surveys)**：在线调查。
   - **[Bookings](https://zoho.com/bookings)**：预约安排。
   
   * **[Maileroo](https://maileroo.com)**：SMTP中继和用于开发者的电子邮件API。每月限发5,000封邮件，不限域名，提供免费电子邮件验证、黑名单监控、邮件测试等功能。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat是一个面向开发者的特性标志服务，提供无限团队规模、出色支持和合理的价格。免费计划包含10个标记、两个环境、1个产品以及每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 有信心地发布功能；在Web、移动和服务器端应用程序上管理特性标志。使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源特性标志和A/B测试提供者，具有内置的贝叶斯统计分析引擎。免费版支持3名用户，无限功能标志和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的特性标志、A/B测试、分析和应用配置，具有Git风格的版本控制和本地内存中的同步标志评估。5个团队成员免费，包含无限功能标志和A/B测试。
  * [Molasses](https://www.molasses.app) - 强大的特性标志和A/B测试。免费版支持3个环境，每个环境五个特性标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域特性开关管理平台。免费计划包含10个标志、两个环境和无限请求。SDK、分析仪表板、发布日历、Slack通知和其他所有功能都在无尽的免费计划内。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析的强大平台。免费计划提供无限用户、标志、实验和动态配置，支持每月100万次事件。
  * [Abby](https://www.tryabby.com) - 开源特性和A/B测试。使用配置代码和完全类型化的TypeScript SDK。与Next.js和React等框架的强大集成。提供慷慨的免费试用版和便宜的扩展选项。

## 字体

  * [dafont](https://www.dafont.com/) - 该网站上的字体是作者的财产，它们可能是免费软件、共享软件、演示版本或公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，如@font-face、单位转换器、字体渲染器和字体提交器。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供的免费字体可用于商业工作，精心选择了这些字体并以易于使用的格式提供。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可通过下载或链接到Google的CDN轻松安装到网站上。
  * [FontGet](https://www.fontget.com/) - 提供各种字体下载，并按标签整齐排列。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务，不断增长的专业级字体库，用于个人和商业用途完全免费。
  * [Befonts](https://befonts.com/) - 提供可用于个人或商业用途的多种独特字体。
  * [Font of web](https://fontofweb.com/) - 检测网站上使用的字体以及它们的用法。
  * [Bunny](https://fonts.bunny.net) - 重视隐私的Google Fonts
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业收费字体供个人使用，并可输入文本进行快速过滤。
  * [fonts.xz.style](https://fonts.xz.style/) - 一个用于通过CSS向网站提供字体家族的免费和开源服务。
  * [Fontsensei](https://fontsensei.com/) - 用户标记开放源代码的Google字体，具备CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#主要内容)**

## 表单

  * [Feathery](https://feathery.io) - 高级且面向开发者的表单构建器。创建注册、登录、用户引导、支付流程、复杂财务应用等。免费版每月允许250次提交和5个活动表单。
  * [Form-Data](https://form-data.com) - 零代码表单后端。垃圾邮件过滤器、邮件通知、自动响应、Webhook、Zapier、重定向、AJAX或POST等功能。免费版提供无限表单、每月20次提交，以及带有Form-Data徽标的额外2000次提交。
  * [FabForm](https://fabform.io/) - 为智慧开发人员设计的表单后端平台。免费版每月允许250次提交。现代友好界面。可与Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) — HTML表单提交的终点。含通知、垃圾邮件阻止器和符合GDPR的数据处理。基本使用有免费计划。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划每月允许100次提交。
  * [formingo.co](https://www.formingo.co/) - 为静态网站提供简单HTML表单。无需注册即可开始，免费计划每月500次提交，允许自定义回复邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限形式，每月50次提交，垃圾邮件保护、邮件通知、拖拽式设计工具（支持HTML导出）及更多功能，如定制字段规则、团队和与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
  * [formlets.com](https://formlets.com/) — 在线表单，无限单页面表单/月，每月100次提交，邮件通知。
  * [formspark.io](https://formspark.io/) - 将表单转化为电子邮件服务，免费版允许无限形式、每月250次提交，支持客户服务团队。
  * [Formspree.io](https://formspree.io/) — 使用HTTP POST请求发送邮件。免费版每表格每月50次提交限制。
  * [Formsubmit.co](https://formsubmit.co/) - 用于HTML表单的简单表单

  * [Pageclip](https://pageclip.co/) - 免费版允许一个网站、一个表单和每月1,000次提交。
  * [Qualtrics调查](https://qualtrics.com/free-account) - 使用这款一流的工具创建专业表单和调查。有50多个专家设计的调查模板。免费账户有限制，单个调查活动，每份调查100个响应，以及8种响应类型。
  * [Screeb](https://screeb.app/) - 应用内调查和产品分析工具，帮助解读用户行为。永远免费计划允许每月500个活跃用户，无限响应和事件，众多集成，导出，定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 为您的网站提供功能强大且易于使用的后端表单，永远免费计划允许每月50次提交、250MB文件存储，Zapier集成，CSV/JSON导出，自定义重定向，自定义响应页面，Telegram和Slack机器人，单次电子邮件通知。
  * [Survicate](https://survicate.com/) - 使用一个工具从所有来源获取反馈并发送后续调查。自动分析反馈并提取见解，使用AI。包括免费电子邮件、网站、产品或移动调查，AI调查创建器以及每月25个响应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 免费轻松集成HTML表单，无需服务器端代码。用户提交表单后，会将表单内容发送到您注册的电子邮件地址。
  * [stepFORM.io](https://stepform.io) - 问卷和表单建造工具。免费计划提供五个表单，每个表单最多3步，每月50个响应。
  * [Typeform.com](https://www.typeform.com/) - 在网站上包含设计精美的表单，免费版仅限每个表单10个字段和每月100次响应。
  * [WaiverStevie.com](https://waiverstevie.com) - 提供电子签名服务，附带REST API。您可以通过webhook接收通知。免费计划将签名文档水印化，但允许无限封套和签名。
  * [Web3Forms](https://web3forms.com) - 为静态和JAMStack网站提供无需编写后端代码的联系表单

  * [feedback.fish](https://feedback.fish/) - 免费计划总共允许收集25条反馈。提供了与React和Vue组件的轻松集成。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Keywords AI](https://keywordsai.co) - 最好的LLM监控平台。只需两行代码，即可调用200多个LLM。每月免费请求10,000次，平台功能全免费！

  * [Portkey](https://portkey.ai/) - 生成AI应用的控制面板，包含观测套件和AI网关。每月免费发送和记录10,000个请求。

  * [Braintrust](https://www.braintrustdata.com/) - 提供评估、提示游乐场和数据管理的Gen AI工具。免费计划每周可提供1,000行私人评估。

  * [Findr](https://www.usefindr.com/) - 全能搜索，同时查找所有应用。搜索助手能基于你的信息回答问题。免费版提供无限统一搜索和每天5个协同查询。

  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。只要带上自己的API密钥，整个平台都免费。

  * [Clair](https://askclair.ai/) - 医疗AI参考工具。学生免费使用专业工具套件，包括开放搜索、临床概述、药物评论、相互作用、ICD-10代码和 stewardship。还包括专业套件的免费试用。

  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，调试LLM应用性能问题。免费计划每月提供50,000条跟踪记录，支持任何LLM的观测，并兼容所有观测客户端。

  * [Ultra AI](https://ultraai.app) - 为你的产品打造AI指挥中心。功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型降级和用户速率限制。终身免费计划提供每月10,000+个请求，但不包含缓存。

  * [Comet Opik](https://www.comet.com/site/products/opik/) - 评估、测试并在开发和生产周期中部署LLM应用程序。

  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，协助团队协作调试、分析和迭代应用。免费版每月提供50,000次观察，包含全部平台功能。[开源](https://github.com/langfuse/langfuse)

  * [Pollinations

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) - 用于bootstrap、bootswatch和fontawesome.io的CDN
  * [cdnjs.com](https://cdnjs.com/) - 简单、快速、可靠的。cdnjs 是一个免费的、基于 Cloudflare 的开放源码 CDN 服务，已被超过 11% 的网站信任
  * [developers.google.com](https://developers.google.com/speed/libraries/) - Google Hosted Libraries 是一个内容分发网络，用于最受欢迎的开源 JavaScript 库
  * [Stellate](https://stellate.co/) - Stellate 是一个快速、可靠的 GraphQL API CDN，并且对前两个服务是免费的。
  * [jsdelivr.com](https://www.jsdelivr.com/) - 一个免费、快速和可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) - 微软AjaxCDN托管流行第三方 JavaScript 库，如jQuery，并简化了将它们添加到 Web 应用程序的流程
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 提供免费的 DDoS 防护和SSL证书
  * [Skypack](https://www.skypack.dev/) - 是一个 100% 完全基于 ES 模块的 JavaScript CDN。一个月内对一个域名提供100万次请求的免费服务。
  * [raw.githack.com](https://raw.githack.com/) - 替代了 **rawgit.com**，由 Cloudflare 直接托管文件
  * [section.io](https://www.section.io/) - 用于快速启动和管理 Varnish Cache 解决方案的简单方式。据说适用于一个站点，永远免费
  * [statically.io](https://statically.io/) - 提供 Git 存储库（GitHub、GitLab、Bitbucket）资产、WordPress 相关资源和图像的 CDN
  * [toranproxy.com](https://toranproxy.com/) - 代理Packagist和GitHub。永不失败的 CD。仅限个人使用，一个开发者，无支持
  * [UNPKG](https://unpkg.com/) - 用于 npm 上的所有内容的 CDN
  * [weserv](https://

## PaaS

  * [anvil.works](https://anvil.works) - 使用Python开发Web应用。免费版提供无限数量的应用和每30秒超时限制。
  * [appwrite](https://appwrite.io) - 无限项目，无项目暂停功能（支持WebSocket）和认证服务。免费版包含1个数据库，3个存储桶，每个项目5个函数。
  * [configure.it](https://www.configure.it/) - 移动应用开发平台，两个项目免费，功能有限但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 复合式平台，免费供商业用途，为Java/Kotlin开发者提供跨平台移动应用开发工具，无限项目数量。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，来自TypeScript的自动内容管理系统。内置A/B测试、内容细分和实时分析，适用内容丰富的和企业级电子商务网站。免费版上限为每月5,000页浏览量，或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 用于运行JavaScript、TypeScript和WebAssembly的分布式系统，全球范围内运行。免费版包括每天100,000个请求和每月100 GiB数据传输。
  * [domcloud.co](https://domcloud.co) - 提供CI/CD功能的Linux托管服务，支持GitHub、SSH、MariaDB/Postgres数据库。免费版有限制存储1 GB/网络1 GB/1个免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析提供的后端框架，提供自动基础设施、无模板代码等。提供爱好项目免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在用户个人GitHub仓库中的开发者上提供AWS服务部署。免费版包括1名开发者，AWS费用通过AWS扣费或使用免费额度。
  * [gigalixir.com](https://gigalixir.com/) - 提供永不睡眠的1个免费实例和Elixir/Phoenix应用专用的免费版PostgreSQL数据库，限制2个连接，10,000行，无备份功能。
  * [Glitch](https://glitch.com/) - 具有代码分享和实时协作功能的免费公共托管

  * [Napkin](https://www.napkin.io/) - 一款具有500MB内存的函数式服务（FaaS），默认超时15秒，并且每月提供5000次免费API调用，限速每秒5次。
  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务。Meteor的针对Meteor应用的平台即服务包括免费的MongoDB共享主机和自动SSL。
  * [Northflank](https://northflank.com) — 用于构建、部署微服务、任务和管理数据库的强大界面、API和命令行接口。无缝从源控制和外部Docker注册表扩展容器。免费版包含两个服务、两个定时任务和一个数据库。
  * [YepCode](https://yepcode.io) - 全能平台，用于在无代码环境中连接API和服务。它提供了所有无代码工具的灵巧性和优势，同时也支持编程语言。免费版包括[1000个yep](https://yepcode.io/pricing/).
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，让您快速构建、发布和管理现代API。内置CI/CD、GitHub集成和自动HTTPS。[免费计划](https://wundergraph.com/pricing)包含最多3个项目、1GB出站带宽和每月300分钟的构建时间。
  * [Zeabur](https://zeabur.com) - 轻松一键部署服务。免费版支持3个服务，每月赠送5美元的免费信用。
  * [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建、部署和运行服务。免费版支持连接本地Kubernetes，允许开发人员在自己的机器上创建类似生产环境的测试环境。
  * [genezio](https://genezio.com/) - 提供者为非商业或学术用途，免费提供每月100万次函数调用、100GB带宽和10个cron任务。

**[返回顶部](#目录)**

## BaaS（后端即服务）

  * [Activepieces](https://www.activepieces.com) - 在你的后台构建自动化流程，将多个应用连接起来。例如，当应用程序中发生事件时发送Slack消息或增加Google表格中的行。每月提供5,000个任务的免费额度。
* [back4app.com](https://www.back4app.com) - 一个使用Parse平台的易于使用、灵活且可扩展的后端。
* [backendless.com](https://backendless.com/) — 移动和Web后端服务，有1GB文件存储免费，每月50,000次推送通知，以及1000个数据对象在表中。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI会在功能运行时和托管存储上启动并建立你的Python API，免费在在线编辑器中构建或与你最喜欢的工具一起本地化。
* [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供了文档和资源，帮助你构建和部署企业数字创新。你将拥有一个全面的、个性化的沙箱，其中包含平台、SDK和一组可以用来构建和定制应用的组件。
* [connectycube.com](https://connectycube.com) - 无限的聊天消息、点对点语音和视频通话、文件附件和推送通知。对于不超过1000名用户的应用是免费的。
* [convex.dev](https://convex.dev/) - 反应式后端作为服务，托管你的数据（包含关系的文档和可序列化的ACID事务）、无服务器函数和WebSocket，用于向多个客户端流式更新。为小项目提供免费服务，包括100万个记录和500万个每月无服务器函数调用。
* [darklang.com](https://darklang.com/) - 集合了一款托管语言和编辑器和基础设施。在beta期间可访问，beta期后将计划提供慷慨的免费层级。
* [Firebase](https://firebase.com) — Firebase帮你构建并运营成功应用。Spark计划提供免费服务，包括身份验证、托管、Firebase ML、实时数据库、云存储、测试实验室。A/B测试、分析、应用分发、应用索引、云消息（FCM）、崩溃报告、动态链接、消息通知、性能监控、预测

  * [pubnub.com](https://www.pubnub.com/) — 免费提供每月最多1,000,000条推送消息和100个每日活跃设备的推送通知服务
  * [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多1,500,000次推送免费
  * [pushcrew.com](https://pushcrew.com/) — 推送通知服务。为最多2,000名订阅者提供无限通知
  * [pusher.com](https://pusher.com/beams) — 对于每月活跃用户2,000名，提供免费、无限推送通知。适用于iOS和Android设备的单个API
  * [quickblox.com](https://quickblox.com/) — 提供即时消息、视频、语音通话以及推送通知的通信后端
  * [restspace.io](https://restspace.io/) — 使用一些服务（如身份验证、数据、文件、电子邮件API、模板等）配置服务器，然后组成管道并转换数据
  * [Salesforce Developer Program](https://developer.salesforce.com/signup) — 使用拖放工具快速构建应用程序。用点击方式定制数据模型。通过Apex代码进行深度扩展。使用强大的API进行整合。借助企业级安全保护保护数据。通过单击或主流Web框架自定义UI。免费开发者计划提供全功能的闪电平台访问权限。
  * [ServiceNow Developer Program](https://developer.servicenow.com/) — 快速构建、测试和部署应用，使其为您的组织带来更好。提供免费实例及早期预览版本权限
  * [simperium.com](https://simperium.com/) — 实时自动在所有平台移动数据，支持多平台、结构化数据的无限发送和存储，每月最多2,500名用户
  * [Singlebase.cloud](https://singlebase.cloud) — AI驱动的全面后端开发平台，加速应用开发。提供如向量数据库、关系文档数据库、身份验证、搜索和存储等功能。免费/入门级计划提供关系文档数据库、身份验证、搜索、存储。
  * [stackstorm.com](https://stackstorm.com/) — 事件驱动的自动化服务，适用于应用、服务和工作流程。免费版本不包含流程、访问控制和LDAP等功能
  * [

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一款设计用于构建具有良好定制移动和Web应用功能的企业流程应用的低代码平台。提供了拖放界面、离线支持、实时位置追踪和与各种第三方服务的集成。
  * [Basedash](https://www.basedash.com) — 用于构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源的低代码平台，可快速创建内部应用，支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s等。
  * [appsmith](https://www.appsmith.com/) — 可用于构建管理面板、内部工具和仪表盘的低代码项目，支持15+数据库和任何API。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，使用拖放应用构建器进行开发。
  * [ReTool](https://retool.com/) — 用于内部应用程序构建的低代码平台。ReTool高度定制，支持JS和API编写。免费版每月最多允许5个用户，无限个应用和API连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一款帮助工程团队和产品经理快速创建内部工具、定制用户旅程、数字体验、自动化和自定义管理面板的低代码平台。
  * [ILLA Cloud](https://www.illacloud.com/) — 一个强大的开源低代码平台，适用于开发者构建内部工具。使用ILLA的组件和动作库可以节省大量开发时间。5个团队成员的免费版。
  * [outsystems.com](https://www.outsystems.com/) — 商业级的可随时随地开发的Web开发PaaS。免费“个人环境”提供无限代码和最多1 GB数据库。
  * [UI Bakery](https://uibakery.io) — 助您快速构建定制Web应用程序的低代码平台。支持拖放式UI构建，通过JavaScript、Python和SQL实现高度个性化。提供云和自托管方案，免费版最多支持5个用户。
  * [Mendix](https://www.mendix.com/) — 企业级快速应用开发，无

## Web Hosting

  以下是已经有免费主机服务的网站列表：

1. [Alwaysdata](https://www.alwaysdata.com/) - 提供100 MB的免费网页托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器、FTP、WebDAV和SSH访问。还包括邮箱、邮件列表和应用安装器。
2. [Awardspace.com](https://www.awardspace.com) - 提供免费网页托管和赠送的短域名，支持PHP、MySQL以及应用安装器、电子邮件发送和无广告。
3. [Bohr](https://bohr.io) - 非商业项目免费，开发者优先的部署和开发平台，简化基础设施管理，加速部署。
4. [Bubble](https://bubble.io/) - 无需编码的视觉编程工具，用于创建网页和移动应用，Bubble品牌版是免费的。
5. [dAppling Network](https://www.dappling.network/) - 去中心化的Web3前端托管平台，注重提高可用时间和安全性，为用户添加额外访问点。
6. [DigitalOcean](https://www.digitalocean.com/pricing) - 提供App Platform Starter免费层级，可以免费构建和部署三个静态网站。
7. [Drive To Web](https://drv.tw) - 从Google Drive和OneDrive直接托管到网页，限于静态网站，永久免费，每个账户只能托管一个网站。
8. [Fenix Web Server](https://preview.fenixwebserver.com) - 开发者桌面应用，用于本地站点托管和实时分享，支持多种工作方式。
9. [Fern](https://buildwithfern.com) - 目标为Markdown文档站点，加上基于Fern的免费计划进行构建和托管。还可以自动生成API参考，网站地址为_yoursite_.docs.buildwithfern.com。
10. [Free Hosting](https://freehostingnoads.net/) - 提供PHP 5、Perl、CGI、MySQL等支持，还配备FTP、文件管理器和免费子域名等功能，没有强制性广告。
11. [Freehostia](https://www.freehostia.com) - 提供免费托管服务，包括业界最好的控制面板和一键安装50多种免费应用，立即设置，无强制广告。
12. [HelioHost](https://hel

  * [SourceForge](https://sourceforge.net/) — 在此网站上查找、创建并免费发布开源软件
  * [surge.sh](https://surge.sh/) — 专为前端开发者设计的静态网站发布平台。提供无限数量的站点支持自定义域名
  * [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页
  * [tilda.cc](https://tilda.cc/) — 免费拥有50个网页和50 MB存储空间，但仅提供预定义的170多个块中的主要部分，不支持字体、图标和自定义域名
  * [Vercel](https://vercel.com/) — 轻松构建、部署和托管网站，提供免费SSL、全球CDN和每次`git push`独有的预览URL。适合Next.js和其他静态站点生成器
  * [Versoly](https://versoly.com/) — 专门针对SaaS的网站构建工具，可创建无限量网站，有超过70个模块，五种模板，支持自定义CSS、图标、SEO和表单，但不支持自定义域名
  * [Qoddi](https://qoddi.com) - 类似Heroku的PaaS服务，注重开发者体验并提供全面功能，静态资产、预览、开发应用的免费版本
  * [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费Flarum托管，适用于最多250名用户（捐赠可移除页面尾部的水印）
  * [fleek.co](https://fleek.co/) - 免费构建现代网站和应用，无缝支持开放网络和其协议，不限数量，每月带宽提供50 GB
  * [MDB GO](https://mdbgo.com/) - 免费为一个项目提供托管，期限为两周，每个项目500 MB RAM，支持SFTP - 1 GB磁盘空间
  * [Patr Cloud](https://patr.cloud/) — 简易云平台，付费服务之一包括免费托管三个静态网站
  * [Serv00.com](https://serv00.com/) — 提供3GB免费网络托管，每日备份（7天）。支持：定时任务、SSH访问、仓库（GIT、SVN、Mercurial）、mongDB、PHP、

## DNS（域名系统）

  以下是提供免费公共DNS解析器的相关服务：

1. [
1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费、快速且安全的DNS解析器。有助于绕过互联网提供商的DNS封锁，防止DNS查询监控，以及[防止成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还可以通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：这只是DNS解析器，而不是DNS主机。

2. [1984.is](https://www.1984.is/product/freedns/) - 提供API和多种其他免费DNS功能的免费DNS服务。

3. [cloudns.net](https://www.cloudns.net/) - 免费DNS托管，支持1个域名和50条记录。

4. [deSEC](https://desec.io) - 一个以安全为设计理念的免费DNS托管服务，使用开源软件，由[SSE](https://www.securesystems.de/)支持。

5. [dns.he.net](https://dns.he.net/) - 提供动态DNS支持的免费DNS托管服务。

6. [Zonomi](https://zonomi.com/) - 具有即时DNS传播的免费DNS托管服务，免费计划：支持1个DNS区域（域名）和最多10条DNS记录。

7. [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。

8. [duckdns.org](https://www.duckdns.org/) - 免费DDNS服务，免费层级最多支持5个域名，提供各种配置指南。

9. [Dynv6.com](https://dynv6.com/) - 提供API支持和多种DNS记录类型的管理，如CNAME、MX、SPF、SRV、TXT等的免费DDNS服务。

10. [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管服务，还可为公共用户提供大量贡献的域名提供免费子域名。注册后在“子域名”菜单获取。

11. [luadns.com](https://www.luadns.com/) - 免费DNS托管，支持3

## 域名服务

  * [**eu.org**](https://nic.eu.org) — 提供免费的 eu.org 域名。申请通常会在 14 天内得到批准。
  * [**pp.ua**](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [**us.kg**](https://nic.us.kg/) — 提供免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## IaaS（基础设施即服务）

  * [4EVERLAND](https://www.4everland.org/) - 与AWS S3兼容 - 支持API、界面操作、命令行界面（CLI）和其他上传方法，从IPFS和Arweave网络安全、方便且高效地上传和存储文件。注册用户可免费获得6 GB的IPFS存储空间和300MB的Arweave存储空间。Arweave上传文件小于150 KB的部分是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2云存储。免费提供10 GB（类似Amazon S3）的无限制对象存储空间。
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。无限时长提供5 GB的免费存储空间。
  * [Tebi](https://tebi.io/) - S3兼容的对象存储。免费提供25 GB存储空间和250 GB的出站传输额度。
  * [iDrive e2](https://www.idrive.com/e2/) - S3兼容的对象存储。每月提供10 GB的免费存储和10 GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容的对象存储。每月提供15 GB的免费存储和15 GB的下载量。

**[回到顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供开源数据平台上的免费 PostgreSQL、MySQL 和 Redis 计划。单个节点，1 CPU，1GB 内存，以及针对 PostgreSQL 和 MySQL 的 5GB 存储空间。可以轻松迁移到更广泛的计划或跨云。
  * [airtable.com](https://airtable.com/) — 看起来像一个电子表格，但实际上它是一个关系数据库，具有无限数量的基础，每个基础有 1,200 行，每月 1,000 个 API 请求。
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 作为服务的云原生 Cassandra，提供 [80GB 免费版](https://www.datastax.com/products/datastax-astra/pricing)。
  * [codehooks.io](https://codehooks.io/) — 是一个易于使用且功能强大的 JavaScript 无服务器 API/后端服务和 NoSQL 数据库，支持函数、MongoDB 类似查询、键值查找、任务系统、实时消息、工作队列、强大的 CLI 和基于 web 的数据管理器。免费计划提供 5GB 存储和每分钟 60 次 API 调用。包含 2 位开发者。无需信用卡。
  * [CrateDB](https://crate.io/) — 分布式开源 SQL 数据库，适用于实时分析。[免费版 CRFREE](https://crate.io/lp-crfree)：单个节点，2 个 CPU，2 GiB 内存，8 GiB 存储。每个组织限置一个集群，无需支付方法。
  * [FaunaDB](https://fauna.com/) — 一种具备原生 GraphQL、多模型访问的无服务器云数据库，每天提供高达 100 MB 的免费版。
  * [Upstash](https://upstash.com/) — 无服务器 Redis，提供免费版，每天最多 10,000 个请求，最大数据库大小为 256MB，并发连接数量为 20。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费版提供 512 MB 存储。
  * [redsmin.com](https://www.redsmin.com/) — 提供 Redis 实时监控和管理

  * [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 免费提供CockroachDB，存储容量最高到5GB，1vCPU（对[请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta)有限制）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 管理的原生图形数据库/分析平台，集成了Cypher查询语言和REST API。图形大小上限（50,000个节点，175,000个关系）
  * [Neon](https://neon.tech/) — 管理的PostgreSQL，总存储量0.5GB，1个项目，10个分支，无限数据库，主分支始终保持可用（非主分支计算会在5分钟后自动暂停），每月20小时的活跃时间（总计）为免费版。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 管理的原生图形数据库，提供了GraphQL API。每日数据传输量限制为1MB。
  * [Tinybird](https://tinybird.co) - 一个无服务器托管的ClickHouse，支持通过HTTP进行无连接数据摄取，并允许您将SQL查询作为HTTP管理API发布。免费版无时间限制，存储空间10GB+每日1000个API请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 管理的原生图形数据库/分析平台，具有SQL-like图查询语言和REST API。免费实例提供2个vCPU、8GB内存和50GB存储，且在1小时无活动后会进入休眠状态。
  * [TerminusCMS](https://terminusdb.com/pricing) — 提供TerminusDB的管理和免费服务，这是一个使用Prolog和Rust编写的文档和图数据库。开发者版免费，企业部署和支持需要付费服务。
  * [YugabyteDB](https://cloud.yugabyte.com) - YugabyteDB是一个与PostgreSQL兼容的分布式SQL数据库。云免费版包含2个vCPU、4GB RAM和10GB磁盘。
  * [filess.io](https://filess.io) -

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 通过一个命令就把 localhost 公开访问，无需下载，支持 HTTPS、TCP、TLS 隧道。免费计划中隧道时长为 60 分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio 插件，允许您通过隧道或本地网络暴露 IIS Express 到公共 URL。
  * [Hamachi](https://www.vpn.net/) — 是 LogMeIn 提供的托管虚拟专用网络 (VPN) 服务，能够让分布式团队的安全网络扩展到离线状态，免费计划允许无限网络，支持最多 5 个人。
  * [Mirna Sockets](https://mirna.cloud/) — 免费的 Socket as a Service 平台，部署你的 Web Socket 服务器代码后提供一个 wss 域名，还可以监控性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务器暴露到公共 URL，有免费托管版以及[开源](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 类似 localtunnel，将本地服务器暴露到公共 URL 。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 需要 Internet 连接，不用安装和注册，就可将本地服务器暴露到互联网。分配一个免费域名，没有使用限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 使用 LAN 类似的网络通过 VPN 连接多台计算机。免费版本无连接限制（与 Hamachi 作为替代方案）。
  * [segment.com](https://segment.com/) — 事件中转器，将事件翻译并发送到其他第三方服务，每月免费转介 100,000 个事件。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) — Google 提供的 STUN 服务器。
  * Twilio STUN — [stun:global

  * [btunnel](https://www.btunnel.in/) — 将本地主机和本地TCP服务器暴露到互联网。免费版包括文件服务器、自定义HTTP请求和响应头、基本身份验证保护以及1小时的隧道超时。

**[⬆️ 返回目录](#目录)**

## 问题跟踪和项目管理

  请按以下格式回答：

* [网站](链接): 简介 - 定量/限制信息

* [acunote.com](https://www.acunote.com/): 免费项目管理与敏捷工具 - 适用于最多5名团队成员
* [asana.com](https://asana.com/): 针对私人项目和协作者免费
* [Backlog](https://backlog.com): 团队发布出色项目的所有工具 - 免费版提供1个项目的10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal): 包括待办事项、里程碑管理、论坛式消息、文件共享和时间跟踪 - 免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/): 内部网和项目管理工具 - 免费版支持无限用户和5GB存储空间
* [cacoo.com](https://cacoo.com/): 实时在线图 - 流程图、UML、网络图 - 免费版最多支持15用户/图表，25个图层
* [Chpokify](https://chpokify.com/): 团队采用的估算工具 - 免费版提供5个用户，免费集成Jira，不限视频会议、团队、会话
* [clickup.com](https://clickup.com/): 项目管理 - 免费版有云存储，移动应用和Git集成
* [Clockify](https://clockify.me): 时间追踪和时间表应用，跨项目跟踪工作时间 - 免费版支持无限用户，永久免费
* [Cloudcraft](https://cloudcraft.co/): 专业架构设计工具 - 优化为AWS，几分钟内创建图纸 - 免费版单用户支持无限私有图纸
* [Codegiant](https://codegiant.io/): 项目管理、代码库托管和CI/CD - 免费版包括无限仓库、项目和文档，5个团队成员，每月500分钟CI/CD，30000分钟Serverless执行，1GB仓库存储
* [Confluence](https://www.atlassian.com/software/confluence): Atlassian的内容协作工具 - 免费版限10个用户
* [

  * [Hygger](https://hygger.io) — 项目管理平台。免费版提供无限用户、项目和看板，但只有100 MB的空间存储。
  * [Instabug](https://instabug.com) —  为移动应用程序提供的全面的bug报告和应用内反馈SDK。免费计划支持1个应用和1名成员。
  * [WishKit](https://wishkit.io) —  用于收集iOS/macOS应用内用户反馈并根据用户投票优先处理功能。免费版适用于单个应用。
  * [Ilograph](https://www.ilograph.com/)  — 提供交互式图表，用户可以从多角度和详细程度查看基础设施。图表可以通过代码表示。免费版可用于无限数量的私人图表，最多支持3位观众。
  * [Jira](https://www.atlassian.com/software/jira) —  被许多企业环境广泛使用的高级软件开发项目管理工具。免费版适用于最多10名用户。
  * [kanbanflow.com](https://kanbanflow.com/) — 基于看板的项目管理。免费版更多选项的付费版本。
  * [kanbantool.com](https://kanbantool.com/) — 基于看板的项目管理。免费计划限于两个看板和两个用户，不含附件或文件。
  * [Kitemaker.co](https://kitemaker.co)  — 协作整个产品开发过程，并在Slack、Discord、Figma和Github之间跟踪工作。免费版提供无限用户和空间，但在工作项上限至250个。
  * [Kiter.app](https://www.kiter.app/) — 让任何人都能组织求职过程，跟踪面试、机会和联系人。强大且免费的网络应用和Chrome扩展。
  * [Kumu.io](https://kumu.io/)   — 可以动效、装饰、过滤、聚类等的可视化关系图。免费版不限制公开项目，但文件大小不限。学生使用还有免费的私人项目。如果不想文件公开在线，沙箱模式也支持（上传、编辑、下载、丢弃）。
  * [Linear](https://linear.app/) — 简洁界面的issue跟踪器，免费版适用于无限成员，10 MB文件上传大小以及250个非归档问题（在内）。


  * [plan.io](https://plan.io/) — 项目管理与存储库托管等更多选项。适合两个用户，十名客户和500MB存储量的免费版。
  * [Plane](https://plane.so/) - 一个简单、可扩展且开源的项目和产品管理工具。免费版本为无限成员，上传大小不超过5MB，1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）。
  * [point.poker](https://www.point.poker/) - 在线计划扑克（基于共识的估算工具）。免费提供无限用户、团队、会议、轮次和投票。无需注册。
  * [ScrumFast](https://www.scrumfast.com) - 有一个非常直观界面的Scrum看板，限5个用户免费。
  * [Shake](https://www.shakebugs.com/) - 精于移动端应用的内置问题报告和反馈工具。免费版支持每个应用每月报告十次bug。
  * [Shortcut](https://shortcut.com/) - 项目管理平台。10个用户以下完全免费。
  * [Tadum](https://tadum.app) - 设计为定期会议的会议议程和纪要应用，免费版可容纳10人团队。
  * [taiga.io](https://taiga.io/) — 启动公司和敏捷开发者的项目管理平台，开源项下免费。
  * [Tara AI](https://tara.ai/) — 简单的 sprint 管理服务。免费版包含无限任务、sprint 和工作区，不限用户数。
  * [targetprocess.com](https://www.targetprocess.com/) — 图形化项目管理，支持从看板、Scrum 到几乎所有操作流程。免费提供无限用户，1000个数据实体。[更多细节](https://www.targetprocess.com/pricing/)
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费版包含一个工作区，无限任务和项目，1GB 文件存储，1周项目历史，以及每次视频会议5名参与者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理，5个用户内免费。支持与

  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 适用于开源项目和私有项目（免费版最多支持三个用户）的免费托管 YouTrack (InCloud)。功能包括时间追踪和敏捷看板。
  * [zenhub.com](https://www.zenhub.com) — 在 GitHub 内部的项目管理解决方案。适用于公共仓库、开源项目和非营利组织，免费提供。
  * [zenkit.com](https://zenkit.com) — 项目管理和协作工具。最多支持 5 个成员和 5 GB 附件，提供免费版。
  * [Zube](https://zube.io) — 提供项目管理，4 个项目和 4 个用户的免费计划。支持 GitHub 集成。
  * [Toggl](https://toggl.com/) — 提供两个免费生产力工具：[Toggl Track](https://toggl.com/track/) 用于时间管理和追踪，免费版提供为自由职业者设计的无缝时间追踪和报告。它有无限的追踪记录、项目、客户、标签、报告等功能。另一个工具 [Toggl Plan](https://toggl.com/plan/) 用于任务计划，对单个开发者的免费版包含无限的任务、里程碑和时间线。
  * [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售和客户服务设计，尤其适用于外包和跨组织协作项目。提供免费计划，最多支持 3 个项目和 5 个成员。
  * [Pulse.red](https://pulse.red) — 一款为项目设计的免费简洁时间追踪和工时表应用。

**[⬆️ 返回目录顶端](#目录)**

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 一个免费的文件共享平台，提供无限速度、带宽、文件数量、下载次数等功能。主要用于分享与Android开发相关的文件，如APK构建、自定义ROM与修改等，但也接受其他类型的文件。
  * [borgbase.com](https://www.borgbase.com/) - 一个针对[Borg Backup](https://borgbackup.readthedocs.io/en/stable/)的简单、安全的离线备份托管服务。免费提供10GB备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 一个简单的云端存储服务，提供10GB免费存储空间。
  * [sync.com](https://www.sync.com/) - 完整端到端的云端存储服务，免费空间为5GB。
  * [pcloud.com](https://www.pcloud.com/) - 云端存储服务，免费部分提供10GB存储空间。
  * [sirv.com](https://sirv.com/) - 智能图片CDN，提供图片优化和缩放功能。免费版包括500MB存储和2GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) - 全功能的图片优化和CDN服务，遍布全球1500多个点。支持多种图片缩放、压缩和水印功能。提供免费月度计划，包含25GB CDN流量和25GB缓存存储，无限次转换操作。
  * [cloudinary.com](https://cloudinary.com/) - 图片上传、处理、存储和分发平台，支持多种编程语言的库。免费版包月包含25个信用点，每个信用点相当于1000个图片转换操作、1GB存储空间或1GB CDN使用。
  * [embed.ly](https://embed.ly/) - 提供嵌入媒体的API，支持响应式图片缩放和网页元素提取。每月提供免费5,000个URL，每秒15个请求。
  * [filestack.com](https://www.filestack.com/) - 文件选择、转换和分发，250个文件、500次转换和3GB带宽免费。
  * [file.io](https://www.file.io) - 提供2GB文件存储，自动删除离线下载

  * [kraken.io](https://kraken.io/) — 提供网站性能优化的图片优化服务，免费计划支持最多1MB文件大小
  * [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费版提供100个键，每键1KB，每小时100次调用
  * [npoint.io](https://www.npoint.io/) — 提供协作模式编辑JSON数据存储
  * [nitropack.io](https://nitropack.io/) — 自动优化网站速度，实现前端全面优化（缓存、图片和代码优化、CDN）。免费方案每月提供5000次页面访问
  * [otixo.com](https://www.otixo.com/) — 用于加密、共享、复制和移动所有云端存储文件，基本版提供无限文件传输，最大文件大小为250MB，允许加密5个文件
  * [packagecloud.io](https://packagecloud.io/) — 提供YUM、APT、RubyGem和PyPI的托管软件包存储库，有限的免费计划可通过请求获取
  * [getpantry.cloud](https://getpantry.cloud/) — 简单的JSON数据存储API，适合个人项目、黑客马拉松和移动应用
  * [Pinata IPFS](https://pinata.cloud) — 规避方法上传及管理IPFS文件。用户界面友好，API稳定，适合平台、创作者和收藏家使用IPFS。免费提供1GB存储和API访问
  * [placekitten.com](https://placekitten.com/) — 提供简单的替代图片服务，适合作为占位符使用
  * [plot.ly](https://plot.ly/) — 可视化数据并分享。免费版包括无限公开文件和10个私人文件
  * [podio.com](https://podio.com/) — 可与最多5人的团队合作，基本版功能试用，但不包括用户管理
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图表图像、二维码
  * [redbooth.com](https://redbooth.com) — 仅为最多2人提供P2P文件同步服务
  * [resmush.it](https://resmush.it) — 免费图像优化API，支持WordPress、Drupal、Magento

  * [**internxt.com**](https://internxt.com) – Internxt Drive 是一个基于绝对隐私和无懈可击安全的零知识文件存储服务。注册即可免费获取 10 GB，永久有效！

* [**degoo.com**](https://degoo.com/) – 这是一个基于 AI 的云存储，免费提供 20 GB 的空间，支持三个设备，还有 5 GB 的推荐奖励（账户90天未活动）。

* [**MConverter.eu**](https://mconverter.eu/) – 这是批量转换文件的工具，支持多种文件格式，包括最新版本的 [AVIF](https://mconverter.eu/convert/to/avif/)。还可以从视频中提取所有图像帧。限每天处理十次，每次两个100MB的文件，免费使用。

* [**ImageEngine**](https://imageengine.io/) – ImageEngine 是一个易于使用的全球图片内容分发网络。不到60秒即可设置。支持 AVIF 和 JPEGXL，还提供了WordPress、Magento、React、Vue等插件。现在申请免费开发者账号 [这里](https://imageengine.io/developer-program/)。

* [**DocsParse**](https://docsparse.com/) – 使用 GPT驱动的 AI 技术，能处理PDF、图像，将其结构化为JSON、CSV、EXCEL等格式数据。每月免费提供30张信用卡。

**[⬆️ 返回顶部](#目录)**

## 设计与用户体验

  * [所有免费的股票图片、音频和视频](https://allthefreestock.com) - 一个精心挑选的免费库存图片、音频和视频列表。
  * [浮光UI](https://floatui.com/) - 免费的网页开发工具，用于快速创建现代响应式网站，具有优雅的设计，即使对于非设计师也容易使用。
  * [Ant Design 首页](https://landing.ant.design/) - Ant Design 首页提供了一个由 Ant Motion 组件构建的模板。它提供了一个丰富的主页面模板，可以直接下载代码包并快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) - Backlight 是一个专注于开发者和设计师协作的完整编码平台，团队在此构建、文档、发布、扩展和维护设计系统。免费计划允许最多3位编辑者在一个设计系统上工作，无限数量的观众。
  * [BoxySVG](https://boxy-svg.com/app) - 一个免费的可安装 web 应用，用于绘制 SVG 并以 SVG、PNG、jpg 和其他格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 免费在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 提供一致性开源图标，如 React、Vue 和 Svelte 的 SVG。
  * [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用。他们还提供付费版本的集成。
  * [cloudconvert.com](https://cloudconvert.com/) - 将任何东西转换为任何东西。支持包括视频和 gif 在内的两百多种格式。
  * [CodeMyUI](https://codemyui.com) - 收集 web 设计和 UI 灵感，附带代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶级调色板中获取灵感。
  * [coolors](https://coolors.co/) - 颜色调色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 手工挑选的颜色调色板，最适合品牌。
  * [css-gradient.com](https://www.css-gradient.com/) - 快速生成

  以下是一些网页设计和原型工具的列表，其中一些是免费的，一些有限制：

1. [Quant Ux](https://quant-ux.com/) - 一个原型和设计工具，完全免费且开源。
2. [lensdump.com](https://lensdump.com/) - 免费云图片托管服务。
3. [Lorem Picsum](https://picsum.photos/) - 一个简单易用的工具，可以生成美观的占位符图像。在URL后添加你想要的大小 (宽度和高度)，会随机获取一个图片。
4. [LottieFiles](https://lottiefiles.com/) - 一个设计师、开发者使用的在线平台，收纳最小化的动画格式。支持安卓、iOS和Web的动画工具和插件。
5. [MagicPattern](https://www.magicpattern.design/tools) - 收集了CSS和SVG背景生成器和工具，包括渐变、图案和Blob类型。
6. [marvelapp.com](https://marvelapp.com/) - 设计、原型和协作，免费方案限一人一项目。
7. [Mindmup.com](https://www.mindmup.com/) - 免费无限的思维导图，支持云端存储。你可以在任何设备上实时访问你的地图。
8. [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与手交工具，免费计划包含三个用户和五个项目，所有功能完整。
9. [mockupmark.com](https://mockupmark.com/create/free) - 免费创建社交媒体和电子商务服装预览图40个套件。
10. [Mossaik](https://mossaik.app) - 集成了不同工具的免费SVG图像生成器，如波浪、博客和模式。
11. [movingpencils.com](https://movingpencils.com) - 快速、基于浏览器的矢量编辑器，完全免费。
12. [Octopus.do](https://octopus.do) - 可视化网站地图构建器，实时构建并分享结构给团队或客户。
13. [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具。
14. [Penpot](https://penpot.app) - 基于Web的开源设计和原型工具，支持SVG，

  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，提供200个免费模型。
  * [tabler-icons.io](https://tabler-icons.io/) — 1500多个可复制粘贴的SVG可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 生成带名字缩写的头像。URL可以直接链接到你的网络/应用。通过URL支持配置参数。
  * [unDraw](https://undraw.co/) — 一个不断更新的漂亮SVG图片集合，你可以完全免费使用，无需署名。
  * [unsplash.com](https://unsplash.com/) - 提供商业和非商业用途的免费库存照片（可以随心所欲使用）。
  * [vectr.com](https://vectr.com/) — 免费的Web和桌面设计应用。
  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划支持最多包含5步的导览。
  * [Webflow](https://webflow.com) — 带有动画和网站托管的所见即所得网站构建器。两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 用于基于TailwindCSS设计的WYSIWYG网站构建器。免费用于非商业用途。
  * [whimsical.com](https://whimsical.com/) — 用于协作流程图、线框、便签和思维导图的工具。创建最多4个免费工位。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。一个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人的、独特的图形和图片。
  * [Responsively App](https://responsively.app) - 针对响应式Web应用程序开发提供免费的开发工具，更快更精准。
  * [SceneLab](https://scenelab.io) - 网络上的模拟图形编辑器，拥有不断扩大的免费设计模板库。
  * [xLayers](https://xlayers.dev) - 预览并将Sketch设计文件转换为Angular、React、Vue、LitElement、Stencil、Xamarin等（[免费且开源](https://

  * [vector.express](https://vector.express) — 快速轻松地将你的AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件转换。
  * [Vertopal](https://www.vertopal.com) - 提供文件转换到各种格式的免费在线平台。包括开发者转换器，如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
  * [okso.app](https://okso.app) - 简约在线绘图工具。快速创建草图和视觉笔记，并输出为PNG、JPG、SVG和WEBP格式。还有一个PWA版本，供免费使用（无需注册）。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 提供免费的黑白色的SVG切割文件。
  * [Lucide](https://lucide.dev) - 免费且定制的SVG图标工具包，具有一致的设计。
  * [Logo.dev](https://www.logo.dev) - 提供4400万品牌公司的公司logo API，使用简单，前10000个API调用是免费的。
  * [MDBootstrap](https://mdbootstrap.com/) - 个人和商业用途均可免费使用的Bootstrap、Angular、React、Vue UI套件，包含700多个组件、模板、1分钟安装、详尽教程和庞大的社区。
  * [TW Elements](https://tw-elements.com/) - 用Tailwind CSS重制的免费Bootstrap组件，设计更好、功能更多。
  * [DaisyUI](https://daisyui.com/) — 免费, 删除Tailwind CSS中的更多类名但仍能使用组件，如按钮。
  * [Scrollbar.app](https://scrollbar.app) — 一个简单的免费网页应用，用于为网页设计自定义滚动条。
  * [css.glass](https://css.glass/) — 免费网页应用，用于使用CSS创建玻璃风格的设计。
  * [hypercolor.dev](https://hypercolor.dev/) — 收集了Tailwind CSS的颜色渐变，还提供各种生成器创建自己的颜色组合。
  * [iconify.design](https://icon-sets.iconify.design/) — 收录了100多个图标包的集合，提供统一界面。用户可以跨包搜索图标，下载为

## 设计灵感

  以下是一些设计展示平台或资源的链接列表，这些平台可以提供灵感和设计优秀的网站、UI/UX项目、移动应用截图等：

1. [awwwards](https://www.awwwards.com/) - 顶尖网站设计展示平台（由设计师投票选出）。
2. [Behance](https://www.behance.net/) - 设计作品集，设计师可以展示他们的作品，分类包括UI/UX项目。
3. [dribbble](https://dribbble.com/) - 设计灵感展示，通常不包含实际应用的设计。
4. [Landings](https://landings.dev/) - 按偏好筛选的最好的着陆页设计灵感。
5. [Lapa Ninja](https://www.lapa.ninja/) - 包含6025个着陆页示例、设计师书籍和UI资源的库。
6. [LovelyLanding.net](https://www.lovelylanding.net/) - 经常更新的着陆页截图，提供台式机、平板和手机版本。
7. [Mobbin](https://mobbin.design/) - 5万多个可搜索的移动应用截图，节省UI/UX研究时间。
8. [UiLand Design](https://uiland.design/) - 探索非洲和世界各地领先公司的移动和网页UI设计。
9. [Mobile Patterns](https://www.mobile-patterns.com/) - 设计灵感库，包含最好的移动和Android UI UX模式。
10. [Page Flows](https://pageflows.com/) - 提供多个移动和网络应用完整流程视频及截图，易搜索。
11. [Screenlane](https://screenlane.com/) - 移动和网页UI设计趋势展示，按模式和应用过滤。
12. [scrnshts](https://scrnshts.club/) - 是精心挑选的应用商店设计截图集合。
13. [UI Garage](https://uigarage.net/) - 提供设计师和开发者每日UI灵感和模式，包括项目资源和工具。
14. [Refero](https://refero.design/) - 收录了伟大网络应用程序设计参考的标签和搜索库。

**[⬆️ 返回顶部](#目录)**

## 地图上的数据可视化

  * [IP 地理定位](https://ipgeolocation.io/) — 开发者计划免费，每月有30,000次请求。
  * [carto.com](https://carto.com/) — 从你的数据和公开数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 极其精准的地图工具。每月5万次免费查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供网页、桌面和移动平台的地图、地理数据存储、分析、地理编码、路线规划等API和SDK。每月包含200万基础地图瓦片、20,000个非存储的地理编码、20,000条简单路线、5,000条驱车时间计算以及5GB免费的瓦片和数据存储空间。
  * [Foursquare](https://developer.foursquare.com/) — 使用Places API和Pilgrim SDK获取位置发现、场所搜索和基于场所的内容。
  * [geoapify.com](https://www.geoapify.com/) — 提供矢量和栅格地图瓦片、地理编码、地点、路线、等值线等API。每日免费索引3,000次。
  * [geocod.io](https://www.geocod.io/) — API导出或者CSV方式上传进行地理编码。每日免费查询2,500次。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理位置编码和解析。每月免费10,000次。
  * [geojs.io](https://www.geojs.io/) — 高可用的REST/JSON/JSONP IP地理定位查询API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和分享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) — 提供路线规划、路线优化、距离矩阵、地理编码、地图匹配的免费开发者包。
  * [here](https://developer.here.com/) — 地图和位置服务相关API和SDK。包含每月250,000次交易在内免费服务。
  * [locationiq.com](https://locationiq.com

## Package Build System

  * [**build.opensuse.org**](https://build.opensuse.org/) — 为多个发行版（SUSE、EL、Fedora、Debian 等）提供软件包构建服务。
  * [**copr.fedorainfracloud.org**](https://copr.fedorainfracloud.org) — 用于Fedora和EL的基于Mock的RPM构建服务。
  * [**help.launchpad.net**](https://help.launchpad.net/Packaging) — Ubuntu和Debian构建服务。

**[⬆️ 返回顶部](#目录) **

## IDE和代码编辑

  * [3v4l](https://3v4l.org/) - 一个免费的在线PHP壳和代码片段分享网站，可以在300+ PHP版本中运行你的代码
  * [Android Studio](https://developer.android.com/studio) — Android Studio是构建所有Android设备应用的最快工具，开源免费，为所有人提供Android应用的最佳开发环境。支持Windows、Mac、Linux和ChromeOS。
  * [AndroidIDE](https://m.androidide.com/) — 一个开源IDE，可在Android设备上开发实际的Gradle-based Android应用程序。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/) — 合作设计API，可即时生成API模拟和文档（免费提供无限API蓝图和一个管理员账户下的无限用户以及托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是一款流行的、可扩展的macOS文本编辑器，免费模式提供强大的核心功能集可升级到高级功能。
  * [Binder](https://mybinder.org/) — 将Git仓库转换为包含交互式笔记本的集合，这是免费的公共服务。
  * [BlueJ](https://bluej.org) — 一个免费的Java开发环境，专为初学者设计，由Oracle提供动力，具有简洁的GUI帮助初学者。
  * [Bootify.io](https://bootify.io/) - 用于生成定制数据库和REST API的Spring Boot应用生成器。
  * [Brackets](http://brackets.io/) — Brackets是一个专为Web开发设计的开源文本编辑器，轻量级、易于使用且高度可定制。
  * [cacher.io](https://www.cacher.io) — 提供标签支持且支持100+编程语言的代码片段管理器。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++集成开发环境，开源，适用于Windows、macOS和Linux平台。
  * [Cody](https://sourcegraph.com/cody) - 免费的AI编程助手，可编写代码（代码块、自动完成、单元测试）、理解代码库（对整个代码库的知识）、修复错误和查找代码。适用于VS Code、JetBrains和在线环境。
  * [codiga.io

  * [fakejson.com](https://fakejson.com/) — FakeJSON 是一个可以借助 API 快速生成假数据的工具，向它描述你的需求和期望格式，即可得到 JSON 格式的返回结果，可以加速想法的落地和假数据的快速应用。
  * [GetVM](https://getvm.io) — 提供即时免费的 Linux 和 IDE 离线浏览器插件，免费版每天包含 5 个虚拟机。
  * [GitPod](https://www.gitpod.io) — GitHub 项目的即时、即开即用的开发环境，免费版包含每月 50 小时的使用时间。
  * [ide.goorm.io](https://ide.goorm.io) goormIDE 是基于云端的全功能 IDE，支持多种语言，带有 Linux 虚拟机、丰富的 web 基于终端功能、端口转发、自定义 URL、实时协作与聊天、分享链接、Git 和 Subversion 支持。免费版包含每个容器 1GB 内存和 10GB 存储，5 个容器资源槽。
  * [JDoodle](https://www.jdoodle.com) — 提供在线编译器和编辑器，支持 60 多种编程语言，免费版每天提供 REST API 编译 200 信用分。
  * [jetbrains.com](https://jetbrains.com/products.html) — 提供生产力工具、IDE 和部署工具，如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等。学生、教师、开源项目和用户团体可以申请免费许可证。
  * [jsbin.com](https://jsbin.com) — JS Bin 是前端 Web 开发者的游乐场和代码分享网站，支持 HTML、CSS 和 JavaScript，也支持 Markdown、Jade 和 Sass。
  * [jsfiddle.net](https://jsfiddle.net/) — 类似于 JS Bin，但包含协作功能，是一个前端 Web 开发利器。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — 一些模拟 REST API 服务端点，返回一些假的 JSON 数据。源代码可下载本地运行。
  * [Lazarus](https://www.lazarus-ide.org/) — Lazarus 是个兼容 Delphi 的跨平台 IDE，用于快速

  * [stackblitz.com](https://stackblitz.com/) - 一个在线或云端代码IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于Node.js的前端和后端框架。新手项目快速创建链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - 一个广受欢迎且功能多样的文本编辑器，适用于编程和文本编辑任务，非常灵活和可定制。
  * [Visual Studio Code](https://code.visualstudio.com/) - 被重新定义和优化的代码编辑器，专为构建和调试现代Web和云应用而设计，微软开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) - 具有成千上万扩展的完整功能IDE，支持跨平台应用开发（适用于iOS和Android的微软扩展可下载）、桌面、Web和云开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) - 受社区驱动，不包含日志记录/跟踪信息，是Microsoft编辑器VSCode的免费二进制分发版本。
  * [wakatime.com](https://wakatime.com/) - 使用文本编辑器插件提供编码活动的量化自我指标服务，免费版有限制。
  * [Wave Terminal](https://waveterm.dev/) - Wave是一款开源的跨平台终端，旨在提供无缝的工作流程。支持渲染任何内容、保存会话和历史，基于开放网络标准，支持MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) - 在浏览器中运行的IDE，用于隔离编写Web组件，提供58个模板、故事和支持测试。
  * [PHPSandbox](https://phpsandbox.io/) - 一个在线PHP开发环境。
  * [WebDB](https://webdb.app) - 免费且高效的数据库IDE，包含服务器发现、ERD、数据生成器、人工智能、NoSQL结构管理器、数据库版本控制等功能。
  * [Zed](https://zed.dev/) - Zed是一个高性能的多人代码编辑器，由Atom和Tree-sitter的创建者开发。

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云观察解决方案 (Snowflake)。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，帮助您将客户数据从数据仓库同步到 CRM、营销和支持工具。免费版提供一个目的地同步数据。
  * [Avo](https://avo.app/)——简化分析发布工作流。单源真相跟踪计划、类型安全的分析跟踪库、内置调试器和数据可观测性，以在发布之前捕捉所有数据问题。免费版支持两个工作区成员和 1 小时数据可观测性回溯。
  * [Branch](https://www.branch.io) —— 移动分析平台。免费版提供最多 10,000 个移动应用用户，包括深度链接和其他服务。
  * [Cauldron](https://cauldron.io) —— 分析开源解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（Git、Github 和 Gitlab）。免费版包括无限数量的报告。
  * [Census](https://www.getcensus.com/) —— 反向 ETL 和运营分析平台。从您的数据仓库同步 10 个字段到 60 多个 SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) —— 网站分析平台。一个网站的免费计划提供 3,000 次视图分析。
  * [Databox](https://databox.com) —— 通过结合其他分析和 BI 平台提供业务洞察和分析。免费版提供 3 个用户、仪表板和数据源。历史数据记录可达 11M。
  * [Hitsteps.com](https://hitsteps.com/) —— 每月 2,000 页视图用于一个网站
  * [amplitude.com](https://amplitude.com/) —— 每月 1,000,000 个事件，最多两个应用
  * [GoatCounter](https://www.goatcounter.com/) —— 开源的 web 分析平台，提供托管服务（非商业用途免费）或自托管应用。它旨在提供易于使用的、尊重隐私的 web 分析

  * [Mixpanel](https://mixpanel.com/) — 追踪每月100,000用户，不限数据历史和席位，支持美国或欧洲数据存储
  * [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。免费版提供每月500,000次API调用的额度
  * [optimizely.com](https://www.optimizely.com) — A/B测试解决方案，免费入门计划，一个网站、一个iOS应用和一个Android应用
  * [Microsoft PowerBI](https://powerbi.com) — 微软的企业洞察与分析。免费版提供有限的使用权限，100万用户许可
  * [Row Zero](https://rowzero.io) — 高速、连贯的电子表格。直接连接数据数据库、S3和API。导入、分析、图表和即时分享数百万行。三个无限期免费的工作簿
  * [sematext.com](https://sematext.com/cloud/) — 免费版提供每月50,000个操作数，1天数据保留，不限仪表盘、用户等
  * [Similar Web](https://similarweb.com) — 网站及移动应用的分析。免费版提供每个指标五个结果，一个月的手机应用数据和三个月的网站数据
  * [StatCounter](https://statcounter.com/) — 网站访问者分析。免费版适合分析最近500位访问者
  * [Statsig](https://statsig.com) — 全包平台涵盖分析、特征标志和A/B测试。免费版提供每月1,000,000个计费事件的额度
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、构建和完善Tableau以适应您的组织。免费开发者计划提供Tableau Online的个人开发沙箱许可，使用的是最新预发布版本，让数据开发者能够测试平台的每项功能
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实使用者上测试设计和原型，并跟踪访客。免费版适用于单个用户，无限测试
  * [woopra.com](https://www.woopra.com/) — 免费用户分析平台，500,000个操作数、9

  * [Umami](https://umami.is/) - 简洁、快速、注重隐私的开源替代品，用于 Google Analytics。  
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私关注的 Google Analytics 替代方案。无限页面视图，不限访客，不限页面热图和目标跟踪。对于不超过 3 个域名和每个域名 600 次会话回放是免费的。
  * [AppFit](https://appfit.io) - AppFit 是一个全面的分析和产品管理工具，旨在简化跨平台的分析和产品更新管理。免费计划包括每月 10,000 个事件、产品日志和每周洞察。
  * [Seline](https://seline.so) - Seline 是一个简洁且注重隐私的网站和产品分析工具。无Cookie、轻量级、独立。免费版包括每月 3,000 个事件，并提供所有功能的访问，如仪表板、用户旅程、漏斗等。

**[⬆️ 回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个站点：每日1,000页面浏览量，三个热图，三个小部件，免费的错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，包含用于错误复现的开发工具、实时支持和产品分析套件。每月1,000会话，使用所有功能，保留7天数据。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000会话，保留30天，错误跟踪，现场模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000会话，一个月数据保留，三个用户席位。更多信息 [这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个站点：每月1,050页面浏览量，不限热量图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 免费提供单个网站每月2,500会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 全程录制完全免费，无流量限制，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 免费版包含单个网站每月500会话
  * [mousestats.com](https://www.mousestats.com/) — 免费版包含单个网站每月100会话
  * [smartlook.com](https://www.smartlook.com/) — 提供网页和移动应用程序的免费包（每月1,500会话），三个热图，一个漏斗，一个月的数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户互动、参与度和事件。每月最多5,000访问量免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用程序。对小项目提供无限时间的免费服务

**[⬆️ 返回顶部](#目录)**

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/)：全球电话号码验证和查找JSON API。每月100次API请求
  * [veriphone](https://veriphone.io/)：全球电话号码验证的免费、快速而可靠的JSON API。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，针对iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页应用进行优化，免费支持每月最多$10k的跟踪收入。

* [ParityVend](https://www.ambeteco.com/ParityVend/) – 自动根据访客地理位置调整价格，以拓展业务全球化并进入新市场（购买力平价）。免费计划包含每月7,500个API请求。

* [Glassfy](https://glassfy.io/) – 提供内购订阅基础设施以及iOS、Android、Stripe和Paddle上的实时订阅事件和开箱即用的变现工具。免费版支持每月$10k收入。

* [Adapty.io](https://adapty.io/) – 一站式解决方案，使用开源SDK轻松在iOS、Android、React Native、Flutter、Unity或网页应用中集成内购订阅。免费版支持每月$10k收入。

* [CoinMarketCap](https://coinmarketcap.com/api/) – 提供加密货币市场数据，包括最新的加密货币和法币交易汇率。免费版提供每月10,000个调用信用。

* [CurrencyFreaks](https://currencyfreaks.com/) – 提供当前和历史的货币换算汇率。提供免费的DEVELOPER计划，每月1,000次请求。

* [CoinGecko](https://www.coingecko.com/en/api) – 提供加密货币市场数据，包含最新的交易汇率和历史数据。演示API稳定速率限制为30次/分钟，每月调用上限为10,000次。

* [CurrencyApi](https://currencyapi.net/) – 提供实物和加密货币的实时汇率，以JSON和XML格式提供。免费版每月提供1,250个API请求。

* [currencylayer](https://currencylayer.com/) – 可靠的汇率和货币转换服务，100个API请求/月免费。

* [exchangerate-api.com](https://www.exchangerate-api.com) – 易于使用的货币转换JSON API，免费版每天更新一次，每月限制1,500次请求。

* [FraudLabsPRO](https

## 与Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供 20 个免费私人存储库，为团队提供 30 个免费私人存储库，用于构建和存储 Docker 镜像
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理系统。免费版提供 1GB 的私人存储库空间
  * [Docker Hub](https://hub.docker.com) — 提供一个免费的私人存储库以及无限的公共存储库，用于构建和存储 Docker 镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动且有趣的学习 Docker 的平台
  * [quay.io](https://quay.io/) — 随意构建并存储 Docker 镜像，提供无限的免费公共存储库
  * [ttl.sh](https://ttl.sh/) - 一个匿名且临时的 Docker 镜像仓库

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp 的 Vagrant Cloud。用于托管 Vagrant box。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个替代的公开 box索引

**[⬆️ 返回顶部](#目录)**

## 开发者博客网站

  * [BearBlog](https://bearblog.dev/) - 简约的，基于 Markdown 的博客和网站构建器。
  * [Dev.to](https://dev.to/) - 程序员分享想法并相互帮助成长的地方。
  * [Hashnode](https://hashnode.com/) - 为开发者打造的无烦恼博客软件！
  * [Medium](https://medium.com/) - 更加深入地思考对你重要的一切。
  * [AyeDot](https://ayedot.com/) - 免费以现代多媒体形式分享您的想法、知识和故事的简短格式迷你博客。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，帮助你从网站受众中建立活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个基于GitHub问题的轻量级评论框。在博客评论、维基页面等上使用GitHub问题！
  * [Disqus](https://disqus.com/) - Disqus是一个网络社区平台，被网络上的数十万个网站使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源的托管评论平台，按需付费，“一名管理员管理少数几个域名，行为和外观完全可控”。
  * [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger和许多其他网站平台提供功能丰富的评论系统。

**[返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) - 基于 AWS Lambda 和 Chrome 的截图 API。适用于全页面捕获、时间测量和视口尺寸。
  * [microlink.io](https://microlink.io/) — 将任何网站转换为元标签规范化、美观的链接预览、抓取功能或作为服务的截图。免费每天提供 250 个请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简单的 API 调用来生成任何网站的截图。构建为可扩展并托管在 Google Cloud 上。每月提供 100 个免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 为任何网站捕获高度可自定义的快照。免费 100 个截图/月。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 捕获每月 100 张包含完整长度捕获的快照，不止主页，支持png、gif 和 jpg 格式。
  * [PhantomJsCloud](https://PhantomJsCloud.com) – 浏览器自动化和页面渲染。免费版提供每日最多 500 个页面。自 2017 年起提供免费版。
  * [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名情报 API 服务。免费每月 100 个请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为 jpg、png 或 pdf 格式。支持全页面截图、调整视口和注入自定义代码。免费版每月 150 个图片。
  * [Screenshots](https://screenshotson.click) — 专为截图的 API。提供高度可自定义的捕捉选项。免费每月 100 张截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab是一个现代的Flutter在线IDE，也是创建、调试和构建跨平台项目的最佳去处。在FlutLab中，无需Mac设备就能构建iOS应用和Android应用。

* [CodeMagic](https://codemagic.io/) - CodeMagic是一个完整托管的持续集成/持续部署(CI/CD)服务，用于移动应用开发。你可以通过图形界面的CI/CD工具构建、测试和部署应用程序。免费版每月提供500分钟的免费时间，还有2.3 GHz处理器和8 GB内存的Mac Mini实例。

* [FlutterFlow](https://flutterflow.io/) - FlutterFlow是一个基于浏览器的拖放界面，使用Flutter构建移动应用。  

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 这是一个非常快速的x86虚拟机，可以运行Linux和Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个可以提供网络支持运行Linux的OpenRISC虚拟机。
  * [v86](https://copy.sh/v86) — 这是一个x86虚拟机，能够在浏览器中直接运行Linux和其他操作系统。

**[回到顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流助力实现设计隐私法，帮助机构符合GDPR等法规要求。免费版仅适用于规模较小的团队，而SaaS版有其限制。
  * [Osano](https://www.osano.com/) - 是一款涵盖从GDPR代理到Cookie浮标的一站式合规和同意管理平台。免费版提供基础功能。
  * [Iubenda](https://www.iubenda.com/) - 提供隐私和Cookie政策以及同意管理解决方案。免费版提供有限的隐私政策和Cookie浮标。
  * [Cookiefirst](https://cookiefirst.com/) - 提供Cookie浮标、审计和多语言同意管理工具。免费版包含一次扫描和一个单个浮标。
  * [Ketch](https://www.ketch.com/) - 是一个同意管理和隐私框架工具。免费版提供大多数功能，但 visitor 计数有限。
  * [Concord](https://www.concord.tech/) - 是一个全面的数据隐私平台，包括同意管理、数据请求处理（DSARs）和数据映射。免费版包括核心同意管理功能，对于验证开源项目，他们还提供更高级的计划是免费的。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [背景风格器](https://backgroundstyler.com) - 为您的代码、文本或图像创建美观的屏幕截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建和共享代码或二进制文件。可以作为美观图片分享（例如在Twitter或Facebook帖子上）或链接（例如聊天或论坛）。
  * [Blynk](https://blynk.io) — 带有API的SaaS平台，用于控制、构建和评估物联网设备。免费开发者计划包含5个设备，免费云和数据存储。也有移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一款具有强大多行计算器功能的笔记应用（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 生成并分享代码片段的美观截图格式。常用于在Twitter或博客帖子上分享代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时钟跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码生成出色的屏幕截图分享在社交媒体上。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的屏幕截图在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 定时或重复的webhook调度服务。免费计划允许5个工作日调度。
  * [cron-job.org](https://cron-job.org) - 在线调度服务，无限个任务免费。
  * [datelist.io](https://datelist.io) - 在线预约/日程安排系统。免费版每月可以预约5次，包含一个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单的工具，转发任何URL或域名。免费版包含5个域名和每月20万次请求。
  * [Elementor](https://elementor.com) - 用于WordPress的网站构建器。免费版本提供40多个基础小部件。
  * [Format Express](https://www.format-express.dev) - 即时在线格式化JSON、XML和SQL数据。
  * [FOSSA](https://fossa.com/) - 可扩展的管理工具，用于第三方

  * [QuickType.io](https://quicktype.io/) - 使用 JSON、schema 和 GraphQL 快速自动生成模型（类）、类型、接口和序列化器，以便在任何编程语言中快速、安全地处理数据。为您喜欢的语言将JSON转换为优美且安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 一个手机友好的工具，提供多种随机生成的关键字和密码，用于保护应用程序、服务或设备的安全。
  * [ray.so](https://ray.so/) - 创建代码片段的精美图像。
  * [readme.com](https://readme.com/) - 简单制作精美的文档，开源项目的免费版本。
  * [redirection.io](https://redirection.io/) - 商业营销与 SEO 的 HTTP 重定向管理工具。
  * [redirect.ing](https://redirect.ing/) - 快速且安全的服务器管理与SSL证书，不需管理，免费计划包含10个域名和每月100,000次请求。
  * [redirect.pizza](https://redirect.pizza/) - 简单管理重定向，支持HTTPS，免费计划包含10个源和每月100,000次访问次数。
  * [ReqBin](https://reqbin.com/) - 在线发布HTTP请求。支持GET、POST、PUT、DELETE和HEAD等常用请求方法。包含头信息和令牌认证，基本登录系统用于保存请求。
  * [Smartcar API](https://smartcar.com) - 提供汽车定位、燃油箱、电池状态、里程表、解锁/上锁车门等数据的汽车API。
  * [snappify](https://snappify.com) - 用于开发者的惊人视觉工具。从优美的代码片段到完整的技术演示。免费计划允许同时最多3个快照，无限下载，每月有5个AI编程解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取指定经度和纬度的日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) - 提供实时PubSubHubbub兼容的饲料、导出和分析。免费版定制较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) - 创建在线调查。在线分析调查结果。免费版

## Remote Desktop Tools

  * [](https://getscreen.me) - 每台设备免费，但对会话数量和持续时间有限制
  * [Apache Guacamole™](https://guacamole.apache.org/) - 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) - 提供按需技术支持，并可以永久访问设备（免费每天2个会话）
  * [RustDesk](https://rustdesk.com/) - 开源适用于所有人的虚拟/远程桌面基础设施！

**[回到顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) - 提供免费和付费的资源，如精灵、贴图集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) - 发现、收集和分享来自全球游戏艺术家的免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) - 提供2D、3D、音频、GUI的免费和付费资源。
  * [OpenGameArt](https://opengameart.org) - 提供开放源代码的音乐、声音、精灵、GIF等游戏资产。
  * [CraftPix](https://craftpix.net) - 提供2D、3D、音频、GUI、背景、图标、贴图集和游戏套件的免费和付费资源。
  * [Game Icons](https://game-icons.net/) - 提供CC-BY许可的可自定义矢量/PNG图标。
  * [LoSpec](https://lospec.com/) - 在线工具，用于创作像素艺术和其他限制性数字艺术，提供大量教程和调色板列表，供您为游戏选择。
  * [ArtStation](https://www.artstation.com/) - 2D、3D资产（包括音频）、图标、贴图集和游戏套件的免费和付费市场，同时可以展示您的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，同时也允许您使用免费计划创建游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 提供免费的低多边形3D资源。
  * [3Dassets.one](https://3dassets.one/) - 提供8000多件免费和付费的3D模型、PBR材质，用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 提供免费（CC0 1.0 Universal 许可）的2D、3D、音频和UI游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 提供免费和付费的纹理（具有可变分辨率）、模型、HDRIs和刷子。提供免费插件，将内容导出到软件如Blender。
  * [Freesound](https://freesound.org/) - 提供协作化的免费声音库，包含不同的CC许可证。

**[⬆️ 返回

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 提供免费的网络开发者工具，包括 CSS 压缩/解压缩器、图像优化器、图像调整尺寸工具、大小写转换器、CSS 校验器、JavaScript 编译器、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可免费获取高达 200 小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) - 提供更好的 `.localhost.direct` 公开根证书签发的 SSL 证书，适合本地开发并支持子域名。
  * [Framacloud](https://degooglisons-internet.org/en/) - 法国非营利组织 [Framasoft](https://framasoft.org/en/) 制作的开源软件和 SaaS 列表。
  * [github.com — 为开发者设计的开源](https://github.com/tvvocold/FOSS-for-Dev) — 一个针对开发者的免费和开源软件集锦。
  * [GitHub 教育](https://education.github.com/pack) - 提供一系列免费服务给学生，需要注册。
  * [Markdown 工具](https://markdowntools.com) - 实现 HTML 与 CSV、PDF、JSON 等格式之间的相互转换。
  * [微软 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) - 提供免费沙箱、工具等资源以构建微软 365 平台的解决方案，为期 90 天的 [微软 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含 Windows），只要保持活跃开发，即可续期。续期基于用户活动指标及算法。
  * [Pyrexp](https://pythonium.net/regex) - 面向 web 的免费在线正则表达式测试器和可视化工具，用于调试。
  * [Red Hat for Developers](https://developers.redhat.com) - 免费访问由 Red Hat 提供的产品，包括 RHEL、OpenShift 等，专为开发者设计。仅适用于个人计划，免费电子图书也提供参考。
  * [

  * [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 提供100+按钮供您项目中使用。
  * [WrapPixel](https://www.wrappixel.com/) — 提供各种技术创建的免费和付费的Angular、React、Vue、NextJS、NuxtJS后台仪表盘模板下载!
  * [Utils.fun](https://utils.fun/en) — 利用浏览器计算能力的离线日常和开发工具，如水印生成、屏幕录制、编码解码、加密解密、代码格式化等，全部免费且无数据上传云端处理。
  * [Free Code Tools](https://freecodetools.org/) — 提供多项免费且有效的代码工具，包括Markdown编辑器、代码压缩/美化器、二维码生成器、Open Graph生成器、Twitter卡生成器等。
  * [regex101](https://regex101.com/) — 免费在线平台，用以测试和调试正则表达式（regex），提供regex编辑器、测试工具以及学习regex的教程资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) — 包含100多项开发者工具，如格式化、压缩和转换等。
  * [AdminMart](https://adminmart.com/) — Angular、Bootstrap、React、Vue、NextJS和NuxtJS生成的高质量免费和付费后台仪表盘和网站模板。
  * [Glob tester](https://globster.xyz/) — 提供全局模式设计和测试的网站，以及学习全局模式的资源库。
  * [SimpleRestore](https://simplerestore.io) — 无惧烦恼的MySQL备份恢复服务，无需代码或服务器即可将备份还原到远程数据库。
  * [360Converter](https://www.360converter.com/) — 免费版提供视频转文本、音频转文本、语音转文本等功能，对于短视频转换或YouTube教程可能很有用。
  * [QRCodeBest](https://qrcode.best/) — 创建自定义 QR 码，提供13种模板、完整隐私和个性化品牌，支持追踪像素、项目分类和无限团队座位。
  * [PostPulse](https://post-pulse.io) — 帮助优化在线存在感和SEO，利用每月AI编写的文章提高站点排名，免费版允许每月手动在