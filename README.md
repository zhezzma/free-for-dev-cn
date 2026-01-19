# free-for.dev

开发者和开源作者现在拥有许多提供免费层级的服务，但要全面了解这些服务需要花费时间才能做出明智选择。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们喜爱所有免费服务，但最好保持主题相关性。有时界限比较模糊，因此这是基于主观判断的；如果未采纳您的贡献，请勿介意。

这份清单来自1600多人提交的Pull Requests、评审、想法和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或停用的服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包括自托管软件。入选标准是服务必须提供免费层级，而非仅限免费试用。若采用时间分段模式，免费层级至少需持续一年。我们也会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
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
  * [设计与用户界面](#设计与用户界面)
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
  * [软件包构建系统](#软件包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关/免Mac开发iOS应用](#Flutter相关/免Mac开发iOS应用)
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

## 主流云服务商的永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB从北美到所有区域目的地（不包括中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储空间，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储空间。每周限制60小时
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出站流量
    * Google Kubernetes Engine - 一个区域集群免收集群管理费。每个用户节点按标准Compute Engine定价收费
    * BigQuery - 每月1TB查询，每月10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月）。每月100GB出站流量
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简的开发和测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU的预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用和无服务器函数，免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），免费层包括有限交易
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100K操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1 GB内存
       - 4个基于Arm的Ampere A1核心和24 GB内存，可用作1个VM或最多4个VM
       - 当[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时，实例将被回收
    * 块存储 - 2个卷，总计200 GB（用于计算）
    * 对象存储 - 10 GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20 GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10 TB出站流量，基于x64的VM限速50 Mbps，基于ARM的VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1 GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS保护，CDN及免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署网页应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

  * [Zoho](https://www.zoho.com) — 最初作为电子邮件服务商，现提供包含免费方案的多项服务：
    * [Email](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
    * [Zoho Assist](https://www.zoho.com/assist) — 永久免费方案包含1个并发远程支持许可，可访问5台无人值守计算机（不限时长，支持专业和个人用途）
    * [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储
    * [Docs](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储空间。包含Zoho Office套件（Writer, Sheets & Show）
    * [Projects](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
    * [Connect](https://zoho.com/connect) — 25用户免费团队协作，包含3个群组/自定义应用/看板/手册，10个集成，以及频道、活动和论坛功能
    * [Meeting](https://zoho.com/meeting) — 最多3名会议参与者与10名网络研讨会 attendees
    * [Vault](https://zoho.com/vault) — 个人版密码管理
    * [Showtime](https://zoho.com/showtime) — 支持最多5名参与者的远程培训会议软件
    * [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
    * [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，zip备份，RSS & Atom订阅，访问控制与自定义CSS
    * [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅免费循环账单管理，1个用户，Zoho托管所有支付。存储最近40个订阅指标
    * [Checkout](https://zoho.com/checkout) — 3个页面最多50笔支付的产品账单管理
    * [Desk](https://zoho.com/desk) — 3个客服坐席的客户支持管理，含私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守计算机
    * [Cliq](https://zoho.com/cliq) — 100GB存储的团队聊天软件，无限用户，每频道100用户，支持SSO
    * [Campaigns](https://zoho.com/campaigns) - 邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建工具
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
     * [Bookings](https://zoho.com/bookings) - 预约排程

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含1台部署服务器、1个静态站点），Cloud 66提供构建、部署和扩展云应用所需的一切功能，让您无需操心"服务器相关事务"
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境，每月提供10次免费任务执行，包含预览和自动部署功能
* [Pulumi](https://www.pulumi.com/) — 现代化基础设施即代码平台，支持使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于优化Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用，所有功能均包含在内。免费版每月支持50次运行

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公开与私有Git仓库，提供CI/CD流水线服务
* [Codeberg](https://codeberg.org/) — 免费为开源项目提供无限量公开与私有Git仓库（支持无限协作）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包/容器托管、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab搭建的软件开发平台，包含CI、静态页面、项目页面和问题追踪功能
* [GitGud](https://gitgud.io) — 无限量私有与公开仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD服务
* [GitHub](https://github.com/) — 无限量公开仓库与私有仓库（支持无限协作）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手功能
* [gitlab.com](https://about.gitlab.com/) — 最多支持5名协作者的无限量公开与私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制系统
* [Pagure.io](https://pagure.io) — 面向FOSS许可项目的免费开源代码协作平台，基于Git构建
* [pijul.com](https://pijul.com/) — 免费开源的分布式版本控制系统，基于创新的补丁理论设计，易学易用，可解决git/hg/svn/darcs的诸多问题
* [projectlocker.com](https://projectlocker.com) — 1个免费私有项目（支持Git和Subversion），50MB存储空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公开与私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) — GNU项目的自由软件协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 非GNU项目的自由软件协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API/数据/机器学习

  * [Abstract API](https://www.abstractapi.com) — 提供多种用途的API套件，包括IP地理定位、性别检测和电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫工具、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档，无需CSS/HTML。免费计划每月包含50张图片和三个模板。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题的根因分析。免费支持最多两个模型。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的即时服务器、CRUD和有状态模拟、代理及CORS管理，以加速集成和测试。免费计划每天包含50个请求，并提供公共仪表板/端点，任何拥有仪表板URL的人均可查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费计划每月1k积分，相当于1k并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1k请求。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检测数据等。免费层每月包含100次请求，覆盖所有9个端点。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整数据谱系，覆盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API及Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限制为1个用户、1个数据连接、1个数据源和1个数据目标，且需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致定义，并交付给每个应用。最快方式是使用Cube Cloud，其免费层每天限制1,000次查询。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。类似Postman的界面在Airtable中运行API请求。预建数十个应用集成。免费计划每月100次运行。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
  * [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含10GB存储和每月120小时运行时间。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型和每个模型10个表。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每天每个IP1k请求。CC-BY 4.0许可的精简数据库也免费。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费计划每月最多10个活跃用户（MAU），最多跟踪4张脸。
  * [Deepnote](https://deepnote.com) - 新型数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费层包含无限个人项目、无限基础机器（5GB RAM和2vCPU）及最多3个编辑的团队。
  * [DiffJSON](https://diffjson.com) - 在线工具，用于比较两个JSON数据结构的差异，帮助快速定位JSON数据中的不同之处。
  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据以构建与Covid-19相关的实用应用。
  * [Doczilla](https://www.doczilla.app/) — SaaS API，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月250个文档。
  * [Doppio](https://doppio.sh/) — 托管API，使用顶级渲染技术生成和私有存储PDF及截图。免费计划每月400个PDF和截图。
  * [drawDB](https://drawdb.app/) — 免费开源的在线数据库图表编辑器，无需注册。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API生成PDF文档。免费计划每月50次API调用，并可访问模板库。

  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，支持SDK和无代码集成。免费计划每月250页，不限用户数和三个模板。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
* [Financial Data](https://financialdata.net/) - 股票市场和金融数据API。免费计划每天允许300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 一款免费的基于浏览器的工具，可即时格式化、验证、比较和压缩JSON数据。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 筛查订单交易中的信用卡支付欺诈。此REST API将根据订单输入参数检测所有可能的欺诈特征。免费Micro计划每月500笔交易。
* [FreeIPAPI](https://freeipapi.com) - 面向商业和非商业用户的免费、快速且可靠的IP地理位置API，支持JSON格式。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP地理位置API，免费计划每天2,000次请求。
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版最多支持五个项目。
* [Hook0](https://www.hook0.com/) - Hook0是一款开源Webhooks即服务(WaaS)，帮助在线产品轻松提供Webhooks。免费版每天可分发100个事件，保留七天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 一款免费、快速且美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费版每月30k输入字符。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问70多个（云）平台，如Exact Online、Twinfield、ActiveCampaign或Visma。包括数据复制和交换。开发人员和实施顾问的免费计划。特定平台免费，但有数据量限制。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理位置API - 允许1,000次免费请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP地理位置API - 开发者永久免费计划，每天1,000次请求限制。
* [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，免费计划同一IP地址每分钟限45次请求。
* [IP.City](https://ip.city) — 每天100次免费IP地理位置请求。
* [IP2Location.io](https://www.ip2location.io/) — 免费增值、快速且可靠的IP地理位置API。获取城市、坐标、ISP、ASN、AS数据等信息。免费计划每月50k积分。IP2Location.io还提供每月500次免费WHOIS和托管域名查询。查看域名注册详情并查找特定IP上托管的域名。升级到付费计划获取更多功能。
* [ipaddress.sh](https://ipaddress.sh) — 简单服务，以不同[格式](https://about.ipaddress.sh/)获取公共IP地址。
* [ipapi.is](https://ipapi.is/) - 开发者专为开发者打造的可靠IP地址API，具备最佳的主机检测能力。免费计划无需注册即可进行1,000次查询。
* [ipapi](https://ipapi.co/) - Kloudend, Inc提供的IP地址定位API - 基于AWS构建的可靠地理位置API，受财富500强企业信赖。免费层每月30k次查询（每天1k次），无需注册。
* [ipbase.com](https://ipbase.com) - IP地理位置API - 永久免费计划每月150次请求。
* [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月50k次）的IP地址数据API。提供地理位置、公司、运营商、IP范围、域名、滥用联系人等详细信息的API。所有付费API均可免费试用。
* [IPLocate](https://www.iplocate.io) — IP地理位置API，每天免费1,000次请求。包括代理/VPN/主机检测、ASN数据、IP到公司等。IPLocate还提供免费可下载的IP到国家和IP到ASN数据库，支持CSV或GeoIP兼容的MMDB格式。
* [IPTrace](https://iptrace.io) — 极其简单的API，为您的业务提供可靠且有用的IP地理位置数据，每月50,000次免费查询。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公共IP地址。免费层无需注册。使用CORS，可直接从浏览器通过客户端JS请求数据。适用于监控客户端和服务器IP变化的服务。无限请求。
* [JSON to Table](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
* [JSON2Video](https://json2video.com) - 视频编辑API，用于自动化视频营销和社交媒体视频，支持编程或无代码操作。
* [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、过滤为美观的表格网格。通过链接保存和分享JSON数据。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建虚假REST API，并可自定义HTTP状态码、头部和响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss是一款强大的在线JSON查看器、编辑器和验证器。格式化、可视化、搜索和操作JSON数据，支持AI修复、树形视图、表格视图、12+种编程语言的代码生成，将JSON转换为CSV、XML、YAML、属性文件等。
* [KillBait API](https://killbait.com/api/doc) - KillBait API允许用户提交URL进行内容评估，检测潜在点击诱饵并对文章分类。API设计用于中等发布频率，限制为每小时1次提交和每天10次。媒体合作伙伴可申请更高限制。
* [Kreya](https://kreya.app) — 免费gRPC GUI客户端，用于调用和测试gRPC API。可通过服务器反射导入gRPC API。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费1,000次登录。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费API层每天允许100次API请求。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观察性平台，帮助团队可靠且快速5倍以上地交付AI代理。独立开发者和小团队（3席位）永久免费。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取能力或截图即服务。每天50次请求，永久免费。
* [Mintlify](https://mintlify.com) — API文档的现代标准。美观且易于维护的UI组件、应用内搜索和交互式 playground。1名编辑免费。
* [MockAPI](https://www.mockapi.io/) — MockAPI是一款简单工具，可快速模拟API、生成自定义数据并通过RESTful接口执行操作。MockAPI旨在用于原型设计/测试/学习。免费版每个项目2个资源。
* [Mockfly](https://www.mockfly.dev/) — Mockfly是一款值得信赖的开发工具，用于API模拟和功能标志管理。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，选择要在云端模拟的端点并检查流量，免费。加速开发和集成测试。

  * [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取JSON格式结果。开发者每日可免费查询100次，文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 可将图像和PDF文件解析为JSON格式文本的OCR API。每月25,000次免费请求，文件大小限制为1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF和电子邮件中提取数据，AI驱动，提供完整API访问权限。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，提供可视化模板编辑器或HTML转PDF功能，支持动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [PDFBolt](https://pdfbolt.com) - 以开发者为中心的PDF生成API，注重隐私保护。提供类似Stripe风格的文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转换为PDF。每月100次免费转换。
* [Pixela](https://pixe.la/) - 免费的日子流数据库服务，所有操作通过API完成，支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用Postman简化工作流并更快创建更好的API，这是API开发的协作平台。Postman应用永久免费，云功能在特定限制下也永久免费。
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括每月5个部署的工作流和500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。最多5人团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式SQL编辑器。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。ProxySentry.io在rapidapi.com上提供每月10k次请求的免费层。
* [Reducto](https://reducto.ai) - 将任何非结构化文档（PDF、XLSX、JPG、PPTX等）转换为结构化JSON数据。解析、提取数据并编辑PDF表单。免费层包含15k免费积分和按需付费选项。
* [Rendi](https://rendi.dev) - FFmpeg API - 为FFmpeg提供的REST API，无需处理基础设施即可在线运行FFmpeg。免费层包含每月处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费端点以接收HTTP请求。发送到该端点的任何HTTP请求及其关联的有效负载和标头将被记录，方便观察来自webhook和其他服务的请求。
* [ROBOHASH](https://robohash.org/) - 从任何文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 用于抓取的简单HTTP代理API。匿名抓取，无需担心限制、封锁或验证码。每月前100次成功抓取免费，包括JavaScript渲染（联系支持可获取更多）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API和免费代理服务。支持JavaScript渲染、高级旋转代理、避免验证码。免费10,000 API积分。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等结构化JSON结果。免费计划每月100次成功API调用。
* [Sheetson](https://sheetson.com) - 即时将任何Google表格转换为RESTful API。提供免费计划，每表1,000行免费。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费计划包含100次云抓取积分。
* [Siterelic](https://siterelic.com/) - Siterelic API可截取屏幕截图、审核网站、TLS扫描、DNS查询、测试TTFB等。免费计划每月100次API请求。
* [SmartParse](https://smartparse.io) - SmartParse是数据迁移和CSV转API平台，提供节省时间和成本的开发者工具。免费层包括每月300处理单元、浏览器上传、数据隔离、断路器和工作警报。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV文件并通过API即时访问数据，加速应用开发。免费计划包括2个API和每月2,500次API调用，无需信用卡。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集合，包括SQL格式化器和验证器、SQL正则表达式测试器、假数据生成器和交互式数据库沙盒。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建50张图像。
* [Svix](https://www.svix.com/) - 服务化Webhook。免费发送多达50,000条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察及全面研究的API，具备研究成果组织能力。免费层1,000次请求/月，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。提供准确及时的天气预报，覆盖全球，包含历史数据和天气监测解决方案。
* [Treblle](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。提供高级API日志聚合、可观测性、文档和调试功能。所有功能免费，但免费层每月限制250k次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币和加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的VAT号码验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包括当前状况、每小时和每日预报及天气警报。集成AI模型和ML系统分析并组合多种天气模型以提高预报准确性。免费层每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简单Web抓取API。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建更好的模型。仅限个人项目的免费层，包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月25,000令牌限制（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30k次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器、住宅IP和透明定价的Web抓取API。每月1,000次免费API调用，学生和非营利组织可获额外积分。

  * [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证服务。每月1万次免费请求额度
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持API设计、构建及边缘部署。可快速为任何API添加密钥认证、速率限制、开发者文档和货币化功能。基于OpenAPI标准，完全支持Web标准API和Typescript编程。免费版提供10个项目配额、不限量生产级边缘环境、每月100万次请求和10GB出口流量

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公共制品仓库。公开项目免费使用。
* [jitpack.io](https://jitpack.io/) — 专为GitHub上JVM与Android项目打造的Maven仓库，公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建与扩展AI模型，开发、训练及部署AI应用。免费版支持公开项目，含5GB存储和基础实例。
* [RepoFlow](https://repoflow.io) - 支持npm、PyPI、Docker、Go、Helm等的一站式包管理方案。免费版提供10GB存储、10GB带宽、100个包及不限用户数的云端服务，也可自建仅供个人使用。
* [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包及Docker镜像的私有云仓库。开源/公开项目可享免费方案。
* [repsy.io](https://repsy.io) — 提供1GB免费空间的私有/公共Maven仓库。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作编码
* [BookmarkOS.com](https://bookmarkos.com) - 一体化免费书签管理工具，集成标签页管理与任务管理，提供可定制的在线桌面环境及文件夹协作功能
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组永久免费，支持无限用户、完整历史记录与集成功能，并提供可自托管的开源版本
* [Calendly](https://calendly.com) — 智能会议排程工具。免费版支持每位用户连接1个日历，提供无限会话预约，含桌面端与移动端应用
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Chanty.com](https://chanty.com/) — Slack替代方案，小团队（10人内）永久免费，包含无限公私对话、可搜索历史记录、无限1对1语音通话、语音消息、10个集成及20GB团队存储
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供所有基础工具，支持每个工具自动保存一条记录，含标准处理速度与社区支持
* [Discord](https://discord.com/) — 支持公私聊天的通讯平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作工具。含IDE结对编程、终端共享、语音视频通话及屏幕共享，小团队免费
* [element.io](https://element.io/) — 基于Matrix的去中心化开源通讯工具。支持群聊、私信、加密文件传输、音视频通话，可轻松与其他服务集成
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协同编辑
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费，提供2GB存储空间
* [Fibo](https://fibo.dev) - 免费敏捷团队实时故事点估算工具，支持无限成员参与规划
* [Fizzy](https://www.fizzy.do/) - 看板式项目管理工具。免费版支持创建公开看板、设置Webhook、使用卡片标记，可追踪1000个项目内无限用户
* [flat.social](https://flat.social) - 可定制的团队会议虚拟空间。会议数量无限制，免费支持8人同时在线
* [flock.com](https://flock.com) — 高效团队通讯工具。免费版含无限消息、频道、用户、应用与集成
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（产品文档/内部知识库/API文档等），个人开发者免费
* [GitDailies](https://gitdailies.com) - GitHub活动日报工具。含提交可视化、同伴认可系统及自定义提醒功能，免费版支持3个仓库与3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。公私房间无限制，25人内团队免费
* [gokanban.io](https://gokanban.io) - 免注册语法看板工具，完全免费无限制
* [Hackmd.io](https://hackmd.io/) - 实时协作Markdown编辑工具（类Google Docs）。私人笔记协作人数与模板使用受限
* [HeySpace](https://hey.space) - 集成聊天/日历/时间轴/视频通话的任务管理工具，5人内团队免费
* [Huly](https://huly.io/) - 一体化项目管理平台（Jira/Slack/Notion替代方案），免费版含无限用户、10GB工作区存储及10GB音视频流量
* [Keybase](https://keybase.io/) — 开源Slack替代方案，为家庭/社区/企业提供安全的聊天与文件传输
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持多工作区与标签协作。免费版含4个工作区与10名成员
* [Lockitbot](https://www.lockitbot.com/) — Slack内共享资源预约系统（如会议室/开发环境等），免费支持2个资源
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议与屏幕共享工具
* [Miro](https://miro.com/) - 企业级分布式团队协作白板，提供免费增值方案
* [Notion](https://www.notion.so/) - 集成笔记/任务/数据库的Markdown协作平台，全平台可访问的一体化工作区
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具。免费版含核心功能，支持50个条目与5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 免费技术面试平台，集成视频聊天/画板/在线代码编辑器（支持浏览器编译运行），一键创建远程面试间
* [paste.sh](https://paste.sh/) — 基于JavaScript与加密的简易代码粘贴站
* [Pastefy](https://pastefy.app/) - 美观易用的加密粘贴板工具，支持多标签/API/高亮编辑器等功能
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，通过直观界面与数据统计提升时间管理效率
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名/2FA验证/共享/Passkeys的密码管理器，全平台可用
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Pumble](https://pumble.com) - 永久免费团队聊天应用，支持无限用户与完整消息历史
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间追踪应用，免费版支持10人内的工时记录与报告生成
* [Raindrop.io](https://raindrop.io) - 全平台书签管理工具，免费提供无限书签与协作功能
* [Revolt.chat](https://revolt.chat/) — 尊重隐私的开源Discord替代方案，免费提供所有专有功能，含官方/非官方插件支持
* [Rocket.Chat](https://rocket.chat/) - 开源通讯平台，具备全渠道功能/Matrix联邦/应用桥接/无限消息/完整历史记录
* [ruttl.com](https://ruttl.com/) — 最佳数字反馈收集工具，支持网站/PDF/图像评审

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步及讨论。云版本仅提供1GB空间
* [SiteDots](https://sitedots.com/) - 直接在网站上收集网站项目反馈，无需模拟、画布或变通方案。完全可用的免费版本
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多10名用户免费
* [slack.com](https://slack.com/) — 无限用户免费，部分功能受限
* [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。可追踪上游服务商的状态页吗？
* [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作工具。免费版支持3个面板、无限用户和1GB存储
* [StreamBackdrops](https://streambackdrops.com) — 视频会议高清虚拟背景库。Zoom/Teams/Google Meet专业背景，无需注册，个人使用免费
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件/注册/付费
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持泳道看板和完整Scrum实现，含时间追踪功能。5用户+3项目组合免费
* [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程，含远程团队休假管理功能。5人以下小团队免费
* [Telegram](https://telegram.org/) — 为追求快速可靠通讯的用户设计。商务用户和小团队可享大群组、用户名、桌面端及强大文件分享功能
* [Tencent RTC](https://trtc.io/) — 腾讯实时音视频(TRTC)提供群组通话解决方案。首年每月1万分钟免费
* [TimeCamp](https://www.timecamp.com/) - 无限用户的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具
* [tldraw.com](https://tldraw.com) — 免费开源白板绘图工具，含智能箭头/吸附/便签/SVG导出功能，支持多人协作。另有官方VS Code扩展
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件
* [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR。全员免费，非营利组织享Nano套餐
* [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理化。提供免费无限套餐，合格团队可享折扣
* [userforge.com](https://userforge.com/) - 互联在线的用户画像/用户故事/场景映射工具。保持设计与开发同步，免费支持3个角色+2名协作者
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议
* [Webvizio](https://webvizio.com) — 网站反馈/审查/Bug报告工具，直接在网页应用/图片/PDF/设计文件上协同开发任务
* [whereby.com](https://whereby.com/) — 一键视频通话（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，通过Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区
* [wistia.com](https://wistia.com/) — 带观看分析/高清视频/营销工具的视频托管服务，25个视频含品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 简洁的文件分享服务。不限人数分享5GB内文件
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。大文件采用P2P直传
* [zoom.us](https://zoom.us/) — 安全的视频网络会议工具，免费版限40分钟
* [Zulip](https://zulip.com/) — 独特邮件式线程模型的实时聊天工具。免费版含1万条历史消息搜索和5GB存储，另提供可自托管开源版本

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区版包含1个工作空间、5个用户、2.5万条记录、48种内容类型和2种语言设置。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月流量和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层级的GraphQL驱动CMS。基础版每月10万次API调用。
* [Hygraph](https://hygraph.com/) - 小型项目免费方案。GraphQL优先API。告别传统方案，拥抱原生的GraphQL无头CMS——实现多渠道内容优先交付。
* [Prismic](https://www.prismic.io/) — 无头CMS。全托管可扩展API的内容管理界面。社区计划为单个用户提供无限API调用、文档、自定义类型、资源和多语言支持。开源内容项目可申请更大免费方案。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据库。每个免费项目包含：无限项目、无限管理员用户、3个普通用户、2个数据集、50万次CDN API请求、10GB带宽和5GB资源存储。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可生成精美商业网站。免费自定义域名，无需信用卡。
* [Squidex](https://squidex.io/) - 小型项目免费方案。API/GraphQL优先。基于事件溯源架构的开源系统（自动记录每次变更）。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。免费社区版包含：管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持（无限语言）、资源管理器（2500个资源）、图片优化服务、搜索查询、Webhook及250GB/月流量。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git驱动的无头CMS，支持Markdown、MDX和JSON格式。基础版免费支持2个用户。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费套餐含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制——完全自主掌控网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

* [Appinvento](https://appinvento.io/) — 免费的无代码应用构建平台。提供自动生成的后端源代码完全访问权限，支持无限量API和路由。免费方案包含3个项目及5张数据表。
* [DhiWise](https://www.dhiwise.com/) — 将Figma设计稿转换为动态Flutter和React应用。其代码生成技术专为优化生产级移动端/网页体验的开发流程而设计。
* [Karbon Sites](https://www.karbonsites.space) — 基于AI的站点生成器与编辑器，可通过文字描述、草图或简历生成生产级前端代码。支持原生Android（APK）导出，免费版每月提供5次生成（使用自定义Gemini API密钥可无限生成）。
* [Metalama](https://www.postsharp.net/metalama) — 专为C#设计的工具，能在编译时动态生成样板代码以保持源码整洁。开源项目免费使用，商业友好型免费方案最多支持3个切面。
* [Supermaven](https://www.supermaven.com/) — 面向VS Code/JetBrains/Neovim的高速AI代码补全插件。免费版提供无限量行内补全，主打超低延迟体验。
* [v0.dev](https://v0.dev/) — Vercel旗下产品，基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。采用积分制，新用户获赠1,200初始积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和100 MB存储的1个代码库
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，不限公有与私有仓库
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版），除标准语言外还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公开仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版含200文件/小时、3次审查/小时、50次对话/小时，开源项目永久免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪，通过精准指标预防性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [deepscan.io](https://deepscan.io) — JavaScript代码运行时错误高级静态分析，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库与SQL查询的关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与深度建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化首选静态代码分析器，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量批注，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码审查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言语义的GitHub PR与提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具，提供预设模板和链接功能。
* [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称的可用性
* [tickgit.com](https://www.tickgit.com/) — 高亮显示`TODO`注释（及其他标记），帮助识别需要后续改进的代码区域

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，加速迭代周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台持续交付服务，开源项目免费
* [bitrise.io](https://www.bitrise.io/) — 移动应用（原生/混合）CI/CD平台。免费版每月200次构建，单次构建10分钟，支持2名团队成员。开源项目可享45分钟构建时长、+1并发及无限团队成员。
* [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
* [Buildkite](https://buildkite.com) — 免费支持3个用户和每月5000分钟任务时长的CI流水线。测试分析免费开发者层包含每月10万次测试执行，开源项目可获更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD与DevOps工具。20名用户和10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 全功能免费托管CI/CD服务，支持GitHub/GitLab/BitBucket仓库。含多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟执行时长，无限协作者，私有项目30个并行任务，开源项目8万构建分钟免费。
* [cirrus-ci.org](https://cirrus-ci.org) — 公开GitHub仓库免费
* [cirun.io](https://cirun.io) — 公开GitHub仓库免费
* [codemagic.io](https://codemagic.io/) — 每月500构建分钟免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30构建分钟）
* [LocalOps](https://localops.co/) — 30分钟内在AWS/GCP/Azure部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化与高级可观测性。免费版支持1用户和1个应用环境。
* [Make](https://www.make.com/en) — 通过UI连接应用并自动化工作流的工具，支持大量应用和主流API。公开GitHub仓库免费，免费层含100MB存储、1000次操作和15分钟最小间隔。
* [Mergify](https://mergify.com) — GitHub工作流自动化与合并队列，公开仓库免费
* [Nx Cloud](https://nx.dev/ci) — 通过远程缓存、任务分布式执行和自动化E2E测试分割加速单仓库CI。免费版支持30名贡献者，含15万点数的额度。
* [RunMyJob](https://runmyjob.io) — 通过实时扩展的Spike实例更智能地运行GitHub Actions和GitLab CI流水线。免费层含400 vCPU分钟、800 GB分钟和10个并发高性能任务（每个任务12 vCPU+32GB内存）。
* [Shipfox](https://www.shipfox.io/) — 以2倍速度运行GitHub Actions，每月免费3000构建分钟。
* [Spacelift](https://spacelift.io/) — 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块仓库、ChatOps集成、Open Policy Agent持续合规、SAML 2.0单点登录，公共工作池每月200分钟。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过专属URL访问应用，无限公开/私有仓库，最高2GB VM规格。
* [Terramate](https://terramate.io/) — Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台。2名用户内免费包含全部功能。
* [Terrateam](https://terrateam.io) — 采用GitOps优先的Terraform自动化，支持PR驱动工作流、自托管运行器项目隔离和分层有序操作。3名用户内免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Appetize](https://appetize.io) — 直接在浏览器中测试您的Android和iOS应用程序，基于云的Android手机/平板模拟器和iPhone/iPad模拟器。免费套餐包括每月两个并发会话，每次30分钟。应用程序大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发人员的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级Web应用程序测试自动化工具。易于学习，无需编码。您可以在自己的计算机上免费运行无限测试。额外付费可获得云监控和CI/CD集成。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多种SEO、速度和安全性最佳实践。小型网站免费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分价格监控您的API和应用程序。基于Monitoring as Code工作流和Playwright。开发者免费套餐慷慨。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发人员和API测试人员的免费工具，用于检查API是否为给定域启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress Test Runner始终免费且开源，无限制。Cypress Dashboard对开源项目免费，最多5个用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费版功能较少。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包括最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月。
  * [katalon.com](https://katalon.com) - 提供测试平台，帮助不同规模的团队在不同测试成熟度级别工作，包括Katalon Studio、TestOps（+免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发人员的功能测试工具包。记录API调用生成API的E2E测试（KTests）和模拟或存根（KMocks）。开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户，最长60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为您的Storybook、Ladle、Histoire故事和Web应用程序提供全面的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费套餐每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用程序、静态站点、样式指南或组件库添加视觉测试。无限团队成员、演示应用程序和无限项目，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包括所有核心功能，500MB附件存储，最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限制为iOS 10次测试和Android 10次测试，但包括付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包括[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录会话的网络和控制台日志。免费套餐最多创建10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似于CodePen，但用于跨浏览器测试。UI-licious允许您像用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上运行无限测试，每次测试运行最多3分钟。发现错误？您可以复制测试的唯一URL，向开发人员展示如何重现错误。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本和常规版本，检查任何URL的SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)。
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和用于将手动测试实现为代码的框架，使用GitHub。该服务对[开源免费](https://github.com/marketplace/testspace-com)，每月450个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发人员、个人、教育工作者和刚起步的小团队可以请求超出基本免费项目的折扣和免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的UI，并使用集成的工具、组件和设计系统更快迭代、更好设计并简化开发过程。无限项目，五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查Webhook和HTTP请求。完全免费，您可以创建无限URL并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证Webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [kogiQA](https://kogiqa.com) — 无需选择器的Web UI自动化工具。每位开发者每月免费获得500次操作。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费版支持2个用户、10个代码库扫描、1个云账户、2个容器和1个域名。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理工具。可查询证书透明度日志。测试期结束后免费支持3个证书和1个用户。
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web工具，无需复杂工具或编程即可进行数据编解码分析。堪称密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管。
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动化依赖项更新，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven/Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) — Django网站安全漏洞扫描工具（基于Pony Checkup二次开发）
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到多种云平台。免费版支持5个用户及基础权限控制。
  * [Dotenv](https://dotenv.org/) — 安全快捷地同步.env文件。杜绝通过Slack/邮件等不安全渠道共享.env文件，永久避免文件丢失。免费支持3人团队。
  * [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复工具，防止敏感信息泄露代码库。可扫描350+种密钥类型，25人以下团队免费。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费检索2000万条GitHub公开仓库、代码片段、议题和评论中的泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
  * [hostedscan.com](https://hostedscan.com) — 在线漏洞扫描平台，支持Web应用/服务器/网络扫描。每月10次免费额度。
  * [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境全流程管理。5名开发者内免费。
  * [Internet.nl](https://internet.nl) — 现代互联网标准测试工具（IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE）
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任
  * [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 网站安全漏洞检测与修复平台
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 多功能SSL工具包，包含密钥/CSR生成器、证书解码器、证书匹配器等功能。支持通过CNAME记录（非TXT记录）申请Let's Encrypt/Google Trust/BuyPass免费证书。
  * [Protectumus](https://protectumus.com) - 免费网站安全检查、PHP站点杀毒及WAF防火墙。注册用户可获邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据已在GitHub开源（https://github.com/unknownhad/AWSAttacks），完整列表需通过API获取
  * [pyup.io](https://pyup.io) — Python依赖项安全漏洞监控与自动更新工具。1个私有项目免费，开源项目不限量。
  * [qualys.com](https://www.qualys.com/community-edition) — Web应用漏洞扫描与OWASP风险审计工具
  * [Socket](https://socket.dev) — 面向个人开发者、小团队及开源项目的免费供应链安全方案。包含应用防火墙CLI工具，可检测70+种供应链风险指标。
  * [SOOS](https://soos.io) - 开源项目不限次SCA扫描。在发布前检测修复安全隐患。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析工具
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
  * [TestTLS.com](https://testtls.com) - SSL/TLS服务安全配置测试工具（不限于HTTPS）
  * [Virgil Security](https://virgilsecurity.com/) — 端到端加密、数据库保护、物联网安全等解决方案。250用户内免费。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [360用户名搜索](https://360username.com/) - 免费工具，可在90多个社交平台搜索用户名以查找匹配的个人资料。
* [Aserto](https://www.aserto.com) - 为应用和API提供的细粒度授权服务。免费版支持1000名月活跃用户和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端应用SDK。免费版支持1000名月活跃用户和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式单点登录服务。免费计划包含2.5万名月活跃用户、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、双因素认证(2FA)和单点登录(SSO)。包含完整前端组件。免费支持5000名月活跃用户。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100个月度活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供预构建的登录/注册/用户资料等UI组件。免费支持1万名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费版支持100个用户和1个领域(realm)。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500名活跃用户/月，50个租户(含最多5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成到产品中。入门所需一切功能，免费支持7500名月活跃用户。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，涵盖认证与授权。免费支持5000名月活跃用户，提供开源自托管选项。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动或任何应用实现无密码认证，仅需几分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。免费支持100名月活跃用户。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，无限团队成员，200名日活跃用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展微服务，提供实时更新和无代码策略UI。免费层支持1000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费领域支持1000名用户和10个SSO连接，使用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可向任何规模公司销售产品，免费支持200名用户和1万封事务邮件(带"由PropelAuth提供支持"水印)。
* [Stack Auth](https://stack-auth.com) - 不让人头疼的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，或选择含1万免费月活跃用户的SaaS托管版。
* [Stytch](https://www.stytch.com/) - 提供认证和防欺诈API/SDK的一体化平台。免费计划包含1万名月活跃用户、无限组织、5个SSO或SCIM连接和1000个M2M令牌。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速上线的同时保持对用户体验和开发者体验的控制。免费支持5000名月活跃用户。
* [WorkOS](https://workos.com/) - 免费用户管理和认证，支持100万月活跃用户。包含邮箱+密码、社交认证、Magic Auth、MFA等功能。
* [ZITADEL云](https://zitadel.com) - 开箱即用的用户和访问管理系统，支持多租户(B2B)场景。免费支持2.5万次认证请求，包含所有安全功能(OTP、无密码、策略等功能无付费墙)。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含5个应用、50次月下载量，最大文件尺寸100MB。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版功能：应用上传、密码保护链接、1天有效期、10次安装。
  * [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费套餐包含1个应用项目、3个应用版本、500MB存储空间和每月100次应用安装。
  * [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版功能：无限次上传、私有链接（访客2天有效期/注册用户60天有效期）。
  * [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传功能。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案（含DevOps功能）。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理部署服务器和站点。免费支持1台服务器
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP网络服务器。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 具有友好界面的服务器管理与部署平台。提供单台服务器的免费套餐

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息、跨可用区的多节点部署
* [courier.com](https://www.courier.com/) — 统一推送API，支持应用内消息、邮件、聊天、短信等渠道，含模板管理功能。免费套餐包含每月10,000条消息
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级部署的可扩展安全MQTT代理服务。永久免费提供每月100万会话分钟数（无需信用卡）
* [Engage](https://engage.so/) - 面向SaaS的全渠道客户互动与自动化工具（邮件/推送/SMS/产品导览/横幅等）。每月最多1,000名活跃用户免费
* [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理，永久免费连接最多100台设备（无需信用卡）
* [httpSMS](https://httpsms.com) - 将Android手机作为短信网关收发消息。每月免费收发200条短信
* [knock.app](https://knock.app) – 开发者通知基础设施，单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐含每月10,000条消息
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) — 开源通知基础设施，统一管理邮件/SMS/站内信/应用内推送等渠道。免费套餐含每月30,000条通知（保留90天）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费版每天可向1台设备发送50条消息（限1个应用）
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）
* [pusher.com](https://pusher.com/) — 实时消息服务，免费支持100个同时连接和每日200,000条消息
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务，免费支持20个同时连接和每日100,000次事件
* [SMSGate](https://sms-gate.app) - Android™短信网关云服务，完全免费（建议每日超过10,000条时通知以维持服务质量）
* [SuprSend](https://www.suprsend.com/) - 通过单一API发送交易通知/定时消息/互动通知，支持摘要/批次/多渠道/租户等流程节点。免费套餐每月10,000条通知
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务，覆盖全球/AWS/GCP/Azure。永久免费版支持4KB消息大小、50个活跃连接和每月5GB数据
* [webpushr](https://www.webpushr.com/) - 网页推送通知，免费支持10,000订阅用户（推送数量无限制）及浏览器内消息

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费1296万条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1000条用户活动日志，保留1个月，最多支持5个项目
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — ManageEngine提供的日志管理服务。免费版含50GB存储空间，15天存储保留期和7天检索期
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人的免费工具
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，适用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管的本地化引擎每月免费使用10,000词。
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1,000条源语言字符串免费，无限语言、无限贡献者，初创企业和开源优惠
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（包含2用户、500键和无限项目）。
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2,000条翻译免费，无限译者，10种语言/项目，1,000可翻译资源/项目
* [POEditor](https://poeditor.com/) — 1,000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串、无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费方案。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测器（3分钟检查频率）和状态页面功能。
* [bleemeo.com](https://bleemeo.com) - 免费监控3台服务器、5个正常运行时间监测器，支持无限用户、仪表板和告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API/网络检查及1500次浏览器检查运行。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查看URL或网站的核心网页指标历史数据。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监测器。
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监测器，推荐他人注册可获得更多额度
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测器，5分钟检查间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过云端资源优化与报告帮助厘清基础设施成本。每月Google Cloud Platform消费不超过5000美元可免费使用。
* [fivenines.io](https://fivenines.io/) — 实时仪表板与告警的Linux服务器监控，永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合观测平台，集成指标与日志。免费版：3用户、10个仪表板、100条告警，Prometheus和Graphite指标存储（1万序列/14天保留），Loki日志存储（50GB日志/14天保留）
* [healthchecks.io](https://healthchecks.io) - 监控定时任务与后台作业。免费支持20个检查项。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页聚合器，永久免费提供20个监测器和2个通知渠道（Slack与Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费支持无限订阅者和团队。
* [linkok.com](https://linkok.com) - 在线死链检测工具，小网站（100页以内）免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - 全栈应用观测平台，提供百万级日志事件监控、基础设施监控及2个主机的APM功能，开发者社区可永久免费使用。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。永久免费方案支持HTTPS、关键词、SSL和响应时间监控（10个网站/API端点），提供2个仪表板/状态页。
* [netdata.cloud](https://www.netdata.cloud/) — 开源实时指标收集工具，GitHub可获取持续更新的版本。
* [newrelic.com](https://www.newrelic.com) - 帮助工程师构建更完善软件的可观测平台。免费层提供100GB/月数据摄入、1个全权限用户和无限基础用户。
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API正常运行时间监控、定时任务监控及状态页。免费层含5个监测器（3分钟间隔），支持Slack/Discord/邮件告警。
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) - 检测网站是否被中国防火墙屏蔽，通过对比中美服务器DNS结果与ASN信息识别DNS污染。
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监测器（每日检查）。
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面，免费支持5个用户。
* [phare.io](https://phare.io/) - 永久免费支持10万事件的正常运行时间监控，不限项目和状态页。
* [pingbreak.com](https://pingbreak.com/) — 现代化正常运行时间监控服务，无限量检测URL并通过Discord/Slack/邮件接收宕机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测器（10分钟间隔），支持SSH/HTTP/HTTPS及自定义TCP端口监控。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可定制公共状态页（SSL子域名），开源项目与非营利组织可免费使用专业版。
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监测器、6个月历史数据、无限状态页和自定义域名，无需信用卡。
* [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。免费层支持20个K8s节点，集成Slack/MS Teams/Discord等告警渠道。
* [Servervana](https://servervana.com) - 支持大型项目的高级正常运行时间监控，含HTTP/DNS/域名监控及状态页。免费层包括10个HTTP监测器和1个DNS监测器。
* [Simple Observability](https://simpleobservability.com) — 零配置的服务器指标与日志统一监控平台，免费支持1台服务器。
* [sitesure.net](https://sitesure.net) - 网站与定时任务监控，免费2个监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [stathat.com](https://www.stathat.com/) — 免费10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（带限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器/正常运行时间/DNS&域名监控，免费监控10个服务器/10个域名。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标。
* [UptimeObserver.com](https://uptimeobserver.com) - 提供20个监测器（5分钟间隔）和可定制状态页（商用许可），无限实时邮件/Telegram通知，无需信用卡。
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站（60秒间隔），含公开状态页。
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [Axiom](https://axiom.co/) — 提供0.5TB日志存储，保留30天。包含Vercel等平台集成，支持高级数据查询及邮件/Discord通知功能。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。免费版每月5,000次错误，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用后，免费版每月限2,000次错误。
* [CatchJS.com](https://catchjs.com/) — 带截图和点击轨迹的JavaScript错误追踪。开源项目免费。
* [elmah.io](https://elmah.io/) — 面向开发者的错误日志与可用性监控。开源项目可享免费小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小团队免费，每年最多100万用户会话。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。免费版每月3,000事件/1用户。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容Sentry SDK。免费版每月1,000事件，自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) — 异常、可用性及定时任务监控。小团队和开源项目免费（每月12,000次错误）。
* [Jam](https://jam.dev) — 开发者友好的一键提交错误报告。免费计划无限次提交。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费版每月5,000次错误，无限用户，30天保留期。
* [Semaphr](https://semaphr.com) — 移动应用免费一站式紧急开关。
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限制。
* [Whitespace](https://whitespace.dev) — 浏览器内一键提交错误报告。个人用途免费计划无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，提供拼写容错、相关性排序和UI组件库，轻松构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索次数，60天分析数据
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等领域的免费认证课程
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家主讲的免费短期课程，1小时内快速掌握最新生成式AI工具与技术
* [DevNet Academy](https://devnet-academy.com/) - 面向Cisco DevNet Expert/CCIE自动化认证的免费自学课程，涵盖Python Click和Flask-RESTx框架
* [Django教程网](https://django-tutorial.dev) - 为初学者提供Django框架免费学习指南，并为用户原创文章提供dofollow反向链接
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖院校的4000+免费在线课程，专注计算机科学、工程与数据科学领域
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言免费开源教育平台，配备人工导师指导
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化简历模板，支持完整克隆编辑下载
* [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [全栈公开课](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL/TypeScript等技术，支持在线自学
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS/JavaScript/SQL从基础到进阶的免费学习指南
* [LabEx](https://labex.io) - 通过交互式实验和真实项目培养Linux/DevOps/网络安全/编程/数据科学等技能
* [MIT开放课程](https://ocw.mit.edu/) - 免费公开2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发路线的免费学习路径图
* [The Odin Project](https://www.theodinproject.com/) - 专注JavaScript和Ruby的Web开发开源课程平台
* [W3Schools](https://www.w3schools.com/) - 提供HTML/CSS/JavaScript等Web开发技术的免费教程

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和手机号验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天历史记录
* [Buttondown](https://buttondown.email/) — 通讯服务，最多100名免费订阅者
* [Contact.do](https://contact.do/) — 链接式联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC配置，roundsphere.com提供的免费服务
* [DNSExit](https://dnsexit.com/) - 免费2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，客户端邮件发送工具（不暴露凭证），免费层含200次月请求、2个模板、50KB请求限制、有限联系人历史
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费9000封邮件，每日300封上限
* [EmailOctopus](https://emailoctopus.com) - 免费2500名订阅者，每月10000封邮件
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，专为Nodemailer和EmailEngine设计（但不限于），完全免费的反事务性邮件服务（邮件永不投递）
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发（注：使用.casa/.cf/.click等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每日15封测试邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [Inboxes App](https://inboxesapp.com) — 每日最多创建3个临时邮箱（通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱（邮件3天后自动删除），开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC配置，每月20次免费
* [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API，每月5000封邮件，含无限域名/邮件验证/黑名单监控等
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API（REST/SMTP），每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约86400次/月）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 免费100名订阅者，无限邮件及自动化功能
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，任意收件箱可用
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封上限）
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API（1500次/月），含外发捕获及Slack/Webhook推送
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP，每月3500封免费事务性/营销邮件，开发用模拟SMTP服务器（1收件箱/100条消息/2条/秒速率）
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱（所有ID共享）
* [OneSignal](https://onesignal.com/) — 每月10000封免费邮件，无需信用卡
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据至服务器）
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（端到端加密），1GB存储
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封（每日100封），1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案，免费5个别名，无限收发。教育工作者免费
* [Substack](https://substack.com) — 无限免费通讯服务，收费时开始付费
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每日500封免费
* [temp-mail.io](https://temp-mail.io) — 多账号一次性临时邮箱服务（含转发）
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时邮箱生成器（多域名支持），页面刷新即更新地址，完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200次邮箱是否为临时地址
* [trashmail.com](https://www.trashmail.com) - 带转发和自动过期的免费临时邮箱
* [Tuta](https://tuta.com/) - 免费安全邮箱（端到端加密/无广告/无追踪），1GB存储+1个日历（[付费计划](https://tuta.com/pricing)可选），部分[开源](https://github.com/tutao/tutanota)可自托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API（含收件箱确认和临时地址检测），每日25次免费
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务，每月100次免费

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台。支持代码化配置和全类型化TypeScript SDK，深度集成Next.js、React等框架。提供慷慨的免费套餐和低成本扩展方案。
* [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队成员，提供卓越技术支持与合理定价。免费套餐包含10个开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能，统一管理Web、移动端和服务端应用的功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费使用，不限功能开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置平台，支持Git式版本控制和同步内存本地开关评估。5人以下团队免费，不限开关与测试数量。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析一体化平台。免费套餐包含无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Toggled.dev](https://www.toggled.dev) - 企业级多区域功能开关管理平台。免费套餐包含10个开关、2个环境且不限请求量。SDK、分析面板、发布日历、Slack通知等所有功能均包含在永久免费套餐中。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [Befonts](https://befonts.com/) - 提供多款独特字体，支持个人及商业用途
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [dafont](https://www.dafont.com/) - 本站所有字体均为作者原创，包含免费版、共享版、试用版及公有领域作品
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器及字体提交工具
* [Font of web](https://fontofweb.com/) - 检测网站使用的所有字体及其应用方式
* [Font Squirrel](https://www.fontsquirrel.com/) - 精选可商用的免费字体库，以易用格式呈现
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的多样化字体下载资源
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，含中日韩文字体标签
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，个人与商业用途均可100%免费使用
* [Google Fonts](https://fonts.google.com/) - 通过下载或CDN链接快速为网站嵌入海量免费字体

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化界面，支持与Google Sheets、Airtable、Slack、电子邮件等集成。
* [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许最多250次提交和5个活跃表单。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集总计25条反馈提交。提供React和Vue组件便于集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。具备通知、垃圾邮件拦截和GDPR合规数据处理功能。基础用途可免费使用。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [Formester.com](https://formester.com) - 在网站上分享和嵌入独特外观的表单——不限创建的表单数量或功能限制。免费版每月最多100次提交。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，具备垃圾邮件防护、邮件通知和可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，不限单页表单数量，每月100次提交，邮件通知。
* [forms.app](https://forms.app/) — 创建具备条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版最多收集100条回复，可嵌入网站或通过链接使用。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版允许无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每月每个表单50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [HeroTofu.com](https://herotofu.com/) - 具备机器人检测和加密存档的表单后端。通过界面将提交转发至邮件、Slack或Zapier。使用自有前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版允许创建无限表单并收集无限提交。提供预制模板、反垃圾邮件功能和100MB文件存储。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，非常适合静态网站。免费版包含1个网站和每月最多50次提交。
* [Pageclip](https://pageclip.co/) - 免费版允许1个网站、1个表单和每月1,000次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站上嵌入PDF编辑器，将任何PDF转换为可填写表单。免费版允许无限PDF，每个PDF3次提交。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义重定向和响应页面、Telegram & Slack机器人、单次邮件通知。
* [staticforms.xyz](https://www.staticforms.xyz/) - 免费轻松集成HTML表单，无需服务器端代码。用户提交表单后，内容将发送至注册邮箱。
* [Survicate](https://survicate.com/) — 从所有渠道收集反馈并用单一工具发送后续调查。通过AI自动分析反馈并提取洞察。免费版提供邮件、网站、产品或移动端调查、AI调查创建器和每月25条回复。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版每个表单仅限10个字段和每月100条回复。
* [Vidhook](https://vidhook.io/) - 通过高回复率的愉悦调查收集反馈。免费版包含1个活跃调查、每条调查25次回复和可定制模板。
* [WaiverStevie.com](https://waiverstevie.com) - 具备REST API的电子签名平台。可通过Webhook接收通知。免费版为签署文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 无需编写后端代码的静态&JAMStack网站联系表单。免费版允许无限表单、无限域名和每月250次提交。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限制100次提交。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Arize AX](https://arize.com) - 帮助AI工程师/产品经理评估和监控AI应用及智能体的工程平台，内置Alyx智能体。免费版包含每月25,000次调用和1GB数据吞吐量。
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — 基于AI的SaaS音频处理工具，可消除噪声和回声同时保持人声自然清晰。完全免费：支持无限次一键增强，无需登录，兼容MP3/WAV/FLAC格式。
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估系统、提示词沙盒及数据管理平台。免费计划每周提供最多1,000条私有评估数据。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码及管理功能。专业套件另提供免费试用。
* [Comet Opik](https://www.comet.com/site/products/opik/) - 全生命周期LLM应用评估测试与部署工具。[#开源项目](https://github.com/comet-ml/opik/)
* [Keywords AI](https://keywordsai.co) - 顶级LLM监控平台。两行代码即可调用200+大模型，每月10,000次免费请求且平台功能零费用！
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，支持团队协作调试分析与迭代。永久免费版含每月50,000次观测及全功能。[#开源项目](https://github.com/langfuse/langfuse)
* [Langtrace](https://langtrace.ai) - 开发者工具，可追踪评估提示词与数据集，调试LLM应用性能问题。生成符合OpenTelemetry标准的追踪数据，免费版每月50,000次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，帮助AI团队测量监控及优化LLM应用的可靠性、成本效益与性能。通过DSPy组件实现技术与非技术团队协作调优，免费版含全功能、每月1,000次追踪及1个工作流优化器。[#开源项目](https://github.com/langwatch/langwatch)
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000免费词额的Azure OpenAI/DeepSeek/Google Gemini模型访问，支持代码生成、深度研究与图像创建。
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供DeepSeek R1/V3、Llama、Moonshot AI等免费模型，适用于多样化NLP开发需求（含速率限制）。另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型。
* [Othor AI](https://othor.ai/) - 基于LLM的BI解决方案，可快速构建定制化商业智能系统。永久免费版支持1个工作区5个数据源连接，分析功能无限制。[#开源项目](https://github.com/othorai/othor.ai)
* [Pollinations.AI](https://pollinations.ai/) - 免登录/API密钥的免费图像生成AI，提供多种网站集成方案。[#开源项目](https://github.com/pollinations/pollinations)
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，含观测套件与AI网关。每月免费10,000次请求。
* [ReportGPT](https://ReportGPT.app) - AI写作助手，平台完全免费（需自备API密钥）。
* [Zenable](https://zenable.io) - 通过策略即代码构建的护栏系统，可自动修正Cursor/Windsurf/Copilot等工具的输出以满足企业标准。免费版包含每日100次MCP服务器调用及25次GitHub自动PR审查。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名及通用SSL证书
* [cdnjs.com](https://cdnjs.com/) — 简洁、快速、可靠的内容分发网络。cdnjs是由Cloudflare驱动的免费开源CDN服务，被全球超过11%的网站信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最受欢迎的开源JavaScript库内容分发网络
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等平台
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了jQuery等流行的第三方JavaScript库，可轻松集成到Web应用中
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持最多5个用户和每日1GB流量
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub/GitLab/Bitbucket）、WordPress相关资源和图片提供CDN服务
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理镜像。个人开发者免费（无技术支持）
* [UNPKG](https://unpkg.com/) — npm全量CDN
* [weserv](https://images.weserv.nl/) — 图片缓存与尺寸调整服务。实时处理图片并全球缓存

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或管理基础设施即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费预览版计划包含每小时 500 次调用、每日 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中可用。
  * [anvil.works](https://anvil.works) - 仅用 Python 开发 Web 应用。免费层提供无限应用和 30 秒超时限制。
  * [Apply.build](https://apply.build/) — 免费构建并部署您的 GitHub 应用，配备 0.5 vCPU / 512 MiB 内存、欧洲服务器、自动防火墙、实时性能指标。支持 Node.js、Python、Go、Java、静态网站、微服务等。
  * [appwrite](https://appwrite.io) - 无限项目且无项目暂停（支持 WebSocket）和认证服务。免费层每个项目包含 1 个数据库、3 个存储桶和 5 个函数。
  * [Choreo](https://wso2.com/choreo/) - 原生 AI 的内部开发者平台即服务。免费层包含最多 5 个组件和每月 100 美元额度。
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限。
  * [Daestro](https://daestro.com) - 跨云提供商和本地运行计算任务。免费层包含最多 10 个并发任务运行、2 个计算实例、自托管计算、1 个云提供商、1 个容器注册表和 1 个定时任务。
  * [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的分布式系统，支持 JavaScript、TypeScript 和 WebAssembly。免费层包含每日 10 万次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – 提供 GitHub CI/CD、SSH 和 MariaDB/Postgres 数据库的 Linux 托管服务。免费版限制 1 GB 存储和每月 1 GB 网络流量，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 通过静态分析提供自动基础设施、无样板代码等的后端框架。包含业余项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过 Git 推送式工作流在您自己的 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 仓库的开发者可享免费层。AWS 费用通过 AWS 计费，但可使用额度及 AWS 免费层。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 提供一个永不休眠的免费实例和限制为 2 个连接、10,000 行且无备份的免费层 PostgreSQL 数据库，适用于 Elixir/Phoenix 应用。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是面向开发者的无服务器平台，用于全球部署应用。无缝运行 Docker 容器、Web 应用和 API，支持基于 Git 的部署、原生自动扩展、全球边缘网络及内置服务网格和发现。免费实例可在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管 PostgreSQL 数据库位于法兰克福（德国）、华盛顿特区（美国）和新加坡。512MB 内存、2GB 存储和 0.1 CPU。
  * [leapcell](https://leapcell.io/) - Leapcell 是可靠的分布式应用平台，提供支持快速增长所需的一切。免费计划包含 10 万次服务调用、1 万次异步任务和 10 万次 Redis 命令。
  * [Northflank](https://northflank.com) — 通过强大的 UI、API 和 CLI 构建和部署微服务、任务及托管数据库。从版本控制和外部 Docker 注册表无缝扩展容器。免费层包含 2 个服务、2 个定时任务和 1 个数据库。
  * [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台。基于任意触发器开发工作流。工作流是可[免费](https://docs.pipedream.com/pricing/)运行的代码。无需管理服务器或云资源。
  * [Railway](https://railway.app/) - 通过基于 Git 的部署、自动 CI/CD 和内置数据库部署任意内容。免费层每月包含 5 美元额度。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — Python 云应用托管。新手账户免费，提供 your-username.pythonanywhere.com 域名的 1 个 Python Web 应用、512 MB 私有文件存储和 1 个 MySQL 数据库。
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，可快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费计划](https://wundergraph.com/pricing)包含最多 3 个项目、1GB 出口流量和每月 300 分钟构建时间。
  * [YepCode](https://yepcode.io) - 一体化平台，用于在无服务器环境中连接 API 和服务。兼具 NoCode 工具的敏捷性与编程语言的强大功能。免费层包含 [1,000 次 yeps](https://yepcode.io/pricing/)。
  * [Zeabur](https://zeabur.com) - 一键部署您的服务。免费支持三个服务，每月赠送 5 美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程以连接多个应用的后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动和Web Baas，免费提供1GB文件存储、每月50,000次推送通知和1000个表内数据对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，免费在我们的在线编辑器或本地使用您喜欢的工具构建和托管。
* [Claw.cloud](https://run.claw.cloud) - 一个PaaS平台，为GitHub账户超过180天的用户提供每月5美元的免费额度。非常适合托管应用、数据库等。([免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin))。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、点对点语音和视频通话、文件附件和推送通知。免费支持最多1000名用户的应用。
* [convex.dev](https://convex.dev/) - 反应式后端即服务，托管您的数据（具有关系和可序列化ACID事务的文档）、无服务器函数和WebSocket以向各种客户端流式传输更新。小型项目免费 - 最多100万条记录，每月500万次函数调用。
* [ETLR](https://etlr.io) - 使用YAML定义、版本化和部署自动化脚本。拖放工具的开发者优先替代方案。可用于计划任务、AI代理和基础设施监控。免费层包括每月100积分。
* [Flutter Flow](https://flutterflow.io) — 无需编写一行代码即可构建Flutter应用UI。还提供Firebase集成。免费计划包括完全访问UI生成器和免费模板。
* [getstream.io](https://getstream.io/) — 在几小时内而非几周内构建可扩展的应用内聊天、消息、视频和音频以及动态。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个小程序。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务，15分钟。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费提供1GB数据存储、256MB实例、每天3,000次API请求和每天10,000次推送。（API与Parse Platform非常相似）
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包括PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000次电子邮件发送，无限联系人和访问自动预热功能。
* [paraio.com](https://paraio.com) — 具有灵活身份验证、全文搜索和缓存的后端服务API。一个应用免费，1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月最多100万条消息和100个活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多150万次推送免费。
* [pusher.com](https://pusher.com/beams) — 每月2000名活跃用户的免费无限推送通知。适用于iOS和Android设备的单一API。
* [simperium.com](https://simperium.com/) — 即时自动移动数据，多平台，无限发送和存储结构化数据，每月最多2,500名用户。
* [Supabase](https://supabase.com) — 构建后端的开源Firebase替代方案。免费计划提供身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 具有身份验证、配额、监控和分析的API管理。免费云服务。
* [zapier.com](https://zapier.com/) — 连接您使用的应用以自动化任务。每15分钟5个zap和每月100次任务。
更新时间，五个活跃自动化，Webhooks。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持15+种数据库和任意API集成
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，提供可定制的移动端和Web应用。具有拖拽式界面、离线支持、实时位置追踪及多第三方服务集成功能
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。单个用户免费，每月支持100万次工作流活动（[德语版本](https://www.manubes.de)）
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每个应用0.5GB存储和1GB内存。免费层还包含Studio和Studio Pro IDE使用权
* [outsystems.com](https://www.outsystems.com/) — 面向本地或云的企业级Web开发PaaS，免费"个人环境"允许无限制编码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。高度可定制化，任何能用JavaScript和API实现的功能均可构建。免费层每月支持最多5个用户，不限应用数量和API连接
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发程序
* [UI Bakery](https://uibakery.io) — 低代码平台加速定制Web应用开发。通过JavaScript/Python/SQL实现高度定制化的拖拽式UI构建。提供云服务和自托管方案，最多5用户免费

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费虚拟主机，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。支持自定义Web服务器，可通过FTP/WebDAV/SSH访问，含邮箱/邮件列表/应用安装器，免费版不支持自定义域名
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL/应用安装器/邮件发送，无广告
* [Bubble](https://bubble.io/) — 可视化编程构建网页和移动应用，免费版带Bubble品牌标识
* [dAppling Network](https://www.dappling.network/) — 专注Web3前端的去中心化托管平台，提升运行时间与安全性，为用户提供额外访问入口
* [DigitalOcean](https://www.digitalocean.com/pricing) — 应用平台入门级免费部署三个静态站点
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的Flarum免费托管（支持250用户，捐赠可移除页脚水印）
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名+SSL，每月100GB流量，260+Cloudflare CDN节点
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，500MB内存/SFTP-1GB存储空间
* [Neocities](https://neocities.org) — 静态站点，1GB存储+200GB月流量
* [Netlify](https://www.netlify.com/) — 静态站点构建部署托管，每月300积分额度（相当于30GB流量）
* [Oaysus](https://oaysus.com) — 面向React/Vue/Svelte组件的可视化页面构建器，免费版含1个站点（不限页面数）、表单提交功能与全球CDN托管
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供多种托管形式（静态/容器化/WordPress等一键部署应用），免费含1个托管站点+1个数据库，100GB月流量+300分钟构建时长
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管与自动化DevOps，开发者与代理商免费，不支持自定义域名
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，免费版支持静态资源/预发布环境/开发应用
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能
* [render.com](https://render.com) — 统一云平台，免费提供SSL/全球CDN/私有网络/Git自动部署，含Web服务/数据库/静态网页的完全免费方案
* [Serv00.com](https://serv00.com/) — 3GB免费虚拟主机，支持每日备份（保留7天）、Crontab任务/SSH访问/GIT/SVN/Mercurial仓库，兼容MySQL/PostgreSQL/MongoDB/PHP/Node.js/Python/Ruby/Java等数十种语言环境
* [SourceForge](https://sourceforge.net/) — 免费发现、创建与发布开源软件
* [surge.sh](https://surge.sh/) — 前端开发者专用静态网页发布，支持无限站点与自定义域名
* [tilda.cc](https://tilda.cc/) — 1个站点50页50MB存储，仅限170+预设区块中的基础模块，不支持自定义字体/网站图标/域名
* [Vercel](https://vercel.com/) — 网页应用构建部署托管，免费提供SSL/全球CDN/每次git push生成专属预览URL，完美支持Next.js等静态站点生成器
* [Versoly](https://versoly.com/) — 专注SaaS的网站构建器，免费版含无限站点/70+区块/5套模板，支持自定义CSS/网站图标/SEO优化/表单功能，无自定义域名

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) — 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) — 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费托管服务。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费DDNS服务，最多5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费DDNS服务，支持[API](https://dynv6.com/docs/apis)及多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，并提供基于用户共享域名的[子域名注册](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费托管最多3个域名，支持DNSSEC。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为云免费DNS托管。
* [LocalCert](https://localcert.net) — 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS托管，域名数量无限制。
* [nextdns.io](https://nextdns.io) — DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) — 免注册、无追踪、无广告的免费DDNS服务，域名数量不限。
* [noip](https://www.noip.com/) — 动态DNS服务，免费提供3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含IP地址的主机名时返回该IP地址。
* [VolaryDDNS](https://volaryddns.net) — 高性能免费DDNS，无订阅或广告。
* [zilore.com](https://zilore.com/en/dns) — 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务，免费版支持1个DNS区域（域名）和10条记录。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [DigitalPlat](https://domain.digitalplat.org) — 免费二级域名
* [pp.ua](https://nic.ua/) — 免费pp.ua二级域名

**[⬆️ 返回顶部](#目录)**  

（注：根据要求保留了所有链接格式和Markdown标记，调整了标点符号为中文格式，并将"Back to Top"译为"返回顶部"。由于原文未提供完整的目录锚点，故保留原文的`#table-of-contents`未作改动）

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储服务
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 兼容S3协议的对象存储。每月免费15GB存储空间及15GB下载流量。
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费的5GB存储空间。
  * [Tebi](https://tebi.io/) - 兼容S3协议的对象存储。免费25GB存储空间及250GB出站流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base是基于MySQL和GraphQL构建的JavaScript开发者低代码全栈开发平台，提供无服务器后端即服务。通过UI应用构建器快速开发网页应用，免费版包含：2,500行数据、500MB存储、1GB/小时无服务器计算资源和5个客户端应用用户。
* [airtable.com](https://airtable.com/) - 电子表格形态的关系型数据库，免费版支持无限基数库、每库1,200行数据和每月1,000次API请求。
* [Aiven](https://aiven.io/) - 开源数据平台提供PostgreSQL、MySQL和Valkey（Redis兼容）免费方案，单节点配置为1核CPU、1GB内存，PostgreSQL/MySQL附加1GB存储，支持轻松升级或跨云迁移。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 免费层每月提供5,000万请求单位（RU）和10GiB存储（价值15美元）。（[请求单位说明](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [codehooks.io](https://codehooks.io/) - 易用的JavaScript无服务器API/后端及NoSQL数据库服务，含函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和网页数据管理器。免费版提供5GB存储和每分钟60次API调用，包含2个开发者席位，无需信用卡。
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 永久免费的托管数据库集群（1节点8GB存储），专为开发物联网到AI的下一代应用设计。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)提供单节点（2核CPU/2GiB内存/8GiB存储），每个组织可创建一个集群，无需支付方式。
* [filess.io](https://filess.io) - 可免费创建两个数据库（MySQL/MariaDB/MongoDB/PostgreSQL），每库上限10MB。
* [InfluxDB](https://www.influxdata.com/) - 时序数据库，免费额度：每5分钟3MB写入/30MB读取，10,000基数序列。
* [MemCachier](https://www.memcachier.com/) - 托管Memcache服务，免费版支持25MB内存、1个代理服务器和基础分析功能。
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费层提供512MB存储。
* [Neo4j Aura](https://neo4j.com/cloud/aura/) - 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API，免费版限制图规模（5万节点/17.5万关系）。
* [Neon](https://neon.tech/) - 托管PostgreSQL服务，免费版含0.5GB总存储、1个项目、10个分支、无限数据库，主分支永久活跃（5分钟后自动暂停），非主分支每月20小时计算时长。
* [Nile](https://www.thenile.dev/) - B2B应用专用PostgreSQL平台，免费版提供无限数据库、持续运行不暂停、1GB总存储、5,000万查询令牌、自动扩展和无限制向量嵌入。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸金属架构的高速托管Postgres，免费版含1GB存储、10个数据库，集成Prisma ORM。
* [restdb.io](https://restdb.io/) - 高效NoSQL云数据库服务，提供模式化数据、关联关系、自动化REST API（支持类MongoDB查询）和多用户管理界面。免费版支持3用户、2,500条记录和每秒1次API请求。
* [scalingo.com](https://scalingo.com/) - 主要提供PaaS服务，免费层包含128MB至192MB的MySQL/PostgreSQL/MongoDB。
* [SeaTable](https://seatable.io/) - Seafile团队开发的类电子表格灵活数据库，免费版支持无限表格、2,000行数据、1个月版本历史和最多25名团队成员。
* [skyvia.com](https://skyvia.com/) - 云端数据平台，测试期间所有方案完全免费。
* [StackBy](https://stackby.com/) - 融合电子表格灵活性、数据库功能与商业应用集成的工具，免费版包含无限用户、10个堆栈和每堆栈2GB附件。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入，可将SQL查询发布为托管HTTP API。免费版永久有效，含10GB存储和每日1,000次API请求。
* [Turso by ChiselStrike](https://chiselstrike.com/) - 边缘化SQLite开发者体验数据库，永久免费版提供9GB总存储、500个数据库、3个地理位置、每月10亿行读取和本地开发支持。
* [Upstash](https://upstash.com/) - 无服务器Redis服务，免费层每月50万次命令、256MB最大数据库容量和20个并发连接。
* [Xata Lite](https://lite.xata.io/) - 内置强大搜索分析功能的无服务器数据库，提供统一API、多类型安全客户端库和开发流程优化。免费版含10个分支和15GB存储，无暂停或冷启动限制。

**[⬆️ 返回顶部](#目录)**

## 隧道/WebRTC/WebSocket路由

  * [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给局域网或通过隧道生成公网URL
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持
* [Hamachi](https://www.vpn.net/) — LogMeIn提供的托管VPN服务，可安全扩展类局域网网络。免费版支持无限网络和最多5人连接
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。每月10万请求和10万次尝试，保留3天数据
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公网URL
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道暴露本地服务。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)
* [LocalXpose](https://localxpose.io) — 反向代理工具，免费版隧道有效期15分钟
* [ngrok.com](https://ngrok.com/) — 将本地服务通过隧道暴露为公网URL
* [Pinggy](https://pinggy.io) — 单命令生成公网URL访问本地服务，无需下载。免费版隧道有效期60分钟
* [Radmin VPN](https://www.radmin-vpn.com/) — 多设备VPN组网工具（Hamachi替代方案），支持无限节点
* [serveo](https://serveo.net/) — 暴露本地服务到公网。免安装免注册，提供免费子域名且无限制
* [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) Twilio STUN服务
* [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN服务
* [Tailscale](https://tailscale.com/) — 基于WireGuard协议的无配置VPN。支持个人免费版（100个设备/3用户）
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试和代理Webhook流量，支持通过隧道暴露内网服务
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN调用+500MB/月TURN流量（限速单区域）
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端组网，提供全平台客户端和网页管理界面

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 私人项目协作免费版
* [Backlog](https://backlog.com) — 一体化项目发布平台。免费版包含1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内联网和项目管理工具。免费版提供5GB空间支持无限用户
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具：流程图、UML、网络图。免费版最多15用户/图表，25张工作表
* [clickup.com](https://clickup.com/) — 项目管理平台。基础版免费，高级版含云存储。提供移动应用和Git集成
* [Clockify](https://clockify.me) - 时间追踪和工时表应用，支持跨项目跟踪工作时间。无限用户永久免费
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，专为AWS优化并支持实时数据展示。免费版允许单个用户创建无限私有图表
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian团队协作知识管理工具。免费版支持最多10名用户
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持3个项目、无限用户、1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持本地存储至Google Drive/OneDrive/Dropbox的在线图表工具。所有功能和存储层级完全免费
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具。免费版每月提供3个公共看板和每个看板1次调研
* [freedcamp.com](https://freedcamp.com/) - 任务管理、讨论区、里程碑、时间跟踪、日历、文件和密码管理器。免费版支持无限项目、用户和文件存储
* [GForge](https://gforge.com) — 面向复杂项目的管理和问题追踪工具集，提供自托管和SaaS方案。SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专用的描述转图表工具。通过关键词快速创建非正式UML类图、对象图或实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可对比两个GraphQL模式差异的工具，精确标识破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 提供永久免费在线聊天的客户支持软件。通过简单脚本快速部署，由开发者打造
* [Hygger](https://hygger.io) — 项目管理平台。免费版提供无限用户、项目和看板，100MB存储空间
* [Ilograph](https://www.ilograph.com/) — 支持多视角查看的基础设施交互图表工具。免费版允许创建无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版支持最多10名用户
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用。免费版支持1名用户创建无限看板/列表/卡片
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理。免费版包含2个看板/2名用户，不支持附件
* [Kitemaker.co](https://kitemaker.co) - 贯穿产品全生命周期的协作平台，支持Slack/Discord/Figma/Github集成。免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具，含网页版和Chrome插件。完全免费
* [Kumu.io](https://kumu.io/) — 支持动画/装饰/筛选/集群/表格导入的关系图谱工具。免费版可创建无限公开项目，学生可享私有项目
* [leiga.com](https://www.leiga.com/) — 运用AI自动管理项目的SaaS产品。免费版支持10名用户/20个自定义字段/2GB存储/5分钟AI视频录制/每月20次自动化执行
* [Linear](https://linear.app/) — 极简风格问题追踪器。免费版支持无限成员/10MB文件上传/250个问题（归档除外）
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具。免费版包含3个可编辑文档/100个专业模板/基础协作功能
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目（成员不限）
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。永久免费版包含100MB存储/5个用户或团队，支持无限工作区/会议/任务/工时表/问题追踪
* [Plane](https://plane.so/) - 简洁可扩展的开源项目和产品管理工具。免费版支持无限成员/5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（共识估算工具）。支持无限用户/团队/会话/轮次/投票，无需注册
* [Pulse.red](https://pulse.red) — 极简主义项目时间追踪器
* [ScrumFast](https://www.scrumfast.com) - 直观易用的Scrum看板，免费支持5名用户
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/销售/客服设计的项目管理工具。免费版支持3个项目/5名成员
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告工具。免费版每月每应用限10次报告
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持10名用户
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具。免费版包含1个工作区（任务/项目不限）/1GB存储/1周历史记录/5人视频会议
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/计划工具。免费支持15名用户

  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰游戏、GIF和表情符号。免费版支持3次回顾会议和无限成员参与。
* [Tenzu](https://tenzu.net/) — 为敏捷团队打造的轻量级项目管理工具。该SaaS产品依赖用户自愿付费，可选择0元使用且无功能限制 {[详情](https://tenzu.net/pricing/)}
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，支持在任务/问题中创建结构化清单、模板和审批流程。小团队可免费使用。
* [todoist.com](https://todoist.com/) — 协同与个人任务管理。免费版包含：5个活跃项目/项目内5名成员/5MB文件上传/3个筛选器/1周活动记录。
* [Toggl](https://toggl.com/) — 提供两款免费工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签及报告功能，专为自由职业者设计）和[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版支持无限任务/里程碑/时间线）。
* [trello.com](https://trello.com/) — 看板式项目管理。免费版含无限个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理。
* [Wikifactory](https://wikifactory.com/) — 产品设计平台，含项目管理、版本控制和问题追踪。免费版支持无限项目/协作者和3GB存储。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。3人以下团队免费，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目及私有项目（3用户免费）。含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌式项目管理方案。公开仓库/非营利组织/开源项目免费。
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。5人以下团队免费，支持5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目/4名用户。提供GitHub集成。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大编辑、存储和交付服务。免费套餐含25月度积分（1积分=1,000次图片转换/1GB存储/1GB CDN流量）。
* [degoo.com](https://degoo.com/) – 基于AI的云存储，免费20GB空间支持三台设备，推荐奖励5GB（账户90天不活跃失效）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM端到端加密，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费版每月5,000个URL且15请求/秒。
* [Ente](https://ente.io/) - 端到端加密的照片、视频和2FA秘密云存储。可自托管并提供10GB永久免费层（免费用户仅保留单副本数据）。
* [file.io](https://www.file.io) - 2GB文件存储空间，下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档、图片、音频、视频等格式转换与编辑。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客松和移动应用设计的简易JSON数据存储API。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API。无文件大小、带宽和下载次数限制（但十天无下载会删除文件）。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN处理流媒体服务。免费层含每月250GB视频流量和30GB图片流量。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。免费10GB空间。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图片图表生成服务。
* [ImageEngine](https://imageengine.io/) – 全球图片CDN服务，60秒内完成配置。支持AVIF/JPEGXL格式，提供WordPress/Magento/React/Vue等插件。[开发者免费账户申请](https://imageengine.io/developer-program/)。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，含自动优化和实时转换功能。免费版每月20GB带宽。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务。拖拽上传32MB以内图片，获取直链/BBCode/HTML缩略图。登录可查看上传历史。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图片的机器人，在保持质量前提下减小文件体积。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务。免费版含1,000张原始图片、无限转换和100GB带宽。
* [internxt.com](https://internxt.com) – 基于零知识证明的绝对隐私文件存储服务。注册即享永久免费10GB空间。
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费版支持1MB以内文件。
* [LibreQR](https://libreqr.com) — 注重隐私无追踪的免费二维码生成器。
* [nitropack.io](https://nitropack.io/) - 自动前端加速服务（缓存/图片代码优化/CDN）。免费版每月5,000页面浏览。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理工具。基础版支持无限传输（单文件250MB上限）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI托管仓库。提供限量免费版，开源项目可申请特殊计划。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。免费10GB空间。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理平台。免费1GB存储空间及API访问权限。
* [plot.ly](https://plot.ly/) — 数据图表制作共享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 快速批量生成无水印二维码工具，单次最多100个URL导出。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图表图像和二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，累计处理超70亿张图片。
* [sirv.com](https://sirv.com/) — 智能图片CDN服务，支持实时优化调整。免费版含500MB存储和2GB带宽。
* [SlingSite](https://slingsite.github.io) - 批量生成图片视频的优化版本。图片输出AVIF/WEBP/JPG三种格式（桌面/平板/移动端分辨率），视频输出WebM(VP9)/MP4(HEVC)/MP4(AVC)格式及封面帧。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。免费5GB空间。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩与缩放API，每月免费500次调用。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码服务。开源项目/慈善机构/学生通过GitHub学生包免费，商业应用可试用2GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN、媒体处理API和前端自动化优化库。免费层每月3GB流量。

  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、Logo...

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
  * [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
  * [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（不限查看人数）
  * [BoxySVG](https://boxy-svg.com/app) — 可安装的网页版SVG绘制工具，支持导出SVG/PNG/JPEG等格式
  * [Branition](https://branition.com/colors) - 为品牌量身定制的手工调色板
  * [日历图标生成器](https://calendariconsgenerator.app/) -- 一键生成全年独特图标，完全免费
  * [Canva](https://canva.com) - 在线视觉内容设计工具
  * [Carousel Hero](https://carouselhero.com/) - 社交媒体轮播图制作工具
  * [Circum Icons](https://circumicons.com) - 风格统一的开源图标库（支持React/Vue/Svelte的SVG图标）
  * [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
  * [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具（含视频和GIF）
  * [CMYK转潘通色](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
  * [CodedThemes](https://codedthemes.com/) - 精心打造的管理后台模板和UI套件，加速现代网页开发
  * [CodeMyUI](https://codemyui.com) - 附代码片段的网页设计与UI灵感精选集
  * [ColorKit](https://colorkit.co/) - 在线创建调色板或获取灵感
  * [colorr.me](https://colorr.me/) - 色彩与渐变生成器
  * [coolors](https://coolors.co/) - 免费调色板生成工具
  * [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变的免费工具（支持RGB/HEX格式）
  * [css.glass](https://css.glass/) -- 使用CSS创建玻璃拟态设计的免费网页应用
  * [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库（减少类名书写），提供按钮等组件
  * [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库
  * [Excalidraw](https://excalidraw.com/) -- 支持本地保存和导出的免费在线绘图工具
  * [figma.com](https://www.figma.com) — 团队协作设计工具，免费版包含无限文件查看+2名编辑+3个项目
  * [Float UI](https://floatui.com/) - 非设计师也能快速创建现代响应式网站的免费开发工具
  * [Flows](https://flows.sh/) -- 完全可定制的产品引导平台（免费支持250名月活跃用户）
  * [Flyon UI](https://flyonui.com/)- 最简单的Tailwind CSS组件库
  * [framer.com](https://www.framer.com/) - 专业原型设计工具（免费版含无限查看+2名编辑+3个项目）
  * [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库
  * [Glyphs](https://glyphs.fyi/) -- 强大的免费可编辑开源图标系统
  * [Gradientos](https://www.gradientos.app) - 快速便捷的渐变选择工具
  * [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式网页构建器（免费5个页面+无限域名+全功能）
  * [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的网页工具
  * [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色精选集与生成器
  * [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件库
  * [Icon Horse](https://icon.horse) – 通过简单API获取网站高清favicon
  * [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一检索平台（支持导出SVG/框架组件）
  * [Iconoir](https://iconoir.com) – 支持React/Flutter/Vue等框架的开源图标库
  * [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具（免费版有分辨率限制）
  * [图片背景模糊器](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片模糊背景框
  * [landen.co](https://www.landen.co) — 无代码建站工具（免费版可发布1个全定制网站）
  * [lensdump.com](https://lensdump.com/) - 免费云图床
  * [Logo.dev](https://www.logo.dev) - 4400万+品牌logo API（前1万次调用免费）
  * [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具
  * [LottieFiles](https://lottiefiles.com/) - 全球最大Lottie动画平台（提供各平台开发工具）
  * [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
  * [Lunacy](https://icons8.com/lunacy) -- 内置素材的离线图形设计工具（免费版含10个云文档+30天历史记录）
  * [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变/图案/斑点等）
  * [marvelapp.com](https://marvelapp.com/) — 设计协作平台（免费版限1用户1项目）
  * [Mastershot](https://mastershot.app) - 无水印的浏览器视频编辑器（支持1080P导出）
  * [MDBootstrap](https://mdbootstrap.com/) - 免费商用UI套件（700+组件/精美模板/详细教程）
  * [Mindmup.com](https://www.mindmup.com/) — 云端无限量免费思维导图工具（全平台即时同步）
  * [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具（免费版含3用户5项目全功能）

  * [Modeldraw.com](https://modeldraw.com) — 完整的图表平台，支持UML、系统架构、流程图、思维导图和敏捷工作流。支持无限团队成员实时协作，无需信用卡。
  * [Mossaik](https://mossaik.app) - 免费SVG图像生成器，提供波浪、博客和图案等多种工具。
  * [movingpencils.com](https://movingpencils.com) — 基于浏览器的快速矢量编辑器。完全免费。
  * [Nappy](https://nappy.co/) -- 免费的黑人和棕色人种精美照片。可用于商业和个人用途。
  * [NextUI](https://nextui.org/) -- 免费、美观、快速且现代的React & Next.js UI库。
  * [NSPolygon](https://nspolygon.com) — 免费库存照片、图标和插图。
  * [Octopus.do](https://octopus.do) — 可视化站点地图构建器。实时构建网站结构并快速分享以与团队或客户协作。
  * [OKLCH](https://oklch.net/) -- 免费的OKLCH颜色选择器和转换器，适用于网页设计师和开发者。
  * [okso.app](https://okso.app) - 极简在线绘图应用。可快速创建草图和视觉笔记。支持导出为PNG、JPG、SVG和WEBP格式。也可作为PWA安装。所有人免费使用（无需注册）。
  * [Pencil](https://github.com/evolus/pencil) - 使用Electron的开源设计工具。
  * [Penpot](https://penpot.app) - 基于网页的开源设计和原型工具。支持SVG。完全免费。
  * [pexels.com](https://www.pexels.com/) - 免费商用库存照片。提供免费API，可按关键词搜索照片。
  * [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，界面类似Adobe Photoshop，支持PSD、XCF和Sketch格式（Adobe Photoshop、Gimp和Sketch App）。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人注目的独特图形和图像。
  * [pixlr.com](https://pixlr.com/) — 免费在线浏览器编辑器，功能媲美商业软件。
  * [Plasmic](https://www.plasmic.app/) - 快速、易用且强大的网页设计工具和页面构建器，可集成到代码库中。构建响应式页面或复杂组件；可选代码扩展；并发布到生产站点和应用。
  * [PNG to WebP Converter](https://pngtowebpconverter.com/) - 直接在浏览器中将PNG图像转换为WebP图像。无需上传，完全客户端处理，确保最高隐私和安全性。
  * [Pravatar](https://pravatar.cc/) - 生成随机/占位虚拟头像，其URL可直接热链到您的网页/应用中。
  * [Proto.io](https://www.proto.io) - 无需编码即可创建完全交互式UI原型。免费试用结束后仍可使用免费版。免费版包括一个用户、一个项目、五个原型、100MB在线存储和proto.io应用预览。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux是一款原型设计和设计工具。完全免费且开源。
  * [resizeappicon.com](https://resizeappicon.com/) — 简单的服务，用于调整和管理应用图标。
  * [Responsively App](https://responsively.app) - 免费开发工具，用于更快、更精确的响应式网页应用开发。
  * [Rive](https://rive.app) — 创建并发布精美动画到任何平台。个人用户永久免费。服务包括编辑器，并在其服务器上托管所有图形。还提供多平台运行时以运行使用Rive制作的图形。
  * [SceneLab](https://scenelab.io) - 在线模型图形编辑器，提供不断扩展的免费设计模板库。
  * [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计网页自定义滚动条。
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局中的主题变化。
  * [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到您的应用中。可访问、可定制、开源。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模型。
  * [storyset.com](https://storyset.com/) — 使用此工具为您的项目创建令人惊叹的免费定制插图。
  * [Superdesigner](https://superdesigner.co) - 一系列免费设计工具，只需点击几下即可创建独特的背景、图案、形状、图像等。
  * [SVG Converter](https://svgconverter.online/) -- 免费的JPG/PNG转SVG转换器，支持调色板定制。
  * [SVGmix.com](https://www.svgmix.com/) - 包含30万+免费SVG图标、合集和品牌标志的大型资源库。内置浏览器中的简单矢量编辑程序，可快速编辑文件。
  * [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合您项目的图标或矢量，使用各种矢量库。下载免费商用SVG矢量。
  * [tabler-icons.io](https://tabler-icons.io/) — 1500+免费可复制粘贴的SVG可编辑图标。
  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代响应式预制UI块集合。
  * [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板。即时预览并复制完美的Tailwind CSS颜色类。
  * [Tailkits](https://tailkits.com/) -- 精选的Tailwind模板、组件和工具集合，以及代码、网格、盒阴影等实用生成器。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作式前端平台，可即时创建和发布无头静态网站。三个免费项目，无限协作者，免费代码导出。
  * [TW Elements](https://tw-elements.com/) - 使用Tailwind CSS重新创建的免费Bootstrap组件，但设计更佳，功能更多。
  * [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题。实时自定义颜色、排版等。
  * [UI Avatars](https://ui-avatars.com/) - 根据姓名生成带首字母的头像。URL可直接热链到您的网页/应用中。支持通过URL配置参数。
  * [unDraw](https://undraw.co/) - 不断更新的精美SVG图像集合，可完全免费使用，无需署名。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松构建带托管的落地页。一个网站免费。
  * [unsplash.com](https://unsplash.com/) - 免费商用和非商用库存照片（随心所欲许可证）。
  * [Updrafts.app](https://updrafts.app) - 基于tailwindcss设计的WYSIWYG网站构建器。非商业用途免费。
  * [vector.express](https://vector.express) — 快速轻松地转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量。
  * [vectr.com](https://vectr.com/) — 网页+桌面免费设计应用。
  * [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件转换平台，支持多种格式。包括开发者转换器，如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
  * [Volume](https://volumecolor.io) — OKLCH颜色选择器和调色板生成器。
  * [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，免费版提供三个引导，每个引导最多5步。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
  * [Webflow](https://webflow.com) - 带动画和网站托管的WYSIWYG网站构建器。两个项目免费。
  * [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费版提供无限网站使用其域名。五个自定义域名网站。每月一万次页面浏览。2 GB资源存储。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。最多创建4个免费面板。

  * [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计稿、资源文件和样式指南。单个项目免费使用。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的地方，可按UI/UX项目分类筛选
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常并非来自真实应用
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好寻找最佳着陆页设计灵感
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例的画廊，提供设计师免费书籍和网络上的免费UI套件
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图，包含桌面、平板和移动端视图
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们50,000+可完全搜索的移动应用截图库节省UI&UX研究时间
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品创作者提供精选UI/UX模式（iOS和Android）的灵感库
* [Page Flows](https://pageflows.com/) - [移动端/网页流程视频和截图] 多个移动和网页应用的完整流程视频，同时包含截图，支持高效搜索和索引
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考合集，支持标签和搜索
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并了解最新网页和移动应用UI设计趋势，可按模式和应用程序筛选
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的应用商店设计截图合集
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动和网页UI设计

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) — 精密如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等时线API。每日三千次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日两千五百次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查询API
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API。全球覆盖范围。每日2500次免费查询
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [IP Geolocation](https://ipgeolocation.io/) — 免费开发者计划每月提供3万次请求
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日五千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示的地图服务、地理空间服务和SDK
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。每周更新的免费矢量瓦片和四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日两千五百次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排名的地理编码搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日两千五百次免费地图浏览和API请求

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快的应用构建工具。这款开源IDE对所有人免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计工具，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - 这款流行的macOS编辑器功能强大且可扩展。免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务。
* [BlueJ](https://bluej.org) — 专为初学者设计的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI帮助新手入门。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的轻量级开源文本编辑器，操作简便且高度可定制。
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理器，支持标签分类。
* [cocalc.com](https://cocalc.com/) —（原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件套装（预装Python、LaTeX、Jupyter Notebooks等）。
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，适配GitHub Codespaces的教学需求。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran/C/C++ IDE，开源且支持Windows/macOS/Linux。
* [codepen.io](https://codepen.io/) — 前端开发的在线游乐场。
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular等框架的在线开发沙盒。
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索、定义和复用代码片段的编程助手。个人和小型团队免费。
* [Components.studio](https://webcomponents.dev/) - 独立开发代码组件，通过故事板可视化，测试后发布至npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言Web IDE，开源社区驱动。Red Hat托管实例见[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4/Grok等AI模型的结对编程工具，原生CLI集成。免费版含基础AI模型本地处理。
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE侧边栏工具，每日限5个VM实例。
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费版REST API每日200次调用额度。
* [jetbrains.com](https://jetbrains.com/products.html) — IntelliJ IDEA/PyCharm等生产力工具，学生教师和开源团队可申请免费授权。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供伪JSON数据的REST API端点，支持本地部署。
* [Lazarus](https://www.lazarus-ide.org/) — 跨平台Delphi兼容IDE，用于快速应用开发。
* [MarsCode](https://www.marscode.com/) - 免费的AI云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务，生成伪JSON数据。
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持JSON/XML数据返回。
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL等格式的测试数据，支持后端API模拟。
* [Mocklets](https://mocklets.com) - HTTP模拟API工具，终身免费版支持并行开发和测试。
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的在线编译器，含Java/Python/C++等。
* [Paiza](https://paiza.cloud/en/) — 无需配置的浏览器开发环境，免费版提供24小时有效期的服务器（每日4小时运行，2核CPU/2GB内存）。
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
* [Replit](https://replit.com/) — 多语言云端编程环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云编程平台，支持多种语言，保存代码需注册。
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线IDE，支持NodeJs框架，快速创建项目：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - 功能丰富且高度可定制的流行文本编辑器。
* [Visual Studio Code](https://code.visualstudio.com/) - 微软开发的现代化代码编辑器，优化了网页和云应用开发调试体验。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能IDE，支持跨平台开发（含iOS/Android扩展）和多语言（C#/C++/Python等）。
* [VSCodium](https://vscodium.com/) - 无遥测/跟踪的VSCode社区发行版。
* [wakatime.com](https://wakatime.com/) — 通过编辑器插件量化编程活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) - 跨平台开源终端工具，支持内联渲染和会话保存，兼容MacOS/Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 含58个模板的浏览器IDE，支持组件隔离开发和测试。
* [Zed](https://zed.dev/) - Atom作者开发的高性能多人协作代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 数据分析/事件/统计

  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多支持2个应用
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在实现跨平台的无缝分析和产品更新管理。免费计划包括每月10,000次事件、产品日志和每周洞察。
* [Aptabase](https://aptabase.com) — 面向移动和桌面应用的开源、隐私友好且简单的分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费提供20,000次事件。
* [Avo](https://avo.app/) — 简化的分析发布工作流。单一真实来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观测性，确保在发布前发现所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯。
* [Beampipe.io](https://beampipe.io) - Beampipe是一款简单且注重隐私的网站分析工具。免费支持最多5个域名和每月10,000次页面浏览。
* [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。将数据仓库中的10个字段同步到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3,000次浏览分析。
* [counter.dev](https://counter.dev) — 简单且隐私友好的网站分析工具。免费或按捐赠付费。
* [DocBeacon](https://docbeacon.io) - 安全的文档共享，附带文档跟踪和参与度分析。免费计划支持最多20个PDF文档（最大10 MB）、10个联系人和每文档2次分享，提供基本的浏览、下载、时间和参与度分析。
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
* [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月免费提供3,000次事件。
* [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一款开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网站分析，作为Google Analytics或Matomo的替代方案。免费层适用于非商业用途，包括无限站点、六个月数据保留和每月100,000次页面浏览。
* [Google Analytics](https://analytics.google.com/) — Google Analytics
* [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。每月免费提供10,000次会话。
* [Hightouch](https://hightouch.com/) - Hightouch是一款反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供同步到一个目的地的功能。
* [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天2,000次页面浏览。每天100次快照（最大容量：300）。可存储3个快照热图365天。无限团队成员。还包括应用和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20条响应。
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包括每月10,000次事件。
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划允许每月100万次页面浏览，无需信用卡。
* [Mixpanel](https://mixpanel.com/) — 每月跟踪100,000名用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月免费提供500,000次API调用）
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费跟踪100万次事件。还提供每月250次响应的无限应用内调查。
* [Repohistory](https://repohistory.com) - 美观的仪表板，用于跟踪GitHub仓库流量历史超过14天。免费计划允许用户监控单个仓库的流量。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿。
* [Rybbit](https://rybbit.io) - Google Analytics的开源和无Cookie替代方案，直观性提升10倍。免费计划每月提供3,000次事件。
* [Seline](https://seline.so) - Seline是一款简单且隐私的网站和产品分析工具。无Cookie、轻量级、独立。免费计划包括每月3,000次事件，并提供对所有功能的访问，如仪表板、用户旅程、漏斗等。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划提供最近500名访问者的分析。
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月免费提供100万次计量事件。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，促进无缝协作。将其部署到生产环境中的真实流量，或在不编写代码的情况下为回归测试添加分析覆盖。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私友好型Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标跟踪。免费支持最多3个域名和每个域名600次会话回放。
* [Umami](https://umami.is/) - 简单、快速、隐私友好、开源的Google Analytics替代方案。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型，并跟踪访问者。免费供一名用户使用，无限测试
* [Userbird](https://userbird.com) - 带有热图、会话记录和收入跟踪的Google Analytics替代方案。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留1个月并提供3个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，含错误追踪和实时模式
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"、无项目限制且无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，提供用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能并保留7天数据。
* [Reactflow.com](https://www.reactflow.com/) — 每个网站：每日1,000次页面浏览，三个热图，三个小组件，免费错误追踪
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限时长免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API/SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Adapty.io](https://adapty.io/) – 一站式开源SDK解决方案，支持iOS、Android、React Native、Flutter、Unity及网页应用的移动端应用内订阅集成。每月1万美元以下收入免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密及法币汇率。免费版每月10,000次API调用额度。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟10次请求限制。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率，支持JSON和XML格式。免费版每月1,250次API请求。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时与历史货币汇率。免费开发者计划每月1,000次请求。
* [currencylayer](https://currencylayer.com/) — 企业级可靠汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限制。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈与退单。免费微型计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时与历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持Stripe、Chargebee等支付系统集成。免费版每月30,000次事件记录。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力全球业务拓展（购买力平价模式）。免费计划每月7,500次API请求。
* [Qonversion](http://qonversion.io/) - 全平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置及增长工具，优化应用内购与变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe及网页应用。每月1万美元以下跟踪收入免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购与订阅托管后端（iOS与Android）。每月2,500美元以下跟踪收入免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费版每月100次API请求

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [容器注册服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Docker互动实验室](https://labs.play-with-docker.com/) — 简单有趣的交互式Docker学习平台
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册服务

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式微博客的形式免费与世界分享您的想法、知识和故事。
* [BearBlog](https://bearblog.dev/) - 极简主义、Markdown驱动的博客和网站构建工具。
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的平台。
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件！
* [Medium](https://medium.com/) — 深入思考对您重要的事物。
* [JustBlogged](https://justblogged.com) — 支持自定义域名的免费博客平台，具备全球高速性能。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，可帮助您从网站受众中建立活跃社区。
* [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等多种网站平台提供的功能丰富的评论系统。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，"支付您认为合理的价格即可获得'一个管理员在少数域名上完全控制行为与外观'的服务"。
* [Utterances](https://utteranc.es/) - 基于GitHub issues构建的轻量级评论组件。可用GitHub issues实现博客评论、维基页面等功能！

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间及视口尺寸控制。
* [microlink.io](https://microlink.io/) – 将任意网站转化为结构化数据，包括标准化元标签、精美链接预览、爬虫功能及截图即服务。每日免费250次请求。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日可处理500个页面，自2017年持续提供。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。支持任意URL截图，快速、免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高定制化网站快照服务。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次免费截图，支持png/gif/jpg格式，包含完整页面而不仅是首页。
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关/免Mac开发iOS应用

  * [CodeMagic](https://codemagic.io/) - Codemagic 是一款专为移动应用打造的完全托管式 CI/CD 服务。您可以通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutLab](https://flutlab.io/) - FlutLab 是现代化的 Flutter 在线 IDE，为创建、调试和构建跨平台项目提供最佳环境。无需 Mac 设备即可构建 iOS 和 Android 应用。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的拖拽式界面工具，用于通过 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [JsLinux](https://bellard.org/jslinux) — 高性能x86虚拟机，可运行Linux和Windows 2000系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现"隐私设计"，使企业符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSAR）和数据映射功能。免费版提供核心同意管理功能，并为验证通过的开源项目提供更高级的免费方案。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计和多语言同意管理解决方案。免费版提供单次扫描和单个横幅服务。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理服务。免费版提供有限制的隐私/Cookie政策及Cookie横幅功能。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量范围内提供大部分功能。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费的在线数据解码与编码工具
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成美观图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台。免费开发者计划含5台设备、免费云存储，配套移动应用可用
* [Bricks笔记计算器](https://free.getbricks.app/) - 集成强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图片创建和分享代码片段，常用于Twitter或博客展示
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ等IDE的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费
* [Cronhooks](https://cronhooks.io/) - 定时或循环触发webhook。免费版支持5个临时计划
* [datelist.io](https://datelist.io) - 在线预约系统。免费每月5次预订，含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名跳转工具。免费支持5个域名及20万次月请求
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规与漏洞管理平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加免运维的webhook功能：含队列管理、退避重试和日志。免费版每日100次投递，14天留存，3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的主机信息（ASN/ISP/位置等），含多款DNS相关工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram等接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。每月300份免费
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode插件创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全代码模型
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成器
* [ray.so](https://ray.so/) - 创建精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的跳转管理。免费版含10个源和10万次月访问
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS
* [Renamer.ai](https://renamer.ai) — 支持OCR和20+语言的AI文件重命名工具。免费版每月15个文件，含桌面端批量重命名功能
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具。支持GET/POST等方法及Token认证，含基础请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/里程/门锁控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉化工具。免费版支持同时3个作品，含5次AI代码解释
* [日出日落时间](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时Feed订阅服务，免费版功能有限
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具。免费版每份问卷限10题100答
* [UUID生成器](https://newuuid.com/) - 即时生成企业级UUID/GUID/CUID等多种ID
* [Versionfeeds](https://versionfeeds.com) — 自定义软件更新RSS订阅（前3个源免费）
* [videoinu](https://videoinu.com) — 在线录屏与视频编辑
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的GPU基准测试(WebGL)
* [Webacus](https://webacus.dev) — 开发者编码/解码与数据处理工具集
* [XKit](https://xkit.io) — 包含差异对比/计算器/转换器等工具的开发者百宝箱

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [AnyDesk](https://anydesk.com) — 3台设备免费使用，会话次数和时长无限制
* [Getscreen.me](https://getscreen.me) — 2台设备免费使用，会话次数和时长无限制
* [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费3D模型及PBR材质纹理资源
* [ArtStation](https://www.artstation.com/) - 提供免费/付费2D/3D资源、音频、图标、瓦片集及游戏套件的市场平台，也可用于展示个人作品集
* [CraftPix](https://craftpix.net) — 包含2D/3D资源、音频、GUI、背景、图标、瓦片集及游戏套件的免费/付费素材库
* [Freesound](https://freesound.org/) - 采用不同CC协议的免费协作音效库
* [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可定制SVG/PNG风格图标
* [GameDevMarket](https://gamedevmarket.net) — 提供2D/3D资源、音频、GUI等免费/付费素材
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏艺术家创作的免费素材
* [itch.io](https://itch.io/game-assets) — 精灵图、瓦片集、角色包等免费/付费游戏资源
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的免费2D/3D资源、音频及UI素材
* [LoSpec](https://lospec.com/) — 像素艺术等限制性数字艺术的在线创作工具，提供大量教程和调色板资源
* [OpenGameArt](https://opengameart.org) — 音乐、音效、精灵图及GIF等开源游戏素材
* [Poliigon](https://www.poliigon.com/) - 含多分辨率选项的免费/付费纹理、模型、HDRIs和笔刷，支持Blender等软件的免费插件导出
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [360Converter](https://www.360converter.com/) - 免费的视频转文字/音频转文字/语音转文字/实时音频转文字/YouTube视频转文字/添加视频字幕工具。适用于短视频转换或简短YouTube教程制作
* [AdminMart](https://adminmart.com/) — 基于Angular/Bootstrap/React/VueJs/NextJS/NuxtJS开发的高质量免费与付费后台管理系统模板
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+种可直接用于项目的按钮样式
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS列表
* [免费代码工具](https://freecodetools.org/) — 100%免费的实用代码工具集：Markdown编辑器、代码压缩/美化、二维码生成、OpenGraph生成器、Twitter卡片生成器等
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符CA签名SSL证书，支持子域名
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Glob测试器](https://globster.xyz/) — 可视化设计测试glob模式的平台，附带学习资源
* [IT工具集](https://it-tools.tech/) - 开发者和IT从业者的实用工具合集
* [JSON查看工具](https://jsonviewertool.com/) — 浏览器内直接查看/格式化/验证/压缩/转换JSON数据（无需API密钥）
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习Linux/Kubernetes/容器/编程/DevOps/网络技术的实验平台
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具包含格式化/压缩/转换功能
* [Markdown工具](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源来开发Microsoft 365解决方案（含90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)，不含Windows）
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，用于优化慢查询
* [PageTools](https://pagetools.co/) - AI驱动的永久免费工具集，一键生成网站政策/社交媒体资料/网页内容
* [Pyrexp](https://pythonium.net/regex) — 基于网页的正则表达式测试与可视化调试工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的RHEL/OpenShift/CodeReady等红帽产品免费访问权限（仅限个人计划），另提供免费电子书
* [regex101](https://regex101.com/) — 免费的正则表达式测试调试平台，提供编辑器与学习资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储到云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库还原
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直连数据库/文件系统/应用备份到S3存储，免费版提供单资源每日备份
* [表格格式转换器](https://www.tableformatconverter.com) - 免费转换CSV/HTML/JSON/Markdown等表格格式
* [主题精选](https://themeselection.com/) — 精选高质量现代化专业后台模板
* [ToolsHref](https://toolshref.com) - 开发者工具套件：含Java代码生成（JSON转POJO/cURL转Java）、静态分析、DevOps配置生成（Docker/K8s/Nginx）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集（水印生成/屏幕录制/编解码/加密/代码格式化等），完全免费不上传云端
* [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的CSS压缩解压/图片优化/尺寸调整/大小写转换/CSS验证/JavaScript编译/HTML编辑器等网页开发工具
* [WrapPixel](https://www.wrappixel.com/) — 下载基于Angular/React/VueJs/NextJS/NuxtJS的优质免费与付费后台模板，加速应用开发！

**[⬆️ 返回顶部](#目录)**