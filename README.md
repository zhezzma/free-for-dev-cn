# free-for.dev

如今，开发者和开源作者虽然能享受众多提供免费层级的服务，但要全面了解这些选项仍需耗费时间进行调研。

以下是一份涵盖各类软件（SaaS、PaaS、IaaS等）及其他提供免费开发者层级的服务清单。

本清单特别聚焦于基础设施开发者（系统管理员、DevOps从业者等）可能用到的实用工具。我们虽推崇所有免费服务，但仍需保持主题相关性。界限有时较为模糊，因此这份清单带有主观判断——若未采纳您的贡献建议，还请见谅。

这份清单汇集了1600多位开发者提交的Pull Request、评审意见、创意和实际成果。您也可以通过提交[Pull Request](https://github.com/ripienaar/free-for-dev)来协助添加新服务，或移除已变更或停服的项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限"即服务"类产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用版）。若采用时间计量，免费期至少需持续一年。我们还会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层的服务不予收录。

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
  * [Flutter相关与免Mac构建iOS应用](#Flutter相关与免Mac构建iOS应用)
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
    * Cloud Firestore - 1GB存储空间，每天5万次读取、2万次写入和2万次删除操作
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（除中国和澳大利亚）网络出口流量
    * Cloud Storage - 5GB存储空间，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux Shell/主IDE，5GB持久化存储，每周限用60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1GB北美网络出口流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储空间，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebook开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

* [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月1万次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出口流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份存储（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，2万次Get请求和2千次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000封邮件（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

* [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1台B1S Linux VM和1台B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每天60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟数（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限次数调用
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，免费支持1万份文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2台基于AMD的计算VM，每台1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可组成1台或最多4台VM
       - [空闲实例将被回收](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿数据点采集，10亿数据点检索
    * 带宽 - 每月10TB出口流量，x64 VM限速50Mbps，ARM VM限速500Mbps*核心数
    * 公网IP - 2个IPv4（VM用），1个IPv4（负载均衡器用）
    * 通知 - 每月100万次投递选项，1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万数据点
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
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），提供从构建、部署到扩展应用所需的一切功能，让您无需操心"服务器事务"，可在任意云平台运行
* [Pulumi](https://www.pulumi.com/) — 现代化基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于优化Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI、OPA集成及分层配置模型。无SSO附加费用，所有功能开放。每月免费提供50次运行额度
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限制部署静态站点、网络服务和环境，每月提供20次包含预览和自动部署的免费任务执行额度

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公共及私有Git仓库，提供CI/CD流水线功能  
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共与私有Fossil代码仓库  
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB存储空间和两名协作者  
* [Codeberg](https://codeberg.org/) — 免费开源项目可享无限量公共/私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)实现CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)支持翻译托管。另含软件包/容器托管、项目管理及问题追踪功能  
* [GitGud](https://gitgud.io) — 无限量公共及私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD  
* [GitHub](https://github.com/) — 无限量公共仓库与私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理及AI编程助手  
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限量公共/私有Git仓库，含CI/CD、静态托管、容器注册表、项目管理及问题追踪  
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的代码托管平台，含CI、静态页面、项目页面及问题追踪  
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制  
* [ionicframework.com](https://ionicframework.com/appflow) — Ionic应用开发仓库与工具集，含专属Ionic仓库  
* [NotABug](https://notabug.org) — 基于Git的自由许可证项目协作平台  
* [OSDN](https://osdn.net/) — 面向开源开发者的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库  
* [Pagure.io](https://pagure.io) — 基于Git的FOSS许可证项目协作平台  
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git/Mercurial/SVN仓库  
* [pijul.com](https://pijul.com/) — 无限量免费开源的分布式版本控制系统。其独特优势在于基于严谨的补丁理论，易学易用，可解决git/hg/svn/darcs的诸多问题  
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源及非营利组织免费  
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/Subversion）含50MB存储空间  
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管，支持无限量公共/私有仓库  
* [savannah.gnu.org](https://savannah.gnu.org/) — GNU项目专属的自由软件开发协作管理系统  
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 非GNU项目的自由软件开发协作管理系统  

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets表格转化为强大API，快速开发原型、网站、应用等。免费版每月提供500次请求。
* [IP.City](https://ip.city) — 每日100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 多功能API套件，包含IP地理定位、性别检测、邮箱验证等服务。
* [Apify](https://www.apify.com/) — 网页抓取与自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制方案。免费计划每月含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档，无需CSS/HTML。免费版每月50张图片和3个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面监控和理解API及后端运行状况的工具集，含自动API合约验证与监控。免费版支持每月2万次请求。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高质量API。免费计划每月提供50个API令牌。
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，监控模型并诊断数据质量与性能偏差等问题。免费支持2个模型。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。免费版每日50次请求，含公开看板（任何持有链接者均可查看提交与响应）。
* [bigml.com](https://bigml.com/) — 托管机器学习算法。开发阶段任务无限制，单任务数据上限16MB。
* [Browse AI](https://www.browse.ai) — 网页数据提取与监控。免费版每月50积分。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网页访问、图像/PDF生成等。免费版每月1千次请求。
* [Calendarific](https://calendarific.com) - 覆盖200+国家的企业级公共假期API服务。免费计划每月1,000次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和分类数据的GraphQL API。免费版每月100次调用。
* [Clarifai](https://www.clarifai.com) — 自定义人脸识别与检测的图像API，可训练AI模型。免费版每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 多功能API平台，含文档转换、病毒扫描等服务库，每月800次调用。
* [Colaboratory](https://colab.research.google.com) — 基于网页的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [Collect2](https://collect2.com) — 创建API端点以测试、自动化及连接Webhook。免费版支持2个数据集、2000条记录、1个转发器和1个警报。
* [CometML](https://www.comet.com/site/) - 涵盖从训练到生产的MLOps平台，支持实验跟踪、模型生产管理、注册表及完整数据溯源。面向个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，支持从前端构建、下单及管理订单。开发者计划免费提供每月100笔订单和最多1,000个SKU。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频及电子书。提供REST API及Node.js/PHP/Python库。付费版支持50GB文件，免费版有文件大小和每日转换次数限制。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮编等信息的API微服务。免费版每日100次请求。
* [Coupler](https://www.coupler.io/) - 应用间数据同步工具，可创建实时仪表盘、转换数值及备份数据。免费版支持无限用户、每月100次运行（1000行数据）及无限集成。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖拽编辑器和简单API从模板自动生成PDF。免费版每月100份PDF和3个模板。
* [CurlHub](https://curlhub.io) — API调用检查与调试代理服务。免费版每月1万次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用实时货币数据API。免费版每月5,000次调用。
* [Cube](https://cube.dev/) - 帮助开发者从现代数据存储中组织并交付数据。Cube Cloud免费版每月支持1GB数据传输。
* [Data Dead Drop](https://datadeaddrop.com) - 简易免费文件分享，数据访问后自毁。支持浏览器或命令行客户端上传下载。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable与任意API。免费版每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具。免费版每月2万条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。每月10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Chrome/Edge），从网页提取数据为CSV/Excel。免费版每月500页。
* [Datapane](https://datapane.com) - 通过API构建交互式报告，或将Python脚本/Jupyter Notebook部署为自助工具。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每日每IP 1千次请求。CC-BY 4.0许可的精简数据库同样免费。
* [DB Designer](https://www.dbdesigner.net/) — 云端数据库模式设计工具。免费版支持2个数据库模型，每个模型10张表。
* [DeepAR](https://developer.deepar.ai) — 跨平台增强现实人脸滤镜SDK。免费版支持10月活用户(MAU)和4张人脸跟踪。
* [Deepnote](https://deepnote.com) - 新型数据科学笔记本，兼容Jupyter并支持云端实时协作。免费版含无限个人项目、750小时标准硬件及3人团队编辑。
* [Diggernaut](https://www.diggernaut.com/) — 云端网页抓取平台，可将网站转为数据集或API。免费版每月5千页请求。
* [Disease.sh](https://disease.sh/) — 免费API，提供准确的新冠疫情数据供应用开发。
* [Doczilla](https://www.doczilla.app/) — 通过HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费版每月250份文档。

  * [drawDB](https://drawdb.app/) — 免费开源的在线数据库图表编辑器，无需注册。
  * [dreamfactory.com](https://dreamfactory.com/) — 为移动端、网页及物联网应用提供的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成包含实时文档和用户管理的完整REST API平台。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF文档生成API。免费计划每月允许50次API调用并可使用模板库。
  * [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台。可视化任意计算图。开发者每月可免费进行30次调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费版每月250页，用户不限量，支持三个模板。
  * [Fern](https://buildwithfern.com) - 通过API定义生成主流语言SDK及API参考文档网页。支持添加Markdown页面并通过Fern托管完整文档方案。全面兼容OpenAPI。
  * [file.coffee](https://file.coffee/) - 单文件存储上限15MB（注册用户30MB）的平台。
  * [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划每日允许300次请求。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API，根据订单参数识别所有潜在欺诈特征。免费Micro计划每月处理500笔交易。
  * [Geekflare API](https://geekflare.com/api) - 提供网页截图、站点审计、TLS扫描、DNS查询、TTFB测试等功能。免费版含3,000次API请求额度。
  * [GeoCod](https://geocod.xyz) — 免费地理编码API：将邮政地址转为地理坐标，或反向地理编码。
  * [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置服务。免费API每月500次查询。
  * [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，永久免费计划每月60,000次请求，适合爱好者。
  * [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图片和5个模板。
  * [GoodData](https://www.gooddata.com/) - 数据即服务，创建交互式仪表板。免费版含5个工作区和100MB/工作区。
  * [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作平台。社区版免费支持3名作者和5个项目，每位作者享有4GB内存的计算配置。
  * [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，简化产品webhook功能实现。免费版每月派发3,000个事件并保留7天历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
  * [Hybiscus](https://hybiscus.dev/) - 通过声明式API构建PDF报告。免费层每月100份单页报告，支持调色板和字体定制。
  * [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（如Power BI/Power Query）访问70多个(云)平台如Exact Online、Twinfield等。含数据复制交换功能。开发者与实施顾问免费，特定平台有数据量限制。
  * [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
  * [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费计划每月150次请求。
  * [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费计划每月30k请求（每日1k上限）。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，免费计划每月20,000次请求。
  * [IPLocate](https://www.iplocate.io) — IP地理定位API，每日免费1,000次请求。含代理/VPN/主机检测、ASN数据、IP关联企业等。另提供CSV或GeoIP兼容MMDB格式的免费IP-国家/ASN数据库下载。
  * [IP2Location](https://www.ip2location.com) — 免费增值IP地理定位服务。LITE数据库可免费下载至服务器本地查询城市、坐标和ISP信息。
  * [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP地理定位API。获取城市、坐标、ISP等数据。免费计划每月30k积分。同时提供免费WHOIS和托管域名查询，查看域名注册详情及IP关联域名。付费解锁更多功能。
  * [ipapi](https://ipapi.co/) - Kloudend公司出品的IP地址定位API，基于AWS构建，受财富500强信赖。免注册免费层每月30k次查询（每日1k）。
  * [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP地址API，具备顶级主机检测能力。免注册免费查询1,000次。
  * [IPinfo](https://ipinfo.io/) — 快速精准的免费IP数据API（每月50k次）。提供地理位置、企业、运营商、IP范围、域名、滥用联系人等API。所有付费API均可免费试用。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代网页提供快速精准的免费API（无限或每月10K-50K次），涵盖IP定位、反向地理编码、网络洞察、邮箱/手机验证、客户端信息等。
  * [IPTrace](https://iptrace.io) — 极简API，为业务提供可靠的IP地理定位数据。
  * [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API。
  * [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP。免费层无需注册，支持CORS通过浏览器JS直接获取数据。适用于监控客户端与服务器IP变更的服务。请求不限量。
  * [JSON Serve](https://jsonserve.com/) — 帮助开发者存储JSON对象并作为REST API使用的免费服务。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，自定义HTTP状态码、头部和响应体。
  * [konghq.com](https://konghq.com/) — API市场与强大的公私API工具。免费版功能如监控、告警和支持受限。
  * [Kreya](https://kreya.app) — 免费gRPC GUI客户端，用于调用测试gRPC API。支持通过服务反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过优质数据提升机器学习模型。免费使用最多1000样本的数据集。

  * [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月提供300次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融数据的实时和历史数据。"永久免费"层级每天允许100次免费API请求。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API方案。覆盖全球的精准天气预报、历史数据和天气监测解决方案。
* [Meteosource天气API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预报通过机器学习结合多种天气模型实现更高精度。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为元标签标准化、精美链接预览、爬取能力或截图服务等数据。每天100次免费请求。
* [Mindee](https://developers.mindee.com/docs) – 基于OCR技术和API优先的平台，通过计算机视觉和机器学习识别关键信息，标准化文档处理流程。免费层每月250页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式演练场。1位编辑者免费。
* [monkeylearn.com](https://monkeylearn.com/) — 机器学习文本分析，每月300次免费查询。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的原型设计/测试/学习工具。免费版支持1个项目/每项目4个资源。
* [Mockfly](https://www.mockfly.dev/) — 可信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的GraphQL和REST API模拟工具。简单REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，在云端选择要模拟的端点并检查流量。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [reqres.in](https://reqres.in) - 可即时响应AJAX请求的免费托管REST-API。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和docker容器应用。
* [Multi-Exit IP地址检查器](https://ip.alstra.ca/) — 免费工具，检查多节点出口IP地址，了解IP在不同地区的呈现方式。适用于测试Control D等基于规则的DNS分流工具。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具，即时查找可用标准价域名。每日免费查询。
* [neptune.ai](https://neptune.ai/) - 记录、存储、展示、组织、比较和查询MLOps元数据。个人免费：1成员，100GB元数据存储，200小时/月监控。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每月3,000次免费查询。
* [GoCardless](https://gocardless.com/) — 免费开放银行数据API。PSD2标准。在欧盟和英国连接2300+银行与应用/软件。
* [Nyckel](https://www.nyckel.com) — 训练、部署和调用图像文本ML模型。免费训练多达5,000条数据。每月1,000次免费模型调用。
* [Observable](https://observablehq.com/) — 数据创作、协作学习平台。免费版：无限笔记本，无限发布，每笔记本5位编辑。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件返回JSON文本结果的OCR API。每月2.5万次免费请求。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层每月70次API/URL生成和100次表单生成。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化创建Open API 3定义的免费工具。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据并转化为API，5个项目免费。
* [Parseur](https://parseur.com) — 每月20次免费额度：从PDF和邮件提取数据。AI驱动。完整API访问。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成。免费版含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postbacks](https://postbacks.io/) - 延迟HTTP回调请求。注册即享8,000次免费请求。
* [Postman](https://postman.com) — API开发协作平台，简化工作流。Postman应用永久免费，云功能在限制内永久免费。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL设计与测试。
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化平台。所有计划每月包含2万次免费运行，满足多数小型企业ETL需求。
* [Preset Cloud](https://preset.io/) - Apache Superset托管服务。5人以下团队永久免费，含无限仪表盘图表、无代码图表构建器和协作SQL编辑器。
* [PromptLeo](https://promptleo.com/) - 面向创作者和开发者的提示工程平台。免费计划提供1个提示表单、1个API端点和每月30次生成。
* [PromptLoop](https://www.promptloop.com/) - AI网页爬取工具，比人工研究快4倍。每月首1,000次免费调用。
* [Proxed AI](https://proxed.ai/) - iOS安全AI API解决方案。无需SDK，仅需更改API URL。每月1,000次免费调用。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取网站。自动解决验证码和防封禁。首1,000次调用免费。
* [Public-Apis Github仓库](https://github.com/public-apis/public-apis) — 免费公共API列表。

  * [QuickMocker](https://quickmocker.com/) — 在自有子域名下管理在线模拟API端点，将请求转发至本地URL以开发测试webhooks，支持URL路径正则表达式匹配和多HTTP方法，可设置端点优先级，提供100多种响应模板短代码（动态或模拟值），支持从JSON格式的OpenAPI（Swagger）规范导入，具备请求代理功能，可按IP地址和授权头限制端点访问。免费账户提供一个随机子域名、10个端点、5个正则URL路径、每个端点50个短代码、每日100次请求和50条请求历史记录。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者通过趣味编程挑战（含解答！）和交互式示例连接数千个API进行开发。
* [RequestBin.com](https://requestbin.com) — 创建免费HTTP请求接收端点，所有发送至该端点的请求及其载荷和头部信息将被记录，便于观察webhooks等服务调用情况。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建部署定制计算机视觉模型。免费版包含最多1,000张源图像。
* [ROBOHASH](https://robohash.org/) - 根据任意文本生成独特炫酷图像的在线服务。
* [SaturnCloud](https://saturncloud.io/) - 数据科学云环境，支持运行Jupyter笔记本和Dask集群。每月免费提供30小时计算时长和3小时Dask集群。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP爬虫代理API。匿名爬取数据，无需担心限制、封锁或验证码。每月前100次成功抓取免费（含JavaScript渲染），联系客服可获更多额度。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome爬虫API与免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。提供免费套餐。
* [ScraperBox](https://scraperbox.com/) — 使用真实Chrome浏览器和代理轮换的隐形爬虫API。通过简单API调用抓取任意网页。免费版每月1,000次请求。
* [ScrapingDog](https://scrapingdog.com/) — 该服务通过管理数百万代理和浏览器自动处理验证码，单次API调用即可获取任何网页HTML。包含Chrome & Firefox爬虫扩展及即时爬取工具。提供免费套餐。
* [scrapinghub.com](https://scrapinghub.com) — 带可视化界面和插件的数据爬取平台。免费版支持共享服务器无限爬取。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费版含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析记录数据。免费轻量版支持1个数据源、最多100张表和10个用户。
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。提供免费方案。
* [Shipyard](https://www.shipyardapp.com) — 云端低代码数据编排平台。混合使用低代码模板与自定义代码（Python/Node.js/Bash/SQL）。开发者免费版每月提供10小时运行时，足够自动化多个工作流。
* [shrtcode API](https://shrtco.de/docs) - 无需认证且无请求限制的免费短链接API。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON结果。免费版每月100次成功调用。
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供省时省力的开发工具。免费版含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV即可通过API快速访问数据加速开发。免费版含2个API和2,500次月度调用，无需信用卡。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含格式化校验器、正则测试器、假数据生成器及交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS。免费版提供设计、模拟和文档工具。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送50,000条消息/月。
* [TemplateTo](https://templateto.com) - 通过拖拽编辑器和简单API从模板自动生成PDF/TXT文档。免费版每月450份PDF和3个模板。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。具备高级日志聚合、可观测性、文档和调试功能。免费版包含全部功能，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种法币与加密货币的实时汇率API。免费版无调用限制，适合开发者和金融应用。
* [Webhook Store](https://www.openwebhook.io) - 第三方webhook存储及本地调试工具（类似ngrok）。开源可自建。提供免费个人域名*username*.github.webhook.store和公共域名*anything*.webhook.store。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验追踪、数据集版本控制和模型管理加速模型开发。个人项目免费版含100GB存储。
* [wit.ai](https://wit.ai/) — 面向开发者的自然语言处理平台。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识库算法。
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月30,000次调用。
* [ZenRows](https://www.zenrows.com/) — 绕过反爬机制的网页抓取API与代理服务，支持JavaScript渲染、轮换代理和地理定位。免费版1,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页抓取API，定价透明。每月1,000次免费调用，学生和非营利组织可获额外额度。
* [IPQuery](https://ipquery.io) — 开发者专属无限次IP查询API，无速率限制或费用。
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费版同一IP限45次/分钟。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易爬虫API。每月2,000次免费调用。
* [Zipcodebase](https://zipcodebase.com) - 全球邮政编码查询API。每月10,000次免费请求。
* [huggingface.co](https://huggingface.co) - 为PyTorch/TensorFlow/JAX构建、训练和部署NLP模型。免费版每月30,000输入字符。
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月500次免费请求。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月10万次免费请求。

  * [Query.me](https://query.me) - 支持协作的数据笔记本，可执行类脚本操作，并通过SQL、API及Slack、邮件等自定义模块实现数据收发。小团队免费使用。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费版每月限额25,000个token（约10次PR）。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证服务。每月1万次免费请求。
* [OpenWeb Ninja](https://www.openwebninja.com/) - 功能全面的实时搜索引擎结果页(SERP)与公共数据API：涵盖Google搜索、购物、招聘、图片、Lens、新闻、Google地图商家/地点、评价、照片，以及网站邮箱与社交联系人爬取、亚马逊、Yelp等。所有API均提供含100-200次免费月请求的免费层级。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，支持研究成果结构化整理。免费层每月1000次请求，无需绑定信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1000次免费请求。可查询IP地址所属国家、城市、区域等信息。
* [Composio](https://composio.dev/) - AI智能体与LLM集成平台，支持连接200+工具构建智能互联网。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时天气、逐小时/每日预报及天气警报。通过AI模型与机器学习系统整合多源气象数据提升预报精度。免费层每月1万次API调用。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持快速设计、构建并部署边缘API。可为任意API添加密钥认证、速率限制、开发者文档与商业化功能。基于OpenAPI标准，完全支持Web标准API与Typescript编程。免费版提供10个项目、不限量生产环境、250个API密钥、10万次月请求及1GB出口流量。
* [Amazon SageMaker](https://studiolab.sagemaker.aws/) — 云端机器学习平台，提供JupyterLab与终端访问。免费层包含每日8小时CPU（单次最长4小时）或4小时GPU资源。
* [FormatJSONOnline.com](https://formatjsononline.com) - 基于浏览器的免费JSON数据格式化、校验、对比与压缩工具。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式的制品仓库，包括Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费版每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT等构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单安全的集中式仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费套餐且开源免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 易用的Maven、RPM、DEB、PyPi、NPM和RubyGem包托管服务（含免费套餐）。
  * [repsy.io](https://repsy.io) — 提供1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用。免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包和Docker镜像的私有云仓库，开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费版提供10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 基于云的免费代码片段管理器，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 团队专属聊天应用。公开群组免费使用，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能匹配最佳会议时间。操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与排期工具。免费版支持每位用户连接1个日历和无限次会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Telegram](https://telegram.org/) — 为所有人提供快速可靠的消息与通话服务。大容量群组、用户名系统、桌面客户端和强大文件分享功能特别适合商业用户和小型团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供所有基础工具，支持每个工具自动保存一条记录，标准处理速度及社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流协作平台。集成IDE配对编程、终端共享、语音视频及屏幕共享功能，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月包含10,000分钟音视频时长
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具。免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议方式。通过可定制虚拟空间实现真实社区互动，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，无功能限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交和Pull Request的每日报告工具。含推送可视化、同伴认可系统和自定义提醒功能，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具。支持无限公开/私密房间，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但专注Markdown，免费版笔记数量无限制，但[协作人数](https://hackmd.io/pricing)和模板功能受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能通讯平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意提交与投票平台，免费支持25人社区
* [Igloo](https://www.igloosoftware.com/) — 企业内部门户，支持文档、博客、日历等共享，10人以下免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/私聊中输入/meet指令即可发起Google会议，无任何功能限制
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约共享资源（如会议室/开发环境/服务器等），免费版支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈意见
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享功能和通行密钥的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的可视化反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频通话与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的跨设备协作白板，企业级安全标准，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作笔记应用，作为全能工作空间支持多平台和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库，免费版含核心功能、50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编辑器的技术面试平台，支持浏览器端编译运行代码，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队工时表追踪应用，免费版支持10人以下的时间记录与报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub Pull Requests添加可视化审查功能，无需部署网站。免费版每月10个页面和100MB总存储
* [Pendulums](https://pendulums.io/) - 配备直观界面和数据统计的免费时间管理工具
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史
* [Raindrop.io](https://raindrop.io) - 跨平台加密书签工具，支持无限书签与协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器与协作者共享屏幕
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 不限用户数量的免费版本（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页面的聚合监控平台，可追踪上游服务提供商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作应用，适用于头脑风暴、内容管理和笔记。免费版支持3个画板、不限用户数和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载问题。提供永久免费的个人计划
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持看板泳道和完整Scrum实现，集成时间追踪功能。免费支持5名用户和3个项目组合
* [Teamplify](https://teamplify.com) - 通过团队分析智能每日站会优化开发流程。包含完整的远程团队休假管理功能。5人以下小团队免费
* [Tefter](https://tefter.io) - 书签管理应用，深度集成Slack。开源团队免费使用
* [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录
* [TimeCamp](https://www.timecamp.com/) - 不限用户的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理系统
* [Huly](https://huly.io/) - 全能项目管理平台（替代Linear/Jira/Slack/Notion/Motion） - 不限用户数，每个工作区10GB存储和10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一站式项目管理应用
* [twist.com](https://twist.com) — 异步友好的团队沟通应用，保持对话条理清晰。提供免费无限量方案，合格团队可享折扣
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，支持智能箭头、吸附对齐、便利贴和SVG导出。多人协作编辑模式，提供官方VS Code扩展
* [BookmarkOS.com](https://bookmarkos.com) - 多功能书签/标签/任务管理器，支持文件夹协作的自定义在线桌面
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织额外赠送Nano套餐
* [whereby.com](https://whereby.com/) — 一键发起视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，快速将Python/Typescript脚本转化为生产级自动化流程和内部应用。免费用户最多可创建/加入3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台。单次点击上传视频，支持录制/管理/分享等功能。免费版每月10个视频/1GB存储/10GB带宽
* [userforge.com](https://userforge.com/) - 互联在线的用户画像/用户故事/场景映射工具。保持设计与开发同步，免费支持3个画像和2名协作者
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度且使用Wistia品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务。不限分享次数，单文件最大5GB
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。超过5GB的文件采用点对点传输
* [zoom.us](https://zoom.us/) — 安全视频/网络会议工具。免费会议限时40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版包含1万条可搜索历史消息和5GB文件存储，并提供可自托管的开源版本
* [robocorp.com](https://robocorp.com) - 开源自动化运维技术栈。免费体验云功能并实现简单自动化：每月240分钟机器人运行时长/10次助手执行/100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代方案。小团队免费计划包含完整消息历史、无限私聊、1个群组对话和1GB文件存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具。永久免费支持10人小团队，包含不限量公私对话、可搜索历史、无限语音通话/语音消息、10个集成和20GB团队存储
* [ruttl.com](https://ruttl.com/) — 全能数字反馈工具，支持网站/PDF/图片的审阅批注
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台。免费版支持无限频道/剧本/看板/用户和10GB存储
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，直接在线上网站/应用/图片/PDF/设计文件上进行开发协作
* [Pullflow](https://pullflow.com) — 集成GitHub/Slack/VS Code的AI增强代码审查协作平台
* [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费版支持100人50分钟会议
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（产品文档/内部知识库/API文档等）。提供开发者免费计划
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易代码粘贴站

  * [腾讯实时音视频（Tencent RTC）](https://trtc.io/) —— 腾讯实时通信（TRTC）提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板服务，支持客户端加密、多标签粘贴、API接口、语法高亮编辑器等功能。
* [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟器、画布或变通方案。免费版完全可用。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。开发者免费套餐可用，同时提供免费开发工具（如 Acquia Dev Desktop）
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API，免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 与 API 工具包，开发者免费个人计划
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5万次/月 API 调用
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐，基于 GraphQL 的 CMS，基础套餐含 10万次/月 API 调用
* [Directus](https://directus.io) — 开源无头 CMS，完全免费的无限制平台，支持本地或云端管理数字资产与数据库内容
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言的交付/管理 API 及自定义元素支持
* [Prismic](https://www.prismic.io/) — 无头 CMS，社区计划为单个用户提供无限 API 调用、文档、自定义类型、资源和多语言支持。开源项目可申请更大免费套餐
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，免费套餐包含无限项目、3 个非管理员用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源存储
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，开发者计划提供 3 个用户、500 个内容项、3 种内置角色、30+ 内容类型及完整的 REST API 支持
* [TinaCMS](https://tina.io/) — 开源 Git 驱动的无头 CMS（替代 Forestry.io），支持 Markdown/MDX/JSON，基础套餐免费支持 2 个用户
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 现代化框架，可对接任意 CMS/API/数据库构建无头网站，提升流量转化与商业价值
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐，GraphQL 优先的 API，助力从传统方案迁移至原生无头 CMS
* [Squidex](https://squidex.io/) - 小型项目免费套餐，API/GraphQL 优先的开源方案，采用事件溯源架构（自动记录每次变更）
* [InstaWP](https://instawp.com/) - 秒级 WordPress 站点部署，免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，免费社区版包含管理 API、可视化编辑器、10 个数据源、多语言支持及 250GB/月流量
* [WPJack](https://wpjack.com) - 5 分钟内在任意云平台部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务，无时间限制

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码和无限量的API与路由，实现深度集成。免费版包含3个项目、5张数据表和Google插件支持。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。支持多种LLM选择（包括本地推理）、兼容主流IDE、覆盖所有热门编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（使用Starcoder 16b模型）。
* [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
* [Codeium](https://www.codeium.com/) — Codeium 是免费的AI驱动代码补全工具。支持20+编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并与所有主流独立IDE及网页版IDE集成。
* [Fern](https://buildwithfern.com) - 编写API定义并生成TypeScript、Python、Java、Go等流行语言的SDK/客户端库。完整支持OpenAPI。免费版最多可为20个端点生成代码。
* [Metalama](https://www.postsharp.net/metalama) - 仅限C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目免费使用，商业友好型免费版包含3个切面功能。
* [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的高速AI代码补全插件。免费版提供无限量的行内补全。
* [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习的洞察，帮助开发者更快构建更优质的软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0利用AI模型根据文本提示生成代码。基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，初始赠送1200积分，每月额外赠送200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，提供免费个人账户及100MB存储空间的单仓库
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，免费版仅限Vista系统下1024x768分辨率的MS IE 9浏览器进行3分钟会话
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共与私有仓库均无限免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码自动化审查工具，集成GitHub/Bitbucket/GitLab（含自托管版本）。除常规语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [CodeBeat](https://codebeat.co) — 多语言自动化代码审查平台，公共仓库永久免费，含Slack和邮件集成
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目及组织私有仓库（最多4名协作者）免费，学生和教育机构同样免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公共仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 根据开发者工作模式优先处理技术债务，可视化团队耦合度等组织因素，开源免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪工具，通过精准指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能、可访问性及安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷、安全漏洞、性能及API问题，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析工具，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析源码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动提供数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — Go语言包代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源码重构工具，支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器与中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续审查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub PR与提交差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目元数据徽章生成服务
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具集含代码验证与多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与深度分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的依赖库搜索与更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索引擎，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供代码片段管理、发现与分享功能，内置强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内于您的云上部署应用和基础设施。支持Kubernetes和Lambda环境中的自定义及第三方应用部署。免费层允许5个域名和2个用户无限次应用部署。
* [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD。每月200次免费构建，每次10分钟构建时间，支持2名团队成员。开源项目可获得45分钟构建时间、+1并发和无限团队规模。
* [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时间。测试分析免费开发者层包含每月10万次测试执行，开源项目可获更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 包含所有功能的免费托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。多资源类型、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟免费执行时间，无限协作者，私有项目30个并行任务，开源项目最高8万分钟构建时间。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建、1个环境、共享服务器、无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时间
* [codeship.com](https://codeship.com/) — 每月100次私有构建、5个私有项目，开源项目无限额
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时间）
* [drone](https://cloud.drone.io/) - Drone Cloud支持开发者在单一平台运行跨架构（包括x86和Arm 32/64位）的持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目CI。提供5GB内存和3核CPU的全栈预览环境。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，支持无限公开/私有仓库，最高2GB VM规格。
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.io) — GitHub工作流自动化与合并队列 — 公开GitHub仓库免费
* [Make](https://www.make.com/en) — 通过UI连接应用并自动化工作流的工具，支持众多应用和热门API。公开GitHub仓库免费，免费层含100MB空间、1000次操作和15分钟最小间隔。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续资源合规、SAML 2.0单点登录，公共工作池每月200分钟额度。
* [microtica.com](https://microtica.com/) - 提供预置基础设施组件的初创环境，免费在AWS上部署应用并支持生产负载。免费层包含1个环境（在您的AWS账户）、2个Kubernetes服务、每月100分钟构建时间和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化端到端测试分割加速单仓库CI。免费计划支持最多30名贡献者，包含15万点数的额度。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月提供3000分钟免费额度，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是面向Terraform、OpenTofu和Terragrunt等基础设施即代码（IaC）工具的编排管理平台。最多2名用户免费使用全部功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化，支持拉取请求驱动的工作流、通过自托管运行器实现项目隔离，以及有序操作的分层运行。最多3名用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 面向Web、原生移动和桌面应用的智能可视化验证工具。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户免费版每周有检查点限制。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接通过浏览器测试您的Android和iOS应用。免费版包含每月两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版完全免费，可在iOS和Android上无限次测试。
* [Argos](https://argos-ci.com) - 面向开发者的开源可视化测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能退化。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用自动化测试工具。易于学习且无需编码。可在本地计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分成本监控API和应用。基于"Monitoring as Code"工作流和Playwright。为开发者提供慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站可免费使用。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否针对给定域启用了CORS并识别差距。获取可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress测试运行器始终免费开源，无任何限制。Cypress仪表板对开源项目免费，最多支持5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外均为开源。每月免费创建5次测试，包含自愈脚本、邮件和可视化测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在问题影响客户前发现弱点。免费版支持在最多5台主机或容器上执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包含最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供适用于不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费可视化测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。通过记录API调用生成API端到端测试（KTests）和模拟/桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 在任何CI提供商上通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持最多10分钟测试文件，开源项目可享无限套餐。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、可视化、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费版每月模拟最多50个并发用户，持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 面向Storybook、Ladle、Histoire组件和Web应用的全方位可视化回归测试。团队成员不限，开源项目完全免费，每月7,000次快照。
* [octomind.dev](https://www.octomind.dev/) - 通过AI辅助测试用例生成自动创建、运行和维护Playwright UI测试
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、样式指南或组件库添加可视化测试。团队成员不限，演示应用和项目不限，每月5,000次快照。
* [preflight.com](https://preflight.com) - 无代码自动化Web测试。在浏览器中录制能适应UI变更的测试并在Windows机器上运行。可与CI/CD集成？免费套餐包含每月50次测试运行，含视频、HTML会话等。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费版包含所有核心功能，500MB附件空间，最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用自动化测试工具。支持原生应用、flutter、react-native、web、ionic等多种框架。免费版限iOS和Android各10个测试，但包含付费版大部分功能，包括无限次测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、录制含网络和控制台日志的会话。免费版最多创建10条规则。开源项目免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用的SEO学习资源和改进建议，适用于任何技术栈的网站。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen的跨浏览器测试平台。UI-licious让您像编写用户故事一样编写测试，其免费平台UI-licious Snippets允许在Chrome上无限制运行测试（无需注册），每次测试最长3分钟。发现错误？可复制测试专属URL向开发人员展示如何复现。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费版包含Jira集成、不限项目数、通过CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
* [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和通过GitHub将手动测试实现为代码的框架。[开源项目免费](https://github.com/marketplace/testspace-com)，每月450条结果。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成的工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量，提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限数量的URL并获取优化建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中遭入侵的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API垃圾邮件过滤器。免费计划每个域名每天可处理200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式。目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码、文件、目录或容器
* [crypteron.com](https://www.crypteron.com/) — 面向云环境的开发者友好型安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web应用，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制。开源支持自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java(Maven和Gradle)、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项
* [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django站点的安全漏洞。衍生自Pony Checkup项目
* [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步至各类云服务商。免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。杜绝通过Slack或邮件等不安全渠道共享.env文件，永不再丢失重要配置。免费支持最多3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复，杜绝源代码泄露。扫描Git仓库中350+种密钥和敏感文件——个人及25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
* [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源平台，管理团队成员及基础设施间的开发者密钥：从本地开发到第三方服务的生产环境全覆盖。最多5名开发者免费
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) - SSL证书到期管理及购买，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
* [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限数量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序及配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 快速检测任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人形式的自动化产品安全工程师，自动提交PR修复Java代码库漏洞。即将支持更多语言！
* [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目不限数量
* [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
* [ringcaptcha.com](https://ringcaptcha.com/) — 使用电话号码作为身份验证的工具，提供免费方案
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询额度[点击此处](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 发现并修复开源依赖项的已知安全漏洞。开源项目无限次测试与修复，私有项目每月限200次测试
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目免费无限制的SCA扫描。在发布前检测并修复安全威胁，通过简洁高效的方案保护项目
* [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，发现并修复生产环境前的安全漏洞。单个应用支持无限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描
* [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒及PHP服务器防火墙(WAF)。免费层用户可接收邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等。不限于HTTPS
* [threatconnect.com](https://threatconnect.com) — 威胁情报平台：专为刚开始学习网络威胁情报的研究人员、分析师和组织设计。最多3个用户免费
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费
* [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。最多250个用户的应用程序免费
* [Vulert](https://vulert.com) - Vulert持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费
* [Escape GraphQL Quickscan](https://escape.tech/) - 一键扫描GraphQL端点安全性。免费无需登录

  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。我们支持用户通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000名MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速实现无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100个月度活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100个用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥的认证方案。支持无限MAU的免费方案。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500名活跃用户/月，50个租户（最多5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费提供7,500名MAU的起步方案。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证，最快仅需数分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100名月度活跃用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个企业应用和5个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费的开发者账户包含所有安全功能，支持无限团队成员、200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于需要实时更新的微服务架构，提供无代码策略UI。免费额度包含1000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费方案支持1000名用户和10个SSO连接，基于包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费方案包含无限MAU、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费方案包含10,000名MAU、无限组织、5个SSO或SCIM连接以及1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟即可上手。可免费自托管，或选择包含1万名免费MAU的托管SaaS版本。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，可快速启动同时保持对用户体验的控制。免费支持5000名MAU。
* [Warrant](https://warrant.dev/) - 为企业级应用提供的托管式授权与访问控制服务。免费层包含100万次月度API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费支持2.5万次认证请求，包含OTP、无密码认证、策略等所有安全功能。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可服务任意规模企业客户。免费支持200名用户和1万封事务邮件（带"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，涵盖认证与授权。免费支持5000名MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。包含邮箱密码登录、社交账号认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 移动应用质量保障首选平台。免费版支持：单个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS & Android测试版应用分发服务，提供完全免费的无限下载、高速下载和无限上传。
* [Diawi](https://www.diawi.com) - 直接向设备部署iOS & Android应用。免费版包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS & Android应用。免费版支持：无限上传、私有链接（访客2天有效期/注册用户60天有效期）。
* [GetUpdraft](https://www.getupdraft.com) - 测试用移动应用分发平台。免费版包含：1个应用项目、3个应用版本、500MB存储空间、每月100次安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费版支持：5个应用、每月50次下载、最大文件100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例  
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可和25MB应用存储空间  
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理工具，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，免费无限量设备管理。免费版提供基础功能  
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署额度  
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理平台。免费支持1台服务器  
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理部署工具。免费支持1台服务器  
* [xcloud.host](https://xcloud.host) — 配备友好界面的服务器管理与部署平台。提供单台服务器免费套餐  
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器  

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐包含：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署
* [courier.com](https://www.courier.com/) - 统一推送、应用内消息、邮件、聊天、短信等多渠道通知API，含模板管理等功能。免费套餐每月包含10,000条消息
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，提供预构建的应用内收件箱和无代码模板编辑器。免费套餐每月包含10,000条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云端原生物联网消息代理服务，支持MQTT设备连接。永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) - 开发者通知基础设施，通过单次API调用实现应用内消息、邮件、短信、Slack和推送等多渠道发送。免费套餐每月包含10,000条消息
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知功能。免费套餐包含每月10,000条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) - 开源通知基础设施，提供统一管理邮件、短信、站内信、应用内消息和推送的组件与API。免费套餐包含每月30,000条通知（保留90天）
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持最多100个同时连接和每日200,000条消息
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持最多20个同时连接和每日100,000次事件
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务，覆盖全球及AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
* [pubnub.com](https://www.pubnub.com/) - 支持Swift/Kotlin/React的消息服务，每月100万次事务（每次事务可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通讯API服务，支持实时数据注入、视频布局、录制等功能，提供[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知服务，免费支持最多10,000订阅用户（推送次数不限）
* [httpSMS](https://httpsms.com) - 通过Android手机作为短信网关收发短信，免费套餐支持每月200条短信
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可即时获取的弹性Serverless MQTT代理，永久免费套餐含每月100万会话分钟数（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费套餐支持每日50条消息（限1台设备1个应用）
* [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知系统，支持事务通知、定时任务和互动消息的多渠道统一发送。免费套餐每月包含10,000条通知，支持摘要、批量发送、多通道、用户偏好等多节点工作流

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志，保留24小时  
* [logentries.com](https://logentries.com/) — 每月免费5GB日志，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志，保留7天  
* [logz.io](https://logz.io/) — 每日免费1GB日志，保留1天  
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储，日志保留15天，支持7天内检索。  
* [papertrailapp.com](https://papertrailapp.com/) — 48小时日志检索，7天归档，每月50MB额度  
* [sematext.com](https://sematext.com/logsene) — 每日免费500MB日志，保留7天  
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志，保留7天  
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志，保留3天  
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天。  
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目。  
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入，保留15天  

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [crowdin.com](https://crowdin.com/) — 开源项目无限量：支持无限项目、无限字符串和协作成员
* [gitlocalize.com](https://gitlocalize.com) - 公私仓库全免费，无使用限制
* [Lecto](https://lecto.ai/) - 含免费层的机器翻译API（30次免费请求/次限1000字符），已集成至Loco Translate WordPress插件
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，支持无限语言和贡献者，提供初创企业与开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，支持无限语言与项目
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，每项目支持10种语言和1000个可翻译资源
* [oneskyapp.com](https://www.oneskyapp.com/) — 限5用户免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串与语言，提供初创优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译量的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言与项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（限1万字符串），支持无限量自托管部署
* [Free PO editor](https://pofile.net/free-po-editor) — 完全免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI本地化工具（支持Web/移动端），可自带LLM或使用每月1万字的免费托管引擎

**[⬆️ 返回顶部](#目录)**

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) - 提供20个5分钟间隔的可用性监控器和可自定义状态页面（支持商业用途）。通过电子邮件和Telegram享受无限实时通知。无需信用卡即可开始使用。
* [Pingmeter.com](https://pingmeter.com/) - 5个10分钟间隔的可用性监控器。支持SSH、HTTP、HTTPS及自定义TCP端口监控。
* [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行。
* [appdynamics.com](https://www.appdynamics.com/) — 免费提供24小时指标监控，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js。
* [appneta.com](https://www.appneta.com/) — 免费版数据保留1小时。
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）。
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费计划。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个可用性监控器，无限制用户、仪表板和告警规则。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费计划包含1个用户、1万次API和网络检查/1.5千次浏览器检查运行。
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动扫描、API访问等。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与可用性监控。免费版含5个监控器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费。
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控器，推荐他人注册可获得更多。
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个可用性监控器，5分钟间隔。支持电子邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施支出。每月Google Cloud Platform消费不超过5,000美元免费。
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。免费版数据保留24小时。
* [fivenines.io](https://fivenines.io/) — 实时仪表板和告警的Linux服务器监控 — 永久免费支持最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，集成了Grafana的指标和日志。免费版：3个用户、10个仪表板、100条告警，Prometheus和Graphite指标存储（1万条序列，14天保留），Loki日志存储（50GB日志，14天保留）。
* [healthchecks.io](https://healthchecks.io) — 监控定时任务和后台任务。免费支持最多20个检查。
* [Hydrozen.io](https://hydrozen.io) — 可用性监控与状态页面，免费计划：10个可用性监控器、5个心跳监控器、1个域名监控器和1个状态页面。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费套餐。
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费版支持500个指标和3小时数据可见性。
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试。
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费支持最多5个监控器。
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（最多100页）免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 有限制的免费负载测试工具。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源的实时指标收集工具。该产品正在发展中，也可在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师打造更完美的软件。从单体应用到无服务器架构，您可以检测所有内容，然后分析、排查并优化整个软件堆栈。免费层提供每月100GB数据摄入、1个全权限用户和无限基础用户。
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控您的应用和堆栈，助您大规模监控和诊断问题。开发者社区永久免费计划支持最多100万条日志事件监控、2台主机的基础设施监控和应用性能监控。
* [nixstats.com](https://nixstats.com) - 免费支持1台服务器。包含电子邮件通知、公共状态页面、60秒间隔等功能。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的可用性监控、定时任务监控及状态页面。免费层包含5个3分钟间隔的检查，支持Slack、Discord和电子邮件告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国和美国服务器的DNS结果与ASN信息识别DNS污染。
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警和值班管理工具，适用于7x24服务。最多5个用户免费。
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包含告警、强大可视化功能和基础报告。免费支持最多100个传感器。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，免费支持最多6个每日检查的监控器。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，支持告警和指标。
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（集成Pagerduty、OpsGenie）。免费支持1个团队（一个团队指一个值班组）。
* [pagertree.com](https://pagertree.com/) - 简洁的告警和值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 可用性监控免费支持最多10万次事件，项目数量和状态页面无限制。
* [pingbreak.com](https://pingbreak.com/) — 现代可用性监控服务。无限量URL检查，通过Discord、Slack或电子邮件接收宕机通知。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页面平台。免费层包含1个可自定义的公共状态页面（SSL子域名）。开源项目和非营利组织可免费使用专业版。
* [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。自带Prometheus或安装一体化套件。免费层支持最多20个Kubernetes节点。通过Slack、Microsoft Teams、Discord等告警。集成PagerDuty、OpsGenie、VictorOps、DataDog等工具。
* [sematext.com](https://sematext.com/) — 免费提供24小时指标监控，无限服务器、10个自定义指标、50万自定义指标数据点、无限仪表板、用户等。
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、定时任务和SSL监控，每个类别免费5个监控器。

  * [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
* [stathat.com](https://www.stathat.com/) — 免费获取10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限次测试（有限制）
* [statusgator.com](https://statusgator.com/) — 状态页面监控，免费3个监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、在线时长监控、DNS和域名监控。免费监控10台服务器、10个在线状态和10个域名
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个地理位置和20个主流网络服务的数据源
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5名用户免费
* [instatus.com](https://instatus.com) - 10秒创建精美状态页。永久免费，支持无限订阅者和团队
* [Squadcast.com](https://squadcast.com) - Squadcast是端到端事件管理软件，帮助实践SRE最佳方案。永久免费计划支持最多10名用户
* [RoboMiri.com](https://robomiri.com/) - RoboMiri是稳定的在线时长监控工具，支持多种监控类型：定时任务、关键词、网站、端口、Ping。免费提供25个在线检查，3分钟间隔。支持电话、短信、邮件和Webhook告警
* [Better Stack](https://betterstack.com/better-uptime) - 集在线时长监控、事件管理、值班排班/告警和状态页于一体。免费计划包含10个监测器，3分钟检查频率和状态页
* [Pulsetic](https://pulsetic.com) - 免费包含10个监测器、6个月历史在线时长/日志、无限状态页和自定义域名！永久免费且不限邮件告警，无需信用卡
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 在线时长监控：20个免费；Linux和Windows服务器监控：5个免费；状态页：1个免费 - 移动应用、多通知渠道等更多功能！
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级在线时长监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费套餐包含10个HTTP监控器、1个DNS监控器和1个状态页

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月可免费追踪2,000次错误
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控服务。为开源项目提供免费的小型企业订阅方案。
* [Embrace](https://embrace.io/) — 移动应用监控平台。小型团队每年100万用户会话内免费使用。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月免费3,000次事件/1个用户。开源项目可自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪系统。兼容开源Sentry SDK。每月免费1,000次事件，支持无限制自托管。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费方案包含每月5,000次错误、无限用户、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费方案。每月5,000次错误/1个用户免费，自托管无限制使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。支持Vercel等平台集成，可通过邮件/Discord通知进行高级数据查询。
* [Semaphr](https://semaphr.com) — 移动应用一体化免费熔断开关。
* [Jam](https://jam.dev) - 开发者友好型一键错误报告工具。免费方案支持无限次报告。
* [Whitespace](https://whitespace.dev) – 浏览器内一键提交错误报告。个人用户免费方案支持无限次录屏。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 提供容错搜索、相关性排序和UI组件的托管搜索解决方案，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) — 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1000名活跃用户免费，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
* [easysitesearch.com](https://easysitesearch.com/) — 搜索组件和API，支持基于网络爬虫的自动索引。免费版不限搜索次数，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby网页开发的开源免费课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，支持克隆、完整编辑和下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具实操技巧
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等全领域开发路线的免费学习指南
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证级免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 汇集2500+门MIT课程资料，向全球师生免费开放知识资源。YouTube频道请访问[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等网页开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 包含HTML/CSS基础与进阶、JavaScript及SQL的免费编程指南
* [全栈公开课](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等技术，支持在线自主学习
* [Django教程网](https://django-tutorial.dev) - 面向初学者的Django框架免费教程，并为用户文章提供dofollow反向链接

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱服务，适用于测试场景
* [AhaSend](https://ahasend.com) - 事务性邮件服务，免费套餐每月可发送1000封邮件，支持无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可创建无限免费邮件别名
* [Antideo](https://www.antideo.com) — 免费套餐每小时提供10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
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
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，而是客户端邮件发送工具（可避免凭证暴露），免费套餐含200次月请求量、2个邮件模板、50KB请求限制及有限联系人历史记录
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于），完全免费的反事务性邮件服务（邮件永不实际投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 多域名临时/一次性邮箱生成器，页面刷新即更新邮箱地址，完全免费无付费项目
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名且可创建无限地址（含广告），其余功能完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务，可创建无限域名邮箱地址（注：使用.casa/.cf/.click/.email/.fit/.ga/.gdn/.gq/.lat/.loan/.london/.men/.ml/.pl/.rest/.ru/.tk/.top/.work等TLD需付费）
* [Imitate Email](https://imitate.email) - 邮件沙盒服务器，用于构建/QA和CI/CD测试，免费账户永久享有每日15封邮件额度
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，支持收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每日可创建3个临时邮箱并通过Chrome扩展管理，适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动保留3天，开源且可自托管
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
* [mailsac.com](https://mailsac.com) - 临时邮箱测试免费API，公共邮箱托管服务，支持外发捕获及邮件转Slack/Websocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员限制、每秒2封邮件、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者专用临时邮箱，通过网页或API即时创建地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，可通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID、1个域名、1个收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱与日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送至服务器）
* [pepipost.com](https://pepipost.com) — 首月3万封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限次DMARC周报
* [Proton Mail](https://proton.me/mail) - 内置端到端加密的安全邮箱服务，免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，免费每月10000封，支持异步发送、多SMTP服务器、黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailVerification.com) — 每日免费验证100个邮箱，另提供DEA检测、DNS查询、SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封、每日100封免费，支持1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者免费额度
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案，免费5个别名，无限带宽与收发，教育工作者（学生/研究员等）免费
* [Substack](https://substack.com) — 无限免费订阅服务，收费时开始支付
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每日500封免费

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱及邮件转发功能  
* [tinyletter.com](https://tinyletter.com/) — 每月免费支持5,000名订阅者  
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化流程。免费版支持有限数量的潜在客户和自动化操作  
* [trashmail.com](https://www.trashmail.com) - 提供带转发功能和自动过期的一次性免费邮箱地址  
* [Tuta](https://tuta.com/) - 免费安全邮箱服务商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管  
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测；每日25次免费验证  
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证  
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多款含免费方案的产品线：  
   - [邮箱](https://zoho.com/mail) 免费支持5用户，每人5GB容量，附件上限25MB，支持一个域名  
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业及个人场景  
   - [Sprints](https://zoho.com/sprints) 免费支持5用户、5个项目及500MB存储  
   - [文档](https://zoho.com/docs) — 免费支持5用户，单文件上限1GB，总存储5GB。捆绑提供Zoho办公套件（Writer、Sheets和Show）  
   - [项目](https://zoho.com/projects) — 免费支持3用户、2个项目，附件上限10MB。[Bugtracker](https://zoho.com/bugtracker)适用相同方案  
   - [Connect](https://zoho.com/connect) — 团队协作工具免费支持25用户，含3个群组、3个自定义应用、3个看板、3个手册及10个集成，支持频道、活动和论坛  
   - [Meeting](https://zoho.com/meeting) — 会议功能支持最多3名参会者，网络研讨会支持10名观众  
   - [Vault](https://zoho.com/vault) — 面向个人的免费密码管理工具  
   - [Showtime](https://zoho.com/showtime) — 远程培训会议软件，支持最多5名参与者  
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品  
   - [Wiki](https://zoho.com/wiki) — 免费支持3用户、50MB存储，不限页面数，支持ZIP备份、RSS/Atom订阅、权限控制和自定义CSS  
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理免费支持20个客户/订阅和1用户，支付由Zoho托管，保留最近40条订阅记录  
   - [Checkout](https://zoho.com/checkout) — 产品计费管理支持3个页面和最多50笔支付  
   - [Desk](https://zoho.com/desk) — 客户支持管理免费支持3个客服，含私有知识库和邮件工单。可集成[Assist](https://zoho.com/assist)实现1个远程技术支持人员和5台无人值守计算机  
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件免费提供100GB存储，不限用户数，每个频道支持100人，支持SSO  
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销  
   - [Forms](https://zoho.com/forms) - 表单创建工具  
   - [Sign](https://zoho.com/sign) - 无纸化签名  
   - [Surveys](https://zoho.com/surveys) - 在线问卷调查  
   - [Bookings](https://zoho.com/bookings) - 预约排期系统  
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API服务。每月5,000封邮件额度，不限域名，含免费邮箱验证、黑名单监控、邮件测试等功能  

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队成员，提供卓越支持且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求额度。
* [Flagsmith](https://flagsmith.com) - 安全发布功能，统一管理Web、移动端和服务端应用的功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，功能开关和实验数量无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析及应用配置，具备Git式版本控制和同步内存本地开关评估。免费版支持5名团队成员，功能开关和A/B测试数量无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试工具。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境且请求次数不限。SDK、分析看板、发布日历、Slack通知等功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析的一站式平台。免费版提供无限制席位、功能开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试工具，支持代码化配置和全类型TypeScript SDK。深度集成Next.js和React等框架，提供丰厚免费额度与低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体  
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具  
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权商业使用的免费字体。精心挑选的字体库，并以易用格式呈现  
* [Google Fonts](https://fonts.google.com/) - 海量免费字体，可通过下载或Google CDN链接快速部署到网站  
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的多样化可下载字体库  
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，个人和商业用途均可100%免费使用  
* [Befonts](https://befonts.com/) - 为个人或商业用途提供独特字体资源  
* [Font of web](https://fontofweb.com/) - 检测网站使用的所有字体及其应用方式  
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案  
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文本快速筛选  
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台  
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，含中日韩(CJK)字体标签  

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版包含无限表单数量，每月20次提交，若展示Form-Data标识可额外获得2000次提交额度。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。提供友好的现代化界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点服务。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能可免费使用。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点服务，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月支持500次提交和可自定义回复邮箱地址。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾邮件防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets、Slack、ActiveCampaign和Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单邮件转发服务，免费版支持无限表单数量，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制为每个表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点服务。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1个表单、50次提交、单文件上传和100MB文件存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。可通过界面将提交内容转发至邮箱、Slack或Zapier。支持自定义前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持创建无限表单和收集无限提交，含预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款功能、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码，数秒内创建邮件表单等。个人账户每月免费支持50次表单提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点服务，完美适配静态网站。免费版支持1个网站和每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单和每月1,000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单和调研工具。提供50+专家设计的问卷模板。免费账户限制为1个活跃问卷、100份回复/问卷和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析工具。永久免费版支持500名月活跃用户，无限回复和事件记录，多平台集成、导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版含每月50次提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义跳转页、Telegram & Slack机器人通知和单邮件提醒。
* [Survicate](https://survicate.com/) — 一站式多渠道反馈收集与跟进调研工具。AI自动分析反馈生成洞察。免费版支持邮件、网站、产品内或移动端调研，AI问卷生成器和25份月回复量。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可免费集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷与表单构建工具。免费版含5个表单，每个表单最多3个步骤，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版限制为每个表单10个字段和每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。支持Webhook通知。免费版会对签署文件添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 无需后端代码的静态&JAMStack网站联系表单。免费版支持无限表单、无限域名和每月250次提交。
* [WebAsk](https://webask.io) - 问卷与表单构建工具。免费版含3个问卷/账户，每月100次回复和每个问卷10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限制100次提交。
* [formpost.app](https://formpost.app) - 免费无限次表单邮件转发服务。可设置自定义跳转、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特风格的表单。不限表单数量和功能限制。免费版每月可获100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF文件，每个PDF允许3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动计分器和AI等强大功能的在线表单。免费版可收集100份回复，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。使用Qualli AI生成完美问题。免费版支持500名月活跃用户，可创建无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带录屏的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集总计25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃问卷，每问卷25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。仅需2行代码即可调用200+种大语言模型。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，提供可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估系统、提示词游乐场和数据管理平台。免费计划每周提供1,000条私有评估数据。
* [Findr](https://www.usefindr.com/) - 跨应用统一搜索引擎，可同时检索所有应用数据。智能搜索助手能基于您的信息回答问题。免费版提供无限统一搜索和每日5次协同搜索查询。
* [ReportGPT](https://ReportGPT.app) - AI写作助手。只要自带API密钥即可永久免费使用全平台功能。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业版工具套件，包含开放搜索、临床摘要、药物审查、药物相互作用、ICD-10编码和抗菌管理功能。专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词与数据集，调试LLM应用性能问题。为所有LLM生成开放遥测标准追踪数据，提升可观测性，兼容任意观测客户端。免费版每月5万次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益与性能。通过强大的DSPy组件，促进工程师与非技术团队协作微调并投产生成式AI产品。免费版包含全平台功能，每月1k次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产全生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，助力团队协作调试、分析和迭代LLM应用。永久免费版包含每月5万次观测和全平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 简单易用的免费图像生成AI，提供免费API。无需注册或API密钥，支持多种网站和工作流集成方式。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 面向Tableau/Power BI/Looker的AI原生替代方案，快速、简洁且安全。利用大语言模型(LLM)在数分钟内交付定制商业智能方案。永久免费版提供1个工作区、5个数据源连接和1个用户，分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型包括DeepSeek R1/V3、Llama和Moonshot AI，在自然语言处理方面表现优异，适用于多样化开发需求。注意免费模型存在速率限制。平台还提供Claude/OpenAI/Grok/Gemini/Nova等付费模型满足进阶需求。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — Bootstrap、Bootswatch 和 Font Awesome 的 CDN 服务  
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。顶尖的内容分发服务。cdnjs 是由 Cloudflare 提供支持的免费开源 CDN，被全球超过 11% 的网站所信赖。  
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是最受欢迎的开源 JavaScript 库的内容分发网络  
* [Stellate](https://stellate.co/) — Stellate 是一个极速、可靠的 GraphQL API CDN，免费支持两项服务。  
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速且可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。  
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管了 jQuery 等流行的第三方 JavaScript 库，方便您轻松集成到 Web 应用中  
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费 DDoS 防护和 SSL 证书  
* [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN。每月每个域名免费支持 100 万次请求。  
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代方案，使用 Cloudflare 托管文件  
* [section.io](https://www.section.io/) — 快速部署和管理完整 Varnish Cache 解决方案的简单方式。据称单个站点永久免费  
* [statically.io](https://statically.io/) — 支持 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片的 CDN  
* [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理服务。永不中断的持续交付。个人免费使用，仅限一名开发者，无技术支持  
* [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN  
* [weserv](https://images.weserv.nl/) — 图片缓存和调整服务。实时处理图片并支持全球缓存。  
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费 DDoS 防护  
* [Gcore](https://gcorelabs.com/) — 全球内容分发网络，每月免费 1 TB 流量和 100 万次请求，并提供免费 DNS 托管  
* [CacheFly](https://portal.cachefly.com/signup/free2023) — 每月免费 5 TB CDN 流量，19 个核心节点，1 个域名和通用 SSL 证书。  

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量和30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持websockets）的认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量无限制。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版包含每日10万请求和每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版限1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的后端框架，无样板代码。包含业余项目的免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务、数据库等。个人GitHub仓库开发者可享免费层，AWS费用通过AWS计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例，及限制为2连接、10,000行且无备份的PostgreSQL免费数据库。
* [Glitch](https://glitch.com/) — 支持代码共享和实时协作的免费公开托管。免费计划每月限1,000小时。
* [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，为快速增长提供全面支持。免费版含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 面向开发者的集成平台。基于任意触发器开发工作流。[免费运行](https://docs.pipedream.com/pricing/)代码化工作流，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费账户支持1个your-username.pythonanywhere.com域名下的Python Web应用、512MB私有文件存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月50,000次。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 支持全球部署的无服务器平台。通过Git部署Docker容器、Web应用和API，含自动扩缩容与全球边缘网络。免费实例可部署至德国法兰克福或美国华盛顿特区，免费PostgreSQL数据库位于法兰克福、华盛顿特区或新加坡（512MB内存/2GB存储/0.1CPU）。
* [Napkin](https://www.napkin.io/) - 内存500MB、默认15秒超时、每月5,000次API调用的FaaS（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用的Galaxy托管平台，含免费MongoDB共享主机和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务、任务和托管数据库。免费层含2个服务、2个定时任务和1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台。免费版含[1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)支持3个项目、1GB出口流量和每月300分钟构建时间。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务，每月赠5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，创建类生产测试环境。
* [genezio](https://genezio.com/) - 非商业/学术用途免费提供每月100万次函数调用、100GB带宽和10个定时任务的无服务器函数服务。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web后端即服务，免费提供1GB文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — 提供文档与资源以构建企业级数字创新方案，包含平台、SDK和组件库的完整沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1,000名用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨的免费方案。
* [Firebase](https://firebase.com) — 提供应用构建与运营支持。免费Spark计划包含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等多项功能永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的聊天、消息、视频音频及信息流功能。
* [hasura.io](https://hasura.io/) — 为现有数据库提供即时GraphQL API，支持Web、移动及数据集成。每月1GB数据传输免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL（Hasura）、身份验证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，联系人无上限且支持自动预热。
* [paraio.com](https://paraio.com) — 后端API服务，含灵活身份验证、全文搜索和缓存。单个应用免费，1GB数据存储。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2,000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) — 2,000月活用户的免费无限推送通知。支持iOS和Android的统一API。
* [quickblox.com](https://quickblox.com/) — 即时消息、视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含身份验证、数据、文件等服务的服务器，并通过管道组合转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用拖拽工具快速构建应用，通过点击定制数据模型，支持Apex代码和API集成。免费开发者计划提供完整Lightning平台权限。
* [simperium.com](https://simperium.com/) — 多平台数据实时同步，结构化数据无限传输存储，上限2,500用户/月。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，免费计划提供身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — API管理含鉴权、配额及监控分析。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次触发/每月100次任务。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟更新/5个自动化流程/Webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储、256MB实例、3K次API请求/日和10K次推送/日。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账户注册超过180天的用户提供$5/月免费额度，适合托管应用及数据库等。（[免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持与15+种数据库及任何API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具备拖拽界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理快速构建内部工具、定制用户旅程、数字体验、自动化流程、管理面板和运营应用，效率提升10倍。
* [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud是一个强大的开源低代码平台，开发者可用其构建内部工具。通过ILLA的组件和动作库，开发者能大幅节省开发时间。免费支持5名团队成员。
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每应用0.5 GB存储和1 GB内存。免费层还包含Studio和Studio Pro IDE使用权。
* [outsystems.com](https://www.outsystems.com/) — 面向本地或云端的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1 GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。ReTool高度可定制，任何能用JavaScript和API实现的功能均可在此完成。免费层每月支持最多5名用户，不限应用数量和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑及代码扩展功能，配合集中管理的集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，并通过拖拽式应用构建器快速开发。
* [UI Bakery](https://uibakery.io) — 低代码平台，加速定制化Web应用开发。通过拖拽界面结合JavaScript、Python和SQL实现高度定制，提供云端和自托管方案。免费版支持最多5名用户。
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费版支持1名用户及每月100万次工作流活动（[另有德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用+开发者优先的部署和开发平台，最大限度减少基础设施困扰并加速配置。
* [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建网页和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注于Web3前端的去中心化托管平台，提升在线率与安全性，并为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform Starter层级免费构建并部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管至网络。仅限静态站点，永久免费。每个Google/Microsoft账户限一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，用于本地托管站点并实时公开分享。可通过美观的UI、API或CLI自由操作。
* [Fern](https://buildwithfern.com) — 在Fern免费计划中构建并托管基于Markdown的文档站点。甚至可从API定义文件自动生成站点API参考。站点托管于_yoursite_.docs.buildwithfern.com。
* [Free Hosting](https://freehostingnoads.net/) — 免费主机支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP邮箱、免费子域名、免费域名托管、DNS区域编辑器、网站统计及更多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包含行业领先的控制面板及50+款应用的1键安装。即时配置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利性免费虚拟主机，配备Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP邮箱，无限带宽，免费子域名，免费1000 MB存储空间并可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，支持自定义域名与SSL，每月100 GB流量，260+个Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 支持SFTP文件上传下载的虚拟主机，提供PHP环境。
* [Neocities](https://neocities.org) — 静态站点，1 GB免费存储空间及200 GB流量。
* [Netlify](https://www.netlify.com/) — 免费构建、部署并托管静态站点/应用，含100 GB数据量和每月100 GB带宽。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps及可扩展基础设施。开发者与代理商免费使用，不支持自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管服务，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，免费构建和运行应用及站点，提供SSL、全球CDN、私有网络、Git自动部署，并为Web服务、数据库和静态网页提供完全免费方案。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布工具。无限站点且支持自定义域名。
* [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 单个站点，50个页面，50 MB存储空间，仅限170+预设区块中的主要模块，无自定义字体、网站图标及域名。
* [Vercel](https://vercel.com/) — 构建、部署并托管Web应用，每次`git push`均提供免费SSL、全球CDN和独特预览URL。特别适合Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的网站构建器，无限网站、70+区块、5套模板，支持自定义CSS、网站图标、SEO和表单。无自定义域名。
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，采用开发者中心设计，功能全面。免费层级支持静态资源、预发布环境和开发应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费Flarum托管，支持最多250名用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 单个项目免费托管，容器存活期两周，每项目500 MB内存，SFTP支持1G磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易用云平台，付费服务中包含三个静态站点的免费托管。
* [Serv00.com](https://serv00.com/) — 3 GB免费虚拟主机，含每日备份（保留7天）。支持：Crontab任务、SSH访问、仓库（GIT/SVN/Mercurial），环境支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等众多语言。
* [Sevalla](https://sevalla.com/) — 简化应用、数据库和静态网站部署管理的托管平台，限制：1GB站点空间、100GB免费流量、600分钟构建时长、每账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) — 免费DNS托管，支持1个域名和50条记录。
* [deSEC](https://desec.io) — 注重安全性的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
* [Zonomi](https://zonomi.com/) — 提供即时DNS传播的免费DNS托管服务。免费版支持1个DNS区域（域名）和最多10条DNS记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管服务。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多支持5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API调用](https://dynv6.com/docs/apis)及多种DNS记录类型管理（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管服务，并提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后可在"Subdomains"菜单中获取。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持3个域名，所有功能均有合理限制。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS服务，域名数量无限制。
* [nextdns.io](https://nextdns.io) — 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册、无跟踪、无日志记录或广告的免费动态DNS服务，域名数量无限制。
* [noip](https://www.noip.com/) — 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含嵌入IP地址的主机名时返回该IP地址。
* [zilore.com](https://zilore.com/en/dns) — 免费DNS托管，支持5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管服务。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份和DNS变更监控，免费支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为提供的免费DNS托管服务。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管服务，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费DNS托管，最多支持3个域名，提供DNSSEC支持。
* [VolaryDDNS](https://ddns.volary.cloud) — 高性能免费动态DNS服务，无订阅或广告。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) — 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷地将IPFS和Arweave网络中的文件上传存储。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储服务
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费提供5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB外传流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 开源数据平台提供免费的 PostgreSQL、MySQL 和 Redis 方案。单节点配置为 1 CPU、1GB 内存，PostgreSQL 和 MySQL 附带 5GB 存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行和每月 1,000 次 API 请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 服务，含 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，支持函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用，包含 2 名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点配置为 2 CPU、2 GiB 内存、8 GiB 存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费层每日 10,000 次请求、最大 256MB 数据库容量和 20 个并发连接
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
* [redsmin.com](https://www.redsmin.com/) — Redis 在线实时监控与管理服务，免费监控 1 个 Redis 实例
* [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费层支持 25MB 内存、1 个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供 PaaS，但包含 128MB 至 192MB 的免费 MySQL、PostgreSQL 或 MongoDB 方案
* [SeaTable](https://seatable.io/) — Seafile 团队开发的类电子表格灵活数据库。无限表格、2,000 行数据、1 个月版本历史，最多 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云端数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库能力及常用商业应用集成的工具。免费方案包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源且兼容 MySQL 的分布式 HTAP 关系型数据库。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5,000 万请求单位(RU)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验方案。永久免费入门方案包含 9GB 总存储、最多 500 个数据库、3 个部署位置、每月 10 亿行读取及 SQLite 本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每 5 分钟 3MB 写入、30MB 读取和 10,000 基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的 NoSQL 云数据库服务。提供模式、关联、自动 REST API（支持类 MongoDB 查询）及高效的多用户数据管理界面。免费方案允许 3 用户、2,500 条记录和每秒 1 次 API 请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供 5,000 万 RU 和 10 GiB 存储（价值 15 美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图规模（5 万节点，17.5 万关系）。
* [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 总存储，1 个项目，10 个分支，无限数据库，主分支永久可用（非活跃 5 分钟后自动暂停），非主分支计算每月 20 小时活跃时间。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管的原生图数据库管理系统，提供 GraphQL API。限制每日 1 MB 数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持 HTTP 无连接数据摄入，可将 SQL 查询发布为托管 HTTP API。免费层无时限，10GB 存储 + 每日 1,000 次 API 请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管的原生图数据库管理系统/分析平台，支持类 SQL 图查询语言和 REST API。免费实例含 2 vCPU、8GB 内存和 50GB 存储，闲置 1 小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，该数据库是用 Prolog 和 Rust 编写的文档与图数据库。开发免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - filess.io 平台可免费创建两个数据库，每个数据库最大 10 MB，支持以下数据库管理系统：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [xata.io](https://xata.io) - Xata 是无服务器数据库，内置强大搜索和分析功能。单一 API、多类型安全客户端库，并为开发工作流优化。永久免费层满足业余开发者需求，包含三个 Xata 单位（单位定义参见官网）。
* [8base.com](https://www.8base.com/) - 8base 是基于 MySQL 和 GraphQL 的全栈低代码开发平台，为 JavaScript 开发者构建的无服务器后端即服务。通过 UI 应用构建器快速开发 Web 应用并轻松扩展，免费层包含：2,500 行、500MB 存储、1Gb/小时无服务器计算和 5 个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库、永不停止服务、1GB 总存储、5,000 万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，通过免费方案可创建最多5人参与的无限局域网式分布式网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码时提供wss:// URL并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到公网。无需安装注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网网络，支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，免费支持每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 基于WireGuard协议的无配置VPN，支持MacOS/iOS/Windows/Linux/Android。个人免费版支持100台设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook到公网或内网（如localhost），通过隧道将私有网络服务暴露为HTTP端点（`https://子域名.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 全场景webhook开发测试监控。免费版每月10万请求+10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽（限速单地理区域）。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端组成的端到端加密网络，提供桌面/移动/NA客户端，可通过网页配置私有网络路由规则和节点审批。
* [LocalXpose](https://localxpose.io) — 将本地服务器暴露到公网的反向代理。免费版隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地服务到自定义公共URL，并提供访问控制。免费版支持单集群5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 面向5人以下团队的免费项目管理与SCRUM软件  
* [asana.com](https://asana.com/) — 私人项目协作免费版  
* [Backlog](https://backlog.com) — 一站式项目交付平台，免费版支持1个项目、10名用户及100MB存储  
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间追踪。免费版含3个项目、20用户和1GB存储  
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网与项目管理工具，免费版提供5GB存储且不限用户数  
* [cacoo.com](https://cacoo.com/) — 实时在线图表工具（流程图/UML/网络图），免费版支持最多15用户/图表和25页  
* [Chpokify](https://chpokify.com/) — 团队版敏捷估算工具，免费支持5用户，含Jira集成、无限视频会议和会话  
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费版与云存储付费版，提供移动应用和Git集成  
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数  
* [Cloudcraft](https://cloudcraft.co/) — AWS架构图设计工具，免费版支持单人无限私有图表  
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版含5成员团队、无限仓库、每月500分钟CI/CD时长  
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10用户  
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版含5个工作区  
* [Crosswork](https://crosswork.app/) - 多功能项目管理工具，免费版支持3个项目与1GB存储  
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费  
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/文件管理，免费版不限项目/用户/存储  
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月3个公共看板  
* [GForge](https://gforge.com) — 支持自托管与SaaS的项目管理套件，开源项目免费  
* [gleek.io](https://www.gleek.io) — 开发者免费UML图表生成工具（类图/对象图/ER图）  
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异对比工具，自动标记破坏性变更  
* [huboard.com](https://huboard.com/) — GitHub Issues项目管理工具，开源免费  
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目，含100MB存储  
* [Instabug](https://instabug.com) — 移动应用Bug反馈SDK，免费版支持1个应用  
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用  
* [Ilograph](https://www.ilograph.com/) — 多维度基础设施交互图表工具，免费版支持3名查看者  
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10用户  
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含付费高级功能  
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版限2看板2用户  
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1用户无限看板  
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版限250工作项  
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（含Chrome插件），完全免费  
* [Kumu.io](https://kumu.io/) — 关系图谱工具，免费版支持无限公开项目，学生可享私有项目  
* [Linear](https://linear.app/) — 极简任务追踪工具，免费版支持无限成员和250个事项  
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10用户/2GB存储  
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版含3个可编辑文档  
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目  
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum看板工具  
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版支持5用户/100MB存储  
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版限3用户/10MB文件  
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费版支持无限公开项目和2个私有项目  
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理工具，免费版支持2用户/500MB存储  
* [Plane](https://plane.so/) - 开源项目管理工具，免费版支持1000个事项  
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版提供无用户限制的任务、迭代和工作区
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，涵盖看板到各类运营流程，免费版支持无限用户（最多1,000个数据实体）{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具，免费版包含1个工作区（无限任务与项目）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾与迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供高级付费方案
* [teleretro.com](https://www.teleretro.com/) — 趣味回顾工具（含破冰游戏/GIF/表情），免费版包含3次回顾会议（成员不限）
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台，私人用途免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版支持每图4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理，免费版功能：5个活跃项目/每项目5名用户/5MB文件上传/3个筛选器/1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版含无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目管理/版本控制/问题追踪），免费版提供无限项目与协作者+3GB存储
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具，最多3名用户免费（项目不限）
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目与私有项目（3名用户免费），含时间追踪与敏捷看板
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌的独家项目管理方案，公开仓库/开源组织/非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，免费版支持5名成员+5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目+4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/销售/客服设计的项目管理工具（尤其适合外包与跨组织协作），免费版支持3个项目+5名成员
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也支持其他类型文件上传。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简易安全异地备份托管服务。免费提供10GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简洁的云存储服务。10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图片CDN服务，支持实时图片优化和尺寸调整。免费套餐包含500MB存储空间和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，提供多样化的图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图像制作和图片编辑。免费月套餐含25GB CDN流量、25GB缓存存储和无限次转换。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图片上传、强大编辑、存储和分发服务，支持Ruby、Python、Java、PHP、Objective-C等多种语言库。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费版每月可处理5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档、图片、音频、视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 基于网页界面和API的免费文件共享存储平台，无文件大小、带宽和下载次数限制。但十天无下载的文件会被自动删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图片视频托管、处理和流媒体服务。免费套餐每月含250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在不损失质量的前提下减小文件体积。开源项目免费使用。
* [ImgBB](https://imgbb.com/) — 无限容量的图片托管服务。支持拖拽上传（单张上限32MB），生成直链、BBCode和HTML缩略图。登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限量社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐含1000张原始图片、无限次转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能优化服务，免费版支持1MB以内的图片优化。
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费版支持100个键（每个1KB）、每小时100次调用。
* [npoint.io](https://www.npoint.io/) — 支持协同编辑模式的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化服务（缓存/图片/代码优化+CDN）。免费套餐每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理平台。基础版支持无限文件传输（单文件上限250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取免费开源计划。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客马拉松和移动应用设计的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理平台，提供友好界面和API。免费套餐含1GB存储空间。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的趣味服务
* [plot.ly](https://plot.ly/) — 数据可视化分享平台。免费版支持无限量公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（用户管理除外）
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的批量二维码生成器，单次最多支持100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图表、图形和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，累计处理超70亿张图片。
* [Shotstack](https://shotstack.io) - 视频批量生成编辑API，免费版每月可渲染20分钟视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩额度
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码服务。开源项目/慈善机构/学生可通过GitHub学生开发者包获取免费权限，商业应用可试用2GB额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片服务，提供图片CDN、媒体处理API和前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于前沿算法的媒体处理管线全套工具，开发者可免费使用文件上传API/UI、图片CDN、自适应传输和智能压缩等功能。免费版含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于零知识证明的绝对隐私文件存储服务，注册即享永久免费10GB空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间（支持3台设备），推荐用户可额外获得5GB（90天不活跃失效）。
* [MConverter.eu](https://mconverter.eu/) – 支持[AVIF](https://mconverter.eu/convert/to/avif/)等格式的批量文件转换工具，可从视频提取所有帧。免费版每日可处理10个100MB文件（每次批量处理2个）。

  * [DocsParse](https://docsparse.com/) – 基于GPT的AI处理工具，可将PDF、图片转换为JSON/CSV/EXCEL结构化数据。每月免费赠送30次额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、LOGO...
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪行为。完全免费且不收集用户数据。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代化响应式网站，非设计师也能轻松打造精美界面
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板库，提供丰富的首页模板，下载代码包即可快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，支持设计系统的构建、文档编写、发布和维护。免费版允许3名编辑人员协作一个设计系统，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费在线社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能文件转换工具，包含视频和GIF转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色方案灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号及其他色彩模型
* [Branition](https://branition.com/colors) - 专为品牌打造的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库，可下载优质矢量素材
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版包含无限文件，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限观众、2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库（含模特/物权授权）
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐和设计工具集，免费版提供有限格式的低分辨率资源
* [landen.co](https://www.landen.co) - 无代码建站工具，免费版可创建1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加尺寸即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，提供Android/iOS/Web动画工具和插件
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 免费无限量云存储思维导图，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具，免费版支持3用户5项目
* [mockupmark.com](https://mockupmark.com/create/free) - 社交媒体和电商服装模型生成器，提供40个免费模板
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) - 基于浏览器的免费矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具，实时协作分享
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 基于网页的开源设计和原型工具，完全免费且支持SVG
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供按关键词搜索的API
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计工具，支持响应式页面和复杂组件开发
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持直接外链
* [Proto.io](https://www.proto.io) - 无需编码的交互式UI原型工具，免费版含1用户/1项目/5原型/100MB存储
* [resizeappicon.com](https://resizeappicon.com/) - 简单的应用图标尺寸调整工具
* [Rive](https://rive.app) - 创建并发布精美动画，个人用户永久免费，提供多平台运行环境
* [storyset.com](https://storyset.com/) - 免费定制化插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成器，提供200个免费模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 实时预览主题在组件和布局中的效果
* [tabler-icons.io](https://tabler-icons.io/) - 1500+可复制粘贴的免费SVG可编辑图标
* [tweakcn](https://tweakcn.com/) - shadcn/ui主题编辑器，实时自定义颜色/排版等参数

  * [unDraw](https://undraw.co/) - 持续更新的精美SVG图片库，可完全免费使用且无需署名
* [unsplash.com](https://unsplash.com/) - 商业和非商业用途的免费图库（无限制使用许可）
* [vectr.com](https://vectr.com/) — 网页端+桌面端的免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持创建3个最多5个步骤的引导流程
* [Webflow](https://webflow.com) - 带动画功能和托管服务的可视化网站构建器，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化网站构建器，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图工具，免费创建最多4个画板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，可展示设计稿、资源和样式指南，免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人注目的独特图形与图像
* [Responsively App](https://responsively.app) - 免费开发工具，助力更快速精准的响应式网页应用开发
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，提供不断扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - 预览并将Sketch设计文件转换为Angular/React/Vue等框架代码（开源项目见https://github.com/xlayers/xlayers）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大且SEO优化的网页构建器，前5个页面免费，支持无限自定义域名和全部功能
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，无水印，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管服务的简易落地页构建工具，免费支持一个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌Logo库，内置浏览器版矢量编辑工具
* [svgrepo.com](https://www.svgrepo.com/) - 搜索各类矢量库中的图标资源，下载可商用的免费SVG矢量图
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具，可直接用于设计工作流
* [Canva](https://canva.com) - 创建视觉内容的免费在线设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击即可生成独特背景/图案/形状的免费设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，支持协作创建无头静态网站，免费3个项目且可导出代码
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG等矢量文件格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，含开发者专用转换器（如JPG转SVG、JSON转XML等）
* [okso.app](https://okso.app) - 极简在线绘图工具，可快速创建草图并导出为多种格式，无需注册
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 可定制的免费SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 包含4400万+品牌的公司Logo API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的Bootstrap/Angular/React/Vue UI套件，含700+组件和模板
* [TW Elements](https://tw-elements.com/) - 用Tailwind CSS重构的Bootstrap组件，设计更优功能更强
* [DaisyUI](https://daisyui.com/) -- 免费工具，"用更少的类名实现Tailwind CSS效果"，提供按钮等组件
* [Scrollbar.app](https://scrollbar.app) -- 设计网页自定义滚动条的简易免费工具
* [css.glass](https://css.glass/) -- 用CSS创建玻璃拟态设计的免费工具
* [hypercolor.dev](https://hypercolor.dev/) -- 精选Tailwind CSS渐变色合集，含多种生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一平台，支持跨库搜索和SVG导出
* [NextUI](https://nextui.org/) -- 免费、精美、现代的React & Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑的开源图标设计系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优雅组件库，支持无障碍访问和自定义
* [HyperUI](https://www.hyperui.dev/) -- 开源免费的Tailwind CSS组件库
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年份独特图标，完全免费
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片背景模糊效果
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代品，免费版支持无限网站和2GB资源存储
* [Nappy](https://nappy.co/) -- 黑人及棕色人种的免费精美照片，商用和个人使用皆可
* [Tailkits](https://tailkits.com/) -- 精选Tailwind模板/组件/工具集，含代码生成器功能
* [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板，实时预览色彩代码
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存和导出的免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费图形设计工具，免费版含10个云文档和基础功能

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台，可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感来源，通常来自非实际应用场景。
* [Landings](https://landings.dev/) - [网页截图] 根据偏好查找最佳着陆页设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例的画廊，提供设计师免费书籍和网络免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图，包含桌面、平板和移动端视图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全搜索的移动应用截图库，节省UI/UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动端和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品制作人提供最精美的UI/UX模式（iOS和Android）灵感库。
* [Page Flows](https://pageflows.com/) - [移动端/网页视频及截图] 多个移动端和网页应用的完整流程视频，包含截图，支持高效搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并紧跟最新网页和移动应用UI设计趋势，可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选最佳应用商店设计截图合集。
* [UI Garage](https://uigarage.net/) - [移动端/网页截图] 为设计师和开发者提供每日UI灵感与模式，寻找项目灵感和最佳资源。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考合集，支持标签和搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求额度
* [carto.com](https://carto.com/) — 基于自有数据与公开数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，包含地理空间数据存储、分析、地理编码、路径规划等功能。每月免费额度：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传实现地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用API及SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新，提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap开源地理编码服务，提供全球地址搜索与反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开源地理数据的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排序的地理编码与搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途与测试每日2,500次免费地图浏览及API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP Shell和代码片段分享网站，支持在300多个PHP版本中运行代码
* [Android Studio](https://developer.android.com/studio) — Android官方IDE，提供最快的工具来为各类Android设备构建应用。开源且完全免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux和ChromeOS系统。
* [AndroidIDE](https://m.androidide.com/) — 开源IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，包含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - macOS平台流行的可扩展编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务。
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI界面。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制。
* [cacher.io](https://www.cacher.io) - 代码片段管理工具，支持标签和100+编程语言。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE，开源且支持Windows、macOS和Linux。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，可编写代码块、自动补全、单元测试，理解整个代码库，修复和查找代码。支持VS Code、JetBrains和在线使用。
* [codiga.io](https://codiga.io/) — 编码助手，可直接在IDE中搜索、定义和复用代码片段。个人和小型团队免费。
* [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，支持分类、搜索和标签，完全免费且无限制。
* [cocalc.com](https://cocalc.com/) — （原SageMathCloud）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikit-learn等。
* [code.cs50.io](https://code.cs50.io/) - CS50专用的Visual Studio Code网页版，基于GitHub Codespaces为学生和教师优化。
* [codepen.io](https://codepen.io/) — 前端网页开发 playground（HTML/CSS/JavaScript）。
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等的在线Playground。
* [Components.studio](https://webcomponents.dev/) - 独立开发代码组件，通过故事可视化展示，测试并发布到npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 面向开发团队的Web原生和Kubernetes原生IDE，支持多语言。开源且社区驱动。Red Hat托管实例：[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [fakejson.com](https://fakejson.com/) — 通过API快速生成虚假JSON数据。描述需求后API即返回相应数据，加速创意落地。
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏工具。免费版每天支持5个VM实例。
* [GitPod](https://www.gitpod.io) — 为GitHub项目提供即时开发环境。免费版每月50小时。
* [ide.goorm.io](https://ide.goorm.io) - 云端全功能IDE。支持多语言、基于Linux容器的终端、端口转发、自定义URL、实时协作聊天、Git/Subversion等。免费版含1GB内存、10GB存储和5个容器槽位。
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器和编辑器，免费版REST API每天200次调用额度。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具和IDE（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源项目及用户组可免费使用。
* [jsbin.com](https://jsbin.com) — 前端网页开发Playground（HTML/CSS/JavaScript），同时支持Markdown、Jade和Sass。
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端网页Playground。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 返回虚假JSON数据的REST API端点，源码可本地部署。
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 基于AI的免费云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 生成虚假JSON数据的微型API模拟服务。
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP模拟服务，支持返回JSON/XML数据。
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式测试数据，也可模拟后端API。
* [Mocklets](https://mocklets.com) - HTTP模拟API工具，终身免费。
* [Paiza](https://paiza.cloud/en/) - 无需配置的浏览器开发环境。免费版提供24小时有效期的服务器，每天4小时运行时间（2核CPU/2GB内存/1GB存储）。
* [Prepros](https://prepros.io/) - 支持Sass/Less/Stylus/Pug/CoffeeScript/TypeScript等语言的实时编译和浏览器刷新，可自定义工具链。
* [Replit](https://replit.com/) — 多语言云端编程环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端Playground，支持多种语言。运行代码无需注册，保存代码需登录。提供免费编程课程。
* [stackblitz.com](https://stackblitz.com/) — 全栈应用云端IDE，支持主流NodeJS框架。快速创建项目：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - 流行、多功能且高度可定制的代码/文本编辑器。
* [Visual Studio Code](https://code.visualstudio.com/) - 微软开发的现代化代码编辑器，优化了Web和云应用开发调试体验。

  * [VSCodium](https://vscodium.com/) - 社区驱动的 VSCode 二进制发行版，无遥测/追踪，采用自由软件许可
* [wakatime.com](https://wakatime.com/) — 通过编辑器插件量化编程活动，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持内联渲染、会话保存和历史记录，基于开放网络标准，支持 MacOS 和 Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内 Web Components 开发环境，提供 58 种模板，支持故事书和测试
* [PHPSandbox](https://phpsandbox.io/) — 在线 PHP 开发环境
* [WebDB](https://webdb.app) - 免费高效的数据库 IDE，支持服务发现、ER 图、数据生成器、AI、NoSQL 结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 高性能多人协作代码编辑器，由 Atom 和 Tree-sitter 团队开发
* [OneCompiler](https://onecompiler.com/) - 支持 70+ 语言的在线编译器，包括 Java、Python、C++、JavaScript 等

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将客户数据从数据仓库同步至CRM、营销和支持工具。免费版支持同步到一个目标应用
* [Avo](https://avo.app/) - 简化的分析发布流程。提供单一事实来源的跟踪方案、类型安全分析库、应用内调试器和数据可观测性。免费版包含2个工作区成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费版支持1万移动应用用户，含深度链接等服务
* [Cauldron](https://cauldron.io) - 开源分析解决方案，支持聚合Git/GitHub/Gitlab等协作平台数据。免费版包含无限量报告
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。免费版支持从数据仓库同步10个字段至60+个SaaS应用
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持单个网站3000次浏览分析
* [Databox](https://databox.com) - 整合多平台数据的商业洞察工具。免费版支持3用户、仪表板和数据源，包含1100万条历史数据
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万次事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台，提供托管服务（非商业用途免费）或自托管选项。免费版支持无限网站、6个月数据保留和每月10万次浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私保护型谷歌分析替代方案。免费版每月2万次浏览且无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告工具，免费提供个人报销审批流程
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，每月免费3000次事件
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为。免费版支持每月1万次会话
* [Hotjar](https://hotjar.com) - 网站分析与报告。免费版每日2000次浏览、100个快照（上限300）、存储3个热图365天。同时提供应用内调查和反馈组件，免费版每月可创建3个调查和3个反馈组件
* [Keen](https://keen.io/) - 自定义数据分析平台。免费版每月1000次事件
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务，完全免费且无用户/请求限制
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万跟踪用户，无限数据历史和席位，支持欧美数据中心
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析工具（免费50万次API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费版支持1个网站+1个iOS应用+1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具。免费版限制100万用户许可证
* [Row Zero](https://rowzero.io) - 超高速互联电子表格。免费版永久提供3个工作簿
* [sematext.com](https://sematext.com/cloud/) - 免费5万次操作/月，1天数据保留，无限仪表板
* [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版提供5个指标结果、1个月移动数据和3个月网站数据
* [StatCounter](https://statcounter.com/) - 网站访问分析。免费版可查看最近500位访客
* [Statsig](https://statsig.com) - 集成分析、功能标记和A/B测试的平台。免费版每月100万次事件
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者计划提供个人沙盒许可证
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型测试工具。免费版支持1个用户无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台，支持50万次操作和90天数据保留
* [counter.dev](https://counter.dev) - 简洁的隐私友好型网站分析工具，支持捐赠付费
* [PostHog](https://posthog.com) - 完整产品分析套件，免费版每月100万次事件，含250次应用内调查响应
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，开源项目可申请个人订阅
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为记录工具
* [Beampipe.io](https://beampipe.io) - 简洁的隐私优先网站分析工具，免费支持5个域名和1万次月浏览
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析工具，免费版每月2万次事件
* [Trackingplan](https://www.trackingplan.com/) - 自动化数字分析监测与跟踪方案管理工具
* [LogSpot](https://logspot.io) - 统一分析平台，免费版每月1万次事件
* [Umami](https://umami.is/) - 简洁快速、注重隐私的谷歌分析替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私保护分析工具，免费支持3个域名和每域名600次会话回放
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具，免费版每月1万次事件

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站与产品分析工具。免费方案每月包含3,000次事件记录。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie追踪且操作直观性提升10倍。免费方案支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，提供用于错误复现的开发者工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，提供三个用户席位。更多信息请见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次免费会话
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，支持"无流量限制"、无项目限制且无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次免费会话
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次免费会话
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗分析，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目可无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次免费API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元可免费使用。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API调用。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月收入低于1万美元免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，支持移动端应用内订阅集成至iOS、Android、React Native、Flutter、Unity或网页应用。每月收入低于1万美元免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密和法币汇率。免费版每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 提供物理货币和加密货币的实时汇率，支持JSON和XML格式。免费版每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费微型计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费实现API变现。可连接Stripe、Chargebee等平台。免费版每月3万次事件处理。
* [Nami ML](https://www.namiml.com/) - 完整的应用内购和订阅平台（支持iOS/Android），包含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购和订阅后端服务（iOS/Android）。每月追踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟增值税率API，免费版每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据API。私人用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像  
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐为私有仓库提供1GB存储空间  
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像  
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的实践平台  
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库  
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像仓库  

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。Vagrant 虚拟机托管平台
* [Vagrantbox.es](https://www.vagrantbox.es/) — 替代性公共虚拟机索引库

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的观点、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站受众中建立活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可将 GitHub issues 用于博客评论、维基页面等场景！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万个网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"单个管理员在多个域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截取、捕捉时间及视窗尺寸控制。
* [microlink.io](https://microlink.io/) – 将任意网站转化为结构化数据，包括元标签标准化、精美链接预览、爬虫功能及截图服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任何网站的截图。基于Google Cloud构建，具备高扩展性。每月免费100张截图。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照服务。每月免费100次截取。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次截取，支持png/gif/jpg格式，包含整页截取（不限于首页）。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图及域名智能API服务。每月免费100次请求。
* [Screenshots](https://screenshotson.click) — 多功能截图API，支持高度定制化截取参数。每月免费100张截图。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与免Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的理想平台。无需 Mac 设备即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管的移动应用持续集成与交付平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) —— 一款极速的x86虚拟机，可在浏览器中运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，能够运行Linux系统
* [v86](https://copy.sh/v86) —— 可直接在浏览器中运行Linux及其他操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队且仅支持SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意书管理服务。免费版提供有限的隐私/Cookie政策及横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理框架工具。免费版在访问量限制下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，涵盖同意管理、隐私请求处理(DSARs)和数据映射。免费版包含核心同意管理功能，并为通过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网设备管理平台。免费开发者计划支持5台设备，含免费云存储。提供移动端应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于Twitter或博客展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转为社交媒体可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或周期性webhook调度服务。免费版支持5个临时任务
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，提供无限量免费任务
* [datelist.io](https://datelist.io) - 在线预约系统。免费版每月5次预订额度，包含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具。免费版支持5个域名及每月20万次请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞检测平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加无忧webhook支持：含队列管理、退避重试和日志功能。免费版每日100次投递，14天留存，支持3个端点
* [http2.pro](https://http2.pro) — HTTP/2协议支持测试与客户端检测API
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 在线免费数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab等平台的版本更新通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时查看照片EXIF数据（含GPS定位和元数据）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。每月免费300份文档
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全的模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥与密码的移动端友好工具
* [ray.so](https://ray.so/) - 为代码片段创建精美图片
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档生成平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.ing](https://redirect.ing/) - 无需管理服务器的快速域名转发服务。免费版含10个主机名和每月10万次请求
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理。免费版含10个源地址和每月10万次点击
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具。支持GET/POST/PUT/DELETE/HEAD方法，含Headers和Token认证，可保存请求记录
* [Smartcar API](https://smartcar.com) - 车辆定位、油量/电量查询、里程读取、车门锁控等汽车API
* [snappify](https://snappify.com) - 开发者视觉化工具，从代码片段到技术演示。免费版支持3个同时编辑，含5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub订阅源服务，免费版功能受限
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具。免费版每份问卷限10个问题和100份回复
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台，支持网站实时聊天组件到WhatsApp。免费版不限机器人数量
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅源。免费版支持3个订阅源
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具集，支持编解码与数据转换

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制  
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关  
* [RemSupp](https://remsupp.com) — 按需技术支持与设备永久访问权限（每日免费2次会话）  
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！  
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制  

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，包含精灵图、瓦片集和角色包等
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏艺术家提供的免费素材
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费的2D、3D、音频和GUI资源
* [OpenGameArt](https://opengameart.org) — 开源游戏素材库，包含音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景图、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY协议的免费可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供大量教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D/3D素材、音频、图标和游戏套件市场，也可用于作品集展示
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建自定义游戏素材
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型及PBR材质纹理库
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的免费2D/3D素材、音频和UI资源
* [Poliigon](https://www.poliigon.com/) — 免费/付费纹理（多分辨率可选）、模型、HDRI和笔刷，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的免费协作音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的Web开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供经过公共CA签名的`*.localhost.direct`通配符SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [github.com — 开发者开源资源](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML、CSV、PDF、JSON和Excel文件与Markdown相互转换的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度通过遥测数据算法自动续期
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的红帽产品免费访问权限（包括RHEL、OpenShift、CodeReady等），仅限个人计划，同时提供免费电子书参考
* [临时短信接收](https://smsreceivefree.com/) — 提供免费临时 disposable 手机号码
* [SMS测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups备份服务](https://simplebackups.com/) — 面向服务器和数据库（MySQL/PostgreSQL/MongoDB）的自动化备份服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter备份方案](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直接备份数据库/文件系统/应用到S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量、现代化、专业易用的免费管理后台模板/HTML主题/UI套件，加速应用开发
* [网站性能检测](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名的工具
* [开发者小工具集](https://smalldev.tools/) — 支持编解码/代码压缩美化/生成测试数据等功能的开发者工具，拥有优雅界面
* [UseCSV数据导入](https://layercode.com/usecsv) — 快速为Web应用添加CSV/Excel导入功能，免费版支持100MB文件大小且无需绑卡
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+可直接使用的网页按钮样式
* [WrapPixel模板库](https://www.wrappixel.com/) — 高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun工具集](https://utils.fun/en) — 基于浏览器计算的离线工具集（水印生成/录屏/编解码/加解密/代码格式化等），完全免费不上传云端
* [IT工具集](it-tools.tech) - 面向开发者和IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的代码工具集（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）
* [正则表达式测试](https://regex101.com/) — 提供正则表达式编辑测试与学习资源
* [Kody开发者工具](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换等）
* [AdminMart模板库](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs等）
* [Glob模式测试](https://globster.xyz/) — 可视化Glob模式设计与测试平台
* [SimpleRestore数据库恢复](https://simplerestore.io) - 无需代码即可将MySQL备份恢复到任意远程数据库
* [360格式转换](https://www.360converter.com/) - 免费的音视频转文字工具（支持实时音频/YouTube视频/字幕生成）
* [QRCodeBest](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成器，支持追踪像素和团队协作
* [PostPulseAI](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版每月可手动发布1篇
* [PageTools工具包](https://pagetools.co/) - 永久免费的AI工具集（生成网站政策/社交媒体内容/网页等）
* [MySQL执行计划可视化](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出分析工具
* [Killer Coda交互实验室](https://killercoda.com/) - 浏览器内的Linux/Kubernetes/容器/编程/DevOps实验环境
* [Axonomy发票工具](https://axonomy-app.com/) - 免费版每月可创建10张发票
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）

**[⬆️ 返回顶部](#目录)**