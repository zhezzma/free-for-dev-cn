# free-for.dev

开发者与开源贡献者如今拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间进行调研。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的资源。我们虽喜爱所有免费服务，但仍需保持主题相关性。界限有时较为模糊，因此本清单带有主观判断——若未采纳您的贡献，敬请谅解。

这份清单汇集了1600多人提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来添加新服务，或移除已变更或停服的项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限服务型产品，不含自托管软件。入选标准为：必须提供永久免费层级（非限时试用版）；若采用时间计量，免费期至少需持续一年。同时我们从安全角度评估免费层级——支持SSO的服务可接受，但将TLS功能限制在付费层的服务不予收录。

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
  * [Flutter相关与无Mac编译IOS应用](#Flutter相关与无Mac编译IOS应用)
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

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB从北美到所有区域目的地的网络出口流量（不包括中国和澳大利亚）
    * Cloud Storage - 5GB存储，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，附带5GB持久存储。每周限制60小时
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简的dev-test环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU的预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，附带免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），包含有限交易的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 实例在[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个摄入数据点，10亿个检索数据点
    * 带宽 - 每月10TB出口流量，x64-based VM限速50 Mbps，ARM-based VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封电子邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS保护，CDN附带免费SSL、防火墙规则和页面规则、WAF、机器人缓解、免费无限制速率限制 - 每个域名1条规则、分析、电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，三个网络位置

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
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用所需的一切，无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于改进Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限公共和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限公共和私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管。[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管。[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包与容器托管、项目管理和问题追踪
* [GitGud](https://gitgud.io) — 无限公共和私有仓库。永久免费。基于GitLab & Sapphire构建。不提供CI/CD
* [GitHub](https://github.com/) — 无限公共仓库和无限私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包与容器托管、项目管理和AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限公共和私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab构建的软件协作平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) - 使用Ionic开发应用的代码库和工具；同时提供Ionic代码库
* [NotABug](https://notabug.org) — NotABug.org是自由许可证项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) - OSDN.net为开源开发者提供免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是FOSS许可证项目的免费开源软件代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 无限免费的分布式版本控制系统。其独特之处在于基于补丁理论，易于学习、使用和分发。解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费私有项目（Git和Subversion），含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（GNU项目）的协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（非GNU项目）的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
* [IP.City](https://ip.city) - 每日100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) - 多功能API套件，包含IP地理定位、性别检测、邮箱验证等服务。
* [Apify](https://www.apify.com/) - 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制方案。免费计划每月含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档。无需CSS/HTML知识。免费计划每月50张图片和3个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全套API监控工具，包含自动API合约验证。免费计划支持每日10,000次请求。
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高品质API。免费计划每月50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等问题的根因分析。免费支持2个模型。
* [Maxim AI](https://getmaxim.ai/) - AI代理模拟评估平台。永久免费支持独立开发者和3人以下小团队。
* [Beeceptor](https://beeceptor.com) - 快速模拟REST API，免费每日50次请求，开放端点仪表盘。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供IP地理定位等现代Web API服务，免费版每月10K-50K次请求。
* [Browse AI](https://www.browse.ai) - 网页数据提取和监控工具。免费每月1,000次并发请求额度。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，免费每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) - 汽车数据API，免费每月100次请求覆盖9个端点。
* [Calendarific](https://calendarific.com) - 200+国家节假日API服务，免费每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon商品数据GraphQL API，免费每月100次调用。
* [Clarifai](https://www.clarifai.com) - 图像识别API，免费每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) - 多功能API平台，免费600次调用/月（仅限北美区域）。
* [Colaboratory](https://colab.research.google.com) - 免费云端Python笔记本环境（含Nvidia Tesla K80 GPU）。
* [CometML](https://www.comet.com/site/) - 面向个人和学术用户的MLOps平台。
* [Commerce Layer](https://commercelayer.io) - 可组合电商API，开发者计划免费每月100订单。
* [Composio](https://composio.dev/) - AI代理集成平台，支持200+工具连接。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，免费版限制20MB文件大小和30次/日转换。
* [国家-州-城市微服务API](https://country-state-city.rebuscando.info/) - 免费每日100次请求的地理信息API。
* [Coupler](https://www.coupler.io/) - 数据集成工具，免费版限制1个用户和手动数据刷新。
* [CraftMyPDF](https://craftmypdf.com) - PDF模板生成API，免费每月100个PDF和3个模板。
* [Crawlbase](https://crawlbase.com/) - 网络爬虫API，首1,000次调用免费。
* [CurlHub](https://curlhub.io) - API调试代理服务，免费每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，免费每月5,000次调用。
* [CustomJS](https://www.customjs.io) - PDF处理API，免费每月600次调用。
* [Cube](https://cube.dev/) - 数据访问和交付平台，免费版每日1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简易自毁文件分享服务。
* [Data Fetcher](https://datafetcher.com) - Airtable连接工具，免费每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具，免费每月20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本，免费每月10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器数据提取插件，免费每月500页。
* [Datapane](https://datapane.com) - Python交互式报告构建API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP定位API（每日每IP 1,000次请求），CC-BY 4.0许可的轻量数据库同样免费。

  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费计划支持每月最多10名活跃用户(MAU)并追踪4张人脸
* [Deepnote](https://deepnote.com) — 新型数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费版包含无限个人项目、基础机型(5GB内存+2vCPU)以及最多3名编辑的团队协作。
* [Disease.sh](https://disease.sh/) — 提供新冠疫情相关数据的免费API，用于构建实用应用程序。
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费计划每月允许生成250份文档。
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的PDF和截图生成托管API。免费计划每月允许400次生成。
* [drawDB](https://drawdb.app/) — 无需注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页和物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库后，可立即生成包含实时文档和用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层级提供20次额度。
* [DynamicDocs](https://advicement.io) — 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月50次API调用并开放模板库。
* [Efemarai](https://efemarai.com) — 机器学习模型与数据的测试调试平台。可可视化任意计算图，支持本地免费使用。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具。试用版包含2个项目(各10张表)。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 基于网页的免费HTTP请求发送工具。
* [Export SDK](https://exportsdk.com) — 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费版每月250页，用户不限，支持3个模板。
* [file.coffee](https://file.coffee/) — 单文件存储平台(匿名用户15MB/文件，注册用户30MB/文件)。
* [Financial Data](https://financialdata.net/) — 股票市场与金融数据API。免费计划每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) — 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费微型计划每月500次交易检测。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，免费计划每日2,000次请求。
* [Glitterly](https://glitterly.app/) — 通过基础模板编程生成动态图像。提供RESTful API和无代码集成，免费层级每月50张图像和5个模板。
* [Hex](https://hex.tech/) — 面向笔记本/数据应用/知识库的协作式数据平台。免费社区版支持5个项目。
* [Hook0](https://www.hook0.com/) — 开源Webhooks即服务(WaaS)平台，免费版每日100次事件分发并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) — 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) — 面向Pytorch/TensorFlow/JAX的NLP模型构建/训练/部署平台。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) — 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个云平台(如Exact Online/Twinfield等)。开发者与实施顾问可享免费计划(特定平台有数据量限制)。
* [ipaddress.sh](https://ipaddress.sh) — 以多种格式获取公网IP地址的简易服务。
* [ip-api](https://ip-api.com) — IP地理定位API(非商业用途免费)，无需API密钥，免费版同一IP限45次/分钟。
* [ipbase.com](https://ipbase.com) — IP地理定位API永久免费计划(每月150次请求)。
* [IP Geolocation](https://ipgeolocation.io/) — 开发者永久免费IP定位API(每日1,000次请求)。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API(1,000次免费请求)。
* [IPLocate](https://www.iplocate.io) — IP定位API(每日1,000次免费请求)，含代理/VPN/主机检测及ASN数据等，并提供免费IP数据库下载。
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务，LITE数据库可免费下载。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API(每月5万免费额度)，另提供500次免费WHOIS查询。
* [ipapi](https://ipapi.co/) — Kloudend公司基于AWS构建的IP定位API(每月3万次免费查询)。
* [ipapi.is](https://ipapi.is/) — 开发者打造的IP定位API(无需注册1,000次免费查询)，具备顶级主机检测能力。
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API(每月5万次免费)，提供地理定位/运营商/域名等详细信息。
* [IPQuery](https://ipquery.io) — 无速率限制和收费的开发者无限IP API。
* [IPTrace](https://iptrace.io) — 极简IP地理定位API(每月5万次免费查询)。
* [JSON2Video](https://json2video.com) — 通过API或无代码方案自动化生成营销视频的编辑平台。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP(无需注册)，支持CORS直接调用，适用于IP变更监控服务。
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON对象并作为REST API使用的开发者服务。
* [JSONing](https://jsoning.com/api/) — 一个简单的网页应用，可根据 JSON 对象即时生成自定义 API，处理错误情况，并自定义 HTTP 状态码、请求头和响应体。
* [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss 是一款强大的在线 JSON 查看器、编辑器和验证工具。通过 AI 驱动的修复功能，可格式化、可视化、搜索和操作 JSON 数据，支持树状视图、表格视图、12+ 种编程语言的代码生成，并能将 JSON 转换为 CSV、XML、YAML、属性文件等格式。
* [konghq.com](https://konghq.com/) — API 市场及强大的私有和公共 API 工具。免费版功能有限，如监控、告警和支持等。
* [Kreya](https://kreya.app) — 免费的 gRPC GUI 客户端，用于调用和测试 gRPC API。可通过服务器反射导入 gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过使用正确的数据改进您的机器学习模型。免费支持最多 1000 个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全 API，用于检测欺诈和可疑登录并向客户发出通知。每月免费处理 1000 次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证有效邮箱的电子邮件验证服务。免费 API 计划每月提供 100 次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等的实时和历史金融数据。永久免费 API 层每天允许 100 次免费 API 请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气 API，提供当前和预测天气数据。预测基于多个天气模型的机器学习组合，以提高准确性。免费计划每天提供 400 次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转换为数据，如元标签标准化、美观链接预览、爬取功能或截图服务。每天免费 50 次请求。
* [Mindee](https://developers.mindee.com) – Mindee 是一款强大的 OCR 软件和 API 优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用程序工作流程。免费层每月提供 500 页处理。
* [Mintlify](https://mintlify.com) — 现代 API 文档标准。美观且易于维护的 UI 组件、应用内搜索和交互式 playground。免费支持 1 名编辑。
* [MockAPI](https://www.mockapi.io/) — MockAPI 是一款简单工具，可快速模拟 API、生成自定义数据并通过 RESTful 接口执行操作。MockAPI 旨在用于原型设计、测试和学习。每个项目免费支持 1 个项目/2 个资源。
* [Mockfly](https://www.mockfly.dev/) — Mockfly 是一款值得信赖的开发工具，用于 API 模拟和功能标志管理。通过直观界面快速生成和控制模拟 API。免费层每天提供 500 次请求。
* [Mocki](https://mocki.io) - 一款工具，可创建与 GitHub 仓库同步的模拟 GraphQL 和 REST API。简单的 REST API 无需注册即可免费开发和使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的 API，选择在云端模拟的端点并检查流量，完全免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 一款简单的 Web 应用，用于生成自定义 HTTP 响应以模拟 HTTP 请求。也可作为[开源项目](https://github.com/julien-lafont/Mocky)使用。
* [Mock N Roll](https://mocknroll.me/) - 免费模拟 API 服务——一款强大工具，可模拟真实 API 响应而无需后端延迟。非常适合前端开发人员、QA 测试人员和 DevOps 团队。[仓库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假 REST API，支持生成代码和 Docker 容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 一款免费简单工具，可检查多个节点的出口 IP 地址，了解您的 IP 在不同全球区域和服务中的显示方式。适用于测试基于规则的 DNS 分流工具（如 Control D）。
* [Namekit](https://namekit.app/) - AI 驱动的域名发现工具——即时查找可用、标准价格的域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取 JSON 结果。开发者每天免费 100 次查询。文章有 24 小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100 次免费请求。
* [OCR.Space](https://ocr.space/) — OCR API 解析图像和 PDF 文件，返回 JSON 格式的文本结果。每月免费 25,000 次请求，文件大小限制为 1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建 Open API 3 定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转换为 API，免费支持 5 个项目。
* [Parseur](https://parseur.com) — 每月免费 20 页：从 PDF、电子邮件中提取数据。AI 驱动。完整 API 访问。
* [PDFBolt](https://pdfbolt.com) - 面向开发者的 PDF 生成 API，注重隐私。提供 Stripe 风格的文档，每月免费 500 次 PDF 转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 轻松将 HTML 或 URL 转换为 PDF 的简单 API。每月免费 100 次转换。
* [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，可视化模板编辑器或 HTML 转 PDF，动态数据集成和 PDF 渲染 API。免费计划包含 1 个模板，每月 100 次 PDF 生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作均通过 API 执行。还支持热图和折线图可视化。
* [Postman](https://postman.com) — 通过 Postman 简化工作流程并更快创建更好的 API，Postman 是一个 API 开发协作平台。永久免费使用 Postman 应用。Postman 云功能也永久免费，但有一定限制。
* [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 API，支持 REST 和 GraphQL。
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括每月 5 个部署的工作流和 500 分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管的 Apache Superset 服务。5 人以下团队永久免费，包含无限仪表板和图表、无代码图表构建器和协作 SQL 编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop 提供 10 倍更简单的 AI 网络爬取，几乎零采用时间，现有工作流程节省 85%+ 时间，运行速度比手动研究快 4 倍且无妥协，包括所有研究任务的 REST API 端点。每月前 1000 积分免费。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 10k 次请求的免费层。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共 API 列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大 API 中心，数百万开发者连接数千个 API，通过趣味挑战（含解决方案！）和交互式示例进行 API 开发。
* [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg 的 REST API，无需处理基础设施即可在线运行 FFmpeg。免费层提供每月处理配额和 4 个 vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费端点以接收 HTTP 请求。发送到该端点的任何 HTTP 请求将记录相关负载和标头，以便观察来自 Webhook 和其他服务的建议。
* [reqres.in](https://reqres.in) - 免费托管的 REST-API，随时响应您的 AJAX 请求。
* [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特炫酷图片的Web服务
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API爬虫工具。匿名爬取数据，无需担心限制、封禁或验证码问题。每月前100次成功抓取免费（含JavaScript渲染功能），联系客服可获更多额度
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬虫API与免费代理检测服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的视觉/文本变化及数据提取。免费版支持每月最多5个URL监测
* [Simplescraper](https://simplescraper.io) — 每次操作后触发Webhook。免费计划包含100次云端抓取额度
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析并记录数据。免费轻量版支持2个数据源/1,000张表/25个用户
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费计划包含每表1,000行数据额度
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能的API。免费版每月100次请求
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON数据。免费计划每月100次成功调用
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供高效开发工具。免费版含300处理单元/月，支持浏览器上传/数据隔离/熔断机制/任务提醒
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV即可通过API快速访问数据，加速应用开发。免费版含2个API和2,500次调用/月（无需信用卡）
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费、隐私优先的在线工具，直接在浏览器中将CSV转为结构化JSON数据
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含格式化器/验证器、正则测试器、假数据生成器及交互式数据库沙盒
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费版提供设计/模拟/文档工具
* [Supportivekoala](https://supportivekoala.com/) — 通过模板自动生成图像。免费版每月可创建50张图片
* [Svix](https://www.svix.com/) - Webhook即服务。免费版每月可发送50,000条消息
* [Tavily AI](https://tavily.com/) - 在线搜索与深度研究API，支持研究成果智能整理。免费版1,000次请求/月（无需信用卡）
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供国家/城市/区域等IP定位信息
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 免费天气API。提供全球精准天气预报、历史数据及天气监测方案
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，含日志聚合/可观测性/文档/调试功能。免费版每月25万次请求上限
* [UniRateAPI](https://unirateapi.com) – 590+种法币与加密货币实时汇率API。免费版无限调用，适合开发者与金融应用
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月150次免费验证
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API（含实时天气/逐时预报/天气预警）。通过AI模型融合多源数据提升预测精度。免费版10,000次调用/月
* [WebScraping.AI](https://webscraping.ai) - 内置解析器/Chrome渲染/代理的网页抓取API。每月2,000次免费调用
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪/数据集版本控制/模型管理加速模型开发。个人项目免费版含100GB存储
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版每月25,000令牌额度（约10次PR）
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月3万次调用
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器/住宅IP的网页抓取API。每月1,000次免费调用，学生与非营利组织可获额外额度
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，覆盖全球邮政数据。每月5,000次免费请求
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与验证服务。每月1万次免费请求
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持设计/部署边缘API。快速添加API密钥认证/限流/文档/商业化功能。基于OpenAPI标准，支持TypeScript编程。免费版含10个项目/无限生产环境/100万请求/10GB出口流量
* [DiffJSON](https://diffjson.com) - JSON结构差异对比工具，快速定位JSON数据变更
* [FreeIPAPI](https://freeipapi.com) - 免费高速IP地理定位API（支持商业用途），JSON格式输出

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 针对GitHub上JVM和Android项目的Maven仓库，公共项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费的私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有及公共制品仓库。公共项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公共项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人和团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享和同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、历史记录和集成，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 轻松找到会议最佳时间，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与排期工具。免费版提供1个日历连接和无限会话，含桌面和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队免费实时Scrum扑克估算工具，支持无限成员快速完成故事点评估
* [Telegram](https://telegram.org/) — 提供快速可靠的消息和通话服务。企业用户和小团队可享受大群组、用户名、桌面应用和强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，标准处理速度及社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图、流程文档和团队协作，含异步屏幕录制功能
* [Duckly](https://duckly.com/) — 实时团队交流与协作平台。支持IDE配对编程、终端共享、语音视频及屏幕共享，小团队免费
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版含每月10,000分钟用量
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具，免费版含无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的在线会议方式。通过可定制虚拟空间实现真实社区互动，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交和PR活动的每日报告工具。含推送可视化、同伴认可系统和自定义提醒功能，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。公开和私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但支持Markdown语法，私有笔记的协作者数量将受限制
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频技术支持服务，免费版不含分析、加密和支持功能
* [ideascale.com](https://ideascale.com/) — 客户意见提交与投票平台，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 内部文档、博客、日历共享门户，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的参会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道、群组或私信中通过/meet命令发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签、多工作区和协作。免费版含4个工作区和10个成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队和开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内锁定会议室、开发环境等共享资源，免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈的工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享和通行密钥的密码管理器，支持网页、浏览器扩展及多端应用
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容和应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的安全跨设备协作白板，企业级分布式团队解决方案，含免费计划
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作应用，被描述为笔记记录、项目管理和任务管理的全能工作空间
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识、文档和笔记协作维基。免费版含核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编辑器的免费编程面试平台，支持浏览器端代码编译运行
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间表和工时追踪应用，免费版支持10个用户的基本功能
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加视觉评审功能而无需部署网站。免费版每月10个页面和100MB总存储
* [Pendulums](https://pendulums.io/) - 界面友好的免费时间追踪工具，提供有价值的数据统计
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整历史消息

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音视频通话，并易于与其他服务集成。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息记录和完整历史消息存储。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB空间
  * [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献并生成统一报告快照。
  * [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器直接协作，完全免费。
  * [Slab](https://slab.com/) — 面向团队的现代知识管理服务，10人以下团队免费使用。
  * [slack.com](https://slack.com/) — 无限用户免费版（部分功能受限）
  * [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务提供商的状态页吗？
  * [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记。免费版支持3个面板墙、无限用户和1GB存储。
  * [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人计划。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点连接，无需插件、注册或付费
  * [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持带泳道功能的看板和完整Scrum实现，含时间追踪功能。免费支持5用户和3个项目组合。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程。包含面向远程团队的完整休假管理功能。5人以下小团队免费。
  * [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费使用。
  * [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 无限用户免费的时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具。
  * [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代方案）- 无限用户，每工作区10GB存储和10GB音视频流量。
  * [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用。
  * [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理化。提供免费无限量计划，合格团队可享折扣。
  * [tldraw.com](https://tldraw.com) — 免费开源白板与图表工具，具备智能箭头、吸附、便签和SVG导出功能。支持多人协作编辑，另有免费官方VS Code扩展。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签/任务管理器，提供可定制云桌面及文件夹协作功能。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
  * [Tugboat](https://tugboat.qa) - 自动化按需预览每个Pull Request。全员免费，非营利组织额外赠送Nano套餐。
  * [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in）
  * [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过精简Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多可创建/加入3个非高级工作区。
  * [vadoo.tv](https://vadoo.tv/) — 极简视频托管与营销平台。单键上传视频，支持录制、管理、分享等功能。免费版每月提供10个视频、1GB存储和10GB带宽
  * [userforge.com](https://userforge.com/) - 互联在线角色画像/用户故事/场景映射工具，保持设计与开发同步。免费版支持3个角色和2名协作者。
  * [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度且含品牌水印播放器
  * [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务。可分享无限数量≤5GB文件给任意多接收方。
  * [Wormhole](https://wormhole.app/) - 端到端加密分享≤5GB文件（有效期24小时）。超过5GB文件将启用P2P直传。
  * [zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费会议限时40分钟。
  * [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版含10,000条可搜索历史消息和5GB文件存储，另有可自托管的开源版本。
  * [robocorp.com](https://robocorp.com) - 驱动自动化运维的开源技术栈。免费体验云功能并实现简单自动化：每月240分钟机器人时长、10次助手运行、100MB存储。
  * [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费计划包含完整消息历史、无限私聊、1个群组对话和1GB文件存储。
  * [Chanty.com](https://chanty.com/) — 另一款Slack替代工具。永久免费计划支持10人以下小团队，包含无限公私对话、可搜索历史、无限1对1语音通话、语音消息、10个集成和20GB团队存储。
  * [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，用于收集网站/PDF/图片的数字化反馈意见。
  * [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台。免费版含无限频道/剧本/看板/用户和10GB存储等。
  * [Webvizio](https://webvizio.com) — 网站反馈工具与缺陷报告系统，直接在实时网站/Web应用/图片/PDF/设计文件上开展开发协作。
  * [Pullflow](https://pullflow.com) — 提供跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
  * [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人参与）。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人参与）。
  * [GitBook](https://www.gitbook.com/) — 技术知识沉淀与文档平台，支持产品文档/内部知识库/API文档等。个人开发者免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输共享界面。无需订阅即可发送照片视频等大文件。
  * [paste.sh](https://paste.sh/) — 基于JavaScript与加密技术的简易粘贴站点。

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案。首年每月赠送10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在网站项目上收集反馈，无需模拟器/画布等变通方案。完全可用的免费版本。

  * [Cushion](https://cushion.so/) - 专为分布式小团队设计的异步协作工具。免费版支持30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。提供开发者免费套餐，同时可免费使用开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 与 API 工具包。为开发者提供免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) — 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础套餐含 10 万次/月 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的内容管理平台，支持本地或云端部署，无功能限制或付费墙。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) — 内容即服务平台，兼具无头 CMS 优势与营销功能。开发者方案含 2 个用户、无限项目（每个项目 2 个环境）、500 个内容项、2 种语言 API 支持及自定义元素功能。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面，社区方案含无限 API 调用、文档、内容类型、资源及多语言支持。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) — 结构化内容平台，含开源编辑环境与实时数据存储。每个项目免费包含无限管理员、3 个普通用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽及 5GB 资源。
* [sensenet](https://sensenet.com) — API 优先的无头 CMS 企业级解决方案。开发者方案含 3 个用户、500 个内容项、3 种内置角色、25+5 种内容类型及完整 REST API 支持。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown/MDX/JSON，基础套餐免费含 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) — 快速灵活的框架，可对接任意 CMS/API/数据库构建网站，打造更高转化率的无头网站。
* [Hygraph](https://hygraph.com/) — 为小型项目提供免费套餐。GraphQL 优先 API，助力从传统方案迁移至现代无头 CMS。
* [Squidex](https://squidex.io/) — 小型项目免费套餐。API/GraphQL 优先的开源方案，基于事件溯源架构（自动记录所有变更）。
* [InstaWP](https://instawp.com/) — 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间，站点 48 小时后过期。
* [Storyblok](https://www.storyblok.com) — 面向开发者与营销人员的无头 CMS。社区版含管理 API、可视化编辑器、10 个数据源、多语言支持及 250GB/月流量。
* [WPJack](https://wpjack.com) — 5 分钟在任何云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书与无限定时任务，无时间限制。
* [Solo](https://soloist.ai) — Mozilla 推出的免费 AI 建站工具，无需信用卡即可通过简单输入生成企业网站，支持自定义域名。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量API和路由，支持深度集成。免费方案包含3个项目、5张数据表和Google插件支持。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody提供多款LLM选择（含本地推理），支持多种IDE环境，兼容所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（基于Starcoder 16b模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源码整洁。开源项目可免费使用，商业友好型免费方案包含三个功能模块。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限量行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过分析全球代码库的深度洞察，帮助开发者更快打造更优质的软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，新用户初始获赠1200积分，每月还可领取200免费积分。


**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和1个100MB存储的代码库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟测试会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者工作模式优先处理技术债务，可视化团队耦合和系统掌握度等组织因素，开源免费
* [CodSpeed](https://codspeed.io) - 在CI流水线中自动化性能追踪。通过精准一致的指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷、安全漏洞、性能和API问题。实时分析支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源和私有仓库免费（最多30名开发者）
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库和SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化静态代码分析平台，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。支持框架迁移/带修复的代码分析/大规模代码转换，开发者可专注创新而非维护。开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求和提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证和多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖项更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep式管理工具。支持代码片段整理、发现与分享，提供强大的带预设模板的代码截图功能和链接特性

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — 将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，加速迭代周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台创建标准化应用环境，内置持续部署自动化和高级可观测性。免费版支持1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 分钟级云端应用和基础设施部署。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层允许5个域名和2个用户无限次应用部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD（原生/混合开发）。免费版每月200次构建，单次10分钟构建时长，支持2名团队成员。开源项目可获得45分钟构建时长、+1并发和无限团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目与1个并发执行（每月120次运行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时长。测试分析免费开发者层包含每月10万次测试执行，开源项目有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD与DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 完整功能免费方案，托管式CI/CD服务支持GitHub/GitLab/BitBucket仓库。多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟免费执行时长，无限协作者，私有项目30个并行任务，开源项目最高8万构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费方案：1个构建、1个环境、共享服务器、无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时长
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限额
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
* [drone](https://cloud.drone.io/) - 支持x86/Arm多架构持续交付流水线（32/64位）
* [LayerCI](https://layerci.com) — 全栈项目CI。1个全栈预览环境（5GB内存+3核CPU）
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过专属URL访问应用，无限公开/私有仓库，最高2GB VM规格
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.io) — GitHub工作流自动化与合并队列，公开仓库免费
* [Make](https://www.make.com/en) — 可视化工作流自动化工具，支持多应用与主流API集成。公开GitHub仓库免费，免费层含100MB存储/1000次操作/15分钟最小间隔
* [Shipfox](https://www.shipfox.io/) - 加速GitHub Actions 2倍，每月3000分钟免费构建时长
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块仓库、ChatOps集成、OPA持续合规、SAML 2.0单点登录，公共工作池每月200分钟
* [microtica.com](https://microtica.com/) - 预置基础设施组件的初创环境，免费AWS应用部署与生产负载支持。免费层含1个环境（AWS账户）、2个Kubernetes服务、每月100构建分钟和20次部署
* [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、多机任务分发和自动化E2E测试分割加速Monorepo CI。免费方案支持30名贡献者，含15万信用点
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月3000免费分钟，无需信用卡
* [Terramate](https://terramate.io/) - Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台。2个用户以下全功能免费
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持PR驱动工作流、自托管运行器项目隔离和分层有序操作。3个用户以下免费

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费，个人用户免费版每周有有限检查点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接通过浏览器测试您的Android和iOS应用。免费版每月包含两个并发会话，每次使用30分钟。应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能退化。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"Monitoring as Code"工作流和Playwright。开发者享有慷慨的免费层。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否遵循50+ SEO、速度和安全性最佳实践。小型网站免费。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否对给定域名启用CORS并识别差距。获取可操作见解。
  * [cypress.io](https://www.cypress.io/) - 对浏览器中运行的任何内容进行快速、简单且可靠的测试。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5名用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有操作并生成脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在导致面向客户的问题前发现弱点。Gremlin Free支持对最多5台主机或容器执行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费计划支持最多4个并发节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。10分钟测试文件免费计划，开源项目无限免费计划。
  * [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费版每月模拟最多50并发用户，持续60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事及Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，7,000快照/月。
  * [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，含AI辅助测试用例生成
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费计划每日10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费层包含所有核心功能，500MB附件存储，最多3用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费版限10次iOS和10次Android测试，但包含付费计划大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、录制含网络和控制台日志的会话。免费层最多10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源及改进任何技术栈网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现Bug？可复制测试唯一URL向开发者展示如何复现。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉对比服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）情况。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费计划包含Jira集成、不限项目、通过CSV/XLSx导入测试用例、时间跟踪及1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源开发者、个人用户、教育机构及初创小团队可申请基础免费项目之外的折扣或免费方案。
  * [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求，支持转发至本地环境或历史记录回放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，集成工具链、组件库和设计系统加速迭代、优化设计并简化开发流程。无限项目数量且提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络与服务器工具集。
  * [webhook-test.com](https://webhook-test.com) - 通过专属URL调试检查webhook和HTTP请求，完全免费且支持无限URL创建与智能建议。
  * [webhook.site](https://webhook.site) - 使用定制URL验证webhook、外发HTTP请求或电子邮件，永久提供临时URL及邮箱地址服务。
  * [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化开发任务的快捷方式，目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — AWS安全与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 开源平台，提供不可篡改的代码/文件/目录/容器公证服务
* [crypteron.com](https://www.crypteron.com/) — 面向.NET和Java应用的云原生安全平台，防止数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具即可进行数据编解码分析的Web工具，如同加密领域的瑞士军刀。所有功能免费无限制，支持自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略来防止配置错误
* [Dependabot](https://dependabot.com/) 支持Ruby/JavaScript/Python/PHP/Elixir/Rust/Java(.NET/Go/Elm/Docker/Terraform/Git子模块/GitHub Actions)的依赖项自动更新
* [DJ Checkup](https://djcheckup.com) — Django网站安全漏洞自动扫描工具（基于Pony Checkup开源项目）
* [Doppler](https://doppler.com/) — 支持同步到多云平台的通用密钥管理器，免费版支持5个用户及基础权限控制
* [Dotenv](https://dotenv.org/) — 安全同步.env文件，免费支持3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动检测并修复源代码中的密钥泄露，免费支持25人以下团队扫描350+种密钥类型
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — 每月10次免费的Web应用/服务器/网络漏洞扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，免费支持5名开发者
* [Internet.nl](https://internet.nl) — 测试IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理及集成CT数据库的证书购买
* [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
* [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞，免费支持1个私有项目
* [Mozilla Observatory](https://observatory.mozilla.org/) — 检测并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25个用户30天历史记录
* [openapi.security](https://openapi.security/) - 无需注册即可快速检测OpenAPI/Swagger接口安全性
* [pixee.ai](https://pixee.ai) - 免费GitHub安全机器人，自动为Java代码提交修复漏洞的PR（即将支持更多语言）
* [pyup.io](https://pyup.io) — Python依赖项安全监控与自动更新，免费支持1个私有项目
* [qualys.com](https://www.qualys.com/community-edition) — Web应用漏洞扫描及OWASP风险评估
* [report-uri.io](https://report-uri.io/) — CSP/HPKP违规报告
* [seclookup.com](https://www.seclookup.com/) - 提供域名威胁情报的API服务，免费5万次查询额度
* [snyk.io](https://snyk.io) — 开源项目无限次依赖项漏洞扫描，私有项目每月200次限额
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限制的SCA扫描工具
* [StackHawk](https://www.stackhawk.com/) 单应用无限次自动化安全扫描
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站的免费安全检测、防病毒及WAF服务
* [TestTLS.com](https://testtls.com) - 不限HTTPS的SSL/TLS服务安全测试
* [threatconnect.com](https://threatconnect.com) — 免费威胁情报分析平台（最多3个用户）
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 免费版支持每周XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加密/解密，免费支持单应用每月100万次加密
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全工具，免费支持250用户以下应用
* [Vulert](https://vulert.com) - 无需安装即可持续监控开源依赖项漏洞，免费支持开源项目

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个公开GitHub仓库、代码片段、问题和评论中暴露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户(MAU)和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端SDK。免费支持1000 MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000 MAU、无限社交登录连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费支持5000 MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)服务，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度访问控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA服务，提供登录/注册/个人资料等预制UI组件。免费支持10,000 MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先通行密钥认证。不限MAU永久免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500月活用户和50个租户(含5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)方案。免费支持10用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费提供7,500 MAU起步套餐。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的2FA服务，免费支持10用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动应用实现无密码认证，最快仅需几分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100 MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费支持3个企业应用+5个个人应用，不限用户数。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。开发者账户永久免费，包含所有安全功能、无限团队成员、200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC，适用于微服务架构。提供实时更新和无代码策略界面。免费层含1000 MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费层支持1000用户和10个SSO连接，使用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费方案包含不限MAU、不限组织数、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化认证与反欺诈平台，提供API/SDK支持。免费方案含10,000 MAU、不限组织数、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案，5分钟快速上手。可免费自托管，或选择含10k免费MAU的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，兼顾快速启动与用户体验控制。免费支持5000 MAU。
* [Warrant](https://warrant.dev/) - 企业级授权与访问控制托管服务。免费层含100万次API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费支持25,000次认证请求，包含OTP/无密码认证/策略等完整安全功能。
* [PropelAuth](https://propelauth.com) - 快速实现企业级销售功能，几行代码即可支持各种规模企业。免费支持200用户和10,000封品牌水印邮件("由PropelAuth驱动")。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，支持认证与授权功能。免费支持5,000 MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：单个应用、数据分析、无限版本与安装、用户反馈收集功能。
* [Loadly](https://loadly.io) - iOS与Android测试版应用分发服务，提供完全免费的无限下载、高速传输和无限上传功能。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS和Android应用。免费方案包含：无限上传、私有链接（访客2天有效期/注册用户60天有效期）。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大100MB文件体积。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例  
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间  
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理工具，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务。实时管理设备群并免费保护无限设备，免费版提供基础功能  
* [moss.sh](https://moss.sh) — 帮助开发者部署和管理Web应用及服务器，每月免费25次Git部署  
* [runcloud.io](https://runcloud.io/) — 专注于PHP项目的服务器管理平台，免费支持1台服务器  
* [ploi.io](https://ploi.io/) — 简易服务器管理与部署工具，免费支持1台服务器  
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台，提供免费单服务器方案  
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP服务器，免费支持1台服务器  

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息，支持多可用区节点部署。
* [courier.com](https://www.courier.com/) — 统一推送API（应用内消息/邮件/聊天/SMS等），含模板管理等功能。免费套餐包含每月1万条消息。
* [Engage](https://engage.so/) - SaaS客户互动自动化工具（邮件/推送/SMS/产品导览/横幅等）。每月免费支持1,000名活跃用户。
* [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月1万条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生MQTT物联网消息代理。永久免费连接100台设备（无需信用卡）。
* [knock.app](https://knock.app) – 开发者通知基础设施。单次API调用支持应用内/邮件/SMS/Slack/推送等多渠道发送。免费套餐含每月1万条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月1万条通知+100条SMS/自动语音呼叫。
* [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件/SMS/站内信/应用内/推送等渠道，免费套餐含每月3万条通知（保留90天）。
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日20万条消息。
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日10万次事件。
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入/视频布局/录制，提供托管WebUI或自定义UI组件。[开发者免费层](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长。
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持1万订阅用户，推送次数不限，含浏览器内消息功能。
* [httpSMS](https://httpsms.com) - 通过Android设备作为SMS网关收发短信。每月免费200条收发额度。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的弹性安全MQTT代理。永久免费100万会话分钟/月（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API/Webhook无缝集成，免费套餐支持每日50条消息（1设备1应用）。
* [SuprSend](https://www.suprsend.com/) - 以API优先的智能通知中台，统一处理事务性/定时/互动通知。免费套餐含每月1万条通知，支持摘要/批量/多渠道/租户/广播等高级功能节点。
* [SMSG](https://sms-gate.app) - Android™短信网关云服务，通过设备路由实现云端SMS收发。完全免费的云服务（建议每日超1万条用量时通知以维持服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版含50GB存储，15天存储保留期和7天日志搜索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS/Android的远程调试/日志SDK，含Web界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费1296万条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB日志，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Wordpress插件Loco Translate集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键值免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条字符串源），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 全员免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 24小时指标免费，APM代理限制为一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。团队和个人免费计划
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页于一体的产品。免费版包含10个监控器（3分钟检查频率）和状态页
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器、无限用户/仪表盘/告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费计划含1个用户、1万次API & 网络检查/1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费版含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。1个免费监控器（推荐注册可获更多）
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。24小时数据保留免费
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合的观测平台，集成指标与日志。免费版：3用户、10个仪表盘、100条告警、Prometheus和Graphite指标存储（1万序列，14天保留）、Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台任务。最多20个检查免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费含无限订阅和团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费提供500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线死链检测器，小型网站（100页内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware观测平台全面可视化应用与技术栈，支持大规模监控与诊断。开发者社区永久免费计划包含：100万日志事件监控、2台主机的基础设施监控与APM
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。永久免费计划支持10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标收集工具。发展中的产品，GitHub可找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台帮助工程师构建更完美软件。从单体到无服务器，可插桩所有组件并分析、排查、优化整个软件栈。免费层提供每月100GB数据摄入、1个全权限用户和无限基础用户
* [nixstats.com](https://nixstats.com) - 单服务器免费。含邮件通知、公开状态页、60秒间隔等
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API正常运行时间监控、定时任务监控及状态页。前5个检查（3分钟间隔）免费，通过Slack/Discord/邮件发送告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中美服务器DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 高可用服务的强大告警与值班管理。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，含告警、可视化与基础报告。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监控器（每日检查）
* [pagerly.io](https://pagerly.io/) - Slack值班管理（集成Pagerduty/OpsGenie）。1个团队免费（1个团队指1个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更与正常运行时间。免费计划含5个URL、每日核心指标监控、10个HTML/SEO变更监控、167国联盟链接监控及邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控免费支持10万事件（无限项目与状态页）
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限URL检查，通过Discord/Slack/邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器（10分钟间隔）。监控SSH/HTTP/HTTPS及自定义TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可定制公开状态页（SSL子域名）。开源项目与非营利组织免费提供专业版
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监控器、6个月历史运行数据/日志、无限状态页和自定义域名！无限时间且无限邮件告警。无需信用卡

  * [sematext.com](https://sematext.com/) — 免费提供24小时指标监控，支持无限服务器、10个自定义指标、50万自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台上的强大服务器监控，支持指标和日志，无需复杂配置。免费支持一台服务器
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类提供5个免费监控项
* [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 免费提供2个监控项
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级正常运行时间监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页面等功能。免费版包含10个HTTP监控项、1个DNS监控项和1个状态页面
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，可检查Ping、DNS等
* [Squadcast.com](https://squadcast.com) - Squadcast是端到端的事件管理软件，帮助实施SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计项，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（有限制）
* [statusgator.com](https://statusgator.com/) — 状态页面监控，免费3个监控项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS和域名监控。免费监控10台服务器、10个正常运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供警报和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个地理位置和20个主要网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监控项，5分钟间隔，可自定义状态页面（商业用途也可）。通过电子邮件和Telegram享受无限实时通知。无需信用卡即可开始使用
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页面
* [zenduty.com](https://www.zenduty.com/) — 面向网络运营、站点可靠性工程和DevOps团队的端到端事件管理、警报、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - RoboMiri是一个稳定的正常运行时间监控工具，支持多种监控类型：Cron任务、关键词、网站、端口、Ping。免费提供25个正常运行时间检查项，3分钟间隔。通过电话、短信、电子邮件和Webhook发送警报
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 正常运行时间监控：20个免费项，Linux和Windows服务器监控：5个免费项，状态页面：1个免费项 - 移动应用、多种通知渠道等更多功能！

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 为Web开发者提供的错误日志和运行状态监控。开源项目可免费使用Small Business订阅
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话内免费
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等服务。每月3,000次事件/1用户免费。开源且支持自托管无限使用
* [GlitchTip](https://glitchtip.com/) — 简洁开源的错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，支持无限自托管
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小型团队和开源项目每月12,000次错误免费
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划包含每月5,000次错误、无限用户、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管不限量使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。包含Vercel等平台集成，支持通过邮件/Discord通知的高级数据查询
* [Semaphr](https://semaphr.com) — 移动应用一站式免费紧急开关解决方案
* [Jam](https://jam.dev) - 开发者友好的一键错误报告。免费计划支持无限次报告
* [Whitespace](https://whitespace.dev) – 浏览器内一键错误录制。个人用户免费计划支持无限次录制

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，具备容错纠错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月1,000名活跃用户内免费，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费版不限搜索次数，最多50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完整编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具和技术
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发全领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 麻省理工学院2500多门课程材料的在线出版物，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript和SQL的免费在线指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费在线课程，专注计算机科学、工程和数据科学
* [Django教程](https://django-tutorial.dev) - 首个Django框架学习指南，为用户文章提供免费dofollow反向链接
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学培训，涵盖Python Click和Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和手机号验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱，1个收件箱，7天历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件及事务性发件，每月10000封免费
* [Contact.do](https://contact.do/) — 链接式联系表单（类似Bitly的短链接表单）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费2个域名邮箱（100MB存储），支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月9000封免费邮件（每日上限300封）
* [EmailOctopus](https://emailoctopus.com) - 免费2500名订阅者，每月10000封邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端发件工具（不暴露凭证），免费层含200次/月请求、2个模板、50KB请求限制
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务（针对Nodemailer/EmailEngine用户），完全免费的防事务性邮件系统（邮件永不投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，支持多域名，页面刷新即更新地址，完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱是否临时地址
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时邮箱生成器（含广告），支持10个域名无限创建地址
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发（注：部分TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每日15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，支持收发
* [Inboxes App](https://inboxesapp.com) — 每日3个临时邮箱（Chrome扩展），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 开源可自建临时邮箱，邮件3天后自动删除
* [mail-tester.com](https://www.mail-tester.com) — 检测DNS/SPF/DKIM/DMARC配置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 免费检测邮件DNS/SPF/DKIM/DMARC配置
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API（REST/SMTP），每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 拦截临时邮箱注册，每小时120次请求（约86400次/月）
* [Mailchimp](https://mailchimp.com/) — 500订阅者+1000封邮件/月免费
* [Maildroppa](https://maildroppa.com) - 100订阅者+无限邮件+自动化免费
* [MailerLite.com](https://www.mailerlite.com) — 1000订阅者+12000封邮件/月免费
* [MailerSend.com](https://www.mailersend.com) — 事务性邮件API/SMTP，每月3000封免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮箱系统，任意收件箱可用
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费（每日200封限制）
* [Mailnesia](https://mailnesia.com) - 自动访问注册链接的临时邮箱
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API（1500次/月限额），支持Slack/Webhook推送
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP，免费版含1收件箱+100封邮件
* [Mail7.io](https://www.mail7.io/) — QA开发者临时邮箱（支持API即时创建）
* [Momentary Email](https://www.momentaryemail.com/) — 可通过RSS阅读的临时邮箱
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID+1域名+1收件箱（多ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱与日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（提取数据并转发到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费
* [Postmark](https://postmarkapp.com/) - 每月100封免费+无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费1GB存储的端到端加密安全邮箱
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API（10000封/月免费），支持异步发送/多SMTP/日志跟踪等
* [QuickEmailVerification](https://quickemailverification.com) — 每日100次免费验证+其他免费API（DEA检测/DNS查询等）
* [Resend](https://resend.com) - 开发者事务性邮件API（3000封/月+1自定义域名免费）
* [Sender](https://www.sender.net) - 15000封邮件/月+2500订阅者免费
* [Sendpulse](https://sendpulse.com) — 500订阅者+15000封邮件/月免费
* [SimpleLogin](https://simplelogin.io/) – 开源可自建邮件别名转发（免费5个别名+无限收发），教育工作者免费
* [Substack](https://substack.com) — 无限免费电子报服务（收费时开始付费）
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API（每日500封免费）

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多款含免费方案的服务。免费方案服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储空间
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制和5GB存储空间。捆绑Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议和10名网络研讨会 attendees
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理
   - [Showtime](https://zoho.com/showtime) — 另一款培训用会议软件，支持最多5名参会者的远程课程
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS和Atom订阅，访问控制和自定义CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理，20个客户/订阅和1用户免费，所有支付由Zoho托管。存储最后40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面和最多50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)提供1个远程技术员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每个频道100用户和SSO
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建器
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排程
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队成员数量，提供优质服务且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨Web、移动和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量不限。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量不限。
* [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试。免费版支持最多3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境、不限请求次数。SDK、分析仪表板、发布日历、Slack通知等所有功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。其慷慨的免费计划提供不限席位、开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试。代码即配置和全类型TypeScript SDK。与Next.js和React等框架深度集成。提供丰厚的免费层级和低成本扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体，经过人工精选并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速轻松地在网站上安装众多免费字体
* [FontGet](https://www.fontget.com/) - 提供多种可下载字体，并通过标签进行清晰分类
* [Fontshare](https://www.fontshare.com/) - 免费字体服务，包含不断增长的专业级字体集合，100%免费用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多种独特字体
* [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体及其使用方式
* [Bunny](https://fonts.bunny.net) 注重隐私的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和商用付费字体，支持输入文本快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 使用CSS为网站提供字体家族的开源免费服务
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，包含CJK（中文、日文、韩文）字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知和自动回复、Webhooks、Zapier集成、重定向、AJAX或POST等功能。免费版包含无限表单，每月20次提交，若展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化界面，支持与Google Sheets、Airtable、Slack、Email等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。提供通知、垃圾邮件拦截和GDPR合规数据处理。基础使用免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费开始使用。免费版每月允许500次提交，并可自定义回复邮箱地址。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，垃圾邮件防护，邮件通知，以及可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作，以及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，每月无限单页表单，100次提交，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版允许无限表单，每月250次提交，客户支持团队提供协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制为每月每个表单50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供的简易表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，提供终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和无限提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB文件存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存档的表单后端。通过界面将提交转发至邮件、Slack或Zapier。使用自己的前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版允许创建无限表单并收集无限提交。内置模板、反垃圾邮件功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%的功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页面等。
* [Hyperforms.app](https://hyperforms.app/) — 秒级创建表单转邮件等功能，无需后端代码。个人账户每月免费提供50次表单提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，非常适合静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站，1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 使用这款一流工具创建专业表单和调查。50多个专家设计的调查模板。免费账户限制为1个活跃调查，每调查100次回复和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调查和产品分析工具，用于解码用户行为。永久免费版允许500名月活跃用户，无限回复和事件，多种集成、导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB文件存储，Zapier集成，CSV/JSON导出，自定义重定向和响应页面，Telegram & Slack机器人，单次邮件通知。
* [Survicate](https://survicate.com/) — 从所有来源收集反馈并通过单一工具发送后续调查。自动分析反馈并用AI提取洞察。免费版提供邮件、网站、产品或移动端调查，AI调查创建工具，每月25次回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 轻松集成HTML表单，无需服务器端代码。用户提交表单后，内容将发送至您的注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建工具。免费版支持5个表单，每个表单最多3步，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站上嵌入精美设计的表单。免费版限制为每个表单10个字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版会在签署文档上添加水印，但允许无限信封和签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的联系表单，无需编写后端代码。免费版允许无限表单、无限域名和每月250次提交。
* [WebAsk](https://webask.io) - 调查和表单构建工具。免费版支持每个账户3个调查，每月100次回复，每个调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限制100次提交。
* [formpost.app](https://formpost.app) - 免费、无限的表单转邮件服务。可设置自定义重定向、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站上分享和嵌入独特外观的表单。无表单数量限制或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站上嵌入PDF编辑器，将任何PDF转换为可填写表单。免费版允许无限PDF，每个PDF3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100次回复，支持嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调查工具。使用Qualli AI设计完美问题。免费版支持500名月活跃用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，支持GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版允许收集25条反馈提交。提供React和Vue组件，易于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版包含1个活跃调查，每调查25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复Cursor、Windsurf和Copilot等工具的输出，以满足企业质量和合规标准。免费版包含每日100次MCP服务器工具调用，以及通过GitHub App每日25次免费自动化Pull Request审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。两行代码即可调用200+种LLM，每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，提供可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 统一搜索工具，可同时搜索所有应用。搜索助手能利用您的信息回答问题。免费版提供无限统一搜索和每日5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理功能。专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试LLM应用性能问题。为任何LLM创建开放遥测标准追踪，提升可观测性，兼容所有观测客户端。免费版每月50,000次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，促进工程师与非技术团队协作，微调并投产生成式AI产品。免费版包含所有平台功能，每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和产品生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月50,000次观测和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 简单易用的免费图像生成AI，提供免费API。无需注册或API密钥，多种网站和工作流集成选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - AI原生的快速、简单且安全的商业智能替代方案，可替代Tableau、Power BI和Looker。Othor利用大语言模型(LLM)在几分钟内交付定制商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和单用户无限分析。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1/V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现优异，适合多样化开发需求。注意免费模型有速率限制，同时平台也提供Claude、OpenAI、Grok、Gemini和Nova等付费高级模型。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000字免费额度，支持Azure OpenAI、DeepSeek和Google Gemini模型，赋能代码生成、深度研究和图像创建。
* [音频增强器](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，消除噪音和回声同时保持自然人声清晰度。完全免费：无限次一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs是由Cloudflare提供支持的免费开源CDN服务，被全球超过11%的网站所信任。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate是一个极速、可靠的GraphQL API CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您轻松将其添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费支持100万次请求。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速启动和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不宕机的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。实时处理图片并拥有全球缓存。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名和通用SSL。
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持最多5名用户和每日1GB流量。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python的Web应用开发平台。免费版支持无限应用数量，但执行超时限制为30秒。
* [appwrite](https://appwrite.io) - 支持无限项目且无暂停限制（含WebSocket支持）的认证服务平台。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析功能，特别适合内容密集型和企业级电商网站。免费版每月支持5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费层每日10万请求，每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量，仅限免费域名使用。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的免样板后端框架，包含业余项目的免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用通过AWS结算（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用专属服务，提供永不休眠的免费实例及限制为2连接/10,000行且无备份的PostgreSQL免费数据库。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持业务快速增长所需全栈能力。免费计划包含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，基于任意触发器开发工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。初级账户免费，包含your-username.pythonanywhere.com域名下的1个Web应用、512MB私有文件存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用的平台。免费预览版每小时500次调用，每日2,500次，每月5万次调用。仅付费计划支持自定义域名。
* [Koyeb](https://www.koyeb.com) - 面向开发者的全球无服务器平台，支持Docker容器/Web应用/API的Git部署。免费实例可部署至德国法兰克福或美国华盛顿特区，含512MB内存/2GB存储/0.1CPU。法兰克福/华盛顿/新加坡提供免费托管PostgreSQL数据库。
* [Napkin](https://www.napkin.io/) - 内存500MB、默认15秒超时的FaaS服务，每月5,000次免费API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用专属PaaS服务Galaxy，含免费MongoDB共享托管和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI构建部署微服务/定时任务/托管数据库。免费层含2个服务、2个定时任务和1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全栈平台，兼具NoCode工具敏捷性与编程语言强大功能。免费版包含[1,000次yeps调用](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)支持3个项目、1GB出口流量和每月300分钟构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务并每月赠送5美元额度。
* [mogenius](https://mogenius.com) - 简化Kubernetes服务部署，免费层支持本地Kubernetes连接，为开发者提供类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB带宽/10个定时任务（限非商业/学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者PaaS平台。免费层包含5个组件和每月100美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web Baas服务，含1GB免费文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或本地使用偏好工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — 提供文档与资源以构建部署企业级数字创新方案，包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。1000用户内免费。
* [convex.dev](https://convex.dev/) - 响应式BaaS服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成语言、编辑器与基础设施的托管服务。Beta期间可用，正式版后将提供慷慨免费层。
* [Firebase](https://firebase.com) — 助力应用开发与运营。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测及远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需代码即可构建Flutter应用UI，集成Firebase。免费计划含完整UI生成器及免费模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能（替代数周开发）。
* [hasura.io](https://hasura.io/) — 扩展任意托管数据库，即时提供GraphQL API，安全支持Web、移动及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划含PostgreSQL、GraphQL(Hasura)、认证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件（联系人无限制），含自动预热功能。
* [paraio.com](https://paraio.com) — 后端API服务，支持灵活认证、全文搜索与缓存。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) — 2000月活用户免费无限推送通知，统一支持iOS/Android设备的API。
* [quickblox.com](https://quickblox.com/) — 即时消息、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置含认证、数据、文件、邮件API、模板等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用拖拽工具快速构建应用，点击定制数据模型，通过Apex代码扩展，强大API集成，企业级安全防护，前沿UI框架支持。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，结构化数据无限收发存储，每月最多2,500用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供认证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) — 含认证、配额、监控与分析功能的API管理。免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用自动化任务。每15分钟5次Zap/每月100次任务。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用与设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟更新/5个活跃自动化/webhook。
* [LeanCloud](https://leancloud.app/) — 移动后端。1GB数据存储/256MB实例/每日3K API请求/10K推送（API与Parse平台高度兼容）。
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月$5免费额度，适合托管应用、数据库等（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持15+种数据库和任意API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，提供可定制的移动/web应用。具有拖拽界面、离线支持、实时定位追踪及第三方服务集成功能
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理10倍速构建内部工具、定制用户旅程、数字体验、自动化流程、管理面板和运营应用的低代码平台
* [lil'bots](https://www.lilbots.io/) - 在线编写运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并团队共享。免费层包含完整API访问权限、AI编程助手和每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境（支持总用户数），每个应用0.5GB存储和1GB内存。免费层可使用Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 本地或云端的企业级Web开发PaaS，"个人环境"免费版允许无限制代码和最多1GB数据库
* [ReTool](https://retool.com/) — 高度可定制的低代码内部应用构建平台。能用JavaScript和API实现的功能都可在ReTool中完成。免费层每月支持5个用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。支持AI生成、可视化编辑和代码扩展，提供集成、认证、权限和审计日志等集中管控功能
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码业务应用框架。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，通过拖拽式构建器快速开发应用
* [UI Bakery](https://uibakery.io) — 支持JavaScript/Python/SQL深度定制的低代码Web应用开发平台。提供云端和自托管方案，5人以下团队免费使用
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。免费版支持1个用户每月100万次工作流活动（[德语版本](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费虚拟主机，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义 Web 服务器，支持 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机 + 免费短域名，支持 PHP、MySQL、应用安装器、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施烦恼并加速设置。
  * [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建 Web 和移动应用，免费版带 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) — 专注于 Web3 前端的去中心化虚拟主机平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) — 在 App Platform Starter 层级免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到 Web。仅限静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并实时公开分享。通过其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费虚拟主机，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持以及许多其他免费主机不提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费托管服务，包括行业最佳的控制面板和 50 多个免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费虚拟主机，带 Plesk 控制面板，支持 PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP 邮件，无限带宽，免费子域名，1000 MB 免费存储空间并可升级。
  * [Kinsta 静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，支持自定义域名和 SSL，每月 100 GB 带宽，260+ Cloudflare CDN 节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) — 支持 SFTP 访问上传和下载文件的虚拟主机，提供 PHP 支持。
  * [Neocities](https://neocities.org) — 静态站点，1 GB 免费存储空间和 200 GB 带宽。
  * [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，100 GB 数据和每月 100 GB 带宽。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种形式的虚拟主机（静态站点托管、基于容器的虚拟主机、WordPress 等多种托管应用一键安装）。一个免费虚拟主机（静态或容器化）和一个免费数据库，100 GB 带宽和每月 300 分钟构建时间。
  * [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。开发者和机构免费。不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等功能。
  * [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，提供免费 SSL、全球 CDN、私有网络、Git 自动部署，以及完全免费的 Web 服务、数据库和静态网页计划。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 面向前端开发者的静态 Web 发布。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) — 使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50 个页面，50 MB 存储空间，仅限 170+ 可用预定义主区块，无自定义字体、无网站图标且不支持自定义域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN 和每次 `git push` 后的唯一预览 URL。非常适合 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于 SaaS 的网站构建器 — 无限网站，70+ 区块，五个模板，自定义 CSS、网站图标、SEO 和表单。不支持自定义域名。
  * [Qoddi](https://qoddi.com) — 类似 Heroku 的 PaaS 服务，采用开发者中心的方法和全功能特性。免费层级支持静态资源、暂存环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) — 社区支持的免费 Flarum 托管，最多支持 250 名用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，两周容器 TTL，每个项目 500 MB RAM，SFTP — 1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，在其付费服务中提供三个静态站点的免费托管。
  * [Serv00.com](https://serv00.com/) — 3 GB 免费虚拟主机，每日备份（保留 7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），支持 MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等多种语言。
  - [Sevalla](https://sevalla.com/) — 旨在简化应用、数据库和静态站点部署和管理的托管平台 — 1GB 站点限制，100GB 免费带宽，600 分钟免费构建时间，每个账户 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全性的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多5个域名，含多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费动态DNS，可管理多种记录类型（CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户共享域名的[子域名注册](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪、无广告的免费动态DNS服务，域名数量不限。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) - 特殊DNS服务，当查询包含IP地址的主机名时直接返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - DNS自动备份与变更监控，免费版支持1个域名。
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

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷高效地将文件上传并存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费提供10GB类Amazon S3对象存储
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求的免费方案
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查询、任务系统、实时消息、工作队列、强大CLI和网页数据管理器。免费方案含5GB存储和每分钟60次API调用，支持2名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 面向实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点配置2核CPU、2GiB内存、8GiB存储，每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，支持20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代应用设计，覆盖物联网到AI领域
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费层支持25MB内存、1个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行数据、1个月版本历史，最多支持25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库能力及主流商业应用集成的工具。免费方案含无限用户、10个工作栈和每栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RUs)。
* [ChiselStrike的Turso](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费入门方案含9GB总存储、500个数据库、3个地域节点、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式、关系、自动REST API（支持类MongoDB查询）及高效多用户管理界面。免费方案允许3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点/17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，免费层含0.5GB总存储、1个项目、10个分支、无限数据库、主分支永不休眠（非主分支计算每月20小时活跃时间）。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时限，含10GB存储+每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2核vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个最大10MB的数据库，支持MySQL/MariaDB/MongoDB/PostgreSQL。
* [xata.io](https://xata.io) - 内置强大搜索分析的无服务器数据库。单一API、多类型安全客户端库，优化开发工作流。永久免费层满足爱好者需求，含3个Xata单位（单位定义见官网）。
* [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL构建的全栈低代码开发平台，面向JavaScript开发者提供无服务器BaaS。通过UI应用构建器快速开发Web应用，免费层含2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、永不休眠、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为本地主机提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费版支持最多5人加入的无限局域网级网络扩展。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码后提供wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到公网。无需安装和注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网网络。支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，免费版每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公网或内网（如localhost）。通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://子域名.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控Webhook。免费版每月10万次请求和10万次重试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端组成的端到端加密网络，提供桌面/移动/NA客户端，可通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理服务，将本地主机服务器暴露到公网。免费版隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行的服务到自定义公共URL，并通过访问控制保障安全。免费版支持单个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB存储且不限用户数
* [cacoo.com](https://cacoo.com/) — 实时在线图表工具（流程图/UML/网络图），免费版最多15用户/图表和25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5名用户，提供Jira集成、不限量视频会议/团队/会话
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费版及云存储高级版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪应用，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版提供5人团队不限量仓库/项目/文档，每月500分钟CI/CD时长和30,000分钟无服务器代码运行时长
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费支持3个项目（不限用户）和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 集成任务/讨论/里程碑/时间追踪/日历/文件/密码管理的平台，免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月提供3个公共看板和每个看板1次调研
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具，可通过关键词生成非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比两个GraphQL模式差异，标记为重大/非重大/危险变更
* [huboard.com](https://huboard.com/) — GitHub issues项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用全功能Bug报告SDK，免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内反馈收集与需求投票工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/)  — 多维度基础设施交互图表工具，免费版支持不限量私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费基础版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2名用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1名用户创建不限量看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具，提供网页版和Chrome插件，完全免费
* [Kumu.io](https://kumu.io/)  — 动态关系图谱工具，免费版支持不限量公开项目，学生可创建私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版不限成员，支持10MB文件上传和250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS，免费版支持10名用户/20个自定义字段/2GB存储/5分钟AI视频录制/每月20次自动化运行
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版提供3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板功能）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版提供100MB存储和5名用户，支持不限量工作区/会议/任务单/工时表
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3名用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公开项目免费，私有项目限2个（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台，免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版不限成员（文件上传5MB/问题数1000个）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克估算工具

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具。免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版包含无限制任务、迭代和工作区，且不设用户上限
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，涵盖看板、Scrum等多种流程。免费版支持无限用户，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版提供1个工作区（含无限任务与项目）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾与迭代规划工具。15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，提供付费升级选项
* [teleretro.com](https://www.teleretro.com/) — 融合破冰游戏、动图与表情的趣味回顾工具。免费版包含3次回顾会议（成员人数不限）
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台。个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理工具。免费版功能：5个活跃项目/每个项目5名用户/5MB文件上传/3个过滤器/1周活动历史记录
* [trello.com](https://trello.com/) — 看板式项目管理工具。免费版含无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测服务），免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 含项目管理、版本控制与问题追踪的产品设计平台。免费版提供无限项目/协作者和3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。最多3名用户免费，项目数量不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目与私有项目（3名用户免费）。含时间追踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌的独家项目管理方案。公开仓库、开源组织与非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版最多支持5名成员和5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告等功能，专为自由职业者设计）；[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售及客户支持打造的项目管理平台，特别适合外包与跨组织协作项目。免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简主义项目时间追踪与工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件，如APK构建、自定义ROM和修改等，但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全的异地备份托管服务。免费提供10 GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。免费提供10 GB存储空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。免费提供5 GB存储空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。免费提供高达10 GB存储空间。
* [sirv.com](https://sirv.com/) — 智能图像CDN，提供实时图像优化和调整大小。免费套餐包括500 MB存储空间和2 GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 完整的图像优化和CDN服务，全球1500多个节点。提供多种图像调整大小、压缩和水印功能。开源插件支持响应式图像、360度图像制作和图像编辑。免费月套餐包括25GB CDN流量、25GB缓存存储和无限转换。
* [cloudinary.com](https://cloudinary.com/) — 图像上传、强大处理、存储和交付，支持Ruby、Python、Java、PHP、Objective-C等多种库。免费套餐每月25积分，1积分等于1,000次图像转换、1 GB存储或1 GB CDN使用量。
* [Dropshare](https://dropsha.re) - 零知识文件共享。端到端加密文件共享，采用AES-256-GCM加密，客户端处理，服务器零数据访问。免费上传1GB以下文件，不收集数据。
* [embed.ly](https://embed.ly/) — 提供嵌入网页媒体的API、响应式图像缩放和网页元素提取。免费套餐每月5,000个URL，每秒15个请求。
* [filestack.com](https://www.filestack.com/) — 文件选择、转换和交付，免费250个文件、500次转换和3 GB带宽。
* [file.io](https://www.file.io) - 2 GB文件存储。文件下载一次后自动删除。提供REST API与存储交互，每分钟限速一个请求。
* [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图像、音频、视频等。
* [GoFile.io](https://gofile.io/) - 免费文件共享和存储平台，支持网页UI和API。无限文件大小、带宽、下载次数等。但文件十天无下载将自动删除。
* [gumlet.com](https://www.gumlet.com/) — 图像和视频托管、处理和CDN流媒体。免费套餐每月250 GB视频和30 GB图像。
* [image-charts.com](https://www.image-charts.com/) — 无限生成带水印的图像图表。
* [Imgbot](https://github.com/marketplace/imgbot) — Imgbot是一个友好的机器人，优化您的图像并节省时间。优化后的图像文件更小但质量不变。开源项目免费。
* [ImgBB](https://imgbb.com/) — ImgBB是无限图像托管服务。拖放图像到屏幕任意位置。每张图像限制32 MB。上传后获取直接链接、BBCode和HTML缩略图。登录查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限社交媒体封面图像生成API，无水印。
* [imgix](https://www.imgix.com/) - 图像缓存、管理和CDN。免费套餐包括1,000张原始图像、无限转换和100 GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图像优化服务，免费套餐支持1 MB以下文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储。
* [nitropack.io](https://nitropack.io/) - 自动加速网站，完整前端优化（缓存、图像和代码优化、CDN）。免费套餐每月5,000页面浏览。
* [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动所有云存储文件。基础套餐提供无限文件传输，最大文件250 MB，允许五个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM、APT、RubyGem和PyPI的托管包存储库。有限免费套餐和开源套餐可通过申请获得。
* [getpantry.cloud](https://getpantry.cloud/) — 简单的JSON数据存储API，适合个人项目、黑客马拉松和移动应用！
* [Pinata IPFS](https://pinata.cloud) — Pinata是上传和管理IPFS文件的最简单方式。友好的用户界面和IPFS API使其成为平台、创作者和收藏者的最佳IPFS固定服务。免费1 GB存储，并提供API访问。
* [placekitten.com](https://placekitten.com/) — 快速简单的服务，获取小猫图片作为占位符。
* [plot.ly](https://plot.ly/) — 图表和共享数据。免费套餐包括无限公开文件和十个私有文件。
* [podio.com](https://podio.com/) — 最多五人团队使用Podio，试用基础套餐功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 快速、美观的批量QR码生成器——无需登录、无水印、无广告。每次批量导出最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表、图形和QR码。
* [redbooth.com](https://redbooth.com) — P2P文件同步，最多两个用户免费。
* [resmush.it](https://resmush.it) — reSmush.it是免费的图像优化API。已在WordPress、Drupal和Magento等常见CMS上实现。reSmush.it是最常用的图像优化API，已处理超过70亿张图像，仍免费。
* [Shotstack](https://shotstack.io) - 大规模生成和编辑视频的API。免费每月最多20分钟渲染视频。
* [tinypng.com](https://tinypng.com/) — 压缩和调整PNG和JPEG图像的API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 处理文件上传和视频、音频、图像、文档编码。开源项目、慈善机构和学生通过GitHub学生开发者包免费。商业应用可免费试用2 GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图像即服务。提供图像CDN、媒体处理API和前端库自动化图像优化。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — Uploadcare提供基于尖端算法的媒体管道终极工具包。所有功能对开发者完全免费：文件上传API和UI、图像CDN和原始服务、自适应交付和智能压缩。免费套餐包括3,000次上传、3 GB流量和3 GB存储。
* [imagekit.io](https://imagekit.io) – 图像CDN，自动优化、实时转换和存储，几分钟内与现有设置集成。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – Internxt Drive是基于绝对隐私和严格安全的零知识文件存储服务。注册即获10 GB永久免费空间！
* [degoo.com](https://degoo.com/) – 基于AI的云存储，免费20 GB，三台设备，5 GB推荐奖励（90天账户不活动）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款简单易用的全球图片 CDN，60 秒内即可完成配置。支持 AVIF 和 JPEGXL 格式，提供 WordPress、Magento、React、Vue 等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于 GPT 的 AI 处理工具，可将 PDF、图片转换为 JSON、CSV、EXCEL 等结构化数据。每月免费赠送 30 次额度。
  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...
  * [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能。完全免费且不收集用户数据。
  * [Doradrop](https://doradrop.com) — Doradrop 是一个无广告的无限存储文件共享平台。无需登录即可通过安全链接即时分享文件。


**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代化响应式网站，非设计师也能轻松使用
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富主页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（无限制查看者）
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等多种格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG格式
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线调色板生成器，也可获取顶级配色灵感
* [coolors](https://coolors.co/) - 免费配色方案生成器
* [CMYK转潘通](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号
* [Branition](https://branition.com/colors) - 专为品牌设计精选的配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变色工具（支持RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者（最多2名编辑和3个项目）
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者+2名编辑+3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版权商用图库
* [Gradientos](https://www.gradientos.app) - 快速易用的渐变色选择工具
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) – 开源图标库（含数千图标），支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源
* [landen.co](https://www.landen.co) — 无代码建站平台，免费版可发布1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，直接在URL后添加尺寸即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画资源平台，提供Android/iOS/Web动画工具与插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成器合集（渐变色/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备实时同步
* [摹客iDoc](https://www.mockplus.com/idoc) - 强大的设计协作工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 40款免费T恤/服装模型生成器（适用于电商与社交媒体）
* [Modeldraw.com](https://modeldraw.com) — 完整图表工具平台（UML/系统架构/流程图/思维导图等），支持无限成员实时协作
* [Mossaik](https://mossaik.app) - 免费SVG生成器（含波浪/斑点/图案等多种工具）
* [movingpencils.com](https://movingpencils.com) — 完全免费的浏览器矢量编辑器
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具，支持SVG格式
* [pexels.com](https://www.pexels.com/) - 免版权图库，提供免费API支持关键词搜索
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器（兼容PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具，支持响应式设计与代码扩展
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成器（支持URL直链）
* [PNG转WebP工具](https://pngtowebpconverter.com/) - 浏览器内直接转换（无需上传，完全客户端处理）
* [Proto.io](https://www.proto.io) - 无代码交互原型工具，免费版包含1用户/1项目/5原型/100MB存储
* [resizeappicon.com](https://resizeappicon.com/) — 简易应用图标尺寸调整工具
* [Rive](https://rive.app) — 永久免费的动画创作平台，提供多平台运行环境
* [storyset.com](https://storyset.com/) — 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) — 产品模型生成工具（200个免费模板）

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题，支持实时自定义颜色、排版等
* [UI头像生成器](https://ui-avatars.com/) - 根据姓名首字母生成头像，URL可直接热链到网页/应用中，支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可完全免费使用且无需署名
* [unsplash.com](https://unsplash.com/) - 商业与非商业用途免费图库（无限制使用许可）
* [vectr.com](https://vectr.com/) — 网页端+桌面端免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画功能的可视化网站构建器，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化网站构建器，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形与图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，含持续更新的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式网页构建器，免费支持5个页面
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，支持1080p导出且无水印
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页构建器，免费支持1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌LOGO库，内置浏览器端矢量编辑工具
* [svgrepo.com](https://www.svgrepo.com/) - 免费商用SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击生成独特背景/图案/形状的免费设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，免费支持3个项目
* [vector.express](https://vector.express) — 快速转换多种矢量文件格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含开发者专用转换器）
* [okso.app](https://okso.app) - 极简在线绘图工具（支持导出PNG/JPG/SVG/WEBP）
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 含4400万+品牌的LOGO API（前1万次调用免费）
* [MDBootstrap](https://mdbootstrap.com/) - 免费Bootstrap/Angular/React/Vue UI套件（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) - 减少类名书写的Tailwind CSS组件库
* [Scrollbar.app](https://scrollbar.app) - 网页滚动条设计工具
* [css.glass](https://css.glass/) - 玻璃拟态CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) - Tailwind CSS渐变色库与生成器
* [iconify.design](https://icon-sets.iconify.design/) - 100+图标集统一搜索平台
* [NextUI](https://nextui.org/) - 免费现代化React & Next.js UI库
* [Glyphs](https://glyphs.fyi/) - 免费可编辑开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) - 可复制粘贴的优美开源组件库
* [HyperUI](https://www.hyperui.dev/) - 开源Tailwind CSS组件库
* [日历图标生成器](https://calendariconsgenerator.app/) - 一键生成全年份独特图标
* [图片背景模糊器](https://imagebgblurer.com/) - 为图片生成模糊背景框
* [Webstudio](https://webstudio.is/) - Webflow开源替代方案
* [Nappy](https://nappy.co/) - 黑人及棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) - Tailwind模板/组件/工具合集
* [Tailcolors](https://tailcolors.com/) - Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) - 免费在线绘图工具（支持本地保存）
* [Lunacy](https://icons8.com/lunacy) - 内置素材的免费图形设计工具
* [Flows](https://flows.sh/) - 产品引导互动平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目类别筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+完全可搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动截图] 探索来自非洲和世界领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发人员和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动截图] 精心挑选的最精美的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求。
  * [carto.com](https://carto.com/) — 从您的数据和公共数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样精准的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供地图、地理空间数据存储、分析、地理编码、路径规划等API和SDK，支持Web、桌面和移动端。每月免费提供两百万次基础地图瓦片、20,000次非存储地理编码、20,000次简单路径规划、5,000次行驶时间计算和5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK提供位置发现、场所搜索和情境感知内容。
  * [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线API。每天三千次免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天两千五百次免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月一万次免费查询。
  * [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析并共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐提供路径规划、路径优化、距离矩阵、地理编码和地图匹配服务。
  * [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理。
  * [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每天五千次免费请求。
  * [mapbox.com](https://www.mapbox.com/) — 地图、地理空间服务及展示地图数据的SDK。
  * [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新，提供四种地图样式。
  * [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能。
  * [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路径优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)。
  * [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap及其他开放地理数据源的地理编码API。每天两千五百次免费查询。
  * [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面的热度排序。
  * [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码。个人用户每月25,000次请求。
  * [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航及其他地理空间API。非商业用途和测试每天两千五百次免费地图浏览与API请求。
  * [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及瓦片托管服务。
  * [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者。
  * [Geokeo api](https://geokeo.com) - 支持语言校正等功能的地理编码API，覆盖全球范围。每天两千五百次免费查询。

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP运行环境，支持300+个PHP版本执行代码片段
* [Android Studio](https://developer.android.com/studio) — 官方Android开发IDE，支持全类型设备应用开发。开源免费，支持Windows/Mac/Linux/ChromeOS
* [AndroidIDE](https://m.androidide.com/) — 开源Android设备专用IDE，支持基于Gradle的真实应用开发
* [Apache Netbeans](https://netbeans.apache.org/) — 多语言集成开发环境和工具平台
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时模拟接口和文档生成（免费版支持无限量API蓝图和用户）
* [BBEdit](https://www.barebones.com/) - macOS知名可扩展文本编辑器，[免费版提供核心功能集](https://www.barebones.com/products/bbedit/comparison.html)
* [Binder](https://mybinder.org/) - 将Git仓库转为交互式笔记本的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的Java开发环境，全球数百万人使用，由Oracle支持
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理工具
* [Code::Blocks](https://codeblocks.org) — 免费C/C++/Fortran IDE，支持Windows/macOS/Linux
* [Cody](https://sourcegraph.com/cody) - 智能编程助手，支持代码补全/理解/修复，兼容VS Code/JetBrains
* [codiga.io](https://codiga.io/) — IDE内直接搜索复用代码片段的工具，个人和小团队免费
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类/搜索/标签
* [cocalc.com](https://cocalc.com/) — 云端协作计算平台，预装Python/LaTeX/Jupyter等数学科学工具
* [code.cs50.io](https://code.cs50.io/) - CS50课程专用在线VS Code环境
* [codepen.io](https://codepen.io/) — 前端开发者的代码游乐场
* [codesandbox.io](https://codesandbox.io/) — 在线React/Vue/Angular等框架开发环境
* [Components.studio](https://webcomponents.dev/) - 组件隔离开发工具，支持可视化测试和npm发布
* [Eclipse Che](https://www.eclipse.org/che/) — 基于Kubernetes的多语言云端IDE，[Red Hat托管实例](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据
* [ForgeCode](https://forgecode.dev/) — 集成主流AI模型的CLI编程助手，免费版支持基础功能
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux环境，免费版每日5次使用
* [GitPod](https://www.gitpod.io) — GitHub项目即时开发环境，免费50小时/月
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持多语言/终端/协作，免费版1GB内存10GB存储
* [JDoodle](https://www.jdoodle.com) — 60+语言在线编译器，免费API每日200次调用
* [jetbrains.com](https://jetbrains.com/products.html) — 专业IDE工具集，学生/教师/开源免费
* [jsbin.com](https://jsbin.com) — 前端网页开发实时预览工具
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速开发IDE
* [MarsCode](https://www.marscode.com/) - AI驱动的云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级JSON模拟API服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务
* [mockaroo](https://mockaroo.com/) — 测试数据生成工具，支持CSV/JSON/SQL格式
* [Mocklets](https://mocklets.com) - HTTP接口模拟器，终身免费
* [Paiza](https://paiza.cloud/en/) — 无配置浏览器开发环境，免费版每日4小时运行时间
* [Prepros](https://prepros.io/) - 实时编译Sass/Less等预处理语言的开发工具
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程环境
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发平台，支持主流NodeJS框架

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新定义并优化的代码编辑器。由Microsoft开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载适用于iOS和Android的Microsoft扩展）、桌面、Web和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
* [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/跟踪且自由许可的Microsoft编辑器VSCode二进制发行版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化您的编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) - Wave是一款开源、跨平台的终端，支持无缝工作流。内联渲染任何内容。保存会话和历史记录。基于开放Web标准。支持MacOS和Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，包含故事和测试功能。
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
* [WebDB](https://webdb.app) - 免费高效的数据库IDE。功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等。
* [Zed](https://zed.dev/) - Zed是一款高性能多人协作代码编辑器，由Atom和Tree-sitter的创建者开发。
* [OneCompiler](https://onecompiler.com/) - 免费在线编译器，支持70多种语言，包括Java、Python、C++、JavaScript。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 热力图、会话录制和收入追踪的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 追踪GitHub仓库14天以上流量历史的精美仪表盘。免费计划允许用户监控单个仓库的流量
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案(Snowflake)。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布工作流。单一事实来源的追踪计划、类型安全分析追踪库、应用内调试器和数据可观测性。免费提供两名工作区成员和1小时数据可观测性回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费层提供最多10K移动应用用户，包含深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。从数据仓库同步10个字段到60+个SaaS平台如Salesforce、Zendesk或Amplitude
* [Clicky](https://clicky.com) - 网站分析平台。免费计划支持一个网站3000次浏览分析
* [Databox](https://databox.com) - 通过整合其他分析和BI平台提供商业洞察。免费计划提供3个用户、仪表盘和数据源，包含1100万历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万次事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网络分析平台，提供托管服务(非商业用途免费)或自托管应用。旨在提供易用且有意义的隐私友好型分析方案。免费层适用于非商业用途，包含无限网站、6个月数据保留和每月10万页面浏览
* [Google Analytics](https://analytics.google.com/) - Google分析
* [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月100万页面浏览且无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析，每月最多3000次事件免费
* [heap.io](https://heap.io) - 自动捕获iOS或Web应用中的每个用户操作。每月最多1万次会话免费
* [Hotjar](https://hotjar.com) - 网站分析和报告。免费计划每日2000次页面浏览，100个快照/日(最大容量300)，可存储3个热图快照365天。无限团队成员。还包括应用内和独立调查、带截图的反馈组件。免费层允许创建3个调查和3个反馈组件，每月收集20条回复
* [Keen](https://keen.io/) - 数据收集、分析和可视化的定制分析。每月1000次事件免费
* [Yandex.Datalens](https://datalens.yandex.com/) - Yandex云数据可视化和分析服务。完全免费，无用户和请求数量限制
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) - REST和GraphQL的API分析。(每月最多50万次API调用免费)
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费入门计划包含1个网站、1个iOS和1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业洞察和分析。免费计划有限使用，包含100万用户许可
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接数据库、S3和API。即时导入、分析、图表化和共享数百万行数据。三个永久免费工作簿
* [sematext.com](https://sematext.com/cloud/) - 每月最多5万次操作免费，1天数据保留，无限仪表盘、用户等
* [Similar Web](https://similarweb.com) - 网站和移动应用分析。免费计划每个指标提供5个结果，1个月移动应用数据和3个月网站数据
* [StatCounter](https://statcounter.com/) - 网站访问者分析。免费计划分析最近500位访问者
* [Statsig](https://statsig.com) - 集分析、功能标记和A/B测试于一体的平台。每月最多100万计量事件免费
* [Tableau Developer Program](https://www.tableau.com/developer) - 创新、创建并定制Tableau。免费开发者计划提供Tableau Online个人开发沙盒许可，包含最新预发布版本
* [usabilityhub.com](https://usabilityhub.com/) - 在真实用户上测试设计和原型并追踪访问者。单个用户免费，无限测试
* [woopra.com](https://www.woopra.com/) - 50万次操作免费的用户分析平台，90天数据保留，30+一键集成
* [counter.dev](https://counter.dev) - 简单且隐私友好的网站分析。免费或捐赠付费
* [PostHog](https://posthog.com) - 完整产品分析套件，每月最多100万追踪事件免费。还包括每月250次回复的无限应用内调查
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。提供免费计划，开源项目可获赠个人订阅，并有开源版本
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的工具，捕捉用户真实使用情况
* [Beampipe.io](https://beampipe.io) - 简单注重隐私的网站分析。最多5个域名和每月1万页面浏览免费
* [Aptabase](https://aptabase.com) - 开源、隐私友好且简单的移动和桌面应用分析。支持Swift、Kotlin、React Native、Flutter、Electron等SDK。每月最多2万次事件免费
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新追踪计划并促进无缝协作。可部署到生产环境或添加到回归测试中而无需编写代码
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包括可嵌入分析组件和自动化机器人(Slack、Telegram和Webhooks)。免费计划包含每月1万次事件
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级注重隐私的Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标追踪。最多3个域名和每个域名600次会话回放免费
* [AppFit](https://appfit.io) - 全面的分析和产品管理工具，便于跨平台管理分析和产品更新。免费计划包含每月1万次事件、产品日志和每周洞察

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站与产品分析工具。免费方案包含每月3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie追踪且操作体验提升10倍。免费版支持每月3,000次事件。

**[⬆️ 返回顶部](#目录)**  

（注：根据中文排版规范：
1. 调整了标点符号使用（中文使用全角标点）
2. 将"Free plan"等短语意译为"免费方案/免费版"更符合中文习惯
3. 技术术语"cookieless"保留原文不翻译
4. 链接格式和Markdown标记完全保留原样
5. 补充了符合中文阅读习惯的间隔空行）

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：1,000次页面浏览/天，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：1,050次页面浏览/月，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（1,500次会话/月），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用额度
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**  

（注：根据中文技术文档惯例，将"Back to Top"译为"返回顶部"，并保持原Markdown锚点格式不变。同时调整了标点符号使用规范，如将"100 API requests/month"中的斜杠改为中文更常用的"每月100次API调用额度"表述方式）

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入1万美元以内免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件及开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月收入1万美元以内免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，为iOS、Android、React Native、Flutter、Unity或网页应用集成移动应用内订阅。每月收入1万美元以内免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月10,000次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新交易汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
* [CurrencyApi](https://currencyapi.net/) — 实物货币与加密货币实时汇率，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费微计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费版需标注来源。
* [Moesif API变现](https://www.moesif.com/) - 通过用量计费从API创收，可连接Stripe、Chargebee等。免费层级每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - iOS和Android应用内购与订阅全功能平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购和订阅托管后端（iOS和Android）。每月追踪收入2,500美元以内免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证及欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据API。私有用途每月300次请求，每分钟限10次。

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

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant 虚拟机的平台。

**[⬆️ 返回顶部](#目录)**  

（注：根据要求保留了所有格式标记、英文专有名词和技术内容，仅对描述性文字进行了本地化翻译，并调整了标点符号的用法以符合中文习惯）

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的平台
* [Hashnode](https://hashnode.com/) — 为开发者打造的零障碍博客系统
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费向世界分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站受众中建立活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可用 GitHub issues 管理博客评论、维基页面等！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"一个管理员在少数域名上完全控制行为与外观"。
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于AWS Lambda和Chrome的截图API。支持整页截图、捕捉时间及视窗尺寸控制。
* [microlink.io](https://microlink.io/) – 将任意网站转化为结构化数据：元标签标准化、精美链接预览、爬虫功能及截图服务。每日250次免费请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任何网站的截图。基于Google Cloud构建，支持高扩展性。每月100次免费截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图服务。支持任意URL截图，快速、免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度自定义的网站快照服务。每月100次免费快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（支持png/gif/jpg格式），包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费版每日500页次，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图与域名情报API服务。每月100次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac编译IOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是一款全托管移动应用持续集成/持续交付服务。您可以通过图形化界面工具进行构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) —— 一个能运行Linux和Windows 2k的极速x86虚拟机
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**  

（注：根据中文排版规范：
1. 破折号使用中文全角"——"并前后留空格
2. 技术术语保留英文原文
3. 链接格式完全保留
4. 调整了部分语序使其更符合中文表达习惯
5. 翻译了导航链接文本）

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限制的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理框架与隐私工具。免费版在有限访问量下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整数据隐私平台，包含同意管理、隐私请求处理（DSAR）及数据映射功能。免费版含核心同意管理功能，并为通过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成美观的图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网设备管理平台，免费开发者计划支持5台设备，含云端存储。提供移动端应用
* [Bricks笔记计算器](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于Twitter或博客展示
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的时间追踪与编码指标插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为社交媒体分享图片
* [Cronhooks](https://cronhooks.io/) - 定时或循环Webhook调度服务，免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月5次预订（含1个日历）
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费支持5个域名及20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞检测平台
* [Hook Relay](https://www.hookrelay.dev/) - 免运维的Webhook解决方案（含队列/重试/日志），免费版每日100次投递（14天留存+3个端点）
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的主机信息（ASN/ISP/位置等），含多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线Base64数据转换工具
* [newreleases.io](https://newreleases.io/) - GitHub/GitLab/NPM等平台新版本邮件/Slack/Webhook通知服务
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看图片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板+API动态生成，每月300份免费
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全代码
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥/密码生成工具
* [ray.so](https://ray.so/) - 代码片段美学图片生成器
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - HTTPS重定向管理服务，免费版10个源+10万次月访问
* [Renamer.ai](https://renamer.ai) — AI文件重命名工具（支持OCR/元数据提取），免费版每月15个文件
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具（支持GET/POST/认证），含请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/里程/车门控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉内容创作平台（代码片段/技术演示），免费版同时3个作品+5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时Feed订阅服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具（免费版每份10问题+100回复）
* [Tiledesk](https://tiledesk.com) - 全渠道对话机器人构建平台（网站/WhatsApp），免费版不限机器人数量
* [UUID生成器](https://newuuid.com/) - 即时生成UUID/GUID/CUID/NanoID等标识符
* [Versionfeeds](https://versionfeeds.com) — 定制软件更新RSS订阅（前3个订阅免费）
* [videoinu](https://videoinu.com) — 在线屏幕录像与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者编码/解码/数据处理工具集
* [Volume Shader BM](https://volumeshaderbm.org) — 基于WebGL的免费GPU基准测试工具

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
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材。
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF。
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG免费图标。
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供教程和调色板列表供游戏开发使用。
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D资源与音频、图标、瓦片集、游戏套件市场，也可用于作品集展示。
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建自定义游戏素材。
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型及PBR材质纹理资源。
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的免费2D、3D、音频和UI游戏素材。
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（多分辨率）、模型、HDRIs和笔刷，提供Blender等软件的免费导出插件。
* [Freesound](https://freesound.org/) — 采用不同CC许可的免费协作音效库。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [GitHub开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境和工具，开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试与可视化工具
* [RedHat开发者计划](https://developers.redhat.com) — 开发者专属的Red Hat产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，另提供免费电子书
* [SMS测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理模板/HTML主题/UI套件，加速应用开发
* [Web性能检测](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev工具集](https://smalldev.tools/) — 开发者多功能工具：编解码/代码压缩美化/测试数据生成等，提供愉悦界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，免费创建无限导入器（支持100MB文件）
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮
* [WrapPixel模板](https://www.wrappixel.com/) — 下载高质量免费/付费管理模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun工具集](https://utils.fun/en) — 基于浏览器计算的离线工具（水印生成/录屏/编解码/加密/代码格式化等），完全免费不上传数据
* [IT工具集](it-tools.tech) - 面向开发者和IT人员的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具：Markdown编辑器/代码压缩美化/二维码生成/OpenGraph生成器等
* [正则101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换等）
* [AdminMart模板](https://adminmart.com/) — 高质量免费/付费管理模板（支持Angular/Bootstrap/React/VueJs等）
* [Glob模式测试器](https://globster.xyz/) — 设计与测试glob模式的平台，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库还原
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（含实时转录/YouTube视频转字幕），适合短视频处理
* [最佳二维码生成](https://qrcode.best/) - 13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 免费版每月可手动发布1篇SEO优化文章，提升网络影响力
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集，一键生成网站政策/社交媒体内容/网页
* [MySQL可视化解释](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/)  - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互学习平台
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具（每月10张额度）
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）

**[⬆️ 返回顶部](#目录)**
