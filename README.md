# free-for.dev

如今，开发者和开源作者拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间才能做出明智决策。

这里列出了一系列提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本列表的范围限定为基础设施开发人员（系统管理员、DevOps从业者等）可能认为有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此这里会带有主观判断；如果未采纳您的贡献，请勿介意。

这份清单汇集了1600多人提交的Pull Request、评审、想法和工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或停用的服务。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅适用于"即服务"类产品，不包含自托管软件。入选服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们还会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予采纳。

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
  * [集成开发环境与代码编辑](#集成开发环境与代码编辑)
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
  * [Flutter相关与无Mac构建iOS应用](#Flutter相关与无Mac构建iOS应用)
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
  * [基于浏览器的硬件模拟](#基于浏览器的硬件模拟)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商的永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储空间，每日5万次读取、2万次写入和2万次删除操作
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美至全球（除中国和澳大利亚）出站流量
    * Cloud Storage - 5GB存储空间，1GB出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
    * Cloud Build - 每日120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月1万次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份存储（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，每月2万次Get请求和2千次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM和1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每日60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟数（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每日8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、认证授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限事务
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，免费支持1万份文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算服务
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为一个VM或最多4个VM使用
       - [空闲实例](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点采集，10亿个数据点检索
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500 Mbps*核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知服务 - 每月100万次投递选项，1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每日500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，不限次数的速率限制（每域名1条规则），分析，邮件转发
    * [零信任&SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

  * [Zoho](https://www.zoho.com) — 最初作为电子邮件提供商，现提供多种服务套件，部分含免费计划。含免费计划的服务列表：
    * [Email](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
    * [Zoho Assist](https://www.zoho.com/assist) — 永久免费计划包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
    * [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储
    * [Docs](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储。捆绑Zoho Office套件(Writer, Sheets & Show)
    * [Projects](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同计划
    * [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
    * [Meeting](https://zoho.com/meeting) — 最多3名会议参与者和10名网络研讨会 attendees
    * [Vault](https://zoho.com/vault) — 个人可用的密码管理
    * [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5名参与者的远程培训
    * [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
    * [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，zip备份，RSS & Atom订阅，访问控制和可定制CSS
    * [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅免费，1用户，所有支付由Zoho托管。存储最近40个订阅指标
    * [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面，最多50次支付
    * [Desk](https://zoho.com/desk) — 3个客服人员，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)提供1名远程技术支持人员和5台无人值守计算机
    * [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储，无限用户，每频道100用户，SSO
    * [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建器
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
     * [Bookings](https://zoho.com/bookings) - 预约排程

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供构建、部署和发展云应用所需的一切，让您无需操心"服务器相关事务"
* [deployment.io](https://deployment.io) - 帮助开发者在 AWS 上自动化部署。免费版支持单个开发者无限制部署静态站点、网络服务和环境，每月提供10次免费任务执行（含预览和自动部署功能）
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于加强Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA和分层配置模型。无SSO附加费用，所有功能开放。每月免费提供50次运行额度

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 为最多5名用户提供无限量的公共和私有Git仓库，包含CI/CD流水线功能
* [Codeberg](https://codeberg.org/) — 为自由开源项目提供无限量的公共和私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，通过[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，通过[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包与容器托管、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件打造的代码托管平台，包含CI、静态页面、项目页面和问题追踪功能
* [GitGud](https://gitgud.io) — 无限量的私有和公共仓库。永久免费。基于GitLab & Sapphire构建。不提供CI/CD功能
* [GitHub](https://github.com/) — 无限量的公共仓库和私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包与容器托管、项目管理和AI Copilot功能
* [gitlab.com](https://about.gitlab.com/) — 无限量的公共和私有Git仓库（最多5名协作者）。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的友好分支，提供Mercurial版本控制系统支持
* [Pagure.io](https://pagure.io) — Pagure.io是为FOSS授权项目提供的免费开源代码协作平台，基于Git构建
* [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统，无使用限制。其显著特性基于完善的补丁理论，易于学习、使用和分发。解决了git/hg/svn/darcs的诸多问题
* [projectlocker.com](https://projectlocker.com) — 一个免费的私有项目（支持Git和Subversion），提供50MB存储空间
* [RocketGit](https://rocketgit.com) — 基于Git的代码托管服务。无限量的公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 为自由软件项目（GNU项目）提供协作式软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 为自由软件项目（非GNU项目）提供协作式软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫工具、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML知识。免费计划每月包含50张图片和三个模板。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题的根因分析。免费支持最多两个模型。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟调试平台，提供基于规则的即时服务器、CRUD和有状态模拟、代理及CORS管理，加速集成和测试。免费计划每天50次请求，提供公共仪表板/端点，任何拥有仪表板URL的人均可查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代网络API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费计划每月1k积分，相当于1k次并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1k次请求。
  * [Calendarific](https://calendarific.com) - 覆盖200多个国家的企业级公共假期API服务。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包含VIN解码、被盗车辆检查、车辆估值、检测数据等。免费层每月100次请求，覆盖所有9个端点。
  * [Cloudmersive](https://cloudmersive.com/) — 实用工具API平台，完整访问包括文档转换、病毒扫描等在内的广泛API库，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 基于网页的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - 涵盖从训练到生产全流程的MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整数据溯源。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月免费100个订单和最多1,000个SKU。
  * [Composio](https://composio.dev/) - AI代理和LLMs的集成平台。整合了200多个工具，覆盖智能互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API及Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 应用间数据同步的集成工具。可创建实时仪表板和报告，转换和操作数值，收集和备份洞察。免费计划限1用户、1数据连接、1数据源和1数据目标，且需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100份PDF和三个模板。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织成一致定义并交付给每个应用。最快方式是使用Cube Cloud，其免费层每天限1,000次查询。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。类似Postman的界面在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月100次运行。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
  * [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。包含10GB存储和每月120小时运行时间。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型，每个模型10张表。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1k次请求。CC-BY 4.0许可下的精简数据库也免费。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜SDK。免费计划支持每月10位活跃用户（MAU）并跟踪最多4张脸。
  * [Deepnote](https://deepnote.com) - 新型数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费层包含无限个人项目、无限5GB RAM和2vCPU的基础机器，以及最多3位编辑的团队。
  * [DiffJSON](https://diffjson.com) - 在线比较两个JSON数据结构差异的工具，帮助快速定位JSON数据差异。
  * [Disease.sh](https://disease.sh/) — 提供准确数据的免费API，用于构建与Covid-19相关的实用应用。
  * [Doczilla](https://www.doczilla.app/) — SaaS API，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月250份文档。
  * [Doppio](https://doppio.sh/) — 托管API，使用顶级渲染技术生成和私有存储PDF及截图。免费计划每月400份PDF和截图。
  * [drawDB](https://drawdb.app/) — 免费开源的在线数据库图表编辑器，无需注册。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API生成PDF文档。免费计划每月50次API调用并访问模板库。

  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，支持SDK和无代码集成。免费计划每月250页，不限用户数和三个模板。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
* [Financial Data](https://financialdata.net/) - 股票市场和金融数据API。免费计划每天允许300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 一款免费的基于浏览器的工具，可即时格式化、验证、比较和压缩JSON数据。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 筛查订单交易中的信用卡支付欺诈。该REST API会根据订单输入参数检测所有可能的欺诈特征。免费Micro计划每月500笔交易。
* [FreeIPAPI](https://freeipapi.com) - 面向商业和非商业用户的免费、快速、可靠的IP地理定位API，支持JSON格式。
* [Geolocated.io](https://geolocated.io) — 提供多大陆服务器的IP地理定位API，免费计划每天2,000次请求。
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版最多支持五个项目。
* [Hook0](https://www.hook0.com/) - Hook0是一款开源Webhooks即服务(WaaS)，帮助在线产品轻松提供Webhooks。免费版每天可分发100个事件，保留七天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 一款免费、快速且美观的API请求构建工具。
* [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费版每月30k输入字符。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问70多个（云）平台，如Exact Online、Twinfield、ActiveCampaign或Visma。包括数据复制和交换。开发人员和实施顾问可免费使用特定平台，但有数据量限制。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，允许1,000次免费请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费计划每天限1,000次请求。
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费计划同一IP地址每分钟限45次请求。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求。
* [IP2Location.io](https://www.ip2location.io/) — 提供城市、坐标、ISP、ASN等数据的免费增值IP地理定位API。免费计划每月5万次查询，还包括每月500次免费WHOIS和托管域名查询。可查看域名注册详情及特定IP上的托管域名。
* [ipaddress.sh](https://ipaddress.sh) — 以不同[格式](https://about.ipaddress.sh/)获取公共IP地址的简单服务。
* [ipapi.is](https://ipapi.is/) - 开发者专为开发者打造的最佳主机检测能力IP地址API。免注册免费提供1,000次查询。
* [ipapi](https://ipapi.co/) - Kloudend, Inc提供的IP地址定位API，基于AWS构建，受财富500强信赖。免注册免费层每月3万次查询（每天1k）。
* [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费计划每月150次请求。
* [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月5万次）的IP地址数据API。提供地理位置、公司、运营商、IP范围、域名等详细信息。所有付费API均可免费试用。
* [IPLocate](https://www.iplocate.io) — IP地理定位API，每天免费1,000次请求。包括代理/VPN/主机检测、ASN数据、IP到公司映射等。还提供可下载的IP到国家和IP到ASN数据库（CSV或GeoIP兼容MMDB格式）。
* [IPTrace](https://iptrace.io) — 简单易用的API，每月5万次免费查询，提供可靠的IP地理定位数据。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公共IP地址。免费层无需注册。通过CORS可直接从浏览器用客户端JS请求数据。适用于监控客户端和服务器IP变化的服务。不限请求次数。
* [JSON to Table](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
* [JSON2Video](https://json2video.com) - 视频编辑API，可通过编程或无代码方式自动化视频营销和社交媒体视频制作。
* [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、过滤为美观的表格网格。通过链接保存和分享JSON数据。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，自定义HTTP状态码、头部和响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看器、编辑器和验证器。支持AI修复、树形视图、表格视图、12+种编程语言代码生成，以及JSON转CSV、XML、YAML等格式转换。
* [KillBait API](https://killbait.com/api/doc) - 提交URL评估内容，检测潜在标题党并分类文章。设计用于中等发布频率，限每小时1次、每天10次提交。媒体合作伙伴可申请更高限额。
* [Kreya](https://kreya.app) — 免费gRPC GUI客户端，用于调用和测试gRPC API。支持通过服务器反射导入gRPC API。
* [LoginLlama](https://loginllama.app) - 登录安全API，检测欺诈和可疑登录并通知客户。每月免费1,000次登录检测。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等实时和历史金融数据。"永久免费"API层每天允许100次免费请求。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地发布AI代理，速度提升5倍以上。独立开发者和小团队（3席位）永久免费。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取能力或截图服务。每天50次免费请求。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式 playground。1名编辑者免费。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的工具。适用于原型设计/测试/学习。免费版每个项目2个资源。
* [Mockerito](https://mockerito.com/) — 免费模拟REST API服务，覆盖9大领域（电商、金融、医疗、教育、招聘、社交媒体、股市、天气和航空）。无需注册或API密钥，不限请求次数。完美适用于前端原型设计、API测试、Web开发教学。

  * [Mocko.dev](https://mocko.dev/) — 云端API代理服务，可自由选择需要模拟的端点并监控流量，完全免费。加速您的开发和集成测试流程。
* [Multi-Exit IP地址检测工具](https://ip.alstra.ca/) — 免费简易的多节点出口IP检测工具，帮助您了解IP在不同全球区域和服务中的呈现方式。特别适用于测试Control D等基于规则DNS分流工具。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON格式结果。开发者每日可免费查询100次，文章内容有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API，每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 将图像和PDF文件解析为JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3设计器](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [Parseur](https://parseur.com) — 每月20页免费额度：从PDF和邮件中提取数据，AI驱动，提供完整API访问权限。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，提供可视化模板编辑器、HTML转PDF、动态数据集成和PDF渲染API。免费方案包含1个模板和每月100次PDF生成。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者专用PDF生成API，提供类似Stripe风格的文档说明，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转换为PDF，每月100次免费转换。
* [Pixela](https://pixe.la/) - 免费日流数据库服务，所有操作通过API完成，支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用Postman协作平台简化API开发流程。永久免费使用Postman应用，云端功能在特定限制内也永久免费。
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费方案包含每月5个工作流部署和500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，功能包含无限仪表盘和图表、无代码图表构建器和协作式SQL编辑器。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。在rapidapi.com上提供每月1万次请求的免费层级。
* [Reducto](https://reducto.ai) - 将任意非结构化文档(PDF/XLSX/JPG/PPTX等)转换为结构化JSON数据。解析、提取数据并编辑PDF表单。免费层提供1.5万积分和按量付费模式。
* [Rendi](https://rendi.dev) - FFmpeg REST API，无需管理基础设施即可在线运行FFmpeg。免费层包含月度处理配额和4个vCPU资源。
* [RequestBin.com](https://requestbin.com) — 创建免费HTTP请求接收端点，记录所有发送到该端点的请求内容及头信息，便于观察webhook等服务的调用情况。
* [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，实现无限制、无封禁、无验证码的匿名爬取。每月前100次成功抓取免费（含JavaScript渲染功能，联系支持可获更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬取API及免费代理检测服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费1万API积分。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API，返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON结果。免费方案每月100次成功API调用。
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费方案包含每表1,000行免费额度。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费方案包含100次云端抓取额度。
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能的API。免费层每月100次API请求。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供省时省力的开发工具。免费层包含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV即可通过API快速访问数据加速应用开发。免费方案含2个API和每月2,500次调用，无需信用卡。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化验证器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费方案每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送5万条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，具备研究成果组织能力。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址所在国家、城市、区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API，核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API方案，包含全球覆盖的精准天气预报、历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API的平台，具备高级日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月25万次请求限额。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API。免费方案无限调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的VAT号码验证API，每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐时/每日预报和天气警报。通过AI模型和机器学习系统分析多源气象数据提升预报精度。免费层每月1万次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API，每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台，通过实验跟踪、数据集版本控制和模型管理加速模型开发。仅限个人项目的免费层包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费方案每月25,000token额度（约10个PR）。

  * [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API。每月3万次API调用额度。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页抓取API，提供透明定价。每月1,000次免费API调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮政编码API，提供全球邮政数据查询。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮政编码API及邮编验证服务。每月1万次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持从设计、构建到边缘部署全流程。可快速为任何API添加密钥认证、速率限制、开发者文档和商业化功能。基于OpenAPI标准，完全支持Web标准API和Typescript编程。免费版提供10个项目上限、不限量生产环境、每月100万次请求和10GB出口流量。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有与公共制品仓库，公开项目免费使用
* [jitpack.io](https://jitpack.io/) — 面向GitHub上JVM与Android项目的Maven仓库，公开项目免费
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练及部署AI应用，免费方案包含：公开项目、5GB存储、基础实例
* [RepoFlow](https://repoflow.io) - 简化npm、PyPI、Docker、Go、Helm等包管理工具的使用，免费版提供10GB存储空间、10GB带宽、100个软件包及不限用户数的云端服务，也可自托管仅供个人使用
* [RepoForge](https://repoforge.io) - 支持Python、Debian、NPM软件包及Docker镜像的私有云托管仓库，开源/公开项目可享免费方案
* [repsy.io](https://repsy.io) — 提供1GB免费空间的私有/公共Maven仓库

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人与团队协作
* [BookmarkOS.com](https://bookmarkos.com) - 全能免费书签管理工具，集成标签页管理与任务管理，提供可定制的在线桌面环境及文件夹协作功能
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费无限用户，支持完整历史记录与集成，并提供可自托管的开源版本
* [Calendly](https://calendly.com) — 专业会议连接与日程安排工具。免费版支持每位用户1个日历连接与无限会话，提供桌面端和移动端应用
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Chanty.com](https://chanty.com/) — Slack替代方案，小团队(10人内)永久免费，包含无限公私对话、可搜索历史记录、无限1对1语音通话、语音留言、10种集成及20GB团队存储
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每工具自动保存一个条目，提供标准处理速度与社区支持
* [Discord](https://discord.com/) — 支持公私聊天的多功能平台，具备Markdown文本、语音、视频及屏幕共享能力，用户数无限制
* [Dubble](https://dubble.so/) — 免费分步指南创建工具，支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流协作平台，支持IDE结对编程、终端共享、语音视频及屏幕共享，小团队免费
* [element.io](https://element.io/) — 基于Matrix的去中心化开源通讯工具，提供群聊、私信、加密文件传输、音视频通话及多服务便捷集成
* [evernote.com](https://evernote.com/) — 知识组织工具，支持笔记共享与协同编辑
* [Fibery](https://fibery.io/) — 互联工作空间平台，个人用户免费，提供2GB存储空间
* [Fibo](https://fibo.dev) - 免费敏捷团队实时Scrum扑克工具，支持无限成员快速估算故事点
* [Fizzy](https://www.fizzy.do/) - 看板式项目管理与问题追踪平台，免费版支持创建公开看板、设置Webhook、使用卡片标记及无限用户跟踪（上限1000条目）
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间，会议数量无限制，免费支持最多8人同时在线
* [flock.com](https://flock.com) — 高效团队通讯工具，免费提供无限消息、频道、用户及应用集成
* [GitBook](https://www.gitbook.com/) — 技术知识管理与文档平台，涵盖产品文档至内部知识库及API文档，个人开发者免费
* [GitDailies](https://gitdailies.com) - GitHub团队每日提交与PR活动报告工具，含推送可视化、同伴认可系统及自定义提醒构建器。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具，25人以下团队可免费使用无限公私房间
* [gokanban.io](https://gokanban.io) - 免注册语法看板工具，功能完整无限制
* [Hackmd.io](https://hackmd.io/) - 实时协作Markdown文档编辑工具，类Google Docs体验。免费版笔记数量无限制，但私有笔记协作人数与模板功能[存在限制](https://hackmd.io/pricing)
* [HeySpace](https://hey.space) - 集成聊天、日历、时间线与视频通话的任务管理工具，5人以下团队免费
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代方案），免费版支持无限用户、每工作区10GB存储与10GB音视频流量
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭、社区至企业提供安全的聊天与文件传输
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签分类、多工作区协作。免费版含4个工作区与10名成员
* [Lockitbot](https://www.lockitbot.com/) — Slack内共享资源预约锁定工具（如会议室/开发环境/服务器等），免费支持2个资源
* [meet.jit.si](https://meet.jit.si/) — 一键发起免费视频会议与屏幕共享
* [Miro](https://miro.com/) - 可扩展的跨设备企业级协作白板，支持分布式团队，提供免费增值计划
* [Notion](https://www.notion.so/) - 集成任务、维基与数据库的Markdown笔记协作应用，被描述为"一体化工作空间"，支持全平台与网页端访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识协作维基，免费版包含全部核心功能，支持50个条目与5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 免费代码面试平台，内置视频聊天、绘图板及浏览器在线代码编辑器（支持编译运行），一键创建远程面试室
* [paste.sh](https://paste.sh/) — 基于JavaScript与加密的简易粘贴站点
* [Pastefy](https://pastefy.app/) - 美观简洁的Pastebin工具，可选客户端加密、多标签粘贴、API接口及高亮编辑器等功能
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，通过直观界面与数据统计提升时间管理效率
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享与Passkeys的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Pullflow](https://pullflow.com) — 集成GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Pumble](https://pumble.com) - 永久免费团队聊天应用，无用户数与消息历史限制
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间表与追踪工具，免费版支持10人内时间追踪与报告生成
* [Raindrop.io](https://raindrop.io) - 跨平台私密书签工具（macOS/Windows/Android/iOS/Web），免费无限书签与协作功能
* [Revolt.chat](https://revolt.chat/) — Discord的开源替代品，注重隐私保护，免费提供绝大多数Discord专有功能。作为全功能应用，安全快速且100%免费，支持官方/非官方插件
* [Rocket.Chat](https://rocket.chat/) - 开源通讯平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息与完整历史记录
* [ruttl.com](https://ruttl.com/) — 最佳一体化数字反馈工具，支持网站/PDF/图片的评审与批注收集

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步、讨论。云版本仅提供1GB空间
* [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟、画布或变通方案。提供完整功能的免费套餐
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 无限用户免费使用（部分功能受限）
* [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。可追踪上游服务商的状态页面
* [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作工具。免费版支持3个面板、无限用户和1GB存储
* [StreamBackdrops](https://streambackdrops.com) — 视频会议高清虚拟背景库。提供Zoom、Teams和Google Meet的专业背景。无需注册，个人免费使用
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用
* [Teamhood](https://teamhood.com/) - 免费的项目/任务/问题追踪软件。支持带泳道看板和完整Scrum实现，集成时间追踪功能。5名用户和3个项目组合免费
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程。包含面向远程优先团队的完整休假管理功能。5人以下小团队免费
* [Telegram](https://telegram.org/) — 为需要快速可靠通讯和通话的用户打造。大群组、用户名系统、桌面客户端和强大文件分享功能特别适合企业用户和小团队
* [Tencent RTC](https://trtc.io/) — 腾讯实时音视频(TRTC)提供群组音视频通话解决方案。首年每月1万分钟免费时长
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费使用的时间追踪软件。轻松集成Jira、Trello、Asana等项目管理工具
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，支持智能箭头、吸附对齐、便签和SVG导出功能。多人协作模式可实现共同编辑。另提供官方VS Code扩展
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输分享界面。无需订阅即可发送照片、视频等大文件
* [Tugboat](https://tugboat.qa) - 自动按需预览每个pull request。全员免费，非营利组织可享Nano级免费套餐
* [twist.com](https://twist.com) — 异步友好的团队通讯应用，保持对话条理清晰。提供免费无限量套餐，合格团队可享折扣
* [userforge.com](https://userforge.com/) - 互联在线角色画像、用户故事和场景映射工具。保持设计与开发同步，免费支持3个角色和2名协作者
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的可视化反馈工具
* [Webex](https://www.webex.com/) — 视频会议服务，免费套餐支持100人40分钟会议时长
* [Webvizio](https://webvizio.com) — 网站反馈工具和缺陷报告系统，可直接在实时网站、Web应用、图片、PDF和设计文件上进行开发协作
* [whereby.com](https://whereby.com/) — 一键视频通话（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，可通过精简Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多可创建/加入3个非高级工作区
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管服务，提供访客行为分析等营销工具，支持25个视频和Wistia品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 简洁的文件分享服务。不限人数分享5GB以内文件
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB以内文件（有效期24小时）。超过5GB文件采用点对点传输
* [zoom.us](https://zoom.us/) — 安全的视频和网络会议服务。免费套餐限时40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费套餐包含1万条历史消息搜索和5GB文件存储。同时提供可自托管的开源版本

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区版包含1个工作空间、5个用户、2.5万条记录、48种内容类型和2种语言设置。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月流量和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费方案。基于GraphQL的CMS，基础版每月10万次API调用。
* [Hygraph](https://hygraph.com/) - 小型项目免费方案。GraphQL优先API，告别传统方案，采用GraphQL原生无头CMS，实现全渠道内容API优先交付。
* [Prismic](https://www.prismic.io/) — 无头CMS。带全托管可扩展API的内容管理界面。社区计划为单个用户提供无限API调用、文档、自定义类型、资源和多语言支持。开源/开放内容项目可申请更大免费方案。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据库。免费方案包含无限项目、无限管理员用户、3个非管理员用户、2个数据集、50万次CDN API请求、10GB带宽和5GB资源存储。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可创建精美商业网站。支持免费自定义域名，无需信用卡。
* [Squidex](https://squidex.io/) - 小型项目免费方案。API/GraphQL优先，开源且基于事件溯源架构（自动记录每次变更）。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。免费社区版包含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持（无限语言/地区）、资源管理器（最多2500个资源）、图片优化服务、搜索查询、Webhook及每月250GB流量。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git版本化无头CMS，支持Markdown、MDX和JSON格式。基础版免费支持2个用户。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费套餐包含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制——完全自主掌控网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

* [Appinvento](https://appinvento.io/) —— 一款免费的无代码应用构建工具。它提供对自动生成的后端源代码的完全访问权限，并支持无限量API和路由。免费方案包含3个项目与5张数据表。
* [DhiWise](https://www.dhiwise.com/) —— 将Figma设计稿转换为动态Flutter和React应用。其代码生成技术专为优化构建生产级移动端和网页体验的工作流而设计。
* [Karbon Sites](https://www.karbonsites.space) —— 基于AI的站点构建器和编辑器，可通过文本指令、草图或简历生成生产就绪的前端代码。特色功能包括原生Android（APK）导出，以及每月5次生成的免费额度（使用自定义Gemini API密钥可无限生成）。
* [Metalama](https://www.postsharp.net/metalama) —— 专为C#设计的工具，能在编译时动态生成样板代码以保持源代码整洁。开源项目可免费使用；其商业友好型免费方案最多支持3个切面。
* [Supermaven](https://www.supermaven.com/) —— 面向VS Code、JetBrains和Neovim的高速AI代码补全插件。免费版本提供无限量的行内补全功能，并专注于超低延迟体验。
* [v0.dev](https://v0.dev/) —— 由Vercel推出的工具，使用shadcn/ui和Tailwind CSS生成可直接复用的React代码。采用积分制，新用户可获得1,200初始积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和1个存储库（100MB容量）
  * [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限量公有/私有仓库免费
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除常规语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
  * [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版支持无限用户、公有仓库和1个私有仓库
  * [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
  * [CodSpeed](https://codspeed.io) - 在CI流水线中自动化性能追踪。通过精准一致的指标，在部署前发现性能退化问题。开源项目永久免费
  * [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
  * [deepscan.io](https://deepscan.io) — 高级静态分析工具，自动发现JavaScript代码运行时错误，开源免费
  * [DeepSource](https://deepsource.io/) - 持续分析源代码变更，发现并修复安全/性能/反模式/潜在错误/文档/风格等问题。原生集成GitHub/GitLab/Bitbucket
  * [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
  * [eversql.com](https://www.eversql.com/) — 排名第一的数据库优化平台，自动获取数据库及SQL查询的关键洞察
  * [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务（免费）
  * [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
  * [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
  * [holistic.dev](https://holistic.dev/) - 排名第一的PostgreSQL静态代码分析器。自动检测性能/安全/架构等数据库问题
  * [houndci.com](https://houndci.com/) — 针对GitHub提交的代码质量评论，开源免费
  * [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公有或个人仓库免费
  * [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言感知的GitHub PR与提交差异分析，公有仓库免费
  * [shields.io](https://shields.io) — 开源项目质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具，提供预设模板和链接功能。
  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
  * [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站搜索您的项目名称是否可用。
  * [tickgit.com](https://www.tickgit.com/) — 展示代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域。

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化构建、测试和发布移动应用到应用商店，加速高效发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
  * [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD平台。免费版每月200次构建，每次构建10分钟，支持2名团队成员。开源项目可享45分钟构建时长、+1并发和无限制团队规模。
  * [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
  * [Buildkite](https://buildkite.com) — 免费支持3个用户和每月5000分钟作业时长的CI流水线。测试分析免费开发者层包含每月10万次测试执行，开源项目可享更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps工具。20个用户和10个数据库实例内免费
  * [CircleCI](https://circleci.com/) — 功能全面的免费托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。包含多资源类型、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟免费执行时长，无限协作成员，私有项目30个并行任务，开源项目最高8万分钟免费构建时长。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费使用
  * [cirun.io](https://cirun.io) - 公开GitHub仓库免费使用
  * [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时长
  * [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
  * [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版支持1个用户和1个应用环境。
  * [Make](https://www.make.com/en) — 通过可视化界面连接应用并自动化工作流的工具。支持大量应用和主流API。公开GitHub仓库免费使用，免费层包含100 Mb存储、1000次操作和15分钟最小间隔。
  * [Mergify](https://mergify.com) — GitHub工作流自动化和合并队列 — 公开GitHub仓库免费使用
  * [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、任务分布式执行和自动化E2E测试分割加速CI中的单体仓库。免费计划支持最多30名贡献者，包含15万点数的额度。
  * [RunMyJob](https://runmyjob.io) - 通过实时扩展Spike实例更智能地运行GitHub Actions和GitLab CI流水线。免费层包含400 vCPU分钟、800 GB分钟和10个并发高性能任务（每个任务12 vCPU和32 GB内存）。
  * [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub Actions，每月3000分钟免费构建时长。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块注册表、ChatOps集成、通过Open Policy Agent实现持续资源合规、SAML 2.0单点登录，以及公共工作池访问：每月最多200分钟。
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限公开和私有仓库，最高2GB VM规格。
  * [Terramate](https://terramate.io/) - Terraform、OpenTofu和Terragrunt等基础设施即代码工具的编排管理平台。最多2个用户免费使用全部功能。
  * [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化方案，支持PR驱动的工作流、通过自托管运行器实现项目隔离，以及分层运行有序操作。最多3个用户免费使用。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Appetize](https://appetize.io) — 直接在浏览器中通过这款基于云的Android手机/平板模拟器和iPhone/iPad模拟器测试您的Android和iOS应用。免费套餐包含每月两个并发会话，每次使用30分钟。应用大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源可视化测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具套件，用于捕捉CI性能回归。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。您可以在自己的计算机上免费运行无限测试。额外月费可获得云监控和CI/CD集成。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多种SEO、速度和安全性最佳实践。小型网站免费套餐。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分价格监控您的API和应用。采用Monitoring as Code工作流和Playwright驱动。为开发者提供慷慨的免费套餐。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 一款面向开发者和API测试人员的免费工具，用于检查API是否针对给定域名启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试工具。Cypress Test Runner始终免费且开源，无任何限制。Cypress Dashboard对开源项目免费，最多支持5名用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费版功能较少
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包含最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，可帮助不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（+免费可视化测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可为API生成E2E测试（KTests）和模拟或存根（KMocks）。开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户，最长60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为您的Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐提供每天10次测试、每周5次实验和每月15GB最大摄入数据。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和无限项目，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限制为iOS 10次测试和Android 10次测试，但包含付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录包含网络和控制台日志的会话。免费套餐最多创建10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似于CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，允许您在Chrome上运行无限测试，无需注册，每次测试运行最多3分钟。发现错误？您可以复制测试的唯一URL，向开发者展示如何重现错误。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和将手动测试实现为代码的框架，使用GitHub。该服务[对开源免费](https://github.com/marketplace/testspace-com)，每月450个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发人员、个人、教育工作者和刚起步的小团队可以申请超出基本免费项目的折扣和免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，并使用集成工具、组件和设计系统更快迭代、更好设计和简化开发流程。无限项目，五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查Webhook和HTTP请求。完全免费，您可以创建无限URL并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证Webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费网络和服务器工具。
  * [kogiQA](https://kogiqa.com) — 一款无需选择器的Web UI自动化工具。每位开发者每月免费获得500次操作。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费计划包含两名用户，可扫描10个代码库、1个云环境、2个容器和1个域名。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理工具。可搜索证书透明度日志。Beta版后免费支持3个证书和1个用户。
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简单直观的Web应用，无需复杂工具或编程语言即可分析/解码/编码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表遵循最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动化依赖项更新工具，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django网站的安全漏洞。基于Pony Checkup站点分叉开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 快速安全地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，避免重要.env文件丢失。免费支持最多3名团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测和修复，防止敏感信息泄露到源代码中。可扫描350多种密钥类型和敏感文件——个人及25人以下团队免费使用。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条公开GitHub仓库、代码片段、议题和评论中的泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — 面向Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，可跨团队和基础设施管理开发者密钥：涵盖从本地开发到生产环境第三方服务的全流程。最多5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准支持情况，包括IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目数量不限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 多功能SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。支持通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass生成免费SSL证书。
  * [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒和PHP服务器防火墙(WAF)。免费版为注册用户提供邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据已在GitHub公开(https://github.com/unknownhad/AWSAttacks)。完整列表可通过API获取
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目数量不限。
  * [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，进行OWASP风险审计
  * [Socket](https://socket.dev) — 为个人开发者、小团队和开源项目提供的免费供应链安全解决方案。包含应用程序和防火墙CLI工具，保护代码免受漏洞依赖项和恶意软件包影响。可检测70多种供应链风险指标。
  * [SOOS](https://soos.io) - 开源项目无限次免费SCA扫描。在发布前检测并修复安全威胁。通过简单高效的方案保护项目安全。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL网页服务器配置的深度分析
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查和恶意软件扫描器
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等。不限于HTTPS协议。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。250用户以下的应用免费。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [360username](https://360username.com/) - 免费工具，支持在90多个社交平台搜索用户名以匹配个人资料。
* [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端SDK。免费支持1000 MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含2.5万MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费支持5000 MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商集成（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持1万MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个领域(realm)。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500月活用户/50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费支持7500 MAU的起步方案。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10用户，适用于VPN、网站和SSH。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，涵盖认证与授权。免费支持5000 MAU，提供开源自托管选项。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100月活用户。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任托管安全平台。永久免费开发者账户包含完整安全功能、无限团队成员、200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC权限模型，提供实时更新和无代码策略UI。免费1000 MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费支持1000用户/10个SSO连接，采用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户，免费200用户/1万封事务邮件（含"Powered by PropelAuth"水印）。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟快速上手。可免费自托管，或选择含1万免费MAU的SaaS托管版。
* [Stytch](https://www.stytch.com/) - 集成认证与防欺诈功能的All-in-one平台。免费方案含1万MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，在控制用户体验的同时快速实现功能。免费支持5000 MAU。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。包含邮箱密码登录、社交账号认证、Magic Auth、MFA等功能。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费2.5万次认证请求，包含OTP/无密码认证/策略等完整安全功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含5个应用、每月50次下载和最大100MB文件大小。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版功能：应用上传、密码保护链接、1天有效期、10次安装。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费套餐包含1个应用项目、3个应用版本、500MB存储空间和每月100次应用安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版功能：无限次上传、私有链接、访客2天有效期、注册用户60天有效期。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限上传服务。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理工具，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，免费保护无限量设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理部署服务器和站点。免费支持1台服务器
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理平台。免费支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控基于PHP的Web服务器。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 拥有友好界面的服务器管理与部署平台。免费套餐支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。"小狐猴"套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署。
* [courier.com](https://www.courier.com/) — 统一推送API，整合应用内消息、邮件、聊天、短信等渠道，提供模板管理等功能。免费套餐包含每月10,000条消息。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 即时可用的弹性Serverless MQTT代理。永久免费提供每月100万会话分钟数（无需信用卡）。
* [Engage](https://engage.so/) - SaaS客户互动与自动化全栈工具（邮件/推送/SMS/产品导览/横幅等）。每月最多1,000名活跃用户免费。
* [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理。永久免费连接最多100台设备（无需信用卡）。
* [httpSMS](https://httpsms.com) - 将Android设备作为SMS网关收发短信。每月免费收发200条消息。
* [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用实现应用内/邮件/SMS/Slack/推送等多渠道发送。免费套餐含每月10,000条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
* [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件/SMS/站内信/应用内推送等渠道。免费套餐含每月30,000条通知（保留90天）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒内容。免费版：每日50条消息（限1设备1应用）。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）。
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日200,000条消息。
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日100,000次事件。
* [SMSGate](https://sms-gate.app) - Android™短信网关，通过云端路由收发短信。完全免费的云服务（建议每日超过10,000条时通知以保障服务质量）。
* [SuprSend](https://www.suprsend.com/) - API优先的通知基础设施，统一处理事务性/定时/互动通知。免费套餐每月10,000条通知，支持摘要/批量/多渠道/租户等复杂工作流。
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure。永久免费版支持4k消息大小、50个活跃连接和每月5GB数据。
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送数量不限，支持浏览器内消息。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费额度每日10万条日志，保留24小时
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费额度100MB日志
* [logflare.app](https://logflare.app/) — 每个应用每月免费1,296万条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理服务。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储空间，15天存储保留期和7天检索期
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000个字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限量，无限字符串和协作者
* [Free PO editor](https://pofile.net/free-po-editor) — 完全免费
* [Lingo.dev](https://lingo.dev) – 开源的AI驱动CLI工具，适用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管的本地化引擎每月免费使用10,000词。
* [lingohub.com](https://lingohub.com/) — 最多3个用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 免费1,000个源语言字符串，无限语言和贡献者，初创企业和开源优惠
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（包括2个用户、500个键和无限项目）。
* [localizely.com](https://localizely.com/) — 开源免费
* [Loco](https://localise.biz/) — 免费2,000条翻译，无限译者，10种语言/项目，1,000个可翻译资源/项目
* [POEditor](https://poeditor.com/) — 免费1,000条字符串
* [SimpleLocalize](https://simplelocalize.io/) - 免费100个翻译键，无限字符串和语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单个用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源免费

**[⬆️ 返回顶部](#目录)**

## 监控

  * [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费方案。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测点，不限用户数、仪表盘数量和告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/合成监控与深度API监控。免费方案支持1个用户、1万次API及网络检查/1500次浏览器检查运行。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据。
* [cronitor.io](https://cronitor.io/) - 为定时任务、网站、API等提供性能洞察与正常运行时间监控。免费层包含5个监测点。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监测点，推荐他人注册可获更多额度
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测点，5分钟间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助厘清云基础设施支出。每月Google Cloud Platform消费不超过5000美元可免费使用。
* [fivenines.io](https://fivenines.io/) — 提供实时仪表盘和告警的Linux服务器监控——永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志功能。免费版包含：3个用户、10个仪表盘、100条告警、Prometheus和Graphite指标存储（1万条时间序列，14天保留期）、Loki日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。免费支持最多20个检查项。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页聚合器——永久免费提供20个监测点和2个通知渠道（Slack与Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费方案。
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅用户数和团队数。
* [linkok.com](https://linkok.com) - 在线坏链检测工具，100页以内的小型网站免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 带有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控应用与技术栈，支持大规模问题诊断。开发者社区可永久免费使用：日志监控（100万日志事件）、基础设施监控与应用性能监控（2台主机）。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。"永久免费"方案支持HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），提供2个仪表盘/状态页。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是实时指标采集的开源工具。持续迭代的产品，也可在GitHub找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师构建更完善软件。从单体架构到无服务器，可观测所有组件并分析、排查和优化整个软件栈。免费层包含：每月100GB数据摄入、1个全权限用户、不限基础用户。
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站与API正常运行时间监控、定时任务监控及状态页。前5个监测点（3分钟间隔）免费，通过Slack、Discord和邮件发送告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火长城屏蔽。通过对比中国与美国服务器的DNS结果和ASN信息识别DNS污染。
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监测点（每日检查）。
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控永久免费支持10万次事件（不限项目和状态页数量）。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。不限URL数量，通过Discord、Slack或邮件接收宕机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测点（10分钟间隔）。监控SSH、HTTP、HTTPS及任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层包含1个可公开定制的状态页（SSL子域名）。开源项目与非营利组织可免费使用专业版。
* [Pulsetic](https://pulsetic.com) - 永久免费包含：10个监测点、6个月历史运行记录/日志、不限状态页和自定义域名！无限期不限量邮件告警，无需信用卡。
* [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。可自带Prometheus或安装一体化套件。免费层支持最多20个Kubernetes节点，通过Slack、Microsoft Teams、Discord等发送告警，集成PagerDuty、OpsGenie、VictorOps、DataDog等工具。
* [Servervana](https://servervana.com) - 支持大型项目与团队的高级正常运行时间监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费层包含10个HTTP监测点、1个DNS监测点和1个状态页。
* [Simple Observability](https://simpleobservability.com) — 统一指标与日志的强力服务器监控平台，无需复杂配置。免费支持1台服务器。
* [sitesure.net](https://sitesure.net) - 网站与定时任务监控——免费2个监测点
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计项，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费不限量测试（有限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监测点
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS与域名监控。免费监控10台服务器、10个正常运行时间监测点和10个域名。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，支持告警与指标。
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监测点（5分钟间隔）和可定制状态页（商用亦可）。通过邮件和Telegram享受不限量实时通知。无需信用卡即可开始。
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站（60秒间隔），提供公开状态页。
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [Axiom](https://axiom.co/) — 提供0.5TB日志存储（保留30天），包含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务，每月免费5,000次错误报告，自托管可无限使用
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月免费2,000次错误报告
* [CatchJS.com](https://catchjs.com/) — 带屏幕截图和点击轨迹的JavaScript错误追踪，开源项目免费
* [elmah.io](https://elmah.io/) — 面向开发者的错误日志与运行状态监控，开源项目可免费使用Small Business订阅版
* [Embrace](https://embrace.io/) — 移动应用监控，小团队每年100万用户会话内免费
* [exceptionless](https://exceptionless.com) — 实时错误/功能/日志报告等服务，每月免费3,000事件/1用户，开源且支持无限量自托管
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪，兼容Sentry SDK，每月免费1,000事件，自托管无限制
* [honeybadger.io](https://www.honeybadger.io) — 异常/运行状态/定时任务监控，小团队和开源项目免费（每月12,000次错误）
* [Jam](https://jam.dev) — 开发者友好型一键提交错误报告，免费版支持无限次记录
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台，[Nordic](https://app.memfault.com/register-nordic)/[NXP](https://app.memfault.com/register-nxp)/[Laird](https://app.memfault.com/register-laird)设备免费支持100台
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费版每月5,000次错误/无限用户/30天留存
* [Semaphr](https://semaphr.com) — 移动应用免费一站式熔断机制
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供基础免费方案（每月5,000次错误/1用户），自托管无限制
* [Whitespace](https://whitespace.dev) — 浏览器内一键提交错误报告，个人用户免费无限录制

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，提供容错输入、相关性排序和UI组件库，轻松打造搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，让用户能在产品内搜索内容、导航、功能等，提升功能可发现性。每月1,000名活跃用户以内免费，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络技术和Python等领域的免费认证课程
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业领先专家的免费短期课程，让您在一小时内获得最新生成式AI工具的实践体验
* [DevNet Academy](https://devnet-academy.com/) - 为Cisco DevNet Expert/CCIE Automation认证提供的免费自学培训，涵盖Python Click和Flask-RESTx
* [Django-tutorial.dev](https://django-tutorial.dev) - 免费在线Django学习指南，适合作为首个框架学习，并为用户撰写的文章提供免费dofollow反向链接
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000多门免费在线课程，专注计算机科学、工程和数据科学领域
* [Exercism](https://exercism.org) - 非营利组织提供的75+种编程语言免费开源编程教育，配备人工指导
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量专业简历模板的免费平台，支持克隆、完整编辑和下载，经过ATS优化
* [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [全栈开放课程](https://fullstackopen.com/en/) - 关于React、Node.js、GraphQL、TypeScript等现代Web开发的大学级别免费课程，完全在线且自定进度
* [交互式简历](https://interactive-cv.com) - 具备AI功能的简历生成器，支持实时编辑和ATS优化。免费版包含简历自动转换为高级模板(Harvard、Europass)、PDF导出、无限职位发布洞察的求职追踪器，以及带聊天/语音功能的简历分享
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS、JavaScript和SQL基础与进阶学习的免费在线指南
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目培养Linux、DevOps、网络安全、编程和数据科学等技能
* [MIT开放课程](https://ocw.mit.edu/) - 提供2500多门MIT课程资料的在线出版物，向全球学习者和教育者免费分享知识。YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发各个方面的免费学习路线图
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby进行Web开发的开源免费课程平台
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费发送1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，免费创建无限邮箱别名。
  * [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费。
  * [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录。
  * [Buttondown](https://buttondown.email/) — 邮件订阅服务，最多100名免费订阅者。
  * [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly，但用于联系表单）。
  * [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器。
  * [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，由roundsphere.com提供的免费服务。
  * [DNSExit](https://dnsexit.com/) - 免费提供最多2个域名邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具，无需暴露凭证，免费层每月200次请求，2个邮件模板，请求限制50KB，有限联系人历史记录。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封。
  * [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封邮件免费。
  * [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证。
  * [EtherealMail](https://ethereal.email) - Ethereal是一个模拟SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。完全免费的反事务性邮件服务，邮件永不投递。
  * [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发服务。创建并转发无限数量的域名邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD需付费，因垃圾邮件问题）。
  * [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD中的邮件功能。免费账户每天永久15封邮件。
  * [ImprovMX](https://improvmx.com) – 免费邮件转发。
  * [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过Chrome扩展删除。适合测试注册流程。
  * [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动3天后删除。开源且可自托管。
  * [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费。
  * [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API。每月5000封邮件，无限域名，免费邮箱验证、黑名单监控、邮件测试等。
  * [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示。
  * [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封邮件免费。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86400次）。
  * [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封邮件免费。
  * [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件及自动化功能免费。
  * [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费。
  * [MailerSend.com](https://www.mailersend.com) — 邮件API和SMTP，每月3000封事务性邮件免费。
  * [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱。
  * [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每日200封发送限制）。
  * [mailsac.com](https://mailsac.com) - 免费临时邮件测试API，免费公共邮件托管，出站捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）。
  * [Mailtrap.io](https://mailtrap.io/) — 邮件API和SMTP，每月3500封事务性和营销邮件免费。开发用模拟SMTP服务器，免费套餐包含1个收件箱、100条消息、无团队成员、每秒2封邮件、无转发规则。
  * [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享单一收件箱。
  * [OneSignal](https://onesignal.com/) — 每月10000封邮件免费，无需信用卡。
  * [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据并发送到服务器）。
  * [Plunk](https://useplunk.com) - 每月3000封邮件免费。
  * [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC每周摘要。
  * [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务提供商，内置端到端加密。免费1GB存储空间。
  * [Resend](https://resend.com) - 开发者事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名。
  * [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者。
  * [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费。
  * [SimpleLogin](https://simplelogin.io/) – 开源可自托管的邮箱别名/转发解决方案。免费10个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 无限免费邮件订阅服务。开始收费时才需付费。
  * [Sweego](https://www.sweego.io/) - 欧洲开发者事务性邮件API。每天100封邮件免费。
  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮件服务，支持多个邮箱同时使用和转发。
  * [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址会更新。完全免费，无任何服务费用。
  * [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，判断是否为临时邮箱。
  * [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期。
  * [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告，无追踪。免费1GB存储空间，1个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自托管。
  * [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证。
  * [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台。支持代码化配置和全类型化的Typescript SDK，深度集成Next.js、React等框架。提供慷慨的免费套餐和低成本扩展方案。
  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队成员，提供卓越技术支持与合理定价。免费套餐包含10个开关、2个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 安全发布功能：跨Web、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多支持3个用户免费使用，不限功能开关和实验数量。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费使用，不限功能开关和A/B测试数量。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。免费套餐包含无限席位、开关、实验和动态配置，支持每月100万次事件。
  * [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费套餐包含10个开关、2个环境和不限请求次数。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费套餐中。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [Befonts](https://befonts.com/) - 提供多款独特字体，支持个人和商业用途
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [dafont](https://www.dafont.com/) - 本站所有字体均属原作者所有，分为免费版、共享版、试用版和公有领域版本
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Font Squirrel](https://www.fontsquirrel.com/) - 精选多款允许商用的免费字体，以易用格式呈现
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的丰富字体下载资源
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，包含CJK(中/日/韩)字体标签
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，所有字体均可用于个人和商业项目
* [Google Fonts](https://fonts.google.com/) - 通过下载或CDN链接快速为网站添加多款免费字体

**[⬆️ 返回顶部](#目录)**

## 表单

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化图形界面，支持与Google Sheets、Airtable、Slack、电子邮件等集成。
* [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建器。可创建注册登录、用户引导、支付流程、复杂财务应用等。免费版每月允许最多250次提交和五个活跃表单。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集总计25条反馈提交。提供React和Vue组件便于集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特风格的表单——不限创建表单数量或功能限制。免费版每月可获100次提交。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，每月不限单页表单数量，100次提交/月，邮件通知。
* [forms.app](https://forms.app/) — 创建含条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100条回复，支持网站嵌入或链接使用。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单，每月250次提交，客户团队提供支持。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每月每表单限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [HeroTofu.com](https://herotofu.com/) - 含机器人检测和加密存档的表单后端。通过界面将提交转发至邮件、Slack或Zapier。可使用自有前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版可创建无限表单并收集无限提交，含预制模板、反垃圾和100MB文件存储。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点1个表单，每月1000次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF，每个PDF限3次提交。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB文件存储，支持Zapier集成、CSV/JSON导出、自定义重定向和响应页面、Telegram & Slack机器人、单邮件通知。
* [staticforms.xyz](https://www.staticforms.xyz/) - 免费轻松集成HTML表单，无需服务器端代码。用户提交后，表单内容将发送至注册邮箱。
* [Survicate](https://survicate.com/) — 一站式工具收集全渠道反馈并发送跟进调查。AI自动分析反馈提取洞察。免费版含邮件、网站、产品内或移动端调查、AI调查创建器和25次月度回复。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入设计精美的表单。免费版每表单限10个字段，每月100次回复。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版含1个活跃调查，每调查25次回复和可定制模板。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，可通过webhook接收通知。免费版会对签署文件添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 无需编写后端代码的静态&JAMStack网站联系表单。免费版支持无限表单、无限域名和每月250次提交。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Arize AX](https://arize.com) - AI工程平台，帮助AI工程师/产品经理通过内置Alyx智能体评估和监控AI应用。免费版包含每月25k spans和1GB数据摄入量
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，消除噪声和回声同时保持人声自然清晰。完全免费：支持无限次一键增强，无需登录，兼容MP3/WAV/FLAC格式
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估系统、提示词调试平台和数据管理工具。免费计划每周提供最多1,000条私有评估数据
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码和医疗管理功能。专业套件还提供免费试用
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产全生命周期中评估、测试和部署LLM应用。[#开源项目](https://github.com/comet-ml/opik/)
* [Keywords AI](https://keywordsai.co) - 顶尖的LLM监控平台。两行代码即可调用200+种大语言模型。每月10,000次免费请求，平台功能完全免费！
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，协助团队协作调试、分析和迭代LLM应用。永久免费版包含每月5万次观测和全部平台功能。[#开源项目](https://github.com/langfuse/langfuse)
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词和数据集，并调试LLM应用性能问题。为任何LLM生成开放遥测标准追踪数据，兼容所有观测性客户端。免费版每月提供5万次追踪
* [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，促进技术人员与非技术团队协作微调和生产化生成式AI产品。免费版包含全部平台功能，每月1k次追踪和1个工作流DSPy优化器。[#开源项目](https://github.com/langwatch/langwatch)
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供10万免费字数额度，支持Azure OpenAI、DeepSeek和Google Gemini模型，赋能代码生成、深度研究和图像创作
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型包括DeepSeek R1/V3、Llama和Moonshot AI。这些模型擅长自然语言处理，适合多样化开发需求。注意免费模型有速率限制，高级需求可使用Claude/OpenAI/Grok/Gemini/Nova等付费模型
* [Othor AI](https://othor.ai/) - 面向AI原生的快速、简洁且安全的商业智能解决方案，替代Tableau/Power BI/Looker。利用大语言模型(LLMs)分钟级交付定制商业智能方案。永久免费版提供1个工作区、5个数据源连接和单用户无限分析权限。[#开源项目](https://github.com/othorai/othor.ai)
* [Pollinations.AI](https://pollinations.ai/) - 易用的免费图像生成AI，提供免注册API。无需API密钥，提供多种网站/工作流集成方案。[#开源项目](https://github.com/pollinations/pollinations)
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，包含观测套件和AI网关。每月免费发送和记录1万次请求
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可完全免费使用
* [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，自动修复Cursor/Windsurf/Copilot等工具输出以满足企业质量和合规标准。免费版包含每日100次MCP服务器调用和25次GitHub App自动PR审查

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供 Bootstrap、Bootswatch 和 Font Awesome 的 CDN 服务
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费 5 TB CDN 流量，19 个核心节点，1 个域名和通用 SSL
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs 是一个由 Cloudflare 提供支持的开源免费 CDN 服务，被超过 11% 的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是最流行的开源 JavaScript 库的内容分发网络
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费 1 TB 流量和 100 万次请求，并提供免费 DNS 托管
* [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管了如 jQuery 等流行的第三方 JavaScript 库，方便您轻松将其添加到 Web 应用中
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费 DDoS 防护
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费 DDoS 防护和 SSL 证书
* [PromoProxy](https://promoproxy.net/) - 免费的云端安全 Web 网关。免费计划支持最多 5 个用户和每天 1 GB 流量
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，使用 Cloudflare 托管文件
* [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN。每月每个域名免费 100 万次请求
* [statically.io](https://statically.io/) — 为 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片提供的 CDN
* [Stellate](https://stellate.co/) - Stellate 是一个极速、可靠的 GraphQL API CDN，免费支持两项服务
* [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不宕机的 CD。个人使用免费，支持一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。实时处理图片并拥有全球缓存

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或管理基础设施即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费预览版每小时包含 500 次调用，每天 2,500 次调用，每月 50,000 次调用。自定义域名仅在付费计划中可用。
  * [anvil.works](https://anvil.works) - 仅用 Python 开发 Web 应用。免费层包含无限应用和 30 秒超时限制。
  * [Apply.build](https://apply.build/) — 免费构建和部署 GitHub 应用，提供 0.5 vCPU / 512 MiB 内存、欧洲服务器、自动防火墙、实时性能指标。支持 Node.js、Python、Go、Java、静态网站、微服务等。
  * [appwrite](https://appwrite.io) - 无限项目且无项目暂停（支持 WebSocket）和认证服务。免费层每个项目包含 1 个数据库、3 个存储桶和 5 个函数。
  * [Choreo](https://wso2.com/choreo/) - 面向 AI 的原生内部开发者平台即服务。免费层包含最多 5 个组件和每月 100 美元额度。
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限。
  * [Daestro](https://daestro.com) - 跨云提供商和本地环境运行计算任务。免费层包含最多 10 个并发任务、2 个计算实例、自托管计算、1 个云提供商、1 个容器注册表和 1 个定时任务。
  * [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的分布式系统，支持 JavaScript、TypeScript 和 WebAssembly。免费层每天包含 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – 提供 GitHub CI/CD、SSH 和 MariaDB/Postgres 数据库的 Linux 托管服务。免费版包含 1 GB 存储和每月 1 GB 网络流量限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 通过静态分析提供自动基础设施、无样板代码等的后端框架。包含业余项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过 Git 推送式工作流在自有 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 仓库的开发者可享免费层。AWS 费用通过 AWS 计费，但可使用额度和 AWS 免费层。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 为 Elixir/Phoenix 应用提供 1 个永不休眠的免费实例和免费层 PostgreSQL 数据库（限制为 2 个连接、10,000 行且无备份）。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是面向开发者的无服务器平台，支持全球应用部署。通过基于 Git 的部署、原生自动扩展、全球边缘网络及内置服务网格和发现，无缝运行 Docker 容器、Web 应用和 API。免费实例可在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管 PostgreSQL 数据库在德国法兰克福、美国华盛顿特区和新加坡可用。512MB 内存、2GB 存储和 0.1 CPU。
  * [leapcell](https://leapcell.io/) - Leapcell 是可靠的分布式应用平台，提供支持快速成长所需的一切。免费计划包含 10 万次服务调用、1 万次异步任务和 10 万次 Redis 命令。
  * [Northflank](https://northflank.com) — 通过强大的 UI、API 和 CLI 构建和部署微服务、任务及托管数据库。从版本控制和外部 Docker 注册表无缝扩展容器。免费层包含 2 个服务、2 个定时任务和 1 个数据库。
  * [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台。基于任意触发器开发工作流。工作流是可[免费](https://docs.pipedream.com/pricing/)运行的代码。无需管理服务器或云资源。
  * [Railway](https://railway.app/) - 通过基于 Git 的部署、自动 CI/CD 和内置数据库部署任意内容。免费层每月包含 5 美元额度。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — 云端 Python 应用托管。初学者账户免费，1 个 Python Web 应用（域名为 your-username.pythonanywhere.com）、512 MB 私有文件存储和 1 个 MySQL 数据库。
  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，可快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费计划](https://wundergraph.com/pricing)包含最多 3 个项目、1GB 出口流量和每月 300 分钟构建时间。
  * [YepCode](https://yepcode.io) - 在无服务器环境中连接 API 和服务的全能平台。兼具 NoCode 工具的敏捷性与编程语言的强大功能。免费层包含 [1,000 次 yeps](https://yepcode.io/pricing/)。
  * [Zeabur](https://zeabur.com) - 一键部署服务。免费支持 3 个服务，每月赠送 5 美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用内事件触发时发送Slack消息或添加Google表格行。每月免费额度达5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web Baas服务，含1GB免费文件存储、每月5万次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速构建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [Claw.cloud](https://run.claw.cloud) - 提供每月$5免费额度的PaaS平台（需GitHub账号注册超过180天），适合托管应用、数据库等。([含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin))。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [ETLR](https://etlr.io) - 使用YAML定义、版本化和部署自动化脚本。开发者优先的拖拽工具替代方案，适用于定时任务、AI代理和基础设施监控。免费层含100积分/月。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用界面，集成Firebase。免费计划包含UI构建器和免费模板的完整访问权限。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能（通常需数周开发）。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费支持2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟。
* [LeanCloud](https://leancloud.app/) — 移动后端服务。免费含1GB数据存储、256MB实例、每日3千次API请求和1万次推送。（API与Parse Platform高度相似）
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月1万封邮件发送额度，含无限联系人和自动预热功能。
* [paraio.com](https://paraio.com) — 具备灵活身份验证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pusher.com](https://pusher.com/beams) — 2000月活用户享受免费无限推送通知，统一支持iOS和Android设备的API。
* [simperium.com](https://simperium.com/) — 即时自动同步多平台数据，无限结构化数据传输与存储，最高2500用户/月。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，用于构建后端。免费计划含身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 具备身份验证、配额、监控和分析的API管理平台。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用以自动化任务。每15分钟5次Zap触发/每月100次任务。
更新时间：五个活跃自动化流程，支持Webhooks。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持与15+种数据库及任何API集成
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，提供可定制的移动端和网页应用。具有拖拽式界面，支持离线操作、实时定位追踪及多种第三方服务集成
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费版支持1名用户及每月100万次工作流活动（[德语版本](https://www.manubes.de)同样可用）
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每个应用0.5GB存储和1GB内存。免费层也允许使用Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 支持本地或云部署的企业级网页开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可定制性。任何能用JavaScript和API实现的功能均可通过ReTool完成。免费层允许每月最多5个用户，不限应用数量和API连接
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。可连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发程序
* [UI Bakery](https://uibakery.io) — 低代码平台加速定制化Web应用开发。支持通过JavaScript/Python/SQL深度定制UI拖拽功能，提供云端和自托管方案。免费版最多支持5个用户

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费虚拟主机，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。支持自定义Web服务器，可通过FTP/WebDAV/SSH访问，包含邮箱服务、邮件列表和应用安装器（免费版不支持自定义域名）。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL，提供应用安装器和邮件发送功能，无广告。
* [Bubble](https://bubble.io/) — 可视化编程平台，无需代码即可构建网页/移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注于Web3前端的去中心化托管平台，提升运行时间与安全性，为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform入门级免费部署三个静态站点。
* [FreeFlarum](https://freeflarum.com/) — 社区支持的免费Flarum托管（支持250用户，捐赠可移除页脚水印）。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名与SSL，每月100GB流量，260+个Cloudflare CDN节点。
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，500MB内存，SFTP支持（1GB磁盘空间）。
* [Neocities](https://neocities.org) — 静态站点托管，1GB免费存储+200GB流量。
* [Netlify](https://www.netlify.com/) — 每月300积分额度（约30GB流量）的静态站点构建/部署/托管服务。
* [Oaysus](https://oaysus.com) — 面向React/Vue/Svelte组件的可视化页面构建器，免费版包含1个站点（不限页面数）、表单提交功能和全球CDN托管。
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供多种托管形式（静态/容器化/WordPress等一键部署应用）。免费包含1个网站托管+1个数据库，100GB流量/300分钟构建时长每月。
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管平台，含自动化DevOps和可扩展架构，开发者与代理商免费（不支持自定义域名）。
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，开发者友好设计，免费层支持静态资源/预发布环境/开发应用。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能。
* [render.com](https://render.com) — 一体化云平台，提供免费SSL/全球CDN/私有网络/Git自动部署，Web服务/数据库/静态网页均有免费方案。
* [Serv00.com](https://serv00.com/) — 3GB免费空间（含7天每日备份），支持Crontab/SSH/代码仓库(GIT/SVN/Mercurial)，兼容MySQL/PostgreSQL/MongoDB及PHP/Node.js/Python/Ruby/Java等20+语言环境。
* [SourceForge](https://sourceforge.net/) — 免费发现、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者专用静态网页发布平台，支持无限站点+自定义域名。
* [tilda.cc](https://tilda.cc/) — 1个站点/50个页面/50MB存储，仅限170+预设区块中的基础款，不支持自定义字体/网站图标/域名。
* [Vercel](https://vercel.com/) — 每次`git push`自动生成带SSL/全球CDN的预览URL，完美支持Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的建站工具，免费版含无限网站/70+区块/5套模板，支持自定义CSS/网站图标/SEO/表单（无自定义域名）。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析器，快速安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) - 含API的免费DNS服务，提供多种免费DNS功能
  * [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名（50条记录）
  * [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)支持
  * [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务
  * [dnspod.com](https://www.dnspod.com/) - 免费DNS托管
  * [duckdns.org](https://www.duckdns.org/) - 免费DDNS服务（最多5个域名），含多种配置指南
  * [Dynv6.com](https://dynv6.com/) - 免费DDNS服务，支持[API](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF、SRV、TXT等）
  * [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名（注册后通过"Subdomains"菜单获取）
  * [Glauca](https://docs.glauca.digital/hexdns/) - 最多托管3个域名的免费DNS服务，支持DNSSEC
  * [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管
  * [LocalCert](https://localcert.net) - 提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络
  * [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能齐全且限制合理
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务
  * [nextdns.io](https://nextdns.io) - DNS防火墙，每月30万次免费查询
  * [noip.at](https://noip.at/) - 免注册/无追踪/无广告的免费DDNS服务，域名数量不限
  * [noip](https://www.noip.com/) - 动态DNS服务，免费提供3个主机名（需每30天确认）
  * [sslip.io](https://sslip.io/) - 免费DNS服务，当查询包含IP地址的主机名时返回该IP
  * [VolaryDDNS](https://volaryddns.net) - 高性能免费DDNS，无订阅/无广告
  * [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管
  * [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名（最多10条记录）

**[⬆️ 返回顶部](#目录)**

## 域名

  * [DigitalPlat](https://domain.digitalplat.org) — 免费子域名服务
* [pp.ua](https://nic.ua/) — 提供免费的pp.ua子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷高效地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费提供10GB（类Amazon S3）对象存储服务
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 兼容S3协议的对象存储。每月免费15GB存储空间和15GB下载流量。
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费5GB存储空间。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是一个专为 JavaScript 开发者打造的全栈低代码开发平台，基于 MySQL 和 GraphQL 构建，提供无服务器后端即服务。通过 UI 应用构建器快速开发 Web 应用，免费套餐包含：2,500 行数据、500MB 存储空间、1GB/小时无服务器计算资源和 5 个客户端应用用户。
* [airtable.com](https://airtable.com/) — 界面类似电子表格的关系型数据库，免费版支持无限基数、每个基础表 1,200 行数据和每月 1,000 次 API 请求
* [Aiven](https://aiven.io/) - Aiven 开源数据平台提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点配置为 1 CPU、1GB 内存，PostgreSQL 和 MySQL 还包含 1GB 存储空间。可轻松迁移至更高级方案或跨云部署。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费版每月提供 5,000 万请求单位（RU）和 10GiB 存储空间（价值 15 美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费版提供 5GB 存储和每分钟 60 次 API 调用，支持 2 名开发者，无需信用卡。
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，包含 1 个节点和 8GB 存储，专为开发者打造，支持从物联网到人工智能的新一代应用开发
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式 SQL 数据库。[免费版 CRFREE](https://crate.io/lp-crfree)：单节点配置为 2 CPU、2GiB 内存和 8GiB 存储，每个组织可创建一个集群，无需支付方式。
* [filess.io](https://filess.io) - filess.io 平台支持免费创建两个数据库（每个数据库最大 10MB），可选 DBMS 包括：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费版限制：每 5 分钟写入 3MB、读取 30MB 以及 10,000 个基数序列
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费版支持最高 25MB 内存、1 个代理服务器和基础分析功能
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费版提供 512MB 存储
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。免费版限制图形规模（5 万节点，17.5 万关系）。
* [Neon](https://neon.tech/) — 托管 PostgreSQL，免费版包含：0.5GB 总存储空间、1 个项目、10 个分支、无限数据库、始终可用的主分支（5 分钟后自动暂停）、非主分支计算每月 20 小时活跃时间。
* [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。免费版包含：无限数据库、永不停止服务、1GB 总存储空间、5,000 万查询令牌、自动扩展和无限向量嵌入。
* [Prisma Postgres](https://prisma.io/postgres) - 基于 unikernel 和裸机运行的超快托管 Postgres，免费版提供 1GB 存储、10 个数据库，并与 Prisma ORM 深度集成。
* [restdb.io](https://restdb.io/) - 快速简洁的 NoSQL 云数据库服务。提供模式定义、关系管理、自动生成 REST API（支持类 MongoDB 查询）以及高效的多用户管理界面。免费版支持 3 个用户、2,500 条记录和每秒 1 次 API 请求。
* [scalingo.com](https://scalingo.com/) — 主要提供 PaaS 服务，但包含 128MB 至 192MB 的免费 MySQL、PostgreSQL 或 MongoDB 方案
* [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的类电子表格灵活数据库。免费版包含无限表格、2,000 行数据、1 个月版本历史记录和最多 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云端数据平台，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库强大功能及主流商业应用集成的工具。免费版包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
* [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse 服务，支持通过 HTTP 无连接数据摄取，并可将 SQL 查询发布为托管 HTTP API。免费版无时间限制，提供 10GB 存储和每日 1,000 次 API 请求。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验方案。永久免费版提供：9GB 总存储空间、最多 500 个数据库、3 个部署位置、每月 10 亿行读取量，以及 SQLite 本地开发支持。
* [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费版每月 50 万次命令、256MB 最大数据库容量和 20 个并发连接
* [Upstash Kafka](https://upstash.com/kafka) — 无服务器 Kafka 服务，免费版每日 10,000 条消息、100MB 存储空间和 2 个主题分区
* [Xata Lite](https://lite.xata.io/) - Xata Lite 是无服务器数据库，内置强大搜索分析功能。提供统一 API、多类型安全客户端库，并优化开发工作流。免费版包含 10 个分支和 15GB 存储空间，无暂停或冷启动问题。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露到本地网络或通过隧道生成公网URL
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全扩展类局域网网络，免费版支持最多5人无限网络
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。每月10万请求/10万次尝试，保留3天数据
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公网URL
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道暴露本地服务，提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)
* [LocalXpose](https://localxpose.io) — 反向代理工具，免费版隧道有效期15分钟
* [ngrok.com](https://ngrok.com/) — 将本地服务通过隧道暴露为公网URL
* [Pinggy](https://pinggy.io) — 单命令生成localhost公网URL，无需下载。支持HTTPS/TCP/TLS隧道，免费版有效期60分钟
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网网络，支持无限节点(Hamachi替代方案)
* [serveo](https://serveo.net/) — 将本地服务暴露到公网，无需安装注册，提供免费子域名且无限制
* [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) Twilio STUN服务
* [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) - Google STUN服务
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议，支持MacOS/iOS/Windows/Linux/Android设备，个人免费版支持100个设备和3个用户
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公网或内网(如localhost)，也可通过隧道暴露私有网络中的服务
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽，单地理区域
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务，免费版支持25个客户端组成的端到端加密网络，提供桌面/移动/NA客户端，可通过网页界面配置路由规则和审批私有网络新节点

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一体化项目发布平台。免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内网和项目管理工具。免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图）。免费版最多15用户/图表，25张图纸
* [clickup.com](https://clickup.com/) — 项目管理平台。基础功能免费，含云存储的付费版本。提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪和时间表应用。永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，专为AWS优化并支持实时数据展示。免费版允许单个用户创建无限私有图表
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian团队协作与知识共享工具。免费版最多支持10个用户
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持3个项目，不限用户数，1GB存储空间
* [diagrams.net](https://app.diagrams.net/) — 支持本地存储至Google Drive/OneDrive/Dropbox的在线图表工具。全功能免费且不限存储层级
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具。免费版每月提供3个公共看板和每个看板1次调研
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理。免费版不限项目/用户/文件存储
* [GForge](https://gforge.com) — 复杂项目的自托管/SaaS项目管理与问题追踪套件。SaaS免费版前5个用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专用的免费描述转图表工具。通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 对比两个GraphQL模式差异的工具，会精确标记破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 提供永久免费版在线客服软件的轻量级解决方案，通过复制粘贴脚本即可部署
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板数，提供100MB存储
* [Ilograph](https://www.ilograph.com/) — 支持多视角查看的基础设施交互图表工具，可用代码表达图表。免费版允许创建无限私有图表（最多3个查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版最多支持10个用户
* [kan.bn](https://kan.bn/) - 灵活强大的看板工具。免费版支持1个用户创建无限看板/列表/卡片
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。基础功能免费，付费版提供更多选项
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理。免费版提供2个看板和2个用户，不支持附件
* [Kitemaker.co](https://kitemaker.co) - 覆盖产品全生命周期的协作平台，支持Slack/Discord/Figma/Github集成。不限用户/空间数，免费版最多250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具，提供网页版和Chrome扩展程序。完全免费
* [Kumu.io](https://kumu.io/) — 支持动画/装饰/筛选/聚类/表格导入的关系图谱工具。免费版允许创建无限公开项目（不限图谱规模），学生可创建私有项目，沙盒模式支持临时文件编辑
* [leiga.com](https://www.leiga.com/) — 采用AI自动管理项目的SaaS产品。免费版支持10个用户/20个自定义字段/2GB存储，AI视频录制限5分钟/视频，自动化执行20次/用户/月
* [Linear](https://linear.app/) — 极简风格问题追踪工具。免费版不限成员数，支持10MB文件上传和250个问题（归档除外）
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具。免费版提供3个可编辑文档/100个专业模板和基础协作功能
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具。免费版支持3个项目和无限成员
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。永久免费的基础版提供100MB存储和5个用户/团队，不限工作区/会议/任务/时间表/问题追踪
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具。免费版不限成员数，支持5MB文件上传和1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（共识估算工具）。不限用户/团队/会话/轮次/投票数，无需注册
* [Pulse.red](https://pulse.red) — 极简风格的项目时间追踪工具
* [ScrumFast](https://www.scrumfast.com) - 直观易用的Scrum看板工具，免费版最多5个用户
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/销售/客服设计的项目管理平台，特别适合外包和跨组织协作。免费版支持3个项目和5个成员
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告工具。免费版每月每应用限10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10个用户
* [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发者的项目管理平台，开源项目免费
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具。免费版提供1个工作区（不限任务/项目数）、1GB文件存储、1周项目历史记录和5人视频会议
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/计划工具。最多支持15个用户免费使用

  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰游戏、GIF动图和表情符号。免费版支持3次回顾会议和无限成员参与。
* [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具。该SaaS产品采用自愿付费模式，用户可选择支付0元且无功能限制{[详情](https://tenzu.net/pricing/)}
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，支持在问题/任务中创建结构化检查清单、模板和审批流程。小团队可使用免费版。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版包含：5个活跃项目、每个项目5名成员、5MB文件上传、3个筛选条件和1周活动记录。
* [Toggl](https://toggl.com/) — 提供两款免费生产力工具。[Toggl Track](https://toggl.com/track/)时间管理应用免费版为自由职业者设计，支持无限制的时间记录、项目、客户、标签和报告等功能；[Toggl Plan](https://toggl.com/plan/)任务规划工具免费版为独立开发者提供不限量的任务、里程碑和时间线。
* [trello.com](https://trello.com/) — 看板式项目管理。免费版含无限个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台，提供项目管理、版本控制和问题追踪。免费版支持无限项目与协作者，3GB存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。免费版最多支持3个用户，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack(InCloud)，适用于开源项目及私有项目（3个用户免费）。含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — 唯一内置于GitHub的项目管理方案。公开仓库、开源项目和非营利组织可免费使用。
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版最多支持5名成员，5GB附件存储。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目与4个用户。提供GitHub集成功能。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件，如APK构建、自定义ROM和修改等，但也支持其他类型文件上传。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。免费10GB备份空间和两个存储库。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大处理、存储和交付服务。免费套餐每月25点积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [degoo.com](https://degoo.com/) — 基于AI的云存储服务，免费20GB空间支持三台设备，推荐好友可获5GB奖励（账户90天不活跃会失效）。
* [Dropshare](https://dropsha.re) - 零知识文件分享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器无法访问数据。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5,000个URL处理（15请求/秒）。
* [Ente](https://ente.io/) - 端到端加密的照片、视频和2FA秘密云存储。也可自托管，永久免费10GB空间（免费用户仅保留单副本数据）。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档、图片、音频、视频等格式转换与编辑。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客松和移动应用设计的简易JSON数据存储API。
* [GoFile.io](https://gofile.io/) - 免费文件分享存储平台，提供网页界面和API支持。无文件大小、带宽和下载次数限制（但十天无下载会自动删除文件）。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN处理流媒体服务。免费套餐包含每月250GB视频流量和30GB图片流量。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，免费10GB空间。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务。
* [ImageEngine](https://imageengine.io/) — 全球图片CDN服务，60秒内完成配置。支持AVIF/JPEGXL格式，提供WordPress/Magento/React/Vue等插件。[开发者免费账户申请](https://imageengine.io/developer-program/)。
* [imagekit.io](https://imagekit.io) — 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐含20GB/月带宽。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务，支持拖拽上传（单图上限32MB）。生成直链、BBCode和HTML缩略图，登录可查看上传历史。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的机器人工具，在不损失质量的前提下减小文件体积。开源项目免费使用。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限量社交媒体封面图生成API。
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [internxt.com](https://internxt.com) — 基于零知识证明的绝对隐私文件存储服务，注册即享永久免费10GB空间。
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费版支持1MB以内文件。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费QR码生成器，不追踪使用数据。
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图片代码优化/CDN）。免费支持5,000页面浏览/月。
* [npoint.io](https://www.npoint.io/) — 支持协作式模式编辑的JSON存储服务。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理工具。基础版支持无限传输（单文件上限250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取限量免费开源计划。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，免费10GB空间。
* [Pinata IPFS](https://pinata.cloud) — 最简化的IPFS文件上传管理工具，提供友好界面和API。免费1GB存储空间。
* [plot.ly](https://plot.ly/) — 数据图表生成与分享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 无需登录的快速批量QR码生成器（无水印无广告），支持单次导出100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表和QR码。
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成WordPress/Drupal/Magento等主流CMS，累计处理超70亿图片仍保持免费。
* [sirv.com](https://sirv.com/) — 智能图片CDN服务，支持实时优化调整。免费套餐含500MB存储和2GB带宽。
* [SlingSite](https://slingsite.github.io) - 批量生成图片视频的优化版本（图片输出AVIF/WEBP/JPG三种格式及三种分辨率，视频输出WebM/HEVC/H.264格式及封面帧）。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，免费5GB空间。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码服务。开源项目/慈善机构/学生通过GitHub学生包免费，商业应用可试用2GB额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务，提供图片CDN处理API和前端优化库。免费套餐每月3GB流量。

  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、礼品券和促销活动创建自定义二维码。支持自定义样式、颜色、徽标...

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，支持设计系统的构建、文档化、发布和维护。免费版支持3名编辑人员协作处理1个设计系统（查看人数不限）
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Branition](https://branition.com/colors) - 精心挑选最适合品牌的配色方案
* [日历图标生成器](https://calendariconsgenerator.app/) -- 一键生成全年份独特图标，完全免费
* [Canva](https://canva.com) - 在线免费设计工具，可创建视觉内容
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库（支持React/Vue/Svelte的SVG格式）
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具（含视频和GIF）
* [CMYK转潘通色](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [CodedThemes](https://codedthemes.com/) - 提供精心设计的管理后台模板和UI套件，加速现代网页开发
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 色彩与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成器
* [css-gradient.com](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变的免费工具（支持RGB和HEX格式）
* [css.glass](https://css.glass/) -- 使用CSS创建毛玻璃效果的免费网页应用
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库，用更少的类名实现按钮等组件
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存和导出的免费在线绘图工具
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版支持无限文件/查看者（最多2名编辑和3个项目）
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建时尚响应式网站
* [Flows](https://flows.sh/) -- 完全可定制的产品引导平台，免费支持250名月活跃用户
* [Flyon UI](https://flyonui.com/)- 最简单的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者/2名编辑/3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版权声明商用图库
* [Glyphs](https://glyphs.fyi/) -- 免费强大的网页图标库，完全可编辑的真正开源设计系统
* [Gradientos](https://www.gradientos.app) - 快速选择渐变方案的工具
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式网页生成器，免费版支持5个页面/无限域名/全功能
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的网页工具，可直接用于设计工作流
* [hypercolor.dev](https://hypercolor.dev/) -- 精选Tailwind CSS渐变色集合，提供多种生成器
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件库
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站的高清favicon
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库集合，支持跨库搜索并导出为SVG或主流框架格式
* [Iconoir](https://iconoir.com) – 开源图标库（含数千图标），支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐和设计工具，免费版提供有限格式的低分辨率资源（需标注来源）
* [图片背景模糊生成器](https://imagebgblurer.com/) -- 为Notion/Trello/Jira等工具生成基于图片源的模糊背景框架
* [landen.co](https://www.landen.co) — 无代码生成/编辑/发布精美网站和落地页，免费版支持1个完全可定制的网站
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Logo.dev](https://www.logo.dev) - 包含4400万+品牌的logo API（前1万次调用免费）
* [Lorem Picsum](https://picsum.photos/) - 免费时尚占位图工具，在URL后添加尺寸即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大Lottie动画平台，提供Android/iOS/Web动画工具和插件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费图形设计工具（离线可用），免费版含10个云文档/30天历史记录/基础设计工具
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（含渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器（无水印/支持1080p导出）
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的UI套件（含700+组件），支持Bootstrap/Angular/React/Vue
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备实时同步
* [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）

  * [Modeldraw.com](https://modeldraw.com) — 完整的图表绘制平台，支持UML、系统架构图、流程图、思维导图和敏捷工作流。支持无限团队成员实时协作，无需信用卡。
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器，提供波浪、博客和图案等多种工具。
* [movingpencils.com](https://movingpencils.com) — 基于浏览器的快速矢量编辑器，完全免费。
* [Nappy](https://nappy.co/) -- 免费获取黑人及棕色人种的精美照片，可用于商业和个人用途。
* [NextUI](https://nextui.org/) -- 免费、美观、快速且现代的React & Next.js UI组件库。
* [NSPolygon](https://nspolygon.com) — 免费库存照片、图标和插图资源。
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具。实时创建网站结构并快速分享以与团队或客户协作。
* [OKLCH](https://oklch.net/) -- 面向网页设计师和开发者的免费OKLCH颜色选择器与转换工具。
* [okso.app](https://okso.app) - 极简在线绘图应用。可快速创建草图和视觉笔记，支持导出PNG、JPG、SVG和WEBP格式。也可作为PWA安装。完全免费使用（无需注册）。
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具。
* [Penpot](https://penpot.app) - 基于网页的开源设计与原型工具，支持SVG格式。完全免费。
* [pexels.com](https://www.pexels.com/) - 可商用的免费库存照片网站。提供免费API支持关键词搜索照片。
* [photopea.com](https://www.photopea.com) — 高级在线设计编辑器，具有Adobe Photoshop界面，支持PSD、XCF和Sketch格式（兼容Adobe Photoshop、Gimp和Sketch App）。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特且引人注目的图形与图像。
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线浏览器编辑器。
* [Plasmic](https://www.plasmic.app/) - 快速易用且功能强大的网页设计工具和页面构建器，可集成到代码库中。构建响应式页面或复杂组件；可选择用代码扩展；并发布到生产站点和应用。
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 直接在浏览器中将PNG图像转换为WebP格式。无需上传，完全客户端处理，确保最高隐私和安全性。
* [Pravatar](https://pravatar.cc/) - 生成随机/占位虚拟头像，其URL可直接热链到您的网页/应用中。
* [Proto.io](https://www.proto.io) - 无需编码即可创建完全交互式UI原型。免费试用结束后仍可使用免费版，包含1个用户、1个项目、5个原型、100MB在线存储空间及proto.io应用预览功能。
* [Quant Ux](https://quant-ux.com/) - Quant Ux是一款原型设计与设计工具。完全免费且开源。
* [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标调整与管理服务。
* [Responsively App](https://responsively.app) - 免费开发工具，助力更快更精准的响应式网页应用开发。
* [Rive](https://rive.app) — 创建并向任何平台交付精美动画。个人用户永久免费。该服务提供编辑器并在其服务器托管所有图形，同时为多平台提供运行时以呈现Rive制作的动画。
* [SceneLab](https://scenelab.io) - 在线模型图形编辑器，拥有不断扩充的免费设计模板库。
* [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计自定义网页滚动条。
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局中的主题变化。
* [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到您的应用中。具备可访问性、可定制性且开源。
* [smartmockups.com](https://smartmockups.com/) — 创建产品模型，提供200个免费模型。
* [storyset.com](https://storyset.com/) — 使用此工具为项目创建精美的免费定制插图。
* [Superdesigner](https://superdesigner.co) - 免费设计工具集合，只需点击几下即可创建独特背景、图案、形状、图像等。
* [SVG Converter](https://svgconverter.online/) -- 免费JPG/PNG转SVG工具，支持调色板自定义
* [SVGmix.com](https://www.svgmix.com/) - 超过30万免费SVG图标、合集和品牌标志的庞大资源库。内置浏览器简易矢量编辑程序，可快速修改文件。
* [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合项目的图标或矢量图。下载可商用的免费SVG矢量资源。
* [tabler-icons.io](https://tabler-icons.io/) — 超过1500个可复制粘贴的免费SVG可编辑图标。
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI块集合。
* [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板。即时预览并复制完美的Tailwind CSS颜色类。
* [Tailkits](https://tailkits.com/) -- 精选Tailwind模板、组件和工具集合，外加实用的代码、网格、阴影等生成器。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作式前端平台，可即时创建并发布无头静态网站。免费提供三个项目、不限协作人数及代码导出功能。
* [TW Elements](https://tw-elements.com/) - 用Tailwind CSS重构的免费Bootstrap组件，设计更优且功能更丰富。
* [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题。实时自定义颜色、排版等。
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像。URL可直接热链到网页/应用中。支持通过URL配置参数。
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图像集合，可完全免费使用且无需署名。
* [Unicorn Platform](https://unicornplatform.com/) - 带托管功能的简易落地页构建器。免费提供一个网站。
* [unsplash.com](https://unsplash.com/) - 可用于商业和非商业用途的免费库存照片（随心所欲许可证）。
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的所见即所得网站构建器。非商业用途免费。
* [vector.express](https://vector.express) — 快速轻松转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
* [vectr.com](https://vectr.com/) — 网页+桌面版免费设计应用。
* [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件格式转换平台，包含开发者转换工具如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
* [Volume](https://volumecolor.io) — OKLCH颜色选择器与调色板生成器。
* [walkme.com](https://www.walkme.com/) — 企业级引导与互动平台，免费版提供最多5个步骤的3次引导流程。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
* [Webflow](https://webflow.com) - 带动画和网站托管功能的所见即所得网站构建器。免费支持两个项目。
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代方案。免费版提供不限数量网站（使用其域名）、5个自定义域名网站、每月1万次页面浏览和2GB资源存储。
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图工具。免费创建最多4个面板。

  * [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计稿、资源文件和样式指南。单个项目免费。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常来自非真实应用场景。
* [Landings](https://landings.dev/) - [网页截图] 根据偏好寻找最佳着陆页设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 收录6025个最佳着陆页案例，提供设计师免费电子书和网络UI套件资源。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图库，包含桌面端、平板和移动端视图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全检索的移动应用截图库，节省UI/UX研究时间。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供精选UI/UX模式库（iOS和Android）。
* [Page Flows](https://pageflows.com/) - [移动端/网页流程视频与截图] 多款移动和网页应用的完整流程视频，支持高效检索和索引。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考合集，支持标签分类和搜索。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟进最新网页和移动应用UI设计趋势，可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动和网页UI设计。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) — 像发条一样精准的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）。
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK提供位置发现、场所搜索和情境感知内容。
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线API。每日三千次免费请求。
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日两千五百次免费查询。
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询。
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查询API。
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API。全球覆盖范围。每日2500次免费查询。
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路线优化、距离矩阵、地理编码和地图匹配功能。
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理。
* [IP Geolocation](https://ipgeolocation.io/) — 提供3万次/月请求的免费开发者计划。
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者。
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日五千次免费请求。
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务和SDK。
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务。
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务和地图可视化SDK。免费矢量瓦片每周更新并提供四种地图样式。
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能。
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日两千五百次免费查询。
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排名的地理编码搜索服务。
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求。
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途和测试每日两千五百次免费地图浏览与API请求。

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，适用于Fedora和EL系统
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## 集成开发环境与代码编辑

  * [Android Studio](https://developer.android.com/studio) — Android Studio 提供最快的工具，可在各类 Android 设备上构建应用。这款开源 IDE 对所有人免费，是开发 Android 应用的最佳选择。支持 Windows、Mac、Linux 甚至 ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源 IDE，可在 Android 设备上开发基于 Gradle 的真实 Android 应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作设计 API，提供即时 API 模拟和生成文档（免费支持无限 API 蓝本和无限用户，含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - BBEdit 是 macOS 上流行且可扩展的编辑器。免费模式提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将 Git 仓库转换为交互式笔记本集合。这是一项免费的公共服务。
* [BlueJ](https://bluej.org) — 专为初学者设计的免费 Java 开发环境，全球数百万人使用。由 Oracle 提供支持，采用简单 GUI 帮助初学者。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和 REST API 的 Spring Boot 应用生成器。
* [Brackets](http://brackets.io/) - Brackets 是一款专为网页开发设计的开源文本编辑器。它轻量、易用且高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持标签和 100 多种编程语言。
* [cocalc.com](https://cocalc.com/) —（原 cloud.sagemath.com 的 SageMathCloud）— 云端协作计算。通过浏览器访问完整 Ubuntu 系统，内置协作工具及大量数学、科学、数据科学免费软件，预装 Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn 等。
* [code.cs50.io](https://code.cs50.io/) - CS50 的 Visual Studio Code 是 code.cs50.io 上的网页应用，为师生适配 GitHub Codespaces。
* [Code::Blocks](https://codeblocks.org) — 免费的 Fortran 和 C/C++ IDE。开源且支持 Windows、macOS 和 Linux。
* [codepen.io](https://codepen.io/) — CodePen 是前端开发的游乐场。
* [codesandbox.io](https://codesandbox.io/) — 支持 React、Vue、Angular、Preact 等的在线开发环境。
* [codiga.io](https://codiga.io/) — 编码助手，可直接在 IDE 中搜索、定义和复用代码片段。对个人和小型组织免费。
* [Components.studio](https://webcomponents.dev/) - 独立编写组件，通过故事可视化，测试并发布到 npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 面向开发团队的多语言支持、基于网页和 Kubernetes 原生的 IDE。开源且由社区驱动。Red Hat 托管的在线实例见 [workspaces.openshift.com](https://workspaces.openshift.com/)。
* [ForgeCode](https://forgecode.dev/) — 支持 Claude、GPT4 系列、Grok、Deepseek、Gemini 及所有前沿模型的 AI 结对编程工具。原生支持 CLI 并无缝集成任何 IDE。免费层包含本地处理的基础 AI 模型访问。
* [GetVM](https://getvm.io) — 即时免费的 Linux 和 IDE Chrome 侧边栏。免费层每天提供 5 个 VM。
* [JDoodle](https://www.jdoodle.com) — 支持 60 多种编程语言的在线编译器和编辑器，免费计划每天提供 200 次 REST API 代码编译额度。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE 和部署工具（如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。为学生、教师、开源和用户组提供免费许可。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回模拟 JSON 数据的 REST API 端点。如需本地运行服务器，源代码也可获取。
* [Lazarus](https://www.lazarus-ide.org/) — Lazarus 是兼容 Delphi 的跨平台快速应用开发 IDE。
* [MarsCode](https://www.marscode.com/) - 免费的 AI 驱动云端 IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 生成模拟 JSON 数据的微型 API 模拟服务。
* [mockable.io](https://www.mockable.io/) — Mockable 是简单可配置的服务，用于模拟 RESTful API 或 SOAP 网络服务。该在线服务可快速定义 REST API 或 SOAP 端点并返回 JSON 或 XML 数据。
* [mockaroo](https://mockaroo.com/) — Mockaroo 可生成 CSV、JSON、SQL 和 Excel 格式的真实测试数据，还能创建后端 API 模拟。
* [Mocklets](https://mocklets.com) - 基于 HTTP 的模拟 API 工具，支持更快并行开发和全面测试，提供终身免费层。
* [OneCompiler](https://onecompiler.com/) - 支持 70+ 语言的免费在线编译器，包括 Java、Python、C++、JavaScript。
* [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器中开发网页应用。免费计划提供 1 台服务器，24 小时生命周期，每天 4 小时运行时间，含 2 CPU 核心、2 GB RAM 和 1 GB 存储。
* [PHPSandbox](https://phpsandbox.io/) — PHP 在线开发环境。
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程环境。支持多种语言。运行代码无需注册，但保存代码需注册。同时为初学者和中级开发者提供免费课程。
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码 IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于 NodeJs 的前后端框架。创建新项目短链接：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一款流行、多功能且高度可定制的文本编辑器，适用于编码和文本编辑任务。
* [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代网页及云应用优化的代码编辑器。由 Microsoft 开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的 IDE，含数千扩展，支持跨平台应用开发（可下载 iOS 和 Android 的 Microsoft 扩展）、桌面、网页和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP 等）。
* [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/追踪、自由许可的 Microsoft VSCode 编辑器二进制分发版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) - Wave 是开源跨平台终端，支持无缝工作流。内联渲染任何内容。保存会话和历史。基于开放网络标准。支持 MacOS 和 Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内 IDE，支持 58 种模板，可独立编写网页组件，含故事和测试功能。
* [Zed](https://zed.dev/) - Zed 是 Atom 和 Tree-sitter 创作者开发的高性能多人协作代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 分析、事件与统计

  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多支持2个应用
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在实现跨平台分析与产品更新的无缝管理。免费计划包含每月10,000次事件、产品日志和每周洞察报告。
* [Aptabase](https://aptabase.com) — 面向移动和桌面应用的开源、隐私友好型简易分析平台。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费提供20,000次事件额度。
* [Avo](https://avo.app/) — 简化的分析发布工作流。提供单一事实来源的追踪方案、类型安全的分析追踪库、应用内调试器以及数据可观测性，确保在发布前发现所有数据问题。免费版支持2名工作区成员和1小时数据可观测性回溯。
* [Beampipe.io](https://beampipe.io) - 注重隐私的简易网站分析工具。免费支持最多5个域名和每月10,000次页面浏览。
* [Census](https://www.getcensus.com/) — 反向ETL与运营分析平台。可将数据仓库中的10个字段同步至Salesforce、Zendesk或Amplitude等60多个SaaS平台。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持单个网站3,000次浏览分析。
* [counter.dev](https://counter.dev) — 极简且隐私友好的网站分析工具。免费或通过捐赠自主定价。
* [DocBeacon](https://docbeacon.io) - 具备文档追踪与参与度分析的安全文档共享平台。免费版支持最多20个PDF文档（最大10MB）、10个联系人、每文档2次分享，并提供浏览下载、时间及参与度的基础分析。
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
* [Expensify](https://www.expensify.com/) — 费用报销系统，免费提供个人报销审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月免费3,000次事件。
* [GoatCounter](https://www.goatcounter.com/) — 开源网站分析平台，提供托管服务（非商业用途免费）或自托管选项。旨在作为Google Analytics和Matomo的替代方案，提供易用且隐私友好的分析服务。免费层适用于非商业用途，包含无限站点、六个月数据保留和每月10万页面浏览。
* [Google Analytics](https://analytics.google.com/) — 谷歌分析
* [heap.io](https://heap.io) — 自动记录iOS或网页应用中的每个用户行为。免费版支持每月10,000次会话。
* [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助将数据仓库中的客户数据同步至CRM、营销和支持工具。免费层支持同步到一个目标平台。
* [Hotjar](https://hotjar.com) — 网站分析与报告。免费计划每日2,000页面浏览。每日100次快照（上限300次）。可存储3个365天有效的热图快照。无限团队成员。同时提供应用内及独立调查、带截图的反馈组件。免费层每月可创建3个调查和3个反馈组件，收集20条回复。
* [LogSpot](https://logspot.io) - 完整的网页与产品分析平台，包含嵌入式分析组件和自动化机器人（Slack、Telegram及Webhooks）。免费计划每月10,000次事件。
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月100万页面浏览且无需信用卡。
* [Mixpanel](https://mixpanel.com/) — 每月追踪10万用户，无限数据历史记录和席位，美国或欧盟数据存储
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析工具。（每月免费50万次API调用）
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费100万次追踪事件。同时提供每月250条回复的无限制应用内调查。
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史追踪面板（超过14天）。免费计划允许监控单个仓库的流量。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。可直接连接数据库、S3和API。即时导入、分析、绘图及共享数百万行数据。永久免费的三个工作簿。
* [Rybbit](https://rybbit.io) - Google Analytics的开源无Cookie替代方案，操作体验提升10倍。免费计划每月3,000次事件。
* [Seline](https://seline.so) - 简洁私密的网站与产品分析工具。无Cookie、轻量级、独立运行。免费计划每月3,000次事件，包含仪表盘、用户旅程、漏斗等全部功能。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划可分析最近500名访客。
* [Statsig](https://statsig.com) - 整合分析、功能标记和A/B测试的一体化平台。每月免费100万次计量事件。
* [TraceLog](https://tracelog.io/) - 电商AI分析工具。用自然语言提问获取可操作建议，通过AI驱动的洞察提升收入。免费版每月10,000次事件。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新追踪方案并促进无缝协作。可部署至生产环境实时监测，或为回归测试添加分析覆盖而无需编码。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 注重隐私的轻量级Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图与目标追踪。免费支持最多3个域名，每个域名600次会话回放。
* [Umami](https://umami.is/) - 简洁、快速、注重隐私的开源Google Analytics替代方案。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户中测试设计原型并追踪访客。单人免费，无限次测试
* [Userbird](https://userbird.com) - 具备热图、会话记录和收入追踪的Google Analytics替代品。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月并提供三个用户席位。更多信息请见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [howuku.com](https://howuku.com) — 追踪用户互动、参与度和事件。每月免费支持5,000次访问
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，含错误追踪和实时模式
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，提供用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能并保留7天数据。
* [Reactflow.com](https://www.reactflow.com/) — 每个网站：每日1,000次页面浏览，三个热图，三个小组件，免费错误追踪
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目可无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求额度
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Adapty.io](https://adapty.io/) – 一站式开源SDK解决方案，为iOS、Android、React Native、Flutter、Unity或Web应用提供移动端应用内订阅集成服务。月收入1万美元以下免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费版每月10,000次API调用额度。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟10次请求限制。
* [CurrencyApi](https://currencyapi.net/) — 提供物理货币与加密货币实时汇率（JSON/XML格式）。免费版每月1,250次API请求。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划包含每月1,000次请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限制。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费微计划包含每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明数据来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持Stripe、Chargebee等支付系统。免费版每月30,000次事件记录。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价（购买力平价），助力全球业务拓展。免费计划包含每月7,500次API请求。
* [Qonversion](http://qonversion.io/) - 跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，优化应用内购与变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。月跟踪收入1万美元以下免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购与订阅托管后端（支持iOS/Android）。月跟踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟增值税率API，免费版每月100次API请求

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 简单、互动、有趣的学习Docker平台
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [AyeDot](https://ayedot.com/) — 免费以现代多媒体短格式微博客的形式与世界分享你的想法、知识和故事
* [BearBlog](https://bearblog.dev/) - 极简主义、Markdown驱动的博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [JustBlogged](https://justblogged.com) — 支持自定义域名的免费博客平台，具备全球高速性能

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，提供"一个管理员可管理多个域名，并完全控制行为与外观"的服务。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可将 GitHub issues 用于博客评论、维基页面等场景！

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于 AWS Lambda 和 Chrome 的截图 API。支持整页截图、捕获时间信息和视口尺寸
* [microlink.io](https://microlink.io/) — 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图即服务。每日免费250次请求
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染服务。免费层每日提供500页处理额度，自2017年持续提供
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。支持从任意URL快速生成可扩展的截图
* [screenshotlayer.com](https://screenshotlayer.com/) — 可高度自定义的网站快照服务。每月免费100次快照
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照，支持png/gif/jpg格式，包含整页截图而不仅是首页
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac构建iOS应用

  * [CodeMagic](https://codemagic.io/) - Codemagic 是一款全托管移动应用 CI/CD 服务，提供基于图形界面的构建、测试和部署功能。免费套餐每月包含 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutLab](https://flutlab.io/) - FlutLab 是现代化 Flutter 在线 IDE，为创建、调试和构建跨平台项目提供最佳环境。无需 Mac 设备即可构建 iOS 和 Android 应用。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽工具，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [JsLinux](https://bellard.org/jslinux) —— 高性能x86虚拟机，可运行Linux和Windows 2000系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射功能。免费版提供核心同意管理功能，并向通过验证的开源项目免费提供高级方案。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计及多语言同意管理解决方案。免费版提供一次性扫描和单个横幅功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理服务。免费版提供有限功能的隐私/Cookie政策及Cookie横幅。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量范围内提供大部分功能。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的截图，方便在社交媒体上分享。
* [Base64 解码/编码工具](https://devpal.co/base64-decode/) — 免费的在线数据解码与编码工具。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如用于Twitter/Facebook帖子）或链接（如用于聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API的SaaS平台，用于控制、构建和评估物联网设备。免费开发者计划包含5台设备、免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一款笔记应用（PWA），内置强大的多行计算器。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图像格式创建和分享代码片段。通常用于在Twitter或博客文章中优雅地展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标扩展。
* [Codepng](https://www.codepng.app) - 为源代码生成精美的快照，方便在社交媒体上分享。
* [CodeToImage](https://codetoimage.com/) - 为代码或文本创建截图，方便在社交媒体上分享。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务。免费提供无限任务。
* [Cronhooks](https://cronhooks.io/) - 安排一次性或周期性Webhook。免费计划允许5次临时调度。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。每月免费5次预订，包含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单的URL或域名转发工具。每月免费5个域名和20万次请求。
* [Exif Editor](https://exifeditor.io/) — 即时在浏览器中查看、编辑、清除、分析图片/照片的元数据，包括GPS位置和元数据。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 可扩展的第三方代码、许可证合规性和漏洞管理解决方案。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook支持：提供队列、退避重试和日志功能。免费计划每天100次投递，14天保留期和3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 检查任何域名、网站或IP地址的托管信息（如ASN、ISP、位置等）。还包含多种托管和DNS相关工具。
* [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord和自定义Webhook接收GitHub、GitLab、Bitbucket、Python PyPI、Java Maven、Node.js NPM、Node.js Yarn、Ruby Gems、PHP Packagist、.NET NuGet、Rust Cargo和Docker Hub的新版本通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片的EXIF数据，包括GPS位置和元数据。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板中管理PDF模板，通过API动态生成PDF。每月免费300份文档。
* [Pika Code Screenshots](https://pika.style/templates/code-image) — 通过扩展从代码片段和VSCode创建美观、可定制的截图。
* [QuickType.io](https://quicktype.io/) - 快速从JSON、Schema和GraphQL自动生成模型/类/类型/接口和序列化器，支持多种编程语言。将JSON转换为类型安全的代码。
* [RandomKeygen](https://randomkeygen.com/) - 免费移动端工具，提供多种随机生成的密钥和密码，用于保护应用、服务或设备。
* [ray.so](https://ray.so/) - 为代码片段创建美观的图片。
* [readme.com](https://readme.com/) — 轻松创建精美的文档，开源项目免费。
* [redirect.pizza](https://redirect.pizza/) - 轻松管理HTTPS重定向。免费计划包含10个来源和每月10万次点击。
* [redirection.io](https://redirection.io/) — 面向企业、营销和SEO的HTTP重定向管理SaaS工具。
* [Renamer.ai](https://renamer.ai) — 基于AI的文件重命名工具，支持OCR、元数据提取和20多种语言的自动化处理。免费版每月15个文件，包含桌面应用、批量重命名、自动重命名和基础支持。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET、POST、PUT、DELETE和HEAD等方法，包含Headers和Token认证。提供基础的登录系统保存请求。
* [Smartcar API](https://smartcar.com) - 车辆API，支持定位、获取油箱/电池电量、里程表、解锁/锁门等功能。
* [snappify](https://snappify.com) - 帮助开发者创建惊艳的视觉效果。从代码片段到完整的技术演示。免费版支持同时3个快照，无限下载和每月5次AI代码解释。
* [Sunrise and Sunset](https://sunrisesunset.io/api/) - 获取指定经纬度的日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed导出与分析工具。免费版功能较少。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查并分析结果。免费版每份调查仅限10个问题和100个回答。
* [UUID Generator](https://newuuid.com/) - 即时生成UUID v1/v4/v7、GUID、Nil UUID、CUID v1/v2、NanoID和ULID，支持企业级性能与安全。
* [Versionfeeds](https://versionfeeds.com) — 为喜爱的软件生成自定义RSS更新订阅。将编程语言、库或工具的最新版本集中在一个Feed中。（前3个Feed免费）
* [videoinu](https://videoinu.com) — 在线创建和编辑屏幕录制及其他视频。
* [Volume Shader BM](https://volumeshaderbm.org) — 免费的基于浏览器的GPU基准测试（WebGL）。帮助开发者跨浏览器和设备可重复地测试与比较着色器性能。
* [Webacus](https://webacus.dev) — 提供多种免费的开发者工具，支持编码、解码和数据处理。
* [Webacus](https://webacus.dev) — 提供多种免费的开发者工具，支持编码、解码和数据处理。
* [XKit](https://xkit.io) — 一系列免费在线工具，旨在为开发者、学生和日常用户提供便利。包含多种开发者工具、差异比较工具、计算器、转换器和生成器。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制
* [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制  
* [RemSupp](https://remsupp.com) — 按需技术支持及永久设备访问权限（每日免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [3Dassets.one](https://3dassets.one/) - 提供8000+免费/付费3D模型和PBR材质贴图资源
* [ArtStation](https://www.artstation.com/) - 包含免费/付费2D/3D资源、音效、图标、瓦片集和游戏套件的市场平台，也可用于作品集展示
* [CraftPix](https://craftpix.net) — 提供2D/3D素材、音效、GUI、背景、图标、瓦片集和游戏套件等免费/付费资源
* [Freesound](https://freesound.org/) - 采用不同CC协议的免费协作音效库
* [Game Icons](https://game-icons.net/) - 基于CC-BY协议的免费可定制SVG/PNG图标库
* [GameDevMarket](https://gamedevmarket.net) — 包含2D/3D素材、音效和GUI的免费/付费资源平台
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏美术师的免费游戏素材
* [itch.io](https://itch.io/game-assets) — 提供精灵图、瓦片集和角色包等免费/付费资源
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的免费2D/3D素材、音效和UI资源
* [LoSpec](https://lospec.com/) — 提供像素画等限制性数字艺术的在线工具，含大量教程和调色板资源
* [OpenGameArt](https://opengameart.org) — 开源游戏资源站，包含音乐、音效、精灵图和GIF动画
* [Poliigon](https://www.poliigon.com/) - 提供多分辨率纹理、模型、HDR环境贴图和笔刷的免费/付费资源，支持Blender等软件的免费插件导出
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [360Converter](https://www.360converter.com/) - 免费实用的在线转换工具：视频转文字 && 音频转文字 && 语音转文字 && 实时音频转文字 && YouTube视频转文字 && 添加视频字幕。可能对短视频转换或简短YouTube教程有所帮助:)
  * [AdminMart](https://adminmart.com/) — 基于Angular、Bootstrap、React、VueJs、NextJS和NuxtJS开发的高质量免费与付费管理后台模板及网站模板！
  * [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+种可直接用于项目的按钮样式。
  * [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单。
  * [免费代码工具](https://freecodetools.org/) — 100%免费的实用代码工具集。包含Markdown编辑器、代码压缩/美化工具、二维码生成器、Open Graph生成器、Twitter卡片生成器等。
  * [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符CA签名SSL证书，支持子域名。
  * [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）。
  * [Glob测试器](https://globster.xyz/) — 可视化设计并测试glob模式的网站，附带学习资源。
  * [IT工具集](https://it-tools.tech/) - 为开发者和IT从业者提供的实用工具。
  * [JSON查看工具](https://jsonviewertool.com/) – 直接在浏览器中查看、格式化、验证、压缩和转换JSON数据（无需API密钥）。
  * [Killer Coda](https://killercoda.com/)  - 浏览器内的Linux、Kubernetes、容器、编程、DevOps、网络技术交互式学习平台。
  * [Kody工具集](https://www.kodytools.com/dev-tools) — 100+种开发工具，包括格式化器、压缩器和转换器。
  * [Markdown工具](https://markdowntools.com) - 支持HTML、CSV、PDF、JSON和Excel文件与Markdown互转的工具。
  * [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源来开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）可续期。
  * [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，用于优化慢查询。
  * [PageTools](https://pagetools.co/) - 提供永久免费的AI工具套件，一键生成网站政策、社交媒体简介、帖子及网页。
  * [Pyrexp](https://pythonium.net/regex) — 基于网页的正则表达式测试与可视化调试工具。
  * [红帽开发者计划](https://developers.redhat.com) — 开发者专属的红帽产品免费访问权限（含RHEL、OpenShift、CodeReady等），仅限个人计划。另提供免费电子书参考。
  * [regex101](https://regex101.com/) — 免费的正则表达式测试调试平台，提供编辑器、测试器及学习文档。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信。
  * [SimpleBackups.com](https://simplebackups.com/) — 面向服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，直接存储至云存储提供商（AWS、DigitalOcean、Backblaze）。免费版支持1个备份任务。
  * [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持将备份还原至任意远程数据库。
  * [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean、AWS、LightSail、Hetzner和Exoscale的备份方案，可将数据库、文件系统和应用直接备份至S3存储。免费版提供单资源每日备份。
  * [表格格式转换器](https://www.tableformatconverter.com) - 免费工具，支持CSV、HTML、JSON、Markdown等多种表格格式互转。
  * [主题精选](https://themeselection.com/) — 精选高质量、现代化设计、专业易用的免费管理后台模板。
  * [ToolsHref](https://toolshref.com) - 开发者工具套件，含Java代码生成（JSON转POJO、cURL转Java）、静态分析及DevOps配置构建器（Docker、K8s、Nginx）。
  * [Utils.fun](https://utils.fun/en) — 完全基于浏览器算力的离线日常与开发工具集，包括水印生成、录屏、编解码、加密解密及代码格式化等，所有数据处理均在本地完成不上传云端。
  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发工具集，含CSS压缩/解压、图片优化/缩放、大小写转换、CSS验证器、JavaScript编译器、HTML编辑器等。
  * [WrapPixel](https://www.wrappixel.com/) — 下载基于Angular、React、VueJs、NextJS和NuxtJS开发的高质量免费与付费管理后台模板！HTML主题和UI套件助您快速构建应用！

**[⬆️ 返回顶部](#目录)**