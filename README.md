# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务需要花费时间才能做出明智选择。

这里列出了一系列提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定于基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此这份清单带有主观判断；若未采纳您的贡献，请勿介意。

这份清单汇集了1600多人提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或终止的免费服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅包含服务化（as-a-Service）产品，不包含自托管软件。入选标准是服务必须提供永久免费层级（而非仅限试用期）。若为时限型免费，则有效期至少需持续一年。我们还会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

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
  * [Flutter相关与无Mac开发iOS应用](#Flutter相关与无Mac开发iOS应用)
  * [搜索](#搜索)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
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
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB从北美到所有区域目的地（不包括中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周限制60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出站流量
    * Google Kubernetes Engine - 一个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，每月10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebook开发环境
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
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型（SSD）或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型（SSD）存储，20GB存储备份（12个月）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、轻量的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，Linux、macOS和Windows开源项目无限分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），包含有限交易的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100K次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 实例在[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出站流量，x64-based VM限速50 Mbps，ARM-based VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次递送选项，每月1000封邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用所需的一切，无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限部署静态站点、网络服务和环境。每月提供20次免费任务执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限公共和私有Git仓库，提供CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限公共和私有Git仓库（支持无限协作者）。由[Forgejo](https://forgejo.org/)驱动。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含软件包和容器托管、项目管理及问题追踪
* [GitGud](https://gitgud.io) — 无限公共和私有仓库。永久免费。基于GitLab & Sapphire。不提供CI/CD
* [GitHub](https://github.com/) — 无限公共仓库和无限私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包和容器托管、项目管理及AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限公共和私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理及问题追踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab的软件协作平台，包含CI、静态页面、项目页面及问题追踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) — 用于开发Ionic应用的仓库和工具；同时提供Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是自由许可项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) — OSDN.net是为开源软件开发者提供的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是FOSS许可项目的免费开源软件代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) — 无限免费开源的分布式版本控制系统。其独特之处在于基于补丁的健全理论，易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费私有项目（Git和Subversion），50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) — 为自由软件项目（GNU项目）提供协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 为自由软件项目（非GNU项目）提供协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂的JSON数据可视化、编辑、筛选成美观的表格网格。通过链接保存和分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转换为强大的API，快速开发原型、网站、应用等。每月500次请求免费。
  * [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
  * [IP.City](https://ip.city) — 每天100次免费IP地理位置查询
  * [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理位置、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和根本原因分析，如数据质量和性能漂移。免费支持两个模型。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的即时服务器、CRUD和有状态模拟、代理和CORS管理，以加速集成和测试。免费计划每天50次请求，并提供公共仪表板/端点，任何拥有仪表板URL的人都可以查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理位置、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费每月1,000积分，相当于1,000次并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层包括每月100次请求，覆盖所有9个端点。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [Clarifai](https://www.clarifai.com) — 图像API，用于自定义人脸识别和检测。可训练AI模型。免费计划每月1,000次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用程序API平台，完全访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美AZ，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据谱系，覆盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLMs的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份见解。免费计划限制为一个用户、数据连接、数据源和数据目标。还需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1,000次调用免费。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，适用于金融科技应用。免费计划每月5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储中访问数据，将其组织为一致的定义，并交付给每个应用。使用Cube Cloud是最快的方式，免费层每天限制1,000次查询。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件分享。数据在访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需代码即可将Airtable连接到任何应用或API。类似Postman的界面，用于在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括10 GB存储和每月120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
  * [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助服务工具的API。

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计与建模工具，免费入门版支持2个数据库模型，每个模型10张表。
* [DeepAR](https://developer.deepar.ai) — 跨平台增强现实人脸滤镜SDK。免费版每月支持10名活跃用户(MAU)及4张人脸追踪。
* [Deepnote](https://deepnote.com) — 新型数据科学笔记本。兼容Jupyter，支持云端实时协作运行。免费层包含无限个人项目、基础机型（5GB内存+2vCPU）及最多3名编辑的团队协作。
* [Disease.sh](https://disease.sh/) — 免费API提供精准新冠疫情数据，助力开发相关应用。
* [Doczilla](https://www.doczilla.app/) — 从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费版每月250份文档。
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的PDF/截图生成与私有存储托管API。免费版每月400次生成。
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端/Web/IoT的开源REST API后端。连接任意SQL/NoSQL数据库或外部服务后，即刻生成带实时文档和用户管理的完整REST平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，模板一次设计多次复用。免费层提供20点积分。
* [DynamicDocs](https://advicement.io) — 基于LaTeX模板的JSON转PDF API。免费版每月50次调用并开放模板库。
* [Efemarai](https://efemarai.com) — ML模型与数据的测试调试平台，可可视化任意计算图。本地使用免费。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。试用版含2个项目（各10张表）。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 基于网页的免费HTTP请求发送工具。
* [Export SDK](https://exportsdk.com) — 拖拽式模板编辑器的PDF生成API，提供SDK与无代码集成。免费版含250页/月、无限用户和3个模板。
* [file.coffee](https://file.coffee/) — 单文件存储上限15MB（注册用户30MB）的平台。
* [Financial Data](https://financialdata.net/) — 股票与金融数据API。免费版每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) — 即时格式化/校验/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费微型版每月500次交易检测。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费版每日2,000次请求。
* [Glitterly](https://glitterly.app/) — 从基础模板编程生成动态图像。提供REST API和无代码集成。免费层每月50张图像和5个模板。
* [Hex](https://hex.tech/) — 协作式数据平台（笔记本/数据应用/知识库）。免费社区版支持5个项目。
* [Hook0](https://www.hook0.com/) — 开源Webhooks即服务(WaaS)，免费版每日100次事件分发（保留7天历史记录）。
* [Hoppscotch](https://hoppscotch.io) — 免费美观的API请求构建工具。
* [huggingface.co](https://huggingface.co) — 构建/训练/部署Pytorch/TensorFlow/JAX的NLP模型。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) — 声明式API构建PDF报告。14天试用版含50份单页报告（可定制配色与字体）。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70+云平台（如Exact Online/Twinfield）。含数据同步功能。开发者免费版有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费（每分钟限45次请求）。
* [ipbase.com](https://ipbase.com) — IP定位API，永久免费版每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — 开发者永久免费版每日1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，免费1,000次请求。
* [IPLocate](https://www.iplocate.io) — IP定位API（每日1,000次免费），含代理/VPN/主机探测功能，并提供免费IP数据库下载。
* [IP2Location](https://www.ip2location.com) — 免费版LITE数据库可本地查询城市/坐标/ISP信息。
* [IP2Location.io](https://www.ip2location.io/) — 快速IP定位API（每月5万免费额度），含WHOIS和域名查询功能。
* [ipapi](https://ipapi.co/) — Kloudend公司基于AWS构建的IP定位API（每日1k/每月30k次免费查询）。
* [ipapi.is](https://ipapi.is/) — 开发者友好的IP定位API（免注册1,000次查询），具备顶级主机探测能力。
* [IPinfo](https://ipinfo.io/) — 精准IP数据API（每月5万次免费），含运营商/域名/反滥用等数据。
* [IPQuery](https://ipquery.io) — 无速率限制的无限次IP查询API。
* [IPTrace](https://iptrace.io) — 极简IP定位API（每月5万次免费查询）。
* [JSON2Video](https://json2video.com) — 视频编辑API（支持编程或无代码自动化生成营销视频）。
* [JSON IP](https://getjsonip.com) — 返回请求端公网IP的免注册API，支持CORS直接调用，适用于IP变更监控服务。

  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，并可自定义HTTP状态码、头部和响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss是一款强大的在线JSON查看器、编辑器和验证工具。支持格式化、可视化、搜索和操作JSON数据，具备AI驱动的修复功能、树形视图、表格视图、12+种编程语言的代码生成，以及JSON转CSV、XML、YAML、属性文件等功能。
* [konghq.com](https://konghq.com/) — API市场及强大的私有和公共API工具。免费版功能如监控、告警和支持有限。
* [Kreya](https://kreya.app) — 免费的gRPC GUI客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过使用正确的数据提升机器学习模型性能。免费提供最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月提供100次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等实时和历史金融数据。永久免费API层允许每天100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预测基于多个天气模型的机器学习组合以提高准确性。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取功能或截图服务。每天50次免费请求。
* [Mindee](https://developers.mindee.com) – Mindee是一款强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用工作流程。免费层每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式 playground。免费支持1名编辑。
* [MockAPI](https://www.mockapi.io/) — MockAPI是一款简单工具，可快速模拟API、生成自定义数据并通过RESTful接口执行操作。适用于原型设计、测试和学习。每个项目免费提供1个项目/2个资源。
* [Mockfly](https://www.mockfly.dev/) — Mockfly是值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) - 可创建与GitHub仓库同步的模拟GraphQL和REST API的工具。简单REST API无需注册即可免费开发和使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，选择云端模拟端点并检查流量，完全免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟HTTP请求的简单Web应用。也提供[开源版本](https://github.com/julien-lafont/Mocky)。
* [Mock N Roll](https://mocknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。适合前端开发、QA测试和DevOps团队。[仓库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建模拟REST API，支持生成代码和Docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简单工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的表现。适用于测试基于规则的DNS分流工具如Control D。
* [Namekit](https://namekit.app/) - AI驱动的域名发现——即时查找可用标准价格域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — OCR API解析图像和PDF文件，返回JSON格式文本结果。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API轻松将HTML或URL转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。支持热图和折线图可视化。
* [Postman](https://postman.com) — 使用Postman简化工作流并更快创建更好API，Postman是API开发的协作平台。永久免费使用Postman应用。Postman云功能也有永久免费限制版。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL。
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括5个部署工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍易用的AI网络爬取，接近零采用时间，节省现有工作流85%+时间，比手动研究快4倍且无妥协，包含所有研究任务的REST API端点。每月前1000积分免费。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。ProxySentry.io在rapidapi.com上提供每月10k次请求的免费层。
* [Public-Apis Github仓库](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Reducto](https://reducto.ai) - 将非结构化文档（PDF、XLSX、JPG、PPTX等）转为结构化JSON数据。解析、提取数据并编辑PDF表单。免费层含15k积分和按需付费。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者连接数千API，通过趣味挑战（含解决方案！）和交互示例进行API开发。
* [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg的REST API，无需处理基础设施即可在线运行FFmpeg。免费层含月度处理配额和4个vCPU。

  * [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应您的AJAX请求。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分。
* [ROBOHASH](https://robohash.org/) - 通过任何文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简单的HTTP代理API，用于爬取数据。匿名爬取，无需担心限制、封锁或验证码。每月前100次成功爬取免费，包括JavaScript渲染（联系支持可获取更多）。
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬取API和免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费10,000次API调用。
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的任何视觉或文本变化并进行数据提取。免费计划每月允许最多5个URL。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发您的Webhook。免费计划包括100次云端爬取。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 立即将任何Google表格转换为RESTful API。提供免费计划，包括每张表格1,000行免费。
* [Siterelic](https://siterelic.com/) - Siterelic API可让您截取屏幕截图、审核网站、TLS扫描、DNS查询、测试TTFB等。免费计划每月提供100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google、YouTube、Bing、百度、沃尔玛等结构化JSON结果。免费计划每月包含100次成功API调用。
* [SmartParse](https://smartparse.io) - SmartParse是一个数据迁移和CSV转API平台，提供节省时间和成本的开发者工具。免费套餐每月包含300个处理单元、浏览器上传、数据隔离、断路器和工作提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件并通过API即时访问数据，加速应用开发。免费计划包括2个API和每月2,500次API调用。无需信用卡。
* [YourGPT CSV to JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 一系列免费在线SQL工具，包括SQL格式化器和验证器、SQL正则表达式测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS。免费计划提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建最多50张图像。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送最多50,000条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察的综合研究API，具备整理研究成果的能力。免费套餐每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天1,000次免费请求。提供IP地址的位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。提供准确且最新的天气预报，覆盖全球，包括历史数据和天气监测解决方案。
* [Treblle](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。具备高级API日志聚合、可观测性、文档和调试功能。免费套餐包含所有功能，但每月限制250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590多种货币和加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包括当前状况、每小时和每日预报及天气警报。集成AI模型和ML系统分析并组合多种天气模型，提高预报准确性。免费套餐每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 简单的Web爬取API，内置解析、Chrome渲染和代理。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建更好的模型。仅限个人项目的免费套餐，包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月25,000个令牌（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 带Headless浏览器、住宅IP和透明定价的Web爬取API。每月1,000次免费API调用，学生和非营利组织可获额外积分。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，访问全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API和邮政编码验证。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，用于设计、构建和部署API到边缘。几分钟内为任何API添加API密钥认证、速率限制、开发者文档和货币化功能。原生支持OpenAPI，完全可编程，使用Web标准API和Typescript。免费套餐最多10个项目、无限生产边缘环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线工具，用于比较两个JSON数据结构的差异，帮助快速定位JSON数据中的不同之处。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速且可靠的IP地理定位API，适用于商业和非商业用户，支持JSON格式。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公有Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费的私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有及公有制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公开项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人和协作代码管理。
* [Bitwarden](https://bitwarden.com) — 个人、团队和企业组织存储、共享和同步敏感数据的最简单、最安全的方式。
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。免费提供公开访问群组、无限用户、历史记录和集成功能，同时提供可自托管的开源版本。
* [cally.com](https://cally.com/) — 为会议找到完美的时间和日期。简单易用，适用于小型和大型团队。
* [Calendly](https://calendly.com) — 连接和安排会议的工具。免费计划为每个用户提供1个日历连接和无限会话，还提供桌面和移动应用。
* [Discord](https://discord.com/) — 支持公开/私密房间的聊天工具。提供Markdown文本、语音、视频和屏幕共享功能，免费支持无限用户。
* [Fibo](https://fibo.dev) - 免费的在线实时Scrum扑克工具，帮助敏捷团队快速估算故事点，支持无限成员。
* [Telegram](https://telegram.org/) — 为需要快速、可靠消息和通话的用户设计。企业用户和小团队可享受大群组、用户名、桌面应用和强大的文件共享功能。
* [DevToolLab](https://devtoollab.com) — 在线开发者工具，免费提供所有基础工具，支持每个工具自动保存一个条目，标准处理速度和社区支持。
* [Dubble](https://dubble.so/) — 免费的逐步指南创建工具。支持截图、记录流程并与团队协作，还支持异步屏幕录制。
* [Duckly](https://duckly.com/) — 实时与团队交流和协作。支持IDE配对编程、终端共享、语音、视频和屏幕共享，小团队免费。
* [Dyte](https://dyte.io) - 最开发者友好的实时视频和音频SDK，提供协作插件以提升生产力和参与度。免费层包括每月10,000分钟的实时视频/音频使用时长。
* [evernote.com](https://evernote.com/) — 信息组织工具，支持共享笔记和协作。
* [Fibery](https://fibery.io/) — 连接的工作空间平台，单个用户免费，最多2 GB存储空间。
* [flock.com](https://flock.com) — 团队沟通的更快方式，免费提供无限消息、频道、用户、应用和集成。
* [Gather](https://www.gather.town/) - 更好的在线会议方式。围绕完全可定制的空间设计，使与社区的互动像现实生活中一样简单。免费支持最多10个并发用户。
* [gokanban.io](https://gokanban.io) - 基于语法的无需注册的看板工具，快速使用，免费无限制。
* [flat.social](https://flat.social) - 为团队会议和社交活动提供的交互式可定制空间。无限会议，最多8个并发用户免费。
* [GitDailies](https://gitdailies.com) - 每日报告团队的GitHub提交和拉取请求活动。包括推送可视化、同行认可系统和自定义提醒构建器。免费层支持无限用户、3个仓库和3个提醒配置。
* [gitter.im](https://gitter.im/) — GitHub聊天工具，支持无限公开和私密房间，最多25人的团队免费。
* [Hackmd.io](https://hackmd.io/) - 实时协作和Markdown格式文档/文件写作工具。类似Google Docs但支持Markdown文件。免费提供无限数量的“笔记”，但私密笔记和模板的协作者（受邀者）数量[将受限制](https://hackmd.io/pricing)。
* [hangouts.google.com](https://hangouts.google.com/) — 所有对话的一站式平台，免费，需要Google账户。
* [HeySpace](https://hey.space) - 任务管理工具，支持聊天、日历、时间线和视频通话。最多5个用户免费。
* [helplightning.com](https://www.helplightning.com/) — 通过增强现实提供视频帮助，免费版不包含分析、加密和支持功能。
* [ideascale.com](https://ideascale.com/) — 允许客户提交想法并进行投票，1个社区内25名成员免费。
* [Igloo](https://www.igloosoftware.com/) — 共享文档、博客、日历等的内部门户，最多10个用户免费。
* [Keybase](https://keybase.io/) — Keybase是Slack的开源替代品，保护每个人的聊天和文件安全，适用于家庭、社区和公司。
* [Google Meet](https://meet.google.com/) — 使用Google Meet满足企业在线视频会议需求，提供安全、易加入的在线会议。
* [/meet for Slack](https://meetslack.com) - 直接在Slack中使用/meet命令启动Google会议，适用于任何频道、群组或私信。免费无限制。
* [Linkinize](https://linkinize.com) — 团队书签管理器，支持标签、多工作区和协作。免费计划包括4个工作区和10个团队成员。
* [Livecycle](https://www.livecycle.io/) — Livecycle是一个包容性协作平台，为跨职能产品团队和开源项目提供无缝工作流。
* [Lockitbot](https://www.lockitbot.com/) — 在Slack中预留和锁定共享资源，如房间、开发环境、服务器等。最多2个资源免费。
* [MarkUp](https://www.markup.io/) — MarkUp允许您直接在网站、PDF和图像上收集反馈。
* [Proton Pass](https://proton.me/pass) — 密码管理器，内置电子邮件别名、2FA验证器、共享和通行密钥。支持网页、浏览器扩展、移动应用和桌面端。
* [Visual Debug](https://visualdebug.com) - 提升客户与开发人员沟通的视觉反馈工具。
* [meet.jit.si](https://meet.jit.si/) — 一键视频对话和屏幕共享，免费。
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — Microsoft Teams是一个基于聊天的数字中心，将对话、内容和应用整合在一个地方。最多50万用户免费。
* [Miro](https://miro.com/) - 可扩展、安全、跨设备且企业级的协作白板，适用于分布式团队。提供免费计划。
* [nootiz](https://www.nootiz.com/) - 收集和管理网站视觉反馈的首选工具。
* [Notion](https://www.notion.so/) - Notion是一款支持Markdown的笔记和协作应用，集成了任务、维基和数据库。公司将其描述为笔记、项目管理和任务管理的全能工作区。除跨平台应用外，还可通过大多数网页浏览器访问。
* [Nuclino](https://www.nuclino.com) - 轻量级协作维基，用于团队知识、文档和笔记管理。免费计划包含所有基本功能，最多50个项目和5GB存储。
* [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，内置视频聊天、绘图板和在线代码编辑器，可在浏览器中编译和运行代码。一键创建远程面试房间。
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简单的团队时间表和计时应用。免费计划支持最多10个用户的时间跟踪和报告生成功能。
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub拉取请求添加视觉审查功能，无需部署网站。每月最多10个页面和总计100MB存储免费。
* [Pendulums](https://pendulums.io/) - Pendulums是一款免费的时间跟踪工具，通过易用的界面和有价值的统计数据帮助您更好地管理时间。
* [Pumble](https://pumble.com) - 免费的团队聊天应用。无限用户和消息历史，永久免费。

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、音视频通话，并能轻松与其他服务集成。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息记录和完整历史消息存储。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB云空间。
  * [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多代码库贡献记录并生成统一报告。
  * [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作。
  * [Slab](https://slab.com/) — 现代化团队知识管理服务，10人以下团队免费使用。
  * [slack.com](https://slack.com/) — 无限用户免费版（部分功能受限）
  * [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页，可监控上游服务提供商的状态页。
  * [Stickies](https://stickies.app/) - 可视化协作工具，用于头脑风暴、内容整理和笔记记录。免费版支持3个看板墙、无限用户和1GB存储。
  * [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
  * [StreamBackdrops](https://streambackdrops.com) — 免费高清视频会议虚拟背景库，适用于Zoom/Teams/Google Meet等平台。无需注册，个人使用免费。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点连接，无需插件或注册。
  * [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum流程，含时间追踪功能。免费版支持5用户+3项目组合。
  * [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程，含完整的远程团队休假管理功能。5人以下小组免费。
  * [Tefter](https://tefter.io) - 书签管理应用，深度集成Slack。开源团队免费使用。
  * [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板等端到端加密协作工具，无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 无限用户的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具。
  * [Huly](https://huly.io/) - 一体化项目管理平台（替代Linear/Jira/Slack/Notion/Motion），免费版含无限用户、10GB工作区存储和10GB音视频流量。
  * [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用全功能项目管理应用。
  * [twist.com](https://twist.com) — 异步友好型团队沟通应用，保持对话条理化。提供免费无限版，合格团队可享折扣。
  * [tldraw.com](https://tldraw.com) — 免费开源白板绘图工具，含智能箭头/吸附/便签/SVG导出功能，支持多人协作。另有官方VS Code扩展插件。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签页/任务管理器，支持文件夹协作的定制化云桌面。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页/移动端即时消息与团队分享创意。
  * [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR。全员免费，非营利组织赠送Nano套餐。
  * [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in）
  * [windmill.dev](https://windmill.dev/) - 开源开发者平台，用Python/Typescript快速构建多步骤自动化流程和内部应用。免费用户最多创建3个非高级工作区。
  * [vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台，免费版提供10个视频/1GB存储/10GB月流量。
  * [userforge.com](https://userforge.com/) - 互联人物角色与用户故事映射工具，免费版支持3个角色+2名协作者。
  * [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，免费版含25个视频+品牌化播放器。
  * [wormhol.org](https://www.wormhol.org/) — 直连文件分享服务，支持5GB以内文件无限次分享。
  * [Wormhole](https://wormhole.app/) - 端到端加密文件传输（24小时内有效），5GB以上文件采用P2P直传。
  * [zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费会议限时40分钟。
  * [Zulip](https://zulip.com/) — 独特邮件式线程模型的实时聊天工具，免费版含1万条历史消息+5GB存储，另提供自托管开源版。
  * [robocorp.com](https://robocorp.com) - 自动化运维开源套件，免费版含240分钟/月机器人运行时长+10次助手执行+100MB存储。
  * [Fleep.io](https://fleep.io/) — Slack替代品，免费版支持小团队完整消息历史+无限私聊+1个群组+1GB存储。
  * [Chanty.com](https://chanty.com/) — 另一款Slack替代品，永久免费版支持10人团队无限对话+可搜索历史+无限语音消息+10个集成+20GB团队存储。
  * [ruttl.com](https://ruttl.com/) — 最佳一体化数字反馈工具，支持网站/PDF/图片批注。
  * [Mattermost](https://mattermost.com/) — 技术团队安全协作平台，免费版含无限频道/剧本/看板/用户+10GB存储。
  * [Webvizio](https://webvizio.com) — 网站反馈与BUG报告工具，可直接在实时网站/图片/PDF/设计文件上标注。
  * [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
  * [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人参与）。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人参与）。
  * [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库/API文档），个人开发者免费。
  * [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面，无需订阅即可发送照片视频等大文件。

  * [Revolt.chat](https://revolt.chat/) — 一个尊重用户隐私的开源[Discord](https://discord.com/)替代品。免费提供Discord大部分专有功能。Revolt是一款集安全、快速于一体的全能应用，且100%免费。所有功能均无付费墙。与主流聊天应用不同，它还支持（官方及非官方）插件。
* [腾讯实时音视频TRTC](https://trtc.io/) — 提供群组音视频通话解决方案，首年赠送10,000分钟免费时长。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴平台，支持客户端加密、多标签粘贴、API接口、高亮编辑器等特性。
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集反馈，无需模拟器/画布等变通方案。免费版功能完整可用。
* [Cushion](https://cushion.so/) - 专为高效分布式小团队设计的Slack替代品，支持异步协作。免费版包含30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。开发者可享免费套餐，同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API，免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 及 API 工具包，提供开发者免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM，内置 GraphQL API。免费版包含无限用户、1000 条目录项、5 GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 小型项目免费套餐。基于 GraphQL 的 CMS，基础版每月提供 10 万次 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS，完全免费管理本地或云端资产与数据库内容，无功能限制或付费墙。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销功能。开发者计划支持 2 用户无限项目（各含 2 环境）、500 条内容、2 种语言及 Delivery/Management API，含自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS，提供全托管可扩展 API。社区计划含无限 API 调用、文档、自定义类型、资产和语言环境，满足项目需求。开放内容/开源项目可享更大免费方案。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。免费版每项目支持无限项目与管理员用户、3 非管理员用户、2 数据集、50 万次 API CDN 请求、10GB 流量和 5GB 资产。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业提供全规模解决方案。开发者计划含 3 用户、500 条内容、3 内置角色、25+5 内容类型、全功能 REST API、文档预览生成及 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 支持的无头 CMS，兼容 Markdown/MDX/JSON，基础版免费支持 2 用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活框架，轻松构建各类 CMS/API/数据库驱动的网站，打造更高流量、转化与收益的无头网站。
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL 优先 API，助您从传统方案迁移至 GraphQL 原生无头 CMS，实现全渠道内容优先交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先，开源且基于事件溯源（自动记录所有变更）。
* [InstaWP](https://instawp.com/) - 秒建 WordPress 站点。免费套餐含 5 个活跃站点、500 MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者与营销者的无头 CMS，兼容所有现代框架。社区（免费）版含 Management API、可视化编辑器、10 个资源、自定义字段类型、多语言支持（无限语言/地区）、2500 个资产管理、图片优化服务、搜索查询及每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 服务器、2 站点、免费 SSL 证书和无限定时任务，无时间限制。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，通过简单输入生成精美商业网站。含免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的 No code 应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限的 API 和路由，支持深度集成。免费方案包含 3 个项目、5 张表和 1 个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编码 AI 助手，利用 AI 和对代码库的深度理解，帮助您更快编写和理解代码。Cody 为开发者提供多种 LLM 选择（包括本地推理），支持多种 IDE 和所有主流编程语言，并提供免费方案。免费方案每月提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计无缝转化为动态 Flutter 和 React 应用，优化您的工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持 C#。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，其商业友好型免费方案包含 3 个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是一款快速的 AI 代码补全插件，支持 VSCode、JetBrains 和 Neovim。免费方案提供无限行内补全。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习洞察，帮助开发者更快构建更好的软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0 使用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，初始赠送 1200 积分，每月还可获得 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1位用户和1个100 MB存储的代码库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅限3分钟会话（Vista系统下1024x768分辨率测试MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构同样免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者工作模式优先处理技术债务，可视化团队耦合度等组织因素。开源免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪。通过精准指标在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — AI驱动的代码缺陷/安全漏洞/性能问题检测，支持Java/C/C++/JavaScript/Python/TypeScript。集成GitHub/BitBucket/GitLab，开源项目和30人以下团队免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，检测安全/性能/反模式/风险/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库与SQL查询的关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化的顶级静态代码分析器，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub PR与提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析。开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证和多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索您的项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 展示代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep式管理工具。支持代码片段整理、发现与共享，提供强大的代码截图功能（含预设模板和链接特性）

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试融入您的开发流程。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更快的发布周期。免费版每构建最多30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的CD服务，开源项目免费。
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持在Kubernetes和Lambda环境上部署自定义和第三方应用。免费版允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，每次构建10分钟，支持2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目和1个并发运行（每月120次执行）。
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟作业时间。测试分析免费开发者层包括每月10万次测试执行，开源项目有更多免费包含项。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费。
* [CircleCI](https://circleci.com/) — 全面的免费计划，包含GitHub、GitLab和BitBucket仓库的托管CI/CD服务的所有功能。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存和其他高级CI/CD功能。每月最多6000分钟执行时间，无限制协作者，私有项目30个并行作业，开源项目最多8万分钟免费构建时间。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费。
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费。
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，1个环境，共享服务器，无限制公共仓库。
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时间。
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制。
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费。
* [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30分钟构建时间）。
* [drone](https://cloud.drone.io/) - Drone Cloud使开发者能够在多种架构（包括x86和Arm，32位和64位）上运行持续交付流水线。
* [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建一个VM，并通过唯一URL使您的应用可用，无限制公共和私有仓库，VM大小最多2GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库。
* [Mergify](https://mergify.com) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费。
* [Make](https://www.make.com/en) — 工作流自动化工具，让您通过UI连接应用和自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层包括100 Mb，1000次操作和15分钟的最小间隔。
* [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月免费3000分钟构建时间。
* [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，使用Open Policy Agent的持续资源合规性，SAML 2.0的SSO，以及公共工作池的访问：每月最多200分钟。
* [microtica.com](https://microtica.com/) - 使用现成的基础设施组件启动环境，免费在AWS上部署应用，并支持生产工作负载。免费层包括1个环境（在您的AWS账户上），2个Kubernetes服务，每月100分钟构建时间和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割您的e2e测试运行来加速您的monorepo在CI上的表现。免费计划支持最多30个贡献者，包含15万积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3000分钟免费时间，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。最多2个用户免费，包含所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费。单用户免费版每周有有限的检查点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接测试您的Android和iOS应用。免费版每月包含两个并发会话，每次使用30分钟。应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。额外月费可获得云监控和CI/CD集成。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分价格监控API和应用。基于Monitoring as Code工作流和Playwright。开发者享有慷慨的免费层。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否对给定域启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5个用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5个测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有步骤并生成脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地注入故障以发现弱点，避免影响客户。Gremlin Free支持对最多5个主机或容器执行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费版支持最多4个并发节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费版支持最多10分钟测试文件，开源项目无限免费。
  * [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及Selenium和Cypress自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费版每月模拟最多50个并发用户，持续60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
  * [octomind.dev](https://www.octomind.dev/) - 使用AI辅助生成测试用例，自动生成、运行和维护Playwright UI测试
  * [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费版每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费版包含所有核心功能，500MB附件存储，最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费版限10次iOS和10次Android测试，但包含付费版大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费版最多10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制测试的唯一URL向开发者展示如何复现错误。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本和常规版本，检查任何URL的SSR（服务器端渲染）。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费版包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台，支持主流测试框架集成。开源软件开发者、个人用户、教育机构及初创小团队可申请基础免费项目之外的折扣或免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook，支持转发至本地环境或历史记录回放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，集成工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量且含五年免费维护期。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具集。
  * [webhook-test.com](https://webhook-test.com) - 通过专属URL调试和检查集成过程中的webhook与HTTP请求。完全免费，可创建无限URL并获取智能建议。
  * [webhook.site](https://webhook.site) - 使用定制URL验证webhook、外发HTTP请求或电子邮件。临时URL及邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含两名用户、10个代码库扫描、1个云账户、2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API垃圾邮件过滤器。免费计划每个域名每天200次请求。
  * [atomist.com](https://atomist.com/) — 自动化各种开发任务的更快捷方式。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全与合规审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分内容可在GitHub获取(https://github.com/unknownhad/AWSAttacks)。完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改证明的开源平台，用于公证代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 面向云环境的开发者友好安全平台，防止.NET和Java应用数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的网页工具，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动化依赖项更新，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化安全检查工具，扫描Django网站的安全漏洞。基于Pony Checkup站点分叉开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，也不会丢失重要.env文件。免费支持最多3名团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测和修复，防止密钥泄露到源代码中。扫描Git仓库中350+种密钥和敏感文件——个人及25人以下团队免费使用。
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，管理开发团队和基础设施中的密钥：从本地开发到生产环境第三方服务全覆盖。最多5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
  * [keychest.net](https://keychest.net) - SSL证书到期管理及购买，集成证书透明度数据库
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java、Javascript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。一个私有项目免费，开源项目数量不限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用和配置的安全监控，免费支持25个用户和30天历史记录
  * [openapi.security](https://openapi.security/) - 快速检查任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册。
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人，作为自动化产品安全工程师为Java代码库提交PR以解决漏洞。即将支持其他语言！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。一个私有项目免费，开源项目数量不限。
  * [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 发现并修复开源依赖项中的已知安全漏洞。开源项目无限次测试和修复，私有项目每月限200次测试。
  * [Socket](https://socket.dev) — 为个人开发者、小团队和开源项目提供的免费供应链安全方案。包含应用和防火墙CLI工具，保护代码免受恶意依赖侵害。检测70+供应链风险指标。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL网页服务器配置深度分析
  * [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测并修复安全威胁。通过简单高效的方案保护项目。
  * [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，发现并修复生产环境前的安全漏洞。单个应用支持无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查及恶意软件扫描
  * [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒和服务器防火墙(WAF)。注册用户免费层包含邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书、链等。不限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：专为刚开始学习网络威胁情报的研究人员、分析师和组织设计。最多3个用户免费
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。最多250个用户的应用免费。
  * [Vulert](https://vulert.com) - Vulert持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费。

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个公开GitHub仓库、代码片段、议题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供的精细化授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名MAU和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管的单点登录服务。免费计划包含25,000名MAU、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用添加无密码登录、OTP验证、双因素认证(2FA)和单点登录(SSO)。包含完整前端组件。免费额度5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商集成（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)服务，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。精细化权限控制，免费额度100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供预构建的登录/注册/用户资料等UI组件。免费额度10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费额度100名用户和一个领域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证方案。无限MAU免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK两种方式。免费额度7,500名活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成到产品中。入门套餐包含7,500名免费MAU。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10名用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端等应用实现无密码认证，最快仅需数分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费额度100名MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费支持3个企业应用和5个个人应用（用户数不限）。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。开发者账户永久免费，包含所有安全功能、无限团队成员、200名日活跃用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC等权限模型，提供实时更新和无代码策略UI。免费额度1000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费领域(realm)支持1000名用户和10个SSO连接，采用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业级SSO。免费计划包含无限MAU、无限组织和2个SSO/SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费计划包含10,000名MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案，开发者友好型设计，5分钟快速入门。可免费自托管，SaaS版提供10,000名免费MAU。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，在快速上手的同时保持对用户体验的控制。免费额度5000名MAU。
* [Warrant](https://warrant.dev/) - 为企业级应用提供托管的授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度25,000次认证请求，包含OTP/无密码登录/策略等完整安全功能。
* [PropelAuth](https://propelauth.com) - 通过少量代码即可支持任意规模企业客户，免费额度200名用户和10,000封事务邮件（带"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 为产品开发、保护和管理用户身份体系（包含认证与授权）。免费额度5,000名MAU，支持开源自托管。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 确保移动应用正常运行的必备平台。免费计划包含：一个应用、分析功能、无限版本与安装、以及反馈收集。
  * [Loadly](https://loadly.io) - iOS 和 Android 测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
  * [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用部署到设备。免费计划包含：应用上传、密码保护链接、1 天有效期、十次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过无线方式分发 iOS 和 Android 应用。免费计划包含：无限制上传、私有链接、访客 2 天有效期、注册用户 60 天有效期。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用以供测试。免费计划包含：一个应用项目、三个应用版本、500 MB 存储空间、每月 100 次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包含：五个应用、每月 50 次下载、最大文件大小 100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
  * [Esper](https://esper.io) — 面向Android设备的MDM和MAM（含DevOps功能）。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
  * [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备
  * [Miradore](https://miradore.com) — 设备管理服务。实时管理设备群并免费保护无限设备。免费版提供基础功能
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
  * [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
  * [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
  * [xcloud.host](https://xcloud.host) — 带直观界面的服务器管理与部署平台。提供单台服务器免费套餐
  * [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持多可用区节点部署。
  * [courier.com](https://www.courier.com/) — 统一API集成推送、应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐每月10,000条消息。
  * [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件、推送、短信、产品导览、横幅等）。每月最多1,000名活跃用户免费。
  * [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理。永久免费连接100台设备（无需信用卡）。
  * [knock.app](https://knock.app) – 开发者通知基础设施。单次API调用支持应用内、邮件、短信、Slack和推送等多渠道发送。免费套餐含每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
  * [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件、短信、站内信、应用内及推送的组件与API。免费套餐含每月30,000条通知（保留90天）。
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日200,000条消息。
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日100,000次事件。
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费套餐含4KB消息大小、50个活跃连接和每月5GB数据。
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）。
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费 tier](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长。
  * [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送次数不限。
  * [httpSMS](https://httpsms.com) - 通过Android手机作为SMS网关收发短信。每月免费200条收发额度。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的弹性安全MQTT代理。永久免费100万会话分钟/月（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API/Webhook无缝集成，免费套餐支持每日50条消息至1台设备1个应用。
  * [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知。单接口支持事务性、定时及互动通知的多渠道发送。免费套餐含每月10,000条通知，支持摘要、批次、多通道等流程节点。
  * [SMSGate](https://sms-gate.app) - Android™短信网关云服务，通过设备路由实现短信收发。完全免费的云服务（每日超10,000条建议报备以保障服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费套餐每日10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 免费套餐每月5GB日志，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费套餐包含50GB存储，15天存储保留期和7天日志搜索
* [sumologic.com](https://www.sumologic.com/) — 免费套餐每日500MB日志，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB日志，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
  * [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
  * [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费且无限制
  * [Lecto](https://lecto.ai/) - 机器翻译API，提供免费层级（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成。
  * [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
  * [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
  * [Localeum](https://localeum.com) - 最多1000条字符串免费，1名用户，无限语言，无限项目
  * [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（包含2名用户，500个键，无限项目）。
  * [localizely.com](https://localizely.com/) — 开源项目免费
  * [Loco](https://localise.biz/) — 最多2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
  * [oneskyapp.com](https://www.oneskyapp.com/) — 最多5名用户的有限免费版，开源项目免费
  * [POEditor](https://poeditor.com/) — 最多1000条字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多100个翻译键免费，无限字符串，无限语言，初创企业优惠
  * [Texterify](https://texterify.com/) - 单用户免费
  * [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 开源项目免费
  * [Translation.io](https://translation.io) - 开源项目免费
  * [Translized](https://translized.com) - 最多1000条字符串免费，1名用户，无限语言，无限项目
  * [webtranslateit.com](https://webtranslateit.com/) — 最多500条字符串免费
  * [weblate.org](https://weblate.org/) — 自由项目免费，免费层级最多10,000条源字符串，无限自托管本地部署。
  * [Free PO editor](https://pofile.net/free-po-editor) — 对所有人免费
  * [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动本地化。自带LLM，或通过Lingo.dev管理的本地化引擎每月免费使用10,000字。

**[⬆️ 返回顶部](#目录)**

## 监控

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控（APM）+ 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时指标免费版，APM代理限制为一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版含1小时数据保留期
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费版包含10个监测器（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测器，无限用户/仪表盘/告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费版含1个用户、1万次API&网络检查/1.5千次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描/用户/存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与运行监控。免费版含5个监测器
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监测器，推荐注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个运行监测器，5分钟间隔。支持邮件/Slack告警
* [economize.cloud](https://economize.cloud) — 通过云资源优化与报告帮助厘清云成本。每月Google Cloud Platform消费不超过5,000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者实时性能洞察。24小时数据保留期免费
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控，永久免费支持5台服务器（60秒间隔），无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合观测平台，集成指标与日志。免费版：3用户/10仪表盘/100告警，Prometheus和Graphite指标存储（1万序列14天保留），Loki日志存储（50GB日志14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。免费支持20个检查项
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页聚合器，永久免费提供20个监测器和2个通知渠道（Slack/Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整实时监控面板，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费含无限订阅和团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费支持5个监测器
* [linkok.com](https://linkok.com) - 在线失效链接检查器，小网站（100页内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - 全栈应用观测平台，开发者社区永久免费版含100万日志事件监控和2台主机的基础设施/APM监控
* [MonitorMonk](https://monitormonk.com) - 极简运行监控与美观状态页。永久免费版支持10个网站/API端点的HTTPS/关键词/SSL/响应时间监控，提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — 开源实时指标收集工具，GitHub可获取
* [newrelic.com](https://www.newrelic.com) - 全栈可观测性平台，免费层含100GB/月数据摄入、1个全权限用户和无限基础用户
* [nixstats.com](https://nixstats.com) - 单服务器免费。含邮件通知/公共状态页/60秒间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API运行监控、定时任务监测和状态页。免费版含5个检查项（3分钟间隔），支持Slack/Discord/邮件告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) - 通过对比中美服务器DNS结果与ASN信息，检测网站是否被中国防火墙屏蔽
* [opsgenie.com](https://www.opsgenie.com/) - 高可用服务告警与值班管理，免费支持5用户
* [paessler.com](https://www.paessler.com/) - 强大基础设施与网络监控方案，免费支持100个传感器
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监测器（每日检查）
* [pagerly.io](https://pagerly.io/) - Slack值班管理（集成Pagerduty/OpsGenie），免费支持1个团队
* [pageradar.io](https://pageradar.io/) - 监控核心网页指标/SEO变更/网站运行。免费版含5个URL每日核心指标监控、10个HTML/SEO变更监测器、167国联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁告警与值班界面，免费支持5用户
* [phare.io](https://phare.io/) - 运行监控免费支持10万事件（无限项目/状态页）
* [pingbreak.com](https://pingbreak.com/) - 现代运行监控服务，无限URL检测，支持Discord/Slack/邮件宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个运行监测器（10分钟间隔），支持SSH/HTTP/HTTPS/自定义TCP端口
* [pingpong.one](https://pingpong.one/) - 高级状态页平台，免费版含1个可定制公共状态页（SSL子域名），开源项目与非营利组织免费提供专业版
* [Pulsetic](https://pulsetic.com) - 永久免费含10个监测器/6个月历史数据/无限状态页/自定义域名，无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，无限服务器，10个自定义指标，500,000个自定义指标数据点，无限仪表盘和用户等。
  * [Simple Observability](https://simpleobservability.com) — 统一平台中的强大服务器监控，支持指标和日志，无需复杂设置。单台服务器免费。
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron和SSL监控，每个类别5个免费监控项。
  * [sitesure.net](https://sitesure.net) - 网站和Cron监控 - 2个免费监控项。
  * [skylight.io](https://www.skylight.io/) — 前100,000次请求免费（仅限Rails）。
  * [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控。提供HTTP监控、基于浏览器的监控、DNS监控、域名监控、状态页面等。免费层包括10个HTTP监控、1个DNS监控和1个状态页面。
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等。
  * [Squadcast.com](https://squadcast.com) - Squadcast是一款端到端的事件管理软件，旨在帮助您推广SRE最佳实践。最多10名用户的永久免费计划。
  * [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计项，无期限限制。
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制。
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，3个免费监控项。
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名。
  * [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，支持告警和指标。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个位置和20个主要Web服务的数据源。
  * [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监控项，5分钟间隔，可自定义状态页面（甚至可用于商业用途）。通过电子邮件和Telegram享受无限实时通知。无需信用卡即可开始使用。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 端到端的事件管理、告警、值班管理和响应编排平台，适用于网络运营、站点可靠性工程和DevOps团队。最多5名用户免费。
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控工具，提供多种监控类型：Cronjob、关键词、网站、端口、Ping。25个正常运行时间检查，3分钟间隔检查免费。通过电话、短信、电子邮件和Webhook告警。
  * [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。
  * [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费，Linux和Windows服务器监控：5个免费，状态页面：1个免费 - 移动应用、多种通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行状态监控。开源项目可免费使用Small Business订阅套餐。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持无限量自托管。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，支持无限量自托管。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费套餐含每月5,000次错误、不限用户数、30天数据保留
* [sentry.io](https://sentry.io/) — 实时应用异常追踪，提供小型免费套餐。每月5,000次错误/1用户免费，自托管不限量使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键提交错误报告。免费套餐支持无限次提交。
* [Whitespace](https://whitespace.dev) – 浏览器内一键录制错误报告。个人用户免费套餐支持无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，支持容错输入、相关性排序，并提供UI库轻松构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000月活跃用户，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完全编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目培养Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发全领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证对齐的免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 2500+门MIT课程资料免费开放，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML、CSS、JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript和SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程（React/Node.js/GraphQL/TypeScript等），完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，涵盖计算机科学/工程/数据科学
* [Django教程](https://django-tutorial.dev) - 首个Django框架学习指南，为用户文章提供免费dofollow反链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click和Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言开源教育平台，含人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 邮件订阅服务。最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送服务，免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系人历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户。完全免费的反事务性邮件服务，邮件永不投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，支持多域名。页面刷新即更新邮箱地址。完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器。支持10个域名，可创建无限地址（含广告），完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务。免费创建无限域名邮箱（注意：使用.casa/.cf/.click等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试邮件功能。免费账户永久每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发。收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每天创建3个临时邮箱，可通过Chrome扩展管理。适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件3天后自动删除。开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API服务，含REST API和SMTP集成，每月最多3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约86400次/月）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件和自动化流程
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮箱测试免费API，公共邮件托管，出站捕获，邮件转Slack/Websocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP服务，每月3500封免费事务性和营销邮件。开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息
* [Mail7.io](https://www.mail7.io/) — QA开发者专用临时邮箱。通过Web界面或API即时创建
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱。通过网站或RSS阅读邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有ID共享收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每天100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，内置端到端加密。1GB免费存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API。免费层（每月10000封）。异步发送。多SMTP服务器支持
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100个邮箱，含DEA检测/DNS查询/SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API。每月3000封，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案。免费5个别名，无限带宽和收发。教育工作者免费
* [Substack](https://substack.com) — 无限免费邮件订阅服务。收费时开始付费

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封事务性邮件免费。
* [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告、无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管。
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测；每天25次免费验证。
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱提供商，现提供一系列服务，部分含免费方案。免费方案服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名。
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费方案包含1个并发远程支持许可和5台无人值守计算机的无限期访问，适用于专业及个人用途。
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储。
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储。捆绑Zoho办公套件（Writer、Sheets和Show）。
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案。
   - [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册及10个集成，支持频道、活动和论坛。
   - [会议](https://zoho.com/meeting) — 最多3名会议参与者及10名网络研讨会 attendees。
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理。
   - [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5名 attendees 的远程培训。
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品。
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，ZIP备份，RSS和Atom订阅，访问控制及自定义CSS。
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅及1用户免费，支付托管由Zoho完成。存储最近40次订阅指标。
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面及最多50次支付。
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守计算机。
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储，无限用户，每频道100用户及SSO。
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约安排
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证、黑名单监控、邮件测试等。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为核心的功能开关服务，支持无限团队规模，提供卓越的技术支持且价格合理。免费方案包含最多10个功能开关、2个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨网页、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量不限。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量不限。
  * [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试。免费支持最多3个环境，每个环境5个功能开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能开关管理平台。免费方案包含最多10个开关、2个环境且请求不限量。SDK、分析面板、发布日历、Slack通知等所有功能均包含在永久免费方案中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。其慷慨的免费方案提供无限席位、开关、实验和动态配置，支持每月最多100万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试。支持代码化配置和全类型化TypeScript SDK，深度集成Next.js和React等框架。提供丰厚的免费层级和低成本扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费字体、共享软件、试用版或公共领域字体。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 专为商业用途授权的免费字体，以易用格式精心挑选呈现。
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接至Google CDN，可快速便捷地为网站添加多种免费字体。
* [FontGet](https://www.fontget.com/) - 提供分类清晰、标签完善的可下载字体库。
* [Fontshare](https://www.fontshare.com/) - 专业级字体免费服务，个人和商业用途均可100%免费使用。
* [Befonts](https://befonts.com/) - 为个人或商业用途提供独特字体资源。
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商业字体（限个人使用），支持输入文本快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台。
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，含CJK（中文/日文/韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大且对开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等场景。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版含无限表单数量，每月20次提交（若保留Form-Data标识可额外获得2000次）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月250次提交，配备现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交终端，含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单终端，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月500次提交，可自定义回复邮箱地址。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月，含邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版不限表单数量，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单终端，永久免费且无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1表单、50次提交、单文件上传及100MB存储空间。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。可通过界面转发提交至邮箱/Slack/Zapier。无需服务器代码，免费版支持无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版不限表单数量和提交次数，含预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款功能、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单终端，完美适配静态网站。免费版支持1个网站每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版允许1个网站、1个表单及每月1,000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单与调研工具，含50+专家设计模板。免费账户限1个活跃调研，100次响应/调研及8种响应类型。
* [Screeb](https://screeb.app/) - 应用内调研与用户行为分析工具。永久免费版支持500月活用户，不限响应次数和事件记录，含多平台集成、数据导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB文件存储，支持Zapier集成、CSV/JSON导出、自定义跳转/响应页、Telegram/Slack机器人及单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道反馈收集与跟进调研工具。AI自动分析生成洞察。免费版含邮件/网站/产品内/移动端调研、AI问卷生成器和25次月度响应。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可轻松集成HTML表单。提交内容将自动发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷与表单构建器。免费版支持5个表单，每表单最多3步骤，每月50次响应。
* [Typeform.com](https://www.typeform.com/) — 为网站嵌入精美设计的表单。免费版每表单限10个字段，每月100次响应。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持Webhook通知。免费版文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态/JAMStack网站的无后端代码联系表单。免费版不限表单数量与域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研与表单构建器。免费版每个账户3个调研，每月100次响应，每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享独特风格的表单。不限表单数量与功能，免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版不限PDF数量，每PDF限3次提交。
* [forms.app](https://forms.app/) — 支持条件逻辑、自动评分和AI的在线表单工具。免费版可收集100次响应，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。通过Qualli AI生成完美问题。免费版支持500月活用户，不限表单和触发条件。
* [Sprig](https://sprig.com/) - 免费版每月1次产品内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈，提供React/Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃调研，每调研25次响应及可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200+种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 通用搜索工具，可同时搜索所有应用。搜索助手可让您利用您的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并与任何可观测性客户端兼容。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并生产化生成式AI产品。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代其LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流中的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，适用于Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大型语言模型（LLM）在几分钟内提供定制商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，这些模型虽免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的人声清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的CDN服务。cdnjs是一个由Cloudflare提供支持的开源免费CDN，被全球超过11%的网站所信任。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate是一个极速、可靠的GraphQL API CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您将其添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费提供DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费支持100万次请求。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 一种快速启动和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不失败的CD。个人使用免费，支持一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。全球缓存即时处理图片。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1 TB流量和100万次请求，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5 TB CDN流量，19个核心PoP，1个域名和通用SSL。
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持最多5个用户和每日1 GB流量。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用，30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目（支持WebSocket），含认证服务。免费版每项目包含1个数据库、3个存储桶、5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 开源跨平台移动应用开发工具链，面向Java/Kotlin开发者。商业用途免费，项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析。适合内容密集型和企业电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的JavaScript/TypeScript/WebAssembly分布式系统。免费版每日10万请求，每月100 GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储，每月1GB流量，限用免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的后端框架，无样板代码。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供1个永不休眠的免费实例，PostgreSQL免费版限2连接、10,000行且无备份。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持快速扩展。免费计划含10万服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台，基于任意触发器构建工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费版含1个your-username.pythonanywhere.com域名应用、512MB私有存储、1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月5万次。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持Docker容器/Web应用/API。免费实例可部署至德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1 CPU。免费PostgreSQL数据库位于法兰克福/华盛顿/新加坡。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存，默认15秒超时，每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用PaaS服务，含免费MongoDB共享托管和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2个服务、2个定时任务和1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台，兼具NoCode敏捷性与编程语言能力。免费版含[1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。免费计划支持3个项目、1GB出口流量、每月300分钟构建时间（[定价详情](https://wundergraph.com/pricing)）。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务，每月赠5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，可创建类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用、100GB流量和10个定时任务（限非商业/学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者PaaS服务。免费版含5个组件，每月100美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动和Web Baas，免费提供1GB文件存储、每月50,000次推送通知及1,000个表内数据对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速启动您的Python API，通过在线编辑器或本地工具免费构建和托管。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档和资源，为企业构建和部署数字创新。包含平台、SDK及组件库的完整个人沙盒环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P语音视频通话、文件附件和推送通知。支持最多1,000名用户的应用免费。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录、500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨的免费层级。
* [Firebase](https://firebase.com) - Firebase助您构建并运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需编写代码即可构建Flutter应用UI。集成Firebase。免费计划包含UI构建器和免费模板。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、视频音频及信息流功能，无需数周开发。
* [hasura.io](https://hasura.io/) - Hasura扩展您现有数据库，提供即时GraphQL API，安全支持Web、移动及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送，无限联系人并支持自动预热。
* [paraio.com](https://paraio.com) - 具备灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息和100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2,000订阅者内无限通知。
* [pusher.com](https://pusher.com/beams) - 2,000月活用户免费无限推送通知。iOS和Android统一API。
* [quickblox.com](https://quickblox.com/) - 即时消息、视频语音通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 用拖拽工具快速构建应用。点击定制数据模型。通过Apex代码扩展。强大API集成万物。企业级安全防护。点击或前沿框架定制UI。免费开发者计划开放完整Lightning平台。
* [simperium.com](https://simperium.com/) - 即时自动跨平台同步数据，无限结构化数据传输存储，每月最多2,500用户。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，构建后端。免费计划含认证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) - 带认证、配额、监控和分析的API管理。免费云服务。
* [zapier.com](https://zapier.com/) - 连接应用自动化任务。每15分钟5个Zaps，每月100次任务。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务、15分钟更新间隔、5个活跃自动化、Webhook支持。
* [LeanCloud](https://leancloud.app/) - 移动后端。1GB数据存储、256MB实例、每日3,000次API请求和10,000次推送免费。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持与15+种数据库及任何API集成。
  * [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具有拖放界面、离线支持、实时位置跟踪及多种第三方服务集成功能。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理以10倍速度构建内部工具、自定义用户旅程、数字体验、自动化、管理面板和运营应用。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用OpenAI、Anthropic、Firecrawl等内置免费API。适合构建AI代理/内部工具并与团队共享。免费层包含API全访问、AI编码助手及每月10,000次执行额度。
  * [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、0.5 GB存储和1 GB RAM/应用。免费层还允许使用Studio和Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS（支持本地或云部署），免费"个人环境"提供无限代码和最多1 GB数据库。
  * [ReTool](https://retool.com/) — 构建内部应用的低代码平台。高度可定制——任何能用JavaScript和API实现的功能均可通过ReTool完成。免费层支持每月最多5名用户，不限应用数量和API连接。
  * [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。使用AI生成、可视化编辑并通过代码扩展。集中管理集成、认证、权限和审计日志。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖放式应用构建器开发应用。
  * [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。支持通过拖放构建UI，并可通过JavaScript、Python和SQL深度定制。提供云和自托管方案，免费支持最多5名用户。
  * [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。免费版支持1名用户和每月100万次工作流活动（[德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费网络托管，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，自定义 Web 服务器，可通过 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，PHP、MySQL、应用安装器、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施麻烦并加速设置。
  * [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建 Web 和移动应用，免费但带有 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) — 专注于 Web3 前端的去中心化网络托管平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) — 在 App Platform Starter 层级免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到网络。仅限静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并公开实时共享。通过其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 电子邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持以及许多其他免费主机未提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费托管服务，包括行业最佳控制面板和 50+ 免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费网络托管，提供 Plesk 控制面板、PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP 电子邮件、无限带宽、免费子域名、1000 MB 免费存储，并可选择升级。
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，自定义域名带 SSL、100 GB 月带宽、260+ Cloudflare CDN 节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) — 提供 SFTP 访问的 Web 托管，支持文件上传和下载，可用 PHP。
  * [Neocities](https://neocities.org) — 静态站点，1 GB 免费存储和 200 GB 带宽。
  * [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，每月免费 300 积分（相当于 30 GB 带宽）。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种形式的 Web 托管（静态 Web 托管、基于容器的 Web 托管、WordPress 及其他托管应用，一键即可使用）。一个免费 Web 托管（静态或容器化）和一个免费数据库，100 GB 带宽和 300 构建分钟/月。
  * [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。开发者和机构免费。无自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等功能。
  * [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，免费 SSL、全球 CDN、私有网络、Git 自动部署，Web 服务、数据库和静态网页完全免费。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 前端开发者的静态 Web 发布。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) — 使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50 页，50 MB 存储，仅限 170+ 可用预定义主块，无字体、无网站图标、无自定义域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，免费 SSL、全球 CDN，每次 `git push` 生成唯一预览 URL。非常适合 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于 SaaS 的网站构建器 — 无限网站、70+ 块、五个模板、自定义 CSS、网站图标、SEO 和表单。无自定义域名。
  * [Qoddi](https://qoddi.com) — 类似 Heroku 的 PaaS 服务，采用开发者中心方法，功能全面。免费层级支持静态资源、暂存环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费 Flarum 托管，最多支持 250 用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) — 一个项目免费托管，容器 TTL 两周，每个项目 500 MB RAM，SFTP — 1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，付费服务中提供三个静态站点免费托管。
  * [Serv00.com](https://serv00.com/) — 3 GB 免费 Web 托管，每日备份（7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），支持：MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等。
  - [Sevalla](https://sevalla.com/) — 专为简化应用、数据库和静态网站部署与管理而设计的托管平台 — 1GB 站点限制，100GB 免费带宽，600 免费构建分钟，每个账户 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
  * [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
  * [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
  * [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
  * [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名和10条记录。
  * [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
  * [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多5个域名，含多种配置指南。
  * [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费动态DNS服务，可管理多种记录类型（如CNAME、MX、SPF等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户贡献域名的[子域名](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
  * [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
  * [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
  * [noip.at](https://noip.at/) - 无需注册的免费动态DNS服务，无跟踪、日志或广告，域名数量不限。
  * [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
  * [sslip.io](https://sslip.io/) - 免费DNS服务，输入含IP地址的主机名即可返回该IP。
  * [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管服务。
  * [zonewatcher.com](https://zonewatcher.com) - 自动备份与DNS变更监控，免费版支持1个域名。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
  * [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
  * [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
  * [LocalCert](https://localcert.net) - 免费提供与公共CA兼容的`.localcert.net`子域名，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名服务
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名服务

**[⬆️ 返回顶部](#目录)**  

（注：根据要求保留了所有格式、链接和技术内容，仅对描述性文字进行了中文化处理，并调整了标点符号的使用习惯）

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云部署。
  * [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类Mongdb查询、键值查找、任务系统、实时消息、工作队列、强大CLI和网页数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2名开发者，无需信用卡。
  * [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2核CPU、2GiB内存、8GiB存储。每个组织一个集群，无需支付方式。
  * [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求、256MB最大数据库容量和20个并发连接
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代应用（从物联网到AI）设计
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB空间
  * [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
  * [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
  * [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费支持25MB内存、1个代理服务器和基础分析
  * [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL、PostgreSQL或MongoDB免费层
  * [SeaTable](https://seatable.io/) — Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行、1个月版本历史，最多25名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
  * [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能及与常用商业应用内置集成的工具。免费方案包含无限用户、10个堆栈和每个堆栈2GB附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RUs)。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费入门方案提供9GB总存储、最多500个数据库、3个位置、每月10亿行读取及SQLite本地开发支持。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入、30MB读取和10,000基数序列
  * [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式、关系、自动REST API（支持类MongoDB查询）及高效多用户数据管理界面。免费方案允许3用户、2,500条记录和每秒1次API请求。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点、17.5万关系）。
  * [Neon](https://neon.tech/) — 托管PostgreSQL，0.5GB总存储、1个项目、10分支、无限数据库、主分支永不休眠（非主分支计算5分钟后自动暂停），每月20小时非主分支活跃时间。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
  * [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时间限制，10GB存储+每日1,000次API请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，提供类SQL图查询语言和REST API。免费实例含2vCPU、8GB内存和50GB存储，闲置1小时后休眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，这是用Prolog和Rust编写的文档与图数据库。开发免费，企业部署和支持需付费。
  * [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库最大10MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
  * [Xata Lite](https://lite.xata.io/) - 内置强大搜索与分析的无服务器数据库。单一API、多类型安全客户端库，优化开发流程。免费方案提供10分支和15GB存储，无暂停或冷启动。
  * [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL构建的全栈低代码开发平台，为JavaScript开发者提供无服务器后端即服务。免费层包含：2,500行、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
  * [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、永不休眠、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版隧道时长为60分钟。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全地将类LAN网络扩展到分布式团队，免费版支持最多5人加入的无限网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并可监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露为公共URL。提供免费托管版本和[开源代码](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装或注册。提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件翻译和路由枢纽，可转发到其他第三方服务。免费版每月10万次事件。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部（如localhost）目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。免费版每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+每月500MB TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端的端到端加密网络。支持桌面/移动/NA客户端；通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将本地服务器暴露到互联网。免费版隧道时长为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布为公共自定义URL，并通过访问控制保障安全。免费版支持单个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间追踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB空间（不限用户数）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表，25张图纸
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5名用户，提供Jira集成、无限视频会议、团队和会话
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费云存储版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版包含5人团队、不限仓库/项目/文档、500分钟CI/CD时长和1GB存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费支持3个项目（不限用户数，1GB存储）
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理工具，免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 复杂项目管理与问题追踪套件，SaaS免费版支持5名用户，开源项目免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具，支持非正式UML类图/对象图/ER图生成
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异对比工具，精准标记破坏性/非破坏性/危险变更
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板（100MB存储）
* [Instabug](https://instabug.com) — 移动应用Bug报告与反馈SDK，免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多视角交互式图表工具，免费版支持无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费基础版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2名用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1名用户（不限看板/列表/卡片）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（含Chrome扩展），完全免费
* [Kumu.io](https://kumu.io/) — 关系图谱工具，免费版支持无限公开项目，学生可享私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版不限成员（10MB文件/250个问题）
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10名用户/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版支持3个可编辑文档
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版支持5名用户/100MB存储，不限工作区/会议/工时表
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3名用户（10MB文件限制）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限公开项目，免费版含2个私有项目（3名活跃用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台，免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目管理工具，免费版不限成员（5MB文件/1000个问题）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克估算工具
* [point.poker](https://www.poker/) - 在线计划扑克工具，完全免费且无需注册

  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告和反馈工具。免费计划每月每个应用可提交10个错误报告。
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户。
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程和会议记录应用，10人以下团队免费使用。
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费。
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费计划包含无限制的任务、迭代和工作区，且不限制用户数量。
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，支持从看板到Scrum等多种运营流程。免费版不限用户数，最多1,000个数据实体 {[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单和团队大纲。免费计划包含1个工作区（无限制任务和项目）、1GB文件存储、1周项目历史记录，以及每次视频会议最多5名参与者。
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成。
* [Teaminal](https://www.teaminal.com) - 远程团队的站会、回顾和迭代计划工具。15名用户以下免费。
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，提供高级付费方案。
* [teleretro.com](https://www.teleretro.com/) — 趣味回顾工具，包含破冰活动、GIF和表情符号。免费计划支持3次回顾会议且成员数量不限。
* [Tenzu](https://tenzu.net/) — 面向敏捷团队的轻量级项目管理工具。SaaS模式依赖自愿付费，用户可选择0元使用且无功能限制 {[详情](https://tenzu.net/pricing/)}
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和Beta测试平台。个人使用免费。
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版支持每个图表最多4层结构。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费计划包含：5个活跃项目、每个项目5名用户、5MB文件上传、3个筛选器和1周活动历史记录。
* [trello.com](https://trello.com/) — 看板式项目管理工具。免费版提供无限制个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 简洁的周计划日历与任务管理工具。
* [ubertesters.com](https://ubertesters.com/) — 测试平台、集成与众测服务，免费支持2个项目5名成员。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目、版本控制和问题跟踪）。免费版提供无限制项目与协作者，以及3GB存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具。最多3名用户免费，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目和私有项目（3名用户免费）。含时间跟踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — 唯一内嵌于GitHub的项目管理解决方案。公共仓库、开源组织和非营利机构免费使用。
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具。免费版支持最多5名成员和5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间管理应用（免费计划含无限制记录、项目、客户标签和报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限制任务、里程碑和时间线）。
* [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售和客户支持设计的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员。
* [Pulse.red](https://pulse.red) — 极简主义项目时间跟踪与工时表应用。
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的效率工具，支持结构化检查清单、模板和任务内审批流程。小团队可使用免费计划。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件分享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发者相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时优化和尺寸调整。免费套餐含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，提供多种尺寸调整、压缩和水印功能。含响应式图片/360度图片制作/图片编辑的开源插件。免费月套餐含25GB CDN流量、25GB缓存存储及无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等库的图片上传、强大处理、存储和分发服务。免费套餐含25月度积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件分享。采用AES-256-GCM加密的端到端加密文件分享，客户端处理且服务器零数据访问。免费支持1GB以内文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放及网页元素提取服务。免费支持每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换与交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图片/音频/视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 可通过网页UI和API使用的免费文件分享存储平台，无文件大小/带宽/下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN流处理服务，免费套餐含250GB/月视频流量和30GB/月图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在保持质量的同时减小文件体积。开源项目免费使用。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务，支持32MB/图拖拽上传，生成直链/BBCode/HTML缩略图，登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的免费无限量社交媒体封面图生成API。
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务，免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协作式模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图片代码优化/CDN），免费支持5000页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 云端文件加密分享与统一管理工具，基础版支持无限传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI托管仓库，提供有限免费版，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适合个人项目/黑客松/移动应用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储及API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表制作分享平台，免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的快速批量二维码生成器，单次最多支持100个URL导出。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表/图形和二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，累计处理超70亿张图片仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费每月可渲染20分钟视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩与尺寸调整API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 处理视频/音频/图片/文档的上传编码，开源项目/慈善机构/学生通过GitHub学生包免费，商业应用可试用2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务，提供图片CDN/处理API和前端自动化优化库。免费套餐含3GB/月流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管道全套工具，开发者完全免费使用文件上传API/UI、图片CDN/源服务、自适应交付和智能压缩。免费版含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 可快速集成的图片CDN服务，支持自动优化与实时转换。免费套餐含20GB/月带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私与极致安全的零知识文件存储服务，注册即享10GB永久免费空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费支持20GB空间/3台设备，推荐奖励5GB（账户90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款简单易用的全球图片CDN。60秒内即可完成配置，支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于GPT的AI工具，可将PDF、图片等文件处理为JSON、CSV、EXCEL等结构化数据。每月免费赠送30次额度。
  * [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持样式、颜色、Logo等个性化设置。
  * [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能，完全免费且不收集用户数据。
  * [Doradrop](https://doradrop.com) — Doradrop 是一个无广告的无限存储文件共享平台，无需登录即可通过安全链接即时分享文件。

  * [Ente](https://ente.io/) - Ente 是端到端加密的云存储服务，支持照片、视频和2FA密钥的存储。可自托管并提供10GB永久免费容量。免费版用户数据仅保留单副本。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，快速创建现代化响应式网站，设计精美，即使非设计师也能轻松上手
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载模板代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 以开发者和设计师协作为核心的完整编码平台，用于构建、记录、发布、扩展和维护设计系统。免费版允许最多3位编辑者共同开发1个设计系统，查看人数不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费网页应用，用于绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 创建社交媒体轮播图的免费在线工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，同时提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具，包含视频和GIF转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或从顶级配色方案获取灵感
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑者和3个项目
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 为APP/网站/产品迭代和设计动效界面的专业工具，验证阶段可享无限查看者、2名编辑者和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/物品授权）
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站最高分辨率的favicon
* [Iconoir](https://iconoir.com) – 包含数千图标资源的开源库，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源（使用时需标注来源）
* [landen.co](https://www.landen.co) — 无代码生成、编辑和发布精美网站与落地页，免费版允许完全自定义1个网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加宽高参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，为设计师开发者提供Android/iOS/Web动画工具与插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变/图案/斑点效果）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备即时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 为社媒和电商创建逼真T恤/服装模型，提供40个免费模板
* [Modeldraw.com](https://modeldraw.com) — 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 基于浏览器的快速矢量编辑器（完全免费）
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建结构并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 基于网页的开源设计与原型工具，支持SVG（完全免费）
* [pexels.com](https://www.pexels.com/) - 免费商用图库，提供按关键词搜索图片的免费API
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，具有Photoshop界面风格，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线浏览器编辑器
* [Plasmic](https://www.plasmic.app/) - 快速易用的强大网页设计与页面构建工具，可集成到代码库中创建响应式页面/复杂组件，支持代码扩展并发布到生产环境
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持直接热链到网页/应用中
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器内直接转换PNG为WebP格式，无需上传，完全客户端处理确保隐私安全
* [Proto.io](https://www.proto.io) - 无需编码创建完全交互式UI原型，免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标尺寸调整管理服务
* [Rive](https://rive.app) — 创建并发布精美动画到任意平台，个人用户永久免费。提供编辑器托管图形资源，并为多平台提供运行时支持
* [storyset.com](https://storyset.com/) — 使用此工具为项目创建精美的定制插画（免费）

  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 在不同组件和布局中实时预览主题修改效果
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui的优雅主题库，支持实时自定义颜色、排版等参数
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，支持通过URL参数配置，可直接热链到网页/应用中
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，完全免费且无需署名
* [unsplash.com](https://unsplash.com/) - 自由商用免版税图库（无限制许可协议）
* [vectr.com](https://vectr.com/) — 网页端+桌面端免费矢量设计工具
* [walkme.com](https://www.walkme.com/) — 企业级用户引导平台，免费版支持3个最多5步的交互式导览
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形与图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线样机编辑器，含持续更新的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，免费支持5个页面
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，支持1080p导出且无水印
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的极简落地页生成器，免费支持一个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌LOGO库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 海量商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击即可生成背景/图案/形状的免费设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端协作平台，免费支持3个项目且可导出代码
* [vector.express](https://vector.express) — 快速转换多种矢量格式（AI/CDR/DWG等）
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含开发者专用转换器）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/JPG/SVG/WEBP格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件库
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 企业LOGO查询API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费Bootstrap/Angular/React/Vue UI套件（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库（如按钮组件）
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条定制工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色库及生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标集统一搜索平台
* [NextUI](https://nextui.org/) -- 免费现代化React/Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美开源组件库
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标
* [Image BG Blurer](https://imagebgblurer.com/) -- 为图片生成模糊背景框（支持Notion/Trello等）
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案，免费版支持无限子域名站点
* [Nappy](https://nappy.co/) -- 黑人及棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/工具合集
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线绘图工具（支持本地保存）
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费图形设计工具（离线可用）
* [Flows](https://flows.sh/) -- 产品引导平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可通过UI/UX项目类别筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 频繁更新的着陆页截图。包括桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动截图] 探索非洲和世界领先公司的移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发人员和产品制造者参考。
  * [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 许多移动和网页应用完整流程的视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动截图] 精心挑选的应用商店设计截图集合。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求。
  * [carto.com](https://carto.com/) — 从您的数据和公共数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 为Web、桌面和移动设备提供地图、地理空间数据存储、分析、地理编码、路径规划等API和SDK。每月免费提供两百万次基础地图瓦片、20,000次非存储地理编码、20,000次简单路径规划、5,000次行驶时间计算和5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK提供位置发现、场所搜索和情境感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线API。每天三千次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天两千五百次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析并共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路径优化、距离矩阵、地理编码和地图匹配服务。
  * [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务。
  * [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每天五千次免费请求。
  * [mapbox.com](https://www.mapbox.com/) — 地图、地理空间服务及展示地图数据的SDK。
  * [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及地图可视化SDK。免费矢量瓦片每周更新并提供四种地图样式。
  * [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索功能和反向地理编码能力。
  * [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路径优化、距离矩阵）、地图SDK（矢量、静态、移动SDK）。[每项服务均有免费配额](https://nextbillion.ai/pricing)。
  * [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap及其他开放地理源的地理编码API。每天两千五百次免费查询。
  * [osmnames](https://osmnames.org/) — 地理编码，搜索结果按相关维基百科页面的受欢迎程度排序。
  * [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码。个人使用每月25,000次请求。
  * [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航及其他地理空间API。非商业用途和测试每天两千五百次免费地图查看和API请求。
  * [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及瓦片托管。
  * [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者。
  * [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API。全球覆盖。每天2,500次免费查询。

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务。
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务。
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享网站，支持300+个PHP版本运行您的代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。开源IDE免费向所有人开放，是开发Android应用的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计工具，提供即时API模拟和生成文档（免费版支持无限API蓝图和无限用户，包含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费模式提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。这是一项免费的公共服务。
* [BlueJ](https://bluej.org) — 专为初学者设计的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简单GUI帮助初学者。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - Brackets是一款专为网页开发设计的开源文本编辑器。它轻量、易用且高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持标签和100+种编程语言。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，可编写（代码块、自动补全、单元测试）、理解（了解整个代码库）、修复和查找代码。支持VS Code、JetBrains和在线使用。
* [codiga.io](https://codiga.io/) — 编码助手，可直接在IDE中搜索、定义和复用代码片段。个人和小型组织免费。
* [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，支持分类、搜索和标签。免费且无限制。
* [cocalc.com](https://cocalc.com/) — （原cloud.sagemath.com）— 云端协作计算。通过浏览器访问完整的Ubuntu系统，内置协作工具和大量数学、科学、数据科学免费软件，预装Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等。
* [code.cs50.io](https://code.cs50.io/) - CS50的Visual Studio Code是一个基于GitHub Codespaces的网页应用，专为学生和教师设计。
* [codepen.io](https://codepen.io/) — CodePen是前端开发的游乐场。
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等的在线游乐场。
* [Components.studio](https://webcomponents.dev/) - 隔离式编写组件，通过故事可视化、测试并发布到npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，面向开发团队。开源且社区驱动。Red Hat托管的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)访问。
* [fakejson.com](https://fakejson.com/) — FakeJSON通过API快速生成假数据。发送API请求描述所需内容，API将以JSON格式返回。加速创意上市过程，先模拟后实现。
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI编程助手。原生支持CLI，无缝集成任何IDE。免费层包含本地处理的基本AI模型访问。
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏。免费层每天提供5个VM。
* [ide.goorm.io](https://ide.goorm.io) goormIDE是云端完整IDE。支持多语言，基于Linux容器的全功能网页终端，端口转发、自定义URL、实时协作和聊天、分享链接、Git/Subversion支持。更多功能（免费层包含1GB RAM和10GB存储每容器，5个容器槽）。
* [JDoodle](https://www.jdoodle.com) — 支持60+种编程语言的在线编译器和编辑器，免费计划每天提供200次REST API代码编译积分。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE和部署工具（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源和用户组免费。
* [jsbin.com](https://jsbin.com) — JS Bin是另一个前端网页（HTML、CSS和JavaScript）的游乐场和代码分享网站。还支持Markdown、Jade和Sass。
* [jsfiddle.net](https://jsfiddle.net/) — JS Fiddle是前端网页的游乐场和代码分享网站，支持协作。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 一些返回假数据的REST API端点，格式为JSON。源代码也可用于本地运行服务器。
* [Lazarus](https://www.lazarus-ide.org/) — Lazarus是兼容Delphi的跨平台IDE，用于快速应用开发。
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成假JSON数据的微型API模拟服务。
* [mockable.io](https://www.mockable.io/) — Mockable是简单的可配置服务，用于模拟RESTful API或SOAP Web服务。可快速定义REST API或SOAP端点并返回JSON或XML数据。
* [mockaroo](https://mockaroo.com/) — Mockaroo生成CSV、JSON、SQL和Excel格式的测试数据。还可为后端API创建模拟。
* [Mocklets](https://mocklets.com) - 基于HTTP的模拟API工具，支持更快并行开发和全面测试，提供终身免费层。
* [Paiza](https://paiza.cloud/en/) — 在浏览器中开发Web应用，无需设置。免费计划提供1台服务器，24小时生命周期，每天4小时运行时间，2 CPU核心、2 GB RAM和1 GB存储。
* [Prepros](https://prepros.io/) - Prepros可编译Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript和TypeScript，自动刷新浏览器，简化网站开发和测试。还可通过点击添加自定义工具。
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程游乐场。支持多种编程语言。运行代码无需注册，但保存代码需要。还提供面向初学者和中级开发者的免费课程。
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于NodeJS的前端和后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - Sublime Text是一款流行、多功能且高度可定制的文本编辑器，适用于编码和文本编辑任务。

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完备的IDE，拥有数千个扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面、Web和云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) — 社区驱动的、无遥测/跟踪的、自由许可的Microsoft编辑器VSCode二进制发行版。
  * [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化你的编码活动，提供免费有限计划。
  * [Wave Terminal](https://waveterm.dev/) — Wave是一款开源、跨平台的终端工具，支持无缝工作流。可内联渲染任何内容，保存会话和历史记录，基于开放的Web标准，支持MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板，可独立编写Web组件，支持故事和测试。
  * [PHPSandbox](https://phpsandbox.io/) — 在线的PHP开发环境。
  * [WebDB](https://webdb.app) — 免费高效的数据库IDE，功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等。
  * [Zed](https://zed.dev/) — Zed是一款高性能、多人协作的代码编辑器，由Atom和Tree-sitter的开发者打造。
  * [OneCompiler](https://onecompiler.com/) — 免费的在线编译器，支持70多种语言，包括Java、Python、C++、JavaScript等。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 替代Google Analytics的热图分析工具，支持会话录制和收入追踪
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史仪表板（突破14天限制）。免费版支持监控单个仓库
* [Dwh.dev](https://dwh.dev) - Snowflake数据云观测方案，个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，支持将数据仓库信息同步至CRM/营销/客服工具。免费版提供1个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布流程，含类型安全跟踪库和应用内调试器。免费版支持2名成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动端分析平台，免费版支持1万MAU的深度链接服务
* [Census](https://www.getcensus.com/) - 反向ETL运营分析平台，免费版支持10个字段同步至60+SaaS平台
* [Clicky](https://clicky.com) - 网站分析平台，免费版支持单站3000次浏览分析
* [Databox](https://databox.com) - 多平台商业智能整合工具，免费版含3用户/仪表板/数据源和1100万历史记录
* [Hitsteps.com](https://hitsteps.com/) - 单网站每月2000页浏览量
* [amplitude.com](https://amplitude.com/) - 每月100万事件量（支持2个应用）
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台（非商业用途免费），支持无限站点和10万月浏览量
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私合规分析工具，免费版支持100万月浏览量
* [Expensify](https://www.expensify.com/) - 费用报告工具（个人审批流程免费）
* [getinsights.io](https://getinsights.io) - 隐私优先的无Cookie分析，免费支持3000事件/月
* [heap.io](https://heap.io) - 自动捕获iOS/Web应用用户行为，免费支持1万月会话量
* [Hotjar](https://hotjar.com) - 网站行为分析工具，免费版含2000日浏览量/100日快照/3个全年存储的热图
* [Keen](https://keen.io/) - 自定义数据分析平台，免费支持1000事件/月
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务（完全免费）
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限制免费分析
* [Mixpanel](https://mixpanel.com/) - 10万月跟踪用户（支持美欧数据存储）
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析（免费50万API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试方案（免费版支持1网站+1iOS+1Android应用）
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具（免费版含100万用户许可）
* [Row Zero](https://rowzero.io) - 高速互联电子表格，永久免费3个工作簿
* [sematext.com](https://sematext.com/cloud/) - 免费5万行动/月（1天数据保留）
* [Similar Web](https://similarweb.com) - 网站/移动应用分析（免费版含5指标结果）
* [StatCounter](https://statcounter.com/) - 网站访问分析（免费版统计500最近访客）
* [Statsig](https://statsig.com) - 全功能分析平台（免费100万计量事件/月）
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发沙盒（最新预发布版）
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型测试工具（单人无限测试免费）
* [woopra.com](https://www.woopra.com/) - 用户行为分析（免费50万行动/90天留存）
* [counter.dev](https://counter.dev) - 简易隐私友好型网站分析（支持捐赠模式）
* [PostHog](https://posthog.com) - 全功能产品分析套件（免费100万事件/月）
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（开源项目可获个人订阅）
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费用户行为捕捉工具
* [Beampipe.io](https://beampipe.io) - 隐私优先网站分析（免费5域名+1万月浏览量）
* [Aptabase](https://aptabase.com) - 开源隐私友好型应用分析（免费2万事件/月）
* [Trackingplan](https://www.trackingplan.com/) - 自动化数字分析监测工具
* [LogSpot](https://logspot.io) - 全栈分析平台（免费1万事件/月）
* [Umami](https://umami.is/) - 简洁开源的Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私分析工具（免费3域名+600会话回放）
* [AppFit](https://appfit.io) - 跨平台分析管理工具（免费1万事件/月+产品日志）

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站与产品分析工具。免费方案每月包含3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie追踪且操作体验提升10倍。免费版支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每个站点：每天1,000次页面浏览，三个热图，三个小工具，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，包含用于错误复现的开发工具、实时会话支持以及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[请点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个站点：每月1,050次页面浏览，无限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
  * [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
  * [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月最多5,000次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询 JSON API。每月100次免费API调用
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证 JSON API 服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页。每月跟踪收入低于1万美元免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力业务全球化并开拓新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式移动应用内订阅解决方案，支持iOS、Android、React Native、Flutter、Unity或网页应用。每月收入低于1万美元免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月提供1万次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费DEVELOPER计划支持每月1000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新交易所汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实物货币与加密货币的实时汇率数据，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费Micro计划支持每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持连接Stripe、Chargebee等。免费层级每月3万次事件。
* [Nami ML](https://www.namiml.com/) - iOS和Android应用内购买与订阅全功能平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购买和订阅后端服务（iOS/Android）。每月跟踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟增值税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。私有用途每月300次请求，每分钟限10次。

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

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。Vagrant box 托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义、Markdown驱动的博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 以现代多媒体短格式Miniblog形式免费与世界分享你的想法、知识和故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可将 GitHub issues 用于博客评论、Wiki 页面等场景！
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，提供"单个管理员管理少量域名，完全控制行为与外观"服务
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间参数和视口尺寸。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括标准化元标签、精美链接预览、爬取功能或截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意网址快速获取截图，免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 捕获高度可定制的网站快照。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照，支持png/gif/jpg格式，包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染服务。免费层每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - Codemagic 是一个全托管式的移动应用持续集成与交付平台。通过图形化界面的 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅支持SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量限制下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射。免费版含核心同意管理功能，并向通过验证的开源项目提供高级功能免费套餐。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持以精美图片形式分享（如Twitter/Facebook帖子）或链接形式分享（如聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估IoT设备。免费开发者计划支持5台设备，含免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一款内置强大多行计算器的笔记应用（PWA）。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图像格式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标插件。
* [Codepng](https://www.codepng.app) - 从源代码生成精美的社交媒体分享快照。
* [CodeToImage](https://codetoimage.com/) - 为代码或文本创建社交媒体分享截图。
* [Cronhooks](https://cronhooks.io/) - 定时或循环触发Webhook。免费计划允许5次临时调度。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费。
* [datelist.io](https://datelist.io) - 在线预约系统。免费版每月限5次预约，含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单易用的URL/域名转发工具。免费版支持5个域名及每月20万次请求。
* [Elementor](https://elementor.com) — WordPress网站构建器，免费版含40+基础组件。
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除/分析图片元数据，包括GPS位置信息。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 第三方代码的端到端管理方案，涵盖许可证合规与漏洞检测。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook支持：内置队列、退避重试和日志。免费版每日100次投递，14天留存，3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN、ISP、地理位置等托管信息，含多款DNS相关工具。
* [kandi](https://kandi.openweaver.com/) — 加速应用开发：通过代码片段和开源库复用快速构建功能与完整应用。
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具。
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/自定义Webhook接收GitHub、GitLab等平台的新版本通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看照片EXIF数据（含GPS位置和元数据）。
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。免费版每月300份文档。
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的美观代码片段截图。
* [QuickType.io](https://quicktype.io/) - 快速从JSON/模式/GraphQL生成模型/类/序列化代码，支持多语言类型安全转换。
* [RandomKeygen](https://randomkeygen.com/) - 免费移动端友好工具，生成多种随机密钥和密码以保护应用/服务/设备。
* [ray.so](https://ray.so/) - 为代码片段创建精美图片。
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档生成工具。
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具，适用于营销与SEO。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理HTTPS重定向。免费版含10个源和每月10万次访问。
* [Renamer.ai](https://renamer.ai) — AI驱动的文件重命名工具，支持OCR和20+语言元数据提取。免费版每月15文件，含桌面应用和批量重命名功能。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求，支持GET/POST/PUT/DELETE/HEAD方法及Token认证，含基础请求保存功能。
* [Smartcar API](https://smartcar.com) - 车辆API：定位、油量/电量查询、里程记录、车门锁控制等。
* [snappify](https://snappify.com) - 开发者视觉创作工具，从代码片段到技术演示。免费版支持3个同时编辑项目，含5次AI代码解释。
* [日出日落时间API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容订阅源，含导出和分析功能。免费版功能有限。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费版每份调查限10个问题和100条回复。
* [Tiledesk](https://tiledesk.com) - 构建全渠道聊天机器人，支持从网站实时聊天到WhatsApp。免费版机器人数量不限。
* [UUID生成器](https://newuuid.com/) - 即时生成企业级安全的UUID/GUID/CUID/NanoID/ULID。
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建自定义RSS订阅源，免费版支持3个源。
* [videoinu](https://videoinu.com) — 在线创建和编辑录屏视频。
* [Webacus](https://webacus.dev) — 免费开发者工具集，支持编解码与数据转换。
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的免费GPU基准测试（WebGL），帮助开发者跨设备对比着色器性能。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日免费2次会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
  * [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF。
  * [CraftPix](https://craftpix.net) — 免费/付费资源，包括2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
  * [Game Icons](https://game-icons.net/) - 免费可定制的SVG/PNG图标，基于CC-BY许可提供。
  * [LoSpec](https://lospec.com/) — 在线工具，用于创建像素艺术和其他限制性数字艺术，提供大量教程和调色板列表供游戏使用。
  * [ArtStation](https://www.artstation.com/) - 免费/付费的2D、3D资源、音频、图标、瓦片集和游戏套件的市场。也可用于展示个人艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资源，同时可使用免费计划创建自己的游戏资源。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形3D资源。
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型和PBR材质，用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资源。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（可变分辨率）、模型、HDRIs和笔刷。提供免费插件导出到Blender等软件。
  * [Freesound](https://freesound.org/) - 免费协作声音库，提供不同的CC许可。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等。
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务。
* [get.localhost.direct](https://get.localhost.direct) — 提供更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名的本地开发环境。
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS列表。
* [GitHub开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心。
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）。
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具。
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于开发Microsoft 365解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据算法评估）。
* [PHPhub](https://phphub.net/) — PHP工具集合，含格式化器、验证器、沙盒环境、正则测试器等。
* [Pyrexp正则测试器](https://pythonium.net/regex) — 免费网页版正则表达式调试与可视化工具。
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，另提供免费电子书参考。
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务。
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云服务商（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务。
* [SnapShooter](https://snapshooter.com/) — DigitalOcean/AWS/LightSail/Hetzner/Exoscale备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份。
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题与UI套件，加速应用开发！
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名。
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/生成测试数据等，界面友好。
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，免费注册即可创建无限导入器（支持100MB文件）。
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮样式。
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）。
* [Utils.fun](https://utils.fun/en) — 基于浏览器计算的离线工具集（水印生成/录屏/编解码/加密/代码格式化等），完全免费且不上传数据。
* [IT工具集](https://it-tools.tech/) - 开发者与IT人员实用工具。
* [免费代码工具](https://freecodetools.org/) — 100%免费的高效代码工具（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）。
* [正则101](https://regex101.com/) — 免费正则表达式测试与调试平台，提供编辑器及学习资源。
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换器等）。
* [AdminMart](https://adminmart.com/) — 高质量免费/付费后台模板（支持Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）。
* [Glob模式测试器](https://globster.xyz/) — 设计与测试glob模式的平台，附学习资源。
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库直接还原。
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（含实时转录/YouTube视频转文字/字幕添加），适合短视频处理。
* [最佳二维码生成器](https://qrcode.best/) - 13种模板的定制二维码生成平台，支持追踪像素/项目分类/无限团队席位。
* [PostPulseAI](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版每月可手动发布1篇内容。
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集（生成网站政策/社交媒体简介/网页内容等）。
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，优化慢查询。
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/DevOps/编程等）。
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具（每月10张发票额度）。
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）。

**[⬆️ 返回顶部](#目录)**