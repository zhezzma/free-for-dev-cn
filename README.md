# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务以做出明智选择仍需耗费大量时间。

本列表收录了提供免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本列表特别限定于基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的资源。我们虽喜爱所有免费服务，但仍希望保持主题相关性。这条界限有时较为模糊，因此本列表带有主观判断；若未采纳您的贡献，请勿介意。

该列表由1600多位人士通过提交Pull Request、评审、建议及实际工作共同完成。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来添加更多服务，或移除已变更或终止的服务。

[![追踪优质列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅限"即服务"类产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用），若为时间分段式免费则至少需持续一年。我们同时从安全角度评估免费层级——支持SSO的服务可接受，但将TLS功能限制在付费层级的服务不予收录。

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
  * [域名服务](#域名服务)
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
  * [其他分类](#其他分类)
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
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储。每周限制60小时
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、精简的dev-test环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RUs预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、认证/授权和自定义域名
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
       - 实例在[被视为闲置](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出口流量，x64-based VM限速50 Mbps，ARM-based VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封邮件发送
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
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），提供构建、部署和扩展应用所需的一切功能，让您无需操心"服务器相关事务"，可在任意云平台上运行
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO额外费用，包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上自动化部署。免费版支持单个开发者无限部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公共和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限制的公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公共和私有Git仓库（支持无限协作者）。由[Forgejo](https://forgejo.org/)驱动。静态网站托管通过[Codeberg Pages](https://codeberg.page/)实现。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)提供。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)完成。包含软件包和容器托管、项目管理及问题追踪功能
* [GitGud](https://gitgud.io) — 无限制的公共和私有仓库。永久免费。基于GitLab & Sapphire构建。不提供CI/CD功能
* [GitHub](https://github.com/) — 无限制的公共仓库和私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包和容器托管、项目管理及AI Copilot功能
* [gitlab.com](https://about.gitlab.com/) — 无限制的公共和私有Git仓库，最多5名协作者。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件构建的代码托管平台，包含CI、静态页面、项目页面和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支版本，提供对Mercurial的支持
* [ionicframework.com](https://ionicframework.com/appflow) — 用于开发Ionic应用的仓库和工具；同时提供Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是自由许可项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) — OSDN.net是为开源软件开发者提供的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是面向FOSS许可项目的免费开源代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) — 无限制的免费开源分布式版本控制系统。其独特之处在于基于完善的补丁理论，易于学习、使用和分发。解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源项目和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费私有项目（Git和Subversion），含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务。无限制的公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) — 为自由软件项目（GNU项目）提供协作式软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 为自由软件项目（非GNU项目）提供协作式软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。免费版每月提供500次请求。
  * [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
  * [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
  * [Abstract API](https://www.abstractapi.com) — 提供多种API套件，包括IP地理定位、性别检测和电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月提供50张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月提供50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题的根本原因分析。免费支持最多两个模型。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的即时服务器、CRUD和有状态模拟、代理和CORS管理，以加速集成和测试。免费计划每天50次请求，并提供公共仪表板/端点，任何拥有仪表板URL的人都可以查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费每月1,000积分，相当于1,000次并发请求。
  * [BrowserCat](https://www.browsercat.com) - 用于自动化、爬虫、AI代理网络访问、图像/PDF生成等的无头浏览器API。免费计划每月1,000次请求。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层每月100次请求，覆盖所有9个端点。
  * [Calendarific](https://calendarific.com) - 面向200多个国家的企业级公共假期API服务。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [Clarifai](https://www.clarifai.com) — 用于自定义人脸识别和检测的图像API。可训练AI模型。免费计划每月1,000次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用程序API平台，完全访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美AZ，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - 用于实验跟踪、模型生产管理、模型注册和完整数据谱系的MLOps平台，涵盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下订单和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限制为一个用户、数据连接、数据源和数据目标。还需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1,000次调用免费。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，将其组织为一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层限制为每天1,000次查询。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据在访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需代码即可将Airtable连接到任何应用或API。Postman式界面，用于在Airtable中运行API请求。预建集成数十个应用。免费计划每月100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括每月10GB存储和120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
  * [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计与建模工具，免费入门版支持2个数据库模型，每个模型最多10张表
* [DeepAR](https://developer.deepar.ai) — 跨平台增强现实人脸滤镜SDK，免费计划每月支持10名活跃用户(MAU)及最多4张人脸追踪
* [Deepnote](https://deepnote.com) — 新型数据科学笔记本，兼容Jupyter并支持云端实时协作。免费版包含无限个人项目、基础机型（5GB内存+2vCPU）以及最多3名编辑者的团队协作
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，用于构建相关应用
* [Doczilla](https://www.doczilla.app/) — 通过HTML/CSS/JS代码直接生成截图或PDF的SaaS API，免费版每月可生成250份文档
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的托管API，用于生成和私有存储PDF/截图，免费版每月400次生成额度
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 为移动端/Web/IoT应用提供的开源REST API后端，可连接任意SQL/NoSQL数据库/文件系统/外部服务，即时生成包含实时文档和用户管理的完整REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用，免费版提供20点积分
* [DynamicDocs](https://advicement.io) — 基于LaTeX模板的JSON转PDF API，免费版每月50次API调用并可使用模板库
* [Efemarai](https://efemarai.com) — ML模型与数据的测试调试平台，可可视化计算图，支持本地免费使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具，试用版包含2个项目（各10张表）
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 基于Web的免费HTTP客户端
* [Export SDK](https://exportsdk.com) — 提供SDK和无代码集成的PDF生成API，含拖拽式模板编辑器，免费版每月250页、无限用户和3个模板
* [file.coffee](https://file.coffee/) — 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）
* [Financial Data](https://financialdata.net/) — 股票市场与金融数据API，免费版每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) — 浏览器端JSON数据即时格式化/校验/比较/压缩工具
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API，免费Micro版每月500次交易检测
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的位置服务，免费版每月500次API查询
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，免费版每日2,000次请求
* [Glitterly](https://glitterly.app/) — 通过基础模板编程生成动态图像，提供RESTful API和无代码集成，免费版每月50张图像和5个模板
* [Hex](https://hex.tech/) — 面向笔记本/数据应用/知识库的协作数据平台，免费社区版支持5个项目
* [Hook0](https://www.hook0.com/) — 开源Webhooks即服务(WaaS)平台，免费版每日100次事件分发并保留7天历史记录
* [Hoppscotch](https://hoppscotch.io) — 免费、快速、美观的API请求构建器
* [huggingface.co](https://huggingface.co) — 构建/训练/部署Pytorch/TensorFlow/JAX的NLP模型，免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) — 使用声明式API构建PDF报告，14天免费试用含50份单页报告及调色板/字体定制功能
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个云平台（如Exact Online/Twinfield等），含数据复制交换功能，开发者免费版有数据量限制
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费版同一IP限45次/分钟
* [ipbase.com](https://ipbase.com) — IP地理定位API，永久免费版每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费版每日1,000次请求
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，免费1,000次请求
* [IPLocate](https://www.iplocate.io) — IP地理定位API，免费版每日1,000次请求，含代理/VPN/主机检测、ASN数据、IP关联企业等功能，并提供免费可下载的IP与国家/ASN映射数据库
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务，可免费下载LITE数据库进行本地查询
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP定位API，免费版每月5万积分，另提供500次免费WHOIS查询
* [ipapi](https://ipapi.co/) — Kloudend公司基于AWS构建的IP定位API，免费版每月3万次查询（每日1k次）
* [ipapi.is](https://ipapi.is/) — 开发者打造的精准IP定位API，具备顶级主机检测能力，免注册试用1,000次查询
* [IPinfo](https://ipinfo.io/) — 快速精准的免费IP数据API（每月5万次），提供地理定位/企业/运营商等详细信息，所有付费API可免费试用
* [IPQuery](https://ipquery.io) — 无速率限制和收费的开发者无限IP API
* [IPTrace](https://iptrace.io) — 极简IP地理定位API，每月免费5万次查询
* [JSON2Video](https://json2video.com) — 通过API或无代码方式自动化制作营销视频的编辑平台
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址，免注册免费使用，支持CORS跨域请求，适用于IP变更监控服务

  * [JSONing](https://jsoning.com/api/) — 通过JSON对象创建模拟REST API，并可自定义HTTP状态码、请求头和响应体
* [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看器、编辑器和验证工具。支持AI辅助修复、树状视图、表格视图、12+种编程语言的代码生成，可将JSON转换为CSV/XML/YAML/Properties等格式
* [konghq.com](https://konghq.com/) — API市场及强大的私有/公有API工具集。免费版功能受限，如监控、告警和支持服务
* [Kreya](https://kreya.app) — 免费gRPC图形客户端，支持通过服务反射导入gRPC接口
* [Lightly](https://www.lightly.ai/) — 使用优质数据提升机器学习模型性能。免费提供1000个样本数据集
* [LoginLlama](https://loginllama.app) - 登录安全API，可检测欺诈登录行为并通知用户。每月免费处理1000次登录
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器验证邮箱有效性的服务。免费版每月可验证100次
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时与历史数据。永久免费版支持每日100次API调用
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供基于多模型机器学习融合的精准天气预报。免费版每日400次调用
* [microlink.io](https://microlink.io/) – 将任意网页转化为结构化数据，支持元数据标准化、美观链接预览、内容抓取和截图服务。每日50次免费请求
* [Mindee](https://developers.mindee.com) – 基于计算机视觉的OCR平台，可自动化文档处理流程。免费版每月处理500页
* [Mintlify](https://mintlify.com) — 现代化API文档标准，提供美观易维护的UI组件、内置搜索和交互式调试台。免费支持1名编辑者
* [MockAPI](https://www.mockapi.io/) — 快速创建模拟API接口的工具，适用于原型设计/测试/学习。免费版每个项目限2个资源
* [Mockfly](https://www.mockfly.dev/) — API模拟与功能开关管理工具。免费版每日500次请求
* [Mocki](https://mocki.io) - 无需注册即可创建与GitHub仓库同步的模拟API
* [Mocko.dev](https://mocko.dev/) — 云端API代理与流量监控服务，可选择性模拟特定端点
* [Mocky](https://designer.mocky.io/) - 自定义HTTP响应模拟工具，[开源版本可用](https://github.com/julien-lafont/Mocky)
* [Mock N Roll](https://mocknroll.me/) - 前端开发与测试专用API模拟服务，[项目仓库](https://github.com/haerulmuttaqin/mocknroll-web)
* [microenv.com](https://microenv.com) — 生成Docker容器化的模拟REST API
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 多节点IP出口检测工具，适用于测试Control D等DNS分流工具
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具，每日免费查询
* [News API](https://newsapi.org) — 新闻搜索API（24小时延迟），开发者每日100次免费查询
* [numlookupapi.com](https://numlookupapi.com) - 电话号码验证API，每月100次免费请求
* [OCR.Space](https://ocr.space/) — 支持图片/PDF解析的OCR API（25,000次/月免费，文件上限1MB）
* [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化OpenAPI 3规范设计工具
* [parsehub.com](https://parsehub.com/) — 动态网站数据抓取工具，免费支持5个项目
* [Parseur](https://parseur.com) — AI驱动的PDF/邮件解析器，每月20页免费额度
* [PDFBolt](https://pdfbolt.com) - 开发者优先的PDF生成API（每月500次免费转换）
* [pdfEndpoint.com](https://pdfendpoint.com) - HTML/URL转PDF服务，每月100次免费转换
* [PDF-API.io](https://pdf-api.io) - 支持可视化模板编辑器的PDF自动化API（免费版1个模板/100次生成）
* [Pixela](https://pixe.la/) - 免费的时间序列数据库服务，支持热力图/折线图可视化
* [Postman](https://postman.com) — 知名API开发协作平台，基础功能永久免费
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST/GraphQL
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化平台（免费版含5个工作流+500分钟计算资源）
* [Preset Cloud](https://preset.io/) - Apache Superset托管服务（5人以下团队永久免费）
* [PromptLoop](https://www.promptloop.com/) - AI网页抓取工具（每月1000点免费额度）
* [ProxySentry](https://proxysentry.io/) - 住宅代理/VPN检测API（rapidapi.com提供每月1万次免费调用）
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API清单
* [Reducto](https://reducto.ai) - 非结构化文档转JSON工具（1.5万点免费额度）
* [Rapidapi](https://rapidapi.com/) - 全球最大API枢纽平台
* [Rendi](https://rendi.dev) - FFmpeg云端API服务（免费版含月度处理配额+4vCPU）

  * [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应您的AJAX请求。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分。
* [ROBOHASH](https://robohash.org/) - 从任何文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 用于抓取的简单HTTP代理API。匿名抓取，无需担心限制、封锁或验证码。每月前100次成功抓取免费，包括JavaScript渲染（联系支持可获取更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API和免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度。
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的任何视觉或文本变化并进行数据提取。免费计划每月允许最多5个URL。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发您的Webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 立即将任何Google表格转换为RESTful API。提供免费计划，每张表格包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API可让您截取屏幕截图、审核网站、TLS扫描、DNS查询、测试TTFB等。免费计划每月提供100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等结构化JSON结果。免费计划每月包含100次成功API调用。
* [SmartParse](https://smartparse.io) - SmartParse是数据迁移和CSV转API平台，提供省时省钱的开发者工具。免费套餐每月包含300个处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件后即可通过API快速访问数据，加速应用开发。免费计划包含2个API和每月2,500次API调用。无需信用卡。
* [YourGPT CSV to JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集合，包括SQL格式化器和验证器、SQL正则表达式测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS。免费计划提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据您的输入自动生成图像。免费计划每月可创建最多50张图像。
* [Svix](https://www.svix.com/) - Webhook即服务。每月免费发送50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察API，具备组织研究成果的能力。免费套餐每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天免费1,000次请求。提供IP地址的位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io Weather API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。提供准确及时的天气预报，覆盖全球，包含历史数据和天气监测解决方案。
* [Treblle](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。具备高级API日志聚合、可观测性、文档和调试功能。所有功能免费，但免费套餐每月限制250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币和加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的VAT号码验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包括当前状况、每小时和每日预报及天气警报。集成AI模型和ML系统分析多个天气模型以提高预报准确性。免费套餐每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 简单的Web抓取API，内置解析、Chrome渲染和代理。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建更好的模型。仅限个人项目的免费套餐，包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月25,000个token（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 具备无头浏览器、住宅IP和透明定价的Web抓取API。每月1,000次免费API调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，访问全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API和邮政编码验证。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，用于设计、构建和部署API到边缘。几分钟内为任何API添加API密钥认证、速率限制、开发者文档和货币化功能。原生支持OpenAPI，完全可编程，使用Web标准API和Typescript。免费套餐最多10个项目、无限生产边缘环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线比较两个JSON数据结构差异的工具，帮助您快速定位JSON数据中的不同之处。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速且可靠的IP地理定位API，适用于商业和非商业用户，支持JSON格式。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
* [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT等构建系统的默认制品仓库。
* [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
* [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
* [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
* [repsy.io](https://repsy.io) — 1GB免费私有/公有Maven仓库。
* [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
* [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目免费。
* [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议预约工具，免费版支持1个日历连接和无限会话，提供桌面端和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台，具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时估算工具，无限成员免费使用，通过故事点快速规划迭代
* [Telegram](https://telegram.org/) — 高速可靠的消息与通话工具，企业用户可享受大群组、用户名系统、桌面客户端和强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具集，免费使用所有基础功能，支持每工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具，支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作平台，集成IDE配对编程、终端共享、音视频通话及屏幕共享，小团队免费
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，含协作插件提升效率，免费版每月10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，单人用户免费，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具，免费无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 虚拟社交空间平台，可定制化场景支持10人同时免费使用
* [gokanban.io](https://gokanban.io) - 免注册语法化看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制虚拟空间会议工具，支持8人同时免费使用
* [GitDailies](https://gitdailies.com) - GitHub活动日报系统，含提交可视化、同伴认可和自定义提醒，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具，25人以下团队免费使用公私聊房间
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作编辑器，免费无限笔记但[协作人数受限](https://hackmd.io/pricing)
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能通讯工具
* [HeySpace](https://hey.space) - 集成任务管理、聊天、日历和视频通话的平台，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — AR视频远程协助工具，基础版免费（无分析/加密/支持）
* [ideascale.com](https://ideascale.com/) — 创意收集投票平台，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 企业内部门户平台，10人以下免费
* [Keybase](https://keybase.io/) — 开源Slack替代方案，为各类组织提供安全通讯
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案
* [/meet for Slack](https://meetslack.com) - 在Slack中通过/meet指令直接发起Google会议，完全免费
* [Linkinize](https://linkinize.com) — 团队书签管理工具，免费版含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队协作平台
* [Lockitbot](https://www.lockitbot.com/) — Slack内资源预约系统，免费支持2个资源
* [MarkUp](https://www.markup.io/) — 网站/PDF/图片批注反馈工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名和2FA的密码管理器，全平台可用
* [Visual Debug](https://visualdebug.com) - 提升开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 企业级在线白板工具，提供免费版
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集管理工具
* [Notion](https://www.notion.so/) - 集成笔记、任务与数据库的All-in-one协作平台
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库工具，免费版支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 线上面试平台，集成视频聊天、画板和可编译的代码编辑器
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 团队时间追踪工具，免费版支持10名用户
* [PageShare.dev](https://www.pageshare.dev) - GitHub PR视觉评审工具，免费每月10个页面/100MB存储
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，提供直观统计界面
* [Pumble](https://pumble.com) - 永久免费团队聊天应用，支持无限用户和完整历史记录

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、音视频通话，并易于与其他服务集成。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整历史记录。
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB空间。
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告。
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作。
* [Slab](https://slab.com/) — 现代化团队知识管理服务，免费版支持最多10名用户。
* [slack.com](https://slack.com/) — 无限用户免费使用（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页聚合平台，可追踪上游服务商状态。
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记。免费版支持3个面板/无限用户/1GB存储。
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
* [StreamBackdrops](https://streambackdrops.com) — 免费高清视频会议虚拟背景库，适用于Zoom/Teams/Google Meet等平台，无需注册。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点连接，无需插件或注册。
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum流程，含时间追踪功能。免费版支持5用户+3项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程，含完整的远程团队休假管理功能。5人以下团队免费。
* [Tefter](https://tefter.io) - 书签管理应用，深度集成Slack。开源团队免费使用。
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板实时共享工具，开发者端到端加密协作无需登录。
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪软件，支持Jira/Trello/Asana等项目管理工具集成。
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion替代方案），免费版含无限用户/10GB存储/10GB音视频流量。
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用全功能项目管理应用。
* [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理化。提供免费无限版，合格团队可享折扣。
* [tldraw.com](https://tldraw.com) — 免费开源白板绘图工具，支持智能箭头/吸附/便签/SVG导出，含多人协作模式。官方VS Code扩展免费可用。
* [BookmarkOS.com](https://bookmarkos.com) - 一体化书签/标签/任务管理器，提供可定制云桌面及文件夹协作功能。
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队交流创意
* [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR。全员免费，非营利组织可享Nano级免费套餐。
* [whereby.com](https://whereby.com/) — 一键式免费视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建多步骤自动化和内部应用。免费用户最多创建3个非高级工作区。
* [vadoo.tv](https://vadoo.tv/) — 简易视频托管营销平台，单次点击上传。免费版提供10个视频/1GB存储/10GB月流量。
* [userforge.com](https://userforge.com/) - 互联人物角色/用户故事/场景映射工具，保持设计与开发同步。免费版支持3个角色+2名协作者。
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频配额且含品牌水印播放器。
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务，支持5GB内无限文件分享给任意数量接收方。
* [Wormhole](https://wormhole.app/) - 端到端加密文件传输（24小时内有效），5GB以上文件采用P2P直传技术。
* [zoom.us](https://zoom.us/) — 安全视频网络会议工具，免费会议限时40分钟。
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具，免费版含1万条可搜索记录和5GB存储，同时提供可自托管开源版本。
* [robocorp.com](https://robocorp.com) - 自动化运维开源技术栈，免费体验云功能并实现简单自动化。每月240分钟机器人时长+10次助手运行+100MB存储。
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版含完整消息历史/无限私聊/1个群组/1GB存储。
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，10人以下团队永久免费，含无限公私对话/可搜索历史/无限语音消息/10个集成/20GB团队存储。
* [ruttl.com](https://ruttl.com/) — 全能数字反馈工具，支持网站/PDF/图片批注审阅。
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台，免费版含无限频道/剧本/看板/用户/10GB存储。
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，可直接在实时网站/Web应用/图片/PDF/设计文件上标注任务。
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
* [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人参与）。
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人参与）。
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（从产品文档到内部知识库/API文档），开发者个人免费版。
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面，无需订阅即可发送照片视频等大文件。

  * [Revolt.chat](https://revolt.chat/) — 一个尊重用户隐私的开源[Discord](https://discord.com/)替代方案。免费提供Discord大部分专有功能。Revolt是一款集安全、快速于一身的一站式应用，且完全免费。所有功能均可免费使用。与主流聊天应用不同，它还支持（官方与非官方）插件。
  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案。首年每月赠送10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴平台，支持客户端加密、多标签粘贴、API接口、高亮编辑器等特性。
  * [SiteDots](https://sitedots.com/) - 直接在网站上收集网站项目的反馈意见，无需模拟、画布或变通方案。免费版功能完整可用。

  * [Cushion](https://cushion.so/) - 专为高效分布式小团队设计的Slack异步协作替代方案。免费版支持30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal网站托管服务。开发者免费套餐可用，同时提供免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区空间包含5个用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月带宽和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 小型项目免费套餐。基于GraphQL的CMS，基础版每月10万次API调用。
* [Directus](https://directus.io) — 无头CMS。完全免费开源的内容管理平台，支持本地或云端部署，无功能限制。
* [FrontAid](https://frontaid.io/) — 将JSON内容直接存储于Git仓库的无头CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，开发者计划包含2个用户、无限项目（每个项目2个环境）、500个内容项、2种语言的交付/管理API及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头CMS。社区计划为单个用户提供无限API调用、文档、自定义类型、资源和多语言支持。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，每个项目免费包含无限管理员用户、3个非管理员用户、2个数据集、50万次API CDN请求、10GB带宽和5GB资源。
* [sensenet](https://sensenet.com) - API优先的无头CMS，开发者计划包含3个用户、500个内容项、3种内置角色、25+5种内容类型及完整REST API支持。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。开源Git支持的无头CMS，免费基础版支持2个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，可对接任何CMS/API/数据库构建无头网站。
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL原生无头CMS，实现全渠道内容交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。基于事件溯源的开源API/GraphQL优先CMS。
* [InstaWP](https://instawp.com/) - 秒级WordPress站点部署。免费套餐含5个活跃站点、500MB空间，48小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 开发者与营销人员适用的无头CMS，社区版包含管理API、2500个资源及250GB/月流量。
* [WPJack](https://wpjack.com) - 5分钟内在任何云平台部署WordPress！免费套餐含1台服务器、2个站点及无限定时任务。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，无需信用卡即可获得自定义域名。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的API和路由，实现深度集成。免费方案包含3个项目、5张数据表和1个Google插件。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody支持多种LLM选择（包括本地推理）、兼容各类IDE、适配所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动补全（使用Starcoder 16b）。
* [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，商业友好型免费版包含3个切面功能。
* [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限量的行内补全功能。
* [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习的洞察，帮助开发者更快构建更优质软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接粘贴使用的React代码。每次生成至少消耗30积分，初始赠送1200积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1个用户和1个代码仓库（100MB存储空间）
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，免费版仅限3分钟会话（测试环境：Vista系统下的MS IE 9，分辨率1024 x 768）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（包括自托管版）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构同样免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版支持无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [codescene.io](https://codescene.io/) - 根据开发人员代码交互方式优先处理技术债务，可视化团队耦合度等组织因素。开源项目免费
* [CodSpeed](https://codspeed.io) - 在CI流水线中自动化追踪性能。通过精准一致的指标在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷/安全漏洞/性能及API问题。实时分析支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源项目及30人以下私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务（免费）
* [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源项目免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化头号静态代码分析器，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — 针对GitHub提交的代码质量评论，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。提供框架迁移/带修复的代码分析/大规模代码转换，让开发者专注创新而非维护旧代码。开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公开或个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub PR和提交差异分析，公开仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析。开源项目和5人以下组织免费
* [webceo.com](https://www.webceo.com/) — SEO工具集（含代码验证和多设备测试）
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖项更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，提供强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — 将自动化网页无障碍测试融入开发流程。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，加速迭代周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台创建标准化应用环境，内置持续部署自动化和高级可观测性。免费计划支持1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 数分钟内完成应用和基础设施的云部署。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层允许5个域名和2个用户无限次应用部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD（原生/混合开发）。免费版每月200次构建（单次10分钟），支持2名成员。开源项目可获45分钟构建时长、+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时长。测试分析免费开发者层包含10万次测试/月，开源项目有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 完整免费计划，包含GitHub/GitLab/BitBucket仓库托管CI/CD所有功能。支持多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟免费时长，无限协作者，私有项目30个并行任务，开源项目8万分钟构建时长。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建、1个环境、共享服务器、无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
* [drone](https://cloud.drone.io/) - 支持x86/Arm多架构持续交付流水线（32位/64位）
* [LayerCI](https://layerci.com) — 全栈项目CI。提供5GB内存+3CPU的全栈预览环境。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过专属URL访问，支持无限公开/私有仓库，最大2GB VM规格。
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.com) — GitHub工作流自动化与合并队列，公开仓库免费
* [Make](https://www.make.com/en) — 通过UI连接应用实现工作流自动化，支持主流API。公开GitHub仓库免费，免费层含100Mb存储、1000次操作和15分钟最小间隔。
* [Shipfox](https://www.shipfox.io/) - 2倍速运行GitHub Actions，每月3000分钟免费构建时长。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、OPA持续合规、SAML 2.0单点登录，每月200分钟公共工作池时长。
* [microtica.com](https://microtica.com/) - 预置基础设施组件的初创环境，免费AWS应用部署及生产负载支持。免费层包含1个环境（AWS账户）、2个Kubernetes服务、每月100分钟构建和20次部署。
* [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、多机任务分发和自动化E2E测试拆分加速CI中的monorepo。免费计划支持30名贡献者，含15万点额度。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月3000分钟免费时长，无需信用卡。
* [Terramate](https://terramate.io/) - Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台，2个用户以下全功能免费。
* [Terrateam](https://terrateam.io) - 基于GitOps的Terraform自动化，支持PR驱动工作流、自托管运行器项目隔离和分层有序操作。3个用户以下免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户免费版每周有有限检查点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接在浏览器中测试您的Android和iOS应用。免费版包括每月两个并发会话，每次30分钟使用时间。应用大小无限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习，无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"监控即代码"工作流和Playwright。开发者享有慷慨的免费层。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否对给定域名启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器内测试。Cypress测试运行器始终免费开源，无限制。Cypress仪表板对开源项目免费，最多5个用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5个测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在问题影响客户前发现弱点。Gremlin Free支持对最多5个主机或容器执行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费计划支持最多4个并发节点/10次网格启动/4,000测试分钟每月
  * [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过在任何CI提供商上优化测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费计划支持最多10分钟测试文件，开源项目无限免费。
  * [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费每月模拟最多50个并发用户60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，7,000快照/月。
  * [octomind.dev](https://www.octomind.dev/) - 使用AI辅助测试用例生成自动生成、运行和维护Playwright UI测试
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析及优化工具。免费计划每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费层包含所有核心功能，500MB附件存储和最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、flutter、react-native、web、ionic等多种应用框架。免费版限iOS和Android各10个测试，但包含付费版大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费层最多创建10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制测试唯一URL向开发者展示如何复现错误。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费版包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台，支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook，支持转发至本地环境或历史记录回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，集成工具链、组件和设计系统可加速迭代、优化设计并简化开发流程。无限项目享有五年免费维护期。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络与服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 通过专属URL调试webhook和HTTP请求，集成阶段完全免费，可创建无限URL并获取建议。
* [webhook.site](https://webhook.site) - 使用自定义URL验证webhook、外发HTTP请求或电子邮件，临时URL与邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的便捷工具，目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改证明的开源平台，可公证代码、文件、目录或容器
* [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言的加密分析编解码工具，如同密码学瑞士军刀。所有功能免费无限制，支持开源自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略来防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby/JavaScript/Python/PHP/Elixir/Rust/Java(.NET/Go/Elm/Docker/Terraform/Git子模块/GitHub Actions)的依赖项
* [DJ Checkup](https://djcheckup.com) — Django网站安全漏洞自动扫描工具（基于Pony Checkup二次开发）
* [Doppler](https://doppler.com/) — 支持同步到多云的通用密钥管理器，免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享.env文件。免费支持3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动检测并修复源代码中的密钥泄露问题，支持350+种密钥类型扫描。25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — 网页应用/服务器/网络漏洞扫描服务，每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境的全流程密钥管理。5名开发者内免费
* [Internet.nl](https://internet.nl) — 测试IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
* [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 检测并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 无需注册即可快速检测OpenAPI/Swagger接口安全性的免费工具
* [pixee.ai](https://pixee.ai) - 免费GitHub安全机器人，自动提交PR修复Java代码漏洞（即将支持其他语言）
* [pyup.io](https://pyup.io) — 监控Python依赖项安全漏洞并自动更新。1个私有项目免费，开源项目不限量
* [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，审计OWASP风险项
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告服务
* [seclookup.com](https://www.seclookup.com/) - 通过API增强SIEM中的域名威胁指标检测，提供5万次免费查询额度[点击获取](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 检测修复开源依赖项漏洞。开源项目无限次扫描，私有项目每月200次限额
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案，含应用和防火墙CLI工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL网页服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次SCA扫描，在发布前检测修复安全威胁
* [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化扫描应用漏洞，单个应用支持无限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站的免费安全检测、防病毒及WAF防火墙，注册用户可获邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置/证书/链等，不限于HTTPS
* [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，免费支持3个用户
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版每周XSS检测
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密与自动密钥管理，免费版每月100万次加密配额
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全等数字安全解决方案，250用户内免费
* [Vulert](https://vulert.com) - 持续监控开源依赖项漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万条在GitHub公开仓库、代码片段、议题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供的精细化授权服务。免费额度包含1000月活用户和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK支持。免费额度包含1000月活用户和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式单点登录服务。免费方案包含2.5万月活用户、无限社交登录连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO功能。包含完整前端组件。免费支持5000月活用户。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持任意项目的无限身份提供商集成（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)服务，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。精细化权限控制，免费支持100个月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA服务，提供预构建的登录/注册/用户资料等UI组件。免费支持1万月活用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100个用户和1个领域。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先通行密钥认证。无限月活用户免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)服务。免费支持10个用户，包含全认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费支持7500月活用户。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN/网站/SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证，最快仅需数分钟。
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权服务。免费支持100个月活用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个企业应用和5个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含全安全功能，无限团队成员，200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC权限模型，提供实时更新和无代码策略UI。免费1000月活用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理服务。免费领域支持1000用户和10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO功能。免费方案包含无限月活用户、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化认证与反欺诈平台，提供API和SDK支持。免费方案包含1万月活用户、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案，5分钟快速入门。可免费自托管，或选择含1万免费月活用户的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，在快速上手的同时保持用户体验可控。免费支持5000月活用户。
* [Warrant](https://warrant.dev/) - 企业级托管授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费2.5万次认证请求，包含全安全功能（OTP/无密码登录/策略等功能无付费墙）。
* [PropelAuth](https://propelauth.com) - 通过少量代码即可支持任意规模企业客户，免费200用户和1万封事务邮件（含"Powered by PropelAuth"水印标识）。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份的全周期方案（含认证与授权）。免费5000月活用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万月活用户。提供邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用测试首选平台。免费方案包含：一个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费方案：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案（含DevOps功能）。免费提供100台设备配额，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费管理无限设备，免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器，每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理，免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具，免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台，免费套餐支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP服务器，免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨可用区的多节点部署
* [courier.com](https://www.courier.com/) - 统一推送API，集成应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐每月10,000条消息
* [Engage](https://engage.so/) - SaaS客户互动与自动化全栈工具（邮件/推送/SMS/产品导览/横幅等）。每月免费支持1,000名活跃用户
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月10,000条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理。永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) - 开发者通知基础设施。单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐每月10,000条消息
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含10,000条通知/月 + 100条短信和自动语音呼叫
* [Novu.co](https://novu.co) - 开源通知基础设施。统一管理邮件/SMS/站内信/应用内/推送等渠道，免费套餐每月30,000条通知（保留90天）
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持100个同时连接和200,000条消息/天
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持20个同时连接和100,000个事件/天
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务。全球多区域部署（AWS/GCP/Azure），永久免费套餐含4KB消息大小、50个活跃连接和5GB数据/月
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含1,000分钟会议时长/月
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送次数不限
* [httpSMS](https://httpsms.com) - 通过Android设备作为SMS网关收发短信。免费套餐每月200条消息
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级部署的可扩展安全MQTT代理。永久免费100万会话分钟/月（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API/Webhooks轻松集成，免费套餐每天50条消息（限1设备和1应用）
* [SuprSend](https://www.suprsend.com/) - API优先的通知基础设施，统一发送事务性/定时/互动通知。免费套餐每月10,000条消息，支持摘要/批量/多渠道/租户等高级功能
* [SMSGate](https://sms-gate.app) - Android™短信网关云服务，通过设备路由收发短信。完全免费的云服务（建议每日超10,000条消息时通知以维持服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费版，每日200MB日志存储，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储空间，15天存储保留期和7天日志检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志存储，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截功能。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可实现即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量：无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，提供初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键值免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层上限1万条字符串源），自托管无限量
* [Free PO editor](https://pofile.net/free-po-editor) — 全员免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持Web和移动端本地化。自带LLM，或通过Lingo.dev管理的本地化引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时指标免费版，APM代理限制为一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版支持1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志存储）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费版包含10个监控器（3分钟检查频率）和状态页面功能
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器，无限制用户/仪表盘/告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API及网络检查/1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限次按需扫描、无限用户、无限存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费版含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控器，推荐注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟检查间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — 通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。24小时数据保留的免费版
* [fivenines.io](https://fivenines.io/) — 实时仪表盘与告警的Linux服务器监控 — 永久免费支持最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 集成指标与日志的可组合观测平台。免费版：3用户、10个仪表盘、100条告警，Prometheus和Graphite指标存储（1万序列，14天保留），Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。免费支持最多20个检查项
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack与Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费方案
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且无订阅数量与团队限制
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费支持最多5个监控器
* [linkok.com](https://linkok.com) - 在线死链检测工具，小网站（100页内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - 提供应用与技术栈全景可视化的观测平台，支持大规模监控与诊断问题。开发者社区永久免费方案包含：100万日志事件监控、2台主机的基础设施监控与应用性能监控
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。"永久免费"方案提供HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），含2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — 开源实时指标收集工具。持续发展的产品，GitHub可获取
* [newrelic.com](https://www.newrelic.com) — 帮助工程师构建更完美软件的可观测平台。从单体到无服务器架构，可检测全栈软件并进行分析、故障排除与优化。免费版含每月100GB数据摄入、1个全权限用户和无限基础用户
* [nixstats.com](https://nixstats.com) - 单服务器免费。含邮件通知、公共状态页、60秒间隔检查等功能
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API正常运行时间监控、定时任务监控及状态页服务。免费版含5个检查项（3分钟间隔），支持Slack/Discord/邮件告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国与美国服务器的DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 高可用服务的强大告警与值班管理。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，含告警、可视化与基础报告功能。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监控器（每日检查）
* [pagerly.io](https://pagerly.io/) - 通过Slack管理值班（集成Pagerduty/OpsGenie）。免费支持1个团队（1个团队指1个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更与正常运行时间。免费版含5个URL、每日核心指标监控、10个HTML/SEO变更监控、167个国家联盟链接监控及邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，免费支持10万事件（不限项目与状态页数量）
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限URL检查，通过Discord/Slack/邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器（10分钟间隔）。支持SSH/HTTP/HTTPS及自定义TCP端口监控
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费版含1个可定制公共状态页（SSL子域名）。开源项目与非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监控器、6个月历史运行数据/日志、无限状态页和自定义域名！含无限次邮件告警且无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标与日志），零配置复杂度。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站与Cron监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，助力实践SRE最佳方案。永久免费计划支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试（功能受限）
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS与域名监控。免费监控10台服务器、10项运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20项主流Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监测器（5分钟间隔）及可定制状态页（含商用权限）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站（60秒间隔），含公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理与响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供Cron任务、关键词、网站、端口、Ping等多样化监控。免费版含25个运行时间检查（3分钟间隔），支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20项免费；Linux/Windows服务器监控：5项免费；状态页：1项免费。含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费。
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志和运行时间监控。开源项目可免费使用小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且易于自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简单、开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，或可自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备100台免费。
* [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5,000次错误，无限用户，30天保留期。
* [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常并提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用。
* [Axiom](https://axiom.co/) — 存储高达0.5 TB日志，保留30天。包含与Vercel等平台的集成及通过邮件/Discord通知的高级数据查询。
* [Semaphr](https://semaphr.com) — 移动应用的一键式全功能紧急开关。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告。免费计划无限次报告。
* [Whitespace](https://whitespace.dev) – 浏览器内一键式错误报告。个人使用免费计划无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000月活跃用户，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可完整克隆编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具实操技巧
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发路线的免费学习指南
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证级免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 汇集2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript与SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL/TypeScript，支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，专注计算机/工程/数据科学领域
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南，为用户文章提供免费dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click与Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言免费开源教育平台，配备人工导师

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
* [Buttondown](https://buttondown.email/) — 简讯服务。最多100名订阅者免费
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接中的联系表单（联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供最多2个您域名下的邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送最多9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者和每月10000封邮件免费
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器；只是一个邮件客户端，您可以直接从客户端发送邮件而无需暴露凭据，免费层每月200次请求，2个邮件模板，请求大小限制为50KB，有限的联系人历史记录
* [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址都会更新。完全免费，不包含任何服务费用
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证最多200封邮件，检查是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 一个德国的临时/一次性邮件生成器。支持10个域名，同时允许您创建无限地址。（包含广告）除此之外，服务完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限数量的您域名下的邮箱地址（**注意**：如果您使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等顶级域名，由于垃圾邮件问题需要付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于在构建/QA和CI/CD中测试邮件功能。免费账户每天永久获得15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 一个域名的免费邮件转发。接收和发送来自您域名的邮件
* [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过方便的Chrome扩展删除。非常适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源并可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面提供服务
* [mailchannels.com](https://www.mailchannels.com) - 邮件API，提供REST API和SMTP集成，每月最多3000封邮件免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱地址注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者和每月1000封邮件免费
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者和无限邮件以及自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费的公共邮件系统，您可以使用任何收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每天200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 免费API用于临时邮件测试，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API、SMTP，每月3500封事务性和营销邮件免费。邮件沙箱 - 用于开发的假SMTP服务器，免费套餐包含一个收件箱，100条消息，无团队成员，每秒两封邮件，无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者的免费临时邮箱地址。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS源阅读收到的邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到您的服务器）
* [pepipost.com](https://pepipost.com) — 第一个月30000封邮件免费，之后每天前100封邮件免费
* [Plunk](https://useplunk.com) - 每月3000封邮件免费
* [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC每周摘要
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务提供商，内置端到端加密。免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠的邮件投递API。免费层（每月10000封邮件）。异步发送。使用多个SMTP服务器。黑名单、日志、跟踪、Webhook等
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100封邮件，以及其他免费API如DEA检测器、DNS查询、SPF检测器等
* [Resend](https://resend.com) - 面向开发者的事务性邮件API。每月3000封邮件，每天100封免费，一个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费简讯服务。开始收费时再付费

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封免费事务性邮件。
* [temp-mail.io](https://temp-mail.io) — 免费临时邮箱服务，支持同时管理多个邮箱和邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管。
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证。
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮件服务商，现提供多款含免费方案的产品：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，支持一个域名。
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途。
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储空间。
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储空间。包含Zoho办公套件（Writer、Sheets和Show）。
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案。
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛功能。
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议及10名网络研讨会观众。
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理工具。
   - [Showtime](https://zoho.com/showtime) — 支持最多5名参与者的远程培训会议软件。
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品。
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，ZIP备份，RSS/Atom订阅，访问控制和自定义CSS。
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅免费，1个用户，所有支付由Zoho托管。保留最近40条订阅记录。
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面及最多50笔支付。
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服专员，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守计算机。
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每频道100用户及单点登录。
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排期
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队成员，提供优质服务且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨Web、移动和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3个用户免费，不限功能开关和实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，不限功能开关和A/B测试数量。
* [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境且不限请求次数。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。其慷慨的免费计划提供无限席位、开关、实验和动态配置，每月支持多达100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试平台。支持代码化配置和全类型TypeScript SDK，与Next.js和React等框架深度集成。提供丰厚免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体。精心挑选的字体库，并以易用格式呈现。
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接至Google CDN，可快速便捷地为网站添加众多免费字体。
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰、可供下载的多样化字体库。
* [Fontshare](https://www.fontshare.com/) - 专业级字体的免费服务平台，所有字体均可100%免费用于个人及商业用途。
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体。
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费及商用付费字体（限个人使用），支持输入文本快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台。
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，包含CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX或POST等功能。免费版包含无限表单、每月20次提交，若展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化界面，支持与Google Sheets、Airtable、Slack、Email等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每表单每月限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供的简易端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过界面转发提交至邮箱、Slack或Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版无限表单和提交，含预制模板、反垃圾和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，适合静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点、1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单与调查工具。50+专家设计模板。免费账户限1个活跃调查，100次响应/调查，8种响应类型。
* [Screeb](https://screeb.app/) - 应用内调查与产品分析工具，永久免费版每月500活跃用户，无限响应和事件，多集成、导出及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义重定向与响应页，Telegram & Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 一站式收集反馈并发送后续调查。AI自动分析提取洞察。免费版含邮件、网站、产品内或移动端调查，AI调查生成器，25次月度响应。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验与表单构建工具。免费版5个表单，每表单最多3步，50次月度响应。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版每表单限10个字段，100次月度响应。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版文档加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态与JAMStack网站的联系表单，无需后端代码。免费版无限表单、域名，每月250次提交。
* [WebAsk](https://webask.io) - 调查与表单构建工具。免费版3个调查/账户，100次月度响应，每调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版100次响应，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调查工具。使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版含1个活跃调查，每调查25次响应，可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200多种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划提供每周最多1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索工具，可同时搜索所有应用。搜索助手可让您利用您的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并与任何可观测性客户端兼容。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源的LLM工程平台，帮助团队协作调试、分析和迭代其LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大语言模型（LLMs）在几分钟内提供定制的商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，分析功能无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，这些模型虽可免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具，用于代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的语音清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。由Cloudflare提供支持，全球超过11%的网站信任这一免费开源CDN服务
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN，支持npm、GitHub、WordPress、Deno等平台
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管jQuery等流行第三方JavaScript库，可轻松集成至Web应用
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 纯原生ES模块JavaScript CDN，每月每域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案，宣称单个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库(GitHub/GitLab/Bitbucket)、WordPress资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub代理服务，个人开发者免费（无技术支持）
* [UNPKG](https://unpkg.com/) — npm全库CDN
* [weserv](https://images.weserv.nl/) — 全球缓存的图片处理服务，支持实时图像调整
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护CDN
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量+100万次请求，含免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月5TB免费CDN流量，19个核心节点，1个域名+通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关，免费版支持5用户+每日1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，但存在30秒超时限制。
* [appwrite](https://appwrite.io) - 支持无限项目且不暂停项目（含Websocket支持）的认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析功能，特别适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求和每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析自动提供基础设施的无样板后端框架，包含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS直接计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例，及限制为2连接/1万行且无备份的PostgreSQL免费数据库。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持业务快速增长。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，基于任意触发器构建工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费初级账户包含1个Python Web应用（your-username.pythonanywhere.com域名）、512MB私有文件存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月5万次调用。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持基于Git部署Docker容器/Web应用/API。免费实例可部署至德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1CPU。免费托管PostgreSQL数据库位于法兰克福/华盛顿/新加坡。
* [Napkin](https://www.napkin.io/) - FaaS服务提供500MB内存/15秒超时，每月5,000次免费API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务，为Meteor应用提供免费MongoDB共享主机及自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2个服务/2个定时任务/1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台，兼具NoCode工具敏捷性与编程语言威力。[免费版含1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)支持3个项目/1GB出口流量/每月300分钟构建时间。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务，每月赠送5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持连接本地Kubernetes，创建类生产环境测试。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者PaaS平台。免费版含5个组件和每月100美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度高达5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动和Web Baas服务，免费包含1GB文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建您的Python API，通过在线编辑器或本地工具免费构建和托管。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - 提供文档和资源，为企业构建和部署数字化创新方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1,000名用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录，每月500万次函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言平台。Beta期间可用，正式版后将提供慷慨的免费套餐。
* [Firebase](https://firebase.com) - 助力构建和运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需编写代码即可构建Flutter应用UI。集成Firebase。免费计划包含UI生成器和免费模板的完整访问权限。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、视频音频及信息流功能，无需数周开发。
* [hasura.io](https://hasura.io/) - 扩展现有数据库，即时提供GraphQL API，安全支持Web、移动及数据集成场景。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费套餐包含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送额度，联系人无限制且支持自动预热功能。
* [paraio.com](https://paraio.com) - 具备灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息和100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2,000订阅者内无限通知。
* [pusher.com](https://pusher.com/beams) - 2,000月活用户内免费无限推送通知。统一API支持iOS和Android设备。
* [quickblox.com](https://quickblox.com/) - 即时通讯、视频语音通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API等服务的服务器，并通过管道组合和转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用。点击定制数据模型，通过Apex代码扩展，强大API实现万物互联。企业级安全保障，支持前沿Web框架的UI定制。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) - 实时自动同步多平台数据，结构化数据无限收发存储，每月最多2,500名用户。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，提供认证、实时数据库和对象存储的免费套餐。
* [tyk.io](https://tyk.io/) - 包含认证、配额、监控和分析的API管理平台。免费云服务可用。
* [zapier.com](https://zapier.com/) - 连接应用实现任务自动化。每15分钟5次触发，每月100次任务免费。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务、15分钟更新间隔、5个活跃自动化流程及Webhook支持。
* [LeanCloud](https://leancloud.app/) - 移动后端服务。免费包含1GB数据存储、256MB实例、每日3,000次API请求和10,000次推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。完美支持应用、数据库等托管服务。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持与15+种数据库及任何API集成。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表盘。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具备拖放界面、离线支持、实时位置追踪及多种第三方服务集成功能。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理以10倍速度构建内部工具、自定义用户旅程、数字体验、自动化、管理面板和运营应用。
  * [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用OpenAI、Anthropic、Firecrawl等免费内置API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编码助手及每月10,000次执行额度。
  * [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5 GB存储和1 GB内存。免费层还允许使用Studio和Studio Pro IDE。
  * [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS，支持本地或云端部署。免费"个人环境"提供无限代码和最多1 GB数据库。
  * [ReTool](https://retool.com/) — 构建内部应用的低代码平台。ReTool高度可定制，能用JavaScript和API实现的功能均可在此完成。免费层每月支持最多5名用户，不限应用数量和API连接。
  * [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑及代码扩展功能，结合集成、认证、权限和审计日志实现集中管控。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖放式应用构建器开发程序。
  * [UI Bakery](https://uibakery.io) — 低代码平台，加速定制Web应用开发。支持通过拖放构建UI，并利用JavaScript、Python和SQL实现高度定制。提供云服务和自托管方案，最多5名用户免费。
  * [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。单个用户每月100万次工作流活动免费（[另有德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费网络托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，可通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装程序。
  * [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施麻烦并加速设置。
  * [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建Web和移动应用，免费但带有Bubble品牌标识。
  * [dAppling Network](https://www.dappling.network/) - 去中心化的Web3前端托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform Starter层级上免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到Web。仅限静态站点。永久免费。每个Google/Microsoft账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一款开发者桌面应用，用于本地托管站点并公开共享（实时）。通过其美观的用户界面、API和/或CLI按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持以及许多其他免费主机不提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳的控制面板和50多个免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费网络托管，提供Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP电子邮件、无限带宽、免费子域名，1000 MB免费存储并可升级。
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，支持自定义域名和SSL，每月100 GB带宽，260多个Cloudflare CDN位置。
  * [Lecturify](https://www.lecturify.net/index.en.html) - 提供SFTP访问的Web托管，支持文件上传和下载，可用PHP。
  * [Neocities](https://neocities.org) — 静态托管，1 GB免费存储和200 GB带宽。
  * [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，每月免费300积分（相当于30 GB带宽）。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包括多种形式的Web托管（静态Web托管、基于容器的Web托管、WordPress等许多其他托管应用，只需点击几下）。一个免费Web托管（静态或容器化）和一个免费数据库，100 GB带宽和每月300构建分钟。
  * [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费。不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
  * [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，提供免费SSL、全球CDN、私有网络、Git自动部署，以及Web服务、数据库和静态网页的完全免费计划。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 面向前端开发者的静态Web发布。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50个页面，50 MB存储，仅限170多个可用预定义块中的主要块，无字体、无网站图标且不支持自定义域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，提供免费SSL、全球CDN和每次`git push`时唯一的预览URL。非常适合Next.js和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器 - 无限网站，70多个块，五个模板，自定义CSS、网站图标、SEO和表单。不支持自定义域名。
  * [Qoddi](https://qoddi.com) - 类似Heroku的PaaS服务，以开发者为中心，功能全面。免费层级支持静态资源、暂存环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) - 社区支持的免费Flarum托管，最多支持250用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) - 一个项目的免费托管，两周容器TTL，每个项目500 MB RAM，SFTP - 1G磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，在其付费服务中提供三个静态站点的免费托管。
  * [Serv00.com](https://serv00.com/) — 3 GB免费Web托管，每日备份（7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），支持：MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
  - [Sevalla](https://sevalla.com/) - 简化应用、数据库和静态网站部署和管理的托管平台 - 1GB站点限制，100GB免费带宽，600免费构建分钟，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，并支持[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 含API的免费DNS服务，提供多种高级DNS功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条DNS记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名和10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多5个域名，含多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)及多种记录类型（CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户共享域名的[子域名服务](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪/广告的免费动态DNS服务，域名数量无限制。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认。
* [sslip.io](https://sslip.io/) - 免费DNS服务，查询含IP地址的主机名时直接返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管服务。
* [zonewatcher.com](https://zonewatcher.com) - DNS变更监控与自动备份，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅与广告。
* [LocalCert](https://localcert.net) - 免费提供与公共CA兼容的`.localcert.net`子域名，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷高效地上传并存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点，1 CPU，1GB 内存，PostgreSQL 和 MySQL 提供 1GB 存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行和每月 1,000 次 API 请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 服务，提供 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查询、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用。包含 2 名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，专为实时分析设计。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点配置为 2 CPU、2 GiB 内存、8 GiB 存储。每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费层每月 50 万次命令、256MB 最大数据库容量和 20 个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，含 1 个节点和 8GB 存储，专为开发者打造，支持从物联网到 AI 的下一代应用开发
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB 存储
* [redsmin.com](https://www.redsmin.com/) — Redis 在线实时监控与管理服务，免费监控 1 个 Redis 实例
* [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费提供最高 25MB 缓存、1 个代理服务器和基础分析功能
* [scalingo.com](https://scalingo.com/) — 主要提供 PaaS 服务，但包含 128MB 至 192MB 的 MySQL、PostgreSQL 或 MongoDB 免费层
* [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活电子表格式数据库。无限表格、2,000 行数据、1 个月版本历史，最多支持 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库强大功能及主流商业应用集成的工具。免费方案包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源 MySQL 兼容的分布式 HTAP 关系型数据库。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5,000 万请求单位(RU)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验。永久免费入门方案提供 9GB 总存储、最多 500 个数据库、3 个地域节点、每月 10 亿行读取及 SQLite 本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每 5 分钟 3MB 写入、30MB 读取和 10,000 基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的 NoSQL 云数据库服务。提供模式化设计、关联关系、自动 REST API（支持类 MongoDB 查询）及高效的多用户管理界面。免费方案支持 3 用户、2,500 条记录和每秒 1 次 API 请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供 5,000 万 RU 和 10 GiB 存储（价值等同于 15$）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图规模（5 万节点，17.5 万关系）。
* [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 总存储，1 个项目，10 个分支，无限数据库，主分支永久在线（非活跃 5 分钟后自动暂停），非主分支计算每月 20 小时活跃时长。
* [Prisma Postgres](https://prisma.io/postgres) - 基于 Unikernel 和裸机运行的超快托管 Postgres，1GB 存储，10 个数据库，集成 Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供 GraphQL API。限制每日 1 MB 数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持 HTTP 无连接数据摄入，可将 SQL 查询发布为托管 HTTP API。免费层无时限，10GB 存储 + 每日 1000 次 API 请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类 SQL 图查询语言和 REST API。免费实例含 2 vCPU、8GB 内存和 50GB 存储，闲置 1 小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，这是用 Prolog 和 Rust 编写的文档与图数据库。开发免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - filess.io 平台可免费创建两个数据库，每个数据库支持以下 DBMS 且容量上限为 10 MB：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [Xata Lite](https://lite.xata.io/) - Xata Lite 是无服务器数据库，内置强大搜索与分析功能。单一 API，多类型安全客户端库，优化开发工作流。免费方案提供 10 个分支和 15 GB 存储，无暂停或冷启动问题。
* [8base.com](https://www.8base.com/) - 8base 是全栈低代码开发平台，专为 JavaScript 开发者构建于 MySQL 和 GraphQL 之上，提供无服务器后端即服务。可通过 UI 应用构建器快速开发 Web 应用并轻松扩展，免费层包含：2,500 行数据、500MB 存储、1Gb/小时无服务器计算和 5 个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库、永久在线不关机、1GB 总存储、5,000 万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由工具

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi托管VPN服务，可安全扩展类LAN网络至分布式团队，免费方案支持最多5人无限网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署Web Socket服务器代码后提供wss:// URL，并可监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装或注册。提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转中心，可将事件转译并路由至第三方服务。免费方案含10万事件/月。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发及代理所有webhook至公共或内部（如localhost）目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控webhook。免费方案含10万请求/月和10万尝试/月，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端的端到端加密网络。支持桌面/移动/NA客户端；通过网页界面配置自定义路由规则及审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理服务，可将本地服务器暴露至互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布为公共自定义URL，并通过访问控制保障安全。免费方案支持1个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费版
* [Backlog](https://backlog.com) — 一体化项目发布平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内联网和项目管理工具。免费版提供5GB空间（用户数不限）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图）。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，节省冲刺估算时间。免费支持5名用户，集成Jira，不限视频会议、团队和会话
* [clickup.com](https://clickup.com/) — 项目管理工具。免费版含云存储，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪应用。永久免费，用户数不限
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，支持智能组件实时数据展示。免费版提供个人用户不限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台。免费版支持5人团队，不限仓库/项目/文档，每月500分钟CI/CD时长和3万次无服务器代码运行，1GB仓库存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目，用户数不限，1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理。免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的冲刺回顾工具。免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件。SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专用免费文本转图表工具，支持非正式UML类图/对象图/实体关系图生成
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异检测工具，可标记破坏性/非破坏性/危险变更
* [Hygger](https://hygger.io) — 项目管理平台。免费版用户/项目/看板不限，100MB存储
* [Instabug](https://instabug.com) — 移动应用全功能Bug报告SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集与功能投票系统。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多视角基础设施交互图表工具，支持代码表达。免费版不限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理。免费版2个看板/2名用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用。免费版支持1名用户（看板/列表/卡片数量不限）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台。免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（含面试/机会/人脉追踪）。完全免费
* [Kumu.io](https://kumu.io/) — 支持动画/装饰/筛选/集群/表格导入的关系图谱工具。免费版不限公开项目，学生可享私有项目，沙盒模式支持临时编辑
* [Linear](https://linear.app/) — 极简问题追踪系统。免费版成员不限，10MB文件上限，250个问题（归档除外）
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS。免费版支持10名用户，20个自定义字段，2GB存储，5分钟/视频的AI录制，20次/用户/月的自动化运行
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具。免费版3个可编辑文档+100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目（成员不限）
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。免费版永久提供100MB存储和5名用户/团队，不限工作区/会议/任务/工时表/问题追踪
* [Ora](https://ora.pm/) - 敏捷任务管理与团队协作工具。免费版支持3名用户（10MB文件上限）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公开项目+2个私有项目（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台。免费版支持2名用户+10个客户+500MB存储
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具。免费版成员不限，5MB文件上限，1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（共识估算工具）。完全免费（用户/团队/会话/轮次/投票不限），无需注册

  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告和反馈工具。免费计划每月每个应用可提交10个错误报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户。
  * [Tadum](https://tadum.app) - 专为周期性会议设计的议程和会议记录应用，10人以下团队免费使用。
  * [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费。
  * [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费计划包含无限任务、迭代和工作区，无用户数量限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，从看板到Scrum及各类运营流程。免费支持无限用户，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲。免费计划包含1个工作区（无限任务和项目）、1GB文件存储、1周项目历史记录及每次视频会议5名参与者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成。
  * [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾和迭代计划工具。15人以下团队免费。
  * [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费支持5名用户和2个项目，提供高级付费方案。
  * [teleretro.com](https://www.teleretro.com/) — 融合破冰游戏、动图和表情的趣味回顾工具。免费计划包含3次回顾会议和无限成员。
  * [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具。SaaS模式依赖自愿付费，用户可选择0元使用且无功能限制{[详情](https://tenzu.net/pricing/)}
  * [testlio.com](https://testlio.com/) — 问题追踪、测试管理和Beta测试平台。个人使用免费。
  * [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版支持每图最多4个层级。
  * [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版功能：5个活跃项目/项目内5名用户/5MB文件上传/3个过滤器/1周活动历史。
  * [trello.com](https://trello.com/) — 看板式项目管理。无限个人看板，10个团队看板。
  * [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具。
  * [ubertesters.com](https://ubertesters.com/) — 测试平台、集成与众测服务，免费支持2个项目5名成员。
  * [Wikifactory](https://wikifactory.com/) — 产品设计服务平台（含项目管理、版本控制和问题追踪）。免费计划提供无限项目与协作者，3GB存储空间。
  * [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。最多3名用户免费，项目数量不限。
  * [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目及私有项目（3名用户免费）。含时间追踪和敏捷看板功能。
  * [zenhub.com](https://www.zenhub.com) — 唯一内嵌于GitHub的项目管理解决方案。公开仓库、开源组织和非营利机构免费。
  * [zenkit.com](https://zenkit.com) — 项目管理与协作工具。最多5名成员免费，支持5GB附件。
  * [Zube](https://zube.io) — 项目管理工具，免费支持4个项目4名用户。提供GitHub集成。
  * [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间管理应用（免费版含无限记录/项目/客户/标签/报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版含无限任务/里程碑/时间线）。
  * [Sflow](https://sflow.io) — 专为敏捷开发、营销、销售及客户支持设计的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员。
  * [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用。
  * [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的效率工具，支持结构化检查清单、模板和任务内审批流程。小团队可用免费计划。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件托管](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 专为Borg Backup设计的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时图像优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化和CDN服务。提供多种图像缩放、压缩和水印功能。开源插件支持响应式图像、360度图像制作和图像编辑。免费月套餐含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图像上传、强大编辑、存储和交付服务。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档、图像、音频、视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API操作。无文件大小、带宽和下载次数限制，但十天无下载的文件会被自动删除。
* [gumlet.com](https://www.gumlet.com/) — 图像视频托管及CDN处理流媒体服务。免费套餐包含每月250GB视频流量和30GB图像流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图像图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图像的友好机器人，在不损失质量的前提下减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限量图像托管服务。支持32MB/图的拖拽上传，提供直链、BBCode和HTML缩略图，登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限量社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图像缓存管理与CDN服务。免费套餐含1000张原始图像、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能优化图像处理服务，免费支持1MB以下文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速（缓存/图像代码优化/CDN）。免费支持5000次页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 云存储文件加密共享/复制/移动管理平台。基础版支持无限文件传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取免费开源计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目/黑客松/移动应用的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理平台，提供友好界面和API。免费套餐含1GB存储。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持5人以下团队使用的协作平台，可体验基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的快速批量二维码生成器，单次最多支持100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表/图形和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步服务，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图像优化API，已处理超70亿张图像且仍免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图像压缩API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 处理视频/音频/图像/文档的上传编码。通过GitHub学生开发者包向开源项目/慈善机构/学生免费，商业应用可试用2GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图像服务。提供图像CDN/处理API和前端优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理工具链。开发者可免费使用所有功能：文件上传API/UI、图像CDN/源服务、自适应交付和智能压缩。免费套餐含3000次上传/3GB流量/3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图像CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费20GB空间支持三台设备，推荐用户可获5GB奖励（90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一个简单易用的全球图片CDN。60秒内即可完成配置，支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。立即申请[免费开发者账户](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI工具，可将PDF、图片等文件处理为JSON、CSV、EXCEL等结构化数据。每月免费赠送30次额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、logo等。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能。完全免费且不收集用户数据。
* [Doradrop](https://doradrop.com) — Doradrop 是一个无广告的无限存储文件共享平台。无需登录即可通过安全链接即时分享文件。

* [Ente](https://ente.io/) - Ente 是端到端加密的云存储服务，支持照片、视频和2FA密钥的存储。可自托管，永久免费版提供10GB空间。免费用户数据仅保留单副本。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图片、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，快速创建现代响应式网站，即使非设计师也能轻松上手
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载模板代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费网页应用，支持SVG绘制及导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能转换工具（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号
* [Branition](https://branition.com/colors) - 专为品牌打造的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具（支持RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图资源库
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版最多2名编辑+3个项目
* [Flyon UI](https://flyonui.com/)- 最简单的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持2名编辑+3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版权商用图库（含模特/物品授权书）
* [Gradientos](https://www.gradientos.app) - 快速挑选渐变方案的工具
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库（数千图标），支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐/设计工具集，免费资源需标注来源
* [landen.co](https://www.landen.co) - 无代码建站平台，免费版可发布1个完全自定义的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，URL添加尺寸参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画平台，提供Android/iOS/Web动画工具
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量免费思维导图工具，全平台即时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具，免费版支持3用户5项目
* [mockupmark.com](https://mockupmark.com/create/free) - 社交媒体/电商服装样机生成工具（40个免费模板）
* [Modeldraw.com](https://modeldraw.com) - 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持实时无限协作
* [Mossaik](https://mossaik.app) - 免费SVG生成器（波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) - 浏览器端快速矢量编辑器（完全免费）
* [NSPolygon](https://nspolygon.com) - 免费图库/图标/插画资源
* [Octopus.do](https://octopus.do) - 可视化站点地图构建工具，实时协作分享
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具，支持SVG格式
* [pexels.com](https://www.pexels.com/) - 免版权商用图库，提供免费关键词搜索API
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器（支持PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计工具，支持响应式页面/复杂组件开发
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成服务（支持URL直链）
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器端直接转换（无需上传，完全客户端处理）
* [Proto.io](https://www.proto.io) - 无代码交互原型工具，免费版包含1用户1项目5原型100MB存储
* [resizeappicon.com](https://resizeappicon.com/) - 简单的应用图标尺寸调整工具
* [Rive](https://rive.app) - 创建并发布精美动画到任何平台，个人用户永久免费

  * [smartmockups.com](https://smartmockups.com/) — 创建产品样机，200个免费样机模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 跨组件和布局实时预览主题修改效果
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可编辑SVG图标，支持复制粘贴
* [tweakcn](https://tweakcn.com/) — shadcn/ui精美主题库，实时自定义颜色、排版等参数
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，支持URL直接调用并可配置参数
* [unDraw](https://undraw.co/) - 持续更新的免授权精美SVG图库
* [unsplash.com](https://unsplash.com/) - 无限制商用免费图库（do-whatever-you-want授权）
* [vectr.com](https://vectr.com/) — 网页/桌面版免费矢量设计工具
* [walkme.com](https://www.walkme.com/) — 企业级用户引导平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - TailwindCSS可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 带海量免费模板的在线样机图形编辑器
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，免费版支持5个页面
* [Mastershot](https://mastershot.app) - 无水印的免费在线视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页生成器，免费1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌Logo库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 点击即生成独特背景/图案/形状的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端开发平台，免费版支持3个项目
* [vector.express](https://vector.express) — 支持AI/CDR/DWG等矢量格式快速转换
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台（含JPG转SVG等开发者工具）
* [okso.app](https://okso.app) - 极简在线绘图工具（支持导出PNG/SVG等格式）
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌Logo的API接口，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费Bootstrap/Angular/React/Vue UI套件（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库（减少类名书写）
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条定制工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色库及生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一搜索平台
* [NextUI](https://nextui.org/) -- 免费现代化React/Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美组件库（开源可定制）
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标（完全免费）
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片模糊背景框
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案，免费版支持无限子域名网站
* [Nappy](https://nappy.co/) -- 黑人及棕色人种专业图库（商用免费）
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/代码生成器合集
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线手绘风格白板工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费图形设计工具（离线可用）
* [Flows](https://flows.sh/) -- 产品引导平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计网站（由设计师投票选出）
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常来自非真实应用场景
* [Landings](https://landings.dev/) - [网页截图] 根据偏好寻找最佳着陆页设计灵感
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供设计师免费资源和UI套件
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图集，包含桌面端/平板/移动端视图
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可检索的移动应用截图库节省UI/UX研究时间
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动端和网页UI设计
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师/开发者/产品人员提供精选的iOS和Android UI/UX模式库
* [Page Flows](https://pageflows.com/) - [移动端/网页流程视频] 多个应用的完整操作流程视频与截图，支持高级检索
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取最新网页和移动应用UI设计趋势，支持按模式和应用筛选
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的可标记、可检索的设计参考集合

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API和SDK，支持地理数据存储、分析、地理编码、路径规划等功能。每月包含：200万次免费基础地图瓦片加载、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容推送
* [geoapify.com](https://www.geoapify.com/) — 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析及共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图和位置感知应用API/SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 提供地图数据展示所需的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务及可视化SDK。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap开源地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向指引/路径规划/路线优化/距离矩阵）、地图SDK（矢量/静态/移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开源地理数据的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排序的地理编码与搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 官方Android开发IDE，支持全类型Android设备应用开发。开源免费，支持Windows/Mac/Linux/ChromeOS多平台
* [AndroidIDE](https://m.androidide.com/) — 基于Gradle的Android设备端开源开发环境
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境与工具平台框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台（免费版支持无限量API蓝图和用户，含托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台专业文本编辑器，[免费版提供核心功能集](https://www.barebones.com/products/bbedit/comparison.html)
* [Binder](https://mybinder.org/) - 将Git仓库转为交互式Notebook的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的Java开发环境，由Oracle支持并提供简易图形界面
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器
* [cacher.io](https://www.cacher.io) - 支持100+编程语言的代码片段管理工具
* [Code::Blocks](https://codeblocks.org) — 免费开源的C/C++/Fortran跨平台IDE
* [Cody](https://sourcegraph.com/cody) - 智能编程助手（支持VS Code/JetBrains/网页版），提供代码补全/单元测试/代码理解/问题修复等功能
* [codiga.io](https://codiga.io/) — 支持代码片段搜索与复用的IDE插件（个人及小团队免费）
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器（支持分类/标签/搜索）
* [cocalc.com](https://cocalc.com/) — 云端协作计算平台（预装Python/LaTeX/Jupyter等数学科学工具）
* [code.cs50.io](https://code.cs50.io/) - 哈佛CS50课程定制的网页版VS Code环境
* [codepen.io](https://codepen.io/) — 前端代码在线演练场
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 可视化Web组件开发测试工具
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言云端IDE（Red Hat提供[在线实例](https://workspaces.openshift.com/)）
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据
* [ForgeCode](https://forgecode.dev/) — 支持多AI模型的编程助手（免费版提供基础模型）
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux环境（免费版每日5次VM额度）
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE（免费版含1GB内存/10GB存储）
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器（免费版每日200次API调用）
* [jetbrains.com](https://jetbrains.com/products.html) — 开发者工具套件（学生/教师/开源项目可申请免费许可）
* [jsbin.com](https://jsbin.com) — 前端代码共享演练场（支持HTML/CSS/JS/Markdown等）
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码演练场
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API服务
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速开发工具
* [MarsCode](https://www.marscode.com/) - 云端AI编程IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级JSON模拟数据生成服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务
* [mockaroo](https://mockaroo.com/) — 测试数据生成工具（支持CSV/JSON/SQL格式）
* [Mocklets](https://mocklets.com) - HTTP接口模拟器（提供终身免费版）
* [Paiza](https://paiza.cloud/en/) — 无配置云端开发环境（免费版每日4小时运行时长）
* [Prepros](https://prepros.io/) - 前端预处理工具（支持Sass/Less/TypeScript等）
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 代码片段运行平台（含免费编程课程）
* [stackblitz.com](https://stackblitz.com/) — 全栈应用云端IDE（快捷入口：[node.new](https://node.new)）
* [Sublime Text](https://www.sublimetext.com/) - 高度可定制的专业文本编辑器

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能IDE，拥有数千个扩展，支持跨平台应用开发（可下载适用于iOS和Android的Microsoft扩展）、桌面、Web和云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) — 社区驱动的Microsoft编辑器VSCode二进制发行版，无遥测/跟踪，采用自由许可证。
  * [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化你的编码活动，提供免费有限计划。
  * [Wave Terminal](https://waveterm.dev/) — Wave是一款开源、跨平台的终端工具，支持无缝工作流。内联渲染任何内容，保存会话和历史记录，基于开放Web标准，支持MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，包含故事和测试功能。
  * [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
  * [WebDB](https://webdb.app) — 免费高效的数据库IDE，功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等。
  * [Zed](https://zed.dev/) — Zed是一款高性能多人协作代码编辑器，由Atom和Tree-sitter的开发者打造。
  * [OneCompiler](https://onecompiler.com/) — 免费在线编译器，支持70多种语言，包括Java、Python、C++、JavaScript。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 带有热图、会话记录和收入追踪的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 追踪GitHub仓库14天以上流量历史的精美仪表盘。免费计划允许用户监控单个仓库的流量
* [Dwh.dev](https://dwh.dev) - 数据云观测解决方案（Snowflake）。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布工作流。单一事实来源的追踪计划、类型安全分析追踪库、应用内调试器和数据可观测性，在发布前捕获所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费层提供最多10K移动应用用户，包含深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。从数据仓库同步10个字段到60多个SaaS平台，如Salesforce、Zendesk或Amplitude
* [Clicky](https://clicky.com) - 网站分析平台。免费计划支持一个网站3000次浏览分析
* [Databox](https://databox.com) - 通过整合其他分析和BI平台提供商业洞察和分析。免费计划提供3个用户、仪表盘和数据源，包含1100万历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 每月2000次页面浏览（1个网站）
* [amplitude.com](https://amplitude.com/) - 每月100万次事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网络分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网络分析，作为Google Analytics或Matomo的替代方案。免费层适用于非商业用途，包含无限网站、六个月数据保留和每月10万页面浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月允许100万页面浏览，无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月最多3000次事件免费
* [heap.io](https://heap.io) - 自动捕获iOS或Web应用中的每个用户操作。每月最多1万次会话免费
* [Hotjar](https://hotjar.com) - 网站分析和报告。免费计划每天允许2000次页面浏览，100个快照/天（最大容量：300），可存储3个热图365天。无限团队成员。还包括应用内和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20个回复
* [Keen](https://keen.io/) - 用于数据收集、分析和可视化的自定义分析工具。每月1000次事件免费
* [Yandex.Datalens](https://datalens.yandex.com/) - Yandex Cloud数据可视化和分析服务。服务免费提供，不限制用户数量和请求
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) - REST和GraphQL的API分析（每月最多50万次API调用免费）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费入门计划，支持一个网站、1个iOS和1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软的商业洞察和分析工具。免费计划提供有限使用，包含100万用户许可
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表化和共享数百万行数据。三个永久免费的工作簿
* [sematext.com](https://sematext.com/cloud/) - 每月最多5万次操作免费，1天数据保留，无限仪表盘、用户等
* [Similar Web](https://similarweb.com) - 网站和移动应用分析。免费计划提供每个指标五个结果，一个月的移动应用数据和三个月的网站数据
* [StatCounter](https://statcounter.com/) - 网站访问者分析。免费计划分析500个最近访问者
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月最多100万计量事件免费
* [Tableau Developer Program](https://www.tableau.com/developer) - 创新、创建并使Tableau完美适应您的组织。免费开发者计划提供Tableau Online的个人开发沙盒许可。版本是最新的预发布版本，数据开发者可以测试这个卓越平台的每个功能
* [usabilityhub.com](https://usabilityhub.com/) - 在真实用户上测试设计和原型并追踪访问者。单个用户免费，无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台，支持50万次操作，90天数据保留，30多个一键集成
* [counter.dev](https://counter.dev) - 简单且注重隐私的网络分析工具。免费或按捐赠付费
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多100万次追踪事件免费。还包括无限应用内调查，每月250个回复
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。有免费计划，为开源项目提供个人订阅，并有开源版本
* [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一个免费、易用的工具，捕捉真实用户如何使用您的网站
* [Beampipe.io](https://beampipe.io) - 简单、注重隐私的网络分析工具。最多5个域名和每月1万次页面浏览免费
* [Aptabase](https://aptabase.com) - 开源、隐私友好且简单的移动和桌面应用分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月最多2万次事件免费
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的追踪计划，促进无缝协作。部署到生产环境或为回归测试添加分析覆盖，无需编写代码
* [LogSpot](https://logspot.io) - 完整的统一网络和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包括每月1万次事件
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级注重隐私的Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标追踪。最多3个域名和每个域名600次会话回放免费
* [AppFit](https://appfit.io) - 全面的分析和产品管理工具，便于跨平台管理分析和产品更新。免费计划包括每月1万次事件、产品日志和每周洞察

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站与产品分析工具。免费方案包含每月3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics无Cookie替代方案，使用体验提升10倍。免费方案支持每月3,000次事件。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每天1,000次页面浏览，三个热图，三个小工具，免费错误跟踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误跟踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 跟踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。免费额度高达每月1万美元的跟踪收入。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，用于移动端应用内订阅集成，支持iOS、Android、React Native、Flutter、Unity或网页应用。免费额度高达每月1万美元收入。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密和法定货币汇率。免费层级每月提供10K次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。免费开发者计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新加密货币汇率和历史数据。演示API提供稳定的30次/分钟调用限制，每月上限10,000次调用。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币和加密货币汇率，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为您的业务提供可靠的汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费层级每日更新一次，每月限制1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家预防支付欺诈和退单。免费微计划每月提供500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费层级需要署名。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费从API创收。支持连接Stripe、Chargebee等。免费层级每月提供30,000次事件。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购买和订阅平台，包括无代码付费墙、CRM和分析工具。基础功能免费，可运行应用内购买业务。
* [RevenueCat](https://www.revenuecat.com/) — 托管的应用内购买和订阅后端（iOS和Android）。免费额度高达每月2.5千美元的跟踪收入。
* [vatlayer](https://vatlayer.com/) — 即时VAT号码验证和欧盟VAT税率API，免费每月100次API请求。
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

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。Vagrant box 托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深度探讨对你重要的话题
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的想法、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于GitHub issues构建的轻量级评论组件。可将GitHub issues用于博客评论、维基页面等场景！
* [Disqus](https://disqus.com/) - Disqus是网络社区平台，被全球数十万网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随喜付费"模式，支持"一个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等多种平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间参数和视口尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图即服务。每日免费250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。专为扩展设计并托管于Google Cloud。每月提供100次免费截图。
  * [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速获取截图，免费且可扩展。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照服务。每月100次免费快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（png/gif/jpg格式），支持整页截图而不仅是首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度，自2017年持续提供。
  * [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月100次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可开发 iOS 和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - Codemagic 是完全托管式的移动应用持续集成/持续交付服务。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可直接在浏览器中运行Linux和Windows 2000。
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统。
* [v86](https://copy.sh/v86) — 基于x86架构的虚拟机，支持在浏览器中直接运行Linux及其他操作系统。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅适用于小型团队且仅限SaaS版本。
  * [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理与合规平台。免费版提供基础功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限制的隐私/Cookie政策及Cookie横幅功能。
  * [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计与同意管理方案。免费版包含单次扫描和单个横幅功能。
  * [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访客数量受限的情况下开放大部分功能。
  * [Concord](https://www.concord.tech/) - 完整的数据隐私平台，涵盖同意管理、隐私请求处理（DSARs）及数据映射。免费版包含核心同意管理功能，并向通过验证的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的截图，便于在社交媒体分享。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如用于Twitter/Facebook帖子）或链接（如用于聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估IoT设备。免费开发者计划支持5台设备，含免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的笔记应用（PWA）。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标插件。
* [Codepng](https://www.codepng.app) - 为源代码生成精美快照，便于社交媒体分享。
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为截图分享至社交媒体。
* [Cronhooks](https://cronhooks.io/) - 定时或周期性触发Webhook。免费版允许5个临时计划任务。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，支持无限量免费任务。
* [datelist.io](https://datelist.io) - 在线预约系统。免费版每月限5次预约，包含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单易用的URL/域名转发工具。免费版支持5个域名及每月20万次请求。
* [Elementor](https://elementor.com) — WordPress网站构建工具，免费版含40+基础组件。
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除/分析图片元数据（含GPS位置信息）。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 第三方代码的规模化端到端管理方案（许可证合规性与漏洞检测）。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook支持：内置队列、指数退避重试和日志功能。免费版每日100次投递，14天存储，支持3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN、ISP、地理位置等托管信息，并提供多款DNS相关工具。
* [kandi](https://kandi.openweaver.com/) — 加速应用开发：通过代码片段和开源库复用快速构建自定义功能与完整应用。
* [Base64解码/编码工具](https://devpal.co/base64-decode/) — 免费在线Base64数据编解码工具。
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/自定义Webhook接收GitHub、GitLab、PyPI、Maven等平台的新版本发布通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看图片EXIF数据（含GPS位置信息）。
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。免费版每月300份文档。
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码片段截图。
* [QuickType.io](https://quicktype.io/) - 快速从JSON/GraphQL生成模型/序列化代码，支持多种语言。将JSON转换为类型安全的优雅代码。
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成工具，用于保护应用/服务/设备安全。
* [ray.so](https://ray.so/) - 为代码片段生成美观图片。
* [readme.com](https://readme.com/) — 轻松创建精美文档，开源项目免费。
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具（适用于营销与SEO）。
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的轻量级重定向管理服务。免费版含10个源地址和每月10万次访问。
* [Renamer.ai](https://renamer.ai) — 支持OCR和20+语言的AI文件重命名工具。免费版每月15个文件，含桌面端应用和批量重命名功能。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求。支持GET/POST/PUT/DELETE/HEAD方法及Token认证，含基础请求保存功能。
* [Smartcar API](https://smartcar.com) - 车辆API：定位、油量/电量查询、里程读取、车门锁控制等。
* [snappify](https://snappify.com) - 开发者视觉化工具：从代码片段到技术演示。免费版支持3个同时编辑项目，含5次AI代码解释。
* [日出日落时间API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed分析与导出服务，免费版功能有限。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线调查创建与分析平台。免费版每份问卷限10个问题和100个回复。
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台（从网站到WhatsApp）。免费版支持无限机器人。
* [UUID生成器](https://newuuid.com/) - 即时生成UUID v1/v4/v7、GUID、NanoID等，具备企业级性能与安全性。
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建自定义RSS订阅（免费版支持3个订阅源）。
* [videoinu](https://videoinu.com) — 在线录屏与视频编辑工具。
* [Webacus](https://webacus.dev) — 开发者工具集（编解码/数据转换等）。
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的免费GPU基准测试工具（WebGL），帮助开发者跨设备对比着色器性能。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF。
  * [CraftPix](https://craftpix.net) — 免费/付费资源，包括2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
  * [Game Icons](https://game-icons.net/) — 免费可定制的SVG/PNG图标，遵循CC-BY许可。
  * [LoSpec](https://lospec.com/) — 在线工具，用于创建像素艺术和其他限制性数字艺术，提供大量教程和调色板列表供游戏使用。
  * [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D资源、音频、图标、瓦片集和游戏套件市场。也可用于展示艺术作品集。
  * [Rive](https://rive.app/community/) — 社区资源，同时可使用免费计划创建自己的游戏资源。
  * [Poly Pizza](https://poly.pizza/) — 免费的低多边形3D资源。
  * [3Dassets.one](https://3dassets.one/) — 超过8,000个免费/付费3D模型和PBR材质，用于制作纹理。
  * [Kenney](https://www.kenney.nl/assets/) — 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资源。
  * [Poliigon](https://www.poliigon.com/) — 免费和付费的纹理（可变分辨率）、模型、HDRIs和笔刷。提供免费插件导出到Blender等软件。
  * [Freesound](https://freesound.org/) — 免费协作音效库，提供多种CC许可。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [github.com — 开发者开源资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度通过遥测数据算法自动续期
* [PHPhub](https://phphub.net/) — PHP工具集合，包含格式化器、验证器、沙盒环境、正则测试器等
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的免费正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书参考
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云服务商（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题与UI套件，加速应用开发
* [Web.Dev测速工具](https://web.dev/measure/) — 免费网站性能检测与SEO优化工具，提升搜索引擎排名
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/测试数据生成等，提供愉悦界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门方案，支持100MB文件上传
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的离线工具集（水印生成/录屏/编解码/加解密/代码格式化等），完全免费不上传云端
* [IT工具集](https://it-tools.tech/) - 开发者与IT从业者实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费高效代码工具（Markdown编辑器/代码压缩美化/二维码生成/OG/Twitter卡片生成等）
* [正则101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）
* [Glob模式测试器](https://globster.xyz/) — 可视化Glob模式设计与测试平台，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库直接还原
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（实时音频/YouTube视频/字幕生成等），适合短视频处理
* [最佳二维码生成](https://qrcode.best/) - 13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版每月可手动发布1篇
* [PageTools](https://pagetools.co/) - 永久免费AI工具集（网站政策生成/社交媒体文案/网页创建等）
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/容器/编程/DevOps/网络）
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具，每月10张免费发票额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**