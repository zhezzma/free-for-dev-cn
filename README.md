# free-for.dev

开发人员和开源作者现在可以从许多服务中获得免费层，但要找到所有这些服务并做出明智的决定需要花费时间。

这里列出了具有免费开发人员层的软件（SaaS、PaaS、IaaS等）和其他服务。

本列表的范围仅限于基础设施开发人员（系统管理员、DevOps 从业者等）可能发现有用的内容。我们喜欢所有免费的服务，但最好还是保持主题。有时这是一条灰色线，所以这是带有主观意念的；如果我不接受您的贡献，请不要感到冒犯。

该列表是 1600 多人提交的拉取请求、审查、想法和工作结果。您也可以通过发送 [拉取请求](https://github.com/ripienaar/free-for-dev) 来帮助添加更多服务或删除产品/服务变更或已停用的服务。

[![跟踪很棒的列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：该列表仅适用于即开即用服务，不适用于自托管软件。要符合条件，服务必须提供免费层，而不仅仅是免费试用。如果免费层是按时间划分的，则至少必须有一年。我们还从安全角度考虑免费层，因此 SSO 是可以接受的，但我不会接受将 TLS 限制为仅付费层的服务。

# 目录

  * [主要云服务提供商的永久免费限制](#主要云服务提供商的永久免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [工件仓库](#工件仓库)
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
  * [开发博客网站](#开发博客网站)
  * [域名系统](#域名系统)
  * [与Docker相关](#与Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能切换管理平台](#功能切换管理平台)
  * [字体](#字体)
  * [表格](#表格)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际手机号码验证API和SDK](#国际手机号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息传递和流式传输](#消息传递和流式传输)
  * [杂项](#杂项)
  * [监控](#监控)
  * [平台即服务](#平台即服务)
  * [软件包构建系统](#软件包构建系统)
  * [支付和账单集成](#支付和账单集成)
  * [隐私管理](#隐私管理)
  * [屏幕截图API](#屏幕截图API)
  * [与Flutter相关和在没有Mac的情况下构建iOS应用](#与Flutter相关和在没有Mac的情况下构建iOS应用)
  * [搜索](#搜索)
  * [安全和公钥基础设施](#安全和公钥基础设施)
  * [身份验证、授权和用户管理](#身份验证、授权和用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储和媒体处理](#存储和媒体处理)
  * [隧道、WebRTC、Web套接字服务器和其他路由器](#隧道、WebRTC、Web套接字服务器和其他路由器)
  * [测试](#测试)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
  * [与Vagrant相关](#与Vagrant相关)
  * [访客会话记录](#访客会话记录)
  * [网络托管](#网络托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件仿真](#基于浏览器的硬件仿真)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主要云服务提供商的永久免费限制

  * [谷歌云平台](https://cloud.google.com)
    * App Engine - 每天 28 个前端实例小时，9 个后端实例小时
    * Cloud Firestore - 1GB 存储，50,000 次读取，20,000 次写入，20,000 次删除
    * Compute Engine - 1 个非抢占式 e2-micro，30GB HDD，5GB 快照存储（仅限特定地区），每月 1 GB 网络出站流量，从北美到所有地区目的地（不包括中国和澳大利亚）
    * Cloud Storage - 5GB 存储，1GB 网络出站流量
    * Cloud Shell - 具有 5GB 持久存储的基于 Web 的 Linux shell/主 IDE。每周 60 小时限制
    * Cloud Pub/Sub - 每月 10GB 消息
    * Cloud Functions - 每月 200 万次调用（包括后台调用和 HTTP 调用）
    * Cloud Run - 每月 200 万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月 1 GB 网络出站流量，从北美出发
    * Google Kubernetes Engine - 一个区域集群无需集群管理费。每个用户节点按标准 Compute Engine 定价收费
    * BigQuery - 每月 1 TB 查询，每月 10 GB 存储
    * Cloud Build - 每天 120 分钟构建
    * Cloud Source Repositories - 最多 5 个用户，50 GB 存储，50 GB 出站流量
    * [谷歌合作](https://colab.research.google.com/) - 免费的 Jupyter Notebooks 开发环境。
    * [idx.dev](https://idx.dev) Google Project IDX。在线 VSCode 运行在 Google Cloud 上。
    * 完整详细列表 - https://cloud.google.com/free

* [亚马逊网络服务](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月 1TB 出站流量和 2M 函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10 个自定义指标和 10 个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月 100 分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5 个活动用户，50GB 存储和 10,000 次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月 1 个活动管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL 数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月 750 小时 t2.micro 或 t3.micro（12 个月）。每月 100GB 出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月 30GB 通用型（SSD）或磁性存储（12 个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月 750 小时（12 个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月 750 小时 db.t2.micro、db.t3.micro 或 db.t4g.micro，20GB 通用型（SSD）存储，20GB 存储备份（12 个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB 标准对象存储，20,000 次 Get 请求和 2,000 次 Put 请求（12 个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB 长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月 100 万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月 100 万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月 3,000 条消息（12 个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100 万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

* [微软 Azure](https://azure.microsoft.com)
    * [虚拟机](https://azure.microsoft.com/services/virtual-machines/) - 1 个 B1S Linux 虚拟机，1 个 B1S Windows 虚拟机（12 个月）
    * [应用服务](https://azure.microsoft.com/services/app-service/) - 10 个 Web、移动或 API 应用（每天 60 分钟 CPU 时间）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月 100 万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 启用快速、轻松、精简的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000 个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月 50,000 个存储的用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5 个活动用户，无限量私人 Git 存储库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10 个免费并行作业，为开源 Linux、macOS 和 Windows 提供无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天 8,000 条消息
    * [负载均衡器](https://azure.microsoft.com/services/load-balancer/) - 1 个免费的公共负载均衡 IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100 万次推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/) - 每月 15GB 入站流量（12 个月）和 5GB 出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB 存储和 1000 RU 的预配吞吐量
    * [静态 Web 应用](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用和无服务器函数，并提供免费的 SSL、身份验证/授权和自定义域名
    * [存储](https://azure.microsoft.com/services/storage/) - 5GB LRS 文件或 Blob 存储（12 个月）
    * [认知服务](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包括有限交易
    * [认知搜索](https://azure.microsoft.com/services/search/#features) - 基于 AI 的搜索和索引服务，免费提供 10,000 份文档
    * [Azure Kubernetes 服务](https://azure.microsoft.com/services/kubernetes-service/) - 托管 Kubernetes 服务，免费的集群管理
    * [事件网格](https://azure.microsoft.com/services/event-grid/) - 每月 100,000 次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [甲骨文云](https://www.oracle.com/cloud/)
    * 计算
       - 2 个基于 AMD 的计算 VM，每个具有 1/8 OCPU 和 1 GB 内存
       - 4 个基于 Arm 的 Ampere A1 核心和 24 GB 内存，可用作 1 个 VM 或最多 4 个 VM
       - 当[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时，将回收实例
    * 块卷 - 2 个卷，200 GB 总容量（用于计算）
    * 对象存储 - 10 GB
    * 负载均衡器 - 1 个实例，10 Mbps
    * 数据库 - 2 个数据库，每个 20 GB
    * 监控 - 5 亿个数据采集点，10 亿个数据检索点
    * 带宽 - 每月 10 TB 出站流量，速率限制为 x64 架构 VM 上的 50 Mbps 或 ARM 架构 VM 上的 500 Mbps * 核心数
    * 公共 IP - 2 个用于 VM 的 IPv4，1 个用于负载均衡器的 IPv4
    * 通知 - 每月 100 万个交付选项，1000 封发送的电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM 云](https://www.ibm.com/cloud/free/)
    * 对象存储 - 每月 25GB
    * Cloudant 数据库 - 1 GB 数据存储
    * Db2 数据库 - 100MB 数据存储
    * API Connect - 每月 50,000 次 API 调用
    * 可用性监控 - 每月 300 万个数据点
    * 日志分析 - 每天 500MB 的日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用程序服务](https://www.cloudflare.com/plans/) - 无限数量的域的免费 DNS，DDoS 保护，CDN，以及免费的 SSL、防火墙规则和页面规则、WAF、Bot 缓解、免费无计量速率限制 - 每个域 1 条规则、分析和电子邮件转发
    * [零信任和 SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多 50 个用户，24 小时活动日志记录，3 个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在 Cloudflare 的全球网络上免费部署无服务器代码——每天 10 万次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天 10 万次读取请求，每天 1000 次写入请求，每天 1000 次删除请求，每天 1000 次列表请求，1 GB 存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月 10 GB，每月 100 万次 Class A 操作，每月 1000 万次 Class B 操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天读取 500 万行，每天写入 10 万行，1 GB 存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在 Cloudflare 快速、安全的全球网络上开发和部署 Web 应用。每月 500 次构建，100 个自定义域名，集成 SSL，无限访问席位，无限预览部署，以及通过 Cloudflare Workers 集成实现的全栈功能。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月 100 万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月 1TB 的免费（外发）流量。

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一种协作解决方案，可用于可视化地构建和管理端到端的云基础设施。
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包括一个部署服务器和一个静态站点），Cloud 66 为您提供在任何云上构建、部署和扩展应用程序所需的一切，而无需处理“服务器相关事宜”的麻烦。
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许您使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费的远程状态管理和团队协作，最多支持 500 个资源。
* [scalr.com](https://scalr.com/) - Scalr 是一个 Terraform 自动化与协作 (TACO) 产品，用于改善 Terraform 管理的基础架构和配置方面的协作与自动化。支持完整的 Terraform CLI、OPA 集成和分层配置模型。没有 SSO 税。所有功能均包含在内。每月最多可免费运行 50 次。
* [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员自动化 AWS 上的部署。在我们的免费层中，开发人员（单个用户）可以部署无限数量的静态站点、Web 服务和环境。我们每月免费提供 20 次作业执行，预览和自动部署包括在免费层中。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 为最多 5 个用户提供无限量的公共与私人 Git 仓库，并带有用于 CI/CD 的 Pipelines
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共与私人 Fossil 仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，拥有 100 MB 空间和两名用户
* [Codeberg](https://codeberg.org/) — 为自由开源项目提供无限量的公共与私人 Git 仓库（具有无限量的协作者）。由 [Forgejo](https://forgejo.org/) 提供支持。使用 [Codeberg Pages](https://codeberg.page/) 托管静态网站。使用 [Codeberg 的 CI](https://docs.codeberg.org/ci/) 托管 CI/CD。使用 [Codeberg Translate](https://translate.codeberg.org/) 托管翻译。包括软件包和容器托管、项目管理以及问题跟踪
* [GitGud](https://gitgud.io) — 无限量的私人与公共仓库。永久免费。由 GitLab & Sapphire 提供支持。不提供 CI/CD
* [GitHub](https://github.com/) — 无限量的公共仓库和无限量的私人仓库（具有无限量的协作者）。包括 CI/CD、开发环境、静态托管、软件包和容器托管、项目管理以及 AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 无限量的公共与私人 Git 仓库，最多 5 个协作者。包括 CI/CD、静态托管、容器注册表、项目管理以及问题跟踪
* [framagit.org](https://framagit.org/) — Framagit 是 Framasoft 的基于 Gitlab 软件的软件铸造厂，包括 CI、静态页面、项目页面和问题跟踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod 是 GitLab Community Edition 的友好分支，提供对 Mercurial 的支持
* [ionicframework.com](https://ionicframework.com/appflow) - 用于使用 Ionic 开发应用程序的仓库和工具；您也可以拥有一个 Ionic 仓库
* [NotABug](https://notabug.org) — NotABug.org 是一个面向自由开源项目的基于 Git 的代码协作平台
* [OSDN](https://osdn.net/) - OSDN.net 是一个面向开源软件开发者的免费服务，提供 SVN/Git/Mercurial/Bazaar/CVS 仓库
* [Pagure.io](https://pagure.io) — Pagure.io 是一个面向基于 FOSS 许可的项目的基于 Git 的免费开源软件代码协作平台
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费 1GB 云存储以及 Git、Mercurial 或 SVN 仓库
* [pijul.com](https://pijul.com/) - 无限量免费且开源的分布式版本控制系统。其独特的功能基于对补丁的合理理论，使其易于学习、使用和分发。解决了 git/hg/svn/darcs 的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对于个人、OSS 和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费的私人项目（Git 和 Subversion），拥有 50 MB 的空间
* [RocketGit](https://rocketgit.com) — 基于 Git 的仓库托管。无限量的公共与私人仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为 GNU 项目的协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为非 GNU 项目的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂的 JSON 数据可视化、编辑和过滤成漂亮的表格网格。通过链接保存和共享 JSON 数据。
* [Zerosheets](https://zerosheets.com) - 通过 Google Sheets 电子表格快速开发原型、网站、应用程序等。每月可免费请求 500 次。
* [IP.City](https://ip.city) — 每天 100 次免费的 IP 地理位置请求
* [Abstract API](https://www.abstractapi.com) — 适用于各种用例的 API 套件，包括 IP 地理位置、性别检测或电子邮件验证。
* [Apify](https://www.apify.com/) — 网页抓取和自动化平台，用于为任何网站创建 API 并提取数据。提供现成的抓取工具、集成代理和定制解决方案。每月包含 5 美元平台积分的免费计划。
* [APITemplate.io](https://apitemplate.io) - 通过简单的 API 或自动化工具（例如 Zapier 和 Airtable）自动生成图像和 PDF 文档。免费计划每月提供 50 张图像和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解 API 和后端所需的所有工具。包括自动 API 合同验证和监控。免费计划覆盖每月最多 20,000 次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费访问 120 多个高质量、一致性和可靠性 API。免费计划每月覆盖最多 50 个 API 令牌。
* [Arize AI](https://arize.com/) - 机器学习可观察性，用于监控模型并跟踪数据质量和性能漂移等问题的根源。最多支持两个模型免费。
* [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于开发即时可访问的单页 Web 应用程序。适用于 Java、Node.js、Perl、Python 和 Ruby。
* [Beeceptor](https://beeceptor.com) - 秒级模拟 REST API，伪造 API 响应等。每天 50 次免费请求，公共仪表板，开放端点（任何人都可以使用仪表板链接查看提交和答案）。
* [bigml.com](https://bigml.com/) — 托管机器学习算法。开发任务免费，每个任务 16 MB 数据限制。
* [Browse AI](https://www.browse.ai) — 从网页中提取和监控数据。每月免费 50 个信用点数。
* [BrowserCat](https://www.browsercat.com) - 用于自动化、抓取、AI 代理 Web 访问、图像/PDF 生成等的无头浏览器 API。每月 1k 次请求的免费计划。
* [Bruzu](https://bruzu.com/) — 自动化图像生产。通过 API、集成或无代码表生成大量图像变体。API 免费提供，但带有水印。
* [Calendarific](https://calendarific.com) - 适用于 200 多个国家的企业级公共假期 API 服务。免费计划每月包含 1,000 次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com 产品、搜索和类别数据的 GraphQL API。免费计划每月包含 100 次调用。
* [Clarifai](https://www.clarifai.com) — 自定义人脸识别和检测的图像 API。可以训练 AI 模型。免费计划每月有 5,000 次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用程序 API 平台，提供对文档转换、病毒扫描等功能的完整访问权限，每月 800 次调用。
* [Colaboratory](https://colab.research.google.com) — 免费的基于 Web 的 Python 笔记本环境，带有 Nvidia Tesla K80 GPU。
* [Collect2](https://collect2.com) — 创建 API 端点以测试、自动化和连接 Webhook。免费计划允许两个数据集、2000 条记录、一个转发器和一个警报。
* [CometML](https://www.comet.com/site/) - 用于实验跟踪、模型生产管理、模型注册和完整数据谱系的 MLOps 平台，涵盖从训练到生产的整个工作流程。对于个人和学术界免费。
* [Commerce Layer](https://commercelayer.io) - 可构建、放置和管理来自任何前端的订单的复合商业 API。开发人员计划每月免费提供 100 笔订单和最多 1,000 个 SKU。
* [Conversion Tools](https://conversiontools.io/) - 用于文档、图像、视频、音频和电子书的在线文件转换器。提供了 REST API。适用于 Node.js、PHP 和 Python 的库。支持高达 50 GB 的文件（付费计划）。免费层受每日的文件大小和转换数量限制。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供有关国家、地区、省份、城市、邮政编码等广泛信息的 API 和微服务。免费层包括每天最多 100 次请求。
* [Coupler](https://www.coupler.io/) - 同步应用程序之间的数据集成工具。它可以创建实时仪表板和报告、转换和操作值以及收集和备份见解。免费计划具有无限用户、100 次运行和每月 1000 行以及无限集成的功能。
* [CraftMyPDF](https://craftmypdf.com) - 使用拖放编辑器和简单的 API 从可重用模板自动生成 PDF 文档。免费计划每月提供 100 份 PDF 和三个模板。
* [CurlHub](https://curlhub.io) — 用于检查和调试 API 调用的代理服务。免费计划每月包括 10,000 次请求。
* [CurrencyScoop](https://currencyscoop.com) - 用于金融应用程序的实时货币数据 API。免费计划每月包含 5,000 次调用。
* [Cube](https://cube.dev/) - Cube 帮助数据工程师和应用程序开发人员从现代数据存储中访问数据，将其组织到一致的定义中，并将其传递到每个应用程序。使用 Cube 最快的方法是使用 Cube Cloud，它提供免费层，每月可传输 1GB 的数据。
* [Data Dead Drop](https://datadeaddrop.com) - 简单的免费文件共享。数据在访问后会自行销毁。通过浏览器或您最喜欢的命令行客户端上传和下载数据。
* [Data Fetcher](https://datafetcher.com) - 使用无代码方式将 Airtable 连接到任何应用程序或 API。用于在 Airtable 中运行 API 请求的 Postman 式界面。与数十个应用程序的预构建集成。免费计划每月包含 100 次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理和将数据导入 Salesforce 的工具。免费计划包括每月最多 20,000 条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains 的 Python 笔记本。包括 10 GB 存储空间和每月 120 小时的运行时。
* [Data Miner](https://dataminer.io/) - 用于从网页中提取数据的浏览器扩展（Google Chrome、MS Edge），CSV 或 Excel。免费计划每月为您提供 500 页。
* [Datapane](https://datapane.com) - 用于在 Python 中构建交互式报告并在 Python 脚本和 Jupyter Notebook 中将其作为自助工具部署的 API。
* [DB-IP](https://db-ip.com/api/free) - 免费的 IP 地理位置 API，每天每 IP 1k 次请求。CC-BY 4.0 许可下的 lite 数据库也是免费的。
* [DB Designer](https://www.dbdesigner.net/) — 云端数据库架构设计和建模工具，提供免费入门计划，包括 2 个数据库模型和每个模型 10 个表格。
* [DeepAR](https://developer.deepar.ai) — 一个 SDK 即可实现任何平台的增强现实人脸滤镜。免费计划每月最多可跟踪 4 张人脸，支持 10 名月活跃用户 (MAU)。
* [Deepnote](https://deepnote.com) - 一种新的数据科学笔记本。与 Jupyter 兼容，支持实时协作和云端运行。免费层包括无限个个人项目、最多 750 小时的标准硬件以及最多 3 位编辑器的团队。
* [Diggernaut](https://www.diggernaut.com/) — 云端网页抓取和数据提取平台，可将任何网站转换为数据集或作为 API 使用。免费计划每月包括 5K 次页面请求。

  * [Doczilla](https://www.doczilla.app/) — 这是一款 SaaS API，可以直接从 HTML/CSS/JS 代码生成截图或 PDF。免费计划每月允许生成 250 份文档。
* [Doppio](https://doppio.sh/) — 这是一款托管 API，可以使用顶级渲染技术生成和私密存储 PDF 和截图。免费计划每月允许生成 400 份 PDF 和截图。
* [dreamfactory.com](https://dreamfactory.com/) — 这是一款适用于移动、Web 和 IoT 应用程序的开源 REST API 后端。可以连接任何 SQL/NoSQL 数据库、文件存储系统或外部服务，并即时创建一个全面的 REST API 平台，包括实时文档和用户管理。
* [DynamicDocs](https://advicement.io) - 这是一个基于 LaTeX 模板的 JSON to PDF API，可以生成 PDF 文档。免费计划每月允许 50 次 API 调用，并可以访问模板库。
* [Efemarai](https://efemarai.com) - 这是一个用于 ML 模型和数据的测试和调试平台。可以可视化任何计算图。每月为开发人员提供 30 次免费调试会话。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 一个免费的基于 Web 的 HTTP 客户端，用于发送 HTTP 请求。
* [Export SDK](https://exportsdk.com) - 这是一款带有拖放模板编辑器的 PDF 生成器 API，提供 SDK 和无代码集成。免费计划包括每月 250 页、无限用户和三个模板。
* [Fern](https://buildwithfern.com) - 使用 API 定义在流行的语言中生成 SDK，并生成 API 参考文档网页。向 API 参考中添加 Markdown 页面，并使用 Fern 托管，以获得完整的文档解决方案。完全支持 OpenAPI。
* [file.coffee](https://file.coffee/) - 一个文件存储平台，允许存储最高 15MB/文件（带账户 30MB/文件）。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 这是一个用于信用卡支付欺诈检测的订单交易筛选 REST API。它将根据订单的输入参数检测所有可能的欺诈特征。免费的 Micro 计划包括每月 500 笔交易。
* [Geekflare API](https://geekflare.com/api) - Geekflare API 允许您截图、审核网站、TLS 扫描、DNS 查找、测试 TTFB 等。免费计划提供 3,000 次 API 请求。
* [GeoCod](https://geocod.xyz) — 一个免费的地理编码 API：将邮政地址转换为地理坐标，或将地理坐标转换为邮政地址（反向地理编码）。
* [GeoDataSource](https://www.geodatasource.com) — 这是一个位置搜索服务，可以使用经纬度坐标查找城市名称。每月最多免费查询 500 次。
* [Geolocated.io](https://geolocated.io) — 一个 IP 地理位置 API，提供多大陆服务器，为爱好者提供永久免费计划，每月 60,000 次请求。
* [Glitterly](https://glitterly.app/) - 这是一个基于基础模板以编程方式生成动态图像的 API，提供 Restful API 和 nocode 集成。免费版每月提供 50 张图像/5 个模板。
* [GoodData](https://www.gooddata.com/) - 数据即服务 - 创建交互式和有见地的仪表板。免费版提供五个工作区和每个工作区 100 MB 的空间。
* [Hex](https://hex.tech/) - 这是一个用于笔记本、数据应用程序和知识库的协作数据平台。免费的社区版本最多支持 3 位作者和 5 个项目。每个作者提供一个计算配置文件，具有 4GB RAM。
* [Hook0](https://www.hook0.com/) - Hook0 是一个开源的 Webhooks-as-a-service (WaaS)，使在线产品可以轻松地提供 Webhooks。免费计划每月最多可以调度 3,000 次事件，并保留 7 天的历史记录。
* [Hoppscotch](https://hoppscotch.io) - 一个免费、快速、美观的 API 请求生成器。
* [Hybiscus](https://hybiscus.dev/) - 这是一个用于构建 PDF 报告的简单声明性 API。免费版每月包括最多 100 份单页报告，并可以自定义配色方案和字体。
* [Invantive Cloud](https://cloud.invantive.com/) — 使用 Invantive SQL 或 OData4（通常用于 Power BI 或 Power Query）访问 70 多个（云）平台，例如 Exact Online、Twinfield、ActiveCampaign 或 Visma。包括数据复制和交换。为开发人员和实施顾问提供免费计划。对于特定平台免费，但数据量有限。
* [ipaddress.sh](https://ipaddress.sh) — 一个简单的服务，用于以不同 [格式](https://about.ipaddress.sh/) 获取公网 IP 地址。
* [ipbase.com](https://ipbase.com) - IP 地理位置 API - 永久免费计划，每月 150 次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP 地理位置 API - 面向开发人员的永久免费计划，每月限制 30k 次请求（每天 1k 次）。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract 提供的 IP 地理位置 API - 广泛的免费计划，允许每月 20,000 次请求。
* [IP2Location](https://www.ip2location.com) — 免费增值 IP 地理位置服务。LITE 数据库可免费下载。将数据库导入服务器，然后执行本地查询以确定城市、坐标和 ISP 信息。
* [IP2Location.io](https://www.ip2location.io/) — 免费增值、快速可靠的 IP 地理位置 API，用于确定地理位置数据，如城市、坐标、ISP 等。免费计划提供每月 30k 个信用点。订阅付费计划以获取更多高级功能，或联系我们以获得个性化计划。
* [ipapi](https://ipapi.co/) - 由 Kloudend, Inc 提供的 IP 地址位置 API - 一个基于 AWS 的可靠地理定位 API，受 Fortune 500 公司的信赖。免费版提供每月 30k 次查询（每天 1k 次），无需注册。
* [ipapi.is](https://ipapi.is/) - 一个由开发人员为开发人员提供的可靠 IP 地址 API，具有最佳的托管检测功能。免费计划提供 1,000 次查询，无需注册。
* [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月最多 50k 次）的 IP 地址数据 API。提供有关地理定位、公司、运营商、IP 范围、域名、滥用联系人等详细信息的 API。所有付费 API 都可以免费试用。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供现代 Web 所需的快速、准确且免费（无限或每月 10K-50K 次）API，如 IP 地理位置、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [IPTrace](https://iptrace.io) — 一个令人尴尬的简单 API，为您的业务提供可靠且有用的 IP 地理位置数据。
* [JSON2Video](https://json2video.com) - 一个视频编辑 API，用于自动化视频营销和社交媒体视频，无论是否有代码。
* [JSON IP](https://getjsonip.com) — 返回客户端请求的公网 IP 地址。免费版无需注册。使用 CORS，可以使用客户端 JS 直接从浏览器中请求数据。适用于监控客户端和服务器 IP 更改的服务。无限请求。
* [JSON Serve](https://jsonserve.com/) — 这是一个免费服务，帮助开发人员存储 JSON 对象，并在其应用程序中使用该 JSON 作为 REST API。
* [JSONing](https://jsoning.com/api/) — 从 JSON 对象创建一个假 REST API，并自定义 HTTP 状态代码、标头和响应正文。
* [konghq.com](https://konghq.com/) — API 市场和强大的私有和公共 API 工具。在免费版中，某些功能（如监控、警报和支持）是有限的。
* [Kreya](https://kreya.app) — 一个免费的 gRPC GUI 客户端，用于调用和测试 gRPC API。可以通过服务器反射导入 gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进机器学习模型。免费数据集最多可包含 1000 个样本。
* [LoginLlama](https://loginllama.app) - 一个登录安全 API，用于检测欺诈和可疑的登录，并通知客户。每月 1,000 次登录免费。

  - [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等实时和历史金融数据。免费版 API 每天允许 100 次 API 请求。
- [Meteosource Weather API](https://www.meteosource.com/) — 全球天气 API，提供当前和预报天气数据。预测基于机器学习组合的多个天气模型，以实现更高的准确性。免费计划每天提供 400 次调用。
- [microlink.io](https://microlink.io/) – 它可以将任何网站转换为数据，例如元标签规范化、漂亮的链接预览、抓取功能或屏幕截图即服务。每天 100 次请求，每天免费。
- [Mindee](https://developers.mindee.com/docs) – Mindee 是一个强大的 OCR 软件和 API-first 平台，帮助开发人员通过计算机视觉和机器学习对关键信息的数据识别，自动化应用程序的工作流程，并通过文档处理层标准化文档处理。免费版提供每月 250 页的服务。
- [Mintlify](https://mintlify.com) — API 文档的现代标准。美观且易于维护的 UI 组件、内置搜索功能和交互式 playground。对于 1 位编辑器免费。
- [monkeylearn.com](https://monkeylearn.com/) — 机器学习文本分析，每月免费 300 次查询。
- [MockAPI](https://www.mockapi.io/) — MockAPI 是一个简单的工具，允许您快速模拟 API、生成自定义数据并执行使用 RESTful 接口的操作。MockAPI 旨在作为原型设计/测试/学习工具。免费计划提供 1 个项目/每个项目 4 个资源。
- [Mockfly](https://www.mockfly.dev/) — Mockfly 是一个用于 API 模拟和功能标志管理的开发工具。通过直观的界面快速生成和控制模拟 API。免费版每天提供 500 次请求。
- [Mocki](https://mocki.io) - 一个允许您创建与 GitHub 仓库同步的模拟 GraphQL 和 REST API 的工具。简单的 REST API 免费开发和使用，无需注册。
- [Mocko.dev](https://mocko.dev/) — 免费代理您的 API，选择要在云中模拟的端点并检查流量。加快开发和集成测试。
- [Mocky](https://designer.mocky.io/) - 一个简单的 Web 应用程序，用于生成自定义的 HTTP 响应以模拟 HTTP 请求。也开源可用 [open source](https://github.com/julien-lafont/Mocky)。
- [reqres.in](https://reqres.in) - 一个免费的托管 REST-API，可以响应您的 AJAX 请求。
- [microenv.com](https://microenv.com) — 为开发人员创建模拟 REST API，可以生成代码并在 Docker 容器中生成应用程序。
- [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一个免费简单的工具，用于跨多个节点检查出口 IP 地址，了解您的 IP 地址如何出现在不同的全球区域和服务中。这有助于测试基于规则的 DNS 分割工具，例如 Control D。
- [neptune.ai](https://neptune.ai/) - 记录、存储、显示、组织、比较和查询所有 MLOps 元数据。个人免费：1 个成员、100 GB 元数据存储空间、每月 200 小时的监控。
- [News API](https://newsapi.org) — 使用代码在网上搜索新闻，并获得 JSON 结果。开发人员每月可免费查询 3,000 次。
- [GoCardless](https://gocardless.com/) — 免费开放银行数据 API。PSD2。将 2300 多家欧盟和英国的银行与您的应用程序/软件连接。
- [Nyckel](https://www.nyckel.com) — 训练、部署和调用图像和文本 ML 模型。免费训练，最多 5,000 个训练数据集。每月免费调用 1000 次模型。
- [Observable](https://observablehq.com/) — 一个创建、协作和使用数据的平台。免费：无限个笔记本、无限次发布、每个笔记本 5 位编辑器。
- [OCR.Space](https://ocr.space/) — OCR API 解析图像和 pdf 文件，并将文本结果返回为 JSON 格式。每月 25,000 次请求免费。
- [Duply.co](https://duply.co) — 通过 API 和 URL 创建动态图像，一次设计模板，重复使用。免费版每月提供 70 张通过 API 和 URL 创建的图像，并通过表单提供 100 张图像。
- [OpenAPI3 Designer](https://openapidesigner.com/) — 免费直观地创建 OpenAPI 3 定义。
- [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转换为 API，5 个项目免费。
- [pdfEndpoint.com](https://pdfendpoint.com) - 轻松将 HTML 或 URL 转换为 PDF，每月 100 次转换免费。
- [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，可视化模板编辑器或 HTML 到 PDF，动态数据集成，以及使用 API 呈现 PDF。免费计划提供 1 个模板，每月 100 个 PDF。
- [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作均通过 API 完成。也可以使用热图和折线图进行可视化。
- [Postbacks](https://postbacks.io/) - 请求稍后的 HTTP 回调。注册后免费提供 8,000 次请求。
- [Postman](https://postman.com) — 简化工作流程并更快地创建更好的 API – 使用 Postman（API 开发协作平台）。永远免费使用 Postman 应用程序。Postman cloud 功能也永远免费，但有某些限制。
- [Insomnia](https://insomnia.rest) - 支持 REST 和 GraphQL 的开源 API 客户端，用于设计和测试 API。
- [PrefectCloud](https://www.prefect.io/cloud/) — 一个用于数据流自动化的完整平台。所有计划每月都包括 20,000 次免费运行。这足以满足大多数小企业的 ETL 需求。
- [Preset Cloud](https://preset.io/) - 一个托管的 Apache Superset 服务。对于最多 5 位用户的小组免费，具有无限数量的仪表板和图表、无需代码的图表生成器和协作 SQL 编辑器。
- [PromptLeo](https://promptleo.com/) - 创作者和开发人员的提示工程平台。它提供了一个提示工程库、表单和 API。免费计划提供 1 个提示形成、1 个提示 API 端点和每月 30 次生成。
- [PromptLoop](https://www.promptloop.com/) - 使用 Google 电子表格中的简单电子表格公式将 AI 和大型语言模型（如 GPT-3）与 Google 电子表格集成，以转换、理解和分析文本。每月前 2,000 个学分免费。
- [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可抓取和提取网站。我们为您解决验证码问题，防止您被拦截。前 1000 次调用免费。
- [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 一个免费公共 API 的列表。
- [Supportivekoala](https://supportivekoala.com/) — 通过模板根据您的输入自动生成图像。免费计划允许您每周创建 100 张图像。
- [QuickMocker](https://quickmocker.com/) — 在您自己的子域名下管理模拟 API 端点，将请求转发到用于 webhook 开发和测试的 localhost URL，对 URL 路径使用 RegExp 和多种 HTTP 方法，为响应模板提供超过 100 个短码（动态或伪随机响应值），从 JSON 格式导入 OpenAPI（Swagger）规范，代理请求，以及通过 IP 地址和授权标头限制端点。免费帐户提供 1 个随机子域名、10 个端点、5 个 RegExp URL 路径、每个端点 50 个短码、每天 100 次请求和请求日志中的 50 条历史记录。
- [Rapidapi](https://rapidapi.com/) - 全球最大的 API 中心。数以百万计的开发人员可以找到和连接数千个 API，使用有趣的挑战（附带解决方案！）和交互式示例进行 API 开发。
- [RequestBin.com](https://requestbin.com) — 创建一个免费的端点，向其发送 HTTP 请求。发送到该端点的任何 HTTP 请求都将记录下来，并附有相关的有效负载和标头，因此您可以观察 webhook 和其他服务提出的建议。

  * [ROBOHASH](https://robohash.org/) - 一个用于从任何文本生成独特酷炫图片的 Web 服务。
* [SaturnCloud](https://saturncloud.io/) - 一个数据科学云环境，支持运行 Jupyter 笔记本和 Dask 集群。每月提供 30 小时的免费计算和 3 小时的 Dask。
* [Scraper's Proxy](https://scrapersproxy.com) — 一个简单的 HTTP 代理 API，用于网页抓取。每月免费抓取 100 次，包括 JavaScript 渲染。
* [ScrapingAnt](https://scrapingant.com/) — 无头 Chrome 抓取 API 和免费代理服务。提供 JavaScript 渲染、高级轮换代理和 CAPTCHAs 避免。提供免费计划。
* [ScraperBox](https://scraperbox.com/) — 一种不可被检测的网页抓取 API，使用真正的 Chrome 浏览器和代理轮换。使用简单的 API 调用抓取任何网页。免费计划每月有 1000 次请求。
* [ScrapingDog](https://scrapingdog.com/) — Scrapingdog 处理数以百万计的代理、浏览器和 CAPTCHAs，以提供任何网页的 HTML，只需一次 API 调用。它还包括 Chrome 和 Firefox 中的 Web Scraper 以及用于即时抓取需求的软件。提供免费计划。
* [scrapinghub.com](https://scrapinghub.com) — 带有可视化界面和插件的数据抓取工具。免费计划包括在共享服务器上进行无限抓取。
* [Simplescraper](https://simplescraper.io) — 在每次操作后触发您的 webhook。免费计划包括 100 个云抓取积分。
* [Select Star](https://www.selectstar.com/) - 一个智能数据发现平台，可以自动分析和记录您的数据。免费的 Light 层包括 1 个数据源、最多 100 张表和 10 个用户。
* [Sheetson](https://sheetson.com) - 立即将任何 Google Sheets 转换为 RESTful API。提供免费计划。
* [Shipyard](https://www.shipyardapp.com) — 一个用于云的低代码数据编排平台。使用低代码模板和您自己的代码（Python、Node.js、Bash、SQL）进行构建。免费的开发者计划为单个用户每月提供 10 小时的运行时，足以自动化多个工作流程。
* [shrtcode API](https://shrtco.de/docs) - 一个免费的 URL 缩短 API，无需授权，也没有请求限制。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取 API。返回 Google、YouTube、Bing、Baidu、Walmart 等机器的结构化 JSON 结果。免费计划包括每月 100 次成功的 API 调用。
* [SmartParse](https://smartparse.io) - SmartParse 是一个数据迁移和 CSV to API 平台，提供节省时间和成本的开发人员工具。免费层包括每月 300 个处理单元、浏览器上传、数据隔离、断路器和作业提醒。
* [Sofodata](https://www.sofodata.com/) - 从 CSV 文件中创建安全的 RESTful API。上传 CSV 文件并通过其 API 即时访问数据，加快应用程序开发。免费计划包括 2 个 API 和每月 2,500 次 API 调用。无需信用卡。
* [Sqlable](https://sqlable.com/) - 一个免费的在线 SQL 工具集合，包括 SQL 格式化程序和验证器、SQL 正则表达式测试器、假数据生成器和交互式数据库游乐场。
* [Stoplight](https://stoplight.io/) - 一个用于协作设计和记录 API 的 Saas。免费计划提供免费的设计、模拟和文档工具。
* [Svix](https://www.svix.com/) - 一个 Webhook 即服务平台。每月免费发送 50,000 条消息。
* [TemplateTo](https://templateto.com) - 使用我们的拖放编辑器和简单的 API 从可重用模板自动生成 PDF/TXT 文档。免费计划包括 450 个 PDF/月和 3 个模板。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能可免费无限使用。
* [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、发布和管理 API。提供高级 API 日志聚合、可观察性、文档和调试。免费层的所有功能，但每月请求限制为 25 万。
* [Webhook Store](https://www.openwebhook.io) - 一个用于存储第三方 Webhook 并在 localhost 上调试它们的工具（ngrok 风格）。开源且可自托管。免费的个人域名 *username*.github.webhook.store，免费的公共域名 *anything*.webhook.store。
* [Weights & Biases](https://wandb.ai) — 一个面向开发人员的 MLOps 平台。使用实验跟踪、数据集版本控制和模型管理来更快地构建更好的模型。个人项目免费层包括 100GB 的存储空间。
* [wit.ai](https://wit.ai/) — 开发人员的 NLP。
* [wolfram.com](https://wolfram.com/language/) — 内置基于知识的云算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化 API。每月 3 万次 API 调用。
* [ZenRows](https://www.zenrows.com/) — 网页抓取 API 和代理服务器，可绕过任何反机器人解决方案，同时提供 JavaScript 渲染、代理轮换和地理定位。免费层的 API 调用数为 1000 次。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 一个网页抓取 API，具有无头浏览器和住宅 IP。每月 1000 次免费 API 调用，并为学生和非营利组织提供额外学分。
* [ip-api](https://ip-api.com) — IP 地理位置 API，免费用于非商业用途，无需 API 密钥，对于免费计划，来自同一 IP 地址的请求限制为每分钟 45 次。
* [WebScraping.AI](https://webscraping.ai) - 一个简单的网页抓取 API，具有内置解析、Chrome 渲染和代理。每月 2000 次免费 API 调用。
* [Zipcodebase](https://zipcodebase.com) - 一个免费的邮政编码 API，可以访问全球邮政编码数据。每月 10,000 次免费请求。
* [huggingface.co](https://huggingface.co) - 为 Pytorch、TensorFlow 和 JAX 构建、训练和部署 NLP 模型。每月免费处理 3 万个输入字符。
* [vatcheckapi.com](https://vatcheckapi.com) - 一个简单免费的增值税号码验证 API。每月 500 次免费请求。
* [numlookupapi.com](https://numlookupapi.com) - 一个免费的电话号码验证 API - 每月 10 万次免费请求。
* [Volca](https://volca.io#api) - 一个免费的 API，提供技术列表，例如编程语言和数据库系统。无限量免费请求。
* [Query.me](https://query.me) - 协作数据笔记本，可以像脚本一样执行，并允许通过 SQL、API 以及许多自定义块（例如 Slack 和 Email）来获取和发送数据。对小型团队免费。
* [ERD Lab](https://www.erdlab.io) — 一个免费的基于云的实体关系图（ERD）工具，专为开发人员打造。
* [What The Diff](https://whatthediff.ai) - 一个由 AI 驱动的代码审查助手。免费计划限制为每月 25,000 个令牌（~10 个 PR）。
* [Zipcodestack](https://zipcodestack.com) - 一个免费的邮政编码 API 和邮政编码验证。每月 10,000 次免费请求。
* [OpenWeb Ninja](https://www.openwebninja.com/) - 实时 SERP 和公共数据 API 非常全面，包括 Google 搜索、购物、求职、图像、镜头、新闻、Google 地图业务/地点、评论、照片、网站电子邮件和社交联系人抓取器、亚马逊、Yelp 等。所有 API 均包括免费层，每月可免费请求 100 到 200 次。
* [Tavily AI](https://tavily.com/) - 一个用于在线搜索和快速洞察以及综合研究的 API，具有研究结果的组织功能。免费层每月 1000 次请求，无需信用卡。
* [Composio](https://composio.dev/) - AI 代理和 LLMs 集成平台。集成 200 多个工具，跨越 agentic 互联网。

  * [Zuplo](https://zuplo.com/) - 一个免费的 API 管理平台，用于设计、构建和部署边缘 API。仅需几分钟即可为任何 API 添加 API 密钥身份验证、速率限制、开发人员文档和货币化。原生支持 OpenAPI 并完全可通过 Web 标准 API 和 Typescript 进行编程。免费计划提供多达 10 个项目、无限量的生产边缘环境、250 个 API 密钥、每月 10 万个请求和 1GB 出站流量。

**[⬆️ 返回顶部](#目录)**

## 工件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持多种软件包格式的工件仓库，例如 Maven、Docker、Cargo、Helm、PyPI、CocoaPods 和 GitLFS。包括软件包扫描工具 XRay 和 CI/CD 工具 Pipelines（前身为 Shippable），每月提供 2000 分钟的免费 CI/CD 时间。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT 以及其他构建系统的默认工件仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 云原生、私人和公共的 Maven 和 PyPi 仓库。对开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 一个简单、安全、集中的仓库服务，支持 Java/Maven、RedHat、Debian、Python、Ruby、Vagrant 等。提供免费版和对开源免费。
  * [jitpack.io](https://jitpack.io/) — 一个针对 GitHub 上 JVM 和 Android 项目的 Maven 仓库，对公共项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_Multiplier-free_plan) — 一个易用的仓库托管服务，支持 Maven、RPM、DEB、PyPi、NPM 和 RubyGem 软件包（提供免费版）。
  * [repsy.io](https://repsy.io) — 1 GB 免费私有/公共 Maven 仓库。
  * [Gemfury](https://gemfury.com) — 私人和公共的工件仓库，支持 Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 仓库。对公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展 AI 模型，开发、训练和部署 AI 应用程序，免费计划：公共项目、5Gb 存储空间、基本实例。
  * [RepoForge](https://repoforge.io) - 一个云原生、私人的仓库，支持 Python、Debian、NPM 软件包和 Docker 镜像仓库。对开源/公共项目免费。
  * [RepoFlow](https://repoflow.io) - RepoFlow 简化了软件包管理，支持 npm、PyPI、Docker、Go、Helm 等。免费试用，包括 10GB 存储空间、10GB 带宽、100 个软件包和无限用户，或个人免费自托管。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 一款基于云的代码片段管理器，可用于个人和协作代码，免费。
* [Bitwarden](https://bitwarden.com) — 个人、团队和企业组织存储、共享和同步敏感数据的最简单、最安全的方式。
* [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用。公共访问组免费，无限用户、历史记录和集成。此外，它还提供了一个可自托管的开源版本。
* [cally.com](https://cally.com/) — 寻找会议的理想时间和日期。简单易用，适用于小型和大型团体。
* [Calendly](https://calendly.com) — 用于安排会议的工具。免费计划为每位用户提供 1 个日历连接和无限次会议。还提供桌面和移动应用程序。
* [Discord](https://discord.com/) — 具有公共/私人聊天室的聊天软件。支持 Markdown 文本、语音、视频和屏幕共享功能。免费使用，用户数量不限。
* [Telegram](https://telegram.org/) — 适用于所有希望快速、可靠地发送消息和打电话的用户。大型群组、用户名、桌面应用和强大的文件共享选项使其适合企业用户和小团队。
* [Dubble](https://dubble.so/) — 免费的分步指南创建工具。可以截图、记录流程并与团队协作。还支持异步屏幕录制。
* [Duckly](https://duckly.com/) — 与团队实时对话和协作。配对编程、IDE 终端共享、语音、视频和屏幕共享。小团队免费使用。
* [Dyte](https://dyte.io) - 最适合开发人员的实时音视频 SDK，具有增强生产力和参与度的协作插件。免费版每月包含 10,000 分钟的实时音视频时长。
* [evernote.com](https://evernote.com/) — 整理信息的工具。分享笔记并与他人协作。
* [Fibery](https://fibery.io/) — 连接工作空间平台。单个用户免费，最高 2GB 磁盘空间。
* [flock.com](https://flock.com) — 团队沟通的更快方式。免费无限消息、频道、用户、应用和集成。
* [Gather](https://www.gather.town/) - 在线会议的更好方式。Gather 围绕完全可定制的空间展开，让您与社区交流变得与现实生活一样简单。最多 10 个并发用户免费。
* [gokanban.io](https://gokanban.io) - 用于快速使用的基于语法、无需注册的 Kanban 看板。免费且无限制。
* [flat.social](https://flat.social) - 用于团队会议和快乐时段互动的可定制空间。无限次会议，最多 8 个并发用户免费。
* [GitDailies](https://gitdailies.com) - 在 GitHub 上自动生成团队的每日 Commit 和 Pull Request 报告。包括推送可视化工具、同行认可系统和自定义提醒生成器。免费版具有无限用户、3 个仓库和 3 个提醒配置。
* [gitter.im](https://gitter.im/) — 适用于 GitHub 的聊天软件。无限数量的公共聊天室和私人聊天室，25 人以下的团队免费使用。
* [Hackmd.io](https://hackmd.io/) - Markdown 格式文档/文件的实时协作和写作工具。类似于 Google Docs，但用于 Markdown 文件。免费的笔记数量不受限制，但私密笔记和模板的协作者（被邀请人）数量[是有限制的](https://hackmd.io/pricing)。
* [hangouts.google.com](https://hangouts.google.com/) — 免费的聊天软件，需要 Google 账号。
* [HeySpace](https://hey.space) - 集聊天、日历、时间线和视频通话于一体的任务管理工具。最多 5 位用户免费。
* [helplightning.com](https://www.helplightning.com/) — 通过增强现实提供视频帮助。免费版不提供分析、加密和支持服务。
* [ideascale.com](https://ideascale.com/) — 允许客户提交想法并投票，1 个社区最多 25 名成员免费。
* [Igloo](https://www.igloosoftware.com/) — 共享文档、博客、日历等内部门户网站。最多 10 位用户免费。
* [Keybase](https://keybase.io/) — Keybase 是 Slack 的 FOSS 替代品；它可以保护家庭、社区和公司的所有聊天和文件。
* [Google Meet](https://meet.google.com/) — 使用 Google Meet 满足您的企业在线视频会议需求。Meet 提供安全、便捷的在线会议。
* [/meet for Slack](https://meetslack.com) - 在 Slack 的任何频道、小组或 DM 中使用 /meet 直接启动 Google Meet 会议。免费且无限制。
* [Livecycle](https://www.livecycle.io/) — 一个包容性的协作平台，可为跨职能产品团队和开源项目简化工作流程。
* [Lockitbot](https://www.lockitbot.com/) — 在 Slack 中预订和锁定共享资源，例如房间、开发环境、服务器等。最多 2 个资源免费。
* [MarkUp](https://www.markup.io/) — MarkUp 允许您直接在网站、PDF 和图像上收集反馈。
* [Proton Pass](https://proton.me/pass) — 集电子邮件别名、2FA 认证器、共享和密码钥匙于一体的密码管理器。支持网页、浏览器扩展、移动应用和桌面应用。
* [Visual Debug](https://visualdebug.com) - 一种可视反馈工具，用于改善客户与开发人员之间的沟通。
* [meet.jit.si](https://meet.jit.si/) — 单击即可免费视频通话和屏幕共享。
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — Microsoft Teams 是一个基于聊天的数字中心，将对话、内容和应用程序集成到一个单一体验中。最多 50 万用户免费。
* [Miro](https://miro.com/) - 可扩展、安全、跨设备且企业就绪的分布式团队协作白板。提供免费增值计划。
* [nootiz](https://www.nootiz.com/) - 收集和管理任何网站视觉反馈的必备工具。
* [Notion](https://www.notion.so/) - Notion 是一款支持 Markdown 的笔记和协作应用程序，集任务、维基和数据库于一体。该公司将该应用程序描述为一个全合一的工作区，用于笔记记录、项目管理和任务管理。除了跨平台应用程序外，它还可以通过大多数网络浏览器访问。
* [Nuclino](https://www.nuclino.com) - 一个轻量且协作的 wiki，用于存储团队的所有知识、文档和笔记。免费计划包含所有基本功能、最多 50 个项目和 5GB 存储空间。
* [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，具有嵌入式视频聊天、绘图板和在线代码编辑器，您可以在浏览器中编译和运行代码。只需单击一下，即可创建远程面试室。
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一个简单的团队时间表和时间跟踪应用程序。免费计划支持最多 10 位用户的时间跟踪和报告生成功能。
* [PageShare.dev](https://www.pageshare.dev) - 在 GitHub Pull Requests 中添加可视化评审功能，无需部署网站。每月最多 10 个页面和总共 100MB 存储空间免费。
* [Pendulums](https://pendulums.io/) - Pendulums 是一款免费的时间跟踪工具，具有易于使用的界面和有价值的统计数据，可帮助您更好地管理时间。
* [Pumble](https://pumble.com) - 免费团队聊天应用。无限用户和消息历史记录，永久免费。
* [Raindrop.io](https://raindrop.io) - 适用于 macOS、Windows、Android、iOS 和 Web 的私密且安全的书签应用。免费无限书签和协作。
* [element.io](https://element.io/) — 基于 Matrix 的去中心化开源通信工具。支持组聊、直接消息、加密文件传输、语音和视频聊天，并可轻松集成其他服务。

  - [seafile.com](https://www.seafile.com/) — 提供私有或云存储、文件共享、同步和讨论。云版本只有 1GB
- [Sema](https://www.semasoftware.com/) - 免费的开源开发者个人主页工具，可以将多个仓库的贡献整合到一份报告中
- [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，无需下载或注册，直接在浏览器中与合作者共享屏幕
- [Slab](https://slab.com/) — 一个现代化的团队知识管理服务。10 位用户以内免费
- [slack.com](https://slack.com/) — 无限用户免费使用，但部分功能有限制
- [Spectrum](https://spectrum.chat/) - 免费创建公共或私人社区
- [StatusPile](https://www.statuspile.com/) - 一个状态页面的集合。可以跟踪上游提供商的状态页
- [Stickies](https://stickies.app/) - 可用于头脑风暴、内容策划和记笔记的可视化协作应用。3 块墙、无限用户和 1GB 存储空间免费
- [Stacks](https://betterstacks.com/) - 集成的笔记、链接和文件存储内容工作区，帮助应对信息过载。个人版永久免费
- [talky.io](https://talky.io/) — 免费的群组视频聊天。匿名、点对点。无需插件、注册或付费
- [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持带有泳道的 Kanban 和完整的 Scrum 实现。集成了时间跟踪。5 位用户和 3 个项目组合免费
- [Teamplify](https://teamplify.com) - 通过团队分析和智能每日例会来改进团队开发流程。包括针对远程团队的全功能休假管理。5 位用户以内的小团队免费
- [Tefter](https://tefter.io) - 书签应用，具有强大的 Slack 集成。开源团队免费
- [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。无需注册，即可为开发人员提供端到端加密协作
- [TimeCamp](https://www.timecamp.com/) - 免费的时间跟踪软件，支持无限用户。易于与 Jira、Trello、Asana 等 PM 工具集成
- [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用程序
- [twist.com](https://twist.com) — 一种适合异步协作的团队通信应用，可以让对话保持组织化和主题一致。提供免费和无限计划。符合条件的团队可享受折扣
- [tldraw.com](https://tldraw.com) — 免费的开源白板和绘图工具，具有智能箭头、吸附、便签和 SVG 导出功能。多人模式支持协作编辑。还有免费的官方 VS Code 扩展
- [BookmarkOS.com](https://bookmarkos.com) - 免费的全合一书签管理器、标签管理器和任务管理器，具有可定制的在线桌面和文件夹协作功能
- [typetalk.com](https://www.typetalk.com/) — 通过网络或移动端即时通讯与团队分享和讨论想法
- [Tugboat](https://tugboat.qa) - 预览每个拉取请求，自动化和按需。对所有人免费，非营利组织享受 Nano 级优惠
- [whereby.com](https://whereby.com/) — 单击即可免费视频对话（前身为 appear.in）
- [windmill.dev](https://windmill.dev/) - Windmill 是一个开源的开发人员平台，可用于从最少的 Python 和 Typescript 脚本快速构建生产级的多步骤自动化和内部应用程序。作为免费用户，您最多可以创建 3 个非高级工作区和成为其成员
- [vadoo.tv](https://vadoo.tv/) — 简单的视频托管和营销。单击上传视频。记录、管理、分享等。免费版提供 10 个视频、1GB 存储空间和每月 10GB 带宽
- [userforge.com](https://userforge.com/) - 互联在线角色、用户故事和上下文映射。免费为 3 个角色和 2 位协作者保持设计和开发同步
- [wistia.com](https://wistia.com/) — 视频托管，具有查看者分析、高清视频交付和营销工具，帮助了解您的访问者，25 个视频和 Wistia 品牌播放器
- [wormhol.org](https://www.wormhol.org/) — 简单的文件共享服务。与所需数量的同伴共享最多 5GB 的无限文件
- [Wormhole](https://wormhole.app/) - 使用端到端加密共享最多 5GB 的文件，最多 24 小时。对于大于 5GB 的文件，它使用点对点传输直接发送您的文件
- [zoom.us](https://zoom.us/) — 安全的视频和网络会议，可添加插件。免费计划限制为 40 分钟
- [Zulip](https://zulip.com/) — 具有独特电子邮件式线程模型的实时聊天。免费计划包括 10,000 条消息的搜索历史记录和 5GB 的文件存储空间。还提供可自行托管的开源版本
- [robocorp.com](https://robocorp.com) - 用于支持自动化运营的开源堆栈。尝试云功能并为简单自动化提供免费服务。机器人每月工作 240 分钟、10 次助理运行、100MB 存储空间
- [Fleep.io](https://fleep.io/) — Fleep 是 Slack 的替代品。它为小型团队提供免费计划，包括完整的消息历史记录、无限的 1:1 对话、1 个群组对话和 1GB 的文件存储空间
- [Chanty.com](https://chanty.com/) — Chanty 是 Slack 的另一种替代方案。它为小型团队（最多 10 位用户）提供永久免费计划，包括无限的公开和私人对话、可搜索的历史记录、无限的 1:1 音频通话、无限的语音消息、10 个集成和每个团队 20GB 存储空间
- [ruttl.com](https://ruttl.com/) — 一款全合一的收集反馈工具，用于收集对网站、PDF 和图像的反馈
- [Mattermost](https://mattermost.com/) — 技术团队的安全协作。免费计划包括无限频道、剧本、看板、用户、10GB 存储空间等
- [Webvizio](https://webvizio.com) — 网站反馈工具、网站评审软件和错误报告工具，可简化针对网站和 Web 应用程序、图像、PDF 和设计文件等任务的 Web 开发协作
- [Pullflow](https://pullflow.com) — Pullflow 提供了一个由人工智能增强的平台，用于在 GitHub、Slack 和 VS Code 之间进行代码评审协作
- [Webex](https://www.webex.com/) — 视频会议，免费计划提供每次会议 40 分钟，最多 100 位参与者
- [RingCentral](https://www.ringcentral.com/) — 视频会议，免费计划提供每次会议 50 分钟，最多 100 位参与者
- [GitBook](https://www.gitbook.com/) — 用于捕获和记录技术知识的平台——从产品文档到内部知识库和 API。为个人开发人员提供免费计划
- [transfernow](https://www.transfernow.net/) — 最简单、最快、最安全的文件传输和共享界面。无需强制订阅即可发送照片、视频和其他大文件
- [paste.sh](https://paste.sh/) — 这是一个基于 JavaScript 和加密的简单粘贴网站
- [Revolt.chat](https://revolt.chat/) — 一个尊重隐私的 [Discord](https://discord.com/) 开源替代品。它还拥有 Discord 的所有专有功能，并且完全免费。Revolt 是一个安全、快速且 100% 免费的综合应用程序。与大多数主流聊天应用程序不同，它还支持（官方和非官方）插件
- [Tencent RTC](https://trtc.io/) — 腾讯实时通信（TRTC）提供群组音频/视频通话解决方案。第一年每月 10,000 分钟免费
- [Pastefy](https://pastefy.app/) - 美丽而简单的 Pastebin，可选客户端加密、多标签粘贴、API、带突出显示的编辑器等

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。为开发人员提供免费层。还提供免费开发工具（例如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云内容管理和交付 API。提供一个免费的社区空间，包括 5 个用户、25,000 条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。为开发人员提供免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电子商务的无头 PIM。内置 GraphQL API。免费版本包括无限用户、1000 个目录项、每月 5 GB 带宽和 25k/每月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层。DatoCMS 是一个基于 GraphQL 的 CMS。在较低的层级，您拥有 100k/每月调用。
* [Directus](https://directus.io) — 无头 CMS。一个完全免费的开源平台，用于在本地或云中管理资产和数据库内容。没有限制或付费墙。
* [FrontAid](https://frontaid.io/) — 无头 CMS，直接在 Git 存储库中存储 JSON 内容。没有限制。
* [kontent.ai](https://www.kontent.ai) - 一个内容即服务平台，在为营销人员提供无头 CMS 优势的同时，也为他们提供支持。开发人员计划为两个用户提供无限项目，每个项目两个环境、500 个内容项、两种语言、交付和管理 API 以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
* [Prismic](https://www.prismic.io/) — 无头 CMS。内容管理界面，具有完全托管的可扩展 API。社区计划为单个用户提供无限 API 调用、文档、自定义类型、资产和语言环境。您的下一个项目所需的一切。更大的免费计划可用于开放内容/开源项目。
* [Sanity.io](https://www.sanity.io/) - 具有开源编辑环境和实时托管数据存储的结构化内容平台。无限项目。无限管理员用户、3 个非管理员用户、2 个数据集、500K API CDN 请求、10GB 带宽和每个项目免费包含的 5GB 资产。
* [sensenet](https://sensenet.com) - 面向 API 的无头 CMS，为各种规模的企业提供企业级解决方案。开发人员计划提供 3 个用户、500 个内容项、3 个内置角色、25+5 个内容类型、完全可访问的 REST API、文档预览生成和 Office Online 编辑。
* [TinaCMS](https://tina.io/) — 取代 Forestry.io。开源 Git 支持的无头 CMS，支持 Markdown、MDX 和 JSON。基本服务免费，提供 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - Gatsby 是一个快速、灵活的框架，使用任何 CMS、API 或数据库构建网站变得更有趣。构建和部署无头网站，以吸引更多流量、提高转化率并增加收入！
* [Hygraph](https://hygraph.com/) - 为小型项目提供免费层。GraphQL 优先 API。从传统解决方案迁移到本机 GraphQL 无头 CMS，并提供全渠道内容 API。
* [Squidex](https://squidex.io/) - 为小型项目提供免费层。API / GraphQL 优先。开源，基于事件溯源（自动记录每个更改）。
* [InstaWP](https://instawp.com/) - 几秒钟内启动 WordPress 网站。免费层包括 5 个活动站点、500 MB 空间和 48 小时站点过期时间。
* [Storyblok](https://www.storyblok.com) - 适用于开发人员和营销人员的无头 CMS，支持所有现代框架。社区（免费）层提供管理 API、可视化编辑器、10 个源、自定义字段类型、国际化（无限语言/语言环境）、资产管理器（最多 2500 个资产）、图像优化服务、搜索查询、Webhook + 每月 250GB 流量。
* [WPJack](https://wpjack.com) - 不到 5 分钟即可在一朵云上设置 WordPress！免费层包括 1 个服务器、2 个站点、免费 SSL 证书和无限 cron 作业。没有时间限制或到期日期——您的网站，您做主。

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建器。在自动生成的后端代码中，用户可以完全访问源代码，并可以使用无限的 API 和路由进行广泛集成。免费计划包括三个项目、五个表格和一个谷歌插件。
* [Cody AI](https://sourcegraph.com/cody) — Cody 是一款编码 AI 助手，它使用 AI 和对代码库的深入理解来帮助您更快地编写和理解代码。Cody 为开发人员提供多种 LLM 选择（包括本地推理），支持多种 IDE，支持所有流行的编程语言，并提供免费计划。免费计划每月为开发人员提供 20 次聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动完成（使用 Starcoder 16b）。
* [DhiWise](https://www.dhiwise.com/) — DhiWise 的创新代码生成技术可将 Figma 设计无缝地转变为动态 Flutter 和 React 应用程序，优化您的工作流程，并帮助您比以往更快地构建出色的移动和 Web 体验。
* [Codeium](https://www.codeium.com/) — Codeium 是一款免费的 AI 代码完成工具。它支持 20 多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等），并与所有主要的独立和 Web IDE 集成。
* [Fern](https://buildwithfern.com) — 编写 API 定义，并使用它们以 TypeScript、Python、Java、Go 等流行语言生成 SDK/客户端库。完全支持 OpenAPI。免费层可为最多 20 个端点生成代码。
* [Metalama](https://www.postsharp.net/metalama) — 仅适用于 C#。Metalama 在编译过程中动态生成代码的样板，使源代码保持清洁。它对开源项目免费，其商业友好型免费层包括三个方面。
* [Supermaven](https://www.supermaven.com/) — Supermaven 是一款快速的 AI 代码完成 VSCode、JetBrains 和 Neovim 插件。免费层提供无限的行内完成。
* [tabnine.com](https://www.tabnine.com/) — Tabnine 通过提供来自世界上所有代码的见解来帮助开发人员更快地创建更好的软件。提供插件。
* [v0.dev](https://v0.dev/) — v0 使用 AI 模型根据简单的文本提示生成代码。它根据 shadcn/ui 和 Tailwind CSS 生成易于复制粘贴的 React 代码，人们可以在他们的项目中使用。每次生成至少需要 30 个积分。您将从 1200 个积分开始，每月获得 200 个免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个完整的代码工作流，包括编写、审查和部署，为单个用户提供免费账户，并提供一个拥有 100 MB 存储空间的仓库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费会话仅限 3 分钟，支持 MS IE 9 下的 Vista，分辨率为 1024 x 768
  * [codacy.com](https://www.codacy.com/) — 适用于 PHP、Python、Ruby、Java、JavaScript、Scala、CSS 和 CoffeeScript 的自动化代码审查，免费提供无限量的公共仓库和私有仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - DevOps 的自动化基础设施代码审查工具，与 GitHub、Bitbucket 和 GitLab（包括自托管）集成。除了标准语言之外，它还分析 Ansible、Terraform、CloudFormation 和 Kubernetes 等。 （开源免费）
  * [CodeBeat](https://codebeat.co) — 适用于多种语言的自动化代码审查平台。对于公共仓库，免费提供 Slack 和电子邮件集成。
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，免费提供开源软件和无限量的组织私有仓库（最多 4 个协作者）。对于学生和机构也是免费的。
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（SaaS），开源免费，并提供一个私有仓库
  * [CodeFactor](https://www.codefactor.io) — Git 的自动化代码审查。免费版本包括无限用户、公共仓库和一个私有仓库。
  * [coderabbit.ai](https://coderabbit.ai) — 与 GitHub/GitLab 集成的 AI 驱动的代码审查工具。免费版包括每小时 200 个文件、3 次审查和 50 次对话。开源项目永久免费。
  * [codescene.io](https://codescene.io/) - CodeScene 根据开发人员如何处理代码来确定技术债务的优先级，并可视化组织因素，例如团队耦合和系统掌握情况。开源免费。
  * [CodSpeed](https://codspeed.io) - 在 CI 管道中自动执行性能跟踪。在部署之前，通过精确和一致的指标来发现性能回归。开源项目永久免费。
  * [coveralls.io](https://coveralls.io/) — 显示测试覆盖率报告，开源免费
  * [dareboost](https://dareboost.com) - 每月 5 次免费的 Web 性能、可用性和安全性分析报告
  * [deepcode.ai](https://www.deepcode.ai) — DeepCode 基于 AI 发现 bug、安全漏洞、性能问题和 API 问题。DeepCode 的分析速度允许我们在 IDE 中保存按钮时实时分析代码。支持的语言包括 Java、C/C++、JavaScript、Python 和 TypeScript。与 GitHub、BitBucket 和 GitLab 集成。开源和私有仓库以及最多 30 位开发人员免费。
  * [deepscan.io](https://deepscan.io) — 用于自动查找 JavaScript 代码中运行时错误的高级静态分析，开源免费
  * [DeepSource](https://deepsource.io/) - DeepSource 持续分析源代码更改，发现并修复与安全性、性能、反模式、bug 风险、文档和样式相关的问题。与 GitHub、GitLab 和 Bitbucket 原生集成。
  * [DiffText](https://difftext.com) - 即时查找两个代码块之间的差异。完全免费使用。
  * [eversql.com](https://www.eversql.com/) — EverSQL - 数据库优化的首选平台。自动获取有关数据库和 SQL 查询的重要见解。
  * [gerrithub.io](https://review.gerrithub.io/) — Gerrit 为 GitHub 仓库提供免费的代码审查
  * [gocover.io](https://gocover.io/) — 适用于任何 [Go](https://golang.org/) 软件包的代码覆盖率
  * [goreportcard.com](https://goreportcard.com/) — Go 项目的代码质量，开源免费
  * [gtmetrix.com](https://gtmetrix.com/) — 提供报告和优化网站的全面建议
  * [holistic.dev](https://holistic.dev/) - Postgresql 优化的最佳静态代码分析器。自动检测性能、安全性和架构数据库问题
  * [houndci.com](https://houndci.com/) — 关于 GitHub 提交的代码质量评论，开源免费
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构。Moderne 提供框架迁移、带修复的代码分析以及无与伦比的大规模代码转换，因此开发人员可以将时间花在构建新事物上，而不是维护旧事物上。开源免费。
  * [reviewable.io](https://reviewable.io/) — GitHub 仓库的代码审查，公共或个人仓库免费。
  * [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
  * [scan.coverity.com](https://scan.coverity.com/) — 适用于 Java、C/C++、C# 和 JavaScript 的静态代码分析，开源免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — 针对 GitHub 拉取请求和提交的编程语言感知差异，公共仓库免费
  * [shields.io](https://shields.io) — 开源项目的质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) — 适用于 Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy 等多种语言的自动化源代码分析，开源免费
  * [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和最多 5 名协作者的组织免费。
  * [webceo.com](https://www.webceo.com/) — SEO 工具，还包括代码验证和不同类型的设备
  * [zoompf.com](https://zoompf.com/) — 修复网站的性能问题，提供详细分析

**[⬆️ 返回目录](#目录)**

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 支持 32 种不同包管理器的搜索和依赖更新通知，对开源项目免费
  * [Namae](https://namae.dev/) - 在 GitHub、GitLab、Heroku、Netlify 等多个网站上搜索项目名称的可用性
  * [searchcode.com](https://searchcode.com/) — 综合的基于文本的代码搜索，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) — 提取 `TODO` 注释（和其他标记）以识别代码中值得返回改进的部分
  * [CodeKeep](https://codekeep.io) - 代码片段的 Google Keep。整理、发现和分享代码片段，具有强大的代码截图工具和预设模板，以及链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — 将自动化网页可访问性测试引入开发工作流程。该服务对开源和教育项目免费。
  * [appcircle.io](https://appcircle.io) — 一个企业级的移动 DevOps 平台，可自动化移动应用的构建、测试和发布，以实现更快、更高效的发布周期。免费版：每次构建最大构建时间为 30 分钟，每月 20 次构建，并发构建 1 次。
  * [appveyor.com](https://www.appveyor.com/) — 一个针对 Windows 的 CD 服务，对开源项目免费。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内在云中部署应用和基础设施。支持在 Kubernetes 和 Lambda 环境中部署自定义和第三方应用程序。免费版允许在 5 个域名和 2 个用户下无限量部署应用。
  * [bitrise.io](https://www.bitrise.io/) — 一个针对移动应用的 CI/CD 服务，支持原生或混合应用。每月提供 200 次免费构建，构建时间 10 分钟，团队成员 2 名。开源项目可获得 45 分钟的构建时间、+1 并发和无限团队大小。
  * [buddy.works](https://buddy.works/) — 一个 CI/CD 服务，提供 5 个免费项目和 1 个并发运行（每月 120 次执行）。
  * [Buildkite](https://buildkite.com) CI Pipelines 免费版：每月 3 个用户和 5000 分钟的任务时间。Test Analytics 开发人员免费版：每月 10 万次测试执行，开源项目有更多免费功能。
  * [bytebase.com](https://www.bytebase.com/) — 一个数据库 CI/CD 和 DevOps 服务。对 20 个用户和 10 个数据库实例以下免费。
  * [CircleCI](https://circleci.com/) — 一个全面的免费计划，包括所有功能，适用于 GitHub、GitLab 和 BitBucket 仓库的托管 CI/CD 服务。多种资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试拆分、Docker 层缓存和其他高级 CI/CD 功能。每月最多 6000 分钟的执行时间、无限数量的协作者、私有项目中的 30 个并行工作以及开源项目最多 80,000 分钟的免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 对公共 GitHub 仓库免费。
  * [cirun.io](https://cirun.io) - 对公共 GitHub 仓库免费。
  * [codefresh.io](https://codefresh.io) — 终身免费版：1 次构建、1 个环境、共享服务器、无限公共仓库。
  * [codemagic.io](https://codemagic.io/) - 每月 500 分钟构建时间免费。
  * [codeship.com](https://codeship.com/) — 每月 100 次私有构建、5 个私有项目，对开源项目无限免费。
  * [deploybot.com](https://www.deploybot.com/) — 1 个仓库和 10 次部署，对开源项目免费。
  * [deployhq.com](https://www.deployhq.com/) — 1 个项目和每天 10 次部署（每月 30 分钟构建时间），对开源项目免费。
  * [drone](https://cloud.drone.io/) - Drone Cloud 使开发人员能够在多个架构（包括 x86 和 Arm（32 位和 64 位））上运行持续交付管道。
  * [LayerCI](https://layerci.com) — 一个针对全栈项目的 CI 服务。一个全栈预览环境，内存 5GB，CPU 3 核。
  * [semaphoreci.com](https://semaphoreci.com/) — 对开源项目免费，每月 100 次私有构建。
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建一个 VM，并通过唯一 URL 提供您的应用程序，无限公共与私有仓库，VM 大小可达 2 GB。
  * [styleci.io](https://styleci.io/) — 仅适用于公共 GitHub 仓库。
  * [Mergify](https://mergify.io) — GitHub 的工作流程自动化和合并队列，对公共 GitHub 仓库免费。
  * [Make](https://www.make.com/en) — 一个工作流程自动化工具，允许您通过 UI 连接和自动化应用程序。支持许多应用程序和最流行的 API。对公共 GitHub 仓库免费，免费版包括 100 Mb、1000 次操作和 15 分钟的最小间隔。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC 协作、Terraform 模块注册表、ChatOps 集成、使用 Open Policy Agent 的持续资源合规性、SAML 2.0 的 SSO 以及公共工作者池访问权限：每月最多 200 分钟。
  * [microtica.com](https://microtica.com/) - 带有现成基础设施组件的启动环境，在 AWS 上免费部署应用程序并支持生产工作负载。免费版包括 1 个环境（在您的 AWS 帐户上）、2 个 Kubernetes 服务、每月 100 分钟构建时间和 20 次每月部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、跨机器任务分布甚至自动拆分端到端测试运行等功能加快 CI 上的 monorepos 速度。它提供了一个免费计划，适用于最多 30 位贡献者，并包含 150,000 个免费积分。
  * [blacksmith](https://www.blacksmith.sh/) - 为 GitHub Actions 提供托管性能运行器，每月 3,000 分钟免费，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate 是一个用于基础设施即代码（IaC）工具的编排和管理平台，例如 Terraform、OpenTofu 和 Terragrunt。免费版最多 2 个用户，包括所有功能。
  * [Terrateam](https://terrateam.io) - 基于 GitOps 的 Terraform 自动化，具有基于拉取请求的工作流、通过自托管运行器进行项目隔离以及用于有序操作的分层运行。对最多 3 个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 针对网页、原生移动和桌面应用程序的智能视觉验证。与几乎所有自动化解决方案（如 Selenium 和 Karma）和远程运行器（Sauce Labs、Browser Stack）集成。开源免费。单用户每周检查点数量有限的免费版。
* [Appetize](https://appetize.io) — 在这个基于云的 Android 手机/平板电脑模拟器和 iPhone/iPad 模拟器上测试您的 Android 和 iOS 应用程序，直接在您的浏览器中运行。免费版包括两个并发会话，每月使用时间为 30 分钟。不限制应用大小。
* [Apptim](https://apptim.com) — 一种移动测试工具，使没有性能工程技能的人也能评估应用程序的性能和用户体验 (UX)。桌面版在自己的设备上使用是完全免费的，支持 iOS 和 Android 上的无限测试。
* [Argos](https://argos-ci.com) - 开发人员的开源视觉测试。无限数量的项目，每月 5,000 张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一个持续基准测试套件，用于捕捉 CI 性能回归。所有公共项目都免费。
* [browserstack.com](https://www.browserstack.com/) — 人工和自动化浏览器测试，[开源免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 一种轻量级的 Web 应用程序测试自动化工具。它易于学习，无需编码。您可以在自己的计算机上免费运行无限次测试。每月额外付费还可获得云监控和 CI/CD 集成。
* [Checkly](https://checklyhq.com) - 针对现代 DevOps 的基于代码的合成监控。以传统提供商价格的一小部分监控您的 API 和应用程序。由监控即代码工作流程和 Playwright 提供支持。开发人员享有慷慨的免费额度。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展程序，测试您的网站是否遵循 50 多个 SEO、速度和安全最佳实践。小型网站免费。
* [cypress.io](https://www.cypress.io/) - 针对任何在浏览器中运行的应用程序的快速、简单和可靠的测试。Cypress Test Runner 始终免费开源，没有限制。对于开源项目，Cypress Dashboard 最多支持 5 个用户免费。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建由 AI 驱动的 Cypress 测试/POM 模型。除了 AI 部分之外，其余都是开源的。每月五个测试创建量，包括自我修复脚本、电子邮件和视觉测试，免费。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录和回放 Web 浏览器中的所有步骤并创建脚本，免费但功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin 的混沌工程工具允许您安全地向系统注入故障，以在它们导致客户面临的问题之前找到弱点。Gremlin Free 提供对最多 5 个主机或容器的关闭和 CPU 攻击的访问。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid 测试，免费计划包括最多 4 个同时 Selenium 节点/10 个网格启动/每月 4,000 分钟测试时间
* [katalon.com](https://katalon.com) - 提供了一个测试平台，可以帮助不同级别的测试成熟度团队，包括 Katalon Studio、TestOps (+ 免费视觉测试)、TestCloud 和 Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy 是一款面向开发人员的功能测试工具包。录制 API 调用可为 API 生成端到端测试 (KTests) 和模拟或存根 (KMocks)。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 在任何 CI 提供商上通过对测试套件进行最佳并行化来加快测试速度。在并行 CI 节点上拆分 Ruby 和 JavaScript 测试以节省时间。免费计划最多 10 分钟的测试文件，开源项目免费无限计划。
* [lambdatest.com](https://www.lambdatest.com/) — 人工、视觉、屏幕截图和 Selenium、cypress 上的自动化浏览器测试，[开源免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建 API 和负载测试。每月免费模拟 50 个并发用户，最多 60 分钟。
* [lost-pixel.com](https://lost-pixel.com) - 对您的 Storybook、Ladle、Histoire 故事和 Web 应用程序进行全面的视觉回归测试。无限团队成员，开源完全免费，每月 7,000 个快照。
* [octomind.dev](https://www.octomind.dev/) - 由人工智能辅助的测试用例生成功能自动生成、运行和维护 Playwright UI 测试
* [percy.io](https://percy.io) - 为任何 Web 应用程序、静态站点、样式指南或组件库添加视觉测试。 无限团队成员、演示应用程序和无限项目，每月 5,000 个快照。
* [preflight.com](https://preflight.com) - 无代码自动化 Web 测试。在浏览器中录制可抵抗 UI 更改的测试，并在 Windows 机器上运行它们。可以与 CI/CD 集成。免费计划包括 50 次每月测试运行，并附带视频、HTML 会话等。
* [qase.io](https://qase.io) - 适用于 Dev 和 QA 团队的测试管理系统。管理测试用例、编写测试运行、执行测试、跟踪缺陷并衡量影响。免费版包括所有核心功能，附件空间 500MB，最多 3 个用户。
* [Repeato](https://repeato.app/) 一种基于计算机视觉和人工智能的无代码移动应用程序测试自动化工具。适用于原生应用程序、Flutter、React-Native、Web、Ionic 等许多应用程序框架。免费计划限于 iOS 的 10 次测试和 Android 的 10 次测试，但包括付费计划的大部分功能，包括无限次测试运行。
* [Requestly](https://requestly.com/) 一个开放源代码的 Chrome 扩展程序，用于拦截、重定向和模拟 HTTP 请求。包括 [Debugger](https://requestly.com/products/web-debugger/)、[Mock Server](https://requestly.com/products/mock-server/)、[API Client](https://requestly.com/products/api-client/) 和 [Session Recording](https://requestly.com/products/session-book/)。 免费版中最多可创建 10 条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费的网页 SEO 网站测试。每天 10 次免费网站抓取。有用的 SEO 学习资源以及如何改善任何网站的网页 SEO 结果的建议，无论技术如何。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 它类似于 CodePen，但用于跨浏览器测试。UI-licious 让您像编写用户故事一样编写测试，并提供一个免费平台 - UI-licious Snippets - 允许您在没有注册要求的情况下在 Chrome 上运行长达 3 分钟的无限测试。找到错误？您可以复制测试的唯一 URL，向开发人员展示如何重现错误。
* [TestCollab](https://testcollab.com) - 一种用户友好的测试管理软件，其免费计划包括 Jira 集成、无限项目、使用 CSV/XLSx 导入测试用例、时间跟踪和 1GB 文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium 浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
* [Testspace.com](https://testspace.com/) - 用于发布自动化测试结果的仪表板，以及用于使用 GitHub 将手动测试作为代码实施的框架。该服务对开源免费，每月 450 次结果。

  * [UseWebhook.com](https://usewebhook.com) - 在浏览器中捕获和检查 Webhook。转发到本地主机，或从历史记录中重播。免费使用。
  * [Vaadin](https://vaadin.com) — 使用 Java 或 TypeScript 构建可扩展的 UI，并利用集成的工具、组件和设计系统来加快迭代速度、改进设计并简化开发过程。无限项目，五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成期间使用唯一的 URL 调试和检查 Webhook 和 HTTP 请求。完全免费，您可以创建无限个 URL 并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 Webhook、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置 Webhook 并通过推送通知和电子邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全和公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖 SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件、容器扫描、EOL 等。免费计划包括 2 位用户、10 个仓库、1 个云、2 个容器和 1 个域的扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 发现网络中受损的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 一个基于自然语言处理和机器学习的网站和 API 反垃圾邮件过滤器。免费计划每天每个域名包括 200 个请求。
  * [atomist.com](https://atomist.com/) — 一种更快、更方便的自动执行各种开发任务的方法。现处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — Amazon Web Services (AWS) 安全和合规性审计和监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高可信度入侵指标 (IOC)，其中一部分可在 GitHub 上获得 (https://github.com/unknownhad/AWSAttacks)。完整列表可通过 API 获取
  * [CodeNotary.io](https://www.codenotary.io/) — 一个开源平台，提供不可磨灭的证明来公证代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 云优先、开发人员友好的安全平台，防止 .NET 和 Java 应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单、直观的网络应用程序，用于分析和解码/编码数据，而无需处理复杂工具或编程语言。就像密码学和加密的瑞士军刀。所有功能均免费使用，没有限制。开源，如果您希望自行托管。
  * [DAS](https://signup.styra.com/) — Styra DAS Free，完整的生命周期策略管理，用于创建、部署和管理 Open Policy Agent(OPA) 授权
  * [Datree](https://www.datree.io/) — 一个开源 CLI 工具，通过确保清单和 Helm 图表遵循最佳实践以及组织的策略，防止 Kubernetes 配置错误
  * [Dependabot](https://dependabot.com/) 自动化 Ruby、JavaScript、Python、PHP、Elixir、Rust、Java (Maven 和 Gradle)、.NET、Go、Elm、Docker、Terraform、Git 子模块和 GitHub Actions 的依赖关系更新。
  * [DJ Checkup](https://djcheckup.com) — 使用此免费的自动检查工具扫描 Django 站点的安全漏洞。从小马检查网站派生。
  * [Doppler](https://doppler.com/) — 应用程序机密和配置的通用机密管理器，支持与各种云提供商同步。对于拥有基本访问控制权限的五名用户免费。
  * [Dotenv](https://dotenv.org/) — 同步您的 .env 文件，快速且安全。停止通过不安全的渠道（例如 Slack 和电子邮件）共享 .env 文件，再也不必担心丢失重要的 .env 文件。对于最多 3 名团队成员免费。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动机密检测和修复，将机密信息排除在源代码之外。扫描您的 Git 仓库中的 350 多种机密和敏感文件 - 对于个人和 25 名以下开发人员的团队免费。
  * [Have I been pwned?](https://haveibeenpwned.com) — 用于获取有关违规信息的 REST API
  * [hostedscan.com](https://hostedscan.com) — 针对 Web 应用程序、服务器和网络的在线漏洞扫描器。每月十次免费扫描。
  * [Infisical](https://infisical.com/) — 一个开源平台，可让您在团队和基础设施中管理开发人员机密：从本地开发到第三方服务的测试/生产环境。对于最多 5 名开发人员免费。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准，例如 IPv6、DNSSEC、HTTPS、DMARC、STARTTLS 和 DANE
  * [keychest.net](https://keychest.net) - SSL 过期管理和集成的 CT 数据库的证书购买
  * [letsencrypt.org](https://letsencrypt.org/) — 免费 SSL 证书颁发机构，其证书受到所有主要浏览器的信任
  * [meterian.io](https://www.meterian.io/) - 监控 Java、Javascript、.NET、Scala、Ruby 和 NodeJS 项目的依赖项安全漏洞。对于一个私有项目免费，对于开源项目则不限数量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 查找和修复站点中的安全漏洞
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序、配置的安全监控，25 个用户和 30 天历史记录用户免费。
  * [openapi.security](https://openapi.security/) - 一个免费工具，可以快速检查任何基于 OpenAPI / Swagger 的 API 的安全性。您不需要注册。
  * [pixee.ai](https://pixee.ai) - 自动化产品安全工程师，作为 GitHub 免费机器人，向 Java 代码库提交 PR 以自动解决漏洞。其他语言即将推出！
  * [pyup.io](https://pyup.io) — 监控 Python 依赖项的安全漏洞，并自动进行更新。对于一个私有项目免费，对于开源项目则不限数量。
  * [qualys.com](https://www.qualys.com/community-edition) — 查找 Web 应用程序漏洞，并针对 OWASP 风险进行审核
  * [report-uri.io](https://report-uri.io/) — CSP 和 HPKP 违规报告
  * [ringcaptcha.com](https://ringcaptcha.com/) — 免费提供使用电话号码作为 ID 的工具
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API 可以丰富 SIEM 中的域威胁指标，提供有关域名和改进威胁检测与响应的综合信息。[在此](https://account.seclookup.com/)获取 50,000 次免费查询。
  * [snyk.io](https://snyk.io) — 可以查找和修复开源依赖项中已知的安全漏洞。对于开源项目，测试和修复不受限制。对于您的私有项目，每月限制 200 次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — 对任何 SSL Web 服务器的配置进行深入分析
  * [SOOS](https://soos.io) - 针对开源项目的免费、无限 SCA 扫描。在发布之前检测和修复安全威胁。使用简单有效的解决方案保护您的项目。
  * [StackHawk](https://www.stackhawk.com/) 在管道中自动执行应用程序扫描，以在进入生产环境之前查找和修复安全漏洞。对于单个应用程序，扫描和环境数量不受限制。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费的网站安全检查和恶意软件扫描
  * [Protectumus](https://protectumus.com) - 免费的网站安全检查、站点防病毒软件以及 PHP 的服务器防火墙 (WAF)。对于注册用户，免费版中提供电子邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试 SSL/TLS 服务的服务器配置、证书、链等的安全性。不限于 HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：它专为研究人员、分析师和刚开始了解网络威胁情报的组织设计。对于最多 3 个用户免费
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划允许每周进行 XSS 扫描
  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码和自动密钥管理来加密和解密数据。对于最多 1,000,000 次加密的单个应用程序免费。
  * [Virgil Security](https://virgilsecurity.com/) — 在您的数字解决方案中实施端到端加密、数据库保护、物联网安全等的工具和服务。对于最多 250 个用户的应用程序免费。
  * [Vulert](https://vulert.com) - Vulert 会持续监控您的开源依赖项以查找新的漏洞，并建议修复方案，而无需安装或访问代码库。对于开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式 GraphQL 端点的安全扫描。免费，无需登录。

**[⬆️ 返回顶部](#目录)**

## 身份验证、授权和用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和 API 提供细粒度授权即服务。每月活跃用户（MAU）和 100 个授权者实例免费。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成 SSO、MFA、无密码身份验证等。包括前端和后端应用程序的 SDK。每月 1000 个 MAU 和五个身份提供商免费。
* [Auth0](https://auth0.com/) — 托管 SSO。免费计划包括 25,000 MAU、无限社交连接、自定义域名等。
* [Authgear](https://www.authgear.com) - 在几分钟内为您的应用程序带来无密码、一次性密码、2FA、SSO。包括所有前端。每月 5000 个 MAU 免费。
* [Authress](https://authress.io/) — 身份验证登录和访问控制，任何项目的无限身份提供商。Facebook、Google、Twitter 等。前 1000 次 API 调用免费。
* [Authy](https://authy.com) - 多设备上的双因素身份验证 (2FA)，并带有备份。Google 身份验证器的替代品。前 100 次成功身份验证免费。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权和访问控制，每月 100 个活跃主体免费。
* [Clerk](https://clerk.com) — 用户管理、身份验证、2FA/MFA、预构建 UI 组件，用于登录、注册、用户资料等。每月 10,000 个活跃用户免费。
* [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak 身份和访问管理即服务。100 个用户和一个领域免费。
* [Corbado](https://www.corbado.com/) — 为新应用或现有应用添加通行密钥优先身份验证。无限 MAU 免费。
* [Descope](https://www.descope.com/) — 高度可定制的身份验证流程，提供无代码和 API/SDK 方法，每月 7,500 个活跃用户/50 个租户（最多 5 个 SAML/SSO 租户）免费。
* [duo.com](https://duo.com/) — 网站或应用程序的双因素身份验证 (2FA)。前 10 个用户、所有身份验证方法、无限集成功能、硬件令牌免费。
* [Kinde](https://kinde.com/) - 简单、健壮的身份验证，可在几分钟内与您的产品集成。 7,500 个免费 MAU 入门。
* [logintc.com](https://www.logintc.com/) — 通过推送通知进行双因素身份验证 (2FA)，前 10 个用户、VPN、网站和 SSH 免费。
* [MojoAuth](https://mojoauth.com/) - MojoAuth 使您能够在几分钟内在 Web、移动或任何应用程序中轻松实现无密码身份验证。
* [Okta](https://developer.okta.com/signup/) — 用户管理、身份验证和授权。每月 100 个活跃用户免费。
* [onelogin.com](https://www.onelogin.com/) — 身份即服务 (IDaaS)、单点登录身份提供商、云 SSO IdP、三个公司应用程序和五个个人应用程序，无限用户免费。
* [Ory](https://ory.sh/) - AuthN/AuthZ/OAuth2.0/零信任管理安全平台。免费的开发者账户，包含所有安全功能、无限团队成员、200 个每日活跃用户和每月 25k 次权限检查。
* [Permit.io](https://permit.io) - 授权即服务提供商平台，为可扩展的微服务启用 RBAC、ABAC 和 ReBAC，并提供实时更新和无代码策略 UI。每月 1000 个活跃用户免费。
* [Phase Two](https://phasetwo.io) - Keycloak 开源身份和访问管理。免费领域，最多 1000 个用户，最多 10 个 SSO 连接，利用 Phase Two 的 Keycloak 增强容器，包括 [Organization](https://phasetwo.io/product/organizations/) 扩展。
* [Stytch](https://www.stytch.com/) - 提供身份验证和欺诈预防 API 和 SDK 的全合一平台。免费计划包括 10,000 个每月活跃用户、无限组织、5 个 SSO 或 SCIM 连接和 1,000 个 M2M 令牌。
* [Stack Auth](https://stack-auth.com) — 不糟糕的开源身份验证。最适合开发人员的解决方案，在 5 分钟内开始使用。可免费自行托管，或提供托管 SaaS 版本，包含 10k 个免费每月活跃用户。
* [SuperTokens](https://supertokens.com/) - 原生集成到您应用程序中的开源用户身份验证，帮助您快速入门，同时控制用户和开发人员体验。每月 5000 个 MAU 免费。
* [Warrant](https://warrant.dev/) — 为您的应用程序托管企业级授权和访问控制服务。免费版包含 100 万次月度 API 请求和 1,000 条授权规则。
* [ZITADEL Cloud](https://zitadel.com) — 即用的用户和访问管理，支持多租户 (B2B) 用例。每月 25,000 次经过身份验证的请求免费，并包含所有安全功能（OTP、无密码、策略等，没有付费墙）。
* [PropelAuth](https://propelauth.com) — 通过几行代码向任何规模的公司销售，200 个用户和 10k 个事务性电子邮件免费（带有水印品牌：“由 PropelAuth 提供支持”）。
* [Logto](https://logto.io/) - 开发、保护和管理产品的用户身份 - 用于身份验证和授权。每月 5,000 个 MAU 免费，并提供开源自托管选项。
* [WorkOS](https://workos.com/) - 100 万 MAU 以下的免费用户管理和身份验证。支持电子邮件 + 密码、社交身份验证、Magic Auth、MFA 等。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 确保移动应用正常运行的必备平台。免费计划：一个应用、分析、无限版本和安装，以及反馈收集。
  * [Loadly](https://loadly.io) - iOS & Android 测试版应用分发服务，提供完全免费的服务，包括无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将 iOS & Android 应用部署到设备上。免费计划：应用上传、密码保护链接、1 天过期、10 次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过空中下载分发 iOS & Android 应用。免费计划：无限上传、私人链接、访客 2 天过期、注册用户 60 天过期。
  * [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发。免费计划包括一个应用项目、三个应用版本、500 MB 存储空间，以及每月 100 次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括五个应用、每月 50 次下载和最大文件大小 100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在 IaaS 上部署预先准备好的应用程序。免费管理 1 个 AWS 微型实例
  * [Esper](https://esper.io) — 具有 DevOps 的 Android 设备的 MDM 和 MAM。一个用户许可证免费提供 100 台设备和 25 MB 的应用程序存储空间
  * [jamf.com](https://www.jamf.com/) — iPad、iPhone 和 Mac 设备管理，免费提供 3 台设备
  * [Miradore](https://miradore.com) — 设备管理服务。随时了解设备库存的最新情况并免费保护无限台设备。免费计划提供基本功能
  * [moss.sh](https://moss.sh) - 帮助开发人员部署和管理他们的 Web 应用程序和服务器。每月免费部署 25 次 Git
  * [runcloud.io](https://runcloud.io/) - 专注于 PHP 项目的服务器管理。免费提供 1 个服务器
  * [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理和部署您的服务器和网站。免费提供 1 个服务器

**[⬆️ 返回顶部](#目录)**

## 消息传递和流式传输

  * [Ably](https://www.ably.com/) - 支持实时消息、在线状态、持久化和保证投递的消息服务。免费计划包括每月 300 万条消息、100 个峰值连接和 100 个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ 即服务。小狐猴计划：每月最多 100 万条消息、最多 20 个并发连接、最多 100 个队列、最多 10,000 条排队消息，以及不同可用区的多个节点
  * [courier.com](https://www.courier.com/) — 一个 API 即可实现推送、应用内、电子邮件、聊天、短信和其他消息渠道，并提供模板管理等功能。免费计划包括每月 10,000 条消息。
  * [engagespot.co](https://engagespot.co/) — 面向开发人员的多渠道通知基础设施，提供预置的应用内收件箱和无需编码的模板编辑器。免费计划包括每月 10,000 条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将 MQTT 设备连接到云本地 IoT 消息代理。 免费连接最多 100 台设备（无需信用卡）
  * [knock.app](https://knock.app) – 面向开发人员的通知基础设施。通过一次 API 调用即可向应用内、电子邮件、短信、Slack 和推送等多个渠道发送通知。免费计划包括每月 10,000 条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5 分钟内向任何软件添加用户通知。免费计划包括每月 10,000 条通知和 100 条短信和自动电话。
  * [Novu.co](https://novu.co) — 面向开发人员的开源通知基础设施。简单组件和 API 可在一个地方管理所有通信渠道：电子邮件、短信、直接、应用内和推送。免费计划包括每月 30,000 条通知，保留 90 天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。对于最多 100 个并发连接和每天 20 万条消息免费
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。对于最多 20 个并发连接和每天 10 万个事件免费
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io) 即服务。全球、AWS、GCP 和 Azure。永久免费，4k 消息大小、50 个活动连接和每月 5GB 数据。
  * [cloudkarafka.com](https://www.cloudkarafka.com/) - 免费共享 Kafka 集群，最多 5 个主题，每个主题 10MB 数据，28 天数据保留。
  * [pubnub.com](https://www.pubnub.com/) - 每月 100 万次 Swift、Kotlin 和 React 消息交易。每笔交易可能包含多条消息。
  * [eyeson API](https://developers.eyeson.team/) - 基于 WebRTC（SFU、MCU）的视频通信 API 服务，用于构建视频平台。支持实时数据注入、视频布局、录制，以及完全托管的 Web UI（快速启动）或自定义 UI 包。提供[面向开发人员的免费套餐](https://apiservice.eyeson.com/api-pricing)，每月 1,000 分钟会议时长。
  * [webpushr](https://www.webpushr.com/) - 网页推送通知 - 对于最多 10,000 位订阅者免费，无限推送通知，浏览器内消息
  * [httpSMS](https://httpsms.com) - 使用您的安卓手机作为短信网关发送和接收短信。每月最多发送和接收 200 条消息免费。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展且安全的无服务器 MQTT 代理，几秒钟即可获得。每月 100 万个会话分钟数永久免费（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 向 iOS 和 Android 设备发送推送通知。通过 API 或 Webhook 轻松集成，并完全控制您的警报。免费计划：每天向 1 个设备和 1 个应用程序发送 50 条消息。

**[⬆️ 返回目录](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天免费 10 万行日志，保留 24 小时
* [logentries.com](https://logentries.com/) — 每月免费 5 GB，保留 7 天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每天 200MB，保留 7 天
* [logz.io](https://logz.io/) — 每天免费 1 GB，保留 1 天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 由 Manage Engine 支持的 Log Management 服务。免费计划提供 50 GB 存储空间，15 天存储保留和 7 天搜索。
* [papertrailapp.com](https://papertrailapp.com/) — 48 小时搜索，7 天存档，每月 50 MB
* [sematext.com](https://sematext.com/logsene) — 每天免费 500 MB，保留 7 天
* [sumologic.com](https://www.sumologic.com/) — 每天免费 500 MB，保留 7 天
* [logflare.app](https://logflare.app/) — 每月每款应用免费 12,960,000 条日志，保留 3 天
* [logtail.com](https://logtail.com/) — 基于 ClickHouse 的 SQL 兼容日志管理。每月免费 1 GB，保留 3 天。
* [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费 1,000 条用户活动日志，保留 1 个月，最多 5 个项目。
* [openobserve.ai](https://openobserve.ai/) - 每月免费 200 GB 引入量，保留 15 天

## 翻译管理

  * [crowdin.com](https://crowdin.com/) — 无限数量的项目、字符串和协作者，适用于开源项目
* [gitlocalize.com](https://gitlocalize.com) - 对于私有和公共仓库，免费且无限制
* [Lecto](https://lecto.ai/) - 机器翻译 API，提供免费版 (30 次免费请求，每次 1000 个翻译字符)。与 Loco Translate Wordpress 插件集成
* [lingohub.com](https://lingohub.com/) — 对于开源项目免费，否则免费支持 3 个用户
* [localazy.com](https://localazy.com) - 免费提供 1000 个源语言字符串、无限语言、无限贡献者，以及针对初创企业和开源项目的优惠
* [Localeum](https://localeum.com) - 免费提供 1000 个字符串、1 个用户、无限语言和无限项目
* [localizely.com](https://localizely.com/) — 适用于开源项目的免费版
* [Loco](https://localise.biz/) — 免费提供 2000 个翻译、无限名翻译人员、每个项目 10 种语言/1000 个可翻译资产
* [oneskyapp.com](https://www.oneskyapp.com/) — 针对最多 5 名用户的有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 免费提供最多 1000 个字符串
* [SimpleLocalize](https://simplelocalize.io/) - 免费提供最多 100 个翻译键、无限字符串、无限语言，以及针对初创企业的优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 免费版 SaaS，提供有限的翻译量；免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 免费提供 1000 个字符串、1 个用户、无限语言和无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 免费提供最多 500 个字符串
* [weblate.org](https://weblate.org/) — 对于自由项目，免费版提供最多 10,000 个字符串源，以及无限量的自托管本地部署。
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人的免费版

## 监控

  - [UptimeObserver.com](https://uptimeobserver.com) - 提供20个每5分钟间隔的监控，以及可定制的状态页面，甚至可以用于商业用途。享受无限的实时通知，通过电子邮件和电报发送。开始使用无需信用卡。
- [Pingmeter.com](https://pingmeter.com/) - 5个每10分钟间隔的监控。监控 SSH、HTTP、HTTPS 和任何自定义 TCP 端口。
- [alerty.ai](https://www.alerty.ai) - 前端、后端、数据库等的免费 APM 和监控 + 免费代理运行。
- [appdynamics.com](https://www.appdynamics.com/) — 24 小时指标免费，应用程序性能管理代理限制为 Java、.NET、PHP 和 Node.js 各一个。
- [appneta.com](https://www.appneta.com/) — 免费，数据保留时间为 1 小时。
- [appspector.com](https://appspector.com/) - iOS/Android/Flutter 远程调试任务控制。对于小型流量使用（64MB 日志）免费。
- [assertible.com](https://assertible.com) — 自动化 API 测试和监控。为团队和个人提供免费计划。
- [bleemeo.com](https://bleemeo.com) - 对于 3 台服务器、5 个监控、无限用户、无限仪表板和无限警报规则免费。
- [checklyhq.com](https://checklyhq.com) - 开发人员使用的端到端/合成监控和深度 API 监控。免费计划包括五个用户和 50,000+ 次检查运行。
- [cloudsploit.com](https://cloudsploit.com) — AWS 安全和配置监控。免费：无限按需扫描、无限用户和无限存储帐户。订阅：自动扫描、API 访问等。
- [cronitor.io](https://cronitor.io/) - Cron 作业、网站、API 等性能分析和正常运行时间监控。免费级包括五个监控。
- [datadoghq.com](https://www.datadoghq.com/) — 最多 5 个节点免费。
- [deadmanssnitch.com](https://deadmanssnitch.com/) — Cron 作业监控。一个免费的监控（更多监控可通过推荐他人注册获得）。
- [downtimemonkey.com](https://downtimemonkey.com/) — 60 个监控，每 5 分钟间隔一次。电子邮件、Slack 提醒。
- [economize.cloud](https://economize.cloud) — Economize 通过组织云资源来优化和报告 Google Cloud Platform 支出，帮助您了解云基础设施成本。每月支出不超过 5,000 美元免费。
- [elastic.co](https://www.elastic.co/solutions/apm) — JS 开发人员即时性能分析。免费，数据保留时间为 24 小时。
- [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud 是一个可组合的观测平台，可将指标和日志与 Grafana 集成。免费：3 个用户、10 个仪表板、100 个警报、Prometheus 和 Graphite 中的指标存储（10,000 个序列、14 天保留）、Loki 中的日志存储（50 GB 日志、14 天保留）
- [healthchecks.io](https://healthchecks.io) — 监控 Cron 作业和后台任务。最多 20 次检查免费。
- [Hydrozen.io](https://hydrozen.io) — 正常运行时间监控和状态页面，免费计划：10 个正常运行时间监控、5 个心跳监控、1 个域名监控和 1 个免费状态页面。
- [incidenthub.cloud](https://incidenthub.cloud/) — 云和 SaaS 状态页面聚合器 - 20 个监控和 2 个通知渠道（Slack 和 Discord）永久免费。
- [inspector.dev](https://www.inspector.dev) - 不到一分钟即可获得完整的实时监控仪表板，并提供永久免费套餐。
- [instrumentalapp.com](https://instrumentalapp.com) - 漂亮且易于使用的应用程序和服务器监控，最多可免费监控 500 个指标，并提供 3 小时的数据可见性。
- [keychest.net/speedtest](https://keychest.net/speedtest) - 与 Digital Ocean 进行独立速度测试和 TLS 握手延迟测试。
- [letsmonitor.org](https://letsmonitor.org) - SSL 监控，最多可监控 5 个站点免费。
- [linkok.com](https://linkok.com) - 在线断链检查器，对于最多 100 页的小型网站免费，对于开源项目完全免费。
- [loader.io](https://loader.io/) — 免费负载测试工具（带限制）。
- [netdata.cloud](https://www.netdata.cloud/) — Netdata 是一个开源工具，用于收集实时指标。这是一个不断发展的产品，也可以在 GitHub 上找到！
- [newrelic.com](https://www.newrelic.com) — New Relic 观测平台旨在帮助工程师创建更完美的软件。从单体架构到无服务器架构，您可以对所有内容进行检测，然后分析、排查和优化整个软件堆栈。免费版每月提供 100GB 免费数据引入、1 个免费全访问用户和无限免费主要用户。
- [Middleware.io](https://middleware.io/) - Middleware 观测平台为您的应用程序和堆栈提供完全可见性，因此您可以大规模监控和诊断问题。他们为开发社区使用提供了一个永久免费套餐，包括对 100 万个日志事件的日志监控、对 2 个主机的基础设施监控和 APM。
- [nixstats.com](https://nixstats.com) - 对于一台服务器免费。电子邮件通知、公共状态页面、60 秒间隔等。
- [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot 为网站和 API 提供正常运行时间监控，为 Cron 作业和计划任务提供监控。还提供状态页面。前五个每 3 分钟间隔的检查是免费的。免费版通过 Slack、Discord 和电子邮件发送提醒。
- [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查某个网站是否被中国长城防火墙屏蔽。它通过比较在中国和美国服务器上检测到的 DNS 结果和 ASN 信息来识别 DNS 污染。
- [opsgenie.com](https://www.opsgenie.com/) — 强大的提醒和随时服务管理。最多 5 个用户免费。
- [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括提醒、强大的可视化功能和基本报告。最多 100 个传感器免费。
- [pagecrawl.io](https://pagecrawl.io/) - 监控网站更改，最多可监控 6 个网站，每天检查一次，免费。
- [syagent.com](https://syagent.com/) — 非商业性免费服务器监控服务，提供警报和指标。
- [pagerly.io](https://pagerly.io/) - 在 Slack 上管理随时服务（与 Pagerduty、OpsGenie 集成）。最多 1 个团队免费（一个团队是指一个随时服务）。
- [pagertree.com](https://pagertree.com/) - 警报和随时服务管理的简单界面。最多 5 个用户免费。
- [phare.io](https://phare.io/) - 正常运行时间监控，对于无限个项目和无限个状态页面，最多可监控 100,000 个事件免费。
- [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。监控无限个 URL，并通过 Discord、Slack 或电子邮件接收宕机通知。
- [pingpong.one](https://pingpong.one/) — 高级状态页面平台，带监控。免费版包括一个可定制的公共状态页面和一个 SSL 子域。向开源项目和非营利组织免费提供专业版。
- [robusta.dev](https://home.robusta.dev/) — 基于 Prometheus 的强大 Kubernetes 监控。自己带 Prometheus 或安装全包解决方案。免费版包括最多 20 个 Kubernetes 节点。通过 Slack、Microsoft Teams、Discord 等发送提醒。与 PagerDuty、OpsGenie、VictorOps、DataDog 等工具集成。
- [sematext.com](https://sematext.com/) — 24 小时指标免费，无限服务器，10 个自定义指标，500,000 个自定义指标数据点，无限个仪表板、用户等。
- [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron 和 SSL 监控，每个类别 5 个监控免费。
- [sitesure.net](https://sitesure.net) - 网站和 Cron 监控 - 2 个监控免费。
- [skylight.io](https://www.skylight.io/) — 对于前 100,000 个请求免费（仅限 Rails）。
- [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控 API，检查 Ping、DNS 等。

  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限量免费测试，但有限制
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，3 个监控免费
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS 和域名监控。免费监控 10 台服务器、10 个正常运行时间和 10 个域名
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费监控 3 个位置和 20 个主要网络服务的实时数据
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50 个监控免费
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控五个网站，60 秒间隔，公共状态页面
  * [zenduty.com](https://www.zenduty.com/) — 端到端事件管理、提醒、轮班管理和响应编排平台，适用于网络运营、站点可靠性工程和 DevOps 团队。5 个用户以内免费
  * [instatus.com](https://instatus.com) - 10 秒钟获得漂亮的状态页面。免费版包含无限订阅和无限团队
  * [Squadcast.com](https://squadcast.com) - Squadcast 是一款端到端事件管理软件，旨在帮助您推广 SRE 最佳实践。提供免费版计划，支持 10 个用户
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri 是一款稳定的正常运行时间监控工具，提供广泛的监控：cronjob、关键词、网站、端口、ping。免费提供 25 次正常运行时间检查，每 3 分钟检查一次。通过电话、短信、电子邮件和 Webhook 提醒
  * [Better Stack](https://betterstack.com/better-uptime) - 单一产品中的正常运行时间监控、事件管理、轮班排班/提醒和状态页面。免费计划包括 10 个监控，每 3 分钟检查一次，以及状态页面
  * [Pulsetic](https://pulsetic.com) - 10 个监控，6 个月的正常运行时间/日志历史记录，无限状态页面和自定义域名！无限期免费提供无限电子邮件提醒，无需信用卡
  * [Wachete](https://www.wachete.com) - 监控 5 个页面，每 24 小时检查一次
  * [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20 个免费，Linux 和 Windows 服务器监控：5 个免费，状态页面：1 个免费 - 移动应用程序、多个通知渠道等
  * [Servervana](https://servervana.com) - 针对大型项目和团队的高级正常运行时间监控。提供 HTTP 监控、基于浏览器的监控、DNS 监控、域名监控、状态页面等。免费版包括 10 个 HTTP 监控、1 个 DNS 监控和 1 个状态页面

**[⬆️ 返回顶部](#目录)**

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供截图和点击轨迹的 JavaScript 错误跟踪。对开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 试用期后每月免费处理 2,000 次错误
  * [elmah.io](https://elmah.io/) — 针对 Web 开发人员的错误日志记录和正常运行时间监控。为开源项目提供免费的小企业订阅。
  * [Embrace](https://embrace.io/) — 移动应用程序监控。对于每年拥有多达 100 万次用户会话的小团队免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月 3k 事件/1 用户免费。开源且易于自托管以实现无限使用。
  * [GlitchTip](https://glitchtip.com/) — 简单、开源的错误跟踪。与开源 Sentry SDK 兼容。每月 1000 次事件免费，或者可以自托管以取消限制
  * [honeybadger.io](https://www.honeybadger.io) - 异常、正常运行时间和 cron 监控。对于小型团队和开源项目（每月 12,000 次错误）免费。
  * [memfault.com](https://memfault.com) — 云设备可观察性和调试平台。对于 [Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp) 和 [Laird](https://app.memfault.com/register-laird) 设备，免费提供 100 台设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，每月 5,000 次错误/无限用户/30 天保留期的免费计划
  * [sentry.io](https://sentry.io/) — Sentry 实时跟踪应用程序异常，并提供小型免费计划。每月 5k 次错误/1 用户免费，如果自托管则使用不受限制
  * [Axiom](https://axiom.co/) — 存储容量高达 0.5 TB 的日志，保留期 30 天。包括与 Vercel 等平台的集成以及与电子邮件/Discord 通知程序的高级数据查询。
  * [Semaphr](https://semaphr.com) — 适用于移动应用程序的免费一键式杀掉开关。
  * [Jam](https://jam.dev) - 一次点击即可获得对开发人员友好的错误报告。提供无限次“Jam”的免费计划。
  * [Whitespace](https://whitespace.dev) – 一次点击即可直接在浏览器中获得错误报告。个人使用免费计划，无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 提供托管搜索解决方案，具有拼写容错、相关性，以及 UI 库，可轻松创建搜索体验。免费的“构建”计划包括 100 万份文档和每月 1 万次搜索。还免费提供 [developer documentation search](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费提供 1 GB 内存和 1 GB 存储
  * [CommandBar](https://www.commandbar.com/) - 统一的搜索栏服务，一种基于 Web 的 UI 小程序/插件，允许用户在产品内搜索内容、导航、功能等。对每月最多 1,000 名活跃用户和无限命令免费。
  * [Magny](https://magny.io) - SaaS 服务，帮助实现命令面板（例如应用内搜索），大幅减少用户在应用中查找任何内容的时间，从而提高用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费提供 3 个索引、10 万份文档/索引、无限次全文/向量/混合搜索，以及 60 天的分析
  * [searchly.com](http://www.searchly.com/) — 免费提供 2 个索引和 20 MB 存储

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 一个开源平台，提供数据分析、信息安全、Web 开发等方面的免费课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 一个免费的开源平台，提供以 JavaScript 和 Ruby 为重点的 Web 开发课程。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 一个提供大量简历模板的免费平台，经验丰富的专业人士可以克隆、编辑和下载，并优化 ATS。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 来自业内领先专家的免费短期课程，让您在 1 小时或更短的时间内掌握最新的生成式 AI 工具和技术。
  * [LabEx](https://labex.io) - 通过交互式实验室和真实世界项目，掌握 Linux、DevOps、网络安全、编程、数据科学等方面的技能。
  * [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到用户体验设计的各个方面的免费学习路线图。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供与认证相关的免费课程，涵盖网络安全、网络和 Python 等主题。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare 是 MIT 2500 多门课程资料的在线发布平台，与全世界的学习者和教育者自由分享知识。YouTube 频道：[@mitocw](https://www.youtube.com/@mitocw/featured)
  * [W3Schools](https://www.w3schools.com/) - 提供 HTML、CSS、JavaScript 等 Web 开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 学习 HTML/CSS、JavaScript 和 SQL 等基础和进阶知识的免费在线指南。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 用于测试的免费临时电子邮件。
* [AhaSend](https://ahasend.com) - 事务性电子邮件服务，每月免费发送 1000 封电子邮件，免费计划包含无限域名、团队成员、Webhook 和消息路由。
* [AnonAddy](https://anonaddy.com) - 开源匿名电子邮件转发，免费创建无限数量的电子邮件别名。
* [Antideo](https://www.antideo.com) — 免费版：每小时 10 次 API 请求，用于电子邮件验证、IP 和电话号码验证。无需信用卡。
* [Brevo](https://www.brevo.com/) — 每月 9,000 封电子邮件，每天 300 封电子邮件，免费。
* [OneSignal](https://onesignal.com/) — 每月 10,000 封电子邮件，无需信用卡。
* [Bump](https://bump.email/) - 免费 10 个 Bump 电子邮件地址，一个自定义域名。
* [Burnermail](https://burnermail.io/) – 免费 5 个 Burner 电子邮件地址，1 个邮箱，7 天邮箱历史记录。
* [Buttondown](https://buttondown.email/) — 通讯服务。免费订阅量最多 100 人。
* [CloudMailin](https://www.cloudmailin.com/) - 通过 HTTP POST 接收电子邮件和事务性外发电子邮件 - 每月免费发送 10,000 封电子邮件。
* [Contact.do](https://contact.do/) — 链接中的联系表（用于联系表的 bitly）
* [debugmail.io](https://debugmail.io/) — 供开发人员使用的简单测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供您的域名下的 2 个电子邮件地址和 100MB 存储空间。支持 IMAP、POP3、SMTP、SPF/DKIM。
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送 9,000 封电子邮件，每天最多 300 封电子邮件。
* [EmailOctopus](https://emailoctopus.com) - 每月免费发送 10,000 封电子邮件，最多 2,500 名订阅者。
* [EmailJS](https://www.emailjs.com/) – 这不是一个完整的电子邮件服务器；这只是一个电子邮件客户端，您可以使用它直接从客户端发送电子邮件，而不会暴露您的凭证。免费版：每月 200 次请求，2 个电子邮件模板，请求上限为 50Kb，联系人历史记录有限。
* [EtherealMail](https://ethereal.email) - Ethereal 是一个假的 SMTP 服务，主要面向 Nodemailer 和 EmailEngine 用户（但不限于此）。这是一个完全免费的反事务性电子邮件服务，邮件永远不会被投递。
* [Temp-Mail.org](https://temp-mail.org/en/) - 利用多种域名的临时/可丢弃邮件生成器。每次重新加载页面时，电子邮件地址都会刷新。完全免费，其服务不包括任何定价。
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证多达 200 个电子邮件地址，并查看电子邮件是否为临时电子邮件。
* [Emailvalidation.io](https://emailvalidation.io) - 每月免费验证 100 个电子邮件。
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 一个德国临时/可丢弃邮件生成器。支持 10 个域名，同时允许您创建无限的地址。（包含广告）除此之外，该服务完全免费。
* [forwardemail.net](https://forwardemail.net) — 免费的自定义域名电子邮件转发。创建并转发您域名下的无限数量的电子邮件地址（**注意**：如果您使用 .casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top 或 .work TLD，则必须付费，因为它们会产生垃圾邮件）
* [Imitate Email](https://imitate.email) - 用于测试电子邮件功能的沙箱电子邮件服务器，适用于构建/QA 和 CI/CD。免费帐户每天可接收 15 封电子邮件。
* [ImprovMX](https://improvmx.com) – 免费的电子邮件转发。
* [EForw](https://www.eforw.com) – 免费为单个域名转发电子邮件。接收并从您的域名发送电子邮件。
* [Inboxes App](https://inboxesapp.com) — 每天创建最多 3 个临时电子邮件，完成后从 Chrome 扩展程序中删除。适用于测试注册流程。
* [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性电子邮件收件箱，最多可自动删除 3 天的电子邮件。开源，可自托管。
* [mail-tester.com](https://www.mail-tester.com) — 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月 20 次免费测试。
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，由 roundsphere.com 提供的免费服务。
* [mailcatcher.me](https://mailcatcher.me/) — 通过 Web 界面捕获邮件并提供邮件服务。
* [mailchannels.com](https://www.mailchannels.com) - 带有 REST API 和 SMTP 集成的电子邮件 API，每月免费发送 3,000 封电子邮件。
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时电子邮件地址注册，每小时 120 次请求（每月~86,400 次）。
* [Mailchimp](https://mailchimp.com/) — 每月 1,000 封电子邮件，500 名订阅者，免费。
* [Maildroppa](https://maildroppa.com) - 最多 100 名订阅者，以及免费的无限电子邮件和自动化功能。
* [MailerLite.com](https://www.mailerlite.com) — 每月 1,000 名订阅者/12,000 封电子邮件，免费。
* [MailerSend.com](https://www.mailersend.com) — 电子邮件 API，SMTP，每月 3,000 封免费事务性电子邮件。
* [mailinator.com](https://www.mailinator.com/) — 免费的公共电子邮件系统，您可以使用任何收件箱。
* [Mailjet](https://www.mailjet.com/) — 每月 6,000 封电子邮件，每天发送 200 封电子邮件，免费。
* [Mailnesia](https://mailnesia.com) - 免费的临时/一次性电子邮件，会自动访问注册链接。
* [mailsac.com](https://mailsac.com) - 用于临时电子邮件测试的免费 API，免费的公共电子邮件托管，外发捕获，电子邮件到 Slack/WebSocket/Webhook（每月 1,500 次 API 限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用的假 SMTP 服务器，免费计划：1 个收件箱，100 封邮件，没有团队成员，2 个/秒的电子邮件，没有转发规则。
* [Mail7.io](https://www.mail7.io/) — 供 QA 开发人员使用的免费临时电子邮件地址。通过 Web 界面或 API 即时创建电子邮件地址。
* [Momentary Email](https://www.momentaryemail.com/) — 免费的临时电子邮件地址。通过网站或 RSS 源阅读传入的电子邮件。
* [Mutant Mail](https://www.mutantmail.com/) – 免费 10 个电子邮件 ID、1 个域名、1 个收件箱。所有电子邮件 ID 共用一个收件箱。
* [Outlook.com](https://outlook.live.com/owa/) - 免费的个人电子邮件和日历。
* [Parsio.io](https://parsio.io) — 免费的电子邮件解析器（转发电子邮件、提取数据，并将其发送到您的服务器）
* [pepipost.com](https://pepipost.com) — 第一个月免费发送 30,000 封电子邮件，然后每天前 100 封电子邮件免费。
* [Plunk](https://useplunk.com) - 每月 3,000 封电子邮件免费。
* [Postmark](https://postmarkapp.com/) - 每月 100 封电子邮件和无限次的 DMARC 每周摘要，免费。
* [Proton Mail](https://proton.me/mail) -  免费的加密电子邮件服务提供商，带内置端到端加密。免费 1GB 存储空间。
* [Queuemail.dev](https://queuemail.dev) — 可靠的电子邮件发送 API。免费版（每月 10,000 封电子邮件）。异步发送。使用多个 SMTP 服务器。黑名单、日志记录、跟踪、Webhook 等。
* [QuickEmailVerification](https://quickemailverification.com) — 免费版：每天免费验证 100 个电子邮件地址，以及其他免费 API，如 DEA 检测器、DNS 查找、SPF 检测等。
* [Resend](https://resend.com) - 开发人员的事务性电子邮件 API。每月 3,000 封电子邮件，每天 100 封电子邮件，一个自定义域名，免费。
* [Sender](https://www.sender.net) 每月最多 15,000 封电子邮件，最多 2,500 名订阅者，免费。
* [SendGrid](https://sendgrid.com/) — 每天 100 封电子邮件和 2,000 个联系人，免费。
* [Sendpulse](https://sendpulse.com) — 每月 500 名订阅者/15,000 封电子邮件，免费。
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的电子邮件别名/转发解决方案。免费 5 个别名，无限带宽，无限回复/发送。对教育工作者（学生、研究人员等）免费。
* [Substack](https://substack.com) — 无限量免费通讯服务。开始收费时才付费。

  * [Takeout](https://takeout.bysourfruit.com) - 一款不断更新的电子邮件服务，让发送电子邮件变得简单。每月免费发送 500 封事务性电子邮件。
  * [temp-mail.io](https://temp-mail.io) — 免费的临时性电子邮件服务，一次性提供多个电子邮件，并支持转发。
  * [tinyletter.com](https://tinyletter.com/) — 每月免费发送至 5,000 位订阅者。
  * [Touchlead](https://touchlead.app) - 一款多用途营销自动化工具，具有潜在客户管理、表单构建器和自动化功能。对于有限数量的潜在客户和自动化功能免费。
  * [trashmail.com](https://www.trashmail.com) - 免费的临时性电子邮件地址服务，支持转发和自动地址过期。
  * [Tuta](https://tuta.com/) - 免费的加密电子邮件服务提供商，具有内置的端到端加密功能，无广告、无追踪。免费提供 1GB 存储空间和一个日历（Tuta 还提供[付费计划](https://tuta.com/pricing)。）。Tuta 也是[开源软件](https://github.com/tutao/tutanota)，因此您可以自行托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证 API，具有邮箱确认和临时性电子邮件地址检测功能；每天免费验证 25 个电子邮件地址。
  * [verimail.io](https://verimail.io/) — 批量和 API 电子邮件验证服务。每月免费验证 100 次。
  * [Zoho](https://www.zoho.com) — 最初是电子邮件提供商，现在提供一系列服务，其中一些服务有免费计划。具有免费计划服务列表：
     - [Email](https://zoho.com/mail) 对于 5 位用户免费。5GB/用户 & 25 MB 附件限制，一个域名。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist 的永久免费计划包括一个同时远程支持许可证，以及 5 个无人值守计算机许可证，可无限期用于专业和个人用途。
     - [Sprints](https://zoho.com/sprints) 对于 5 位用户、5 个项目和 500MB 存储免费。
     - [Docs](https://zoho.com/docs) — 对于 5 位用户免费，附件限制为 1 GB & 5GB 存储。Zoho Office Suite（Writer、Sheets 和 Show）捆绑在一起。
     - [Projects](https://zoho.com/projects) — 对于 3 位用户、2 个项目和 10 MB 附件限制免费。[Bugtracker](https://zoho.com/bugtracker) 适用同样的计划。
     - [Connect](https://zoho.com/connect) — 团队协作工具，对于 25 位用户免费，提供 3 个组、3 个自定义应用、3 个看板、3 个手册、10 个集成以及频道、活动和论坛。
     - [Meeting](https://zoho.com/meeting) — 支持最多 3 位参与者和 10 位网络研讨会出席者参加会议。
     - [Vault](https://zoho.com/vault) — 密码管理服务，适用于个人用户。
     - [Showtime](https://zoho.com/showtime) — 另一种远程会议软件，支持最多 5 位参与者参加培训。
     - [Notebook](https://zoho.com/notebook) — Evernote 的免费替代品。
     - [Wiki](https://zoho.com/wiki) — 对于 3 位用户免费，提供 50 MB 存储空间、无限页、zip 备份、RSS 和 Atom 提要、访问控制和可定制 CSS。
     - [Subscriptions](https://zoho.com/subscriptions) — 订阅管理服务，支持 20 位客户/订阅和 1 位用户，所有付款均由 Zoho 托管。存储最后 40 个订阅指标。
     - [Checkout](https://zoho.com/checkout) — 产品计费管理服务，支持 3 个页面和最多 50 笔付款。
     - [Desk](https://zoho.com/desk) — 客户支持管理服务，支持 3 位客服代表、私人知识库和电子邮件工单。与 [Assist](https://zoho.com/assist) 集成，提供 1 个远程技术人员和 5 个无人值守计算机。
     - [Cliq](https://zoho.com/cliq) — 团队聊天软件，提供 100 GB 存储空间、无限用户、每个频道最多 100 位用户和 SSO。
     - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销服务
     - [Forms](https://zoho.com/forms) - 表单创建器
     - [Sign](https://zoho.com/sign) - 无纸化签名服务
     - [Surveys](https://zoho.com/surveys) - 在线调查服务
     - [Bookings](https://zoho.com/bookings) - 预约调度服务
* [Maileroo](https://maileroo.com) - 针对开发人员的 SMTP 中继和电子邮件 API。每月 5,000 封电子邮件，无限域名，免费电子邮件验证，黑名单监控，邮件测试仪等。

**[⬆️ 返回目录](#目录)**

## 功能切换管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为中心的功能标志服务，具有无限团队规模、优质支持和合理的价格。免费计划包括最多 10 个标志、两个环境、1 个产品和每月 500 万次请求。
  * [Flagsmith](https://flagsmith.com) - 充满信心地发布功能; 在 Web、移动和服务器端应用程序之间管理功能标志。使用我们的托管 API，或部署到您自己的私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 具有内置贝叶斯统计分析引擎的开源功能标志和 A/B 测试提供商。对于最多 3 个用户，功能标志和实验不受限制，免费使用。
  * [Hypertune](https://www.hypertune.com) - 具有类型安全的功能标志、A/B 测试、分析和应用程序配置，具有 Git 样式版本控制和同步、内存本地标志评估。对于最多 5 个团队成员，功能标志和 A/B 测试不受限制，免费使用。
  * [Molasses](https://www.molasses.app) - 强大的功能标志和 A/B 测试。免费计划支持最多 3 个环境，每个环境 5 个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业就绪、可扩展的多区域功能切换管理平台。免费计划包括最多 10 个标志、两个环境和无限请求。SDK、分析仪表板、发布日历、Slack 通知和所有其他功能都包含在免费计划中。
  * [Statsig](https://www.statsig.com) - 一个功能齐全的功能管理、A/B 测试和分析平台。它的免费计划非常慷慨，提供无限席位、标志、实验和动态配置，支持每月最多 100 万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志和 A/B 测试。代码配置和完全分类型脚本 SDK。与 Next.js 和 React 等框架的强大集成。慷慨的免费层和便宜的扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站上呈现的字体是其作者的财产，可以是免费软件、共享软件、演示版本或公有领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具; @font-face、Units Converter、Font Hinter 和 Font Submitter。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 免费软件字体，可用于商业作品。手动选择这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到 Google 的 CDN 快速便捷地安装在网站上。
  * [FontGet](https://www.fontget.com/) - 提供各种字体供下载，并使用标签进行整齐分类。
  * [Fontshare](https://www.fontshare.com/) - 这是一个免费字体服务。它是一个专业级字体的不断扩大的集合，100% 免费用于个人和商业使用。
  * [Befonts](https://befonts.com/) - 提供多个独字体，供个人或商业使用。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体以及如何使用它们。
  * [Bunny](https://fonts.bunny.net) 注重隐私的 Google Fonts
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体，供个人使用，并可以输入文本进行快速过滤。
  * [fonts.xz.style](https://fonts.xz.style/) - 一个免费的开源服务，用于通过 CSS 将字体系列交付给网站。
  * [Fontsensei](https://fontsensei.com/) - 开源的 Google Fonts，由用户添加标签。包含 CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表格

  * [Feathery](https://feathery.io) - 功能强大、开发人员友好的表单构建器。您可以构建注册和登录、用户入职、支付流程、复杂的金融应用程序等表单。免费计划允许每月最多 250 次提交和五个活动的表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。垃圾邮件过滤器、电子邮件通知和自动回复、Webhooks、Zapier、重定向、AJAX 或 POST 等。免费计划提供无限数量的表单、每月 20 次提交，以及带有 Form-Data 徽章的其他 2000 次提交。
  * [FabForm](https://fabform.io/) - 针对智能开发人员的表单后端平台。免费计划允许每月 250 次表单提交。友好的现代 GUI。与 Google Sheets、Airtable、Slack、Email 等集成。
  * [Form.taxi](https://form.taxi/) — HTML 表单提交的端点。带有通知、垃圾邮件过滤器和符合 GDPR 数据处理功能。提供用于基本使用的免费计划。
  * [Formcarry.com](https://formcarry.com) - HTTP POST 表单端点，免费计划允许每月 100 次提交。
  * [formingo.co](https://www.formingo.co/)- 静态网站的简单 HTML 表单。您可以在不注册帐户的情况下免费开始使用。免费计划允许每月 500 次提交和可自定义的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 提供无限数量的表单，每月 50 次提交，垃圾邮件保护，电子邮件通知，以及可以导出 HTML 的拖放式设计器。其他功能包括自定义字段规则、团队以及与 Google Sheets、Slack、ActiveCampaign 和 Zapier 的集成。
  * [formlets.com](https://formlets.com/) — 每月提供无限数量的单页表单和 100 次提交，以及电子邮件通知。
  * [formspark.io](https://formspark.io/) -  表单到电子邮件服务，免费计划允许无限数量的表单，每月 250 次提交，由客户支持团队提供支持。
  * [Formspree.io](https://formspree.io/) — 使用 HTTP POST 请求发送电子邮件。免费版限制每个表单每月 50 次提交。
  * [Formsubmit.co](https://formsubmit.co/) — 您 HTML 表单的简单表单端点。永久免费，无需注册。
  * [Formlick.com](https://formlick.Multiplier) - 带有终身交易的 Typeform 替代品。用户可以创建 1 个免费表单并接收无限数量的提交。在高级版中，用户可以创建无限数量的表单和无限数量的提交。
  * [getform.io](https://getform.io/) - 针对设计师和开发人员的表单后端平台，1 个表单，50 次提交，单个文件上传，100MB 文件存储。
  * [HeroTofu.com](https://herotofu.com/) - 带有机器人检测和加密归档的表单后端。通过 UI 将提交转发到电子邮件、Slack 或 Zapier。使用您自己的前端。无需服务器代码。免费计划提供无限数量的表单和每月 100 次提交。
  * [HeyForm.net](https://heyform.net/) - 拖放式在线表单生成器。免费版允许您创建无限数量的表单并收集无限数量的提交。带有预设模板、防垃圾邮件和 100MB 文件存储。
  * [Tally.so](https://tally.so/) - 所有功能的 99% 都是免费的。免费版允许您拥有：无限数量的表单、无限数量的提交、电子邮件通知、表单逻辑、收集付款、文件上传、自定义感谢页面等。
  * [Hyperforms.app](https://hyperforms.app/) — 几秒钟内即可创建表单到电子邮件等功能，而无需后端代码。个人帐户免费提供每月最多 50 次表单提交。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点。适用于静态网站。免费计划包括最多 1 个网站和每月最多 50 次提交。
  * [Pageclip](https://pageclip.co/) - 免费计划允许一个网站、一个表单和每月 1,000 次提交。
  * [Qualtrics Survey](https://qualtrics.com/free-account) — 使用一流的工具创建专业的表单和调查。50 多个专家设计的调查模板。免费帐户的限制为：1 个活动调查、每项调查 100 个响应和 8 种响应类型。
  * [Screeb](https://screeb.app/) - 用于解码用户行为的应用内调查和产品分析。免费计划允许 500 个每月活跃用户、无限响应和事件、许多集成、导出和定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 功能强大且易于使用的网站表单后端，永久免费计划允许每月 50 次提交，250MB 文件存储，Zapier 集成，CSV/JSON 导出，自定义重定向，自定义响应页面，Telegram 和 Slack 机器人，单个电子邮件通知。
  * [Survicate](https://survicate.com/) — 使用一个工具从所有来源获取反馈并发送后续调查。使用 AI 自动分析反馈并提取见解。免费提供电子邮件、网站、产品内或移动调查、AI 调查创建器和每月 25 次响应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 免费轻松集成 HTML 表单，无需任何服务器端代码。用户提交表单后，将向您的注册地址发送包含表单内容的电子邮件。
  * [stepFORM.io](https://stepform.io) - 测验和表单生成器。免费计划提供五个表单，每个表单最多 3 个步骤，以及每月 50 次响应。
  * [Typeform.com](https://www.typeform.com/) — 在网站上包含设计精美的表单。免费计划允许每个表单最多 10 个字段和 100 个每月响应。
  * [WaiverStevie.com](https://waiverstevie.com) - 带有 REST API 的电子签名平台。您可以使用 Webhooks 接收通知。免费计划对已签署的文档进行水印，但允许无限数量的信封和签名。
  * [Web3Forms](https://web3forms.com) - 静态和 JAMStack 网站的联系表单，无需编写后端代码。免费计划允许无限数量的表单、无限数量的域名和每月 250 次提交。
  * [WebAsk](https://webask.io) - 调查和表单生成器。免费计划每个帐户有三个调查，每月 100 次响应和每个调查 10 个元素。
  * [Wufoo](https://www.wufoo.com/) - 可以在网站上使用的快速表单。免费计划限制每月 100 次提交。
  * [formpost.app](https://formpost.app) - 免费、无限的表单到电子邮件服务。免费设置自定义重定向、自动回复、Webhooks 等。
  * [Formester.com](https://formester.com) - 在您的网站上共享和嵌入外观独特的表单，不受计划限制的表单创建数量或功能。每月免费获取最多 100 次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在您的网站上嵌入 PDF 编辑器，并将任何 PDF 转换为可填写的表单。免费计划允许无限数量的 PDF 和每个 PDF 三次提交。
  * [forms.app](https://forms.app/) — 使用条件逻辑、自动评分计算器和 AI 等强大功能创建在线表单。使用免费计划收集多达 100 个响应，在网站上嵌入您的表单，或使用链接。
  * [Qualli](https://usequalli.com) - 适用于移动设备的应用内调查。使用 Qualli AI 制定完美的问题。您可以在免费计划上试用，最多 500 个 MAU，创建无限数量的表单和触发器。
  * [Sprig](https://sprig.com/) - 每月 1 个产品内调查或带有 GPT 支持的 AI 分析调查。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集 25 条反馈提交。易于与提供的 React 和 Vue 组件集成。

**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [Keywords AI](https://keywordsai.co) - 最好的 LLM 监控平台。使用两行代码即可调用 200 多个 LLM。每月 10,000 次免费请求，平台功能免费！
* [Portkey](https://portkey.ai/) - Gen AI 应用程序的控制面板，具有可观察性套件和 AI 网关。每月可免费发送和记录多达 10,000 次请求。
* [Braintrust](https://www.braintrustdata.com/) - Gen AI 的评估、提示游乐场和数据管理。免费计划每周最多提供 1,000 行私人评估。
* [Findr](https://www.usefindr.com/) - 统一搜索所有应用程序。搜索助手可让您使用自己的信息回答问题。免费计划提供无限统一搜索和 5 个副驾驶每日查询。
* [ReportGPT](https://report-gpt.io) - AI 写作助手。如果您自己带 API 密钥，则整个平台都是免费的。
* [Clair](https://askclair.ai/) - 临床 AI 参考。学生可以免费使用专业工具套件，其中包括 Open Search、Clinical Summary、Med Review、Drug Interactions、ICD-10 Codes 和 Stewardship。此外，还提供专业套件的免费试用。
* [Langtrace](https://langtrace.ai) - 使开发人员能够跟踪、评估、管理提示和数据集，并调试与 LLM 应用程序性能相关的问题。它为任何 LLM 创建开放遥测标准跟踪，有助于可观察性，并与任何可观察性客户端配合使用。免费计划每月提供 50,000 次跟踪。
* [Ultra AI](https://ultraai.app) - 产品的 AI 指挥中心。功能包括多提供商 AI 网关、提示管理器、缓存、日志、分析、模型回退和用户速率限制。免费永久计划每月提供 10,000 次以上的请求和所有功能（缓存除外）。
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和交付 LLM 应用程序。
* [Langfuse](https://langfuse.com/) - 开源 LLM 工程平台，帮助团队协作调试、分析和迭代他们的 LLM 应用程序。免费永久计划包括每月 50,000 次观察和所有平台功能。 [#opensource](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成 AI，提供免费 API。无需注册或 API 密钥，并提供多种选项将 AI 集成到网站或工作流程中。 [#opensource](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种基于 AI 的快速、简单、安全的替代品，替代流行的商业智能解决方案，例如 Tableau、Power BI 和 Looker。Othor 使用大型语言模型 (LLM) 在几分钟内提供定制的商业智能解决方案。免费永久计划为一名用户提供一个工作区与五个数据源连接，且分析没有限制。 [#opensource](https://github.com/othorai/othor.ai)

**[⬆️ 返回顶部](#目录)**

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供 Bootstrap、Bootswatch 和 Fontawesome.io 的 CDN
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。这是最出色的内容交付网络。cdnjs 是一个免费的开源 CDN 服务，由 Cloudflare 提供支持，得到了超过 11% 的网站信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是一个流行的开源 JavaScript 库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate 是一个为 GraphQL API 提供服务的快速、可靠的 CDN，并可免费为两个服务提供支持
* [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速且可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等
* [Microsoft Ajax](https://docs.microsoft.Multiplier/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管了流行的第三方 JavaScript 库，如 jQuery，并允许您轻松地将它们添加到 Web 应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的 DDoS 保护和 SSL 证书
* [Skypack](https://www.skypack.dev/) — 100% 本机 ES 模块 JavaScript CDN。每月每个域免费 100 万次请求
* [raw.githack.com](https://raw.githack.com/) — 一个现代的 **rawgit.com** 替代品，它使用 Cloudflare 简单地托管文件
* [section.io](https://www.section.io/) — 一种简单的方法来启动和管理完整的 Varnish Cache 解决方案。据称对一个站点永久免费
* [statically.io](https://statically.io/) — 一个用于 Git 仓库 (GitHub、GitLab、Bitbucket)、WordPress 相关资产和图像的 CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不失败的 CD。免费用于个人使用，一个开发人员，无支持
* [UNPKG](https://unpkg.com/) — npm 上的所有内容的 CDN
* [weserv](https://images.weserv.nl/) — 一个图像缓存和调整大小服务。实时操作图像，并提供全局缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费的 DDoS 保护
* [Gcore](https://gcorelabs.com/) 全球内容交付网络，每月 1 TB 和 100 万次请求免费，并提供免费的 DNS 托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月 5 TB 的免费 CDN 流量、19 个核心 PoPs、1 个域和通用 SSL。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 仅使用 Python 进行 Web 应用开发。免费版包含无限数量的应用和 30 秒超时。
  * [appwrite](https://appwrite.io) - 无限数量的项目，不暂停项目（支持 Websocket）和身份验证服务。免费版包含每个项目 1 个数据库、3 个存储桶和 5 个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限，但无资源限制
  * [codenameone.com](https://www.codenameone.com/) — 开源、跨平台、面向 Java/Kotlin 开发者的移动应用开发工具链。免费用于商业用途，支持无限数量的项目
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘本地前端平台，具有基于 TypeScript 代码的视觉 CMS。内置 A/B 测试、内容分段和实时分析。非常适合内容丰富的企业电子商务网站。对于开源/个人项目或每月 5000 次页面浏览量免费
  * [Deno Deploy](https://deno.com/deploy) - 一个在全球范围内运行 JavaScript、TypeScript 和 WebAssembly 的分布式系统。免费版包含每天 10 万个请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – 一个提供 CI/CD、GitHub、SSH 和 MariaDB/Postgres 数据库的 Linux 托管服务。免费版拥有 1 GB 存储空间和 1 GB/月的网络限制，并限于免费域名。
  * [encore.dev](https://encore.dev/) — 一个使用静态分析提供自动基础设施、无样板代码等的后端框架。包括为爱好者项目提供的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在您自己的 AWS 账户中部署 Web 服务、数据库等，并使用 Git push 风格的工作流程。免费版包含 1 个开发人员和个人 GitHub 仓库。AWS 费用通过 AWS 账户支付，但您可以使用 AWS 积分和免费套餐。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供一个永不休眠的免费实例和一个受限的免费 PostgreSQL 数据库（限于 2 个连接、10,000 行，且不提供备份）。
  * [Glitch](https://glitch.com/) — 免费的公共托管服务，具有代码共享和实时协作功能。免费套餐包含每月 1000 小时的限制。
  * [Lade](https://www.lade.io/) - Lade 是一个为开发者打造的云平台。免费版包含三个服务，可以是应用程序或数据库。每个服务包含 128 MB 内存和 1 GB 存储空间。
  * [pipedream.com](https://pipedream.com) - 一个为开发者打造的集成平台。基于任何触发器开发任何工作流。工作流是您可以[免费](https://docs.pipedream.com/pricing/)运行的代码，无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — 云 Python 应用托管。初学者账户免费，包含 1 个 Python Web 应用程序（位于 your-username.pythonanywhere.com 域名）、512 MB 私有文件存储和 1 个 MySQL 数据库
  * [ampt.dev](https://getampt.com/) - Ampt 让团队能够在 AWS 上构建、部署和扩展 JavaScript 应用程序，而无需复杂的配置或管理基础设施。免费预览计划包括每小时 500 次调用、每天 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中提供。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是一个友好的无服务器平台，可用于在全球部署应用程序。无缝运行 Docker 容器、Web 应用程序和 API，并提供基于 Git 的部署、本机自动扩展、全球边缘网络以及内置服务网格和发现。免费实例允许您在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管的 Postgres 数据库可用于法兰克福（德国）、华盛顿特区（美国）和新加坡。512MB 内存、2GB 存储和 0.1 CPU。开始使用时无需信用卡。
  * [Napkin](https://www.napkin.io/) - FaaS 提供 500Mb 内存、15 秒的默认超时时间，以及每月 5,000 次免费 API 调用，每秒限额 5 次。
  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy 托管。Meteor 的 Meteor 应用程序平台即服务包括免费的 MongoDB 共享托管和自动 SSL。
  * [Northflank](https://northflank.com) — 通过强大的 UI、API 和 CLI 构建和部署微服务、作业和托管数据库。免费套餐包含两个服务、两个 cron 作业和 1 个数据库。
  * [YepCode](https://yepcode.io) - 一个全合一的平台，用于在无服务器环境中连接 API 和服务。它带来了无代码工具的所有灵活性，以及使用编程语言的所有功能。免费套餐包含 [1.000 yeps](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，可让您快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费计划](https://wundergraph.com/pricing)包含 3 个项目、1GB 出站流量和每月 300 分钟的构建时间。
  * [Zeabur](https://zeabur.com) - 单击部署您的服务。免费用于三个服务，每月提供 5 美元的免费积分。
  * [mogenius](https://mogenius.com) - 轻松构建、部署和运行 Kubernetes 上的服务。免费套餐支持将本地 Kubernetes 与 mogenius 连接，使个人开发者能够在机器上创建类似于生产环境的测试环境。
  * [genezio](https://genezio.com/) - 一个无服务器函数提供商，为非商业或学术使用每月免费提供 100 万次函数调用、100GB 带宽和 10 个 cron 作业。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用程序与应用程序的后端连接起来。 例如，当应用程序中触发事件时，在 Slack 中发送消息或在 Google 工作表中添加行。每月最多可免费执行 5,000 项任务。
  * [back4app.com](https://www.back4app.com) - Back4App 是一个基于 Parse Platform 构建的后端，易于使用、灵活且可扩展。
  * [backendless.com](https://backendless.com/) — 移动和 Web Baas，提供 1 GB 免费文件存储、每月 50,000 次推送通知以及表格中的 1000 个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的 AI 将通过函数运行时和托管存储来提升您的 Python API，在我们的在线编辑器中免费构建和托管，或使用您喜欢的工具本地构建和托管。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC 开发人员计划提供文档和资源，以构建和部署企业的数字创新。访问一个全面的个人沙箱，其中包含平台、SDK 和构建和定制应用程序时可以使用的一组组件。
  * [connectycube.com](https://connectycube.com) - 无限的聊天消息、点对点语音和视频通话、文件附件和推送通知。对于最多 1000 个用户的应用程序免费。
  * [convex.dev](https://convex.dev/) - 反应式后端即服务，托管您的数据（具有关系和可序列化 ACID 事务的文档）、无服务器函数和 WebSocket，以将更新流式传输到各种客户端。对于小型项目免费 - 最多 100 万条记录，每月 500 万次函数调用。
  * [darklang.com](https://darklang.com/) - 集成了编辑器和基础设施的托管语言。在测试版期间可访问，测试版之后计划提供慷慨的免费版。
  * [Firebase](https://firebase.com) — Firebase 帮助您构建和运行成功的应用程序。免费的 Spark 计划提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B 测试、分析、应用程序分发、应用程序索引、云消息传递 (FCM)、Crashlytics、动态链接、应用程序内消息传递、性能监控、预测和远程配置始终免费。
  * [Flutter Flow](https://flutterflow.io) — 构建 Flutter App UI，而无需编写任何代码。还具有 Firebase 集成。免费计划包括 UI 构建器和免费模板的完整访问权限。
  * [getstream.io](https://getstream.io/) — 在几小时而不是几周内构建可扩展的应用内聊天、消息传递、视频和音频以及提要
  * [hasura.io](https://hasura.io/) — Hasura 扩展了您现有的数据库，无论其托管在何处，并提供安全的 GraphQL API，可用于 Web、移动和数据集成工作负载。每月 1GB 数据传输免费。
  * [iron.io](https://www.iron.io/) — 异步任务处理（例如 AWS Lambda），提供免费版和 1 个月的免费试用
  * [nhost.io](https://nhost.io) - 适用于 Web 和移动应用程序的无服务器后端。免费计划包括 PostgreSQL、GraphQL (Hasura)、身份验证、存储和无服务器函数。
  * [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月 10,000 封电子邮件发送，无限联系人和访问自动预热。
  * [paraio.com](https://paraio.com) — 具有灵活身份验证、全文搜索和缓存的后端服务 API。对于一个应用程序，1GB 的应用程序数据免费。
  * [progress.com](https://www.progress.com/kinvey) — 移动后端，入门计划具有无限每秒请求，1GB 数据存储。企业应用程序支持
  * [pubnub.com](https://www.pubnub.com/) — 每月最多 100 万条消息/100 台活动设备免费推送通知
  * [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多 150 万次推送免费
  * [pushcrew.com](https://pushcrew.com/) — 推送通知服务。对于最多 2,000 个订阅者，无限通知
  * [pusher.com](https://pusher.com/beams) — 每月 2000 名活跃用户免费、无限推送通知。适用于 iOS 和 Android 设备的单个 API。
  * [quickblox.com](https://quickblox.com/) — 即时通讯、视频和语音通话以及推送通知的通信后端
  * [restspace.io](https://restspace.io/) - 配置具有身份验证、数据、文件、电子邮件 API、模板等服务的服务器，然后将其组合到管道中并转换数据。
  * [Salesforce Developer Program](https://developer.salesforce.com/signup) — 使用拖放工具快速构建应用程序。使用单击自定义数据模型。使用 Apex 代码更进一步。使用功能强大的 API 与任何内容集成。使用企业级安全性进行保护。使用单击或任何领先的 Web 框架自定义 UI。免费的开发人员计划提供对完整 Lightning Platform 的访问权限。
  * [ServiceNow Developer Program](https://developer.servicenow.com/) — 快速构建、测试和部署应用程序，使您的组织的工作更加高效。免费实例和访问预览版。
  * [simperium.com](https://simperium.com/) — 即时自动跨平台移动数据，无限发送和存储结构化数据，每月最多 2,500 个用户
  * [Singlebase.cloud](https://singlebase.cloud) — SinglebaseCloud 是一个人工智能驱动的全合一后端平台，旨在加速应用程序开发。它提供向量数据库、关系文档数据库、身份验证、搜索和存储等工具，旨在简化后端开发。免费/入门计划提供关系文档数据库、身份验证、搜索和存储。
  * [stackstorm.com](https://stackstorm.com/) — 应用程序、服务和工作流的基于事件的自动化，免费版不提供流程、访问控制和 LDAP
  * [streamdata.io](https://streamdata.io/) — 将任何 REST API 转换为基于事件的流式 API。免费计划包括最多 100 万条消息和 10 个并发连接。
  * [Supabase](https://supabase.com) — 构建后端的 Firebase 开源替代方案。免费计划提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) — 带有身份验证、配额、监控和分析的 API 管理。免费云产品
  * [zapier.com](https://zapier.com/) — 连接您使用的应用程序来自动执行任务。每 15 分钟 5 个 Zap，每月 100 个任务
  * [IFTTT](https://ifttt.com) — 自动执行您最喜欢的应用程序和设备。免费 2 个 Applets
  * [Integrately](https://integrately.com) — 单击即可自动执行繁琐的任务。免费 100 个任务、15 分钟更新时间、5 个活动自动化和 Webhook。
  * [LeanCloud](https://leancloud.app/) — 移动后端。1GB 数据存储、256MB 实例、3K 每日 API 请求和 10K 每日推送免费。 （API 与 Parse Platform 非常相似）

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个低代码平台，用于构建具有可定制移动和 Web 应用程序的业务流程应用程序。 提供拖放界面、离线支持等功能，以及与各种第三方服务的集成。
* [Basedash](https://www.basedash.com) — 用于构建内部管理面板和仪表板的低代码平台。 支持 SQL 数据库和 REST API。
* [BudiBase](https://budibase.com/) — Budibase 是一个开源低代码平台，用于在几分钟内创建内部应用程序。 支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
* [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。 集成了 15 多个数据库和任何 API。
* [ToolJet](https://www.tooljet.com/) — 一个可扩展的低代码框架，用于构建业务应用程序。 连接到数据库、云存储、GraphQL、API 端点、Airtable 等，并使用拖放应用程序生成器构建应用程序。
* [ReTool](https://retool.com/) — 用于构建内部应用程序的低代码平台。 Retool 非常适合黑客攻击。 如果您可以使用 JavaScript 和 API 编写，那么您可以在 Retool 中实现。 免费版允许每月最多 5 个用户、无限个应用程序和 API 连接。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ 是一个低代码平台，帮助工程团队和产品经理 10 倍速地构建内部工具、定制用户旅程、数字体验、自动化、自定义管理面板和运营应用程序。
* [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud 是一款强大的开源低代码平台，可帮助开发人员构建内部工具。 通过使用 ILLA 的组件和操作库，开发人员可以在构建工具时节省大量时间。 对于 5 名团队成员免费。
* [outsystems.com](https://www.outsystems.com/) — 适用于本地或云的企业 Web 开发 PaaS，免费的“个人环境”产品可提供无限代码和高达 1 GB 的数据库。
* [UI Bakery](https://uibakery.io) — 一个低代码平台，可加速构建自定义 Web 应用程序。 支持通过拖放和通过 JavaScript、Python 和 SQL 进行高度定制来构建 UI。 提供云解决方案和自托管解决方案。 对于最多 5 个用户免费。
* [Mendix](https://www.mendix.com/) — 企业的快速应用程序开发，无限可访问的沙盒环境，支持总用户数、每个应用程序 0.5 GB 存储空间和 1 GB RAM。 此外，免费版还包括 Studio 和 Studio Pro IDE。
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用免费的内置 API，例如 OpenAI、Anthropic、Firecrawl 等。非常适合构建 AI 代理/内部工具并与团队共享。 免费版包括对 API、AI 编码助手和每月 10,000 个执行积分的完全访问。

**[⬆️ 返回顶部](#目录)**

## 网络托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 免费提供 100 MB 的网络托管服务，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义 Web 服务器、通过 FTP、WebDAV 和 SSH 访问；包括邮箱、邮件列表和应用程序安装程序。
  * [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名、PHP、MySQL、应用程序安装程序、电子邮件发送和无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费 + 开发人员优先的部署和开发平台，最大限度地减少基础架构麻烦并加快设置速度。
  * [Bubble](https://bubble.io/) — 通过可视化编程在无需编码的情况下构建 Web 和移动应用程序，免费提供 Bubble 品牌。
  * [dAppling Network](https://www.dappling.network/) - 去中心化的 Web 托管平台，适用于 Web3 前端，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在 App Platform Starter 层免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到 Web。仅静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一种用于本地托管站点并将其公开共享（实时）的开发人员桌面应用程序。您可以根据自己的喜好，使用其漂亮的用户界面、API 和/或 CLI 进行操作。
  * [Fern](https://buildwithfern.com) - 在 Fern 的免费计划中构建并托管基于 Markdown 的文档站点。您甚至可以从 API 定义文件为您的站点自动生成 API 参考。该站点托管在 _yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 电子邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计信息、免费在线支持等其他功能，而其他免费托管服务不提供这些功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费的托管服务，包括业内最佳控制面板和 50 多个应用程序的一键式安装。即时设置。没有强制广告。
  * [HelioHost](https://heliohost.org) — 非营利性免费网络托管服务，提供 Plesk 控制面板、PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP 电子邮件、无限带宽、免费子域名、1000 MB 免费存储空间，并可选择升级。
  * [Kinsta 静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署多达 100 个静态站点，自定义域名带有 SSL、100 GB 月带宽、260 多个 Cloudflare CDN 站点。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 提供 SFPT 访问以上传和下载文件的 Web 托管服务，支持 PHP。
  * [Neocities](https://neocities.org) — 静态，1 GB 免费存储空间，200 GB 带宽。
  * [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态网站/应用程序，提供 100 GB 数据和 100 GB/月带宽。
  * [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管、自动 DevOps 和可扩展的基础架构。对于开发人员和代理免费。没有自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费的文档托管服务，提供版本控制、PDF 生成等功能
  * [render.com](https://render.com) — 统一的云服务，用于构建和运行应用程序和站点，提供免费的 SSL、全球 CDN、私有网络、从 Git 的自动部署以及完全免费的计划，包括 Web 服务、数据库和静态网页。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件
  * [surge.sh](https://surge.sh/) — 针对前端开发人员的静态 Web 发布。支持自定义域名的无限站点
  * [telegra.ph](https://telegra.ph/) 轻松使用 Quill 创建网页
  * [tilda.cc](https://tilda.cc/) — 一个站点、50 个页面、50 MB 存储空间、170 多个可用主预定义块、无字体、无 favicon 和无自定义域名
  * [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用程序，提供免费的 SSL、全球 CDN 和每次 `git push` 时唯一的预览 URL。非常适合 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — SaaS 专注的网站构建器 - 无限制的网站、70 多个块、五个模板、自定义 CSS、favicon、SEO 和表单。没有自定义域名。
  * [Qoddi](https://qoddi.com) - 类似于 Heroku 的 PaaS 服务，具有开发人员优先的方法和全面的功能。静态资产、分阶段和开发人员应用程序的免费层。
  * [FreeFlarum](https://freeflarum.com/) - 社区驱动的免费 Flarum 托管服务，最多支持 250 用户（捐赠以从页脚中删除水印）。
  * [fleek.co](https://fleek.co/) - 免费为无限个网站和 50 GB/月带宽的网站和应用程序构建现代网站和应用程序，并将其无缝集成到开放式 Web 和其协议中。
  * [MDB GO](https://mdbgo.com/) - 免费托管一个项目，两个星期的容器 TTL，每个项目 500 MB RAM，SFTP - 1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 一个易于使用的云平台，在其付费服务中提供免费托管三个静态站点。
  * [Serv00.com](https://serv00.com/) — 免费提供 3 GB 的 Web 托管服务，并提供每日备份（7 天）。支持：Crontab 作业、SSH 访问、存储库 (GIT、SVN 和 Mercurial)、MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等。

**[⬆️ 返回顶部](#目录)**

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare 提供的免费公共 DNS 解析器，速度快、安全性高（加密您的 DNS 查询）。可用于绕过互联网服务提供商的 DNS 阻止、防止 DNS 查询监视，以及 [阻止成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它还可以通过 [API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests) 使用。注意：这只是一个 DNS 解析器，不是 DNS 托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) — 免费的 DNS 服务，具有 API 和许多其他免费的 DNS 功能。
  * [cloudns.net](https://www.cloudns.net/) — 免费的 DNS 托管服务，支持最多 1 个域名和 50 条记录
  * [deSEC](https://desec.io) - 具有 API 支持的免费 DNS 托管服务，以安全为设计理念。基于开源软件，并得到 [SSE](https://www.securesystems.de/) 的支持。
  * [dns.he.net](https://dns.he.net/) — 免费的 DNS 托管服务，支持动态 DNS
  * [Zonomi](https://zonomi.com/) — 免费的 DNS 托管服务，提供即时的 DNS 传播。免费计划：1 个 DNS 区域（域名）和最多 10 条 DNS 记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费的 DNS 托管服务。
  * [duckdns.org](https://www.duckdns.org/) — 免费的 DDNS 服务，免费版支持最多 5 个域名。提供各种配置设置的指南。
  * [Dynv6.com](https://dynv6.com/) — 免费的 DDNS 服务，提供 [API 支持](https://dynv6.com/docs/apis) 和多种 DNS 记录类型的管理（如 CNAME、MX、SPF、SRV、TXT 等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费的 DNS 托管服务。还提供基于众多公共用户 [贡献域名](https://freedns.afraid.org/domain/registry/) 的免费子域名。注册后，在“子域名”菜单中获取免费子域名。
  * [luadns.com](https://www.luadns.com/) — 免费的 DNS 托管服务，支持三个域名和所有功能，但有合理的限制
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费的 DNS 服务，不限制域名数量
  * [nextdns.io](https://nextdns.io) - 基于 DNS 的防火墙，每月免费查询 30 万次
  * [noip.at](https://noip.at/) — 免费的 DDNS 服务，无注册、跟踪、日志记录或广告。不限制域名数量。
  * [noip](https://www.noip.com/) — 一个动态 DNS 服务，确认后免费支持最多 3 个主机名，每 30 天确认一次
  * [sslip.io](https://sslip.io/) — 一个免费的 DNS 服务，当查询嵌入 IP 地址的主机名时，会返回该 IP 地址。
  * [zilore.com](https://zilore.com/en/dns) — 免费的 DNS 托管服务，支持最多 5 个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) — 免费的 DNS 托管服务，支持动态 DNS。
  * [zonewatcher.com](https://zonewatcher.com/) — 自动备份和 DNS 更改监控服务。一个域名免费
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 华为提供的免费 DNS 托管服务
  * [Hetzner](https://www.hetzner.com/dns-console) – Hetzner 提供的免费 DNS 托管服务，支持 API。
  * [Glauca](https://docs.glauca.digital/hexdns/) – 免费的 DNS 托管服务，支持最多 3 个域名和 DNSSEC

## 域名

  * [eu.org](https://nic.eu.org) — 免费的 eu.org 域名。申请通常在 14 天内获批。
  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) — 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容 AWS S3 - API、界面操作、CLI 和其他上传方法，安全、便捷、高效地上传和存储来自 IPFS 和 Arweave 网络的文件。注册用户可免费获得 6 GB IPFS 存储空间和 300 MB Arweave 存储空间。任何小于 150 KB 的 Arweave 文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2 云存储。免费 10 GB（类似 Amazon S3）对象存储，无限期
  * [filebase.com](https://filebase.com/) - 区块链支持的 S3 兼容对象存储。无限期免费 5 GB 存储
  * [Tebi](https://tebi.io/) - S3 兼容性对象存储。免费 25 GB 存储和 250 GB 出站传输
  * [Idrive e2](https://www.idrive.com/e2/) - S3 兼容性对象存储。免费 10 GB 存储空间和每月 10 GB 下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容性对象存储。免费 15 GB 存储空间和每月 15 GB 下载

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Redis 计划。单节点、1 个 CPU、1GB RAM，对于 PostgreSQL 和 MySQL，5GB 存储。易于迁移到更广泛的规划或跨云迁移。
* [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关系数据库，具有无限的基础、每个基础 1,200 行和每月 1,000 次 API 请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 带有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)的 Cloud Native Cassandra 即服务
* [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，具有函数、Mongdb 式查询、键/值查找、作业系统、实时消息、工作者队列、功能强大的 CLI 和基于 Web 的数据管理器。免费计划具有 5GB 存储空间和每分钟 60/API 调用。包括 2 位开发人员。无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的分布式开源 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点，2 个 CPU，2 GiB 内存，8 GiB 存储。每个组织一个集群，无需支付方式。
* [FaunaDB](https://fauna.com/) — 带有本机 GraphQL、多模型访问和每日免费层的无服务器云数据库
* [Upstash](https://upstash.com/) — 无服务器 Redis，每天最多 10,000 次请求，最大数据库大小为 256MB，并发连接数为 20
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
* [redsmin.com](https://www.redsmin.com/) — Redis 的在线实时监控和管理服务。监控 1 个 Redis 实例免费
* [redislabs](https://redislabs.com/try-free/) - 免费 30MB redis 实例
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。对于最多 25MB、1 个代理服务器和基本分析免费
* [scalingo.com](https://scalingo.com/) — 主要是一个 PaaS，但提供 128MB 到 192MB 的 MySQL、PostgreSQL 或 MongoDB 免费层
* [SeaTable](https://seatable.io/) — Seafile 团队构建的灵活、类似电子表格的数据库。无限表格、2,000 行、1 个月版本控制，最多 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，所有计划在测试版中都是完全免费的
* [StackBy](https://stackby.com/) — 将电子表格、数据库和与您最喜欢的业务应用程序集成相结合的单一工具。免费计划包括无限用户、10 个堆栈和每个堆栈 2GB 附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是一个开源的与 MySQL 兼容的分布式 HTAP RDBMS。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5000 万个请求单元 (RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是一款带有 SQLite 开发体验的边缘数据库。Turso 提供免费入门套餐，9 GB 总存储空间，最多 500 个数据库，最多 3 个位置，每月 10 亿行读取，以及 SQLite 本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时间序列数据库，免费使用，每 5 分钟写入 3MB、每 5 分钟读取 30MB 和 10,000 个基数系列
* [restdb.io](https://restdb.io/) - 一个快速而简单的 NoSQL 云数据库服务。restdb.io 提供模式、关系、自动 REST API（带有 MongoDB 风格的查询）和高效的多用户管理 UI 来处理数据。免费计划允许 3 个用户、2,500 条记录和每秒 1 个 API 请求。
* [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 免费 CockroachDB，最高 5GB 和 1vCPU（有限的[请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 受管理的本机图形 DBMS/分析平台，具有 Cypher 查询语言和 REST API。对图形大小（50k 节点、175k 关系）有限制。
* [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 存储（总计），1 个项目，10 个分支，无限个数据库，始终可用的主分支（5 分钟后自动挂起），非主分支计算每月 20 小时活动时间（总计）。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 带有 GraphQL API 的托管本机图形 DBMS。每天限制 1 MB 数据传输。
* [Tinybird](https://tinybird.co) - 一个无服务器的托管 ClickHouse，通过 HTTP 进行无连接数据引入，并允许您将 SQL 查询发布为托管 HTTP API。免费层没有时间限制，10GB 存储 + 每天 1000 次 API 请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 带有 SQL 图形查询语言和 REST API 的托管本机图形 DBMS/分析平台。一个免费实例，具有两个 vCPU、8GB 内存和 50GB 存储，在 1 小时的空闲后进入睡眠状态。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，TerminusDB 是一个用 Prolog 和 Rust 编写的文档和图形数据库。开发免费，企业部署和支持付费服务。
* [YugabyteDB](https://cloud.yugabyte.com) - YugabyteDB 是一个与 PostgreSQL 兼容的分布式 SQL 数据库。云免费层包括两个 vCPU、4GB RAM 和 10GB 磁盘。
* [filess.io](https://filess.io) - 在 filess.io 上，您可以免费创建以下任一数据库：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [xata.io](https://xata.io) - Xata 是一个带有内置强大搜索和分析功能的无服务器数据库。一个 API、多个类型安全的客户端库，并针对开发工作流程进行了优化。免费套餐足以满足业余开发人员的需求，每个套餐包含三个 Xata 单元，请参阅网站了解单元定义。
* [8base.com](https://www.8base.com/) - 8base 是一个针对 JavaScript 开发人员的全栈低代码开发平台，它基于 MySQL 和 GraphQL 构建，并提供无服务器后端即服务。它允许您使用 UI 应用程序生成器快速构建 Web 应用程序，并快速扩展。免费层包括行：2,500、存储：500、无服务器计算：1Gb/h 和客户端应用程序用户：5。
* [Nile](https://www.thenile.dev/) — B2B 应用程序的 Postgres 平台。无限数据库，始终可用，无需关闭，1GB 存储（总计），5000 万个查询令牌，自动扩展，无限向量嵌入

## 隧道、WebRTC、Web套接字服务器和其他路由器

  * [Pinggy](https://pinggy.io) — 通过单个命令为 localhost 提供公共 URL，无需下载。支持 HTTPS / TCP / TLS 隧道。免费计划提供 60 分钟的隧道寿命。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio 扩展，可将 IIS Express 暴露给本地网络或通过隧道暴露给公共 URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi 是一款托管 VPN 服务，可让您安全地将 LAN 网络扩展到分布式团队。免费计划允许无限数量的网络，最多 5 个用户。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的 Socket 即服务平台，在部署 WebSocket 服务器代码时提供 wss:// URL，并允许您监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露给公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露给公共 URL。提供免费托管版本，[开源](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露给公共 URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露给互联网。无需安装，无需注册。免费子域，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过启用 LAN 的 VPN 连接多台计算机。无限数量的对等节点。（Hamachi 的替代方案）
  * [segment.com](https://segment.com/) — 用于翻译和路由事件的中心枢纽，可与其他第三方服务集成。每月 100,000 个事件免费
  * Google STUN — [stun:stun.l.google.com:19302](stun:st.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) — 零配置 VPN，使用开源 WireGuard 协议。支持 MacOS、iOS、Windows、Linux 和 Android 设备。免费计划供个人使用，最多 100 台设备，3 个用户。
  * [webhookrelay.com](https://webhookrelay.com) — 管理、调试、扇出并代理所有 webhook 到公共或内部（例如 localhost）目标。还可以通过获取公共 HTTP 端点将运行在私有网络中的服务器暴露给隧道 (`https://yoursubdomain.webrelay.io <----> http://localhost:8080`)。
  * [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控 webhook。每月 100,000 个请求和 100,000 次尝试，保留 3 天。
  * [Xirsys](https://www.xirsys.com/pricing/) — 无限 STUN 使用 + 每月 500 MB TURN 带宽，带宽上限，单一地理区域。
  * [ZeroTier](https://www.zerotier.com) — FOSS 托管虚拟以太网服务。免费计划提供无限数量的端到端加密网络，最多 25 个客户端。支持桌面/移动/NA 客户端；提供 Web 界面用于配置自定义路由规则并批准私有网络中的新客户端节点
  * [LocalXpose](https://localxpose.io) — 反向代理，使您可以将 localhost 服务器暴露给互联网。免费计划提供 15 分钟的隧道寿命。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布到公共的自定义 URL，并通过访问控制来保护它们。免费提供单个集群中的 5 个服务。
  * [Expose](https://expose.dev/) - 通过安全隧道公开本地站点。免费计划包括欧盟服务器、随机子域和单用户。
  * [btunnel](https://www.btunnel.in/) — 将 localhost 和本地 tcp 服务器暴露给互联网。免费计划包括文件服务器、自定义 HTTP 请求和响应标头、基本身份验证保护和 1 小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 免费项目管理和 SCRUM 软件，支持 5 名团队成员
* [asana.com](https://asana.com/) — 免费的私人项目协作软件
* [Backlog](https://backlog.com) — 一个平台满足团队发布伟大项目的所有需求。免费计划包含 1 个项目、10 位用户和 100MB 存储空间
* [Basecamp](https://basecamp.com/personal) - 待办事项清单、里程碑管理、论坛式消息传递、文件共享和时间跟踪。支持 3 个项目、20 位用户和 1GB 存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内部网络和项目管理工具。免费计划为无限用户提供 5GB 空间
* [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、UML、网络图。免费版最多支持 15 位用户/图表，25 张图表
* [Chpokify](https://chpokify.com/) — 基于团队的 Planning Poker，节省冲刺估算时间。免费版支持 5 位用户、免费 Jira 集成、无限视频通话、无限团队和无限会话
* [clickup.com](https://clickup.com/) — 项目管理。免费版提供付费版和云存储。支持移动应用程序和 Git 集成
* [Clockify](https://clockify.me) - 时间跟踪和时间表应用程序，可跨项目跟踪工作时间。无限用户，永久免费
* [Cloudcraft](https://cloudcraft.co/) — 使用 Cloudcraft 可视化设计器在几分钟内设计专业架构图，适用于 AWS，具有显示实时数据的智能组件。免费计划为单个用户提供无限私人图表
* [Codegiant](https://codegiant.io) — 项目管理与仓库托管和 CI/CD。免费计划提供无限仓库、项目和文档，5 位团队成员，500 CI/CD 每月分钟，30000 Serverless Code Run 每月分钟和 1GB 仓库存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian 的内容协作工具，用于帮助团队高效协作和分享知识。免费计划支持 10 位用户
* [contriber.com](https://www.contriber.com/) — 可定制的项目管理平台，免费入门计划，5 个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持 3 个项目、无限用户和 1GB 存储空间
* [diagrams.net](https://app.diagrams.net/) — 在线图表存储在 Google Drive、OneDrive 或 Dropbox 中。免费版支持所有功能和存储级别
* [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理。免费计划支持无限项目、用户和文件存储
* [easyretro.io](https://www.easyretro.io/) — 简单直观的冲刺回顾工具。免费计划包含 3 个公共看板和每个看板每月 1 次调查
* [GForge](https://gforge.com) — 项目管理和问题跟踪工具，适用于复杂的项目，提供自托管和 SaaS 选项。SaaS 免费计划为前 5 位用户提供免费服务，并向开源项目免费提供
* [gleek.io](https://www.gleek.io) — 免费的描述-图表工具，用于为开发人员创建非正式的 UML 类、对象或实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector 输出两个 GraphQL 模式之间的差异列表。每个差异都有详细的解释，并标记为破坏性、非破坏性或危险
* [huboard.com](https://huboard.com/) — 为您的 GitHub 问题提供即时项目管理，开源免费
* [Hygger](https://hygger.io) — 项目管理平台。免费计划为无限用户、项目和看板提供 100MB 存储空间
* [Instabug](https://instabug.com) — 移动应用综合 bug 报告和应用内反馈 SDK。免费计划支持 1 个应用和 1 位成员
* [WishKit](https://wishkit.io) — 为 iOS/macOS 应用收集应用内用户反馈，并根据用户投票安排功能优先级。免费计划支持 1 个应用
* [Ilograph](https://www.ilograph.com/)  — 交互式图表，允许用户从多个角度和细节层次查看其基础设施。图表可以用代码表示。免费版包含无限量私人图表，最多 3 位查看者
* [Jira](https://www.atlassian.com/software/jira) — 高级软件开发项目管理工具，适用于许多企业环境。免费计划支持 10 位用户
* [kanbanflow.com](https://kanbanflow.com/) — 基于看板的项目管理。免费版提供付费版和更多选项
* [kanbantool.com](https://kanbantool.com/) — 基于 Kanban 看板的项目管理。免费计划包含 2 个看板、2 位用户，不支持附件或文件
* [Kitemaker.co](https://kitemaker.co) - 通过 Slack、Discord、Figma 和 GitHub 协作产品开发过程的所有阶段，并跟踪工作。无限用户，无限空间。免费计划支持 250 个工作项
* [Kiter.app](https://www.kiter.app/) - 让任何人都可以组织他们的求职和跟踪面试、机会和人脉。强大的 Web 应用程序和 Chrome 扩展程序。完全免费
* [Kumu.io](https://kumu.io/)  — 带有动画、装饰、过滤器、聚类和电子表格导入等功能的关系图。免费版允许无限量公共项目。图大小无限制。学生免费获得私人项目。沙盒模式可供选择，如果您不希望将文件公开在线（上传、编辑、下载、丢弃）
* [Linear](https://linear.app/) — 具有简化界面的主题跟踪器。免费版支持无限成员，文件上传大小上限为 10MB，250 个问题（不包括存档）
* [leiga.com](https://www.leiga.com/) — Leiga 是一款 SaaS 产品，它使用 AI 自动管理项目，帮助团队保持专注，释放巨大潜力，确保项目按计划进行。免费版支持 10 位用户、20 个自定义字段、2GB 存储空间、AI 视频录制时间限制为 5 分钟/视频、每个用户每月 20 次自动运行
* [Lucidchart](https://www.lucidchart.com/) - 具有协作功能的在线图表工具。免费计划包含 3 个可编辑文档、100 个专业模板和基本协作功能
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理。免费版支持 3 个项目和无限项目成员
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线 Scrum 工具，带有看板
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，可帮助团队协作、计划、分析和管理日常任务。基本计划永久免费，提供 100MB 存储空间和 5 位用户/团队。无限工作区、会议、任务、时间表和问题跟踪
* [Ora](https://ora.pm/) - 敏捷任务管理和团队协作。免费版支持 3 位用户，文件限制为 10MB
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费版支持无限量公共项目和 2 个私有项目，3 位活跃用户（读写）和无限被动用户（只读）
* [plan.io](https://plan.io/) — 项目管理与仓库托管和更多选项。免费版支持 2 位用户、10 位客户和 500MB 存储空间
* [Plane](https://plane.so/) - Plane 是一个简单、可扩展的开源项目和产品管理工具。免费版支持无限成员，文件上传大小上限为 5MB，1000 个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线规划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线规划扑克（基于共识的估算工具）。免费版支持无限用户、团队、会话、回合和投票。无需注册
* [ScrumFast](https://www.scrumfast.com) - 直观的界面 Scrum 看板，免费版支持 5 位用户

  * [Shortcut](https://shortcut.com/) - 项目管理平台。对于最多 10 位用户永远免费。
* [Tadum](https://tadum.app) - 会议议程和纪要应用程序，专为定期会议设计，支持 10 人团队免费使用。
* [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发者的项目管理平台，开源免费。
* [Tara AI](https://tara.ai/) — 简单的冲刺管理服务。免费计划包含无限任务、冲刺和工作区，且没有用户限制。
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从 Kanban 和 Scrum 到几乎任何运营流程。对于无限用户，最多 1,000 个数据实体免费 {[更多详情](https://www.targetprocess.com/pricing/)}。
* [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划包含一个工作区，无限任务和项目；1GB 文件存储；1 周项目历史记录；以及每视频会议最多 5 位参与者。
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。5 位用户以内免费。可与 GitHub/Trello/Dropbox/Google Drive 集成。
* [Teaminal](https://www.teaminal.com) - 远程团队的站会、回顾和冲刺规划工具。15 位用户以内免费。
* [teamwork.com](https://teamwork.com/) — 项目管理和团队聊天。5 位用户和 2 个项目免费。还提供高级计划。
* [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，带有破冰、gif 和表情符号。免费计划包含 3 次回顾和无限成员。
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和测试平台。个人免费使用。
* [terrastruct.com](https://terrastruct.com/) — 专门用于软件架构的在线图表制作工具。每个图表最多 4 层免费。
* [todoist.com](https://todoist.com/) — 协作和个人任务管理。免费计划包含：5 个活动项目、每个项目 5 位用户、5MB 文件上传、3 个过滤器，以及 1 周的活动历史记录。
* [trello.com](https://trello.com/) — 基于看板的项目管理。无限个人看板，10 个团队看板。
* [Tweek](https://tweek.so/) — 简单的每周待办事项日历和任务管理。
* [ubertesters.com](https://ubertesters.com/) — 测试平台、集成和众包测试人员，2 个项目，5 位成员。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务，具有项目、版本控制和问题跟踪功能。免费计划提供无限项目和协作者，以及 3GB 存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发和问题跟踪。3 位用户以内免费，无限项目。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 针对开源软件 (FOSS) 项目和私人项目的免费托管 YouTrack (InCloud)，包含时间跟踪和敏捷看板，适用于 3 位用户以内。
* [zenhub.com](https://www.zenhub.com) — GitHub 内部的唯一项目管理解决方案。针对公共存储库、开源软件 (OSS) 和非营利组织免费。
* [zenkit.com](https://zenkit.com) — 项目管理和协作工具。5 位成员以内免费，附件 5 GB。
* [Zube](https://zube.io) — 项目管理，适用于 4 个项目和 4 位用户的免费计划。可与 GitHub 集成。
* [Toggl](https://toggl.com/) — 提供两个免费的生产力工具。[Toggl Track](https://toggl.com/track/) 是一款时间管理和跟踪应用程序，其免费计划为自由职业者提供无缝的时间跟踪和报告。它具有无限的跟踪记录、项目、客户、标签和报告等。[Toggl Plan](https://toggl.com/plan/) 是一款任务规划应用程序，其免费计划面向独立开发人员，具有无限的任务、里程碑和时间线。
* [Sflow](https://sflow.io) — sflow.io 是一个项目管理工具，专为敏捷软件开发、营销、销售和客户支持项目而构建，特别适合外包和跨组织协作项目。免费计划最多可包含 3 个项目和 5 位成员。
* [Pulse.red](https://pulse.red) — 免费的极简项目时间跟踪和工时记录应用程序。

**[⬆️ 返回顶部](#目录)**

## 存储和媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 一个免费的文件分享平台，具有无限的速度、带宽、文件数量、下载数量等。它主要面向 APK 构建、自定义 ROM 和修改等与 Android 开发相关的文件。但似乎也接受其他类型的文件。
* [borgbase.com](https://www.borgbase.com/) — 一个简单且安全的 Borg 备份离线备份托管服务。提供 10 GB 的免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 一个简单的云存储服务。提供 10 GB 的免费存储空间。
* [sync.com](https://www.sync.com/) - 一个端到端的云存储服务。提供 5 GB 的免费存储空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。提供高达 10 GB 的免费存储空间。
* [sirv.com](https://sirv.com/) — 一个智能的图像 CDN，提供实时的图像优化和调整大小服务。免费版包括 500 MB 的存储空间和 2 GB 的带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 一个完整的图像优化和 CDN 服务，在全球拥有 1500 多个节点。提供各种图像调整大小、压缩和水印功能。提供免费的开源插件，用于响应式图像、360 度图像制作和图像编辑。免费的月度计划包括 25GB 的 CDN 流量、25GB 的缓存存储和无限的转换。
* [cloudinary.com](https://cloudinary.com/) — 提供图像上传、强大的图像处理、存储和交付服务，支持 Ruby、Python、Java、PHP、Objective-C 等多种库。免费版包括 25 个每月积分。一个积分等于 1,000 次图像转换、1 GB 存储或 1 GB CDN 使用量。
* [embed.ly](https://embed.ly/) — 提供嵌入网页、响应式图像缩放和从网页提取元素的 API。每月免费处理 5,000 个 URL，每秒 15 个请求。
* [filestack.com](https://www.filestack.com/) — 文件选择、转换和交付服务，免费提供 250 个文件、500 次转换和 3 GB 带宽。
* [file.io](https://www.file.io) - 提供 2 GB 的文件存储空间。文件在下载一次后将自动删除。提供用于与存储交互的 REST API。速率限制为每分钟一个请求。
* [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图像、音频、视频等。
* [GoFile.io](https://gofile.io/) - 一个免费的文件分享和存储平台，可以通过 Web 界面和 API 使用。没有文件大小、带宽、下载次数等限制。但是，如果一个文件长时间没有下载（超过 10 天），它将被删除。
* [gumlet.com](https://www.gumlet.com/) — 图像和视频托管、处理和通过 CDN 流媒体服务。提供慷慨的免费版，每月 250 GB 视频和 30 GB 图像。
* [image-charts.com](https://www.image-charts.com/) — 带有水印的无限图像图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — Imgbot 是一个友好的机器人，可以优化您的图像并节省时间。优化后的图像意味着在不牺牲质量的情况下减小文件大小。它对开源项目免费。
* [ImgBB](https://imgbb.com/) — ImgBB 是一个无限的图像托管服务。拖放图像到屏幕上的任何位置。每个图像 32 MB 限制。上传图像后，您将收到直接图像链接、BBCode 和 HTML 缩略图。登录后可以查看上传历史记录。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限的社交封面图像生成 API，无水印。
* [imgix](https://www.imgix.com/) - 图像缓存、管理和 CDN 服务。免费计划包括 1000 张原始图像、无限转换和 100 GB 带宽。
* [kraken.io](https://kraken.io/) — 提供针对网站性能的图像优化服务，免费计划支持 1 MB 以下文件大小。
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费版允许 100 个键，每个键 1KB，每小时 100 次调用。
* [npoint.io](https://www.npoint.io/) — 具有协作模式编辑的 JSON 存储。
* [nitropack.io](https://nitropack.io/) - 自动优化网站速度，包括缓存、图像和代码优化、CDN 等。每月免费 5,000 次页面浏览。
* [otixo.com](https://www.otixo.com/) — 从一个地方加密、共享、复制和移动所有云存储文件。基本计划提供无限文件传输，单个文件大小最高 250 MB，并允许加密 5 个文件。
* [packagecloud.io](https://packagecloud.io/) — 托管的软件包仓库，支持 YUM、APT、RubyGem 和 PyPI。提供有限的免费计划和开源计划，可以通过申请获得。
* [getpantry.cloud](https://getpantry.cloud/) — 一个简单的 JSON 数据存储 API，非常适合个人项目、黑客马拉松和移动应用程序！
* [Pinata IPFS](https://pinata.cloud) — Pinata 是将文件上传到 IPFS 的最简单方法。友好的用户界面和 IPFS API 使 Pinata 成为平台、创作者和收藏家最易使用的 IPFS 固定服务。提供 1 GB 的免费存储空间，以及对 API 的访问。
* [placekitten.com](https://placekitten.com/) — 一个快速简单的服务，用于获取作为占位符的猫咪图片。
* [plot.ly](https://plot.ly/) — 绘制和分享数据。免费版包括无限的公共文件和 10 个私人文件。
* [podio.com](https://podio.com/) — 您可以使用 Podio 来管理最多 5 人的团队，并尝试 Basic 计划的功能，除了用户管理之外。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表、图形和二维码。
* [redbooth.com](https://redbooth.com) — 点对点文件同步，对 2 名以下用户免费。
* [resmush.it](https://resmush.it) — reSmush.it 是一个免费的图像优化 API。reSmush.it 已经集成到 WordPress、Drupal、Magento 等最常见的 CMS 中。reSmush.it 是最常用的图像优化 API，已经处理了 70 亿张图像，而且完全免费。
* [Shotstack](https://shotstack.io) - 用于大规模生成和编辑视频的 API。每月免费 20 分钟的渲染视频。
* [tinypng.com](https://tinypng.com/) — 压缩和调整 PNG 和 JPEG 图像大小的 API，每月免费提供 500 次压缩。
* [transloadit.com](https://transloadit.com/) — 处理文件上传以及视频、音频、图像、文档的编码。对开源项目、慈善机构和学生免费，通过 GitHub Student Developer Pack 提供。商业应用程序可以免费获得 2 GB 的测试版。
* [twicpics.com](https://www.twicpics.com) - 响应式图像即服务。它提供了一个图像 CDN、媒体处理 API 和前端库，以自动化图像优化。该服务每月免费提供 3GB 的流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — Uploadcare 提供基于尖端算法的媒体管道和终极工具包。所有功能都对开发人员完全免费：文件上传 API 和 UI、图像 CDN 和 Origin Services、自适应交付和智能压缩。免费版提供 3000 次上传、3 GB 流量和 3 GB 存储空间。
* [imagekit.io](https://imagekit.io) – 图像 CDN，具有自动优化、实时转换和存储功能，您可以在几分钟内将其集成到现有的设置中。免费计划包括每月高达 20GB 的带宽。
* [internxt.com](https://internxt.com) – Internxt Drive 是一个基于绝对隐私和无妥协安全的零知识文件存储服务。注册即可免费获得 10 GB 存储空间！
* [degoo.com](https://degoo.com/) – 一个基于人工智能的云存储服务，提供高达 20 GB 的免费存储空间，支持 3 台设备，5 GB 的推荐奖励（90 天内无账户活动）。
* [MConverter.eu](https://mconverter.eu/) – 批量转换文件格式。支持多种文件格式，包括新的 AVIF 格式。从视频中提取所有图像帧。每天免费转换 10 个不超过 100MB 的文件，每次处理 2 个文件。

  * [DocsParse](https://docsparse.com/) – 利用GPT驱动的AI将PDF、图像转换为JSON、CSV、EXCEL格式的结构化数据。每月可免费获得30个积分。

**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 一个精选的免费图片、音频和视频列表。
* [Float UI](https://floatui.com/) - 一个免费的 Web 开发工具，可以快速创建具有时尚设计的现代、响应式网站，即使是非设计师也可以使用。
* [Ant Design 登陆页面](https://landing.ant.design/) - Ant Design 登陆页面提供了一个由 Ant Motion 的运动组件构建的模板。它拥有丰富的网站模板，可以下载模板代码包并快速使用。您还可以利用编辑器快速构建您自己的专用页面。
* [Backlight](https://backlight.dev/) — Backlight 是一款将开发人员与设计师联系起来的完整编码平台，团队可以在其中构建、记录、发布、扩展和维护设计系统。免费计划允许最多 3 位编辑者在一个设计系统上合作，并允许无限数量的查看者查看。
* [BoxySVG](https://boxy-svg.com/app) — 一个免费的可安装 Web 应用程序，用于绘制 SVG 并导出为 SVG、PNG、JPEG 等格式。
* [Carousel Hero](https://carouselhero.com/) - 创建社交媒体轮播的免费在线工具。
* [Circum Icons](https://circumicons.com) - 一致的开源图标，如用于 React、Vue 和 Svelte 的 SVG。
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用程序。他们还提供付费集成组件。
* [cloudconvert.com](https://cloudconvert.com/) — 转换任何格式。支持 208 种格式，包括视频和 gif。
* [CodeMyUI](https://codemyui.com) - 精选的 Web 设计和 UI 灵感代码片段集。
* [ColorKit](https://colorkit.co/) - 在线创建配色方案或从顶级配色方案中获取灵感。
* [coolors](https://coolors.co/) - 配色方案生成器。免费。
* [Branition](https://branition.com/colors) - 手动策划的配色方案，最适合品牌形象。
* [css-gradient.com](https://www.css-gradient.com/) - 免费工具，可以快速生成自定义的跨浏览器 CSS 渐变。RGB 和 HEX 格式。
* [easyvectors.com](https://easyvectors.com/) — EasyVectors.com 是一个免费的 SVG 矢量图库。免费下载最佳矢量图。
* [figma.com](https://www.figma.com) — 适用于团队的在线协作设计工具；免费版包括无限文件和查看器，最多可有 2 位编辑者和 3 个项目。
* [Flyon UI](https://flyonui.com/)- Tailwind CSS 最简单的组件库。
* [framer.com](https://www.framer.com/) - Framer 通过强大的布局，帮助您为下一个应用程序、网站或产品迭代和动画界面想法。对于任何验证 Framer 作为专业原型工具的人：无限查看者、最多 2 位编辑者和最多 3 个项目。
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — FFCU 无忧的免版税图片。
* [Gradientos](https://www.gradientos.app) - 让您快速轻松地选择渐变。
* [Icon Horse](https://icon.horse) – 通过我们的简单 API 获取任何网站的最高分辨率 favicon。
* [Iconoir](https://iconoir.com) – 一个开源的图标库，包含数千个图标，支持 React、React Native、Flutter、Vue、Figma 和 Framer。
* [Icons8](https://icons8.com) — 图标、插图、照片、音乐和设计工具。免费计划提供较低分辨率的有限格式。在使用我们的资产时，请链接到 Icons8。
* [landen.co](https://www.landen.co) — 为您的初创公司生成、编辑和发布精美网站和着陆页。所有操作无需编码。免费版允许您拥有一个完全可定制的网站，并将其发布在网络上。
* [Quant Ux](https://quant-ux.com/) - Quant Ux 是一款原型设计工具。它完全免费，也是开源软件。
* [lensdump.com](https://lensdump.com/) - 免费的云图像托管。
* [Lorem Picsum](https://picsum.photos/) - 一款免费且易于使用的时尚占位符工具。在我们的 URL 后添加所需的图像尺寸（宽高），您将获得一张随机图片。
* [LottieFiles](https://lottiefiles.com/) - 世界上最大的在线平台，为设计师、开发人员等提供最微小的动画格式。访问适用于 Android、iOS 和 Web 的 Lottie 动画工具和插件。
* [MagicPattern](https://www.magicpattern.design/tools) — 一系列 CSS 和 SVG 背景生成器和渐变、图案和 blob 工具。
* [marvelapp.com](https://marvelapp.com/) — 设计、原型制作和协作，免费计划仅限 1 位用户和 1 个项目。
* [Mindmup.com](https://www.mindmup.com/) — 免费创建无限思维导图并将其存储在云中。您的思维导图可在任何设备上即时访问。
* [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一款强大的设计协作和交付工具。免费计划包括 3 位用户和 5 个项目，并提供所有功能。
* [mockupmark.com](https://mockupmark.com/create/free) — 为社交媒体和电子商务创建逼真的 T 恤和服装模拟，40 个免费模拟。
* [Mossaik](https://mossaik.app) - 免费的 SVG 图像生成器，具有波浪、博客和图案等不同工具。
* [movingpencils.com](https://movingpencils.com) — 快速、基于浏览器的矢量编辑器。完全免费。
* [Octopus.do](https://octopus.do) — 可视化站点地图构建器。实时构建您的网站结构，并快速共享以与团队或客户协作。
* [Pencil](https://github.com/evolus/pencil) - 基于 Electron 的开源设计工具。
* [Penpot](https://penpot.app) - 基于 Web 的开源设计和原型工具。支持 SVG。完全免费。
* [pexels.com](https://www.pexels.com/) - 免费的商业用途图库。提供免费的 API，允许您按关键字搜索照片。
* [photopea.com](https://www.photopea.com) — 一个免费、先进的在线设计编辑器，具有 Adobe Photoshop UI，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch App）。
* [pixlr.com](https://pixlr.com/) — 免费的在线浏览器编辑器，具有商业级别的编辑功能。
* [Plasmic](https://www.plasmic.app/) - 一个快速、易于使用且功能强大的 Web 设计工具和页面构建器，可集成到您的代码库中。构建响应式页面或复杂组件；可选地使用代码扩展；并将它们发布到生产网站和应用程序中。
* [Pravatar](https://pravatar.cc/) - 生成随机/占位符假头像，其 URL 可以直接在您的 Web/App 中热链接。
* [Proto.io](https://www.proto.io) - 在不编写代码的情况下创建完全交互式的 UI 原型。当免费试用结束时，即可使用免费版。免费版包括 1 位用户、1 个项目、5 个原型、100MB 在线存储以及 proto.io 应用程序的预览。
* [resizeappicon.com](https://resizeappicon.com/) — 一个简单的应用程序图标调整大小和管理服务。
* [Rive](https://rive.app) — 创建并到任何平台交付优美的动画。对于个人用户永久免费。该服务是一个编辑器，它还托管其服务器上的所有图形。他们还为许多平台提供运行时，以运行使用 Rive 制作的演示。
* [storyset.com](https://storyset.com/) — 使用此工具为您的项目创建令人惊叹的免费定制插图。
* [smartmockups.com](https://smartmockups.com/) — 创建产品模拟，200 个免费模拟。
* [tabler-icons.io](https://tabler-icons.io/) — 超过 1500 个免费复制和粘贴 SVG 可编辑图标。
* [UI Avatars](https://ui-avatars.com/) - 根据名称生成带有首字母的头像。URL 可以直接在您的 Web/App 中热链接。通过 URL 支持配置参数。
* [unDraw](https://undraw.co/) - 一个不断更新的美丽 SVG 图像集合，您可以完全免费且无需署名使用。
* [unsplash.com](https://unsplash.com/) - 适用于商业和非商业用途的免费图库（随意使用许可）。

  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划三步走，每步最多 5 步。
* [Webflow](https://webflow.com) - 带有动画和网站托管的所见即所得网站构建器。 两个项目免费。
* [Updrafts.app](https://updrafts.app) - 用于尾风CSS设计的所见即所得网站构建器。 非商业使用免费。
* [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、粘贴便签和思维导图。 创建 4 个免费版。
* [Zeplin](https://zeplin.io/) — 设计师和开发人员协作平台。 展示设计、资产和样式指南。 一个项目免费。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人入胜、独特的图形和图像。
* [Responsively App](https://responsively.app) - 一个用于更快、更精确的响应式 Web 应用程序开发的免费开发人员工具。
* [SceneLab](https://scenelab.io) - 在线模拟图形编辑器，不断扩充免费设计模板集。
* [xLayers](https://xlayers.dev) - 预览并转换 Sketch 设计文件，转换为 Angular、React、Vue、LitElement、Stencil、Xamarin 等（免费开源 https://github.com/xlayers/xlayers）。
* [Grapedrop](https://grapedrop.com/) — 基于 GrapesJS 框架的响应式、强大、SEO 优化网页构建器。 免费提供前五页、无限量自定义域名、所有功能和简单使用。
* [Mastershot](https://mastershot.app) - 完全免费的基于浏览器的视频编辑器。 无水印，提供高达 1080p 的导出选项。
* [Unicorn Platform](https://unicornplatform.com/) - 无忧的登陆页面构建器，附带托管服务。 一个网站免费。
* [SVGmix.com](https://www.svgmix.com/) - 30 万个免费 SVG 图标、图集和品牌徽标的庞大存储库。 它在浏览器中提供简单的矢量编辑程序，用于快速编辑文件。
* [svgrepo.com](https://www.svgrepo.com/) - 使用各种矢量库探索、搜索和查找最适合您的项目的图标或矢量。 下载免费 SVG 矢量图供商业使用。
* [haikei.app](https://www.haikei.app/) - Haikei 是一个 Web 应用程序，用于生成独特的 SVG 形状、背景和图案，可随时用于设计工具和工作流程。
* [Canva](https://canva.com) - 免费在线设计工具，用于创建视觉内容。
* [Superdesigner](https://superdesigner.co) - 一系列免费设计工具，只需点击几下，即可创建独特的背景、图案、形状、图像等。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。 TeleportHQ 是一个协作前端平台，可以即时创建和发布无头静态网站。 三个免费项目，无限合作者和免费代码导出。
* [vector.express](https://vector.express) — 快速、轻松地转换 AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS 和 SVG 矢量。
* [Vertopal](https://www.vertopal.com) - Vertopal 是一个免费的在线平台，可将文件转换为各种格式。 包括开发人员转换器，例如 JPG 到 SVG、GIF 到 APNG、PNG 到 WEBP、JSON 到 XML 等。
* [okso.app](https://okso.app) - 极简在线绘图应用。 允许快速绘制草图和视觉笔记。 将草图导出为 PNG、JPG、SVG 和 WEBP。 还可以作为 PWA 安装。 所有人免费使用（无需注册）。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费 SVG 剪切文件。
* [Lucide](https://lucide.dev) - 免费的可定制和一致的 SVG 图标工具包。
* [Logo.dev](https://www.logo.dev) - 公司徽标 API，包含 4400 万个品牌，易于调用 URL。 前 10,000 次 API 调用免费。
* [MDBootstrap](https://mdbootstrap.com/) - 免费用于个人和商业使用的 Bootstrap、Angular、React 和 Vue UI 工具包，包含 700 多个组件、令人惊叹的模板、1 分钟安装程序、广泛教程和庞大的社区。
* [TW Elements](https://tw-elements.com/) - 使用尾风 CSS 重新创建的免费 Bootstrap 组件，但设计和功能更好。
* [DaisyUI](https://daisyui.com/) -- 免费。 "使用 Tailwind CSS 但编写更少的类名"，提供按钮等组件。
* [Scrollbar.app](https://scrollbar.app) -- 一个简单的免费 Web 应用程序，用于为 Web 设计自定义滚动条。
* [css.glass](https://css.glass/) -- 一个免费的 Web 应用程序，用于使用 CSS 创建玻璃态设计。
* [hypercolor.dev](https://hypercolor.dev/) -- 一个精心策划的 Tailwind CSS 配色方案集，还提供各种生成器，供您创建自己的配色方案。
* [iconify.design](https://icon-sets.iconify.design/) -- 一个包含 100 多个图标包的集合，具有统一的界面。 允许您在包之间搜索图标，并将单个图标导出为 SVG 或流行的 Web 框架。
* [NextUI](https://nextui.org/) -- 免费。 漂亮、快速、现代的 React & Next.js UI 库。
* [Glyphs](https://glyphs.fyi/) -- 免费，网络上最强大的图标，完全可编辑且真正开源的设计系统。
* [ShadcnUI](https://ui.shadcn.com/) -- 美观的设计组件，可复制粘贴到您的应用程序中。 可访问。 可定制。 开源。
* [HyperUI](https://www.hyperui.dev/) -- 免费开源 Tailwind CSS 组件。
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 只需单击一下，即可生成一整年独特的图标，完全免费
* [Image BG Blurer](https://imagebgblurer.com/) -- 为图像生成模糊背景框，使用该图像源作为背景模糊，适用于 Notion、Trello、Jira 等工具
* [Webstudio](https://webstudio.is/) -- Webflow 的开源替代产品。 免费计划提供无限数量的网站，位于其域上。 自定义域的五个网站。 每月 10,000 次页面浏览。 2GB 资产存储。
* [Nappy](https://nappy.co/) -- 免费的黑人和棕色人种照片。 供商业和个人使用。
* [Tailkits](https://tailkits.com/) -- 一个策划的 Tailwind 模板、组件和工具集合，以及有用的代码、网格、盒子阴影等生成器。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示其作品的地方。可根据类别进行过滤，包含 UI/UX 项目。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不是来自真实的应用程序。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的喜好找到最佳的登陆页面，供您的设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登陆页面 / UI 套件 / 网页截图] Lapa Ninja 是一个画廊，展示了 6025 个最佳登陆页面示例、设计师的免费书籍以及来自网络的免费 UI 套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登陆页面设计] 经常更新的登陆页面截图。包括桌面、平板电脑和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动截图] 使用我们 50,000+ 个完全可搜索的移动应用截图库，节省 UI 和 UX 研究时间。
  * [Uiland Design](https://uiland.design/) - [移动截图] 探索非洲和世界领先公司的移动和 Web UI 设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示了设计师、开发人员和产品制造者可以参考的最优秀的 UI UX 模式（iOS 和 Android）。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频和截图] 许多移动和 Web 应用程序的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动截图] 获得灵感，并了解最新的 Web 和移动应用程序 UI 设计趋势。可根据模式和应用程序进行过滤。
  * [scrnshts](https://scrnshts.club/) - [移动截图] 精选的精美应用商店设计截图集。
  * [UI Garage](https://uigarage.net/) - [移动/网页截图] 每日 UI 灵感和模式，帮助设计师和开发人员找到灵感、工具以及适合您项目的最佳资源。
  * [Refero](https://refero.design/) - [网页截图] 带有标签并可搜索的精选网页应用程序设计参考集合。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费的DEVELOPER计划，每月30,000次请求。
  * [carto.com](https://carto.com/) — 从您的数据和公开数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像发条装置一样运作的地图工具。每月50,000次免费查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供地图、地理空间数据存储、分析、地理编码、路由等方面的API和SDK，支持网络、桌面和移动平台。每月免费提供200万张基础地图瓦片、20,000次非存储地理编码、20,000次简单路由、5,000次驾驶时间计算和5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、地点搜索和上下文感知内容，来自Places API和Pilgrim SDK。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和光栅地图瓦片、地理编码、地点、路由、等值线API。每天3,000次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天2,500次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月10,000次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高度可用的REST/JSON/JSONP IP地理定位查询API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 提供免费的开发人员套餐，包括路由、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/) — 提供地图和位置感知应用程序的API和SDK。每月250,000次交易免费。
  * [locationiq.com](https://locationiq.com/) — 地理编码、地图和路由API。每天5,000次免费请求。
  * [mapbox.com](https://www.mapbox.com/) — 地图、地理空间服务和SDK，用于显示地图数据。
  * [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务和SDK，用于地图可视化。免费提供带有每周更新的矢量瓦片和四种地图样式。
  * [nominatim.org](https://nominatim.org/) — OpenStreetMap提供的免费地理编码服务，提供全球地址搜索功能和反向地理编码功能。
  * [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路由、路线优化、距离矩阵）、地图SDK（矢量、静态、移动SDK）。[每个服务都有免费的指定配额](https://nextbillion.ai/pricing)。
  * [opencagedata.com](https://opencagedata.com) — 地理编码API，聚合了OpenStreetMap和其他开放的地理数据源。每天2,500次免费查询。
  * [osmnames](https://osmnames.org/) — 地理编码，搜索结果根据相关维基百科页面的流行程度进行排序。
  * [positionstack](https://positionstack.com/) - 全球地点和坐标的免费地理编码。每月25,000次个人使用请求。
  * [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路由、导航和其他地理空间API。每天2,500次免费地图浏览和API请求，用于非商业用途和测试。
  * [maps.stamen.com](http://maps.stamen.com/) - 免费的地图瓦片和瓦片托管。
  * [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者。
  * [Geokeo api](https://geokeo.com) - 具有语言更正功能的地理编码API。全球覆盖。每天2,500次免费查询

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多个发行版 (SUSE、EL、Fedora、Debian 等) 的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于 Mock 的 RPM 构建服务，支持 Fedora 和 EL。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu 和 Debian 构建服务。

**[⬆️ 返回目录](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 一个免费的在线 PHP shell 和代码段分享网站，支持在 300 多个 PHP 版本中运行您的代码
* [Android Studio](https://developer.android.com/studio) — Android Studio 提供了在各种 Android 设备上构建应用程序的最快工具。开源 IDE 对所有人免费开放，是开发 Android 应用程序的最佳选择。支持 Windows、Mac、Linux，甚至 ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一个用于在 Android 设备上开发真正的基于 Gradle 的 Android 应用程序的开源 IDE。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
* [apiary.io](https://apiary.io/) — 带有即时 API 模拟和生成的文档的协作式 API 设计工具（免费提供无限量的 API 蓝图和无限数量的用户，并附带一个管理员帐户和托管文档）。
* [BBEdit](https://www.barebones.com/) - BBEdit 是一款功能强大且可扩展的 macOS 编辑器。免费模式提供了一套[强大的核心功能](https://www.barebones.com/products/bbedit/comparison.html)和升级到高级功能的途径。
* [Binder](https://mybinder.org/) - 将 Git 仓库变成一组交互式笔记本的免费公共服务。
* [BlueJ](https://bluej.org) — 一款免费的 Java 开发环境，旨在帮助初学者，在全球范围内被数以百万计的人使用。由 Oracle 提供支持，并具有简单的 GUI 界面。
* [Bootify.io](https://bootify.io/) - Spring Boot 应用程序生成器，带有自定义数据库和 REST API。
* [Brackets](http://brackets.io/) - Brackets 是一款专为 Web 开发而设计的开源文本编辑器。它轻量、易于使用且高度可定制。
* [cacher.io](https://www.cacher.io) — 带有标签支持的代码段组织工具，支持 100 多种编程语言。
* [Code::Blocks](https://codeblocks.org) — 免费的 Fortran 和 C/C++ IDE。开源软件，支持 Windows、macOS 和 Linux。
* [Cody](https://sourcegraph.com/cody) - 免费的人工智能编码助手，可以为您写代码（代码块、自动完成、单元测试）、理解（了解您的整个代码库）、修复和查找代码。支持 VS Code、JetBrains 和在线版本。
* [codiga.io](https://codiga.io/) — 编码助手，允许您直接在 IDE 中搜索、定义和重用代码段。对于个人和小组织免费。
* [codesnip.com.br](https://codesnip.com.br) — 简单的代码段管理器，支持分类、搜索和标签。免费且无限制。
* [cocalc.com](https://cocalc.com/) — （前身为 SageMathCloud at cloud.sagemath.com）— 云端协作计算。浏览器访问带有内置协作功能的完整 Ubuntu 系统，并预安装了许多免费的数学、科学和数据科学软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
* [code.cs50.io](https://code.cs50.io/) - Visual Studio Code for CS50 是一个 Web 应用程序，它使用 GitHub Codespaces 适配学生和教师。
* [codepen.io](https://codepen.io/) — CodePen 是前端 Web 开发的游乐场。
* [codesandbox.io](https://codesandbox.io/) — React、Vue、Angular、Preact 等在线游乐场。
* [Components.studio](https://webcomponents.dev/) - 在隔离的环境中编写代码组件，使用故事板可视化它们，对其进行测试，然后将其发布到 npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 面向开发人员团队的基于 Web 和 Kubernetes 的 IDE，支持多种语言。开源且由社区驱动。Red Hat 托管的在线实例可在 [workspaces.openshift.com](https://workspaces.openshift.com/) 上找到。
* [fakejson.com](https://fakejson.com/) — FakeJSON 通过其 API 帮助您快速生成伪造的数据。只需发出 API 请求，描述您想要的内容和格式，API 就会以 JSON 格式返回结果。加快思想的上市进程，并将其实现。
* [GetVM](https://getvm.io) — 免费的 Linux 和 IDEs Chrome 侧边栏。免费版每天提供 5 个 VM。
* [GitPod](https://www.gitpod.io) — 为 GitHub 项目提供即时、可直接编码的开发环境。免费版每月提供 50 小时。
* [ide.goorm.io](https://ide.goorm.io) goormIDE 是一款基于云的完整 IDE。支持多种语言、基于 Linux 的容器、功能齐全的 Web 终端、端口转发、自定义 URL、实时协作和聊天、共享链接、Git/Subversion 支持等。更多功能（免费版包括每个容器 1GB 内存和 10GB 存储空间，5 个容器槽）。
* [JDoodle](https://www.jdoodle.com) — 支持 60 多种编程语言的在线编译器和编辑器，提供免费计划，用于 REST API 代码编译，每天最多 200 个信用额度。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE 和部署工具（即 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。为学生、教师、开源项目和用户团体提供免费许可证。
* [jsbin.com](https://jsbin.com) — JS Bin 是前端 Web（HTML、CSS 和 JavaScript）的另一个游乐场和代码共享网站。它还支持 Markdown、Jade 和 Sass。
* [jsfiddle.net](https://jsfiddle.net/) — JS Fiddle 是一个前端 Web 的游乐场和代码共享网站，支持协作。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 一个返回 JSON 格式伪造数据的 REST API 端点。您还可以获得源代码，以便在本地运行服务器。
* [Lazarus](https://www.lazarus-ide.org/) — Lazarus 是一个与 Delphi 兼容的跨平台 IDE，用于快速应用程序开发。
* [MarsCode](https://www.marscode.com/) - 一个免费的基于云的 AI 驱动的 IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 一个用于生成伪造 JSON 数据的微型 API 模拟微服务。
* [mockable.io](https://www.mockable.io/) — Mockable 是一个简单的可配置服务，用于模拟 RESTful API 或 SOAP Web 服务。此在线服务允许您快速定义 REST API 或 SOAP 端点，并使其返回 JSON 或 XML 数据。
* [mockaroo](https://mockaroo.com/) — Mockaroo 允许您以 CSV、JSON、SQL 和 Excel 格式生成逼真的测试数据。您还可以为后端 API 创建模拟数据。
* [Mocklets](https://mocklets.com) - 一个 HTTP 模拟 API 模拟器，帮助模拟 API 进行更快的并行开发和更全面的测试，并提供终身免费版。
* [Paiza](https://paiza.cloud/en/) — 在浏览器中开发 Web 应用程序，无需设置任何内容。免费计划提供一个服务器，有效期为 24 小时，每天 4 小时运行时间，配备 2 个 CPU 内核、2 GB RAM 和 1 GB 存储空间。
* [Prepros](https://prepros.io/) - Prepros 可以编译 Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript 和 TypeScript，重新加载浏览器，并简化网站的开发和测试，让您专注于使其尽善尽美。您还可以只需点击几下即可添加自己的工具。
* [Replit](https://replit.com/) — 各种程序语言的云编码环境。
* [SoloLearn](https://code.sololearn.com) — 一个云编程游乐场，适合运行代码段。支持多种编程语言。运行代码时无需注册，但要在平台上保存代码则需要注册。还为初学者和中级编码人员提供免费课程。
* [stackblitz.com](https://stackblitz.com/) — 用于创建、编辑和部署全栈应用程序的在线/云代码 IDE。支持任何流行的基于 NodeJs 的前端和后端框架。创建新项目的快捷方式：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行、功能强大且高度可定制的文本编辑器，适用于编码和文本编辑任务。
* [Visual Studio Code](https://code.visualstudio.com/) - 一种由 Microsoft 开发的经过重新定义和优化的用于构建和调试现代 Web 和云应用程序的代码编辑器。

  * [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/跟踪、自由许可的 Microsoft VSCode 编辑器二进制发行版
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件的编程活动量化自我指标，提供有限的免费计划。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源、跨平台的终端，用于无缝的工作流程。可在线渲染任何内容。支持保存会话和历史记录。由开放的 Web 标准提供支持。适用于 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 一个基于浏览器的 IDE，用于独立开发 Web 组件，提供 58 个模板，支持故事和测试。
  * [PHPSandbox](https://phpsandbox.io/) — 在线 PHP 开发环境
  * [WebDB](https://webdb.app) - 免费高效的数据库 IDE。具有服务器发现、ERD、数据生成器、人工智能、NoSQL 结构管理器和数据库版本控制等功能。
  * [Zed](https://zed.dev/) - Zed 是一个高性能、多人协作的代码编辑器，由 Atom 和 Tree-sitter 的创建者开发。

**[⬆️ 返回顶部](#目录)**

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - Snowflake 数据云观测解决方案。个人免费使用。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一款反 ETL 平台，帮助您将数据从数据仓库同步到 CRM、营销和支持工具。免费版提供一个目标同步数据。
  * [Avo](https://avo.app/) — 简化了分析发布工作流程。单一来源的跟踪计划、类型安全的分析跟踪库、内置调试器和数据可观测性，在发布之前捕获所有数据问题。对于两个工作区成员和 1 小时数据可观测性回溯免费。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版提供 10K 移动应用用户，以及深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息，作为不同类型的数据源（Git、Github 和 Gitlab）。免费版包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反 ETL 和运营分析平台。从您的数据仓库同步 10 个字段到 60 多个 SaaS，例如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划用于分析一个网站，3000 次浏览。
  * [Databox](https://databox.com) — 通过结合其他分析和 BI 平台来提供业务见解和分析。免费计划为 3 个用户、仪表板和数据源提供 1100 万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 1 个网站 2000 次页面浏览
  * [amplitude.com](https://amplitude.com/) — 每月 100 万次事件，最多 2 个应用
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源网络分析平台，提供托管服务（非商业使用免费）或自托管应用程序。它的目标是提供简单、有意义且注重隐私的网络分析，作为 Google Analytics 或 Matomo 的替代方案。免费版适用于非商业用途，包括无限数量的网站、6 个月的数据保留和每月 10 万次页面浏览。
  * [Google Analytics](https://analytics.google.com/) — Google Analytics
  * [MetricsWave](https://metricswave.com) — 开发人员使用的注重隐私的 Google Analytics 替代方案。免费计划允许每月 2 万次页面浏览，无需信用卡。
  * [Expensify](https://www.expensify.com/) — 费用报销，免费的个人报销审批工作流
  * [getinsights.io](https://getinsights.io) - 注重隐私、无 cookie 的分析，每月最多 3k 次事件免费。
  * [heap.io](https://heap.io) — 自动捕获 iOS 或 Web 应用程序中的每个用户操作。每月 10K 个会话免费。
  * [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天 2000 次页面浏览。每天 100 次快照（最大容量：300）。可以存储 3 个快照热图 365 天。无限团队成员。还包括应用程序和独立的调查、带有屏幕截图的反馈小部件。免费版允许每月创建 3 项调查和 3 个反馈小部件，收集 20 个反馈。
  * [Keen](https://keen.io/) — 定制分析，用于数据收集、分析和可视化。每月 1000 次事件免费
  * [Yandex.Datalens](https://datalens.yandex.com/) — Yandex Cloud 数据可视化和分析服务。该服务免费提供，没有用户数量和请求数量的限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) — 无限免费分析
  * [Mixpanel](https://mixpanel.com/) — 10 万名每月跟踪用户、无限数据历史记录和席位、美国或欧盟数据居住地
  * [Moesif](https://www.moesif.com) — REST 和 GraphQL 的 API 分析。（每月免费最多 50 万个 API 调用）
  * [optimizely.com](https://www.optimizely.com) — A/B 测试解决方案，免费入门计划，一个网站、1 个 iOS 应用程序和 1 个 Android 应用程序
  * [Microsoft PowerBI](https://powerbi.com) — Microsoft 提供的业务见解和分析。免费计划提供有限的使用，100 万用户许可证。
  * [Row Zero](https://rowzero.io) - 快速、互联的电子表格。直接连接到数据库、S3 和 API。导入、分析、图形和共享数百万行数据。三个免费（永久）工作簿。
  * [sematext.com](https://sematext.com/cloud/) — 每月最多 50K 次操作、1 天的数据保留、无限数量的仪表板、用户等免费。
  * [Similar Web](https://similarweb.com) — 网络和移动应用程序分析。免费计划提供每个指标 5 个结果、1 个月的移动应用程序数据和 3 个月的网站数据。
  * [StatCounter](https://statcounter.com/) — 网站访客分析。免费计划分析最近 500 个访客。
  * [Statsig](https://statsig.com) - 涵盖分析、功能标记和 A/B 测试的全合一平台。每月最多 100 万次计量事件免费。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建，并使 Tableau 完美地适合您的组织。免费的开发者计划为 Tableau Online 提供个人开发沙盒许可证。该版本是最新预发布版本，因此数据开发人员可以测试该平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实用户身上测试设计和模型，并跟踪访客。免费计划：1 个用户，无限次测试
  * [woopra.com](https://www.woopra.com/) — 免费用户分析平台，50 万次操作、90 天的数据保留、30 多个一键集成。
  * [counter.dev](https://counter.dev) — 简单的隐私友好的网络分析。免费或按您的意愿捐赠。
  * [PostHog](https://posthog.com) - 每月最多 100 万次跟踪事件，免费提供完整的产品分析套件。还提供无限的应用程序内调查，每月 250 个调查反馈。
  * [Uptrace](https://uptrace.dev) - 分布式跟踪工具，帮助开发人员找出故障并找到性能瓶颈。提供免费计划，为开源项目提供免费的个人订阅，并提供开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity 是一款免费、易于使用的工具，可以捕获真实用户如何使用您网站的情况。
  * [Beampipe.io](https://beampipe.io) - Beampipe 是一种简单、注重隐私的网络分析。适用于最多 5 个域名和每月 1 万次页面浏览免费。
  * [Aptabase](https://aptabase.com) — 开源、注重隐私且简单的移动和桌面应用程序分析。支持 Swift、Kotlin、React Native、Flutter、Electron 等 SDK。每月最多 2 万次事件免费。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新跟踪计划，并促进无缝协作。无需编写代码，即可将其部署到生产环境中的真实流量，或向回归测试添加分析覆盖。
  * [LogSpot](https://logspot.io) - 完整的统一 Web 和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram 和 Webhook）。免费计划包括每月 1 万次事件。
  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源 Google Analytics 替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - Google Analytics 的免费轻量级隐私友好型替代方案。无限次页面浏览、无限访客、无限页面热图和目标跟踪。适用于最多 3 个域和每个域 600 次会话回放免费。
  * [AppFit](https://appfit.io) - AppFit 是一个全面的分析和产品管理工具，旨在促进跨平台的分析和产品更新管理。免费计划包括每月 1 万次事件、产品日志和每周见解。

**[⬆️ 返回顶部](#目录)**

## 访客会话记录

  * [Reactflow.com](https://www.reactflow.com/) — 按网站计价：每天 1,000 次页面浏览，三个热图，三个小部件，免费错误追踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，具有错误复现的开发工具、实时会话实时支持，以及产品分析套件。每月一千次会话，可访问所有功能，数据保留 7 天。
  * [LogRocket.com](https://www.logrocket.com) - 每月 1,000 次会话，30 天数据保留，错误追踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月 1,000 次会话，数据保留一个月，三个用户席位。更多信息请见[这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 按网站计价：每月 1,050 次页面浏览，无限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 每月 2,500 次会话，适用于一个网站的免费版
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，没有流量限制、没有项目限制，也没有采样
  * [mouseflow.com](https://mouseflow.com/) — 每月 500 次会话，适用于一个网站的免费版
  * [mousestats.com](https://www.mousestats.com/) — 每月 100 次会话，适用于一个网站的免费版
  * [smartlook.com](https://www.smartlook.com/) — 适用于 Web 和移动应用程序的免费套餐（每月 1,500 次会话），三个热图，一个漏斗，一个月的数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月 5,000 次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录和观看访客如何使用您的网站或应用程序。对于小型项目，免费无限时间

## 国际手机号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询 JSON API。每月 100 次 API 请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证，免费、快速、可靠的 JSON API。每月 1000 次请求

**[⬆️ 返回顶部](#目录)**

## 支付和账单集成

  * [Qonversion](http://qonversion.io/) - 一款跨平台的订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，帮助优化应用内购买和货币化。兼容 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 Web。每月跟踪收入低于 10,000 美元免费。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整定价，帮助您的业务在全球范围内扩展并进入新的市场（购买力平价）。免费计划包括每月 7,500 次 API 请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施、实时订阅事件以及适用于 iOS、Android、Stripe 和 Paddle 的现成货币化工具。每月收入低于 10,000 美元免费。
  * [Adapty.io](https://adapty.io/) – 适用于 iOS、Android、React Native、Flutter、Unity 或 Web 应用程序的移动应用内订阅集成的一站式解决方案，提供开源 SDK。每月收入低于 10,000 美元免费。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法币汇率。免费版每月提供 10,000 次调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史汇率数据。提供免费的 DEVELOPER 计划，每月 1,000 次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币汇率和历史数据。演示 API 每分钟限频 30 次，每月上限为 10,000 次调用。
  * [CurrencyApi](https://currencyapi.net/) — 实时货币汇率和加密货币汇率，以 JSON 和 XML 格式提供。免费版每月提供 1,250 次 API 请求。
  * [currencylayer](https://currencylayer.com/) — 面向商业应用的可靠汇率和货币转换 API，每月免费提供 100 次 API 请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 一个易于使用的货币转换 JSON API。免费版每天更新一次，每月限制 1,500 次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家预防支付欺诈和拒付。提供免费的 Micro 计划，每月 500 次查询。
  * [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费版要求标注数据来源。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费来实现 API 货币化。可连接到 Stripe、Chargebee 等。免费版每月提供 30,000 次事件。
  * [Nami ML](https://www.namiml.com/) - 适用于 iOS 和 Android 的应用内购买和订阅的完整平台，包括无代码支付墙、CRM 和分析。所有基础功能均免费，可用于运行 IAP 业务。
  * [RevenueCat](https://www.revenuecat.com/) — 应用内购买和订阅（iOS 和 Android）的托管后端。跟踪收入低于 2,500 美元/月免费。
  * [vatlayer](https://vatlayer.com/) — 增值税号码实时验证和欧盟增值税率 API，每月免费提供 100 次 API 请求
  * [Currencyapi](https://currencyapi.com) — 免费的货币转换和汇率数据 API。每月 300 次请求免费，每分钟 10 次请求，供个人使用。

**[⬆️ 返回目录](#目录)**

## 与Docker相关

  * [canister.io](https://canister.io/) — 为开发人员提供20个免费的私有仓库，为团队提供30个免费的私有仓库来构建和存储 Docker 镜像
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费版提供 1 GB 私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 一个免费的私有仓库和无限量的公共仓库来构建和存储 Docker 镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习 Docker 的游乐场。
  * [quay.io](https://quay.io/) — 使用无限量的免费公共仓库构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名和临时 Docker 镜像仓库

**[⬆️ 返回顶部](#目录)**

## 与Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant Cloud. 提供 Vagrant box 托管服务。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 另一个公共的 Vagrant box 索引站点

**[⬆️ 返回顶部](#目录)**

## 开发博客网站

  * [BearBlog](https://bearblog.dev/) - 极简的 Markdown 博客和网站构建器。
  * [Dev.to](https://dev.to/) - 程序员分享想法和互相帮助的社区。
  * [Hashnode](https://hashnode.com/) — 免烦恼的开发者博客平台！
  * [Medium](https://medium.com/) — 更深入思考你所关注的事物。
  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式 Miniblog 形式免费分享你的想法、知识和故事。

**[⬆️ 回到顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您在网站受众中建立活跃的社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的一个轻量级评论小部件。将 GitHub issues 用于博客评论、wiki 页面等！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被网络上的数十万个站点使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，根据需求付费，可“在一个领域内对行为和外观拥有完全控制权”
* [IntenseDebate](https://intensedebate.com/) - 一个功能丰富的评论系统，适用于 WordPress、Tumblr、Blogger 等许多网站平台。

**[⬆️ 返回顶部](#目录)**

## 屏幕截图API

  * [ApiFlash](https://apiflash.com) — 基于 Aws Lambda 和 Chrome 的屏幕截图 API。支持全页截图、捕捉时间和视口尺寸。
  * [microlink.io](https://microlink.io/) – 它可以将任何网站转换为数据，例如元标签规范化、漂亮的链接预览、抓取功能或屏幕截图服务。每天 250 次免费请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 屏幕截图 API 使用简单的 API 调用生成任何网站的屏幕截图。旨在扩展并在 Google Cloud 上托管。每月提供 100 次免费屏幕截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 捕捉高度可定制的任何网站的快照。每月免费 100 次快照
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月捕捉 100 次快照，支持 png、gif 和 jpg 格式，包括全长度捕捉，而不仅仅是首页
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费版提供每天 500 页。自 2017 年以来一直提供免费版。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站屏幕截图和域名智能 API 服务。每月 100 次免费请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为 jpg、png 或 pdf。捕捉全页截图、调整视口大小并注入自定义代码。每月 150 张图像的免费版。
  * [Screenshots](https://screenshotson.click) — 您的屏幕截图 API。提供高度可定制的捕获选项。每月 100 次免费屏幕截图。

**[⬆️ 返回顶部](#目录)**

## 与Flutter相关和在没有Mac的情况下构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线 IDE，也是创建、调试和构建跨平台项目的最佳场所。在不使用 Mac 的情况下构建 iOS 和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一个完全托管和管理的移动应用 CI/CD 平台。您可以使用基于 GUI 的 CI/CD 工具构建、测试和部署。免费版每月提供 500 分钟的免费使用时间和一个配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放式界面，用于构建 Flutter 移动应用程序。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件仿真

  * [JsLinux](https://bellard.org/jslinux) — 一个快速的x86虚拟机，能够运行Linux和Windows 2k。
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个能够运行Linux（带网络支持）的OpenRISC虚拟机。
* [v86](https://copy.sh/v86) — 一个能在浏览器中直接运行Linux和其他OS的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流程帮助实现隐私即设计，从而使组织遵守 GDPR 及其他法规。免费版仅限于小型团队和 SaaS 版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，提供从 GDPR 代表到 Cookie 横幅等各种功能。免费版提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 Cookie 政策及同意管理。免费版提供有限的隐私和 Cookie 政策，以及 Cookie 横幅。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie 横幅、审计和多语言同意管理解决方案。免费版提供一次性扫描和单个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大多数功能，但访问次数有限。
  * [Concord](https://www.concord.tech/) - 完整的隐私数据平台，包括同意管理、隐私请求处理（DSAR）和数据映射。免费版包括核心同意管理功能，他们还为经过验证的开源项目提供更高级的计划。

**[⬆️ 返回顶部](#目录)**

## 杂项

  * [BackgroundStyler.com](https://backgroundstyler.com) - 通过创建代码、文本或图像的精美截图来分享到社交媒体。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可以分享为精美的图像，例如用于 Twitter/Facebook 帖子，或分享为链接，例如用于聊天或论坛。
* [Blynk](https://blynk.io) — 一个带有 API 的 SaaS，用于控制、构建和评估 IoT 设备。免费的开发者计划，包括 5 台设备、免费云存储和数据存储。还提供移动应用程序。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大内联多行计算器的记事应用 (PWA)。
* [Carbon.now.sh](https://carbon.now.sh) - 以精美的截图式图像格式创建和分享代码片段。通常用于在 Twitter 或博客文章中展示代码片段。
* [Code Time](https://www.software.com/code-time) - 一个用于时间跟踪和代码指标的扩展，适用于 VS Code、Atom、IntelliJ、Sublime Text 等。
* [Codepng](https://www.codepng.app) - 从源代码创建精美的快照以分享到社交媒体。
* [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图以分享到社交媒体。
* [Cronhooks](https://cronhooks.io/) - 安排一次性或重复的 Webhook。免费计划允许 5 个临时的调度。
* [cron-job.org](https://cron-job.org) - 在线 cronjobs 服务。无限数量的任务都是免费的。
* [datelist.io](https://datelist.io) - 在线预订/约会调度系统。每月免费预订 5 次，包括 1 个日历。
* [Domain Forward](https://domain-forward.com/) - 一个简单的工具，用于转发任何 URL 或域名。每月免费转发 5 个域名和 20 万个请求。
* [Elementor](https://elementor.com) — WordPress 网站构建器。免费计划提供 40 多个基本小部件。
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL 的即时在线格式化。
* [FOSSA](https://fossa.com/) - 第三方代码、许可证合规性和漏洞的可扩展端到端管理。
* [Hook Relay](https://www.hookrelay.dev/) - 为您的应用程序添加 Webhook 支持，无需麻烦：完成的队列、带有退避的重试和日志记录。免费计划每天提供 100 次投递、14 天保留期和 3 个 Hook 端点。
* [http2.pro](https://http2.pro) — HTTP/2 协议就绪性测试和客户端 HTTP/2 支持检测 API。
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库重用来更快地构建自定义功能、用例和完整应用程序。
* [Base64 decoder/encoder](https://devpal.co/base64-decode/) — 一个用于解码和编码数据的免费在线工具。
* [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、电报、Discord 和自定义 Webhook 接收有关 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 的最新版本的通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的 EXIF 数据，包括 GPS 位置和元数据。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理 PDF 模板，使用动态数据调用 API，并下载您的 PDF。每月提供 300 份免费文档。
* [Pika Code Screenshots](https://pika.style/templates/code-image) — 使用扩展程序从代码片段和 VSCode 创建精美的可自定义截图。
* [QuickType.io](https://quicktype.io/) - 从 JSON、模式和 GraphQL 快速自动生成模型/类/类型/接口和序列化程序，以便在任何编程语言中快速、安全地处理数据。将 JSON 转换为任何语言的漂亮、类型安全的代码。
* [RandomKeygen](https://randomkeygen.com/) - 一个免费的移动友好工具，提供各种随机生成的密钥和密码，用于保护任何应用程序、服务或设备。
* [ray.so](https://ray.so/) - 从代码片段创建精美的图像。
* [readme.com](https://readme.com/) — 轻松创建漂亮的文档，开源免费。
* [redirection.io](https://redirection.io/) — 面向企业、营销和 SEO 的 SaaS 重定向管理工具。
* [redirect.ing](https://redirect.ing/) - 快速、安全的域名转发，无需管理服务器或 SSL 证书。免费计划包括 10 个主机名和每月 10 万个请求。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理重定向，并支持 HTTPS。免费计划包括 10 个源和每月 10 万次点击。
* [ReqBin](https://reqbin.com/) — 在线发送 HTTP 请求。流行的请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持标头和令牌身份验证。包括一个基本的登录系统来保存您的请求。
* [Smartcar API](https://smartcar.com) - 一个用于查找汽车、获取燃油箱、电池电量、里程表、解锁/锁定车门等的 API。
* [snappify](https://snappify.com) - 使开发人员能够创建精美的视觉效果。从精美的代码片段到完整的技术演示。免费计划一次最多包含 3 个快照，并提供无限次下载和每月 5 次 AI 驱动的代码解释。
* [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取给定经纬度的日出和日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时 PubSubHubbub 兼容源，导出，分析。免费，但可定制性较低。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查。在线分析结果。免费计划每项调查最多允许 10 个问题和 100 个回答。
* [Tiledesk](https://tiledesk.com) - 创建聊天机器人并进行对话。将它们带到全渠道：从您的网站（实时聊天小部件）到 WhatsApp。免费计划提供无限个聊天机器人。
* [Versionfeeds](https://versionfeeds.com) — 用于您最喜爱的软件版本的自定义 RSS 源。将您最喜欢的编程语言、库或工具的最新版本放在一个源中。（前 3 个源免费）
* [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录像和其他视频。
* [Webacus](https://webacus.dev) — 访问各种免费的开发人员工具，用于编码、解码和数据操作。

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) —  免费适用于 2 台设备，且会话数量和持续时间无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需支持和永久访问设备（每天 2 次会话，免费）
  * [RustDesk](https://rustdesk.com/) - 适用于所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 提供免费/付费的精灵、瓦片集和角色包等资产。
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自世界各地游戏艺术家的免费游戏资产。
* [GameDevMarket](https://gamedevmarket.net) — 提供免费/付费的2D、3D、音频、GUI等资产。
* [OpenGameArt](https://opengameart.org) — 开放源码的游戏资产，如音乐、音效、精灵和gif。
* [CraftPix](https://craftpix.net) — 提供免费/付费的2D、3D、音频、GUI、背景、图标、瓦片集、游戏套件等资产。
* [Game Icons](https://game-icons.net/) - 提供免费的可定制 SVG/PNG 图标，采用 CC-BY 许可协议。
* [LoSpec](https://lospec.com/) — 提供在线像素艺术和其他受限数字艺术创作工具，以及大量适用于游戏的教程/调色板列表。
* [ArtStation](https://www.artstation.com/) - 提供免费/付费的2D、3D资产、音频、图标、瓦片集、游戏套件等。同时也可用于展示您的艺术作品集。
* [Rive](https://rive.app/community/) - 提供社区资产，您也可以使用其免费计划创建自己的游戏资产。
* [Poly Pizza](https://poly.pizza/) - 提供免费的低多边形 3D 资产。
* [3Dassets.one](https://3dassets.one/) - 提供超过 8,000 个免费/付费的 3D 模型和 PBR 材质，用于制作纹理。
* [Kenney](https://www.kenney.nl/assets/) - 提供免费 (CC0 1.0 通用许可) 的 2D、3D、音频和 UI 游戏资产。
* [Poliigon](https://www.poliigon.com/) - 提供免费和付费的纹理 (可变分辨率)、模型、HDRI 和画笔。 提供免费插件以导出到 Blender 等软件。
* [Freesound](https://freesound.org/) - 提供免费的协作声音库，采用不同的 CC 许可协议。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint Developer](https://developer.wikimint.com/p/tools.html) - 面向网页开发者的免费工具，包括 CSS 压缩与解压缩、图像优化、图像调整大小、大小写转换、CSS 验证、JavaScript 编译、HTML 编辑等。
  * [ElevateAI](https://www.elevateai.com) - 每月免费提供高达 200 小时的音频转录。
  * [get.localhost.direct](https://get.localhost.direct) — 更好的 `*.localhost.direct` 万能公用 CA 签名的本地主机开发 SSL 证书，支持子域名。
  * [Framacloud](https://degooglisons-internet.org/en/) — 由法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的自由/开源软件和 SaaS 列表。
  * [github.com - FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的自由和开源软件中心。
  * [GitHub Education](https://education.github.com/pack) — 面向学生的免费服务合集。需要注册。
  * [Markdown Tools](https://markdowntools.com) - 用于在 Markdown 和 HTML、CSVs、PDFs、JSON、Excel 文件之间进行转换的工具。
  * [Microsoft 365 Developer Program](https://developer.microsoft.Multiplier/microsoft-365/dev-program) — 获取免费沙盒、工具以及构建 Microsoft 365 平台解决方案所需的其他资源。订阅可续约的 90 天 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5) (不包括 Windows)。如果您积极参与开发（通过遥测数据和算法进行衡量），它就会被续订。
  * [Pyrexp](https://pythonium.net/regex) — 免费的基于网页的正则表达式测试器和可视化工具，用于调试正则表达式。
  * [RedHat for Developers](https://developers.redhat.com) — 专为开发者提供的免费访问 Red Hat 产品，包括 RHEL、OpenShift、CodeReady 等。仅限个人计划。还提供免费电子书供参考。
  * [smsreceivefree.com](https://smsreceivefree.com/) — 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费发送和接收测试短信。
  * [SimpleBackups.com](https://simplebackups.com/) — 服务器和数据库（MySQL、PostgreSQL、MongoDB）备份自动化服务，直接存储在云存储提供商（AWS、DigitalOcean 和 Backblaze）。提供免费计划，支持 1 个备份。
  * [SnapShooter](https://snapshooter.com/) — DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持直接备份数据库、文件系统和应用程序备份到基于 s3 的存储。提供免费计划，支持为 1 个资源进行每日备份。
  * [Themeselection](https://themeselection.com/) — 精选的高质量、现代设计、专业且易于使用的免费管理面板模板、HTML 主题和 UI 工具包，帮助您更快地创建应用程序！
  * [Web.Dev](https://web.dev/measure/) — 这是一个免费工具，可以帮助您了解网站的性能并提高 SEO，从而提升搜索引擎的排名。
  * [SmallDev.tools](https://smalldev.tools/) — 一个面向开发者的免费工具，支持多种格式的编码和解码、HTML/CSS/JavaScript 压缩、美化、生成假/测试数据集，以及多种其他格式，并具有愉悦的界面。
  * [UseCSV by Layercode](https://layercode.com/usecsv) — 几分钟内为您的 Web 应用程序添加 CSV 和 Excel 导入功能。为您的用户提供愉快且健壮的数据导入体验。立即免费开始使用，无需任何信用卡信息，并开始集成 UseCSV。您可以创建无限数量的导入器并上传高达 100MB 的文件。
  * [Buttons Generator](https://markodenic.com/tools/buttons-generator/) — 100+ 按钮，可供您的项目使用。
  * [WrapPixel](https://www.wrappixel.com/) — 下载高质量的免费和高级管理面板模板，使用 Angular、React、VueJs、NextJS 和 NuxtJS 创建！
  * [Utils.fun](https://utils.fun/en) — 所有基于浏览器计算能力的离线日常开发工具，包括水印生成、屏幕录制、编码和解码、加密和解密、代码格式化等，完全免费，且不会将任何数据上传到云端进行处理。
  * [Free Code Tools](https://freecodetools.org/) — 有效且 100% 免费的代码工具。Markdown 编辑器、代码压缩/美化、QR 码生成器、Open Graph 生成器、Twitter 卡片生成器等。
  * [regex101](https://regex101.com/) — 免费网站，用于测试和调试正则表达式（regex）。它提供正则表达式编辑器和测试器，以及有用的文档和学习正则表达式的资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) — 100+ 开发工具，包括格式化程序、压缩器和转换器。
  * [AdminMart](https://adminmart.com/) — 高质量的免费和高级管理面板和网站模板，使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 创建！
  * [Glob tester](https://globster.xyz/) — 一个用于设计和测试 glob 模式的网站。它还提供学习 glob 模式的资源。
  * [SimpleRestore](https://simplerestore.io) - 轻松恢复 MySQL 备份。无需代码或服务器，即可将 MySQL 备份还原到任何远程数据库。
  * [360Converter](https://www.360converter.com/) - 免费的实用网站，可转换：视频转文本、音频转文本、语音转文本、实时音频转文本、YouTube 视频转文本、添加视频字幕等。对于短视频转换或短视频教程可能很有帮助:)
  * [QRCodeBest](https://qrcode.best/) - 使用 13 个模板创建自定义二维码，具有完全隐私和个人品牌功能。支持跟踪像素、项目分类和 QRCode.Best 上的无限团队席位。
  * [PostPulse](https://post-pulse.io) - 通过每月向 SEO 优化的域名发布由人工智能制作的帖子，提升您的在线存在感并提高 SEO 和网站排名。免费计划允许您每月手动发布一篇帖子。
  * [PageTools](https://pagetools.co/) - 提供一套永久免费的 AI 驱动工具，帮助您生成必要的网站政策、创建社交媒体简介、帖子和网页，具有简单的一键式界面。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 易于理解且免费的 MySQL EXPLAIN 输出可视化工具，用于优化慢速查询。
  * [Killer Coda](https://killercoda.com/)  - 浏览器中的交互式游乐场，用于学习 Linux、Kubernetes、容器、编程、DevOps 和网络