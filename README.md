# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间才能做出明智选择。

这里列出了提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定于基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此本清单带有主观判断；若未采纳您的贡献，还请见谅。

这份清单汇集了1600多位人士提交的Pull Requests、评审意见、创意与工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加更多服务，或移除已变更或终止的条目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包含自托管软件。入选服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们也会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
  * [API、数据与机器学习](#API、数据与机器学习)
  * [制品仓库](#制品仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [CDN与安全防护](#CDN与安全防护)
  * [持续集成与交付](#持续集成与交付)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索与浏览](#代码搜索与浏览)
  * [崩溃与异常处理](#崩溃与异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计与用户界面](#设计与用户界面)
  * [设计灵感](#设计灵感)
  * [开发者博客平台](#开发者博客平台)
  * [域名解析](#域名解析)
  * [Docker相关](#Docker相关)
  * [域名服务](#域名服务)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件服务](#电子邮件服务)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体服务](#字体服务)
  * [表单工具](#表单工具)
  * [生成式AI](#生成式AI)
  * [基础设施即服务](#基础设施即服务)
  * [IDE与代码编辑](#IDE与代码编辑)
  * [国际手机号验证API与SDK](#国际手机号验证API与SDK)
  * [问题跟踪与项目管理](#问题跟踪与项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发与反馈](#移动应用分发与反馈)
  * [管理系统](#管理系统)
  * [消息与流处理](#消息与流处理)
  * [其他类别](#其他类别)
  * [监控服务](#监控服务)
  * [平台即服务](#平台即服务)
  * [软件包构建系统](#软件包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关与无Mac开发iOS应用](#Flutter相关与无Mac开发iOS应用)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道、WebRTC、WebSocket服务器及其他路由](#隧道、WebRTC、WebSocket服务器及其他路由)
  * [测试工具](#测试工具)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
  * [Vagrant相关](#Vagrant相关)
  * [访客会话录制](#访客会话录制)
  * [网站托管](#网站托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件模拟](#基于浏览器的硬件模拟)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 每天1GB存储空间，50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美至所有区域（不包括中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储空间，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主要IDE，5GB持久存储空间，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB北美网络出站流量
    * Google Kubernetes Engine - 一个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，每月10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月）。每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型（SSD）或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型（SSD）存储，20GB备份存储（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，20,000次Get请求和2,000次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM，1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web、移动或API应用（每天60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简的dev-test环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），免费层包含有限事务
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100K操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可用作1个VM或最多4个VM
       - 实例在[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出站流量，x64-based VM限速50 Mbps，ARM-based VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) - 每月1TB免费(出站)流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用所需的一切，无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限部署静态站点、网络服务和环境。每月提供20次免费任务执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公共和私有Git仓库，包含CI/CD流水线
  * [chiselapp.com](https://chiselapp.com/) — 无限制的公共和私有Fossil仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100 MB空间和两名用户
  * [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公共和私有Git仓库（无限制协作者）。由[Forgejo](https://forgejo.org/)驱动。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含包和容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 无限制的私有和公共仓库。永久免费。由GitLab & Sapphire驱动。不提供CI/CD。
  * [GitHub](https://github.com/) — 无限制的公共仓库和无限制的私有仓库（无限制协作者）。包含CI/CD、开发环境、静态托管、包和容器托管、项目管理和AI Copilot
  * [gitlab.com](https://about.gitlab.com/) — 无限制的公共和私有Git仓库，最多5名协作者。包含CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件的软件锻造平台，包含CI、静态页面、项目页面和问题跟踪
  * [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的一个友好分支，提供对Mercurial的支持
  * [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；同时提供一个ionic仓库
  * [NotABug](https://notabug.org) — NotABug.org是一个自由软件代码协作平台，用于自由许可的项目，基于Git
  * [OSDN](https://osdn.net/) - OSDN.net是一个为开源软件开发者提供的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
  * [Pagure.io](https://pagure.io) — Pagure.io是一个自由和开源软件代码协作平台，用于FOSS许可的项目，基于Git
  * [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费的1GB云存储和Git、Mercurial或SVN仓库
  * [pijul.com](https://pijul.com/) - 无限制的免费和开源分布式版本控制系统。其独特功能基于补丁的健全理论，使其易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
  * [plasticscm.com](https://plasticscm.com/) — 对个人、OSS和非营利组织免费
  * [projectlocker.com](https://projectlocker.com) — 一个免费的私有项目（Git和Subversion），包含50 MB空间
  * [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限制的公共和私有仓库
  * [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目的协作软件开发管理系统（针对GNU项目）
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目的协作软件开发管理系统（针对非GNU项目）

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选成美观的表格网格。通过链接保存和分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
  * [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
  * [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
  * [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性工具，用于模型监控和根因分析（如数据质量和性能漂移）。免费支持最多两个模型。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3人）永久免费。
  * [Beeceptor](https://beeceptor.com) - 秒速模拟REST API，伪造API响应等。免费每天50次请求，公共仪表盘，开放端点（任何拥有仪表盘链接的人都可以查看提交和响应）。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费每月1,000积分，相当于1,000次并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [Clarifai](https://www.clarifai.com) — 自定义人脸识别和检测的图像API。可训练AI模型。免费计划每月1,000次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供广泛的API库访问，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整数据溯源，覆盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（每天30次，每月300次）。
  * [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用间同步数据。可创建实时仪表盘和报告，转换和操作值，收集和备份洞察。免费计划限制为一个用户、数据连接、数据源和数据目的地，且需要手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1,000次调用免费。
  * [CurlHub](https://curlhub.io) — 检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织成一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制1,000次查询。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单免费的文件共享。数据在访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需代码将Airtable连接到任何应用或API。在Airtable中运行API请求的Postman式界面。预建与数十个应用的集成。免费计划每月100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 将数据连接、清理和导入Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含10 GB存储和每月120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 用于从网页提取数据到CSV或Excel的浏览器扩展（Google Chrome、MS Edge）。免费计划每月500页。
  * [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可下的精简数据库也免费。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型和每个模型10个表。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜，一个SDK即可实现。免费计划每月最多10个活跃用户（MAU），最多跟踪4张脸。

  * [Disease.sh](https://disease.sh/) — 提供准确数据的免费API，用于构建与Covid-19相关的实用应用程序。
* [Doczilla](https://www.doczilla.app/) — 一款SaaS API，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月允许生成250份文档。
* [Doppio](https://doppio.sh/) — 托管API，使用顶级渲染技术生成并私有存储PDF和截图。免费计划每月允许生成400份PDF和截图。
* [drawDB](https://drawdb.app/) — 免费且开源的在线数据库图表编辑器，无需注册。
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动、Web和物联网应用的开源REST API后端。连接任何SQL/NoSQL数据库、文件存储系统或外部服务，即可立即创建全面的REST API平台，包含实时文档和用户管理功能。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计一次模板即可重复使用。免费层提供20个免费积分。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API生成PDF文档。免费计划允许每月50次API调用，并访问模板库。
* [Efemarai](https://efemarai.com) - ML模型和数据的测试与调试平台。可视化任何计算图。免费本地使用。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图（ERD）工具。免费试用包含2个项目，每个项目10张表。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 免费的基于Web的HTTP客户端，用于发送HTTP请求。
* [Export SDK](https://exportsdk.com) - PDF生成器API，提供拖放式模板编辑器、SDK和无代码集成。免费计划包含每月250页、无限用户和三个模板。
* [file.coffee](https://file.coffee/) - 一个平台，可存储最大15MB/文件（注册账户后30MB/文件）。
* [Financial Data](https://financialdata.net/) - 股票市场和金融数据API。免费计划每天允许300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 一款免费的基于浏览器的工具，可即时格式化、验证、比较和压缩JSON数据。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 筛查订单交易中的信用卡支付欺诈。此REST API将根据订单输入参数检测所有可能的欺诈特征。免费Micro计划每月允许500次交易。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置搜索服务。免费API每月允许500次查询。
* [Geolocated.io](https://geolocated.io) — IP地理定位API，配备多大陆服务器，免费计划每天允许2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过编程从基础模板生成动态图像。提供RESTful API和无代码集成。免费层包含每月50张图像和五个模板。
* [Hex](https://hex.tech/) - 一个协作式数据平台，支持笔记本、数据应用和知识库。免费社区层最多支持五个项目。
* [Hook0](https://www.hook0.com/) - Hook0是一个开源Webhooks即服务（WaaS），使在线产品能够轻松提供Webhooks。免费计划每天可分发100个事件，并保留七天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 一款免费、快速且美观的API请求构建工具。
* [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费计划每月允许30k输入字符。
* [Hybiscus](https://hybiscus.dev/) - 使用简单的声明式API构建PDF报告。14天免费试用包含50份单页报告，支持自定义调色板和字体。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常为Power BI或Power Query）访问70多个（云）平台，如Exact Online、Twinfield、ActiveCampaign或Visma。包含数据复制和交换功能。面向开发者和实施顾问的免费计划。特定平台免费，但有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 一项简单服务，用于获取不同[格式](https://about.ipaddress.sh/)的公共IP地址。
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费计划同一IP地址每分钟限45次请求。
* [ipbase.com](https://ipbase.com) - IP地理定位API - 永久免费计划每月允许150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API - 面向开发者的永久免费计划，每天限1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API - 允许1,000次免费请求。
* [IPLocate](https://www.iplocate.io) — IP地理定位API，每天免费1,000次请求。包含代理/VPN/托管检测、ASN数据、IP到公司等功能。IPLocate还提供可免费下载的IP到国家和IP到ASN数据库（CSV或GeoIP兼容的MMDB格式）。
* [IP2Location](https://www.ip2location.com) — 免费增值IP地理定位服务。LITE数据库可免费下载。导入服务器后执行本地查询，获取城市、坐标和ISP信息。
* [IP2Location.io](https://www.ip2location.io/) — 免费增值、快速且可靠的IP地理定位API。获取城市、坐标、ISP、ASN、AS数据等信息。免费计划每月包含50k积分。IP2Location.io还提供每月500次免费WHOIS和托管域名查询。查看域名注册详情并查找特定IP上托管的域名。升级到付费计划可解锁更多功能。
* [ipapi](https://ipapi.co/) - Kloudend, Inc提供的IP地址定位API - 基于AWS构建的可靠地理定位API，受财富500强信赖。免费层每月提供30k次查询（每天1k次），无需注册。
* [ipapi.is](https://ipapi.is/) - 开发者为开发者提供的可靠IP地址API，具备最佳托管检测能力。免费计划提供1,000次查询，无需注册。
* [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月50k次）的IP地址数据API。提供地理定位、公司、运营商、IP范围、域名、滥用联系人等详细信息的API。所有付费API均可免费试用。
* [IPQuery](https://ipquery.io) — 面向开发者的无限IP API，无速率限制或定价。
* [IPTrace](https://iptrace.io) — 一款极其简单的API，为您的业务提供可靠且有用的IP地理定位数据，每月免费50,000次查询。
* [JSON2Video](https://json2video.com) - 一款视频编辑API，可通过编程或无代码方式自动化视频营销和社交媒体视频制作。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公共IP地址。免费层无需注册。使用CORS，可直接通过客户端JS从浏览器请求数据。适用于监控客户端和服务器IP变化的服务。无限请求。
* [JSON Serve](https://jsonserve.com/) — 一项免费服务，帮助开发者存储JSON对象，并在其应用中将该JSON用作REST API。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建虚假REST API，并自定义HTTP状态码、标头和响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss是一款强大的在线JSON查看器、编辑器和验证器。通过AI驱动的修复、树形视图、表格视图、12+种编程语言的代码生成功能，格式化、可视化、搜索和操作JSON数据，支持将JSON转换为CSV、XML、YAML、属性文件等。

  * [Kreya](https://kreya.app) — 免费的gRPC图形界面客户端，用于调用和测试gRPC API。支持通过服务器反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据提升您的机器学习模型。免费提供最多1000个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并向您的客户发出通知。每月免费处理1,000次登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证电子邮件有效性的服务。免费API计划每月提供100次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费API层允许每天100次免费API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预测基于多个天气模型的机器学习组合以提高准确性。免费计划每天提供400次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，如元标签标准化、美观链接预览、爬取功能或截图服务。每天50次免费请求。
  * [Mindee](https://developers.mindee.com) – Mindee是一款强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者标准化文档处理层以自动化应用工作流程。免费层每月提供500页。
  * [Mintlify](https://mintlify.com) — 现代API文档标准。美观且易于维护的UI组件、应用内搜索和交互式 playground。免费支持1位编辑者。
  * [MockAPI](https://www.mockapi.io/) — MockAPI是一款简单工具，可快速模拟API、生成自定义数据并通过RESTful接口执行操作。MockAPI旨在用于原型设计、测试和学习。每个项目免费提供1个项目/2个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly是一款值得信赖的开发工具，用于API模拟和功能标志管理。通过直观界面快速生成和控制模拟API。免费层每天提供500次请求。
  * [Mocki](https://mocki.io) - 一款工具，可创建与GitHub仓库同步的模拟GraphQL和REST API。简单的REST API无需注册即可免费开发和使用。
  * [Mocko.dev](https://mocko.dev/) — 代理您的API，选择在云端模拟哪些端点并检查流量，完全免费。加速您的开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 一个简单的Web应用，用于生成自定义HTTP响应以模拟HTTP请求。也可作为[开源项目](https://github.com/julien-lafont/Mocky)使用。
  * [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——一款强大工具，可在无后端延迟的情况下模拟真实API响应。非常适合前端开发者、QA测试人员和DevOps团队。[仓库](https://github.com/haerulmuttaqin/mocknroll-web)。
  * [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码并在Docker容器中运行应用。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一款免费简单工具，可检查多个节点的出口IP地址，了解您的IP在不同全球区域和服务中的显示情况。适用于测试基于规则的DNS拆分工具，如Control D。
  * [Namekit](https://namekit.app/) - AI驱动的域名发现——即时查找可用且标准价格的域名。免费每日查询。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻，并获取JSON结果。开发者每天可免费查询100次。文章有24小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
  * [OCR.Space](https://ocr.space/) — 一款OCR API，解析图像和PDF文件并以JSON格式返回文本结果。每月25,000次免费请求，文件大小限制为1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转换为API，免费提供5个项目。
  * [Parseur](https://parseur.com) — 每月20页免费：从PDF、电子邮件中提取数据。AI驱动。完全API访问。
  * [PDFBolt](https://pdfbolt.com) - 专注于开发者的PDF生成API，设计注重隐私。提供Stripe风格的文档，包括每月500次免费PDF转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 轻松通过简单API将HTML或URL转换为PDF。每月100次免费转换。
  * [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包括1个模板，每月100次PDF生成。
  * [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作均通过API执行。还支持热图和折线图可视化。
  * [Postman](https://postman.com) — 通过Postman简化工作流程并更快创建更好的API，Postman是API开发的协作平台。永久免费使用Postman应用。Postman云功能也永久免费，但有某些限制。
  * [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL
  * [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括5个部署的工作流和每月500分钟的无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管Apache Superset服务。最多5人团队永久免费，功能包括无限仪表板和图表、无代码图表构建器和协作SQL编辑器。
  * [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍更简单的AI网络爬取，几乎零采用时间，现有工作流程节省85%+时间，操作速度比手动研究快4倍且无妥协，包括所有研究任务的REST API端点。每月前1,000积分免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者连接数千个API，通过趣味挑战（带解决方案！）和交互式示例进行API开发。
  * [Rendi](https://rendi.dev) - FFmpeg API - 一款REST API，用于在线运行FFmpeg而无需处理基础设施。免费层提供每月处理配额和4个vCPU。
  * [RequestBin.com](https://requestbin.com) — 创建免费端点以发送HTTP请求。发送到该端点的任何HTTP请求将记录相关负载和标头，以便您观察来自Webhook和其他服务的建议。
  * [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应您的AJAX请求。
  * [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层每月包括30积分。
  * [ROBOHASH](https://robohash.org/) - 从任何文本生成独特酷炫图像的Web服务。
  * [Scraper's Proxy](https://scrapersproxy.com) — 简单的HTTP代理API，用于爬取。匿名爬取，无需担心限制、封锁或验证码。每月前100次成功爬取免费，包括JavaScript渲染（联系支持可获得更多）。

  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的webhook。免费套餐包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，可自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将任何Google表格转换为RESTful API。提供免费套餐，每张表格包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API可进行网页截图、网站审计、TLS扫描、DNS查询、TTFB测试等。免费套餐每月提供100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。为Google、YouTube、Bing、百度、沃尔玛等平台返回结构化JSON结果。免费套餐每月包含100次成功API调用。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供省时省力的开发者工具。免费版每月包含300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件即可通过API即时访问数据，加速应用开发。免费套餐包含2个API和每月2,500次调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化器、验证器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS平台。免费版提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可创建最多50张图片。
* [Svix](https://www.svix.com/) -  Webhook即服务。每月免费发送50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，具备研究成果整理能力。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天1,000次免费请求。提供IP地址的位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API方案。覆盖全球的精准天气预报，包含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。具备高级API日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币和加密货币的实时汇率。免费方案无限次API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐小时/每日预报和天气警报。整合AI模型和ML系统分析多种气象模型，提供更高精度预报。免费层每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析器、Chrome渲染和代理的简易网页抓取API。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费方案每月25,000个token（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识型算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转化为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器、住宅IP和透明定价的网页抓取API。每月1,000次免费调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，获取全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API和邮政编码验证。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持在边缘设计、构建和部署API。可快速添加API密钥认证、速率限制、开发者文档和货币化功能。基于OpenAPI标准，完全可编程（Web标准API和Typescript）。免费层支持10个项目、不限量生产边缘环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位JSON数据结构差异。
* [FreeIPAPI](https://freeipapi.com) - 面向商业和非商业用户的免费、快速、可靠IP地理定位API（JSON格式）

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 1 GB免费的私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公共制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公开项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云上的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人与团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 团队专属聊天应用。公开群组免费，支持无限用户、完整历史记录和集成，并提供可自托管开源版本
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与排期工具。免费版支持1个日历账户连接和无限次会话，提供桌面端与移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时Scrum扑克估算工具，支持无限成员快速评估用户故事点
* [Telegram](https://telegram.org/) — 为所有人提供快速可靠的消息与通话服务。企业用户和小团队可享受大群组、用户名、桌面端应用和强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流协作平台。支持IDE配对编程、终端共享、语音视频及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备协同插件提升效率与参与度。免费版每月含10,000分钟音视频时长
* [evernote.com](https://evernote.com/) — 信息管理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队沟通工具，免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议方式。通过可定制虚拟空间，让社群互动如现实般自然。免费版支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动的每日报告工具。含推送可视化、同伴认可系统和自定义提醒构建器。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具，公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但专为Markdown设计，免费版笔记数量无限制，但私有笔记协作人数和模板功能受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实远程协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意收集与投票平台，免费支持25名成员和1个社区
* [Igloo](https://www.igloosoftware.com/) — 内部文档、博客、日历共享门户，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议工具，提供安全便捷的接入体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/私聊中使用/meet命令发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签、多工作区和协作。免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能产品团队与开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — Slack内预约锁定共享资源（如会议室、开发环境等），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈的工具
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享和通行密钥的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作笔记应用，被描述为"一体化工作空间"，支持多平台和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含核心功能、50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编译器的技术面试平台，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间追踪与报告工具，免费版支持10名用户
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加视觉评审功能而无需部署网站，免费版每月10个页面/100MB存储
* [Pendulums](https://pendulums.io/) - 界面友好、数据可视化的免费时间管理工具
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史

  * [element.io](https://element.io/) — 基于 Matrix 构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、音视频通话，并轻松集成其他服务。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix 联邦协议、多应用桥接、无限消息和完整消息历史记录。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步及讨论功能。云版本仅提供 1 GB 空间。
  * [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献并生成单一报告快照。
  * [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，直接从浏览器与协作者共享屏幕，无需下载或注册。
  * [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多支持 10 名用户免费使用。
  * [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
  * [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游供应商的状态页吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作应用。免费版支持最多 3 个面板、无限用户和 1 GB 存储。
  * [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人计划。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点。无需插件、注册或付费。
  * [Teamhood](https://teamhood.com/) - 免费项目、任务和问题跟踪软件。支持带泳道功能的看板和完整 Scrum 实现，集成时间追踪。免费支持五名用户和三个项目组合。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程。包含面向远程优先团队的完整休假管理功能。小团队（最多 5 人）免费。
  * [Tefter](https://tefter.io) - 书签应用，提供强大的 Slack 集成。开源团队免费使用。
  * [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 无限用户免费使用的时间追踪软件。轻松集成 Jira、Trello、Asana 等项目管理系统。
  * [Huly](https://huly.io/) - 一体化项目管理平台（替代 Linear/Jira/Slack/Notion/Motion）— 无限用户，每个工作区 10GB 存储，10GB 音视频流量。
  * [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用。
  * [twist.com](https://twist.com) — 异步友好的团队沟通应用，保持对话条理清晰且主题明确。提供免费无限计划，合格团队可享折扣。
  * [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，具备智能箭头、吸附、便利贴和 SVG 导出功能。支持多人协作编辑。另有官方免费 VS Code 扩展。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签管理器、标签页管理器和任务管理器，提供可定制在线桌面及文件夹协作功能。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
  * [Tugboat](https://tugboat.qa) - 自动化按需预览每个拉取请求。全员免费，非营利组织可享 Nano 免费套餐。
  * [whereby.com](https://whereby.com/) — 一键视频通话（原 appear.in）
  * [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过极简 Python/Typescript 脚本快速构建生产级多步骤自动化和内部应用。免费用户最多可创建并加入三个非高级工作区。
  * [vadoo.tv](https://vadoo.tv/) — 极简视频托管与营销平台。单键上传视频，支持录制、管理、分享等功能。免费版每月提供 10 个视频、1 GB 存储和 10 GB 带宽。
  * [userforge.com](https://userforge.com/) - 互联在线角色画像、用户故事和场景映射工具。保持设计与开发同步，免费支持最多 3 个角色和两名协作者。
  * [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，提供 25 个视频和品牌化播放器。
  * [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务。不限数量分享最大 5GB 文件。
  * [Wormhole](https://wormhole.app/) - 端到端加密分享最大 5GB 文件（有效期 24 小时）。超过 5GB 的文件采用点对点传输。
  * [zoom.us](https://zoom.us/) — 安全视频和网络会议工具。免费会议限时 40 分钟。
  * [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版包含 10,000 条可搜索消息和 5 GB 文件存储。另提供可自托管的开源版本。
  * [robocorp.com](https://robocorp.com) - 驱动自动化运维的开源技术栈。免费体验云功能并实现简单自动化：每月 240 分钟机器人运行时长、10 次助手执行、100 MB 存储。
  * [Fleep.io](https://fleep.io/) — Slack 替代品。小团队免费计划包含完整消息历史、无限私聊、1 个群组对话和 1 GB 文件存储。
  * [Chanty.com](https://chanty.com/) — 另一款 Slack 替代品。永久免费计划支持小团队（最多 10 人），含无限公私对话、可搜索历史、无限 1:1 语音通话、无限语音消息、10 个集成和 20 GB 团队存储。
  * [ruttl.com](https://ruttl.com/) — 收集网站/PDF/图像数字反馈的一站式审阅工具。
  * [Mattermost](https://mattermost.com/) — 技术团队的安全协作平台。免费版含无限频道、剧本、看板、用户及 10GB 存储等。
  * [Webvizio](https://webvizio.com) — 网站反馈工具和缺陷报告系统，直接在网站/Web 应用/图像/PDF/设计文件上协同处理开发任务。
  * [Pullflow](https://pullflow.com) — 跨 GitHub/Slack/VS Code 的 AI 增强代码评审协作平台。
  * [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时 40 分钟（100 人参与）。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时 50 分钟（100 人参与）。
  * [GitBook](https://www.gitbook.com/) — 技术知识沉淀平台，涵盖产品文档/内部知识库/API 文档等。个人开发者免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输与共享界面。无需订阅即可发送照片视频等大文件。
  * [paste.sh](https://paste.sh/) — 基于 JavaScript 和加密技术的简易粘贴站点。

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密/多标签粘贴/API接口/语法高亮编辑器等功能
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟/画布或变通方案，免费版功能完整可用
* [Cushion](https://cushion.so/) - 面向分布式小团队的异步协作工具，免费版支持30条消息/5名成员及不限量访客

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。提供开发者免费套餐，同时可免费使用开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。为开发者提供免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础套餐每月支持 10 万次 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的本地或云端数字资产与数据库内容管理平台，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何使用限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者方案支持 2 个用户、无限项目（每个项目含 2 套环境）、500 个内容项、2 种语言，提供交付/管理 API 和自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面，社区计划包含无限 API 调用、文档、自定义类型、资源和多语言支持（单用户）。开源内容项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据库。每个项目免费包含：无限管理员用户、3 个非管理员用户、2 个数据集、50 万次 CDN API 请求、10GB 流量和 5GB 资源存储。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者套餐含 3 个用户、500 个内容项、3 种内置角色、30+ 内容类型、全功能 REST API、文档预览生成和 Office Online 编辑支持。
* [TinaCMS](https://tina.io/) — Forestry.io 替代品。开源 Git 托管的无头 CMS，支持 Markdown/MDX/JSON，基础套餐免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 现代化框架，可轻松对接任意 CMS/API/数据库构建无头网站，实现更高流量、转化率和商业收益。
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL 优先的 API，助您从传统方案迁移至原生 GraphQL 无头 CMS，实现全渠道内容交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先架构，开源且基于事件溯源技术（自动记录每次变更）。
* [InstaWP](https://instawp.com/) - 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间，站点 48 小时后自动过期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区版免费包含：管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持（无限语言）、2500 个素材资源、图片优化服务、搜索查询和每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务，无时间限制。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，通过简单输入即可生成精美商业网站。支持免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的 No code 应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限的 API 和路由，支持深度集成。免费方案包含 3 个项目、5 张表和 1 个 Google 插件。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程 AI 助手，通过 AI 和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody 提供多种 LLM 选择（包括本地推理），支持多种 IDE 和主流编程语言，并有免费方案。免费用户每月可获得 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
* [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计无缝转换为动态 Flutter 和 React 应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持 C#。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费方案包含 3 个切面。
* [Supermaven](https://www.supermaven.com/) — Supermaven 是面向 VSCode、JetBrains 和 Neovim 的快速 AI 代码补全插件。免费方案提供无限行内补全。
* [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习洞察，帮助开发者更快构建更优质的软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0 利用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，初始赠送 1200 积分，每月还可获赠 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1位用户和1个100 MB存储容量的代码库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持在1024x768分辨率下使用Vista系统的MS IE 9进行3分钟会话
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（包括自托管版本）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库（最多4名协作者）免费，学生和教育机构也可免费使用
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版包含无限用户、公开仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [codescene.io](https://codescene.io/) - 根据开发者代码交互方式优先处理技术债务，可视化团队耦合和系统掌握度等组织因素。开源免费
* [CodSpeed](https://codspeed.io) - 在CI流水线中自动化性能追踪。通过精准一致的指标，在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费的网页性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI发现缺陷/安全漏洞/性能及API问题。实时分析能力可在IDE保存时即时返回结果。支持Java/C/C++/JavaScript/Python/TypeScript。集成GitHub/BitBucket/GitLab。开源和私有仓库免费（最多30名开发者）
* [deepscan.io](https://deepscan.io) — 高级静态分析工具，自动发现JavaScript代码运行时错误，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，发现并修复安全/性能/反模式/风险缺陷/文档/风格等问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库和SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查（免费）
* [gocover.io](https://gocover.io/) — 任意[Go](https://golang.org/)包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化头号静态代码分析器。自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。提供框架迁移/带修复的代码分析/大规模无与伦比的代码转换，让开发者专注创新而非维护旧代码。开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求和提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具，含代码验证和多设备支持
* [zoompf.com](https://zoompf.com/) — 修复网站性能问题，提供详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖项更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供强大的代码截图工具（含预设模板和链接功能），支持代码片段整理、发现与共享

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动 DevOps 平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows 平台的持续交付服务，开源项目免费。
  * [LocalOps](https://localops.co/) - 在30分钟内在 AWS/GCP/Azure 上部署应用。在任何云平台上设置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云平台。支持在 Kubernetes 和 Lambda 环境上部署自定义和第三方应用。免费层允许5个域名和2个用户的无限制应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用（原生或混合）的 CI/CD。每月200次免费构建，每次构建10分钟，支持2个团队成员。开源项目获得45分钟构建时间，+1并发和无限团队成员。
  * [buddy.works](https://buddy.works/) — CI/CD 服务，免费支持5个项目和一个并发运行（每月120次执行）。
  * [Buildkite](https://buildkite.com) CI 流水线免费支持3个用户和每月5000分钟任务时间。测试分析免费开发者层包括每月10万次测试执行，开源项目有更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps。免费支持20个用户和10个数据库实例。
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包含托管 CI/CD 服务的所有功能，支持 GitHub、GitLab 和 BitBucket 仓库。多种资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试分割、Docker 层缓存等高级 CI/CD 功能。每月免费6000分钟执行时间，无限协作者，私有项目30个并行任务，开源项目最高8万分钟构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公共 GitHub 仓库免费。
  * [cirun.io](https://cirun.io) - 公共 GitHub 仓库免费。
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，一个环境，共享服务器，无限公共仓库。
  * [codemagic.io](https://codemagic.io/) - 每月免费500分钟构建时间。
  * [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限。
  * [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费。
  * [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时间）。
  * [drone](https://cloud.drone.io/) - Drone Cloud 支持开发者在单一平台运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线。
  * [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
  * [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建。
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建虚拟机并通过唯一URL访问应用，无限公共和私有仓库，虚拟机大小最高2GB。
  * [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库。
  * [Mergify](https://mergify.io) — GitHub 工作流自动化和合并队列 — 公共GitHub仓库免费。
  * [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并自动化工作流。支持多种应用和热门API。公共GitHub仓库免费，免费层包括100 Mb、1000次操作和15分钟最小间隔。
  * [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月免费3000分钟构建时间。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续资源合规、SAML 2.0单点登录，公共工作池访问：每月最多200分钟。
  * [microtica.com](https://microtica.com/) - 提供预置基础设施组件的启动环境，免费在AWS上部署应用并支持生产负载。免费层包括1个环境（在您的AWS账户上）、2个Kubernetes服务、每月100分钟构建时间和20次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、任务分发和自动化分割端到端测试等功能加速CI中的单体仓库。免费计划支持最多30名贡献者，包含15万积分。
  * [blacksmith](https://www.blacksmith.sh/) - GitHub Actions 的托管性能运行器，每月免费3000分钟，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate 是基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。最多2个用户免费，包含所有功能。
  * [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持拉取请求驱动的工作流、通过自托管运行器实现项目隔离，以及分层运行有序操作。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费，个人用户每周有限检查点免费使用。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接测试您的Android和iOS应用。免费套餐每月包含两个并发会话，每次30分钟使用时间，应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的用户也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android平台测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能回归。所有公开项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易学无需编码，本地计算机上可无限次免费运行测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分价格监控API和应用。基于"Monitoring as Code"工作流和Playwright构建。开发者享有慷慨免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50+ SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员免费工具，检查API是否针对给定域名启用CORS并识别差距。获取可操作见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器内测试方案。Cypress测试运行器始终免费开源无限制。Cypress仪表盘对开源项目免费（最多5用户）。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外完全开源。每月5次测试创建免费（含自愈脚本、邮件和视觉测试）。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器操作步骤生成脚本，免费版功能较少。
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — 混沌工程工具，安全注入故障发现系统弱点。免费版支持5主机/容器的关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐含4并发节点/10次网格启动/4,000测试分钟每月。
* [katalon.com](https://katalon.com) - 提供适应不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - 开发者功能测试工具包。通过记录API调用生成E2E测试（KTests）和模拟/桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby/JavaScript测试节省时间。10分钟测试文件免费，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — Selenium和Cypress上的手动、视觉、截图及自动化浏览器测试，[开源免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费每月模拟50并发用户60分钟。
* [lost-pixel.com](https://lost-pixel.com) - Storybook/Ladle/Histoire故事和Web应用的全栈视觉回归测试。团队成员不限，开源完全免费，7,000快照/月。
* [octomind.dev](https://www.octomind.dev/) - AI辅助生成、运行和维护Playwright UI测试。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和项目，5,000快照/月。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费版含所有核心功能，500MB附件存储和最多3用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试工具。支持原生应用、Flutter、React-Native、Web、Ionic等框架。免费版限iOS/Android各10测试，但包含付费版大部分功能（含无限测试运行）。
* [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。免费版可创建10条规则，开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO测试工具。每日10次网站爬取。提供SEO学习资源和改进建议（不限技术栈）。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen的跨浏览器测试平台。以用户故事形式编写测试，免费版支持Chrome无限测试（无需注册，每次最长3分钟）。发现bug可复制唯一URL展示复现步骤。
* [SSR (服务器端渲染)检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉对比检查任何URL的SSR效果。
* [TestCollab](https://testcollab.com) - 用户友好型测试管理软件，免费版含Jira集成、无限项目、CSV/XLSx用例导入、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
* [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板，及通过GitHub实现手动测试代码化的框架。[开源项目免费](https://github.com/marketplace/testspace-com)，每月450结果额度。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成的工具链、组件和设计系统实现更快迭代、更优设计并简化开发流程。无限项目且提供五年免费维护。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过唯一URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、出站HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含两名用户、10个代码库扫描、1个云账户、2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求。
  * [atomist.com](https://atomist.com/) — 自动化各类开发任务的更快捷方式。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — Amazon Web Services (AWS) 安全性与合规性审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)。完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，提供不可篡改的代码、文件、目录或容器公证服务
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生、开发者友好的安全平台，防止.NET和Java应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简单直观的Web应用，用于分析和编解码数据而无需复杂工具或编程语言。如同密码学领域的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表遵循最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动为Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions更新依赖项。
  * [DJ Checkup](https://djcheckup.com) — 使用这款免费的自动化检查工具扫描您的Django站点以发现安全漏洞。源自Pony Checkup站点分支。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，用于管理应用密钥和配置，支持同步到多种云服务商。免费支持5名用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 快速安全地同步您的.env文件。不再通过Slack或电子邮件等不安全渠道共享.env文件，也不会再丢失重要.env文件。最多支持3名团队成员免费使用。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测和修复，防止密钥泄露到源代码中。扫描Git仓库中350多种类型的密钥和敏感文件——个人及25人以下团队免费。
  * [Have I been pwned?](https://haveibeenpwned.com) — 用于获取数据泄露信息的REST API。
  * [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，让您管理团队成员和基础设施中的开发者密钥：从本地开发到生产环境第三方服务全覆盖。最多支持5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准如IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE的合规性
  * [keychest.net](https://keychest.net) - SSL证书到期管理及购买服务，集成CT数据库
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，证书受所有主流浏览器信任
  * [meterian.io](https://www.meterian.io/) - 监控Java、Javascript、.NET、Scala、Ruby和NodeJS项目依赖项中的安全漏洞。一个私有项目免费，开源项目不限数量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 查找并修复您网站中的安全漏洞。
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用和配置的安全监控，免费支持25名用户和30天历史记录。
  * [openapi.security](https://openapi.security/) - 快速检查任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册。
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人形式的自动化产品安全工程师，为您的Java代码库提交PR以自动修复漏洞。其他语言支持即将推出！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。一个私有项目免费，开源项目不限数量。
  * [qualys.com](https://www.qualys.com/community-edition) — 查找Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 可查找并修复开源依赖项中的已知安全漏洞。开源项目无限次测试和修复。私有项目每月限200次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — 对任何SSL Web服务器配置进行深度分析
  * [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测并修复安全威胁。通过简单有效的方案保护您的项目。
  * [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，在生产环境前发现并修复安全漏洞。单个应用支持无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查及恶意软件扫描器
  * [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒和服务器防火墙(WAF)。注册用户免费层包含邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书、链等。不仅限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：专为刚开始学习网络威胁情报的个人研究员、分析师和组织设计。最多3名用户免费。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划允许每周XSS扫描。
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月最多100万次加密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。最多250名用户的应用免费。
  * [Vulert](https://vulert.com) - Vulert持续监控您的开源依赖项中的新漏洞，推荐修复方案，无需安装或访问代码库。开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键扫描GraphQL端点安全性。免费无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个公开GitHub仓库、gist、issue和评论中泄露的密钥

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端SDK。免费支持1000 MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式单点登录服务。免费方案包含25,000 MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费支持5000 MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)服务，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA服务，提供预构建的登录/注册/个人资料等UI组件。免费支持10,000 MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个领域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证方案。无限MAU免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500月活用户和50个租户(含5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成到产品中。提供7,500免费MAU的起步方案。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等任何应用实现无密码认证，仅需几分钟即可完成集成。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100 MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个企业应用和5个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费的开发者账户包含所有安全功能，支持无限团队成员、200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于需要实时更新的可扩展微服务架构，提供无代码策略UI。免费层包含1000 MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理服务。免费支持1000用户和10个SSO连接，采用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重建认证系统即可添加企业SSO功能。免费方案包含无限MAU、无限组织和2个SSO/SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化平台提供认证与防欺诈的API/SDK。免费方案包含10,000 MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 不踩坑的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，也提供含10k免费MAU的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，既能快速上手又可完全掌控用户体验。免费支持5000 MAU。
* [Warrant](https://warrant.dev/) - 企业级授权与访问控制托管服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费支持25,000次认证请求，包含所有安全功能(OTP、无密码登录、策略等功能无付费墙)。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可面向各种规模企业销售产品。免费支持200用户和1万封事务邮件(带"Powered by PropelAuth"水印)。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份 - 同时支持认证与授权。免费支持5,000 MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱密码登录、社交账号登录、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：一个应用、分析功能、无限版本与安装、以及用户反馈收集。
* [Loadly](https://loadly.io) - iOS 和 Android 测试版应用分发服务，提供完全免费的无限下载、高速下载和无限上传功能。
* [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、十次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发 iOS 和 Android 应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费方案包含：一个应用项目、三个应用版本、500 MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：五个应用、每月50次下载、最大文件大小100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理工具，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，无限设备免费管理。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理平台。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带直观界面的服务器管理与部署平台。提供单台服务器的免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持多可用区节点部署
  * [courier.com](https://www.courier.com/) — 统一推送、应用内消息、邮件、聊天、短信等多渠道消息API，含模板管理等功能。免费套餐每月10,000条消息
  * [Engage](https://engage.so/) - SaaS客户互动与自动化全栈工具（邮件、推送、短信、产品导览、横幅等）。每月免费支持1,000名活跃用户
  * [engagespot.co](https://engagespot.co/) — 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接至云原生物联网消息代理。永久免费连接100台设备（无需信用卡）
  * [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用实现应用内、邮件、短信、Slack和推送等多渠道发送。免费套餐含每月10,000条消息
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫
  * [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件、短信、站内信、应用内和推送等多渠道的组件与API。免费套餐含每月30,000条通知（保留90天）
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个并发连接和每日200,000条消息
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个并发连接和每日100,000次事件
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通讯API服务，支持实时数据注入、视频布局、录制、全功能托管WebUI或自定义UI包。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长
  * [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送不限量，含浏览器内消息
  * [httpSMS](https://httpsms.com) - 将Android手机作为短信网关收发短信。每月免费200条收发额度
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全Serverless MQTT代理。永久免费套餐含每月100万会话分钟（无需信用卡）
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒内容。免费套餐：每日50条消息至1台设备1个应用
  * [SuprSend](https://www.suprsend.com/) - 采用API优先的智能通知基础设施，通过单一API发送交易通知、定时任务和互动消息。免费套餐每月10,000条通知，支持摘要、批量、多渠道、偏好设置、租户、广播等工作流节点
  * [SMSGate](https://sms-gate.app) - Android™短信网关，通过云路由实现设备间短信收发。完全免费的云服务（建议每日超10,000条用量时通知以保障服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB存储量，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB存储量，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费套餐包含50GB存储空间，15天存储保留期和7天搜索功能。
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB存储量，保留7天
* [log.dog](https://log.dog/) — LogDog是一款远程调试/日志记录SDK（支持iOS和Android），提供网页界面。实时捕获所有日志、请求和事件，并支持拦截功能。每月免费100MB日志量
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB存储量，保留3天
* [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量项目、字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费无限制
* [Lecto](https://lecto.ai/) - 机器翻译API含免费额度（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条字符串源），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限用于一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）。
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费计划。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费计划包含十个监控器，3分钟检查频率和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器，5个正常运行时间监控器，无限用户、仪表板和告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控和深度API监控。免费计划包含一个用户，10,000次API和网络检查/1,500次浏览器检查运行。
* [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控。免费：无限按需扫描、用户和存储账户。订阅：自动化扫描、API访问等。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史记录。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察和正常运行时间监控。免费层提供五个监控器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费提供一个监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施费用。每月在Google Cloud Platform上花费不超过5,000美元免费。
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。免费版提供24小时数据保留
* [fivenines.io](https://fivenines.io/) — 实时仪表板和告警的Linux服务器监控 — 永久免费监控最多5台服务器，60秒间隔。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的观测平台，将指标和日志与Grafana集成。免费：3个用户，十个仪表板，100个告警，Prometheus和Graphite中的指标存储（10,000个序列，14天保留），Loki中的日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控您的定时任务和后台任务。最多20个检查免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）。
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可完成的实时监控仪表板，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，无限订阅和团队。
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用程序和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站最多100页免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) -  Middleware观测平台提供对您的应用和堆栈的完整可见性，以便您可以大规模监控和诊断问题。他们为开发者社区提供永久免费计划，允许日志监控最多1M日志事件，基础设施监控和APM最多2台主机。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控，提供美观的状态页面。永久免费计划提供HTTPS、关键词、SSL和响应时间监控，支持10个网站或API端点，并提供2个仪表板/状态页面。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源工具，用于收集实时指标。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台旨在帮助工程师创建更完美的软件。从单体应用到无服务器，您可以检测一切，然后分析、排查和优化整个软件堆栈。免费层提供每月100GB免费数据摄入，一个完全访问用户，和无限免费主要用户。
* [nixstats.com](https://nixstats.com) - 一台服务器免费。支持邮件通知、公共状态页面、60秒间隔等。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的正常运行时间监控，定时任务和计划任务监控。还提供状态页面。前五个检查，3分钟间隔免费。免费层通过Slack、Discord和邮件发送告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国防火墙屏蔽。通过比较中国和美国服务器检测到的DNS结果和ASN信息，识别DNS污染。
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警和值班管理，用于运营始终在线的服务。最多5个用户免费。
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括告警、强大的可视化能力和基本报告。最多100个传感器免费。
* [pagecrawl.io](https://pagecrawl.io/) -  监控网站变化，每天检查最多6个监控器免费。
* [pagerly.io](https://pagerly.io/) -  在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班）
* [pageradar.io](https://pageradar.io/) — 监控网站的核心网页指标、SEO变化和正常运行时间。免费计划包括5个URL，每日核心网页指标监控，10个HTML/SEO变化监控器，167个国家联盟链接监控和邮件告警。
* [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控，无限项目和状态页面，最多100,000次事件免费。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检查无限URL并通过Discord、Slack或邮件获取停机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 高级状态页面平台，带监控。免费层包括一个可自定义的公共状态页面，带SSL子域名。开源项目和非营利组织免费提供专业计划。
* [Pulsetic](https://pulsetic.com) - 10个监控器，6个月的历史正常运行时间/日志，无限状态页面和自定义域名！永久免费，无限邮件告警。无需信用卡。

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义指标数据点、无限仪表盘和用户等
  * [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控，涵盖指标和日志，无需复杂配置。单台服务器免费
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类提供5个免费监测器
  * [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 2个免费监测器
  * [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
  * [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
  * [Squadcast.com](https://squadcast.com) - Squadcast是端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10个用户
  * [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
  * [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名
  * [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供告警和指标
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个地理位置和20个主流Web服务数据源
  * [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监测器，5分钟间隔，可自定义状态页（包括商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
  * [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应编排平台。最多5个用户免费
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是稳定的正常运行时间监控工具，支持多种监测类型：Cron任务、关键词、网站、端口、Ping。25个正常运行时间检查，3分钟间隔，免费。通过电话、短信、邮件和Webhook告警
  * [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
  * [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费，Linux和Windows服务器监控：5个免费，状态页：1个免费 - 移动应用、多通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费。
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志和运行时间监控。开源项目可免费使用小型商业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控服务。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且易于自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简单、开源错误追踪。兼容开源Sentry SDKs。每月1,000次事件免费，或自托管无限使用。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备100台免费。
* [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5,000次错误，无限用户，30天保留期。
* [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用。
* [Axiom](https://axiom.co/) — 存储最多0.5 TB日志，保留30天。包含与Vercel等平台的集成，支持高级数据查询和邮件/Discord通知。
* [Semaphr](https://semaphr.com) — 移动应用的一键式全局关闭开关，完全免费。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告。免费计划无限次使用。
* [Whitespace](https://whitespace.dev) – 浏览器内一键式错误报告。个人使用免费计划无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，提供拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索服务](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费不限搜索次数，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完整编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发全领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 汇集MIT 2500多门课程资料，向全球学习者免费开放。YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript和SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费课程，专注计算机科学、工程与数据科学
* [Django教程](https://django-tutorial.dev) - Django框架入门免费指南，并为用户文章提供dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click和Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和手机号验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 邮件订阅服务。最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似Bitly的联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个您域名下的邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月最多9000封免费邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者和每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器；只是一个邮件客户端，允许您直接从客户端发送邮件而无需暴露凭据，免费层包含200次月请求，2个邮件模板，请求最大50KB，有限的联系人历史记录
* [EtherealMail](https://ethereal.email) - Ethereal是一个伪SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递
* [临时邮箱](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，使用多种域名。每次页面刷新时邮箱地址会更新。完全免费，不收取任何费用
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检查是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器。支持10个域名，允许创建无限地址（包含广告），但除此之外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限数量的您域名下的邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD时需要付费，因为这些域名容易产生垃圾邮件）
* [Imitate Email](https://imitate.email) - 沙盒邮件服务器，用于测试构建/QA和CI/CD中的邮件功能。免费账户每天永久15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 一个域名的免费邮件转发。接收和发送您域名下的邮件
* [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过方便的Chrome扩展删除。非常适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源并可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面提供服务
* [mailchannels.com](https://www.mailchannels.com) - 邮件API，支持REST API和SMTP集成，每月最多3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者和每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者和无限邮件以及自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费的公共邮件系统，可以使用任何收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每天200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 免费API用于临时邮件测试，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用的伪SMTP服务器，免费套餐包含1个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者的免费临时邮箱地址。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS源阅读收到的邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到您的服务器）
* [pepipost.com](https://pepipost.com) — 第一个月30000封免费邮件，之后每天前100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC每周摘要
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务提供商，内置端到端加密。免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠的邮件投递API。免费层（每月10000封邮件）。异步发送。使用多个SMTP服务器。黑名单、日志、跟踪、Webhook等
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100个邮箱，以及其他免费API如DEA检测器、DNS查询、SPF检测器等
* [Resend](https://resend.com) - 开发者的事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费邮件订阅服务。开始收费时再付费
* [Sweego](https://www.sweego.io/) - 欧洲开发者事务性邮件API。每天500封免费邮件

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持邮箱确认和一次性邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多种服务，部分含免费方案。含免费方案的服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5个无人值守计算机许可，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储空间
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储空间。包含Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名会议参与者和10名网络研讨会参与者
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理
   - [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5名参与者的远程培训
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS和Atom订阅，访问控制和自定义CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理，20个客户/订阅和1用户免费，支付托管由Zoho完成。存储最后40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面和最多50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。与[Assist](https://zoho.com/assist)集成，支持1个远程技术人员和5个无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每频道100用户和SSO
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约安排
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队规模，提供优质服务且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨Web、移动和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量不限。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，支持Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量不限。
  * [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试。免费版支持3个环境，每个环境5个功能开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境和无限请求。SDK、分析仪表板、发布日历、Slack通知等所有功能均包含在永久免费计划中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等强大平台。其慷慨的免费计划提供无限席位、开关、实验和动态配置，支持每月100万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试。代码即配置和完全类型化的Typescript SDK。与Next.js和React等框架深度集成。提供丰厚的免费层级和低成本扩展选项。


**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费字体、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 经过人工精选的商业用途免费字体库，以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接Google CDN，可快速便捷地将众多免费字体嵌入网站
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰、种类丰富的可下载字体
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，所有字体均可100%免费用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和付费商业字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 使用CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含CJK（中文/日文/韩文）字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大的开发者友好型表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版含无限表单数量，每月20次提交，若展示Form-Data标识可额外获得2000次提交额度。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月支持250次表单提交。提供现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交终端。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单接收终端，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月500次提交额度，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月，含邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单数量，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易提交终端。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1个表单、50次提交、单文件上传、100MB文件存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。可通过界面转发提交内容至邮箱/Slack/Zapier。无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持无限表单和提交，含预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 秒级创建表单转邮件等功能，无需后端代码。个人账户每月50次免费提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单终端，完美适配静态网站。免费版支持1个网站和每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单和每月1,000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单和调研工具。含50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析工具。永久免费版支持500月活用户，无限回复和事件，多集成选项，数据导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版含每月50次提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义跳转/响应页、Telegram/Slack机器人、单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件/网站/产品内/移动端调研、AI问卷生成器和25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可轻松集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷和表单构建工具。免费版含5个表单，每表单最多3个步骤，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版每表单限10个字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版会对签署文档添加水印，但支持无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的联系表单解决方案，无需编写后端代码。免费版支持无限表单/域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研和表单构建工具。免费版含3个调研/账户，每月100次回复，每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。
* [formpost.app](https://formpost.app) - 永久免费的表单转邮件服务。可设置自定义跳转、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。不限表单数量和功能限制，免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF，每PDF 3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动计分和AI功能的在线表单。免费版可收集100次回复，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。使用Qualli AI生成完美问题。免费版支持500月活用户，不限表单和触发器数量。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放功能的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃调研，每调研25次回复，支持模板定制。

**[⬆️返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200+种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，提供可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索工具，可同时搜索所有应用。搜索助手可让您使用自己的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并可与任何可观测性客户端配合使用。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师与非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代其LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流中的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，可替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大型语言模型（LLM）在几分钟内提供定制商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，且分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，虽然这些模型可以免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具，用于代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的人声清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供 bootstrap、bootswatch 和 fontawesome.io 的 CDN 服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs 是由 Cloudflare 提供支持的免费开源 CDN 服务，全球超过 11% 的网站都在使用。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是最流行的开源 JavaScript 库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate 是一个超快、可靠的 GraphQL API CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管了 jQuery 等流行的第三方 JavaScript 库，方便您轻松添加到 Web 应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费 DDoS 防护和 SSL 证书
* [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN。每月每个域名免费支持 100 万次请求。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，使用 Cloudflare 托管文件
* [section.io](https://www.section.io/) — 一种简单的方式来启动和管理完整的 Varnish Cache 解决方案。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片提供 CDN 服务
* [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不宕机的 CD。个人使用免费，仅限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。在全球范围内缓存并即时处理图片。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费 DDoS 防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费 1 TB 流量和 100 万次请求，并提供免费 DNS 托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费 5 TB CDN 流量，19 个核心节点，1 个域名和通用 SSL。
* [PromoProxy](https://promoproxy.net/) - 免费云端安全 Web 网关。免费计划支持最多 5 个用户和每天 1 GB 流量。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 仅用Python开发Web应用。免费版支持无限应用和30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket）的认证服务。免费版每个项目含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析，非常适合内容密集型和企业电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求和每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 在自有AWS账户上通过Git推送式工作流部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例和限制为2连接/10,000行且无备份的PostgreSQL免费数据库。
* [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，为快速增长提供全面支持。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台，基于任意触发器开发工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费初级账户含1个your-username.pythonanywhere.com域名应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次、每日2,500次和每月5万次调用，自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 面向开发者的全球无服务器平台，通过Git部署Docker容器/Web应用/API，含自动扩缩容和全球边缘网络。免费实例可部署至德国法兰克福或美国华盛顿，免费托管PostgreSQL数据库位于德/美/新加坡，配置为512MB内存/2GB存储/0.1CPU。
* [Napkin](https://www.napkin.io/) - 函数即服务，提供500MB内存、15秒默认超时和每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务，为Meteor应用提供含免费MongoDB共享主机和自动SSL的平台即服务。
* [Northflank](https://northflank.com) — 通过强大UI/API/CLI构建部署微服务、任务和托管数据库。免费版含2个服务、2个定时任务和1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境中连接API和服务的全合一平台，兼具NoCode工具的敏捷性与编程语言的强大功能。[免费版含1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，内置CI/CD和GitHub集成。[免费计划](https://wundergraph.com/pricing)支持3个项目、1GB出口流量和300分钟构建时长/月。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务和每月5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务，免费版支持本地Kubernetes连接以创建类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数提供商，免费提供每月100万次调用、100GB带宽和10个定时任务（仅限非商业/学术用途）。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度达5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web Baas服务，含1GB免费文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — 提供文档与资源以构建企业级数字创新方案，包含个人沙箱环境、SDK及组件库。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1,000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式BaaS服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨的免费层。
* [Firebase](https://firebase.com) — 提供应用构建与运营支持。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等多项功能永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的聊天、消息、音视频及信息流功能，替代数周开发。
* [hasura.io](https://hasura.io/) — 为现有数据库提供即时GraphQL API，支持Web、移动及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划含PostgreSQL、GraphQL（Hasura）、认证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，联系人无限制且支持自动预热。
* [paraio.com](https://paraio.com) — 带灵活认证、全文搜索和缓存的API后端服务。单个应用免费，含1GB数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2,000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) — 2,000月活用户内免费无限推送通知，统一支持iOS和Android的API。
* [quickblox.com](https://quickblox.com/) — 即时通讯、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件等服务的服务器，并通过管道组合转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用拖拽工具快速构建应用，通过点击定制数据模型，支持Apex代码和API集成。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) — 实时跨平台数据传输，结构化数据无限收发存储，每月最多2,500用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供认证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) — 含认证、配额、监控和分析的API管理。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次触发/每月100次任务。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟更新，支持5个自动化流程和Webhook。
* [LeanCloud](https://leancloud.app/) — 移动后端。1GB数据存储、256MB实例、每日3,000次API请求和10,000次推送免费。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月$5免费额度，适合托管应用和数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持15+种数据库和任意API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，提供可定制的移动端和Web应用。具有拖拽式界面、离线支持、实时位置追踪及第三方服务集成功能
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理10倍速构建内部工具、自定义用户旅程、数字体验、自动化流程、管理面板和运营应用的低代码平台
* [lil'bots](https://www.lilbots.io/) - 在线编写并运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费版包含完整API访问权限、AI编程助手及每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境（支持总用户数），每个应用0.5GB存储和1GB内存。免费版也包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 支持本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 高度可定制的低代码内部应用构建平台。能用JavaScript和API实现的功能均可通过ReTool完成。免费版支持每月5名用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑及代码扩展功能，集中管理集成、认证、权限和审计日志
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码业务应用框架。连接数据库、云存储、GraphQL、API端点、Airtable等数据源后，通过拖拽式构建器快速开发应用
* [UI Bakery](https://uibakery.io) — 加速定制化Web应用开发的低代码平台。通过拖拽式UI构建器结合JavaScript、Python和SQL实现深度定制。提供云服务和自托管方案，免费版最多支持5名用户
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。免费版支持1名用户每月100万次工作流活动（[德语版本](https://www.manubes.de)同样可用）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费网络托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，可通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，PHP、MySQL、应用安装器、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，最小化基础设施烦恼并加速设置。
  * [Bubble](https://bubble.io/) — 无需代码的可视化编程构建Web和移动应用，免费但带有Bubble品牌标识。
  * [dAppling Network](https://www.dappling.network/) - 专注于Web3前端的去中心化网络托管平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform Starter层级免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到网络。仅限静态站点。永久免费。每个Google/Microsoft账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一款开发者桌面应用，用于本地托管站点并实时公开分享。通过其美观的用户界面、API和/或CLI按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持及许多其他免费主机未提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳控制面板和50多个免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费网络托管，提供Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP电子邮件，无限带宽，免费子域名，1000 MB存储空间，并可升级。
  * [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，自定义域名带SSL，100 GB月流量，260+ Cloudflare CDN节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 支持SFTP文件上传下载的网络托管，提供PHP支持。
  * [Neocities](https://neocities.org) — 静态托管，1 GB免费存储空间和200 GB带宽。
  * [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，免费提供100 GB数据和100 GB/月带宽。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种形式的网络托管（静态托管、基于容器的托管、WordPress等托管应用一键安装）。一个免费网络托管（静态或容器化）和一个免费数据库，100 GB带宽和300构建分钟/月。
  * [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费。无自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
  * [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，免费SSL、全球CDN、私有网络、Git自动部署，Web服务、数据库和静态网页完全免费。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 前端开发者的静态网页发布工具。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50页，50 MB存储空间，仅限170+预定义主块，无自定义字体、无favicon、无自定义域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，免费SSL、全球CDN，每次`git push`生成唯一预览URL。完美支持Next.js和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器 - 无限网站，70+块，五个模板，自定义CSS、favicon、SEO和表单。无自定义域名。
  * [Qoddi](https://qoddi.com) - 类似Heroku的PaaS服务，开发者中心化设计，全功能支持。免费层级支持静态资源、暂存环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) - 社区驱动的免费Flarum托管，支持最多250用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) - 一个项目免费托管，两周容器TTL，每个项目500 MB RAM，SFTP - 1G磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 易用的云平台，付费服务中提供三个静态站点免费托管。
  * [Serv00.com](https://serv00.com/) — 3 GB免费网络托管，每日备份（7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
  - [Sevalla](https://sevalla.com/) - 简化应用、数据库和静态网站部署与管理的托管平台 - 1GB站点限制，100GB免费带宽，600免费构建分钟，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare 提供的免费公共 DNS 解析服务，快速安全（加密 DNS 查询）。可用于绕过网络运营商的 DNS 封锁、防止 DNS 查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过 API 调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为 DNS 解析器，非 DNS 托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供 API 支持的免费 DNS 服务，包含多项高级功能。
  * [cloudns.net](https://www.cloudns.net/) — 免费托管 1 个域名（50 条记录上限）
  * [deSEC](https://desec.io) - 注重安全的免费 DNS 托管服务，支持 API，基于开源软件并由[SSE](https://www.securesystems.de/)提供支持。
  * [dns.he.net](https://dns.he.net/) — 支持动态 DNS 的免费托管服务
  * [Zonomi](https://zonomi.com/) — 即时生效的免费 DNS 托管，免费版支持 1 个域名（10 条记录上限）
  * [dnspod.com](https://www.dnspod.com/) — 免费 DNS 托管
  * [duckdns.org](https://www.duckdns.org/) — 免费动态 DNS 服务（最多 5 个域名），提供多平台配置指南
  * [Dynv6.com](https://dynv6.com/) — 免费动态 DNS 服务，支持[API 管理](https://dynv6.com/docs/apis)及多种记录类型（CNAME、MX、SPF、SRV、TXT 等）
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费 DNS 托管，同时提供基于用户[共享域名](https://freedns.afraid.org/domain/registry/)的免费子域名（注册后通过"Subdomains"菜单获取）
  * [luadns.com](https://www.luadns.com/) — 免费托管 3 个域名，功能全面且限制合理
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) — 无限域名数量的免费 DNS 服务
  * [nextdns.io](https://nextdns.io) - 基于 DNS 的防火墙，每月 30 万次免费查询
  * [noip.at](https://noip.at/) — 免注册/无追踪/零广告的动态 DNS 服务，域名数量无限制
  * [noip](https://www.noip.com/) — 动态 DNS 服务，免费版支持 3 个主机名（需每 30 天确认）
  * [sslip.io](https://sslip.io/) — 特殊 DNS 服务：当查询包含 IP 地址的主机名时，直接返回该 IP
  * [zilore.com](https://zilore.com/en/dns) — 免费托管 5 个域名
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态 DNS 的免费托管服务
  * [zonewatcher.com](https://zonewatcher.com) — 自动备份与 DNS 变更监控，免费版支持 1 个域名
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 华为云免费 DNS 托管
  * [Hetzner](https://www.hetzner.com/dns-console) – Hetzner 提供的免费 DNS 托管（支持 API）
  * [Glauca](https://docs.glauca.digital/hexdns/) – 免费托管 3 个域名，支持 DNSSEC
  * [VolaryDDNS](https://volaryddns.net) - 高性能免费动态 DNS，无订阅/无广告
  * [LocalCert](https://localcert.net) - 免费 `.localcert.net` 子域名服务，兼容公共 CA 证书，适用于私有网络

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名服务
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名服务

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容 AWS S3 API、界面操作、CLI 等多种上传方式，可安全便捷高效地将文件上传并存储至 IPFS 和 Arweave 网络。注册用户可免费获得 6 GB IPFS 存储空间和 300MB Arweave 存储空间。任何小于 150 KB 的 Arweave 文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2 云存储。无限期免费提供 10 GB（类 Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 由区块链驱动的 S3 兼容对象存储。永久免费提供 5 GB 存储空间。
  * [Tebi](https://tebi.io/) - S3 兼容对象存储。免费 25 GB 存储空间和 250GB 出站流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3 兼容对象存储。每月免费 10 GB 存储空间和 10 GB 下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容对象存储。每月免费 15 GB 存储空间和 15 GB 下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点，1 CPU，1GB 内存，PostgreSQL 和 MySQL 提供 1GB 存储空间。可轻松迁移至更高级方案或跨云部署。
  * [airtable.com](https://airtable.com/) — 看似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行和每月 1,000 次 API 请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 服务，提供 [80GB 免费套餐](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，支持函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用。包含 2 名开发者席位，无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，专为实时分析设计。[免费套餐 CRFREE](https://crate.io/lp-crfree)：单节点含 2 CPU、2 GiB 内存、8 GiB 存储。每个组织可创建一个集群，无需支付方式。
  * [Upstash](https://upstash.com/) — 无服务器 Redis，免费套餐每日 10,000 次请求，最大数据库容量 256MB，支持 20 个并发连接
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者打造，支持从物联网到人工智能的新一代应用开发
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费套餐提供 512 MB 存储
  * [redsmin.com](https://www.redsmin.com/) — Redis 在线实时监控与管理服务，免费监控 1 个 Redis 实例
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费套餐含 25MB 内存、1 个代理服务器和基础分析功能
  * [scalingo.com](https://scalingo.com/) — 主要提供 PaaS，但包含 128MB 至 192MB 的 MySQL、PostgreSQL 或 MongoDB 免费套餐
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活电子表格式数据库。无限表格、2,000 行数据、1 个月版本历史，最多支持 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费套餐，测试期间所有方案完全免费
  * [StackBy](https://stackby.com/) — 结合电子表格灵活性、数据库强大功能及与常用商业应用内置集成的工具。免费方案包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源 MySQL 兼容的分布式 HTAP 关系型数据库。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5,000 万请求单位 (RUs)。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验。Turso 提供永久免费入门方案，含 9 GB 总存储、最多 500 个数据库、最多 3 个位置、每月 10 亿行读取及 SQLite 本地开发支持。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费套餐支持每 5 分钟 3MB 写入、每 5 分钟 30MB 读取和 10,000 基数序列
  * [restdb.io](https://restdb.io/) - 快速简单的 NoSQL 云数据库服务。提供模式、关系、自动 REST API（支持类 MongoDB 查询）及高效的多用户管理界面。免费方案支持 3 名用户、2,500 条记录和每秒 1 次 API 请求。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费套餐每月提供 5,000 万 RUs 和 10 GiB 存储（价值 15$）。([什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html))
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图大小（5 万节点，17.5 万关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 总存储，1 个项目，10 个分支，无限数据库，始终可用的主分支（非活跃 5 分钟后自动暂停），非主分支计算每月 20 小时活跃时间。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于单内核构建并在裸机上运行的超快托管 Postgres，1GB 存储，10 个数据库，集成 Prisma ORM。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供 GraphQL API。限制每日 1 MB 数据传输。
  * [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持 HTTP 无连接数据摄取，可将 SQL 查询发布为托管 HTTP API。免费套餐无时间限制，10GB 存储 + 每日 1,000 次 API 请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类 SQL 图查询语言和 REST API。免费实例含 2 vCPU、8GB 内存和 50GB 存储，闲置 1 小时后休眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，TerminusDB 是用 Prolog 和 Rust 编写的文档和图数据库。开发者免费，企业部署和支持需付费。
  * [filess.io](https://filess.io) - filess.io 是一个平台，可免费创建两个数据库，每个数据库最多 10 MB，支持的 DBMS 包括：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [xata.io](https://xata.io) - Xata 是一个内置强大搜索和分析功能的无服务器数据库。提供单一 API、多种类型安全客户端库，并针对开发工作流优化。永久免费套餐适合业余开发者，包含三个 Xata 单位，具体定义请参阅网站。
  * [8base.com](https://www.8base.com/) - 8base 是一个面向 JavaScript 开发者的全栈低代码开发平台，基于 MySQL 和 GraphQL 构建，提供无服务器后端即服务。允许使用 UI 应用构建器快速开发 Web 应用并轻松扩展，免费套餐包含：2,500 行、500MB 存储、1Gb/h 无服务器计算和 5 个客户端应用用户。
  * [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库，始终可用不关闭，总存储 1GB，5,000 万查询令牌，自动扩展，无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版隧道时长为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费版支持最多5人加入的无限局域网扩展。
  * [Mirna Sockets](https://mirna.cloud/) — 免费WebSocket即服务平台，部署代码即可获得wss:// URL并提供性能监控。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道暴露本地服务，提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 将本地服务通过隧道暴露为公共URL。
  * [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 无需安装注册即可将本地服务暴露到互联网，提供免费子域名且无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建虚拟局域网，支持无限节点（Hamachi替代方案）。
  * [segment.com](https://segment.com/) — 事件路由中转中心，免费版每月10万次事件转发。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) — 基于WireGuard协议的零配置VPN，支持多平台设备，个人免费版支持100个设备和3个用户。
  * [webhookrelay.com](https://webhookrelay.com) — 管理、调试和代理所有Webhook请求，支持通过隧道将内网服务暴露为HTTP端点。
  * [Hookdeck](https://hookdeck.com/pricing) — 全功能Webhook开发测试平台，免费版每月10万次请求/尝试，数据保留3天。
  * [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN流量（限速单地区）。
  * [ZeroTier](https://www.zerotier.com) — 开源虚拟以太网服务，免费版支持25个客户端组成的端到端加密网络。
  * [LocalXpose](https://localxpose.io) — 反向代理工具，免费版隧道时长为15分钟。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地服务并设置访问控制，免费版支持1个集群内5个服务。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点，免费版包含欧盟服务器、随机子域名和单用户支持。
  * [btunnel](https://www.btunnel.in/) — 将本地服务和TCP服务器暴露到公网，免费版包含文件服务器、自定义HTTP头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 私人项目协作免费版
* [Backlog](https://backlog.com) — 一站式项目发布平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具。免费版提供5GB空间（用户不限）
* [cacoo.com](https://cacoo.com/) — 实时在线图表工具（流程图/UML/网络图）。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 团队版敏捷估算工具。免费支持5名用户，集成Jira，不限视频会议/团队/会话
* [clickup.com](https://clickup.com/) — 项目管理平台。免费版含云存储，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪应用。永久免费，用户不限
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，组件支持实时数据展示。免费版允许单人创建无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台。免费版支持5人团队，不限仓库/项目/文档，每月500分钟CI/CD时长和30000分钟无服务器代码运行时长
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持3个项目（用户不限），1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间跟踪/日历/文件/密码管理。免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具。免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 复杂项目管理与问题跟踪套件。SaaS免费版支持5名用户，开源项目免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具。通过关键词生成非正式UML类图/对象图/ER图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比GraphQL模式变更，标记破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — GitHub issues项目管理工具，开源免费
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板，100MB存储
* [Instabug](https://instabug.com) — 移动应用Bug反馈SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多维度基础设施交互图表工具。免费版支持无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理。免费版支持2个看板和2名用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具。免费版支持1名用户（不限看板/列表/卡片）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台。免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试跟踪工具（含Chrome插件）。完全免费
* [Kumu.io](https://kumu.io/) — 动态关系图谱工具。免费版支持无限公开项目，学生可创建私有项目
* [Linear](https://linear.app/) — 极简问题跟踪工具。免费版不限成员，支持10MB文件上传和250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS。免费版支持10名用户/20个字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具。免费版支持3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目（成员不限）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum看板工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。免费版支持5名用户/团队和100MB存储
* [Ora](https://ora.pm/) - 敏捷任务协作平台。免费版支持3名用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费支持无限公开项目和2个私有项目（3名活跃用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台。免费版支持2名用户和500MB存储
* [Plane](https://plane.so/) - 开源项目管理工具。免费版不限成员，支持5MB文件上传和1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版包含无限制任务、迭代和工作区（无用户数限制）
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，支持从看板到Scrum等多种流程，免费版不限用户数（最多1,000个数据实体）{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作式任务清单与团队大纲工具，免费版包含1个工作区（任务和项目无限制）、1GB文件存储、1周项目历史记录、视频会议最多5人参与
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会议和迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供高级付费方案
* [teleretro.com](https://www.teleretro.com/) — 趣味性回顾会议工具（含破冰游戏/GIF表情支持），免费版包含3次回顾会议（成员数不限）
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理与Beta测试平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作式与个人任务管理工具，免费版功能：5个活跃项目/每项目5名用户/5MB文件上传/3个筛选器/1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版包含无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台（含项目管理、版本控制与问题跟踪），免费版提供无限项目与协作者+3GB存储
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具，最多3名用户免费（项目数不限）
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目与私有项目（3名用户免费），含时间跟踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — 唯一内置于GitHub的项目管理方案，公共仓库/开源组织/非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，免费版最多5名成员+5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告等功能，专为自由职业者设计）；[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具（特别适合外包与跨组织协作项目），免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简免费时间追踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也支持其他类型文件。
  * [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间
  * [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
  * [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图像优化和尺寸调整。免费套餐包含500MB存储和2GB带宽
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化与CDN服务，提供多种尺寸调整、压缩和水印功能。开源插件支持响应式图片、360度图像制作和编辑。免费套餐含25GB CDN流量、25GB缓存存储和无限转换次数
  * [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等库的图像上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）
  * [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据
  * [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）
  * [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件/500次转换/3GB带宽
  * [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟
  * [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档/图片/音频/视频等格式转换与编辑
  * [GoFile.io](https://gofile.io/) - 支持网页界面和API的免费文件共享存储平台，无文件大小/带宽/下载次数限制（文件10天无下载自动删除）
  * [gumlet.com](https://www.gumlet.com/) — 图像视频托管与CDN处理流服务。免费套餐含250GB/月视频流量和30GB/月图片流量
  * [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图像图表生成
  * [Imgbot](https://github.com/marketplace/imgbot) — 开源项目免费的友好机器人，可优化图像质量并减小文件体积
  * [ImgBB](https://imgbb.com/) — 无限容量的图像托管服务。支持拖拽上传（单图32MB限制），获取直链/BBCode/HTML缩略图，登录后可查看上传历史
  * [imgen](https://www.jitbit.com/imgen/) - 无水印的无限次社交媒体封面图生成API
  * [imgix](https://www.imgix.com/) - 图像缓存管理与CDN服务。免费套餐含1000个源图像/无限转换/100GB带宽
  * [kraken.io](https://kraken.io/) — 网站性能优化的图像处理服务，免费版支持1MB以下文件
  * [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费套餐支持100个键（1KB/键）/100次调用/小时
  * [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务
  * [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图像代码优化/CDN）。免费支持5000页面浏览/月
  * [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理工具。基础版支持无限传输（单文件250MB上限）和5个加密文件
  * [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI托管仓库服务。提供有限免费套餐，开源项目可申请特殊计划
  * [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目/黑客松/移动应用的简易JSON存储API
  * [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储
  * [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的服务
  * [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版含无限公开文件和10个私有文件
  * [podio.com](https://podio.com/) — 支持5人以下团队试用基础版功能（不含用户管理）
  * [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的快速批量二维码生成器，单次最多支持100个URL
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表/图形和二维码
  * [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户
  * [resmush.it](https://resmush.it) — 免费图像优化API，已集成至WordPress/Drupal/Magento等主流CMS，累计处理超70亿张图片
  * [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费每月可渲染20分钟视频
  * [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩API，每月免费500次压缩
  * [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图像/文档编码服务。开源项目/慈善机构/学生通过GitHub学生包免费，商业应用可试用2GB
  * [twicpics.com](https://www.twicpics.com) - 响应式图像服务，提供图像CDN/处理API和前端优化库。免费套餐含3GB流量/月
  * [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理全流程工具包。开发者可免费使用文件上传API/UI、图像CDN/源服务、自适应交付和智能压缩。免费套餐含3000次上传/3GB流量/3GB存储
  * [imagekit.io](https://imagekit.io) – 分钟级集成的图像CDN服务，支持自动优化和实时转换。免费套餐含20GB/月带宽
  * [internxt.com](https://internxt.com) – 基于绝对隐私的零知识文件存储服务。注册即享永久10GB免费空间
  * [degoo.com](https://degoo.com/) – AI云存储服务，免费20GB空间/3台设备，推荐奖励5GB（账户90天不活跃失效）

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款易于使用的全球图片 CDN。设置时间不到 60 秒，支持 AVIF 和 JPEGXL，提供 WordPress、Magento、React、Vue 等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于 GPT 的 AI 处理工具，可将 PDF、图片转换为 JSON、CSV、EXCEL 格式的结构化数据。每月免费赠送 30 积分。
  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...
  * [LibreQR](https://libreqr.com) — 注重隐私且无追踪的免费二维码生成器。完全免费使用，不收集任何数据。
  * [Doradrop](https://doradrop.com) — Doradrop 是一个无广告且提供无限存储的文件共享平台。无需登录即可通过安全链接即时分享文件。


**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源SVG图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能文件转换工具，包含视频和GIF
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线调色板生成与灵感获取工具
* [coolors](https://coolors.co/) - 免费配色方案生成器
* [CMYK转潘通](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号
* [Branition](https://branition.com/colors) - 专业品牌配色方案精选
* [css-gradient.com](https://www.css-gradient.com/) - 免费跨浏览器CSS渐变生成工具，支持RGB/HEX格式
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版权商用图库
* [Gradientos](https://www.gradientos.app) - 快速易用的渐变选择工具
* [Icon Horse](https://icon.horse) - 通过简单API获取网站高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库，支持React/Flutter/Vue等框架
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐等设计资源，免费版有分辨率限制
* [landen.co](https://www.landen.co) - 无代码建站工具，免费版可发布1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具
* [LottieFiles](https://lottiefiles.com/) - 全球最大Lottie动画平台，提供各平台开发工具
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量免费思维导图工具
* [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作工具，免费版支持3用户5项目
* [mockupmark.com](https://mockupmark.com/create/free) - 40款免费服装模型生成工具
* [Modeldraw.com](https://modeldraw.com) - 支持UML/流程图/思维导图的完整绘图平台，支持实时协作
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器，含波浪/斑点/图案等工具
* [movingpencils.com](https://movingpencils.com) - 浏览器端免费矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具，支持SVG
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供搜索API
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具
* [Pravatar](https://pravatar.cc/) - 随机头像生成服务，支持直接外链
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器端直接转换，保障隐私安全
* [Proto.io](https://www.proto.io) - 无代码交互原型工具，免费版含1用户1项目5原型
* [resizeappicon.com](https://resizeappicon.com/) - 应用图标尺寸调整工具
* [Rive](https://rive.app) - 免费动画创作平台，提供多平台运行时支持
* [storyset.com](https://storyset.com/) - 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成工具，提供200个免费模板

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题，支持实时自定义颜色、排版等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，URL可直接热链到网页/应用中，支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，完全免费且无需署名
* [unsplash.com](https://unsplash.com/) - 商用/非商用免费图库（无限制许可）
* [vectr.com](https://vectr.com/) — 网页/桌面版免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画效果的所见即所得建站工具，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的所见即所得建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，展示设计稿/资源/样式指南，单个项目免费
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费开发工具，加速响应式网页应用开发
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，含持续扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持Angular/React/Vue等框架，开源项目）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式SEO建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，无水印，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页构建器，免费建1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌LOGO库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 海量商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击快速生成独特背景/图案/形状的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，免费支持3个项目
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG等矢量格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，含开发者专用转换器
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/SVG等格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌LOGO的API服务，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的Bootstrap/Angular/React/Vue UI套件
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库，减少类名书写
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条设计工具
* [css.glass](https://css.glass/) -- 玻璃拟态CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色库及生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标集统一搜索平台
* [NextUI](https://nextui.org/) -- 免费现代化React & Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美组件库
* [HyperUI](https://www.hyperui.dev/) -- 开源Tailwind CSS组件
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日历图标
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion等工具生成图片背景模糊框
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案
* [Nappy](https://nappy.co/) -- 黑人群体专属免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind资源合集及代码生成器
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的免费图形设计工具
* [Flows](https://flows.sh/) -- 产品引导互动平台，250月活用户内免费

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台。可按 UI/UX 项目分类筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常来自非实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI 套件 / 网页截图] Lapa Ninja 是一个展示 6025 个最佳着陆页示例的画廊，还提供设计师免费书籍和来自全球的免费 UI 套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动端截图。
  * [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们包含 50,000+ 可完全搜索的移动应用截图库，节省 UI 和 UX 研究时间。
  * [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲和全球领先公司的移动和网页 UI 设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最优秀的 UI UX 模式（iOS 和 Android），供设计师、开发人员和产品制造者参考。
  * [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用 UI 设计趋势。可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的应用商店设计截图集合。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，支持标签和搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求
* [carto.com](https://carto.com/) — 基于您的数据和公开数据创建地图及地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月5万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能。每月包含：200万次免费底图瓦片加载、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容推送
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等时线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线地理数据可视化、分析与共享平台
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含：路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与地图可视化SDK。免费矢量瓦片每周更新，提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向指引、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 具备语言校正功能的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 面向多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境，支持300+个PHP版本运行代码片段
  * [Android Studio](https://developer.android.com/studio) — 官方Android开发IDE，提供最快速的跨平台应用构建工具（支持Windows/Mac/Linux/ChromeOS），开源免费
  * [AndroidIDE](https://m.androidide.com/) — 开源Android设备IDE，支持基于Gradle的真实应用开发
  * [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境、工具平台及应用框架
  * [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户）
  * [BBEdit](https://www.barebones.com/) - macOS平台专业编辑器，免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)并支持高级功能升级
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的免费公共服务
  * [BlueJ](https://bluej.org) — 面向初学者的Java开发环境，由Oracle支持并提供简易GUI界面
  * [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
  * [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器
  * [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理工具
  * [Code::Blocks](https://codeblocks.org) — 免费开源的C/C++/Fortran跨平台IDE
  * [Cody](https://sourcegraph.com/cody) - 智能编程助手，支持代码补全/理解/修复/搜索，兼容VS Code和JetBrains系列IDE
  * [codiga.io](https://codiga.io/) — IDE内直接搜索/定义/复用代码片段的工具，个人和小团队免费
  * [codesnip.com.br](https://codesnip.com.br) — 带分类/搜索/标签功能的简易代码片段管理器
  * [cocalc.com](https://cocalc.com/) — 云端协作计算平台，预装Python/LaTeX/Jupyter等科学计算工具
  * [code.cs50.io](https://code.cs50.io/) - 哈佛CS50课程定制的云端VS Code环境
  * [codepen.io](https://codepen.io/) — 前端开发者的代码游乐场
  * [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular等框架的在线开发环境
  * [Components.studio](https://webcomponents.dev/) - 组件化开发工具，支持独立开发/可视化测试/npm发布
  * [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言云端IDE，Red Hat提供[在线实例](https://workspaces.openshift.com/)
  * [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据
  * [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4等模型的AI编程助手，免费版包含基础模型访问
  * [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux环境，免费版每日5次VM使用
  * [GitPod](https://www.gitpod.io) — GitHub项目即时开发环境，免费50小时/月
  * [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持多语言/终端协作/Git集成（免费版1GB内存/10GB存储）
  * [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费版API每日200次调用
  * [jetbrains.com](https://jetbrains.com/products.html) — 学生/教师/开源团队可免费使用IntelliJ/PyCharm等专业IDE
  * [jsbin.com](https://jsbin.com) — 前端开发游乐场，支持HTML/CSS/JS及Markdown等预处理语言
  * [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API服务
  * [Lazarus](https://www.lazarus-ide.org/) — 跨平台Delphi兼容RAD开发工具
  * [MarsCode](https://www.marscode.com/) - 基于AI的云端IDE
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级JSON模拟API微服务
  * [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务
  * [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL等格式的测试数据
  * [Mocklets](https://mocklets.com) - HTTP接口模拟器，提供永久免费版
  * [Paiza](https://paiza.cloud/en/) — 免配置的浏览器开发环境，免费版提供24小时有效期的服务器
  * [Prepros](https://prepros.io/) - 支持Sass/Less/TypeScript等语言的实时编译工具
  * [Replit](https://replit.com/) — 多语言云端编程环境
  * [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程平台，提供免费编程课程
  * [stackblitz.com](https://stackblitz.com/) — 全栈应用云端IDE，支持主流NodeJS框架，快捷入口：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用优化的代码编辑器，由Microsoft开发
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能IDE，含数千扩展，支持跨平台应用开发（提供iOS和Android的Microsoft扩展下载）、桌面/Web/云开发，多语言支持（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的Microsoft编辑器VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动的自我指标工具，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持无缝工作流。内联渲染任意内容，可保存会话与历史记录，基于开放Web标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58个模板支持Web组件的独立开发，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效数据库IDE，含服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器（包括Java、Python、C++、JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 具备热图分析、会话录制和收入追踪功能的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 追踪GitHub仓库14天以上流量历史的精美仪表盘。免费版支持监控单个仓库流量
* [Dwh.dev](https://dwh.dev) - Snowflake数据云可观测性解决方案。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库中的客户数据同步至CRM/营销/客服工具。免费版支持1个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布流程。包含统一跟踪方案、类型安全分析库、应用内调试器和数据可观测性。免费版支持2名工作区成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费版支持1万移动应用用户，含深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台。免费版支持从数据仓库同步10个字段至60+SaaS应用
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持单个网站3000次浏览分析
* [Databox](https://databox.com) - 整合多平台数据的商业洞察工具。免费版支持3用户/仪表盘/数据源，1100万历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件量，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台，提供托管服务(非商业用途免费)或自托管选项。免费版支持无限网站/6个月数据留存/每月10万页面浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型GA替代方案。免费版每月100万页面浏览且无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告工具，免费提供个人报销审批流程
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，每月3000次事件内免费
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为。免费版支持每月1万次会话
* [Hotjar](https://hotjar.com) - 网站分析与报告工具。免费版每日2000页面浏览/100张快照(上限300)/存储3张热图365天/不限团队成员数
* [Keen](https://keen.io/) - 自定义数据分析平台。免费版每月1000次事件
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务，完全免费且无用户/请求限制
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，不限数据历史记录和席位，支持美欧数据存储
* [Moesif](https://www.moesif.com) - REST和GraphQL接口分析工具。免费版每月50万次API调用
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费版支持1网站+1iOS+1Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具。免费版有限制功能+100万用户许可
* [Row Zero](https://rowzero.io) - 极速联机电子表格。免费版永久保留3个工作簿
* [sematext.com](https://sematext.com/cloud/) - 每月5万次操作内免费，含1天数据留存/无限仪表盘等
* [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版每指标5个结果+1个月移动数据+3个月网站数据
* [StatCounter](https://statcounter.com/) - 网站访问分析。免费版可查看最近500位访客
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试的全能平台。每月100万计量事件内免费
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau在线开发沙盒许可，含最新预发布版本所有功能
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试工具。免费版支持1用户/无限测试
* [woopra.com](https://www.woopra.com/) - 用户分析平台。免费版50万次操作/90天数据留存/30+一键集成
* [counter.dev](https://counter.dev) - 简洁隐私友好的网站分析工具，支持免费或捐赠模式
* [PostHog](https://posthog.com) - 完整产品分析套件。免费版每月100万追踪事件+250次应用内调查回复
* [Uptrace](https://uptrace.dev) - 分布式追踪工具。开源项目可申请个人订阅版
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为记录工具
* [Beampipe.io](https://beampipe.io) - 简洁隐私导向的网站分析。免费版支持5域名+1万月浏览量
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析工具。免费版每月2万次事件
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析问题，无需代码实现回归测试覆盖
* [LogSpot](https://logspot.io) - 统一网站与产品分析平台。免费版每月1万次事件
* [Umami](https://umami.is/) - 简洁快速、注重隐私的开源GA替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私友好分析工具。免费版支持3域名+每域名600次会话回放
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具。免费版含1万次月事件量+产品日志+每周洞察

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站与产品分析工具。免费版每月包含3,000次事件追踪
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie追踪且操作直观性提升10倍。免费版支持3,000次月度事件统计

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，含开发者工具用于错误复现、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
  * [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
  * [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗，1个月数据历史
  * [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询 JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证 JSON API。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入1万美元以内免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月收入1万美元以内免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，用于移动应用内订阅集成，支持iOS、Android、React Native、Flutter、Unity或网页应用。每月收入1万美元以内免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法币汇率。免费层级每月提供10,000次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。免费DEVELOPER计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新加密货币汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次调用。
* [CurrencyApi](https://currencyapi.net/) — 提供实物货币和加密货币的实时汇率，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为您的业务提供可靠的汇率和货币转换服务，每月100次API请求免费。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费层级每日更新一次，每月限制1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家预防支付欺诈和拒付。免费Micro计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费层级需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费从API中创收。可连接Stripe、Chargebee等。免费层级每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - 完整的应用内购买和订阅平台，支持iOS和Android，包括无代码付费墙、CRM和分析工具。基础功能免费，可运行IAP业务。
* [RevenueCat](https://www.revenuecat.com/) — 托管的应用内购买和订阅后端（iOS和Android）。每月追踪收入2,500美元以内免费。
* [vatlayer](https://vatlayer.com/) — 即时VAT号码验证和欧盟VAT税率API，每月100次API请求免费。
* [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据API。私人使用每月300次请求，每分钟10次请求。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费层提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。Vagrant box 托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的零障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站受众中建立活跃社区
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可将 GitHub issues 用于博客评论、维基页面等场景
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万个网站使用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，支持"单个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于 AWS Lambda 和 Chrome 的截图 API。支持整页截图、捕获时间及视口尺寸控制。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括标准化元标签、精美链接预览、爬取功能或截图服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月免费100张截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300张免费截图。从任意URL快速获取截图，免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度自定义的网站快照服务。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（png/gif/jpg格式），支持整页截取而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图与域名情报API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管的移动应用持续集成/持续交付平台。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可直接在浏览器中运行Linux和Windows 2000。
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统。
* [v86](https://copy.sh/v86) — 基于x86架构的虚拟机，支持在浏览器中直接运行Linux及其他操作系统。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅支持SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版包含单次扫描和单个横幅功能。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量限制下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，涵盖同意管理、隐私请求处理（DSAR）及数据映射。免费版包含核心同意管理功能，并为验证过的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的截图，便于在社交媒体分享
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如用于Twitter/Facebook帖子）或链接（如用于聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估IoT设备。免费开发者计划支持5台设备，含免费云存储和数据存储。提供移动端应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的笔记应用（PWA）
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美快照以便社交媒体分享
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转为截图分享
* [Cronhooks](https://cronhooks.io/) - 定时或周期性Webhook调度服务。免费版允许5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费
* [datelist.io](https://datelist.io) - 在线预约系统。免费版每月5个预约，含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具。免费版支持5个域名和20万次月请求
* [Elementor](https://elementor.com) — WordPress网站构建器，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除/分析图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端管理方案（许可证合规与漏洞）
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加Webhook支持（含队列/退避重试/日志）。免费版每日100次投递，14天留存，3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的主机信息（ASN/ISP/地理位置等），含多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库复用加速应用开发
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab/PyPI/Maven/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看照片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。免费版每月300份
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言模型/序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥/密码的移动友好工具
* [ray.so](https://ray.so/) - 创建精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的美观文档工具
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理。免费版含10个源和10万次月访问
* [Renamer.ai](https://renamer.ai) — AI文件重命名工具（支持OCR/元数据提取/20+语言）。免费版每月15个文件
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具（GET/POST/PUT/DELETE/HEAD），支持Headers和Token验证
* [Smartcar API](https://smartcar.com) - 车辆API（定位/油量/电量/里程/门锁控制等）
* [snappify](https://snappify.com) - 开发者视觉创作工具（代码片段/技术演示）。免费版同时3个作品，含5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed分析与导出服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具。免费版每份问卷限10个问题和100个回复
* [Tiledesk](https://tiledesk.com) - 创建全渠道聊天机器人（网站/WhatsApp）。免费版不限机器人数量
* [UUID生成器](https://newuuid.com/) - 即时生成UUID/GUID/CUID/NanoID/ULID等企业级标识符
* [Versionfeeds](https://versionfeeds.com) — 定制软件更新RSS订阅（免费版支持3个订阅源）
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑
* [Webacus](https://webacus.dev) — 开发者工具集（编码/解码/数据处理）

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 2台设备免费使用，会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
  * [AnyDesk](https://anydesk.com) — 3台设备免费使用，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包。
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享来自全球游戏艺术家的免费游戏资源。
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材。
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画。
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
* [Game Icons](https://game-icons.net/) - 免费可定制的SVG/PNG图标，基于CC-BY许可协议提供。
* [LoSpec](https://lospec.com/) — 在线像素艺术及其他限制性数字艺术创作工具，提供大量教程和调色板列表供游戏开发选用。
* [ArtStation](https://www.artstation.com/) - 免费/付费的2D、3D资源及音频、图标、瓦片集、游戏套件市场，也可用于展示个人艺术作品集。
* [Rive](https://rive.app/community/) - 社区资源库，同时支持通过免费计划自主创建游戏素材。
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型及PBR材质纹理资源。
* [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资源。
* [Poliigon](https://www.poliigon.com/) - 免费及付费纹理（支持多分辨率）、模型、HDRIs和笔刷资源，提供Blender等软件的免费导出插件。
* [Freesound](https://freesound.org/) - 采用不同CC许可协议的免费协作音效库。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单
* [GitHub — 开发者开源资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心
* [GitHub 教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境和工具，用于构建Microsoft 365平台解决方案（含可续期的90天[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)，Windows除外）
* [Pyrexp正则测试器](https://pythonium.net/regex) — 免费网页版正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），另提供免费电子书
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云平台（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，提供每日1资源的免费备份计划
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板/HTML主题/UI套件，加速应用开发
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [开发者小工具](https://smalldev.tools/) — 支持编解码/代码压缩美化/测试数据生成等功能的免费工具集
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，免费版支持100MB文件大小
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮
* [WrapPixel模板](https://www.wrappixel.com/) — 免费/高级Angular/React/VueJs/NextJS/NuxtJS管理后台模板
* [Utils.fun工具集](https://utils.fun/en) — 基于浏览器运算的本地化工具（水印生成/录屏/编解码/加密/代码格式化等），完全免费不上传数据
* [IT工具集](it-tools.tech) - 开发者与IT从业者实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的Markdown编辑器/代码压缩美化/二维码生成/OpenGraph生成器等
* [正则101](https://regex101.com/) — 免费正则表达式测试调试平台，含学习文档
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart模板](https://adminmart.com/) — 高质量免费/付费Angular/Bootstrap/React/VueJs管理后台模板
* [Glob模式测试器](https://globster.xyz/) — 可视化Glob模式设计与测试平台
* [SimpleRestore](https://simplerestore.io) - 无需代码即可将MySQL备份恢复到任意远程数据库
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（含实时语音/YouTube字幕生成）
* [最佳二维码生成](https://qrcode.best/) - 13种模板的隐私保护二维码生成器，支持追踪像素和团队协作
* [PostPulseAI](https://PostPulseAI.com) - 免费版每月可手动发布1篇AI生成的SEO优化文章
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集（生成网站政策/社交媒体内容等）
* [MySQL可视化解释器](https://mysqlexplain.com) - 免费直观的MySQL慢查询优化工具
* [Killer Coda](https://killercoda.com/)  - 浏览器交互式Linux/Kubernetes/容器/编程学习平台
* [Axonomy发票工具](https://axonomy-app.com/) - 免费版每月可创建10张发票
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**