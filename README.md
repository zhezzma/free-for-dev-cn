# free-for.dev

开发者和开源作者现在拥有许多提供免费层级的服务，但要全面了解这些服务需要花费时间才能做出明智决策。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们喜爱所有免费服务，但最好保持主题相关性。有时界限比较模糊，因此这是基于主观判断的；如果未采纳您的贡献，请勿介意。

这份清单来自1600多人提交的Pull Requests、评审、想法和实际工作。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或停用的服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限服务型产品，不包括自托管软件。符合条件的服务必须提供免费层级（而非仅限免费试用）。若采用时间分段，免费层级至少需持续一年。我们也会从安全角度评估免费层级，因此支持SSO的服务可以接受，但不会收录那些仅在付费层级提供TLS的服务。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析/事件/统计](#数据分析/事件/统计)
  * [API/数据/机器学习](#API/数据/机器学习)
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
  * [设计与UI](#设计与UI)
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
  * [国际手机号验证API/SDK](#国际手机号验证API/SDK)
  * [问题跟踪与项目管理](#问题跟踪与项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发与反馈](#移动应用分发与反馈)
  * [管理系统](#管理系统)
  * [消息与流处理](#消息与流处理)
  * [杂项服务](#杂项服务)
  * [监控服务](#监控服务)
  * [平台即服务](#平台即服务)
  * [软件包构建系统](#软件包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关/无Mac开发iOS应用](#Flutter相关/无Mac开发iOS应用)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道/WebRTC/WebSocket路由](#隧道/WebRTC/WebSocket路由)
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
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美至所有区域（除中国和澳大利亚）的网络出口流量
    * Cloud Storage - 5GB存储空间，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储空间，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息流量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1GB北美地区网络出口流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，每月10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储空间，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

* [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100构建分钟
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出口流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型(SSD)存储，20GB存储备份（12个月）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松创建精简的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，Linux/macOS/Windows开源项目无限分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU/s预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），含有限交易的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 当[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点采集，10亿个数据点检索
    * 带宽 - 每月10TB出口流量，x64 VM限速50Mbps，ARM VM限速500Mbps*核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次投递选项，每月1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL、防火墙规则和页面规则、WAF、机器人缓解、不限次数的速率限制（每域名1条规则）、分析、邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限协作席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），Cloud 66 提供构建、部署和发展云应用所需的一切功能，让您无需操心"服务器相关事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作功能
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于提升Terraform管理的基础设施和配置的协作与自动化水平。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外收费，包含全部功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上实现部署自动化。免费版支持单个开发者无限量部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公开和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限制的公开和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公开和私有Git仓库（无限制协作者）。由[Forgejo](https://forgejo.org/)驱动。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含包和容器托管、项目管理及问题追踪
* [GitGud](https://gitgud.io) — 无限制的私有和公开仓库。永久免费。由GitLab和Sapphire驱动。不提供CI/CD
* [GitHub](https://github.com/) — 无限制的公开仓库和无限制的私有仓库（无限制协作者）。包含CI/CD、开发环境、静态托管、包和容器托管、项目管理及AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 无限制的公开和私有Git仓库，最多5名协作者。包含CI/CD、静态托管、容器注册表、项目管理及问题追踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件的代码托管平台，包含CI、静态页面、项目页面及问题追踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；同时提供一个Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是一个自由软件的代码协作平台，适用于自由许可的项目，基于Git
* [OSDN](https://osdn.net/) - OSDN.net是一个免费的开源软件开发者服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是一个自由开源的代码协作平台，适用于FOSS许可的项目，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费的1GB云存储及Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 无限制的免费开源分布式版本控制系统。其独特之处在于基于补丁的健全理论，使其易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费的私有项目（Git和Subversion），包含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限制的公开和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目的协作软件开发管理系统（适用于GNU项目）
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目的协作软件开发管理系统（适用于非GNU项目）

**[⬆️ 返回顶部](#目录)**

## API/数据/机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选成美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
* [IP.City](https://ip.city) — 每天100次免费IP地理位置查询
* [Abstract API](https://www.abstractapi.com) — 多功能API套件，包含IP定位、性别检测、邮箱验证等服务。
* [Apify](https://www.apify.com/) — 网页抓取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图片和PDF文档。无需CSS/HTML知识。免费计划每月50张图片和3个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全套工具助您全面了解API和后端运行情况，含自动API合约验证和监控。免费计划支持每日最多10,000次请求。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高质量API。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等问题的根因分析。免费支持最多2个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI智能体。完整评估与可观测性平台，帮助团队可靠部署AI智能体并提速5倍以上。个人开发者和小团队（3席位）永久免费。
* [Beeceptor](https://beeceptor.com) - 无代码云端多协议API（REST/SOAP/gRPC/GraphQL）模拟调试平台，提供基于规则的即时服务器、CRUD模拟、代理和CORS管理。免费计划每日50次请求，提供公开看板。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速精准的免费API（无限或每月1万-5万次），包括IP定位、反向地理编码、网络洞察、邮箱/手机验证等现代Web服务。
* [Browse AI](https://www.browse.ai) — 网页数据提取与监控。免费每月1,000积分（相当于1,000次并发请求）。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网页访问、图片/PDF生成等。免费计划每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) — 全面汽车数据API，含VIN解码、盗抢车辆检查、车辆估值等。免费层每月100次请求覆盖全部9个端点。
* [Calendarific](https://calendarific.com) - 企业级全球节假日API服务覆盖200+国家。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com商品数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API支持自定义人脸识别与检测，可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 多功能API平台，含文档转换、病毒扫描等服务。免费600次调用/月（仅限北美区域，文件最大2.5MB）。
* [Colaboratory](https://colab.research.google.com) — 免费网页版Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - 从实验跟踪到生产管理的MLOps平台，含模型注册和数据溯源。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，支持从前端构建和管理订单。开发者计划免费每月100订单和1,000个SKU。
* [Composio](https://composio.dev/) - AI代理和LLM集成平台，连接200+工具。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器（文档/图像/视频/音频/电子书）。提供REST API和Node.js/PHP/Python库。付费版支持50GB文件，免费版限制20MB文件大小（每日30次，每月300次转换）。
* [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家/地区/城市/邮编等数据的API微服务。免费层每日100次请求。
* [Coupler](https://www.coupler.io/) - 应用间数据同步工具，可创建实时仪表板。免费版限1用户/1数据连接/手动刷新。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖拽编辑器和简单API从模板自动生成PDF。免费计划每月100个PDF和3个模板。
* [Crawlbase](https://crawlbase.com/) — 无代理爬虫服务，自动处理验证码和防封禁。首1,000次请求免费。
* [CurlHub](https://curlhub.io) — API调用检查调试代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用实时货币数据API。免费计划每月5,000次调用。
* [CustomJS](https://www.customjs.io) - HTML转PDF/PDF转PNG/文本提取等API。免费层每月600次调用。
* [Cube](https://cube.dev/) - 帮助开发者从现代数据存储中组织和交付数据。Cube Cloud免费版每日限1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单免费文件分享，数据访问后自毁。支持浏览器或命令行上传下载。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable与任意API。类似Postman的界面，预集成数十个应用。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具。免费版每月20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。免费每月10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Chrome/Edge）用于网页数据提取为CSV/Excel。免费每月500页。
* [Datapane](https://datapane.com) - 通过API构建交互式报告，支持部署Python脚本和Jupyter笔记本为自助工具。

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计与建模工具，免费版支持2个数据库模型，每个模型最多10张表
* [DeepAR](https://developer.deepar.ai) — 跨平台增强现实人脸滤镜SDK，免费计划支持10名月活跃用户(MAU)及4张人脸追踪
* [Deepnote](https://deepnote.com) — 新型数据科学笔记本，兼容Jupyter并支持云端实时协作。免费版包含无限个人项目、基础机型（5GB内存+2vCPU）及最多3名编辑者的团队协作
* [Disease.sh](https://disease.sh/) — 免费API提供新冠疫情相关精准数据，助力开发实用应用
* [Doczilla](https://www.doczilla.app/) — SaaS API可将HTML/CSS/JS代码直接转换为截图或PDF，免费版每月生成250份文档
* [Doppio](https://doppio.sh/) — 托管API采用顶尖渲染技术生成并私有存储PDF/截图，免费版每月400次生成额度
* [drawDB](https://drawdb.app/) — 免注册的开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 为移动端/Web/IoT应用提供的开源REST API后端，可连接任意SQL/NoSQL数据库/文件系统/外部服务，实时生成带文档的用户管理REST平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，模板一次设计多次复用，免费版提供20点积分
* [DynamicDocs](https://advicement.io) — 基于LaTeX模板的JSON转PDF API，免费版每月50次调用并享模板库
* [Efemarai](https://efemarai.com) — ML模型与数据的测试调试平台，可视化计算图谱，本地使用免费
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具，试用版含2个项目（各10张表）
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 网页版HTTP客户端
* [Export SDK](https://exportsdk.com) — 带拖拽模板编辑器的PDF生成API，提供SDK与无代码集成，免费版含250页/月、无限用户和3个模板
* [file.coffee](https://file.coffee/) — 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）
* [Financial Data](https://financialdata.net/) — 股票与金融数据API，免费版每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) — 即时格式化/验证/比较/压缩JSON的浏览器工具
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API，免费微型版每月500次交易检测
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度查询城市名的服务，免费API每月500次调用
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费版每日2,000次请求
* [Glitterly](https://glitterly.app/) — 通过基础模板编程生成动态图像，含REST API与无代码集成，免费版50张图/月+5个模板
* [Hex](https://hex.tech/) — 协作式数据平台（笔记本/数据应用/知识库），社区版支持5个项目
* [Hook0](https://www.hook0.com/) — 开源Webhooks服务(WaaS)，免费版每日100次事件分发+7天历史记录
* [Hoppscotch](https://hoppscotch.io) — 免费美观的API请求构建器
* [huggingface.co](https://huggingface.co) — 构建/训练/部署PyTorch/TensorFlow/JAX的NLP模型，免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) — 声明式API生成PDF报告，14天试用版含50份单页报告（可调色板与字体）
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70+云平台（如Exact Online/Twinfield），含数据同步功能，开发者免费（部分平台有数据量限制）
* [ipaddress.sh](https://ipaddress.sh) — 获取多种[格式](https://about.ipaddress.sh/)公网IP的简易服务
* [ip-api](https://ip-api.com) — IP定位API（非商业用途免费），无需API密钥，免费版同IP限45次/分钟
* [ipbase.com](https://ipbase.com) — IP定位API，永久免费版每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API，开发者永久免费版每日1,000次请求
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，1,000次免费请求
* [IPLocate](https://www.iplocate.io) — IP定位API（每日1,000次免费），含代理/VPN/主机检测、ASN数据、IP关联企业等，另提供免费IP-国家/ASN数据库下载（CSV/GeoIP格式）
* [IP2Location](https://www.ip2location.com) — 免费版IP定位服务，LITE数据库可免费下载至本地查询城市/坐标/ISP信息
* [IP2Location.io](https://www.ip2location.io/) — 快速IP定位API（每月5万免费额度），含城市/坐标/ASN等数据，另附500次/月免费WHOIS查询
* [ipapi](https://ipapi.co/) — Kloudend公司基于AWS的IP定位API（免注册免费版3万次/月，每日1k次）
* [ipapi.is](https://ipapi.is/) — 开发者友好的IP定位API（免注册1,000次免费查询），具备顶级主机检测能力
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（每月5万次免费），含地理位置/企业/运营商等数据
* [IPQuery](https://ipquery.io) — 无速率限制的开发者IP API
* [IPTrace](https://iptrace.io) — 极简IP定位API（每月5万次免费查询）
* [JSON2Video](https://json2video.com) — 视频编辑API（支持编程与无代码方式生成营销视频）
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP（免注册无限请求），支持CORS直接通过浏览器JS调用

  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码、头部和响应体
* [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看器、编辑器和验证器。支持AI智能修复、树形视图、表格视图、12+种编程语言的代码生成，以及JSON转CSV/XML/YAML/Properties等格式转换
* [konghq.com](https://konghq.com/) — API市场及强大的公私API工具。免费版功能如监控、告警和支持有限
* [Kreya](https://kreya.app) — 免费gRPC图形客户端，支持通过服务反射导入gRPC API
* [Lightly](https://www.lightly.ai/) — 通过优质数据提升机器学习模型。免费提供最多1000条样本数据集
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈登录行为并通知客户。每月免费1000次登录验证
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月100次验证
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。永久免费API层级每日允许100次请求
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供基于多气象模型机器学习融合的精准预报。免费版每日400次调用
* [microlink.io](https://microlink.io/) – 将任何网站转化为标准化元数据、美观链接预览或截图服务。每日50次免费请求
* [Mindee](https://developers.mindee.com) – 智能OCR平台，通过计算机视觉和机器学习自动提取文档关键信息。免费版每月处理500页
* [Mintlify](https://mintlify.com) — 现代化API文档标准。提供美观易维护的UI组件、站内搜索和交互式调试台。免费支持1名编辑者
* [MockAPI](https://www.mockapi.io/) — 快速模拟REST API接口的工具，支持生成自定义数据和CRUD操作。每个免费项目可创建2个资源
* [Mockfly](https://www.mockfly.dev/) — API模拟与功能开关管理工具。免费版每日500次请求
* [Mocki](https://mocki.io) - 无需注册即可创建与GitHub仓库同步的模拟GraphQL/REST API
* [Mocko.dev](https://mocko.dev/) — 云端API代理服务，可自由选择需要模拟的端点并监控流量
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应的在线工具，[开源版本](https://github.com/julien-lafont/Mocky)可用
* [Mock N Roll](https://mocknroll.me/) - 免费API模拟服务，[开源项目](https://github.com/haerulmuttaqin/mocknroll-web)
* [microenv.com](https://microenv.com) — 为开发者创建可生成Docker容器代码的模拟REST API
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 多节点IP出口检测工具，适用于测试Control D等DNS分流工具
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具，每日免费查询可用标准价域名
* [News API](https://newsapi.org) — 新闻搜索API，开发者每日100次免费查询（文章有24小时延迟）
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API，每月100次请求
* [OCR.Space](https://ocr.space/) — 支持图片/PDF解析的OCR API，免费版每月25,000次请求（文件限制1MB）
* [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化创建OpenAPI 3.0定义的工具
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据并转化为API，免费5个项目
* [Parseur](https://parseur.com) — 每月20页免费额度：AI驱动的PDF/邮件数据提取工具
* [PDFBolt](https://pdfbolt.com) - 开发者友好的PDF生成API，每月500次免费转换
* [pdfEndpoint.com](https://pdfendpoint.com) - HTML/URL转PDF API，每月100次免费转换
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，免费版包含1个模板和每月100次生成
* [Pixela](https://pixe.la/) - 免费时间序列数据库服务，支持热力图和折线图可视化
* [Postman](https://postman.com) — API协作开发平台，永久免费基础功能
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化平台，免费版包含5个工作流和每月500分钟无服务器计算额度
* [Preset Cloud](https://preset.io/) - Apache Superset托管服务，5人以下团队永久免费（含无限仪表盘和零代码图表构建器）
* [PromptLoop](https://www.promptloop.com/) - AI网页抓取工具，每月赠送1,000免费积分
* [ProxySentry](https://proxysentry.io/) - 住宅代理/VPN检测API，RapidAPI平台每月免费10,000次请求
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API清单
* [Reducto](https://reducto.ai) - 非结构化文档(PDF/XLSX等)转JSON工具，免费15,000积分
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，提供交互式API开发挑战赛
* [Rendi](https://rendi.dev) - FFmpeg云端API，免费版包含月度处理配额和4个vCPU

  * [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应您的AJAX请求。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分。
* [ROBOHASH](https://robohash.org/) - 从任何文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简单的HTTP代理API，用于爬取数据。匿名爬取，无需担心限制、封锁或验证码。每月前100次成功爬取免费，包括JavaScript渲染（联系支持可获得更多）。
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬取API和免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000个API积分。
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的任何视觉或文本变化并进行数据提取。免费计划允许每月最多5个URL。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发您的Webhook。免费计划包括100个云端爬取积分。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量级套餐包含2个数据源、最多1,000个表和25个用户。
* [Sheetson](https://sheetson.com) - 立即将任何Google表格转换为RESTful API。提供免费计划，包括每张表格1,000行免费。
* [Siterelic](https://siterelic.com/) - Siterelic API可让您截取屏幕截图、审核网站、TLS扫描、DNS查询、测试TTFB等。免费计划每月提供100个API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google、YouTube、Bing、百度、沃尔玛等结构化JSON结果。免费计划每月包含100次成功的API调用。
* [SmartParse](https://smartparse.io) - SmartParse是一个数据迁移和CSV转API平台，提供节省时间和成本的开发者工具。免费套餐包括每月300个处理单元、浏览器上传、数据隔离、断路器和工作提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件并通过其API即时访问数据，加快应用程序开发。免费计划包括2个API和每月2,500次API调用。无需信用卡。
* [YourGPT CSV to JSON](https://yourgpt.ai/tools/csv-to-json) — 一个快速、免费且注重隐私的在线工具，可直接在浏览器中将CSV文件轻松转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 一系列免费的在线SQL工具，包括SQL格式化器和验证器、SQL正则表达式测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS。免费计划提供免费的设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板根据输入自动生成图像。免费计划允许每月创建最多50张图像。
* [Svix](https://www.svix.com/) - Webhook即服务。每月免费发送最多50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察及全面研究的API，具备组织研究结果的能力。免费套餐每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天1,000次免费请求。提供IP地址的位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。提供准确和最新的天气预报，覆盖全球，包括历史数据和天气监测解决方案。
* [Treblle](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。具备高级API日志聚合、可观察性、文档和调试功能。免费套餐包含所有功能，但每月限制250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590多种货币和加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的VAT号码验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据，包括当前状况、每小时和每日预报以及天气警报API。集成AI模型和ML系统，分析并组合多种天气模型以提高预报准确性。免费套餐包括每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 简单的Web爬取API，内置解析、Chrome渲染和代理。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建更好的模型。免费套餐仅限个人项目，包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月限制25,000个令牌（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 带有Headless浏览器、住宅IP和简单定价的Web爬取API。每月1,000次免费API调用，学生和非营利组织可获额外积分。
* [Zipcodebase](https://zipcodebase.com) - 免费邮政编码API，访问全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮政编码API和邮政编码验证。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，用于设计、构建和部署API到边缘。为任何API添加API密钥认证、速率限制、开发者文档和货币化功能。原生支持OpenAPI，完全可编程，使用Web标准API和Typescript。免费套餐提供最多10个项目、无限生产边缘环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线工具，用于比较两个JSON数据结构之间的差异，帮助您快速定位JSON数据中的不同之处。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速且可靠的IP地理定位API，适用于商业和非商业用户，提供JSON格式数据。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公共项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费的私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公共制品仓库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公共项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人和团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享和同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、历史记录和集成，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能安排会议时间。操作简单，适合各种规模团队
* [Calendly](https://calendly.com) — 会议调度工具。免费版支持1个日历连接和无限场次，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队专用的在线实时Scrum Poker工具，支持无限成员快速估算故事点
* [Telegram](https://telegram.org/) — 提供快速可靠的消息和通话服务。大群组、用户名系统、桌面应用和强大文件分享功能特别适合商业用户和小团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录、流程文档和团队协作，含异步屏幕录制功能
* [Duckly](https://duckly.com/) — 实时团队协作工具。支持IDE结对编程、终端共享、语音视频及屏幕共享，小团队免费
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月含10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 信息管理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作区平台。单用户免费，提供2GB存储空间
* [flock.com](https://flock.com) — 高效的团队沟通工具。免费版含无限消息、频道、用户和应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议平台。通过可定制虚拟空间实现自然社交，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册的语法化看板工具，无使用限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交空间。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交和PR活动的日报系统。含推送可视化、同伴认可系统和自定义提醒功能，免费版支持3个代码库
* [gitter.im](https://gitter.im/) — GitHub生态的聊天工具。公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作工具。类似Google Docs的Markdown编辑器，免费版笔记数量无限制，但私有笔记的协作者人数受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的免费全能通讯工具
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实远程协助工具。免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意收集与投票平台，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 企业内部门户，支持文档、博客、日历等共享，10人以下团队免费
* [Keybase](https://keybase.io/) — 开源的Slack替代方案，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议工具，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack中通过/meet命令发起Google会议，完全免费
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签和多工作区。免费版含4个工作区和10个成员
* [Livecycle](https://www.livecycle.io/) — 促进跨职能团队与开源项目无缝协作的平台
* [Lockitbot](https://www.lockitbot.com/) — Slack内的共享资源预定系统，免费版支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈的工具
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享功能和Passkeys的密码管理器，支持多平台
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容和应用的协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的安全协作白板工具，支持分布式团队，提供免费方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作应用，全能工作区解决方案
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具。免费版含核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编辑器的技术面试平台，支持浏览器端代码编译执行
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间追踪应用。免费版支持10个用户的时间记录和报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加视觉评审功能，无需部署网站。免费版每月10个页面/100MB存储
* [Pendulums](https://pendulums.io/) - 界面友好的免费时间管理工具，提供有价值的数据统计
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和消息历史记录

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、音视频通话，并能轻松与其他服务集成。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息记录和完整历史消息存储。
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。云版本仅提供1GB空间。
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献并生成统一报告快照。
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器与协作者实时共享屏幕。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，10人以下团队免费使用。
* [slack.com](https://slack.com/) — 无限用户免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务商的状态页面。
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个面板、无限用户和1GB存储。
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
* [StreamBackdrops](https://streambackdrops.com) — 视频会议高清虚拟背景库。提供Zoom、Teams和Google Meet专业背景，无需注册，个人免费使用。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点通信，无需插件/注册/付费。
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持带泳道看板和完整Scrum流程，含时间追踪功能。免费支持5用户+3项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析与智能每日站会优化开发流程，含完整的远程团队休假管理功能。5人以下小组免费。
* [Tefter](https://tefter.io) - 书签应用，深度集成Slack。开源团队免费使用。
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板等多端加密协作工具，开发者无需登录即可端到端加密协作。
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具。
* [Huly](https://huly.io/) - 一体化项目管理平台（Linear/Jira/Slack/Notion/Motion替代品），无限用户，每工作区10GB存储+10GB音视频流量。
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用全功能项目管理应用。
* [twist.com](https://twist.com) — 异步友好型团队通信应用，保持对话条理化。提供免费无限版，合格团队可享折扣。
* [tldraw.com](https://tldraw.com) — 免费开源白板绘图工具，含智能箭头/吸附/便签/SVG导出功能。支持多人协作编辑，另有官方免费VS Code扩展。
* [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签/任务管理器，基于可定制云桌面支持文件夹协作。
* [typetalk.com](https://www.typetalk.com/) — 通过网页/移动端即时消息与团队交流创意。
* [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR。全员免费，非营利组织额外赠送Nano套餐。
* [whereby.com](https://whereby.com/) — 一键视频通话（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，用Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区。
* [vadoo.tv](https://vadoo.tv/) — 极简视频营销托管平台。单键上传视频，支持录制/管理/分享等功能。免费版每月10视频/1GB存储/10GB带宽。
* [userforge.com](https://userforge.com/) - 互联人物画像/用户故事/情境地图工具，保持设计与开发同步。免费支持3个角色+2名协作者。
* [wistia.com](https://wistia.com/) — 带观众分析/高清播放/营销工具的视频托管，免费版含25视频+品牌播放器。
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务。无限分享5GB内文件，不限分享对象数量。
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。超过5GB文件采用P2P直传。
* [zoom.us](https://zoom.us/) — 安全视频/网络会议服务，免费版限时40分钟。
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版含10,000条可搜索历史+5GB文件存储，另有可自托管开源版本。
* [robocorp.com](https://robocorp.com) - 自动化运维开源技术栈。免费试用云功能并实现简单自动化：每月240分钟机器人运行+10次助手执行+100MB存储。
* [Fleep.io](https://fleep.io/) — Slack替代品，小团队免费版含完整消息历史/无限私聊/1个群聊/1GB存储。
* [Chanty.com](https://chanty.com/) — 另一款Slack替代品，永久免费版支持10人小团队：无限公私对话/可搜索历史/无限1对1语音/无限语音消息/10个集成/20GB团队存储。
* [ruttl.com](https://ruttl.com/) — 全能数字反馈工具，用于网站/PDF/图片审查。
* [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台，免费版含无限频道/剧本/看板/用户+10GB存储等功能。
* [Webvizio](https://webvizio.com) — 网站反馈/审查/Bug报告工具，直接在网页应用/图片/PDF/设计文件上协同开发任务。
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码审查协作平台。
* [Webex](https://www.webex.com/) — 视频会议服务，免费版限40分钟/100人会议。
* [RingCentral](https://www.ringcentral.com/) — 视频会议服务，免费版限50分钟/100人会议。
* [GitBook](https://www.gitbook.com/) — 技术知识沉淀平台，支持产品文档/内部知识库/API文档等。个人开发者免费版。
* [transfernow](https://www.transfernow.net/) — 最简单/快速/安全的文件传输界面。无需订阅即可发送照片/视频等大文件。

  * [Revolt.chat](https://revolt.chat/) — 一个尊重用户隐私的开源Discord替代品。它免费提供Discord的大部分专有功能。Revolt是一款集安全、快速于一体的全能应用，且完全免费。所有功能均可免费使用。与主流聊天应用不同，它还支持（官方及非官方）插件。
  * [腾讯实时音视频](https://trtc.io/) — 提供群组音视频通话解决方案，首年赠送10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等特性。
  * [SiteDots](https://sitedots.com/) - 直接在网站项目上收集反馈，无需模拟、画布或变通方案。免费版功能完整可用。

  * [Cushion](https://cushion.so/) - 专为高效协作的小型分布式团队设计的Slack替代方案，支持异步沟通。免费版包含30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal站点托管服务。开发者免费套餐可用，同时提供免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。含一个免费社区空间，支持5名用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统，内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月带宽和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) — 小型项目免费套餐。基于GraphQL的CMS，基础版每月10万次API调用。
* [Directus](https://directus.io) — 开源无头CMS。完全免费的平台，支持本地或云端管理资产与数据库内容，无功能限制。
* [FrontAid](https://frontaid.io/) — 将JSON内容直接存储于Git仓库的无头CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) — 内容即服务平台，开发者计划含2名用户、无限项目（每个项目2个环境）、500条内容、2种语言及API支持。
* [Prismic](https://www.prismic.io/) — 无头CMS。社区计划含无限API调用、文档、自定义类型和资源，适合个人项目。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) — 结构化内容平台，免费套餐含无限项目、3名非管理员用户、2个数据集及50万次API调用。
* [sensenet](https://sensenet.com) — 企业级无头CMS，开发者计划支持3名用户、500条内容、25+5种内容类型及完整REST API功能。
* [TinaCMS](https://tina.io/) — 开源Git支持的无头CMS，免费基础版支持2名用户，兼容Markdown/MDX/JSON。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) — 快速灵活的框架，可对接任意CMS/API/数据库构建无头网站，提升流量与转化率。
* [Hygraph](https://hygraph.com/) — GraphQL优先的无头CMS，提供小型项目免费套餐。
* [Squidex](https://squidex.io/) — 基于事件溯源的开源无头CMS，含免费套餐。
* [InstaWP](https://instawp.com/) — 秒建WordPress站点，免费套餐含5个活跃站点、500MB空间，48小时后过期。
* [Storyblok](https://www.storyblok.com) — 开发者与营销人员适用的无头CMS，社区版含2500个资源、多语言支持及250GB/月流量。
* [WPJack](https://wpjack.com) — 5分钟部署WordPress至任意云端，免费套餐含1台服务器、2个站点及无限定时任务。
* [Solo](https://soloist.ai) — Mozilla推出的AI建站工具，免费提供自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的零代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的API和路由，支持深度集成。免费方案包含3个项目、5张数据表和1个Google插件。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody提供多种大语言模型选择（包括本地推理），支持各类IDE环境，兼容所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（使用Starcoder 16b模型）。
* [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费方案包含3个切面功能。
* [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限行内补全功能。
* [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中提取的智能洞察，帮助开发者更快打造优质软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，新用户初始获得1200积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，提供免费单用户账户及100MB存储空间的1个代码库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有与私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目与组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目与1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公有仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时、50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发人员代码交互模式的技术债务优先级可视化工具，免费用于开源项目
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪。通过精准一致指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能、可访问性与安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI的代码缺陷/安全漏洞/性能及API问题检测工具，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源项目与30人以下团队私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源项目免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库与SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任意Go语言包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源项目免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交代码质量评论，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构，支持框架迁移/带修复的代码分析/大规模代码转换，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器与中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub拉取请求与提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 多语言源代码自动化分析（含Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等），开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — 含代码验证与多设备类型的SEO工具集
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站检查项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段版的Google Keep。提供代码片段管理、发现与分享功能，包含强大的代码截图工具（预设模板+链接功能）

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到您的开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布到应用商店，实现更快、更高效的发布周期。免费版每构建最多30分钟构建时间，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费。
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持在Kubernetes和Lambda环境上自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，10分钟构建时间和2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，提供五个免费项目和一个并发运行（每月120次执行）。
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5k任务分钟。测试分析免费开发者层包括每月10万次测试执行，开源项目有更多免费包含项。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和十个数据库实例以下免费。
* [CircleCI](https://circleci.com/) — 全面的免费计划，包含GitHub、GitLab和BitBucket仓库托管CI/CD服务的所有功能。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级CI/CD功能。每月最多6000分钟执行时间免费，无限制协作者，私有项目30个并行作业，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费。
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费。
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，一个环境，共享服务器，无限制公共仓库。
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费。
* [codeship.com](https://codeship.com/) — 每月100次私有构建，五个私有项目，开源项目无限制。
* [deploybot.com](https://www.deploybot.com/) — 1个仓库十次部署，开源项目免费。
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日十次部署（每月30构建分钟）。
* [drone](https://cloud.drone.io/) - Drone云使开发者能够在一个地方运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线。
* [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建一个VM，并通过唯一URL使您的应用可用，无限制公共和私有仓库，VM大小最多2 GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库。
* [Mergify](https://mergify.com) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费。
* [Make](https://www.make.com/en) — 工作流自动化工具，让您通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层100 Mb，1000次操作，15分钟最小间隔。
* [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月免费3,000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent的持续资源合规、SAML 2.0的SSO，以及公共工作池访问：每月最多200分钟。
* [microtica.com](https://microtica.com/) - 初创环境，提供现成的基础设施组件，免费在AWS上部署应用，并支持生产工作负载。免费层包括1个环境（在您的AWS账户上）、2个Kubernetes服务、每月100构建分钟和20次月度部署。
* [Nx Cloud](https://nx.dev/ci) - Nx云通过远程缓存、跨机器任务分发甚至自动化分割您的端到端测试运行等功能加速您的单仓库在CI上的速度。免费计划最多30个贡献者，包含慷慨的150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3,000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具如Terraform、OpenTofu和Terragrunt的编排和管理平台。最多2个用户免费，包括所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，通过拉取请求驱动的工作流、自托管运行器的项目隔离，以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费，单用户免费版每周有有限的检查点。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接通过浏览器测试您的Android和iOS应用。免费版每月包含两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分价格监控API和应用。基于监控即代码工作流和Playwright。开发者享有慷慨的免费层。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50+ SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否针对给定域启用CORS并识别差距。获取可操作见解。
* [cypress.io](https://www.cypress.io/) - 对浏览器中运行的任何内容进行快速、简单且可靠的测试。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在引发面向客户的问题前发现弱点。Gremlin Free支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费计划支持最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过在任何CI提供商上优化测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费计划支持最多10分钟测试文件，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费每月模拟最多50个并发用户持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
* [octomind.dev](https://www.octomind.dev/) - 使用AI辅助测试用例生成自动生成、运行和维护Playwright UI测试
* [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费计划每日10次测试，每周5次实验，每月最大15GB数据摄入。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费层包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费版限iOS和Android各10次测试，但包含付费计划的大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费层最多10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制测试唯一URL向开发者展示如何复现错误。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费计划包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求。支持转发至本地服务器或历史记录回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量且享受五年免费维护期。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络与服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取智能建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的更快捷方式。目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全与合规审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可对代码、文件、目录或容器进行公证
* [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用中的数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 用于数据编解码分析的简易网页工具，无需复杂工具或编程语言。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及组织策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项
* [DJ Checkup](https://djcheckup.com) — 自动化Django站点安全检测工具（基于Pony Checkup项目）
* [Doppler](https://doppler.com/) — 支持同步到多云的通用密钥管理器，免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享.env文件。免费支持3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动检测和修复代码中的敏感信息，扫描350+种密钥类型。25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — 网页应用/服务器/网络漏洞扫描服务，每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境的全流程管理。5名开发者免费
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
* [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 快速检测OpenAPI/Swagger接口安全性的免注册工具
* [pixee.ai](https://pixee.ai) - 免费GitHub安全机器人，自动提交PR修复Java代码漏洞（即将支持其他语言）
* [pyup.io](https://pyup.io) — Python依赖项安全监控与自动更新。1个私有项目免费，开源项目不限量
* [qualys.com](https://www.qualys.com/community-edition) — 网页应用漏洞扫描及OWASP风险评估
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告服务
* [seclookup.com](https://www.seclookup.com/) - 威胁情报API，可丰富SIEM中的域名威胁指标，提供5万次免费查询[点此获取](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 开源依赖项漏洞检测与修复。私有项目每月限200次扫描
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案，含应用和防火墙CLI工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目不限次SCA扫描，在发布前检测并修复安全威胁
* [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化扫描应用漏洞，单个应用支持不限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站安全检测/网页防火墙(WAF)，免费版用户可获取邮件通知
* [TestTLS.com](https://testtls.com) - SSL/TLS服务安全配置测试工具，不限于HTTPS协议
* [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，免费支持3个用户
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版每周可执行XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理，免费版每月100万次加解密
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全解决方案，250用户以下应用免费
* [Vulert](https://vulert.com) - 持续监控开源依赖项漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个GitHub公开仓库、代码片段、议题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 全能SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供的细粒度授权服务。免费额度包含1000名月活跃用户和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名月活跃用户和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管的SSO服务。免费计划包含25,000名月活跃用户、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用添加无密码登录、OTP、2FA和SSO功能。包含完整前端。免费额度5000名月活跃用户。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商。集成Facebook、Google、Twitter等。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份。可替代Google Authenticator。免费额度100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权与访问控制，免费额度100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供预构建的登录/注册/用户资料等UI组件。免费额度10,000名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费额度100名用户和一个领域。
* [Corbado](https://www.corbado.com/) - 为新旧应用添加优先使用通行密钥的认证。无限月活跃用户免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK方式。免费额度7,500名活跃用户/月，50个租户（含最多5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站或应用的双因素认证(2FA)。免费额度10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费额度7,500名月活跃用户。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现双因素认证(2FA)，免费额度10名用户，支持VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动或任何应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。免费额度100名月活跃用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费额度包含3个公司应用和5个个人应用，用户数不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，无限团队成员，200名日活跃用户和25,000次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展微服务，具有实时更新和无代码策略UI。免费额度1000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费领域包含1000名用户和10个SSO连接，使用增强版Keycloak容器（含[组织](https://phasetwo.io/product/organizations/)扩展功能）。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费计划包含无限月活跃用户、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证和防欺诈API/SDK的一体化平台。免费额度10,000名月活跃用户，无限组织，5个SSO或SCIM连接，1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 不让人头疼的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，或使用SaaS版（10,000名免费月活跃用户）。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速上线的同时保持对用户体验的控制。免费额度5000名月活跃用户。
* [Warrant](https://warrant.dev/) - 为企业级应用提供的托管授权与访问控制服务。免费额度100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度25,000次认证请求，包含所有安全功能（OTP、无密码登录、策略等功能无付费墙）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可向任意规模企业销售产品。免费额度200名用户和10,000封事务邮件（带"由PropelAuth驱动"水印）。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份（包含认证与授权）。免费额度5,000名月活跃用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，额度100万名月活跃用户。支持邮箱+密码、社交登录、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的首选平台，确保移动应用正常运行。免费计划包含：一个应用、分析功能、无限版本与安装、以及反馈收集。
* [Loadly](https://loadly.io) - iOS 和 Android 测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用部署到设备。免费计划包含：应用上传、密码保护链接、1天有效期、十次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发 iOS 和 Android 应用。免费计划包含：无限制上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 分发移动应用进行测试。免费计划包含：一个应用项目、三个应用版本、500 MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包含：五个应用、每月50次下载、最大文件大小100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，免费保护无限量设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。提供单台服务器的免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数。
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署。
* [courier.com](https://www.courier.com/) - 统一推送API（支持应用内消息、邮件、聊天、短信等渠道），含模板管理等功能。免费套餐包含每月10,000条消息。
* [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件/推送/SMS/产品导览/横幅等）。每月最多1,000名活跃用户免费。
* [engagespot.co](https://engagespot.co/) - 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理。永久免费连接100台设备（无需信用卡）。
* [knock.app](https://knock.app) - 开发者通知基础设施。单次API调用支持应用内/邮件/SMS/Slack/推送等多渠道发送。免费套餐含每月10,000条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
* [Novu.co](https://novu.co) - 开源通知基础设施。统一管理邮件/SMS/站内信/应用内推送等渠道。免费套餐含每月30,000条通知（保留90天）。
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持100个同时连接和每日200,000条消息。
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持20个同时连接和每日100,000个事件。
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务。全球多区域（AWS/GCP/Azure）。永久免费套餐含4KB消息大小、50个活跃连接和每月5GB数据。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务。每月100万次事务（单次事务可含多条消息）。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC的视频通信API（支持SFU/MCU），含实时数据注入、视频布局、录制等功能。开发者免费套餐含每月1,000分钟会议时长。
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送数量无限制。
* [httpSMS](https://httpsms.com) - 通过Android手机收发短信的网关服务。每月免费200条短信。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级部署的可扩展安全MQTT代理。永久免费套餐含每月100万会话分钟（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API/Webhook集成，免费套餐支持每日50条消息（限1设备和1应用）。
* [SuprSend](https://www.suprsend.com/) - API优先的通知基础设施，支持事务性/定时/互动通知的多渠道统一发送。免费套餐含每月10,000条通知，支持摘要/批量/多租户等高级功能。
* [SMSGate](https://sms-gate.app) - 基于Android™设备的云路由短信网关。完全免费的云服务（建议每日超过10,000条时通知以保障服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费方案包含50GB存储，15天存储保留期和7天搜索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB，保留7天
* [log.dog](https://log.dog/) — LogDog是远程调试/日志记录SDK（iOS和Android），带Web界面。实时捕获所有日志、请求和事件，并可拦截。每月免费100MB日志
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天
* [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多5个项目
* [openobserve.ai](https://openobserve.ai/) — 每月免费200GB数据摄入，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限量，无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费且无限制
* [Lecto](https://lecto.ai/) - 机器翻译API，含免费层级（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成。
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键和无限项目）。
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费，免费层最多10,000条字符串源，无限自托管本地部署。
* [Free PO editor](https://pofile.net/free-po-editor) — 人人免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI，用于Web和移动本地化。自带LLM，或每月通过Lingo.dev管理的本地化引擎免费使用10,000字。

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 24小时指标免费，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js
* [appneta.com](https://www.appneta.com/) — 免费提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的任务控制中心。小流量使用免费（64MB日志）。
* [assertible.com](https://assertible.com) — 自动化API测试和监控。团队和个人免费计划。
* [Better Stack](https://betterstack.com/better-uptime) - 在一个产品中提供正常运行时间监控、事件管理、值班调度/警报和状态页面。免费计划包括十个监控器，检查频率为3分钟，并提供状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器、无限用户、无限仪表板、无限警报规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/合成监控和深度API监控。免费计划包括一个用户和10,000次API及网络/1,500次浏览器检查运行。
* [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控。免费：无限按需扫描、无限用户、无限存储账户。订阅：自动化扫描、API访问等。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查找URL或网站的核心Web指标历史记录。
* [cronitor.io](https://cronitor.io/) - 针对cron作业、网站、API等的性能洞察和正常运行时间监控。免费层提供五个监控器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — cron作业监控。一个免费监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。电子邮件、Slack警报。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告，帮助解密云基础设施成本。每月在Google Cloud Platform上花费不超过5,000美元免费。
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者的即时性能洞察。免费提供24小时数据保留
* [fivenines.io](https://fivenines.io/) — 实时仪表板和警报的Linux服务器监控 — 永久免费监控最多5台服务器，60秒间隔。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，将指标和日志与Grafana集成。免费：3个用户、十个仪表板、100个警报、Prometheus和Graphite中的指标存储（10,000个系列，14天保留）、Loki中的日志存储（50 GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控您的cron作业和后台任务。最多20个检查免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 20个监控器和2个通知渠道（Slack和Discord）永久免费。
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可获得完整的实时监控仪表板，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，无限订阅和无限团队。
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用程序和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站最多100页免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 免费负载测试工具，有限制
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台提供对您的应用和堆栈的完整可见性，以便您可以大规模监控和诊断问题。他们为开发者社区提供了一个永久免费的计划，允许最多1M日志事件的日志监控，以及最多2台主机的基础设施监控和APM。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控，提供美观的状态页面。永久免费计划提供HTTPS、关键词、SSL和响应时间监控，适用于10个网站或API端点，并提供2个仪表板/状态页面。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源工具，用于收集实时指标。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台旨在帮助工程师创建更完美的软件。从单体应用到无服务器，您可以检测一切，然后分析、排查和优化整个软件堆栈。免费层提供每月100GB的免费数据摄入、一个免费全访问用户和无限免费主要用户。
* [nixstats.com](https://nixstats.com) - 一台服务器免费。电子邮件通知、公共状态页面、60秒间隔等。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的正常运行时间监控，以及cron作业和计划任务的监控。还提供状态页面。前五个检查，间隔3分钟，免费。免费层通过Slack、Discord和电子邮件发送警报。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国的防火长城屏蔽。通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息，识别DNS污染。
* [opsgenie.com](https://www.opsgenie.com/) — 强大的警报和值班管理，用于运营始终在线的服务。最多5个用户免费。
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括警报、强大的可视化功能和基本报告。最多100个传感器免费。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变化，最多6个监控器，每日检查免费。
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班）
* [pageradar.io](https://pageradar.io/) — 监控网站的核心Web指标、SEO变化和正常运行时间。免费计划包括5个URL、每日核心Web指标监控、10个HTML/SEO变化监控器、167个国家/地区的联盟链接监控和电子邮件警报。
* [pagertree.com](https://pagertree.com/) - 简单的警报和值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控，最多100,000个事件免费，适用于无限项目和无限状态页面。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检查无限URL并通过Discord、Slack或电子邮件获取停机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 高级状态页面平台，带监控。免费层包括一个可自定义的公共状态页面，带SSL子域名。开源项目和非营利组织免费提供专业计划。
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月的历史正常运行时间/日志、无限状态页面和自定义域名包含！无限时间和无限电子邮件警报免费。无需信用卡。

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万个自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标与日志），无需复杂配置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL证书监控，每类5个免费监测项
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 2个免费监测项
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行状态监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，助力实践SRE理念。永久免费版支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费10项基础统计，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试次数（含功能限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器运行时间、DNS及域名监控。免费监控10台服务器、10个运行时间项和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费版含3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 提供20个运行时间监测器（5分钟间隔）及可定制状态页（含商用许可）。通过邮件和Telegram实时无限通知，无需信用卡即可使用
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 5个网站免费监控（60秒间隔），含公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的事件管理、告警、值班及响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 稳定运行监控平台，支持Cron任务、关键词、网站、端口、Ping等监测类型。25个免费监测项（3分钟间隔），通过电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控20项免费，Linux/Windows服务器监控5项免费，状态页1项免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费。
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志和运行时间监控。开源项目可免费使用小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且易于自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简单开源错误追踪。兼容开源Sentry SDK。免费1,000次事件/月，或自托管无限使用。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费100台。
* [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5,000次错误，无限用户，30天保留期。
* [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用。
* [Axiom](https://axiom.co/) — 存储最多0.5 TB日志，保留30天。包含与Vercel等平台的集成，支持高级数据查询和邮件/Discord通知。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关。
* [Jam](https://jam.dev) - 开发者友好的一键错误报告。免费计划无限次提交。
* [Whitespace](https://whitespace.dev) – 浏览器内一键错误报告。个人使用免费计划无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序功能，并提供UI组件库快速构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。另提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)  
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间  
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，可让用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000月活用户，不限指令数量  
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索次数，60天数据分析  
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间  

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量专业简历模板的免费平台，支持克隆、完整编辑和下载，经过ATS优化
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内快速掌握最新生成式AI工具和技术
* [LabEx](https://labex.io) - 通过交互式实验和真实项目培养Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等全方位开发领域的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 麻省理工学院2500多门课程材料的在线出版物，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础与高级HTML/CSS、JavaScript和SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费课程，专注计算机科学、工程和数据科学
* [Django教程](https://django-tutorial.dev) - 首个Django框架学习指南，为用户文章提供免费dofollow反向链接
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click和Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言开源教育平台，配备人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 邮件列表服务。最多100个订阅者免费
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似bitly的联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500个订阅者和每月10000封邮件免费
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器；只是一个邮件客户端，可以直接从客户端发送邮件而不暴露凭据。免费层每月200次请求，2个邮件模板，请求最大50KB，有限的联系人历史记录
* [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址会更新。完全免费，没有任何服务费用
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检查是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮件生成器。支持10个域名，可以创建无限地址（包含广告），但除此之外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限数量的域名邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD时需要付费，因为这些域名容易产生垃圾邮件）
* [Imitate Email](https://imitate.email) - 用于测试邮件功能的沙箱邮件服务器，适用于构建/QA和CI/CD。免费账户每天永久15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 一个域名的免费邮件转发。接收和发送来自你域名的邮件
* [Inboxes App](https://inboxesapp.com) — 每天创建最多3个临时邮箱，完成后可以通过方便的Chrome扩展删除。非常适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源并可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面提供服务
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封邮件免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500个订阅者和每月1000封邮件免费
* [Maildroppa](https://maildroppa.com) - 最多100个订阅者和无限邮件以及自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000个订阅者和12000封邮件免费
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费的公共邮件系统，可以使用任何收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每天200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 免费API用于临时邮件测试，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API、SMTP，每月3500封事务性和营销邮件免费。邮件沙箱 - 用于开发的假SMTP服务器，免费套餐包含1个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者的免费临时邮箱。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到你的服务器）
* [pepipost.com](https://pepipost.com) — 第一个月30000封邮件免费，之后每天前100封邮件免费
* [Plunk](https://useplunk.com) - 每月3000封邮件免费
* [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC每周摘要
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务提供商，内置端到端加密。免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠的邮件投递API。免费层（每月10000封邮件）。异步发送。使用多个SMTP服务器。黑名单、日志、跟踪、Webhook等
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100个邮箱，以及其他免费API如DEA检测器、DNS查询、SPF检测器等
* [Resend](https://resend.com) - 面向开发者的事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500个订阅者
* [Sendpulse](https://sendpulse.com) — 每月500个订阅者和15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费邮件列表服务。开始收费时再付费

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封免费事务性邮件
* [temp-mail.io](https://temp-mail.io) — 免费临时邮箱服务，支持同时使用多个邮箱地址和邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱服务，支持邮件转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮件服务商，现提供包含免费方案的多项服务：
   - [邮件](https://zoho.com/mail) 5用户免费。每人5GB空间，25MB附件限制，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机许可
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储空间。包含Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组/自定义应用/看板/手册和10个集成
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议和10名参与者的网络研讨会
   - [Vault](https://zoho.com/vault) — 个人版密码管理工具
   - [Showtime](https://zoho.com/showtime) — 支持最多5人参与的远程培训会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，支持无限页面/zip备份/RSS订阅等
   - [Subscriptions](https://zoho.com/subscriptions) — 免费管理20个客户/订阅，存储最近40条订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品计费管理，支持3个页面和50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个坐席+私有知识库+邮件工单
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，支持无限用户
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约安排
* [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API。每月5000封邮件，无限域名，含免费邮箱验证/黑名单监控等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为核心的功能开关服务，支持无限团队成员数量，提供卓越的技术支持且价格合理。免费方案包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨网页、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，不限功能开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，不限功能开关和A/B测试数量。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试。免费支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展的多区域功能开关管理平台。免费方案包含10个开关、2个环境且不限请求次数。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费方案中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析的一站式平台。其慷慨的免费方案提供无限席位、开关、实验和动态配置，每月支持100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试。支持代码化配置和全类型TypeScript SDK，深度集成Next.js和React等框架。提供丰厚免费额度与低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，分为免费版、共享版、试用版或公共领域版本。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 提供可用于商业用途的免费字体。精心挑选的字体库并以易用格式呈现。
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速轻松地在网站上安装多种免费字体。
* [FontGet](https://www.fontget.com/) - 提供多种可下载字体，并通过标签进行清晰分类。
* [Fontshare](https://www.fontshare.com/) - 免费字体服务，不断增长的专业级字体库，100%免费用于个人和商业用途。
* [Befonts](https://befonts.com/) - 提供多款独特字体，适用于个人或商业用途。
* [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体及其使用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和付费商业字体（限个人使用），支持输入文本快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体家族的服务。
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhook、Zapier集成、重定向、AJAX或POST等功能。免费版包含无限表单，每月20次提交，若展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾邮件拦截和GDPR合规数据处理。基础使用免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费开始，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets、Slack、ActiveCampaign、Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每表单每月限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过UI转发提交至邮件、Slack或Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版无限表单和提交，含预制模板、反垃圾及100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，适合静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单和调查工具，50+专家设计模板。免费账户限1个活跃调查，100次回复/调查，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调查与产品分析工具。永久免费版每月500活跃用户，无限回复和事件，多集成、导出及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义重定向与响应页，Telegram & Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 统一收集反馈并发送跟进调查。AI自动分析提取洞察。免费版含邮件、网站、产品内或移动端调查，AI调查创建器，每月25次回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 免费无服务器代码集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验与表单构建器。免费版5表单，每表单最多3步骤，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计表单。免费版每表单限10字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。支持Webhook通知。免费版签署文件加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态与JAMStack网站的联系表单，无需后端代码。免费版无限表单与域名，每月250次提交。
* [WebAsk](https://webask.io) - 调查与表单构建器。免费版3调查/账户，每月100次回复，每调查10元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特表单。无限表单与功能，免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版收集100次回复，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 移动端应用内调查。用Qualli AI设计问题。免费版支持500MAU，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版限25次反馈提交。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率调查收集反馈。免费版含1活跃调查，每调查25次回复，可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过策略即代码构建的防护机制，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200多种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索，可同时搜索所有应用。搜索助手可让您使用您的信息回答问题。免费计划提供无限统一搜索和每天5次协同搜索查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理功能。此外，专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM生成开放遥测标准追踪，有助于可观测性，并与任何可观测性客户端兼容。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师与非技术团队之间的无缝协作，以微调并实现生成式AI产品的生产化。免费计划包括所有平台功能，每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，适用于Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大型语言模型（LLM）在几分钟内提供定制的商业智能解决方案。永久免费计划提供一个工作区，包含五个数据源连接，供一名用户使用，且分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，这些模型虽免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具，用于代码生成、深度研究和图像创建。
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — 一款AI驱动的音频增强SaaS工具，可去除噪音和回声，同时保留自然的语音清晰度。完全免费：无限次一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的CDN服务。cdnjs是一个由Cloudflare提供支持的开源免费CDN，被全球超过11%的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate是一个极速可靠的GraphQL API CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您将其添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费提供DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 一种简单的方式来启动和管理完整的Varnish缓存解决方案。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不失败的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。即时处理图片并全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，以及免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心PoP，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划包括最多5个用户和每天1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用，但存在30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket）的认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析功能，适合内容密集型和企业电商网站。免费版每月限5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储+1GB网络流量/月，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架，含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由用户承担（可使用AWS信用额度及免费层）。
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费实例（永不休眠）+ PostgreSQL免费层（2连接/1万行/无备份）。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持快速成长所需功能。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台，基于任意触发器开发工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器/云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费初级账户含1个your-username.pythonanywhere.com应用、512MB私有文件存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用（每日2,500次/月5万次），付费版支持自定义域名。
* [Koyeb](https://www.koyeb.com) - 全球部署的无服务器开发者平台，支持Docker容器/Web应用/API的Git部署、自动扩缩容及内置服务网格。免费实例限法兰克福/华盛顿区域，含512MB内存+2GB存储+0.1CPU，免费托管PostgreSQL数据库可选三地。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管平台，Meteor应用PaaS服务含免费MongoDB共享主机和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库，支持从版本控制/Docker仓库扩展容器。免费版含2服务+2定时任务+1数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全能平台，兼具NoCode敏捷性与编程语言能力。[免费层含1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，内置CI/CD/GitHub集成与自动HTTPS。[免费计划](https://wundergraph.com/pricing)支持3项目/1GB出口流量/300分钟构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费3个服务+每月5美元信用额度。
* [mogenius](https://mogenius.com) - 简化Kubernetes服务构建部署，免费层支持本地Kubernetes连接，创建类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB带宽/10个定时任务/月（限非商业/学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者PaaS平台，免费层含5个组件+每月100美元信用额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动和Web后端即服务，免费提供1GB文件存储、每月50,000次推送通知以及1,000个数据对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，支持在线编辑器或本地工具免费构建和托管。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，用于构建和部署企业级数字创新。包含平台、SDK及组件库的完整个人沙箱访问权限。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1,000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管您的数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录、500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集编辑器与基础设施于一体的托管语言。Beta期间可用，正式版后将提供慷慨的免费层级。
* [Firebase](https://firebase.com) — Firebase助您构建并运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、应用索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI。集成Firebase。免费计划包含UI生成器和免费模板的完整访问权限。
* [getstream.io](https://getstream.io/) — 数小时内构建可扩展的应用内聊天、消息、视频音频及信息流功能，无需数周开发。
* [hasura.io](https://hasura.io/) — Hasura扩展您现有数据库，提供即时GraphQL API，可安全用于Web、移动及数据集成场景。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，不限联系人且支持自动预热功能。
* [paraio.com](https://paraio.com) — 具备灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 免费推送通知，每月100万条消息上限，支持100台日活跃设备。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2,000订阅者以内不限通知次数。
* [pusher.com](https://pusher.com/beams) — 2,000月活跃用户内免费不限量推送通知。统一API支持iOS和Android设备。
* [quickblox.com](https://quickblox.com/) — 即时消息、视频语音通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API、模板等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 用拖拽工具快速构建应用。点击自定义数据模型。通过Apex代码深入开发。强大API实现万物集成。企业级安全防护。点击或前沿Web框架定制UI。免费开发者计划开放完整Lightning平台。
* [simperium.com](https://simperium.com/) — 即时自动同步多平台数据，不限结构化数据传输与存储，每月最多2,500用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，用于构建后端。免费计划提供认证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 含认证、配额、监控和分析的API管理。免费云服务。
* [zapier.com](https://zapier.com/) — 连接常用应用自动化任务。每15分钟5次Zap触发，每月100次任务。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务、15分钟更新间隔、5个活跃自动化流程、Webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端。1GB数据存储、256MB实例、每日3,000次API请求和10,000次推送免费。（API与Parse平台高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账号注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持15+种数据库和任意API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具有拖放界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理10倍速构建内部工具、自定义用户旅程、数字体验、自动化、管理面板和运营应用。
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问、AI编码助手和每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5GB存储和1GB内存。免费层还包含Studio和Studio Pro IDE。
* [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS（支持本地或云端部署），免费"个人环境"提供无限代码和最多1GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。Retool高度可定制——任何能用JavaScript和API实现的功能均可构建。免费层支持每月最多5个用户、无限应用和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。使用AI生成、可视化编辑并通过代码扩展。集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖放式应用构建器开发应用。
* [UI Bakery](https://uibakery.io) — 低代码平台，加速定制Web应用开发。支持通过拖放构建UI，并可通过JavaScript、Python和SQL深度定制。提供云服务和自托管方案，最多5个用户免费。
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费版支持1个用户每月100万次工作流活动（[德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费网络托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，可通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装程序。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施麻烦并加速设置。
* [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建Web和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注于Web3前端的去中心化网络托管平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform Starter层级免费构建和部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到Web。仅限静态站点。永久免费。每个Google/Microsoft账户一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并公开共享（实时）。通过其美观的用户界面、API和/或CLI按您喜欢的方式工作。
* [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持以及许多其他免费主机不提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳控制面板和50多个免费应用的一键安装。即时设置。无强制广告。
* [HelioHost](https://heliohost.org) — 非营利性免费网络托管，带Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP邮件，无限带宽，免费子域名，1000 MB免费存储空间，可升级。
* [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，自定义域名带SSL，100 GB月带宽，260+ Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 带SFTP访问的网络托管，支持文件上传下载和PHP。
* [Neocities](https://neocities.org) — 静态托管，1 GB免费存储空间和200 GB带宽。
* [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，每月免费300积分（相当于30 GB带宽）。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包含多种形式的网络托管（静态托管、基于容器的托管、WordPress及其他托管应用一键安装）。一个免费网络托管（静态或容器化）和一个免费数据库，100 GB带宽和300构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费。无自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，免费SSL、全球CDN、私有网络、Git自动部署，以及完全免费的Web服务、数据库和静态网页计划。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布。无限站点，支持自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50页，50 MB存储空间，仅限170+预定义块中的主要块，无自定义字体、无网站图标和无自定义域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，免费SSL、全球CDN，每次`git push`生成唯一预览URL。完美支持Next.js和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器 — 无限网站，70+块，五个模板，自定义CSS、网站图标、SEO和表单。无自定义域名。
* [Qoddi](https://qoddi.com) — 类似Heroku的PaaS服务，开发者为中心，全包功能。静态资源、测试环境和开发者应用免费层级。
* [FreeFlarum](https://freeflarum.com/) — 社区支持的免费Flarum托管，最多250用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，两周容器TTL，每个项目500 MB RAM，SFTP — 1G磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易用的云平台，付费服务中提供三个静态站点的免费托管。
* [Serv00.com](https://serv00.com/) — 3 GB免费网络托管，每日备份（7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
* [Sevalla](https://sevalla.com/) — 简化应用、数据库和静态网站部署和管理的托管平台 — 1GB站点限制，100GB免费带宽，600免费构建分钟，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API管理](https://dynv6.com/docs/apis)的免费动态DNS，可配置多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户共享域名的[免费子域名](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无域名数量限制的免费DNS服务。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪/广告的免费动态DNS，域名数量无限制。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认。
* [sslip.io](https://sslip.io/) - 免费DNS服务，查询含IP地址的主机名时直接返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - 自动备份与DNS变更监控，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名
* [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储服务。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点，1 CPU，1GB内存，PostgreSQL和MySQL各1GB存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) - 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行、每月1,000次API请求的免费服务。
* [Astra](https://www.datastax.com/products/datastax-astra/) - 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)。
* [codehooks.io](https://codehooks.io/) - 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，支持2名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2 CPU、2 GiB内存、8 GiB存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) - 无服务器Redis，免费层每月50万次命令、最大256MB数据库大小和20个并发连接。
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，含1节点和8GB存储，专为开发者打造，支持从物联网到AI的下一代应用开发。
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费层提供512 MB存储。
* [redsmin.com](https://www.redsmin.com/) - Redis在线实时监控与管理服务，免费监控1个Redis实例。
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例。
* [MemCachier](https://www.memcachier.com/) - 托管Memcache服务，免费层支持25MB、1个代理服务器和基础分析。
* [scalingo.com](https://scalingo.com/) - 主要提供PaaS，但包含128MB至192MB的MySQL、PostgreSQL或MongoDB免费层。
* [SeaTable](https://seatable.io/) - Seafile团队开发的灵活电子表格式数据库，无限表格、2,000行、1个月版本历史，最多25名团队成员。
* [skyvia.com](https://skyvia.com/) - 云数据平台提供免费层，测试期间所有方案完全免费。
* [StackBy](https://stackby.com/) - 结合电子表格灵活性、数据库功能及与常用业务应用内置集成的工具。免费方案含无限用户、10个堆栈和每个堆栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) - TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费入门方案含9GB总存储、最多500个数据库、3个位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) - 时序数据库，免费层支持每5分钟3MB写入、30MB读取和10,000基数序列。
* [restdb.io](https://restdb.io/) - 快速简单的NoSQL云数据库服务，提供模式、关系、自动REST API（类MongoDB查询）及高效多用户管理界面。免费方案支持3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 免费层每月5,000万RUs和10 GiB存储（价值15美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) - 托管原生图数据库/分析平台，支持Cypher查询语言和REST API。限制图大小（5万节点、17.5万关系）。
* [Neon](https://neon.tech/) - 托管PostgreSQL，0.5 GB总存储、1项目、10分支、无限数据库、始终可用主分支（5分钟后自动暂停），非主分支计算每月20小时活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) - 托管原生图数据库，提供GraphQL API。限制每天1 MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时间限制，10GB存储加每天1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) - 托管原生图数据库/分析平台，提供类SQL图查询语言和REST API。免费实例含2 vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) - TerminusDB的托管免费服务，TerminusDB是用Prolog和Rust编写的文档和图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - filess.io平台可免费创建两个数据库，每个数据库最多10 MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
* [Xata Lite](https://lite.xata.io/) - Xata Lite是无服务器数据库，内置强大搜索和分析功能。单一API，多类型安全客户端库，优化开发流程。免费方案提供10分支和15GB存储，无暂停或冷启动。
* [8base.com](https://www.8base.com/) - 8base是基于MySQL和GraphQL的全栈低代码开发平台，为JavaScript开发者打造的无服务器后端即服务。快速构建Web应用，免费层含2,500行、500存储、1Gb/h无服务器计算和5客户端应用用户。
* [Nile](https://www.thenile.dev/) - B2B应用的Postgres平台。无限数据库、始终可用无停机、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入。

**[⬆️ 返回顶部](#目录)**

## 隧道/WebRTC/WebSocket路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一项托管VPN服务，可安全地将类似LAN的网络扩展到分布式团队，免费方案支持最多5人加入无限网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费的Socket即服务平台，部署Web Socket服务器代码时提供wss:// URL，并可监控其性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露为公共URL。提供免费托管版本和[开源代码](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装或注册。提供免费子域名，无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台计算机，形成类似LAN的网络。不限节点数（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中心，可将事件转换并路由到其他第三方服务。每月10万次事件免费。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100台设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部（如localhost）目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控Webhook。每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 不限STUN使用量 + 每月500MB TURN带宽，限速，单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源自托管虚拟以太网即服务。免费方案支持25个客户端的端到端加密网络。支持桌面/移动/NA客户端；通过Web界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理，可将本地服务器暴露到互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布为公共自定义URL，并通过访问控制保障安全。单个集群免费支持5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB空间（用户不限）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版支持最多15用户/图表和25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5个用户，提供Jira集成、无限视频会议和团队会话
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费版和云存储付费版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪应用，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版提供5人团队无限仓库/项目/文档，每月500分钟CI/CD时长和1GB存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10个用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目/无限用户/1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版支持无限项目/用户/文件存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月提供3个公共看板和每个看板1次调研
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专用描述转图表工具，支持通过关键词创建非正式UML图表
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可对比两个GraphQL模式差异的工具，会标记破坏性/非破坏性/危险变更
* [Hygger](https://hygger.io) — 项目管理平台，免费版支持无限用户/项目/看板和100MB存储
* [Instabug](https://instabug.com) — 移动应用Bug报告与反馈SDK，免费版支持1个应用和1个成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多视角基础设施交互图表工具，免费版支持无限私有图表（最多3个查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10个用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费基础版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板/2个用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1个用户无限看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的产品开发协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（含Chrome扩展），完全免费
* [Kumu.io](https://kumu.io/) — 关系图谱工具，免费版支持无限公开项目，学生可享私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版支持无限成员/10MB文件/250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10用户/20自定义字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版支持3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目（成员不限）
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版提供100MB存储/5个用户，支持无限工作区/会议/工时表
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3个用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费支持无限公开项目和2个私有项目（3个活跃用户）
* [plan.io](https://plan.io/) — 含代码仓库的项目管理平台，免费版支持2用户/10客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版支持无限成员/5MB文件/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克工具（无需注册），支持无限用户/团队/投票

  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告和反馈工具。免费计划每月每个应用可提交10个错误报告。
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户。
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程和会议记录应用，10人以下团队免费。
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费。
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费计划包含无限制的任务、迭代和工作区，且无用户数量限制。
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，支持从看板到Scrum等多种运营流程。免费版不限用户数，最多1,000个数据实体 {[详情](https://www.targetprocess.com/pricing/)}。
* [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划包含1个工作区（无限制任务和项目）、1GB文件存储、1周项目历史记录以及每次视频会议最多5名参与者。
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成。
* [Teaminal](https://www.teaminal.com) - 远程团队的站会、回顾和迭代计划工具。15名用户以下免费。
* [teamwork.com](https://teamwork.com/) — 项目管理和团队聊天。5名用户和2个项目免费。提供高级付费计划。
* [teleretro.com](https://www.teleretro.com/) — 包含破冰活动、GIF和表情的简洁趣味回顾工具。免费计划支持3次回顾会议且成员数量不限。
* [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具。SaaS模式依赖自愿贡献，用户可选择支付0元且无功能限制 {[详情](https://tenzu.net/pricing/)}。
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和Beta测试平台。私人用途免费。
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版每个图表最多4层结构。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费计划包含：5个活跃项目、每个项目5名用户、5MB文件上传、3个筛选器和1周活动记录。
* [trello.com](https://trello.com/) — 看板式项目管理。无限个人看板，10个团队看板。
* [Tweek](https://tweek.so/) — 简洁的周计划日历与任务管理工具。
* [ubertesters.com](https://ubertesters.com/) — 测试平台、集成与众测服务，免费支持2个项目5名成员。
* [Wikifactory](https://wikifactory.com/) — 提供项目管理、版本控制和问题跟踪的产品设计服务。免费计划包含无限项目与协作者，3GB存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪。最多3名用户免费，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 为开源项目和私有项目提供免费托管版YouTrack（InCloud）（3名用户免费）。包含时间跟踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — 唯一内置于GitHub的项目管理方案。公共仓库、开源组织和非营利机构免费。
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具。最多5名成员免费，支持5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间管理追踪应用（免费计划提供无限制记录、项目、客户、标签和报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限制任务、里程碑和时间线）。
* [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售和客户支持打造的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员。
* [Pulse.red](https://pulse.red) — 免费极简主义项目时间追踪与工时表应用。
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的效率工具，支持结构化检查清单、模板和任务内审批流程。小团队可使用免费计划。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件托管平台](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化和CDN服务。提供多种图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费月套餐含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大编辑、存储和交付服务。免费套餐每月25积分（1积分=1000次图片转换或1GB存储或1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图片、音频、视频等文件。
* [GoFile.io](https://gofile.io/) - 可通过网页界面和API使用的免费文件共享存储平台。无文件大小、带宽和下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图片视频托管、处理和流媒体服务。免费套餐每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的机器人，在不损失质量的前提下减小文件体积。对开源项目免费。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务。支持拖拽上传（单图32MB限制），生成直链、BBCode和HTML缩略图。登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无水印社交媒体封面图生成API。
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费支持1MB以下文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图片代码优化/CDN）。免费支持每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 云存储文件加密共享/复制/移动一站式服务。基础版支持无限传输（单文件250MB上限）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取有限免费版和开源计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适合个人项目/黑客松/移动应用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具。提供友好界面和API，免费1GB存储空间。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持5人以下团队试用基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的批量二维码生成器。每批最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表/图形/二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS，累计处理超70亿张图片仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月500次免费压缩。
* [transloadit.com](https://transloadit.com/) — 处理视频/音频/图片/文档的上传编码。开源项目/慈善机构/学生通过GitHub学生包免费。商业应用可免费试用2GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN/媒体处理API和前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理全流程工具包。开发者可免费使用文件上传API/UI、图片CDN/源服务、自适应交付和智能压缩。免费版含3000次上传/3GB流量/3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费20GB空间支持三台设备，推荐奖励5GB（账户90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – 全球易用的图像CDN服务，60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[点击此处](https://imageengine.io/developer-program/)申请免费开发者账户。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI工具，可将PDF、图像处理为JSON、CSV、EXCEL等结构化数据。每月免费赠送30次使用额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡、代金券和促销活动的定制二维码。支持自定义样式、颜色和Logo添加。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪机制，完全免费且不收集用户数据。
* [Doradrop](https://doradrop.com) — 无限存储空间且零广告的文件共享平台，无需登录即可通过安全链接即时分享文件。

* [Ente](https://ente.io/) - 端到端加密的云存储服务，支持照片、视频和2FA密钥存储。可自托管，永久免费版提供10GB空间（免费用户数据仅保留单副本）。

**[⬆️ 返回顶部](#目录)**

## 设计与UI

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富主页模板，可快速使用模板代码包，还支持通过编辑器快速构建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源SVG图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能文件转换器，含视频和GIF
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线调色板生成与灵感获取工具
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费CMYK转Pantone色彩匹配工具
* [Branition](https://branition.com/colors) - 精选品牌专用配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费CSS渐变生成工具，支持RGB/HEX格式
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版支持无限文件查看和2名编辑
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者和2名编辑
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库
* [Gradientos](https://www.gradientos.app) - 快速梯度配色工具
* [Icon Horse](https://icon.horse) - 通过简单API获取网站高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库，支持React/Flutter/Vue等框架
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐资源库，免费版有分辨率限制
* [landen.co](https://www.landen.co) - 无代码建站工具，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，通过URL参数指定尺寸
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画资源平台，提供多平台工具支持
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量思维导图工具
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 设计协作交付工具，免费版支持3用户5项目
* [mockupmark.com](https://mockupmark.com/create/free) - 40款免费服装模型生成工具
* [Modeldraw.com](https://modeldraw.com) - 支持UML/流程图/思维导图的实时协作平台
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（波浪/斑点/图案等）
* [movingpencils.com](https://movingpencils.com) - 浏览器端免费矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具，支持SVG
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供关键词搜索API
* [photopea.com](https://www.photopea.com) - 免费在线PS替代工具，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) - 专业级免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的响应式页面构建工具
* [Pravatar](https://pravatar.cc/) - 随机头像生成服务，支持直接外链
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器端隐私安全的图片格式转换工具
* [Proto.io](https://www.proto.io) - 无代码交互原型工具，免费版包含1用户1项目
* [resizeappicon.com](https://resizeappicon.com/) - 应用图标尺寸调整工具
* [Rive](https://rive.app) - 多平台动画创作工具，个人用户永久免费
* [storyset.com](https://storyset.com/) - 免费定制插画生成工具

  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 在不同组件和布局中预览主题变化
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可免费复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — 精美的shadcn/ui主题，实时自定义颜色、排版等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成首字母头像，URL可直接热链到网页/应用中，支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可完全免费使用且无需署名
* [unsplash.com](https://unsplash.com/) - 商业与非商业用途的免费图库（随心所欲许可证）
* [vectr.com](https://vectr.com/) — 网页+桌面端免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的流程引导
* [Webflow](https://webflow.com) - 带动画功能的可视化网站构建器，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化网站构建器，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发工具
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，含持续扩充的免费模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式网页构建器，前5页免费
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页构建器，免费一个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG资源库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - SVG形状/背景/图案生成器
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的设计工具集合
* [TeleportHQ](https://teleporthq.io/) - 低代码前端平台，免费3个项目且支持代码导出
* [vector.express](https://vector.express) — 多格式矢量文件快速转换器
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含开发者专用转换器）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出多种格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 可定制的免费SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌logo API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费商用Bootstrap/Angular/React/Vue UI套件
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) - 减少类名书写的Tailwind组件库
* [Scrollbar.app](https://scrollbar.app) - 网页滚动条设计工具
* [css.glass](https://css.glass/) - 玻璃拟态CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) - Tailwind CSS渐变色合集
* [iconify.design](https://icon-sets.iconify.design/) - 100+图标库统一搜索平台
* [NextUI](https://nextui.org/) - 免费现代化React/Next.js UI库
* [Glyphs](https://glyphs.fyi/) - 完全开源的可编辑图标系统
* [ShadcnUI](https://ui.shadcn.com/) - 可复制粘贴的优美组件库
* [HyperUI](https://www.hyperui.dev/) - 开源Tailwind组件库
* [日历图标生成器](https://calendariconsgenerator.app/) - 一键生成全年独特图标
* [图片背景模糊器](https://imagebgblurer.com/) - 为Notion等工具生成图片模糊背景框
* [Webstudio](https://webstudio.is/) - Webflow开源替代品
* [Nappy](https://nappy.co/) - 黑人棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) - Tailwind资源合集
* [Tailcolors](https://tailcolors.com/) - Tailwind CSS v4调色板
* [Excalidraw](https://excalidraw.com/) - 免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) - 内置素材的免费图形设计工具
* [Flows](https://flows.sh/) - 产品引导平台（免费250月活用户）
* [SVG转换器](https://svgconverter.online/) - 支持调色板定制的免费图片转SVG工具

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台。可按UI/UX项目类别筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自真实应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和网络上的免费UI套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动截图] 探索非洲和世界领先公司的移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
  * [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动截图] 精心挑选的应用商店设计截图集合。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。


**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供开发者免费计划，每月30,000次请求
* [carto.com](https://carto.com/) — 从您的数据和公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供地图、地理空间数据存储、分析、地理编码、路径规划等API和SDK，支持网页、桌面和移动端。每月免费提供200万次基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5,000次行驶时间计算及5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析并共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及地图可视化SDK。免费矢量瓦片每周更新并提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索功能和反向地理编码能力
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端SDK）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap及其他开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航及其他地理空间API。非商业用途和测试每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及瓦片托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享网站，支持在300多个PHP版本中运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快应用构建工具的开源IDE，支持Windows/Mac/Linux/ChromeOS系统
* [AndroidIDE](https://m.androidide.com/) — 开源移动端IDE，可在Android设备上开发基于Gradle的应用程序
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境、工具平台和应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台知名可扩展编辑器，免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)并支持升级高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，采用Oracle技术并提供简易GUI界面
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制
* [cacher.io](https://www.cacher.io) - 支持100+编程语言的代码片段管理器，具备标签分类功能
* [Code::Blocks](https://codeblocks.org) — 免费开源的Fortran/C/C++ IDE，支持Windows/macOS/Linux系统
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持代码编写（代码块/自动补全/单元测试）、代码理解/修复/检索，提供VS Code/JetBrains/在线版本
* [codiga.io](https://codiga.io/) — 支持在IDE内直接搜索/定义/复用代码片段的编程助手，个人和小型团队免费
* [codesnip.com.br](https://codesnip.com.br) — 带分类/搜索/标签功能的简易代码片段管理器，完全免费无限制
* [cocalc.com](https://cocalc.com/) — （原SageMathCloud）云端协作计算平台，内置Ubuntu系统及数学/科学/数据科学软件栈（Python/LaTeX/Jupyter/SageMath/scikit-learn等）
* [code.cs50.io](https://code.cs50.io/) - 哈佛CS50课程定制的基于GitHub Codespaces的网页版VS Code
* [codepen.io](https://codepen.io/) — 前端代码游乐场
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular/Preact等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 独立开发可视化Web组件，支持故事化展示/测试并发布至npm
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言Web IDE，开源社区驱动，红帽提供[在线实例](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据的服务
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4/Grok/Deepseek/Gemini等模型的AI结对编程工具，免费版含基础AI模型访问权限
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux系统和IDE，免费版每日5次VM使用权限
* [ide.goorm.io](https://ide.goorm.io) 全功能云端IDE，支持多语言/Linux容器/端口转发/实时协作/Git集成（免费版含1GB内存/10GB存储/5个容器槽位）
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费版REST API每日200次调用额度
* [jetbrains.com](https://jetbrains.com/products.html) — 知名开发工具套件（含IntelliJ IDEA/PyCharm等），学生/教师/开源团队可申请免费授权
* [jsbin.com](https://jsbin.com) — 支持HTML/CSS/JavaScript/Markdown/Jade/Sass的前端游乐场
* [jsfiddle.net](https://jsfiddle.net/) — 带协作功能的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API服务，支持本地部署
* [Lazarus](https://www.lazarus-ide.org/) — 跨平台Delphi兼容快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 基于AI的免费云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级模拟JSON数据生成微服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 支持生成CSV/JSON/SQL/Excel格式的测试数据，可模拟后端API
* [Mocklets](https://mocklets.com) - HTTP协议模拟API工具，终身免费版支持基础功能
* [Paiza](https://paiza.cloud/en/) — 免配置的浏览器Web开发环境，免费版提供24小时存活/每日4小时运行的服务器（2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 支持Sass/Less/Stylus/Pug/Haml等语言的实时编译与浏览器热重载工具
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程平台，提供免费编程课程
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发环境，支持主流NodeJS框架，快捷入口：[node.new](https://node.new)
* [Sublime Text](https://www.sublimetext.com/) - 广受欢迎的多功能文本编辑器，适合编程与文本编辑任务

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面、Web和云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）。
* [VSCodium](https://vscodium.com/) — 社区驱动的、无遥测/跟踪的、自由许可的Microsoft编辑器VSCode二进制发行版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化您的编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) — Wave是一款开源、跨平台的终端工具，支持无缝工作流。可内联渲染任何内容，保存会话和历史记录，基于开放Web标准，支持MacOS和Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，包含故事和测试功能。
* [PHPSandbox](https://phpsandbox.io/) — 在线PHP开发环境。
* [WebDB](https://webdb.app) — 免费高效的数据库IDE，功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等。
* [Zed](https://zed.dev/) — Zed是一款高性能多人协作代码编辑器，由Atom和Tree-sitter的开发者打造。
* [OneCompiler](https://onecompiler.com/) — 免费在线编译器，支持70多种语言，包括Java、Python、C++、JavaScript等。

**[⬆️ 返回顶部](#目录)**

## 数据分析/事件/统计

  * [Userbird](https://userbird.com) - 提供热力图、会话记录和收入追踪的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 可追踪GitHub仓库14天以上流量历史的精美仪表盘。免费版支持监控单个仓库流量
* [Dwh.dev](https://dwh.dev) - Snowflake数据云观测方案（个人使用免费）
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库中的客户数据同步至CRM/营销/客服工具。免费版支持1个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布流程。免费版包含2名工作区成员和1小时数据可观测性回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费版支持1万移动应用用户及深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台。免费版支持从数据仓库同步10个字段至60+SaaS平台
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持1个网站3000次浏览分析
* [Databox](https://databox.com) - 整合多平台数据的商业洞察工具。免费版包含3用户/仪表盘/数据源，1100万历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件量（支持2个应用）
* [GoatCounter](https://www.goatcounter.com/) - 开源Web分析平台（非商业用途免费），含6个月数据保留和10万月页面浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私保护型GA替代方案，免费版支持100万月页面浏览（无需信用卡）
* [Expensify](https://www.expensify.com/) - 费用报告工具（免费个人审批流程）
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具（免费3000事件/月）
* [heap.io](https://heap.io) - 自动记录iOS/Web应用用户行为（免费1万月会话量）
* [Hotjar](https://hotjar.com) - 网站分析与热力图工具。免费版含2000日页面浏览/100日快照/3个可存储365天的热力图
* [Keen](https://keen.io/) - 自定义数据分析平台（免费1000事件/月）
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务（完全免费）
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析
* [Mixpanel](https://mixpanel.com/) - 10万月追踪用户（不限数据历史记录和席位）
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析工具（免费50万API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试方案（免费版支持1网站+1iOS+1Android应用）
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具（免费版含100万用户许可）
* [Row Zero](https://rowzero.io) - 高速互联电子表格（永久免费3个工作簿）
* [sematext.com](https://sematext.com/cloud/) - 免费5万动作/月（1天数据保留）
* [Similar Web](https://similarweb.com) - 网站与移动应用分析（免费5个指标结果）
* [StatCounter](https://statcounter.com/) - 网站访问分析（免费500最近访客）
* [Statsig](https://statsig.com) - 分析+功能标记+A/B测试全平台（免费100万计量事件/月）
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者沙盒许可证（最新预发布版）
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型测试工具（免费1用户不限测试）
* [woopra.com](https://www.woopra.com/) - 用户分析平台（免费50万动作+90天数据保留）
* [counter.dev](https://counter.dev) - 简约隐私友好型网站分析（捐赠制免费）
* [PostHog](https://posthog.com) - 全功能产品分析套件（免费100万追踪事件/月）
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（开源项目可申请个人订阅）
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为记录工具
* [Beampipe.io](https://beampipe.io) - 简约隐私型网站分析（免费5域名+1万月页面浏览）
* [Aptabase](https://aptabase.com) - 开源隐私友好型应用分析（免费2万事件/月）
* [Trackingplan](https://www.trackingplan.com/) - 数字分析问题自动检测工具
* [LogSpot](https://logspot.io) - 统一Web与产品分析平台（免费1万事件/月）
* [Umami](https://umami.is/) - 简约快速的隐私优先型GA替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私分析工具（免费3域名+600次会话回放）
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具（免费1万事件/月+产品日志+周度洞察）

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站与产品分析工具。免费方案包含每月3,000次事件记录。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无需Cookie且操作直观度提升10倍。免费方案支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：1,000次页面浏览/天，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，提供三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：1,050次页面浏览/月，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（1,500次会话/月），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API/SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元可免费使用。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价（购买力平价），助您拓展全球业务并触达新市场。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，为iOS、Android、React Native、Flutter、Unity或网页应用集成移动应用内订阅功能。每月收入低于1万美元可免费使用。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率数据。免费开发者计划支持每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率数据，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率与货币转换服务，免费计划每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费计划每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单纠纷。免费微计划每月支持500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费使用需注明数据来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现，支持连接Stripe、Chargebee等平台。免费层级每月3万次事件处理。
* [Nami ML](https://www.namiml.com/) - iOS和Android应用内购买与订阅全功能平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购买与订阅托管后端服务（支持iOS/Android）。每月追踪收入低于2,500美元可免费使用。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间。
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场。
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册服务

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant 虚拟机的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的想法、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，可帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于GitHub issues构建的轻量级评论组件。可将GitHub issues用于博客评论、维基页面等场景！
* [Disqus](https://disqus.com/) - Disqus是网络社区平台，被全球数十万网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，支持"一个管理员管理多个域名，并完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等多种平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕捉时间点和视窗尺寸控制。
* [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据，包括标准化元标签、精美链接预览、爬虫功能和截图服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。基于Google Cloud构建，支持高并发。每月免费100张截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300张免费截图。支持任意URL截图，快速免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 可高度定制化的网站快照服务。每月免费100张快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100张免费截图（支持png/gif/jpg格式），包含长页面滚动截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染服务。免费版每日500页额度，自2017年持续提供免费层。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名情报API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**  

（注：根据中文阅读习惯调整了部分语序，如将"Free Tier offers..."译为"免费版每日..."；保留所有技术术语如API/Cloud/png等原样；链接格式与原文完全一致）

## Flutter相关/无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可用 Flutter 构建 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是完全托管式的移动应用持续集成/持续交付平台。您可以通过基于图形界面的 CI/CD 工具进行构建、测试和部署。免费套餐每月提供 500 分钟免费时长，并配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于通过 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个能运行Linux和Windows 2000的超快x86虚拟机
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅适用于小型团队且仅限SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理工具。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理解决方案。免费版提供单次扫描和单个横幅。
* [Ketch](https://www.ketch.com/) - 同意管理及隐私框架工具。免费版在访问量限制下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射。免费版包含核心同意管理功能，并向通过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 杂项服务

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网设备管理平台，免费开发者计划包含5台设备、免费云存储和数据存储，同时提供移动应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等IDE的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或周期性Webhook调度服务，免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费
* [datelist.io](https://datelist.io) - 在线预约系统，每月免费5次预订（含1个日历）
* [Domain Forward](https://domain-forward.com/) - 简易URL/域名转发工具，免费支持5个域名和20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞检测平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加无忧Webhook支持（含队列/退避重试/日志），免费版每日100次投递/14天留存/3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/IP的ASN/ISP/地理位置等托管信息，集成多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线Base64数据转换工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram等接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看图片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板并通过API动态生成，每月免费300份文档
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言数据模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成器
* [ray.so](https://ray.so/) - 生成精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向服务，免费版含10个源和10万次月访问
* [Renamer.ai](https://renamer.ai) — 支持OCR/元数据提取的AI文件重命名工具，免费版每月15个文件（含桌面端批量重命名功能）
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具，支持GET/POST等方法和Token认证，可保存请求记录
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/里程/车门控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉化工具（从代码片段到技术演示），免费版支持3个同时编辑的Snap和5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed分析服务（免费版功能有限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具，免费版每份问卷限10个问题和100个回复
* [Tiledesk](https://tiledesk.com) - 创建全渠道聊天机器人（从网站实时聊天到WhatsApp），免费版不限机器人数量
* [UUID生成器](https://newuuid.com/) - 即时生成UUIDv1/v4/v7/GUID/CUID/NanoID等标识符
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅（前3个订阅免费）
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者编码/解码/数据处理工具集
* [Volume Shader BM](https://volumeshaderbm.org) — 基于WebGL的免费GPU基准测试工具，帮助开发者跨浏览器/设备测试着色器性能

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，包含精灵图、瓦片集和角色包等
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏艺术家提供的免费资源
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费的2D、3D、音频和GUI资源
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，包括音乐、音效、精灵图和GIF
* [CraftPix](https://craftpix.net) — 免费/付费的2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可自定义SVG/PNG图标
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供大量教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 2D/3D资源与音频的市场平台，也可用于作品集展示
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建自定义资源
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型与PBR材质资源
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的2D/3D/音频/UI资源
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（多分辨率）、模型、HDRIs和笔刷，提供Blender等软件的免费插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的协作式免费音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)整理的自由开源软件及SaaS列表
* [github.com — 开发者开源资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心
* [GitHub 教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Markdown 工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境和工具资源，用于开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据算法评估）
* [PHPhub](https://phphub.net/) — PHP工具集合，包含格式化器、验证器、沙盒环境、正则测试器等
* [Pyrexp](https://pythonium.net/regex) — 免费网页版正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，另提供免费电子书资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器及数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — DigitalOcean/AWS/LightSail/Hetzner/Exoscale备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题和UI套件，加速应用开发
* [Web.Dev测评工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/测试数据生成等，拥有友好界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门方案，支持创建无限导入器及100MB文件上传
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集（含水印生成/录屏/编解码/加解密/代码格式化等），完全免费不上传云端
* [IT工具集](https://it-tools.tech/) - 开发者及IT从业者实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费高效代码工具（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）
* [regex101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）
* [Glob模式测试器](https://globster.xyz/) — 可视化设计测试glob模式的学习平台
* [SimpleRestore](https://simplerestore.io) - 无忧MySQL备份恢复工具，无需代码即可远程恢复备份
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（含实时转录/YouTube视频字幕生成），适合短视频处理
* [QRCode最佳实践](https://qrcode.best/) - 13种模板的隐私保护定制二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulse](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升网站排名，免费版支持手动发布1篇/月
* [PageTools](https://pagetools.co/) - 永久免费AI工具集（网站政策生成/社交媒体文案/网页快速创建）
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN结果可视化优化工具
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/容器/编程/DevOps/网络）
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具（10张/月）
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）

**[⬆️ 返回顶部](#目录)**