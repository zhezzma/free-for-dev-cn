# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间进行调研。

本清单收录了提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单特别限定于基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的资源。我们虽喜爱所有免费服务，但仍需保持主题相关性。有时界限较为模糊，因此清单内容存在主观判断——若未采纳您的贡献，敬请谅解。

这份清单汇集了1600多人提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加新服务，或移除已变更或停服的项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限"即服务"类产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用），若采用时间计量则至少需提供一年期免费方案。同时我们从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
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
  * [其他分类](#其他分类)
  * [监控服务](#监控服务)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关与免Mac构建iOS应用](#Flutter相关与免Mac构建iOS应用)
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

## 主流云服务商的永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美至全球（不含中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
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
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM，1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每天60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [存储](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [认知服务](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限事务
    * [认知搜索](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，10,000个文档免费
    * [Azure Kubernetes服务](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [事件网格](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个AMD架构计算VM，每个1/8 OCPU和1GB内存
       - 4个Arm架构Ampere A1核心和24GB内存，可单VM或最多4个VM使用
       - 实例在[判定闲置](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿数据点采集，10亿数据点检索
    * 带宽 - 每月10TB出站流量，x64架构VM限速50Mbps，Arm架构VM限速500Mbps*核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知 - 每月100万次投递选项，1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，不限流量的速率限制（每域名1条规则），分析，邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用程序所需的一切，无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上实现部署自动化。免费版支持单个开发者（单用户）部署无限量的静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限量公共和私有Git仓库，提供CI/CD流水线支持
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限量公共和私有Git仓库（支持无限协作）。基于[Forgejo](https://forgejo.org/)构建。提供[Codeberg Pages](https://codeberg.page/)静态网站托管、[Codeberg CI](https://docs.codeberg.org/ci/)持续集成、[Codeberg Translate](https://translate.codeberg.org/)翻译托管，包含软件包/容器托管、项目管理和问题追踪
* [GitGud](https://gitgud.io) — 无限量公共和私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD
* [GitHub](https://github.com/) — 无限量公共仓库和私有仓库（支持无限协作），包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限量公共和私有Git仓库，包含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件协作平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发仓库和工具集，包含专属Ionic仓库
* [NotABug](https://notabug.org) — 自由许可证项目的Git代码协作平台
* [OSDN](https://osdn.net/) - 面向开源开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库托管
* [Pagure.io](https://pagure.io) — 基于Git的FOSS许可证项目代码协作平台
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) - 无限量免费开源的分布式版本控制系统，其基于补丁理论的独特设计更易学习使用，解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源和非营利组织的免费服务
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/Subversion）含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管，支持无限量公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选成美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大的API，快速开发原型、网站、应用等。每月500次请求免费。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 提供多种API套件，包括IP地理定位、性别检测和电子邮件验证等。
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 提供全面了解API和后端所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性工具，用于模型监控和根因分析（如数据质量和性能漂移）。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
* [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的逻辑、CRUD和有状态模拟、代理和CORS管理的即时服务器，以加速集成和测试。免费计划每天50次请求，并提供公共仪表板/端点，任何拥有仪表板URL的人都可以查看提交的请求和响应。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层每月100次请求，覆盖9个端点。
* [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API，用于自定义人脸识别和检测。可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用程序API平台，提供广泛的API库访问，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据谱系，覆盖从训练到生产的工作流程。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份见解。免费计划限制为一个用户、数据连接、数据源和数据目标。还需要手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，适用于金融科技应用。免费计划每月5,000次调用。
* [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织成一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制1,000次查询。
* [Data Fetcher](https://datafetcher.com) - 无代码将Airtable连接到任何应用或API。在Airtable中运行API请求的Postman式界面。预建与数十个应用的集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括10GB存储和每月120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可下的精简数据库也是免费的。

  * [DeepAR](https://developer.deepar.ai) — 适用于所有平台的增强现实人脸滤镜SDK。免费方案支持每月10位活跃用户(MAU)并追踪最多4张人脸  
* [Deepnote](https://deepnote.com) - 新一代数据科学笔记本。兼容Jupyter，支持实时协作与云端运行。免费层包含无限个人项目、基础机型(5GB内存+2vCPU)及最多3名编辑的团队协作  
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，助力开发相关应用  
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费方案每月可生成250份文档  
* [Doppio](https://doppio.sh/) — 采用顶尖渲染技术的托管API，用于生成和私有化存储PDF及截图。免费方案每月400次生成额度  
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器  
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页及物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储或外部服务后，可即时生成带实时文档和用户管理的完整REST API平台  
* [Duply.co](https://duply.co) — 通过API和URL动态生成图像，模板设计一次即可重复使用。免费层提供20点额度  
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF文档生成API。免费方案每月50次调用并开放模板库  
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台。可视化任意计算图谱，免费本地使用  
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具。试用版包含2个项目（各10张表）  
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP请求工具  
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK与无代码集成方案。免费层每月250页，支持无限用户和3个模板  
* [file.coffee](https://file.coffee/) - 单文件存储上限15MB（注册用户30MB）的平台  
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费方案每日300次请求  
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具  
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费微型方案每月500次交易检测  
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的定位服务。免费API每月500次查询  
* [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP定位API，免费方案每日2,000次请求  
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图像和5个模板  
* [Hex](https://hex.tech/) - 面向笔记本/数据应用/知识库的协作式数据平台。免费社区版支持5个项目  
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)解决方案，免费方案每日100次事件推送并保留7天历史记录  
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器  
* [huggingface.co](https://huggingface.co) - 面向Pytorch/TensorFlow/JAX的NLP模型构建/训练/部署平台。免费版每月3万字符输入  
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天试用期包含50份单页报告，支持调色板和字体定制  
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI/Power Query）访问70多个云平台。含数据复制交换功能。开发者与实施顾问免费，特定平台有数据量限制  
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务  
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，无需API密钥，免费方案同一IP限45次/分钟  
* [ipbase.com](https://ipbase.com) - IP定位API，永久免费方案每月150次请求  
* [IP Geolocation](https://ipgeolocation.io/) — 开发者永久免费方案每日1,000次请求  
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，免费1,000次请求  
* [IPLocate](https://www.iplocate.io) — IP定位API，免费每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP关联企业等。另提供可下载的IP与国家/ASN映射数据库（CSV或GeoIP兼容格式）  
* [IP2Location](https://www.ip2location.com) — 免费版IP定位服务。LITE数据库可免费下载至服务器本地查询城市/坐标/ISP信息  
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API。免费方案每月5万点额度，另含500次WHOIS和域名查询  
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的可靠IP定位API。免注册免费方案每月3万次查询（每日1k）  
* [ipapi.is](https://ipapi.is/) - 开发者打造的精准IP定位API，具备顶级主机检测能力。免注册免费试用1,000次查询  
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（免费5万次/月）。提供地理位置/企业/运营商/IP范围/域名/滥用联系人等数据。所有付费API可免费试用  
* [IPQuery](https://ipquery.io) — 开发者专用无限次IP查询API，无速率限制和费用  
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月免费5万次查询  
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API  
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP。免注册无限次请求，支持CORS直接通过浏览器JS调用  
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON对象并作为REST API使用的开发者服务

  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss 是一款强大的在线 JSON 查看器、编辑器和验证工具。通过 AI 辅助修复、树状视图、表格视图、支持 12+ 种编程语言的代码生成功能，可格式化、可视化、搜索和操作 JSON 数据，还能将 JSON 转换为 CSV、XML、YAML、Properties 等格式。
  * [konghq.com](https://konghq.com/) — API 市场及强大的私有/公有 API 工具。免费版功能受限，例如监控、告警和支持服务。
  * [Kreya](https://kreya.app) — 免费的 gRPC GUI 客户端，用于调用和测试 gRPC API。支持通过服务反射导入 gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型性能。免费支持最多 1000 条样本的数据集。
  * [LoginLlama](https://loginllama.app) - 登录安全 API，用于检测欺诈和可疑登录并通知客户。每月免费处理 1,000 次登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证有效邮箱的电子邮件验证服务。免费 API 计划每月提供 100 次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。"永久免费" API 层级每天允许 100 次免费请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气 API，提供当前和预测天气数据。预测基于多天气模型的机器学习组合以实现更高精度。免费计划每天支持 400 次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、美观链接预览、爬取功能或截图即服务。每天 50 次免费请求。
  * [Mindee](https://developers.mindee.com) – Mindee 是强大的 OCR 软件和 API 优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者标准化文档处理层以自动化应用工作流。免费层级每月提供 500 页处理量。
  * [Mintlify](https://mintlify.com) — 现代 API 文档标准。提供美观易维护的 UI 组件、应用内搜索和交互式演练场。免费支持 1 名编辑者。
  * [MockAPI](https://www.mockapi.io/) — MockAPI 是快速模拟 API、生成自定义数据并通过 RESTful 接口执行操作的简易工具，专为原型设计/测试/学习打造。每个免费项目限 2 个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly 是值得信赖的 API 模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟 API。免费层级每天支持 500 次请求。
  * [Mocki](https://mocki.io) - 可创建与 GitHub 仓库同步的模拟 GraphQL 和 REST API 的工具。无需注册即可免费开发和使用简单 REST API。
  * [Mocko.dev](https://mocko.dev/) — 免费代理您的 API，在云端选择要模拟的端点并检查流量。加速开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 生成自定义 HTTP 响应以模拟 HTTP 请求的简易网页应用。也提供[开源版本](https://github.com/julien-lafont/Mocky)。
  * [Mock N Roll](https://mocknroll.me/) - 免费模拟 API 服务——无需后端延迟即可模拟真实 API 响应的强大工具。完美适配前端开发、QA 测试和 DevOps 团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
  * [microenv.com](https://microenv.com) — 为开发者创建虚假 REST API，支持生成代码并打包为 Docker 应用。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，用于检查多节点出口 IP 地址，了解您的 IP 在不同全球区域和服务中的呈现方式。适用于测试 Control D 等基于规则 DNS 分流工具。
  * [Namekit](https://namekit.app/) - AI 驱动的域名发现工具——即时查找可用标准价格域名。免费每日查询。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取 JSON 结果。开发者每天可免费查询 100 次，文章有 24 小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100 次免费请求。
  * [OCR.Space](https://ocr.space/) — 将图像和 PDF 文件解析为 JSON 格式文本结果的 OCR API。每月 25,000 次免费请求，文件大小限制 1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建 Open API 3 定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为 API，免费支持 5 个项目。
  * [Parseur](https://parseur.com) — 每月 20 页免费额度：从 PDF 和电子邮件提取数据。AI 驱动，提供完整 API 访问。
  * [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者友好型 PDF 生成 API，提供 Stripe 风格文档，每月包含 500 次免费 PDF 转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单 API 轻松将 HTML 或 URL 转换为 PDF。每月 100 次免费转换。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，提供可视化模板编辑器或 HTML 转 PDF、动态数据集成和 API 渲染功能。免费计划包含 1 个模板，每月 100 次 PDF 生成。
  * [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过 API 执行，支持热力图和折线图可视化。
  * [Postman](https://postman.com) — 使用协作式 API 开发平台 Postman 简化工作流并更快创建更好 API。Postman 应用永久免费，云端功能在特定限制下也永久免费。
  * [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 REST 及 GraphQL API
  * [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含每月 5 个部署工作流和 500 分钟无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。5 人以下团队永久免费，功能包括无限仪表盘和图表、无代码图表构建器和协作式 SQL 编辑器。
  * [PromptLoop](https://www.promptloop.com/) - PromptLoop 提供 10 倍易用性的 AI 网页爬取，接近零学习成本，节省现有工作流 85%+ 时间，运行速度比人工研究快 4 倍且无损质量，包含所有研究任务的 REST API 端点。每月前 1,000 积分免费。
  * [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 10k 次请求的免费层级。
  * [Public-Apis Github 仓库](https://github.com/public-apis/public-apis) — 免费公共 API 列表。
  * [Reducto](https://reducto.ai) - 将非结构化文档（PDF、XLSX、JPG、PPTX 等）转为结构化 JSON 数据。解析、提取数据并编辑 PDF 表单。免费层级含 15k 积分和按量付费选项。
  * [Rapidapi](https://rapidapi.com/) - 全球最大 API 中心，数百万开发者通过趣味挑战（含解决方案！）和交互示例连接数千个 API 进行开发。
  * [Rendi](https://rendi.dev) - FFmpeg API - 为 FFmpeg 提供的 REST API，无需处理基础设施即可在线运行 FFmpeg。免费层级包含月度处理配额和 4 个可用 vCPU。

  * [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应您的AJAX请求
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分
* [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特酷炫图像的Web服务
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，用于网页抓取。匿名抓取，无需担心限制、封锁或验证码。每月前100次成功抓取免费（含JavaScript渲染，联系客服可获更多额度）
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API及免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度
* [ScrapX](https://www.scrapx.io/) — 监控目标网站视觉/文本变化及数据提取。免费版每月支持5个URL
* [Simplescraper](https://simplescraper.io) — 每次操作后触发Webhook。免费套餐包含100次云端抓取额度
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析与归档数据。免费轻量版支持2个数据源/1,000张表/25个用户
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费套餐每表含1,000行免费额度
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能API。免费版每月100次请求
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API，返回Google/YouTube/Bing等平台的结构化JSON结果。免费版每月100次成功调用
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供高效开发工具。免费版含300处理单元/月，支持浏览器上传/数据隔离/熔断机制/任务提醒
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。免费版含2个API/2,500次调用/月（无需信用卡）
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费、隐私优先的在线工具，直接在浏览器中将CSV转为结构化JSON
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，含格式化器/验证器/正则测试器/假数据生成器/交互式数据库沙盒
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费版提供设计/模拟/文档工具
* [Supportivekoala](https://supportivekoala.com/) — 通过模板自动生成图像。免费版每月50张
* [Svix](https://www.svix.com/) - Webhook即服务。免费版每月50,000条消息
* [Tavily AI](https://tavily.com/) - 在线搜索与研究API，支持结果智能整理。免费版1,000次请求/月（无需信用卡）
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供国家/城市/区域等IP位置信息
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API，核心功能无限免费使用
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 免费天气API，提供全球精准预报/历史数据/天气监测方案
* [Treblle](https://www.treblle.com) - API全生命周期管理平台（构建/发布/治理）。免费版含所有功能，每月250,000次请求限额
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API。免费版无限调用，适合开发者与金融应用
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月150次免费验证
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API（实时/预报/警报），结合AI模型提升预测精度。免费版10,000次调用/月
* [WebScraping.AI](https://webscraping.ai) - 内置解析器/Chrome渲染/代理的网页抓取API。每月2,000次免费调用
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台，加速模型开发（实验追踪/数据集版本控制）。免费版限个人项目，含100GB存储
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版25,000令牌/月（约10个PR）
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月30,000次调用
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器/住宅IP的网页抓取API。每月1,000次免费调用（学生/非营利组织可获额外额度）
* [Zipcodebase](https://zipcodebase.com) - 免费全球邮编API。每月5,000次请求
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与验证服务。每月10,000次请求
* [Zuplo](https://zuplo.com/) - 免费API管理平台（设计/部署/边缘发布）。支持API密钥认证/限流/文档/货币化。免费版含10个项目/无限生产环境/100万请求/10GB出口流量
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位数据结构差异
* [FreeIPAPI](https://freeipapi.com) - 免费快速可靠的IP地理定位API（支持商业用途），返回JSON格式数据

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有及公共Maven和PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 提供1GB免费私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有及公共制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) - 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) - 团队专属聊天应用。公开群组免费，支持无限用户、完整历史记录与集成，并提供可自托管的开源版本
* [cally.com](https://cally.com/) - 轻松为会议寻找最佳时间，适用于各种规模团队
* [Calendly](https://calendly.com) - 智能会议连接与调度工具。免费版支持1个日历连接和无限会话，提供桌面端与移动端应用
* [Discord](https://discord.com/) - 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队专用的免费实时Scrum Poker工具，支持无限成员快速估算故事点
* [Telegram](https://telegram.org/) - 为所有人提供快速可靠的消息与通话服务。大容量群组、用户名系统、桌面应用及强大文件分享功能特别适合商业用户与小团队
* [DevToolLab](https://devtoollab.com) - 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度与社区支持
* [Dubble](https://dubble.so/) - 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) - 实时团队交流协作平台。集成IDE配对编程、终端共享、语音视频及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月包含10,000分钟音视频时长
* [evernote.com](https://evernote.com/) - 信息整理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) - 互联工作区平台。单用户免费，最高2GB存储空间
* [flock.com](https://flock.com) - 高效团队沟通工具。免费提供无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议方式。通过可定制虚拟空间实现真实社区互动，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动的每日报告工具。含推送可视化、同伴认可系统及自定义提醒构建器。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) - GitHub专属聊天工具。公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档编辑工具。类似Google Docs的Markdown版本，免费笔记数量无限制，但私有笔记的协作者人数和模板功能将受限
* [hangouts.google.com](https://hangouts.google.com/) - 集成所有对话的一站式平台（需Google账号）
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴与视频通话的任务管理工具。5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) - 增强现实视频协助工具。免费版不含分析、加密及支持服务
* [ideascale.com](https://ideascale.com/) - 客户提案与投票平台。25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) - 文档、博客、日历共享的内部门户。10人以下团队免费
* [Keybase](https://keybase.io/) - Slack的开源替代方案，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) - 企业级在线视频会议解决方案
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/群组/DM中使用/meet命令发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) - 支持标签分类、多工作区协作的团队书签管理器。免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) - 为跨职能产品团队与开源项目提供无缝协作的工作流平台
* [Lockitbot](https://www.lockitbot.com/) - 在Slack内预约锁定会议室/开发环境等共享资源。免费支持2个资源
* [MarkUp](https://www.markup.io/) - 直接在网站/PDF/图片上收集反馈的工具
* [Proton Pass](https://proton.me/pass) - 集成邮箱别名、2FA验证器、共享与通行密钥的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) - 一键发起视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) - 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基与数据库的Markdown协作笔记应用，被设计为全能工作空间
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具。免费版含核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、绘图板与在线代码编辑器的免费编程面试平台，支持浏览器端代码编译运行
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间表与追踪应用。免费版支持10人以下的时间追踪与报告生成
* [Pendulums](https://pendulums.io/) - 通过直观界面与数据统计帮助优化时间管理的免费时间追踪工具
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户与完整消息历史
* [Raindrop.io](https://raindrop.io) - 跨平台的安全书签管理工具（支持macOS/Windows/Android/iOS/Web），提供无限书签与协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息传递和完整消息历史记录
* [seafile.com](https://www.seafile.com/) - 私有或云存储解决方案，支持文件共享、同步和讨论。免费云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码仓库的贡献并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器直接与协作者共享屏幕
* [Slab](https://slab.com/) - 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) - 支持无限用户的免费版本（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页面的聚合看板，可追踪上游服务提供商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个面板墙、无限用户和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载问题。永久免费个人计划
* [StreamBackdrops](https://streambackdrops.com) - 免费高清虚拟背景库，适用于Zoom/Teams/Google Meet等视频会议。无需注册，个人使用免费
* [talky.io](https://talky.io/) - 免费群组视频聊天工具。匿名P2P连接，无需插件/注册/付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum实现，集成时间追踪功能。免费支持5用户+3项目组合
* [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程，包含完整的远程团队休假管理功能。5人以下小团队免费
* [Tefter](https://tefter.io) - 书签管理应用，提供强大的Slack集成。开源团队免费
* [TeleType](https://teletype.oorja.io/) - 终端/语音/代码/白板等端到端加密协作工具，开发者无需登录即可使用
* [TimeCamp](https://www.timecamp.com/) - 免费时间追踪软件（无限用户），轻松集成Jira/Trello/Asana等项目管理工具
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion的替代方案），每工作区10GB存储+10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用
* [twist.com](https://twist.com) - 异步友好型团队通讯应用，保持对话条理化。提供免费无限量计划，合格团队可享折扣
* [tldraw.com](https://tldraw.com) - 免费开源白板绘图工具，支持智能箭头/吸附/便签/SVG导出，含多人协作模式。官方VS Code扩展免费
* [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签/任务管理器，提供可定制云桌面及文件夹协作功能
* [typetalk.com](https://www.typetalk.com/) - 通过网页/移动端的即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR请求。所有人免费，非营利组织额外赠送Nano套餐
* [whereby.com](https://whereby.com/) - 一键式免费视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，可通过Python/Typescript脚本快速构建多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) - 简易视频托管营销平台，单次点击上传视频。免费版提供10个视频/1GB存储/10GB月流量
* [userforge.com](https://userforge.com/) - 互联在线角色/用户故事/情境映射工具，保持设计与开发同步。免费支持3个角色+2名协作者
* [wistia.com](https://wistia.com/) - 带观众分析的高清视频托管平台，25个视频容量+品牌播放器
* [wormhol.org](https://www.wormhol.org/) - 直连文件分享服务，支持无限5GB文件共享
* [Wormhole](https://wormhole.app/) - 端到端加密文件分享（24小时内有效），5GB以上文件采用P2P传输
* [zoom.us](https://zoom.us/) - 安全视频/网络会议工具，免费版限时40分钟
* [Zulip](https://zulip.com/) - 采用独特邮件式线程模型的实时聊天工具，免费版含1万条可搜索历史+5GB存储，另有开源自托管版本
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件，免费体验云功能并实现简单自动化：240分钟/月机器人时长+10次助手运行+100MB存储
* [Fleep.io](https://fleep.io/) - Slack替代方案，小团队免费计划包含完整消息历史/无限私聊/1个群组对话/1GB存储
* [Chanty.com](https://chanty.com/) - 另一款Slack替代工具，永久免费支持10人以下团队：无限公私对话/可搜索历史/无限语音通话/10个集成/20GB团队存储
* [ruttl.com](https://ruttl.com/) - 最佳一体化反馈工具，用于收集网站/PDF/图片的数字化反馈
* [Mattermost](https://mattermost.com/) - 技术团队专用安全协作平台，免费版含无限频道/剧本/看板/用户+10GB存储
* [Webvizio](https://webvizio.com) - 网站反馈工具，可直接在实时网站/Web应用/图片/PDF/设计文件上开展开发协作
* [Pullflow](https://pullflow.com) - 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Webex](https://www.webex.com/) - 视频会议工具，免费版支持100人40分钟会议
* [RingCentral](https://www.ringcentral.com/) - 视频会议工具，免费版支持100人50分钟会议
* [GitBook](https://www.gitbook.com/) - 技术知识管理平台（产品文档/内部知识库/API文档等），个人开发者免费
* [transfernow](https://www.transfernow.net/) - 最简单快速安全的文件传输界面，无需订阅即可发送照片视频等大文件
* [paste.sh](https://paste.sh/) - 基于JavaScript和加密技术的简易粘贴站点

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在网站上收集项目反馈，无需模拟器、画布或变通方案。免费版功能完整可用。

  * [Cushion](https://cushion.so/) - 专为高效协作的分布式小团队设计的Slack替代品。免费版支持30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。开发者可享免费套餐，同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API，免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 与 API 工具包，提供开发者免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5 GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 小项目免费套餐。基于 GraphQL 的 CMS，基础层提供 10 万次/月 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS。完全免费的平台，支持本地或云端管理资源与数据库内容，无功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言的交付/管理 API 及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS。全托管可扩展 API 的内容管理界面，社区计划为单个用户提供无限 API 调用、文档、自定义类型、资源和多语言支持。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。每个项目免费包含无限管理员用户、3 个非管理员用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划含 3 个用户、500 个内容项、3 种内置角色、25+5 种内容类型、全功能 REST API、文档预览生成和 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代品。开源 Git 托管的无头 CMS，支持 Markdown、MDX 和 JSON，基础版免费提供 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，让使用任何 CMS/API/数据库构建网站变得轻松。构建无头网站以提升流量、转化率和收益！
* [Hygraph](https://hygraph.com/) - 小项目免费套餐。GraphQL 优先 API，告别传统方案，用原生 GraphQL 无头 CMS 实现全渠道内容交付。
* [Squidex](https://squidex.io/) - 小项目免费套餐。API/GraphQL 优先，开源且基于事件溯源（自动记录每次变更）。
* [InstaWP](https://instawp.com/) - 秒建 WordPress 站点。免费套餐含 5 个活跃站点、500 MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销者的无头 CMS，兼容所有现代框架。社区（免费）版含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持、2500 个资源管理、图片优化服务、搜索查询和 250GB/月流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务，无时间限制。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，通过简单输入生成精美商业网站。支持免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的API和路由，实现深度集成。免费方案包含3个项目、5张数据表和Google插件支持。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款智能编程助手，通过AI技术深度理解代码库，帮助开发者更快编写和理解代码。支持多款LLM选择（含本地推理）、兼容主流IDE、适配所有热门编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（基于Starcoder 16b模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目免费使用，商业友好型免费方案包含3个切面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限量的行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中提取洞见，帮助开发者更快打造优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据文本提示生成代码。基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，新用户初始获得1200积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和1个100 MB存储的代码仓库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者工作模式优先处理技术债务，可视化团队耦合度等组织因素。开源免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪。通过精准指标在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI的缺陷/安全漏洞/性能问题检测，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源项目及30人以下团队免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，自动修复安全/性能/反模式等问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库与SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub PR与提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析。开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证与多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助定位需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供强大的代码截图工具（含预设模板和链接功能），支持代码片段整理、发现与共享

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化Web无障碍测试集成到您的开发流程中。开源和教育用途免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更快速高效的发布周期。免费版支持每次构建最多30分钟，每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
  * [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持Kubernetes和Lambda环境中的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，每次构建10分钟，支持2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
  * [buddy.works](https://buddy.works/) — CI/CD服务，免费支持5个项目和一个并发运行（每月120次执行）
  * [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时间。测试分析免费开发者层包括每月10万次测试执行，开源项目有更多免费包含项。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包含所有功能的托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存和其他高级CI/CD功能。免费支持每月最多6000分钟执行时间，无限协作者，私有项目中30个并行任务，开源项目最多8万分钟免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
  * [cirun.io](https://cirun.io) - 公共GitHub仓库免费
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，一个环境，共享服务器，无限公共仓库
  * [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时间
  * [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
  * [deploybot.com](https://www.deploybot.com/) — 1个仓库和10次部署，开源项目免费
  * [deployhq.com](https://www.deployhq.com/) — 1个项目和每日10次部署（每月30分钟构建时间）
  * [drone](https://cloud.drone.io/) - Drone Cloud使开发者能够在多种架构上运行持续交付流水线，包括x86和Arm（32位和64位），一站式完成。
  * [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
  * [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建一个VM，并通过唯一URL使您的应用可用，无限公共和私有仓库，VM大小最多2GB。
  * [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
  * [Mergify](https://mergify.com) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费
  * [Make](https://www.make.com/en) — 工作流自动化工具，允许您通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层包括100 Mb、1000次操作和15分钟的最小间隔。
  * [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月免费3000分钟构建时间。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、使用Open Policy Agent的持续资源合规性、SAML 2.0的SSO，以及访问公共工作池：每月最多200分钟
  * [microtica.com](https://microtica.com/) - 启动环境，包含现成的基础设施组件，免费在AWS上部署应用，并支持生产工作负载。免费层包括1个环境（在您的AWS账户上）、2个Kubernetes服务、每月100分钟构建时间和20次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分配甚至自动化分割您的e2e测试运行来加速您的单仓库CI。免费计划支持最多30个贡献者，包含15万积分。
  * [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3000分钟免费时间，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate是一个基础设施即代码（IaC）工具的编排和管理平台，如Terraform、OpenTofu和Terragrunt。最多2个用户免费，包含所有功能。
  * [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户每周有限检查点的免费套餐。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接通过浏览器测试您的Android和iOS应用。免费套餐包含每月两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的用户也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一套持续基准测试工具集，用于捕捉CI性能回归。所有公开项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"监控即代码"工作流和Playwright。为开发者提供慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50+ SEO、速度和安全性最佳实践。小型网站免费套餐。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否针对给定域名启用CORS并识别差距。获取可操作见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器内测试。Cypress测试运行器始终免费开源且无限制。Cypress仪表板对开源项目免费，最多5个用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外均为开源。每月免费创建5个测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全注入故障以发现系统弱点。免费版支持在最多5台主机或容器上执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐含最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供适应不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - 面向开发者的功能测试工具包。记录API调用生成API端到端测试(KTests)及模拟/桩(KMocks)。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持10分钟测试文件，开源项目无限套餐免费。
* [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费套餐每月模拟最多50并发用户60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
* [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，含AI辅助测试用例生成
* [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐每日10次测试、每周5次实验、每月最大15GB数据摄入。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐含所有核心功能，500MB附件存储和最多3个用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费版限iOS和Android各10次测试，但包含付费版大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费版最多创建10条规则。开源项目免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源和改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试（每次最多3分钟）。发现错误？可复制测试唯一URL向开发者展示如何复现错误。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）情况。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐含Jira集成、无限项目、CSV/XLSx测试用例导入、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook数据。支持转发至本地环境或历史记录回放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成工具链、组件和设计系统实现快速迭代、优化设计并简化开发流程。无限项目数量且提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络与服务器工具集。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费版每个域名每天200次请求。
  * [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式，目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — AWS安全和合规性审计与监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可对代码、文件、目录或容器进行公证
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web应用，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化安全检查工具，扫描Django站点的安全漏洞。基于Pony Checkup项目分支开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，避免重要配置丢失。免费支持最多3名团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复，防止敏感信息泄露到源代码中。可扫描350+种密钥类型和敏感文件——25人以下团队免费使用。
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API。
  * [hostedscan.com](https://hostedscan.com) — Web应用、服务器及网络的在线漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，管理从本地开发到生产环境第三方服务的团队密钥。最多5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准。
  * [keychest.net](https://keychest.net) - SSL证书到期管理及购买，集成证书透明度数据库。
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书。
  * [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限数量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞。
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用及配置的安全监控，免费支持25个用户和30天历史记录。
  * [openapi.security](https://openapi.security/) - 快速检查OpenAPI/Swagger接口安全性的免费工具，无需注册。
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人，作为自动化产品安全工程师为Java代码库提交PR解决漏洞。即将支持其他语言！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目不限数量。
  * [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险。
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告。
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 发现并修复开源依赖项的已知安全漏洞。开源项目无限次测试和修复，私有项目每月限200次测试。
  * [Socket](https://socket.dev) — 为个人开发者、小团队和开源项目提供免费供应链安全保护。包含应用和防火墙CLI工具，防范70+种供应链风险指标。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置的深度分析。
  * [SOOS](https://soos.io) - 开源项目无限次SCA扫描。在发布前检测并修复安全威胁，通过简洁高效的方案保护项目。
  * [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，发现并修复生产环境前的安全漏洞。单个应用支持无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描。
  * [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒和服务器防火墙(WAF)。注册用户免费层可接收邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等，不限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报平台，适合刚开始学习网络威胁情报的研究员、分析师和组织。最多3个用户免费。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费版每周可进行XSS扫描。
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。250用户以下应用免费。
  * [Vulert](https://vulert.com) - 持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费使用。

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条公开GitHub仓库、代码片段、议题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 全能SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）获取Let's Encrypt、Google Trust和BuyPass的免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户和100个授权实例
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费支持1000月活用户和5个身份提供商
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含2.5万月活用户、无限社交连接、自定义域名等功能
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。含完整前端组件。免费支持5000月活用户
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商（Facebook/Google/Twitter等）。前1000次API调用免费
* [Authy](https://authy.com) - 多设备双因素认证(2FA)服务，支持备份功能。可替代Google Authenticator。免费支持100次成功认证
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度访问控制，免费支持100月活跃主体
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持1万月活用户
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个领域
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥的认证方案。无限月活用户免费
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK两种方式。免费7500月活用户/50个租户（含5个SAML/SSO租户）
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)方案。10用户内免费，含全认证方式、无限集成和硬件令牌
* [Kinde](https://kinde.com/) - 简单强大的认证系统，分钟级集成。入门套餐包含7500免费月活用户
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，10用户内免费，支持VPN/网站/SSH
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证方案
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权服务。免费支持100月活用户
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费支持3个企业应用+5个个人应用（用户数不限）
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。开发者账户永久免费，含全安全功能、无限团队成员、200日活用户和2.5万/月权限检查
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC，提供实时更新和无代码策略UI。免费层含1000月活用户
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费领域支持1000用户+10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费方案含无限月活用户/组织，2个SSO和2个SCIM连接
* [Stytch](https://www.stytch.com/) - 一体化认证与反欺诈平台，提供API和SDK。免费方案含1万月活用户/无限组织/5个SSO或SCIM连接/1000个M2M令牌
* [Stack Auth](https://stack-auth.com) - 开发者友好的开源认证方案，5分钟快速入门。可免费自托管，SaaS版提供1万免费月活用户
* [SuperTokens](https://supertokens.com/) - 原生集成应用的开源用户认证方案，在控制用户体验的同时快速启动。免费支持5000月活用户
* [Warrant](https://warrant.dev/) - 企业级应用授权与访问控制托管服务。免费层含100万次月API请求和1000条授权规则
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费2.5万次认证请求，含全安全功能（OTP/无密码/策略等功能无付费墙）
* [PropelAuth](https://propelauth.com) - 通过几行代码即可面向任意规模企业销售，免费支持200用户和1万封事务邮件（含"Powered by PropelAuth"水印）
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份（认证与授权）。免费支持5000月活用户，提供开源自托管选项
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万月活用户。提供邮箱密码登录、社交认证、Magic Auth、MFA等功能

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：1个应用、分析功能、无限版本与安装、以及反馈收集功能。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传功能。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维方案。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时掌控设备群状态，免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。免费层支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息，支持跨可用区多节点部署
  * [courier.com](https://www.courier.com/) — 统一推送API，集成应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐每月1万条消息
  * [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件/推送/SMS/产品导览/横幅等），每月免费支持1000名活跃用户
  * [engagespot.co](https://engagespot.co/) — 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月1万条消息
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理，永久免费连接100台设备（无需信用卡）
  * [knock.app](https://knock.app) – 开发者通知基础设施，单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐每月1万条消息
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月1万条通知+100条短信和自动语音呼叫
  * [Novu.co](https://novu.co) — 开源通知基础设施，统一管理邮件/SMS/站内信/应用内推送等渠道。免费套餐每月3万条通知（保留90天）
  * [pusher.com](https://pusher.com/) — 实时消息服务，免费支持100个并发连接和每日20万条消息
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务，免费支持20个并发连接和每日10万次事件
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务，覆盖全球/AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通讯API，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长
  * [webpushr](https://www.webpushr.com/) - 网页推送通知，免费支持1万订阅用户，推送次数不限
  * [httpSMS](https://httpsms.com) - 通过Android手机作为短信网关收发短信，每月免费200条
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全MQTT代理，永久免费100万会话分钟/月（无需信用卡）
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费套餐：每日50条消息至1台设备1个应用
  * [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知，单接口支持事务性/定时/互动通知多渠道分发。免费套餐每月1万条通知，含摘要/批量/多通道/偏好设置/租户/广播等工作流节点
  * [SMSGate](https://sms-gate.app) - Android™短信网关，通过云端路由收发短信。完全免费的云服务（建议每日超1万条时通知以保障服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志存储，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储空间，15天存储保留期和7天检索期。
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志存储，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可实现即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 公私仓库均免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次1000字符）。与Wordpress插件Loco Translate集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言与贡献者，提供初创和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言与项目
* [Localit](https://localit.io) – 开发者友好的快速本地化平台，无缝集成GitHub/GitLab，AI辅助与人工翻译，免费计划含2用户/500键/无限项目
* [localizely.com](https://localizely.com/) — 开源免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 5用户免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串与语言，提供初创优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版
* [transifex.com](https://www.transifex.com/) — 开源免费
* [Translation.io](https://translation.io) - 开源免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言与项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（1万条字符串上限），无限自托管部署
* [Free PO editor](https://pofile.net/free-po-editor) — 全民免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持网页与移动端本地化。自带LLM或每月免费1万词（通过Lingo托管引擎）

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时指标免费服务，应用性能管理代理限用于一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版含1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器，不限用户数、仪表盘和告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API & 网络/1.5千次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描、用户数和存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控点，推荐注册可增加额度
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5,000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。免费含24小时数据保留
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘与告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的观测平台，集成指标与日志功能。免费版：3用户、10个仪表盘、100条告警，Prometheus和Graphite指标存储（1万序列，14天保留），Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。免费支持最多20个检查点
* [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，含永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅数与团队数
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费版含500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立网速测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费最多5个监控器
* [linkok.com](https://linkok.com) - 在线死链检测工具，小网站（100页以内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware观测平台全面可视化应用与技术栈，支持规模化监控与诊断问题。开发者社区永久免费方案含：日志监控（100万日志事件）、基础设施监控与应用性能监控（2台主机）
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。"永远免费"方案支持HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是采集实时指标的开源工具。持续迭代的产品，也可在GitHub找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台帮助工程师打造更完善软件。从单体到无服务架构，可插桩所有组件并分析、排查和优化整个软件栈。免费层含每月100GB数据摄入、1个全权限用户和不限基础用户
* [nixstats.com](https://nixstats.com) - 单台服务器免费。含邮件通知、公开状态页、60秒间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站与API正常运行时间监控、定时任务监控及状态页。前5个检查点（3分钟间隔）免费，通过Slack、Discord和邮件发送告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火长城屏蔽。通过对比中国与美国服务器的DNS结果和ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 针对高可用服务的强大告警与值班管理。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，含告警、可视化功能和基础报表。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监控器（每日检查）
* [pagerly.io](https://pagerly.io/) - 在Slack管理值班（集成Pagerduty/OpsGenie）。免费支持1个团队（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更和正常运行时间。免费方案含5个URL、每日核心网页指标监控、10个HTML/SEO变更监控器、167个国家联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，不限项目和状态页，免费支持10万次事件
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检测不限量URL，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器（10分钟间隔）。监控SSH、HTTP、HTTPS和任意TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可公开定制的状态页（SSL子域名）。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月历史运行时间/日志、不限状态页和自定义域名！永久免费且不限邮件告警。无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标与日志），零配置复杂度。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，支持Ping、DNS等检测
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，助力实践SRE最佳方案。永久免费版支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS及域名监控。免费监控10台服务器、10项运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20个主流Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 免费获取20个运行时间监测器（5分钟间隔）和可定制状态页（支持商用）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理与响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 稳定运行时间监控，支持Cron任务、关键词、网站、端口、Ping等多种监测类型。25个免费监测器（3分钟间隔），通过电话、短信、邮件和Webhook发送告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux/Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费额度。
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控。为开源项目提供免费小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，或自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划每月5,000次错误，不限用户数，30天数据保留。
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限制使用。
* [Axiom](https://axiom.co/) — 存储最多0.5TB日志，保留30天。包含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告。免费计划不限报告数量。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用途免费计划不限录制次数。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 提供容错搜索、相关性排序和UI库的托管搜索解决方案，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、全功能编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家主讲的免费短期课程，一小时以内掌握最新生成式AI工具与实践
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证级免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 发布2500+门MIT课程资料，向全球学习者免费开放知识资源。YouTube频道见[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript和SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等，完全在线自主学习
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费课程，专注计算机科学、工程与数据科学领域
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南平台，为用户文章提供免费dofollow反链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click与Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言开源教育平台，配备人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费计划包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 邮件订阅服务。最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性发件 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月最多9000封免费邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者和每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具，无需暴露凭证。免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系人历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户。完全免费的反事务性邮件服务，邮件永不投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，使用多种域名。每次页面刷新都会更新邮箱地址。完全免费无任何收费服务
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器。支持10个域名，可创建无限地址（含广告）。除广告外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发。创建并转发无限量域名邮箱（注意：使用.casa/.cf/.click等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD流程的邮件功能。免费账户永久每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发。收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每天创建最多3个临时邮箱，可通过Chrome扩展便捷删除。完美测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动3天后删除。开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86,400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者和每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者和无限邮件及自动化流程免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮件测试免费API，免费公共邮件托管，出站捕获，邮件转Slack/Websocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP，每月3500封事务性和营销邮件免费。开发用模拟SMTP服务器沙箱，免费计划含1个收件箱、100条消息、无团队成员、每秒2封邮件、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者免费临时邮箱。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享单一收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每天前100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限量DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，内置端到端加密。1GB免费存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API。免费层（每月10000封）。异步发送。多SMTP服务器支持。黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100个邮箱，另提供DEA检测、DNS查询、SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API。每月3000封，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月最多15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案。免费5个别名，无限带宽和收发。教育工作者（学生/研究人员等）免费
* [Substack](https://substack.com) — 无限量免费通讯服务。开始收费时支付费用

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封事务性邮件免费。
* [temp-mail.io](https://temp-mail.io) — 免费临时邮箱服务，支持同时生成多个邮箱地址及邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管。
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证。
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多款含免费方案的服务。免费方案服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，支持一个域名。
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期使用权，适用于专业及个人用途。
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储空间。
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储空间。捆绑提供Zoho办公套件（Writer、Sheets和Show）。
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案。
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，支持频道、活动和论坛。
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议及10名网络研讨会 attendees。
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理工具。
   - [Showtime](https://zoho.com/showtime) — 面向培训的远程会议软件，最多5名参会者。
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品。
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS/Atom订阅，访问控制和自定义CSS。
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅免费，1用户，支付托管由Zoho完成。存储最近40条订阅指标。
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面及最多50笔支付。
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)提供1名远程技术支持及5台无人值守计算机。
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每频道100用户及SSO支持。
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排期
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队成员，提供卓越支持且价格合理。免费版包含10个特性开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能，跨Web、移动和服务器端应用管理特性开关。可使用托管API，部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源特性开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3个用户免费，不限特性开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的特性开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，不限特性开关和A/B测试数量。
* [Molasses](https://www.molasses.app) - 强大的特性开关和A/B测试工具。免费版支持3个环境，每个环境5个特性开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域特性开关管理平台。免费版包含10个开关、2个环境且不限请求次数。SDK、分析仪表盘、发布日历、Slack通知等功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能强大的特性管理、A/B测试和分析平台。其慷慨的免费计划提供无限席位、开关、实验和动态配置，每月支持100万次事件。
* [Abby](https://www.tryabby.com) - 开源特性开关和A/B测试工具。支持代码化配置和全类型TypeScript SDK，与Next.js和React等框架深度集成。提供丰厚的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体。精心挑选的字体库，并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速轻松地在网站上安装众多免费字体
* [FontGet](https://www.fontget.com/) - 提供多种可下载字体，并通过标签进行清晰分类
* [Fontshare](https://www.fontshare.com/) - 免费字体服务，不断增长的专业级字体库，100%免费用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多种独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和商用付费字体，支持输入文本快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 使用CSS为网站提供字体家族的开源免费服务
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含中日韩(CJK)字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 功能强大且对开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版含无限表单，每月20次提交（展示Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月250次提交。现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每表单每月限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1表单、50次提交、单文件上传、100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过界面转发提交至邮件/Slack/Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版无限表单与提交，含预制模板、反垃圾和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态站点。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点/表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单与调研工具。50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研与用户行为分析工具。永久免费版支持500月活用户，无限回复与事件，多平台集成导出及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端。永久免费版每月50次提交，250MB存储，支持Zapier集成、CSV/JSON导出、自定义跳转/回复页、Telegram/Slack机器人及单次邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件/网站/产品内/移动端调研，AI生成器及25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验与表单构建器。免费版5表单，每表单最多3步骤，50次月回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美表单。免费版每表单限10字段，100次月回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态与JAMStack网站联系表单，无需后端代码。免费版无限表单/域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研与表单构建器。免费版3调研/账户，100次月回复，每调研10元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特表单。无表单数量或功能限制，免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版100次回复，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研。使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单与触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版限25次反馈提交。提供React/Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1活跃调研，每调研25次回复，支持自定义模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复Cursor、Windsurf和Copilot等工具的输出，以满足企业质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费自动化Pull Request审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。仅需2行代码即可调用200+种LLM的统一格式。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，配备可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Arize AX](https://arize.com) - 帮助AI工程师/项目经理评估和观测AI应用及代理的AI工程平台，内置Alyx代理。免费产品包含每月25k spans和1GB的摄入量。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 可同时搜索所有应用的通用搜索。使用您的信息回答问题的搜索助手。免费计划提供无限统一搜索和每天5次协同飞行员查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。为任何LLM创建开放遥测标准追踪，提升可观测性，并与任何可观测性客户端兼容。免费计划每月提供50K次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，促进工程师和非技术团队之间的无缝协作，以微调并生产化生成式AI产品。免费计划包含所有平台功能，每月1k次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月50k次观测和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Phoenix](https://github.com/Arize-ai/phoenix) - 来自Arize AI团队的开源平台，用于追踪、模型评估和AI代理实验。所有功能在Elastic License 2.0 (ELv2)下开源。
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流中的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，替代Tableau、Power BI和Looker等流行商业智能解决方案。Othor利用大语言模型（LLMs）在几分钟内交付定制商业智能解决方案。永久免费计划提供一个工作区，包含五个数据源连接，供一名用户使用，分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，这些模型虽免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，去除噪音和回声，同时保留自然声音清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs是由Cloudflare提供支持的免费开源CDN服务，被全球超过11%的网站所信赖
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - 为您的GraphQL API提供极速可靠的CDN服务，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，使您可以轻松地将它们添加到Web应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费提供DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费支持100万次请求
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 一种简单的方式来启动和管理完整的Varnish缓存解决方案。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不失败的CD。个人使用免费，支持一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。在全球缓存中即时处理图片
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1 TB流量和100万次请求，以及免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5 TB CDN流量，19个核心PoP，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划包括最多5个用户和每天1 GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用和30秒超时限制
* [Apply.build](https://apply.build/) — 免费部署GitHub应用，配备0.5 vCPU/512MB内存、欧洲服务器、自动防火墙和实时性能监控。支持Node.js/Python/Go/Java/静态网站/微服务等
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket），含认证服务。免费版每项目包含1数据库/3存储桶/5函数
* [configure.it](https://www.configure.it/) - 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) - Java/Kotlin开发者开源跨平台移动应用工具链，商业使用免费且项目数量不限
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台，内置A/B测试/内容分段/实时分析，适合内容型和企业电商网站。免费版每月5,000页面浏览或开源/个人项目
* [Deno Deploy](https://deno.com/deploy) - 全球边缘计算系统，支持JavaScript/TypeScript/WebAssembly。免费版每日10万请求+每月100GB数据传输
* [domcloud.co](https://domcloud.co) - 提供GitHub CI/CD/SSH/MariaDB/Postgres的Linux主机服务。免费版含1GB存储+1GB月流量，仅限免费域名
* [encore.dev](https://encore.dev/) - 通过静态分析实现自动基础设施的后端框架，免除样板代码。包含业余项目免费云托管
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层（AWS费用另计）
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费实例（永不休眠）+ PostgreSQL免费层（2连接/10,000行/无备份）
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，免费计划含10万次服务调用/1万异步任务/10万Redis命令
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，[免费](https://docs.pipedream.com/pricing/)运行任意触发器工作流，无需管理服务器
* [pythonanywhere.com](https://www.pythonanywhere.com/) - Python云应用托管。新手账户免费，包含1个your-username.pythonanywhere.com应用/512MB存储/1 MySQL数据库
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次/每日2,500次/每月5万次调用（付费计划支持自定义域名）
* [Koyeb](https://www.koyeb.com) - 全球无服务器平台，支持Docker容器/Web应用/API部署。免费实例位于德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1 CPU
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）
* [Meteor Cloud](https://www.meteor.com/cloud) - Galaxy托管平台，免费提供MongoDB共享主机和自动SSL
* [Northflank](https://northflank.com) - 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2服务/2定时任务/1数据库
* [YepCode](https://yepcode.io) - 无代码工具灵活性与编程语言能力结合的全能平台，[免费层](https://yepcode.io/pricing/)含1,000次yeps调用
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，[免费计划](https://wundergraph.com/pricing)支持3项目/1GB出口流量/300分钟月构建时长
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务+每月5美元额度
* [mogenius](https://mogenius.com) - 简化Kubernetes服务部署，免费层支持本地Kubernetes连接以创建类生产测试环境
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，非商业/学术用途免费提供100万次调用/100GB流量/10个定时任务
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者平台即服务，免费层含5个组件+每月100美元额度
* [Daestro](https://daestro.com) - 跨云与本地运行计算任务，免费版支持10并发任务/2计算实例/1云提供商/1容器注册表/1定时任务

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用内触发事件时发送Slack消息或添加Google表格行。每月免费额度达5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动与网页Baas服务，含1GB免费文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - 提供文档与资源，为企业构建部署数字创新方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1,000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录，每月500万次函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨免费层。
* [Firebase](https://firebase.com) - 助力应用开发与运营。免费Spark计划含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI生成器和模板。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、视频音频及信息流功能。
* [hasura.io](https://hasura.io/) - 为现有数据库提供即时GraphQL API，支持Web、移动及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为网页和移动应用提供的无服务器后端。免费计划含PostgreSQL、GraphQL（Hasura）、身份验证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件，联系人无限制，含自动预热功能。
* [paraio.com](https://paraio.com) - 后端API服务，含灵活身份验证、全文搜索和缓存。单个应用免费，1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息及100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2,000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) - 2,000月活用户免费无限推送通知，支持iOS和Android的统一API。
* [quickblox.com](https://quickblox.com/) - 即时消息、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置含身份验证、数据、文件等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用，通过点击定制数据模型，Apex代码扩展，企业级安全保障。免费开发者计划开放完整Lightning平台。
* [simperium.com](https://simperium.com/) - 实时跨平台数据传输，结构化数据无限收发存储，每月最多2,500用户。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，构建后端。免费计划含身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) - API管理服务，含鉴权、配额、监控与分析。免费云版本可用。
* [zapier.com](https://zapier.com/) - 连接应用实现任务自动化。每15分钟5次触发，每月100次任务。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用与设备。免费2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务，15分钟更新，5个活跃自动化，支持Webhook。
* [LeanCloud](https://leancloud.app/) - 移动后端。1GB数据存储，256MB实例，每日3,000次API请求和10,000次推送免费。（API与Parse平台高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等。（[免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持15+种数据库和任意API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动端和Web应用。具有拖拽式界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理以10倍速度构建内部工具、自定义用户旅程、数字体验、自动化流程、管理面板和运营应用。
* [lil'bots](https://www.lilbots.io/) — 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙箱环境，支持总用户数、0.5GB存储和1GB RAM/应用。免费层还包含Studio和Studio Pro IDE使用权。
* [OutSystems](https://www.outsystems.com/) — 面向本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可扩展性。支持JavaScript和API开发。免费层允许每月5名用户，不限应用数量和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑及代码扩展功能，集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。支持连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发应用。
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。通过JavaScript、Python和SQL实现高度定制的拖拽式UI构建。提供云服务和自托管方案，5人以下免费。
* [Manubes](https://www.manubes.com) — 专注于工业生产管理的强大无代码云平台。免费版支持1名用户和每月100万次工作流活动（[德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP/WebDAV/SSH访问，包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL，含应用安装器和邮件发送功能，无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用，开发者优先的部署开发平台，简化基础设施配置流程。
* [Bubble](https://bubble.io/) — 可视化编程构建无代码Web/移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注Web3前端的去中心化托管平台，提升运行时间与安全性，提供额外用户访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 应用平台入门级免费托管三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive/OneDrive发布静态网站，永久免费，每个账户限一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，支持本地托管与实时公开分享，提供UI/API/CLI多种操作方式。
* [Free Hosting](https://freehostingnoads.net/) — 免费PHP5/Perl/CGI/MySQL/FTP托管，含文件管理器/POP邮箱/子域名/域名托管/DNS编辑器/网站统计/在线支持等。
* [Freehostia](https://www.freehostia.com) — 提供行业领先控制面板和50+应用一键安装，即时配置，无强制广告。
* [HelioHost](https://heliohost.org) — 非盈利免费主机，含Plesk面板，支持PHP/Node.js/Python/Django/Flask/.NET/Perl/CGI，数据库支持MySQL/PostgreSQL/SQLite，含IMAP/POP3/SMTP邮箱，无限流量，1GB存储可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名与SSL，每月100GB流量，260+Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 支持SFTP上传下载的PHP虚拟主机。
* [Neocities](https://neocities.org) — 静态网站托管，1GB存储+200GB流量。
* [Netlify](https://www.netlify.com/) — 每月300信用点（等同30GB流量）免费构建部署静态站点/应用。
* [PandaStack](https://www.pandastack.io/) — 开发者生态包含多种托管形式（静态/容器/WordPress等管理应用），免费提供1个托管+1个数据库，100GB流量/300分钟构建时长每月。
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管，自动化DevOps与弹性架构，开发者与代理商免费使用，不支持自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能。
* [render.com](https://render.com) — 统一云平台构建运行应用与站点，免费提供SSL/全球CDN/私有网络/Git自动部署，Web服务/数据库/静态页面完全免费。
* [SourceForge](https://sourceforge.net/) — 免费发现、创建与发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者静态发布工具，无限站点支持自定义域名。
* [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 1个站点50页50MB存储，仅限170+预设区块中的基础模块，无字体/网站图标/自定义域名。
* [Vercel](https://vercel.com/) — 构建部署Web应用，免费SSL/全球CDN，每次`git push`生成独特预览URL，完美支持Next.js等静态生成器。
* [Versoly](https://versoly.com/) — SaaS建站工具，无限网站70+区块5套模板，支持自定义CSS/网站图标/SEO/表单，无自定义域名。
* [Qoddi](https://qoddi.com) — 类Heroku的全功能PaaS服务，免费支持静态资源/预发布环境/开发应用。
* [FreeFlarum](https://freeflarum.com/) — 社区支持的Flarum免费托管（最多250用户，捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，500MB内存/SFTP-1GB磁盘空间。
* [Serv00.com](https://serv00.com/) — 3GB免费空间含每日备份（保留7天），支持Crontab/SSH/代码仓库(GIT/SVN/Mercurial)，兼容MySQL/PostgreSQL/MongoDB及PHP/Node.js/Python/Ruby/Java/Perl等20+语言环境。
* [Sevalla](https://sevalla.com/) — 简化应用/数据库/静态网站管理的托管平台，免费额度：1GB站点/100GB流量/600分钟构建时长/100站点每账户。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（可加密DNS查询）。可用于绕过ISP的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 含API支持的免费DNS服务，集成多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名（50条记录上限）。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名（10条记录上限）。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS（最多5个域名），提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API管理](https://dynv6.com/docs/apis)的免费动态DNS服务，可配置多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户共享域名的[子域名服务](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪/广告的免费动态DNS，域名数量无限制。
* [noip](https://www.noip.com/) - 免费动态DNS服务（3个主机名），需每30天确认一次。
* [sslip.io](https://sslip.io/) - 输入含IP地址的域名即可返回该IP的免费DNS服务。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - 免费域名监控及DNS变更自动备份服务。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 无订阅/广告的高性能免费动态DNS。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于内网环境。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名
* [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求的免费额度
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查询、任务系统、实时消息、工作队列、强大CLI和网页数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2个开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2核CPU、2GiB内存、8GiB存储。每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每月50万次命令、最大256MB数据库容量和20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，含1个节点和8GB存储，专为开发者打造，支持从物联网到AI的新一代应用开发
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费额度含25MB存储、1个代理服务器和基础分析功能
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的类电子表格灵活数据库。免费版含无限表格、2,000行数据、1个月版本历史及最多25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云端数据平台，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库能力与主流商业应用集成的工具。免费方案支持无限用户、10个工作区和每个工作区2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RU)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发体验。永久免费版提供9GB总存储、最多500个数据库、3个部署位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费额度为每5分钟3MB写入、30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务，提供模式化、关联关系、自动REST API（支持类MongoDB查询）及高效多用户数据管理界面。免费版支持3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RU和10GiB存储（价值15美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库/分析平台，支持Cypher查询语言和REST API。免费版限制图规模（5万节点、17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，免费层含0.5GB总存储、1个项目、10个分支、无限数据库、永久可用主分支（非主分支计算5分钟后自动暂停）及每月20小时非主分支活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管PostgreSQL，免费版含1GB存储、10个数据库并与Prisma ORM集成。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库，提供GraphQL API。免费版限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入并将SQL查询发布为托管HTTP API。免费版无时限，含10GB存储和每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库/分析平台，提供类SQL图查询语言和REST API。免费实例含2vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个最大10MB的数据库，支持MySQL、MariaDB、MongoDB和PostgreSQL。
* [Xata Lite](https://lite.xata.io/) - 内置强大搜索与分析功能的无服务器数据库。单一API、多类型安全客户端库，专为开发流程优化。免费版提供10个分支和15GB存储，无暂停或冷启动。
* [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL构建的全栈低代码开发平台，为JavaScript开发者提供无服务器后端即服务。免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的PostgreSQL平台。免费版含无限数据库、持续可用不中断、1GB总存储、5,000万查询令牌、自动扩展及无限向量嵌入。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost生成公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版提供60分钟隧道时长。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费版支持最多5人加入的无限网络，可安全扩展类LAN网络至分布式团队。
* [Mirna Sockets](https://mirna.cloud/) - 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装或注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类LAN网络。不限节点数（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件中转枢纽，可路由至第三方服务。免费版每月10万次事件。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 基于WireGuard协议的无配置VPN，支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook至公共或内部（如localhost）目标，并通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控webhook。免费版每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 不限STUN使用量+每月500MB TURN带宽，限速单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端的端到端加密网络，提供桌面/移动/NA客户端，可通过网页界面配置路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，将localhost服务器暴露至互联网。免费版提供15分钟隧道时长。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行服务至公共自定义URL，并通过访问控制保障安全。免费版支持1个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目发布平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间追踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内网和项目管理工具。免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图）。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，节省冲刺评估时间。免费支持5名用户，提供免费Jira集成、不限视频会议/团队/会话
* [clickup.com](https://clickup.com/) — 项目管理平台。基础功能免费，高级版含云存储。提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪工具。不限用户数，永久免费
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，支持AWS智能组件实时数据展示。免费版允许单人创建不限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台。免费版提供不限量仓库/项目/文档（5人团队）、每月500分钟CI/CD时长、3万分钟无服务器代码运行时长及1GB仓库存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持3个项目、不限用户数、1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理。免费版不限项目/用户/存储空间
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的冲刺回顾工具。免费版每月可创建3个公共看板（每个看板1次调研）
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件。SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具。通过关键词快速创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 对比两个GraphQL模式差异的工具，会标记破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 提供实时聊天功能的客服软件。通过粘贴脚本快速部署，永久免费
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板数（100MB存储）
* [Instabug](https://instabug.com) — 移动应用Bug报告与反馈SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — 收集iOS/macOS应用内用户反馈并按投票排序需求。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 支持多维度查看的基础设施交互图表工具。免费版可创建不限量私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具。免费版提供2个看板和2名用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用。免费版支持1名用户（不限看板/列表/卡片数）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台。不限用户/空间数，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具。提供网页版和Chrome扩展，完全免费
* [Kumu.io](https://kumu.io/) — 支持动画/装饰/筛选/聚类/表格导入的关系图谱工具。免费版可创建不限量公开项目（学生可享私有项目），提供沙盒模式
* [Linear](https://linear.app/) — 极简问题追踪工具。免费版不限成员数（单个文件10MB，250个问题）
* [leiga.com](https://www.leiga.com/) — 通过AI自动管理项目的SaaS产品。免费版支持10名用户/20个自定义字段/2GB存储（视频录制限5分钟/条，自动化20次/用户/月）
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具。免费版支持3个可编辑文档+100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目（不限成员数）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板功能）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。免费版提供100MB存储和5名用户/团队（不限工作区/会议/任务/工时表/问题追踪）
* [Ora](https://ora.pm/) - 敏捷任务管理工具。免费版支持3名用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公开项目+2个私有项目（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台。免费版支持2名用户+10个客户+500MB存储
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具。免费版不限成员数（单个文件5MB，1000个问题）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（评估工具）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具。免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与会议记录应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版提供不限量的任务、迭代和工作区，且无用户数量限制
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板到Scrum再到各类运营流程。免费版支持无限用户，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版包含1个工作区（不限任务和项目）、1GB文件存储、1周项目历史记录及每次视频会议最多5名参与者
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会议和迭代计划工具。15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，提供付费升级选项
* [teleretro.com](https://www.teleretro.com/) — 融合破冰活动、动图和表情的趣味回顾会议工具。免费版包含3次回顾会议和无限成员
* [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具。该SaaS产品采用自愿付费模式，用户可选择支付0元且所有功能无付费墙{[详情](https://tenzu.net/pricing/)}
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台。个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版支持每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作式与个人任务管理。免费版功能：5个活跃项目/每个项目5名用户/5MB文件上传/3个过滤器/1周活动历史记录
* [trello.com](https://trello.com/) — 看板式项目管理工具。无限个人看板，10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台、集成与众测服务，免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 提供项目、版本控制与问题追踪的产品设计服务。免费版包含无限项目与协作者，3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。最多3名用户免费，不限项目数量
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 为开源项目与私有项目提供免费托管版YouTrack（InCloud版，最多3名用户免费）。含时间追踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — 唯一内置于GitHub的项目管理方案。公开仓库、开源组织与非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具。最多5名成员免费，支持5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间管理应用（免费版为自由职业者设计，提供无限时间记录、项目、客户、标签及报告）和[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务、里程碑与时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发、市场营销、销售与客户支持打造的项目管理工具，特别适合外包与跨组织协作项目。免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com打造的生产力工具，可在事项/任务中实现结构化清单、模板与审批流程。提供小团队免费方案

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间。
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时优化和调整尺寸。免费套餐含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化与CDN服务，提供多种尺寸调整、压缩和水印功能。含响应式图像/360度图像制作/图像编辑的开源插件。免费月套餐含25GB CDN流量、25GB缓存存储及无限转换。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等库的图像上传、处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，支持客户端处理且服务器零数据访问。免费上传1GB以内文件且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放及网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换与交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，单次下载后自动删除文件。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图像/音频/视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页端和API调用。无文件大小/带宽/下载次数限制，但十天无下载的文件将被删除。
* [gumlet.com](https://www.gumlet.com/) — 图像视频托管与CDN流处理服务。免费套餐含每月250GB视频流量和30GB图像流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图像图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图像的机器人，在不损失质量的前提下减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限容量的图像托管服务。支持拖拽上传（单图限32MB），生成直链/BBCode/HTML缩略图，登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图像缓存管理与CDN服务。免费套餐含1000个源图像、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图像优化服务，免费支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协作式模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端加速服务（含缓存/图像代码优化/CDN）。免费支持每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享/复制/移动工具。基础版支持无限传输（单文件限250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供受限免费版，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目/黑客松/移动应用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表生成与共享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队使用基础版功能（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 快速批量生成无登录/无水印/无广告的QR码，单次批量导出最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表与QR码。
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图像优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，累计处理超70亿张图像。
* [Shotstack](https://shotstack.io) - 大规模视频生成与编辑API，免费每月渲染20分钟视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图像/文档编码服务。开源项目/慈善机构/学生通过GitHub学生包免费，商业应用可试用2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图像服务，提供图像CDN/处理API/前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具集。开发者可免费使用文件上传API/UI、图像CDN/源服务、自适应交付和智能压缩。免费版含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 可快速集成的图像CDN服务，支持自动优化与实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间和三台设备支持，推荐用户可获5GB奖励（需90天内账户活跃）。

  * [ImageEngine](https://imageengine.io/) – 全球易用的图像CDN服务。60秒内完成配置，支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。立即申请[免费开发者账户](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI工具，可将PDF、图像转换为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡/优惠券/促销活动的定制二维码，支持样式/颜色/LOGO等自定义设置。
* [LibreQR](https://libreqr.com) – 注重隐私保护的免费二维码生成器，无追踪无数据收集。
* [Doradrop](https://doradrop.com) – 无限存储/零广告的文件共享平台，无需登录即可通过安全链接即时分享文件。

* [Ente](https://ente.io/) - 端到端加密的云存储服务，支持照片/视频/2FA密钥托管。可自建服务器，永久免费版提供10GB存储（免费用户数据仅保留单副本）。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富主页模板，可快速下载使用或通过编辑器定制专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统
* [BoxySVG](https://boxy-svg.com/app) - 可安装的网页版SVG绘制工具，支持导出多种格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，同时提供付费组件集成
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的多媒体文件转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线调色板生成与灵感获取工具
* [colorr.me](https://colorr.me/) - 色彩与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费CMYK转Pantone色彩匹配工具
* [Branition](https://branition.com/colors) - 专业品牌配色方案精选
* [css-gradient.com](https://www.css-gradient.com/) - 跨浏览器CSS渐变代码生成器
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图资源库
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版包含无限文件查看和2名编辑权限
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业级交互动效原型工具，免费版支持3个项目协作
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版权商用图库
* [Gradientos](https://www.gradientos.app) - 极简渐变方案选择工具
* [Icon Horse](https://icon.horse) – 通过API获取任意网站高清favicon
* [Iconoir](https://iconoir.com) – 开源多框架图标库（支持React/Flutter/Vue等）
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐资源库，免费版有分辨率限制
* [landen.co](https://www.landen.co) - 无代码建站平台，免费版支持1个全功能网站
* [Quant Ux](https://quant-ux.com/) - 完全免费的开源原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 智能占位图生成器
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画资源平台
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量思维导图工具
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 全功能设计协作工具，免费版支持3用户5项目
* [mockupmark.com](https://mockupmark.com/create/free) - 40款免费服装模型生成器
* [Modeldraw.com](https://modeldraw.com) - 支持实时协作的UML/流程图/思维导图平台
* [Mossaik](https://mossaik.app) - 多功能SVG生成器（波浪/斑点/图案等）
* [movingpencils.com](https://movingpencils.com) - 浏览器矢量编辑器
* [NSPolygon](https://nspolygon.com) - 免费图库/图标/插画资源
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版SVG设计工具
* [pexels.com](https://www.pexels.com/) - 免版权图库（含免费API）
* [photopea.com](https://www.photopea.com) - 在线PS级设计编辑器
* [pixlr.com](https://pixlr.com/) - 专业级在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的响应式页面构建器
* [Pravatar](https://pravatar.cc/) - 随机头像生成服务
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器端隐私安全的图片格式转换
* [Proto.io](https://www.proto.io) - 无代码交互动效原型工具，免费版含5个原型项目
* [resizeappicon.com](https://resizeappicon.com/) - 应用图标尺寸调整服务
* [Rive](https://rive.app) - 多平台动画创作工具，个人用户永久免费

  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 跨组件和布局实时预览主题修改效果
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可编辑SVG图标，支持复制粘贴
* [tweakcn](https://tweakcn.com/) — shadcn/ui精美主题，实时自定义颜色、排版等参数
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成首字母头像，支持URL直接热链调用，可通过URL参数配置
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，完全免费且无需署名
* [unsplash.com](https://unsplash.com/) - 自由版权商用/非商用图库（无限制许可）
* [vectr.com](https://vectr.com/) — 网页端+桌面端免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的流程引导
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线模型图编辑器，含持续增长的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架，开源项目见GitHub）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式SEO建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，支持1080p导出且无水印
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的极简落地页生成器，免费建1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌Logo库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击即可创建独特背景/图案/形状的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端开发平台，免费支持3个项目且可导出代码
* [vector.express](https://vector.express) — 支持AI/CDR/DWG等格式的矢量文件快速转换
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含JPG转SVG等开发者工具）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/SVG等格式（PWA应用无需注册）
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌Logo的API服务，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的Bootstrap/Angular/React/Vue UI套件（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库（如按钮组件），减少类名书写
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条设计工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色库及生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标集统一搜索平台，支持导出SVG
* [NextUI](https://nextui.org/) -- 免费现代化React&Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美组件库（开源可定制）
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标（完全免费）
* [Image BG Blurer](https://imagebgblurer.com/) -- 为图片生成模糊背景框（适用于Notion等工具）
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案，免费版支持无限网站（自定义域名限5个）
* [Nappy](https://nappy.co/) -- 黑人及棕色人种主题免费图库（商用/个人用途）
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/工具合集（含代码生成器）
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线绘图工具（支持本地保存导出）
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的免费图形设计工具（免费版含10个云文档）
* [Flows](https://flows.sh/) -- 产品引导互动平台（免费支持250名月活跃用户）

  * [OKLCH](https://oklch.net/) —— 为网页设计师和开发者提供的免费OKLCH颜色选择器与转换工具。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的地方。可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感，通常并非来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好，找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发人员和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的最精美的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，支持地理数据存储、分析、地理编码、路径规划等功能。每月免费额度包括：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算以及5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3千次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用API及SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示服务，提供地图与地理空间SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与可视化SDK。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索与反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境和代码片段分享平台，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。这款开源IDE完全免费，是Android应用开发的最佳选择。支持Windows、Mac、Linux及ChromeOS系统。
* [AndroidIDE](https://m.androidide.com/) — 开源IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台及应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户及托管文档）。
* [BBEdit](https://www.barebones.com/) - macOS平台热门可扩展编辑器。免费版提供[强大核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，支持升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。完全免费的公共服务。
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI界面。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理工具，支持标签分类和100+编程语言。
* [Code::Blocks](https://codeblocks.org) — 免费Fortran和C/C++ IDE。开源支持Windows、macOS和Linux系统。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持代码编写（代码块、自动补全、单元测试）、理解（全代码库知识）、修复和检索功能。适用于VS Code、JetBrains及在线使用。
* [codiga.io](https://codiga.io/) — 编程辅助工具，支持在IDE中直接搜索、定义和复用代码片段。个人和小型团队免费。
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类、搜索和标签功能，完全免费无限制。
* [cocalc.com](https://cocalc.com/) —（原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等。
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，基于GitHub Codespaces为学生和教师适配。
* [codepen.io](https://codepen.io/) — 前端网页开发 playground。
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等框架的在线开发环境。
* [Components.studio](https://webcomponents.dev/) - 独立开发代码组件，通过故事可视化展示，测试后发布至npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于网页和Kubernetes的多语言支持团队IDE。开源社区驱动。Red Hat托管在线实例：[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟数据。描述需求后API返回JSON格式数据，加速产品概念验证过程。
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok等前沿模型的AI结对编程工具。原生CLI兼容，无缝集成任何IDE。免费层包含本地处理的基础AI模型访问权限。
* [GetVM](https://getvm.io) — 即时免费Linux和IDE Chrome侧边栏工具。免费版每日提供5个VM实例。
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE。支持多语言、基于Linux容器的完整终端、端口转发、自定义URL、实时协作聊天、链接分享及Git/Subversion版本控制。免费版包含1GB内存、10GB存储（最多5个容器）。
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器和编辑器，免费版REST API每日可编译200次。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具套件（含[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源项目及用户组可申请免费授权。
* [jsbin.com](https://jsbin.com) — 前端网页开发 playground（支持HTML、CSS、JavaScript及Markdown、Jade、Sass）。
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端网页开发 playground。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回模拟JSON数据的REST API接口，源码可本地部署。
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 免费AI驱动的云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务，用于生成虚假JSON数据。
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，快速定义返回JSON/XML数据的端点。
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式的测试数据，支持后端API模拟。
* [Mocklets](https://mocklets.com) - HTTP协议模拟API工具，终身免费版支持加速并行开发和全面测试。
* [Paiza](https://paiza.cloud/en/) — 无需配置的浏览器Web应用开发环境。免费版提供24小时有效期的服务器（每日4小时运行时间，2核CPU/2GB内存/1GB存储）。
* [Prepros](https://prepros.io/) - 开箱即用的Sass/Less/Stylus等预处理器编译工具，支持浏览器实时重载。可通过点击添加自定义工具。
* [Replit](https://replit.com/) — 多语言云端编程环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程 playground。支持多种语言，运行代码无需注册（保存代码需登录）。同时提供面向初/中级开发者的免费课程。
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发环境。支持所有主流NodeJs框架。快速创建项目链接：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - 广受欢迎的多功能文本编辑器，高度可定制化，适用于代码编写和文本编辑任务。

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完备的IDE，拥有数千款扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面端/网页/云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) — 社区驱动的Microsoft编辑器VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，免费版功能有限
* [Wave Terminal](https://waveterm.dev/) — 开源跨平台终端工具，支持无缝工作流。可内联渲染任何内容，保存会话与历史记录，基于开放网络标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58个模板支持隔离式Web组件开发，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) — 免费高效数据库IDE，支持服务器发现、ER图、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) — 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) — 支持70+语言的免费在线编译器（含Java/Python/C++/JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [DocBeacon](https://docbeacon.io) - 安全文档共享平台，提供文档追踪与参与度分析。免费版支持最多20个PDF文档（最大10MB）、10个联系人，每文档2次分享，并提供基础的查看/下载量、时长及参与度分析。
* [Userbird](https://userbird.com) - 替代Google Analytics的热图分析工具，支持会话录制与收益追踪。
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史看板（突破14天限制）。免费版可监控单个仓库流量。
* [Dwh.dev](https://dwh.dev) - 面向Snowflake的数据云可观测性方案。个人使用免费。
* [Hightouch](https://hightouch.com/) - 反向ETL平台，将数据仓库的客户数据同步至CRM/营销/客服工具。免费层支持1个数据同步目标。
* [Avo](https://avo.app/) - 简化的分析发布流程：单一事实来源的追踪计划、类型安全分析库、应用内调试器和数据可观测性。免费版含2名工作区成员和1小时数据回溯。
* [Branch](https://www.branch.io) - 移动分析平台。免费层支持10,000移动应用用户，含深度链接等服务。
* [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台。免费版可从数据仓库同步10个字段至60+SaaS应用（如Salesforce/Zendesk/Amplitude）。
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持1个网站3000次浏览分析。
* [Databox](https://databox.com) - 整合多平台数据的商业洞察工具。免费版含3用户、仪表板及数据源，支持1100万条历史数据。
* [Hitsteps.com](https://hitsteps.com/) - 单网站每月2000页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源隐私友好型网站分析工具（非商业用途免费），支持无限站点、6个月数据保留和10万次月浏览量。
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私替代方案，免费版支持每月100万页面浏览且无需信用卡。
* [Expensify](https://www.expensify.com/) - 费用报销系统，免费个人报告审批流程
* [getinsights.io](https://getinsights.io) - 隐私优先的无Cookie分析工具，免费支持3000次事件/月。
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为。免费版支持10,000次月会话。
* [Hotjar](https://hotjar.com) - 网站分析与热图工具。免费版每日2000页面浏览、100张快照（上限300）、3张热图存储365天。含应用内调查和反馈组件（免费版3个调查+3个组件，每月20回复）。
* [Keen](https://keen.io/) - 自定义数据分析平台。免费版每月1000事件
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务，完全免费且无用户/请求限制。
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，无限数据历史与席位，支持美/欧数据驻留
* [Moesif](https://www.moesif.com) - REST/GraphQL API分析工具（免费50万次API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试方案，免费版支持1网站+1iOS+1Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具。免费版含100万用户许可。
* [Row Zero](https://rowzero.io) - 极速互联电子表格，直连数据库/S3/API，支持百万行即时分析。永久免费3个工作簿。
* [sematext.com](https://sematext.com/cloud/) - 免费5万次操作/月，1天数据保留，无限仪表板
* [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版每指标5结果，含1个月移动数据+3个月网站数据。
* [StatCounter](https://statcounter.com/) - 网站访问分析。免费版统计最近500访客。
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试的全能平台。免费100万计量事件/月。
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者沙盒许可证（最新预发布版），供测试全功能。
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试工具。免费版1用户无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台（50万次动作/90天数据保留/30+一键集成）
* [counter.dev](https://counter.dev) - 简约隐私友好的网站统计工具，支持免费或捐赠模式。
* [PostHog](https://posthog.com) - 全功能产品分析套件（免费100万事件/月），含无限应用内调查（250回复/月）。
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（免费计划+开源项目专属个人订阅）。
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的真实用户行为捕捉工具。
* [Beampipe.io](https://beampipe.io) - 简约隐私优先的网站分析，免费支持5域名+1万月浏览量。
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析（Swift/Kotlin/Flutter等SDK），免费2万事件/月。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析/营销数据问题，维护追踪计划。支持生产环境部署或回归测试覆盖。
* [LogSpot](https://logspot.io) - 统一Web与产品分析平台（含嵌入式组件和自动化机器人）。免费1万事件/月。
* [Umami](https://umami.is/) - 简洁快速、隐私优先的开源Google Analytics替代方案。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私分析工具，无限页面浏览/访客/热图。免费支持3域名+每域名600次会话回放。

  * [Seline](https://seline.so) - Seline是一款简单且注重隐私的网站与产品分析工具。无Cookie、轻量级、独立运营。免费方案包含每月3,000次事件追踪，并提供仪表盘、用户旅程、漏斗分析等完整功能。
* [Peasy](https://peasy.so) - Peasy是轻量级且注重隐私的网站与产品分析工具。免费方案包含每月3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie设计且操作体验提升10倍。免费方案支持每月3,000次事件追踪。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：1,000次页面浏览/天，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，一个月数据保留及三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：1,050次页面浏览/月，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（1,500次会话/月），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度及事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元可免费使用。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API调用。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式移动应用内订阅解决方案，支持iOS、Android、React Native、Flutter、Unity及网页应用。每月收入低于1万美元可免费使用。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月提供1万次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划支持每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率数据，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，免费计划每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费微计划每月提供500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明数据来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持连接Stripe、Chargebee等平台。免费层级每月3万次事件处理。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购与订阅平台，含无代码支付墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购和订阅后端服务（支持iOS/Android）。每月追踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。私有用途每月300次请求，每分钟限10次。

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

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant box 的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站受众中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可用于博客评论、维基页面等场景！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"单个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间及视口尺寸
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图即服务。每日250次免费请求
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速获取可扩展的免费截图服务
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照服务。每月100次免费快照
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（支持png/gif/jpg格式），包含整页截图而不仅是首页
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度（自2017年持续提供）
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名情报API服务。每月100次免费请求
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月1,000次免费请求

**[⬆️ 返回顶部](#目录)**

## Flutter相关与免Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管移动应用持续集成/持续交付平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费版每月提供 500 分钟构建时长，使用 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) —— 一款极速的x86虚拟机，可运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux及其他操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队使用且仅支持SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅功能齐全的同意管理合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量范围内开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，涵盖同意管理、隐私请求处理（DSARs）和数据映射。免费版包含核心同意管理功能，并为通过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图片创建美观的截图，方便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持以精美图片形式分享（如Twitter/Facebook帖子）或以链接形式分享（如聊天或论坛）。
  * [Blynk](https://blynk.io) — 提供API的SaaS服务，用于控制、构建和评估物联网设备。免费开发者计划支持5台设备，提供免费云存储和数据存储。同时提供移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建并分享代码片段的精美截图式图片。通常用于在Twitter或博客文章中美观地展示代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建精美的快照，方便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图，方便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排一次性或周期性Webhook。免费计划允许5个临时安排。
  * [cron-job.org](https://cron-job.org) - 在线定时任务服务。无限任务免费。
  * [datelist.io](https://datelist.io) - 在线预约/日程安排系统。每月免费5次预约，包含1个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单的URL或域名转发工具。每月免费5个域名和20万次请求。
  * [Elementor](https://elementor.com) — WordPress网站构建工具。免费计划包含40多个基础组件。
  * [Exif Editor](https://exifeditor.io/) — 在浏览器中即时查看、编辑、清理、分析图片/照片的元数据，包括GPS位置和元数据。
  * [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
  * [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞管理。
  * [Hook Relay](https://www.hookrelay.dev/) - 为您的应用添加Webhook支持，无需处理队列、重试和日志记录。免费计划每天100次交付，14天保留期，3个Webhook端点。
  * [Hosting Checker](https://hostingchecker.co) - 检查任何域名、网站或IP地址的主机信息，如ASN、ISP、位置等。还包括多个主机和DNS相关工具。
  * [kandi](https://kandi.openweaver.com/) — 快速启动应用开发：通过代码片段和开源库重用更快地构建自定义函数、用例和完整应用。
  * [Base64解码/编码工具](https://devpal.co/base64-decode/) — 在线免费工具，用于解码和编码数据。
  * [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord和自定义Webhook接收GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo和Docker Hub的新版本通知。
  * [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的EXIF数据，包括GPS位置和元数据。
  * [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理PDF模板，通过API调用动态数据并下载PDF。每月免费300份文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) — 使用扩展从代码片段和VSCode创建美观、可自定义的截图。
  * [QuickType.io](https://quicktype.io/) - 快速从JSON、模式和GraphQL自动生成模型/类/类型/接口和序列化器，以便在任何编程语言中快速安全地处理数据。将JSON转换为任何语言中的美观、类型安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 一款免费的移动友好工具，提供各种随机生成的密钥和密码，可用于保护任何应用、服务或设备。
  * [ray.so](https://ray.so/) - 为您的代码片段创建美观的图片。
  * [readme.com](https://readme.com/) — 轻松创建美观的文档，开源免费。
  * [redirection.io](https://redirection.io/) — 用于管理企业、营销和SEO的HTTP重定向的SaaS工具。
  * [redirect.pizza](https://redirect.pizza/) - 轻松管理支持HTTPS的重定向。免费计划包括10个来源和每月10万次点击。
  * [Renamer.ai](https://renamer.ai) — 支持OCR、元数据提取和20多种语言自动化的AI文件重命名工具。免费层：每月15个文件，包括桌面应用、批量重命名、自动重命名和普通支持。
  * [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET、POST、PUT、DELETE和HEAD等流行请求方法。支持头部和令牌认证。包含基本登录系统以保存您的请求。
  * [Smartcar API](https://smartcar.com) - 用于定位车辆、获取油箱/电池电量、里程表、解锁/锁车门等的API。
  * [snappify](https://snappify.com) - 让开发者创建惊艳的视觉效果。从精美的代码片段到完整的技术演示。免费计划包括最多3个即时快照，无限下载和每月5次AI代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取给定经纬度的日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的订阅源，支持导出和分析。免费版功能较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费计划每份调查仅限10个问题和100个回答。
  * [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话应用。支持全渠道部署：从网站（实时聊天组件）到WhatsApp。免费计划支持无限聊天机器人。
  * [UUID Generator](https://newuuid.com/) - 即时生成UUID v1/v4/v7、GUID、Nil UUID、CUID v1/v2、NanoID和ULID，具备企业级性能和安全性。
  * [Versionfeeds](https://versionfeeds.com) — 为您喜爱的软件版本定制RSS订阅源。将编程语言、库或工具的最新版本集中在一个订阅源中。（前3个订阅源免费）
  * [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
  * [Webacus](https://webacus.dev) — 访问多种免费开发者工具，用于编码、解码和数据操作。
  * [Volume Shader BM](https://volumeshaderbm.org) — 免费的基于浏览器的GPU基准测试（WebGL）。帮助开发者可重复地测试和比较不同浏览器和设备上的着色器性能。
  * [XKit](https://xkit.io) — 一系列免费在线工具，旨在为开发者、学生和日常用户提供便利。包括多种开发者工具、差异比较工具、计算器、转换器和生成器。

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
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF。
  * [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
  * [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可定制SVG/PNG图标。
  * [LoSpec](https://lospec.com/) — 在线像素艺术及其他限制性数字艺术工具，提供大量教程和调色板列表供游戏使用。
  * [ArtStation](https://www.artstation.com/) - 免费/付费2D、3D资源及音频、图标、瓦片集、游戏套件的市场平台，也可用于展示个人作品集。
  * [Rive](https://rive.app/community/) - 社区资源库，同时支持通过免费计划创建自定义游戏资源。
  * [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源。
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型及PBR材质纹理资源。
  * [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的免费2D、3D、音频和UI游戏资源。
  * [Poliigon](https://www.poliigon.com/) - 免费及付费纹理（支持多分辨率）、模型、HDRIs和笔刷，提供Blender等软件的免费导出插件。
  * [Freesound](https://freesound.org/) - 采用不同CC许可的免费协作音效库。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为localhost开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)整理的自由开源软件及SaaS列表
* [GitHub开源开发者工具集](https://github.com/tvvocold/FOSS-for-Dev) — 开发者专属的自由开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取Microsoft 365平台开发所需的免费沙盒环境与工具（90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)，不含Windows系统，根据开发活跃度自动续期）
* [PHPhub](https://phphub.net/) — PHP工具合集，含格式化器、验证器、沙盒环境、正则测试器等
* [Pyrexp正则测试器](https://pythonium.net/regex) — 免费网页版正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专享红帽产品（RHEL/OpenShift/CodeReady等）免费访问权限（仅限个人计划），另提供免费电子书资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云服务商（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [ThemeSelection](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题与UI套件，加速应用开发
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/测试数据生成等，提供愉悦界面体验
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能（免信用卡注册，支持100MB文件导入，创建无限导入器）
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮库
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集（水印生成/录屏/编解码/加密/代码格式化等），完全免费不上传云端
* [IT工具集](https://it-tools.tech/) - 开发者与IT从业者实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费高效代码工具（Markdown编辑器/代码压缩美化/二维码生成/OG/Twitter卡片生成等）
* [regex101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）
* [Glob模式测试器](https://globster.xyz/) — 可视化Glob模式设计与测试平台
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库直接还原
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（支持实时音频/YouTube视频/字幕生成）
* [QRCode最佳实践](https://qrcode.best/) - 13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升网站排名（免费版可手动发布1篇/月）
* [PageTools](https://pagetools.co/) - 永久免费AI工具集（一键生成网站政策/社交媒体资料/网页内容）
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化优化工具
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/容器/编程/DevOps/网络）
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具（10张/月）
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）

**[⬆️ 返回顶部](#目录)**