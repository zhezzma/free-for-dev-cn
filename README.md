# free-for.dev

开发者和开源作者现在有许多提供免费层级的服务，但要找到所有这些服务需要时间才能做出明智决策。

这是一份提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的列表。

本列表的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们喜爱所有免费服务，但最好保持主题相关。有时界限比较模糊，因此这是主观判断的；如果未采纳您的贡献，请勿介意。

此列表由1600多人通过Pull Requests、审阅、想法和工作共同完成。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或停用的服务。

[![追踪Awesome列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅适用于服务化（as-a-Service）产品，不包括自托管软件。符合条件的服务必须提供免费层级，而非仅限免费试用。如果是按时间分段的免费层级，则必须至少持续一年。我们也会从安全角度评估免费层级，因此支持SSO的服务可以接受，但不会接受仅限付费层级才提供TLS的服务。

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

  * [Google 云平台](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB从北美到所有区域目的地（不包括中国和澳大利亚）的网络出口流量
    * Cloud Storage - 5GB存储，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储。每周60小时限制
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出口流量
    * Google Kubernetes Engine - 一个区域集群免收集群管理费。每个用户节点按标准Compute Engine定价收费
    * BigQuery - 每月1TB查询，每月10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

* [亚马逊云服务](https://aws.amazon.com)
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

* [微软Azure](https://azure.microsoft.com)
    * [虚拟机](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM，1个B1S Windows VM（12个月）
    * [应用服务](https://azure.microsoft.com/services/app-service/) - 10个Web、移动或API应用（每天60 CPU分钟）
    * [函数](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [开发测试实验室](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、精简的dev-test环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟数
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [负载均衡器](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [通知中心](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [静态Web应用](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [存储](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [认知服务](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），包含有限交易的免费层
    * [认知搜索](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes服务](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [事件网格](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle云](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 当[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出口流量，基于x64的VM限速50 Mbps，基于ARM的VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次递送选项，每月1000封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM云](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS防护，CDN及免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费无限速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志记录，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供构建、部署和发展云应用所需的一切功能，让您无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于改进Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户可享无限量公共和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限量公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目可享无限量公共和私有Git仓库（协作人数不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包/容器托管、项目管理和问题追踪功能
* [GitGud](https://gitgud.io) — 无限量公共和私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD
* [GitHub](https://github.com/) — 无限量公共仓库和私有仓库（协作人数不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者可享无限量公共和私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件托管平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发工具库，同时提供Ionic代码仓库
* [NotABug](https://notabug.org) — 自由许可证项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) - 为开源开发者提供的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — 自由开源软件代码协作平台，专为FOSS许可证项目设计，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) - 无限量免费开源分布式版本控制系统。其独特优势在于基于完善的补丁理论，易于学习使用和分发。解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 面向个人用户、开源项目和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git和Subversion）包含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，支持快速查看、编辑和在线分享。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 多功能API套件，包含IP地理定位、性别检测、邮箱验证等服务。
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和3个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面监控和理解API及后端运行状态的全套工具，含自动API合约验证。免费计划支持每日10,000次请求。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高质量API。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等根因分析。免费支持2个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观测AI智能体。完整评估与可观测性平台，帮助团队可靠部署AI。独立开发者和小团队（3人）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。免费每日50次请求，公开仪表盘。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速精准的免费API（无限或每月10K-50K次），包括IP定位、反向地理编码、网络洞察等现代Web服务。
* [Browse AI](https://www.browse.ai) — 网页数据提取与监控。免费每月1k积分（等同1k并发请求）。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理访问等。免费计划每月1k次请求。
* [Calendarific](https://calendarific.com) - 企业级全球200+国家节假日API服务。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API支持自定义人脸识别与检测，可训练AI模型。免费每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 多功能API平台，含文档转换、病毒扫描等服务。免费600次/月，仅限北美可用区，文件最大2.5MB。
* [Colaboratory](https://colab.research.google.com) — 基于网页的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - 从训练到生产的全流程MLOps平台，含实验跟踪、模型注册等功能。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，支持从前端创建和管理订单。开发者计划免费每月100订单和1,000个SKU。
* [Composio](https://composio.dev/) - AI智能体与LLM集成平台，连接200+工具。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器（文档/图像/视频/音频/电子书）。提供REST API及Node.js/PHP/Python库。免费版限制20MB文件大小和30次/日转换。
* [国家-州-城市微服务API](https://country-state-city.rebuscando.info/) - 提供全球地域信息的API。免费层每日100次请求。
* [Coupler](https://www.coupler.io/) - 应用间数据同步工具，可创建实时仪表板。免费版限1用户/数据连接/手动刷新。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖拽编辑器和API自动生成PDF。免费每月100份PDF和3个模板。
* [Crawlbase](https://crawlbase.com/) — 无代理爬虫服务，自动处理验证码。首1000次调用免费。
* [CurlHub](https://curlhub.io) — API调用调试代理服务。免费每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API。免费每月5,000次调用。
* [Cube](https://cube.dev/) - 帮助开发者从现代数据存储访问和组织数据。Cube Cloud免费版每日1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单免费文件分享，数据访问后自毁。支持浏览器或命令行上传下载。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable与任意API。免费每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具。免费版每月20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本。免费10GB存储和120小时/月运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Chrome/Edge），从网页提取数据到CSV/Excel。免费每月500页。
* [Datapane](https://datapane.com) - 用Python构建交互式报告，并部署为自助工具。
* [DB-IP](https://db-ip.com/api/free) - 免费IP定位API，每日每IP 1k次请求。CC-BY 4.0许可的精简数据库同样免费。
* [DB Designer](https://www.dbdesigner.net/) — 云端数据库建模工具。免费版支持2个模型，每个模型10张表。
* [DeepAR](https://developer.deepar.ai) — 跨平台AR人脸滤镜SDK。免费支持10月活用户(MAU)和4人脸追踪。

  * [Disease.sh](https://disease.sh/) — 提供新冠疫情相关数据的免费API，可用于构建实用应用程序
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费版每月可生成250份文档
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的托管API，用于生成和私有存储PDF及截图。免费版每月允许400次PDF/截图生成
* [drawDB](https://drawdb.app/) — 无需注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页和物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成包含实时文档和用户管理的完整REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20个积分
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费版每月50次API调用并可使用模板库
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。支持免费本地使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。免费试用包含2个项目（每个项目10张表）
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费版每月250页，支持无限用户和3个模板
* [file.coffee](https://file.coffee/) - 单文件存储上限15MB（注册用户30MB）的平台
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费版每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化、验证、比较和压缩JSON数据的免费浏览器工具
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费Micro版每月500次交易检测
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置服务。免费API每月500次查询
* [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP定位API，免费版每日2,000次请求
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图像和5个模板
* [Hex](https://hex.tech/) - 面向Notebook、数据应用和知识库的协作式数据平台。免费社区版支持5个项目
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)平台，免费版每日100个事件分发并保留7天历史记录
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器
* [huggingface.co](https://huggingface.co) - 构建、训练和部署Pytorch/TensorFlow/JAX的NLP模型。免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（如Power BI/Power Query）访问70多个云平台。含数据复制交换功能。开发者免费版有数据量限制
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，无需API密钥，免费版同IP限45次/分钟
* [ipbase.com](https://ipbase.com) - IP定位API，永久免费版每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API，开发者永久免费版每日1,000次请求
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，每月1,000次免费请求
* [IPLocate](https://www.iplocate.io) — IP定位API，免费版每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP关联企业等。同时提供免费可下载的IP与国家/ASN关联数据库
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务，LITE数据库可免费下载
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API，免费版每月5万积分。同时提供500次免费WHOIS和域名查询
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的IP定位API，免费版每月3万次查询（每日1k次）
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP定位API，免费版提供1,000次无注册查询
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（免费版每月5万次）。提供地理位置、企业、运营商等数据接口
* [IPQuery](https://ipquery.io) — 开发者无限制IP API，无速率限制或费用
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月5万次免费查询
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP，免费版无需注册。支持CORS直接通过浏览器JS调用
* [JSON Serve](https://jsonserve.com/) — 帮助开发者存储JSON对象并作为REST API使用的免费服务
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码、头部和响应体
* [JSONSwiss](https://www.jsonswiss.com/) - 功能强大的在线JSON查看器、编辑器和验证工具。支持AI修复、树形/表格视图、12+语言代码生成，以及JSON转CSV/XML/YAML等格式转换

  * [Kreya](https://kreya.app) — 免费的gRPC图形界面客户端，用于调用和测试gRPC API。支持通过服务器反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据提升您的机器学习模型。免费使用最多1000个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知您的客户。每月免费处理1,000次登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 使用真实邮件服务器连接验证有效电子邮件的服务。免费API计划每月提供100次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。"永久免费"API层级每天允许100次免费API请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预测基于多个天气模型的机器学习组合以提高准确性。免费计划每天400次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取能力或截图服务。每天50次请求，永久免费。
  * [Mindee](https://developers.mindee.com) – Mindee是一款强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者标准化文档处理层以自动化应用工作流。免费层级每月提供500页处理。
  * [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式 playground。1位编辑者免费。
  * [MockAPI](https://www.mockapi.io/) — MockAPI是一个简单工具，可快速模拟API、生成自定义数据并通过RESTful接口执行操作。MockAPI旨在用于原型设计/测试/学习。每个项目免费创建1个项目/2个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly是值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层级每天提供500次请求。
  * [Mocki](https://mocki.io) - 一个工具，可创建与GitHub仓库同步的模拟GraphQL和REST API。简单的REST API无需注册即可免费开发和使用。
  * [Mocko.dev](https://mocko.dev/) — 代理您的API，选择要在云端模拟的端点并检查流量，免费。加速开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 一个简单的Web应用，用于生成自定义HTTP响应以模拟HTTP请求。也可作为[开源项目](https://github.com/julien-lafont/Mocky)使用。
  * [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——一个强大的工具，可在没有后端延迟的情况下模拟真实API响应。非常适合前端开发人员、QA测试人员和DevOps团队。[仓库](https://github.com/haerulmuttaqin/mocknroll-web)。
  * [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，并可在Docker容器中生成代码和应用。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一个免费简单的工具，用于检查跨多个节点的出口IP地址，了解您的IP在不同全球区域和服务中的显示方式。适用于测试基于规则的DNS拆分工具，如Control D。
  * [Namekit](https://namekit.app/) - AI驱动的域名发现——即时查找可用的标准价格域名。免费每日查询。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻，并获取JSON结果。开发者每天免费100次查询。文章有24小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
  * [OCR.Space](https://ocr.space/) — 一个OCR API解析图像和PDF文件，以JSON格式返回文本结果。每月25,000次请求免费，文件大小限制为1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转化为API，五个项目免费。
  * [Parseur](https://parseur.com) — 每月20页免费：从PDF、电子邮件中提取数据。AI驱动。完整API访问。
  * [PDFBolt](https://pdfbolt.com) - 面向开发者的PDF生成API，注重隐私。提供Stripe风格的文档，包括每月500次免费PDF转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 轻松将HTML或URL转换为PDF的简单API。每月100次免费转换。
  * [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包括一个模板，每月100次PDF生成。
  * [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。也可使用热图和折线图进行可视化。
  * [Postman](https://postman.com) — 使用Postman简化工作流并更快创建更好的API，Postman是一个API开发协作平台。永久免费使用Postman应用。Postman云功能也有永久免费层级，但有一定限制。
  * [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL
  * [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括5个部署的工作流和每月500分钟的无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。最多5位用户的团队永久免费，包含无限仪表板和图表、无代码图表构建器和协作SQL编辑器。
  * [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍更简单的AI网络爬取，几乎零采用时间，现有工作流程节省85%+时间，操作速度比手动研究快4倍且无妥协，包括所有研究任务的REST API端点。每月前1,000积分免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者找到并连接数千个API，通过趣味挑战（带解决方案！）和交互式示例进行API开发。
  * [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg的REST API，在线运行FFmpeg而无需处理基础设施。免费层级包含每月处理配额和4个vCPU。
  * [RequestBin.com](https://requestbin.com) — 创建一个免费端点，可向其发送HTTP请求。发送到该端点的任何HTTP请求将记录相关负载和标头，以便观察来自Webhook和其他服务的建议。
  * [reqres.in](https://reqres.in) - 一个免费的托管REST-API，随时响应您的AJAX请求。
  * [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层级每月包括30积分。
  * [ROBOHASH](https://robohash.org/) - 从任何文本生成独特酷炫图像的Web服务。
  * [Scraper's Proxy](https://scrapersproxy.com) — 简单的HTTP代理API，用于爬取。匿名爬取，无需担心限制、封锁或验证码。每月前100次成功爬取免费，包括JavaScript渲染（联系支持可获得更多）。

  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的webhook。免费套餐包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将任何Google表格转换为RESTful API。提供免费方案，每张表格包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能API。免费方案每月100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API，返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON结果。免费套餐每月100次成功调用。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供节省时间的开发工具。免费层包含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API，加速应用开发。免费方案含2个API和2,500次月调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，直接在浏览器中将CSV转换为结构化JSON。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含格式化器、验证器、正则测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - API协作设计和文档化SaaS平台。免费版提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图片。免费方案每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送50,000条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与研究API，可整理研究成果。免费层1,000次请求/月，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费查询，提供国家/城市/区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API，核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 免费天气API，提供全球精准预报、历史数据和监测方案。
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，含日志聚合、可观测性、文档和调试。免费层每月25万次请求上限。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API，免费方案无限调用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API，每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，含实时状况、预报和警报，采用AI模型提升精度。免费层10,000次API调用/月。
* [WebScraping.AI](https://webscraping.ai) - 内置解析器、Chrome渲染和代理的网页抓取API，每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台，支持实验跟踪、数据集版本和模型管理。个人项目免费版含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI代码审查助手，免费版每月25,000令牌（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识型算法库。
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API，每月3万次调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器和住宅IP的网页抓取API，学生和非营利组织可获额外额度。每月1,000次免费调用。
* [Zipcodebase](https://zipcodebase.com) - 全球邮政编码API，每月5,000次免费查询。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与验证服务，每月1万次请求。
* [Zuplo](https://zuplo.com/) - API管理平台，可快速添加密钥认证、限速、文档和商业化功能。免费版支持10个项目、无限生产环境、100万次月请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位数据结构差异。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的IP地理定位API，支持商业用途，返回JSON格式数据。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT等构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有及公共Maven和PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有及公共制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包和Docker注册表的私有云仓库。开源/公共项目免费。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云版），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费使用，支持无限用户、完整历史记录和集成功能，并提供可自托管开源版本
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与预约工具，免费版支持1个日历连接和无限会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的多功能聊天平台，具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时故事点估算工具，免费支持无限成员参与快速规划
* [Telegram](https://telegram.org/) — 高速可靠的通讯应用，商务用户和小团队可享受大群组、用户名系统、桌面客户端及强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供基础工具集，支持每工具自动保存一条记录标准处理速度及社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具，支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作平台，支持IDE配对编程、终端共享、音视频通话及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备协同插件提升效率，免费版每月含10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 信息管理工具，支持笔记共享与协同编辑
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具，免费支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台，通过可定制虚拟空间实现自然社交体验，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册语法化看板工具，完全免费无功能限制
* [flat.social](https://flat.social) - 团队会议与社交的交互式空间，会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动日报系统，含推送可视化、同伴认可机制及自定义提醒功能，免费版支持3个仓库和3条提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具，公开/私密房间无数量限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作写作工具，私有笔记协作人数和模板功能将受免费版限制
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴与视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实远程协助工具，免费版不含分析、加密及技术支持
* [ideascale.com](https://ideascale.com/) — 创意收集与投票平台，免费支持25人社区
* [Igloo](https://www.igloosoftware.com/) — 内部文档门户平台，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭、社区和企业提供安全通讯与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack输入/meet发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持多工作区协作，免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目协作平台，实现无缝工作流
* [Lockitbot](https://www.lockitbot.com/) — Slack内共享资源预约系统（如会议室/开发环境），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 网站/PDF/图片的实时标注反馈工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器与密钥管理的密码管理器，支持全平台使用
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式视频会议与屏幕共享工具
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 企业级在线白板协作工具，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务/维基/数据库的Markdown协作应用，全平台可用的全能工作区
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具，免费版含核心功能、50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频面试平台，含画板与在线可执行代码编辑器，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁团队时间追踪应用，免费版支持10人以下的时间报表生成
* [PageShare.dev](https://www.pageshare.dev) - GitHub PR视觉评审工具，无需部署即可预览，免费版每月10页/100MB存储
* [Pendulums](https://pendulums.io/) - 免费时间管理工具，通过直观界面与数据统计提升效率
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户与完整消息历史

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音视频通话，并能轻松与其他服务集成。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、跨应用桥接、无限消息记录和完整历史消息存储。
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB空间。
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多代码库贡献记录并生成统一报告。
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作。完全免费。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，10人以下团队免费使用。
* [slack.com](https://slack.com/) — 不限用户数量的免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务提供商的状态页。
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个工作墙、不限用户和1GB存储。
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点。无需插件、注册或付费。
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持带泳道看板和完整Scrum实现，含时间追踪功能。免费版支持5用户和3项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程。包含面向远程团队的完整休假管理功能。5人以下小组免费。
* [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费使用。
* [TeleType](https://teletype.oorja.io/) — 共享终端/语音/代码/白板等。开发者端到端加密协作无需登录。
* [TimeCamp](https://www.timecamp.com/) - 不限用户的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目工具。
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代方案），不限用户数，每工作区10GB存储和10GB音视频流量。
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用。
* [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理清晰。提供免费无限版，合格团队可享折扣。
* [tldraw.com](https://tldraw.com) — 免费开源白板绘图工具，含智能箭头/吸附/便签/SVG导出功能。支持多人协作编辑，另有免费VS Code官方扩展。
* [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签/任务管理器，可在可定制云桌面中实现文件夹协作。
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR。全员免费，非营利组织额外赠送Nano套餐。
* [whereby.com](https://whereby.com/) — 一键式免费视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建生产级多步自动化和内部应用。免费用户最多创建/加入3个非高级工作区。
* [vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台。单键上传视频，支持录制/管理/分享等功能。免费版提供10个视频/1GB存储/10GB月流量。
* [userforge.com](https://userforge.com/) - 互联在线角色/用户故事和场景映射工具，保持设计与开发同步。免费版支持3个角色和2名协作者。
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度且使用品牌播放器。
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务。不限文件数量（单文件≤5GB）且可分享给任意多接收者。
* [Wormhole](https://wormhole.app/) - 端到端加密分享≤5GB文件（有效期24小时）。大文件采用P2P传输。
* [zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费版限时40分钟。
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版含1万条可搜索消息和5GB文件存储，另有可自托管的开源版本。
* [robocorp.com](https://robocorp.com) - 驱动自动化运维的开源技术栈。免费试用云功能并实现简单自动化：240分钟/月机器人时长+10次助手运行+100MB存储。
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版含完整消息历史、无限私聊、1个群组对话和1GB文件存储。
* [Chanty.com](https://chanty.com/) — 另一款Slack替代品，永久免费版支持10人以下团队：无限公私对话+可搜索历史+无限语音通话+10个集成+20GB团队存储。
* [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，用于收集网站/PDF/图片的数字化反馈。
* [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台。免费版含无限频道/剧本/看板/用户和10GB存储等。
* [Webvizio](https://webvizio.com) — 网站反馈工具和BUG报告系统，可直接在实时网站/Web应用/图片/PDF/设计文件上开展开发协作。
* [Pullflow](https://pullflow.com) — 提供跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
* [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议。
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费版支持100人50分钟会议。
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库和API）。开发者个人免费。
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输分享界面。无需订阅即可发送照片/视频等大文件。
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易粘贴网站。

  * [腾讯实时音视频](https://trtc.io/) — Tencent Real-Time Communication (TRTC)提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
* [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟器、画布或变通方案。完全可用的免费版本。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。开发者可享免费套餐，同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言配置。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 及 API 工具包。开发者可享免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费方案。基于 GraphQL 的 CMS，基础版每月支持 10 万次 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS，完全免费且无功能限制，支持本地或云端管理数字资产与数据库内容。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何使用限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销工具。开发者方案支持 2 个用户、无限项目（每个项目含 2 个环境）、500 条内容、2 种语言，并提供交付/管理 API 及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS。全托管可扩展的内容管理 API，社区方案支持单用户无限 API 调用/文档/自定义类型/资源/多语言配置。开源内容项目可申请更高级免费方案。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境与实时托管数据库。每个项目免费包含无限管理员用户、3 个普通用户、2 个数据集、50 万次 CDN API 请求、10GB 流量及 5GB 资源存储。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，提供企业级解决方案。开发者方案包含 3 个用户、500 条内容、3 种内置角色、30+ 内容类型、完整 REST API 支持及 Office 在线编辑功能。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 驱动的无头 CMS，支持 Markdown/MDX/JSON，基础版免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 现代化网站框架，可对接任意 CMS/API/数据库构建无头网站，显著提升流量转化与商业收益。
* [Hygraph](https://hygraph.com/) - 小型项目免费方案。GraphQL 优先的 API，帮助用户从传统方案迁移至原生 GraphQL 无头 CMS，实现全渠道内容交付。
* [Squidex](https://squidex.io/) - 小型项目免费方案。API/GraphQL 优先，基于事件溯源机制的开源系统（自动记录所有变更）。
* [InstaWP](https://instawp.com/) - 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间，站点有效期为 48 小时。
* [Storyblok](https://www.storyblok.com) - 面向开发者与营销人员的无头 CMS，兼容所有现代框架。社区免费版包含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持、2500 个资源管理、图片优化服务及每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书及无限定时任务，无时间限制。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可以完全访问源代码和无限量的API与路由，实现深度集成。免费方案包含3个项目、5张数据表和1个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody提供多种LLM选择（包括本地推理），支持各类IDE环境，兼容所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动补全（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费方案包含三个功能模块。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限量的行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞见，帮助开发者更快打造更优质的软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，新用户初始获得1200积分，每月还可领取200免费积分。


**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和1个100 MB存储的代码库
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等分析（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版支持无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发人员代码交互模式优先处理技术债务，可视化团队耦合和系统掌握度等组织因素。开源免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪。通过精准一致的指标在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI的代码缺陷/安全漏洞/性能及API问题检测。支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源和私有仓库免费（最多30名开发者）
* [deepscan.io](https://deepscan.io) — JavaScript代码运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库和SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查（免费）
* [gocover.io](https://gocover.io/) — 任意[Go](https://golang.org/)包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化顶级静态代码分析器。自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。提供框架迁移/带修复的代码分析/大规模代码转换，让开发者专注创新而非维护旧代码。开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — GitHub拉取请求和提交的编程语言感知差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具（含代码验证和多设备支持）
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，提供强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到您的开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更快的发布周期。免费版每构建最多30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的CD服务，开源项目免费
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持在Kubernetes和Lambda环境上部署自定义和第三方应用。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。每月200次免费构建，每次构建10分钟，2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目和一个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费3个用户和每月5k任务分钟。测试分析免费开发者层包括每月100k测试执行，开源项目有更多免费包含。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 包含所有功能的免费计划，托管CI/CD服务支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器，本地运行器，测试分割，Docker层缓存和其他高级CI/CD功能。每月最多6000分钟执行时间，无限协作者，私有项目30个并行作业，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1个构建，一个环境，共享服务器，无限公共仓库
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30构建分钟）
* [drone](https://cloud.drone.io/) - Drone Cloud使开发者能在多种架构上运行持续交付流水线 - 包括x86和Arm（32位和64位） - 全部在一个地方
* [LayerCI](https://layerci.com) — 全栈项目的CI。一个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM，并通过唯一URL提供您的应用，无限公共和私有仓库，VM大小最多2 GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
* [Mergify](https://mergify.io) — GitHub的工作流自动化和合并队列 — 公共GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具，让您通过UI连接应用和自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层100 Mb，1000次操作，15分钟最小间隔。
* [Shipfox](https://www.shipfox.io/) - 让您的GitHub Actions运行速度提升2倍，每月3,000构建分钟免费。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，Open Policy Agent持续资源合规，SAML 2.0 SSO，访问公共工作池：每月最多200分钟
* [microtica.com](https://microtica.com/) - 启动环境，包含现成的基础设施组件，免费在AWS上部署应用，支持生产工作负载。免费层包括1个环境（在您的AWS账户上），2个Kubernetes服务，每月100构建分钟和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动分割e2e测试运行等功能加速您的monorepo在CI上的表现。免费计划最多30个贡献者，包含150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3,000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具如Terraform、OpenTofu和Terragrunt的编排和管理平台。最多2个用户免费，包括所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，分层运行有序操作。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费，单个用户每周有限检查点的免费套餐。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接测试您的Android和iOS应用。免费套餐包括每月两个并发会话，每次30分钟使用时间。应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具集，用于捕捉CI性能回归。所有公开项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。额外付费可获得云监控和CI/CD集成。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"Monitoring as Code"工作流和Playwright。为开发者提供慷慨的免费套餐。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费套餐。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员免费工具，检查API是否针对给定域名启用CORS并识别差距。获取可操作见解。
  * [cypress.io](https://www.cypress.io/) - 对浏览器中运行的任何内容进行快速、简单和可靠的测试。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5个用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外均为开源。每月免费创建5个测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地将故障注入系统，在导致面向客户的问题前发现弱点。Gremlin Free提供对最多5台主机或容器的关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐含最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，可帮助不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 在任何CI提供商上通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐最多10分钟测试文件，开源项目无限免费套餐。
  * [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户长达60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员数量不限，开源项目完全免费，每月7,000快照。
  * [octomind.dev](https://www.octomind.dev/) - 使用AI辅助测试用例生成自动生成、运行和维护Playwright UI测试
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员数量不限，演示应用和项目数量不限，每月5,000快照。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用测试自动化工具。适用于原生应用、flutter、react-native、web、ionic等多种应用框架。免费套餐限制为iOS和Android各10个测试，但包含付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费套餐最多创建10条规则。开源项目免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次测试运行最多3分钟。发现错误？可复制测试的唯一URL向开发人员展示如何重现错误。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和通过GitHub将手动测试实现为代码的框架。服务对[开源项目免费](https://github.com/marketplace/testspace-com)，每月450个结果。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成的工具链、组件和设计系统实现更快迭代、更优设计并简化开发流程。无限项目且提供五年免费维护。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费的网络和服务器工具。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过唯一URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和电子邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥、IaC、恶意软件、容器扫描、EOL等。免费计划包含两名用户、10个代码库扫描、1个云账户、2个容器和1个域名
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API垃圾邮件过滤器。免费计划包含每个域名每天200次请求
  * [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式，目前处于测试阶段
  * [cloudsploit.com](https://cloudsploit.com/) — AWS安全性与合规性审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 面向云环境的开发者友好型安全平台，防止.NET和Java应用数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言的简易数据编解码分析工具，堪称密码学瑞士军刀。所有功能免费无限制，支持开源自托管
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略来防止配置错误
  * [Dependabot](https://dependabot.com/) 自动依赖项更新，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions
  * [DJ Checkup](https://djcheckup.com) — 自动化Django站点安全检测工具（基于Pony Checkup代码）
  * [Doppler](https://doppler.com/) — 支持同步到多云的通用密钥管理器，免费版支持5名用户及基础访问控制
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享.env文件，免费支持3人团队
  * [GitGuardian](https://www.gitguardian.com) — 自动检测并修复代码中的敏感信息，可扫描350+种密钥类型，25人以下团队免费
  * [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
  * [hostedscan.com](https://hostedscan.com) — 在线Web应用/服务器/网络漏洞扫描器，每月10次免费扫描
  * [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到第三方服务的全流程管理，5名开发者内免费
  * [Internet.nl](https://internet.nl) — 现代互联网标准测试（IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等）
  * [keychest.net](https://keychest.net) — 集成证书透明度数据库的SSL证书到期管理及购买平台
  * [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
  * [meterian.io](https://www.meterian.io/) — 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项漏洞，1个私有项目免费，开源项目不限量
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25用户+30天历史数据
  * [openapi.security](https://openapi.security/) — 无需注册的OpenAPI/Swagger API安全检测工具
  * [pixee.ai](https://pixee.ai) — 免费GitHub安全机器人，自动提交PR修复Java代码漏洞（即将支持更多语言）
  * [pyup.io](https://pyup.io) — Python依赖项漏洞监控及自动更新，1个私有项目免费，开源项目不限量
  * [qualys.com](https://www.qualys.com/community-edition) — Web应用漏洞扫描及OWASP风险审计
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) — 威胁情报API，可增强SIEM中的域名威胁指标检测，免费提供5万次查询[点击申请](https://account.seclookup.com/)
  * [snyk.io](https://snyk.io) — 开源项目无限次依赖项漏洞检测与修复，私有项目每月限200次检测
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析
  * [SOOS](https://soos.io) — 开源项目不限次SCA扫描，发布前检测修复安全威胁
  * [StackHawk](https://www.stackhawk.com/) 自动化应用安全扫描，单个应用支持不限次扫描和环境
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) — 免费网站安全检测与恶意软件扫描
  * [Protectumus](https://protectumus.com) — PHP网站免费安全检测、防病毒及WAF防火墙，注册用户可获邮件通知
  * [TestTLS.com](https://testtls.com) — SSL/TLS服务安全配置测试（不限于HTTPS）
  * [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，免费支持3名用户
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版支持每周XSS检测
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理，免费支持1个应用/月100万次加密
  * [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全解决方案，250用户内免费
  * [Vulert](https://vulert.com) — 无需安装即可持续监控开源依赖项漏洞，开源项目免费
  * [Escape GraphQL Quickscan](https://escape.tech/) — 一键式GraphQL端点安全扫描，免登录免费使用
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) — 免费检索2000万条GitHub公开仓库/代码片段/问题/评论中的密钥泄露记录

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名月活跃用户和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000名月活跃用户、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000名月活跃用户。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度权限控制，免费支持100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供预构建的登录/注册/用户资料等UI组件。免费支持10,000名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100名用户和一个领域。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥的认证方案。不限月活跃用户数永久免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500名月活跃用户和50个租户（其中5个支持SAML/SSO）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成到产品中。入门套件免费支持7,500名月活跃用户。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现双因素认证(2FA)，免费支持10名用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等任何应用实现无密码认证，仅需数分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100名月活跃用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持三个企业应用和五个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。开发者账户永久免费，包含所有安全功能、无限团队成员、200名日活跃用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于可扩展的微服务架构，提供实时更新和无代码策略UI。免费层包含1000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理服务。免费领域支持1000名用户和10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重建认证系统即可添加企业SSO。免费方案包含无限月活跃用户、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费方案包含10,000名月活跃用户、无限组织、5个SSO或SCIM连接以及1,000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，或选择包含1万免费月活跃用户的托管SaaS版本。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，在快速上手的同时保持对用户体验和开发体验的控制权。免费支持5000名月活跃用户。
* [Warrant](https://warrant.dev/) - 为企业级应用提供托管的授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度包含25,000次认证请求，所有安全功能无付费墙（OTP、无密码登录、策略等全功能开放）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可面向任意规模企业销售产品，免费支持200名用户和1万封事务邮件（带"Powered by PropelAuth"品牌水印）。
* [Logto](https://logto.io/) - 为产品开发、保护和管理用户身份——同时支持认证与授权。免费支持5,000名月活跃用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万名月活跃用户。提供邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您首选的移动应用测试平台，确保应用正常运行。免费版包含：1个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费版包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费版包含：5个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限量设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 用户友好型服务器管理与部署平台。免费套餐支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时通讯服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署。
  * [courier.com](https://www.courier.com/) — 统一推送、应用内消息、邮件、聊天、短信等多渠道消息API，含模板管理等功能。免费套餐包含每月10,000条消息。
  * [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件、推送、短信、产品导览、横幅等）。每月免费支持最多1,000名活跃用户。
  * [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，提供预构建的应用内收件箱和无代码模板编辑器。免费套餐含每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接至云原生物联网消息代理。永久免费支持100台设备连接（无需信用卡）。
  * [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用发送应用内、邮件、短信、Slack和推送等多渠道消息。免费套餐含每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫。
  * [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件、短信、站内信、应用内和推送等通信渠道的组件与API。免费套餐含每月30,000条通知（保留90天）。
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日200,000条消息。
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日100,000次事件。
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费支持4k消息大小、50个活跃连接和每月5GB数据。
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）。
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制，提供全功能托管Web UI或自定义UI包。[开发者免费层](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长。
  * [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送次数不限，含浏览器内消息功能。
  * [httpSMS](https://httpsms.com) - 使用Android手机作为短信网关收发短信。每月免费200条收发额度。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全无服务器MQTT代理。永久免费100万会话分钟/月（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完全掌控提醒内容。免费套餐：每日50条消息至1台设备1个应用。
  * [SuprSend](https://www.suprsend.com/) - 采用API优先的通知基础设施，通过单一接口实现事务性、定时和互动通知的多渠道交付。免费套餐含每月10,000条通知，支持摘要、批量、多通道、偏好设置、租户、广播等多样化工作流节点。
  * [SMSGate](https://sms-gate.app) - Android™短信网关，通过云路由实现设备间短信收发。完全免费的云服务（建议每日超10,000条用量时通知以维持服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 免费额度每日10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 免费额度每月5GB，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版含50GB存储，15天存储保留期和7天日志搜索
* [sumologic.com](https://www.sumologic.com/) — 免费额度每日500MB，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS/Android的远程调试/日志SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费无限制
* [Lecto](https://lecto.ai/) - 带免费层的机器翻译API（30次免费请求，每次请求1000字符）。与Wordpress插件Loco Translate集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费  
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，提供初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条源字符串），支持无限自托管部署
* [Free PO editor](https://pofile.net/free-po-editor) — 全员免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 免费24小时指标监控，APM代理限一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版保留1小时数据
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。团队和个人免费计划
* [Better Stack](https://betterstack.com/better-uptime) - 集成了可用性监控、事件管理、值班调度/告警和状态页面的产品。免费版包含10个监控项（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个可用性监控器，不限用户数、仪表板和告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费计划含1个用户、1万次API/网络检查和1500次浏览器检查
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描、用户数和存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查看URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与可用性监控。免费版含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控项，推荐注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个可用性监控器，5分钟检查间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化和报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者实时性能洞察。免费保留24小时数据
* [fivenines.io](https://fivenines.io/) — Linux服务器实时仪表板监控与告警 — 永久免费监控5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合的观测平台，集成指标与日志。免费版：3用户、10个仪表板、100条告警，Prometheus和Graphite指标存储（1万序列，14天保留），Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务和后台作业。免费支持20个检查项
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务和SaaS状态页聚合器 - 永久免费20个监控项和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费版
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅用户和团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费版支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费支持5个监控项
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（100页以内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 免费负载测试工具（功能受限）
* [Middleware.io](https://middleware.io/) - Middleware观测平台全面监控应用与技术栈。开发者社区永久免费版支持100万日志事件监控和2台主机的基础设施/APM监控
* [MonitorMonk](https://monitormonk.com) - 极简可用性监控与精美状态页。永久免费版支持10个网站/API端点的HTTPS、关键词、SSL和响应时间监控，提供2个仪表板/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标收集工具（GitHub可获取）
* [newrelic.com](https://www.newrelic.com) — 帮助工程师构建更完善软件的可观测平台。免费版每月100GB数据摄入、1个全权限用户和不限基础用户
* [nixstats.com](https://nixstats.com) - 免费监控1台服务器。支持邮件通知、公开状态页、60秒检查间隔等
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API可用性监控、定时任务监控和状态页。免费版含5个检查项（3分钟间隔），告警通过Slack、Discord和邮件发送
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中美服务器DNS结果和ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警与值班管理服务。免费支持5个用户
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，含告警、可视化功能和基础报表。免费支持100个传感器
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费版支持6个监控项（每日检查）
* [pagerly.io](https://pagerly.io/) - Slack值班管理（集成Pagerduty/OpsGenie）。免费支持1个团队
* [pageradar.io](https://pageradar.io/) — 监控核心网页指标、SEO变更和网站可用性。免费版含5个URL、每日核心指标监控、10个HTML/SEO变更监控、167国联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。免费支持5个用户
* [phare.io](https://phare.io/) - 可用性监控免费支持10万事件（不限项目和状态页）
* [pingbreak.com](https://pingbreak.com/) — 现代可用性监控服务。不限URL数量，通过Discord/Slack/邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个可用性监控器（10分钟间隔），支持SSH/HTTP/HTTPS和自定义TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费版含1个可定制公开状态页（SSL子域名）。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 永久免费10个监控器、6个月历史数据、不限状态页和自定义域名！无限邮件告警且无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，无限服务器，10个自定义指标，500,000个自定义指标数据点，无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台中的强大服务器监控，支持指标和日志，无需复杂设置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron和SSL监控，每类5个免费监控项
* [sitesure.net](https://sitesure.net) - 网站和Cron监控 - 2个免费监控项
* [skylight.io](https://www.skylight.io/) — 前100,000次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控。提供HTTP监控、基于浏览器的监控、DNS监控、域名监控、状态页面等。免费层包括10个HTTP监控、1个DNS监控和1个状态页面
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
* [Squadcast.com](https://squadcast.com) - Squadcast是端到端的事件管理软件，旨在帮助您推广SRE最佳实践。最多10名用户的永久免费计划
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页面监控，3个免费监控项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供警报和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个位置和20个主要Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个5分钟间隔的正常运行时间监控器和可自定义的状态页面（包括商业用途）。通过电子邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公共状态页面
* [zenduty.com](https://www.zenduty.com/) — 面向网络运营、站点可靠性工程和DevOps团队的端到端事件管理、警报、值班管理和响应编排平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控器，提供多种监控：Cronjob、关键词、网站、端口、Ping。25个正常运行时间检查，3分钟间隔检查免费。通过电话、短信、电子邮件和Webhook发送警报
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费，Linux和Windows服务器监控：5个免费，状态页面：1个免费 - 移动应用、多种通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 带截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费。
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控。开源项目可免费使用小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且易于自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，或自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备100台免费。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划每月5,000次错误，无限用户，30天数据保留。
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用。
* [Axiom](https://axiom.co/) — 存储0.5 TB日志，保留30天。包含Vercel等平台集成及带邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用一站式免费紧急开关。
* [Jam](https://jam.dev) - 开发者友好的一键错误报告。免费计划无限次提交。
* [Whitespace](https://whitespace.dev) – 浏览器内一键错误报告。个人使用免费计划无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松创建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月1,000名活跃用户以内免费，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费不限搜索次数，最多50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可完整克隆编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家主讲的免费短期课程，1小时内掌握最新生成式AI工具实操技巧
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 发布2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - HTML/CSS基础与进阶、JavaScript和SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程(React/Node.js/GraphQL/TypeScript)，支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所机构的4000+免费课程，涵盖计算机科学/工程/数据科学
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南，为用户文章提供免费dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click和Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 新闻简报服务。最多100名订阅者免费
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似bitly的短链接形式）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个您域名下的邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封邮件免费
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具（无需暴露凭证），免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系人历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户。完全免费的反事务性邮件服务（邮件永不实际投递）
* [临时邮箱](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，每次页面刷新都会更新地址。完全免费无任何收费
* [TempMailDetector](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator](https://www.fakemailgenerator.com/) - 德国临时邮箱生成器，支持10个域名，可创建无限地址（含广告但完全免费）
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务。免费创建无限域名邮箱（注意：使用.casa/.cf等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每天15封测试邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，支持收发邮件
* [Inboxes App](https://inboxesapp.com) — 每天创建3个临时邮箱（Chrome扩展程序），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱（邮件3天后自动删除），开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS设置（roundsphere.com提供的免费服务）
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API服务（REST API/SMTP集成），每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，120次请求/小时（约86400次/月）
* [Mailchimp](https://mailchimp.com/) — 500订阅者+1000封邮件/月免费
* [Maildroppa](https://maildroppa.com) - 100订阅者+无限邮件+自动化流程免费
* [MailerLite.com](https://www.mailerlite.com) — 1000订阅者/月+12000封邮件免费
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，事务性邮件每月3000封免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统（任意收件箱可用）
* [Mailjet](https://www.mailjet.com/) — 6000封邮件/月免费（每日200封限制）
* [Mailnesia](https://mailnesia.com) - 免费临时邮箱（自动访问注册链接）
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API（1500次/月限额）+公共邮件托管+外发捕获+邮件转Slack/Webhook
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器（免费版：1收件箱+100封邮件+无团队协作）
* [Mail7.io](https://www.mail7.io/) — QA开发者临时邮箱（支持Web界面/API即时创建）
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱（支持网站/RSS阅读邮件）
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID+1域名+1收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每天100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件+无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（端到端加密），1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API（免费10000封/月），异步发送+多SMTP服务器支持
* [QuickEmailVerification](https://quickemailverification.com) — 每日100次免费邮箱验证+DEA检测/DNS查询等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API（3000封/月+1自定义域名）
* [Sender](https://www.sender.net) 每月15000封邮件+2500订阅者免费
* [Sendpulse](https://sendpulse.com) — 每月500订阅者+15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名方案（免费5个别名+无限收发），教育工作者免费
* [Substack](https://substack.com) — 无限免费新闻简报服务（收费时开始支付）
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API（每日500封免费）

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费临时邮箱地址服务，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供包含免费方案的多项服务：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储空间
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制和5GB存储空间。捆绑提供Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛功能
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议和10名网络研讨会 attendees
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理工具
   - [Showtime](https://zoho.com/showtime) — 面向5人以下远程培训的会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，ZIP备份，RSS和Atom订阅，访问控制和自定义CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅和1用户免费，支付托管由Zoho完成。保留最后40条订阅记录
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面和最多50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。与[Assist](https://zoho.com/assist)集成，支持1名远程技术人员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每个频道100名用户和SSO支持
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排期
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队规模，提供卓越的技术支持且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求配额。
* [Flagsmith](https://flagsmith.com) - 安全发布功能：跨Web、移动端和服务端应用管理功能开关。可使用托管API、部署到私有云或本地化运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，功能开关和实验数量无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。免费版支持5名团队成员，功能开关和A/B测试数量无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试服务。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境且请求不限量。SDK、分析看板、发布日历、Slack通知等所有功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析的一站式平台。其免费版提供无限席位、功能开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关&A/B测试平台，支持代码化配置与全类型TypeScript SDK。深度集成Next.js和React等框架，提供慷慨的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 经过人工精选的商业用途免费字体库，以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接Google CDN可快速为网站添加多种免费字体
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的多样化可下载字体库
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，支持个人和商业用途
* [Befonts](https://befonts.com/) - 提供多款个人/商用的独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，包含中日韩(CJK)字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知和自动回复、Webhooks、Zapier集成、重定向、AJAX或POST等功能。免费版包含无限表单、每月20次提交（若显示Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。提供友好的现代GUI界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。提供基础用途的免费方案。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费使用，每月允许500次提交和可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版含无限表单、每月250次提交和客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB文件存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过UI将提交转发至邮件/Slack/Zapier。无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版支持无限表单和提交，含预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 秒级创建表单转邮件等功能，无需后端代码。个人账户免费提供每月50次表单提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站和每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版允许1个站点、1个表单和每月1,000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 使用专业工具创建表单和调查。含50+专家设计模板。免费账户限制1个活跃调查、100次回复/调查和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调查和用户行为分析工具。永久免费版支持500月活用户、无限回复和事件、多集成、导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版含每月50次提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义重定向/响应页、Telegram/Slack机器人及单次邮件通知。
* [Survicate](https://survicate.com/) — 一站式收集反馈并发送跟进调查。通过AI自动分析反馈。免费版含邮件/网站/产品内/移动端调查、AI调查生成器和25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可免费集成HTML表单。提交后表单内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费版含5个表单、每表单最多3个步骤和50次月回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版限制每表单10个字段和100次月回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版会对签署文件添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的联系表单，无需编写后端代码。免费版含无限表单、无限域名和每月250次提交。
* [WebAsk](https://webask.io) - 调查和表单构建器。免费版含3个调查/账户、100次月回复和每调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版限制每月100次提交。
* [formpost.app](https://formpost.app) - 免费无限次表单转邮件服务。可设置自定义重定向、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。不限表单数量和功能限制。免费版每月允许100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF，每PDF允许3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI功能的在线表单。免费版可收集100次回复，支持网站嵌入或链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调查工具。使用Qualli AI生成完美问题。免费版支持500月活用户，可创建无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调查收集反馈。免费版含1个活跃调查、每调查25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费层包括每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。用2行代码调用200+ LLM的统一格式。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 统一搜索，让您一次搜索所有应用。搜索助手让您利用自己的信息回答问题。免费计划提供无限统一搜索和每天5次Copilot查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理功能。此外，专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并可与任何可观测性客户端配合使用。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。凭借强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代他们的LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大语言模型（LLMs）在几分钟内提供定制商业智能解决方案。永久免费计划提供一个工作区，包含五个数据源连接，供一名用户使用，且分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。请注意，虽然这些模型可以免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，去除噪音和回声，同时保留自然的人声清晰度。完全免费：无限次一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs是由Cloudflare提供支持的免费开源CDN服务，被全球超过11%的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管流行的第三方JavaScript库（如jQuery），可轻松将其添加到Web应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不中断的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。通过全球缓存即时处理图片
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月1TB流量和100万次请求免费，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心节点，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划包含最多5个用户和每日1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用和30秒超时限制
* [appwrite](https://appwrite.io) - 免费版支持无限项目（含Websocket）和认证服务，每个项目包含1个数据库、3个存储桶和5个函数
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链，商业用途免费且项目数量不限
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台，内置A/B测试、内容分段和实时分析，适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目
* [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的JavaScript/TypeScript/WebAssembly分布式系统，免费版每日10万请求和每月100GiB数据传输
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务，免费版1GB存储和1GB月流量（限免费域名）
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架，含业余项目免费云托管
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务和数据库等，个人GitHub仓库开发者可享免费层（AWS费用另计）
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费实例（不休眠）和PostgreSQL数据库（2连接/10,000行/无备份）
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，免费计划含10万次服务调用/1万异步任务/10万Redis命令
* [pipedream.com](https://pipedream.com) - 开发者集成平台，[免费](https://docs.pipedream.com/pricing/)运行基于任意触发器的工作流代码，无需管理服务器
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管，免费版含1个your-username.pythonanywhere.com应用、512MB私有存储和1个MySQL数据库
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用，免费预览版每小时500次/每日2,500次/每月5万次调用（自定义域名需付费）
* [Koyeb](https://www.koyeb.com) - 支持全球部署的开发者友好无服务器平台，免费实例可部署至德国法兰克福或美国华盛顿（含512MB内存/2GB存储/0.1CPU），免费PostgreSQL数据库位于德/美/新加坡
* [Napkin](https://www.napkin.io/) - FaaS服务提供500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用PaaS服务，含免费MongoDB共享托管和自动SSL
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务、定时任务和托管数据库，免费版含2服务/2定时任务/1数据库
* [YepCode](https://yepcode.io) - 无服务器环境连接API和服务的全能平台，[免费版含1,000次yeps](https://yepcode.io/pricing/)
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，[免费计划](https://wundergraph.com/pricing)支持3项目/1GB出口流量/300分钟构建时长
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务和每月5美元额度
* [mogenius](https://mogenius.com) - 简化Kubernetes服务部署，免费版支持本地Kubernetes连接以创建类生产测试环境
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供每月100万次调用/100GB流量/10个定时任务（限非商业/学术用途）

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动和Web Baas，免费提供1GB文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建您的Python API，支持在线编辑器免费构建托管或本地使用您喜爱的工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档和资源，助力企业构建和部署数字化创新方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1,000名用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费：100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨的免费套餐。
* [Firebase](https://firebase.com) - 助您构建并运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等永久免费功能。
* [Flutter Flow](https://flutterflow.io) - 无需编写代码即可构建Flutter应用UI，集成Firebase。免费计划含完整UI构建器和模板。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、视频/音频及信息流功能。
* [hasura.io](https://hasura.io/) - 为现有数据库提供即时GraphQL API，支持Web/移动/数据集成。免费1GB/月数据传输。
* [nhost.io](https://nhost.io) - 为Web/移动应用提供的无服务器后端。免费套餐含PostgreSQL、GraphQL(Hasura)、认证、存储和函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件，含无限联系人和自动预热功能。
* [paraio.com](https://paraio.com) - 带灵活认证、全文搜索和缓存的后端API。单个应用免费，含1GB数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2,000订阅者内无限通知。
* [pusher.com](https://pusher.com/beams) - 2,000月活用户免费无限推送通知。统一API支持iOS/Android。
* [quickblox.com](https://quickblox.com/) - 即时通讯、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置含认证、数据、文件等服务的服务器，并通过管道组合转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用，通过Apex代码深度定制，企业级安全保障。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) - 实时跨平台数据同步，免费支持2,500用户/月的结构化数据传输存储。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，提供认证、实时数据库和对象存储的免费套餐。
* [tyk.io](https://tyk.io/) - 含认证、配额、监控的分析API管理。免费云服务。
* [zapier.com](https://zapier.com/) - 连接应用实现自动化。每15分钟5个Zap/100次月度任务。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务/15分钟更新/5个自动化流程/Webhook。
* [LeanCloud](https://leancloud.app/) - 移动后端。免费1GB存储/256MB实例/3K日API请求/10K日推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账户超过180天的用户提供$5/月免费额度，适合托管应用/数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。可与15+种数据库和任何API集成。
  * [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源的快速构建内部应用的低代码平台。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，可定制移动端和Web应用。提供拖拽式界面、离线支持、实时位置追踪等功能，并能与多种第三方服务集成。
  * [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理快速构建内部工具、自定义用户流程、数字体验、自动化流程、管理面板和运营应用的低代码平台，效率提升10倍。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含API完全访问权限、AI编程助手和每月10,000次执行额度。
  * [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5GB存储和1GB内存。免费层还允许使用Studio和Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) — 面向本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最多1GB数据库。
  * [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可扩展性。免费层支持每月最多5个用户、无限应用和API连接。
  * [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。使用AI生成、可视化编辑并通过代码扩展。集中管理集成、认证、权限和审计日志。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器创建应用。
  * [UI Bakery](https://uibakery.io) — 加速构建自定义Web应用的低代码平台。支持通过JavaScript、Python和SQL高度定制UI，提供云和自托管解决方案。免费支持最多5个用户。
  * [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。免费层支持1个用户和每月100万次工作流活动([德语版本](https://www.manubes.de))。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费虚拟主机，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可运行自定义 Web 服务器，支持 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机 + 免费短域名，支持 PHP、MySQL，提供应用安装器和邮件发送功能，无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费使用 + 开发者优先的部署和开发平台，最小化基础设施烦恼并加速项目搭建。
  * [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建网页和移动应用，免费版带 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) - 面向 Web3 前端的去中心化虚拟主机平台，专注于提升在线时间和安全性，并为用户提供额外的访问入口。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在 App Platform Starter 层级免费构建并部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到网页。仅限静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一款开发者桌面应用，用于本地托管站点并实时公开分享。通过其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费虚拟主机，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持以及许多其他免费主机未提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费托管服务，包括行业最佳的控制面板和 50+ 免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费虚拟主机，提供 Plesk 控制面板，支持 PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP 邮件，无限带宽，免费子域名，1000 MB 存储空间，可免费升级。
  * [Kinsta 静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，支持自定义域名和 SSL，每月 100 GB 带宽，260+ Cloudflare CDN 节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 支持 SFTP 文件上传下载的虚拟主机，提供 PHP 支持。
  * [Neocities](https://neocities.org) — 静态站点托管，1 GB 免费存储空间和 200 GB 带宽。
  * [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，提供 100 GB 数据和 100 GB/月带宽。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种格式的虚拟主机（静态站点托管、基于容器的托管、WordPress 及其他托管应用一键安装）。一个免费虚拟主机（静态或容器化）和一个免费数据库，100 GB 带宽和 300 构建分钟/月。
  * [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。开发者和机构免费使用。不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等功能。
  * [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，提供免费 SSL、全球 CDN、私有网络、Git 自动部署，以及完全免费的 Web 服务、数据库和静态网页计划。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 面向前端开发者的静态网页发布服务。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) 使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50 个页面，50 MB 存储空间，仅限 170+ 预定义主区块，不支持自定义字体、网站图标和域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN，每次 `git push` 生成唯一预览链接。完美支持 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注 SaaS 的网站构建工具 - 无限网站，70+ 区块，五种模板，支持自定义 CSS、网站图标、SEO 和表单。不支持自定义域名。
  * [Qoddi](https://qoddi.com) - 类似 Heroku 的 PaaS 服务，采用开发者中心的全功能方案。免费层级支持静态资源、预发布环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) - 社区支持的免费 Flarum 托管，最多支持 250 名用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) - 一个项目的免费托管，容器存活时间两周，每个项目 500 MB RAM，SFTP - 1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 易用的云平台，付费服务中包含三个静态站点的免费托管。
  * [Serv00.com](https://serv00.com/) — 3 GB 免费虚拟主机，每日备份（保留 7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），数据库支持：MySQL、PostgreSQL、MongoDB，语言支持：PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等。
  - [Sevalla](https://sevalla.com/) - 专为简化应用、数据库和静态网站部署与管理设计的托管平台 - 1GB 站点限制，100GB 免费带宽，600 免费构建分钟，每个账户 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析器，快速安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 含API的免费DNS服务，包含大量其他免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) — 免费DNS托管，支持1个域名50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务。免费版支持1个DNS区域（域名）和最多10条记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，免费版支持5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)及多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，并提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后从"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持三个域名，所有功能均有合理限制。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS，域名数量无限制。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册的免费动态DNS服务，无跟踪、日志或广告，域名数量不限。
* [noip](https://www.noip.com/) — 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，查询含IP地址的主机名时返回该IP地址。
* [zilore.com](https://zilore.com/en/dns) — 免费DNS托管，支持5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份和DNS变更监控，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费DNS托管，支持最多3个域名和DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
* [LocalCert](https://localcert.net) - 免费`.localcert.net`子域名，兼容公共CA，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地上传并存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。无限期免费提供10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1 CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求的免费方案
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2 CPU、2 GiB内存、8 GiB存储，每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，支持20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代从物联网到AI的应用程序而设计
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512 MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务，免费层支持25MB内存、1个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的类电子表格灵活数据库，免费层含无限表格、2,000行数据、1个月版本历史和最多25名团队成员
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库强大功能及与常用商业应用内置集成的工具。免费方案包含无限用户、10个工作区和每个工作区2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验方案。永久免费入门计划提供9GB总存储、最多500个数据库、3个部署位置、每月10亿行读取量及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务，提供模式定义、关系管理、自动REST API（支持类MongoDB查询）和多用户数据管理界面。免费方案允许3个用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。免费层限制图规模（5万节点/17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，免费层含0.5GB总存储、1个项目、10个分支、无限数据库、主分支永久可用（非活跃5分钟后暂停）、非主分支计算每月20小时活跃时长。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管PostgreSQL，免费层含1GB存储、10个数据库，与Prisma ORM深度集成。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。免费层限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入，可将SQL查询发布为托管HTTP API。免费层无时间限制，含10GB存储和每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2 vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库最大10MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
* [xata.io](https://xata.io) - Xata是内置强大搜索与分析功能的无服务器数据库，提供单一API、多类型安全客户端库，并优化开发工作流。永久免费层满足业余开发者需求，包含3个Xata单位（具体定义参见官网）。
* [8base.com](https://www.8base.com/) - 8base是基于MySQL和GraphQL构建的全栈低代码开发平台，为JavaScript开发者提供无服务器后端即服务。通过UI应用构建器快速开发Web应用并轻松扩展，免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算资源和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 专为B2B应用打造的PostgreSQL平台。免费层包含：无限数据库、永久可用不休眠、1GB总存储、5,000万查询令牌、自动扩展和无限向量嵌入。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由工具

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi托管VPN服务，免费方案支持最多5人参与的无限网络，可安全扩展类LAN网络至分布式团队。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务暴露为公共URL。提供免费托管版本及[开源代码](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装或注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台计算机形成类LAN网络。不限节点数（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，可将事件转译并路由至第三方服务。免费10万事件/月。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发及代理所有Webhook至公共或内部（如localhost）目标。通过隧道获取公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）暴露私有网络中的服务器。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。免费方案包含10万请求/月和10万尝试/月，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端组成的端到端加密网络，提供桌面/移动/NA客户端；通过网页界面配置自定义路由规则及审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将localhost服务器暴露至互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布为公共自定义URL，并通过访问控制保障安全。免费支持单个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础身份验证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目发布平台。免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。最多3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内部网和项目管理工具。免费版提供5GB空间支持无限用户
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具：流程图、UML、网络图。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 基于团队的规划扑克工具，节省冲刺估算时间。免费支持5个用户，提供免费Jira集成、无限视频通话、无限团队和无限会话
* [clickup.com](https://clickup.com/) — 项目管理工具。免费版含云存储，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 时间追踪和工时表应用，可跨项目跟踪工作时间。无限用户永久免费
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，专为AWS优化并支持实时数据显示。免费版允许单个用户创建无限私有图表
* [Codegiant](https://codegiant.io) — 集代码托管和CI/CD于一体的项目管理平台。免费版提供无限仓库、项目和文档，支持5名团队成员。每月500分钟CI/CD时长和30000分钟无服务器代码运行时长，1GB仓库存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian的知识协作工具，帮助团队高效协作共享知识。免费版支持最多10个用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费入门计划包含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目、无限用户和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 在线图表工具，支持本地存储到Google Drive、OneDrive或Dropbox。所有功能和存储级别完全免费
* [freedcamp.com](https://freedcamp.com/) - 任务、讨论、里程碑、时间跟踪、日历、文件和密码管理。免费版提供无限项目、用户和文件存储
* [easyretro.io](https://www.easyretro.io/) — 简单直观的冲刺回顾工具。免费版每月提供3个公共看板和每个看板1次调查
* [GForge](https://gforge.com) — 面向复杂项目的项目管理和问题跟踪工具集，提供自托管和SaaS选项。SaaS免费版前5个用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 面向开发者的免费描述转图表工具。通过关键词创建非正式UML类图、对象图或实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL检查器可输出两个GraphQL模式间的变更列表，精确标记并说明每个破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — 基于GitHub问题的即时项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台。免费版提供无限用户、项目和看板，100MB存储空间
* [Instabug](https://instabug.com) — 全面的移动应用错误报告和反馈SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — 收集iOS/macOS应用内用户反馈并按投票优先级排序功能。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 支持多视角和多层级查看的交互式图表工具。图表可通过代码表达。免费版提供无限私有图表，最多3名查看者
* [Jira](https://www.atlassian.com/software/jira) — 高级软件开发项目管理工具，广泛应用于企业环境。免费版支持最多10个用户
* [kanbanflow.com](https://kanbanflow.com/) — 基于看板的项目管理工具。提供功能更丰富的付费版本
* [kanbantool.com](https://kanbantool.com/) — 基于看板的项目管理工具。免费版提供2个看板和2个用户，不支持附件和文件
* [kan.bn](https://kan.bn/) - 强大的灵活看板应用，帮助您组织工作、跟踪进度并交付成果。免费版支持1个用户创建无限看板、列表和卡片
* [Kitemaker.co](https://kitemaker.co) - 贯穿产品开发全流程的协作工具，支持Slack、Discord、Figma和Github工作追踪。无限用户和空间。免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 帮助任何人组织求职过程，跟踪面试、机会和人脉。提供强大的网页应用和Chrome扩展，完全免费
* [Kumu.io](https://kumu.io/) — 支持动画、装饰、过滤器、聚类、电子表格导入等功能的关系图工具。免费版允许创建无限公开项目，图表大小不限。为学生提供免费私有项目。沙盒模式可供不愿公开文件的用户使用（上传、编辑、下载、删除）
* [Linear](https://linear.app/) — 界面简洁的问题跟踪工具。免费版支持无限成员，单个文件上传不超过10MB，250个问题（归档除外）
* [leiga.com](https://www.leiga.com/) — 利用AI自动管理项目的SaaS产品，帮助团队保持专注并释放潜力。免费版支持10个用户、20个自定义字段、2GB存储空间，AI视频录制限5分钟/视频，自动化执行20次/用户/月
* [Lucidchart](https://www.lucidchart.com/) - 在线图表工具，支持协作功能。免费版提供3个可编辑文档、100个专业模板和基础协作功能
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具。免费版支持3个项目且项目成员不限
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，支持团队协作、计划、分析和管理日常任务。基础版永久免费，提供100MB存储空间和5个用户/团队，支持无限工作区、会议、任务分配、时间表和问题跟踪
* [Ora](https://ora.pm/) - 敏捷任务管理和团队协作工具。免费版支持最多3个用户，文件限制为10MB
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 无限公开项目和2个私有项目免费，包含3个活跃用户（读写权限）和无限被动用户（只读权限）
* [plan.io](https://plan.io/) — 含代码托管等功能的项目管理工具。免费版支持2个用户、10个客户和500MB存储空间
* [Plane](https://plane.so/) - 简单、可扩展的开源项目和产品管理工具。免费版支持无限成员，单个文件不超过5MB，1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线规划扑克（估算工具）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版支持无限任务/迭代/工作区且无用户数量限制
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，从看板到Scrum支持各类流程，免费版支持无限用户（最多1,000个数据实体）{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具，免费版包含1个工作区（无限任务/项目）、1GB存储、1周历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾会议/迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目
* [teleretro.com](https://www.teleretro.com/) — 趣味回顾会议工具（含破冰表情包），免费版支持3次会议记录且成员不限
* [testlio.com](https://testlio.com/) — 问题追踪与测试管理平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每图最多4个层级
* [todoist.com](https://todoist.com/) — 协同任务管理工具，免费版支持：5个活跃项目/每项目5人协作/5MB文件上传/3个筛选器/1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版含无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计协作平台（含项目/VCS/问题追踪），免费版支持无限项目/协作者和3GB存储
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具，最多3名用户免费（项目不限）
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），开源项目及私有项目均可使用（3人以下免费），含时间追踪和敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内集成的项目管理方案，公开仓库/非营利组织/开源项目免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，5人以下团队免费（含5GB附件）
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（专为自由职业者设计，免费版含无限记录/项目/客户/标签/报告等功能）；[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版支持无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷开发/营销/客服及外包协作设计的项目管理工具，免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简时间追踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件主机](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。免费提供10GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时图像优化和调整大小。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化和CDN服务。提供多种图像调整、压缩和水印功能。开源插件支持响应式图像、360度图像制作和图像编辑。免费月套餐包含25GB CDN流量、25GB缓存存储和无限转换。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图像上传、强大处理、存储和交付服务，支持Ruby、Python、Java、PHP、Objective-C等多种语言库。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持最大1GB文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图像、音频、视频等。
* [GoFile.io](https://gofile.io/) - 免费文件共享和存储平台，支持网页界面和API。无限文件大小、带宽和下载次数，但文件十天无下载将自动删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图像视频托管、处理和流媒体服务。免费套餐包含250GB/月视频流量和30GB/月图像流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图像图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图像的友好机器人，可在不损失质量的情况下减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限图像托管服务。拖放图像至任意位置（单图限32MB）。获取直链、BBCode和HTML缩略图。登录可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印
* [imgix](https://www.imgix.com/) - 图像缓存、管理和CDN服务。免费套餐包含1000个原始图像、无限转换和100GB带宽
* [kraken.io](https://kraken.io/) — 网站性能图像优化服务，免费支持最大1MB文件
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费套餐支持100个键（1KB/键）、100次调用/小时
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 通过完整前端优化（缓存、图像和代码优化、CDN）自动加速网站。免费支持5000次页面浏览/月
* [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动所有云存储文件。基础套餐提供无限文件传输（单文件最大250MB）和5个加密文件
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供有限免费套餐，开源项目可通过申请获取计划
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目、黑客松和移动应用的简易JSON数据存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理方案。提供友好界面和API，免费套餐包含1GB存储和API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪图片作为占位符的服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费套餐包含无限公开文件和10个私有文件
* [podio.com](https://podio.com/) — 最多5人团队可使用基础版功能（用户管理除外）
* [QRME.SH](https://qrme.sh) - 快速批量生成美观QR码——无需登录/无水印/无广告。每次批量导出最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表和QR码
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持最多2个用户
* [resmush.it](https://resmush.it) — 免费图像优化API，已集成至WordPress/Drupal/Magento等主流CMS，累计处理超70亿张图像仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成与编辑API。免费套餐每月可渲染20分钟视频
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图像压缩API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 处理文件上传及视频/音频/图像/文档编码。开源项目/慈善机构/学生通过GitHub学生开发者包免费，商业应用可免费试用2GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图像即服务。提供图像CDN、媒体处理API和自动化优化的前端库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理终极工具包。开发者可免费使用所有功能：文件上传API/UI、图像CDN、自适应交付和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图像CDN，提供自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即获永久免费10GB空间！
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间（支持三台设备），推荐用户可获5GB奖励（90天账户不活跃将失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一个易于使用的全球图片 CDN。60 秒内即可完成设置。支持 AVIF 和 JPEGXL，提供 WordPress、Magento、React、Vue 等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于 GPT 的 AI 处理工具，可将 PDF、图片转换为 JSON、CSV、EXCEL 格式的结构化数据。每月免费赠送 30 次额度。
  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...
  * [LibreQR](https://libreqr.com) — 注重隐私且无追踪的免费二维码生成器。完全免费使用，不收集任何数据。
  * [Doradrop](https://doradrop.com) — Doradrop 是一个无广告且存储空间无限的文件分享平台。无需登录即可通过安全链接即时分享文件。


**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代响应式网站，设计精美，非设计师也能轻松上手
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载模板代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发者和设计师协作打造的全功能编码平台，免费版支持3名编辑人员共同维护1个设计系统，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 创建社交媒体轮播图的免费在线工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标集，提供React/Vue/Svelte适用的SVG格式
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具，包含视频和GIF转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK转潘通色](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者，最多2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/场景授权）
* [Gradientos](https://www.gradientos.app) - 快速轻松选择渐变方案
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站最高分辨率favicon
* [Iconoir](https://iconoir.com) – 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源（需标注来源）
* [landen.co](https://www.landen.co) — 无代码建站工具，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 免费时尚占位图生成器，URL后添加尺寸即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，提供Android/iOS/Web动画工具和插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 创建逼真的T恤服装模型（40个免费模板）
* [Modeldraw.com](https://modeldraw.com) — 全功能图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 浏览器端快速矢量编辑器（完全免费）
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 网页端开源设计原型工具，支持SVG（完全免费）
* [pexels.com](https://www.pexels.com/) - 免版税商用图库，提供按关键词搜索的免费API
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，兼容PSD/XCF/Sketch格式（界面类似Photoshop）
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具，支持响应式页面/复杂组件开发（可代码扩展）
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像（支持URL直链）
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器端直接转换（无需上传，完全客户端处理保障隐私）
* [Proto.io](https://www.proto.io) - 无需编码的交互式UI原型工具，免费版包含1用户/1项目/5原型/100MB存储
* [resizeappicon.com](https://resizeappicon.com/) — 简易应用图标尺寸调整服务
* [Rive](https://rive.app) — 创建并发布精美动画（个人用户永久免费），提供多平台运行环境
* [storyset.com](https://storyset.com/) — 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) — 产品模型生成工具（200个免费模板）

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui的优雅主题，实时自定义颜色、排版等参数
* [UI头像生成器](https://ui-avatars.com/) - 根据姓名首字母生成头像链接，支持URL参数配置
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可免授权自由使用
* [Unsplash图库](https://unsplash.com/) - 商用/非商用免费图库（无限制许可）
* [Vectr设计工具](https://vectr.com/) — 网页/桌面端免费矢量设计应用
* [WalkMe引导平台](https://www.walkme.com/) — 企业级用户引导系统，免费版支持3个5步骤导览
* [Webflow建站工具](https://webflow.com) - 带动画效果的所见即所得建站平台，免费支持2个项目
* [Updrafts拖拽建站](https://updrafts.app) - TailwindCSS可视化建站工具，非商业用途免费
* [Whimsical协作白板](https://whimsical.com/) - 流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin设计协作平台](https://zeplin.io/) — 设计稿/资源/样式指南共享平台，免费支持1个项目
* [Pixelixe图形编辑器](https://pixelixe.com/) — 在线创建独特视觉内容
* [Responsively响应式开发工具](https://responsively.app) - 免费高效的响应式网页调试工具
* [SceneLab模板编辑器](https://scenelab.io) - 带丰富免费模板的在线样机设计工具
* [xLayers设计转换器](https://xlayers.dev) - Sketch设计稿转Angular/React/Vue等框架的开源工具
* [Grapedrop页面生成器](https://grapedrop.com/) — 基于GrapesJS的SEO优化建站工具，前5页免费
* [Mastershot视频编辑器](https://mastershot.app) - 无浮水印的浏览器视频编辑工具，支持1080P导出
* [Unicorn落地页工具](https://unicornplatform.com/) - 带托管的简易建站工具，免费1个网站
* [SVGmix矢量图库](https://www.svgmix.com/) - 30万+免费SVG图标/品牌LOGO库，内置简易编辑器
* [SVGRepo矢量资源库](https://www.svgrepo.com/) - 可商用免费SVG矢量资源搜索引擎
* [Haikei背景生成器](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva设计工具](https://canva.com) - 免费在线视觉内容创作平台
* [Superdesigner设计工具集](https://superdesigner.co) - 一键生成背景/图案/形状的免费工具合集
* [TeleportHQ低代码平台](https://teleporthq.io/) - 无头建站协作平台，免费3个项目+代码导出
* [VectorExpress格式转换](https://vector.express) — 支持AI/CDR/DWG等矢量格式互转
* [Vertopal文件转换](https://www.vertopal.com) - JPG转SVG等开发者文件格式转换平台
* [Okso绘图板](https://okso.app) - 极简网页素描工具，支持PNG/JPG/SVG导出
* [Wdrfree黑白SVG素材](https://wdrfree.com/free-svg) - 免费黑白SVG切割文件库
* [Lucide图标工具包](https://lucide.dev) - 免费可定制SVG图标库
* [Logo.dev品牌API](https://www.logo.dev) - 4400万+品牌LOGO查询API，前1万次调用免费
* [MDBootstrap组件库](https://mdbootstrap.com/) - Bootstrap/Angular/React/Vue免费UI套件
* [TW Elements组件库](https://tw-elements.com/) - TailwindCSS版Bootstrap组件库
* [DaisyUI组件库](https://daisyui.com/) - 精简TailwindCSS类名的UI组件库
* [Scrollbar滚动条设计](https://scrollbar.app) - 网页滚动条样式设计工具
* [CSS毛玻璃生成器](https://css.glass/) - 玻璃拟态CSS代码生成工具
* [Hypercolor渐变色库](https://hypercolor.dev/) - TailwindCSS渐变色库与生成器
* [Iconify图标集](https://icon-sets.iconify.design/) - 100+图标库统一搜索平台
* [NextUI组件库](https://nextui.org/) - 现代React/Next.js免费UI库
* [Glyphs图标系统](https://glyphs.fyi/) - 开源可编辑图标设计系统
* [ShadcnUI组件库](https://ui.shadcn.com/) - 可复制粘贴的优雅开源组件
* [HyperUI组件库](https://www.hyperui.dev/) - 开源TailwindCSS组件
* [日历图标生成器](https://calendariconsgenerator.app/) - 一键生成全年日期图标
* [图片背景模糊器](https://imagebgblurer.com/) - 为Notion等工具生成模糊背景框
* [Webstudio开源建站](https://webstudio.is/) - Webflow替代方案，免费版支持5个自定义域名
* [Nappy人物图库](https://nappy.co/) - 黑人/棕色人种专业摄影图库
* [Tailkits资源合集](https://tailkits.com/) - Tailwind模板/组件/代码生成器大全
* [Tailcolors色板工具](https://tailcolors.com/) - TailwindCSS v4调色板生成器
* [Excalidraw绘图工具](https://excalidraw.com/) - 免费在线绘图白板工具
* [Lunacy设计工具](https://icons8.com/lunacy) - 内置素材的离线图形设计工具
* [Flows用户引导平台](https://flows.sh/) - 产品引导系统，免费支持250月活用户

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目类别筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常并非来自真实应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选的最精美的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 标记和可搜索的优秀网页应用程序设计参考集合。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 为Web、桌面和移动端提供地图API与SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能。每月免费额度包括：200万次底图瓦片加载、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算以及5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容推送
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示服务，提供地理空间服务与SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与SDK，支持地图可视化。免费矢量瓦片每周更新，提供四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索与反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap及其他开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途及测试每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP运行环境，支持300+个PHP版本执行代码片段
* [Android Studio](https://developer.android.com/studio) — 官方Android开发IDE，提供跨平台支持（Windows/Mac/Linux/ChromeOS），开源免费且包含最快速的安卓应用构建工具
* [AndroidIDE](https://m.androidide.com/) — 基于Android设备的开源IDE，支持Gradle构建的真实应用开发
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境、工具平台及应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户及托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台知名可扩展文本编辑器，免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)并支持升级高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用，由Oracle支持并提供简易GUI界面
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器，高度可定制
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理器，具备标签分类功能
* [Code::Blocks](https://codeblocks.org) — 免费开源的Fortran/C/C++ IDE，支持Windows/macOS/Linux
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持代码编写（代码块/自动补全/单元测试）、代码理解、问题修复及代码搜索，适用于VS Code/JetBrains/在线环境
* [codiga.io](https://codiga.io/) — 支持在IDE内直接搜索、定义和复用代码片段的编程助手，个人和小型团队免费
* [codesnip.com.br](https://codesnip.com.br) — 带分类/搜索/标签功能的简易代码片段管理器，完全免费无限制
* [cocalc.com](https://cocalc.com/) — （原SageMathCloud）云端协作计算平台，提供完整Ubuntu环境及预装数学/科学/数据科学软件（Python/LaTeX/Jupyter Notebooks/SageMath/scikitlearn等）
* [code.cs50.io](https://code.cs50.io/) - CS50课程专用的Visual Studio Code网页版，基于GitHub Codespaces适配
* [codepen.io](https://codepen.io/) — 前端开发者的在线游乐场
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular/Preact等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 独立开发可视化Web组件，支持故事化测试并发布至npm
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，开源社区驱动，Red Hat提供[在线实例](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据，加速产品原型开发
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4/Grok/Deepseek/Gemini等AI模型的编程助手，原生集成CLI和各类IDE，免费版包含基础AI模型本地处理能力
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE侧边栏工具，免费版每日提供5个虚拟机额度
* [GitPod](https://www.gitpod.io) — GitHub项目的即时开发环境，免费版每月50小时额度
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持多语言/Linux容器/端口转发/实时协作/Git管理，免费版提供1GB内存和10GB存储（最多5个容器）
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费版REST API每日200次调用额度
* [jetbrains.com](https://jetbrains.com/products.html) — 知名开发工具套件（含[IntelliJ IDEA](https://www.jetbrains.com/idea/)/[PyCharm](https://www.jetbrains.com/pycharm/)等），学生/教师/开源团队可申请免费授权
* [jsbin.com](https://jsbin.com) — 前端开发游乐场（HTML/CSS/JavaScript），同时支持Markdown/Jade/Sass
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API接口，源码可本地部署
* [Lazarus](https://www.lazarus-ide.org/) — 跨平台Delphi兼容的快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 基于AI的免费云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务，用于生成虚假JSON数据
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式的测试数据，支持后端API模拟
* [Mocklets](https://mocklets.com) - HTTP协议API模拟器，终身免费版支持加速并行开发和全面测试
* [Paiza](https://paiza.cloud/en/) — 无需配置的浏览器开发环境，免费版提供24小时有效期的服务器（每日4小时运行时间，2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 实时编译Sass/Less/Stylus/Pug等预处理语言，支持浏览器热重载，可自定义工具链
* [Replit](https://replit.com/) — 支持多语言的云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程平台，支持多种语言（运行代码无需注册），同时提供免费编程课程
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发IDE，支持主流NodeJs框架，快捷创建链接：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新定义并优化的代码编辑器。由Microsoft开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面、Web和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/跟踪、自由许可的Microsoft编辑器VSCode二进制发行版。
  * [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化你的编码活动，提供免费有限计划。
  * [Wave Terminal](https://waveterm.dev/) - Wave是一款开源、跨平台的终端工具，支持无缝工作流。可内联渲染任何内容，保存会话和历史记录。基于开放Web标准，支持MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板，可隔离式编写Web组件，包含故事和测试功能。
  * [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
  * [WebDB](https://webdb.app) - 免费高效的数据库IDE。功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等。
  * [Zed](https://zed.dev/) - Zed是一款高性能、多人协作代码编辑器，由Atom和Tree-sitter的创作者开发。
  * [OneCompiler](https://onecompiler.com/) - 免费在线编译器，支持70多种语言，包括Java、Python、C++、JavaScript。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - Google Analytics替代方案，提供热力图、会话录制和收入追踪功能
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史仪表板（突破14天限制）。免费版支持监控单个仓库流量
* [Dwh.dev](https://dwh.dev) - Snowflake数据云可观测性解决方案（个人使用免费）
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将客户数据从数据仓库同步到CRM/营销/支持工具。免费版支持同步到1个目标平台
* [Avo](https://avo.app/) - 简化分析发布流程。提供统一跟踪计划、类型安全分析库、应用内调试器和数据可观测性。免费版支持2名工作区成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费版支持10,000移动应用用户（含深度链接等服务）
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。免费版支持从数据仓库同步10个字段到60+个SaaS平台
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持单个网站3,000次浏览分析
* [Databox](https://databox.com) - 整合多平台数据的商业洞察工具。免费版支持3用户/仪表板/数据源，1,100万历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2,000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万次事件（最多2个应用）
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台（非商业用途免费），支持无限网站/6个月数据保留/每月10万页面浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私保护型Google Analytics替代方案。免费版支持每月100万页面浏览（无需信用卡）
* [Expensify](https://www.expensify.com/) - 费用报告工具（免费个人审批工作流）
* [getinsights.io](https://getinsights.io) - 隐私优先的无Cookie分析工具（每月3,000次事件免费）
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为（每月10,000次会话免费）
* [Hotjar](https://hotjar.com) - 网站分析与报告工具。免费版包含每日2,000页面浏览/100张快照（最多存储300张）/3张热图可保存365天/无限团队成员
* [Keen](https://keen.io/) - 自定义数据分析平台（每月1,000次事件免费）
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务（完全免费）
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析工具
* [Mixpanel](https://mixpanel.com/) - 每月追踪10万用户（无限数据历史/席位，可选欧美数据中心）
* [Moesif](https://www.moesif.com) - REST/GraphQL API分析工具（每月50万次API调用免费）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案（免费基础版支持1网站+1iOS应用+1Android应用）
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具（免费版限制100万用户许可证）
* [Row Zero](https://rowzero.io) - 极速连接型电子表格工具（永久免费3个工作簿）
* [sematext.com](https://sematext.com/cloud/) - 每月5万次操作免费（1天数据保留/无限仪表板/用户等）
* [Similar Web](https://similarweb.com) - 网站与移动应用分析（免费版提供5个指标结果/1个月移动数据/3个月网站数据）
* [StatCounter](https://statcounter.com/) - 网站访问分析（免费版分析最近500位访客）
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试平台（每月100万次计量事件免费）
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者计划（提供个人开发沙盒许可证）
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型测试工具（单用户免费/无限测试）
* [woopra.com](https://www.woopra.com/) - 用户行为分析平台（50万次动作免费/90天数据保留/30+一键集成）
* [counter.dev](https://counter.dev) - 简约隐私友好的网站分析（免费或捐赠模式）
* [PostHog](https://posthog.com) - 完整产品分析套件（每月100万次追踪事件免费+250次应用内调查回复）
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（开源项目可申请个人订阅）
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为记录工具
* [Beampipe.io](https://beampipe.io) - 简约隐私优先的网站分析（5个域名/每月1万页面浏览免费）
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析（每月2万次事件免费）
* [Trackingplan](https://www.trackingplan.com/) - 数字分析问题自动检测工具
* [LogSpot](https://logspot.io) - 统一网站与产品分析平台（每月1万次事件免费）
* [Umami](https://umami.is/) - 简约快速的Google Analytics开源替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私保护分析工具（3个域名免费/每个域名600次会话回放）
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具（每月1万次事件免费+产品日志+每周洞察）

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站和产品分析工具。免费版每月包含3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无需使用Cookie，操作体验提升10倍。免费版每月提供3,000次事件追踪。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，附带开发者工具用于错误复现，实时会话支持，以及产品分析套件。每月1,000次会话，可访问所有功能，7天数据保留。
* [LogRocket.com](https://www.logrockocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，一个月数据保留和三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 每月2,500次会话免费，适用于一个网站
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 每月500次会话免费，适用于一个网站
* [mousestats.com](https://www.mousestats.com/) — 每月100次会话免费，适用于一个网站
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月10,000美元以下跟踪收入免费。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价（购买力平价），助您拓展全球业务。免费计划包含每月7,500次API请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月10,000美元以下收入免费。
  * [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，支持移动端应用内订阅集成至iOS、Android、React Native、Flutter、Unity或网页应用。每月10,000美元以下收入免费。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密/法币汇率。免费层每月10,000次API调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月1,000次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
  * [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率，支持JSON和XML格式。免费层每月1,250次API请求。
  * [currencylayer](https://currencylayer.com/) — 可靠的企业级汇率与货币转换服务，免费每月100次API请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费层每日更新一次，每月1,500次请求限额。
  * [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费微型计划每月500次查询。
  * [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费层需标注来源。
  * [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现，可连接Stripe、Chargebee等平台。免费层每月30,000次事件。
  * [Nami ML](https://www.namiml.com/) - 完整的iOS/Android应用内购与订阅平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
  * [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购与订阅后端（iOS/Android）。每月2,500美元以下跟踪收入免费。
  * [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费每月100次请求。
  * [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。私人用途每月300次请求，每分钟10次请求限制。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。Vagrant box 托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和建站工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的零障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中建立活跃社区
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可用 GitHub issues 实现博客评论、维基页面等功能！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万网站使用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随您支付"模式，提供"单个管理员可完全控制少数域名的外观和行为"服务
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕捉时间及视窗尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图服务。每日250次免费请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 可高度定制化捕捉任何网站的截图。每月100次免费快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照，支持png、gif和jpg格式，包括整页截图而不仅是首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染。免费层每日500页。自2017年起提供免费层。
  * [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月100次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是一个全托管式移动应用 CI/CD 平台。您可以通过图形化界面工具进行构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的拖拽式界面工具，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) — 一个极快的x86虚拟机，能够运行Linux和Windows 2000。
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个支持网络的OpenRISC虚拟机，能够运行Linux。
* [v86](https://copy.sh/v86) — 一个x86虚拟机，可直接在浏览器中运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理与合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计与同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版提供大部分功能但限制访问者数量。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSAR）和数据映射功能。免费版包含核心同意管理功能，并为经过验证的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台。免费开发者计划包含5台设备、免费云存储和数据存储。提供移动应用支持
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环触发webhook服务。免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，提供无限免费任务
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月5次预约，包含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名跳转工具，免费支持5个域名和20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除/分析图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞检测平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加无忧webhook支持：自带队列、指数退避重试和日志。免费版每日100次投递，14天留存，3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN、ISP、地理位置等主机信息，含多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 接收GitHub/GitLab/NPM等平台新版本通知，支持邮件/Slack/Telegram/Discord/webhook
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看照片EXIF数据（含GPS定位信息）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。每月免费300份
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全代码模型
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成器
* [ray.so](https://ray.so/) - 为代码片段生成艺术化图片
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档工具
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的重定向管理服务，免费版含10个源和10万次月访问
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具，支持GET/POST/PUT等方法和Token认证，含基础请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电量/里程/门锁控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉创作平台，免费版支持3个同时编辑的快照和5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub订阅服务，免费版功能有限
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具，免费版每份问卷限10个问题和100份回复
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台，从网站到WhatsApp的无缝对接
* [UUID生成器](https://newuuid.com/) - 企业级UUID/GUID/CUID/NanoID/ULID生成工具
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅，免费支持3个订阅源
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具箱：编解码与数据处理工具集

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日免费2次会话）
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
* [ArtStation](https://www.artstation.com/) - 2D/3D资源交易市场，兼作艺术作品集展示平台
* [Rive](https://rive.app/community/) - 社区资源库，支持免费计划创建自定义游戏素材
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) - 8000+免费/付费3D模型及PBR材质库
* [Kenney](https://www.kenney.nl/assets/) - CC0 1.0通用许可的2D/3D/音频/UI资源
* [Poliigon](https://www.poliigon.com/) - 多分辨率纹理库，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) - 采用不同CC协议的协作式免费音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优质的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)整理的自由开源软件及SaaS列表
* [github.com — 开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）自动续期
* [Pyrexp正则测试器](https://pythonium.net/regex) — 免费网页版正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专享红帽产品（RHEL/OpenShift/CodeReady等）免费访问权限（仅限个人计划），另提供免费电子书资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — DigitalOcean/AWS/LightSail/Hetzner/Exoscale备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题与UI套件，加速应用开发
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev工具集](https://smalldev.tools/) — 开发者多功能工具：编解码/代码压缩美化/生成测试数据等，界面友好
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门方案，支持100MB文件上传
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可商用按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集（水印生成/屏幕录制/编解码/加解密/代码格式化等），完全免费不上传云端
* [IT工具集](it-tools.tech) - 开发者与IT从业者实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费高效工具集：Markdown编辑器/代码压缩美化/二维码生成/OpenGraph生成器等
* [正则101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换器等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs等）
* [Glob模式测试器](https://globster.xyz/) — 可视化Glob模式设计与测试平台
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库还原
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（实时音频/YouTube视频/字幕生成），适合短视频处理
* [最佳二维码](https://qrcode.best/) - 13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 免费版每月可手动发布1篇SEO优化文章到专属域名
* [PageTools](https://pagetools.co/) - 永久免费AI工具集：一键生成网站政策/社交媒体资料/网页内容
* [MySQL可视化Explain](https://mysqlexplain.com) - 免费慢查询优化可视化工具
* [Killer Coda](https://killercoda.com/)  - 浏览器交互式学习平台（Linux/Kubernetes/DevOps等）
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具（每月10张额度）
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**