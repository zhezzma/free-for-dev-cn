# free-for.dev

开发者和开源作者现在有许多提供免费层级的服务，但找到它们并做出明智的决策需要时间。

这是一个包含免费开发者层级的软件（SaaS、PaaS、IaaS 等）和其他产品的列表。

这个特定列表的范围仅限于基础设施开发者（系统管理员、DevOps 从业者等）可能会发现有用的东西。我们喜欢所有的免费服务，但最好保持主题相关。有时这是一条灰色地带，所以这是有倾向性的；如果我不接受你的贡献，请不要感到冒犯。

这个列表是由 1600 多人的拉取请求、审查、想法和工作产生的。你也可以通过发送[拉取请求](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务或删除其产品已更改或已退役的服务。

[![跟踪很棒的列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅适用于即服务产品，不适用于自托管软件。要符合资格，服务必须提供免费层级，而不仅仅是免费试用。如果是时间限制的免费层级，则必须至少为一年。我们也从安全角度考虑免费层级，因此 SSO 没问题，但我不会接受将 TLS 限制为仅付费层级的服务。

# 目录

  * [主要云提供商的始终免费限制](#主要云提供商)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析事件和统计)
  * [API、数据和 ML](#API 数据和 ML)
  * [制品库](#制品库)
  * [BaaS](#BaaS)
  * [低代码平台](#低代码平台)
  * [CDN 和保护](#CDN 和保护)
  * [CI 和 CD](#CI 和 CD)
  * [CMS](#CMS)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图上的数据可视化](#地图上的数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和 UI](#设计和 UI)
  * [设计灵感](#设计灵感)
  * [开发博客网站](#开发博客网站)
  * [DNS](#DNS)
  * [Docker 相关](#Docker 相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能切换管理平台](#功能切换管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式 AI](#生成式 AI)
  * [IaaS](#IaaS)
  * [IDE 和代码编辑](#IDE 和代码编辑)
  * [国际移动号码验证 API 和 SDK](#国际移动号码验证 API 和 SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息传递和流媒体](#消息传递和流媒体)
  * [杂项](#杂项)
  * [监控](#监控)
  * [PaaS](#PaaS)
  * [包构建系统](#包构建系统)
  * [支付和计费集成](#支付和计费集成)
  * [隐私管理](#隐私管理)
  * [截图 API](#截图 API)
  * [Flutter 相关和在没有 Mac 的情况下构建 IOS 应用](#Flutter 相关和在没有 Mac 的情况下构建 IOS 应用)
  * [搜索](#搜索)
  * [安全和 PKI](#安全和 PKI)
  * [身份验证、授权和用户管理](#身份验证授权和用户管理)
  * [源代码库](#源代码库)
  * [存储和媒体处理](#存储和媒体处理)
  * [隧道、WebRTC、Web 套接字服务器和其他路由器](#隧道 WebRTC Web 套接字服务器和其他路由器)
  * [测试](#测试)
  * [团队和协作工具](#团队和协作工具)
  * [翻译管理](#翻译管理)
  * [Vagrant 相关](#Vagrant 相关)
  * [访客会话记录](#访客会话记录)
  * [Web 托管](#Web 托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件仿真（用 JavaScript 编写）](#基于浏览器的硬件仿真（用 JavaScript 编写）)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主要云提供商

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天 28 个前端实例小时，每天 9 个后端实例小时
    * Cloud Firestore - 1GB 存储，每天 50,000 次读取，20,000 次写入，20,000 次删除
    * Compute Engine - 1 个非抢占式 e2-micro，30GB HDD，5GB 快照存储（限制在某些区域），每月从北美到所有区域目的地（不包括中国和澳大利亚）的 1GB 网络出口
    * Cloud Storage - 5GB，1GB 网络出口
    * Cloud Shell - 基于 Web 的 Linux 外壳/主要 IDE，具有 5GB 的持久存储。每周限制 60 小时
    * Cloud Pub/Sub - 每月 10GB 的消息
    * Cloud Functions - 每月 200 万次调用（包括后台和 HTTP 调用）
    * Cloud Run - 每月 200 万次请求，360,000GB 秒内存，180,000vCPU 秒计算时间，每月从北美 1GB 网络出口
    * Google Kubernetes Engine - 一个区域集群无需支付集群管理费用。每个用户节点按标准 Compute Engine 定价收费
    * BigQuery - 每月 1TB 的查询，每月 10GB 的存储
    * Cloud Build - 每天 120 分钟的构建时间
    * Cloud Source Repositories - 最多 5 个用户，50GB 存储，50GB 出口
    * [Google Colab](https://colab.research.google.com/) - 免费的 Jupyter Notebooks 开发环境。
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月 1TB 出口和每月 200 万次函数调用
    * [Cloudwatch](https://aws.amazon.com/cloudwatch/) - 10 个自定义指标和 10 个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月 100 分钟的构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 个活动用户，50GB 存储，每月 10000 次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月 1 个活动管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL 数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月 750 小时的 t2.micro 或 t3.micro（12 个月）。每月 100GB 出口
    * [EBS](https://aws.amazon.com/ebs/) - 每月 30GB 的通用（SSD）或磁性（12 个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月 750 小时（12 个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月 750 小时的 db.t2.micro、db.t3.micro 或 db.t4g.micro，20GB 的通用（SSD）存储，20GB 的存储备份
    * [Glacier](https://aws.amazon.com/glacier) - 10GB 长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月 100 万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月 100 万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月 3000 条消息（12 个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100 万条消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1 个 B1S Linux VM，1 个 B1S Windows VM（12 个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10 个 Web、移动或 API 应用（每天 60 CPU 分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月 100 万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 启用快速、轻松和精益的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月 50,000 个存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 个活动用户，无限制的私有 Git 存储库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 对于 Linux、macOS 和 Windows 的开源项目，提供 10 个免费的并行作业，无限制的分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天 8000 条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1 个免费的公共负载均衡 IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100 万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 每月 15GB 入站（12 个月）和 5GB 出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB 存储和 1000 RUs 的预配吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - 使用免费的 SSL、身份验证/授权和自定义域构建、部署和托管静态应用和无服务器功能
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS 文件或 Blob 存储（12 个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - 具有免费层的 AI/ML API（计算机视觉、翻译、面部检测、机器人等），包括有限的事务
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于 AI 的搜索和索引服务，10,000 个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管的 Kubernetes 服务，免费的集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月 10 万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2 个基于 AMD 的计算 VM，每个具有 1/8 OCPU 和 1GB 内存
       - 4 个基于 Arm 的 Ampere A1 核心和 24GB 内存，可作为一个 VM 或最多 4 个 VM 使用
       - 当[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时，实例将被回收
    * 块卷 - 2 个卷，总计 200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1 个实例，具有 10Mbps
    * 数据库 - 2 个数据库，每个 20GB
    * 监控 - 5 亿个摄取数据点，10 亿个检索数据点
    * 带宽 - 每月 10TB 出站，基于 x64 的 VM 速度限制为 50Mbps，基于 ARM 的 VM 速度限制为 500Mbps * 核心数
    * 公共 IP - 2 个 IPv4 用于 VM，1 个 IPv4 用于负载均衡器
    * 通知 - 每月 100 万次交付选项，每月发送 1000 封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * 对象存储 - 每月 25GB
    * Cloudant 数据库 - 1GB 数据存储
    * Db2 数据库 - 100MB 数据存储
    * API Connect - 每月 50,000 次 API 调用
    * 可用性监控 - 每月 300 万个数据点
    * 日志分析 - 每天 500MB 的日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量的域的免费 DNS，DDoS 保护，CDN 以及免费的 SSL，防火墙规则和页面规则，WAF，机器人缓解，免费的无计量速率限制 - 每个域 1 条规则，分析，电子邮件转发
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多 50 个用户，24 小时活动日志记录，三个网络位置
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) - 您可以通过隧道将本地运行的 HTTP 端口暴露到 trycloudflare.com 上的随机子域上，使用[Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)，无需账户。更多功能（TCP 隧道，负载均衡，VPN）在[Zero Trust](https://www.cloudflare.com/products/zero-trust/)免费计划中。
    * [Workers](https://developers.cloudflare.com/workers/) - 在 Cloudflare 的全球网络上免费部署无服务器代码——每日 10 万次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日 10 万次读取请求，每日 1000 次写入请求，每日 1000 次删除请求，每日 1000 次列表请求，1GB 存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10GB，每月 100 万次 A 类操作，每月 1000 万次 B 类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日读取 500 万行，每日写入 10 万行，1GB 存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上开发和部署您的 Web 应用程序。每月 500 次构建，100 个自定义域，集成 SSL，无限制的可访问席位，无限制的预览部署，以及通过 Cloudflare Workers 集成的全栈功能。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作

**[⬆️ 返回顶部](#table-of-contents)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包括一个部署服务器，一个静态网站），Cloud 66 为您提供在任何云上构建、部署和扩展应用程序所需的一切，无需担心“服务器问题”。
  * [Pulumi](https://www.pulumi.com/) - 现代基础设施即代码平台，允许您使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) - Terraform Cloud。免费远程状态管理和团队协作，最多可管理 500 个资源。
  * [scalr.com](https://scalr.com/) - Scalr 是一款 Terraform 自动化和协作（TACO）产品，用于更好地协作和自动化由 Terraform 管理的基础设施和配置。完全支持 Terraform CLI，OPA 集成和分层配置模型。无 SSO 税。所有功能都包括在内。免费使用最多 50 次运行/月。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员在 AWS 上自动化部署。在我们的免费层中，开发人员（单个用户）可以部署无限的静态网站、Web 服务和环境。我们每月提供 20 次免费作业执行，包括预览和自动部署在免费层中。

**[⬆️ 回到顶部](#table-of-contents)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) - 最多 5 个用户的无限公共和私有 Git 仓库，带有用于 CI/CD 的管道
  * [chiselapp.com](https://chiselapp.com/) - 无限公共和私有 Fossil 仓库
  * [codebasehq.com](https://www.codebasehq.com/) - 一个免费项目，具有 100MB 空间和两个用户
  * [Codeberg](https://codeberg.org/) - 免费和开源项目的无限公共和私有 Git 仓库（具有无限的协作者）。由 [Forgejo](https://forgejo.org/) 提供支持。带有 [Codeberg Pages](https://codeberg.page/) 的静态网站托管。带有 [Codeberg 的 CI](https://docs.codeberg.org/ci/) 的 CI/CD 托管。带有 [Codeberg Translate](https://translate.codeberg.org/) 的翻译托管。包括包和容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) - 无限私有和公共仓库。永远免费。由 GitLab 和 Sapphire 提供支持。不提供 CI/CD。
  * [GitHub](https://github.com/) - 无限公共仓库和无限私有仓库（具有无限的协作者）。包括 CI/CD、开发环境、静态托管、包和容器托管、项目管理和 AI Copilot
  * [gitlab.com](https://about.gitlab.com/) - 最多 5 个协作者的无限公共和私有 Git 仓库。包括 CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) - Framagit 是基于 Gitlab 软件的 Framasoft 的软件锻造，包括 CI、静态页面、项目页面和问题跟踪。
  * [heptapod.net](https://foss.heptapod.net/) - Heptapod 是 GitLab 社区版的友好分支，提供对 Mercurial 的支持
  * [ionicframework.com](https://ionicframework.com/appflow) - 使用 Ionic 开发应用程序的仓库和工具；您还有一个 Ionic 仓库
  * [NotABug](https://notabug.org) - NotABug.org 是一个自由软件代码协作平台，用于自由许可的项目，基于 Git
  * [OSDN](https://osdn.net/) - OSDN.net 是一个为开源软件开发人员提供的免费服务，提供 SVN/Git/Mercurial/Bazaar/CVS 仓库。
  * [Pagure.io](https://pagure.io) - Pagure.io 是一个免费和开源的软件代码协作平台，用于 FOSS 许可的项目，基于 Git
  * [perforce.com](https://www.perforce.com/products/helix-teamhub) - 免费 1GB 云和 Git、Mercurial 或 SVN 仓库。
  * [pijul.com](https://pijul.com/) - 无限免费和开源分布式版本控制系统。其独特功能基于健全的补丁理论，使其易于学习、使用和分发。解决了 git/hg/svn/darcs 的许多问题。
  * [plasticscm.com](https://plasticscm.com/) - 个人、OSS 和非营利组织免费
  * [projectlocker.com](https://projectlocker.com) - 一个免费的私有项目（Git 和 Subversion），具有 50MB 空间
  * [RocketGit](https://rocketgit.com) - 基于 Git 的仓库托管。无限公共和私有仓库。
  * [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（对于 GNU 项目）的协作软件开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（对于非 GNU 项目）的协作软件开发管理系统

**[⬆️ 回到顶部](#table-of-contents)**

## API、数据和机器学习

  * [Zerosheets](https://zerosheets.com) - 将您的 Google Sheets 电子表格转换为强大的 API，快速开发原型、网站、应用程序等。每月提供 500 次免费请求。
  * [IP.City](https://ip.city) — 每天 100 次免费 IP 地理位置请求
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的 API 套件，包括 IP 地理位置、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络抓取和自动化平台，可为任何网站创建 API 并提取数据。现成的抓取工具、集成代理和定制解决方案。每月免费计划包含 5 美元的平台信用额度。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的 API 或自动化工具（如 Zapier 和 Airtable）自动生成图像和 PDF 文档。无需 CSS/HTML。免费计划每月包含 50 张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 您需要的所有工具，以充分了解您的 API 和后端中正在发生的事情。具有自动 API 合同验证和监控。免费计划涵盖每月最多 20,000 次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问超过 120 多个 API，构建时考虑了质量、一致性和可靠性。免费计划每月涵盖多达 50 个 API 令牌。
  * [Arize AI](https://arize.com/) - 用于模型监控和根本原因分析的机器学习可观测性，例如数据质量和性能漂移。免费多达两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于开发可立即访问的单页 Web 应用程序。适用于 Java、Node.js、Perl、Python 和 Ruby。
  * [Beeceptor](https://beeceptor.com) - 在几秒钟内模拟一个 rest API，伪造 API 响应等等。每天免费 50 次请求，公共仪表板，开放端点（任何拥有仪表板链接的人都可以查看提交和答案）。
  * [bigml.com](https://bigml.com/) — 托管机器学习算法。开发无限免费任务，每个任务限制 16MB 数据。
  * [Browse AI](https://www.browse.ai) — 在网络上提取和监控数据。每月免费 50 个积分。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器 API，用于自动化、抓取、AI 代理 Web 访问、图像/pdf 生成等。每月免费计划包含 1k 次请求。
  * [Bruzu](https://bruzu.com/) — 自动化图像制作。使用 API、集成或无代码工作表生成大量图像变体。API 免费但带有水印。
  * [Calendarific](https://calendarific.com) - 为 200 多个国家/地区提供企业级公共假期 API 服务。免费计划每月包含 1,000 次调用。
  * [Canopy](https://www.canopyapi.co/) - 用于 Amazon.com 产品、搜索和类别数据的 GraphQL API。免费计划每月包含 100 次调用。
  * [Clarifai](https://www.clarifai.com) — 用于自定义人脸识别和检测的图像 API。能够训练 AI 模型。免费计划每月有 5,000 次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用 API 平台，可完全访问扩展的 API 库，包括文档转换、病毒扫描等，每月 800 次调用。
  * [Colaboratory](https://colab.research.google.com) — 基于 Web 的免费 Python 笔记本环境，带有 Nvidia Tesla K80 GPU。
  * [Collect2](https://collect2.com) — 创建一个 API 端点来测试、自动化和连接 Webhooks。免费计划允许两个数据集、2000 条记录、一个转发器和一个警报。
  * [CometML](https://www.comet.com/site/) - MLOps 平台，用于实验跟踪、模型生产管理、模型注册和完整的数据沿袭，涵盖从培训到生产的工作流程。个人和学者免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的商务 API，可从任何前端构建、放置和管理订单。开发人员计划每月允许 100 个订单和多达 1,000 个 SKU 免费。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，用于文档、图像、视频、音频和电子书。提供 REST API。适用于 Node.js、PHP、Python 的库。支持最大 50GB 的文件（对于付费计划）。免费层受文件大小和每天转换次数的限制。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - API 和微服务，提供广泛的信息，包括国家、地区、省份、城市、邮政编码等。免费层每天最多包含 100 次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用程序之间同步。它可以创建实时仪表板和报告、转换和操作值、收集和备份见解。免费计划拥有无限用户、100 次运行和每月 1000 行以及无限集成。
  * [CraftMyPDF](https://craftmypdf.com) - 使用拖放编辑器和简单的 API 从可重用模板自动生成 PDF 文档。免费计划每月包含 100 个 PDF 和三个模板。
  * [CurlHub](https://curlhub.io) — 用于检查和调试 API 调用的代理服务。免费计划每月包含 10,000 次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 用于金融科技应用的实时货币数据 API。免费计划每月包含 5,000 次调用。
  * [Cube](https://cube.dev/) - Cube 帮助数据工程师和应用程序开发人员从现代数据存储中访问数据，将其组织成一致的定义，并将其交付给每个应用程序。使用 Cube 的最快方法是使用 Cube Cloud，它具有每月 1GB 数据通过的免费层。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据在访问后自我销毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 将 Airtable 连接到任何应用程序或 API，无需代码。Airtable 中用于运行 API 请求的类似 Postman 的界面。与数十个应用程序的预构建集成。免费计划每月包含 100 次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于将数据连接、清理和导入 Salesforce 的工具。免费计划每月最多包含 20,000 条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains 的 Python 笔记本。每月包括 10GB 存储空间和 120 小时运行时间。
  * [Data Miner](https://dataminer.io/) - 用于从网页提取数据到 CSV 或 Excel 的浏览器扩展（Google Chrome、MS Edge）。免费计划每月为您提供 500 页。
  * [Datapane](https://datapane.com) - 用于在 Python 中构建交互式报告并将 Python 脚本和 Jupyter 笔记本部署为自助服务工具的 API。
  * [DB-IP](https://db-ip.com/api/free) - 免费 IP 地理位置 API，每个 IP 每天 1k 请求。CC-BY 4.0 许可证下的精简数据库也是免费的。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库架构设计和建模工具，免费入门计划包括 2 个数据库模型和每个模型 10 个表。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜，带有一个 SDK。免费计划提供多达 10 个每月活跃用户 (MAU) 并跟踪多达 4 张脸
  * [Deepnote](https://deepnote.com) - 新的数据科学笔记本。Jupyter 兼容实时协作并在云中运行。免费层包括无限个人项目、最多 750 小时的标准硬件以及最多 3 个编辑器的团队。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的网络抓取和数据提取平台，用于将任何网站转换为数据集或作为 API 与之合作。免费计划每月包含 5K 页面请求。
  * [Disease.sh](https://disease.sh/) — 一个免费的 API，提供准确的数据，用于构建与 Covid-19 相关的有用应用程序。
  * [Doczilla](https://www.doczilla.app/) — SaaS API 赋能直接从 HTML/CSS/JS 代码生成截图或 PDF。免费计划每月允许 250 个文档。
  * [Doppio](https://doppio.sh/) — 管理 API，使用顶级渲染技术生成和私有存储 PDF 和截图。免费计划每月允许 400 个 PDF 和截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 开源的 REST API 后端，用于移动、Web 和 IoT 应用程序。连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，它会立即创建一个具有实时文档和用户管理的综合 REST API 平台。
  * [DynamicDocs](https://advicement.io) - 使用基于 LaTeX 模板的 JSON 到 PDF API 生成 PDF 文档。免费计划每月允许 50 次 API 调用，并访问模板库。
  * [Efemarai](https://efemarai.com) - ML 模型和数据的测试和调试平台。可视化任何计算图。为开发人员提供每月 30 次免费调试会话。
  * [Einblick](https://www.einblick.ai/) - 一个现代数据科学平台，将 Python 笔记本带到协作画布，并包括自动化日常任务的工具，如构建预测模型（AutoML）或比较人群。免费层包括 5 个画布和无限的协作者。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 免费的基于 Web 的 HTTP 客户端，用于发送 HTTP 请求。
  * [Export SDK](https://exportsdk.com) - PDF 生成器 API，带有拖放模板编辑器，提供 SDK 和无代码集成。免费计划每月有 250 页，无限用户和三个模板。
  * [Fern](https://buildwithfern.com) - 使用您的 API 定义在流行语言中生成 SDK，并生成 API 参考文档网页。将 Markdown 页面添加到您的 API 参考中，并使用 Fern 托管它们以获得完整的文档解决方案。完全支持 OpenAPI。
  * [file.coffee](https://file.coffee/) - 一个平台，您可以在其中存储每个文件最多 15MB（使用帐户时为 30MB/文件）。
  * [Flatirons Fuse](https://flatironsdevelopment.com/products/fuse/) - 一个可嵌入的 CSV 和电子表格导入工具，使您的网站数据快速、轻松和无痛。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 筛选信用卡支付欺诈的订单交易。此 REST API 将根据订单的输入参数检测所有可能的欺诈特征。免费微型计划每月有 500 笔交易。
  * [Geekflare API](https://geekflare.com/api) - Geekflare API 允许您截图、审核网站、TLS 扫描、DNS 查找、测试 TTFB 等。免费计划提供 3,000 次 API 请求。
  * [GeoCod](https://geocod.xyz) — 免费地理编码 API：将邮政地址转换为地理坐标或将地理坐标转换为邮政地址（反向地理编码）。
  * [GeoDataSource](https://www.geodatasource.com) — 位置搜索服务使用纬度和经度坐标查找城市名称。免费 API 查询每月最多 500 次。
  * [Glitterly](https://glitterly.app/) - 从基本模板以编程方式生成动态图像。提供 Restful API 和无代码集成。免费层每月提供 50 张图像和五个模板。
  * [GoodData](https://www.gooddata.com/) - 数据即服务 - 创建交互式和有洞察力的仪表板。免费层包括五个工作区和每个工作区 100MB。
  * [Hex](https://hex.tech/) - 一个用于笔记本、数据应用和知识库的协作数据平台。免费社区版，最多可容纳 3 位作者和五个项目。每位作者有一个计算配置文件，具有 4GB RAM。
  * [Hook0](https://www.hook0.com/) - Hook0 是一个开源的 Webhooks-as-a-service（WaaS），使在线产品能够轻松提供 Webhooks。免费派遣每月最多 3,000 个事件，并保留七天的历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 一个免费、快速和美观的 API 请求构建器。
  * [Hybiscus](https://hybiscus.dev/) - 使用简单的声明式 API 构建 PDF 报告。免费层每月包括多达 100 个单页报告，并能够自定义调色板和字体。
  * [Invantive Cloud](https://cloud.invantive.com/) — 使用 Invantive SQL 或 OData4（通常是 Power BI 或 Power Query）访问超过 70 个（云）平台，如 Exact Online、Twinfield、ActiveCampaign 或 Visma。包括数据复制和交换。为开发人员和实施顾问提供免费计划。特定平台免费，但数据量有限制。
  * [ipaddress.sh](https://ipaddress.sh) — 获取不同[格式](https://about.ipaddress.sh/)的公共 IP 地址的简单服务。
  * [ipbase.com](https://ipbase.com) - IP 地理定位 API - 永远免费计划，每月涵盖 150 个请求。
  * [IP Geolocation](https://ipgeolocation.io/) — IP 地理定位 API - 为开发人员提供永远免费计划，每月 30k 请求（1k/天）限制。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract 的 IP 地理定位 API - 广泛的免费计划，每月允许 20,000 次请求。
  * [IP2Location](https://www.ip2location.com) — 免费增值 IP 地理定位服务。LITE 数据库可免费下载。在服务器中导入数据库并执行本地查询以确定城市、坐标和 ISP 信息。
  * [IP2Location.io](https://www.ip2location.io/) — 免费增值、快速可靠的 IP 地理定位 API，用于确定城市、坐标、ISP 等地理定位数据。免费计划每月提供 30k 积分。订阅付费计划以获取更高级的功能或联系我们获取个性化计划。
  * [ipapi](https://ipapi.co/) - IP 地址位置 API 由 Kloudend, Inc 提供 - 一个基于 AWS 构建的可靠地理定位 API，受到财富 500 强的信任。免费层每月提供 30k 次查找（1k/天），无需注册。
  * [ipapi.is](https://ipapi.is/) - 一个可靠的 IP 地址 API，来自开发人员，为开发人员提供最佳的主机检测功能。免费计划提供 1000 次查找，无需注册。
  * [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月最多 50k）的 IP 地址数据 API。提供有关地理位置、公司、运营商、IP 范围、域名、滥用联系人等详细信息的 API。所有付费 API 均可免费试用。
  * [IPList](https://www.iplist.cc) — 查找有关任何 IP 地址的详细信息，例如 Geo IP 信息、tor 地址、主机名和 ASN 详细信息。个人和商业用户免费。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代 Web 提供快速、准确且免费（无限制或每月最多 10K-50K）的 API，如 IP 地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [IPTrace](https://iptrace.io) — 一个令人尴尬的简单 API，为您的业务提供可靠和有用的 IP 地理定位数据。
  * [JSON2Video](https://json2video.com) - 一个视频编辑 API，用于自动化视频营销和社交媒体视频，以编程方式或无代码方式。
  * [JSON IP](https://getjsonip.com) — 返回请求它的客户端的公共 IP 地址。免费层无需注册。使用 CORS，可以使用客户端 JS 直接从浏览器请求数据。对监控客户端和服务器 IP 更改的服务很有用。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 一个免费服务，帮助开发人员存储 JSON 对象，并在他们的应用程序中使用该 JSON 作为 REST API。
  * [konghq.com](https://konghq.com/) — API 市场和强大的私有和公共 API 工具。免费层的一些功能，如监控、警报和支持，是有限的。
  * [Kreya](https://kreya.app) — 免费的 gRPC GUI 客户端，用于调用和测试 gRPC API。可以通过服务器反射导入 gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进您的机器学习模型。免费使用多达 1000 个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 一种登录安全 API，可检测欺诈和可疑登录并通知您的客户。每月免费提供 1,000 次登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) - 使用真实邮件服务器连接进行电子邮件验证服务，以确认有效电子邮件。免费 API 计划每月有 300 次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。免费永远 API 层允许每天免费进行 100 次 API 请求。
  * [Meteosource Weather API](https://www.meteosource.com/) - 全球天气 API，用于当前和预测的天气数据。预测基于机器学习组合更多天气模型以实现更高的准确性。免费计划每天提供 400 次调用。
  * [microlink.io](https://microlink.io/) - 将任何网站转换为数据，例如元标签规范化、美观的链接预览、抓取功能或截图作为服务。每天 100 次请求，每天免费。
  * [Mindee](https://developers.mindee.com/docs) - Mindee 是一款强大的 OCR 软件和 API 优先平台，通过使用计算机视觉和机器学习对关键信息进行数据识别，帮助开发人员通过标准化文档处理层来自动化应用程序的工作流程。免费层每月提供 250 页。
  * [monkeylearn.com](https://monkeylearn.com/) - 使用机器学习进行文本分析，每月免费查询 300 次。
  * [MockAPI](https://www.mockapi.io/) - MockAPI 是一个简单的工具，可让您快速模拟 API、生成自定义数据，并使用 RESTful 接口执行操作。MockAPI 旨在作为原型设计/测试/学习工具。免费提供一个项目/每个项目 4 个资源。
  * [Mockfly](https://www.mockfly.dev/) - Mockfly 是一款值得信赖的 API 模拟和功能标志管理开发工具。通过直观的界面快速生成和控制模拟 API。免费层每天提供 500 次请求。
  * [Mocki](https://mocki.io) - 一种工具，可让您创建与 GitHub 存储库同步的模拟 GraphQL 和 REST API。无需注册即可免费开发和使用简单的 REST API。
  * [Mocko.dev](https://mocko.dev/) - 代理您的 API，选择要在云中模拟的端点并检查流量，免费。加快您的开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 一个简单的网络应用程序，用于生成用于模拟 HTTP 请求的自定义 HTTP 响应。也可作为[开源](https://github.com/julien-lafont/Mocky)使用。
  * [reqres.in](https://reqres.in) - 一个免费托管的 REST-API，随时准备响应您的 AJAX 请求。
  * [microenv.com](https://microenv.com) - 为开发人员创建虚假的 REST API，有可能在 Docker 容器中生成代码和应用程序。
  * [neptune.ai](https://neptune.ai/) - 记录、存储、显示、组织、比较和查询您所有的 MLOps 元数据。个人免费：1 个成员，100GB 元数据存储，每月 200 小时监控。
  * [News API](https://newsapi.org) - 使用代码在网络上搜索新闻，并获取 JSON 结果。开发人员每月免费获得 3,000 次查询。
  * [Nordigen](https://nordigen.com) - 免费的开放银行数据 API。PSD2。将您的应用程序/软件与欧盟+英国的 2300 多家银行连接。
  * [Nyckel](https://www.nyckel.com) - 训练、部署和调用图像和文本 ML 模型。免费培训最多 5,000 个训练数据。每月免费调用 1000 次模型。
  * [Observable](https://observablehq.com/) - 一个使用数据创建、协作和学习的地方。免费：无限笔记本，无限发布，每个笔记本五个编辑器。
  * [OCR.Space](https://ocr.space/) - 一个 OCR API 解析图像和 PDF 文件，以 JSON 格式返回文本结果。每月免费提供 25,000 次请求。
  * [Duply.co](https://duply.co) - 从 API 和 URL 创建动态图像，设计模板一次并重复使用。免费层每月提供从 API 和 URL 创建的 70 张图像，通过表单最多可创建 100 张。
  * [OpenAPI3 Designer](https://openapidesigner.com/) - 免费直观地创建 Open API 3 定义。
  * [Orchest](https://orchest.io) - 用于数据科学的可视化管道编辑器和工作流编排器，免费提供一个实例，开源版本可用。
  * [parsehub.com](https://parsehub.com/) - 从动态站点提取数据，将动态网站转换为 API，免费提供五个项目。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 使用简单的 API 轻松将 HTML 或 URL 转换为 PDF。每月免费提供 100 次转换。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，可视化模板编辑器或 HTML 到 PDF，动态数据集成，以及带有 API 的 PDF 渲染。免费计划带有一个模板，每月 100 个 PDF。
  * [Pixela](https://pixe.la/) - 免费的日常数据库服务。所有操作均通过 API 执行。还可以使用热图和折线图进行可视化。
  * [Postbacks](https://postbacks.io/) - 请求稍后的 HTTP 回调。注册时免费提供 8,000 次请求。
  * [Postman](https://postman.com) - 使用 Postman 简化工作流程并创建更好的 API - 更快 - 这是一个用于 API 开发的协作平台。永远免费使用 Postman 应用程序。Postman 云功能也永远免费，但有一定限制。
  * [Insomnia](https://insomnia.rest) - 用于设计和测试 API 的开源 API 客户端，支持 REST 和 GraphQL。
  * [PrefectCloud](https://www.prefect.io/cloud/) - 一个用于数据流自动化的完整平台。所有计划每月包括 20,000 次免费运行。这足以满足大多数小企业的 ETL 需求。
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。永远免费为最多 5 个用户的团队提供，具有无限仪表板和图表、无代码图表构建器和协作 SQL 编辑器。
  * [PromptLeo](https://promptleo.com/) - 为创作者和开发人员提供的提示工程平台。它提供提示工程库、表单和 API。免费计划提供一个提示形成、一个提示 API 端点和每月 30 代。
  * [PromptLoop](https://www.promptloop.com/) - 使用 AI 和像 GPT-3 这样的大型语言模型，通过简单的电子表格公式在 Google Sheets 中转换、理解和分析文本。每月前 2,000 个积分免费。
  * [Crawlbase](https://crawlbase.com/) - 无需代理、基础设施或浏览器即可抓取和抓取网站。我们为您解决验证码问题并防止您被阻止。前 1000 次调用免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) - 免费公共 API 的列表。
  * [Supportivekoala](https://supportivekoala.com/) - 允许您通过模板根据您的输入自动生成图像。免费计划允许您每周创建多达 100 张图像。
  * [QuickMocker](https://quickmocker.com/) - 在您自己的子域下管理在线假 API 端点，将请求转发到本地主机 URL 进行 webhooks 开发和测试，使用 RegExp 和多个 HTTP 方法用于 URL 路径，优先考虑端点，超过 100 个短代码（动态或假响应值）用于响应模板，从 OpenAPI（Swagger）规范导入 JSON 格式，代理请求，通过 IP 地址和授权头限制端点。免费帐户提供一个随机子域、十个端点、5 个 RegExp URL 路径、每个端点 50 个短代码、每天 100 次请求和请求日志中的 50 条历史记录。
  * [Rapidapi](https://rapidapi.com/) - 世界上最大的 API 中心，数百万开发人员查找并连接到数千个 API，使用有趣的挑战（带有解决方案！）和交互式示例进行 API 开发。
  * [RequestBin.com](https://requestbin.com) - 创建一个免费端点，您可以向其发送 HTTP 请求。发送到该端点的任何 HTTP 请求都将记录相关的有效负载和标头，以便您可以观察来自 webhooks 和其他服务的建议。
  * [Roboflow](https://roboflow.com) - 创建和部署自定义计算机视觉模型，无需先前的机器学习经验。免费层级包括多达 1,000 个免费源图像。
  * [ROBOHASH](https://robohash.org/) - 从任何文本生成独特且酷炫图像的 Web 服务。
  * [SaturnCloud](https://saturncloud.io/) - 数据科学云环境，允许运行 Jupyter 笔记本和 Dask 集群。每月提供 30 小时的免费计算和 3 小时的 Dask。
  * [Scraper's Proxy](https://scrapersproxy.com) - 用于抓取的简单 HTTP 代理 API。匿名抓取，无需担心限制、封锁或验证码。每月前 100 次成功抓取免费，包括 JavaScript 渲染（如果您联系支持，可获得更多）。
  * [ScrapingAnt](https://scrapingant.com/) - 无头 Chrome 抓取 API 和免费检查代理服务。支持 JavaScript 渲染、高级旋转代理、避免 CAPTCHAs。提供免费计划。
  * [ScraperBox](https://scraperbox.com/) - 使用真实 Chrome 浏览器和代理轮换的不可检测网络抓取 API。使用简单的 API 调用即可抓取任何网页。免费计划每月有 1000 次请求。
  * [ScrapingDog](https://scrapingdog.com/) - Scrapingdog 处理数百万个代理、浏览器和 CAPTCHAs，只需一次 API 调用即可为您提供任何网页的 HTML。它还包括适用于 Chrome 和 Firefox 的 Web Scraper 以及即时抓取需求的软件。提供免费计划。
  * [scrapinghub.com](https://scrapinghub.com) - 具有可视化界面和插件的数据抓取。免费计划包括在共享服务器上无限制抓取。
  * [Simplescraper](https://simplescraper.io) - 每次操作后触发您的 Webhook。免费计划包括 100 个云抓取信用。
  * [Select Star](https://www.selectstar.com/) - 是一个智能数据发现平台，可自动分析和记录您的数据。免费轻型层级包括 1 个数据源、多达 100 个表和 10 个用户。
  * [Sheetson](https://sheetson.com) - 立即将任何 Google Sheets 转换为 RESTful API。提供免费计划。
  * [Shipyard](https://www.shipyardapp.com) - 用于云的低代码数据编排平台。结合低代码模板和您的代码（Python、Node.js、Bash、SQL）进行构建。我们的免费开发者计划为一个用户提供每月 10 小时的运行时间 - 足以自动化多个工作流程。
  * [shrtcode API](https://shrtco.de/docs) - 无需授权且无请求限制的免费 URL 缩短 API。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取 API。为 Google、YouTube、Bing、百度、沃尔玛和许多其他机器返回结构化 JSON 结果。免费计划每月包括 100 次成功的 API 调用。
  * [SmartParse](https://smartparse.io) - SmartParse 是一个数据迁移和 CSV 到 API 平台，提供节省时间和成本的开发人员工具。免费层级包括每月 300 个处理单元、浏览器上传、数据隔离、断路器和作业警报。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件并通过其 API 立即访问数据，允许更快的应用程序开发。免费计划包括每月 2 个 API 和 2,500 次 API 调用。您不需要信用卡。
  * [Stoplight](https://stoplight.io/) - 用于协作设计和记录 API 的 Saas。免费计划提供免费设计、模拟和文档工具。
  * [Svix](https://www.svix.com/) - Webhooks 即服务。每月免费发送多达 50,000 条消息。
  * [TemplateTo](https://templateto.com) - 使用我们的拖放编辑器和简单 API 从可重用模板自动生成 PDF/TXT 文档。免费计划包括每月 450 个 PDF 和三个模板。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能免费，无限制使用。
  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方 Webhooks 并在 localhost（ngrok 风格）上调试它们的工具。开源且可自托管。免费个人域名 *username*.github.webhook.store，免费公共域名 *anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai) - 开发者优先的 MLOps 平台。通过实验跟踪、数据集版本控制和模型管理更快地构建更好的模型。仅个人项目的免费层级，包括 100GB 存储空间。
  * [wit.ai](https://wit.ai/) - 面向开发人员的 NLP。
  * [wolfram.com](https://wolfram.com/language/) - 云中内置的基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) - 将任何网站转换为参数化 API。每月 30,000 次 API 调用。
  * [ZenRows](https://www.zenrows.com/) - 网络抓取 API 和代理服务器，绕过任何反机器人解决方案，同时提供 JavaScript 渲染、旋转代理和地理定位。免费层级有 1000 次 API 调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) - 带有无头浏览器、住宅 IP 和简单定价的网络抓取 API。每月 1000 次免费 API 调用，学生和非营利组织有额外信用。
  * [ip-api](https://ip-api.com) - IP 地理位置 API，免费用于非商业用途，无需 API 密钥，免费计划限制为同一 IP 地址每分钟 45 次请求。
  * [WebScraping.AI](https://webscraping.ai) - 带有内置解析、Chrome 渲染和代理的简单网络抓取 API。每月 2000 次免费 API 调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮政编码 API，访问全球邮政编码数据。每月 10,000 次免费请求。
  * [huggingface.co](https://huggingface.co) - 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。每月免费高达 30,000 个输入字符。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号码验证 API。每月 500 次免费请求。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100,000 次免费请求。
  * [Volca](https://volca.io#api) - 免费 API，提供编程语言和数据库系统等技术列表。无限次免费请求。
  * [Query.me](https://query.me) - 协作数据笔记本，执行类似脚本的操作，并允许通过 SQL、API 和许多自定义块（如 Slack 和电子邮件）获取和发送数据。小团队免费。
  * [ERD Lab](https://www.erdlab.io) - 免费的基于云的实体关系图（ERD）工具，专为开发人员设计。
  * [What The Diff](https://whatthediff.ai) - 由 AI 驱动的代码审查助手。免费计划每月限制 25,000 个令牌（约 10 个 PR）。
  * [Zipcodestack](https://zipcodestack.com) - 免费邮政编码 API 和邮政编码验证。每月 10,000 次免费请求。
  * [Zuplo](https://zuplo.com/) - 在几分钟内为任何 API 添加 API 密钥身份验证、速率限制和开发人员文档。免费计划提供多达 10 个项目、无限制的生产边缘环境、250 个 API 密钥、100,000 次每月请求和 1GB 出口。
  * [OpenWeb Ninja](https://www.openwebninja.com/) - 极其全面的实时 SERP 和公共数据 API：Google 搜索、购物、工作、图像、镜头、新闻、Google 地图商家/地点、评论、照片、网站电子邮件和社交联系人抓取器、亚马逊、Yelp 等。所有 API 都包括一个免费层级，每月有 100 到 200 次免费请求。
  * [Tavily AI](https://tavily.com/) - 用于在线搜索和快速洞察以及全面研究的 API，具有组织研究结果的能力。免费层级每月 1000 次请求，无需信用卡。
  * [Zuplo](https://zuplo.com) - 免费 API 管理平台，用于设计、构建和部署 API 到边缘。在几分钟内添加身份验证、速率限制、API 文档和货币化。支持 OpenAPI 原生和完全可编程，具有网络标准 API 和 Typescript。

**[⬆️ 返回顶部](#table-of-contents)**

## 制品仓库


  * [Artifactory](https://jfrog.com/start-free/) - 一个支持众多包格式的制品仓库，如 Maven、Docker、Cargo、Helm、PyPI、CocoaPods 和 GitLFS。包括包扫描工具 XRay 和 CI/CD 工具 Pipelines（原名 Shippable），每月有 2000 分钟的免费 CI/CD 时间。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT 和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共 Maven 和 PyPi 仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 用于 Java/Maven、RedHat、Debian、Python、Ruby、Vagrant 等的简单、安全和集中式仓库服务。有免费层，开源免费。
  * [jitpack.io](https://jitpack.io/) — GitHub 上 JVM 和 Android 项目的 Maven 仓库，公共项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 易于使用的 Maven、RPM、DEB、PyPi、NPM 和 RubyGem 包的仓库托管（有免费层）。
  * [repsy.io](https://repsy.io) — 1GB 免费的私有/公共 Maven 仓库。
  * [Gemfury](https://gemfury.com) — Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 仓库的私有和公共制品仓库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展 AI 模型，开发、训练和部署 AI 应用程序，免费计划：公共项目，5GB 存储，基本实例。

**[⬆️ 返回顶部](#table-of-contents)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 一款免费的基于云的个人和协作代码片段管理器。
  * [Bitwarden](https://bitwarden.com) - 个人、团队和商业组织存储、共享和同步敏感数据的最简单、最安全的方式。
  * [Braid](https://www.braidchat.com/) - 专为团队设计的聊天应用。公共访问组、无限用户、历史记录和集成免费。还提供可自托管的开源版本。
  * [cally.com](https://cally.com/) - 找到会议的完美时间和日期。简单易用，适用于大小团队。
  * [Calendly](https://calendly.com) - Calendly 是用于连接和安排会议的工具。免费计划为每个用户提供 1 个日历连接和无限会话。还提供桌面和移动应用程序。
  * [Discord](https://discord.com/) - 与公共/私人房间聊天。Markdown 文本、语音、视频和屏幕共享功能。无限用户免费。
  * [Telegram](https://telegram.org/) - Telegram 适用于希望快速、可靠地发送消息和通话的每个人。商业用户和小团队可能喜欢大型群组、用户名、桌面应用程序和强大的文件共享选项。
  * [Dubble](https://dubble.so/) - 免费的分步指南创建者。截图、记录流程并与团队协作。还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) - 与团队实时交谈和协作。具有 IDE、终端共享、语音、视频和屏幕共享的配对编程。小团队免费。
  * [Dyte](https://dyte.io) - 最具开发者友好性的实时视频和音频 SDK，具有协作插件以提高生产力和参与度。免费层级包括每月 10,000 分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/) - 用于组织信息的工具。与他人共享您的笔记并一起工作
  * [Fibery](https://fibery.io/) - 连接的工作区平台。单用户免费，最多 2GB 磁盘空间。
  * [Filestash](https://www.filestash.app) - 类似于 Dropbox 的文件管理器，可连接到一系列协议和平台：S3、FTP、SFTP、Minio、Git、WebDAV、Backblaze、LDAP 等。
  * [flock.com](https://flock.com) - 您团队沟通的更快方式。免费无限消息、频道、用户、应用程序和集成
  * [Gather](https://www.gather.town/) - 更好的在线会议方式。以完全可定制的空间为中心，Gather 使与您的社区共度时光与现实生活一样轻松。最多 10 个并发用户免费。
  * [gokanban.io](https://gokanban.io) - 基于语法的、无需注册的看板，可快速使用。免费且无限制。
  * [flat.social](https://flat.social) - 用于团队会议和欢乐时光社交的交互式可定制空间。无限会议，最多 8 个并发用户免费。
  * [GitDailies](https://gitdailies.com) - 您团队在 GitHub 上的提交和拉取请求活动的每日报告。包括推送可视化器、同行认可系统和自定义警报构建器。免费层级有无限用户、三个存储库和 3 个警报配置。
  * [gitter.im](https://gitter.im/) - 用于 GitHub 的聊天。无限公共和私人房间，最多 25 人的团队免费
  * [Hackmd.io](https://hackmd.io/) - 用于 Markdown 格式文档/文件的实时协作和写作工具。就像 Google Docs 但适用于 Markdown 文件。免费无限制的“笔记”数量，但私人笔记和模板的协作者（受邀者）数量[将受到限制](https://hackmd.io/pricing)。
  * [hangouts.google.com](https://hangouts.google.com/) - 您所有对话的一个地方，免费，需要 Google 帐户
  * [HeySpace](https://hey.space) - 具有聊天、日历、时间线和视频通话的任务管理工具。最多 5 个用户免费。
  * [helplightning.com](https://www.helplightning.com/) - 带有增强现实的视频帮助。免费，无分析、加密、支持
  * [ideascale.com](https://ideascale.com/) - 允许客户提交想法并投票，1 个社区中最多 25 名成员免费
  * [Igloo](https://www.igloosoftware.com/) - 用于共享文档、博客、日历等的内部门户。最多 10 个用户免费。
  * [Keybase](https://keybase.io/) - Keybase 是 Slack 的 FOSS 替代品；它可以保护每个人的聊天和文件安全，从家庭到社区再到公司。
  * [Google Meet](https://meet.google.com/) - 使用 Google Meet 满足您企业的在线视频会议需求。Meet 提供安全、易于加入的在线会议。
  * [/meet for Slack](https://meetslack.com) - 通过在任何频道、组或 DM 中使用 /meet 直接从 Slack 启动 Google 会议。免费且无任何限制。
  * [Livecycle](https://www.livecycle.io/) - Livecycle 是一个包容性的协作平台，使跨职能产品团队和开源项目的工作流程无摩擦。
  * [MarkUp](https://www.markup.io/) - MarkUp 允许您直接在您的网站、PDF 和图像上收集反馈。
  * [Proton Pass](https://proton.me/pass) - 带有内置电子邮件别名、2FA 身份验证器、共享和密码的密码管理器。可在网络、浏览器扩展、移动应用程序和桌面上使用。
  * [Visual Debug](https://visualdebug.com) - 一种用于更好的客户端-开发人员沟通的视觉反馈工具
  * [meet.jit.si](https://meet.jit.si/) - 一键视频对话和屏幕共享，免费
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free) - Microsoft Teams 是一个基于聊天的数字中心，将对话、内容和应用程序集中在一个地方，所有这些都来自单一体验。最多 50 万用户免费。
  * [Miro](https://miro.com/) - 可扩展、安全、跨设备且企业就绪的协作白板，适用于分布式团队。具有免费增值计划。
  * [nootiz](https://www.nootiz.com/) - 用于收集和管理任何网站上的视觉反馈的首选工具
  * [Notion](https://www.notion.so/) - Notion 是一款具有 Markdown 支持的笔记和协作应用程序，集成了任务、维基和数据库。该公司将该应用程序描述为用于笔记、项目管理和任务管理的多合一工作区。除了跨平台应用程序外，还可以通过大多数网络浏览器访问它。
  * [Nuclino](https://www.nuclino.com) - 一个轻量级的协作维基，用于您团队的所有知识、文档和笔记。免费计划具有所有基本功能，最多 50 个项目和 5GB 存储空间。
  * [OnlineInterview.io](https://onlineinterview.io/) - 带有嵌入式视频聊天、绘图板和在线代码编辑器的免费代码面试平台，您可以在浏览器上编译和运行您的代码。您只需单击一下即可创建远程面试室。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一款简单的团队时间表和时间跟踪应用程序。免费计划具有时间跟踪和生成报告功能，最多可供 10 个用户使用。
  * [PageShare.dev](https://www.pageshare.dev) - 将视觉审查功能添加到 GitHub 拉取请求中，无需部署网站。每月最多 10 页和总共 100MB 存储空间免费。
  * [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，它通过易于使用的界面和有价值的统计数据帮助您更好地管理时间。
  * [Pumble](https://pumble.com) - 免费团队聊天应用程序。无限用户和消息历史记录，永远免费。
  * [Raindrop.io](https://raindrop.io) - 适用于 macOS、Windows、Android、iOS 和 Web 的私有和安全书签应用程序。免费无限书签和协作。
  * [element.io](https://element.io/) - 基于 Matrix 构建的去中心化和开源通信工具。群聊、直接消息传递、加密文件传输、语音和视频聊天，以及与其他服务的轻松集成。
  * [Rocket.Chat](https://rocket.chat/) - 具有全渠道功能、Matrix 联盟、与其他应用程序桥接、无限消息传递和完整消息历史记录的开源通信平台。
  * [seafile.com](https://www.seafile.com/) - 私人或云存储、文件共享、同步、讨论。云版本只有 1GB。
  * [Sema](https://www.semasoftware.com/) - 能够将多个存储库中的贡献合并并快照到单个报告中的免费开发者组合工具。
  * [Slab](https://slab.com/) - 适用于团队的现代知识管理服务。最多 10 个用户免费。
  * [slack.com](https://slack.com/) - 无限用户免费，但有一些功能限制。
  * [Spectrum](https://spectrum.chat/) - 免费创建公共或私人社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。您可以跟踪上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容策划和笔记的可视化协作应用程序。最多 3 个墙、无限用户和 1GB 存储空间免费。
  * [talky.io](https://talky.io/) - 免费的群组视频聊天。匿名。点对点。无需插件、注册或付款。
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持带有泳道的看板和完整的 Scrum 实施。具有集成的时间跟踪功能。最多 5 个用户和 3 个项目组合免费。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站立会议改进团队开发流程。包括针对远程团队的全功能休假管理。最多 5 个用户的小组免费。
  * [Tefter](https://tefter.io) - 具有强大的 Slack 集成的书签应用程序。开源团队免费。
  * [TeleType](https://teletype.oorja.io/) - 共享终端、语音、代码、白板等。开发人员进行端到端加密协作无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 无限用户免费的时间跟踪软件。轻松与 Jira、Trello、Asana 等 PM 工具集成。
  * [twist.com](https://twist.com) - 异步友好的团队通信应用程序，对话保持组织和主题。提供免费和无限计划。为符合条件的团队提供折扣。
  * [tldraw.com](https://tldraw.com) - 免费的开源白板和绘图工具，具有智能箭头、捕捉、便签和 SVG 导出功能。支持多人协作编辑。也提供免费的官方 VS Code 扩展。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费的一体化书签管理器、标签管理器和任务管理器，可在可自定义的在线桌面上进行文件夹协作。
  * [typetalk.com](https://www.typetalk.com/) - 通过网络或移动设备上的即时消息与团队分享和讨论想法。
  * [Tugboat](https://tugboat.qa) - 自动和按需预览每个拉取请求。对所有人免费，为非营利组织提供免费的 Nano 层。
  * [whereby.com](https://whereby.com/) - 一键式视频对话，免费（以前称为 appear.in）。
  * [windmill.dev](https://windmill.dev/) - Windmill 是一个开源开发平台，可快速从最小的 Python 和 Typescript 脚本构建生产级多步骤自动化和内部应用程序。作为免费用户，您最多可以创建并成为三个非高级工作区的成员。
  * [vadoo.tv](https://vadoo.tv/) - 视频托管和营销变得简单。一键上传视频。录制、管理、分享等。免费层提供多达 10 个视频、1GB 存储空间和 10GB 带宽/月。
  * [userforge.com](https://userforge.com/) - 相互连接的在线角色、用户故事和上下文映射。帮助保持设计和开发同步，最多 3 个角色和 2 个协作者免费。
  * [wistia.com](https://wistia.com/) - 具有观众分析、高清视频交付和营销工具的视频托管，可帮助您了解访问者，25 个视频和 Wistia 品牌播放器。
  * [wormhol.org](https://www.wormhol.org/) - 简单的文件共享服务。与任意数量的对等方共享最大 5GB 的无限文件。
  * [Wormhole](https://wormhole.app/) - 使用端到端加密共享最大 5GB 的文件，最长 24 小时。对于大于 5GB 的文件，它使用点对点传输直接发送您的文件。
  * [zoom.us](https://zoom.us/) - 提供安全的视频和网络会议附加组件。免费计划限制为 40 分钟。
  * [Zulip](https://zulip.com/) - 具有独特的类似电子邮件的线程模型的实时聊天。免费计划包括 10,000 条搜索历史消息和最多 5GB 的文件存储。此外，它还提供了可自托管的开源版本。
  * [robocorp.com](https://robocorp.com) - 用于推动自动化运营的开源堆栈。免费试用云功能并实现简单的自动化。机器人工作 240 分钟/月，10 次助理运行，100MB 存储空间。
  * [Fleep.io](https://fleep.io/) - Fleep 是 Slack 的替代品。它为小团队提供了一个免费计划，具有完整的消息历史记录、无限的 1:1 对话、1 个群组对话和 1GB 文件存储。
  * [Chanty.com](https://chanty.com/) - Chanty 是 Slack 的另一种替代品。它为小团队（最多 10 个）提供了一个永远免费的计划，具有无限的公共和私人对话、可搜索的历史记录、无限的 1:1 音频通话、无限的语音消息、十个集成和每个团队 20GB 的存储空间。
  * [ruttl.com](https://ruttl.com/) - 收集数字反馈和审查网站、PDF 和图像的最佳一体化反馈工具。
  * [Mattermost](https://mattermost.com/) - 技术团队的安全协作。免费计划包括无限频道、剧本、看板、用户、10GB 存储空间等。
  * [Webvizio](https://webvizio.com) - 网站反馈工具、网站审查软件和错误报告工具，用于直接在实时网站和 Web 应用程序、图像、PDF 和设计文件上简化 Web 开发协作。
  * [Pullflow](https://pullflow.com) - Pullflow 提供了一个 AI 增强的平台，用于跨 GitHub、Slack 和 VS Code 进行代码审查协作。
  * [Webex](https://www.webex.com/) - 视频会议，免费计划提供每次会议 40 分钟，最多 100 名参与者。
  * [RingCentral](https://www.ringcentral.com/) - 视频会议，免费计划提供每次会议 50 分钟，最多 100 名参与者。
  * [GitBook](https://www.gitbook.com/) - 用于捕获和记录技术知识的平台 - 从产品文档到内部知识库和 API。个人开发者免费计划。
  * [transfernow](https://www.transfernow.net/) - 最简单、最快、最安全的传输和共享文件界面。无需强制订阅即可发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/) - 这是一个基于 JavaScript 和 Crypto 的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/) - [Discord](https://discord.com/)的开源替代品，尊重您的隐私。它还免费提供了大多数专有的 Discord 功能。Revolt 是一个安全快速的一体化应用程序，同时 100%免费。所有功能都是免费的。与大多数主流聊天应用程序不同，它们还支持（官方和非官方）插件。
  * [Tencent RTC](https://trtc.io/) - 腾讯实时通信（TRTC）提供群组音频/视频通话解决方案。第一年每月免费 10,000 分钟。
  * [Pastefy](https://pastefy.app/) - 美观简单的 Pastebin，具有可选的客户端加密、多标签粘贴、API、突出显示的编辑器等。

**[⬆️ 返回顶部](#table-of-contents)**

## CMS

  * [acquia.com](https://www.acquia.com/) — Drupal 站点的托管。为开发者提供免费层级。还提供免费的开发工具（如 Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) — 无头 CMS。云中的内容管理和交付 API。附带一个免费的社区空间，包括五个用户、25K 记录、48 个内容类型、2 个区域设置。
  * [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。为开发者提供免费的个人计划。
  * [Crystallize](https://crystallize.com) — 支持电子商务的无头 PIM。内置 GraphQL API。免费版本包括无限用户、1000 个目录项、5GB/月带宽和 25k/月 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层级。DatoCMS 是一个基于 GraphQL 的 CMS。在较低层级，您有 100k/月的调用。
  * [Directus](https://directus.io) — 无头 CMS。一个完全免费和开源的平台，用于在本地或云中管理资产和数据库内容。没有限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 无头 CMS，直接将 JSON 内容存储在您的 Git 存储库中。没有限制。
  * [kontent.ai](https://www.kontent.ai) - 一个内容即服务平台，在为您提供所有无头 CMS 优势的同时，还能为营销人员提供支持。开发者计划为两个用户提供无限项目，每个项目有两个环境，500 个内容项，两种语言，具有交付和管理 API，以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
  * [Prismic](https://www.prismic.io/) — 无头 CMS。具有完全托管和可扩展 API 的内容管理界面。社区计划为一个用户提供无限的 API 调用、文档、自定义类型、资产和区域设置。您下一个项目所需的一切。对于开放内容/开源项目，有更大的免费计划可用。
  * [Sanity.io](https://www.sanity.io/) - 用于结构化内容的平台，具有开源编辑环境和实时托管数据存储。无限项目。每个项目免费包括无限管理员用户、三个非管理员用户、两个数据集、500K API CDN 请求、10GB 带宽和 5GB 资产。
  * [sensenet](https://sensenet.com) - API 优先的无头 CMS，为各种规模的企业提供企业级解决方案。开发者计划提供三个用户、500 个内容项、三个内置角色、25+5 个内容类型、完全可访问的 REST API、文档预览生成和 Office Online 编辑。
  * [TinaCMS](https://tina.io/) — 取代 Forestry.io。开源的 Git 支持的无头 CMS，支持 Markdown、MDX 和 JSON。基本提供免费，有两个用户可用。
  * [GatsbyjsCMS](https://www.gatsbyjs.com/) - Gatsby 是一个快速灵活的框架，使使用任何 CMS、API 或数据库构建网站再次变得有趣。构建和部署无头网站，推动更多流量，更好地转换，并赚取更多收入！
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费层级。GraphQL 优先 API。从传统解决方案转移到 GraphQL 原生无头 CMS - 并首先提供全渠道内容 API。
  * [Squidex](https://squidex.io/) - 为小型项目提供免费层级。API / GraphQL 优先。开源并基于事件源（自动版本化每个更改）。
  * [InstaWP](https://instawp.com/) - 在几秒钟内启动一个 WordPress 站点。免费层级包括 5 个活动站点、500MB 空间、48 小时站点过期。
  * [Storyblok](https://www.storyblok.com) - 一个为开发者和营销人员设计的无头 CMS，适用于所有现代框架。社区（免费）层级提供管理 API、可视化编辑器、十个源、自定义字段类型、国际化（无限语言/区域设置）、资产管理器（最多 2500 个资产）、图像优化服务、搜索查询、Webhook + 250GB 流量/月。
  * [WPJack](https://wpjack.com) - 在不到 5 分钟内在任何云上设置 WordPress！免费层级包括 1 个服务器、2 个站点、免费 SSL 证书和无限 cron 作业。没有时间限制或过期 - 您的网站，您的方式。

**[⬆️ 返回顶部](#table-of-contents)**



## 代码生成


  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用构建器。在自动生成的后端代码中，用户完全可以访问源代码和无限的 API 和路由，允许进行广泛的集成。免费计划包括三个项目、五个表和一个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一个编码 AI 助手，它使用 AI 和对您的代码库的深入理解来帮助您更快地编写和理解代码。Cody 为开发人员提供了 LLM（包括本地推理）的选择，支持各种 IDE，支持所有流行的编程语言，并具有免费计划。免费计划每月为开发人员提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动完成（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 借助 DhiWise 的创新代码生成技术，将 Figma 设计无缝转换为动态的 Flutter 和 React 应用程序，优化您的工作流程，并帮助您比以往更快地创建出色的移动和 Web 体验。
  * [Codeium](https://www.codeium.com/) — Codeium 是一个免费的 AI 驱动的代码完成工具。它支持超过 20 种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等），并与所有主要的独立和 Web IDE 集成。
  * [Fern](https://buildwithfern.com) - 编写 API 定义，并使用它们在流行语言（如 TypeScript、Python、Java、Go 等）中生成 SDK/客户端库。完全支持 OpenAPI。免费层级最多可为 20 个端点生成代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于 C#。Metalama 在编译期间即时生成代码的样板，因此您的源代码保持干净。它对开源项目是免费的，其商业友好的免费层级包括三个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是一个用于 VSCode、JetBrains 和 Neovim 的快速 AI 代码完成插件。免费层级提供无限的内联完成。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine 通过提供从世界上所有代码中学到的见解，帮助开发人员更快地创建更好的软件。插件可用。
  * [v0.dev](https://v0.dev/) — v0 使用 AI 模型根据简单的文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可复制粘贴的 React 代码，人们可以在他们的项目中使用。每次生成至少需要 30 个积分。您开始时有 1200 个积分，每月获得 200 个免费积分。

**[⬆️ 返回顶部](#table-of-contents)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个完整的工作流程，用于编写、审查和部署代码，一个用户的免费账户，以及一个具有 100MB 存储空间的存储库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，仅免费提供 3 分钟的会话，在 Vista 系统下以 1024 x 768 分辨率使用 MS IE 9
  * [codacy.com](https://www.codacy.com/) — 自动化代码审查，适用于 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript，对无限的公共和私人存储库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 用于 DevOps 的自动化基础设施即代码审查工具，与 GitHub、Bitbucket 和 GitLab（甚至自托管）集成。除了标准语言外，它还分析 Ansible、Terraform、CloudFormation、Kubernetes 等。（开源免费）
  * [CodeBeat](https://codebeat.co) — 适用于多种语言的自动化代码审查平台。对具有 Slack 和电子邮件集成的公共存储库永远免费。
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，对开源和无限的组织拥有的私人存储库（最多 4 个协作者）免费。对学生和机构也免费。
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（SaaS），对开源和一个免费的私人存储库免费
  * [CodeFactor](https://www.codefactor.io) — 适用于 Git 的自动化代码审查。免费版本包括无限用户、公共存储库和一个私人存储库。
  * [codescene.io](https://codescene.io/) - CodeScene 根据开发人员与代码的工作方式确定技术债务的优先级，并可视化组织因素，如团队耦合和系统掌握。对开源免费。
  * [CodSpeed](https://codspeed.io) - 在您的 CI 管道中自动跟踪性能。由于精确和一致的指标，在部署前捕获性能回归。对开源项目永远免费。
  * [coveralls.io](https://coveralls.io/) — 显示测试覆盖率报告，对开源免费
  * [dareboost](https://dareboost.com) - 每月 5 次免费的网络性能、可访问性和安全性分析报告
  * [deepcode.ai](https://www.deepcode.ai) — DeepCode 基于 AI 发现错误、安全漏洞、性能和 API 问题。DeepCode 的分析速度允许我们实时分析您的代码，并在您在 IDE 中点击保存按钮时提供结果。支持的语言是 Java、C/C++、JavaScript、Python 和 TypeScript。与 GitHub、BitBucket 和 GitLab 集成。对开源和私人存储库以及最多 30 个开发人员免费。
  * [deepscan.io](https://deepscan.io) — 用于自动查找 JavaScript 代码中的运行时错误的高级静态分析，对开源免费
  * [DeepSource](https://deepsource.io/) - DeepSource 持续分析源代码更改，查找和修复归类为安全、性能、反模式、错误风险、文档和样式的问题。与 GitHub、GitLab 和 Bitbucket 的原生集成。
  * [eversql.com](https://www.eversql.com/) — EverSQL - 用于数据库优化的#1 平台。自动获得对您的数据库和 SQL 查询的关键洞察。
  * [gerrithub.io](https://review.gerrithub.io/) — 免费为 GitHub 存储库提供 Gerrit 代码审查
  * [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率
  * [goreportcard.com](https://goreportcard.com/) — Go 项目的代码质量，对开源免费
  * [gtmetrix.com](https://gtmetrix.com/) — 报告和全面的建议，以优化网站
  * [holistic.dev](https://holistic.dev/) - 用于 PostgreSQL 优化的#1 静态代码分析器。性能、安全性和架构数据库问题自动检测服务
  * [houndci.com](https://houndci.com/) — 在 GitHub 提交上关于代码质量的评论，对开源免费
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构。Moderne 提供框架迁移、带有修复的代码分析和无与伦比的大规模代码转换，因此开发人员可以花费时间构建新事物，而不是维护旧事物。对开源免费。
  * [reviewable.io](https://reviewable.io/) — GitHub 存储库的代码审查，对公共或个人存储库免费。
  * [parsers.dev](https://parsers.dev/) - 作为服务的抽象语法树解析器和中间表示编译器
  * [scan.coverity.com](https://scan.coverity.com/) — 用于 Java、C/C++、C#和 JavaScript 的静态代码分析，对开源免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，对开源免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — GitHub 拉取请求和提交的编程语言感知差异，对公共存储库免费
  * [shields.io](https://shields.io) — 开源项目的质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) — 用于 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 甚至更多语言的自动化源代码分析，对开源免费
  * [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。对开源和最多 5 个协作者的组织免费。
  * [Viezly](https://viezly.com/) - 增强的代码审查工具，便于代码阅读和导航。对开源和个人使用免费。
  * [webceo.com](https://www.webceo.com/) — SEO 工具，但也具有代码验证和不同类型的设备
  * [zoompf.com](https://zoompf.com/) — 修复您的网站性能，详细分析

**[⬆️ 返回顶部](#table-of-contents)**



## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 32 种不同包管理器的搜索和依赖项更新通知，对开源免费
  * [Namae](https://namae.dev/) - 在 GitHub、Gitlab、Heroku、Netlify 等各种网站上搜索您的项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，对开源免费
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（和其他标记），以识别值得返回改进的代码区域。
  * [CodeKeep](https://codekeep.io) - 代码片段的 Google Keep。组织、发现和共享代码片段，具有强大的代码截图工具，带有预设模板和链接功能。

**[⬆️ 返回顶部](#table-of-contents)**

## 持续集成和持续部署


  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动化的 Web 可访问性测试引入到您的开发工作流程中。它对开源和教育目的是免费的。
  * [appcircle.io](https://appcircle.io) — 一个企业级的移动 DevOps 平台，可自动构建、测试和发布移动应用程序，以实现更快、更高效的发布周期。免费提供最长 30 分钟的每次构建时间、20 次每月构建和 1 个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — 适用于 Windows 的 CD 服务，对开源免费
  * [Argonaut](https://argonaut.dev/) - 在几分钟内将应用程序和基础设施部署到您的云中。支持在 Kubernetes 和 Lambda 环境上进行自定义和第三方应用程序部署。免费层级允许为 5 个域和 2 个用户提供无限的应用程序和部署。
  * [bitrise.io](https://www.bitrise.io/) — 适用于移动应用程序（原生或混合）的 CI/CD。每月提供 200 次免费构建，每次构建时间为 10 分钟，支持两名团队成员。OSS 项目获得 45 分钟的构建时间、+1 个并发和无限的团队规模。
  * [buddy.works](https://buddy.works/) — 一个具有五个免费项目和一次并发运行（每月 120 次执行）的 CI/CD
  * [buddybuild.com](https://www.buddybuild.com/) — 在一个无缝、迭代的系统中为您的 iOS 和 Android 应用程序构建、部署和收集反馈
  * [Buildkite](https://buildkite.com) CI 管道免费提供给 3 个用户和每月 5k 作业分钟。测试分析免费开发者层级包括每月 100k 次测试执行，开源项目有更多免费包含项。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps。在 20 个用户和十个数据库实例下免费
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包括在托管的 CI/CD 服务中为 GitHub、GitLab 和 BitBucket 存储库提供的所有功能。多个资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试拆分、Docker 层缓存和其他高级 CI/CD 功能。每月执行时间最多 6000 分钟、无限的协作者、私有项目中的 30 个并行作业，以及开源项目的最多 80,000 分钟免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 对公共 GitHub 存储库免费
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1 个构建、一个环境、共享服务器、无限的公共存储库
  * [codemagic.io](https://codemagic.io/) - 每月免费 500 构建分钟
  * [codeship.com](https://codeship.com/) — 每月 100 次私有构建、五个私有项目，对开源无限
  * [deploybot.com](https://www.deploybot.com/) — 1 个存储库，带有十个部署，对开源免费
  * [deployhq.com](https://www.deployhq.com/) — 1 个项目，带有十个每日部署（每月 30 分钟构建时间）
  * [drone](https://cloud.drone.io/) - Drone Cloud 使开发人员能够在一个地方跨多个架构（包括 x86 和 Arm（32 位和 64 位））运行持续交付管道
  * [LayerCI](https://layerci.com) — 全栈项目的 CI。一个具有 5GB 内存和 3 个 CPU 的全栈预览环境。
  * [semaphoreci.com](https://semaphoreci.com/) — 对开源免费，每月 100 次私有构建
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建一个 VM，并使您的应用程序可从唯一的 URL 访问，无限的公共和私有存储库，最大 2GB VM 大小。
  * [styleci.io](https://styleci.io/) — 仅适用于公共 GitHub 存储库
  * [Mergify](https://mergify.io) — GitHub 的工作流自动化和合并队列 - 对公共 GitHub 存储库免费
  * [Make](https://www.make.com/en) — 工作流自动化工具允许您使用 UI 连接应用程序并自动化工作流程。它支持许多应用程序和最流行的 API。对公共 GitHub 存储库免费，免费层级具有 100Mb、1000 次操作和 15 分钟的最小间隔。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC 协作、Terraform 模块注册表、ChatOps 集成、使用 Open Policy Agent 进行连续资源合规性、使用 SAML 2.0 的单点登录以及访问公共工作者池：每月最多 200 分钟
  * [microtica.com](https://microtica.com/) - 具有现成基础设施组件的启动环境，免费在 AWS 上部署应用程序，并支持您的生产工作负载。免费层级包括 1 个环境（在您的 AWS 账户上）、2 个 Kubernetes 服务、每月 100 分钟的构建时间和 20 次每月部署。

**[⬆️ 回到顶部](#table-of-contents)**

## 测试

  * [Applitools.com](https://applitools.com/) — 针对 Web、原生移动和桌面应用的智能视觉验证。几乎与所有自动化解决方案（如 Selenium 和 Karma）和远程运行器（Sauce Labs、Browser Stack）集成。对开源免费。为单个用户提供有限的每周检查点的免费层级。
  * [Appetize](https://appetize.io) — 在这个基于云的 Android 手机/平板电脑模拟器和 iPhone/iPad 模拟器上直接在浏览器中测试你的 Android 和 iOS 应用。免费层级包括一个并发会话，每月使用 100 分钟。对应用大小没有限制。
  * [Apptim](https://apptim.com) — 一种移动测试工具，使没有性能工程技能的人能够评估应用的性能和用户体验（UX）。使用你自己设备的桌面版本是 100%免费的，在 iOS 和 Android 上都有无限的测试。
  * [Bencher](https://bencher.dev/) - 一个连续的基准测试工具套件，用于捕获 CI 性能回归。对所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 用于 Web 应用程序的轻量级测试自动化工具。易于学习，不需要编码。你可以在自己的计算机上免费运行无限的测试。你还可以获得云监控和 CI/CD 集成，需要额外的月费。
  * [lambdatest.com](https://www.lambdatest.com/) — 在 Selenium 和 Cypress 上进行手动、视觉、截图和自动化浏览器测试，[对开源免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[对开源免费](https://www.browserstack.com/open-source?ref=pricing)
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试你的网站是否遵循 50 多个 SEO、速度和安全最佳实践。对较小的网站有免费层级。
  * [Checkly](https://checklyhq.com) - 现代 DevOps 的代码优先合成监控。以传统提供商的一小部分价格监控你的 API 和应用。由监控即代码工作流程和 Playwright 提供支持。对开发人员有慷慨的免费层级。
  * [crossbrowsertesting.com](https://crossbrowsertesting.com) - 在云中进行手动、视觉和 Selenium 浏览器测试 - [对开源免费](https://crossbrowsertesting.com/open-source)
  * [cypress.io](https://www.cypress.io/) - 快速、轻松和可靠地测试在浏览器中运行的任何东西。Cypress 测试运行器始终是免费的，开源的，没有限制和限制。Cypress 仪表板对开源项目的最多 5 个用户免费。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在你的浏览器上创建 AI 驱动的 Cypress 测试/POM 模型。除了 AI 部分，它是开源的。它对每月最多 5 次的测试创建免费，包括自我修复脚本、电子邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录和重放 Web 浏览器中执行的所有步骤，并创建脚本，免费但选项较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin 的混沌工程工具允许你安全地将故障注入你的系统，以在它们导致面向客户的问题之前发现弱点。Gremlin Free 提供对多达 5 个主机或容器的关闭和 CPU 攻击的访问。
  * [gridlastic.com](https://www.gridlastic.com/) — 具有多达 4 个同时的 Selenium 节点/10 个网格启动/4,000 个测试分钟/月的免费计划的 Selenium Grid 测试
  * [katalon.com](https://katalon.com) - 提供一个测试平台，可以帮助不同测试成熟度水平的各种规模的团队，包括 Katalon Studio、TestOps（+ 视觉测试免费）、TestCloud 和 Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy 是开发人员的功能测试工具包。记录 API 调用为 API（KTests）和模拟或存根（KMocks）生成端到端测试。它对开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建 API 和负载测试。每月免费模拟多达 50 个并发用户长达 60 分钟。
  * [octomind.dev](https://www.octomind.dev/) - 带有 AI 辅助测试用例生成的自动生成、运行和维护的 Playwright UI 测试
  * [preflight.com](https://preflight.com) - 无代码自动化 Web 测试。在你的浏览器上记录对 UI 更改具有弹性的测试，并在 Windows 机器上运行它们。你可以与你的 CI/CD 集成吗？免费计划包括每月 50 次带有视频、HTML 会话等的测试运行。
  * [Argos](https://argos-ci.com) - 面向开发人员的开源视觉测试。无限制项目，每月 5,000 个截图。对开源项目免费。
  * [percy.io](https://percy.io) - 为任何 Web 应用程序、静态站点、样式指南或组件库添加视觉测试。无限制团队成员，演示应用程序和无限制项目，每月 5,000 个快照。
  * [lost-pixel.com](https://lost-pixel.com) - 为你的 Storybook、Ladle、Histoire 故事和 Web 应用程序进行全面的视觉回归测试。无限制团队成员，对开源完全免费，每月 7,000 个快照。
  * [Repeato](https://repeato.app/) 基于计算机视觉和 AI 构建的无代码移动应用测试自动化工具。适用于原生应用、Flutter、React Native、Web、Ionic 和许多其他应用框架。免费计划限制为 iOS 上的 10 次测试和 Android 上的 10 次测试，但包括付费计划的大多数功能，包括无限制的测试运行。
  * [Requestly](https://requestly.com/) 开源 Chrome 扩展，用于拦截、重定向和模拟 HTTP 请求。具有[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API 客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 端点、记录带有网络和控制台日志的会话。在免费层级中创建多达 10 条规则。对开源免费。
  * [seotest.me](https://seotest.me/) — 免费的页面 SEO 网站测试器。每天 10 次免费网站爬网。有用的 SEO 学习资源和关于如何改进任何网站的页面 SEO 结果的建议，无论技术如何。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 它就像 CodePen 但用于跨浏览器测试。UI-licious 允许你像用户故事一样编写测试，并提供一个免费平台 - UI-licious Snippets - 允许你在 Chrome 上运行无限的测试，无需注册，每次测试运行最多 3 分钟。发现了一个 bug？你可以将唯一的 URL 复制到你的测试中，以向你的开发人员准确展示如何重现该 bug。
  * [TestCollab](https://testcollab.com) - 一个用户友好的测试管理软件，其免费计划包括 Jira 集成、无限制项目、使用 CSV/XLSx 导入测试用例、时间跟踪和 1GB 文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium 浏览器和设备测试，[对开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 用于发布自动化测试结果的仪表板和使用 GitHub 将手动测试作为代码实现的框架。该服务[对开源免费](https://github.com/marketplace/testspace-com)，并占每月 450 个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发人员、个人、教育工作者和刚开始的小团队可以请求除基本免费项目之外的折扣和免费产品。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [qase.io](https://qase.io) - 适用于开发和 QA 团队的测试管理系统。管理测试用例、编写测试运行、执行测试、跟踪缺陷并衡量影响。免费层级包括所有核心功能，附件容量为 500MB，最多支持 3 个用户。
  * [knapsackpro.com](https://knapsackpro.com) - 在任何 CI 提供商上通过优化测试套件并行化加速您的测试。在并行 CI 节点上拆分 Ruby、JavaScript 测试以节省时间。免费计划适用于最多 10 分钟的测试文件，开源项目可免费使用无限计划。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 Webhooks、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置 Webhooks 并通过推送通知和电子邮件进行监控。
  * [Vaadin](https://vaadin.com) - 使用 Java 或 TypeScript 构建可扩展的 UI，并使用集成的工具、组件和设计系统更快地迭代、更好地设计并简化开发过程。无限项目，提供五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一 URL 调试和检查 Webhooks 和 HTTP 请求。完全免费，您可以创建无限的 URL 并接收建议。

**[⬆️ 返回顶部](#table-of-contents)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化的应用安全平台，涵盖 SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件、容器扫描、EOL 等。免费计划包括两名用户、对 10 个存储库、1 个云、2 个容器和 1 个域的扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 揭示网络中受攻击的系统。
  * [Altcha.org](https://altcha.org/anti-spam) - 一个由自然语言处理和机器学习驱动的网站和 API 的垃圾邮件过滤器。免费计划包括每个域每天 200 个请求。
  * [atomist.com](https://atomist.com/) — 一种更快捷、更方便的自动化各种开发任务的方式。目前处于测试阶段。
  * [Bridgecrew](https://bridgecrew.io/) — 由开源工具 - [Checkov](https://github.com/bridgecrewio/checkov) 提供支持的基础设施即代码（IaC）安全。Bridgecrew 核心平台对多达 50 个 IaC 资源免费。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊网络服务（AWS）安全和合规审计与监控。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度妥协指标（IOC），部分内容可在 GitHub 上获取（https://github.com/unknownhad/AWSAttacks）。完整列表可通过 API 访问。
  * [CodeNotary.io](https://www.codenotary.io/) — 带有不可磨灭证明的开源平台，用于公证代码、文件、目录或容器。
  * [crypteron.com](https://www.crypteron.com/) — 云优先、开发者友好的安全平台，可防止.NET 和 Java 应用程序中的数据泄露。
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单、直观的 Web 应用程序，用于分析和解码/编码数据，无需处理复杂的工具或编程语言。就像密码学和加密的瑞士军刀。所有功能均可免费使用，无限制。如果您希望自行托管，则为开源。
  * [DAS](https://signup.styra.com/) — Styra DAS 免费，全生命周期策略管理，用于创建、部署和管理开放策略代理（OPA）授权。
  * [Datree](https://www.datree.io/) — 开源 CLI 工具，通过确保清单和 Helm 图表遵循最佳实践以及您组织的策略，防止 Kubernetes 配置错误。
  * [Dependabot](https://dependabot.com/) 自动化依赖更新，适用于 Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven 和 Gradle）、.NET、Go、Elm、Docker、Terraform、Git 子模块和 GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) — 使用此免费的自动化检查工具扫描您的 Django 站点是否存在安全漏洞。从 Pony Checkup 站点分叉。
  * [Doppler](https://doppler.com/) — 用于应用程序机密和配置的通用机密管理器，支持同步到各种云提供商。免费提供给五名具有基本访问控制的用户。
  * [Dotenv](https://dotenv.org/) — 快速、安全地同步您的.env 文件。停止通过不安全的渠道（如 Slack 和电子邮件）共享您的.env 文件，并且再也不会丢失重要的.env 文件。最多可免费供三名队友使用。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动检测和修复机密，防止机密进入您的源代码。扫描您的 git 存储库以查找 350 多种类型的机密和敏感文件 - 免费供个人和少于 25 名开发人员的团队使用。
  * [Have I been pwned?](https://haveibeenpwned.com) — 用于获取违规信息的 REST API。
  * [hostedscan.com](https://hostedscan.com) — 用于 Web 应用程序、服务器和网络的在线漏洞扫描器。每月提供十次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，可让您跨团队和基础设施管理开发人员机密：从本地开发到暂存/生产第三方服务的所有地方。最多可免费供五名开发人员使用。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准，如 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS 和 DANE。
  * [keychest.net](https://keychest.net) - SSL 过期管理和证书购买，带有集成的 CT 数据库。
  * [letsencrypt.org](https://letsencrypt.org/) — 免费的 SSL 证书颁发机构，其证书受到所有主要浏览器的信任。
  * [meterian.io](https://www.meterian.io/) - 监控 Java、Javascript、.NET、Scala、Ruby 和 NodeJS 项目中的安全漏洞。免费提供一个私有项目，开源项目无限制。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 查找并修复您站点中的安全漏洞。
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序、配置的安全监控，免费提供 25 名用户和 30 天历史用户。
  * [openapi.security](https://openapi.security/) - 免费工具，可快速检查任何基于 OpenAPI / Swagger 的 API 的安全性。您无需注册。
  * [pixee.ai](https://pixee.ai) - 作为免费的 GitHub 机器人的自动化产品安全工程师，它会向您的 Java 代码库提交 PR，以自动解决漏洞。其他语言即将推出！
  * [pyup.io](https://pyup.io) — 监控 Python 依赖项中的安全漏洞并自动更新它们。免费提供一个私有项目，开源项目无限制。
  * [qualys.com](https://www.qualys.com/community-edition) — 查找 Web 应用程序漏洞，审核 OWASP 风险。
  * [report-uri.io](https://report-uri.io/) — CSP 和 HPKP 违规报告。
  * [ringcaptcha.com](https://ringcaptcha.com/) — 使用电话号码作为 ID 的工具，可免费使用。
  * [seclookup.com](https://seclookup.com/) - Seclookup API 可以在 SIEM 中丰富域威胁指标，提供有关域名的全面信息，并提高威胁检测和响应能力。在此处获取 50K 次免费查找[链接]。
  * [snyk.io](https://snyk.io) — 可以在您的开源依赖项中查找并修复已知的安全漏洞。开源项目的无限制测试和修复。您的私有项目每月限制为 200 次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — 对任何 SSL Web 服务器的配置进行深入分析。
  * [SOOS](https://soos.io) - 开源项目的免费、无限制 SCA 扫描。在发布前检测和修复安全威胁。使用简单有效的解决方案保护您的项目。
  * [StackHawk](https://www.stackhawk.com/) 在整个管道中自动化应用程序扫描，在安全漏洞进入生产环境之前找到并修复它们。单个应用程序的无限制扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费的网站安全检查和恶意软件扫描器。
  * [Protectumus](https://protectumus.com) - 免费的网站安全检查、站点防病毒和服务器防火墙（WAF），适用于 PHP。免费层的注册用户的电子邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试 SSL/TLS 服务是否具有安全的服务器配置、证书、链等。不限于 HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：它专为开始了解网络威胁情报的个人研究人员、分析师和组织而设计。最多可免费供 3 名用户使用。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划允许每周进行 XSS 扫描。
  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码和自动密钥管理加密和解密数据。免费提供一个应用程序，每月最多 1,000,000 次加密。
  * [Virgil Security](https://virgilsecurity.com/) — 在您的数字解决方案中实现端到端加密、数据库保护、物联网安全等的工具和服务。最多可免费供 250 名用户的应用程序使用。
  * [Vulert](https://vulert.com) - Vulert 持续监控您的开源依赖项中的新漏洞，推荐修复方案，无需安装或访问您的代码库。对开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式对您的 GraphQL 端点进行安全扫描。免费，无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 在公共 GitHub 存储库、要点、问题和评论中搜索 2000 万个暴露的秘密，免费。

**[⬆️ 返回顶部](#table-of-contents)**

## 认证、授权和用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和 API 提供精细授权服务。免费提供多达 1000 个 MAU 和 100 个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成 SSO、MFA、无密码认证等。包括前端和后端应用的 SDK。免费提供多达 1000 个 MAU 和五个身份提供商。
  * [Auth0](https://auth0.com/) - 托管 SSO。多达 7000 个活跃用户和两个社交身份提供商。
  * [Authgear](https://www.authgear.com) - 在几分钟内为您的应用添加无密码、OTP、2FA、SSO。包括所有前端。免费提供多达 5000 个 MAU。
  * [Authress](https://authress.io/) - 认证登录和访问控制，任何项目的无限身份提供商。Facebook、Google、Twitter 等。前 1000 个 API 调用免费。
  * [Authy](https://authy.com) - 在多个设备上进行双因素认证（2FA），具有备份功能。可替代 Google Authenticator。免费提供多达 100 次成功认证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 用于创作、测试和部署访问策略的完整授权管理系统。精细授权和访问控制，免费提供多达 100 个每月活跃主体。
  * [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA、预构建的登录、注册、用户配置文件等 UI 组件。免费提供多达 10,000 个每月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak 身份和访问管理即服务。免费提供多达 100 个用户和一个领域。
  * [Corbado](https://www.corbado.com/) - 为新应用或现有应用添加密钥优先认证。免费提供无限 MAU。
  * [Descope](https://www.descope.com/) - 高度可定制的 AuthN 流程，具有无代码和 API/SDK 方法，免费提供 7,500 个活跃用户/月，50 个租户（最多 5 个 SAML/SSO 租户）。
  * [duo.com](https://duo.com/) - 网站或应用的双因素认证（2FA）。免费提供十个用户，所有认证方法，无限制，集成，硬件令牌。
  * [Kinde](https://kinde.com/) - 简单、强大的认证，您可以在几分钟内与您的产品集成。一切您需要的开始与 7,500 个免费 MAU。
  * [logintc.com](https://www.logintc.com/) - 通过推送通知进行双因素认证（2FA），免费提供十个用户，VPN，网站和 SSH。
  * [MojoAuth](https://mojoauth.com/) - MojoAuth 使您可以在几分钟内轻松在您的 Web、移动或任何应用程序上实现无密码认证。
  * [Okta](https://developer.okta.com/signup/) - 用户管理、认证和授权。免费提供多达 100 个每月活跃用户。
  * [onelogin.com](https://www.onelogin.com/) - 身份即服务（IDaaS），单点登录身份提供商，云 SSO IdP，三个公司应用程序和五个个人应用程序，无限制用户。
  * [Ory](https://ory.sh/) - AuthN/AuthZ/OAuth2.0/零信任管理安全平台。永远免费的开发人员账户，具有所有安全功能，无限制的团队成员，200 个每日活跃用户和 25k/月的权限检查。
  * [Phase Two](https://phasetwo.io) - Keycloak 开源身份和访问管理。免费领域多达 1000 个用户，多达 10 个 SSO 连接，利用 Phase Two 的 Keycloak 增强容器，其中包括[组织](https://phasetwo.io/product/organizations/)扩展。
  * [Stytch](https://www.stytch.com/) - 具有抗到达密码、无密码登录流程、MFA、SSO 等的灵活认证 API 和 SDK。内置电子邮件/SMS 发送+故障转移和欺诈保护。提供 5,000 个每月活跃用户免费（B2C）或 1,000 个每月活跃用户和 25 个组织免费（B2B）。
  * [Stack Auth](https://stack-auth.com) - 不糟糕的开源认证。最开发者友好的解决方案，让您在短短五分钟内开始。可免费自托管，或提供具有 10k 免费每月活跃用户的托管 SaaS 版本。
  * [SuperTokens](https://supertokens.com/) - 原生集成到您的应用程序中的开源用户认证 - 使您能够快速开始，同时控制用户和开发人员体验。免费提供多达 5000 个 MAU。
  * [Warrant](https://warrant.dev/) - 为您的应用程序提供托管的企业级授权和访问控制服务。免费层包括 100 万个每月 API 请求和 1,000 个 authz 规则。
  * [ZITADEL Cloud](https://zitadel.com) - 为您工作的交钥匙用户和访问管理，支持多租户（B2B）用例。免费提供多达 25,000 个经过身份验证的请求，具有所有安全功能（OTP、无密码、策略等没有付费墙）。
  * [PropelAuth](https://propelauth.com) - 只需几行代码即可立即向任何规模的公司销售，免费提供多达 200 个用户和 10k 个事务性电子邮件（带有水印品牌：“由 PropelAuth 提供支持”）。
  * [Logto](https://logto.io/) - 开发、保护和管理您产品的用户身份 - 用于认证和授权。免费提供多达 5,000 个 MAU，并提供开源自托管选项。
  * [WorkOS](https://workos.com/) - 免费用户管理和认证，多达 100 万个 MAU。支持电子邮件+密码、社交认证、魔术认证、MFA 等。

**[⬆️ 返回顶部](#table-of-contents)**

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 确保您的移动应用程序正常工作的首选平台。免费计划：一个应用程序、分析、无限制版本和安装以及反馈收集。
  * [Loadly](https://loadly.io) - iOS 和 Android 测试版应用程序分发服务提供完全免费的服务，无限制下载、高速下载和无限制上传。
  * [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用程序部署到设备上。免费计划：应用程序上传、密码保护链接、1 天过期、十次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过空中分发 iOS 和 Android 应用程序。免费计划：无限制上传、私人链接、2 天过期给访客，60 天给注册用户。
  * [GetUpdraft](https://www.getupdraft.com) - 分发用于测试的移动应用程序。免费计划包括一个应用程序项目、三个应用程序版本、500MB 存储和每月 100 次应用程序安装。
  * [Appho.st](https://appho.st) - 移动应用程序托管平台。免费计划包括五个应用程序、50 次每月下载和最大文件大小为 100MB。

**[⬆️ 返回顶部](#table-of-contents)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) - 在 IaaS 上部署准备好的应用程序。免费管理 1 个 AWS 微型实例。
  * [Esper](https://esper.io) - 具有 DevOps 的 Android 设备的 MDM 和 MAM。一个用户许可证和 25MB 应用程序存储免费提供一百个设备。
  * [jamf.com](https://www.jamf.com/) - iPad、iPhone 和 Mac 的设备管理，免费提供三个设备。
  * [Miradore](https://miradore.com) - 设备管理服务。保持您的设备舰队最新，并免费保护无限设备。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发人员部署和管理他们的 Web 应用程序和服务器。每月免费提供多达 25 次 git 部署。
  * [runcloud.io](https://runcloud.io/) - 主要关注 PHP 项目的服务器管理。免费提供多达 1 台服务器。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，可轻松管理和部署您的服务器和站点。一台服务器免费。

**[⬆️ 返回顶部](#table-of-contents)**

## 消息传递和流媒体

  * [Ably](https://www.ably.com/) - 具有实时性、持久性和可靠交付的消息传递服务。免费计划包括每月 300 万条消息、100 个峰值连接和 100 个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — 作为服务的 RabbitMQ。小狐猴计划：每月最多 100 万条消息，最多 20 个并发连接，最多 100 个队列，最多 10,000 个排队消息，不同 AZ 中的多个节点
  * [courier.com](https://www.courier.com/) — 用于推送、应用内、电子邮件、聊天、短信和其他消息传递渠道的单一 API，具有模板管理和其他功能。免费计划包括每月 10,000 条消息。
  * [engagespot.co](https://engagespot.co/) — 为开发人员提供的多渠道通知基础设施，具有预构建的应用内收件箱和无代码模板编辑器。免费计划包括每月 10,000 条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的 MQTT 设备连接到云原生物联网消息传递代理。永远免费连接多达 100 个设备（无需信用卡）。
  * [knock.app](https://knock.app) — 为开发人员提供的通知基础设施。通过单个 API 调用发送到多个渠道，如应用内、电子邮件、短信、Slack 和推送。免费计划包括每月 10,000 条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在 5 分钟内为任何软件添加用户通知。免费计划包括每月 10,000 条通知+100 条短信和自动呼叫。
  * [Novu.co](https://novu.co) — 为开发人员提供的开源通知基础设施。用于在一个地方管理所有通信渠道的简单组件和 API：电子邮件、短信、直接、应用内和推送。免费计划包括每月 30,000 条通知，保留 90 天。
  * [pusher.com](https://pusher.com/) — 实时消息传递服务。最多 100 个同时连接和每天 200,000 条消息免费
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息传递服务。最多 20 个同时连接和每天 100,000 个事件免费
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io) 作为服务。全球、AWS、GCP 和 Azure。永远免费，消息大小为 4k，活动连接数为 50，每月数据量为 5GB。
  * [cloudkarafka.com](https://www.cloudkarafka.com/) - 免费共享 Kafka 集群，最多 5 个主题，每个主题 10MB 数据，数据保留 28 天。
  * [pubnub.com](https://www.pubnub.com/) - 每月 100 万次交易的 Swift、Kotlin 和 React 消息传递。交易可能包含多条消息。
  * [eyeson API](https://developers.eyeson.team/) - 基于 WebRTC（SFU，MCU）的视频通信 API 服务，用于构建视频平台。允许实时数据注入、视频布局、录制、功能齐全的托管 Web UI（快速入门）或自定义 UI 的包。为开发人员提供[免费套餐](https://apiservice.eyeson.com/api-pricing)，每月 1000 分钟会议时间。
  * [Upstash Kafka](https://upstash.com/kafka) - 具有按请求定价的无服务器 Kafka 云服务。它有一个免费套餐，每天最多 10,000 条消息。
  * [webpushr](https://www.webpushr.com/) - Web 推送通知 - 最多 10k 订阅者免费，无限制推送通知，浏览器内消息传递
  * [httpSMS](https://httpsms.com) - 使用您的 Android 手机作为 SMS 网关发送和接收短信。每月免费发送和接收多达 200 条消息。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展且安全的无服务器 MQTT 代理，您可以在几秒钟内获得。每月 100 万会话分钟免费（无需信用卡）。

**[⬆️ 返回顶部](#table-of-contents)**



## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最多 100k 条日志行，保留 24 小时免费
  * [logentries.com](https://logentries.com/) — 每月最多 5GB，保留 7 天免费
  * [loggly.com](https://www.loggly.com/) — 单个用户免费，每天 200MB，保留 7 天免费
  * [logz.io](https://logz.io/) — 每天最多 1GB，保留 1 天免费
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 由 Manage Engine 提供支持的日志管理服务。免费计划提供 50GB 存储，存储保留 15 天，搜索 7 天。
  * [papertrailapp.com](https://papertrailapp.com/) — 48 小时搜索，7 天存档，每月 50MB
  * [sematext.com](https://sematext.com/logsene) — 每天最多 500MB，保留 7 天免费
  * [sumologic.com](https://www.sumologic.com/) — 每天最多 500MB，保留 7 天免费
  * [logflare.app](https://logflare.app/) — 每个应用每月最多 12,960,000 条记录，保留 3 天免费
  * [logtail.com](https://logtail.com/) — 基于 ClickHouse 的 SQL 兼容日志管理。每月最多 1GB，保留 3 天免费。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月最多 1000 条用户活动日志，保留 1 个月，最多 5 个项目。

**[⬆️ 返回顶部](#table-of-contents)**



## 翻译管理

  * [crowdin.com](https://crowdin.com/) — 开源项目无限制，字符串无限制，协作者无限制
  * [gitlocalize.com](https://gitlocalize.com) - 私人和公共存储库免费且无限制
  * [Lecto](https://lecto.ai/) - 具有免费层的机器翻译 API（30 个免费请求，每个请求 1000 个翻译字符）。与 Loco Translate Wordpress 插件集成。
  * [lingohub.com](https://lingohub.com/) — 最多 3 个用户免费，开源永远免费
  * [localazy.com](https://localazy.com) - 1000 个源语言字符串免费，语言无限制，贡献者无限制，创业和开源交易
  * [Localeum](https://localeum.com) - 最多 1000 个字符串免费，一个用户，语言无限制，项目无限制
  * [localizely.com](https://localizely.com/) — 开源免费
  * [Loco](https://localise.biz/) — 最多 2000 次翻译免费，翻译人员无限制，十个语言/项目，1000 个可翻译资产/项目
  * [oneskyapp.com](https://www.oneskyapp.com/) — 最多 5 个用户的有限免费版，开源免费
  * [POEditor](https://poeditor.com/) — 最多 1000 个字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多 100 个翻译键免费，字符串无限制，语言无限制，创业交易
  * [Texterify](https://texterify.com/) - 单个用户免费
  * [Tolgee](https://tolgee.io) - 有限翻译的免费 SaaS 产品，永远免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 开源免费
  * [Translation.io](https://translation.io) - 开源免费
  * [Translized](https://translized.com) - 最多 1000 个字符串免费，一个用户，语言无限制，项目无限制
  * [webtranslateit.com](https://webtranslateit.com/) — 最多 500 个字符串免费
  * [weblate.org](https://weblate.org/) — 对于自由项目免费，免费套餐最多 10,000 个字符串源，无限制的自托管内部部署。
  * [Free PO editor](https://pofile.net/free-po-editor) — 每个人都免费

**[⬆️ 返回顶部](#table-of-contents)**

## 监控

  * [Pingmeter.com](https://pingmeter.com/) - 5 个正常运行时间监视器，间隔 10 分钟。监控 SSH、HTTP、HTTPS 和任何自定义 TCP 端口。
  * [alerty.ai](https://www.alerty.ai) - 免费的 APM 和监控，适用于您的 FE、BE、DB 等 + 免费代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) - 免费提供 24 小时指标，应用程序性能管理代理限制为一个 Java、一个.NET、一个 PHP 和一个 Node.js。
  * [appneta.com](https://www.appneta.com/) - 免费，数据保留 1 小时。
  * [appspector.com](https://appspector.com/) - 用于远程 iOS/Android/Flutter 调试的任务控制。免费，适用于小流量使用（64MB 日志）。
  * [assertible.com](https://assertible.com) - 自动化 API 测试和监控。为团队和个人提供免费计划。
  * [bleemeo.com](https://bleemeo.com) - 免费，适用于 3 台服务器、5 个正常运行时间监视器、无限用户、无限仪表板、无限警报规则。
  * [checklyhq.com](https://checklyhq.com) - 开源 E2E / 合成监控和深度 API 监控，适用于开发人员。免费计划，包括五个用户和 50k+ 检查运行。
  * [circonus.com](https://www.circonus.com/) - 免费，适用于 20 个指标。
  * [cloudsploit.com](https://cloudsploit.com) - AWS 安全和配置监控。免费：无限制的按需扫描、无限用户、无限存储帐户。订阅：自动化扫描、API 访问等。
  * [cronitor.io](https://cronitor.io/) - 针对 cron 作业、网站、API 等的性能洞察和正常运行时间监控。提供五个监视器的免费层。
  * [datadoghq.com](https://www.datadoghq.com/) - 免费，适用于最多 5 个节点。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - cron 作业监控。一个免费的告密者（监视器），如果您推荐其他人注册，则更多。
  * [downtimemonkey.com](https://downtimemonkey.com/) - 60 个正常运行时间监视器，间隔 5 分钟。电子邮件、Slack 警报。
  * [economize.cloud](https://economize.cloud) - Economize 通过组织云资源来优化和报告，帮助揭开云基础设施成本的神秘面纱。每月在 Google Cloud Platform 上花费最多 5,000 美元的免费。
  * [elastic.co](https://www.elastic.co/solutions/apm) - 为 JS 开发人员提供即时性能洞察。免费，数据保留 24 小时。
  * [freeboard.io](https://freeboard.io/) - 免费，适用于公共项目。物联网 (IoT) 项目的仪表板。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud 是一个可组合的可观测性平台，将指标和日志与 Grafana 集成。免费：3 个用户、十个仪表板、100 个警报、Prometheus 和 Graphite 中的指标存储（10,000 个系列，14 天保留）、Loki 中的日志存储（50GB 日志，14 天保留）。
  * [healthchecks.io](https://healthchecks.io) - 监控您的 cron 作业和后台任务。最多 20 个检查免费。
  * [Hydrozen.io](https://hydrozen.io) - 正常运行时间监控和状态页面，免费计划：10 个正常运行时间监视器、5 个心跳监视器、1 个域监视器和 1 个状态页面免费。
  * [inspector.dev](https://www.inspector.dev) - 在不到一分钟的时间内拥有一个完整的实时监控仪表板，具有免费的永久层。
  * [instrumentalapp.com](https://instrumentalapp.com) - 美观且易于使用的应用程序和服务器监控，最多可免费提供 500 个指标和 3 小时的数据可见性。
  * [keychest.net/speedtest](https://keychest.net/speedtest) - 针对 Digital Ocean 的独立速度测试和 TLS 握手延迟测试。
  * [letsmonitor.org](https://letsmonitor.org) - SSL 监控，最多 5 个监视器免费。
  * [linkok.com](https://linkok.com) - 在线断链检查器，最多 100 页的小网站免费，开源项目完全免费。
  * [loader.io](https://loader.io/) - 有限制的免费负载测试工具。
  * [meercode.io](https://meercode.io/) - Meercode 是您的 CI/CD 构建的终极监控仪表板。开源和一个私有存储库免费。
  * [netdata.cloud](https://www.netdata.cloud/) - Netdata 是一个开源工具，用于收集实时指标。它是一个不断发展的产品，也可以在 GitHub 上找到！
  * [newrelic.com](https://www.newrelic.com) - 构建的 New Relic 可观测性平台，帮助工程师创建更完美的软件。从单体到无服务器，您可以对所有内容进行检测，然后分析、故障排除和优化整个软件堆栈。免费层提供每月 100GB 的免费数据摄取、一个免费的完全访问用户和无限的免费主要用户。
  * [Middleware.io](https://middleware.io/) - Middleware 可观测性平台为您的应用程序和堆栈提供完全可见性，因此您可以大规模监控和诊断问题。他们为开发社区使用提供了一个免费的永久计划，允许对多达 100 万个日志事件进行日志监控，对多达 2 个主机进行基础设施监控和 APM。
  * [nixstats.com](https://nixstats.com) - 一台服务器免费。电子邮件通知、公共状态页面、60 秒间隔等。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot 为网站和 API 提供正常运行时间监控，为 cron 作业和计划任务提供监控。还提供状态页面。前五个间隔为 3 分钟的检查是免费的。免费层通过 Slack、Discord 和电子邮件发送警报。
  * [opsgenie.com](https://www.opsgenie.com/) - 强大的警报和值班管理，用于始终在线的服务。最多 5 个用户免费。
  * [paessler.com](https://www.paessler.com/) - 强大的基础设施和网络监控解决方案，包括警报、强大的可视化功能和基本报告。最多 100 个传感器免费。
  * [pagecrawl.io](https://pagecrawl.io/) - 监控网站更改，最多 6 个监视器，每天检查一次，免费。
  * [syagent.com](https://syagent.com/) - 非商业免费服务器监控服务，警报和指标。
  * [pagerly.io](https://pagerly.io/) - 在 Slack 上管理值班（与 Pagerduty、OpsGenie 集成）。最多 1 个团队免费（一个团队指一个值班）。
  * [pagertree.com](https://pagertree.com/) - 用于警报和值班管理的简单界面。最多 5 个用户免费。
  * [pingbreak.com](https://pingbreak.com/) - 现代正常运行时间监控服务。检查无限的 URL，并通过 Discord、Slack 或电子邮件获取停机通知。
  * [pingpong.one](https://pingpong.one/) - 具有监控功能的高级状态页面平台。免费层包括一个带有 SSL 子域的公共可自定义状态页面。开源项目和非营利组织免费提供专业计划。
  * [robusta.dev](https://home.robusta.dev/) - 基于 Prometheus 的强大 Kubernetes 监控。自带 Prometheus 或安装一体化捆绑包。免费层包括最多 20 个 Kubernetes 节点。通过 Slack、Microsoft Teams、Discord 等发送警报。与 PagerDuty、OpsGenie、VictorOps、DataDog 和许多其他工具集成。
  * [sematext.com](https://sematext.com/) - 免费，适用于 24 小时指标、无限服务器、十个自定义指标、500,000 个自定义指标数据点、无限仪表板、用户等。
  * [sitemonki.com](https://sitemonki.com/) - 网站、域、Cron 和 SSL 监控，每个类别 5 个监视器免费。
  * [sitesure.net](https://sitesure.net) - 网站和 cron 监控 - 2 个监视器免费。
  * [skylight.io](https://www.skylight.io/) - 免费，适用于前 100,000 个请求（仅 Rails）。
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) - 性能监控 API，检查 Ping、DNS 等。
  * [stathat.com](https://www.stathat.com/) - 免费开始使用十个统计信息，无过期。
  * [statuscake.com](https://www.statuscake.com/) - 网站监控，无限制测试免费，有限制。
  * [statusgator.com](https://statusgator.com/) - 状态页面监控，3 个监视器免费。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - 服务器监控、正常运行时间监控、DNS 和域监控。免费监控 10 台服务器、10 个正常运行时间和 10 个域。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供 3 个位置和 20 个主要网络服务的数据馈送
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，免费提供 50 个监控器
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控五个网站，间隔 60 秒，公共状态页面
  * [zenduty.com](https://www.zenduty.com/) — 为网络运营、站点可靠性工程和 DevOps 团队提供端到端事件管理、警报、值班管理和响应编排平台。最多 5 个用户免费
  * [instatus.com](https://instatus.com) - 在 10 秒内获得一个漂亮的状态页面。永远免费，无限订阅和无限团队
  * [Squadcast.com](https://squadcast.com) - Squadcast 是一款端到端事件管理软件，旨在帮助您推广 SRE 最佳实践。永远免费计划，最多可供 10 个用户使用
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri 是一个稳定的正常运行时间监视器，提供广泛的监视器：cronjob、关键字、网站、端口、ping。免费提供 25 个正常运行时间检查，间隔 3 分钟。通过电话、短信、电子邮件和 Webhooks 发送警报
  * [Better Stack](https://betterstack.com/better-uptime) - 在一个产品中提供正常运行时间监控、事件管理、值班调度/警报和状态页面。免费计划包括 10 个具有 3 分钟检查频率和状态页面的监视器
  * [Pulsetic](https://pulsetic.com) - 10 个监视器，6 个月的历史正常运行时间/日志，无限状态页面和自定义域！免费提供无限时间和无限电子邮件警报。您不需要信用卡
  * [Wachete](https://www.wachete.com) - 监控五个页面，每 24 小时检查一次
  * [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20 个免费，Linux 和 Windows Server 监控：5 个免费，状态页面：1 个免费 - 移动应用程序、多个通知渠道等！

**[⬆️ 返回顶部](#table-of-contents)**

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供带有屏幕截图和点击轨迹的 JavaScript 错误跟踪。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用后，每月最多可免费处理 2,000 个错误。
  * [elmah.io](https://elmah.io/) — 为 Web 开发人员提供错误日志记录和正常运行时间监控。开源项目可免费订阅小企业版。
  * [Embrace](https://embrace.io/) — 移动应用监控。小团队每年最多可免费处理 100 万用户会话。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月免费处理 3k 个事件/1 个用户。开源且易于自托管，可无限制使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误跟踪。与开源 Sentry SDK 兼容。每月免费处理 1000 个事件，或可自托管无限制。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、正常运行时间和 cron 监控。小团队和开源项目免费（每月 12,000 个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费使用 100 个设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月可处理 5,000 个错误，用户数量不限，保留 30 天。
  * [sentry.io](https://sentry.io/) — Sentry 实时跟踪应用程序异常，并提供小型免费计划。每月免费处理 5k 个错误/1 个用户，自托管可无限制使用。
  * [Axiom](https://axiom.co/) — 可存储多达 0.5 TB 的日志，保留 30 天。包括与 Vercel 等平台的集成以及使用电子邮件/Discord 通知器进行高级数据查询。
  * [Semaphr](https://semaphr.com) — 为您的移动应用提供免费的一体化关闭开关。
  * [Jam](https://jam.dev) - 一键式开发人员友好型错误报告。免费计划，无限次 jam。
  * [Whitespace](https://whitespace.dev) - 在浏览器中一键式直接生成错误报告。个人使用免费计划，无限次录制。

**[⬆️ 返回顶部](#table-of-contents)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 提供具有容错性、相关性和 UI 库的托管搜索解决方案，可轻松创建搜索体验。免费的“构建”计划包括 100 万个文档和每月 10,000 次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费提供 1GB 内存和 1GB 存储。
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏即服务，基于 Web 的 UI 小部件/插件，允许用户在您的产品中搜索内容、导航、功能等，有助于提高可发现性。每月活跃用户数最多 1,000 个，命令数量不限，免费。
  * [Magny](https://magny.io) - SaaS 服务，有助于实现命令面板（例如应用内搜索），大大缩短用户在应用中查找任何内容的时间，利用用户体验和效率。
  * [searchly.com](http://www.searchly.com/) — 免费提供 2 个索引和 20MB 存储。

**[⬆️ 返回顶部](#table-of-contents)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web 开发等方面的免费课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费的开源平台，课程重点是 JavaScript 和 Ruby 用于 Web 开发。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量经验丰富的专业人士的简历模板，可随时克隆和完全编辑并下载，ATS 优化。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 由行业领先专家提供的免费短期课程，在一小时或更短时间内获得最新生成式 AI 工具和技术的实践经验。
  * [Roadmap.sh](https://roadmap.sh) - 免费学习路线图，涵盖从区块链到用户体验设计的所有开发方面。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费的认证课程，主题包括网络安全、网络和 Python。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 是一个在线发布材料的平台，来自超过 2,500 个 MIT 课程，免费与世界各地的学习者和教育者分享知识。Youtube 频道可在[@mitocw](https://www.youtube.com/@mitocw/featured)找到。

**[⬆️ 返回顶部](#table-of-contents)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费的临时电子邮件，用于测试。
  * [AhaSend](https://ahasend.com) - 事务性电子邮件服务，每月免费发送 1000 封电子邮件，免费计划中包含无限的域名、团队成员、Webhooks 和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源的匿名电子邮件转发，可免费创建无限的电子邮件别名。
  * [Antideo](https://www.antideo.com) — 在免费层中，每小时可进行 10 次 API 请求，用于电子邮件验证、IP 和电话号码验证。无需信用卡。
  * [Brevo](https://www.brevo.com/) — 每月 9000 封电子邮件，每天 300 封免费。
  * [Bump](https://bump.email/) - 免费提供 10 个 Bump 电子邮件地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) — 免费提供 5 个 Burner 电子邮件地址，1 个邮箱，7 天的邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 时事通讯服务。最多可免费订阅 100 名用户。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过 HTTP POST 接收电子邮件并进行事务性外发 - 每月免费提供 10,000 封电子邮件。
  * [Contact.do](https://contact.do/) — 链接中的联系表单（用于联系表单的 bitly）。
  * [debugmail.io](https://debugmail.io/) — 易于使用的开发人员测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 免费提供最多 2 个电子邮件地址，每个地址具有 100MB 的存储空间。支持 IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送多达 9000 封电子邮件，每天最多 300 封。
  * [EmailOctopus](https://emailoctopus.com) - 每月最多 2500 名订阅者和 10000 封电子邮件免费。
  * [EmailJS](https://www.emailjs.com/) — 这不是整个电子邮件服务器；这只是一个电子邮件客户端，您可以使用它直接从客户端发送电子邮件，而无需暴露您的凭据，免费层每月有 200 个请求，2 个电子邮件模板，请求最多 50Kb，有限的联系人历史记录。
  * [EtherealMail](https://ethereal.email) - Ethereal 是一个虚假的 SMTP 服务，主要针对 Nodemailer 和 EmailEngine 用户（但不限于）。这是一个完全免费的反事务性电子邮件服务，邮件永远不会送达。
  * [Temp-Mail.org](https://temp-mail.org/en/) - 利用各种域名的临时/一次性邮件生成工具。每次重新加载页面时，电子邮件地址都会刷新。它完全免费，不包括其服务的任何定价。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证多达 200 封电子邮件，并查看电子邮件是否为临时电子邮件。
  * [Emailvalidation.io](https://emailvalidation.io) - 每月免费进行 100 次电子邮件验证。
  * [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国的临时/一次性邮件生成器。支持 10 个域名，同时让您可以自由创建无限的地址。（包括广告）但除此之外，该服务不包括任何定价，完全免费。
  * [forwardemail.net](https://forwardemail.net) — 免费的自定义域名电子邮件转发。使用您的域名创建和转发无限数量的电子邮件地址（**注意**：如果您使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work TLDs，则由于垃圾邮件原因，您必须付费）。
  * [Imitate Email](https://imitate.email) - 用于跨构建/QA 和 CI/CD 测试电子邮件功能的沙盒电子邮件服务器。免费帐户每天永远获得 15 封电子邮件。
  * [ImprovMX](https://improvmx.com) - 免费的电子邮件转发。
  * [EForw](https://www.eforw.com) - 一个域名的免费电子邮件转发。从您的域名接收和发送电子邮件。
  * [Inboxes App](https://inboxesapp.com) — 每天创建多达 3 个临时电子邮件，然后在完成后从方便的 Chrome 扩展程序中删除它们。非常适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性电子邮件收件箱，具有长达 3 天的电子邮件自动删除功能。开源且可以自托管。
  * [mail-tester.com](https://www.mail-tester.com) — 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月免费 20 次。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，由 roundsphere.com 提供的免费服务。
  * [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过 Web 界面提供服务。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时电子邮件地址注册，每小时 120 个请求（~每月 86,400 个）。
  * [Mailchimp](https://mailchimp.com/) — 500 名订阅者和每月 1000 封电子邮件免费。
  * [Maildroppa](https://maildroppa.com) - 最多 100 名订阅者和无限的电子邮件以及免费的自动化。
  * [MailerLite.com](https://www.mailerlite.com) — 每月 1000 名订阅者，每月 12000 封电子邮件免费。
  * [MailerSend.com](https://www.mailersend.com) — 电子邮件 API、SMTP，每月免费提供 3000 封事务性电子邮件。
  * [mailinator.com](https://www.mailinator.com/) — 免费的公共电子邮件系统，您可以使用任何您想要的收件箱。
  * [Mailjet](https://www.mailjet.com/) — 每月免费发送 6000 封电子邮件（每天发送限制为 200 封）。
  * [Mailnesia](https://mailnesia.com) - 免费的临时/一次性电子邮件，可自动访问注册链接。
  * [mailsac.com](https://mailsac.com) - 用于临时电子邮件测试的免费 API，免费的公共电子邮件托管，出站捕获，电子邮件到 slack/websocket/webhook（每月 API 限制为 1500）。
  * [Mailtrap.io](https://mailtrap.io/) — 用于开发的虚假 SMTP 服务器，免费计划包含一个收件箱、100 条消息、无团队成员、每秒两封电子邮件、无转发规则。
  * [Mailvalidator.io](https://mailvalidator.io/) - 每月免费验证 300 封电子邮件，实时 API 可进行批量处理。
  * [Mail7.io](https://www.mail7.io/) — 为 QA 开发人员提供的免费临时电子邮件地址。使用 Web 界面或 API 即时创建电子邮件地址。
  * [Momentary Email](https://www.momentaryemail.com/) — 免费的临时电子邮件地址。在网站上或通过 RSS 提要阅读传入的电子邮件。
  * [Mutant Mail](https://www.mutantmail.com/) — 免费提供 10 个电子邮件 ID，1 个域名，1 个邮箱。所有电子邮件 ID 的单个邮箱。
  * [Outlook.com](https://outlook.live.com/owa/) - 免费的个人电子邮件和日历。
  * [Parsio.io](https://parsio.io) — 免费的电子邮件解析器（转发电子邮件，提取数据，将其发送到您的服务器）。
  * [pepipost.com](https://pepipost.com) — 第一个月免费提供 30k 封电子邮件，然后每天免费提供 100 封电子邮件。
  * [Plunk](https://useplunk.com) - 每月免费提供 3K 封电子邮件。
  * [Postmark](https://postmarkapp.com/) - 每月免费提供 100 封电子邮件，无限的 DMARC 每周摘要。
  * [Proton Mail](https://proton.me/mail) - 免费的安全电子邮件帐户服务提供商，具有内置的端到端加密。免费提供 1GB 存储空间。
  * [Queuemail.dev](https://queuemail.dev) — 可靠的电子邮件传递 API。免费层（每月 10,000 封电子邮件）。异步发送。使用多个 SMTP 服务器。阻止列表、日志记录、跟踪、Webhooks 等。
  * [QuickEmailVerification](https://quickemailverification.com) — 在免费层中，每天免费验证 100 封电子邮件，以及其他免费 API，如 DEA 检测器、DNS 查找、SPF 检测器等。
  * [Resend](https://resend.com) - 为开发人员提供的事务性电子邮件 API。每月免费提供 3000 封电子邮件，每天免费提供 100 封电子邮件，一个自定义域名。
  * [Sender](https://www.sender.net) 每月最多发送 15000 封电子邮件，最多 2500 名订阅者。
  * [SendGrid](https://sendgrid.com/) — 每天免费提供 100 封电子邮件和 2000 个联系人。
  * [Sendpulse](https://sendpulse.com) — 每月 500 名订阅者，每月免费提供 15000 封电子邮件。
  * [SimpleLogin](https://simplelogin.io/) - 开源的、可自托管的电子邮件别名/转发解决方案。免费提供 5 个别名，无限带宽，无限回复/发送。对教育工作者（学生、研究人员等）免费。
  * [Substack](https://substack.com) - 无限制的免费时事通讯服务。开始收费时开始付费。
  * [Sweego](https://www.sweego.io/) - 为开发人员提供的欧洲事务性电子邮件 API。每天免费提供 500 封电子邮件。
  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，使发送电子邮件变得容易。每月免费提供 500 封交易电子邮件。
  * [temp-mail.io](https://temp-mail.io) — 免费的一次性临时电子邮件服务，可同时发送多个电子邮件并进行转发
  * [tinyletter.com](https://tinyletter.com/) — 每月免费提供 5,000 个订阅者
  * [Touchlead](https://touchlead.app) - 一个多功能营销自动化工具，具有潜在客户管理、表单生成器和自动化功能。有限数量的潜在客户和自动化功能免费
  * [trashmail.com](https://www.trashmail.com) - 免费的一次性电子邮件地址，具有转发和自动地址过期功能
  * [Tutanota](https://tutanota.com/) - 免费的安全电子邮件账户服务提供商，内置端到端加密，无广告，无跟踪。免费提供 1GB 存储空间。它也是部分[开源](https://github.com/tutao/tutanota)的，因此您可以自行托管。
  * [validemail.io](https://validemail.io/) - 免费层，每月提供 10,000 次验证和每秒 10 次请求。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证 API，具有邮箱确认和一次性电子邮件地址检测器；每天免费提供 25 次电子邮件验证。
  * [verimail.io](https://verimail.io/) — 批量和 API 电子邮件验证服务。每月免费提供 100 次验证
  * [Zoho](https://www.zoho.com) — 最初是一家电子邮件提供商，但现在提供一套服务，其中一些服务有免费计划。具有免费计划的服务列表：
     - [电子邮件](https://zoho.com/mail) 免费提供给 5 个用户。每个用户 5GB 和 25MB 附件限制，一个域。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist 的永久免费计划包括一个并发远程支持许可证和对 5 个无人值守计算机许可证的无限期访问，可用于专业和个人使用。
     - [Sprints](https://zoho.com/sprints) 免费提供给 5 个用户，5 个项目和 500MB 存储空间。
     - [Docs](https://zoho.com/docs) — 免费提供给 5 个用户，上传限制为 1GB，存储空间为 5GB。Zoho Office Suite（Writer、Sheets 和 Show）捆绑在一起。
     - [Projects](https://zoho.com/projects) — 免费提供给 3 个用户，2 个项目和 10MB 附件限制。相同的计划适用于[Bugtracker](https://zoho.com/bugtracker)。
     - [Connect](https://zoho.com/connect) — 团队协作免费提供给 25 个用户，具有三个组、三个自定义应用程序、3 个看板、3 个手册和 10 个集成以及频道、事件和论坛。
     - [Meeting](https://zoho.com/meeting) — 最多可容纳 3 名会议参与者和 10 名网络研讨会参与者的会议。
     - [Vault](https://zoho.com/vault) — 个人可访问密码管理。
     - [Showtime](https://zoho.com/showtime) — 又一款用于培训的会议软件，可进行最多 5 名参与者的远程会话。
     - [Notebook](https://zoho.com/notebook) — Evernote 的免费替代品。
     - [Wiki](https://zoho.com/wiki) — 免费提供给 3 个用户，存储空间为 50MB，页面数量不限，zip 备份，RSS 和 Atom 提要，访问控制和可自定义的 CSS。
     - [Subscriptions](https://zoho.com/subscriptions) — 对于 20 个客户/订阅和 1 个用户，循环计费管理免费，所有支付托管由 Zoho 完成。存储最后 40 个订阅指标
     - [Checkout](https://zoho.com/checkout) — 产品计费管理，具有 3 个页面和最多 50 次付款。
     - [Desk](https://zoho.com/desk) — 客户支持管理，具有 3 个代理，私有知识库和电子邮件票证。与[Assist](https://zoho.com/assist)集成，用于一个远程技术人员和 5 个无人值守计算机。
     - [Cliq](https://zoho.com/cliq) — 团队聊天软件，具有 100GB 存储空间，用户数量不限，每个频道 100 个用户和 SSO。
     - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
     - [Forms](https://zoho.com/forms) - 表单创建器
     - [Sign](https://zoho.com/sign) - 无纸化签名
     - [Surveys](https://zoho.com/surveys) - 在线调查
     - [Bookings](https://zoho.com/bookings) - 预约安排

**[⬆️ 返回顶部](#table-of-contents)**

## 功能切换管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一个以开发者为中心的功能标志服务，团队规模不受限制，支持出色，价格合理。免费计划最多可支持 10 个标志、两个环境、1 个产品和每月 500 万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；在 Web、移动和服务器端应用程序中管理功能标志。使用我们的托管 API，部署到您自己的私有云，或在本地运行。
  * [GrowthBook](https://growthbook.io) - 具有内置贝叶斯统计分析引擎的开源功能标志和 A/B 测试提供商。免费提供给最多 3 个用户，无限制的功能标志和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能标志、A/B 测试、分析和应用程序配置，具有 Git 风格的版本控制和同步的内存本地标志评估。免费提供给最多 5 个团队成员，无限制的功能标志和 A/B 测试。
  * [Molasses](https://www.molasses.app) - 强大的功能标志和 A/B 测试。免费提供最多 3 个环境，每个环境有 5 个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能切换管理平台。免费计划最多可支持 10 个标志、两个环境、无限制的请求。SDK、分析仪表板、发布日历、Slack 通知和所有其他功能都包含在无限制的免费计划中。
  * [Statsig](https://www.statsig.com) - 用于功能管理、A/B 测试、分析等的强大平台。其慷慨的免费计划提供无限制的座位、标志、实验和动态配置，每月支持多达 100 万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志和 A/B 测试。配置即代码和完全类型化的 TypeScript SDK。与 Next.js 和 React 等框架的强大集成。慷慨的免费层和廉价的扩展选项。

**[⬆️ 返回顶部](#table-of-contents)**

## 字体

  * [dafont](https://www.dafont.com/) - 本网站上展示的字体是其作者的财产，要么是免费软件、共享软件、演示版本，要么是公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器、字体 hinter 和字体提交者。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 用于商业工作的免费字体。精心挑选了这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到 Google 的 CDN 轻松快速地安装在网站上。
  * [FontGet](https://www.fontget.com/) - 有多种字体可供下载，并使用标签整齐地分类。
  * [Fontshare](https://www.fontshare.com/) - 是一项免费字体服务。它是一个不断增长的专业级字体集合，100%免费用于个人和商业用途。
  * [Befonts](https://befonts.com/) - 提供几种独特的字体供个人或商业使用。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体以及它们的使用方式。
  * [Bunny](https://fonts.bunny.net) 以隐私为导向的 Google Fonts
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体供个人使用，并可以输入文本进行快速过滤。
  * [fonts.xz.style](https://fonts.xz.style/) 用于使用 CSS 将字体系列交付到网站的免费和开源服务。

**[⬆️ 返回顶部](#table-of-contents)**

## 表单


  * [Form2Channel](https://form2channel.com) - 将表单提交发送到 Google Sheets、电子邮件、电子邮件、Slack、Telegram 或 Webhooks。无限制且免费。功能包括多个收件人、自定义感谢页面、文件上传等。
  * [Feathery](https://feathery.io) - 强大的、开发者友好的表单构建器。构建注册和登录、用户引导、支付流程、复杂的金融应用程序等。免费计划允许每月最多 250 次提交和五个活动表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。垃圾邮件过滤器、电子邮件通知和自动回复、Webhooks、Zapier、重定向、AJAX 或 POST 等。免费计划提供无限表单、每月 20 次提交，以及带有 Form-Data 徽章的额外 2000 次提交。
  * [FabForm](https://fabform.io/) - 智能开发者的表单后端平台。免费计划允许每月 250 次表单提交。友好的现代 GUI。与 Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) - HTML 表单提交的端点。具有通知、垃圾邮件阻止和符合 GDPR 的数据处理。基本使用的免费计划。
  * [Formcake.com](https://formcake.com) - 开发人员的表单后端，免费计划允许无限表单、100 次提交、Zapier 集成。不需要库或依赖项。
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单端点，免费计划允许每月 100 次提交。
  * [formingo.co](https://www.formingo.co/)- 静态网站的简单 HTML 表单。您可以免费开始，无需注册帐户。免费计划允许每月 500 次提交和可自定义的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 每月 50 次提交的无限表单、垃圾邮件保护、电子邮件通知和可导出 HTML 的拖放式设计器。其他功能包括自定义字段规则、团队和与 Google Sheets、Slack、ActiveCampaign 和 Zapier 的集成。
  * [formlets.com](https://formlets.com/) - 在线表单，每月无限单页表单，每月 100 次提交，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子邮件服务，免费计划允许无限表单，每月 250 次提交，由客户支持团队支持。
  * [Formspree.io](https://formspree.io/) - 使用 HTTP POST 请求发送电子邮件。免费层限制每个表单每月 50 次提交。
  * [Formsubmit.co](https://formsubmit.co/) - 您的 HTML 表单的简单表单端点。永远免费。无需注册。
  * [getform.io](https://getform.io/) - 设计师和开发人员的表单后端平台，1 个表单，50 次提交，单个文件上传，100MB 文件存储。
  * [HeroTofu.com](https://herotofu.com/) - 具有机器人检测和加密存档的表单后端。通过 UI 将提交转发到电子邮件、Slack 或 Zapier。使用您自己的前端。不需要服务器代码。免费计划提供无限表单和每月 100 次提交。
  * [HeyForm.net](https://heyform.net/) - 拖放式在线表单构建器。免费层允许您创建无限表单并收集无限提交。带有预建模板、反垃圾邮件和 100MB 文件存储。
  * [Tally.so](https://tally.so/) - 99%的功能都是免费的。免费层允许您拥有：无限表单、无限提交、电子邮件通知、表单逻辑、收集付款、文件上传、自定义感谢页面等等。
  * [Hyperforms.app](https://hyperforms.app/) - 在几秒钟内创建表单到电子邮件，无需后端代码。个人帐户免费为您提供每月最多 50 次表单提交。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点。与静态网站配合使用效果很好。免费计划包括最多 1 个网站，每月最多 50 次提交。
  * [Pageclip](https://pageclip.co/) - 免费计划允许一个站点、一个表单和每月 1000 次提交。
  * [Qualtrics Survey](https://qualtrics.com/free-account) - 使用这个一流的工具创建专业表单和调查。50 多个专家设计的调查模板。免费帐户的限制是 1 个活动调查、每个调查 100 个响应和 8 种响应类型。
  * [Screeb](https://screeb.app/) - 应用内调查和产品分析，用于解码用户行为。永远免费计划允许每月 500 个活跃用户、无限响应和事件、许多集成、导出和定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 强大而简单的表单后端，用于您的网站，永远免费计划允许每月 50 次提交、250MB 文件存储、Zapier 集成、CSV/JSON 导出、自定义重定向、自定义响应页面、Telegram 和 Slack 机器人、单个电子邮件通知。
  * [Survicate](https://survicate.com/) - 从所有来源收集反馈，并使用一个工具发送后续调查。使用 AI 自动分析反馈并提取见解。免费电子邮件、网站、产品内或移动调查、AI 调查创建者和每月 25 个响应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 轻松集成 HTML 表单，无需任何服务器端代码，免费。用户提交表单后，将向您注册的地址发送包含表单内容的电子邮件。
  * [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费计划有五个表单，每个表单最多 3 个步骤，每月 50 个响应。
  * [Tapform.com](https://tapform.com/) - 包括免费的无限表单、无限字段和无限提交。表单可以以标准或聊天格式显示。
  * [Typeform.com](https://www.typeform.com/) - 在网站上包含设计精美的表单。免费计划每个表单仅允许十个字段和每月 100 个响应。
  * [WaiverStevie.com](https://waiverstevie.com) - 具有 REST API 的电子签名平台。您可以通过 Webhooks 接收通知。免费计划对签署的文档加水印，但允许无限信封+签名。
  * [Web3Forms](https://web3forms.com) - 无需编写后端代码即可为静态和 JAMStack 网站提供联系表单。免费计划允许每月无限表单、无限域和 250 次提交。
  * [WebAsk](https://webask.io) - 调查和表单构建器。免费计划每个帐户有三个调查，每月 100 个响应，每个调查十个元素。
  * [Wufoo](https://www.wufoo.com/) - 用于网站的快速表单。免费计划每月限制 100 次提交。
  * [formpost.app](https://formpost.app) - 免费、无限的表单到电子邮件服务。免费设置自定义重定向、自动回复、Webhooks 等。
  * [Formester.com](https://formester.com) - 在您的网站上分享和嵌入独特外观的表单-对创建的表单数量或计划限制的功能没有限制。每月免费获得多达 100 次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在您的网站上嵌入 PDF 编辑器，并将任何 PDF 转换为可填写的表单。免费计划允许无限 PDF，每个 PDF 有三次提交。
  * [forms.app](https://forms.app/) - 创建具有强大功能的在线表单，如条件逻辑、自动分数计算器和 AI。免费计划收集多达 100 个响应，将表单嵌入网站或使用链接。
  * [Qualli](https://usequalli.com) - 应用内调查，专为移动设计。使用 Qualli AI 精心设计完美的问题。您可以在我们的免费计划上试用，最多 500 个 MAU，创建无限表单和触发器。
  * [Sprig](https://sprig.com/) - 每月 1 次产品内调查或带有回放的调查，具有 GPT 驱动的 AI 分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集总共 25 个反馈提交。易于与提供的 React 和 Vue 组件集成。

**[⬆️ 返回顶部](#table-of-contents)**

## 生成式 AI

  * [Keywords AI](https://keywordsai.co) - 最佳的 LLM 监控平台。一种格式，两行代码即可调用 200 多个 LLM。每月免费提供 10,000 次请求，平台功能免费！
  * [Portkey](https://portkey.ai/) - Gen AI 应用的控制面板，具有可观测性套件和 AI 网关。每月免费发送和记录多达 10,000 次请求。
  * [OpenPipe](https://openpipe.ai) - 为开发人员提供完全托管的微调。免费计划允许您使用每个数据集最多 2,000 行数据微调一个模型。
  * [Braintrust](https://www.braintrustdata.com/) - Gen AI 的评估、提示游乐场和数据管理。免费计划每周提供多达 1,000 行私人评估行。
  * [Findr](https://www.usefindr.com/) - 通用搜索，让您一次搜索所有应用。搜索助手，让您使用您的信息回答问题。免费计划提供无限的统一搜索和每天 5 次的协同查询。
  * [ReportGPT](https://report-gpt.io) - AI 驱动的写作助手。只要您自带 API 密钥，整个平台都是免费的。
  * [Clair](https://askclair.ai/) - 临床 AI 参考。学生可以免费访问专业工具套件，其中包括开放搜索、临床摘要、医学审查、药物相互作用、ICD-10 代码和管理。此外，还提供专业套件的免费试用。
  * [Langtrace](https://langtrace.ai) - 使开发人员能够跟踪、评估、管理提示和数据集，并调试与 LLM 应用程序性能相关的问题。它为任何 LLM 创建开放遥测标准跟踪，有助于可观测性，并与任何可观测性客户端配合使用。免费计划每月提供 50K 跟踪。
  * [Ultra AI](https://ultraai.app) - 您产品的 AI 指挥中心。功能包括多提供商 AI 网关、提示管理器、缓存、日志、分析、模型回退和用户速率限制。永久免费计划每月提供 10k+次请求和除缓存外的所有功能。

**[⬆️ 返回顶部](#table-of-contents)**

## CDN 和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — bootstrap、bootswatch 和 fontawesome.io 的 CDN
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。内容交付的最佳选择。cdnjs 是一个由 Cloudflare 提供支持的免费开源 CDN 服务，被超过 11%的所有网站所信赖。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是最流行的开源 JavaScript 库的内容分发网络
  * [Stellate](https://stellate.co/) - Stellate 是一个快速、可靠的 CDN，适用于您的 GraphQL API，并且对两个服务免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管流行的第三方 JavaScript 库，如 jQuery，并使您能够轻松地将它们添加到您的 Web 应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的 DDoS 保护和 SSL 证书
  * [Skypack](https://www.skypack.dev/) — 100%原生 ES 模块 JavaScript CDN。每个域每月免费提供 100 万次请求。
  * [raw.githack.com](https://raw.githack.com/) — 一个现代替代品 **rawgit.com**，它只是使用 Cloudflare 托管文件
  * [section.io](https://www.section.io/) — 一种简单的方式来启动和管理完整的 Varnish Cache 解决方案。据说一个站点永远免费
  * [statically.io](https://statically.io/) — Git 存储库（GitHub、GitLab、Bitbucket）、WordPress 相关资产和图像的 CDN
  * [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不失败的 CD。个人使用免费，一个开发人员，无支持
  * [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
  * [weserv](https://images.weserv.nl/) — 一个图像缓存和调整大小的服务。使用全球缓存即时处理图像。
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费的 DDoS 保护
  * [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月 1TB 和 100 万次请求免费，免费 DNS 托管
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月高达 5TB 的免费 CDN 流量，19 个核心 PoP，1 个域和通用 SSL。

**[⬆️ 返回顶部](#table-of-contents)**

## PaaS

  * [anvil.works](https://anvil.works) - 仅使用 Python 进行 Web 应用开发。免费层级，无限应用和 30 秒超时。
  * [appwrite](https://appwrite.io) - 无限项目，无项目暂停（支持 WebSockets）和身份验证服务。免费层级每个项目 1 个数据库，3 个存储桶，5 个函数。
  * [configure.it](https://www.configure.it/) - 移动应用开发平台，免费用于两个项目，功能有限但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 面向 Java/Kotlin 开发人员的开源、跨平台移动应用开发工具链。免费用于商业用途，项目数量不限。
  * [Cosmonic](https://cosmonic.com) - 功能丰富的 WebAssembly PaaS 和 SDK，默认情况下具有低样板、灵活和安全的微服务。始终免费层级包括托管主机、25 个微服务以及强大的键值存储、负载均衡的公共 HTTP 端点等功能。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，具有从 TypeScript 代码自动生成的可视化 CMS。内置 A/B 测试、内容分段和实时分析。非常适合内容繁重的企业电子商务网站。免费版每月最多 5k 页面浏览量或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 在全球边缘运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统。免费层级包括每天 100,000 次请求和每月 100GiB 数据传输。
  * [domcloud.co](https://domcloud.co) - 提供与 GitHub、SSH 和 MariaDB/Postgres 数据库的 CI/CD 的 Linux 托管服务。免费版本具有 1GB 存储和 1GB 网络/月限制，仅限于免费域名。
  * [encore.dev](https://encore.dev/) - 使用静态分析提供自动基础设施、无样板代码等的后端框架。包括免费的云托管用于业余项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 使用 Git 推送风格工作流在您自己的 AWS 账户上部署 Web 服务、数据库等。免费层级适用于个人 GitHub 存储库上有 1 个开发人员的用户。AWS 成本通过 AWS 计费，但您可以使用信用额度和 AWS 免费层级。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 提供一个永不休眠的免费实例和一个免费层级 PostgreSQL 数据库，限制为 2 个连接、10,000 行和无备份，适用于 Elixir/Phoenix 应用程序。
  * [Glitch](https://glitch.com/) - 具有代码共享和实时协作功能的免费公共托管。免费计划每月限制 1000 小时。
  * [Hop](https://hop.io/) - 无需配置的 Web 服务托管平台。免费层级具有 1x 共享 CPU、512MB RAM 和 3GB 存储。
  * [Lade](https://www.lade.io/) - Lade 是为开发人员构建的云平台。免费层级包括五个服务，可以是应用程序或数据库。每个服务包括 128MB RAM 和 1GB 存储。
  * [Mendix](https://www.mendix.com/) - 企业快速应用开发，无限制可访问的沙盒环境，支持每个应用程序的总用户数、0.5GB 存储和 1GB RAM。此外，免费层级允许使用 Studio 和 Studio Pro IDE。
  * [m3o.com](https://m3o.com) - 用于 API 服务开发的云平台。M3O 是完全托管的微服务，专注于云中的 Go 微服务开发。免费层级提供足够的资源来运行五个服务并与他人协作。
  * [pipedream.com](https://pipedream.com) - 为开发人员构建的集成平台。根据任何触发器开发任何工作流程。工作流程是您可以免费运行的代码。无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) - 云 Python 应用托管。初学者账户免费，在 your-username.pythonanywhere.com 域名上有 1 个 Python Web 应用程序，512MB 私人文件存储，一个 MySQL 数据库。
  * [ampt.dev](https://getampt.com/) - Ampt 允许团队在 AWS 上构建、部署和扩展 JavaScript 应用程序，无需复杂的配置或管理基础设施。免费预览计划包括每小时 500 次调用、每天 2,500 次调用和每月 50,000 次调用。自定义域仅在付费计划中允许。
  * [Divio](https://www.divio.com/) - 仅使用 Docker 部署云应用的平台。开发项目可免费订阅。需要信用卡，不支持自定义域。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是一个对开发人员友好的无服务器平台，可在全球范围内部署应用程序。通过基于 git 的部署、原生自动扩展、全球边缘网络和内置服务网格和发现，无缝运行 Docker 容器、Web 应用程序和 API。免费实例允许您在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管的 Postgres 数据库可在法兰克福（德国）、华盛顿特区（美国）和新加坡使用。512MB 内存，2GB 存储和 0.1 CPU。无需信用卡即可开始使用。
  * [Napkin](https://www.napkin.io/) - FaaS，具有 500Mb 内存，默认超时 15 秒，每月 5,000 次免费 API 调用，限制为每秒 5 次调用。
  * [Meteor Cloud](https://www.meteor.com/cloud) - Galaxy 托管。Meteor 的平台即服务，包括免费的 MongoDB 共享托管和自动 SSL。
  * [Northflank](https://northflank.com) - 使用强大的 UI、API 和 CLI 构建和部署微服务、作业和托管数据库。从版本控制和外部 Docker 注册表无缝扩展容器。免费层级包括两个服务、两个 cron 作业和 1 个数据库。
  * [Platformatic Cloud](https://platformatic.dev/) - Platformatic 提供许多开源包，可将您的 Fastify 应用程序包装并部署在 Platformatic Cloud 中。内置 CD 与 GitHub 操作。[免费计划](https://platformatic.dev/pricing/)适用于爱好者，只需简单的[GitHub 登录](https://platformatic.cloud/)。
  * [YepCode](https://yepcode.io) - 无服务器环境中连接 API 和服务的一体化平台。它带来了无代码工具的所有敏捷性和优势，但具有使用编程语言的所有功能。免费层级包括[1,000 个 Yep](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，允许您快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。在[免费计划](https://wundergraph.com/pricing)上最多 3 个项目，1GB 出口，每月 300 分钟的构建时间。
  * [Zeabur](https://zeabur.com) - 一键部署您的服务。免费用于三个服务，每月提供 5 美元的免费信用额度。
  * [mogenius](https://mogenius.com) - 轻松在 Kubernetes 上构建、部署和运行服务。免费层级支持将本地 Kubernetes 与 mogenius 连接，使个人开发人员能够在其机器上创建类似于生产的测试环境。

**[⬆️ 返回顶部](#table-of-contents)**

## BaaS

  * [Activepieces](https://www.activepieces.com) - 在你的应用后端构建自动化流程，将多个应用连接在一起。例如，当你的应用中触发事件时发送 Slack 消息或添加 Google Sheet 行。每月免费高达 5,000 个任务。
  * [back4app.com](https://www.back4app.com) - Back4App 是一个基于 Parse Platform 的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和 Web Baas，提供 1GB 文件存储免费，每月 50,000 次推送通知，以及表中的 1000 个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的 AI 将在我们的函数运行时和托管存储上启动你的 Python API，并在我们的在线编辑器中免费构建和托管，或在本地使用你喜欢的工具。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC 开发者计划提供文档和资源，用于为你的企业构建和部署数字创新。访问全面的个人沙箱，包括平台、SDK 和可用于构建和定制应用的组件库。
  * [connectycube.com](https://connectycube.com) - 无限制的聊天消息、p2p 语音和视频通话、文件附件和推送通知。对于多达 1000 个用户的应用免费。
  * [convex.dev](https://convex.dev/) - 反应式后端即服务，托管你的数据（具有关系和可序列化 ACID 事务的文档）、无服务器功能和 WebSockets，以将更新流式传输到各种客户端。对于小型项目免费 - 高达 1M 记录，每月 5M 次函数调用。
  * [darklang.com](https://darklang.com/) - 托管语言与编辑器和基础设施相结合。在测试版期间可访问，计划在测试版后提供慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase 帮助你构建和运行成功的应用。免费 Spark 计划提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B 测试、分析、应用分发、应用索引、云消息传递（FCM）、Crashlytics、动态链接、应用内消息传递、性能监控、预测和远程配置始终免费。
  * [Flutter Flow](https://flutterflow.io) — 无需编写一行代码即可构建你的 Flutter App UI。还具有 Firebase 集成。免费计划包括完全访问 UI 构建器和免费模板。
  * [getstream.io](https://getstream.io/) — 在几个小时而不是几周内构建可扩展的应用内聊天、消息传递、视频和音频以及提要
  * [hasura.io](https://hasura.io/) — Hasura 扩展你现有的数据库，无论它托管在哪里，并提供一个即时的 GraphQL API，可安全地用于 Web、移动和数据集成工作负载。对于每月 1GB 的数据传递免费。
  * [iron.io](https://www.iron.io/) — 异步任务处理（如 AWS Lambda），具有免费层和 1 个月的免费试用
  * [nhost.io](https://nhost.io) - 适用于 Web 和移动应用的无服务器后端。免费计划包括 PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器功能。
  * [nudge-hook.net](https://nudge-hook.net/client) — 作业调度 API（带有 swagger/openapi 客户端）。允许你尽可能多地调度临时/cron/定期 Webhook 交付。每个人都免费（无需注册），但无限计划限制为最多 500 个“推送”。接受捐赠。
  * [onesignal.com](https://onesignal.com/) — 无限制的免费推送通知。每月 10,000 封电子邮件发送，具有无限的联系人并访问自动预热。
  * [paraio.com](https://paraio.com) — 具有灵活身份验证、全文搜索和缓存的后端服务 API。一个应用免费，1GB 应用数据。
  * [progress.com](https://www.progress.com/kinvey) — 移动后端，入门计划具有无限制的请求/秒，具有 1GB 的数据存储。企业应用支持
  * [pubnub.com](https://www.pubnub.com/) — 每月最多 100 万个消息的免费推送通知和 100 个活动的每日设备
  * [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多 150 万次推送免费
  * [pushcrew.com](https://pushcrew.com/) — 推送通知服务。最多 2,000 个订阅者的无限制通知
  * [pusher.com](https://pusher.com/beams) — 每月 2000 个活跃用户的免费、无限制推送通知。适用于 iOS 和 Android 设备的单个 API。
  * [quickblox.com](https://quickblox.com/) — 用于即时消息、视频和语音通话以及推送通知的通信后端
  * [restspace.io](https://restspace.io/) - 使用服务配置服务器进行身份验证、数据、文件、电子邮件 API、模板等，然后组合成管道并转换数据。
  * [Salesforce Developer Program](https://developer.salesforce.com/signup) — 使用拖放工具快速构建应用。通过点击自定义你的数据模型。使用 Apex 代码更进一步。使用强大的 API 与任何东西集成。使用企业级安全性保持保护。通过点击或任何领先的 Web 框架自定义 UI。免费开发者计划提供对完整 Lightning Platform 的访问。
  * [ServiceNow Developer Program](https://developer.servicenow.com/) — 快速构建、测试和部署使你的组织工作更好的应用程序。免费实例和早期预览访问。
  * [simperium.com](https://simperium.com/) — 即时自动将数据移动到任何地方，多平台，无限制地发送和存储结构化数据，最大每月 2,500 个用户
  * [Singlebase.cloud](https://singlebase.cloud) — SinglebaseCloud 是一个 AI 驱动的一体化后端平台，可加速应用开发。它提供了诸如向量 DB、关系文档 DB、Auth、Search 和 Storage 等工具，旨在简化后端开发。免费/入门计划提供关系文档 DB、Auth、Search、Storage。
  * [stackstorm.com](https://stackstorm.com/) — 用于应用、服务和工作流程的事件驱动自动化，无流程、访问控制、LDAP 免费
  * [streamdata.io](https://streamdata.io/) — 将任何 REST API 转换为事件驱动的流 API。免费计划高达 100 万条消息和十个并发连接。
  * [Supabase](https://supabase.com) — 构建后端的开源 Firebase 替代品。免费计划提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) — 具有身份验证、配额、监控和分析的 API 管理。免费云产品
  * [zapier.com](https://zapier.com/) — 连接你使用的应用以自动化任务。每 15 分钟五个 zaps 和每月 100 个任务
  * [IFTTT](https://ifttt.com) — 自动化你最喜欢的应用和设备。免费 2 个小程序
  * [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费 100 个任务，15 分钟更新时间，五个活动自动化，Webhooks。
  * [LeanCloud](https://leancloud.app/) — 移动后端。1GB 数据存储、256MB 实例、3K API 请求/天和 10K 推送/天免费。（API 与 Parse Platform 非常相似）

**[⬆️ 返回顶部](#table-of-contents)**

## 低代码平台

  * [Clappia](https://www.clappia.com) - 一个专为构建业务流程应用程序而设计的低代码平台，具有可定制的移动和 Web 应用程序。提供拖放界面，具有离线支持、实时位置跟踪和与各种第三方服务集成等功能。
  * [Basedash](https://www.basedash.com) - 用于构建内部管理面板和仪表板的低代码平台。支持 SQL 数据库和 REST API。
  * [BudiBase](https://budibase.com/) - Budibase 是一个开源的低代码平台，可在几分钟内创建内部应用程序。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [appsmith](https://www.appsmith.com/) - 用于构建管理面板、内部工具和仪表板的低代码项目。与 15 多个数据库和任何 API 集成。
  * [ToolJet](https://www.tooljet.com/) - 用于构建业务应用程序的可扩展低代码框架。连接到数据库、云存储、GraphQL、API 端点、Airtable 等，并使用拖放应用程序构建器构建应用程序。
  * [ReTool](https://retool.com/) - 用于构建内部应用程序的低代码平台。Retool 高度可定制。如果您可以使用 JavaScript 和 API 编写它，您可以在 Retool 中实现。免费层允许每月最多 5 个用户，无限的应用程序和 API 连接。
  * [DronaHQ](https://www.dronahq.com/) - DronaHQ - 一个低代码平台，帮助工程团队和产品经理构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板、运营应用程序，速度提高 10 倍。
  * [ILLA Cloud](https://www.illacloud.com/) - ILLA Cloud - 一个强大的开源低代码平台，供开发人员构建内部工具。通过使用 ILLA 的组件和操作库，开发人员可以节省大量构建工具的时间。5 名团队成员免费。
  * [outsystems.com](https://www.outsystems.com/) - 企业 Web 开发 PaaS，适用于本地或云，免费的“个人环境”提供允许无限代码和最多 1GB 数据库。
  * [UI Bakery](https://uibakery.io) - 低代码平台，可加快构建自定义 Web 应用程序。支持使用拖放构建 UI，并通过 JavaScript、Python 和 SQL 进行高度定制。可作为云和自托管解决方案使用。最多 5 个用户免费。

**[⬆️ 返回顶部](#table-of-contents)**

## Web 托管

  * [Alwaysdata](https://www.alwaysdata.com/) - 100MB 免费 Web 托管，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义 Web 服务器，通过 FTP、WebDAV 和 SSH 访问；包括邮箱、邮件列表和应用程序安装程序。
  * [Awardspace.com](https://www.awardspace.com) - 免费 Web 托管+免费短域名，PHP，MySQL，应用程序安装程序，电子邮件发送和无广告。
  * [Bohr](https://bohr.io) - 非商业项目免费+开发人员优先的部署和开发平台，最大限度地减少基础设施麻烦并加快设置速度。
  * [Bubble](https://bubble.io/) - 无需代码即可构建 Web 和移动应用程序的可视化编程，带有 Bubble 品牌免费。
  * [dAppling Network](https://www.dappling.network/) - 用于 Web3 前端的去中心化 Web 托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在 App Platform Starter 层上免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) - 直接从 Google Drive 和 OneDrive 托管到 Web。仅限静态站点。永远免费。每个 Google/微软帐户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个用于在本地托管站点并公开共享它们的开发人员桌面应用程序（实时）。无论您喜欢哪种方式工作，都可以使用其漂亮的用户界面、API 和/或 CLI。
  * [Fern](https://buildwithfern.com) - 在 Fern 的免费计划上构建和托管基于 Markdown 的文档站点。您甚至可以从 API 定义文件为您的站点自动生成 API 参考。该站点托管在 _yoursite_.docs.buildwithfern.com。
  * [Free hosting](https://freehostingnoads.net/) - 免费托管，具有 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP E-Mail、免费子域、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持和许多其他免费主机不提供的功能。
  * [Freehostia](https://www.freehostia.com) - FreeHostia 提供免费托管服务，包括行业最佳控制面板和一键安装 50 多个免费应用程序。即时设置。没有强制广告。
  * [HelioHost](https://heliohost.org) - 非营利性免费 Web 托管，具有 Plesk 控制面板、PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP 电子邮件、无限带宽、免费子域、1000MB 免费存储空间，可选择升级。
  * [Kinsta Static Site hosting](https://kinsta.com/static-site-hosting/) - 免费部署多达 100 个静态站点，具有 SSL 的自定义域名，100GB 每月带宽，260 多个 Cloudflare CDN 位置。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 具有 SFPT 访问权限的 Web 托管，用于文件上传和下载，提供 PHP。
  * [Neocities](https://neocities.org) - 静态，1GB 免费存储空间，200GB 带宽。
  * [Netlify](https://www.netlify.com/) - 免费构建、部署和托管静态站点/应用程序，100GB 数据和 100GB/月带宽。
  * [pantheon.io](https://pantheon.io/) - Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。免费提供给开发人员和机构。没有自定义域名。
  * [readthedocs.org](https://readthedocs.org/) - 免费文档托管，具有版本控制、PDF 生成等功能。
  * [render.com](https://render.com) - 统一云，用于构建和运行应用程序和站点，具有免费 SSL、全球 CDN、私有网络、从 Git 自动部署以及完全免费的 Web 服务、数据库和静态网页计划。
  * [SourceForge](https://sourceforge.net/) - 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) - 前端开发人员的静态 Web 发布。具有自定义域名支持的无限站点。
  * [telegra.ph](https://telegra.ph/) - 使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/) - 一个站点，50 页，50MB 存储空间，仅在 170 多个可用的主要预定义块中，没有字体，没有图标，没有自定义域名。
  * [Vercel](https://vercel.com/) - 构建、部署和托管 Web 应用程序，具有免费 SSL、全球 CDN 和每次`git push`时唯一的预览 URL。非常适合 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) - 以 SaaS 为重点的网站构建器 - 无限网站，70 多个块，五个模板，自定义 CSS，图标，SEO 和表单。没有自定义域名。
  * [Qoddi](https://qoddi.com) - 类似于 Heroku 的 PaaS 服务，具有以开发人员为中心的方法和全包功能。免费层用于静态资产、暂存和开发人员应用程序。
  * [FreeFlarum](https://freeflarum.com/) - 社区驱动的免费 Flarum 托管，最多可容纳 250 个用户（捐赠以从页脚删除水印）。
  * [fleek.co](https://fleek.co/) - 在开放 Web 及其协议上无缝构建和运行现代站点和应用程序，免费提供无限网站和 50GB/月带宽。
  * [MDB GO](https://mdbgo.com/) - 一个项目的免费托管，容器 TTL 为两周，每个项目 500MB RAM，SFTP - 1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/) - 一个易于使用的云平台，在其付费服务中，它提供免费托管三个静态站点。
  * [Serv00.com](https://serv00.com/) - 3GB 免费 Web 托管，每日备份（7 天）。支持：Crontab 作业，SSH 访问，存储库（GIT，SVN 和 Mercurial），支持：MySQL，PostgreSQL，MongoDB，PHP，Node.js，Python，Ruby，Java，Perl，TCL/TK，Lua，Erlang，Rust，Pascal，C，C++，D，R 等等。

**[⬆️ 返回顶部](#table-of-contents)**

## DNS

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由 Cloudflare 提供的快速、安全（加密 DNS 查询）的免费公共 DNS 解析器。可用于绕过互联网提供商的 DNS 封锁，防止 DNS 查询监控，并[阻止成人和恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可以[通过 API 使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注意：只是一个 DNS 解析器，不是 DNS 托管商。
  * [1984.is](https://www.1984.is/product/freedns/) - 具有 API 和许多其他免费 DNS 功能的免费 DNS 服务。
  * [cloudns.net](https://www.cloudns.net/) - 免费 DNS 托管，最多可托管 1 个域名，包含 50 条记录。
  * [deSEC](https://desec.io) - 具有 API 支持的免费 DNS 托管，设计时考虑到安全性。运行在开源软件上，并由[SSE](https://www.securesystems.de/)支持。
  * [dns.he.net](https://dns.he.net/) - 具有动态 DNS 支持的免费 DNS 托管服务。
  * [Zonomi](https://zonomi.com/) - 具有即时 DNS 传播的免费 DNS 托管服务。免费计划：1 个 DNS 区域（域名），最多包含 10 条 DNS 记录。
  * [dnspod.com](https://www.dnspod.com/) - 免费 DNS 托管。
  * [duckdns.org](https://www.duckdns.org/) - 免费的 DDNS，免费层级最多可支持 5 个域名。具有各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) - 具有[API 支持](https://dynv6.com/docs/apis)和管理大量 DNS 记录类型（如 CNAME、MX、SPF、SRV、TXT 等）的免费 DDNS 服务。
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费 DNS 托管。此外，还根据众多公共用户[贡献的域名](https://freedns.afraid.org/domain/registry/)提供免费子域名。注册后从“子域名”菜单中获取免费子域名。
  * [luadns.com](https://www.luadns.com/) - 免费 DNS 托管，三个域名，所有功能都有合理的限制。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费 DNS。域名数量不限。
  * [nextdns.io](https://nextdns.io) - 基于 DNS 的防火墙，每月 30 万次免费查询。
  * [noip.at](https://noip.at/) - 无需注册、跟踪、记录或广告的免费 DDNS 服务。域名数量不限。
  * [noip](https://www.noip.com/) - 一种动态 DNS 服务，允许最多 3 个主机名免费，每 30 天确认一次。
  * [sslip.io](https://sslip.io/) - 免费 DNS 服务，当使用嵌入 IP 地址的主机名查询时，返回该 IP 地址。
  * [zilore.com](https://zilore.com/en/dns) - 免费 DNS 托管，最多可托管 5 个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 具有动态 DNS 支持的免费 DNS 托管。
  * [zonewatcher.com](https://zonewatcher.com) - 自动备份和 DNS 更改监控。一个域名免费。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为提供的免费 DNS 托管。
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner 提供的具有 API 支持的免费 DNS 托管。
  * [Glauca](https://docs.glauca.digital/hexdns/) - 最多支持 3 个域名的免费 DNS 托管和 DNSSEC 支持。

**[⬆️ 返回顶部](#table-of-contents)**



## 域名

  * [eu.org](https://nic.eu.org) - 免费的 eu.org 域名。请求通常在 14 天内批准。
  * [pp.ua](https://nic.ua/) - 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#table-of-contents)**



## IaaS

  * [4EVERLAND](https://www.4everland.org/) - 与 AWS S3 兼容 - API、接口操作、CLI 和其他上传方法，以安全、方便和高效的方式上传和存储来自 IPFS 和 Arweave 网络的文件。注册用户可免费获得 6GB 的 IPFS 存储和 300MB 的 Arweave 存储。任何小于 150KB 的 Arweave 文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2 云存储。无限时间免费提供 10GB（类似 Amazon S3）对象存储。
  * [filebase.com](https://filebase.com/) - 由区块链驱动的 S3 兼容对象存储。无限时长免费提供 5GB 存储。
  * [Tebi](https://tebi.io/) - S3 兼容对象存储。免费提供 25GB 存储和 250GB 出站传输。
  * [Idrive e2](https://www.idrive.com/e2/) - S3 兼容对象存储。每月免费提供 10GB 存储和 10GB 下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容对象存储。每月免费提供 15GB 存储和 15GB 下载。
  * [Spheron](https://spheron.network/) - 从去中心化云存储和网络托管到一个平台下的去中心化计算，为应用和开发者提供，免费计划提供 5GB 存储、100GB 带宽、无限域名和项目、价值 5 美元的计算资源（相对于 AWS 价值 50 美元）。

**[⬆️ 返回顶部](#table-of-contents)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Redis 计划。单节点，1 个 CPU，1GB 内存，对于 PostgreSQL 和 MySQL，有 5GB 存储空间。可轻松迁移到更广泛的计划或跨云。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关系数据库，无限制的基础，每个基础 1200 行，每月 1000 个 API 请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 即服务，具有[80GB 免费层级](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，具有函数、类似 Mongdb 的查询、键/值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划有 5GB 存储空间和每分钟 60/API 调用。包括 2 个开发人员。无需信用卡。
  * [CrateDB](https://crate.io/) - 用于实时分析的分布式开源 SQL 数据库。[免费层级 CRFREE](https://crate.io/lp-crfree)：一个节点，2 个 CPU，2GB 内存，8GB 存储空间。每个组织一个集群，无需支付方式。
  * [FaunaDB](https://fauna.com/) — 具有原生 GraphQL、多模型访问和每日免费层级高达 100MB 的无服务器云数据库
  * [Upstash](https://upstash.com/) — 具有免费层级高达每天 10,000 个请求、最大 256MB 数据库大小和 20 个并发连接的无服务器 Redis
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层级提供 512MB
  * [redsmin.com](https://www.redsmin.com/) — 用于 Redis 的在线实时监控和管理服务，免费监控 1 个 Redis 实例
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费高达 25MB，1 个代理服务器，基本分析
  * [scalingo.com](https://scalingo.com/) — 主要是 PaaS，但提供 128MB 至 192MB 的免费层级的 MySQL、PostgreSQL 或 MongoDB
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队构建的灵活、类似电子表格的数据库。无限表，2000 行，1 个月版本控制，最多 25 个团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层级，所有计划在测试版期间完全免费
  * [StackBy](https://stackby.com/) — 一个工具，结合了电子表格的灵活性、数据库的功能以及与您最喜欢的业务应用程序的内置集成。免费计划包括无限用户、十个堆栈和每个堆栈 2GB 附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是一个开源的 MySQL 兼容分布式 HTAP RDBMS。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5000 万个请求单位 (RU)。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发人员体验。Turso 提供免费永远的入门计划，9GB 总存储，最多 500 个数据库，最多 3 个位置，每月 10 亿行读取，以及具有 SQLite 的本地开发支持。
  * [InfluxDB](https://www.influxdata.com/) — 时间序列数据库，免费高达 3MB/5 分钟写入，30MB/5 分钟读取和 10,000 个基数系列
  * [restdb.io](https://restdb.io/) - 一个快速直接的 NoSQL 云数据库服务。使用 restdb.io，您可以获得架构、关系、自动 REST API（具有类似 MongoDB 的查询）以及用于处理数据的高效多用户管理 UI。免费计划允许 3 个用户，2500 条记录，每秒 1 个 API 请求。
  * [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 免费的 CockroachDB 高达 5GB 和 1vCPU（有限的[请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta))
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 具有 Cypher 查询语言和 REST API 的托管原生图数据库管理系统/分析平台。图大小限制（50k 节点，175k 关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5GB 存储空间（总计），1 个项目，10 个分支，无限数据库，始终可用的主分支（5 分钟后自动暂停），每月非主分支计算 20 小时活动时间（总计）。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 具有 GraphQL API 的托管原生图数据库管理系统。每天限制为 1MB 数据传输。
  * [Tinybird](https://tinybird.co) - 一个无服务器托管的 ClickHouse，通过 HTTP 进行无连接数据摄取，并允许您将 SQL 查询发布为托管 HTTP API。免费层级没有时间限制，每天 10GB 存储+1000 个 API 请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 具有类似 SQL 的图查询语言和 REST API 的托管原生图数据库管理系统/分析平台。一个免费实例，具有两个 vCPU，8GB 内存和 50GB 存储空间，在闲置 1 小时后进入睡眠状态。
  * [TerminusCMS](https://terminusdb.com/pricing) — 用于 TerminusDB 的托管免费服务，TerminusDB 是一个用 Prolog 和 Rust 编写的文档和图数据库。免费用于开发，企业部署和支持的付费服务。
  * [YugabyteDB](https://cloud.yugabyte.com) - YugabyteDB 是一个与 PostgreSQL 兼容的分布式 SQL 数据库。云免费层级包括两个 vCPU，4GB RAM 和 10GB 磁盘。
  * [filess.io](https://filess.io) - filess.io 是一个平台，您可以在其中免费创建以下 DBMS 的一个数据库：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [xata.io](https://xata.io) - Xata 是一个具有内置强大搜索和分析功能的无服务器数据库。一个 API，多个类型安全的客户端库，并针对您的开发工作流程进行了优化。永远免费的层级足以满足业余开发人员的需求，其中包含三个 Xata 单元，请参考网站了解单元定义。
  * [8base.com](https://www.8base.com/) - 8base 是一个全栈低代码开发平台，专为 JavaScript 开发人员构建，基于 MySQL 和 GraphQL 以及无服务器后端即服务。它允许您使用 UI 应用程序构建器快速开始构建 Web 应用程序并快速扩展，免费层级包括行：2500，存储：500，无服务器计算：1Gb/h，客户端应用程序用户：5。

**[⬆️ 返回顶部](#table-of-contents)**

## 隧道、WebRTC、Web Socket 服务器和其他路由器

  * [Pinggy](https://pinggy.io) — 只需一个命令即可为 localhost 创建公共 URL，无需下载。支持 HTTPS/TCP/TLS 隧道。免费计划的隧道生命周期为 60 分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio 扩展，可将 IIS Express 暴露到本地网络或通过隧道暴露到公共 URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi 是一项托管 VPN 服务，可让您安全地将类似 LAN 的网络扩展到分布式团队，其免费计划允许最多 5 人的无限网络。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的 Socket 即服务平台，在部署 Web Socket 服务器代码时为您提供 wss:// URL，并允许您监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露到公共 URL。免费托管版本，[开源](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露到公共 URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装，无需注册。免费子域，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过 VPN 启用类似 LAN 的网络将多台计算机连接在一起。无限对等点。（Hamachi 的替代品）
  * [segment.com](https://segment.com/) — 将事件转换并路由到其他第三方服务的中心。每月 100,000 个事件免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) — 零配置 VPN，使用开源 WireGuard 协议。可安装在 MacOS、iOS、Windows、Linux 和 Android 设备上。个人使用的免费计划，可支持 100 台设备和三个用户。
  * [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有的 webhooks 到公共或内部（即 localhost）目的地。还可以通过获取公共 HTTP 端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）将在私有网络中运行的服务器暴露到隧道中。
  * [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控您的 webhooks。每月 100K 请求和 100K 尝试，保留三天。
  * [Xirsys](https://www.xirsys.com/pricing/) — 无限 STUN 使用 + 每月 500MB TURN 带宽，带宽上限，单一地理区域。
  * [ZeroTier](https://www.zerotier.com) — 作为服务的 FOSS 管理虚拟以太网。免费计划中，无限端到端加密网络可支持 25 个客户端。桌面/移动/NA 客户端；用于配置自定义路由规则和批准私有网络上新客户端节点的 Web 界面。
  * [LocalXpose](https://localxpose.io) — 反向代理，使您能够将 localhost 服务器暴露到互联网。免费计划的隧道生命周期为 15 分钟。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布到公共自定义 URL，并使用访问控制对其进行保护。一个集群中免费提供 5 个服务。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费计划包括欧盟服务器、随机子域和单个用户。
  * [Metered](https://www.metered.ca/) — 免费 TURN 服务器，每月包含 50GB TURN 使用量。
  * [btunnel](https://www.btunnel.in/) — 将 localhost 和本地 tcp 服务器暴露到互联网。免费计划包括文件服务器、自定义 http 请求和响应头、基本身份验证保护和 1 小时隧道超时。

**[⬆️ 回到顶部](#table-of-contents)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和 SCRUM 软件，适用于最多 5 名团队成员
  * [asana.com](https://asana.com/) — 与协作者进行私人项目免费
  * [Backlog](https://backlog.com) — 您的团队在一个平台上发布优秀项目所需的一切。免费计划提供 1 个项目，10 个用户和 100MB 的存储空间。
  * [Basecamp](https://basecamp.com/personal) - 待办事项列表、里程碑管理、类似论坛的消息传递、文件共享和时间跟踪。最多 3 个项目，20 个用户和 1GB 的存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 内联网和项目管理工具。免费计划为无限用户提供 5GB。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、UML、网络。免费最多 15 个用户/图表，25 张工作表
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克，可节省冲刺估计时间。免费最多 5 个用户，免费 Jira 集成，无限视频通话，无限团队，无限会话。
  * [clickup.com](https://clickup.com/) — 项目管理。免费，带有云存储的高级版本。提供移动应用程序和 Git 集成。
  * [Clockify](https://clockify.me) - 时间跟踪器和时间表应用程序，可让您跨项目跟踪工作时间。无限用户，永远免费。
  * [Cloudcraft](https://cloudcraft.co/) — 使用 Cloudcraft 可视化设计器在几分钟内设计专业架构图，针对 AWS 进行优化，智能组件还可显示实时数据。免费计划为单个用户提供无限的私有图表。
  * [Codegiant](https://codegiant.io) — 具有存储库托管和 CI/CD 的项目管理。免费计划提供无限的存储库、项目和文档，以及 5 个团队成员。每月 500 分钟的 CI/CD 时间。每月 30000 分钟的无服务器代码运行时间 1GB 存储库存储。
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 的内容协作工具用于帮助团队高效协作和共享知识。免费计划最多可容纳 10 个用户。
  * [contriber.com](https://www.contriber.com/) — 可定制的项目管理平台，免费入门计划，五个工作区
  * [diagrams.net](https://app.diagrams.net/) — 存储在 Google Drive、OneDrive 或 Dropbox 中的本地在线图表。所有功能和存储级别均免费
  * [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理器。免费计划，项目、用户和文件存储不限。
  * [easyretro.io](https://www.easyretro.io/) — 简单直观的冲刺回顾工具。免费计划每月每个板有三个公共板和一个调查。
  * [GForge](https://gforge.com) — 用于复杂项目的项目管理和问题跟踪工具集，具有自设和 SaaS 选项。SaaS 免费计划为前五个用户提供免费，并为开源项目提供免费。
  * [gleek.io](https://www.gleek.io) — 为开发人员提供的免费描述到图表工具。使用您的关键字创建非正式的 UML 类、对象或实体关系图。
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector 输出两个 GraphQL 模式之间的更改列表。每个差异都精确解释并标记为破坏性、非破坏性或危险。
  * [huboard.com](https://huboard.com/) — 针对 GitHub 问题的即时项目管理，开源免费
  * [Hygger](https://hygger.io) — 项目管理平台。免费计划提供无限用户、项目和板，以及 100MB 的存储空间。
  * [Instabug](https://instabug.com) — 适用于移动应用程序的综合错误报告和应用内反馈 SDK。免费计划最多 1 个应用程序和 1 个成员。
  * [WishKit](https://wishkit.io) — 为您的 iOS/macOS 应用程序收集应用内用户反馈，并根据用户投票确定功能优先级。免费计划最多 1 个应用程序。
  * [Ilograph](https://www.ilograph.com/)  — 交互式图表，允许用户从多个角度和详细程度查看其基础设施。图表可以用代码表示。免费层具有最多 3 个查看器的无限私有图表。
  * [Jira](https://www.atlassian.com/software/jira) — 许多企业环境中使用的高级软件开发项目管理工具。免费计划最多可容纳 10 个用户。
  * [kanbanflow.com](https://kanbanflow.com/) — 基于板的项目管理。免费，高级版本具有更多选项
  * [kanbantool.com](https://kanbantool.com/) — 基于看板的项目管理。免费计划有两个板和两个用户，没有附件或文件。
  * [Kitemaker.co](https://kitemaker.co) - 通过产品开发过程的所有阶段进行协作，并跟踪跨 Slack、Discord、Figma 和 Github 的工作。无限用户，无限空间。免费计划最多 250 个工作项。
  * [Kiter.app](https://www.kiter.app/) - 让任何人组织他们的求职并跟踪面试、机会和联系。强大的网络应用程序和 Chrome 扩展。完全免费。
  * [Kumu.io](https://kumu.io/)  — 具有动画、装饰、过滤器、聚类、电子表格导入等功能的关系图。免费层允许无限的公共项目。图形大小不限。学生免费私人项目。如果您不想将文件公开在线（上传、编辑、下载、丢弃），则可以使用沙盒模式。
  * [Linear](https://linear.app/) — 具有简化界面的问题跟踪器。免费适用于无限成员，最多 10MB 文件上传大小，250 个问题（不包括存档）
  * [leiga.com](https://www.leiga.com/) — Leiga 是一款 SaaS 产品，使用 AI 自动管理您的项目，帮助您的团队保持专注并释放巨大潜力，确保您的项目按计划进行。免费最多 10 个用户，20 个自定义字段，2GB 存储空间，AI 视频录制限制为 5 分钟/视频，自动化运行每月 20 个用户。
  * [Lucidchart](https://www.lucidchart.com/) - 具有协作功能的在线图表工具。免费计划，包含三个可编辑文档、100 个专业模板和基本协作功能。
  * [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理。免费最多 3 个项目和无限项目成员。
  * [MeuScrum](https://www.meuscrum.com/en) - 具有看板的免费在线 scrum 工具
  * [nTask](https://www.ntaskmanager.com/) — 项目管理软件，使您的团队能够协作、计划、分析和管理日常任务。基本计划永远免费，具有 100MB 存储空间和 5 个用户/团队。无限工作区、会议、分配、时间表和问题跟踪。
  * [Ora](https://ora.pm/) - 敏捷任务管理和团队协作。免费最多 3 个用户，文件限制为 10MB。
  * [pivotaltracker.com](https://www.pivotaltracker.com/) — 无限公共项目和两个私人项目免费，总共 3 个活动用户（读写）和无限被动用户（只读）。
  * [plan.io](https://plan.io/) — 具有存储库托管和更多选项的项目管理。免费最多 2 个用户，10 个客户和 500MB 存储空间
  * [Plane](https://plane.so/) - Plane 是一个简单、可扩展、开源的项目和产品管理工具。免费最多无限成员，最多 5MB 文件上传大小，1000 个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费在线规划扑克（估计工具）
  * [point.poker](https://www.point.poker/) - 在线规划扑克（基于共识的估计工具）。免费最多无限用户、团队、会话、轮次和投票。您无需注册。
  * [ScrumFast](https://www.scrumfast.com) - 具有非常直观界面的 Scrum 板，最多 5 个用户免费。
  * [Shake](https://www.shakebugs.com/) - 适用于移动应用程序的应用内错误报告和反馈工具。免费计划，每个应用程序每月 10 个错误报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台。最多 10 名用户可永久免费使用。
  * [SpeedBoard](https://speedboard.app) - 用于敏捷和 Scrum 回顾的看板 - 免费。
  * [SuperPM](https://superpm.app/) - 多功能项目管理平台。最多 3 个项目免费，不限用户数，1GB 存储空间。
  * [Tadum](https://tadum.app) - 专为定期会议设计的会议议程和会议记录应用程序，最多 10 人团队免费。
  * [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发人员的项目管理平台，开源免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费计划具有无限的任务、冲刺和工作区，没有用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板和 Scrum 到几乎任何操作流程。无限用户免费，最多 1,000 个数据实体 {[更多详细信息](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划有一个工作区，无限任务和项目；1GB 文件存储；1 周项目历史；每次视频会议最多五名与会者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。最多 5 名用户免费。与 GitHub/Trello/Dropbox/Google Drive 集成
  * [Teaminal](https://www.teaminal.com) - 适用于远程团队的站立会议、回顾会议和冲刺计划工具。最多 15 名用户免费。
  * [teamwork.com](https://teamwork.com/) — 项目管理和团队聊天。五名用户和两个项目免费。提供高级计划。
  * [teleretro.com](https://www.teleretro.com/) — 带有破冰船、gif 和表情符号的简单有趣的回顾工具。免费计划包括三次回顾和无限成员。
  * [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和测试平台。私人使用免费
  * [terrastruct.com](https://terrastruct.com/) — 专门用于软件架构的在线图表制作工具。免费层级每个图表最多 4 层。
  * [todoist.com](https://todoist.com/) — 协作和个人任务管理。免费计划包括：5 个活动项目、项目中的五名用户、文件上传最大 5MB、三个过滤器和一周的活动历史记录。
  * [trello.com](https://trello.com/) — 基于看板的项目管理。无限个人看板，10 个团队看板。
  * [Tweek](https://tweek.so/) — 简单的每周待办事项日历和任务管理。
  * [ubertesters.com](https://ubertesters.com/) — 测试平台、集成和众测人员，2 个项目，五名成员
  * [vabotu](https://vabotu.com/) - 项目管理的协作工具。提供免费和其他计划。自由职业者计划适用于 10 名用户，包括消息传递、任务板、5GB 在线存储、工作区和导出数据。
  * [Wikifactory](https://wikifactory.com/) — 具有项目、VCS 和问题的产品设计服务。免费计划提供无限的项目和协作者以及 3GB 存储空间。
  * [Yodiz](https://www.yodiz.com/) — 敏捷开发和问题跟踪。最多 3 名用户免费，不限项目。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 适用于 FOSS 项目和私人项目的免费托管 YouTrack（InCloud）（三名用户免费）。包括时间跟踪和敏捷看板
  * [zenhub.com](https://www.zenhub.com) — GitHub 内部唯一的项目管理解决方案。公共仓库、OSS 和非营利组织免费
  * [zenkit.com](https://zenkit.com) — 项目管理和协作工具。最多 5 名成员免费，5GB 附件。
  * [Zube](https://zube.io) — 具有免费计划的项目管理，适用于 4 个项目和 4 名用户。提供 GitHub 集成。
  * [Toggl](https://toggl.com/) — 提供两种免费生产力工具。[Toggl Track](https://toggl.com/track/)用于时间管理和跟踪应用程序，免费计划提供无缝时间跟踪和报告，专为自由职业者设计。它具有无限的跟踪记录、项目、客户、标签、报告等。而 [Toggl Plan](https://toggl.com/plan/)用于任务规划，免费计划适用于具有无限任务、里程碑和时间表的独立开发人员。
  * [Sflow](https://sflow.io) — sflow.io 是为敏捷软件开发、营销、销售和客户支持构建的项目管理工具，特别适用于外包和跨组织协作项目。最多 3 个项目和 5 名成员的免费计划。
  * [Pulse.red](https://pulse.red) — 免费简约的项目时间跟踪器和时间表应用程序。

**[⬆️ 返回顶部](#table-of-contents)**

## 存储和媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件共享平台，速度、带宽、文件数量、下载数量等均无限制。主要针对与 Android 开发相关的文件，如 APK 构建、自定义 ROM 和修改等。但似乎也接受任何其他文件。
  * [borgbase.com](https://www.borgbase.com/) — Borg Backup 的简单安全的异地备份托管。10GB 免费备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10GB 免费存储空间。
  * [sync.com](https://www.sync.com/) - 端到端云存储服务。5GB 免费存储空间。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多 10GB 免费存储空间。
  * [sirv.com](https://sirv.com/) — 具有实时图像优化和调整大小功能的智能图像 CDN。免费套餐包括 500MB 存储空间和 2GB 带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全球拥有 1500 多个存在点的全图像优化和 CDN 服务。提供各种图像调整大小、压缩和水印功能。开源插件可用于响应式图像、360 度图像制作和图像编辑。免费月度计划包括 25GB CDN 流量、25GB 缓存存储和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 图像上传、强大的操作、存储和交付网站和应用程序，支持 Ruby、Python、Java、PHP、Objective-C 等更多库。免费套餐包括每月 25 个积分。一个积分等于 1000 次图像转换、1GB 存储空间或 1GB CDN 使用量。
  * [embed.ly](https://embed.ly/) — 提供用于在网页中嵌入媒体、响应式图像缩放和从网页中提取元素的 API。免费套餐每月最多可处理 5000 个 URL，每秒处理 15 个请求。
  * [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付，免费处理 250 个文件、500 次转换和 3GB 带宽。
  * [file.io](https://www.file.io) - 2GB 文件存储空间。文件在一次下载后自动删除。提供与存储交互的 REST API。限制速率为每分钟一个请求。
  * [freetools.site](https://freetools.site/) — 免费的在线工具。转换或编辑文档、图像、音频、视频等。
  * [GoFile.io](https://gofile.io/) - 免费的文件共享和存储平台，可通过基于 Web 的 UI 和 API 使用。文件大小、带宽、下载数量等无限制。但如果文件不活跃（超过十天未下载），则会被删除。
  * [gumlet.com](https://www.gumlet.com/) — 通过 CDN 进行图像和视频托管、处理和流式传输。为视频提供慷慨的免费层级，每月 250GB，为图像提供每月 30GB。
  * [image-charts.com](https://www.image-charts.com/) — 无限生成带水印的图像图表。
  * [Imgbot](https://github.com/marketplace/imgbot) — Imgbot 是一个友好的机器人，可优化您的图像并节省您的时间。优化后的图像意味着更小的文件大小而不牺牲质量。开源免费。
  * [ImgBB](https://imgbb.com/) — ImgBB 是一个无限的图像托管服务。将图像拖放到屏幕上的任何位置。每张图像限制为 32MB。上传图像后接收直接图像链接、BBCode 和 HTML 缩略图。登录查看上传历史记录。
  * [imgen](https://www.jitbit.com/imgen/) - 免费的无限社交封面图像生成 API，无水印。
  * [kraken.io](https://kraken.io/) — 作为服务的网站性能图像优化，免费计划最大文件大小为 1MB。
  * [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费层级允许 100 个键，每个键 1KB，每小时 100 次调用。
  * [npoint.io](https://www.npoint.io/) — 具有协作模式编辑功能的 JSON 存储。
  * [nitropack.io](https://nitropack.io/) - 通过完整的前端优化（缓存、图像和代码优化、CDN）自动加速您网站的速度。每月最多 5000 次页面浏览量免费。
  * [otixo.com](https://www.otixo.com/) — 从一个地方加密、共享、复制和移动您所有的云存储文件。基本计划提供无限文件传输，最大文件大小为 250MB，并允许五个加密文件。
  * [packagecloud.io](https://packagecloud.io/) — 托管的 YUM、APT、RubyGem 和 PyPI 软件包存储库。有限的免费计划和开源计划可通过请求获得。
  * [getpantry.cloud](https://getpantry.cloud/) — 一个简单的 JSON 数据存储 API，非常适合个人项目、黑客马拉松和移动应用程序！
  * [piio.co](https://piio.co/) — 每个网站的响应式图像优化和交付。为开发人员和个人网站提供免费计划。包括免费 CDN、WebP 和开箱即用的懒加载。
  * [Pinata IPFS](https://pinata.cloud) — Pinata 是在 IPFS 上上传和管理文件的最简单方法。我们友好的用户界面和 IPFS API 使 Pinata 成为平台、创作者和收藏家最简单的 IPFS 固定服务。1GB 存储空间免费，以及访问 API。
  * [placekitten.com](https://placekitten.com/) — 一个快速简单的服务，用于获取小猫图片作为占位符。
  * [plot.ly](https://plot.ly/) — 绘制和共享您的数据。免费层级包括无限公共文件和十个私有文件。
  * [podio.com](https://podio.com/) — 您可以与最多五人的团队一起使用 Podio，并试用基本计划的功能，除了用户管理。
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表、图形和二维码。
  * [redbooth.com](https://redbooth.com) — P2P 文件同步，最多两名用户免费。
  * [resmush.it](https://resmush.it) — reSmush.it 是一个提供图像优化的免费 API。reSmush.it 已在最常见的 CMS（如 WordPress、Drupal 或 Magento）上实现。reSmush.it 是使用最广泛的图像优化 API，已处理超过 70 亿张图像，并且仍然免费。
  * [Shotstack](https://shotstack.io) - 大规模生成和编辑视频的 API。每月最多免费渲染 20 分钟视频。
  * [tinypng.com](https://tinypng.com/) — 压缩和调整 PNG 和 JPEG 图像大小的 API，每月提供 500 次免费压缩。
  * [transloadit.com](https://transloadit.com/) — 处理文件上传和视频、音频、图像、文档的编码。通过 GitHub 学生开发者包为开源、慈善机构和学生免费。商业应用程序可免费试用 2GB。
  * [twicpics.com](https://www.twicpics.com) - 作为服务的响应式图像。它提供图像 CDN、媒体处理 API 和前端库，以自动化图像优化。该服务每月最多 3GB 流量免费。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) — Uploadcare 提供基于最先进算法的终极工具包的媒体管道。所有功能对开发人员完全免费：文件上传 API 和 UI、图像 CDN 和原始服务、自适应交付和智能压缩。免费层级包括 3000 次上传、3GB 流量和 3GB 存储空间。
  * [imagekit.io](https://imagekit.io) — 具有自动优化、实时转换和存储功能的图像 CDN，您可以在几分钟内与现有设置集成。免费计划每月包括最多 20GB 带宽。
  * [internxt.com](https://internxt.com) — Internxt Drive 是一种基于绝对隐私和毫不妥协的安全性的零知识文件存储服务。注册并永远免费获得 10GB！
  * [degoo.com](https://degoo.com/) — 基于 AI 的云存储，最多 20GB 免费，三个设备，5GB 推荐奖金（90 天账户不活跃）。
  * [MConverter.eu](https://mconverter.eu/) — 批量转换文件。支持许多文件格式，包括新格式，如[AVIF](https://mconverter.eu/convert/to/avif/)。从视频中提取所有图像帧。每天最多免费处理十个 100MB 文件，分两批处理。
  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款易于使用的全球图像 CDN。设置时间不到 60 秒。支持 AVIF 和 JPEGXL，有 WordPress-、Magento-、React-、Vue- 插件等。在此处[claim your free developer account](https://imageengine.io/developer-program/)领取您的免费开发者账户。
  * [DocsParse](https://docsparse.com/) – DocsParse 由 GPT 驱动，可将 PDF、图像等处理为 JSON、CSV、EXCEL 格式的结构化数据。每月免费提供 30 个积分。

**[⬆️ Back to Top](#table-of-contents)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 一个精选的免费库存图像、音频和视频列表。
  * [Float UI](https://floatui.com/) - 免费的 Web 开发工具，可快速创建具有时尚设计的现代响应式网站，即使对于非设计师也适用。
  * [Ant Design 登录页面](https://landing.ant.design/) - Ant Design 登录页面提供了一个由 Ant Motion 的运动组件构建的模板。它具有丰富的主页模板，可下载模板代码包，并可快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) - Backlight 是一个完整的编码平台，开发人员和设计师可以在此平台上进行协作，团队可以构建、记录、发布、扩展和维护设计系统。免费计划允许最多 3 个编辑器在一个设计系统上工作，并有无限的查看者。
  * [BoxySVG](https://boxy-svg.com/app) - 一个免费的可安装 Web 应用程序，用于绘制 SVG 并以 SVG、PNG、jpeg 和其他格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 免费的在线工具，用于创建社交媒体轮播。
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，如 SVG，适用于 React、Vue 和 Svelte。
  * [clevebrush.com](https://www.cleverbrush.com/) - 免费的图形设计/照片拼贴应用程序。他们还提供付费集成作为组件。
  * [cloudconvert.com](https://cloudconvert.com/) - 将任何内容转换为任何内容。支持 208 种格式，包括视频和 gif。
  * [CodeMyUI](https://codemyui.com) - 精心挑选的 Web 设计和 UI 灵感集合，带有代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建调色板或从顶级调色板中获取灵感。
  * [coolors](https://coolors.co/) - 调色板生成器。免费。
  * [Branition](https://branition.com/colors) - 为品牌精心挑选的颜色调色板。
  * [css-gradient.com](https://www.css-gradient.com/) - 快速生成自定义跨浏览器 CSS 渐变的免费工具。RGB 和 HEX 格式。
  * [easyvectors.com](https://easyvectors.com/) - EasyVectors.com 是一个免费的 SVG 矢量艺术库存。绝对免费下载最佳矢量图形。
  * [figma.com](https://www.figma.com) - 在线协作设计工具，适用于团队；免费层级包括无限文件和查看者，最多 2 个编辑器和 3 个项目。
  * [framer.com](https://www.framer.com/) - Framer 帮助您迭代和动画化您下一个应用程序、网站或产品的界面想法 - 从强大的布局开始。对于任何验证 Framer 作为专业原型工具的人：无限查看者，最多 2 个编辑器，最多 3 个项目。
  * [freeforcommercialuse.net](https://freeforcommercialuse.net/) - FFCU 无忧模型/财产发布库存照片
  * [Gradientos](https://www.gradientos.app) - 使选择渐变快速简单。
  * [Icon Horse](https://icon.horse) - 从我们的简单 API 中获取任何网站的最高分辨率收藏夹图标。
  * [Iconoir](https://iconoir.com) - 一个开源图标库，包含数千个图标，支持 React、React Native、Flutter、Vue、Figma 和 Framer。
  * [Icons8](https://icons8.com) - 图标、插图、照片、音乐和设计工具。免费计划提供有限的格式，分辨率较低。使用我们的资产时链接到 Icons8。
  * [landen.co](https://www.landen.co) - 为您的创业公司生成、编辑和发布美丽的网站和登录页面。无需代码。免费层级允许您拥有一个完全可定制并在网络上发布的网站。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一个原型设计和设计工具。 - 它完全免费，也是开源的。
  * [lensdump.com](https://lensdump.com/) - 免费云图像托管。
  * [Lorem Picsum](https://picsum.photos/) - 一个免费的工具，易于使用，时尚的占位符。在我们的 URL 之后，添加您想要的图像大小（宽度和高度），您将获得一个随机图像。
  * [LottieFiles](https://lottiefiles.com/) - 世界上最大的在线平台，为设计师、开发人员等提供世界上最小的动画格式。访问适用于 Android、iOS 和 Web 的 Lottie 动画工具和插件。
  * [MagicPattern](https://www.magicpattern.design/tools) - 一系列 CSS 和 SVG 背景生成器和工具，用于渐变、图案和斑点。
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型设计和协作，免费计划限制为一个用户和一个项目。
  * [Mindmup.com](https://www.mindmup.com/) - 免费的无限思维导图，并将它们存储在云中。您的思维导图随处可用，即时，从任何设备。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一个强大的设计协作和交接工具。免费计划包括三个用户和五个项目，所有功能可用。
  * [mockupmark.com](https://mockupmark.com/create/free) - 创建逼真的 T 恤和服装模型，用于社交媒体和电子商务，40 个免费模型。
  * [Mossaik](https://mossaik.app) - 带有不同工具（如波浪、博客和图案）的免费 SVG 图像生成器。
  * [movingpencils.com](https://movingpencils.com) - 快速、基于浏览器的矢量编辑器。完全免费。
  * [Octopus.do](https://octopus.do) - 可视化站点地图构建器。实时构建您的网站结构，并快速与您的团队或客户共享以进行协作。
  * [Pencil](https://github.com/evolus/pencil) - 使用 Electron 的开源设计工具。
  * [Penpot](https://penpot.app) - 基于 Web 的开源设计和原型工具。支持 SVG。完全免费。
  * [pexels.com](https://www.pexels.com/) - 免费的商业用途库存照片。有一个免费的 API，允许您按关键字搜索照片。
  * [photopea.com](https://www.photopea.com) - 一个免费的、高级的在线设计编辑器，具有 Adobe Photoshop UI，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch App）。
  * [pixlr.com](https://pixlr.com/) - 免费的在线浏览器编辑器，与商业编辑器相当。
  * [Plasmic](https://www.plasmic.app/) - 一个快速、易于使用、强大的 Web 设计工具和页面构建器，可集成到您的代码库中。构建响应式页面或复杂组件；可选地扩展代码；并发布到生产站点和应用程序。
  * [Pravatar](https://pravatar.cc/) - 生成一个随机占位符假头像，其 URL 可以直接在您的 Web/应用程序中热链接。
  * [Proto.io](https://www.proto.io) - 创建无需编码的完全交互式 UI 原型。免费试用结束后可使用免费层级。免费层级包括一个用户、一个项目、五个原型、100MB 的在线存储和 proto.io 应用程序的预览。
  * [resizeappicon.com](https://resizeappicon.com/) - 一个简单的服务，用于调整和管理您的应用程序图标。
  * [Rive](https://rive.app) - 创建并将美丽的动画发布到任何平台。个人免费永远。该服务是一个编辑器，还在其服务器上托管所有图形。他们还为许多平台提供运行时，以运行使用 Rive 制作的表示。
  * [storyset.com](https://storyset.com/) - 使用此工具为您的项目创建令人难以置信的免费自定义插图。
  * [smartmockups.com](https://smartmockups.com/) - 创建产品模型，200 个免费模型。
  * [tabler-icons.io](https://tabler-icons.io/) - 超过 1500 个免费复制和粘贴 SVG 可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 从名称生成带有首字母的头像。URL 可以直接在您的 Web/应用程序中热链接。通过 URL 支持配置参数。
  * [unDraw](https://undraw.co/) - 不断更新的美丽 SVG 图像集合，您可以完全免费使用，无需归因。
  * [unsplash.com](https://unsplash.com/) - 免费的商业和非商业用途库存照片（do-whatever-you-want 许可证）。
  * [vectr.com](https://vectr.com/) - 适用于 Web + 桌面的免费设计应用程序。
  * [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，免费计划可进行三次最多 5 步的引导。
  * [Webflow](https://webflow.com) - 所见即所得的网站构建器，带有动画和网站托管。两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 用于基于 tailwindcss 设计的所见即所得网站构建器。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便签和思维导图。可创建多达 4 个免费看板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。一个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人入胜、独特的图形和图像。
  * [Responsively App](https://responsively.app) - 免费的开发工具，用于更快、更精确的响应式 Web 应用程序开发。
  * [SceneLab](https://scenelab.io) - 在线模型图形编辑器，拥有不断扩展的免费设计模板集合
  * [xLayers](https://xlayers.dev) - 预览并将 Sketch 设计文件转换为 Angular、React、Vue、LitElement、Stencil、Xamarin 等（在 https://github.com/xlayers/xlayers 上免费开源）
  * [Grapedrop](https://grapedrop.com/) — 基于 GrapesJS 框架的响应式、强大、SEO 优化的网页构建器。前五个页面免费，无限制的自定义域名，所有功能和简单的使用。
  * [Mastershot](https://mastershot.app) - 完全免费的基于浏览器的视频编辑器。无水印，最高可达 1080p 导出选项。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松的着陆页构建器，带有托管。一个网站免费。
  * [react-favicon.com](https://react-favicon.com/) - 使用 React 和 JSX 以及任何字体和图标库为您的网站生成 Favicon。
  * [SVGmix.com](https://www.svgmix.com/) - 30 万+免费 SVG 图标、集合和品牌标志的大型存储库。它在浏览器中有一个简单的矢量编辑程序，用于快速文件编辑。
  * [svgrepo.com](https://www.svgrepo.com/) - 使用各种矢量库探索、搜索和找到最适合您项目的图标或矢量。下载免费的 SVG 矢量用于商业用途。
  * [haikei.app](https://www.haikei.app/) - Haikei 是一个网络应用程序，用于生成独特的 SVG 形状、背景和图案 - 可与您的设计工具和工作流程一起使用。
  * [Canva](https://canva.com) - 免费的在线设计工具，用于创建视觉内容。
  * [Superdesigner](https://superdesigner.co) - 免费设计工具的集合，只需点击几下即可创建独特的背景、图案、形状、图像等。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ 是协作前端平台，可立即创建和发布无头静态网站。三个免费项目，无限制的协作者，和免费的代码导出。
  * [vector.express](https://vector.express) - 快速轻松地将您的 AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS 和 SVG 矢量转换。
  * [Vertopal](https://www.vertopal.com) - Vertopal 是一个免费的在线平台，用于将文件转换为各种格式。包括开发人员转换器，如 JPG 到 SVG、GIF 到 APNG、PNG 到 WEBP、JSON 到 XML 等。
  * [okso.app](https://okso.app) - 简约的在线绘图应用程序。允许创建快速草图和视觉笔记。将草图导出为 PNG、JPG、SVG 和 WEBP。也可作为 PWA 安装。每个人都可以免费使用（无需注册）。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费 SVG 切割文件。
  * [Lucide](https://lucide.dev) - 免费可定制和一致的 SVG 图标工具包。
  * [Logo.dev](https://www.logo.dev) - 拥有 4400 万个品牌的公司标志 API，就像调用 URL 一样简单。前 10,000 次 API 调用是免费的。
  * [MDBootstrap](https://mdbootstrap.com/) - 免费用于个人和商业用途的 Bootstrap、Angular、React 和 Vue UI 工具包，拥有超过 700 个组件，令人惊叹的模板，1 分钟安装，广泛的教程和庞大的社区。
  * [TW Elements](https://tw-elements.com/) - 用 Tailwind CSS 重新创建的免费 Bootstrap 组件，但具有更好的设计和更多功能。
  * [DaisyUI](https://daisyui.com/) -- 免费。“使用 Tailwind CSS 但编写更少的类名”提供了像按钮这样的组件。
  * [Scrollbar.app](https://scrollbar.app) -- 简单的免费网络应用程序，用于为网络设计自定义滚动条。
  * [css.glass](https://css.glass/) -- 免费网络应用程序，用于使用 CSS 创建玻璃形态设计。
  * [hypercolor.dev](https://hypercolor.dev/) -- 精选的 Tailwind CSS 颜色渐变集合，还提供了各种生成器来创建您自己的。
  * [iconify.design](https://icon-sets.iconify.design/) -- 超过 100 个图标包的集合，具有统一的界面。允许您跨包搜索图标并将单个图标导出为 SVGs 或用于流行的 Web 框架。
  * [NextUI](https://nextui.org/) -- 免费。美丽、快速、现代的 React 和 Next.js UI 库。
  * [Glyphs](https://glyphs.fyi/) -- 免费，网络上最强大的图标，完全可编辑和真正开源的设计系统。
  * [ShadcnUI](https://ui.shadcn.com/) -- 设计精美的组件，您可以复制并粘贴到您的应用程序中。可访问。可定制。开源。
  * [HyperUI](https://www.hyperui.dev/) -- 免费开源 Tailwind CSS 组件。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成一整年的独特图标，完全免费
  * [Image BG Blurer](https://imagebgblurer.com/) -- 使用图像源作为背景模糊，为图像生成模糊的背景框架，适用于 Notion、Trello、Jira 等更多工具
  * [Webstudio](https://webstudio.is/) -- Webflow 的开源替代品。免费计划在其域名上提供无限网站。五个带有自定义域名的网站。每月 10,000 次页面浏览。2GB 资产存储。
  * [Nappy](https://nappy.co/) -- 免费的美丽的黑人和棕色人种照片。用于商业和个人用途。

**[⬆️ 返回顶部](#table-of-contents)**
**设计灵感**

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有设计最佳的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可通过类别筛选 UI/UX 项目。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不是来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳的设计灵感着陆页。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI 工具包/网页截图] Lapa Ninja 是一个画廊，展示了来自网络的最佳 6025 个着陆页示例、免费设计师书籍和免费 UI 工具包。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包括桌面、平板电脑和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动截图] 我们的图书馆拥有 50,000 多个完全可搜索的移动应用截图，可节省数小时的 UI 和 UX 研究时间。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示了最好的 UI UX 模式（iOS 和 Android），供设计师、开发人员和产品制造商参考。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频和截图] 许多移动和网络应用程序的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网络和移动应用 UI 设计趋势。可按模式和应用程序进行筛选。
  * [scrnshts](https://scrnshts.club/) - [移动截图] 精选的最佳应用商店设计截图集合。
  * [UI Garage](https://uigarage.net/) - [移动/网页截图] 设计师和开发人员的日常 UI 灵感和模式，以找到项目的灵感、工具和最佳资源。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网络应用程序的标记和可搜索设计参考集合。

**[⬆️ 返回顶部](#table-of-contents)**

**地图上的数据可视化**

  * [IP Geolocation](https://ipgeolocation.io/) - 提供免费的 DEVELOPER 计划，每月有 30K 请求。
  * [carto.com](https://carto.com/) - 从您和公共数据创建地图和地理空间 API。
  * [Clockwork Micro](https://clockworkmicro.com/) - 像钟表一样工作的地图工具。每月五千次免费查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) - 用于地图、地理空间数据存储、分析、地理编码、路由等的 API 和 SDK，涵盖网络、桌面和移动。每月 200 万张免费基础地图瓦片、20,000 个非存储地理编码、20,000 条简单路线、5,000 次行车时间计算和 5GB 免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 来自 Places API 和 Pilgrim SDK 的位置发现、场地搜索和上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和光栅地图瓦片、地理编码、地点、路由、等值线 API。每天三千次免费请求。
  * [geocod.io](https://www.geocod.io/) - 通过 API 或 CSV 上传进行地理编码。每天两千五百次免费查询。
  * [geocodify.com](https://geocodify.com/) - 通过 API 或 CSV 上传进行地理编码和地理解析。每月 10k 次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高度可用的 REST/JSON/JSONP IP 地理位置查找 API。
  * [giscloud.com](https://www.giscloud.com/) - 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 为路由、路线优化、距离矩阵、地理编码和地图匹配提供免费开发者套餐。
  * [here](https://developer.here.com/) - 用于地图和位置感知应用程序的 API 和 SDK。每月 250k 次免费交易。
  * [locationiq.com](https://locationiq.com/) - 地理编码、地图和路由 API。每天五千次免费请求。
  * [mapbox.com](https://www.mapbox.com/) - 用于显示地图数据的地图、地理空间服务和 SDK。
  * [maptiler.com](https://www.maptiler.com/cloud/) - 用于地图可视化的矢量地图、地图服务和 SDK。每周更新的免费矢量瓦片和四种地图样式。
  * [nominatim.org](https://nominatim.org/) - OpenStreetMap 的免费地理编码服务，提供全球地址搜索功能和反向地理编码功能。
  * [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路由、路线优化、距离矩阵）、地图 SDK（矢量、静态、移动 SDK）。[每个服务有指定的免费配额](https://nextbillion.ai/pricing)。
  * [opencagedata.com](https://opencagedata.com) - 聚合 OpenStreetMap 和其他开放地理源的地理编码 API。每天两千五百次免费查询。
  * [osmnames](https://osmnames.org/) - 地理编码，搜索结果按相关维基百科页面的受欢迎程度排名。
  * [positionstack](https://positionstack.com/) - 全球地点和坐标的免费地理编码。个人使用每月 25,000 次请求。
  * [stadiamaps.com](https://stadiamaps.com/) - 地图瓦片、路由、导航和其他地理空间 API。非商业用途和测试每天两千五百次免费地图视图和 API 请求。
  * [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片和瓦片托管。
  * [ipstack](https://ipstack.com/) - 通过 IP 地址定位和识别网站访客
  * [Geokeo api](https://geokeo.com) - 具有语言校正等功能的地理编码 API。全球覆盖。每天 2,500 次免费查询

**[⬆️ 返回顶部](#table-of-contents)**

**包构建系统**

  * [build.opensuse.org](https://build.opensuse.org/) - 适用于多个发行版（SUSE、EL、Fedora、Debian 等）的包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) - 基于 Mock 的 Fedora 和 EL 的 RPM 构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) - Ubuntu 和 Debian 构建服务。

**[⬆️ 返回顶部](#table-of-contents)**

## IDE 和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线 PHP 外壳和代码片段共享网站，可在 300 多个 PHP 版本中运行您的代码
  * [Android Studio](https://d.android.com/studio) - Android Studio 为在各种类型的 Android 设备上构建应用提供了最快的工具。开源 IDE 对每个人都是免费的，是最好的 Android 应用开发工具。适用于 Windows、Mac、Linux，甚至 ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) - 一个开源的 IDE，用于在 Android 设备上开发真正的、基于 Gradle 的 Android 应用程序。
  * [Apache Netbeans](https://netbeans.apache.org/) - 开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/) - 具有即时 API 模拟和生成文档的协作设计 API（免费用于无限的 API 蓝图和无限的用户，带有一个管理员帐户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit 是一款流行且可扩展的 macOS 编辑器。免费模式提供了[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)和升级到高级功能的路径。
  * [Binder](https://mybinder.org/) - 将 Git 存储库转换为一组交互式笔记本。它是一项免费的公共服务。
  * [BlueJ](https://bluej.org) - 一款免费的 Java 开发环境，专为初学者设计，全球数百万人使用。由 Oracle 提供支持，简单的 GUI 帮助初学者。
  * [Bootify.io](https://bootify.io/) - 具有自定义数据库和 REST API 的 Spring Boot 应用程序生成器。
  * [Brackets](http://brackets.io/) - Brackets 是一个专门为 Web 开发设计的开源文本编辑器。它轻量级、易于使用且高度可定制。
  * [cacher.io](https://www.cacher.io) - 带有标签和对 100 多种编程语言支持的代码片段管理器。
  * [Code::Blocks](https://codeblocks.org) - 免费的 Fortran 和 C/C++ IDE。开源且在 Windows、macOS 和 Linux 上运行。
  * [Cody](https://sourcegraph.com/cody) - 免费的 AI 编码助手，可以编写（代码块、自动完成、单元测试）、理解（对整个代码库的知识）、修复和查找您的代码。适用于 VS Code、JetBrains 和在线。
  * [codiga.io](https://codiga.io/) - 编码助手，可让您直接在 IDE 中搜索、定义和重用代码片段。对个人和小型组织免费。
  * [codesnip.com.br](https://codesnip.com.br) - 具有类别、搜索和标签的简单代码片段管理器。免费且无限制。
  * [cocalc.com](https://cocalc.com/) - （以前是 cloud.sagemath.com 上的 SageMathCloud）- 云中的协作计算。浏览器访问带有内置协作和大量免费数学、科学、数据科学软件的完整 Ubuntu，预装：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
  * [code.cs50.io](https://code.cs50.io/) - CS50 的 Visual Studio Code 是 code.cs50.io 上的一个 Web 应用程序，适用于学生和教师的 GitHub Codespaces。
  * [codepen.io](https://codepen.io/) - CodePen 是 Web 前端的游乐场。
  * [codesandbox.io](https://codesandbox.io/) - 用于 React、Vue、Angular、Preact 等的在线游乐场。
  * [Components.studio](https://webcomponents.dev/) - 独立的代码组件，在故事中可视化它们，测试它们，并在 npm 上发布它们。
  * [Eclipse Che](https://www.eclipse.org/che/) - 具有多语言支持的基于 Web 和 Kubernetes-Native 的开发团队 IDE。开源且社区驱动。Red Hat 托管的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)上获得。
  * [fakejson.com](https://fakejson.com/) - FakeJSON 帮助您使用其 API 快速生成假数据。发出一个 API 请求，描述您想要什么以及您想要如何获得它。API 以 JSON 格式返回所有内容。加快创意的上市进程，假到真。
  * [GitPod](https://www.gitpod.io) - GitHub 项目的即时、即用型开发环境。免费层包括每月 50 小时。
  * [ide.goorm.io](https://ide.goorm.io) goormIDE 是云端完整的 IDE。多语言支持，通过功能齐全的基于 Web 的终端、端口转发、自定义 URL、实时协作和聊天、共享链接、Git/Subversion 支持的基于 Linux 的容器。还有更多功能（免费层包括每个容器 1GB RAM 和 10GB 存储空间，5 个容器插槽）。
  * [JDoodle](https://www.jdoodle.com) - 支持 60 多种编程语言的在线编译器和编辑器，免费计划每天最多可编译 200 个信用点的 REST API 代码。
  * [jetbrains.com](https://jetbrains.com/products.html) - 生产力工具、IDE 和部署工具（又名[IntelliJ IDEA](https://www.jetbrains.com/idea/)，[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源和用户组的免费许可证。
  * [jsbin.com](https://jsbin.com) - JS Bin 是另一个前端 Web（HTML、CSS 和 JavaScript）的游乐场和代码共享站点。它还支持 Markdown、Jade 和 Sass。
  * [jsfiddle.net](https://jsfiddle.net/) - JS Fiddle 是一个前端 Web 的游乐场和代码共享站点，支持协作。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 一些返回 JSON 格式的一些假数据的 REST API 端点。如果您想在本地运行服务器，源代码也可用。
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarus 是一个与 Delphi 兼容的跨平台 IDE，用于快速应用程序开发。
  * [MarsCode](https://www.marscode.com/) - 一个免费的基于云的 AI 驱动的 IDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成假 JSON 数据的微小 API 模拟微服务。
  * [mockable.io](https://www.mockable.io/) - Mockable 是一个简单的可配置服务，用于模拟 RESTful API 或 SOAP Web 服务。这个在线服务允许您快速定义 REST API 或 SOAP 端点，并让它们返回 JSON 或 XML 数据。
  * [mockaroo](https://mockaroo.com/) - Mockaroo 允许您以 CSV、JSON、SQL 和 Excel 格式生成逼真的测试数据。您还可以为后端 API 创建模拟。
  * [Mocklets](https://mocklets.com) - 一个基于 HTTP 的模拟 API 模拟器，有助于模拟 API 以实现更快的并行开发和更全面的测试，具有终身免费层。
  * [Paiza](https://paiza.cloud/en/) - 在浏览器中开发 Web 应用程序，无需设置任何内容。免费计划提供一个服务器，具有 24 小时的生命周期和每天 4 小时的运行时间，具有 2 个 CPU 核心、2GB RAM 和 1GB 存储空间。
  * [Prepros](https://prepros.io/) - Prepros 可以开箱即用地编译 Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript 和 TypeScript，重新加载您的浏览器，并使开发和测试您的网站变得容易，因此您可以专注于使它们完美。您还可以通过点击几下添加自己的工具。
  * [Replit](https://replit.com/) - 用于各种编程语言的云编码环境。
  * [SoloLearn](https://code.sololearn.com) - 一个适合运行代码片段的云编程游乐场。支持各种编程语言。运行代码不需要注册，但在其平台上保存代码时需要。还为初学者和中级程序员提供免费课程。
  * [stackblitz.com](https://stackblitz.com/) - 在线/云代码 IDE，用于创建、编辑和部署全栈应用程序。支持任何流行的基于 NodeJs 的前端和后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行的、多功能的、高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义和优化的代码编辑器，用于构建和调试现代 Web 和云应用程序。由 Microsoft 开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能齐全的 IDE，拥有数千个扩展，跨平台应用开发（可下载适用于 iOS 和 Android 的 Microsoft 扩展），桌面、Web 和云开发，多语言支持（C#、C++、JavaScript、Python、PHP 等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动，无遥测/跟踪，且自由授权的 Microsoft 编辑器 VSCode 的二进制分发版。
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件对您的编码活动进行量化的自我指标，有限的免费计划。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源的跨平台终端，用于无缝工作流程。内联渲染任何内容。保存会话和历史记录。由开放的网络标准提供支持。MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内的 IDE，可使用 58 个可用模板单独编写 Web 组件，支持故事和测试。
  * [PHPSandbox](https://phpsandbox.io/) — PHP 的在线开发环境。
  * [WebDB](https://webdb.app) - 免费高效的数据库 IDE。具有服务器发现、ERD、数据生成器、AI、NoSQL 结构管理器、数据库版本控制等功能。

**[⬆️ 返回顶部](#table-of-contents)**

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，可帮助您将客户数据从数据仓库同步到您的 CRM、营销和支持工具。免费层级提供一个目的地用于同步数据。
  * [Avo](https://avo.app/) - 简化的分析发布工作流程。单一事实来源跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观测性，可在发布前捕获所有数据问题。免费提供两名工作区成员和 1 小时数据可观测性回溯。
  * [Branch](https://branch.io) - 移动分析平台。免费层级提供多达 10K 移动应用用户的深度链接和其他服务。
  * [Cauldron](https://cauldron.io) - 分析开源解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（Git、Github 和 Gitlab）。免费层级包括无限数量的报告。
  * [Census](https://www.getcensus.com/) - 反向 ETL 和运营分析平台。从您的数据仓库同步 10 个字段到 60 多个 SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) - 网站分析平台。免费计划适用于一个网站，提供 3000 次视图分析。
  * [Databox](https://databox.com) - 通过结合其他分析和 BI 平台实现业务洞察和分析。免费计划提供 3 名用户、仪表板和数据源。1100 万历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) - 每月为 1 个网站提供 2000 次页面浏览量
  * [amplitude.com](https://amplitude.com/) - 每月 100 万次事件，最多支持 2 个应用
  * [GoatCounter](https://www.goatcounter.com/) - GoatCounter 是一个开源的网络分析平台，可作为托管服务（非商业用途免费）或自托管应用提供。它旨在提供易于使用和有意义的隐私友好型网络分析，作为 Google Analytics 或 Matomo 的替代品。免费层级用于非商业用途，包括无限数量的网站、六个月的数据保留和 100k 页面浏览量/月。
  * [Google Analytics](https://analytics.google.com/) - Google Analytics
  * [MetricsWave](https://metricswave.com) - 面向开发人员的隐私友好型 Google Analytics 替代品。免费计划允许每月 20k 页面浏览量，无需信用卡。
  * [Expensify](https://www.expensify.com/) - 费用报告，免费的个人报告审批工作流程
  * [getinsights.io](https://getinsights.io) - 专注于隐私，无 cookie 分析，每月最多 3k 事件免费。
  * [heap.io](https://heap.io) - 自动捕获 iOS 或网络应用中的每个用户操作。每月最多 10K 次会话免费。
  * [Hotjar](https://hotjar.com) - 网站分析和报告。免费计划允许每天 2000 次页面浏览量。每天 100 次快照（最大容量：300）。可以存储三个快照热图 365 天。无限团队成员。还提供应用内和独立调查、带有截图的反馈小部件。免费层级允许创建 3 个调查和 3 个反馈小部件，并每月收集 20 个响应。
  * [Keen](https://keen.io/) - 用于数据收集、分析和可视化的自定义分析。每月 1000 次事件免费
  * [Yandex.Datalens](https://datalens.yandex.com/) - Yandex Cloud 数据可视化和分析服务。该服务免费提供。对用户数量和请求数量没有限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
  * [Mixpanel](https://mixpanel.com/) - 每月跟踪 100,000 名用户，无限数据历史和座位，美国或欧盟数据驻留
  * [Moesif](https://www.moesif.com) - REST 和 GraphQL 的 API 分析。（每月最多 500,000 次 API 调用免费）
  * [optimizely.com](https://www.optimizely.com) - A/B 测试解决方案，免费入门计划，一个网站，1 个 iOS 和 1 个 Android 应用
  * [Microsoft PowerBI](https://powerbi.com) - Microsoft 的业务洞察和分析。免费计划提供有限的使用，拥有 100 万用户许可证。
  * [quantcast.com](https://www.quantcast.com/products/measure-audience-insights/) - 无限免费分析
  * [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据数据库、S3 和 API。即时导入、分析、图形化和共享数百万行。三个免费（永远）工作簿。
  * [sematext.com](https://sematext.com/cloud/) - 每月最多 50K 次操作免费，1 天数据保留，无限仪表板、用户等。
  * [Similar Web](https://similarweb.com) - 网络和移动应用的分析。免费计划提供每个指标五个结果，一个月的移动应用数据和三个月的网站数据。
  * [StatCounter](https://statcounter.com/) - 网站查看器分析。免费计划用于分析最近 500 名访客。
  * [Statsig](https://statsig.com) - 跨越分析、功能标记和 A/B 测试的一体化平台。每月最多 100 万计量事件免费。
  * [Tableau Developer Program](https://www.tableau.com/developer) - 创新、创建并使 Tableau 完美适用于您的组织。免费开发者计划为 Tableau Online 提供个人开发沙箱许可证。版本是最新的预发布版本，因此数据开发人员可以测试这个出色平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) - 在真实人员上测试设计和模型，并跟踪访客。免费提供一名用户，无限制测试
  * [woopra.com](https://www.woopra.com/) - 免费用户分析平台，提供 500K 次操作、90 天数据保留、30 多个一键式集成。
  * [counter.dev](https://counter.dev) - 简单的网络分析，因此隐私友好。免费或通过捐赠支付您想要的费用。
  * [PostHog](https://posthog.com) - 每月最多 100 万跟踪事件的完整产品分析套件免费。还提供无限制的应用内调查，每月 250 个响应。
  * [Uptrace](https://uptrace.dev) - 分布式跟踪工具，帮助开发人员查明故障并找到性能瓶颈。有免费计划，为开源项目提供免费个人订阅，并具有开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity 是一个免费、易于使用的工具，可捕获真实人员如何使用您的网站。
  * [Beampipe.io](https://beampipe.io) - Beampipe 是简单、隐私关注的网络分析。每月最多 5 个域名和 10k 页面浏览量免费。
  * [Aptabase](https://aptabase.com) - 开源、隐私友好且简单的移动和桌面应用分析。适用于 Swift、Kotlin、React Native、Flutter、Electron 等的 SDK。每月最多 20,000 次事件免费。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，并促进无缝协作。将其部署到具有真实流量的生产环境中，或在不编写代码的情况下将分析覆盖范围添加到回归测试中。
  * [LogSpot](https://logspot.io) - 完整的统一网络和产品分析平台，包括可嵌入的分析小部件和自动化机器人（slack、telegram 和 webhooks）。免费计划包括每月 10,000 次事件。
  * [Umami](https://umami.is/) - 简单、快速、隐私关注的 Google Analytics 开源替代品。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私关注的 Google Analytics 替代品。无限页面浏览量、无限访客、无限页面热图和目标跟踪。每月最多 3 个域名和每个域名 600 次会话回放免费。
  * [AppFit](https://appfit.io) - AppFit 是一个全面的分析和产品管理工具，旨在促进分析和产品更新的无缝跨平台管理。免费计划包括每月 10,000 次事件、产品日志和每周洞察。
  * [Seline](https://seline.so) - Seline 是一款简单且私密的网站和产品分析工具。无 Cookie，轻量级，独立。免费计划每月包含 3,000 个事件，并提供对我们所有功能的访问，例如仪表板、用户旅程、漏斗等。

**[⬆️ 返回顶部](#table-of-contents)**

## 访客会话记录

  * [Reactflow.com](https://www.reactflow.com/) — 每个站点：每天 1000 次页面浏览，三个热图，三个小部件，免费的错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 具有开发工具的开源会话重放，用于错误重现，实时会话用于实时支持，以及产品分析套件。每月 1000 次会话，可访问所有功能，保留 7 天。
  * [LogRocket.com](https://www.logrocket.com) - 每月 1000 次会话，保留 30 天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月 1000 次会话，数据保留一个月，三个用户席位。更多信息[在此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个站点：每月 1050 次页面浏览，无限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 一个网站每月免费 2500 次会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，“无流量限制”，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 一个网站每月免费 500 次会话
  * [mousestats.com](https://www.mousestats.com/) — 一个网站每月免费 100 次会话
  * [smartlook.com](https://www.smartlook.com/) — 网络和移动应用的免费套餐（每月 1500 次会话），三个热图，一个漏斗，1 个月的数据历史
  * [usersurge.com](https://www.usersurge.com/) — 个人每月 250K 次会话。
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月最多 5000 次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小项目免费无限时间

**[⬆️ 返回顶部](#table-of-contents)**

## 国际移动号码验证 API 和 SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查找 JSON API。每月 100 次 API 请求
  * [veriphone](https://veriphone.io/) — 免费、快速、可靠的 JSON API 进行全球电话号码验证。每月 1000 次请求

**[⬆️ 返回顶部](#table-of-contents)**

## 支付和计费集成

  * [Qonversion](http://qonversion.io/) - 一体化跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和货币化。兼容 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和网络。每月跟踪收入高达 10,000 美元免费。
  * [Glassfy](https://glassfy.io/) - 应用内订阅基础设施、实时订阅事件和开箱即用的货币化工具，适用于 iOS、Android、Stripe 和 Paddle。每月收入高达 10,000 美元免费。
  * [Adapty.io](https://adapty.io/) - 具有开源 SDK 的一站式解决方案，用于将移动应用内订阅集成到 iOS、Android、React Native、Flutter、Unity 或网络应用。每月收入高达 10,000 美元免费。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密和法定货币汇率。免费层每月提供 10,000 个调用信用。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。免费的 DEVELOPER 计划可用，每月 1000 次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密汇率和历史数据。演示 API 具有稳定的每分钟 30 次调用限制和每月 10,000 次调用上限。
  * [CurrencyApi](https://currencyapi.net/) — 实物和加密货币的实时货币汇率，以 JSON 和 XML 形式提供。免费层每月提供 1,250 次 API 请求。
  * [currencylayer](https://currencylayer.com/) — 为您的业务提供可靠的汇率和货币转换，每月 100 次 API 请求免费。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易于使用的货币转换 JSON API。免费层每天更新一次，每月限制 1,500 次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防止支付欺诈和退款。免费的 Micro Plan 可用，每月 500 次查询。
  * [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费层需要归因。
  * [MailPopin](https://mailpop.in) - 通过上下文信息充分利用您的 Stripe 通知。
  * [Moesif API 货币化](https://www.moesif.com/) - 通过基于使用的计费从 API 中产生收入。连接到 Stripe、Chargebee 等。免费层每月提供 30,000 次事件。
  * [Nami ML](https://www.namiml.com/) - 适用于 iOS 和 Android 的应用内购买和订阅的完整平台，包括无代码付费墙、CRM 和分析。免费使用所有基本功能来运行 IAP 业务。
  * [RevenueCat](https://www.revenuecat.com/) — 应用内购买和订阅的托管后端（iOS 和 Android）。每月跟踪收入高达 2.5 千美元免费。
  * [vatlayer](https://vatlayer.com/) — 即时增值税号码验证和欧盟增值税税率 API，每月免费 100 次 API 请求
  * [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据 API。每月免费 300 次请求，每分钟 10 次请求供私人使用。

**[⬆️ 返回顶部](#table-of-contents)**

## Docker 相关

  * [canister.io](https://canister.io/) — 为开发人员提供 20 个免费的私有存储库，为团队提供 30 个免费的私有存储库来构建和存储 Docker 映像
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费层为私有存储库提供 1GB 的存储空间。
  * [Docker Hub](https://hub.docker.com) — 一个免费的私有存储库和无限的公共存储库来构建和存储 Docker 映像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习 Docker 的游乐场。
  * [quay.io](https://quay.io/) — 使用无限的免费公共存储库构建和存储容器映像
  * [ttl.sh](https://ttl.sh/) - 匿名和临时的 Docker 映像注册表

**[⬆️ 返回顶部](#table-of-contents)**

## Vagrant 相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant Cloud。Vagrant 盒子托管。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 替代公共盒子索引

**[⬆️ 返回顶部](#table-of-contents)**

## 开发博客网站

  * [BearBlog](https://bearblog.dev/) - 简约的、由 Markdown 驱动的博客和网站构建器。
  * [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的地方。
  * [Hashnode](https://hashnode.com/) — 为开发人员提供的无忧博客软件！
  * [Medium](https://medium.com/) — 对您重要的事情进行更深入的思考。
  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式 Miniblogs 的形式免费与世界分享您的想法、知识和故事。

**[⬆️ 返回顶部](#table-of-contents)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，可帮助您从网站的受众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 基于 GitHub 问题构建的轻量级评论小部件。将 GitHub 问题用于博客评论、维基页面等！
  * [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万个网站使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，您可以为“对几个域具有完全控制权的一个版主的行为和外观”支付您所能支付的费用
  * [IntenseDebate](https://intensedebate.com/) - 适用于 WordPress、Tumblr、Blogger 和许多其他网站平台的功能丰富的评论系统。

**[⬆️ 返回顶部](#table-of-contents)**

## 截图 API

  * [ApiFlash](https://apiflash.com) — 基于 Aws Lambda 和 Chrome 的截图 API。处理整页、捕获时间和视口尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，例如元标签规范化、美化链接预览、抓取功能或作为服务的截图。每天免费提供 250 次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图 API 使用简单的 API 调用生成任何网站的截图。构建为可扩展并托管在 Google Cloud 上。每月提供 100 张免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 捕获任何网站的高度可定制快照。每月免费 100 次快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月捕获 100 次快照，包括 png、gif 和 jpg，包括全长捕获，不仅仅是主页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费层级每天提供多达 500 页。自 2017 年起提供免费层级。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名智能 API 服务。每月免费 100 次请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为 jpg、png 或 pdf。捕获整页截图，调整视口，并注入自定义代码。免费层级每月提供 150 张图片。
  * [Screenshots](https://screenshotson.click) — 您的截图 API。具有高度可定制的捕获选项。每月免费 100 次截图。

**[⬆️ 返回顶部](#table-of-contents)**



## Flutter 相关和在没有 Mac 的情况下构建 IOS 应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳场所。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一个完全托管的移动应用 CI/CD。您可以使用基于 GUI 的 CI/CD 工具进行构建、测试和部署。免费层级提供每月 500 分钟的免费时间和一个具有 2.3 GHz 和 8GB RAM 的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放界面，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#table-of-contents)**



## 用 JavaScript 编写的基于浏览器的硬件仿真

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的 x86 虚拟机，能够运行 Linux 和 Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个能够运行具有网络支持的 Linux 的 OpenRISC 虚拟机。
  * [v86](https://copy.sh/v86) — 一个能够直接在浏览器中运行 Linux 和其他操作系统的 x86 虚拟机。

**[⬆️ 返回顶部](#table-of-contents)**



## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流程帮助实施隐私设计，以便组织符合 GDPR 和其他法规。免费层级仅限于较小的团队，并且仅提供 SaaS 版本。
  * [Osano](https://www.osano.com/) - 具有从 GDPR 代表到 cookie 横幅的所有内容的同意管理和合规平台。免费层级提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 cookie 政策以及同意管理。免费层级提供有限的隐私和 cookie 政策以及 cookie 横幅。
  * [Cookiefirst](https://cookiefirst.com/) - cookie 横幅、审计和多语言同意管理解决方案。免费层级提供一次性扫描和单个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费层级提供大多数功能，但访客数量有限。
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费层级包括核心同意管理功能，他们还为经过验证的开源项目免费提供更高级的计划。

**[⬆️ 返回顶部](#table-of-contents)**

## 杂项

  * [BackgroundStyler.com](https://backgroundstyler.com) - 创建您的代码、文本或图像的美学截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件。可作为漂亮的图像分享，例如用于 Twitter/Facebook 帖子，或作为链接分享，例如用于聊天或论坛。
  * [Blynk](https://blynk.io) — 一个具有 API 的 SaaS，用于控制、构建和评估物联网设备。免费开发者计划，包含 5 个设备、免费云和数据存储。也提供移动应用程序。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大内置多行计算器的笔记应用程序（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 以美学截图般的图像格式创建和分享代码片段。通常用于在 Twitter 或博客文章上美学地分享/炫耀代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text 等中的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从您的源代码创建出色的快照，以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图，以便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排准时或定期的 Webhooks。免费计划允许 5 个临时计划。
  * [cron-job.org](https://cron-job.org) - 在线 cronjobs 服务。无限数量的作业免费。
  * [datelist.io](https://datelist.io) - 在线预订/预约调度系统。每月最多免费预订 5 次，包括 1 个日历
  * [Domain Forward](https://domain-forward.com/) - 一个简单的工具，用于转发任何 URL 或域名。每月最多免费转发 5 个域名和 200k 请求。
  * [Elementor](https://elementor.com) — WordPress 网站构建器。免费计划提供 40 多个基本小部件。
  * [Form2Channel](https://form2channel.com) — 在您的网站上放置一个静态 HTML 表单，并直接将提交内容接收至 Google Sheets、电子邮件、Slack、Telegram 或 HTTP。无需编码。
  * [Format Express](https://www.format-express.dev) - JSON/XML/SQL 的即时在线格式。
  * [FOSSA](https://fossa.com/) - 可扩展的端到端管理第三方代码、许可证合规性和漏洞。
  * [fullcontact.com](https://www.fullcontact.com/developer/pricing/) — 通过向您的应用程序添加社交配置文件，帮助您的用户了解更多关于他们的联系人的信息。每月免费提供 500 个 Person API 匹配。
  * [Hook Relay](https://www.hookrelay.dev/) - 为您的应用程序添加 Webhook 支持，无需麻烦：为您完成队列、带有退避的重试和日志记录。免费计划每天有 100 次交付，14 天保留，3 个 Webhook 端点。
  * [http2.pro](https://http2.pro) — HTTP/2 协议就绪测试和客户端 HTTP/2 支持检测 API。
  * [kandi](https://kandi.openweaver.com/) — 启动应用程序开发：通过代码片段和开源库重用更快地构建自定义功能、用例和完整的应用程序。
  * [Base64 decoder/encoder](https://devpal.co/base64-decode/) — 在线免费解码和编码数据的工具。
  * [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord 和自定义 Webhooks 接收 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 上的新版本通知。
  * [OnlineExifViewer](https://onlineexifviewer.com/) — 立即在线查看照片的 EXIF 数据，包括 GPS 位置和元数据。
  * [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理 PDF 模板，使用动态数据调用 API，并下载您的 PDF。每月提供 300 个免费文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) — 使用扩展从代码片段和 VSCode 创建美丽、可定制的截图。
  * [QuickType.io](https://quicktype.io/) - 快速自动从 JSON、模式和 GraphQL 生成模型/类/类型/接口和序列化器，以便在任何编程语言中快速安全地处理数据。将 JSON 转换为任何语言的华丽、类型安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 一个免费的移动友好工具，提供各种随机生成的密钥和密码，您可以使用它们来保护任何应用程序、服务或设备。
  * [ray.so](https://ray.so/) - 为您的代码片段创建美丽的图像。
  * [readme.com](https://readme.com/) — 轻松制作漂亮的文档，开源免费。
  * [redirection.io](https://redirection.io/) — 用于管理企业、营销和 SEO 的 HTTP 重定向的 SaaS 工具。
  * [redirect.ing](https://redirect.ing/) - 快速安全的域名转发，无需管理服务器或 SSL 证书。免费计划包括每月 10 个主机名和 100,000 个请求。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理带有 HTTPS 支持的重定向。免费计划包括每月 10 个源和 100,000 次点击。
  * [ReqBin](https://www.reqbin.com/) — 在线发布 HTTP 请求。流行的请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持标头和令牌身份验证。包括一个基本的登录系统，用于保存您的请求。
  * [Smartcar API](https://smartcar.com) - 一个用于汽车定位、获取燃油箱、电池电量、里程表、解锁/锁定车门等的 API。
  * [snappify](https://snappify.com) - 使开发人员能够创建令人惊叹的视觉效果。从美丽的代码片段到完整的技术演示文稿。免费计划包括一次最多 3 个快照，无限下载和每月 5 个 AI 驱动的代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取给定经度和纬度的日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 实时符合 PubSubHubbub 的提要、导出、分析。免费但定制较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查。在线分析结果。免费计划每个调查仅允许 10 个问题和 100 个响应。
  * [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话式应用程序。将它们带到全渠道：从您的网站（实时聊天小部件）到 WhatsApp。免费计划，无限制的聊天机器人。
  * [Versionfeeds](https://versionfeeds.com) — 您喜爱的软件版本的自定义 RSS 提要。在一个提要中拥有您的编程语言、库或喜爱的工具的最新版本。（前 3 个提要是免费的）
  * [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制和其他视频。

**[⬆️ 返回顶部](#table-of-contents)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 2 台设备免费，会话数量和持续时间无限制。
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关。
  * [RemSupp](https://remsupp.com) — 按需支持和对设备的永久访问（每天免费 2 个会话）。
  * [RustDesk](https://rustdesk.com/) - 为每个人提供的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#table-of-contents)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资产，如精灵、图块集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自各地游戏艺术家的免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资产，如 2D、3D、音频、GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资产，如音乐、声音、精灵和 gif。
  * [CraftPix](https://craftpix.net) — 免费/付费资产，如 2D、3D、音频、GUI、背景、图标、图块集、游戏套件。
  * [Game Icons](https://game-icons.net/) - 在 CC-BY 许可下提供的免费可定制 SVG/PNG 图标。
  * [LoSpec](https://lospec.com/) — 用于创建像素艺术和其他限制性数字艺术的在线工具，提供大量教程/调色板列表供您的游戏选择。
  * [ArtStation](https://www.artstation.com/) - 免费/付费 2D、3D 资产和音频、图标、图块集、游戏套件的市场。此外，它还可用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，以及使用其免费计划创建自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 免费低多边形 3D 资产。
  * [3Dassets.one](https://3dassets.one/) - 超过 8000 个免费/付费 3D 模型和 PBR 材质用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0 通用许可）2D、3D、音频和 UI 游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费纹理（具有可变分辨率）、模型、HDRIs 和画笔。提供免费插件可导出到 Blender 等软件。
  * [Freesound](https://freesound.org/) - 提供不同 CC 许可证的免费协作声音库。

**[⬆️ 返回顶部](#table-of-contents)**

## 其他免费资源

  * [Wikimint Developer](https://developer.wikimint.com/p/tools.html) - 始终为网络开发人员提供免费工具，包括 CSS 压缩/解压、图像优化器、图像大小调整器、大小写转换器、CSS 验证器、JavaScript 编译器、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月免费获得多达 200 小时的音频转录。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的 `*.localhost.direct` 通配符公共 CA 签名 SSL 证书，用于带有子域支持的本地开发。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/自由开源软件和 SaaS 列表。
  * [github.com — FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) — 开发人员的免费和开源软件中心。
  * [GitHub Education](https://education.github.com/pack) — 为学生提供的免费服务集合。需要注册。
  * [Markdown Tools](https://markdowntools.com) - 用于在 HTML、CSV、PDF、JSON 和 Excel 文件与 Markdown 之间进行转换的工具。
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙箱、工具和其他构建 Microsoft 365 平台解决方案所需的资源。订阅是 90 天的 [Microsoft 365 E5 Subscription](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续订。如果您积极参与开发（使用遥测数据和算法测量），它将续订。
  * [Pyrexp](https://pythonium.net/regex) — 用于调试正则表达式的免费基于 Web 的正则表达式测试器和可视化工具。
  * [RedHat for Developers](https://developers.redhat.com) — 开发人员可免费访问 Red Hat 产品，包括 RHEL、OpenShift、CodeReady 等。仅限个人计划。还提供免费电子书供参考。
  * [smsreceivefree.com](https://smsreceivefree.com/) — 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费发送和接收测试短信。
  * [SimpleBackups.com](https://simplebackups.com/) — 用于服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，直接存储到云存储提供商（AWS、DigitalOcean 和 Backblaze）。提供 1 个备份的免费计划。
  * [SnapShooter](https://snapshooter.com/) — DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持直接将数据库、文件系统和应用程序备份到基于 s3 的存储。提供一个免费计划，每天为一个资源进行备份。
  * [Themeselection](https://themeselection.com/) — 精选高质量、现代设计、专业且易于使用的免费管理仪表板模板、HTML 主题和 UI 工具包，让您更快地创建应用程序！
  * [Web.Dev](https://web.dev/measure/) — 这是一个免费工具，可让您查看网站的性能并改善 SEO，以在搜索引擎中获得更高的排名列表。
  * [SmallDev.tools](https://smalldev.tools/) — 一个为开发人员提供的免费工具，允许您对各种格式进行编码/解码、最小化 HTML/CSS/JavaScript、美化、生成 JSON/CSV 和多种其他格式的假/测试数据集以及更多功能。具有令人愉悦的界面。
  * [UseCSV by Layercode](https://layercode.com/usecsv) — 在几分钟内将 CSV 和 Excel 导入添加到您的 Web 应用程序。为您的用户提供愉快且强大的数据导入体验。无需任何信用卡详细信息即可免费开始，并立即开始集成 UseCSV。您可以创建无限的导入器并上传最大 100Mb 的文件。
  * [Buttons Generator](https://markodenic.com/tools/buttons-generator/) — 您可以在项目中使用的 100 多个按钮。
  * [WrapPixel](https://www.wrappixel.com/) — 下载使用 Angular、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费和高级管理仪表板模板！
  * [Utils.fun](https://utils.fun/en) — 所有基于浏览器计算能力的离线日常和开发工具，包括水印生成、屏幕录制、编码和解码、加密和解密以及代码格式化，完全免费，并且不会将任何数据上传到云端进行处理。
  * [Free Code Tools](https://freecodetools.org/) — 100% 免费的有效代码工具。Markdown 编辑器、代码压缩器/美化器、二维码生成器、Open Graph 生成器、Twitter 卡片生成器等。
  * [regex101](https://regex101.com/) — 免费此网站允许您测试和调试正则表达式（regex）。它提供了一个正则表达式编辑器和测试器，以及学习正则表达式的有用文档和资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) — 100 多个开发工具，包括格式化程序、压缩器和转换器。
  * [AdminMart](https://adminmart.com/) — 使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费和高级管理仪表板和网站模板！
  * [ Glob tester](https://globster.xyz/) — 一个允许您设计和测试 glob 模式的网站。它还提供了学习 glob 模式的资源。
  * [OpenUtils](https://openutils.org/) - 有各种免费工具可供开发人员使用，例如 HTML/CSS/JavaScript 格式化程序、压缩器、转换器、编码器/解码器等等。
  * [SimpleRestore](https://simplerestore.io) - 无忧 MySQL 备份恢复。无需代码或服务器即可将 MySQL 备份还原到任何远程数据库。
  * [360Converter](https://www.360converter.com/) - 免费层级有用的网站转换：视频转文本 && 音频转文本 && 语音转文本 && 实时音频转文本 && YouTube 视频转文本 && 添加视频字幕。也许它在短视频转换或简短的 YouTube 教程中会有所帮助：）
  * [QRCodeBest](https://qrcode.best/) - 使用 13 个模板创建自定义二维码，完全隐私，个人品牌。在 QRCode.Best 上具有跟踪像素、项目分类和无限团队座位的功能。
  * [PostPulse](https://post-pulse.io) - 每月使用 AI 撰写的帖子到 SEO 优化的域来提高您的在线形象，增强您的 SEO 和网站排名。免费计划允许您每月在我们的网站上手动发布一篇帖子。
  * [PageTools](https://pagetools.co/) - 提供一套永远免费的人工智能驱动工具，帮助您生成基本的网站政策，使用简单的一键式界面创建社交媒体简历、帖子和网页。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 易于理解和免费的 MySQL EXPLAIN 输出可视化工具，可优化慢速查询。
  * [Killer Coda](https://killercoda.com/)  - 在浏览器中进行交互的游乐场，用于学习 Linux、Kubernetes、容器、编程、DevOps、网络