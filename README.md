# free-for.dev

开发者和开源作者现在有许多提供免费层级的服务可供选择，但要全面了解这些服务需要花费时间才能做出明智决策。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围仅限于基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们喜爱所有免费服务，但希望保持主题相关性。虽然界限有时比较模糊，因此这份清单带有主观判断；如果未采纳您的贡献，请勿介意。

这份清单汇集了1600多人提交的Pull Requests、评审、想法和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或停服的项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务型产品，不包括自托管软件。符合条件的服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们也会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
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
  * [Flutter相关与无Mac开发iOS应用](#Flutter相关与无Mac开发iOS应用)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道、WebRTC、WebSocket服务器及其他路由工具](#隧道、WebRTC、WebSocket服务器及其他路由工具)
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
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限制特定区域），每月1GB从北美到所有区域目的地的网络出口流量（不包括中国和澳大利亚）
    * Cloud Storage - 5GB存储，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储。每周60小时限制
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出口流量
    * Google Kubernetes Engine - 一个区域集群免管理费。每个用户节点按标准Compute Engine定价收费
    * BigQuery - 每月1TB查询，每月10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出口流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月10,000次请求
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、精简的开发和测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU的预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，免费SSL、身份验证/授权和自定义域名
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
       - 当[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时，实例将被回收
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
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS保护，CDN及免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费无限速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建与管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含1台部署服务器和1个静态站点），无需操心"服务器事务"，提供在任意云上构建、部署和发展应用所需的一切
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理与团队协作
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，支持完整Terraform CLI功能、OPA集成及分层配置模型。无SSO限制，所有功能开放。每月免费50次运行额度
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现部署自动化。免费版支持单人开发者无限量部署静态站点、网络服务及环境，每月提供20次含预览和自动部署的免费任务执行

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公共和私有Git仓库，提供CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限制的公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100 MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公共和私有Git仓库（支持无限制协作者）。由[Forgejo](https://forgejo.org/)提供支持。静态网站托管通过[Codeberg Pages](https://codeberg.page/)实现。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)实现。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)实现。包括软件包和容器托管、项目管理及问题跟踪
* [GitGud](https://gitgud.io) — 无限制的私有和公共仓库。永久免费。由GitLab & Sapphire提供支持。不提供CI/CD。
* [GitHub](https://github.com/) — 无限制的公共仓库和无限制的私有仓库（支持无限制协作者）。包括CI/CD、开发环境、静态托管、软件包和容器托管、项目管理及AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 无限制的公共和私有Git仓库，最多5名协作者。包括CI/CD、静态托管、容器注册表、项目管理及问题跟踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件打造的代码托管平台，包含CI、静态页面、项目页面及问题跟踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；同时提供Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是一个基于Git的自由软件代码协作平台，专为自由许可项目设计
* [OSDN](https://osdn.net/) - OSDN.net是为开源软件开发者提供的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是一个基于Git的自由开源软件代码协作平台，专为FOSS许可项目设计
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 免费无限制的开源分布式版本控制系统。其独特之处在于基于补丁的健全理论，易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费私有项目（Git和Subversion），包含50 MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限制的公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目的协作软件开发管理系统（针对GNU项目）
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目的协作软件开发管理系统（针对非GNU项目）

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和3个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和根本原因分析（如数据质量和性能漂移）。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每天50次免费请求，公共仪表板，开放端点（任何拥有仪表板链接的人都可以查看提交和响应）。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费计划每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层每月100次请求，覆盖9个端点。
* [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API，用于自定义人脸识别和检测。可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用API平台，完整访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整数据沿袭，覆盖从训练到生产的工作流程。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可从任何前端构建、放置和管理订单。开发者计划每月100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLMs的集成平台。集成200多个工具，覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - API和微服务，提供国家、地区、省份、城市、邮政编码等广泛信息。免费层每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份见解。免费计划限制为一个用户、数据连接、数据源和数据目的地。还需手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和3个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层限制为每天1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件分享。数据访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。Postman式界面在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括10 GB存储和每月120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - API用于在Python中构建交互式报告，并部署Python脚本和Jupyter Notebooks作为自助工具。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可下的精简数据库也免费。
* [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包括2个数据库模型和每个模型10个表。

  * [Deepnote](https://deepnote.com) - 一款新型数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费套餐包含无限个人项目、5GB内存和2vCPU的基础机器，以及最多3名编辑的团队协作。
* [Disease.sh](https://disease.sh/) — 提供准确新冠数据的免费API，用于构建相关应用。
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费计划每月可生成250份文档。
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的托管API，用于生成和私有存储PDF及截图。免费计划每月允许400次PDF/截图生成。
* [drawDB](https://drawdb.app/) — 无需注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 为移动端、网页及物联网应用提供的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可即时生成包含实时文档和用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20次免费额度。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月50次API调用并开放模板库。
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台。可视化任意计算图。免费本地使用。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具。免费试用包含2个项目（各10张表）。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端。
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费计划每月250页，不限用户数和3个模板。
* [file.coffee](https://file.coffee/) - 单文件存储上限15MB（注册用户30MB）的平台。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费Micro计划每月500次交易检测。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的定位服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费计划每日2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图像和5个模板。
* [Hex](https://hex.tech/) - 面向笔记本/数据应用/知识库的协作式数据平台。免费社区版支持5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，免费套餐每日100次事件分发并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费高效的API请求构建工具。
* [huggingface.co](https://huggingface.co) - 支持Pytorch/TensorFlow/JAX的NLP模型构建/训练/部署平台。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用含50份单页报告，支持调色板和字体定制。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（如Power BI）访问70多个云平台（如Exact Online/Twinfield）。含数据复制交换功能。开发者免费计划有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，每分钟限45次请求（同IP）。
* [ipbase.com](https://ipbase.com) - IP定位API永久免费计划每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API永久免费计划每日1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，免费1,000次请求。
* [IPLocate](https://www.iplocate.io) — IP定位API每日免费1,000次请求，含代理/VPN/托管检测及ASN数据。另提供免费IP到国家/ASN的CSV/MMDB格式数据库下载。
* [IP2Location](https://www.ip2location.com) — 免费版IP定位服务，LITE数据库可免费下载至本地服务器查询城市/坐标/ISP信息。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API，免费计划每月5万次查询。另提供500次免费WHOIS和域名托管查询。
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的IP定位API，免费层每月3万次查询（每日1k次）。
* [ipapi.is](https://ipapi.is/) - 开发者友好的IP定位API，免费无注册可查1,000次。
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（免费5万次/月），提供地理位置/公司/运营商等详细信息。
* [IPQuery](https://ipquery.io) — 无限制无费率的开发者IP API。
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月免费5万次查询。
* [JSON2Video](https://json2video.com) - 通过API或无代码方案自动化生成营销/社交媒体视频。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP（无需注册），支持CORS直接通过浏览器JS调用。
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON对象并作为REST API使用的服务。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码/头部/响应体。

  * [konghq.com](https://konghq.com/) — API市场及强大的私有和公共API工具。免费版功能受限，如监控、告警和支持服务。
* [Kreya](https://kreya.app) — 免费gRPC图形客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型。免费支持1000条样本的数据集。
* [LoginLlama](https://loginllama.app) — 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月可验证100次。
* [Market Data API](https://www.marketdata.app) — 提供股票、期权、共同基金等实时和历史金融数据。"永久免费"API层级每天允许100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报数据。预报基于多天气模型的机器学习组合以提高准确性。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) — 将任何网站转化为数据，如元标签标准化、精美链接预览、爬取能力或截图服务。每天50次免费请求。
* [Mindee](https://developers.mindee.com) — 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用工作流程。免费层每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式演练场。免费支持1名编辑。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的工具。适用于原型设计/测试/学习。免费版每个项目2个资源。
* [Mockfly](https://www.mockfly.dev/) — 值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) — 创建与GitHub仓库同步的模拟GraphQL和REST API的工具。简单REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，选择云端模拟端点并检查流量，完全免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) — 生成自定义HTTP响应以模拟请求的简易Web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mpcknroll.me/) — 免费模拟API服务，无需后端延迟即可模拟真实API响应。适合前端开发、QA测试和DevOps团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和Docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的表现。适用于测试Control D等基于规则的DNS分流工具。
* [Namekit](https://namekit.app/) — AI驱动的域名发现工具，即时查找可用标准价域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每天100次免费查询，文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) — 免费电话号码验证API，每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件并返回JSON文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化创建Open API 3定义，完全免费。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF和邮件提取数据。AI驱动，完整API访问权限。
* [PDFBolt](https://pdfbolt.com) — 注重隐私的开发者PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) — 通过简单API将HTML或URL转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) — PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) — 免费每日流数据库服务。所有操作通过API执行，支持热力图和折线图可视化。
* [Postman](https://postman.com) — 通过API开发协作平台Postman简化工作流并更快创建更好API。Postman应用永久免费，云端功能也有永久免费限制版。
* [Insomnia](https://insomnia.rest) — 开源API客户端，支持REST和GraphQL接口设计与测试。
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) — 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) — 提供10倍易用性的AI网络爬取工具，近乎零学习成本，节省85%+现有工作流时间，比手动研究快4倍且不妥协，包含所有研究任务的REST API端点。每月前1000积分免费。
* [Public-Apis Github仓库](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) — 全球最大API中心，数百万开发者连接数千API，通过趣味挑战（含解决方案！）和交互示例进行API开发。
* [Rendi](https://rendi.dev) — FFmpeg API：为FFmpeg提供的REST API，无需处理基础设施即可在线运行FFmpeg。免费层包含月度处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建接收HTTP请求的免费终端。发送到该终端的任何HTTP请求及其有效载荷和头部将被记录，便于观察Webhook等服务请求。
* [reqres.in](https://reqres.in) — 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) — 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层每月30积分。
* [ROBOHASH](https://robohash.org/) — 从任意文本生成独特酷炫图像的Web服务。

  * [ScrapingAnt](https://scrapingant.com/) — Headless Chrome 爬取 API 和免费代理服务。支持 JavaScript 渲染、高级轮换代理、绕过验证码。免费提供 10,000 次 API 调用额度。
  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的 Webhook。免费计划包含 100 次云端爬取额度。
  * [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持 2 个数据源、最多 1,000 张表和 25 个用户。
  * [Sheetson](https://sheetson.com) - 即时将任何 Google 表格转换为 RESTful API。提供免费计划，每张表格包含 1,000 行免费额度。
  * [Siterelic](https://siterelic.com/) - Siterelic API 可进行网站截图、审计、TLS 扫描、DNS 查询、TTFB 测试等。免费计划每月提供 100 次 API 请求。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取 API。返回 Google、YouTube、Bing、百度、沃尔玛等搜索引擎的结构化 JSON 结果。免费计划每月包含 100 次成功 API 调用。
  * [SmartParse](https://smartparse.io) - SmartParse 是数据迁移和 CSV 转 API 平台，提供省时省钱的开发者工具。免费版每月包含 300 个处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件后即可通过 API 快速访问数据，加速应用开发。免费计划包含 2 个 API 和每月 2,500 次 API 调用。无需信用卡。
  * [YourGPT CSV 转 JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将 CSV 文件转换为结构化 JSON 数据。
  * [Sqlable](https://sqlable.com/) - 免费在线 SQL 工具集，包括 SQL 格式化器和验证器、SQL 正则测试器、假数据生成器和交互式数据库沙盒。
  * [Stoplight](https://stoplight.io/) - 用于协作设计和记录 API 的 SaaS。免费计划提供设计、模拟和文档工具。
  * [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可创建最多 50 张图片。
  * [Svix](https://www.svix.com/) - Webhook 即服务。免费版每月可发送 50,000 条消息。
  * [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察 API，具备研究成果整理能力。免费层每月 1,000 次请求，无需信用卡。
  * [The IP API](https://theipapi.com/) - IP 地理定位 API，每天免费 1,000 次请求。提供 IP 地址的位置信息，包括国家、城市、地区等。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能无限免费使用。
  * [Tomorrow.io 天气 API](https://www.tomorrow.io/weather-api/) - 提供免费天气 API 计划。覆盖全球的精准天气预报，包含历史数据和天气监测解决方案。
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、发布和管理 API。提供高级 API 日志聚合、可观测性、文档和调试功能。免费版包含所有功能，但每月限制 25 万次请求。
  * [UniRateAPI](https://unirateapi.com) – 590+ 种货币和加密货币的实时汇率。免费计划无限 API 调用，适合开发者和金融应用。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证 API。每月 150 次免费验证。
  * [WeatherXu](https://weatherxu.com/) — 全球天气数据 API，包含实时天气、逐小时/每日预报和天气警报。整合 AI 和 ML 系统分析多天气模型以提高预测精度。免费层每月 10,000 次 API 调用。
  * [WebScraping.AI](https://webscraping.ai) - 简易网页爬取 API，内置解析、Chrome 渲染和代理。每月 2,000 次免费 API 调用。
  * [Weights & Biases](https://wandb.ai) — 开发者优先的 MLOps 平台。通过实验跟踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层，包含 100 GB 存储。
  * [What The Diff](https://whatthediff.ai) - AI 驱动的代码审查助手。免费版每月限制 25,000 个 token（约 10 个 PR）。
  * [wolfram.com](https://wolfram.com/language/) — 云端内置知识型算法。
  * [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化 API。每月 3 万次 API 调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅 IP 的网页爬取 API，定价透明。每月 1,000 次免费 API 调用，学生和非营利组织可获额外额度。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮编 API，提供全球邮政编码数据。每月 5,000 次免费请求。
  * [Zipcodestack](https://zipcodestack.com) - 免费邮编 API 和邮政编码验证。每月 1 万次免费请求。
  * [Zuplo](https://zuplo.com/) - 免费 API 管理平台，用于设计、构建和部署边缘 API。几分钟内即可为任何 API 添加密钥认证、速率限制、开发者文档和货币化功能。原生支持 OpenAPI，完全可编程（Web 标准 API 和 TypeScript）。免费版支持 10 个项目、无限生产边缘环境、每月 100 万次请求和 10GB 出口流量。
  * [DiffJSON](https://diffjson.com) - 在线 JSON 差异比较工具，快速定位 JSON 数据结构差异。
  * [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的 IP 地理定位 API，适用于商业和非商业用户，支持 JSON 格式。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公共项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有及公共制品仓库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公共项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅限个人使用的自托管版本。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人与团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录与集成，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 快速找到最佳会议时间，操作简单，适合各种规模团队
* [Calendly](https://calendly.com) — 专业会议预约工具。免费版支持1个日历连接和无限场次预约，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时估算工具，支持无限成员快速进行故事点评估
* [Telegram](https://telegram.org/) — 提供高速可靠的消息与通话服务。大容量群组、用户名系统、桌面应用和强大文件分享功能特别适合商业用户与小团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作平台。支持IDE结对编程、终端共享、音视频通话及屏幕共享，小团队免费
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，内置提升效率的协作插件。免费版每月含10,000分钟音视频时长
* [evernote.com](https://evernote.com/) — 信息管理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，单人用户免费，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队沟通工具。免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的线上会议平台。通过可定制虚拟空间实现真实社区互动，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的看板工具，无需注册且完全免费
* [flat.social](https://flat.social) - 可定制的互动空间，适用于团队会议与社交活动。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub活动日报工具。含提交可视化、同伴认可系统和自定义提醒功能。免费版支持无限用户、3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作工具。类似Google Docs的Markdown编辑器，免费笔记数量无限制（但私人笔记的协作者数量和模板功能受限）
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的免费全能通讯工具
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 创意收集与投票平台，免费支持25人社区
* [Igloo](https://www.igloosoftware.com/) — 内部门户平台，支持文档、博客、日历共享，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议工具，提供安全便捷的会议体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/私聊中输入/meet发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持多工作区协作。免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队协作平台，优化开源项目与产品团队工作流
* [Lockitbot](https://www.lockitbot.com/) — Slack内资源预约工具（如会议室/开发环境），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站/PDF/图片上收集反馈意见
* [Proton Pass](https://proton.me/pass) — 集成邮件别名、2FA验证器、共享和通行密钥的密码管理器，支持全平台
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的分布式团队协作白板工具，提供免费版
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务管理、知识库与数据库的Markdown协作应用，全平台可用
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具。免费版含核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 代码面试平台，集成视频聊天、画板及可编译运行的在线编辑器，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间追踪工具。免费版支持10名用户的时间记录与报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加可视化评审功能，无需部署网站。免费版每月10个页面/100MB存储
* [Pendulums](https://pendulums.io/) - 界面友好的免费时间追踪工具，提供实用数据统计
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音视频通话，并易于与其他服务集成。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦互通、多应用桥接、无限消息和完整历史记录。
* [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步及讨论功能。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献生成统一报告。
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器与协作者共享屏幕。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多10名用户免费。
* [slack.com](https://slack.com/) — 无限用户免费使用（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务商的状态页。
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记。免费版支持3个面板、无限用户和1GB存储。
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作空间。永久免费个人计划。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点，无需插件/注册/付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题跟踪软件。支持带泳道看板和完整Scrum实现，含时间追踪功能。免费支持5用户和3项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会优化开发流程。包含完整的远程团队休假管理。5人以下小团队免费。
* [Tefter](https://tefter.io) - 书签应用，深度集成Slack。开源团队免费。
* [TeleType](https://teletype.oorja.io/) — 共享终端/语音/代码/白板等。开发者端到端加密协作无需登录。
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具。
* [Huly](https://huly.io/) - 全能项目管理平台（替代Linear/Jira/Slack/Notion/Motion）- 无限用户，每工作区10GB存储和10GB音视频流量。
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用全功能项目管理应用。
* [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理化。提供免费无限计划，合格团队可享折扣。
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，含智能箭头/吸附/便签/SVG导出功能。支持多人协作编辑。另有免费VS Code扩展。
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签页/任务管理器，支持文件夹协作的定制化在线桌面。
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个PR。全员免费，非营利组织额外赠送Nano套餐。
* [whereby.com](https://whereby.com/) — 一键视频通话（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，用极简Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区。
* [vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台。单键上传/录制/管理/分享等。免费版提供10个视频/1GB存储/10GB月流量
* [userforge.com](https://userforge.com/) - 互联在线角色/用户故事和场景映射工具。保持设计与开发同步，免费支持3角色+2协作者。
* [wistia.com](https://wistia.com/) — 带观众分析的高清视频托管平台，25个视频+品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直连文件分享服务。无限分享5GB内文件给任意数量接收方。
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。超5GB文件使用P2P直传。
* [zoom.us](https://zoom.us/) — 安全视频/网络会议，免费版限40分钟。
* [Zulip](https://zulip.com/) — 独特邮件式线程模型的实时聊天。免费版含1万条历史消息+5GB存储，另有可自建的开源版本。
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件。免费试用云功能实现简单自动化：240分钟/月机器人时长+10次助手运行+100MB存储。
* [Fleep.io](https://fleep.io/) — Slack替代品。小团队免费计划含完整消息历史/无限私聊/1群组对话/1GB存储。
* [Chanty.com](https://chanty.com/) — 另一款Slack替代品。永久免费支持10人小团队：无限公私对话/可搜索历史/无限1对1语音/语音消息/10集成/20GB团队存储。
* [ruttl.com](https://ruttl.com/) — 最佳全能反馈工具，收集网站/PDF/图片的数字化反馈。
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台。免费版含无限频道/剧本/看板/用户+10GB存储等。
* [Webvizio](https://webvizio.com) — 网站反馈工具和BUG报告系统，直接在实时网站/应用/图片/PDF/设计文件上开展开发协作。
* [Pullflow](https://pullflow.com) — 提供AI增强的跨GitHub/Slack/VS Code代码评审协作平台。
* [Webex](https://www.webex.com/) — 视频会议免费版支持40分钟会议+100参会者。
* [RingCentral](https://www.ringcentral.com/) — 视频会议免费版支持50分钟会议+100参会者。
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库和API）。开发者个人免费计划。
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输分享界面。无需订阅即可发送照片视频等大文件。
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密的简易粘贴站点。

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年赠送10,000分钟免费时长
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密/多标签粘贴/API接口/高亮编辑器等功能
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟/画布等变通方案，免费版功能完整

* [Cushion](https://cushion.so/) - 专为分布式小团队设计的Slack替代方案，免费版支持30条消息/5名成员/不限访客

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。开发者可享免费套餐。同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。包含一个免费社区空间，支持 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。为开发者提供免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM。内置 GraphQL API。免费版包含无限用户、1000 个目录项、5 GB/月带宽和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS。基础套餐包含 10 万次/月 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的平台，用于本地或云端管理资产和数据库内容。无任何功能限制或付费墙。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS。无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，在提供无头 CMS 优势的同时赋能营销人员。开发者方案支持 2 个用户，每个用户可创建无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言（含交付和管理 API）以及自定义元素支持。可按需选择更详细的套餐。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面。社区方案为单个用户提供无限 API 调用、文档、自定义类型、资产和语言设置。开放内容/开源项目可申请更大规模的免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，具有开源编辑环境和实时托管数据存储。每个项目免费包含无限项目、无限管理员用户、3 个非管理员用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资产。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为各规模企业提供企业级解决方案。开发者方案包含 3 个用户、500 个内容项、3 个内置角色、25+5 种内容类型、全功能 REST API、文档预览生成和 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 支持的无头 CMS，支持 Markdown、MDX 和 JSON。基础套餐免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - Gatsby 是快速灵活的框架，让使用任何 CMS、API 或数据库构建网站重新充满乐趣。构建并部署能带来更多流量、更高转化率和更多收入的无头网站！
* [Hygraph](https://hygraph.com/) - 为小型项目提供免费套餐。GraphQL 优先的 API。从传统解决方案迁移至 GraphQL 原生的无头 CMS，实现全渠道内容 API 优先交付。
* [Squidex](https://squidex.io/) - 为小型项目提供免费套餐。API/GraphQL 优先。开源且基于事件溯源（自动记录每次变更）。
* [InstaWP](https://instawp.com/) - 数秒内启动 WordPress 站点。免费套餐包含 5 个活跃站点、500 MB 空间和 48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区（免费）套餐包含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化（无限语言/地区）、资源管理器（最多 2500 个资源）、图片优化服务、搜索查询、Webhook 以及每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐包含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制或过期风险——您的网站，您做主。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，通过简单输入即可为业务创建精美网站。提供免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码和无限量的API与路由，支持广泛集成。免费方案包含3个项目、5张数据表和Google插件支持。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编码AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody 提供多种LLM选择（包括本地推理），支持各类IDE环境，兼容所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（基于Starcoder 16b模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费版包含三个功能模块。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是VSCode、JetBrains和Neovim的快速AI代码补全插件。免费版提供无限量的行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞察，帮助开发者更快打造优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，新用户初始获得1200积分，每月额外赠送200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1位用户和1个100 MB存储的代码仓库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟会话（Vista系统下1024×768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 自动化代码审查（支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript），无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除常规语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发者工作模式优先处理技术债务，可视化团队耦合和系统掌握度等组织因素，开源免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪，通过精准一致指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测缺陷/安全漏洞/性能及API问题，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下团队免费
* [deepscan.io](https://deepscan.io) — 高级静态分析工具，自动发现JavaScript代码运行时错误，开源免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — Go语言包代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构，支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公有或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求与提交差异分析，公有仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 多语言(Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等)源代码自动化分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具（含代码验证和多设备类型检测）
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索您的项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，提供强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化Web无障碍测试融入您的开发流程。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布，实现更快速高效的发布周期。免费版每构建最多30分钟构建时间，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的CD服务，开源免费
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持Kubernetes和Lambda环境上的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，原生或混合应用均可。每月200次免费构建，10分钟构建时间和2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目和一个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费3个用户和每月5k作业分钟。测试分析免费开发者层包括每月100k测试执行，开源项目有更多免费包含。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和十个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 全面的免费计划，包含所有功能的托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存和其他高级CI/CD功能。每月最多6000分钟执行时间免费，无限协作者，私有项目30个并行作业，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，一个环境，共享服务器，无限公共仓库
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源无限
* [deploybot.com](https://www.deploybot.com/) — 1个仓库和10次部署，开源免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30构建分钟）
* [drone](https://cloud.drone.io/) - Drone Cloud使开发者能够在一个地方运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM，并通过唯一URL使您的应用可用，无限公共和私有仓库，VM大小最多2 GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
* [Mergify](https://mergify.io) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具，让您通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层100 Mb，1000次操作，最小间隔15分钟。
* [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月免费3,000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，通过Open Policy Agent持续资源合规，SAML 2.0 SSO，访问公共工作池：每月最多200分钟
* [microtica.com](https://microtica.com/) - 启动环境，包含现成的基础设施组件，免费在AWS上部署应用，并支持生产工作负载。免费层包括1个环境（在您的AWS账户上），2个Kubernetes服务，每月100构建分钟和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割您的e2e测试运行等功能加速您的monorepos在CI上的表现。免费计划最多30个贡献者，包含慷慨的150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3,000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具（如Terraform、OpenTofu和Terragrunt）的编排和管理平台。最多2个用户免费，包括所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，通过拉取请求驱动的工作流，通过自托管运行器实现项目隔离，以及分层运行以有序操作。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费。单用户免费版每周有有限检查点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接测试您的Android和iOS应用。免费层包括每月两个并发会话，每次30分钟使用时间。应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习，无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于Monitoring as Code工作流和Playwright。开发者享有慷慨的免费层。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否遵循50+ SEO、速度和安全性最佳实践。小型网站免费。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否为指定域名启用CORS并识别差距。获取可操作见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器内测试。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5名用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全注入故障以发现弱点，避免影响客户。Gremlin Free支持对最多5台主机或容器执行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费计划支持最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，适合不同测试成熟度的团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在任何CI提供商上并行拆分Ruby、JavaScript测试以节省时间。免费计划支持最多10分钟测试文件，开源项目无限免费。
  * [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及Selenium和Cypress自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - Storybook、Ladle、Histoire故事及Web应用的全方位视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
  * [octomind.dev](https://www.octomind.dev/) - 使用AI辅助测试用例生成自动创建、运行和维护Playwright UI测试
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费计划每日10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费层包含所有核心功能，500MB附件存储，最多3名用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、flutter、react-native、web、ionic等多种框架。免费计划限iOS和Android各10次测试，但包含付费计划大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费层最多10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制唯一测试URL向开发人员展示如何复现。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费计划包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育机构及初创小团队可申请基础免费项目之外的折扣或免费服务。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求。支持转发至本地环境或历史请求回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI界面，集成开发工具、组件库和设计系统可加速迭代、优化设计并简化开发流程。无限项目数量且提供五年免费维护。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络与服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 通过专属URL调试webhook和HTTP请求。完全免费，可创建无限测试URL并获取智能建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL与邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥、IaC、恶意软件、容器扫描、EOL等。免费计划包含两名用户、10个代码库扫描、1个云账户、2个容器和1个域名
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划包含每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的更快捷方式。目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计及监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码、文件、目录或容器
* [crypteron.com](https://www.crypteron.com/) — 面向云优先的开发者友好型安全平台，防止.NET和Java应用中的数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 用于分析和编解码数据的简易直观Web应用，无需复杂工具或编程语言。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
* [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块及GitHub Actions的依赖项
* [DJ Checkup](https://djcheckup.com) — 使用这款免费自动化检查工具扫描Django站点的安全漏洞。衍生自Pony Checkup项目
* [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快速同步.env文件。停止通过Slack和邮件等不安全渠道共享.env文件，永不再丢失重要.env文件。免费支持最多3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复，防止密钥泄露到源代码中。扫描Git仓库中350+种密钥和敏感文件——个人开发者及25人以下团队免费使用
* [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
* [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源平台，支持跨团队和基础设施管理开发者密钥：从本地开发到生产环境第三方服务全覆盖。最多5名开发者免费使用
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) - 集成证书透明度数据库的SSL到期管理及证书购买平台
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
* [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目数量不限
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机、设备、应用及配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 快速检查任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人形式的自动化产品安全工程师，可自动提交PR解决Java代码库中的漏洞。其他语言支持即将推出！
* [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目数量不限
* [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。获取5万次免费查询[点击此处](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 发现并修复开源依赖项中的已知安全漏洞。开源项目无限次测试和修复，私有项目每月限200次测试
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL网页服务器配置的深度分析
* [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测并修复安全威胁。通过简单高效的解决方案保护项目
* [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，在生产环境前发现并修复安全漏洞。单个应用支持无限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查及恶意软件扫描器
* [Protectumus](https://protectumus.com) - PHP网站的免费安全检查、站点杀毒及服务器防火墙(WAF)。注册用户免费层包含邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书、链等。不限于HTTPS
* [threatconnect.com](https://threatconnect.com) — 威胁情报：专为刚开始学习网络威胁情报的个人研究员、分析师和组织设计。最多3个用户免费
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月最多100万次加密免费
* [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案实施端到端加密、数据库保护、物联网安全等提供工具和服务。最多250个用户的应用免费
* [Vulert](https://vulert.com) - Vulert持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费
* [Escape GraphQL Quickscan](https://escape.tech/) - 一键式GraphQL端点安全扫描。免费无需登录
* [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条GitHub公开仓库、gist、issue和评论中暴露的密钥

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费支持1000名MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000名MAU、无限社交登录连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度权限控制，免费支持100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100名用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新旧应用添加优先通行密钥认证。无限MAU永久免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK两种方式。免费7500名活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)。免费支持10名用户，包含全认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费起步套餐包含7,500名MAU。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的2FA，免费支持10名用户，适用于VPN/网站/SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权服务。免费支持100名月活跃用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费支持3个企业应用+5个个人应用，用户数不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含全安全功能，不限团队成员，200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC，适用于实时更新的微服务架构，含无代码策略UI。免费层支持1000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费域支持1000名用户和10个SSO连接，使用包含[组织扩展](https://phasetwo.io/product/organizations/)的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业SSO。免费方案包含不限MAU、不限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费方案包含10,000名MAU、不限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟快速上手。可免费自托管，或选择含1万免费MAU的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速上线的同时保持用户体验。免费支持5000名MAU。
* [Warrant](https://warrant.dev/) - 企业级应用授权与访问控制托管服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费支持25,000次认证请求，包含全安全功能（OTP/无密码登录/策略等功能无付费墙）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户。免费支持200名用户和1万封事务邮件（含"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 开发、保护并管理产品用户身份，涵盖认证与授权。免费支持5000名MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。包含邮箱密码登录、社交认证、魔法链接、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 确保移动应用正常运行的必备平台。免费方案包含：一个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发。免费方案包含：一个应用项目、三个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：五个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备群状态，免费管理无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。提供单台服务器免费套餐
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。提供单台服务器免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息，支持多可用区节点部署
* [courier.com](https://www.courier.com/) — 统一推送、应用内消息、邮件、聊天、短信等多渠道通知API，含模板管理等功能。免费套餐每月1万条消息
* [Engage](https://engage.so/) - SaaS客户互动与自动化全流程工具（邮件/推送/SMS/产品导览/横幅等）。每月免费支持1,000名活跃用户
* [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月1万条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理。永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) – 开发者通知基础设施。单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐每月1万条消息
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月1万条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件/SMS/站内信/应用内推送等渠道的组件与API。免费套餐每月3万条通知（保留90天）
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日20万条消息
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日10万次事件
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure。永久免费版支持4KB消息大小、50个活跃连接和每月5GB数据
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通讯API服务，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费层](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持1万订阅用户，推送次数不限，含浏览器内消息功能
* [httpSMS](https://httpsms.com) - 通过Android设备作为短信网关收发短信。每月免费200条收发额度
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的弹性安全MQTT代理。永久免费100万会话分钟/月（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API/Webhook轻松集成，免费套餐支持每日50条消息（限1设备1应用）
* [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知流程，单接口实现事务通知/定时任务/互动消息的多渠道投递。免费套餐每月1万条通知，含摘要/批量/多渠道/偏好设置/租户/广播等流程节点
* [SMSGate](https://sms-gate.app) - 基于Android™设备的云路由短信网关服务。完全免费的云服务（建议日超1万条时通知以保障服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费额度每日10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 免费额度每月5GB，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费计划包含50GB存储，15天存储保留期和7天搜索功能
* [sumologic.com](https://www.sumologic.com/) — 免费额度每日500MB，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 机器翻译API含免费层（30次免费请求，每次请求1000字符翻译）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条源字符串），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 完全免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监控器（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器、无限用户、无限仪表盘和无限告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案包含1个用户、1万次API/网络检查和1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费提供一个监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施费用。每月在Google Cloud Platform上花费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。免费版保留24小时数据
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，将指标和日志与Grafana集成。免费版：3个用户、10个仪表盘、100条告警、Prometheus和Graphite中的指标存储（1万条时间序列，14天保留）、Loki中的日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控您的定时任务和后台任务。最多20个检查免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可获得完整的实时监控仪表盘，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，支持无限订阅和无限团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站（最多100页）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面展示您的应用和堆栈，以便大规模监控和诊断问题。为开发者社区提供永久免费方案，支持最多100万日志事件的日志监控，以及最多2台主机的基础设施监控和应用性能监控
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控，带美观状态页面。"永远免费"方案提供HTTPS、关键词、SSL和响应时间监控，支持10个网站或API端点，并提供2个仪表盘/状态页面
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个收集实时指标的开源工具。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台旨在帮助工程师创建更完美的软件。从单体应用到无服务器架构，您可以检测所有内容，然后分析、排查和优化整个软件堆栈。免费层每月提供100GB免费数据摄入、一个完全访问用户和无限免费主要用户
* [nixstats.com](https://nixstats.com) - 一台服务器免费。提供邮件通知、公共状态页面、60秒间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的正常运行时间监控，以及定时任务和计划任务的监控。还提供状态页面。前5个检查（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送告警
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国防火墙屏蔽。通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息来识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警和值班管理，用于运维始终在线的服务。最多5个用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括告警、强大的可视化功能和基本报告。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变化，最多6个监控器（每日检查）免费
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站的核心网页指标、SEO变化和正常运行时间。免费方案包含5个URL、每日核心网页指标监控、10个HTML/SEO变化监控器、167个国家/地区的联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。最多5个用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，最多10万事件免费（支持无限项目和无限状态页面）
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检查无限URL并通过Discord、Slack或邮件接收停机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器（10分钟间隔）。监控SSH、HTTP、HTTPS和任何自定义TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页面平台。免费层包含一个可公开定制的状态页面（带SSL子域名）。开源项目和非营利组织可免费获得专业方案
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月的历史正常运行时间/日志、无限状态页面和自定义域名！永久免费且无限邮件告警。无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，无限服务器，10个自定义指标，500,000个自定义指标数据点，无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控，支持指标和日志，无需复杂设置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每个类别提供5个免费监控项
* [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 2个免费监控项
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控。提供HTTP监控、基于浏览器的监控、DNS监控、域名监控、状态页面等。免费套餐包含10个HTTP监控、1个DNS监控和1个状态页面
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
* [Squadcast.com](https://squadcast.com) - Squadcast是端到端的事件管理软件，帮助推广SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页面监控，3个免费监控项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个位置和20个主要Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监控项，5分钟间隔，可自定义状态页面（包括商业用途）。通过电子邮件和Telegram享受无限实时通知。无需信用卡即可开始使用
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页面
* [zenduty.com](https://www.zenduty.com/) — 面向网络运营、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应编排平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控工具，提供多种监控类型：Cron任务、关键词、网站、端口、Ping。25个正常运行时间检查，3分钟间隔，免费。通过电话、短信、电子邮件和Webhooks发送告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费，Linux和Windows服务器监控：5个免费，状态页面：1个免费 - 移动应用、多种通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 带截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用后每月2,000次错误免费
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控。为开源项目提供免费小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，或自托管无限使用。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含每月5,000次错误、无限用户、30天数据保留
* [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常并提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告。免费计划支持无限次报告。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用途免费计划支持无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，提供拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月最多1,000名活跃用户免费，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天分析数据
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费不限搜索次数，最多50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量专业简历模板的平台，支持完整克隆编辑和下载，已优化ATS兼容性
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发全领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证对齐的免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 麻省理工学院2500多门课程材料的在线出版物，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础与高级HTML/CSS、JavaScript和SQL的免费在线指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级别的现代Web开发免费课程，涵盖React、Node.js、GraphQL、TypeScript等，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费在线课程，专注计算机科学、工程和数据科学
* [Django教程](https://django-tutorial.dev) - 首个Django框架学习的免费在线指南，并为用户文章提供dofollow反向链接
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学培训，涵盖Python Click和Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 新闻通讯服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly但用于联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费2个域名邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者和每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具，免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户，完全免费的反事务性邮件服务（邮件永不实际投递）
* [临时邮箱](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，使用多种域名，每次页面刷新即更新邮箱地址，完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名，可创建无限地址（含广告），完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发，可创建无限域名邮箱地址（注意：使用.casa/.cf等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，可收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每天创建最多3个临时邮箱，可通过Chrome扩展便捷删除，适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件3天后自动删除，开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约86400次/月）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件和自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP，事务性邮件每月3000封免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮件测试免费API，公共邮件托管，出站捕获，邮件转Slack/WebSocket/Webhook（1500次月API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员、每秒2封邮件、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者免费临时邮箱，可通过网页或API即时创建
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，通过网站或RSS阅读邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱，所有ID共享收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每天100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周摘要
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，内置端到端加密，1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，免费层（10000封/月），异步发送，多SMTP服务器，黑名单/日志/追踪/Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 每日免费验证100个邮箱，含DEA检测/DNS查询/SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案，免费5个别名，无限带宽/回复/发送，教育工作者免费
* [Substack](https://substack.com) — 无限免费新闻通讯服务，收费时开始付费
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每天500封免费

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱提供商，现提供包含免费方案的多项服务：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费方案包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储空间
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制和5GB存储空间。捆绑Zoho Office套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 25用户免费团队协作，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议和10名网络研讨会 attendees
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理
   - [Showtime](https://zoho.com/showtime) — 面向5名参会者的远程培训会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS和Atom订阅，访问控制和可定制CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅和1用户免费的循环账单管理，支付托管由Zoho完成。存储最后40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 3个页面和最多50次支付的产品账单管理
   - [Desk](https://zoho.com/desk) — 3个客服人员、私有知识库和邮件工单的客户支持管理。集成[Assist](https://zoho.com/assist)支持1名远程技术人员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 100GB存储空间、无限用户、每频道100用户的团队聊天软件，支持SSO
   - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排程
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队规模，提供优质服务且价格合理。免费版包含10个特性开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能，跨Web、移动和服务器端应用管理特性开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源特性开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，不限特性开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的特性开关、A/B测试、分析和应用配置，支持Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，不限特性开关和A/B测试数量。
* [Molasses](https://www.molasses.app) - 强大的特性开关和A/B测试工具。免费版支持3个环境，每个环境5个特性开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域特性开关管理平台。免费版包含10个开关、2个环境且不限请求次数。SDK、分析仪表盘、发布日历、Slack通知等功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能强大的特性管理、A/B测试和分析平台。免费版提供无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源特性开关和A/B测试工具。支持代码化配置和全类型TypeScript SDK，与Next.js和React等框架深度集成。提供慷慨的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 可用于商业用途的免费字体。精心挑选的字体库，以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速简便地在网站上安装众多免费字体
* [FontGet](https://www.fontget.com/) - 提供分类清晰、带标签整理的可下载字体库
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，个人和商业用途100%免费
* [Befonts](https://befonts.com/) - 为个人或商业用途提供独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和付费商用字体，支持输入文本快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 使用CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含CJK（中文、日文、韩文）字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。含垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版提供无限表单，每月20次提交（展示Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交，提供现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每表单每月限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过UI转发提交至邮箱/Slack/Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版无限表单和提交，含预制模板、反垃圾及100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 秒级创建表单转邮件等功能，无需后端代码。个人账户每月50次免费提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态站点。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单与调研工具。50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研与产品行为分析工具。永久免费版支持500月活用户，无限回复与事件，多集成导出和周期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义跳转/回复页，Telegram & Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件/网站/产品内/移动端调研，AI创建工具，25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验与表单构建器。免费版5个表单，每表单最多3步骤，50次月回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计表单。免费版每表单限10字段，100次月回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版签署文件带水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态&JAMStack网站联系表单，无需后端代码。免费版无限表单/域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研与表单构建器。免费版3个调研/账户，100次月回复，每调研10元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [formpost.app](https://formpost.app) - 永久免费的表单转邮件服务。可设置自定义跳转、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特表单。无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任何PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动计分和AI的在线表单。免费版可收集100次回复，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调研收集反馈。免费版含1个活跃调研，每调研25次回复，可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，自动即时修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。仅需2行代码即可调用200+种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索，可同时搜索所有应用。搜索助手可利用您的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理功能。此外，专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并可与任何可观测性客户端配合使用。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源的LLM工程平台，帮助团队协作调试、分析和迭代其LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，可替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大语言模型（LLMs）在几分钟内提供定制的商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，且分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。请注意，虽然这些模型免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的语音清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的CDN服务。cdnjs是由Cloudflare提供支持的开源免费CDN，全球超过11%的网站在使用。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的超快可靠CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了jQuery等流行的第三方JavaScript库，可轻松添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理服务。永不宕机的持续交付。个人使用免费，限一名开发者且无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。实时处理图片并拥有全球缓存。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心节点，1个域名和通用SSL证书。
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持最多5个用户和每日1GB流量。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用和30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket）的认证服务。免费版每个项目含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 开源跨平台移动应用开发工具链，面向Java/Kotlin开发者。商业用途免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的JavaScript/TypeScript/WebAssembly分布式系统。免费版每日10万请求和每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例和2连接/1万行/无备份的PostgreSQL免费数据库。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持快速扩展。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，基于任意触发器构建工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费基础账户含1个your-username.pythonanywhere.com域名应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次/每日2,500次/每月5万次调用，仅付费版支持自定义域名。
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持Docker容器/Web应用/API的Git部署。免费实例可在法兰克福或华盛顿部署Web服务，免费托管PostgreSQL数据库位于法兰克福/华盛顿/新加坡（512MB内存/2GB存储/0.1CPU）。
* [Napkin](https://www.napkin.io/) - FaaS服务含500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管平台，为Meteor应用提供免费MongoDB共享主机和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI构建微服务/定时任务/托管数据库。免费版含2个服务/2个定时任务/1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境下的API连接平台，兼具NoCode敏捷性与编程语言能力。[免费版含1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。内置CI/CD和GitHub集成。[免费计划](https://wundergraph.com/pricing)支持3个项目/1GB出口流量/300分钟构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务，每月赠送5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，为开发者提供类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web Baas服务，免费提供1GB文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，支持在线编辑器免费构建托管或本地使用您喜爱的工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，为企业构建和部署数字创新方案。包含平台、SDK及组件库的完整个人沙箱访问权限。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1,000名用户的应用免费使用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管您的数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新推送。小项目免费——100万条记录、每月500万次函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可访问，正式版后将提供慷慨的免费层级。
* [Firebase](https://firebase.com) — 助力构建和运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板全集。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能（通常需数周）。
* [hasura.io](https://hasura.io/) — 扩展任意托管位置的现有数据库，提供即时GraphQL API，安全服务于Web、移动及数据集成场景。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，不限联系人且含自动预热功能。
* [paraio.com](https://paraio.com) — 带灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息、100台活跃设备的免费推送通知
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2,000订阅者内不限通知次数
* [pusher.com](https://pusher.com/beams) — 2,000月活用户免费不限量推送通知。统一API支持iOS和Android设备。
* [quickblox.com](https://quickblox.com/) — 即时通讯、音视频通话及推送通知的通信后端
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API、模板等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 用拖拽工具快速构建应用。点击式数据模型定制。通过Apex代码深入开发。强大API实现万物集成。企业级安全防护。点击式UI定制或前沿Web框架支持。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，结构化数据无限收发存储，每月最多2,500用户
* [Supabase](https://supabase.com) — 开源Firebase替代方案，用于构建后端。免费计划提供认证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 含认证、配额、监控和分析的API管理。免费云服务
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次触发，每月100次任务
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务、15分钟更新周期、5个自动化流程、Webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储、256MB实例、每日3,000次API请求和10,000次推送。（API与Parse平台高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持15+种数据库和任意API集成。
  * [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源的快速创建内部应用的低代码平台。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
  * [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，可定制移动和Web应用。提供拖拽界面、离线支持、实时位置追踪及多种第三方服务集成功能。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理快速构建内部工具、定制用户流程、数字体验、自动化、管理面板和运营应用，效率提升10倍。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用内置的OpenAI、Anthropic、Firecrawl等免费API。非常适合构建AI代理/内部工具并与团队共享。免费层包括完整API访问、AI编程助手和每月10,000次执行额度。
  * [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5 GB存储和1 GB内存。免费层还允许使用Studio和Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS，支持本地或云端部署，免费"个人环境"提供无限代码和最多1 GB数据库。
  * [ReTool](https://retool.com/) — 构建内部应用的低代码平台。ReTool高度可定制，能用JavaScript和API实现的功能均可在此完成。免费层每月支持最多5个用户，不限应用数量和API连接。
  * [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。使用AI生成、可视化编辑并通过代码扩展。集中管理集成、认证、权限和审计日志。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发应用。
  * [UI Bakery](https://uibakery.io) — 低代码平台，加速定制Web应用开发。支持通过拖拽构建UI，并通过JavaScript、Python和SQL实现高度定制。提供云端和自托管解决方案。最多5个用户免费。
  * [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费层支持1个用户和每月100万次工作流活动（[德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费网络托管，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，自定义 Web 服务器，通过 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施麻烦并加速设置。
* [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建 Web 和移动应用，免费但带有 Bubble 品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注于 Web3 前端的去中心化网络托管平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在 App Platform Starter 层免费构建和部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到网络。仅限静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并公开共享（实时）。通过其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
* [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 电子邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持以及许多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费托管服务，包括行业最佳的控制面板和 50+ 免费应用的一键安装。即时设置。无强制广告。
* [HelioHost](https://heliohost.org) — 非营利免费网络托管，提供 Plesk 控制面板、PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP 电子邮件、无限带宽、免费子域名、1000 MB 存储空间，并可选择升级。
* [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，自定义域名带 SSL、100 GB 月带宽、260+ Cloudflare CDN 位置。
* [Lecturify](https://www.lecturify.net/index.en.html) — 提供 SFTP 访问的 Web 托管，支持文件上传和下载，可用 PHP。
* [Neocities](https://neocities.org) — 静态托管，1 GB 免费存储和 200 GB 带宽。
* [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，免费提供 100 GB 数据和 100 GB/月带宽。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包括多种形式的 Web 托管（静态 Web 托管、基于容器的 Web 托管、WordPress 以及许多其他托管应用，一键即可使用）。一个免费 Web 托管（静态或容器化）和一个免费数据库，100 GB 带宽和 300 构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。开发者和机构免费。无自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等。
* [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，免费提供 SSL、全球 CDN、私有网络、Git 自动部署，以及完全免费的 Web 服务、数据库和静态网页计划。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 面向前端开发者的静态 Web 发布。无限站点，支持自定义域名。
* [telegra.ph](https://telegra.ph/) 使用 Quill 轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50 页，50 MB 存储，仅限 170+ 可用预定义主块，无字体、无网站图标且无自定义域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，免费提供 SSL、全球 CDN，每次 `git push` 时生成唯一预览 URL。非常适合 Next.js 和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于 SaaS 的网站构建器 — 无限网站、70+ 块、五个模板、自定义 CSS、网站图标、SEO 和表单。无自定义域名。
* [Qoddi](https://qoddi.com) — 类似 Heroku 的 PaaS 服务，采用开发者中心方法，功能全面。免费层支持静态资源、暂存和开发者应用。
* [FreeFlarum](https://freeflarum.com/) — 社区支持的免费 Flarum 托管，最多支持 250 用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，两周容器 TTL，每个项目 500 MB RAM，SFTP — 1G 磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，在其付费服务中提供三个静态站点的免费托管。
* [Serv00.com](https://serv00.com/) — 3 GB 免费 Web 托管，每日备份（7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），支持：MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等。
* [Sevalla](https://sevalla.com/) — 旨在简化应用、数据库和静态网站部署和管理的托管平台 — 1GB 站点限制，100GB 免费带宽，600 免费构建分钟，每个账户 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（加密DNS查询）。可用于绕过ISP的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS，支持5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费动态DNS，可管理CNAME/MX/SPF/SRV/TXT等多种记录。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户贡献域名的[子域名注册](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单申请。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪、无广告的免费动态DNS，域名数量不限。
* [noip](https://www.noip.com/) - 动态DNS服务，免费支持3个主机名，需每30天确认。
* [sslip.io](https://sslip.io/) - 特殊DNS服务，输入含IP地址的主机名即可返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - 自动备份与DNS变更监控，免费支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅与广告。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地上传存储IPFS和Arweave网络文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费提供10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点，1 CPU，1GB内存，PostgreSQL和MySQL提供1GB存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，包含函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用。包含2名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2 CPU、2 GiB内存、8 GiB存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis，免费层每日10,000次请求，最大数据库256MB，20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代应用而设计，覆盖物联网到AI领域
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512 MB
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。25MB内免费，含1个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库。无限表格，2,000行，1个月版本历史，最多25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能及主流商业应用集成的工具。免费方案含无限用户、10个堆栈和每堆栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RU)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费入门方案含9GB总存储、最多500个数据库、3个位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式化关系、自动REST API（支持类MongoDB查询）及高效多用户数据管理界面。免费方案允许3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月5,000万RU和10 GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点/17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL，0.5 GB总存储，1个项目，10个分支，无限数据库，主分支持续可用（非主分支计算5分钟后自动暂停），每月20小时非主分支活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储，10个数据库，集成Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1 MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时限，10GB存储+每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2 vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库最大10 MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
* [xata.io](https://xata.io) - 内置强大搜索与分析功能的无服务器数据库。单一API，多类型安全客户端库，优化开发工作流。永久免费层满足业余开发者需求，含三个Xata单位（具体定义见官网）。
* [8base.com](https://www.8base.com/) - 面向JavaScript开发者的全栈低代码平台，基于MySQL和GraphQL构建的无服务器后端即服务。通过UI应用构建器快速开发Web应用，免费层包含：2,500行、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库，持续可用无停机，1GB总存储，5,000万查询令牌，自动扩展，无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由工具

  * [Pinggy](https://pinggy.io) — 通过单条命令为本地主机提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi托管VPN服务，免费方案支持最多5人加入的无限网络，安全扩展类局域网网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码时提供wss:// URL并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网网络。支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，免费方案每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部（如localhost）目标。通过隧道为私有网络中的服务器提供公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。免费方案每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB月流量TURN，带宽限制，单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端的端到端加密网络，提供桌面/移动/NA客户端，可通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理服务，将本地主机服务器暴露到互联网。免费方案隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行的服务到自定义公共URL，并通过访问控制保障安全。免费方案支持单个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多5名团队成员免费使用的项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 私人项目协作免费版
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB空间（用户数不限）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表，25张图纸
* [Chpokify](https://chpokify.com/) — 团队版敏捷估算工具，免费支持5名用户，含Jira集成、无限视频会议和团队会话
* [clickup.com](https://clickup.com/) — 项目管理平台，提供免费版和云存储高级版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版包含5人团队、不限项目/文档、500分钟CI/CD时长和1GB存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版最多10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费支持3个项目（用户数不限）和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 复杂项目管理套件，SaaS版前5用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具，免费创建UML类图/对象图/ER图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比GraphQL模式变更，自动标记破坏性改动
* [huboard.com](https://huboard.com/) — GitHub issues项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板（100MB存储）
* [Instabug](https://instabug.com) — 移动应用Bug收集SDK，免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多维基础设施交互图表工具，免费版支持无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发工具，免费版最多10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理，基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版含2个看板和2名用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版单人使用（不限看板/列表/卡片）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的产品协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（含Chrome插件），完全免费
* [Kumu.io](https://kumu.io/) — 动态关系图谱工具，免费版支持无限公开项目，学生可享私有项目
* [Linear](https://linear.app/) — 极简任务追踪工具，免费版不限成员（10MB附件/250个任务）
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10名用户/2GB存储/20个自动化流程
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具，免费版含3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目（成员不限）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum看板工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版含100MB存储/5名用户，支持无限工作区/会议/工时表
* [Ora](https://ora.pm/) - 敏捷任务协作平台，免费版支持3名用户（10MB文件限制）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费版含无限公开项目+2个私有项目（3名活跃用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理工具，免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版不限成员（5MB附件/1000个任务）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具。免费版每月每应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版提供不限量的任务、迭代和工作区，且无用户人数限制
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，支持从看板到Scrum等多种流程。免费版不限用户数，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版包含1个工作区（不限任务和项目）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾与迭代规划工具，15人以下免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，提供付费升级选项
* [teleretro.com](https://www.teleretro.com/) — 趣味化回顾工具（含破冰表情包），免费版包含3次回顾会议且不限参与人数
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理与Beta测试平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每张图最多4个层级
* [todoist.com](https://todoist.com/) — 协同与个人任务管理。免费版功能：5个活跃项目/每项目5名用户/5MB文件上传/3个过滤器/1周活动历史
* [trello.com](https://trello.com/) — 看板式项目管理工具。不限个人看板数量，团队看板最多10个
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台（含项目管理、版本控制与问题跟踪）。免费版提供不限量的项目与协作者，3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具，3名用户以下免费且不限项目数量
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目及3人以下的私有项目，含时间跟踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌式项目管理方案，公共仓库/开源组织/非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，5名成员以下免费（含5GB附件）
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告等功能，专为自由职业者设计）和[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版支持无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具，特别适合外包与跨组织协作项目。免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简时间追踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化和CDN服务。提供多种图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费月套餐含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。支持1GB以内文件免费上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图片、音频、视频等。
* [GoFile.io](https://gofile.io/) - 免费文件共享和存储平台，支持网页界面和API。无文件大小、带宽、下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图片视频托管、处理和流媒体服务。免费套餐含每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图片的机器人，在保持质量的同时减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限图片托管服务。拖放上传（单图限32MB），获取直链、BBCode和HTML缩略图。登录可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站图片优化服务，免费版支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速（缓存/图片代码优化/CDN）。免费支持5000次页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动云端文件。基础版支持无限文件传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取限量免费计划和开源计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目、黑客松和移动应用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费1GB存储空间。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队使用基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 快速批量生成无登录/无水印/无广告的二维码。支持每次导出最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表和二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，已处理超70亿张图片。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费每月20分钟渲染视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 处理文件上传及视频/音频/图片/文档编码。开源项目/慈善机构/学生可通过GitHub学生开发者包获取免费服务。商业应用可免费试用2GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图片服务，提供图片CDN、媒体处理API和自动化优化前端库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理工具链。开发者免费使用所有功能：文件上传API/UI、图片CDN、智能压缩等。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即享10GB永久免费空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费20GB空间（支持3台设备），推荐奖励5GB（账户90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – 全球图像CDN服务，60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[免费开发者账户申请](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI文档处理工具，可将PDF/图像转换为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡/代金券/促销活动的定制二维码，支持样式/颜色/LOGO等自定义设置。
* [LibreQR](https://libreqr.com) – 注重隐私保护的免费二维码生成平台，不追踪用户数据。
* [Doradrop](https://doradrop.com) – 无广告的无限存储文件共享平台，无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富主页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（无限制查看者）
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等多种格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库（支持React/Vue/Svelte的SVG格式）
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 附带代码片段的网页设计与UI灵感精选集
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色方案灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK转Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号
* [Branition](https://branition.com/colors) - 专为品牌设计精选的手工调色板
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变色工具（支持RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版最多2名编辑+3个项目（无限制文件与查看者）
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持2名编辑+3个项目（无限制查看者）
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/场景授权）
* [Gradientos](https://www.gradientos.app) - 快速选择渐变方案的工具
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站最高分辨率favicon
* [Iconoir](https://iconoir.com) – 开源图标库（含数千图标，支持React/Flutter/Vue/Figma等）
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐等设计资源，免费版需标注来源且分辨率受限
* [landen.co](https://www.landen.co) — 无代码建站平台，免费版可发布1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，URL添加尺寸参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，提供Android/iOS/Web动画工具
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具，免费版支持3用户5项目（全功能）
* [mockupmark.com](https://mockupmark.com/create/free) — 40款免费T恤/服装模型生成工具（适用于电商与社交媒体）
* [Modeldraw.com](https://modeldraw.com) — 完整图表平台（含UML/流程图/思维导图等），支持无限成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG生成工具（波浪/斑点/图案等）
* [movingpencils.com](https://movingpencils.com) — 浏览器端免费矢量编辑器
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时协作分享
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具（支持SVG）
* [pexels.com](https://www.pexels.com/) - 免版税图库，提供关键词搜索API
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器（兼容PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具（支持响应式设计与代码扩展）
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成服务（支持直接外链）
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器端直接转换（无需上传，完全客户端处理）
* [Proto.io](https://www.proto.io) - 无代码交互原型工具，免费版包含1用户/1项目/5原型/100MB存储
* [resizeappicon.com](https://resizeappicon.com/) — 简易应用图标尺寸调整工具
* [Rive](https://rive.app) — 永久免费的跨平台动画创作工具（含编辑器与多平台运行时）
* [storyset.com](https://storyset.com/) — 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) — 产品模型生成工具（200个免费模板）

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可复制粘贴的免费可编辑SVG图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui的优雅主题模板，支持实时自定义颜色与排版
* [UI头像生成器](https://ui-avatars.com/) - 根据姓名首字母生成头像，支持URL直链调用和参数配置
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，免版税可商用
* [unsplash.com](https://unsplash.com/) - 免许可的自由版权图库（允许任意用途）
* [vectr.com](https://vectr.com/) — 网页/桌面端免费矢量设计工具
* [walkme.com](https://www.walkme.com/) — 企业级用户引导平台，免费版支持3个5步以内的操作指引
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - TailwindCSS设计的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费版支持4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创作独特图形与图像的编辑工具
* [Responsively App](https://responsively.app) - 响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 带丰富免费模板的在线样机设计编辑器
* [xLayers](https://xlayers.dev) - Sketch设计文件预览与转码工具（支持转Angular/React/Vue等框架，开源项目）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 无浮水印的浏览器视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的极简落地页生成器，免费1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌LOGO库，内置简易编辑器
* [svg仓库](https://www.svgrepo.com/) - 可商用的免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - SVG形状/背景/图案生成工具
* [Canva](https://canva.com) - 在线平面设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端开发平台，免费3个项目且支持代码导出
* [vector.express](https://vector.express) — 多格式矢量文件转换器
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台（含开发者专用转换器）
* [okso.app](https://okso.app) - 极简在线绘图工具（支持导出PNG/JPG/SVG/WEBP）
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 可定制的免费SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 企业LOGO查询API（前1万次调用免费）
* [MDBootstrap](https://mdbootstrap.com/) - 免费Bootstrap/Angular/React/Vue组件库（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 减少类名书写的Tailwind CSS组件库
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条样式设计工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色合集与生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一搜索平台
* [NextUI](https://nextui.org/) -- 现代React/Next.js UI组件库
* [Glyphs](https://glyphs.fyi/) -- 开源可编辑图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制的开源组件库
* [HyperUI](https://www.hyperui.dev/) -- 开源Tailwind CSS组件
* [日历图标生成器](https://calendariconsgenerator.app/) -- 一键生成全年日期图标
* [图片背景模糊器](https://imagebgblurer.com/) -- 为图片生成模糊背景框
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案
* [Nappy](https://nappy.co/) -- 黑人群体主题免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind资源合集与代码生成器
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线手绘风格白板工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的离线设计工具
* [Flows](https://flows.sh/) -- 产品引导平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计网站（由设计师投票选出）
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常非真实应用案例
* [Landings](https://landings.dev/) - [网页截图] 根据偏好寻找最佳着陆页设计灵感
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供设计师免费电子书和网络UI套件资源
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图库，包含桌面端、平板和移动端截图
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全搜索的移动应用截图库节省UI/UX研究时间
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动和网页UI设计
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供精品UI/UX模式库（iOS和Android）
* [Page Flows](https://pageflows.com/) - [移动/网页流程视频及截图] 多个移动和网页应用的完整流程视频，包含截图，支持高效搜索和索引
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟进最新网页和移动应用UI设计趋势，可按模式和应用筛选
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考合集，支持标签分类和搜索

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨网页/桌面/移动端的地图API和SDK，支持地理空间数据存储/分析/地理编码/路径规划等功能。每月包含：200万次免费底图瓦片加载、2万次非存储地理编码、2万次简单路径规划、5,000次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示服务及地理空间SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务及可视化SDK。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向/路径规划/路线优化/距离矩阵）、地图SDK（矢量/静态/移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览和API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境，支持300+个PHP版本运行代码片段
* [Android Studio](https://developer.android.com/studio) — 官方Android开发IDE，支持全类型设备应用开发。开源免费，支持Windows/Mac/Linux/ChromeOS
* [AndroidIDE](https://m.androidide.com/) — 基于Gradle的Android原生应用开发IDE，可在Android设备上运行
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境与工具平台
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时模拟接口和文档生成（免费版支持无限量API蓝图和用户）
* [BBEdit](https://www.barebones.com/) - macOS平台专业文本编辑器，[免费版包含核心功能集](https://www.barebones.com/products/bbedit/comparison.html)
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式Notebook的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的Java开发环境，由Oracle支持并提供简易图形界面
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理工具
* [Code::Blocks](https://codeblocks.org) — 免费开源的C/C++/Fortran IDE，支持跨平台
* [Cody](https://sourcegraph.com/cody) - 智能编程助手，支持代码补全/理解/修复/搜索，兼容VS Code和JetBrains系列
* [codiga.io](https://codiga.io/) — 支持代码片段搜索和复用的IDE插件，个人和小团队免费
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类/搜索/标签
* [cocalc.com](https://cocalc.com/) — 云端协作计算平台，预装Python/LaTeX/Jupyter等科学计算工具
* [code.cs50.io](https://code.cs50.io/) - 哈佛CS50课程定制的在线VS Code环境
* [codepen.io](https://codepen.io/) — 前端代码在线演练场
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 组件化开发工具，支持可视化测试和npm发布
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言云端IDE，[Red Hat托管实例](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据
* [ForgeCode](https://forgecode.dev/) — 支持多AI模型的编程助手，免费版包含基础功能
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux环境，免费版每日5次VM使用
* [GitPod](https://www.gitpod.io) — GitHub项目即时开发环境，免费50小时/月
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持实时协作和终端操作（免费1GB内存/10GB存储）
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费API每日200次调用
* [jetbrains.com](https://jetbrains.com/products.html) — 学生/教师/开源团队可申请免费IDE授权
* [jsbin.com](https://jsbin.com) — 前端代码演练场，支持Markdown/Jade/Sass
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速开发IDE
* [MarsCode](https://www.marscode.com/) - AI驱动的云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级JSON模拟API服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务
* [mockaroo](https://mockaroo.com/) — 测试数据生成工具，支持CSV/JSON/SQL格式
* [Mocklets](https://mocklets.com) - HTTP接口模拟器，提供永久免费版
* [Paiza](https://paiza.cloud/en/) — 无配置云端开发环境，免费版每日4小时运行时间
* [Prepros](https://prepros.io/) - 前端代码实时编译工具，支持Sass/Less等预处理语言
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 代码演练场兼编程学习平台
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线IDE，快速创建链接：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新定义并优化的代码编辑器。由Microsoft开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能IDE，拥有数千个扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面、Web和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
* [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/追踪、自由许可的Microsoft编辑器VSCode二进制发行版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化您的编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) - Wave是一款开源、跨平台的终端工具，可实现无缝工作流。内联渲染任何内容，保存会话和历史记录。基于开放Web标准，支持MacOS和Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，包含故事和测试功能。
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
* [WebDB](https://webdb.app) - 免费高效的数据库IDE。功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等。
* [Zed](https://zed.dev/) - Zed是由Atom和Tree-sitter创作者开发的高性能多人协作代码编辑器。
* [OneCompiler](https://onecompiler.com/) - 支持70多种语言（包括Java、Python、C++、JavaScript）的免费在线编译器。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 带有热图、会话记录和收入追踪的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 用于追踪GitHub仓库14天以上流量历史的精美仪表板。免费计划允许用户监控单个仓库的流量
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个目标同步
* [Avo](https://avo.app/) - 简化的分析发布工作流。单一真实来源的追踪计划、类型安全分析追踪库、应用内调试器和数据可观测性，在发布前捕获所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费层提供最多10K移动应用用户，包含深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。从数据仓库同步10个字段到60+ SaaS平台如Salesforce、Zendesk或Amplitude
* [Clicky](https://clicky.com) - 网站分析平台。免费计划支持一个网站3000次浏览分析
* [Databox](https://databox.com) - 通过整合其他分析和BI平台提供商业洞察和分析。免费计划提供3个用户、仪表板和数据源，1100万历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 每月2000次页面浏览（1个网站）
* [amplitude.com](https://amplitude.com/) - 每月100万事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网络分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网络分析，作为Google Analytics或Matomo的替代方案。免费层适用于非商业用途，包含无限站点、六个月数据保留和每月10万页面浏览
* [Google Analytics](https://analytics.google.com/) - Google分析
* [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月允许100万页面浏览，无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月最多3000次事件免费
* [heap.io](https://heap.io) - 自动捕获iOS或Web应用中的每个用户操作。每月最多1万次会话免费
* [Hotjar](https://hotjar.com) - 网站分析和报告。免费计划允许每天2000次页面浏览，每天100个快照（最大容量：300），可存储3个热图快照365天。无限团队成员。还包括应用内和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20个响应
* [Keen](https://keen.io/) - 用于数据收集、分析和可视化的自定义分析。每月1000次事件免费
* [Yandex.Datalens](https://datalens.yandex.com/) - Yandex云数据可视化和分析服务。服务免费提供，对用户数量和请求无限制
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) - REST和GraphQL的API分析（每月最多50万次API调用免费）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费入门计划，一个网站，1个iOS和1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软的商业洞察和分析。免费计划提供有限使用，包含100万用户许可证
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿
* [sematext.com](https://sematext.com/cloud/) - 每月最多5万次操作免费，1天数据保留，无限仪表板、用户等
* [Similar Web](https://similarweb.com) - Web和移动应用分析。免费计划提供每个指标五个结果，一个月的移动应用数据和三个月的网站数据
* [StatCounter](https://statcounter.com/) - 网站访问者分析。免费计划分析最近的500名访问者
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月最多100万计量事件免费
* [Tableau Developer Program](https://www.tableau.com/developer) - 创新、创建并使Tableau完美适应您的组织。免费开发者计划提供Tableau Online的个人开发沙盒许可证。版本是最新的预发布版本，数据开发者可以测试该平台的每个功能
* [usabilityhub.com](https://usabilityhub.com/) - 在真实用户上测试设计和模型并追踪访问者。一个用户免费，无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台，50万次操作，90天数据保留，30+一键集成
* [counter.dev](https://counter.dev) - 简单且隐私友好的网络分析。免费或按捐赠付费
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多100万追踪事件免费。还提供每月250次响应的无限应用内调查
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。有免费计划，为开源项目提供免费个人订阅，并有开源版本
* [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一个免费易用的工具，捕捉真实用户如何使用您的网站
* [Beampipe.io](https://beampipe.io) - 简单、注重隐私的网络分析。最多5个域名和每月1万次页面浏览免费
* [Aptabase](https://aptabase.com) - 开源、隐私友好且简单的移动和桌面应用分析。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月最多2万次事件免费
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的追踪计划，促进无缝协作。部署到生产环境使用真实流量，或无需编写代码即可为回归测试添加分析覆盖
* [LogSpot](https://logspot.io) - 完整的统一Web和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包括每月1万次事件
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费的轻量级隐私友好型Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标追踪。最多3个域名和每个域名600次会话回放免费
* [AppFit](https://appfit.io) - 全面的分析和产品管理工具，旨在促进跨平台的无缝管理分析和产品更新。免费计划包括每月1万次事件、产品日志和每周洞察

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站和产品分析工具。免费方案包含每月3,000次事件记录。
* [Rybbit](https://rybbit.io) - Google Analytics的开源无Cookie替代方案，使用体验提升10倍。免费方案提供每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小工具，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，含开发者工具用于错误复现、实时会话支持及产品分析套件。每月1,000次会话，全功能可用，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。每月追踪收入低于1万美元可免费使用。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月收入低于1万美元可免费使用。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，用于移动应用内订阅集成，支持iOS、Android、React Native、Flutter、Unity或Web应用。每月收入低于1万美元可免费使用。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法定货币汇率。免费层级每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。免费开发者计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新加密货币汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 提供物理货币和加密货币的实时汇率，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为您的业务提供可靠的汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费层级每天更新一次，每月限制1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费微计划每月提供500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费层级需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于使用量的计费从API创收。可连接Stripe、Chargebee等。免费层级每月提供3万次事件记录。
* [Nami ML](https://www.namiml.com/) - 完整的应用内购买和订阅平台，支持iOS和Android，包括无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管的应用内购买和订阅后端服务（iOS和Android）。每月追踪收入低于2,500美元可免费使用。
* [vatlayer](https://vatlayer.com/) — 即时VAT号码验证和欧盟VAT税率API，免费每月100次API请求
* [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据API。私人使用每月300次请求，每分钟10次请求。

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

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云平台。Vagrant box 托管服务。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享想法与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，帮助您从网站受众中建立活跃社区
* [Utterances](https://utteranc.es/) - 基于GitHub issues构建的轻量级评论组件，可用于博客评论、维基页面等场景
* [Disqus](https://disqus.com/) - Disqus是网络社区平台，被全球数十万网站使用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随您支付"模式，支持"一个管理员在多个域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等多种平台提供的功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间参数和视口尺寸。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括标准化元标签、精美链接预览、爬取功能或截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。基于Google Cloud构建，可弹性扩展。每月提供100次免费截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。支持从任意URL快速生成截图，免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 可高度自定义的网站快照服务。每月100次免费快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照，支持png/gif/jpg格式，包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费版每日500页，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月100次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是完全托管式的移动应用 CI/CD 服务。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的拖拽式界面工具，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) — 一个极快的x86虚拟机，能够运行Linux和Windows 2000。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个支持网络功能的OpenRISC虚拟机，能够运行Linux。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，可直接在浏览器中运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计和同意管理方案。免费版包含单次扫描和单个横幅功能。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理(DSARs)和数据映射。免费版含核心同意管理功能，并为验证过的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成美观图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网设备管理平台。免费开发者计划包含5台设备、免费云存储和数据存储，同时提供移动应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等IDE的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环webhook调度服务。免费版允许5个临时任务
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，提供无限免费任务
* [datelist.io](https://datelist.io) - 在线预约系统。免费版每月5次预约，包含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具。免费支持5个域名和20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞检测平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加无忧webhook功能：内置队列、指数退避重试和日志。免费版每日100次投递，14天留存，3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN/ISP/地理位置等主机信息，附带多种DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库复用加速应用开发
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab/NPM/PyPI等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看图片EXIF数据（含GPS定位信息）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，API动态生成PDF。免费版每月300份文档
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型定义与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成器
* [ray.so](https://ray.so/) - 代码片段艺术化截图工具
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理。免费版含10个源和10万次月访问
* [Renamer.ai](https://renamer.ai) — AI驱动的多语言文件重命名工具（含OCR/元数据提取）。免费版每月15个文件，含桌面端应用
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具，支持GET/POST/PUT/DELETE/HEAD方法及认证头
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电量/里程/门锁控制等车载API
* [snappify](https://snappify.com) - 开发者视觉化工具（代码片段/技术演示）。免费版同时3个作品，含5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub订阅源服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具。免费版每份问卷限10题100答
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台（网站/WhatsApp）。免费版不限机器人数量
* [UUID生成器](https://newuuid.com/) - 企业级UUID/GUID/CUID/NanoID/ULID生成工具
* [Versionfeeds](https://versionfeeds.com) — 自定义软件更新RSS订阅源（免费版限3个源）
* [videoinu](https://videoinu.com) — 在线屏幕录像与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者编码/解码/数据处理工具集
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的WebGL GPU基准测试工具

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需支持和永久设备访问（每天免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 像素艺术创作工具平台，提供教程和调色板资源
* [ArtStation](https://www.artstation.com/) - 2D/3D资源交易市场，同时可作为作品集展示平台
* [Rive](https://rive.app/community/) - 社区资源库，支持通过免费计划创建自定义游戏素材
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) - 8000+免费/付费3D模型及PBR材质纹理库
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的2D/3D/音频/UI游戏素材
* [Poliigon](https://www.poliigon.com/) - 含多分辨率选项的免费/付费纹理、模型、HDRI和笔刷，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) - 采用不同CC协议的协作式免费音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)整理的自由开源软件及SaaS列表
* [GitHub开源开发工具集](https://github.com/tvvocold/FOSS-for-Dev) — 开发者专属的自由开源软件中心
* [GitHub教育礼包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据算法评估）
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专享的红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，另提供免费电子书资源
* [SMS测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题与UI套件，加速应用开发！
* [Web性能检测](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名的工具
* [开发者小工具集](https://smalldev.tools/) — 支持编解码/代码压缩美化/测试数据生成等功能的免费工具集，拥有愉悦界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡验证的免费入门方案，支持创建无限导入器及100MB文件上传
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮库
* [WrapPixel](https://www.wrappixel.com/) — 下载基于Angular/React/VueJs/NextJS/NuxtJS的高质量免费与付费管理后台模板
* [Utils.fun](https://utils.fun/en) — 完全离线的日常与开发工具集（含水印生成/屏幕录制/编解码/加密/代码格式化等），所有数据处理均在浏览器本地完成
* [IT工具集](it-tools.tech) - 面向开发者与IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具集（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）
* [正则101](https://regex101.com/) — 免费的正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（含格式化/压缩/转换器）
* [AdminMart](https://adminmart.com/) — 基于Angular/Bootstrap/React/VueJs/NextJS/NuxtJS的高质量免费与付费管理后台模板
* [Glob模式测试器](https://globster.xyz/) — 可视化设计与测试glob模式的平台，附学习资源
* [SimpleRestore](https://simplerestore.io) - 无需代码即可将MySQL备份恢复到任意远程数据库
* [360转换器](https://www.360converter.com/) - 免费实现视频转文字/音频转文字/实时语音转文字/YouTube视频转文字/添加视频字幕，适合短视频处理
* [最佳二维码生成](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升网站排名，免费版支持手动发布1篇/月
* [PageTools](https://pagetools.co/) - 永久免费的AI工具套件，一键生成网站政策/社交媒体资料/网页内容
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互式学习平台
* [Axonomy应用](https://axonomy-app.com/) - 免费创建管理发票的工具，每月10张免费额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费转换表格数据为CSV/HTML/JSON/Markdown等格式

**[⬆️ 返回顶部](#目录)**