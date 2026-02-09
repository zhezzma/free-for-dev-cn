# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务并做出明智选择需要耗费时间。

这里列出了一系列提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定于基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的资源。我们虽喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此这份清单带有主观判断——若您的贡献未被采纳，请勿介意。

这份清单汇集了1600多人提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或终止的免费服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限服务型产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用版）。若为时限型免费，则至少需提供一年期免费方案。我们还会从安全角度评估免费层级——支持SSO的服务可以接受，但会将TLS功能限制在付费层级的服务不予收录。

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
  * [崩溃异常处理](#崩溃异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计与UI](#设计与UI)
  * [设计灵感](#设计灵感)
  * [开发者博客平台](#开发者博客平台)
  * [域名解析](#域名解析)
  * [Docker相关](#Docker相关)
  * [域名注册](#域名注册)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
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
  * [其他类别](#其他类别)
  * [监控服务](#监控服务)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关/免Mac开发iOS](#Flutter相关/免Mac开发iOS)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道/WebRTC/WebSocket路由](#隧道/WebRTC/WebSocket路由)
  * [测试工具](#测试工具)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
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
    * Cloud Firestore - 每天1GB存储空间，50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB从北美到所有区域目的地（不包括中国和澳大利亚）的网络出口流量
    * Cloud Storage - 5GB存储空间，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储空间，每周60小时限制
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出口流量
    * Google Kubernetes Engine - 一个区域集群免收集群管理费，每个用户节点按标准Compute Engine定价收费
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简的dev-test环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器功能，提供免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限事务
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - AI搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 当[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出口流量，基于x64的VM限速50 Mbps，基于Arm的VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封发送邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS防护，CDN及免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

* [Zoho](https://www.zoho.com) — 最初作为电子邮件提供商，现提供一系列服务，部分含免费计划。含免费计划的服务列表：
    * [Email](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
    * [Zoho Assist](https://www.zoho.com/assist) — 永久免费计划包含1个并发远程支持许可证和5个无人值守计算机许可证，适用于专业和个人用途
    * [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储
    * [Docs](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储。包含Zoho Office套件（Writer、Sheets和Show）
    * [Projects](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同计划
    * [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册、10个集成以及频道、活动和论坛
    * [Meeting](https://zoho.com/meeting) — 最多3名会议参与者和10名网络研讨会 attendees
    * [Vault](https://zoho.com/vault) — 个人密码管理
    * [Showtime](https://zoho.com/showtime) — 面向远程培训的会议软件，最多5名 attendees
    * [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
    * [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，zip备份，RSS和Atom订阅，访问控制和可定制CSS
    * [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅免费，1用户，所有支付托管由Zoho完成。存储最近40个订阅指标
    * [Checkout](https://zoho.com/checkout) — 3个页面和最多50次支付的产品计费管理
    * [Desk](https://zoho.com/desk) — 3个客服人员，私有知识库和电子邮件工单的客户支持管理。集成[Assist](https://zoho.com/assist)提供1名远程技术人员和5台无人值守计算机
    * [Cliq](https://zoho.com/cliq) — 100GB存储，无限用户，每频道100用户和SSO的团队聊天软件
    * [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建工具
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
    * [Bookings](https://zoho.com/bookings) - 预约安排

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案。
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供构建、部署和扩展应用所需的一切功能，支持任意云平台，无需操心“服务器相关事务”。
* [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务及环境，每月提供 10 次免费任务执行，包含预览和自动部署功能。
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施。
* [scalr.com](https://scalr.com/) - Scalr 是 Terraform 自动化与协作（TACO）产品，用于提升 Terraform 管理的基础设施和配置的协作与自动化能力。完整支持 Terraform CLI，集成 OPA，采用分层配置模型。无单点登录限制，所有功能均开放。免费版每月可使用 50 次运行。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限公共和私有Git仓库，提供CI/CD流水线
* [Codeberg](https://codeberg.org/) — 免费为开源项目提供无限公共和私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，通过[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，通过[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包和容器托管、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件打造的代码托管平台，包含CI、静态页面、项目页面和问题追踪功能
* [GitGud](https://gitgud.io) — 无限私有和公共仓库。永久免费。基于GitLab & Sapphire构建。不提供CI/CD功能
* [GitHub](https://github.com/) — 无限公共仓库和无限私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包和容器托管、项目管理以及AI Copilot功能
* [gitlab.com](https://about.gitlab.com/) — 无限公共和私有Git仓库（最多5名协作者）。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支版本，提供对Mercurial的支持
* [Pagure.io](https://pagure.io) — Pagure.io是面向FOSS许可项目的免费开源代码协作平台，基于Git构建
* [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统，无使用限制。其独特之处在于基于完善的补丁理论，使得学习、使用和分发变得简单。解决了git/hg/svn/darcs的许多问题
* [projectlocker.com](https://projectlocker.com) — 提供一个免费私有项目（支持Git和Subversion），空间限制为50 MB
* [RocketGit](https://rocketgit.com) — 基于Git的代码托管服务。提供无限公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 为自由软件项目（GNU项目）提供协作式软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 为自由软件项目（非GNU项目）提供协作式软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API/数据/机器学习

  * [Abstract API](https://www.abstractapi.com) — 提供多种用途的API套件，包括IP地理定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络抓取和自动化平台，可为任何网站创建API并提取数据。提供现成的抓取工具、集成代理和自定义解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月提供50张图像和三个模板。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题的根源分析。免费支持最多两个模型。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的即时服务器、CRUD和有状态模拟、代理和CORS管理，以加快集成和测试。免费计划每天包含50个请求，并提供公共仪表板/端点，任何拥有仪表板URL的人都可以查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费计划每月1k积分，相当于1k并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、抓取、AI代理网络访问、图像/PDF生成等。免费计划每月1k请求。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月包含500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月包含100次调用。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层每月包含100次请求，覆盖所有9个端点。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美AZ，最大文件大小为2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据谱系，涵盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成超过200个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份见解。免费计划限制为一个用户、数据连接、数据源和数据目标。还需要手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发人员从现代数据存储中访问数据，将其组织为一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制为1,000次查询。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月包含10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月包含5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。Postman式界面在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月100次运行。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
  * [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括10 GB存储和每月120小时运行时间。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型和每个模型10个表。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每天每个IP 1k请求。CC-BY 4.0许可下的精简数据库也是免费的。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜，一个SDK即可。免费计划每月最多10个活跃用户（MAU）并跟踪最多4张脸。
  * [Deepnote](https://deepnote.com) - 新的数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费层包括无限个人项目、无限基本机器（5GB RAM和2vCPU）以及最多3个编辑的团队。
  * [DiffJSON](https://diffjson.com) - 在线工具，用于比较两个JSON数据结构的差异，帮助快速定位JSON数据中的不同之处。
  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据以构建与Covid-19相关的有用应用。
  * [Doczilla](https://www.doczilla.app/) — SaaS API，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月250个文档。
  * [Doppio](https://doppio.sh/) — 托管API，使用顶级渲染技术生成和私有存储PDF和截图。免费计划每月400个PDF和截图。
  * [drawDB](https://drawdb.app/) — 免费且开源的在线数据库图表编辑器，无需注册。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板使用JSON到PDF API生成PDF文档。免费计划每月50次API调用和模板库访问。

  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，支持SDK和无代码集成。免费计划包含每月250页、不限用户数和3个模板。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划允许每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 一款免费的浏览器工具，可即时格式化、验证、比较和压缩JSON数据。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡支付欺诈检测REST API。免费Micro计划每月支持500笔交易。
* [FreeIPAPI](https://freeipapi.com) - 面向商业和非商业用户的免费、快速、可靠的IP地理定位API（JSON格式）。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，免费计划每日2,000次请求。
* [Hex](https://hex.tech/) - 协作式数据平台，支持笔记本、数据应用和知识库。社区免费版最多5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，免费计划支持每日100次事件分发并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建工具。
* [huggingface.co](https://huggingface.co) - 支持Pytorch/TensorFlow/JAX的NLP模型构建、训练和部署。免费版每月3万字符输入。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL接口设计与测试。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个云平台数据。开发者免费计划有数据量限制。
* [IP Geolocation API by ipwho.org](https://ipwho.org/) - 每日2,000次免费请求。12+区域服务器部署。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，免费1,000次请求。
* [IP Geolocation](https://ipgeolocation.io/) — 永久免费开发者计划，每日1,000次请求限制。
* [ip-api](https://ip-api.com) — 非商业用途免费的IP定位API，同一IP地址每分钟限45次请求。
* [IP.City](https://ip.city) — 每日100次免费IP地理定位请求。
* [IP2Location.io](https://www.ip2location.io/) — 提供IP/域名查询服务，免费计划每月5万积分。
* [ipaddress.sh](https://ipaddress.sh) — 获取多种格式公网IP地址的简易服务。
* [ipapi.is](https://ipapi.is/) - 开发者友好的IP地址API，免注册免费1,000次查询。
* [ipapi](https://ipapi.co/) - Kloudend公司提供的AWS架构IP定位API，免注册每月3万次查询(每日1k)。
* [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费计划每月150次请求。
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（免费5万次/月），支持地理位置/运营商/域名等查询。
* [IPLocate](https://www.iplocate.io) — 每日1,000次免费IP定位查询，含代理/VPN检测和ASN数据。
* [IPTrace](https://iptrace.io) — 极简IP地理定位API，每月5万次免费查询。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址，无需注册且请求次数不限。
* [JSON to Table](https://jsontotable.org) - 将JSON转换为可交互表格进行在线查看/编辑/分享。
* [JSON2Video](https://json2video.com) - 通过API或无代码方式自动化生成营销视频的编辑平台。
* [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化/编辑/过滤为美观的表格网格。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码/头部/响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看/编辑/验证工具，支持AI修复/12+语言代码生成/多格式转换。
* [KillBait API](https://killbait.com/api/doc) - 内容评估API，可检测标题党文章（免费版每小时1次/每日10次提交）。
* [Kreya](https://kreya.app) — 免费gRPC GUI客户端，支持通过服务反射导入API。
* [LoginLlama](https://loginllama.app) - 登录安全API，免费监测1,000次登录/月。
* [Market Data API](https://www.marketdata.app) - 提供实时和历史金融数据，免费版每日100次API请求。
* [Maxim AI](https://getmaxim.ai/) - AI代理评估与观测平台，个人开发者和小团队(3席位)永久免费。
* [microlink.io](https://microlink.io/) – 将网页转化为元数据/链接预览/截图等服务，每日50次免费请求。
* [Mintlify](https://mintlify.com) — 现代化API文档工具，免费支持1名编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速模拟REST API的 prototyping 工具，免费版每个项目2个资源。

  * [Mockfly](https://www.mockfly.dev/) — Mockfly 是值得信赖的 API 模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟 API。免费版每天提供 500 次请求。
  * [Mocko.dev](https://mocko.dev/) — 代理您的 API，在云端选择要模拟的端点并检查流量，完全免费。加速您的开发和集成测试。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一款免费简单的工具，用于检查多个节点的出口 IP 地址，了解您的 IP 在不同全球区域和服务中的显示方式。适用于测试基于规则的 DNS 分流工具，如 Control D。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取 JSON 结果。开发者每天可免费查询 100 次。文章有 24 小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100 次免费请求。
  * [OCR.Space](https://ocr.space/) — 一款 OCR API，解析图像和 PDF 文件并以 JSON 格式返回文本结果。每月 25,000 次免费请求，文件大小限制为 1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建 Open API 3 定义。
  * [Parseur](https://parseur.com) — 每月 20 页免费：从 PDF 和电子邮件中提取数据。AI 驱动。提供完整的 API 访问权限。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，提供可视化模板编辑器或 HTML 转 PDF、动态数据集成和通过 API 渲染 PDF。免费计划包含一个模板，每月 100 次 PDF 生成。
  * [PDFBolt](https://pdfbolt.com) - 专注于开发者的 PDF 生成 API，设计时考虑了隐私。提供类似 Stripe 的文档，每月包含 500 次免费 PDF 转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单的 API 轻松将 HTML 或 URL 转换为 PDF。每月免费 100 次转换。
  * [Pixela](https://pixe.la/) - 免费的日流数据库服务。所有操作均通过 API 执行。还支持热图和折线图可视化。
  * [Postman](https://postman.com) — 通过 Postman 简化工作流程并更快创建更好的 API，Postman 是一个 API 开发的协作平台。永久免费使用 Postman 应用。Postman 云功能也永久免费，但有一定限制。
  * [PrefectCloud](https://www.prefect.io/cloud/) — 一个完整的数据流自动化平台。免费计划包括每月 5 个部署的工作流和 500 分钟的无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。最多 5 名用户的团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式 SQL 编辑器。
  * [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 10,000 次请求的免费层。
  * [Reducto](https://reducto.ai) - 将任何非结构化文档（PDF、XLSX、JPG、PPTX 等）转换为结构化 JSON 数据。解析、提取数据并编辑 PDF 表单。免费层包含 15,000 免费积分和按需付费。
  * [Rendi](https://rendi.dev) - FFmpeg API - 一个用于 FFmpeg 的 REST API，无需处理基础设施即可在线运行 FFmpeg。免费层包含每月处理配额和 4 个可用 vCPU。
  * [RequestBin.com](https://requestbin.com) — 创建一个免费端点，您可以向其发送 HTTP 请求。发送到该端点的任何 HTTP 请求都将记录相关负载和标头，以便您可以观察来自 Webhook 和其他服务的建议。
  * [ROBOHASH](https://robohash.org/) - 从任何文本生成独特酷炫图像的 Web 服务。
  * [Scraper's Proxy](https://scrapersproxy.com) — 用于抓取的简单 HTTP 代理 API。匿名抓取，无需担心限制、封锁或验证码。每月前 100 次成功抓取免费，包括 JavaScript 渲染（联系支持人员可获得更多）。
  * [ScrapingAnt](https://scrapingant.com/) — 无头 Chrome 抓取 API 和免费检查代理服务。JavaScript 渲染、高级轮换代理、避免验证码。免费 10,000 API 积分。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取 API。为 Google、YouTube、Bing、百度、沃尔玛等机器返回结构化 JSON 结果。免费计划包括每月 100 次成功的 API 调用。
  * [Sheetson](https://sheetson.com) - 立即将任何 Google 表格转换为 RESTful API。提供免费计划，包括每张表格 1,000 行免费。
  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的 Webhook。免费计划包括 100 次云抓取积分。
  * [Siterelic](https://siterelic.com/) - Siterelic API 可让您截取屏幕截图、审核网站、TLS 扫描、DNS 查询、测试 TTFB 等。免费计划每月提供 100 次 API 请求。
  * [SmartParse](https://smartparse.io) - SmartParse 是一个数据迁移和 CSV 转 API 平台，提供节省时间和成本的开发者工具。免费层包括每月 300 处理单元、浏览器上传、数据隔离、断路器和工作警报。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件并通过其 API 即时访问数据，从而加快应用程序开发。免费计划包括 2 个 API 和每月 2,500 次 API 调用。无需信用卡。
  * [Sqlable](https://sqlable.com/) - 一系列免费的在线 SQL 工具，包括 SQL 格式化器和验证器、SQL 正则表达式测试器、假数据生成器和交互式数据库游乐场。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板根据输入自动生成图像。免费计划允许您每月创建最多 50 张图像。
  * [Svix](https://www.svix.com/) - Webhook 即服务。每月免费发送多达 50,000 条消息。
  * [Tavily AI](https://tavily.com/) - 用于在线搜索和快速洞察及全面研究的 API，具有组织研究结果的能力。免费层每月 1,000 次请求，无需信用卡。
  * [The IP API](https://theipapi.com/) - IP 地理定位 API，每天 1,000 次免费请求。提供有关 IP 地址位置的信息，包括国家、城市、地区等。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能可无限免费使用。
  * [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费的天气 API 计划。提供准确和最新的天气预报，覆盖全球，包括历史数据和天气监测解决方案。
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、发布和管理 API。具有高级 API 日志聚合、可观察性、文档和调试功能。您可以免费获得所有功能，但免费层每月限制为 250,000 次请求。
  * [UniRateAPI](https://unirateapi.com) – 590 多种货币和加密货币的实时汇率。免费计划提供无限 API 调用，非常适合开发者和金融应用。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证 API。每月 150 次免费验证。
  * [WeatherXu](https://weatherxu.com/) — 通过我们的 API 提供全球天气数据，包括当前状况、每小时和每日预报以及天气警报。集成 AI 模型和 ML 系统，分析并组合多个天气模型以提高预报准确性。免费层包括每月 10,000 次 API 调用。
  * [WebScraping.AI](https://webscraping.ai) - 简单的 Web 抓取 API，内置解析、Chrome 渲染和代理。每月 2,000 次免费 API 调用。

  * [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月限制25,000个token（约10个PR）。
  * [wolfram.com](https://wolfram.com/language/) - 云端内置基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) - 将任何网站转换为参数化API。每月30,000次API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) - 配备无头浏览器、住宅IP的网页抓取API，定价透明。每月1,000次免费API调用，学生和非营利组织可获额外额度。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮编API，提供全球邮政编码数据。每月5,000次免费请求。
  * [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证服务。每月10,000次免费请求。
  * [Zuplo](https://zuplo.com/) - 免费API管理平台，支持在边缘网络设计、构建和部署API。可为任何API快速添加API密钥认证、速率限制、开发者文档和货币化功能。原生支持OpenAPI，完全可编程（使用Web标准API和Typescript）。免费版提供10个项目、不限量生产级边缘环境、每月100万次请求和10GB出口流量。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有/公有制品库。公开项目免费使用。
* [jitpack.io](https://jitpack.io/) — 专为GitHub上JVM与Android项目提供的Maven仓库，公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练及部署AI应用。免费方案支持公开项目，含5GB存储和基础实例。
* [RepoFlow](https://repoflow.io) - 支持npm、PyPI、Docker、Go、Helm等多平台的包管理工具。免费版提供10GB存储、10GB带宽、100个包及不限用户数的云端服务，或仅供个人使用的自托管方案。
* [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包及Docker镜像的私有云仓库。开源/公开项目可享免费方案。
* [repsy.io](https://repsy.io) — 提供1GB免费空间的私有/公有Maven仓库。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的基于云的代码片段管理器，支持个人和协作代码管理。
* [BookmarkOS.com](https://bookmarkos.com) - 免费的一体化书签管理器、标签页管理器和任务管理器，提供可定制的在线桌面和文件夹协作功能。
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开访问群组免费，支持无限用户、历史记录和集成，并提供可自托管的开源版本。
* [Calendly](https://calendly.com) — Calendly 是连接和安排会议的工具。免费计划提供每个用户1个日历连接和无限会话，还提供桌面和移动应用。
* [cally.com](https://cally.com/) — 为会议找到完美的时间和日期。简单易用，适合小型和大型团队。
* [Chanty.com](https://chanty.com/) — Chanty 是 Slack 的替代品。为小型团队（最多10人）提供永久免费计划，包括无限公开和私密对话、可搜索历史记录、无限1对1音频通话、无限语音消息、10个集成和每个团队20GB存储空间。
* [DevToolLab](https://devtoollab.com) — 在线开发者工具，免费使用所有基本工具，支持每个工具自动保存一个条目，标准处理速度和社区支持。
* [Discord](https://discord.com/) — 支持公开/私密房间的聊天工具。支持 Markdown 文本、语音、视频和屏幕共享功能。免费支持无限用户。
* [Dubble](https://dubble.so/) — 免费的逐步指南创建工具。支持截图、记录流程并与团队协作，还支持异步屏幕录制。
* [Duckly](https://duckly.com/) — 与团队实时交流和协作。支持 IDE 配对编程、终端共享、语音、视频和屏幕共享。小型团队免费。
* [element.io](https://element.io/) — 基于 Matrix 的去中心化和开源通信工具。支持群聊、私信、加密文件传输、语音和视频聊天，并易于与其他服务集成。
* [evernote.com](https://evernote.com/) — 信息组织工具。共享笔记并与他人协作。
* [Fibery](https://fibery.io/) — 连接的工作区平台。单个用户免费，最多2GB磁盘空间。
* [Fibo](https://fibo.dev) - 免费的在线实时敏捷团队 Scrum Poker 工具，支持无限成员估算故事点以加快规划。
* [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理和问题跟踪平台。创建公开看板、设置 Webhooks、使用卡片标记和跟踪无限用户 — 免费支持最多1000个项目。
* [flat.social](https://flat.social) - 可定制的互动空间，用于团队会议和社交活动。无限会议，最多8个并发用户免费。
* [flock.com](https://flock.com) — 团队沟通的更快方式。免费提供无限消息、频道、用户、应用和集成。
* [GitBook](https://www.gitbook.com/) — 捕获和记录技术知识的平台 — 从产品文档到内部知识库和 API。为个人开发者提供免费计划。
* [GitDailies](https://gitdailies.com) - GitHub 上团队提交和拉取请求活动的每日报告。包括推送可视化、同行认可系统和自定义警报构建器。免费层支持无限用户、3个仓库和3个警报配置。
* [gitter.im](https://gitter.im/) — GitHub 的聊天工具。无限公开和私密房间，最多25人的团队免费。
* [gokanban.io](https://gokanban.io) - 基于语法的无需注册看板，快速使用。免费且无限制。
* [Hackmd.io](https://hackmd.io/) - 实时协作和写作工具，支持 Markdown 格式文档/文件。类似 Google Docs，但用于 Markdown 文件。免费支持无限数量的“笔记”，但私密笔记和模板的协作者（受邀者）数量[将受限制](https://hackmd.io/pricing)。
* [HeySpace](https://hey.space) - 任务管理工具，支持聊天、日历、时间线和视频通话。最多5个用户免费。
* [Huly](https://huly.io/) - 一体化项目管理平台（替代 Linear、Jira、Slack、Notion、Motion）— 无限用户，每个工作区10GB存储空间，10GB视频（音频）流量。
* [Keybase](https://keybase.io/) — Keybase 是 Slack 的开源替代品；它保护每个人的聊天和文件安全，从家庭到社区再到公司。
* [Linkinize](https://linkinize.com) — 团队书签管理器，支持标签、多工作区和协作。免费计划包括4个工作区和10个团队成员。
* [Lockitbot](https://www.lockitbot.com/) — 在 Slack 中预留和锁定共享资源，如房间、开发环境、服务器等。最多2个资源免费。
* [meet.jit.si](https://meet.jit.si/) — 一键视频对话和屏幕共享，完全免费。
* [Miro](https://miro.com/) - 可扩展、安全、跨设备且企业级的协作白板，适合分布式团队。提供免费增值计划。
* [Notion](https://www.notion.so/) - Notion 是一个支持 Markdown 的笔记和协作应用，集成了任务、维基和数据库。公司将其描述为一个一体化的笔记、项目管理和任务管理工作区。除了跨平台应用外，还可以通过大多数网页浏览器访问。
* [Nuclino](https://www.nuclino.com) - 一个轻量级的协作维基，用于团队的所有知识、文档和笔记。免费计划包含所有基本功能，最多50个项目和5GB存储空间。
* [OnlineInterview.io](https://onlineinterview.io/) - 免费的代码面试平台，内置视频聊天、绘图板和在线代码编辑器，可以在浏览器中编译和运行代码。只需点击一下即可创建远程面试房间。
* [paste.sh](https://paste.sh/) — 这是一个基于 JavaScript 和加密的简单粘贴站点。
* [Pastefy](https://pastefy.app/) - 美观且简单的 Pastebin，支持可选客户端加密、多标签粘贴、API、高亮编辑器等功能。
* [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，帮助您通过易于使用的界面和有价值的统计数据更好地管理时间。
* [Proton Pass](https://proton.me/pass) — 密码管理器，内置电子邮件别名、2FA 认证器、共享和密码钥匙。支持网页、浏览器扩展、移动应用和桌面端。
* [Pullflow](https://pullflow.com) — Pullflow 提供了一个 AI 增强的平台，用于在 GitHub、Slack 和 VS Code 上进行代码审查协作。
* [Pumble](https://pumble.com) - 免费的团队聊天应用。无限用户和消息历史记录，永久免费。
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 一个简单的时间表和团队时间跟踪应用。免费计划支持最多10个用户的时间跟踪和生成报告功能。
* [Raindrop.io](https://raindrop.io) - 私密且安全的书签应用，支持 macOS、Windows、Android、iOS 和网页。免费提供无限书签和协作功能。
* [Revolt.chat](https://revolt.chat/) — [Discord](https://discord.com/) 的开源替代品，尊重您的隐私。它还免费提供了 Discord 的大部分专有功能。Revolt 是一个安全快速的一体化应用，100%免费。所有功能均免费。他们还支持（官方和非官方）插件，与大多数主流聊天应用不同。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，支持全渠道功能、Matrix 联盟、与其他应用的桥接、无限消息和完整消息历史记录。
* [ruttl.com](https://ruttl.com/) — 最佳的一体化反馈工具，用于收集数字反馈和审查网站、PDF 和图像。

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步、讨论。云版本仅提供1GB空间
* [SiteDots](https://sitedots.com/) - 直接在您的网站上分享对网站项目的反馈，无需模拟、画布或变通方法。完全可用的免费套餐。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多10名用户免费。
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。您能跟踪上游提供商的状态页面吗？
* [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作应用。最多3个墙、无限用户和1GB存储空间免费。
* [StreamBackdrops](https://streambackdrops.com) — 视频通话和团队会议的高清虚拟背景。适用于Zoom、Teams和Google Meet的专业背景。无需注册，个人使用免费。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点。无需插件、注册或付款
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用。
* [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题跟踪软件。支持带有泳道的看板和完整的Scrum实现。集成时间跟踪功能。最多5名用户和3个项目组合免费。
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进团队开发流程。包含面向远程优先团队的完整休假管理功能。最多5名用户的小组免费。
* [Telegram](https://telegram.org/) — Telegram适合所有需要快速、可靠消息和通话的人。企业用户和小团队可能会喜欢大群组、用户名、桌面应用和强大的文件共享选项。
* [Tencent RTC](https://trtc.io/) — 腾讯实时通信（TRTC）提供群组音视频通话解决方案。第一年每月免费1万分钟。
* [TimeCamp](https://www.timecamp.com/) - 无限用户的免费时间跟踪软件。轻松与Jira、Trello、Asana等项目管理工具集成。
* [tldraw.com](https://tldraw.com) — 免费开源的白板和图表工具，具有智能箭头、吸附、便签和SVG导出功能。多人协作编辑模式。还提供免费的官方VS Code扩展。
* [transfernow](https://www.transfernow.net/) — 最简单、快速且安全的文件传输和共享界面。无需订阅即可发送照片、视频和其他大文件。
* [Tugboat](https://tugboat.qa) - 自动化和按需预览每个拉取请求。所有人免费，非营利组织享受免费Nano套餐。
* [twist.com](https://twist.com) — 一种异步友好的团队通信应用，对话保持有序且主题明确。提供免费和无限套餐。符合条件的团队可享受折扣。
* [userforge.com](https://userforge.com/) - 相互关联的在线角色、用户故事和上下文映射。帮助设计和开发保持同步，最多3个角色和2名协作者免费。
* [Visual Debug](https://visualdebug.com) - 用于改善客户与开发人员沟通的视觉反馈工具
* [Webex](https://www.webex.com/) — 视频会议，免费套餐每次会议40分钟，最多100名参与者。
* [Webvizio](https://webvizio.com) — 网站反馈工具、网站审查软件和错误报告工具，用于直接在实时网站和Web应用、图像、PDF和设计文件上简化Web开发协作任务。
* [whereby.com](https://whereby.com/) — 一键视频对话，免费（原名appear.in）
* [windmill.dev](https://windmill.dev/) - Windmill是一个开源开发者平台，可以从最少的Python和Typescript脚本快速构建生产级多步骤自动化和内部应用。作为免费用户，您可以创建并最多成为三个非高级工作区的成员。
* [wistia.com](https://wistia.com/) — 视频托管，提供观众分析、高清视频交付和营销工具，帮助了解您的访客，25个视频和Wistia品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 简单的文件共享服务。与任意数量的对等方共享最多5GB的无限文件。
* [Wormhole](https://wormhole.app/) - 共享最多5GB的文件，端到端加密长达24小时。对于超过5GB的文件，使用点对点传输直接发送文件。
* [zoom.us](https://zoom.us/) — 安全的视频和网络会议，提供附加功能。免费套餐限制为40分钟。
* [Zulip](https://zulip.com/) — 具有独特类似电子邮件线程模型的实时聊天。免费套餐包括1万条搜索历史和最多5GB的文件存储。还提供可自托管的开源版本。
* [RightFeature](https://rightfeature.com/) — 轻松收集客户反馈，将客户反馈转化为产品路线图。收集、优先排序并发布对用户真正重要的功能。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。提供包含5个用户、2.5万条记录、48种内容类型和2种语言环境的免费社区空间。
  * [Cosmic](https://www.cosmicjs.com/) — 无头CMS和API工具包。为开发者提供免费个人计划。
  * [Crystallize](https://crystallize.com) — 支持电商的无头PIM。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月流量和2.5万次/月API调用。
  * [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层。基于GraphQL的CMS。基础层每月10万次API调用。
  * [Hygraph](https://hygraph.com/) - 为小型项目提供免费层。GraphQL优先API。从传统解决方案迁移至GraphQL原生的无头CMS，实现多渠道内容API优先交付。
  * [Prismic](https://www.prismic.io/) — 无头CMS。具备全托管可扩展API的内容管理界面。社区计划为单个用户提供无限API调用、文档、自定义类型、资源和多语言支持。开源/开放内容项目可申请更大免费计划。
  * [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据存储。无限项目数。每个项目免费包含无限管理员用户、3个非管理员用户、2个数据集、50万次CDN API请求、10GB带宽和5GB资源。
  * [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可创建精美商业网站。提供免费自定义域名，无需信用卡。
  * [Squidex](https://squidex.io/) - 为小型项目提供免费层。API/GraphQL优先。基于事件溯源（自动记录每次变更）的开源方案。
  * [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。社区（免费）版包含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化（无限语言/地区）、资源管理器（最多2500项资源）、图片优化服务、搜索查询、Webhook及每月250GB流量。
  * [TinaCMS](https://tina.io/) — Forestry.io替代方案。支持Markdown、MDX和JSON的开源Git无头CMS。基础版免费支持2个用户。
  * [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费层包含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制——完全自主掌控网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

* [Appinvento](https://appinvento.io/) — 免费的无代码应用构建平台。提供自动生成的后端源代码完全访问权限，支持无限API和路由。免费方案包含3个项目与5个数据表。
* [DhiWise](https://www.dhiwise.com/) — 将Figma设计稿转换为动态Flutter和React应用。其代码生成技术专为优化生产级移动/网页体验的开发流程而设计。
* [Karbon Sites](https://www.karbonsites.space) — 基于AI的网站构建器与编辑器，可通过文字描述、草图或简历生成生产级前端代码。支持原生Android（APK）导出，免费版每月5次生成（使用自定义Gemini API密钥可无限生成）。
* [Metalama](https://www.postsharp.net/metalama) — 专为C#设计的工具，能在编译时动态生成样板代码以保持源码整洁。开源项目免费使用，商业友好型免费版最多支持3个切面。
* [Supermaven](https://www.supermaven.com/) — 面向VS Code/JetBrains/Neovim的高速AI代码补全插件。免费版提供无限行内补全，主打超低延迟体验。
* [v0.dev](https://v0.dev/) — Vercel推出的React代码生成工具，基于shadcn/ui和Tailwind CSS生成可直接复用的代码。采用积分制，初始赠送1,200积分，每月免费续赠200积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和100 MB存储的1个代码仓库
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码自动化审查工具，集成GitHub/Bitbucket/GitLab（包括自托管版本）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版包含无限用户、公开仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [CodSpeed](https://codspeed.io) - 在CI流水线中自动化性能追踪。通过精准一致的指标，在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [deepscan.io](https://deepscan.io) — 用于自动发现JavaScript代码运行时错误的高级静态分析工具，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，发现并修复安全/性能/反模式/潜在错误/文档/风格等问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库和SQL查询的关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务（免费）
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源项目免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化首选静态代码分析器。自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — 针对GitHub提交的代码质量评论，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码审查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言语义的GitHub PR和提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具，提供预设模板和链接功能。
  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
  * [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站搜索您的项目名称可用性。
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（及其他标记），帮助识别需要改进的代码区域。

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更快速高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD平台。免费版每月200次构建，每次构建10分钟，支持2名团队成员。开源项目可获得45分钟构建时长、+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD平台，免费支持5个项目和一个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3名用户和每月5000分钟任务时长。测试分析免费开发者层级包含每月10万次测试执行，开源项目可获得更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps平台。20名用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 功能全面的免费托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。包含多种资源类型、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月免费6000分钟执行时长，无限协作人数，私有项目30个并行任务，开源项目最高8万分钟构建时长。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费使用
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费使用
* [codemagic.io](https://codemagic.io/) - 每月免费500分钟构建时长
* [deployhq.com](https://www.deployhq.com/) — 1个项目，每日10次部署（每月30分钟构建时长）
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台设置标准化应用环境，内置持续部署自动化和高级可观测性。免费版支持1名用户和1个应用环境。
* [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并自动化工作流。支持众多应用和主流API。公开GitHub仓库免费，免费层级包含100 Mb存储、1000次操作和15分钟最小间隔。
* [Mergify](https://mergify.com) — GitHub工作流自动化和合并队列 — 公开GitHub仓库免费
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、任务分布式执行和自动化e2e测试分割等功能加速CI中的monorepo。免费版支持30名贡献者，包含15万点数的额度。
* [RunMyJob](https://runmyjob.io) - 通过实时扩展Spike实例更智能地运行GitHub Actions和GitLab CI流水线。免费层级包含400 vCPU分钟、800 GB分钟和10个并发任务（每个任务高性能运行器：12 vCPU和32 GB内存）。
* [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub actions，每月免费3000分钟构建时长。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块注册表、ChatOps集成、通过Open Policy Agent实现持续资源合规、SAML 2.0单点登录，以及公共工作池访问：每月最多200分钟
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限公开和私有仓库，最高2 GB VM规格。
* [Terramate](https://terramate.io/) - Terramate是面向Terraform、OpenTofu和Terragrunt等基础设施即代码工具的管理平台。最多2名用户免费包含全部功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化方案，支持PR驱动的工作流、通过自托管运行器实现项目隔离，以及分层运行实现有序操作。最多3名用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Appetize](https://appetize.io) — 直接在浏览器中测试您的Android和iOS应用，基于云的Android手机/平板模拟器和iPhone/iPad模拟器。免费套餐每月包含2个并发会话，每次使用30分钟。应用大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习，无需编码。您可以在自己的计算机上免费运行无限测试。额外付费可获得云监控和CI/CD集成。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多种SEO、速度和安全性最佳实践。小型网站免费。
  * [Checkly](https://checklyhq.com) - 现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控您的API和应用。采用Monitoring as Code工作流和Playwright驱动。开发者免费套餐慷慨。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否为给定域启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress Test Runner始终免费且开源，无限制。Cypress Dashboard对开源项目免费，最多5个用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费版选项较少。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月。
  * [katalon.com](https://katalon.com) - 提供测试平台，帮助不同规模的团队在不同测试成熟度级别工作，包括Katalon Studio、TestOps（+免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）和模拟或存根（KMocks）。开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户，最长60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为您的Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费套餐每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和无限项目，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限制为10次iOS和10次Android测试，但包含付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录会话与网络和控制台日志。免费套餐最多创建10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似于CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，允许您在Chrome上运行无限测试，无需注册，每次测试运行最多3分钟。发现错误？您可以复制测试的唯一URL向开发者展示如何重现错误。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)。
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和将手动测试实现为代码的框架，使用GitHub。服务对[开源免费](https://github.com/marketplace/testspace-com)，每月450次结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行测试框架集成。开源软件开发者、个人、教育工作者和小团队起步可请求超出基本免费项目的折扣和免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 用Java或TypeScript构建可扩展UI，并使用集成工具、组件和设计系统更快迭代、更好设计并简化开发过程。无限项目，五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查Webhook和HTTP请求。完全免费，您可以创建无限URL并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证Webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费网络和服务器工具。
  * [kogiQA](https://kogiqa.com) — 无需选择器的Web UI自动化工具。每位开发者每月免费获得500次操作。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理工具。可搜索证书透明度日志。测试版结束后免费支持3个证书和1个用户。
  * [Corgea](https://corgea.com/) - 免费自动化安全平台，支持20多种语言和框架的不安全代码及依赖包检测与修复。免费版包含1个用户和2个代码库。
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，为.NET和Java应用提供数据泄露防护
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web工具，无需复杂工具或编程即可进行数据编解码分析。堪称密码学领域的瑞士军刀。所有功能免费无限制。支持开源自托管。
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过校验Kubernetes清单和Helm图表是否符合最佳实践及企业策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 支持Ruby/JavaScript/Python/PHP/Elixir/Rust/Java(.NET/Go/Elm/Docker/Terraform/Git子模块/GitHub Actions)的依赖项自动更新
  * [DJ Checkup](https://djcheckup.com) — Django站点安全漏洞扫描工具（基于Pony Checkup二次开发）
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云平台。免费版支持5个用户及基础权限控制。
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。杜绝通过Slack/邮件等不安全渠道共享.env文件，永久避免.env文件丢失。免费支持3人团队。
  * [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复方案，防止敏感信息泄露至代码库。可扫描350+种密钥类型，免费支持25人以下团队。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费检索2000万条GitHub公开仓库/代码片段/问题/评论中的泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露事件查询REST API
  * [hostedscan.com](https://hostedscan.com) — 在线Web应用/服务器/网络漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境第三方服务的全流程密钥管理。免费支持5名开发者。
  * [Internet.nl](https://internet.nl) — 现代互联网标准测试工具（IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE）
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - Java/JavaScript/.NET/Scala/Ruby/NodeJS项目依赖项安全监控。私有项目免费1个，开源项目不限量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 网站安全漏洞检测与修复工具
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 多功能SSL工具包，包含密钥/CSR生成器、证书解码器、证书匹配器及SSL订购功能。支持通过CNAME记录（非TXT记录）获取Let's Encrypt/Google Trust/BuyPass免费证书。
  * [Protectumus](https://protectumus.com) - PHP网站免费安全检测、防病毒及WAF方案。注册用户可获邮件通知服务。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据已在GitHub开源(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
  * [pyup.io](https://pyup.io) — Python依赖项安全漏洞监控与自动更新。私有项目免费1个，开源项目不限量。
  * [qualys.com](https://www.qualys.com/community-edition) — Web应用漏洞扫描及OWASP风险审计工具
  * [Socket](https://socket.dev) — 面向个人开发者、小团队及开源项目的免费供应链安全方案。包含应用和防火墙CLI工具，可防范70+种供应链风险指标。
  * [SOOS](https://soos.io) - 开源项目不限次SCA扫描。在发布前检测修复安全威胁，提供简单高效的防护方案。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析工具
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
  * [TestTLS.com](https://testtls.com) - SSL/TLS服务安全配置测试工具（不限于HTTPS），涵盖证书链等多项检测
  * [Virgil Security](https://virgilsecurity.com/) — 端到端加密、数据库保护、物联网安全等数字安全工具与服务。250用户以下应用免费。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [360username](https://360username.com/) - 免费工具，可在90多个社交平台搜索用户名以查找匹配的个人资料。
* [Aserto](https://www.aserto.com) - 为应用程序和API提供的细粒度授权服务。免费支持1000名月活跃用户（MAU）和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。包含前后端应用SDK。免费支持1000名MAU和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO。免费计划包括25,000名MAU、无限社交连接、自定义域名等。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA、SSO。包含所有前端组件。免费支持5000名MAU。
* [Authress](https://authress.io/) - 认证登录和访问控制，支持任何项目的无限身份提供商（如Facebook、Google、Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证（2FA），支持备份。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权和访问控制，免费支持100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，预构建的登录、注册、用户资料等UI组件。免费支持10,000名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份和访问管理即服务。免费支持100名用户和一个领域。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费支持7,500名月活跃用户和50个租户（含最多5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证（2FA）。免费支持10名用户，包含所有认证方法、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成到产品中。免费支持7,500名MAU的入门套餐。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现双因素认证（2FA），免费支持10名用户，适用于VPN、网站和SSH。
* [Logto](https://logto.io/) - 开发、保护和管理产品的用户身份（认证与授权）。免费支持5,000名MAU，并提供开源自托管选项。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动或任何应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证和授权。免费支持100名月活跃用户。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任托管安全平台。永久免费的开发者账户包含所有安全功能、无限团队成员、200名日活跃用户和25,000次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展的微服务，提供实时更新和无代码策略UI。免费支持1,000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份和访问管理。免费支持1,000名用户和10个SSO连接，基于Phase Two增强的Keycloak容器（包含[组织](https://phasetwo.io/product/organizations/)扩展功能）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可向任何规模的公司销售产品。免费支持200名用户和10,000封事务邮件（带"Powered by PropelAuth"水印）。
* [Stack Auth](https://stack-auth.com) - 不踩坑的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，或选择托管SaaS版本（免费支持10,000名MAU）。
* [Stytch](https://www.stytch.com/) - 一体化平台，提供认证和防欺诈的API/SDK。免费计划包括10,000名月活跃用户、无限组织、5个SSO或SCIM连接和1,000个M2M令牌。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速启动的同时掌控用户和开发者体验。免费支持5,000名MAU。
* [WorkOS](https://workos.com/) - 免费用户管理和认证，支持100万名MAU。功能包括邮箱+密码登录、社交认证、Magic Auth、MFA等。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户和访问管理，支持多租户（B2B）场景。免费支持25,000次认证请求，包含所有安全功能（OTP、无密码、策略等功能无付费墙）。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含5个应用、每月50次下载、最大文件尺寸100MB。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版功能：应用上传、密码保护链接、1天有效期、10次安装。
  * [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发平台。免费套餐包含1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
  * [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版功能：无限次上传、私有链接、访客2天有效期、注册用户60天有效期。
  * [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限下载、高速下载和无限上传服务。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
  * [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可和25MB应用存储空间
  * [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备
  * [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，免费保护无限量设备。免费版提供基础功能
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
  * [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理部署服务器和站点。免费支持1台服务器
  * [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
  * [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理和监控PHP服务器。免费支持1台服务器
  * [xcloud.host](https://xcloud.host) — 具有友好界面的服务器管理与部署平台。免费层级支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达能力的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息、跨多可用区的节点部署
* [courier.com](https://www.courier.com/) — 统一API集成推送、应用内消息、邮件、聊天、短信等通信渠道，含模板管理功能。免费套餐每月10,000条消息。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全MQTT代理服务。永久免费100万会话分钟/月（无需信用卡）。
* [Engage](https://engage.so/) - SaaS客户互动与自动化全流程工具（邮件、推送、短信、产品导览、横幅等）。每月最多1,000名活跃用户免费。
* [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理，支持MQTT设备连接。永久免费连接100台设备（无需信用卡）。
* [httpSMS](https://httpsms.com) - 将安卓手机作为短信网关收发短信。每月免费200条收发额度。
* [knock.app](https://knock.app) – 开发者通知基础设施。单次API调用即可发送应用内、邮件、短信、Slack和推送等多渠道消息。免费套餐含每月10,000条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
* [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件、短信、站内信、应用内和推送等多渠道的简易组件与API。免费套餐含每月30,000条通知（保留90天）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒。免费版：每日50条消息至1台设备1个应用。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）。
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日200,000条消息。
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日100,000次事件。
* [SMSGate](https://sms-gate.app) - 安卓™短信网关，通过云端路由收发短信。完全免费的云服务（建议每日超10,000条时通知以维持服务质量）。
* [SuprSend](https://www.suprsend.com/) - 采用API优先的智能通知中台，统一处理交易、定时和互动通知。免费套餐每月10,000条通知，支持摘要、批量、多渠道、偏好设置等多节点工作流。
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费版支持4k消息大小、50个活跃连接和每月5GB数据。
* [webpushr](https://www.webpushr.com/) - 网页推送通知 - 免费支持10,000订阅用户，推送数量不限，含浏览器内消息功能

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费1296万条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1000条用户活动日志，保留1个月，最多支持5个项目
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储空间，15天存储保留期和7天检索期
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
  * [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
  * [Free PO editor](https://pofile.net/free-po-editor) — 对所有人免费
  * [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，适用于Web和移动端本地化。自带LLM，或通过Lingo.dev管理的本地化引擎每月免费使用10,000字。
  * [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
  * [localazy.com](https://localazy.com) - 免费1,000条源语言字符串，无限语言，无限贡献者，初创企业和开源优惠
  * [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（包括2名用户、500个键和无限项目）。
  * [localizely.com](https://localizely.com/) — 开源项目免费
  * [Loco](https://localise.biz/) — 免费2,000条翻译，无限译者，10种语言/项目，1,000个可翻译资源/项目
  * [POEditor](https://poeditor.com/) — 免费1,000条字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费100个翻译键，无限字符串，无限语言，初创企业优惠
  * [Texterify](https://texterify.com/) - 单用户免费
  * [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 开源项目免费

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费方案。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测器（3分钟检查频率）和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测器，无限制用户、仪表板和告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案包含1个用户、1万次API及网络检查/1.5千次浏览器检查运行。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据。
* [cronitor.io](https://cronitor.io/) - 为定时任务、网站、API等提供性能洞察与正常运行时间监控。免费层包含5个监测器。
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监测器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测器，5分钟间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施支出。每月Google云平台消费不超过5,000美元可免费使用。
* [fivenines.io](https://fivenines.io/) — 提供实时仪表板和告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，集成了指标和日志与Grafana。免费版：3个用户、10个仪表板、100条告警，Prometheus和Graphite中的指标存储（1万条序列，14天保留期），Loki中的日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控您的定时任务和后台任务。免费支持最多20个检查。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 永久免费提供20个监测器和2个通知渠道（Slack和Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，支持无限订阅者和团队。
* [linkok.com](https://linkok.com) - 在线坏链检查器，免费支持最多100页的小型网站，开源项目完全免费。
* [loader.io](https://loader.io/) — 带有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面展示您的应用和堆栈，助您大规模监控和诊断问题。为开发者社区提供永久免费方案，支持最多100万日志事件的日志监控，以及最多2台主机的基础设施监控和APM。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控，附带美观的状态页面。"永久免费"方案支持10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，并提供2个仪表板/状态页面。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是收集实时指标的开源工具。这是一个不断发展的产品，也可在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台旨在帮助工程师创建更完美的软件。从单体架构到无服务器，您可以对所有内容进行检测，然后分析、排查和优化整个软件堆栈。免费层每月提供100GB免费数据摄入、1个全权限免费用户和无限基础免费用户。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的正常运行时间监控，以及定时任务监控和状态页面。前5个检查（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警。
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检查网站是否被中国防火长城屏蔽。通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息，识别DNS污染。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，免费支持最多6个监测器（每日检查）。
* [pagertree.com](https://pagertree.com/) - 简洁的告警和值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控，免费支持最多10万事件（不限项目和状态页面）。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检查无限URL并通过Discord、Slack或邮件接收宕机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测器（10分钟间隔）。监控SSH、HTTP、HTTPS和任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页面平台。免费层包含1个可公开定制的状态页面（带SSL子域名）。开源项目和非营利组织可免费使用专业方案。
* [Pulsetic](https://pulsetic.com) - 10个监测器、6个月历史正常运行时间/日志、无限状态页面和自定义域名！永久免费且不限邮件告警。无需信用卡。
* [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。自带Prometheus或安装一体化套件。免费层支持最多20个Kubernetes节点。通过Slack、Microsoft Teams、Discord等发送告警。集成PagerDuty、OpsGenie、VictorOps、DataDog等多种工具。
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控。提供HTTP监控、基于浏览器的监控、DNS监控、域名监控、状态页面等。免费层包含10个HTTP监测器、1个DNS监测器和1个状态页面。
* [Simple Observability](https://simpleobservability.com) — 统一指标和日志平台的强大服务器监控，无设置复杂性。1台服务器免费。
* [sitesure.net](https://sitesure.net) - 网站和定时任务监控 - 免费2个监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试（带限制）免费
* [statusgator.com](https://statusgator.com/) — 状态页面监控，免费3个监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警和指标。
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监测器（5分钟间隔）和可定制状态页面（商业用途亦可）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始。
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站（60秒间隔），公开状态页面。
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。

**[⬆️ 返回顶部](#目录)**

## 崩溃异常处理

  * [Axiom](https://axiom.co/) — 提供0.5TB日志存储，保留30天。包含与Vercel等平台的集成，支持高级数据查询及邮件/Discord通知功能。
  * [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月免费记录5,000次错误，自托管可无限使用。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月免费记录2,000次错误。
  * [CatchJS.com](https://catchjs.com/) - 带截图和点击轨迹的JavaScript错误追踪。开源项目免费。
  * [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控。开源项目可免费使用Small Business订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。小团队每年100万用户会话内免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月免费3,000次事件/1用户。开源且支持自托管无限使用。
  * [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月免费1,000次事件，或自托管无限制。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小团队和开源项目免费（每月12,000次错误）。
  * [Jam](https://jam.dev) - 开发者友好的一键错误报告。免费计划无限次提交。
  * [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台。
  * [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划每月5,000次错误，不限用户，保留30天。
  * [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关。
  * [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常，提供小规模免费计划。每月5,000次错误/1用户免费，自托管无限制。
  * [Whitespace](https://whitespace.dev) – 浏览器内一键提交错误报告。个人使用免费计划无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1,000名活跃用户免费，不限指令数量。
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等领域的免费认证课程
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业顶尖专家的免费短期课程，让您在一小时内掌握最新生成式AI工具与技术的实战经验
* [DevNet学院](https://devnet-academy.com/) - 针对Cisco DevNet专家/CCIE自动化认证的免费自学课程，涵盖Python Click和Flask-RESTx框架
* [Django教程网](https://django-tutorial.dev) - 提供Django框架的免费在线学习指南，并为用户撰写的文章提供dofollow反向链接
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖院校的4000+免费在线课程，专注计算机科学、工程与数据科学领域
* [Exercism](https://exercism.org) - 非营利性组织提供的75+编程语言免费开源教育平台，配备人工导师指导
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，支持克隆编辑和下载
* [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台提供数据分析、信息安全、网页开发等领域的免费课程与认证
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代网页开发免费课程，涵盖React、Node.js、GraphQL、TypeScript等技术，支持完全在线自学
* [智能交互简历](https://interactive-cv.com) - AI驱动的简历生成器，提供实时编辑和ATS优化。免费版包含高级模板转换（哈佛/Europass）、PDF导出、无限职位追踪及带聊天/语音功能的简历分享
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 免费学习基础与高级HTML/CSS、JavaScript及SQL的在线指南
* [LabEx实验平台](https://labex.io) - 通过交互式实验和真实项目培养Linux、DevOps、网络安全、编程与数据科学等技能
* [MIT开放课程](https://ocw.mit.edu/) - 汇集2500+门MIT课程资料，向全球学习者免费开放知识资源。YouTube频道请访问[@mitocw](https://www.youtube.com/@mitocw/featured)
* [技术路线图](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发路线的免费学习指南
* [奥丁项目](https://www.theodinproject.com/) - 专注JavaScript和Ruby网页开发的开源免费课程平台
* [W3Schools教程网](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等网页开发技术的免费教程

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 邮件订阅服务。最多100名免费订阅者
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly的联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [DNSExit](https://dnsexit.com/) - 免费2个域名邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件服务，无需暴露凭证即可发送邮件。免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系人历史
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户。完全免费的反事务性邮件服务，邮件永不投递
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发。免费创建并转发无限邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD中的邮件功能。免费账户永久每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [Inboxes App](https://inboxesapp.com) — 每天创建最多3个临时邮箱，完成后可通过Chrome扩展删除。适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件3天后自动删除。开源且可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置，每月20次免费
* [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API。每月5000封邮件，无限域名，免费邮箱验证、黑名单监控、邮件测试等
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面查看
* [mailchannels.com](https://www.mailchannels.com) - 邮件API，含REST API和SMTP集成，每月最多3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约86400次/月）
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件及自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [mailsac.com](https://mailsac.com) - 临时邮件测试免费API，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP，每月3500封免费事务性和营销邮件。开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员、每秒2封邮件、无转发规则
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享单一收件箱
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送到服务器）
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，内置端到端加密。1GB免费存储
* [Resend](https://resend.com) - 开发者事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SendStreak](https://www.sendstreak.com/) - 邮件框架即服务，为自有SMTP服务器（如AWS、Maileroo、Gmail）添加模板、自动化、历史记录等。每天100封免费邮件，无时间限制
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案。免费10个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费通讯服务。开始收费时支付
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API。每天100封免费邮件
* [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮件服务，支持多邮箱同时使用和转发
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次刷新页面邮箱地址会更新。完全免费无收费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，含转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务，内置端到端加密，无广告无追踪。1GB免费存储，1个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。部分[开源](https://github.com/tutao/tutanota)，可自托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，含收件箱确认和临时邮箱检测。每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Wraps](https://wraps.dev) - 邮件自动化工作流，5000次跟踪事件和无限联系人免费

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试平台。支持代码化配置和完全类型化的Typescript SDK，与Next.js、React等框架深度集成。提供慷慨的免费套餐和经济的扩展选项。
* [ConfigCat](https://configcat.com) - 以开发者为中心的功能开关服务，支持无限团队成员，提供优质服务且价格合理。免费套餐包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能，管理Web、移动和服务器端应用的功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3个用户免费，不限功能开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，支持Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，不限功能开关和A/B测试数量。
* [Statsig](https://www.statsig.com) - 强大的功能管理、A/B测试和分析平台。免费套餐不限席位、开关、实验和动态配置，每月支持100万次事件。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费套餐包含10个开关、2个环境和不限请求次数。SDK、分析仪表板、发布日历、Slack通知等所有功能均包含在永久免费套餐中。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [Befonts](https://befonts.com/) - 提供多款独特字体，支持个人或商业用途
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [dafont](https://www.dafont.com/) - 本站所有字体均为作者所有，包含免费版、共享版、试用版及公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体微调工具及字体提交服务
* [Font of web](https://fontofweb.com/) - 可检测网站使用的所有字体及其应用方式
* [Font Squirrel](https://www.fontsquirrel.com/) - 精选多款免费商用字体，以易用格式呈现
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的多样化可下载字体库
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，含CJK（中日韩）字体标签
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，个人和商业用途均100%免费
* [Google Fonts](https://fonts.google.com/) - 通过下载或CDN链接可快速为网站添加多款免费字体

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化界面，支持与Google Sheets、Airtable、Slack、电子邮件等集成。
* [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集总计25条反馈。提供React和Vue组件便于集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [Formester.com](https://formester.com) - 在网站上分享和嵌入独特风格的表单——不限创建数量或功能限制。免费版每月100次提交。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，不限单页表单数量，每月100次提交，邮件通知。
* [forms.app](https://forms.app/) — 创建含条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100条回复，支持网站嵌入或链接使用。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版不限表单数量，每月250次提交，提供客户支持。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每月每表单限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [Formware.io](https://formware.io/) — 无需编码即可快速创建全响应式吸引人的表单，免费收集无限回复！
* [HeroTofu.com](https://herotofu.com/) - 含机器人检测和加密存档的表单后端。通过界面将提交转发至邮件、Slack或Zapier。无需服务器代码，免费版不限表单数量，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版不限表单和提交数量，含预制模板、反垃圾及100MB文件存储。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单，每月1000次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任何PDF转为可填写表单。免费版不限PDF数量，每PDF限3次提交。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交、250MB文件存储，支持Zapier集成、CSV/JSON导出、自定义重定向和响应页面、Telegram & Slack机器人及单邮件通知。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可轻松集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [Survicate](https://survicate.com/) — 一站式收集全渠道反馈并发送跟进调查。通过AI自动分析反馈提取洞察。免费版含邮件、网站、产品内或移动端调查、AI调查创建工具及每月25条回复。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：不限表单数量、不限提交次数、邮件通知、表单逻辑、收款、文件上传、自定义致谢页等。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版每表单限10个字段，每月100条回复。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版含1个活跃调查、每调查25条回复及可定制模板。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过webhook接收通知。免费版会对签署文档添加水印，但不限制签署信封和签名数量。
* [Web3Forms](https://web3forms.com) - 无需编写后端代码即可为静态及JAMStack网站添加联系表单。免费版不限表单数量、不限域名，每月250次提交。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。
* [FormNX](https://www.FormNX.com/) - 免费创建无限表单并收集无限提交。使用1000+专业模板或从头构建，含邮件通知、表单逻辑、收款、文件上传、自定义致谢页等功能。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Arize AX](https://arize.com) - AI工程平台，帮助AI工程师/产品经理通过内置Alyx智能体评估和监控AI应用。免费版包含每月25k spans和1GB数据吞吐量。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，消除噪声和回声同时保持人声自然清晰。完全免费：支持无限次一键增强，无需登录，兼容MP3/WAV/FLAC格式
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估系统、提示词沙盒和数据管理工具。免费计划每周提供最多1,000条私有评估数据行
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码和监管功能。专业套件还提供免费试用
* [Comet Opik](https://www.comet.com/site/products/opik/) - 跨开发和生产生命周期评估、测试及部署LLM应用。[#开源项目](https://github.com/comet-ml/opik/)
* [Keywords AI](https://keywordsai.co) - 顶尖的LLM监控平台。两行代码即可调用200+大语言模型。每月10,000次免费请求，平台功能完全免费！
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，协助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月5万次观测和全部平台功能。[#开源项目](https://github.com/langfuse/langfuse)
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词和数据集，并调试LLM应用性能问题。为所有LLM生成开放遥测标准追踪数据，支持任意观测客户端。免费计划每月5万次追踪
* [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，促进技术人员与非技术团队协作微调和生产化生成式AI产品。免费计划包含全部平台功能、每月1k次追踪和1个DSPy优化工作流。[#开源项目](https://github.com/langwatch/langwatch)
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供10万免费字数额度，可访问Azure OpenAI、DeepSeek和Google Gemini模型，支持代码生成、深度研究和图像创建
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型包括DeepSeek R1/V3、Llama和Moonshot AI。这些模型擅长自然语言处理，适用于多样化开发需求（注意存在速率限制）。另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型满足进阶需求
* [Othor AI](https://othor.ai/) - AI原生的快速、简洁且安全的商业智能解决方案，可替代Tableau/Power BI/Looker。利用大语言模型在数分钟内交付定制化商业智能方案。永久免费计划提供1个工作区、5个数据源连接和单用户无限分析能力。[#开源项目](https://github.com/othorai/othor.ai)
* [Pollinations.AI](https://pollinations.ai/) - 易用的免费图像生成AI，提供免登录/无API密钥的开放API，支持多种网站和工作流集成方式。[#开源项目](https://github.com/pollinations/pollinations)
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，包含观测套件和AI网关。每月免费发送和记录1万次请求
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可永久免费使用全部平台
* [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，即时自动修复Cursor/Windsurf/Copilot等工具的输出以满足企业质量和合规标准。免费版包含每日100次MCP服务器调用和25次GitHub应用的自动化PR审查

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名和通用SSL证书
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的CDN服务。cdnjs是一个由Cloudflare提供支持的开源免费CDN，被全球超过11%的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您将其添加到Web应用中
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [PromoProxy](https://promoproxy.net/) - 免费的云安全Web网关。免费计划包括最多5个用户和每天1GB流量
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块的JavaScript CDN。每个域名每月免费100万次请求
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [Stellate](https://stellate.co/) - Stellate是一个极快、可靠的GraphQL API CDN，免费支持两项服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不停机的CD。个人使用免费，仅限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。实时处理图片并全球缓存

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [ampt.dev](https://getampt.com/) - Ampt让团队无需复杂配置或管理基础设施即可在AWS上构建、部署和扩展JavaScript应用。免费预览版计划包含每小时500次调用、每日2,500次调用和每月50,000次调用。自定义域名仅在付费计划中可用。
* [anvil.works](https://anvil.works) - 仅用Python开发Web应用。免费层包含无限应用和30秒超时限制。
* [Apply.build](https://apply.build/) — 免费构建和部署GitHub应用，提供0.5 vCPU / 512 MiB内存、欧洲服务器、自动防火墙、实时性能指标。支持Node.js、Python、Go、Java、静态网站、微服务等。
* [appwrite](https://appwrite.io) - 无限项目且无项目暂停（支持WebSocket）和认证服务。免费层每个项目包含1个数据库、3个存储桶和5个函数。
* [Choreo](https://wso2.com/choreo/) - AI原生的内部开发者平台即服务。免费层包含最多5个组件和每月100美元额度。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限。
* [Daestro](https://daestro.com) - 跨云提供商和本地环境运行计算任务。免费层包含最多10个并发任务运行、2个计算实例、自托管计算、1个云提供商、1个容器注册表和1个定时任务。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的JavaScript、TypeScript和WebAssembly分布式系统。免费层包含每日100,000次请求和每月100 GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux托管服务。免费版有1 GB存储和1 GB网络/月限制，且仅限于免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析提供自动基础设施、无样板代码等的后端框架。包含业余项目的免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送风格工作流在您自己的AWS账户上部署Web服务、数据库等。个人GitHub仓库的1名开发者可享免费层。AWS费用通过AWS计费，但可使用额度及AWS免费层。
* [gigalixir.com](https://gigalixir.com/) - Gigalixir为Elixir/Phoenix应用提供1个不休眠的免费实例和1个免费层PostgreSQL数据库（限制为2个连接、10,000行且无备份）。
* [Koyeb](https://www.koyeb.com) - Koyeb是面向开发者的无服务器平台，用于全球部署应用。无缝运行Docker容器、Web应用和API，支持基于Git的部署、原生自动扩展、全球边缘网络及内置服务网格和发现。免费实例可在德国法兰克福或美国华盛顿特区部署Web服务。免费托管Postgres数据库在法兰克福（德国）、华盛顿特区（美国）和新加坡可用。512MB内存、2GB存储和0.1 CPU。
* [leapcell](https://leapcell.io/) - Leapcell是可靠的分布式应用平台，提供支持快速增长所需的一切。免费计划包含100k次服务调用、10k次异步任务和100k次Redis命令。
* [Northflank](https://northflank.com) — 通过强大的UI、API和CLI构建和部署微服务、任务及托管数据库。从版本控制和外部Docker注册表无缝扩展容器。免费层包含2个服务、2个定时任务和1个数据库。
* [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台。基于任意触发器开发任何工作流。工作流是可[免费运行](https://docs.pipedream.com/pricing/)的代码。无需管理服务器或云资源。
* [Railway](https://railway.app/) - 通过基于Git的部署、自动CI/CD和内置数据库部署任何内容。免费层每月包含5美元额度。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。初学者账户免费，提供your-username.pythonanywhere.com域名的1个Python Web应用、512 MB私有文件存储和1个MySQL数据库。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建、发布和管理现代API的开源平台。内置CI/CD、GitHub集成和自动HTTPS。[免费计划](https://wundergraph.com/pricing)包含最多3个项目、1GB出口流量和每月300分钟构建时间。
* [YepCode](https://yepcode.io) - 在无服务器环境中连接API和服务的全能平台。兼具NoCode工具的敏捷性与编程语言的全部能力。免费层包含[1,000次yeps](https://yepcode.io/pricing/)。
* [Zeabur](https://zeabur.com) - 一键部署您的服务。免费支持3个服务，每月5美元免费额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度可达5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与网页Baas服务，含1GB免费文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 通过AI在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或本地工具链开发。
* [Claw.cloud](https://run.claw.cloud) - 提供每月5美元免费额度的PaaS平台（需GitHub账号注册超过180天），适合托管应用、数据库等（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知，支持最多1,000名用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费额度：100万条记录/500万次月度函数调用。
* [ETLR](https://etlr.io) - 使用YAML定义、版本化和部署自动化脚本，替代拖拽工具的开发者方案。适用于定时任务、AI代理和基础设施监控。免费层含100积分/月。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用界面，支持Firebase集成。免费计划包含完整UI构建器和免费模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的嵌入式聊天、消息、音视频及信息流功能（通常需数周开发）。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用与设备。免费版支持2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费额度：100次任务/15分钟。
* [LeanCloud](https://leancloud.app/) — 移动后端服务。免费含1GB数据存储、256MB实例、3,000次API调用/日和10,000次推送/日（API与Parse平台高度兼容）。
* [nhost.io](https://nhost.io) - 为网页和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送额度，联系人数量不限且支持自动预热功能。
* [paraio.com](https://paraio.com) — 具备灵活身份验证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知服务。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。免费额度达150万次推送/月。
* [pusher.com](https://pusher.com/beams) — 2,000名月活用户免费无限推送通知，支持iOS/Android的统一API。
* [simperium.com](https://simperium.com/) — 实时跨平台数据同步，结构化数据无限收发存储，最高2,500用户/月。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供身份验证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) — 含身份验证、配额、监控和分析的API管理平台，提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。免费版支持每15分钟5次触发/100次月度任务。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。可与15+种数据库和任何API集成。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可在几分钟内创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具有拖放界面、离线支持、实时位置跟踪及与多种第三方服务集成的功能。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用OpenAI、Anthropic、Firecrawl等免费内置API。非常适合构建AI代理/内部工具并与团队共享。免费层包括API完全访问权限、AI编码助手和每月10,000次执行积分。
  * [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费供一名用户使用，每月100万次工作流活动（[也有德语版本](https://www.manubes.de)）。
  * [Mendix](https://www.mendix.com/) — 企业级快速应用开发，提供无限访问的沙盒环境，支持总用户数，每个应用0.5 GB存储和1 GB RAM。免费层还允许使用Studio和Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) — 用于本地或云的企业Web开发PaaS，免费“个人环境”提供无限代码和最多1 GB数据库。
  * [ReTool](https://retool.com/) — 用于构建内部应用的低代码平台。ReTool具有高度可定制性。只要能用JavaScript和API实现的功能，都可以在ReTool中完成。免费层允许每月最多五名用户，无限应用和API连接。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并使用拖放应用构建器创建应用。
  * [UI Bakery](https://uibakery.io) — 低代码平台，可更快构建自定义Web应用。支持通过JavaScript、Python和SQL进行高度定制的拖放UI构建。提供云和自托管解决方案。最多5名用户免费使用。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费虚拟主机，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。可自定义Web服务器，支持FTP/WebDAV/SSH访问，包含邮箱、邮件列表和应用安装器（免费版不支持自定义域名）
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL，带应用安装器和邮件发送功能，无广告
* [Bubble](https://bubble.io/) — 可视化编程平台，无需代码即可构建网页/移动应用（免费版带Bubble品牌标识）
* [dAppling Network](https://www.dappling.network/) — 专注Web3前端的去中心化托管平台，提升运行时间与安全性，为用户提供额外访问入口
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform基础版免费构建部署3个静态站点
* [FreeFlarum](https://freeflarum.com/) — 社区支持的Flarum免费托管（支持250用户，捐赠可移除页脚水印）
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名与SSL，每月100GB流量，260+Cloudflare CDN节点
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，500MB内存，SFTP连接含1GB存储空间
* [Neocities](https://neocities.org) — 静态站点托管，1GB存储空间+200GB月流量
* [Netlify](https://www.netlify.com/) — 静态站点构建部署托管服务，每月300积分额度（约30GB流量）
* [Oaysus](https://oaysus.com) — 面向React/Vue/Svelte组件的可视化页面构建器，免费版含1个站点（不限页面数）、表单提交功能和全球CDN托管
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供多种托管形式（静态/容器化/WordPress等一键部署应用），免费包含1个托管站点+1个数据库，100GB月流量+300分钟构建时长
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管平台，含自动化DevOps工具和可扩展架构（开发者与代理商免费，不支持自定义域名）
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，开发者友好型全功能平台，免费支持静态资源/预发布环境/开发应用
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管服务，支持版本控制/PDF生成等功能
* [render.com](https://render.com) — 一体化云平台，提供免费SSL/全球CDN/私有网络/Git自动部署，Web服务/数据库/静态页面均有免费方案
* [Serv00.com](https://serv00.com/) — 3GB免费空间含每日备份（保留7天），支持Crontab任务/SSH访问/GIT/SVN/Mercurial仓库，兼容MySQL/PostgreSQL/MongoDB及PHP/Node.js/Python/Ruby/Java等20+编程语言
* [SourceForge](https://sourceforge.net/) — 免费查找/创建/发布开源软件
* [surge.sh](https://surge.sh/) — 前端开发者专用静态网页发布平台，支持无限站点与自定义域名
* [tilda.cc](https://tilda.cc/) — 免费版含1个站点/50个页面/50MB存储，仅限170+预设区块中的基础模块，不支持自定义字体/网站图标/域名
* [Vercel](https://vercel.com/) — 支持SSL/全球CDN的Web应用托管平台，每次`git push`自动生成专属预览URL，特别适合Next.js等静态站点生成器
* [Versoly](https://versoly.com/) — 专注SaaS的建站工具，免费版支持无限网站/70+区块/5套模板，含自定义CSS/网站图标/SEO/表单功能（不支持自定义域名）

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) - 免费DNS托管，支持1个域名和50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API。基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费DNS托管服务。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，免费版支持最多5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) - 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)，可管理多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于众多用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后从"Subdomains"菜单获取。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费DNS托管，最多支持3个域名，提供DNSSEC支持。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管服务，支持API。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为提供的免费DNS托管。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA，适用于私有网络。
* [luadns.com](https://www.luadns.com/) - 免费DNS托管，支持3个域名，所有功能均有合理限制。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费DNS托管，域名数量无限制。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) - 无需注册、无跟踪、无日志、无广告的免费动态DNS服务，域名数量无限制。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) - 免费DNS服务，查询包含IP地址的主机名时返回该IP地址。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS服务，无订阅或广告。
* [zilore.com](https://zilore.com/en/dns) - 免费DNS托管，支持5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费DNS托管。
* [Zonomi](https://zonomi.com/) - 免费DNS托管服务，即时DNS传播。免费计划：1个DNS区域（域名），最多10条DNS记录。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [DigitalPlat](https://domain.digitalplat.org) — 免费二级域名
* [isroot.in](https://isroot.in) — 免费 isroot.in 二级域名
* [pp.ua](https://nic.ua/) — 免费 pp.ua 二级域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。无限期免费提供10GB（类Amazon S3）对象存储
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 兼容S3协议的对象存储。每月15GB免费存储空间及15GB下载流量。
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费提供5GB存储空间。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是一个专为 JavaScript 开发者打造的全栈低代码开发平台，基于 MySQL 和 GraphQL 构建，提供无服务器后端即服务。通过 UI 应用构建器快速开发 Web 应用并轻松扩展。免费套餐包含：2,500 行数据、500MB 存储空间、1GB/小时无服务器计算资源以及 5 个客户端应用用户。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行数据和每月 1,000 次 API 请求
* [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点配置含 1 CPU、1GB 内存，PostgreSQL 和 MySQL 另含 1GB 存储空间。可轻松迁移至更高级方案或跨云部署。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费套餐每月提供 5,000 万请求单位（RU）和 10GiB 存储空间（价值等同于 15 美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，支持函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用，包含 2 个开发者席位，无需信用卡。
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，含 1 个节点和 8GB 存储空间，专为开发者打造以构建从物联网到人工智能的新一代应用
* [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，专为实时分析设计。[免费方案 CRFREE](https://crate.io/lp-crfree)：单节点配置含 2 CPU、2GiB 内存和 8GiB 存储。每个组织可创建一个集群，无需支付方式。
* [filess.io](https://filess.io) - filess.io 平台允许免费创建两个数据库，每个数据库最大 10MB，支持以下数据库管理系统：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费额度包含每 5 分钟 3MB 写入、每 5 分钟 30MB 读取和 10,000 基数序列
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费方案支持最大 25MB 内存、1 个代理服务器和基础分析功能
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费套餐提供 512MB 存储空间
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。免费方案限制图规模（5 万个节点，17.5 万种关系）。
* [Neon](https://neon.tech/) — 托管 PostgreSQL 服务，免费方案含 0.5GB 总存储空间、1 个项目、10 个分支、无限数据库、始终可用的主分支（5 分钟不活动后自动暂停），非主分支计算资源每月总计 20 小时活跃时间。
* [Nile](https://www.thenile.dev/) — 专为 B2B 应用打造的 Postgres 平台。无限数据库、永不停止服务、1GB 总存储空间、5,000 万查询令牌、自动扩展、无限向量嵌入
* [Prisma Postgres](https://prisma.io/postgres) - 基于单内核技术并在裸金属上运行的超高速托管 Postgres，免费方案含 1GB 存储空间、10 个数据库，与 Prisma ORM 深度集成。
* [restdb.io](https://restdb.io/) - 快速简洁的 NoSQL 云数据库服务。提供数据结构化、关系管理、自动 REST API（支持类 MongoDB 查询）以及高效的多用户数据管理界面。免费方案支持 3 个用户、2,500 条记录和每秒 1 次 API 请求。
* [scalingo.com](https://scalingo.com/) — 主要提供 PaaS 服务，但包含 128MB 至 192MB 的免费 MySQL、PostgreSQL 或 MongoDB 方案
* [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活电子表格式数据库。免费方案含无限表格、2,000 行数据、1 个月版本历史记录和最多 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云端数据平台提供免费套餐，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库强大功能与常用商业应用集成的工具。免费方案包含无限用户、10 个数据栈和每个栈 2GB 附件。
* [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse 服务，支持通过 HTTP 无连接数据摄入，可将 SQL 查询发布为托管 HTTP API。免费套餐无时间限制，含 10GB 存储空间和每日 1,000 次 API 请求。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验方案。提供永久免费的基础套餐，包含 9GB 总存储空间、最多 500 个数据库、3 个部署位置、每月 10 亿行读取量，以及本地开发 SQLite 支持。
* [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费方案每月支持 50 万次命令、256MB 最大数据库容量和 20 个并发连接
* [Xata Lite](https://lite.xata.io/) - Xata Lite 是无服务器数据库，内置强大搜索和分析功能。单一 API 支持多种类型安全客户端库，并针对开发工作流优化。免费方案提供 10 个分支和 15GB 存储空间，无暂停或冷启动问题。

**[⬆️ 返回顶部](#目录)**

## 隧道/WebRTC/WebSocket路由

  * [btunnel](https://www.btunnel.in/) — 将本地主机和本地TCP服务器暴露到互联网。免费套餐包含文件服务器、自定义HTTP请求和响应头、基础认证保护和1小时隧道超时。
* [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，将IIS Express暴露到本地网络或通过隧道暴露到公共URL。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费套餐包括欧盟服务器、随机子域名和单用户。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一项托管VPN服务，可让您安全地将类似LAN的网络扩展到分布式团队，免费套餐允许最多5人的无限网络。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控您的Webhook。每月10万次请求和10万次尝试，保留三天。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露到公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露到公共URL。免费托管版本和[开源](https://github.com/localtunnel/localtunnel)。
* [LocalXpose](https://localxpose.io) — 反向代理，使您能够将本地主机服务器暴露到互联网。免费套餐隧道有效期为15分钟。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露到公共URL。
* [Pinggy](https://pinggy.io) — 通过单一命令为本地主机提供公共URL，无需下载。HTTPS / TCP / TLS隧道。免费套餐隧道有效期为60分钟。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN将多台计算机连接在一起，实现类似LAN的网络。无限对等连接。（Hamachi替代品）
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装，无需注册。免费子域名，无限制。
* [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) Twilio STUN
* [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN
* [Tailscale](https://tailscale.com/) — 零配置VPN，使用开源的WireGuard协议。安装在MacOS、iOS、Windows、Linux和Android设备上。个人使用的免费套餐支持100台设备和三个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部（如本地主机）目的地。此外，通过隧道将运行在私有网络中的服务器暴露到公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用 + 每月500 MB TURN带宽，带宽上限，单一地理区域。
* [ZeroTier](https://www.zerotier.com) — FOSS托管虚拟以太网即服务。免费套餐支持25个客户端的端到端加密网络。适用于桌面/移动/NA的客户端；用于配置自定义路由规则和批准私有网络上新客户端节点的Web界面。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一体化项目发布平台。免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具。免费版提供5GB空间（不限用户数）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图）。免费版最多15用户/图表，25张工作表
* [clickup.com](https://clickup.com/) — 项目管理平台。基础功能免费，含云存储的付费版。提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具。永久免费，不限用户数
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图（AWS优化版）。免费版支持单人无限私有图表
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版最多10个用户
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持3个项目（不限用户数，1GB存储）
* [diagrams.net](https://app.diagrams.net/) — 支持本地存储至Google Drive/OneDrive/Dropbox的在线图表工具。全功能免费
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具。免费版每月3个公开看板和每个看板1次调研
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间跟踪/日历/文件/密码管理。免费版不限项目/用户/存储空间
* [GForge](https://gforge.com) — 复杂项目管理系统（支持自托管和SaaS）。SaaS免费版前5用户免费，开源项目免费
* [gleek.io](https://www.gleek.io) — 开发者专用的描述转图表工具。通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 对比两个GraphQL模式差异的工具。会标记破坏性变更/非破坏性变更/危险变更
* [Helploom](https://helploom.com) - 提供永久免费在线客服系统的软件。通过复制粘贴脚本即可部署
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板（100MB存储）
* [Ilograph](https://www.ilograph.com/)  — 支持多视角查看的基础设施交互图表工具。免费版支持无限私有图表（最多3个查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版最多10个用户
* [kan.bn](https://kan.bn/) - 灵活强大的看板工具。免费版支持1个用户（不限看板/列表/卡片）
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理工具。免费版2个看板/2个用户（不含附件）
* [Kitemaker.co](https://kitemaker.co) - 支持Slack/Discord/Figma/Github集成的产品开发协作平台。免费版上限250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度跟踪工具（含Chrome插件）。完全免费
* [Kumu.io](https://kumu.io/)  — 支持动画/装饰/筛选/聚类/表格导入的关系图谱工具。免费版支持无限公开项目，学生可创建私有项目
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS。免费版支持10用户/20自定义字段/2GB存储/5分钟AI视频录制/每月20次自动化执行
* [Linear](https://linear.app/) — 简洁高效的问题追踪工具。免费版不限成员/10MB文件上传/250个问题
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具。免费版支持3个可编辑文档/100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目（不限成员）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板）
* [nTask](https://www.ntaskmanager.com/) — 团队协作管理软件。免费版提供100MB存储/5个用户团队，不限工作区/会议/任务/工时表
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具。免费版不限成员/5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（评估工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克工具（无需注册）。不限用户/团队/会话/轮次/投票
* [Pulse.red](https://pulse.red) — 极简主义项目时间追踪工具
* [ScrumFast](https://www.scrumfast.com) - 直观的Scrum看板工具。免费版最多5个用户
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/销售/客服设计的项目管理工具。免费版支持3个项目/5个成员
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告工具。免费版每月10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费（最多10个用户）
* [taiga.io](https://taiga.io/) — 面向敏捷开发者的项目管理平台（开源项目免费）
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具。免费版提供1个工作区（不限任务）/1GB存储/1周历史记录/5人视频会议
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/计划工具。免费版最多15个用户

  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰游戏、GIF和表情符号。免费版支持3次回顾会议和无限成员。
* [Tenzu](https://tenzu.net/) — 为敏捷团队打造的轻量级项目管理工具。该SaaS产品依赖自愿付费，用户可选择支付0元且无功能限制 {[详情](https://tenzu.net/pricing/)}
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，支持在问题/任务中创建结构化清单、模板和审批流程。小团队可使用免费版。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版包含：5个活跃项目、每项目5名成员、5MB文件上传、3个筛选器及1周活动记录。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告），以及为独立开发者设计的[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版含无限任务/里程碑/时间线）。
* [trello.com](https://trello.com/) — 看板式项目管理。免费版含无限个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理。
* [Wikifactory](https://wikifactory.com/) — 产品设计平台，含项目管理、版本控制和问题追踪。免费版支持无限项目/协作者和3GB存储。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。免费版最多支持3名用户（项目数量不限）。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目及私有项目（3用户免费）。含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — 唯一内置于GitHub的项目管理方案。公开仓库、开源组织及非营利机构可免费使用。
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版支持最多5名成员和5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目与4名用户。提供GitHub集成功能。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件主机](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数等。主要面向Android开发相关文件，如APK构建、自定义ROM和修改等，但也接受其他类型文件。
  * [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全的异地备份托管服务。免费提供10 GB备份空间和两个存储库。
  * [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图像上传、强大处理、存储和交付服务，支持Ruby、Python、Java、PHP、Objective-C等多种库。免费套餐每月包含25个积分，1个积分等于1,000次图像转换、1 GB存储或1 GB CDN使用量。
  * [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20 GB空间，支持三台设备，推荐奖励5 GB（账户90天不活跃）。
  * [Dropshare](https://dropsha.re) - 零知识文件共享。端到端加密文件共享，采用AES-256-GCM加密，客户端处理，服务器端零数据访问。免费上传文件大小限制为1GB，不收集数据。
  * [embed.ly](https://embed.ly/) — 提供API用于在网页中嵌入媒体、响应式图像缩放和从网页提取元素。免费套餐每月支持5,000个URL，每秒15个请求。
  * [Ente](https://ente.io/) - Ente是一个端到端加密的云服务，用于存储照片、视频和2FA秘密。也可以自托管，并提供慷慨的永久免费套餐10GB。免费套餐用户仅保留数据的单副本。
  * [file.io](https://www.file.io) - 2 GB文件存储。文件在下载一次后自动删除。提供REST API与存储交互，速率限制为每分钟一个请求。
  * [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图像、音频、视频等。
  * [getpantry.cloud](https://getpantry.cloud/) — 一个简单的JSON数据存储API，非常适合个人项目、黑客马拉松和移动应用！
  * [GoFile.io](https://gofile.io/) - 免费文件共享和存储平台，可通过基于Web的UI和API使用。无限文件大小、带宽、下载次数等。但文件在十天内无下载活动将被删除。
  * [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图像和视频托管、处理和流媒体服务。免费套餐每月提供250 GB视频流量和30 GB图像流量。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。免费提供10 GB存储空间。
  * [image-charts.com](https://www.image-charts.com/) — 无限生成带水印的图像图表。
  * [ImageEngine](https://imageengine.io/) – ImageEngine是一个易于使用的全球图像CDN。设置时间少于60秒。支持AVIF和JPEGXL，提供WordPress、Magento、React、Vue等插件。在此申请免费开发者账户[here](https://imageengine.io/developer-program/)。
  * [imagekit.io](https://imagekit.io) – 图像CDN，提供自动优化、实时转换和存储，可在几分钟内与现有设置集成。免费套餐每月包含高达20GB的带宽。
  * [ImgBB](https://imgbb.com/) — ImgBB是一个无限图像托管服务。在屏幕上任意位置拖放图像。每张图像限制为32 MB。上传图像后获取直接图像链接、BBCode和HTML缩略图。登录可查看上传历史。
  * [Imgbot](https://github.com/marketplace/imgbot) — Imgbot是一个友好的机器人，可优化您的图像并节省时间。优化后的图像意味着更小的文件大小而不牺牲质量。开源项目免费使用。
  * [imgen](https://www.jitbit.com/imgen/) - 免费无限社交封面图像生成API，无水印。
  * [imgix](https://www.imgix.com/) - 图像缓存、管理和CDN。免费套餐包括1000个原始图像、无限转换和100 GB带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive是一个基于绝对隐私和 uncompromising security 的零知识文件存储服务。注册即可永久免费获得10 GB空间！
  * [kraken.io](https://kraken.io/) — 为网站性能提供图像优化服务，免费套餐支持最大1 MB文件大小。
  * [LibreQR](https://libreqr.com) — 专注于隐私和无跟踪的免费QR码生成器。免费使用，不收集数据。
  * [nitropack.io](https://nitropack.io/) - 通过完整的前端优化（缓存、图像和代码优化、CDN）自动加速您的网站。免费套餐每月支持5,000次页面浏览。
  * [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储。
  * [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动所有云存储文件。基本套餐提供无限文件传输，最大文件大小为250 MB，并允许五个加密文件。
  * [packagecloud.io](https://packagecloud.io/) — 为YUM、APT、RubyGem和PyPI提供托管的软件包仓库。有限免费套餐和开源套餐可通过申请获得。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。免费提供高达10 GB的存储空间。
  * [Pinata IPFS](https://pinata.cloud) — Pinata是上传和管理IPFS文件的最简单方式。友好的用户界面和IPFS API使Pinata成为平台、创作者和收藏者最容易使用的IPFS固定服务。免费提供1 GB存储空间，并可访问API。
  * [plot.ly](https://plot.ly/) — 绘制和共享您的数据。免费套餐包括无限公共文件和十个私有文件。
  * [podio.com](https://podio.com/) — 您可以在最多五人的团队中使用Podio，并试用基本套餐的功能，但不包括用户管理。
  * [Proton Drive](https://proton.me/drive) - 超安全的云存储服务，用于文件和关键文档。免费套餐提供5 GB存储空间。
  * [QRME.SH](https://qrme.sh) - 快速、美观的批量QR码生成器——无需登录、无水印、无广告。每次批量导出最多支持100个URL。
  * [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表、图形和QR码。
  * [redbooth.com](https://redbooth.com) — P2P文件同步，最多支持两个用户免费使用。
  * [resmush.it](https://resmush.it) — reSmush.it是一个免费的API，提供图像优化服务。reSmush.it已在最常见的CMS（如WordPress、Drupal或Magento）上实现。reSmush.it是最常用的图像优化API，已处理超过70亿张图像，并且仍然免费。
  * [sirv.com](https://sirv.com/) — 智能图像CDN，提供实时图像优化和调整大小。免费套餐包括500 MB存储空间和2 GB带宽。
  * [SlingSite](https://slingsite.github.io) - 为您的图像和视频创建所有优化版本。免费。批量处理。对于每张图像，您将获得以下格式：AVIF、WEBP和JPG，以及三种选定的分辨率（桌面、平板、移动）。对于视频，您将获得：WebM（编解码器VP9）、MP4（编解码器HEVC，即H.265）和MP4（编解码器AVC，即H.264），以及封面图像（第一帧）。
  * [sync.com](https://www.sync.com/) - 端到端云存储服务。免费提供5 GB存储空间。
  * [tinypng.com](https://tinypng.com/) — 用于压缩和调整PNG和JPEG图像大小的API，每月免费提供500次压缩。
  * [transloadit.com](https://transloadit.com/) — 处理文件上传和视频、音频、图像、文档的编码。开源项目、慈善机构和学生可通过GitHub学生开发者包免费使用。商业应用可获得2 GB免费试用。
  * [twicpics.com](https://www.twicpics.com) - 响应式图像即服务。提供图像CDN、媒体处理API和前端库以自动化图像优化。该服务每月免费提供高达3GB的流量。
  * [uploadcare.com](https://uploadcare.com/) — Uploadcare提供文件上传和交付服务，包括自适应图像交付和CDN。免费套餐每月支持5000次文件转换和3 GB流量。

  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...

**[⬆️ 返回顶部](#目录)**

## 设计与UI

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（不限查看人数）
* [BoxySVG](https://boxy-svg.com/app) — 可安装的网页版SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [日历图标生成器](https://calendariconsgenerator.app/) -- 一键生成全年份独特图标，完全免费
* [Canva](https://canva.com) - 在线视觉内容设计工具
* [Carousel Hero](https://carouselhero.com/) - 社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库（支持React/Vue/Svelte的SVG格式）
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具（含视频和GIF）
* [CMYK转潘通色](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [CodedThemes](https://codedthemes.com/) - 精心打造的管理后台模板和UI套件，加速现代网页开发
* [CodeMyUI](https://codemyui.com) - 附带代码片段的网页设计与UI灵感库
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 色彩与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变的免费工具（支持RGB/HEX格式）
* [css.glass](https://css.glass/) -- 用CSS创建玻璃拟态设计的免费网页工具
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库（减少类名书写），提供按钮等组件
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存和导出的免费在线绘图工具
* [figma.com](https://www.figma.com) - 团队协作设计工具（免费版含无限文件查看+2名编辑+3个项目）
* [Float UI](https://floatui.com/) - 非设计师也能快速创建现代响应式网站的免费工具
* [Flows](https://flows.sh/) -- 完全可定制的产品引导平台（免费支持250名月活跃用户）
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具（免费版含无限查看+2名编辑+3个项目）
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库
* [Glyphs](https://glyphs.fyi/) -- 完全可编辑的真正开源图标系统
* [Gradientos](https://www.gradientos.app) - 极简梯度配色工具
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的SEO优化网页构建器（免费5个页面）
* [haikei.app](https://www.haikei.app/) - 生成独特SVG图形/背景/图案的网页工具
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色合集与生成器
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [Icon Horse](https://icon.horse) – 通过API获取任意网站高清favicon
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一搜索平台（支持导出SVG/框架组件）
* [Iconoir](https://iconoir.com) – 支持多框架的开源图标库（含数千图标）
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具（免费版有分辨率限制）
* [图片背景模糊器](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片模糊背景框
* [landen.co](https://www.landen.co) — 无代码建站工具（免费版支持1个全功能网站）
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Logo.dev](https://www.logo.dev) - 包含4400万品牌的LOGO API（前1万次调用免费）
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具（通过URL参数指定尺寸）
* [LottieFiles](https://lottiefiles.com/) - 轻量动画格式Lottie资源平台（提供多端工具插件）
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的离线图形设计工具（免费版含10个云文档）
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计原型协作平台（免费版限1用户1项目）
* [Mastershot](https://mastershot.app) - 无水印的浏览器视频编辑器（支持1080P导出）
* [MDBootstrap](https://mdbootstrap.com/) - 免费商用Bootstrap/Angular/React/Vue UI套件（含700+组件）
* [Mindmup.com](https://www.mindmup.com/) — 云端无限量思维导图工具（全平台即时同步）
* [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具（免费版含3用户5项目）

  * [Modeldraw.com](https://modeldraw.com) — 完整的图表平台，支持UML、系统架构图、流程图、思维导图和敏捷工作流。支持无限制团队成员实时协作，无需信用卡。
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器，提供波浪、博客和图案等多种工具。
* [movingpencils.com](https://movingpencils.com) — 基于浏览器的快速矢量编辑器，完全免费。
* [Nappy](https://nappy.co/) -- 免费的黑人和棕色人种精美照片，可用于商业和个人用途。
* [NextUI](https://nextui.org/) -- 免费、美观、快速且现代的React & Next.js UI库。
* [NSPolygon](https://nspolygon.com) — 免费库存照片、图标和插图资源。
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具。实时构建网站结构并快速分享以与团队或客户协作。
* [OKLCH](https://oklch.net/) -- 免费的OKLCH颜色选择器和转换工具，适合网页设计师和开发者。
* [okso.app](https://okso.app) - 极简在线绘图应用。可快速创建草图和视觉笔记。支持导出为PNG、JPG、SVG和WEBP格式。也可作为PWA安装。完全免费使用（无需注册）。
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具。
* [Penpot](https://penpot.app) - 基于网页的开源设计和原型工具，支持SVG。完全免费。
* [pexels.com](https://www.pexels.com/) - 免费商用库存照片。提供免费API支持关键词搜索照片。
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，界面类似Adobe Photoshop，支持PSD、XCF和Sketch格式（兼容Adobe Photoshop、Gimp和Sketch App）。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特且引人注目的图形和图像。
* [pixlr.com](https://pixlr.com/) — 免费在线浏览器编辑器，功能媲美商业软件。
* [Plasmic](https://www.plasmic.app/) - 快速、易用且强大的网页设计工具和页面构建器，可集成到代码库中。构建响应式页面或复杂组件；可选代码扩展；发布到生产网站和应用。
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 在浏览器中直接将PNG图像转换为WebP格式。无需上传，完全客户端处理，确保最高隐私和安全性。
* [Pravatar](https://pravatar.cc/) - 生成随机/占位虚拟头像，URL可直接热链到网页或应用中。
* [Proto.io](https://www.proto.io) - 无需编码即可创建完全交互式UI原型。免费试用结束后仍可使用免费版，包含1个用户、1个项目、5个原型、100MB在线存储和proto.io应用预览。
* [Quant Ux](https://quant-ux.com/) - Quant Ux是一款原型设计和设计工具，完全免费且开源。
* [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标调整和管理服务。
* [Responsively App](https://responsively.app) - 免费开发工具，加速响应式网页应用开发并提高精确度。
* [Rive](https://rive.app) — 创建并发布精美动画到任何平台。个人用户永久免费。该服务提供编辑器并托管所有图形在其服务器上，同时为多平台提供运行时以运行Rive制作的动画。
* [SceneLab](https://scenelab.io) - 在线模型图形编辑器，提供不断扩大的免费设计模板库。
* [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计网页自定义滚动条。
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局中的主题变化。
* [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到应用中。支持无障碍访问和自定义，开源。
* [smartmockups.com](https://smartmockups.com/) — 创建产品模型，提供200个免费模型。
* [storyset.com](https://storyset.com/) — 使用此工具为项目创建精美的免费定制插图。
* [Superdesigner](https://superdesigner.co) - 免费设计工具集合，通过点击即可创建独特背景、图案、形状、图像等。
* [SVG Converter](https://svgconverter.online/) -- 免费JPG/PNG转SVG工具，支持调色板自定义。
* [SVGmix.com](https://www.svgmix.com/) - 包含30万+免费SVG图标、合集和品牌标志的庞大资源库。内置浏览器矢量编辑程序，可快速编辑文件。
* [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合项目的图标或矢量图。下载免费商用SVG矢量图。
* [tabler-icons.io](https://tabler-icons.io/) — 1500+免费可复制粘贴的SVG可编辑图标。
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代响应式预制UI区块集合。
* [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板。实时预览并复制完美的Tailwind CSS颜色类。
* [Tailkits](https://tailkits.com/) -- 精选Tailwind模板、组件和工具集合，以及代码、网格、阴影等实用生成器。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作式前端平台，可快速创建和发布无头静态网站。免费提供三个项目、无限制协作者和代码导出。
* [TW Elements](https://tw-elements.com/) - 使用Tailwind CSS重新设计的免费Bootstrap组件，设计更优且功能更丰富。
* [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题。实时自定义颜色、排版等。
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成带首字母的头像。URL可直接热链到网页或应用中。支持通过URL配置参数。
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图像集合，可完全免费使用且无需署名。
* [Unicorn Platform](https://unicornplatform.com/) - 轻松构建带托管的落地页。免费提供一个网站。
* [unsplash.com](https://unsplash.com/) - 免费商用和非商用库存照片（随心所欲许可证）。
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的WYSIWYG网站构建器。非商业用途免费。
* [vector.express](https://vector.express) — 快速轻松转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
* [vectr.com](https://vectr.com/) — 免费网页和桌面设计应用。
* [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件格式转换平台，包括开发者常用转换工具如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
* [Volume](https://volumecolor.io) — OKLCH颜色选择器和调色板生成器。
* [walkme.com](https://www.walkme.com/) — 企业级引导和互动平台，免费版提供最多5步的3次引导。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
* [Webflow](https://webflow.com) - 带动画和网站托管的WYSIWYG网站构建器。免费提供两个项目。
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费版提供无限网站（使用其域名）、5个自定义域名网站、每月1万次页面浏览和2GB资源存储。
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图工具。免费创建最多4个面板。

  * [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计稿、资源和样式指南。单个项目免费使用。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目类别筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+完全可搜索的移动应用截图库，节省UI和UX研究时间。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发人员和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动/网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。
* [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动截图] 精选的应用商店设计截图集合。
* [Uiland Design](https://uiland.design/) - [移动截图] 探索来自非洲和世界领先公司的移动和网页UI设计。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表般精准的地图工具。每月提供五万次免费查询（地图瓦片、db2vector、高程数据）。
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容。
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日三千次免费请求。
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日两千五百次免费查询。
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询。
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询API。
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API。全球覆盖，每日两千五百次免费查询。
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路线优化、距离矩阵、地理编码和地图匹配功能。
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理。
* [IP Geolocation](https://ipgeolocation.io/) — 提供3万次/月免费请求的DEVELOPER计划。
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者。
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日五千次免费请求。
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示的地图、地理空间服务和SDK。
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务。
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新，提供四种地图样式。
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能。
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日两千五百次免费查询。
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面流行度排名的地理编码搜索结果。
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求。
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途和测试每日两千五百次免费地图浏览与API请求。

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [Android Studio](https://developer.android.com/studio) — Android Studio 为各类 Android 设备提供最快的应用开发工具。这款开源 IDE 完全免费，是开发 Android 应用的最佳选择。支持 Windows、Mac、Linux 甚至 ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) — 一款开源 IDE，可在 Android 设备上开发基于 Gradle 的真实 Android 应用。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
  * [apiary.io](https://apiary.io/) — 协作式 API 设计工具，提供即时 API 模拟和文档生成（免费版支持无限 API 蓝图和无限用户，但仅限一个管理员账户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit 是 macOS 上广受欢迎且可扩展的文本编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
  * [Binder](https://mybinder.org/) - 将 Git 仓库转换为交互式笔记本集合。这是一项免费的公共服务。
  * [BlueJ](https://bluej.org) — 专为初学者设计的免费 Java 开发环境，全球数百万人使用。由 Oracle 提供支持，采用简单 GUI 帮助新手入门。
  * [Bootify.io](https://bootify.io/) - 支持自定义数据库和 REST API 的 Spring Boot 应用生成器。
  * [Brackets](http://brackets.io/) - Brackets 是一款专为网页开发设计的开源文本编辑器，轻量易用且高度可定制。
  * [cacher.io](https://www.cacher.io) — 代码片段管理工具，支持标签和 100+ 编程语言。
  * [cocalc.com](https://cocalc.com/) —（原 cloud.sagemath.com）— 云端协作计算平台。通过浏览器访问完整 Ubuntu 系统，内置协作功能并预装大量数学、科学、数据科学免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
  * [code.cs50.io](https://code.cs50.io/) - CS50 专用 Visual Studio Code 网页版，基于 GitHub Codespaces 为学生和教师优化。
  * [Code::Blocks](https://codeblocks.org) — 免费的 Fortran 和 C/C++ IDE。开源且支持 Windows、macOS 和 Linux。
  * [codepen.io](https://codepen.io/) — 前端开发的游乐场。
  * [codesandbox.io](https://codesandbox.io/) — 支持 React、Vue、Angular、Preact 等的在线开发环境。
  * [codiga.io](https://codiga.io/) — 直接在 IDE 中搜索、定义和复用代码片段的编程助手。个人和小型团队可免费使用。
  * [Components.studio](https://webcomponents.dev/) - 独立编写组件，通过故事可视化，测试并发布到 npm。
  * [Eclipse Che](https://www.eclipse.org/che/) - 基于网页和 Kubernetes 的多语言支持 IDE，开源且社区驱动。Red Hat 托管实例：[workspaces.openshift.com](https://workspaces.openshift.com/)。
  * [ForgeCode](https://forgecode.dev/) — 支持 Claude、GPT4 系列、Grok、Deepseek、Gemini 等前沿模型的 AI 结对编程工具。原生兼容 CLI 并可与任何 IDE 无缝集成。免费层包含本地处理的基础 AI 模型访问。
  * [GetVM](https://getvm.io) — 即时免费的 Linux 和 IDE Chrome 侧边栏工具。免费层每天可使用 5 个虚拟机。
  * [JDoodle](https://www.jdoodle.com) — 支持 60+ 语言的在线编译器和编辑器，免费版 REST API 每天可编译 200 次。
  * [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE 和部署工具（如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。学生、教师、开源项目及用户组可免费使用。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回虚假 JSON 数据的 REST API 端点。如需本地运行服务器也可获取源码。
  * [Lazarus](https://www.lazarus-ide.org/) — Delphi 兼容的跨平台快速应用开发 IDE。
  * [MarsCode](https://www.marscode.com/) - 免费的 AI 驱动云端 IDE。
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 生成虚假 JSON 数据的微型 API 模拟服务。
  * [mockable.io](https://www.mockable.io/) — 可快速定义返回 JSON/XML 数据的 REST API 或 SOAP 端点的模拟服务。
  * [mockaroo](https://mockaroo.com/) — 生成 CSV/JSON/SQL/Excel 格式的测试数据，也可模拟后端 API。
  * [Mocklets](https://mocklets.com) - 基于 HTTP 的 API 模拟器，支持终身免费层。
  * [OneCompiler](https://onecompiler.com/) - 支持 70+ 语言的免费在线编译器，包括 Java/Python/C++/JavaScript。
  * [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器开发 Web 应用。免费版提供 24 小时有效期的服务器，每天 4 小时运行时间（2 CPU 核心/2GB RAM/1GB 存储）。
  * [PHPSandbox](https://phpsandbox.io/) — PHP 在线开发环境。
  * [Replit](https://replit.com/) — 支持多语言的云端编程环境。
  * [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程平台，支持多种语言。运行代码无需注册，但保存代码需要。同时提供初级/中级编程免费课程。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云端全栈应用开发 IDE，支持主流 NodeJs 框架。快速创建项目：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - 广受欢迎的多功能文本编辑器，高度可定制。
  * [Visual Studio Code](https://code.visualstudio.com/) - 微软开发的现代化代码编辑器，优化了网页和云应用开发调试体验。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的 IDE，支持数千扩展、跨平台开发（可下载 iOS/Android 扩展）、桌面/网页/云开发及多语言（C#/C++/JavaScript/Python/PHP 等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动的 VSCode 分支版本，无遥测/跟踪且完全开源。
  * [wakatime.com](https://wakatime.com/) — 通过编辑器插件量化编程活动，免费版功能有限。
  * [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持内联渲染、会话保存。基于开放网络标准，支持 MacOS/Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内 Web 组件开发 IDE，提供 58 个模板，支持故事和测试。
  * [Zed](https://zed.dev/) - Atom 和 Tree-sitter 创作者打造的高性能多人协作代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 数据分析/事件/统计

  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多支持2个应用
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在简化跨平台分析和产品更新的管理。免费计划包括每月10,000次事件、产品日志和每周洞察。
* [Aptabase](https://aptabase.com) — 面向移动和桌面应用的开源、隐私友好且简单的分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费20,000次事件。
* [Avo](https://avo.app/) — 简化的分析发布工作流。单一真实来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观测性，确保在发布前发现所有数据问题。免费支持2名工作区成员和1小时数据可观测性回溯。
* [Beampipe.io](https://beampipe.io) - Beampipe是一款简单、注重隐私的网站分析工具。免费支持最多5个域名和每月10,000次页面浏览。
* [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。将数据仓库中的10个字段同步到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3,000次浏览分析。
* [counter.dev](https://counter.dev) — 简单且隐私友好的网站分析工具。免费或按捐赠付费。
* [DocBeacon](https://docbeacon.io) - 安全的文档共享工具，支持文档跟踪和参与度分析。免费计划支持最多20个PDF文档（最大10 MB）、10个联系人和每文档2次分享，提供基本的浏览、下载、时间和参与度分析。
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
* [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流。
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月免费3,000次事件。
* [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一个开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且注重隐私的网站分析，替代Google Analytics或Matomo。免费层适用于非商业用途，包括无限站点、六个月数据保留和每月100,000次页面浏览。
* [Google Analytics](https://analytics.google.com/) — Google Analytics。
* [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。每月免费10,000次会话。
* [Hightouch](https://hightouch.com/) - Hightouch是一个反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个目标数据同步。
* [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划每天支持2,000次页面浏览。每天100次快照（最大容量：300）。可存储3个快照热图365天。无限团队成员。还包括应用和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20条响应。
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划每月10,000次事件。
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月支持100万次页面浏览，无需信用卡。
* [Mixpanel](https://mixpanel.com/) — 每月100,000名跟踪用户，无限数据历史和席位，美国或欧盟数据存储。
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月免费500,000次API调用）。
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费100万次跟踪事件。还包括无限应用内调查，每月250条响应。
* [Repohistory](https://repohistory.com) - 美观的仪表板，用于跟踪GitHub仓库流量历史超过14天。免费计划允许用户监控单个仓库的流量。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿。
* [Rybbit](https://rybbit.io) - 开源且无Cookie的Google Analytics替代方案，直观性提升10倍。免费计划每月3,000次事件。
* [Seline](https://seline.so) - Seline是一款简单且隐私友好的网站和产品分析工具。无Cookie、轻量级、独立。免费计划包括每月3,000次事件，并提供所有功能访问，如仪表板、用户旅程、漏斗等。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划分析500名最近访问者。
* [Statsig](https://statsig.com) - 一体化平台，涵盖分析、功能标记和A/B测试。每月免费100万次计量事件。
* [TraceLog](https://tracelog.io/) - 电子商务AI分析。用自然语言提问分析问题，获取可操作建议，并通过AI驱动的洞察增加收入。每月免费10,000次事件。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，促进无缝协作。部署到生产环境或为回归测试添加分析覆盖，无需编写代码。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级、注重隐私的Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标跟踪。免费支持最多3个域名和每个域名600次会话回放。
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型，并跟踪访问者。单个用户免费，无限测试。
* [Userbird](https://userbird.com) - 带有热图、会话记录和收入跟踪的Google Analytics替代方案。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留1个月，提供3个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月免费支持5,000次访问。
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费。
* [LogRocket.com](https://www.logrocket.com) — 每月1,000次会话，30天数据保留，包含错误追踪和实时模式。
* [Microsoft Clarity](https://clarity.microsoft.com/) — 完全免费的会话录制，"无流量限制"，无项目限制，无采样。
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费。
* [OpenReplay.com](https://www.openreplay.com) — 开源的会话回放工具，提供开发者工具用于错误复现、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [Reactflow.com](https://www.reactflow.com/) — 每个网站：每日1,000次页面浏览，3个热图，3个小工具，免费错误追踪。
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），3个热图，1个漏斗，1个月数据历史。
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费。

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API/SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Adapty.io](https://adapty.io/) – 一站式移动应用订阅解决方案，提供开源SDK，支持iOS、Android、React Native、Flutter、Unity及网页应用集成。月收入1万美元以下免费使用。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费版每月10,000次API调用额度。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟限10次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率数据，支持JSON和XML格式。免费版每月1,250次API请求。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时与历史货币汇率。免费开发者计划每月1,000次请求。
* [currencylayer](https://currencylayer.com/) — 企业级可靠汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简易货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈与退单。免费微型计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时与历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持Stripe、Chargebee等支付系统集成。免费版每月30,000次事件记录。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力全球业务拓展（购买力平价模式）。免费计划每月7,500次API请求。
* [Qonversion](http://qonversion.io/) - 全平台订阅管理平台，提供数据分析、A/B测试、Apple Search Ads、远程配置及增长工具，优化应用内购与变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe及网页应用。月跟踪收入1万美元以下免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购与订阅托管后端（支持iOS/Android）。月跟踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费版每月100次请求

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [容器注册服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1GB私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
  * [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册服务

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式Miniblog的形式免费与世界分享你的想法、知识和故事。
* [BearBlog](https://bearblog.dev/) - 极简主义、支持Markdown的博客和网站构建工具。
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的平台。
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件！
* [Medium](https://medium.com/) — 更深入地思考对你重要的事物。
* [JustBlogged](https://justblogged.com) — 支持自定义域名的免费博客平台，具备全球快速访问性能。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中建立活跃社区
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随喜付费"模式，提供"一个管理员管理少量域名，完全控制行为与外观"的服务
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可将 GitHub issues 用于博客评论、维基页面等场景！

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间信息和视窗尺寸调整。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据：元标签标准化、精美链接预览、爬虫功能或按需截图服务。每日免费250次请求。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染。免费层每日限500页，自2017年持续提供。
  * [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速生成可扩展的截图服务。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 高度自定义的网站快照捕获。每月免费100次快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（支持png/gif/jpg格式），包含整页截图而不仅是首页。
  * [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关/免Mac开发iOS

  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一款专为移动应用打造的完全托管式 CI/CD 服务。您可以通过基于图形界面的 CI/CD 工具完成构建、测试和部署。免费套餐每月提供 500 分钟免费时长，并配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 设备即可构建 iOS 和 Android 应用。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的拖拽式界面工具，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一款支持网络功能的OpenRISC虚拟机，可运行Linux系统。
  * [JsLinux](https://bellard.org/jslinux) — 超高速x86虚拟机，可运行Linux和Windows 2000系统。
  * [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux及其他操作系统的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSAR）及数据映射功能。免费版包含核心同意管理功能，并为验证过的开源项目提供更高级的免费方案。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计及多语言同意管理解决方案。免费版提供一次性扫描和单个横幅功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理服务。免费版提供有限功能的隐私/Cookie政策及Cookie横幅。
* [Ketch](https://www.ketch.com/) - 同意管理及隐私框架工具。免费版在访客数量受限的情况下提供大部分功能。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图片创建美观的截图，方便在社交媒体上分享。
* [Base64 解码/编码器](https://devpal.co/base64-decode/) — 免费的在线工具，用于解码和编码数据。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持以精美图片形式分享（如用于 Twitter/Facebook 帖子）或以链接形式分享（如用于聊天或论坛）。
* [Blynk](https://blynk.io) — 提供 API 的 SaaS 服务，用于控制、构建和评估物联网设备。免费开发者计划包含 5 台设备、免费云存储和数据存储。还提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器。
* [Carbon.now.sh](https://carbon.now.sh) - 创建并分享代码片段的美观截图式图片格式。通常用于在 Twitter 或博客文章中优雅地展示代码片段。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text 等编辑器的时间追踪和编码指标扩展。
* [Codepng](https://www.codepng.app) - 为您的源代码创建精美的快照，方便在社交媒体上分享。
* [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图，方便在社交媒体上分享。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务。免费提供无限任务。
* [Cronhooks](https://cronhooks.io/) - 安排一次性或周期性 Webhook。免费计划允许 5 个临时任务。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。免费每月最多 5 次预约，包含 1 个日历。
* [Domain Forward](https://domain-forward.com/) - 简单的 URL 或域名转发工具。免费支持最多 5 个域名和每月 20 万次请求。
* [Exif Editor](https://exifeditor.io/) — 在浏览器中即时查看、编辑、清除、分析图片/照片的元数据，包括 GPS 位置和元数据。
* [Format Express](https://www.format-express.dev) - 即时在线格式化 JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞管理解决方案。
* [Hook Relay](https://www.hookrelay.dev/) - 为您的应用轻松添加 Webhook 支持：提供现成的队列、退避重试和日志记录。免费计划每天 100 次投递，14 天保留期和 3 个 Webhook 端点。
* [Hosting Checker](https://hostingchecker.co) - 检查任何域名、网站或 IP 地址的主机信息，如 ASN、ISP、位置等。还包含多个与主机和 DNS 相关的工具。
* [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord 和自定义 Webhook 接收 GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo 和 Docker Hub 的新版本通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的 EXIF 数据，包括 GPS 位置和元数据。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理 PDF 模板，通过 API 调用动态数据并下载 PDF。每月免费提供 300 份文档。
* [Pika Code Screenshots](https://pika.style/templates/code-image) — 使用扩展从代码片段和 VSCode 创建美观、可自定义的截图。
* [QuickType.io](https://quicktype.io/) - 快速从 JSON、Schema 和 GraphQL 自动生成模型/类/类型/接口和序列化器，以便在任何编程语言中快速安全地处理数据。将 JSON 转换为任何语言中的类型安全代码。
* [RandomKeygen](https://randomkeygen.com/) - 一款免费的移动友好工具，提供多种随机生成的密钥和密码，可用于保护任何应用、服务或设备。
* [ray.so](https://ray.so/) - 为您的代码片段创建美观的图片。
* [readme.com](https://readme.com/) — 轻松创建精美的文档，开源免费。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理支持 HTTPS 的重定向。免费计划包含 10 个来源和每月 10 万次点击。
* [redirection.io](https://redirection.io/) — 为企业、营销和 SEO 管理 HTTP 重定向的 SaaS 工具。
* [Renamer.ai](https://renamer.ai) — AI 驱动的文件重命名工具，支持 OCR、元数据提取和 20 多种语言的自动化。免费层：每月 15 个文件，包括桌面应用、批量重命名、自动重命名和普通支持。
* [ReqBin](https://reqbin.com/) — 在线发送 HTTP 请求。支持 GET、POST、PUT、DELETE 和 HEAD 等常用请求方法。支持请求头和令牌认证。包含基本的登录系统以保存请求。
* [Smartcar API](https://smartcar.com) - 用于车辆的 API，支持定位、获取油箱/电池电量、里程表、解锁/锁门等功能。
* [snappify](https://snappify.com) - 帮助开发者创建惊艳的视觉效果。从精美的代码片段到完整的技术演示。免费计划包含最多 3 个快照，无限下载和每月 5 次 AI 驱动的代码解释。
* [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取指定经纬度的日出和日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时 PubSubHubbub 兼容的订阅源，支持导出和分析。免费版功能较少。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费计划每份调查仅限 10 个问题和 100 个回答。
* [UUID Generator](https://newuuid.com/) - 即时生成 UUID v1、UUID v4、UUID v7、GUID、Nil UUID、CUID v1/v2、NanoID 和 ULID，具备企业级性能和安全性。
* [Versionfeeds](https://versionfeeds.com) — 为您喜爱的软件版本创建自定义 RSS 订阅源。将编程语言、库或常用工具的最新版本集中在一个订阅源中。（前 3 个订阅源免费）
* [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
* [Volume Shader BM](https://volumeshaderbm.org) — 免费的基于浏览器的 GPU 基准测试（WebGL）。帮助开发者跨浏览器和设备可重复地测试和比较着色器性能。
* [Webacus](https://webacus.dev) — 访问多种免费的开发者工具，用于编码、解码和数据操作。
* [XKit](https://xkit.io) — 一系列免费在线工具，旨在为开发者、学生和日常用户提供便利。包括多种开发者工具、差异/比较工具、计算器、转换器和生成器。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制
* [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [RemSupp](https://remsupp.com) — 按需技术支持及永久设备访问权限（免费版每天2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [3Dassets.one](https://3dassets.one/) - 提供8000+免费/付费3D模型和PBR材质贴图资源
* [ArtStation](https://www.artstation.com/) - 2D/3D资源与音效、图标、瓦片集、游戏套件的交易市场，同时可作为作品集展示平台
* [CraftPix](https://craftpix.net) — 涵盖2D/3D素材、音效、GUI、背景、图标、瓦片集、游戏套件等免费/付费资源
* [Freesound](https://freesound.org/) - 采用不同CC协议的免费协作音效库
* [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可定制SVG/PNG风格化图标
* [GameDevMarket](https://gamedevmarket.net) — 提供2D/3D素材、音效、GUI等免费/付费资源
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏美术师的免费资源
* [itch.io](https://itch.io/game-assets) — 精灵图、瓦片集、角色包等免费/付费资源
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的免费2D/3D素材、音效和UI资源
* [LoSpec](https://lospec.com/) — 像素艺术等限制性数字艺术的在线创作工具，提供大量教程/调色板列表可供选择
* [OpenGameArt](https://opengameart.org) — 开源的背景音乐、音效、精灵图、GIF等游戏素材
* [Poliigon](https://www.poliigon.com/) - 支持多分辨率的免费/付费纹理、模型、HDRIs和笔刷，提供Blender等软件的免费导出插件
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [360Converter](https://www.360converter.com/) - 免费的视频转文字、音频转文字、语音转文字、实时音频转文字、YouTube视频转文字及添加视频字幕工具。可能对短视频转换或简短YouTube教程有所帮助:)
* [AdminMart](https://adminmart.com/) — 使用Angular、Bootstrap、React、VueJs、NextJS和NuxtJS创建的高质量免费和高级管理仪表盘及网站模板！
* [Buttons Generator](https://markodenic.com/tools/buttons-generator/) — 100多个可在项目中使用的按钮。
* [ElevateAI](https://www.elevateai.com) - 每月免费获取多达200小时的音频转录服务。
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件和SaaS列表。
* [Free Code Tools](https://freecodetools.org/) — 100%免费的高效代码工具。包括Markdown编辑器、代码压缩/美化工具、QR码生成器、Open Graph生成器、Twitter卡片生成器等。
* [get.localhost.direct](https://get.localhost.direct) — 为支持子域名的本地开发提供更好的`*.localhost.direct`通配符公共CA签名SSL证书。
* [GitHub Education](https://education.github.com/pack) — 面向学生的免费服务集合。需要注册。
* [Glob tester](https://globster.xyz/) — 允许设计和测试glob模式的网站。还提供学习glob模式的资源。
* [It tools](https://it-tools.tech/) - 为开发者和IT工作者提供的实用工具。
* [JSON Viewer Tool](https://jsonviewertool.com/) – 直接在浏览器中查看、格式化、验证、压缩和转换JSON数据（无需API密钥）。
* [Killer Coda](https://killercoda.com/) - 浏览器中的交互式学习环境，用于学习Linux、Kubernetes、容器、编程、DevOps和网络。
* [Kody Tools](https://www.kodytools.com/dev-tools) — 100多种开发工具，包括格式化工具、压缩工具和转换工具。
* [Markdown Tools](https://markdowntools.com) - 将HTML、CSV、PDF、JSON和Excel文件与Markdown相互转换的工具。
* [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒、工具和其他资源，用于为Microsoft 365平台构建解决方案。订阅为90天的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括Windows），可续订。如果开发活动活跃（通过遥测数据和算法测量），则会续订。
* [MySQL Visual Explain](https://mysqlexplain.com) - 易于理解且免费的MySQL EXPLAIN输出可视化工具，用于优化慢查询。
* [PageTools](https://pagetools.co/) - 提供一套永久免费的AI工具，帮助您一键生成网站政策、社交媒体简介、帖子和网页。
* [Pyrexp](https://pythonium.net/regex) — 免费的基于Web的正则表达式测试和可视化工具，用于调试正则表达式。
* [RedHat for Developers](https://developers.redhat.com) — 开发者专属的Red Hat产品免费访问权限，包括RHEL、OpenShift、CodeReady等。仅限个人计划。还提供免费电子书供参考。
* [regex101](https://regex101.com/) — 免费的正则表达式测试和调试网站。提供正则表达式编辑器和测试器，以及学习正则表达式的有用文档和资源。
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费发送和接收测试短信。
* [SimpleBackups.com](https://simplebackups.com/) — 服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，直接存储到云存储提供商（AWS、DigitalOcean和Backblaze）。提供1个备份的免费计划。
* [SimpleRestore](https://simplerestore.io) - 无忧MySQL备份恢复。无需代码或服务器即可将MySQL备份恢复到任何远程数据库。
* [SnapShooter](https://snapshooter.com/) — DigitalOcean、AWS、LightSail、Hetzner和Exoscale的备份解决方案，支持将数据库、文件系统和应用程序直接备份到基于s3的存储。提供每日备份一个资源的免费计划。
* [Table Format Converter](https://www.tableformatconverter.com) - 免费工具，用于将表格数据转换为不同格式，如CSV、HTML、JSON、Markdown等。
* [ThemeSelection](https://themeselection.com/) — 精选高质量、现代设计、专业且易用的免费管理仪表盘模板。
* [ToolsHref](https://toolshref.com) - 一套免费开发者工具，包括Java代码生成（JSON转POJO、cURL转Java）、静态分析和DevOps配置构建器（Docker、K8s、Nginx）。
* [Utils.fun](https://utils.fun/en) — 所有基于浏览器计算能力的离线日常和开发工具，包括水印生成、屏幕录制、编码解码、加密解密和代码格式化，完全免费且不上传任何数据到云端处理。
* [Wikimint Developer](https://developer.wikimint.com/p/tools.html) - 始终免费的Web开发者工具，包括CSS压缩/解压缩、图像优化、图像调整大小、大小写转换、CSS验证、JavaScript编译器、HTML编辑器等。
* [WrapPixel](https://www.wrappixel.com/) — 下载使用Angular、React、VueJs、NextJS和NuxtJS创建的高质量免费和高级管理仪表盘模板！HTML主题和UI工具包，助您更快创建应用程序！

**[⬆️ 返回顶部](#目录)**