# free-for.dev

开发人员和开源作者现在有许多服务提供免费层，但找到所有这些服务需要花费时间来做出明智的决定。

这是一个软件（SaaS、PaaS、IaaS等）和其他提供免费开发层的服务列表。

这个列表的范围仅限于基础设施开发人员（系统管理员、DevOps实践者等）可能会觉得有用的东西。我们喜欢所有免费服务，但最好保持主题。有时这是一个灰色地带，所以这是一个有主见的列表；如果我不接受你的贡献，请不要感到冒犯。

这个列表是由1600多人通过Pull Request、审查、想法和工作完成的。你也可以通过发送 [Pull Request](https://github.com/ripienaar/free-for-dev) 来添加更多服务或删除那些提供已更改或已退役的服务。

[![跟踪Awesome列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这个列表仅适用于按服务提供的服务，而不适用于自托管软件。要符合条件，服务必须提供免费层，而不仅仅是一个免费试用。免费层必须至少持续一年，如果它是基于时间的。我们还从安全角度考虑免费层，因此单点登录（SSO）是可以的，但我不会接受仅将TLS限制为付费层的服务。

# 目录

  * [主要云服务提供商的永久免费限制](#主要云服务提供商的永久免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [artifact仓库](#artifact仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成和持续部署](#持续集成和持续部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面](#设计和用户界面)
  * [设计灵感](#设计灵感)
  * [开发者博客网站](#开发者博客网站)
  * [域名系统](#域名系统)
  * [Docker相关](#Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息队列和流媒体](#消息队列和流媒体)
  * [杂项](#杂项)
  * [监控](#监控)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)
  * [支付和计费集成](#支付和计费集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关和在非Mac设备上构建IOS应用](#Flutter相关和在非Mac设备上构建IOS应用)
  * [搜索](#搜索)
  * [安全和公钥基础设施](#安全和公钥基础设施)
  * [身份验证、授权和用户管理](#身份验证、授权和用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储和媒体处理](#存储和媒体处理)
  * [隧道、WebRTC、WebSocket服务器和其他路由器](#隧道、WebRTC、WebSocket服务器和其他路由器)
  * [测试](#测试)
  * [团队和协作工具](#团队和协作工具)
  * [翻译管理](#翻译管理)
  * [Vagrant相关](#Vagrant相关)
  * [访客会话记录](#访客会话记录)
  * [网页托管](#网页托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件模拟](#基于浏览器的硬件模拟)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主要云服务提供商的永久免费限制

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（仅限某些区域），每月1 GB从北美到所有区域的网络出口（不包括中国和澳大利亚）
    * Cloud Storage - 5GB，1GB网络出口
    * Cloud Shell - 基于Web的Linux shell/主要IDE，具有5GB的持久存储。每周60小时限制
    * Cloud Pub/Sub - 每月10GB的消息
    * Cloud Functions - 每月200万次调用（包括背景和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1 GB从北美的网络出口
    * Google Kubernetes Engine - 一个区域集群的集群管理费为零。每个用户节点按标准Compute Engine价格收费
    * BigQuery - 每月1 TB的查询，10 GB的存储
    * Cloud Build - 每天120分钟的构建时间
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出口
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境。
    * [idx.dev](https://idx.dev) Google Project IDX。基于Google Cloud的在线VSCode。
    * 完整、详细的列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口和200万函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个报警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟的构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃的流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL DB
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时的t2.micro或t3.micro（12个月）。每月100GB出口
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB的通用-purpose（SSD）或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时的db.t2.micro，db.t3.micro或db.t4g.micro，20GB的通用-purpose（SSD）存储，20GB的存储备份（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，每月20,000次Get请求和2,000次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 每月100万次消息队列请求
    * 完整、详细的列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM，1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web，移动或API应用（每天60分钟CPU时间）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 启用快速、简单、精简的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 每月5万个存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，私有Git仓库无限制
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) - 10个免费的并行作业，Linux，macOS和Windows的无限制分钟数，用于开源
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费的公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 每月15GB入站（12个月）和5GB出口
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000个预配的吞吐量单位
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) - 使用免费的SSL，身份验证/授权和自定义域构建，部署和托管静态应用和无服务器函数
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉，翻译，面部检测，Bot等），包括有限的事务免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，免费用于10,000个文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 管理的Kubernetes服务，免费的集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100K操作
    * 完整、详细的列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * Compute
       - 2个基于AMD的Compute VM，1/8 OCPU和1 GB内存
       - 4个基于Arm的Ampere A1核心和24 GB内存，可用作1个VM或最多4个VM
       - 实例将在被认为是空闲时被回收
    * Block Volume - 2个卷，200 GB总容量（用于计算）
    * Object Storage - 10 GB
    * Load balancer - 1个实例，10 Mbps
    * Databases - 2个DB，20 GB每个
    * Monitoring - 5000万个摄入数据点，1亿个检索数据点
    * Bandwidth - 每月10 TB出口，速度限制为50 Mbps的x64-based VM，500 Mbps \*核心数的ARM-based VM
    * Public IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * Notifications - 每月100万个交付选项，1000封电子邮件
    * 完整、详细的列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1 GB的数据存储
    * Db2数据库 - 100MB的数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * Log Analysis - 每天500MB的日志
    * 完整、详细的列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [Application Services](https://www.cloudflare.com/plans/) - 免费的DNS用于无限制的域名，DDoS保护，CDN以及免费的SSL，防火墙规则和页面规则，WAF，Bot缓解，免费的不计量速率限制 - 每个域名1个规则，分析，电子邮件转发
    * [Zero Trust & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时的活动日志，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare的全球网络上免费部署无服务器代码——每天100k次请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每天100k次读取请求，每天1000次写入请求，每天1000次删除请求，每天1000次列出请求，1 GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10 GB，每月100万次Class A操作，每月1亿次Class B操作
    * [D1](https://developers.cloudflare.com/d1/) - 每天500万行读取，每天10万行写入，1 GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署您的Web应用。每月500次构建，100个自定义域名，集成SSL，無限制的可访问席位，無限制的预览部署，通过Cloudflare Workers集成提供全栈功能。
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量。

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一个用于从端到端可视化构建和管理云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 面向个人项目免费（包括一个部署服务器和一个静态站点），Cloud 66 为您提供了在任何云上构建、部署和增长应用程序所需的一切，省去了“服务器相关”的烦恼。
  * [Pulumi](https://www.pulumi.com/) — 一个现代化的基于代码的基础设施平台，允许您使用熟悉的编程语言和工具构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。对于最多 500 个资源，提供免费的远程状态管理和团队协作。
  * [scalr.com](https://scalr.com/) - Scalr 是一个用于改善基础设施和配置管理的 Terraform 自动化和协作（TACO）产品。完全支持 Terraform CLI，集成了 OPA，并且具有分层配置模型。没有 SSO 税收。所有功能都包含在内。在免费版中，每月最多可进行 50 次运行。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上自动化部署。在我们的免费版中，单个用户（开发者）可以部署任意数量的静态站点、Web 服务和环境。我们每月提供 20 次作业执行，预览和自动部署均包含在免费版中。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 为5个用户提供无限制的公共和私有Git仓库，包括CI/CD管道
  * [chiselapp.com](https://chiselapp.com/) — 为Fossil仓库提供无限制的公共和私有存储
  * [codebasehq.com](https://www.codebasehq.com/) — 提供一个免费项目，包含100 MB空间和两个用户
  * [Codeberg](https://codeberg.org/) — 为免费和开源项目提供无限制的公共和私有Git仓库（支持无限协作者）。由 [Forgejo](https://forgejo.org/) 提供支持。静态网站托管支持 [Codeberg Pages](https://codeberg.page/)。CI/CD托管支持 [Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管支持 [Codeberg Translate](https://translate.codeberg.org/)。包含Package和Container托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 提供无限制的私有和公共仓库。永久免费。由GitLab和Sapphire提供支持，不支持CI/CD
  * [GitHub](https://github.com/) — 提供无限制的公共仓库和私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、Package和Container托管、项目管理和AI Copilot
  * [gitlab.com](https://about.gitlab.com/) — 为最多5个协作者提供无限制的公共和私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit是基于Gitlab软件的Framasoft软件开发平台，包含CI、静态页面、项目页面和问题跟踪
  * [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab Community Edition的友好分支，为Mercurial提供支持
  * [ionicframework.com](https://ionicframework.com/appflow) - 为开发Ionic应用程序提供仓库和工具；同时包含一个ionic仓库
  * [NotABug](https://notabug.org) — NotABug.org是一个免费软件代码合作平台，适用于自由许可的项目，基于Git
  * [OSDN](https://osdn.net/) - OSDN.net是一个为开源软件开发者提供的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
  * [Pagure.io](https://pagure.io) — Pagure.io是一个免费和开源的软件代码合作平台，适用于FOSS许可的项目，基于Git
  * [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费提供1GB云存储和Git、Mercurial或SVN仓库
  * [pijul.com](https://pijul.com/) - 提供无限制的免费和开源分布式版本控制系统。其独特的特点基于补丁的健全理论，使得其易于学习、使用和分发。解决了Git/hg/svn/darcs的许多问题
  * [plasticscm.com](https://plasticscm.com/) — 为个人、开源软件和非营利组织提供免费服务
  * [projectlocker.com](https://projectlocker.com) — 提供一个免费的私有项目（Git和Subversion），包含50 MB的空间
  * [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。支持无限制的公共和私有仓库
  * [savannah.gnu.org](https://savannah.gnu.org/) - 为GNU项目提供协同软件开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 为非GNU项目提供协同软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑、过滤复杂的JSON数据到漂亮的表格中。可以保存和分享JSON数据通过链接。
  * [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转换为强大的API，用于快速开发原型、网站、应用程序等。免费计划每月提供500个请求。
  * [IP.City](https://ip.city) — 每天100个免费的IP地理位置请求
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的API套件，包括IP地理位置、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网页抓取和自动化平台，用于为任何网站创建API并提取数据。提供预制的抓取器、集成代理和自定义解决方案。免费计划每月包含5美元的平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的API或自动化工具（如Zapier和Airtable）自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 所有您需要的工具，以完全了解API和后端发生了什么。具有自动API合同验证和监控。免费计划涵盖每月最多20,000个请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费获取120多个API，注重质量、一致性和可靠性。免费计划每月最多包含50个API令牌。
  * [Arize AI](https://arize.com/) - 机器学习可观察性，用于模型监控和根因分析，例如数据质量和性能漂移。免费支持最多两个模型。
  * [Atlas toolkit](https://atlastk.org/) - 轻量级库，用于开发单页网页应用程序，可以立即访问。适用于Java、Node.js、Perl、Python和Ruby。
  * [Beeceptor](https://beeceptor.com) - 在几秒钟内模拟Rest API，伪造API响应等。免费计划每天50个请求，公共仪表盘，开放端点（任何人都可以通过仪表盘链接查看提交和答案）。
  * [bigml.com](https://bigml.com/) —托管机器学习算法。开发无限制免费任务，数据/任务限制为16 MB。
  * [Browse AI](https://www.browse.ai) — 在网上提取和监控数据。免费每月50个积分。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、抓取、AI代理网页访问、图像/PDF生成等。免费计划每月1,000个请求。
  * [Bruzu](https://bruzu.com/) — 自动图像生产。使用API、集成或无代码表格生成大量图像变体。API免费，但带有水印。
  * [Calendarific](https://calendarific.com) - 企业级公共假日API服务，覆盖200多个国家。免费计划每月包含1,000个调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月包含100个调用。
  * [Clarifai](https://www.clarifai.com) — 图像API，用于自定义面部识别和检测。能够训练AI模型。免费计划每月包含5,000个调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供全面API库访问，包括文档转换、病毒扫描等，每月800个调用。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，包含Nvidia Tesla K80 GPU。
  * [Collect2](https://collect2.com) — 创建API端点用于测试、自动化和连接Webhook。免费计划允许两个数据集、2,000条记录、一个转发器和一个警报。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整数据线索，涵盖从训练到生产的整个工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的电子商务API，可以从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，用于文档、图像、视频、音频和电子书。提供REST API，Node.js、PHP、Python库。支持最多50 GB的文件（适用于付费计划）。免费层限制文件大小和每天的转换次数。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供广泛信息的API和微服务，包括国家、地区、省份、城市、邮政编码等。免费层每天最多包含100个请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可以在应用程序之间同步数据。可以创建实时仪表盘和报告，转换和操作值，收集和备份洞察。免费计划包含无限用户、100次运行、每月1,000行和无限集成。
  * [CraftMyPDF](https://craftmypdf.com) - 使用拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月包含100个PDF和三个模板。
  * [CurlHub](https://curlhub.io) — 代理服务，用于检查和调试API调用。免费计划每月包含10,000个请求。
  * [CurrencyScoop](https://currencyscoop.com) - 面向金融应用的实时货币数据API。免费计划每月包含5,000个调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用程序开发人员访问来自现代数据存储的数据，组织成一致的定义，并将其交付到每个应用程序。使用Cube Cloud是使用Cube的最快方式，它有一个免费层，每月包含1GB的数据。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据在访问后自行销毁。可以通过浏览器或命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 使用无代码连接Airtable到任何应用程序或API。Postman-like界面用于在Airtable中运行API请求。预构建的与数十个应用程序的集成。免费计划每月包含100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 将数据连接、清理和导入Salesforce的工具。免费计划每月包含最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含每月10 GB的存储和120小时的运行时间。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月提供500页。
  * [Datapane](https://datapane.com) - API，用于构建Python中的交互式报告，并将Python脚本和Jupyter笔记本作为自助工具部署。
  * [DB-IP](https://db-ip.com/api/free) - 免费的IP地理位置API，每天每个IP最多1,000个请求。CC-BY 4.0许可的lite数据库也是免费的。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库schema设计和建模工具，免费入门计划包含2个数据库模型和每个模型最多10个表。
  * [DeepAR](https://developer.deepar.ai) — 任何平台的增强现实面部滤镜，一个SDK。免费计划提供最多10个每月活跃用户（MAU）和跟踪最多4个面部
  * [Deepnote](https://deepnote.com) - 新的数据科学笔记本。Jupyter兼容，支持实时协作和云运行。免费层包含无限个人项目、最多750小时的标准硬件和最多3个编辑器的团队。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的网页抓取和数据提取平台，用于将任何网站转换为数据集或作为API使用。免费计划每月包含5,000个页面请求。

  * [Doczilla](https://www.doczilla.app/) — 一款SaaS API，用于直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月允许生成250个文档。
  * [Doppio](https://doppio.sh/) — 一款托管API，用于生成和私密存储PDF和截图，采用顶级渲染技术。免费计划每月允许生成400个PDF和截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动、Web和IoT应用的开源REST API后端。连接任何SQL/NoSQL数据库、文件存储系统或外部服务，它会立即创建一个具有实时文档和用户管理的综合REST API平台。
  * [DynamicDocs](https://advicement.io) - 使用基于LaTeX模板的JSON到PDF API生成PDF文档。免费计划每月允许50次API调用，并提供模板库。
  * [Efemarai](https://efemarai.com) - 面向ML模型和数据的测试和调试平台。可视化任何计算图。开发者每月免费调试30次。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 免费的基于Web的HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) - 拥有拖拽式模板编辑器的PDF生成API，提供SDK和无代码集成。免费计划每月有250页，用户无限制，三个模板。
  * [Fern](https://buildwithfern.com) - 使用API定义生成SDK，生成API参考文档网页。向API参考添加Markdown页面，并使用Fern托管它们以获得完整的文档解决方案。完全支持OpenAPI。
  * [file.coffee](https://file.coffee/) - 一个平台，您可以在这里存储最多15MB的文件（注册账户后可存储30MB）。
  * [Financial Data](https://financialdata.net/) - 股票市场和金融数据API。免费计划每天允许300次请求。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 一款用于筛查信用卡支付订单的REST API，会根据订单输入参数检测所有可能的欺诈特征。免费的微型计划每月有500次交易。
  * [Geekflare API](https://geekflare.com/api) - Geekflare API允许您截图、审计网站、TLS扫描、DNS查找、测试TTFB等。免费计划提供3000次API请求。
  * [GeoCod](https://geocod.xyz) — 免费的地理编码API：将邮政地址转换为地理坐标，或将地理坐标转换为邮政地址（反向地理编码）。
  * [GeoDataSource](https://www.geodatasource.com) — 位置搜索服务，使用纬度和经度坐标查找城市名称。免费API每月最多查询500次。
  * [Geolocated.io](https://geolocated.io) — 拥有多大陆服务器的IP地理位置API，提供永久免费计划，适用于爱好者的每月60000次请求。
  * [Glitterly](https://glitterly.app/) - 从基础模板中以编程方式生成动态图像。Restful API和无代码集成。免费层每月包含50张图像和五个模板。
  * [GoodData](https://www.gooddata.com/) - 数据即服务 - 创建交互式和富有洞察力的仪表板。免费层包含五个工作区和每个工作区100 MB。
  * [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作数据平台。免费的社区版本，支持最多三个作者和五个项目。每个作者一个计算-profile，4GB RAM。
  * [Hook0](https://www.hook0.com/) - Hook0是一款开源的Webhooks即服务（WaaS），使在线产品轻松提供Webhooks。免费计划每月最多分发3000个事件，保留七天的历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 一个免费、快速、美丽的API请求构建器。
  * [Hybiscus](https://hybiscus.dev/) - 使用简单的声明式API构建PDF报告。免费层每月包含最多100个单页报告，允许自定义色彩调色板和字体。
  * [Invantive Cloud](https://cloud.invantive.com/) — 访问超过70个（云）平台，例如Exact Online、Twinfield、ActiveCampaign或Visma，使用Invantive SQL或OData4（通常为Power BI或Power Query）。包括数据复制和交换。开发者和实施顾问的免费计划。对于某些平台，具有数据量限制的免费计划。
  * [ipaddress.sh](https://ipaddress.sh) — 一个简单的服务，用于以不同格式获取公共IP地址。
  * [ipbase.com](https://ipbase.com) - IP地理位置API - 永久免费计划，每月150次请求。
  * [IP Geolocation](https://ipgeolocation.io/) — IP地理位置API - 开发者的永久免费计划，每月1k次请求（每天1k次）。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract的IP地理位置API - 广泛的免费计划，每月允许20000次请求。
  * [IP2Location](https://www.ip2location.com) — 免费的IP地理位置服务。LITE数据库可免费下载。将数据库导入服务器并执行本地查询以确定城市、坐标和ISP信息。
  * [IP2Location.io](https://www.ip2location.io/) — 免费的、快速可靠的IP地理位置API，用于确定地理位置数据，如城市、坐标、ISP等。免费计划每月有30k积分。订阅付费计划以获取更多高级功能或联系我们获取个性化计划。
  * [ipapi](https://ipapi.co/) - Kloudend, Inc的IP地址位置API - 一个可靠的基于AWS的地理位置API，受Fortune 500公司的信任。免费层每月提供30k次查询（每天1k次），无需注册。
  * [ipapi.is](https://ipapi.is/) - 开发者为开发者提供的可靠的IP地址API，拥有最好的托管检测能力。免费计划提供1000次查询，无需注册。
  * [IPinfo](https://ipinfo.io/) — 快速、准确、免费（每月最多50k次）的IP地址数据API。提供有关地理位置、公司、运营商、IP范围、域名、滥用联系人等的API。所有付费API都可以免费试用。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 为现代Web提供快速、准确、免费（无限制或每月最多10K-50K次）的API，例如IP地理位置、反向地理编码、网络洞察、电子邮件和电话验证、客户信息等。
  * [IPTrace](https://iptrace.io) — 一个令人尴尬的简单API，为您的业务提供可靠且有用的IP地理位置数据。
  * [JSON2Video](https://json2video.com) - 一个用于自动化视频营销和社交媒体视频的视频编辑API，支持编程或无代码。
  * [JSON IP](https://getjsonip.com) — 返回请求它的客户端的公共IP地址。免费层无需注册。使用CORS，数据可以使用客户端JS直接从浏览器请求。用于服务监控客户端和服务器IP的变化。无限制请求。
  * [JSON Serve](https://jsonserve.com/) — 一个帮助开发者存储JSON对象并将JSON用作应用程序中的REST API的免费服务。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建假的REST API，并自定义HTTP状态代码、头部和响应体。
  * [konghq.com](https://konghq.com/) — API市场和强大的私有和公共API工具。免费层有一些功能限制，例如监控、警报和支持。
  * [Kreya](https://kreya.app) — 免费的gRPC GUI客户端，用于调用和测试gRPC API。可以通过服务器反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进您的机器学习模型。免费使用最多1000个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 一个用于检测欺诈和可疑登录并通知您的客户的登录安全API。免费计划每月1000次登录。

  * [Market Data API](https://www.marketdata.app) - 提供实时和历史金融数据，包括股票、期权、互助基金等。免费永远计划允许每天100次API请求。
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费的天气API计划，提供准确和最新的天气预报，全球覆盖，历史数据和天气监测解决方案。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预测基于机器学习组合的多个天气模型，以实现更高的准确性。免费计划每天提供400次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，例如元标签归一化，美丽的链接预览，网页抓取能力或截图作为服务。每天100次请求免费。
  * [Mindee](https://developers.mindee.com/docs) – Mindee是一款强大的OCR软件和API优先平台，帮助开发人员通过标准化文档处理层来自动化应用程序的工作流程，使用计算机视觉和机器学习来识别关键信息。免费层提供每月250页。
  * [Mintlify](https://mintlify.com) — 现代API文档标准。美观和易于维护的UI组件，应用内搜索和交互式游乐场。免费适用于1个编辑器。
  * [monkeylearn.com](https://monkeylearn.com/) — 使用机器学习进行文本分析，免费300次查询/月。
  * [MockAPI](https://www.mockapi.io/) — MockAPI是一个简单的工具，允许您快速模拟API，生成自定义数据，并使用RESTful接口执行操作。MockAPI旨在成为原型设计/测试/学习工具。免费计划每个项目提供1个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly是API模拟和功能标志管理的可靠开发工具。快速生成和控制模拟API，使用直观的界面。免费层提供每天500次请求。
  * [Mocki](https://mocki.io) - 一个工具，允许您创建模拟GraphQL和REST API，与GitHub存储库同步。简单的REST API免费开发和使用，无需注册。
  * [Mocko.dev](https://mocko.dev/) — 代理您的API，选择要模拟的端点，并在云中检查流量，免费。加快您的开发和集成测试速度。
  * [Mocky](https://designer.mocky.io/) - 一个简单的Web应用程序，用于生成自定义HTTP响应以模拟HTTP请求。也可作为[开源](https://github.com/julien-lafont/Mocky)使用。
  * [reqres.in](https://reqres.in) - 免费托管的REST-API，准备好响应您的AJAX请求。
  * [microenv.com](https://microenv.com) — 为开发人员创建假的REST API，具有生成代码和应用程序的docker容器的可能性。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一个免费且简单的工具，用于检查您的出口IP地址跨多个节点，并了解您的IP地址如何出现在不同全球区域和服务中。用于测试基于规则的DNS分割工具（如Control D）很有用。
  * [neptune.ai](https://neptune.ai/) - 记录、存储、显示、组织、比较和查询所有MLOps元数据。免费适用于个人：1名成员，100 GB的元数据存储，200小时/月的监控。
  * [News API](https://newsapi.org) — 使用代码搜索网络新闻，并获取JSON结果。开发人员每月免费获取3,000次查询。
  * [GoCardless](https://gocardless.com/) — 免费开放银行数据API。PSD2。将2300+家银行连接到您的应用程序/软件（EU+UK）。
  * [Nyckel](https://www.nyckel.com) — 训练、部署和调用图像和文本ML模型。免费训练，最高可达5,000个训练数据。每月免费调用1,000次模型。
  * [Observable](https://observablehq.com/) — 一个创建、协作和学习数据的地方。免费：无限笔记本，无限发布，每个笔记本5个编辑器。
  * [OCR.Space](https://ocr.space/) — 一个OCR API，解析图像和pdf文件，并以JSON格式返回文本结果。每月免费25,000次请求。
  * [Duply.co](https://duply.co) — 从API和URL创建动态图像，设计模板一次并重用它。免费层提供每月70个图像创建（来自API和URL）和最高100个来自表单。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转换为API，5个项目免费。
  * [PDFBolt](https://pdfbolt.com) - 面向开发人员的PDF生成API，注重隐私。它提供类似于Stripe的文档，并包括每月500次免费PDF转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 使用简单的API轻松将HTML或URL转换为PDF。每月100次转换免费。
  * [PDF-API.io](https://pdf-api.io) - PDF自动化API，视觉模板编辑器或HTML到PDF，动态数据集成和PDF渲染，带有API。免费计划包括1个模板，100个PDF/月。
  * [Pixela](https://pixe.la/) - 免费的日流数据库服务。所有操作都通过API执行。还可以使用热图和线图进行可视化。
  * [Postbacks](https://postbacks.io/) - 请求HTTP回调以便稍后执行。注册时免费8,000次请求。
  * [Postman](https://postman.com) — 简化工作流程并创建更好的API – 更快 – 使用Postman，API开发的协作平台。Postman应用程序可永久免费使用。Postman云功能也永久免费，具有某些限制。
  * [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL。
  * [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化的完整平台。所有计划每月包括20,000次免费运行。这足以为大多数小型企业提供ETL。
  * [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。永久免费适用于最多5个用户的团队，功能包括无限仪表板和图表，无代码图表生成器和协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 面向创作者和开发人员的提示工程平台。它提供提示工程库，表单和API。免费计划提供1个提示形成，1个提示API端点和每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍更容易的AI网页抓取，几乎零采纳时间，现有工作流程的时间节省超过85%，运行速度是手动研究的4倍，不会损害。并且包括所有研究任务的REST API端点。每月前1,000个信用额度免费。
  * [Proxed AI](https://proxed.ai/) - 在iOS中安全的AI API，無需SDK，只需更改API URL。每月提供1,000次免费API调用。
  * [Crawlbase](https://crawlbase.com/) — 爬取和抓取网站，无需代理，基础设施或浏览器。我们为您解决验证码，并防止您被阻止。前1,000次调用免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板输入自动生成图像。免费计划允许您每周创建最多100个图像。

  * [Rapidapi](https://rapidapi.com/) - 全球最大的API Hub，数百万开发者在这里找到并连接到成千上万的API，使用有趣的挑战（带有解决方案！）和交互式示例进行API开发。
  * [RequestBin.com](https://requestbin.com) — 创建一个免费的端点，您可以向其发送HTTP请求。发送到该端点的任何HTTP请求都将记录相关的payload和headers，因此您可以观察来自Webhooks和其他服务的建议。
  * [Roboflow](https://roboflow.com) - 创建和部署自定义计算机视觉模型，无需任何机器学习经验。免费层包括最多1,000个免费源图像。
  * [ROBOHASH](https://robohash.org/) - 一个从任何文本生成唯一且酷炫的图像的Web服务。
  * [SaturnCloud](https://saturncloud.io/) - 一个允许运行Jupyter笔记本和Dask集群的数据科学云环境。每月30小时的免费计算和3小时的Dask。
  * [Scraper's Proxy](https://scrapersproxy.com) — 一个简单的HTTP代理API，用于网页抓取。无需担心限制、阻塞或验证码，即可匿名抓取网页。每月前100次成功抓取免费，包括JavaScript渲染（联系支持可获得更多）。
  * [ScrapingAnt](https://scrapingant.com/) — 一个使用无头Chrome的抓取API和免费的代理服务。JavaScript渲染、 премиум代理、避免验证码。免费计划可用。
  * [ScraperBox](https://scraperbox.com/) — 一个使用真实Chrome浏览器和代理轮换的不可检测的网页抓取API。使用一个简单的API调用即可抓取任何网页。免费计划每月有1000个请求。
  * [ScrapingDog](https://scrapingdog.com/) — Scrapingdog处理数百万个代理、浏览器和验证码，为您提供任何网页的HTML代码，只需一个API调用。它还包括Chrome和Firefox的Web抓取器以及即时抓取需求的软件。免费计划可用。
  * [scrapinghub.com](https://scrapinghub.com) — 使用可视化界面和插件进行数据抓取。免费计划包括在共享服务器上进行无限制的抓取。
  * [Simplescraper](https://simplescraper.io) — 在每个操作后触发您的Webhook。免费计划包括100个云抓取积分。
  * [Select Star](https://www.selectstar.com/) - 一个智能数据发现平台，自动分析和记录您的数据。免费的轻量级计划，包括1个数据源、最多100个表格和10个用户。
  * [Sheetson](https://sheetson.com) - 即刻将任何Google Sheets转换为RESTful API。免费计划可用。
  * [Shipyard](https://www.shipyardapp.com) — 一个低代码的数据编排平台，用于云端。使用低代码模板和您的代码（Python、Node.js、Bash、SQL）进行构建。我们的免费开发者计划每月提供10小时的运行时间，适用于一个用户 - 足够自动化多个工作流程。
  * [shrtcode API](https://shrtco.de/docs) - 一个免费的URL缩短API，无需授权，也无请求限制。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、Baidu、Walmart等机器的结构化JSON结果。免费计划包括每月100次成功的API调用。
  * [SmartParse](https://smartparse.io) - SmartParse是一个数据迁移和CSV到API的平台，提供节省时间和成本的开发者工具。免费层包括每月300个处理单位、浏览器上传、数据隔离、断路器和作业警报。
  * [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件，即可通过其API访问数据，允许更快的应用程序开发。免费计划包括2个API和每月2,500个API调用。您无需信用卡。
  * [Sqlable](https://sqlable.com/) - 一系列免费的在线SQL工具，包括SQL格式化器和验证器、SQL正则表达式测试器、假数据生成器和交互式数据库游乐场。
  * [Stoplight](https://stoplight.io/) - 一个用于协作设计和记录API的SaaS。免费计划提供免费的设计、模拟和文档工具。
  * [Svix](https://www.svix.com/) - Webhooks即服务。每月免费发送最多50,000条消息。
  * [TemplateTo](https://templateto.com) - 使用我们的拖放编辑器和简单API从可重用的模板自动生成PDF/TXT文档。免费计划每月包括450个PDF和3个模板。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能免费使用，无限制。
  * [Treblle](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。具有高级API日志聚合、可观察性、文档和调试。您可以免费获得所有功能，但免费层每月最多有250k个请求。
  * [UniRateAPI](https://unirateapi.com) – 实时汇率API，支持590+种货币和加密货币。免费计划无限制，适合开发者和金融应用。
  * [Webhook Store](https://www.openwebhook.io) - 一个用于存储第三方Webhook并在localhost上调试的工具（类似ngrok）。开源且可自托管。免费的个人域名 *username*.github.webhook.store，免费的公共域名 *anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai) — 面向开发者的MLOps平台。使用实验跟踪、数据集版本控制和模型管理构建更好的模型。免费层仅适用于个人项目，包括100 GB的存储空间。
  * [wit.ai](https://wit.ai/) — 面向开发者的NLP。
  * [wolfram.com](https://wolfram.com/language/) — 基于知识的算法，内置于云端。
  * [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30k个API调用。
  * [ZenRows](https://www.zenrows.com/) — 网页抓取API和代理服务器，绕过任何反爬虫解决方案，同时提供JavaScript渲染、轮换代理和地理定位。免费层每月1000个API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 网页抓取API，使用无头浏览器、住宅IP和直接定价。每月1000个免费API调用，学生和非盈利组织可获得额外积分。
  * [IPQuery](https://ipquery.io) — 面向开发者的无限制IP API，无需速率限制或定价。
  * [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，免费计划每分钟从同一IP地址最多45个请求。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页抓取API，内置解析、Chrome渲染和代理。每月2000个免费API调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费的邮政编码API，访问全球邮政编码数据。每月10,000个免费请求。
  * [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费使用，最高30k个输入字符/月。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单且免费的VAT号码验证API。每月500个免费请求。
  * [numlookupapi.com](https://numlookupapi.com) - 免费的电话号码验证API - 每月100k个免费请求。
  * [Volca](https://volca.io#api) - 一个免费的API，提供技术列表，例如编程语言和数据库系统。无限制的免费请求。
  * [Query.me](https://query.me) - 协作数据笔记本，执行类似脚本的操作，并允许通过SQL、API和许多自定义块（如Slack和Email）获取和发送数据。适用于小团队免费。
  * [ERD Lab](https://www.erdlab.io) — 一个免费的基于云的实体关系图（ERD）工具，适用于开发者。
  * [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月最多有25,000个令牌（约10个PR）。
  * [Zipcodestack](https://zipcodestack.com) - 免费的邮政编码API和邮政编码验证。每月10,000个免费请求。

  * [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察的API，提供综合性研究和研究结果组织能力。免费套餐每月1000次请求，无需信用卡。
  * [Composio](https://composio.dev/) - AI Agent和LLM集成平台。支持将200+工具整合到代理互联网中。
  * [WeatherXu](https://weatherxu.com/) — 全球天气数据，包括当前状况、每小时和每日预报、天气警报等。通过API提供。集成了AI模型和ML系统来分析和组合多个天气模型，提高预报准确性。免费套餐包括每月10,000次API调用。
  * [Zuplo](https://zuplo.com/) - 免费的API管理平台，用于设计、构建和部署API到边缘。添加API密钥认证、速率限制、开发人员文档和货币化到任何API中。支持OpenAPI和Typescript，免费套餐包括最多10个项目、无限生产边缘环境、250个API密钥、每月100K请求和1GB出口。
  * [Amazon SageMaker](https://studiolab.sagemaker.aws/) — 基于云的机器学习平台，提供JupyterLab和终端访问。免费套餐包括每日8小时CPU（每次会话最多4小时）或每日4小时GPU。

**[⬆️ 返回顶部](#目录)**

## artifact仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的artifact仓库。包括包扫描工具XRay和CI/CD工具Pipelines（以前称为Shippable），每月有2,000分钟的CI/CD免费使用额度。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认artifact仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven和PyPi仓库。开源项目免费使用。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中化的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。有免费使用额度，开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上的JVM和Android项目的Maven仓库，公共项目免费使用。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — Maven、RPM、DEB、PyPi、NPM和RubyGem包的易用仓库托管（有免费使用额度）。
  * [repsy.io](https://repsy.io) — 1 GB免费的私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有和公共artifact仓库。公共项目免费使用。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公共项目，5Gb存储，基本实例。
  * [RepoForge](https://repoforge.io) - Python、Debian、NPM包和Docker注册表的私有云托管仓库。开源/公共项目免费使用。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用，包括10GB存储、10GB带宽、100个包和无限用户的云托管，或者自托管用于个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队和协作工具

  * [3Cols](https://3cols.com/) - 一个免费的基于云的代码片段管理器，适用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com) — 最容易和最安全的方式，供个人、团队和商业组织存储、共享和同步敏感数据。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用程序。公共访问组免费，用户、历史记录和集成无限制。同时，还提供自托管的开源版本。
  * [cally.com](https://cally.com/) — 找到会议的最佳时间和日期。使用简单，适合小型和大型团队。
  * [Calendly](https://calendly.com) — Calendly 是连接和安排会议的工具。免费计划提供每用户 1 个日历连接和无限会话。同时，还提供桌面和移动应用程序。
  * [Discord](https://discord.com/) — 公共/私人房间聊天。支持 Markdown 文本、语音、视频和屏幕共享。无限用户免费。
  * [Telegram](https://telegram.org/) — Telegram 适合所有想要快速、可靠的消息和通话的人。商业用户和小团队可能会喜欢大型群组、用户名、桌面应用程序和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建器。截取屏幕、记录过程并与团队协作。同时，还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 与团队实时聊天和协作。支持 IDE 配对编程、终端共享、语音、视频和屏幕共享。小团队免费。
  * [Dyte](https://dyte.io) - 最适合开发者的实时视频和音频 SDK，具有增强生产力和参与度的协作插件。免费层包括每月 10,000 分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/) — 信息组织工具。共享笔记并与他人合作。
  * [Fibery](https://fibery.io/) — 连接的工作空间平台。单用户免费，最高 2 GB 磁盘空间。
  * [flock.com](https://flock.com) — 一个更快的团队通信方式。免费的无限消息、频道、用户、应用程序和集成。
  * [Gather](https://www.gather.town/) - 一个更好的在线会议方式。围绕完全可定制的空间，Gather 使得与社区一起度过时间就像现实生活一样容易。免费适用于最多 10 个并发用户。
  * [gokanban.io](https://gokanban.io) - 基于语法的，无需注册的 Kanban 板，适合快速使用。免费，无限制。
  * [flat.social](https://flat.social) - 交互式可定制空间，适用于团队会议和社交活动。无限会议，免费适用于最多 8 个并发用户。
  * [GitDailies](https://gitdailies.com) - GitHub 团队的提交和拉取请求活动每日报告。包括推送可视化器、同行认可系统和自定义警报构建器。免费层具有无限用户、3 个仓库和 3 个警报配置。
  * [gitter.im](https://gitter.im/) — 为 GitHub 设计的聊天应用程序。无限公共和私人房间，免费适用于最多 25 人的团队。
  * [Hackmd.io](https://hackmd.io/) - 实时协作和写作工具，支持 Markdown 格式文档/文件。类似于 Google Docs，但适用于 Markdown 文件。免费的无限“笔记”数量，但私人笔记和模板的协作者（被邀请者）数量将受到限制。
  * [hangouts.google.com](https://hangouts.google.com/) — 所有对话的单一位置，免费，需要 Google 账户。
  * [HeySpace](https://hey.space) - 任务管理工具，具有聊天、日历、时间轴和视频通话功能。免费适用于最多 5 个用户。
  * [helplightning.com](https://www.helplightning.com/) — 带有增强现实的视频帮助。免费，不包括分析、加密和支持。
  * [ideascale.com](https://ideascale.com/) — 允许客户提交想法和投票，免费适用于 1 个社区的 25 名成员。
  * [Igloo](https://www.igloosoftware.com/) — 内部门户，用于共享文档、博客、日历等。免费适用于最多 10 个用户。
  * [Keybase](https://keybase.io/) — Keybase 是 Slack 的 FOSS 替代品；它保持所有人的聊天和文件安全，从家庭到社区到公司。
  * [Google Meet](https://meet.google.com/) — 使用 Google Meet 满足您的业务的在线视频会议需求。Meet 提供安全、易于加入的在线会议。
  * [/meet for Slack](https://meetslack.com) - 使用 /meet 在任何频道、群组或 DM 中直接从 Slack 启动 Google 会议。免费，无限制。
  * [Livecycle](https://www.livecycle.io/) — Livecycle 是一个包容的协作平台，使跨功能产品团队和开源项目的工作流程无缝。
  * [Lockitbot](https://www.lockitbot.com/) — 在 Slack 中保留和锁定共享资源，如房间、开发环境、服务器等。免费适用于最多 2 个资源。
  * [MarkUp](https://www.markup.io/) — MarkUp 允许您直接在网站、PDF 和图像上收集反馈。
  * [Proton Pass](https://proton.me/pass) — 带有内置电子邮件别名、2FA 身份验证器、共享和通行密钥的密码管理器。可在 Web、浏览器扩展、移动应用程序和桌面应用程序上使用。
  * [Visual Debug](https://visualdebug.com) - 用于更好客户端-开发者通信的视觉反馈工具。
  * [meet.jit.si](https://meet.jit.si/) — 一键视频对话和屏幕共享，免费。
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free) — Microsoft Teams 是一个基于聊天的数字中心，汇集了对话、内容和应用程序，所有这些都来自单一体验。免费适用于最多 500k 用户。
  * [Miro](https://miro.com/) - 适用于分布式团队的可扩展、安全、跨设备和企业级协作白板。具有免费计划。
  * [nootiz](https://www.nootiz.com/) - 网站视觉反馈的首选工具。
  * [Notion](https://www.notion.so/) - Notion 是一个支持 Markdown 的笔记和协作应用程序，集成了任务、维基和数据库。该公司将该应用程序描述为一个用于笔记、项目管理和任务管理的全功能工作空间。除了跨平台应用程序外，还可以通过大多数 Web 浏览器访问。
  * [Nuclino](https://www.nuclino.com) - 一个轻量级的协作维基，适用于团队的所有知识、文档和笔记。免费计划包含所有基本功能，最高 50 个项目，5GB 存储空间。
  * [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，具有嵌入式视频聊天、绘图板和在线代码编辑器，您可以在浏览器中编译和运行代码。只需单击即可创建远程面试房间。
  * [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一个简单的时间表和时间跟踪应用程序，适用于团队。免费计划具有时间跟踪和生成报告功能，适用于最多 10 个用户。
  * [PageShare.dev](https://www.pageshare.dev) - 将视觉审查功能添加到 GitHub 拉取请求中，无需部署网站。免费适用于每月最多 10 页和总共 100MB 的存储空间。
  * [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，帮助您以更好的方式管理时间，具有易于使用的界面和有价值的统计数据。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用程序。无限用户和消息历史，永久免费。
  * [Raindrop.io](https://raindrop.io) - 适用于 macOS、Windows、Android、iOS 和 Web 的私人和安全的书签应用程序。免费的无限书签和协作。
  * [element.io](https://element.io/) — 一个基于 Matrix 的去中心化和开源通信工具。群组聊天、直接消息、加密文件传输、语音和视频聊天，以及与其他服务的易于集成。

  * [seafile.com](https://www.seafile.com/) — 私有或云存储，文件共享，同步，讨论。云版本仅有1 GB
  * [Sema](https://www.semasoftware.com/) - 免费的开发者作品集工具，可以整合和快照多个仓库的贡献，生成单一报告。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，直接从浏览器共享屏幕与协作者，无需下载或注册。
  * [Slab](https://slab.com/) — 现代知识管理服务，适用于团队。免费适用于最多10名用户。
  * [slack.com](https://slack.com/) — 免费适用于无限用户，但有一些功能限制
  * [Spectrum](https://spectrum.chat/) - 创建公共或私有社区，免费。
  * [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。可以跟踪上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/) - 视觉协作应用，用于头脑风暴，内容策划和笔记。免费适用于最多3个墙面，无限用户和1 GB存储。
  * [Stacks](https://betterstacks.com/) - 内容工作空间，集成了笔记，链接和文件存储，用于导航信息过载。永久免费个人计划。
  * [talky.io](https://talky.io/) — 免费的群组视频聊天。匿名。点对点。无需插件，注册或付款。
  * [Teamhood](https://teamhood.com/) - 免费的项目，任务和问题跟踪软件。支持Kanban，Swimlanes和完整的Scrum实现。集成了时间跟踪。免费适用于5名用户和3个项目组合。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站立会议来改进团队开发流程。包括为远程第一团队提供的完整功能的时间管理。免费适用于最多5名用户的小组。
  * [Tefter](https://tefter.io) - 书签应用，具有强大的Slack集成。免费适用于开源团队。
  * [TeleType](https://teletype.oorja.io/) — 共享终端，语音，代码，白板等。无需注册即可进行端到端加密的协作开发。
  * [TimeCamp](https://www.timecamp.com/) - 免费的时间跟踪软件，适用于无限用户。轻松集成PM工具，如Jira，Trello，Asana等。
  * [Huly](https://huly.io/) - 全面的项目管理平台（Linear，Jira，Slack，Notion，Motion的替代品）- 无限用户，每个工作空间10GB存储，每个工作空间10GB视频（音频）流量。
  * [Teamcamp](https://www.teamcamp.app) - 适用于软件开发公司的全功能项目管理应用。
  * [twist.com](https://twist.com) — 异步友好的团队沟通应用，conversation保持组织化和主题。免费和无限计划可用。为合格团队提供折扣。
  * [tldraw.com](https://tldraw.com) — 免费的开源白板和图表工具，具有智能箭头，捕捉，粘性笔记和SVG导出功能。多人模式用于协作编辑。免费的官方VS Code扩展也可用。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费的全功能书签管理器，标签管理器和任务管理器，具有可定制的在线桌面和文件夹协作。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页或移动设备上的即时消息与团队分享和讨论想法。
  * [Tugboat](https://tugboat.qa) -预览每个拉取请求，自动和按需。免费适用于所有人，非营利组织可享受免费的Nano级别。
  * [whereby.com](https://whereby.com/) — 单击视频对话，免费（以前称为appear.in）。
  * [windmill.dev](https://windmill.dev/) - Windmill是一个开源开发平台，用于快速从最少的Python和TypeScript脚本构建生产级的多步骤自动化和内部应用。作为免费用户，您可以创建并成为最多三个非高级工作空间的成员。
  * [vadoo.tv](https://vadoo.tv/) — 简化视频托管和营销。单击即可上传视频。录制，管理，共享和更多。免费级别提供最多10个视频，1 GB存储和每月10 GB带宽。
  * [userforge.com](https://userforge.com/) - 相互连接的在线人物，用户故事和上下文映射。帮助保持设计和开发同步，免费适用于最多3个人物和两个协作者。
  * [wistia.com](https://wistia.com/) — 提供查看者分析，HD视频传递和营销工具的视频托管，帮助您了解访客，25个视频和Wistia品牌播放器。
  * [wormhol.org](https://www.wormhol.org/) — 直接的文件共享服务。与您想要的任意多个对等方共享最多5GB的文件。
  * [Wormhole](https://wormhole.app/) - 共享最多5GB的文件，具有端到端加密，共享时间最长24小时。对于大于5 GB的文件，它使用点对点传输直接发送文件。
  * [zoom.us](https://zoom.us/) — 安全的视频和Web会议添加项可用。免费计划仅限40分钟。
  * [Zulip](https://zulip.com/) — 实时聊天，具有类似电子邮件的线程模型。免费计划包括10,000条消息的搜索历史和最多5 GB的文件存储。还提供自托管的开源版本。
  * [robocorp.com](https://robocorp.com) - 开源堆栈，用于为自动化操作提供动力。尝试使用云功能并免费实现简单自动化。机器人工作240分钟/月，10次助手运行，100 MB存储。
  * [Fleep.io](https://fleep.io/) — Fleep是Slack的替代品。它有一个免费计划，适用于小团队，具有完整的消息历史，无限的1:1对话，1个组对话和1 GB文件存储。
  * [Chanty.com](https://chanty.com/) — Chanty是另一个Slack的替代品。它有一个永久免费计划，适用于小团队（最多10人），具有无限的公共和私人对话，可搜索的历史，无限的1:1音频通话，无限的语音消息，10个集成和20 GB存储/团队。
  * [ruttl.com](https://ruttl.com/) — 最好的全功能反馈工具，用于收集数字反馈和审查网站，PDF和图像。
  * [Mattermost](https://mattermost.com/) — 为技术团队提供安全的协作。免费计划，具有无限的频道，playbook，板块，用户，10GB存储等。
  * [Webvizio](https://webvizio.com) — 网站反馈工具，网站审查软件和错误报告工具，用于简化Web开发协作，直接在实时网站和Web应用，图像，PDF和设计文件上处理任务。
  * [Pullflow](https://pullflow.com) — Pullflow提供了一个AI增强的平台，用于跨GitHub，Slack和VS Code进行代码审查协作。
  * [Webex](https://www.webex.com/) — 视频会议，免费计划，提供每次会议40分钟，支持100名与会者。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议，免费计划，提供每次会议50分钟，支持100名参与者。
  * [GitBook](https://www.gitbook.com/) — 平台，用于捕获和记录技术知识 — 从产品文档到内部知识库和API。免费计划，适用于个人开发者。
  * [transfernow](https://www.transfernow.net/) — 最简单，速度最快，安全性最高的界面，用于传输和共享文件。无需强制订阅即可发送照片，视频和其他大文件。
  * [paste.sh](https://paste.sh/) — 这是一个基于JavaScript和Crypto的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/) — 一个开源的Discord替代品，尊重您的隐私。它还具有来自Discord的大多数专有功能，全部免费。Revolt是一个全功能应用，安全，快速，同时100%免费。所有功能均免费。它还支持（官方和非官方）插件，与大多数主流聊天应用不同。

  * [Pastefy](https://pastefy.app/) - 一个美观且简单的 Pastebin，拥有可选的客户端加密，多标签粘贴，API，高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在您的网站上分享反馈，无需模拟，canvas 或变通方法。完全功能性的免费层。
**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — 为Drupal站点提供托管服务。开发者可使用免费套餐。同时，还提供免费的开发工具（如Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理和交付API。包含一个免费的社区空间，包括五个用户，25K记录，48个内容类型，2个语言。
  * [Cosmic](https://www.cosmicjs.com/) — 无头CMS和API工具包。开发者可使用免费的个人计划。
  * [Crystallize](https://crystallize.com) — 支持电子商务的无头PIM。内置GraphQL API。免费版本包括无限用户，1000个目录项，5 GB/月带宽，25k/月API调用。
  * [DatoCMS](https://www.datocms.com/) - 为小项目提供免费套餐。DatoCMS是一个基于GraphQL的CMS。在较低的套餐中，您有100k/月的调用次数。
  * [Directus](https://directus.io) — 无头CMS。一个完全免费和开源的平台，用于在本地或云端管理资产和数据库内容。没有任何限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 无头CMS，将JSON内容直接存储在您的Git仓库中。无任何限制。
  * [kontent.ai](https://www.kontent.ai) - 一个Content-as-a-Service平台，提供无头CMS的所有优势，同时赋予营销人员权力。开发者计划提供两个用户，具有无限项目，每个项目有两个环境，500个内容项，两个语言，具有交付和管理API，以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
  * [Prismic](https://www.prismic.io/) — 无头CMS。内容管理界面，具有完全托管和可扩展的API。社区计划提供无限API调用，文档，自定义类型，资产和语言，适用于一个用户。您下一个项目所需的一切。更大的免费计划可用于开放内容/开源项目。
  * [Sanity.io](https://www.sanity.io/) - 结构化内容平台，具有开源编辑环境和实时托管数据存储。每个项目免费包含无限项目，无限管理员用户，三个非管理员用户，两个数据集，500K API CDN请求，10GB带宽，5GB资产。
  * [sensenet](https://sensenet.com) - API优先的无头CMS，为所有规模的企业提供企业级解决方案。开发者计划提供三个用户，500个内容项，三个内置角色，25+5个内容类型，完全可访问的REST API，文档预览生成和Office Online编辑。
  * [TinaCMS](https://tina.io/) — 替代Forestry.io。开源的Git-backed无头CMS，支持Markdown，MDX和JSON。基本套餐免费，包含两个用户。
  * [GatsbyjsCMS](https://www.gatsbyjs.com/) - Gatsby是一个快速灵活的框架，使得使用任何CMS，API或数据库构建网站变得有趣。构建和部署无头网站，驱动更多流量，转化更好，赚取更多收入！
  * [Hygraph](https://hygraph.com/) - 为小项目提供免费套餐。GraphQL首选API。从传统解决方案转移到GraphQL原生无头CMS - 并以API优先的方式交付全渠道内容。
  * [Squidex](https://squidex.io/) - 为小项目提供免费套餐。API / GraphQL首选。开源，基于事件源（自动记录每个更改）。
  * [InstaWP](https://instawp.com/) - 在几秒钟内启动一个WordPress站点。免费套餐包含5个活跃站点，500 MB空间，48小时站点过期。
  * [Storyblok](https://www.storyblok.com) - 为开发者和营销人员提供的无头CMS，适用于所有现代框架。社区（免费）套餐提供管理API，视觉编辑器，十个来源，自定义字段类型，国际化（无限语言/地区），资产管理器（最多2500个资产），图像优化服务，搜索查询，Webhook + 250GB流量/月。
  * [WPJack](https://wpjack.com) - 在不到5分钟内在任何云端设置WordPress！免费套餐包含1个服务器，2个站点，免费SSL证书和无限cron作业。无时间限制或过期 - 您的网站，您的方式。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用程序构建工具。自动生成的后端代码中，用户可以完全访问源代码和无限的 API 和路由，从而实现广泛的集成。免费计划包括三个项目、五个表和 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一个使用 AI 和深入理解代码库来帮助开发人员更快地编写和理解代码的编码 AI 助手。Cody 为开发人员提供了选择 LLMs（包括本地推理）的机会，支持多个 IDE，支持所有流行的编程语言，并且具有免费计划。免费计划为开发人员提供每月 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用 DhiWise 的创新代码生成技术，顺利地将 Figma 设计转换为动态的 Flutter 和 React 应用程序，优化工作流程，帮助开发人员更快地创建出色的移动和 Web 体验。
  * [Codeium](https://www.codeium.com/) — Codeium 是一个免费的 AI 力的代码补全工具。它支持 20 多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等），并与所有重要的独立和 Web IDE 集成。
  * [Fern](https://buildwithfern.com) - 编写 API 定义并使用它们在流行语言（如 TypeScript、Python、Java、Go 等）中生成 SDK/客户端库。完全支持 OpenAPI。免费层生成最多 20 个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 只针对 C#。Metalama 在编译期间实时生成代码的样板，从而保持源代码的清晰。对于开源项目是免费的，其商业友好的免费层包括三个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是一个针对 VSCode、JetBrains 和 Neovim 的快速 AI 代码补全插件。免费层提供无限的内联补全。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine 通过提供从所有代码中学习的见解来帮助开发人员更快地创建更好的软件。可用的插件。
  * [v0.dev](https://v0.dev/) — v0 使用 AI 模型根据简单的文本提示生成代码。它生成基于 shadcn/ui 和 Tailwind CSS 的 React 代码，可以在项目中直接使用。每个生成至少需要 30 积分。初始时有 1200 积分，每月可获得 200 积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个用于编写、审查和部署代码的完整工作流程，提供一个用户和一个仓库的免费账户，仓库容量为100 MB
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费使用时间为3分钟，仅支持MS IE 9在Vista下以1024 x 768分辨率运行
  * [codacy.com](https://www.codacy.com/) — 为PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript提供自动代码审查，免费使用无限公共和私有仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 一个用于DevOps的自动化基础设施即代码审查工具，集成GitHub、Bitbucket和GitLab（包括自托管）。除了标准语言外，还分析Ansible、Terraform、CloudFormation、Kubernetes等。（开源免费）
  * [CodeBeat](https://codebeat.co) — 一个可用于多种语言的自动代码审查平台。对于公共仓库，永久免费，并支持Slack和电子邮件集成。
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查，免费用于开源和组织拥有的私有仓库（最多4个协作者）。也免费用于学生和机构。
  * [codecov.io](https://codecov.io/) — 代码覆盖工具（SaaS），免费用于开源和一个私有仓库
  * [CodeFactor](https://www.codefactor.io) — 自动代码审查工具，用于Git。免费版本包括无限用户、公共仓库和一个私有仓库。
  * [coderabbit.ai](https://coderabbit.ai) — 一个集成GitHub/GitLab的AI驱动代码审查工具。免费版本包括每小时200个文件、每小时3个审查和每小时50个对话。对于开源项目，永久免费。
  * [codescene.io](https://codescene.io/) - CodeScene根据开发人员如何使用代码来确定技术债务的优先级，并可视化团队耦合和系统掌握等组织因素。免费用于开源。
  * [CodSpeed](https://codspeed.io) - 在CI管道中自动化性能跟踪。通过精确和一致的指标，在部署前捕获性能回归。对于开源项目，永久免费。
  * [coveralls.io](https://coveralls.io/) — 显示测试覆盖报告，免费用于开源
  * [dareboost](https://dareboost.com) - 每月5个免费分析报告，用于网络性能、可访问性和安全性
  * [deepcode.ai](https://www.deepcode.ai) — DeepCode根据AI找到错误、安全漏洞、性能和API问题。DeepCode的分析速度允许我们实时分析代码，并在您在IDE中保存时提供结果。支持Java、C/C++、JavaScript、Python和TypeScript。集成GitHub、BitBucket和GitLab。对于开源和私有仓库免费，且最多支持30名开发人员。
  * [deepscan.io](https://deepscan.io) — JavaScript代码的高级静态分析，自动查找运行时错误，免费用于开源
  * [DeepSource](https://deepsource.io/) - DeepSource持续分析源代码更改，找到和修复安全、性能、反模式、错误风险、文档和样式等问题。与GitHub、GitLab和Bitbucket原生集成。
  * [DiffText](https://difftext.com) - 即时找到两个代码块之间的差异。完全免费使用。
  * [eversql.com](https://www.eversql.com/) — EverSQL - 第1平台，用于数据库优化。自动获取有关数据库和SQL查询的关键见解。
  * [gerrithub.io](https://review.gerrithub.io/) — Gerrit代码审查，用于GitHub仓库，免费
  * [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖
  * [goreportcard.com](https://goreportcard.com/) — Go项目的代码质量，免费用于开源
  * [gtmetrix.com](https://gtmetrix.com/) — 优化网站的报告和详细建议
  * [holistic.dev](https://holistic.dev/) - 第1静态代码分析器，用于Postgresql优化。性能、安全和架构数据库问题的自动检测服务
  * [houndci.com](https://houndci.com/) — 关于代码质量的GitHub提交评论，免费用于开源
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构。Moderne提供框架迁移、带有补救的代码分析以及无与伦比的代码转换，以大规模扩展，因此开发人员可以花时间构建新事物，而不是维护旧事物。免费用于开源。
  * [reviewable.io](https://reviewable.io/) — GitHub仓库的代码审查，免费用于公共或个人仓库。
  * [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器作为服务
  * [scan.coverity.com](https://scan.coverity.com/) — Java、C/C++、C#和JavaScript的静态代码分析，免费用于开源
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，免费用于开源
  * [semanticdiff.com](https://app.semanticdiff.com/) — GitHub拉取请求和提交的编程语言感知差异，免费用于公共仓库
  * [shields.io](https://shields.io) — 开源项目的质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) — Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python、Groovy等语言的自动源代码分析，免费用于开源
  * [SourceLevel](https://sourcelevel.io/) — 自动代码审查和团队分析。免费用于开源和最多5个协作者的组织。
  * [webceo.com](https://www.webceo.com/) — SEO工具，但也包括代码验证和不同设备类型
  * [zoompf.com](https://zoompf.com/) — 修复网站的性能，详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 为32种不同的包管理器提供搜索和依赖更新通知，开源项目免费使用
  * [Namae](https://namae.dev/) - 搜索GitHub、Gitlab、Heroku、Netlify等多个网站，检查项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 基于文本的全面代码搜索，开源项目免费使用
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（和其他标记），找出需要改进的代码区域。
  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，具有强大的代码截图工具、预置模板和链接功能。

**[⬆️ 回到顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动化的 web 无障碍测试引入您的开发工作流程。对于开源和教育目的是免费的。
  * [appcircle.io](https://appcircle.io) — 一个针对企业的移动 DevOps 平台，自动化移动应用的构建、测试和发布，实现更快、更高效的发布周期。对于最多 30 分钟的构建时间、每月 20 次构建和 1 个并发构建是免费的。
  * [appveyor.com](https://www.appveyor.com/) — 面向 Windows 的 CD 服务，适用于开源项目是免费的。
  * [LocalOps](https://localops.co/) -您可以在不到 30 分钟内将应用程序部署在 AWS/GCP/Azure 上。设置标准化的应用程序环境，可以在任何云上部署，并内置持续部署自动化和高级可观察性。免费计划允许 1 个用户和 1 个应用程序环境。
  * [Argonaut](https://argonaut.dev/) - 您可以在几分钟内在您的云上部署应用程序和基础设施。支持自定义和第三方应用程序部署在 Kubernetes 和 Lambda 环境中。免费层允许 5 个域和 2 个用户的无限应用程序和部署。
  * [bitrise.io](https://www.bitrise.io/) — 一个适用于移动应用程序（本地或混合）的 CI/CD 平台。每月有 200 次免费构建、10 分钟的构建时间和 2 个团队成员。对于开源项目，构建时间为 45 分钟，+1 并发性和无限团队规模。
  * [buddy.works](https://buddy.works/) — 一个提供 5 个免费项目和 1 个并发运行（120 次执行/月）的 CI/CD 平台。
  * [Buildkite](https://buildkite.com) CI 流水线对于 3 个用户和每月 5k 次作业分钟是免费的。测试分析的免费开发者层包括每月 100k 次测试执行，并且对于开源项目有更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps。对于少于 20 个用户和 10 个数据库实例是免费的。
  * [CircleCI](https://circleci.com/) — 一个包含所有功能的综合免费计划，适用于 GitHub、GitLab 和 BitBucket 仓库的托管 CI/CD 服务。提供多个资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试分割、Docker 层缓存和其他高级 CI/CD 功能。对于私人项目，免费使用时间为每月 6000 分钟的执行时间、无限协作者、30 个并行作业，开源项目可享受最多 80,000 次免费构建。
  * [cirrus-ci.org](https://cirrus-ci.org) - 对于公共 GitHub 仓库是免费的。
  * [cirun.io](https://cirun.io) - 对于公共 GitHub 仓库是免费的。
  * [codefresh.io](https://codefresh.io) — 长期免费计划：1 次构建、1 个环境、共享服务器、无限公共仓库。
  * [codemagic.io](https://codemagic.io/) - 每月 500 次构建免费。
  * [codeship.com](https://codeship.com/) — 每月 100 次私有构建、5 个私有项目，对于开源项目是无限的。
  * [deploybot.com](https://www.deploybot.com/) — 1 个仓库包含 10 次部署，适用于开源项目是免费的。
  * [deployhq.com](https://www.deployhq.com/) — 1 个项目包含 10 次每日部署（每月 30 分钟的构建时间）。
  * [drone](https://cloud.drone.io/) - Drone Cloud 可以让开发者在一个地方运行全范围的持续交付流水线，包括 x86 和 Arm（32 位和 64 位）。
  * [LayerCI](https://layerci.com) — 全栈项目的 CI。一个全栈预览环境，包含 5GB 内存和 3 个 CPU。
  * [semaphoreci.com](https://semaphoreci.com/) — 对于开源项目是免费的，私有构建每月 100 次。
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建一个虚拟机，并通过一个唯一的 URL 提供您的应用程序。对于公共和私有仓库是无限的，最高支持 2 GB 的虚拟机大小。
  * [styleci.io](https://styleci.io/) — 只适用于公共 GitHub 仓库。
  * [Mergify](https://mergify.io) — GitHub 的工作流自动化和合并队列。对于公共 GitHub 仓库是免费的。
  * [Make](https://www.make.com/en) — 工作流自动化工具，通过 UI 连接应用程序并自动化工作流。支持许多应用程序和最流行的 API。对于公共 GitHub 仓库和免费层（100 Mb，1000 次操作，15 分钟的最小间隔）是免费的。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划包括：IaC 协作、Terraform 模块注册表、ChatOps 集成、使用 Open Policy Agent 的持续资源合规性、通过 SAML 2.0 的 SSO 和公共工作池的访问权：最高 200 分钟/月。
  * [microtica.com](https://microtica.com/) - 启动环境，具有预制的基础设施组件，您可以免费在 AWS 上部署应用程序，并支持您的生产工作负载。免费层包括：1 个环境（在您的 AWS 账户上）、2 个 Kubernetes 服务、每月 100 分钟的构建时间和 20 次每月部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、任务跨机器分发，甚至自动分割 e2e 测试运行，来加速您的 monorepos 在 CI 上的运行。它带有一个免费计划，支持最多 30 个贡献者，并包含丰富的 150k 信用额度。
  * [blacksmith](https://www.blacksmith.sh/) - 为 GitHub Actions 提供托管的性能 runner，每月提供 3,000 分钟的免费时间，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate 是基础设施即代码（IaC）工具（如 Terraform、OpenTofu 和 Terragrunt）的编排和管理平台。对于最多 2 个用户，包括所有功能，是免费的。
  * [Terrateam](https://terrateam.io) -GitOps 第一的 Terraform 自动化，具有 pull 请求驱动的工作流、通过自托管 runner 的项目隔离和分层运行用于有序操作。对于最多 3 个用户是免费的。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) —用于网页、原生移动应用和桌面应用的智能视觉验证。与几乎所有自动化解决方案（如Selenium和Karma）和远程运行器（Sauce Labs、Browser Stack）集成。开源免费。单用户有限的检查点免费套餐，每周limited checkpoints。
  * [Appetize](https://appetize.io) —在基于云的Android手机/平板电脑模拟器和iPhone/iPad模拟器上测试您的Android和iOS应用程序

  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查webhooks。转发到localhost，或从历史记录中回放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的UI，并利用集成工具、组件和设计系统以更快地迭代、更好地设计和简化开发过程。具有无限项目和五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查webhooks和HTTP请求。完全免费，你可以创建无限URL并接收推荐。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证webhooks、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhooks并通过推送通知和电子邮件监视它们。

**[⬆️ 返回顶部](#目录)**

## 安全和公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 全面的应用安全平台，涵盖SCA、SAST、CSPM、DAST、Secrets、IaC、Malware、容器扫描、EOL等。免费计划包括两个用户、扫描10个仓库、1个云、2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 在您的网络中发现受损系统
  * [Altcha.org](https://altcha.org/anti-spam) - 一个使用自然语言处理和机器学习的网站和API反垃圾邮件过滤器。免费计划包括每天每个域名200个请求。
  * [atomist.com](https://atomist.com/) — 更快、更方便地自动化各种开发任务。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — Amazon Web Services（AWS）安全和合规审计和监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) —针对公共云基础设施的高置信度指标（IOC），部分内容可在github（https://github.com/unknownhad/AWSAttacks）上找到。完整列表可通过API获取。
  * [CodeNotary.io](https://www.codenotary.io/) — 一个开源平台，提供不可篡改的证明来验证代码、文件、目录或容器。
  * [crypteron.com](https://www.crypteron.com/) — 一个云优先、开发者友好的安全平台，防止.NET和Java应用程序中的数据泄露。
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单、直观的Web应用程序，用于分析和解码/编码数据，而无需处理复杂的工具或编程语言。就像加密和解密的瑞士军刀。所有功能都可以免费使用，无限制。开源，如果您想自行托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，全生命周期的策略管理，用于创建、部署和管理Open Policy Agent（OPA）授权。
  * [Datree](https://www.datree.io/) — 一个开源的CLI工具，通过确保清单和Helm图表遵循最佳实践和组织策略来防止Kubernetes配置错误。
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项。
  * [DJ Checkup](https://djcheckup.com) — 使用此免费的自动化检查工具扫描Django网站的安全漏洞。从Pony Checkup网站fork而来。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，用于应用程序密钥和配置，支持同步到各种云提供商。免费适用于五个用户，具有基本的访问控制。
  * [Dotenv](https://dotenv.org/) — 同步您的.env文件，快速且安全。停止通过不安全的渠道（如Slack和电子邮件）共享您的.env文件，并且永远不会丢失重要的.env文件。免费适用于最多三个团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 使用自动化的密钥检测和修复，防止将密钥存储在源代码中。扫描您的git仓库以检测350多种类型的密钥和敏感文件 — 适用于个人和25名开发人员以下的团队免费。
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取有关泄露信息的REST API。
  * [hostedscan.com](https://hostedscan.com) — 网站、服务器和网络的在线漏洞扫描器。每月十次免费扫描。
  * [Infisical](https://infisical.com/) — 一个开源平台，允许您在团队和基础设施中管理开发人员密钥：从本地开发到第三方服务的分阶段/生产环境。免费适用于最多五名开发人员。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准，如IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE。
  * [keychest.net](https://keychest.net) - SSL过期管理和证书购买，具有集成的CT数据库。
  * [letsencrypt.org](https://letsencrypt.org/) — 免费的SSL证书颁发机构，所有主要浏览器都信任其证书。
  * [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。免费适用于一个私有项目，开源项目无限制。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 找到并修复您网站的安全漏洞。
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序、配置的安全监控。免费适用于25个用户和30天历史记录。
  * [openapi.security](https://openapi.security/) - 快速检查任何OpenAPI / Swagger-based API的安全性。无需注册。
  * [pixee.ai](https://pixee.ai) - 自动化产品安全工程师，作为一个免费的GitHub bot，提交PR到您的Java代码库以自动解决漏洞。其他语言即将推出！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞，并自动更新。免费适用于一个私有项目，开源项目无限制。
  * [qualys.com](https://www.qualys.com/community-edition) — 找到Web应用程序漏洞，审计OWASP风险。
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告。
  * [ringcaptcha.com](https://ringcaptcha.com/) — 使用电话号码作为ID的工具，免费使用。
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可以在SIEM中丰富域名威胁指标，提供有关域名的全面信息，并改善威胁检测和响应。[这里](https://account.seclookup.com/)免费获取50K次查询。
  * [snyk.io](https://snyk.io) — 可以找到并修复您开源依赖项中的已知安全漏洞。开源项目的无限次测试和修复。私有项目每月限制200次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — 任何SSL Web服务器配置的强烈分析。
  * [SOOS](https://soos.io) - 开源项目的免费、无限的SCA扫描。检测和修复安全威胁，在发布之前保护您的项目。
  * [StackHawk](https://www.stackhawk.com/) 自动化应用程序扫描，遍及您的管道，找到并修复安全漏洞，在它们进入生产之前。单个应用程序的无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费的网站安全检查和恶意软件扫描器。
  * [Protectumus](https://protectumus.com) - 免费的网站安全检查、网站防病毒和服务器防火墙（WAF）适用于PHP。注册用户的免费层中包含电子邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全服务器配置、证书、链等。并不局限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：它旨在供个人研究人员、分析师和刚刚开始学习网络威胁情报的组织使用。免费适用于最多3个用户。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划允许每周进行XSS扫描。
  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码和自动密钥管理来加密和解密数据。免费适用于一个应用程序和每月最多1,000,000次加密。
  * [Virgil Security](https://virgilsecurity.com/) — 实现端到端加密、数据库保护、IoT安全等的工具和服务。免费适用于最多250个用户的应用程序。
  * [Vulert](https://vulert.com) - Vulert持续监控您的开源依赖项以发现新的漏洞，推荐修复，且无需安装或访问您的代码库。开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 单击即可安全扫描您的GraphQL端点。免费，无需登录。

  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一个全面的SSL工具包，提供诸如私钥和CSR生成器、SSL证书解码器、证书匹配器和订单SSL证书等功能。我们提供给用户通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass生成免费SSL证书的能力。 

**[⬆️ 返回顶部](#目录)**

## 身份验证、授权和用户管理

  * [Aserto](https://www.aserto.com) - 应用程序和API的细粒度授权服务。免费使用，最高1000个月活用户和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。包括前端和后端应用的SDK。免费使用，最高1000个月活用户和五个身份提供者。
  * [Auth0](https://auth0.com/) —托管的SSO服务。免费计划包括25,000个月活用户、无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 快速为应用程序添加无密码认证、OTP、2FA、SSO等功能。所有前端功能都包含在内。免费使用，最高5000个月活用户。
  * [Authress](https://authress.io/) —身份验证登录和访问控制，支持任何项目的无限身份提供者，包括Facebook、Google、Twitter等。前1000个API调用免费。
  * [Authy](https://authy.com) - 多设备上的双因素认证（2FA），支持备份。可以替代Google Authenticator。免费使用，最高100次成功认证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权和访问控制，免费使用，最高100个月活主体。
  * [Clerk](https://clerk.com) —用户管理、身份验证、2FA/MFA、预建UI组件用于登录、注册、用户资料等。免费使用，最高10,000个月活用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) —Keycloak身份和访问管理服务。免费使用，最高100个用户和一个领域。
  * [Corbado](https://www.corbado.com/) —为新或现有应用程序添加基于密钥的认证。免费使用，无限月活用户。
  * [Descope](https://www.descope.com/) —高度可定制的AuthN流程，支持无代码和API/SDK方法。免费使用，最高7,500个月活用户，50个租户（最高5个SAML/SSO租户）。
  * [duo.com](https://duo.com/) —网站或应用程序的双因素认证（2FA）。免费使用，最高10个用户，所有认证方法，无限集成，硬件令牌。
  * [Kinde](https://kinde.com/) - 简单、强大的身份验证，可以在几分钟内集成到您的产品中。所有开始所需的功能，最高7,500个月活用户免费。
  * [logintc.com](https://www.logintc.com/) —通过推送通知的双因素认证（2FA），免费使用，最高10个用户，VPN、网站和SSH。
  * [MojoAuth](https://mojoauth.com/) - MojoAuth使得在Web、移动或任何应用程序中实现无密码认证变得容易。
  * [Okta](https://developer.okta.com/signup/) —用户管理、身份验证和授权。免费使用，最高100个月活用户。
  * [onelogin.com](https://www.onelogin.com/) —身份即服务（IDaaS），单点登录身份提供者，云SSO IdP，三个公司应用程序和五个个人应用程序，无限用户。
  * [Ory](https://ory.sh/) - AuthN/AuthZ/OAuth2.0/零信任托管安全平台。开发者账户永久免费，所有安全功能，无限团队成员，200个每日活跃用户，25k/月权限检查。
  * [Permit.io](https://permit.io) - 授权即服务提供商平台，支持RBAC、ABAC和ReBAC，适用于可扩展的微服务，具有实时更新和无代码策略UI。1000个月活用户免费层。
  * [Phase Two](https://phasetwo.io) - Keycloak开源身份和访问管理。免费领域，最高1000个用户，最高10个SSO连接，利用Phase Two的Keycloak增强容器，包括[组织](https://phasetwo.io/product/organizations/)扩展。
  * [SSOJet](https://ssojet.com/) - 添加企业SSO，无需重建认证。免费计划包括无限月活用户，无限组织，2个SSO和2个SCIM连接。
  * [Stytch](https://www.stytch.com/) - 一个全面的平台，提供身份验证和防欺诈API和SDK。免费计划包括10,000个月活用户，无限组织，5个SSO或SCIM连接，1,000个M2M令牌。
  * [Stack Auth](https://stack-auth.com) —不糟糕的开源身份验证。最适合开发者的解决方案，只需五分钟即可开始使用。可以自托管免费，也提供托管的SaaS版本，10k免费月活用户。
  * [SuperTokens](https://supertokens.com/) - 开源用户身份验证，原生集成到您的应用程序中，实现快速开始，同时控制用户和开发者体验。免费使用，最高5000个月活用户。
  * [Warrant](https://warrant.dev/) —托管的企业级授权和访问控制服务，适用于您的应用程序。免费层包括1百万个月API请求和1,000个授权规则。
  * [ZITADEL Cloud](https://zitadel.com) —一个适用于您和支持多租户（B2B）用例的用户和访问管理的即用型解决方案。免费使用，最高25,000个认证请求，所有安全功能（无OTP、无密码、策略等支付墙）。
  * [PropelAuth](https://propelauth.com) —一个可以让您在几行代码内向任何规模的公司销售的解决方案。免费使用，最高200个用户和10k事务性电子邮件（带有“由PropelAuth提供支持”的水印品牌）。
  * [Logto](https://logto.io/) - 开发、保护和管理您的产品的用户身份，用于身份验证和授权。免费使用，最高5,000个月活用户，开源自托管选项可用。
  * [WorkOS](https://workos.com/) - 免费的用户管理和身份验证，最高1百万月活用户。支持电子邮件+密码、社交认证、Magic Auth、MFA等。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用测试平台，确保应用按预期运行。免费计划：一个应用，分析，任意版本和安装，以及反馈收集。
  * [Loadly](https://loadly.io) - iOS和Android应用beta分发服务，提供完全免费的服务，包括无限下载，高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费计划：应用上传，密码保护链接，有效期1天，安装次数限制为10次。
  * [InstallOnAir](https://www.installonair.com) - 通过空中方式分发iOS和Android应用。免费计划：无限上传，私有链接，对于访客有效期2天，对于注册用户有效期60天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用用于测试。免费计划包括一个应用项目，三个应用版本，500 MB存储空间，每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括五个应用，每月50次下载，文件大小限制为100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在 IaaS 上部署预配置应用。管理一个 AWS 微实例免费
  * [Esper](https://esper.io) — 适用于 Android 设备的 MDM 和 MAM，具有 DevOps 功能。一个用户许可证和 25 MB 应用程序存储可免费支持 100 个设备。
  * [jamf.com](https://www.jamf.com/) — 管理 iPads、iPhones 和 Macs，三个设备免费
  * [Miradore](https://miradore.com) — 设备管理服务。跟踪设备集群的更新并安全地管理无限数量的设备。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发人员部署和管理他们的 Web 应用和服务器。每月最多 25 个 Git 部署免费
  * [runcloud.io](https://runcloud.io/) - 重点关注 PHP 项目的服务器管理。最多支持 1 台服务器免费。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，用于轻松管理和部署服务器和网站。一个服务器免费
**[⬆️ 返回顶部](#目录)**

## 消息队列和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，具有存在感、持久性和保证交付的功能。免费计划包括每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — 作为服务的RabbitMQ。小狐狸计划：每月最多1百万条消息、最多20个并发连接、最多100个队列、最多10,000条排队消息、多个节点位于不同可用区。
  * [courier.com](https://www.courier.com/) — 单一API用于推送、应用内、电子邮件、聊天、短信和其他消息渠道，具有模板管理和其他功能。免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 为开发者提供的多渠道通知基础设施，具有预建的应用内收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接到云原生IoT消息代理。免费连接最多100个设备（无需信用卡）永久。
  * [knock.app](https://knock.app) – 为开发者提供的通知基础设施。使用单一API调用发送到多个渠道，如应用内、电子邮件、短信、Slack和推送。免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟内为任何软件添加用户通知。免费计划包括每月10,000条通知+100条短信和自动电话。
  * [Novu.co](https://novu.co) — 开源通知基础设施为开发者提供。简单的组件和API用于管理所有通信渠道：电子邮件、短信、直接、应用内和推送。免费计划包括每月30,000条通知，保留期90天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费用于最多100个同时连接和每天200,000条消息。
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费用于最多20个同时连接和每天100,000个事件。
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)作为服务。全球、AWS、GCP和Azure。永久免费，4k消息大小、50个 활성连接和每月5GB数据。
  * [cloudkarafka.com](https://www.cloudkarafka.com/) - 免费共享Kafka集群，最高5个主题，每个主题10MB数据和28天的数据保留。
  * [pubnub.com](https://www.pubnub.com/) - Swift、Kotlin和React消息，每月1百万笔事务。事务可以包含多条消息。
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC（SFU，MCU）的视频通信API服务，用于构建视频平台。允许实时数据注入、视频布局、录制、功能齐全的托管Web UI（快速入门）或自定义UI包。具有[开发者免费层](https://apiservice.eyeson.com/api-pricing)，每月1,000分钟会议。
  * [webpushr](https://www.webpushr.com/) - Web推送通知 - 最多10,000个订阅者、无限推送通知、浏览器内消息免费。
  * [httpSMS](https://httpsms.com) - 使用Android手机作为SMS网关发送和接收文本消息。每月免费发送和接收最多200条消息。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展且安全的无服务器MQTT代理，您可以在几秒钟内获得。每月1百万会话分钟免费（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 发送推送通知到您的iOS和Android设备。通过API或Webhook轻松集成并保持对警报的完全控制。免费计划：每天50条消息发送到1个设备和1个应用程序。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最高100k日志行，保留24小时
  * [logentries.com](https://logentries.com/) — 每月最高5 GB，保留七天
  * [loggly.com](https://www.loggly.com/) — 单用户免费，200MB/天，保留七天
  * [logz.io](https://logz.io/) — 每天最高1 GB，保留一天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费计划提供50 GB存储空间，15天存储保留和7天搜索。
  * [papertrailapp.com](https://papertrailapp.com/) — 48小时搜索，七天存档，50 MB/月
  * [sematext.com](https://sematext.com/logsene) — 每天最高500 MB，保留七天
  * [sumologic.com](https://www.sumologic.com/) — 每天最高500 MB，保留七天
  * [logflare.app](https://logflare.app/) — 每月最高12,960,000条记录，每应用每月，保留三天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月最高1 GB，保留三天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费1,000用户活动日志，保留一个月，适用于最多5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月最高200 GB摄取，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [crowdin.com](https://crowdin.com/) — 无限制的项目、字符串和协作者适用于开源项目
  * [gitlocalize.com](https://gitlocalize.com) - 对于私有和公共仓库都提供免费和无限制的服务
  * [Lecto](https://lecto.ai/) - 机器翻译API，具有免费层（每请求30次免费，1000个翻译字符每请求）。与Loco Translate Wordpress插件集成。
  * [lingohub.com](https://lingohub.com/) — 最多3个用户免费，开源项目始终免费
  * [localazy.com](https://localazy.com) - 1000个源语言字符串免费，语言、贡献者无限制，初创公司和开源项目优惠
  * [Localeum](https://localeum.com) - 最多1000个字符串，一个用户，语言、项目无限制，免费
  * [localizely.com](https://localizely.com/) — 开源项目免费
  * [Loco](https://localise.biz/) — 最多2000个翻译，翻译者无限制，每个项目10个语言，1000个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限的免费版，适用于最多5个用户，开源项目免费
  * [POEditor](https://poeditor.com/) — 最多1000个字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多100个翻译键，字符串、语言无限制，初创公司优惠
  * [Texterify](https://texterify.com/) - 单个用户免费
  * [Tolgee](https://tolgee.io) - 免费的SaaS服务，翻译数量有限，永久免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 开源项目免费
  * [Translation.io](https://translation.io) - 开源项目免费
  * [Translized](https://translized.com) - 最多1000个字符串，一个用户，语言、项目无限制，免费
  * [webtranslateit.com](https://webtranslateit.com/) — 最多500个字符串免费
  * [weblate.org](https://weblate.org/) — 免费适用于自由项目，字符串源最多10,000个，免费层无限制，自托管版本
  * [Free PO editor](https://pofile.net/free-po-editor) — 对所有人免费

**[⬆️ 返回顶部](#目录)**

## 监控

  * [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监控器，间隔5分钟，并且可以自定义状态页面，即使用于商业用途。通过电子邮件和Telegram享受无限的实时通知，无需信用卡即可开始。
  * [Pingmeter.com](https://pingmeter.com/) - 5个运行时间监控器，间隔10分钟。监控SSH、HTTP、HTTPS和任何自定义TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 免费的APM和监控，适用于您的前端、后端、数据库等，以及免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 免费的24小时指标，应用性能管理代理仅限于一个Java、一个.NET、一个PHP和一个Node.js。
  * [appneta.com](https://www.appneta.com/) — 免费，数据保留1小时。
  * [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的任务控制中心。免费适用于小流量使用（64MB日志）。
  * [assertible.com](https://assertible.com) — 自动化API测试和监控。免费计划适用于团队和个人。
  * [bleemeo.com](https://bleemeo.com) - 免费适用于3台服务器，5个运行时间监控器，无限用户， 无限仪表盘， 无限告警规则。
  * [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查找URL或网站的Core Web Vitals历史记录。
  * [checklyhq.com](https://checklyhq.com) - 开源的E2E/合成监控和深度API监控，适用于开发人员。免费计划包括五个用户和50,000+检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS安全性和配置监控。免费：无限的按需扫描，无限用户，无限存储账户。订阅：自动扫描，API访问等。
  * [cronitor.io](https://cronitor.io/) - cron作业、网站、API等的性能洞察和运行时间监控。免费层包括五个监控器。
  * [datadoghq.com](https://www.datadoghq.com/) — 免费适用于最多5个节点。
  * [deadmanssnitch.com](https://deadmanssnitch.com/) — cron作业监控。一个免费的监控器（snitch），如果您邀请他人注册，则可以获得更多。
  * [downtimemonkey.com](https://downtimemonkey.com/) — 60个运行时间监控器，间隔5分钟。电子邮件、Slack告警。
  * [economize.cloud](https://economize.cloud) — Economize帮助解释云基础设施成本，通过组织云资源来优化和报告。免费适用于每月在Google Cloud Platform上花费的前5,000美元。
  * [elastic.co](https://www.elastic.co/solutions/apm) — JS开发人员的即时性能洞察。免费，数据保留24小时。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观察性平台，集成了指标和日志与Grafana。免费：3个用户，十个仪表盘，100个告警，Prometheus和Graphite中的指标存储（10,000个系列，14天保留），Loki中的日志存储（50 GB日志，14天保留）。
  * [healthchecks.io](https://healthchecks.io) — 监控您的cron作业和后台任务。免费适用于最多20个检查。
  * [Hydrozen.io](https://hydrozen.io) — 运行时间监控和状态页面，免费计划：10个运行时间监控器，5个心跳监控器，1个域监控器和1个状态页面。
  * [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 20个监控器和2个通知渠道（Slack和Discord）永久免费。
  * [inspector.dev](https://www.inspector.dev) - 一分钟内完成的实时监控仪表盘，永久免费层。
  * [instrumentalapp.com](https://instrumentalapp.com) - 美观且易于使用的应用程序和服务器监控，免费适用于最多500个指标和3小时的数据可见性。
  * [keychest.net/speedtest](https://keychest.net/speedtest) - 独立的速度测试和TLS握手延迟测试，针对Digital Ocean。
  * [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费适用于最多5个监控器。
  * [linkok.com](https://linkok.com) - 在线断链检查器，免费适用于小型网站（最多100页），完全免费适用于开源项目。
  * [loader.io](https://loader.io/) — 免费的负载测试工具，具有限制。
  * [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源工具，用于收集实时指标。它是一个正在增长的产品，也可以在GitHub上找到！
  * [newrelic.com](https://www.newrelic.com) — New Relic可观察性平台，旨在帮助工程师创建更完美的软件。从单体应用到无服务器应用，您可以instrument所有内容，然后分析、排除故障和优化整个软件堆栈。免费层提供每月100GB的免费数据摄取，一个免费的完全访问用户和无限的免费主用户。
  * [Middleware.io](https://middleware.io/) - Middleware可观察性平台提供对应用程序和堆栈的完整可见性，因此您可以在规模上监控和诊断问题。他们有一个永久免费计划，适用于开发社区使用，允许最多1M日志事件的日志监控，适用于最多2个主机的基础设施监控和APM。
  * [nixstats.com](https://nixstats.com) - 免费适用于一台服务器。电子邮件通知，公共状态页面，60秒间隔等。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的运行时间监控，cron作业和计划任务的监控。还提供状态页面。前五个检查的间隔为3分钟，免费。免费层通过Slack、Discord和电子邮件发送告警。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国的防火长城阻塞。它通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息来识别DNS污染。
  * [opsgenie.com](https://www.opsgenie.com/) — 强大的告警和值班管理，适用于始终在线的服务。免费适用于最多5个用户。
  * [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括告警，强大的可视化能力和基本报告。免费适用于最多100个传感器。
  * [pagecrawl.io](https://pagecrawl.io/) - 监控网站更改，免费适用于最多6个监控器，每天检查一次。
  * [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，告警和指标。
  * [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。免费适用于一个团队（一个团队指一个值班）。
  * [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。免费适用于最多5个用户。
  * [phare.io](https://phare.io/) - 运行时间监控，免费适用于最多100,000个事件，适用于无限项目和无限状态页面。
  * [pingbreak.com](https://pingbreak.com/) — 现代的运行时间监控服务。检查无限的URL，并通过Discord、Slack或电子邮件接收停机通知。
  * [pingpong.one](https://pingpong.one/) — 高级状态页面平台，带有监控。免费层包括一个公共可定制的状态页面，带有SSL子域。专业计划免费提供给开源项目和非营利组织。
  * [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大的Kubernetes监控。带来自己的Prometheus或安装所有合一的包。免费层包括最多20个Kubernetes节点。通过Slack、Microsoft Teams、Discord等发送告警。与PagerDuty、OpsGenie、VictorOps、DataDog等多种工具集成。
  * [sematext.com](https://sematext.com/) — 免费适用于24小时指标， 无限服务器，十个自定义指标，500,000个自定义指标数据点， 无限仪表盘，用户等。
  * [sitemonki.com](https://sitemonki.com/) — 网站、域、Cron和SSL监控，每个类别最多5个监控器免费。
  * [sitesure.net](https://sitesure.net) - 网站和Cron监控 - 2个监控器免费。
  * [skylight.io](https://www.skylight.io/) — 免费适用于前100,000个请求（仅适用于Rails）。

  * [stathat.com](https://www.stathat.com/) — 可以无限期免费使用十个统计功能
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，具有无限制的免费测试
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，免费监控3个定时器
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS和域名监控。免费监控10个服务器、10个运行时间和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费监控三个位置和20个主要Web服务的数据源
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 为五个网站提供免费监控，60秒间隔，公共状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 面向网络操作、站点可靠性工程和DevOps团队的端到端事件管理、警报、值班管理和响应编排平台。最多五个用户免费。
  * [instatus.com](https://instatus.com) - 10秒内获取漂亮的状态页面。永久免费，拥有无限订阅和无限团队。
  * [Squadcast.com](https://squadcast.com) - Squadcast是一款面向事件管理的软件，旨在帮助您促进SRE最佳实践。最多10个用户免费。
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是一款稳定的运行时间监控器，提供广泛的监控类型：定时任务、关键字、网站、端口和ping。提供每3分钟检查一次的25个运行时间检查的免费服务，通过电话、短信、电子邮件和Webhooks发送警报。
  * [Better Stack](https://betterstack.com/better-uptime) - 运行时间监控、事件管理、值班排班/警报和状态页面合一产品。免费计划包含10个监控器，3分钟检查频率和状态页面。
  * [Pulsetic](https://pulsetic.com) - 10个监控器、6个月的历史运行时间/日志、无限状态页面和自定义域名包含！无限时间和无限电子邮件警报免费。无需信用卡。
  * [Wachete](https://www.wachete.com) - 监控五个页面，每24小时检查一次。
  * [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux和Windows服务器监控：5个免费；状态页面：1个免费 - 移动应用程序、多个通知渠道等等！
  * [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控。提供HTTP监控、基于浏览器的监控、DNS监控、域名监控、状态页面等。免费层包含10个HTTP监控器、1个DNS监控器和一个状态页面。

**[⬆️ 返回顶部](#目录)**

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误追踪，包含截图和点击轨迹。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 免费试用后，每月最多2000个错误。
  * [elmah.io](https://elmah.io/) — Web 开发者的错误日志和可用性监控。开源项目可免费使用小型企业订阅。
  * [Embrace](https://embrace.io/) — 移动应用程序监控。小型团队每年最多1万个用户会话免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3k事件/1用户免费。开源且易于自托管，无限制使用。
  * [GlitchTip](https://glitchtip.com/) — 简单、开源的错误追踪。兼容开源Sentry SDKs。每月1000个事件免费，或可自托管无限制。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、可用性和 cron 监控。小型团队和开源项目免费（每月12000个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观察性和调试平台。Nordic、NXP和Laird设备免费使用100个设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5000个错误，用户无限制，保留30天。
  * [sentry.io](https://sentry.io/) — Sentry 实时跟踪应用程序异常，具有小型免费计划。每月5k个错误/1用户免费，自托管无限制使用。
  * [Axiom](https://axiom.co/) — 存储最多 0.5 TB 的日志，保留 30 天。包含与 Vercel 等平台的集成和高级数据查询，以实现电子邮件/Discord 通知。
  * [Semaphr](https://semaphr.com) — 免费的移动应用程序全部功能开关。
  * [Jam](https://jam.dev) - 一键式开发者友好的错误报告。免费计划，jam无限制。
  * [Whitespace](https://whitespace.dev) – 一键式在浏览器中直接错误报告。免费计划，个人使用录制无限制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 具有拼写容错、相关性和 UI 库的托管搜索解决方案，用于轻松创建搜索体验。免费的“Build”计划包括 1M 文档和每月 10K 次搜索。同时，也提供 [开发者文档搜索](https://docsearch.algolia.com/) 服务，免费使用。
  * [bonsai.io](https://bonsai.io/) — 免费提供 1 GB 内存和 1 GB 存储空间
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏服务，基于 Web 的 UI 小部件/插件，允许您的用户在您的产品中搜索内容、导航、功能等，从而提高可发现性。对于最多 1,000 名月活跃用户，免费使用，命令无限制。
  * [Magny](https://magny.io) - SaaS 服务，帮助实现命令面板（例如内应用搜索），显著减少用户在应用程序中查找内容的时间，提升用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费提供 3 个索引，100K 文档/索引，无法限制全文/矢量/混合搜索，60 天分析
  * [searchly.com](http://www.searchly.com/) — 免费提供 2 个索引和 20 MB 存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小部件和 API，具有自动的 Web 爬虫基于索引。对于最多 50 个子页面，免费提供无限次搜索。

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供免费的数据分析、信息安全、Web开发等课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，专注于JavaScript和Ruby的Web开发课程。
  * [免费专业简历模板和编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供许多经验丰富的专业人士的简历模板，支持克隆、编辑和下载，适配ATS。
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 行业领先专家的免费短期课程，通过一小时或更短的时间内掌握最新的生成式AI工具和技术的实践经验。
  * [LabEx](https://labex.io) - 通过交互式实验室和真实世界项目，开发Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，覆盖从区块链到用户体验设计的所有开发方面。
  * [思科网络学院，技能为所有人](https://skillsforall.com/) - 提供网络安全、网络和Python等主题的免费认证课程。
  * [MIT 开课件](https://ocw.mit.edu/) - MIT 开课件是MIT超过 2,500 门课程的在线出版物，免费与全球学习者和教育者分享知识。在 Youtube 频道 [@mitocw](https://www.youtube.com/@mitocw/featured) 上可以找到相关视频。
  * [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费的在线指南，用于学习基本和高级HTML/CSS、JavaScript和SQL。
  * [Django-tutorial.dev](https://django-tutorial.dev) - 免费的在线指南，用于学习Django作为第一个框架，并为用户撰写的文章提供免费的dofollow反向链接。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费的临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 事务性电子邮件服务，免费发送1000封电子邮件每月，具有无限域名、团队成员、Webhook和消息路由的免费计划。
  * [AnonAddy](https://anonaddy.com) - 开源的匿名电子邮件转发，免费创建无限的电子邮件别名。
  * [Antideo](https://www.antideo.com) — 每小时10个API请求用于电子邮件验证、IP和电话号码验证的免费层次。无需信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9,000封电子邮件，每天300封电子邮件免费。
  * [OneSignal](https://onesignal.com/) — 每月10,000封电子邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费10个Bump电子邮件地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费5个Burner电子邮件地址，1个邮箱，7天邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 新闻稿服务。最多100个订阅者免费。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收电子邮件和事务性发件人，免费10,000封电子邮件每月。
  * [Contact.do](https://contact.do/) — 联系表单链接（bitly用于联系表单）。
  * [debugmail.io](https://debugmail.io/) — 易于使用的测试邮件服务器，适用于开发人员。
  * [DNSExit](https://dnsexit.com/) - 最多2个电子邮件地址在您的域名下免费，100MB的存储空间。IMAP、POP3、SMTP、SPF/DKIM支持。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月最多发送9,000封电子邮件，每天最多300封电子邮件。
  * [EmailOctopus](https://emailoctopus.com) - 最多2,500个订阅者和每月10,000封电子邮件免费。
  * [EmailJS](https://www.emailjs.com/) – 这不是一个完整的电子邮件服务器；这是一个电子邮件客户端，您可以使用它从客户端发送电子邮件，而无需暴露您的凭据，免费层次每月有200个请求，2个电子邮件模板，请求最多50KB，有限的联系人历史记录。
  * [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要针对Nodemailer和EmailEngine用户（但不限于）。这是一个完全免费的非事务性电子邮件服务，消息永远不会被送达。
  * [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用各种域名。每次刷新页面时，电子邮件地址都会刷新。完全免费，不包括任何价格。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证最多200个电子邮件，并检查电子邮件是否是临时的。
  * [Emailvalidation.io](https://emailvalidation.io) - 每月100个免费电子邮件验证。
  * [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 一个德国的临时/一次性邮件生成器。支持10个域名，同时提供无限的地址创建自由（包含广告），但除此之外，没有任何价格。
  * [forwardemail.net](https://forwardemail.net) — 自定义域名的免费电子邮件转发。使用您的域名创建和转发无限数量的电子邮件地址（注意：如果使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work顶级域名，则需要付费）。
  * [Imitate Email](https://imitate.email) - 沙盒电子邮件服务器，用于测试电子邮件功能，适用于构建/qa和ci/cd。免费账户每天可发送15封电子邮件，永久有效。
  * [ImprovMX](https://improvmx.com) – 免费电子邮件转发。
  * [EForw](https://www.eforw.com) – 为一个域名提供免费电子邮件转发。使用您的域名接收和发送电子邮件。
  * [Inboxes App](https://inboxesapp.com) — 创建最多3个临时电子邮件每天，然后在一个方便的Chrome扩展程序中删除它们。适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费的临时/一次性电子邮件收件箱，最多3天的电子邮件自动删除。开源且可自托管。
  * [mail-tester.com](https://www.mail-tester.com) — 测试电子邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试电子邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务。
  * [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面提供服务。
  * [mailchannels.com](https://www.mailchannels.com) - 电子邮件API，具有REST API和SMTP集成，每月最多3,000封电子邮件免费。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时电子邮件地址注册，每小时120个请求（约每月86,400个）。
  * [Mailchimp](https://mailchimp.com/) — 500个订阅者和每月1,000封电子邮件免费。
  * [Maildroppa](https://maildroppa.com) - 最多100个订阅者和无限电子邮件，以及免费的自动化。
  * [MailerLite.com](https://www.mailerlite.com) — 每月1,000个订阅者，12,000封电子邮件免费。
  * [MailerSend.com](https://www.mailersend.com) — 电子邮件API、SMTP，事务性电子邮件每月3,000封免费。
  * [mailinator.com](https://www.mailinator.com/) — 免费的公共电子邮件系统，您可以使用任何收件箱。
  * [Mailjet](https://www.mailjet.com/) — 每月6,000封电子邮件免费（每天200封电子邮件发送限制）。
  * [Mailnesia](https://mailnesia.com) - 免费的临时/一次性电子邮件，自动访问注册链接。
  * [mailsac.com](https://mailsac.com) - 免费的API用于临时电子邮件测试，免费的公共电子邮件托管，发件人捕获，电子邮件到Slack/WebSocket/Webhook（每月1,500个API限制）。
  * [Mailtrap.io](https://mailtrap.io/) — 假的SMTP服务器，用于开发，免费计划具有一个收件箱，100个消息，无团队成员，两次/秒电子邮件发送，无转发规则。
  * [Mail7.io](https://www.mail7.io/) — 免费的临时电子邮件地址，用于QA开发人员。使用网页界面或API即时创建电子邮件地址。
  * [Momentary Email](https://www.momentaryemail.com/) — 免费的临时电子邮件地址。在网站或通过RSS订阅源阅读收到的电子邮件。
  * [Mutant Mail](https://www.mutantmail.com/) – 免费10个电子邮件ID，1个域名，1个邮箱。所有电子邮件ID共用一个邮箱。
  * [Outlook.com](https://outlook.live.com/owa/) - 免费的个人电子邮件和日历。
  * [Parsio.io](https://parsio.io) — 免费的电子邮件解析器（转发电子邮件，提取数据，发送到您的服务器）。
  * [pepipost.com](https://pepipost.com) — 第一个月30,000封电子邮件免费，然后每天前100封电子邮件免费。
  * [Plunk](https://useplunk.com) - 每月3,000封电子邮件免费。
  * [Postmark](https://postmarkapp.com/) - 每月100封电子邮件免费，DMARC每周摘要无限制。
  * [Proton Mail](https://proton.me/mail) - 免费的安全电子邮件账户服务提供商，具有内置的端到端加密。免费1GB存储空间。
  * [Queuemail.dev](https://queuemail.dev) — 可靠的电子邮件发送API。免费层次（每月10,000封电子邮件）。异步发送。使用多个SMTP服务器。阻止列表、日志记录、跟踪、Webhook等。
  * [QuickEmailVerification](https://quickemailverification.com) — 每天验证100个电子邮件免费，包括其他免费API，如DEA检测器、DNS查找、SPF检测器等。
  * [Resend](https://resend.com) - 适用于开发人员的事务性电子邮件API。每月3,000封电子邮件免费，每天100封电子邮件免费，一个自定义域名。
  * [Sender](https://www.sender.net) 最多15,000封电子邮件每月，最多2,500个订阅者。
  * [SendGrid](https://sendgrid.com/) — 每天100封电子邮件和2,000个联系人免费。
  * [Sendpulse](https://sendpulse.com) — 500个订阅者每月，15,000封电子邮件每月免费。
  * [SimpleLogin](https://simplelogin.io/) – 开源的、可自托管的电子邮件别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育人员（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 无限免费的新闻稿服务。开始收费时，您需要支付费用。

  * [外卖](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，使发送电子邮件变得容易。每月500个事务性电子邮件免费。
  * [temp-mail.io](https://temp-mail.io) — 免费的临时电子邮件服务，支持同时发送多个电子邮件和转发
  * [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
  * [Touchlead](https://touchlead.app) - 一个多功能的营销自动化工具，包括潜在客户管理、表单构建和自动化。对于有限数量的潜在客户和自动化免费
  * [trashmail.com](https://www.trashmail.com) - 免费的临时电子邮件地址，支持转发和自动地址过期
  * [Tuta](https://tuta.com/) - 免费的安全电子邮件账户服务提供商，内置端到端加密，无广告，无跟踪。免费1GB存储，一个日历（Tuta也有[付费计划](https://tuta.com/pricing)）。Tuta也是部分[开源](https://github.com/tutao/tutanota)，因此您可以自行托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时电子邮件验证API，包括邮箱确认和一次性电子邮件地址检测；每天25个免费电子邮件验证。
  * [verimail.io](https://verimail.io/) — 批量和API电子邮件验证服务。每月100个免费验证
  * [Zoho](https://www.zoho.com) — 最初是一个电子邮件提供商，但现在提供一套服务，其中一些服务有免费计划。以下是具有免费计划的服务列表：
     - [电子邮件](https://zoho.com/mail) 免费适用于5个用户。每个用户5GB，附件限制25 MB，一个域名。
     - [Zoho Assist](https://www.zoho.com/assist) — Zoho Assist的永久免费计划包括一个同时远程支持许可证和访问5个无人值守计算机许可证，适用于专业和个人使用。
     - [Sprints](https://zoho.com/sprints) 免费适用于5个用户，5个项目和500MB存储。
     - [文档](https://zoho.com/docs) — 免费适用于5个用户，上传限制1 GB，存储5GB。Zoho Office Suite（Writer、Sheets和Show）捆绑。
     - [项目](https://zoho.com/projects) — 免费适用于3个用户，2个项目和10 MB附件限制。同样的计划适用于[ Bugtracker](https://zoho.com/bugtracker)。
     - [连接](https://zoho.com/connect) — 团队协作免费适用于25个用户，三个群组，三个自定义应用，3个板块，3个手册和10个集成，以及频道、事件和论坛。
     - [会议](https://zoho.com/meeting) — 最多3个会议参与者和10个网络研讨会参与者的会议。
     - [Vault](https://zoho.com/vault) — 密码管理适用于个人。
     - [Showtime](https://zoho.com/showtime) — 另一个用于远程培训的会议软件，适用于最多5个参与者。
     - [笔记本](https://zoho.com/notebook) — Evernote的免费替代品。
     - [Wiki](https://zoho.com/wiki) — 免费适用于三个用户，50 MB存储，无限页面，zip备份，RSS和Atom feed，访问控制和可自定义CSS。
     - [订阅](https://zoho.com/subscriptions) — 适用于20个客户/订阅和1个用户的循环计费管理，所有支付托管由Zoho完成。存储最后40个订阅指标。
     - [结账](https://zoho.com/checkout) — 产品计费管理，包括3个页面和最多50个支付。
     - [Desk](https://zoho.com/desk) — 客户支持管理，包括三个代理，私人知识库和电子邮件票据。与[Assist](https://zoho.com/assist)集成，用于一个远程技术人员和5个无人值守计算机。
     - [Cliq](https://zoho.com/cliq) — 团队聊天软件，包括100 GB存储，无限用户，100个用户每个频道和SSO。
     - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
     - [表单](https://zoho.com/forms) - 表单创建器
     - [签名](https://zoho.com/sign) - 纸质签名
     - [调查](https://zoho.com/surveys) - 在线调查
     - [预订](https://zoho.com/bookings) - 预约安排
  * [Maileroo](https://maileroo.com) - 适用于开发者的SMTP中继和电子邮件API。每月5,000封电子邮件，无限域名，免费电子邮件验证，黑名单监控，邮件测试器等。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一个以开发者为中心的功能标志服务，具有无限团队大小、优秀的支持和合理的价格标签。免费计划最多可包含 10 个标志、两个环境、1 个产品和每月 5 百万个请求。
  * [Flagsmith](https://flagsmith.com) - 有信心地发布功能；在 Web、移动和服务器端应用程序中管理功能标志。使用我们的托管 API、部署到自己的私有云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能标志和 A/B 测试提供商，内置贝叶斯统计分析引擎。最多可支持 3 个用户，功能标志和实验数量无限制。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能标志、A/B 测试、分析和应用程序配置，具有 Git 风格的版本控制和同步、内存、本地标志评估。最多可支持 5 个团队成员，功能标志和 A/B 测试数量无限制。
  * [Molasses](https://www.molasses.app) - 强大的功能标志和 A/B 测试。最多可支持 3 个环境，每个环境最多包含 5 个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域功能切换管理平台。免费计划最多可包含 10 个标志、两个环境、无限制请求。SDK、分析仪表盘、发布日历、Slack 通知和所有其他功能都包含在无限免费计划中。
  * [Statsig](https://www.statsig.com) - 一个用于功能管理、A/B 测试、分析和更多的强大平台。其慷慨的免费计划提供无限座位、标志、实验和动态配置，支持每月最多 1 百万个事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志和 A/B 测试。代码作为配置和完全类型的 Typescript SDK。与 Next.js 和 React 等框架强烈集成。慷慨的免费层和廉价的扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 本网站上的字体是其作者的财产，可能是自由软件、共享软件、演示版本或公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器、字体提示和字体提交。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 允许用于商业工作的自由字体。手工选择这些字体并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以轻松快速地通过下载或链接到 Google 的 CDN 安装到网站上。
  * [FontGet](https://www.fontget.com/) - 提供各种可下载的字体，并使用标签整齐地排序。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个不断增长的专业级字体集合，100% 免费用于个人和商业用途。
  * [Befonts](https://befonts.com/) - 提供多种用于个人或商业使用的独特字体。
  * [Font of web](https://fontofweb.com/) - 确定网站上使用的所有字体以及它们的使用方式。
  * [Bunny](https://fonts.bunny.net) 面向隐私的 Google 字体
  * [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体用于个人使用，并且可以输入文本进行快速筛选。
  * [fonts.xz.style](https://fonts.xz.style/) 免费和开源服务，使用 CSS 将字体家族交付到网站。
  * [Fontsensei](https://fontsensei.com/) 开源的 Google 字体，由用户标记，具有 CJK（中文、日文、韩文）字体标记。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 强大的、面向开发者的表单构建工具。可用于构建注册和登录表单、用户入门流程、支付流程、复杂的金融应用程序等。免费计划允许每月最多250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端。支持垃圾邮件过滤、电子邮件通知和自动回复、Webhooks、Zapier、重定向、AJAX或POST等功能。免费计划提供无限表单、20次提交/月，并且带有Form-Data徽标的额外2000次提交。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费计划允许每月250次表单提交。具有友好现代化的GUI，支持与Google Sheets、Airtable、Slack、Email等的集成。
  * [Form.taxi](https://form.taxi/) — HTML表单提交的端点。支持通知、垃圾邮件拦截和GDPR合规数据处理。免费计划适用于基本用途。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/)- 适用于静态网站的易用HTML表单。无需注册账户即可开始使用。免费计划允许每月500次提交，并支持自定义回复邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，50次提交/月，支持垃圾邮件保护、电子邮件通知和拖拽式设计器，可导出HTML。额外功能包括自定义字段规则、团队和与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
  * [formlets.com](https://formlets.com/) — 在线表单，单页表单/月无限，100次提交/月，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子邮件服务，免费计划允许无限表单，每月250次提交，支持客户助理团队。
  * [Formspree.io](https://formspree.io/) — 使用HTTP POST请求发送电子邮件。免费层限制每个表单每月50次提交。
  * [Formsubmit.co](https://formsubmit.co/) — 适用于HTML表单的易用表单端点。永久免费，无需注册。
  * [Formlick.com](https://formlick.com) - Typeform的替代品，提供终身优惠。用户可以创建1个免费表单，接收无限提交。在高级版中，用户可以创建无限表单和无限提交。
  * [getform.io](https://getform.io/) - 设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB文件存储。
  * [HeroTofu.com](https://herotofu.com/) - 表单后端，支持bot检测和加密存档。通过UI将提交转发到电子邮件、Slack或Zapier。使用自己的前端，无需服务器代码。免费计划提供无限表单，每月100次提交。
  * [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费层允许创建无限表单，收集无限提交，具有预建模板、抗垃圾邮件和100MB文件存储。
  * [Tally.so](https://tally.so/) - 99%的功能都是免费的。免费层允许：无限表单，无限提交，电子邮件通知，表单逻辑，收集支付，文件上传，自定义感谢页面等。
  * [Hyperforms.app](https://hyperforms.app/) — 创建表单到电子邮件和更多功能，仅需几秒钟，无需后端代码。个人账户每月提供50次表单提交。
  * [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，适用于静态网站。免费计划包括最多1个网站，每月最多50次提交。
  * [Pageclip](https://pageclip.co/) - 免费计划允许1个网站，1个表单，每月1000次提交。
  * [Qualtrics Survey](https://qualtrics.com/free-account) — 使用此一流工具创建专业的表单和调查。50+专家设计的调查模板。免费账户限制1个活跃调查，100个响应/调查和8个响应类型。
  * [Screeb](https://screeb.app/) - 应用内调查和产品分析，用于解码用户行为。永久免费计划允许500个月活跃用户，无限响应和事件，许多集成，导出和周期性报告。
  * [smartforms.dev](https://smartforms.dev/) - 强大易用的表单后端，适用于您的网站。永久免费计划允许每月50次提交，250MB文件存储，Zapier集成，CSV/JSON导出，自定义重定向，自定义响应页面，Telegram和Slack bot，单个电子邮件通知。
  * [Survicate](https://survicate.com/) — 从所有来源收集反馈，并使用一款工具发送后续调查。使用AI自动分析反馈和提取见解。免费计划包括电子邮件、网站、产品内或移动调查，AI调查创建器和25个月响应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器端代码即可轻松集成HTML表单。用户提交表单后，将向您的注册地址发送一封包含表单内容的电子邮件。
  * [stepFORM.io](https://stepform.io) - 测试和表单构建器。免费计划包括五个表单，每个表单最多3步，50个月响应。
  * [Typeform.com](https://www.typeform.com/) — 在网站上包含美丽设计的表单。免费计划仅允许每个表单最多10个字段，每月100个响应。
  * [WaiverStevie.com](https://waiverstevie.com) - 电子签名平台，具有REST API。可以通过Webhooks接收通知。免费计划在签名文档上加水印，但允许无限信封+签名。
  * [Web3Forms](https://web3forms.com) - 适用于静态和JAMStack网站的联系表单，无需编写后端代码。免费计划允许无限表单，无限域名，每月250次提交。
  * [WebAsk](https://webask.io) - 调查和表单构建器。免费计划包括三个调查/账户，100个月响应，10个调查元素。
  * [Wufoo](https://www.wufoo.com/) - 快速表单，适用于网站。免费计划限制每月100次提交。
  * [formpost.app](https://formpost.app) - 免费、无限表单到电子邮件服务。可设置自定义重定向、自动回复、Webhooks等，均免费。
  * [Formester.com](https://formester.com) - 在您的网站上分享和嵌入独特的表单，无限表单，功能不受计划限制。免费计划每月最多100次提交。
  * [SimplePDF.eu](https://simplepdf.eu/embed) - 在您的网站上嵌入PDF编辑器，并将任何PDF转换为可填写的表单。免费计划允许无限PDF，每个PDF最多3次提交。
  * [forms.app](https://forms.app/) — 创建在线表单，具有强大的功能，如条件逻辑、自动评分计算器和AI。免费计划可收集最多100个响应，嵌入表单到网站，或使用链接。
  * [Qualli](https://usequalli.com) - 应用内调查，适用于移动设备。使用Qualli AI创建完美的问题。免费计划允许最多500个MAU，创建无限表单和触发器。
  * [Sprig](https://sprig.com/) - 1个产品内调查或带有GPT驱动AI分析的调查/月。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集25个总反馈提交。易于与React和Vue组件集成。
  * [Vidhook](https://vidhook.io/) - 使用令人愉悦的调查收集反馈，具有高响应率。免费计划包括1个活跃调查，25个调查响应，自定义模板。

**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [Keywords AI](https://keywordsai.co) - 最好的LLM监控平台。只需两行代码，就可以以一种格式调用200+个LLM。每月有10,000个免费请求和0美元的平台功能！
  * [Portkey](https://portkey.ai/) - 面向Gen AI应用的控制面板，拥有可观察性套件和AI网关。每月最多可免费发送和记录10,000个请求。
  * [Braintrust](https://www.braintrustdata.com/) -针对Gen AI的评估、提示游乐场和数据管理。免费计划每周可提供最多1,000个私有评估行。
  * [Findr](https://www.usefindr.com/) - 可以同时搜索所有应用的通用搜索。允许您使用自己的信息回答问题的搜索助手。免费计划提供无限的统一搜索和5次每日Co-Pilot查询。
  * [ReportGPT](https://ReportGPT.app) - AI强大的写作助手。只要您带来自己的API密钥，该平台就完全免费。
  * [Clair](https://askclair.ai/) - 临床AI参考。学生可以免费访问专业工具套件，包括开放搜索、临床摘要、医药评论、药物相互作用、ICD-10代码和管理。另外，专业套件有免费试用。
  * [Langtrace](https://langtrace.ai) - 能够让开发人员跟踪、评估、管理提示和数据集，并调试与LLM应用程序性能相关的问题。它为任何LLM创建开放遥测标准跟踪，以帮助可观察性，并且可以与任何可观察性客户端一起工作。免费计划每月提供50K跟踪。
  * [LangWatch](https://langwatch.ai) - 帮助AI团队衡量、监测和优化LLM应用程序以实现可靠性、成本效率和性能的LLMOps平台。具有强大的DSPy组件，我们使工程师和非技术团队之间实现无缝合作，以优化和生产化GenAI产品。免费计划包括所有平台功能、每月1k跟踪和1个工作流DSPy优化器。 [#opensource](https://github.com/langwatch/langwatch)
  * [Ultra AI](https://ultraai.app) - 您产品的AI指挥中心。功能包括多个提供商的AI网关、提示管理、缓存、日志、分析、模型回退和用户速率限制。免费的计划每月提供10k+请求和除缓存外的所有功能。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在整个开发和生产生命周期中评估、测试和部署LLM应用程序。 [#opensource](https://github.com/comet-ml/opik/)
  * [Langfuse](https://langfuse.com/) - 帮助团队合作调试、分析和迭代LLM应用程序的开源LLM工程平台。免费计划每月包括50k个观察和所有平台功能。 [#opensource](https://github.com/langfuse/langfuse)
  * [Pollinations.AI](https://pollinations.ai/) -易于使用的免费图像生成AI，具有免费的API，无需注册或API密钥，便于集成到网站或工作流中。 [#opensource](https://github.com/pollinations/pollinations)
  * [Othor AI](https://othor.ai/) - 它是Tableau、Power BI和Looker等热门商业智能解决方案的AI本地快速、简单、安全的替代方案。Othor利用大型语言模型（LLMs）在几分钟内提供自定义商业智能解决方案。Free Forever计划为一个用户提供一个工作区，有五个数据源连接，没有分析限制。 [#opensource](https://github.com/othorai/othor.ai)
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费的AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多种开发需求。请注意，虽然这些模型免费使用，但它们受限速限制。此外，OpenRouter为更高级的需求提供了付费模型，例如Claude、OpenAI、Grok、Gemini和Nova。

**[⬆️ 返回顶部](#目录)**

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — Bootstrap、Bootswatch 和 fontawesome.io 的 CDN 
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容交付。 cdnjs 是一个免费、开源的 CDN 服务，得到超过 11% 的网站信赖，powered by Cloudflare。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google Hosted Libraries 是一个内容分发网络，为最流行的开源 JavaScript 库提供服务
  * [Stellate](https://stellate.co/) - Stellate 是一个快速、可靠的 GraphQL API CDN，适用于两个服务免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管流行的第三方 JavaScript 库，如 jQuery，并使您能够轻松将其添加到 Web 应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的 DDoS 防护和 SSL 证书
  * [Skypack](https://www.skypack.dev/) — 100% Native ES Module JavaScript CDN。每个域名每月 1 百万次请求免费。
  * [raw.githack.com](https://raw.githack.com/) — 一个现代的 **rawgit.com** 替代品，使用 Cloudflare 托管文件
  * [section.io](https://www.section.io/) — 一个简单的方式来启动和管理一个完整的 Varnish Cache 解决方案。据称，一个站点永久免费
  * [statically.io](https://statically.io/) — Git仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片的 CDN
  * [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不失败的 CD。个人使用、一个开发人员、无支持免费
  * [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
  * [weserv](https://images.weserv.nl/) — 一个图像缓存和调整服务。随时随地调整图像，享受全球缓存。
  * [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费的 DDoS 防护
  * [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月 1 TB 和 1 百万个请求免费，免费的 DNS 主机
  * [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最多 5 TB 的免费 CDN 流量，19 个核心 PoPs，1 个域名和通用 SSL。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 使用Python进行Web应用开发，无需其他语言。免费套餐包含无限应用和30秒超时。
  * [appwrite](https://appwrite.io) - 无限项目，不会暂停项目（支持WebSockets），并且包含身份验证服务。免费套餐包含1个数据库、3个存储桶、每个项目5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，免费用于两个项目，功能有限，但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) — 开源、跨平台、移动应用开发工具链，适用于Java/Kotlin开发者。商业用途免费，项目数量无限。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，包含从TypeScript代码自动生成的可视化CMS。内置A/B测试、内容分段和实时分析。适合内容密集和企业电子商务网站。免费使用量为5k页视图/月或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，运行JavaScript、TypeScript和WebAssembly，全球边缘部署。免费套餐包含每天100,000次请求和每月100 GiB数据传输。
  * [domcloud.co](https://domcloud.co) – Linux托管服务，提供CI/CD、GitHub、SSH和MariaDB/Postgres数据库。免费版本包含1 GB存储和1 GB网络/月限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 后端框架，使用静态分析提供自动化基础设施、无样板代码和更多功能。包含免费云托管，适用于爱好者项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 部署Web服务、数据库等，使用Git推送风格工作流，部署在自己的AWS账户上。免费套餐适用于个人GitHub仓库的1名开发者。AWS成本通过AWS账单，但可以使用积分和AWS免费套餐。
  * [gigalixir.com](https://gigalixir.com/) - 提供一个永不休眠的免费实例和一个免费的PostgreSQL数据库，仅限Elixir/Phoenix应用，数据库连接数限制为2，行数限制为10,000，且无备份。
  * [Glitch](https://glitch.com/) — 免费公共托管，包含代码共享和实时协作功能。免费计划限制为1000小时/月。
  * [Lade](https://www.lade.io/) - 面向开发者的云平台。免费套餐包含三个服务，可以是应用或数据库。每个服务包含128 MB RAM和1 GB存储。
  * [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，提供所有必要的功能以支持快速增长。免费计划包含100k服务调用、10k异步任务和100k Redis命令。
  * [pipedream.com](https://pipedream.com) - 面向开发者的集成平台。开发任何基于触发器的工作流。工作流是可以免费运行的代码，无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — 云Python应用托管。初学者账户免费，包含1个Python Web应用，your-username.pythonanywhere.com域名，512 MB私有文件存储，1个MySQL数据库。
  * [ampt.dev](https://getampt.com/) - Ampt允许团队在AWS上构建、部署和扩展JavaScript应用，无需复杂的配置或管理基础设施。免费预览计划包含每小时500次调用、每天2,500次调用和每月50,000次调用。仅付费计划支持自定义域名。
  * [Koyeb](https://www.koyeb.com) - 开发者友好的无服务器平台，用于全局部署应用。使用Git部署，原生自动扩缩，全球边缘网络，内置服务网格和发现。免费实例允许在德国法兰克福或美国华盛顿特区部署Web服务。免费托管Postgres数据库可在德国法兰克福、美国华盛顿特区和新加坡使用。包含512MB内存、2GB存储和0.1 CPU。不需要信用卡即可开始使用。
  * [Napkin](https://www.napkin.io/) - 服务器less函数，包含500MB内存，默认超时15秒，和5,000次免费API调用/月，速率限制为5次/秒。
  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管。Meteor的平台即服务，适用于Meteor应用，包含免费MongoDB共享托管和自动SSL。
  * [Northflank](https://northflank.com) — 使用强大的UI、API和CLI构建和部署微服务、作业和托管数据库。从版本控制和外部Docker注册表无缝扩展容器。免费套餐包含两个服务、两个cron作业和1个数据库。
  * [YepCode](https://yepcode.io) - 连接API和服务的全能平台，使用无服务器环境。它带来了所有NoCode工具的敏捷性和好处，但同时拥有使用编程语言的全部力量。免费套餐包含[1,000 yeps](https://yepcode.io/pricing/)。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，允许快速构建、发布和管理现代API。内置CI/CD、GitHub集成和自动HTTPS。免费计划包含3个项目、1GB出口、每月300分钟构建时间。
  * [Zeabur](https://zeabur.com) - 一键部署服务。免费用于三个服务，包含每月5美元免费积分。
  * [mogenius](https://mogenius.com) -轻松构建、部署和运行服务于Kubernetes。免费套餐支持连接本地Kubernetes与mogenius，允许个人开发者在机器上创建类似生产环境的测试环境。
  * [genezio](https://genezio.com/) - 一个无服务器函数提供商，免费提供每月1百万函数调用、100GB带宽和10个cron作业，仅限非商业或学术用途。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化工作流以连接应用程序后端的多个应用程序。例如，当应用程序中发生事件时，发送Slack消息或添加Google表格行。每月最多5,000个任务免费。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse Platform的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和Web Baas，免费提供1 GB文件存储、每月50,000条推送通知和1,000个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在我们的函数运行时和托管存储中引导您的Python API，免费构建和托管在我们的在线编辑器或本地使用您喜欢的工具。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源以构建和部署企业数字创新。访问一个综合的个人沙盒，包括平台、SDK和一个组件库，可以用来构建和定制应用程序。
  * [connectycube.com](https://connectycube.com) - 无限聊天消息、点对点语音和视频通话、文件附件和推送通知。最多1,000个用户免费。
  * [convex.dev](https://convex.dev/) - 反应式后端服务，托管您的数据（具有关系和可序列化ACID事务的文档）、无服务器函数和WebSockets以将更新流式传输到各种客户端。小项目免费，最高1M记录、5M月度函数调用。
  * [darklang.com](https://darklang.com/) - 结合编辑器和基础设施的托管语言。beta版本期间可访问，计划在beta后提供慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase帮助您构建和运行成功的应用程序。免费的Spark计划提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab、A/B测试、分析、应用程序分发、应用程序索引、云消息传递（FCM）、Crashlytics、动态链接、应用内消息传递、性能监控、预测和远程配置始终免费。
  * [Flutter Flow](https://flutterflow.io) — 在不编写一行代码的情况下构建您的Flutter应用程序UI。还具有Firebase集成。免费计划包括对UI生成器和免费模板的完全访问。
  * [getstream.io](https://getstream.io/) — 在几小时内构建可扩展的应用内聊天、消息传递、视频和音频以及信息流，而不是几周。
  * [hasura.io](https://hasura.io/) — Hasura扩展了您现有的数据库，无论它托管在哪里，并提供了可以安全访问的即时GraphQL API，用于Web、移动和数据集成工作负载。每月1GB数据传输免费。
  * [iron.io](https://www.iron.io/) — 异步任务处理（如AWS Lambda），具有免费层和1个月免费试用。
  * [nhost.io](https://nhost.io) - 面向Web和移动应用程序的无服务器后端。免费计划包括PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
  * [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封电子邮件发送，具有无限联系人和自动预热访问权限。
  * [paraio.com](https://paraio.com) — 后端服务API，具有灵活的身份验证、全文搜索和缓存。一个应用程序、1GB应用程序数据免费。
  * [progress.com](https://www.progress.com/kinvey) — 移动后端，入门计划具有无限请求/秒，1 GB数据存储。企业应用程序支持。
  * [pubnub.com](https://www.pubnub.com/) — 每月最多1百万条消息和100个活跃设备的免费推送通知。
  * [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多1,500万条推送免费。
  * [pushcrew.com](https://pushcrew.com/) — 推送通知服务。最多2,000个订阅者的无限通知。
  * [pusher.com](https://pusher.com/beams) — 每月2,000个活跃用户的免费、无限推送通知。iOS和Android设备的单一API。
  * [quickblox.com](https://quickblox.com/) — 即时消息传递、视频和语音通话以及推送通知的通信后端。
  * [restspace.io](https://restspace.io/) - 配置具有身份验证、数据、文件、电子邮件API、模板等服务的服务器，然后将其组合成管道并转换数据。
  * [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用拖放工具快速构建应用程序。使用点击自定义数据模型。使用Apex代码进一步扩展。使用强大的API与任何内容集成。使用企业级安全性保持保护。使用点击或任何领先的Web框架自定义UI。免费开发者计划提供对完整Lightning平台的访问。
  * [ServiceNow开发者计划](https://developer.servicenow.com/) — 快速构建、测试和部署使工作更好的应用程序。免费实例和对早期预览的访问。
  * [simperium.com](https://simperium.com/) — 即时、自动地在任何地方移动数据，多平台，最大2,500个用户/月的无限发送和存储结构化数据。
  * [Singlebase.cloud](https://singlebase.cloud) — SinglebaseCloud是一个AI驱动的全方位后端平台，用于加速应用程序开发。它提供了向量DB、关系文档DB、身份验证、搜索和存储等工具，旨在简化后端开发。免费/入门计划提供关系文档DB、身份验证、搜索和存储。
  * [stackstorm.com](https://stackstorm.com/) — 应用程序、服务和工作流的事件驱动自动化，免费，无流程、访问控制、LDAP。
  * [streamdata.io](https://streamdata.io/) — 将任何REST API转换为事件驱动的流API。免费计划最多1百万条消息和10个并发连接。
  * [Supabase](https://supabase.com) — 开源的Firebase替代方案，用于构建后端。免费计划提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) — 具有身份验证、配额、监控和分析的API管理。免费云服务。
  * [zapier.com](https://zapier.com/) — 连接您使用的应用程序以自动执行任务。每15分钟5个zap，100个任务/月。
  * [IFTTT](https://ifttt.com) — 自动执行您最喜欢的应用程序和设备。免费2个Applet。
  * [Integrately](https://integrately.com) — 单击即可自动执行繁琐的任务。免费100个任务，15分钟更新时间，5个活跃的自动化，Webhook。
  * [LeanCloud](https://leancloud.app/) — 移动后端。1GB数据存储、256MB实例、每天3K API请求和每天10K推送免费。（API与Parse Platform非常相似）

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一款低代码平台，用于构建具有可定制移动和Web应用的业务流程应用。提供拖拽式界面、离线支持、实时位置跟踪和与各种第三方服务的集成等功能。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表盘。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一款开源低代码平台，用于在几分钟内创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s等。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。集成了15+数据库和任意API。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖拽式应用构建器构建应用。
  * [ReTool](https://retool.com/) — 低代码平台，用于构建内部应用。Retool高度可定制，如果你可以使用JavaScript和API编写代码，你可以在Retool中创建。免费层允许每月最多5个用户，不限应用和API连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一款低代码平台，帮助工程团队和产品经理构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板、运营应用，速度提高10倍。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud是一款强大的开源低代码平台，供开发人员构建内部工具。使用ILLA的组件和动作库，开发人员可以在构建工具时节省大量时间。对于5个团队成员免费。
  * [outsystems.com](https://www.outsystems.com/) — 企业Web开发PaaS，适用于本地或云，免费的"个人环境"提供无限制代码和最多1 GB数据库。
  * [UI Bakery](https://uibakery.io) — 低代码平台，用于快速构建自定义Web应用。支持使用拖拽式界面构建UI，并通过JavaScript、Python和SQL提供高级别的自定义。提供云和自托管解决方案，免费适用于最多5个用户。
  * [Mendix](https://www.mendix.com/) — 企业快速应用开发，提供无限制访问的沙箱环境、支持总用户数、0.5 GB存储和1 GB RAM每应用。同样，Studio和Studio Pro IDE在免费层也是允许的。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用免费内置API，如OpenAI、Anthropic、Firecrawl等。适合构建AI代理/内部工具，并与团队共享。免费层包括对API的完全访问、AI编码助手和每月10,000次执行信用。

**[⬆️ 返回顶部](#目录)**

## 网页托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB的免费网页托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，通过FTP、WebDAV和SSH访问，包括邮箱、邮件列表和应用安装程序。
  * [Awardspace.com](https://www.awardspace.com) — 免费网页托管 + 免费短域名，PHP、MySQL、应用安装程序、邮件发送和无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费，开发人员优先的部署和开发平台，简化基础设施配置，快速设置。
  * [Bubble](https://bubble.io/) — 无需编码，使用视觉编程构建Web和移动应用，带有Bubble品牌的免费服务。
  * [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化网页托管平台，专注于提高可用性和安全性，为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在应用程序平台入门级别上免费构建和部署三个静态网站。
  * [Drive To Web](https://drv.tw) — 从Google Drive和OneDrive直接托管网站。仅支持静态网站，永久免费，每个Google/Microsoft账户可托管一个网站。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个开发人员桌面应用程序，用于本地托管网站和共享它们（实时）。使用其美丽的用户界面、API和/或CLI按照您喜欢的方式工作。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上构建和托管基于Markdown的文档网站。您甚至可以从API定义文件自动生成网站的API参考。网站托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持和许多其他免费主机不提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳的控制面板和50多个免费应用程序的一键式安装。即时设置，无强制广告。
  * [HelioHost](https://heliohost.org) — 非盈利性免费网页托管，具有Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP电子邮件、无限带宽、免费子域名，免费托管1000 MB存储空间，选择升级。
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 部署多达100个静态网站，自定义域名带SSL，100 GB每月带宽，260+ Cloudflare CDN位置。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 支持SFPT访问用于文件上传和下载的网页托管，php可用。
  * [Neocities](https://neocities.org) — 静态托管，1 GB免费存储空间，200 GB带宽。
  * [Netlify](https://www.netlify.com/) — 构建、部署和托管静态网站/应用程序，100 GB数据和100 GB/月带宽免费。
  * [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动DevOps和可伸缩基础设施。面向开发人员和机构免费，不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，版本控制，PDF生成和更多功能
  * [render.com](https://render.com) — 统一云构建和运行应用程序和网站，免费SSL，全球CDN，私有网络，Git自动部署，完全免费的Web服务、数据库和静态Web页面计划。
  * [SourceForge](https://sourceforge.net/) — 免费找到、创建和发布开源软件
  * [surge.sh](https://surge.sh/) — 面向前端开发人员的静态Web发布，自定义域名支持，无限制托管网站。
  * [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页
  * [tilda.cc](https://tilda.cc/) — 一个网站，50个页面，50 MB存储空间，只能使用主预定义块（170个可用块之一），无字体， 无favicon，和无自定义域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，免费SSL，全球CDN，每次`git push`都有唯一的预览URL。适合Next.js和其他静态网站生成器。
  * [Versoly](https://versoly.com/) — SaaS专注的网站构建工具，托管无限制网站，70多个块，5个模板，自定义CSS，favicon，SEO和表单，没有自定义域名。
  * [Qoddi](https://qoddi.com) - 类似于Heroku的PaaS服务，具有开发人员为中心的方法和全面的功能。静态资产、分阶段和开发应用程序的免费级别。
  * [FreeFlarum](https://freeflarum.com/) - 社区驱动的免费Flarum托管，最高支持250个用户（捐赠以从页脚中删除水印）。
  * [MDB GO](https://mdbgo.com/) - 免费托管一个项目，容器TTL为两周，每个项目500 MB RAM，SFTP - 1G磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 一个易于使用的云平台，在其付费服务中，它提供免费托管三个静态网站。
  * [Serv00.com](https://serv00.com/) — 3 GB免费网页托管，每天备份（7天）。支持：Crontab作业，SSH访问，存储库（GIT、SVN和Mercurial），支持：MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
  - [Sevalla](https://sevalla.com/) - 设计用于简化应用程序、数据库和静态网站部署和管理的托管平台，1GB网站限制，100GB免费带宽，600分钟免费构建时间，每个帐户100个网站。

**[⬆️ 返回顶部](#目录)**

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费的公共DNS解析器，由Cloudflare提供，速度快且安全（加密DNS查询）。可用于绕过互联网服务提供商的DNS阻塞，防止DNS查询窃听，[拦截成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。也可以通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：仅仅是一个DNS解析器，而不是DNS托管。
  * [1984.is](https://www.1984.is/product/freedns/) — 免费的DNS服务，包括API和许多其他免费的DNS功能。
  * [cloudns.net](https://www.cloudns.net/) — 免费的DNS托管服务，最高支持1个域名和50条记录。
  * [deSEC](https://desec.io) - 免费的DNS托管服务，支持API，注重安全。使用开源软件，并由[SSE](https://www.securesystems.de/)支持。
  * [dns.he.net](https://dns.he.net/) — 免费的DNS托管服务，支持动态DNS。
  * [Zonomi](https://zonomi.com/) — 免费的DNS托管服务，支持即时DNS传播。免费计划：1个DNS区域（域名），最高10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费的DNS托管服务。
  * [duckdns.org](https://www.duckdns.org/) — 免费的DDNS服务，免费层最高支持5个域名。包括各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) — 免费的DDNS服务，支持[API](https://dynv6.com/docs/apis)，并管理多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费的DNS托管服务。也提供基于许多公开用户贡献的域名的免费子域名。在注册后，通过"子域名"菜单获取免费子域名。
  * [luadns.com](https://www.luadns.com/) — 免费的DNS托管服务，支持3个域名，所有功能都有合理的限制。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费的DNS服务，无域名数量限制。
  * [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，月度免费查询300K。
  * [noip.at](https://noip.at/) — 免费的DDNS服务，无需注册、跟踪、日志或广告。无域名限制。
  * [noip](https://www.noip.com/) — 一个动态DNS服务，允许最多3个免费主机名，每30天确认一次。
  * [sslip.io](https://sslip.io/) — 免费的DNS服务，当使用嵌入IP地址的主机名查询时，返回该IP地址。
  * [zilore.com](https://zilore.com/en/dns) — 免费的DNS托管服务，支持5个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) — 免费的DNS托管服务，支持动态DNS。
  * [zonewatcher.com](https://zonewatcher.com) — 自动备份和DNS变化监控。一个域名免费。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 由华为提供的免费DNS托管服务。
  * [Hetzner](https://www.hetzner.com/dns-console) – Hetzner提供的免费DNS托管服务，支持API。
  * [Glauca](https://docs.glauca.digital/hexdns/) – 免费的DNS托管服务，支持最多3个域名和DNSSEC。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容 AWS S3 - APIs、接口操作、CLI 和其他上传方法，以安全、方便、高效的方式从 IPFS 和 Arweave 网络上传和存储文件。注册用户可以免费获得 6 GB 的 IPFS 存储和 300MB 的 Arweave 存储。任何小于 150 KB 的 Arweave 文件上传都是免费的。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2 云存储。无限时间免费 10 GB (类似 Amazon S3) 对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的 S3 兼容对象存储。无限时免费 5 GB 存储。
  * [Tebi](https://tebi.io/) - S3 兼容对象存储。免费 25 GB 存储和 250GB 出站传输。
  * [Idrive e2](https://www.idrive.com/e2/) - S3 兼容对象存储。免费 10 GB 存储和每月 10 GB 下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容对象存储。免费 15 GB 存储和每月 15 GB 下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，位于其开源数据平台上。单节点，1 CPU，1GB RAM，对于 PostgreSQL 和 MySQL，有 5GB 存储。易于迁移到更广泛的计划或跨云迁移。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是具有无限个表、每个表 1,200 行和每月 1,000 个 API 请求的关系数据库
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 服务，[80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 服务器端 API/后端和 NoSQL 数据库服务，具有函数、Mongdb 查询、键值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划有 5GB 存储和每分钟 60 个 API 调用。包含 2 名开发者，无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。[免费层 CRFREE](https://crate.io/lp-crfree)：具有 2 CPU、2 GiB 内存、8 GiB 存储的单节点。每个组织一个集群，无需支付方式。
  * [Upstash](https://upstash.com/) — 服务器端 Redis，免费层每天最多 10,000 个请求，最大数据库大小 256MB，20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — 为 Redis 提供在线实时监控和管理服务，监控 1 个 Redis 实例免费
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
  * [MemCachier](https://www.memcachier.com/) — 管理的 Memcache 服务，免费适用于最多 25MB、1 个代理服务器和基本分析
  * [scalingo.com](https://scalingo.com/) — 主要是 PaaS，但提供 128MB 到 192MB 免费层的 MySQL、PostgreSQL 或 MongoDB
  * [SeaTable](https://seatable.io/) — 灵活的类似电子表格的数据库，由 Seafile 团队构建。无限表格、2,000 行、1 个月版本控制，最高 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，并且所有计划在测试期间完全免费
  * [StackBy](https://stackby.com/) — 一种结合了电子表格的灵活性、数据库的强大功能以及与您喜欢的商业应用程序的内置集成的工具。免费计划包含无限用户、10 个栈和每个栈 2GB 的附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源的 MySQL 兼容分布式 HTAP RDBMS。TiDB Serverless 提供每月 5GB 行存储、5GB 列存储和 50 million Request Units (RUs) 的免费空间。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是在 Edge 数据库中提供的SQLite 开发体验。Turso 提供一个免费的启动计划，总存储空间为 9 GB，最高 500 个数据库，最高 3 个位置，每月 10 亿行读取，并且支持本地开发和使用 SQLite。
  * [InfluxDB](https://www.influxdata.com/) — 时间序列数据库，写入每 5 分钟最多 3MB，读取每 5 分钟最多 30MB 和 10,000 个基数系列
  * [restdb.io](https://restdb.io/) - 快速且直接的 NoSQL 云数据库服务。使用 restdb.io，您可以获得模式、关系、自动 REST API（类似 MongoDB 的查询）和用于处理数据的多用户管理员 UI。免费计划允许 3 个用户、2,500 条记录和每秒 1 个 API 请求。
  * [cockroachlabs.com](https://www.cockroachlabs.com/free-tier/) — 免费 CockroachDB，最大 5GB 和 1vCPU（[请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/serverless-faqs.html#what-are-the-usage-limits-of-cockroachdb-serverless-beta) 有限）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 管理的本机 Graph DBMS / 分析平台，具有 Cypher 查询语言和 REST API。图大小有限（50k 个节点，175k 个关系）。
  * [Neon](https://neon.tech/) — 管理的 PostgreSQL，总共 0.5 GB 存储，1 个项目，10 个分支， 无限数据库，始终可用的主分支（自动在 5 分钟后暂停），每月总共 20 小时的活动时间（非主分支计算）。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 管理的本机 Graph DBMS，具有 GraphQL API。每天最大 1 MB 数据传输。
  * [Tinybird](https://tinybird.co) - 服务器端托管的 ClickHouse，具有通过 HTTP 的无连接数据摄取，并可以将 SQL 查询作为托管的 HTTP API 发布。免费层无时间限制，10GB 存储 + 每天 1000 个 API 请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 管理的本机 Graph DBMS / 分析平台，具有 SQL 类型的图查询语言和 REST API。一个免费实例，两 vCPU，8GB 内存，50GB 存储，活动后 1 小时休眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的管理免费服务，TerminusDB 是用 Prolog 和 Rust 编写的文档和图数据库。免费适用于开发，企业部署和支持采用付费服务。
  * [filess.io](https://filess.io) - filess.io是一个平台，您可以在此创建最多两个具有以下 DBMS 的数据库，每个数据库最多 10 MB：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [xata.io](https://xata.io) - Xata 是具有内置强大搜索和分析功能的服务器端数据库。单个 API，多个类型安全的客户端库，并针对您的开发工作流优化。永久免费层对业余开发者足够，包括三个 Xata 单元，请参阅网站了解单元定义。
  * [8base.com](https://www.8base.com/) - 8base 是针对 JavaScript 开发者的全栈低代码开发平台，建立在 MySQL 和 GraphQL 之上，并且提供服务器端后端服务。允许您使用 UI 应用程序构建器快速开始构建 Web 应用程序，并且可以快速扩展。免费层包括行：2,500、存储：500、服务器端计算：1Gb/h 和客户端应用程序用户：5。
  * [Nile](https://www.thenile.dev/) — 一个用于 B2B 应用的 Postgres 平台。无限数据库，始终可用，无关闭，总共 1GB 存储，5,000 万个查询令牌，自动扩缩，向量嵌入无限。 

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器和其他路由器

  * [Pinggy](https://pinggy.io) — 使用单个命令为localhost创建公共URL，无需下载。支持HTTPS / TCP / TLS隧道，免费计划的隧道生命周期为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，用于将IIS Express暴露到本地网络或通过隧道暴露到公共URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一种托管的VPN服务，允许您安全地将类似LAN的网络扩展到分布式团队，免费计划允许创建无限网络，每个网络最多5人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的Socket即服务平台，部署Web Socket Server代码时提供wss:// URL，并允许监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公共URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露到公共URL。免费托管版本和[开源](https://github.com/localtunnel/localtunnel)版本。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露到公共URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN启用的类似LAN的网络连接多台计算机。无限对等节点。（Hamachi替代品）
  * [segment.com](https://segment.com/) — 翻译和路由事件到其他第三方服务的中心。100,000个事件/月免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) — 零配置VPN，使用开源的WireGuard协议。支持MacOS、iOS、Windows、Linux和Android设备。个人使用免费计划，支持100台设备和3个用户。
  * [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部（即localhost）目标。还可以通过隧道将私有网络中的服务器暴露到互联网，获取公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
  * [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控Webhook。每月100K请求和100K尝试，保留3天。
  * [Xirsys](https://www.xirsys.com/pricing/) — 无限制STUN使用量 + 500 MB每月TURN带宽，带宽上限，单个地理区域。
  * [ZeroTier](https://www.zerotier.com) — 开源的托管虚拟以太网服务。免费计划支持无限数量的端到端加密网络，每个网络最多25个客户端。支持桌面、移动和网络设备的客户端；网页界面用于配置自定义路由规则和私有网络上的新客户端节点。
  * [LocalXpose](https://localxpose.io) — 反向代理，允许您将localhost服务器暴露到互联网。免费计划的隧道生命周期为15分钟。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布到公共自定义URL，并使用访问控制保护它们。免费计划支持5个服务，一个集群。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费计划包括EU服务器、随机子域名和单用户。
  * [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费计划包括文件服务器、自定义HTTP请求和响应头、基本身份验证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和SCRUM软件，适用于最多5名团队成员
  * [asana.com](https://asana.com/) — 免费用于私人项目和协作者
  * [Backlog](https://backlog.com) — 一个平台包含了团队发布伟大项目所需的一切。免费计划提供1个项目，10名用户和100MB的存储空间。
  * [Basecamp](https://basecamp.com/personal) - 待办事项列表，里程碑管理，类似论坛的消息，文件共享和时间跟踪。最多3个项目，20名用户和1GB的存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 企业内部网和项目管理工具。免费计划有5GB存储空间，适用于无限用户。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图，UML，网络图。免费，最大15名用户/图表，25张表。
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克牌，节省冲刺估计时间。免费，适用于最多5名用户，免费Jira集成，无限视频通话，无限团队，无限会议。
  * [clickup.com](https://clickup.com/) — 项目管理。免费，高级版本具有云存储。移动应用和Git集成可用。
  * [Clockify](https://clockify.me) - 时间跟踪器和时间表应用，允许您跨项目跟踪工作小时数。无限用户，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的架构图表，仅需几分钟，使用Cloudcraft视觉设计器，针对AWS进行优化，具有显示实时数据的智能组件。免费计划具有无限私人图表，适用于单用户。
  * [Codegiant](https://codegiant.io) — 项目管理，包含仓库托管和CI/CD。免费计划提供无限仓库，无限项目和文档，适用于5名团队成员。每月500分钟CI/CD，30000分钟服务器端代码运行，1GB仓库存储。
  * [Confluence](https://www.atlassian.com/software/confluence) - Atlassian的内容协作工具，用于帮助团队高效地协作和共享知识。免费计划，适用于最多10名用户。
  * [contriber.com](https://www.contriber.com/) — 可自定义的项目管理平台，免费入门计划，5个工作空间。
  * [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费，适用于最多3个项目，无限用户，1GB存储空间。
  * [diagrams.net](https://app.diagrams.net/) — 在线图表，存储在Google Drive，OneDrive或Dropbox中。所有功能和存储级别均免费。
  * [freedcamp.com](https://freedcamp.com/) - 任务，讨论，里程碑，时间跟踪，日历，文件和密码管理。免费计划，具有无限项目，无限用户和文件存储。
  * [easyretro.io](https://www.easyretro.io/) — 简单直观的冲刺回顾工具。免费计划有3个公共板块，每个板块每月1个调查。
  * [GForge](https://gforge.com) — 项目管理和问题跟踪工具集，适用于复杂项目，具有自托管和SaaS选项。SaaS免费计划，提供前5名用户免费，开源项目免费。
  * [gleek.io](https://www.gleek.io) — 免费的从描述到图表的工具，适用于开发人员。使用关键字创建非正式的UML类，对象或实体-关系图表。
  * [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL Inspector输出两个GraphQL模式之间的更改列表。每个差异都被精确地解释并标记为破坏性，非破坏性或危险。
  * [huboard.com](https://huboard.com/) — 即时项目管理，适用于您的GitHub问题，免费用于开源项目。
  * [Hygger](https://hygger.io) — 项目管理平台。免费计划提供无限用户，无限项目和板块，100MB存储空间。
  * [Instabug](https://instabug.com) — 一个全面性的移动应用bug报告和应用内反馈SDK。免费计划，适用于1个应用和1名成员。
  * [WishKit](https://wishkit.io) — 为您的iOS/macOS应用收集应用内用户反馈，并根据用户投票优先考虑功能。免费计划，适用于1个应用。
  * [Ilograph](https://www.ilograph.com/)  — 交互式图表，允许用户从多个角度和细节级别查看其基础设施。图表可以用代码表示。免费层具有无限私人图表，适用于最多3名查看者。
  * [Jira](https://www.atlassian.com/software/jira) — 高级软件开发项目管理工具，广泛用于企业环境。免费计划，适用于最多10名用户。
  * [kanbanflow.com](https://kanbanflow.com/) — 基于板块的项目管理。免费，高级版本具有更多选项。
  * [kanbantool.com](https://kanbantool.com/) — 基于Kanban板块的项目管理。免费计划有2个板块和2名用户，不包含附件或文件。
  * [Kitemaker.co](https://kitemaker.co) - 通过所有产品开发阶段协作，并跟踪Slack，Discord，Figma和Github上的工作。无限用户，无限空间。免费计划，适用于最多250个工作项。
  * [Kiter.app](https://www.kiter.app/) - 让任何人组织其工作搜索和跟踪面试，机会和联系人。强大的网页应用和Chrome扩展。完全免费。
  * [Kumu.io](https://kumu.io/)  — 关系图表，具有动画，装饰，过滤，聚类，电子表格导入等功能。免费层允许无限公共项目。图表大小无限。学生免费私人项目。沙盒模式可用，如果您更喜欢不将文件公开在线（上传，编辑，下载，丢弃）。
  * [Linear](https://linear.app/) — 问题跟踪器，具有简化的界面。免费，适用于无限成员，文件上传大小最多10MB，250个问题（不包括存档）。
  * [leiga.com](https://www.leiga.com/) — Leiga是一个使用AI自动管理项目的SaaS产品，帮助您的团队保持专注并释放巨大的潜力，确保您的项目按照计划进行。免费，适用于最多10名用户，20个自定义字段，2GB存储空间，AI限制的视频录制每个视频最多5分钟，自动运行每月每用户20次。
  * [Lucidchart](https://www.lucidchart.com/) - 一个具有协作功能的在线图表工具。免费计划，包含3个可编辑文档，100个专业模板和基本协作功能。
  * [MeisterTask](https://www.meistertask.com/) — 在线任务管理，适用于团队。免费，适用于最多3个项目和无限项目成员。
  * [MeuScrum](https://www.meuscrum.com/en) - 免费的在线Scrum工具，具有Kanban板块。
  * [nTask](https://www.ntaskmanager.com/) — 项目管理软件，允许您的团队协作，规划，分析和管理日常任务。基本计划永久免费，100MB存储空间，5名用户/团队。无限工作空间，会议，任务，时间表和问题跟踪。
  * [Ora](https://ora.pm/) - 敏捷任务管理和团队协作。免费，适用于最多3名用户，文件大小限制为10MB。
  * [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费，适用于无限公共项目和2个私人项目，3名总活跃用户（读写）和无限被动用户（只读）。
  * [plan.io](https://plan.io/) — 项目管理，包含仓库托管和更多选项。免费，适用于2名用户，10个客户，500MB存储空间。
  * [Plane](https://plane.so/) - Plane是一个简单，可扩展，开源的项目和产品管理工具。免费，适用于无限成员，文件上传大小最多5MB，1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费的在线规划扑克牌（估计工具）。
  * [point.poker](https://www.point.poker/) - 在线规划扑克牌（基于共识的估计工具）。免费，适用于无限用户，团队，会议，回合和投票。无需注册。
  * [ScrumFast](https://www.scrumfast.com) - Scrum板块，具有非常直观的界面，免费，适用于最多5名用户。

  * [Shortcut](https://shortcut.com/) - 项目管理平台。最多 10 个用户可永久免费使用。
  * [Tadum](https://tadum.app) - 为定期会议设计的会议议程和会议记录应用，适用于最多 10 名团队成员的团队免费使用。
  * [taiga.io](https://taiga.io/) - 为初创公司和敏捷开发人员设计的项目管理平台，适用于开源软件，免费使用。
  * [Tara AI](https://tara.ai/) - 简单的 sprint 管理服务。免费计划包括无限任务、sprint 和工作空间，无用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) - 视觉项目管理，支持从 Kanban 和 Scrum 到几乎任何业务流程的管理。支持无限用户，最高 1,000 个数据实体，免费使用。{[更多详细信息](https://www.targetprocess.com/pricing/)}。
  * [taskade.com](https://www.taskade.com/) - 实时协作任务列表和团队大纲。免费计划包括一个工作空间、无限任务和项目、1GB 文件存储、1 周项目历史记录以及每次视频会议最多 5 名参与者。
  * [taskulu.com](https://taskulu.com/) - 基于角色的项目管理。最多 5 名用户免费使用。支持 GitHub、Trello、Dropbox 和 Google Drive 集成。
  * [Teaminal](https://www.teaminal.com) - 适用于远程团队的站立会议、回顾会议和 sprint 计划工具。最多 15 名用户免费使用。
  * [teamwork.com](https://teamwork.com/) - 项目管理与团队聊天。最多 5 名用户和 2 个项目免费使用，高级计划可用。
  * [teleretro.com](https://www.teleretro.com/) - 带有破冰游戏、GIF 和表情符号的简单和有趣的回顾会议工具。免费计划包括 3 次回顾会议和无限成员。
  * [testlio.com](https://testlio.com/) - 故障跟踪、测试管理和 beta 测试平台。适用于个人使用，免费。
  * [terrastruct.com](https://terrastruct.com/) - 专为软件体系结构设计的在线图表制作工具。免费阶层最高支持每个图表 4 层。
  * [todoist.com](https://todoist.com/) - 协作和个人任务管理。免费计划包括：5 个活动项目、每个项目 5 名用户、最高 5MB 文件上传、3 个过滤器和 1 周活动历史记录。
  * [trello.com](https://trello.com/) - 基于板块的项目管理。个人板块无限，团队板块 10 个。
  * [Tweek](https://tweek.so/) - 简单的每周待办日历和任务管理。
  * [ubertesters.com](https://ubertesters.com/) - 测试平台、集成和众包测试，2 个项目，5 名成员。
  * [Wikifactory](https://wikifactory.com/) - 产品设计服务，项目、VCS 和问题跟踪。免费计划提供无限项目和协作者，以及 3GB 存储空间。
  * [Yodiz](https://www.yodiz.com/) - 敏捷开发和问题跟踪。最多 3 名用户免费使用，项目无限。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) - 免费的基于云的 YouTrack（InCloud），适用于开源软件项目和个人项目（最多 3 名用户免费使用）。包括时间跟踪和敏捷板。
  * [zenhub.com](https://www.zenhub.com) - 唯一位于 GitHub 内的项目管理解决方案。适用于公开仓库、开源软件和非营利组织，免费使用。
  * [zenkit.com](https://zenkit.com) - 项目管理和协作工具。最多 5 名成员免费使用，5GB 附件。
  * [Zube](https://zube.io) - 项目管理，免费计划适用于 4 个项目和 4 名用户。支持 GitHub 集成。
  * [Toggl](https://toggl.com/) - 提供两种免费的生产力工具。[Toggl Track](https://toggl.com/track/) 适用于时间管理和跟踪应用，免费计划提供无缝的时间跟踪和报告，适合自由职业者。它支持无限制的跟踪记录、项目、客户、标签、报告等。并且 [Toggl Plan](https://toggl.com/plan/) 适用于任务规划，免费计划适用于独立开发者，支持无限任务、里程碑和时间表。
  * [Sflow](https://sflow.io) - sflow.io 是专为敏捷软件开发、营销、销售和客户支持（尤其适用于外包和跨组织合作项目）设计的项目管理工具。免费计划支持最高 3 个项目和 5 名成员。
  * [Pulse.red](https://pulse.red) - 免费的最小化时间跟踪器和时间表应用，适用于项目。

**[⬆️ 返回顶部](#目录)**

## 存储和媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件共享平台，具有无限速度、带宽、文件数量、下载次数等。主要针对Android开发相关文件，如APK构建、自定义ROM和修改等。但似乎也接受其他类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单安全的异地备份托管，用于Borg Backup。10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB免费存储
  * [sync.com](https://www.sync.com/) - 端到端的云存储服务。5 GB免费存储
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多10 GB免费存储
  * [sirv.com](https://sirv.com/) — 智能图像CDN，具有实时图像优化和调整大小。免费套餐包括500 MB存储和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，全球1500+节点。各种图像调整大小、压缩和水印功能。开源插件用于响应式图像、360度图像制作和图像编辑。免费月度计划，包括25GB CDN流量、25GB缓存存储和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 图像上传、强大的操作、存储和交付，用于网站和应用，支持Ruby、Python、Java、PHP、Objective-C等库。免费套餐包括25个月度积分。一个积分等于1,000次图像转换、1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) — 提供API用于在网页中嵌入媒体、响应式图像缩放和从网页中提取元素。免费套餐每月最多5,000个URL，15次请求/秒
  * [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付，免费250个文件、500次转换和3 GB带宽
  * [file.io](https://www.file.io) - 2 GB文件存储。文件在下载后自动删除。REST API用于与存储交互。每分钟一个请求的速率限制。
  * [freetools.site](https://freetools.site/) — 免费的在线工具。转换或编辑文档、图像、音频、视频等。
  * [GoFile.io](https://gofile.io/) - 免费的文件共享和存储平台，可以通过基于Web的UI和API使用。无限文件大小、带宽、下载次数等。但是，当文件变得不活跃（十天内无下载）时，将被删除。
  * [gumlet.com](https://www.gumlet.com/) — 图像和视频托管、处理和流媒体传输，通过CDN提供。提供每月250 GB视频和30 GB图像的免费套餐。
  * [image-charts.com](https://www.image-charts.com/) — 无限图像图表生成，带有水印
  * [Imgbot](https://github.com/marketplace/imgbot) — Imgbot是一个友好的机器人，优化您的图像并节省您的时间。优化的图像意味着在不牺牲质量的情况下减小文件大小。对于开源项目是免费的。
  * [ImgBB](https://imgbb.com/) — ImgBB是一个无限图像托管服务。将图像拖放到屏幕的任何位置。每张图像32 MB限制。上传图像后，获得直接图像链接、BBCode和HTML缩略图。
  * [imgen](https://www.jitbit.com/imgen/) - 免费的无限社交封面图像生成API，无水印
  * [imgix](https://www.imgix.com/) - 图像缓存、管理和CDN。免费套餐包括1,000个源图像、无限转换和100 GB带宽
  * [kraken.io](https://kraken.io/) — 图像优化，用于网站性能作为服务，免费套餐最多1 MB文件大小
  * [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费套餐允许100个键、1KB/键、100次调用/小时
  * [npoint.io](https://www.npoint.io/) — JSON存储，具有协作模式编辑
  * [nitropack.io](https://nitropack.io/) - 自动加速您的网站速度，具有完整的前端优化（缓存、图像和代码优化、CDN）。免费套餐每月最多5,000个页面浏览
  * [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动所有云存储文件，从一个地方。基本套餐提供无限文件传输，250 MB最大文件大小，允许五个加密文件
  * [packagecloud.io](https://packagecloud.io/) —托管包仓库，用于YUM、APT、RubyGem和PyPI。有限的免费套餐和开源套餐可通过请求获得
  * [getpantry.cloud](https://getpantry.cloud/) — 一个简单的JSON数据存储API，非常适合个人项目、黑客马拉松和移动应用！
  * [Pinata IPFS](https://pinata.cloud) — Pinata是上传和管理IPFS文件的最简单方法。我们的友好用户界面和IPFS API使Pinata成为平台、创作者和收藏家的最容易使用的IPFS固定服务。1 GB存储免费，包括API访问。
  * [placekitten.com](https://placekitten.com/) — 一个快速简单的服务，用于获取占位符图像
  * [plot.ly](https://plot.ly/) — 绘制和共享您的数据。免费套餐包括无限公共文件和十个私人文件
  * [podio.com](https://podio.com/) — 您可以使用Podio与最多五个人合作，并尝试基本套餐的功能，除了用户管理
  * [QRME.SH](https://qrme.sh) - 快速、美丽的批量二维码生成器 – 无需登录、无水印、无广告。最多100个URL的批量导出。
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表、图形和二维码
  * [redbooth.com](https://redbooth.com) — 点对点文件同步，免费最多两个用户
  * [resmush.it](https://resmush.it) — reSmush.it是一个免费的API，提供图像优化。reSmush.it已在最常见的CMS（如WordPress、Drupal或Magento）中实现。reSmush.it是使用最广泛的图像优化API，已经处理了超过70亿张图像，仍然是免费的。
  * [Shotstack](https://shotstack.io) - 生成和编辑视频的API，免费最多20分钟的渲染视频每月
  * [tinypng.com](https://tinypng.com/) — API压缩和调整PNG和JPEG图像大小，每月免费500次压缩
  * [transloadit.com](https://transloadit.com/) — 处理文件上传和视频、音频、图像、文档的编码。免费用于开源、慈善和学生，通过GitHub Student Developer Pack。商业应用程序获得2 GB免费用于测试
  * [twicpics.com](https://www.twicpics.com) - 响应式图像作为服务。它提供图像CDN、媒体处理API和前端库，用于自动图像优化。服务免费，最高3GB流量/月。
  * [uploadcare.com](https://uploadcare.com/hub/developers/) — Uploadcare提供基于最先进算法的媒体管道，具有最终的工具包。所有功能都可供开发者免费使用：文件上传API和UI、图像CDN和源服务、适应性交付和智能压缩。免费套餐包括3,000次上传、3 GB流量和3 GB存储。
  * [imagekit.io](https://imagekit.io) – 图像CDN，具有自动优化、实时转换和存储，可以在几分钟内与现有设置集成。免费套餐包括每月最多20GB带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive是一个基于绝对隐私和无妥协安全的零知识文件存储服务。注册并获得10 GB永久免费存储！
  * [degoo.com](https://degoo.com/) – 基于AI的云存储，免费最多20 GB，三个设备，5 GB推荐奖励（90天账户不活动）。
  * [MConverter.eu](https://mconverter.eu/) – 批量转换文件。支持许多文件格式，包括新的格式，如[AVIF](https://mconverter.eu/convert/to/avif/)。从视频中提取所有图像帧。免费最多每天十个100MB文件，分批处理两个文件。

  * [ DocsParse ](https://docsparse.com/) – 由GPT驱动的AI处理PDF、图像，转换为JSON、CSV、EXCEL格式的结构化数据。每月可免费获得30个积分。


**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 一个免费的股票图片、音频和视频的精选列表。
  * [Float UI](https://floatui.com/) - 一个免费的网页开发工具，用于快速创建现代化、响应式的网站，具有时尚的设计，即使对于非设计师也适用。
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供了一个由 Ant Motion 的动画组件构建的模板。它具有丰富的首页模板，下载模板代码包，并可以快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) — 一个完整的编码平台，开发人员和设计师可以在这里合作，构建、记录、发布、扩展和维护设计系统。免费计划允许最多 3 名编辑者合作一个设计系统，观众数量无限制。
  * [BoxySVG](https://boxy-svg.com/app) — 一个免费的可安装 Web 应用程序，用于绘制 SVG 并以 SVG、PNG、JPEG 等格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 一个免费的在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，例如 React、Vue 和 Svelte 的 SVG。
  * [clevebrush.com](https://www.cleverbrush.com/) — 一个免费的图形设计/照片拼贴应用程序。他们还提供付费集成作为组件。
  * [cloudconvert.com](https://cloudconvert.com/) — 将任何内容转换为任何格式。支持 208 种格式，包括视频和 GIF。
  * [CodeMyUI](https://codemyui.com) - 一个手工收集的 Web 设计和 UI 灵感集合，带有代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶级调色板中获取灵感。
  * [coolors](https://coolors.co/) - 颜色调色板生成器。免费。
  * [Branition](https://branition.com/colors) - 手工策划的颜色调色板，适合品牌。
  * [css-gradient.com](https://www.css-gradient.com/) - 一个免费工具，用于快速生成自定义的跨浏览器 CSS 渐变。支持 RGB 和 HEX 格式。
  * [easyvectors.com](https://easyvectors.com/) — EasyVectors.com 是一个免费的 SVG 矢量艺术库。下载最佳矢量图形，完全免费。
  * [figma.com](https://www.figma.com) — 一个在线的协作设计工具，适用于团队；免费版本包括无限文件和观众，最大 2 名编辑者和 3 个项目。
  * [Flyon UI](https://flyonui.com/)- Tailwind CSS 最容易使用的组件库。
  * [framer.com](https://www.framer.com/) - Framer 帮助您迭代和动画界面想法，用于您的下一个应用程序、网站或产品——从强大的布局开始。对于任何验证 Framer 作为专业原型设计工具的人：无限观众，最大 2 名编辑者和 3 个项目。
  * [freeforcommercialuse.net](https://freeforcommercialuse.net/) — FFCU 无忧模型/属性发布股票照片
  * [Gradientos](https://www.gradientos.app) - 使选择渐变变得快速和容易。
  * [Icon Horse](https://icon.horse) – 获取任何网站的最高分辨率 favicon，从我们的简单 API 开始。
  * [Iconoir](https://iconoir.com) – 一个开源图标库，包含数千个图标，支持 React、React Native、Flutter、Vue、Figma 和 Framer。
  * [Icons8](https://icons8.com) — 图标、插图、照片、音乐和设计工具。免费计划提供有限格式的低分辨率资产。使用我们的资产时，请链接到 Icons8。
  * [landen.co](https://www.landen.co) — 生成、编辑和发布美丽的网站和启动页面，用于您的启动公司。所有这些都不需要代码。免费版本允许您拥有一个网站，完全可定制并发布在网络上。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux 是一个原型设计和设计工具。它完全免费和开源。
  * [lensdump.com](https://lensdump.com/) - 免费的云图像托管。
  * [Lorem Picsum](https://picsum.photos/) - 一个免费工具，易于使用，时尚的占位符。我们的 URL 后面添加您所需的图像大小（宽度和高度），您将获得一个随机图像。
  * [LottieFiles](https://lottiefiles.com/) - 设计师、开发人员和更多用户的最小动画格式的最大在线平台。访问 Lottie 动画工具和 Android、iOS 和 Web 的插件。
  * [MagicPattern](https://www.magicpattern.design/tools) — 一个 CSS 和 SVG 背景生成器和工具集合，用于渐变、图案和 blobs。
  * [marvelapp.com](https://marvelapp.com/) — 设计、原型设计和协作，免费计划仅限一个用户和一个项目。
  * [Mindmup.com](https://www.mindmup.com/) — 无限思维导图，免费存储在云端。您的思维导图在任何设备上都可用，立即可用。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一个强大的设计协作和交付工具。免费计划包括三个用户和五个项目，所有功能均可用。
  * [mockupmark.com](https://mockupmark.com/create/free) — 创建社交媒体和电子商务的真实 T 恤和服装模拟，40 个免费模拟。
  * [Mossaik](https://mossaik.app) - 一个免费的 SVG 图像生成器，具有不同的工具，如波浪、博客和图案。
  * [movingpencils.com](https://movingpencils.com) — 快速、基于浏览器的矢量编辑器。完全免费。
  * [Octopus.do](https://octopus.do) — 视觉站点地图构建器。实时构建您的网站结构，并快速与团队或客户分享。
  * [Pencil](https://github.com/evolus/pencil) - 一个使用 Electron 的开源设计工具。
  * [Penpot](https://penpot.app) - 一个基于 Web 的开源设计和原型设计工具。支持 SVG。完全免费。
  * [pexels.com](https://www.pexels.com/) - 免费的股票照片，用于商业用途。具有免费 API，允许您按关键字搜索照片。
  * [photopea.com](https://www.photopea.com) — 一个免费的高级在线设计编辑器，具有 Adobe Photoshop UI，支持 PSD、XCF 和 Sketch 格式（Adobe Photoshop、Gimp 和 Sketch App）。
  * [pixlr.com](https://pixlr.com/) — 一个免费的在线浏览器编辑器，具有与商业编辑器相同的水平。
  * [Plasmic](https://www.plasmic.app/) - 一个快速、易于使用、强大的 Web 设计工具和页面构建器，集成到您的代码库中。构建响应式页面或复杂组件；可选地使用代码扩展；并发布到生产站点和应用程序。
  * [Pravatar](https://pravatar.cc/) - 生成一个随机/占位符假头像，其 URL 可以直接热链接到您的 Web 或应用程序中。
  * [Proto.io](https://www.proto.io) - 创建完全交互式的 UI 原型，无需编码。免费版本在免费试用结束后可用。免费版本包括一个用户、一个项目、五个原型、100MB 的在线存储和 proto.io 应用程序的预览。
  * [resizeappicon.com](https://resizeappicon.com/) — 一个简单的服务，用于调整和管理您的应用程序图标。
  * [Rive](https://rive.app) — 创建和发布美丽的动画到任何平台。永久免费，适用于个人。该服务是一个编辑器，也托管所有图形到他们的服务器上。他们还为许多平台提供运行时，用于运行使用 Rive 制作的表示。
  * [storyset.com](https://storyset.com/) — 使用此工具为您的项目创建不可思议的免费定制插图。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模拟，200 个免费模拟。
  * [tabler-icons.io](https://tabler-icons.io/) — 1500 多个免费的可复制和粘贴的 SVG 可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 生成带有姓名首字母的头像。URL 可以直接热链接到您的 Web 或应用程序中。支持 URL 中的配置参数。
  * [unDraw](https://undraw.co/) - 一个不断更新的美丽 SVG 图像集合，您可以完全免费使用，无需署名。
  * [unsplash.com](https://unsplash.com/) - 免费的股票照片，用于商业和非商业用途（随意使用许可）。

  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划包含三个步骤，最高五步。
  * [Webflow](https://webflow.com) - 拥有动画和网站托管功能的WYSIWYG网站构建工具。免费使用两个项目。
  * [Updrafts.app](https://updrafts.app) - 基于Tailwind CSS设计的WYSIWYG网站构建工具。非商业用途免费使用。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。可创建四个免费的板块。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。免费使用一个项目。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人入胜的独特图形和图像。
  * [Responsively App](https://responsively.app) - 一个免费的开发工具，用于更快、更精确的响应式网页应用开发。
  * [SceneLab](https://scenelab.io) - 在线模拟图形编辑器，拥有不断增长的免费设计模板集合。
  * [xLayers](https://xlayers.dev) -预览和转换Sketch设计文件为Angular、React、Vue、LitElement、Stencil、Xamarin等（免费开源，地址：https://github.com/xlayers/xlayers）。
  * [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大、SEO优化的网页构建工具。前五页免费，自定义域名无限制，所有功能和简单使用。
  * [Mastershot](https://mastershot.app) - 完全免费的浏览器内视频编辑器。无水印，最高1080p导出选项。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松的网页构建工具，包含托管功能。一个网站免费使用。
  * [SVGmix.com](https://www.svgmix.com/) - 拥有30万+免费SVG图标、集合和品牌标志的巨大仓库。内置简单的矢量编辑程序，用于快速文件编辑。
  * [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索和找到适合项目的最佳图标或矢量图，使用各种矢量库。可下载免费的SVG矢量图用于商业用途。
  * [haikei.app](https://www.haikei.app/) - Haikei是一个用于生成独特SVG形状、背景和模式的网页应用，适用于设计工具和工作流程。
  * [Canva](https://canva.com) - 免费的在线设计工具，用于创建视觉内容。
  * [Superdesigner](https://superdesigner.co) - 一系列免费的设计工具，用于创建独特的背景、模式、形状、图像等，只需几次点击。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计和开发平台。TeleportHQ是用于即时创建和发布无头静态网站的协作前端平台。三个免费项目，协作者无限制，免费代码导出。
  * [vector.express](https://vector.express) — 快速、轻松地将AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量图转换。
  * [Vertopal](https://www.vertopal.com) - Vertopal是一个免费的在线平台，用于将文件转换为各种格式，包括开发者转换器，如JPG到SVG、GIF到APNG、PNG到WEBP、JSON到XML等。
  * [okso.app](https://okso.app) - 简洁的在线绘图应用。允许快速创建草图和视觉笔记。支持导出到PNG、JPG、SVG和WEBP。也可以作为PWA安装。免费使用，无需注册。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
  * [Lucide](https://lucide.dev) - 免费的可定制和一致的SVG图标工具包。
  * [Logo.dev](https://www.logo.dev) - 拥有4400万+品牌的公司标志API，调用URL即可使用。前10,000次API调用免费。
  * [MDBootstrap](https://mdbootstrap.com/) - 免费用于个人和商业使用的Bootstrap、Angular、React和Vue UI工具包，包含700+组件、惊人的模板、1分钟安装、详尽的教程和庞大的社区。
  * [TW Elements](https://tw-elements.com/) - 使用Tailwind CSS重建的免费Bootstrap组件，但设计更好，功能更多。
  * [DaisyUI](https://daisyui.com/) -- 免费。“使用Tailwind CSS但写更少的类名”提供按钮等组件。
  * [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计自定义滚动条。
  * [css.glass](https://css.glass/) -- 免费的网页应用，用于创建玻璃态设计，使用CSS。
  * [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS颜色渐变的精选集合，也提供各种生成器用于创建自己的渐变。
  * [iconify.design](https://icon-sets.iconify.design/) -- 拥有100+图标包的集合，统一接口。允许跨包搜索图标，并以SVG或流行网页框架格式导出单个图标。
  * [NextUI](https://nextui.org/) -- 免费。美丽、快速、现代的React和Next.js UI库。
  * [Glyphs](https://glyphs.fyi/) -- 免费，网络上最强大的图标，完全可编辑和开源的设计系统。
  * [ShadcnUI](https://ui.shadcn.com/) -- 美丽设计的组件，可以复制并粘贴到应用中。可访问、可定制、开源。
  * [HyperUI](https://www.hyperui.dev/) -- 免费开源的Tailwind CSS组件。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 点击即可生成一整年的独特图标，完全免费。
  * [Image BG Blurer](https://imagebgblurer.com/) -- 使用图像源作为背景模糊，生成模糊背景框，适用于Notion、Trello、Jira等工具。
  * [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费计划提供无限网站在其域名下，五个网站使用自定义域名，十千次页面浏览/月，2 GB资产存储。
  * [Nappy](https://nappy.co/) -- 为免费使用提供美丽的黑人和棕色人种照片，用于商业和个人用途。
  * [Tailkits](https://tailkits.com/) -- Tailwind模板、组件和工具的精选集合，以及代码、网格、盒子阴影等有用的生成器。
  * [Tailcolors](https://tailcolors.com/) -- 美丽的Tailwind CSS v4颜色调色板。即时预览和复制完美的Tailwind CSS颜色类。
  * [Excalidraw](https://excalidraw.com/) -- 一个免费的在线绘图文档网页，支持免费保存到本地和导出。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [最佳网站] 所有最佳设计网站的展示（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示自己的作品的平台。可以根据UI/UX项目进行筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自真实应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳的登录页面用于设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登录页面 / UI工具包 / 网页截图] Lapa Ninja是一个展示最佳6025个登录页面例子的画廊，免费提供设计师书籍和来自网络的免费UI工具包。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登录页面设计] 经常更新的登录页面截图。包括台式机、平板电脑和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动设备截图] 使用我们超过50,000个完全可搜索的移动应用截图库，节省数小时的UI和UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动设备截图] 探索非洲和世界领先公司的移动设备和Web UI设计。
  * [移动模式](https://www.mobile-patterns.com/) - [移动设备截图] 一个设计灵感库，特点是为设计师、开发人员和产品制造商提供参考的最佳UI UX模式（iOS和Android）。
  * [页面流程](https://pageflows.com/) - [移动设备/网页视频和截图] 许多移动设备和网页应用的完整流程视频。还包括截图。具有很高的可搜索性和索引性。
  * [Screenlane](https://screenlane.com/) - [移动设备截图] 获取灵感并了解最新的Web和移动应用UI设计趋势。可以根据模式和应用进行筛选。
  * [scrnshts](https://scrnshts.club/) - [移动设备截图] 精心挑选的应用商店设计截图的集合。
  * [UI Garage](https://uigarage.net/) - [移动设备/网页截图] 为设计师和开发人员提供每日UI灵感和模式，用于找到灵感、工具和项目的最佳资源。
  * [Refero](https://refero.design/) - [网页截图] 使用标签和可搜索的从优秀网页应用中获取的设计参考集合。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费的开发者计划，月请求量可达30K。
  * [carto.com](https://carto.com/) — 从您的和公开数据创建地图和空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样运作的映射工具。每月可享受五万次免费查询（地图图块、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 地图、空间数据存储、分析、地理编码、路由等API和SDK，涵盖Web、桌面和移动端。每月可享受200万张免费基础地图图块、20,000个非存储地理编码、20,000个简单路线、5,000个驾驶时间计算和5GB免费的图块+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 提供位置发现、场所搜索和上下文感知内容，来自Places API和Pilgrim SDK。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和栅格地图图块、地理编码、场所、路由、孤线API。每天可享受3,000次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天可享受2,500次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月可享受10,000次免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查找API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 提供免费的开发者包，用于路由、路线优化、距离矩阵、地理编码和地图匹配。
  * [here](https://developer.here.com/) — 地图和位置感知应用的API和SDK。每月可享受250,000次免费事务。
  * [locationiq.com](https://locationiq.com/) — 地理编码、地图和路由API。每天可享受5,000次免费请求。
  * [mapbox.com](https://www.mapbox.com/) — 显示地图数据的服务，包括地图、空间服务和SDK。
  * [maptiler.com](https://www.maptiler.com/cloud/) —矢量地图、地图服务和SDK，用于地图可视化。提供每周更新的免费矢量图块和四种地图样式。
  * [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索功能和反向地理编码能力。
  * [nextbillion.ai](https://nextbillion.ai/) - 提供地图相关服务：地理编码、导航（方向、路由、路线优化、距离矩阵）、地图SDK（矢量、静态、移动SDK）。每项服务都有[指定免费配额](https://nextbillion.ai/pricing)。
  * [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap和其他开源地理数据的地理编码API。每天可享受2,500次免费查询。
  * [osmnames](https://osmnames.org/) — 根据相关Wikipedia页面的受欢迎程度排名地理编码搜索结果。
  * [positionstack](https://positionstack.com/) - 为全球场所和坐标提供免费地理编码。个人使用每月可享受25,000次请求。
  * [stadiamaps.com](https://stadiamaps.com/) — 地图图块、路由、导航和其他空间API。非商业用途和测试每天可享受2,500次免费地图查看和API请求。
  * [maps.stamen.com](http://maps.stamen.com/) - 提供免费地图图块和图块托管。
  * [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客。
  * [Geokeo API](https://geokeo.com) - 提供语言修正和其他功能的地理编码API，全球覆盖。每天可享受2,500次免费查询。

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多个 Linux 发行版的软件包构建服务（包括SUSE、EL、Fedora、Debian等）。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，支持Fedora和EL。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian的构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP shell和代码分享站点，支持300+个PHP版本
  * [Android Studio](https://developer.android.com/studio) — Android Studio提供了构建Android应用的最快工具，支持所有类型的Android设备。开源IDE免费提供给所有人，是最好的Android应用开发工具。支持Windows、Mac、Linux和ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) — 一个开源IDE，用于在Android设备上开发真实的、基于Gradle的Android应用。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/) — 协作设计API，支持即时API模拟和生成文档（免费提供无限API蓝图和无限用户，包括一个管理员账户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是一款流行且可扩展的macOS编辑器。免费模式提供了一套[强大的核心功能](https://www.barebones.com/products/bbedit/comparison.html)和升级到高级功能的途径。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的集合。这是一个免费的公共服务。
  * [BlueJ](https://bluej.org) — 一个免费的Java开发环境，专为初学者设计，全球数百万人使用。由Oracle提供支持，具有简单的GUI界面，帮助初学者。
  * [Bootify.io](https://bootify.io/) - Spring Boot应用生成器，支持自定义数据库和REST API。
  * [Brackets](http://brackets.io/) - Brackets是一款开源文本编辑器，专门为网页开发设计。它轻量、易用且高度可定制。
  * [cacher.io](https://www.cacher.io) — 代码片段组织器，支持标签和100+种编程语言。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
  * [Cody](https://sourcegraph.com/cody) - 免费的AI编码助手，可以编写（代码块、自动完成、单元测试）、理解（整个代码库的知识）、修复和查找代码。支持VS Code、JetBrains和在线使用。
  * [codiga.io](https://codiga.io/) — 编码助手，允许您直接在IDE中搜索、定义和重用代码片段。免费提供给个人和小型组织。
  * [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，支持类别、搜索和标签。免费且无限制。
  * [cocalc.com](https://cocalc.com/) — （以前的SageMathCloud，位于cloud.sagemath.com）— 云端协作计算。浏览器访问完整的Ubuntu，内置协作和大量免费软件，用于数学、科学、数据科学，预安装：Python、LaTeX、Jupyter Notebook、SageMath、scikitlearn等。
  * [code.cs50.io](https://code.cs50.io/) - CS50的Visual Studio Code是一个位于code.cs50.io的网页应用，适用于学生和教师。
  * [codepen.io](https://codepen.io/) — CodePen是前端网页开发的游乐场。
  * [codesandbox.io](https://codesandbox.io/) — React、Vue、Angular、Preact等的在线游乐场。
  * [Components.studio](https://webcomponents.dev/) - 在隔离环境中编码组件，可视化它们，测试它们，并在npm上发布它们。
  * [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的IDE，支持多语言，适用于开发团队。开源，社区驱动。Red Hat托管的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)访问。
  * [fakejson.com](https://fakejson.com/) — FakeJSON帮助您快速生成假数据，使用其API。发出API请求，描述您想要什么和如何想要它。API以JSON格式返回所有内容。加速想法的上市过程，假装直到您成功。
  * [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏。免费层包括每天5个VM。
  * [GitPod](https://www.gitpod.io) — 即时、可用的开发环境，适用于GitHub项目。免费层包括每月50小时。
  * [ide.goorm.io](https://ide.goorm.io) goormIDE是基于云的完整IDE。支持多语言，Linux容器通过功能齐全的基于Web的终端，端口转发，自定义URL，实时协作和聊天，共享链接，Git/Subversion支持。还有很多其他功能（免费层包括每个容器1GB RAM和10GB存储，5个容器槽）。
  * [JDoodle](https://www.jdoodle.com) — 在线编译器和编辑器，支持60多种编程语言，免费计划包括每天200次REST API代码编译。
  * [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE和部署工具（也称为[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。免费许可证适用于学生、教师、开源和用户组。
  * [jsbin.com](https://jsbin.com) — JS Bin是另一个前端网页开发的游乐场和代码分享站点。它还支持Markdown、Jade和Sass。
  * [jsfiddle.net](https://jsfiddle.net/) — JS Fiddle是前端网页开发的游乐场和代码分享站点，支持协作。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 一些返回JSON格式假数据的REST API端点。源代码也可用，如果您想在本地运行服务器。
  * [Lazarus](https://www.lazarus-ide.org/) — Lazarus是一个Delphi兼容的跨平台IDE，用于快速应用开发。
  * [MarsCode](https://www.marscode.com/) - 一个免费的AI驱动的云端IDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 一个用于生成假JSON数据的微型API模拟微服务。
  * [mockable.io](https://www.mockable.io/) — Mockable是一个简单的可配置服务，用于模拟RESTful API或SOAP Web服务。这个在线服务允许您快速定义REST API或SOAP端点，并返回JSON或XML数据。
  * [mockaroo](https://mockaroo.com/) — Mockaroo让您可以生成真实的测试数据，格式包括CSV、JSON、SQL和Excel。您还可以为后端API创建模拟。
  * [Mocklets](https://mocklets.com) - 一个基于HTTP的模拟API模拟器，帮助模拟API以实现更快的并行开发和更全面的测试，具有终身免费层。
  * [Paiza](https://paiza.cloud/en/) — 在浏览器中开发Web应用，无需设置任何东西。免费计划提供一个服务器，24小时生命周期，4小时运行时间，每天，2个CPU核心，2GB RAM，1GB存储。
  * [Prepros](https://prepros.io/) - Prepros可以编译Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript和TypeScript，重新加载浏览器，并使开发和测试网站变得容易，因此您可以专注于使其完美。您还可以只需几次点击即可添加自己的工具。
  * [Replit](https://replit.com/) — 一个基于云的编码环境，支持各种编程语言。
  * [SoloLearn](https://code.sololearn.com) — 一个基于云的编程游乐场，非常适合运行代码片段。支持各种编程语言。运行代码不需要注册，但在平台上保存代码时需要注册。还提供免费课程，适用于初学者和中级编码者。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云端代码IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于NodeJs的前端和后端框架。创建新项目的快捷链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text是一款流行、多功能且高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 重新定义和优化代码编辑器，用于构建和调试现代Web和云应用。由Microsoft开发。

  * [VSCodium](https://vscodium.com/) - 一个社区驱动的、无遥测/跟踪、自由许可的二进制分发版Microsoft的编辑器VSCode
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件跟踪你的编码活动，提供量化自我指标，免费计划有限
  * [Wave Terminal](https://waveterm.dev/) - Wave是一个开源、跨平台的终端，支持无缝工作流程，可以内联渲染任何内容，保存会话和历史记录，基于开源网络标准，支持MacOS和Linux
  * [WebComponents.dev](https://webcomponents.dev/) — 在浏览器中提供IDE，用于在隔离环境中编码Web Components，包含58个模板，支持故事和测试
  * [PHPSandbox](https://phpsandbox.io/) — PHP的在线开发环境
  * [WebDB](https://webdb.app) - 免费、高效的数据库IDE，包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等功能
  * [Zed](https://zed.dev/) - Zed是来自Atom和Tree-sitter创造者的高性能、多人编码编辑器
  * [OneCompiler](https://onecompiler.com/) - 支持70多种语言（包括Java、Python、C++、JavaScript）的在线编译器
  

**[⬆️ 返回顶部](#目录)**

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观察性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，帮助您将客户数据从数据仓库同步到 CRM、营销和支持工具。免费层提供一个目标来同步数据。
  * [Avo](https://avo.app/) — 简化的分析发布工作流程。单一来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观察性，以捕获所有数据问题在发布之前。免费适用于两个工作空间成员和 1 小时的数据可观察性回顾。
  * [Branch](https://www.branch.io) — 移动分析平台。免费层提供最多 10K 移动应用用户，具有深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息，作为不同类型的数据源（Git、Github 和 Gitlab）。免费层包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 和运营分析平台。从数据仓库同步 10 个字段到 60+ SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划适用于一个网站，具有 3000 次查看分析。
  * [Databox](https://databox.com) — 通过组合其他分析和 BI 平台的商业洞察和分析。免费计划提供 3 个用户、仪表板和数据源，11M 历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 2,000 次页面查看，适用于 1 个网站
  * [amplitude.com](https://amplitude.com/) — 每月 1 百万事件，最高 2 个应用
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源的 Web 分析平台，作为托管服务（免费用于非商业用途）或自托管应用程序提供。它旨在提供易于使用和有意义的隐私友好 Web 分析，作为 Google Analytics 或 Matomo 的替代品。免费层适用于非商业用途，包括无限网站、六个月的数据保留和 100k 次页面查看/月。
  * [Google Analytics](https://analytics.google.com/) — Google Analytics
  * [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好 Google Analytics 替代品。免费计划允许每月 20k 次页面查看，无需信用卡。
  * [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流程
  * [getinsights.io](https://getinsights.io) - 关注隐私的、无 cookie 的分析，免费适用于每月最高 3k 事件。
  * [heap.io](https://heap.io) — 自动捕获 iOS 或 Web 应用程序中的每个用户操作。免费适用于每月最高 10K 会话。
  * [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天 2000 次页面查看，每天 100 次快照（最大容量：300）。三个快照热图可以存储 365 天。无限团队成员。应用内和独立调查、反馈小部件带有屏幕截图。免费层允许创建 3 个调查和 3 个反馈小部件，每月收集 20 个响应。
  * [Keen](https://keen.io/) — 自定义分析用于数据收集、分析和可视化。1,000 次事件/月免费
  * [Yandex.Datalens](https://datalens.yandex.com/) — Yandex Cloud 数据可视化和分析服务。该服务免费提供，无用户和请求数量限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) — 无限制的免费分析
  * [Mixpanel](https://mixpanel.com/) — 每月 100,000 个跟踪用户，数据历史和席位无限制，US 或 EU 数据驻留
  * [Moesif](https://www.moesif.com) — REST 和 GraphQL 的 API 分析。（每月免费最高 500,000 次 API 调用）
  * [optimizely.com](https://www.optimizely.com) — A/B 测试解决方案，免费入门计划，一个网站，1 个 iOS 和 1 个 Android 应用
  * [Microsoft PowerBI](https://powerbi.com) — Microsoft 的商业洞察和分析。免费计划提供有限的使用，1 百万用户许可。
  * [Row Zero](https://rowzero.io) - 极快、连接的电子表格。直接连接到数据数据库、S3 和 API。导入、分析、图形和共享数百万行数据。三个免费（永久）的工作簿。
  * [sematext.com](https://sematext.com/cloud/) — 免费适用于每月最高 50 K 操作，1 天数据保留，无限仪表板、用户等。
  * [Similar Web](https://similarweb.com) — Web 和移动应用程序分析。免费计划提供每个指标 5 个结果，1 个月的移动应用程序数据和 3 个月的网站数据。
  * [StatCounter](https://statcounter.com/) — 网站查看者分析。免费计划适用于 500 个最近的访客分析。
  * [Statsig](https://statsig.com) - 全面的分析、功能标志和 A/B 测试平台。免费适用于每月最高 1m 计量事件。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建并使 Tableau 为您的组织完美工作。免费开发者计划提供个人开发沙盒许可，用于 Tableau Online。版本是最新的预发布版本，因此数据开发人员可以测试该平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实人群中测试设计和模拟，并跟踪访客。免费适用于一个用户，无限测试
  * [woopra.com](https://www.woopra.com/) — 免费用户分析平台，500K 操作，90 天数据保留，30+ 一键式集成。
  * [counter.dev](https://counter.dev) — 简单且隐私友好的 Web 分析。免费或付款您想要的捐赠。
  * [PostHog](https://posthog.com) - 全面的产品分析套件，免费适用于每月最高 1m 跟踪事件。还提供无限的应用内调查，250/月响应。
  * [Uptrace](https://uptrace.dev) - 分布式跟踪工具，帮助开发人员找出故障并发现性能瓶颈。具有免费计划，提供开源项目的免费个人订阅，并具有开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity 是一个免费、易于使用的工具，捕获真实用户如何使用您的网站。
  * [Beampipe.io](https://beampipe.io) - Beampipe 是简单、关注隐私的 Web 分析。免费适用于最高 5 个域和 10k 每月页面查看。
  * [Aptabase](https://aptabase.com) — 开源、关注隐私、简单的移动和桌面应用程序分析。适用于 Swift、Kotlin、React Native、Flutter、Electron 等的 SDK。免费适用于每月最高 20,000 事件。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，并促进无缝协作。将其部署到生产环境中，具有真实流量，或在不编写代码的情况下将分析覆盖添加到您的回归测试中。
  * [LogSpot](https://logspot.io) - 全面的 Web 和产品分析平台，包括可嵌入的分析小部件和自动机器人（Slack、Telegram 和 Webhooks）。免费计划包括每月 10,000 事件。
  * [Umami](https://umami.is/) - 简单、快速、关注隐私、开源的 Google Analytics 替代品。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费、轻量级、关注隐私的 Google Analytics 替代品。无限页面查看、无限访客、无限页面热图和目标跟踪。免费适用于最高 3 个域，600 个会话回放/域。
  * [AppFit](https://appfit.io) - AppFit 是一个全面的分析和产品管理工具，旨在促进分析和产品更新的无缝跨平台管理。免费计划包括每月 10,000 事件、产品日记和每周洞察。

  * [Peasy](https://peasy.so) - Peasy是一种轻量级、以隐私为重点的网站和产品分析工具。免费计划包括每月3,000个事件。
 
**[⬆️ 返回顶部](#目录)**

## 访客会话记录

  * [Reactflow.com](https://www.reactflow.com/) — 每个网站：1,000页视图/天，三个热力图，三个小部件，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，具有用于错误复制的开发工具，实时支持的实时会话，以及产品分析套件。 每月1,000次会话，访问所有功能，保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，保留30天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) —每月1,000次会话，数据保留一个月，三个用户席位。更多信息，请参阅[这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个网站：每月1,050页视图，无限热力图，数据保留三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 为一个网站免费提供2,500次会话/月
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，“无流量限制”，无项目限制，无抽样
  * [mouseflow.com](https://mouseflow.com/) — 为一个网站每月免费提供500次会话
  * [mousestats.com](https://www.mousestats.com/) — 为一个网站每月免费提供100次会话
  * [smartlook.com](https://www.smartlook.com/) — Web和移动应用程序的免费套餐（每月1,500次会话），三个热力图，一个漏斗，1个月数据历史记录
  * [howuku.com](https://howuku.com) — 跟踪用户交互，参与度和事件。最高5,000次访问/月免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录和观看访问者如何使用您的网站或应用程序。小项目无限时间免费

**[⬆️ 返回顶部](#目录)**

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询JSON API。每月100个API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证的免费、快速、可靠的JSON API。每月1000个请求

**[⬆️ 返回顶部](#目录)**

## 支付和计费集成

  * [Qonversion](http://qonversion.io/) - 跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，以优化内购和盈利。支持 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 web。每月跟踪收入免费至 10,000 美元。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，以扩大全球业务并进入新市场（购买力平价）。免费计划包括每月 7,500 个 API 请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和内置盈利工具，适用于 iOS、Android、Stripe 和 Paddle。每月收入免费至 10,000 美元。
  * [Adapty.io](https://adapty.io/) – 移动应用内订阅集成的一站式解决方案，开源 SDK 支持 iOS、Android、React Native、Flutter、Unity 或 web 应用。每月收入免费至 10,000 美元。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法定货币兑换率。免费层每月提供 10,000 次调用积分。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币兑换率。免费 DEVELOPER 计划每月提供 1,000 次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币兑换率和历史数据。演示 API 每分钟有 30 次调用限制，月度上限为 10,000 次调用。
  * [CurrencyApi](https://currencyapi.net/) — 提供实时货币兑换率，包括物理货币和加密货币，数据格式为 JSON 和 XML。免费层每月提供 1,250 次 API 请求。
  * [currencylayer](https://currencylayer.com/) — 为业务提供可靠的汇率和货币转换，免费计划每月提供 100 次 API 请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 一个易于使用的货币转换 JSON API。免费层每天更新一次，限制为每月 1,500 次请求。
  * [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防止支付欺诈和退款。免费 Micro 计划每月提供 500 次查询。
  * [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史兑换率。免费层需要归属。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过使用基于的计费生成 API 收入。连接到 Stripe、Chargebee 等。免费层每月提供 30,000 次事件。
  * [Nami ML](https://www.namiml.com/) - 完整的应用内购买和订阅平台，包括无代码支付墙、CRM 和分析，适用于 iOS 和 Android。所有基本功能免费，适用于运行 IAP 业务。
  * [RevenueCat](https://www.revenuecat.com/) — 提供托管后端用于应用内购买和订阅（iOS 和 Android）。免费至每月 2,500 美元的跟踪收入。
  * [vatlayer](https://vatlayer.com/) — 实时 VAT 号码验证和 EU VAT 率 API，免费每月提供 100 次 API 请求。
  * [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据 API。免费计划每月提供 300 次请求，每分钟 10 次请求，用于私人使用。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库， 为团队提供30个免费的私有仓库来构建和存储Docker镜像
  * [容器注册表服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案，免费版本提供1 GB的私有仓库存储。
  * [Docker Hub](https://hub.docker.com) — 一个免费的私有仓库和无限公共仓库来构建和存储Docker镜像
  * [玩转Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的Docker学习平台。
  * [quay.io](https://quay.io/) — 使用无限免费公共仓库构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名和短暂的Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云。Vagrant box 托管。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个替代的公共 box 索引

**[⬆️ 返回顶部](#目录)**

## 开发者博客网站

  * [BearBlog](https://bearblog.dev/) - 极简主义的，基于Markdown的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员分享想法和互相帮助成长的平台。
  * [Hashnode](https://hashnode.com/) — 为开发者提供的无忧博客软件。
  * [Medium](https://medium.com/) — 更深思熟虑地思考对你来说重要的事情。
  * [AyeDot](https://ayedot.com/) — 免费以现代多媒体短格式Miniblogs的形式与世界分享你的想法、知识和故事。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，帮助您从网站的受众中建立活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个轻量级的评论小部件，建立在GitHub问题之上。使用GitHub问题用于博客评论、Wiki页面等！
  * [Disqus](https://disqus.com/) - Disqus是一个网络社区平台，被 网站遍布全球数十万个网站所使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，“一个管理员在几个域名上拥有完全的控制权，按能力付费”
  * [IntenseDebate](https://intensedebate.com/) - 一个功能丰富的评论系统，适用于WordPress、Tumblr、Blogger和其他许多网站平台。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 一个基于 Aws Lambda 和 Chrome 的截图 API，支持全页截图、捕获时序和视口尺寸。
  * [microlink.io](https://microlink.io/) – 可以将任何网站转换为数据，例如元标签归一化、美化链接预览、网页抓取能力或截图服务。每天免费 250 个请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 截图 API 使用简单的 API 调用来生成任意网站的截图。支持扩展，托管在 Google Cloud 上。每月提供 100 个免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 可以捕获任意网站的高度可定制的快照。免费 100 个快照/月
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 可以捕获 100 个快照/月，支持 png、gif 和 jpg 格式，包括全长截图，不仅仅是主页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费套餐每天最多 500 页。自 2017 年起提供免费套餐。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名智能 API 服务。免费 100 个请求/月。
  * [Screenshots](https://screenshotson.click) — 您的截图 API，具有高度可定制的截图选项。免费 100 个截图/月。

**[⬆️ 回到顶部](#目录)**

## Flutter相关和在非Mac设备上构建IOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代的在线 Flutter IDE，也是创建、调试和构建跨平台项目的最佳场所。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一个完全托管的移动应用 CI/CD。您可以使用基于 GUI 的 CI/CD 工具构建、测试和部署应用。免费层提供每月 500 免费分钟和一个带有 2.3 GHz 和 8 GB RAM 的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放界面，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的x86虚拟机，能够运行Linux和Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个支持网络的OpenRISC虚拟机，能够运行Linux。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，能够直接在浏览器中运行Linux和其他操作系统。
**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流来帮助实施隐私保护设计，使组织符合GDPR和其他法规。免费版本仅限于较小的团队和SaaS版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，涵盖从GDPR代表到cookie标签的所有内容。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) -隐私和cookie政策以及同意管理。免费版本提供有限的隐私和cookie政策，以及cookie标签。
  * [Cookiefirst](https://cookiefirst.com/) -Cookie标签、审计和多语言同意管理解决方案。免费版本提供一次扫描和单个标签。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，访客数量有限。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费版本包括核心同意管理功能，他们还为经过验证的开源项目提供更高级的免费计划。

**[⬆️ 返回顶部](#目录)**

## 杂项

  * [BackgroundStyler.com](https://backgroundstyler.com) - 在社交媒体上创建代码、文本或图像的美观截图。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件，可作为漂亮的图像（例如用于 Twitter 或 Facebook 发帖）或链接（例如用于聊天或论坛）。
  * [Blynk](https://blynk.io) — 一种具有 API 的 SaaS，用于控制、构建和评估 IoT 设备。包含 5 个设备的免费开发计划、免费云和数据存储。移动应用程序也可用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有强大的内置多行计算器的笔记应用程序（PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建和分享代码片段的截图样式图像格式，通常用于在 Twitter 或博客帖子中美观地分享/展示代码片段。
  * [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text 等的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从您的源代码创建精良的快照以在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图以在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排按时或重复的 webhooks。免费计划允许 5 个临时时间表。
  * [cron-job.org](https://cron-job.org) - 在线 cronjobs 服务，免费且无限使用。
  * [datelist.io](https://datelist.io) - 在线预约/预约调度系统，每月最大 5 个预约，包括 1 个日历。
  * [Domain Forward](https://domain-forward.com/) - 一个简单的 URL 或域名转发工具，免费使用，最高 5 个域名，每月 200k 次请求。
  * [Elementor](https://elementor.com) — WordPress 网站生成器，免费计划可用，包含 40+ 基本小工具。
  * [Format Express](https://www.format-express.dev) - 即时在线 JSON / XML / SQL 格式化。
  * [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规和漏洞的管理工具。
  * [Hook Relay](https://www.hookrelay.dev/) - 为您的应用程序添加 webhook 支持，不需要繁琐的设置：已完成的队列、重试和日志记录。免费计划每天最多 100 次投递，保留 14 天，3 个 hook 终端。
  * [http2.pro](https://http2.pro) — HTTP/2 协议就绪测试和客户端 HTTP/2 支持检测 API。
  * [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库重用加速应用程序开发：构建定制函数、用例和完整应用程序。
  * [Base64 解码器/编码器](https://devpal.co/base64-decode/) — 用于解码和编码数据的免费在线工具。
  * [newreleases.io](https://newreleases.io/) - 在 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 中接收来自电子邮件、Slack、Telegram、Discord 和自定义 webhooks 的新发布通知。
  * [OnlineExifViewer](https://onlineexifviewer.com/) — 可立即查看照片的 EXIF 数据，包括 GPS 位置和元数据。
  * [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理 PDF 模板，使用动态数据调用 API，并下载您的 PDF。每月最多提供 300 个免费文档。
  * [Pika Code Screenshots](https://pika.style/templates/code-image) — 使用扩展从代码片段和 VSCode 创建美观、可定制的截图。
  * [QuickType.io](https://quicktype.io/) - 从 JSON、模式和 GraphQL快速自动生成模型/类/类型/接口和序列化器，以便在任何编程语言中安全地处理数据。将 JSON 转换为任何语言的漂亮、类型安全的代码。
  * [RandomKeygen](https://randomkeygen.com/) - 一个免费、移动友好的工具，提供各种随机生成的密钥和密码，可用于安全任何应用程序、服务或设备。
  * [ray.so](https://ray.so/) - 从您的代码片段创建漂亮的图像。
  * [readme.com](https://readme.com/) — 美丽的文档轻松生成，对开源免费。
  * [redirection.io](https://redirection.io/) — 为企业、营销和 SEO 管理 HTTP 重定向的 SaaS 工具。
  * [redirect.ing](https://redirect.ing/) - 不需要管理服务器或 SSL 证书的快速、安全的域名转发。免费计划包括 10 个主机名，每月 100,000 次请求。
  * [redirect.pizza](https://redirect.pizza/) - 支持 HTTPS 的容易管理重定向。免费计划包括 10 个来源，每月 100,000 次点击。
  * [ReqBin](https://reqbin.com/) — 在线发送 HTTP 请求，流行的请求方法包括 GET、POST、PUT、DELETE 和 HEAD，支持头部和令牌身份验证，包含基本登录系统以保存请求。
  * [Smartcar API](https://smartcar.com) - 一个用于汽车的 API，用于定位、获取燃油箱、电池等级、里程表、解锁/锁定门等。
  * [snappify](https://snappify.com) - 启用开发人员创建惊人的视觉效果，从美丽的代码片段到完全成熟的技术演示。免费计划最多可创建 3 个快照，具有无限下载和每月 5 个 AI 强化的代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取给定经度和纬度的日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 实时 PubSubHubbub 兼容的 feed、导出、分析，免费但自定义较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查，在线分析结果，免费计划仅允许每个调查 10 个问题和 100 个响应。
  * [Tiledesk](https://tiledesk.com) - 创建聊天机器人和对话应用程序，将它们推向全渠道，从您的网站（实时聊天窗口小部件）到 WhatsApp，免费计划的无限聊天机器人。
  * [Versionfeeds](https://versionfeeds.com) — 您最喜欢的软件的自定义 RSS 提要。将您最喜欢的编程语言、库或工具的最新版本放在一个提要中。（前 3 个提要免费）
  * [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制和其他视频。
  * [Webacus](https://webacus.dev) — 访问一系列免费开发者工具，用于编码、解码和数据操作。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，无会话数量和时长限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需支持和对设备的永久访问（免费2次/天）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资产，如精灵，tile集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) — 发现，收集和分享来自世界各地游戏艺术家的免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资产，如2D，3D，音频，GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资产，如音乐，声音，精灵和gif。
  * [CraftPix](https://craftpix.net) — 免费/付费资产，如2D，3D，音频，GUI，背景，图标，tile集，游戏套件。
  * [Game Icons](https://game-icons.net/) - 免费的可样式SVG/PNG图标，提供CC-BY许可。
  * [LoSpec](https://lospec.com/) — 创建像素艺术和其他限制性数字艺术的在线工具，游戏中有许多教程/调色板列表可供选择。
  * [ArtStation](https://www.artstation.com/) - 2D，3D资产和音频，图标，tile集，游戏套件的市场。还可以用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，以及使用其免费计划创建您自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形3D资产
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型和PBR材料，用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0 Universal许可）的2D，3D，音频和UI游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费纹理（具有可变分辨率），模型，HDRIs和刷子。提供免费的插件以导出到Blender等软件。
  * [Freesound](https://freesound.org/) - 免费的协作声库，提供不同CC许可。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 为 Web 开发者提供的免费工具，包括 CSS 压缩、解压缩、图像优化、图像重置、大小写转换、CSS 验证、JavaScript 编译、HTML 编辑等。
  * [ElevateAI](https://www.elevateai.com) - 每月免费提供高达 200 小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) — 为 localhost 开发提供更好的 `*.localhost.direct` 通配符公钥 CA 签名 SSL 证书，支持子域。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/开源软件和 SaaS 列表。
  * [github.com — FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) — 为开发者提供的免费和开源软件中心。
  * [GitHub Education](https://education.github.com/pack) — 为学生提供的免费服务集合，需要注册。
  * [Markdown 工具](https://markdowntools.com) - 提供 HTML、CSV、PDF、JSON 和 Excel 文件与 Markdown 之间的转换工具。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒、工具和其他资源，以便在 Microsoft 365 平台上构建解决方案。订阅包括 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续期。
  * [Pyrexp](https://pythonium.net/regex) — 免费的基于 Web 的正则表达式测试器和可视化工具，用于调试正则表达式。
  * [RedHat for Developers](https://developers.redhat.com) — 为开发者提供免费访问 Red Hat 产品，包括 RHEL、OpenShift、CodeReady 等，仅限个人计划。还提供免费的电子书用于参考。
  * [smsreceivefree.com](https://smsreceivefree.com/) — 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费发送和接收测试 SMS 消息。
  * [SimpleBackups.com](https://simplebackups.com/) — 服务器和数据库（MySQL、PostgreSQL、MongoDB）备份自动化服务，直接存储在云存储提供商（AWS、DigitalOcean 和 Backblaze）中。提供一个免费计划，用于 1 个备份。
  * [SnapShooter](https://snapshooter.com/) — DigitalOcean、AWS、LightSail、Hetzner 和 Exoscale 的备份解决方案，支持直接数据库、文件系统和应用程序备份到 S3 基础存储。提供一个免费计划，用于每日备份 1 个资源。
  * [Themeselection](https://themeselection.com/) — 选择高质量、现代设计、专业且易于使用的免费 Admin Dashboard 模板、HTML 模板和 UI 工具包，以加快应用程序开发速度。
  * [Web.Dev](https://web.dev/measure/) — 一个免费工具，允许您查看网站性能并改善 SEO，以在搜索引擎中获得更高的排名。
  * [SmallDev.tools](https://smalldev.tools/) — 一个免费工具，允许开发者编码/解码各种格式，压缩 HTML/CSS/JavaScript，美化，生成假/测试数据集以 JSON/CSV 和多种其他格式，并提供更多功能，具有愉快的界面。
  * [UseCSV by Layercode](https://layercode.com/usecsv) — 在几分钟内将 CSV 和 Excel 导入添加到您的 Web 应用程序中。为您的用户提供愉快且强大的数据导入体验。免费开始，无需信用卡详情，并立即开始集成 UseCSV。您可以创建无限的导入器，并上传大小最多为 100Mb 的文件。
  * [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+ 个按钮可用于您的项目。
  * [WrapPixel](https://www.wrappixel.com/) — 下载使用 Angular、React、VueJs、NextJS 和 NuxtJS 创建的高质量免费和高级 Admin Dashboard 模板。
  * [Utils.fun](https://utils.fun/en) — 所有基于浏览器计算能力的离线日常和开发工具，包括水印生成、屏幕录制、编码和解码、加密和解密以及代码格式化，完全免费，不会将任何数据上传到云端进行处理。
  * [IT 工具](it-tools.tech) - 为开发者和 IT 人员提供有用的工具。
  * [免费代码工具](https://freecodetools.org/) — 100% 免费的有效代码工具，包括 Markdown 编辑器、代码压缩/美化、QR码生成器、Open Graph 生成器、Twitter 卡片生成器等。
  * [regex101](https://regex101.com/) — 一个免费的网站，允许您测试和调试正则表达式（regex）。它提供了正则表达式编辑器和测试器，以及有助于学习正则表达式的文档和资源。
  * [Kody 工具](https://www.kodytools.com/dev-tools) — 100+ 个开发工具，包括格式化、压缩和转换工具。
  * [AdminMart](https://adminmart.com/) — 高质量的免费和高级 Admin Dashboard 和网站模板，使用 Angular、Bootstrap、React、VueJs、NextJS 和 NuxtJS 创建。
  * [Glob 测试器](https://globster.xyz/) — 一个允许您设计和测试 Glob 模式的网站。它还提供了学习 Glob 模式的资源。
  * [SimpleRestore](https://simplerestore.io) - 无需代码或服务器即可将 MySQL 备份还原到任何远程数据库。
  * [360Converter](https://www.360converter.com/) - 免费层级有用的网站，用于转换：视频到文本 && 音频到文本 && 语音到文本 && 实时音频到文本 && YouTube 视频到文本 && 添加视频字幕。可能在短视频转换或短 YouTube 教程中有帮助。
  * [QRCodeBest](https://qrcode.best/) - 使用 13 个模板、全私有和个人品牌创建自定义 QR 码。功能包括跟踪像素、项目分类和 QRCode.Best 上的无限团队席位。
  * [PostPulse](https://PostPulseAI.com) - 使用每月 AI 制作的帖子提高您的在线存在感、增强 SEO 和网站排名。免费计划允许您每月在我们的网站上手动发布一篇帖子。
  * [PageTools](https://pagetools.co/) - 提供一套永远免费的 AI 驱动工具，帮助您生成必需的网站策略、创建社交媒体简介、帖子和网页，具有简单的一键式界面。
  * [MySQL Visual Explain](https://mysqlexplain.com) - 免费的 MySQL EXPLAIN 输出可视化工具，用于优化慢速查询。
  * [Killer Coda](https://killercoda.com/)  - 在浏览器中交互式地学习 Linux、Kubernetes、容器、编程、DevOps 和网络。

**[⬆️ 返回顶部](#目录)**