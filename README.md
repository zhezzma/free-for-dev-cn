# free-for.dev

开发者与开源作者如今能享受到众多提供免费层级的服务，但要全面了解这些选项需要耗费大量时间进行调研决策。

这里整理了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他相关服务。

本清单特别聚焦于基础设施开发者（系统管理员、DevOps从业者等）可能用到的实用工具。虽然我们喜爱所有免费服务，但仍需保持主题相关性。尽管存在一些灰色地带，但这是份主观性清单——若未采纳您的贡献建议，还请见谅。

这份清单汇集了1600多位贡献者通过Pull Request、评审、创意和实际工作完成的成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来添加新服务，或移除已变更或停服的项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限"即服务"类产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用版），若采用时间计量则至少需保障一年免费期。我们从安全角度评估免费层级——支持SSO认证，但拒绝将TLS功能限制在付费层的服务。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件与统计](#分析、事件与统计)
  * [API、数据与机器学习](#API、数据与机器学习)
  * [制品仓库](#制品仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [CDN与防护](#CDN与防护)
  * [持续集成与持续交付](#持续集成与持续交付)
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
  * [域名](#域名)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式AI](#生成式AI)
  * [基础设施即服务](#基础设施即服务)
  * [IDE与代码编辑](#IDE与代码编辑)
  * [国际手机号验证API与SDK](#国际手机号验证API与SDK)
  * [问题跟踪与项目管理](#问题跟踪与项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发与反馈](#移动应用分发与反馈)
  * [管理系统](#管理系统)
  * [消息与流处理](#消息与流处理)
  * [其他](#其他)
  * [监控](#监控)
  * [平台即服务](#平台即服务)
  * [软件包构建系统](#软件包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关与无Mac构建iOS应用](#Flutter相关与无Mac构建iOS应用)
  * [搜索](#搜索)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证、授权与用户管理](#认证、授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道、WebRTC、WebSocket服务器及其他路由](#隧道、WebRTC、WebSocket服务器及其他路由)
  * [测试](#测试)
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

## 主流云服务商的永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储空间，每日5万次读取、2万次写入和2万次删除操作
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（除中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储空间，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux Shell/主IDE，5GB持久化存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，36万GB秒内存，18万vCPU秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每日120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebook开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

* [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月1万次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份存储（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，2万次Get请求和2000次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

* [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM和1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每日60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目在Linux/macOS/Windows上无时长限制
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每日8000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），含有限次数的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，免费支持1万份文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为一个VM或最多4个VM使用
       - 当[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据采集点，10亿个数据检索点
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500 Mbps * 核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知 - 每月100万次投递选项，1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每日500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS、DDoS防护、CDN含免费SSL、防火墙规则和页面规则、WAF、机器人缓解、不限次数的速率限制（每域名1条规则）、分析、邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) - 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），提供构建、部署和扩展应用所需的一切功能，让您无需操心"服务器相关事务"，可在任何云平台上运行
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供远程状态管理和团队协作功能，最多支持500个资源
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用，包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限制部署静态站点、网络服务和环境，每月提供20次免费任务执行（包含预览和自动部署功能）

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户可享无限量公有及私有Git仓库，并提供CI/CD流水线支持
* [chiselapp.com](https://chiselapp.com/) — 无限量公有及私有Fossil代码仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB存储空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目可享无限量公有及私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包/容器托管、项目管理和问题追踪功能
* [GitGud](https://gitgud.io) — 无限量公有及私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD功能
* [GitHub](https://github.com/) — 无限量公有仓库及私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手功能
* [gitlab.com](https://about.gitlab.com/) — 无限量公有及私有Git仓库（最多5名协作者）。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件托管平台，包含CI、静态页面、项目页面和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制系统
* [ionicframework.com](https://ionicframework.com/appflow) — Ionic应用开发代码库及工具集，同时提供Ionic仓库
* [NotABug](https://notabug.org) — 基于Git的自由软件代码协作平台，专为自由许可证项目设计
* [OSDN](https://osdn.net/) — 面向开源软件开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库托管
* [Pagure.io](https://pagure.io) — 基于Git的自由开源软件代码协作平台，专为FOSS许可证项目设计
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储空间，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) — 无限量免费开源分布式版本控制系统。其独特优势在于基于完善的补丁理论，易学易用且便于分发，能解决git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源项目及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/SVN）包含50MB存储空间
* [RocketGit](https://rocketgit.com) — 基于Git的代码托管服务，支持无限量公有及私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) — GNU项目专属的自由软件协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 非GNU项目专属的自由软件协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [IP.City](https://ip.city) - 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) - 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
* [Apify](https://www.apify.com/) - 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier&Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，含自动API合约验证和监控。免费计划支持每日最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个API，注重质量、一致性和可靠性。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性工具，用于模型监控和数据质量、性能漂移等问题根源分析。免费支持两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地发布AI代理，速度提升5倍以上。独立开发者和小团队（3人）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每日50次免费请求，公共仪表盘，开放端点（任何拥有仪表盘链接者均可查看提交和响应）。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、邮箱和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) - 网络数据提取和监控。免费每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
* [Calendarific](https://calendarific.com) - 覆盖200+国家的企业级公共假期API服务。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) - 自定义人脸识别和检测的图像API，可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) - 实用工具API平台，完整访问包括文档转换、病毒扫描等在内的扩展API库，每月600次调用，仅限北美可用区，最大文件2.5MB。
* [Colaboratory](https://colab.research.google.com) - 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - 涵盖从训练到生产全流程的MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整数据溯源。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月免费100个订单和最多1,000个SKU。
* [Composio](https://composio.dev/) - AI代理和LLMs的集成平台，整合200+工具跨越智能互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API及Node.js/PHP/Python库。付费计划支持50GB文件，免费版限制文件大小(20MB)和转换次数(30次/天，300次/月)。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮编等广泛信息的API微服务。免费层每日100次请求。
* [Coupler](https://www.coupler.io/) - 应用间同步的数据集成工具，可创建实时仪表盘和报告，转换处理数值，收集备份洞察。免费版限1用户、1数据连接、1数据源和1数据目标，且需手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) - 无需代理、基础设施或浏览器即可爬取网站。自动解决验证码和防封禁问题。前1,000次调用免费。
* [CurlHub](https://curlhub.io) - 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用实时货币数据API。免费计划每月5,000次调用。
* [Cube](https://cube.dev/) - 帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致定义并交付至每个应用。最快方式是通过Cube Cloud使用，免费层每日限1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单免费的文件分享。数据访问后自毁。通过浏览器或命令行客户端上传下载数据。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。在Airtable中运行类似Postman的API请求界面。预建数十个应用集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。含10GB存储和每月120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展(Google Chrome, MS Edge)，用于从网页提取CSV或Excel数据。免费版每月500页。
* [Datapane](https://datapane.com) - 用Python构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每日1,000次请求。CC-BY 4.0许可的精简数据库也免费。
* [DB Designer](https://www.dbdesigner.net/) - 云端数据库模式设计和建模工具，免费入门版含2个数据库模型，每个模型10张表。
* [DeepAR](https://developer.deepar.ai) - 适用于任何平台的增强现实人脸滤镜SDK。免费版支持每月10位活跃用户(MAU)并追踪最多4张人脸。

  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据用于构建Covid-19相关应用
* [Doczilla](https://www.doczilla.app/) — SaaS API服务，支持直接从HTML/CSS/JS代码生成截图或PDF。免费版每月可生成250份文档
* [Doppio](https://doppio.sh/) — 托管式API，采用顶尖渲染技术生成并私有存储PDF和截图。免费版每月允许生成400份PDF和截图
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页和物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成包含实时文档和用户管理的完整REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20个积分
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费版每月允许50次API调用并提供模板库
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。本地使用免费
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具，免费试用包含2个项目（每个项目10张表）
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费版每月250页，支持无限用户和3个模板
* [file.coffee](https://file.coffee/) - 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API，免费版每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) - 基于浏览器的免费JSON格式化/验证/比较/压缩工具
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费Micro版每月500次交易检测
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的定位服务，免费API每月500次查询
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费版每日2,000次请求
* [Glitterly](https://glitterly.app/) - 通过API动态生成图像，支持RESTful API和无代码集成。免费层每月50张图像和5个模板
* [Hex](https://hex.tech/) - 协作式数据平台（支持Notebook/数据应用/知识库），免费社区版最多5个项目
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)平台，免费版每日100个事件（保留7天历史记录）
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器
* [huggingface.co](https://huggingface.co) - Pytorch/TensorFlow/JAX的NLP模型构建/训练/部署平台，免费版每月3万字符输入
* [Hybiscus](https://hybiscus.dev/) - 声明式PDF报告生成API，14天免费试用含50份单页报告（可自定义调色板和字体）
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70+云平台（如Exact Online/Twinfield等），含数据复制交换功能。开发者免费版有数据量限制
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费（每分钟限45次请求）
* [ipbase.com](https://ipbase.com) - IP定位API，永久免费版每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API，开发者永久免费版每日1,000次请求
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，免费1,000次请求
* [IPLocate](https://www.iplocate.io) — IP定位API（每日1,000次免费），含代理/VPN/主机检测、ASN数据、IP关联企业信息等，并提供免费可下载的IP与国家/ASN映射数据库
* [IP2Location](https://www.ip2location.com) — 免费版IP定位服务，提供LITE数据库免费下载
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API，免费版每月5万积分（含500次WHOIS查询）
* [ipapi](https://ipapi.co/) - Kloudend公司提供的AWS架构IP定位API，免费版每月3万次查询（每日1k次）
* [ipapi.is](https://ipapi.is/) - 开发者友好的IP定位API（含最佳主机检测能力），免注册1,000次查询
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（免费版每月5万次），提供地理定位/企业/运营商/IP范围/域名/滥用联系人等数据
* [IPQuery](https://ipquery.io) — 无速率限制和定价的开发者无限IP API
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月5万次免费查询
* [JSON2Video](https://json2video.com) - 视频编辑API（支持编程和无代码方式生成营销视频）
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP（免注册无限请求）
* [JSON Serve](https://jsonserve.com/) — 免费JSON存储与REST API生成服务
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API（可自定义状态码/头部/响应体）
* [JSONSwiss](https://www.jsonswiss.com/) - 功能强大的在线JSON查看器/编辑器/验证器，支持AI修复/树形视图/表格视图/12+语言代码生成/JSON转CSV/XML/YAML等格式转换

  * [Kreya](https://kreya.app) — 免费gRPC图形界面客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC接口。
* [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型效果。免费提供最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并向客户发出警报。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月提供100次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。永久免费层级允许每天100次API调用。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报天气数据。预报基于多天气模型的机器学习组合以实现更高准确度。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为元标签标准化、美观链接预览、爬取能力或截图服务等数据。每天50次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，标准化文档处理层以自动化应用工作流。免费层级每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。精美易维护的UI组件、应用内搜索和交互式演练场。1名编辑者免费。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的工具。适用于原型设计/测试/学习。每个免费项目可创建2个资源。
* [Mockfly](https://www.mockfly.dev/) — 可信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的模拟GraphQL和REST API工具。简单REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，在云端选择要模拟的端点并检查流量，完全免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易Web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。前端开发、QA测试和DevOps团队的理想选择。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和Docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的呈现方式。适用于测试Control D等基于规则的DNS分流工具。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价域名。每日免费查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件并返回JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问权限。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者导向PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和API渲染。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费每日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 通过API开发协作平台Postman简化工作流并更快创建更好API。Postman应用永久免费。Postman云功能在特定限制下也永久免费。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL接口设计与测试
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化完整平台。免费计划包含5个部署工作流和每月500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍易用性AI网页爬取，接近零学习成本，节省现有工作流85%+时间，比人工研究快4倍且不妥协，包含所有研究任务的REST API端点。每月前1000积分免费。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者通过趣味挑战（含解决方案！）和交互示例连接数千个API进行开发。
* [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg的REST API，无需处理基础设施即可在线运行FFmpeg。含月度处理配额和4个vCPU的免费层级。
* [RequestBin.com](https://requestbin.com) — 创建接收HTTP请求的免费端点。发送到该端点的所有HTTP请求及其有效载荷和头部将被记录，便于观察来自Webhook等服务的建议。
* [reqres.in](https://reqres.in) - 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层每月30积分。
* [ROBOHASH](https://robohash.org/) - 从任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API用于爬取。匿名爬取无需担心限制、封锁或验证码。每月前100次成功爬取免费（含JavaScript渲染，联系支持可获更多额度）。

  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将任何Google表格转换为RESTful API。提供免费计划，每张表格包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API可进行网站截图、审计、TLS扫描、DNS查询、TTFB测试等。免费计划每月提供100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月包含100次成功API调用。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供节省时间和成本的开发工具。免费版每月包含300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件即可通过API即时访问数据，加速应用开发。免费计划包含2个API和每月2,500次调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化器、验证器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS平台。免费计划提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。每月免费发送50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索API，提供快速洞察和全面研究能力，可整理研究成果。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天1,000次免费请求。提供IP地址的位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，包含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。提供高级API日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币和加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐小时/每日预报和天气警报。整合AI模型和ML系统分析多源气象数据，提升预报准确率。免费层每月10,000次API调用。
* [Webhook Store](https://www.openwebhook.io) - 存储第三方webhook并在本地调试的工具（类似ngrok）。开源且可自托管。提供免费个人域名*username*.github.webhook.store和公共域名*anything*.webhook.store。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费版每月25,000个token额度（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转化为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页抓取API，定价透明。每月1,000次免费API调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，提供全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API和邮政编码验证服务。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持设计、构建和部署边缘API。分钟级实现API密钥认证、速率限制、开发者文档和货币化功能。原生支持OpenAPI，完全可编程（Web标准API和Typescript）。免费版包含10个项目、不限量生产边缘环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，帮助快速定位两个JSON数据结构间的差异。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 提供1GB免费的私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包和Docker注册表的私有云仓库。开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费版提供10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 团队专属聊天应用。公开群组免费使用，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能匹配最佳会议时间，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与预约工具。免费版支持每位用户连接1个日历，会议次数不限，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台，具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队专用的免费实时Scrum Poker工具，支持无限成员快速估算故事点
* [Telegram](https://telegram.org/) — 为所有人提供快速可靠的消息与通话服务。大容量群组、用户名系统、桌面客户端和强大文件共享功能尤其适合商业用户和小型团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 团队实时语音协作工具，集成IDE配对编程、终端共享、视频通话和屏幕共享功能，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月含10,000分钟音视频时长
* [evernote.com](https://evernote.com/) — 信息管理工具，支持笔记共享与协同编辑
* [Fibery](https://fibery.io/) — 互联工作空间平台，单人用户免费使用，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队沟通工具，免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台，通过可定制虚拟空间实现真实社交体验，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册的语法驱动看板工具，完全免费无功能限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间，会议次数不限，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动的每日报告工具，含推送可视化、同伴认可系统和自定义提醒功能。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具，公开/私密房间数量不限，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档编辑工具，类似Google Docs但专注Markdown。私有笔记的协作者人数和模板功能将受[限制](https://hackmd.io/pricing)
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的免费全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实远程协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意提交与投票平台，免费支持1个社区的25名成员
* [Igloo](https://www.igloosoftware.com/) — 文档、博客、日历共享的企业门户，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议工具，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 在Slack任意频道、群组或私信中输入/meet即可发起Google Meet，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签分类、多工作区和协作功能。免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约共享资源（如会议室、开发环境、服务器等），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈意见的工具
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享功能和Passkeys的密码管理器，支持网页、浏览器扩展、移动端和桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频会议与屏幕共享的免费工具
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理的一站式工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作笔记应用，被定义为集笔记记录、项目管理于一体的全能工作空间，支持多平台应用和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编辑器的免费编程面试平台，支持浏览器编译运行代码，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁的团队时间表与工时追踪应用，免费版支持10名用户的基本时间统计与报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加可视化评审功能，无需部署网站。免费版每月10个页面，总存储100MB
* [Pendulums](https://pendulums.io/) - 界面友好、数据直观的免费时间管理工具
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音视频通话，并易于与其他服务集成。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息记录和完整历史消息存储。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB空间
  * [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告。
  * [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器与协作者共享屏幕。
  * [Slab](https://slab.com/) — 面向团队的现代知识管理服务。10人以下免费。
  * [slack.com](https://slack.com/) — 无限用户免费使用（部分功能受限）
  * [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务提供商的状态页。
  * [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个看板墙、无限用户和1GB存储。
  * [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载问题。永久免费个人版。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点传输。无需插件、注册或付费
  * [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持看板泳道和完整Scrum实现，集成时间追踪功能。免费支持5个用户和3个项目组合。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程。包含面向远程团队的完整休假管理功能。5人以下小团队免费。
  * [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费使用。
  * [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪软件。轻松集成Jira/Trello/Asana等项目管理工具。
  * [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代方案）- 无限用户，每个工作区10GB存储和10GB音视频流量。
  * [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用一体化项目管理应用。
  * [twist.com](https://twist.com) — 异步友好的团队通讯应用，保持对话条理清晰。提供免费无限量方案，合格团队可享折扣。
  * [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，具备智能箭头、吸附对齐、便利贴和SVG导出功能。支持多人协作编辑，另有官方VS Code扩展插件。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签/任务管理器，提供可定制在线桌面环境与文件夹协作功能。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
  * [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织可享Nano级免费套餐。
  * [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in）
  * [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过精简Python/TypeScript脚本快速构建生产级多步自动化和内部应用。免费用户最多可创建/加入3个非高级工作区。
  * [vadoo.tv](https://vadoo.tv/) — 简化的视频托管与营销平台。单键上传视频，支持录制/管理/分享等功能。免费版每月提供10个视频、1GB存储和10GB带宽
  * [userforge.com](https://userforge.com/) - 互联在线角色画像、用户故事和场景映射工具。保持设计与开发同步，免费支持3个角色和2名协作者。
  * [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，提供25个视频和品牌化播放器的营销工具
  * [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务。不限数量不限次数分享5GB以内文件。
  * [Wormhole](https://wormhole.app/) - 端到端加密分享5GB以内文件（有效期24小时）。超过5GB文件采用点对点直传。
  * [zoom.us](https://zoom.us/) — 安全视频/网络会议解决方案。免费版限时40分钟。
  * [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版包含1万条可搜索历史记录和5GB文件存储，另提供可自托管开源版本。
  * [robocorp.com](https://robocorp.com) - 自动化运维开源技术栈。免费试用云功能并实现简单自动化，每月240分钟机器人运行时长+10次助手执行+100MB存储。
  * [Fleep.io](https://fleep.io/) — Slack替代方案。小团队免费版包含完整消息历史、无限私聊、1个群组会话和1GB文件存储。
  * [Chanty.com](https://chanty.com/) — 另一款Slack替代工具。永久免费版支持10人以下小团队，包含无限公私会话、可搜索历史、无限1对1语音通话、无限语音消息、10个集成和20GB团队存储。
  * [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，用于收集网站/PDF/图片的数字化反馈。
  * [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台。免费版提供无限频道/剧本/看板/用户和10GB存储等。
  * [Webvizio](https://webvizio.com) — 网站反馈工具与缺陷报告系统，直接在实时网站/Web应用/图片/PDF/设计文件上开展开发协作。
  * [Pullflow](https://pullflow.com) — 提供跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
  * [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费版支持100人50分钟会议。
  * [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库和API）。开发者个人免费。
  * [transfernow](https://www.transfernow.net/) — 最简单快速的加密文件传输界面。无需订阅即可发送照片/视频等大文件。
  * [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易代码粘贴站点。

  * [腾讯实时音视频（Tencent RTC）](https://trtc.io/) — 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、语法高亮编辑器等功能。
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟、画布或变通方案。免费版功能完整可用。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。开发者可享免费套餐。同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 与 API 工具包。开发者可享免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统。内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月带宽和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础版每月支持 10 万次 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS。完全免费的平台，用于本地或云端管理资产与数据库内容，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言支持（含交付与管理 API）及自定义元素功能。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面。社区计划包含单用户无限 API 调用、文档、自定义类型、资源与多语言支持。开源内容项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境与实时托管数据库。每个项目免费包含无限管理员用户、3 个非管理员用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划含 3 个用户、500 个内容项、3 种内置角色、25+5 种内容类型、全功能 REST API、文档预览生成及 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown、MDX 和 JSON。基础版免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，让使用任何 CMS/API/数据库构建网站重获乐趣。部署能提升流量、转化率与收益的无头网站！
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL 优先 API，助您从传统方案迁移至 GraphQL 原生的无头 CMS，实现全渠道内容优先交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先，基于事件溯源（自动记录每次变更）的开源方案。
* [InstaWP](https://instawp.com/) - 秒级启动 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者与营销人员的无头 CMS，兼容所有现代框架。社区（免费）版包含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持（无限语言/地区）、资源管理器（最多 2500 项资源）、图片优化服务、搜索查询、Webhook 及每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制——完全自主掌控。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限制的API和路由，支持广泛集成。免费方案包含3个项目、5张数据表和1个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编码AI助手，利用AI技术并深度理解您的代码库，帮助您更快编写和理解代码。Cody为开发者提供多种LLM选择（包括本地推理），支持多种IDE环境，兼容所有主流编程语言，并提供免费方案。免费版每月提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动补全（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计无缝转化为动态Flutter和React应用，优化您的工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，其商业友好型免费方案包含三个功能模块。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的快速AI代码补全插件。免费版提供无限制的行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞察，帮助开发者更快地创建更优质的软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接复制粘贴的React代码供项目使用。每次生成至少消耗30积分，初始赠送1200积分，每月还可获赠200免费积分。


**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，提供单用户免费账户及100 MB存储空间的单个代码仓库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持在1024×768分辨率下对Vista系统MS IE 9进行3分钟会话测试
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共及私有仓库数量不限
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（包括自托管版本）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [CodeBeat](https://codebeat.co) — 支持多语言的自动化代码审查平台，公共仓库永久免费（含Slack和邮件集成）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库（最多4名协作者）免费，学生和教育机构同样免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版支持无限用户、公共仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费层包含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者代码交互模式优先处理技术债务，可视化团队耦合度等组织因素，开源项目免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪工具，通过精准指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷/安全漏洞/性能及API问题，实时分析并即时反馈，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下团队私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript代码运行时错误高级静态分析工具，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化首选静态代码分析器，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构工具，提供框架迁移/带修复方案的代码分析/大规模代码转换，开发者可专注创新而非维护旧代码，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求与提交差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具集，含代码验证与多设备测试功能
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖项更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供代码片段管理、发现和分享功能，包含强大的代码截图工具（预设模板+链接功能）

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中，开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云端配置标准化应用环境，内置持续部署自动化和高级可观测性。免费计划支持1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 分钟级云端应用和基础设施部署。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层允许5个域名和2个用户无限量应用部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD（原生/混合开发），每月200次免费构建（单次10分钟）和2名团队成员。开源项目可享45分钟构建时长、+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
* [Buildkite](https://buildkite.com) 免费CI流水线支持3个用户和每月5000分钟任务时长。开发者免费测试分析层包含每月10万次测试执行，开源项目有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps工具，20个用户和10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 全功能免费托管CI/CD服务，支持GitHub/GitLab/BitBucket仓库。含多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割等高级功能。每月6000分钟免费执行时长，私有项目30个并行任务，开源项目8万分钟构建时长。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建/1个环境/共享服务器/无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时长
* [codeship.com](https://codeship.com/) — 每月100次私有构建/5个私有项目，开源项目无限额
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
* [drone](https://cloud.drone.io/) - Drone云支持跨x86/Arm架构（32/64位）运行持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目CI，提供5GB内存&3核CPU的全栈预览环境
* [semaphoreci.com](https://semaphoreci.com/) — 开源免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过专属URL访问，支持无限公开/私有仓库，最大2GB VM规格
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.io) — GitHub工作流自动化和合并队列，公开仓库免费
* [Make](https://www.make.com/en) — 通过UI连接应用并自动化工作流的工具，支持多数主流API。公开GitHub仓库免费，免费层含100Mb存储/1000次操作/15分钟最小间隔。
* [Shipfox](https://shipfox.io/) - 让GitHub Actions运行速度提升2倍，每月3000分钟免费构建时长。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续合规、SAML 2.0单点登录，公共工作池每月200分钟额度。
* [microtica.com](https://microtica.com/) - 提供预置基础设施组件的启动环境，免费在AWS上部署应用并支持生产负载。免费层包含1个环境（使用您的AWS账户）、2个Kubernetes服务、每月100分钟构建时长和20次部署。
* [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、多机任务分发和自动化E2E测试分割加速单仓库CI。免费计划支持30名贡献者，含15万点额度。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月提供3000分钟免费时长，无需信用卡。
* [Terramate](https://terramate.io/) - Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台，2个用户内免费使用全部功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化方案，支持PR驱动工作流、自托管运行器项目隔离和分层有序操作。3个用户内免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户每周可享受有限检查点的免费套餐。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接通过浏览器测试您的Android和iOS应用。免费套餐包含每月两个并发会话，每次使用30分钟，无应用大小限制。
* [Apptim](https://apptim.com) — 一款让非性能工程专业人员也能评估应用性能和用户体验（UX）的移动测试工具。使用自有设备的桌面版完全免费，可在iOS和Android上无限次测试。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能回归。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具，无需编码即可轻松上手。可免费在本地无限次运行测试，云端监控和CI/CD集成需额外付费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的零头价格监控API和应用。基于"Monitoring as Code"工作流和Playwright构建。为开发者提供慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站可免费使用。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否针对特定域名启用CORS并识别差距，提供可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试方案。Cypress测试运行器始终免费开源且无限制，Cypress仪表盘对最多5名用户的开源项目免费。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外完全开源，每月可免费创建5个含自愈脚本、邮件和视觉测试的测试用例。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少。
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — 混沌工程工具，可安全地向系统注入故障以在问题影响用户前发现弱点。免费版支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包含4个并发节点/10次网格启动/4,000测试分钟每月。
* [katalon.com](https://katalon.com) - 提供适应不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - 面向开发者的功能测试工具包，通过记录API调用生成API端到端测试（KTests）和模拟/桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速CI测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。10分钟测试文件免费套餐，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费套餐每月可模拟50个并发用户持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源项目完全免费，每月7,000张快照。
* [octomind.dev](https://www.octomind.dev/) - 通过AI辅助生成Playwright UI测试用例并自动运行维护。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和项目，每月5,000张快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3个用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用测试自动化工具，支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费版限iOS和Android各10个测试，但包含付费版大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。可重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费版最多创建10条规则，开源项目免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO测试工具。每日10次免费网站爬取。提供实用的SEO学习资源和改进建议，适用于任何技术栈的网站。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但专注于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试（每次最多3分钟）。发现Bug？可复制唯一测试URL向开发人员展示精确复现步骤。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉对比服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）情况。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、CSV/XLSx格式测试用例导入、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
* [Testspace.com](https://testspace.com/) - 用于发布自动化测试结果的仪表盘，以及通过GitHub将手动测试实现为代码的框架。[开源项目免费](https://github.com/marketplace/testspace-com)，每月450条结果限额。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成的工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量，提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过唯一URL调试和检查webhook及HTTP请求。完全免费，可创建无限数量的URL并获取建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和电子邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止(EOL)等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天可处理200次请求。
  * [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式，目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，用于代码、文件、目录或容器存证
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简单直观的Web应用，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及企业策略来防止配置错误
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块及GitHub Actions的依赖项。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化Django站点安全检测工具，源自Pony Checkup项目分支。
  * [Doppler](https://doppler.com/) — 支持同步到多种云平台的通用密钥管理器，免费版支持5个用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 安全快速同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，永久避免.env文件丢失。最多支持3名团队成员免费使用。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复保护代码库安全。可扫描350+种密钥类型和敏感文件，25人以下团队或个人开发者免费。
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器，每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，支持从本地开发到生产环境第三方服务的全团队密钥管理，最多5名开发者免费。
  * [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
  * [keychest.net](https://keychest.net) - 集成证书透明度数据库的SSL证书到期管理及购买平台
  * [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
  * [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目数量不限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用及配置的安全监控，免费支持25个用户和30天历史记录。
  * [openapi.security](https://openapi.security/) - 无需注册即可快速检测OpenAPI/Swagger接口安全性的免费工具。
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人形式的自动化产品安全工程师，可自动提交PR修复Java代码库漏洞（即将支持其他语言）。
  * [pyup.io](https://pyup.io) — 监控Python依赖项安全漏洞并自动更新。1个私有项目免费，开源项目数量不限。
  * [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息以提升威胁检测与响应能力。免费获取5万次查询额度[点击此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 发现并修复开源依赖项中的已知安全漏洞。开源项目无限次测试与修复，私有项目每月限200次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
  * [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测并修复安全威胁，通过简单高效的方案保护项目。
  * [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，确保生产环境前发现并修复安全漏洞。单个应用支持无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描
  * [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒及服务器防火墙(WAF)，注册用户可获邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等，不限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报平台，适合个人研究员、分析师及刚接触网络威胁情报的组织。最多3个用户免费。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版支持每周XSS检测
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具与服务。250用户以下应用免费。
  * [Vulert](https://vulert.com) - 持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式GraphQL端点安全扫描，免费无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条GitHub公开仓库、代码片段、议题及评论中的泄露密钥

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供细粒度授权服务。免费额度包含1000月活跃用户(MAU)和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费额度包含1000 MAU和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费计划包含25,000 MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用添加无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费额度5000 MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权与访问控制，免费额度100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费额度10,000月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费额度100用户和一个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥的认证方案。不限MAU永久免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度7,500活跃用户/月，50个租户(含最多5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成到产品中。入门所需全部功能，免费额度7,500 MAU。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现2FA，免费支持10个用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等任何应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费额度100月活跃用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持三个企业应用和五个个人应用，不限用户数。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，不限团队成员，200日活跃用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展微服务架构，提供实时更新和无代码策略UI。免费额度1000 MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费域支持1000用户和10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重建认证系统即可添加企业SSO。免费计划包含不限MAU、不限组织数量、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化平台提供认证与反欺诈API/SDK。免费计划包含10,000 MAU、不限组织数量、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 不踩坑的开源认证方案。最开发者友好的解决方案，五分钟快速上手。可免费自托管，或选择含1万免费MAU的托管SaaS版本。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速上手同时保持对用户体验的控制。免费额度5000 MAU。
* [Warrant](https://warrant.dev/) - 为企业级应用提供托管的授权与访问控制服务。免费层包含100万月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度25,000次认证请求，包含所有安全功能(OTP、无密码登录、策略等功能无付费墙)。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户。免费额度200用户和1万封事务邮件(带"Powered by PropelAuth"水印)。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，同时支持认证与授权。免费额度5,000 MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱+密码、社交账号登录、Magic Auth、MFA等多种方式。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您首选的移动应用测试平台，确保应用按预期运行。免费计划包含：1个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限下载、高速传输和无限上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费计划包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS和Android应用。免费计划包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 测试用移动应用分发平台。免费计划包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包含：5个应用、每月50次下载、最大文件尺寸100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone和Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限量设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 配备友好界面的服务器管理与部署平台。提供单台服务器的免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP网络服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署。
* [courier.com](https://www.courier.com/) - 统一推送、应用内消息、邮件、聊天、短信等多渠道通知API，含模板管理等功能。免费套餐每月10,000条消息。
* [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件、推送、短信、产品导览、横幅等）。每月最多1,000名活跃用户免费。
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，提供预制应用内收件箱和无代码模板编辑器。免费套餐每月10,000条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接至云原生物联网消息代理。永久免费支持100台设备连接（无需信用卡）。
* [knock.app](https://knock.app) - 开发者通知基础设施。通过单次API调用实现应用内、邮件、短信、Slack和推送等多渠道发送。免费套餐每月10,000条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
* [Novu.co](https://novu.co) - 开源开发者通知基础设施。统一管理邮件、短信、站内信、应用内和推送等通信渠道的组件与API。免费套餐每月30,000条通知（保留90天）。
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持100个同时连接和每日200,000条消息。
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持20个同时连接和每日100,000次事件。
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费套餐含4k消息大小、50个活跃连接和每月5GB数据。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（每次可含多条消息）。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API服务，支持实时数据注入、视频布局、录制，提供全功能托管Web UI或自定义UI包。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长。
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送次数不限，含浏览器内消息功能。
* [httpSMS](https://httpsms.com) - 通过Android手机作为短信网关收发短信。每月免费200条收发额度。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全无服务器MQTT代理。永久免费每月100万会话分钟（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒设置。免费套餐：每日50条消息至1台设备1个应用。
* [SuprSend](https://www.suprsend.com/) - 采用API优先的智能通知基础设施，通过单一API实现交易通知、定时任务和互动消息的多渠道发送。免费套餐每月10,000条通知，支持摘要、批量、多渠道、偏好设置、租户、广播等多样化工作流节点。
* [SMSGate](https://sms-gate.app) - Android™短信网关，通过云端路由实现设备间短信收发。完全免费的云服务（建议每日超过10,000条时通知以保障服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费额度每日10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志量，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志量，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费方案包含50GB存储空间，15天存储保留期和7天日志检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志量，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截功能。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量项目、字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符翻译）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（含2用户、500个键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5名用户的限量免费版，开源免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键值免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条源字符串），支持无限自托管部署
* [Free PO editor](https://pofile.net/free-po-editor) — 完全免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持网页和移动端本地化。可使用自有LLM，或通过Lingo.dev托管引擎每月免费10,000词

**[⬆️ 返回顶部](#目录)**

## 监控

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限用于一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版数据保留时长为1小时
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器，不限用户数、仪表板和告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案包含1个用户、1万次API&网络检查/1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描次数、用户数和存储账户数。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟检查间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助厘清云基础设施开支。每月Google Cloud Platform消费不超过5000美元可免费使用
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。24小时数据保留的免费服务
* [fivenines.io](https://fivenines.io/) — 带实时仪表板和告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版：3用户、10个仪表板、100条告警，Prometheus和Graphite指标存储（1万条时间序列，14天保留期），Loki日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务和后台作业。最多20个检查点免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务和SaaS状态页聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅数和团队数
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费提供500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检测器，小型网站（100页以内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面展示应用与技术栈，助您大规模监控诊断问题。开发者社区永久免费计划包含：100万条日志事件监控、2台主机的基础设施监控与应用性能监控
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。"永久免费"方案提供HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），含2个仪表板/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是采集实时指标的开源工具。这个不断发展的产品也可在GitHub找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师打造更完美的软件。从单体架构到无服务器，您可以检测所有内容并分析、排查和优化整个软件栈。免费层每月提供100GB数据摄入、1个全权限用户和不限量的基础用户
* [nixstats.com](https://nixstats.com) - 免费监控1台服务器。含邮件通知、公开状态页、60秒间隔检查等功能
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站/API正常运行时间监控、定时任务监控及状态页。前5个检查点（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国与美国服务器的DNS结果和ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 为永续服务提供强大的告警与值班管理。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，包含告警、可视化功能和基础报表。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，每日检查最多6个监控点免费
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（集成Pagerduty、OpsGenie）。1个团队免费（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更和正常运行时间。免费方案包含5个URL、每日核心网页指标监控、10个HTML/SEO变更监控器、167个国家联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，10万次事件内免费且不限项目和状态页数量
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。不限URL数量，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器（10分钟间隔）。监控SSH、HTTP、HTTPS和任意TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层包含1个可定制的公开状态页（SSL子域名）。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月历史正常运行时间/日志记录、不限状态页和自定义域名！永久免费且不限邮件告警数量。无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标监控免费，支持无限服务器、10个自定义指标、50万自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标与日志），零配置复杂度。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL证书监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行状态监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费版支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费版无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS与域名监控。免费监控10台服务器、10个运行状态和10个域名
* [syagent.com](https://syagent.com/) — 非商业用途免费服务器监控服务，含告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监测器（5分钟间隔）和可定制状态页（支持商用）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供Cron任务、关键词、网站、端口、Ping等多种监测器。25个运行时间检查（3分钟间隔）永久免费。支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux/Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志和运行状态监控。为开源项目提供免费小型商业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，自托管无限制
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含5,000次错误/月，不限用户数，30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限制
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。包含Vercel等平台集成，支持高级数据查询及邮件/Discord通知。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键生成错误报告。免费计划不限报告数量。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人使用免费计划不限录制次数。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 提供具备容错纠偏、相关性排序和UI组件的托管搜索解决方案，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索服务](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1,000名活跃用户免费，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索组件和API服务，支持基于网络爬虫的自动索引。免费无限次搜索（最多50个子页面）。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完整编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与实践
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目学习Linux、DevOps、网络安全、编程与数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证级免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 公开2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 提供基础到高级的HTML/CSS、JavaScript与SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL/TypeScript，支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，专注计算机科学/工程/数据科学领域
* [Django教程网](https://django-tutorial.dev) - 首个Django框架免费学习指南，为用户文章提供dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学课程，涵盖Python Click与Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱服务，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费发送1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可免费创建无限别名邮箱
* [Antideo](https://www.antideo.com) — 免费套餐每小时提供10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费额度
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，免费支持最多100名订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件及事务性发件服务，每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者专用的简易测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每日上限300封
* [EmailOctopus](https://emailoctopus.com) - 免费支持2500名订阅者，每月10000封邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，而是客户端邮件工具，可安全发送邮件而不暴露凭证。免费套餐包含200次月请求量、2个邮件模板、50KB请求限制和有限联系人历史记录
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。完全免费的反事务性邮件服务，邮件永不实际投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 多域名临时/一次性邮箱生成器，页面刷新即更新邮箱地址。完全免费无服务定价
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名且可创建无限地址（含广告），完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务。免费创建并转发无限量域名邮箱（注意：使用.casa/.cf/.click等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD流程的邮件功能。永久免费账户每日15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，支持收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每日创建最多3个临时邮箱，可通过Chrome扩展便捷删除。完美适用于测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件3天后自动删除。开源且支持自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约每月86,400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 免费支持100名订阅者和无限邮件发送，含自动化功能
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API和SMTP服务，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮箱测试免费API，提供公共邮箱托管、外发捕获、邮件转Slack/Websocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员、每秒2封邮件、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者专用免费临时邮箱，可通过网页或API即时创建
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共用单一收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送至服务器）
* [pepipost.com](https://pepipost.com) — 首月3万封免费邮件，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限量DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，内置端到端加密，1GB存储空间
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API。免费层（每月10,000封）。异步发送，多SMTP服务器支持，含黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每日验证100个邮箱，另提供DEA检测器、DNS查询、SPF检测器等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API。每月3000封，每日100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案。免费5个别名，无限带宽和收发。教育工作者（学生/研究人员等）免费
* [Substack](https://substack.com) — 无限量免费通讯服务，收费时开始支付
* [Sweego](https://www.sweego.io/) - 欧洲开发者事务性邮件API，每日500封免费邮件

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱及邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费额度
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单生成器和自动化流程。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费临时邮箱服务，支持邮件转发和自动过期地址
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历功能（Tuta也提供[付费方案](https://tuta.com/pricing)）。该平台部分[开源](https://github.com/tutao/tutanota)，支持自托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测，每日25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务，每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供包含免费方案的多项服务：
   - [邮箱](https://zoho.com/mail) 5用户免费，每人5GB空间，附件限制25MB，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，上传限制1GB，存储空间5GB，捆绑Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目，附件限制10MB。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，支持频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议和10名参与者的网络研讨会
   - [Vault](https://zoho.com/vault) — 个人版密码管理工具
   - [Showtime](https://zoho.com/showtime) — 支持最多5人参与的远程培训会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，支持zip备份、RSS/Atom订阅、访问控制和自定义CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理，20个客户/订阅免费，1个用户，所有支付由Zoho托管，保留最后40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面，最多50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服坐席，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)提供1个远程技术支持许可和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每个频道100人，支持SSO
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排期
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API服务。每月5,000封邮件额度，无限域名，免费邮箱验证、黑名单监控、邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队成员数量，提供卓越的技术支持且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求额度。
* [Flagsmith](https://flagsmith.com) - 安全发布功能：跨Web、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地化运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试服务。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境且请求次数不限。SDK、分析看板、发布日历、Slack通知等所有功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析的综合平台。免费版提供无限席位、功能开关、实验和动态配置，支持每月100万次事件量。
* [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试工具。支持代码化配置和全类型TypeScript SDK，深度集成Next.js和React等框架。提供慷慨的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体，经过人工精选并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 提供大量免费字体，可通过下载或链接Google CDN快速部署到网站
* [FontGet](https://www.fontget.com/) - 提供分类清晰、标签完善的可下载字体库
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，所有字体均可100%免费用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和付费商用字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含CJK（中文/日文/韩文）字体标签

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版包含无限表单和每月20次提交（带Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交，提供现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。提供基础用途免费方案。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单。无需注册即可免费使用，每月500次提交和可自定义回复邮箱地址。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版含无限表单、每月250次提交和客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每月每个表单50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1个表单、50次提交、单文件上传和100MB存储空间。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过界面将提交转发至邮件/Slack/Zapier。无需服务器代码，免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持无限表单和提交，含预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码快速创建表单转邮件等功能。个人账户每月免费50次提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站和每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点、1个表单和每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单和调研工具，含50+专家设计模板。免费账户限制1个活跃调研、100次回复/调研和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析产品。永久免费版支持500月活用户、无限回复和事件、多集成导出及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版含每月50次提交、250MB存储、Zapier集成、CSV/JSON导出、自定义重定向/响应页、Telegram/Slack机器人及单邮件通知。
* [Survicate](https://survicate.com/) — 一站式多渠道反馈收集与跟进调研工具，AI自动分析洞察。免费版含邮件/网站/产品内/移动端调研、AI问卷生成器和25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码免费集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷和表单构建工具。免费版含5个表单、每表单最多3个步骤和50次月回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计表单。免费版限制每表单10个字段和100次月回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持Webhook通知。免费版文档带水印但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站免后端代码联系表单。免费版含无限表单/域名和每月250次提交。
* [WebAsk](https://webask.io) - 调研表单构建工具。免费版含3个调研/账户、100次月回复和每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [formpost.app](https://formpost.app) - 永久免费的表单转邮件服务，支持自定义重定向、自动回复、Webhooks等配置。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特风格表单，无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器并转换为可填写表单。免费版支持无限PDF文件，每个PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI功能的在线表单。免费版可收集100次回复，支持网站嵌入或链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具，使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放功能的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈，提供React/Vue组件轻松集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃调研、每调研25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复Cursor、Windsurf和Copilot等工具的输出，以满足企业质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。仅需2行代码即可调用200+种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估、提示词调试和数据管理平台。免费计划每周提供最多1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 统一搜索工具，可同时搜索所有应用。智能助手能基于您的信息回答问题。免费计划提供无限统一搜索和每日5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可免费使用完整平台。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10编码和抗菌药物管理。专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词和数据集，并调试LLM应用性能问题。为任何LLM生成开放遥测标准追踪数据，提升可观测性，兼容所有观测客户端。免费计划每月提供5万次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，助力AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，促进技术与非技术团队协作，微调并投产生成式AI产品。免费计划包含全平台功能，每月1,000次追踪和1个DSPy优化工作流。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和产品生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月5万次观测和全平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易用免费的图像生成AI，提供免费API。无需注册或API密钥，提供多种网站和工作流集成选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - AI原生的快速、简单且安全的商业智能解决方案，替代Tableau、Power BI和Looker。利用大语言模型(LLM)在数分钟内交付定制商业智能方案。永久免费计划提供1个工作区、5个数据源连接和1个用户，分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1/V3、Llama和Moonshot AI，擅长自然语言处理，适合多样化开发需求。注意免费模型有速率限制，同时提供Claude、OpenAI、Grok、Gemini和Nova等付费模型满足进阶需求。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供10万免费字数额度，支持Azure OpenAI、DeepSeek和Google Gemini模型，赋能代码生成、深度研究和图像创作。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI音频增强SaaS工具，消除噪音和回声同时保持人声自然清晰。完全免费：支持MP3/WAV/FLAC格式，一键无限次增强，无需登录。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。顶尖的内容分发服务。cdnjs是由Cloudflare提供支持的免费开源CDN，被全球超过11%的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管jQuery等流行的第三方JavaScript库，可轻松添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简单方式。宣称单个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不宕机的持续交付。个人使用免费，限一名开发者且无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整尺寸服务。实时处理图片并全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心节点，1个域名和通用SSL证书

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，30秒超时限制。
  * [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持websockets），含认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
  * [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限
  * [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分片和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GiB数据传输。
  * [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储空间，每月1GB流量限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架。包含业余项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS直接计费（可使用AWS免费额度）。
  * [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例，PostgreSQL免费版限制2连接、10,000行且无备份。
  * [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，支持业务快速增长。免费计划含10万服务调用、1万异步任务和10万Redis命令。
  * [pipedream.com](https://pipedream.com) - 开发者专属集成平台。基于任意触发器开发工作流。[免费运行](https://docs.pipedream.com/pricing/)代码化工作流，无需管理服务器。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。新手账户免费，专属your-username.pythonanywhere.com域名，512MB私有存储空间，1个MySQL数据库。
  * [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月5万次。自定义域名仅限付费计划。
  * [Koyeb](https://www.koyeb.com) - 全球化部署的开发者友好无服务器平台。通过Git部署Docker容器/Web应用/API，含自动扩缩容和全球边缘网络。免费实例可部署至德国法兰克福或美国华盛顿，免费托管PostgreSQL数据库位于德/美/新加坡。512MB内存/2GB存储/0.1CPU。
  * [Napkin](https://www.napkin.io/) - 函数即服务，500MB内存，默认15秒超时，每月5,000次API调用（限速5次/秒）。
  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务。Meteor应用平台即服务，含免费MongoDB共享托管和自动SSL。
  * [Northflank](https://northflank.com) — 通过UI/API/CLI构建微服务、定时任务和托管数据库。免费版含2个服务、2个定时任务和1个数据库。
  * [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台。兼具NoCode工具敏捷性与编程语言威力。[免费版含1,000次yeps](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)支持3个项目/1GB出口流量/每月300分钟构建时长。
  * [Zeabur](https://zeabur.com) - 一键部署服务。免费3个服务，每月5美元额度。
  * [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，可创建生产级测试环境。
  * [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供每月100万次调用/100GB带宽/10个定时任务（限非商业/学术用途）。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用中触发事件时发送Slack消息或添加Google Sheet行记录。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与网页Baas服务，免费包含1GB文件存储、每月5万次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，为企业构建和部署数字化创新方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可访问，正式版后将提供慷慨的免费方案。
* [Firebase](https://firebase.com) — 助力构建和运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI。集成Firebase。免费计划包含UI生成器和免费模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能（通常需数周）。
* [hasura.io](https://hasura.io/) — 扩展任意托管环境的现有数据库，提供即时GraphQL API，安全支持网页、移动和数据集成场景。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为网页和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月1万封邮件发送，不限联系人且支持自动预热功能。
* [paraio.com](https://paraio.com) — 具备灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100个活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2000订阅者内不限通知次数。
* [pusher.com](https://pusher.com/beams) — 2000月活用户内免费无限推送通知。统一API支持iOS和Android设备。
* [quickblox.com](https://quickblox.com/) — 即时通讯、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API、模板等服务的服务器，并通过管道组合实现数据转换。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用拖拽工具快速构建应用。点击式数据模型定制。通过Apex代码深度开发。强大API实现万物集成。企业级安全保障。点击式UI定制或前沿网页框架支持。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，不限结构化数据收发和存储，每月最多2500用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，用于构建后端。免费计划包含认证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 具备认证、配额、监控和分析的API管理平台。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次触发/每月100次任务免费。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟更新间隔/5个活跃自动化/webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储/256MB实例/每日3千次API请求/1万次推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等场景。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持与15种以上数据库及任何API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，可定制移动端和Web应用。提供拖拽界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理快速构建内部工具、自定义用户流程、数字体验、自动化流程、管理面板和运营应用的低代码平台，效率提升10倍。
* [lil'bots](https://www.lilbots.io/) — 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费版包含完整API访问权限、AI编程助手和每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每个应用0.5GB存储和1GB内存。免费版还包含Studio和Studio Pro IDE。
* [outsystems.com](https://www.outsystems.com/) — 面向本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，高度可定制。能用JavaScript和API实现的功能均可通过ReTool完成。免费版支持每月最多5个用户，不限应用数量和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑和代码扩展功能，集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，并通过拖拽式应用构建器开发应用。
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。支持通过拖拽构建UI界面，并可通过JavaScript、Python和SQL实现高度定制。提供云服务和自托管方案，最多5个用户免费。
* [manubes](https://www.manubes.com) — 专注于工业生产管理的强大无代码云平台。单个用户每月100万次工作流活动免费（[另有德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100MB免费网络托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管+免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用+开发者优先的部署和开发平台，最小化基础设施烦恼并加速设置。
* [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建Web和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 面向Web3前端的去中心化网络托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform Starter层级免费构建和部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到网络。仅限静态站点。永久免费。每个Google/Microsoft账户一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并实时公开分享。通过其美观的用户界面、API和/或CLI按您喜欢的方式工作。
* [Free Hosting](https://freehostingnoads.net/) — 免费托管支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持及许多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳控制面板和50多个免费应用的一键安装。即时设置。无强制广告。
* [HelioHost](https://heliohost.org) — 非营利性免费网络托管，带Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP邮件，无限带宽，免费子域名，1000MB免费存储空间并可升级。
* [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署多达100个静态站点，自定义域名带SSL，100GB月带宽，260多个Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 支持SFTP文件上传下载的网络托管，提供PHP支持。
* [Neocities](https://neocities.org) — 静态托管，1GB免费存储空间和200GB带宽。
* [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，免费提供100GB数据和100GB/月带宽。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包含多种形式的网络托管（静态托管、基于容器的托管、WordPress及其他托管应用一键安装）。一个免费网络托管（静态或容器化）和一个免费数据库，100GB带宽和300构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费使用。无自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，免费提供SSL、全球CDN、私有网络、Git自动部署，以及Web服务、数据库和静态网页的完全免费计划。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布。无限站点，支持自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50个页面，50MB存储空间，仅限170多个预定义主区块，无自定义字体、网站图标和域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，免费提供SSL、全球CDN，每次`git push`生成唯一预览URL。完美支持Next.js和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器 — 无限网站，70多个区块，五个模板，自定义CSS、网站图标、SEO和表单。无自定义域名。
* [Qoddi](https://qoddi.com) — 类似Heroku的PaaS服务，采用开发者中心方法并提供全包功能。免费层级支持静态资源、暂存环境和开发者应用。
* [FreeFlarum](https://freeflarum.com/) — 社区支持的免费Flarum托管，支持最多250名用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，两周容器TTL，每个项目500MB RAM，SFTP — 1GB磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，其付费服务中包含三个静态站点的免费托管。
* [Serv00.com](https://serv00.com/) — 3GB免费网络托管，每日备份（保留7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等多种语言。
* [Sevalla](https://sevalla.com/) — 简化应用、数据库和静态网站部署与管理的托管平台 — 1GB站点限制，100GB免费带宽，600免费构建分钟，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) — 免费DNS托管，支持1个域名和50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务。免费版支持1个DNS区域（域名）和最多10条记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多支持5个域名，提供多种环境配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API调用](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，同时基于用户[贡献的公共域名](https://freedns.afraid.org/domain/registry/)提供免费子域名。注册后通过"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持三个域名，所有功能均有合理限制。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS服务，不限制域名数量。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册的免费动态DNS服务，无跟踪、日志或广告，不限制域名数量。
* [noip](https://www.noip.com/) — 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含嵌入IP地址的主机名时返回该IP地址。
* [zilore.com](https://zilore.com/en/dns) — 免费DNS托管，支持5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份和DNS变更监控，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为云提供的免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费DNS托管，最多支持3个域名，提供DNSSEC支持。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS服务，无订阅或广告。
* [LocalCert](https://localcert.net) - 提供与公共CA兼容的免费`.localcert.net`子域名，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费提供 pp.ua 子域名
* [us.kg](https://nic.us.kg/) — 免费提供 us.kg 子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费提供10GB类Amazon S3对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格的关系型数据库服务，提供无限基数库、每个库1,200行数据和每月1,000次API请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，提供[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，包含函数功能、类Mongdb查询、键值查询、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点配置为2核CPU、2GiB内存、8GiB存储。每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，支持20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代从物联网到AI的应用程序而设计
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费方案支持25MB内存、1个代理服务器和基础分析功能
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL、PostgreSQL或MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行数据、1个月版本历史，最多支持25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库能力与主流商业应用集成的工具。免费方案包含无限用户、10个堆栈和每个堆栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验方案。永久免费入门方案包含9GB总存储、最多500个数据库、3个部署位置、每月10亿行读取量以及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入、30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式定义、关联关系、自动REST API（支持类MongoDB查询）以及高效的多用户数据管理界面。免费方案允许3个用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图形规模（5万个节点，17.5万种关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，0.5GB总存储空间、1个项目、10个分支、无限数据库、始终可用的主分支（非主分支计算5分钟后自动暂停），每月20小时非主分支活动时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快速托管Postgres，1GB存储、10个数据库，与Prisma ORM集成。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持通过HTTP无连接数据摄取，并可将SQL查询发布为托管HTTP API。免费层无时间限制，10GB存储+每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，提供类SQL图查询语言和REST API。免费实例包含2个vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，这是一个用Prolog和Rust编写的文档和图数据库。开发免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - filess.io平台可免费创建两个数据库（每个数据库最大10MB），支持以下数据库管理系统：MySQL、MariaDB、MongoDB和PostgreSQL。
* [xata.io](https://xata.io) - Xata是内置强大搜索分析功能的无服务器数据库。提供单一API、多类型安全客户端库，并针对开发工作流优化。永久免费层满足业余开发者需求，包含3个Xata单位（具体定义参见官网）。
* [8base.com](https://www.8base.com/) - 8base是基于MySQL和GraphQL构建的全栈低代码开发平台，面向JavaScript开发者提供无服务器后端即服务。通过UI应用构建器快速开发Web应用并轻松扩展，免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算资源和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、持续可用不中断、1GB总存储空间、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全地将类LAN网络扩展至分布式团队，免费方案支持最多5人参与的无限网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署Web Socket服务器代码时提供wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务暴露为公共URL。提供免费托管版本和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装和注册。提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。不限节点数。(Hamachi替代方案)
* [segment.com](https://segment.com/) — 事件转换与路由枢纽，可转发至其他第三方服务。每月10万次事件免费额度。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook至公共或内部(如localhost)目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点(`https://yoursubdomain.webrelay.io <----> http://localhost:8080`)。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控webhook。每月10万请求和10万尝试额度，数据保留3天。
* [Xirsys](https://www.xirsys.com/pricing/) — 不限STUN使用量+每月500MB TURN带宽，限速带宽，单一地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端组成的端到端加密网络。支持桌面/移动/NA客户端；通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将本地服务器暴露至互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行的服务至公共自定义URL，并通过访问控制保障安全。单个集群内5个服务免费。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内网和项目管理工具，免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5个用户，提供Jira集成、无限视频会议、团队和会话
* [clickup.com](https://clickup.com/) — 项目管理工具，含云存储的免费高级版，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单个用户创建无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版提供5人团队无限仓库/项目/文档，每月500分钟CI/CD时长和30,000分钟无服务器代码运行时长
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10个用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费入门版包含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目/无限用户/1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版支持无限项目/用户/文件存储
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具，免费版每月3个公开看板和每个看板1次调查
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5个用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 面向开发者的免费描述转图表工具，可通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异检测工具，精确标记破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — GitHub issues的即时项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台，免费版支持无限用户/项目/看板及100MB存储
* [Instabug](https://instabug.com) — 移动应用全功能Bug报告SDK，免费版支持1个应用和1个成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多视角交互式图表工具，免费版支持无限私有图表（最多3个查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10个用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含付费高级版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2个用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活强大的看板工具，免费版支持1个用户无限看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具，完全免费
* [Kumu.io](https://kumu.io/) — 关系图谱工具，免费版支持无限公开项目，学生可创建私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版支持无限成员/10MB文件上传/250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10个用户/20个字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具，免费版支持3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目（不限成员）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费基础版支持5个用户/100MB存储，提供无限工作区/会议/任务单/问题追踪
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3个用户/10MB文件限制
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费支持无限公开项目和2个私有项目（3个活跃用户+无限只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理工具，免费版支持2个用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版支持无限成员/5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每个应用可提交10个错误报告
  * [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
  * [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
  * [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
  * [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版提供不限量的任务、迭代和工作区，且无用户数量限制
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，支持从看板到Scrum等多种流程，免费版不限用户数（最多1,000个数据实体）{[详情](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具，免费版包含1个工作区（不限任务和项目）、1GB文件存储、1周项目历史记录及5人视频会议
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
  * [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会议和迭代规划工具，15人以下免费
  * [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供高级付费方案
  * [teleretro.com](https://www.teleretro.com/) — 趣味十足的回顾会议工具（含破冰表情包），免费版包含3次回顾会议且不限参与人数
  * [testlio.com](https://testlio.com/) — 问题跟踪、测试管理与Beta测试平台，私人使用免费
  * [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每个图表最多4个层级
  * [todoist.com](https://todoist.com/) — 协同与个人任务管理工具，免费版功能：5个活跃项目/每个项目5名用户/5MB文件上传/3个过滤器/1周活动历史
  * [trello.com](https://trello.com/) — 看板式项目管理工具，免费版含无限个人看板和10个团队看板
  * [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
  * [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
  * [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目管理、版本控制和问题跟踪），免费版提供无限项目与协作者+3GB存储
  * [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具，最多3名用户免费（不限项目数量）
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目与私有项目（3人以下免费），含时间跟踪与敏捷看板功能
  * [zenhub.com](https://www.zenhub.com) — 唯一内置于GitHub的项目管理方案，公共仓库/开源组织/非营利机构免费
  * [zenkit.com](https://zenkit.com) — 项目管理与协作工具，免费版支持5名成员+5GB附件
  * [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
  * [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间跟踪应用（免费版含无限记录/项目/客户/标签/报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）
  * [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具，特别适合外包与跨组织协作项目，免费版支持3个项目5名成员
  * [Pulse.red](https://pulse.red) — 极简时间跟踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也支持其他类型文件上传。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间
* [sirv.com](https://sirv.com/) — 智能图片CDN服务，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，提供多种图片缩放、压缩和水印功能。含响应式图片、360度全景图制作和图片编辑的开源插件。免费套餐每月25GB CDN流量、25GB缓存存储及无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大编辑、存储和分发服务。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件分享，客户端处理且服务器零数据访问。支持1GB以内文件免费上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费版每月5000个URL处理限额（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档、图片、音频、视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 支持网页界面和API的免费文件共享存储平台，无文件大小、带宽和下载次数限制（文件十天无下载将自动删除）。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN处理流服务，免费套餐每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在不损失质量的前提下减小文件体积。开源项目免费使用。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务，支持拖拽上传（单图限32MB）。生成直链、BBCode和HTML缩略图，登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限量社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务，免费套餐含1000张原始图片、无限转换和100GB带宽
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费版支持1MB以内文件
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务，免费版支持100个键（1KB/键）和100次调用/小时
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图片代码优化/CDN），免费套餐每月5000页面浏览
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享与统一管理工具，基础版支持无限传输（单文件限250MB）和5个加密文件
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库，可通过申请获取限量免费开源计划
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客松和移动应用设计的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储和API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台，免费版含无限公开文件和10个私有文件
* [podio.com](https://podio.com/) — 支持5人以下团队免费使用基础版功能（用户管理除外）
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的批量二维码生成器，单次最多支持100个URL导出
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表与二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图片优化API，已处理超70亿张图片，兼容WordPress/Drupal/Magento等主流CMS
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费版每月20分钟渲染时长
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 文件上传与音视频/图片/文档转码服务，开源项目/慈善机构/学生可通过GitHub学生开发者包获取免费权限。商业应用可免费试用2GB流量。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务，提供图片CDN、媒体处理API和自动化优化前端库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线全套工具，开发者可免费使用文件上传API/UI、图片CDN、自适应交付和智能压缩等功能。免费版含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私理念的零知识文件存储服务，注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间（支持3台设备），推荐用户可获5GB奖励（账户90天不活跃将失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款简单易用的全球图像CDN，60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于GPT的AI处理工具，可将PDF、图像转换为JSON、CSV、EXCEL等结构化数据格式。每月赠送30次免费额度。
  * [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持样式、颜色、Logo等个性化设置。
  * [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能，完全免费且不收集用户数据。
  * [Doradrop](https://doradrop.com) — Doradrop是无广告的无限存储文件共享平台，无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代响应式网站，即使非设计师也能轻松打造精美界面
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，团队可构建、文档化、发布、扩展和维护设计系统。免费版支持3名编辑人员协作处理1个设计系统，查看人数不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费网页应用，用于绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 创建社交媒体轮播图的免费在线工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 全格式转换工具，支持208种格式（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或从顶级配色方案获取灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变的免费工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 为APP/网站/产品迭代和动效设计提供支持的界面工具，专业原型设计免费版支持无限查看者、2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/物权授权）
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站最高分辨率favicon
* [Iconoir](https://iconoir.com) – 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐和设计工具集，免费版提供有限格式的低分辨率资源（使用时需标注来源）
* [landen.co](https://www.landen.co) — 无需代码即可生成、编辑和发布精美网站与落地页，免费版允许完全自定义并发布1个网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计与工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加宽高参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，为设计师/开发者提供Lottie动画工具及Android/iOS/Web插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成器合集（含渐变/图案/斑点等工具）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型与协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备即时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版包含3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 为社交媒体和电商创建逼真的T恤服装模型，提供40个免费模板
* [Modeldraw.com](https://modeldraw.com) — 完整图表平台（支持UML/系统架构/流程图/思维导图/敏捷工作流），不限团队成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 完全免费的浏览器端矢量编辑器
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建网站结构并快速共享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 网页端开源设计与原型工具，支持SVG，完全免费
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供基于关键词搜索的免费API
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，具有Photoshop风格界面，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线浏览器编辑器
* [Plasmic](https://www.plasmic.app/) - 快速易用的强大网页设计工具，可构建响应式页面或复杂组件，支持代码扩展并发布到生产环境
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持直接热链到网页/应用
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 浏览器内直接转换PNG为WebP格式，无需上传，完全客户端处理确保隐私安全
* [Proto.io](https://www.proto.io) - 无需编码创建全交互UI原型，免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标尺寸调整与管理服务
* [Rive](https://rive.app) — 创建并向多平台交付精美动画，个人用户永久免费。该服务提供编辑器及图形托管，并为多平台提供运行时支持
* [storyset.com](https://storyset.com/) — 为项目创建可定制的精美免费插画
* [smartmockups.com](https://smartmockups.com/) — 产品模型生成工具，提供200个免费模板

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+个可复制粘贴的免费可编辑SVG图标
* [tweakcn](https://tweakcn.com/) — 精美的shadcn/ui主题库，支持实时自定义颜色、排版等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成首字母头像，支持通过URL参数配置，可直接热链到网页/应用中
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，完全免费且无需署名
* [unsplash.com](https://unsplash.com/) - 商用/非商用的免费图库（无限制许可）
* [vectr.com](https://vectr.com/) — 网页端+桌面端的免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画效果和网站托管的可视化建站工具，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，展示设计稿/资源/样式指南，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费开发工具，加速响应式网页应用开发
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，持续扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架，开源项目）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式SEO建站工具，前5页免费，支持无限自定义域名
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，无水印，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页生成器，免费建1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌LOGO库，内置浏览器端矢量编辑功能
* [svgrepo.com](https://www.svgrepo.com/) - 海量商用免费SVG矢量资源库，支持多库联合检索
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具，可直接用于设计工作流
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击快速生成独特背景/图案/形状的免费设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，免费支持3个项目/无限协作者/代码导出
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG等矢量格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，支持开发者常用格式互转
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/JPG/SVG/WEBP，无需注册
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 企业LOGO查询API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的Bootstrap/Angular/React/Vue UI套件
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库，减少类名书写
* [Scrollbar.app](https://scrollbar.app) -- 网页自定义滚动条设计工具
* [css.glass](https://css.glass/) -- CSS毛玻璃效果生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色合集与生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一检索平台
* [NextUI](https://nextui.org/) -- 免费现代化React&Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑开源图标设计系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美开源组件库
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标
* [Image BG Blurer](https://imagebgblurer.com/) -- 为图片生成模糊背景框
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案
* [Nappy](https://nappy.co/) -- 黑人棕色人种免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/工具合集
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的免费图形设计工具
* [Flows](https://flows.sh/) -- 产品引导互动平台，免费支持250月活用户

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目类别筛选。
  * [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常并非来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据个人偏好寻找最佳着陆页设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供设计师免费电子书和网络免费UI套件资源。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图集，包含桌面端、平板和移动端截图。
  * [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全检索的移动应用截图库，节省UI/UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动端和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供优质UI/UX模式（iOS和Android）的灵感库。
  * [Page Flows](https://pageflows.com/) - [移动端/网页视频及截图] 多款移动和网页应用的完整流程视频，附带截图，支持高效检索和索引。
  * [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并紧跟最新网页和移动应用UI设计趋势，可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，支持标签分类和搜索功能。


**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求额度
* [carto.com](https://carto.com/) — 基于自有及公开数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月5万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能。每月包含200万次免费底图瓦片加载、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容推送
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线地理数据可视化、分析与共享平台
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图及位置感知应用API与SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新，提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap提供的免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向指引、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排序的地理编码与搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求额度
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途及测试每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正等功能的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）。
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，适用于Fedora和EL系统。
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP Shell和代码片段分享网站，支持在300多个PHP版本中运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。这款开源IDE对所有人免费，是Android应用开发的最佳选择。支持Windows、Mac、Linux及ChromeOS系统。
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台及应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，包含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - 适用于macOS的流行可扩展编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务。
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI帮助初学者。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制。
* [cacher.io](https://www.cacher.io) - 支持100+编程语言的代码片段管理器，具备标签分类功能。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE，开源且支持Windows、macOS和Linux系统。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，能编写（代码块、自动补全、单元测试）、理解（掌握整个代码库知识）、修复和查找代码。支持VS Code、JetBrains及在线使用。
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索、定义和复用代码片段的编程助手。个人和小型团队可免费使用。
* [codesnip.com.br](https://codesnip.com.br) — 支持分类、搜索和标签的简易代码片段管理器，完全免费且无限制。
* [cocalc.com](https://cocalc.com/) —（原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：预装Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等工具。
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，为师生适配GitHub Codespaces。
* [codepen.io](https://codepen.io/) — 前端网页开发 playground。
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等框架的在线开发环境。
* [Components.studio](https://webcomponents.dev/) - 独立编写组件代码，通过故事可视化展示，测试后发布至npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持团队IDE，开源且社区驱动。Red Hat提供的在线实例见[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟数据的工具。发送描述需求的API请求，即可获得JSON格式的模拟数据，加速创意落地过程。
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI结对编程工具。原生集成CLI并与任何IDE无缝协作。免费版包含基础AI模型访问和本地处理能力。
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏工具。免费版每天可使用5个VM实例。
* [GitPod](https://www.gitpod.io) — 为GitHub项目提供即时可用的开发环境。免费版每月包含50小时额度。
* [ide.goorm.io](https://ide.goorm.io) goormIDE是完整的云端IDE。支持多语言，通过功能完备的网页终端提供Linux容器环境，具备端口转发、自定义URL、实时协作聊天、链接分享、Git/Subversion支持等功能。免费版包含1GB内存、10GB存储（每个容器）和5个容器槽位。
* [JDoodle](https://www.jdoodle.com) — 支持60+编程语言的在线编译器和编辑器，免费版REST API每天可编译200次代码。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具套件和IDE（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源项目及用户组可申请免费授权。
* [jsbin.com](https://jsbin.com) — 前端网页开发 playground（支持HTML、CSS、JavaScript，以及Markdown、Jade和Sass）。
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端网页开发 playground。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回模拟JSON数据的REST API端点，源码可本地部署。
* [Lazarus](https://www.lazarus-ide.org/) — 兼容Delphi的跨平台快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成模拟JSON数据的微型API模拟服务。
* [mockable.io](https://www.mockable.io/) — 可配置的RESTful API/SOAP模拟服务，快速定义返回JSON/XML数据的端点。
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式的测试数据，也可模拟后端API。
* [Mocklets](https://mocklets.com) - 基于HTTP的API模拟器，支持终身免费套餐，加速并行开发和全面测试。
* [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器开发Web应用。免费版提供24小时有效期的单服务器，每天4小时运行时间（2核CPU/2GB内存/1GB存储）。
* [Prepros](https://prepros.io/) - 开箱即用支持编译Sass/Less/Stylus/Pug/Jade/Haml/Slim/CoffeeScript/TypeScript，自动刷新浏览器，专注网站完美呈现。支持通过点击添加自定义工具。
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程 playground。支持多种语言，运行代码无需注册（保存代码需注册）。同时提供面向初/中级开发者的免费课程。
* [stackblitz.com](https://stackblitz.com/) — 在线/云端全栈应用开发IDE，支持所有主流NodeJs前后端框架。创建新项目短链接：[https://node.new](https://node.new)。

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新设计的代码编辑器，由Microsoft开发
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千款扩展，支持跨平台应用开发（可通过Microsoft扩展支持iOS和Android）、桌面/Web/云开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的Microsoft编辑器VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动的自我统计工具，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持无缝工作流。可内联渲染任何内容，保存会话与历史记录，基于开放Web标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效的数据库IDE，具备服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等特性
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器（含Java、Python、C++、JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 分析、事件与统计

  * [Userbird](https://userbird.com) - 提供热力图、会话录制和收入追踪的Google Analytics替代方案。
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史追踪面板（突破14天限制）。免费版支持监控单个仓库流量。
* [Dwh.dev](https://dwh.dev) - Snowflake数据云可观测性解决方案，个人使用免费。
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库中的客户数据同步至CRM/营销/客服工具。免费版支持同步到一个目标平台。
* [Avo](https://avo.app/) - 简化的分析发布流程，包含单一事实来源的追踪计划、类型安全分析库、应用内调试器和数据可观测性。免费版支持2名工作区成员和1小时数据回溯。
* [Branch](https://www.branch.io) - 移动分析平台，免费版支持1万移动应用用户（含深度链接等服务）。
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台，支持从数据仓库同步10个字段至60+SaaS平台（如Salesforce/Zendesk/Amplitude）。
* [Clicky](https://clicky.com) - 网站分析平台，免费版支持单个网站3000次浏览分析。
* [Databox](https://databox.com) - 整合多平台数据的商业洞察分析工具，免费版支持3用户/仪表板/数据源和1100万条历史数据。
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件量（支持2个应用）
* [GoatCounter](https://www.goatcounter.com/) - 开源Web分析平台（提供托管服务或自托管方案），非商业用途免费，含无限站点/6个月数据保留/每月10万页面浏览。
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私保护型Google Analytics替代方案，免费版每月100万页面浏览（无需信用卡）。
* [Expensify](https://www.expensify.com/) - 费用报销系统，免费提供个人报销审批流程
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，每月3000次事件内免费。
* [heap.io](https://heap.io) - 自动记录iOS/Web应用中的用户行为，免费版支持每月1万次会话。
* [Hotjar](https://hotjar.com) - 网站分析与报告工具，免费版包含每日2000页面浏览/100个快照（上限300）/3个可存储365天的热力图，以及应用内调查工具（每月3个调查+3个反馈组件+20条回复）。
* [Keen](https://keen.io/) - 自定义数据分析平台，每月1000次事件免费。
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务，完全免费且无用户/请求数量限制。
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析服务
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，不限数据历史记录和席位，支持欧美数据存储
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析工具（每月50万次API调用内免费）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费版支持1个网站+1个iOS应用+1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具，免费版限制100万用户许可证。
* [Row Zero](https://rowzero.io) - 极速联机电子表格，支持直连数据库/S3/API，永久免费3个工作簿。
* [sematext.com](https://sematext.com/cloud/) - 每月5万次操作内免费，含1天数据保留期/无限仪表板等
* [Similar Web](https://similarweb.com) - 网站与移动应用分析，免费版提供每指标5个结果/1个月移动数据/3个月网站数据。
* [StatCounter](https://statcounter.com/) - 网站访问分析，免费版可查看最近500位访客数据。
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试的全能平台，每月100万计量事件内免费。
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者计划提供Tableau Online个人沙盒许可证（最新预发布版本）。
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试工具，免费版支持单用户无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台（50万次操作/90天数据保留/30+一键集成）
* [counter.dev](https://counter.dev) - 简约隐私友好的网站分析工具，支持免费或捐赠模式。
* [PostHog](https://posthog.com) - 完整产品分析套件（每月100万追踪事件内免费），含250条/月应用内调查回复。
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，开源项目可申请个人订阅免费版。
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为记录工具
* [Beampipe.io](https://beampipe.io) - 注重隐私的简易网站分析，免费支持5个域名+1万月浏览量。
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析工具（支持Swift/Kotlin/Flutter等），每月2万事件内免费。
* [Trackingplan](https://www.trackingplan.com/) - 自动化数字分析监测与协作平台，支持生产环境部署和回归测试覆盖。
* [LogSpot](https://logspot.io) - 统一Web与产品分析平台（含嵌入式组件和自动化机器人），免费版每月1万事件。
* [Umami](https://umami.is/) - 简约快速的隐私优先开源Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私保护分析工具，免费支持3个域名（各600次会话回放）和无限页面热图/目标追踪。
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具，免费版含每月1万事件/产品日志和周度洞察。

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站与产品分析工具。免费方案每月包含3,000次事件记录。
* [Rybbit](https://rybbit.io) - 开源且无需Cookie的Google Analytics替代方案，操作体验提升10倍。免费版支持每月3,000次事件分析。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，提供用于错误复现的开发工具、实时会话支持以及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，包含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息请见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，无流量限制、无项目限制且无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热力图，一个漏斗分析，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目可无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求额度
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元可免费使用。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
  * [Glassfy](https://glassfy.io/) – 应用订阅基础设施，提供iOS、Android、Stripe和Paddle平台的实时订阅事件与开箱即用的变现工具。每月收入低于1万美元免费。
  * [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，支持iOS、Android、React Native、Flutter、Unity或网页应用集成应用内订阅。每月收入低于1万美元免费。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月提供1万次API调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费DEVELOPER计划每月包含1,000次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
  * [CurrencyApi](https://currencyapi.net/) — 以JSON和XML格式提供实物货币与加密货币的实时汇率。免费层级每月1,250次API请求。
  * [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，免费每月100次API请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费Micro计划每月500次查询。
  * [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版本需标注来源。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费实现API变现。可连接Stripe、Chargebee等平台。免费层级每月3万次事件。
  * [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购与订阅平台，包含无代码付费墙、CRM和分析功能。基础功能永久免费。
  * [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购和订阅后端服务（iOS和Android）。每月追踪收入低于2,500美元免费。
  * [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟增值税率API，免费每月100次请求。
  * [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。私人用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant云服务。Vagrant box托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你真正重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
  * [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可用 GitHub issues 实现博客评论、维基页面等功能！
  * [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万网站采用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"一个管理员管理多个域名，并完全控制行为与外观"
  * [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于AWS Lambda和Chrome的截图API。支持整页截取、捕捉时间点和视窗尺寸调整。
* [microlink.io](https://microlink.io/) — 将任意网站转化为结构化数据，包括标准化元标签、精美链接预览、爬虫功能和截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) — 通过简单API调用生成任何网站的截图。基于Google Cloud构建，具备弹性扩展能力。每月免费100张截图。
* [screenshotlayer.com](https://screenshotlayer.com/) — 可高度自定义的网站快照服务。每月免费100次截屏。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次截屏，支持png/gif/jpg格式，包含整页截取而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费版每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的理想平台。无需 Mac 设备即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管的移动应用持续集成与交付平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，并配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一款极速x86虚拟机，可运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队使用且为SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理与合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 支持多语言的Cookie横幅、审计与同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量限制下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，涵盖同意管理、隐私请求处理（DSARs）及数据映射。免费版包含核心同意管理功能，并向验证的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛分享）
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估IoT设备。免费开发者计划支持5台设备，含免费云存储和数据存储，提供移动端应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图像格式创建和分享代码片段，常用于在Twitter或博客中优雅地展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为社交媒体可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环触发webhook服务，免费版支持5个临时计划任务
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，支持无限量免费任务
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月支持5次预约（含1个日历）
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费版支持5个域名及每月20万次请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除/分析图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端管理平台，解决许可证合规与漏洞问题
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加webhook功能（含队列管理/退避重试/日志记录），免费版每日100次投递/14天留存/3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN/ISP/地理位置等主机信息，集成多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab/Bitbucket等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看照片EXIF数据（含GPS定位信息）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF，每月免费300份文档
* [Pika Code Screenshots](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言数据模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥与密码的移动端友好工具
* [ray.so](https://ray.so/) - 为代码片段创建美观图像
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成工具
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理工具，免费版含10个源和每月10万次访问
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求（支持GET/POST/PUT/DELETE/HEAD方法），含Headers/Token认证和请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油箱电量/里程表/车门锁控等汽车API
* [snappify](https://snappify.com) - 开发者视觉创作工具（从代码片段到技术演示文稿），免费版支持3个同时编辑/无限下载/每月5次AI代码解释
* [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed分析与导出服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷制作与分析平台，免费版每份问卷限10个问题和100条回复
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人开发平台（从网站实时聊天到WhatsApp），免费版不限机器人数量
* [Versionfeeds](https://versionfeeds.com) — 为喜爱软件创建定制化RSS更新源（前3个源免费）
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具集（编解码/数据处理等）

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 提供免费/付费资源，如精灵图、瓦片集和角色包  
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享全球游戏艺术家提供的免费素材  
* [GameDevMarket](https://gamedevmarket.net) — 包含2D/3D素材、音频、GUI等免费/付费资源  
* [OpenGameArt](https://opengameart.org) — 开源游戏资源库，涵盖音乐、音效、精灵图和GIF  
* [CraftPix](https://craftpix.net) — 提供2D/3D素材、音频、GUI、背景图、图标、瓦片集和游戏套件等免费/付费资源  
* [Game Icons](https://game-icons.net/) — 基于CC-BY协议的免费可定制SVG/PNG图标库  
* [LoSpec](https://lospec.com/) — 像素画创作工具平台，含大量教程和调色板资源  
* [ArtStation](https://www.artstation.com/) — 2D/3D素材与音频的付费/免费市场，同时可作为作品集展示平台  
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建自定义素材  
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源  
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型与PBR材质纹理库  
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用协议的免费2D/3D素材、音频和UI资源  
* [Poliigon](https://www.poliigon.com/) — 含多分辨率纹理、模型、HDR贴图和笔刷的免费/付费资源，支持Blender等软件的免费插件导出  
* [Freesound](https://freesound.org/) — 采用不同CC协议的免费协作音效库  

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [GitHub开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown格式互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）自动续期
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的免费正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的红帽产品免费访问权限（包括RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书参考
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直接备份数据库/文件系统/应用到s3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量、现代化设计、专业易用的免费后台管理模板/HTML主题/UI套件，加速应用开发
* [Web.Dev测评工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名的工具
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/生成测试数据等，拥有优雅界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门，支持100MB文件上传和无限导入器创建
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+种可直接使用的项目按钮
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/高级后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集（水印生成/屏幕录制/编解码/加密/代码格式化等），完全免费不上传云端
* [IT工具集](it-tools.tech) - 面向开发者和IT人员的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具集（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）
* [regex101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/高级后台模板与网站模板（支持Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）
* [Glob模式测试器](https://globster.xyz/) — 设计与测试glob模式的平台，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无忧MySQL备份恢复工具，无需代码或服务器即可还原到任意远程数据库
* [360转换器](https://www.360converter.com/) - 免费转换工具：视频转文字/音频转文字/语音转文字/实时音频转文字/YouTube视频转文字/添加视频字幕，适合短视频处理
* [QRCode最佳实践](https://qrcode.best/) - 13种模板的定制二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulse](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升线上影响力，免费版允许每月手动发布1篇内容
* [PageTools](https://pagetools.co/) - 永久免费的AI工具套件，一键生成网站政策/社交媒体资料/网页内容
* [MySQL可视化解释器](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互式学习平台
* [Axonomy应用](https://axonomy-app.com/) - 免费创建管理发票的工具，每月10张免费额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费转换表格数据格式（CSV/HTML/JSON/Markdown等）

**[⬆️返回顶部](#目录)**