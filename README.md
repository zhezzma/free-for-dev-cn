# free-for.dev

如今，开发者和开源作者拥有众多提供免费层级的服务，但要全面了解这些服务并做出明智选择需要耗费大量时间。

这里列出了一系列提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此清单内容存在主观判断——若未采纳您的贡献，还请见谅。

这份清单汇集了1600多人提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加更多服务，或移除那些已变更或终止的免费方案。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅包含服务化（as-a-Service）产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用），若采用时间分段模式则免费期至少需持续一年。同时我们从安全角度评估免费方案——支持SSO的服务可以收录，但会拒绝那些将TLS功能限制在付费层级的服务。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [分析与事件统计](#分析与事件统计)
  * [API、数据与机器学习](#API、数据与机器学习)
  * [制品仓库](#制品仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [CDN与防护](#CDN与防护)
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
  * [域名注册](#域名注册)
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
  * [其他分类](#其他分类)
  * [监控服务](#监控服务)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)
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
  * [基于浏览器的硬件模拟（JavaScript实现）](#基于浏览器的硬件模拟（JavaScript实现）)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美到所有区域（除中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份存储（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，20,000次Get请求和2,000次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM和1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每天60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限事务
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，10,000文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100K操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为一个VM或最多4个VM使用
       - 实例在[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时会被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点采集，10亿个数据点检索
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500 Mbps*核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知 - 每月100万次投递选项，1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制（每域名1条规则），分析，邮件转发
    * [零信任&SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用所需的一切，无需操心"服务器相关事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公共和私有Git仓库，提供CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限制的公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100 MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公共和私有Git仓库（无限制协作者）。由[Forgejo](https://forgejo.org/)提供支持。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含包和容器托管、项目管理和问题跟踪
* [GitGud](https://gitgud.io) — 无限制的私有和公共仓库。永久免费。由GitLab & Sapphire提供支持。不提供CI/CD。
* [GitHub](https://github.com/) — 无限制的公共仓库和私有仓库（无限制协作者）。包含CI/CD、开发环境、静态托管、包和容器托管、项目管理和AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 无限制的公共和私有Git仓库，最多5名协作者。包含CI/CD、静态托管、容器注册表、项目管理和问题跟踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件的软件锻造平台，包含CI、静态页面、项目页面和问题跟踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的一个友好分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；同时提供一个Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是一个基于Git的自由软件代码协作平台，适用于自由许可项目
* [OSDN](https://osdn.net/) - OSDN.net是一个面向开源软件开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是一个基于Git的自由开源软件代码协作平台，适用于FOSS许可项目
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储和Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 无限制的免费开源分布式版本控制系统。其独特功能基于补丁的健全理论，使其易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费私有项目（Git和Subversion），包含50 MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限制的公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（GNU项目）的协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（非GNU项目）的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次免费请求。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
* [IP.City](https://ip.city) - 每日100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) - 多功能API套件，包含IP地理定位、性别检测、邮箱验证等服务。
* [Apify](https://www.apify.com/) - 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。每月含5美元平台积分的免费计划。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档。无需CSS/HTML知识。免费计划每月50张图片和3个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全套API监控工具，含自动API合约验证。免费计划支持每日10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高品质API。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等根因分析。免费支持2个模型。
* [Maxim AI](https://getmaxim.ai/) - AI代理模拟评估平台。永久免费支持独立开发者和小团队（3席位）。
* [Beeceptor](https://beeceptor.com) - 快速模拟REST API，每日50次免费请求，开放端点仪表盘。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供IP地理定位等现代Web API服务，免费版每月10K-50K次请求。
* [Browse AI](https://www.browse.ai) - 网页数据提取与监控，免费每月1,000次并发请求额度。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，免费每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) - 汽车数据API，免费每月100次请求覆盖9个端点。
* [Calendarific](https://calendarific.com) - 200+国家节假日API，免费每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon商品数据GraphQL API，免费每月100次调用。
* [Clarifai](https://www.clarifai.com) - 图像识别API，免费每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) - 多功能API平台，免费600次调用/月（仅限北美区域）。
* [Colaboratory](https://colab.research.google.com) - 免费基于网页的Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，开发者计划免费每月100订单。
* [Composio](https://composio.dev/) - AI代理集成平台，支持200+工具连接。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，免费版限制20MB文件大小和30次/日转换。
* [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 地理信息API，免费每日100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，免费版限制单一用户连接。
* [CraftMyPDF](https://craftmypdf.com) - PDF自动生成工具，免费每月100份PDF和3个模板。
* [Crawlbase](https://crawlbase.com/) - 网站爬取API，首1,000次调用免费。
* [CurlHub](https://curlhub.io) - API调试代理服务，免费每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，免费每月5,000次调用。
* [CustomJS](https://www.customjs.io) - 文档转换API，免费每月600次调用。
* [Cube](https://cube.dev/) - 数据访问平台，免费版每日1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简易自毁文件分享服务。
* [Data Fetcher](https://datafetcher.com) - Airtable无代码API连接工具，免费每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具，免费每月20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本，免费每月10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 网页数据提取浏览器扩展，免费每月500页。
* [Datapane](https://datapane.com) - Python交互式报告构建API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每日每IP1,000次请求。CC-BY 4.0许可的精简数据库同样免费。

  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费方案支持每月10名活跃用户(MAU)并追踪最多4张人脸
* [Deepnote](https://deepnote.com) — 新一代数据科学笔记本。兼容Jupyter，支持实时协作与云端运行。免费版包含无限个人项目、基础机型(5GB内存+2vCPU)及最多3名编辑的团队协作
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，助力开发相关应用
* [Doczilla](https://www.doczilla.app/) — 从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费版每月可生成250份文档
* [Doppio](https://doppio.sh/) — 采用顶尖渲染技术的托管API，用于生成和私有存储PDF/截图。免费方案每月400份
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端/网页/IoT的开源REST API后端。连接任意SQL/NoSQL数据库后即刻生成带实时文档和用户管理的完整REST平台
* [Duply.co](https://duply.co) — 通过API动态生成图像，模板一次设计无限复用。免费版提供20积分
* [DynamicDocs](https://advicement.io) — 基于LaTeX模板的JSON转PDF API。免费版每月50次调用并享模板库
* [Efemarai](https://efemarai.com) — ML模型与数据的测试调试平台，可可视化计算图。免费本地使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具。试用版含2个项目(各10张表)
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 网页版HTTP请求工具
* [Export SDK](https://exportsdk.com) — 带拖拽编辑器的PDF生成API，提供SDK与无代码集成。免费版每月250页+无限用户+3模板
* [file.coffee](https://file.coffee/) — 单文件存储平台(匿名用户15MB/注册用户30MB)
* [Financial Data](https://financialdata.net/) — 股票与金融数据API。免费版每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) — 即时格式化/校验/压缩JSON的浏览器工具
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费微型方案每月500次交易
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度查询城市名的服务。免费版每月500次API调用
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费版每日2,000次请求
* [Glitterly](https://glitterly.app/) — 通过API动态生成图像，含RESTful接口与无代码集成。免费版每月50张图+5模板
* [Hex](https://hex.tech/) — 协作式数据平台(笔记本/数据应用/知识库)。免费社区版支持5个项目
* [Hook0](https://www.hook0.com/) — 开源Webhooks服务，免费版每日100次事件+7天历史记录
* [Hoppscotch](https://hoppscotch.io) — 免费美观的API请求构建器
* [huggingface.co](https://huggingface.co) — 训练部署NLP模型(PyTorch/TensorFlow/JAX)。免费版每月3万字符输入
* [Hybiscus](https://hybiscus.dev/) — 声明式PDF报告API。14天试用版含50份单页报告+颜色字体定制
* [Invantive Cloud](https://cloud.invantive.com/) — 通过SQL/OData4访问70+云平台(如Exact/Twinfield)。开发者免费(部分平台有数据量限制)
* [ipaddress.sh](https://ipaddress.sh) — 获取多种格式公网IP的简易服务
* [ip-api](https://ip-api.com) — IP定位API(非商用免费)，限45次/分钟
* [ipbase.com](https://ipbase.com) — IP定位API(永久免费版每月150次)
* [IP Geolocation](https://ipgeolocation.io/) — 开发者永久免费IP定位API(每日1,000次)
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API(1,000次免费)
* [IPLocate](https://www.iplocate.io) — 每日1,000次免费IP定位API(含代理检测/ASN数据等)，另提供免费IP数据库下载
* [IP2Location](https://www.ip2location.com) — 免费版IP定位数据库(LITE版可本地查询城市/坐标/ISP)
* [IP2Location.io](https://www.ip2location.io/) — 快速IP定位API(免费版每月5万积分+500次WHOIS查询)
* [ipapi](https://ipapi.co/) — Kloudend提供的AWS架构IP定位API(免注册每日1,000次)
* [ipapi.is](https://ipapi.is/) — 开发者友好的IP定位API(免注册1,000次+最强主机检测)
* [IPinfo](https://ipinfo.io/) — 精准IP数据API(免费5万次/月)，含运营商/域名/反滥用等接口
* [IPQuery](https://ipquery.io) — 无限制无费率的开发者IP API
* [IPTrace](https://iptrace.io) — 极简IP定位API(每月5万次免费)
* [JSON2Video](https://json2video.com) — 视频营销自动化编辑API(支持无代码)
* [JSON IP](https://getjsonip.com) — 获取客户端公网IP的免注册API(支持CORS无限调用)
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON并转为REST API的服务

  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss 是一款强大的在线 JSON 查看器、编辑器和验证工具。通过 AI 驱动的修复功能，支持格式化、可视化、搜索和操作 JSON 数据，提供树状视图、表格视图，支持 12 多种编程语言的代码生成，并能将 JSON 转换为 CSV、XML、YAML、Properties 等格式。
  * [konghq.com](https://konghq.com/) — API 市场及强大的私有和公共 API 工具。免费版功能有限，如监控、告警和支持。
  * [Kreya](https://kreya.app) — 免费的 gRPC GUI 客户端，用于调用和测试 gRPC API。支持通过服务器反射导入 gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据提升机器学习模型性能。免费支持最多 1000 个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 登录安全 API，用于检测欺诈和可疑登录并通知客户。每月免费支持 1000 次登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费 API 计划每月支持 100 次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费 API 层每天支持 100 次免费请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气 API，提供当前和预测天气数据。预测基于多个天气模型的机器学习组合，以提高准确性。免费计划每天支持 400 次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取功能或截图服务。每天免费支持 50 次请求。
  * [Mindee](https://developers.mindee.com) – Mindee 是一款强大的 OCR 软件和 API 优先平台，帮助开发者通过计算机视觉和机器学习识别关键信息，标准化文档处理层，实现应用工作流自动化。免费层每月支持 500 页。
  * [Mintlify](https://mintlify.com) — 现代 API 文档标准。提供美观易维护的 UI 组件、应用内搜索和交互式 playground。免费支持 1 名编辑。
  * [MockAPI](https://www.mockapi.io/) — MockAPI 是一款简单工具，可快速模拟 API、生成自定义数据并通过 RESTful 接口执行操作。适用于原型设计、测试和学习。每个项目免费支持 1 个项目/2 个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly 是一款值得信赖的开发工具，用于 API 模拟和功能标志管理。通过直观界面快速生成和控制模拟 API。免费层每天支持 500 次请求。
  * [Mocki](https://mocki.io) - 一款工具，可创建与 GitHub 仓库同步的模拟 GraphQL 和 REST API。简单的 REST API 无需注册即可免费开发和使用。
  * [Mocko.dev](https://mocko.dev/) — 代理您的 API，选择云端模拟的端点并检查流量，完全免费。加速开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 一款简单的 Web 应用，用于生成自定义 HTTP 响应以模拟 HTTP 请求。也提供[开源版本](https://github.com/julien-lafont/Mocky)。
  * [Mock N Roll](https://mocknroll.me/) - 免费模拟 API 服务——无需后端延迟即可模拟真实 API 响应的强大工具。适合前端开发、QA 测试和 DevOps 团队。[仓库](https://github.com/haerulmuttaqin/mocknroll-web)。
  * [microenv.com](https://microenv.com) — 为开发者创建虚假 REST API，支持生成代码和 Docker 容器应用。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一款免费简单的工具，用于检查多节点出口 IP 地址，了解您的 IP 在不同全球区域和服务中的显示情况。适用于测试基于规则的 DNS 分流工具（如 Control D）。
  * [Namekit](https://namekit.app/) - AI 驱动的域名发现工具——即时查找可用、标准价格的域名。免费每日查询。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取 JSON 结果。开发者每天免费支持 100 次查询。文章有 24 小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100 次免费请求。
  * [OCR.Space](https://ocr.space/) — OCR API 解析图像和 PDF 文件，返回 JSON 格式的文本结果。每月免费支持 25,000 次请求，文件大小限制为 1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建 Open API 3 定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转化为 API，免费支持 5 个项目。
  * [Parseur](https://parseur.com) — 每月免费 20 页：从 PDF 和电子邮件中提取数据。AI 驱动。完整 API 访问。
  * [PDFBolt](https://pdfbolt.com) - 专注于开发者的 PDF 生成 API，设计注重隐私。提供 Stripe 风格的文档，每月免费支持 500 次 PDF 转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 轻松将 HTML 或 URL 转换为 PDF 的简单 API。每月免费支持 100 次转换。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，提供可视化模板编辑器或 HTML 转 PDF、动态数据集成和 PDF 渲染 API。免费计划包含 1 个模板，每月 100 次 PDF 生成。
  * [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过 API 执行。支持热图和折线图可视化。
  * [Postman](https://postman.com) — 通过 Postman 简化工作流并更快创建更好的 API，Postman 是 API 开发的协作平台。永久免费使用 Postman 应用。Postman 云功能也永久免费，但有特定限制。
  * [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 API，支持 REST 和 GraphQL。
  * [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括每月 5 个工作流部署和 500 分钟无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。5 人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作 SQL 编辑器。
  * [PromptLoop](https://www.promptloop.com/) - PromptLoop 提供 10 倍更简单的 AI 网络爬取，接近零的采用时间，节省现有工作流 85% 以上的时间，运行速度比手动研究快 4 倍且无妥协，包含所有研究任务的 REST API 端点。每月前 1000 积分免费。
  * [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供免费层，每月支持 10k 次请求。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共 API 列表。
  * [Rapidapi](https://rapidapi.com/) - 全球最大的 API 中心，数百万开发者连接数千个 API，通过趣味挑战（含解决方案！）和交互式示例进行 API 开发。
  * [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg 的 REST API，无需处理基础设施即可在线运行 FFmpeg。免费层包含每月处理配额和 4 个 vCPU。
  * [RequestBin.com](https://requestbin.com) — 创建免费端点以接收 HTTP 请求。发送到该端点的任何 HTTP 请求将记录有效负载和标头，方便观察来自 Webhook 和其他服务的建议。
  * [reqres.in](https://reqres.in) - 免费的托管 REST-API，随时响应您的 AJAX 请求。

  * [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特炫酷图像的Web服务
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API爬虫工具。匿名抓取数据，无需担心限制、封锁或验证码问题。每月前100次成功抓取免费（含JavaScript渲染功能），联系客服可获取更多额度
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬虫API与免费代理检测服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的视觉/文本变化及数据提取。免费版每月支持5个URL监测
* [Simplescraper](https://simplescraper.io) — 每次操作后触发Webhook。免费计划包含100次云端抓取额度
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析与归档数据。免费轻量版支持2个数据源/1,000张表/25个用户
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费计划包含每表1,000行数据额度
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能的API。免费版每月100次请求
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON结果。免费计划每月100次成功调用
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供高效开发工具。免费版包含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV即可通过API快速访问数据，加速开发流程。免费版含2个API和2,500次月度调用（无需信用卡）
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且隐私优先的在线工具，直接在浏览器中将CSV文件转换为结构化JSON数据
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含格式化器、验证器、正则测试器、假数据生成器及交互式数据库沙盒
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费版提供设计、模拟和文档工具
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可创建50张图片
* [Svix](https://www.svix.com/) - Webhook托管服务。免费版每月发送50,000条消息
* [Tavily AI](https://tavily.com/) - 在线搜索与深度研究API，可整理研究成果。免费版1,000次请求/月（无需信用卡）
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供国家/城市/区域等IP位置信息
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 免费天气API。提供全球覆盖的精准预报、历史数据和天气监测方案
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，含日志聚合、可观测性、文档和调试功能。免费版每月25万次请求上限
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API。免费计划无限次调用，适合开发者和金融应用
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月150次免费验证
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，含实时状况、逐时/每日预报及天气警报。通过AI模型提升预报精度。免费版10,000次API调用/月
* [WebScraping.AI](https://webscraping.ai) - 内置解析器、Chrome渲染和代理的简易爬虫API。每月2,000次免费调用
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理加速开发。个人项目免费版含100GB存储
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版每月25,000token额度（约10个PR）
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API。每月3万次调用
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器、住宅IP的爬虫API。每月1,000次免费调用，学生/非营利组织可获额外额度
* [Zipcodebase](https://zipcodebase.com) - 全球邮政编码API。每月5,000次免费请求
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与验证服务。每月1万次请求
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持设计/部署边缘API。分钟级配置API密钥认证、限速、文档和商业化功能。免费版含10个项目、无限制生产环境、100万月请求量和10GB出口流量
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位数据结构差异
* [FreeIPAPI](https://freeipapi.com) - 免费高速IP地理定位API，支持商业用途，返回JSON格式数据

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公共项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费的私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有及公共制品仓库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公共项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人与团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议预约工具，免费版支持1个日历连接和无限次会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的多功能聊天平台，具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时故事点估算工具，支持无限成员参与快速规划
* [Telegram](https://telegram.org/) — 高速可靠的通讯平台，企业用户可享受大群组、用户名系统、桌面客户端和强大文件分享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供所有基础工具，支持每工具自动保存一条记录和标准处理速度
* [Dubble](https://dubble.so/) — 免费分步指南创建工具，支持截图记录工作流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作平台，集成IDE结对编程、终端共享、音视频通话及屏幕共享功能，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，含协作插件提升效率，免费版每月提供10,000分钟时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与协同编辑
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具，免费支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台，通过可定制虚拟空间实现自然社交，免费版支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册语法看板工具，功能完全免费无限制
* [flat.social](https://flat.social) - 团队会议与社交的互动式空间，会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub活动日报工具，含提交可视化、同伴认可系统和自定义提醒，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具，公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作工具，类似Google Docs但专为Markdown设计，私有笔记协作人数受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的统一通讯平台
* [HeySpace](https://hey.space) - 集成任务管理、聊天、日历和时间线的协作工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实远程协助工具，免费版不含分析/加密/支持服务
* [ideascale.com](https://ideascale.com/) — 创意征集投票平台，免费支持25人社区
* [Igloo](https://www.igloosoftware.com/) — 企业内部门户平台，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭/社区/企业提供安全通讯和文件共享
* [Google Meet](https://meet.google.com/) — 企业级安全视频会议解决方案
* [/meet for Slack](https://meetslack.com) - 直接在Slack中通过/meet命令发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持多工作区协作，免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队协作平台，优化开源项目和工作流程
* [Lockitbot](https://www.lockitbot.com/) — Slack内资源预约系统（如会议室/开发环境），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 网站/PDF/图片直接标注反馈工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名和2FA的密码管理器，支持多平台使用
* [Visual Debug](https://visualdebug.com) - 提升开发-客户沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天/内容/应用的数字中心，免费支持50万用户
* [Miro](https://miro.com/) - 企业级在线白板工具，提供免费基础版
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集管理工具
* [Notion](https://www.notion.so/) - 集成笔记/任务/数据库的多功能协作平台
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具，免费版支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式代码面试平台，含视频聊天/画板/在线编译器
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁团队时间追踪工具，免费支持10名用户
* [PageShare.dev](https://www.pageshare.dev) - GitHub PR视觉评审工具，免费每月10页/100MB存储
* [Pendulums](https://pendulums.io/) - 直观易用的免费时间追踪与统计工具
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史

  * [Element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、音视频通话，并轻松与其他服务集成。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息存储和完整历史记录。
* [Seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费云版本提供1GB空间。
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告。
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作。完全免费。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，免费版支持最多10名用户。
* [Slack.com](https://slack.com/) — 不限用户数量的免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务提供商的状态页。
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记。免费版支持3个看板墙、无限用户和1GB存储。
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
* [StreamBackdrops](https://streambackdrops.com) — 免费高清虚拟背景库，适用于Zoom/Teams/Google Meet等视频会议。无需注册，个人使用免费。
* [Talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点连接，无需插件或注册。
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum流程，含时间追踪功能。免费版支持5用户+3项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析和智能站会优化开发流程，含完整的远程团队休假管理功能。5人以下团队免费。
* [Tefter](https://tefter.io) - 书签管理应用，深度集成Slack。开源团队免费使用。
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板等端到端加密协作工具，开发者无需登录即可使用。
* [TimeCamp](https://www.timecamp.com/) - 不限用户数量的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具。
* [Huly](https://huly.io/) - 全能项目管理平台（替代Linear/Jira/Slack/Notion/Motion），免费版提供无限用户、10GB工作区存储和10GB音视频流量。
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用。
* [Twist.com](https://twist.com) — 异步友好型团队沟通应用，保持对话条理化。提供免费无限量计划，合格团队可享折扣。
* [tldraw.com](https://tldraw.com) — 免费开源白板与图表工具，支持智能箭头/吸附/便签/SVG导出，含多人协作模式。另有官方免费VS Code扩展。
* [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签/任务管理器，提供可定制云桌面与文件夹协作功能。
* [Typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织额外赠送Nano套餐。
* [Whereby.com](https://whereby.com/) — 一键发起视频会议（原appear.in）
* [Windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建多步骤自动化和内部应用。免费用户最多创建3个非高级工作区。
* [Vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台，单次点击上传。免费版提供10个视频/1GB存储/10GB月流量。
* [Userforge.com](https://userforge.com/) - 互联人物角色与用户故事映射工具，保持设计与开发同步。免费版支持3个角色+2名协作者。
* [Wistia.com](https://wistia.com/) — 带观众分析的高清视频托管平台，25个视频额度+品牌化播放器
* [Wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务，支持5GB以内文件无限次分享。
* [Wormhole](https://wormhole.app/) - 端到端加密文件分享（24小时内有效），5GB以上文件采用P2P传输。
* [Zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费会议限时40分钟。
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具，免费版含1万条可搜索历史+5GB存储，另有可自托管开源版本。
* [Robocorp.com](https://robocorp.com) - 自动化运维开源套件，免费体验云功能并实现简单自动化：240分钟/月机器人时长+10次助手运行+100MB存储。
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版含完整消息历史、无限私聊+1个群组+1GB存储。
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，永久免费版支持10人团队：无限公私会话+可搜索历史+无限语音通话+20GB团队存储。
* [Ruttl.com](https://ruttl.com/) — 全能数字反馈工具，支持网站/PDF/图片批注。
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台，免费版含无限频道/剧本/看板/用户+10GB存储。
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，可直接在实时网站/Web应用/图片/PDF/设计文件上标注任务。
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
* [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人参与）。
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人参与）。
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库/API），开发者个人免费。
* [TransferNow](https://www.transfernow.net/) — 最简单快速的加密文件传输界面，无需订阅即可发送照片/视频等大文件。

  * [Revolt.chat](https://revolt.chat/) — 一个尊重用户隐私的开源[Discord](https://discord.com/)替代品。免费提供Discord大部分专有功能。Revolt是一款集安全、快速于一体的全能应用，且100%免费。所有功能均无付费墙。与主流聊天应用不同，它还支持（官方及非官方）插件。
* [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年赠送10,000分钟免费时长/月。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等特性。
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集反馈，无需模拟、画布或变通方案。免费版功能完整可用。
* [Cushion](https://cushion.so/) - 面向分布式小团队的异步协作工具，替代Slack。免费版支持30条消息/5名成员/无限访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal站点托管服务。开发者可享免费套餐，同时提供免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API，免费社区空间包含5个用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS及API工具包，开发者可享免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统，内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月带宽和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) — 小型项目免费套餐。基于GraphQL的CMS，基础层提供10万次/月API调用。
* [Directus](https://directus.io) — 开源无头CMS，完全免费的平台，可本地或云端管理资产与数据库内容，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将JSON内容直接存储于Git仓库的无头CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) — 内容即服务平台，兼具无头CMS优势与营销功能。开发者计划支持2个用户、无限项目（每个项目含2个环境）、500条内容、2种语言，并提供交付/管理API与自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头CMS。全托管可扩展API的内容管理界面，社区计划为单个用户提供无限API调用、文档、自定义类型、资源及多语言支持。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) — 结构化内容平台，含开源编辑环境与实时托管数据库。每个项目免费包含无限管理员用户、3个非管理员用户、2个数据集、50万次API CDN请求、10GB带宽和5GB资源。
* [sensenet](https://sensenet.com) — API优先的无头CMS，提供企业级解决方案。开发者计划包含3个用户、500条内容、3个内置角色、25+5种内容类型、全功能REST API、文档预览生成及Office在线编辑。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git支持的无头CMS，支持Markdown/MDX/JSON，基础套餐免费支持2个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) — 快速灵活的框架，让使用任何CMS/API/数据库构建网站重获乐趣。构建并部署能提升流量、转化率与收入的无头网站。
* [Hygraph](https://hygraph.com/) — 小型项目免费套餐。GraphQL优先API，告别传统方案，用原生GraphQL无头CMS实现全渠道内容优先交付。
* [Squidex](https://squidex.io/) — 小型项目免费套餐。API/GraphQL优先，基于事件溯源（自动记录所有变更）的开源方案。
* [InstaWP](https://instawp.com/) — 数秒启动WordPress站点。免费套餐含5个活跃站点、500MB空间，站点48小时后过期。
* [Storyblok](https://www.storyblok.com) — 面向开发者与营销人员的无头CMS，兼容所有现代框架。社区（免费）版含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持、2500个资源、图片优化服务、搜索查询及250GB/月流量。
* [WPJack](https://wpjack.com) — 5分钟内在任意云端部署WordPress！免费套餐含1台服务器、2个站点、免费SSL证书与无限定时任务，无时间限制。
* [Solo](https://soloist.ai) — Mozilla推出的免费AI建站工具，通过简单输入即可创建精美商业网站。提供免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的 No code 应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的 API 和路由，支持深度集成。免费方案包含 3 个项目、5 张数据表和 1 个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程 AI 助手，通过 AI 和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody 提供多种 LLM 选择（包括本地推理），支持多种 IDE 和主流编程语言，并有免费方案。免费用户每月可获得 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计无缝转化为动态 Flutter 和 React 应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持 C#。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费方案包含 3 个切面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是面向 VSCode、JetBrains 和 Neovim 的快速 AI 代码补全插件。免费版提供无限行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习洞察，帮助开发者更快打造更优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0 利用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，新用户初始获得 1200 积分，每月另赠 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和100 MB存储空间的1个代码仓库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟测试会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限量公共和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（包括自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版包含无限用户、公共仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发者代码交互方式优先处理技术债务，可视化团队耦合度等组织因素，开源项目免费
* [CodSpeed](https://codspeed.io) — 在CI流水线中自动化性能追踪。通过精准一致的指标，在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测缺陷/安全漏洞/性能及API问题，支持实时分析Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下私有仓库免费
* [deepscan.io](https://deepscan.io) — 高级静态分析工具，自动发现JavaScript代码运行时错误，开源项目免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 排名第一的数据库优化平台，自动获取数据库和SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何Go语言包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源项目免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — 排名第一的PostgreSQL静态代码分析器，自动检测性能/安全性/架构等数据库问题
* [houndci.com](https://houndci.com/) — 基于GitHub提交的代码质量评论，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构，支持框架迁移/带修复方案的代码分析/大规模代码转换，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求与提交差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目的质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具集（含代码验证和多设备测试）
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖项更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索您的项目名称是否可用
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助定位需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段版的Google Keep。提供代码片段管理、发现与分享功能，配备强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到您的开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布，实现更快速高效的发布周期。免费版每构建最多30分钟构建时间，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的CD服务，开源免费
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持Kubernetes和Lambda环境上的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，10分钟构建时间和2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD，免费5个项目和1个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费3个用户和每月5k任务分钟。测试分析免费开发者层包括每月100k测试执行，开源项目有更多免费包含。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 全面的免费计划，包含GitHub、GitLab和BitBucket仓库的托管CI/CD服务的所有功能。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存和其他高级CI/CD功能。每月最多6000分钟执行时间，无限协作者，私有项目中30个并行作业，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1个构建，1个环境，共享服务器，无限公共仓库
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源无限
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30构建分钟）
* [drone](https://cloud.drone.io/) - Drone Cloud使开发者能够在多种架构上运行持续交付流水线，包括x86和Arm（32位和64位），全部在一个地方
* [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建一个VM，并通过唯一URL使您的应用可用，无限公共和私有仓库，VM大小最多2 GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
* [Mergify](https://mergify.com) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具，让您通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层100 Mb，1000次操作，最小间隔15分钟。
* [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月免费3,000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，使用Open Policy Agent的持续资源合规，SAML 2.0的SSO，访问公共工作池：每月最多200分钟
* [microtica.com](https://microtica.com/) - 启动环境，包含现成的基础设施组件，免费在AWS上部署应用，并支持生产工作负载。免费层包括1个环境（在您的AWS账户上），2个Kubernetes服务，每月100构建分钟和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动分割您的e2e测试运行等功能加速您的monorepo在CI上的表现。免费计划最多30个贡献者，包含慷慨的150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3,000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。最多2个用户免费，包括所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，通过拉取请求驱动的工作流，自托管运行器的项目隔离，以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费，单个用户每周有限检查点的免费层级。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接通过浏览器测试您的Android和iOS应用。免费层级包括每月两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。额外月费可获得云监控和CI/CD集成。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统提供商的一小部分价格监控API和应用。基于Monitoring as Code工作流和Playwright。开发者享有慷慨的免费层级。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否遵循50多项SEO、速度和安全性最佳实践。小型网站免费层级。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否针对给定域启用了CORS并识别差距。获取可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试。Cypress Test Runner始终免费且开源，无限制。Cypress Dashboard对开源项目免费，最多5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全注入故障以发现系统弱点，避免影响客户。Gremlin Free支持在最多5台主机或容器上执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费计划支持最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供适用于不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费计划支持最多10分钟测试文件，开源项目无限计划免费。
* [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费每月模拟最多50个并发用户60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事及Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
* [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，含AI辅助测试用例生成
* [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费计划每日10次测试、每周5次实验、每月最大15GB数据摄入。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷及衡量影响。免费层包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费计划限iOS和Android各10次测试，但包含付费计划大部分功能，如无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费层最多创建10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源及改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious允许编写用户故事式测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试（每次最多3分钟）。发现错误？可复制测试唯一URL向开发者展示如何复现。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较服务器渲染版本与常规版本页面，检查任何URL的SSR（服务器端渲染）。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费计划包含Jira集成、无限项目、CSV/XLSx导入测试用例、时间跟踪及1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求。支持转发至本地环境或历史记录回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，通过集成工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量且享受五年免费维护。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试webhook和HTTP请求。完全免费，可创建无限URL并获取建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL与邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名。
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求。
* [atomist.com](https://atomist.com/) — 更快捷便利的自动化开发任务平台，目前处于测试阶段。
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可对代码、文件、目录或容器进行公证
* [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的网页工具，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀，所有功能免费无限制。支持开源自托管。
* [DAS](https://signup.styra.com/) — Styra DAS免费版，全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
* [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动依赖项更新，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions。
* [DJ Checkup](https://djcheckup.com) — 自动化安全检查工具，免费扫描Django网站的安全漏洞（基于Pony Checkup站点分支开发）
* [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到多种云服务商。免费版支持5个用户及基础访问控制。
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。杜绝通过Slack/邮件等不安全渠道共享.env文件，永不再丢失重要配置。免费支持最多3名团队成员。
* [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复，防止敏感信息进入代码库。可扫描350+种密钥类型，免费支持25人以下团队。
* [Have I been pwned?](https://haveibeenpwned.com) — 提供数据泄露信息查询的REST API
* [hostedscan.com](https://hostedscan.com) — 在线漏洞扫描服务，支持Web应用/服务器/网络扫描。每月10次免费扫描。
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境第三方服务的全流程密钥管理。免费支持最多5名开发者。
* [Internet.nl](https://internet.nl) — 测试现代互联网标准支持度（IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE）
* [keychest.net](https://keychest.net) — SSL证书到期管理与购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
* [meterian.io](https://www.meterian.io/) — 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞。免费支持1个私有项目，开源项目不限量。
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 快速检测OpenAPI/Swagger接口安全性的免费工具，无需注册
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人，自动为Java代码库提交PR修复安全漏洞（即将支持更多语言）
* [pyup.io](https://pyup.io) — Python依赖项安全监控与自动更新。免费支持1个私有项目，开源项目不限量。
* [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，进行OWASP风险审计
* [report-uri.io](https://report-uri.io/) — CSP与HPKP违规报告
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询额度[点击此处](https://account.seclookup.com/)。
* [snyk.io](https://snyk.io) — 检测修复开源依赖项已知漏洞。开源项目无限次测试与修复，私有项目每月限200次测试。
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案。包含应用和防火墙CLI工具，可检测70+种供应链风险指标。
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次SCA扫描。在发布前检测修复安全威胁，提供简单高效的防护方案。
* [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化应用扫描，确保生产环境前的安全漏洞修复。单个应用支持无限次扫描和环境。
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒及服务器防火墙(WAF)。注册用户可获取邮件通知服务。
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置/证书/链等，不限于HTTPS协议。
* [threatconnect.com](https://threatconnect.com) — 威胁情报平台，适合刚开始研究网络威胁情报的个人研究员/分析师/组织。免费支持最多3个用户。
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密与自动密钥管理。免费支持1个应用及每月100万次加密。
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全等数字解决方案工具。免费支持最多250个用户的应用。
* [Vulert](https://vulert.com) - 持续监控开源依赖项的新漏洞并提供修复建议，无需安装或访问代码库。开源项目免费使用。

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个GitHub公开仓库、代码片段、问题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。我们支持用户通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端SDK。免费额度包含1000名MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式单点登录服务。免费方案包含25,000名MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速实现无密码登录、OTP验证、双因素认证(2FA)和单点登录。包含完整前端组件。免费支持5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制系统，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)解决方案，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理系统，包含认证、2FA/MFA功能，提供登录/注册/个人资料等预制UI组件。免费支持10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100名用户和1个领域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证方案。不限MAU永久免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500名活跃用户/月，50个租户（其中5个支持SAML/SSO）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证解决方案。免费支持10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费提供7,500名MAU的起步套餐。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证，免费支持10名用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证，最快仅需几分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权系统。免费支持100名MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)与单点登录提供商，免费支持3个企业应用和5个个人应用，不限用户数。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。开发者账户永久免费，包含所有安全功能，支持无限团队成员、200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC权限模型，提供实时更新和无代码策略界面。免费额度包含1000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费领域(realm)支持1000名用户和10个SSO连接，采用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业级SSO。免费方案包含不限MAU、不限组织数量、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化认证与反欺诈平台，提供API和SDK。免费方案包含10,000名MAU、不限组织数量、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案，开发者友好型设计，5分钟快速入门。可免费自托管，或选择含10k免费MAU的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，在快速上手的同时保持对用户体验的控制。免费支持5000名MAU。
* [Warrant](https://warrant.dev/) - 企业级授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度包含25,000次认证请求，所有安全功能（OTP、无密码认证、策略等无付费墙）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可实现企业级销售功能，免费支持200名用户和10,000封事务邮件（含"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 产品用户身份的开发、安全与管理平台，涵盖认证与授权功能。免费支持5,000名MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。包含邮箱密码登录、社交账号登录、魔法链接认证、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：1个应用、分析功能、无限版本与安装、反馈收集
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费方案包含：无限上传、私有链接（访客2天有效期/注册用户60天有效期）
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发服务。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大100MB文件大小

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM DevOps方案。免费支持100台设备，含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。提供单服务器免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署。
* [courier.com](https://www.courier.com/) - 统一推送API，集成应用内消息、邮件、聊天、短信等多渠道通知，含模板管理功能。免费套餐包含每月10,000条消息。
* [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件/推送/短信/产品导览/横幅等），每月免费支持1,000名活跃用户。
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理，永久免费连接100台设备（无需信用卡）。
* [knock.app](https://knock.app) - 开发者通知系统，单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐含每月10,000条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
* [Novu.co](https://novu.co) - 开源通知基础设施，统一管理邮件/SMS/站内信/应用内/推送等渠道。免费套餐含每月30,000条通知（保留90天）。
* [pusher.com](https://pusher.com/) - 实时消息服务，免费支持100个同时连接和每日200,000条消息。
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务，免费支持20个同时连接和每日100,000个事件。
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务，覆盖全球/AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制及全功能Web UI。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长。
* [webpushr](https://www.webpushr.com/) - 网页推送通知，免费支持10,000订阅用户（推送次数不限）。
* [httpSMS](https://httpsms.com) - 通过Android手机作为SMS网关收发短信，每月免费200条。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全MQTT代理，永久免费100万会话分钟/月（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费套餐：每日50条消息（限1设备1应用）。
* [SuprSend](https://www.suprsend.com/) - API优先的通知基础设施，统一处理事务性/定时/互动通知。免费套餐含每月10,000条通知，支持摘要/批量/多渠道/租户等高级功能。
* [SMSGate](https://sms-gate.app) - Android™短信网关云服务，通过设备路由收发短信。完全免费的云服务（建议每日超10,000条时通知以维持服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版含50GB存储，15天存储保留期和7天日志检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志，保留7天
* [log.dog](https://log.dog/) — LogDog是支持iOS/Android的远程调试/日志SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB日志，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量，无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费无限制
* [Lecto](https://lecto.ai/) - 机器翻译API含免费层（30次免费请求，每次1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键值免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费，免费层最多10,000条源字符串，无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时指标免费版，应用性能管理代理限免支持一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版含1小时数据保留期
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志存储）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测器（3分钟检测频率）和状态页面功能
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行监测器，不限用户数、仪表盘数量和告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API & 网络检测/1.5千次浏览器检测运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描次数、用户数和存储账户数。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与运行时间监控。免费版含5个监测器
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控服务。免费1个监测器，推荐他人注册可获得更多额度
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个运行时间监测器，5分钟检测间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过云端资源优化与报告帮助厘清基础设施成本。每月Google Cloud Platform消费不超过5,000美元可免费使用
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察工具。免费版含24小时数据保留期
* [fivenines.io](https://fivenines.io/) — 提供实时仪表盘与告警的Linux服务器监控服务——永久免费支持最多5台服务器（60秒检测间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合观测平台，集成指标与日志功能。免费版：3用户、10个仪表盘、100条告警规则，Prometheus和Graphite指标存储（1万条时间序列，14天保留期），Loki日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。免费支持最多20个检测项
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页聚合平台——永久免费提供20个监测器和2个通知渠道（Slack与Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费方案
* [instatus.com](https://instatus.com) - 10秒创建精美状态页。永久免费且不限订阅数与团队数
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控服务，免费版支持500个指标和3小时数据可见期
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立网速测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL证书监控，免费支持最多5个监测器
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（100页以内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - 提供应用与技术栈全景可视化的观测平台，支持大规模监控与故障诊断。开发者社区永久免费方案包含：100万条日志事件监控、2台主机的基础设施监控与应用性能监控
* [MonitorMonk](https://monitormonk.com) - 极简主义运行时间监控服务，提供美观状态页。"永远免费"方案支持10个网站或API端点的HTTPS、关键词、SSL及响应时间监控，含2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — 开源实时指标收集工具，产品持续迭代中，GitHub可获取源码！
* [newrelic.com](https://www.newrelic.com) — 帮助工程师构建更完善软件的可观测平台。无论单体架构还是无服务架构，均可实现全栈埋点与分析优化。免费版提供每月100GB数据摄入、1个全权限用户及不限量基础用户
* [nixstats.com](https://nixstats.com) - 单台服务器免费。含邮件通知、公开状态页、60秒检测间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API运行时间监控、定时任务检测及状态页服务。免费版含5个检测项（3分钟间隔），支持Slack/Discord/邮件告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽，通过对比中美服务器DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 高可用服务的强大告警与值班管理系统。免费支持最多5用户
* [paessler.com](https://www.paessler.com/) — 功能强大的基础设施与网络监控方案，含告警、可视化及基础报表功能。免费支持100个传感器
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费版支持6个监测器（每日检测）
* [pagerly.io](https://pagerly.io/) - Slack值班管理系统（集成Pagerduty/OpsGenie）。免费支持1个团队（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更与运行状态。免费方案含5个URL、每日核心指标检测、10个HTML/SEO变更监测器、167个国家联盟链接监控及邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。免费支持最多5用户
* [phare.io](https://phare.io/) - 运行时间监控服务，免费支持10万次事件（不限项目数与状态页数量）
* [pingbreak.com](https://pingbreak.com/) — 现代化运行时间监控服务。不限检测URL数量，支持Discord/Slack/邮件宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个运行时间监测器（10分钟间隔），支持SSH/HTTP/HTTPS及自定义TCP端口监控
* [pingpong.one](https://pingpong.one/) — 带监控功能的高级状态页平台。免费版含1个可定制公开状态页（SSL子域名）。开源项目与非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监测器、6个月历史运行数据/日志、不限量状态页和自定义域名！无限期免费邮件告警，无需绑定信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万个自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控，涵盖指标和日志，无需复杂配置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL证书监控，每类提供5个免费监测项
* [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 免费2个监测项
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监控、1个DNS监控和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计项，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（有限制条件）
* [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监测项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS和域名监控。免费监控10台服务器、10个运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监控（5分钟间隔）和可定制状态页（含商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供多种监控类型：Cron任务、关键词、网站、端口、Ping。免费25个运行时间检查（3分钟间隔）。通过电话、短信、邮件和Webhook发送告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux和Windows服务器监控：5个免费；状态页：1个免费 - 移动应用、多通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行状态监控。为开源项目提供免费小型商业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小团队每年100万用户会话内免费使用。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持无限量自托管。
* [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备前100台免费。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含5,000次错误/月，不限用户数，30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好型一键错误报告。免费计划不限提交次数。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用户免费计划不限录制次数。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月1,000名活跃用户以内免费，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
* [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费版不限搜索次数，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证。
* [The Odin Project](https://www.theodinproject.com/) - 免费开源平台，专注于JavaScript和Ruby的Web开发课程。
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完全编辑并下载。
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，让您在一小时内掌握最新生成式AI工具和技术。
* [LabEx](https://labex.io) - 通过互动实验室和真实项目，培养Linux、DevOps、网络安全、编程、数据科学等技能。
* [Roadmap.sh](https://roadmap.sh) - 免费学习路线图，涵盖从区块链到UX设计的开发全领域。
* [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络技术和Python等认证对齐的免费课程。
* [MIT开放课程](https://ocw.mit.edu/) - MIT开放课程发布2500多门课程资料，向全球学习者和教育者免费分享知识。YouTube频道见[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程。
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 免费在线指南，学习基础和高级HTML/CSS、JavaScript及SQL。
* [全栈开放课程](https://fullstackopen.com/en/) – 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等。完全在线且自定进度。
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000多门免费在线课程，专攻计算机科学、工程和数据科学。
* [Django教程](https://django-tutorial.dev) - 免费在线指南，帮助用户将Django作为首个框架学习，并为用户文章提供免费dofollow反向链接。
* [DevNet学院](https://devnet-academy.com/) – 免费自定进度培训，面向Cisco DevNet专家/CCIE自动化认证。涵盖Python Click和Flask-RESTx。

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱服务
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源的匿名邮件转发服务，可免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 新闻通讯服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发邮件，每月10000封免费
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者使用的简易测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个您域名下的邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送多达9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封邮件免费
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器，只是一个邮件客户端，可以从客户端直接发送邮件而不暴露凭据，免费层每月200次请求，2个邮件模板，请求大小限制为50KB，有限的联系人历史记录
* [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址都会更新。完全免费，不收取任何费用
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200封邮件，检查是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮件生成器。支持10个域名，可创建无限地址（包含广告），除此之外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发服务。创建并转发无限数量的邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD时需要付费，因为这些域名容易被滥用）
* [Imitate Email](https://imitate.email) - 用于测试邮件功能的沙箱邮件服务器，适用于构建/QA和CI/CD。免费账户每天永久发送15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单个域名的免费邮件转发。接收和发送来自您域名的邮件
* [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过方便的Chrome扩展删除。非常适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源并可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面提供服务
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封邮件免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱地址注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封邮件免费
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件和自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费的公共邮件系统，可以使用任何收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每天200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮件，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮件测试的免费API，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用的假SMTP服务器，免费套餐包含1个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发人员使用的免费临时邮箱地址。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS源阅读收到的邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到您的服务器）
* [pepipost.com](https://pepipost.com) — 第一个月30000封邮件免费，之后每天前100封邮件免费
* [Plunk](https://useplunk.com) - 每月3000封邮件免费
* [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC每周摘要
* [Proton Mail](https://proton.me/mail) - 免费的安全邮箱服务提供商，内置端到端加密。免费1GB存储空间
* [Queuemail.dev](https://queuemail.dev) — 可靠的邮件投递API。免费层（每月10000封邮件）。异步发送。使用多个SMTP服务器。黑名单、日志、跟踪、Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 每天免费验证100封邮件，以及DEA检测器、DNS查询、SPF检测器等免费API
* [Resend](https://resend.com) - 面向开发者的事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育人员（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费新闻通讯服务。开始收费时再付费
* [Sweego](https://www.sweego.io/) - 面向开发者的事务性邮件API。每天500封邮件免费

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时生成多个邮箱并邮件转发
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单生成器和自动化流程。免费版支持有限数量的线索和自动化任务
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址服务，支持邮件转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。提供1GB免费存储空间和1个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行部署
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供包含免费方案的多项服务：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限时访问权限，适用于专业及个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储空间。捆绑提供Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组/自定义应用/看板/手册，10个集成以及频道/活动/论坛功能
   - [会议](https://zoho.com/meeting) — 支持最多3名参会者的会议及10名参与者的网络研讨会
   - [Vault](https://zoho.com/vault) — 个人版密码管理工具
   - [Showtime](https://zoho.com/showtime) — 支持最多5人远程培训的会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，支持ZIP备份/RSS&Atom订阅/访问控制/CSS定制
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅免费，存储最近40条订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品计费管理，支持3个页面和50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理系统，包含3个客服席位、私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术支持人员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每个频道100人并支持SSO
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排期
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API服务。每月5,000封邮件，无限域名，免费邮箱验证、黑名单监控、邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为核心的功能开关服务，支持无限团队成员数量，提供卓越的技术支持且价格合理。免费方案包含最多10个功能开关、2个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨网页、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量不限。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量不限。
  * [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试工具。免费支持最多3个环境，每个环境5个功能开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费方案包含最多10个开关、2个环境且请求不限量。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费方案中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化强大平台。其慷慨的免费方案提供不限量席位、开关、实验和动态配置，支持每月最多100万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试工具。支持代码化配置和全类型化TypeScript SDK，深度集成Next.js和React等框架。提供丰厚的免费层级和经济的扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 可用于商业用途的免费字体。精心挑选的字体库，并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速便捷地将众多免费字体应用到网站
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰、可供下载的多样化字体库
* [Fontshare](https://www.fontshare.com/) - 免费字体服务平台，持续增加的专业级字体库，100%免费用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和付费商用字体，支持输入文本快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，包含中日韩(CJK)字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 功能强大且对开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知和自动回复、Webhooks、Zapier集成、重定向、AJAX或POST等功能。免费版包含无限表单、每月20次提交，若显示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代GUI界面，支持与Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾邮件拦截和GDPR合规数据处理。基础用途可免费使用。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费开始，每月允许500次提交和可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾邮件防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，每月无限单页表单，100次提交，含邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版含无限表单、每月250次提交，客户支持团队提供协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每月每表单50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供的简易端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，提供终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB文件存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过UI将提交转发至邮件、Slack或Zapier。无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版可创建无限表单并收集无限提交，含预制模板、反垃圾邮件功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码，秒级创建表单转邮件等功能。个人账户每月免费50次提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版允许1个站点、1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 使用这款一流工具创建专业表单和调查。50+专家设计模板。免费账户限制为1个活跃调查、每调查100次回复和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调查和产品分析工具，用于解码用户行为。永久免费版允许500名月活用户，无限回复和事件，多集成、导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大的网站表单后端，永久免费版每月50次提交，250MB文件存储，Zapier集成，CSV/JSON导出，自定义重定向和响应页，Telegram & Slack机器人，单次邮件通知。
* [Survicate](https://survicate.com/) — 从所有渠道收集反馈并用单一工具发送后续调查。通过AI自动分析反馈并提取洞察。免费版含邮件、网站、产品内或移动端调查，AI调查创建器和25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可免费轻松集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费版含5个表单，每表单最多3步，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站中嵌入设计精美的表单。免费版每表单仅限10个字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版会对签署文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的联系表单，无需编写后端代码。免费版含无限表单、无限域名和每月250次提交。
* [WebAsk](https://webask.io) - 调查和表单构建器。免费版含3个调查/账户，每月100次回复，每调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任何PDF转为可填写表单。免费版允许无限PDF，每PDF3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100次回复，支持网站嵌入或链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调查工具。使用Qualli AI生成完美问题。免费版支持500名月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版含1个活跃调查，每调查25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费的自动化拉取请求审查。
  * [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200多种LLM。每月10,000次免费请求，平台功能完全免费！
  * [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
  * [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000条私有评估行。
  * [Findr](https://www.usefindr.com/) - 通用搜索工具，可同时搜索所有应用。搜索助手可让您使用自己的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
  * [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
  * [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理功能。此外，专业套件还提供免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并与任何可观测性客户端兼容。免费计划每月提供50,000次追踪。
  * [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并生产化生成式AI产品。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
  * [Langfuse](https://langfuse.com/) - 开源的LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
  * [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
  * [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，可替代Tableau、Power BI和Looker等流行的商业智能工具。Othor利用大型语言模型（LLM）在几分钟内提供定制化的商业智能解决方案。永久免费计划提供一个工作空间、五个数据源连接和一个用户，且分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。请注意，这些模型虽可免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费词，使用户能够访问强大的工具，用于代码生成、深度研究和图像创建。
  * [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的语音清晰度。完全免费：无限次一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的CDN服务。cdnjs是由Cloudflare提供支持的开源免费CDN，全球超过11%的网站使用。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate是为GraphQL API提供的极速可靠CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管流行的第三方JavaScript库，如jQuery，方便您将其添加到Web应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速启动和管理完整Varnish缓存解决方案的简单方法。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不失败的CD。个人使用免费，限一名开发者，无支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。在全球范围内即时处理图片。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1 TB流量和100万次请求，以及免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5 TB CDN流量，19个核心节点，1个域名和通用SSL。
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持最多5个用户和每天1 GB流量。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发的Web应用平台。免费版支持无限应用数量，但存在30秒超时限制。
* [appwrite](https://appwrite.io) - 支持无项目暂停（含websockets）和认证服务的无限项目。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链。商业用途免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析，适合内容密集型和企业电商网站。免费版支持5k月访问量或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的JavaScript/TypeScript/WebAssembly分布式系统。免费版每日10万请求和100GiB月数据传输量。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的后端框架，无样板代码。包含业余项目的免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用通过AWS结算（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例，及限制为2连接/1万行且无备份的PostgreSQL免费数据库。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持快速扩展。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台，可基于任意触发器开发工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费账户支持1个your-username.pythonanywhere.com域名应用、512MB私有文件存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次调用，每日2500次，每月5万次。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 面向开发者的全球无服务器平台，支持Docker容器/Web应用/API的Git部署、自动扩缩容和全球边缘网络。免费实例可部署至德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1CPU，及法兰克福/华盛顿/新加坡的免费PostgreSQL数据库。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/每月5000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务，为Meteor应用提供免费MongoDB共享主机和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/作业/托管数据库，支持从版本控制无缝扩展容器。免费版含2个服务/2个定时作业/1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全功能平台，兼具NoCode工具敏捷性与编程语言能力。免费版含[1000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，内置CI/CD/GitHub集成和自动HTTPS。[免费计划](https://wundergraph.com/pricing)支持3个项目/1GB出口流量/300分钟月构建时间。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务和每月5美元额度。
* [mogenius](https://mogenius.com) - 轻松在Kubernetes上构建部署服务，免费层支持本地Kubernetes连接，为开发者提供类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB带宽/10个定时任务（限非商业或学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者PaaS平台，免费版含5个组件和100美元月额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动和Web Baas，免费提供1GB文件存储、每月50,000次推送通知及1000个表内数据对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上启动您的Python API，通过在线编辑器或本地工具免费构建和托管。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档和资源，为企业构建和部署数字创新。包含平台、SDK及组件库的完整个人沙盒访问权限。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P语音视频通话、文件附件及推送通知。支持最多1000名用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录、500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后计划提供慷慨的免费套餐。
* [Firebase](https://firebase.com) - Firebase助您构建并运营成功应用。免费Spark计划包含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需编写代码即可构建Flutter应用UI。集成Firebase。免费套餐包含UI构建器和免费模板的完整访问权限。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、视频音频及信息流功能（通常需数周）。
* [hasura.io](https://hasura.io/) - Hasura扩展您现有数据库并提供即时GraphQL API，安全支持Web、移动及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费套餐包含PostgreSQL、GraphQL(Hasura)、身份验证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送，联系人无限制且支持自动预热功能。
* [paraio.com](https://paraio.com) - 具备灵活身份验证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息和100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2000名订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) - 2000名月活用户免费无限推送通知。支持iOS和Android设备的统一API。
* [quickblox.com](https://quickblox.com/) - 即时消息、视频语音通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含身份验证、数据、文件、邮件API、模板等服务的服务器，并通过管道组合转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用。点击式数据模型定制。通过Apex代码深入开发。强大API实现万物集成。企业级安全保障。点击式UI定制或前沿Web框架支持。免费开发者计划开放完整Lightning平台权限。
* [simperium.com](https://simperium.com/) - 即时自动同步多平台数据，结构化数据发送与存储无限制，每月最多2500名用户。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，用于构建后端。免费套餐含身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) - 具备身份验证、配额、监控和分析的API管理。提供免费云服务。
* [zapier.com](https://zapier.com/) - 连接应用实现任务自动化。每15分钟5次Zap触发，每月100次任务。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用和设备。免费支持2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务、15分钟更新间隔、5个活跃自动化流程及Webhook支持。
* [LeanCloud](https://leancloud.app/) - 移动后端。免费提供1GB数据存储、256MB实例、每日3000次API请求和10000次推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账号注册超过180天的用户提供每月5美元免费额度。完美适用于应用、数据库等托管。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。可与15+种数据库和任何API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源的快速创建内部应用的低代码平台。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
* [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具有拖放界面、离线支持、实时位置跟踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个帮助工程团队和产品经理快速构建内部工具、自定义用户流程、数字体验、自动化、管理面板和运营应用的低代码平台，效率提升10倍。
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，免费使用内置API如OpenAI、Anthropic、Firecrawl等。适合构建AI代理/内部工具并与团队共享。免费层包括API完全访问权限、AI编程助手和每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5 GB存储和1 GB内存。免费层还允许使用Studio和Studio Pro IDE。
* [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS，支持本地或云端部署。免费"个人环境"提供无限代码和最多1 GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。Retool高度可定制，只要能用JavaScript和API实现的功能，都可以在Retool中完成。免费层每月最多支持5个用户，不限应用数量和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。使用AI生成、可视化编辑并通过代码扩展。集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖放式应用构建器快速开发。
* [UI Bakery](https://uibakery.io) — 低代码平台，加速构建自定义Web应用。支持通过拖放构建UI，并通过JavaScript、Python和SQL实现高度定制。提供云端和自托管解决方案。最多5个用户免费。
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费支持1个用户，每月100万次工作流活动（[也有德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费网络托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，可通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施麻烦并加速设置。
* [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建Web和移动应用，免费但带有Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 去中心化的Web3前端托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform Starter层级免费构建和部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到网络。仅限静态站点。永久免费。每个Google/Microsoft账户一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并公开实时共享。通过其美观的用户界面、API和/或CLI按您喜欢的方式工作。
* [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持及许多其他免费主机不提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳的控制面板和50+免费应用的一键安装。即时设置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利免费网络托管，提供Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP邮件，无限带宽，免费子域名，1000 MB免费存储空间并可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，自定义域名带SSL，100 GB月流量，260+ Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 提供SFTP访问的网络托管，支持文件上传下载和PHP。
* [Neocities](https://neocities.org) — 静态托管，1 GB免费存储和200 GB带宽。
* [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，每月免费300积分（相当于30 GB带宽）。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种形式的网络托管（静态托管、基于容器的托管、WordPress等托管应用一键安装）。一个免费网络托管（静态或容器化）和一个免费数据库，100 GB带宽和300构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费使用，无自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，提供免费SSL、全球CDN、私有网络、Git自动部署，以及Web服务、数据库和静态网页的完全免费计划。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者的静态网页发布工具。无限站点，支持自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50页，50 MB存储，仅限170+预定义主块，无自定义字体、图标和域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，提供免费SSL、全球CDN和每次`git push`生成的唯一预览URL。非常适合Next.js和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器，无限网站、70+块、五个模板、自定义CSS、图标、SEO和表单。无自定义域名。
* [Qoddi](https://qoddi.com) — 类似Heroku的PaaS服务，以开发者为中心，功能全面。免费层级支持静态资源、测试环境和开发者应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费Flarum托管，最多支持250用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，容器TTL两周，每个项目500 MB RAM，SFTP - 1G磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易用的云平台，付费服务中包含三个静态站点的免费托管。
* [Serv00.com](https://serv00.com/) — 3 GB免费网络托管，每日备份（7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
* [Sevalla](https://sevalla.com/) — 简化应用、数据库和静态网站部署和管理的托管平台 - 1GB站点限制，100GB免费带宽，600免费构建分钟，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全性的免费DNS托管，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，支持5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 免费动态DNS服务，[支持API](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户贡献域名的[子域名注册](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪、无广告的免费动态DNS服务，域名数量无限制。
* [noip](https://www.noip.com/) - 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) - 免费DNS服务，输入含IP地址的主机名即可返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - 免费域名DNS变更监控与自动备份服务。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅与广告。
* [LocalCert](https://localcert.net) - 提供免费`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷高效地上传并存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费提供10GB类Amazon S3对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费提供5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云平台。
  * [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基数库、每个库1,200行数据和每月1,000次API请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2名开发者席位，无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源SQL数据库，专为实时分析设计。[免费层CRFREE](https://crate.io/lp-crfree)：单节点配置为2核CPU、2GiB内存、8GiB存储。每个组织可创建一个集群，无需支付方式。
  * [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，支持20个并发连接
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代从物联网到AI的应用而设计
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
  * [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
  * [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
  * [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费层支持25MB内存、1个代理服务器和基础分析
  * [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL、PostgreSQL或MongoDB免费层
  * [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行数据、1个月版本历史，最多支持25名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
  * [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能及常用商业应用集成的工具。免费方案包含无限用户、10个堆栈和每个堆栈2GB附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RUs)。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费方案提供9GB总存储、最多500个数据库、3个地理位置、每月10亿行读取及SQLite本地开发支持。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入、30MB读取和10,000基数序列
  * [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式、关系、自动REST API（支持类MongoDB查询）及高效的多用户管理界面。免费方案允许3个用户、2,500条记录和每秒1次API请求。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万个节点，17.5万种关系）。
  * [Neon](https://neon.tech/) — 托管PostgreSQL，总存储0.5GB、1个项目、10个分支、无限数据库、主分支始终可用（5分钟后自动暂停），非主分支计算每月20小时活跃时间。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
  * [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时间限制，10GB存储+每日1,000次API请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2核vCPU、8GB内存和50GB存储，闲置1小时后休眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，这是一个用Prolog和Rust编写的文档和图数据库。开发免费，企业部署和支持需付费。
  * [filess.io](https://filess.io) - filess.io平台可免费创建两个数据库，每个数据库最大10MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
  * [xata.io](https://xata.io) - Xata是内置强大搜索和分析的无服务器数据库。单一API、多类型安全客户端库，并优化开发工作流。永久免费层适合业余开发者，包含三个Xata单位（单位定义详见官网）。
  * [8base.com](https://www.8base.com/) - 8base是基于MySQL和GraphQL构建的全栈低代码开发平台，面向JavaScript开发者提供无服务器后端即服务。通过UI应用构建器快速开发Web应用并轻松扩展，免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
  * [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、始终可用不关机、总存储1GB、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费方案支持最多5人参与的无限网络，可安全扩展类LAN网络至分布式团队。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装和注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类LAN网络。不限节点数（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，可将事件转译并路由至第三方服务。免费10万次事件/月。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook至公共或内部（如localhost）目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://子域名.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。免费版每月10万次请求和10万次尝试，数据保留3天。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管型虚拟以太网服务。免费版支持25个客户端的端到端加密网络，提供桌面/移动/NA客户端，可通过网页界面配置自定义路由规则及审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将本地服务器暴露至互联网。免费版隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地服务发布为自定义公共URL，并通过访问控制保障安全。免费版支持1个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式平台满足团队发布优秀项目的所有需求。免费版提供1个项目、10个用户和100MB存储空间。
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。最多3个项目、20个用户和1GB存储空间。
* [bitrix24.com](https://www.bitrix24.com/) — 内网和项目管理工具。免费版提供5GB空间支持无限用户。
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具：流程图、UML、网络图。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 基于团队的Planning Poker工具，节省冲刺估算时间。免费支持5个用户，免费Jira集成，无限视频通话、团队和会话。
* [clickup.com](https://clickup.com/) — 项目管理工具。提供免费版和含云存储的付费版。支持移动应用和Git集成。
* [Clockify](https://clockify.me) - 时间追踪和工时表应用，可跨项目跟踪工作时间。无限用户，永久免费。
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，针对AWS优化并显示实时数据。免费版支持单个用户无限私有图表。
* [Codegiant](https://codegiant.io) — 项目管理与代码仓库托管及CI/CD。免费版提供无限仓库、项目和文档（5人团队），每月500分钟CI/CD时长，30000分钟无服务器代码运行，1GB仓库存储。
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian的知识协作工具，帮助团队高效协作共享知识。免费版最多10个用户。
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费入门计划支持5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目，无限用户，1GB存储。
* [diagrams.net](https://app.diagrams.net/) — 在线图表工具，支持本地存储至Google Drive/OneDrive/Dropbox。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理。免费版支持无限项目、用户和文件存储。
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的冲刺回顾工具。免费版每月3个公共看板和每个看板1次调查。
* [GForge](https://gforge.com) — 复杂项目的项目管理和问题跟踪工具集，支持自托管和SaaS模式。SaaS免费版前5个用户免费，开源项目完全免费。
* [gleek.io](https://www.gleek.io) — 面向开发者的免费描述转图表工具。通过关键词创建非正式UML类图、对象图或实体关系图。
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异对比工具，精确标记破坏性/非破坏性/危险变更。
* [Hygger](https://hygger.io) — 项目管理平台。免费版提供无限用户、项目和看板（100MB存储）。
* [Instabug](https://instabug.com) — 移动应用全面的错误报告和反馈SDK。免费版支持1个应用和1个成员。
* [WishKit](https://wishkit.io) — 收集iOS/macOS应用内用户反馈并按投票优先级排序功能。免费版支持1个应用。
* [Ilograph](https://www.ilograph.com/) — 多视角交互式架构图，支持代码表达图表。免费版无限私有图表（最多3个查看者）。
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版最多10个用户。
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理。免费版2个看板和2个用户（不含附件）。
* [kan.bn](https://kan.bn/) - 强大的灵活看板应用，免费版1个用户支持无限看板/列表/卡片。
* [Kitemaker.co](https://kitemaker.co) - 贯穿产品开发全周期的协作平台，集成Slack/Discord/Figma/Github。免费版支持250个工作项。
* [Kiter.app](https://www.kiter.app/) - 求职管理工具，追踪面试/机会/人脉。完全免费的网页应用和Chrome插件。
* [Kumu.io](https://kumu.io/) — 支持动画/装饰/筛选/聚类/表格导入的关系图工具。免费版无限公开项目，学生可享私有项目，沙盒模式允许临时编辑。
* [Linear](https://linear.app/) — 极简问题追踪工具。免费版无限成员，10MB文件上限，250个问题（归档除外）。
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS。免费版支持10用户/20自定义字段/2GB存储/5分钟AI视频录制/20次自动化/月。
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具。免费版3个可编辑文档+100专业模板+基础协作功能。
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理。免费版支持3个项目不限成员。
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，基础版永久免费（100MB存储/5用户），支持无限工作区/会议/任务单/工时表/问题追踪。
* [Ora](https://ora.pm/) - 敏捷任务管理与团队协作。免费版最多3个用户，10MB文件限制。
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 无限公开项目+2个私有项目（3个活跃用户+无限只读用户）。
* [plan.io](https://plan.io/) — 项目管理与代码托管等。免费版2用户+10客户+500MB存储。
* [Plane](https://plane.so/) - 简洁可扩展的开源项目和产品管理工具。免费版无限成员，5MB文件上限，1000个问题。
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（共识估算工具）。无限用户/团队/会话/轮次/投票，无需注册。

  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告和反馈工具。免费版每月每个应用可提交10个错误报告。
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户。
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程和会议记录应用，10人以下团队免费使用。
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费。
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版提供不限量的任务、迭代和工作区，且无用户数限制。
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板到Scrum几乎涵盖所有运营流程。免费版支持无限用户，最多1,000个数据实体 {[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单和团队大纲。免费版包含1个工作区（不限任务和项目）、1GB文件存储、1周项目历史记录，以及每次视频会议最多5名参与者。
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费使用。支持GitHub/Trello/Dropbox/Google Drive集成。
* [Teaminal](https://www.teaminal.com) - 远程团队的站会、回顾会和迭代计划工具。15人以下团队免费。
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，另有付费方案可选。
* [teleretro.com](https://www.teleretro.com/) — 融合破冰活动、动图和表情的趣味回顾工具。免费版包含3次回顾会议，成员人数不限。
* [Tenzu](https://tenzu.net/) — 面向敏捷团队的轻量级项目管理工具。该SaaS产品采用自愿付费模式，用户可选择支付0元且所有功能无付费墙 {[详情](https://tenzu.net/pricing/)}
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台。个人使用免费。
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版每个图表最多支持4个层级。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版功能：5个活跃项目、每个项目5名用户、5MB文件上传、3个筛选器、1周活动记录。
* [trello.com](https://trello.com/) — 看板式项目管理工具。免费版含无限个人看板与10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具。
* [ubertesters.com](https://ubertesters.com/) — 测试平台集成与众测服务，免费版支持2个项目5名成员。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台（含项目管理、版本控制和问题追踪）。免费版提供无限项目与协作者，3GB存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。最多3名用户免费，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack (InCloud)，适用于开源项目及私有项目（3名用户免费）。含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — 唯一内嵌于GitHub的项目管理解决方案。公共仓库、开源组织及非营利机构免费使用。
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具。免费版最多支持5名成员，5GB附件存储。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用免费版专为自由职业者设计，支持无限记录、项目、客户、标签及报表功能；[Toggl Plan](https://toggl.com/plan/)任务规划工具免费版为独立开发者提供不限量的任务、里程碑和时间线。
* [Sflow](https://sflow.io) — 专为敏捷软件开发、市场营销、销售及客户支持打造的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员。
* [Pulse.red](https://pulse.red) — 免费极简主义时间追踪与项目工时表应用。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件主机](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件，如APK构建、自定义ROM和修改等，但也接受其他类型文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单安全的Borg Backup远程备份托管服务。提供10GB免费备份空间和两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10GB免费存储空间
  * [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
  * [sirv.com](https://sirv.com/) — 智能图片CDN，提供实时图片优化和调整大小功能。免费套餐包含500MB存储和2GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 完整的图片优化和CDN服务，全球1500+节点。提供多种图片调整大小、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费套餐每月25GB CDN流量、25GB缓存存储和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 图片上传、强大处理、存储和交付，支持Ruby、Python、Java、PHP、Objective-C等多种语言库。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN使用）。
  * [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理，服务器零数据访问。免费上传1GB以内文件，不收集数据。
  * [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL，每秒15次请求。
  * [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
  * [file.io](https://www.file.io) - 2GB文件存储。文件下载一次后自动删除。提供REST API交互，限速每分钟1次请求。
  * [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图片、音频、视频等。
  * [GoFile.io](https://gofile.io/) - 免费文件共享和存储平台，支持网页UI和API。无限文件大小、带宽和下载次数，但十天无下载的文件会被删除。
  * [gumlet.com](https://www.gumlet.com/) — 图片和视频托管、处理和CDN流媒体服务。免费套餐每月250GB视频流量和30GB图片流量。
  * [image-charts.com](https://www.image-charts.com/) — 带水印的无限图片图表生成服务
  * [Imgbot](https://github.com/marketplace/imgbot) — Imgbot是优化图片的友好机器人，可节省时间。优化后的图片体积更小但质量不变。开源项目免费使用。
  * [ImgBB](https://imgbb.com/) — 无限图片托管服务。拖放图片到任意位置上传，单图限制32MB。上传后获取直接链接、BB代码和HTML缩略图。登录可查看上传历史。
  * [imgen](https://www.jitbit.com/imgen/) - 免费无限社交媒体封面图片生成API，无水印
  * [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐包含1000张原始图片、无限转换和100GB带宽。
  * [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费套餐支持1MB以内文件
  * [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务
  * [nitropack.io](https://nitropack.io/) - 自动前端优化加速（缓存、图片和代码优化、CDN）。免费套餐每月5000次页面浏览。
  * [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动所有云存储文件。基础套餐提供无限文件传输（单文件最大250MB）和五个加密文件。
  * [packagecloud.io](https://packagecloud.io/) — YUM、APT、RubyGem和PyPI的托管软件包仓库。提供有限免费套餐，开源项目可通过申请获取。
  * [getpantry.cloud](https://getpantry.cloud/) — 简单的JSON数据存储API，非常适合个人项目、黑客马拉松和移动应用！
  * [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传和管理方式。友好的用户界面和IPFS API使其成为平台、创作者和收藏者的最佳IPFS固定服务。免费1GB存储，支持API访问。
  * [placekitten.com](https://placekitten.com/) — 快速获取猫咪图片作为占位符的简单服务
  * [plot.ly](https://plot.ly/) — 图表绘制和数据共享。免费套餐包含无限公开文件和十个私有文件。
  * [podio.com](https://podio.com/) — 最多五人团队可使用基础套餐功能（用户管理除外）。
  * [QRME.SH](https://qrme.sh) - 快速美观的批量二维码生成器——无需登录、无水印、无广告。每次批量导出最多100个URL。
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表、图形和二维码
  * [redbooth.com](https://redbooth.com) — P2P文件同步，最多支持两个用户免费使用
  * [resmush.it](https://resmush.it) — 免费的图片优化API。已在WordPress、Drupal和Magento等常见CMS上实现。已处理超过70亿张图片，仍免费提供。
  * [Shotstack](https://shotstack.io) - 大规模生成和编辑视频的API。免费套餐每月20分钟渲染视频。
  * [tinypng.com](https://tinypng.com/) — PNG和JPEG图片压缩和调整大小API，每月免费500次压缩。
  * [transloadit.com](https://transloadit.com/) — 处理文件上传和视频、音频、图片、文档编码。开源项目、慈善机构和学生通过GitHub学生开发者包免费使用。商业应用可免费试用2GB。
  * [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN、媒体处理API和前端库以实现自动化图片优化。免费套餐每月3GB流量。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) — Uploadcare提供基于尖端算法的媒体管道终极工具包。开发者可免费使用所有功能：文件上传API和UI、图片CDN和源服务、自适应交付和智能压缩。免费套餐包含3000次上传、3GB流量和3GB存储。
  * [imagekit.io](https://imagekit.io) – 图片CDN，提供自动优化、实时转换和存储，几分钟即可与现有设置集成。免费套餐每月20GB带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive是基于绝对隐私和极致安全的零知识文件存储服务。注册即享10GB永久免费空间！
  * [degoo.com](https://degoo.com/) – 基于AI的云存储，免费20GB空间，支持三台设备，推荐奖励5GB（90天账户不活跃）。

  * [ImageEngine](https://imageengine.io/) – 全球易用的图片CDN服务，60秒内完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[免费开发者账户申请](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI文档处理工具，可将PDF、图片转换为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡/优惠券/促销活动的定制二维码，支持自定义样式、颜色和LOGO。
* [LibreQR](https://libreqr.com) – 注重隐私保护的免费二维码生成器，无追踪无数据收集。
* [Doradrop](https://doradrop.com) – 无限存储、零广告的文件共享平台，无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富主页模板，可快速使用模板代码包，还支持通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（无限制查看者）
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源SVG图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用（也提供付费组件集成）
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能转换工具（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线调色板生成与灵感获取工具
* [coolors](https://coolors.co/) - 免费配色方案生成器
* [CMYK转潘通](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号
* [Branition品牌色](https://branition.com/colors) - 精心挑选的品牌专用配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变代码（RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库资源站
* [figma.com](https://www.figma.com) - 在线团队协作设计工具（免费版含无限文件，最多2名编辑+3个项目）
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具（免费版支持无限查看者+2名编辑+3个项目）
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库（含模特/物权授权）
* [Gradientos](https://www.gradientos.app) - 极简梯度配色选择工具
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库（含数千图标，支持React/Flutter/Vue等框架）
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐等设计资源（免费版分辨率受限，需标注来源）
* [landen.co](https://www.landen.co) - 无代码建站工具（免费版支持1个完全可定制的网站）
* [Quant Ux](https://quant-ux.com/) - 完全免费开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成器（URL添加尺寸参数即可获取随机图片）
* [LottieFiles](https://lottiefiles.com/) - 全球最大Lottie动画平台（提供各平台动画工具与插件）
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集（含渐变/图案/blob等）
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台（免费版限1用户1项目）
* [Mindmup.com](https://www.mindmup.com/) - 免费无限量云存储思维导图工具（全平台即时同步）
* [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具（免费版含3用户5项目）
* [mockupmark.com](https://mockupmark.com/create/free) - 电商服装模型生成器（提供40个免费模板）
* [Modeldraw.com](https://modeldraw.com) - 完整图表工具（支持UML/流程图/思维导图等，无限成员实时协作）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) - 浏览器矢量编辑器（完全免费）
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具（实时协作分享）
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具（完全免费，支持SVG）
* [pexels.com](https://www.pexels.com/) - 免版税图库（提供免费关键词搜索API）
* [photopea.com](https://www.photopea.com) - 在线高级设计编辑器（兼容PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成服务（支持直接热链接）
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器端即时转换工具（无需上传，完全客户端处理）
* [Proto.io](https://www.proto.io) - 无代码交互原型工具（免费版含1用户1项目5原型100MB存储）
* [resizeappicon.com](https://resizeappicon.com/) - 应用图标尺寸调整管理工具
* [Rive](https://rive.app) - 多平台动画创作工具（个人永久免费）
* [storyset.com](https://storyset.com/) - 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成工具（200个免费模板）

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题，支持实时自定义颜色、字体等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，支持通过URL参数配置
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可免授权自由使用
* [unsplash.com](https://unsplash.com/) - 无限制商用/非商用的免费图库（随心所欲许可证）
* [vectr.com](https://vectr.com/) — 网页/桌面端免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级用户引导平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线样机编辑器，含海量免费设计模板
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页生成器，免费1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌LOGO库，内置简易编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 可商用免费SVG矢量资源库
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端开发平台，免费3个项目
* [vector.express](https://vector.express) — 多格式矢量文件转换工具
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出多种格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 企业LOGO查询API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费Bootstrap/Angular/React/Vue组件库
* [TW Elements](https://tw-elements.com/) - 基于TailwindCSS的Bootstrap组件重构版
* [DaisyUI](https://daisyui.com/) - 减少类名书写的TailwindCSS组件库
* [Scrollbar.app](https://scrollbar.app) - 网页滚动条设计工具
* [css.glass](https://css.glass/) - 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) - TailwindCSS渐变色合集
* [iconify.design](https://icon-sets.iconify.design/) - 100+图标库统一检索平台
* [NextUI](https://nextui.org/) - 免费现代化React/Next.js组件库
* [Glyphs](https://glyphs.fyi/) - 开源可编辑图标设计系统
* [ShadcnUI](https://ui.shadcn.com/) - 开源可定制组件库
* [HyperUI](https://www.hyperui.dev/) - 免费TailwindCSS组件合集
* [Calendar Icons Generator](https://calendariconsgenerator.app/) - 一键生成全年日期图标
* [Image BG Blurer](https://imagebgblurer.com/) - 图片背景模糊化生成器
* [Webstudio](https://webstudio.is/) - Webflow开源替代方案
* [Nappy](https://nappy.co/) - 黑人/棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) - Tailwind资源合集
* [Tailcolors](https://tailcolors.com/) - TailwindCSS v4调色板
* [Excalidraw](https://excalidraw.com/) - 免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) - 内置素材的免费图形设计工具
* [Flows](https://flows.sh/) - 产品引导平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台。可按UI/UX项目分类筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常来自非实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja 是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI & UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动截图] 探索非洲及全球领先公司的移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
  * [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 多个移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动截图] 精心挑选的应用商店设计截图集合。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP地理位置查询](https://ipgeolocation.io/) — 提供开发者免费计划，每月3万次请求
* [carto.com](https://carto.com/) — 基于您的数据与公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 面向Web/桌面/移动端的地图API与SDK，支持地理数据存储、分析、地理编码、路径规划等功能。每月免费额度：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算、5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索与情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示服务与SDK，提供地理空间解决方案
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与SDK，支持地图可视化。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap免费地理编码服务，提供全球地址搜索与反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境，支持300+个PHP版本运行代码片段
* [Android Studio](https://developer.android.com/studio) — 谷歌官方Android开发工具，支持全类型Android设备应用开发。开源IDE永久免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux和ChromeOS系统
* [AndroidIDE](https://m.androidide.com/) — 开源Android设备IDE，支持基于Gradle的真实Android应用开发
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境、工具平台和应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台知名可扩展文本编辑器。免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，支持升级到高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI界面
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理器，支持标签分类
* [Code::Blocks](https://codeblocks.org) — 免费Fortran/C/C++ IDE，开源支持Windows/macOS/Linux系统
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持代码编写（代码块、自动补全、单元测试）、代码理解（完整代码库知识）、修复和查找功能。提供VS Code、JetBrains和在线版本
* [codiga.io](https://codiga.io/) — 支持在IDE中直接搜索、定义和复用代码片段的编程助手。个人和小型团队免费
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类、搜索和标签功能，完全免费无限制
* [cocalc.com](https://cocalc.com/) — （原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：Python/LaTeX/Jupyter Notebooks/SageMath/scikitlearn等
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，基于GitHub Codespaces为学生和教师优化
* [codepen.io](https://codepen.io/) — 前端开发者的代码游乐场
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular/Preact等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 独立开发可视化Web组件，支持故事化展示、测试和npm发布
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，开源社区驱动。Red Hat提供在线实例[workspaces.openshift.com](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据服务，加速产品概念验证阶段
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4/Grok/Deepseek/Gemini等AI模型的编程助手，原生集成CLI和各类IDE。免费版包含基础AI模型访问权限
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux和IDE工具，免费版每日5次VM使用权限
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持多语言、基于Linux容器的网页终端、端口转发、自定义URL、实时协作、Git/Subversion等功能（免费版提供1GB内存/10GB存储的5个容器）
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费版REST API每日200次编译额度
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具和IDE套件（包括[IntelliJ IDEA](https://www.jetbrains.com/idea/)/[PyCharm](https://www.jetbrains.com/pycharm/)等），学生/教师/开源团队可申请免费授权
* [jsbin.com](https://jsbin.com) — 前端开发游乐场（HTML/CSS/JavaScript），同时支持Markdown/Jade/Sass
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API端点，支持本地部署
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 免费AI驱动的云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务，用于生成虚假JSON数据
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 测试数据生成工具，支持CSV/JSON/SQL/Excel格式，可模拟后端API
* [Mocklets](https://mocklets.com) - HTTP协议API模拟器，终身免费版支持快速并行开发和全面测试
* [Paiza](https://paiza.cloud/en/) — 无需配置的浏览器开发环境，免费版提供24小时有效期的服务器（每日4小时运行时间，2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 支持Sass/Less/Stylus/Pug/Haml/CoffeeScript/TypeScript等语言的实时编译工具，可自定义工作流
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程平台，支持多种语言（运行代码无需注册）。同时提供面向初/中级开发者的免费课程
* [stackblitz.com](https://stackblitz.com/) — 全栈应用云端IDE，支持主流NodeJs框架。快速创建项目链接：[https://node.new](https://node.new)
* [Sublime Text](https://www.sublimetext.com/) - 广受欢迎的多功能文本编辑器，高度可定制化，适用于代码编辑和文本处理任务

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面、Web和云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）。
* [VSCodium](https://vscodium.com/) — 社区驱动的、无遥测/跟踪的、自由许可的Microsoft编辑器VSCode二进制发行版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化你的编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) — Wave是一款开源、跨平台的终端工具，支持无缝工作流。内联渲染任何内容，保存会话和历史记录，基于开放的Web标准，支持MacOS和Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，包含故事和测试功能。
* [PHPSandbox](https://phpsandbox.io/) — 在线的PHP开发环境。
* [WebDB](https://webdb.app) — 免费高效的数据库IDE，功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等。
* [Zed](https://zed.dev/) — Zed是一款高性能、多人协作的代码编辑器，由Atom和Tree-sitter的开发者打造。
* [OneCompiler](https://onecompiler.com/) — 免费的在线编译器，支持70多种语言，包括Java、Python、C++、JavaScript等。

**[⬆️ 返回顶部](#目录)**

## 分析与事件统计

  * [Userbird](https://userbird.com) - 替代Google Analytics的热图分析工具，支持会话录制和收入追踪
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史仪表板（突破14天限制）。免费版支持监控单个仓库
* [Dwh.dev](https://dwh.dev) - Snowflake数据云观测方案，个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库信息同步至CRM/营销/客服工具。免费版支持1个数据目标
* [Avo](https://avo.app/) - 简化的分析发布流程。提供统一跟踪方案、类型安全跟踪库、应用内调试器和数据观测功能。免费版支持2名成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费版支持1万移动用户，含深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台。免费版支持从数据仓库同步10个字段至60+SaaS平台
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持单站3000次浏览分析
* [Databox](https://databox.com) - 多平台数据整合的商业洞察工具。免费版支持3用户/仪表板/数据源，1100万历史数据
* [Hitsteps.com](https://hitsteps.com/) - 单站每月2000页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台（非商业用途免费），可自托管。免费版含无限站点、6个月数据保留和10万次月浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私保护型Google Analytics替代方案。免费版支持100万次月浏览（无需信用卡）
* [Expensify](https://www.expensify.com/) - 费用报告工具，免费个人审批流程
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，免费支持3000次月事件
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为。免费版支持1万次月会话
* [Hotjar](https://hotjar.com) - 网站分析与报告。免费版含2000次日浏览/100次日快照（上限300）/3个全年存储的热图。应用内调查工具免费版支持3个调查+3个反馈组件（20次月响应）
* [Keen](https://keen.io/) - 自定义数据分析可视化平台。免费版支持1000次月事件
* [Yandex.Datalens](https://datalens.yandex.com/) - 俄罗斯Yandex云数据可视化服务（完全免费）
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 10万月跟踪用户，无限数据历史与席位（美/欧数据中心）
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析工具（免费50万次API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费版支持1网站+1iOS+1Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具。免费版限制100万用户许可
* [Row Zero](https://rowzero.io) - 极速互联电子表格。支持直连数据库/S3/API，即时处理百万行数据。永久免费3个工作簿
* [sematext.com](https://sematext.com/cloud/) - 免费5万次月操作，1天数据保留，无限仪表板
* [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版提供5项指标结果/1个月APP数据/3个月网站数据
* [StatCounter](https://statcounter.com/) - 网站访问分析。免费版统计最近500位访客
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试的全能平台。免费100万次月计量事件
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau在线开发沙盒（最新预发布版），供开发者全面测试功能
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试平台。免费版支持单用户无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台（50万次操作/90天数据保留/30+一键集成）
* [counter.dev](https://counter.dev) - 简约隐私友好的网站统计工具（支持捐赠付费）
* [PostHog](https://posthog.com) - 完整产品分析套件（免费100万次月事件）+无限应用内调查（250次月响应）
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（免费计划+开源项目专属个人订阅）
* [Microsoft Clarity](https://clarity.microsoft.com/) - 微软免费用户行为录制工具
* [Beampipe.io](https://beampipe.io) - 简约隐私优先的网站分析（免费5域名+1万次月浏览）
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析（免费2万次月事件），支持多平台SDK
* [Trackingplan](https://www.trackingplan.com/) - 自动化数字分析监测与协作平台（支持生产环境实时流量分析）
* [LogSpot](https://logspot.io) - 全功能统一分析平台（含嵌入式组件与自动化机器人）。免费版1万次月事件
* [Umami](https://umami.is/) - 简约快速的隐私优先开源Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私保护分析工具（无限浏览/访客/热图）。免费支持3域名+各域600次会话回放
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具。免费版含1万次月事件+产品日志+每周洞察

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站和产品分析工具。免费版每月包含3,000次事件记录。
* [Rybbit](https://rybbit.io) - Google Analytics的开源无Cookie替代方案，操作体验提升10倍。免费版支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每个网站：每天1,000次页面浏览，三个热图，三个小工具，免费错误跟踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，包含用于错误复现的开发工具、实时会话支持以及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，错误跟踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[请点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每个网站：每月1,050次页面浏览，无限热图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 每月2,500次会话，免费适用于一个网站
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 每月500次会话，免费适用于一个网站
* [mousestats.com](https://www.mousestats.com/) — 每月100次会话，免费适用于一个网站
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**  

（注：根据中文技术文档惯例，保留了"API"、"JSON"等专业术语不翻译，调整了量词表达方式，并将"Back to Top"本地化为"返回顶部"。最后一行锚点链接保持原格式不变）

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入10,000美元以下免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者位置自动调整定价（购买力平价），助您拓展全球业务。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 开源SDK一站式解决方案，为iOS、Android、React Native、Flutter、Unity或网页应用提供移动端应用内订阅集成。每月收入10,000美元以下免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月10,000次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
* [CurrencyApi](https://currencyapi.net/) — 实物货币与加密货币实时汇率，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限额。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费微型计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API盈利，支持连接Stripe、Chargebee等。免费层级每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - iOS和Android应用内购与订阅全功能平台，含无代码支付墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购与订阅托管后端服务（iOS和Android）。每月追踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。私有用途每月300次请求，每分钟10次限制。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
  * [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant 虚拟机的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的想法、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中建立活跃的社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可用于博客评论、Wiki 页面等场景！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万个网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随您支付"模式，提供"少数域名下的完整行为与外观控制权限"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕捉时间点和视窗尺寸。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图服务。每日250次免费请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站的截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速获取截图。免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度自定义的网站快照服务。每月100次免费快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照，支持png、gif和jpg格式，包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费层每日500页。自2017年起提供免费层。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月100次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是一款全托管的移动应用持续集成/持续交付服务。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) — 一个极速x86虚拟机，可直接在浏览器中运行Linux和Windows 2000。
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统。
* [v86](https://copy.sh/v86) — 基于x86架构的虚拟机，支持在浏览器中直接运行Linux及其他操作系统。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现"隐私设计"，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策/Cookie政策及同意管理解决方案。免费版提供有限的隐私政策/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理框架工具。免费版在访客数量受限情况下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理(DSARs)和数据映射。免费版包含核心同意管理功能，并为验证通过的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的截图，便于在社交媒体分享。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如用于Twitter/Facebook帖子）或链接（如用于聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API的SaaS平台，用于控制、构建和评估物联网设备。免费开发者计划支持5台设备，含免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅地展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标插件。
* [Codepng](https://www.codepng.app) - 为源代码生成精美快照，便于在社交媒体分享。
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为截图，便于在社交媒体分享。
* [Cronhooks](https://cronhooks.io/) - 定时或周期性触发Webhook。免费版支持5个临时计划任务。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。免费版每月支持5次预约，包含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单的URL或域名转发工具。免费版支持5个域名和每月20万次请求。
* [Elementor](https://elementor.com) — WordPress网站构建工具。免费版提供40多个基础组件。
* [Exif Editor](https://exifeditor.io/) — 即时在线查看、编辑、清除、分析图片/照片元数据，包括GPS位置信息。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞管理解决方案。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook支持：内置队列、退避重试和日志功能。免费版每天100次投递，14天保留期，支持3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 查询域名、网站或IP的主机信息（如ASN、ISP、地理位置等），并提供多种主机和DNS相关工具。
* [kandi](https://kandi.openweaver.com/) — 加速应用开发：通过代码片段和开源库复用快速构建自定义函数、用例和完整应用。
* [Base64解码/编码工具](https://devpal.co/base64-decode/) — 免费在线Base64数据解码与编码工具。
* [newreleases.io](https://newreleases.io/) - 通过邮件、Slack、Telegram、Discord或自定义Webhook接收GitHub、GitLab、Bitbucket等平台的新版本通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的EXIF数据，包括GPS位置和元信息。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板管理PDF模板，通过API动态生成PDF。免费版每月300份文档。
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode插件为代码片段生成美观可定制的截图。
* [QuickType.io](https://quicktype.io/) - 快速从JSON、Schema或GraphQL生成模型/类/接口及序列化代码，支持多种语言。将JSON转换为类型安全的优雅代码。
* [RandomKeygen](https://randomkeygen.com/) - 免费移动端工具，生成多种随机密钥和密码，用于保护应用、服务或设备。
* [ray.so](https://ray.so/) - 为代码片段生成精美图片。
* [readme.com](https://readme.com/) — 轻松创建美观文档，开源项目免费。
* [redirection.io](https://redirection.io/) — 面向企业、营销和SEO的HTTP重定向管理SaaS工具。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理HTTPS重定向。免费版支持10个来源和每月10万次访问。
* [Renamer.ai](https://renamer.ai) — AI驱动的文件重命名工具，支持OCR、元数据提取和20多种语言的自动化处理。免费版每月15个文件，含桌面应用、批量重命名和标准支持。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET、POST、PUT、DELETE等方法，含Headers和Token认证，提供基础登录系统保存请求记录。
* [Smartcar API](https://smartcar.com) - 车辆API，支持定位、油量/电量查询、里程读取、车门解锁等功能。
* [snappify](https://snappify.com) - 帮助开发者创建精美视觉内容，从代码片段到完整技术演示。免费版支持同时3个快照，无限下载和每月5次AI代码解释。
* [日出日落时间API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed服务，含导出和分析功能。免费版定制性较低。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费版每份调查限10个问题和100个回复。
* [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话应用，支持全渠道部署（从网站实时聊天到WhatsApp）。免费版不限机器人数量。
* [UUID生成器](https://newuuid.com/) - 即时生成UUID v1/v4/v7、GUID、Nil UUID、CUID v1/v2、NanoID和ULID，具备企业级性能和安全性。
* [Versionfeeds](https://versionfeeds.com) — 为喜爱的软件创建自定义RSS更新订阅。免费版支持前3个订阅源。
* [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
* [Webacus](https://webacus.dev) — 提供多种免费开发者工具，用于编码、解码和数据处理。
* [Volume Shader BM](https://volumeshaderbm.org) — 免费的基于浏览器的GPU基准测试（WebGL），帮助开发者跨浏览器和设备可复现地测试着色器性能。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包。
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源。
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，如2D、3D、音频、GUI。
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF。
* [CraftPix](https://craftpix.net) — 免费/付费资源，如2D、3D、音频、GUI、背景、图标、瓦片集、游戏套件。
* [Game Icons](https://game-icons.net/) — 免费可定制的SVG/PNG图标，基于CC-BY许可。
* [LoSpec](https://lospec.com/) — 在线工具，用于创建像素艺术和其他限制性数字艺术，提供大量教程/调色板列表供游戏选择。
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D资源及音频、图标、瓦片集、游戏套件的市场平台。也可用于展示个人艺术作品集。
* [Rive](https://rive.app/community/) — 社区资源，同时可使用其免费计划创建自己的游戏资源。
* [Poly Pizza](https://poly.pizza/) — 免费的低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) — 超过8,000个免费/付费3D模型和PBR材质，用于制作纹理。
* [Kenney](https://www.kenney.nl/assets/) — 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资源。
* [Poliigon](https://www.poliigon.com/) — 免费和付费的纹理（支持可变分辨率）、模型、HDRIs和笔刷。提供免费插件导出到Blender等软件。
* [Freesound](https://freesound.org/) — 免费协作音效库，提供多种CC许可。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优质的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单
* [github.com — 开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于开发Microsoft 365解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）自动续期
* [PHPhub](https://phphub.net/) — PHP工具集合，包含格式化器、验证器、沙盒环境、正则测试器等
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的免费正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 面向服务器及数据库（MySQL/PostgreSQL/MongoDB）的备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直连数据库/文件系统/应用备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题与UI套件，助您快速构建应用！
* [Web.Dev测速工具](https://web.dev/measure/) — 免费网站性能检测工具，可优化SEO提升搜索引擎排名
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/生成测试数据等，拥有愉悦的交互界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门方案，支持创建无限导入器及100MB文件上传
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮库
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的离线工具集（含水印生成/录屏/编解码/加密/代码格式化等），完全免费且不上传云端处理
* [IT工具集](it-tools.tech) - 面向开发者及IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具集（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）
* [regex101正则测试](https://regex101.com/) — 免费正则表达式在线调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（含格式化/压缩/转换器）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）
* [Glob模式测试器](https://globster.xyz/) — 可视化设计与测试glob模式的平台，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库直接还原
* [360转换器](https://www.360converter.com/) - 免费视频转文字/音频转文字/实时语音转文字/YouTube视频转文字/添加视频字幕工具，适合短视频处理
* [最佳二维码生成](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升网站排名，免费版支持手动发布1篇内容
* [PageTools](https://pagetools.co/) - 永久免费的AI工具套件，一键生成网站政策/社交媒体资料/网页内容
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/容器/编程/DevOps/网络）
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具，每月10张免费发票额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）

**[⬆️ 返回顶部](#目录)**