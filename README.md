# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务并做出明智选择需要耗费大量时间。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的资源。我们虽喜爱所有免费服务，但仍需保持主题相关性。有时界限较为模糊，因此清单内容存在主观判断；若未采纳您的贡献，请勿介意。

本清单由1600多位人士通过提交Pull Request、审核、建议及实际工作共同完成。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来添加更多服务，或移除已变更或停用的服务。

[![追踪优质清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包含自托管软件。入选服务必须提供免费层级（非限时试用），若为时限型免费则至少需持续一年。我们还会从安全角度评估免费层级——支持SSO的服务可接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
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
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储，每天5万次读取，2万次写入，2万次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（不含中国和澳大利亚）网络出站流量
    * Cloud Storage - 5GB存储，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周限60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，36万GB-秒内存，18万vCPU-秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，节点按标准Compute Engine计费
    * BigQuery - 每月1TB查询量，10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebook开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）- 运行在Google Cloud的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月1万次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，2万次Get请求和2千次Put请求（12个月）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建精简开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层含有限事务量
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，免费1万文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个AMD计算VM，每个1/8 OCPU和1GB内存
       - 4个Arm架构Ampere A1核心和24GB内存，可单VM或最多4个VM使用
       - [闲置实例将被回收](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿数据点采集，10亿数据点检索
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500Mbps*核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知 - 每月100万次投递选项，1000封邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，不限量速率限制（每域名1条规则），分析，邮件转发
    * [零信任&SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供在任意云上构建、部署和发展应用所需的一切功能，无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于提升Terraform管理的基础设施和配置的协作与自动化水平。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境。每月免费提供20次任务执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公开和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限制的公开和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公开和私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含软件包和容器托管、项目管理和问题追踪
* [GitGud](https://gitgud.io) — 无限制的私有和公开仓库。永久免费。基于GitLab & Sapphire。不提供CI/CD
* [GitHub](https://github.com/) — 无限制的公开仓库和私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包和容器托管、项目管理和AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 无限制的公开和私有Git仓库，最多5名协作者。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件打造的代码托管平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，提供对Mercurial的支持
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；同时提供Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是自由许可项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) - OSDN.net是为开源软件开发者提供的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是面向FOSS许可项目的免费开源软件代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 无限制的免费开源分布式版本控制系统。其独特之处在于基于补丁的健全理论，易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费的私有项目（Git和Subversion），包含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限制的公开和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（GNU项目）的协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（非GNU项目）的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSON网格](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据
* [零表格](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次免费请求
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和共享
* [IP城市](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。包含现成爬虫、集成代理和定制解决方案。免费计划每月含5美元平台积分
* [API模板](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板
* [API工具包](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具。含自动API合约验证和监控。免费计划支持每日最多10,000次请求
* [API服务](https://apiverve.com) - 免费即时访问120+个高质量API。免费计划每月50个API令牌（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等问题的根本原因分析。免费支持两个模型
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI智能体。端到端评估和可观测性平台，帮助团队可靠地部署AI智能体。个人开发者和小团队永久免费（3个席位）
* [Beeceptor](https://beeceptor.com) - 无代码云端多协议API模拟调试平台（支持REST/SOAP/gRPC/GraphQL），提供基于规则的逻辑、CRUD/有状态模拟、代理和CORS管理。免费计划每日50次请求
* [大数据云](https://www.bigdatacloud.com/) - 提供快速准确的免费API（无限或每月10K-50K次），包括IP定位、反向地理编码、网络洞察、邮箱/手机验证等
* [浏览AI](https://www.browse.ai) — 网页数据提取与监控。免费每月1,000积分（等于1,000次并发请求）
* [浏览器猫](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI智能体网页访问等。免费计划每月1,000次请求
* [汽车API](https://carapi.dev) — 综合汽车数据API，含VIN解码、被盗车辆检查等。免费层每月100次请求（覆盖9个端点）
* [日历通](https://calendarific.com) - 企业级节假日API服务（覆盖200+国家）。免费计划每月500次调用
* [Canopy](https://www.canopyapi.co/) - 亚马逊产品数据的GraphQL API。免费计划每月100次调用
* [Clarifai](https://www.clarifai.com) — 图像API支持自定义人脸识别。可训练AI模型。免费计划每月1,000次调用
* [Cloudmersive](https://cloudmersive.com/) — 实用工具API平台，含文档转换、病毒扫描等功能。免费600次调用/月（仅限北美区域，文件最大2.5MB）
* [协作实验室](https://colab.research.google.com) — 基于网页的免费Python笔记本环境（配备Nvidia Tesla K80 GPU）
* [CometML](https://www.comet.com/site/) - 从实验跟踪到生产管理的MLOps平台。个人和学术用户免费
* [商业层](https://commercelayer.io) - 可组合商业API，支持从前端创建管理订单。开发者计划免费每月100订单（最多1,000个SKU）
* [Composio](https://composio.dev/) - AI智能体和LLM集成平台，连接200+工具
* [转换工具](https://conversiontools.io/) - 在线文件转换器（支持文档/图像/视频/音频/电子书）。提供REST API和多种语言库。免费版限制20MB文件大小（每日30次转换）
* [国家-州-城市微服务API](https://country-state-city.rebuscando.info/) - 提供全球地域信息的API。免费层每日100次请求
* [耦合器](https://www.coupler.io/) - 应用间数据同步工具。免费版限制1个用户/数据连接/数据源/目的地，需手动刷新
* [CraftMyPDF](https://craftmypdf.com) - 通过拖拽编辑器和API自动生成PDF。免费计划每月100个PDF（3个模板）
* [爬虫基地](https://crawlbase.com/) — 无需代理的网站爬取服务。自动解决验证码。首1,000次调用免费
* [Curl中心](https://curlhub.io) — API调用检查调试代理服务。免费计划每月10,000次请求
* [货币勺](https://currencyscoop.com) - 实时货币数据API。免费计划每月5,000次调用
* [CustomJS](https://www.customjs.io) - HTML转PDF/PDF处理API。免费层每月600次调用
* [Cube](https://cube.dev/) - 帮助开发者从现代数据存储访问和组织数据。云服务免费版每日1,000次查询
* [数据抓取器](https://datafetcher.com) - 无代码连接Airtable与任意API。免费计划每月100次运行
* [数据导入器](https://www.dataimporter.io) - Salesforce数据导入工具。免费版每月20,000条记录
* [数据洞见](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。每月10GB存储+120小时运行时间
* [数据矿工](https://dataminer.io/) - 浏览器插件（Chrome/Edge）用于网页数据提取。免费版每月500页
* [数据面板](https://datapane.com) - 用Python构建交互式报告的API，可将脚本部署为自助工具
* [DB-IP](https://db-ip.com/api/free) - 免费IP定位API（每日每IP 1,000次请求），CC-BY 4.0许可的精简数据库同样免费

  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费方案支持每月最多10位活跃用户(MAU)并追踪4张人脸
* [Deepnote](https://deepnote.com) - 新型数据科学笔记本。兼容Jupyter，支持实时协作与云端运行。免费层包含无限个人项目、基础机型(5GB内存+2vCPU)以及最多3名编辑者的团队协作。
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，用于构建相关应用。
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费方案每月可生成250份文档。
* [Doppio](https://doppio.sh/) — 采用顶尖渲染技术的托管API，用于生成和私有存储PDF及截图。免费方案每月400份PDF/截图。
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页及物联网的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储或外部服务后，可即时生成包含实时文档与用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20点积分。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API。免费方案每月50次API调用并可使用模板库。
* [Efemarai](https://efemarai.com) - ML模型与数据的测试调试平台。可视化任意计算图。本地使用免费。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。试用版包含2个项目(各10张表)。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端。
* [Export SDK](https://exportsdk.com) - 提供SDK和无代码集成的PDF生成API，含拖拽式模板编辑器。免费层每月250页，用户不限，支持3个模板。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费方案每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费Micro方案每月500笔交易。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的定位服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费方案每日2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供REST API和无代码集成。免费层每月50张图像和5个模板。
* [Hex](https://hex.tech/) - 面向笔记本/数据应用/知识库的协作数据平台。免费社区版支持5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，免费方案每日100个事件并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 训练和部署Pytorch/TensorFlow/JAX的NLP模型。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天试用期包含50份单页报告，可自定义调色板和字体。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个(云)平台如Exact Online/Twinfield等。含数据复制交换功能。开发者免费方案有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，无需API密钥，免费方案同一IP每分钟限45次请求。
* [ipbase.com](https://ipbase.com) - IP定位API，永久免费方案每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API，开发者永久免费方案每日1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，允许1,000次免费请求。
* [IPLocate](https://www.iplocate.io) — IP定位API，免费每日1,000次请求。含代理/VPN/托管检测、ASN数据、IP关联公司等功能。另提供可下载的IP与国家/ASN对应数据库。
* [IP2Location](https://www.ip2location.com) — 免费版IP定位服务。LITE数据库可免费下载至服务器本地查询城市/坐标/ISP信息。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API。免费方案每月5万积分，另提供500次免费WHOIS和域名查询。
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的IP定位API。免注册免费方案每月3万次查询(每日1k)。
* [ipapi.is](https://ipapi.is/) - 开发者打造的精准IP定位API，具备顶级托管检测能力。免注册免费方案1,000次查询。
* [IPinfo](https://ipinfo.io/) — 快速精准的免费IP数据API(每月5万次)。提供地理位置/公司/运营商/IP范围/域名/滥用联系人等API。所有付费API可免费试用。
* [IPQuery](https://ipquery.io) — 开发者专用无限次IP API，无速率限制和费用。
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月免费5万次查询。
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP。免注册免费方案支持通过CORS直接在浏览器端JS调用。适用于监控客户端/服务器IP变更的服务。不限请求次数。
* [JSON Serve](https://jsonserve.com/) — 帮助开发者存储JSON对象并作为REST API使用的免费服务。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码/头部/响应体。

  * [konghq.com](https://konghq.com/) — API市场及强大的私有与公共API工具。免费版功能受限，如监控、告警和支持服务。
* [Kreya](https://kreya.app) — 免费gRPC图形客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过正确数据提升机器学习模型。免费提供最多1000条样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费处理1,000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月提供100次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等实时和历史金融数据。"永久免费"API层级每天允许100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供实时和预报数据。预报基于多天气模型的机器学习组合以提高准确性。免费计划每日400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、美观链接预览、爬取功能或截图服务。每日50次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用工作流。免费层级每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式演练场。免费支持1名编辑。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的工具。适用于原型设计/测试/学习。每个项目免费提供2个资源。
* [Mockfly](https://www.mockfly.dev/) — 值得信赖的API模拟和功能标志管理工具。通过直观界面快速生成控制模拟API。免费层级每日500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的GraphQL和REST模拟API工具。无需注册即可免费开发使用简单REST API。
* [Mocko.dev](https://mocko.dev/) — 云端代理API，自由选择模拟端点并检查流量。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mocknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应。适合前端开发、QA测试和DevOps团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的呈现方式。适用于测试基于规则的DNS分流工具如Control D。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价格域名。每日免费查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每日100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API——每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件返回JSON格式文本的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者PDF生成API，提供Stripe风格文档。每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 轻松将HTML或URL转为PDF的简单API。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费每日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用Postman简化工作流更快创建更好API。永久免费使用Postman应用。Postman云功能也有永久免费限制版。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持设计和测试REST及GraphQL API
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop使AI网页爬取效率提升10倍，节省85%工作流时间，比人工研究快4倍，包含所有研究任务的REST API端点。每月首1,000积分免费。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。ProxySentry.io在rapidapi.com提供每月10k请求的免费层级。
* [Public-Apis Github仓库](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Reducto](https://reducto.ai) - 将非结构化文档(PDF/XLSX/JPG/PPTX等)转为结构化JSON数据。解析PDF表单并提取数据。免费层级含15k积分和按量付费。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者连接数千API，通过趣味挑战(含解决方案！)和交互示例进行API开发。
* [Rendi](https://rendi.dev) - FFmpeg API——无需处理基础设施的FFmpeg REST API。免费层级包含月度处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费HTTP请求接收端点。发送到该端点的所有请求将记录有效载荷和头部，便于观察webhook等服务调用。
* [reqres.in](https://reqres.in) - 托管式免费REST-API，随时响应AJAX请求。

  * [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特炫酷图片的网页服务
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API爬虫工具。匿名抓取数据，无需担心限制、封锁或验证码问题。每月前100次成功抓取免费（含JavaScript渲染功能），联系客服可获更多额度
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬虫API与免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的视觉/文本变化及数据提取。免费版支持每月5个URL监测
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费计划包含100次云端抓取额度
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析与归档数据。免费轻量版支持2个数据源/1,000张表/25名用户
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费计划包含每表1,000行免费额度
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能。免费版每月100次API请求
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON数据。免费版每月100次成功调用
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供高效开发工具。免费版含300处理单元/月，支持浏览器上传/数据隔离/熔断机制/任务提醒
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV即可通过API快速访问数据。免费版含2个API和2,500次调用/月（无需信用卡）
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费、隐私优先的在线工具，直接在浏览器中将CSV转为结构化JSON
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，含格式化器/验证器/正则测试/假数据生成器/交互式数据库沙盒
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费版提供设计/模拟/文档工具
* [Supportivekoala](https://supportivekoala.com/) — 通过模板自动生成图片。免费版每月50张图片
* [Svix](https://www.svix.com/) - Webhook即服务。免费版每月50,000条消息
* [Tavily AI](https://tavily.com/) - 在线搜索与研究API，可整理研究成果。免费版1,000次请求/月（无需信用卡）
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供国家/城市/区域等位置信息
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 免费天气API。提供全球精准预报/历史数据/天气监测方案
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，含日志聚合/可观测性/文档/调试。免费版所有功能可用（每月25万请求限制）
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币实时汇率。免费版无限API调用，适合开发者和金融应用
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月150次免费验证
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API（实时/逐时/每日预报/天气警报）。融合AI模型提升预测精度。免费版10,000次调用/月
* [WebScraping.AI](https://webscraping.ai) - 内置解析/Chrome渲染/代理的简易爬虫API。每月2,000次免费调用
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验追踪/数据集版本控制/模型管理加速开发。个人项目免费版含100GB存储
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版25,000令牌/月（约10次PR）
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月3万次调用
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器/住宅IP的爬虫API。每月1,000次免费调用，学生与非营利组织可获额外额度
* [Zipcodebase](https://zipcodebase.com) - 全球邮政编码API。每月5,000次免费请求
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与验证服务。每月1万次免费请求
* [Zuplo](https://zuplo.com/) - API管理平台（设计/部署/边缘发布）。分钟级配置API密钥认证/限流/文档/商业化。免费版含10个项目/无限生产环境/100万请求/10GB出口流量
* [DiffJSON](https://diffjson.com) - JSON差异对比在线工具，快速定位数据结构差异
* [FreeIPAPI](https://freeipapi.com) - 免费高速IP地理定位API（商业/非商业通用），支持JSON格式

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
* [central.sonatype.org](https://central.sonatype.org) - Apache Maven、SBT和其他构建系统的默认制品仓库。
* [cloudrepo.io](https://cloudrepo.io) - 基于云的私有及公有Maven和PyPi仓库。开源项目免费。
* [cloudsmith.io](https://cloudsmith.io) - 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
* [jitpack.io](https://jitpack.io/) - GitHub上JVM和Android项目的Maven仓库，公开项目免费。
* [repsy.io](https://repsy.io) - 1GB免费的私有/公有Maven仓库。
* [Gemfury](https://gemfury.com) - 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有及公有制品仓库。公开项目免费。
* [paperspace](https://www.paperspace.com/) - 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
* [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目免费。
* [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管版本。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费使用，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与排期工具，免费版支持1个日历连接和无限会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的多功能聊天平台，具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时Scrum扑克估算工具，支持无限成员快速完成故事点评估
* [Telegram](https://telegram.org/) — 提供高速可靠的消息与通话服务，商务用户和小团队可享受大群组、用户名系统、桌面端应用及强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具，支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流与协作平台，集成IDE配对编程、终端共享、音视频及屏幕共享功能，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备协同插件提升效率与参与度，免费版每月包含10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与多人协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，单人用户免费使用，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具，免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议空间，通过高度可定制的虚拟环境实现自然社交体验，免费支持最多10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册的语法驱动看板工具，完全免费无功能限制
* [flat.social](https://flat.social) - 可定制的互动式团队会议空间，会议数量无限制，免费支持最多8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub团队每日提交与PR活动报告工具，含推送可视化、同伴认可系统和自定义提醒功能，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具，支持无限公开/私密房间，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作写作工具，类似Google Docs的Markdown版本，免费笔记数量无限制（但私人笔记协作人数和模板功能受限）
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能通讯平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实远程协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意提交与投票平台，免费支持25人社区
* [Igloo](https://www.igloosoftware.com/) — 企业内部门户平台，10人以下团队免费使用文档、博客、日历等功能
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack输入/meet指令发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持多工作区标记和协作，免费版包含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能产品团队与开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — Slack内资源预约锁定工具（如会议室/开发环境/服务器等），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 支持在网站、PDF和图片上直接收集反馈的协作工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享功能和Passkeys的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议与屏幕共享服务
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的跨设备企业级协作白板，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作笔记应用，作为全能工作空间支持多平台和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天+绘图板+在线代码编译器的技术面试平台，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁的团队时间追踪应用，免费版支持10人以下的时间记录与报告生成
* [Pendulums](https://pendulums.io/) - 免费时间管理工具，通过直观界面和可视化统计提升时间利用效率
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史
* [Raindrop.io](https://raindrop.io) - 跨平台加密书签工具（支持macOS/Windows/Android/iOS/Web），免费提供无限书签和协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享与同步讨论。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多代码库贡献生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作
* [Slab](https://slab.com/) — 现代化团队知识管理服务，免费支持10人以下团队
* [slack.com](https://slack.com/) — 无限用户免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页，可追踪上游服务商状态
* [Stickies](https://stickies.app/) - 可视化协作工具，支持3面墙/无限用户/1GB存储的免费版
* [Stacks](https://betterstacks.com/) - 集成笔记/链接/文件存储的内容工作区，永久免费个人版
* [StreamBackdrops](https://streambackdrops.com) — 高清视频会议虚拟背景库，支持Zoom/Teams/Meet，免注册个人免费使用
* [talky.io](https://talky.io/) — 匿名P2P群组视频聊天，无需插件/注册/付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum流程，含5用户3项目组合免费版
* [Teamplify](https://teamplify.com) - 通过团队分析与智能站会优化开发流程，5人以下小组免费
* [Tefter](https://tefter.io) - 深度集成Slack的书签工具，开源团队免费
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板实时加密协作，无需登录
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪工具，支持Jira/Trello等集成
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira替代品），无限用户/10GB存储/10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用项目管理套件
* [twist.com](https://twist.com) — 异步友好型团队沟通工具，提供免费无限版
* [tldraw.com](https://tldraw.com) — 开源智能白板工具，支持SVG导出/多人协作，含免费VS Code插件
* [BookmarkOS.com](https://bookmarkos.com) - 三合一书签/标签/任务管理器，支持文件夹协作的云端桌面
* [typetalk.com](https://www.typetalk.com/) — 网页/移动端即时消息讨论平台
* [Tugboat](https://tugboat.qa) - 自动化PR预览工具，非营利组织享免费Nano套餐
* [whereby.com](https://whereby.com/) — 原appear.in，一键式免费视频会议
* [windmill.dev](https://windmill.dev/) - 开源自动化开发平台，免费用户可创建3个基础工作区
* [vadoo.tv](https://vadoo.tv/) — 简易视频营销托管平台，免费版含10视频/1GB存储/10GB月流量
* [userforge.com](https://userforge.com/) - 角色画像与用户故事关联工具，免费支持3角色2协作者
* [wistia.com](https://wistia.com/) — 含分析功能的视频托管平台，免费25视频+品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直传式文件分享服务，支持5GB内无限文件共享
* [Wormhole](https://wormhole.app/) - 5GB内端到端加密24小时文件传输，大文件采用P2P直传
* [zoom.us](https://zoom.us/) — 40分钟限制的免费视频会议方案
* [Zulip](https://zulip.com/) — 独特邮件式线程聊天工具，免费版含1万条历史消息+5GB存储
* [robocorp.com](https://robocorp.com) - 开源自动化运维套件，免费240分钟/月机器人时长+10次执行
* [Fleep.io](https://fleep.io/) — Slack替代品，小团队免费版含完整历史+1GB存储
* [Chanty.com](https://chanty.com/) — 10人以下团队永久免费，含20GB存储+无限语音消息
* [ruttl.com](https://ruttl.com/) — 网站/PDF/图片全功能反馈工具
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台，免费版含10GB存储
* [Webvizio](https://webvizio.com) — 实时网站/设计稿标注反馈工具
* [Pullflow](https://pullflow.com) — 集成GitHub/Slack/VS Code的AI增强代码评审平台
* [Webex](https://www.webex.com/) — 100人40分钟免费视频会议
* [RingCentral](https://www.ringcentral.com/) — 100人50分钟免费视频会议
* [GitBook](https://www.gitbook.com/) — 技术文档管理平台，开发者免费版
* [transfernow](https://www.transfernow.net/) — 免订阅极简安全文件传输工具
* [paste.sh](https://paste.sh/) — 基于JavaScript与加密的简易代码粘贴站

  * [腾讯实时音视频](https://trtc.io/) — Tencent Real-Time Communication (TRTC) 提供群组音视频通话解决方案。首年每月10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟、画布或变通方案。完全可用的免费版本。

  * [Cushion](https://cushion.so/) - 异步协作版Slack替代品。专为高效的小型分布式团队打造。免费版支持30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal站点托管服务。开发者免费套餐。同时提供免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。包含一个免费社区空间，支持5个用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS及API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月带宽和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层级的GraphQL驱动CMS。基础版每月支持10万次API调用。
* [Directus](https://directus.io) — 开源无头CMS。完全免费的平台，支持本地或云端管理数字资产和数据库内容，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将JSON内容直接存储于Git仓库的无头CMS。无任何限制条件。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头CMS优势与营销赋能。开发者计划支持2个用户、无限项目（每个项目含2个环境）、500个内容项、2种语言（含交付与管理API）及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头CMS。全托管可扩展API的内容管理界面。社区计划为单个用户提供无限API调用、文档、自定义类型、资源和多语言支持。开放内容/开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。免费版每个项目支持无限管理员用户、3个非管理员用户、2个数据集、50万次API CDN请求、10GB带宽和5GB资源存储。
* [sensenet](https://sensenet.com) - API优先的无头CMS，提供企业级解决方案。开发者计划包含3个用户、500个内容项、3个内置角色、25+5种内容类型、全功能REST API、文档预览生成和Office Online编辑。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git托管的无头CMS，支持Markdown、MDX和JSON格式。基础版免费支持2个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 现代化框架，可对接任意CMS/API/数据库快速构建网站。部署无头网站以提升流量、转化率和收益。
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL优先API，助力从传统方案迁移至原生GraphQL无头CMS，实现全渠道内容交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL优先架构，开源且基于事件溯源技术（自动记录所有变更）。
* [InstaWP](https://instawp.com/) - 秒级WordPress站点部署。免费套餐含5个活跃站点、500MB空间、48小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。社区（免费）版包含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持、2500个资源管理、图片优化服务、搜索查询和Webhook功能，每月250GB流量。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费套餐含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制，完全自主掌控。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可生成精美商业网站。提供免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的 No code 应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的 API 和路由，实现深度集成。免费方案包含 3 个项目、5 张数据表和 Google 插件支持。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款基于 AI 的编程助手，通过深度理解代码库帮助开发者更快编写和理解代码。它支持多款 LLM（含本地推理）、兼容主流 IDE、覆盖所有热门编程语言，并提供免费方案。免费用户每月可获得 20 条聊天消息（使用 Claude 3 Sonnet 模型）和 500 次自动补全（使用 Starcoder 16b 模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计稿无缝转化为动态 Flutter 和 React 应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持 C#。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费方案包含 3 个切面（aspect）。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是面向 VSCode、JetBrains 和 Neovim 的快速 AI 代码补全插件。免费版提供无限行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习到的洞见，帮助开发者更快打造更优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0 利用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，新用户初始获得 1200 积分，每月另有 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1位用户和1个100MB存储的代码库
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发实践优先处理技术债务，可视化团队耦合等组织因素，开源免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪，通过精准指标预防性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷/安全漏洞/性能问题，实时分析Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，支持30人以下团队免费使用
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，自动修复安全/性能/反模式等问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动提供关键性能洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — Go语言包代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构，支持框架迁移/问题修复/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 多语言自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证和多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台检查项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的文本代码搜索引擎，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 自动标记代码中的`TODO`注释（及其他标记），帮助定位需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段版的Google Keep。提供代码片段管理、发现与分享功能，配备强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化Web无障碍测试集成到您的开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布，实现更快速高效的发布周期。免费版每构建最多30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持Kubernetes和Lambda环境上的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，每次构建10分钟，2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，提供5个免费项目和1个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5k任务分钟。测试分析免费开发者层包括每月100k测试执行，开源项目有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 包含所有功能的免费计划，托管CI/CD服务支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级CI/CD功能。每月最多6000分钟执行时间，无限协作者，私有项目30个并行作业，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，1个环境，共享服务器，无限公共仓库
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30构建分钟）
* [drone](https://cloud.drone.io/) - Drone云使开发者能在单一平台运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目的CI。1个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL提供应用访问，无限公共和私有仓库，VM大小最多2GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
* [Mergify](https://mergify.com) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层包括100 Mb、1000次操作和15分钟最小间隔。
* [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub Actions，每月免费3,000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、通过Open Policy Agent持续资源合规、SAML 2.0单点登录，访问公共工作池：每月最多200分钟
* [microtica.com](https://microtica.com/) - 初创环境，提供现成的基础设施组件，免费在AWS上部署应用，支持生产工作负载。免费层包括1个环境（在您的AWS账户上）、2个Kubernetes服务、每月100构建分钟和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割端到端测试运行等功能加速CI上的单体仓库。免费计划支持最多30个贡献者，包含150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3,000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。最多2个用户免费，包括所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，通过拉取请求驱动的工作流、自托管运行器的项目隔离和有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户免费版每周有有限检查点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接通过浏览器测试您的Android和iOS应用。免费套餐每月包含两个并发会话，每次使用30分钟。应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版完全免费，可在iOS和Android上无限次测试。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能退化。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"监控即代码"工作流和Playwright。为开发者提供慷慨的免费套餐。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费套餐。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否针对给定域启用了CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试。Cypress测试运行器始终免费开源，无限制。Cypress仪表板对开源项目免费，最多5个用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5个测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有操作步骤并生成脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在导致面向客户的问题前发现弱点。Gremlin Free支持在最多5台主机或容器上执行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐支持最多4个并发节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API的端到端测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过在任何CI提供商上优化测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持最多10分钟测试文件，开源项目无限免费。
  * [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费套餐每月模拟最多50个并发用户，持续60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，含AI辅助测试用例生成
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和项目，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储，最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限iOS和Android各10个测试，但包含付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费套餐最多创建10条规则。开源项目免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次运行最多3分钟。发现错误？可复制测试的唯一URL向开发人员展示如何重现错误。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求。支持转发至本地服务器或历史记录回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成工具链、组件库和设计系统加速迭代、优化设计并简化开发流程。无限项目支持，含五年免费维护期。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试webhook和HTTP请求。完全免费服务，可创建无限量URL并获取智能建议。
* [webhook.site](https://webhook.site) - 通过定制URL验证webhook、外发HTTP请求或电子邮件。临时URL及邮箱地址永久免费提供。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 更快速便捷地自动化各类开发任务。目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — AWS安全与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理工具，可查询证书透明度日志。测试期间免费支持3个证书和1个用户
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码、文件、目录或容器
* [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 简易直观的Web应用，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制，支持开源自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略来预防配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项
* [DJ Checkup](https://djcheckup.com) — 自动化Django站点安全检测工具（基于Pony Checkup项目）
* [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享.env文件。免费支持最多3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复工具，防止敏感信息泄露至代码库。免费版支持扫描350+种密钥类型，适用于25人以下团队
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — 面向Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境第三方服务的全流程密钥管理。免费版支持最多5名开发者
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理与购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，证书受主流浏览器信任
* [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。免费支持1个私有项目，开源项目不限数量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机、设备、应用和配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 快速检测OpenAPI/Swagger接口安全性的免费工具，无需注册
* [pixee.ai](https://pixee.ai) - 免费GitHub安全机器人，自动为Java代码库提交PR修复漏洞（即将支持更多语言）
* [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。免费支持1个私有项目，开源项目不限数量
* [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，进行OWASP风险审计
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告服务
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息以提升威胁检测响应能力。免费获取5万次查询额度[点击此处](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 检测修复开源依赖项已知漏洞。开源项目无限次测试与修复，私有项目每月限200次测试
* [Socket](https://socket.dev) — 为个人开发者、小团队和开源项目提供的免费供应链安全方案，包含应用和防火墙CLI工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次免费SCA扫描，在发布前发现并修复安全威胁
* [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，确保生产环境前发现并修复安全漏洞。单个应用支持无限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒及PHP服务器防火墙(WAF)，注册用户可获邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等，不限于HTTPS
* [threatconnect.com](https://threatconnect.com) — 威胁情报平台，适合刚接触网络威胁情报的研究员、分析师和组织。免费支持最多3个用户
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费计划每周可执行XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密与自动密钥管理。免费支持1个应用及每月100万次加密
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密、数据库保护、物联网安全等数字解决方案工具。免费支持最多250个用户的应用

  * [Escape GraphQL 快速扫描](https://escape.tech/) - 一键式 GraphQL 端点安全扫描。免费，无需登录。
  * [我的密钥泄露了吗](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条公开GitHub仓库、代码片段、议题和评论中的泄露密钥
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 全能SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费支持1000月活用户和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含2.5万月活用户、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速实现无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000月活用户。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度权限控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/个人资料等预制UI组件。免费支持1万月活用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个域。
* [Corbado](https://www.corbado.com/) - 为新旧应用添加优先通行密钥认证。无限月活用户免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK方式。免费7500活跃用户/月，50租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)。免费支持10用户，包含全认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 分钟级集成的简易强健认证方案。入门所需全部功能，免费7500月活用户。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10用户，适用于VPN/网站/SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。免费支持100月活用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个企业应用和5个个人应用，用户数不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含全安全功能，不限团队成员，200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC，提供实时更新和无代码策略UI。免费1000月活用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费域支持1000用户和10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费方案包含无限月活用户、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费方案含1万月活用户、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 不踩坑的开源认证方案。5分钟快速上手的开发者友好方案，可免费自托管或使用含1万免费月活用户的SaaS版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速入门同时保持用户体验。免费支持5000月活用户。
* [Warrant](https://warrant.dev/) - 面向应用的托管级企业授权与访问控制服务。免费层含100万月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理，支持多租户(B2B)场景。免费2.5万认证请求，全安全功能无限制（OTP/无密码/策略等）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可面向任意规模企业销售。免费200用户和1万封事务邮件（含"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份（认证与授权）。免费5000月活用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证，支持100万月活用户。包含邮箱+密码、社交登录、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您首选的移动应用测试平台，确保应用完美运行。免费方案包含：一个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS和Android应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发服务。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时管理设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。免费层支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息、跨可用区的多节点部署
* [courier.com](https://www.courier.com/) - 统一推送、应用内消息、邮件、聊天、短信等多渠道消息API，含模板管理等功能。免费套餐每月1万条消息
* [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件、推送、短信、产品导览、横幅等）。每月最多1,000名活跃用户免费
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月1万条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理，支持MQTT设备连接。永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) - 开发者通知基础设施。单次API调用即可发送应用内消息、邮件、短信、Slack和推送通知。免费套餐每月1万条消息
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为软件添加用户通知功能。免费套餐含每月1万条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) - 开源通知基础设施。统一管理邮件、短信、站内信、应用内消息和推送通知的组件与API。免费套餐每月3万条通知（保留90天）
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持100个同时连接和每日20万条消息
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持20个同时连接和每日10万次事件
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费套餐含4KB消息大小、50个活跃连接和每月5GB数据
* [pubnub.com](https://www.pubnub.com/) - 支持Swift/Kotlin/React的消息服务，每月100万次事务（单次事务可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API服务，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费层](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持1万订阅用户，推送次数不限，含浏览器内消息功能
* [httpSMS](https://httpsms.com) - 通过Android手机作为短信网关收发短信。每月免费200条收发额度
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全Serverless MQTT代理。永久免费100万会话分钟/月（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒设置。免费套餐：每日50条消息至1台设备1个应用
* [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知流程。单次API调用即可创建并发送事务性、定时任务和互动通知。免费套餐每月1万条通知，支持摘要、批量、多渠道、偏好设置等多节点工作流
* [SMSGate](https://sms-gate.app) - Android™短信网关，通过云路由实现设备间短信收发。完全免费的云服务（建议每日超1万条用量时通知以维持服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储，保留15天，支持7天内的日志搜索。
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB，保留7天
* [log.dog](https://log.dog/) — LogDog是一款远程调试/日志记录SDK（支持iOS和Android），提供Web界面。实时捕获所有日志、请求和事件，并支持拦截功能。每月免费100MB日志量。
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天。
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目。
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条源字符串），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管的本地化引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限用于1个Java、1个.NET、1个PHP和1个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版数据保留1小时
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）。
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器，不限用户数、仪表板和告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API/网络检查和1500次浏览器检查运行。
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描次数、用户数和存储账户数。订阅版：自动化扫描、API访问等。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监控器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控点，推荐注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5000美元免费。
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。免费保留24小时数据
* [fivenines.io](https://fivenines.io/) — 带实时仪表板与告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的观测平台，集成指标与日志。免费版：3用户、10个仪表板、100条告警，Prometheus和Graphite指标存储（1万序列，14天保留），Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。最多20个检查点免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack与Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅数与团队数。
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费提供500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控点免费
* [linkok.com](https://linkok.com) - 在线死链检测工具，小网站（100页内）免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware观测平台全面可视化应用与技术栈，支持规模化监控与诊断问题。开发者社区永久免费计划包含：日志监控（100万日志事件）、基础设施监控与应用性能监控（2台主机）。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。"永远免费"计划提供10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，含2个仪表板/状态页。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是采集实时指标的开源工具。持续发展的产品，GitHub也可找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台帮助工程师打造更完善软件。从单体到无服务架构，可插桩所有组件并分析、排查、优化整个软件栈。免费层每月100GB数据摄入、1个全权限用户和不限基础用户。
* [nixstats.com](https://nixstats.com) - 免费监控1台服务器。含邮件通知、公开状态页、60秒间隔等功能。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站与API正常运行时间监控、定时任务监控及状态页。免费层含5个检查点（3分钟间隔），通过Slack、Discord和邮件发送告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火长城屏蔽。通过对比中国与美国服务器的DNS结果与ASN信息识别DNS污染。
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警与值班管理服务，保障业务永续运行。最多5用户免费。
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，含告警、可视化与基础报告功能。最多100个传感器免费。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，免费支持6个监控点（每日检查）。
* [pagerly.io](https://pagerly.io/) - 在Slack管理值班（集成Pagerduty、OpsGenie）。免费支持1个团队（1个团队指1个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更与正常运行时间。免费方案含5个URL、每日核心指标监控、10个HTML/SEO变更监控、167个国家联盟链接监控及邮件告警。
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控，免费支持10万次事件（不限项目和状态页）。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。不限URL数量，通过Discord、Slack或邮件接收宕机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器（10分钟间隔）。监控SSH、HTTP、HTTPS及任意TCP端口。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可定制公开状态页（SSL子域名）。开源项目与非营利组织免费提供专业版。
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月历史运行时间/日志、不限状态页和自定义域名！永久免费且不限邮件告警。无需信用卡。

  * [sematext.com](https://sematext.com/) — 24小时指标免费，无限服务器，10个自定义指标，500,000个自定义指标数据点，无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台上的强大服务器监控，支持指标和日志，无需复杂设置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron和SSL监控，每个类别5个免费监控项
* [sitesure.net](https://sitesure.net) - 网站和Cron监控 - 2个免费监控项
* [skylight.io](https://www.skylight.io/) — 前100,000次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控。提供HTTP监控、基于浏览器的监控、DNS监控、域名监控、状态页面等。免费套餐包括10个HTTP监控项、1个DNS监控项和1个状态页面
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
* [Squadcast.com](https://squadcast.com) - Squadcast是一款端到端的事件管理软件，旨在帮助您推广SRE最佳实践。最多10名用户的永久免费计划
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计项，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页面监控，3个免费监控项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。3个位置和20个主要网络服务数据源免费
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监控项，5分钟间隔，可自定义状态页面（包括商业用途）。通过电子邮件和Telegram享受无限实时通知。无需信用卡即可开始使用
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页面
* [zenduty.com](https://www.zenduty.com/) — 面向网络运营、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应编排平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控工具，提供多种监控类型：Cronjob、关键词、网站、端口、Ping。25个正常运行时间检查项，3分钟间隔检查免费。支持电话、短信、电子邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费，Linux和Windows服务器监控：5个免费，状态页面：1个免费 - 移动应用、多种通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 为Web开发者提供的错误日志与运行状态监控。开源项目可免费使用小型企业订阅版。
* [Embrace](https://embrace.io/) — 移动应用监控。小团队每年100万用户会话内免费使用。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持无限量自托管。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，支持无限量自托管。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费版每月5,000次错误，不限用户数，30天数据保留期
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费方案。每月5,000次错误/1用户免费，自托管不限量使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成，支持高级数据查询与邮件/Discord通知。
* [Semaphr](https://semaphr.com) — 移动应用免费一站式紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好型一键错误报告。免费版不限提交次数。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用户免费版不限录制次数。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费版支持最多1,000名月活跃用户，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，支持克隆、完整编辑与下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家主讲的免费短期课程，一小时快速掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程与数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程与Python等认证级免费课程
* [MIT开放式课程](https://ocw.mit.edu/) - 公开2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS基础与进阶、JavaScript及SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程（React/Node.js/GraphQL/TypeScript等），支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费课程，涵盖计算机科学、工程与数据科学
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南平台，为用户文章提供免费dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click与Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言开源教育平台，含人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费计划包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 新闻简报服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似Bitly的联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具（不暴露凭证），免费层含200次月请求/2个模板/50KB请求限制/有限联系人历史
* [EtherealMail](https://ethereal.email) - 虚拟SMTP服务（主要面向Nodemailer和EmailEngine用户），完全免费的反事务性邮件服务（邮件永不投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器（多域名支持），页面刷新即更新地址，完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时邮箱生成器（支持10个域名，无限地址创建），含广告但完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发（注：使用.casa/.cf等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器（用于测试），免费账户永久每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发（支持收发）
* [Inboxes App](https://inboxesapp.com) — 每日创建3个临时邮箱（通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱（邮件3天后自动删除），可自建开源版
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC配置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC配置（roundsphere.com提供的免费服务）
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面查看
* [mailchannels.com](https://www.mailchannels.com) - 邮件API（含REST API和SMTP集成），每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册（120次/小时请求限制）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者+每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 100名订阅者+无限邮件+自动化流程免费
* [MailerLite.com](https://www.mailerlite.com) — 1000名订阅者/月+12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统（任意收件箱可用）
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封限制）
* [Mailnesia](https://mailnesia.com) - 免费临时邮箱（自动访问注册链接）
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API+公共邮件托管+出站捕获+Slack/Webhook集成（1500次/月API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP，每月3500封事务性和营销邮件免费。开发用虚拟SMTP服务器（1收件箱/100条消息/无团队成员/2条/秒速率限制）
* [Mail7.io](https://www.mail7.io/) — 开发者QA用免费临时邮箱（通过Web或API即时创建）
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱（通过网站或RSS阅读邮件）
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID+1域名+1收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件→提取数据→发送到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件+无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（端到端加密），1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API（免费10000封/月），异步发送/多SMTP服务器/黑名单/日志/跟踪/Webhook等
* [QuickEmailVerification](https://quickemailverification.com) — 每日100次免费邮箱验证（含DEA检测/DNS查询/SPF检测等API）
* [Resend](https://resend.com) - 开发者事务性邮件API（每月3000封/每日100封免费+1自定义域名）
* [Sender](https://www.sender.net) 每月15000封邮件/2500名订阅者免费
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者+15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自建邮箱别名/转发方案（免费5个别名/无限流量/收发不限），教育工作者免费
* [Substack](https://substack.com) — 无限免费新闻简报服务（收费时开始付费）

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封免费事务性邮件。
* [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮件服务，支持同时使用多个邮箱和邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管。
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持邮箱确认和一次性邮箱检测；每天25次免费验证。
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多款含免费方案的服务：
   - [邮箱](https://zoho.com/mail) 5用户免费。每人5GB存储，25MB附件限制，支持一个域名。
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版含1个并发远程支持许可和5台无人值守计算机的无限时长访问，适用于专业和个人用途。
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储。
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储。捆绑Zoho办公套件（Writer、Sheets和Show）。
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案。
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛。
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议及10名网络研讨会 attendees。
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理工具。
   - [Showtime](https://zoho.com/showtime) — 面向5人以内远程培训的会议软件。
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品。
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，ZIP备份，RSS/Atom订阅，访问控制和自定义CSS。
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅及1用户免费，支付托管由Zoho完成。保留最近40条订阅记录。
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面及最多50笔支付。
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守计算机。
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储，无限用户，每频道100用户及SSO。
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排期
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队规模，提供卓越支持且价格合理。免费版包含10个特性开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能，跨Web、移动和服务器端应用管理特性开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源特性开关与A/B测试平台，内置贝叶斯统计分析引擎。最多3个用户免费，支持无限特性开关和实验。
* [Hypertune](https://www.hypertune.com) - 类型安全的特性开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，支持无限特性开关和A/B测试。
* [Molasses](https://www.molasses.app) - 强大的特性开关和A/B测试工具。免费版支持3个环境，每个环境5个特性开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域特性开关管理平台。免费版包含10个开关、2个环境且不限请求量。SDK、分析仪表盘、发布日历、Slack通知等功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能强大的特性管理、A/B测试与分析平台。其慷慨的免费计划提供无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源特性开关与A/B测试工具，支持代码化配置和全类型TypeScript SDK。与Next.js、React等框架深度集成，提供丰厚免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 经商业使用许可的免费字体库，精心挑选的字体并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速便捷地为网站安装众多免费字体
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰、可供下载的多样化字体库
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，支持个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商业字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供开源免费字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，含中日韩字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大的开发者友好型表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版含无限表单，每月20次提交，若展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月250次提交。拥有友好的现代GUI界面，支持Google Sheets、Airtable、Slack、Email等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets、Slack、ActiveCampaign、Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每月每表单限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过UI转发提交至邮箱、Slack或Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版无限表单和提交，含预制模板、反垃圾和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态站点。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单和调查工具。50+专家设计模板。免费账户限1个活跃调查，100次回复/调查，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调查和用户行为分析产品。永久免费版每月500活跃用户，无限回复和事件，多集成导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义重定向和响应页，Telegram & Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调查。AI自动分析提取洞察。免费版含邮件、网站、产品内或移动端调查，AI调查生成器，每月25次回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费版5个表单，每表单最多3步，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版每表单限10个字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版签名文件加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站联系表单，无需后端代码。免费版无限表单和域名，每月250次提交。
* [WebAsk](https://webask.io) - 调查和表单构建器。免费版3个调查/账户，每月100次回复，每调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 网站快速表单。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。不限表单数量和功能，免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任何PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版100次回复，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 移动端应用内调查。用Qualli AI设计完美问题。免费版支持500MAU，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版限25次反馈提交。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调查收集反馈。免费版含1个活跃调查，每调查25次回复，可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过策略即代码构建的防护机制，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足企业质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费自动化Pull Request审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。两行代码即可调用200+种LLM的统一格式。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，提供可观测性套件和AI网关功能。每月免费发送和记录多达10,000次请求。
* [Arize AX](https://arize.com) - 面向AI工程师/项目经理的平台，内置Alyx智能体，用于评估和观测AI应用与智能体。免费产品包含每月25,000次数据追踪和1GB数据摄入量。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估系统、提示词沙盒和数据管理工具。免费计划每周提供最多1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 跨应用统一搜索引擎，支持基于个人信息的智能问答。免费计划提供无限统一搜索和每日5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可永久免费使用全平台功能。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码和医疗管理功能。专业套件同时提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词与数据集，调试LLM应用性能问题。为所有LLM生成开放遥测标准追踪数据，免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - LLM运维平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，促进技术与非技术团队协作优化生成式AI产品。免费计划包含全平台功能，每月1,000次追踪和1个工作流DSPy优化器。[#开源项目](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 全生命周期评估、测试和部署LLM应用的工具。[#开源项目](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，支持团队协作调试、分析和迭代LLM应用。永久免费计划包含每月50,000次观测和全平台功能。[#开源项目](https://github.com/langfuse/langfuse)
* [Phoenix](https://github.com/Arize-ai/phoenix) - 由Arize AI团队开发的开源平台，提供AI智能体的追踪、模型评估和实验功能，所有特性基于Elastic License 2.0(ELv2)开源。
* [Pollinations.AI](https://pollinations.ai/) - 免注册、免API密钥的免费图像生成AI，提供多种网站/工作流集成方案。[#开源项目](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 基于大语言模型的商业智能解决方案，可快速替代Tableau/Power BI/Looker。免费永久计划提供1个工作区、5个数据源连接和无限分析功能。[#开源项目](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供DeepSeek R1/V3、Llama、Moonshot AI等免费模型，适用于多样化NLP开发需求（注意存在速率限制）。同时提供Claude/OpenAI/Grok/Gemini/Nova等付费高级模型。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000字免费额度，支持Azure OpenAI、DeepSeek和Google Gemini模型，适用于代码生成、深度研究和图像创建。
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — 基于AI的SaaS工具，智能降噪除回声同时保持人声自然清晰。完全免费：无限次一键增强，免登录，支持MP3/WAV/FLAC格式

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简洁、快速、可靠的CDN服务。cdnjs是由Cloudflare提供支持的开源免费CDN，全球超过11%的网站使用
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管流行的第三方JavaScript库如jQuery，可轻松集成到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简单方式，宣称单个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理服务。个人使用免费，支持一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整尺寸服务。实时处理图片并全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，含免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心节点，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持最多5个用户和每日1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，30秒超时限制。
* [Apply.build](https://apply.build/) — 免费构建部署GitHub应用，配备0.5 vCPU/512MB内存、欧洲服务器、自动防火墙、实时性能监控。支持Node.js/Python/Go/Java/静态站点/微服务等。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket），含认证服务。免费版每项目包含1数据库、3存储桶、5云函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链，商业用途免费且项目数量无限制。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript自动生成可视化CMS的边缘原生前端平台，内置A/B测试、内容分片和实时分析。适合内容型网站和企业电商，免费支持5k月访问量或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版含10万日请求和100GB月流量。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储+1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析自动生成基础设施的后端框架，免除样板代码。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层（AWS费用另计，可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费提供永不休眠实例+2连接数/1万行/无备份的PostgreSQL数据库。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，免费计划含10万次服务调用+1万异步任务+10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，基于任意触发器[免费运行](https://docs.pipedream.com/pricing/)代码化工作流，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费基础账户含1个your-username.pythonanywhere.com应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版含500次/小时、2,500次/日和5万次/月调用，仅付费版支持自定义域名。
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持Docker容器/Web应用/API的Git部署、自动扩缩和内置服务网格。免费实例可部署至德国法兰克福或美国华盛顿，另提供法兰克福/华盛顿/新加坡的免费托管PostgreSQL（512MB内存+2GB存储+0.1CPU）。
* [Napkin](https://www.napkin.io/) - 函数即服务，免费额度500MB内存/15秒超时/5千次月调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用的Galaxy托管平台，含免费MongoDB共享主机和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库，免费版含2服务+2定时任务+1数据库。
* [YepCode](https://yepcode.io) - 无代码界面与编程语言结合的全能集成平台，免费版含[1,000次yeps](https://yepcode.io/pricing/)调用。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，含CI/CD和自动HTTPS。[免费计划](https://wundergraph.com/pricing)支持3项目/1GB出口流量/300分钟月构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务+每月5美元额度。
* [mogenius](https://mogenius.com) - 简易Kubernetes服务管理平台，免费版支持连接本地Kubernetes创建生产级测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数提供商，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者平台即服务，免费版含5个组件+100美元月额度。
* [Daestro](https://daestro.com) - 跨云与本地环境运行计算任务，免费版含10并发任务/2计算实例/1云提供商/1容器注册表/1定时任务。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用内触发事件时发送Slack消息或添加Google表格行。每月免费额度达5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动与Web后端即服务，含1GB免费文件存储、每月50,000次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - 提供构建企业级数字创新的文档与资源，包含平台、SDK及组件库的完整沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1000名用户的应用免费使用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录，500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨免费套餐。
* [Firebase](https://firebase.com) - 助力应用开发与运营。免费Spark计划包含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等多项功能永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的聊天、消息、视频/音频及信息流功能。
* [hasura.io](https://hasura.io/) - 为现有数据库提供即时GraphQL API，免费额度1GB/月数据传输。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端，免费套餐含PostgreSQL、GraphQL（Hasura）、身份验证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知，每月10,000封邮件发送额度。
* [paraio.com](https://paraio.com) - 带灵活身份验证、全文搜索和缓存的后端API，单个应用免费1GB数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息和100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务，每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务，2000订阅者内无限通知。
* [pusher.com](https://pusher.com/beams) - 2000月活用户免费无限推送通知，支持iOS/Android的统一API。
* [quickblox.com](https://quickblox.com/) - 即时消息、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置含身份验证、数据、文件等服务的服务器，支持管道组合与数据转换。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用低代码工具快速构建应用，免费开发者计划提供完整Lightning平台访问权限。
* [simperium.com](https://simperium.com/) - 实时跨平台数据同步，免费额度2500用户/月。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，免费计划含身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) - 含鉴权、配额和监控的API管理，提供免费云服务。
* [zapier.com](https://zapier.com/) - 应用自动化工具，免费版每15分钟5次触发，每月100次任务。
* [IFTTT](https://ifttt.com) - 自动化连接应用与设备，免费版支持2个小程序。
* [Integrately](https://integrately.com) - 单点击自动化任务，免费100次任务/15分钟更新，5个自动化流程。
* [LeanCloud](https://leancloud.app/) - 移动后端服务，免费1GB存储、256MB实例、每日3千次API请求和1万次推送。
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账户注册超过180天的用户提供5美元/月免费额度，适合托管应用及数据库。（[领取免费额度](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持15+种数据库和任意API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，提供可定制的移动端和网页应用。具有拖拽界面、离线支持、实时位置追踪及第三方服务集成功能
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理10倍速构建内部工具、自定义用户流程、数字体验、自动化系统、管理面板和运营应用的低代码平台
* [lil'bots](https://www.lilbots.io/) - 在线编写并运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费版包含完整API访问权限、AI编程助手及每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙箱环境，支持总用户数，每应用0.5GB存储和1GB内存。免费版包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS（支持本地或云端部署），免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 高度可定制的低代码内部应用构建平台。能用JavaScript和API实现的功能均可通过Retool完成。免费版支持每月最多5个用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的开源企业应用平台。支持AI生成、可视化编辑及代码扩展，提供集成、认证、权限和审计日志等集中管控功能
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码业务应用框架。连接数据库、云存储、GraphQL、API端点、Airtable等数据源后，通过拖拽式构建器快速开发应用
* [UI Bakery](https://uibakery.io) — 支持JavaScript/Python/SQL深度定制的低代码Web应用开发平台。提供云端和自托管方案，免费版最多支持5个用户
* [manubes](https://www.manubes.com) - 专注工业生产管理的强大无代码云平台。免费版支持1名用户每月100万次工作流活动（[德语版本](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费虚拟主机，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义 Web 服务器，支持 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机 + 免费短域名，支持 PHP、MySQL、应用安装器、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费使用 + 开发者优先的部署和开发平台，最小化基础设施烦恼并加速配置。
  * [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建 Web 和移动应用，免费版带 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) — 专注于 Web3 前端的去中心化虚拟主机平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) — 在 App Platform Starter 层级免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到 Web。仅限静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并实时公开分享。可通过其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费虚拟主机，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持及许多其他免费主机未提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费托管服务，包括行业最佳控制面板和 50+ 免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费虚拟主机，配备 Plesk 控制面板，支持 PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP 邮件，无限带宽，免费子域名，1000 MB 存储空间，可升级。
  * [Kinsta 静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，支持自定义域名和 SSL，每月 100 GB 带宽，260+ Cloudflare CDN 节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) — 支持 SFTP 访问的文件上传下载的虚拟主机，提供 PHP 支持。
  * [Neocities](https://neocities.org) — 静态站点，1 GB 免费存储空间和 200 GB 带宽。
  * [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，每月免费 300 积分（相当于 30 GB 带宽）。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包含多种形式的虚拟主机（静态站点托管、基于容器的虚拟主机、WordPress 及其他众多托管应用一键可用）。提供一个免费虚拟主机（静态或容器化）和一个免费数据库，100 GB 带宽和每月 300 分钟构建时间。
  * [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。开发者和机构免费使用。不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等功能。
  * [render.com](https://render.com) — 统一云平台，用于构建和运行应用及站点，提供免费 SSL、全球 CDN、私有网络、Git 自动部署，以及 Web 服务、数据库和静态网页的完全免费方案。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布服务。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) — 使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50 个页面，50 MB 存储空间，仅限 170+ 可用预定义主区块，无自定义字体、网站图标和域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN 和每次 `git push` 后的唯一预览 URL。完美支持 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于 SaaS 的网站构建工具 — 无限网站，70+ 区块，五个模板，自定义 CSS、网站图标、SEO 和表单。不支持自定义域名。
  * [Qoddi](https://qoddi.com) — 类似 Heroku 的 PaaS 服务，采用开发者中心方法并包含全功能特性。免费层级支持静态资源、预发布环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) — 社区支持的免费 Flarum 托管，最多支持 250 名用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，容器存活时间两周，每个项目 500 MB RAM，SFTP — 1G 磁盘空间。
  * [Serv00.com](https://serv00.com/) — 3 GB 免费虚拟主机，每日备份（保留 7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），支持 MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等多种语言。
  - [Sevalla](https://sevalla.com/) — 旨在简化应用、数据库和静态网站部署管理的托管平台 — 1GB 站点限制，100GB 免费带宽，600 分钟免费构建时间，每个账户 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) — 免费托管1个域名，支持50条DNS记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管，免费版支持1个DNS区域（域名）及10条记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多5个域名，含多平台配置指南。
* [Dynv6.com](https://dynv6.com/) — 支持[API](https://dynv6.com/docs/apis)的免费动态DNS服务，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，并提供基于用户共享域名的[子域名服务](https://freedns.afraid.org/domain/registry/)。注册后通过"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) — 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册的免费动态DNS服务，无跟踪、日志或广告，域名数量不限。
* [noip](https://www.noip.com/) — 免费动态DNS服务，支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，输入含IP地址的主机名即可返回该IP。
* [zilore.com](https://zilore.com/en/dns) — 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费托管服务。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份与DNS变更监控，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为云提供的免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费托管最多3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地将文件上传并存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费提供10GB类Amazon S3对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费提供5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松升级至更高级方案或跨云迁移。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求的免费额度
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和网页数据管理器。免费方案含5GB存储和每分钟60次API调用，支持2名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点含2核CPU、2GiB内存、8GiB存储。每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每月50万次命令、256MB最大数据库容量和20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，含1个节点和8GB存储，专为开发者打造，支持从物联网到AI的新一代应用开发
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费额度含25MB存储、1个代理服务器和基础分析功能
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的类电子表格灵活数据库。免费版含无限表格、2,000行数据、1个月版本历史和最多25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库能力及主流商业应用集成的工具。免费方案包含无限用户、10个工作区和每个工作区2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RU)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是SQLite开发体验的边缘数据库。永久免费方案含9GB总存储、最多500个数据库、3个部署位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费额度为每5分钟3MB写入、30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务，提供模式、关系、自动REST API（支持类MongoDB查询）及高效多用户管理界面。免费版允许3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RU和10GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图形规模（5万节点、17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，免费层含0.5GB总存储、1个项目、10个分支、无限数据库、始终可用的主分支（非主分支计算5分钟后自动暂停），每月20小时非主分支活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸金属运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入，可将SQL查询发布为托管HTTP API。免费层无时间限制，含10GB存储和每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库支持MySQL/MariaDB/MongoDB/PostgreSQL，容量上限10MB。
* [Xata Lite](https://lite.xata.io/) - 内置强大搜索与分析功能的无服务器数据库。单一API、多类型安全客户端库，专为开发流程优化。免费方案提供10个分支和15GB存储，无暂停或冷启动。
* [8base.com](https://www.8base.com/) - 面向JavaScript开发者的全栈低代码开发平台，基于MySQL和GraphQL构建的无服务器后端即服务。可通过UI应用构建器快速开发网页应用，免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、始终可用不关机、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费版支持最多5人加入的无限网络，安全扩展类LAN网络至分布式团队。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码后提供wss://URL，并可监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装或注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类LAN网络。无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，免费版每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发及代理所有Webhook至公共或内部地址（如localhost），同时通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://子域名.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何位置开发、测试和监控Webhook。免费版每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端的端到端加密网络，提供桌面/移动/NA客户端，可通过网页界面配置自定义路由规则及审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，将本地服务器暴露至互联网。免费版隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) — 通过隧道发布本地服务至公共自定义URL，并通过访问控制保障安全。免费版支持单个集群中的5个服务。
* [Expose](https://expose.dev/) — 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一体化项目发布平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单/里程碑管理/论坛式消息/文件共享/时间追踪。支持3个项目/20名用户/1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内网与项目管理工具。免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图）。免费版支持15用户/图表和25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具。免费支持5名用户，含Jira集成/无限视频会议/团队/会话
* [clickup.com](https://clickup.com/) — 项目管理工具。基础功能免费，高级版含云存储。提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪工具。永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具。免费版支持个人用户创建无限私有图表
* [Codegiant](https://codegiant.io) — 含代码仓库托管和CI/CD的项目管理平台。免费版支持5人团队/不限仓库数/500分钟CI/CD时长/30,000分钟无服务器代码运行/1GB存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台。免费版含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目/不限用户/1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理。免费版不限项目/用户/存储空间
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具。免费版每月可创建3个公共看板和1次调研
* [GForge](https://gforge.com) — 复杂项目管理与问题追踪套件。SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具。可通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可对比两个GraphQL模式差异的工具，会标记破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 含实时聊天功能的客户支持软件。通过复制粘贴脚本即可部署
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用Bug报告与反馈SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/)  — 支持多视角查看的基础设施交互图表工具。免费版可创建无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理工具。免费版支持2个看板和2名用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活强大的看板工具。免费版支持1名用户创建无限看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 支持Slack/Discord/Figma/Github集成的产品开发协作平台。免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度追踪工具。含网页版和Chrome插件，完全免费
* [Kumu.io](https://kumu.io/)  — 关系图谱工具。免费版可创建无限公开项目，学生可创建私有项目
* [Linear](https://linear.app/) — 极简风格问题追踪工具。免费版不限成员/支持10MB文件上传/250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS工具。免费版支持10名用户/20个自定义字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具。免费版支持3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目且不限成员
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。免费版提供100MB存储/5名用户，支持无限工作区/会议/任务单/时间表
* [Ora](https://ora.pm/) - 敏捷任务管理工具。免费版支持3名用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限公开项目数量，免费版支持2个私有项目（3名活跃用户+不限只读用户）
* [plan.io](https://plan.io/) — 含代码仓库托管的项目管理工具。免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目与产品管理工具。免费版不限成员/支持5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克估算工具

  * [ScrumFast](https://www.scrumfast.com) - 拥有直观界面的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具。免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版提供不限量的任务、迭代和工作区，且无用户数量限制
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板到Scrum再到各类运营流程。免费版支持无限用户，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲。免费版包含1个工作区（不限任务与项目）、1GB文件存储、1周项目历史记录及每次视频会议最多5名参与者
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队的站会、回顾与迭代规划工具。15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，提供高级付费方案
* [teleretro.com](https://www.teleretro.com/) — 融合破冰活动、动图与表情的趣味回顾工具。免费版包含3次回顾会议且成员数量不限
* [Tenzu](https://tenzu.net/) — 面向敏捷团队的轻量级项目管理工具。SaaS版本采用自愿付费模式，用户可选择0元使用且无功能限制{[详情](https://tenzu.net/pricing/)}
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台。个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版每个图表最多支持4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版功能：5个活跃项目/每个项目5名用户/5MB文件上传/3个筛选器/1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具。无限个人看板，10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台集成与众测服务，免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 提供项目管理、版本控制与问题追踪的产品设计平台。免费版支持无限项目与协作者，3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。最多3名用户免费，项目数量不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 为开源项目与私有项目提供免费托管版（InCloud），支持3名用户。含时间追踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — 深度集成GitHub的项目管理方案。公共仓库、开源组织与非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版支持5名成员，5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用免费版专为自由职业者设计，支持无限记录/项目/客户/标签/报表等功能；[Toggl Plan](https://toggl.com/plan/)任务规划工具免费版为独立开发者提供不限量任务/里程碑/时间线
* [Sflow](https://sflow.io) — 专为敏捷软件开发、市场营销、销售与客户支持打造的项目管理平台，特别适合外包与跨组织协作项目。免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com打造的生产力工具，可在事项/任务内实现结构化清单、模板与审批流程。小团队适用免费方案

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也支持其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 简单安全的Borg Backup异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时优化和尺寸调整。免费套餐含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，支持多种尺寸调整、压缩和水印功能。提供响应式图片/360度全景/图片编辑的开源插件。免费月套餐含25GB CDN流量、25GB缓存存储及无限转换。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP等语言的图片上传、处理、存储和分发服务。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN流量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件分享，支持客户端处理且服务器无法访问数据。免费上传1GB以内文件且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费版每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，下载后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图片/音视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 支持网页端和API的免费文件共享存储平台，无文件大小/带宽/下载次数限制，但十天无下载会自动删除。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN处理流媒体服务。免费套餐含每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图片的机器人，在不损失质量的前提下减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限容量的图片托管服务，单图限32MB。上传后可获取直链、BBCode和HTML缩略图，登录可查看历史记录。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限量社交媒体封面图生成API。
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费版支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协作式模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端加速服务（缓存/图片代码优化/CDN）。免费版每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享与跨平台管理工具。基础版支持无限传输（单文件限250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI托管仓库。提供限量免费版，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目/黑客松/移动应用设计的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费1GB存储。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的趣味服务。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的批量二维码生成器，单次最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表/图形/二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal等主流CMS平台，累计处理超70亿张图片。
* [Shotstack](https://shotstack.io) - 大规模视频生成与编辑API，免费版每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码服务。开源项目/慈善机构/学生可通过GitHub学生包免费使用，商业应用测试期享2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片服务，包含CDN/处理API/前端优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于先进算法的媒体处理管线工具集，开发者完全免费使用：文件上传API/UI、图片CDN/源服务、自适应交付和智能压缩。免费版含3000次上传/3GB流量/3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN，支持自动优化与实时转换。免费版每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私的零知识文件存储服务，注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费20GB空间支持三台设备，推荐用户可获5GB奖励（90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – 全球图像CDN服务，60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。立即申请[开发者免费账户](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI文档处理工具，可将PDF、图像转换为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡、代金券和促销活动的定制二维码。支持自定义样式、颜色、logo等。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪机制，完全免费使用。
* [Doradrop](https://doradrop.com) — 无限存储空间的无广告文件共享平台，无需登录即可通过安全链接即时分享文件。

* [Ente](https://ente.io/) - 端到端加密的云存储服务，支持照片、视频和2FA密钥托管。可自托管，永久免费版提供10GB存储（免费用户数据仅保留单副本）。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，快速创建现代化响应式网站，非设计师也能轻松打造精美界面
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板库，提供丰富首页模板，支持代码包下载快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的一站式编码平台，支持设计系统的构建、文档化、发布与维护。免费版允许3名编辑者协作1个设计系统，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费网页应用，支持SVG绘制及导出为SVG/PNG/JPEG等多种格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，同时提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 全格式转换工具，支持208种格式（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变色工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，优质资源完全免费下载
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑者和3个项目
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，支持布局迭代与动效制作。免费版允许无限查看者，最多2名编辑者和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/场景授权）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变色选择工具
* [Icon Horse](https://icon.horse) – 通过简易API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) – 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具集。免费版提供有限格式的低分辨率资源（需标注来源）
* [landen.co](https://www.landen.co) — 无代码生成、编辑及发布精美网站与落地页，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成器，在URL后添加尺寸参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，为设计师/开发者提供Lottie动画工具及Android/iOS/Web插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变色/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 无限量免费思维导图云端存储，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版包含3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 社交媒体与电商用T恤/服装模型生成器，提供40种免费模板
* [Modeldraw.com](https://modeldraw.com) — 全功能图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限团队成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 浏览器端快速矢量编辑器（完全免费）
* [NSPolygon](https://nspolygon.com) — 免费图库/图标/插画资源站
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 网页端开源设计与原型工具，支持SVG（完全免费）
* [pexels.com](https://www.pexels.com/) - 免版税商用图库，提供免费API支持关键词搜索
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，兼容PSD/XCF/Sketch格式（Adobe Photoshop/Gimp/Sketch界面）
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 无缝集成代码库的快速网页设计与页面生成器，可构建响应式页面/复杂组件，支持代码扩展并发布至生产环境
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持URL直链调用
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器端直接转换PNG为WebP，无需上传（全客户端处理保障隐私安全）
* [Proto.io](https://www.proto.io) - 无需编码的全交互式UI原型工具。免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) — 简易应用图标尺寸调整管理服务
* [Rive](https://rive.app) — 创建并发布精美动画至任意平台。个人用户永久免费，提供编辑器托管服务及多平台运行时支持

  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模型。
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局中的主题变化。
  * [Tailark](https://tailark.com/) - 一组专为营销网站设计的现代化、响应式、预构建UI块。
  * [tabler-icons.io](https://tabler-icons.io/) — 超过1500个免费可复制粘贴的可编辑SVG图标。
  * [tweakcn](https://tweakcn.com/) — shadcn/ui的美丽主题。实时自定义颜色、排版等。
  * [UI Avatars](https://ui-avatars.com/) - 根据名称生成带首字母的头像。URL可直接热链到您的网页/应用中。支持通过URL配置参数。
  * [unDraw](https://undraw.co/) - 不断更新的美丽SVG图像集合，完全免费使用且无需署名。
  * [unsplash.com](https://unsplash.com/) - 免费商用和非商用库存照片（随心所欲许可证）。
  * [vectr.com](https://vectr.com/) — 适用于Web和桌面的免费设计应用。
  * [walkme.com](https://www.walkme.com/) — 企业级引导和互动平台，免费计划提供三个最多5步的引导流程。
  * [Webflow](https://webflow.com) - 带动画和网站托管的所见即所得网站构建器。免费支持两个项目。
  * [Updrafts.app](https://updrafts.app) - 基于TailwindCSS设计的所见即所得网站构建器。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。最多创建4个免费看板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。一个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人注目、独特的图形和图像。
  * [Responsively App](https://responsively.app) - 免费开发工具，用于更快、更精确的响应式Web应用开发。
  * [SceneLab](https://scenelab.io) - 在线模型图形编辑器，拥有不断扩展的免费设计模板库。
  * [xLayers](https://xlayers.dev) - 预览并将Sketch设计文件转换为Angular、React、Vue、LitElement、Stencil、Xamarin等（免费开源，代码见https://github.com/xlayers/xlayers）。
  * [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大、SEO优化的网页构建器。前五个页面免费，无限自定义域名，所有功能，简单易用。
  * [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器。无水印，支持最高1080p导出。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松构建带托管的落地页。一个网站免费。
  * [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标、集合和品牌标志的大型资源库。内置浏览器简单矢量编辑程序，快速编辑文件。
  * [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合项目的图标或矢量图。下载免费商用SVG矢量图。
  * [haikei.app](https://www.haikei.app/) - Haikei是一款生成独特SVG形状、背景和图案的Web应用，可直接用于设计工具和工作流。
  * [Canva](https://canva.com) - 免费在线设计工具，创建视觉内容。
  * [Superdesigner](https://superdesigner.co) - 免费设计工具集合，只需点击几下即可创建独特背景、图案、形状、图像等。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作前端平台，可即时创建和发布无头静态网站。三个免费项目，无限协作者，免费代码导出。
  * [vector.express](https://vector.express) — 快速轻松转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
  * [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件转换平台。包括开发者转换器如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
  * [okso.app](https://okso.app) - 极简在线绘图应用。快速创建草图和视觉笔记。导出为PNG、JPG、SVG和WEBP。可安装为PWA。所有人免费使用（无需注册）。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
  * [Lucide](https://lucide.dev) - 免费可定制且一致的SVG图标工具包。
  * [Logo.dev](https://www.logo.dev) - 公司标志API，包含4400万+品牌，调用URL即可使用。前10,000次API调用免费。
  * [MDBootstrap](https://mdbootstrap.com/) - 个人和商用免费的Bootstrap、Angular、React和Vue UI套件，700+组件、精美模板、1分钟安装、丰富教程和庞大社区。
  * [TW Elements](https://tw-elements.com/) - 用Tailwind CSS重构的免费Bootstrap组件，设计更优，功能更多。
  * [DaisyUI](https://daisyui.com/) -- 免费。"使用Tailwind CSS但减少类名书写"提供按钮等组件。
  * [Scrollbar.app](https://scrollbar.app) -- 简单免费Web应用，设计网页自定义滚动条。
  * [css.glass](https://css.glass/) -- 免费Web应用，使用CSS创建毛玻璃设计。
  * [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS颜色渐变的精选集合，提供多种生成器创建自定义渐变。
  * [iconify.design](https://icon-sets.iconify.design/) -- 100+图标包的集合，统一界面。可跨包搜索图标并导出为SVG或流行Web框架格式。
  * [NextUI](https://nextui.org/) -- 免费。美丽、快速、现代的React & Next.js UI库。
  * [Glyphs](https://glyphs.fyi/) -- 免费，网络上最强大的图标，完全可编辑且真正开源的设计系统。
  * [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到应用中。可访问、可定制、开源。
  * [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年独特图标，完全免费。
  * [Image BG Blurer](https://imagebgblurer.com/) -- 为图像生成模糊背景框，使用图像源作为背景模糊，适用于Notion、Trello、Jira等工具。
  * [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费计划提供无限网站托管在其域名下。五个自定义域名网站。每月一万次页面浏览。2 GB资源存储。
  * [Nappy](https://nappy.co/) -- 美丽的黑人和棕色人种照片，免费。商用和个人使用。
  * [Tailkits](https://tailkits.com/) -- Tailwind模板、组件和工具的精选集合，外加代码、网格、阴影等实用生成器。
  * [Tailcolors](https://tailcolors.com/) -- 美丽的Tailwind CSS v4调色板。即时预览并复制完美的Tailwind CSS颜色类。
  * [Excalidraw](https://excalidraw.com/) -- 免费在线绘图文档网页，支持本地保存和导出。
  * [Lunacy](https://icons8.com/lunacy) -- 免费图形设计工具，支持离线使用，内置资源（图标、照片、插图）和实时协作。免费层包括10个云文档、30天历史记录、低分辨率资源和基本设计工具。
  * [Flows](https://flows.sh/) -- 完全可定制的产品采用平台，用于构建入门和用户互动体验。每月250名跟踪用户免费。

  * [OKLCH](https://oklch.net/) —— 为网页设计师和开发者提供的免费OKLCH颜色选择器与转换工具。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目类别筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包括桌面、平板和移动设备的截图。
* [Mobbin](https://mobbin.design/) - [移动截图] 通过我们包含50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动截图] 探索来自非洲和世界领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发人员和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动截图] 精心挑选的最精美的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求
* [carto.com](https://carto.com/) — 基于您的数据与公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供地图API和SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能，覆盖网页/桌面/移动端。每月含200万次免费底图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容推送
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等时线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传实现地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析及共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用API及SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 提供地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与SDK，含每周更新的免费矢量瓦片和四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) — 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) — 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) — 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) — 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) — 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享平台，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快应用构建工具的开源IDE，支持Windows/Mac/Linux/ChromeOS系统
* [AndroidIDE](https://m.androidide.com/) — 在Android设备上开发基于Gradle的真实应用的开源IDE
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台及应用框架
* [apiary.io](https://apiary.io/) — 支持即时API模拟和文档生成的协作式API设计平台（免费版含无限量API蓝图和用户，单个管理员账户及托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台热门可扩展编辑器，免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)并支持升级高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用，由Oracle支持并提供简易GUI
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理器，具备标签分类功能
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran/C/C++开源IDE，支持Windows/macOS/Linux系统
* [Cody](https://sourcegraph.com/cody) - 能编写（代码块/自动补全/单元测试）、理解（全代码库知识）、修复和查找代码的免费AI编程助手，支持VS Code/JetBrains/在线使用
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索、定义和复用代码片段的编程助手，个人和小型团队免费
* [codesnip.com.br](https://codesnip.com.br) — 支持分类/搜索/标签的简易代码片段管理器，完全免费无限制
* [cocalc.com](https://cocalc.com/) — （原SageMathCloud）云端协作计算平台，内置数学/科学/数据科学软件如Python/LaTeX/Jupyter Notebooks/SageMath/scikitlearn等
* [code.cs50.io](https://code.cs50.io/) - 为CS50课程定制的Visual Studio Code网页版，基于GitHub Codespaces构建
* [codepen.io](https://codepen.io/) — 前端网页开发 playground
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular/Preact等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 独立开发可视化组件，生成故事文档并发布至npm
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，开源社区驱动，Red Hat提供在线实例[workspaces.openshift.com](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据，加速产品概念验证
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4/Grok/Deepseek/Gemini等前沿模型的AI结对编程工具，免费版含基础AI模型本地处理能力
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE浏览器侧边栏工具，每日5次VM额度
* [ide.goorm.io](https://ide.goorm.io) 全功能云端IDE，支持多语言/Linux容器/端口转发/实时协作/Git集成，免费版含1GB内存和10GB存储（5个容器槽位）
* [JDoodle](https://www.jdoodle.com) — 60+编程语言的在线编译器，免费版REST API每日200积分
* [jetbrains.com](https://jetbrains.com/products.html) — IntelliJ IDEA/PyCharm等开发工具，学生/教师/开源团队可申请免费授权
* [jsbin.com](https://jsbin.com) — 支持HTML/CSS/JavaScript/Markdown/Jade/Sass的前端playground
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API端点，源码可本地部署
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 基于AI的免费云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级模拟JSON数据生成API服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式的测试数据，支持后端API模拟
* [Mocklets](https://mocklets.com) - HTTP协议模拟API工具，终身免费版支持并行开发测试
* [Paiza](https://paiza.cloud/en/) — 免配置的浏览器Web应用开发环境，免费版提供24小时有效期的服务器（每日4小时运行时间，2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 实时编译Sass/Less/Stylus/Pug等预处理语言，支持浏览器热重载和自定义工具
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程playground，提供免费编程课程
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发部署平台，支持主流NodeJS框架，快捷创建链接：[https://node.new](https://node.new)
* [Sublime Text](https://www.sublimetext.com/) - 功能强大且高度可定制的流行文本编辑器

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完备的集成开发环境，拥有数千款扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面/网页/云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，免费版功能有限
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持无缝工作流。可内联渲染任何内容，保存会话与历史记录，基于开放网络标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58个模板支持独立开发Web组件，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效数据库IDE，含服务器发现、ER图、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器（含Java/Python/C++/JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [DocBeacon](https://docbeacon.io) - 安全文档共享平台，提供文档追踪与参与度分析。免费版支持最多20个PDF文档（单文件最大10MB）、10个联系人、每文档2次分享，以及基础的查看/下载量、时长和参与度分析。
* [Userbird](https://userbird.com) - 替代Google Analytics的热图分析工具，支持会话录制与收入追踪。
* [Repohistory](https://repohistory.com) - GitHub仓库流量历史可视化面板（突破14天限制）。免费版可监控单个仓库流量。
* [Dwh.dev](https://dwh.dev) - Snowflake数据云可观测性方案，个人使用免费。
* [Hightouch](https://hightouch.com/) - 反向ETL平台，将数据仓库的客户数据同步至CRM/营销/客服工具。免费版支持1个数据目标。
* [Avo](https://avo.app/) - 简化的分析发布流程：统一跟踪计划、类型安全分析库、应用内调试器及数据可观测性。免费版含2名工作区成员和1小时数据回溯。
* [Branch](https://www.branch.io) - 移动端分析平台，免费版支持1万用户深度链接等服务。
* [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台，免费版支持从数据仓库同步10个字段至60+SaaS工具。
* [Clicky](https://clicky.com) - 网站分析平台，免费版支持单站3000次浏览分析。
* [Databox](https://databox.com) - 多平台数据整合的商业洞察工具，免费版含3用户、仪表板及数据源，支持1100万历史数据记录。
* [Hitsteps.com](https://hitsteps.com/) - 单网站每月2000页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件量，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源隐私友好型网站分析工具，免费托管服务（非商业用途）或自托管。含无限站点、6个月数据保留及10万月浏览量。
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私替代方案，免费版每月100万页面浏览且无需信用卡。
* [Expensify](https://www.expensify.com/) - 费用报告工具，免费个人审批流程
* [getinsights.io](https://getinsights.io) - 隐私优先的无Cookie分析，免费支持3000事件/月。
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为，免费版1万月会话量。
* [Hotjar](https://hotjar.com) - 网站热图分析，免费版每日2000页面浏览、100快照（上限300）、存储3张365天热图。应用内调查工具免费版含3个调查/反馈组件，每月20回复。
* [Keen](https://keen.io/) - 自定义数据分析平台，免费版1000事件/月。
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务，完全免费无用户/请求限制。
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析
* [Mixpanel](https://mixpanel.com/) - 10万月跟踪用户，无限数据历史与席位，支持欧美数据存储
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析，免费50万API调用/月。
* [optimizely.com](https://www.optimizely.com) - A/B测试工具，免费版含1网站+iOS+Android应用。
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具，免费版限100万用户许可。
* [Row Zero](https://rowzero.io) - 极速互联电子表格，直连数据库/S3/API，免费永久保留3个工作簿。
* [sematext.com](https://sematext.com/cloud/) - 免费5万操作/月，1天数据保留，无限仪表板。
* [Similar Web](https://similarweb.com) - 网站与App分析，免费版每指标5结果，含1月App+3月网站数据。
* [StatCounter](https://statcounter.com/) - 网站访问分析，免费版统计最近500访客。
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试平台，免费100万计量事件/月。
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者沙盒许可，免费获取最新预发布版在线服务。
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试工具，免费单用户无限测试。
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台，支持50万行动/90天数据/30+一键集成。
* [counter.dev](https://counter.dev) - 极简隐私友好型网站统计，免费或捐赠模式。
* [PostHog](https://posthog.com) - 全功能产品分析套件，免费100万事件/月，含250条应用内调查回复。
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，开源项目可申请个人免费订阅。
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的真实用户行为捕捉工具。
* [Beampipe.io](https://beampipe.io) - 隐私优先的简易网站分析，免费支持5域名+1万月浏览量。
* [Aptabase](https://aptabase.com) - 开源隐私友好型移动/桌面应用分析，免费2万事件/月，支持多平台SDK。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析/营销数据问题，无需代码实现生产环境监控。
* [LogSpot](https://logspot.io) - 统一Web与产品分析平台，含嵌入式组件与自动化机器人，免费1万事件/月。
* [Umami](https://umami.is/) - 简洁快速、隐私优先的开源Google Analytics替代品。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私分析工具，无限页面浏览/访客/热图，免费支持3域名+每域600次会话回放。

  * [Seline](https://seline.so) - Seline是一款简单私密的网站与产品分析工具。无Cookie、轻量级、独立运营。免费方案包含每月3,000次事件追踪，并提供仪表盘、用户旅程、转化漏斗等完整功能。
* [Peasy](https://peasy.so) - Peasy是注重隐私的轻量级网站与产品分析工具。免费方案支持每月3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie且操作体验提升10倍。免费版支持每月3,000次事件分析。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：1,000次页面浏览/天，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，含开发者工具用于错误复现、实时会话支持及产品分析套件。每月1,000次会话，全功能访问，7天数据保留
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，一个月数据保留，三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)
* [hotjar.com](https://www.hotjar.com/) — 每站点：1,050次页面浏览/月，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（1,500次会话/月），三个热力图，一个漏斗分析，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入1万美元以下免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，用于移动应用内订阅集成，支持iOS、Android、React Native、Flutter、Unity或网页应用。每月收入1万美元以下免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币与法币汇率。免费层级每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费DEVELOPER计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实物货币与加密货币的实时汇率数据，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单纠纷。免费Micro计划每月提供500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明数据来源。
* [Moesif API货币化](https://www.moesif.com/) - 通过用量计费从API创收，支持连接Stripe、Chargebee等平台。免费层级每月3万次事件处理。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购与订阅平台，包含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购和订阅后端服务（iOS和Android）。每月追踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人使用每月300次请求，每分钟限10次。

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

  * [Vagrant 云平台](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管Vagrant虚拟机的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义、基于Markdown的博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的平台
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件
* [Medium](https://medium.com/) — 深度探讨对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，帮助您从网站访客中建立活跃社区
* [Utterances](https://utteranc.es/) - 基于GitHub issues构建的轻量级评论组件，可将GitHub issues用于博客评论、维基页面等场景
* [Disqus](https://disqus.com/) - Disqus是网络社区平台，被数十万网站广泛使用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，支持"单个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等多种平台提供功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕捉时间及视窗尺寸调整。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括标准化元标签、精美链接预览、爬取功能及截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意网址快速获取可扩展的免费截图服务。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照捕捉服务。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（支持png/gif/jpg格式），包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图及域名智能API服务。每月免费100次请求。
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的理想平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管式移动应用持续集成/持续交付平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限制的隐私/Cookie政策及横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计与同意管理方案。免费版包含单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量受限情况下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整数据隐私平台，涵盖同意管理、隐私请求处理(DSARs)和数据映射。免费版包含核心同意管理功能，并向验证通过的开源项目提供高级方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图片创建美观的截图，方便在社交媒体上分享。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持以精美图片形式（如Twitter/Facebook帖子）或链接形式（如聊天或论坛）分享。
* [Blynk](https://blynk.io) — 提供API的SaaS平台，用于控制、构建和评估物联网设备。免费开发者计划支持5台设备，提供免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器。
* [Carbon.now.sh](https://carbon.now.sh) - 创建并分享类似截图的美观代码片段。常用于在Twitter或博客文章中优雅地展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标扩展。
* [Codepng](https://www.codepng.app) - 从源代码生成精美的快照，便于在社交媒体上分享。
* [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图，方便在社交媒体上分享。
* [Cronhooks](https://cronhooks.io/) - 安排一次性或周期性Webhook。免费计划允许5个临时任务。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务。无限任务免费。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。每月免费5次预订，包含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单的URL或域名转发工具。免费支持5个域名和每月20万次请求。
* [Elementor](https://elementor.com) — WordPress网站构建工具。免费计划提供40多个基础组件。
* [Exif Editor](https://exifeditor.io/) — 在浏览器中即时查看、编辑、清理、分析图片/照片的元数据，包括GPS位置和元信息。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞管理解决方案。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加Webhook支持，无需处理队列、退避重试和日志记录。免费计划每天100次投递，14天保留期，支持3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 检查域名、网站或IP地址的托管信息（如ASN、ISP、位置等）。还包含多种托管和DNS相关工具。
* [kandi](https://kandi.openweaver.com/) — 快速启动应用开发：通过代码片段和开源库复用，更快构建自定义功能、用例和完整应用。
* [Base64解码/编码工具](https://devpal.co/base64-decode/) — 免费的在线Base64解码和编码工具。
* [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord和自定义Webhook接收GitHub、GitLab、Bitbucket、PyPI、Maven、NPM、Yarn、Ruby Gems、Packagist、NuGet、Cargo和Docker Hub的新版本通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的EXIF数据，包括GPS位置和元信息。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理PDF模板，通过API动态生成并下载PDF。每月免费300份文档。
* [Pika Code Screenshots](https://pika.style/templates/code-image) — 通过VSCode扩展创建美观、可定制的代码片段截图。
* [QuickType.io](https://quicktype.io/) - 快速从JSON、Schema和GraphQL自动生成模型/类/类型/接口及序列化器，支持多种编程语言。将JSON转换为优雅的类型安全代码。
* [RandomKeygen](https://randomkeygen.com/) - 免费移动端工具，提供多种随机生成的密钥和密码，用于保护应用、服务或设备。
* [ray.so](https://ray.so/) - 为代码片段创建美观的图片。
* [readme.com](https://readme.com/) — 轻松创建美观的文档，开源项目免费。
* [redirection.io](https://redirection.io/) — 面向企业、营销和SEO的HTTP重定向管理SaaS工具。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理HTTPS重定向。免费计划包含10个来源和每月10万次访问。
* [Renamer.ai](https://renamer.ai) — 支持OCR、元数据提取和20多种语言的AI文件重命名工具。免费版每月15个文件，含桌面应用、批量重命名、自动重命名和基础支持。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET、POST、PUT、DELETE和HEAD方法，包含头部和令牌认证。提供基础登录系统保存请求。
* [Smartcar API](https://smartcar.com) - 车辆API，支持定位、获取油箱/电池电量、里程表、车门解锁/锁定等功能。
* [snappify](https://snappify.com) - 帮助开发者创建精美视觉内容，从代码片段到完整技术演示。免费计划支持3个同时编辑的快照，无限下载和每月5次AI代码解释。
* [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed导出与分析服务。免费版功能较少。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费版每份调查仅限10个问题和100个回复。
* [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话应用，支持全渠道部署（从网站实时聊天到WhatsApp）。免费计划不限机器人数量。
* [UUID生成器](https://newuuid.com/) - 即时生成UUID v1/v4/v7、GUID、Nil UUID、CUID v1/v2、NanoID和ULID，具备企业级性能和安全性。
* [Versionfeeds](https://versionfeeds.com) — 为喜爱的软件创建自定义RSS更新源。免费版支持3个订阅源。
* [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
* [Webacus](https://webacus.dev) — 提供多种免费的开发者工具，支持编码、解码和数据处理。
* [Volume Shader BM](https://volumeshaderbm.org) — 免费的基于浏览器的GPU基准测试（WebGL）。帮助开发者跨浏览器和设备可复现地测试和比较着色器性能。
* [XKit](https://xkit.io) — 为开发者、学生和日常用户设计的免费在线工具集，包含开发者工具、差异比较工具、计算器、转换器和生成器等。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 2台设备免费使用，会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
  * [AnyDesk](https://anydesk.com) — 3台设备免费使用，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，包含精灵图、瓦片集和角色包等
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享来自全球游戏艺术家的免费资源
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费的2D、3D、音频和GUI资源
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，包含音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费的2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供教程和调色板列表
* [ArtStation](https://www.artstation.com/) — 2D/3D资源与音频的市场平台，也可用于作品集展示
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建自定义资源
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型与PBR材质库
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0许可的2D/3D/音频/UI资源
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（多分辨率）、模型、HDRIs和笔刷，提供Blender等软件的导出插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的协作式音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)整理的自由开源软件及SaaS列表
* [GitHub开发者开源资源中心](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件资源库
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境和工具资源，用于开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度通过遥测数据算法决定是否续期
* [PHP工具中心](https://phphub.net/) — PHP工具集合，包含格式化器、验证器、沙盒环境、正则测试器等
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书参考
* [短信测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups自动化备份](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）的备份服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter云备份](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直接备份数据库/文件系统/应用到S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板/HTML主题/UI套件，加速应用开发
* [网站性能检测工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev全能工具](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/测试数据生成等，拥有愉悦的交互界面
* [Layercode数据导入工具](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门方案，支持100MB文件上传且可创建无限导入器
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的网页按钮样式
* [WrapPixel后台模板](https://www.wrappixel.com/) — 下载基于Angular/React/VueJs/NextJS/NuxtJS的高质量免费/付费管理后台模板
* [Utils全能工具](https://utils.fun/en) — 基于浏览器算力的离线工具集（含水印生成/录屏/编解码/加解密/代码格式化等），完全免费且不上传云端处理
* [IT工具集](https://it-tools.tech/) - 面向开发者及IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具（Markdown编辑器/代码压缩美化/二维码生成/OpenGraph生成器等）
* [正则表达式101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody开发者工具](https://www.kodytools.com/dev-tools) — 100+开发工具（含格式化器/压缩器/转换器）
* [AdminMart后台模板](https://adminmart.com/) — 基于Angular/Bootstrap/React/VueJs/NextJS/NuxtJS的高质量免费/付费管理后台模板
* [Glob模式测试器](https://globster.xyz/) — 可视化Glob模式设计与测试平台，附带学习资源
* [MySQL简易恢复](https://simplerestore.io) - 无需代码或服务器的MySQL备份远程恢复方案
* [360格式转换](https://www.360converter.com/) - 免费音视频转文字工具（含实时语音/YouTube视频/字幕生成），适合短视频处理
* [最佳二维码生成](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulse内容优化](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版支持每月手动发布1篇
* [PageTools智能套件](https://pagetools.co/) - 永久免费的AI工具集（网站政策生成/社交媒体文案/网页创建等）
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda交互实验室](https://killercoda.com/)  - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互学习平台
* [Axonomy发票工具](https://axonomy-app.com/) - 免费创建管理发票，每月10张额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费转换表格数据为CSV/HTML/JSON/Markdown等格式

**[⬆️ 返回顶部](#目录)**