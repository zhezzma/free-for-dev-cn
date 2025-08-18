# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务以做出明智选择仍需耗费大量时间。

这里整理了一系列提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务资源。

本清单的范围限定于基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们虽喜爱所有免费服务，但仍需保持主题相关性。有时界限较为模糊，因此清单内容存在主观判断；若未采纳您的贡献建议，还请见谅。

这份清单汇集了1600多位人士提交的Pull Requests、评审意见、创意贡献及实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加新服务，或移除已变更/终止的服务项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意事项**：本清单仅适用于服务化(aaS)产品，不包含自托管软件。入选服务必须提供永久免费层级（而非仅限试用期）。若采用时间分段模式，免费层级至少需持续一年。同时我们会从安全角度评估免费层级——支持SSO认证的服务可以收录，但将TLS功能限制在付费层级的服务不予采纳。

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
  * [Flutter相关与无Mac构建IOS应用](#Flutter相关与无Mac构建IOS应用)
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
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至所有区域（不含中国和澳大利亚）的网络出口流量
    * Cloud Storage - 5GB存储空间，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB北美网络出口流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每天120构建分钟数
    * Cloud Source Repositories - 最多5个用户，50GB存储空间，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebook开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

* [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出口流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份存储（12个月）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟数（支持Linux、macOS和Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），免费层包含有限交易量
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 当[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据采集点，10亿个数据检索点
    * 带宽 - 每月10TB出口流量，x64架构VM限速50 Mbps，Arm架构VM限速500 Mbps * 核心数
    * 公网IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
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
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析功能，邮件转发
    * [零信任&SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，3个网络位置

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
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用程序所需的一切，而无需操心"服务器相关事务"
  * [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作功能
  * [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用。包含所有功能。每月可免费使用50次运行
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上实现自动化部署。免费版支持单个开发者（单用户）无限制部署静态站点、网络服务和环境。每月提供20次免费作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限公共和私有Git仓库，提供CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB空间和两个用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限公共和私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)构建。提供[Codeberg Pages](https://codeberg.page/)静态网站托管、[Codeberg's CI](https://docs.codeberg.org/ci/)持续集成、[Codeberg Translate](https://translate.codeberg.org/)翻译托管。包含软件包/容器托管、项目管理和问题追踪功能
* [GitGud](https://gitgud.io) — 无限公共和私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD
* [GitHub](https://github.com/) — 无限公共仓库和私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态网站托管、软件包/容器托管、项目管理和AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限公共和私有Git仓库。包含CI/CD、静态网站托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件托管平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发仓库和工具，包含专属Ionic仓库
* [NotABug](https://notabug.org) — 基于Git的自由软件代码协作平台，专为自由许可证项目设计
* [OSDN](https://osdn.net/) - 面向开源开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库托管
* [Pagure.io](https://pagure.io) — 基于Git的自由开源软件代码协作平台，专为FOSS许可证项目设计
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统，基于创新的补丁理论，解决git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 为个人、开源组织和非营利机构提供免费服务
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git和Subversion）包含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转化为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月最多50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和数据质量、性能漂移等问题根源分析。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3人）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每天50次免费请求，公共仪表盘，开放端点（任何拥有仪表盘链接的人均可查看提交和响应）。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
* [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 自定义人脸识别和检测的图像API，可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用API平台，完整访问包括文档转换、病毒扫描等在内的广泛API库，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，涵盖实验跟踪、模型生产管理、模型注册和完整数据溯源，从训练到生产全流程覆盖。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLMs的集成平台，整合200多个工具跨越代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API及Node.js、PHP、Python库。付费计划支持最大50GB文件。免费版限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，在应用间同步数据，可创建实时仪表盘和报告，转换和操作数值，收集和备份洞察。免费计划限1用户、1数据连接、1数据源和1数据目标，且需手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。自动解决验证码并防止被封锁。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织成一致定义并交付给每个应用。最快方式是使用Cube Cloud，其免费层每天限1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单免费的文件分享。数据访问后自毁。通过浏览器或命令行客户端上传和下载数据。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。Postman式界面在Airtable中运行API请求。预建数十个应用集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含10GB存储和每月120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），从网页提取数据到CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - 用Python构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可的精简数据库也免费。
* [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型，每个模型10个表。
* [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜SDK。免费计划支持最多10位月活跃用户（MAU）并跟踪4张面孔。

  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据用于构建新冠疫情相关实用应用
* [Doczilla](https://www.doczilla.app/) — SaaS API服务，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月可生成250份文档
* [Doppio](https://doppio.sh/) — 托管式API，采用顶尖渲染技术生成并私有存储PDF和截图。免费计划每月允许生成400份PDF和截图
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页和物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成带有实时文档和用户管理的完整REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20个积分
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月允许50次API调用并提供模板库访问权限
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。支持免费本地使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具，免费试用包含2个项目（每个项目10张表）
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费计划每月250页，用户不限且支持3个模板
* [file.coffee](https://file.coffee/) - 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API，免费计划每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) - 基于浏览器的免费工具，即时实现JSON数据格式化、验证、比较和压缩
* [FraudLabs Pro](https://www.fraudlabspro.com) — 订单交易信用卡支付欺诈检测REST API，根据订单输入参数识别所有潜在欺诈特征。免费Micro计划每月500笔交易
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置搜索服务，免费API每月500次查询
* [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP地理定位API，免费计划每日2,000次请求
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像，提供RESTful API和无代码集成。免费层每月50张图像和5个模板
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台，社区免费版支持最多5个项目
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)平台，帮助在线产品轻松提供webhooks功能。免费版每日100个事件且保留7天历史记录
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建工具
* [huggingface.co](https://huggingface.co) - 构建、训练和部署Pytorch/TensorFlow/JAX的NLP模型，免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告，14天免费试用包含50份单页报告，支持调色板和字体自定义
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI/Power Query）访问70多个(云)平台如Exact Online/Twinfield/ActiveCampaign/Visma，含数据复制交换功能。开发者与实施顾问免费计划，特定平台有数据量限制
* [ipaddress.sh](https://ipaddress.sh) — 以不同[格式](https://about.ipaddress.sh/)获取公网IP的简易服务
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费计划同一IP地址每分钟限45次请求
* [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费计划每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费计划每日1,000次请求限制
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，允许1,000次免费请求
* [IPLocate](https://www.iplocate.io) — IP地理定位API，免费每日1,000次请求。包含代理/VPN/主机检测、ASN数据、IP归属公司查询等功能，还提供CSV或GeoIP兼容MMDB格式的免费IP与国家/ASN对应数据库下载
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务，LITE数据库可免费下载。在服务器导入数据库后执行本地查询可获取城市、坐标和ISP信息
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP地理定位API，获取城市/坐标/ISP等数据。免费计划每月5万积分，另提供每月500次免费WHOIS和托管域名查询，可查看域名注册详情及特定IP托管域名。付费计划解锁更多功能
* [ipapi](https://ipapi.co/) - Kloudend公司推出的IP地址定位API，基于AWS构建的可靠服务，受财富500强企业信赖。免注册免费层每月3万次查询（每日1,000次）
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP地址API，具备顶级主机检测能力。免注册免费计划提供1,000次查询
* [IPinfo](https://ipinfo.io/) — 快速准确的IP地址数据API（免费每月5万次）。提供地理定位/公司/运营商/IP范围/域名/滥用联系人等详细API，所有付费API均可免费试用
* [IPQuery](https://ipquery.io) — 开发者无限制IP API，无速率限制或费用
* [IPTrace](https://iptrace.io) — 极简API为企业提供可靠IP地理定位数据，每月免费5万次查询
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频和社交媒体视频的编辑API
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址，免费层无需注册。通过CORS可直接在浏览器用客户端JS请求数据，适用于监控客户端与服务器IP变化的服务，请求次数不限
* [JSON Serve](https://jsonserve.com/) — 帮助开发者存储JSON对象并在应用中作为REST API使用的免费服务
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码、头部和响应体
* [JSONSwiss](https://www.jsonswiss.com/) - 功能强大的在线JSON查看器、编辑器和验证器。通过AI辅助修复、树状视图、表格视图、12+编程语言的代码生成等功能实现JSON数据的格式化/可视化/搜索/操作，支持JSON转CSV/XML/YAML/PROPERTIES等格式转换

  * [Kreya](https://kreya.app) — 免费gRPC图形界面客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC接口。
* [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型性能。免费提供最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并向客户发送通知。每月免费处理1,000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月可验证100次。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。"永久免费"层级每天允许100次API调用。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预报基于多种天气模型的机器学习组合以实现更高准确度。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取能力或截图服务。每天50次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的OCR软件和API优先平台，帮助开发者通过计算机视觉和机器学习识别关键信息，标准化文档处理层以实现工作流自动化。免费层级每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式演示区。免费支持1名编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的简易工具。适用于原型设计/测试/学习。每个免费账户可创建1个项目，每个项目2个资源。
* [Mockfly](https://www.mockfly.dev/) — 值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层级每天500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的模拟GraphQL和REST API的工具。简易REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 免费代理您的API，选择云端模拟端点并检查流量。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易web应用。[开源版本](https://github.com/julien-lafont/Mocky)同样可用。
* [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。前端开发、QA测试和DevOps团队的理想选择。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持代码生成和docker容器应用部署。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，检查多节点出口IP地址，了解您的IP在不同全球区域和服务中的呈现方式。适用于测试Control D等基于规则的DNS分流工具。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价格域名。每日免费查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 将图像和PDF文件解析为JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF和邮件提取数据。AI驱动。完整API访问权限。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者导向PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 通过API开发协作平台Postman简化工作流并更快创建更好API。永久免费使用Postman应用。Postman云功能在特定限制下也永久免费。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL接口设计与测试
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍易用性的AI网络爬取，接近零学习成本，节省现有工作流85%+时间，比人工研究快4倍且无妥协，包含所有研究任务的REST API端点。每月前1,000积分免费。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者通过趣味挑战（含解决方案！）和交互示例连接数千个API进行开发。
* [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg的REST接口，无需处理基础设施即可在线运行FFmpeg。免费层级包含月度处理配额和4个可用vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费端点接收HTTP请求。发送到该端点的所有HTTP请求及其负载和头信息将被记录，便于观察webhook和其他服务的调用情况。
* [reqres.in](https://reqres.in) - 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层级每月30积分。
* [ROBOHASH](https://robohash.org/) - 从任意文本生成独特酷炫图像的web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API用于爬取。无需担心限制、封锁或验证码即可匿名爬取。每月前100次成功爬取免费（含JavaScript渲染，联系支持可获取更多额度）。

  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将任何Google表格转换为RESTful API。提供免费方案，每张表格包含1,000行免费额度。
* [Shipyard](https://www.shipyardapp.com) — 面向云端的低代码数据编排平台。混合使用低代码模板和自定义代码（Python、Node.js、Bash、SQL）进行构建。开发者免费计划每月提供10小时运行时，单用户使用绰绰有余。
* [Siterelic](https://siterelic.com/) - Siterelic API可进行网页截图、网站审计、TLS扫描、DNS查询、TTFB测试等。免费方案每月100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月100次成功API调用。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供省时省钱的开发者工具。免费层包含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件即可通过API即时访问数据，加速应用开发。免费方案含2个API和每月2,500次调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化器与验证器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS平台。免费方案提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建50张图片。
* [Svix](https://www.svix.com/) -  Webhook即服务。每月免费发送50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，具备研究成果整理能力。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址所在国家、城市、区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API方案。覆盖全球的精准天气预报，含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。具备高级API日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，含实时天气、逐小时/每日预报和天气警报。通过AI模型整合多源气象数据提升预测精度。免费层每月10,000次API调用。
* [Webhook Store](https://www.openwebhook.io) - 存储第三方webhook并在本地调试的工具（类似ngrok）。开源且可自托管。提供免费个人域名*username*.github.webhook.store和公共域名*anything*.webhook.store。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API。每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费方案每月25,000 token额度（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转化为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页抓取API，定价透明。每月1,000次免费调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，获取全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与邮政编码验证服务。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持在边缘设计、构建和部署API。分钟级实现API密钥认证、速率限制、开发者文档和商业化。原生支持OpenAPI，可通过Web标准API和Typescript完全编程。免费方案含10个项目、不限量生产环境、每月100万请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位两个JSON数据结构间的不同之处。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式的制品仓库，包括Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS。包含软件包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费套餐每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT等构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单安全的集中式仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费套餐且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 提供1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费套餐支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目可享免费套餐。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费套餐提供10GB存储、10GB带宽、100个包和无限用户（云端版），或仅供个人使用的自托管版本。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人与团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的方式存储、共享和同步敏感数据
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、历史记录和集成，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 快速找到会议最佳时间。操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 会议连接与排期工具。免费版支持每位用户1个日历连接和无限会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密房间的聊天平台。具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队免费在线实时Scrum Poker工具，支持无限成员快速估算用户故事点数
* [Telegram](https://telegram.org/) — 为需要快速可靠通讯服务的用户设计。企业用户和小团队可享受大群组、用户名、桌面端应用和强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供所有基础工具，支持每工具自动保存一个条目、标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图、流程文档和团队协作，同时提供异步屏幕录制功能
* [Duckly](https://duckly.com/) — 实时团队交流协作平台。支持IDE配对编程、终端共享、语音视频及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月包含10,000分钟音视频使用时长
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费使用，提供2GB存储空间
* [flock.com](https://flock.com) — 高效的团队通讯工具。免费版支持无限消息、频道、用户、应用和集成
* [Gather](https://www.gather.town/) - 创新的线上会议方式。围绕可定制空间设计，使社区交流如现实般自然。免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制的互动空间，适用于团队会议和社交活动。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交和Pull Request活动的每日报告工具。含推送可视化、同伴认可系统和自定义提醒功能。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。公开和私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但专为Markdown设计。免费版"笔记"数量无限制，但[协作人数](https://hackmd.io/pricing)和模板功能受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的免费全能通讯平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助工具。免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 客户意见提交与投票平台，1个社区25名成员免费
* [Igloo](https://www.igloosoftware.com/) — 内部文档、博客、日历共享门户，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天和文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的会议体验
* [/meet for Slack](https://meetslack.com) - 在Slack任意频道、群组或私信中通过/meet指令直接发起Google会议，完全免费无限制
* [Livecycle](https://www.livecycle.io/) — 跨职能团队和开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约锁定会议室、开发环境等共享资源，免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈的工具
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享和通行密钥的密码管理器，支持网页、浏览器扩展、移动端和桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频通话与屏幕共享服务
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集聊天、内容和应用于一体的数字化中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown笔记协作应用，被描述为笔记记录、项目管理和任务管理的全能工作空间
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识协作维基。免费版包含所有核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 免费代码面试平台，内置视频聊天、绘图板和在线代码编辑器（支持浏览器端编译运行），一键创建远程面试房间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间表与追踪应用。免费版支持10人以下用户的时间追踪和报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub Pull Requests添加视觉评审功能，无需部署网站。免费版每月10个页面，总存储100MB
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，通过直观界面和有价值的数据统计帮助优化时间管理
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整历史记录
* [Raindrop.io](https://raindrop.io) - 跨平台私密书签工具（支持macOS/Windows/Android/iOS/Web），免费提供无限书签和协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成单一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器直接协作
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页，可追踪上游服务商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记。免费版支持3个面板、无限用户和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum实现，集成时间追踪功能。免费版支持5用户和3项目组合
* [Teamplify](https://teamplify.com) - 通过团队分析和智能站会优化开发流程，包含完整的远程团队休假管理功能。5人以下小组免费
* [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费
* [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录
* [TimeCamp](https://www.timecamp.com/) - 无限用户的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具
* [Huly](https://huly.io/) - 全能项目管理平台(Linear/Jira/Slack/Notion/Motion替代方案)，无限用户，每工作区10GB存储和10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用
* [twist.com](https://twist.com) — 异步友好的团队通讯应用，保持对话条理清晰。提供免费无限版，合格团队可享折扣
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，具备智能箭头、吸附、便利贴和SVG导出功能。支持多人协作编辑，另有官方VS Code扩展
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签页/任务管理器，支持文件夹协作的自定义在线桌面
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个pull request。所有人免费，非营利组织额外赠送Nano套餐
* [whereby.com](https://whereby.com/) — 一键式视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) — 简化的视频托管与营销平台，单次点击上传视频。免费版提供10个视频、1GB存储和10GB月流量
* [userforge.com](https://userforge.com/) - 互联在线角色/用户故事/情境地图工具，保持设计与开发同步。免费版支持3个角色和2名协作者
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频容量且使用Wistia品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务，可分享最多5GB文件给任意数量接收者
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时），大文件采用P2P传输
* [zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费版限时40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具，免费版含1万条可搜索历史消息和5GB存储，另有可自托管开源版本
* [robocorp.com](https://robocorp.com) - 开源自动化运维技术栈，免费体验云功能并实现简单自动化。每月240分钟机器人运行时长+10次助手执行+100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版含完整消息历史、无限私聊、1个群组对话和1GB存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，永久免费版支持10人团队，含无限公私对话/可搜索历史/无限语音通话/语音留言/10个集成/20GB团队存储
* [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，用于收集网站/PDF/图片的数字化反馈
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台，免费版含无限频道/剧本/看板/用户和10GB存储
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，直接在网页应用/图片/PDF/设计文件上开展开发协作
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费版支持100人50分钟会议
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库和API），个人开发者免费
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面，无需订阅即可发送照片视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密的简易粘贴网站

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年赠送每月10,000分钟免费时长
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴平台，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟、画布或变通方案，免费版功能完整

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。提供开发者免费套餐，同时可免费使用开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 及 API 工具包。开发者可享免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础版每月支持 10 万次 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS。完全免费的平台，用于本地或云端管理数字资产和数据库内容，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无使用限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者计划包含 2 个用户、无限项目（每个项目 2 个环境）、500 个内容项、2 种语言支持、交付/管理 API 及自定义元素功能。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面。社区计划包含单用户无限 API 调用、文档、自定义类型、资源和多语言支持。开放内容/开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。每个项目免费包含无限管理员用户、3 个普通用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划含 3 个用户、500 个内容项、3 种内置角色、30+ 内容类型、完整 REST API 支持、文档预览生成和 Office Online 编辑功能。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown、MDX 和 JSON。基础版免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，让使用任何 CMS/API/数据库构建网站重获乐趣。构建并部署能提升流量、转化率和收入的无头网站！
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL 优先的 API，助您从传统方案迁移至原生 GraphQL 无头 CMS，实现全渠道内容优先交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先，基于事件溯源（自动记录每次变更）的开源方案。
* [InstaWP](https://instawp.com/) - 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区（免费）版包含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持、2500 个资源管理器、图片优化服务、搜索查询、Webhook 及 250GB/月流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制，完全自主掌控。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限制的API和路由，实现广泛集成。免费方案包含3个项目、5张数据表和1个Google插件。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编码AI助手，利用AI技术并深度理解您的代码库，帮助您更快编写和理解代码。Cody为开发者提供多种LLM选择（包括本地推理），支持各类IDE环境，兼容所有主流编程语言，并提供免费方案。免费版每月提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动补全（使用Starcoder 16b）。
* [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计无缝转化为动态Flutter和React应用，优化您的工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
* [Fern](https://buildwithfern.com) - 编写API定义并生成TypeScript、Python、Java、Go等流行语言的SDK/客户端库。完整支持OpenAPI。免费版最多可为20个端点生成代码。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目免费使用，商业友好型免费版包含三个切面功能。
* [Supermaven](https://www.supermaven.com/) — Supermaven是适用于VSCode、JetBrains和Neovim的快速AI代码补全插件。免费版提供无限行内补全功能。
* [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞察，帮助开发者更快创建更优质的软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，初始赠送1200积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1个用户和100 MB存储空间的1个代码仓库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅限3分钟会话（Vista系统下1024x768分辨率测试MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码自动化审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [CodeBeat](https://codebeat.co) — 多语言支持的自动化代码审查平台，永久免费支持公有仓库（含Slack和邮件集成）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构也可免费使用
* [codecov.io](https://codecov.io/) — 代码覆盖率检测工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版支持无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版包含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者代码交互模式优先处理技术债务，可视化团队耦合度等组织因素，开源项目免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪工具，通过精准指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷/安全漏洞/性能及API问题，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript代码运行时错误高级静态分析，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 顶级数据库优化平台，自动获取数据库与SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任意[Go](https://golang.org/)包的代码覆盖率检测
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源项目免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化顶级静态代码分析器，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论服务，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构工具，支持框架迁移/带修复方案的代码分析/大规模代码转换，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公有或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言语义的GitHub PR和提交差异分析，公有仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — 含代码验证和多设备测试的SEO工具集
* [zoompf.com](https://zoompf.com/) — 网站性能优化与深度分析工具

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索您的项目名称是否可用
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，提供强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中，开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版包含每次构建最长30分钟、每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 数分钟内完成应用和基础设施的云部署。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层包含5个域名和2个用户的无限制应用与部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD平台，支持原生和混合应用。免费版包含每月200次构建（每次10分钟）和2个团队成员。开源项目可获得45分钟构建时长、+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费版包含5个项目和一个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时长。测试分析免费开发者层包含每月10万次测试执行，开源项目可获得更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps工具。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 完整免费方案，包含GitHub/GitLab/BitBucket仓库托管CI/CD服务的所有功能。支持多资源类型、Docker、Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级特性。每月6000分钟免费执行时长，无限协作者，私有项目30个并行任务，开源项目最高8万分钟构建时长。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费方案：1个构建、1个环境、共享服务器、无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时长
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
* [drone](https://cloud.drone.io/) - Drone Cloud支持开发者在单一平台运行跨架构（包括x86和Arm的32/64位）持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目CI服务。1个全栈预览环境（5GB内存+3核CPU）
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限公开/私有仓库，最高2GB VM规格
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.io) — GitHub工作流自动化与合并队列工具，公开GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并实现流程自动化。支持大量应用和主流API。公开GitHub仓库免费，免费层包含100MB存储、1000次操作和15分钟最小间隔。
* [Shipfox](https://shipfox.io/) - 以2倍速度运行GitHub Actions，每月3000分钟免费构建时长。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费方案功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续资源合规、SAML 2.0单点登录，公共工作池访问：每月200分钟
* [microtica.com](https://microtica.com/) - 提供预置基础设施组件的初创环境，免费在AWS上部署应用并支持生产负载。免费层包含1个环境（使用您的AWS账户）、2个Kubernetes服务、每月100分钟构建时长和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化E2E测试分割加速CI中的单体仓库。免费方案支持最多30位贡献者，包含15万点数的额度。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月提供3000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台。最多2个用户免费使用全部功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化方案，支持PR驱动的工作流、通过自托管运行器实现项目隔离，以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户每周有限检查点免费。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接测试您的Android和iOS应用。免费套餐包含每月30分钟的两个并发会话，无应用大小限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版完全免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能回归。所有公开项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用自动化测试工具。易学无需编码。可免费在本地电脑上运行无限次测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"监控即代码"工作流和Playwright。开发者享有慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50+ SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员免费工具，检查API是否针对给定域名启用CORS并识别差距。获取可操作见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器内测试。Cypress测试运行器始终免费开源无限制。Cypress仪表盘对开源项目最多5名用户免费。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全注入故障以发现系统弱点。免费版支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐含4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供适应不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - 面向开发者的功能测试工具包。记录API调用生成API端到端测试(KTests)和模拟/桩(KMocks)。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。10分钟测试文件免费套餐，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟50个并发用户60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供整体视觉回归测试。团队成员不限，开源完全免费，7,000快照/月。
* [octomind.dev](https://www.octomind.dev/) - AI辅助生成、运行和维护Playwright UI测试
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、样式指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，5,000快照/月。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用自动化测试工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费版限iOS和Android各10次测试，但包含付费版大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、录制含网络和控制台日志的会话。免费版最多创建10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源和改进建议，适用于任何技术栈的网站。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen的跨浏览器测试平台。UI-licious Snippets无需注册即可在Chrome上运行无限次测试（每次最多3分钟）。发现bug？可复制测试专属URL向开发展示重现步骤。
* [SSR (服务器端渲染)检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉对比服务器渲染版本与常规版本，检查任何URL的SSR状态。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
* [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表盘和用代码实现手动测试的框架。服务[对开源免费](https://github.com/marketplace/testspace-com)，每月450条结果限额。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成的工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目且提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止(EOL)等。免费版包含2个用户、10个代码仓库扫描、1个云账户、2个容器和1个域名扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API垃圾邮件过滤器。免费计划每个域名每天200次请求。
  * [atomist.com](https://atomist.com/) — 更快速便捷地自动化各类开发任务。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)。完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改证明的开源平台，用于公证代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生、开发者友好的安全平台，防止.NET和Java应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简单直观的Web应用，无需复杂工具或编程语言即可分析/解码/编码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表遵循最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java(Maven/Gradle)、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化安全检查工具，扫描Django站点的安全漏洞。基于Pony Checkup站点分支开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 快速安全地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，且永不丢失重要.env配置。最多支持3名团队成员免费使用。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测和修复，防止密钥泄露到源代码中。可扫描350+种密钥和敏感文件类型——25人以下团队或个人开发者免费使用。
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，支持跨团队和基础设施管理开发者密钥：从本地开发到生产环境第三方服务全覆盖。最多5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
  * [keychest.net](https://keychest.net) - SSL证书过期管理及购买服务，集成证书透明度(CT)数据库
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目数量不限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序和配置的安全监控，免费支持25个用户和30天历史记录
  * [openapi.security](https://openapi.security/) - 快速检查任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册。
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人，作为自动化产品安全工程师为Java代码库提交PR以解决漏洞。即将支持更多语言！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目数量不限。
  * [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供全面的域名信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 发现并修复开源依赖项的已知安全漏洞。开源项目无限次测试和修复，私有项目每月限200次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置的深度分析
  * [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测并修复安全威胁。通过简单高效的解决方案保护项目。
  * [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，发现并修复生产环境前的安全漏洞。单个应用支持无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描
  * [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒和服务器防火墙(WAF)。注册用户可获取免费层级的邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书、链等。不仅限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报平台：专为刚开始学习网络威胁情报的个人研究员、分析师和组织设计。最多3个用户免费。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加密解密及自动密钥管理。单个应用每月100万次加密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。250用户以下的应用免费。
  * [Vulert](https://vulert.com) - Vulert持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式GraphQL端点安全扫描。免费无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条GitHub公开仓库、代码片段、问题和评论中暴露的密钥

**[⬆️ 返回顶部](#目录)**  

（注：根据中文阅读习惯，"Back to Top"常译为"返回顶部"，同时保持Markdown链接格式不变。由于原文没有提供具体的目录锚点名称，此处假设原文的`#table-of-contents`对应中文常见的"#目录"）

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供细粒度授权服务。免费额度包含1000月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费支持1000 MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000 MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费支持5000 MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 跨设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000 MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个领域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证方案。无限MAU免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500活跃用户/月，50个租户(含5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)。免费支持10用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费提供7500 MAU起步套餐。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100 MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个企业应用和5个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，无限团队成员，200日活跃用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展微服务架构，提供实时更新和无代码策略UI。免费1000 MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费领域(realm)支持1000用户和10个SSO连接，基于包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业SSO。免费方案包含无限MAU、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化平台提供认证与反欺诈API/SDK。免费方案包含10,000 MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟快速上手。可免费自托管，或选择含1万免费MAU的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，快速上线的同时保持对用户体验的控制。免费支持5000 MAU。
* [Warrant](https://warrant.dev/) - 企业级托管授权与访问控制服务。免费层包含100万月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费25,000次认证请求，包含OTP、无密码登录、策略等所有安全功能。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户。免费200用户和1万封事务邮件(带"Powered by PropelAuth"水印)。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，同时支持认证与授权。免费5000 MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。包含邮箱密码、社交账号、Magic Auth、MFA等多种方式。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您首选的移动应用测试平台，确保应用按预期运行。免费版包含：1个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限下载、高速下载和无限上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版功能：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS和Android应用。免费版包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费版包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费版包含：5个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案（含DevOps功能）。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理工具，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，免费管理无限设备（基础功能版）
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理平台。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 配备友好界面的服务器管理与部署平台。提供单台服务器免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP网络服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持多可用区节点部署
* [courier.com](https://www.courier.com/) — 统一推送API，集成应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐每月10,000条消息
* [Engage](https://engage.so/) - 面向SaaS的一站式客户互动与自动化工具（邮件、推送、短信、产品导览、横幅通知等）。每月最多1,000名活跃用户免费
* [engagespot.co](https://engagespot.co/) — 开发者多渠道通知基础设施，提供预制应用内收件箱和无代码模板编辑器。免费套餐每月10,000条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接至云原生物联网消息代理。永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用实现应用内消息、邮件、短信、Slack和推送等多渠道发送。免费套餐每月10,000条消息
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) — 开源开发者通知基础设施。统一管理邮件、短信、站内信、应用内推送等通信渠道的组件与API。免费套餐含每月30,000条通知（保留90天）
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日200,000条消息
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日100,000次事件
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure云平台。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
* [pubnub.com](https://www.pubnub.com/) - 每月100万次交易的Swift/Kotlin/React消息服务（单次交易可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API服务，支持实时数据注入、视频布局、录制，提供全功能托管Web UI或自定义UI套件。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送次数不限，含浏览器内消息功能
* [httpSMS](https://httpsms.com) - 将Android手机作为短信网关收发短信。每月免费收发200条消息
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全Serverless MQTT代理。永久免费每月100万会话分钟（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒内容。免费套餐：每日50条消息（限1设备1应用）
* [SuprSend](https://www.suprsend.com/) - 采用API优先理念的通知基础设施，通过单一接口发送交易通知、定时任务和互动消息。免费套餐每月10,000条通知，支持摘要、批量、多渠道、用户偏好、租户隔离、广播等工作流节点
* [SMSGate](https://sms-gate.app) - Android™短信网关服务，通过云端路由实现设备间短信收发。完全免费的云服务（建议每日超过10,000条消息时通知以维持服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费额度每日10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB存储量，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志量，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费方案包含50GB存储空间，15天存储保留期和7天日志检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志量，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截功能。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费  
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键值免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层10,000条字符串源），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 完全免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时指标免费版，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js
* [appneta.com](https://www.appneta.com/) — 免费版含1小时数据保留期
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测器（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测器、无限用户、无限仪表盘和无限告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API和网络检查/1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层含5个监测器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监测器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助厘清云基础设施支出。每月Google Cloud Platform消费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。24小时数据保留期免费
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版：3用户、10个仪表盘、100条告警，Prometheus和Graphite指标存储（1万序列，14天保留期），Loki日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务和后台任务。最多20个检查免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务和SaaS状态页聚合器 - 永久免费提供20个监测器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费含无限订阅和无限团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费版支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监测器免费
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（最多100页）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面展示应用和技术栈，支持大规模监控和诊断问题。为开发者社区提供永久免费方案：日志监控（100万日志事件）、基础设施监控和APM（最多2台主机）
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。永久免费方案支持10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是收集实时指标的开源工具。这个不断发展的产品也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师打造更完美的软件。从单体架构到无服务器，您可以检测所有内容，然后分析、排查和优化整个软件栈。免费层每月提供100GB数据摄入、1个全权限用户和无限基础用户
* [nixstats.com](https://nixstats.com) - 单台服务器免费。含邮件通知、公开状态页、60秒间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的正常运行时间监控，以及定时任务监控和状态页。前5个检查（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国和美国服务器的DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 为持续运行服务提供强大的告警和值班管理。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，含告警、强大可视化能力和基础报告功能。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监测器（每日检查）
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（集成Pagerduty、OpsGenie）。1个团队免费（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站的核心网页指标、SEO变更和正常运行时间。免费方案含5个URL、每日核心网页指标监控、10个HTML/SEO变更监测器、167个国家联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警和值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，无限项目和状态页免费支持10万次事件
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限量检测URL，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测器（10分钟间隔）。监控SSH、HTTP、HTTPS和任意TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层包含1个可自定义的公开状态页（SSL子域名）。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监测器、6个月历史运行时间/日志、无限状态页和自定义域名！无限期免费邮件告警，无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标和日志），无需复杂配置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站和Cron监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试（有限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个监测位置和20个主流Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个5分钟间隔的正常运行时间监测器和可定制状态页（含商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供多种监控类型：Cron任务、关键词、网站、端口、Ping。25个3分钟间隔的免费正常运行时间检查。支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费；Linux和Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行状态监控。为开源项目提供免费的小型企业订阅方案。
* [Embrace](https://embrace.io/) — 移动应用监控服务。小型团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持无限量自托管。
* [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪工具。兼容开源版Sentry SDK。每月1,000次事件免费，支持无限量自托管。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费方案含每月5,000次错误、不限用户数、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常的Sentry提供小型免费方案。每月5,000次错误/1用户免费，自托管不限量使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。包含Vercel等平台集成，支持通过邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告工具。免费方案支持无限量报告。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用户免费方案支持无限量录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 提供具备拼写容错、相关性排序和UI组件的托管搜索解决方案，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1,000名活跃用户免费，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
* [easysitesearch.com](https://easysitesearch.com/) — 搜索组件和API，支持基于网络爬虫的自动索引。免费版不限搜索次数，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化简历模板，可完整克隆编辑后下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，一小时即可掌握最新生成式AI工具
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目学习Linux、DevOps、网络安全、编程等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等开发领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 公开2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS/JavaScript/SQL从基础到高级的免费指南
* [全栈公开课](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL等技术
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所院校4000+免费课程，专注计算机与数据科学
* [Django教程网](https://django-tutorial.dev) - 免费Django框架学习指南，为用户文章提供dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家认证免费自学课程，涵盖Python Click和Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱服务，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费套餐每小时10次API请求，用于邮箱验证、IP和手机号验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发邮件 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者专用的简易测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送服务（无需暴露凭证），免费套餐包含200次月请求量/2个邮件模板/50KB请求限制/有限联系人历史记录
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务（主要面向Nodemailer和EmailEngine用户），完全免费的反事务性邮件服务（邮件永不投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 多域名临时/一次性邮箱生成器，页面刷新即更新邮箱地址，完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名且可创建无限地址（含广告），完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务，可创建无限域名邮箱地址（注意：使用.casa/.cf/.click等TLD需付费）
* [Imitate Email](https://imitate.email) - 用于构建/QA和CI/CD测试的沙箱邮件服务器，永久免费账户每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，可收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每日可创建3个临时邮箱（通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱（邮件3天后自动删除），开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC配置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC配置（roundsphere.com提供的免费服务）
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86,400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件量和自动化功能
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮件测试免费API/公共邮件托管/外发捕获/邮件转Slack/Websocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费套餐含1个收件箱/100条消息/无团队成员/每秒2封邮件/无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者专用免费临时邮箱，可通过Web界面或API即时创建
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，通过网站或RSS阅读邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID/1个域名/1个收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送到服务器）
* [pepipost.com](https://pepipost.com) — 首月3万封免费，之后每天100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（内置端到端加密），1GB存储空间
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，免费套餐（每月10000封），支持异步发送/多SMTP服务器/黑名单/日志/追踪/Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 每日免费验证100个邮箱，同时提供DEA检测/DNS查询/SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封/每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管的邮箱别名/转发方案，免费5个别名/无限带宽/无限收发，教育工作者（学生/研究人员等）免费
* [Substack](https://substack.com) — 无限免费邮件订阅服务，收费时开始支付
* [Sweego](https://www.sweego.io/) - 面向开发者的事务性邮件API（欧洲地区），每天500封免费邮件

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱地址及邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费额度
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化流程。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址服务，支持转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历功能（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证额度
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供包含免费方案的多项服务：
   - [邮箱](https://zoho.com/mail) 5用户免费。每人5GB空间，附件限制25MB，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业及个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储空间
   - [文档](https://zoho.com/docs) — 5用户免费，上传限制1GB，存储空间5GB。捆绑提供Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目，附件限制10MB。[Bug追踪器](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，支持频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议及10名参与者的网络研讨会
   - [保险库](https://zoho.com/vault) — 个人可用的密码管理工具
   - [Showtime](https://zoho.com/showtime) — 支持最多5人远程培训的会议软件
   - [记事本](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS/Atom订阅，访问控制和自定义CSS
   - [订阅](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅免费，1个用户，所有支付由Zoho托管。保留最近40条订阅记录
   - [结账](https://zoho.com/checkout) — 产品账单管理，3个页面，最多50笔支付
   - [服务台](https://zoho.com/desk) — 客户支持管理，3个客服专员，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)提供1个远程技术支持人员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每个频道100人，支持SSO
   - [营销活动](https://zoho.com/campaigns) - 邮件营销
   - [表单](https://zoho.com/forms) - 表单创建工具
   - [签名](https://zoho.com/sign) - 无纸化签名
   - [调查](https://zoho.com/surveys) - 在线调查工具
   - [预约](https://zoho.com/bookings) - 预约排期系统
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API服务。每月5,000封邮件额度，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队规模，提供卓越的技术支持且价格合理。免费方案包含10个功能开关、2个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能：跨Web、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量无限制。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，具备Git式版本控制及同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量无限制。
  * [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试服务。免费方案支持3个环境，每个环境5个功能开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级可扩展的多区域功能开关管理平台。免费方案包含10个开关、2个环境和无限请求。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费方案中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。其免费方案提供无限席位、开关、实验和动态配置，每月支持100万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试工具。支持代码化配置和完整TypeScript类型化SDK，深度集成Next.js和React等框架。提供慷慨的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费软件、共享软件、演示版本或公共领域字体。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体。精心挑选的字体库并以易用格式呈现。
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速轻松地在网站上安装众多免费字体。
* [FontGet](https://www.fontget.com/) - 提供多种可下载字体，并通过标签进行清晰分类。
* [Fontshare](https://www.fontshare.com/) - 免费字体服务，不断增长的专业级字体库，100%免费用于个人和商业用途。
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多种独特字体。
* [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体及其使用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和商用付费字体，支持输入文本快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供字体家族的开源免费服务。
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版包含无限表单，每月20次提交（若显示Form-Data标识可额外获得2000次提交）。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。提供友好的现代化界面，支持Google Sheets、Airtable、Slack、邮件等集成。
  * [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
  * [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月500次提交，可自定义回复邮箱地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
  * [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月，含邮件通知。
  * [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单数量，每月250次提交，提供客户支持团队协助。
  * [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每月每个表单50次提交。
  * [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费且无需注册。
  * [Formlick.com](https://formlick.com) - Typeform替代方案含终身套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
  * [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1个表单、50次提交、单文件上传和100MB存储空间。
  * [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过界面将提交内容转发至邮箱/Slack/Zapier。无需服务器代码。免费版提供无限表单和每月100次提交。
  * [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持创建无限表单和收集无限提交，含预制模板、反垃圾功能和100MB文件存储。
  * [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
  * [Hyperforms.app](https://hyperforms.app/) — 无需后端代码快速创建表单转邮件功能。个人账户每月免费50次提交。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站每月50次提交。
  * [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单和每月1000次提交。
  * [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单和调研工具。含50+专家设计模板。免费账户限制1个活跃调研，100次回复/调研和8种回复类型。
  * [Screeb](https://screeb.app/) - 应用内调研和用户行为分析工具。永久免费版支持500月活用户，无限回复和事件，多集成导出和定期报告。
  * [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB文件存储，支持Zapier集成、CSV/JSON导出、自定义跳转/响应页、Telegram/Slack机器人及单邮件通知。
  * [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件/网站/产品内/移动端调研、AI问卷生成器和25次月回复。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可免费集成HTML表单。提交后表单内容将发送至注册邮箱。
  * [stepFORM.io](https://stepform.io) - 问卷和表单构建工具。免费版支持5个表单，每表单最多3个步骤，每月50次回复。
  * [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版限制每表单10个字段和100次月回复。
  * [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版会对签署文档添加水印，但允许无限信封+签名。
  * [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的无后端联系表单。免费版支持无限表单/域名，每月250次提交。
  * [WebAsk](https://webask.io) - 调研与表单构建工具。免费版含3个调研/账户，100次月回复和每调研10个元素。
  * [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
  * [formpost.app](https://formpost.app) - 免费无限次表单转邮件服务。可设置自定义跳转、自动回复、Webhook等。
  * [Formester.com](https://formester.com) - 在网站分享嵌入独特表单。无表单数量或功能限制，免费版每月100次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器并将任意PDF转为可填写表单。免费版支持无限PDF，每个PDF3次提交。
  * [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版可收集100次回复，支持网站嵌入或链接分享。
  * [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单和触发器。
  * [Sprig](https://sprig.com/) - 每月1次产品内调研或带录屏的调研，含GPT驱动的AI分析。
  * [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈。提供React/Vue组件便于集成。
  * [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃调研，每调研25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费的自动化拉取请求审查。
  * [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。仅需2行代码即可调用200+种LLM。每月10,000次免费请求，平台功能完全免费！
  * [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，提供可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
  * [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估行。
  * [Findr](https://www.usefindr.com/) - 通用搜索工具，可同时搜索所有应用。搜索助手可让您利用自己的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
  * [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
  * [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理功能。此外还提供专业套件的免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，提升可观测性，并兼容任何可观测性客户端。免费计划每月提供50,000次追踪。
  * [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师与非技术团队之间的无缝协作，以微调并实现生成式AI产品的生产化。免费计划包含所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
  * [Pollinations.AI](https://pollinations.ai/) - 易于使用、免费的图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
  * [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，可替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大语言模型（LLMs）在几分钟内提供定制的商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，虽然这些模型免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费词数，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。由Cloudflare提供支持，全球超过11%的网站使用此开源免费CDN服务
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最受欢迎的开源JavaScript库内容分发网络
* [Stellate](https://stellate.co/) — 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN，支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管jQuery等流行第三方JavaScript库
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN，每月每域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [section.io](https://www.section.io/) — 快速部署管理完整Varnish缓存方案，宣称单个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库(GitHub/GitLab/Bitbucket)、WordPress资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub代理，个人开发者免费(无技术支持)
* [UNPKG](https://unpkg.com/) — npm全库CDN
* [weserv](https://images.weserv.nl/) — 全球缓存图片处理服务，支持实时调整尺寸
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) — 全球内容分发网络，每月1TB流量+100万次请求免费，含免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) — 每月5TB免费CDN流量，19个核心节点，1个域名+通用SSL证书

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量和30秒超时限制
* [appwrite](https://appwrite.io) - 不限项目数量且无暂停限制（支持websockets）的认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且不限项目数量
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析功能，特别适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费层包含每日10万次请求和每月100GiB数据传输
* [domcloud.co](https://domcloud.co) – 提供GitHub集成CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量限制，仅限免费域名
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架，包含业余项目的免费云托管
* [flightcontrol.dev](https://flightcontrol.dev/) - 在自有AWS账户上通过Git推送式工作流部署Web服务与数据库。个人GitHub仓库开发者可享免费层，AWS费用通过AWS计费但可使用信用额和免费层
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供1个永不休眠的免费实例和限制为2连接/10,000行且无备份的PostgreSQL免费数据库
* [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，免费计划包含10万次服务调用、1万次异步任务和10万次Redis命令
* [pipedream.com](https://pipedream.com) - 面向开发者的集成平台，可基于任意触发器开发工作流。[免费运行](https://docs.pipedream.com/pricing/)代码化工作流，无需管理服务器或云资源
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。新手账户免费，包含1个your-username.pythonanywhere.com域名下的Python应用、512MB私有文件存储和1个MySQL数据库
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次、每日2,500次和每月50,000次调用，自定义域名仅限付费计划
* [Koyeb](https://www.koyeb.com) - 面向开发者的全球无服务器平台，支持基于Git部署Docker容器、Web应用和API。免费实例可在德国法兰克福或美国华盛顿部署Web服务，免费托管PostgreSQL数据库位于德国/美国/新加坡。配置为512MB内存、2GB存储和0.1CPU
* [Napkin](https://www.napkin.io/) - 内存500MB、默认15秒超时的FaaS服务，每月5,000次免费API调用（限速5次/秒）
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务，为Meteor应用提供含免费MongoDB共享托管和自动SSL的PaaS平台
* [Northflank](https://northflank.com) — 通过强大UI/API/CLI构建部署微服务、任务和托管数据库。免费层包含2个服务、2个定时任务和1个数据库
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全功能平台，兼具NoCode工具的敏捷性和编程语言的强大功能。[免费版含1,000次yeps](https://yepcode.io/pricing/)
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)支持3个项目、1GB出口流量和每月300分钟构建时间
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务和每月5美元信用额
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务，免费层支持本地Kubernetes连接以创建类生产测试环境
* [DeployApps](https://deployapps.dev/) - 无服务器函数提供商，免费提供每月100万次函数调用、100GB带宽和10个定时任务（限非商业/学术用途）

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
  * [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
  * [backendless.com](https://backendless.com/) - 移动和Web Baas服务，免费提供1GB文件存储、每月50,000次推送通知及1000个数据表对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上启动您的Python API，通过在线编辑器或本地工具免费构建和托管。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档和资源，为企业构建和部署数字创新方案。包含平台、SDK和组件库的完整个人沙盒环境。
  * [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1000用户的免费应用。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费-100万条记录/500万次月度函数调用。
  * [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨的免费方案。
  * [Firebase](https://firebase.com) - 帮助构建和运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等多项功能永久免费。
  * [Flutter Flow](https://flutterflow.io) - 无需编写代码即可构建Flutter应用UI，集成Firebase。免费版包含UI构建器和模板。
  * [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能。
  * [hasura.io](https://hasura.io/) - 为现有数据库提供即时GraphQL API，支持Web/移动/数据集成。每月1GB数据流量免费。
  * [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端，免费版包含PostgreSQL、GraphQL(Hasura)、认证、存储和函数。
  * [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送，支持无限联系人和自动预热功能。
  * [paraio.com](https://paraio.com) - 提供灵活认证、全文搜索和缓存的API后端服务。单个应用免费，含1GB数据。
  * [pubnub.com](https://www.pubnub.com/) - 每月100万条消息/100个活跃设备的免费推送通知。
  * [pushbots.com](https://pushbots.com/) - 推送通知服务，每月150万次推送免费。
  * [pushcrew.com](https://pushcrew.com/) - 推送通知服务，2000订阅者内无限通知。
  * [pusher.com](https://pusher.com/beams) - 每月2000活跃用户的免费无限推送通知，统一iOS/Android API。
  * [quickblox.com](https://quickblox.com/) - 即时通讯、音视频通话及推送通知的通信后端。
  * [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件等服务的服务器，组合成数据处理管道。
  * [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用，通过点击定制数据模型，免费计划包含完整Lightning平台功能。
  * [simperium.com](https://simperium.com/) - 多平台实时数据传输，免费支持2500用户/月的结构化数据存储。
  * [Supabase](https://supabase.com) - 开源Firebase替代方案，免费提供认证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) - 含认证、配额和监控的API管理，提供免费云服务。
  * [zapier.com](https://zapier.com/) - 连接应用实现任务自动化，每15分钟5次触发/每月100次任务。
  * [IFTTT](https://ifttt.com) - 自动化您喜爱的应用和设备，免费支持2个Applet。
  * [Integrately](https://integrately.com) - 一键自动化繁琐任务，免费100次任务/15分钟更新/5个自动化流程/webhook支持。
  * [LeanCloud](https://leancloud.app/) - 移动后端服务，免费1GB存储/256MB实例/每日3千次API请求/1万次推送（API类似Parse Platform）。
  * [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账户超过180天的用户提供5美元/月免费额度，适合托管应用和数据库等（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持与15+种数据库及任何API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，可构建可定制的移动和Web应用。提供拖拽界面、离线支持、实时位置追踪及多种第三方服务集成
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理快速构建内部工具、自定义用户旅程、数字体验、自动化流程、管理面板和运营应用的低代码平台（效率提升10倍）
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含API全访问权限、AI编程助手和每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境（支持总用户数），每个应用0.5GB存储和1GB内存。免费层也包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 支持本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可扩展性。能用JavaScript和API实现的功能都可在ReTool中完成。免费层支持每月最多5个用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。支持AI生成、可视化编辑和代码扩展，提供集成、认证、权限和审计日志等集中管控功能
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。可连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发应用
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台，支持通过JavaScript、Python和SQL进行高度定制的拖拽式UI构建。提供云服务和自托管方案，最多5个用户免费
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。单个用户每月100万次工作流活动免费（[德语版本](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费网络托管，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，自定义 Web 服务器，支持 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，支持 PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施困扰并加速项目搭建。
* [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建 Web 和移动应用，免费版带有 Bubble 品牌标识。
* [dAppling Network](https://www.dappling.network/) — 面向 Web3 前端的去中心化网络托管平台，专注于提升正常运行时间和安全性，并为用户提供额外的访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在 App Platform Starter 层级免费构建并部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到 Web。仅限静态站点，永久免费。每个 Google/Microsoft 账户可托管一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并公开实时共享。可通过其美观的用户界面、API 或 CLI 自由操作。
* [Fern](https://buildwithfern.com) — 在 Fern 的免费计划中构建并托管基于 Markdown 的文档站点。甚至可以从 API 定义文件自动生成站点的 API 参考。站点托管在 _yoursite_.docs.buildwithfern.com。
* [Free Hosting](https://freehostingnoads.net/) — 免费托管支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持以及许多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费托管服务，包括行业最佳的控制面板和一键安装 50+ 免费应用。即时设置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利免费网络托管，提供 Plesk 控制面板，支持 PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP 邮件，无限带宽，免费子域名，1000 MB 存储空间，并可选择升级。
* [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，支持自定义域名和 SSL，每月 100 GB 带宽，260+ Cloudflare CDN 节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 提供 SFTP 访问的 Web 托管，支持文件上传下载和 PHP。
* [Neocities](https://neocities.org) — 静态托管，1 GB 免费存储和 200 GB 带宽。
* [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，提供 100 GB 数据和每月 100 GB 带宽。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包含多种形式的 Web 托管（静态托管、基于容器的托管、WordPress 及其他一键安装的托管应用）。提供一个免费 Web 托管（静态或容器化）和一个免费数据库，附带 100 GB 带宽和每月 300 分钟构建时间。
* [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。对开发者和机构免费，不支持自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等功能。
* [render.com](https://render.com) — 统一云平台，用于构建和运行应用及站点，提供免费 SSL、全球 CDN、私有网络、Git 自动部署，以及完全免费的 Web 服务、数据库和静态网页计划。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 面向前端开发者的静态 Web 发布工具，支持无限站点和自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用 Quill 轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50 个页面，50 MB 存储空间，仅限 170+ 预定义主区块，不支持自定义字体、favicon 和域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN，每次 `git push` 生成唯一预览 URL。非常适合 Next.js 和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于 SaaS 的网站构建器，支持无限网站、70+ 区块、五个模板、自定义 CSS、favicon、SEO 和表单。不支持自定义域名。
* [Qoddi](https://qoddi.com) — 类似 Heroku 的 PaaS 服务，采用开发者中心设计并提供全功能支持。免费层级适用于静态资源、测试环境和开发者应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费 Flarum 托管，支持最多 250 名用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 免费托管一个项目，容器存活时间为两周，每个项目 500 MB RAM，SFTP 支持 1G 磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，在其付费服务中提供免费托管三个静态站点。
* [Serv00.com](https://serv00.com/) — 3 GB 免费网络托管，每日备份（保留 7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），兼容 MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等多种技术。
* [Sevalla](https://sevalla.com/) — 专为简化应用、数据库和静态网站部署与管理而设计的托管平台，限制为 1GB 站点空间、100GB 免费带宽、600 分钟构建时间，每个账户可托管 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全性的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管。免费版支持1个DNS区域（域名）和10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多支持5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费动态DNS服务，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后通过"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，所有功能均有合理限制。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无域名数量限制的免费DNS服务。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪、无日志、无广告的免费动态DNS服务，域名数量不限。
* [noip](https://www.noip.com/) - 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) - 免费DNS服务，当查询包含嵌入IP地址的主机名时返回该IP地址。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管服务。
* [zonewatcher.com](https://zonewatcher.com) - 自动备份和DNS变更监控，免费支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云提供的免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管最多3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅和广告。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) — 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷高效地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类Mongdb查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 分布式开源SQL数据库，专为实时分析设计。[免费层CRFREE](https://crate.io/lp-crfree)：单节点配置为2核CPU、2GiB内存、8GiB存储，每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，支持20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建新一代从物联网到AI的应用程序
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务，25MB以内免费，含1个代理服务器和基础分析功能
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库，无限表格、2,000行数据、1个月版本历史，最多支持25名团队成员
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能与常用商业应用集成的工具。免费方案包含无限用户、10个工作区和每个工作区2GB附件
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RUs)
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发体验。永久免费方案包含9GB总存储、最多500个数据库、3个部署位置、每月10亿行读取及SQLite本地开发支持
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000个基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务，提供模式定义、关系管理、自动REST API（支持类MongoDB查询）及高效的多用户管理界面。免费方案支持3个用户、2,500条记录和每秒1次API请求
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）([什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html))
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图形规模（5万个节点/17.5万种关系）
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，免费层含0.5GB总存储、1个项目、10个分支、无限数据库、主分支永不休眠（非主分支计算每月20小时活跃时长）
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入，可将SQL查询发布为托管HTTP API。免费层无时限，含10GB存储和每日1,000次API请求
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2核vCPU、8GB内存和50GB存储，闲置1小时后休眠
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发免费，企业部署和支持需付费
* [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库最大10MB，支持MySQL、MariaDB、MongoDB和PostgreSQL
* [xata.io](https://xata.io) - 内置强大搜索分析功能的无服务器数据库。单一API、多类型安全客户端库，优化开发工作流。永久免费层满足业余开发者需求，包含3个Xata单位（具体定义参见官网）
* [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL构建的全栈低代码开发平台，为JavaScript开发者提供无服务器后端即服务。通过UI应用构建器快速开发Web应用并轻松扩展，免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、永不休眠、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全地将类LAN网络扩展到分布式团队，免费方案支持最多5人无限量网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码时提供wss:// URL并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装和注册。免费子域名，无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。不限节点数。(Hamachi替代方案)
* [segment.com](https://segment.com/) — 事件转换和路由枢纽，可转发到第三方服务。免费10万事件/月。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook到公共或内部(如localhost)目的地。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点(`https://yoursubdomain.webrelay.io <----> http://localhost:8080`)。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控webhook。免费方案含10万请求/月和10万尝试/月，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽，限速带宽，单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端的端到端加密网络。支持桌面/移动/NA客户端；可通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将本地服务器暴露到互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行的服务到公共自定义URL，并通过访问控制保障安全。免费方案支持单个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理与SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目发布平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间追踪。最多支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内联网与项目管理工具。免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具：流程图、UML、网络图。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 基于团队的敏捷估算工具。免费支持5名用户，提供Jira集成、不限量视频会议、团队和会话
* [clickup.com](https://clickup.com/) — 项目管理工具。含云存储的免费高级版本，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪应用。永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，支持AWS智能组件实时数据展示。免费版允许单个用户创建不限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台。免费版支持5人团队、不限量仓库/项目/文档，每月500分钟CI/CD时长和30000分钟无服务器代码运行时长，1GB仓库存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版最多支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费基础版包含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目、不限用户数和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务管理、讨论区、里程碑、时间追踪、日历、文件及密码管理器。免费版不限项目/用户/存储空间
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具。免费版每月可创建3个公共看板和1次调研
* [GForge](https://gforge.com) — 支持自托管与SaaS的复杂项目管理套件。SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 面向开发者的免费描述转图表工具。通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可对比两个GraphQL模式差异的工具，会标记破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — 基于GitHub issues的即时项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板数，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用全功能Bug报告SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — 收集iOS/macOS应用内用户反馈并按投票排序需求。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/)  — 支持多维度查看的基础设施交互图表工具。免费版允许创建不限量私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版最多支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。含高级功能的免费版本
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理工具。免费版支持2个看板和2名用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用。免费版支持1名用户创建不限量看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台。不限用户/空间，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具。提供网页版和Chrome插件，完全免费
* [Kumu.io](https://kumu.io/)  — 支持动画/装饰/筛选/聚类/表格导入的关系图谱工具。免费版允许创建不限量公开项目，学生可享私有项目权限
* [Linear](https://linear.app/) — 极简问题追踪工具。免费版不限成员数，支持10MB文件上传和250个问题（归档除外）
* [leiga.com](https://www.leiga.com/) — 采用AI驱动的项目管理SaaS。免费版支持10名用户、20个自定义字段、2GB存储空间，视频录制限5分钟/条，自动化任务20次/用户/月
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具。免费版包含3个可编辑文档、100个专业模板和基础协作功能
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具。免费版支持3个项目且不限成员数
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 支持团队协作/计划/分析/日常管理的软件。基础版永久免费（100MB存储+5用户/团队），不限工作区/会议/任务/工时表/问题追踪
* [Ora](https://ora.pm/) - 敏捷任务管理与团队协作工具。免费版最多3名用户，文件限制10MB
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公开项目+2个私有项目（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台。免费版支持2名用户+10个客户+500MB存储
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具。免费版不限成员数，支持5MB文件上传和1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具（计划扑克）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版包含无限制任务、迭代和工作区，且不设用户上限
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，支持从看板到Scrum等多种流程，免费版不限用户数（最多1,000个数据实体）{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具，免费版提供1个工作区（含无限任务与项目）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾与迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供付费升级方案
* [teleretro.com](https://www.teleretro.com/) — 趣味性回顾工具（含破冰游戏/GIF/表情符号），免费版包含3次回顾会议且成员不限
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理与Beta测试平台，私人用途免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作式与个人任务管理工具，免费版包含：5个活跃项目、每个项目5名用户、5MB文件上传、3个筛选器和1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版提供无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目管理、版本控制与问题跟踪），免费版提供无限项目与协作者及3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具，最多3名用户免费且项目不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目与私人项目（3名用户免费），含时间跟踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内集成的独家项目管理方案，公开仓库/开源组织/非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，免费版最多5名成员和5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目与4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间跟踪应用（免费版含无限记录/项目/客户/标签/报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具，特别适合外包与跨组织协作项目，免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简免费时间跟踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也支持其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，提供多种图片缩放、压缩和水印功能。含响应式图片、360度全景图制作和图片编辑的开源插件。免费月套餐包含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图片上传、强大编辑、存储和交付服务，支持Ruby/Python/Java/PHP/Objective-C等库。免费套餐每月25积分（1积分=1000次图片转换或1GB存储或1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件分享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件/500次转换/3GB带宽
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图片/音频/视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API操作。无文件大小/带宽/下载次数限制，但十天无下载的文件会被自动删除。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN流处理服务，免费套餐包含每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图片图表生成
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在保持质量前提下减小文件体积。开源项目免费使用。
* [ImgBB](https://imgbb.com/) — 无限容量的图片托管服务，支持拖拽上传（单图限32MB）。生成直链、BBCode和HTML缩略图，登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限次社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务，免费套餐含1000张原始图片/无限转换/100GB带宽
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费版支持1MB以内文件
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务，免费套餐支持100个键（1KB/键）和100次调用/小时
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端加速优化（缓存/图片代码优化/CDN），免费支持5000页面浏览/月
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理工具，基础版支持无限文件传输（单文件最大250MB）和5个加密文件
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库，可通过申请获取免费开源计划
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目/黑客松/移动应用设计的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储空间。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台，免费版支持无限公开文件和10个私有文件
* [podio.com](https://podio.com/) — 5人以下团队可免费使用基础版功能（用户管理除外）
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的批量二维码生成器，单次最多支持100个URL
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表/图形和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图片优化API，已处理超70亿张图片，支持WordPress/Drupal/Magento等主流CMS
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费版每月可渲染20分钟视频
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 文件上传与音视频/图片/文档转码服务。开源项目/慈善机构/学生可通过GitHub学生开发者包免费使用，商业应用可免费试用2GB
* [twicpics.com](https://www.twicpics.com) - 响应式图片服务，提供图片CDN/处理API和前端优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具集，开发者可免费使用文件上传API/图片CDN/自适应交付/智能压缩等功能。免费套餐含3000次上传/3GB流量/3GB存储。
* [imagekit.io](https://imagekit.io) — 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) — 基于绝对隐私理念的零知识文件存储服务，注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) — 基于AI的云存储服务，免费提供20GB空间（支持3台设备），推荐用户可获5GB奖励（账户90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一个易用的全球图像CDN。60秒内即可完成设置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于GPT的AI处理工具，可将PDF、图像转换为JSON、CSV、EXCEL等结构化数据格式。每月免费赠送30点额度。
  * [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持样式、颜色、logo等个性化设置。
  * [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能。完全免费且不收集用户数据。
  * [Doradrop](https://doradrop.com) — Doradrop是一个无广告的无限存储文件共享平台。无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精心整理的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板，提供丰富主页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的一站式设计系统平台，免费版支持3名编辑人员共同维护1个设计系统
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能转换工具，包含视频和GIF
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号
* [Branition](https://branition.com/colors) - 专为品牌打造的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变代码工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库
* [figma.com](https://www.figma.com) - 在线协作设计工具，免费版最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简单的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库，含数千图标，支持React/Flutter/Vue等框架
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐等设计资源，免费版有分辨率限制
* [landen.co](https://www.landen.co) - 无代码建站平台，免费版可发布1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，通过URL参数指定尺寸
* [LottieFiles](https://lottiefiles.com/) - 全球最大Lottie动画平台，提供各平台开发工具
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 无限量免费云存储思维导图
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作工具，免费版支持3用户5项目
* [mockupmark.com](https://mockupmark.com/create/free) - 40款免费T恤和服装模型生成工具
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（波浪/斑点/图案等）
* [movingpencils.com](https://movingpencils.com) - 完全免费的浏览器矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 基于网页的开源设计工具，完全免费
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供搜索API
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成服务，支持热链接
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 浏览器内直接转换PNG到WebP，完全客户端处理保障隐私
* [Proto.io](https://www.proto.io) - 无需编码的交互式原型工具，免费版含1用户1项目5原型
* [resizeappicon.com](https://resizeappicon.com/) - 简单的应用图标尺寸调整工具
* [Rive](https://rive.app) - 永久免费的跨平台动画创作工具
* [storyset.com](https://storyset.com/) - 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成工具，200款免费模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 主题编辑器，可预览各组件样式变化
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式UI区块集合

  * [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题。实时自定义颜色、排版等。
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像。URL可直接嵌入网页/应用，支持通过URL配置参数。
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，完全免费且无需署名。
* [unsplash.com](https://unsplash.com/) - 商用/非商用的免费图库（无限制许可）。
* [vectr.com](https://vectr.com/) — 网页+桌面端免费设计工具。
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的演练流程。
* [Webflow](https://webflow.com) - 带动画效果的所见即所得网站构建器，含托管服务。免费支持两个项目。
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的所见即所得网站构建器。非商业用途免费。
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图工具。免费创建最多4个看板。
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，展示设计稿、资源和样式指南。免费支持一个项目。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特吸睛的图形图像。
* [Responsively App](https://responsively.app) - 免费开发工具，助力更快速精准的响应式网页开发。
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，内含持续扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览与转换工具（支持转Angular/React/Vue等，开源项目见https://github.com/xlayers/xlayers）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大且SEO优化的网页构建器。前5页免费，支持无限自定义域名和全功能。
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器。无水印，支持1080p导出。
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页构建工具。免费支持一个网站。
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌Logo库，内置浏览器端矢量编辑工具。
* [svgrepo.com](https://www.svgrepo.com/) - 探索海量矢量库，为项目寻找最合适的商用免费SVG矢量资源。
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具，可直接用于设计工作流。
* [Canva](https://canva.com) - 免费在线视觉内容设计工具。
* [Superdesigner](https://superdesigner.co) - 通过点击即可创建独特背景/图案/形状的免费设计工具集。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。免费支持3个项目，无限协作者和代码导出。
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG/DXF/EPS等矢量格式。
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，含JPG转SVG/JSON转XML等开发者工具。
* [okso.app](https://okso.app) - 极简在线绘图工具（支持导出PNG/JPG/SVG/WEBP，PWA应用，免注册）。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件。
* [Lucide](https://lucide.dev) - 免费可定制的统一SVG图标工具包。
* [Logo.dev](https://www.logo.dev) - 包含4400万+品牌的公司Logo API（前1万次调用免费）。
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的Bootstrap/Angular/React/Vue UI套件（含700+组件/模板）。
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的免费Bootstrap组件库（设计更优）。
* [DaisyUI](https://daisyui.com/) -- 免费。"用更少的类名使用Tailwind CSS"，提供按钮等组件。
* [Scrollbar.app](https://scrollbar.app) -- 简易网页滚动条设计工具。
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器。
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色精选集+自定义生成器。
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一搜索平台（支持SVG/框架导出）。
* [NextUI](https://nextui.org/) -- 免费。精美现代的React & Next.js UI库。
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑的开源图标设计系统。
* [ShadcnUI](https://ui.shadcn.com/) -- 可直接复用的精美组件库（可访问/可定制/开源）。
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件集。
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标（完全免费）。
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片背景模糊框。
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案。免费版支持无限子域名网站+5个自定义域名。
* [Nappy](https://nappy.co/) -- 黑人/棕色人种主题的免费商用图库。
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/工具精选集+代码生成器。
* [Tailcolors](https://tailcolors.com/) -- 精美Tailwind CSS v4调色板工具。
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存的免费在线绘图工具。
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的免费离线设计工具（免费版含10个云文档）。
* [Flows](https://flows.sh/) -- 完全可定制的用户引导平台（免费支持250月活用户）。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选。
  * [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常并非来自真实应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据个人偏好寻找最佳着陆页设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供设计师免费电子书和网络免费UI套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图，包含桌面端、平板和移动端视图。
  * [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可全检索的移动应用截图库节省UI/UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动与网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供精选UI/UX模式（iOS和Android）的灵感库。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频及截图] 多款移动和网页应用的完整流程视频，含截图，支持高效检索和索引。
  * [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并紧跟最新网页和移动应用UI设计趋势，可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考合集，支持标签化和可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图及地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月5万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（Web/桌面/移动端）的地图API和SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能。每月免费额度包括：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB地图瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析及共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图及位置感知应用的API与SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新，提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途和测试每日2,500次免费地图浏览及API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 面向多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，支持Fedora和EL系统
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享网站，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用程序构建工具。这款开源IDE对所有人免费，是Android应用开发的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实Android应用
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台热门可扩展编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)并支持升级到高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。完全免费的公共服务
* [BlueJ](https://bluej.org) — 专为初学者设计的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI帮助新手入门
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制
* [cacher.io](https://www.cacher.io) — 代码片段管理工具，支持标签和100+编程语言
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源且支持Windows、macOS和Linux
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，能编写（代码块、自动补全、单元测试）、理解（掌握整个代码库知识）、修复和查找代码。支持VS Code、JetBrains和在线使用
* [codiga.io](https://codiga.io/) — 编程助手，可直接在IDE中搜索、定义和复用代码片段。个人和小型团队免费
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类、搜索和标签。完全免费且无限制
* [cocalc.com](https://cocalc.com/) — （原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置协作工具及大量数学、科学、数据科学免费软件：预装Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，为师生适配GitHub Codespaces
* [codepen.io](https://codepen.io/) — 前端网页开发 playground
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等框架的在线playground
* [Components.studio](https://webcomponents.dev/) - 独立编写组件，通过故事可视化展示，测试并发布到npm
* [Eclipse Che](https://www.eclipse.org/che/) - 面向开发团队的基于网页和Kubernetes的原生IDE，支持多语言。开源且社区驱动。Red Hat提供的在线实例：[workspaces.openshift.com](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成虚假数据。发送API请求描述所需数据格式，API将以JSON形式返回。加速创意落地过程
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI结对编程工具。原生CLI支持并与任何IDE无缝集成。免费层包含基础AI模型访问和本地处理能力
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏工具。免费层包含每日5个VM额度
* [GitPod](https://www.gitpod.io) — 为GitHub项目提供即时可用的开发环境。免费层包含50小时/月
* [ide.goorm.io](https://ide.goorm.io) goormIDE是云端完整IDE。支持多语言，通过功能完备的网页终端提供基于Linux的容器，支持端口转发、自定义URL、实时协作与聊天、分享链接、Git/Subversion等功能（免费层包含1GB内存和10GB存储/容器，5个容器槽位）
* [JDoodle](https://www.jdoodle.com) — 支持60+编程语言的在线编译器和编辑器，免费版REST API每日可编译200次
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE和部署工具（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。为学生、教师、开源项目用户组提供免费许可
* [jsbin.com](https://jsbin.com) — 前端网页开发playground和代码分享平台（支持HTML、CSS、JavaScript，以及Markdown、Jade和Sass）
* [jsfiddle.net](https://jsfiddle.net/) — 前端网页开发playground和协作式代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回虚假JSON数据的REST API端点。如需本地运行服务器也可获取源代码
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假JSON数据的微型API模拟服务
* [mockable.io](https://www.mockable.io/) — 可配置的RESTful API/SOAP Web服务模拟工具。快速定义端点并返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 生成CSV、JSON、SQL和Excel格式的测试数据，也可创建后端API模拟
* [Mocklets](https://mocklets.com) - 基于HTTP的API模拟器，支持终身免费套餐
* [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器开发Web应用。免费版提供24小时有效期的服务器，每日4小时运行时间（2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 开箱即用支持编译Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript和TypeScript，自动刷新浏览器，让网站开发测试更轻松。支持通过点击添加自定义工具
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程playground。支持多种语言，运行代码无需注册（保存代码需注册）。同时为初学者和中级开发者提供免费课程
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码IDE，支持创建、编辑和部署全栈应用。兼容所有主流基于NodeJs的前后端框架。快速创建项目短链接：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新定义并优化的代码编辑器，由Microsoft开发
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面/Web/云开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的Microsoft编辑器VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持无缝工作流。可内联渲染任何内容，保存会话和历史记录，基于开放Web标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58个模板支持Web组件隔离开发，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效数据库IDE，具备服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器（包括Java、Python、C++、JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 分析、事件与统计

  * [Userbird](https://userbird.com) - Google Analytics替代方案，提供热力图、会话录制和收入追踪功能。
  * [Repohistory](https://repohistory.com) - 美观的仪表板，用于追踪GitHub仓库超过14天的流量历史。免费计划允许用户监控单个仓库的流量。
  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch是一个反向ETL平台，帮助你将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个数据同步目标。
  * [Avo](https://avo.app/) — 简化的分析发布工作流。单一真实来源的追踪计划，类型安全的分析追踪库，应用内调试器和数据可观测性，确保在发布前发现所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯。
  * [Branch](https://www.branch.io) — 移动分析平台。免费层支持最多1万移动应用用户，包含深度链接等服务。
  * [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。免费版支持从数据仓库同步10个字段到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站3000次浏览分析。
  * [Databox](https://databox.com) — 通过整合其他分析和BI平台提供商业洞察和分析。免费计划支持3个用户、仪表板和数据源，包含1100万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月2000次页面浏览（1个网站）
  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多2个应用
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一个开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且注重隐私的网站分析，作为Google Analytics或Matomo的替代方案。免费层适用于非商业用途，包含无限网站、6个月数据保留和每月10万次页面浏览。
  * [Google Analytics](https://analytics.google.com/) — Google Analytics
  * [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月支持100万次页面浏览，无需信用卡。
  * [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流
  * [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，每月免费支持3000次事件。
  * [heap.io](https://heap.io) — 自动记录iOS或Web应用中的每个用户操作。免费支持每月1万次会话。
  * [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划每天支持2000次页面浏览，100次快照/天（最大容量：300），3个热力图快照可存储365天，无限团队成员。还包括应用内和独立调查、带截图的反馈组件。免费层允许创建3个调查和3个反馈组件，每月收集20条回复。
  * [Keen](https://keen.io/) — 自定义数据分析工具，用于数据收集、分析和可视化。每月免费1000次事件
  * [Yandex.Datalens](https://datalens.yandex.com/) — Yandex Cloud数据可视化和分析服务。免费提供，无用户和请求数量限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) — 无限免费分析
  * [Mixpanel](https://mixpanel.com/) — 每月10万追踪用户，无限数据历史和席位，美国或欧盟数据驻留
  * [Moesif](https://www.moesif.com) — REST和GraphQL的API分析工具。（每月免费50万次API调用）
  * [optimizely.com](https://www.optimizely.com) — A/B测试解决方案，免费入门计划支持1个网站、1个iOS和1个Android应用
  * [Microsoft PowerBI](https://powerbi.com) — 微软提供的商业洞察和分析工具。免费计划有限制使用，包含100万用户许可。
  * [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接数据库、S3和API。即时导入、分析、图表化和共享数百万行数据。提供三个永久免费的工作簿。
  * [sematext.com](https://sematext.com/cloud/) — 每月免费5万次操作，1天数据保留，无限仪表板、用户等。
  * [Similar Web](https://similarweb.com) — Web和移动应用分析工具。免费计划每个指标提供5个结果，1个月移动应用数据和3个月网站数据。
  * [StatCounter](https://statcounter.com/) — 网站访问者分析工具。免费计划分析最近500名访问者。
  * [Statsig](https://statsig.com) - 集分析、功能标记和A/B测试于一体的平台。每月免费100万次计量事件。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建并让Tableau完美适配你的组织。免费开发者计划提供Tableau Online的个人开发沙盒许可。版本为最新的预发布版，数据开发者可以测试这个卓越平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型并追踪访问者。单个用户免费，无限测试
  * [woopra.com](https://www.woopra.com/) — 免费用户分析平台，支持50万次操作，90天数据保留，30多个一键集成。
  * [counter.dev](https://counter.dev) — 简单且注重隐私的网站分析工具。免费或按捐赠付费。
  * [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费追踪100万次事件。还提供无限的应用内调查，每月250条回复。
  * [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。提供免费计划，为开源项目提供个人订阅优惠，并有开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一个免费易用的工具，捕捉真实用户如何使用你的网站。
  * [Beampipe.io](https://beampipe.io) - Beampipe是简单且注重隐私的网站分析工具。免费支持最多5个域名和每月1万次页面浏览。
  * [Aptabase](https://aptabase.com) — 开源、注重隐私且简单的移动和桌面应用分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费2万次事件。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的追踪计划，促进无缝协作。可部署到生产环境实时监测流量，或在不编写代码的情况下为回归测试添加分析覆盖。
  * [LogSpot](https://logspot.io) - 完整的统一Web和产品分析平台，包括嵌入式分析组件和自动化机器人（Slack、Telegram和Webhooks）。免费计划每月包含1万次事件。
  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级注重隐私的Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标追踪。免费支持最多3个域名，每个域名600次会话回放。
  * [AppFit](https://appfit.io) - AppFit是一个全面的分析和产品管理工具，旨在简化跨平台分析和产品更新的管理。免费计划包括每月1万次事件、产品日志和每周洞察。

  * [Peasy](https://peasy.so) - Peasy 是一款轻量级、注重隐私的网站与产品分析工具。免费方案每月包含 3,000 次事件记录。
* [Rybbit](https://rybbit.io) - 开源的 Google Analytics 无 Cookie 替代方案，操作体验提升 10 倍。免费方案支持每月 3,000 次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，提供用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrockocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，一个月数据保留和三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次免费会话
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次免费会话
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次免费会话
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求额度
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入10,000美元以内免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月收入10,000美元以内免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，用于移动应用内订阅集成，支持iOS、Android、React Native、Flutter、Unity或网页应用。每月收入10,000美元以内免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币与法币汇率。免费层级每月提供10,000次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
* [CurrencyApi](https://currencyapi.net/) — 提供实物货币和加密货币的实时汇率，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费微型计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费从API创收，可连接Stripe、Chargebee等。免费层级每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - 完整的应用内购和订阅平台（支持iOS/Android），包含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购和订阅后端服务（iOS/Android）。每月追踪收入2,500美元以内免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据API。私有用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant box 的官方平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深度探讨对你重要的话题
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可用 GitHub issues 实现博客评论、维基页面等功能！
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"单个管理员完全控制少数域名的行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于AWS Lambda和Chrome的截图API。支持整页截图、捕捉时间戳和视口尺寸。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图。
* [screenshotlayer.com](https://screenshotlayer.com/) — 捕获高度可定制的网站快照。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月捕获100次快照，支持png/gif/jpg格式，包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费层每日支持500页。自2017年起提供免费层。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac构建IOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的理想平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管式移动应用持续集成/持续交付平台。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可直接在浏览器中运行Linux和Windows 2000
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux及其他操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助企业实现隐私设计，确保组织符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 提供从GDPR代理到Cookie横幅等完整合规功能的同意管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅功能。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量受限情况下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射。免费版包含核心同意管理功能，并为通过验证的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为你的代码、文本或图片创建美观的截图，方便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持以精美图片形式分享（如Twitter/Facebook帖子）或以链接形式分享（如聊天或论坛）。
  * [Blynk](https://blynk.io) — 提供API的SaaS平台，用于控制、构建和评估IoT设备。免费开发者计划支持5台设备，提供免费云存储和数据存储。同时提供移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器。
  * [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图片格式创建和分享代码片段。常用于在Twitter或博客文章中优雅地展示代码。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码生成精美的快照，方便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图，方便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排一次性或周期性webhook。免费计划允许5个临时调度。
  * [cron-job.org](https://cron-job.org) - 在线定时任务服务。无限任务免费。
  * [datelist.io](https://datelist.io) - 在线预约/日程安排系统。每月免费5次预约，包含1个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单的URL或域名转发工具。每月免费支持5个域名和20万次请求。
  * [Elementor](https://elementor.com) — WordPress网站构建器。免费计划包含40多个基础组件。
  * [Exif Editor](https://exifeditor.io/) — 即时在浏览器中查看、编辑、清除、分析图片/照片的元数据，包括GPS位置和其他元数据。
  * [Format Express](https://www.format-express.dev) - 在线即时格式化JSON/XML/SQL。
  * [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞管理解决方案。
  * [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加webhook支持，提供队列、退避重试和日志功能。免费计划每天100次投递，14天保留期，3个hook端点。
  * [Hosting Checker](https://hostingchecker.co) - 检查域名、网站或IP地址的ASN、ISP、位置等托管信息。还包括多种托管和DNS相关工具。
  * [http2.pro](https://http2.pro) — HTTP/2协议就绪测试和客户端HTTP/2支持检测API。
  * [kandi](https://kandi.openweaver.com/) — 加速应用开发：通过代码片段和开源库复用快速构建自定义函数、用例和完整应用。
  * [Base64解码/编码工具](https://devpal.co/base64-decode/) — 在线免费的数据解码和编码工具。
  * [newreleases.io](https://newreleases.io/) - 通过邮件、Slack、Telegram、Discord和自定义webhook接收GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo和Docker Hub的新版本通知。
  * [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的EXIF数据，包括GPS位置和元数据。
  * [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理PDF模板，通过API动态生成并下载PDF。每月免费300份文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) — 通过扩展从代码片段和VSCode创建美观、可定制的截图。
  * [QuickType.io](https://quicktype.io/) - 快速从JSON、Schema和GraphQL自动生成模型/类/类型/接口和序列化器，支持多种编程语言。将JSON转换为任何语言中类型安全的优雅代码。
  * [RandomKeygen](https://randomkeygen.com/) - 免费移动端工具，提供多种随机生成的密钥和密码，用于保护应用、服务或设备的安全。
  * [ray.so](https://ray.so/) - 为代码片段创建精美的图片。
  * [readme.com](https://readme.com/) — 轻松创建美观的文档，开源项目免费。
  * [redirection.io](https://redirection.io/) — 面向企业、营销和SEO的HTTP重定向管理SaaS工具。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理HTTPS重定向。免费计划包括10个来源和每月10万次点击。
  * [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET、POST、PUT、DELETE和HEAD等常用方法。包含头部和令牌认证功能，提供基本登录系统保存请求。
  * [Smartcar API](https://smartcar.com) - 车辆API，支持定位、获取油箱/电池电量、里程表、解锁/锁门等功能。
  * [snappify](https://snappify.com) - 帮助开发者创建惊艳的视觉效果。从精美的代码片段到完整的技术演示。免费计划支持同时3个快照，无限下载和每月5次AI代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的订阅源，支持导出和分析。免费版功能较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费版每份调查仅限10个问题和100个回复。
  * [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话应用。支持全渠道部署：从网站（实时聊天组件）到WhatsApp。免费计划包含无限机器人。
  * [Versionfeeds](https://versionfeeds.com) — 为你喜爱的软件生成自定义RSS订阅源。将编程语言、库或工具的最新版本集中在一个订阅源中。（前3个订阅源免费）
  * [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
  * [Webacus](https://webacus.dev) — 提供多种免费开发者工具，支持编码、解码和数据处理。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需技术支持及永久设备访问（每日免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包。
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源。
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材。
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画。
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库。
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供大量教程和调色板资源。
* [ArtStation](https://www.artstation.com/) — 免费/付费2D、3D资源与音频、图标、瓦片集、游戏套件的市场平台，也可用于作品集展示。
* [Rive](https://rive.app/community/) — 社区资源库，支持通过免费计划自主创建游戏素材。
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型及PBR材质纹理资源。
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的免费2D、3D、音频和UI游戏资源。
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（支持多分辨率）、模型、HDR贴图和笔刷，提供Blender等软件的免费导出插件。
* [Freesound](https://freesound.org/) — 采用不同CC协议的免费协作音效库。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供公共CA签发的`*.localhost.direct`通配符SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [GitHub开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）自动续期
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试与可视化工具
* [RedHat开发者计划](https://developers.redhat.com) — 开发者专属的Red Hat产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书参考
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器及数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量、现代化、专业易用的免费管理后台模板/HTML主题/UI套件，加速应用开发
* [Web性能检测](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev工具集](https://smalldev.tools/) — 开发者多功能工具：编解码/代码压缩美化/生成测试数据（JSON/CSV等），界面友好
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供愉悦的数据导入体验。免信用卡免费开始使用，支持创建无限导入器，文件上限100MB
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集：水印生成/屏幕录制/编解码/加密/代码格式化等，完全免费不上传云端
* [IT工具集](it-tools.tech) - 面向开发者和IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具：Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等
* [正则101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）
* [Glob模式测试器](https://globster.xyz/) — 设计与测试glob模式的平台，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无忧MySQL备份恢复工具，无需代码即可远程恢复
* [360转换器](https://www.360converter.com/) - 免费转换工具：视频转文字/音频转文字/语音转文字/实时音频转文字/YouTube视频转文字/添加视频字幕
* [最佳二维码](https://qrcode.best/) - 13种模板的定制二维码生成器，完全隐私保护，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升网站排名，免费版支持每月手动发布1篇
* [PageTools](https://pagetools.co/) - 永久免费的AI工具套件：一键生成网站政策/社交媒体简介/网页内容
* [MySQL可视化解释](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/容器/编程/DevOps/网络）
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具，每月10张免费发票额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**