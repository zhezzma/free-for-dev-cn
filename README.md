# free-for.dev

开发人员和开源作者现在有许多提供免费套餐的服务，但要找到所有这些服务并做出明智的决策需要花费时间。

这是一份软件（软件即服务（SaaS）、平台即服务（PaaS）、基础设施即服务（IaaS）等）以及其他提供开发者免费套餐的服务清单。

这份清单的范围仅限于基础设施开发人员（系统管理员、DevOps从业者等）可能会觉得有用的内容。我们喜欢所有免费服务，但最好还是紧扣主题。有时候界限可能比较模糊，所以这份清单带有一定的主观性；如果我没有接受你的贡献，还请不要介意。

这份清单是由1600多人通过提交拉取请求（Pull Requests）、进行评审、提供想法以及完成相关工作而形成的。你也可以通过发送[拉取请求](https://github.com/ripienaar/free-for-dev)来帮助完善这份清单，添加更多服务或者删除那些套餐内容已变更或已停止提供的服务。

[![跟踪优秀清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这份清单仅针对即服务类（as-a-Service）的服务，不包括自托管软件。要符合列入清单的条件，服务必须提供免费套餐，而不仅仅是免费试用。如果免费套餐是按时间分段的，那么有效期至少应为一年。我们还会从安全角度考虑免费套餐，所以单点登录（SSO）是可以的，但我不会接受那些将传输层安全协议（TLS）限制在付费套餐中的服务。

# 目录

  * [主要云服务提供商的永久免费额度](#主要云服务提供商的永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [应用程序编程接口（APIs）、数据和机器学习](#应用程序编程接口（APIs）、数据和机器学习)
  * [构件仓库](#构件仓库)
  * [后端即服务（BaaS）](#后端即服务（BaaS）)
  * [低代码平台](#低代码平台)
  * [内容分发网络（CDN）和防护](#内容分发网络（CDN）和防护)
  * [持续集成（CI）和持续交付（CD）](#持续集成（CI）和持续交付（CD）)
  * [内容管理系统（CMS）](#内容管理系统（CMS）)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图上的数据可视化](#地图上的数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面（UI）](#设计和用户界面（UI）)
  * [设计灵感](#设计灵感)
  * [开发者博客网站](#开发者博客网站)
  * [域名系统（DNS）](#域名系统（DNS）)
  * [与Docker相关的内容](#与Docker相关的内容)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务（IaaS）](#基础设施即服务（IaaS）)
  * [集成开发环境（IDE）和代码编辑](#集成开发环境（IDE）和代码编辑)
  * [国际手机号码验证应用程序编程接口（API）和软件开发工具包（SDK）](#国际手机号码验证应用程序编程接口（API）和软件开发工具包（SDK）)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息传递和流媒体](#消息传递和流媒体)
  * [杂项](#杂项)
  * [监控](#监控)
  * [平台即服务（PaaS）](#平台即服务（PaaS）)
  * [包构建系统](#包构建系统)
  * [支付和计费集成](#支付和计费集成)
  * [隐私管理](#隐私管理)
  * [屏幕截图应用程序编程接口（APIs）](#屏幕截图应用程序编程接口（APIs）)
  * [与Flutter相关以及无需Mac构建iOS应用](#与Flutter相关以及无需Mac构建iOS应用)
  * [搜索](#搜索)
  * [安全和公钥基础设施（PKI）](#安全和公钥基础设施（PKI）)
  * [认证、授权和用户管理](#认证、授权和用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储和媒体处理](#存储和媒体处理)
  * [隧道、WebRTC、WebSocket服务器和其他路由器](#隧道、WebRTC、WebSocket服务器和其他路由器)
  * [测试](#测试)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
  * [与Vagrant相关的内容](#与Vagrant相关的内容)
  * [访客会话记录](#访客会话记录)
  * [网站托管](#网站托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件仿真（用JavaScript编写）](#基于浏览器的硬件仿真（用JavaScript编写）)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主要云服务提供商的永久免费额度

  * [谷歌云平台](https://cloud.google.com)
    * App Engine - 每日28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每日50,000次读取、20,000次写入、20,000次删除操作
    * Compute Engine - 1个非抢占式e2-micro实例，30GB硬盘，5GB快照存储（限于特定区域），每月从北美到所有区域目的地（不包括中国和澳大利亚）1GB网络出站流量
    * Cloud Storage - 5GB，1GB网络出站流量
    * Cloud Shell - 基于网络的Linux终端/主要集成开发环境（IDE），带有5GB持久存储。每周使用时长限制为60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月从北美1GB网络出站流量
    * Google Kubernetes Engine - 一个区域集群无集群管理费用。每个用户节点按标准Compute Engine定价收费
    * BigQuery - 每月1 TB查询量，每月10 GB存储
    * Cloud Build - 每日120构建分钟
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出站流量
    * [谷歌Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境。
    * [idx.dev](https://idx.dev) 谷歌项目IDX。在谷歌云上运行的在线VSCode。
    * 完整详细列表 - https://cloud.google.com/free

  * [亚马逊网络服务](https://aws.amazon.com)
    * [云前端服务（CloudFront）](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [云监控服务（CloudWatch）](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个警报
    * [代码构建服务（CodeBuild）](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [代码托管服务（CodeCommit）](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月10,000次请求
    * [代码管道服务（CodePipeline）](https://aws.amazon.com/codepipeline/) - 每月1个活跃管道
    * [DynamoDB数据库服务](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [弹性计算云服务（EC2）](https://aws.amazon.com/ec2/) - 每月750小时的t2.micro或t3.micro实例（12个月）。每月100GB出站流量
    * [弹性块存储服务（EBS）](https://aws.amazon.com/ebs/) - 每月30GB通用型（SSD）或磁性存储（12个月）
    * [弹性负载均衡服务（Elastic Load Balancing）](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [关系型数据库服务（RDS）](https://aws.amazon.com/rds/) - 每月750小时的db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型（SSD）存储，20GB存储备份（12个月）
    * [简单存储服务（S3）](https://aws.amazon.com/s3/) - 5GB标准对象存储，20,000次获取请求和2,000次放置请求（12个月）
    * [冰川存储服务（Glacier）](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda函数服务](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [简单通知服务（SNS）](https://aws.amazon.com/sns/) - 每月100万次发布
    * [简单电子邮件服务（SES）](https://aws.amazon.com/ses/) - 每月3,000封邮件（12个月）
    * [简单队列服务（SQS）](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [微软Azure](https://azure.microsoft.com)
    * [虚拟机服务（Virtual Machines）](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux虚拟机，1个B1S Windows虚拟机（12个月）
    * [应用服务（App Service）](https://azure.microsoft.com/services/app-service/) - 10个网络、移动或API应用程序（每日60 CPU分钟）
    * [函数服务（Functions）](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [开发测试实验室服务（DevTest Labs）](https://azure.microsoft.com/services/devtest-lab/) - 实现快速、简单且精简的开发测试环境
    * [活动目录服务（Active Directory）](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [活动目录B2C服务（Active Directory B2C）](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月存储50,000个用户
    * [Azure DevOps服务](https://azure.microsoft.com/services/devops/) - 5个活跃用户，不限数量的私有Git仓库
    * [Azure Pipelines服务](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，针对开源项目在Linux、macOS和Windows上不限时长
    * [微软物联网中心服务（Microsoft IoT Hub）](https://azure.microsoft.com/services/iot-hub/) - 每日8,000条消息
    * [负载均衡器服务（Load Balancer）](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [通知中心服务（Notification Hubs）](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [带宽服务（Bandwidth）](https://azure.microsoft.com/pricing/details/bandwidth/) - 每月15GB入站流量（12个月）和5GB出站流量
    * [Cosmos DB数据库服务](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU（请求单位）的预配吞吐量
    * [静态Web应用服务（Static Web Apps）](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用程序以及无服务器函数，提供免费SSL、身份验证/授权和自定义域名
    * [存储服务（Storage）](https://azure.microsoft.com/services/storage/) - 5GB本地冗余存储（LRS）文件或块存储（12个月）
    * [认知服务（Cognitive Services）](https://azure.microsoft.com/services/cognitive-services/) - 人工智能/机器学习应用程序编程接口（APIs）（计算机视觉、翻译器、面部检测、机器人等），包含免费层，有交易限制
    * [认知搜索服务（Cognitive Search）](https://azure.microsoft.com/services/search/#features) - 基于人工智能的搜索和索引服务，对10,000个文档免费
    * [Azure Kubernetes服务（Azure Kubernetes Service）](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [事件网格服务（Event Grid）](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [甲骨文云服务（Oracle Cloud）](https://www.oracle.com/cloud/)
    * 计算服务
       - 2个基于AMD的计算虚拟机，每个具有1/8 OCPU（最优计算单元）和1 GB内存
       - 4个基于Arm的Ampere A1核心和24 GB内存，可作为一个虚拟机或最多4个虚拟机使用
       - 当实例被判定为闲置时（[参考文档](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)），将被回收
    * 块存储卷 - 2个存储卷，总计200 GB（用于计算）
    * 对象存储 - 10 GB
    * 负载均衡器 - 1个实例，带宽10 Mbps
    * 数据库 - 2个数据库，每个20 GB
    * 监控服务 - 5亿个摄入数据点，10亿个检索数据点
    * 带宽 - 每月10 TB出站流量，基于x64的虚拟机速度限制为50 Mbps，基于ARM的虚拟机速度限制为500 Mbps * 核心数
    * 公共IP - 2个用于虚拟机的IPv4地址，1个用于负载均衡器的IPv4地址
    * 通知服务 - 每月100万次交付选项，每月发送1000封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM云服务（IBM Cloud）](https://www.ibm.com/cloud/free/)
    * 对象存储 - 每月25GB
    * Cloudant数据库 - 1 GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect服务 - 每月50,000次API调用
    * 可用性监控服务 - 每月300万个数据点
    * 日志分析服务 - 每日500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare服务](https://www.cloudflare.com/)
    * [应用服务（Application Services）](https://www.cloudflare.com/plans/) - 免费域名系统（DNS）服务，支持不限数量的域名，分布式拒绝服务（DDoS）防护，内容分发网络（CDN）以及免费SSL、防火墙规则和页面规则、网络应用防火墙（WAF）、机器人缓解、免费无计量速率限制（每个域名1条规则）、分析功能、电子邮件转发
    * [零信任与安全访问服务边缘（Zero Trust & SASE）](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，三个网络位置

    * [工作者（Workers）](https://developers.cloudflare.com/workers/) - 在Cloudflare的全球网络上免费部署无服务器代码——每日10万次请求。
    * [工作者键值存储（Workers KV）](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB，每月100万次A类操作，每月1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日读取500万行数据，每日写入10万行数据，1GB存储空间
    * [页面（Pages）](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署你的网络应用。每月500次构建，100个自定义域名，集成SSL，无限制可访问席位，无限制预览部署，并通过与Cloudflare工作者集成实现全栈功能。
    * [队列（Queues）](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量。

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [脑图板（Brainboard）](https://www.brainboard.co) - 一种协作解决方案，用于端到端地可视化构建和管理云基础设施。
  * [云66（Cloud 66）](https://www.cloud66.com/) - 个人项目免费（包含一台部署服务器、一个静态站点），云66为你提供在任何云上构建、部署和扩展应用程序所需的一切，无需为“服务器相关事务”而烦恼。
  * [普利米（Pulumi）](https://www.pulumi.com/) — 现代化的基础设施即代码平台，允许你使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform云。为多达500个资源提供免费的远程状态管理和团队协作功能。
  * [scalr.com](https://scalr.com/) - Scalr是一款Terraform自动化和协作（TACO）产品，用于在由Terraform管理的基础设施和配置上实现更好的协作和自动化。完全支持Terraform命令行界面（CLI），集成开放策略代理（OPA），并采用分层配置模型。无需单点登录（SSO）费用。包含所有功能。每月可免费使用50次运行。
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发人员在亚马逊网络服务（AWS）上自动化部署。在我们的免费套餐中，开发人员（单个用户）可以无限制地部署静态站点、网络服务和环境。我们每月提供20次免费的作业执行，免费套餐中包含预览和自动部署功能。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 为最多5名用户提供不限数量的公共和私有Git仓库，并带有用于持续集成/持续交付（CI/CD）的管道
  * [chiselapp.com](https://chiselapp.com/) — 不限数量的公共和私有Fossil仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，空间为100 MB，可容纳两名用户
  * [Codeberg](https://codeberg.org/) — 为免费和开源项目提供不限数量的公共和私有Git仓库（协作者数量不限）。由 [Forgejo](https://forgejo.org/) 提供支持。通过 [Codeberg Pages](https://codeberg.page/) 提供静态网站托管服务。通过 [Codeberg's CI](https://docs.codeberg.org/ci/) 提供持续集成/持续交付托管服务。通过 [Codeberg Translate](https://translate.codeberg.org/) 提供翻译托管服务。包括软件包和容器托管、项目管理以及问题跟踪功能
  * [GitGud](https://gitgud.io) — 不限数量的私有和公共仓库。永远免费。由GitLab和Sapphire提供支持。不提供持续集成/持续交付服务。
  * [GitHub](https://github.com/) — 不限数量的公共仓库和不限数量的私有仓库（协作者数量不限）。包括持续集成/持续交付、开发环境、静态托管、软件包和容器托管、项目管理以及人工智能辅助编程（AI Copilot）
  * [gitlab.com](https://about.gitlab.com/) — 为最多5名协作者提供不限数量的公共和私有Git仓库。包括持续集成/持续交付、静态托管、容器注册表、项目管理以及问题跟踪功能
  * [framagit.org](https://framagit.org/) — Framagit是Framasoft的软件锻造平台，基于Gitlab软件，包括持续集成、静态页面、项目页面和问题跟踪功能。
  * [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的友好分支，支持Mercurial
  * [ionicframework.com](https://ionicframework.com/appflow) - 用于使用Ionic开发应用程序的仓库和工具；同时还提供一个ionic仓库
  * [NotABug](https://notabug.org) — NotABug.org是一个基于Git的免费软件代码协作平台，面向开源许可项目
  * [OSDN](https://osdn.net/) - OSDN.net是为开源软件开发者提供的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库。
  * [Pagure.io](https://pagure.io) — Pagure.io是一个基于Git的免费开源软件代码协作平台，面向遵循自由和开源软件（FOSS）许可的项目
  * [perforce.com](https://www.perforce.com/products/helix-teamhub) — 提供1GB免费云空间以及Git、Mercurial或SVN仓库。
  * [pijul.com](https://pijul.com/) - 不限数量的免费开源分布式版本控制系统。其独特之处基于可靠的补丁理论，使其易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题。
  * [plasticscm.com](https://plasticscm.com/) — 对个人、开源软件和非营利组织免费
  * [projectlocker.com](https://projectlocker.com) — 一个免费的私有项目（支持Git和Subversion），空间为50 MB
  * [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务。不限数量的公共和私有仓库。
  * [savannah.gnu.org](https://savannah.gnu.org/) - 作为免费软件项目（针对GNU项目）的协同软件开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为免费软件项目（针对非GNU项目）的协同软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## 应用程序编程接口（APIs）、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于将复杂的JSON数据可视化、编辑、过滤并呈现为美观的表格形式。可通过链接保存和共享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将谷歌表格（Google Sheets）电子表格转换为强大的API，以便快速开发原型、网站、应用程序等。每月可免费调用500次。
  * [IP.City](https://ip.city) — 每日可免费进行100次IP地理位置查询
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的API套件，包括IP地理位置查询、性别检测或电子邮件验证等。
  * [Apify](https://www.apify.com/) — 网络抓取和自动化平台，可用于为任何网站创建API并提取数据。提供现成的抓取工具、集成代理和定制解决方案。免费计划每月包含5美元平台信用额度。
  * [APITemplate.io](https://apitemplate.io) - 通过简单的API或自动化工具（如Zapier和Airtable）自动生成图像和PDF文档。无需CSS/HTML知识。免费计划每月可生成50张图像，包含三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 提供全面了解API和后端运行情况所需的所有工具，具备自动API契约验证和监控功能。免费计划适用于每月请求量不超过20,000次的服务器。
  * [APIVerve](https://apiverve.com) - 可即时免费访问120多个API，注重质量、一致性和可靠性。免费计划每月可使用多达50个API令牌。
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和排查数据质量、性能漂移等问题。可免费使用两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于开发可即时访问的单页Web应用程序。支持Java、Node.js、Perl、Python和Ruby。
  * [Beeceptor](https://beeceptor.com) - 可在数秒内模拟REST API、伪造API响应等。每日可免费请求50次，提供公共仪表盘和开放端点（任何拥有仪表盘链接的人都可查看提交内容和答案）。
  * [bigml.com](https://bigml.com/) — 托管式机器学习算法平台。开发任务免费且无限制，每个任务的数据限制为16 MB。
  * [Browse AI](https://www.browse.ai) — 用于在网络上提取和监控数据。每月免费提供50个积分。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、抓取、AI代理网络访问、图像/PDF生成等。免费计划每月可请求1000次。
  * [Bruzu](https://bruzu.com/) — 自动化图像生成。通过API、集成工具或无代码表格生成大量图像变体。API免费使用，但会添加水印。
  * [Calendarific](https://calendarific.com) - 面向200多个国家的企业级公共节假日API服务。免费计划每月可调用1000次。
  * [Canopy](https://www.canopyapi.co/) - 用于亚马逊（Amazon.com）产品、搜索和类别数据的GraphQL API。免费计划每月可调用100次。
  * [Clarifai](https://www.clarifai.com) — 用于自定义人脸识别和检测的图像API，能够训练AI模型。免费计划每月可调用5000次。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，可完全访问包含文档转换、病毒扫描等功能的庞大API库，每月可调用800次。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备英伟达特斯拉K80 GPU。
  * [Collect2](https://collect2.com) — 创建API端点以测试、自动化和连接网络钩子（webhooks）。免费计划允许创建两个数据集，包含2000条记录、一个转发器和一个警报。
  * [CometML](https://www.comet.com/site/) - 用于实验跟踪、模型生产管理、模型注册和完整数据沿袭的MLOps（机器学习运维）平台，涵盖从训练到生产的整个工作流程。对个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可从任何前端构建、下单和管理订单。开发者计划每月可免费处理100个订单，支持最多1000个库存保有单位（SKUs）。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换工具，支持文档、图像、视频、音频和电子书等格式。提供REST API，支持Node.js、PHP、Python库。付费计划支持最大50 GB的文件。免费版受文件大小和每日转换次数限制。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费版每日可请求最多100次。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用程序之间同步数据。能够创建实时仪表盘和报告、转换和处理数据值、收集和备份数据洞察信息。免费计划用户数量无限制，每月可运行100次，处理1000行数据，集成数量无限制。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放式编辑器和简单的API，从可重复使用的模板自动生成PDF文档。免费计划每月可生成100个PDF文档，包含三个模板。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月可请求10,000次。
  * [CurrencyScoop](https://currencyscoop.com) - 面向金融科技应用的实时货币数据API。免费计划每月可调用5000次。
  * [Cube](https://cube.dev/) - Cube可帮助数据工程师和应用程序开发人员从现代数据存储中访问数据，将其组织成一致的定义，并将其提供给每个应用程序。使用Cube的最快方式是通过Cube Cloud，其免费版每月可处理1GB数据。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单免费的文件共享服务。数据在被访问后自动销毁。可通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需编写代码即可将Airtable连接到任何应用程序或API。提供类似Postman的界面，用于在Airtable中运行API请求。预构建了与数十个应用程序的集成。免费计划每月可运行100次。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理并将数据导入Salesforce的工具。免费计划每月可处理最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - 由Jetbrains开发的Python笔记本。每月提供10 GB存储空间和120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 一款浏览器扩展程序（支持谷歌Chrome和微软Edge浏览器），用于从网页提取数据并保存为CSV或Excel格式。免费计划每月可处理500个页面。
  * [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter笔记本部署为自助服务工具的API。
  * [DB-IP](https://db-ip.com/api/free) - 免费的IP地理位置查询API，每个IP每日可请求1000次。lite数据库遵循CC-BY 4.0许可协议，也可免费使用。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库架构设计和建模工具，免费入门计划可创建2个数据库模型，每个模型包含10个表。
  * [DeepAR](https://developer.deepar.ai) — 通过一个软件开发工具包（SDK）为任何平台提供增强现实面部滤镜。免费计划支持每月最多10个活跃用户（MAU），可同时追踪最多4张人脸。
  * [Deepnote](https://deepnote.com) - 一款新的数据科学笔记本。与Jupyter兼容，支持实时协作并可在云端运行。免费版包括无限制的个人项目、最多750小时的标准硬件使用时长，团队最多可容纳3名编辑人员。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的网络抓取和数据提取平台，可将任何网站转换为数据集或作为API使用。免费计划每月可请求5000个页面。

  * [Doczilla](https://www.doczilla.app/) — 软件即服务（SaaS）应用程序编程接口（API），可直接从HTML/CSS/JS代码生成截图或PDF文件。免费计划每月允许生成250份文档。
  * [Doppio](https://doppio.sh/) — 托管式API，使用顶级渲染技术生成并私密存储PDF文件和截图。免费计划每月允许生成400份PDF文件和截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动应用、网络应用和物联网应用的开源REST API后端。可连接任何SQL/NoSQL数据库、文件存储系统或外部服务，并立即创建一个包含实时文档和用户管理功能的综合性REST API平台。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板，通过JSON到PDF的API生成PDF文档。免费计划每月允许50次API调用，并可访问模板库。
  * [Efemarai](https://efemarai.com) - 机器学习（ML）模型和数据的测试与调试平台。可可视化任何计算图。为开发者提供每月30次免费调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 免费的基于网络的HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) - PDF生成器API，带有拖放式模板编辑器，提供软件开发工具包（SDK）和无代码集成功能。免费计划每月有250页的额度，用户数量无限制，并提供三个模板。
  * [Fern](https://buildwithfern.com) - 使用API定义生成流行编程语言的SDK，并生成API参考文档网页。可向API参考中添加Markdown页面，并通过Fern进行托管，以获得完整的文档解决方案。完全支持OpenAPI。
  * [file.coffee](https://file.coffee/) - 一个平台，可存储不超过15MB/文件（注册账号后可存储30MB/文件）。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 筛查信用卡支付交易中的欺诈行为。此REST API将根据订单的输入参数检测所有可能的欺诈特征。免费微型计划每月可处理500笔交易。
  * [Geekflare API](https://geekflare.com/api) - Geekflare API可用于截图、网站审计、TLS扫描、DNS查找、测试首字节时间（TTFB）等操作。免费计划提供3000次API请求额度。
  * [GeoCod](https://geocod.xyz) — 免费地理编码API：将邮政地址转换为地理坐标，或将地理坐标转换为邮政地址（反向地理编码）。
  * [GeoDataSource](https://www.geodatasource.com) — 位置搜索服务，通过纬度和经度坐标查找城市名称。每月可免费进行500次API查询。
  * [Geolocated.io](https://geolocated.io) — IP地理定位API，拥有多洲服务器，为爱好者提供永久免费计划，每月可请求60000次。
  * [Glitterly](https://glitterly.app/) - 从基础模板以编程方式生成动态图像。提供RESTful API和无代码集成功能。免费套餐每月可生成50张图像，提供五个模板。
  * [GoodData](https://www.gooddata.com/) - 数据即服务 - 创建交互式且富有洞察力的仪表板。免费套餐包含五个工作区，每个工作区100 MB存储空间。
  * [Hex](https://hex.tech/) - 一个用于笔记本、数据应用程序和知识库的协作数据平台。提供免费社区版，支持最多3位作者和五个项目。每位作者有一个计算配置文件，配备4GB内存。
  * [Hook0](https://www.hook0.com/) - Hook0是一个开源的网络钩子即服务（WaaS），使在线产品能够轻松提供网络钩子功能。可免费分发每月最多3000个事件，并保留七天的历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 一个免费、快速且美观的API请求构建器。
  * [Hybiscus](https://hybiscus.dev/) - 使用简单的声明式API构建PDF报告。免费套餐每月可生成最多100份单页报告，并可自定义调色板和字体。
  * [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问70多个（云）平台，如Exact Online、Twinfield、ActiveCampaign或Visma等。包含数据复制和交换功能。为开发者和实施顾问提供免费计划。针对特定平台免费，但数据量有限制。
  * [ipaddress.sh](https://ipaddress.sh) — 一个简单的服务，用于获取不同[格式](https://about.ipaddress.sh/)的公共IP地址。
  * [ipbase.com](https://ipbase.com) - IP地理定位API - 提供永久免费计划，每月可请求150次。
  * [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API - 为开发者提供永久免费计划，每月请求限制为30000次（每天1000次）。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract公司的IP地理定位API - 提供广泛的免费计划，每月可请求20000次。
  * [IP2Location](https://www.ip2location.com) — 免费增值型IP地理定位服务。LITE数据库可免费下载。将数据库导入服务器并执行本地查询，以确定城市、坐标和互联网服务提供商（ISP）信息。
  * [IP2Location.io](https://www.ip2location.io/) — 免费增值型、快速且可靠的IP地理定位API，用于确定地理位置数据，如城市、坐标、ISP等。免费计划每月提供30000个积分。订阅付费计划可获取更多高级功能，或联系我们获取个性化计划。
  * [ipapi](https://ipapi.co/) - Kloudend, Inc公司的IP地址位置API - 一个基于AWS构建的可靠地理定位API，受财富500强企业信赖。免费套餐无需注册，每月可查询30000次（每天1000次）。
  * [ipapi.is](https://ipapi.is/) - 一个由开发者为开发者打造的可靠IP地址API，具有最佳的主机检测能力。免费计划无需注册，可查询1000次。
  * [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月最多50000次）的IP地址数据API。提供包含地理位置、公司、运营商、IP范围、域名、滥用联系人等详细信息的API。所有付费API均可免费试用。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代网络提供快速、准确且免费（无限制或每月最多10000 - 50000次）的API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话号码验证、客户端信息等。
  * [IPTrace](https://iptrace.io) — 一个极其简单的API，为企业提供可靠且有用的IP地理定位数据。
  * [JSON2Video](https://json2video.com) - 一个视频编辑API，用于通过编程或无代码方式自动化视频营销和社交媒体视频制作。
  * [JSON IP](https://getjsonip.com) — 返回发出请求的客户端的公共IP地址。免费套餐无需注册。通过跨源资源共享（CORS），可直接从浏览器使用客户端JavaScript请求数据。对于监测客户端和服务器IP地址变化的服务很有用。请求次数无限制。
  * [JSON Serve](https://jsonserve.com/) — 一个免费服务，帮助开发者存储JSON对象，并在其应用程序中将该JSON用作REST API。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建假的REST API，并自定义HTTP状态码、标头和响应主体。
  * [konghq.com](https://konghq.com/) — API市场以及强大的私有和公共API工具。在免费套餐下，某些功能（如监控、警报和支持）受到限制。
  * [Kreya](https://kreya.app) — 免费的gRPC图形用户界面（GUI）客户端，用于调用和测试gRPC API。可通过服务器反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据改进机器学习模型。可免费使用最多1000个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 一个登录安全API，用于检测欺诈性和可疑登录行为并通知客户。每月可免费检测1000次登录。

  * [市场数据应用程序编程接口（Market Data API）](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。其“永远免费”的API层级允许每日进行100次API请求，且不收取费用。
  * [Meteosource天气应用程序编程接口（Meteosource Weather API）](https://www.meteosource.com/) — 提供全球天气API，用于获取当前和预测的天气数据。天气预报基于多种天气模型的机器学习组合，以实现更高的准确性。免费计划每日可调用400次。
  * [microlink.io](https://microlink.io/) – 可将任何网站转化为数据，例如元标签标准化、美观的链接预览、抓取功能或截图服务等。每日可免费请求100次。
  * [Mindee](https://developers.mindee.com/docs) – Mindee是一款强大的光学字符识别（OCR）软件和以API为先的平台，它通过使用计算机视觉和机器学习对关键信息进行数据识别，来标准化文档处理层，从而帮助开发人员实现应用程序工作流程的自动化。免费层级每月可处理250页文档。
  * [Mintlify](https://mintlify.com) — API文档的现代标准。具有美观且易于维护的用户界面组件、应用内搜索功能以及交互式演练环境。支持1名编辑人员免费使用。
  * [monkeylearn.com](https://monkeylearn.com/) — 使用机器学习进行文本分析，每月可免费查询300次。
  * [MockAPI](https://www.mockapi.io/) — MockAPI是一个简单的工具，可让你快速模拟API、生成自定义数据，并通过RESTful接口执行操作。MockAPI旨在作为原型设计、测试和学习工具。可免费创建一个项目，每个项目包含4个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly是一款可靠的开发工具，用于API模拟和功能标志管理。通过直观的界面快速生成和控制模拟API。免费层级每日可请求500次。
  * [Mocki](https://mocki.io) - 一款工具，可让你创建与GitHub存储库同步的模拟GraphQL和REST API。简单的REST API无需注册即可免费开发和使用。
  * [Mocko.dev](https://mocko.dev/) — 代理你的API，可选择在云端模拟哪些端点并检查流量，且免费使用。加速你的开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 一个简单的网络应用程序，用于为模拟HTTP请求生成自定义HTTP响应。也有[开源版本](https://github.com/julien-lafont/Mocky)可供使用。
  * [reqres.in](https://reqres.in) - 一个免费的托管REST-API，可随时响应你的AJAX请求。
  * [microenv.com](https://microenv.com) — 为开发人员创建虚拟REST API，还可在Docker容器中生成代码和应用程序。
  * [多出口IP地址检查器（Multi-Exit IP Address Checker）](https://ip.alstra.ca/) — 一个免费且简单的工具，用于检查你在多个节点上的出口IP地址，了解你的IP在不同全球区域和服务中的显示情况。对于测试基于规则的DNS拆分工具（如Control D）很有用。
  * [neptune.ai](https://neptune.ai/) - 记录、存储、显示、组织、比较和查询所有你的机器学习运维（MLOps）元数据。对个人用户免费：1名成员，100 GB元数据存储空间，每月200小时监控时长。
  * [新闻应用程序编程接口（News API）](https://newsapi.org) — 通过代码在网络上搜索新闻，并获取JSON格式的结果。开发人员每月可免费查询3000次。
  * [GoCardless](https://gocardless.com/) — 免费的开放银行数据API，符合PSD2标准。可在欧盟和英国将2300多家银行与你的应用程序/软件连接。
  * [Nyckel](https://www.nyckel.com) — 训练、部署和调用图像及文本机器学习模型。可免费使用最多5000份训练数据进行训练，每月可免费调用模型1000次。
  * [Observable](https://observablehq.com/) — 一个用于创建、协作和学习数据的平台。免费：不限笔记本数量，不限发布次数，每个笔记本可支持5名编辑人员。
  * [OCR.Space](https://ocr.space/) — 一个光学字符识别（OCR）API，可解析图像和PDF文件，并以JSON格式返回文本结果。每月可免费请求25000次。
  * [Duply.co](https://duply.co) — 通过API和URL创建动态图像，只需设计一次模板即可重复使用。免费层级每月可通过API和URL创建70张图像，通过表单可创建最多100张图像。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转换为API，可免费创建五个项目。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单的API轻松将HTML或URL转换为PDF格式。每月可免费转换100次。
  * [PDF-API.io](https://pdf-api.io) - PDF自动化API，提供可视化模板编辑器、HTML转PDF功能、动态数据集成以及通过API进行PDF渲染。免费计划包含一个模板，每月可生成100个PDF文件。
  * [Pixela](https://pixe.la/) - 免费的日流数据库服务。所有操作均通过API执行，还可通过热图和折线图进行可视化展示。
  * [Postbacks](https://postbacks.io/) - 可在稍后时间请求HTTP回调。注册后可免费请求8000次。
  * [Postman](https://postman.com) — 使用Postman（一个用于API开发的协作平台）简化工作流程并更快地创建更好的API。可永远免费使用Postman应用程序。Postman云功能在一定限制下也可永远免费使用。
  * [Insomnia](https://insomnia.rest) - 用于设计和测试API的开源API客户端，支持REST和GraphQL。
  * [PrefectCloud](https://www.prefect.io/cloud/) — 一个用于数据流自动化的完整平台。所有计划每月均包含20000次免费运行次数，这足以满足大多数小型企业的提取、转换和加载（ETL）需求。
  * [Preset Cloud](https://preset.io/) - 一个托管的Apache Superset服务。对于不超过5名用户的团队永远免费，提供不限数量的仪表板和图表、无代码图表构建器以及协作式SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 面向创作者和开发人员的提示工程平台。它提供提示工程库、表单和API。免费计划提供一个提示表单、一个提示API端点，每月可生成30次。
  * [PromptLoop](https://www.promptloop.com/) - 使用简单的电子表格公式结合人工智能和大型语言模型（如GPT-3），在Google Sheets中转换、理解和分析文本。每月前2000个积分免费。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们会为你解决验证码问题，并防止你被封禁。前1000次调用免费。
  * [公共API的Github仓库（Public-Apis Github Repo）](https://github.com/public-apis/public-apis) — 一个免费公共API列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许你通过模板根据输入自动生成图像。免费计划允许你每周最多创建100张图像。
  * [QuickMocker](https://quickmocker.com/) — 在你自己的子域名下管理在线虚拟API端点，将请求转发到本地主机URL以进行网络钩子开发和测试，为URL路径使用正则表达式和多种HTTP方法，对端点进行优先级排序，提供100多个短代码（动态或虚拟响应值）用于响应模板化，从JSON格式的OpenAPI（Swagger）规范导入，代理请求，通过IP地址和授权标头限制端点。免费账户提供一个随机子域名、十个端点、5个正则表达式URL路径、每个端点50个短代码、每日100次请求以及请求日志中的50条历史记录。
  * [Rapidapi](https://rapidapi.com/) - 全球最大的API中心。数百万开发人员可在此查找并连接数千个API，通过有趣的挑战（附带解决方案！）和交互式示例进行API开发。
  * [RequestBin.com](https://requestbin.com) — 创建一个免费端点，你可以向其发送HTTP请求。发送到该端点的任何HTTP请求都将记录其关联的有效负载和标头，以便你观察来自网络钩子和其他服务的建议。

  * [ROBOHASH（机器人哈希）](https://robohash.org/) - 一个网络服务，可根据任何文本生成独特且炫酷的图像。
  * [SaturnCloud（土星云）](https://saturncloud.io/) - 数据科学云环境，允许运行Jupyter笔记本和Dask集群。每月提供30小时的免费计算时长和3小时的Dask使用时长。
  * [Scraper's Proxy（爬虫代理）](https://scrapersproxy.com) — 用于网络爬虫的简单HTTP代理API。可匿名进行数据抓取，无需担心限制、封禁或验证码问题。每月前100次成功抓取免费，包括JavaScript渲染（如需更多可联系客服）。
  * [ScrapingAnt（爬虫蚁）](https://scrapingant.com/) — 无头Chrome爬虫API和免费的已验证代理服务。支持JavaScript渲染、高级轮转代理、避免验证码。提供免费套餐。
  * [ScraperBox（爬虫盒）](https://scraperbox.com/) — 使用真实Chrome浏览器和代理轮转的不易被检测的网络爬虫API。通过简单的API调用即可抓取任何网页。免费套餐每月有1000次请求额度。
  * [ScrapingDog（爬虫狗）](https://scrapingdog.com/) — Scrapingdog可处理数百万个代理、浏览器和验证码，通过一次API调用即可为你提供任何网页的HTML内容。它还包括适用于Chrome和Firefox的网络爬虫以及用于即时抓取需求的软件。提供免费套餐。
  * [scrapinghub.com（爬虫中心）](https://scrapinghub.com) — 具有可视化界面和插件的数据抓取工具。免费套餐包括在共享服务器上无限制地进行数据抓取。
  * [Simplescraper（简单爬虫）](https://simplescraper.io) — 在每次操作后触发你的网络钩子（webhook）。免费套餐包含100个云抓取积分。
  * [Select Star（选择之星）](https://www.selectstar.com/) - 一个智能数据发现平台，可自动分析和记录你的数据。提供免费的轻量级套餐，包含1个数据源、最多100个表和10个用户。
  * [Sheetson（表格云）](https://sheetson.com) - 可将任何Google表格即时转换为RESTful API。提供免费套餐。
  * [Shipyard（船坞）](https://www.shipyardapp.com) — 面向云端的低代码数据编排平台。结合低代码模板和你自己的代码（Python、Node.js、Bash、SQL）进行构建。我们的免费开发者套餐为单个用户每月提供10小时的运行时长，足以自动化多个工作流程。
  * [shrtcode API（短码API）](https://shrtco.de/docs) - 无需授权且无请求限制的免费URL缩短API。
  * [SerpApi（搜索引擎结果页面API）](https://serpapi.com/) - 实时搜索引擎抓取API。为谷歌、YouTube、必应、百度、沃尔玛等众多平台返回结构化的JSON结果。免费套餐每月包含100次成功的API调用。
  * [SmartParse（智能解析）](https://smartparse.io) - SmartParse是一个数据迁移和CSV到API平台，提供节省时间和成本的开发者工具。免费套餐每月包含300个处理单元，支持浏览器上传、数据隔离、断路器和任务警报功能。
  * [Sofodata（软数据）](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件后，即可通过其API即时访问数据，从而加快应用程序开发速度。免费套餐包含2个API和每月2500次API调用，无需信用卡。
  * [Sqlable（SQL工具集）](https://sqlable.com/) - 一系列免费的在线SQL工具，包括SQL格式化和验证工具、SQL正则表达式测试工具、假数据生成器以及交互式数据库沙盒环境。
  * [Stoplight（信号灯）](https://stoplight.io/) - 用于协作设计和记录API的软件即服务（SaaS）。免费套餐提供免费的设计、模拟和文档工具。
  * [Svix（斯维克斯）](https://www.svix.com/) - 网络钩子即服务。每月可免费发送多达50,000条消息。
  * [TemplateTo（模板到）](https://templateto.com) - 使用我们的拖放式编辑器和简单API，根据可重复使用的模板自动生成PDF/TXT文档。免费套餐每月可生成450个PDF文件，包含3个模板。
  * [TinyMCE（小MCE）](https://www.tiny.cloud) - 富文本编辑API。核心功能可免费无限制使用。
  * [Treblle（特雷布尔）](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。具备高级API日志聚合、可观测性、文档和调试功能。你可以免费使用所有功能，但免费套餐每月请求限制为250,000次。
  * [Webhook Store（网络钩子存储）](https://www.openwebhook.io) - 用于存储第三方网络钩子并在本地主机上进行调试的工具（类似ngrok风格）。开源且可自行托管。提供免费的个人域名 *username*.github.webhook.store和免费的公共域名 *anything*.webhook.store。
  * [Weights & Biases（权重与偏差）](https://wandb.ai) — 面向开发者的MLOps平台。通过实验跟踪、数据集版本控制和模型管理，更快地构建更好的模型。仅针对个人项目提供免费套餐，包含100GB存储空间。
  * [wit.ai（智慧AI）](https://wit.ai/) — 面向开发者的自然语言处理（NLP）工具。
  * [wolfram.com（沃尔夫勒姆）](https://wolfram.com/language/) — 云端内置的基于知识的算法。
  * [wrapapi.com（包装API）](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30,000次API调用额度。
  * [ZenRows（禅行）](https://www.zenrows.com/) — 网络爬虫API和代理服务器，可绕过任何反机器人解决方案，同时提供JavaScript渲染、轮转代理和地理定位功能。免费套餐包含1000次API调用。
  * [Zenscrape（禅抓取）](https://zenscrape.com/web-scraping-api) — 带有无头浏览器、住宅IP和简单定价的网络爬虫API。每月1000次免费API调用，学生和非营利组织有额外积分。
  * [ip-api（IP地址查询API）](https://ip-api.com) — IP地理位置查询API，非商业用途免费，无需API密钥，免费套餐下同一IP地址每分钟限制45次请求。
  * [WebScraping.AI（网络爬虫AI）](https://webscraping.ai) - 简单的网络爬虫API，内置解析、Chrome渲染和代理功能。每月2000次免费API调用。
  * [Zipcodebase（邮编库）](https://zipcodebase.com) - 免费的邮编API，可访问全球邮政编码数据。每月10,000次免费请求。
  * [huggingface.co（拥抱脸）](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署自然语言处理（NLP）模型。每月免费使用上限为30,000个输入字符。
  * [vatcheckapi.com（增值税号码验证API）](https://vatcheckapi.com) - 简单且免费的增值税号码验证API。每月500次免费请求。
  * [numlookupapi.com（电话号码验证API）](https://numlookupapi.com) - 免费的电话号码验证API - 每月100,000次免费请求。
  * [Volca（沃尔卡）](https://volca.io#api) - 提供编程语言、数据库系统等技术列表的免费API。无限制免费请求。
  * [Query.me（查询我）](https://query.me) - 协作式数据笔记本，可执行类似脚本的操作，并允许通过SQL、API和许多自定义模块（如Slack和电子邮件）获取和发送数据。对小型团队免费。
  * [ERD Lab（实体关系图实验室）](https://www.erdlab.io) — 面向开发者的免费云实体关系图（ERD）工具。
  * [What The Diff（差异何在）](https://whatthediff.ai) - 由人工智能驱动的代码审查助手。免费套餐每月限制25,000个令牌（约10个拉取请求）。
  * [Zipcodestack（邮编栈）](https://zipcodestack.com) - 免费的邮编API和邮政编码验证工具。每月10,000次免费请求。
  * [OpenWeb Ninja（开放网络忍者）](https://www.openwebninja.com/) - 极其全面的实时搜索引擎结果页面（SERP）和公共数据API：谷歌搜索、购物、招聘、图片、镜头、新闻、谷歌地图商家/地点、评论、照片、网站电子邮件和社交联系人抓取、亚马逊、Yelp等。所有API均提供免费套餐，每月有100至200次免费请求。
  * [Tavily AI（塔维利AI）](https://tavily.com/) - 用于在线搜索、快速洞察和全面研究的API，具备组织研究结果的能力。免费套餐每月1000次请求，无需信用卡。
  * [Composio（组合）](https://composio.dev/) - 人工智能代理和大型语言模型（LLMs）的集成平台。可集成代理互联网上的200多种工具。

  * [Zuplo](https://zuplo.com/) - 免费的API管理平台，用于设计、构建并将API部署到边缘（Edge：网络边缘，靠近用户端的网络位置）。可在数分钟内为任何API添加API密钥认证、速率限制、开发者文档以及盈利模式（Monetization：货币化，盈利模式）。原生支持OpenAPI，通过网络标准API和TypeScript可完全编程。免费计划提供最多10个项目、不限数量的生产边缘环境、250个API密钥、每月10万次请求以及1GB的出站流量。

**[⬆️ 返回顶部](#目录)**

## 构件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个构件仓库（artifact repository），支持众多包格式，如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS。包含包扫描工具XRay以及持续集成/持续交付（CI/CD）工具Pipelines（原名为Shippable），免费套餐每月提供2000分钟的CI/CD使用时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认构件仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的、私有和公共的Maven和PyPi仓库。对开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中化的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费套餐，对开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 用于GitHub上JVM和Android项目的Maven仓库，对公共项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 易于使用的仓库托管服务，支持Maven、RPM、DEB、PyPi、NPM和RubyGem包（有免费套餐）。
  * [repsy.io](https://repsy.io) — 提供1GB免费的私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 用于Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公共构件仓库。对公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展人工智能（AI）模型，开发、训练和部署AI应用程序。免费计划：公共项目，5GB存储空间，基础实例。
  * [RepoForge](https://repoforge.io) - 用于Python、Debian、NPM包和Docker注册表的私有云托管仓库。对开源/公共项目提供免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化了包管理，支持npm、PyPI、Docker、Go、Helm等。可免费试用，云服务提供10GB存储空间、10GB带宽、100个包以及不限用户数量；也可自行托管供个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3Cols.com/) - 一个免费的基于云的代码片段管理器，适用于个人和协作式代码管理。
  * [Bitwarden](https://bitwarden.com) — 对于个人、团队和商业组织而言，存储、共享和同步敏感数据的最简单且最安全的方式。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用程序。公共访问群组免费，用户数量、聊天记录和集成功能均无限制。此外，它还提供可自行托管的开源版本。
  * [cally.com](https://cally.com/) — 帮助找到适合开会的完美时间和日期。使用简单，对小型和大型团队都适用。
  * [Calendly](https://calendly.com) — Calendly是用于连接和安排会议的工具。免费计划为每个用户提供1个日历连接和不限次数的会议。同时还提供桌面和移动应用程序。
  * [Discord](https://discord.com/) — 具有公共/私人房间的聊天工具。支持Markdown文本、语音、视频和屏幕共享功能。对不限数量的用户免费。
  * [Telegram](https://telegram.org/) — 适合所有希望获得快速、可靠的消息和通话服务的用户。商业用户和小型团队可能会喜欢其大型群组、用户名、桌面应用程序以及强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建工具。可进行截图、记录流程并与团队协作。还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 与团队实时交谈和协作。支持集成开发环境（IDE）的结对编程、终端共享、语音、视频和屏幕共享。对小型团队免费。
  * [Dyte](https://dyte.io) - 对开发者最友好的实时视频和音频软件开发工具包（SDK），具有协作插件，可提高工作效率和参与度。免费套餐包含每月10,000分钟的实时视频/音频使用时长。
  * [evernote.com](https://evernote.com/) — 用于整理信息的工具。可与他人共享笔记并协同工作。
  * [Fibery](https://fibery.io/) — 连通的工作区平台。对单个用户免费，提供最高2GB的磁盘空间。
  * [flock.com](https://flock.com) — 团队沟通的更快捷方式。消息、频道、用户、应用程序和集成功能均无限制且免费。
  * [Gather](https://www.gather.town/) - 一种更好的在线聚会方式。Gather围绕完全可定制的空间打造，使与社区成员互动就像现实生活中一样轻松。对最多10名并发用户免费。
  * [gokanban.io](https://gokanban.io) - 基于语法、无需注册的看板，可快速使用。免费且无限制。
  * [flat.social](https://flat.social) - 用于团队会议和欢乐时光社交活动的交互式可定制空间。会议次数无限制，对最多8名并发用户免费。
  * [GitDailies](https://gitdailies.com) - 关于团队在GitHub上的提交和拉取请求活动的每日报告。包含推送可视化工具、同行认可系统和自定义警报生成器。免费套餐支持不限数量的用户、3个仓库和3个警报配置。
  * [gitter.im](https://gitter.im/) — 与GitHub集成的聊天工具。公共和私人房间数量无限制，对最多25人的团队免费。
  * [Hackmd.io](https://hackmd.io/) - 用于Markdown格式文档/文件的实时协作和写作工具。类似于Google Docs，但针对Markdown文件。“笔记”数量无限制且免费，但私人笔记和模板的协作者（受邀者）数量[将受到限制](https://hackmd.io/pricing)。
  * [hangouts.google.com](https://hangouts.google.com/) — 一个免费的集中聊天场所，需要谷歌账号。
  * [HeySpace](https://hey.space) - 带有聊天、日历、时间表和视频通话功能的任务管理工具。对最多5名用户免费。
  * [helplightning.com](https://www.helplightning.com/) — 通过增强现实技术提供视频帮助。免费版不包含分析、加密和支持功能。
  * [ideascale.com](https://ideascale.com/) — 允许客户提交想法并投票，对1个社区中的25名成员免费。
  * [Igloo](https://www.igloosoftware.com/) — 用于共享文档、博客、日历等的内部门户。对最多10名用户免费。
  * [Keybase](https://keybase.io/) — Keybase是Slack的一个自由开源软件（FOSS）替代方案；它能保障从家庭到社区再到公司的所有人的聊天和文件安全。
  * [Google Meet](https://meet.google.com/) — 使用Google Meet满足企业的在线视频会议需求。Meet提供安全、易于加入的在线会议服务。
  * [/meet for Slack](https://meetslack.com) - 在Slack的任何频道、群组或私信中使用/meet即可直接启动Google会议。免费且无限制。
  * [Livecycle](https://www.livecycle.io/) — Livecycle是一个包容性协作平台，可让跨职能产品团队和开源项目的工作流程更加顺畅。
  * [Lockitbot](https://www.lockitbot.com/) — 在Slack中预订和锁定共享资源，如房间、开发环境、服务器等。对最多2个资源免费。
  * [MarkUp](https://www.markup.io/) — MarkUp可让你直接在网站、PDF和图像上收集反馈。
  * [Proton Pass](https://proton.me/pass) — 带有内置电子邮件别名、双因素认证（2FA）、共享和通行密钥功能的密码管理器。可在网页、浏览器扩展程序、移动应用程序和桌面端使用。
  * [Visual Debug](https://visualdebug.com) - 用于改善客户与开发人员沟通的可视化反馈工具。
  * [meet.jit.si](https://meet.jit.si/) — 一键式视频通话和屏幕共享，免费使用。
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free) — Microsoft Teams是一个基于聊天的数字中心，将对话、内容和应用程序整合在一个地方，提供统一的体验。对最多50万名用户免费。
  * [Miro](https://miro.com/) - 适用于分布式团队的可扩展、安全、跨设备且企业级就绪的协作白板。采用免费增值计划。
  * [nootiz](https://www.nootiz.com/) - 用于在任何网站上收集和管理可视化反馈的首选工具。
  * [Notion](https://www.notion.so/) - Notion是一个支持Markdown的笔记和协作应用程序，集成了任务、维基和数据库功能。该公司将此应用描述为一个集笔记、项目管理和任务管理于一体的工作区。除了跨平台应用程序外，还可通过大多数网络浏览器访问。
  * [Nuclino](https://www.nuclino.com) - 一个轻量级的协作式维基，用于存储团队的所有知识、文档和笔记。免费计划包含所有基本功能，支持最多50个条目和5GB存储空间。
  * [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，带有嵌入式视频聊天、绘图板和在线代码编辑器，可在浏览器中编译和运行代码。只需一键即可创建远程面试房间。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一个面向团队的简单时间表和时间跟踪应用程序。免费计划为最多10名用户提供时间跟踪和生成报告功能。
  * [PageShare.dev](https://www.pageshare.dev) - 无需部署网站即可为GitHub拉取请求添加可视化审查功能。每月最多可免费使用10个页面，总存储空间为100MB。
  * [Pendulums](https://pendulums.io/) - Pendulums是一个免费的时间跟踪工具，具有易用的界面和有价值的统计功能，可帮助你更好地管理时间。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用程序。用户数量和消息历史无限制，永远免费。
  * [Raindrop.io](https://raindrop.io) - 适用于macOS、Windows、Android、iOS和Web的私人且安全的书签应用程序。书签和协作功能无限制且免费。
  * [element.io](https://element.io/) — 一个基于Matrix构建的去中心化且开源的通信工具。支持群组聊天、直接消息、加密文件传输、语音和视频聊天，并易于与其他服务集成。

  * [seafile.com](https://www.seafile.com/) — 私人或云存储、文件共享、同步、讨论功能。云版本只有1GB容量
  * [Sema](https://www.semasoftware.com/) - 免费的开发者作品集工具，能够将多个仓库中的贡献整合并快照到单个报告中。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，可直接通过浏览器与协作者共享屏幕，无需下载或注册，完全免费。
  * [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多支持10名用户免费使用。
  * [slack.com](https://slack.com/) — 对用户数量无限制的免费服务，但有部分功能限制
  * [Spectrum](https://spectrum.chat/) - 免费创建公开或私人社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页面的汇总页面。你能否跟踪上游供应商的状态页面？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和记录笔记的可视化协作应用程序。最多支持3个看板，用户数量无限制，提供1GB存储空间，免费使用。
  * [Stacks](https://betterstacks.com/) - 内容工作区，集成了笔记、链接和文件存储功能，以应对信息过载问题。提供永久免费的个人计划。 
  * [talky.io](https://talky.io/) — 免费的群组视频聊天服务。匿名、点对点，无需插件、注册或付费。
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持带有泳道的看板和完整的Scrum实施，集成了时间跟踪功能。支持5名用户和3个项目组合免费使用。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进团队开发流程。为远程优先团队提供功能齐全的休假管理。最多支持5名用户的小团队免费使用。
  * [Tefter](https://tefter.io) - 带有强大Slack集成功能的书签应用程序。对开源团队免费。
  * [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者进行端到端加密协作无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 面向不限数量用户的免费时间跟踪软件。可轻松与Jira、Trello、Asana等项目管理工具集成。
  * [Teamcamp](https://www.teamcamp.app) - 面向软件开发公司的一体化项目管理应用程序。
  * [twist.com](https://twist.com) — 一款支持异步通信的团队沟通应用程序，可保持对话的有序和主题明确。提供免费和无限制使用计划，符合条件的团队可享受折扣。
  * [tldraw.com](https://tldraw.com) — 免费的开源白板和绘图工具，具有智能箭头、对齐功能、便签和SVG导出等特性。支持多人协作编辑，还有免费的官方VS Code扩展。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费的一体化书签管理器、标签管理器和任务管理器，位于可定制的在线桌面中，支持文件夹协作。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页或移动设备上的即时消息与团队共享和讨论想法
  * [Tugboat](https://tugboat.qa) - 自动且按需预览每个拉取请求。对所有人免费，为非营利组织提供免费的Nano层级服务。
  * [whereby.com](https://whereby.com/) — 一键式视频通话，免费使用（原名为appear.in）
  * [windmill.dev](https://windmill.dev/) - Windmill是一个开源的开发者平台，可通过简单的Python和Typescript脚本快速构建生产级多步骤自动化流程和内部应用程序。免费用户最多可创建并加入三个非高级工作区。
  * [vadoo.tv](https://vadoo.tv/) — 简化视频托管和营销。一键上传视频，可录制、管理、共享等。免费层级每月提供最多10个视频、1GB存储空间和10GB带宽。
  * [userforge.com](https://userforge.com/) - 互联的在线人物角色、用户故事和上下文映射。有助于保持设计和开发同步，最多支持3个人物角色和2名协作者免费使用。
  * [wistia.com](https://wistia.com/) — 视频托管服务，提供观众分析、高清视频交付和营销工具，以帮助了解访客信息，支持25个视频和Wistia品牌播放器。
  * [wormhol.org](https://www.wormhol.org/) — 简单直接的文件共享服务。可与任意数量的用户共享不限数量、大小不超过5GB的文件。
  * [Wormhole](https://wormhole.app/) - 端到端加密共享不超过5GB的文件，有效期最长24小时。对于大于5GB的文件，使用对等传输直接发送。
  * [zoom.us](https://zoom.us/) — 提供安全的视频和网络会议附加组件。免费计划会议时长限制为40分钟。
  * [Zulip](https://zulip.com/) — 具有独特的类似电子邮件线程模式的实时聊天应用程序。免费计划包含10,000条消息的搜索历史记录和最多5GB的文件存储。此外，还提供可自行托管的开源版本。
  * [robocorp.com](https://robocorp.com) - 用于支持自动化运维的开源栈。可免费试用云功能并实现简单自动化。机器人每月工作时长240分钟，可运行10次辅助程序，提供100MB存储空间。
  * [Fleep.io](https://fleep.io/) — Fleep是Slack的替代产品。为小团队提供免费计划，包含完整消息历史记录、不限数量的一对一对话、1个群组对话和1GB文件存储。
  * [Chanty.com](https://chanty.com/) — Chanty是另一个Slack的替代产品。为小型团队（最多10人）提供永久免费计划，包含不限数量的公开和私人对话、可搜索的历史记录、不限数量的一对一音频通话、不限数量的语音消息、十个集成应用和每个团队20GB的存储空间。
  * [ruttl.com](https://ruttl.com/) — 最佳的一体化反馈工具，用于收集数字反馈并审查网站、PDF和图像。
  * [Mattermost](https://mattermost.com/) — 面向技术团队的安全协作平台。免费计划包含不限数量的频道、剧本、看板、用户，10GB存储空间等。
  * [Webvizio](https://webvizio.com) — 网站反馈工具、网站审查软件和错误报告工具，用于在实时网站、网络应用程序、图像、PDF和设计文件上直接进行网络开发协作。
  * [Pullflow](https://pullflow.com) — Pullflow提供一个AI增强平台，用于在GitHub、Slack和VS Code上进行代码审查协作。
  * [Webex](https://www.webex.com/) — 视频会议服务，免费计划每次会议时长40分钟，可容纳100名参会者。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议服务，免费计划每次会议时长50分钟，可容纳100名参会者。
  * [GitBook](https://www.gitbook.com/) — 用于捕获和记录技术知识的平台，涵盖产品文档、内部知识库和API等。为个人开发者提供免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单、最快、最安全的文件传输和共享界面。无需强制订阅即可发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/) — 这是一个基于JavaScript和加密技术的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/) — [Discord](https://discord.com/)的开源替代产品，尊重用户隐私。免费提供Discord的大多数专有功能。Revolt是一款安全、快速的一体化应用程序，完全免费，且支持（官方和非官方）插件，这一点与大多数主流聊天应用程序不同。
  * [Tencent RTC](https://trtc.io/) — 腾讯实时通信（TRTC）提供群组音频/视频通话解决方案。第一年每月提供10,000分钟免费通话时长。
  * [Pastefy](https://pastefy.app/) - 美观且简单的粘贴板，具有可选的客户端加密、多标签粘贴、API、高亮编辑器等功能。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统（CMS）

  * [acquia.com](https://www.acquia.com/) — Drupal网站的托管服务。为开发者提供免费套餐。还有免费的开发工具（如Acquia Dev Desktop（Acquia开发桌面工具））可供使用。
  * [Contentful](https://www.contentful.com/) — 无头内容管理系统（Headless CMS）。基于云的内容管理和交付应用程序编程接口（APIs）。提供一个免费的社区空间，包含五个用户账号、25000条记录、48种内容类型、2种语言环境。
  * [Cosmic](https://www.cosmicjs.com/) — 无头内容管理系统和API工具包。为开发者提供免费的个人套餐。
  * [Crystallize](https://crystallize.com) — 支持电子商务的无头产品信息管理系统（PIM）。内置GraphQL API。免费版本包含不限用户数量、1000个目录项、每月5GB带宽以及每月25000次API调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。DatoCMS是一个基于GraphQL的内容管理系统。在较低套餐级别下，每月可调用100000次。
  * [Directus](https://directus.io) — 无头内容管理系统。一个完全免费且开源的平台，用于在本地或云端管理资产和数据库内容。没有使用限制，也没有付费墙。
  * [FrontAid](https://frontaid.io/) — 无头内容管理系统，直接将JSON内容存储在你的Git仓库中。没有使用限制。
  * [kontent.ai](https://www.kontent.ai) - 一个内容即服务（Content-as-a-Service）平台，在提供无头内容管理系统所有优势的同时，还赋予营销人员更多能力。开发者套餐提供两个用户账号，不限项目数量，每个项目有两个环境，500个内容项，支持两种语言（包含交付和管理API）以及自定义元素。你可以根据需求选择更详细的套餐。
  * [Prismic](https://www.prismic.io/) — 无头内容管理系统。具有内容管理界面和完全托管且可扩展的API。社区套餐为一个用户提供不限次数的API调用、文档、自定义类型、资产和语言环境。满足你下一个项目的所有需求。对于开放内容/开源项目，还有更大的免费套餐可供选择。
  * [Sanity.io](https://www.sanity.io/) - 一个结构化内容平台，具有开源编辑环境和实时托管数据存储功能。不限项目数量。每个项目免费包含不限管理员用户数量、三个非管理员用户、两个数据集、500000次API内容分发网络（CDN）请求、10GB带宽以及5GB资产。
  * [sensenet](https://sensenet.com) - 以API为先的无头内容管理系统，为各种规模的企业提供企业级解决方案。开发者套餐提供三个用户账号、500个内容项、三个内置角色、25 + 5种内容类型、完全可访问的REST API、文档预览生成以及Office Online编辑功能。
  * [TinaCMS](https://tina.io/) — 取代Forestry.io。开源的、基于Git的无头内容管理系统，支持Markdown、MDX和JSON格式。基础套餐免费，可提供两个用户账号。
  * [GatsbyjsCMS](https://www.gatsbyjs.com/) - Gatsby是一个快速且灵活的框架，让使用任何内容管理系统、API或数据库构建网站再次变得有趣。构建并部署无头网站，吸引更多流量，提高转化率，赚取更多收入！
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费套餐。以GraphQL为先的API。从传统解决方案转向原生GraphQL无头内容管理系统，以API为先的方式交付全渠道内容。
  * [Squidex](https://squidex.io/) - 为小型项目提供免费套餐。以API/GraphQL为先。开源且基于事件溯源（自动记录每个更改）。
  * [InstaWP](https://instawp.com/) - 几秒内即可启动一个WordPress网站。免费套餐包含5个活跃站点、500MB空间，站点有效期为48小时。
  * [Storyblok](https://www.storyblok.com) - 一个面向开发者和营销人员的无头内容管理系统，可与所有现代框架配合使用。社区（免费）套餐提供管理API、可视化编辑器、十个数据源、自定义字段类型、国际化（不限语言/语言环境）、资产管理器（最多2500个资产）、图像优化服务、搜索查询、网络钩子以及每月250GB流量。
  * [WPJack](https://wpjack.com) - 不到5分钟即可在任何云平台上搭建WordPress！免费套餐包含1台服务器、2个站点、免费SSL证书以及不限数量的定时任务。没有时间限制或到期时间——按你的方式搭建网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — Appinvento是一个免费的无代码应用程序构建器。在自动生成的后端代码中，用户可以完全访问源代码，并可使用无限数量的应用程序编程接口（APIs）和路由，从而实现广泛的集成。免费计划包含三个项目、五个数据表以及一个谷歌插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody是一个编码人工智能助手，它利用人工智能和对代码库的深入理解，帮助用户更快地编写和理解代码。Cody为开发者提供大型语言模型（LLMs，包括本地推理）的选择，支持各种集成开发环境（IDEs），兼容所有流行的编程语言，并且有免费计划。免费计划允许开发者每月进行20次聊天对话（使用Claude 3 Sonnet作为大型语言模型）和500次自动补全（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用DhiWise创新的代码生成技术，可将Figma设计无缝转换为动态的Flutter和React应用程序，优化工作流程，帮助用户比以往更快地打造出色的移动和网络体验。
  * [Codeium](https://www.codeium.com/) — Codeium是一个免费的人工智能驱动的代码补全工具。它支持20多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并与所有主要的独立和网络集成开发环境集成。
  * [Fern](https://buildwithfern.com) - 编写应用程序编程接口（API）定义，并使用它们生成流行语言（如TypeScript、Python、Java、Go等）的软件开发工具包（SDKs）/客户端库。完全支持OpenAPI。免费版最多可为20个端点生成代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于C#。Metalama在编译过程中动态生成代码的样板文件，使源代码保持简洁。对开源项目免费，其对商业友好的免费版包含三个方面的功能。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是一个用于VSCode、JetBrains和Neovim的快速人工智能代码补全插件。免费版提供无限制的内联补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过提供从全球所有代码中学习到的见解，帮助开发者更快地创建更好的软件。有插件可供使用。
  * [v0.dev](https://v0.dev/) — v0使用人工智能模型根据简单的文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成便于复制粘贴的React代码，人们可在项目中使用。每次生成至少需要30个积分。用户初始有1200积分，每月还可获得200个免费积分。


**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个完整的编写、审查和部署代码的工作流程（Workflow），提供一个用户的免费账号，以及一个容量为100 MB的代码仓库（Repository）
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，在Vista系统下使用MS IE 9、分辨率为1024 x 768时，仅提供3分钟的免费测试会话
  * [codacy.com](https://www.codacy.com/) — 对PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript进行自动化代码审查，对不限数量的公开和私有代码仓库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码（Infrastructure as Code）审查工具，与GitHub、Bitbucket和GitLab（甚至是自托管的）集成。除了标准语言外，它还能分析Ansible、Terraform、CloudFormation、Kubernetes等。（开源免费）
  * [CodeBeat](https://codebeat.co) — 适用于多种语言的自动化代码审查平台。对具有Slack和电子邮件集成功能的公开代码仓库永久免费。
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，对开源项目和不限数量的组织自有私有代码仓库（最多4个协作者）免费。对学生和机构也免费。
  * [codecov.io](https://codecov.io/) — 代码覆盖工具（软件即服务，SaaS），对开源项目和一个私有代码仓库免费
  * [CodeFactor](https://www.codefactor.io) — 针对Git的自动化代码审查。免费版本包括不限用户数量、公开代码仓库和一个私有代码仓库。
  * [coderabbit.ai](https://coderabbit.ai) — 由人工智能驱动的代码审查工具，与GitHub/GitLab集成。免费套餐包括每小时200个文件、每小时3次审查和每小时50次对话。对开源项目永久免费。
  * [codescene.io](https://codescene.io/) - CodeScene根据开发人员处理代码的方式对技术债务进行优先级排序，并可视化团队耦合和系统掌握等组织因素。对开源项目免费。
  * [CodSpeed](https://codspeed.io) - 在持续集成（CI）管道中自动化性能跟踪。由于精确且一致的指标，可在部署前发现性能回归问题。对开源项目永久免费。
  * [coveralls.io](https://coveralls.io/) — 显示测试覆盖率报告，对开源项目免费
  * [dareboost](https://dareboost.com) - 每月提供5份针对网络性能、可访问性和安全性的免费分析报告
  * [deepcode.ai](https://www.deepcode.ai) — DeepCode基于人工智能查找错误、安全漏洞、性能和API问题。DeepCode的分析速度使其能够实时分析代码，并在你在集成开发环境（IDE）中点击保存按钮时提供结果。支持的语言有Java、C/C++、JavaScript、Python和TypeScript。与GitHub、BitBucket和GitLab集成。对开源和私有代码仓库以及最多30名开发人员免费。
  * [deepscan.io](https://deepscan.io) — 高级静态分析，用于自动查找JavaScript代码中的运行时错误，对开源项目免费
  * [DeepSource](https://deepsource.io/) - DeepSource持续分析源代码更改，查找并修复归类为安全、性能、反模式、错误风险、文档和风格等方面的问题。与GitHub、GitLab和Bitbucket原生集成。
  * [DiffText](https://difftext.com) - 即时查找两段代码之间的差异。完全免费使用。
  * [eversql.com](https://www.eversql.com/) — EverSQL - 排名第一的数据库优化平台。自动获取有关数据库和SQL查询的关键信息。
  * [gerrithub.io](https://review.gerrithub.io/) — 针对GitHub代码仓库的Gerrit代码审查，免费
  * [gocover.io](https://gocover.io/) — 任何 [Go](https://golang.org/) 包的代码覆盖率工具
  * [goreportcard.com](https://goreportcard.com/) — Go项目的代码质量检查，对开源项目免费
  * [gtmetrix.com](https://gtmetrix.com/) — 提供报告和全面的建议以优化网站
  * [holistic.dev](https://holistic.dev/) - 排名第一的用于Postgresql优化的静态代码分析器。提供性能、安全和数据库架构问题自动检测服务
  * [houndci.com](https://houndci.com/) — 对GitHub提交的代码质量进行评论，对开源项目免费
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构。Moderne提供框架迁移、带有修复建议的代码分析以及大规模的无与伦比的代码转换功能，以便开发人员可以将时间花在构建新事物上，而不是维护旧代码上。对开源项目免费。
  * [reviewable.io](https://reviewable.io/) — 针对GitHub代码仓库的代码审查，对公开或个人代码仓库免费。
  * [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
  * [scan.coverity.com](https://scan.coverity.com/) — 对Java、C/C++、C#和JavaScript进行静态代码分析，对开源项目免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，对开源项目免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — 针对GitHub拉取请求和提交的编程语言感知差异分析，对公开代码仓库免费
  * [shields.io](https://shields.io) — 开源项目的质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) — 对Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy等多种语言进行自动化源代码分析，对开源项目免费
  * [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。对开源项目和最多5个协作者的组织免费。
  * [webceo.com](https://www.webceo.com/) — 搜索引擎优化（SEO）工具，也提供代码验证和不同类型设备的检测
  * [zoompf.com](https://zoompf.com/) — 修复网站性能，提供详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 针对32种不同的包管理器提供搜索和依赖更新通知功能，对开源项目免费
  * [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等众多网站上搜索你的项目名称是否可用。
  * [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（及其他标记），以识别代码中值得回头改进的部分。
  * [CodeKeep](https://codekeep.io) - 面向代码片段的“谷歌便签”。可对代码片段进行整理、查找和分享，配有功能强大的代码截图工具，带有预设模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## 持续集成（CI）和持续交付（CD）

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化的网页无障碍性测试引入到你的开发工作流程中。对于开源项目和教育用途，它是免费的。
  * [appcircle.io](https://appcircle.io) — 一个企业级的移动DevOps（开发运维）平台，可自动化移动应用的构建、测试和发布到应用商店的流程，从而实现更快、更高效的发布周期。每次构建最长30分钟免费，每月20次构建免费，且支持1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — 面向Windows的持续交付（CD）服务，对开源项目免费。
  * [Argonaut](https://argonaut.dev/) - 可在几分钟内将应用和基础设施部署到你的云端。支持在Kubernetes和Lambda环境中进行自定义和第三方应用部署。免费套餐允许5个域名和2个用户进行不限数量的应用部署。
  * [bitrise.io](https://www.bitrise.io/) — 针对移动应用（原生或混合应用）的持续集成/持续交付（CI/CD）平台。每月有200次免费构建，每次构建时长10分钟，支持2名团队成员。开源项目每次构建时长为45分钟，支持1个额外并发构建，且团队成员数量无限制。
  * [buddy.works](https://buddy.works/) — 一个持续集成/持续交付（CI/CD）平台，提供5个免费项目和1个并发运行任务（每月120次执行）。
  * [Buildkite](https://buildkite.com) 持续集成（CI）管道对3名用户和每月5000分钟的任务时长免费。测试分析的免费开发者套餐包含每月100,000次测试执行，开源项目还有更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 数据库持续集成/持续交付（CI/CD）和开发运维平台。20名用户以下且数据库实例不超过10个时免费。
  * [CircleCI](https://circleci.com/) — 一个全面的免费计划，在面向GitHub、GitLab和BitBucket仓库的托管持续集成/持续交付（CI/CD）服务中包含所有功能。支持多种资源类别、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试拆分、Docker层缓存以及其他高级CI/CD功能。每月执行时长不超过6000分钟免费，协作者数量无限制，私有项目中支持30个并行任务，开源项目最多有80,000分钟的免费构建时长。
  * [cirrus-ci.org](https://cirrus-ci.org) - 对GitHub公共仓库免费。
  * [cirun.io](https://cirun.io) - 对GitHub公共仓库免费。
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，1个环境，共享服务器，不限公共仓库数量。
  * [codemagic.io](https://codemagic.io/) - 每月500分钟的免费构建时长。
  * [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目不限构建次数。
  * [deploybot.com](https://www.deploybot.com/) — 1个仓库，支持10次部署，对开源项目免费。
  * [deployhq.com](https://www.deployhq.com/) — 1个项目，每天可部署10次（每月30分钟构建时长）。
  * [drone](https://cloud.drone.io/) - Drone Cloud使开发人员能够在一个地方跨多种架构（包括x86和Arm（32位和64位））运行持续交付管道。
  * [LayerCI](https://layerci.com) — 面向全栈项目的持续集成（CI）平台。提供一个具有5GB内存和3个CPU的全栈预览环境。
  * [semaphoreci.com](https://semaphoreci.com/) — 对开源项目免费，每月可进行100次私有构建。
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建一个虚拟机，并通过唯一URL使你的应用可用。不限公共和私有仓库数量，虚拟机最大可达2GB。
  * [styleci.io](https://styleci.io/) — 仅支持GitHub公共仓库。
  * [Mergify](https://mergify.io) — 面向GitHub的工作流自动化和合并队列工具 — 对GitHub公共仓库免费。
  * [Make](https://www.make.com/en) — 工作流自动化工具，可让你通过用户界面连接应用并自动化工作流。它支持许多应用和最流行的API。对GitHub公共仓库免费，免费套餐包含100 Mb存储空间、1000次操作，最小间隔为15分钟。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码（Infrastructure as Code）的管理平台。免费套餐功能包括：IaC协作、Terraform模块注册表、ChatOps集成、通过Open Policy Agent实现持续资源合规性检查、支持SAML 2.0的单点登录（SSO）以及使用公共工作池（每月最多200分钟）。
  * [microtica.com](https://microtica.com/) - 提供具有现成基础设施组件的初创环境，可在AWS上免费部署应用，并支持你的生产工作负载。免费套餐包括1个环境（在你的AWS账户上）、2个Kubernetes服务、每月100分钟构建时长以及每月20次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器分配任务甚至自动拆分端到端测试运行等功能，加速持续集成（CI）环境中的单体仓库项目。它为不超过30名贡献者提供免费计划，包含150,000积分。
  * [blacksmith](https://www.blacksmith.sh/) - 面向GitHub Actions的托管性能运行器，每月提供3000分钟的免费时长，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate是一个用于基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。不超过2名用户时免费，包含所有功能。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 针对网络应用、原生移动应用和桌面应用的智能视觉验证工具。可与几乎所有自动化解决方案（如Selenium和Karma）以及远程运行器（Sauce Labs、Browser Stack）集成。对开源项目免费。为单个用户提供免费套餐，每周有一定数量的检查点限制。
  * [Appetize](https://appetize.io) — 在浏览器中直接通过这个基于云的安卓手机/平板模拟器以及iPhone/iPad模拟器来测试你的安卓和iOS应用。免费套餐包含两个并发会话，每月可使用30分钟，应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，使没有性能工程技能的人员也能评估应用的性能和用户体验（UX）。桌面版可使用自有设备，完全免费，且对iOS和Android的测试次数无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量无限制，每月可生成5000张截图。对开源项目免费。
  * [Bencher](https://bencher.dev/) - 一个持续基准测试工具套件，用于捕获持续集成（CI）中的性能回归问题。对所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[对开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 针对网络应用的轻量级测试自动化工具。易于学习，无需编写代码。可在自有计算机上免费运行无限次测试。如需云监控和CI/CD集成，则需额外支付月费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控工具。以远低于传统供应商的价格监控你的API和应用。由“监控即代码”工作流和Playwright提供支持。为开发者提供慷慨的免费套餐。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展程序，用于测试你的网站是否遵循50多项搜索引擎优化（SEO）、速度和安全最佳实践。对小型网站提供免费套餐。
  * [cypress.io](https://www.cypress.io/) - 针对在浏览器中运行的任何内容进行快速、简单且可靠的测试。Cypress测试运行器始终免费且开源，无任何限制。Cypress仪表板对最多5名用户的开源项目免费。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建由人工智能驱动的Cypress测试/页面对象模型（POM）。除人工智能部分外均为开源。每月可免费创建5次测试，包含自修复脚本、电子邮件和视觉测试功能。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放网络浏览器中的所有操作步骤，并创建脚本，免费版功能较少。
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可让你安全、可靠地向系统中注入故障，以便在问题影响到客户之前发现系统弱点。Gremlin Free可对最多5个主机或容器进行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — 提供Selenium Grid测试，免费套餐包含最多4个并发Selenium节点/每月10次网格启动/每月4000分钟测试时长。
  * [katalon.com](https://katalon.com) - 提供一个测试平台，可帮助不同测试成熟度水平的各种规模团队进行测试，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。通过记录API调用为API生成端到端（E2E）测试（KTests）以及模拟或存根（KMocks）。对开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过在任何持续集成（CI）提供商上实现最优的测试套件并行化来加速测试。在并行的CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持最长10分钟的测试文件，对开源项目提供无限制的免费计划。
  * [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[对开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月可免费模拟最多50个并发用户，时长60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 针对你的Storybook、Ladle、Histoire故事和网络应用进行全面的视觉回归测试。团队成员数量无限制，对开源项目完全免费，每月可生成7000张快照。
  * [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，具备人工智能辅助测试用例生成功能。
  * [percy.io](https://percy.io) - 为任何网络应用、静态站点、样式指南或组件库添加视觉测试。团队成员数量无限制，提供演示应用，项目数量无限制，每月可生成5000张快照。
  * [preflight.com](https://preflight.com) - 无代码自动化网络测试。在浏览器中记录对UI变化具有弹性的测试，并在Windows机器上运行。能否与你的CI/CD集成？免费套餐包含每月50次测试运行，提供视频、HTML会话等功能。
  * [qase.io](https://qase.io) - 面向开发和质量保证（QA）团队的测试管理系统。可管理测试用例、编排测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，附件存储空间为500MB，最多支持3名用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和人工智能构建的无代码移动应用测试自动化工具。适用于原生应用、Flutter、React Native、网络应用、Ionic等多种应用框架。免费套餐对iOS和Android应用分别限制为10次测试，但包含付费套餐的大部分功能，包括无限制的测试运行次数。
  * [Requestly](https://requestly.com/) 开源的Chrome扩展程序，用于拦截、重定向和模拟HTTP请求。具有[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)功能。可重定向URL、修改HTTP标头、模拟API、注入自定义JavaScript、修改GraphQL请求、生成模拟API端点、记录包含网络和控制台日志的会话。免费套餐可创建最多10条规则，对开源项目免费。
  * [seotest.me](https://seotest.me/) — 免费的页面内搜索引擎优化（SEO）网站测试工具。每天可免费对10个网站进行爬取。提供有用的SEO学习资源和针对任何网站（无论使用何种技术）改进页面内SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似于CodePen，但用于跨浏览器测试。UI-licious允许你像编写用户故事一样编写测试，并提供一个免费平台——UI-licious Snippets，无需注册即可在Chrome上运行无限制的测试，每次测试运行时长最多3分钟。发现漏洞后，你可以复制测试的唯一URL给开发人员，以便他们准确重现漏洞。
  * [TestCollab](https://testcollab.com) - 一款用户友好的测试管理软件，其免费套餐包含与Jira集成、无限制项目、使用CSV/XLSx导入测试用例、时间跟踪以及1GB文件存储功能。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[对开源项目免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 一个用于发布自动化测试结果的仪表板和一个使用GitHub将手动测试实现为代码的框架。该服务[对开源项目免费](https://github.com/marketplace/testspace-com)，每月可处理450条结果。

  * [UseWebhook.com](https://usewebhook.com) - 从浏览器中捕获和检查网络钩子（webhook）。转发到本地主机，或者从历史记录中重播。免费使用。
  * [Vaadin](https://vaadin.com) — 用Java或TypeScript构建可扩展的用户界面（UI），并使用集成的工具、组件和设计系统来更快地迭代、更好地设计以及简化开发过程。无限项目，提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中，使用唯一URL调试和检查网络钩子和HTTP请求。完全免费，你可以创建无限数量的URL并获得相关建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证网络钩子、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置网络钩子，并通过推送通知和电子邮件对其进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全和公钥基础设施（PKI）

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖软件成分分析（SCA）、静态应用安全测试（SAST）、云安全态势管理（CSPM）、动态应用安全测试（DAST）、密钥管理、基础设施即代码（IaC）扫描、恶意软件扫描、容器扫描、软件终止支持（EOL）等功能。免费计划包含两个用户账号，可扫描10个代码仓库、1个云环境、2个容器以及1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 发现网络中存在安全风险的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 一款基于自然语言处理和机器学习技术的网站及应用程序编程接口（API）垃圾邮件过滤器。免费计划下，每个域名每天可处理200次请求。
  * [atomist.com](https://atomist.com/) — 一种更快速、便捷的自动化各类开发任务的方式。目前处于测试版。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊网络服务（AWS）的安全与合规审计及监控
  * [公共云威胁情报](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度入侵指标（IOC），部分内容可在GitHub上获取（https://github.com/unknownhad/AWSAttacks）。完整列表可通过应用程序编程接口（API）获取
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，可提供不可篡改的证明，用于对代码、文件、目录或容器进行公证
  * [crypteron.com](https://www.crypteron.com/) — 以云为先、对开发者友好的安全平台，可防止.NET和Java应用程序中的数据泄露问题
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一款简单、直观的网络应用程序，用于分析和对数据进行解码/编码，无需使用复杂的工具或编程语言。就像加密领域的瑞士军刀。所有功能均可免费使用，且无使用限制。如需自行托管，该项目为开源项目。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期的策略管理，用于创建、部署和管理开放策略代理（OPA）授权
  * [Datree](https://www.datree.io/) — 开源的命令行界面（CLI）工具，通过确保清单文件和Helm图表遵循最佳实践以及组织的相关策略，来防止Kubernetes配置错误
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块以及GitHub Actions的依赖项
  * [DJ Checkup](https://djcheckup.com) — 使用这个免费的自动化检查工具扫描Django站点的安全漏洞。该项目从Pony Checkup站点分叉而来。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，用于管理应用程序的密钥和配置，支持同步到各种云服务提供商。免费版可供五名用户使用，具备基本的访问控制功能。
  * [Dotenv](https://dotenv.org/) — 快速、安全地同步你的.env文件。不要再通过Slack、电子邮件等不安全的渠道共享.env文件，且再也不会丢失重要的.env文件。免费版可供最多三名团队成员使用。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化的密钥检测和修复功能，防止密钥出现在源代码中。可扫描Git代码仓库中的350多种类型的密钥和敏感文件 — 个人用户和不超过25名开发人员的团队可免费使用。
  * [我是否被泄露了信息？](https://haveibeenpwned.com) — 用于获取数据泄露信息的RESTful应用程序编程接口（API）
  * [hostedscan.com](https://hostedscan.com) — 针对网络应用程序、服务器和网络的在线漏洞扫描工具。每月可免费扫描10次。
  * [Infisical](https://infisical.com/) — 开源平台，可让你在团队和基础设施中管理开发人员的密钥，涵盖从本地开发到预生产/生产环境的第三方服务。免费版可供最多五名开发人员使用。
  * [Internet.nl](https://internet.nl) — 测试是否符合现代互联网标准，如IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等
  * [keychest.net](https://keychest.net) - 管理SSL证书到期情况并购买证书，集成证书透明度（CT）数据库
  * [letsencrypt.org](https://letsencrypt.org/) — 免费的SSL证书颁发机构，其证书受所有主流浏览器信任
  * [meterian.io](https://www.meterian.io/) - 监控Java、Javascript、.NET、Scala、Ruby和NodeJS项目中依赖项的安全漏洞。免费版可用于一个私有项目，开源项目数量不受限制。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 查找并修复站点中的安全漏洞
  * [opswat.com](https://www.opswat.com/) — 对计算机、设备、应用程序和配置进行安全监控。免费版可供25名用户使用，可查看30天的历史记录。
  * [openapi.security](https://openapi.security/) - 免费工具，可快速检查任何基于OpenAPI / Swagger的应用程序编程接口（API）的安全性。无需注册即可使用。
  * [pixee.ai](https://pixee.ai) - 自动化产品安全工程师，作为一个免费的GitHub机器人，可向你的Java代码库提交拉取请求（PR）以自动修复漏洞。其他编程语言的支持即将推出！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新它们。免费版可用于一个私有项目，开源项目数量不受限制。
  * [qualys.com](https://www.qualys.com/community-edition) — 查找网络应用程序漏洞，进行开放网络应用程序安全项目（OWASP）风险审计
  * [report-uri.io](https://report-uri.io/) — 内容安全策略（CSP）和HTTP公钥固定（HPKP）违规报告
  * [ringcaptcha.com](https://ringcaptcha.com/) — 将电话号码用作身份标识的工具，可免费使用
  * [seclookup.com](https://www.seclookup.com/) - Seclookup应用程序编程接口（APIs）可在安全信息和事件管理（SIEM）系统中丰富域名威胁指标，提供域名的全面信息，并改进威胁检测和响应能力。可[在此处](https://account.seclookup.com/)免费查询50,000次。
  * [snyk.io](https://snyk.io) — 可查找并修复开源依赖项中已知的安全漏洞。对开源项目提供无限制的测试和修复功能。私有项目每月限测试200次。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — 对任何SSL网络服务器的配置进行深入分析
  * [SOOS](https://soos.io) - 对开源项目提供免费且无限制的软件成分分析（SCA）扫描。在发布前检测并修复安全威胁。使用简单有效的解决方案保护你的项目。
  * [StackHawk](https://www.stackhawk.com/) 在整个开发管道中自动化应用程序扫描，以便在安全漏洞进入生产环境之前发现并修复它们。单个应用程序可进行无限制的扫描，且支持多个环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费的网站安全检查和恶意软件扫描工具
  * [Protectumus](https://protectumus.com) - 针对PHP的免费网站安全检查、站点防病毒和服务器防火墙（WAF）。免费版为注册用户提供电子邮件通知功能。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的服务器配置、证书、证书链等是否安全。不限于HTTPS协议。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：专为刚开始了解网络威胁情报的个人研究人员、分析师和组织设计。免费版可供最多三名用户使用
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划允许每周进行跨站脚本攻击（XSS）扫描
  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码和自动密钥管理功能对数据进行加密和解密。免费版可供一个应用程序使用，每月最多可加密1,000,000次。
  * [Virgil Security](https://virgilsecurity.com/) — 用于在数字解决方案中实现端到端加密、数据库保护、物联网（IoT）安全等功能的工具和服务。免费版可供用户数不超过250的应用程序使用。
  * [Vulert](https://vulert.com) - Vulert持续监控开源依赖项中的新漏洞，并推荐修复方法，无需安装或访问你的代码库。对开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式扫描GraphQL端点的安全性。免费使用，无需登录。

**[⬆️ 返回顶部](#目录)**

## 认证、授权和用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和应用程序编程接口（APIs）提供细粒度的授权即服务。每月最多1000个活跃用户（MAUs）和100个授权器实例免费使用。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素认证（MFA）、无密码认证等功能。包含用于前端和后端应用程序的软件开发工具包（SDKs）。每月最多1000个活跃用户和五个身份提供商免费使用。
  * [Auth0](https://auth0.com/) — 托管式单点登录服务。免费计划包括25,000个每月活跃用户、不限数量的社交连接、自定义域名等功能。
  * [Authgear](https://www.authgear.com) - 在几分钟内为您的应用程序添加无密码认证、一次性密码（OTPs）、双因素认证（2FA）和单点登录功能。包含所有前端内容。每月最多5000个活跃用户免费使用。
  * [Authress](https://authress.io/) — 认证登录和访问控制服务，为任何项目提供不限数量的身份提供商。支持Facebook、Google、Twitter等。前1000次应用程序编程接口（API）调用免费。
  * [Authy](https://authy.com) - 在多个设备上进行双因素认证（2FA），并提供备份功能。可作为Google Authenticator的替代方案。最多100次成功认证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。提供细粒度的授权和访问控制功能，每月最多100个活跃主体免费使用。
  * [Clerk](https://clerk.com) — 用户管理、认证、双因素认证/多因素认证（2FA/MFA），提供用于登录、注册、用户资料等的预构建用户界面（UI）组件。每月最多10,000个活跃用户免费使用。
  * [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak身份和访问管理即服务。最多100个用户和一个领域（realm）免费使用。
  * [Corbado](https://www.corbado.com/) — 为新应用程序或现有应用程序添加以通行密钥优先的认证方式。对不限数量的每月活跃用户免费。
  * [Descope](https://www.descope.com/) — 高度可定制的认证流程，同时提供无代码和应用程序编程接口/软件开发工具包（API/SDK）两种方式。每月7,500个活跃用户、50个租户（最多5个安全断言标记语言/单点登录租户）免费使用。
  * [duo.com](https://duo.com/) — 为网站或应用程序提供双因素认证（2FA）。对10个用户免费，所有认证方法、集成和硬件令牌均无限制。
  * [Kinde](https://kinde.com/) - 简单且强大的认证服务，您可以在几分钟内将其集成到您的产品中。提供7,500个免费每月活跃用户所需的一切功能。
  * [logintc.com](https://www.logintc.com/) — 通过推送通知进行双因素认证（2FA），对10个用户免费，适用于虚拟专用网络（VPN）、网站和SSH。
  * [MojoAuth](https://mojoauth.com/) - MojoAuth使您能够在几分钟内轻松地在您的网络、移动或任何应用程序上实现无密码认证。
  * [Okta](https://developer.okta.com/signup/) — 用户管理、认证和授权服务。每月最多100个活跃用户免费使用。
  * [onelogin.com](https://www.onelogin.com/) — 身份即服务（IDaaS）、单点登录身份提供商、云单点登录身份提供商，支持三个公司应用程序和五个个人应用程序，用户数量无限制。
  * [Ory](https://ory.sh/) - 认证/授权/开放授权2.0（AuthN/AuthZ/OAuth2.0）/零信任管理安全平台。提供永久免费的开发者账户，包含所有安全功能，团队成员数量无限制，每日活跃用户200人，每月权限检查25,000次。
  * [Phase Two](https://phasetwo.io) - Keycloak开源身份和访问管理服务。免费领域最多支持1000个用户和10个单点登录连接，利用Phase Two的Keycloak增强容器，其中包含[组织](https://phasetwo.io/product/organizations/)扩展。
  * [Stytch](https://www.stytch.com/) - 一个一体化平台，为认证和欺诈预防提供应用程序编程接口和软件开发工具包（APIs和SDKs）。免费计划包括每月10,000个活跃用户、不限数量的组织、5个单点登录或系统配置管理（SCIM）连接以及1,000个机器对机器（M2M）令牌。
  * [Stack Auth](https://stack-auth.com) — 优秀的开源认证服务。最适合开发者的解决方案，只需五分钟即可上手。可免费自行托管，或提供托管式软件即服务（SaaS）版本，包含10,000个免费每月活跃用户。
  * [SuperTokens](https://supertokens.com/) - 开源用户认证服务，可原生集成到您的应用程序中 - 使您能够快速上手，同时控制用户和开发者体验。每月最多5000个活跃用户免费使用。
  * [Warrant](https://warrant.dev/) — 为您的应用程序提供托管式企业级授权和访问控制服务。免费套餐包括每月100万次应用程序编程接口请求和1,000条授权规则。
  * [ZITADEL Cloud](https://zitadel.com) — 一个一站式用户和访问管理服务，适用于您并支持多租户（B2B）用例。最多25,000次认证请求免费，包含所有安全功能（一次性密码、无密码认证、策略等无付费墙限制）。
  * [PropelAuth](https://propelauth.com) — 只需几行代码即可立即向任何规模的公司销售产品，最多200个用户和10,000封事务性电子邮件免费（带有水印标识：“Powered by PropelAuth”）。
  * [Logto](https://logto.io/) - 开发、保护和管理您产品的用户身份 - 用于认证和授权。每月最多5,000个活跃用户免费使用，提供开源自行托管选项。
  * [WorkOS](https://workos.com/) - 为最多100万个每月活跃用户提供免费的用户管理和认证服务。支持电子邮件 + 密码、社交认证、魔法认证（Magic Auth）、多因素认证等。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 确保您的移动应用程序按预期运行的首选平台。免费计划：支持一个应用程序，提供分析功能，版本和安装数量无限制，以及反馈收集功能。
  * [Loadly](https://loadly.io) - iOS和Android测试版应用程序分发服务，提供完全免费的服务，包括下载无限制、高速下载以及上传无限制。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用程序部署到设备上。免费计划：支持应用程序上传，提供带密码保护的链接，链接有效期为1天，可安装次数为10次。
  * [InstallOnAir](https://www.installonair.com) - 隔空分发iOS和Android应用程序。免费计划：上传无限制，提供私人链接，访客链接有效期为2天，注册用户链接有效期为60天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用程序以供测试。免费计划包括一个应用程序项目、三个应用程序版本、500 MB存储空间，以及每月100次应用程序安装。
  * [Appho.st](https://appho.st) - 移动应用程序托管平台。免费计划包括支持五个应用程序，每月下载次数为50次，最大文件大小为100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在基础设施即服务（IaaS）上部署预配置应用程序。可免费管理1个AWS微型实例
  * [Esper](https://esper.io) — 面向安卓设备的移动设备管理（MDM）和移动应用管理（MAM），具备DevOps功能。一个用户许可证下可免费管理100台设备，应用存储容量为25 MB。
  * [jamf.com](https://www.jamf.com/) — 用于iPad、iPhone和Mac的设备管理，可免费管理3台设备
  * [Miradore](https://miradore.com) — 设备管理服务。可随时了解设备群组的最新状态，并免费保障无限数量设备的安全。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理他们的网络应用程序和服务器。每月可免费进行多达25次的git部署
  * [runcloud.io](https://runcloud.io/) - 服务器管理，主要专注于PHP项目。可免费管理至多1台服务器。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，可轻松管理和部署服务器及站点。可免费管理1台服务器。

**[⬆️ 返回顶部](#目录)**

## 消息传递和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，具备在线状态感知、消息持久化和消息可靠投递功能。免费套餐包含每月300万条消息、100个并发连接峰值和100个频道峰值。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ即服务。小狐猴（Little Lemur）套餐：每月最多100万条消息，最多20个并发连接，最多100个队列，最多1万条排队消息，在不同可用区（AZ，Availability Zone）有多个节点
  * [courier.com](https://www.courier.com/) — 一个统一的应用程序编程接口（API，Application Programming Interface），用于推送通知、应用内消息、电子邮件、聊天、短信以及其他消息渠道，具备模板管理等功能。免费套餐包含每月1万条消息。
  * [engagespot.co](https://engagespot.co/) — 面向开发者的多渠道通知基础设施，带有预构建的应用内收件箱和无需编码的模板编辑器。免费套餐包含每月1万条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将你的MQTT设备连接到云原生物联网消息代理。永久免费连接最多100个设备（无需信用卡）。
  * [knock.app](https://knock.app) – 面向开发者的通知基础设施。通过一次API调用即可向多个渠道发送通知，如应用内、电子邮件、短信、Slack和推送通知等。免费套餐包含每月1万条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟内为任何软件添加用户通知功能。免费套餐包含每月1万条通知 + 100条短信和自动呼叫。
  * [Novu.co](https://novu.co) — 面向开发者的开源通知基础设施。简单的组件和API，用于在一个地方管理所有通信渠道：电子邮件、短信、直接消息、应用内消息和推送通知。免费套餐包含每月3万条通知，数据保留90天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。最多100个并发连接和每日20万条消息免费。
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。最多20个并发连接和每日10万个事件免费。
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)即服务。覆盖全球、亚马逊网络服务（AWS，Amazon Web Services）、谷歌云平台（GCP，Google Cloud Platform）和微软Azure。永久免费，消息大小限制为4KB，50个活跃连接，每月5GB数据量。
  * [cloudkarafka.com](https://www.cloudkarafka.com/) - 免费共享Kafka集群，最多5个主题，每个主题10MB数据，数据保留28天。
  * [pubnub.com](https://www.pubnub.com/) - 使用Swift、Kotlin和React进行消息传递，每月各有100万次事务处理。事务可能包含多条消息。
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC（选择性转发单元SFU，Selective Forwarding Unit；多点控制单元MCU，Multipoint Control Unit）的视频通信API服务，用于构建视频平台。允许实时数据注入、视频布局、录制，提供功能齐全的托管网络用户界面（快速启动）或用于自定义用户界面的软件包。有面向开发者的[免费套餐](https://apiservice.eyeson.com/api-pricing)，每月1000分钟会议时长。
  * [webpushr](https://www.webpushr.com/) - 网络推送通知 - 最多支持1万个订阅者免费使用，无限制推送通知，支持浏览器内消息传递
  * [httpSMS](https://httpsms.com) - 使用你的安卓手机作为短信网关发送和接收短信。每月免费发送和接收最多200条消息。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展且安全的无服务器MQTT代理，可在数秒内获取。永久免费提供每月100万会话分钟（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 向你的iOS和安卓设备发送推送通知。通过API或网络钩子（Webhooks）轻松集成，并完全控制你的通知。免费套餐：每天向1个设备和1个应用程序发送50条消息。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日最多10万行日志免费，保留24小时
  * [logentries.com](https://logentries.com/) — 每月最多5GB免费，保留七天
  * [loggly.com](https://www.loggly.com/) — 单个用户免费，每日200MB，保留七天
  * [logz.io](https://logz.io/) — 每日最多1GB免费，保留一天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 由Manage Engine提供支持的日志管理服务。免费计划提供50GB存储空间，存储保留15天，可搜索7天。
  * [papertrailapp.com](https://papertrailapp.com/) — 可搜索48小时数据，存档七天，每月50MB
  * [sematext.com](https://sematext.com/logsene) — 每日最多500MB免费，保留七天
  * [sumologic.com](https://www.sumologic.com/) — 每日最多500MB免费，保留七天
  * [logflare.app](https://logflare.app/) — 每个应用每月最多12,960,000条记录免费，保留三天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的兼容SQL的日志管理。每月最多1GB免费，保留三天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费提供1,000条用户活动日志，保留一个月，最多支持5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月免费摄入200GB数据，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [crowdin.com](https://crowdin.com/) — 不限项目数量、不限字符串数量，对开源项目的协作者数量也无限制
  * [gitlocalize.com](https://gitlocalize.com) - 对私有和公共仓库均免费且无限制
  * [Lecto](https://lecto.ai/) - 带有免费套餐的机器翻译应用程序编程接口（API）（30次免费请求，每次请求可翻译1000个字符）。与Loco Translate WordPress插件集成。
  * [lingohub.com](https://lingohub.com/) — 最多支持3个用户免费使用，对开源项目始终免费
  * [localazy.com](https://localazy.com) - 源语言字符串数量在1000以内免费，语言数量无限制，贡献者数量无限制，有针对初创公司和开源项目的优惠
  * [Localeum](https://localeum.com) - 字符串数量在1000以内免费，支持一个用户，语言数量无限制，项目数量无限制
  * [localizely.com](https://localizely.com/) — 对开源项目免费
  * [Loco](https://localise.biz/) — 免费翻译数量上限为2000，翻译人员数量无限制，每个项目支持十种语言，每个项目可翻译资产数量为1000
  * [oneskyapp.com](https://www.oneskyapp.com/) — 免费版最多支持5个用户，对开源项目免费
  * [POEditor](https://poeditor.com/) — 字符串数量在1000以内免费
  * [SimpleLocalize](https://simplelocalize.io/) - 翻译键数量在100以内免费，字符串数量无限制，语言数量无限制，有针对初创公司的优惠
  * [Texterify](https://texterify.com/) - 单个用户可免费使用
  * [Tolgee](https://tolgee.io) - 提供免费的软件即服务（SaaS），翻译数量有限制；有永久免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 对开源项目免费
  * [Translation.io](https://translation.io) - 对开源项目免费
  * [Translized](https://translized.com) - 字符串数量在1000以内免费，支持一个用户，语言数量无限制，项目数量无限制
  * [webtranslateit.com](https://webtranslateit.com/) — 字符串数量在500以内免费
  * [weblate.org](https://weblate.org/) — 对自由项目免费，免费套餐支持最多10,000个字符串源，且可在本地进行无限制的自托管。
  * [Free PO editor](https://pofile.net/free-po-editor) — 所有人均可免费使用

**[⬆️ 返回顶部](#目录)**

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) - 可获得20个间隔为5分钟的正常运行时间监测器，以及可自定义的状态页面，甚至可用于商业用途。通过电子邮件和Telegram（一款跨平台的即时通讯软件）享受无限制的实时通知。开始使用无需信用卡。
  * [Pingmeter.com](https://pingmeter.com/) - 5个间隔为10分钟的正常运行时间监测器。可监测SSH（安全外壳协议）、HTTP（超文本传输协议）、HTTPS（安全超文本传输协议）以及任何自定义的TCP（传输控制协议）端口。
  * [alerty.ai](https://www.alerty.ai) - 为前端（FE）、后端（BE）、数据库（DB）等提供免费的应用性能管理（APM）和监测服务，还提供免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 24小时指标数据免费，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js。
  * [appneta.com](https://www.appneta.com/) — 免费，数据保留1小时。
  * [appspector.com](https://appspector.com/) - 用于远程iOS/Android/Flutter调试的任务控制中心。对于小流量使用（64MB日志）免费。
  * [assertible.com](https://assertible.com) — 自动化的API（应用程序编程接口）测试和监测。为团队和个人提供免费计划。
  * [bleemeo.com](https://bleemeo.com) - 对3台服务器、5个正常运行时间监测器免费，用户数量、仪表盘数量和告警规则数量均无限制。
  * [checklyhq.com](https://checklyhq.com) - 为开发人员提供开源的端到端（E2E）/ 合成监测以及深度API监测。免费计划支持5个用户和50,000+次检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS（亚马逊网络服务）安全和配置监测。免费版：按需扫描次数无限制，用户数量无限制，存储账户数量无限制。订阅版：提供自动化扫描、API访问等功能。
  * [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等提供性能洞察和正常运行时间监测。免费版可监测5个任务。
  * [datadoghq.com](https://www.datadoghq.com/) — 最多支持5个节点免费。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) — 监测定时任务。一个免费监测器（snitch），如果推荐他人注册可获得更多。
  * [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测器，间隔5分钟。支持电子邮件、Slack（一款团队协作工具）告警。
  * [economize.cloud](https://economize.cloud) — Economize通过整理云资源来优化和报告云基础设施成本，帮助用户了解云成本。每月在谷歌云平台（Google Cloud Platform）上花费不超过5,000美元的用户可免费使用。
  * [elastic.co](https://www.elastic.co/solutions/apm) — 为JavaScript开发人员提供即时性能洞察。免费，数据保留24小时。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，将指标和日志与Grafana集成。免费版：支持3个用户，10个仪表盘，100个告警，在Prometheus和Graphite中存储指标（10,000个系列，保留14天），在Loki中存储日志（50GB日志，保留14天）。
  * [healthchecks.io](https://healthchecks.io) — 监测你的定时任务和后台任务。最多支持20次检查免费。
  * [Hydrozen.io](https://hydrozen.io) — 正常运行时间监测和状态页面服务。免费计划：10个正常运行时间监测器，5个心跳监测器，1个域名监测器和1个状态页面免费。
  * [incidenthub.cloud](https://incidenthub.cloud/) — 云和软件即服务（SaaS）状态页面聚合器 - 20个监测器和2个通知渠道（Slack和Discord）永久免费。
  * [inspector.dev](https://www.inspector.dev) - 不到一分钟即可创建一个完整的实时监测仪表盘，提供永久免费版。
  * [instrumentalapp.com](https://instrumentalapp.com) - 美观且易用的应用程序和服务器监测服务，免费提供最多500个指标和3小时的数据可见性。
  * [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试。
  * [letsmonitor.org](https://letsmonitor.org) - SSL（安全套接层）监测，最多支持5个监测器免费。
  * [linkok.com](https://linkok.com) - 在线断链检查工具，对于不超过100页的小型网站免费，对开源项目完全免费。
  * [loader.io](https://loader.io/) — 免费的负载测试工具，但有使用限制。
  * [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源工具，用于收集实时指标。它是一个不断发展的产品，也可以在GitHub上找到！
  * [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台，旨在帮助工程师创建更完美的软件。从单体应用到无服务器架构，你可以对所有内容进行检测，然后分析、排查和优化整个软件栈。免费版每月提供100GB的免费数据摄入，一个具有完全访问权限的免费用户，以及无限制的免费主要用户。
  * [Middleware.io](https://middleware.io/) - 中间件可观测性平台，为你的应用程序和技术栈提供全面的可见性，以便你大规模地监测和诊断问题。他们为开发社区提供了一个永久免费计划，允许监测最多100万条日志事件的日志，以及最多2台主机的基础设施监测和应用性能管理。
  * [nixstats.com](https://nixstats.com) - 一台服务器免费。提供电子邮件通知、公共状态页面、60秒间隔监测等功能。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot为网站和API提供正常运行时间监测，监测定时任务和计划任务，还提供状态页面。前5次检查（间隔3分钟）免费。免费版通过Slack、Discord和电子邮件发送告警。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国的防火墙屏蔽。它通过比较中国服务器和美国服务器检测到的DNS结果和ASN（自治系统编号）信息来识别DNS污染。
  * [opsgenie.com](https://www.opsgenie.com/) — 为始终运行的服务提供强大的告警和值班管理功能。最多支持5个用户免费。
  * [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监测解决方案，包括告警、强大的可视化功能和基本的报告功能。最多支持100个传感器免费。
  * [pagecrawl.io](https://pagecrawl.io/) - 监测网站变化，最多支持6个监测器（每日检查）免费。
  * [syagent.com](https://syagent.com/) — 非商业用途的免费服务器监测服务，提供告警和指标。
  * [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多支持1个团队（一个团队指一个值班团队）免费。
  * [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。最多支持5个用户免费。
  * [phare.io](https://phare.io/) - 正常运行时间监测，对于无限制的项目和状态页面，最多100,000个事件免费。
  * [pingbreak.com](https://pingbreak.com/) — 现代化的正常运行时间监测服务。可检查无限制的URL，并通过Discord、Slack或电子邮件接收停机通知。
  * [pingpong.one](https://pingpong.one/) — 带有监测功能的高级状态页面平台。免费版包括一个带有SSL子域名的可自定义公共状态页面。开源项目和非营利组织可免费使用专业版计划。
  * [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大的Kubernetes监测工具。可自带Prometheus或安装一体化捆绑包。免费版最多支持20个Kubernetes节点。通过Slack、Microsoft Teams、Discord等发送告警。与PagerDuty、OpsGenie、VictorOps、DataDog等许多工具集成。
  * [sematext.com](https://sematext.com/) — 24小时指标数据免费，服务器数量无限制，10个自定义指标，500,000个自定义指标数据点，仪表盘、用户数量等均无限制。
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、定时任务和SSL监测，每个类别可免费监测5个。
  * [sitesure.net](https://sitesure.net) - 网站和定时任务监测 - 2个监测器免费。
  * [skylight.io](https://www.skylight.io/) — 前100,000次请求免费（仅适用于Rails）。
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监测API，检查Ping、DNS等。

  * [statuscake.com](https://www.statuscake.com/) — 网站监控，有一定限制的情况下可免费进行无限次测试
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，可免费使用3个监控器
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS与域名监控。可免费监控10台服务器、10个正常运行时间情况和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。可免费使用3个监测点和20个主要网络服务的数据馈送
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，可免费使用50个监控器
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 可免费对5个网站进行监控，监控间隔为60秒，提供公共状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 为网络运营、网站可靠性工程（Site Reliability Engineering，SRE）和DevOps团队提供端到端的事件管理、警报、值班管理和响应编排平台。最多5个用户可免费使用。
  * [instatus.com](https://instatus.com) - 10秒钟即可获得一个漂亮的状态页面。可永远免费使用，支持无限子账户和无限团队。
  * [Squadcast.com](https://squadcast.com) - Squadcast是一款端到端的事件管理软件，旨在帮助你推广网站可靠性工程的最佳实践。最多10个用户可永远免费使用该计划。
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控工具，提供多种监控类型：定时任务（cronjob）、关键词、网站、端口、ping。可免费进行25次正常运行时间检查，检查间隔为3分钟。支持通过电话、短信、电子邮件和网络钩子（Webhooks）发送警报。
  * [Better Stack](https://betterstack.com/better-uptime) - 在一款产品中集成正常运行时间监控、事件管理、值班安排/警报以及状态页面功能。免费计划包括10个监控器，检查频率为3分钟，还提供状态页面。
  * [Pulsetic](https://pulsetic.com) - 包含10个监控器、6个月的历史正常运行时间/日志记录、无限个状态页面以及自定义域名！可永远免费使用，且提供无限次电子邮件警报。无需信用卡信息。
  * [Wachete](https://www.wachete.com) - 可监控5个页面，每24小时检查一次。
  * [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：可免费使用20个；Linux和Windows服务器监控：可免费使用5个；状态页面：可免费使用1个 - 提供移动应用、多个通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 带有截图和点击轨迹的JavaScript错误跟踪。对开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用后，每月最多2000个错误免费
  * [elmah.io](https://elmah.io/) — 面向网络开发者的错误日志记录和正常运行时间监控。为开源项目提供免费的小型企业订阅服务。
  * [Embrace](https://embrace.io/) — 移动应用程序监控。对于每年用户会话数不超过100万的小团队免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3000个事件/1个用户免费。开源且易于自行托管，可无限制使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误跟踪。与开源的Sentry SDKs（软件开发工具包）兼容。每月1000个事件免费，或者可以自行托管，无使用限制。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、正常运行时间和定时任务监控。对小团队和开源项目免费（每月12000个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。对于 [Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp) 和 [Laird](https://app.memfault.com/register-laird) 设备，100个设备免费。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5000个错误，不限用户，数据保留30天。
  * [sentry.io](https://sentry.io/) — Sentry实时跟踪应用程序异常，有小型免费计划。每月5000个错误/1个用户免费，自行托管则无限制使用。
  * [Axiom](https://axiom.co/) — 存储最多0.5 TB的日志，保留30天。包括与Vercel等平台的集成，以及带有电子邮件/ Discord通知器的高级数据查询功能。
  * [Semaphr](https://semaphr.com) — 面向移动应用的免费一体化终止开关。
  * [Jam](https://jam.dev) - 一键生成开发者友好的错误报告。免费计划，Jam数量无限制。
  * [Whitespace](https://whitespace.dev) – 在浏览器中一键生成错误报告。免费计划，个人使用时录制次数无限制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [Algolia](https://www.algolia.com/)（阿尔戈利亚）—— 托管搜索解决方案，具备容错拼写、相关性排序以及用户界面库，可轻松创建搜索体验。免费的 “构建” 计划每月包含 100 万个文档和 1 万次搜索。还免费提供 [开发者文档搜索](https://docsearch.algolia.com/)。
  * [Bonsai](https://bonsai.io/)（邦赛）—— 免费提供 1GB 内存和 1GB 存储空间
  * [CommandBar](https://www.commandbar.com/)（命令栏）—— 统一搜索栏即服务，这是一个基于网络的用户界面小部件 / 插件，可让用户在你的产品中搜索内容、导航、功能等，有助于提高可发现性。对于每月最多 1000 名活跃用户免费，命令数量无限制。
  * [Magny](https://magny.io)（马格尼）—— 软件即服务（SaaS），有助于实现命令面板（如应用内搜索），这可显著减少用户在应用中查找任何内容的时间，提升用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing)（奥拉马云）—— 免费提供 3 个索引、每个索引 10 万个文档、无限制的全文 / 向量 / 混合搜索以及 60 天的分析功能
  * [Searchly](http://www.searchly.com/)（瑟奇利）—— 免费提供 2 个索引和 20MB 存储空间

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [自由代码营（FreeCodeCamp）](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、网络开发等方面的免费课程和认证。
  * [奥丁项目（The Odin Project）](https://www.theodinproject.com/) - 免费的开源平台，课程专注于使用JavaScript和Ruby进行网络开发。
  * [免费专业简历模板及编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量经验丰富的专业人士的简历模板，可随时克隆、完整编辑并下载，且经过求职申请跟踪系统（ATS）优化。
  * [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 由行业领先专家提供的免费短期课程，可在一小时或更短时间内亲身体验最新的生成式人工智能工具和技术。
  * [LabEx](https://labex.io) - 通过交互式实验室和实际项目，培养Linux、DevOps、网络安全、编程、数据科学等方面的技能。
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，涵盖从区块链到用户体验设计的开发各个方面。
  * [思科网络学院，全民技能（Cisco Networking Academy, Skills for All）](https://skillsforall.com/) - 提供与认证相关的免费课程，主题包括网络安全、网络和Python等。
  * [麻省理工学院开放课程（MIT OpenCourseWare）](https://ocw.mit.edu/) - 麻省理工学院开放课程是一个在线出版物，包含2500多门麻省理工学院课程的资料，向世界各地的学习者和教育者免费分享知识。其YouTube频道可在 [@mitocw](https://www.youtube.com/@mitocw/featured) 找到。
  * [W3Schools](https://www.w3schools.com/) - 提供关于HTML、CSS、JavaScript等网络开发技术的免费教程。
  * [可汗学院（Khan Academy）](https://www.khanacademy.org/computing/computer-programming) - 提供学习基础和高级HTML/CSS、JavaScript和SQL的免费在线指南。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10分钟邮箱（10minutemail）](https://10minutemail.com) - 免费的临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 事务性电子邮件服务，每月可免费发送1000封邮件，免费计划中包含不限数量的域名、团队成员、网络钩子（webhooks）和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源的匿名电子邮件转发服务，可免费创建不限数量的电子邮件别名。
  * [Antideo](https://www.antideo.com) — 在免费套餐中，每小时可进行10次API请求，用于电子邮件验证、IP和电话号码验证。无需信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封邮件免费。
  * [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费提供10个Bump电子邮件地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费提供5个一次性电子邮件地址，1个邮箱，邮箱历史记录保留7天。
  * [Buttondown](https://buttondown.email/) — 新闻通讯服务。最多可免费拥有100个订阅者。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收电子邮件以及事务性外发邮件 - 每月10000封免费邮件。
  * [Contact.do](https://contact.do/) — 链接形式的联系表单（类似于bitly的联系表单）
  * [debugmail.io](https://debugmail.io/) — 面向开发者的易于使用的测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 在您的域名下最多可免费拥有2个电子邮件地址，存储空间为100MB。支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月可免费发送多达9000封电子邮件，每天最多300封。
  * [EmailOctopus](https://emailoctopus.com) - 每月最多可免费拥有2500个订阅者和10000封邮件。
  * [EmailJS](https://www.emailjs.com/) – 这不是一个完整的电子邮件服务器；它只是一个电子邮件客户端，您可以使用它直接从客户端发送电子邮件而无需暴露您的凭据。免费套餐每月有200次请求，2个电子邮件模板，请求上限为50Kb，联系人历史记录有限。
  * [EtherealMail](https://ethereal.email) - Ethereal是一个虚假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的非事务性电子邮件服务，邮件不会实际发送。
  * [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成工具，使用多种域名。每次刷新页面，电子邮件地址都会更新。完全免费，其服务没有定价。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月可免费验证200封电子邮件，查看电子邮件是否为临时邮箱。
  * [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费电子邮件验证。
  * [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 一个德国的临时/一次性邮件生成器。支持10个域名，可自由创建不限数量的地址。（包含广告）除此之外，该服务没有定价，完全免费。
  * [forwardemail.net](https://forwardemail.net) — 免费的自定义域名电子邮件转发服务。使用您的域名创建和转发不限数量的电子邮件地址（**注意**：如果使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work顶级域名，由于垃圾邮件问题，您需要付费）
  * [Imitate Email](https://imitate.email) - 用于在构建/测试和持续集成/持续部署（ci/cd）环境中测试电子邮件功能的沙盒电子邮件服务器。免费账户每天可接收15封邮件，永久有效。
  * [ImprovMX](https://improvmx.com) – 免费的电子邮件转发服务。
  * [EForw](https://www.eforw.com) – 为一个域名提供免费的电子邮件转发服务。可使用您的域名接收和发送电子邮件。
  * [Inboxes App](https://inboxesapp.com) — 每天最多可创建3个临时电子邮件，完成后可通过方便的Chrome扩展程序删除。非常适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性电子邮件收件箱，电子邮件最多自动保留3天。开源且可自行托管。
  * [mail-tester.com](https://www.mail-tester.com) — 测试电子邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试电子邮件的DNS/SPF/DKIM/DMARC设置是否正确，由roundsphere.com提供的免费服务。
  * [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网络界面显示。
  * [mailchannels.com](https://www.mailchannels.com) - 带有REST API和SMTP集成的电子邮件API，每月最多3000封邮件免费。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时电子邮件地址注册，每小时120次请求（每月约86400次）
  * [Mailchimp](https://mailchimp.com/) — 500个订阅者，每月1000封邮件免费。
  * [Maildroppa](https://maildroppa.com) - 最多100个订阅者，不限数量的邮件以及自动化功能免费。
  * [MailerLite.com](https://www.mailerlite.com) — 每月1000个订阅者，每月12000封邮件免费。
  * [MailerSend.com](https://www.mailersend.com) — 电子邮件API、SMTP，每月3000封事务性邮件免费。
  * [mailinator.com](https://www.mailinator.com/) — 免费的公共电子邮件系统，您可以使用任何收件箱。
  * [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每日发送限制为200封）
  * [Mailnesia](https://mailnesia.com) - 免费的临时/一次性电子邮件，可自动访问注册链接。
  * [mailsac.com](https://mailsac.com) - 用于临时电子邮件测试的免费API，免费的公共电子邮件托管、外发捕获、电子邮件到Slack/网络套接字/网络钩子（每月API限制为1500次）
  * [Mailtrap.io](https://mailtrap.io/) — 用于开发的虚假SMTP服务器，免费计划包含一个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则。
  * [Mail7.io](https://www.mail7.io/) — 为质量保证（QA）开发人员提供免费的临时电子邮件地址。可通过网络界面或API即时创建电子邮件地址。
  * [Momentary Email](https://www.momentaryemail.com/) — 免费的临时电子邮件地址。可在网站上或通过RSS订阅查看收到的电子邮件。
  * [Mutant Mail](https://www.mutantmail.com/) – 免费提供10个电子邮件ID，1个域名，1个邮箱。所有电子邮件ID共用一个邮箱。
  * [Outlook.com](https://outlook.live.com/owa/) - 免费的个人电子邮件和日历服务。
  * [Parsio.io](https://parsio.io) — 免费的电子邮件解析器（转发电子邮件，提取数据，发送到您的服务器）
  * [pepipost.com](https://pepipost.com) — 第一个月免费30000封邮件，之后每天前100封邮件免费。
  * [Plunk](https://useplunk.com) - 每月3000封邮件免费。
  * [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，不限数量的DMARC每周摘要。
  * [Proton Mail](https://proton.me/mail) - 免费的安全电子邮件账户服务提供商，内置端到端加密。免费提供1GB存储空间。
  * [Queuemail.dev](https://queuemail.dev) — 可靠的电子邮件发送API。免费套餐（每月10000封邮件）。异步发送。可使用多个SMTP服务器。支持黑名单、日志记录、跟踪、网络钩子等功能。
  * [QuickEmailVerification](https://quickemailverification.com) — 在免费套餐中，每天可免费验证100封电子邮件，还提供其他免费API，如一次性电子邮件地址（DEA）检测器、DNS查找、SPF检测器等。
  * [Resend](https://resend.com) - 面向开发者的事务性电子邮件API。每月3000封邮件，每天100封邮件免费，一个自定义域名。
  * [Sender](https://www.sender.net) 每月最多15000封邮件，最多2500个订阅者。
  * [SendGrid](https://sendgrid.com/) — 每天100封邮件，2000个联系人免费。
  * [Sendpulse](https://sendpulse.com) — 每月500个订阅者，每月15000封邮件免费。
  * [SimpleLogin](https://simplelogin.io/) – 开源、可自行托管的电子邮件别名/转发解决方案。免费提供5个别名，不限带宽，不限回复/发送次数。对教育工作者（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 免费的新闻通讯服务，无限制。当您开始收费时才需要付费。

  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，让发送邮件变得轻松。每月可免费发送500封事务性邮件。
  * [temp-mail.io](https://temp-mail.io) — 免费的一次性临时电子邮件服务，可同时拥有多个邮箱并支持转发
  * [tinyletter.com](https://tinyletter.com/) — 每月可免费拥有5000名订阅者
  * [Touchlead](https://touchlead.app) - 一个多功能营销自动化工具，具备潜在客户管理、表单构建和自动化功能。对潜在客户数量和自动化操作次数有限制的免费版
  * [trashmail.com](https://www.trashmail.com) - 提供免费的一次性电子邮件地址，支持转发且地址会自动过期
  * [Tuta](https://tuta.com/) - 免费的安全电子邮件账户服务提供商，内置端到端加密（End-to-End Encryption），无广告，无追踪。免费提供1GB存储空间，一个日历（Tuta也有[付费计划](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，因此你可以自行托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证应用程序编程接口（API），具备邮箱确认和一次性电子邮件地址检测功能；每天可免费验证25个电子邮件地址。
  * [verimail.io](https://verimail.io/) — 批量和API电子邮件验证服务。每月可免费验证100个电子邮件地址
  * [Zoho](https://www.zoho.com) — 起初是一家电子邮件提供商，现在提供一系列服务，其中部分服务有免费计划。提供免费计划的服务列表如下：
     - [电子邮件](https://zoho.com/mail) 5个用户可免费使用。每个用户5GB空间，附件限制为25MB，可使用一个域名。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist的永久免费计划包括一个并发远程支持许可证，以及可无限期使用的5个无人值守计算机许可证，适用于专业和个人用途。
     - [Sprints](https://zoho.com/sprints) 5个用户可免费使用，包含5个项目和500MB存储空间。
     - [Docs](https://zoho.com/docs) — 5个用户可免费使用，上传限制为1GB，存储空间为5GB。附带Zoho办公套件（Writer、Sheets和Show）。
     - [Projects](https://zoho.com/projects) — 3个用户可免费使用，包含2个项目，附件限制为10MB。此计划同样适用于[Bugtracker](https://zoho.com/bugtracker)。
     - [Connect](https://zoho.com/connect) — 团队协作服务，25个用户可免费使用，包含三个群组、三个自定义应用程序、3个看板、3个手册和10个集成功能，以及频道、活动和论坛。
     - [Meeting](https://zoho.com/meeting) — 会议服务，最多支持3名参会者和10名网络研讨会参与者。
     - [Vault](https://zoho.com/vault) — 个人可用的密码管理服务。
     - [Showtime](https://zoho.com/showtime) — 另一个会议软件，可用于远程培训，最多支持5名参会者。
     - [Notebook](https://zoho.com/notebook) — 一个免费的Evernote替代软件。
     - [Wiki](https://zoho.com/wiki) — 3个用户可免费使用，提供50MB存储空间，页面数量无限制，支持ZIP备份、RSS和Atom订阅源、访问控制以及可自定义CSS。
     - [Subscriptions](https://zoho.com/subscriptions) — 循环计费管理服务，20个客户/订阅和1个用户可免费使用，所有支付托管由Zoho完成。可存储最近40条订阅数据
     - [Checkout](https://zoho.com/checkout) — 产品计费管理服务，支持3个页面，最多50笔支付。
     - [Desk](https://zoho.com/desk) — 客户支持管理服务，配备3名客服人员、私有知识库和电子邮件工单。可与[Assist](https://zoho.com/assist)集成，支持1名远程技术人员和5台无人值守计算机。
     - [Cliq](https://zoho.com/cliq) — 团队聊天软件，提供100GB存储空间，用户数量无限制，每个频道支持100名用户，并支持单点登录（SSO）。
     - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销服务
     - [Forms](https://zoho.com/forms) - 表单创建服务
     - [Sign](https://zoho.com/sign) - 无纸化签名服务
     - [Surveys](https://zoho.com/surveys) - 在线调查服务
     - [Bookings](https://zoho.com/bookings) - 预约安排服务
  * [Maileroo](https://maileroo.com) - 面向开发者的简单邮件传输协议（SMTP）中继和电子邮件API。每月可发送5000封邮件，支持无限域名，提供免费电子邮件验证、黑名单监控、邮件测试工具等功能。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat是一个以开发者为中心的特性标志（Feature Flag）服务，团队规模无限制，支持出色，价格合理。免费计划支持最多10个标志、两个环境、1个产品，每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布特性；在网络、移动和服务器端应用程序中管理特性标志。可使用我们的托管API，部署到您自己的私有云，或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的特性标志和A/B测试提供商，带有内置的贝叶斯统计分析引擎。对于最多3个用户免费，特性标志和实验数量无限制。
  * [Hypertune](https://www.hypertune.com) - 具备类型安全的特性标志、A/B测试、分析和应用程序配置功能，带有Git风格的版本控制以及同步、内存中、本地标志评估功能。对于最多5个团队成员免费，特性标志和A/B测试数量无限制。
  * [Molasses](https://www.molasses.app) - 强大的特性标志和A/B测试功能。免费支持最多3个环境，每个环境有5个特性标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级就绪、可扩展的多区域特性开关（Feature Toggle）管理平台。免费计划支持最多10个标志、两个环境，请求次数无限制。软件开发工具包（SDK）、分析仪表板、发布日历、Slack通知以及所有其他功能都包含在这个无限免费计划中。
  * [Statsig](https://www.statsig.com) - 一个强大的平台，用于特性管理、A/B测试、分析等。其慷慨的免费计划提供无限制的用户席位、标志、实验和动态配置，每月支持最多100万次事件。
  * [Abby](https://www.tryabby.com) - 开源的特性标志和A/B测试工具。配置即代码，以及全类型化的TypeScript软件开发工具包。与Next.js和React等框架紧密集成。免费套餐慷慨，扩展选项价格实惠。


**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站上展示的字体为其作者所有，这些字体要么是免费软件，要么是共享软件、演示版本，或者属于公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，包括@font-face、单位转换器、字体提示器和字体提交器。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 提供可用于商业作品的免费字体。精心挑选这些字体，并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可通过下载或链接到谷歌的内容分发网络（CDN），轻松快速地安装到网站上。
  * [FontGet](https://www.fontget.com/) - 有各种字体可供下载，并通过标签进行了整齐的分类。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务平台。它是一个不断增长的专业级字体集合，100%免费供个人和商业使用。
  * [Befonts](https://befonts.com/) - 提供多种独特字体，可用于个人或商业用途。
  * [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体以及它们的使用方式。
  * [Bunny](https://fonts.bunny.net) 注重隐私的谷歌字体
  * [FontsKey](https://www.fontskey.com/) - 提供免费和付费商业字体供个人使用，还可以输入文本进行快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) 一个免费且开源的服务，用于通过CSS向网站提供字体族。
  * [Fontsensei](https://fontsensei.com/) 由用户标记的开源谷歌字体。带有CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大、对开发者友好的表单构建器。可构建注册与登录、用户引导、支付流程、复杂金融应用等表单。免费计划允许每月最多250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。具备垃圾邮件过滤、电子邮件通知与自动回复、网络钩子（webhooks）、Zapier集成、重定向、AJAX或POST等功能。免费计划提供无限个表单、每月20次提交，展示Form-Data徽章可额外获得2000次提交。
  * [FabForm](https://fabform.io/) - 面向聪明开发者的表单后端平台。免费计划允许每月250次表单提交。拥有友好的现代图形用户界面（GUI）。可与谷歌表格（Google Sheets）、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) — HTML表单提交的端点。具备通知、垃圾邮件拦截器以及符合通用数据保护条例（GDPR）的数据处理功能。提供基本使用的免费计划。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/) - 适用于静态网站的简易HTML表单。无需注册账户即可免费开始使用。免费计划允许每月500次提交，并提供可定制的回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 提供无限个表单，每月50次提交，具备垃圾邮件防护、电子邮件通知功能，还有可导出HTML的拖放式设计器。其他功能包括自定义字段规则、团队功能，以及与谷歌表格、Slack、ActiveCampaign和Zapier的集成。
  * [formlets.com](https://formlets.com/) — 在线表单，每月无限个单页表单，每月100次提交，提供电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单转电子邮件服务，免费计划允许无限个表单，每月250次提交，有客户支持团队提供支持。
  * [Formspree.io](https://formspree.io/) — 使用HTTP POST请求发送电子邮件。免费层级限制为每个表单每月50次提交。
  * [Formsubmit.co](https://formsubmit.co/) — 为你的HTML表单提供简易表单端点。永久免费。无需注册。
  * [Formlick.com](https://formlick.com) - 作为Typeform的替代方案，有终身优惠套餐。用户可创建1个免费表单并接收无限次提交。高级版本中，用户可创建无限个表单并接收无限次提交。
  * [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，支持单个文件上传，100MB文件存储。
  * [HeroTofu.com](https://herotofu.com/) - 具备机器人检测和加密存档功能的表单后端。可通过用户界面将提交内容转发至电子邮件、Slack或Zapier。可使用自己的前端。无需服务器代码。免费计划提供无限个表单，每月100次提交。
  * [HeyForm.net](https://heyform.net/) - 拖放式在线表单构建器。免费层级允许你创建无限个表单并收集无限次提交。提供预建模板、反垃圾邮件功能以及100MB文件存储。
  * [Tally.so](https://tally.so/) - 99%的功能都是免费的。免费层级允许你拥有：无限个表单、无限次提交、电子邮件通知、表单逻辑、收款功能、文件上传、自定义感谢页面等等。
  * [Hyperforms.app](https://hyperforms.app/) — 无需后端代码，几秒钟即可创建表单并发送至电子邮件等。个人账户免费提供每月最多50次表单提交。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点。与静态网站配合使用效果极佳。免费计划包括最多1个网站，每月最多50次提交。
  * [Pageclip](https://pageclip.co/) - 免费计划允许1个网站、1个表单，每月1000次提交。
  * [Qualtrics Survey](https://qualtrics.com/free-account) — 使用这款一流工具创建专业表单和调查问卷。提供50多个专家设计的调查问卷模板。免费账户限制为1个活跃调查、每个调查100个回复以及8种回复类型。
  * [Screeb](https://screeb.app/) - 应用内调查和产品分析工具，用于解读用户行为。永久免费计划允许每月500个活跃用户、无限次回复和事件记录、多种集成功能、数据导出以及定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 为你的网站提供强大且简易的表单后端，永久免费计划允许每月50次提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义重定向、自定义响应页面、Telegram和Slack机器人、单个电子邮件通知。
  * [Survicate](https://survicate.com/) — 用一款工具从所有来源收集反馈并发送跟进调查问卷。通过人工智能自动分析反馈并提取见解。免费提供电子邮件、网站、产品内或移动调查问卷、人工智能调查问卷创建器，每月25次回复。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 无需任何服务器端代码即可轻松集成HTML表单，完全免费。用户提交表单后，包含表单内容的电子邮件将发送至你注册的地址。
  * [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费计划包含5个表单，每个表单最多3步，每月50次回复。
  * [Typeform.com](https://www.typeform.com/) — 在网站上添加设计精美的表单。免费计划每个表单仅允许10个字段，每月100次回复。
  * [WaiverStevie.com](https://waiverstevie.com) - 带有REST API的电子签名平台。你可以通过网络钩子接收通知。免费计划会在签署的文件上添加水印，但允许无限个信封和签名。
  * [Web3Forms](https://web3forms.com) - 无需编写后端代码，适用于静态和JAMStack网站的联系表单。免费计划允许无限个表单、无限个域名，每月250次提交。
  * [WebAsk](https://webask.io) - 调查和表单构建器。免费计划每个账户有3个调查，每月100次回复，每个调查10个元素。
  * [Wufoo](https://www.wufoo.com/) - 可在网站上快速使用的表单。免费计划限制为每月100次提交。
  * [formpost.app](https://formpost.app) - 免费的无限表单转电子邮件服务。可免费设置自定义重定向、自动回复、网络钩子等。
  * [Formester.com](https://formester.com) - 在你的网站上分享和嵌入外观独特的表单，创建的表单数量或功能不受计划限制。每月免费获得最多100次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在你的网站上嵌入PDF编辑器，将任何PDF转换为可填写表单。免费计划允许无限个PDF，每个PDF 3次提交。
  * [forms.app](https://forms.app/) — 创建具备条件逻辑、自动分数计算器和人工智能等强大功能的在线表单。免费计划最多收集100次回复，可将表单嵌入网站或通过链接使用。
  * [Qualli](https://usequalli.com) - 应用内调查，专为移动设备设计。使用Qualli人工智能精心设计完美问题。你可以在我们的免费计划中试用，每月最多500个月活跃用户（MAU），可创建无限个表单和触发器。
  * [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放功能的调查，具备由GPT驱动的人工智能分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集总共25次反馈提交。提供的组件易于与React和Vue集成。

**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [关键词人工智能（Keywords AI）](https://keywordsai.co) - 最佳的大语言模型（LLM）监控平台。只需两行代码，用一种格式就能调用200多个大语言模型。每月有10000次免费请求，平台功能免费！
  * [端口密钥（Portkey）](https://portkey.ai/) - 生成式人工智能（Gen AI）应用的控制面板，具备可观测性套件和人工智能网关。每月可免费发送和记录多达10000次请求。
  * [智信（Braintrust）](https://www.braintrustdata.com/) - 用于生成式人工智能的评估、提示词游乐场和数据管理。免费计划每周提供多达1000条私有评估记录。
  * [寻达（Findr）](https://www.usefindr.com/) - 通用搜索工具，可让你一次性搜索所有应用程序。搜索助手可让你利用自身信息回答问题。免费计划提供无限次统一搜索和每天5次副驾驶查询。
  * [报告GPT（ReportGPT）](https://report-gpt.io) - 人工智能驱动的写作助手。只要你自带API密钥，整个平台免费使用。
  * [克莱尔（Clair）](https://askclair.ai/) - 临床人工智能参考工具。学生可免费使用专业工具套件，其中包括开放搜索、临床总结、医学综述、药物相互作用、国际疾病分类第十版（ICD - 10）编码以及管理功能。此外，专业套件还提供免费试用。
  * [语言追踪（Langtrace）](https://langtrace.ai) - 使开发人员能够追踪、评估、管理提示词和数据集，并调试与大语言模型应用性能相关的问题。它为任何大语言模型创建开放遥测标准追踪数据，有助于实现可观测性，并可与任何可观测性客户端配合使用。免费计划每月提供50000次追踪。
  * [超级人工智能（Ultra AI）](https://ultraai.app) - 产品的人工智能指挥中心。功能包括多供应商人工智能网关、提示词管理器、缓存、日志、分析、模型备用方案和用户速率限制。永久免费计划每月提供10000多次请求，除缓存外所有功能都可使用。
  * [科美特·奥皮克（Comet Opik）](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和交付大语言模型应用程序。
  * [语言融合（Langfuse）](https://langfuse.com/) - 开源大语言模型工程平台，可帮助团队协作调试、分析和迭代其大语言模型应用程序。永久免费计划每月包括50000次观测数据以及所有平台功能。[#开源](https://github.com/langfuse/langfuse)
  * [授粉人工智能（Pollinations.AI）](https://pollinations.ai/) - 易于使用的免费图像生成人工智能，提供免费API。无需注册或API密钥，并且有多种集成到网站或工作流程的选项。[#开源](https://github.com/pollinations/pollinations)

**[⬆️ 返回顶部](#目录)**

## 内容分发网络（CDN）和防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — Bootstrap、Bootswatch 和 fontawesome.io 的内容分发网络（CDN）
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。极致的内容分发。cdnjs 是一个免费的开源 CDN 服务，超过 11% 的网站都信赖它，由 Cloudflare 提供支持。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — 谷歌托管库（Google Hosted Libraries）是最流行的开源 JavaScript 库的内容分发网络
  * [Stellate](https://stellate.co/) - Stellate 是一款速度极快、可靠的 CDN，适用于你的 GraphQL API，两项服务免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速且可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软 Ajax CDN 托管流行的第三方 JavaScript 库，如 jQuery，并使你能够轻松地将它们添加到你的 Web 应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的分布式拒绝服务（DDoS）防护和 SSL 证书
  * [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN。每个域名每月 100 万次请求免费。
  * [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，它使用 Cloudflare 简单地托管文件
  * [section.io](https://www.section.io/) — 一种快速启动和管理完整 Varnish 缓存解决方案的简单方法。据说一个网站可永久免费使用
  * [statically.io](https://statically.io/) — 用于 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资产和图像的 CDN
  * [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不失败的 CD。个人使用免费，供一名开发者使用，不提供支持
  * [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
  * [weserv](https://images.weserv.nl/) — 一个图像缓存和调整大小服务。通过全球缓存即时处理图像。
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费的 DDoS 防护
  * [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月 1 TB 和 100 万次请求免费，还有免费的 DNS 托管
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月高达 5 TB 的免费 CDN 流量、19 个核心接入点（PoP）、1 个域名和通用 SSL。

**[⬆️ 返回顶部](#目录)**

## 平台即服务（PaaS）

  * [anvil.works](https://anvil.works) - 仅使用Python进行Web应用开发。免费套餐可创建不限数量的应用，单个应用超时时间为30秒。
  * [appwrite](https://appwrite.io) - 不限项目数量，无项目暂停限制（支持WebSocket），并提供认证服务。免费套餐下，每个项目包含1个数据库、3个存储桶、5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，两个项目可免费使用，功能有限，但资源无限制。
  * [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源、跨平台移动应用开发工具链。可免费用于商业用途，项目数量无限制。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，带有从TypeScript代码自动生成的可视化内容管理系统（CMS）。内置A/B测试、内容细分和实时分析功能。非常适合内容丰富的企业电子商务网站。每月页面浏览量不超过5000次，或开源/个人项目可免费使用。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，可在全球边缘运行JavaScript、TypeScript和WebAssembly。免费套餐每天包含100,000次请求，每月包含100 GiB数据传输量。
  * [domcloud.co](https://domcloud.co) – Linux托管服务，提供与GitHub集成的持续集成/持续交付（CI/CD）功能，支持SSH以及MariaDB/Postgres数据库。免费版本存储空间为1 GB，每月网络流量限制为1 GB，且仅限于免费域名。
  * [encore.dev](https://encore.dev/) — 后端框架，使用静态分析提供自动基础设施、无样板代码等功能。为业余项目提供免费云托管服务。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自己的AWS账户上部署Web服务、数据库等。对于个人GitHub仓库中只有1名开发者的用户提供免费套餐。AWS费用通过AWS计费，但你可以使用积分和AWS免费套餐。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir提供一个永不休眠的免费实例，以及一个免费套餐的PostgreSQL数据库（限制为2个连接、10,000行数据且无备份），适用于Elixir/Phoenix应用。
  * [Glitch](https://glitch.com/) — 提供免费公共托管服务，带有代码共享和实时协作功能。免费计划每月使用时长限制为1000小时。
  * [Lade](https://www.lade.io/) - Lade是为开发者构建的云平台。免费套餐包含三个服务，可以是应用或数据库。每个服务包含128 MB内存和1 GB存储空间。
  * [pipedream.com](https://pipedream.com) - 为开发者构建的集成平台。可基于任何触发条件开发任何工作流。工作流是你可以[免费](https://docs.pipedream.com/pricing/)运行的代码。无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — 云Python应用托管服务。初学者账户免费，可在your-username.pythonanywhere.com域名下创建1个Python Web应用，提供512 MB私有文件存储空间，以及一个MySQL数据库。
  * [ampt.dev](https://getampt.com/) - Ampt使团队能够在AWS上构建、部署和扩展JavaScript应用，无需复杂配置或管理基础设施。免费预览计划每小时包含500次调用，每天2,500次调用，每月50,000次调用。自定义域名仅在付费计划中可用。
  * [Koyeb](https://www.koyeb.com) - Koyeb是一个对开发者友好的无服务器平台，可在全球范围内部署应用。通过基于Git的部署、原生自动扩展、全球边缘网络以及内置服务网格和发现功能，无缝运行Docker容器、Web应用和API。免费实例允许你在德国法兰克福或美国华盛顿特区部署Web服务。在德国法兰克福、美国华盛顿特区和新加坡提供免费的托管Postgres数据库。内存512MB，存储2GB，CPU 0.1。开始使用无需信用卡。
  * [Napkin](https://www.napkin.io/) - 函数即服务（FaaS），内存500Mb，默认超时时间15秒，每月5,000次免费API调用，速率限制为每秒5次调用。
  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务。Meteor的平台即服务（PaaS）用于Meteor应用，包括免费的MongoDB共享托管和自动SSL。
  * [Northflank](https://northflank.com) — 使用强大的用户界面、API和命令行界面（CLI）构建和部署微服务、作业以及托管数据库。从版本控制和外部Docker注册表无缝扩展容器。免费套餐包含两个服务、两个定时任务和1个数据库。
  * [YepCode](https://yepcode.io) - 一体化平台，用于在无服务器环境中连接API和服务。它兼具无代码工具的敏捷性和优势，同时具备使用编程语言的强大功能。免费套餐包含[1000个yeps](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，允许你快速构建、发布和管理现代API。内置持续集成/持续交付（CI/CD）、GitHub集成以及自动HTTPS。在[免费计划](https://wundergraph.com/pricing)下，每月最多可创建3个项目，1GB出站流量，300分钟构建时间。
  * [Zeabur](https://zeabur.com) - 一键部署你的服务。三个服务可免费使用，每月提供5美元免费额度。
  * [mogenius](https://mogenius.com) - 轻松在Kubernetes上构建、部署和运行服务。免费套餐支持将本地Kubernetes与mogenius连接，使单个开发者能够在自己的机器上创建类似生产环境的测试环境。
  * [genezio](https://genezio.com/) - 无服务器函数提供商，每月为非商业或学术用途免费提供100万次函数调用、100GB带宽和10个定时任务。

**[⬆️ 返回顶部](#目录)**

## 后端即服务（BaaS）

  * [Activepieces](https://www.activepieces.com) - 在应用程序的后端构建自动化流程，以将多个应用程序连接在一起。例如，当应用程序中发生某个事件时，发送一条Slack消息或在Google表格中添加一行数据。每月免费提供多达5000个任务。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse平台的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和Web后端即服务（Baas），提供1GB免费文件存储、每月50000条推送通知以及表中1000个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的人工智能将在我们的函数运行时和托管存储上启动您的Python API，可在我们的在线编辑器中免费构建和托管，也可使用您喜欢的工具在本地进行。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，用于为您的企业构建和部署数字创新。可访问一个全面的个人沙盒，其中包括平台、软件开发工具包（SDK）以及可用于构建和定制应用程序的组件库。
  * [connectycube.com](https://connectycube.com) - 提供无限的聊天消息、对等（p2p）语音和视频通话、文件附件以及推送通知。对于用户数不超过1000的应用程序免费。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管您的数据（具有关系的文档和可序列化的ACID事务）、无服务器函数以及用于向各种客户端流式传输更新的WebSocket。对于小型项目免费 - 最多100万条记录，每月500万次函数调用。
  * [darklang.com](https://darklang.com/) - 托管语言，结合了编辑器和基础设施。在测试版期间可访问，测试版结束后计划推出慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase可帮助您构建和运行成功的应用程序。免费的Spark计划提供身份验证、托管、Firebase机器学习（ML）、实时数据库、云存储、测试实验室。A/B测试、分析、应用程序分发、应用程序索引、云消息传递（FCM）、崩溃报告（Crashlytics）、动态链接、应用内消息、性能监控、预测和远程配置始终免费。
  * [Flutter Flow](https://flutterflow.io) — 无需编写一行代码即可构建Flutter应用程序的用户界面（UI）。它还集成了Firebase。免费计划包括完全访问UI构建器和免费模板。
  * [getstream.io](https://getstream.io/) — 只需几个小时而非数周即可构建可扩展的应用内聊天、消息传递、视频和音频以及信息流功能。
  * [hasura.io](https://hasura.io/) — Hasura可扩展您现有的数据库（无论其托管位置如何），并提供一个即时的GraphQL API，可安全地用于Web、移动和数据集成工作负载。每月1GB数据传输量免费。
  * [iron.io](https://www.iron.io/) — 异步任务处理（类似于AWS Lambda），提供免费层和1个月免费试用。
  * [nhost.io](https://nhost.io) - 适用于Web和移动应用程序的无服务器后端。免费计划包括PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
  * [onesignal.com](https://onesignal.com/) — 提供无限的免费推送通知。每月可发送10000封电子邮件，联系人数量无限制，并可使用自动预热功能。
  * [paraio.com](https://paraio.com) — 后端服务API，具有灵活的身份验证、全文搜索和缓存功能。对于一个应用程序免费，提供1GB应用程序数据。
  * [progress.com](https://www.progress.com/kinvey) — 移动后端，入门计划每秒请求数无限制，提供1GB数据存储。支持企业应用程序。
  * [pubnub.com](https://www.pubnub.com/) — 每月最多100万条消息和100台每日活跃设备的免费推送通知。
  * [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多150万次推送免费。
  * [pushcrew.com](https://pushcrew.com/) — 推送通知服务。对于最多2000名订阅者提供无限通知。
  * [pusher.com](https://pusher.com/beams) — 对于每月2000名活跃用户提供免费、无限的推送通知。适用于iOS和Android设备的单一API。
  * [quickblox.com](https://quickblox.com/) — 用于即时消息、视频和语音通话以及推送通知的通信后端。
  * [restspace.io](https://restspace.io/) - 配置一个带有身份验证、数据、文件、电子邮件API、模板等服务的服务器，然后组合成管道并转换数据。
  * [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用拖放工具快速构建Lightning应用程序。通过点击操作自定义数据模型。使用Apex代码进行更深入开发。使用强大的API与任何内容集成。具备企业级安全性保护。通过点击操作或任何前沿Web框架自定义用户界面。免费的开发者计划可让您访问完整的Lightning平台。
  * [ServiceNow开发者计划](https://developer.servicenow.com/) — 快速构建、测试和部署能让您的组织工作更高效的应用程序。提供免费实例并可提前预览。
  * [simperium.com](https://simperium.com/) — 即时自动地在各处移动数据，支持多平台，结构化数据的发送和存储无限制，每月最多2500用户。
  * [Singlebase.cloud](https://singlebase.cloud) — SinglebaseCloud是一个由人工智能驱动的一体化后端平台，旨在加速应用程序开发。它提供诸如向量数据库（Vector DB）、关系文档数据库（Relational Document DB）、身份验证、搜索和存储等工具，旨在简化后端开发。免费/入门计划提供关系文档数据库、身份验证、搜索、存储。
  * [stackstorm.com](https://stackstorm.com/) — 针对应用程序、服务和工作流的事件驱动自动化，无流程、访问控制、LDAP时免费。
  * [streamdata.io](https://streamdata.io/) — 将任何REST API转换为事件驱动的流式API。免费计划最多支持100万条消息和10个并发连接。
  * [Supabase](https://supabase.com) — 用于构建后端的开源Firebase替代方案。免费计划提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) — 具有身份验证、配额、监控和分析功能的API管理。提供免费云服务。
  * [zapier.com](https://zapier.com/) — 连接您使用的应用程序以实现任务自动化。每15分钟可执行5次自动化操作，每月100个任务。
  * [IFTTT](https://ifttt.com) — 自动控制您喜爱的应用程序和设备。免费2个小程序（Applets）。
  * [Integrately](https://integrately.com) — 一键自动执行繁琐任务。免费100个任务，15分钟更新时间，5个活跃自动化操作，支持Webhook。
  * [LeanCloud](https://leancloud.app/) — 移动后端。1GB数据存储、256MB实例、每天3000次API请求和每天10000次推送免费。（API与Parse平台非常相似）

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个低代码平台，用于构建业务流程应用程序，可定制移动端和网页应用。提供拖放式界面，具备离线支持、实时位置跟踪等功能，并能与各种第三方服务集成。
  * [Basedash](https://www.basedash.com) — 用于构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API（表述性状态转移应用程序编程接口）。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可在数分钟内创建内部应用程序。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker（容器化平台）、K8s（Kubernetes，容器编排系统）。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。可与15种以上数据库及任何API集成。
  * [ToolJet](https://www.tooljet.com/) — 用于构建业务应用程序的可扩展低代码框架。可连接数据库、云存储、GraphQL（一种用于API的查询语言）、API端点、Airtable（在线数据库平台）等，并使用拖放式应用构建器构建应用程序。
  * [ReTool](https://retool.com/) — 用于构建内部应用程序的低代码平台。ReTool具有高度可定制性。如果你能用JavaScript和API编写程序，就能在ReTool中实现。免费版每月最多支持5名用户，应用程序和API连接数量不受限制。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ - 一个低代码平台，可帮助工程团队和产品经理以10倍的速度构建内部工具、自定义用户旅程、数字体验、自动化程序、自定义管理面板和运营应用程序。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud - 一个强大的开源低代码平台，供开发人员构建内部工具。通过使用ILLA的组件和操作库，开发人员可在构建工具时节省大量时间。对5名团队成员免费。
  * [outsystems.com](https://www.outsystems.com/) — 用于本地或云端的企业级网页开发平台即服务（PaaS），免费的“个人环境”提供无限制的代码编写和最多1GB的数据库空间。
  * [UI Bakery](https://uibakery.io) — 低代码平台，可加快自定义网页应用程序的构建速度。支持通过拖放方式构建用户界面，并可通过JavaScript、Python和SQL进行高度自定义。提供云端和自托管两种解决方案。对最多5名用户免费。
  * [Mendix](https://www.mendix.com/) — 面向企业的快速应用程序开发平台，提供无限制的沙盒环境，支持所有用户，每个应用程序提供0.5GB存储空间和1GB内存。此外，免费版还允许使用Studio和Studio Pro集成开发环境（IDE）。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用OpenAI、Anthropic、Firecrawl等免费内置API。非常适合构建人工智能代理/内部工具并与团队共享。免费版包括对API的完全访问权限、人工智能编码助手以及每月10,000次执行额度。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 提供100 MB免费网页托管服务，支持MySQL、PostgreSQL、CouchDB（面向文档的数据库）、MongoDB（文档型数据库）、PHP、Python、Ruby、Node.js（JavaScript运行时环境）、Elixir（函数式编程语言）、Java、Deno（JavaScript和TypeScript的运行时）、自定义网络服务器，可通过FTP（文件传输协议）、WebDAV（基于HTTP的文件系统协议）和SSH（安全外壳协议）访问；包含邮箱、邮件列表和应用安装程序。
  * [Awardspace.com](https://www.awardspace.com) — 免费网页托管服务 + 免费短域名，支持PHP、MySQL、应用安装程序、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费，是一个以开发者为先的部署和开发平台，可减少基础设施方面的麻烦并加快设置速度。
  * [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建网络和移动应用程序，使用Bubble品牌标识免费。
  * [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化网页托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform Starter层级可免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive（谷歌云盘）和OneDrive（微软的云存储服务）托管到网络。仅支持静态站点，永远免费。每个谷歌/微软账户可托管一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一款开发者桌面应用程序，用于在本地托管站点并公开（实时）共享。可使用其美观的用户界面、API（应用程序编程接口）和/或CLI（命令行界面）按自己喜欢的方式工作。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划下构建和托管基于Markdown的文档站点。甚至可以从API定义文件自动为站点生成API参考文档。站点托管在 _yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI（通用网关接口）、MySQL、FTP、文件管理器、POP（邮局协议）电子邮件、免费子域名、免费域名托管、DNS（域名系统）区域编辑器、网站统计，提供免费在线支持以及许多其他免费主机不提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括业界最佳的控制面板和50多种免费应用程序的一键安装功能。即时设置，无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利性免费网页托管服务，提供Plesk控制面板、PHP、Node.js、Python、Django（Python的Web框架）、Flask（Python的轻量级Web框架）、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP电子邮件，不限带宽，提供免费子域名，免费提供1000 MB存储空间，可选择升级。
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 可免费部署多达100个静态站点，支持自定义域名并配备SSL（安全套接层协议），每月100 GB带宽，260多个Cloudflare CDN（内容分发网络）节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 提供网页托管服务，支持通过SFPT（安全文件传输协议）访问进行文件上传和下载，支持PHP。
  * [Neocities](https://neocities.org) — 静态站点，提供1 GB免费存储空间和200 GB带宽。
  * [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用程序，100 GB数据量和每月100 GB带宽免费。
  * [pantheon.io](https://pantheon.io/) — 提供Drupal（内容管理系统）和WordPress（博客平台）托管、自动化DevOps（开发运维）以及可扩展的基础设施。对开发者和代理机构免费，不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管服务，支持版本控制、PDF生成等功能。
  * [render.com](https://render.com) — 统一的云平台，用于构建和运行应用程序及站点，提供免费SSL、全球CDN、私有网络、从Git自动部署，针对网络服务、数据库和静态网页提供完全免费的计划。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布平台，支持自定义域名，可创建无限站点。
  * [telegra.ph](https://telegra.ph/) — 使用Quill（富文本编辑器）轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50页，50 MB存储空间，仅可使用170多种预定义块中的主要块，不支持字体、网站图标和自定义域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管网络应用程序，提供免费SSL、全球CDN，每次执行 `git push` 时都有唯一的预览URL。非常适合Next.js和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于软件即服务（SaaS）的网站构建器，可创建无限网站，提供70多种模块、五个模板、自定义CSS、网站图标、SEO（搜索引擎优化）和表单功能，不支持自定义域名。
  * [Qoddi](https://qoddi.com) - 类似于Heroku的平台即服务（PaaS），以开发者为中心，功能齐全。免费层支持静态资产、暂存环境和开发者应用程序。
  * [FreeFlarum](https://freeflarum.com/) - 由社区支持的免费Flarum（论坛软件）托管服务，最多支持250名用户（捐赠可去除页脚水印）。
  * [fleek.co](https://fleek.co/) - 在开放网络及其协议上构建现代站点和应用程序，对无限网站免费，每月提供50 GB带宽。
  * [MDB GO](https://mdbgo.com/) - 为一个项目提供免费托管服务，容器存活时间（TTL）为两周，每个项目500 MB内存，SFTP - 1G磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 一个易于使用的云平台，在其付费服务中提供免费托管三个静态站点的服务。
  * [Serv00.com](https://serv00.com/) — 提供3 GB免费网页托管服务，每日备份（保留7天）。支持定时任务（Crontab jobs）、SSH访问、仓库（GIT、SVN和Mercurial），支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。

**[⬆️ 返回顶部](#目录)**

## 域名系统（DNS）

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare（.cloudflare公司）提供的免费公共DNS解析器，快速且安全（可加密你的DNS查询）。有助于绕过你的互联网服务提供商的DNS封锁，防止DNS查询被窥探，以及[阻止成人和恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它也可以[通过API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：它只是一个DNS解析器，并非DNS托管商。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供API以及许多其他免费DNS功能的免费DNS服务。
  * [cloudns.net](https://www.cloudns.net/) — 可免费托管多达1个域名，每个域名有50条记录的DNS服务。
  * [deSEC](https://desec.io) - 支持API的免费DNS托管服务，在设计时充分考虑了安全性。它基于开源软件运行，并由 [SSE](https://www.securesystems.de/)提供支持。
  * [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
  * [Zonomi](https://zonomi.com/) — 具备即时DNS传播功能的免费DNS托管服务。免费套餐：1个DNS区域（域名），最多10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS托管服务。
  * [duckdns.org](https://www.duckdns.org/) — 免费的动态域名系统（DDNS）服务，免费套餐最多支持5个域名。还提供各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) — 支持[API](https://dynv6.com/docs/apis)且可管理多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）的免费DDNS服务。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管服务。此外，还基于众多公共用户[贡献的域名](https://freedns.afraid.org/domain/registry/)提供免费子域名。注册后可在“子域名”菜单中获取免费子域名。
  * [luadns.com](https://www.luadns.com/) — 免费DNS托管服务，可托管三个域名，所有功能都有合理的限制。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS服务。对域名数量没有限制。
  * [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月有30万次免费查询。
  * [noip.at](https://noip.at/) — 无需注册、跟踪、记录日志或投放广告的免费DDNS服务。对域名数量没有限制。
  * [noip](https://www.noip.com/) — 一种动态DNS服务，免费提供最多3个主机名，每30天需确认一次。
  * [sslip.io](https://sslip.io/) — 免费DNS服务，当使用嵌入IP地址的主机名进行查询时，会返回该IP地址。
  * [zilore.com](https://zilore.com/en/dns) — 可免费托管5个域名的DNS服务。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管服务。
  * [zonewatcher.com](https://zonewatcher.com) — 提供自动备份和DNS更改监控功能。可免费托管一个域名。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 华为提供的免费DNS托管服务
  * [Hetzner](https://www.hetzner.com/dns-console) – 由Hetzner（赫茨纳）提供的支持API的免费DNS托管服务。
  * [Glauca](https://docs.glauca.digital/hexdns/) – 可免费托管多达3个域名并支持DNSSEC的DNS托管服务

**[⬆️ 返回顶部](#目录)**

## 域名

  * [eu.org](https://nic.eu.org) — 免费的eu.org域名。申请通常在14天内获批。
  * [pp.ua](https://nic.ua/) — 免费的pp.ua子域名。
  * [us.kg](https://nic.us.kg/) - 免费的us.kg子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务（IaaS）

  * [4EVERLAND](https://www.4everland.org/) — 与AWS S3的API、界面操作、命令行界面（CLI）及其他上传方法兼容，能安全、便捷且高效地从IPFS和Arweave网络上传和存储文件。注册用户可免费获得6GB的IPFS存储空间和300MB的Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。可无限期免费使用10GB（类似亚马逊S3）的对象存储。
  * [filebase.com](https://filebase.com/) - 由区块链驱动的与S3兼容的对象存储。可无限期免费使用5GB存储空间。
  * [Tebi](https://tebi.io/) - 与S3兼容的对象存储。免费提供25GB存储空间和250GB出站传输量。
  * [Idrive e2](https://www.idrive.com/e2/) - 与S3兼容的对象存储。每月免费提供10GB存储空间和10GB下载带宽。
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 与S3兼容的对象存储。每月免费提供15GB存储空间和15GB下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Redis方案。单节点，1个CPU，1GB内存，对于PostgreSQL和MySQL，提供5GB存储空间。可轻松迁移到更高级的方案或跨云迁移。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但实际上是关系型数据库，不限数据库数量，每个数据库1200行，每月1000次API请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生的Cassandra即服务，提供[80GB免费套餐](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的JavaScript无服务器API/后端和NoSQL数据库服务，具有函数、类似MongoDB的查询、键/值查找、作业系统、实时消息、工作队列、强大的命令行界面（CLI）以及基于Web的数据管理器。免费套餐提供5GB存储空间，每分钟60次API调用，包含2个开发者账号，无需信用卡。
  * [CrateDB](https://crate.io/) - 用于实时分析的分布式开源SQL数据库。[免费套餐CRFREE](https://crate.io/lp-crfree)：单节点，2个CPU，2 GiB内存，8 GiB存储空间。每个组织一个集群，无需支付信息。
  * [FaunaDB](https://fauna.com/) — 无服务器云数据库，具有原生GraphQL、多模型访问功能，每日免费套餐上限为100 MB
  * [Upstash](https://upstash.com/) — 无服务器Redis，免费套餐每日最多10,000次请求，数据库最大256MB，支持20个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费套餐提供512 MB空间
  * [redsmin.com](https://www.redsmin.com/) — Redis的在线实时监控和管理服务，可免费监控1个Redis实例
  * [redislabs](https://redislabs.com/try-free/) - 提供30MB的免费Redis实例
  * [MemCachier](https://www.memcachier.com/) — 托管的Memcache服务。免费套餐提供最高25MB空间、1个代理服务器以及基础分析功能
  * [scalingo.com](https://scalingo.com/) — 主要是一个平台即服务（PaaS），但提供128MB至192MB的MySQL、PostgreSQL或MongoDB免费套餐
  * [SeaTable](https://seatable.io/) — 由Seafile团队打造的灵活的、类似电子表格的数据库。不限表格数量，2000行数据，1个月版本控制，最多支持25个团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费套餐，且在测试版期间所有套餐均完全免费
  * [StackBy](https://stackby.com/) — 一个集电子表格的灵活性、数据库的强大功能以及与您喜爱的业务应用程序的内置集成功能于一体的工具。免费套餐包含不限用户数量、10个栈，每个栈可附加2GB文件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是一个开源的、兼容MySQL的分布式混合事务分析处理（HTAP）关系型数据库管理系统（RDBMS）。TiDB Serverless每月免费提供5GB行存储、5GB列存储以及5000万个请求单元（RUs）。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是一个边缘数据库中的SQLite开发者体验平台。Turso提供永久免费的入门套餐，总存储空间9 GB，最多500个数据库，最多3个地理位置，每月10亿行读取量，支持本地使用SQLite进行开发。
  * [InfluxDB](https://www.influxdata.com/) — 时间序列数据库，免费套餐支持每5分钟写入3MB数据、读取30MB数据，支持10,000个基数序列
  * [restdb.io](https://restdb.io/) - 一个快速且简单的NoSQL云数据库服务。使用restdb.io可获得模式、关系、自动REST API（支持类似MongoDB的查询）以及用于数据操作的高效多用户管理界面。免费套餐允许3个用户，2500条记录，每秒1次API请求。
  * [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 免费的CockroachDB，最高5GB空间和1vCPU（[请求单元有限制](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta)）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统（DBMS）/分析平台，使用Cypher查询语言和REST API。对图的大小有限制（50,000个节点，175,000个关系）。
  * [Neon](https://neon.tech/) — 托管的PostgreSQL，总存储空间0.5 GB，1个项目，10个分支，不限数据库数量，主分支始终可用（5分钟后自动暂停），非主分支计算每月总活跃时间20小时。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管的原生图数据库管理系统，使用GraphQL API。每日数据传输限制为1 MB。
  * [Tinybird](https://tinybird.co) - 一个无服务器的托管ClickHouse，通过HTTP进行无连接数据摄取，并允许您将SQL查询发布为托管的HTTP API。免费套餐无时间限制，提供10GB存储空间，每日1000次API请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管的原生图数据库管理系统（DBMS）/分析平台，使用类似SQL的图查询语言和REST API。提供一个免费实例，包含2个vCPU、8GB内存和50GB存储空间，闲置1小时后进入休眠状态。
  * [TerminusCMS](https://terminusdb.com/pricing) — 为TerminusDB提供的托管免费服务，TerminusDB是一个用Prolog和Rust编写的文档和图数据库。对开发者免费，企业部署和支持需付费。
  * [YugabyteDB](https://cloud.yugabyte.com) - YugabyteDB是一个兼容PostgreSQL的分布式SQL数据库。云免费套餐包含2个vCPU、4GB内存和10GB磁盘空间。
  * [filess.io](https://filess.io) - filess.io是一个平台，您可以在该平台上免费创建一个以下数据库管理系统（DBMS）的数据库：MySQL、MariaDB、MongoDB和PostgreSQL。
  * [xata.io](https://xata.io) - Xata是一个无服务器数据库，具有内置的强大搜索和分析功能。一个API，多个类型安全的客户端库，针对您的开发工作流程进行了优化。永久免费套餐适合业余开发者，包含3个Xata单元，具体单元定义请参考网站说明。
  * [8base.com](https://www.8base.com/) - 8base是一个为JavaScript开发者打造的全栈低代码开发平台，基于MySQL、GraphQL和无服务器后端即服务构建。它允许您使用UI应用程序构建器快速构建Web应用程序并快速扩展。免费套餐包含2500行数据、500存储容量、1Gb/h无服务器计算资源以及5个客户端应用程序用户。
  * [Nile](https://www.thenile.dev/) — 一个面向B2B应用的Postgres平台。不限数据库数量，始终可用，无停机时间，总存储空间1GB，5000万个查询令牌，支持自动扩展，不限向量嵌入数量

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器和其他路由器

  * [Pinggy](https://pinggy.io) — 通过一条命令即可为本地主机创建公共URL，无需下载任何软件。支持HTTPS / TCP / TLS隧道。免费计划下，隧道的生命周期为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — 一个Visual Studio扩展，用于将IIS Express暴露到本地网络，或者通过隧道暴露到公共URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一种托管式VPN服务（VPN：虚拟专用网络），可让你安全地将类似局域网的网络扩展到分布式团队。其免费计划允许创建不限数量的网络，每个网络最多支持5人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的套接字即服务平台，在部署WebSocket服务器代码时，会为你提供一个 `wss://` URL，并允许你监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公共URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露到公共URL。有免费的托管版本，且[开源](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露到公共URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装，无需注册。提供免费子域名，无使用限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN将多台计算机连接在一起，形成类似局域网的网络。支持无限数量的对等节点。（Hamachi的替代方案）
  * [segment.com](https://segment.com/) — 用于将事件翻译并路由到其他第三方服务的中心平台。每月免费100,000个事件。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) — 零配置VPN，使用开源的WireGuard协议。可安装在MacOS、iOS、Windows、Linux和Android设备上。个人使用的免费计划支持100台设备和3个用户。
  * [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发以及代理所有的Webhooks到公共或内部（即本地主机）目的地。还可以通过获取公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`），将在私有网络中运行的服务器通过隧道暴露出来。
  * [Hookdeck](https://hookdeck.com/pricing) — 可在任何地方开发、测试和监控你的Webhooks。每月100,000次请求和100,000次尝试，数据保留三天。
  * [Xirsys](https://www.xirsys.com/pricing/) — 无限制的STUN使用 + 每月500 MB的TURN带宽，带宽有限制，支持单个地理区域。
  * [ZeroTier](https://www.zerotier.com) — 自由开源软件（FOSS）管理的虚拟以太网即服务。免费计划下，支持25个客户端组成的不限数量的端到端加密网络。提供桌面/移动/网络应用客户端；提供Web界面，用于配置自定义路由规则以及在私有网络上批准新的客户端节点。
  * [LocalXpose](https://localxpose.io) — 反向代理，可让你将本地主机服务器暴露到互联网。免费计划下，隧道的生命周期为15分钟。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布到公共自定义URL，并通过访问控制确保其安全性。在一个集群中支持5个服务免费使用。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费计划包括欧洲服务器、随机子域名和单个用户。
  * [btunnel](https://www.btunnel.in/) — 将本地主机和本地TCP服务器暴露到互联网。免费计划包括文件服务器、自定义HTTP请求和响应头、基本身份验证保护以及1小时的隧道超时设置。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 可供最多5名团队成员使用的免费项目管理和敏捷开发（SCRUM）软件
* [asana.com](https://asana.com/) — 供私人项目与协作者使用的免费软件
* [Backlog](https://backlog.com) — 一个平台就能满足您的团队发布出色项目所需的一切。免费计划提供1个项目、10个用户名额以及100MB存储空间。
* [Basecamp](https://basecamp.com/personal) — 待办事项列表、里程碑管理、类似论坛的消息传递、文件共享以及时间跟踪。最多可创建3个项目，支持20个用户，提供1GB存储空间。
* [bitrix24.com](https://www.bitrix24.com/) — 企业内部网和项目管理工具。免费计划为无限用户提供5GB空间。
* [cacoo.com](https://cacoo.com/) — 在线实时图表绘制：流程图、统一建模语言（UML）图、网络图。免费版每个图表最多支持15个用户，共25张工作表。
* [Chpokify](https://chpokify.com/) — 基于团队的计划扑克工具，可节省冲刺估算时间。免费版支持最多5个用户、免费的Jira集成、无限次视频通话、无限个团队以及无限次会议。
* [clickup.com](https://clickup.com/) — 项目管理工具。有免费版和带云存储的高级版。提供移动应用和Git集成。
* [Clockify](https://clockify.me) - 时间跟踪器和时间表应用程序，可让您跨项目跟踪工作时间。支持无限用户，永久免费。
* [Cloudcraft](https://cloudcraft.co/) — 使用Cloudcraft可视化设计器，几分钟内就能设计出专业的架构图。该工具针对亚马逊网络服务（AWS）进行了优化，其智能组件还能显示实时数据。免费计划为单个用户提供无限个私人图表。
* [Codegiant](https://codegiant.io) — 具备代码仓库托管和持续集成/持续交付（CI/CD）功能的项目管理工具。免费计划提供无限个代码仓库、项目和文档，支持5名团队成员。每月提供500分钟的CI/CD时间，每月30000分钟的无服务器代码运行时间，1GB代码仓库存储空间。
* [Confluence](https://www.atlassian.com/software/confluence) - 阿特拉斯（Atlassian）的内容协作工具，用于帮助团队高效协作和共享知识。免费计划支持最多10个用户。
* [contriber.com](https://www.contriber.com/) — 可定制的项目管理平台，提供免费入门计划，含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持最多3个项目、无限个用户，提供1GB存储空间。
* [diagrams.net](https://app.diagrams.net/) — 在线图表可本地存储在谷歌云端硬盘（Google Drive）、OneDrive或Dropbox中。所有功能和存储级别均免费。
* [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理器。免费计划提供无限个项目、用户和文件存储空间。
* [easyretro.io](https://www.easyretro.io/) — 简单直观的冲刺回顾工具。免费计划每月每个看板有三个公共看板和一次调查。
* [GForge](https://gforge.com) — 适用于复杂项目的项目管理和问题跟踪工具集，提供本地部署和软件即服务（SaaS）两种选项。SaaS免费计划为前5个用户提供免费服务，开源项目也免费。
* [gleek.io](https://www.gleek.io) — 为开发者提供的免费描述转图表工具。使用关键词创建非正式的UML类图、对象图或实体关系图。
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector输出两个GraphQL模式之间的更改列表。每个差异都会被精确解释，并标记为重大更改、非重大更改或危险更改。
* [huboard.com](https://huboard.com/) — 为您的GitHub问题提供即时项目管理，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台。免费计划提供无限个用户、项目和看板，以及100MB存储空间。
* [Instabug](https://instabug.com) — 一款用于移动应用的综合错误报告和应用内反馈软件开发工具包（SDK）。免费计划支持最多1个应用和1名成员。
* [WishKit](https://wishkit.io) — 为您的iOS/macOS应用收集应用内用户反馈，并根据用户投票对功能进行优先级排序。免费计划支持最多1个应用。
* [Ilograph](https://www.ilograph.com/)  — 交互式图表，允许用户从多个角度和细节级别查看其基础设施。图表可以用代码表示。免费层提供无限个私人图表，最多可设置3名查看者。
* [Jira](https://www.atlassian.com/software/jira) — 高级软件开发项目管理工具，在许多企业环境中使用。免费计划支持最多10个用户。
* [kanbanflow.com](https://kanbanflow.com/) — 基于看板的项目管理工具。有免费版和功能更多的高级版
* [kanbantool.com](https://kanbantool.com/) — 基于看板的项目管理工具。免费计划提供两个看板和两个用户名额，不支持附件或文件。
* [Kitemaker.co](https://kitemaker.co) - 在产品开发过程的所有阶段进行协作，并通过Slack、Discord、Figma和Github跟踪工作进度。支持无限用户、无限空间。免费计划最多支持250个工作项。
* [Kiter.app](https://www.kiter.app/) - 让任何人都能组织自己的求职过程，跟踪面试、机会和人脉。功能强大的网页应用和Chrome扩展程序。完全免费。
* [Kumu.io](https://kumu.io/)  — 带有动画、装饰、滤镜、聚类、电子表格导入等功能的关系图。免费层允许创建无限个公共项目。图表大小无限制。学生可免费创建私人项目。如果您不想将文件公开在线，还提供沙盒模式（上传、编辑、下载、删除）。
* [Linear](https://linear.app/) — 界面简洁的问题跟踪器。免费版支持无限成员，文件上传大小限制为10MB，最多可管理250个问题（不包括存档问题）
* [leiga.com](https://www.leiga.com/) — Leiga是一款软件即服务（SaaS）产品，利用人工智能自动管理您的项目，帮助您的团队保持专注，释放巨大潜力，确保项目按计划推进。免费版支持最多10个用户、20个自定义字段、2GB存储空间，人工智能视频录制限制为每个视频5分钟，自动化运行次数为每月20次/用户。
* [Lucidchart](https://www.lucidchart.com/) - 一款具有协作功能的在线图表工具。免费计划提供三个可编辑文档、100个专业模板以及基本协作功能。
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具。免费版支持最多3个项目和无限个项目成员。
* [MeuScrum](https://www.meuscrum.com/en) - 带有看板的免费在线敏捷开发（Scrum）工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，可让您的团队进行协作、规划、分析和管理日常任务。基础计划永久免费，提供100MB存储空间和5个用户/团队名额。支持无限个工作区、会议、任务分配、时间表和问题跟踪。
* [Ora](https://ora.pm/) - 敏捷任务管理和团队协作工具。免费版支持最多3个用户，文件大小限制为10MB。
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 无限个公共项目和两个私人项目免费，最多支持3个活跃用户（读写权限）和无限个被动用户（只读权限）。
* [plan.io](https://plan.io/) — 具备代码仓库托管和更多选项的项目管理工具。免费版支持2个用户、10个客户，提供500MB存储空间
* [Plane](https://plane.so/) - Plane是一款简单、可扩展的开源项目和产品管理工具。免费版支持无限成员，文件上传大小限制为5MB，最多可管理1000个问题。
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（基于共识的估算工具）。免费版支持无限用户、团队、会议、轮次和投票。无需注册。
* [ScrumFast](https://www.scrumfast.com) - 界面非常直观的敏捷开发（Scrum）看板，免费版支持最多5个用户。

  * [快捷（Shortcut）](https://shortcut.com/) - 项目管理平台。永久免费供最多10名用户使用。
  * [塔达姆（Tadum）](https://tadum.app) - 专为定期会议设计的会议议程和会议记录应用程序，供最多10人的团队免费使用
  * [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，对开源项目免费
  * [塔拉人工智能（Tara AI）](https://tara.ai/) — 简单的冲刺管理服务。免费计划提供无限制的任务、冲刺和工作空间，且无用户数量限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板和敏捷开发到几乎任何运营流程。对不限数量的用户免费，最多支持1,000个数据实体 {[更多详情](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划提供一个工作空间，其中包含无限制的任务和项目；1GB文件存储空间；1周的项目历史记录；每次视频会议最多可容纳5名参会者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。最多支持5名用户免费使用。可与GitHub/Trello/Dropbox/Google Drive集成
  * [Teaminal](https://www.teaminal.com) - 面向远程团队的站会、回顾和冲刺规划工具。最多支持15名用户免费使用。
  * [teamwork.com](https://teamwork.com/) — 项目管理及团队聊天工具。供5名用户和2个项目免费使用。提供高级计划。
  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，带有破冰游戏、动图和表情符号。免费计划包含3次回顾，成员数量无限制。
  * [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和beta测试平台。供个人使用免费
  * [terrastruct.com](https://terrastruct.com/) — 专门用于软件架构的在线图表制作工具。免费层级下，每个图表最多支持4层。
  * [todoist.com](https://todoist.com/) — 协作式和个人任务管理工具。免费计划包含：5个活跃项目，每个项目最多5名用户，文件上传上限为5MB，3个过滤器，以及1周的活动历史记录。
  * [trello.com](https://trello.com/) — 基于看板的项目管理工具。个人看板数量无限制，团队看板数量为10个。
  * [Tweek](https://tweek.so/) — 简单的每周待办事项日历及任务管理工具。
  * [ubertesters.com](https://ubertesters.com/) — 测试平台，集成众测功能，支持2个项目，5名成员
  * [Wikifactory](https://wikifactory.com/) — 提供项目、版本控制系统（VCS）和问题跟踪功能的产品设计服务。免费计划提供无限制的项目和协作者，以及3GB存储空间。
  * [Yodiz](https://www.yodiz.com/) — 敏捷开发和问题跟踪工具。最多支持3名用户免费使用，项目数量无限制。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管的YouTrack（InCloud），适用于开源软件（FOSS）项目和私人项目（供3名用户免费使用）。包含时间跟踪和敏捷看板功能
  * [zenhub.com](https://www.zenhub.com) — 唯一集成在GitHub内的项目管理解决方案。对公共仓库、开源软件和非营利组织免费
  * [zenkit.com](https://zenkit.com) — 项目管理和协作工具。最多支持5名成员免费使用，附件存储空间为5GB。
  * [Zube](https://zube.io) — 项目管理工具，免费计划支持4个项目和4名用户。可与GitHub集成。
  * [Toggl](https://toggl.com/) — 提供两个免费的生产力工具。[Toggl Track](https://toggl.com/track/) 是一款时间管理和跟踪应用程序，其免费计划提供无缝的时间跟踪和报告功能，专为自由职业者设计。它具有无限制的跟踪记录、项目、客户、标签、报告等功能。[Toggl Plan](https://toggl.com/plan/) 用于任务规划，为独立开发者提供免费计划，包含无限制的任务、里程碑和时间表。
  * [Sflow](https://sflow.io) — sflow.io是一款为敏捷软件开发、营销、销售和客户支持打造的项目管理工具，尤其适用于外包和跨组织协作项目。免费计划支持最多3个项目和5名成员。
  * [Pulse.red](https://pulse.red) — 面向项目的免费极简主义时间跟踪和时间表应用程序。

**[⬆️ 返回顶部](#目录)**

## 存储和媒体处理

  * [Android文件主机（AndroidFileHost）](https://androidfilehost.com/) - 免费的文件共享平台，速度、带宽、文件数量、下载次数等均无限制。它主要面向与安卓开发相关的文件，如APK构建文件、自定义ROM及修改文件等。但似乎也接受其他任何类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — 为Borg备份提供简单且安全的异地备份托管服务。提供10 GB免费备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。提供10 GB免费存储空间。
  * [sync.com](https://www.sync.com/) - 端到端云存储服务。提供5 GB免费存储空间。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。提供至多10 GB的免费存储空间。
  * [sirv.com](https://sirv.com/) — 智能图像内容分发网络（CDN），支持实时图像优化和调整大小。免费套餐包含500 MB存储空间和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 完整的图像优化和内容分发网络（CDN）服务，在全球拥有1500多个服务节点。具备多种图像调整大小、压缩和添加水印功能。提供用于响应式图像、360度图像制作和图像编辑的开源插件。免费月度计划包含25GB CDN流量、25GB缓存存储以及无限制的图像转换。
  * [cloudinary.com](https://cloudinary.com/) — 为网站和应用程序提供图像上传、强大的图像处理、存储和分发服务，支持Ruby、Python、Java、PHP、Objective-C等多种编程语言库。免费套餐每月包含25个积分。1个积分等同于1000次图像转换、1 GB存储空间或1 GB CDN使用量。
  * [embed.ly](https://embed.ly/) — 提供用于在网页中嵌入媒体、响应式图像缩放以及从网页中提取元素的应用程序编程接口（APIs）。每月最多可处理5000个URL，每秒请求次数限制为15次，在此范围内免费使用。
  * [filestack.com](https://www.filestack.com/) — 提供文件选择、转换和分发服务，对250个文件、500次转换和3 GB带宽免费。
  * [file.io](https://www.file.io) - 提供2 GB文件存储空间。文件在被下载一次后会自动删除。提供REST API用于与存储进行交互。速率限制为每分钟一次请求。
  * [freetools.site](https://freetools.site/) — 免费的在线工具。可用于转换或编辑文档、图像、音频、视频等。
  * [GoFile.io](https://gofile.io/) - 免费的文件共享和存储平台，可通过基于网页的用户界面和应用程序编程接口（API）使用。文件大小、带宽、下载次数等均无限制。但文件若在十天内无人下载（即处于非活动状态），则会被删除。
  * [gumlet.com](https://www.gumlet.com/) — 通过内容分发网络（CDN）提供图像和视频的托管、处理和流媒体服务。提供慷慨的免费套餐，视频每月250 GB，图像每月30 GB。
  * [image-charts.com](https://www.image-charts.com/) — 可无限制生成带有水印的图像图表。
  * [Imgbot](https://github.com/marketplace/imgbot) — Imgbot是一个友好的机器人，可优化你的图像并节省你的时间。优化后的图像文件大小更小，且不会牺牲图像质量。对开源项目免费。
  * [ImgBB](https://imgbb.com/) — ImgBB是一个无限制的图像托管服务。可将图像拖放到屏幕上的任意位置。单个图像限制为32 MB。上传图像后可获取直接图像链接、BBCode和HTML缩略图。登录后可查看上传历史记录。
  * [imgen](https://www.jitbit.com/imgen/) - 免费且无限制的社交封面图像生成应用程序编程接口（API），无水印。
  * [imgix](https://www.imgix.com/) - 图像缓存、管理和内容分发网络（CDN）服务。免费计划包含1000张原始图像、无限次转换和100 GB带宽。
  * [kraken.io](https://kraken.io/) — 作为一项服务，用于优化网站性能的图像优化服务，免费计划支持最大1 MB文件大小的图像优化。
  * [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费套餐允许存储100个键，每个键1KB，每小时100次调用。
  * [npoint.io](https://www.npoint.io/) — 支持协同模式编辑架构的JSON存储服务。
  * [nitropack.io](https://nitropack.io/) - 通过完整的前端优化（缓存、图像和代码优化、内容分发网络）自动加速网站速度。每月页面浏览量不超过5000次时免费使用。
  * [otixo.com](https://www.otixo.com/) — 可在一个地方对所有云存储文件进行加密、共享、复制和移动操作。基础计划提供无限制的文件传输服务，单个文件最大250 MB，允许加密五个文件。
  * [packagecloud.io](https://packagecloud.io/) — 为YUM、APT、RubyGem和PyPI提供托管软件包仓库服务。提供有限的免费计划，开源计划可通过申请获取。
  * [getpantry.cloud](https://getpantry.cloud/) — 一个简单的JSON数据存储应用程序编程接口（API），非常适合个人项目、黑客马拉松和移动应用程序！
  * [Pinata IPFS](https://pinata.cloud) — Pinata是在IPFS上上传和管理文件的最简单方法。我们友好的用户界面和IPFS应用程序编程接口（API）使Pinata成为平台、创作者和收藏家最易用的IPFS固定服务。提供1 GB免费存储空间，并可使用API。
  * [placekitten.com](https://placekitten.com/) — 一个快速简单的服务，用于获取小猫图片作为占位符。
  * [plot.ly](https://plot.ly/) — 绘制并共享你的数据。免费套餐包含无限制的公共文件和十个私有文件。
  * [podio.com](https://podio.com/) — 你可以与最多五人的团队一起使用Podio，并试用基础计划的功能（用户管理功能除外）。
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表、图形和二维码。
  * [redbooth.com](https://redbooth.com) — 点对点文件同步服务，最多支持2个用户免费使用。
  * [resmush.it](https://resmush.it) — reSmush.it是一个提供图像优化服务的免费应用程序编程接口（API）。它已在WordPress、Drupal或Magento等最常见的内容管理系统（CMS）上实现。reSmush.it是使用最广泛的图像优化API，已处理超过70亿张图像，且仍然免费。
  * [Shotstack](https://shotstack.io) - 用于大规模生成和编辑视频的应用程序编程接口（API）。每月可免费渲染长达20分钟的视频。
  * [tinypng.com](https://tinypng.com/) — 用于压缩和调整PNG和JPEG图像大小的应用程序编程接口（API），每月提供500次免费压缩服务。
  * [transloadit.com](https://transloadit.com/) — 处理文件上传以及视频、音频、图像和文档的编码。对开源项目、慈善机构和通过GitHub学生开发者包认证的学生免费。商业应用程序可获得2 GB免费试用额度。
  * [twicpics.com](https://www.twicpics.com) - 响应式图像服务。提供图像内容分发网络（CDN）、媒体处理应用程序编程接口（API）和前端库以实现图像自动优化。每月流量不超过3GB时免费使用。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) — Uploadcare提供基于前沿算法的终极工具包形式的媒体管道服务。所有功能对开发者完全免费：文件上传应用程序编程接口（API）和用户界面、图像内容分发网络（CDN）和源服务、自适应交付以及智能压缩。免费套餐包含3000次上传、3 GB流量和3 GB存储空间。
  * [imagekit.io](https://imagekit.io) – 图像内容分发网络（CDN），具备自动优化、实时转换和存储功能，可在数分钟内与现有设置集成。免费计划每月包含至多20GB带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive是一种基于绝对隐私和无懈可击的安全性的零知识文件存储服务。注册即可永久免费获得10 GB存储空间！
  * [degoo.com](https://degoo.com/) – 基于人工智能的云存储服务，提供免费20 GB存储空间，支持三个设备，推荐奖励5 GB（账户90天不活动）。
  * [MConverter.eu](https://mconverter.eu/) – 批量转换文件。支持多种文件格式，包括[AVIF](https://mconverter.eu/convert/to/avif/)等新格式。可从视频中提取所有图像帧。每天最多可免费处理十个100MB大小的文件，每次处理两个文件为一批。

  * [DocsParse](https://docsparse.com/) – 由GPT驱动的人工智能，可将PDF、图像处理为JSON、CSV、EXCEL格式的结构化数据。每月免费提供30个积分。


**[⬆️ 返回顶部](#目录)**

## 设计和用户界面（UI）

  * [AllTheFreeStock](https://allthefreestock.com) - 一个精心整理的免费素材列表，包含图片、音频和视频（stock：素材）。
  * [Float UI](https://floatui.com/) - 免费的网页开发工具，即使是非设计师也能快速创建具有现代感、响应式设计和时尚外观的网站。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page提供了一个由Ant Motion的动效组件构建的模板。它有丰富的首页模板，可下载模板代码包并能快速使用。你还可以使用编辑器快速构建自己的专属页面。
  * [Backlight](https://backlight.dev/) — 以开发者和设计师之间的合作为核心，Backlight是一个完整的编码平台，团队可以在该平台上构建、记录、发布、扩展和维护设计系统。免费计划允许最多3名编辑人员在一个设计系统上工作，且查看人数无限制。
  * [BoxySVG](https://boxy-svg.com/app) — 一个免费的可安装网络应用程序，用于绘制SVG图形并导出为SVG、PNG、jpeg等格式。
  * [Carousel Hero](https://carouselhero.com/) - 免费的在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，例如适用于React、Vue和Svelte的SVG图标。
  * [clevebrush.com](https://www.cleverbrush.com/) — 免费的图形设计/照片拼贴应用程序。此外，他们还提供将其作为组件的付费集成服务。
  * [cloudconvert.com](https://cloudconvert.com/) — 可以将任何格式转换为其他格式。支持208种格式，包括视频和GIF。
  * [CodeMyUI](https://codemyui.com) - 精心挑选的网页设计和用户界面（UI）灵感集合，附带代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建调色板或从顶级调色板中获取灵感。
  * [coolors](https://coolors.co/) - 调色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 精心挑选的最适合品牌的调色板。
  * [css-gradient.com](https://www.css-gradient.com/) - 免费工具，可快速生成自定义的跨浏览器CSS渐变效果，支持RGB和HEX格式。
  * [easyvectors.com](https://easyvectors.com/) — EasyVectors.com是一个免费的SVG矢量艺术素材库。可免费下载最佳矢量图形。
  * [figma.com](https://www.figma.com) — 面向团队的在线协作设计工具；免费版包括无限制的文件和查看人数，最多支持2名编辑人员和3个项目。
  * [Flyon UI](https://flyonui.com/)- 针对Tailwind CSS的最简单的组件库。
  * [framer.com](https://www.framer.com/) - Framer可以帮助你为下一个应用程序、网站或产品迭代和制作界面动画，从强大的布局开始设计。对于将Framer用作专业原型设计工具进行验证的用户：查看人数无限制，最多支持2名编辑人员和3个项目。
  * [freeforcommercialuse.net](https://freeforcommercialuse.net/) — FFCU提供无需担心版权问题的模特/财产授权的库存照片。
  * [Gradientos](https://www.gradientos.app) - 让选择渐变效果变得快速且容易。
  * [Icon Horse](https://icon.horse) – 通过我们简单的API获取任何网站的最高分辨率网站图标（favicon）。
  * [Iconoir](https://iconoir.com) – 一个开源图标库，包含数千个图标，支持React、React Native、Flutter、Vue、Figma和Framer。
  * [Icons8](https://icons8.com) — 提供图标、插画、照片、音乐和设计工具。免费计划提供低分辨率的有限格式资源。使用我们的资源时请链接到Icons8。
  * [landen.co](https://www.landen.co) — 为你的初创公司生成、编辑和发布漂亮的网站和着陆页。无需编写代码。免费版允许你拥有一个完全可定制并发布到网络上的网站。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux是一个原型设计和设计工具。它完全免费且开源。
  * [lensdump.com](https://lensdump.com/) - 免费的云图片托管服务。
  * [Lorem Picsum](https://picsum.photos/) - 一个免费、易用且时尚的占位符工具。在我们的URL后面添加你想要的图片尺寸（宽度和高度），你将得到一张随机图片。
  * [LottieFiles](https://lottiefiles.com/) - 面向设计师、开发者等的全球最大的在线平台，提供世界上最小巧的动画格式。可访问适用于Android、iOS和Web的Lottie动画工具和插件。
  * [MagicPattern](https://www.magicpattern.design/tools) — 一组CSS和SVG背景生成器及工具，用于生成渐变、图案和斑点效果。
  * [marvelapp.com](https://marvelapp.com/) — 设计、原型制作和协作平台，免费计划仅限一名用户和一个项目。
  * [Mindmup.com](https://www.mindmup.com/) — 免费提供无限制的思维导图，并可将其存储在云端。你可以在任何设备上随时访问你的思维导图。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc是一个强大的设计协作和交接工具。免费计划包括三名用户和五个项目，且所有功能均可用。
  * [mockupmark.com](https://mockupmark.com/create/free) — 为社交媒体和电子商务创建逼真的T恤和服装模型，提供40个免费模型。
  * [Mossaik](https://mossaik.app) - 免费的SVG图像生成器，带有波浪、块状和图案等不同工具。
  * [movingpencils.com](https://movingpencils.com) — 基于浏览器的快速矢量编辑器，完全免费。
  * [Octopus.do](https://octopus.do) — 可视化站点地图构建器。实时构建你的网站结构，并快速分享以便与团队或客户协作。
  * [Pencil](https://github.com/evolus/pencil) - 使用Electron的开源设计工具。
  * [Penpot](https://penpot.app) - 基于网络的开源设计和原型制作工具，支持SVG格式，完全免费。
  * [pexels.com](https://www.pexels.com/) - 可用于商业用途的免费库存照片。提供免费API，允许你通过关键词搜索照片。
  * [photopea.com](https://www.photopea.com) — 一个免费、高级的在线设计编辑器，具有Adobe Photoshop用户界面，支持PSD、XCF和Sketch格式（Adobe Photoshop、Gimp和Sketch App）。
  * [pixlr.com](https://pixlr.com/) — 免费的在线浏览器编辑器，功能与商业编辑器相当。
  * [Plasmic](https://www.plasmic.app/) - 一个快速、易用且强大的网页设计工具和页面构建器，可集成到你的代码库中。可构建响应式页面或复杂组件，可选择使用代码扩展，并发布到生产站点和应用程序中。
  * [Pravatar](https://pravatar.cc/) - 生成随机/占位符假头像，其URL可直接在你的网页/应用程序中热链接。
  * [Proto.io](https://www.proto.io) - 无需编写代码即可创建完全交互式的用户界面原型。免费试用期结束后可使用免费版。免费版包括一名用户、一个项目、五个原型、100MB的在线存储空间以及proto.io应用程序的预览功能。
  * [resizeappicon.com](https://resizeappicon.com/) — 一个简单的服务，用于调整和管理你的应用程序图标。
  * [Rive](https://rive.app) — 创建并将精美的动画发布到任何平台。对个人用户永远免费。该服务是一个编辑器，还可在其服务器上托管所有图形。他们还为许多平台提供运行时环境，以运行使用Rive制作的表示形式。
  * [storyset.com](https://storyset.com/) — 使用此工具为你的项目创建令人惊叹的免费定制插画。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，提供200个免费模型。
  * [tabler-icons.io](https://tabler-icons.io/) — 超过1500个免费的可复制粘贴的SVG可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像。URL可直接在你的网页/应用程序中热链接。支持通过URL配置参数。
  * [unDraw](https://undraw.co/) - 一个不断更新的精美SVG图像集合，你可以完全免费使用且无需注明出处。
  * [unsplash.com](https://unsplash.com/) - 可用于商业和非商业用途的免费库存照片（“想怎么用就怎么用”许可）。

  * [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，免费计划可创建最多三个、每个不超过5步的操作指南。
  * [Webflow](https://webflow.com) - 所见即所得（WYSIWYG）的网站构建工具，带有动画效果和网站托管功能。可免费创建两个项目。
  * [Updrafts.app](https://updrafts.app) - 用于基于Tailwind CSS设计的所见即所得网站构建工具。非商业用途可免费使用。
  * [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便签和思维导图工具。可免费创建4个看板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。可展示设计稿、资源和样式指南。一个项目可免费使用。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人且独特的图形和图像。
  * [Responsively App](https://responsively.app) - 一款免费的开发工具，可加快响应式Web应用程序的开发并提高开发精度。
  * [SceneLab](https://scenelab.io) - 在线原型图形编辑器，提供不断扩充的免费设计模板库。
  * [xLayers](https://xlayers.dev) - 预览并将Sketch设计文件转换为Angular、React、Vue、LitElement、Stencil、Xamarin等格式（在https://github.com/xlayers/xlayers上免费且开源）
  * [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、功能强大且经过SEO优化的网页构建工具。前5页免费，不限自定义域名，具备所有功能且使用简单。
  * [Mastershot](https://mastershot.app) - 完全免费的基于浏览器的视频编辑器。无水印，可导出最高1080p的视频。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松创建落地页并提供托管服务的平台。可免费创建一个网站。
  * [SVGmix.com](https://www.svgmix.com/) - 拥有30万个以上免费SVG图标、图标集和品牌标志的大型资源库。浏览器中内置简单的矢量编辑程序，可快速编辑文件。
  * [svgrepo.com](https://www.svgrepo.com/) - 使用各种矢量库为项目探索、搜索并找到最合适的图标或矢量图形。可免费下载用于商业用途的SVG矢量图形。
  * [haikei.app](https://www.haikei.app/) - Haikei是一个Web应用程序，用于生成独特的SVG形状、背景和图案，可直接用于设计工具和工作流程。
  * [Canva](https://canva.com) - 免费的在线设计工具，用于创建视觉内容。
  * [Superdesigner](https://superdesigner.co) - 一系列免费设计工具，只需点击几下即可创建独特的背景、图案、形状、图像等。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是一个协作式前端平台，可即时创建和发布无头静态网站。可免费创建三个项目，协作人员不限，且可免费导出代码。
  * [vector.express](https://vector.express) — 快速轻松地转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
  * [Vertopal](https://www.vertopal.com) - Vertopal是一个免费的在线平台，可将文件转换为各种格式。包括开发人员常用的转换器，如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
  * [okso.app](https://okso.app) - 简约的在线绘图应用程序。可快速创建草图和视觉笔记。草图可导出为PNG、JPG、SVG和WEBP格式。也可作为渐进式Web应用（PWA）安装。所有人均可免费使用（无需注册）。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
  * [Lucide](https://lucide.dev) - 免费的可定制且风格统一的SVG图标工具包。
  * [Logo.dev](https://www.logo.dev) - 公司标志API，包含4400多万个品牌标志，使用起来就像调用URL一样简单。前10,000次API调用免费。
  * [MDBootstrap](https://mdbootstrap.com/) - 可免费用于个人和商业用途的Bootstrap、Angular、React和Vue UI工具包，包含700多个组件、惊艳的模板、1分钟安装、丰富的教程以及庞大的社区支持。
  * [TW Elements](https://tw-elements.com/) - 用Tailwind CSS重新创建的免费Bootstrap组件，设计更优且功能更多。
  * [DaisyUI](https://daisyui.com/) -- 免费。“使用Tailwind CSS但编写更少的类名”，提供按钮等组件。
  * [Scrollbar.app](https://scrollbar.app) -- 简单的免费Web应用程序，用于设计Web自定义滚动条。
  * [css.glass](https://css.glass/) -- 免费的Web应用程序，用于使用CSS创建玻璃态设计。
  * [hypercolor.dev](https://hypercolor.dev/) -- 精心挑选的Tailwind CSS颜色渐变集合，还提供各种生成器供用户创建自己的颜色渐变。
  * [iconify.design](https://icon-sets.iconify.design/) -- 包含100多个图标包的集合，具有统一的界面。允许用户在各个图标包中搜索图标，并将单个图标导出为SVG格式或适用于流行Web框架的格式。
  * [NextUI](https://nextui.org/) -- 免费。美观、快速且现代的React和Next.js UI库。
  * [Glyphs](https://glyphs.fyi/) -- 免费。网络上最强大的图标，完全可编辑且是真正的开源设计系统。
  * [ShadcnUI](https://ui.shadcn.com/) -- 设计精美的组件，可复制粘贴到应用程序中。具有可访问性、可定制性且开源。
  * [HyperUI](https://www.hyperui.dev/) -- 免费的开源Tailwind CSS组件。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成一整年的独特图标，完全免费。
  * [Image BG Blurer](https://imagebgblurer.com/) -- 为图像生成模糊背景框架，使用图像源作为背景模糊效果，适用于Notion、Trello、Jira等工具。
  * [Webstudio](https://webstudio.is/) -- Webflow的开源替代方案。免费计划在其域名下提供不限数量的网站，可创建5个自定义域名网站，每月10,000次页面浏览量，2GB资产存储空间。
  * [Nappy](https://nappy.co/) -- 免费提供黑人和棕色人种的精美照片，可用于商业和个人用途。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有设计最佳的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示平台] 设计师展示作品的地方。可按类别筛选用户界面（UI）/用户体验（UX）项目。
  * [dribbble](https://dribbble.com/) - [设计展示平台] 独特的设计灵感来源，通常并非来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据个人喜好查找最佳着陆页（landing page），以获取设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / 用户界面工具包 / 网页截图] Lapa Ninja是一个图库，展示了6025个最佳着陆页示例，提供面向设计师的免费书籍以及来自网络的免费用户界面工具包。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包含桌面端、平板电脑端和移动端的截图。
  * [Mobbin](https://mobbin.design/) - [移动端截图] 我们的图库中有50,000多张可完全搜索的移动应用截图，可节省你在用户界面和用户体验研究上的大量时间。
  * [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动和网页用户界面设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示了面向设计师、开发者和产品制作人的最佳用户界面和用户体验模式（iOS和安卓系统），可供参考。
  * [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用的完整流程视频。也包含截图。可高度搜索且有索引。
  * [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并紧跟最新的网页及移动应用用户界面设计趋势。可按模式和应用进行筛选。
  * [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的应用商店设计截图合集。
  * [UI Garage](https://uigarage.net/) - [移动端 / 网页截图] 为设计师和开发者提供每日用户界面灵感和模式，帮助你为项目寻找灵感、工具以及最佳资源。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网络应用的设计参考资料集合，带有标签且可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图上的数据可视化

  * [IP地理定位](https://ipgeolocation.io/) — 提供免费的开发者计划，每月可请求30,000次。
  * [carto.com](https://carto.com/) — 使用自有数据和公开数据创建地图及地理空间应用程序编程接口（APIs）。
  * [Clockwork Micro](https://clockworkmicro.com/) — 运行精准的地图工具。每月有50,000次免费查询（地图瓦片、db2vector、海拔数据）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供用于地图、地理空间数据存储、分析、地理编码、路径规划等的应用程序编程接口（APIs）和软件开发工具包（SDKs），适用于网络、桌面和移动设备。每月提供200万个免费的基础地图瓦片、20,000次非存储地理编码、20,000次简单路径规划、5,000次驾车时间计算，以及5GB免费的瓦片和数据存储空间。
  * [Foursquare](https://developer.foursquare.com/) - 通过地点应用程序编程接口（Places API）和Pilgrim软件开发工具包（Pilgrim SDK）实现位置发现、场所搜索以及情境感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 提供矢量和栅格地图瓦片、地理编码、地点信息、路径规划、等值线等应用程序编程接口（APIs）。每日有3,000次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过应用程序编程接口（API）或CSV文件上传进行地理编码。每日有2,500次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过应用程序编程接口（API）或CSV文件上传进行地理编码和地理解析。每月有10,000次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询应用程序编程接口（API）。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 为路径规划、路线优化、距离矩阵、地理编码和地图匹配提供免费的开发者套餐。
  * [here](https://developer.here.com/) — 提供用于地图和位置感知应用程序的应用程序编程接口（APIs）和软件开发工具包（SDKs）。每月有250,000次免费交易。
  * [locationiq.com](https://locationiq.com/) — 提供地理编码、地图和路径规划应用程序编程接口（APIs）。每日有5,000次免费请求。
  * [mapbox.com](https://www.mapbox.com/) — 提供地图、地理空间服务以及用于显示地图数据的软件开发工具包（SDKs）。
  * [maptiler.com](https://www.maptiler.com/cloud/) — 提供矢量地图、地图服务以及用于地图可视化的软件开发工具包（SDKs）。提供免费的矢量瓦片，每周更新，有四种地图样式。
  * [nominatim.org](https://nominatim.org/) — 开放街道地图（OpenStreetMap）的免费地理编码服务，提供全球地址搜索功能和反向地理编码功能。
  * [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向指引、路径规划、路线优化、距离矩阵）、地图软件开发工具包（Maps SDK，包括矢量、静态、移动SDK）。每项服务[在指定配额内免费](https://nextbillion.ai/pricing)。
  * [opencagedata.com](https://opencagedata.com) — 地理编码应用程序编程接口（API），聚合了开放街道地图（OpenStreetMap）和其他开放地理数据源。每日有2,500次免费查询。
  * [osmnames](https://osmnames.org/) — 地理编码，搜索结果根据相关维基百科页面的受欢迎程度进行排序。
  * [positionstack](https://positionstack.com/) - 为全球地点和坐标提供免费地理编码。个人使用每月可请求25,000次。
  * [stadiamaps.com](https://stadiamaps.com/) — 提供地图瓦片、路径规划、导航和其他地理空间应用程序编程接口（APIs）。非商业用途和测试每日有2,500次免费地图查看和应用程序编程接口（API）请求。
  * [maps.stamen.com](http://maps.stamen.com/) - 提供免费的地图瓦片和瓦片托管服务。
  * [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
  * [Geokeo api](https://geokeo.com) - 带有语言校正等功能的地理编码应用程序编程接口（API）。覆盖全球。每日有2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 面向多个发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的、面向Fedora和EL的RPM构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian的构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境（IDE）和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP代码运行环境和代码片段分享网站，可在300多种PHP版本中运行你的代码
  * [Android Studio](https://developer.android.com/studio) — Android Studio为在各种类型的安卓设备上构建应用程序提供了最快的工具。这是一款开源的集成开发环境（IDE），对所有人免费，是安卓应用开发的最佳选择。支持Windows、Mac、Linux，甚至ChromeOS系统！
  * [AndroidIDE](https://m.androidide.com/) — 一款开源的集成开发环境，用于在安卓设备上开发基于Gradle的真实安卓应用程序。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 协作式API设计工具，具有即时API模拟和生成文档功能（对于不限数量的API蓝图和不限数量的用户免费，只需一个管理员账户，且提供托管文档服务）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是一款适用于macOS的流行且可扩展的编辑器。免费模式提供了[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并提供升级到高级功能的途径。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为一组交互式笔记本。这是一项免费的公共服务。
  * [BlueJ](https://bluej.org) — 一款免费的Java开发环境，专为初学者设计，全球有数以百万计的用户在使用。由Oracle提供支持，拥有简单的图形用户界面（GUI），以帮助初学者学习。
  * [Bootify.io](https://bootify.io/) - 带有自定义数据库和REST API的Spring Boot应用程序生成器。
  * [Brackets](http://brackets.io/) - Brackets是一款专门为网页开发设计的开源文本编辑器。它轻量级、易于使用且高度可定制。
  * [cacher.io](https://www.cacher.io) — 代码片段整理工具，支持标签分类，可用于100多种编程语言。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran及C/C++集成开发环境。开源且可在Windows、macOS和Linux系统上运行。
  * [Cody](https://sourcegraph.com/cody) - 免费的人工智能编码助手，能够编写（代码块、自动补全、单元测试）、理解（了解你的整个代码库）、修复和查找代码。支持VS Code、JetBrains和在线使用。
  * [codiga.io](https://codiga.io/) — 编码助手，可让你直接在集成开发环境（IDE）中搜索、定义和重用代码片段。对个人和小型组织免费。
  * [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，具有分类、搜索和标签功能。免费且无使用限制。
  * [cocalc.com](https://cocalc.com/) — （原名为SageMathCloud，网址为cloud.sagemath.com）— 云端协作计算平台。通过浏览器即可访问完整的Ubuntu系统，内置协作功能，并提供大量免费的数学、科学、数据科学软件，如Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等均已预装。
  * [code.cs50.io](https://code.cs50.io/) - CS50的Visual Studio Code是一个位于code.cs50.io的网络应用程序，它为学生和教师适配了GitHub Codespaces。
  * [codepen.io](https://codepen.io/) — CodePen是一个面向网页前端开发的游乐场。
  * [codesandbox.io](https://codesandbox.io/) — 用于React、Vue、Angular、Preact等的在线游乐场。
  * [Components.studio](https://webcomponents.dev/) - 独立编写代码组件，在故事中可视化展示它们，进行测试，并将其发布到npm上。
  * [Eclipse Che](https://www.eclipse.org/che/) - 基于网页且原生支持Kubernetes的集成开发环境，面向开发团队，支持多种语言。开源且由社区驱动。Red Hat提供了一个在线实例，网址为 [workspaces.openshift.com](https://workspaces.openshift.com/)。
  * [fakejson.com](https://fakejson.com/) — FakeJSON可帮助你通过其API快速生成虚假数据。只需发起一个描述你所需数据及格式的API请求，API就会以JSON格式返回数据。这有助于加速创意的上市过程，先模拟数据直到真正实现。
  * [GetVM](https://getvm.io) — 即时免费的Linux和集成开发环境（IDE）Chrome侧边栏。免费套餐每天可使用5个虚拟机。
  * [GitPod](https://www.gitpod.io) — 为GitHub项目提供即时的、可立即编码的开发环境。免费套餐每月包含50小时使用时长。
  * [ide.goorm.io](https://ide.goorm.io) goormIDE是一款基于云的完整集成开发环境。支持多种语言，通过功能齐全的基于网页的终端提供基于Linux的容器，支持端口转发、自定义URL、实时协作和聊天、分享链接以及Git/Subversion等。还有许多其他功能（免费套餐为每个容器提供1GB内存和10GB存储空间，5个容器插槽）。
  * [JDoodle](https://www.jdoodle.com) — 在线编译器和编辑器，支持60多种编程语言，提供免费计划，通过REST API进行代码编译，每天最多可使用200积分。
  * [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、集成开发环境（IDE）和部署工具（如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。为学生、教师、开源项目和用户组提供免费许可证。
  * [jsbin.com](https://jsbin.com) — JS Bin是另一个面向网页前端（HTML、CSS和JavaScript，还支持Markdown、Jade和Sass）的游乐场和代码分享网站。
  * [jsfiddle.net](https://jsfiddle.net/) — JS Fiddle是一个支持协作的网页前端游乐场和代码分享网站。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 一些REST API端点，以JSON格式返回一些虚假数据。如果你想在本地运行服务器，其源代码也是可用的。
  * [Lazarus](https://www.lazarus-ide.org/) — Lazarus是一个与Delphi兼容的跨平台集成开发环境，用于快速应用程序开发。
  * [MarsCode](https://www.marscode.com/) - 一款免费的、由人工智能驱动的基于云的集成开发环境。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假JSON数据的小型API模拟微服务。
  * [mockable.io](https://www.mockable.io/) — Mockable是一个简单的可配置服务，用于模拟RESTful API或SOAP网络服务。这个在线服务允许你快速定义REST API或SOAP端点，并让它们返回JSON或XML数据。
  * [mockaroo](https://mockaroo.com/) — Mockaroo可让你生成CSV、JSON、SQL和Excel格式的逼真测试数据。你还可以为后端API创建模拟数据。
  * [Mocklets](https://mocklets.com) - 一个基于HTTP的模拟API模拟器，有助于模拟API，以实现更快的并行开发和更全面的测试，提供终身免费套餐。
  * [Paiza](https://paiza.cloud/en/) — 无需进行任何设置，即可在浏览器中开发Web应用程序。免费计划提供一台服务器，服务器生命周期为24小时，每天运行时长为4小时，配备2个CPU核心、2GB内存和1GB存储空间。
  * [Prepros](https://prepros.io/) - Prepros可以直接编译Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript和TypeScript，自动刷新浏览器，方便你开发和测试网站，让你专注于打造完美的网站。你还可以通过简单的几步操作添加自己的工具。
  * [Replit](https://replit.com/) — 一个面向多种编程语言的云编码环境。
  * [SoloLearn](https://code.sololearn.com) — 一个适合运行代码片段的云编程游乐场。支持多种编程语言。运行代码无需注册，但在其平台上保存代码时需要注册。此外，还为初学者和中级程序员提供免费课程。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云代码集成开发环境，用于创建、编辑和部署全栈应用程序。支持任何流行的基于NodeJs的前端和后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text是一款流行的、多功能且高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义并优化的代码编辑器，用于构建和调试现代网页及云应用程序。由微软开发。

  * [VSCodium](https://vscodium.com/) - 由社区驱动，无遥测（Telemetry，一种数据收集技术）/跟踪功能，且采用自由许可的微软编辑器VSCode的二进制分发版本
  * [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件来量化关于你编码活动的自我指标，提供有限的免费套餐。
  * [Wave Terminal](https://waveterm.dev/) - Wave是一款开源、跨平台的终端，用于实现无缝工作流。可内联渲染任何内容，能保存会话和历史记录，由开放网络标准提供支持。支持MacOS和Linux系统。
  * [WebComponents.dev](https://webcomponents.dev/) — 一个浏览器内的集成开发环境（IDE），用于独立编写Web组件，提供58个模板，支持故事编写和测试。
  * [PHPSandbox](https://phpsandbox.io/) — PHP的在线开发环境
  * [WebDB](https://webdb.app) - 免费高效的数据库集成开发环境。具有服务器发现、实体关系图（ERD）、数据生成器、人工智能、NoSQL结构管理器、数据库版本控制等诸多功能。
  * [Zed](https://zed.dev/) - Zed是一款高性能、支持多人协作的代码编辑器，由Atom和Tree-sitter的开发者打造。


**[⬆️ 返回顶部](#目录)**

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch是一个反向ETL（Extract, Transform, Load，抽取、转换、加载）平台，可帮助你将客户数据从数据仓库同步到客户关系管理（CRM）系统、营销工具和支持工具中。免费版允许你将数据同步到一个目标位置。
  * [Avo](https://avo.app/) — 简化的分析发布工作流程。提供单一可信数据源的跟踪计划、类型安全的分析跟踪库、应用内调试器以及数据可观测性，以便在发布前发现所有数据问题。对两个工作区成员和1小时数据可观测性回溯免费。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版支持多达10,000名移动应用用户，提供深度链接及其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台（如Git、Github和Gitlab等不同类型的数据源）聚合信息。免费版包含不限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向ETL及运营分析平台。可将数据仓库中的10个字段同步到60多个软件即服务（SaaS）应用，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3000次浏览量分析。
  * [Databox](https://databox.com) — 通过整合其他分析和商业智能（BI）平台提供商业洞察和分析。免费计划支持3个用户，提供仪表盘和数据源，可存储1100万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 一个网站每月2000次页面浏览量
  * [amplitude.com](https://amplitude.com/) — 每月100万个事件，最多支持2个应用
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一个开源的网络分析平台，可作为托管服务（非商业用途免费）或自托管应用提供。它旨在提供易于使用且注重隐私的网络分析服务，作为Google Analytics或Matomo的替代方案。免费版适用于非商业用途，支持不限数量的网站，数据保留6个月，每月10万次页面浏览量。
  * [Google Analytics](https://analytics.google.com/) — Google分析
  * [MetricsWave](https://metricswave.com) — 面向开发者的注重隐私的Google Analytics替代方案。免费计划允许每月20,000次页面浏览量，无需信用卡。
  * [Expensify](https://www.expensify.com/) — 费用报销，提供免费的个人报销审批工作流程
  * [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月最多3000个事件免费。
  * [heap.io](https://heap.io) — 自动捕获iOS或网络应用中每个用户的操作。每月最多10,000次会话免费。
  * [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天2000次页面浏览量。每天100次快照（最大容量：300）。可存储3个快照热力图，保存365天。团队成员数量无限制。还提供应用内和独立调查、带截图的反馈小部件。免费版允许创建3个调查和3个反馈小部件，每月收集20个回复。
  * [Keen](https://keen.io/) — 用于数据收集、分析和可视化的自定义分析工具。每月1000个事件免费
  * [Yandex.Datalens](https://datalens.yandex.com/) — Yandex云数据可视化和分析服务。该服务免费提供，对用户数量和请求次数无限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) — 无限制的免费分析服务
  * [Mixpanel](https://mixpanel.com/) — 每月跟踪100,000名用户，数据历史和席位无限制，数据存储在美国或欧盟
  * [Moesif](https://www.moesif.com) — REST和GraphQL的API分析工具。（每月最多500,000次API调用免费）
  * [optimizely.com](https://www.optimizely.com) — A/B测试解决方案，提供免费的入门计划，支持一个网站、1个iOS应用和1个安卓应用
  * [Microsoft PowerBI](https://powerbi.com) — 微软提供的商业洞察和分析工具。免费计划提供有限使用权限，包含100万个用户许可证。
  * [Row Zero](https://rowzero.io) - 超快速、可连接的电子表格。可直接连接到数据库、S3和API。即时导入、分析、绘制图表并共享数百万行数据。提供三个永久免费的工作簿。
  * [sematext.com](https://sematext.com/cloud/) — 每月最多50,000次操作免费，数据保留1天，仪表盘和用户数量无限制等。
  * [Similar Web](https://similarweb.com) — 网络和移动应用分析工具。免费计划每个指标提供5个结果，提供1个月的移动应用数据和3个月的网站数据。
  * [StatCounter](https://statcounter.com/) — 网站访客分析工具。免费计划可分析最近500名访客。
  * [Statsig](https://statsig.com) - 集分析、功能标记和A/B测试于一体的全功能平台。每月最多100万个计量事件免费。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建并使Tableau完美适配你的组织。免费开发者计划提供Tableau Online的个人开发沙箱许可证。版本为最新预发布版本，以便数据开发人员可以测试这个优秀平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型，并跟踪访客。一个用户免费使用，测试次数无限制
  * [woopra.com](https://www.woopra.com/) — 免费的用户分析平台，支持500,000次操作，数据保留90天，提供30多个一键集成功能。
  * [counter.dev](https://counter.dev) — 简单易用且注重隐私的网络分析工具。免费使用，也可按意愿捐赠付费。
  * [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多100万个跟踪事件免费。还提供无限制的应用内调查，每月可收集250个回复。
  * [Uptrace](https://uptrace.dev) - 分布式跟踪工具，帮助开发人员查明故障并找到性能瓶颈。提供免费计划，为开源项目提供免费的个人订阅服务，并有开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一个免费且易于使用的工具，可捕获真实用户使用你网站的方式。
  * [Beampipe.io](https://beampipe.io) - Beampipe是简单且注重隐私的网络分析工具。支持最多5个域名，每月10,000次页面浏览量免费。
  * [Aptabase](https://aptabase.com) — 面向移动和桌面应用的开源、注重隐私且简单易用的分析工具。提供Swift、Kotlin、React Native、Flutter、Electron等多种软件开发工具包（SDK）。每月最多20,000个事件免费。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，并促进无缝协作。可将其部署到具有真实流量的生产环境中，或在无需编写代码的情况下为回归测试添加分析覆盖范围。
  * [LogSpot](https://logspot.io) - 完整的统一网络和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和网络钩子）。免费计划每月包含10,000个事件。
  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级注重隐私的Google Analytics替代方案。页面浏览量、访客数量、页面热力图和目标跟踪均无限制。支持最多3个域名，每个域名可进行600次会话回放。
  * [AppFit](https://appfit.io) - AppFit是一个全面的分析和产品管理工具，旨在促进跨平台的分析和产品更新的无缝管理。免费计划包括每月10,000个事件、产品日志和每周洞察报告。

**[⬆️ 返回顶部](#目录)**

## 访客会话记录

  * [Reactflow.com](https://www.reactflow.com/) — 按站点计算：每日1000次页面浏览量，三张热力图，三个小部件，免费的错误跟踪功能
  * [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，带有用于错误重现的开发工具、用于实时支持的实时会话功能以及产品分析套件。每月1000次会话，可使用所有功能，数据保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 每月1000次会话，数据保留30天，具备错误跟踪和实时模式功能
  * [FullStory.com](https://www.fullstory.com) — 每月1000次会话，数据保留一个月，提供三个用户账号。更多信息请见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 按站点计算：每月1050次页面浏览量，不限数量的热力图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 一个网站每月可免费使用2500次会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话记录完全免费，“无流量限制”，无项目限制，无抽样限制
  * [mouseflow.com](https://mouseflow.com/) — 一个网站每月可免费使用500次会话
  * [mousestats.com](https://www.mousestats.com/) — 一个网站每月可免费使用100次会话
  * [smartlook.com](https://www.smartlook.com/) — 为网页和移动应用提供免费套餐（每月1500次会话），三张热力图，一个漏斗分析，数据历史记录保留1个月
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月访问量不超过5000次时免费使用
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并查看访客如何使用您的网站或应用程序。小型项目可免费无限制使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号码验证应用程序编程接口（API）和软件开发工具包（SDK）

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询的JSON应用程序编程接口（API）。每月可进行100次API请求
  * [veriphone](https://veriphone.io/) — 通过免费、快速、可靠的JSON应用程序编程接口（API）进行全球电话号码验证。每月可进行1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付和计费集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、苹果搜索广告（Apple Search Ads）、远程配置以及增长工具，用于优化应用内购买和盈利。与iOS、安卓、React Native、Flutter、Unity、Cordova、Stripe和网页应用兼容。每月跟踪收入不超过1万美元时免费。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，以在全球范围内拓展业务并进入新市场（购买力平价，purchasing power parity）。免费计划包含每月7500次API请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，在iOS、安卓、Stripe和Paddle平台上提供实时订阅事件和开箱即用的盈利工具。每月收入不超过1万美元时免费。
  * [Adapty.io](https://adapty.io/) – 一站式解决方案，带有开源软件开发工具包（SDK），用于将移动应用内订阅集成到iOS、安卓、React Native、Flutter、Unity或网页应用中。每月收入不超过1万美元时免费。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币与法定货币汇率。免费层级每月提供1万次调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。提供免费的开发者（DEVELOPER）计划，每月可请求1000次。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币汇率和历史数据。演示API的稳定速率限制为每分钟30次调用，每月调用上限为1万次。
  * [CurrencyApi](https://currencyapi.net/) — 提供实物货币和加密货币的实时汇率，以JSON和XML格式提供数据。免费层级每月提供1250次API请求。
  * [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，每月免费提供100次API请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 一个易于使用的货币转换JSON API。免费层级每天更新一次数据，每月请求限制为1500次。
  * [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家预防支付欺诈和拒付情况。提供免费的微型计划，每月可查询500次。
  * [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费层级需要注明来源。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过基于使用量的计费从API中获取收入。可连接到Stripe、Chargebee等平台。免费层级每月提供3万个事件额度。
  * [Nami ML](https://www.namiml.com/) - 针对iOS和安卓平台上应用内购买和订阅的完整平台，包括无代码付费墙、客户关系管理（CRM）和分析功能。所有基础功能免费，可用于运营应用内购买业务。
  * [RevenueCat](https://www.revenuecat.com/) — 应用内购买和订阅（iOS和安卓）的托管后端。每月跟踪收入不超过2500美元时免费。
  * [vatlayer](https://vatlayer.com/) — 即时增值税号码验证和欧盟增值税税率API，每月免费提供100次API请求
  * [Currencyapi](https://currencyapi.com) — 免费的货币转换和汇率数据API。每月免费300次请求，私人使用时每分钟限制10次请求。

**[⬆️ 返回顶部](#目录)**

## 与Docker相关的内容

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，为团队提供30个免费的私有仓库，用于构建和存储Docker镜像
  * [容器注册表服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐为私有仓库提供1GB的存储空间。
  * [Docker Hub](https://hub.docker.com) — 一个免费的私有仓库和不限数量的公共仓库，用于构建和存储Docker镜像
  * [玩转Docker](https://labs.play-with-docker.com/) — 一个简单、互动且有趣的学习Docker的游乐场。
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供不限数量的免费公共仓库
  * [ttl.sh](https://ttl.sh/) - 匿名且临时的Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## 与Vagrant相关的内容

  * [Vagrant Cloud（哈希公司的Vagrant云平台）](https://app.vagrantup.com) - 哈希公司的Vagrant Cloud。Vagrant镜像托管服务。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个可供选择的公开镜像索引
**[⬆️ 返回顶部](#目录)**

## 开发者博客网站

  * [BearBlog](https://bearblog.dev/) - 极简主义、由Markdown驱动的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的地方。
  * [Hashnode](https://hashnode.com/) - 面向开发者的无烦恼博客软件！
  * [Medium](https://medium.com/) - 对自己关心的事情进行更深入的思考。
  * [AyeDot](https://ayedot.com/) - 以现代多媒体短格式迷你博客的形式，免费向世界分享你的想法、知识和故事。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment（图形评论）是一个评论平台，可帮助你从网站受众中构建一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个基于GitHub议题（issues）构建的轻量级评论小部件。可将GitHub议题用于博客评论、维基页面等！
  * [Disqus](https://disqus.com/) - Disqus（迪斯库斯）是一个网络化的社区平台，被网络上数十万网站使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源的托管评论平台，你可以按需付费以获得“在几个域名上有一名管理员，且能完全控制行为和外观”的服务。
  * [IntenseDebate](https://intensedebate.com/) - 一个功能丰富的评论系统，适用于WordPress、Tumblr、Blogger以及许多其他网站平台。

**[⬆️ 返回顶部](#目录)**

## 屏幕截图应用程序编程接口（APIs）

  * [ApiFlash](https://apiflash.com) — 一个基于Aws Lambda（亚马逊网络服务Lambda，一种无服务器计算服务）和Chrome的截图应用程序编程接口（API）。可处理整页截图、捕捉时间以及视口尺寸。
  * [microlink.io](https://microlink.io/) – 它能将任何网站转化为数据，例如元标签标准化、美观的链接预览、抓取功能或者作为服务提供截图等。每天可免费请求250次。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图API通过简单直接的API调用即可生成任何网站的截图。构建为可扩展的架构，托管在谷歌云平台上。每月提供100次免费截图服务。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 可捕捉任何网站高度可定制的快照。每月免费100次快照服务
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月可捕捉100次快照，支持png、gif和jpg格式，包括整页截图，不局限于首页
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染服务。免费套餐每天最多可处理500页。自2017年起提供免费套餐。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker提供网站截图和域名情报API服务。每月免费请求100次。
  * [Httpic.com](https://httpic.com) — 将任何网站转化为jpg、png或pdf格式。可进行整页截图、调整视口以及注入自定义代码。免费套餐每月可生成150张图片。
  * [Screenshots](https://screenshotson.click) — 你的截图API。提供高度可定制的截图选项。每月免费100次截图服务。

**[⬆️ 返回顶部](#目录)**

## 与Flutter相关以及无需Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab是一个现代化的Flutter在线集成开发环境（IDE），是创建、调试和构建跨平台项目的最佳场所。使用Flutter构建iOS（无需Mac电脑）和安卓应用程序。
  * [CodeMagic](https://codemagic.io/) - CodeMagic是一个完全托管和管理的移动应用程序持续集成/持续交付（CI/CD）平台。你可以使用基于图形用户界面（GUI）的CI/CD工具进行构建、测试和部署。免费套餐每月提供500分钟的免费使用时长，以及配备2.3 GHz处理器和8 GB内存的Mac Mini实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow是一个基于浏览器的拖放式界面，用于使用Flutter构建移动应用程序。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件仿真（用JavaScript编写）

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快速的x86虚拟机（Virtual Machine，简称VM），能够运行Linux和Windows 2k系统。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个OpenRISC虚拟机，能够在支持网络的环境下运行Linux系统。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，能够直接在浏览器中运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流来帮助实现隐私设计，以便组织遵守《通用数据保护条例》（GDPR）及其他法规。免费版仅适用于规模较小的团队，且仅提供软件即服务（SaaS）版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，提供从《通用数据保护条例》代理到Cookie横幅等各类服务。免费版提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和Cookie政策以及同意管理服务。免费版提供有限的隐私和Cookie政策服务，以及Cookie横幅。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计以及多语言同意管理解决方案。免费版提供一次扫描和一个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大部分功能，但访客数量有限制。
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包括同意管理、隐私请求处理（数据主体访问请求，DSARs）和数据映射。免费版包含核心同意管理功能，并且他们还为经过验证的开源项目免费提供更高级的计划。

**[⬆️ 返回顶部](#目录)**

## 杂项

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为你的代码、文本或图片创建美观的截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可以将其作为漂亮的图片分享（例如用于推特/脸书帖子），也可以作为链接分享（例如用于聊天或论坛）。
  * [Blynk](https://blynk.io) — 一个提供应用程序编程接口（API）的软件即服务（SaaS）平台，用于控制、构建和评估物联网（IoT）设备。提供免费开发者计划，支持5个设备，有免费云服务和数据存储。还有移动应用程序可供使用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大内置多行计算器的笔记应用程序（渐进式网络应用程序，PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图像格式创建和分享代码片段。通常用于在推特或博客文章中美观地分享/展示代码片段。
  * [Code Time](https://www.software.com/code-time) - 一个用于在VS Code、Atom、IntelliJ、Sublime Text等编辑器中进行时间跟踪和编码指标统计的扩展程序。
  * [Codepng](https://www.codepng.app) - 从你的源代码创建出色的快照，以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图，以便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排定时或周期性的网络钩子（webhooks）。免费计划允许创建5个临时调度任务。
  * [cron-job.org](https://cron-job.org) - 在线定时任务服务。可免费创建不限数量的任务。
  * [datelist.io](https://datelist.io) - 在线预订/预约调度系统。每月可免费预订5次，包含1个日历。
  * [Domain Forward](https://domain-forward.com/) - 一个简单的工具，用于转发任何URL或域名。每月可免费转发5个域名，支持20万次请求。
  * [Elementor](https://elementor.com) — WordPress网站构建器。提供免费计划，包含40多个基础小部件。
  * [Format Express](https://www.format-express.dev) - 用于JSON/XML/SQL的即时在线格式化工具。
  * [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞的端到端管理工具。
  * [Hook Relay](https://www.hookrelay.dev/) - 为你的应用程序添加网络钩子支持，无需繁琐操作：提供队列管理、带退避机制的重试以及日志记录功能。免费计划每天可交付100次，数据保留14天，支持3个钩子端点。
  * [http2.pro](https://http2.pro) — HTTP/2协议就绪性测试和客户端HTTP/2支持检测应用程序编程接口（API）。
  * [kandi](https://kandi.openweaver.com/) — 加速应用程序开发：通过代码片段和开源库的重用，更快地构建自定义函数、用例和完整应用程序。
  * [Base64 decoder/encoder](https://devpal.co/base64-decode/) — 用于解码和编码数据的在线免费工具。
  * [newreleases.io](https://newreleases.io/) - 当GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo和Docker Hub有新版本发布时，通过电子邮件、Slack、Telegram、Discord和自定义网络钩子接收通知。
  * [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的可交换图像文件格式（EXIF）数据，包括GPS位置和元数据。
  * [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理PDF模板，通过应用程序编程接口（API）调用动态数据，并下载PDF文件。每月提供300份免费文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) — 使用扩展程序从代码片段和VSCode创建美观、可定制的截图。
  * [QuickType.io](https://quicktype.io/) - 从JSON、模式和GraphQL快速自动生成模型、类、类型、接口和序列化程序，以便在任何编程语言中快速、安全地处理数据。将JSON转换为任何语言中美观、类型安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 一个免费的移动友好型工具，提供各种随机生成的密钥和密码，可用于保护任何应用程序、服务或设备。
  * [ray.so](https://ray.so/) - 为你的代码片段创建漂亮的图像。
  * [readme.com](https://readme.com/) — 轻松创建美观的文档，对开源项目免费。
  * [redirection.io](https://redirection.io/) — 用于企业、营销和搜索引擎优化（SEO）的HTTP重定向管理的软件即服务（SaaS）工具。
  * [redirect.ing](https://redirect.ing/) - 快速且安全的域名转发，无需管理服务器或SSL证书。免费计划包含10个主机名，每月支持10万次请求。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理带有HTTPS支持的重定向。免费计划包含10个源，每月支持10万次访问。
  * [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。常用的请求方法包括GET、POST、PUT、DELETE和HEAD。支持头部信息和令牌认证。包含一个基本的登录系统，用于保存你的请求。
  * [Smartcar API](https://smartcar.com) - 一个用于汽车的应用程序编程接口（API），可用于定位汽车、获取油箱油量、电池电量、里程表数据、解锁/锁定车门等操作。
  * [snappify](https://snappify.com) - 使开发者能够创建令人惊叹的视觉内容。从漂亮的代码片段到完整的技术演示文稿。免费计划一次最多可创建3个快照，支持无限制下载，每月提供5次人工智能驱动的代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据给定的经度和纬度获取日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 实时的、符合PubSubHubbub规范的订阅源，支持导出和分析。免费版定制性有限。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查。在线分析调查结果。免费计划每个调查仅允许设置10个问题，接收100份回复。
  * [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话式应用程序。使其具备多渠道功能：从你的网站（实时聊天小部件）到WhatsApp。免费计划支持创建不限数量的聊天机器人。
  * [Versionfeeds](https://versionfeeds.com) — 为你喜欢的软件发布版本提供自定义的RSS订阅源。将你使用的编程语言、库或喜爱工具的最新版本整合到一个订阅源中。（前3个订阅源免费）
  * [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
  * [Webacus](https://webacus.dev) — 提供一系列免费的开发者工具，用于编码、解码和数据操作。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 支持2台设备免费使用，对会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需支持以及对设备的永久访问权限（每天可免费进行2次会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图（游戏开发中用于表示角色、物体等的二维图像）、瓦片集（用于构建游戏场景的小块图像集合）和角色包等。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自世界各地游戏艺术家的免费游戏资源。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频、图形用户界面（Graphical User Interface，简称GUI）等。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF图像等。
  * [CraftPix](https://craftpix.net) — 免费/付费资源，如2D、3D、音频、图形用户界面、背景、图标、瓦片集、游戏套件等。
  * [Game Icons](https://game-icons.net/) - 可自定义风格的免费SVG/PNG图标，采用知识共享署名（Creative Commons Attribution，简称CC-BY）许可协议。
  * [LoSpec](https://lospec.com/) — 用于创建像素艺术和其他受限数字艺术的在线工具，提供大量教程和调色板列表供游戏开发选用。
  * [ArtStation](https://www.artstation.com/) - 免费/付费的2D、3D资源、音频、图标、瓦片集、游戏套件的交易市场。此外，还可用于展示个人艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资源，也可使用其免费计划创建自己的游戏资源。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形3D资源。
  * [3Dassets.one](https://3dassets.one/) - 超过8000个免费/付费的3D模型，以及用于制作纹理的基于物理渲染（Physically Based Rendering，简称PBR）材质。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（采用CC0 1.0通用许可协议）的2D、3D、音频和用户界面（User Interface，简称UI）游戏资源。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（具有不同分辨率）、模型、高动态范围图像（High Dynamic Range Image，简称HDRI）和画笔。提供免费插件，可导出到Blender等软件。
  * [Freesound](https://freesound.org/) - 免费的协作式音效库，采用不同的知识共享（Creative Commons，简称CC）许可协议。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者（Wikimint Developer）](https://developer.wikimint.com/p/tools.html) - 面向网页开发者的永久免费工具，包括CSS压缩与解压缩、图片优化器、图片调整大小工具、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可免费获得多达200小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的 `*.localhost.direct` 通配符公共CA签名SSL证书，用于支持子域名的本地主机开发。
  * [Framacloud](https://degooglisons-internet.org/en/) — 由法国非营利组织 [Framasoft](https://framasoft.org/en/) 整理的自由/开源软件和软件即服务（SaaS）列表。
  * [github.com — 面向开发者的自由开源软件（FOSS for Dev）](https://github.com/tvvocold/FOSS-for-Dev) — 一个面向开发者的自由和开源软件中心。
  * [GitHub教育版（GitHub Education）](https://education.github.com/pack) — 为学生提供的一系列免费服务。需要注册。
  * [Markdown工具（Markdown Tools）](https://markdowntools.com) - 用于在Markdown与HTML、CSV、PDF、JSON和Excel文件之间相互转换的工具。
  * [微软365开发者计划（Microsoft 365 Developer Program）](https://developer.microsoft.com/microsoft-365/dev-program) — 可获取免费沙盒环境、工具以及构建微软365平台解决方案所需的其他资源。订阅为90天的 [微软365 E5订阅服务（Microsoft 365 E5 Subscription）](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包含Windows），可续订。若你积极进行开发（通过遥测数据和算法衡量），则可续订。
  * [Pyrexp](https://pythonium.net/regex) — 基于网页的免费正则表达式测试和可视化工具，用于调试正则表达式。
  * [红帽开发者平台（RedHat for Developers）](https://developers.redhat.com) — 开发者可免费使用红帽产品，包括RHEL、OpenShift、CodeReady等。仅提供个人计划。还提供免费电子书供参考。
  * [smsreceivefree.com](https://smsreceivefree.com/) — 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费发送和接收测试短信。
  * [SimpleBackups.com](https://simplebackups.com/) — 针对服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，可直接将数据存储到云存储提供商（AWS、DigitalOcean和Backblaze）。提供一个备份的免费计划。
  * [SnapShooter](https://snapshooter.com/) — 针对DigitalOcean、AWS、LightSail、Hetzner和Exoscale的备份解决方案，支持将数据库、文件系统和应用程序直接备份到基于s3的存储中。提供一个资源每日备份的免费计划。
  * [Themeselection](https://themeselection.com/) — 精选高质量、现代设计、专业且易用的免费管理仪表板模板、HTML主题和用户界面工具包，可帮助你更快地创建应用程序！
  * [Web.Dev](https://web.dev/measure/) — 这是一个免费工具，可让你查看网站性能并优化搜索引擎优化（SEO），从而在搜索引擎中获得更高排名。
  * [SmallDev.tools](https://smalldev.tools/) — 面向开发者的免费工具，可对各种格式进行编码/解码、压缩HTML/CSS/Javascript、美化代码、生成JSON/CSV及多种其他格式的虚假/测试数据集，还有许多其他功能。界面友好。
  * [Layercode的UseCSV](https://layercode.com/usecsv) — 几分钟内即可为你的网络应用添加CSV和Excel导入功能。为用户提供愉快且强大的数据导入体验。无需信用卡信息即可免费开始使用，立即集成UseCSV。你可以创建无限数量的导入器，上传最大100Mb的文件。
  * [按钮生成器（Buttons Generator）](https://markodenic.com/tools/buttons-generator/) — 100多种可用于项目的按钮。
  * [WrapPixel](https://www.wrappixel.com/) — 下载使用Angular、React、VueJs、NextJS和NuxtJS创建的高质量免费和付费管理仪表板模板！
  * [Utils.fun](https://utils.fun/en) — 所有基于浏览器计算能力的离线日常和开发工具，包括水印生成、屏幕录制、编码和解码、加密和解密以及代码格式化等，完全免费，且不会将任何数据上传到云端进行处理。
  * [免费代码工具（Free Code Tools）](https://freecodetools.org/) — 100%免费的高效代码工具。包括Markdown编辑器、代码压缩器/美化器、二维码生成器、Open Graph生成器、Twitter卡片生成器等。
  * [regex101](https://regex101.com/) — 该网站免费，可让你测试和调试正则表达式（regex）。它提供了一个正则表达式编辑器和测试器，以及有助于学习正则表达式的文档和资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) — 100多种开发工具，包括格式化器、压缩器和转换器。
  * [AdminMart](https://adminmart.com/) — 使用Angular、Bootstrap、React、VueJs、NextJS和NuxtJS创建的高质量免费和付费管理仪表板及网站模板！
  * [Glob测试器（Glob tester）](https://globster.xyz/) — 一个可让你设计和测试Glob模式的网站。它还提供学习Glob模式的资源。
  * [SimpleRestore](https://simplerestore.io) - 轻松恢复MySQL备份。无需代码或服务器即可将MySQL备份恢复到任何远程数据库。
  * [360Converter](https://www.360converter.com/) - 免费版实用网站，可进行视频转文本、音频转文本、语音转文本、实时音频转文本、YouTube视频转文本以及添加视频字幕等操作。在短视频转换或YouTube教程制作中可能会有所帮助。
  * [QRCodeBest](https://qrcode.best/) - 使用13种模板创建自定义二维码，保障隐私并支持个人品牌定制。具有跟踪像素、项目分类功能，且在QRCode.Best上团队席位无限制。
  * [PostPulse](https://post-pulse.io) - 提升你的网络影响力，通过每月发布人工智能撰写的文章到SEO优化的域名来增强你的搜索引擎优化（SEO）和网站排名。免费计划允许你每月在我们的网站上手动发布一篇文章。
  * [PageTools](https://pagetools.co/) - 提供一套永久免费的人工智能驱动工具，通过简单的一键式界面帮助你生成网站必备政策、创建社交媒体个人简介、帖子和网页。
  * [MySQL可视化解释器（MySQL Visual Explain）](https://mysqlexplain.com) - 易于理解的免费MySQL EXPLAIN输出可视化工具，用于优化慢查询。
  * [Killer Coda](https://killercoda.com/)  - 浏览器中的交互式游乐场，用于学习Linux、Kubernetes、容器、编程、DevOps和网络。

**[⬆️ 返回顶部](#目录)**