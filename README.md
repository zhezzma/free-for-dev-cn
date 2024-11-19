# free-for.dev

开发人员和开源作者现在有许多提供免费层级的服务，但找到它们都需要时间来做出明智的决策。

这是一个包含免费开发者层级的软件（SaaS、PaaS、IaaS 等）和其他产品的列表。

本特别列表的范围仅限于基础架构开发人员（系统管理员、DevOps 从业者等）可能会发现有用的东西。我们喜欢那里所有的免费服务，但保持主题相关会很好。有时这是一条灰色的线，所以这是有意见的；如果我不接受你的贡献，请不要感到冒犯。

此列表是通过拉取请求、评论、想法和 1600 多人的工作得出的。你也可以通过发送[拉取请求](https://github.com/ripienaar/free-for-dev)来添加更多服务或删除那些提供的产品已经更改或已退役的服务。

[![跟踪精彩列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅适用于即服务产品，不适用于自托管软件。要符合条件，服务必须提供免费层级，而不仅仅是免费试用。如果是时间桶，免费层级必须至少为一年。我们还从安全角度考虑免费层级，因此单点登录没问题，但我不会接受将 TLS 限制为仅付费层级的服务。

# 目录

  * [主要云服务提供商的免费使用限制](#主要云服务提供商的免费使用限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [工件仓库](#工件仓库)
  * [后端即服务（BaaS）](#后端即服务（BaaS）)
  * [低代码平台](#低代码平台)
  * [内容分发网络（CDN）和防护](#内容分发网络（CDN）和防护)
  * [持续集成和持续部署（CI和CD）](#持续集成和持续部署（CI和CD）)
  * [内容管理系统（CMS）](#内容管理系统（CMS）)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [地图上的数据可视化](#地图上的数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面（UI）](#设计和用户界面（UI）)
  * [设计灵感](#设计灵感)
  * [开发博客网站](#开发博客网站)
  * [域名系统（DNS）](#域名系统（DNS）)
  * [Docker相关](#Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能切换管理平台](#功能切换管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能（GenerativeAI）](#生成式人工智能（GenerativeAI）)
  * [基础设施即服务（IaaS）](#基础设施即服务（IaaS）)
  * [集成开发环境（IDE）和代码编辑](#集成开发环境（IDE）和代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用程序分发和反馈](#移动应用程序分发和反馈)
  * [管理系统](#管理系统)
  * [消息和流](#消息和流)
  * [杂项](#杂项)
  * [监控](#监控)
  * [平台即服务（PaaS）](#平台即服务（PaaS）)
  * [包构建系统](#包构建系统)
  * [支付和计费集成](#支付和计费集成)
  * [隐私管理](#隐私管理)
  * [屏幕截图API](#屏幕截图API)
  * [与Flutter相关和无需Mac即可构建IOS应用程序](#与Flutter相关和无需Mac即可构建IOS应用程序)
  * [搜索](#搜索)
  * [安全性和公钥基础设施（PKI）](#安全性和公钥基础设施（PKI）)
  * [身份验证、授权和用户管理](#身份验证、授权和用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储和媒体处理](#存储和媒体处理)
  * [隧道、WebRTC、WebSocket服务器和其他路由器](#隧道、WebRTC、WebSocket服务器和其他路由器)
  * [测试](#测试)
  * [团队和协作工具](#团队和协作工具)
  * [翻译管理](#翻译管理)
  * [与Vagrant相关](#与Vagrant相关)
  * [访问者会话记录](#访问者会话记录)
  * [虚拟主机服务](#虚拟主机服务)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件仿真（使用JavaScript编写）](#基于浏览器的硬件仿真（使用JavaScript编写）)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主要云服务提供商的免费使用限制

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天 28 个前端实例小时，9 个后端实例小时
    * Cloud Firestore - 1GB 存储，每天 50,000 次读取，20,000 次写入，20,000 次删除
    * Compute Engine - 1 个非抢占性 e2-micro，30GB HDD，5GB 快照存储（限制在某些地区），每月从北美到所有地区目的地（不包括中国和澳大利亚）的 1GB 网络出口
    * Cloud Storage - 5GB，1GB 网络出口
    * Cloud Shell - 基于 Web 的 Linux 外壳/主要 IDE，具有 5GB 持久存储。每周限制使用 60 小时
    * Cloud Pub/Sub - 每月 10GB 的消息
    * Cloud Functions - 每月 200 万次调用（包括后台和 HTTP 调用）
    * Cloud Run - 每月 200 万次请求，360,000GB 秒内存，180,000vCPU 秒计算时间，每月从北美到所有地区目的地（不包括中国和澳大利亚）的 1GB 网络出口
    * Google Kubernetes Engine - 一个区域集群的集群管理费用为零。每个用户节点按标准 Compute Engine 定价收费
    * BigQuery - 每月 1TB 的查询，每月 10GB 的存储
    * Cloud Build - 每天 120 个构建分钟
    * Cloud Source Repositories - 最多 5 个用户，50GB 存储，50GB 出口
    * [Google Colab](https://colab.research.google.com/) - 免费的 Jupyter Notebook 开发环境。
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月 1TB 出站流量和每月 200 万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10 个自定义指标和 10 个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月 100 分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 个活跃用户，50GB 存储，每月 10,000 次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月 1 个活动管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL DB
    * [EC2](https://aws.amazon.com/ec2/) - 每月 750 小时的 t2.micro 或 t3.micro（12 个月）。每月 100GB 出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月 30GB 的通用（SSD）或磁性（12 个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月 750 小时（12 个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月 750 小时的 db.t2.micro、db.t3.micro 或 db.t4g.micro，20GB 的通用（SSD）存储，20GB 的存储备份（12 个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB 标准对象存储，20K Get 请求和 2K Put 请求（12 个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB 长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月 100 万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月 100 万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月 3,000 封邮件（12 个月）
    * [SQS](https://aws.amazon.com/sqs/) - 每月 100 万条消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1 个 B1S Linux VM，1 个 B1S Windows VM（12 个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10 个 Web、移动或 API 应用（每天 60 CPU 分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月 100 万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 启用快速、轻松和精简的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000 个每月存储的用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 个活跃用户，无限私有 Git 存储库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/)——对于 Linux、macOS 和 Windows 的开源，提供 10 个免费并行作业，不限时间
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天 8,000 条消息
    * [LoadBalancer](https://azure.microsoft.com/services/load-balancer/) - 1 个免费公共负载均衡 IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100 万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 每月 15GB 入站（12 个月）和 5GB 出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB 存储和 1000 RU 的预配吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/)——使用免费 SSL、身份验证/授权和自定义域构建、部署和托管静态应用和无服务器函数
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS 文件或 Blob 存储（12 个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、面部检测、机器人等），包括免费层和有限交易
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features)——基于人工智能的搜索和索引服务，免费 10,000 份文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管 Kubernetes 服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月 100 万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2 个基于 AMD 的 Compute VM，每个具有 1/8 OCPU 和 1GB 内存
       - 4 个基于 Arm 的 Ampere A1 核心和 24GB 内存，可作为一个 VM 使用，也可最多用于 4 个 VM
       - 实例在被视为空闲时会被收回[（https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances）
    * 块卷 - 2 个卷，总计 200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1 个实例，速度为 10Mbps
    * 数据库 - 2 个数据库，每个 20GB
    * 监控 - 5 亿个摄入数据点，10 亿个检索数据点
    * 带宽 - 每月 10TB 出站流量，x64 架构 VM 速度限制为 50Mbps，基于 Arm 的 VM 速度限制为 500Mbps *核心数
    * 公共 IP - 2 个用于 VM 的 IPv4，1 个用于负载均衡器的 IPv4
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
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名的免费 DNS，DDoS 保护，CDN 以及免费 SSL、防火墙规则和页面规则，WAF、Bot 缓解，免费无限制速率限制-每个域 1 个规则，分析，电子邮件转发
    * [零信任与 SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多 50 个用户，24 小时活动日志，3 个网络位置
    * [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/) - 您可以通过[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)将本地运行的 HTTP 端口通过隧道暴露到 trycloudflare.com 上的随机子域，无需帐户。更多功能（TCP 隧道、负载均衡、VPN）在[零信任](https://www.cloudflare.com/products/zero-trust/)免费计划中。

    * [ Workers KV](https://developers.cloudflare.com/kv) - 每天 10 万次读请求，每天 1000 次写请求，每天 1000 次删除请求，每天 1000 次列表请求，存储 1GB 数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10GB，每月 100 万次 A 级操作，每月 1000 万次 B 级操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天读取 500 万行，每天写入 10 万行，存储 1GB
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 的快速、安全的全球网络上开发和部署您的 Web 应用程序。每月五百次构建，一百个自定义域名，集成 SSL，无限可访问席位，无限预览部署，以及通过 Cloudflare Workers 集成的全栈功能。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) - 每月 1TB 免费（出站）流量。

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一种协作解决方案，用于从端到端可视化构建和管理云基础架构。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包括一个部署服务器，一个静态网站），Cloud 66 为您提供在任何云上构建、部署和扩展应用程序所需的一切，而无需头疼“服务器相关的问题”。
  * [Pulumi](https://www.pulumi.com/) —— 一种现代基础设施即代码平台，允许您使用熟悉的编程语言和工具来构建、部署和管理云基础架构。
  * [terraform.io](https://www.terraform.io/) —— Terraform Cloud。免费的远程状态管理和团队协作，最多支持 500 个资源。
  * [scalr.com](https://scalr.com/) - Scalr 是一个 Terraform 自动化和协作（TACO）产品，用于更好地协作和自动化由 Terraform 管理的基础架构和配置。全面支持 Terraform CLI、OPA 集成和分层配置模型。无单点登录税。所有功能都包含在内。免费使用高达 50 次运行/月。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员在 AWS 上自动化部署。在我们的免费层中，开发人员（单个用户）可以免费部署无限的静态网站、Web 服务和环境。我们提供每月 20 次免费的作业执行，其中包括预览和自动部署。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/)——无限数量的公共和私人 Git 存储库，最多可容纳 5 个用户，并提供持续集成/持续部署（CI/CD）管道
  * [chiselapp.com](https://chiselapp.com/)——无限数量的公共和私人 Fossil 存储库
  * [codebasehq.com](https://www.codebasehq.com/)——一个免费项目，提供 100MB 空间和两个用户
  * [Codeberg](https://codeberg.org/)——无限数量的公共和私人 Git 存储库，适用于免费和开源项目（无限制协作者）。由[Forgejo](https://forgejo.org/)提供支持。提供静态网站托管[Codeberg Pages](https://codeberg.page/)。提供持续集成/部署[Codeberg 的 CI](https://docs.codeberg.org/ci/)。提供翻译托管[Codeberg Translate](https://translate.codeberg.org/)。包括包和容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io)——无限数量的私有和公共存储库。永久免费。由 GitLab 和 Sapphire 提供支持。不提供持续集成/部署。
  * [GitHub](https://github.com/)——无限数量的公共存储库和无限数量的私有存储库（无限制协作者）。包括持续集成/部署、开发环境、静态托管、包和容器托管、项目管理和 AI Copilot
  * [gitlab.com](https://about.gitlab.com/)——无限数量的公共和私人 Git 存储库，最多可容纳 5 个协作者。包括持续集成/部署、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/)——Framagit 是基于 Gitlab 软件的 Framasoft 软件 forge，包括 CI、静态页面、项目页面和问题跟踪。
  * [heptapod.net](https://foss.heptapod.net/)——Heptapod 是 GitLab Community Edition 的友好分支，提供对 Mercurial 的支持
  * [ionicframework.com](https://ionicframework.com/appflow)——用于使用 Ionic 开发应用程序的存储库和工具；您也有一个 ionic 存储库
  * [NotABug](https://notabug.org)——NotABug.org 是一个免费软件代码协作平台，适用于自由许可的项目，基于 Git
  * [OSDN](https://osdn.net/)——OSDN.net 是一个面向开源软件开发人员的免费服务，提供 SVN/Git/Mercurial/Bazaar/CVS 存储库。
  * [Pagure.io](https://pagure.io)——Pagure.io 是一个免费和开源软件代码协作平台，适用于基于 FOSS 许可的项目，基于 Git
  * [perforce.com](https://www.perforce.com/products/helix-teamhub)——免费 1GB 云存储和 Git、Mercurial 或 SVN 存储库。
  * [pijul.com](https://pijul.com/)——无限数量的免费和开源分布式版本控制系统。其独特之处在于基于可靠的补丁理论，易于学习、使用和分发。解决了 git/hg/svn/darcs 等许多问题。
  * [plasticscm.com](https://plasticscm.com/)——个人、OSS 和非营利组织免费
  * [projectlocker.com](https://projectlocker.com/)——一个免费的私有项目（Git 和 Subversion），提供 50MB 空间
  * [RocketGit](https://rocketgit.com)——基于 Git 的存储库托管。无限数量的公共和私人存储库。
  * [savannah.gnu.org](https://savannah.gnu.org/)——作为自由软件项目（GNU 项目）的协作软件开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/)——作为自由软件项目（非 GNU 项目）的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑、过滤复杂的 JSON 数据，使其成为美观的表格网格。通过链接共享 JSON 数据。
  * [Zerosheets](https://zerosheets.com) - 将 Google 表格电子表格转换为强大的 API，以便快速开发原型、网站、应用程序等。每月免费提供 500 次请求。
  * [IP.City](https://ip.city) — 每天 100 次免费 IP 地理位置定位请求
  * [Abstract API](https://www.abstractapi.com) - 适用于各种用例的 API 套件，包括 IP 地理位置定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) - 网络抓取和自动化平台，可创建任何网站的 API 并提取数据。提供即用型抓取程序、集成代理和自定义解决方案。免费计划每月包含 5 美元的平台信用额度。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的 API 或自动化工具（如 Zapier 和 Airtable）自动生成图像和 PDF 文档。无需 CSS/HTML。免费计划包含 50 张图像/月和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解 API 和后端情况所需的所有工具。具有自动 API 合同验证和监控功能。免费计划涵盖每月最多 20,000 次请求的服务器。
  * [APIVerve](https://apiverve.com) - 立即访问 120 多个 API，免费使用，注重质量、一致性和可靠性。免费计划每月覆盖最多 50 个 API 令牌。
  * [Arize AI](https://arize.com/) - 用于模型监控和根本原因分析的机器学习可观测性，例如数据质量和性能漂移。免费最多两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 用于开发单页 Web 应用程序的轻量级库，这些应用程序可以立即访问。适用于 Java、Node.js、Perl、Python 和 Ruby。
  * [Beeceptor](https://beeceptor.com) - 在几秒钟内模拟 rest API，伪造 API 响应等。免费每天 50 次请求，公共仪表板，开放端点（任何拥有仪表板链接的人都可以查看提交和答案）。
  * [bigml.com](https://bigml.com/) - 托管机器学习算法。开发免费，无限制的任务，数据/任务限制为 16MB。
  * [Browse AI](https://www.browse.ai) - 在网络上提取和监控数据。每月免费 50 个信用额度。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器 API，用于自动化、抓取、AI 代理网络访问、图像/pdf 生成等。免费计划每月 1k 次请求。
  * [Bruzu](https://bruzu.com/) - 自动化图像制作。使用 API、集成或无代码工作表生成大量图像变体。API 免费使用，带有水印。
  * [Calendarific](https://calendarific.com) - 企业级公共假日 API 服务，适用于 200 多个国家。免费计划包括每月 1,000 次调用。
  * [Canopy](https://www.canopyapi.co/) - 用于亚马逊产品、搜索和类别数据的 GraphQL API。免费计划包括每月 100 次调用。
  * [Clarifai](https://www.clarifai.com) - 用于自定义面部识别和检测的图像 API。能够训练 AI 模型。免费计划每月有 5,000 次调用。
  * [Cloudmersive](https://cloudmersive.com/) - 实用程序 API 平台，可全面访问包括文档转换、病毒扫描等在内的广泛 API 库，每月有 800 次调用。
  * [Colaboratory](https://colab.research.google.com) - 基于网络的免费 Python 笔记本环境，配备 Nvidia Tesla K80 GPU。
  * [Collect2](https://collect2.com) - 创建 API 终结点以进行测试、自动化和连接 Webhooks。免费计划允许两个数据集、2000 条记录、一个转发器和一个警报。
  * [CometML](https://www.comet.com/site/) - 用于实验跟踪、模型生产管理、模型注册表和完整数据沿袭的 MLOps 平台，涵盖从培训到生产的工作流程。个人和学者免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的商务 API，可从任何前端构建、放置和管理订单。开发者计划每月免费提供 100 个订单和最多 1,000 个 SKU。
  * [Conversion Tools](https://conversiontools.io/) - 用于文档、图像、视频、音频和电子书的在线文件转换器。提供 REST API。适用于 Node.js、PHP、Python 的库。支持高达 50GB 的文件（付费计划）。免费层受文件大小和每天转换次数的限制。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - API 和微服务，提供广泛的信息，包括国家、地区、省、市、邮政编码等。免费层每天包括最多 100 次请求。
  * [Coupler](https://www.coupler.io/) - 用于在应用程序之间同步数据的工具。它可以创建实时仪表板和报告，转换和操作值，并收集和备份见解。免费计划具有无限用户、每月 100 次运行、1000 行和无限集成。
  * [CraftMyPDF](https://craftmypdf.com) - 使用拖放编辑器和简单 API 从可重用模板自动生成 PDF 文档。免费计划每月提供 100 份 PDF 和三个模板。
  * [CurlHub](https://curlhub.io) - 用于检查和调试 API 调用的代理服务。免费计划包括每月 10,000 次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 用于金融科技应用的实时货币数据 API。免费计划每月包括 5,000 次调用。
  * [Cube](https://cube.dev/) - Cube 帮助数据工程师和应用程序开发人员从现代数据存储中访问数据，将其组织为一致的定义，并将其交付到每个应用程序。使用 Cube 的最快方法是使用 Cube Cloud，它具有免费层，每月有 1GB 的数据通过。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据访问后自动销毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 使用无代码连接 Airtable 到任何应用程序或 API。Postman 风格的界面，用于在 Airtable 中运行 API 请求。与数十个应用程序的预构建集成。免费计划每月包括 100 次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 将数据连接、清理和导入 Salesforce 的工具。免费计划包括每月最多 20,000 条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains 的 Python 笔记本。每月包含 10GB 存储和 120 小时的运行时间。
  * [Data Miner](https://dataminer.io/) - 用于从网页 CSV 或 Excel 中提取数据的浏览器扩展（Google Chrome、MS Edge）。免费计划每月提供 500 页。
  * [Datapane](https://datapane.com) - 在 Python 中构建交互式报告的 API，并将 Python 脚本和 Jupyter Notebook 作为自助服务工具进行部署。
  * [DB-IP](https://db-ip.com/api/free) - 免费 IP 地理位置定位 API，每个 IP 每天限制 1k 请求。免费的 lite 数据库也在 CC-BY 4.0 许可证下提供。
  * [DB Designer](https://www.dbdesigner.net/) - 基于云的数据库模式设计和建模工具，免费入门计划为 2 个数据库模型，每个模型 10 个表。
  * [DeepAR](https://developer.deepar.ai) - 适用于任何平台的增强现实面部过滤器，一个 SDK。免费计划提供最多 10 个每月活跃用户 (MAU)，并跟踪最多 4 个面部
  * [Deepnote](https://deepnote.com) - 一种新的数据科学笔记本。兼容 Jupyter，支持实时协作和云运行。免费层包括无限个人项目、最高 750 小时的标准硬件和最多 3 个编辑器的团队。
  * [Diggernaut](https://www.diggernaut.com/) - 基于云的网络抓取和数据提取平台，用于将任何网站转换为数据集或作为 API 使用。免费计划每月包括 5K 页请求。

  * [Doczilla](https://www.doczilla.app/)——一款 SaaS API，能够直接从 HTML/CSS/JS 代码生成屏幕截图或 PDF。免费计划允许每月生成 250 份文档。
  * [Doppio](https://doppio.sh/)——使用顶级渲染技术生成和私下存储 PDF 和屏幕截图的托管 API。免费计划允许每月生成 400 份 PDF 和屏幕截图。
  * [dreamfactory.com](https://dreamfactory.com/)——适用于移动、Web 和 IoT 应用程序的开源 REST API 后端。连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，它会立即创建一个具有实时文档和用户管理的全面 REST API 平台。
  * [DynamicDocs](https://advicement.io)——使用基于 LaTeX 模板的 JSON 到 PDF API 生成 PDF 文档。免费计划允许每月进行 50 次 API 调用，并访问模板库。
  * [Efemarai](https://efemarai.com)——用于测试和调试 ML 模型和数据的平台。可视化任何计算图。每月为开发人员提供免费的 30 次调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html)——免费的基于网络的 HTTP 客户端，用于发送 HTTP 请求。
  * [Export SDK](https://exportsdk.com)——具有拖放模板编辑器的 PDF 生成 API，提供 SDK 和无代码集成。免费计划每月有 250 页、无限用户和三个模板。
  * [Fern](https://buildwithfern.com)——使用 API 定义在流行语言中生成 SDK，并生成 API 参考文档网页。将 Markdown 页面添加到 API 参考中，并使用 Fern 托管它们，以获得完整的文档解决方案。完全支持 OpenAPI。
  * [file.coffee](https://file.coffee/)——一个可以存储最多 15MB/file（使用帐户可存储 30/MB 文件）的平台。
  * [FraudLabs Pro](https://www.fraudlabspro.com)——对信用卡支付欺诈进行订单交易筛查。此 REST API 将根据订单的输入参数检测所有可能的欺诈特征。免费的微计划每月有 500 笔交易。
  * [Geekflare API](https://geekflare.com/api)——Geekflare API 允许您截屏、审核网站、TLS 扫描、DNS 查找、测试 TTFB 等。免费计划提供 3,000 次 API 请求。
  * [GeoCod](https://geocod.xyz)——免费的地理编码 API：将邮政地址转换为地理坐标或将地理坐标转换为邮政地址（反向地理编码）。
  * [GeoDataSource](https://www.geodatasource.com)——位置搜索服务使用纬度和经度坐标查找城市名称。免费 API 查询每月最多 500 次。
  * [Geolocated.io](https://geolocated.io)——具有多大陆服务器的 IP 地理定位 API，为业余爱好者提供每月 60,000 次请求的永久免费计划。
  * [Glitterly](https://glitterly.app/)——从基本模板动态生成图像的程序。Restful API 和无代码集成。免费层每月提供 50 张图像和五个模板。
  * [GoodData](https://www.gooddata.com/)——数据即服务——创建互动和有洞察力的仪表板。免费层包括五个工作区和 100MB/工作区。
  * [Hex](https://hex.tech/)——一个用于笔记本、数据应用程序和知识库的协作数据平台。免费社区版本最多可容纳 3 位作者和 5 个项目。每位作者一个计算配置文件，内存为 4GB。
  * [Hook0](https://www.hook0.com/)——Hook0 是一个开源的 Webhooks-as-a-service (WaaS)，使在线产品提供 Webhooks 变得容易。免费提供 7 天历史记录保留，每月最多可调度 3,000 个事件。
  * [Hoppscotch](https://hoppscotch.io)——一个免费、快速和美丽的 API 请求构建器。
  * [Hybiscus](https://hybiscus.dev/)——使用简单声明性 API 构建 pdf 报告。免费层包括每月最多 100 份单页报告的能力，以及自定义调色板和字体的能力。
  * [Invantive Cloud](https://cloud.invantive.com/)——访问超过 70 个（云）平台，如 Exact Online、Twinfield、ActiveCampaign 或 Visma 使用 Invantive SQL 或 OData4（通常是 Power BI 或 Power Query）。包括数据复制和交换。开发人员和实施顾问的免费计划。对于特定平台，免费计划在数据量上有限制。
  * [ipaddress.sh](https://ipaddress.sh)——获取不同[格式](https://about.ipaddress.sh/)的公共 IP 地址的简单服务。
  * [ipbase.com](https://ipbase.com)——IP 地理定位 API——永久免费计划，每月 150 次请求。
  * [IP Geolocation](https://ipgeolocation.io/)——适用于开发人员的永久免费 IP 地理定位 API，每月有 30k 请求（每天 1k）限制。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api)——来自 Abstract 的 IP 地理定位 API——提供广泛的免费计划，允许每月 20,000 次请求。
  * [IP2Location](https://www.ip2location.com)——免费增值 IP 地理定位服务。LITE 数据库可免费下载。将数据库导入服务器并在本地查询以确定城市、坐标和 ISP 信息。
  * [IP2Location.io](https://www.ip2location.io/)——免费增值、快速可靠的 IP 地理定位 API，可确定城市、坐标、ISP 等地理定位数据。免费计划每月提供 30k 信用额度。订阅付费计划以获得更多高级功能或联系我们获取个性化计划。
  * [ipapi](https://ipapi.co/)——由 Kloudend, Inc 提供的 IP 地址位置 API——基于 AWS 构建的可靠地理定位 API，受 Fortune 500 信赖。免费层每月提供 30k 次查找（每天 1k），无需注册。
  * [ipapi.is](https://ipapi.is/)——适用于开发人员的可靠 IP 地址 API，具有最佳的托管检测功能。免费计划提供 1000 次无注册查找。
  * [IPinfo](https://ipinfo.io/)——快速、准确和免费（每月最多 50k）的 IP 地址数据 API。提供有关地理位置、公司、运营商、IP 范围、域、滥用联系人等的 API。所有付费 API 都可以免费试用。
  * [BigDataCloud](https://www.bigdatacloud.com/)——为现代网络提供快速、准确和免费（无限或每月 10K-50K）的 API，如 IP 地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [IPTrace](https://iptrace.io)——一个简单的 API，为您的企业提供可靠和有用的 IP 地理定位数据。
  * [JSON2Video](https://json2video.com)——一个视频编辑 API，用于自动执行视频营销和社交媒体视频，具有编程或无代码功能。
  * [JSON IP](https://getjsonip.com)——返回从其请求的客户端的公共 IP 地址。免费层无需注册。使用 CORS，可以使用客户端 JavaScript 直接从浏览器请求数据。对于服务监控客户端和服务器 IP 的更改很有用。无限请求。
  * [JSON Serve](https://jsonserve.com/)——一个免费的服务，帮助开发人员存储 JSON 对象，并在其应用程序中将该 JSON 用作 REST API。
  * [JSONing](https://jsoning.com/api/)——从 JSON 对象创建一个虚假的 REST API，并自定义 HTTP 状态代码、标头和响应正文。
  * [konghq.com](https://konghq.com/)——API 市场和强大的私有和公共 API 工具。免费层的一些功能（如监控、警报和支持）受到限制。
  * [Kreya](https://kreya.app)——免费的 gRPC GUI 客户端，用于调用和测试 gRPC APIs。可以通过服务器反射导入 gRPC APIs。
  * [Lightly](https://www.lightly.ai/)——通过使用正确的数据来改进您的机器学习模型。免费使用最多 1000 个样本的数据集。
  * [LoginLlama](https://loginllama.app)——登录安全 API，用于检测欺诈和可疑登录并通知您的客户。每月免费 1,000 次登录。

  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。免费永久 API 层允许每天无限制的 API 请求。
  * [Meteosource Weather API](https://www.meteosource.com/)——全球天气 API，提供当前和预测的天气数据。预测基于机器学习对多个天气模型的组合，以提高准确性。免费计划每天提供 400 次调用。
  * [microlink.io](https://microlink.io/)——将任何网站转换为数据，例如元标记规范化、美化链接预览、抓取功能或屏幕截图等服务。每天免费 100 次请求。
  * [Mindee](https://developers.mindee.com/docs)——Mindee 是一款强大的 OCR 软件和 API 优先平台，通过使用计算机视觉和机器学习对关键信息进行数据识别，帮助开发人员通过标准化文档处理层来自动化应用程序的工作流程。免费层每月提供 250 页。
  * [Mintlify](https://mintlify.com)——API 文档的现代标准。美观且易于维护的用户界面组件、应用内搜索和交互游乐场。免费供 1 个编辑器使用。
  * [monkeylearn.com](https://monkeylearn.com/)——使用机器学习进行文本分析，每月免费 300 次查询。
  * [MockAPI](https://www.mockapi.io/)——MockAPI 是一个简单的工具，允许您快速模拟 API，生成自定义数据，并使用 RESTful 接口执行操作。MockAPI 旨在作为原型制作/测试/学习工具。免费提供一个项目/4 个资源。
  * [Mockfly](https://www.mockfly.dev/)——Mockfly 是一款值得信赖的 API 模拟和功能标志管理开发工具。通过直观的界面快速生成和控制模拟 API。免费层每天提供 500 次请求。
  * [Mocki](https://mocki.io)——一个工具，允许您创建与 GitHub 存储库同步的模拟 GraphQL 和 REST API。简单的 REST API 无需注册即可免费开发和使用。
  * [Mocko.dev](https://mocko.dev/)——代理您的 API，选择在云中模拟哪些端点并检查流量，免费。加快您的开发和集成测试。
  * [Mocky](https://designer.mocky.io/)——一个简单的网络应用程序，用于生成自定义 HTTP 响应以模拟 HTTP 请求。也可作为[开源](https://github.com/julien-lafont/Mocky)使用。
  * [reqres.in](https://reqres.in)——一个免费的托管 REST-API，随时准备响应您的 AJAX 请求。
  * [microenv.com](https://microenv.com/)——为开发人员创建虚假的 REST API，具有在 Docker 容器中生成代码和应用的可能性。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/)——一个免费且简单的工具，可跨多个节点检查您的出口 IP 地址，并了解您的 IP 在不同全球区域和服务中的显示方式。对于测试基于规则的 DNS 拆分工具（如 Control D）很有用。
  * [neptune.ai](https://neptune.ai/)——记录、存储、显示、组织、比较和查询您所有的 MLOps 元数据。个人免费：1 个成员，100GB 的元数据存储，每月 200 小时的监控。
  * [News API](https://newsapi.org/)——使用代码在网络上搜索新闻，并获取 JSON 结果。开发人员每月免费获得 3000 次查询。
  * [Nordigen](https://nordigen.com/)——免费的开放银行数据 API。PSD2。在欧盟+英国，将 2300 多家银行与您的应用/软件连接。
  * [Nyckel](https://www.nyckel.com)——训练、部署和调用图像和文本 ML 模型。免费培训，最多可使用 5000 条训练数据。每月免费调用 1000 个模型。
  * [Observable](https://observablehq.com/)——一个用于创建、协作和学习数据的地方。免费：无限笔记本、无限发布、每个笔记本 5 个编辑器。
  * [OCR.Space](https://ocr.space/)——OCR API 解析图像和 pdf 文件，以 JSON 格式返回文本结果。每月免费 25000 次请求。
  * [Duply.co](https://duply.co)——根据 API 和 URL 创建动态图像，设计模板一次并重复使用。免费层每月提供 70 个 API 和 URL 图像创建，最多 100 个通过表单。
  * [OpenAPI3 Designer](https://openapidesigner.com/)——免费可视化创建 Open API 3 定义。
  * [parsehub.com](https://parsehub.com/)——从动态网站提取数据，将动态网站转换为 API，免费 5 个项目。
  * [pdfEndpoint.com](https://pdfendpoint.com)——使用简单 API 将 HTML 或 URL 转换为 PDF。每月免费 100 次转换。
  * [PDF-API.io](https://pdf-api.io)——PDF 自动化 API，具有可视化模板编辑器或 HTML 到 PDF、动态数据集成和 PDF 渲染功能。免费计划包含一个模板，每月 100 份 PDF。
  * [Pixela](https://pixe.la/)——免费的日数据流数据库服务。所有操作均通过 API 执行。也可以使用热图和折线图进行可视化。
  * [Postbacks](https://postbacks.io/)——请求稍后的 HTTP 回调。注册时提供 8000 次免费请求。
  * [Postman](https://postman.com)——用于设计和测试 API 的协作平台，可简化工作流程并更快地创建更好的 API。免费使用 Postman 应用程序。Postman 云功能也免费提供，并有一定的限制。
  * [Insomnia](https://insomnia.rest)——用于设计和测试 API 的开源 API 客户端，支持 REST 和 GraphQL
  * [PrefectCloud](https://www.prefect.io/cloud/)——一个完整的数据流程自动化平台。所有计划每月包括 20000 次免费运行。这足以为大多数小企业提供 ETL 动力。
  * [Preset Cloud](https://preset.io/)——托管的 Apache Superset 服务。最多 5 个用户的团队永久免费，提供无限的仪表板和图表、无代码图表构建器和协作 SQL 编辑器。
  * [PromptLeo](https://promptleo.com/)——创作者和开发人员的提示工程平台。它提供提示工程库、表单和 API。免费计划提供一个提示形成、一个提示 API 端点和每月 30 次生成。
  * [PromptLoop](https://www.promptloop.com/)——使用 AI 和大型语言模型（如 GPT-3）和简单的电子表格公式在 Google Sheets 中转换、理解和分析文本。每月免费 2000 次信用。
  * [Crawlbase](https://crawlbase.com/)——无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码，并防止您被阻止。前 1000 次调用免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis)——免费公共 API 的列表。
  * [Supportivekoala](https://supportivekoala.com/)——允许您根据模板自动生成图像。免费计划允许您每周创建最多 100 张图像。
  * [QuickMocker](https://quickmocker.com/)——管理自己子域下的在线虚假 API 端点，将请求转发到本地主机 URL 进行 Webhooks 开发和测试，使用 RegExp 和多种 HTTP 方法进行 URL 路径，对端点进行优先级排序，每个端点超过 100 个短代码（动态或虚假响应值）用于响应模板，从 OpenAPI（Swagger）规范以 JSON 格式导入，代理请求，根据 IP 地址和授权标头限制端点。免费帐户提供一个随机子域、10 个端点、5 个 RegExp URL 路径、每个端点 50 个短代码、每天 100 个请求和请求日志中的 50 条历史记录。
  * [Rapidapi](https://rapidapi.com/)——世界上最大的 API 中心数百万开发人员查找并连接到数千个 API，使用有趣的挑战（有解决方案！）和交互示例进行 API 开发。
  * [RequestBin.com](https://requestbin.com)——创建一个免费的端点，您可以向该端点发送 HTTP 请求。发送到该端点的任何 HTTP 请求都将被记录下来，并附带相关的有效负载和标头，以便您可以观察来自 Webhooks 和其他服务的建议。

  * [ROBOHASH](https://robohash.org/) - 从任何文本生成独特而酷炫图像的 Web 服务。
  * [SaturnCloud](https://saturncloud.io/) - 数据科学云环境，允许运行 Jupyter 笔记本和 Dask 集群。每月有三十小时的免费计算时间和三小时的 Dask。
  * [Scraper's Proxy](https://scrapersproxy.com)——用于抓取的简单 HTTP 代理 API。无需担心限制、阻止或验证码即可匿名抓取。每月前 100 次成功抓取免费，包括 JavaScript 渲染（如果您联系支持人员，更多可用）。
  * [ScrapingAnt](https://scrapingant.com/)——无头 Chrome 抓取 API 和免费检查代理服务。JavaScript 渲染、优质旋转代理、验证码回避。提供免费计划。
  * [ScraperBox](https://scraperbox.com/)——使用真实 Chrome 浏览器和代理轮换进行不可检测的网络抓取 API。使用简单的 API 调用抓取任何网页。免费计划每月有 1000 次请求。
  * [ScrapingDog](https://scrapingdog.com/)——Scrapingdog 处理数百万个代理、浏览器和验证码，为您提供任何网页的 HTML，只需一次 API 调用。它还包括适用于 Chrome 和 Firefox 的 Web Scraper 以及用于即时抓取需求的软件。提供免费计划。
  * [scrapinghub.com](https://scrapinghub.com)——具有可视化界面和插件的数据抓取。免费计划包括在共享服务器上的无限抓取。
  * [Simplescraper](https://simplescraper.io)——在每次操作后触发您的 Webhook。免费计划包括 100 个云抓取信用。
  * [Select Star](https://www.selectstar.com/) - 是一个智能数据发现平台，它自动分析和记录您的数据。免费的轻量级 tier 包含 1 个数据源、最多 100 个表和 10 个用户。
  * [Sheetson](https://sheetson.com) - 立即将任何 Google Sheets 转换为 RESTful API。提供免费计划。
  * [Shipyard](https://www.shipyardapp.com)——面向云的低代码数据编排平台。使用混合低代码模板和您的代码（Python、Node.js、Bash、SQL）构建。我们的免费开发人员计划为每个用户每月提供 10 小时的运行时间——足以自动化多个工作流程。
  * [shrtcode API](https://shrtco.de/docs) - 免费的 URL 缩短 API，无需授权，无请求限制。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取 API。为 Google、YouTube、Bing、百度、沃尔玛等许多其他机器返回结构化 JSON 结果。免费计划包括每月 100 次成功的 API 调用。
  * [SmartParse](https://smartparse.io) - SmartParse 是一个数据迁移和 CSV 到 API 平台，提供节省时间和成本的开发人员工具。免费层包括每月 300 个处理单元、浏览器上传、数据隔离、断路器和作业警报。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件并通过其 API 立即访问数据，从而加速应用程序开发。免费计划包括 2 个 API 和每月 2500 个 API 调用。您无需信用卡。
  * [Sqlable](https://sqlable.com/) - 一系列免费的在线 SQL 工具，包括 SQL 格式化程序和验证器、SQL 正则表达式测试器、假数据生成器和交互式数据库游乐场。
  * [Stoplight](https://stoplight.io/) - 用于 API 的协作设计和文档编制的 SaaS。免费计划提供免费的设计、模拟和文档编制工具。
  * [Svix](https://www.svix.com/) - Webhooks 即服务。免费发送高达 50,000 条消息/月。
  * [TemplateTo](https://templateto.com) - 使用我们的拖放编辑器和简单 API，从可重复使用的模板自动生成 PDF/TXT 文档。免费计划每月提供 450 份 PDF 和三个模板。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能免费，无使用限制。
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、交付和管理 API。具有高级 API 日志聚合、可观察性、文档和调试功能。所有功能都是免费的，但免费层对每月请求的限制高达 250k。
  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方 Webhook 并在本地主机（ngrok 风格）上调试它们的工具。开源且可自托管。免费个人域名*username*.github.webhook.store，免费公共域名*anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai)——开发者优先的 MLOps 平台。通过实验跟踪、数据集版本控制和模型管理更快地构建更好的模型。免费层仅适用于个人项目，其中包括 100GB 的存储空间。
  * [wit.ai](https://wit.ai/)——面向开发者的 NLP。
  * [wolfram.com](https://wolfram.com/language/)——基于云的内置知识型算法。
  * [wrapapi.com](https://wrapapi.com/)——将任何网站转换为参数化 API。每月 30k API 调用。
  * [ZenRows](https://www.zenrows.com/)——网络抓取 API 和代理服务器，可绕过任何反机器人解决方案，同时提供 JavaScript 渲染、旋转代理和地理定位。免费层为 1000 次 API 调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api)——具有无头浏览器、住宅 IP 和简单定价的网络抓取 API。每月一千次免费 API 调用，学生和非营利组织有额外信用。
  * [ip-api](https://ip-api.com)——IP 地理位置 API，免费供非商业使用，无需 API 密钥，免费计划每个 IP 地址每分钟限制为 45 个请求。
  * [WebScraping.AI](https://webscraping.ai) - 具有内置解析、Chrome 渲染和代理的简单 Web 抓取 API。每月两千次免费 API 调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费的邮政编码 API，可访问全球邮政编码数据。每月十万次免费请求。
  * [huggingface.co](https://huggingface.co) - 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。免费使用高达 30k 输入字符/月。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的 VAT 号码验证 API。每月五百次免费请求。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100k 次免费请求。
  * [Volca](https://volca.io#api) - 免费 API，提供编程语言和数据库系统等技术列表。无限免费请求。
  * [Query.me](https://query.me) - 协作数据笔记本，执行类似脚本的操作，并允许通过 SQL、API 和许多自定义块（如 Slack 和电子邮件）获取和发送数据。免费适用于小团队。
  * [ERD Lab](https://www.erdlab.io)——免费的基于云的开发者实体关系图 (ERD) 工具。
  * [What The Diff](https://whatthediff.ai) - 由人工智能驱动的代码审查助手。免费计划每月有 25,000 个令牌限制（约 10 个 PR）。
  * [Zipcodestack](https://zipcodestack.com) - 免费的邮政编码 API 和邮政编码验证。每月十万次免费请求。
  * [Zuplo](https://zuplo.com/) - 在几分钟内为任何 API 添加 API 密钥身份验证、速率限制和开发人员文档。免费计划提供最多 10 个项目、无限的生产边缘环境、250 个 API 密钥、100K 每月请求和 1GB 出口。
  * [OpenWeb Ninja](https://www.openwebninja.com/) - 全面的实时 SERP 和公共数据 API：谷歌搜索、购物、工作、图像、镜头、新闻、谷歌地图企业/地点、评论、照片、网站电子邮件和社交联系人抓取器、亚马逊、Yelp 等。所有 API 都包含免费层，每月有 100 到 200 次免费请求。
  * [Tavily AI](https://tavily.com/) - 用于在线搜索和快速洞察以及全面研究的 API，具有组织研究结果的能力。免费层每月 1000 次请求，无需信用卡。

  * [Composio](https://composio.dev/) - AI 代理和大型语言模型的集成平台。集成代理互联网上的 200 多个工具。

**[⬆️ 返回顶部](#目录)**

## 工件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持多种包格式的工件存储库，如 Maven、Docker、Cargo、Helm、PyPI、CocoaPods 和 GitLFS。它包含包扫描工具 XRay 和 CI/CD 工具 Pipelines（以前是 Shippable），每月有 2,000 分钟的免费 CI/CD 分钟数。
  * [central.sonatype.org](https://central.sonatype.org) - Apache Maven、SBT 等构建系统的默认工件存储库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共 Maven 和 PyPi 存储库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) - 用于 Java/Maven、RedHat、Debian、Python、Ruby、Vagrant 等的简单、安全和集中式存储库服务。免费层+开源免费。
  * [jitpack.io](https://jitpack.io/) - GitHub 上 JVM 和 Android 项目的 Maven 存储库，公共项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) - 用于 Maven、RPM、DEB、PyPi、NPM 和 RubyGem 包的易于使用的存储库托管（有免费层）。
  * [repsy.io](https://repsy.io) - 1GB 免费私有/公共 Maven 存储库。
  * [Gemfury](https://gemfury.com) - Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 存储库的私有和公共工件存储库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) - 构建和扩展 AI 模型，开发、训练和部署 AI 应用程序，免费计划：公共项目，5Gb 存储，基本实例。
  * [RepoForge](https://repoforge.io) - Python、Debian、NPM 包和 Docker 注册表的私有云托管存储库。开源/public 项目的免费计划。

**[⬆️ 返回顶部](#目录)**

## 团队和协作工具

  * [3Cols](https://3cols.com/)——一款免费的基于云的代码片段管理器，适用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com)——个人、团队和商业组织存储、共享和同步敏感数据的最简单、最安全的方式。
  * [Braid](https://www.braidchat.com/)——专为团队设计的聊天应用程序。公共访问组免费，无限制的用户、历史记录和集成。此外，它还提供自托管的开源版本。
  * [cally.com](https://cally.com/)——找到会议的完美时间和日期。简单易用，适用于大小团队。
  * [Calendly](https://calendly.com)——Calendly 是连接和安排会议的工具。免费计划为每个用户提供 1 个日历连接，以及无限的会议。还提供桌面和移动应用程序。
  * [Discord](https://discord.com/)——与公共/私人房间聊天。支持 Markdown 文本、语音、视频和屏幕共享功能。免费供无限用户使用。
  * [Telegram](https://telegram.org/)——Telegram 适合所有想要快速、可靠消息传递和通话的人。商业用户和小团队可能喜欢大型群组、用户名、桌面应用程序和强大的文件共享选项。
  * [Dubble](https://dubble.so/)——免费的分步指南创建者。截屏、记录流程并与团队协作。还支持异步屏幕录制。
  * [Duckly](https://duckly.com/)——与团队实时交谈和协作。配对编程与 IDE、终端共享、语音、视频和屏幕共享。适用于小型团队。
  * [Dyte](https://dyte.io)——最适合开发者的实时视频和音频 SDK，具有协作插件，可提高生产力和参与度。免费层包括每月 10,000 分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/)——组织信息的工具。与他人分享您的笔记并共同工作。
  * [Fibery](https://fibery.io/)——连接工作区平台。免费供单个用户使用，最大磁盘空间为 2GB。
  * [Filestash](https://www.filestash.app)——类似于 Dropbox 的文件管理器，可连接多种协议和平台：S3、FTP、SFTP、Minio、Git、WebDAV、Backblaze、LDAP 等。
  * [flock.com](https://flock.com)——团队更快的沟通方式。免费无限消息、频道、用户、应用程序和集成。
  * [Gather](https://www.gather.town/)——一种更好的在线见面方式。围绕完全可定制的空间，Gather 使与您的社区共度时光变得与现实生活一样轻松。免费供最多 10 个并发用户使用。
  * [gokanban.io](https://gokanban.io)——基于语法的、无需注册的看板，可快速使用。免费，无限制。
  * [flat.social](https://flat.social)——用于团队会议和欢乐时光社交的交互式可定制空间。无限会议，免费最多 8 个并发用户。
  * [GitDailies](https://gitdailies.com)——团队在 GitHub 上的提交和拉取请求活动的每日报告。包括推送可视化工具、同伴认可系统和自定义警报生成器。免费层有无限用户、三个存储库和 3 个警报配置。
  * [gitter.im](https://gitter.im/)——用于 GitHub 的聊天。无限数量的公共和私人房间，团队最多 25 人免费。
  * [Hackmd.io](https://hackmd.io/)——用于 markdown 格式文档/文件的实时协作和编写工具。就像 Google Docs 一样，但适用于 markdown 文件。免费无限数量的“笔记”，但私人笔记和模板的协作者（邀请者）数量将受到限制[将受到限制](https://hackmd.io/pricing)。
  * [hangouts.google.com](https://hangouts.google.com/)——您所有对话的一个地方，免费，需要 Google 帐户
  * [HeySpace](https://hey.space)——具有聊天、日历、时间线和视频通话的任务管理工具。免费供最多 5 个用户使用。
  * [helplightning.com](https://www.helplightning.com/)——通过增强现实进行视频帮助。免费，无分析、加密、支持。
  * [ideascale.com](https://ideascale.com/)——允许客户提交想法和投票，1 个社区中的 25 名成员免费。
  * [Igloo](https://www.igloosoftware.com/)——用于共享文档、博客、日历等的内部门户。免费供最多 10 个用户使用。
  * [Keybase](https://keybase.io/)——Keybase 是替代 Slack 的 FOSS；它可以保护从家庭到社区到公司的每个人的聊天和文件安全。
  * [Google Meet](https://meet.google.com/)——使用 Google Meet 满足您企业的在线视频会议需求。Meet 提供安全、易于加入的在线会议。
  * [/meet for Slack](https://meetslack.com)——通过在任何频道、组或 DM 中使用/meet，直接从 Slack 启动 Google 会议。免费，无任何限制。
  * [Livecycle](https://www.livecycle.io/)——Livecycle 是一个包容性的协作平台，使跨职能产品团队和开源项目的工作流程无摩擦。
  * [Lockitbot](https://www.lockitbot.com/)——在 Slack 中预订和锁定共享资源，如房间、开发环境、服务器等。免费供最多 2 个资源使用。
  * [MarkUp](https://www.markup.io/)——MarkUp 让您可以直接在您的网站、PDF 和图像上收集反馈。
  * [Proton Pass](https://proton.me/pass)——带内置电子邮件别名、2FA 身份验证器、共享和密码的密码管理器。可在网络、浏览器扩展和移动应用程序以及桌面设备上使用。
  * [Visual Debug](https://visualdebug.com)——用于更好的客户端-开发人员通信的视觉反馈工具。
  * [meet.jit.si](https://meet.jit.si/)——一键式视频通话和屏幕共享，免费
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free)——Microsoft Teams 是一个基于聊天的数字中心，将对话、内容和应用程序汇集在一个地方，来自单一体验。免费供最多 500k 用户使用。
  * [Miro](https://miro.com/)——可扩展、安全、跨设备和企业就绪的协作白板，适用于分布式团队。提供免费增值计划。
  * [nootiz](https://www.nootiz.com/)——收集和管理任何网站上视觉反馈的首选工具。
  * [Notion](https://www.notion.so/)——具有 markdown 支持的笔记记录和协作应用程序。该公司将该应用程序描述为笔记记录、项目管理和任务管理的一体化工作空间。除了跨平台应用程序，还可以通过大多数网络浏览器访问它。
  * [Nuclino](https://www.nuclino.com)——适用于团队的轻量级协作 wiki，可用于所有团队的知识、文档和笔记。免费计划提供所有基本功能，最多 50 个项目和 5GB 存储空间。
  * [OnlineInterview.io](https://onlineinterview.io/)——免费的代码面试平台，带有嵌入式视频聊天、绘图板和在线代码编辑器，您可以在浏览器中编译和运行代码。您可以一键创建远程面试室。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets)——适用于团队的简单时间表和时间跟踪应用程序。免费计划具有时间跟踪和生成报告功能，最多适用于 10 个用户。
  * [PageShare.dev](https://www.pageshare.dev)——为 GitHub 的 Pull 请求添加视觉审查功能，无需部署网站。免费供每月最多 10 页和总计 100MB 的存储。
  * [Pendulums](https://pendulums.io/)——Pendulums 是一款免费的时间跟踪工具，具有易于使用的界面和有价值的统计信息，可帮助您更好地管理时间。
  * [Pumble](https://pumble.com)——免费团队聊天应用程序。无限用户和消息历史记录，永久免费。
  * [Raindrop.io](https://raindrop.io)——适用于 macOS、Windows、Android、iOS 和 Web 的私有和安全书签应用程序。免费无限书签和协作。
  * [element.io](https://element.io/)——基于 Matrix 的去中心化和开源通信工具。群聊、直接消息、加密文件传输、语音和视频聊天以及与其他服务的轻松集成。

  * [seafile.com](https://www.seafile.com/)——私人或云存储、文件共享、同步、讨论。云版本只有 1GB
  * [Sema](https://www.semasoftware.com/)——免费的开发者投资组合工具，能够将多个存储库中的贡献合并并捕捉到单个报告中。
  * [Slab](https://slab.com/)——一个现代的团队知识管理服务。最多可供 10 名用户免费使用。
  * [slack.com](https://slack.com/)——无限用户免费，但有一些功能限制
  * [Spectrum](https://spectrum.chat/)——免费创建公共或私人社区。
  * [StatusPile](https://www.statuspile.com/)——一个状态页面的状态页面。你能跟踪你的上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/)——用于头脑风暴、内容整理和笔记的可视化协作应用程序。最多可供 3 个墙、无限用户和 1GB 存储空间免费使用。
  * [talky.io](https://talky.io/)——免费的小组视频聊天。匿名。点对点。无需插件、注册或支付
  * [Teamhood](https://teamhood.com/)——免费的项目、任务和问题跟踪软件。支持带有泳道的看板和完整的 Scrum 实现。集成了时间跟踪。免费供五名用户和三个项目组合使用。
  * [Teamplify](https://teamplify.com)——通过团队分析和智能每日站立会议改进团队开发流程。包括远程优先团队的全功能假期管理。免费供最多 5 名用户的小团体使用。
  * [Tefter](https://tefter.io)——带有强大 Slack 集成的书签应用程序。免费供开源团队使用。
  * [TeleType](https://teletype.oorja.io/)——共享终端、语音、代码、电子白板等。开发人员无需登录即可进行端到端加密协作。
  * [TimeCamp](https://www.timecamp.com/)——无限用户的免费时间跟踪软件。轻松与 Jira、Trello、Asana 等 PM 工具集成。
  * [Teamcamp](https://www.teamcamp.app)——适用于软件开发公司的一体化项目管理应用程序。
  * [twist.com](https://twist.com/)——一种异步友好的团队通信应用程序，其中对话保持井井有条且主题明确。免费和无限计划可供使用。为符合条件的团队提供折扣。
  * [tldraw.com](https://tldraw.com/)——免费的开源白板和绘图工具，具有智能箭头、捕捉、便签和 SVG 导出功能。支持多人协作编辑的多人模式。也有免费的官方 VS Code 扩展。
  * [BookmarkOS.com](https://bookmarkos.com/)——免费的一体化书签管理器、选项卡管理器和任务管理器，具有可定制的在线桌面和文件夹协作功能。
  * [typetalk.com](https://www.typetalk.com/)——通过网络或移动设备上的即时消息与团队分享和讨论想法。
  * [Tugboat](httpshttps://tugboat.qa)——自动和按需预览每个拉取请求。免费供所有人使用，非盈利组织提供免费的 Nano 层。
  * [whereby.com](https://whereby.com/)——一键式视频对话，免费（原称为 appear.in）
  * [windmill.dev](https://windmill.dev/)——Windmill 是一个开源的开发者平台，用于从最小的 Python 和 Typescript 脚本快速构建生产级的多步骤自动化和内部应用程序。作为免费用户，您最多可以创建和成为三个非高级工作空间的成员。
  * [vadoo.tv](https://vadoo.tv/)——简单的视频托管和营销。一键上传视频。记录、管理、共享等。免费层提供最多 10 个视频、1GB 存储和 10GB 带宽/每月
  * [userforge.com](https://userforge.com/)——相互关联的在线角色、用户故事和上下文映射。有助于保持设计和开发的同步，最多可供 3 个角色和两个协作者免费使用。
  * [wistia.com](httpshttps://wistia.com/)——具有查看者分析、高清视频交付和营销工具的视频托管，可帮助您了解访问者，25 个视频和 Wistia 品牌播放器
  * [wormhol.org](https://www.wormhol.org/)——直接的文件共享服务。与任意数量的同行共享高达 5GB 的无限文件。
  * [Wormhole](httpshttps://wormhole.app/)——使用端到端加密共享文件，长达 24 小时。对于大于 5GB 的文件，它使用点对点传输直接发送您的文件。
  * [zoom.us](https//zoom.us/)——提供安全的视频和网络会议附加组件。免费计划限制为 40 分钟。
  * [Zulip](httpshttps://zulip.com/)——具有独特的电子邮件式线程模型的实时聊天。免费计划包括 10,000 条消息搜索历史和最多 5GB 的文件存储。还提供自托管的开源版本。
  * [robocorp.com](https//robocorp.com/)——用于推动自动化运维的开源堆栈。免费试用云功能并实现简单自动化。机器人工作 240 分钟/月，10 个助手运行，存储 100MB。
  * [Fleep.io](httpshttps://fleep.io/)——Fleep 是 Slack 的替代品。它为小型团队提供免费计划，其中包括完整的消息历史记录、无限的 1:1 对话、1 个组对话和 1GB 文件存储。
  * [Chanty.com](httpshttps://chanty.com/)——Chanty 是 Slack 的另一种替代品。它为小型团队（最多 10 人）提供免费的永久计划，包括无限的公共和私人对话、可搜索的历史记录、无限的 1:1 音频通话、无限的语音消息、10 个集成和每个团队 20GB 的存储。
  * [ruttl.com](httpshttps://ruttl.com/)——收集数字反馈和评论网站、PDF 和图像的最佳一体化反馈工具。
  * [Mattermost](httpshttps://mattermost.com/)——面向技术团队的安全协作。免费计划包括无限频道、剧本、看板、用户、10GB 存储等。
  * [Webvizio](httpshttps://webvizio.com/)——网站反馈工具、网站审查软件和错误报告工具，可简化直接在实时网站和网络应用程序、图像、PDF 和设计文件上的任务协作。
  * [Pullflow](httpshttps://pullflow.com/)——提供 AI 增强的平台，用于在 GitHub、Slack 和 VS Code 上进行代码审查协作。
  * [Webex](httpshttps://www.webex.com/)——视频会议，免费计划提供每次会议 40 分钟，最多 100 名参会者。
  * [RingCentral](httpshttps://www.ringcentral.com/)——视频会议，免费计划提供每次会议 50 分钟，最多 100 名参与者。
  * [GitBook](httpshttps://www.gitbook.com/)——用于捕获和记录技术知识的平台——从产品文档到内部知识库和 API。个人开发者的免费计划。
  * [transfernow](httpshttps://www.transfernow.net/)——最简单、最快和最安全的界面，用于传输和共享文件。无需订阅即可发送照片、视频和其他大文件。
  * [paste.sh](httpshttps://paste.sh/)——这是一个基于 JavaScript 和 Crypto 的简单粘贴网站。
  * [Revolt.chat](httpshttps://revolt.chat/)——[Discord](https://discord.com/)的开源替代品，尊重您的隐私。它还免费提供了 Discord 的大多数专有功能。Revolt 是一个安全快速的全功能应用程序，同时完全免费。所有功能都是免费的。它们还支持（官方和非官方）插件，这与大多数主流聊天应用程序不同。
  * [Tencent RTC](httpshttps://trtc.io/)——腾讯实时通信 (TRTC) 提供了用于组音频/视频通话的解决方案。第一年每月 10,000 分钟免费。
  * [Pastefy](httpshttps://pastefy.app/)——一个美观简洁的 Pastebin，可选客户端加密、多标签粘贴、API、突出显示的编辑器等。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统（CMS）

  * [acquia.com](https://www.acquia.com/) - Drupal 网站托管。为开发者提供免费层。还提供免费的开发工具（如 Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) - 无头 CMS。云端的内容管理和交付 API。附带一个免费的社区空间，其中包括五个用户、25K 条记录、48 种内容类型、2 个地区。
  * [Cosmic](https://www.cosmicjs.com/) - 无头 CMS 和 API 工具包。为开发者提供免费个人计划。
  * [Crystallize](https://crystallize.com) - 具有电子商务支持的无头 PIM。内置 GraphQL API。免费版包括无限用户、1000 个目录项目、5GB/月带宽和 25k/月 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层。DatoCMS 是一个基于 GraphQL 的 CMS。在较低的层，你有 100 万/月的调用。
  * [Directus](https://directus.io) - 无头 CMS。一个完全免费和开源的平台，用于在内部或云端管理资产和数据库内容。没有限制或付费墙。
  * [FrontAid](https://frontaid.io/) - 无头 CMS，将 JSON 内容直接存储在你的 Git 存储库中。没有限制。
  * [kontent.ai](https://www.kontent.ai) - 一个内容即服务平台，为你提供无头 CMS 的所有好处，同时赋予营销人员权力。开发者计划为每个用户提供两个用户、无限项目、两个环境、500 个内容项目、两种语言的交付和管理 API 以及自定义元素支持。你可以使用更详细的计划来满足你的需求。
  * [Prismic](https://www.prismic.io/) - 无头 CMS。具有完全托管和可扩展 API 的内容管理界面。社区计划为一个用户提供无限的 API 调用、文档、自定义类型、资产和地区。你下一个项目所需的一切。对于开源/开源项目，有更大的免费计划。
  * [Sanity.io](https://www.sanity.io/) - 具有开源编辑环境和实时托管数据存储的结构化内容平台。无限项目。无限管理员用户、三个非管理员用户、两个数据集、500K API CDN 请求、10GB 带宽和每个项目免费提供 5GB 资产。
  * [sensenet](https://sensenet.com) - 提供企业级解决方案的 API 优先无头 CMS，适用于各种规模的企业。开发者计划提供三个用户、500 个内容项目、三个内置角色、25+5 种内容类型、完全可访问的 REST API、文档预览生成和 Office Online 编辑。
  * [TinaCMS](https://tina.io/) - 取代 Forestry.io。开源 Git 支持的无头 CMS，支持 Markdown、MDX 和 JSON。基本套餐免费，提供两个用户。
  * [GatsbyjsCMS](https://www.gatsbyjs.com/) - Gatsby 是一个快速灵活的框架，使使用任何 CMS、API 或数据库构建网站再次变得有趣。构建和部署无服务器网站，以增加流量、提高转化率和增加收入！
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费层。GraphQL 优先 API。摆脱遗留解决方案，采用 GraphQL 原生无头 CMS - 并首先提供多渠道内容 API。
  * [Squidex](https://squidex.io/) - 为小型项目提供免费层。API/GraphQL 优先。开源，基于事件源（自动跟踪每个更改）。
  * [InstaWP](https://instawp.com/) - 在几秒钟内启动 WordPress 网站。免费层包括 5 个活动网站、500MB 空间、48 小时网站过期。
  * [Storyblok](https://www.storyblok.com) - 一个面向开发人员和营销人员的无头 CMS，适用于所有现代框架。社区（免费）层提供管理 API、可视化编辑器、十个源、自定义字段类型、国际化（无限语言/地区）、资产管理器（最多 2500 个资产）、图像优化服务、搜索查询、Webhook+250GB 流量/月。
  * [WPJack](https://wpjack.com) - 在不到 5 分钟的时间内在任何云平台上设置 WordPress！免费层包括 1 个服务器、2 个站点、免费 SSL 证书和无限的 cron 作业。没有时间限制或过期 - 你的网站，你的方式。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/)——AppInvento 是一款免费的无代码应用构建器。在自动生成的后端代码中，用户可以完全访问源代码和无限的 API 和路由，从而实现广泛的集成。免费计划包括三个项目、五个表格和一个 Google 附加组件。
  * [Cody AI](https://sourcegraph.com/cody)——Cody 是一款编码 AI 助手，它使用 AI 和对代码库的深入理解来帮助您更快地编写和理解代码。Cody 为开发人员提供了对 LLM 的选择（包括本地推理），支持各种 IDE，支持所有流行的编程语言，并提供免费计划。免费计划每月为开发人员提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动完成（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/)——借助 DhiWise 创新的代码生成技术，将 Figma 设计无缝转换为动态的 Flutter 和 React 应用程序，优化您的工作流程，帮助您以前所未有的速度打造出色的移动和 Web 体验。
  * [Codeium](https://www.codeium.com/)——Codeium 是一款免费的 AI 驱动的代码完成工具。它支持 20 多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等），并与所有主要的独立和网络 IDE 集成。
  * [Fern](https://buildwithfern.com)——编写 API 定义并将其用于在 TypeScript、Python、Java、Go 等流行语言中生成 SDK/client 库。完全支持 OpenAPI。免费层最多可生成 20 个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama)——仅适用于 C#。Metalama 在编译时动态生成代码的样板，从而使您的源代码保持整洁。它对开源项目免费，其商业友好的免费层包括三个方面。
  * [Supermaven](https://www.supermaven.com/)——Supermaven 是适用于 VSCode、JetBrains 和 Neovim 的快速 AI 代码完成插件。免费层提供无限的内联完成。
  * [tabnine.com](https://www.tabnine.com/)——Tabnine 通过提供从世界上所有代码中学习到的见解，帮助开发人员更快地创建更好的软件。提供插件。
  * [v0.dev](https://v0.dev/)——v0 使用 AI 模型根据简单的文本提示生成代码。它根据 shadcn/ui 和 Tailwind CSS 生成可复制粘贴的友好 React 代码，人们可以在项目中使用。每次生成至少需要 30 个信用点。您开始时有 1200 个信用点，并且每月获得 200 个免费信用点。


**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/)——一个完整的工作流程，用于编写、审查和部署代码），一个免费帐户供一个用户使用，以及一个存储量为 100MB 的存储库
  * [browserling.com](https://www.browserling.com/)——实时交互式跨浏览器测试，免费，只有 3 分钟的会话，在 Vista 下分辨率为 1024 x 768，支持 MS IE 9
  * [codacy.com](https://www.codacy.com/)——针对 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 的自动化代码审查，对于无限的公共和私有存储库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev)——用于 DevOps 的自动化基础架构即代码审查工具，与 GitHub、Bitbucket 和 GitLab 集成（甚至是自托管的）。除了标准语言，它还分析 Ansible、Terraform、CloudFormation、Kubernetes 等。（开源免费）
  * [CodeBeat](https://codebeat.co)——适用于多种语言的自动化代码审查平台。免费版永久适用于带有 Slack 和电子邮件集成的公共存储库。
  * [codeclimate.com](https://codeclimate.com/)——自动化代码审查，对于开源和组织拥有的私有存储库（最多 4 个协作者）免费。对于学生和机构也免费。
  * [codecov.io](https://codecov.io/)——代码覆盖率工具（SaaS），对于开源和一个免费的私有存储库免费
  * [CodeFactor](https://www.codefactor.io)——针对 Git 的自动化代码审查。免费版本包括无限用户、公共存储库和一个私有存储库。
  * [coderabbit.ai](https://coderabbit.ai)——由人工智能驱动的代码审查工具，与 GitHub/GitLab 集成。免费层包括每小时 200 个文件、每小时 3 次审查和每小时 50 次对话。对于开源项目免费永久。
  * [codescene.io](https://codescene.io/)——CodeScene 根据开发人员处理代码的方式优先处理技术债务，并可视化组织因素，如团队耦合和系统掌握。对于开源免费。
  * [CodSpeed](https://codspeed.io)——在您的 CI 管道中自动跟踪性能。通过精确和一致的指标，在部署前捕捉性能回归。对于开源项目免费永久。
  * [coveralls.io](https://coveralls.io/)——显示测试覆盖报告，对于开源免费
  * [dareboost](https://dareboost.com)——每月免费提供 5 份针对网络性能、可访问性和安全性的分析报告
  * [deepcode.ai](https://www.deepcode.ai)——DeepCode 基于人工智能发现错误、安全漏洞、性能和 API 问题。DeepCode 的分析速度允许我们在您的 IDE 中点击保存按钮时实时分析您的代码并提供结果。支持的语言包括 Java、C/C++、JavaScript、Python 和 TypeScript。与 GitHub、BitBucket 和 GitLab 集成。对于开源和私有存储库以及最多 30 个开发人员免费。
  * [deepscan.io](https://deepscan.io/)——针对 JavaScript 代码的高级静态分析，对于开源免费
  * [DeepSource](https://deepsource.io/)——DeepSource 持续分析源代码更改，查找和修复分类为安全、性能、反模式、错误风险、文档和样式的问题。与 GitHub、GitLab 和 Bitbucket 原生集成。
  * [DiffText](https://difftext.com)——立即找到两个代码块之间的差异。完全免费使用。
  * [eversql.com](https://www.eversql.com/)——EverSQL——数据库优化的#1 平台。自动获得对您的数据库和 SQL 查询的关键见解。
  * [gerrithub.io](https://review.gerrithub.io/)——针对 GitHub 存储库的 Gerrit 代码审查免费
  * [gocover.io](https://gocover.io/)——任何[Go](https://golang.org/)包的代码覆盖率
  * [goreportcard.com](https://goreportcard.com/)——Go 项目的代码质量，对于开源免费
  * [gtmetrix.com](https://gtmetrix.com/)——报告和全面的建议来优化网站
  * [holistic.dev](https://holistic.dev/)——Postgresql 优化的#1 静态代码分析器。性能、安全性和架构数据库问题自动检测服务
  * [houndci.com](https://houndci.com/)——关于 GitHub 提交的代码质量评论，对于开源免费
  * [Moderne.io](https://app.moderne.io)——自动源代码重构。Moderne 提供框架迁移、代码分析和修复以及无与伦比的大规模代码转换，因此开发人员可以将时间花在构建新事物上，而不是维护旧事物上。对于开源免费。
  * [reviewable.io](https://reviewable.io/)——针对 GitHub 存储库的代码审查，对于公共或个人存储库免费。
  * [parsers.dev](https://parsers.dev/)——作为服务的抽象语法树解析器和中间表示编译器
  * [scan.coverity.com](https://scan.coverity.com/)——针对 Java、C/C++、C#和 JavaScript 的静态代码分析，对于开源免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/)——持续检查平台，对于开源免费
  * [semanticdiff.com](https://app.semanticdiff.com/)——针对 GitHub 拉取请求和提交的编程语言感知差异，对于公共存储库免费
  * [shields.io](https://shields.io)——开源项目的质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io)——针对 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 等语言的自动化源代码分析，对于开源免费
  * [SourceLevel](https://sourcelevel.io/)——自动化代码审查和团队分析。对于开源和组织中最多 5 个协作者免费。
  * [webceo.com](https://www.webceo.com/)——SEO 工具，但也有代码验证和不同类型的设备
  * [zoompf.com](https://zoompf.com/)——修复您网站的性能，详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/)——搜索和依赖项更新通知，适用于 32 种不同的包管理器，开源免费
  * [Namae](https://namae.dev/)——在 GitHub、Gitlab、Heroku、Netlify 等各种网站上搜索您的项目名称的可用性。
  * [searchcode.com](https://searchcode.com/)——全面的基于文本的代码搜索，开源免费
  * [tickgit.com](https://www.tickgit.com/)——突出显示`TODO`注释（和其他标记），以识别值得改进的代码区域。
  * [CodeKeep](https://codekeep.io)——代码片段的 Google Keep。组织、发现和共享代码片段，具有强大的代码屏幕截图工具，带有预设模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署（CI和CD）

  * [AccessLint](https://github.com/marketplace/accesslint) - AccessLint 将自动化的网页可访问性测试引入您的开发工作流程。对于开源和教育目的是免费的。
  * [appcircle.io](https://appcircle.io) - 一个企业级移动 DevOps 平台，可自动构建、测试和发布移动应用程序，以实现更快、更高效的发布周期。免费使用，最长 30 分钟的构建时间，20 个每月构建和 1 个并发构建。
  * [appveyor.com](https://www.appveyor.com/) - Windows 的持续集成服务，开源免费
  * [Argonaut](https://argonaut.dev/) - 在您的云平台上分钟级部署应用和基础架构。支持在 Kubernetes 和 Lambda 环境中自定义和第三方应用程序的部署。免费层允许在 5 个域和 2 个用户的情况下无限制地使用应用程序和部署。
  * [bitrise.io](https://www.bitrise.io/) - 适用于移动应用程序的持续集成/持续部署（CI/CD），无论是原生还是混合应用。每月有 200 次免费构建、10 分钟构建时间和两个团队成员。OSS 项目获得 45 分钟构建时间、+1 并发性和无限的团队规模。
  * [buddy.works](https://buddy.works/) - 具有五个免费项目和一个并发运行（每月 120 次执行）的 CI/CD
  * [Buildkite](https://buildkite.com) CI 管道免费供 3 个用户和 5k 作业分钟/月。测试分析免费开发者层包括每月 100 万次测试执行，对于开源项目还有更多免费功能。
  * [bytebase.com](https://www.bytebase.com/) - 数据库 CI/CD 和 DevOps。免费使用人数少于 20 人，数据库实例数少于 10 个。
  * [CircleCI](https://circleci.com/) - 全面的免费计划，其中包含在托管的 CI/CD 服务中针对 GitHub、GitLab 和 BitBucket 存储库的所有功能。多个资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试拆分、Docker 层缓存等高级 CI/CD 功能。免费使用时间为每月最多 6000 分钟，无限制的协作者，私有项目中的 30 个并行作业，以及开源项目的 80,000 个免费构建分钟。
  * [cirrus-ci.org](https://cirrus-ci.org) - 免费用于公共 GitHub 存储库
  * [cirun.io](https://cirun.io) - 免费用于公共 GitHub 存储库
  * [codefresh.io](https://codefresh.io) - 终身免费计划：1 次构建、1 个环境、共享服务器、无限公共存储库
  * [codemagic.io](https://codemagic.io/) - 每月免费 500 次构建
  * [codeship.com](https://codeship.com/) - 100 个私有构建/月，5 个私有项目，开源免费
  * [deploybot.com](https://www.deploybot.com/) - 1 个存储库，10 次部署，开源免费
  * [deployhq.com](https://www.deployhq.com/) - 1 个项目，每天 10 次部署（每月 30 次构建）
  * [drone](https://cloud.drone.io/) - Drone Cloud 使开发人员能够在多个架构（包括 x86 和 Arm（32 位和 64 位））上运行持续交付管道，全都在一个地方
  * [LayerCI](https://layerci.com) - 适用于全栈项目的 CI。一个具有 5GB 内存和 3 个 CPU 的全栈预览环境。
  * [semaphoreci.com](https://semaphoreci.com/) - 开源免费，每月 100 个私有构建
  * [Squash Labs](https://www.squash.io/) - 为每个分支创建一个 VM，并使您的应用程序可从一个唯一的 URL 访问，无限的公共和私有存储库，最多 2GB VM 大小。
  * [styleci.io](https://styleci.io/) - 仅适用于公共 GitHub 存储库
  * [Mergify](https://mergify.io) - GitHub 的工作流程自动化和合并队列 - 免费用于公共 GitHub 存储库
  * [Make](https://www.make.com/en) - 工作流程自动化工具，可让您使用 UI 连接应用程序并自动化工作流程。它支持许多应用程序和最流行的 API。免费用于公共 GitHub 存储库，以及免费套餐，包括 100Mb、1000 次操作和 15 分钟的最小间隔。
  * [Spacelift](https://spacelift.io/) - 基础架构即代码 (IaC) 的管理平台。免费计划功能包括：IaC 协作、Terraform 模块注册表、ChatOps 集成、使用 Open Policy Agent 进行持续资源合规性、使用 SAML 2.0 的单点登录以及访问公共工作者池：最多 200 分钟/月
  * [microtica.com](https://microtica.com/) - 具有即用型基础设施组件的启动环境，可免费在 AWS 上部署应用程序，并支持您的生产工作负载。免费层包括 1 个环境（在您的 AWS 账户上）、2 个 Kubernetes 服务、每月 100 个构建分钟和每月 20 个部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、任务在机器上的分布甚至自动拆分端到端测试运行等功能，加快您的 monorepos 在 CI 上的速度。它提供了一个免费计划，最多可容纳 30 名贡献者，并包含慷慨的 150k 信用额度。
  * [blacksmith](https://www.blacksmith.sh/) - 用于 GitHub Actions 的托管性能运行器，每月提供 3000 分钟的免费时间，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate 是一个用于基础架构即代码 (IaC) 工具（如 Terraform、OpenTofu 和 Terragrunt）的编排和管理平台。免费使用，最多 2 个用户，包括所有功能。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/)——智能视觉验证工具，适用于网络、原生移动和桌面应用程序。几乎与所有自动化解决方案（如 Selenium 和 Karma）和远程运行器（Sauce Labs、Browser Stack）集成。开源免费。对于每周有一定数量检查点限制的单个用户提供免费层级。
  * [Appetize](https://appetize.io/)——在基于云的 Android 手机/平板电脑模拟器和 iPhone/iPad 模拟器上直接在您的浏览器中测试您的 Android 和 iOS 应用程序。免费层包括两个并发会话，每月使用 30 分钟。无应用程序大小限制。
  * [Apptim](https://apptim.com/)——一款移动测试工具，使没有性能工程技能的人员能够评估应用程序的性能和用户体验（UX）。使用您自己的设备的桌面版本完全免费，在 iOS 和 Android 上无限制测试。
  * [Bencher](https://bencher.dev/)——一款持续基准测试工具套件，用于捕获 CI 性能回归。对所有公共项目免费。
  * [BugBug](https://bugbug.io/)——用于 Web 应用程序的轻量级测试自动化工具。易于学习，无需编码。您可以在自己的计算机上免费运行无限次测试。您还可以获得云监控和 CI/CD 集成，但需要额外支付月费。
  * [lambdatest.com](https://www.lambdatest.com/)——在 selenium 和 cypress 上进行手动、视觉、屏幕截图和自动化浏览器测试，[对开源免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [browserstack.com](https://www.browserstack.com/)——手动和自动化浏览器测试，[对开源免费](https://www.browserstack.com/open-source?ref=pricing)
  * [checkbot.io](https://www.checkbot.io/)——浏览器扩展，用于测试您的网站是否遵循 50 多个 SEO、速度和安全最佳实践。免费层适用于较小的网站。
  * [Checkly](https://checklyhq.com)——用于现代 DevOps 的代码优先合成监控。以传统提供商成本的一小部分监控您的 API 和应用程序。开发人员有慷慨的免费层。
  * [cypress.io](https://www.cypress.io/)——在浏览器中运行的任何内容的快速、简单和可靠的测试。Cypress Test Runner 始终免费且开源，没有任何限制和限制。Cypress Dashboard 对开源项目的免费使用最多可容纳 5 个用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/)——在您的浏览器上创建基于人工智能的 Cypress 测试/POM 模型。它是开源的，人工智能部分除外。对于有自我修复脚本、电子邮件和视觉测试的五个每月测试创建，它是免费的。
  * [everystep-automation.com](https://www.everystep-automation.com/)——记录和重放在网络浏览器中执行的所有步骤，并创建脚本，免费但选项较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software)——Gremlin 的混沌工程工具允许您安全地将故障注入系统，以在它们导致面向客户的问题之前发现弱点。Gremlin Free 提供对多达 5 个主机或容器的关闭和 CPU 攻击的访问权限。
  * [gridlastic.com](https://www.gridlastic.com/)——具有免费计划的 Selenium 网格测试，最多可同时使用 4 个 Selenium 节点/10 个网格启动/4000 个测试分钟/月
  * [katalon.com](https://katalon.com)——提供测试平台，可帮助不同测试成熟度级别的各种规模团队，包括 Katalon Studio、TestOps（包括视觉测试免费）、TestCloud 和 Katalon Recorder。
  * [Keploy](https://keploy.io/)——Keploy 是面向开发人员的功能测试工具包。记录 API 调用会为 API（KTests）生成端到端测试，并模拟或存根（KMocks）。对于开源项目免费。
  * [loadmill.com](https://www.loadmill.com/)——通过分析网络流量自动创建 API 和负载测试。免费每月模拟最多 50 个并发用户长达 60 分钟。
  * [octomind.dev](https://www.octomind.dev/)——使用人工智能辅助的测试用例生成自动生成、运行和维护 Playwright UI 测试。
  * [preflight.com](https://preflight.com)——无代码自动化网络测试。在您的浏览器上记录测试，该测试对 UI 更改具有弹性，并在 Windows 计算机上运行。可以与您的 CI/CD 集成吗？免费计划包括 50 个每月测试运行，带有视频、HTML 会话等。
  * [Argos](https://argos-ci.com)——面向开发人员的开源视觉测试。无限项目，每月 5000 张屏幕截图。开源项目免费。
  * [percy.io](https://percy.io)——为任何网络应用程序、静态站点、样式指南或组件库添加视觉测试。无限团队成员、演示应用程序和无限项目，每月 5000 个快照。
  * [lost-pixel.com](https://lost-pixel.com)——您的 Storybook、Ladle、Histoire 故事和 Web Apps 的整体视觉回归测试。无限团队成员，完全免费开源，每月 7000 个快照。
  * [Repeato](https://repeato.app/)——基于计算机视觉和人工智能的无代码移动应用程序测试自动化工具。适用于原生应用程序、Flutter、React Native、Web、Ionic 等众多应用程序框架。免费计划限制为每个 iOS 10 个测试和每个 Android 10 个测试，但包括付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/)——开源 Chrome 扩展，用于拦截、重定向和模拟 HTTP 请求。具有[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API 客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向 URL、修改 HTTP 标头、模拟 API、注入自定义 JS、修改 GraphQL 请求、生成模拟 API 终结点、记录带有网络和控制台日志的会话。免费层可创建最多 10 个规则。开源免费。
  * [seotest.me](https://seotest.me/)——免费的页面 SEO 网站测试器。每天 10 次免费网站抓取。有关如何提高任何网站页面 SEO 结果的有用 SEO 学习资源和建议，无论技术如何。
  * [snippets.uilicious.com](https://snippets.uilicious.com)——它就像 CodePen 但用于跨浏览器测试。UI-licious 允许您像用户故事一样编写测试，并提供免费平台——UI-licious Snippets——允许您在 Chrome 上无限制地进行测试，无需注册，每次测试运行最多 3 分钟。发现错误了吗？您可以复制测试的唯一 URL 并将其提供给开发人员，以确切地向他们展示如何重现该错误。
  * [TestCollab](https://testcollab.com)——用户友好的测试管理软件，其免费计划包括 Jira 集成、无限项目、使用 CSV/XLSx 导入测试用例、时间跟踪和 1GB 文件存储。
  * [testingbot.com](https://testingbot.com/)——Selenium 浏览器和设备测试，[对开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/)——用于发布自动化测试结果的仪表板和使用 GitHub 实现手动测试作为代码的框架。该服务[对开源免费](https://github.com/marketplace/testspace-com)，并为 450 个每月结果提供支持。
  * [tesults.com](https://www.tesults.com)——测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发者、个人、教育工作者和小型团队可以申请超出基本免费项目的折扣和免费产品。
  * [websitepulse.com](https://www.websitepulse.com/tools/)——各种免费的网络和服务器工具。
  * [qase.io](https://qase.io)——Dev 和 QA 团队的测试管理系统。管理测试用例、组成测试运行、执行测试、跟踪缺陷和衡量影响。免费层包括所有核心功能，可用于附件的 500MB 和最多 3 个用户。

  * [UseWebhook.com](https://usewebhook.com) - 在浏览器中捕获和检查 Webhooks。可以转发到本地主机，也可以从历史记录中重放。免费使用。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 Webhooks、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置 Webhooks 并通过推送通知和电子邮件进行监控。
  * [Vaadin](https://vaadin.com) - 使用 Java 或 TypeScript 构建可扩展的用户界面，并使用集成的工具、组件和设计系统更快地迭代、更好地设计并简化开发过程。五年免费维护，无限项目。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用独特的 URL 调试和检查 Webhooks 和 HTTP 请求。完全免费，您可以创建无限数量的 URL 并获得建议。

**[⬆️ 返回顶部](#目录)**

## 安全性和公钥基础设施（PKI）

  * [aikido.dev](https://www.aikido.dev)——一站式应用安全平台，涵盖 SCA、SAST、CSPM、DAST、Secrets、IaC、Malware、Container scanning、EOL 等功能。免费计划包括两个用户，对 10 个存储库、1 个云、2 个容器和 1 个域进行扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor)——揭示您网络中的被入侵系统。
  * [Altcha.org](https://altcha.org/anti-spam)——一个由自然语言处理和机器学习提供支持的网站和 API 垃圾邮件过滤器。免费计划包括每个域名每天 200 次请求。
  * [atomist.com](https://atomist.com/)——一种更快、更方便的自动化各种开发任务的方式。现在处于测试阶段。
  * [Bridgecrew](https://bridgecrew.io/)——由开源工具[Checkov](https://github.com/bridgecrewio/checkov)提供支持的基础设施即代码(IaC)安全。核心 Bridgecrew 平台对于最多 50 个 IaC 资源是免费的。
  * [cloudsploit.com](https://cloudsploit.com/)——亚马逊网络服务(AWS)安全和合规性审计与监控。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/)——针对公共云基础设施的高置信度的妥协指标(IOC)，部分内容可在 github(https://github.com/unknownhad/AWSAttacks)上获得。完整列表可通过 API 获取。
  * [CodeNotary.io](https://www.codenotary.io/)——具有不可磨灭的证明来对代码、文件、目录或容器进行公证的开源平台。
  * [crypteron.com](https://www.crypteron.com/)——云优先、开发者友好的安全平台，防止.NET 和 Java 应用程序中的数据泄露。
  * [CyberChef](https://gchq.github.io/CyberChef/)——一个简单直观的网络应用程序，用于分析和解码/编码数据，无需处理复杂的工具或编程语言。就像一个加密和加密的瑞士军刀。所有功能均可免费使用，无限制。如果您希望自行托管，可以使用开源版本。
  * [DAS](https://signup.styra.com/)——Styra DAS 免费版，提供全生命周期策略管理，以创建、部署和管理开放策略代理(OPA)授权。
  * [Datree](https://www.datree.io/)——开源命令行工具，通过确保清单和 Helm 图表遵循最佳实践以及组织的策略来防止 Kubernetes 配置错误。
  * [Dependabot](https://dependabot.com/)——为 Ruby、JavaScript、Python、PHP、Elixir、Rust、Java (Maven 和 Gradle)、.NET、Go、Elm、Docker、Terraform、Git Submodules 和 GitHub Actions 自动进行依赖项更新。
  * [DJ Checkup](https://djcheckup.com)——使用此免费自动检查工具扫描您的 Django 网站的安全漏洞。从 Pony Checkup 网站分叉而来。
  * [Doppler](https://doppler.com/)——适用于应用程序秘密和配置的通用秘密管理器，支持与各种云提供商同步。免费供最多 5 个具有基本访问控制的用户使用。
  * [Dotenv](https://dotenv.org/)——快速、安全地同步您的.env 文件。停止通过不安全的渠道(如 Slack 和电子邮件)共享您的.env 文件，再也不会丢失重要的.env 文件。最多可供 3 个队友免费使用。
  * [GitGuardian](https://www.gitguardian.com)——使用自动化的秘密检测和修复功能，防止秘密进入您的源代码。扫描您的 git 存储库以查找 350 多种类型的秘密和敏感文件——个人和团队规模为 25 名开发人员或更少的团队免费。
  * [Have I been pwned?](https://haveibeenpwned.com)——用于获取有关违规信息的 REST API。
  * [hostedscan.com](https://hostedscan.com)——在线漏洞扫描程序，适用于 Web 应用程序、服务器和网络。每月免费进行 10 次扫描。
  * [Infisical](https://infisical.com/)——开源平台，可让您在团队和基础设施中管理开发人员的秘密：从本地开发到登台/生产第三方服务的各个方面。免费供最多 5 名开发人员使用。
  * [Internet.nl](https://internet.nl)——测试现代互联网标准，如 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS 和 DANE。
  * [keychest.net](https://keychest.net)——SSL 过期管理和证书购买，集成了 CT 数据库。
  * [letsencrypt.org](https://letsencrypt.org/)——免费的 SSL 证书颁发机构，受所有主要浏览器信任的证书。
  * [meterian.io](https://www.meterian.io/)——监控 Java、Javascript、.NET、Scala、Ruby 和 NodeJS 项目中的安全漏洞。免费供一个私有项目使用，开源项目无限制。
  * [Mozilla Observatory](https://observatory.mozilla.org/)——查找并修复您网站上的安全漏洞。
  * [opswat.com](https://www.opswat.com/)——计算机、设备、应用程序、配置的安全监控，免费 25 个用户和 30 天历史用户。
  * [openapi.security](https://openapi.security/)——免费工具，可快速检查任何基于 OpenAPI / Swagger 的 API 的安全性。您无需注册。
  * [pixee.ai](https://pixee.ai)——自动产品安全工程师，作为免费的 GitHub 机器人，可将 PR 提交到您的 Java 代码库，以自动解决漏洞。其他语言即将推出！
  * [pyup.io](https://pyup.io)——监控 Python 依赖项的安全漏洞并自动更新它们。免费供一个私有项目使用，开源项目无限制。
  * [qualys.com](https://www.qualys.com/community-edition)——查找 Web 应用程序漏洞，审核 OWASP 风险。
  * [report-uri.io](https://report-uri.io/)——CSP 和 HPKP 违规报告。
  * [ringcaptcha.com](https://ringcaptcha.com/)——使用电话号码作为 ID 的工具，免费提供。
  * [seclookup.com](https://www.seclookup.com/)——Seclookup API 可以丰富 SIEM 中的域名威胁指标，提供有关域名的全面信息，并提高威胁检测和响应能力。在此处[https://account.seclookup.com/]获得 50K 次查找免费。
  * [snyk.io](https://snyk.io/)——可以找到并修复您的开源依赖项中的已知安全漏洞。对开源项目无限制的测试和修复。对于您的私有项目，每月限制为 200 次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/)——对任何 SSL Web 服务器的配置进行深入分析。
  * [SOOS](https://soos.io)——免费的开源项目 SCA 扫描，无限扫描和环境。检测和修复安全威胁，然后再发布。使用简单有效的解决方案保护您的项目。
  * [StackHawk](https://www.stackhawk.com/)——在整个管道中自动执行应用程序扫描，以在安全漏洞进入生产环境之前发现并修复它们。单个应用程序的无限扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net)——免费的网站安全检查和恶意软件扫描器。
  * [Protectumus](https://protectumus.com)——免费的网站安全检查、网站防病毒和服务器防火墙(WAF)，适用于 PHP。免费层的注册用户有电子邮件通知。
  * [TestTLS.com](https://testtls.com)——测试 SSL/TLS 服务的安全服务器配置、证书、链等。不限于 HTTPS。
  * [threatconnect.com](https://threatconnect.com)——威胁情报：专为开始了解网络威胁情报的个人研究人员、分析师和组织设计。免费最多 3 个用户。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/)——自动化漏洞扫描。免费计划允许每周进行 XSS 扫描。
  * [Ubiq Security](https://ubiqsecurity.com/)——使用三行代码加密和解密数据，并自动进行密钥管理。免费供一个应用程序使用，每月最多 1,000,000 次加密。
  * [Virgil Security](https://virgilsecurity.com/)——在您的数字解决方案中实施端到端加密、数据库保护、物联网安全等的工具和服务。免费供最多 250 个用户的应用程序使用。
  * [Vulert](https://vulert.com)——Vulert 持续监控您的开源依赖项以获取新漏洞，并提供修复建议，无需安装或访问您的代码库。免费供开源项目使用。

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 在公共 GitHub 存储库、gist、问题和注释中搜索 2000 万个公开泄露的机密，免费使用

**[⬆️ 返回顶部](#目录)**

## 身份验证、授权和用户管理

  * [Aserto](https://www.aserto.com) - 细粒度授权即服务，适用于应用程序和 API。免费使用额度为 1000 MAUs 和 100 个授权器实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录、多因素身份验证、无密码身份验证等。包括适用于前端和后端应用程序的 SDK。免费使用额度为 1000 MAUs 和五个身份提供商。
  * [Auth0](https://auth0.com/) - 托管式单点登录。最多 7000 个活跃用户和两个社交身份提供商。
  * [Authgear](https://www.authgear.com) - 在几分钟内为您的应用带来无密码、OTP、2FA、单点登录等功能。所有前端均包含在内。免费使用额度为 5000 MAUs。
  * [Authress](https://authress.io/) - 身份验证登录和访问控制，适用于任何项目的无限身份提供商。Facebook、Google、Twitter 等。前 1000 次 API 调用免费。
  * [Authy](https://authy.com) - 在多个设备上进行双因素身份验证（2FA），并提供备份。可替代 Google Authenticator。免费使用额度为最多 100 次成功的身份验证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 用于编写、测试和部署访问策略的完整授权管理系统。细粒度授权和访问控制，免费使用额度为每月 100 个活跃主体。
  * [Clerk](https://clerk.com) - 用户管理、身份验证、2FA/MFA、用于登录、注册、用户个人资料等的预制 UI 组件。免费使用额度为每月 10,000 个活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak 身份和访问管理即服务。免费使用额度为最多 100 个用户和一个领域。
  * [Corbado](https://www.corbado.com/) - 将无密码身份验证添加到新的或现有的应用程序中。无限 MAUs 免费。
  * [Descope](https://www.descope.com/) - 高度可定制的身份验证流程，同时提供无代码和 API/SDK 方法，免费使用额度为每月 7500 个活跃用户，50 个租户（最多 5 个 SAML/SSO 租户）。
  * [duo.com](https://duo.com/) - 网站或应用程序的双因素身份验证（2FA）。免费使用额度为 10 个用户、所有身份验证方法、无限制的集成、硬件令牌。
  * [Kinde](https://kinde.com/) - 简单、强大的身份验证，您可以在几分钟内集成到您的产品中。开始使用所需的一切，免费提供 7500 个 MAU。
  * [logintc.com](https://www.logintc.com/) - 通过推送通知进行双因素身份验证（2FA），免费使用额度为 10 个用户、VPN、网站和 SSH。
  * [MojoAuth](https://mojoauth.com/) - MojoAuth 使您能够在几分钟内轻松实现无密码身份验证您的网络、移动或任何应用程序。
  * [Okta](https://developer.okta.com/signup/) - 用户管理、身份验证和授权。免费使用额度为每月最多 100 个活跃用户。
  * [onelogin.com](https://www.onelogin.com/) - 身份即服务（IDaaS）、单点登录身份提供商、云 SSO IdP、三个公司应用程序和五个个人应用程序，无限制用户。
  * [Ory](https://ory.sh/) - 身份验证/授权/OAuth2.0/零信任托管安全平台。具有所有安全功能的永久免费开发者帐户，无限团队成员，每天 200 个活跃用户，每月 25k/权限检查。
  * [Phase Two](https://phasetwo.io) - Keycloak 开源身份和访问管理。免费领域最多 1000 个用户，最多 10 个 SSO 连接，利用 Phase Two 的增强型 Keycloak 容器，其中包括[组织](https://phasetwo.io/product/organizations/)扩展。
  * [Stytch](https://www.stytch.com/) - 具有强大密码保护、无密码登录流程、MFA、SSO 等功能的灵活身份验证 API 和 SDK。内置电子邮件/短信发送+故障转移和欺诈保护。提供 5000 个每月活跃用户免费（B2C）或 1000 个每月活跃用户和 25 个组织免费（B2B）。
  * [Stack Auth](https://stack-auth.com) - 开源身份验证，不会让人感到厌烦。最适合开发人员的解决方案，只需五分钟即可入门。可免费自托管，或提供带有 10k 免费每月活跃用户的托管 SaaS 版本。
  * [SuperTokens](https://supertokens.com/) - 开源用户身份验证，可本机集成到您的应用程序中 - 使您能够快速入门，同时控制用户和开发人员体验。免费使用额度为最多 5000 MAUs。
  * [Warrant](https://warrant.dev/) - 为您的应用提供托管企业级授权和访问控制服务。免费层包括每月 100 万次 API 请求和 1000 个授权规则。
  * [ZITADEL Cloud](https://zitadel.com) - 一个即插即用的用户和访问管理系统，适用于您和支持多租户（B2B）用例。免费使用额度为最多 25,000 次经过身份验证的请求，具有所有安全功能（OTP、无密码、策略等无付费墙）。
  * [PropelAuth](https://propelauth.com) - 可以立即向任何规模的公司销售，只需几行代码，免费使用额度为最多 200 个用户和 10k 交易电子邮件（带有水印品牌：“由 PropelAuth 提供支持”）。
  * [Logto](https://logto.io/) - 开发、保护和管理您产品的用户身份（用于身份验证和授权）。免费使用额度为每月最多 5000 MAUs，提供开源自托管选项。
  * [WorkOS](https://workos.com/) - 免费的用户管理和身份验证，最多支持 100 万 MAUs。支持电子邮件+密码、社交身份验证、Magic Auth、MFA 等。


**[⬆️ 返回顶部](#目录)**

## 移动应用程序分发和反馈

  * [TestApp.io](https://testapp.io) - 确保移动应用正常运行的首选平台。免费计划：一个应用、分析、无限制的版本和安装次数，以及反馈收集。
  * [Loadly](https://loadly.io) - iOS 和 Android 测试版应用分发服务提供完全免费的服务，不限下载次数、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用部署到设备上。免费计划：应用上传、密码保护链接、一天有效期、十次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过空中分发 iOS 和 Android 应用。免费计划：无限制上传、私人链接、访客两天有效期、注册用户六十天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用进行测试。免费计划包括一个应用项目、三个应用版本、500MB 存储空间和每月 100 次应用安装。
  * [Appho.st](https://appho.st) - 移动应用主机平台。免费计划包括五个应用、每月 50 次下载和最大 100MB 文件大小。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) - 在 IaaS 上部署准备好的应用程序。免费管理 1 个 AWS 微实例
  - [Esper](https://esper.io) - 适用于 Android 设备的 MDM 和 MAM，带有 DevOps。一个用户许可证和 25 MB 应用程序存储可免费使用一百个设备。
  - [jamf.com](https://www.jamf.com/) - iPad、iPhone 和 Mac 的设备管理，免费提供三个设备
  - [Miradore](https://miradore.com) - 设备管理服务。保持设备车队的最新状态，并免费安全保护无限数量的设备。免费计划提供基本功能。
  - [moss.sh](https://moss.sh) - 帮助开发人员部署和管理他们的 Web 应用程序和服务器。每月免费高达 25 次 git 部署
  - [runcloud.io](https://runcloud.io/) - 主要关注 PHP 项目的服务器管理。免费最多 1 个服务器
  - [ploi.io](https://ploi.io/) - 服务器管理工具，可轻松管理和部署服务器和站点。免费一个服务器

**[⬆️ 返回顶部](#目录)**

## 消息和流

  * [Ably](https://www.ably.com/) - 具有在线状态、持久性和保证交付的实时消息服务。免费计划包括每月 300 万条消息、100 个峰值连接和 100 个峰值通道。
  * [cloudamqp.com](https://www.cloudamqp.com/) - 即 RabbitMQ 服务。小 Lemur 计划：每月最多 100 万条消息、最多 20 个并发连接、最多 100 个队列、最多 10,000 条排队消息、不同可用区的多个节点
  * [courier.com](https://www.courier.com/) - 使用推送、应用内、电子邮件、聊天、短信和其他消息通道的单一 API，并具有模板管理等功能。免费计划包括每月 10,000 条消息。
  * [engagespot.co](https://engagespot.co/) - 为开发人员提供的多渠道通知基础架构，具有内置的应用内收件箱和无代码模板编辑器。免费计划包括每月 10,000 条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的 MQTT 设备连接到云原生 IoT 消息代理。免费连接最多 100 个设备（无需信用卡）永久有效。
  * [knock.app](https://knock.app) – 开发人员的通知基础设施。使用单个 API 调用发送到多个通道，如应用内、电子邮件、SMS、Slack 和推送。免费计划包括每月 10,000 条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) - 在 5 分钟内将用户通知添加到任何软件中。免费计划包括每月 10,000 条通知+100 条 SMS 和自动呼叫。
  * [Novu.co](https://novu.co) - 开发人员的开源通知基础架构。简单的组件和 API 用于在一个地方管理所有通信渠道：电子邮件、SMS、直接、应用内和推送。免费计划包括每月 30,000 条通知，保留期为 90 天。
  * [pusher.com](https://pusher.com/) - 实时消息服务。免费用于最多 100 个同时连接和 200,000 条消息/天
  * [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费用于最多 20 个同时连接和 100,000 个事件/天
  * [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)即服务。全球、AWS、GCP 和 Azure。免费永久，4k 消息大小，50 个活动连接，每月 5GB 数据。
  * [cloudkarafka.com](https://www.cloudkarafka.com/) - 免费共享 Kafka 集群，最多 5 个主题，每个主题 10MB 数据和 28 天的数据保留期。
  * [pubnub.com](https://www.pubnub.com/) - 每月 100 万笔交易的 Swift、Kotlin 和 React 消息传递。交易可能包含多条消息。
  * [eyeson API](https://developers.eyeson.team/) - 基于 WebRTC（SFU、MCU）的视频通信 API 服务，用于构建视频平台。允许实时数据注入、视频布局、录制、功能齐全的托管网络 UI（快速入门）或自定义 UI 的包。为开发人员提供[免费层](https://apiservice.eyeson.com/api-pricing)，每月 1000 分钟会议。
  * [webpushr](https://www.webpushr.com/) - Web 推送通知 - 免费最多 10k 订户，无限推送通知，浏览器内消息传递
  * [httpsms.com](https://httpsms.com) - 使用您的 Android 手机作为 SMS 网关发送和接收文本消息。免费每月发送和接收最多 200 条消息。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可在几秒钟内扩展和安全的无服务器 MQTT 代理。每月 1M 会话分钟免费永久（无需信用卡）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费，每天最多可记录 100k 行日志，保留时间为 24 小时
  * [logentries.com](https://logentries.com/) — 免费，每月最多可记录 5GB 数据，保留时间为 7 天
  * [loggly.com](https://www.loggly.com/) — 免费，单个用户使用，每天最多可记录 200MB 数据，保留时间为 7 天
  * [logz.io](https://logz.io/) — 免费，每天最多可记录 1GB 数据，保留时间为 1 天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 由 Manage Engine 提供支持的日志管理服务。免费计划提供 50GB 存储空间，保留时间为 15 天，搜索时间为 7 天
  * [papertrailapp.com](https://papertrailapp.com/) — 搜索时间为 48 小时，存档时间为 7 天，每月 50MB
  * [sematext.com](https://sematext.com/logsene) — 每天最多可记录 500MB 数据，保留时间为 7 天
  * [sumologic.com](https://www.sumologic.com/) — 每天最多可记录 500MB 数据，保留时间为 7 天
  * [logflare.app](https://logflare.app/) — 每个应用每月最多可免费记录 12960000 条条目，保留时间为 3 天
  * [logtail.com](https://logtail.com/) — 基于 ClickHouse 的 SQL 兼容日志管理。每月最多可免费记录 1GB 数据，保留时间为 3 天
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。免费提供每月 1000 个用户活动日志，保留时间为 1 个月，最多适用于 5 个项目

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [crowdin.com](https://crowdin.com/)——无限制项目、无限制字符串和开源项目的协作者
  * [gitlocalize.com](https://gitlocalize.com)——对于私有和公共存储库都是免费且无限制的
  * [Lecto](https://lecto.ai/)——具有免费层的机器翻译 API（30 个免费请求，每个请求 1000 个已翻译字符）。与 Loco Translate Wordpress 插件集成。
  * [lingohub.com](https://lingohub.com/)——最多 3 个用户免费，开源项目永远免费
  * [localazy.com](https://localazy.com/)——免费 1000 个源语言字符串，无限制语言，无限制贡献者，创业公司和开源交易
  * [Localeum](https://localeum.com)——免费最多 1000 个字符串，一个用户，无限制语言，无限制项目
  * [localizely.com](https://localizely.com/)——开源项目免费
  * [Loco](https://localise.biz/)——免费最多 2000 个翻译，无限制翻译人员，每个项目 10 种语言，每个项目 1000 个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/)——最多 5 个用户的有限免费版，开源项目免费
  * [POEditor](https://poeditor.com/)——免费最多 1000 个字符串
  * [SimpleLocalize](https://simplelocalize.io/)——免费最多 100 个翻译键，无限制字符串，无限制语言，创业公司交易
  * [Texterify](https://texterify.com/)——单个用户免费
  * [Tolgee](https://tolgee.io)——免费 SaaS 产品，提供有限的翻译，永远免费的自托管版本
  * [transifex.com](https://www.transifex.com/)——开源项目免费
  * [Translation.io](https://translation.io)——开源项目免费
  * [Translized](https://translized.com)——免费最多 1000 个字符串，一个用户，无限制语言，无限制项目
  * [webtranslateit.com](https://webtranslateit.com/)——免费最多 500 个字符串
  * [weblate.org](https://weblate.org/)——对于自由项目是免费的，免费层的字符串源最多为 10,000，对于自由托管的内部部署是无限制的
  * [Free PO editor](https://pofile.net/free-po-editor)——免费供所有人使用

**[⬆️ 返回顶部](#目录)**

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com/) - 获得 20 个监控器，监控间隔为 5 分钟，以及可定制的状态页面-甚至可用于商业用途。通过电子邮件和 Telegram 享受无限的实时通知。无需信用卡即可开始使用。
  * [Pingmeter.com](https://pingmeter.com/) - 5 个监控器，监控间隔为 10 分钟。监控 SSH、HTTP、HTTPS 和任何自定义 TCP 端口。
  * [alerty.ai](https://www.alerty.ai) - 为 FE、BE、DB 等提供免费的 APM 和监控+免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) - 免费 24 小时指标，应用性能管理代理限制为一个 Java、一个.NET、一个 PHP 和一个 Node.js
  * [appneta.com](https://www.appneta.com/) - 免费，保留 1 小时数据
  * [appspector.com](https://appspector.com/) - 远程 iOS/Android/Flutter 调试的任务控制。小流量使用（64MB 日志）免费。
  * [assertible.com](https://assertible.com) - 自动化 API 测试和监控。团队和个人的免费计划。
  * [bleemeo.com](https://bleemeo.com/) - 免费 3 台服务器、5 个监控器、无限用户、无限仪表板、无限警报规则。
  * [checklyhq.com](https://checklyhq.com/) - 面向开发人员的开源端到端/合成监控和深度 API 监控。免费计划有 5 个用户和 50k+次检查运行。
  * [circonus.com](https://www.circonus.com/) - 免费 20 个指标
  * [cloudsploit.com](https://cloudsploit.com/) - AWS 安全和配置监控。免费：无限制的按需扫描、无限用户、无限存储的账户。订阅：自动化扫描、API 访问等。
  * [cronitor.io](https://cronitor.io/) - 对 cron 作业、网站、API 等进行性能洞察和监控。免费层有 5 个监控器。
  * [datadoghq.com](https://www.datadoghq.com/) - 最多 5 个节点免费
  * [deadmanssnitch.com](https://deadmanssnitch.com/) - 对 cron 作业进行监控。一个免费的监控器（监视器），如果您推荐其他人注册，还可以获得更多。
  * [downtimemonkey.com](https://downtimemonkey.com/) - 60 个监控器，监控间隔为 5 分钟。电子邮件、Slack 警报。
  * [economize.cloud](https://economize.cloud) - 通过组织云资源进行优化并报告相同内容，帮助用户了解云基础设施成本。免费适用于每月在 Google Cloud Platform 上花费最多 5,000 美元的情况。
  * [elastic.co](https://www.elastic.co/solutions/apm) - 为 JavaScript 开发人员提供即时性能洞察。免费，保留 24 小时数据。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud 是一个可组合的观测平台，它将指标和日志与 Grafana 集成在一起。免费：3 个用户，10 个仪表板，100 个警报，在 Prometheus 和 Graphite 中存储指标（10,000 个系列，14 天保留），在 Loki 中存储日志（50GB 日志，14 天保留）
  * [healthchecks.io](https://healthchecks.io/) - 监控 cron 作业和后台任务。免费最多 20 次检查。
  * [Hydrozen.io](https://hydrozen.io/) - 监控和状态页面，免费计划：10 个监控器，5 个心跳监控器，1 个域名监控器和 1 个状态页面免费。
  * [inspector.dev](https://www.inspector.dev) - 使用免费永久层在不到一分钟的时间内创建完整的实时监控仪表板。
  * [instrumentalapp.com](https://instrumentalapp.com/) - 具有最多 500 个指标和 3 小时数据可见性的免费应用程序和服务器监控，使用方便。
  * [keychest.net/speedtest](https://keychest.net/speedtest) - 针对 Digital Ocean 的独立速度测试和 TLS 握手延迟测试。
  * [letsmonitor.org](https://letsmonitor.org/) - SSL 监控，最多 5 个监控器免费。
  * [linkok.com](https://linkok.com/) - 在线断链检查，免费适用于最多 100 页的小型网站，对开源项目完全免费。
  * [loader.io](https://loader.io/) - 具有限制的免费负载测试工具。
  * [netdata.cloud](https://www.netdata.cloud/) - Netdata 是一个收集实时指标的开源工具。它是一个不断发展的产品，也可以在 GitHub 上找到！
  * [newrelic.com](https://www.newrelic.com) - 旨在帮助工程师创建更完美软件的 New Relic 观测平台。从单体到无服务器，您可以对所有内容进行仪器化，然后分析、排查和优化整个软件堆栈。免费层提供 100GB/月的免费数据摄入，一个免费的全访问用户和无限的免费主用户。
  * [Middleware.io](https://middleware.io/) - 中间件观测平台提供对应用程序和堆栈的完整可见性，以便您可以大规模监控和诊断问题。他们为开发人员社区提供免费的永久计划，允许 Log 监控最多 1M 日志事件，基础设施监控和 APM 最多 2 台主机。
  * [nixstats.com](https://nixstats.com/) - 免费 1 台服务器。电子邮件通知、公共状态页面、60 秒间隔等。
  * [OnlineOrNot.com](https://onlineornot.com/) - 提供网站和 API 的在线监控，以及 cron 作业和计划任务的监控。还提供状态页面。免费层通过 Slack、Discord 和电子邮件发送警报。前五个检查间隔为 3 分钟。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) - 检查网站是否被中国的防火墙阻止。它通过比较中国服务器和美国服务器检测到的 DNS 结果和 ASN 信息来识别 DNS 污染。
  * [opsgenie.com](https://www.opsgenie.com/) - 用于始终在线服务的强大警报和值班管理。免费最多 5 个用户。
  * [paessler.com](https://www.paessler.com/) - 强大的基础设施和网络监控解决方案，包括警报、强大的可视化功能和基本报告。免费最多 100 个传感器。
  * [pagecrawl.io](https://pagecrawl.io/) - 监控网站更改，免费最多 6 个监控器，每日检查。
  * [syagent.com](https://syagent.com/) - 非商业免费服务器监控服务，提供警报和指标。
  * [pagerly.io](https://pagerly.io/) - 在 Slack 上管理值班（与 Pagerduty、OpsGenie 集成）。免费最多 1 个团队（一个团队指一个值班）
  * [pagertree.com](https://pagertree.com/) - 用于警报和值班管理的简单界面。免费最多 5 个用户。
  * [pingbreak.com](https://pingbreak.com/) - 现代的监控服务。检查无限数量的 URL，并通过 Discord、Slack 或电子邮件获取停机通知。
  * [pingpong.one](https://pingpong.one/) - 具有监控功能的高级状态页面平台。免费层包括一个带有 SSL 子域的公共可定制状态页面。Pro 计划免费提供给开源项目和非营利组织。
  * [robusta.dev](https://home.robusta.dev/) - 基于 Prometheus 的强大 Kubernetes 监控。自带 Prometheus 或安装一体机捆绑包。免费层包括最多 20 个 Kubernetes 节点。通过 Slack、Microsoft Teams、Discord 等发送警报。与 PagerDuty、OpsGenie、VictorOps、DataDog 等众多工具集成。
  * [sematext.com](https://sematext.com/) - 免费 24 小时指标，无限服务器，10 个自定义指标，500,000 个自定义指标数据点，无限仪表板，用户等。
  * [sitemonki.com](https://sitemonki.com/) - 网站、域、Cron 和 SSL 监控，每个类别免费 5 个监控器。
  * [sitesure.net](https://sitesure.net/) - 网站和 cron 监控-免费 2 个监控器。
  * [skylight.io](https://www.skylight.io/) - 免费前 100,000 个请求（仅限 Rails）
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) - 性能监控 API，检查 Ping、DNS 等。
  * [stathat.com](https://www.stathat.com/) - 免费开始使用 10 个统计数据，无到期日
  * [statuscake.com](https://www.statuscake.com/) - 网站监控，免费测试，限制
  * [statusgator.com](https://statusgator.com/) - 状态页面监控，免费 3 个监控器

  * [thousandeyes.com](https://www.thousandeyes.com/) - 网络和用户体验监控。免费提供 3 个地点和 20 个主要网络服务的数据Feed
  * [uptimerobot.com](https://uptimerobot.com/) - 网站监控，免费提供 50 个监视器
  * [uptimetoolbox.com](https://uptimetoolbox.com/) - 免费监控 5 个网站，间隔 60 秒，提供公共状态页面
  * [zenduty.com](https://www.zenduty.com/) - 端到端事件管理、警报、值班管理和响应编排平台，适用于网络运营、站点可靠性工程和 DevOps 团队。免费最多供 5 个用户使用
  * [instatus.com](https://instatus.com) - 在 10 秒内获得漂亮的状态页面。无限子账户和无限团队永久免费
  * [Squadcast.com](https://squadcast.com) - Squadcast 是一款端到端事件管理软件，旨在帮助您推广 SRE 最佳实践。提供长达 10 个用户的免费永久计划
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri 是一个稳定的正常运行时间监视器，提供广泛的监视器：cronjob、关键字、网站、端口、ping。免费提供 25 次正常运行时间检查，间隔 3 分钟检查。通过电话呼叫、短信、电子邮件和 Webhooks 进行警报
  * [Better Stack](https://betterstack.com/better-uptime) - 单一产品中提供正常运行时间监控、事件管理、值班调度/警报和状态页面。免费计划包括 10 个监视器，检查频率为 3 分钟，状态页面
  * [Pulsetic](https://pulsetic.com) - 10 个监视器，6 个月的历史正常运行时间/日志，无限状态页面和自定义域！免费无限时间和无限电子邮件警报。您不需要信用卡
  * [Wachete](https://www.wachete.com) - 监控 5 个页面，每 24 小时检查一次
  * [Xitoring.com](https://xitoring.com/) - 正常运行时间监控：20 个免费，Linux 和 Windows Server 监控：5 个免费，状态页面：1 个免费 - 移动应用程序，多个通知渠道等

**[⬆️ 返回顶部](#目录)**

## Crash and Exception Handling

  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误跟踪，带有屏幕截图和点击轨迹。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) - 初始试用后，每月免费提供高达 2,000 个错误
  * [elmah.io](https://elmah.io/) - 网络开发人员的错误日志记录和正常运行时间监控。开源项目的免费小型企业订阅。
  * [Embrace](https://embrace.io/) - 移动应用监控。小型团队每年最多 100 万用户会话免费。
  * [exceptionless](https://exceptionless.com) - 实时错误、功能、日志报告等。每月免费 3k 事件/1 用户。开源且易于自行托管，无使用限制。
  * [GlitchTip](https://glitchtip.com/) - 简单的开源错误跟踪。与开源 Sentry SDK 兼容。每月免费 1000 个事件，或可无限制自托管。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、正常运行时间和 cron 监控。小型团队和开源项目免费（每月 12,000 个错误）。
  * [memfault.com](https://memfault.com) - 云设备可观察性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费 100 个。
  * [rollbar.com](https://rollbar.com/) - 异常和错误监控，免费计划每月 5,000 个错误，无限制用户，保留 30 天
  * [sentry.io](https://sentry.io/) - Sentry 实时跟踪应用程序异常，有一个小型免费计划。每月免费 5k 个错误/1 用户，自托管则无限制使用。
  * [Axiom](https://axiom.co/) - 存储长达 0.5 TB 的日志，保留 30 天。包括与 Vercel 等平台的集成以及通过电子邮件/Discord 通知进行高级数据查询。
  * [Semaphr](https://semaphr.com) - 移动应用的一体化 Kill Switch。
  * [Jam](https://jam.dev) - 一键式开发者友好的错误报告。免费计划无限 Jams。
  * [Whitespace](https://whitespace.dev) - 在浏览器中一键式错误报告。免费计划个人使用无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) - 提供具有容错性、相关性和用户界面库的托管搜索解决方案，可轻松创建搜索体验。免费的“Build”计划包括 100 万份文档和 10,000 次搜索/月。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) - 免费 1GB 内存和 1GB 存储空间
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏即服务，基于网络的用户界面小部件/插件，允许用户在产品中搜索内容、导航、功能等，有助于提高可发现性。对于多达 1000 名每月活跃用户免费，无限制命令。
  * [Magny](https://magny.io) - SaaS 服务，有助于实现命令调色板（例如应用内搜索），显著减少用户在应用中查找任何内容的时间，利用用户体验和效率。
  * [searchly.com](http://www.searchly.com/) - 免费 2 个索引和 20MB 存储空间

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 提供数据分析、信息安全、Web 开发等免费课程和认证的开源平台。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源的平台，课程重点是 JavaScript 和 Ruby 用于 Web 开发。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，有大量经验丰富的专业人士的简历模板，可完全克隆、编辑和下载，符合 ATS 优化。
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 行业领先专家提供的免费短期课程，在一小时或更短时间内获得最新生成式 AI 工具和技术的实践经验。
  * [LabEx](https://labex.io) - 通过互动实验室和实际项目，在 Linux、DevOps、网络安全、编程、数据科学等方面发展技能。
  * [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到用户体验设计等各个方面发展的免费学习路线图。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费的与认证相关的课程，主题包括网络安全、网络和 Python。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 是 2500 多门 MIT 课程材料的在线出版物，与世界各地的学习者和教育工作者免费分享知识。Youtube 频道可在 [@mitocw](https://www.youtube.com/@mitocw/featured) 找到

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费的临时电子邮件，用于测试。
  * [AhaSend](https://ahasend.com) - 交易电子邮件服务，每月免费 1000 封电子邮件，免费计划中无限制域名、团队成员、Webhooks 和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名电子邮件转发，可免费创建无限个电子邮件别名
  * [Antideo](https://www.antideo.com) - 免费层每小时可进行 10 次 API 请求，用于电子邮件验证、IP 和电话号码验证。无需信用卡。
  * [Brevo](https://www.brevo.com/) - 每月 9000 封电子邮件，每天 300 封电子邮件免费
  * [Bump](https://bump.email/) - 免费 10 个 Bump 电子邮件地址，一个自定义域名
  * [Burnermail](https://burnermail.io/) - 免费 5 个燃烧器电子邮件地址，1 个邮箱，7 天邮箱历史记录
  * [Buttondown](https://buttondown.email/) - 新闻通讯服务。免费提供最多 100 个订阅者
  * [CloudMailin](https://www.cloudmailin.com/) - 通过 HTTP POST 接收电子邮件和事务性出站 - 每月免费 10,000 封电子邮件
  * [Contact.do](https://contact.do/) - 链接中的联系表单（bitly 用于联系表单）
  * [debugmail.io](https://debugmail.io/) - 易于使用的开发人员测试邮件服务器
  * [DNSExit](https://dnsexit.com/) - 免费提供您域名下的最多 2 个电子邮件地址，存储空间为 100MB。支持 IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) - 每月免费发送高达 9000 封电子邮件，每天最多 300 封。
  * [EmailOctopus](https://emailoctopus.com) - 免费提供最多 2500 个订阅者和每月 10,000 封电子邮件
  * [EmailJS](https://www.emailjs.com/) - 这不是完整的电子邮件服务器；这只是一个电子邮件客户端，您可以使用它从客户端发送电子邮件，而无需暴露您的凭据，免费层每月有 200 个请求，2 个电子邮件模板，请求高达 50KB，联系人历史记录有限。
  * [EtherealMail](https://ethereal.email) - Ethereal 是一个虚假的 SMTP 服务，主要针对 Nodemailer 和 EmailEngine 用户（但不限于）。这是一个完全免费的反事务性电子邮件服务，消息永远不会送达。
  * [Temp-Mail.org](https://temp-mail.org/en/) - 使用多种域名的临时/一次性邮件生成实用程序。每次重新加载页面时，电子邮件地址都会刷新。完全免费，不包含任何服务费用。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 免费每月验证多达 200 封电子邮件，并查看电子邮件是否临时。
  * [Emailvalidation.io](https://emailvalidation.io) - 每月免费进行 100 次电子邮件验证
  * [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮件生成器。支持 10 个域名，同时允许您自由创建无限数量的地址。（包含广告）但服务中不包含任何定价，完全免费。
  * [forwardemail.net](https://forwardemail.net) - 免费为自定义域名转发电子邮件。使用您的域名创建和转发无限数量的电子邮件地址（**注意**：如果您使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work TLD，则需要付费）
  * [Imitate Email](https://imitate.email) - 用于测试电子邮件功能的沙盒电子邮件服务器，适用于构建/qa 和 ci/cd。免费帐户每天获得 15 封电子邮件，永久有效。
  * [ImprovMX](https://improvmx.com) - 免费电子邮件转发。
  * [EForw](https://www.eforw.com) - 免费为一个域转发电子邮件。从您的域名接收和发送电子邮件。
  * [Inboxes App](https://inboxesapp.com) - 每天最多创建 3 个临时电子邮件，然后在使用完后从方便的 Chrome 扩展中删除它们。非常适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性电子邮件收件箱，最多可自动删除 3 天的电子邮件。开源且可自行托管。
  * [mail-tester.com](https://www.mail-tester.com) - 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月免费 20 次。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，由 roundsphere.com 提供的免费服务
  * [mailcatcher.me](https://mailcatcher.me/) - 捕获邮件并通过网络界面提供服务。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时电子邮件地址注册，每小时 120 次请求（每月约 86400 次）
  * [Mailchimp](https://mailchimp.com/) - 500 个订阅者和 1000 封电子邮件/月免费。
  * [Maildroppa](https://maildroppa.com) - 最多 100 个订阅者和无限封电子邮件以及免费的自动化功能。
  * [MailerLite.com](https://www.mailerlite.com) - 每月 1000 个订阅者，每月 12000 封电子邮件免费
  * [MailerSend.com](https://www.mailersend.com) - 电子邮件 API、SMTP，每月 3000 封免费的交易电子邮件
  * [mailinator.com](https://www.mailinator.com/) - 免费的公共电子邮件系统，您可以使用任何收件箱
  * [Mailjet](https://www.mailjet.com/) - 每月 6000 封免费电子邮件（每天 200 封电子邮件发送限制）
  * [Mailnesia](https://mailnesia.com) - 免费的临时/一次性电子邮件，自动访问注册链接。
  * [mailsac.com](https://mailsac.com) - 免费的临时电子邮件测试 API，免费的公共电子邮件托管，出站捕获，电子邮件到 Slack/websocket/webhook（每月 1500 个 API 限制）
  * [Mailtrap.io](https://mailtrap.io/) - 用于开发的虚假 SMTP 服务器，免费计划包括一个收件箱，100 条消息，没有团队成员，每秒两封电子邮件，没有转发规则。
  * [Mail7.io](https://www.mail7.io/) - 免费的临时电子邮件地址。使用 Web 界面或 API 即时创建电子邮件地址。
  * [Momentary Email](https://www.momentaryemail.com/) - 免费的临时电子邮件地址。在网站上或通过 RSS -feed 读取传入的电子邮件。
  * [Mutant Mail](https://www.mutantmail.com/) - 免费 10 个电子邮件 ID，1 个域名，1 个邮箱。所有电子邮件 ID 使用一个邮箱。
  * [Outlook.com](https://outlook.live.com/owa/) - 免费的个人电子邮件和日历。
  * [Parsio.io](https://parsio.io/) - 免费的电子邮件解析器（转发电子邮件，提取数据，发送到您的服务器）
  * [pepipost.com](https://pepipost.com) - 第一个月免费 30k 封电子邮件，然后每天免费 100 封电子邮件。
  * [Plunk](https://useplunk.com) - 每月免费 3K 封电子邮件。
  * [Postmark](https://postmarkapp.com/) - 每月免费 100 封电子邮件，无限制的 DMARC 每周摘要。
  * [Proton Mail](https://proton.me/mail) - 带有内置端到端加密的免费安全电子邮件帐户服务提供商。免费 1GB 存储空间。
  * [Queuemail.dev](https://queuemail.dev) - 可靠的电子邮件交付 API。免费层（每月 10,000 封电子邮件）。异步发送。使用多个 SMTP 服务器。阻止列表、日志记录、跟踪、Webhooks 等。
  * [QuickEmailVerification](https://quickemailverification.com) - 在免费层免费每天验证 100 封电子邮件，以及其他免费 API，如 DEA 检测器、DNS 查找、SPF 检测器等。
  * [Resend](https://resend.com) - 开发人员的事务性电子邮件 API。每月 3000 封电子邮件，每天 100 封电子邮件免费，一个自定义域名。
  * [Sender](https://www.sender.net) - 每月最多 15000 封电子邮件，最多 2500 个订阅者
  * [SendGrid](https://sendgrid.com/) - 每天 100 封电子邮件和 2000 个联系人免费
  * [Sendpulse](https://sendpulse.com) - 每月 500 个订阅者，每月 15,000 封电子邮件免费
  * [SimpleLogin](https://simplelogin.io/) - 开源、可自托管的电子邮件别名/转发解决方案。免费 5 个别名，无限带宽，无限回复/发送。免费供教育工作者（学生、研究人员等）使用。
  * [Substack](https://substack.com) - 无限免费新闻通讯服务。当您开始收费时开始支付。
  * [Sweego](https://www.sweego.io/) - 欧洲开发人员的事务性电子邮件 API。每天免费 500 封电子邮件。

  * [temp-mail.io](https://temp-mail.io)——免费的一次性临时电子邮件服务，可同时提供多个电子邮件并转发
  * [tinyletter.com](https://tinyletter.com/)——每月免费 5,000 个订阅者
  * [Touchlead](https://touchlead.app)——多功能营销自动化工具，具有潜在客户管理、表单构建和自动化功能。免费提供有限数量的潜在客户和自动化
  * [trashmail.com](https://www.trashmail.com)——免费的一次性电子邮件地址，具有转发和自动地址过期功能
  * [Tutanota](https://tutanota.com/)——免费的安全电子邮件帐户服务提供商，内置端到端加密，无广告，无跟踪。免费 1GB 存储空间。这部分也是[开源的](https://github.com/tutao/tutanota)，因此您可以自己托管。
  * [Verifalia](https://verifalia.com/email-verification-api)——实时电子邮件验证 API，具有邮箱确认和一次性电子邮件地址检测功能；每天免费提供 25 次电子邮件验证。
  * [verimail.io](https://verimail.io/)——批量和 API 电子邮件验证服务。每月免费 100 次验证
  * [Zoho](https://www.zoho.com)——最初是作为电子邮件提供商，但现在提供一系列服务，其中一些提供免费计划。提供免费计划的服务列表：
     - [电子邮件](https://zoho.com/mail)免费供 5 个用户使用。5GB/用户和 25MB 附件限制，一个域名。
     - [Zoho Assist](https://www.zoho.com/assist)——Zoho Assist 的永久免费计划包括一个并发远程支持许可证和无限期访问 5 个无人参与计算机许可证，可用于专业和个人用途。
     - [Sprints](https://zoho.com/sprints)免费供 5 个用户使用，5 个项目和 500MB 存储空间。
     - [Docs](https://zoho.com/docs)——免费供 5 个用户使用，上传限制为 1GB，存储空间为 5GB。Zoho Office 套件（Writer、Sheets 和 Show）随附。
     - [Projects](https://zoho.com/projects)——免费供 3 个用户使用，2 个项目和 10MB 附件限制。相同的计划适用于[Bugtracker](https://zoho.com/bugtracker)。
     - [Connect](https://zoho.com/connect)——团队协作免费供 25 个用户使用，包括 3 个组、3 个自定义应用程序、3 个 Boards、3 个手册和 10 个集成以及渠道、事件和论坛。
     - [Meeting](https://zoho.com/meeting)——最多可容纳 3 个会议参与者和 10 个网络研讨会参与者的会议。
     - [Vault](https://zoho.com/vault)——个人可访问密码管理。
     - [Showtime](https://zoho.com/showtime)——另一个用于培训的会议软件，远程会话最多可容纳 5 名参与者。
     - [Notebook](https://zoho.com/notebook)——Evernote 的免费替代品。
     - [Wiki](https://zoho.com/wiki)——免费供 3 个用户使用，存储空间为 50MB，无限页面，zip 备份，RSS 和 Atom 源，访问控制和可定制的 CSS。
     - [Subscriptions](https://zoho.com/subscriptions)——循环计费管理免费供 20 个客户/订阅和 1 个用户，所有支付由 Zoho 托管。存储最后 40 个订阅指标
     - [Checkout](https://zoho.com/checkout)——产品计费管理，最多 3 页和 50 笔付款。
     - [Desk](https://zoho.com/desk)——客户支持管理，包括 3 个代理、私有知识库和电子邮件票证。与[Assist](https://zoho.com/assist)集成，用于 1 个远程技术人员和 5 台无人参与的计算机。
     - [Cliq](https://zoho.com/cliq)——团队聊天软件，存储空间为 100GB，用户无限，每个频道 100 个用户和 SSO。
     - [Campaigns](https://zoho.com/campaigns)——电子邮件营销
     - [Forms](https://zoho.com/forms)——表单创建器
     - [Sign](https://zoho.com/sign)——无纸化签名
     - [Surveys](https://zoho.com/surveys)——在线调查
     - [Bookings](https://zoho.com/bookings)——约会安排
  * [Maileroo](https://maileroo.com)——适用于开发人员的 SMTP 中继和电子邮件 API。每月 5,000 封电子邮件，无限域名，免费电子邮件验证，黑名单监控，邮件测试器等。

**[⬆️ 返回顶部](#目录)**

## 功能切换管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发人员为中心的功能标志服务，具有无限的团队规模、出色的支持和合理的价格标签。免费计划包括 10 个标志、两个环境、1 个产品和每月 500 万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨网络、移动和服务器端应用程序管理功能标志。使用我们的托管 API，部署到您自己的私有云，或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能标志和 A/B 测试提供程序，内置贝叶斯统计分析引擎。免费最多 3 个用户，无限制的功能标志和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能标志、A/B 测试、分析和应用程序配置，具有 Git 风格的版本控制和同步、内存中、本地标志评估。免费最多 5 个团队成员，无限制的功能标志和 A/B 测试。
  * [Molasses](https://www.molasses.app) - 强大的功能标志和 A/B 测试。免费最多 3 个环境，每个环境有五个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能切换管理平台。免费计划最多 10 个标志、两个环境、无限制的请求。SDK、分析仪表板、发布日历、Slack 通知和其他所有功能都包含在无尽的免费计划中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B 测试、分析等的强大平台。其慷慨的免费计划提供无限座位、标志、实验和动态配置，每月支持高达 100 万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志和 A/B 测试。配置即代码和完全类型化的 TypeScript SDK。与 Next.js 和 React 等框架的强大集成。慷慨的免费层和便宜的扩展选项。


**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 此网站上提供的字体是其作者的财产，要么是免费软件、共享软件、演示版或公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器、字体隐藏和字体提交。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 免费字体，可用于商业工作。精心挑选这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到 Google 的 CDN 轻松且快速地安装在网站上。
  * [FontGet](https://www.fontget.com/) - 有多种字体可供下载，并整齐地分类为标签。
  * [Fontshare](https://www.fontshare.com/) - 是一项免费字体服务。它是一个不断增长的专业级字体集合，个人和商业用途完全免费。
  * [Befonts](https://befonts.com/) - 提供多种独特的字体，可用于个人或商业用途。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体以及它们的使用方式。
  * [Bunny](https://fonts.bunny.net) 注重隐私的 Google 字体
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体供个人使用，还可以输入文本进行快速过滤。
  * [fonts.xz.style](https://fonts.xz.style/) 使用 CSS 将字体系列提供给网站的免费和开源服务。
  * [Fontsensei](https://fontsensei.com/) 用户标记的开源 Google 字体。带有 CJK（中文、日语、韩语）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大、开发者友好的表单构建器。可构建注册/登录、用户引导、支付流程、复杂金融应用等。免费计划允许每月最多提交 250 次，且有五个有效表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤器、电子邮件通知和自动回复、Webhooks、zapier、重定向、AJAX 或 POST 等功能。免费计划提供无限表单、每月 20 次提交以及带有 Form-Data 徽章的额外 2000 次提交。
  * [FabForm](https://fabform.io/) - 智能开发者的表单后端平台。免费计划每月允许提交 250 个表单。友好的现代图形用户界面。与 Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/)——HTML 表单提交的端点。提供通知、垃圾邮件阻止器和符合 GDPR 的数据处理。免费计划用于基本使用。
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单端点，免费计划允许每月 100 次提交。
  * [formingo.co](https://www.formingo.co/) - 适用于静态网站的简单 HTML 表单。无需注册帐户即可免费开始。免费计划允许每月 500 次提交和可自定义的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月 50 次提交，垃圾邮件保护，电子邮件通知，以及可导出 HTML 的拖放设计器。其他功能包括自定义字段规则、团队以及与 Google Sheets、Slack、ActiveCampaign 和 Zapier 的集成。
  * [formlets.com](https://formlets.com/)——在线表单，每月无限单页表单，100 次提交，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子邮件服务，免费计划允许每月无限表单，250 次提交，有客户支持团队的支持。
  * [Formspree.io](https://formspree.io/)——使用 HTTP POST 请求发送电子邮件。免费层限制每个表单每月提交 50 次。
  * [Formsubmit.co](https://formsubmit.co/)——用于 HTML 表单的简单表单端点。免费永久。无需注册。
  * [Formlick.com](https://formlick.com) - Typeform 替代品，提供终身交易。用户可以创建 1 个免费表单并接收无限提交。在高级版中，用户可以创建无限表单和无限提交。
  * [getform.io](https://getform.io/) - 设计师和开发人员的表单后端平台，1 个表单，50 次提交，单文件上传，100MB 文件存储。
  * [HeroTofu.com](https://herotofu.com/) - 具有机器人检测和加密存档的表单后端。通过 UI 将提交内容转发到电子邮件、Slack 或 Zapier。使用自己的前端。不需要服务器代码。免费计划每月提供无限表单和 100 次提交。
  * [HeyForm.net](https://heyform.net/) - 拖放在线表单构建器。免费层允许创建无限表单并收集无限提交。附带预制模板、反垃圾邮件和 100MB 文件存储。
  * [Tally.so](https://tally.so/) - 99%的功能都是免费的。免费层允许您拥有：无限表单、无限提交、电子邮件通知、表单逻辑、收取付款、文件上传、自定义感谢页面等。
  * [Hyperforms.app](https://hyperforms.app/)——在几秒钟内创建表单到电子邮件等，无需后端代码。个人帐户每月为您提供最多 50 次表单提交。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点。与静态站点配合得很好。免费计划包括最多 1 个网站，每月最多 50 次提交。
  * [Pageclip](https://pageclip.co/) - 免费计划允许一个站点、一个表单和每月 1000 次提交。
  * [Qualtrics Survey](https://qualtrics.com/free-account)——使用此一流工具创建专业表单和调查。50 多个专家设计的调查模板。免费帐户的限制为 1 个活动调查、100 个响应/调查和 8 种响应类型。
  * [Screeb](https://screeb.app/)——应用内调查和产品分析，用于解码用户行为。永久免费计划允许每月 500 个活跃用户、无限响应和事件、许多集成、导出和定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 强大且易于使用的网站表单后端，永久免费计划允许每月 50 次提交，250MB 文件存储，Zapier 集成，CSV/JSON 导出，自定义重定向，自定义响应页面，Telegram 和 Slack 机器人，单个电子邮件通知。
  * [Survicate](https://survicate.com/)——从所有来源收集反馈并使用一个工具发送后续调查。使用 AI 自动分析反馈并提取见解。免费电子邮件、网站、应用内或移动调查、AI 调查创建者和每月 25 次响应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 无需任何服务器端代码即可轻松集成 HTML 表单。用户提交表单后，将向您注册的地址发送一封包含表单内容的电子邮件。
  * [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费计划有五个表单，每个表单最多可设置 3 个步骤，每月有 50 次响应。
  * [Typeform.com](https://www.typeform.com/)——在网站上包含设计精美的表单。免费计划每个表单允许 10 个字段，每月允许 100 次响应。
  * [WaiverStevie.com](https://waiverstevie.com) - 具有 REST API 的电子签名平台。您可以使用 Webhooks 接收通知。免费计划对已签名的文件加水印，但允许无限的信封+签名。
  * [Web3Forms](https://web3forms.com) - 适用于静态和 JAMStack 网站的联系表单，无需编写后端代码。免费计划允许每月无限表单、无限域名和 250 次提交。
  * [WebAsk](https://webask.io) - 调查和表单构建器。免费计划每个帐户有三个调查，每月 100 次响应，每个调查有十个元素。
  * [Wufoo](https://www.wufoo.com/) - 在网站上使用的快速表单。免费计划每月每个表单的限制为 100 次提交。
  * [formpost.app](https://formpost.app) - 免费、无限的表单到电子邮件服务。免费设置自定义重定向、自动响应、Webhooks 等。
  * [Formester.com](https://formester.com) - 在您的网站上分享和嵌入独特外观的表单——不受计划限制的表单数量或功能的限制。每月免费获得高达 100 次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在您的网站上嵌入 PDF 编辑器，并将任何 PDF 转换为可填写的表单。免费计划允许每个 PDF 无限使用三个提交。
  * [forms.app](https://forms.app/)——使用强大的功能创建在线表单，如条件逻辑、自动评分计算器和 AI。免费计划可收集最多 100 次响应，可嵌入您的表单在网站上，或使用链接使用它们。
  * [Qualli](https://usequalli.com)——应用内调查，专为移动设备设计。使用 Qualli AI 打造完美问题。您可以在我们的免费计划中试用，最高可达 500 MAU，创建无限表单和触发器。
  * [Sprig](https://sprig.com/)——每月 1 次产品内调查或调查，带有 GPT 驱动的 AI 分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集 25 次总反馈提交。易于与提供的 React 和 Vue 组件集成。

**[⬆️ 返回顶部](#目录)**

## 生成式人工智能（GenerativeAI）

  * [Keywords AI](https://keywordsai.co) - 最好的 LLM 监控平台。用两行代码调用 200 多个 LLM。每月有 10,000 个免费请求，平台功能免费！
  * [Portkey](https://portkey.ai/) - 具有可观测性套件和 AI 网关的 Gen AI 应用控制面板。每月免费发送和记录多达 10,000 个请求。
  * [Braintrust](https://www.braintrustdata.com/) - Gen AI 的评估、提示游乐场和数据管理。免费计划每周提供高达 1,000 条私有评估行。
  * [Findr](https://www.usefindr.com/) - 通用搜索，可让您一次搜索所有应用程序。搜索助手，可让您使用您的信息回答问题。免费计划提供无限统一搜索和 5 个每日合作飞行员查询。
  * [ReportGPT](https://report-gpt.io) - AI 写作助手。只要您提供自己的 API 密钥，整个平台都是免费的。
  * [Clair](https://askclair.ai/) - 临床 AI 参考。学生可以免费访问专业工具套件，其中包括 Open Search、临床摘要、Med 评论、药物相互作用、ICD-10 代码和管理。此外，还提供专业套件的免费试用。
  * [Langtrace](https://langtrace.ai) - 使开发人员能够跟踪、评估、管理提示和数据集，并调试与 LLM 应用程序性能相关的问题。它为任何 LLM 创建开放遥测标准跟踪，有助于可观测性，并与任何可观测性客户端配合使用。免费计划提供每月 50K 轨迹。
  * [Ultra AI](https://ultraai.app) - 产品的 AI 指挥中心。功能包括多提供商 AI 网关、提示管理器、缓存、日志、分析、模型回退和用户速率限制。免费永久计划每月提供 10k+请求和所有功能，除了缓存。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在您的开发和生产生命周期中评估、测试和交付 LLM 应用程序。
  * [Langfuse](https://langfuse.com/) - 开源 LLM 工程平台，可帮助团队协作调试、分析和迭代他们的 LLM 应用程序。免费永久计划包括每月 50k 次观察和所有平台功能。[#opensource](https://github.com/langfuse/langfuse)
  * [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成 AI，提供免费 API。无需注册或 API 密钥，并且有几种选项可集成到网站或工作流程中。[#opensource](https://github.com/pollinations/pollinations)

**[⬆️ 返回顶部](#目录)**

## 内容分发网络（CDN）和防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) - 引导程序、引导主题和 Font Awesome 的 CDN
  * [cdnjs.com](https://cdnjs.com/) - 简单。快速。可靠。cdnjs 是一个免费且开源的 CDN 服务，超过 11%的网站都信任它，由 Cloudflare 提供支持。
  * [developers.google.com](https://developers.google.com/speed/libraries/) - Google 托管库是最流行的开源 JavaScript 库的内容分发网络
  * [Stellate](https://stellate.co/) - Stellate 是一个快速、可靠的 GraphQL API CDN，免费提供给两个服务。
  * [jsdelivr.com](https://www.jsdelivr.com/) - 免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) - Microsoft Ajax CDN 托管流行的第三方 JavaScript 库，如 jQuery，并使您可以轻松将其添加到 Web 应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) - 免费的 DDoS 保护和 SSL 证书
  * [Skypack](https://www.skypack.dev/) - 100%原生 ES 模块 JavaScript CDN。每月每个域免费 100 万次请求。
  * [raw.githack.com](https://raw.githack.com/) - **rawgit.com** 的现代替代品，它简单地使用 Cloudflare 托管文件
  * [section.io](https://www.section.io/) - 一种简单的方法，可以启动和管理完整的 Varnish 缓存解决方案。据称对于一个站点永远免费
  * [statically.io](https://statically.io/) - Git 存储库（GitHub、GitLab、Bitbucket）、WordPress 相关资产和图像的 CDN
  * [toranproxy.com](https://toranproxy.com/) - Packagist 和 GitHub 的代理。永不失败的 CD。个人使用免费，一个开发者，不提供支持
  * [UNPKG](https://unpkg.com/) - npm 上的所有内容的 CDN
  * [weserv](https://images.weserv.nl/) - 图像缓存和调整大小服务。使用全球缓存实时处理图像。
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) - 免费的 DDoS 保护
  * [Gcore](https://gcorelabs.com/) 全球内容交付网络，每月免费 1TB 和 100 万次请求，免费 DNS 托管
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最多 5TB 的免费 CDN 流量，19 个核心 PoPs，1 个域和通用 SSL。

**[⬆️ 返回顶部](#目录)**

## 平台即服务（PaaS）

  * [anvil.works](https://anvil.works) - 使用 Python 进行 Web 应用开发。免费层提供无限应用和 30 秒超时。
  * [appwrite](https://appwrite.io) - 无限项目，无项目暂停（支持 websockets）和身份验证服务。免费层每个项目有 1 个数据库、3 个存储桶、5 个函数。
  * [configure.it](https://www.configure.it/)——移动应用开发平台，免费供两个项目使用，功能有限但无资源限制
  * [codenameone.com](https://www.codenameone.com/)——开源、跨平台的移动应用开发工具链，适用于 Java/Kotlin 开发人员。免费供商业使用，项目数量不限
  * [deco.cx](https://www.deco.cx/en/dev)——边缘原生前端平台，具有视觉 CMS，由 TypeScript 代码自动生成。内置 A/B 测试、内容分段和实时分析。非常适合内容丰富和企业电子商务网站。免费版每月最多 5k 页面浏览量或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy)——分布式系统，在全球边缘运行 JavaScript、TypeScript 和 WebAssembly。免费层包括每天 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co)——提供与 GitHub、SSH 和 MariaDB/Postgres 数据库的 CI/CD 的 Linux 托管服务。免费版本有 1GB 存储和 1GB 网络/月限制，并且仅限于免费域名。
  * [encore.dev](https://encore.dev/)——使用静态分析的后端框架，提供自动基础架构、无样板代码等。包括免费云托管，适用于业余项目。
  * [flightcontrol.dev](https://flightcontrol.dev/)——使用 Git 推送风格工作流程在您自己的 AWS 帐户上部署 Web 服务、数据库等。免费层适用于个人 GitHub 存储库上有 1 个开发人员的用户。AWS 费用通过 AWS 计费，但您可以使用信用额度和 AWS 免费层。
  * [gigalixir.com](https://gigalixir.com/)——Gigalixir 提供一个永不休眠的免费实例和一个免费的 PostgreSQL 数据库，限制为 2 个连接、10,000 行，并且没有备份，适用于 Elixir/Phoenix 应用程序。
  * [Glitch](https://glitch.com/)——具有代码共享和实时协作功能的免费公共托管。免费计划有每月 1000 小时的限制。
  * [Lade](https://www.lade.io/)——Lade 是为开发人员构建的云平台。免费层包括三个服务，既可以是应用程序，也可以是数据库。每个服务包括 128MB RAM 和 1GB 存储。
  * [pipedream.com](https://pipedream.com)——一个集成平台，专为开发人员构建。基于任何触发器开发任何工作流程。工作流程是您可以免费运行的代码[免费](https://docs.pipedream.com/pricing/)。无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/)——云 Python 应用程序托管。入门帐户是免费的，在您的-username.pythonanywhere.com 域中有 1 个 Python Web 应用程序，512MB 私有文件存储，1 个 MySQL 数据库
  * [ampt.dev](https://getampt.com/)——Ampt 让团队无需复杂的配置或管理基础设施即可在 AWS 上构建、部署和扩展 JavaScript 应用程序。免费预览计划包括每小时 500 次调用、每天 2500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中允许。
  * [Koyeb](https://www.koyeb.com)——Koyeb 是一个面向开发者的无服务器平台，可在全球范围内部署应用程序。通过基于 git 的部署、本机自动缩放、全球边缘网络和内置的服务网格和发现，无缝运行 Docker 容器、Web 应用程序和 API。免费实例可让您在德国法兰克福或美国华盛顿特区部署 Web 服务。免费的托管 PostgreSQL 数据库可在德国法兰克福（德国）、美国华盛顿特区（美国）和新加坡使用。512MB 内存、2GB 存储和 0.1 CPU。无需信用卡即可开始使用。
  * [Napkin](https://www.napkin.io/)——具有 500Mb 内存、默认超时时间为 15 秒以及每月 5000 次免费 API 调用（速率限制为每秒 5 次调用）的 FaaS。
  * [Meteor Cloud](https://www.meteor.com/cloud)——Galaxy 托管。Meteor 的平台即服务，适用于 Meteor 应用程序，包括免费的 MongoDB 共享托管和自动 SSL。
  * [Northflank](https://northflank.com)——使用强大的 UI、API 和 CLI 构建和部署微服务、作业和托管数据库。从版本控制系统和外部 Docker 注册表无缝扩展容器。免费层包括两个服务、两个 cron 作业和 1 个数据库。
  * [YepCode](https://yepcode.io)——在无服务器环境中连接 API 和服务的一体化平台。它带来了 NoCode 工具的所有敏捷性和优势，但具有使用编程语言的所有功能。免费层包括[1.000 yeps](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com)——一个开源平台，允许您快速构建、交付和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。免费计划在[免费计划](https://wundergraph.com/pricing)上最多可使用 3 个项目、1GB 出站、每月 300 分钟构建时间。
  * [Zeabur](https://zeabur.com)——一键部署您的服务。免费提供三个服务，每月有 5 美元的免费信用额度。
  * [mogenius](https://mogenius.com)——轻松在 Kubernetes 上构建、部署和运行服务。免费层支持连接本地 Kubernetes 和 mogenius，使个人开发人员能够在自己的机器上创建类似生产的测试环境。
  * [genezio](https://genezio.com/)——一个无服务器功能提供程序，为非商业或学术用途免费提供 100 万个功能调用、100GB 带宽和 10 个 cron 作业。

**[⬆️ 返回顶部](#目录)**

## 后端即服务（BaaS）

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用程序连接到您的应用程序后端。例如，当您的应用程序中发生事件时，发送一条 Slack 消息或向 Google Sheet 添加一行。每月免费使用多达 5000 个任务。
  * [back4app.com](https://www.back4app.com) - Back4App 是一个易于使用、灵活且可扩展的后端，基于 Parse 平台。
  * [backendless.com](https://backendless.com/) - 移动和网络 Baas，免费提供 1GB 文件存储、每月 50,000 次的推送通知和 1000 个数据表中的数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) - 我们的人工智能将在我们的函数运行时和托管存储上引导您的 Python API，在我们的在线编辑器或本地使用您喜欢的工具免费构建和托管。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC 开发者计划提供文档和资源，以构建和部署您企业的数字创新。访问全面的个人沙盒，其中包括平台、SDK 和可用于构建和定制应用程序的组件库。
  * [connectycube.com](https://connectycube.com) - 无限聊天消息、p2p 语音和视频通话、文件附件和推送通知。对于最多 1000 个用户的应用程序免费。
  * [convex.dev](https://convex.dev/) - 作为服务的反应式后端，托管您的数据（具有关系和可序列化 ACID 事务的文档）、无服务器功能和 WebSockets，以将更新流式传输到各个客户端。小型项目免费 - 最多 1M 记录，每月 5M 函数调用。
  * [darklang.com](https://darklang.com/) - 托管语言结合了编辑器和基础架构。在测试版期间可访问，计划在测试版后提供慷慨的免费层。
  * [Firebase](https://firebase.com) - Firebase 帮助您构建和运行成功的应用程序。免费 Spark 计划提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B 测试、分析、应用分发、应用索引、云消息（FCM）、崩溃分析、动态链接、应用内消息、性能监控、预测和远程配置始终免费。
  * [Flutter Flow](https://flutterflow.io) - 无需编写一行代码即可构建您的 Flutter App UI。还具有 Firebase 集成。免费计划包括对 UI Builder 和免费模板的完全访问权限。
  * [getstream.io](https://getstream.io/) - 在几个小时内而不是几周内构建可扩展的应用内聊天、消息传递、视频和音频以及供稿。
  * [hasura.io](https://hasura.io/) - Hasura 扩展您托管的任何数据库，并提供即时 GraphQL API，可安全访问网络、移动和数据集成工作负载。免费 1GB/月的数据通过量。
  * [iron.io](https://www.iron.io/) - 具有免费层和 1 个月免费试用期的异步任务处理（如 AWS Lambda）
  * [nhost.io](https://nhost.io) - 适用于 Web 和移动应用程序的无服务器后端。免费计划包括 PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器功能。
  * [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月 10,000 封电子邮件发送，无限制联系人，并可访问自动预热。
  * [paraio.com](https://paraio.com) - 具有灵活身份验证、全文搜索和缓存的后端服务 API。免费用于一个应用程序，1GB 的应用程序数据。
  * [progress.com](https://www.progress.com/kinvey) - 移动后端，入门计划每秒无限请求，1GB 数据存储。企业应用程序支持
  * [pubnub.com](https://www.pubnub.com/) - 免费推送通知，每月最多 100 万条消息和 100 个活跃的日常设备
  * [pushbots.com](https://pushbots.com/) - 推送通知服务。免费用于每月最多 150 万次推送
  * [pushcrew.com](https://pushcrew.com/) - 推送通知服务。对于最多 2000 个订阅者的无限制通知
  * [pusher.com](https://pusher.com/beams) - 免费、无限制的推送通知，适用于 2000 名每月活跃用户。适用于 iOS 和 Android 设备的单个 API。
  * [quickblox.com](https://quickblox.com/) - 即时消息、视频和语音通话以及推送通知的通信后端
  * [restspace.io](https://restspace.io/) - 配置具有身份验证、数据、文件、电子邮件 API、模板等服务的服务器，然后组合成管道并转换数据。
  * [Salesforce Developer Program](https://developer.salesforce.com/signup) - 使用拖放工具快速构建、测试和部署应用程序。自定义数据模型只需点击即可。使用 Apex 代码进一步扩展。使用强大的 API 与任何内容集成。使用企业级安全性保护自己。使用点击或任何领先的网络框架自定义 UI。免费开发者计划可访问完整的 Lightning 平台。
  * [ServiceNow Developer Program](https://developer.servicenow.com/) - 快速构建、测试和部署可改善您组织工作的应用程序。免费实例和早期预览访问权限。
  * [simperium.com](https://simperium.com/) - 立即在各个平台上随时随地移动数据，多平台，无限制发送和存储结构化数据，每月最多 2500 个用户。
  * [Singlebase.cloud](https://singlebase.cloud) - SinglebaseCloud 是一个由人工智能驱动的一体化后端平台，可加速应用程序开发。它提供了工具，如向量数据库、关系文档数据库、身份验证、搜索和存储，旨在简化后端开发。免费/入门计划提供关系文档数据库、身份验证、搜索、存储。
  * [stackstorm.com](https://stackstorm.com/) - 应用程序、服务和工作流的事件驱动自动化，免费，无流程、访问控制、LDAP
  * [streamdata.io](https://streamdata.io/) - 将任何 REST API 转换为事件驱动的流 API。免费计划最多 100 万条消息和十个并发连接。
  * [Supabase](https://supabase.com) - 构建后端的开源 Firebase 替代方案。免费计划提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) - 具有身份验证、配额、监控和分析的 API 管理。免费云提供
  * [zapier.com](https://zapier.com/) - 将您使用的应用程序连接起来，以自动执行任务。每 15 分钟五个 zaps 和每月 100 个任务
  * [IFTTT](https://ifttt.com) - 自动化您喜爱的应用程序和设备。免费 2 个小程序
  * [Integrately](https://integrately.com) - 一键自动执行繁琐的任务。免费 100 个任务，15 分钟更新时间，五个活动自动化，Webhooks。
  * [LeanCloud](https://leancloud.app/) - 移动后端。1GB 数据存储、256MB 实例、每天 3K API 请求和 10K 推送免费。（API 非常类似于 Parse 平台）

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Clappia](https://www.clappia.com/)——一个低代码平台，旨在使用可定制的移动和网络应用程序构建业务流程应用程序。提供拖放界面，具有离线支持、实时位置跟踪等功能，并与各种第三方服务集成。
  * [Basedash](https://www.basedash.com/)——用于构建内部管理面板和仪表板的低代码平台。支持 SQL 数据库和 REST API。
  * [BudiBase](https://budibase.com/)——Budibase 是一个开源的低代码平台，可在几分钟内创建内部应用程序。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
  * [appsmith](https://www.appsmith.com/)——用于构建管理面板、内部工具和仪表板的低代码项目。与 15 多个数据库和任何 API 集成。
  * [ToolJet](https://www.tooljet.com/)——可扩展的低代码框架，用于构建业务应用程序。连接到数据库、云存储、GraphQL、API 端点、Airtable 等，并使用拖放应用程序构建器构建应用程序。
  * [ReTool](https://retool.com/)——用于构建内部应用程序的低代码平台。Retool 具有高度的可扩展性。如果您可以使用 JavaScript 和 API 编写它，那么您可以在 Retool 中实现它。免费层允许每个月最多有五个用户，无限制的应用程序和 API 连接。
  * [DronaHQ](https://www.dronahq.com/)——DronaHQ——一个低代码平台，帮助工程团队和产品经理以 10 倍的速度构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板、操作应用程序。
  * [ILLA Cloud](https://www.illacloud.com/)——ILLA Cloud——一个强大的开源低代码平台，供开发人员构建内部工具。通过使用 ILLA 的组件和操作库，开发人员可以在构建工具时节省大量时间。免费供 5 个团队成员使用。
  * [outsystems.com](https://www.outsystems.com/)——企业 Web 开发 PaaS，提供本地或云，免费的“个人环境”产品允许无限代码和最多 1GB 数据库
  * [UI Bakery](https://uibakery.io)——低代码平台，可加快自定义 Web 应用程序的构建速度。支持使用拖放方式构建 UI，并通过 JavaScript、Python 和 SQL 进行高度定制。提供云和自托管解决方案。免费提供给最多 5 个用户。
  * [Mendix](https://www.mendix.com/)——企业快速应用开发，无限制的可访问沙盒环境支持总用户，每个应用程序 0.5GB 存储和 1GB RAM。免费层还允许使用 Studio 和 Studio Pro IDE。
  * [lil'bots](https://www.lilbots.io/)——在线编写和运行脚本，利用 OpenAI、Anthropic、Firecrawl 等免费内置 API。非常适合构建 AI 代理/内部工具并与团队共享。免费层包括对 API 的完全访问权限、AI 编码助手和每月 10,000 次执行信用。

**[⬆️ 返回顶部](#目录)**

## 虚拟主机服务

  * [Alwaysdata](https://www.alwaysdata.com/)——100MB 免费网络托管，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义 Web 服务器，通过 FTP、WebDAV 和 SSH 访问；包括邮箱、邮件列表和应用程序安装程序。
  * [Awardspace.com](https://www.awardspace.com)——免费网络托管+免费短域名，PHP、MySQL、应用程序安装程序、电子邮件发送和无广告。
  * [Bohr](https://bohr.io)——面向非商业项目的免费+开发者优先的部署和开发平台，最大限度地减少基础设施的麻烦并加快设置速度。
  * [Bubble](https://bubble.io/)——无需代码即可构建网络和移动应用的可视化编程，免费使用 Bubble 品牌。
  * [dAppling Network](https://www.dappling.network/)——专注于提高正常运行时间和安全性并为用户提供额外访问点的 Web3 前端去中心化网络托管平台。
  * [DigitalOcean](https://www.digitalocean.com/pricing)——在 App Platform Starter 层上免费构建和部署三个静态网站。
  * [Drive To Web](https://drv.tw)——直接从 Google Drive 和 OneDrive 托管到网络。仅限静态网站。永久免费。每个 Google/Microsoft 帐户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com)——用于在本地托管网站并公开共享它们（实时）的开发人员桌面应用程序。使用其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
  * [Fern](https://buildwithfern.com)——在 Fern 的免费计划上构建和托管基于 Markdown 的文档网站。您甚至可以根据 API 定义文件为您的网站自动生成 API 参考。该网站托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/)——免费托管，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 电子邮件、免费子域、免费域名托管、DNS 区域编辑器、网站统计信息、免费在线支持和许多其他其他免费主机不提供的功能。
  * [Freehostia](https://www.freehostia.com)——提供免费托管服务，包括业内最佳的控制面板和 50 多个免费应用程序的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org)——非盈利免费网络托管，带有 Plesk 控制面板，支持 PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP 电子邮件、无限带宽、免费子域、1000MB 存储空间，可选择升级。
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/)——免费部署最多 100 个静态网站，自定义域名和 SSL，100GB 每月带宽，260+Cloudflare CDN 位置。
  * [Lecturify](https://www.lecturify.net/index.en.html)——提供 SFPT 访问的文件上传和下载网络托管，支持 php。
  * [Neocities](https://neocities.org)——静态，1GB 免费存储空间，200GB 带宽。
  * [Netlify](https://www.netlify.com/)——免费构建、部署和托管静态网站/应用程序，100GB 数据和 100GB/月带宽。
  * [pantheon.io](https://pantheon.io/)——Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。免费供开发人员和机构使用。不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/)——具有版本控制、PDF 生成等功能的免费文档托管。
  * [render.com](https://render.com)——统一的云，用于使用免费 SSL、全球 CDN、私有网络、从 Git 自动部署以及完全免费的 Web 服务、数据库和静态网页计划构建和运行应用程序和网站。
  * [SourceForge](https://sourceforge.net/)——免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/)——面向前端开发人员的静态 Web 发布。无限站点支持自定义域名。
  * [telegra.ph](https://telegra.ph/)——使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/)——一个站点，50 页，50MB 存储空间，仅提供 170 多个可用的主要预定义块，不支持字体、favicon 和自定义域名。
  * [Vercel](https://vercel.com/)——使用免费 SSL、全球 CDN 和每次`git push`时独特的预览 URL 构建、部署和托管 Web 应用程序。非常适合 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/)——专注于 SaaS 的网站构建器-无限网站，70+块，五个模板，自定义 CSS，favicon，SEO 和表单。不支持自定义域名。
  * [Qoddi](https://qoddi.com)——类似 Heroku 的 PaaS 服务，采用以开发人员为中心的方法和全面的功能。免费层适用于静态资产、暂存和开发人员应用程序。
  * [FreeFlarum](https://freeflarum.com/)——社区驱动的免费 Flarum 托管，最多可容纳 250 个用户（捐赠以从页脚删除水印）。
  * [fleek.co](https://fleek.co/)——在开放网络及其协议上无缝构建现代网站和应用程序，免费提供无限网站和 50GB/月带宽。
  * [MDB GO](https://mdbgo.com/)——一个项目的免费托管，具有两周的容器 TTL、每个项目 500MB RAM、SFTP-1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/)——易于使用的云平台，在其付费服务中，它提供免费托管三个静态网站。
  * [Serv00.com](https://serv00.com/)——3GB 免费网络托管，每天备份（7 天）。支持：Crontab 作业、SSH 访问、存储库（GIT、SVN 和 Mercurial），支持：MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等。

**[⬆️ 返回顶部](#目录)**

## 域名系统（DNS）

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由 Cloudflare 提供的免费公共 DNS 解析器，速度快且安全（加密 DNS 查询）。可用于绕过互联网提供商的 DNS 阻塞、防止 DNS 查询间谍行为以及[阻止成人和恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还可以通过[API 使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注意：只是 DNS 解析器，不是 DNS 主机提供商。
  * [1984.is](https://www.1984.is/product/freedns/)——带有 API 和许多其他免费 DNS 功能的免费 DNS 服务。
  * [cloudns.net](https://www.cloudns.net/)——免费 DNS 托管，最多可托管 1 个域，50 条记录。
  * [deSEC](https://desec.io)——免费 DNS 托管，支持 API，设计时考虑了安全性。运行在开源软件上，并得到[SSE](https://www.securesystems.de/)的支持。
  * [dns.he.net](https://dns.he.net/)——免费 DNS 托管服务，支持动态 DNS。
  * [Zonomi](https://zonomi.com/)——免费 DNS 托管服务，即时 DNS 传播。免费计划：1 个 DNS 区域（域名），最多 10 个 DNS 记录。
  * [dnspod.com](https://www.dnspod.com/)——免费 DNS 托管。
  * [duckdns.org](https://www.duckdns.org/)——免费 DDNS，免费层最多可支持 5 个域。带有各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/)——免费 DDNS 服务，支持[API](https://dynv6.com/docs/apis)和管理大量 DNS 记录类型（如 CNAME、MX、SPF、SRV、TXT 等）。
  * [freedns.afraid.org](https://freedns.afraid.org/)——免费 DNS 托管。还提供基于众多公共用户[贡献域](https://freedns.afraid.org/domain/registry/)的免费子域。注册后从“子域”菜单中获取免费子域。
  * [luadns.com](https://www.luadns.com/)——免费 DNS 托管，三个域，所有功能都有合理的限制。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/)——免费 DNS。对域名数量没有限制。
  * [nextdns.io](https://nextdns.io)——基于 DNS 的防火墙，每月免费 300K 查询。
  * [noip.at](https://noip.at/)——免费 DDNS 服务，无需注册、跟踪、日志记录或广告。对域名数量没有限制。
  * [noip](https://www.noip.com/)——动态 DNS 服务，允许免费最多 3 个主机名，每 30 天需要确认一次。
  * [sslip.io](https://sslip.io/)——免费 DNS 服务，当使用包含嵌入式 IP 地址的主机名查询时，返回该 IP 地址。
  * [zilore.com](https://zilore.com/en/dns)——免费 DNS 托管，可托管 5 个域。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/)——免费 DNS 托管，支持动态 DNS。
  * [zonewatcher.com](https://zonewatcher.com)——自动备份和 DNS 更改监控。免费 1 个域名。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html)——华为提供的免费 DNS 托管。
  * [Hetzner](https://www.hetzner.com/dns-console)——来自 Hetzner 的免费 DNS 托管，支持 API。
  * [Glauca](https://docs.glauca.digital/hexdns/)——免费 DNS 托管，最多可托管 3 个域，并支持 DNSSEC。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [eu.org](https://nic.eu.org) — 免费的 eu.org 域名。通常在 14 天内批准请求。
  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务（IaaS）

  * [4EVERLAND](https://www.4everland.org/) - 与 AWS S3 兼容 - API、接口操作、CLI 和其他上传方法，以安全、方便和高效的方式从 IPFS 和 Arweave 网络上传和存储文件。注册用户可以免费获得 6GB 的 IPFS 存储和 300MB 的 Arweave 存储。任何小于 150KB 的 Arweave 文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) - Backblaze B2 云存储。无限时间内免费 10GB（类似 Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的 S3 兼容对象存储。5GB 免费存储，无限期。
  * [Tebi](https://tebi.io/) - S3 兼容对象存储。免费 25GB 存储和 250GB 出站传输。
  * [Idrive e2](https://www.idrive.com/e2/) - S3 兼容对象存储。免费 10GB 存储和每月 10GB 下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容对象存储。免费 15GB 存储和每月 15GB 下载。
  * [Spheron](https://spheron.network/) - 从去中心化云存储和网络托管到应用程序和开发人员的去中心化计算，在一个平台下，免费计划提供 5GB 存储、100GB 带宽、无限域名和项目，$5 价值的计算资源（相对于 AWS 价值$50）。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 为其开源数据平台提供免费的 PostgreSQL、MySQL 和 Redis 计划。单节点、1 个 CPU、1GB RAM，对于 PostgreSQL 和 MySQL，5GB 存储空间。易于迁移到更广泛的计划或跨云。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关系数据库，无限制的基础，1200 行/基础，每月 1000 次 API 请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 即服务，提供[80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 使用 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，具有功能、类似 Mongdb 的查询、键/值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于网络的数据管理器。免费计划提供 5GB 存储空间和每分钟 60/API 调用。包含 2 名开发人员。无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。[免费层 CRFREE](https://crate.io/lp-crfree)：一个节点，2 个 CPU、2GB 内存、8GB 存储。每个组织一个集群，无需支付方式。
  * [FaunaDB](https://fauna.com/) — 无服务器云数据库，具有本机 GraphQL、多模型访问和每日免费层高达 100MB
  * [Upstash](https://upstash.com/) — 无服务器 Redis，免费层每天高达 10,000 次请求，最大数据库大小 256MB，并发连接 20 个
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512MB
  * [redsmin.com](https://www.redsmin.com/) — Redis 的在线实时监控和管理服务，监控 1 个 Redis 实例免费
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB redis 实例
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费最多 25MB、1 个代理服务器和基本分析
  * [scalingo.com](https://scalingo.com/) — 主要是一个 PaaS，但提供 128MB 到 192MB 的免费层 MySQL、PostgreSQL 或 MongoDB
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队构建的灵活、类似电子表格的数据库。无限表格，2000 行，1 个月版本控制，最多 25 个团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，所有计划在测试版期间完全免费
  * [StackBy](https://stackby.com/) — 一个工具，结合了电子表格的灵活性、数据库的功能以及与您喜爱的业务应用程序的内置集成。免费计划包括无限用户、十个堆栈和每个堆栈 2GB 的附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是一个与 MySQL 兼容的开源分布式 HTAP RDBMS。TiDB 无服务器提供每月 5GB 的行存储、5GB 的列存储和 5000 万个请求单位（RUs）免费。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发体验。Turso 提供免费永久入门计划，总存储量为 9GB，最多 500 个数据库，最多 3 个位置，每月读取 10 亿行数据，并提供本地开发支持和 SQLite。
  * [InfluxDB](https://www.influxdata.com/) — 时间序列数据库，免费层最多每 5 分钟写入 3MB/5 分钟读取 30MB/5 分钟， cardinality 系列最多 10,000 个
  * [restdb.io](https://restdb.io/) - 一种快速且直接的 NoSQL 云数据库服务。使用 restdb.io，您可以获得模式、关系、自动 REST API（类似于 MongoDB 的查询）以及高效的多用户管理 UI，用于处理数据。免费计划允许 3 个用户、2500 条记录和每秒 1 个 API 请求。
  * [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 免费的 CockroachDB 最多 5GB 和 1vCPU（有限的[请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta))
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 管理本机图形数据库/分析平台，具有 Cypher 查询语言和 REST API。图形大小限制（50k 节点，175k 关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL，总存储量为 0.5GB，1 个项目，10 个分支，无限数据库，始终可用的主分支（非主分支计算后 5 分钟自动暂停），每月 20 小时活动时间
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 管理本机图形数据库，具有 GraphQL API。每天限制 1MB 数据传输。
  * [Tinybird](https://tinybird.co) - 一种无服务器管理的 ClickHouse，通过 HTTP 进行无连接的数据摄取，并允许您将 SQL 查询发布为托管 HTTP API。免费层没有时间限制，10GB 存储+每天 1000 个 API 请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 管理本机图形数据库/分析平台，具有类似 SQL 的图形查询语言和 REST API。一个免费实例，两个 vCPU，8GB 内存，50GB 存储，闲置 1 小时后睡眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，TerminusDB 是一种用 Prolog 和 Rust 编写的文档和图形数据库。免费供开发使用，付费服务用于企业部署和支持。
  * [YugabyteDB](https://cloud.yugabyte.com) - YugabyteDB 是一个与 PostgreSQL 兼容的分布式 SQL 数据库。无云免费层包括两个 vCPU、4GB RAM 和 10GB 磁盘。
  * [filess.io](https://filess.io) - filess.io 是一个平台，您可以在其中免费创建以下任何一种 DBMS 的一个数据库：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [xata.io](https://xata.io) - Xata 是一个无服务器数据库，内置强大的搜索和分析功能。一个 API，多个类型安全的客户端库，并且针对您的开发工作流程进行了优化。免费永久层对于业余开发人员来说足够了，其中包括三个 Xata 单位，请参考网站了解单位定义。
  * [8base.com](https://www.8base.com/) - 8base 是一个为 JavaScript 开发人员构建的全栈低代码开发平台，建立在 MySQL 和 GraphQL 以及无服务器后端即服务之上。它允许您使用 UI 应用程序构建器快速构建 Web 应用程序并快速扩展，免费层包括行：2500，存储：500，无服务器计算：1Gb/h，客户端应用程序用户：5。
  * [Nile](https://www.thenile.dev/) — 一个用于 B2B 应用程序的 Postgres 平台。无限数据库，始终可用，无停机，总存储量 1GB，5000 万查询令牌，自动缩放，无限向量嵌入

## 隧道、WebRTC、WebSocket服务器和其他路由器

  * [Pinggy](https://pinggy.io) - 使用单个命令为本地主机提供公共 URL，无需下载。支持 HTTPS / TCP / TLS 隧道。免费计划的隧道生存期为 60 分钟。
  * [conveyor.cloud](https://conveyor.cloud/) - 用于将 IIS Express 暴露到本地网络或通过隧道暴露到公共 URL 的 Visual Studio 扩展。
  * [Hamachi](https://www.vpn.net/) - LogMeIn Hamachi 是一种托管 VPN 服务，允许你使用免费计划（最多 5 人）安全地将类似 LAN 的网络扩展到分布式团队，该计划允许无限数量的网络。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的套接字即服务平台，当你部署 Web 套接字服务器代码时，它会给你一个 wss://URL，还允许你监控其性能。
  * [localhost.run](https://localhost.run/) - 通过隧道将本地运行的服务器暴露到公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) - 通过隧道将本地运行的服务器暴露到公共 URL。免费托管版本，并且是[开源的](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) - 通过隧道将本地运行的服务器暴露到公共 URL。
  * [cname.dev](https://cname.dev/) - 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) - 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) - 通过 VPN 启用类似 LAN 的网络将多台计算机连接在一起。无限的对等方。（Hamachi 替代方案）
  * [segment.com](https://segment.com/) - 用于将事件翻译成其他第三方服务的集线器。免费提供 100,000 个事件/月和 100,000 次尝试/月，保留期为三天。
  * Google STUN - [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN - [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) - 零配置 VPN，使用开源的 WireGuard 协议。安装在 MacOS、iOS、Windows、Linux 和 Android 设备上。个人使用的免费计划有 100 个设备和 3 个用户。
  * [webhookrelay.com](https://webhookrelay.com) - 管理、调试、分流和代理所有你的 Webhooks 到公共或内部（即 localhost）目的地。此外，通过获取公共 HTTP 终结点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）将运行在私有网络中的服务器暴露出来。
  * [Hookdeck](https://hookdeck.com/pricing) - 在任何地方开发、测试和监控你的 Webhooks。每月 100K 请求和 100K 尝试，保留期为三天。
  * [Xirsys](https://www.xirsys.com/pricing/) - 无限 STUN 使用+500 MB 每月 TURN 带宽，限制带宽，单个地理区域。
  * [ZeroTier](https://www.zerotier.com) - 免费的托管虚拟以太网即服务。免费计划允许在一个集群中拥有 25 个客户端的无限端到端加密网络。客户端适用于桌面/移动/NA；Web 界面用于配置自定义路由规则和批准私有网络上的新客户端节点。
  * [LocalXpose](https://localxpose.io) - 反向代理，使你能够将本地服务器暴露到互联网。免费计划的隧道生存期为 15 分钟。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布到公共自定义 URL 并使用访问控制对其进行保护。免费适用于一个集群中的 5 个服务。
  * [Expose](https://expose.dev/) - 通过安全隧道公开本地站点。免费计划包括欧盟服务器、随机子域名和单个用户。
  * [btunnel](https://www.btunnel.in/) - 将本地主机和本地 tcp 服务器暴露到互联网。免费计划包括文件服务器、自定义 http 请求和响应头、基本身份验证保护和 1 小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/)——适用于最多 5 名团队成员的免费项目管理和 SCRUM 软件
  * [asana.com](https://asana.com/)——与协作者一起使用的私人项目免费
  * [Backlog](https://backlog.com)——您的团队在一个平台上发布出色项目所需的一切。免费计划提供 1 个项目，最多 10 个用户和 100MB 存储空间。
  * [Basecamp](https://basecamp.com/personal)——待办事项列表、里程碑管理、类似论坛的消息传递、文件共享和时间跟踪。最多 3 个项目、20 个用户和 1GB 存储空间。
  * [bitrix24.com](https://www.bitrix24.com/)——内部网和项目管理工具。免费计划为无限用户提供 5GB。
  * [cacoo.com](https://cacoo.com/)——在线实时图表：流程图、UML、网络。免费版最大 15 个用户/图表，25 张表
  * [Chpokify](https://chpokify.com/)——基于团队的规划扑克，可节省冲刺估计时间。免费版最多 5 个用户，免费 Jira 集成，无限视频通话，无限团队，无限会话。
  * [clickup.com](https://clickup.com/)——项目管理。免费，带有云存储的高级版。提供移动应用程序和 Git 集成。
  * [Clockify](https://clockify.me)——时间跟踪和时间表应用程序，可让您跨项目跟踪工作时间。无限用户，永久免费。
  * [Cloudcraft](https://cloudcraft.co/)——使用 Cloudcraft 可视化设计器在几分钟内设计专业的架构图，针对 AWS 进行优化，具有智能组件，可显示实时数据。免费计划为单个用户提供无限私有图表。
  * [Codegiant](https://codegiant.io)——项目管理与存储库托管和 CI/CD。免费计划提供 5 个团队成员的无限存储库、项目和文档。每月 500 分钟的 CI/CD 分钟数。每月 30000 个无服务器代码运行分钟数 1GB 存储库存储。
  * [Confluence](https://www.atlassian.com/software/confluence)—— Atlassian 的内容协作工具用于帮助团队有效协作和共享知识。免费计划最多供 10 个用户使用。
  * [contriber.com](https://www.contriber.com/)——可定制的项目管理平台，免费入门计划，五个工作区
  * [Crosswork](https://crosswork.app/)——多功能项目管理平台。免费版最多供 3 个项目、无限用户和 1GB 存储空间使用。
  * [diagrams.net](https://app.diagrams.net/)——在线图表存储在 Google Drive、OneDrive 或 Dropbox 中。免费提供所有功能和存储级别
  * [freedcamp.com](https://freedcamp.com/)——任务、讨论、里程碑、时间跟踪、日历、文件和密码管理器。免费计划具有无限项目、用户和文件存储。
  * [easyretro.io](https://www.easyretro.io/)——简单直观的冲刺回顾工具。免费计划每月每个板有三个公共板和一个调查。
  * [GForge](https://gforge.com)——项目管理和问题跟踪工具集，适用于具有自托管和 SaaS 选项的复杂项目。SaaS 免费计划为前 5 个用户免费，开源项目免费。
  * [gleek.io](https://www.gleek.io/)——免费的开发人员描述到图表工具。使用您的关键字创建非正式的 UML 类、对象或实体关系图。
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector)——GraphQL Inspector 输出两个 GraphQL 模式之间的更改列表。每个差异都被精确解释，并标记为中断、非中断或危险。
  * [huboard.com](https://huboard.com/)——适用于您的 GitHub 问题的即时项目管理，开源免费
  * [Hygger](https://hygger.io)——项目管理平台。免费计划提供无限用户、项目和带有 100MB 存储的板。
  * [Instabug](https://instabug.com)——适用于移动应用的全面错误报告和应用内反馈 SDK。免费计划最多适用于 1 个应用程序和 1 个成员。
  * [WishKit](https://wishkit.io)——为您的 iOS/macOS 应用收集应用内用户反馈，并根据用户投票确定功能的优先级。免费计划最多适用于 1 个应用程序。
  * [Ilograph](https://www.ilograph.com/)——交互式图表，允许用户从多个角度和详细级别查看其基础架构。图表可以用代码表示。免费层具有无限的私有图表，最多可容纳 3 个查看器。
  * [Jira](https://www.atlassian.com/software/jira)——在许多企业环境中使用的高级软件开发项目管理工具。免费计划最多供 10 个用户使用。
  * [kanbanflow.com](https://kanbanflow.com/)——基于看板的项目管理。免费，高级版提供更多选项
  * [kanbantool.com](https://kanbantool.com/)——基于看板的项目管理。免费计划有两个板和两个用户，没有附件或文件。
  * [Kitemaker.co](https://kitemaker.co)——通过 Slack、Discord、Figma 和 Github 协作完成产品开发过程的所有阶段，并跟踪工作。无限用户，无限空间。免费计划最多可处理 250 个工作项。
  * [Kiter.app](https://www.kiter.app/)——让任何人组织他们的求职并跟踪面试、机会和联系。强大的网络应用程序和 Chrome 扩展程序。完全免费。
  * [Kumu.io](https://kumu.io/)——具有动画、装饰、过滤器、聚类、电子表格导入等功能的关系图。免费层允许无限公开项目。图形大小不受限制。免费私人项目供学生使用。如果您不想将文件公开在线（上传、编辑、下载、丢弃），则可以使用沙盒模式。
  * [Linear](https://linear.app/)——具有简洁界面的问题跟踪器。免费供无限成员使用，文件上传大小最多为 10MB，问题数量最多为 250 个（不包括存档）
  * [leiga.com](https://www.leiga.com/)——Leiga 是一款使用 AI 自动管理项目的 SaaS 产品，可帮助您的团队集中注意力并释放巨大潜力，确保项目按计划推进。免费版最多供 10 个用户使用，20 个自定义字段，2GB 存储空间，AI 视频录制限制为 5 分钟/视频，自动化运行频率为 20/用户/月。
  * [Lucidchart](https://www.lucidchart.com/)——具有协作功能的在线图表工具。免费计划有三个可编辑文档、100 个专业模板和基本协作功能。
  * [MeisterTask](https://www.meistertask.com/)——面向团队的在线任务管理。免费版最多供 3 个项目和无限项目成员使用。
  * [MeuScrum](https://www.meuscrum.com/en)——免费的在线 Scrum 工具，带有看板
  * [nTask](https://www.ntaskmanager.com/)——使您的团队能够协作、计划、分析和管理日常任务的项目管理软件。Essential 计划永久免费，提供 100MB 存储空间和 5 个用户/团队。无限工作空间、会议、任务分配、时间表和问题跟踪。
  * [Ora](https://ora.pm/)——敏捷任务管理和团队协作。免费版供最多 3 个用户使用，文件限制为 10MB。
  * [pivotaltracker.com](https://www.pivotaltracker.com/)——免费供无限数量的公共项目和两个私人项目使用，每个项目最多有三个活跃用户（读写）和无限数量的被动用户（只读）。
  * [plan.io](https://plan.io/)——具有存储库托管和更多选项的项目管理。免费供两个用户使用，有十个客户和 500MB 存储空间
  * [Plane](https://plane.so/)——Plane 是一个简单、可扩展、开源的项目和产品管理工具。免费供无限成员使用，文件上传大小最多为 5MB，问题数量最多为 1000 个。
  * [planitpoker.com](https://www.planitpoker.com/)——免费在线规划扑克（估算工具）
  * [point.poker](https://www.point.poker/)——在线规划扑克（基于共识的估算工具）。免费供无限用户、团队、会话、轮次和投票使用。您无需注册。
  * [ScrumFast](https://www.scrumfast.com)——具有非常直观界面的 Scrum 板，免费供最多 5 个用户使用。

  * [快捷键](https://shortcut.com/) - 项目管理平台。免费版最多可支持 10 个用户永久使用。
  * [SpeedBoard](https://speedboard.app) - 用于敏捷和 Scrum 回顾的看板 - 免费。
  * [Tadum](https://tadum.app) - 为定期会议设计的会议议程和会议纪要应用程序，最多可供 10 个团队免费使用
  * [taiga.io](https://taiga.io/)——适用于初创公司和敏捷开发人员的项目管理平台，开源免费
  * [Tara AI](https://tara.ai/)——简单的冲刺管理服务。免费版没有用户限制，任务、冲刺和工作区数量无限制。
  * [targetprocess.com](https://www.targetprocess.com/)——可视化项目管理，从看板和 Scrum 到几乎任何运营流程。免费版不限用户数量，最多可容纳 1,000 个数据实体 [{更多详情](https://www.targetprocess.com/pricing/) }
  * [taskade.com](https://www.taskade.com/)——实时协作任务列表和团队大纲。免费版有一个工作区，任务和项目数量不限；1GB 文件存储；项目历史记录保留一周；视频会议每次可容纳五名参会者。
  * [taskulu.com](https://taskulu.com/)——基于角色的项目管理。免费版最多可供 5 名用户使用。与 GitHub/Trello/Dropbox/Google Drive 集成
  * [Teaminal](https://www.teaminal.com) - 适用于远程团队的站立会议、回顾和冲刺规划工具。免费版最多可供 15 名用户使用。
  * [teamwork.com](https://teamwork.com/)——项目管理和团队聊天。免费版可供五名用户和两个项目使用。提供高级计划。
  * [teleretro.com](https://www.teleretro.com/)——简单有趣的回顾工具，带有破冰游戏、动图和表情符号。免费版包括三个回顾和无限成员。
  * [testlio.com](https://testlio.com/)——问题跟踪、测试管理和测试版测试平台。仅限私人使用免费
  * [terrastruct.com](https://terrastruct.com/)——专门用于软件架构的在线图表制作工具。免费版每个图表最多可使用四层。
  * [todoist.com](https://todoist.com/)——协作和个人任务管理。免费版有：5 个活跃项目、项目中 5 个用户、上传文件最大 5MB、3 个过滤器和一周的活动历史。
  * [trello.com](https://trello.com/)——基于看板的项目管理。无限个人看板，10 个团队看板。
  * [Tweek](https://tweek.so/)——简单的每周待办事项日历和任务管理。
  * [ubertesters.com](https://ubertesters.com/)——测试平台、集成和众包测试人员，2 个项目，5 个成员
  * [vabotu](https://vabotu.com/) - 用于项目管理的协作工具。提供免费和其他计划。自由职业者计划适用于 10 名用户，包括消息传递、任务看板、5GB 在线存储、工作区和导出数据。
  * [Wikifactory](https://wikifactory.com/)——具有项目、VCS 和问题的产品设计服务。免费版提供无限项目和协作者以及 3GB 存储空间。
  * [Yodiz](https://www.yodiz.com/)——敏捷开发和问题跟踪。免费版最多可容纳 3 名用户，无限项目。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud)——免费托管的 YouTrack（InCloud）适用于 FOSS 项目和私人项目（免费供 3 个用户使用）。包括时间跟踪和敏捷看板
  * [zenhub.com](https://www.zenhub.com)——GitHub 内部唯一的项目管理解决方案。免费提供公共存储库、OSS 和非营利组织
  * [zenkit.com](https://zenkit.com)——项目管理和协作工具。免费版最多可供 5 名成员使用，5GB 附件。
  * [Zube](https://zube.io)——具有免费计划的项目管理，适用于 4 个项目和 4 名用户。提供 GitHub 集成。
  * [Toggl](https://toggl.com/)——提供两个免费的生产力工具。[Toggl Track](https://toggl.com/track/)用于时间管理和跟踪应用程序，具有免费计划，提供专为自由职业者设计的无缝时间跟踪和报告。它具有无限的跟踪记录、项目、客户端、标签、报告等。和[Toggl Plan](https://toggl.com/plan/)用于任务规划，具有免费计划，适用于独立开发人员，任务、里程碑和时间线不限。
  * [Sflow](https://sflow.io)——sflow.io 是一款专为敏捷软件开发、营销、销售和客户支持而构建的项目管理工具，特别是对于外包和跨组织协作项目。免费版最多可容纳 3 个项目和 5 名成员。
  * [Pulse.red](https://pulse.red)——免费的极简主义项目时间跟踪和时间表应用程序。

**[⬆️ 返回顶部](#目录)**

## 存储和媒体处理

  * [AndroidFileHost](https://androidfilehost.com/)——免费文件共享平台，速度、带宽、文件数、下载数等不受限制。主要面向与 Android 开发相关的文件，如 APK 构建、自定义 ROM 和修改等，但似乎也接受其他任何文件。
  * [borgbase.com](https://www.borgbase.com/)——简单安全的异地备份托管服务，适用于 Borg Backup。提供 10GB 免费备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/)——简单的云存储服务。提供 10GB 免费存储空间
  * [sync.com](https://www.sync.com/)——端到端云存储服务。提供 5GB 免费存储空间
  * [pcloud.com](https://www.pcloud.com/)——云存储服务。提供高达 10GB 的免费存储空间
  * [sirv.com](https://sirv.com/)——具有即时图像优化和调整大小功能的智能图像 CDN。免费层包括 500MB 存储空间和 2GB 带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home)——全面的图像优化和 CDN 服务，在全球拥有 1500 多个接入点。提供多种图像缩放、压缩和水印功能。为响应式图像、360 度图像制作和图像编辑提供开源插件。免费计划包括每月 25GB 的 CDN 流量、25GB 的缓存存储和无限转换。
  * [cloudinary.com](https://cloudinary.com/)——图像上传、强大的操作、存储和交付服务，适用于网站和应用程序，提供 Ruby、Python、Java、PHP、Objective-C 等更多库。免费层包括 25 个每月信用额度。一个信用额度等于 1000 次图像转换、1GB 存储空间或 1GB CDN 使用量。
  * [embed.ly](https://embed.ly/)——提供在网页中嵌入媒体、响应式图像缩放和从网页中提取元素的 API。免费计划可在每月 5000 个 URL、15 次请求/秒的情况下使用。
  * [filestack.com](https://www.filestack.com/)——文件选择、转换和交付，免费 250 个文件、500 次转换和 3GB 带宽。
  * [file.io](https://www.file.io)——2GB 文件存储。文件下载一次后自动删除。提供与存储交互的 REST API。请求速率限制为每分钟一次。
  * [freetools.site](https://freetools.site/)——免费在线工具。转换或编辑文档、图像、音频、视频等。
  * [GoFile.io](https://gofile.io/)——免费文件共享和存储平台，可通过基于网络的 UI 和 API 使用。无文件大小、带宽、下载数等限制。但文件在不活动（10 天以上没有下载）时会被删除。
  * [gumlet.com](https://www.gumlet.com/)——通过 CDN 进行图像和视频托管、处理和流式传输。提供慷慨的免费层，视频每月 250GB，图像每月 30GB。
  * [image-charts.com](https://www.image-charts.com/)——无限图像图表生成，带有水印
  * [Imgbot](https://github.com/marketplace/imgbot)——Imgbot 是一个友好的机器人，可以优化你的图像并为你节省时间。优化后的图像意味着更小的文件大小，而不会牺牲质量。对于开源项目是免费的。
  * [ImgBB](https://imgbb.com/)——ImgBB 是一个无限制的图像托管服务。将图像拖放到屏幕上的任何位置。图像限制为 32MB。上传图像后接收直接图像链接、BBCode 和 HTML 缩略图。登录以查看上传历史记录。
  * [imgen](https://www.jitbit.com/imgen/)——免费无限的社交封面图像生成 API，无水印
  * [imgix](https://www.imgix.com/)——图像缓存、管理和 CDN。免费计划包括 1000 个原始图像、无限转换和 100GB 带宽
  * [kraken.io](https://kraken.io/)——作为一项服务提供网站性能优化的图像优化，免费计划最大文件大小为 1MB
  * [kvstore.io](https://www.kvstore.io/)——键值存储服务。免费层允许 100 个键、1KB/键、100 次调用/小时
  * [npoint.io](https://www.npoint.io/)——具有协作模式编辑的 JSON 存储
  * [nitropack.io](https://nitropack.io/)——通过完整的前端优化（缓存、图像和代码优化、CDN）自动加速网站速度。免费计划适用于每月最多 5000 次页面浏览量。
  * [otixo.com](https://www.otixo.com/)——从一个地方加密、共享、复制和移动所有云存储文件。基本计划提供无限文件传输，最大文件大小为 250MB，并允许五个加密文件
  * [packagecloud.io](https://packagecloud.io/)——托管的 YUM、APT、RubyGem 和 PyPI 软件包存储库。可通过请求获得有限的免费计划和开源计划。
  * [getpantry.cloud](https://getpantry.cloud/)——适用于个人项目、黑客马拉松和移动应用程序的简单 JSON 数据存储 API！
  * [piio.co](https://piio.co/)——适用于每个网站的响应式图像优化和交付。开发者和个人网站的免费计划。包括免费 CDN、WebP 和即时加载。
  * [Pinata IPFS](https://pinata.cloud)——Pinata 是上传和管理 IPFS 上文件的最简单方法。我们友好的用户界面和 IPFS API 使 Pinata 成为最容易使用的 IPFS 固定服务，适用于平台、创作者和收藏家。免费提供 1GB 存储以及 API 访问。
  * [placekitten.com](https://placekitten.com/)——获取小猫图片的快速简单服务，可作为占位符使用
  * [plot.ly](https://plot.ly/)——图表和共享你的数据。免费层包括无限公共文件和十个私有文件
  * [podio.com](https://podio.com/)——你可以使用 Podio 与最多五个人的团队合作，并试用基本计划的功能，但不包括用户管理
  * [QuickChart](https://quickchart.io)——生成可嵌入的图像图表、图形和 QR 码
  * [redbooth.com](https://redbooth.com)——P2P 文件同步，最多可供 2 个用户免费使用
  * [resmush.it](https://resmush.it)——reSmush.it 是一个免费的 API，提供图像优化。reSmush.it 已在 WordPress、Drupal 或 Magento 等常见 CMS 上实现。reSmush.it 是使用最广泛的图像优化 API，已经处理了超过 70 亿张图像，并且仍然是免费的。
  * [Shotstack](https://shotstack.io)——用于按比例生成和编辑视频的 API。每月免费提供最多 20 分钟的渲染视频
  * [tinypng.com](https://tinypng.com/)——用于压缩和调整 PNG 和 JPEG 图像大小的 API，每月免费提供 500 次压缩
  * [transloadit.com](https://transloadit.com/)——处理文件上传以及视频、音频、图像、文档的编码。免费计划适用于开源、慈善机构和学生，通过 GitHub 学生开发者包。商业应用程序可免费获得 2GB 用于测试
  * [twicpics.com](https://www.twicpics.com)——响应式图像即服务。它提供图像 CDN、媒体处理 API 和前端库，可自动优化图像。服务免费，每月最多可使用 3GB 流量。
  * [uploadcare.com](https://uploadcare.com/hub/developers/)——Uploadcare 提供基于先进算法的媒体管道和终极工具包。所有功能对开发人员完全免费：文件上传 API 和 UI、图像 CDN 和源服务、自适应交付和智能压缩。免费层包括 3000 次上传、3GB 流量和 3GB 存储。
  * [imagekit.io](https://imagekit.io)——图像 CDN，具有自动优化、实时转换和存储功能，可在几分钟内集成到现有设置中。免费计划包括每月最多 20GB 的带宽。
  * [internxt.com](https://internxt.com)——Internxt Drive 是基于绝对隐私和无妥协安全的零知识文件存储服务。注册即可免费获得 10GB，永久有效！
  * [degoo.com](https://degoo.com/)——基于 AI 的云存储，免费提供高达 20GB、三个设备、5GB 推荐奖金（90 天账户不活动）。

  * [ImageEngine](https://imageengine.io/)——ImageEngine 是一个易于使用的全球图像 CDN。设置时间少于 60 秒。支持 AVIF 和 JPEGXL，有 WordPress、Magento、React、Vue 等插件等。在此[申请](https://imageengine.io/developer-program/)免费开发者账户。
  * [DocsParse](https://docsparse.com/)——基于 GPT 的 AI 处理 PDF、图像，将其转换为 JSON、CSV、EXCEL 格式的结构化数据。每月免费提供 30 个信用额度。


**[⬆️ 返回顶部](#目录)**

## 设计和用户界面（UI）

  * [AllTheFreeStock](https://allthefreestock.com) - 一个精选的免费股票图片、音频和视频列表。
  * [Float UI](https://floatui.com/) - 一个免费的网络开发工具，用于快速创建具有现代感和响应性的网站，即使对于非设计师也是如此。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供了一个由 Ant Motion 的运动组件构建的模板。它有一个丰富的主页模板，下载模板代码包，并可以快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) - 专注于开发人员和设计师之间的协作，Backlight 是一个完整的编码平台，团队可以在其中构建、记录、发布、扩展和维护设计系统。免费计划允许最多 3 个编辑器在一个设计系统上工作，观众数量不限。
  * [BoxySVG](https://boxy-svg.com/app) - 一个免费的可安装 Web 应用程序，用于绘制 SVG 并以 SVG、PNG、jpeg 等格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 免费在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，如用于 React、Vue 和 Svelte 的 SVG。
  * [cleverbrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用程序。此外，他们还提供作为组件的付费集成。
  * [cloudconvert.com](https://cloudconvert.com/) - 将任何内容转换为任何内容。支持 208 种格式，包括视频和 gif。
  * [CodeMyUI](https://codemyui.com) - 精心挑选的 Web 设计和 UI 灵感集合，带有代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶级调色板中获得灵感。
  * [coolors](https://coolors.co/) - 颜色调色板生成器。免费的。
  * [Branition](https://branition.com/colors) - 为品牌精心挑选的颜色调色板。
  * [css-gradient.com](https://www.css-gradient.com/) - 免费工具，可快速生成自定义跨浏览器 CSS 渐变。以 RGB 和 HEX 格式。
  * [easyvectors.com](https://easyvectors.com/) - 免费 SVG 矢量艺术库存。免费下载最佳矢量图形。
  * [figma.com](https://www.figma.com) - 在线团队协作设计工具；免费层包括无限文件和查看器，最大有 2 个编辑器和 3 个项目。
  * [Flyon UI](https://flyonui.com/) - 用于 Tailwind CSS 的最简单组件库。
  * [framer.com](https://www.framer.com/) - Framer 帮助您为下一个应用、网站或产品迭代和动画界面创意-从强大的布局开始。对于将 Framer 作为专业原型工具进行验证的任何人：无限的查看者，最多 2 个编辑器，以及最多 3 个项目。
  * [freeforcommercialuse.net](https://freeforcommercialuse.net/) - FFCU 无后顾之忧的模型/财产发布库存照片
  * [Gradientos](https://www.gradientos.app) - 使选择渐变变得快速而容易。
  * [Icon Horse](https://icon.horse) - 从我们的简单 API 为任何网站获取最高分辨率的 favicon。
  * [Iconoir](https://iconoir.com) - 一个包含数千个图标的开源图标库，支持 React、React Native、Flutter、Vue、Figma 和 Framer。
  * [Icons8](https://icons8.com) - 图标、插图、照片、音乐和设计工具。免费计划提供有限的低分辨率格式。使用我们的资产时，请链接到 Icons8。
  * [landen.co](https://www.landen.co) - 为您的初创公司生成、编辑和发布漂亮的网站和登录页面。无需代码。免费层允许您拥有一个网站，完全可定制并发布在网络上。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一个原型制作和设计工具。-它完全免费，也是开源的。
  * [lensdump.com](https://lensdump.com/) - 免费云图像托管。
  * [Lorem Picsum](https://picsum.photos/) - 一个免费的工具，易于使用，时尚的占位符。在我们的 URL 之后，添加您想要的图像大小（宽度和高度），您将获得一张随机图片。
  * [LottieFiles](https://lottiefiles.com/) - 世界上最大的设计师、开发人员等在线平台，用于世界上最小的动画格式。访问适用于 Android、iOS 和 Web 的 Lottie 动画工具和插件。
  * [MagicPattern](https://www.magicpattern.design/tools) - CSS 和 SVG 背景生成器和工具的集合，用于渐变、图案和斑点。
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型制作和协作，免费计划仅限于一个用户和一个项目。
  * [Mindmup.com](https://www.mindmup.com/) - 免费无限的思维导图，并将其存储在云中。您的思维导图随时随地都可以在任何设备上使用。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一个强大的设计协作和交接工具。免费计划包括三个用户和五个项目，所有功能可用。
  * [mockupmark.com](https://mockupmark.com/create/free) - 创建逼真的 T 恤和服装样机，用于社交媒体和电子商务，40 个免费样机。
  * [Mossaik](https://mossaik.app) - 具有不同工具（如波浪、博客和图案）的免费 SVG 图像生成器。
  * [movingpencils.com](https://movingpencils.com) - 快速的基于浏览器的向量编辑器。完全免费。
  * [Octopus.do](https://octopus.do) - 可视化站点地图生成器。实时构建您的网站结构，并快速与您的团队或客户共享以进行协作。
  * [Pencil](https://github.com/evolus/pencil) - 使用 Electron 的开源设计工具。
  * [Penpot](https://penpot.app) - 基于网络的开源设计和原型制作工具。支持 SVG。完全免费。
  * [pexels.com](https://www.pexels.com/) - 免费用于商业用途的库存照片。有一个免费的 API，允许您按关键字搜索照片。
  * [photopea.com](https://www.photopea.com) - 一款免费的高级在线设计编辑器，具有 Adobe Photoshop UI，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch App）。
  * [pixlr.com](https://pixlr.com/) - 免费的在线浏览器编辑器，可与商业编辑器媲美。
  * [Plasmic](https://www.plasmic.app/) - 一种快速、易于使用、强大的 Web 设计工具和页面构建器，可集成到您的代码库中。构建响应式页面或复杂组件；可选地使用代码扩展；并发布到生产站点和应用程序。
  * [Pravatar](https://pravatar.cc/) - 生成随机的占位符假头像，其 URL 可以直接在您的网络/应用程序中链接。
  * [Proto.io](https://www.proto.io) - 创建无需编码的完全交互式 UI 原型。免费层在免费试用期结束后可用。免费层包括一个用户、一个项目、五个原型、100MB 在线存储和 proto.io 应用程序的预览。
  * [resizeappicon.com](https://resizeappicon.com/) - 用于调整和管理您的应用程序图标的简单服务。
  * [Rive](https://rive.app) - 创建并将精美的动画发送到任何平台。个人用户永久免费。该服务是一个编辑器，它还在服务器上托管所有图形。他们还为许多平台提供运行时，以运行使用 Rive 创建的表示形式。
  * [storyset.com](https://storyset.com/) - 使用此工具为您的项目创建令人难以置信的免费定制插图。
  * [smartmockups.com](https://smartmockups.com/) - 创建产品样机，200 个免费样机。
  * [tabler-icons.io](https://tabler-icons.io/) - 超过 1500 个免费可复制和粘贴的可编辑 SVG 图标。
  * [UI Avatars](https://ui-avatars.com/) - 使用名称的首字母生成头像。其 URL 可以直接在您的网络/应用程序中链接。支持通过 URL 配置参数。
  * [unDraw](https://undraw.co/) - 一个不断更新的美丽 SVG 图像集合，您可以完全免费使用，无需归属。
  * [unsplash.com](https://unsplash.com/) - 免费用于商业和非商业目的的库存照片（随意使用许可证）。

  * [walkme.com](https://www.walkme.com/)——企业级指导和参与平台，免费计划可进行三个最多五步/步的引导操作。
  * [Webflow](https://webflow.com)——具有动画和网站托管功能的所见即所得网站构建器。免费提供两个项目。
  * [Updrafts.app](https://updrafts.app)——基于 tailwindcss 的设计的所见即所得网站构建器。免费用于非商业用途。
  * [whimsical.com](https://whimsical.com/)——协作流程图、线框、便利贴和思维导图。可创建多达 4 个免费看板。
  * [Zeplin](https://zeplin.io/)——设计师和开发人员协作平台。展示设计、资产和样式指南。免费用于一个项目。
  * [Pixelixe](https://pixelixe.com/)——在线创建和编辑引人入胜、独特的图形和图像。
  * [Responsively App](https://responsively.app)——用于更快更精确的响应式 Web 应用程序开发的免费开发工具。
  * [SceneLab](https://scenelab.io)——在线模拟图形编辑器，拥有不断扩展的免费设计模板集合。
  * [xLayers](https://xlayers.dev)——预览和将 Sketch 设计文件转换为 Angular、React、Vue、LitElement、Stencil、Xamarin 等（在 https://github.com/xlayers/xlayers 处免费和开源）
  * [Grapedrop](https://grapedrop.com/)——基于 GrapesJS 框架的响应式、强大、SEO 优化的网页构建器。免费用于前五页，无限自定义域名，所有功能和简单使用。
  * [Mastershot](https://mastershot.app)——完全免费的基于浏览器的视频编辑器。无水印，高达 1080p 的导出选项。
  * [Unicorn Platform](https://unicornplatform.com/)——轻松的着陆页构建器和托管。免费提供一个网站。
  * [react-favicon.com](https://react-favicon.com/)——使用 React 和 JSX 使用任何字体和图标库为您的网站生成 favicons。
  * [SVGmix.com](https://www.svgmix.com/)——30 多万个免费 SVG 图标、集合和品牌徽标的大型存储库。它在浏览器中提供了一个简单的向量编辑程序，用于快速文件编辑。
  * [svgrepo.com](https://www.svgrepo.com/)——使用各种向量库探索、搜索和找到最适合您项目的图标或向量。下载免费的 SVG 向量用于商业用途。
  * [haikei.app](https://www.haikei.app/)——Haikei 是一个网络应用程序，用于生成独特的 SVG 形状、背景和图案——可与您的设计工具和工作流程一起使用。
  * [Canva](https://canva.com)——免费在线设计工具，用于创建视觉内容。
  * [Superdesigner](https://superdesigner.co)——一组免费的设计工具，可通过几次点击创建独特的背景、图案、形状、图像等。
  * [TeleportHQ](https://teleporthq.io/)——低代码前端设计和开发平台。TeleportHQ 是一个协作式前端平台，可立即创建和发布无后端静态网站。三个免费项目，无限协作者，免费代码导出。
  * [vector.express](https://vector.express)——快速、轻松地将您的 AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS 和 SVG 向量转换。
  * [Vertopal](https://www.vertopal.com)——Vertopal 是一个免费的在线平台，用于将文件转换为各种格式。包括 JPG 到 SVG、GIF 到 APNG、PNG 到 WEBP、JSON 到 XML 等开发人员转换器。
  * [okso.app](https://okso.app)——极简主义在线绘图应用程序。允许创建快速草图和视觉笔记。将草图导出为 PNG、JPG、SVG 和 WEBP。也可作为 PWA 安装。免费供所有人使用（无需注册）。
  * [Wdrfree SVG](https://wdrfree.com/free-svg)——黑白免费 SVG 切割文件。
  * [Lucide](https://lucide.dev)——免费可定制且一致的 SVG 图标工具包。
  * [Logo.dev](https://www.logo.dev)——具有 4400 多万个品牌的公司徽标 API，就像调用 URL 一样简单。前 10,000 次 API 调用免费。
  * [MDBootstrap](https://mdbootstrap.com/)——免费用于个人和商业使用的 Bootstrap、Angular、React 和 Vue UI 工具包，超过 700 个组件，精美的模板，1 分钟安装，广泛的教程和庞大的社区。
  * [TW Elements](https://tw-elements.com/)——使用 Tailwind CSS 重新创建的免费 Bootstrap 组件，但具有更好的设计和更多功能。
  * [DaisyUI](https://daisyui.com/)——免费。“使用 Tailwind CSS，但少写类名”提供按钮等组件。
  * [Scrollbar.app](https://scrollbar.app)——用于为网络设计自定义滚动条的简单免费网络应用程序。
  * [css.glass](https://css.glass/)——使用 CSS 创建玻璃形态设计的免费网络应用程序。
  * [hypercolor.dev](https://hypercolor.dev/)——Tailwind CSS 颜色渐变的精选集合，还提供了多种生成器来创建自己的渐变。
  * [iconify.design](https://icon-sets.iconify.design/)——超过 100 个图包的集合，具有统一的界面。允许您在包中搜索图标并将单个图标导出为 SVGs 或用于流行的网络框架。
  * [NextUI](https://nextui.org/)——免费。美丽、快速和现代的 React & Next.js UI 库。
  * [Glyphs](https://glyphs.fyi/)——免费的，网络上最强大的图标，完全可编辑，真正的开源设计系统。
  * [ShadcnUI](https://ui.shadcn.com/)——可复制和粘贴到您的应用程序中的精美组件。可访问。可定制。开源。
  * [HyperUI](https://www.hyperui.dev/)——免费的开源 Tailwind CSS 组件。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/)——一键生成一整年的独特图标，完全免费。
  * [Image BG Blurer](https://imagebgblurer.com/)——为图像生成模糊的背景框架，使用该图像源作为背景模糊，适用于 Notion、Trello、Jira 等工具。
  * [Webstudio](https://webstudio.is/)——Webflow 的开源替代方案。免费计划在其域上提供无限数量的网站。五个网站使用自定义域名。每月十万次页面浏览量。2GB 资产存储。
  * [Nappy](https://nappy.co/)——免费的黑人棕色人物美丽照片，可用于商业和个人用途。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [最佳网站]一个展示所有最佳设计网站的平台（由设计师投票）。
  * [Behance](https://www.behance.net/) - [设计展示]设计师展示作品的地方。可以按 UI/UX 项目的类别进行筛选。
  * [dribbble](https://dribbble.com/) - [设计展示]独特的设计灵感，通常不是来自真实的应用程序。
  * [Landings](https://landings.dev/) - [网页截图]根据您的喜好，找到最佳的着陆页设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI 套件/网页截图]Lapa Ninja 是一个画廊，展示了 6025 个最佳着陆页示例，为设计师提供免费书籍和免费的 UI 套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计]定期更新的着陆页屏幕截图。包括桌面、平板电脑和移动设备的屏幕截图。
  * [Mobbin](https://mobbin.design/) - [移动设备屏幕截图]通过我们的 50,000+个可完全搜索的移动应用程序屏幕截图库，节省数小时的 UI&UX 研究时间。
  * [Uiland Design](https://uiland.design/) - [移动设备屏幕截图]探索来自非洲和世界领先公司的移动和网络 UI 设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动设备屏幕截图]一个设计灵感库，包含设计师、开发人员和产品制造商可参考的 iOS 和 Android 上最好的 UI UX 模式。
  * [Page Flows](https://pageflows.com/) - [移动/网络视频和屏幕截图]许多移动和网络应用的完整流程视频。还包括屏幕截图。可高度搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动设备屏幕截图]获取灵感并跟上最新的网络和移动应用程序 UI 设计趋势。可按模式和应用程序进行过滤。
  * [scrnshts](https://scrnshts.club/) - [移动设备屏幕截图]精心挑选的最佳应用商店设计屏幕截图集合。
  * [UI Garage](https://uigarage.net/) - [移动/网络屏幕截图]设计师和开发人员日常 UI 灵感和模式，用于查找项目的灵感、工具和最佳资源。
  * [Refero](https://refero.design/) - [网页截图]来自优秀网络应用程序的可标记和可搜索的设计参考集合。

**[⬆️ 返回顶部](#目录)**

## 地图上的数据可视化

  * [IP 地理定位](https://ipgeolocation.io/)——提供免费开发者计划，每月有 30K 请求。
  * [carto.com](https://carto.com/)——从您自己和公共数据创建地图和地理空间 API。
  * [Clockwork Micro](https://clockworkmicro.com/)——像时钟一样工作的地图工具。每月免费查询 50,000 次（地图瓦片、db2vector、高程）。
  * [developers.arcgis.com](https://developers.arcgis.com)——用于地图、地理空间数据存储、分析、地理编码、路由等的 API 和 SDK，涵盖网络、桌面和移动。每月免费提供 200 万张基本地图瓦片、20,000 个未存储的地理编码、20,000 条简单路线、5,000 次驾车时间计算以及 5GB 免费的地图瓦片和数据存储。
  * [Foursquare](https://developer.foursquare.com/)——来自 Places API 和 Pilgrim SDK 的位置发现、场地搜索和上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/)——矢量和光栅地图瓦片、地理编码、地点、路由、等压线 API。每天免费请求 3000 次。
  * [geocod.io](https://www.geocod.io/)——通过 API 或 CSV 上传进行地理编码。每天免费查询 2500 次。
  * [geocodify.com](https://geocodify.com/)——通过 API 或 CSV 上传进行地理编码和地理解析。每月免费查询 10k 次。
  * [geojs.io](https://www.geojs.io/)——高可用的 REST/JSON/JSONP IP 地理定位查找 API。
  * [giscloud.com](https://www.giscloud.com/)——在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/)——提供免费的开发者套餐，用于路由、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/)——用于地图和位置感知应用的 API 和 SDK。免费提供每月 250k 笔交易。
  * [locationiq.com](https://locationiq.com/)——地理编码、地图和路由 API。每天免费提供 5000 次请求。
  * [mapbox.com](https://www.mapbox.com/)——用于显示地图数据的地图、地理空间服务和 SDK。
  * [maptiler.com](https://www.maptiler.com/cloud/)——用于地图可视化的矢量地图、地图服务和 SDK。免费提供每周更新的矢量tiles 和四种地图样式。
  * [nominatim.org](https://nominatim.org/)——OpenStreetMap 的免费地理编码服务，提供全球地址搜索功能和反向地理编码功能。
  * [nextbillion.ai](https://nextbillion.ai/)——与地图相关的服务：地理编码、导航（方向、路由、路线优化、距离矩阵）、地图 SDK（矢量、静态、移动 SDK）。[免费提供指定配额](https://nextbillion.ai/pricing)每个服务。
  * [opencagedata.com](https://opencagedata.com)——地理编码 API，聚合了 OpenStreetMap 和其他开放地理源。每天免费查询 2500 次。
  * [osmnames](https://osmnames.org/)——地理编码，搜索结果按相关维基百科页面的受欢迎程度排序。
  * [positionstack](https://positionstack.com/)——免费对全球地点和坐标进行地理编码。个人使用每月 25,000 次请求。
  * [stadiamaps.com](https://stadiamaps.com/)——地图瓦片、路由、导航和其他地理空间 API。非商业使用和测试每天免费提供 2500 次地图视图和 API 请求。
  * [maps.stamen.com](http://maps.stamen.com/)——免费地图瓦片和tile 托管。
  * [ipstack](https://ipstack.com/)——通过 IP 地址定位和识别网站访问者。
  * [Geokeo api](https://geokeo.com)——具有语言校正等功能的地理编码 API。全球覆盖。每天免费查询 2500 次。

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/)——为多个发行版（SUSE、EL、Fedora、Debian 等）提供软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org)——基于模拟的 RPM 构建服务，适用于 Fedora 和 EL。
  * [help.launchpad.net](https://help.launchpad.net/Packaging)——Ubuntu 和 Debian 构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境（IDE）和代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线 PHP 外壳和代码片段共享网站，可在 300 多个 PHP 版本中运行您的代码
  * [Android Studio](https://d.android.com/studio) - Android Studio 为在各种类型的 Android 设备上构建应用程序提供了最快的工具。开源 IDE 对每个人都是免费的，是最好的 Android 应用程序开发工具。适用于 Windows、Mac、Linux，甚至 ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) - 用于在 Android 设备上开发真正的基于 Gradle 的 Android 应用程序的开源 IDE。
  * [Apache Netbeans](https://netbeans.apache.org/) - 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) - 具有即时 API 模拟和生成文档的协作式设计 API（对于一个管理员帐户和托管文档，免费用于无限的 API 蓝图和无限用户）。
  * [BBEdit](https://www.barebones.com/) - BBEdit 是适用于 macOS 的流行且可扩展的编辑器。免费模式提供了强大的核心功能集[https://www.barebones.com/products/bbedit/comparison.html]和升级到高级功能的路径。
  * [Binder](https://mybinder.org/) - 将 Git 存储库转换为一组交互式笔记本。这是一项免费的公共服务。
  * [BlueJ](https://bluej.org) - 一款免费的 Java 开发环境，专为初学者设计，全球数百万人使用。由 Oracle 提供支持，具有简单的 GUI 可帮助初学者。
  * [Bootify.io](https://bootify.io/) - 带有自定义数据库和 REST API 的 Spring Boot 应用程序生成器。
  * [Brackets](http://brackets.io/) - 专门为网页开发设计的开源文本编辑器。它轻巧、易于使用且高度可定制。
  * [cacher.io](https://www.cacher.io) - 带有标签的代码片段组织者，支持 100 多种编程语言。
  * [Code::Blocks](https://codeblocks.org) - 免费的 Fortran 和 C/C++ IDE。开源，可在 Windows、macOS 和 Linux 上运行。
  * [Cody](https://sourcegraph.com/cody) - 免费的 AI 编码助手，可以编写（代码块、自动完成、单元测试）、理解（整个代码库的知识）、修复和查找代码。适用于 VS Code、JetBrains 和在线使用。
  * [codiga.io](https://codiga.io/) - 编码助手，可让您在 IDE 中直接搜索、定义和重用代码片段。个人和小组织免费使用。
  * [codesnip.com.br](https://codesnip.com.br) - 带有类别、搜索和标签的简单代码片段管理器。免费且无限。
  * [cocalc.com](https://cocalc.com/) - （以前在 cloud.sagemath.com 名为 SageMathCloud） - 云协作计算。浏览器访问完整的 Ubuntu，内置协作和大量免费软件，适用于数学、科学、数据科学，预安装：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
  * [code.cs50.io](https://code.cs50.io/) - 适用于 CS50 的 Visual Studio Code 是 code.cs50.io 上的网络应用程序，它为学生和教师改编了 GitHub Codespaces。
  * [codepen.io](https://codpen.io/) - CodePen 是前端网页的游乐场和代码共享网站。
  * [codesandbox.io](https://codesandbox.io/) - React、Vue、Angular、Preact 等的在线游乐场。
  * [Components.studio](https://webcomponents.dev/) - 隔离的代码组件，以故事的形式可视化它们，对它们进行测试，并在 npm 上发布它们。
  * [Eclipse Che](https://www.eclipse.org/che/) - 适用于开发团队的基于 Web 和 Kubernetes 的多语言 IDE。开源且由社区驱动。红帽提供的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)上使用。
  * [fakejson.com](https://fakejson.com/) - FakeJSON 帮助您使用其 API 快速生成虚假数据。发出描述您想要的内容和方式的 API 请求。API 以 JSON 格式返回所有内容。加快创意推向市场的过程，并在实际行动之前先进行模拟。
  * [GetVM](https://getvm.io) - 即时免费的 Linux 和 IDE 铬边栏。免费层包括每天 5 个 VM。
  * [GitPod](https://www.gitpod.io) - 适用于 GitHub 项目的即时、可随时编码的开发环境。免费层包括每月 50 小时。
  * [ide.goorm.io](https://ide.goorm.io) goormIDE 是完整的云 IDE。多语言支持，基于 Linux 的容器通过功能齐全的基于网络的终端、端口转发、自定义 URL、实时协作和聊天、共享链接、Git/Subversion 支持。还有许多其他功能（免费层包括每个容器 1GB RAM 和 10GB 存储，5 个容器插槽）。
  * [JDoodle](https://www.jdoodle.com) - 用于 60 多种编程语言的在线编译器和编辑器，免费计划可用于每天最多 200 个信用额度的 REST API 代码编译。
  * [jetbrains.com](https://jetbrains.com/products.html) - 生产力工具、IDE 和部署工具（又名[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源和用户组可免费获得许可证。
  * [jsbin.com](https://jsbin.com) - JS Bin 是另一个前端网页的游乐场和代码共享网站（HTML、CSS 和 JavaScript。它还支持 Markdown、Jade 和 Sass）。
  * [jsfiddle.net](https://jsfiddle.net/) - JS Fiddle 是前端网页的游乐场和代码共享网站，支持协作。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 一些以 JSON 格式返回一些虚假数据的 REST API 端点。如果您想在本地运行服务器，也可以提供源代码。
  * [Lazarus](https://www.lazarus-ide.org/) - Lazarus 是一个与 Delphi 兼容的跨平台 IDE，适用于快速应用程序开发。
  * [MarsCode](https://www.marscode.com/) - 免费的基于人工智能的云托管 IDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假 JSON 数据的微小 API 模拟微服务。
  * [mockable.io](https://www.mockable.io/) - 一个简单可配置的服务，用于模拟 RESTful API 或 SOAP Web 服务。此在线服务允许您快速定义 REST API 或 SOAP 端点，并让它们返回 JSON 或 XML 数据。
  * [mockaroo](https://mockaroo.com/) - Mockaroo 允许您以 CSV、JSON、SQL 和 Excel 格式生成逼真的测试数据。您还可以为后端 API 创建模拟。
  * [Mocklets](https://mocklets.com) - 基于 HTTP 的模拟 API 模拟器，可帮助模拟 API 以实现更快的并行开发和更全面的测试，并提供终身免费层。
  * [Paiza](https://paiza.cloud/en/) - 在浏览器中开发 Web 应用程序，无需设置任何内容。免费计划提供一个服务器，具有 24 小时的生命周期和每天 4 小时的运行时间，每个服务器具有 2 个 CPU 核心、2GB RAM 和 1GB 存储。
  * [Prepros](https://prepros.io/) - Prepros 可以开箱即用编译 Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript 和 TypeScript，重新加载浏览器，使您可以轻松开发和测试您的网站，从而专注于使其完美。您还可以通过点击几下添加自己的工具。
  * [Replit](https://replit.com/) - 适用于各种编程语言的云编码环境。
  * [SoloLearn](https://code.sololearn.com) - 适合运行代码片段的云编程游乐场。支持各种编程语言。运行代码无需注册，但在其平台上保存代码时需要注册。还为初学者和中级编码人员提供免费课程。
  * [stackblitz.com](https://stackblitz.com/) - 用于创建、编辑和部署全栈应用程序的在线/云代码 IDE。支持任何流行的基于 NodeJs 的前端和后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行、多功能且高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义和优化的代码编辑器，用于构建和调试现代 Web 和云应用程序。由微软开发。

  * [VSCodium](https://vscodium.com/) - 由社区驱动，无遥测/跟踪，以及 Microsoft 编辑器 VSCode 的自由许可二进制分发
  * [wakatime.com](https://wakatime.com/) - 使用文本编辑器插件对您的编码活动进行自我量化指标，免费计划有限。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源的、跨平台的终端，用于无缝工作流程。内联呈现任何内容。保存会话和历史记录。由开放的网络标准提供支持。适用于 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) - 在浏览器中进行隔离式 Web 组件编码的 IDE，提供 58 个可用模板，支持故事和测试。
  * [PHPSandbox](https://phpsandbox.io/) - PHP 的在线开发环境
  * [WebDB](https://webdb.app) - 免费高效的数据库 IDE。具有服务器发现、ERD、数据生成器、AI、NoSQL 结构管理器、数据库版本控制等更多功能。
  * [Zed](https://zed.dev/) - Zed 是一个高性能、多玩家的代码编辑器，由 Atom 和 Tree-sitter 的创建者开发。


**[⬆️ 返回顶部](#目录)**

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云观测解决方案（Snowflake）。个人免费使用。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，可帮助您将客户数据从数据仓库同步到您的 CRM、营销和支持工具。免费层为您提供一个目的地来同步数据。
  * [Avo](https://avo.app/)——简化的分析发布工作流程。单一来源的跟踪计划，类型安全的分析跟踪库，应用内调试器和数据可观测性，可在发布前捕获所有数据问题。免费供两个工作区成员使用，可回溯 1 小时的数据可观测性。
  * [Branch](https://branch.io)——移动分析平台。免费套餐为最多 10K 移动应用用户提供深度链接和其他服务。
  * [Cauldron](https://cauldron.io)——分析开源解决方案，允许用户将来自多个协作平台的信息聚合为不同类型的数据源（Git、Github 和 Gitlab）。免费层包括无限数量的报告。
  * [Census](https://www.getcensus.com/)——反向 ETL 和运营分析平台。从您的数据仓库同步 10 个字段到 60 多个 SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com)——网站分析平台。免费计划适用于一个网站，有 3000 次分析视图。
  * [Databox](https://databox.com)——通过结合其他分析和 BI 平台来获得商业洞察力和分析。免费计划提供 3 个用户、仪表板和数据源。1100 万历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/)——每月 2000 次页面浏览量，适用于一个网站
  * [amplitude.com](https://amplitude.com/)——每月 100 万次事件，最多 2 个应用
  * [GoatCounter](https://www.goatcounter.com/)——GoatCounter 是一个开源的网络分析平台，可作为托管服务（免费供非商业使用）或自托管应用程序使用。它旨在提供易于使用和有意义的隐私友好型网络分析，作为 Google Analytics 或 Matomo 的替代方案。免费层适用于非商业用途，包括无限站点、六个月的数据保留和每月 10 万次页面浏览量。
  * [Google Analytics](https://analytics.google.com/)——Google Analytics
  * [MetricsWave](https://metricswave.com)——适用于开发人员的隐私友好型 Google Analytics 替代方案。免费计划允许每月 20k 页面浏览量，无需信用卡。
  * [Expensify](https://www.expensify.com/)——费用报告，免费个人报告审批工作流程
  * [getinsights.io](https://getinsights.io) - 关注隐私的分析，每月最多 3k 事件免费
  * [heap.io](https://heap.io)——自动捕获 iOS 或网络应用中的每个用户操作。免费提供高达 10K 每月会话。
  * [Hotjar](https://hotjar.com)——网站分析和报告。免费计划允许每天 2000 次页面浏览量。每天一百个快照（最大容量：300）。可以存储三个快照热图，为期 365 天。无限团队成员。还包括应用内和独立调查、带有屏幕截图的反馈小部件。免费层允许创建 3 个调查和 3 个反馈小部件，每月收集 20 次响应。
  * [Keen](https://keen.io/)——自定义分析，用于数据收集、分析和可视化。每月 1000 次事件免费
  * [Yandex.Datalens](https://datalens.yandex.com/)——Yandex 云数据可视化和分析服务。该服务免费提供。对用户和请求数量没有限制。
  * [Yandex.Metrica](https://metrica.yandex.com/)——无限免费分析
  * [Mixpanel](https://mixpanel.com/)——每月 100,000 个跟踪用户，无限数据历史和席位，美国或欧盟数据驻留
  * [Moesif](https://www.moesif.com)——用于 REST 和 GraphQL 的 API 分析。（免费最多 500,000 次 API 调用/月）
  * [optimizely.com](https://www.optimizely.com)——A/B 测试解决方案，免费入门计划，一个网站，1 个 iOS 和 1 个 Android 应用
  * [Microsoft PowerBI](https://powerbi.com)——由 Microsoft 提供的商业洞察力和分析。免费计划提供有限使用，用户许可证为 100 万。
  * [quantcast.com](https://www.quantcast.com/products/measure-audience-insights/)——无限免费分析
  * [Row Zero](https://rowzero.io)——快速连接的电子表格。直接连接到数据库、S3 和 API。立即导入、分析、绘制和共享数百万行数据。三个免费（永久）工作簿。
  * [sematext.com](https://sematext.com/cloud/)——每月最多 50 K 操作，1 天数据保留，无限仪表板、用户等。
  * [Similar Web](https://similarweb.com)——网络和移动应用分析。免费计划提供每个指标的五个结果，一个月的移动应用数据和三个月的网站数据。
  * [StatCounter](https://statcounter.com/)——网站访问者分析。免费计划适用于分析最近 500 名访问者。
  * [Statsig](https://statsig.com)——跨分析、功能标志和 A/B 测试的一体化平台。免费供每月最多 1m 计量事件使用。
  * [Tableau Developer Program](https://www.tableau.com/developer)——创新、创建并使 Tableau 完全适合您的组织。免费开发者计划为 Tableau Online 提供个人开发沙盒许可证。该版本是最新的预发布版本，因此数据开发人员可以测试该出色平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/)——在真实用户上测试设计和模型并跟踪访问者。免费供一个用户使用，无限制的测试
  * [woopra.com](https://www.woopra.com/)——免费的用户分析平台，适用于 500K 次操作，90 天数据保留，30 多个一键集成。
  * [counter.dev](https://counter.dev)——简单易用的网络分析，因此注重隐私。免费或按您的意愿通过捐赠支付。
  * [PostHog](https://posthog.com)——全面的产品分析套件，每月最多 1m 跟踪事件免费。还提供每月 250 次响应的无限应用内调查。
  * [Uptrace](https://uptrace.dev)——分布式跟踪工具，可帮助开发人员找出故障并找到性能瓶颈。有免费计划，为开源项目提供免费的个人订阅，并且有开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/)——Clarity 是一款免费、易于使用的工具，可捕捉真实用户如何使用您的网站。
  * [Beampipe.io](https://beampipe.io)——Beampipe 是简单、注重隐私的网络分析。免费适用于最多 5 个域和每月 10k 次页面浏览量。
  * [Aptabase](https://aptabase.com)——开源、隐私友好且简单的移动和桌面应用分析。适用于 Swift、Kotlin、React Native、Flutter、Electron 等的 SDK。免费适用于每月最多 20,000 次事件。
  * [Trackingplan](https://www.trackingplan.com/)——自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，并促进无缝协作。可以将其部署到您的生产环境中，也可以在回归测试中添加分析覆盖，而无需编写代码。
  * [LogSpot](https://logspot.io)——完整统一的网络和产品分析平台，包括可嵌入的分析小部件和自动化机器人（slack、telegram 和 webhooks）。免费计划包括每月 10,000 次事件。
  * [Umami](https://umami.is/)——简单、快速、注重隐私的 Google Analytics 替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/)——免费的轻量级注重隐私的 Google Analytics 替代方案。无限制的页面浏览量，无限制的访问者，无限制的页面热图和目标跟踪。免费适用于最多 3 个域和每个域 600 次会话重放。
  * [AppFit](https://appfit.io)——AppFit 是一款全面的分析和产品管理工具，旨在促进跨平台管理分析和产品更新的无缝衔接。免费计划包括每月 10,000 次事件、产品日记和每周洞察。

**[⬆️ 返回顶部](#目录)**

## 访问者会话记录

  * [Reactflow.com](https://www.reactflow.com/) - 按站点计费：每天 1000 页浏览量，三个热图，三个小部件，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话重放，具有用于错误重现的开发工具，实时会话支持，以及产品分析套件。每月 1000 个会话，访问所有功能，保留 7 天。
  * [LogRocket.com](https://www.logrocket.com) - 每月 1000 个会话，保留 30 天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) - 每月 1000 个会话，一个月数据保留和三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) - 按站点计费：每月 1050 页浏览量，不限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) - 一个网站免费 2500 次会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，“无流量限制”，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) - 一个网站免费 500 次会话
  * [mousestats.com](https://www.mousestats.com/) - 一个网站免费 100 次会话
  * [smartlook.com](https://www.smartlook.com/) - 网络和移动应用的免费套餐（每月 1500 次会话），三个热图，一个漏斗，1 个月数据历史记录
  * [usersurge.com](https://www.usersurge.com/) - 个人每月 250 万次会话。
  * [howuku.com](https://howuku.com) - 跟踪用户交互、参与度和事件。每月最多 5000 次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) - 记录并观看访问者如何使用您的网站或应用程序。小型项目免费无限时长

**[⬆️ 返回顶部](#目录)**

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/)——全球电话号码验证和查找 JSON API。每月 100 个 API 请求
  * [veriphone](https://veriphone.io/)——全球电话号码验证，免费、快速、可靠的 JSON API。每月 1000 个请求

**[⬆️ 返回顶部](#目录)**

## 支付和计费集成

  * [Qonversion](http://qonversion.io/)——一体化跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和货币化。与 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和网络兼容。免费使用，每月跟踪收入最高可达$10k。
  * [ParityVend](https://www.ambeteco.com/ParityVend/)——根据访问者位置自动调整价格，以扩大您的全球业务并进入新市场（购买力平价）。免费计划包括每月 7,500 次 API 请求。
  * [Glassfy](https://glassfy.io/)——应用内订阅基础架构，实时订阅事件和即开即用的货币化工具，适用于 iOS、Android、Stripe 和 Paddle。免费使用，每月收入最高可达$10k。
  * [Adapty.io](https://adapty.io/)——用于移动应用内订阅集成到 iOS、Android、React Native、Flutter、Unity 或网络应用的一站式解决方案，带有开源 SDK。免费使用，每月收入最高可达$10k。
  * [CoinMarketCap](https://coinmarketcap.com/api/)——提供加密货币市场数据，包括最新的加密和法定货币汇率。免费层每月提供 10K 调用信用。
  * [CurrencyFreaks](https://currencyfreaks.com/)——提供当前和历史货币汇率。免费提供 DEVELOPER 计划，每月有 1000 次请求。
  * [CoinGecko](https://www.coingecko.com/en/api)——提供加密货币市场数据，包括最新的加密货币汇率和历史数据。演示 API 提供稳定的每分钟 30 次调用限制和每月 10,000 次调用上限。
  * [CurrencyApi](https://currencyapi.net/)——用于物理和加密货币的实时货币汇率，以 JSON 和 XML 形式提供。免费层每月提供 1,250 次 API 请求。
  * [currencylayer](https://currencylayer.com/)——为您的企业提供可靠的汇率和货币转换，每月免费 100 次 API 请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com)——易于使用的货币转换 JSON API。免费层每天更新一次，每月限制为 1,500 次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com)——帮助商家防止支付欺诈和拒付。免费提供每月 500 次查询的微计划。
  * [FxRatesAPI](https://fxratesapi.com)——提供实时和历史汇率。免费层需要归属。
  * [MailPopin](https://mailpop.in)——通过上下文信息充分利用您的 Stripe 通知。
  * [Moesif API 货币化](https://www.moesif.com/)——通过基于使用的计费从 API 产生收入。连接到 Stripe、Chargebee 等。免费层每月提供 30,000 次事件。
  * [Nami ML](https://www.namiml.com/)——适用于 iOS 和 Android 的应用内购买和订阅的完整平台，包括无代码支付墙、CRM 和分析。免费用于运行 IAP 业务的所有基本功能。
  * [RevenueCat](https://www.revenuecat.com/)——应用内购买和订阅的托管后端（iOS 和 Android）。免费使用，每月跟踪收入最高可达$2.5k。
  * [vatlayer](https://vatlayer.com/)——即时 VAT 号码验证和欧盟 VAT 税率 API，每月免费 100 次 API 请求。
  * [Currencyapi](https://currencyapi.com)——免费的货币转换和汇率数据 API。每月免费 300 次请求，每分钟 10 次请求，供私人使用。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/)——为开发者提供 20 个免费私有存储库，为团队提供 30 个免费私有存储库，用于构建和存储 Docker 镜像
  * [Container Registry Service](https://container-registry.com/)——基于 Harbor 的容器管理解决方案。免费层为私有存储库提供 1GB 的存储空间。
  * [Docker Hub](https://hub.docker.com)——一个免费私有存储库和无限的公共存储库，用于构建和存储 Docker 镜像
  * [Play with Docker](https://labs.play-with-docker.com/)——一个简单、互动、有趣的学习 Docker 的游乐场。
  * [quay.io](https://quay.io/)——使用无限免费公共存储库构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/)——匿名和临时 Docker 镜像注册表

**[⬆️ 返回顶部](# 目录)**

## 与Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant Cloud。Vagrant 盒子托管。
  * [Vagrantbox.es](https://www.vagrantbox.es/)——一个替代的公共盒子索引

**[⬆️ 返回顶部](# 目录)**

## 开发博客网站

  * [BearBlog](https://bearblog.dev/) - 一款简洁的、基于 Markdown 的博客和网站生成器。
  * [Dev.to](https://dev.to/) - 程序员分享想法和互相帮助成长的地方。
  * [Hashnode](https://hashnode.com/) — 为开发者提供的无 Hassle 博客软件！
  * [Medium](https://medium.com/) - 让你更深入地思考对你重要的事情。
  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式迷你博客的形式免费与世界分享你的想法、知识和故事。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，可帮助你从网站的受众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个基于 GitHub 问题的轻量级评论小部件。使用 GitHub 问题进行博客评论、wiki 页面等！
  * [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被数十万网站在网络上使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，可根据需要支付“在几个域上有一位管理员，完全控制行为和外观”的费用
  * [IntenseDebate](https://intensedebate.com/) - 一个功能丰富的评论系统，适用于 WordPress、Tumblr、Blogger 等许多其他网站平台。

**[⬆️ 返回顶部](#目录)**

## 屏幕截图API

  * [ApiFlash](https://apiflash.com)——基于 Aws Lambda 和 Chrome 的屏幕截图 API。处理整页、捕获时间戳和viewport 尺寸。
  * [microlink.io](https://microlink.io/)——将任何网站转换为数据，例如元标记规范化、美化链接预览、抓取功能或屏幕截图即服务。每天免费 250 个请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/)——屏幕截图 API 使用简单的 API 调用生成任何网站的屏幕截图。构建可扩展并托管在 Google Cloud 上。每月提供 100 次免费屏幕截图。
  * [screenshotlayer.com](https://screenshotlayer.com/)——捕获任何网站的高度可定制的快照。每月免费 100 次快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/)——每月捕获 100 次快照，包括 png、gif 和 jpg，包括全长捕获，不仅仅是主页
  * [PhantomJsCloud](https://PhantomJsCloud.com)——浏览器自动化和页面渲染。免费层每天提供多达 500 页。自 2017 年以来一直提供免费层。
  * [Webshrinker.com](https://webshrinker.com)——Web Shrinker 提供网站屏幕截图和域名智能 API 服务。每月免费 100 个请求。
  * [Httpic.com](https://httpic.com)——将任何网站转换为 jpg、png 或 pdf。捕获整页屏幕截图，调整viewport，并注入自定义代码。免费层每月 150 张图像。
  * [Screenshots](https://screenshotson.click)——您的屏幕截图 API。具有高度可定制的捕获选项。每月免费 100 次屏幕截图。

**[⬆️ 返回顶部](#目录)**

## 与Flutter相关和无需Mac即可构建IOS应用程序

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代的 Flutter 在线集成开发环境，也是创建、调试和构建跨平台项目的最佳场所。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一个完全托管和管理的移动应用持续集成/持续部署（CI/CD）。你可以使用基于图形用户界面的 CI/CD 工具进行构建、测试和部署。免费套餐提供 500 分钟/月的免费时长和一个配备 2.3GHz 处理器及 8GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放界面，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件仿真（使用JavaScript编写）

  * [JsLinux](https://bellard.org/jslinux)——一个非常快速的 x86 虚拟机，能够运行 Linux 和 Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html)——一个能够运行带有网络支持的 Linux 的 OpenRISC 虚拟机。
  * [v86](https://copy.sh/v86)——一个能够直接在浏览器中运行 Linux 和其他操作系统的 x86 虚拟机。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流程帮助实现隐私设计，确保组织符合 GDPR 等法规。免费版仅限于较小的团队，SaaS 版本也是如此。
  * [Osano](https://www.osano.com/) - 包含从 GDPR 代表到 cookie 横幅的所有内容的同意管理和合规平台。免费版提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 cookie 政策以及同意管理。免费版提供有限的隐私和 cookie 政策以及 cookie 横幅。
  * [Cookiefirst](https://cookiefirst.com/) - cookie 横幅、审计和多语言同意管理解决方案。免费版提供一次扫描和一个单一横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大多数功能，但访问者数量有限。
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费版包括核心同意管理功能，他们还为经过验证的开源项目提供更高级的计划。

**[⬆️ 返回顶部](#toc)**

## 杂项

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为你的代码、文本或图像创建美观的屏幕截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件。可作为美丽的图像分享，例如用于 Twitter / Facebook 帖子，或作为链接，例如用于聊天或论坛。
  * [Blynk](https://blynk.io) - 一个具有 API 的 SaaS，用于控制、构建和评估物联网设备。免费开发者计划提供 5 个设备、免费云存储和数据存储。还提供移动应用程序。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 带有强大内置多行计算器的笔记应用程序（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 以美观的屏幕截图形式创建和分享代码片段。通常用于在 Twitter 或博客文章上美观地分享/展示代码片段。
  * [Code Time](https://www.software.com/code-time) - 用于在 VS Code、Atom、IntelliJ、Sublime Text 等中进行时间跟踪和编码指标的扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建出色的快照，以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的屏幕截图，以便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 按时间或定期安排网络钩子。免费计划允许 5 个临时计划。
  * [cron-job.org](https://cron-job.org) - 在线 cronjobs 服务。无限数量的作业免费。
  * [datelist.io](https://datelist.io) - 在线预订/约会安排系统。每月免费最多 5 次预订，包括 1 个日历
  * [Domain Forward](https://domain-forward.com/) - 一个简单的工具，用于转发任何 URL 或域名。免费最多 5 个域名和每月 200k 个请求。
  * [Elementor](https://elementor.com) - WordPress 网站构建器。免费计划提供 40 多个基本小部件。
  * [Format Express](https://www.format-express.dev) - 在线即时 JSON / XML / SQL 格式。
  * [FOSSA](https://fossa.com/) - 端到端可扩展的第三方代码管理、许可证合规性和漏洞管理。
  * [fullcontact.com](https://www.fullcontact.com/developer/pricing/) - 通过在应用中添加社交资料，帮助用户更多地了解他们的联系人。每月 500 个免费个人 API 匹配
  * [Hook Relay](https://www.hookrelay.dev/) - 为您的应用添加网络钩子支持，无需烦恼：为您完成排队、带有退避的重试和日志记录。免费计划每天有 100 次交付，14 天保留期和 3 个钩子端点。
  * [http2.pro](https://http2.pro) - HTTP/2 协议准备情况测试和客户端 HTTP/2 支持检测 API。
  * [kandi](https://kandi.openweaver.com/) - 启动应用程序开发：通过代码片段和开源库重用更快地构建自定义函数、用例和完整应用程序。
  * [Base64 解码器/编码器](https://devpal.co/base64-decode/) - 在线免费工具，用于解码和编码数据。
  * [newreleases.io](https://newreleases.io/) - 接收来自 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 的新发布的电子邮件、Slack、Telegram、Discord 和自定义 Webhooks 通知。
  * [OnlineExifViewer](https://onlineexifviewer.com/) - 在线立即查看照片的 EXIF 数据，包括 GPS 位置和元数据。
  * [PDFMonkey](https://www.pdfmonkey.io/) - 在仪表板中管理 PDF 模板，使用动态数据调用 API，并下载您的 PDF。每月提供 300 份免费文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) - 使用扩展从代码片段和 VSCode 创建美丽、可定制的屏幕截图。
  * [QuickType.io](https://quicktype.io/) - 从 JSON、模式和 GraphQL 快速自动生成模型/类/类型/接口和序列化程序，以便在任何编程语言中快速安全地处理数据。将 JSON 转换为任何语言的美观、类型安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 免费的移动友好工具，提供各种随机生成的密钥和密码，可用于保护任何应用程序、服务或设备。
  * [ray.so](https://ray.so/) - 为代码片段创建美丽的图像。
  * [readme.com](https://readme.com/) - 轻松制作美观的文档，开源免费。
  * [redirection.io](https://redirection.io/) - 用于企业、营销和 SEO 的 HTTP 重定向管理 SaaS 工具。
  * [redirect.ing](https://redirect.ing/) - 快速安全的域名转发，无需管理服务器或 SSL 证书。免费计划包括 10 个主机名和每月 100,000 个请求。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理带有 HTTPS 支持的重定向。免费计划包括 10 个源和每月 100,000 次点击。
  * [ReqBin](https://www.reqbin.com/) - 在线发布 HTTP 请求。流行的请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持标头和令牌身份验证。包括一个基本的登录系统来保存您的请求。
  * [Smartcar API](https://smartcar.com) - 用于汽车的 API，可用于定位、获取燃油箱、电池电量、里程表、解锁/锁定车门等。
  * [snappify](https://snappify.com) - 使开发人员能够创建惊人的视觉效果。从美丽的代码片段到完整的技术演示文稿。免费计划包括一次最多 3 个快照，无限下载次数和每月 5 个 AI 驱动的代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取给定经纬度的日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) - 实时遵循 PubSubHubbub 规范的源，导出，分析。免费，定制较少
  * [SurveyMonkey.com](https://www.surveymonkey.com) - 创建在线调查。在线分析结果。免费计划允许每个调查最多 10 个问题和 100 个响应。
  * [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话应用程序。将它们带到多渠道：从您的网站（实时聊天小部件）到 WhatsApp。免费计划无限量聊天机器人。
  * [Versionfeeds](https://versionfeeds.com) - 您喜爱的软件版本的自定义 RSS 源。将您的编程语言、库或喜爱的工具的最新版本放在一个源中。（前 3 个源免费）
  * [videoinu](https://videoinu.com) - 创建和编辑屏幕录制和其他在线视频。
  * [Webacus](https://webacus.dev) - 访问广泛的免费开发人员工具，用于编码、解码和数据操作。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) -  免费供 2 台设备使用，对会话数量和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) -  开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) - 按需支持和对设备的永久访问（每天免费 2 次会话）
  * [RustDesk](https://rustdesk.com/) -  面向所有人的开源虚拟/远程桌面基础架构！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) - 免费/付费的资源，如精灵、平铺集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) - 发现、收集和分享来自世界各地游戏艺术家的免费游戏资源。
  * [GameDevMarket](https://gamedevmarket.net) - 免费/付费资源，如 2D、3D、音频、GUI。
  * [OpenGameArt](https://opengameart.org) - 开源游戏资源，如音乐、声音、精灵和 gif。
  * [CraftPix](https://craftpix.net) - 免费/付费资源，如 2D、3D、音频、GUI、背景、图标、平铺集、游戏包。
  * [Game Icons](https://game-icons.net/) - 免费可定制的 SVG/PNG 图标，根据 CC-BY 许可证提供。
  * [LoSpec](https://lospec.com/) - 用于创建像素艺术和其他限制数字艺术的在线工具，有很多教程/调色板列表可供选择，用于你的游戏。
  * [ArtStation](https://www.artstation.com/) - 免费/付费的 2D、3D 资产和音频、图标、平铺集、游戏包的市场。也可以用于展示你的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，以及使用其免费计划创建自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形 3D 资产。
  * [3Dassets.one](https://3dassets.one/) - 超过 8000 个免费/付费的 3D 模型和 PBR 材质，用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0 通用许可证）2D、3D、音频和 UI 游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（具有可变分辨率）、模型、HDRIs 和画笔。提供免费插件，可导出到 Blender 等软件。
  * [Freesound](https://freesound.org/) - 免费的协作声音库，提供不同的 CC 许可证。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 为网页开发者提供的免费工具，包括 CSS 压缩/解压、图片优化、图片大小调整、大小写转换、CSS 验证、JavaScript 编译、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月免费获得高达 200 小时的音频转录。
  * [get.localhost.direct](https://get.localhost.direct) - 更好的 `*.localhost.direct` 通配符公共 CA 签名的 SSL 证书，适用于具有子域支持的本地主机开发。
  * [Framacloud](https://degooglisons-internet.org/en/) - 法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/自由开源软件和 SaaS 列表。
  * [github.com — FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) - 开发者的免费和开源软件中心。
  * [GitHub 教育](https://education.github.com/pack) - 学生的免费服务集合。需要注册。
  * [Markdown 工具](https://markdowntools.com) - 将 HTML、CSVs、PDF、JSON 和 Excel 文件转换为和从 Markdown 的工具。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) - 获得免费沙盒、工具和其他资源，以构建适用于 Microsoft 365 平台的解决方案。该订阅是 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续订。如果您积极参与开发（使用遥测数据和算法衡量），则会续订。
  * [Pyrexp](https://pythonium.net/regex) - 免费的基于网络的正则表达式测试和可视化工具，用于调试正则表达式。
  * [RedHat for Developers](https://developers.redhat.com) - 为开发者提供免费访问 Red Hat 产品，包括 RHEL、OpenShift、CodeReady 等。仅限个人计划。还提供免费电子书供参考。
  * [smsreceivefree.com](https://smsreceivefree.com/) - 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) - 免费发送和接收测试短信。
  * [SimpleBackups.com](https://simplebackups.com/) - 服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，直接存储到云存储提供商（AWS、DigitalOcean、Backblaze）。提供免费计划，可进行 1 次备份。
  * [SnapShooter](https://snapshooter.com/) - 适用于 DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持直接对数据库、文件系统和应用程序进行备份到基于 s3 的存储。提供免费计划，每天备份一个资源。
  * [Themeselection](https://themeselection.com/) - 精选高质量、现代设计、专业且易于使用的免费管理仪表板模板、HTML 主题和 UI 工具包，可帮助您更快地创建应用程序！
  * [Web.Dev](https://web.dev/measure/) - 这是一个免费工具，可让您查看网站的性能并改善 SEO，以在搜索引擎中获得更高的排名。
  * [SmallDev.tools](https://smalldev.tools/) - 开发者的免费工具，可让您对各种格式进行编码/解码、最小化 HTML/CSS/Javascript、美化、以 JSON/CSV 及多种其他格式生成虚假/测试数据集等功能。具有令人愉快的界面。
  * [UseCSV by Layercode](https://layercode.com/usecsv) - 在几分钟内将 CSV 和 Excel 导入您的网络应用程序。为您的用户提供愉快且强大的数据导入体验。免费开始，无需任何信用卡详细信息，今天就开始集成 UseCSV。您可以创建无限的导入器，上传大小高达 100Mb 的文件。
  * [Buttons Generator](https://markodenic.com/tools/buttons-generator/) - 您可以在项目中使用的 100 多个按钮。
  * [WrapPixel](https://www.wrappixel.com/) - 下载高质量的免费和高级管理仪表板模板，使用 Angular、React、VueJs、NextJS 和 NuxtJS 创建！
  * [Utils.fun](https://utils.fun/en) - 基于浏览器计算能力的所有离线日常和开发工具，包括水印生成、屏幕录制、编码和解码、加密和解密以及代码格式化，完全免费，不会将任何数据上传到云端进行处理。
  * [Free Code Tools](https://freecodetools.org/) - 有效的免费代码工具。包括 Markdown 编辑器、代码压缩/美化器、QR 码生成器、Open Graph 生成器、Twitter 卡生成器等。
  * [regex101](https://regex101.com/) - 免费网站，允许您测试和调试正则表达式（regex）。它提供了一个正则表达式编辑器和测试器，以及学习 regex 的有用文档和资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) - 100 多种开发工具，包括格式化程序、压缩器和转换器。
  * [AdminMart](https://adminmart.com/) - 使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费和高级管理仪表板和网站模板！
  * [Glob tester](https://globster.xyz/) - 一个允许您设计和测试 glob 模式的网站。它还提供了学习 glob 模式的资源。
  * [OpenUtils](https://openutils.org/) - 为开发者提供各种免费工具，如 HTML/CSS/JavaScript 格式化程序、压缩器、转换器、编码器/解码器等。
  * [SimpleRestore](https://simplerestore.io) - 无 Hassle MySQL 备份还原。无需代码或服务器即可将 MySQL 备份还原到任何远程数据库。
  * [360Converter](https://www.360converter.com/) - 免费 tier 有用的网站，可用于转换：视频转文本&&音频转文本&&语音转文本&&实时音频转文本&&YouTube 视频转文本&&添加视频字幕。在短视频转换或简短的 youtube 教程中可能会有所帮助:)
  * [QRCodeBest](https://qrcode.best/) - 使用 13 种模板创建自定义 QR 码，具有完全隐私和个人品牌。功能包括跟踪像素、项目分类和无限团队席位在 QRCode.Best。
  * [PostPulse](https://post-pulse.io) - 通过每月 AI 制作的帖子提升在线存在，增强 SEO 和网站排名，优化到 SEO 优化的域。免费计划允许您每月在我们的网站上手动发布一篇帖子。
  * [PageTools](https://pagetools.co/) - 提供一套永久免费的人工智能驱动工具，帮助您生成基本的网站政策，创建社交媒体生物、帖子和网页，只需点击一下即可。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 易于理解且免费的 MySQL EXPLAIN 输出可视化工具，可优化慢速查询。
  * [Killer Coda](https://killercoda.com/) - 在浏览器中进行交互式演练，学习 Linux、Kubernetes、容器、编程、DevOps、网络

**[⬆️ 返回顶部](#目录)**