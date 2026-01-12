# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务需要花费时间才能做出明智选择。

这里列出了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定于基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此本清单带有主观性；若未采纳您的贡献，请勿介意。

这份清单汇集了1600多位人士提交的Pull Request、评审、创意及工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或终止的免费服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅包含服务化（as-a-Service）产品，不含自托管软件。入选服务必须提供永久免费层级（而非仅限试用期）。若采用时间分段模式，免费层级至少需持续一年。同时我们从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
  * [API、数据与机器学习](#API、数据与机器学习)
  * [制品仓库](#制品仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [CDN与安全防护](#CDN与安全防护)
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
  * [电子邮件服务](#电子邮件服务)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体服务](#字体服务)
  * [表单工具](#表单工具)
  * [生成式AI](#生成式AI)
  * [基础设施即服务](#基础设施即服务)
  * [IDE与代码编辑](#IDE与代码编辑)
  * [国际手机号验证API与SDK](#国际手机号验证API与SDK)
  * [问题追踪与项目管理](#问题追踪与项目管理)
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
  * [Flutter相关与无Mac开发iOS](#Flutter相关与无Mac开发iOS)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道、WebRTC、WebSocket服务器及其他路由](#隧道、WebRTC、WebSocket服务器及其他路由)
  * [测试工具](#测试工具)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
  * [访客会话录制](#访客会话录制)
  * [网站托管](#网站托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件模拟（JavaScript实现）](#基于浏览器的硬件模拟（JavaScript实现）)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB从北美到所有区域目的地的网络出口流量（不包括中国和澳大利亚）
    * Cloud Storage - 5GB存储空间，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主要IDE，附带5GB持久存储。每周限制60小时
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出口流量
    * Google Kubernetes Engine - 一个区域集群免收集群管理费。每个用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，每月10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储空间，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月）。每月100GB出口流量
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
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，附带免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），包含有限交易的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1 GB内存
       - 4个基于Arm的Ampere A1核心和24 GB内存，可作为1个VM或最多4个VM使用
       - 当[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200 GB（用于计算）
    * 对象存储 - 10 GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20 GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10 TB出口流量，基于x64的VM限速50 Mbps，基于ARM的VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1 GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS保护，CDN附带免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

  * [Zoho](https://www.zoho.com) — 最初作为电子邮件提供商，现提供一系列服务，部分含免费计划。含免费计划的服务列表：
    * [Email](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
    * [Zoho Assist](https://www.zoho.com/assist) — 永久免费计划包含1个并发远程支持许可和5个无人值守计算机许可，适用于专业和个人用途
    * [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储
    * [Docs](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储。捆绑Zoho Office套件(Writer, Sheets & Show)
    * [Projects](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同计划
    * [Connect](https://zoho.com/connect) — 25用户免费团队协作，含3个群组、3个自定义应用、3个看板、3个手册、10个集成以及频道、活动和论坛
    * [Meeting](https://zoho.com/meeting) — 最多3名会议参与者和10名网络研讨会参与者
    * [Vault](https://zoho.com/vault) — 个人密码管理
    * [Showtime](https://zoho.com/showtime) — 支持最多5名参与者的远程培训会议软件
    * [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
    * [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，ZIP备份，RSS & Atom订阅，访问控制和可定制CSS
    * [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅免费循环计费管理，支付托管由Zoho完成，存储最近40个订阅指标
    * [Checkout](https://zoho.com/checkout) — 3个页面和最多50次支付的产品计费管理
    * [Desk](https://zoho.com/desk) — 3个客服人员免费客户支持管理，含私有知识库和邮件票据。与[Assist](https://zoho.com/assist)集成支持1名远程技术员和5台无人值守计算机
    * [Cliq](https://zoho.com/cliq) — 100GB存储的团队聊天软件，无限用户，每个频道100用户，SSO
    * [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建工具
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
     * [Bookings](https://zoho.com/bookings) - 预约排程

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一台部署服务器、一个静态站点），Cloud 66 提供构建、部署和扩展云应用所需的一切，无需操心"服务器事务"。
  * [deployment.io](https://deployment.io) - 帮助开发者在 AWS 上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务及环境，每月提供 10 次免费任务执行（含预览和自动部署功能）。
  * [Pulumi](https://www.pulumi.com/) — 现代化基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施。
  * [scalr.com](https://scalr.com/) - Terraform 自动化协作平台（TACO），通过分层配置模型、OPA 集成和完整 Terraform CLI 支持增强基础设施协作管理。所有功能开放使用，免费版每月支持 50 次运行（无 SSO 附加费用）。

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公共及私有Git仓库，提供CI/CD流水线功能
  * [Codeberg](https://codeberg.org/) — 免费为开源项目提供无限量公共及私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包与容器托管、项目管理及问题追踪功能
  * [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件托管平台，包含CI、静态页面、项目页面和问题追踪功能
  * [GitGud](https://gitgud.io) — 无限量私有及公共仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD功能
  * [GitHub](https://github.com/) — 无限量公共仓库及私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包与容器托管、项目管理及AI Copilot功能
  * [gitlab.com](https://about.gitlab.com/) — 最多支持5名协作者的无限量公共及私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理及问题追踪功能
  * [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制系统
  * [Pagure.io](https://pagure.io) — 面向FOSS许可项目的免费开源代码协作平台，基于Git构建
  * [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统，基于补丁理论设计，易学易用。解决git/hg/svn/darcs的诸多问题
  * [projectlocker.com](https://projectlocker.com) — 1个免费私有项目（支持Git和Subversion），50 MB存储空间
  * [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公共及私有仓库
  * [savannah.gnu.org](https://savannah.gnu.org/) - GNU项目专用的自由软件协作开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU项目专用的自由软件协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [Abstract API](https://www.abstractapi.com) — 提供多种用途的API套件，包括IP地理定位、性别检测和电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫工具、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图片和三个模板。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题的根因分析。免费支持最多两个模型。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的逻辑、CRUD和有状态模拟、代理和CORS管理的即时服务器，以加速集成和测试。免费计划每天包含50个请求，并提供公共仪表板/端点，任何拥有仪表板URL的人都可以查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月最多10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费计划每月1k积分，相当于1k并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1k请求。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月包含500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月包含100次调用。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层每月包含100次请求，覆盖所有9个端点。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供广泛的API库访问，包括文档转换、病毒扫描等，每月600次调用，仅限北美AZ，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据溯源，覆盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可以从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLMs的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限制为一个用户、一个数据连接、一个数据源和一个数据目标。还需要手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月包含100个PDF和三个模板。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储中访问数据，将其组织成一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制1,000次查询。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月包含10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月包含5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。Postman式界面在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月包含100次运行。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
  * [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含10GB存储和每月120小时运行时间。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型和每个模型10个表。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每天每个IP 1k请求。CC-BY 4.0许可下的精简数据库也免费。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜，一个SDK搞定。免费计划每月最多10个活跃用户（MAU），最多跟踪4张脸。
  * [Deepnote](https://deepnote.com) - 新的数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费层包括无限个人项目、无限基础机器（5GB RAM和2vCPU）和最多3个编辑的团队。
  * [DiffJSON](https://diffjson.com) - 在线工具，用于比较两个JSON数据结构的差异，帮助快速定位JSON数据中的不同之处。
  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据，用于构建与Covid-19相关的实用应用。
  * [Doczilla](https://www.doczilla.app/) — SaaS API，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月允许250个文档。
  * [Doppio](https://doppio.sh/) — 托管API，使用顶级渲染技术生成和私有存储PDF和截图。免费计划每月允许400个PDF和截图。
  * [drawDB](https://drawdb.app/) — 免费开源的在线数据库图表编辑器，无需注册。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API生成PDF文档。免费计划每月允许50次API调用，并访问模板库。

  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，支持SDK和无代码集成。免费版每月250页，不限用户数和3个模板。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
  * [Financial Data](https://financialdata.net/) - 股票市场和金融数据API。免费版每天允许300次请求。
  * [FormatJSONOnline.com](https://formatjsononline.com) - 一款基于浏览器的免费工具，可即时格式化、验证、比较和压缩JSON数据。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 筛查订单交易中的信用卡支付欺诈。该REST API会根据订单输入参数检测所有可能的欺诈特征。免费Micro版每月500笔交易。
  * [FreeIPAPI](https://freeipapi.com) - 面向商业和非商业用户的免费、快速且可靠的IP地理位置API，支持JSON格式。
  * [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP地理位置API，免费版每天2,000次请求。
  * [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版最多支持5个项目。
  * [Hook0](https://www.hook0.com/) - Hook0是开源的Webhooks即服务(WaaS)，帮助在线产品轻松提供Webhooks。免费版每天可分发100个事件，保留7天历史记录。
  * [Hoppscotch](https://hoppscotch.io) - 一款免费、快速且美观的API请求构建器。
  * [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费版每月3万输入字符。
  * [Insomnia](https://insomnia.rest) - 开源的API客户端，用于设计和测试API，支持REST和GraphQL。
  * [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问70多个（云）平台，如Exact Online、Twinfield、ActiveCampaign或Visma。包括数据复制和交换。开发者和实施顾问可免费使用特定平台，但有数据量限制。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理位置API，免费1,000次请求。
  * [IP Geolocation](https://ipgeolocation.io/) — IP地理位置API，开发者永久免费版每天1,000次请求。
  * [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，免费版每分钟同一IP地址限45次请求。
  * [IP.City](https://ip.city) — 每天100次免费IP地理位置请求。
  * [IP2Location.io](https://www.ip2location.io/) — 免费增值、快速且可靠的IP地理位置API。获取城市、坐标、ISP、ASN等数据。免费版每月5万积分。IP2Location.io还提供每月500次免费WHOIS和托管域名查询。查看域名注册详情并查找特定IP上托管的域名。升级付费计划可获取更多功能。
  * [ipaddress.sh](https://ipaddress.sh) — 以不同[格式](https://about.ipaddress.sh/)获取公共IP地址的简单服务。
  * [ipapi.is](https://ipapi.is/) - 开发者专为开发者打造的可靠IP地址API，具备最佳的主机检测能力。免费版无需注册即可进行1,000次查询。
  * [ipapi](https://ipapi.co/) - Kloudend, Inc提供的IP地址定位API，基于AWS构建，深受财富500强信赖。免费版每月3万次查询（每天1,000次），无需注册。
  * [ipbase.com](https://ipbase.com) - IP地理位置API，永久免费版每月150次请求。
  * [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月5万次）的IP地址数据API。提供地理位置、公司、运营商、IP范围、域名、滥用联系人等详细API。所有付费API均可免费试用。
  * [IPLocate](https://www.iplocate.io) — IP地理位置API，免费版每天1,000次请求。包括代理/VPN/主机检测、ASN数据、IP到公司等。IPLocate还提供可下载的IP到国家和IP到ASN数据库，支持CSV或GeoIP兼容的MMDB格式。
  * [IPTrace](https://iptrace.io) — 极其简单的API，为您的业务提供可靠且实用的IP地理位置数据，每月5万次免费查询。
  * [JSON IP](https://getjsonip.com) — 返回请求客户端的公共IP地址。免费版无需注册。通过CORS，可直接从浏览器使用客户端JS请求数据。适用于监控客户端和服务器IP变化的服务。无限请求。
  * [JSON to Table](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
  * [JSON2Video](https://json2video.com) - 视频编辑API，可通过编程或无代码方式自动化视频营销和社交媒体视频制作。
  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，并自定义HTTP状态码、头部和响应体。
  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss是一款强大的在线JSON查看器、编辑器和验证器。格式化、可视化、搜索和操作JSON数据，支持AI修复、树形视图、表格视图、12+编程语言的代码生成，以及JSON到CSV、XML、YAML、属性文件等的转换。
  * [KillBait API](https://killbait.com/api/doc) - KillBait API允许用户提交URL进行内容评估，检测潜在点击诱饵并对文章分类。API设计适用于中等发布频率，限制为每小时1次提交，每天10次。媒体合作伙伴可申请更高限制。
  * [Kreya](https://kreya.app) — 免费的gRPC GUI客户端，用于调用和测试gRPC API。可通过服务器反射导入gRPC API。
  * [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知客户。免费版每月1,000次登录。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费API层每天允许100次API请求。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠且快速5倍以上地交付AI代理。独立开发者和小团队（3席位）永久免费。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，如元标签标准化、美观链接预览、爬取能力或截图服务。每天50次免费请求。
  * [Mintlify](https://mintlify.com) — API文档的现代标准。美观且易于维护的UI组件、应用内搜索和交互式 playground。免费支持1名编辑。
  * [MockAPI](https://www.mockapi.io/) — MockAPI是一款简单工具，可快速模拟API、生成自定义数据并通过RESTful接口执行操作。MockAPI旨在用于原型设计、测试和学习。免费版每个项目支持2个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly是一款值得信赖的开发工具，用于API模拟和功能标志管理。通过直观界面快速生成和控制模拟API。免费版每天500次请求。
  * [Mocko.dev](https://mocko.dev/) — 代理您的API，选择云端要模拟的端点并检查流量，完全免费。加速开发和集成测试。

  * [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取JSON格式结果。开发者每日可免费查询100次，文章数据有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 将图像和PDF文件解析为JSON文本结果的OCR API。每月25,000次免费请求，文件大小限制为1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF和电子邮件中提取数据。AI驱动，提供完整API访问权限。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，包含可视化模板编辑器、HTML转PDF、动态数据集成和PDF渲染API。免费方案提供1个模板和每月100次PDF生成。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者专用PDF生成API，提供类似Stripe的文档说明，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转换为PDF。每月100次免费转换。
* [Pixela](https://pixe.la/) - 免费的时间流数据库服务，所有操作通过API完成，支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用Postman简化工作流并更快构建更好的API，该协作平台永久免费提供应用功能，云端功能在限制内也永久免费。
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化全功能平台。免费方案包含5个工作流部署和每月500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - Apache Superset托管服务。5人以下团队永久免费，包含无限仪表盘/图表、无代码图表构建器和协作式SQL编辑器。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。在rapidapi.com上提供每月1万次请求的免费层级。
* [Reducto](https://reducto.ai) - 将非结构化文档(PDF/XLSX/JPG等)转为结构化JSON数据，解析PDF表单。免费层含1.5万积分和按量付费选项。
* [Rendi](https://rendi.dev) - FFmpeg REST API，无需管理基础设施即可在线运行FFmpeg。免费层包含月度处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建接收HTTP请求的免费端点，记录所有请求内容及标头，方便观察webhook等服务的调用情况。
* [ROBOHASH](https://robohash.org/) - 根据任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，突破抓取限制/验证码。每月前100次成功抓取免费（含JavaScript渲染）。
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome抓取API与免费代理服务，支持JS渲染/高级轮换代理/CAPTCHA绕过。免费1万API积分。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API，返回Google/YouTube等平台的结构化JSON结果。免费方案每月100次成功调用。
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费方案每表包含1,000行。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费层含100次云抓取额度。
* [Siterelic](https://siterelic.com/) - 提供网站截图/TLS扫描/DNS查询等功能的API。免费层每月100次请求。
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，免费层含300处理单元/浏览器上传/数据隔离等功能。
* [Sofodata](https://www.sofodata.com/) - 从CSV创建安全RESTful API，加速应用开发。免费方案含2个API和2,500次调用/月，无需信用卡。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含格式化/验证、正则测试、假数据生成和交互式数据库沙盒。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板自动生成图像，免费层每月50张。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送5万条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与研究API，可整理研究成果。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费查询，提供国家/城市等位置信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API，核心功能无限免费使用。
* [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 免费天气API，提供全球精准预报/历史数据/天气监测方案。
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，免费层含25万请求/月的高级日志/文档/调试功能。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API，免费方案无限调用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API，每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，整合AI模型提升预报精度。免费层每月1万次调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析/Chrome渲染/代理的简易抓取API，每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台，免费层含100GB存储（仅限个人项目）。
* [What The Diff](https://whatthediff.ai) - AI代码审查助手，免费层每月2.5万token（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库。
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月3万次调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器/住宅IP的抓取API。每月1,000次免费调用，学生/非营利组织可获额外额度。

  * [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证服务。每月提供1万次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持从设计、构建到边缘部署的全流程。可为任意API快速添加密钥认证、速率限制、开发者文档和商业化功能。原生支持OpenAPI，完全可编程（基于Web标准API和Typescript）。免费版包含10个项目、不限量生产级边缘环境、每月100万次请求和10GB出口流量。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公共制品仓库。公开项目免费使用。
* [jitpack.io](https://jitpack.io/) — 面向GitHub上JVM和Android项目的Maven仓库，公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划包含：公开项目、5GB存储、基础实例。
* [RepoFlow](https://repoflow.io) - 简化npm、PyPI、Docker、Go、Helm等包管理。免费版提供10GB存储、10GB带宽、100个软件包、不限用户数的云托管方案，或仅供个人使用的自托管方案。
* [RepoForge](https://repoforge.io) - 支持Python、Debian、NPM软件包和Docker镜像的私有云托管仓库。开源/公开项目可享免费计划。
* [repsy.io](https://repsy.io) — 提供1GB免费空间的私有/公共Maven仓库。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人及团队协作
* [BookmarkOS.com](https://bookmarkos.com) - 一体化书签管理工具，集成标签页管理和任务管理，提供可定制的在线桌面环境及文件夹协作功能
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费无限用户，完整历史记录和集成支持，并提供可自托管的开源版本
* [Calendly](https://calendly.com) — 智能会议排期工具。免费版支持1个日历连接和无限次会话，提供桌面端和移动端应用
* [cally.com](https://cally.com/) — 轻松为会议找到最佳时间，适用于各种规模团队
* [Chanty.com](https://chanty.com/) — Slack的替代方案，小团队（10人内）永久免费，包含无限公私对话、历史记录搜索、1对1语音通话、语音留言、10个集成和20GB团队存储
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，基础功能全免费，支持每个工具自动保存一条记录，标准处理速度及社区支持
* [Discord](https://discord.com/) — 支持公私聊天的通讯平台，具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Dubble](https://dubble.so/) — 免费分步指南创建工具，支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作工具，支持IDE结对编程、终端共享、语音视频及屏幕共享，小团队免费
* [element.io](https://element.io/) — 基于Matrix的去中心化开源通讯工具，提供群聊、私信、加密文件传输、音视频通话及多服务集成
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，个人用户免费，提供2GB存储空间
* [Fibo](https://fibo.dev) - 免费在线敏捷团队故事点估算工具，支持无限成员实时参与
* [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理平台，免费版支持公开看板、Webhook设置、卡片标记和无限用户（最多1000个条目）
* [flat.social](https://flat.social) - 可定制的团队会议虚拟空间，免费支持8人同时在线
* [flock.com](https://flock.com) — 高效团队通讯工具，免费无限消息、频道、用户及应用集成
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台，免费计划面向独立开发者
* [GitDailies](https://gitdailies.com) - GitHub提交和PR活动日报工具，免费版支持3个仓库和3个警报配置
* [gitter.im](https://gitter.im/) — GitHub社区聊天工具，25人以下团队免费使用公私聊房间
* [gokanban.io](https://gokanban.io) - 免注册语法看板工具，完全免费无限制
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown写作工具，私有笔记协作人数受限
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [Huly](https://huly.io/) - 全能项目管理平台（替代Linear/Jira/Slack/Notion/Motion），免费版提供10GB存储和10GB音视频流量
* [Keybase](https://keybase.io/) — 开源的Slack替代方案，为家庭/社区/企业提供安全通讯
* [Linkinize](https://linkinize.com) — 团队书签管理工具，免费版支持4个工作区和10名成员
* [Lockitbot](https://www.lockitbot.com/) — Slack内共享资源预定工具，免费版支持2个资源锁定
* [meet.jit.si](https://meet.jit.si/) — 一键开启免费视频会议及屏幕共享
* [Miro](https://miro.com/) - 企业级在线白板协作工具，提供免费计划
* [Notion](https://www.notion.so/) - 集成笔记/任务/数据库的多功能协作平台，支持Markdown和跨平台访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具，免费版支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式代码面试平台，含视频聊天、画板和在线编译器
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密的简易粘贴站
* [Pastefy](https://pastefy.app/) - 美观的加密粘贴工具，支持多标签、API和高亮编辑器
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，提供直观界面和有价值的数据统计
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名和2FA验证的密码管理器，全平台可用
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VSCode的AI增强代码评审平台
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，无限用户和历史消息
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间追踪工具，免费版支持10名用户
* [Raindrop.io](https://raindrop.io) - 全平台书签管理工具，免费无限书签和协作
* [Revolt.chat](https://revolt.chat/) — 尊重隐私的Discord开源替代品，所有功能永久免费
* [Rocket.Chat](https://rocket.chat/) - 开源通讯平台，支持全渠道消息、Matrix联邦桥接和完整历史记录
* [ruttl.com](https://ruttl.com/) — 网站/PDF/图片的多功能数字反馈收集工具

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步及讨论。云版本仅提供1GB空间
* [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟、画布或变通方案。完全可用的免费套餐。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多10名用户免费。
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。您能追踪上游服务商的状态页吗？
* [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作工具。免费版支持3个面板墙、无限用户和1GB存储。
* [StreamBackdrops](https://streambackdrops.com) — 视频会议高清虚拟背景库。为Zoom、Teams和Google Meet提供专业背景。无需注册，个人使用免费。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一站式项目管理应用。
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持带泳道功能的看板和完整Scrum实现，含时间追踪功能。免费支持5用户和3个项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程。包含面向远程团队的完整休假管理功能。5人以下小团队免费。
* [Telegram](https://telegram.org/) — 为需要快速可靠通讯的用户提供消息与通话服务。大群组、用户名、桌面端和强大文件分享功能适合企业用户和小团队。
* [Tencent RTC](https://trtc.io/) — 腾讯实时音视频(TRTC)提供群组音视频通话解决方案。首年每月1万分钟免费。
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费的时间追踪软件。轻松与Jira、Trello、Asana等项目管理工具集成。
* [tldraw.com](https://tldraw.com) — 免费开源白板与图表工具，含智能箭头、吸附、便利贴和SVG导出功能。支持多人协作编辑。另有官方免费VS Code扩展。
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输分享界面。无需订阅即可发送照片、视频等大文件。
* [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织可享Nano套餐。
* [twist.com](https://twist.com) — 异步友好的团队沟通工具，保持对话条理化。提供免费无限量套餐，合格团队可享折扣。
* [userforge.com](https://userforge.com/) - 互联在线的用户画像与场景映射工具。保持设计与开发同步，免费支持3个画像和2名协作者。
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [Webex](https://www.webex.com/) — 视频会议免费套餐支持100人参会，单次会议40分钟。
* [Webvizio](https://webvizio.com) — 网站反馈工具与Bug报告系统，直接在网页应用/图片/PDF/设计文件上协同处理开发任务。
* [whereby.com](https://whereby.com/) — 一键开启视频对话（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，通过精简Python/Typescript脚本快速构建生产级多步骤自动化与内部应用。免费用户最多可创建/加入3个非高级工作区。
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频配额且含品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 简洁的文件分享服务。支持5GB内无限文件与任意数量接收方。
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。超过5GB的文件采用点对点传输。
* [zoom.us](https://zoom.us/) — 安全的视频与网络会议服务。免费版单次会议限40分钟。
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版含1万条历史消息搜索和5GB文件存储。另提供可自托管的开源版本。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区版包含1个空间、5个用户、2.5万条记录、48种内容类型和2种语言设置。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月流量和2.5万次API调用/月。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层。基于GraphQL的CMS，基础层每月10万次API调用。
* [Hygraph](https://hygraph.com/) - 小型项目免费层。GraphQL优先API，告别传统方案，采用GraphQL原生无头CMS，实现全渠道内容API优先交付。
* [Prismic](https://www.prismic.io/) — 无头CMS。带全托管可扩展API的内容管理界面。社区计划为单用户提供无限API调用、文档、自定义类型、资源和多语言支持。开源内容项目可申请更大免费计划。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。无限项目数。每个项目免费包含无限管理员用户、3个普通用户、2个数据集、50万次CDN API请求、10GB带宽和5GB资源存储。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可创建精美商业网站。提供免费自定义域名，无需信用卡。
* [Squidex](https://squidex.io/) - 小型项目免费层。API/GraphQL优先。开源且基于事件溯源架构（自动记录每次变更）。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。社区免费版包含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持（无限语言/地区）、资源管理器（2500个资源）、图片优化服务、搜索查询、Webhook及250GB/月流量。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git驱动的无头CMS，支持Markdown、MDX和JSON格式。基础版免费支持2个用户。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费层包含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制——完全自主掌控网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

* [Appinvento](https://appinvento.io/) — 免费的无代码应用构建平台。提供自动生成的后端源代码完全访问权限，支持无限量API和路由。免费方案包含3个项目及5张数据表。
* [DhiWise](https://www.dhiwise.com/) — 将Figma设计稿转换为动态Flutter和React应用。其代码生成技术专为优化生产级移动端/网页体验的开发流程而设计。
* [Karbon Sites](https://www.karbonsites.space) — 基于AI的网站构建器和编辑器，可通过文字描述、草图或简历生成生产级前端代码。支持原生Android（APK）导出，免费版每月提供5次生成额度（使用自定义Gemini API密钥可无限生成）。
* [Metalama](https://www.postsharp.net/metalama) — 专为C#设计的工具，在编译时动态生成样板代码以保持源码整洁。开源项目可免费使用，商业友好型免费方案最多支持3个切面。
* [Supermaven](https://www.supermaven.com/) — 面向VS Code/JetBrains/Neovim的高速AI代码补全插件。免费版提供无限量的行内补全功能，主打超低延迟体验。
* [v0.dev](https://v0.dev/) — Vercel推出的React代码生成工具，基于shadcn/ui和Tailwind CSS生成可直接复用的代码。采用积分制，初始赠送1,200积分，每月免费续赠200积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、评审和部署工作流，提供单用户免费账户及100MB存储空间的1个代码仓库
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库永久免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公有仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪工具，通过精准指标预防性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析工具，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库与SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与深度建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化头号静态代码分析器，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评注，开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公有或个人仓库免费
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码审查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言语义的GitHub PR与提交差异分析，公有仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源码分析，开源免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具，提供预设模板和链接功能。
* [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站搜索您的项目名称可用性。
* [tickgit.com](https://www.tickgit.com/) — 展示代码中的`TODO`注释（及其他标记），帮助识别需要后续改进的代码区域。

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，加速迭代周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台持续交付服务，开源项目免费
* [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD平台。免费版含200次构建/月，单次构建10分钟时长和2名团队成员。开源项目可享45分钟构建时长，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
* [Buildkite](https://buildkite.com) CI流水线免费支持3用户和每月5000分钟任务时长。测试分析免费开发者层含10万次测试执行/月，开源项目享有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps工具。20用户及10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 全功能免费方案，支持GitHub/GitLab/BitBucket仓库的托管式CI/CD服务。含多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。免费额度含6000分钟/月执行时长，无限协作者，私有项目30个并行任务，开源项目最高8万构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（30构建分钟/月）
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版支持1用户和1个应用环境。
* [Make](https://www.make.com/en) — 通过可视化界面连接应用并自动化工作流的工具。免费版支持公开GitHub仓库，含100MB存储、1000次操作和15分钟最小间隔的基础套餐。
* [Mergify](https://mergify.com) — GitHub工作流自动化与合并队列工具 — 公开GitHub仓库免费
* [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、任务分布式执行和自动化E2E测试分割加速Monorepo项目的CI流程。免费版支持30名贡献者，含15万点数的额度。
* [RunMyJob](https://runmyjob.io) - 通过实时扩展的Spike实例智能运行GitHub Actions和GitLab CI流水线。免费层含400 vCPU分钟、800 GB分钟和10个并发高性能任务（每任务12 vCPU+32GB内存）。
* [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub Actions，每月赠送3000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块仓库、ChatOps集成、Open Policy Agent持续合规、SAML 2.0单点登录，公共工作池访问（200分钟/月）。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建独立VM并通过专属URL访问应用，无限公开/私有仓库，最高2GB VM规格。
* [Terramate](https://terramate.io/) - 面向Terraform/OpenTofu/Terragrunt等IaC工具的管理编排平台。2用户内免费且包含全功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先策略的Terraform自动化工具，支持PR驱动工作流、自托管运行器项目隔离和分层有序操作。3用户内免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Appetize](https://appetize.io) — 直接在浏览器中测试您的Android和iOS应用，使用这款基于云的Android手机/平板模拟器和iPhone/iPad模拟器。免费套餐包含每月两个并发会话，每次使用30分钟。应用大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。您可以在自己的计算机上免费运行无限测试。额外付费可获得云监控和CI/CD集成。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分价格监控您的API和应用。采用"监控即代码"工作流和Playwright驱动。开发者享有慷慨的免费套餐。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否为给定域启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress测试运行器始终免费开源，无限制。Cypress仪表盘对开源项目免费，最多支持5名用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有操作步骤并生成脚本，免费版功能较少
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐支持最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，可帮助不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（+免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API的E2E测试（KTests）和模拟或存根（KMocks）。开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户，持续60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为您的Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐提供每天10次测试、每周5次实验和每月15GB最大数据摄入量。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和无限项目，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限制为iOS和Android各10次测试，但包含付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录包含网络和控制台日志的会话。免费套餐最多创建10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，允许您在Chrome上运行无限测试，无需注册，每次测试运行最多3分钟。发现错误？您可以复制测试的唯一URL向开发人员展示如何重现错误。
  * [SSR (服务器端渲染)检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和将手动测试实现为代码的框架，使用GitHub。服务对[开源免费](https://github.com/marketplace/testspace-com)，每月450次结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行测试框架集成。开源软件开发者、个人、教育工作者和初创小团队可以请求超出基本免费项目的折扣和免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，并使用集成工具、组件和设计系统更快迭代、更好设计并简化开发流程。无限项目，五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查Webhook和HTTP请求。完全免费，您可以创建无限URL并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证Webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费网络和服务器工具。
  * [kogiQA](https://kogiqa.com) — 一款无需选择器的Web UI自动化工具。每位开发者每月免费获得500次操作。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费计划包含两名用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理。可搜索证书透明度日志。Beta版后免费提供3个证书和1个用户。
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生开发的友好安全平台，防止.NET和Java应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web应用，无需复杂工具或编程语言即可分析编解码数据。堪称密码学与加密的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及企业策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动化依赖项更新，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django站点的安全漏洞。源自Pony Checkup站点分支。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到多种云服务商。免费版支持5名用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 快速安全地同步.env文件。杜绝通过Slack/邮件等不安全渠道共享.env文件，永不再丢失重要配置。免费支持最多3名团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复，杜绝源代码泄露。扫描350+种密钥和敏感文件——25人以下团队免费使用。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费检索2000万条GitHub公开仓库、代码片段、议题和评论中的泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — 在线漏洞扫描器，支持Web应用/服务器/网络扫描。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，集中管理开发密钥：从本地开发到第三方服务的生产环境。最多5名开发者免费。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准支持：IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限数量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 全能SSL工具包，提供私钥/CSR生成器、SSL证书解码器、证书匹配器和SSL订购功能。支持通过CNAME记录（而非TXT记录）从Let's Encrypt/Google Trust/BuyPass生成免费SSL证书。
  * [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒和PHP服务器防火墙(WAF)。注册用户可获邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据已在GitHub公开(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目不限数量。
  * [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，审计OWASP风险
  * [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案。包含应用和防火墙CLI工具，防护脆弱/恶意依赖项。检测70+种供应链风险指标。
  * [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测修复安全威胁。通过简洁高效的方案保护项目。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置/证书/链等，不限于HTTPS
  * [Virgil Security](https://virgilsecurity.com/) — 端到端加密、数据库保护、物联网安全等工具与服务。250用户以下应用免费。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [360用户名搜索](https://360username.com/) - 免费工具，可在90多个社交平台搜索用户名查找匹配的个人资料。
* [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费支持1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费支持1000名MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000名MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用添加无密码登录、OTP、2FA和SSO功能。包含完整前端。免费支持5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度权限控制，免费支持100个活跃主体/月。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100个用户和1个领域(realm)。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费支持7,500名活跃用户/月，50个租户(含5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。提供7,500名免费MAU的起步方案。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，涵盖认证与授权。免费支持5,000名MAU，并提供开源自托管选项。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等应用实现无密码认证，仅需几分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100名MAU。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，支持无限团队成员、200名日活用户和25,000次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展微服务架构。提供实时更新和无代码策略UI。免费支持1,000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费领域支持1,000名用户和10个SSO连接，采用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [PropelAuth](https://propelauth.com) - 通过少量代码即可面向各种规模企业销售产品。免费支持200名用户和10,000封事务邮件(带"由PropelAuth提供支持"水印)。
* [Stack Auth](https://stack-auth.com) - 不落俗套的开源认证方案。最开发者友好的解决方案，5分钟即可上手。可免费自托管，或选择含10,000名免费MAU的SaaS托管版。
* [Stytch](https://www.stytch.com/) - 一体化平台，提供认证与防欺诈的API和SDK。免费方案包含10,000名MAU、无限组织、5个SSO/SCIM连接和1,000个M2M令牌。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，可快速启动同时保持对用户体验的控制。免费支持5,000名MAU。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万名MAU。包含邮箱+密码、社交账号、Magic Auth、MFA等多种认证方式。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费支持25,000次认证请求，包含所有安全功能(OTP、无密码认证、策略等功能无付费墙)。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费版包含5个应用、50次月下载量，最大文件体积100MB。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版支持应用上传、密码保护链接、1天有效期、10次安装。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发平台。免费版包含1个应用项目、3个应用版本、500MB存储空间及每月100次应用安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版支持无限次上传、私有链接，访客链接2天有效期，注册用户60天有效期。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限次下载、高速下载和无限次上传功能。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例  
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM DevOps方案。免费支持100台设备，含1个用户许可证和25MB应用存储空间  
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群，无限设备免费基础版  
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器，每月免费25次git部署  
* [ploi.io](https://ploi.io/) - 服务器管理工具，轻松部署站点。免费支持1台服务器  
* [runcloud.io](https://runcloud.io/) - 专注PHP项目的服务器管理，免费支持1台服务器  
* [serveravatar.com](https://serveravatar.com) — 带自动化配置的PHP服务器监控管理，免费支持1台服务器  
* [xcloud.host](https://xcloud.host) — 可视化服务器管理部署平台，免费版支持1台服务器  

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐含每月300万条消息、100个峰值连接数和100个峰值频道
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。"小狐猴"套餐：每月最多100万条消息、20个并发连接、100个队列、1万条队列消息，支持多可用区节点部署
* [courier.com](https://www.courier.com/) — 统一API集成推送、应用内消息、邮件、聊天、短信等渠道，含模板管理功能。免费套餐每月1万条消息
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级部署的可扩展安全MQTT代理服务。永久免费100万会话分钟/月（无需信用卡）
* [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件/推送/SMS/产品导览/横幅等）。每月最多1,000名活跃用户免费
* [engagespot.co](https://engagespot.co/) — 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月1万条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理服务。永久免费连接100台设备（无需信用卡）
* [httpSMS](https://httpsms.com) - 将安卓手机作为短信网关收发短信。每月免费200条收发额度
* [knock.app](https://knock.app) – 开发者通知基础设施。单次API调用支持应用内/邮件/SMS/Slack/推送等多渠道发送。免费套餐含每月1万条消息
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月1万条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件/SMS/站内信/应用内推送等渠道。免费套餐含每月3万条通知（保留90天）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，每日免费50条消息（限1设备1应用）
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务处理（单事务可含多条消息）
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和20万条消息/日
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和10万次事件/日
* [SMSGate](https://sms-gate.app) - 安卓™短信网关，通过云端路由收发短信。完全免费的云服务（建议日超1万条时通知以保障服务质量）
* [SuprSend](https://www.suprsend.com/) - 以API优先的智能通知平台，统一处理事务性/定时/互动通知。免费套餐含每月1万条通知，支持摘要/批次/多渠道/租户等高级功能
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure。永久免费套餐含4KB消息大小、50个活跃连接和5GB月流量
* [webpushr](https://www.webpushr.com/) - 网页推送通知服务。免费支持1万订阅用户，推送数量无限制

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [log.dog](https://log.dog/) — LogDog是一款远程调试/日志记录SDK（支持iOS和Android），提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理服务。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储空间，15天存储保留期和7天检索期
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人的免费工具
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，适用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管的本地化引擎每月免费使用10,000词。
* [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 免费1,000条源语言字符串，无限语言，无限贡献者，初创企业和开源优惠
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（包含2名用户、500个键和无限项目）。
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
  * [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面。
  * [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测点，无限制用户、仪表盘和告警规则。
  * [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案包含1个用户、1万次API及网络检查/1500次浏览器检查运行。
  * [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据。
  * [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监测点。
  * [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
  * [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监测点，推荐他人注册可获得更多。
  * [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测点，5分钟间隔。支持邮件、Slack告警。
  * [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助厘清云基础设施开支。每月Google Cloud Platform消费不超过5000美元可免费使用。
  * [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控——永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
  * [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版：3用户、10个仪表盘、100条告警，Prometheus和Graphite指标存储（1万条时间序列，14天保留期），Loki日志存储（50GB日志，14天保留期）。
  * [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台任务。免费支持最多20个检查点。
  * [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页聚合器——永久免费提供20个监测点和2个通知渠道（Slack与Discord）。
  * [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费层。
  * [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费支持无限制订阅者和团队。
  * [linkok.com](https://linkok.com) - 在线坏链检测器，100页以内的小型网站免费，开源项目完全免费。
  * [loader.io](https://loader.io/) — 带限制的免费负载测试工具
  * [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控应用与技术栈，支持大规模问题诊断。开发者社区永久免费计划包含100万日志事件监控、2台主机的基础设施监控与应用性能监控。
  * [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。永久免费方案提供HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），以及2个仪表盘/状态页。
  * [netdata.cloud](https://www.netdata.cloud/) — Netdata是实时指标收集的开源工具。发展迅速，GitHub上也可找到！
  * [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师构建更完善软件。从单体到无服务器，可检测所有内容并分析、排查和优化整个软件栈。免费层每月100GB数据摄入、1个全权限用户和无限制基础用户。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站与API正常运行时间监控、定时任务监控及状态页。前5个检查点（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国与美国服务器的DNS结果和ASN信息识别DNS污染。
  * [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，免费支持最多6个监测点（每日检查）。
  * [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费。
  * [phare.io](https://phare.io/) - 正常运行时间监控免费支持10万次事件（无限制项目与状态页）。
  * [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限制检测URL，通过Discord、Slack或邮件接收宕机通知。
  * [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测点（10分钟间隔）。监控SSH、HTTP、HTTPS和任意TCP端口。
  * [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层包含1个可公开定制的状态页（SSL子域名）。开源项目与非营利组织免费提供专业版。
  * [Pulsetic](https://pulsetic.com) - 10个监测点、6个月历史正常运行时间/日志、无限制状态页和自定义域名！永久免费且无限制邮件告警。无需信用卡。
  * [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。自带Prometheus或安装一体化套件。免费层支持最多20个Kubernetes节点。通过Slack、Microsoft Teams、Discord等告警。集成PagerDuty、OpsGenie、VictorOps、DataDog等工具。
  * [Servervana](https://servervana.com) - 支持大型项目与团队的高级正常运行时间监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等。免费层包含10个HTTP监测点、1个DNS监测点和1个状态页。
  * [Simple Observability](https://simpleobservability.com) — 统一指标与日志平台的强大服务器监控，无复杂配置。1台服务器免费。
  * [sitesure.net](https://sitesure.net) - 网站与定时任务监控——免费2个监测点
  * [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
  * [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限制测试（带限制）
  * [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监测点
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS与域名监控。免费监控10台服务器、10个正常运行时间和10个域名。
  * [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标。
  * [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监测点（5分钟间隔）和可定制状态页（商用亦可）。通过邮件和Telegram享受无限制实时通知。无需信用卡即可开始。
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站（60秒间隔），公开状态页。
  * [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [Axiom](https://axiom.co/) — 提供0.5TB日志存储（保留30天），包含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务，免费额度5,000次错误/月，自托管可无限使用
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后免费额度2,000次错误/月
* [CatchJS.com](https://catchjs.com/) — 带屏幕截图和点击轨迹的JavaScript错误追踪，开源项目免费
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与可用性监控，开源项目可享免费小型企业订阅
* [Embrace](https://embrace.io/) — 移动应用监控，小团队免费额度100万用户会话/年
* [exceptionless](https://exceptionless.com) — 实时错误/功能/日志报告等，免费额度3,000事件/月/1用户，开源且支持无限量自托管
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪，兼容Sentry SDK，免费额度1,000事件/月，自托管无限制
* [honeybadger.io](https://www.honeybadger.io) — 异常/可用性/定时任务监控，小团队和开源项目免费额度12,000次错误/月
* [Jam](https://jam.dev) — 开发者友好的一键式错误报告，免费计划不限提交次数
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台，[Nordic](https://app.memfault.com/register-nordic)/[NXP](https://app.memfault.com/register-nxp)/[Laird](https://app.memfault.com/register-laird)设备免费支持100台
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费额度5,000次错误/月，不限用户数，30天数据保留
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案
* [sentry.io](https://sentry.io/) — 实时应用异常追踪，提供小型免费计划（5,000次错误/月/1用户），自托管无功能限制
* [Whitespace](https://whitespace.dev) — 浏览器内一键生成错误报告，个人用户免费计划不限录制次数

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等领域的免费认证课程
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业顶尖专家的免费短期课程，可在一小时内掌握最新生成式AI工具和技术的实践应用
* [DevNet Academy](https://devnet-academy.com/) – 为Cisco DevNet Expert/CCIE Automation认证提供的免费自学课程，涵盖Python Click和Flask-RESTx框架
* [Django教程网](https://django-tutorial.dev) - 提供Django框架的免费在线学习指南，并为用户撰写的文章提供dofollow反向链接
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费在线课程，涵盖计算机科学、工程学和数据科学等领域
* [Exercism](https://exercism.org) – 非营利组织提供的75+编程语言免费开源教育平台，配备人工指导
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，支持克隆、完整编辑和下载
* [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [全栈开放课程](https://fullstackopen.com/en/) – 大学级别的现代Web开发免费课程，涵盖React、Node.js、GraphQL、TypeScript等技术，完全在线自学
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS、JavaScript和SQL从基础到进阶的免费学习指南
* [LabEx](https://labex.io) - 通过交互式实验和真实项目培养Linux、DevOps、网络安全、编程和数据科学等技能
* [MIT开放课程](https://ocw.mit.edu/) - 提供2500+门MIT课程资料的在线出版物，向全球学习者免费分享知识。YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发全领域的免费学习路线图
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试。
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费计划包含无限域名、团队成员、Webhook和消息路由。
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名。
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡。
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费。
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名。
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录。
* [Buttondown](https://buttondown.email/) — 新闻简报服务，最多100名订阅者免费。
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly的联系表单）。
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器。
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，由roundsphere.com提供的免费服务。
* [DNSExit](https://dnsexit.com/) - 免费2个域名邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM。
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器，只是一个邮件客户端，可以从客户端直接发送邮件而不暴露凭据，免费层每月200次请求，2个邮件模板，请求最大50KB，有限的联系人历史记录。
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天300封。
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者和每月10000封邮件免费。
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证。
* [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递。
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限数量的邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD需付费，因为这些域名容易产生垃圾邮件）。
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD中的邮件功能。免费账户每天15封邮件永久有效。
* [ImprovMX](https://improvmx.com) – 免费邮件转发。
* [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过方便的Chrome扩展删除。非常适合测试注册流程。
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源并可自托管。
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费。
* [Maileroo](https://maileroo.com) - 开发者的SMTP中继和邮件API。每月5000封邮件，无限域名，免费邮箱验证、黑名单监控、邮件测试等。
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面提供服务。
* [mailchannels.com](https://www.mailchannels.com) - 邮件API，支持REST API和SMTP集成，每月最多3000封邮件免费。
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86400次）。
* [Mailchimp](https://mailchimp.com/) — 500名订阅者和每月1000封邮件免费。
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者和无限邮件以及自动化功能免费。
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费。
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封事务性邮件免费。
* [mailinator.com](https://www.mailinator.com/) — 免费的公共邮件系统，可以使用任何收件箱。
* [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每天200封发送限制）。
* [mailsac.com](https://mailsac.com) - 临时邮件测试的免费API，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）。
* [Mailtrap.io](https://mailtrap.io/) — 邮件API、SMTP，每月3500封事务性和营销邮件免费。邮件沙箱 - 用于开发的假SMTP服务器，免费计划包含1个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则。
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱。
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡。
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到服务器）。
* [Plunk](https://useplunk.com) - 每月3000封邮件免费。
* [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC每周摘要。
* [Proton Mail](https://proton.me/mail) - 免费安全的邮箱服务提供商，内置端到端加密。免费1GB存储。
* [Resend](https://resend.com) - 开发者的邮件API。每月3000封邮件，每天100封免费，1个自定义域名。
* [Sender](https://www.sender.net) 每月最多15000封邮件，最多2500名订阅者。
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费。
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费。
* [Substack](https://substack.com) — 无限免费新闻简报服务。开始收费时再付费。
* [Sweego](https://www.sweego.io/) - 欧洲开发者的邮件API。每天500封邮件免费。
* [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮件服务，支持多个邮箱和转发。
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址会更新。完全免费，无任何服务费用。
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200封邮件，检查是否为临时邮箱。
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期。
* [Tuta](https://tuta.com/) - 免费安全的邮箱服务提供商，内置端到端加密，无广告，无跟踪。免费1GB存储，1个日历（Tuta也有[付费计划](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自托管。
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持邮箱确认和一次性邮箱检测；每天25次免费验证。
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台。支持代码化配置和全类型化Typescript SDK，深度集成Next.js、React等框架。提供慷慨的免费层级和低成本扩展方案。
* [ConfigCat](https://configcat.com) - 面向开发者的功能开关服务，支持无限团队成员，提供优质支持与合理定价。免费版包含10个开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 跨Web、移动端和服务端应用的自信功能发布方案。可选择托管API、私有云部署或本地化运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，不限功能开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置平台，具备Git式版本控制和同步内存本地评估。5人团队免费使用，不限开关与测试数量。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析一体化平台。免费版提供无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Toggled.dev](https://www.toggled.dev) - 企业级多区域功能开关管理平台。免费版含10个开关、2个环境且不限请求量，包含SDK、分析面板、发布日历、Slack通知等全功能。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [Befonts](https://befonts.com/) - 提供多种独特字体，支持个人或商业用途
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [dafont](https://www.dafont.com/) - 本站所有字体均为作者原创，包含免费版、共享版、试用版及公有领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多款工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font of web](https://fontofweb.com/) - 可检测网站使用的所有字体及其应用方式
* [Font Squirrel](https://www.fontsquirrel.com/) - 精选商用免费字体库，以易用格式呈现
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的多样化可下载字体库
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，含CJK（中日韩）字体标签
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，个人和商业用途均可100%免费使用
* [Google Fonts](https://fonts.google.com/) - 通过下载或Google CDN链接快速部署网站的免费字体库

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。提供友好的现代化界面，支持与Google Sheets、Airtable、Slack、电子邮件等集成。
* [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可用于构建注册登录、用户引导、支付流程及复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集总计25条反馈。提供React和Vue组件便于集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交终端。含通知、垃圾邮件拦截和GDPR合规数据处理功能。基础用途可免费使用。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单终端，免费版每月允许100次提交。
* [Formester.com](https://formester.com) - 在网站上分享和嵌入独特风格的表单——不限表单数量或功能限制。免费版每月可获取100次提交。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾邮件防护、邮件通知及可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，每月不限单页表单数量，100次提交，含邮件通知。
* [forms.app](https://forms.app/) — 创建含条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100条回复，支持网站嵌入或链接使用。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版允许无限表单，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每月每表单限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易终端。永久免费，无需注册。
* [HeroTofu.com](https://herotofu.com/) - 含机器人检测和加密存档的表单后端。通过界面将提交转发至邮件、Slack或Zapier。可使用自有前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版可创建无限表单并收集无限提交，含预制模板、反垃圾及100MB文件存储。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单终端，特别适合静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单，每月1,000次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站上嵌入PDF编辑器，将任何PDF转为可填写表单。免费版允许无限PDF，每个PDF限3次提交。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，含250MB文件存储、Zapier集成、CSV/JSON导出、自定义重定向与响应页面、Telegram & Slack机器人及单次邮件通知。
* [staticforms.xyz](https://www.staticforms.xyz/) - 免费轻松集成HTML表单，无需服务器端代码。用户提交后，表单内容将发送至注册邮箱。
* [Survicate](https://survicate.com/) — 从所有渠道收集反馈并用单一工具发送跟进调查。通过AI自动分析反馈并提取洞察。免费版含邮件、网站、产品内或移动端调查、AI调查创建工具及每月25条回复。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Typeform.com](https://www.typeform.com/) — 在网站中嵌入设计精美的表单。免费版每表单限10个字段，每月100条回复。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版含1个活跃调查、每调查25条回复及可定制模板。
* [WaiverStevie.com](https://waiverstevie.com) - 含REST API的电子签名平台。可通过Webhook接收通知。免费版会对签署文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 无需编写后端代码的静态与JAMStack网站联系表单。免费版允许无限表单、无限域名及每月250次提交。
* [Wufoo](https://www.wufoo.com/) - 快速在网站使用的表单工具。免费版每月限100次提交。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Arize AX](https://arize.com) - 专为AI工程师和产品经理打造的AI工程平台，内置Alyx智能体，可评估和监控AI应用。免费版包含每月25,000次调用和1GB数据吞吐量  
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — 基于AI的SaaS音频处理工具，智能消除噪音和回声同时保留人声自然度。完全免费：支持MP3/WAV/FLAC格式，无需登录，一键无限次增强  
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估系统、提示词沙盒及数据管理平台。免费计划每周提供1,000条私有评估数据行  
* [Clair](https://askclair.ai/) - 临床医学AI参考工具。学生可免费使用专业套件，包含开放检索、临床摘要、药物审查、相互作用检查、ICD-10编码及管理功能，专业版提供免费试用  
* [Comet Opik](https://www.comet.com/site/products/opik/) - 全生命周期LLM应用评估测试工具 [#开源项目](https://github.com/comet-ml/opik/)  
* [Keywords AI](https://keywordsai.co) - 顶级LLM监控平台，两行代码即可调用200+模型。每月10,000次免费请求，平台功能零费用  
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，支持团队协作调试分析与迭代。永久免费版含每月50,000次观测 [#开源项目](https://github.com/langfuse/langfuse)  
* [Langtrace](https://langtrace.ai) - 开发者工具，提供LLM应用性能追踪、评估、提示管理及调试功能，基于OpenTelemetry标准实现可观测性。免费版每月50,000次追踪  
* [LangWatch](https://langwatch.ai) - LLMOps平台，帮助AI团队监控优化应用可靠性、成本及性能。通过DSPy组件实现技术与非技术团队协同调优，免费版含1,000次追踪/月及1个工作流优化器 [#开源项目](https://github.com/langwatch/langwatch)  
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000免费token额度，支持Azure OpenAI/DeepSeek/Google Gemini模型，适用于代码生成、深度研究和图像创作  
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供DeepSeek R1/V3、Llama、Moonshot等免费AI模型（含速率限制），另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型  
* [Othor AI](https://othor.ai/) - AI原生商业智能解决方案，替代Tableau/Power BI/Looker，分钟级定制分析。免费版含1个工作区5个数据源连接 [#开源项目](https://github.com/othorai/othor.ai)  
* [Pollinations.AI](https://pollinations.ai/) - 免费图像生成AI，提供API且无需注册，支持多种网站集成方案 [#开源项目](https://github.com/pollinations/pollinations)  
* [Portkey](https://portkey.ai/) - 生成式AI控制面板，含观测套件和AI网关。每月免费10,000次请求  
* [ReportGPT](https://ReportGPT.app) - AI写作助手，自带API密钥即可永久免费使用全平台功能  
* [Zenable](https://zenable.io) - 通过策略即代码自动修正Cursor/Windsurf/Copilot等工具输出以满足企业标准。免费版包含每日100次MCP服务器调用和25次GitHub自动PR审查  

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名和通用SSL证书
* [cdnjs.com](https://cdnjs.com/) — 简洁、快速、可靠的CDN服务。cdnjs作为免费开源的CDN平台，由Cloudflare提供支持，服务全球超过11%的网站
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最受欢迎的开源JavaScript库内容分发网络
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等平台
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管jQuery等流行第三方JavaScript库，方便集成到Web应用中
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费版支持最多5个用户，每日1GB流量
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [Skypack](https://www.skypack.dev/) — 纯原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub/GitLab/Bitbucket）、WordPress资源和图片提供CDN加速
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub代理服务。个人开发者免费（无技术支持）
* [UNPKG](https://unpkg.com/) — npm全库CDN服务
* [weserv](https://images.weserv.nl/) — 全球缓存图片处理服务，支持实时图片裁剪与转换

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或管理基础设施即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费预览计划包含每小时 500 次调用、每日 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中可用。
  * [anvil.works](https://anvil.works) - 仅用 Python 开发 Web 应用。免费层包含无限应用和 30 秒超时。
  * [Apply.build](https://apply.build/) — 免费构建和部署您的 GitHub 应用，提供 0.5 vCPU / 512 MiB RAM、欧洲服务器、自动防火墙、实时性能指标。支持 Node.js、Python、Go、Java、静态网站、微服务等。
  * [appwrite](https://appwrite.io) - 无限项目且无项目暂停（支持 WebSocket）和认证服务。免费层每个项目包含 1 个数据库、3 个存储桶和 5 个函数。
  * [Choreo](https://wso2.com/choreo/) - AI 原生的内部开发者平台即服务。免费层包含最多 5 个组件和每月 100 美元额度。
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限。
  * [Daestro](https://daestro.com) - 跨云提供商和本地运行计算任务。免费层包含最多 10 个并发任务运行、2 个计算实例、自托管计算、1 个云提供商、1 个容器注册表和 1 个定时任务。
  * [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的分布式系统，支持 JavaScript、TypeScript 和 WebAssembly。免费层包含每天 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – 提供 GitHub CI/CD、SSH 和 MariaDB/Postgres 数据库的 Linux 托管服务。免费版本有 1 GB 存储和每月 1 GB 网络流量限制，且仅限于免费域名。
  * [encore.dev](https://encore.dev/) — 使用静态分析提供自动基础设施、无样板代码等的后端框架。包含业余项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过 Git 推送式工作流在您自己的 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 仓库的开发者免费层。AWS 费用通过 AWS 计费，但可使用额度和 AWS 免费层。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供一个永不休眠的免费实例和一个免费层 PostgreSQL 数据库，限制为 2 个连接、10,000 行且无备份。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是一个开发者友好的无服务器平台，用于全球部署应用。无缝运行 Docker 容器、Web 应用和 API，支持基于 Git 的部署、原生自动扩展、全球边缘网络及内置服务网格和发现。免费实例可在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管 Postgres 数据库在法兰克福（德国）、华盛顿特区（美国）和新加坡可用。512MB 内存、2GB 存储和 0.1 CPU。
  * [leapcell](https://leapcell.io/) - Leapcell 是一个可靠的分布式应用平台，提供支持快速增长所需的一切。免费计划包含 10 万次服务调用、1 万次异步任务和 10 万次 Redis 命令。
  * [Northflank](https://northflank.com) — 通过强大的 UI、API 和 CLI 构建和部署微服务、任务和托管数据库。从版本控制和外部 Docker 注册表无缝扩展容器。免费层包含 2 个服务、2 个定时任务和 1 个数据库。
  * [pipedream.com](https://pipedream.com) - 为开发者构建的集成平台。基于任何触发器开发任何工作流。工作流是可免费运行的代码。无需管理服务器或云资源。
  * [Railway](https://railway.app/) - 通过基于 Git 的部署、自动 CI/CD 和内置数据库部署任何内容。免费层每月包含 5 美元额度。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — 云端 Python 应用托管。初学者账户免费，1 个 Python Web 应用位于 your-username.pythonanywhere.com 域名，512 MB 私有文件存储，1 个 MySQL 数据库。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，可快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。免费计划每月最多 3 个项目、1GB 出口流量和 300 分钟构建时间。
  * [YepCode](https://yepcode.io) - 一体化平台，在无服务器环境中连接 API 和服务。它结合了 NoCode 工具的敏捷性和优势，同时保留了使用编程语言的全部能力。免费层包含 1,000 次 yeps。
  * [Zeabur](https://zeabur.com) - 一键部署您的服务。免费支持三个服务，每月 5 美元免费额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接到您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费提供5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动和Web Baas，免费提供1GB文件存储、每月50,000次推送通知和1,000个数据对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在我们的函数运行时和托管存储上启动您的Python API，免费在我们的在线编辑器或本地使用您喜欢的工具构建和托管。
* [Claw.cloud](https://run.claw.cloud) - 一个PaaS平台，为GitHub账户超过180天的用户提供每月5美元的免费额度。非常适合托管应用、数据库等。（[免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、点对点语音和视频通话、文件附件和推送通知。适用于最多1,000名用户的应用免费。
* [convex.dev](https://convex.dev/) - 反应式后端即服务，托管您的数据（具有关系和可序列化ACID事务的文档）、无服务器函数和WebSockets以向各种客户端流式传输更新。小型项目免费 - 最多100万条记录，每月500万次函数调用。
* [ETLR](https://etlr.io) - 使用YAML定义、版本化和部署自动化脚本。拖放工具的开发者优先替代方案。可用于计划任务、AI代理和基础设施监控。免费层包括每月100积分。
* [Flutter Flow](https://flutterflow.io) — 无需编写一行代码即可构建Flutter应用UI。还提供Firebase集成。免费计划包括完全访问UI生成器和免费模板。
* [getstream.io](https://getstream.io/) — 在几小时内构建可扩展的应用内聊天、消息、视频和音频以及动态信息流，而不是几周。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费提供2个小程序。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费提供100次任务，15分钟。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费提供1GB数据存储、256MB实例、每天3,000次API请求和每天10,000次推送。（API与Parse Platform非常相似）。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包括PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000次电子邮件发送，无限联系人和访问自动预热功能。
* [paraio.com](https://paraio.com) — 具有灵活身份验证、全文搜索和缓存的后端服务API。一个应用免费，1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月最多100万条消息和100个活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月最多150万次推送免费。
* [pusher.com](https://pusher.com/beams) — 每月2,000名活跃用户的免费无限推送通知。适用于iOS和Android设备的单一API。
* [simperium.com](https://simperium.com/) — 即时自动移动数据，多平台，无限发送和存储结构化数据，每月最多2,500名用户。
* [Supabase](https://supabase.com) — 构建后端的开源Firebase替代方案。免费计划提供身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 具有身份验证、配额、监控和分析的API管理。免费云服务。
* [zapier.com](https://zapier.com/) — 连接您使用的应用以自动化任务。每15分钟5个Zap和每月100次任务。
更新时间，五个活跃的自动化，Webhooks。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。可与15+种数据库及任何API集成
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，提供可定制的移动端和Web应用。具有拖拽式界面，支持离线操作、实时位置追踪及第三方服务集成
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。单个用户免费，每月支持100万次工作流活动（[德语版本](https://www.manubes.de)）
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每个应用0.5GB存储和1GB内存。免费层还包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 面向本地或云端的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。具有高度可定制性，任何能用JavaScript和API实现的功能均可构建。免费层每月支持最多5个用户，不限应用数量和API连接
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。可连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发应用
* [UI Bakery](https://uibakery.io) — 低代码平台，加速定制Web应用开发。支持通过JavaScript、Python和SQL进行深度定制的拖拽式UI构建，提供云端和自托管解决方案。最多5个用户免费

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费网络托管，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。支持自定义Web服务器，可通过FTP、WebDAV和SSH访问。包含邮箱、邮件列表和应用安装器。免费版不支持自定义域名。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管+免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建Web和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 面向Web3前端的去中心化网络托管平台，专注于提升在线时间与安全性，并为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform Starter层级免费构建并部署三个静态站点。
* [FreeFlarum](https://freeflarum.com/) — 社区支持的免费Flarum托管，支持最多250名用户（捐赠可移除页脚水印）。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，支持自定义域名与SSL，每月100GB带宽，260+个Cloudflare CDN节点。
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，每个项目500MB RAM，SFTP支持1GB磁盘空间。
* [Neocities](https://neocities.org) — 静态托管，1GB免费存储空间，200GB带宽。
* [Netlify](https://www.netlify.com/) — 每月免费300积分（相当于30GB带宽）用于构建、部署和托管静态站点/应用。
* [Oaysus](https://oaysus.com) — 面向开发者构建的React、Vue或Svelte组件的可视化页面编辑器。免费版包含1个站点（不限页面数）、表单提交和全球CDN托管。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种托管形式（静态托管、容器托管、WordPress等一键安装应用）。免费包含1个Web托管（静态或容器）和1个数据库，100GB带宽及300构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps及可扩展基础设施。开发者与代理商免费使用，不支持自定义域名。
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，采用开发者友好设计并包含全功能套件。免费层支持静态资源、测试环境和开发者应用。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 一体化云平台，支持构建和运行应用与站点，提供免费SSL、全球CDN、私有网络、Git自动部署，以及Web服务、数据库和静态网页的完全免费方案。
* [Serv00.com](https://serv00.com/) — 3GB免费网络托管，含每日备份（保留7天）。支持：定时任务、SSH访问、代码仓库（GIT/SVN/Mercurial），兼容MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等语言。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者静态网页发布工具。不限站点数量，支持自定义域名。
* [tilda.cc](https://tilda.cc/) — 单站点50页，50MB存储空间，仅限170+预设区块中的基础模块，不支持自定义字体、网站图标和域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，提供免费SSL、全球CDN及每次`git push`生成的唯一预览URL。特别适合Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的网站构建工具，免费版包含不限网站数量、70+区块、5套模板、自定义CSS、网站图标、SEO优化和表单功能，不支持自定义域名。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
  * [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
  * [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
  * [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
  * [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
  * [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多支持5个域名，提供多种配置指南。
  * [Dynv6.com](https://dynv6.com/) - 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，同时提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后通过"Subdomains"菜单获取。
  * [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管最多3个域名，支持DNSSEC。
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
  * [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。
  * [luadns.com](https://www.luadns.com/) - 免费DNS托管，支持3个域名，功能全面且限制合理。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费DNS托管，域名数量无限制。
  * [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
  * [noip.at](https://noip.at/) - 免注册、无追踪/日志/广告的免费动态DNS服务，域名数量不限。
  * [noip](https://www.noip.com/) - 动态DNS服务，免费支持3个主机名，需每30天确认一次。
  * [sslip.io](https://sslip.io/) - 免费DNS服务，当查询包含IP地址的主机名时直接返回该IP。
  * [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
  * [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管服务。
  * [Zonomi](https://zonomi.com/) - 免费DNS托管服务，即时生效。免费版支持1个DNS区域（域名）和10条记录。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [DigitalPlat](https://domain.digitalplat.org) — 免费二级域名
* [pp.ua](https://nic.ua/) — 免费pp.ua二级域名

**[⬆️ 返回顶部](#目录)**  

（注：根据规则第5条保留了原链接格式，仅翻译了链接文本；根据中文表达习惯调整了标点符号；补充了"目录"作为锚点翻译的参考；严格保持Markdown格式不变）

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间和15GB下载流量。
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间和250GB出站流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是一个专为 JavaScript 开发者打造的全栈低代码开发平台，基于 MySQL 和 GraphQL 构建，提供无服务器后端即服务。通过 UI 应用构建器快速开发 Web 应用并轻松扩展。免费版包含：2,500 行数据、500MB 存储空间、1GB/小时无服务器计算资源以及 5 个客户端应用用户。
  * [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，免费版支持无限基数库、每个库 1,200 行数据和每月 1,000 次 API 请求
  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点配置：1 CPU、1GB 内存，PostgreSQL 和 MySQL 还包含 1GB 存储空间。可轻松迁移至更高级方案或跨云部署。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费版每月提供 5,000 万请求单位（RU）和 10GiB 存储空间（价值 15 美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和网页数据管理器。免费版含 5GB 存储和每分钟 60 次 API 调用，支持 2 名开发者，无需信用卡。
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，含 1 个节点和 8GB 存储，专为开发者打造，支持从物联网到 AI 的下一代应用开发
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，专为实时分析设计。[免费版 CRFREE](https://crate.io/lp-crfree)：单节点配置（2 CPU、2GiB 内存、8GiB 存储），每个组织可创建一个集群，无需支付方式。
  * [filess.io](https://filess.io) - filess.io 平台允许免费创建两个数据库（每个最大 10MB），支持以下数据库管理系统：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费版限制：每 5 分钟写入 3MB、读取 30MB，以及 10,000 个基数序列
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费版支持最高 25MB 内存、1 个代理服务器和基础分析功能
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费版提供 512MB 存储空间
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。免费版限制图规模（5 万节点、17.5 万关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL 服务，免费版包含：0.5GB 总存储空间、1 个项目、10 个分支、无限数据库、主分支永久在线（5 分钟不活跃后自动暂停），非主分支计算资源每月 20 小时活跃时长。
  * [Nile](https://www.thenile.dev/) — 专为 B2B 应用打造的 Postgres 平台。免费版包含：无限数据库、永久在线无停机、1GB 总存储空间、5,000 万查询令牌、自动扩展和无限向量嵌入
  * [Prisma Postgres](https://prisma.io/postgres) - 基于单内核技术并在裸金属上运行的超高速托管 Postgres，免费版含 1GB 存储空间、10 个数据库，并与 Prisma ORM 深度集成。
  * [restdb.io](https://restdb.io/) - 快速简洁的 NoSQL 云数据库服务。提供模式定义、关系管理、自动 REST API（支持类 MongoDB 查询）以及高效的多用户数据管理界面。免费版支持 3 个用户、2,500 条记录和每秒 1 次 API 请求。
  * [scalingo.com](https://scalingo.com/) — 主要提供 PaaS 服务，但包含 128MB 至 192MB 的免费 MySQL/PostgreSQL/MongoDB 方案
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活电子表格式数据库。免费版含无限表格、2,000 行数据、1 个月版本历史记录和最多 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云端数据平台，测试期间所有方案（含免费版）完全免费
  * [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库强大功能及主流商业应用集成的工具。免费版包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
  * [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse 服务，支持通过 HTTP 无连接数据摄入，并可将 SQL 查询发布为托管 HTTP API。免费版无时间限制，含 10GB 存储空间和每日 1,000 次 API 请求。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验方案。永久免费版包含：9GB 总存储空间、最多 500 个数据库、3 个部署位置、每月 10 亿行读取量，以及本地 SQLite 开发支持。
  * [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费版每月 50 万次命令、256MB 最大数据库容量和 20 个并发连接
  * [Xata Lite](https://lite.xata.io/) - Xata Lite 是无服务器数据库，内置强大搜索与分析功能。单一 API 支持多类型安全客户端库，并优化开发工作流。免费版提供 10 个分支和 15GB 存储空间，无暂停或冷启动问题。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到互联网。免费套餐包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露到本地网络或通过隧道生成公共URL。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费套餐包含欧盟服务器、随机子域名和单用户支持。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi托管VPN服务，可安全扩展类LAN网络至分布式团队，免费方案支持最多5人无限网络。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。每月10万请求和10万次尝试，保留三天数据。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将本地主机服务暴露到互联网。免费方案隧道有效期为15分钟。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [Pinggy](https://pinggy.io) — 单命令生成本地主机的公共URL，无需下载。支持HTTPS/TCP/TLS隧道，免费方案隧道有效期为60分钟。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类LAN网络。无限节点。（Hamachi替代方案）
* [serveo](https://serveo.net/) — 将本地服务暴露到互联网。无需安装注册，提供免费子域名且无限制。
* [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) Twilio STUN服务
* [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN服务
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook至公共或内部（如localhost）目标。还可通过隧道暴露私有网络中的服务（`https://子域名.webrelay.io <----> http://localhost:8080`）。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB月流量TURN服务，带宽受限，单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端组成的无限端到端加密网络。提供桌面/移动/NA客户端；可通过网页界面配置自定义路由规则和审批私有网络新节点。

**[⬆️ 返回顶部](#目录)**

## 问题追踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理与SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网与项目管理工具，免费版提供5GB空间（不限用户数）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表，25张工作表
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费版与云存储付费版，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限私有图表
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版最多10名用户
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目（不限用户数）和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持本地存储至Google Drive/OneDrive/Dropbox的在线图表工具，全功能免费
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具，免费版每月3个公共看板和1次调研/看板
* [freedcamp.com](https://freedcamp.com/) - 集成任务/讨论/里程碑/时间跟踪/日历/文件/密码管理，免费版不限项目/用户/存储
* [GForge](https://gforge.com) — 支持自托管与SaaS的复杂项目管理套件，SaaS免费版前5用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 面向开发者的免费文本转图表工具，可通过关键词创建非正式UML类图/对象图/ER图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可对比两个GraphQL模式差异的工具，精确标记破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 内置实时聊天的客户支持软件，永久免费，通过复制粘贴脚本即可轻量部署
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板，提供100MB存储
* [Ilograph](https://www.ilograph.com/)  — 支持多视角查看的基础设施交互图表工具，免费版可创建无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具，免费版最多10名用户
* [kan.bn](https://kan.bn/) - 灵活强大的看板工具，免费版支持1名用户创建无限看板/列表/卡片
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费基础版与高级付费版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2名用户（不含附件功能）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具，提供网页版与Chrome扩展，完全免费
* [Kumu.io](https://kumu.io/)  — 支持动画/装饰/筛选/聚类/表格导入的关系图谱工具，免费版可创建无限公开项目，学生可获私有项目权限
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS，免费版支持10名用户/20个自定义字段/2GB存储/5分钟AI视频录制
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版不限成员/10MB文件上传/250个问题（归档除外）
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版支持3个可编辑文档/100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具，免费版支持3个项目（不限成员）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板功能）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费基础版提供100MB存储/5用户团队，支持无限工作区/会议/任务单
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具，免费版不限成员/5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（评估工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（共识评估工具），完全免费且无需注册
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表工具
* [ScrumFast](https://www.scrumfast.com) - 直观易用的Scrum看板工具，免费版最多5名用户
* [Sflow](https://sflow.io) — 专为外包/跨组织协作设计的敏捷项目管理工具，免费版支持3个项目5名成员
* [Shake](https://www.shakebugs.com/) - 移动应用内Bug反馈工具，免费版每月10个Bug报告/应用
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持10名用户
* [taiga.io](https://taiga.io/) — 面向敏捷开发者的项目管理平台，开源项目免费
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具，免费版提供1个工作区（不限任务）/1GB存储/1周历史记录/5人视频会议
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/计划工具，免费版最多15名用户

  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰游戏、GIF和表情符号。免费版支持3次回顾会议和无限成员参与。
* [Tenzu](https://tenzu.net/) — 为敏捷团队打造的轻量级项目管理工具。该SaaS产品依赖自愿付费，用户可选择支付0元且所有功能无付费墙 {[详情](https://tenzu.net/pricing/)}
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，支持在问题/任务中创建结构化清单、模板和审批流程。小团队可免费使用。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版包含：5个活跃项目、每个项目5名成员、5MB文件上传、3个筛选器和1周活动记录。
* [Toggl](https://toggl.com/) — 提供两款免费生产力工具。[Toggl Track](https://toggl.com/track/) 是面向自由职业者的时间追踪应用，免费版支持无限时间记录、项目、客户、标签及报表功能；[Toggl Plan](https://toggl.com/plan/) 是任务规划工具，免费版为独立开发者提供无限任务、里程碑和时间线。
* [trello.com](https://trello.com/) — 看板式项目管理。免费版含无限个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台，含项目管理、版本控制和问题追踪。免费版支持无限项目与协作者，提供3GB存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。免费支持3名用户，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 为开源项目及私有项目提供免费云端YouTrack（3用户免费），含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — GitHub内集成的唯一项目管理方案。公开仓库、开源项目和非营利组织可免费使用。
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版支持5名成员和5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目与4名用户，提供GitHub集成。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大处理、存储和交付服务。免费套餐每月25个积分（1积分=1,000次图片转换/1GB存储/1GB CDN流量）。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费20GB空间支持三台设备，推荐好友可获5GB奖励（账户90天不活跃将失效）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放及网页元素提取服务。免费套餐每月5,000个URL处理（15请求/秒）。
* [Ente](https://ente.io/) - 端到端加密的相片/视频/2FA秘密云存储，也可自托管。永久免费10GB空间（免费用户仅保留单副本数据）。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限流1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图片/音频/视频等格式转换与编辑。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客松和移动应用设计的简易JSON数据存储API。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API调用。无限文件大小/带宽/下载次数，但十天无下载的文件将被删除。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN处理流媒体服务。免费套餐包含每月250GB视频流量和30GB图片流量。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，提供10GB免费空间。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务。
* [ImageEngine](https://imageengine.io/) – 全球图片CDN服务，60秒快速配置，支持AVIF/JPEGXL格式及WordPress/Magento/React/Vue插件。开发者可申请[免费账户](https://imageengine.io/developer-program/)。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN，支持自动优化和实时转换。免费套餐含20GB/月带宽。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务，支持拖拽上传（单图32MB限制）。生成直链/BBCode/HTML缩略图，登录可查看上传历史。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图片的机器人，在保持质量的同时减小文件体积。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务。免费套餐含1,000张原始图片、无限转换和100GB带宽。
* [internxt.com](https://internxt.com) – 基于零知识证明的绝对隐私文件存储服务，注册即享永久10GB免费空间。
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费版支持1MB以下文件。
* [LibreQR](https://libreqr.com) — 注重隐私的无追踪免费QR码生成器。
* [nitropack.io](https://nitropack.io/) - 自动前端加速服务（缓存/图片代码优化/CDN）。免费支持5,000次页面浏览/月。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享与统一管理工具。基础版支持无限传输（单文件250MB限制）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供有限免费计划，开源项目可申请特殊方案。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，免费10GB空间。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费1GB存储空间。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 快速批量生成无水印QR码工具，单次最多支持100个URL导出。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图表图像和QR码。
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS系统，累计处理超70亿张图片。
* [sirv.com](https://sirv.com/) — 智能图片CDN支持实时优化调整。免费套餐含500MB存储和2GB带宽。
* [SlingSite](https://slingsite.github.io) - 免费批量生成图片视频的优化版本：图片输出AVIF/WEBP/JPG三种格式（桌面/平板/移动端分辨率），视频输出WebM(VP9)/MP4(HEVC)/MP4(AVC)格式及封面图。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，免费5GB空间。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码服务。开源项目/慈善机构/学生可通过GitHub学生包免费使用，商业应用可试享2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务，提供CDN/媒体处理API和前端自动化优化库。免费套餐每月3GB流量。

  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Ant Design 落地页](https://landing.ant.design/) - 由 Ant Motion 动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（不限查看人数）
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工调色板
* [日历图标生成器](https://calendariconsgenerator.app/) - 一键生成全年独特图标，完全免费
* [Canva](https://canva.com) - 创建视觉内容的免费在线设计工具
* [Carousel Hero](https://carouselhero.com/) - 制作社交媒体轮播图的免费工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库（支持React/Vue/Svelte的SVG图标）
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成方案
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能转换工具（含视频和GIF）
* [CMYK转潘通色](https://www.cmyktopantone.com/) - 快速免费将CMYK值转换为最接近的潘通色及其他色彩模式
* [CodedThemes](https://codedthemes.com/) - 精心打造的管理后台模板和UI套件，加速现代网页开发
* [CodeMyUI](https://codemyui.com) - 附带代码片段的网页设计与UI灵感精选集
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 色彩与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变的免费工具（支持RGB/HEX格式）
* [css.glass](https://css.glass/) - 用CSS创建玻璃拟态设计的免费网页应用
* [DaisyUI](https://daisyui.com/) - 免费Tailwind CSS组件库（如按钮组件），减少类名书写
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库
* [Excalidraw](https://excalidraw.com/) - 支持本地保存和导出的免费在线绘图工具
* [figma.com](https://www.figma.com) - 团队协作设计工具（免费版含无限文件查看者+2名编辑+3个项目）
* [Float UI](https://floatui.com/) - 非设计师也能快速创建现代响应式网站的免费开发工具
* [Flows](https://flows.sh/) - 完全可定制的产品引导平台（免费支持250名月活跃用户）
* [Flyon UI](https://flyonui.com/)- 最简单的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具（免费版含无限查看者+2名编辑+3个项目）
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版权商业用途图库
* [Glyphs](https://glyphs.fyi/) - 免费可编辑的开源图标设计系统
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Grapedrop](https://grapedrop.com/) - 基于GrapesJS框架的SEO优化网页构建器（前5页免费）
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的网页工具
* [hypercolor.dev](https://hypercolor.dev/) - Tailwind CSS渐变色精选集+生成器
* [HyperUI](https://www.hyperui.dev/) - 免费开源Tailwind CSS组件库
* [Icon Horse](https://icon.horse) - 通过简单API获取网站高清favicon
* [iconify.design](https://icon-sets.iconify.design/) - 100+图标库统一接口（支持SVG导出和主流框架）
* [Iconoir](https://iconoir.com) - 开源图标库（支持React/Flutter/Vue/Figma等平台）
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐等设计资源（免费版分辨率受限需标注来源）
* [图片背景模糊器](https://imagebgblurer.com/) - 为Notion/Trello/Jira等工具生成图片模糊背景框
* [landen.co](https://www.landen.co) - 无代码建站工具（免费版支持1个全功能网站）
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Logo.dev](https://www.logo.dev) - 4400万+品牌LOGO的API服务（前1万次调用免费）
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具（通过URL尺寸参数获取随机图片）
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画资源平台（支持Android/iOS/Web插件）
* [Lucide](https://lucide.dev) - 免费可定制的SVG图标工具包
* [Lunacy](https://icons8.com/lunacy) - 内置资源库的离线图形设计工具（免费版含10个云文档+基础功能）
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台（免费版限1用户1项目）
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器（无水印/支持1080P导出）
* [MDBootstrap](https://mdbootstrap.com/) - 700+组件的免费UI套件（支持Bootstrap/Angular/React/Vue）
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量免费思维导图工具（全平台即时同步）
* [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具（免费版支持3用户5项目全功能）

  * [Modeldraw.com](https://modeldraw.com) — 完整的图表绘制平台，支持UML、系统架构图、流程图、思维导图和敏捷工作流。支持无限团队成员实时协作，无需信用卡。
  * [Mossaik](https://mossaik.app) - 免费SVG图像生成器，提供波浪、博客和图案等多种工具。
  * [movingpencils.com](https://movingpencils.com) — 快速、基于浏览器的矢量编辑器。完全免费。
  * [Nappy](https://nappy.co/) -- 免费的黑人和棕色人种精美照片，可用于商业和个人用途。
  * [NextUI](https://nextui.org/) -- 免费、美观、快速且现代的React & Next.js UI库。
  * [NSPolygon](https://nspolygon.com) — 免费库存照片、图标和插图。
  * [Octopus.do](https://octopus.do) — 可视化站点地图构建工具。实时构建网站结构并快速分享，与团队或客户协作。
  * [OKLCH](https://oklch.net/) -- 免费的OKLCH颜色选择器和转换工具，适用于网页设计师和开发者。
  * [okso.app](https://okso.app) - 极简在线绘图应用。可快速创建草图和视觉笔记。支持导出为PNG、JPG、SVG和WEBP格式。也可作为PWA安装。完全免费使用（无需注册）。
  * [Pencil](https://github.com/evolus/pencil) - 使用Electron的开源设计工具。
  * [Penpot](https://penpot.app) - 基于网页的开源设计和原型工具。支持SVG。完全免费。
  * [pexels.com](https://www.pexels.com/) - 免费商用库存照片。提供免费API，可按关键词搜索照片。
  * [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，界面类似Adobe Photoshop，支持PSD、XCF和Sketch格式（Adobe Photoshop、Gimp和Sketch App）。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特且引人注目的图形和图像。
  * [pixlr.com](https://pixlr.com/) — 免费在线浏览器编辑器，功能媲美商业软件。
  * [Plasmic](https://www.plasmic.app/) - 快速、易用且强大的网页设计工具和页面构建器，可集成到代码库中。构建响应式页面或复杂组件；可选代码扩展；发布到生产站点和应用。
  * [PNG to WebP Converter](https://pngtowebpconverter.com/) - 在浏览器中直接将PNG图像转换为WebP图像。无需上传，完全客户端处理，确保最高隐私和安全性。
  * [Pravatar](https://pravatar.cc/) - 生成随机/占位虚拟头像，URL可直接热链到网页/应用中。
  * [Proto.io](https://www.proto.io) - 无需编码即可创建完全交互式UI原型。免费试用结束后仍可使用免费版，包括1个用户、1个项目、5个原型、100MB在线存储和proto.io应用预览。
  * [Quant Ux](https://quant-ux.com/) - Quant Ux是一款原型设计和设计工具。完全免费且开源。
  * [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标调整和管理服务。
  * [Responsively App](https://responsively.app) - 免费开发工具，用于更快、更精确的响应式网页应用开发。
  * [Rive](https://rive.app) — 创建并发布精美动画到任何平台。个人用户永久免费。服务提供编辑器并托管所有图形。还提供多平台运行时以运行Rive制作的图形。
  * [SceneLab](https://scenelab.io) - 在线模型图形编辑器，提供不断扩展的免费设计模板库。
  * [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计网页自定义滚动条。
  * [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局的主题更改。
  * [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到应用中。可访问、可定制、开源。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模型。
  * [storyset.com](https://storyset.com/) — 使用此工具为项目创建免费定制插图。
  * [Superdesigner](https://superdesigner.co) - 免费设计工具集合，只需点击几下即可创建独特背景、图案、形状、图像等。
  * [SVG Converter](https://svgconverter.online/) -- 免费JPG/PNG转SVG工具，支持调色板定制。
  * [SVGmix.com](https://www.svgmix.com/) - 超过30万免费SVG图标、合集和品牌标志的庞大库。内置简单矢量编辑程序，支持浏览器内快速文件编辑。
  * [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合项目的图标或矢量图。免费下载商用SVG矢量图。
  * [tabler-icons.io](https://tabler-icons.io/) — 超过1500个免费可复制粘贴的SVG可编辑图标。
  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代响应式预制UI块集合。
  * [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板。即时预览并复制完美的Tailwind CSS颜色类。
  * [Tailkits](https://tailkits.com/) -- 精选Tailwind模板、组件和工具集合，以及代码、网格、阴影等实用生成器。
  * [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作式前端平台，可即时创建和发布无头静态网站。免费版支持三个项目、无限协作者和免费代码导出。
  * [TW Elements](https://tw-elements.com/) - 使用Tailwind CSS重新创建的免费Bootstrap组件，设计更优且功能更丰富。
  * [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题。实时自定义颜色、排版等。
  * [UI Avatars](https://ui-avatars.com/) - 根据姓名生成带首字母的头像。URL可直接热链到网页/应用中。支持通过URL配置参数。
  * [unDraw](https://undraw.co/) - 不断更新的精美SVG图像集合，可完全免费使用且无需署名。
  * [Unicorn Platform](https://unicornplatform.com/) - 轻松构建带托管的落地页。免费提供一个网站。
  * [unsplash.com](https://unsplash.com/) - 免费商用和非商用库存照片（随意使用许可）。
  * [Updrafts.app](https://updrafts.app) - 基于tailwindcss的WYSIWYG网站构建器。非商业用途免费。
  * [vector.express](https://vector.express) — 快速轻松转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
  * [vectr.com](https://vectr.com/) — 免费网页和桌面设计应用。
  * [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件转换平台，支持多种格式转换，包括开发者工具如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
  * [walkme.com](https://www.walkme.com/) — 企业级引导和参与平台，免费版支持三个引导流程，每个流程最多5步。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
  * [Webflow](https://webflow.com) - 带动画和网站托管的WYSIWYG网站构建器。免费支持两个项目。
  * [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费版提供无限网站（使用其域名）、五个自定义域名网站、每月一万次页面浏览和2GB资源存储。
  * [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图。免费创建最多4个面板。
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。

  * [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计稿、资源文件和样式指南。单个项目免费使用。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台。可按UI/UX项目分类筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常来自非真实应用场景。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好寻找最佳着陆页设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 收录6025个最佳着陆页案例，提供免费设计书籍和全球免费UI套件资源。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图集，包含桌面端、平板和移动端视图。
  * [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全检索的移动应用截图库，节省UI/UX研究时间。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供精选UI/UX模式库（iOS和Android）。
  * [Page Flows](https://pageflows.com/) - [移动端/网页流程视频与截图] 多款应用的完整操作流程视频，含截图资源，支持高效检索。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考合集，支持标签分类和搜索。
  * [Screenlane](https://screenlane.com/) - [移动端截图] 获取最新网页和移动应用UI设计趋势灵感，可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集。
  * [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动端和网页UI设计。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) — 精密如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）。
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容。
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线API。每日三千次免费请求。
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日两千五百次免费查询。
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询。
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查询API。
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API。全球覆盖。每日2500次免费查询。
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路线优化、距离矩阵、地理编码和地图匹配服务。
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理。
* [IP Geolocation](https://ipgeolocation.io/) — 免费开发者计划每月提供3万次请求。
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者。
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日五千次免费请求。
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示的地图、地理空间服务和SDK。
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务。
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新并提供四种地图样式。
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能。
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap及其他开放地理数据源的地理编码API。每日两千五百次免费查询。
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序。
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码。个人用户每月2.5万次请求。
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航及其他地理空间API。非商业用途和测试每日两千五百次免费地图浏览与API请求。

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）。
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，适用于Fedora和EL。
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [Android Studio](https://developer.android.com/studio) — Android Studio 提供最快速的工具，可用于为各类 Android 设备构建应用。这款开源 IDE 对所有人免费，是开发 Android 应用的最佳选择。支持 Windows、macOS、Linux 甚至 ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源 IDE，可在 Android 设备上开发基于 Gradle 的真实 Android 应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作设计 API，提供即时 API 模拟和生成文档（免费版支持无限量 API 蓝图和无限用户，包含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - BBEdit 是 macOS 上流行且可扩展的编辑器。免费模式提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将 Git 仓库转换为交互式笔记本集合。这是一项免费的公共服务。
* [BlueJ](https://bluej.org) — 专为初学者设计的免费 Java 开发环境，全球数百万人使用。由 Oracle 提供支持，采用简单 GUI 帮助初学者。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和 REST API 的 Spring Boot 应用生成器。
* [Brackets](http://brackets.io/) - Brackets 是一款专为网页开发设计的开源文本编辑器。它轻量、易用且高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持标签和 100 多种编程语言。
* [cocalc.com](https://cocalc.com/) —（原 cloud.sagemath.com）— 云端协作计算。通过浏览器访问完整 Ubuntu 系统，内置协作工具和大量数学、科学、数据科学免费软件，预装 Python、LaTeX、Jupyter Notebooks、SageMath、scikit-learn 等。
* [code.cs50.io](https://code.cs50.io/) - CS50 的 Visual Studio Code 是 code.cs50.io 上的网页应用，专为学生和教师适配 GitHub Codespaces。
* [Code::Blocks](https://codeblocks.org) — 免费的 Fortran 和 C/C++ IDE。开源，支持 Windows、macOS 和 Linux。
* [codepen.io](https://codepen.io/) — CodePen 是前端开发的游乐场。
* [codesandbox.io](https://codesandbox.io/) — 支持 React、Vue、Angular、Preact 等的在线开发环境。
* [codiga.io](https://codiga.io/) — 编码助手，可直接在 IDE 中搜索、定义和复用代码片段。个人和小型团队免费。
* [Components.studio](https://webcomponents.dev/) - 独立编写组件，通过故事可视化，测试并发布到 npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于网页和 Kubernetes 的原生 IDE，支持多语言。开源且由社区驱动。Red Hat 托管的在线实例可在 [workspaces.openshift.com](https://workspaces.openshift.com/) 访问。
* [ForgeCode](https://forgecode.dev/) — 支持 Claude、GPT4 系列、Grok、Deepseek、Gemini 等前沿模型的 AI 结对编程工具。原生支持 CLI，无缝集成任何 IDE。免费层包含基础 AI 模型访问和本地处理。
* [GetVM](https://getvm.io) — 即时免费的 Linux 和 IDE Chrome 侧边栏。免费层每天提供 5 个 VM。
* [JDoodle](https://www.jdoodle.com) — 支持 60 多种编程语言的在线编译器和编辑器，免费计划每天提供 200 次 REST API 代码编译积分。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE 和部署工具（如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。学生、教师、开源和用户组可免费使用。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回虚假 JSON 数据的 REST API 端点。如需本地运行服务器，源码也可用。
* [Lazarus](https://www.lazarus-ide.org/) — Lazarus 是兼容 Delphi 的跨平台 IDE，用于快速应用开发。
* [MarsCode](https://www.marscode.com/) - 免费的 AI 驱动云端 IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假 JSON 数据的微型 API 模拟服务。
* [mockable.io](https://www.mockable.io/) — Mockable 是用于模拟 RESTful API 或 SOAP 网络服务的简单可配置服务。可快速定义 REST API 或 SOAP 端点并返回 JSON 或 XML 数据。
* [mockaroo](https://mockaroo.com/) — Mockaroo 可生成 CSV、JSON、SQL 和 Excel 格式的真实测试数据，还能为后端 API 创建模拟。
* [Mocklets](https://mocklets.com) - 基于 HTTP 的模拟 API 工具，支持更快并行开发和全面测试，提供终身免费层。
* [OneCompiler](https://onecompiler.com/) - 支持 70+ 语言的免费在线编译器，包括 Java、Python、C++、JavaScript。
* [Paiza](https://paiza.cloud/en/) — 在浏览器中开发网页应用，无需配置。免费计划提供 1 台服务器，24 小时生命周期，每天 4 小时运行时间，含 2 CPU 核心、2 GB RAM 和 1 GB 存储。
* [PHPSandbox](https://phpsandbox.io/) — PHP 在线开发环境。
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程游乐场。支持多种语言。运行代码无需注册，但保存代码需注册。还提供面向初学者和中级开发者的免费课程。
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码 IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于 NodeJs 的前后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行、多功能且高度可定制的文本编辑器，适用于编码和文本编辑任务。
* [Visual Studio Code](https://code.visualstudio.com/) - 重新定义并优化的代码编辑器，专为构建和调试现代网页及云应用设计。由微软开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的 IDE，含数千扩展，支持跨平台应用开发（可下载 iOS 和 Android 的微软扩展）、桌面、网页和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP 等）。
* [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/跟踪、自由许可的微软编辑器 VSCode 二进制分发版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化你的编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) - Wave 是一款开源跨平台终端，支持无缝工作流。内联渲染任何内容。保存会话和历史记录。基于开放网络标准。支持 MacOS 和 Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内 IDE，支持 58 种模板，可独立编写网页组件，包含故事和测试。
* [Zed](https://zed.dev/) - Zed 是 Atom 和 Tree-sitter 创作者开发的高性能多人协作代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多支持2个应用
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在实现跨平台无缝管理分析和产品更新。免费计划包含每月10,000次事件、产品日志和每周洞察。
* [Aptabase](https://aptabase.com) — 面向移动和桌面应用的开源、隐私友好且简单的分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费20,000次事件。
* [Avo](https://avo.app/) — 简化的分析发布工作流。单一真实来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观测性，确保发布前发现所有数据问题。免费支持2名工作区成员和1小时数据可观测性回溯。
* [Beampipe.io](https://beampipe.io) - Beampipe是一款简单、注重隐私的网站分析工具。免费支持最多5个域名和每月10,000次页面浏览。
* [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。从数据仓库同步10个字段到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3,000次浏览分析。
* [counter.dev](https://counter.dev) — 简单且隐私友好的网站分析工具。免费或按捐赠付费。
* [DocBeacon](https://docbeacon.io) - 安全文档共享，附带文档跟踪和参与度分析。免费计划支持最多20个PDF文档（最大10 MB）、10个联系人和每文档2次分享，提供基本的浏览、下载、时间和参与度分析。
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
* [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，免费支持每月3,000次事件。
* [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一款开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网站分析，替代Google Analytics或Matomo。免费层适用于非商业用途，包含无限站点、六个月数据保留和每月100,000次页面浏览。
* [Google Analytics](https://analytics.google.com/) — Google Analytics
* [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。免费支持每月10,000次会话。
* [Hightouch](https://hightouch.com/) - Hightouch是一款反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层支持一个数据同步目标。
* [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天2,000次页面浏览。每天100个快照（最大容量：300）。可存储3个快照热图365天。无限团队成员。还包括应用和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20条回复。
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包含每月10,000次事件。
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划允许每月100万次页面浏览，无需信用卡。
* [Mixpanel](https://mixpanel.com/) — 每月跟踪100,000名用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月免费500,000次API调用）
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费跟踪100万次事件。还提供每月250次回复的无限应用内调查。
* [Repohistory](https://repohistory.com) - 美观的仪表板，用于跟踪GitHub仓库流量历史超过14天。免费计划允许用户监控单个仓库的流量。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿。
* [Rybbit](https://rybbit.io) - Google Analytics的开源和无Cookie替代方案，直观性提升10倍。免费计划每月3,000次事件。
* [Seline](https://seline.so) - Seline是一款简单且隐私友好的网站和产品分析工具。无Cookie、轻量级、独立。免费计划包含每月3,000次事件，并提供对所有功能的访问，如仪表板、用户旅程、漏斗等。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划分析500名最近访问者。
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月免费100万次计量事件。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，促进无缝协作。部署到生产环境或为回归测试添加分析覆盖，无需编写代码。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私友好型Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标跟踪。免费支持最多3个域名和每个域名600次会话回放。
* [Umami](https://umami.is/) - 简单、快速、隐私友好的开源Google Analytics替代方案。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型，并跟踪访问者。免费支持一名用户，无限测试
* [Userbird](https://userbird.com) - Google Analytics替代方案，包含热图、会话记录和收入跟踪。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月并提供三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费。
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费。
* [LogRocket.com](https://www.logrocket.com) — 每月1,000次会话，30天数据保留，错误追踪和实时模式。
* [Microsoft Clarity](https://clarity.microsoft.com/) — 完全免费的会话录制，"无流量限制"，无项目限制，无采样。
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费。
* [OpenReplay.com](https://www.openreplay.com) — 开源的会话回放，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [Reactflow.com](https://www.reactflow.com/) — 每个网站：每日1,000次页面浏览，三个热图，三个小组件，免费错误追踪。
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史。
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限时长免费。

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Adapty.io](https://adapty.io/) – 一站式移动应用内订阅解决方案，提供开源SDK，支持iOS、Android、React Native、Flutter、Unity及网页应用集成。月收入1万美元以下免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费版每月10,000次API调用额度。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟限10次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率数据，支持JSON和XML格式。免费版每月1,250次API请求。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费DEVELOPER计划含1,000次/月请求。
* [currencylayer](https://currencylayer.com/) — 企业级可靠汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限额。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈与退单。免费Micro计划支持500次查询/月。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时与历史汇率数据。免费版需标注数据来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现，支持Stripe、Chargebee等支付系统。免费版每月30,000次事件记录。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力全球业务拓展（购买力平价模式）。免费计划含7,500次API请求/月。
* [Qonversion](http://qonversion.io/) - 全平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置等工具，优化应用内购与变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe及网页端。月跟踪收入1万美元以下免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购与订阅后端服务（支持iOS/Android）。月跟踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费版每月100次API请求

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [容器注册表服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1GB私有仓库存储空间。
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Docker交互实验室](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式Miniblog的形式免费与世界分享你的想法、知识和故事。
* [BearBlog](https://bearblog.dev/) - 极简主义、Markdown驱动的博客和网站构建工具。
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的平台。
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件！
* [Medium](https://medium.com/) — 更深入地思考对你重要的事物。

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，可帮助您从网站受众中建立活跃社区。
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"一名管理员在少数域名上完全控制行为与外观"。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可将 GitHub issues 用于博客评论、维基页面等场景！

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间及视口尺寸控制。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据：包括标准化元标签、美观链接预览、爬虫功能及截图服务。每日免费250次请求。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染。免费层每日500页额度，自2017年持续提供。
  * [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。支持任意URL截图，快速、免费且可扩展。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 高度定制化的网站快照服务。每月免费100张截图。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次免费截图，支持png/gif/jpg格式，包含整页滚动截图（不限于首页）。
  * [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS

  * [CodeMagic](https://codemagic.io/) - Codemagic 是一款专为移动应用打造的完全托管式 CI/CD 服务。您可以通过基于图形界面的 CI/CD 工具完成构建、测试和部署。免费套餐每月提供 500 分钟免费时长，并配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化 Flutter 在线 IDE，是创建、调试和构建跨平台项目的理想平台。无需 Mac 设备即可构建 iOS 和 Android 应用。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的拖拽式界面工具，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [JsLinux](https://bellard.org/jslinux) — 高性能x86虚拟机，可运行Linux和Windows 2000系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射功能。免费版包含核心同意管理功能，并为经过验证的开源项目提供更高级的免费方案。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计及多语言同意管理解决方案。免费版提供一次性扫描和单个横幅功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理服务。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量范围内提供大部分功能。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的截图，方便在社交媒体分享。
* [Base64 解码/编码工具](https://devpal.co/base64-decode/) — 免费的在线数据解码与编码工具。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成美观图片（如用于Twitter/Facebook帖子）或链接（如用于聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估IoT设备。免费开发者计划支持5台设备，包含免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器功能。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅地展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪与编码指标插件。
* [Codepng](https://www.codepng.app) - 为源代码生成精美快照，便于在社交媒体分享。
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为截图，方便社交媒体传播。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，免费提供无限任务。
* [Cronhooks](https://cronhooks.io/) - 调度一次性或周期性Webhook。免费版支持5个临时调度。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。免费版每月限5次预订，包含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单的URL或域名转发工具。免费版支持5个域名和每月20万次请求。
* [Exif Editor](https://exifeditor.io/) — 即时在浏览器中查看、编辑、清理、分析图片元数据，包括GPS位置信息。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性与漏洞管理平台。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook支持，提供现成的队列、退避重试和日志功能。免费版每日100次投递，14天留存，3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 查询域名、网站或IP的ASN、ISP、地理位置等托管信息。同时提供多种托管和DNS相关工具。
* [newreleases.io](https://newreleases.io/) - 通过邮件、Slack、Telegram、Discord或自定义Webhook接收GitHub、GitLab、Bitbucket等平台的新版本通知，支持Python PyPI、Java Maven等包管理器。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的EXIF数据，包括GPS位置和元信息。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板管理PDF模板，通过API动态生成PDF。免费版每月300份文档。
* [Pika Code Screenshots](https://pika.style/templates/code-image) — 通过VSCode插件从代码片段生成可定制的美观截图。
* [QuickType.io](https://quicktype.io/) - 快速从JSON、Schema和GraphQL生成模型/类/类型/接口及序列化代码，支持多种编程语言的安全数据处理。
* [RandomKeygen](https://randomkeygen.com/) - 免费移动端工具，提供多种随机生成的密钥和密码，用于保护应用、服务或设备。
* [ray.so](https://ray.so/) - 为代码片段创建精美图片。
* [readme.com](https://readme.com/) — 轻松创建美观的文档，开源项目免费。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理HTTPS重定向。免费版包含10个源和每月10万次访问。
* [redirection.io](https://redirection.io/) — 面向企业、营销和SEO的HTTP重定向SaaS工具。
* [Renamer.ai](https://renamer.ai) — 支持OCR、元数据提取和20+语言自动化的AI文件重命名工具。免费版每月15个文件，含桌面应用、批量重命名和基础支持。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET/POST/PUT/DELETE/HEAD方法，包含头部和令牌认证，提供基础请求保存功能。
* [Smartcar API](https://smartcar.com) - 车辆API，可获取位置、油箱/电池状态、里程，并控制车门锁等。
* [snappify](https://snappify.com) - 开发者视觉创作平台，从代码片段到技术演示。免费版支持同时3个作品，无限下载，每月5次AI代码解释。
* [Sunrise and Sunset](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed导出与分析服务，免费版功能较少。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费版每份调查限10个问题和100份回复。
* [UUID Generator](https://newuuid.com/) - 即时生成UUID v1/v4/v7、GUID、Nil UUID、CUID v1/v2、NanoID和ULID，具备企业级性能与安全性。
* [Versionfeeds](https://versionfeeds.com) — 为喜爱的软件创建自定义RSS更新订阅。免费版支持3个订阅源。
* [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录像及其他视频。
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的免费GPU基准测试（WebGL），帮助开发者跨设备测试着色器性能。
* [Webacus](https://webacus.dev) — 提供多种免费的开发者工具，支持编码、解码和数据转换。
* [XKit](https://xkit.io) — 为开发者、学生和日常用户设计的免费在线工具集，包含开发工具、差异对比、计算器、转换器和生成器等。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [AnyDesk](https://anydesk.com) — 支持3台设备免费使用，会话次数和时长无限制
* [Getscreen.me](https://getscreen.me) — 支持2台设备免费使用，会话次数和时长无限制
* [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（免费版每天2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [3Dassets.one](https://3dassets.one/) - 提供8000+免费/付费3D模型和PBR材质贴图资源
* [ArtStation](https://www.artstation.com/) - 2D/3D资源与音效交易市场，含图标/瓦片集/游戏套件，同时可作为作品集展示平台
* [CraftPix](https://craftpix.net) — 涵盖2D/3D/音效/GUI/背景/图标/瓦片集/游戏套件的免费&付费资源库
* [Freesound](https://freesound.org/) - 采用多种CC协议的协作型免费音效库
* [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可定制SVG/PNG风格化图标
* [GameDevMarket](https://gamedevmarket.net) — 提供2D/3D/音效/GUI等付费&免费资源
* [Gamefresco.com](https://gamefresco.com/) — 全球游戏美术资源的发现、收集与共享平台
* [itch.io](https://itch.io/game-assets) — 精灵图/瓦片集/角色包等免费&付费资源
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的2D/3D/音效/UI游戏素材
* [LoSpec](https://lospec.com/) — 像素艺术创作工具站，含丰富教程/色板资源
* [OpenGameArt](https://opengameart.org) — 开源游戏素材库，含音乐/音效/精灵图/GIF等
* [Poliigon](https://www.poliigon.com/) - 多精度纹理/模型/HDRI/笔刷资源库，提供Blender等软件的免费导出插件
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D素材库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [360Converter](https://www.360converter.com/) - 免费的视频转文字、音频转文字、语音转文字、实时音频转文字、YouTube视频转文字及添加视频字幕工具。适用于短视频转换或简短YouTube教程制作。
* [AdminMart](https://adminmart.com/) — 基于Angular、Bootstrap、React、VueJs、NextJS和NuxtJS开发的高质量免费与付费管理后台和网站模板。
* [Buttons Generator](https://markodenic.com/tools/buttons-generator/) — 100+种可直接用于项目的按钮样式生成器。
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务。
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单。
* [Free Code Tools](https://freecodetools.org/) — 100%免费的实用代码工具集：Markdown编辑器、代码压缩/美化、二维码生成器、Open Graph生成器、Twitter卡片生成器等。
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供支持子域的`*.localhost.direct`通配符CA签名SSL证书。
* [GitHub Education](https://education.github.com/pack) — 学生专属免费服务集合（需注册）。
* [Glob tester](https://globster.xyz/) — 可视化设计并测试glob模式的平台，附带学习资源。
* [It tools](https://it-tools.tech/) - 面向开发者和IT从业者的实用工具集。
* [JSON Viewer Tool](https://jsonviewertool.com/) – 浏览器内直接查看、格式化、验证、压缩及转换JSON数据（无需API密钥）。
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习Linux、Kubernetes、容器、编程、DevOps和网络技术的平台。
* [Kody Tools](https://www.kodytools.com/dev-tools) — 包含格式化、压缩和转换功能的100+开发工具。
* [Markdown Tools](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具。
* [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) — 获取Microsoft 365平台开发所需的免费沙盒环境、工具等资源。包含可续订的90天[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据评估）自动续期。
* [MySQL Visual Explain](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，用于优化慢查询。
* [PageTools](https://pagetools.co/) - AI驱动的永久免费工具集，一键生成网站政策、社交媒体简介、帖子及网页内容。
* [Pyrexp](https://pythonium.net/regex) — 基于网页的正则表达式测试与可视化调试工具。
* [RedHat for Developers](https://developers.redhat.com) — 开发者专属的Red Hat产品免费访问权限（含RHEL、OpenShift、CodeReady等），仅限个人计划，另提供免费电子书资源。
* [regex101](https://regex101.com/) — 免费正则表达式测试与调试平台，提供编辑器、测试器及学习文档。
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务。
* [SimpleBackups.com](https://simplebackups.com/) — 支持直接存储至云服务（AWS、DigitalOcean、Backblaze）的服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化工具，免费版支持1个备份任务。
* [SimpleRestore](https://simplerestore.io) - 无需代码或服务器的MySQL备份恢复工具，支持远程数据库还原。
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份。
* [Table Format Converter](https://www.tableformatconverter.com) - 免费表格数据转换工具，支持CSV/HTML/JSON/Markdown等多种格式。
* [Themeselection](https://themeselection.com/) — 精选高质量现代化免费管理后台模板。
* [ToolsHref](https://toolshref.com) - 开发者工具套件，含Java代码生成（JSON转POJO/cURL转Java）、静态分析及DevOps配置构建（Docker/K8s/Nginx）。
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集（水印生成/屏幕录制/编解码/加密/代码格式化等），完全免费且不上传云端处理数据。
* [Wikimint Developer](https://developer.wikimint.com/p/tools.html) - 永久免费的Web开发工具：CSS压缩解压/图片优化/图片缩放/大小写转换/CSS验证/JavaScript编译/HTML编辑等。
* [WrapPixel](https://www.wrappixel.com/) — 基于Angular/React/VueJs/NextJS/NuxtJS的优质免费与付费管理模板下载平台，加速应用开发！

**[⬆️ 返回顶部](#目录)**