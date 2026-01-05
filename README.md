# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务并做出明智选择需要耗费大量时间。

这里整理了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的资源。我们虽喜爱所有免费服务，但仍需保持主题相关性。有时界限较为模糊，因此本清单带有主观判断——若未采纳您的贡献建议，敬请谅解。

本清单由1600多位人士通过提交Pull Request、评审、建议及实际工作共同完成。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来添加新服务，或移除已变更或终止的服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅包含服务型产品（as-a-Service），不含自托管软件。入选标准要求服务必须提供永久免费层级（非限时试用），若采用时间计量则免费期至少需持续一年。同时我们从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
  * [API、数据与机器学习](#API、数据与机器学习)
  * [制品仓库](#制品仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [CDN与安全防护](#CDN与安全防护)
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
  * [域名系统](#域名系统)
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
  * [其他分类](#其他分类)
  * [监控](#监控)
  * [平台即服务](#平台即服务)
  * [软件包构建系统](#软件包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关与无Mac开发iOS应用](#Flutter相关与无Mac开发iOS应用)
  * [搜索](#搜索)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证、授权与用户管理](#认证、授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道、WebRTC、WebSocket服务器及其他路由](#隧道、WebRTC、WebSocket服务器及其他路由)
  * [测试](#测试)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
  * [访客会话录制](#访客会话录制)
  * [网站托管](#网站托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件模拟（JavaScript实现）](#基于浏览器的硬件模拟（JavaScript实现）)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商的永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储，每天5万次读取，2万次写入，2万次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（除中国和澳大利亚）网络出站流量
    * Cloud Storage - 5GB存储，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万请求，36万GB-秒内存，18万vCPU-秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
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
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份存储（12个月）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建精简的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、认证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限次数调用
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，免费1万文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个AMD计算VM，每个1/8 OCPU和1GB内存
       - 4个Arm架构Ampere A1核心和24GB内存，可单VM或最多4个VM使用
       - [空闲实例](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个10 Mbps实例
    * 数据库 - 2个DB，每个20GB
    * 监控 - 5亿数据点采集，10亿数据点检索
    * 带宽 - 每月10TB出站，x64 VM限速50Mbps，ARM VM限速500Mbps*核心数
    * 公网IP - 2个IPv4（VM用），1个IPv4（负载均衡器用）
    * 通知 - 每月100万次递送选项，1000封邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，无计量速率限制（每域名1条规则），分析，邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

* [Zoho](https://www.zoho.com) — 最初作为邮件服务商，现提供包含免费方案的多项服务：
    * [Email](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，1个域名
    * [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业及个人用途
    * [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储
    * [Docs](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储。捆绑提供Zoho办公套件(Writer, Sheets & Show)
    * [Projects](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
    * [Connect](https://zoho.com/connect) — 25用户免费团队协作，含3个群组/自定义应用/看板/手册，10个集成，以及频道、活动和论坛功能
    * [Meeting](https://zoho.com/meeting) — 最多3名会议参与者与10名网络研讨会 attendees
    * [Vault](https://zoho.com/vault) — 个人版密码管理
    * [Showtime](https://zoho.com/showtime) — 支持最多5名参与者的远程培训会议软件
    * [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
    * [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，ZIP备份，RSS/Atom订阅，访问控制与CSS自定义
    * [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅免费循环计费管理，存储最近40条订阅指标
    * [Checkout](https://zoho.com/checkout) — 3个页面50笔支付的产品计费管理
    * [Desk](https://zoho.com/desk) — 3坐席客户支持管理，含私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守计算机
    * [Cliq](https://zoho.com/cliq) — 100GB存储的团队聊天软件，无限用户，每频道100用户，支持SSO
    * [Campaigns](https://zoho.com/campaigns) - 邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建工具
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线问卷调查
     * [Bookings](https://zoho.com/bookings) - 预约排程

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供构建、部署和发展云应用所需的一切，无需操心"服务器事务"
* [deployment.io](https://deployment.io) - 帮助开发者在 AWS 上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境，每月提供 10 次免费任务执行（含预览和自动部署功能）
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
* [scalr.com](https://scalr.com/) - Terraform 自动化协作平台（TACO），通过分层配置模型、OPA 集成和完整 Terraform CLI 支持提升基础设施协作效率。无单点登录限制，所有功能开放，每月免费提供 50 次运行额度

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公有/私有Git仓库，提供CI/CD流水线功能
* [Codeberg](https://codeberg.org/) — 免费为开源项目提供无限量公有/私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，通过[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，通过[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包/容器托管、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件协作平台，包含CI、静态页面、项目页面和问题追踪功能
* [GitGud](https://gitgud.io) — 无限量公有/私有仓库永久免费。基于GitLab & Sapphire构建，不提供CI/CD功能
* [GitHub](https://github.com/) — 无限量公有仓库和私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI Copilot功能
* [gitlab.com](https://about.gitlab.com/) — 最多支持5名协作者的无限量公有/私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，提供Mercurial版本控制系统支持
* [Pagure.io](https://pagure.io) — 面向FOSS许可项目的免费开源Git代码协作平台
* [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统，基于创新的补丁理论构建，易学易用，解决了git/hg/svn/darcs的诸多问题
* [projectlocker.com](https://projectlocker.com) — 1个免费私有项目（支持Git和Subversion），50MB存储空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公有/私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [Abstract API](https://www.abstractapi.com) — 提供多种用途的API套件，包括IP地理定位、性别检测和电子邮件验证
  * [Apify](https://www.apify.com/) — 网页抓取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档。无需CSS/HTML知识。免费计划每月包含50张图片和三个模板
  * [APIVerve](https://apiverve.com) - 免费即时访问120+个高质量API。免费计划每月包含50个API令牌（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等问题的根本原因分析。免费支持最多两个模型
  * [Beeceptor](https://beeceptor.com) - 无代码云平台，支持多协议API(REST/SOAP/gRPC/GraphQL)的模拟调试，提供即时服务器、CRUD模拟、代理和CORS管理。免费计划每天50次请求，提供公开仪表盘
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速准确的免费API(无限或每月1万-5万次)，包括IP地理定位、反向地理编码、网络洞察等现代Web功能
  * [Browse AI](https://www.browse.ai) — 网页数据提取与监控服务。免费计划每月1k积分，相当于1k次并发请求
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，支持自动化、爬取、AI代理访问等。免费计划每月1k次请求
  * [Calendarific](https://calendarific.com) - 企业级节假日API服务，覆盖200+国家。免费计划每月500次调用
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品数据的GraphQL API。免费计划每月100次调用
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包含VIN解码、被盗车辆检查等功能。免费层每月100次请求覆盖9个端点
  * [Cloudmersive](https://cloudmersive.com/) — 实用工具API平台，免费600次调用/月（仅限北美区域，最大文件2.5MB）
  * [Colaboratory](https://colab.research.google.com) — 基于网页的免费Python笔记本环境，配备Nvidia Tesla K80 GPU
  * [CometML](https://www.comet.com/site/) - 从训练到生产的MLOps全流程平台。个人和学术用户免费
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API。开发者计划免费支持100订单/月和1,000 SKU
  * [Composio](https://composio.dev/) - AI代理集成平台，支持200+工具连接
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器（文档/图像/视频/电子书）。免费层限制20MB文件大小和30次/天转换
  * [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家地区城市等数据的API。免费层每天100次请求
  * [Coupler](https://www.coupler.io/) - 数据集成工具。免费版限制1用户/1数据连接且需手动刷新
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖拽编辑器生成PDF。免费计划每月100个PDF和3个模板
  * [Cube](https://cube.dev/) - 数据访问与交付平台。Cube Cloud免费版每天1,000次查询
  * [CurlHub](https://curlhub.io) — API调用调试代理服务。免费计划每月10,000次请求
  * [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API。免费计划每月5,000次调用
  * [CustomJS](https://www.customjs.io) - PDF转换API。免费层每月600次调用
  * [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable与各类API。免费计划每月100次运行
  * [Data Miner](https://dataminer.io/) - 网页数据提取浏览器扩展。免费版每月500页
  * [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具。免费版每月20,000条记录
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。免费提供10GB存储和120小时运行时间/月
  * [DB Designer](https://www.dbdesigner.net/) — 云端数据库建模工具。免费版支持2个模型，每个模型10张表
  * [DB-IP](https://db-ip.com/api/free) - 免费IP定位API，每日每IP 1k次请求
  * [DeepAR](https://developer.deepar.ai) — 跨平台AR面部滤镜SDK。免费版支持10月活用户和4面部追踪
  * [Deepnote](https://deepnote.com) - 新型数据科学笔记本。免费版包含无限个人项目和基础配置(5GB RAM)
  * [DiffJSON](https://diffjson.com) - JSON数据差异比较在线工具
  * [Disease.sh](https://disease.sh/) — 免费提供准确新冠数据的API
  * [Doczilla](https://www.doczilla.app/) — 从HTML代码生成截图/PDF的SaaS API。免费版每月250份文档
  * [Doppio](https://doppio.sh/) — PDF/截图生成API服务。免费版每月400次生成
  * [drawDB](https://drawdb.app/) — 免注册的开源在线数据库图表编辑器
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API。免费版每月50次API调用

  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，支持SDK和无代码集成。免费计划包含每月250页、不限用户数和3个模板。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划允许每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 一款免费的浏览器工具，可即时格式化、验证、比较和压缩JSON数据。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡支付欺诈检测REST API，根据订单输入参数识别所有可能的欺诈特征。免费Micro计划每月支持500笔交易。
* [FreeIPAPI](https://freeipapi.com) - 面向商业和非商业用户的免费、快速、可靠IP地理位置API（JSON格式）。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理位置API，免费计划每日2,000次请求。
* [Hex](https://hex.tech/) - 协作式数据平台，支持笔记本、数据应用和知识库。免费社区版最多5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks服务平台(WaaS)，帮助产品快速实现Webhooks功能。免费版每日100个事件，历史记录保留7天。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建工具。
* [huggingface.co](https://huggingface.co) - 构建、训练和部署Pytorch/TensorFlow/JAX的NLP模型。免费版每月3万输入字符。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL接口设计与测试。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（如Power BI）访问70多个平台数据。包含数据复制和交换功能。开发者免费计划有数据量限制。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理位置API，免费1,000次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP地理位置API，开发者永久免费计划每日1,000次请求。
* [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，免费版同一IP限45次/分钟。
* [IP.City](https://ip.city) — 每日100次免费IP地理位置查询。
* [IP2Location.io](https://www.ip2location.io/) — 提供城市/坐标/ISP/ASN等数据的IP定位API。免费计划每月5万次查询，另含500次WHOIS查询。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP定位API，具备最佳主机检测能力。免注册免费1,000次查询。
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的IP定位API，免费版每月3万次查询（每日1k次）。
* [ipbase.com](https://ipbase.com) - IP地理位置API，永久免费计划每月150次请求。
* [IPinfo](https://ipinfo.io/) — 快速准确的IP数据API（免费5万次/月），提供地理位置/公司/运营商/IP范围/域名/滥用联系人等信息。
* [IPLocate](https://www.iplocate.io) — IP定位API（免费1,000次/天），含代理/VPN/主机检测功能，并提供可下载的IP数据库。
* [IPTrace](https://iptrace.io) — 极简IP地理位置API，每月5万次免费查询。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP，免注册无限次请求，支持CORS跨域调用。
* [JSON to Table](https://jsontotable.org) - 将JSON转换为交互式表格进行快速查看/编辑/分享。
* [JSON2Video](https://json2video.com) - 通过API或无代码方式自动化生成营销视频的编辑平台。
* [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化/编辑/过滤为表格视图，支持链接分享。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义状态码/头部/响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - 强大的JSON查看/编辑/验证工具，支持AI修复/树形视图/表格视图/12+语言代码生成/格式转换等功能。
* [KillBait API](https://killbait.com/api/doc) - 内容评估API，检测标题党并分类文章（免费版每小时1次/每日10次提交）。
* [Kreya](https://kreya.app) — 免费gRPC GUI客户端，支持通过服务反射导入API。
* [LoginLlama](https://loginllama.app) - 登录安全API，检测欺诈登录行为（免费1,000次/月）。
* [Market Data API](https://www.marketdata.app) - 提供股票/期权/基金等实时历史金融数据，免费版每日100次API请求。
* [Maxim AI](https://getmaxim.ai/) - AI代理模拟评估平台，帮助团队可靠地部署AI应用。个人开发者永久免费（3席位）。
* [microlink.io](https://microlink.io/) – 将网页转化为元数据/预览图/截屏等服务，每日50次免费请求。
* [Mintlify](https://mintlify.com) — 现代化API文档标准，提供美观UI组件/站内搜索/交互式调试。免费支持1名编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速创建模拟REST API的工具，免费版每个项目支持2个资源。
* [Mockfly](https://www.mockfly.dev/) — API模拟与功能开关管理平台，免费版每日500次请求。
* [Mocko.dev](https://mocko.dev/) — 云端API代理服务，可选择性模拟端点并监控流量，加速开发和集成测试。

  * [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取JSON格式结果。开发者每天可免费查询100次，文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 将图像和PDF文件解析为JSON格式文本的OCR API。每月25,000次免费请求，文件大小限制为1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF和电子邮件中提取数据。AI驱动，提供完整API访问权限。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，提供可视化模板编辑器或HTML转PDF功能，支持动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [PDFBolt](https://pdfbolt.com) - 面向开发者的PDF生成API，注重隐私保护。提供类似Stripe的文档说明，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转换为PDF。每月100次免费转换。
* [Pixela](https://pixe.la/) - 免费的时间流数据库服务。所有操作均通过API执行，支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用API开发协作平台Postman简化工作流程并更快创建更好的API。Postman应用永久免费，云功能在特定限制下也永久免费。
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化完整平台。免费计划包含5个部署的工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式SQL编辑器。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。在rapidapi.com上提供每月1万次请求的免费层。
* [Reducto](https://reducto.ai) - 将非结构化文档（PDF、XLSX、JPG、PPTX等）转换为结构化JSON数据。解析PDF表单、提取数据并编辑。免费层包含1.5万积分和按量付费选项。
* [Rendi](https://rendi.dev) - FFmpeg API - 通过REST API在线运行FFmpeg而无需管理基础设施。免费层包含月度处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费HTTP请求接收端点，记录所有发送到该端点的HTTP请求及其有效载荷和头部信息，便于观察webhook等服务调用。
* [ROBOHASH](https://robohash.org/) - 根据任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API用于爬取。匿名爬取无需担心限制、封锁或验证码。每月前100次成功爬取免费（含JavaScript渲染，联系支持可获更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome爬取API和免费代理检测服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费1万API积分。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月100次成功API调用。
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费计划包含每表1,000行免费额度。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费计划包含100次云端爬取积分。
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能API。免费计划每月100次API请求。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供省时省钱的开发工具。免费层包含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV文件即可通过API快速访问数据加速应用开发。免费计划包含2个API和每月2,500次调用，无需信用卡。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化验证器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建50张图像。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送5万条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与深度研究API，支持研究成果组织。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天1,000次免费请求。提供IP地址所在国家、城市、区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，包含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。提供高级API日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月限25万次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币和加密货币的实时汇率API。免费计划无限次调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐时/每日预报和天气警报。通过AI模型和机器学习系统分析多源气象数据提升预报精度。免费层每月1万次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析器、Chrome渲染和代理的简易网页爬取API。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月2.5万token限额（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识库算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转为参数化API。每月3万次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页爬取API，定价透明。每月1,000次免费API调用，学生和非营利组织可获额外积分。

  * [Zipcodestack](https://zipcodestack.com) - 免费邮编API与邮政编码验证服务。每月提供1万次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，用于设计、构建并部署API至边缘节点。可为任意API快速添加API密钥认证、速率限制、开发者文档和商业化功能。原生支持OpenAPI，完全可编程化（基于Web标准API和Typescript）。免费方案包含：10个项目上限、不限量生产级边缘环境、每月100万次请求和10GB出口流量。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公共制品仓库，公开项目免费使用。
* [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费版包含公开项目、5GB存储和基础实例。
* [RepoFlow](https://repoflow.io) — 简化npm、PyPI、Docker、Go、Helm等包管理，免费版提供10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。
* [RepoForge](https://repoforge.io) — 托管Python、Debian、NPM包和Docker镜像的私有云仓库，开源/公开项目免费。
* [repsy.io](https://repsy.io) — 1GB免费私有/公共Maven仓库。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [BookmarkOS.com](https://bookmarkos.com) - 一体化书签管理工具，集成标签页管理和任务管理，提供可定制的在线桌面环境及文件夹协作功能
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [Calendly](https://calendly.com) — 智能会议预约工具。免费版支持1个日历连接和无限次会话，提供桌面端和移动端应用
* [cally.com](https://cally.com/) — 快速找到适合团队的最佳会议时间。操作简单，适用于各种规模团队
* [Chanty.com](https://chanty.com/) — Slack的替代品。小团队(10人内)永久免费，包含无限公私对话、可搜索历史记录、无限1对1语音通话、语音留言、10个集成和20GB团队存储空间
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Discord](https://discord.com/) — 支持公开/私密聊天的通讯工具。具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制
* [Dubble](https://dubble.so/) — 免费的分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作工具。支持IDE结对编程、终端共享、语音视频通话及屏幕共享，小团队免费
* [element.io](https://element.io/) — 基于Matrix的去中心化开源通讯工具。提供群聊、私信、加密文件传输、音视频通话及多服务集成
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作空间平台。个人用户免费，提供2GB存储空间
* [Fibo](https://fibo.dev) - 免费的敏捷团队实时Scrum Poker工具，支持无限成员快速估算故事点
* [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理与问题追踪平台。免费版支持创建公共看板、设置Webhook、卡片标记和无限用户(最多1000个项目)
* [flat.social](https://flat.social) - 可定制的互动虚拟空间，适用于团队会议和社交活动。会议数量无限制，最多支持8人同时在线
* [flock.com](https://flock.com) — 高效的团队通讯工具。免费版包含无限消息、频道、用户、应用和集成
* [GitBook](https://www.gitbook.com/) — 技术知识管理与文档平台。个人开发者免费
* [GitDailies](https://gitdailies.com) - GitHub团队每日提交与PR活动报告工具。含推送可视化、同伴认可系统和自定义提醒功能。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。支持无限公私房间，25人以下团队免费
* [gokanban.io](https://gokanban.io) - 免注册的语法看板工具，完全免费无限制
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但支持Markdown语法。免费版笔记数量无限制，但私人笔记的协作者数量和模板功能[将受限制](https://hackmd.io/pricing)
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具。5人以下团队免费
* [Huly](https://huly.io/) - 一体化项目管理平台(替代Linear/Jira/Slack/Notion/Motion)。免费版支持无限用户，每个工作区10GB存储和10GB音视频流量
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签、多工作区和协作。免费版包含4个工作区和10个团队成员
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约共享资源(如会议室/开发环境/服务器等)。免费版最多2个资源
* [meet.jit.si](https://meet.jit.si/) — 一键发起免费视频会议，支持屏幕共享
* [Miro](https://miro.com/) - 可扩展的跨设备协作白板，适合分布式团队。提供免费增值计划
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown笔记协作工具，被描述为"一体化工作空间"。支持多平台应用和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识协作维基。免费版包含所有核心功能，最多50个项目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，集成视频聊天、画板和在线代码编辑器(支持浏览器编译运行)。一键创建远程面试房间
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密的简易粘贴网站
* [Pastefy](https://pastefy.app/) - 美观简洁的Pastebin工具，可选客户端加密、多标签粘贴、API接口和高亮编辑器等功能
* [Pendulums](https://pendulums.io/) - 免费的时间追踪工具，通过直观界面和有价值的统计数据帮助优化时间管理
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享功能和Passkeys的密码管理器。支持网页/浏览器扩展/移动端/桌面端
* [Pullflow](https://pullflow.com) — 通过AI增强GitHub/Slack/VS Code的代码评审协作平台
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用。支持无限用户和完整消息历史
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间追踪应用。免费版支持10人以下的时间记录和报告生成
* [Raindrop.io](https://raindrop.io) - 跨平台私密书签工具(macOS/Windows/Android/iOS/网页)。免费版支持无限书签和协作
* [Revolt.chat](https://revolt.chat/) — 尊重隐私的Discord开源替代品，免费提供绝大多数专有功能。作为一体化应用，兼具安全性与速度，并支持官方/非官方插件
* [Rocket.Chat](https://rocket.chat/) - 开源通讯平台，具备全渠道功能、Matrix联邦协议、应用桥接、无限消息和完整历史记录
* [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，支持网站/PDF/图片的数字化审阅与反馈收集

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步、讨论。云版本仅提供1GB空间
* [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟、画布或变通方案。完全可用的免费套餐
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。可追踪上游供应商的状态页面
* [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作工具。免费版支持3个面板、无限用户和1GB存储
* [StreamBackdrops](https://streambackdrops.com) — 视频会议高清虚拟背景库。适用于Zoom/Teams/Google Meet的专业背景。无需注册，个人免费使用
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件/注册/付费
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持带泳道看板和完整Scrum实现，集成时间追踪功能。5用户+3项目组合免费
* [Teamplify](https://teamplify.com) - 通过团队分析和智能站会优化开发流程。包含面向远程团队的完整休假管理功能。5人以下小团队免费
* [Telegram](https://telegram.org/) — 为需要快速可靠通讯的用户而生。大群组/用户名/桌面端/强大文件分享等功能适合商业用户和小团队
* [Tencent RTC](https://trtc.io/) — 腾讯实时音视频提供群组通话解决方案。首年每月1万分钟免费额度
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费使用的时间追踪软件。轻松集成Jira/Trello/Asana等项目管理工具
* [tldraw.com](https://tldraw.com) — 免费开源白板与图表工具，支持智能箭头/吸附/便签/SVG导出。多人协作模式。官方VS Code扩展同样免费
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片/视频等大文件
* [Tugboat](https://tugboat.qa) - 自动按需生成PR预览。全员免费，非营利组织可享Nano套餐
* [twist.com](https://twist.com) — 异步友好的团队沟通应用，保持对话条理清晰。提供免费无限套餐，合格团队可享折扣
* [userforge.com](https://userforge.com/) - 互联在线的用户画像/用户故事/情境映射工具。保持设计与开发同步，免费支持3个画像+2名协作者
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的可视化反馈工具
* [Webex](https://www.webex.com/) — 视频会议服务，免费套餐支持100人40分钟会议
* [Webvizio](https://webvizio.com) — 网站反馈工具与缺陷报告系统，可直接在网页/图片/PDF/设计文件上标注开发任务
* [whereby.com](https://whereby.com/) — 一键式视频通话（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，通过Python/Typescript脚本快速构建多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度+品牌化播放器
* [wormhol.org](https://www.wormhol.org/) — 简洁的文件分享服务。5GB以内文件无限分享
* [Wormhole](https://wormhole.app/) - 端到端加密文件分享（24小时有效期），5GB以上文件采用P2P传输
* [zoom.us](https://zoom.us/) — 安全视频会议解决方案，免费版限40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版包含1万条历史消息+5GB存储，同时提供可自托管的开源版本

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区版包含1个工作空间、5个用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。为开发者提供免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月流量和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费方案。基于GraphQL的CMS，基础版每月支持10万次API调用。
* [Hygraph](https://hygraph.com/) - 小型项目免费方案。GraphQL优先API，告别传统方案，采用GraphQL原生的无头CMS，实现全渠道内容API优先交付。
* [Prismic](https://www.prismic.io/) — 无头CMS。带全托管可扩展API的内容管理界面。社区方案为单用户提供无限API调用、文档、自定义类型、资源和多语言支持。开放内容/开源项目可申请更大免费方案。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据库。免费方案包含无限项目、无限管理员用户、3个非管理员用户、2个数据集、50万次CDN API请求、10GB带宽和5GB资源存储。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可创建精美商业网站。提供免费自定义域名，无需信用卡。
* [Squidex](https://squidex.io/) - 小型项目免费方案。API/GraphQL优先。开源且基于事件溯源架构（自动记录每次变更）。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。免费社区版包含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持（无限语言/地区）、资源管理器（最多2500项资源）、图片优化服务、搜索查询、Webhook及250GB/月流量。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git托管的无头CMS，支持Markdown、MDX和JSON。基础方案免费支持2个用户。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费方案包含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制——完全自主掌控。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento是一款免费的No code应用构建平台。自动生成的后端代码中，用户可完全访问源代码及无限量的API和路由，实现深度集成。免费方案包含3个项目、5张数据表和Google插件支持。
* [DhiWise](https://www.dhiwise.com/) — 通过DhiWise的创新代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
* [Supermaven](https://www.supermaven.com/) — Supermaven是适用于VSCode、JetBrains和Neovim的极速AI代码补全插件。免费层提供无限量的行内补全功能。
* [v0.dev](https://v0.dev/) — v0通过AI模型根据简单文本提示生成代码。基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，初始赠送1200积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和100 MB存储的1个代码库
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公有仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时、50次对话/小时。开源项目永久免费
* [CodSpeed](https://codspeed.io) - 在CI流水线中自动化性能追踪。通过精准一致的指标，在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析工具，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，自动发现并修复安全/性能/反模式/风险缺陷/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库与SQL查询的关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化首选静态代码分析器。自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — 基于GitHub提交的代码质量评注，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公有或个人仓库免费
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码审查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub PR与提交差异分析，公有仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具，提供预设模板和链接功能。
* [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站搜索您的项目名称可用性
* [tickgit.com](https://www.tickgit.com/) — 显示代码中的`TODO`注释（及其他标记），帮助识别需要后续改进的代码区域

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版提供每次构建最长30分钟、每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD平台。免费版包含每月200次构建（每次最长10分钟）和2名团队成员。开源项目可获45分钟构建时长、+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
* [Buildkite](https://buildkite.com) — 免费支持3名用户和每月5000分钟任务时长的CI流水线。测试分析功能免费开发者层级包含每月10万次测试执行，开源项目可获更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD与DevOps工具。20名用户和10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 全功能免费托管CI/CD服务，支持GitHub/GitLab/BitBucket仓库。含多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟免费执行时长，无限协作者，私有项目30个并行任务，开源项目最高8万分钟构建时长。
* [cirrus-ci.org](https://cirrus-ci.org) — 公开GitHub仓库免费使用
* [cirun.io](https://cirun.io) — 公开GitHub仓库免费使用
* [codemagic.io](https://codemagic.io/) — 每月500分钟免费构建时长
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
* [LocalOps](https://localops.co/) — 30分钟内在AWS/GCP/Azure部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版支持1名用户和1个应用环境。
* [Make](https://www.make.com/en) — 通过可视化界面连接应用并自动化工作流的工具，支持大量应用和主流API。公开GitHub仓库免费，免费层含100MB存储、1000次操作和15分钟最小间隔。
* [Mergify](https://mergify.com) — GitHub工作流自动化与合并队列工具，公开仓库免费
* [Nx Cloud](https://nx.dev/ci) — 通过远程缓存、任务分布式执行和自动化E2E测试分割加速单体仓库CI流程。免费版支持30名贡献者，含15万点信用额度。
* [Shipfox](https://www.shipfox.io/) — 以2倍速度运行GitHub Actions，每月免费3000分钟构建时长。
* [Spacelift](https://spacelift.io/) — 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续合规、SAML 2.0单点登录，公共工作池每月200分钟额度。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建独立VM并通过专属URL访问应用，支持无限公开/私有仓库，最高2GB VM规格。
* [Terramate](https://terramate.io/) — 面向Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台，2名用户内全功能免费。
* [Terrateam](https://terrateam.io) — 采用GitOps优先理念的Terraform自动化工具，支持PR驱动工作流、自托管运行器项目隔离和分层有序操作。3名用户内免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Appetize](https://appetize.io) — 直接在浏览器中测试您的Android和iOS应用，基于云的Android手机/平板模拟器和iPhone/iPad模拟器。免费套餐包括每月两个并发会话，每次30分钟。应用大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 持续性能测试工具套件，用于捕捉CI性能回归。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习，无需编码。可在本地计算机上免费运行无限测试。云监控和CI/CD集成需额外月费。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多种SEO、速度和安全性最佳实践。小型网站免费。
  * [Checkly](https://checklyhq.com) - 现代DevOps的代码优先合成监控。以传统提供商的一小部分价格监控您的API和应用。基于Monitoring as Code工作流和Playwright。开发者免费套餐慷慨。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否为给定域启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器内测试。Cypress Test Runner始终免费且开源，无限制。Cypress Dashboard对开源项目免费，最多5个用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费但选项较少。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包括最多4个并发节点/10次网格启动/4,000测试分钟每月。
  * [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的团队，包括Katalon Studio、TestOps（+免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）和模拟或存根（KMocks）。开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 全面的Storybook、Ladle、Histoire故事和Web应用的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费套餐每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和无限项目，5,000快照/月。
  * [qase.io](https://qase.io) - Dev和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费套餐包括所有核心功能，500MB附件存储和最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费套餐限制为10个iOS和10个Android测试，但包括付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源的Chrome扩展，用于拦截、重定向和模拟HTTP请求。包括[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录会话与网络和控制台日志。免费套餐最多10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似于CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台 - UI-licious Snippets - 允许您在Chrome上运行无限测试，无需注册，每次测试运行最多3分钟。发现错误？您可以复制测试的唯一URL，向开发人员展示如何重现错误。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)。
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和用于将手动测试实现为代码的框架，使用GitHub。服务对[开源免费](https://github.com/marketplace/testspace-com)，每月450个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发者、个人、教育工作者和初创小团队可以请求超出基本免费项目的折扣和免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的UI，并使用集成的工具、组件和设计系统更快迭代、更好设计和简化开发过程。无限项目，五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查Webhook和HTTP请求。完全免费，您可以创建无限URL并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证Webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费网络和服务器工具。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费版支持2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理工具。可搜索证书透明度日志。测试版结束后免费支持3个证书和1个用户。
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，为.NET和Java应用提供数据泄露防护
  * [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言即可进行数据编解码分析的简易Web应用。如同密码学领域的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 为Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven/Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions提供依赖项自动更新
  * [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django网站的安全漏洞。基于Pony Checkup站点分叉开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户的基础访问控制。
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。杜绝通过Slack/邮件等不安全渠道共享.env文件，永久避免重要.env文件丢失。免费支持最多3名团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复工具，防止敏感信息泄露至源代码。扫描Git仓库中350+种密钥类型和敏感文件——25人以下团队免费使用。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费检索2000万条公开GitHub仓库、代码片段、议题和评论中的泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — Web应用/服务器/网络漏洞扫描服务。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，支持跨团队和基础设施管理开发密钥：涵盖本地开发到生产环境第三方服务全流程。最多5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准合规性
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞。私有项目免费1个，开源项目不限数量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 多功能SSL工具包，提供私钥/CSR生成器、SSL证书解码器、证书匹配器和证书订购功能。支持通过CNAME记录（而非TXT记录）从Let's Encrypt/Google Trust/BuyPass生成免费SSL证书。
  * [Protectumus](https://protectumus.com) - PHP网站的免费安全检测、站点杀毒和服务器防火墙（WAF）。注册用户可获取邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据已在GitHub公开(https://github.com/unknownhad/AWSAttacks)。完整列表可通过API获取
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。私有项目免费1个，开源项目不限数量。
  * [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，审计OWASP风险
  * [Socket](https://socket.dev) — 为个人开发者、小团队和开源项目提供的免费供应链安全方案。包含应用和防火墙CLI工具，保护代码免受漏洞依赖项侵害。可检测70+种供应链风险指标。
  * [SOOS](https://soos.io) - 开源项目不限次数的免费SCA扫描。在发布前检测并修复安全威胁。通过简洁高效的方案保护项目安全。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置的深度分析
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等。不限于HTTPS协议。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。250用户以下应用免费。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [360username](https://360username.com/) - 免费工具，可在90多个社交平台搜索用户名以查找匹配的个人资料。
* [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费版支持1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费版支持1000名MAU和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费计划包含25,000名MAU、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费支持5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度授权控制，免费支持100个月度活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费版支持100个用户和一个领域(realm)。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费支持7,500名月活跃用户和50个租户(含5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成到产品中。免费提供7,500名MAU的起步套餐。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，涵盖认证与授权功能。免费支持5,000名MAU，并提供开源自托管选项。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等应用实现无密码认证，仅需几分钟即可完成集成。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100名月活跃用户。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费的开发者账户包含所有安全功能，支持无限团队成员、200名日活跃用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，为微服务提供实时更新和无代码策略UI。免费层支持1000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费版支持1000个用户和10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可向任意规模企业销售产品，免费支持200个用户和1万封事务邮件(带"Powered by PropelAuth"水印)。
* [Stack Auth](https://stack-auth.com) - 不踩坑的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，或选择支持1万名免费MAU的SaaS托管版。
* [Stytch](https://www.stytch.com/) - 一体化平台提供认证与防欺诈API/SDK。免费计划包含1万名月活跃用户、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速上线的同时保持对用户体验的控制。免费支持5000名MAU。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱+密码、社交登录、Magic Auth、MFA等多种方式。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费版支持2.5万次认证请求，包含所有安全功能(OTP、无密码登录、策略等功能无付费墙)。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含5个应用、50次月度下载，最大文件体积100MB。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版功能：应用上传、密码保护链接、1天有效期、10次安装。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费套餐包含1个应用项目、3个应用版本、500MB存储空间和每月100次应用安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版功能：无限次上传、私有链接（访客2天有效期/注册用户60天有效期）。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限次下载、高速下载和无限次上传功能。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理部署服务器和站点。免费支持1台服务器
* [runcloud.io](https://runcloud.io/) - 专注PHP项目的服务器管理平台。免费支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 具有友好界面的服务器管理与部署平台。提供单台服务器的免费套餐

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息、跨多可用区的节点部署
  * [courier.com](https://www.courier.com/) — 统一API集成推送、应用内消息、邮件、聊天、短信等通信渠道，含模板管理功能。免费套餐每月10,000条消息
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全无服务器MQTT代理。永久免费100万会话分钟/月（无需信用卡）
  * [Engage](https://engage.so/) - SaaS客户互动与自动化全功能工具（邮件、推送、短信、产品导览、横幅等）。每月最多1,000名活跃用户免费
  * [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接至云原生物联网消息代理。永久免费连接100台设备（无需信用卡）
  * [httpSMS](https://httpsms.com) - 使用Android手机作为短信网关收发短信。每月免费收发200条消息
  * [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用发送应用内、邮件、短信、Slack和推送等多渠道消息。免费套餐含每月10,000条消息
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫
  * [Novu.co](https://novu.co) — 开源开发者通知基础设施。统一管理邮件、短信、直发、应用内和推送的组件与API。免费套餐含每月30,000条通知（保留90天）
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒。免费版：每天50条消息至1台设备1个应用
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（每次可含多条消息）
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和200,000条消息/天
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和100,000次事件/天
  * [SMSGate](https://sms-gate.app) - Android™短信网关，通过云路由用设备收发短信。完全免费云服务（建议每日超10,000条时通知以维持服务质量）
  * [SuprSend](https://www.suprsend.com/) - 通过API优先方式简化产品通知的基础设施。用单一API创建并交付事务性、定时和互动通知。免费版每月10,000条通知，含摘要、批量、多渠道等流程节点
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure。永久免费含4k消息大小、50个活跃连接和5GB数据/月
  * [webpushr](https://www.webpushr.com/) - 网页推送通知 - 最多10,000订阅者免费，推送不限量，支持浏览器内消息

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费1296万条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1000条用户活动日志，保留1个月，最多支持5个项目
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储空间，日志保留15天，支持7天内检索
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限量，无限字符串和协作者
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人的免费工具
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，适用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管的本地化引擎每月免费使用10,000词。
* [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 免费支持1000条源语言字符串，无限语言和贡献者，初创企业和开源优惠
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（包括2名用户、500个键和无限项目）。
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 免费支持2000条翻译，无限翻译者，10种语言/项目，1000个可翻译资源/项目
* [POEditor](https://poeditor.com/) — 免费支持1000条字符串
* [SimpleLocalize](https://simplelocalize.io/) - 免费支持100个翻译键，无限字符串和语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费

**[⬆️ 返回顶部](#目录)**

## 监控

  * [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费方案。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测器（3分钟检查频率）和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测器，无限制用户/仪表盘/告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1用户、1万次API及网络检查/1.5千次浏览器检查运行。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查看URL或网站的核心网页指标历史数据。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监测器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。1个免费监测器（推荐他人注册可获得更多）
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测器，5分钟间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施支出。每月Google云平台消费不超过5,000美元免费。
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控——永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版：3用户、10仪表盘、100告警、Prometheus/Graphite指标存储（1万序列，14天保留）、Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台任务。最多20个检查免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页聚合器——永久免费提供20个监测器和2个通知渠道（Slack与Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费支持无限制订阅与团队。
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（100页以内）免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控应用与技术栈，支持大规模问题诊断。开发者社区永久免费计划包含：100万日志事件监控、2台主机的基础设施监控与应用性能监控。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。永久免费方案提供HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），含2个仪表盘/状态页。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标收集工具。发展迅速，GitHub上也可找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师构建更完善软件。从单体到无服务器，可检测所有内容并分析、排查、优化整个软件栈。免费层含每月100GB数据摄入、1个全权限用户、无限制基础用户。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站与API正常运行时间监控、定时任务监控及状态页。前5个检查（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国与美国服务器的DNS结果和ASN信息识别DNS污染。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，每日检查最多6个监测器免费。
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控免费支持10万事件（无限制项目与状态页）。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限制URL检测，通过Discord、Slack或邮件接收宕机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测器（10分钟间隔）。监控SSH、HTTP、HTTPS及任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个公开可定制状态页（SSL子域名）。开源项目与非营利组织免费提供专业版。
* [Pulsetic](https://pulsetic.com) - 10个监测器、6个月历史正常运行时间/日志、无限制状态页与自定义域名！永久免费且无限制邮件告警。无需信用卡。
* [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。自带Prometheus或安装一体化套件。免费层支持最多20个Kubernetes节点。通过Slack、Microsoft Teams、Discord等告警。集成PagerDuty、OpsGenie、VictorOps、DataDog等工具。
* [Servervana](https://servervana.com) - 支持大型项目与团队的高级正常运行时间监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等。免费层含10个HTTP监测器、1个DNS监测器和1个状态页。
* [Simple Observability](https://simpleobservability.com) — 统一指标与日志平台的强大服务器监控，无设置复杂度。1台服务器免费。
* [sitesure.net](https://sitesure.net) - 网站与定时任务监控——2个监测器免费
* [skylight.io](https://www.skylight.io/) — 前10万请求免费（仅限Rails）
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限制测试（带限制）免费
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个监测器免费
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS与域名监控。免费监控10台服务器、10个正常运行时间和10个域名。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标。
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监测器（5分钟间隔）和可定制状态页（商业用途亦可）。通过邮件和Telegram享受无限制实时通知。无需信用卡即可开始。
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 5个网站免费监控（60秒间隔），公开状态页。
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [Axiom](https://axiom.co/) — 提供0.5TB日志存储（保留30天），包含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务，免费额度5,000次错误/月，自托管可无限使用
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后免费额度2,000次错误/月
* [CatchJS.com](https://catchjs.com/) — 带屏幕截图和点击轨迹的JavaScript错误追踪，开源项目免费
* [elmah.io](https://elmah.io/) — 面向开发者的错误日志与运行时间监控，为开源项目提供免费Small Business订阅
* [Embrace](https://embrace.io/) — 移动应用监控，小团队免费（每年最多100万用户会话）
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等，免费额度3,000事件/月/1用户，开源且支持无限量自托管
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪，兼容Sentry SDK，免费额度1,000事件/月，自托管无限制
* [honeybadger.io](https://www.honeybadger.io) — 异常、运行时间和定时任务监控，小团队及开源项目免费（12,000次错误/月）
* [Jam](https://jam.dev) — 开发者友好型一键错误报告，免费计划不限提交次数
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台，[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含5,000次错误/月、不限用户数、30天留存
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关
* [sentry.io](https://sentry.io/) — 实时应用异常追踪，含小额免费计划（5,000次错误/月/1用户），自托管无限制
* [Whitespace](https://whitespace.dev) — 浏览器内一键提交错误报告，个人用途免费计划不限录制次数

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，提供拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。另提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)  
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间  
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量  
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析  
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间  

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等领域的免费认证课程
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业领袖的免费短期课程，1小时内快速掌握最新生成式AI工具与技术
* [DevNet学院](https://devnet-academy.com/) – 面向Cisco DevNet专家/CCIE自动化认证的免费自学课程，涵盖Python Click和Flask-RESTx框架
* [Django教程网](https://django-tutorial.dev) - 提供Django框架入门指南，并为用户撰写的文章提供免费dofollow反向链接
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费在线课程，专注计算机科学、工程与数据科学领域
* [Exercism](https://exercism.org) – 开源非营利组织，提供75+编程语言的免费编程教育，含人工指导
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 海量ATS优化专业简历模板，支持克隆编辑下载
* [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台提供数据分析、信息安全、Web开发等免费认证课程
* [全栈开放课程](https://fullstackopen.com/en/) – 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等技术
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - HTML/CSS、JavaScript和SQL从入门到精通的免费指南
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程与数据科学
* [MIT开放课程](https://ocw.mit.edu/) - 提供2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [奥丁项目](https://www.theodinproject.com/) - 专注JavaScript和Ruby的Web开发开源课程
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱服务，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费计划包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，免费支持最多100名订阅者
* [Contact.do](https://contact.do/) — 链接式联系表单（类似Bitly的短链接形式）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，客户端邮件发送工具（无需暴露凭证），免费层每月200次请求/2个模板/50KB请求限制/有限联系人历史
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每日上限300封
* [EmailOctopus](https://emailoctopus.com) - 免费支持2500名订阅者，每月10000封邮件
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务（主要面向Nodemailer和EmailEngine用户），完全免费的反事务性邮件服务（邮件永不实际投递）
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发（注：使用.casa/.cf/.click等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器（用于测试环境），永久免费账户每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [Inboxes App](https://inboxesapp.com) — 每日创建最多3个临时邮箱（通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱（邮件3天后自动删除），开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API，每月5000封邮件/无限域名/免费邮箱验证/黑名单监控等
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API（支持REST和SMTP），每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封邮件免费
* [Maildroppa](https://maildroppa.com) - 免费支持100名订阅者，无限邮件发送及自动化流程
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统（任意收件箱均可使用）
* [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每日200封发送限制）
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API（每月1500次限制）/公共邮件托管/外发捕获/Slack/Webhook集成
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP服务，每月3500封事务性和营销邮件免费。开发用模拟SMTP服务器（1个收件箱/100条消息/无团队成员/每秒2封邮件限制）
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID/1个域名/1个收件箱（所有ID共享同一收件箱）
* [OneSignal](https://onesignal.com/) — 每月10000封邮件免费，无需信用卡
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据到服务器）
* [Plunk](https://useplunk.com) - 每月3000封邮件免费
* [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（端到端加密），1GB存储空间
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封/每日100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者免费
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案（免费5个别名/无限流量/收发不限）。教育工作者（学生/研究人员等）完全免费
* [Substack](https://substack.com) — 无限免费电子报服务（收费时开始付费）
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每日500封免费
* [temp-mail.io](https://temp-mail.io) — 多账号临时邮箱服务（支持转发）
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时邮箱生成器（每次刷新页面更换地址），完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200次邮箱是否为临时地址
* [trashmail.com](https://www.trashmail.com) - 带转发功能和自动过期的免费临时邮箱
* [Tuta](https://tuta.com/) - 免费安全邮箱服务（端到端加密/无广告/无追踪），1GB存储+1个日历（提供[付费方案](https://tuta.com/pricing)），部分[开源](https://github.com/tutao/tutanota)可自托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API（含收件箱确认和临时邮箱检测），每日25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务，每月100次免费验证

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台。支持代码化配置和全类型化Typescript SDK，深度集成Next.js、React等框架。提供慷慨的免费层级和低成本扩展方案。
* [ConfigCat](https://configcat.com) - 面向开发者的功能开关服务，支持无限团队规模，提供优质服务与合理定价。免费计划包含10个开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 跨平台功能发布管理，支持Web、移动端及服务端应用。可选择托管API、私有云部署或本地化运行方案。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，不限功能开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置平台，提供Git式版本控制和同步内存本地评估。5人团队免费使用，不限开关与测试数量。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析一体化平台。免费计划包含无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Toggled.dev](https://www.toggled.dev) - 企业级多区域功能开关管理平台。免费版支持10个开关、2个环境且不限请求量，包含SDK、分析看板、发布日历、Slack通知等完整功能。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [Befonts](https://befonts.com/) - 提供多种独特字体，支持个人或商业用途
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [dafont](https://www.dafont.com/) - 本站所有字体均为作者所有，包含免费版、共享版、试用版及公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多款工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Font Squirrel](https://www.fontsquirrel.com/) - 精选可商用的免费字体库，采用易用格式呈现
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰的可下载字体库
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，包含中日韩(CJK)字体标签
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，个人和商业用途均可100%免费使用
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接Google CDN即可快速部署的免费字体库

**[⬆️ 返回顶部](#目录)**

## 表单

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化图形界面，支持与Google Sheets、Airtable、Slack、电子邮件等平台集成。
* [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等场景。免费版每月允许250次提交和5个活跃表单。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集总计25条反馈提交。提供React和Vue组件便于集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点服务。含通知、垃圾信息拦截和GDPR合规数据处理功能。基础使用免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特风格的表单——不限创建表单数量或功能限制。免费版每月100次提交。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月，含邮件通知。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100条回复，支持网站嵌入或链接分享。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每月每个表单50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点服务。永久免费，无需注册。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过界面将提交内容转发至邮箱、Slack或Zapier。可使用自有前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版支持创建无限表单和收集无限提交，含预制模板、反垃圾功能和100MB文件存储。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点服务，特别适合静态网站。免费版支持1个网站每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点1个表单，每月1,000次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF文件，每个PDF允许3次提交。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB文件存储，支持Zapier集成、CSV/JSON导出、自定义跳转/响应页面、Telegram & Slack机器人通知及单邮件提醒。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可免费轻松集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [Survicate](https://survicate.com/) — 一站式多渠道收集反馈并发送跟进调查。通过AI自动分析反馈提取洞察。免费版含邮件/网站/产品内/移动端问卷、AI问卷生成器和每月25条回复。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款功能、文件上传、自定义致谢页等。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入设计精美的表单。免费版限制每个表单10个字段和每月100条回复。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版包含1个活跃问卷，每份问卷25条回复和可定制模板。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持webhook通知。免费版会对签署文件添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 无需编写后端代码即可为静态&JAMStack网站添加联系表单。免费版支持无限表单、无限域名和每月250次提交。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Arize AX](https://arize.com) - 帮助AI工程师/产品经理评估和监控AI应用及智能体的工程平台，内置Alyx智能体。免费版包含每月25,000次调用和1GB数据吞吐量
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — 基于AI的SaaS音频处理工具，可消除噪声和回声同时保持人声自然清晰。完全免费：支持无限次一键增强，无需登录，兼容MP3/WAV/FLAC格式
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估测试、提示词调试及数据管理平台。免费计划每周提供1,000条私有评估数据行
* [Clair](https://askclair.ai/) - 临床医学AI参考工具。学生可免费使用专业套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码及抗菌管理功能。专业套件另提供免费试用
* [Comet Opik](https://www.comet.com/site/products/opik/) - 全生命周期评估、测试和部署LLM应用 [#开源项目](https://github.com/comet-ml/opik/)
* [Keywords AI](https://keywordsai.co) - 顶级LLM监控平台。两行代码即可调用200+大语言模型。每月10,000次免费请求，平台功能完全免费！
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，协助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月50,000次观测和全部平台功能 [#开源项目](https://github.com/langfuse/langfuse)
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词与数据集，并调试LLM应用性能问题。支持为任何LLM生成开放遥测标准追踪数据，免费计划每月提供50,000次追踪
* [LangWatch](https://langwatch.ai) - LLMOps平台，助力AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，实现技术与非技术团队间的无缝协作。免费计划包含全部平台功能、每月1,000次追踪和1个工作流DSPy优化器 [#开源项目](https://github.com/langwatch/langwatch)
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000个免费token额度，支持Azure OpenAI、DeepSeek和Google Gemini模型，适用于代码生成、深度研究和图像创作
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型包括DeepSeek R1/V3、Llama和Moonshot AI，擅长自然语言处理且适用多样开发需求（注意存在速率限制）。另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型
* [Othor AI](https://othor.ai/) - 基于大语言模型的商业智能解决方案，可快速生成定制化分析报告。永久免费版提供1个工作区、5个数据源连接和无限次分析 [#开源项目](https://github.com/othorai/othor.ai)
* [Pollinations.AI](https://pollinations.ai/) - 免登录、无API密钥限制的免费图像生成AI，提供多种网站集成方案 [#开源项目](https://github.com/pollinations/pollinations)
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，含观测套件和AI网关功能。每月免费处理10,000次请求
* [ReportGPT](https://ReportGPT.app) - AI写作助手。平台完全免费（需自备API密钥）
* [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，自动修正Cursor/Windsurf/Copilot等工具的输出以满足企业质量标准。免费版包含每日100次MCP服务器调用和25次GitHub自动PR审查

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名和通用SSL证书
* [cdnjs.com](https://cdnjs.com/) — 简洁、快速、可靠的内容分发网络。由Cloudflare提供支持，全球超过11%的网站信任此开源CDN服务
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库为最流行的开源JavaScript库提供内容分发网络
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，附带免费DNS托管
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等平台
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管jQuery等流行第三方JavaScript库，方便集成到Web应用中
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费版支持最多5个用户和每日1GB流量
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费100万次请求
* [statically.io](https://statically.io/) — 为Git仓库（GitHub/GitLab/Bitbucket）、WordPress资源和图片提供CDN加速
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理服务。个人开发者免费（无技术支持）
* [UNPKG](https://unpkg.com/) — npm全库CDN服务
* [weserv](https://images.weserv.nl/) — 图片缓存与尺寸调整服务。实时处理图片并享受全球缓存

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或管理基础设施即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费预览版包含每小时 500 次调用、每日 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中可用。
  * [anvil.works](https://anvil.works) - 仅用 Python 开发 Web 应用。免费层提供无限应用和 30 秒超时。
  * [Apply.build](https://apply.build/) — 免费构建并部署您的 GitHub 应用，配备 0.5 vCPU / 512 MiB RAM、欧洲服务器、自动防火墙、实时性能指标。支持 Node.js、Python、Go、Java、静态网站、微服务等。
  * [appwrite](https://appwrite.io) - 无限项目且无项目暂停（支持 WebSocket）和认证服务。免费层每个项目包含 1 个数据库、3 个存储桶和 5 个函数。
  * [Choreo](https://wso2.com/choreo/) - 面向 AI 原生的内部开发者平台即服务。免费层包含最多 5 个组件和每月 100 美元额度。
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限。
  * [Daestro](https://daestro.com) - 跨云提供商和本地运行计算任务。免费层包含最多 10 个并发任务运行、2 个计算实例、自托管计算、1 个云提供商、1 个容器注册表和 1 个定时任务。
  * [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的 JavaScript、TypeScript 和 WebAssembly 分布式系统。免费层包含每日 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – 提供 GitHub CI/CD、SSH 和 MariaDB/Postgres 数据库的 Linux 托管服务。免费版含 1 GB 存储和 1 GB 网络/月流量限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 通过静态分析提供自动基础设施、无样板代码等的后端框架。包含业余项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过 Git 推送式工作流在您自己的 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 仓库的开发者免费层。AWS 费用通过 AWS 计费，但可使用额度及 AWS 免费层。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供 1 个永不休眠的免费实例和限制为 2 连接、10,000 行且无备份的免费层 PostgreSQL 数据库。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是面向开发者的无服务器平台，用于全球部署应用。无缝运行 Docker 容器、Web 应用和 API，支持基于 Git 的部署、原生自动扩展、全球边缘网络及内置服务网格和发现。免费实例可在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管 PostgreSQL 数据库位于法兰克福（德国）、华盛顿特区（美国）和新加坡。512MB 内存、2GB 存储和 0.1 CPU。
  * [leapcell](https://leapcell.io/) - Leapcell 是可靠的分布式应用平台，提供支持快速增长所需的一切。免费计划包含 10 万次服务调用、1 万次异步任务和 10 万次 Redis 命令。
  * [Northflank](https://northflank.com) — 通过强大的 UI、API 和 CLI 构建并部署微服务、任务和托管数据库。从版本控制和外部 Docker 注册表无缝扩展容器。免费层包含 2 个服务、2 个定时任务和 1 个数据库。
  * [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台。基于任何触发器开发任何工作流。工作流是可[免费](https://docs.pipedream.com/pricing/)运行的代码。无需管理服务器或云资源。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — Python 云应用托管。新手账户免费，1 个 Python Web 应用位于 your-username.pythonanywhere.com 域名，512 MB 私有文件存储，1 个 MySQL 数据库。
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，可快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费计划](https://wundergraph.com/pricing)包含最多 3 个项目、1GB 出口流量和每月 300 分钟构建时间。
  * [YepCode](https://yepcode.io) - 一体化平台，在无服务器环境中连接 API 和服务。兼具 NoCode 工具的敏捷性和编程语言的全部能力。免费层包含 [1,000 次 yeps](https://yepcode.io/pricing/)。
  * [Zeabur](https://zeabur.com) - 一键部署服务。免费支持 3 个服务，每月赠送 5 美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程以连接多个应用的后端。例如当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与网页Baas服务，含1GB免费文件存储、每月5万次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速构建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [Claw.cloud](https://run.claw.cloud) - 提供每月$5免费额度的PaaS平台（需GitHub账号注册180天以上），适合托管应用、数据库等。([免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin))。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。1000用户以内免费。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小型项目免费——100万条记录/500万次月度函数调用。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI生成器和模板全集。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、视频音频及信息流功能（通常需数周）。
* [IFTTT](https://ifttt.com) — 自动化连接您喜爱的应用与设备。免费版支持2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟。
* [LeanCloud](https://leancloud.app/) — 移动后端服务。免费含1GB数据存储、256MB实例、每日3K次API请求及10K次推送。（API与Parse平台高度兼容）
* [nhost.io](https://nhost.io) - 为网页和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、身份验证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月1万封邮件（联系人无限制），含自动预热功能。
* [paraio.com](https://paraio.com) — 带灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pusher.com](https://pusher.com/beams) — 2000月活用户内免费无限推送通知。支持iOS/Android的统一API。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，无限结构化数据传输与存储（每月最多2500用户）。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供身份验证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) — 含认证、配额、监控和分析的API管理平台。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。免费版支持每15分钟5次Zap/每月100次任务。

更新时间：五个活跃自动化流程，支持Webhooks。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表板。支持与15+种数据库和任意API集成
* [BudiBase](https://budibase.com/) — 开源低代码平台，可在几分钟内创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具有拖放界面、离线支持、实时位置跟踪及多种第三方服务集成功能
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，使用内置的免费API如OpenAI、Anthropic、Firecrawl等。非常适合构建AI代理/内部工具并与团队共享。免费层包含API完全访问权限、AI编码助手和每月10,000次执行额度
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费支持1名用户和每月100万次工作流活动（[另有德语版本](https://www.manubes.de)）
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5 GB存储和1 GB内存。免费层还允许使用Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS，支持本地或云端部署。免费"个人环境"提供无限代码和最多1 GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。Retool具有高度可定制性，任何能用JavaScript和API实现的功能都可以在Retool中完成。免费层每月最多支持5个用户，无限应用和API连接
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。可连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖拽式应用构建器创建应用
* [UI Bakery](https://uibakery.io) — 低代码平台，能更快地构建定制Web应用。支持通过拖放构建UI，并通过JavaScript、Python和SQL实现高度定制。提供云端和自托管解决方案。最多5个用户免费使用

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费虚拟主机，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。可自定义Web服务器，支持FTP/WebDAV/SSH访问，含邮箱/邮件列表/应用安装器。免费版不支持自定义域名。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL/应用安装器/邮件发送，无广告。
* [Bubble](https://bubble.io/) — 可视化编程构建网页和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化托管平台，专注提升可用性与安全性，为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform入门级免费部署3个静态站点。
* [FreeFlarum](https://freeflarum.com/) - 社区支持的Flarum免费托管（支持250用户，捐赠可移除页脚水印）。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名+SSL，每月100GB流量，260+Cloudflare CDN节点。
* [MDB GO](https://mdbgo.com/) - 单项目免费托管，容器存活期两周，500MB内存，SFTP-1GB存储空间。
* [Neocities](https://neocities.org) — 静态网站托管，1GB存储+200GB月流量。
* [Netlify](https://www.netlify.com/) — 静态站点构建/部署/托管，每月300积分（约30GB带宽）。
* [Oaysus](https://oaysus.com) - 面向React/Vue/Svelte组件的可视化页面构建器。免费版含1个站点（不限页面数）、表单提交和全球CDN托管。
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供多种托管形式（静态/容器化/WordPress等一键部署应用）。免费包含1个网站托管+1个数据库，100GB带宽+300分钟构建时长/月。
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管，自动化DevOps与弹性架构。面向开发者和代理商免费，不支持自定义域名。
* [Qoddi](https://qoddi.com) - 类Heroku的PaaS服务，全功能开发者平台。免费版支持静态资源/预发布环境/开发应用。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能。
* [render.com](https://render.com) — 一体化云平台，免费提供SSL/全球CDN/私有网络/Git自动部署，支持Web服务/数据库/静态网页的完全免费方案。
* [Serv00.com](https://serv00.com/) — 3GB免费空间含每日备份（保留7天），支持Crontab/SSH/代码仓库(GIT/SVN/Mercurial)，运行环境涵盖MySQL/PostgreSQL/MongoDB/PHP/Node.js/Python/Ruby/Java等30+语言。
* [SourceForge](https://sourceforge.net/) — 免费发现、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者专属静态网页发布工具，支持无限站点与自定义域名。
* [tilda.cc](https://tilda.cc/) — 1个站点50页50MB存储，仅限170+预设区块中的基础模块，不支持自定义字体/网站图标/域名。
* [Vercel](https://vercel.com/) — 构建/部署/托管Web应用，免费提供SSL/全球CDN，每次`git push`生成专属预览链接。完美支持Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — SaaS建站工具，免费版支持无限网站/70+区块/5套模板，可自定义CSS/网站图标/SEO/表单，不含自定义域名。

**[⬆️ 返回顶部](#目录)**

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多种高级功能。
* [cloudns.net](https://www.cloudns.net/) — 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费托管服务。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS，最多支持5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，同时提供基于用户共享域名的[子域名注册](https://freedns.afraid.org/domain/registry/)。注册后通过"Subdomains"菜单申请免费子域名。
* [Glauca](https://docs.glauca.digital/hexdns/) – 免费托管最多3个域名，支持DNSSEC。
* [Hetzner](https://www.hetzner.com/dns-console) – Hetzner提供的免费DNS托管，支持API。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 华为云免费DNS托管。
* [LocalCert](https://localcert.net) - 提供免费的`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS，域名数量无限制。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 免注册、无追踪、无广告的免费动态DNS服务，域名数量不限。
* [noip](https://www.noip.com/) — 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含IP地址的主机名时返回该IP地址。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
* [zilore.com](https://zilore.com/en/dns) — 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务。免费版支持1个DNS区域（域名）和10条记录。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷地将IPFS和Arweave网络中的文件上传存储。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储服务
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 兼容S3协议的对象存储。每月免费15GB存储空间及15GB下载流量。
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费的5GB存储空间。
  * [Tebi](https://tebi.io/) - 兼容S3协议的对象存储。免费25GB存储空间及250GB出站流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是一个专为 JavaScript 开发者打造的全栈低代码开发平台，基于 MySQL 和 GraphQL 构建，提供无服务器后端即服务。通过 UI 应用构建器快速开发 Web 应用并轻松扩展。免费版包含：2,500 行数据、500MB 存储空间、1GB/小时的无服务器计算资源以及 5 个客户端应用用户。
  * [airtable.com](https://airtable.com/) — 看似电子表格，实为关系型数据库。免费版支持无限基数库，每个库 1,200 行数据，每月 1,000 次 API 请求。
  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点配置为 1 CPU、1GB 内存，PostgreSQL 和 MySQL 额外包含 1GB 存储空间。可轻松迁移至更高级方案或跨云部署。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供 5,000 万请求单位（RU）和 10 GiB 存储空间（价值 15 美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，支持函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费版含 5GB 存储和每分钟 60 次 API 调用，支持 2 名开发者，无需信用卡。
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，含 1 个节点和 8GB 存储空间，专为开发者打造，支持从物联网到人工智能的下一代应用开发。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，专为实时分析设计。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点配置为 2 CPU、2 GiB 内存、8 GiB 存储。每个组织可创建一个集群，无需支付方式。
  * [filess.io](https://filess.io) - filess.io 平台允许免费创建两个数据库，每个数据库最大 10 MB，支持 MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每 5 分钟写入 3MB、读取 30MB 数据，以及 10,000 个基数序列。
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费版支持 25MB 内存、1 个代理服务器和基础分析功能。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB 存储空间。
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。免费版限制图规模（5 万节点、17.5 万关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL 服务，免费版包含 0.5 GB 总存储空间、1 个项目、10 个分支、无限数据库、始终可用的主分支（5 分钟后自动暂停），非主分支计算每月 20 小时活跃时间。
  * [Nile](https://www.thenile.dev/) — 专为 B2B 应用打造的 Postgres 平台。无限数据库、永不停止服务、1GB 总存储空间、5,000 万查询令牌、自动扩展、无限向量嵌入。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于单内核技术构建的超快托管 Postgres，运行于裸金属服务器。免费版含 1GB 存储、10 个数据库，并与 Prisma ORM 深度集成。
  * [restdb.io](https://restdb.io/) - 快速简洁的 NoSQL 云数据库服务。提供模式定义、关系管理、自动 REST API（支持类 MongoDB 查询）以及高效的多用户管理界面。免费版支持 3 个用户、2,500 条记录和每秒 1 次 API 请求。
  * [scalingo.com](https://scalingo.com/) — 主要提供 PaaS 服务，但包含 128MB 至 192MB 的免费 MySQL、PostgreSQL 或 MongoDB 方案。
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活电子表格式数据库。免费版支持无限表格、2,000 行数据、1 个月版本历史记录和最多 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云端数据平台，测试期间所有方案完全免费。
  * [StackBy](https://stackby.com/) — 集电子表格的灵活性、数据库的强大功能及与常用商业应用的内置集成为一体。免费版包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
  * [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse 服务，支持通过 HTTP 无连接数据摄入，并可将 SQL 查询发布为托管 HTTP API。免费版无时间限制，提供 10GB 存储空间和每日 1,000 次 API 请求。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验方案。永久免费入门版提供 9 GB 总存储空间、最多 500 个数据库、3 个地理位置部署、每月 10 亿行读取量，以及本地 SQLite 开发支持。
  * [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费层每月支持 50 万次命令、256MB 最大数据库容量和 20 个并发连接。
  * [Xata Lite](https://lite.xata.io/) - Xata Lite 是无服务器数据库，内置强大搜索和分析功能。提供统一 API、多个类型安全客户端库，并针对开发流程优化。免费版包含 10 个分支和 15 GB 存储空间，无暂停或冷启动问题。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露到局域网或通过隧道生成公网URL
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持
* [Hamachi](https://www.vpn.net/) — LogMeIn提供的托管VPN服务，可安全扩展类局域网网络，免费版支持最多5人无限网络
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。每月10万请求和10万尝试，保留3天数据
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公网URL
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 提供托管版和[开源版](https://github.com/localtunnel/localtunnel)的本地服务暴露方案
* [LocalXpose](https://localxpose.io) — 反向代理工具，免费版隧道有效期为15分钟
* [ngrok.com](https://ngrok.com/) — 最流行的本地服务暴露解决方案
* [Pinggy](https://pinggy.io) — 单命令生成公网URL，无需下载。免费版隧道有效期60分钟
* [Radmin VPN](https://www.radmin-vpn.com/) — 组建类局域网的VPN网络（Hamachi替代方案），支持无限节点
* [serveo](https://serveo.net/) — 无需安装和注册的本地服务暴露方案，提供免费子域名
* [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) Twilio STUN服务
* [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) 谷歌STUN服务
* [Tailscale](https://tailscale.com/) — 基于WireGuard协议的无配置VPN，免费版支持100个设备和3个用户
* [webhookrelay.com](https://webhookrelay.com) — Webhook管理调试工具，可通过隧道将内网服务暴露为HTTP端点
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN调用+500MB/月TURN流量（限单区域）
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务，免费版支持25个客户端组成的端到端加密网络

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB空间（用户数不限）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表、25张工作表
* [clickup.com](https://clickup.com/) — 项目管理平台，提供免费版和含云存储的付费版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — 专业AWS架构图设计工具，免费版支持单人无限量私有图表
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版最多10个用户
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目（用户数不限）和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具，免费版每月3个公共看板和每个看板1次调研
* [freedcamp.com](https://freedcamp.com/) - 集成任务/讨论/里程碑/时间跟踪/日历/文件/密码管理，免费版不限项目/用户/存储
* [GForge](https://gforge.com) — 复杂项目管理与问题跟踪工具集，SaaS免费版前5用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具，可通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比两个GraphQL模式差异，标记为重大/非重大/危险变更
* [Helploom](https://helploom.com) - 提供永久免费在线客服系统的轻量级工具，通过复制粘贴脚本快速部署
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板（100MB存储）
* [Ilograph](https://www.ilograph.com/)  — 支持多视角查看的交互式架构图工具，免费版可创建无限私有图表（最多3位查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版最多10个用户
* [kan.bn](https://kan.bn/) - 灵活强大的看板工具，免费版支持1个用户（不限看板/列表/卡片）
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，提供免费基础版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版2个看板/2个用户（不含附件功能）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（面试/机会/人脉追踪），完全免费的Web应用和Chrome插件
* [Kumu.io](https://kumu.io/)  — 支持动画/装饰/筛选/集群/表格导入的关系图谱工具，免费版可创建无限公开项目，学生可获私有项目权限
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS，免费版支持10用户/20自定义字段/2GB存储/5分钟AI视频录制
* [Linear](https://linear.app/) — 极简风格问题追踪工具，免费版不限成员/10MB文件上传/250个问题
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版支持3个可编辑文档/100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目（成员不限）
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费基础版提供100MB存储/5用户团队，不限工作区/会议/任务/工时表
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具，免费版不限成员/5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克工具（共识估算），完全免费且无需注册
* [Pulse.red](https://pulse.red) — 极简主义项目时间追踪工具
* [ScrumFast](https://www.scrumfast.com) - 直观易用的Scrum看板，免费版最多5个用户
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/客服设计的项目管理工具，免费版支持3个项目/5个成员
* [Shake](https://www.shakebugs.com/) - 移动应用内Bug反馈工具，免费版每月10个Bug报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持10个用户
* [taiga.io](https://taiga.io/) — 面向敏捷开发者的项目管理平台，开源项目免费
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具，免费版提供1个工作区（任务不限）/1GB存储/1周历史记录/5人视频会议
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/计划工具，免费版最多15个用户

  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰游戏、GIF和表情符号。免费版支持3次回顾会议和无限成员参与。
* [Tenzu](https://tenzu.net/) — 专为敏捷团队打造的轻量级项目管理工具。该SaaS产品采用自愿付费模式，用户可选择支付0元且所有功能无付费墙 {[详情](https://tenzu.net/pricing/)}
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，可在问题/任务中实现结构化清单、模板和审批流程。小团队可使用免费计划。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版包含：5个活跃项目/项目内5名成员/5MB文件上传/3个过滤器/1周活动记录。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间管理应用（免费版为自由职业者设计，含无限追踪记录/项目/客户/标签/报告等功能）；[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版含无限任务/里程碑/时间线）。
* [trello.com](https://trello.com/) — 看板式项目管理。免费版支持无限个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台，含项目管理、版本控制和问题追踪。免费版提供无限项目/协作者和3GB存储。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。免费版支持3用户及无限项目。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），开源项目及私有项目适用（3用户免费）。含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌的独家项目管理方案。公开仓库/开源组织/非营利机构免费。
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版支持5成员/5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4项目/4用户。提供GitHub集成功能。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件托管](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图像上传、强大处理、存储和交付服务，支持Ruby、Python、Java、PHP、Objective-C等多种语言库。免费版每月包含25个积分（1积分=1,000次图像转换/1GB存储/1GB CDN流量）。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间和三台设备支持，推荐用户可获得5GB奖励（账户90天不活跃将失效）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器无法访问数据。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费版每月5,000个URL处理额度，速率限制为15请求/秒。
* [Ente](https://ente.io/) - 端到端加密的照片、视频和2FA秘密云存储。可自托管并提供永久免费的10GB基础版（免费用户数据仅保留单副本）。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，速率限制为1请求/分钟。
* [免费工具站](https://freetools.site/) — 在线免费工具集，支持文档、图像、音频、视频等格式转换与编辑。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客马拉松和移动应用设计的简易JSON数据存储API。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API操作。无文件大小、带宽和下载次数限制，但十天无下载的文件会被自动删除。
* [gumlet.com](https://www.gumlet.com/) — 图像视频托管、处理和CDN流媒体服务。免费版每月提供250GB视频流量和30GB图像流量。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，免费提供10GB空间。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图像图表生成服务。
* [ImageEngine](https://imageengine.io/) – 全球图像CDN服务，60秒内完成配置。支持AVIF/JPEGXL格式，提供WordPress、Magento、React、Vue等插件。开发者可申请[免费账户](https://imageengine.io/developer-program/)。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图像CDN，支持自动优化和实时转换。免费版每月20GB带宽。
* [ImgBB](https://imgbb.com/) — 无限量图像托管服务，支持拖拽上传（单文件32MB限制）。提供直链、BBCode和HTML缩略图，登录后可查看上传历史。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图像的机器人，在保持质量的同时减小文件体积。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限量社交媒体封面图生成API。
* [imgix](https://www.imgix.com/) - 图像缓存管理和CDN服务。免费版包含1,000个源图像、无限转换和100GB带宽。
* [internxt.com](https://internxt.com) – 基于零知识证明的绝对隐私文件存储服务，注册即享永久免费10GB空间。
* [kraken.io](https://kraken.io/) — 网站性能优化图像处理服务，免费版支持1MB以下文件。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费QR码生成器，不追踪用户数据。
* [nitropack.io](https://nitropack.io/) - 自动前端加速服务（缓存/图像/代码优化+CDN）。免费版每月5,000次页面浏览。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理工具。基础版支持无限传输（单文件250MB限制）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可申请免费开源计划。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，免费提供10GB空间。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费版含1GB存储。
* [plot.ly](https://plot.ly/) — 数据图表生成与分享平台。免费版包含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 最多5人团队可免费使用基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的批量QR码生成器，单次最多支持100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表和QR码。
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图像优化API，已集成至WordPress/Drupal/Magento等主流CMS，累计处理超70亿图像仍保持免费。
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时优化调整。免费版含500MB存储和2GB带宽。
* [SlingSite](https://slingsite.github.io) - 批量生成图像视频的优化版本（图像输出AVIF/WEBP/JPG三种格式及三种分辨率，视频输出WebM/HEVC MP4/AVC MP4格式及封面帧）。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，免费提供5GB空间。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩API，每月免费500次处理额度。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图像/文档转码服务。开源项目/慈善机构/学生通过GitHub学生包可免费使用，商业应用测试期享2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图像服务（含CDN/处理API/前端优化库）。免费版每月3GB流量。

  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Ant Design 着陆页](https://landing.ant.design/) - 由 Ant Motion 动效组件构建的模板，提供丰富的首页模板，可快速下载代码包使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，免费版支持3名编辑共同维护1个设计系统（不限查看人数）
* [BoxySVG](https://boxy-svg.com/app) — 可安装的网页版SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [日历图标生成器](https://calendariconsgenerator.app/) — 一键生成全年独特图标，完全免费
* [Canva](https://canva.com) - 在线视觉内容设计工具
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库（支持React/Vue/Svelte的SVG格式）
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成方案
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具（含视频和GIF）
* [CMYK转潘通色](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [CodedThemes](https://codedthemes.com/) - 精心打造的管理后台模板和UI套件，加速现代网页开发
* [CodeMyUI](https://codemyui.com) - 带代码片段的网页设计与UI灵感精选集
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 色彩与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变的免费工具（RGB/HEX格式）
* [css.glass](https://css.glass/) — 毛玻璃效果CSS生成器
* [DaisyUI](https://daisyui.com/) — 基于Tailwind CSS的组件库（减少类名书写），提供按钮等现成组件
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库
* [Excalidraw](https://excalidraw.com/) — 支持本地保存和导出的在线白板工具
* [figma.com](https://www.figma.com) — 团队协作设计工具（免费版含无限文件，最多2名编辑和3个项目）
* [Float UI](https://floatui.com/) - 非设计师也能快速创建现代响应式网站的免费工具
* [Flows](https://flows.sh/) — 完全可定制的用户引导平台（免费支持250名月活跃用户）
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) — 专业原型设计工具（免费版支持无限查看者+2名编辑+3个项目）
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库
* [Glyphs](https://glyphs.fyi/) — 完全可编辑的开源图标系统
* [Gradientos](https://www.gradientos.app) - 极简梯度配色工具
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的SEO优化网页构建器（前5页免费）
* [haikei.app](https://www.haikei.app/) - SVG形状/背景/图案生成工具
* [hypercolor.dev](https://hypercolor.dev/) — Tailwind CSS渐变色精选集+生成器
* [HyperUI](https://www.hyperui.dev/) — 开源Tailwind CSS组件库
* [Icon Horse](https://icon.horse) – 通过API获取任意网站高清favicon
* [iconify.design](https://icon-sets.iconify.design/) — 100+图标库统一搜索平台（支持导出SVG/框架组件）
* [Iconoir](https://iconoir.com) – 支持React/Flutter/Vue等框架的开源图标库
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐库（免费版分辨率受限）
* [图片背景模糊生成器](https://imagebgblurer.com/) — 为Notion/Trello等工具创建图片模糊背景框
* [landen.co](https://www.landen.co) — 无代码建站工具（免费版支持1个全功能网站）
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Logo.dev](https://www.logo.dev) - 企业LOGO查询API（前1万次调用免费）
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具
* [LottieFiles](https://lottiefiles.com/) - 轻量动画格式Lottie资源平台
* [Lucide](https://lucide.dev) - 可定制SVG图标工具包
* [Lunacy](https://icons8.com/lunacy) — 内置素材的离线图形设计工具（免费版含10个云文档）
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集
* [marvelapp.com](https://marvelapp.com/) — 设计协作平台（免费版限1用户1项目）
* [Mastershot](https://mastershot.app) - 无水印的浏览器视频编辑器（支持1080P导出）
* [MDBootstrap](https://mdbootstrap.com/) - 免费商用UI套件（700+组件/精美模板）
* [Mindmup.com](https://www.mindmup.com/) — 云端无限量思维导图工具
* [摹客iDoc](https://www.mockplus.com/idoc) - 设计协作与交付工具（免费版支持3用户5项目）

  * [Modeldraw.com](https://modeldraw.com) — 完整的图表绘制平台，支持UML、系统架构图、流程图、思维导图和敏捷工作流。支持无限团队成员实时协作，无需信用卡。
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器，提供波浪、博客和图案等多种工具。
* [movingpencils.com](https://movingpencils.com) — 快速、基于浏览器的矢量编辑器。完全免费。
* [Nappy](https://nappy.co/) -- 免费的黑人和棕色人种精美照片，可用于商业和个人用途。
* [NextUI](https://nextui.org/) -- 免费、美观、快速且现代的React & Next.js UI库。
* [NSPolygon](https://nspolygon.com) — 免费库存照片、图标和插图。
* [Octopus.do](https://octopus.do) — 可视化站点地图构建器。实时构建网站结构并快速分享以与团队或客户协作。
* [OKLCH](https://oklch.net/) -- 免费的OKLCH颜色选择器和转换器，适用于网页设计师和开发者。
* [okso.app](https://okso.app) - 极简在线绘图应用。可快速创建草图和视觉笔记。支持导出为PNG、JPG、SVG和WEBP格式。也可作为PWA安装。完全免费使用（无需注册）。
* [Pencil](https://github.com/evolus/pencil) - 使用Electron的开源设计工具。
* [Penpot](https://penpot.app) - 基于网页的开源设计和原型工具。支持SVG。完全免费。
* [pexels.com](https://www.pexels.com/) - 免费商用库存照片。提供免费API，可按关键词搜索照片。
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，具有Adobe Photoshop界面，支持PSD、XCF和Sketch格式（Adobe Photoshop、Gimp和Sketch App）。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人注目的独特图形和图像。
* [pixlr.com](https://pixlr.com/) — 免费在线浏览器编辑器，功能媲美商业软件。
* [Plasmic](https://www.plasmic.app/) - 快速、易用、强大的网页设计工具和页面构建器，可集成到代码库中。构建响应式页面或复杂组件；可选代码扩展；发布到生产站点和应用。
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 直接在浏览器中将PNG图像转换为WebP图像。无需上传，完全客户端处理，确保最大隐私和安全性。
* [Pravatar](https://pravatar.cc/) - 生成随机/占位虚拟头像，URL可直接热链到网页/应用中。
* [Proto.io](https://www.proto.io) - 创建完全交互式UI原型，无需编码。免费试用结束后仍可使用免费版，包含1个用户、1个项目、5个原型、100MB在线存储和proto.io应用预览。
* [Quant Ux](https://quant-ux.com/) - Quant Ux是一款原型设计和设计工具。完全免费且开源。
* [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标调整和管理服务。
* [Responsively App](https://responsively.app) - 免费开发工具，加速更精确的响应式网页应用开发。
* [Rive](https://rive.app) — 创建并发布精美动画到任何平台。个人用户永久免费。服务包含编辑器并托管所有图形。还提供多平台运行时以运行Rive制作的图形。
* [SceneLab](https://scenelab.io) - 在线模型图形编辑器，提供不断扩展的免费设计模板库。
* [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计自定义网页滚动条。
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局的主题变化。
* [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到应用中。可访问、可定制、开源。
* [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模型。
* [storyset.com](https://storyset.com/) — 使用此工具为项目创建惊人的免费定制插图。
* [Superdesigner](https://superdesigner.co) - 一系列免费设计工具，只需点击几下即可创建独特背景、图案、形状、图像等。
* [SVG Converter](https://svgconverter.online/) -- 免费JPG/PNG转SVG转换器，支持调色板自定义。
* [SVGmix.com](https://www.svgmix.com/) - 超过30万免费SVG图标、合集和品牌标志的庞大库。内置浏览器简单矢量编辑程序，可快速编辑文件。
* [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合项目的图标或矢量图。下载免费商用SVG矢量图。
* [tabler-icons.io](https://tabler-icons.io/) — 超过1500个免费可复制粘贴的SVG可编辑图标。
* [Tailark](https://tailark.com/) - 一系列现代、响应式、预构建的营销网站UI块。
* [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板。即时预览并复制完美的Tailwind CSS颜色类。
* [Tailkits](https://tailkits.com/) -- 精选Tailwind模板、组件和工具集合，以及代码、网格、阴影等实用生成器。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作前端平台，可即时创建和发布无头静态网站。三个免费项目，无限协作，免费代码导出。
* [TW Elements](https://tw-elements.com/) - 使用Tailwind CSS重新创建的免费Bootstrap组件，设计更优，功能更多。
* [tweakcn](https://tweakcn.com/) — shadcn/ui的精美主题。实时自定义颜色、排版等。
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成首字母头像。URL可直接热链到网页/应用中。支持通过URL配置参数。
* [unDraw](https://undraw.co/) - 不断更新的精美SVG图像集合，完全免费使用且无需署名。
* [Unicorn Platform](https://unicornplatform.com/) - 轻松构建带托管的落地页。免费一个网站。
* [unsplash.com](https://unsplash.com/) - 免费商用和非商用库存照片（随意使用许可）。
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的WYSIWYG网站构建器。非商业用途免费。
* [vector.express](https://vector.express) — 快速轻松转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
* [vectr.com](https://vectr.com/) — 网页+桌面免费设计应用。
* [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件转换平台。包括开发者转换器如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
* [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，免费版支持3个最多5步的引导流程。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
* [Webflow](https://webflow.com) - 带动画和网站托管的WYSIWYG网站构建器。免费两个项目。
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费版提供无限网站（使用其域名）、5个自定义域名网站、每月1万次页面浏览和2GB资源存储。
* [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。免费创建最多4个面板。

  * [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计稿、资源文件和样式指南。单个项目免费使用。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+完全可搜索的移动应用截图库，节省UI和UX研究时间。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 许多移动和网页应用完整流程的视频。还包括截图。高度可搜索和索引。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。
* [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动截图] 精选的应用商店设计截图集合。
* [Uiland Design](https://uiland.design/) - [移动截图] 探索来自非洲和世界领先公司的移动和网页UI设计。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) — 精密如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询API
* [Geokeo api](https://geokeo.com) - 支持语言校正的全球覆盖地理编码API。每日2500次免费查询
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路线优化、距离矩阵、地理编码和地图匹配服务
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [IP Geolocation](https://ipgeolocation.io/) — 免费开发者计划每月3万次请求
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示的地图服务、地理空间服务与SDK
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与可视化SDK。每周更新的免费矢量瓦片和四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2500次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排名的地理编码搜索服务
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2500次免费地图浏览和API请求

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用构建工具。开源IDE完全免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 开源IDE，可在Android设备上开发基于Gradle的真实应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作设计API，即时模拟API并生成文档（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - 广受欢迎且可扩展的macOS编辑器。免费版提供[强大核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，支持升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转化为交互式笔记本集合。免费公共服务。
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI帮助新手入门。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器。轻量易用，高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持100+编程语言和标签分类。
* [cocalc.com](https://cocalc.com/) —（原cloud.sagemath.com）— 云端协作计算。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等。
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，基于GitHub Codespaces为学生和教师优化。
* [Code::Blocks](https://codeblocks.org) — 免费Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
* [codepen.io](https://codepen.io/) — 前端开发者的线上游乐场。
* [codesandbox.io](https://codesandbox.io/) — React、Vue、Angular、Preact等技术的在线沙盒。
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索、定义和复用代码片段的编程助手。个人和小型团队免费。
* [Components.studio](https://webcomponents.dev/) - 独立开发组件，通过故事可视化，测试并发布至npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于网页和Kubernetes的多语言支持IDE。开源社区驱动。Red Hat托管实例：[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI结对编程工具。原生CLI集成，无缝适配任何IDE。免费层含基础AI模型本地处理。
* [GetVM](https://getvm.io) — 即时免费Linux和IDE侧边栏。每日5台VM额度。
* [JDoodle](https://www.jdoodle.com) — 60+语言在线编译器，免费版REST API每日200次编译额度。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具与IDE（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源团队免费授权。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 返回模拟JSON数据的REST API端点。支持本地部署。
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 免费AI驱动的云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量API模拟服务，生成虚假JSON数据。
* [mockable.io](https://www.mockable.io/) — 快速配置REST/SOAP接口模拟服务，支持JSON/XML数据返回。
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式测试数据，支持后端API模拟。
* [Mocklets](https://mocklets.com) - HTTP模拟API工具，终身免费层支持并行开发和测试。
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的在线编译器，含Java/Python/C++/JavaScript。
* [Paiza](https://paiza.cloud/en/) — 无需配置的浏览器开发环境。免费版提供1台24小时有效服务器，每日4小时运行时间（2核CPU/2GB内存/1GB存储）。
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
* [Replit](https://replit.com/) — 多语言云端编程环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云编程平台。免注册执行代码，保存需登录。提供免费编程课程。
* [stackblitz.com](https://stackblitz.com/) — 全栈应用云端IDE。支持主流NodeJs框架。快速创建项目：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - 多功能高度可定制文本编辑器。
* [Visual Studio Code](https://code.visualstudio.com/) - 微软开发的现代化代码编辑器，优化Web和云应用开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能IDE，支持跨平台开发（iOS/Android扩展）、桌面/Web/云开发及多语言（C#/C++/JavaScript/Python/PHP等）。
* [VSCodium](https://vscodium.com/) - 无遥测/跟踪的VSCode社区发行版。
* [wakatime.com](https://wakatime.com/) — 通过编辑器插件量化编程活动，免费基础版。
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持内联渲染、会话保存。基于开放Web标准，支持MacOS/Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器IDE，含58个模板支持组件隔离开发、故事化和测试。
* [Zed](https://zed.dev/) - Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多支持2个应用
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在简化跨平台的分析和产品更新管理。免费计划包括每月10,000次事件、产品日志和每周洞察。
* [Aptabase](https://aptabase.com) — 开源、注重隐私且简单的移动和桌面应用分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费提供20,000次事件。
* [Avo](https://avo.app/) — 简化的分析发布工作流。单一真实来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观察性，确保在发布前发现所有数据问题。免费提供两名工作区成员和1小时的数据可观察性回溯。
* [Beampipe.io](https://beampipe.io) - Beampipe是一款简单、注重隐私的网站分析工具。免费支持最多5个域名和每月10,000次页面浏览。
* [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。将数据仓库中的10个字段同步到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3,000次浏览分析。
* [counter.dev](https://counter.dev) — 简单且注重隐私的网站分析工具。免费或按捐赠付费。
* [DocBeacon](https://docbeacon.io) - 安全的文档共享，附带文档跟踪和参与度分析。免费计划支持最多20个PDF文档（最大10 MB）、10个联系人和每文档2次分享，提供基本的浏览、下载、时间和参与度分析。
* [Dwh.dev](https://dwh.dev) - 数据云可观察性解决方案（Snowflake）。个人使用免费。
* [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月免费提供3,000次事件。
* [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一款开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网站分析，作为Google Analytics或Matomo的替代方案。免费层适用于非商业用途，包括无限站点、六个月数据保留和每月100,000次页面浏览。
* [Google Analytics](https://analytics.google.com/) — Google Analytics
* [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。每月免费提供10,000次会话。
* [Hightouch](https://hightouch.com/) - Hightouch是一款反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个目的地用于数据同步。
* [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天2,000次页面浏览。每天100次快照（最大容量：300）。可存储三个快照热图365天。无限团队成员。还包括应用和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20条回复。
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包括每月10,000次事件。
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划允许每月100万次页面浏览，无需信用卡。
* [Mixpanel](https://mixpanel.com/) — 每月100,000名跟踪用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月免费提供500,000次API调用）
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费提供100万次跟踪事件。还包括每月250次回复的无限应用内调查。
* [Repohistory](https://repohistory.com) - 美观的仪表板，用于跟踪GitHub仓库流量历史超过14天。免费计划允许用户监控单个仓库的流量。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿。
* [Rybbit](https://rybbit.io) - 开源的、无Cookie的Google Analytics替代方案，直观性提升10倍。免费计划每月提供3,000次事件。
* [Seline](https://seline.so) - Seline是一款简单且私密的网站和产品分析工具。无Cookie、轻量级、独立。免费计划包括每月3,000次事件，并提供对所有功能的访问，如仪表板、用户旅程、漏斗等。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划提供最近500名访问者的分析。
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月免费提供100万次计量事件。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，促进无缝协作。将其部署到生产环境以处理真实流量，或在不编写代码的情况下为回归测试添加分析覆盖。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私友好型Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标跟踪。免费支持最多3个域名和每个域名600次会话回放。
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和模型，并跟踪访问者。免费供一名用户使用，无限测试
* [Userbird](https://userbird.com) - Google Analytics替代方案，提供热图、会话记录和收入跟踪。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留1个月并提供3个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月5,000次访问免费
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，含错误追踪和实时模式
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"、无项目数量限制且无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能并保留7天数据
* [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，3个热图，3个小工具，免费错误追踪
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），3个热图，1个漏斗，1个月数据历史
* [UXtweak.com](https://www.uxtweak.com/) — 录制并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Adapty.io](https://adapty.io/) – 一站式开源SDK解决方案，支持iOS、Android、React Native、Flutter、Unity及网页应用的移动端应用内订阅集成。每月1万美元以下收入免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费版每月1万次API调用额度。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟10次请求限制。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率数据，支持JSON和XML格式。免费版每月1,250次API请求。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。开发者免费计划支持每月1,000次请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限额。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈与退单。微型免费计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时与历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持Stripe、Chargebee等支付系统。免费版每月3万次事件记录。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价（购买力平价），助力全球业务拓展。免费计划每月7,500次API请求。
* [Qonversion](http://qonversion.io/) - 全平台订阅管理平台，提供数据分析、A/B测试、Apple搜索广告、远程配置及增长工具，优化应用内购与变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe及网页应用。每月1万美元以下跟踪收入免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购与订阅托管后端（支持iOS/Android）。每月2,500美元以下跟踪收入免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费版每月100次API请求

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [容器注册服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间。
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Docker游乐场](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker平台
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册服务

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式微博客的形式免费与世界分享你的想法、知识和故事。
* [BearBlog](https://bearblog.dev/) - 极简主义、支持Markdown的博客和网站构建工具。
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的社区。
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台！
* [Medium](https://medium.com/) — 深入思考对你重要的事物。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随喜付费"模式，支持"一个管理员管理多个域名，并完全控制评论行为与外观"
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件，可将 GitHub issues 用于博客评论、维基页面等场景

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截取、捕捉时间点和视口尺寸控制。
* [microlink.io](https://microlink.io/) — 将任意网站转化为结构化数据，包括标准化元标签、精美链接预览、爬取功能或按需截图服务。每日免费250次请求。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日可处理500个页面，自2017年持续提供。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速生成截图，服务免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度定制化的网站快照捕捉服务。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次免费截图，支持png/gif/jpg格式，包含完整页面滚动截图而非仅首页。
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [CodeMagic](https://codemagic.io/) - Codemagic 是一款完全托管式的移动应用 CI/CD 服务。您可以通过基于图形界面的 CI/CD 工具进行构建、测试和部署。免费套餐每月提供 500 分钟免费时长，并配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一款基于浏览器的拖拽式界面工具，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [JsLinux](https://bellard.org/jslinux) — 高性能x86虚拟机，可运行Linux和Windows 2000系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅适用于小型团队且仅限SaaS版本。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射功能。免费版包含核心同意管理功能，并为经过验证的开源项目提供更高级的免费方案。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计和多语言同意管理解决方案。免费版提供一次性扫描和单个横幅功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理服务。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Ketch](https://www.ketch.com/) - 同意管理及隐私框架工具。免费版提供大部分功能但限制访客数量。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图
* [Base64 解码/编码工具](https://devpal.co/base64-decode/) — 免费在线数据解码与编码工具
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台，免费开发者计划含5台设备、云端存储及移动应用
* [Bricks 笔记计算器](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美学截图形式创建和分享代码片段，常用于Twitter或博客展示
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ等IDE的编码时间追踪插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美快照用于社交媒体分享
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转为可分享的截图
* [cron-job.org](https://cron-job.org) - 免费无限量的在线定时任务服务
* [Cronhooks](https://cronhooks.io/) - 定时或循环Webhook调度，免费版支持5个临时计划
* [datelist.io](https://datelist.io) - 在线预约系统，免费每月5次预订含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名转发工具，免费支持5个域名及20万次月请求
* [Exif 编辑器](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的许可证合规与漏洞管理平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加Webhook支持（含队列/重试/日志），免费版每日100次投递
* [Hosting Checker](https://hostingchecker.co) - 查询域名/IP的主机信息（ASN/ISP/位置等），含多种DNS相关工具
* [newreleases.io](https://newreleases.io/) - GitHub/GitLab等平台新版本发布的邮件/Slack/Telegram通知服务
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表板管理PDF模板，API动态生成PDF，免费每月300份
* [Pika 代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/Schema快速生成多语言类型安全代码
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成器
* [ray.so](https://ray.so/) - 创建精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的文档生成平台
* [redirect.pizza](https://redirect.pizza/) - HTTPS重定向管理工具，免费版含10个源和10万次月访问
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS
* [Renamer.ai](https://renamer.ai) — AI文件重命名工具（支持OCR/元数据提取），免费版每月15文件
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具（支持GET/POST等方法和认证）
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/里程/车门控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉创作工具（代码片段/技术演示），免费版含3个即时快照
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时Feed订阅服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具（免费版每份10问题100回复）
* [UUID 生成器](https://newuuid.com/) - 即时生成UUID/GUID/NanoID等多种ID
* [Versionfeeds](https://versionfeeds.com) — 软件版本更新RSS订阅（前3个订阅免费）
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑
* [Volume Shader BM](https://volumeshaderbm.org) — 基于WebGL的免费GPU基准测试工具
* [Webacus](https://webacus.dev) — 开发者编码/解码/数据处理工具集
* [XKit](https://xkit.io) — 包含开发者工具/对比工具/计算器/转换器的免费在线工具集合

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制
* [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [RemSupp](https://remsupp.com) — 按需技术支持及永久设备访问（每日免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型和PBR材质纹理资源
* [ArtStation](https://www.artstation.com/) - 提供免费/付费2D/3D资源、音频、图标、瓦片集和游戏套件的市场平台，也可用于展示艺术作品集
* [CraftPix](https://craftpix.net) — 提供2D/3D资源、音频、GUI、背景、图标、瓦片集和游戏套件等免费/付费素材
* [Freesound](https://freesound.org/) - 采用不同CC协议的免费协作音效库
* [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可自定义SVG/PNG风格化图标
* [GameDevMarket](https://gamedevmarket.net) — 2D/3D资源、音频和GUI等免费/付费素材
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏艺术家提供的免费素材
* [itch.io](https://itch.io/game-assets) — 精灵图、瓦片集和角色包等免费/付费游戏资源
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的免费2D/3D资源、音频和UI素材
* [LoSpec](https://lospec.com/) — 像素艺术等限制性数字艺术的在线创作工具，提供大量教程和调色板资源
* [OpenGameArt](https://opengameart.org) — 音乐、音效、精灵图和GIF等开源游戏素材
* [Poliigon](https://www.poliigon.com/) - 提供多分辨率纹理、模型、HDRI和笔刷等免费/付费资源，支持通过插件导出到Blender等软件
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D素材库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [360Converter](https://www.360converter.com/) - 免费实用的转换网站：视频转文字 && 音频转文字 && 语音转文字 && 实时音频转文字 && YouTube视频转文字 && 添加视频字幕。可能对短视频转换或简短YouTube教程有所帮助:)
* [AdminMart](https://adminmart.com/) — 使用Angular、Bootstrap、React、VueJs、NextJS和NuxtJS创建的高质量免费和付费管理仪表盘及网站模板！
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100多个可用于项目的按钮。
* [ElevateAI](https://www.elevateai.com) - 每月免费获取多达200小时的音频转录服务。
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件和SaaS列表。
* [免费代码工具](https://freecodetools.org/) — 100%免费的高效代码工具。包括Markdown编辑器、代码压缩/美化工具、二维码生成器、Open Graph生成器、Twitter卡片生成器等。
* [get.localhost.direct](https://get.localhost.direct) — 为支持子域名的本地开发提供更好的`*.localhost.direct`通配符公共CA签名SSL证书。
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合。需要注册。
* [Glob测试器](https://globster.xyz/) — 允许设计和测试glob模式的网站，并提供学习资源。
* [IT工具](https://it-tools.tech/) - 开发者和IT从业者的实用工具。
* [JSON查看工具](https://jsonviewertool.com/) – 直接在浏览器中查看、格式化、验证、压缩和转换JSON数据（无需API密钥）。
* [Killer Coda](https://killercoda.com/) - 浏览器中的交互式学习环境，用于学习Linux、Kubernetes、容器、编程、DevOps和网络。
* [Kody工具](https://www.kodytools.com/dev-tools) — 100多种开发工具，包括格式化、压缩和转换工具。
* [Markdown工具](https://markdowntools.com) - 用于将HTML、CSV、PDF、JSON和Excel文件与Markdown相互转换的工具。
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒、工具和其他资源，用于构建Microsoft 365平台解决方案。订阅为90天的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），可续订。续订取决于开发活跃度（通过遥测数据和算法衡量）。
* [MySQL可视化解释](https://mysqlexplain.com) - 易于理解且免费的MySQL EXPLAIN输出可视化工具，用于优化慢查询。
* [PageTools](https://pagetools.co/) - 提供一套永久免费的AI工具，帮助一键生成网站政策、社交媒体简介、帖子和网页。
* [Pyrexp](https://pythonium.net/regex) — 基于Web的正则表达式测试和可视化工具，用于调试正则表达式。
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的红帽产品免费访问权限，包括RHEL、OpenShift、CodeReady等。仅限个人计划，还提供免费电子书参考。
* [regex101](https://regex101.com/) — 免费的正则表达式测试和调试网站，提供正则表达式编辑器和测试器，以及学习资源。
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费发送和接收测试短信。
* [SimpleBackups.com](https://simplebackups.com/) — 服务器和数据库（MySQL、PostgreSQL、MongoDB）备份自动化服务，直接存储到云存储提供商（AWS、DigitalOcean和Backblaze）。提供1个备份的免费计划。
* [SimpleRestore](https://simplerestore.io) - 无忧MySQL备份恢复。无需代码或服务器即可将MySQL备份恢复到任何远程数据库。
* [SnapShooter](https://snapshooter.com/) — DigitalOcean、AWS、LightSail、Hetzner和Exoscale的备份解决方案，支持将数据库、文件系统和应用程序直接备份到基于s3的存储。提供每日备份一个资源的免费计划。
* [表格格式转换器](https://www.tableformatconverter.com) - 免费工具，用于将表格数据转换为不同格式，如CSV、HTML、JSON、Markdown等。
* [主题精选](https://themeselection.com/) — 精选高质量、现代设计、专业且易用的免费管理仪表盘模板。
* [ToolsHref](https://toolshref.com) - 一套免费开发者工具，包括Java代码生成（JSON转POJO、cURL转Java）、静态分析和DevOps配置构建器（Docker、K8s、Nginx）。
* [Utils.fun](https://utils.fun/en) — 所有基于浏览器计算能力的离线和开发工具，包括水印生成、屏幕录制、编码解码、加密解密和代码格式化，完全免费且不上传任何数据到云端处理。
* [Wikimint开发者](https://developer.wikimint.com/p/tools.html) - 始终免费的Web开发者工具，包括CSS压缩/解压缩、图像优化、图像调整大小、大小写转换、CSS验证、JavaScript编译器、HTML编辑器等。
* [WrapPixel](https://www.wrappixel.com/) — 下载使用Angular、React、VueJs、NextJS和NuxtJS创建的高质量免费和付费管理仪表盘模板！
HTML主题和UI工具包，助您更快创建应用！

**[⬆️ 返回顶部](#目录)**