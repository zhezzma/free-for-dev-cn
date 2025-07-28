# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间才能做出明智决策。

这里列出了提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们喜爱所有免费服务，但最好保持主题相关性。有时界限较为模糊，因此本清单带有主观判断；若未采纳您的贡献，请勿介意。

这份清单汇集了1600多人提交的Pull Request、评审、建议和贡献成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或终止的条目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包括自托管软件。入选服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们还会从安全角度评估免费层级——支持SSO，但拒绝那些仅限付费层级才提供TLS的服务。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
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
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储空间，每天5万次读取、2万次写入和2万次删除操作
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（除中国和澳大利亚）网络出站流量
    * Cloud Storage - 5GB存储空间，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux Shell/主IDE，5GB持久化存储，每周限60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，36万GB-秒内存，18万vCPU-秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebook开发环境
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
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，2万次Get请求和2千次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3000封邮件（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

* [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM和1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每天60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月存储5万用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟数（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限次数调用
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，免费支持1万份文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免集群管理费
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可组成1个VM或最多4个VM
       - [空闲实例](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据采集点，10亿个数据检索点
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500Mbps*核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知 - 每月100万次投递选项，1000封邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS、DDoS防护、CDN含免费SSL、防火墙规则和页面规则、WAF、机器人防护、不限次数的速率限制（每域名1条规则）、分析、邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求、1000次写入请求、1000次删除请求、1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建、100个自定义域名、集成SSL、无限制访问席位、无限预览部署，以及通过Cloudflare Workers集成的全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含1台部署服务器和1个静态站点），提供从构建、部署到扩展应用的全套功能，让您无需操心"服务器事务"即可在任何云平台运行应用
* [Pulumi](https://www.pulumi.com/) — 现代化基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作功能
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于优化Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI、OPA集成及分层配置模型。无SSO限制，所有功能开放。每月免费提供50次运行额度
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境，每月提供20次包含预览和自动部署的免费任务执行额度

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公共及私有Git仓库，提供CI/CD流水线功能  
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共与私有Fossil代码仓库  
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB存储空间和两名协作者  
* [Codeberg](https://codeberg.org/) — 免费开源项目可享无限量公共/私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)托管静态网站，[Codeberg CI](https://docs.codeberg.org/ci/)提供持续集成，[Codeberg Translate](https://translate.codeberg.org/)支持多语言翻译。包含软件包/容器托管、项目管理和问题追踪功能  
* [GitGud](https://gitgud.io) — 无限量公共及私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD功能  
* [GitHub](https://github.com/) — 无限量公共仓库与私有仓库（协作者不限）。包含CI/CD、开发环境、静态网站托管、软件包/容器托管、项目管理和AI编程助手  
* [gitlab.com](https://about.gitlab.com/) — 无限量公共及私有Git仓库（最多5名协作者）。包含CI/CD、静态网站托管、容器注册表、项目管理和问题追踪  
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的代码托管平台，提供CI、静态页面、项目页面和问题追踪功能  
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制系统  
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发仓库与工具集，包含专属Ionic仓库  
* [NotABug](https://notabug.org) — 基于Git的自由软件代码协作平台，专为自由许可证项目设计  
* [OSDN](https://osdn.net/) - 面向开源开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库托管  
* [Pagure.io](https://pagure.io) — 基于Git的自由开源软件代码协作平台，专为FOSS许可证项目设计  
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git/Mercurial/SVN仓库  
* [pijul.com](https://pijul.com/) - 无限量免费开源的分布式版本控制系统。其独特优势在于基于严谨的补丁理论，易于学习使用和分发。解决git/hg/svn/darcs的诸多痛点  
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源项目及非营利组织免费  
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/SVN）包含50MB存储空间  
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公共与私有仓库  
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU项目专属的自由软件开发协作管理系统  
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU项目的自由软件开发协作管理系统  

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets表格转换为强大API，快速开发原型、网站、应用等。每月免费提供500次请求。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测、电子邮件验证等。
* [Apify](https://www.apify.com/) — 网页抓取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月提供50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包含自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高质量、稳定可靠的API。免费计划每月提供50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题根因分析。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地部署AI代理并提速5倍以上。独立开发者和小团队（3人）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每天免费50次请求，公共仪表盘，开放端点（任何拥有仪表盘链接的人均可查看提交和响应）。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确的免费（无限或每月10K-50K次）现代Web API，包括IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 网页数据提取和监控。免费每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 自动化、爬虫、AI代理网页访问、图像/PDF生成等无头浏览器API。免费计划每月1,000次请求。
* [Calendarific](https://calendarific.com) - 覆盖200+国家的企业级公共假期API服务。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和分类数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 自定义人脸识别和检测的图像API，可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用程序API平台，完整访问包括文档转换、病毒扫描等的扩展API库，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - 涵盖从训练到生产全流程的MLOps平台，包括实验跟踪、模型生产管理、模型注册和完整数据溯源。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月免费100个订单和最多1,000个SKU。
* [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200+个工具覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 文档、图像、视频、音频和电子书的在线文件转换器。提供REST API及Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 在应用间同步的数据集成工具，可创建实时仪表盘和报告、转换和操作值、收集和备份洞察。免费计划限1个用户、数据连接、数据源和数据目标，且需手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。自动解决验证码并防止被屏蔽。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致定义并交付到每个应用。最快方式是使用Cube Cloud，其免费层每天限1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单免费的文件分享。数据访问后自毁。通过浏览器或命令行客户端上传下载数据。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。在Airtable中运行API请求的Postman式界面。预建数十个应用集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。每月包含10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 从网页提取数据到CSV或Excel的浏览器扩展（Google Chrome、MS Edge）。免费计划每月500页。
* [Datapane](https://datapane.com) - 用Python构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可的精简数据库也免费。
* [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型，每个模型10个表。
* [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费计划支持每月10位活跃用户(MAU)并追踪最多4张人脸。

  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据用于构建与Covid-19相关的实用应用程序
* [Doczilla](https://www.doczilla.app/) — SaaS API服务，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月允许生成250份文档
* [Doppio](https://doppio.sh/) — 托管式API，采用顶尖渲染技术生成并私有化存储PDF和截图。免费计划每月允许400次PDF/截图生成
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页及物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成包含实时文档和用户管理的完整REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20个积分
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月允许50次API调用并访问模板库
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。支持免费本地使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。免费试用包含2个项目，每个项目10张表
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费计划每月250页，用户数不限，支持3个模板
* [file.coffee](https://file.coffee/) - 支持存储最大15MB/文件(注册用户30MB)的平台
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划每日允许300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) - 基于浏览器的免费工具，即时实现JSON数据格式化、验证、比较和压缩
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API，根据订单参数识别所有潜在欺诈特征。免费Micro计划每月处理500笔交易
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置搜索服务。免费API每月可查询500次
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，免费计划每日2,000次请求
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像，提供RESTful API和无代码集成。免费层每月50张图像和5个模板
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版支持最多5个项目
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，帮助在线产品轻松实现Webhooks功能。免费版每日分发100个事件，保留7天历史记录
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建工具
* [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练及部署NLP模型。免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) - 通过声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4(通常用于Power BI/Power Query)访问70多个(云)平台如Exact Online、Twinfield等。含数据复制交换功能。开发者与实施顾问可免费使用特定平台(有数据量限制)
* [ipaddress.sh](https://ipaddress.sh) — 以不同[格式](https://about.ipaddress.sh/)获取公网IP的简易服务
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费计划同一IP限45次/分钟
* [ipbase.com](https://ipbase.com) - IP地理定位API - 永久免费计划每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API - 开发者永久免费计划每日1,000次请求限制
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API - 允许1,000次免费请求
* [IPLocate](https://www.iplocate.io) — IP地理定位API，免费每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP归属公司查询等功能。另提供免费可下载的IP与国家/ASN对应CSV及GeoIP兼容MMDB格式数据库
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务。LITE数据库可免费下载，支持本地查询城市坐标和ISP信息
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP地理定位API。获取城市坐标、ISP等数据。免费计划每月5万积分。另提供每月500次免费WHOIS和托管域名查询服务
* [ipapi](https://ipapi.co/) - Kloudend公司出品的IP地址定位API，基于AWS构建。免费层每月3万次查询(每日1k次)无需注册
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP地址API，具备顶级主机检测能力。免费计划提供1,000次免注册查询
* [IPinfo](https://ipinfo.io/) — 快速准确的免费(每月5万次)IP数据API。提供地理位置、公司、运营商、IP范围、域名、滥用联系人等详细信息。所有付费API均可免费试用
* [IPQuery](https://ipquery.io) — 面向开发者的无限次IP API，无速率限制或费用
* [IPTrace](https://iptrace.io) — 极简API，每月提供5万次免费IP地理定位数据查询
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频和社交媒体视频的编辑API
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址。免费层无需注册，支持通过CORS在浏览器端JS直接请求数据。适用于监控客户端和服务端IP变更的服务。请求次数不限
* [JSON Serve](https://jsonserve.com/) — 免费服务，帮助开发者存储JSON对象并在应用中作为REST API使用
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，自定义HTTP状态码、头部和响应体
* [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看器、编辑器和验证器。支持AI修复、树形视图、表格视图、12+编程语言代码生成，以及JSON转CSV/XML/YAML/属性文件等功能

  * [Kreya](https://kreya.app) — 免费gRPC图形界面客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC接口。
* [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型性能。免费提供最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并向客户发送通知。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月提供100次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。永久免费套餐允许每天100次API请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报天气数据。预报采用多天气模型机器学习组合以提高准确性。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为元标签标准化、美观链接预览、爬取能力或截图服务等数据。每日50次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，标准化文档处理层以自动化应用工作流。免费层每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式演练场。免费支持1名编辑。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的工具。适用于原型设计/测试/学习。免费版每个项目支持2个资源。
* [Mockfly](https://www.mockfly.dev/) — 可信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的模拟GraphQL和REST API工具。简单REST API可免注册免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，在云端选择要模拟的端点并检查流量，完全免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易Web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。前端开发、QA测试和DevOps团队的理想选择。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和Docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的呈现方式。适用于测试Control D等基于规则的DNS分流工具。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价格域名。每日免费查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每日100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件并返回JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问权限。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者导向PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 通过API开发协作平台Postman简化工作流并更快创建更好API。永久免费使用Postman应用。Postman云功能在特定限制下也永久免费。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试REST及GraphQL接口
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop实现10倍易用的AI网络爬取，近乎零学习成本，节省现有工作流85%+时间，比人工研究快4倍且无妥协，包含所有研究任务的REST API端点。每月前1000积分免费。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者通过趣味挑战（含解决方案！）和交互示例连接数千个API进行开发。
* [RequestBin.com](https://requestbin.com) — 创建免费端点接收HTTP请求。发送到该端点的所有HTTP请求及其负载和头部将被记录，便于观察Webhook等服务请求。
* [reqres.in](https://reqres.in) - 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层每月30积分。
* [ROBOHASH](https://robohash.org/) - 从任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API用于爬取。匿名爬取无需担心限制、封锁或验证码。每月前100次成功爬取免费（含JavaScript渲染，联系支持可获更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome爬取API和免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费10,000次API调用额度。

  * [Select Star](https://www.selectstar.com/) - 智能数据发现平台，可自动分析和记录数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将Google表格转换为RESTful API。提供免费计划，每张表格包含1,000行免费额度。
* [Shipyard](https://www.shipyardapp.com) — 面向云端的低代码数据编排平台。支持混合使用低代码模板和自定义代码（Python、Node.js、Bash、SQL）。开发者免费计划每月提供10小时运行时，足够自动化多个工作流。
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能的API。免费计划每月100次API调用。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月100次成功调用。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供节省时间的开发工具。免费层包含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV即可通过API快速访问数据，加速应用开发。免费计划含2个API和每月2,500次调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，直接在浏览器中将CSV转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化校验器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费计划提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可生成50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送50,000条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，支持研究结果组织。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址所属国家、城市、区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API。覆盖全球的精准天气预报，含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，含日志聚合、可观测性、文档和调试。免费层每月25万次请求上限。
* [UniRateAPI](https://unirateapi.com) – 590+种法币与加密货币的实时汇率。免费计划无限次调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，含实时天气、逐时/每日预报和天气警报。通过AI模型融合多源数据提升预测精度。免费层每月1万次调用。
* [Webhook Store](https://www.openwebhook.io) - 第三方Webhook存储与本地调试工具（类似ngrok）。开源可自托管。免费提供*用户名*.github.webhook.store个人域名和*任意内容*.webhook.store公共域名。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的网页抓取API。每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验追踪、数据集版本管理和模型加速开发。个人项目免费层含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版每月25,000个token（约10次PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库。
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API。每月3万次调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器和住宅IP的网页抓取API。每月1,000次免费调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 全球邮政编码API。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮政编码API与验证服务。每月1万次请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持在边缘设计、构建和部署API。可快速添加API密钥认证、限流、开发者文档和商业化功能。基于OpenAPI标准，支持TypeScript编程。免费版含10个项目、不限量生产环境、每月100万请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位JSON数据结构差异。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式的制品仓库，包括Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS。包含软件包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费套餐每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT等构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费套餐且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 提供1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费套餐支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包和Docker镜像的私有云仓库，开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费套餐提供10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能匹配最佳会议时间，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与日程安排工具。免费版支持每位用户1个日历连接和无限次会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队免费实时Scrum扑克工具，支持无限成员估算故事点以加速规划
* [Telegram](https://telegram.org/) — 为追求快速可靠通讯的用户打造。大容量群组、用户名系统、桌面客户端和强大文件分享功能特别适合商业用户和小型团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录、流程文档编写与团队协作，兼容异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流协作平台。支持IDE配对编程、终端共享、语音视频及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月包含10,000分钟音视频使用时长
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协作编辑
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具。免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议方式。通过可定制虚拟空间实现真实社交体验，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间。会议次数不限，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动日报系统。含推送可视化、同伴认可机制和自定义提醒功能，免费版支持无限用户、3个仓库和3条提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档编辑工具。类Google Docs的Markdown写作体验，私有笔记的协作者人数和模板功能将受[限制](https://hackmd.io/pricing)
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能通讯平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意提交与投票平台，免费支持25人社区
* [Igloo](https://www.igloosoftware.com/) — 文档、博客、日历共享的内部门户，10人以下免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 在Slack任意频道/私聊中输入/meet指令即可发起Google会议，完全免费无限制
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约共享资源（如会议室/开发环境/服务器等），免费版支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈的工具
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享功能和Passkeys的密码管理器，支持网页端、浏览器扩展及移动/桌面应用
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的可视化反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频通话与屏幕共享的免费服务
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，提供免费套餐
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown笔记协作应用，被定义为全能工作空间，支持多平台应用和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含核心功能、50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编辑器的免费技术面试平台，支持浏览器端代码编译运行，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队工时表追踪应用，免费版支持10人以下的时间记录与报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加可视化审查功能，无需部署网站。免费版每月10个页面/100MB存储
* [Pendulums](https://pendulums.io/) - 界面友好的免费时间追踪工具，提供有价值的统计数据帮助优化时间管理
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史
* [Raindrop.io](https://raindrop.io) - 跨平台私密书签工具（支持macOS/Windows/Android/iOS/Web），免费无限书签与协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、跨应用桥接、无限消息发送和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云端存储解决方案，支持文件共享、同步和讨论。免费版提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器直接协作，完全免费
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页面的聚合监控平台，可追踪上游服务商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作应用，适用于头脑风暴、内容管理和笔记。免费版支持3个画板、无限用户和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载问题。永久免费个人版
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持看板泳道和完整Scrum实现，集成时间追踪功能。免费支持5用户和3个项目组合
* [Teamplify](https://teamplify.com) - 通过团队分析和智能站会优化开发流程。包含完整的远程团队休假管理功能。5人以下小团队免费
* [Tefter](https://tefter.io) - 书签管理应用，深度集成Slack。开源团队免费使用
* [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费的时间追踪软件，轻松集成Jira/Trello/Asana等项目工具
* [Huly](https://huly.io/) - 全能项目管理平台(Linear/Jira/Slack/Notion替代方案)，无限用户，每个工作区10GB存储和10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一站式项目管理应用
* [twist.com](https://twist.com) — 异步友好的团队通讯应用，保持对话条理清晰。提供免费无限版，合格团队可享折扣
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，支持智能箭头、吸附对齐、便利贴和SVG导出。多人协作模式可用，官方VS Code扩展免费
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签页/任务管理器，支持文件夹协作的定制化在线桌面
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织额外赠送Nano套餐
* [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，用Python/Typescript快速构建生产级自动化流程和内部应用。免费用户最多可创建/加入3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台。免费版提供10个视频、1GB存储和每月10GB带宽
* [userforge.com](https://userforge.com/) - 互联在线的用户画像与场景映射工具，保持设计与开发同步。免费支持3个角色和2名协作者
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度且使用品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务。无限次分享5GB以内文件
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时），大文件采用P2P传输
* [zoom.us](https://zoom.us/) — 安全视频网络会议，免费版限时40分钟
* [Zulip](https://zulip.com/) — 采用邮件式线程模型的实时聊天工具。免费版含1万条历史消息和5GB存储，另有开源自托管版本
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件。免费体验云端功能并实现简单自动化：每月240分钟机器人时长/10次助手运行/100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版包含完整消息历史、无限私聊、1个群组对话和1GB存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具。永久免费支持10人小团队，含无限公私对话、可搜索历史、无限语音通话、10个集成和20GB团队存储
* [ruttl.com](https://ruttl.com/) — 全能反馈工具，收集网站/PDF/图片的数字化反馈
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台。免费版含无限频道/剧本/看板/用户和10GB存储
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，直接在网页/图片/PDF/设计文件上开展开发协作
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费版支持100人50分钟会议
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（产品文档/内部知识库/API文档等），开发者个人免费
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易粘贴站

  * [腾讯实时音视频（Tencent RTC）](https://trtc.io/) —— 提供群组音视频通话解决方案，首年赠送每月10,000分钟免费时长。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板服务，支持客户端加密、多标签粘贴、API接口、语法高亮编辑器等功能。
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟器、画布或变通方案。免费版功能完整可用。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。开发者免费套餐。同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统。内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础套餐含 10万次/月 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的本地或云端资源与数据库内容管理平台，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无使用限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销支持。开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言的交付/管理 API 及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS。含全托管可扩展 API 的内容管理界面。社区计划为单个用户提供无限 API 调用、文档、自定义类型、资源和多语言支持。开源内容项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。免费套餐包含无限项目、无限管理员用户、3 个普通用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划含 3 个用户、500 个内容项、3 种内置角色、25+5 种内容类型、完整 REST API 访问、文档预览生成和 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown、MDX 和 JSON。基础套餐免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，支持与任意 CMS、API 或数据库协同构建网站。部署无头网站以提升流量、转化率和收益。
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL 优先 API，帮助从传统方案迁移至原生的无头 CMS 解决方案。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先，基于事件溯源（自动记录所有变更）的开源方案。
* [InstaWP](https://instawp.com/) - 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区（免费）版含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持（无限语言）、资源管理器（2500 个资源）、图片优化服务、搜索查询、Webhook 及 250GB/月流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制，完全自主掌控。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可以完全访问源代码和无限的 API 与路由，实现深度集成。免费版包含 3 个项目、5 张数据表和 Google 插件支持。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程 AI 助手，利用 AI 和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody 提供多种 LLM 选择（包括本地推理），支持多种 IDE 和主流编程语言，并有免费计划。免费版每月提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
* [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计无缝转换为动态 Flutter 和 React 应用，优化工作流程，助你以前所未有的速度打造卓越的移动和 Web 体验。
* [Fern](https://buildwithfern.com) - 编写 API 定义并生成 TypeScript、Python、Java、Go 等流行语言的 SDK/客户端库。完全支持 OpenAPI。免费版最多支持 20 个端点的代码生成。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持 C#。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目免费使用，商业友好版免费提供 3 个切面功能。
* [Supermaven](https://www.supermaven.com/) — Supermaven 是 VSCode、JetBrains 和 Neovim 的快速 AI 代码补全插件。免费版提供无限行内补全。
* [tabnine.com](https://www.tabnine.com/) — Tabnine 通过学习全球代码库的洞察，帮助开发者更快构建更好的软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0 使用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，初始赠送 1200 积分，每月免费获得 200 积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，提供免费个人账户及100MB存储空间的单仓库
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，免费版仅限Vista系统下1024×768分辨率MS IE 9的三分钟会话
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的基础设施即代码自动化审查工具，集成GitHub/Bitbucket/GitLab（含自托管），除常规语言外还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [CodeBeat](https://codebeat.co) — 多语言自动化代码审查平台，公有仓库永久免费，含Slack和邮件集成
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目及组织私有仓库（最多4名协作者）免费，学生和教育机构亦可免费使用
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公有仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 根据开发者工作模式优先处理技术债务，可视化团队耦合度等组织因素，开源免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪，通过精准指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能、可访问性及安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测缺陷/安全漏洞/性能及API问题，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) — 持续分析源码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — Go语言包代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量检测，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源码重构，支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub PR与提交差异分析，公有仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证与多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与深度分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的依赖库搜索与更新通知，开源项目免费使用  
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等平台检测项目名称可用性  
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索引擎，开源项目免费  
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助定位需要改进的代码区域  
* [CodeKeep](https://codekeep.io) - 代码片段版的Google Keep。提供代码片段管理、发现与分享功能，内置强大的代码截图工具（含预设模板）和代码链接特性  

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和商店发布，实现更快的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows平台的CD服务，开源项目免费
  * [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持在Kubernetes和Lambda环境上部署自定义和第三方应用。免费层允许5个域名和2个用户的无限制应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，每次构建10分钟，支持2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
  * [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目和一个并发运行（每月120次执行）
  * [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟作业时间。测试分析免费开发者层包括每月10万次测试执行，开源项目有更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包含所有功能的托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级CI/CD功能。每月最多6000分钟执行时间，无限协作者，私有项目30个并行作业，开源项目最多80,000分钟免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
  * [cirun.io](https://cirun.io) - 公共GitHub仓库免费
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，一个环境，共享服务器，无限公共仓库
  * [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时间
  * [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
  * [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
  * [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30分钟构建时间）
  * [drone](https://cloud.drone.io/) - Drone Cloud使开发者能够在多种架构（包括x86和Arm，32位和64位）上运行持续交付流水线，一站式完成
  * [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
  * [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建一个VM，并通过唯一URL提供应用访问，无限公共和私有仓库，VM大小最多2GB。
  * [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
  * [Mergify](https://mergify.io) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费
  * [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层包括100 Mb、1000次操作和15分钟的最小间隔。
  * [Shipfox](https://shipfox.io/) - 以2倍速度运行GitHub Actions，每月免费3000分钟构建时间。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、通过Open Policy Agent持续资源合规、SAML 2.0单点登录，以及访问公共工作池：每月最多200分钟
  * [microtica.com](https://microtica.com/) - 提供预构建基础设施组件的启动环境，免费在AWS上部署应用，并支持生产工作负载。免费层包括1个环境（在您的AWS账户上）、2个Kubernetes服务、每月100分钟构建时间和20次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割e2e测试运行等功能加速CI上的monorepos。免费计划支持最多30个贡献者，包含15万积分。
  * [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3000分钟免费时间，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。最多2个用户免费，包含所有功能。
  * [Terrateam](https://terrateam.io) - 以GitOps为先的Terraform自动化，通过拉取请求驱动的工作流、自托管运行器的项目隔离以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户免费版每周有有限检查点。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接测试您的Android和iOS应用。免费套餐包含每月两个并发会话，每次30分钟使用时间。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，可在iOS和Android上无限次测试。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能回归。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。额外付费可获得云监控和CI/CD集成。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分成本监控API和应用。采用"监控即代码"工作流和Playwright驱动。开发者享有慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50+项SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否针对给定域启用了CORS并识别差距。获取可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress Test Runner始终免费开源，无任何限制。Cypress Dashboard对开源项目免费，最多支持5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在问题影响客户前发现弱点。免费版支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包含最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供适用于不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API的E2E测试（KTests）和模拟/桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 在任何CI提供商上通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持最多10分钟测试文件，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户，持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源完全免费，7,000次快照/月。
* [octomind.dev](https://www.octomind.dev/) - 通过AI辅助测试用例生成自动创建、运行和维护Playwright UI测试
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和无限项目，5,000次快照/月。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用测试自动化工具。支持原生应用、flutter、react-native、web、ionic等多种应用框架。免费版限iOS和Android各10个测试，但包含付费计划的大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费版最多创建10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制测试的唯一URL向开发者展示如何复现错误。
* [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
* [TestSpace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和通过GitHub实现手动测试代码化的框架。服务对[开源项目免费](https://github.com/marketplace/testspace-com)，每月450个结果。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成工具、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目且提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过唯一URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、出站HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费套餐包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中遭入侵的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API垃圾邮件过滤器。免费套餐每域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式。目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码、文件、目录或容器
* [crypteron.com](https://www.crypteron.com/) — 面向云端的开发者友好型安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的网页工具，无需复杂工具或编程语言即可分析编解码数据。如同加密领域的瑞士军刀。所有功能免费无限制。开源支持自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
* [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项
* [DJ Checkup](https://djcheckup.com) — 自动化Django站点安全检测工具。基于Pony Checkup项目分支开发
* [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快捷地同步.env文件。杜绝通过Slack或邮件等不安全渠道共享.env文件，永久避免.env文件丢失。最多支持3名团队成员免费使用
* [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复，防止敏感信息泄露源代码。扫描Git仓库中350+种密钥和敏感文件——个人及25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
* [hostedscan.com](https://hostedscan.com) — 网页应用、服务器及网络漏洞扫描服务。每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源平台，支持跨团队和基础设施管理开发密钥：从本地开发到第三方服务的生产环境全覆盖。最多5名开发者免费
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) - SSL证书过期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
* [meterian.io](https://www.meterian.io/) - 监控Java、Javascript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限数量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序及配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 快速检测任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人，作为自动化产品安全工程师向Java代码库提交PR解决漏洞。即将支持更多语言！
* [pyup.io](https://pyup.io) — 监控Python依赖项安全漏洞并自动更新。1个私有项目免费，开源项目不限数量
* [qualys.com](https://www.qualys.com/community-edition) — 检测网页应用漏洞，审计OWASP风险
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 发现并修复开源依赖项中的已知安全漏洞。开源项目无限次测试与修复，私有项目每月限200次测试
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL网页服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次免费SCA扫描。在发布前检测并修复安全威胁。通过简单高效的方案保护项目
* [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，发现并修复生产环境前的安全漏洞。单个应用支持无限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒及PHP服务器防火墙(WAF)。免费注册用户可获取邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等。不限于HTTPS
* [threatconnect.com](https://threatconnect.com) — 威胁情报平台：专为研究人员、分析师及初学网络安全情报的组织设计。最多3个用户免费
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费套餐支持每周XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费
* [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。最多250用户的应用程序免费
* [Vulert](https://vulert.com) - 持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费
* [Escape GraphQL Quickscan](https://escape.tech/) - 一键扫描GraphQL端点安全性。免费无需登录
* [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条GitHub公开仓库、代码片段、议题和评论中的泄露密钥

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费计划包含25,000名MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO。包含完整前端组件。免费额度5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费额度100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费额度10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费额度100名用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥的认证。支持无限MAU免费使用。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK两种方式。免费额度7,500名活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费额度7,500名MAU。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现2FA，免费支持10名用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费额度100名MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费支持3个企业应用和5个个人应用，用户数不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，不限团队成员，200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，提供实时更新和无代码策略UI。免费额度1000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费额度1000名用户和10个SSO连接，基于包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构认证系统即可添加企业SSO。免费计划包含不限量MAU、不限量组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费额度10,000名MAU，不限组织数量，5个SSO或SCIM连接，1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟即可上手。可免费自托管，或使用含1万免费MAU的托管SaaS版本。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，可快速启动同时控制用户体验。免费额度5000名MAU。
* [Warrant](https://warrant.dev/) - 为企业级应用提供托管的授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度25,000次认证请求，包含OTP、无密码认证、策略等所有安全功能。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户。免费额度200名用户和1万封事务邮件（带"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，支持认证与授权。免费额度5000名MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱+密码、社交账号、Magic Auth、MFA等多种方式。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 移动应用质量保障的一站式平台。免费版支持：单个应用、分析功能、无限版本与安装、用户反馈收集。
* [Loadly](https://loadly.io) - iOS & Android测试版应用分发服务，提供完全免费的无限下载、高速传输和无限上传。
* [Diawi](https://www.diawi.com) - 直接将iOS & Android应用部署到设备。免费版包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS & Android应用。免费版支持：无限上传、私有链接（访客2天有效期/注册用户60天）。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费版包含：1个应用项目、3个应用版本、500MB存储空间、每月100次安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费版支持：5个应用、每月50次下载、单文件最大100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例  
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费提供100台设备授权和25MB应用存储空间  
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理工具，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务，实时监控设备群并免费保护无限设备。免费版提供基础功能  
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器。每月免费25次git部署额度  
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理平台。免费支持1台服务器  
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具。免费支持1台服务器  
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。免费套餐支持1台服务器  
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器  

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。"小狐猴"套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息，支持跨可用区的多节点部署。
* [courier.com](https://www.courier.com/) - 统一推送、应用内消息、邮件、聊天、短信等多渠道通知API，含模板管理等功能。免费套餐每月1万条消息。
* [Engage](https://engage.so/) - 面向SaaS的全渠道客户互动与自动化工具（邮件、推送、短信、产品导览、横幅等）。每月最多支持1,000名活跃用户免费使用。
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月1万条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云端原生MQTT消息代理服务，可永久免费连接100台设备（无需信用卡）。
* [knock.app](https://knock.app) - 开发者通知基础设施，通过单次API调用实现应用内、邮件、短信、Slack和推送等多渠道发送。免费套餐含每月1万条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知系统。免费套餐含每月1万条通知+100条短信和自动语音呼叫。
* [Novu.co](https://novu.co) - 开源通知基础设施，统一管理邮件、短信、站内信、应用推送等渠道。免费套餐含每月3万条通知（保留90天）。
* [pusher.com](https://pusher.com/) - 实时消息服务，免费支持100个同时连接和每日20万条消息。
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务，免费支持20个同时连接和每日10万次事件。
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务，覆盖全球及AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据。
* [pubnub.com](https://www.pubnub.com/) - 支持Swift/Kotlin/React的消息服务，每月100万次事务（每次可含多条消息）。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制等功能。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长。
* [webpushr](https://www.webpushr.com/) - 网页推送通知服务，免费支持1万订阅用户且推送不限量。
* [httpSMS](https://httpsms.com) - 将安卓手机作为短信网关收发短信，免费套餐每月200条。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级部署的可扩展安全MQTT代理，永久免费套餐含每月100万会话分钟（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费套餐每天可向1台设备发送50条消息（限1个应用）。
* [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知系统，支持事务通知、定时任务和互动通知等多渠道发送。免费套餐每月1万条通知，含摘要、批量发送、多渠道等流程节点。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费额度每日10万条日志，保留24小时  
* [logentries.com](https://logentries.com/) — 免费额度每月5GB，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天  
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储空间，保留15天日志，支持7天内的日志搜索  
* [sumologic.com](https://www.sumologic.com/) — 免费额度每日500MB，保留7天  
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天  
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天  
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目  
* [openobserve.ai](https://openobserve.ai/) — 每月免费200GB日志摄入量，保留15天  

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费处理10,000个字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目可享无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费且无限制
* [Lecto](https://lecto.ai/) - 提供免费层级的机器翻译API（30次免费请求，每次请求可翻译1000个字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 免费支持1000个源语言字符串，无限语言，无限贡献者，提供初创企业和开源优惠
* [Localeum](https://localeum.com) - 免费支持1000个字符串，1名用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（包含2名用户、500个键和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 免费支持2000条翻译，无限译者，每个项目10种语言，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5名用户的有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 免费支持1000个字符串
* [SimpleLocalize](https://simplelocalize.io/) - 免费支持100个翻译键，无限字符串，无限语言，提供初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 免费支持1000个字符串，1名用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 免费支持500个字符串
* [weblate.org](https://weblate.org/) — 自由项目免费，免费层支持最多10,000个字符串源，且自托管版本无限使用
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人免费
* [Lingo.dev](https://lingo.dev) – 开源的AI驱动CLI工具，适用于Web和移动端本地化。可使用自有LLM，或通过Lingo.dev管理的本地化引擎每月免费使用10,000个单词

**[⬆️ 返回顶部](#目录)**

## 监控

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费计划
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体。免费计划包含10个监控器，3分钟检查频率和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器、无限用户、无限仪表盘、无限告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控和深度API监控。免费计划包含1个用户和1万次API & 网络/1.5千次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费提供一个监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施支出。每月在Google云平台上消费不超过5,000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。免费版保留24小时数据
* [fivenines.io](https://fivenines.io/) — 提供实时仪表盘和告警的Linux服务器监控 — 永久免费监控最多5台服务器，60秒间隔。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，将指标和日志与Grafana集成。免费版：3个用户、10个仪表盘、100条告警、Prometheus和Graphite中的指标存储（10,000个序列，14天保留）、Loki中的日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控您的定时任务和后台任务。最多20个检查免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可搭建完整的实时监控仪表盘，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，支持无限订阅和无限团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站（最多100页）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控您的应用和堆栈，助您大规模监控和诊断问题。为开发者社区提供永久免费计划，支持最多100万日志事件的日志监控、基础设施监控和最多2台主机的APM
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控，附带美观的状态页面。"永久免费"计划提供10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，以及2个仪表盘/状态页面
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是收集实时指标的开源工具。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师打造更完美的软件。从单体应用到无服务器架构，您可以检测所有内容，然后分析、排查和优化整个软件堆栈。免费层每月提供100GB免费数据摄入、一个完全访问用户和无限免费主要用户
* [nixstats.com](https://nixstats.com) - 一台服务器免费。提供邮件通知、公共状态页面、60秒间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的正常运行时间监控、定时任务监控以及状态页面。前5个检查（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息来识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 为持续运行服务提供强大的告警和值班管理。最多5个用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括告警、强大的可视化功能和基础报告。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，最多6个监控器每日检查免费
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班组）
* [pagertree.com](https://pagertree.com/) - 简洁的告警和值班管理界面。最多5个用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，免费提供最多10万次事件，支持无限项目和无限状态页面
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限URL检查，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任何自定义TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页面平台。免费层包含一个可公开定制的状态页面和SSL子域名。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月历史正常运行时间/日志、无限状态页面和自定义域名！永久免费且无限邮件告警。无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义数据点、无限仪表盘和用户等
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类提供5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站和Cron监控 - 免费提供2个监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行状态监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页。
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，支持Ping、DNS等检测
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10名用户。
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS和域名监控。免费监控10台服务器、10个运行时间和10个域名。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，支持告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 提供20个运行时间监测器，5分钟检测间隔，可自定义状态页（支持商用）。通过邮件和Telegram实时无限通知。无需信用卡即可开始使用。
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5名用户免费。
* [RoboMiri.com](https://robomiri.com/) - 稳定运行时间监控服务，支持多种监测类型：Cron任务、关键词、网站、端口、Ping。免费提供25个监测器，3分钟检测间隔。支持电话、短信、邮件和Webhook告警。
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检测一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux和Windows服务器监控：5个免费；状态页：1个免费 - 移动应用、多通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪平台。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行状态监控。为开源项目提供免费小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含每月5,000次错误、无限用户、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。集成Vercel等平台，支持高级数据查询与邮件/Discord通知。
* [Semaphr](https://semaphr.com) — 移动应用一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键提交错误报告。免费计划支持无限次提交。
* [Whitespace](https://whitespace.dev) – 浏览器内一键录制错误报告。个人用户免费无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 提供具备容错、相关性优化的托管搜索解决方案，含UI组件库可快速构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。另提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)  
* [bonsai.io](https://bonsai.io/) — 免费1GB内存与1GB存储空间  
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，支持用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费版支持每月1,000名活跃用户，不限指令数量  
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，单索引10万文档，不限全文/向量/混合搜索次数，60天数据分析  
* [searchly.com](http://www.searchly.com/) — 免费2个索引与20MB存储空间  
* [easysitesearch.com](https://easysitesearch.com/) — 搜索组件与API服务，支持基于网络爬虫的自动索引。免费版不限搜索次数，最多支持50个子页面  

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量专业简历模板的平台，支持克隆、完整编辑和下载，已优化ATS兼容性
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内快速掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证级免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 麻省理工学院公开2,500多门课程资料，YouTube频道请访问[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 免费学习基础/高级HTML/CSS、JavaScript和SQL的在线指南
* [全栈公开课](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等技术，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4,000多门免费课程，专注计算机科学、工程与数据科学
* [Django教程网](https://django-tutorial.dev) - 首个Django框架免费学习指南，并为用户文章提供dofollow反向链接
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学课程，涵盖Python Click和Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱服务，适用于测试场景
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费发送1000封邮件，免费套餐支持无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可创建无限免费邮件别名
* [Antideo](https://www.antideo.com) — 免费层每小时提供10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每日300封免费额度
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，支持1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，免费支持100名订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件及事务性发件服务，每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似联系表单版的Bitly）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每日上限300封
* [EmailOctopus](https://emailoctopus.com) - 免费支持2500名订阅者，每月10000封邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，而是客户端邮件发送工具（无需暴露凭证），免费版包含200次月请求量、2个邮件模板、50KB请求大小限制及有限联系人历史记录
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户，完全免费的反事务性邮件服务（邮件永不投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 多域名临时/一次性邮箱生成器，页面刷新即更新邮箱地址，完全免费无付费项目
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名且可创建无限地址（含广告），完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务，可创建无限域名邮箱地址（注意：使用.casa/.cf/.click/.email/.fit/.ga/.gdn/.gq/.lat/.loan/.london/.men/.ml/.pl/.rest/.ru/.tk/.top/.work等TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于构建/QA和CI/CD环境测试，免费账户永久享有每日15封邮件额度
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，支持收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每日创建最多3个临时邮箱（可通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱（邮件自动保留3天），开源且可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC配置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC配置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月3000封免费额度
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约每月86,400次）
* [Mailchimp](https://mailchimp.com/) — 免费支持500名订阅者，每月1000封邮件
* [Maildroppa](https://maildroppa.com) - 免费支持100名订阅者，无限邮件发送及自动化功能
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费额度
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，事务性邮件每月3000封免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮箱测试免费API，公共邮箱托管，外发捕获，邮件转Slack/Websocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费版含1个收件箱、100条消息、无团队成员、每秒2封邮件限制、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者专用免费临时邮箱，可通过Web界面或API即时创建
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送至服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限次DMARC周报
* [Proton Mail](https://proton.me/mail) - 内置端到端加密的安全邮箱服务，免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，免费层每月10000封，支持异步发送、多SMTP服务器、黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每日验证100个邮箱，另提供DEA检测器、DNS查询、SPF检测器等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封免费（每日100封），支持1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮件别名/转发方案，免费5个别名，无限带宽和收发。教育工作者（学生/研究人员等）免费
* [Substack](https://substack.com) — 无限免费通讯服务，收费时开始支付
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每日500封免费

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱及邮件转发功能  
* [tinyletter.com](https://tinyletter.com/) — 每月免费支持5,000名订阅者  
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化流程。免费版支持有限数量的潜在客户和自动化操作  
* [trashmail.com](https://www.trashmail.com) - 提供带转发功能和自动过期的一次性免费邮箱地址  
* [Tuta](https://tuta.com/) - 免费安全邮箱服务商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。该服务部分[开源](https://github.com/tutao/tutanota)，可自行托管  
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测，每日25次免费验证  
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务，每月100次免费验证  
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多款含免费方案的产品：  
   - [邮箱](https://zoho.com/mail) 免费支持5用户，每人5GB空间，附件上限25MB，支持一个域名  
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业及个人场景  
   - [Sprints](https://zoho.com/sprints) 免费支持5用户、5个项目及500MB存储  
   - [文档](https://zoho.com/docs) — 免费支持5用户，上传限制1GB，存储空间5GB，捆绑Zoho办公套件（Writer、Sheets和Show）  
   - [项目](https://zoho.com/projects) — 免费支持3用户、2个项目，附件上限10MB。[Bugtracker](https://zoho.com/bugtracker)适用相同方案  
   - [Connect](https://zoho.com/connect) — 团队协作工具免费支持25用户，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛  
   - [会议](https://zoho.com/meeting) — 支持最多3名参会者的会议及10名观众的网络研讨会  
   - [Vault](https://zoho.com/vault) — 个人用户可用的密码管理工具  
   - [Showtime](https://zoho.com/showtime) — 面向远程培训的会议软件，最多支持5名参与者  
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品  
   - [Wiki](https://zoho.com/wiki) — 免费支持3用户、50MB存储，含无限页面、ZIP备份、RSS/Atom订阅、访问控制和自定义CSS  
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理免费支持20个客户/订阅和1用户，支付托管由Zoho完成，保留最近40条订阅记录  
   - [Checkout](https://zoho.com/checkout) — 产品账单管理支持3个页面和最多50笔支付  
   - [Desk](https://zoho.com/desk) — 客户支持管理含3个坐席、私有知识库和邮件工单，可集成[Assist](https://zoho.com/assist)实现1名远程技术支持与5台无人值守计算机  
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件提供100GB存储，无限用户，每个频道100用户及SSO支持  
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销  
   - [Forms](https://zoho.com/forms) - 表单创建工具  
   - [Sign](https://zoho.com/sign) - 无纸化签名  
   - [Surveys](https://zoho.com/surveys) - 在线调查  
   - [Bookings](https://zoho.com/bookings) - 预约排期  
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API，每月5,000封邮件，无限域名，含免费邮箱验证、黑名单监控、邮件测试等功能  

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为核心的功能开关服务，支持无限团队成员数量，提供卓越的技术支持且价格合理。免费方案包含10个功能开关、2个环境、1个产品和每月500万次请求额度。
* [Flagsmith](https://flagsmith.com) - 安全地发布功能，跨Web、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多支持3名用户免费使用，功能开关和实验数量无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析及应用配置平台，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费使用，功能开关和A/B测试数量无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试工具。免费方案支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展的多区域功能开关管理平台。免费方案包含10个开关、2个环境和无限请求。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费方案中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析的一站式平台。其免费方案提供无限席位、功能开关、实验和动态配置，每月支持100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台，支持代码化配置和全类型TypeScript SDK。深度集成Next.js和React等框架，提供慷慨的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权商业使用的免费字体库，经过人工精选并以易用格式呈现。
* [Google Fonts](https://fonts.google.com/) - 海量免费字体，支持下载或通过Google CDN链接快速部署到网站。
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰、可下载的多样化字体库。
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务平台，个人和商业用途均可100%免费使用。
* [Befonts](https://befonts.com/) - 为个人或商业用途提供独特字体资源。
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文本快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台。
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，含CJK（中/日/韩）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版包含无限表单和每月20次提交（展示Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交，提供现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点服务。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能可免费使用。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点服务，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月支持500次提交和可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月及邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单数量、每月250次提交和客服团队支持。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每个表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点服务。永久免费且无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案提供终身免费套餐。用户可创建1个免费表单并接收无限提交，付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1个表单、50次提交、单文件上传和100MB存储空间。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。可通过界面将提交内容转发至邮箱/Slack/Zapier。无需服务器代码，免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持无限表单和提交，提供预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费套餐包含：无限表单、无限提交、邮件通知、表单逻辑、收款功能、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码快速创建邮件表单等。个人账户每月免费支持50次提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点服务，完美适配静态网站。免费版支持1个网站和每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点、1个表单和每月1,000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单和调研工具，含50+专家设计模板。免费账户限制1个活跃调研、100次回复/调研和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析平台。永久免费版支持500月活用户、无限回复与事件、多平台集成导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版含每月50次提交、250MB存储、Zapier集成、CSV/JSON导出、自定义跳转/回复页、Telegram & Slack机器人及单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。通过AI自动分析提取洞察。免费版含邮件/网站/产品内/移动端调研、AI问卷生成器和25次月度回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务端代码即可免费集成HTML表单。用户提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验与表单构建工具。免费版支持5个表单、每表单最多3个步骤和50次月度回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版限制每表单10个字段和100次月度回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持Webhook通知。免费版文档添加水印但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态&JAMStack网站的无后端代码联系表单。免费版支持无限表单/域名和每月250次提交。
* [WebAsk](https://webask.io) - 调研与表单构建工具。免费版含3个调研/账号、100次月度回复和每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限制100次提交。
* [formpost.app](https://formpost.app) - 免费无限次表单转邮件服务。可设置自定义跳转、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特风格表单，无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器将任意PDF转为可填写表单。免费版支持无限PDF文件，每PDF允许3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动计分和AI功能的在线表单。免费版可收集100次回复，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。使用Qualli AI生成完美问题。免费版支持500月活用户，可创建无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放功能的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25次反馈提交。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃调研、每调研25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出来满足企业质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。仅需2行代码即可调用200+个LLM的统一接口。每月1万次免费请求，平台功能零费用！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达1万次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示词调试和数据管理平台。免费计划每周提供最多1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 跨应用统一搜索引擎，可同时检索所有应用数据。智能搜索助手能基于您的信息回答问题。免费版提供无限统一搜索和每日5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可永久免费使用全平台功能。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码和监管功能。专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词和数据集，调试LLM应用性能问题。为所有LLM生成开放遥测标准追踪数据，兼容任何可观测性客户端。免费版每月5万次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，促进技术与非技术团队协作调优生成式AI产品。免费计划包含全平台功能、每月1k次追踪和1个DSPy优化工作流。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产全生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月5万次观测和全平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 简单易用的免费图像生成AI，提供免登录、免API密钥的免费接口，支持多种网站和工作流集成方案。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 面向Tableau/Power BI/Looker的AI原生替代方案，快速、简洁且安全。利用大语言模型(LLM)分钟级交付定制商业智能方案。永久免费版提供1个工作区、5个数据源连接和无限分析。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供DeepSeek R1/V3、Llama、Moonshot AI等多种免费AI模型，擅长自然语言处理且适用多样化开发需求。注意免费模型存在速率限制，另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型满足进阶需求。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — Bootstrap、Bootswatch 和 Font Awesome 的 CDN 服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。极致的 CDN 服务。cdnjs 是由 Cloudflare 提供支持的免费开源 CDN，全球超过 11% 的网站都在使用。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是最流行的开源 JavaScript 库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate 是一个超快、可靠的 GraphQL API CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管了 jQuery 等流行的第三方 JavaScript 库，方便您轻松将其添加到 Web 应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费 DDoS 防护和 SSL 证书
* [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN。每月每个域名免费支持 100 万次请求。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，使用 Cloudflare 托管文件
* [section.io](https://www.section.io/) — 快速启动和管理完整 Varnish Cache 解决方案的简单方式。据称单个站点永久免费
* [statically.io](https://statically.io/) — 针对 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片的 CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不宕机的持续交付。个人免费使用，仅限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。实时处理图片并全球缓存。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费 DDoS 防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费 1 TB 流量和 100 万次请求，并提供免费 DNS 托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费 5 TB CDN 流量，19 个核心节点，1 个域名和通用 SSL。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，但执行超时限制为30秒。
* [appwrite](https://appwrite.io) - 不限项目数量且不会暂停项目（支持WebSocket），提供认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分群和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储+1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的后端框架，无样板代码。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS直接计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费套餐含1个永不休眠实例+PostgreSQL数据库（2连接/1万行/无备份）。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持业务快速增长。免费计划含10万服务调用+1万异步任务+10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台，基于任意触发器构建工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费版含1个your-username.pythonanywhere.com域名应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用，自定义域名需付费。
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持Docker容器/Web应用/API部署。免费实例位于法兰克福或华盛顿，含512MB内存+2GB存储+0.1CPU。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用PaaS服务，含免费MongoDB共享托管和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2个服务+2个定时任务+1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台，[免费版含1,000次执行](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)支持3个项目/1GB出口流量/300分钟构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费3个服务+每月5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建服务，免费版支持本地Kubernetes连接。
* [genezio](https://genezio.com/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动和Web后端即服务，免费提供1GB文件存储、每月50,000次推送通知和1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，通过在线编辑器或本地工具免费构建和托管。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，为企业构建和部署数字创新方案。包含平台、SDK和组件库的完整个人沙箱访问权限。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P语音视频通话、文件附件和推送通知。支持最多1000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录、每月500万次函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可访问，正式版后将提供慷慨的免费套餐。
* [Firebase](https://firebase.com) — 助力应用开发和运营。免费Spark计划包含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI。集成Firebase。免费计划包含UI构建器和模板全集。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能（通常需数周）。
* [hasura.io](https://hasura.io/) — 扩展现有数据库并提供即时GraphQL API，安全支持Web、移动和数据集成。每月1GB数据传输免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，联系人无上限且支持自动预热。
* [paraio.com](https://paraio.com) — 具备灵活身份验证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息、每日100台活跃设备的免费推送通知
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2000订阅者内通知无限制
* [pusher.com](https://pusher.com/beams) — 2000月活用户免费无限推送通知。支持iOS和Android的统一API。
* [quickblox.com](https://quickblox.com/) — 即时通讯、视频语音通话及推送通知的通信后端
* [restspace.io](https://restspace.io/) - 配置包含身份验证、数据、文件、邮件API、模板等服务的服务器，并通过管道组合实现数据转换。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 拖拽工具快速构建应用。点击定制数据模型。Apex代码深度开发。强大API实现万物互联。企业级安全保障。自由选择UI框架。开发者计划免费开放Lightning全平台。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，结构化数据收发存储无限制，每月最多2500用户
* [Supabase](https://supabase.com) — 开源Firebase替代方案，构建后端。免费计划含身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 具备身份验证、配额、监控和分析的API管理。免费云服务
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次触发，每月100次任务
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务、15分钟更新间隔、5个活跃自动化流程、Webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储、256MB实例、每日3千次API请求和1万次推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账户注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等。（[含免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持与15+种数据库及任何API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动端和网页应用。具有拖拽界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理快速构建内部工具、自定义用户流程、数字体验、自动化系统、管理面板和运营应用，效率提升10倍。
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含API全功能访问、AI编程助手及每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每应用0.5 GB存储和1 GB内存。免费层也可使用Studio和Studio Pro IDE。
* [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS（支持本地或云端部署），免费"个人环境"允许无限制编码和最多1 GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。Retool高度可定制——任何能用JavaScript和API实现的功能均可在此完成。免费层支持每月最多5名用户，应用和API连接数量不限。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑及代码扩展功能，集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，并通过拖拽式应用构建器开发应用。
* [UI Bakery](https://uibakery.io) — 低代码平台，加速定制化Web应用开发。支持通过JavaScript、Python和SQL深度定制拖拽式UI界面。提供云端和自托管方案，免费版最多支持5名用户。
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费版支持1名用户及每月100万次工作流活动（[另有德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用+开发者优先的部署和开发平台，最小化基础设施困扰并加速配置。
* [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建网页和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化托管平台，专注于提升在线时间和安全性，并为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform入门套餐中免费构建并部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到网络。仅限静态站点。永久免费。每个Google/Microsoft账户限一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) - 开发者桌面应用，用于本地托管站点并实时公开分享。可通过美观的用户界面、API和/或CLI自由操作。
* [Fern](https://buildwithfern.com) - 在Fern免费计划中构建并托管基于Markdown的文档站点。甚至可以从API定义文件自动生成站点API参考。站点托管在_yoursite_.docs.buildwithfern.com。
* [Free Hosting](https://freehostingnoads.net/) — 免费虚拟主机，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP邮箱、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持及更多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业领先的控制面板和50+免费应用的一键安装。即时设置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利免费虚拟主机，配备Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP邮箱，无限带宽，免费子域名，1000 MB免费存储空间并可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，支持自定义域名和SSL，每月100 GB带宽，260+ Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) - 支持SFPT文件上传下载的虚拟主机，提供PHP支持。
* [Neocities](https://neocities.org) — 静态站点托管，1 GB免费存储空间和200 GB带宽。
* [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，提供100 GB数据和100 GB/月带宽。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包含多种形式的虚拟主机（静态站点托管、基于容器的托管、WordPress等众多托管应用一键安装）。提供一个免费虚拟主机（静态或容器化）和一个免费数据库，含100 GB带宽和300分钟/月构建时长。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费使用，不支持自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，提供免费SSL、全球CDN、私有网络、Git自动部署，以及Web服务、数据库和静态网页的完全免费套餐。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布工具。无限站点数量，支持自定义域名。
* [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50个页面，50 MB存储空间，仅限170+预设区块中的主要区块，无自定义字体、网站图标和域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，提供免费SSL、全球CDN，每次`git push`生成唯一预览URL。完美支持Next.js和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的网站构建工具——无限网站数量，70+区块，五个模板，支持自定义CSS、网站图标、SEO和表单。无自定义域名。
* [Qoddi](https://qoddi.com) - 类似Heroku的PaaS服务，采用开发者中心方法并提供全包功能。免费套餐支持静态资源、测试环境和开发者应用。
* [FreeFlarum](https://freeflarum.com/) - 社区支持的免费Flarum托管，最多支持250名用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) - 免费托管一个项目，容器存活时间两周，每个项目500 MB RAM，SFTP - 1G磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易用的云平台，付费服务中包含三个免费静态站点托管。
* [Serv00.com](https://serv00.com/) — 3 GB免费虚拟主机，每日备份（保留7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），数据库支持MySQL、PostgreSQL、MongoDB，语言支持PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等众多选项。
* [Sevalla](https://sevalla.com/) - 简化应用、数据库和静态网站部署管理的托管平台——单个站点限制1GB，免费带宽100GB，600分钟免费构建时长，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) — 免费DNS托管，支持1个域名和50条记录。
* [deSEC](https://desec.io) — 注重安全的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务。免费版支持1个DNS区域（域名）和最多10条记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多支持5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，同时提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后可在"Subdomains"菜单中获取。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS服务，域名数量无限制。
* [nextdns.io](https://nextdns.io) — 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册、无追踪、无日志、无广告的免费动态DNS服务，域名数量不限。
* [noip](https://www.noip.com/) — 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，查询包含IP地址的主机名时会返回该IP地址。
* [zilore.com](https://zilore.com/en/dns) — 免费DNS托管，支持5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管服务。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份和DNS变更监控，免费支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为提供的免费DNS托管服务。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费DNS托管，最多支持3个域名，提供DNSSEC支持。
* [VolaryDDNS](https://volaryddns.net) — 高性能免费动态DNS服务，无订阅或广告。
* [LocalCert](https://localcert.net) — 提供免费的`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名服务
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名服务

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储服务
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB外传流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Redis 方案。单节点，1 CPU，1GB 内存，PostgreSQL 和 MySQL 提供 5GB 存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 看似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行和每月 1,000 次 API 请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 服务，提供 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用。包含 2 名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点 2 CPU、2 GiB 内存、8 GiB 存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器 Redis，免费层每日 10,000 次请求，最大数据库容量 256MB，20 个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建，支持从物联网到 AI 的下一代应用开发
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
* [redsmin.com](https://www.redsmin.com/) — Redis 在线实时监控与管理服务，免费监控 1 个 Redis 实例
* [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费支持最高 25MB、1 个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供 PaaS，但包含 128MB 至 192MB 的 MySQL、PostgreSQL 或 MongoDB 免费层
* [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活电子表格式数据库。无限表格、2,000 行、1 个月版本历史，最多 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 结合电子表格灵活性、数据库功能及与常用商业应用内置集成的工具。免费方案包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源 MySQL 兼容的分布式 HTAP RDBMS。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5,000 万请求单位 (RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验。Turso 提供永久免费入门方案，9 GB 总存储、最多 500 个数据库、最多 3 个位置、每月 10 亿行读取，以及 SQLite 本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费支持每 5 分钟 3MB 写入、每 5 分钟 30MB 读取和 10,000 基数序列
* [restdb.io](https://restdb.io/) - 快速简单的 NoSQL 云数据库服务。提供模式、关系、自动 REST API（支持类 MongoDB 查询）和高效的多用户管理界面。免费方案支持 3 用户、2,500 条记录和每秒 1 次 API 请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供 5,000 万 RUs 和 10 GiB 存储（价值 15$）。([什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html))
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图大小（5 万节点，17.5 万关系）。
* [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 存储（总计）、1 个项目、10 个分支、无限数据库、始终可用的主分支（5 分钟后自动暂停），非主分支计算每月 20 小时活跃时间（总计）。
* [Prisma Postgres](https://prisma.io/postgres) - 基于 unikernels 并在裸机上运行的超快托管 Postgres，1GB 存储、10 个数据库，与 Prisma ORM 集成。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管的原生图数据库管理系统，提供 GraphQL API。限制每日 1 MB 数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持通过 HTTP 无连接数据摄取，并可将 SQL 查询发布为托管 HTTP API。免费层无时间限制，10GB 存储 + 每日 1,000 次 API 请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管的原生图数据库管理系统/分析平台，支持类 SQL 图查询语言和 REST API。免费实例含 2 vCPU、8GB 内存和 50GB 存储，闲置 1 小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的免费托管服务，这是一个用 Prolog 和 Rust 编写的文档和图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - filess.io 是一个平台，可免费创建两个数据库，每个数据库最多 10 MB，支持以下 DBMS：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [xata.io](https://xata.io) - Xata 是一个内置强大搜索和分析的无服务器数据库。提供单一 API、多个类型安全客户端库，并针对开发工作流优化。永久免费层适合业余开发者，包含三个 Xata 单位，单位定义请参阅网站。
* [8base.com](https://www.8base.com/) - 8base 是一个基于 MySQL 和 GraphQL 构建的全栈低代码开发平台，面向 JavaScript 开发者，提供无服务器后端即服务。允许使用 UI 应用构建器快速构建 Web 应用并轻松扩展，免费层包含：2,500 行、500 存储、1Gb/h 无服务器计算和 5 个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库、始终可用不关闭、1GB 存储（总计）、5,000 万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费方案支持最多5人加入的无限局域网级联网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码即可获得wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到公网。无需安装注册，免费子域名无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑构建类局域网。不限节点数（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转站，免费支持每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，基于开源WireGuard协议。支持多平台，个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook请求，支持通过隧道将内网服务暴露为公共HTTP端点。
* [Hookdeck](https://hookdeck.com/pricing) — 全功能webhook开发测试平台。免费版每月10万请求+10万次重试，数据保留3天。
* [Xirsys](https://www.xirsys.com/pricing/) — 不限STUN使用+500MB/月TURN流量（限单区域）。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端，提供跨平台客户端和私有网络配置界面。
* [LocalXpose](https://localxpose.io) — 反向代理工具，免费版隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地服务到自定义URL并配置访问控制。免费版支持单集群5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务暴露到公网。免费版包含文件服务器、自定义HTTP头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 面向5人以下团队的免费项目管理与SCRUM软件  
* [asana.com](https://asana.com/) — 支持协作者的私有项目免费使用  
* [Backlog](https://backlog.com) — 一站式项目交付平台，免费版支持1个项目、10名用户及100MB存储  
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享及时间追踪。免费版支持3个项目、20名用户和1GB存储空间  
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网与项目管理工具，免费版提供5GB存储（用户数不限）  
* [cacoo.com](https://cacoo.com/) — 实时在线图表工具（流程图/UML/网络图），免费版最多15用户/图表，25页  
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5名用户，含Jira集成、无限视频会议、团队及会话  
* [clickup.com](https://clickup.com/) — 项目管理平台，提供免费版及云存储付费版，支持移动端和Git集成  
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且用户数不限  
* [Cloudcraft](https://cloudcraft.co/) — AWS架构图设计工具，免费版支持单人无限私有图表  
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版含5名成员、不限仓库/项目/文档、每月500分钟CI/CD时长和1GB存储  
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10名用户  
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版含5个工作区  
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费支持3个项目（用户数不限，1GB存储）  
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费  
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版支持无限项目/用户/存储  
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月可创建3个公共看板（每看板1次调研）  
* [GForge](https://gforge.com) — 支持自托管与SaaS的项目管理套件，SaaS免费版前5名用户免费，开源项目完全免费  
* [gleek.io](https://www.gleek.io) — 开发者免费UML图表生成工具（类图/对象图/ER图）  
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异对比工具，可标记破坏性变更  
* [huboard.com](https://huboard.com/) — GitHub Issues项目管理工具，开源项目免费  
* [Hygger](https://hygger.io) — 项目管理平台，免费版支持无限用户/项目/看板（100MB存储）  
* [Instabug](https://instabug.com) — 移动应用Bug反馈SDK，免费版支持1个应用和1名成员  
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用  
* [Ilograph](https://www.ilograph.com/) — 多维度交互式图表工具，免费版支持无限私有图表（最多3名查看者）  
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷项目管理工具，免费版支持10名用户  
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含付费高级功能  
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2名用户（不含附件）  
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1名用户（不限看板/列表/卡片）  
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版支持250个工作项  
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（含Chrome扩展），完全免费  
* [Kumu.io](https://kumu.io/) — 动态关系图谱工具，免费版支持无限公开项目，学生可享私有项目  
* [Linear](https://linear.app/) — 极简任务追踪工具，免费版支持无限成员（单个文件10MB，250个任务）  
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10名用户/2GB存储/5分钟AI视频录制  
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版含3个可编辑文档和100个模板  
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目（成员不限）  
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum看板工具  
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版支持5名用户/100MB存储（不限工作区/会议/工时）  
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3名用户（文件限制10MB）  
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费支持无限公开项目和2个私有项目（3名活跃用户）  
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理工具，免费版支持2名用户/10个客户/500MB存储  
* [Plane](https://plane.so/) - 开源项目管理工具，免费版支持无限成员（单个文件5MB，1000个任务）  
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克估算工具

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版提供无用户限制的任务、迭代和工作区
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，涵盖看板、Scrum等多种流程。免费版支持无限用户和1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版包含1个工作区（任务和项目数量不限）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾和迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供付费升级选项
* [teleretro.com](https://www.teleretro.com/) — 趣味回顾工具（含破冰游戏/GIF/表情），免费版包含3次回顾会议且成员不限
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理与Beta测试平台，私人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版支持每张图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理工具。免费版功能：5个活跃项目/每项目5名用户/5MB文件上传/3个筛选器/1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版提供无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目管理/版本控制/问题跟踪），免费版提供无限项目与协作者及3GB存储
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具，最多3名用户免费且项目不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目与私有项目（3名用户免费），含时间跟踪与敏捷看板
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌的项目管理方案，公共仓库/开源组织/非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，免费版支持5名成员和5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（面向自由职业者，免费版含无限记录/项目/客户/标签/报告）；[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版支持无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/销售/客服设计的项目管理工具，特别适合外包与跨组织协作项目，免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简时间追踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。免费提供10GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化和CDN服务。提供多种图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费月套餐包含25GB CDN流量、25GB缓存存储和无限转换。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图片上传、强大编辑、存储和交付服务，支持Ruby、Python、Java、PHP、Objective-C等多种语言库。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持最大1GB文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档、图片、音频、视频等格式转换和编辑。
* [GoFile.io](https://gofile.io/) - 支持网页界面和API的免费文件共享存储平台。无文件大小、带宽和下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图片视频托管、处理和流媒体服务。免费套餐每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在不损失质量的前提下减小文件体积。开源项目免费使用。
* [ImgBB](https://imgbb.com/) — 无限容量的图片托管服务。拖拽即可上传（单张上限32MB），获取直链、BBCode和HTML缩略图。登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无限制无水印的社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐包含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费版支持最大1MB文件。
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费版支持100个键（每个1KB）、每小时100次调用。
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速（缓存、图片代码优化、CDN）。免费支持每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 集中加密、共享、复制和移动云端文件。基础版支持无限传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供有限免费套餐，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客马拉松和移动应用设计的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理方案，提供友好界面和API。免费套餐含1GB存储和API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务
* [plot.ly](https://plot.ly/) — 数据图表生成与分享。免费版支持无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队试用基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 快速批量生成美观二维码——无需登录、无水印、无广告。每次最多导出100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表、图形和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持最多2个用户
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，累计处理超70亿张图片仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费每月可渲染20分钟视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 处理音视频/图片/文档的上传转码。开源项目、慈善机构和学生可通过GitHub学生开发者包免费使用，商业应用可试用2GB额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN、媒体处理API和前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理全流程工具链。开发者可免费使用所有功能：文件上传API/UI、图片CDN、自适应传输和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全理念的零知识文件存储服务。注册即享永久免费10GB空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费提供20GB空间（支持3台设备），推荐奖励5GB（账户90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – 全球图像CDN服务ImageEngine简单易用，60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[点击此处](https://imageengine.io/developer-program/)申请免费开发者账户。
* [DocsParse](https://docsparse.com/) – 基于GPT人工智能技术，将PDF、图像等文件处理为JSON、CSV、EXCEL格式的结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、Logo等。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能，完全免费且不收集用户数据。
* [Doradrop](https://doradrop.com) — 提供无限存储空间且无广告的文件共享平台，无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代化响应式网站，非设计师也能轻松打造精美设计
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板，提供丰富的首页模板，下载模板代码包即可快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，团队可构建、文档化、发布、扩展和维护设计系统。免费版支持3名编辑人员共同开发1个设计系统，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费在线社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能文件转换工具，包含视频和GIF转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 专为品牌打造的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费快速生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库，可下载优质矢量素材
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，支持布局设计和交互动画，免费版包含无限查看者，最多2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库（含模特/物权授权）
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站最高分辨率favicon
* [Iconoir](https://iconoir.com) - 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐及设计工具集，免费版提供有限格式的低分辨率素材，使用时需标注来源
* [landen.co](https://www.landen.co) - 无代码建站工具，免费版支持完全自定义并发布一个网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计与用户体验工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加宽高参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，为设计师/开发者提供Lottie动画工具及Android/iOS/Web插件
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 免费无限量云存储思维导图，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) - 社交媒体与电商服装模型生成器，提供40个免费模板
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) - 基于浏览器的免费矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具，实时创建并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 网页版开源设计与原型工具，支持SVG格式
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供基于关键词搜索的免费API
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器，兼容PSD/XCF/Sketch格式（类似Photoshop/Gimp/Sketch）
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成至代码库的网页设计与页面构建工具，支持响应式页面/复杂组件开发，可代码扩展并发布至生产环境
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持直接热链引用
* [Proto.io](https://www.proto.io) - 无需编码的交互式UI原型工具，免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) - 简单的应用图标尺寸管理服务
* [Rive](https://rive.app) - 创建并发布精美动画至任意平台，个人用户永久免费。提供编辑器及多平台运行时支持
* [storyset.com](https://storyset.com/) - 免费定制化插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成器，提供200个免费模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 跨组件与布局实时预览主题变更效果
* [Tailark](https://tailark.com/) - 营销网站专用的现代化响应式UI区块合集
* [tabler-icons.io](https://tabler-icons.io/) - 1500+可复制粘贴的免费可编辑SVG图标

  * [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像。URL可直接嵌入网页/应用，支持通过URL配置参数。
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可完全免费使用且无需署名。
* [unsplash.com](https://unsplash.com/) - 商用和非商用的免费图库（无限制使用许可）。
* [vectr.com](https://vectr.com/) — 网页端+桌面端的免费设计工具。
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持创建3个最多5步的引导流程。
* [Webflow](https://webflow.com) - 带动画功能的可视化网站构建器，含托管服务。免费支持两个项目。
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化网站构建器。非商业用途免费。
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图工具。免费创建最多4个画板。
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，展示设计稿、资源和样式指南。免费支持一个项目。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特图形与图像。
* [Responsively App](https://responsively.app) - 免费开发工具，加速响应式网页应用开发。
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，提供不断扩充的免费设计模板库。
* [xLayers](https://xlayers.dev) - 将Sketch设计文件预览并转换为Angular/React/Vue等框架代码（开源项目见https://github.com/xlayers/xlayers）。
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大且SEO优化的网页构建器。前5页免费，支持无限自定义域名和全部功能。
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器。无水印，支持1080p导出。
* [Unicorn Platform](https://unicornplatform.com/) - 简易落地页构建器含托管服务。免费支持一个网站。
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标、合集和品牌标志库，内置浏览器版矢量编辑工具。
* [svgrepo.com](https://www.svgrepo.com/) - 搜索并下载可商用的免费SVG矢量图标库。
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状、背景和图案的在线工具，可直接用于设计工作流。
* [Canva](https://canva.com) - 免费在线视觉设计工具。
* [Superdesigner](https://superdesigner.co) - 通过点击即可创建独特背景、图案、形状等的免费设计工具集。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，支持无头静态网站创建。免费3个项目，不限协作者，可导出代码。
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG/DXF/EPS等矢量格式。
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，支持开发者常用格式如JPG转SVG、JSON转XML等。
* [okso.app](https://okso.app) - 极简在线绘图工具，可导出PNG/JPG/SVG/WEBP格式，无需注册。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件。
* [Lucide](https://lucide.dev) - 免费可定制的SVG图标工具包。
* [Logo.dev](https://www.logo.dev) - 企业Logo API，含4400万+品牌库，前1万次API调用免费。
* [MDBootstrap](https://mdbootstrap.com/) - 免费个人/商用Bootstrap/Angular/React/Vue UI套件，含700+组件和模板。
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库，设计更优功能更强。
* [DaisyUI](https://daisyui.com/) -- 免费。"用更少的类名使用Tailwind CSS"，提供按钮等组件。
* [Scrollbar.app](https://scrollbar.app) -- 简易网页滚动条设计工具。
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器。
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色合集及生成工具。
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一搜索平台，支持导出SVG或框架专用格式。
* [NextUI](https://nextui.org/) -- 免费。美观、快速的React & Next.js UI库。
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑的开源图标设计系统。
* [ShadcnUI](https://ui.shadcn.com/) -- 可直接复用的精美组件库，支持无障碍访问和定制。
* [HyperUI](https://www.hyperui.dev/) -- 开源Tailwind CSS组件库。
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标，完全免费。
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片模糊背景框。
* [Webstudio](https://webstudio.is/) -- Webflow开源替代品，免费版支持无限子域名网站和5个自定义域名。
* [Nappy](https://nappy.co/) -- 黑人及棕色人种主题免费图库，商用和个人使用均可。
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/工具合集，含代码生成器功能。
* [Tailcolors](https://tailcolors.com/) -- 精美Tailwind CSS v4调色板工具。
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存和导出的免费在线绘图工具。
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费图形设计工具，离线可用。免费版含10个云文档和基础功能。
* [Flows](https://flows.sh/) -- 产品引导互动平台，免费支持250名月活跃用户。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常来自非实际应用场景。
* [Landings](https://landings.dev/) - [网页截图] 根据偏好查找最佳落地页设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [落地页/UI套件/网页截图] 展示6025个最佳落地页案例，提供免费设计书籍和UI套件资源。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [落地页设计] 持续更新的落地页截图库，包含桌面端、平板和移动端截图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可搜索的移动应用截图库，节省UI/UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球顶尖公司的移动端和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供精选的UI/UX模式库（iOS和Android）。
* [Page Flows](https://pageflows.com/) - [移动端/网页视频及截图] 多款应用的完整流程视频与截图，支持高效搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并紧跟最新的网页和移动应用UI设计趋势，可按模式和应用筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考库，支持标签和搜索功能。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求额度
* [carto.com](https://carto.com/) — 基于自有数据与公开数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月5万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，支持地理数据存储、分析、地理编码、路径规划等功能。每月包含200万次免费底图瓦片调用、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索与情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用API及SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示服务与SDK套件
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与可视化SDK。免费矢量瓦片每周更新，提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向指引/路径规划/路线优化/距离矩阵）、地图SDK（矢量/静态/移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排序的地理编码与搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）。
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务。
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP Shell和代码片段分享网站，支持在300多个PHP版本中运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。这款开源IDE对所有人免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实Android应用
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，包含一个管理员账户和托管文档）
* [BBEdit](https://www.barebones.com/) - 适用于macOS的流行可扩展编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。这是一项免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简单GUI帮助初学者
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器。轻量级、易用且高度可定制
* [cacher.io](https://www.cacher.io) - 代码片段管理器，支持标签和100多种编程语言
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源且支持Windows、macOS和Linux
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，可编写（代码块、自动补全、单元测试）、理解（掌握整个代码库知识）、修复和查找代码。支持VS Code、JetBrains和在线使用
* [codiga.io](https://codiga.io/) — 编码助手，可直接在IDE中搜索、定义和复用代码片段。对个人和小型组织免费
* [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，支持分类、搜索和标签。完全免费且无限制
* [cocalc.com](https://cocalc.com/) — （原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置协作工具和大量数学、科学、数据科学领域的免费软件，预装Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，为师生适配GitHub Codespaces
* [codepen.io](https://codepen.io/) — 前端网页开发 playground
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等的在线Playground
* [Components.studio](https://webcomponents.dev/) - 独立编写组件，通过故事可视化展示，测试并发布到npm
* [Eclipse Che](https://www.eclipse.org/che/) - 面向开发团队的基于Web和Kubernetes的原生IDE，支持多语言。开源且由社区驱动。Red Hat托管的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)获取
* [fakejson.com](https://fakejson.com/) — 通过API快速生成虚假数据。发送描述需求的API请求，即可获得JSON格式的返回结果。加速创意落地过程
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI结对编程工具。原生兼容CLI，无缝集成任何IDE。免费版包含基础AI模型访问和本地处理能力
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏工具。免费版每天可使用5个VM
* [GitPod](https://www.gitpod.io) — 为GitHub项目提供即时可用的开发环境。免费版每月50小时
* [ide.goorm.io](https://ide.goorm.io) goormIDE是云端完整IDE。支持多语言，通过功能完备的网页终端提供基于Linux的容器，支持端口转发、自定义URL、实时协作与聊天、链接分享、Git/Subversion。更多功能详见官网（免费版每个容器含1GB内存和10GB存储，5个容器槽位）
* [JDoodle](https://www.jdoodle.com) — 支持60多种编程语言的在线编译器和编辑器，免费版每天可通过REST API编译代码200次
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE和部署工具（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。为学生、教师、开源项目及用户组提供免费许可
* [jsbin.com](https://jsbin.com) — 前端网页开发 playground 和代码分享网站（支持HTML、CSS、JavaScript，以及Markdown、Jade和Sass）
* [jsfiddle.net](https://jsfiddle.net/) — 前端网页开发 playground 和协作式代码分享网站
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回虚假JSON数据的REST API端点。如需本地运行服务器，源码也可获取
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假JSON数据的微型API模拟服务
* [mockable.io](https://www.mockable.io/) — 可配置的RESTful API/SOAP Web服务模拟工具。支持快速定义端点并返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 生成CSV、JSON、SQL和Excel格式的测试数据。也可创建后端API模拟
* [Mocklets](https://mocklets.com) - 基于HTTP的模拟API工具，支持终身免费套餐
* [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器中开发Web应用。免费版提供24小时有效期的服务器，每天4小时运行时间（2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 开箱即用支持Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript和TypeScript编译，提供浏览器重载功能，让网站开发测试更高效。支持通过点击添加自定义工具
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程playground。支持多种语言，运行代码无需注册（保存代码需注册）。同时提供面向初学者和中级开发者的免费课程
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码IDE，支持创建、编辑和部署全栈应用。兼容所有主流基于NodeJS的前后端框架。新建项目快捷链接：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 微软开发的现代化代码编辑器，专为构建和调试现代Web及云应用优化重构
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能集成开发环境，支持数千种扩展，跨平台应用开发（可下载iOS和Android的微软扩展），桌面、Web和云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的VSCode二进制发行版，无遥测/追踪，采用自由软件许可
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持无缝工作流。可内联渲染任何内容，保存会话和历史记录，基于开放Web标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，含故事书和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 高效免费数据库IDE，提供服务器发现、ER图、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的在线编译器，包括Java、Python、C++、JavaScript等

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Repohistory](https://repohistory.com) - 美观的仪表盘，用于追踪超过14天的GitHub仓库流量历史。免费计划允许用户监控单个仓库的流量。
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
* [Hightouch](https://hightouch.com/) - Hightouch是一个反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个目标数据同步。
* [Avo](https://avo.app/) — 简化的分析发布工作流。单一事实来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观测性，确保在发布前发现所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯。
* [Branch](https://www.branch.io) — 移动分析平台。免费层提供最多10K移动应用用户，包含深度链接和其他服务。
* [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。从数据仓库同步10个字段到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3000次浏览分析。
* [Databox](https://databox.com) — 通过整合其他分析和BI平台提供商业洞察与分析。免费计划提供3个用户、仪表板和数据源。11M历史数据记录。
* [Hitsteps.com](https://hitsteps.com/) — 每月2000次页面浏览（1个网站）
* [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一个开源的网络分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且注重隐私的替代方案，替代Google Analytics或Matomo。免费层适用于非商业用途，包含无限站点、六个月数据保留和每月10万次页面浏览。
* [Google Analytics](https://analytics.google.com/) — Google Analytics
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月提供100万次页面浏览，无需信用卡。
* [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月最多3000次事件免费。
* [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。每月最多10K次会话免费。
* [Hotjar](https://hotjar.com) — 网站分析与报告。免费计划每天提供2000次页面浏览。每天100次快照（最大容量：300）。可存储3个热图快照365天。无限团队成员。还包括应用和独立调查、带截图的反馈组件。免费层允许创建3个调查和3个反馈组件，每月收集20条回复。
* [Keen](https://keen.io/) — 自定义分析工具，用于数据收集、分析和可视化。每月1000次事件免费
* [Yandex.Datalens](https://datalens.yandex.com/) — Yandex Cloud数据可视化与分析服务。服务免费提供，无用户和请求数量限制。
* [Yandex.Metrica](https://metrica.yandex.com/) — 无限免费分析
* [Mixpanel](https://mixpanel.com/) — 每月10万跟踪用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月最多50万次API调用免费）
* [optimizely.com](https://www.optimizely.com) — A/B测试解决方案，免费入门计划，一个网站、1个iOS和1个Android应用
* [Microsoft PowerBI](https://powerbi.com) — 微软的商业洞察与分析。免费计划提供有限使用，包含100万用户许可证。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接数据库、S3和API。即时导入、分析、绘图和共享数百万行数据。三个永久免费的工作簿。
* [sematext.com](https://sematext.com/cloud/) — 每月最多5万次操作免费，1天数据保留，无限仪表板、用户等。
* [Similar Web](https://similarweb.com) — 网站和移动应用分析。免费计划提供每个指标五个结果、一个月移动应用数据和三个月网站数据。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划分析最近500名访问者。
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月最多100万次计量事件免费。
* [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建并让Tableau完美适配您的组织。免费开发者计划提供Tableau Online的个人开发沙盒许可证。版本为最新的预发布版，数据开发者可以测试这一卓越平台的每个功能。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型并追踪访问者。免费供一名用户使用，无限测试
* [woopra.com](https://www.woopra.com/) — 免费用户分析平台，提供50万次操作、90天数据保留、30多个一键集成。
* [counter.dev](https://counter.dev) — 简单且注重隐私的网络分析。免费或按捐赠付费。
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多100万次跟踪事件免费。还提供每月250次回复的无限应用内调查。
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。提供免费计划，为开源项目提供个人订阅优惠，并有开源版本。
* [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一款免费易用的工具，捕捉真实用户如何使用您的网站。
* [Beampipe.io](https://beampipe.io) - Beampipe是简单、注重隐私的网络分析。免费支持最多5个域名和每月1万次页面浏览。
* [Aptabase](https://aptabase.com) — 开源、注重隐私且简单的移动和桌面应用分析。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月最多2万次事件免费。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，促进无缝协作。可部署到生产环境实时监控，或为回归测试添加分析覆盖，无需编写代码。
* [LogSpot](https://logspot.io) - 完整的统一网络和产品分析平台，包括可嵌入的分析组件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包含每月1万次事件。
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私友好型Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标追踪。最多支持3个域名，每个域名600次会话回放。
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在简化跨平台分析和产品更新的管理。免费计划包含每月1万次事件、产品日志和每周洞察。

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站与产品分析工具。免费套餐每月包含3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，采用无Cookie设计，操作直观度提升10倍。免费套餐提供每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，提供用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次免费会话
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次免费会话
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次免费会话
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗分析，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次免费API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入1万美元以内免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API调用。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供iOS、Android、Stripe和Paddle平台的实时订阅事件与开箱即用的变现工具。每月收入1万美元以内免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，支持iOS、Android、React Native、Flutter、Unity或网页应用的应用内订阅集成。每月收入1万美元以内免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费版每月10,000次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费DEVELOPER计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
* [CurrencyApi](https://currencyapi.net/) — 提供物理货币与加密货币的实时汇率（JSON/XML格式）。免费版每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费Micro计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持对接Stripe、Chargebee等。免费版每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - iOS和Android平台的应用内购与订阅全流程平台，含无代码支付墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购与订阅后端（iOS/Android）。每月追踪收入2,500美元以内免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟增值税率API，免费版每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。私有用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像  
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间  
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像  
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的实践平台  
* [quay.io](https://quay.io/) — 构建和存储容器镜像，支持无限量免费公共仓库  
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册服务  

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant Cloud 云服务。Vagrant box托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与网站构建平台
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的想法、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可将 GitHub issues 用于博客评论、维基页面等场景！
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随捐"模式，提供"单个管理员管理多个域名，完全控制行为与外观"服务
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截取、捕捉时间点和视窗尺寸调整。
* [microlink.io](https://microlink.io/) — 将任意网站转化为结构化数据，包括元标签标准化、美观链接预览、爬虫功能及截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) — 通过简单API调用生成任何网站的截图。基于Google Cloud构建，具备扩展能力。每月免费100张截图。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度自定义的网站快照服务。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次截图（png/gif/jpg格式），支持整页截取而不仅限首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图与域名智能API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的理想平台。无需 Mac 设备即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管的移动应用持续集成与交付平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可直接在浏览器中运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux及其他操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意书管理工具。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理解决方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理及隐私框架工具。免费版在有限访问量下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理(DSARs)和数据映射。免费版包含核心同意管理功能，并为通过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台。免费开发者计划支持5台设备，含云端存储。提供移动端应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于Twitter或博客展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的编码时间追踪插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转为社交媒体可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或周期性Webhook调度服务。免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，提供无限免费任务
* [datelist.io](https://datelist.io) - 在线预约系统。每月免费5次预订，包含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具。免费支持5个域名和20万次月请求
* [Elementor](https://elementor.com) — WordPress建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加Webhook支持（含队列/重试/日志）。免费版每日100次投递，14天留存，3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN/ISP/地理位置等信息，含多款DNS相关工具
* [http2.pro](https://http2.pro) — HTTP/2协议支持检测API
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram等接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，API动态生成PDF。每月300份免费额度
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全的模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥与密码的移动端友好工具
* [ray.so](https://ray.so/) - 代码片段美图生成工具
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理。免费版含10个源和10万次月访问
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具，支持GET/POST等方法和Token认证，可保存请求记录
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电量/里程/车门控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉创作工具（代码片段/技术演示）。免费版支持3个同时编辑，含5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时Feed订阅服务，免费版功能受限
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷调查工具。免费版每份问卷限10题100答
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台（网站/WhatsApp）。免费版不限机器人数量
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅（前3个订阅免费）
* [videoinu](https://videoinu.com) — 在线录屏与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具集（编解码/数据处理等）

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制  
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关  
* [RemSupp](https://remsupp.com) — 按需技术支持与设备永久访问权限（每日免费2次会话）  
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！  
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制  

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏素材
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可自定义SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 在线像素画创作工具，提供大量教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D素材与音频市场，也可用于作品集展示
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建游戏素材
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型与PBR材质纹理库
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的免费2D/3D/音频/UI游戏素材
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（支持多分辨率）、模型、HDRI和笔刷，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的免费协作音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供经过公共CA签名的`*.localhost.direct`通配符SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [github.com — 开发者开源软件集](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据评估）
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的红帽产品免费访问权限（包括RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直接备份数据库/文件系统/应用到S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题和UI套件，加速应用开发
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名的工具
* [SmallDev工具集](https://smalldev.tools/) — 开发者多功能工具：编解码/代码压缩美化/生成测试数据等，拥有优雅界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，免费版支持100MB文件大小且无需绑卡
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的网页按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器计算的离线工具集（水印生成/录屏/编解码/加密/代码格式化等），完全免费且不上传数据
* [IT工具集](it-tools.tech) - 面向开发者和IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的代码工具集：Markdown编辑器/代码压缩美化/二维码生成/OpenGraph生成器等
* [正则101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs等）
* [Glob模式测试器](https://globster.xyz/) — 可视化设计测试glob模式的工具，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无需代码即可将MySQL备份恢复到任意远程数据库
* [360转换器](https://www.360converter.com/) - 免费转换工具：视频转文字/音频转文字/实时语音转文字/YouTube视频转文字/添加视频字幕
* [最佳二维码生成器](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成服务，支持追踪像素和团队协作
* [PostPulse](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升网站排名，免费版允许手动发布1篇内容
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集，一键生成网站政策/社交媒体资料/网页内容
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互式学习环境
* [Axonomy发票工具](https://axonomy-app.com/) - 免费创建管理发票，每月10张额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费转换表格数据格式（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**