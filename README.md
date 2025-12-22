# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务需要花费时间才能做出明智选择。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们喜爱所有免费服务，但希望保持主题相关性。虽然界限有时比较模糊，因此这份清单带有主观判断——若未采纳您的贡献还请见谅。

本清单由1600多位人士通过提交Pull Request、评审、建议及实际工作共同完成。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来添加更多服务，或移除那些已变更或终止的条目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包含自托管软件。入选服务必须提供免费层级（而非仅限试用版），若采用时间分段模式则免费期至少需持续一年。同时我们会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

# 目录

  * [主流云服务商的永久免费额度](#主流云服务商的永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
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
  * [其他类别](#其他类别)
  * [监控服务](#监控服务)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关与无Mac开发iOS应用](#Flutter相关与无Mac开发iOS应用)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证、授权与用户管理](#认证、授权与用户管理)
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
  * [基于浏览器的硬件模拟](#基于浏览器的硬件模拟)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商的永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB从北美到所有区域目的地的网络出口流量（不包括中国和澳大利亚）
    * Cloud Storage - 5GB存储空间，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储空间，每周限制60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB从北美的网络出口流量
    * Google Kubernetes Engine - 一个区域集群免收集群管理费，每个用户节点按标准Compute Engine定价计费
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
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用和无服务器函数，免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包括有限交易
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 当[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时，实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出口流量，基于x64的VM限速50 Mbps，基于ARM的VM限速500 Mbps * 核心数
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
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN附带免费SSL、防火墙规则和页面规则、WAF、机器人缓解、免费不限量速率限制 - 每个域名1条规则、分析、电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建与管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含1台部署服务器和1个静态站点），无需操心"服务器事务"，提供在任意云上构建、部署和扩展应用所需的一切
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于优化Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用，包含全部功能，每月免费提供50次运行额度
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境，每月免费提供20次作业执行（含预览和自动部署功能）

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限制公共和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限制的公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限制公共和私有Git仓库（支持无限协作者）。基于[Forgejo](https://forgejo.org/)。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含软件包和容器托管、项目管理及问题追踪
* [GitGud](https://gitgud.io) — 无限制的公共和私有仓库。永久免费。基于GitLab & Sapphire。不提供CI/CD
* [GitHub](https://github.com/) — 无限制的公共仓库和无限制的私有仓库（支持无限协作者）。包含CI/CD、开发环境、静态托管、软件包和容器托管、项目管理及AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 无限制的公共和私有Git仓库，最多5名协作者。包含CI/CD、静态托管、容器注册表、项目管理及问题追踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab软件打造的代码托管平台，包含CI、静态页面、项目页面及问题追踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的代码库和工具；同时提供Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是自由许可项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) - OSDN.net是为开源软件开发者提供的免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是面向FOSS许可项目的免费开源软件代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 无限制的免费开源分布式版本控制系统。其独特之处在于基于补丁的可靠理论，易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费的私有项目（Git和Subversion），包含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的代码托管服务。无限制的公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（GNU项目）的协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（非GNU项目）的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转化为强大API，快速开发原型、网站、应用等。免费版每月提供500次请求。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
* [IP.City](https://ip.city) — 每日100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测和电子邮件验证。
* [Apify](https://www.apify.com/) — 网页抓取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月提供50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每日最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月提供50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和根因分析（如数据质量和性能漂移）。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3席位）永久免费。
* [Beeceptor](https://beeceptor.com) - 无代码云端平台，用于模拟和调试多协议API（REST、SOAP、gRPC和GraphQL），提供基于规则的逻辑、CRUD和状态模拟、代理及CORS管理的即时服务器，加速集成和测试。免费计划每日50次请求，提供公共仪表板/端点，任何拥有仪表板URL的人均可查看提交的请求和响应。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 网页数据提取和监控。免费版每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、抓取、AI代理网页访问、图像/PDF生成等。免费计划每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检测数据等。免费层每月100次请求，覆盖所有9个端点。
* [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API，支持自定义人脸识别和检测，可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用工具API平台，提供广泛的API库访问，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，涵盖实验跟踪、模型生产管理、模型注册和完整数据溯源，从训练到生产全流程。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLM的集成平台，整合200多个工具，覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API及Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每日最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，在应用间同步数据，可创建实时仪表板和报告，转换和操作数据，收集和备份洞察。免费计划限1用户、1数据连接、1数据源和1数据目标，且需手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可抓取和爬取网站。自动解决验证码并防止被屏蔽。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，适用于金融科技应用。免费计划每月5,000次调用。
* [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取API。免费层每月600次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致定义并交付到每个应用。最快方式是使用Cube Cloud，其免费层每日限1,000次查询。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。类似Postman的界面在Airtable中运行API请求。预建数十个应用集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。每月包含10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每日每IP 1,000次请求。CC-BY 4.0许可的精简数据库也免费。

  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费方案支持每月10个活跃用户(MAU)并追踪最多4张人脸
* [Deepnote](https://deepnote.com) - 新型数据科学笔记本。兼容Jupyter，支持实时协作与云端运行。免费版包含无限个人项目、基础机型(5GB内存+2vCPU)及最多3名编辑的团队协作。
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，用于构建相关应用。
* [Doczilla](https://www.doczilla.app/) — 通过SaaS API将HTML/CSS/JS代码直接转换为截图或PDF。免费方案每月可生成250份文档。
* [Doppio](https://doppio.sh/) — 托管式API，采用顶尖渲染技术生成并私有存储PDF和截图。免费方案每月400次生成额度。
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页及物联网的开源REST API后端。连接任意SQL/NoSQL数据库、文件系统或外部服务，即可自动生成包含实时文档和用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20积分。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API。免费方案每月50次API调用并开放模板库。
* [Earnings Feed](https://earningsfeed.com/api) - 实时SEC文件、内幕交易和机构持仓API。免费层每分钟15次请求。
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台。可视化任意计算图。本地使用免费。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具。试用版包含2个项目(各10张表)。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端。
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK与无代码集成。免费版每月250页，用户不限，支持3个模板。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费方案每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费微型方案每月500次交易检测。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度查询城市名的定位服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费方案每日2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供REST API和无代码集成。免费层每月50张图像和5个模板。
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版支持5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，免费方案每日100次事件分发并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 为Pytorch/TensorFlow/JAX构建、训练和部署NLP模型。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个云平台(如Exact Online/Twinfield)。含数据复制交换功能。开发者免费方案有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，无需API密钥，免费方案同一IP限45次/分钟。
* [ipbase.com](https://ipbase.com) - IP定位API，永久免费方案每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — 开发者永久免费方案每日1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，允许1,000次免费请求。
* [IPLocate](https://www.iplocate.io) — IP定位API，每日免费1,000次请求。含代理/VPN/主机检测、ASN数据等，并提供可下载的IP数据库。
* [IP2Location](https://www.ip2location.com) — 免费版IP定位服务，提供LITE数据库免费下载。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP定位API。免费方案每月5万积分，含500次WHOIS查询。
* [ipapi](https://ipapi.co/) - Kloudend公司提供的IP定位API，免费方案每月3万次查询(每日1k次)。
* [ipapi.is](https://ipapi.is/) - 开发者打造的IP定位API，免费方案提供1,000次无注册查询。
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API(免费5万次/月)，所有付费API可免费试用。
* [IPQuery](https://ipquery.io) — 无速率限制和收费的开发者IP API。
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月免费5万次查询。
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP。免费层无需注册，支持CORS跨域请求。
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON对象并作为REST API使用的服务。

  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss 是一款强大的在线 JSON 查看器、编辑器和验证工具。通过 AI 辅助修复、树状视图、表格视图、支持 12+ 种编程语言的代码生成功能，可格式化、可视化、搜索和操作 JSON 数据，还能将 JSON 转换为 CSV、XML、YAML、Properties 等格式。
  * [konghq.com](https://konghq.com/) — API 市场及强大的私有/公有 API 工具集。免费版在监控、告警和支持等功能上有所限制。
  * [Kreya](https://kreya.app) — 免费的 gRPC GUI 客户端，用于调用和测试 gRPC API。支持通过服务反射导入 gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型效果。免费支持最多 1000 条样本的数据集。
  * [LoginLlama](https://loginllama.app) - 登录安全 API，用于检测欺诈和可疑登录并通知客户。每月免费处理 1000 次登录。
  * [KillBait API](https://killbait.com/api/doc) - KillBait API 允许用户提交 URL 进行内容评估，检测潜在标题党并分类文章。API 设计适用于中等发布频率，限制为每小时 1 次、每天 10 次提交。媒体合作伙伴可申请更高限额。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费 API 计划每月提供 100 次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融数据的实时和历史查询。"永久免费" API 层级每天允许 100 次免费请求。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气 API，提供当前和预测天气数据。预报基于多个天气模型的机器学习组合以实现更高准确度。免费计划每天 400 次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为元标签标准化、精美链接预览、爬取能力或截图服务等数据。每日 50 次免费请求。
  * [Mindee](https://developers.mindee.com) – Mindee 是强大的 OCR 软件和 API 优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者标准化文档处理层以自动化应用工作流。免费层级每月 500 页。
  * [Mintlify](https://mintlify.com) — 现代 API 文档标准。提供美观易维护的 UI 组件、应用内搜索和交互式沙盒环境。免费支持 1 位编辑者。
  * [MockAPI](https://www.mockapi.io/) — MockAPI 是快速创建 API 原型、生成自定义数据并通过 RESTful 接口执行操作的简易工具。每个项目免费支持 1 个项目/2 个资源。
  * [Mockfly](https://www.mockfly.dev/) — Mockfly 是值得信赖的 API 模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟 API。免费层级每天 500 次请求。
  * [Mocki](https://mocki.io) - 可创建与 GitHub 仓库同步的 GraphQL 和 REST API 模拟工具。简易 REST API 无需注册即可免费开发使用。
  * [Mocko.dev](https://mocko.dev/) — 免费代理您的 API，选择云端模拟端点并检查流量。加速开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 生成自定义 HTTP 响应以模拟 HTTP 请求的简易 Web 应用。也提供[开源版本](https://github.com/julien-lafont/Mocky)。
  * [Mock N Roll](https://mocknroll.me/) - 免费模拟 API 服务——无需后端延迟即可模拟真实 API 响应的强大工具。前端开发、QA 测试和 DevOps 团队的理想选择。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
  * [microenv.com](https://microenv.com) — 为开发者创建虚假 REST API，支持生成代码和 Docker 容器应用。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，可跨多节点检查出口 IP 地址，了解您的 IP 在不同全球区域和服务中的呈现方式。适用于测试 Control D 等基于规则的 DNS 分流工具。
  * [Namekit](https://namekit.app/) - AI 驱动的域名发现工具——即时查找可用标准价格域名。每日免费查询。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取 JSON 结果。开发者每日 100 次免费查询。文章有 24 小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100 次免费请求。
  * [OCR.Space](https://ocr.space/) — 将图像和 PDF 文件解析为 JSON 格式文本结果的 OCR API。每月 25,000 次免费请求，文件大小限制 1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化免费创建 Open API 3 定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为 API，免费支持 5 个项目。
  * [Parseur](https://parseur.com) — 每月 20 页免费：从 PDF、邮件提取数据。AI 驱动。完整 API 访问权限。
  * [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者友好 PDF 生成 API，提供 Stripe 风格文档，每月包含 500 次免费 PDF 转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单 API 轻松将 HTML 或 URL 转换为 PDF。每月 100 次免费转换。
  * [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，提供可视化模板编辑器或 HTML 转 PDF、动态数据集成和 API 渲染 PDF 功能。免费计划包含 1 个模板，每月 100 次 PDF 生成。
  * [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过 API 执行。支持热力图和折线图可视化。
  * [Postman](https://postman.com) — 使用 API 开发协作平台 Postman 简化工作流并更快创建更好 API。永久免费使用 Postman 应用。Postman 云功能也有永久免费层级（含部分限制）。
  * [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 REST 及 GraphQL API
  * [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含 5 个部署工作流和每月 500 分钟无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管版 Apache Superset 服务。5 人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式 SQL 编辑器。
  * [PromptLoop](https://www.promptloop.com/) - PromptLoop 提供 10 倍易用性的 AI 网络爬取，接近零的采用时间，节省现有工作流 85%+ 时间，且运行速度比手动研究快 4 倍无妥协，包含所有研究任务的 REST API 端点。每月前 1000 积分免费。
  * [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 1 万次请求的免费层级。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共 API 列表。
  * [Reducto](https://reducto.ai) - 将任何非结构化文档（PDF、XLSX、JPG、PPTX 等）转为结构化 JSON 数据。解析、提取数据并编辑 PDF 表单。提供含 1.5 万免费积分的免费层级和按量付费。
  * [Rapidapi](https://rapidapi.com/) - 全球最大 API 枢纽，数百万开发者通过趣味挑战（含解决方案！）和交互示例连接数千个 API 进行开发。

  * [RequestBin.com](https://requestbin.com) — 创建可接收HTTP请求的免费端点。发送到该端点的所有HTTP请求都将记录相关负载和头部信息，便于您观察来自Webhooks和其他服务的调用情况。
* [reqres.in](https://reqres.in) - 一个托管的免费REST-API，可随时响应您的AJAX请求。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分。
* [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，用于网页抓取。匿名抓取数据，无需担心限制、封锁或验证码。每月前100次成功抓取免费（含JavaScript渲染功能，联系支持可获取更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API及免费代理检测服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度。
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的视觉或文本变化及数据提取。免费计划每月支持最多5个URL。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发您的Webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析与记录您的数据。免费轻量版支持2个数据源、1,000张表及25名用户。
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。提供免费计划，每表含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能。免费计划每月100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月100次成功API调用。
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供省时省力的开发工具。免费版每月300处理单元，含浏览器上传、数据隔离、熔断机制及任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。上传CSV即可通过API快速访问数据，加速应用开发。免费计划含2个API及2,500次/月调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且隐私优先的在线工具，直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，含SQL格式化校验器、正则测试器、假数据生成器及交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 协作设计与记录API的SaaS平台。免费计划提供设计、模拟及文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送50,000条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与深度研究API，支持整理研究成果。免费层1,000次请求/月，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址所属国家、城市、区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，含历史数据与天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布与管理API。含高级日志聚合、可观测性、文档与调试功能。免费层所有功能可用，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API。免费计划无限调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，含实时状况、逐时/日预报及天气警报。通过AI模型整合多源数据提升预测精度。免费层10,000次API调用/月。
* [WebScraping.AI](https://webscraping.ai) - 简易网页抓取API，内置解析、Chrome渲染与代理。每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理加速模型开发。免费层限个人项目，含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版每月25,000令牌（约10次PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识驱动算法库。
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月30,000次调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器、住宅IP的网页抓取API。每月1,000次免费调用，学生与非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，覆盖全球邮政数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API与验证服务。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持设计、构建并部署API至边缘节点。快速添加API密钥认证、限流、开发者文档与商业化功能。原生支持OpenAPI，完全可编程（Web标准API与TypeScript）。免费版含10个项目、无限生产环境、100万次请求/月及10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位JSON数据结构差异。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的IP地理定位API（JSON格式），适用于商业与非商业用户。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费的私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划包含公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅限个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费使用，支持无限用户、完整历史记录与集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能会议时间协调工具，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议排程工具。免费版支持1个日历连接和无限会话，提供桌面端与移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时Scrum扑克估算工具，支持无限成员参与故事点评估以加速规划流程
* [Telegram](https://telegram.org/) — 为所有人提供快速可靠的消息与通话服务。企业用户和小团队可享受大群组、用户名系统、桌面客户端及强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供所有基础工具，支持每个工具自动保存一条记录，标准处理速度及社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 团队实时语音协作平台。集成IDE配对编程、终端共享、音视频通话及屏幕共享功能，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备协作插件提升效率与参与度。免费版每月包含10,000分钟音视频时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与多人协作
* [Fibery](https://fibery.io/) — 互联工作区平台。个人用户免费，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队沟通工具。免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台。通过可定制虚拟空间实现真实社区互动，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册语法看板工具，无使用限制
* [flat.social](https://flat.social) - 可定制团队会议与社交互动空间。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动日报系统。含推送可视化、同伴认可机制及自定义提醒功能。免费版支持无限用户、3个仓库和3条提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具。公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作编辑工具。类似Google Docs的Markdown文件处理，私有笔记协作人数与模板功能[有所限制](https://hackmd.io/pricing)
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间线与视频通话的任务管理工具。5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — AR增强现实远程协助工具。免费版不含分析、加密及支持服务
* [ideascale.com](https://ideascale.com/) — 客户意见征集与投票平台，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 企业内部文档、博客、日历共享门户。10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭、社区及企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的接入体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/私聊中输入/meet发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签分类、多工作区协作。免费版含4个工作区与10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能产品团队与开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — Slack内锁定共享资源（如会议室/开发环境/服务器等）。免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站/PDF/图片上收集反馈的标注工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享与通行密钥的密码管理器。支持网页/浏览器扩展/移动端/桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心。50万用户以下免费
* [Miro](https://miro.com/) - 支持多设备访问的企业级协作白板，提供免费增值方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务/维基/数据库的Markdown协作笔记应用，作为全能工作空间支持多平台与网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具。免费版含核心功能，支持50个条目与5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天/画板/在线代码编译的远程技术面试平台，一键创建面试房间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁团队时间追踪应用。免费版支持10人以下的时间记录与报告生成
* [Pendulums](https://pendulums.io/) - 直观易用的免费时间管理工具，提供可视化数据统计
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户与完整消息历史
* [Raindrop.io](https://raindrop.io) - 跨平台加密书签工具。免费版支持无限书签与协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器直接协作
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 不限用户数量的免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页，可追踪上游服务商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作工具，用于头脑风暴、内容整理和笔记。免费版支持3个面板、无限用户和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，永久免费个人版
* [StreamBackdrops](https://streambackdrops.com) — 免费高清虚拟背景库，适用于Zoom/Teams/Google Meet等视频会议，无需注册
* [talky.io](https://talky.io/) — 免费群组视频聊天，支持P2P匿名通信且无需插件
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum流程，含时间追踪功能（5用户+3项目组合免费）
* [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程，含完整休假管理功能（5人以下团队免费）
* [Tefter](https://tefter.io) - 书签管理应用，提供强大的Slack集成（开源团队免费）
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板等端到端加密协作工具，无需登录
* [TimeCamp](https://www.timecamp.com/) - 不限用户的时间追踪软件，支持Jira/Trello/Asana等项目管理工具集成
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion替代品），免费版提供无限用户、10GB存储和10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用项目管理应用
* [twist.com](https://twist.com) — 异步友好型团队通讯工具，符合条件的团队可获折扣
* [tldraw.com](https://tldraw.com) — 免费开源白板/图表工具，支持智能箭头/贴纸/SVG导出，含VS Code插件
* [BookmarkOS.com](https://bookmarkos.com) - 免费书签/标签/任务管理三合一工具，支持文件夹协作
* [typetalk.com](https://www.typetalk.com/) — 通过网页/移动端即时消息分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动化按需PR预览（非营利组织免费Nano套餐）
* [whereby.com](https://whereby.com/) — 原appear.in，一键发起免费视频会议
* [windmill.dev](https://windmill.dev/) - 开源开发平台，可通过Python/Typescript脚本快速构建自动化流程（免费用户最多创建3个非高级工作区）
* [vadoo.tv](https://vadoo.tv/) — 简易视频营销托管平台，免费版支持10个视频/1GB存储/10GB月流量
* [userforge.com](https://userforge.com/) - 角色画像与用户故事映射工具（3个角色+2协作者免费）
* [wistia.com](https://wistia.com/) — 带品牌播放器的视频托管平台（25个视频+分析工具）
* [wormhol.org](https://www.wormhol.org/) — 直连文件分享服务（单文件5GB上限）
* [Wormhole](https://wormhole.app/) - 端到端加密文件传输（5GB以上文件采用P2P传输）
* [zoom.us](https://zoom.us/) — 40分钟限时视频会议（100人参与）
* [Zulip](https://zulip.com/) — 独特邮件式线程设计的实时聊天工具（免费版含1万条历史消息+5GB存储）
* [robocorp.com](https://robocorp.com) - 开源自动化运维平台（免费240分钟/月机器人运行时长）
* [Fleep.io](https://fleep.io/) — Slack替代品（小团队免费版含完整历史记录+1GB存储）
* [Chanty.com](https://chanty.com/) — 另一款Slack替代品（10人以下团队永久免费）
* [ruttl.com](https://ruttl.com/) — 网站/PDF/图片反馈收集工具
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台（免费版含10GB存储）
* [Webvizio](https://webvizio.com) — 实时网站反馈与BUG报告工具
* [Pullflow](https://pullflow.com) — 集成GitHub/Slack/VS Code的AI增强代码评审平台
* [Webex](https://www.webex.com/) — 40分钟限时视频会议（100人参与）
* [RingCentral](https://www.ringcentral.com/) — 50分钟限时视频会议（100人参与）
* [GitBook](https://www.gitbook.com/) — 技术文档管理平台（开发者免费版）
* [transfernow](https://www.transfernow.net/) — 免订阅的极简文件传输服务
* [paste.sh](https://paste.sh/) — 基于JavaScript与加密的简易代码粘贴站

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密/多标签粘贴/API接口/语法高亮编辑器等特性
* [SiteDots](https://sitedots.com/) - 直接在网站页面收集用户反馈，无需模拟画布等变通方案，免费版功能完整

* [Cushion](https://cushion.so/) - 面向分布式团队的异步协作工具，免费版支持30条消息/5名成员/不限访客
* [Fizzy](https://www.fizzy.do/) - 看板式项目管理平台，可创建公共看板/设置Webhook/使用卡片标记，免费版支持1000个项目条目

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。提供开发者免费套餐，同时可获取免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言配置。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 及 API 工具包。提供开发者免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层级的 GraphQL 架构 CMS，基础套餐含 10 万次/月 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS，完全免费管理本地或云端资产与数据库内容，无功能限制或付费墙。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何使用限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者计划支持 2 个用户、无限项目（各含 2 套环境）、500 个内容项、2 种语言及 API 支持，可升级更详细方案。
* [Prismic](https://www.prismic.io/) — 无头 CMS 提供全托管可扩展 API。社区计划包含单用户无限 API 调用、文档、自定义类型、资源与多语言支持。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境与实时托管数据库。每个项目免费包含无限管理员、3 个普通用户、2 个数据集、50 万次 API CDN 请求、10GB 流量及 5GB 资源存储。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS 企业级方案。开发者计划含 3 用户、500 内容项、3 种内置角色、30+ 内容类型、完整 REST API 及文档预览编辑功能。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown/MDX/JSON，基础版免费包含 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，可对接任意 CMS/API/数据库构建网站，打造更高转化率的无头网站。
* [Hygraph](https://hygraph.com/) - 小型项目免费层级的 GraphQL 优先 API，助力从传统方案迁移至现代无头 CMS。
* [Squidex](https://squidex.io/) - 小型项目免费层级的 API/GraphQL 优先系统，基于事件溯源机制的开源方案。
* [InstaWP](https://instawp.com/) - 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 开发者与营销人员适用的无头 CMS，兼容所有现代框架。社区版含管理 API、可视化编辑器、10 个数据源、多语言支持及 250GB/月流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书与无限定时任务，无时间限制。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，简单输入即可生成商业网站，支持免费自定义域名且无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的零代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量API和路由，支持深度集成。免费方案包含3个项目、5张数据表和1个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款基于AI的编程助手，通过深度理解代码库帮助开发者更快编写和理解代码。支持多款LLM（含本地推理）、兼容主流IDE、覆盖所有热门编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（基于Starcoder 16b模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise的创新代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源码整洁。开源项目免费使用，商业友好型免费版包含三个切面功能。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过分析全球代码库的集体智慧，帮助开发者更快构建优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据文本提示生成代码。可生成基于shadcn/ui和Tailwind CSS的React代码片段供直接使用。每次生成至少消耗30积分，新用户初始获得1200积分，每月额外赠送200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1位用户和100 MB存储空间的1个代码库
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9测试）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共及私有代码库无限免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公共仓库及1个私有库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者工作模式优先处理技术债务，可视化团队耦合度等组织因素，开源免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪，通过精准指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — AI驱动的代码缺陷/安全漏洞/性能问题检测，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下团队免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析代码变更，检测安全/性能/反模式/风险/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库与SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub代码库的Gerrit审查服务
* [gocover.io](https://gocover.io/) — Go语言包代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评注，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构，支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub代码库审查工具，公共及个人仓库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器与中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证与多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台检查项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的文本代码搜索引擎，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 自动标记代码中的`TODO`注释（及其他标记），帮助定位需要改进的代码段
* [CodeKeep](https://codekeep.io) - 代码片段版Google Keep。支持代码片段管理、发现与分享，提供带预设模板的智能代码截图工具和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更快速高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 在几分钟内完成应用和基础设施的云部署。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层提供5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD平台，支持原生和混合应用。免费版每月200次构建，每次10分钟构建时间，支持2名团队成员。开源项目可获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费支持5个项目和一个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时间。测试分析免费开发者层包含每月10万次测试执行，开源项目有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 包含所有功能的免费计划，托管式CI/CD服务支持GitHub、GitLab和BitBucket仓库。多种资源类型、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级CI/CD功能。免费版每月6000分钟执行时间，无限协作，私有项目30个并行任务，开源项目最高8万分钟构建时间。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，一个环境，共享服务器，无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月免费500分钟构建时间
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时间）
* [drone](https://cloud.drone.io/) - Drone Cloud支持开发者在单一平台运行跨架构（包括x86和Arm 32/64位）的持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目CI。一个全栈预览环境含5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限公开/私有仓库，最高2GB VM规格。
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.com) — GitHub工作流自动化和合并队列 — 公开GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具通过UI连接应用和自动化流程。支持众多应用和主流API。公开GitHub仓库免费，免费层含100MB空间、1000次操作和15分钟最小间隔。
* [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub Actions，每月免费3000分钟构建时间。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续资源合规、SAML 2.0单点登录，公共工作池访问：每月200分钟
* [microtica.com](https://microtica.com/) - 含预制基础设施组件的启动环境，免费在AWS部署应用并支持生产负载。免费层包含1个环境（在您的AWS账户）、2个Kubernetes服务、每月100分钟构建时间和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割端到端测试等功能加速CI中的单体仓库。免费计划支持最多30名贡献者，包含15万积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月免费3000分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是面向Terraform、OpenTofu和Terragrunt等基础设施即代码（IaC）工具的编排管理平台。最多2个用户免费包含所有功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，分层运行确保操作顺序。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户免费版每周有有限检查点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接测试您的Android和iOS应用。免费版包含每月30分钟的两个并发会话，无应用大小限制。
  * [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公开项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
  * [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于Monitoring as Code工作流和Playwright。开发者享有慷慨的免费层。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否为指定域启用CORS并识别差距。获取可操作见解。
  * [cypress.io](https://www.cypress.io/) - 对浏览器中运行的任何内容进行快速、简单和可靠的测试。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5名用户。
  * [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并生成脚本，免费版功能较少
  * [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在问题影响客户前发现弱点。Gremlin Free支持对最多5台主机或容器执行关机和CPU攻击。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费版支持最多4个并发节点/10次网格启动/4,000分钟测试/月
  * [katalon.com](https://katalon.com) - 提供测试平台，适合不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
  * [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费版支持最多10分钟测试文件，开源项目无限免费。
  * [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费版每月模拟最多50个并发用户60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供整体视觉回归测试。团队成员不限，开源完全免费，7,000张快照/月。
  * [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，含AI辅助测试用例生成
  * [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费版每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，5,000张快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷和衡量影响。免费层包含所有核心功能，500MB附件存储和最多3名用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费版限iOS和Android各10次测试，但包含付费版大部分功能，如无限次测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、录制含网络和控制台日志的会话。免费版最多10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供实用SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制测试唯一URL向开发者展示如何复现。
  * [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
  * [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费版包含Jira集成、无限项目、CSV/XLSx测试用例导入、时间跟踪和1GB文件存储。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台，支持主流测试框架集成。开源开发者、个人用户、教育机构及初创小团队可申请基础免费项目之外的折扣或免费方案。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求，支持转发至本地或历史记录回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，集成工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目且享有五年免费维护期。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络与服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 通过专属URL调试和检查集成过程中的webhook与HTTP请求。完全免费，可创建无限URL并获取诊断建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL及邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受入侵的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费版每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式，目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — AWS安全性与合规性审计及监控
* [公共云威胁情报](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理。测试期间免费支持3个证书和1个用户
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码、文件、目录或容器
* [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言的简易网页工具，支持数据编解码分析。如同密码学领域的瑞士军刀，所有功能免费无限制使用，可自建开源版本
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及组织策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项
* [DJ安全检查](https://djcheckup.com) — 自动化Django站点安全检测工具（基于Pony Checkup二次开发）
* [Doppler](https://doppler.com/) — 支持同步到多云的通用密钥管理器，免费版支持5个用户及基础访问控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享.env文件，免费支持3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动检测并修复源代码中的敏感信息，扫描350+种密钥和敏感文件，25人以下团队免费
* [我被泄露了吗？](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
* [hostedscan.com](https://hostedscan.com) — 网页应用/服务器/网络漏洞扫描器，每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到第三方生产环境的全流程管理，5名开发者内免费
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
* [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项安全漏洞，1个私有项目免费，开源项目不限量
* [Mozilla安全观察站](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25用户及30天历史数据
* [openapi.security](https://openapi.security/) - 快速检测OpenAPI/Swagger接口安全性的免登录工具
* [pixee.ai](https://pixee.ai) - 免费GitHub安全机器人，自动为Java代码库提交PR修复漏洞（即将支持更多语言）
* [pyup.io](https://pyup.io) — Python依赖项安全监控及自动更新，1个私有项目免费，开源项目不限量
* [qualys.com](https://www.qualys.com/community-edition) — 检测网页应用漏洞，审计OWASP风险项
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
* [seclookup.com](https://www.seclookup.com/) - 威胁情报API可丰富SIEM中的域名威胁指标，提供域名综合信息以提升威胁检测能力，免费5万次查询[点此获取](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 检测修复开源依赖项漏洞，开源项目无限次扫描，私有项目每月限200次
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案，含应用和防火墙CLI工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次SCA扫描，在发布前发现并修复安全威胁
* [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化扫描应用，单个应用支持无限次扫描和环境
* [Sucuri安全检测](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站免费安全检测、站点杀毒及服务器防火墙(WAF)，注册用户可获邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置/证书/链等，不限于HTTPS
* [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，适合个人研究员及刚接触网络威胁情报的组织，免费支持3用户
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版每周XSS检测
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理，单个应用每月100万次加密免费
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全等数字安全解决方案，250用户内免费

  * [Escape GraphQL 快速扫描](https://escape.tech/) - 一键式 GraphQL 端点安全扫描。免费使用，无需登录。
  * [我的密钥泄露了吗](https://gitguardian.com/hasmysecretleaked) - 免费搜索 2000 万条公开 GitHub 仓库、代码片段、议题和评论中暴露的密钥
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 全能 SSL 工具包，提供私钥 & CSR 生成器、SSL 证书解码器、证书匹配器和 SSL 证书订购等功能。用户可通过 CNAME 记录（而非 TXT 记录）从 Let's Encrypt、Google Trust 和 BuyPass 生成免费 SSL 证书。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费支持1000月活用户和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO。免费方案包含2.5万月活用户、无限社交登录连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速实现无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000月活用户。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度权限控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持1万月活用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个域。
* [Corbado](https://www.corbado.com/) - 为新旧应用添加通行密钥优先认证。无限月活用户免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK方式。免费7500活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)。10用户免费，含全认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，分钟级集成。免费启动包含7500月活用户。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的2FA，10用户免费，支持VPN/网站/SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权。免费支持100月活用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，含3个企业应用和5个个人应用，用户数不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全平台。永久免费开发者账户包含全安全功能、无限团队成员、200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC，含实时更新和无代码策略UI。免费层含1000月活用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费域支持1000用户和10个SSO连接，使用包含[组织扩展](https://phasetwo.io/product/organizations/)的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构即可添加企业SSO。免费方案含无限月活用户、无限组织和2个SSO/SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费含1万月活用户、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 不反人类的开源认证方案。5分钟极速入门，可免费自托管或使用含1万免费月活用户的SaaS版。
* [SuperTokens](https://supertokens.com/) - 原生集成应用的开源用户认证，快速启动同时掌控用户体验。免费支持5000月活用户。
* [Warrant](https://warrant.dev/) - 企业级托管授权与访问控制服务。免费层含100万月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理，支持多租户(B2B)场景。免费2.5万次认证请求，全安全功能无限制（OTP/无密码登录/策略等不设付费墙）。
* [PropelAuth](https://propelauth.com) - 代码级快速实现企业级销售功能。免费支持200用户和1万封事务邮件（带"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份（含认证与授权）。免费支持5000月活用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证支持100万月活用户，含邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：单个应用、分析功能、无限版本与安装、反馈收集功能。
  * [Loadly](https://loadly.io) - iOS & Android 测试版应用分发服务，提供完全免费的无限下载、高速下载和无限上传功能。
  * [Diawi](https://www.diawi.com) - 直接将 iOS & Android 应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
  * [InstallOnAir](https://www.installonair.com) - 通过无线方式分发 iOS & Android 应用。免费方案包含：无限上传、私有链接（访客2天有效期/注册用户60天有效期）。
  * [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大100MB文件大小。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备，免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器，每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理，免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具，免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 用户友好型服务器管理与部署平台，提供免费层级（1台服务器）
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器，免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达功能的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数
* [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持多可用区节点部署
* [courier.com](https://www.courier.com/) — 统一API集成推送、应用内消息、邮件、聊天、短信等通信渠道，含模板管理等功能。免费套餐每月10,000条消息
* [Engage](https://engage.so/) - SaaS客户互动与自动化全流程工具（邮件、推送、短信、产品导览、横幅等）。每月免费支持1,000名活跃用户
* [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，预置应用内收件箱和无代码模板编辑器。免费套餐每月10,000条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接至云原生物联网消息代理。永久免费支持100台设备连接（无需信用卡）
* [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用实现应用内、邮件、短信、Slack和推送等多渠道发送。免费套餐每月10,000条消息
* [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含10,000条通知/月 + 100条短信和自动语音呼叫
* [Novu.co](https://novu.co) — 开源开发者通知基础设施。统一管理邮件、短信、站内信、应用内和推送等通信渠道的简易组件与API。免费套餐每月30,000条通知（保留90天）
* [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和200,000条消息/日
* [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和100,000个事件/日
* [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure云平台。永久免费套餐支持4KB消息大小、50个活跃连接和5GB数据/月
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API服务，支持实时数据注入、视频布局、录制，提供全功能托管网页UI或自定义UI套件。[开发者免费 tier](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知 - 免费支持10,000订阅用户，推送次数不限，支持浏览器内消息
* [httpSMS](https://httpsms.com) - 通过Android设备作为短信网关收发短信。每月免费200条收发额度
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全无服务器MQTT代理。永久免费100万会话分钟/月（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhooks轻松集成，完整掌控提醒设置。免费套餐：每日50条消息至1台设备1个应用
* [SuprSend](https://www.suprsend.com/) - 采用API优先设计的通知基础设施，通过单一通知API实现事务通知、定时任务和互动通知的多渠道交付。免费套餐每月10,000条通知，支持摘要、批量、多渠道、用户偏好、租户隔离、广播等多样化工作流节点
* [SMSGate](https://sms-gate.app) - Android™短信网关服务，通过云端路由实现设备间短信收发。完全免费的云服务（建议日用量超10,000条时通知以维持服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志存储，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储空间，日志保留15天，支持7天内检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志存储，保留7天
* [log.dog](https://log.dog/) — 远程调试/日志记录SDK（支持iOS和Android），提供Web界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB日志，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量项目、字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 带免费层的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言/贡献者，提供初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言/项目
* [Localit](https://localit.io) – 开发者友好的快速本地化平台，无缝集成GitHub/GitLab，AI辅助与人工翻译，免费计划包含2用户/500键/无限项目
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串/语言，提供初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源免费
* [Translation.io](https://translation.io) - 开源免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言/项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费层支持10,000条字符串源，自托管版本无限量
* [免费PO编辑器](https://pofile.net/free-po-editor) — 完全免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持Web和移动端本地化。自带LLM或使用Lingo.dev托管引擎每月10,000词免费额度

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 24小时指标免费，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js
* [appneta.com](https://www.appneta.com/) — 免费，数据保留1小时
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的任务控制中心。小流量使用免费（64MB日志）。
* [assertible.com](https://assertible.com) — 自动化API测试和监控。团队和个人免费计划。
* [Better Stack](https://betterstack.com/better-uptime) - 在一个产品中提供正常运行时间监控、事件管理、值班调度/警报和状态页面。免费计划包括十个监控器，检查频率为3分钟，以及状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器，5个正常运行时间监控器，无限用户，无限仪表板，无限警报规则。
* [checklyhq.com](https://checklyhq.com) - 开发人员的开源端到端/综合监控和深度API监控。免费计划包括一个用户和10k API & 网络/1.5k浏览器检查运行。
* [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控。免费：无限按需扫描，无限用户，无限存储账户。订阅：自动扫描，API访问等。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查找URL或网站的核心Web Vitals历史。
* [cronitor.io](https://cronitor.io/) - 针对cron作业、网站、API等的性能洞察和正常运行时间监控。免费层提供五个监控器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — cron作业监控。一个免费监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。电子邮件、Slack警报。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告，帮助解密云基础设施成本。每月在Google Cloud Platform上花费不超过5,000美元免费。
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者的即时性能洞察。免费，数据保留24小时
* [fivenines.io](https://fivenines.io/) — Linux服务器监控，实时仪表板和警报 — 永久免费支持最多5台监控服务器，60秒间隔。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的可观测性平台，将指标和日志与Grafana集成。免费：3个用户，十个仪表板，100个警报，Prometheus和Graphite中的指标存储（10,000系列，14天保留），Loki中的日志存储（50 GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控您的cron作业和后台任务。最多20个检查免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 20个监控器和2个通知渠道（Slack和Discord）永久免费。
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可完成的实时监控仪表板，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，无限订阅和无限团队。
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用程序和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站最多100页免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 免费负载测试工具，有限制
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台提供对您的应用和堆栈的完全可见性，以便您可以大规模监控和诊断问题。他们为开发社区提供永久免费计划，允许最多1M日志事件的日志监控，基础设施监控和APM最多2台主机。
* [MonitorMonk](https://monitormonk.com) - 简约的正常运行时间监控，带有美观的状态页面。永久免费计划提供HTTPS、关键词、SSL和响应时间监控，支持10个网站或API端点，并提供2个仪表板/状态页面。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源工具，用于收集实时指标。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台旨在帮助工程师创建更完美的软件。从单体应用到无服务器，您可以对所有内容进行检测，然后分析、排查和优化整个软件堆栈。免费层提供每月100GB的免费数据摄入，一个完全访问的免费用户，以及无限的主要免费用户。
* [nixstats.com](https://nixstats.com) - 一台服务器免费。电子邮件通知，公共状态页面，60秒间隔等。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot为网站和API提供正常运行时间监控，监控cron作业和计划任务。还提供状态页面。前五个检查，3分钟间隔免费。免费层通过Slack、Discord和电子邮件发送警报。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国的长城防火墙屏蔽。通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息，识别DNS污染。
* [opsgenie.com](https://www.opsgenie.com/) — 强大的警报和值班管理，用于运营始终在线的服务。最多5个用户免费。
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括警报、强大的可视化功能和基本报告。最多100个传感器免费。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变化，最多6个监控器，每日检查免费。
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班）。
* [pageradar.io](https://pageradar.io/) — 监控网站的核心Web Vitals、SEO变化和正常运行时间。免费计划包括5个URL，每日核心Web Vitals监控，10个HTML/SEO变化监控器，167个国家/地区的联盟链接监控，以及电子邮件警报。
* [pagertree.com](https://pagertree.com/) - 简单的警报和值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控，最多100,000事件免费，支持无限项目和无限状态页面。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检查无限URL并通过Discord、Slack或电子邮件获取停机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 高级状态页面平台，带监控。免费层包括一个可自定义的公共状态页面，带SSL子域名。开源项目和非营利组织免费提供专业计划。
* [Pulsetic](https://pulsetic.com) - 10个监控器，6个月的历史正常运行时间/日志，无限状态页面和自定义域名包含！永久免费，无限电子邮件警报。无需信用卡。

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标与日志），零配置复杂度。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务及SSL监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，助力实践SRE最佳方案。永久免费计划支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（含功能限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS及域名监控。免费监控10台服务器、10项运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20个主流Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监测器（5分钟间隔）和可定制状态页（支持商用）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理与响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 稳定运行时间监控平台，支持Cron任务、关键词、网站、端口、Ping等多种监测器。25项免费监测（3分钟间隔），通过电话、短信、邮件和Webhook发送告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20项免费；Linux/Windows服务器监控：5项免费；状态页：1项免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 为开发者提供的错误日志与运行状态监控。开源项目可免费使用小型商业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持无限量自托管。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。免费1,000次事件/月，自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（12,000次错误/月）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含5,000次错误/月，无限用户，30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限制
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好型一键错误报告。免费计划支持无限次记录。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用户免费计划支持无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备容错纠错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1,000名活跃用户免费，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，支持克隆、完整编辑与下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目学习Linux、DevOps、网络安全、编程与数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 公开2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript与SQL学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程（React/Node.js/GraphQL/TypeScript等），支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所机构的4000+免费课程，涵盖计算机科学/工程/数据科学
* [Django教程](https://django-tutorial.dev) - 首个Django框架学习指南，为用户文章提供dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程（含Python Click/Flask-RESTx）
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言开源教育平台，含人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证。无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 新闻简报服务。最多100名订阅者免费
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供您域名下的2个邮箱地址，100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送多达9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者和每月10000封邮件免费
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器；只是一个邮件客户端，可直接从客户端发送邮件而无需暴露凭据。免费层每月200次请求，2个邮件模板，请求最大50KB，有限的联系人历史记录
* [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址会更新。完全免费，不收取任何费用
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证最多200个邮箱，检查是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮件生成器。支持10个域名，可创建无限地址（含广告），除此之外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限数量的邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等TLD需付费，因垃圾邮件问题）
* [Imitate Email](https://imitate.email) - 用于测试邮件功能的沙箱邮件服务器，适用于构建/QA和CI/CD。免费账户每天15封邮件，永久有效
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 一个域名的免费邮件转发。接收和发送来自您域名的邮件
* [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过方便的Chrome扩展删除。非常适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源且可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面提供服务
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封邮件免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者和每月1000封邮件免费
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者和无限邮件以及自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费的公共邮件系统，可使用任何收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封邮件免费（每天200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮件，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 免费API用于临时邮件测试，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API、SMTP，每月3500封事务性和营销邮件免费。邮件沙箱 - 用于开发的假SMTP服务器，免费套餐包含1个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者的免费临时邮箱。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS阅读器查看收到的邮件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到您的服务器）
* [pepipost.com](https://pepipost.com) — 第一个月30000封邮件免费，之后每天前100封免费
* [Plunk](https://useplunk.com) - 每月3000封邮件免费
* [Postmark](https://postmarkapp.com/) - 每月100封邮件免费，无限DMARC每周摘要
* [Proton Mail](https://proton.me/mail) -  免费安全邮箱服务提供商，内置端到端加密。免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠的邮件投递API。免费层（每月10000封邮件）。异步发送。使用多个SMTP服务器。黑名单、日志、跟踪、Webhook等
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100个邮箱，以及其他免费API如DEA检测器、DNS查询、SPF检测器等
* [Resend](https://resend.com) - 面向开发者的事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费新闻简报服务。开始收费时再付费

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封事务邮件免费
* [temp-mail.io](https://temp-mail.io) — 免费临时邮箱服务，支持同时生成多个邮箱及邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱服务，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务商，内置端到端加密，无广告无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每日25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮件服务商，现提供多款含免费方案的服务：
   - [邮件](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储，捆绑Zoho办公套件（Writer/Sheets/Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制，[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 25用户免费团队协作，含3个群组/3个自定义应用/3个看板/3个手册/10个集成
   - [会议](https://zoho.com/meeting) — 支持3人会议和10人网络研讨会
   - [Vault](https://zoho.com/vault) — 个人版密码管理工具
   - [Showtime](https://zoho.com/showtime) — 支持5人远程培训的会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，支持RSS/Atom订阅
   - [Subscriptions](https://zoho.com/subscriptions) — 免费管理20个客户/订阅，由Zoho托管支付
   - [Checkout](https://zoho.com/checkout) — 支持3个页面和50笔支付的账单管理
   - [Desk](https://zoho.com/desk) — 3客服人员免费工单系统，集成[Assist](https://zoho.com/assist)远程支持
   - [Cliq](https://zoho.com/cliq) — 100GB存储的团队聊天软件，支持单点登录
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建
   - [Sign](https://zoho.com/sign) - 电子签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约管理
* [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API。每月5,000封邮件，含黑名单监控等高级功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队成员，提供卓越的技术支持且价格合理。免费版包含10个开关、2个环境、1个产品和每月500万次请求配额。
* [Flagsmith](https://flagsmith.com) - 安全发布新特性，统一管理Web、移动端和服务端应用的功能开关。可选择托管API服务、私有云部署或本地化部署方案。
* [GrowthBook](https://growthbook.io) - 开源特性开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，不限开关数量和实验次数。
* [Hypertune](https://www.hypertune.com) - 类型安全的特性开关与A/B测试系统，集成分析功能和应用配置管理，支持Git式版本控制和同步内存本地评估。5人团队免费使用，不限开关和测试数量。
* [Molasses](https://www.molasses.app) - 强大的特性开关与A/B测试工具。免费版提供3个环境，每个环境支持5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级多区域可扩展特性开关管理平台。免费方案包含10个开关、2个环境且不限请求次数，提供SDK、分析看板、发布日历、Slack通知等完整功能。
* [Statsig](https://www.statsig.com) - 集特性管理、A/B测试与分析于一体的强大平台。免费方案不限席位、开关数量和实验次数，支持每月100万事件量级的动态配置。
* [Abby](https://www.tryabby.com) - 开源特性开关与A/B测试方案，支持代码化配置和全类型TypeScript SDK。深度集成Next.js和React等框架，提供高性价比的扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体库，经过人工精选并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 提供大量免费字体，可通过下载或链接Google CDN快速部署到网站
* [FontGet](https://www.fontget.com/) - 提供分类清晰且带标签的多样化可下载字体库
* [Fontshare](https://www.fontshare.com/) - 专业级字体免费服务平台，所有字体均可用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 可检测网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文字快速筛选预览
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，包含中日韩（CJK）字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大的开发者友好型表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版含无限表单，每月20次提交，若显示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月250次提交。现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交终端，含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单终端，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单工具。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets、Slack、ActiveCampaign、Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单终端。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1表单、50次提交、单文件上传、100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过UI转发提交至邮件、Slack或Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版无限表单和提交，含预制模板、反垃圾及100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单终端，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个网站、1表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单和调研工具。50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和产品行为分析工具。永久免费版每月500活跃用户，无限回复和事件，多集成导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义跳转与响应页，Telegram & Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件、网站、产品内或移动端调研，AI创建工具，每月25次回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费版5表单，每表单最多3步骤，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计表单。免费版每表单限10字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版签署文件带水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站联系表单，无需后端代码。免费版无限表单、域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研和表单构建器。免费版3调研/账户，每月100次回复，每调研10元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特风格表单。不限表单数量和功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版收集100次回复，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 移动端应用内调研工具。使用Qualli AI设计完美问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率趣味调研收集反馈。免费版含1活跃调研，每调研25次回复，支持自定义模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复Cursor、Windsurf和Copilot等工具的输出，以满足企业的质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费自动化Pull Request审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。用2行代码调用200+ LLM的统一格式。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，提供可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Arize AX](https://arize.com) - AI工程平台，帮助AI工程师/产品经理通过内置Alyx代理评估和观测AI应用及代理。免费产品包含每月25k spans和1GB数据摄入量。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示调试和数据管理。免费计划每周提供最多1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 统一搜索，可同时搜索所有应用。通过您的信息回答问题的搜索助手。免费计划提供无限统一搜索和每天5次Copilot查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10编码和管理。此外还提供专业套件的免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试LLM应用性能问题。为任何LLM创建开放遥测标准追踪，提升可观测性，兼容任何观测客户端。免费计划每月提供50K次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，促进工程师与非技术团队协作，微调并投产生成式AI产品。免费计划包含所有平台功能、每月1k次追踪和1个DSPy优化工作流。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月50k次观测和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Phoenix](https://github.com/Arize-ai/phoenix) - 来自Arize AI团队的开源平台，用于AI代理的追踪、模型评估和实验。所有功能在Elastic License 2.0 (ELv2)下开源。
* [Pollinations.AI](https://pollinations.ai/) - 易用、免费的图像生成AI，提供免费API。无需注册或API密钥，多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - AI原生的快速、简单且安全的商业智能解决方案，替代Tableau、Power BI和Looker。Othor利用大语言模型(LLM)在几分钟内交付定制商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型擅长自然语言处理，适合多样化开发需求。注意这些模型虽免费但受速率限制。此外还提供Claude、OpenAI、Grok、Gemini和Nova等付费模型满足进阶需求。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000个免费词次的Azure OpenAI、DeepSeek和Google Gemini模型访问，支持代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，消除噪音和回声同时保留自然人声清晰度。完全免费：无限次一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs是由Cloudflare提供支持的免费开源CDN服务，被全球超过11%的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管流行的第三方JavaScript库（如jQuery），可轻松将其添加到Web应用程序中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速启动和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不中断的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。即时处理图片并拥有全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月高达5TB的免费CDN流量，19个核心PoP，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划包含最多5个用户和每天1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，30秒超时限制
* [Apply.build](https://apply.build/) — 免费部署GitHub应用，配置0.5 vCPU/512MB内存，欧洲服务器，自动防火墙，实时性能监控。支持Node.js/Python/Go/Java/静态网站/微服务等
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket），含认证服务。免费版每项目含1数据库/3存储桶/5函数
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链，商业用途免费且项目数量不限
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript自动生成可视化CMS的边缘原生前端平台，内置A/B测试/内容分段/实时分析。适合内容密集型和企业级电商网站。免费版支持5k月访问量或开源/个人项目
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版含10万日请求和100GB月流量
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD/SSH/MariaDB/Postgres的Linux主机服务。免费版1GB存储+1GB月流量，限用免费域名
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的后端框架，无样板代码。含业余项目免费云托管
* [flightcontrol.dev](https://flightcontrol.dev/) - 在自有AWS账户通过Git推送式工作流部署Web服务/数据库等。个人GitHub仓库开发者享免费层，AWS费用通过AWS结算（可使用AWS免费额度）
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供1个永不休眠实例+免费PostgreSQL数据库（限2连接/1万行/无备份）
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，免费计划含10万服务调用/1万异步任务/10万Redis命令
* [pipedream.com](https://pipedream.com) - 开发者集成平台，基于任意触发器构建工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。初级账户免费，含1个your-username.pythonanywhere.com域名应用/512MB存储/1个MySQL数据库
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版含500次/小时、2,500次/日、5万次/月调用（付费版支持自定义域名）
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持Docker容器/Web应用/API的Git部署。免费实例可部署至德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1CPU
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/5,000次免费API调用（限5次/秒）
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管平台，为Meteor应用提供免费MongoDB共享主机和自动SSL
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2服务/2定时任务/1数据库
* [YepCode](https://yepcode.io) - 无代码工具灵活性与编程语言能力结合的全能平台。[免费版含1,000次yeps调用](https://yepcode.io/pricing/)
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)含3项目/1GB出口流量/300分钟月构建时长
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务+每月5美元额度
* [mogenius](https://mogenius.com) - 简易Kubernetes服务部署平台。免费版支持本地Kubernetes连接，创建生产级测试环境
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者平台即服务。免费版含5个组件+100美元月额度
* [Daestro](https://daestro.com) - 跨云与本地运行计算任务。免费版含10并发任务/2计算实例/自托管计算/1云服务商/1容器仓库/1定时任务

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用触发事件时发送Slack消息或添加Google表格行。每月免费额度5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动与网页Baas服务，含1GB免费文件存储、每月50,000次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - 提供文档与资源以构建企业级数字创新方案，包含平台、SDK和组件库的完整沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。1000用户以下应用免费。
* [convex.dev](https://convex.dev/) - 响应式BaaS服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费：100万条记录，500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言平台。Beta期间可访问，正式版将提供慷慨免费套餐。
* [Firebase](https://firebase.com) - 提供应用构建与运营支持。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。永久免费服务包括A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置。
* [Flutter Flow](https://flutterflow.io) - 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板库。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能。
* [hasura.io](https://hasura.io/) - 为现有数据库提供即时GraphQL API，支持安全访问Web、移动及数据集成场景。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为网页和移动应用提供的无服务器后端。免费套餐含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送，含无限联系人和自动预热功能。
* [paraio.com](https://paraio.com) - 后端API服务，支持灵活认证、全文搜索和缓存。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息和100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2000订阅者内无限通知。
* [pusher.com](https://pusher.com/beams) - 2000月活用户免费无限推送通知，支持iOS/Android的统一API。
* [quickblox.com](https://quickblox.com/) - 即时通讯、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API等服务的服务器，并通过管道组合转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用，通过点击定制数据模型，支持Apex代码和API集成。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) - 多平台数据实时同步服务，免费支持2500用户/月的结构化数据传输与存储。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，免费套餐含认证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) - 含认证、配额、监控和分析的API管理平台，提供免费云服务。
* [zapier.com](https://zapier.com/) - 应用自动化连接工具。每15分钟5次触发，每月100次任务免费。
* [IFTTT](https://ifttt.com) - 自动化连接您喜爱的应用与设备。免费版支持2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务/15分钟更新间隔，支持5个自动化流程和Webhook。
* [LeanCloud](https://leancloud.app/) - 移动后端服务。免费含1GB数据存储、256MB实例、每日3K API请求和10K推送。（API与Parse平台高度兼容）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账户超过180天的用户提供$5/月免费额度，适合托管应用及数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。支持15+种数据库和任意API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，提供可定制的移动端和Web应用。具有拖拽式界面、离线支持、实时位置追踪等功能，并能与多种第三方服务集成
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理快速构建内部工具、自定义用户流程、数字体验、自动化流程、管理面板和运营应用的低代码平台（效率提升10倍）
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并共享给团队。免费层包含完整API访问权限、AI编程助手和每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境（支持总用户数），每个应用0.5GB存储和1GB内存。免费层也包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 企业级Web开发PaaS（支持本地或云端部署），免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。高度可扩展——任何能用JavaScript和API实现的功能都能在ReTool中完成。免费层每月支持最多5个用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。支持AI生成、可视化编辑和代码扩展。提供集成、认证、权限和审计日志等集中管控功能
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建商业应用。可连接数据库、云存储、GraphQL、API端点、Airtable等数据源，并通过拖拽式应用构建器开发程序
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。通过JavaScript/Python/SQL实现高度定制化的拖拽式UI构建。提供云端和自托管两种方案，免费版支持最多5个用户
* [manubes](https://www.manubes.com) - 强大的无代码云平台，专注于工业生产管理。免费版支持1个用户每月100万次工作流活动（[德语版本](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费网络托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，可通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费网络托管 + 免费短域名，PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费 + 开发者优先的部署和开发平台，减少基础设施麻烦并加速设置。
* [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建Web和移动应用，免费但带有Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 去中心化Web3前端托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform Starter层级免费构建和部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管到网络。仅限静态站点。永久免费。每个Google/Microsoft账户一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，用于本地托管站点并实时公开分享。通过其美观的用户界面、API和/或CLI按您喜欢的方式工作。
* [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP邮件、免费子域名、免费域名托管、DNS区域编辑器、网站统计、免费在线支持及许多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — FreeHostia提供免费托管服务，包括行业最佳控制面板和50多个免费应用的一键安装。即时设置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利免费网络托管，带Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP邮件，无限带宽，免费子域名，1000 MB存储免费并可升级。
* [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，自定义域名带SSL，100 GB月流量，260+ Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 带SFTP访问的网络托管，支持文件上传下载和PHP。
* [Neocities](https://neocities.org) — 静态托管，1 GB免费存储，200 GB带宽。
* [Netlify](https://www.netlify.com/) — 构建、部署和托管静态站点/应用，每月免费300积分（等于30 GB带宽）。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，包含多种形式的网络托管（静态托管、基于容器的托管、WordPress等托管应用一键安装）。一个免费网络托管（静态或容器化）和一个免费数据库，100 GB带宽和300构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps和可扩展基础设施。开发者和机构免费。无自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等。
* [render.com](https://render.com) — 统一云平台，构建和运行应用及站点，带免费SSL、全球CDN、私有网络、Git自动部署，以及完全免费的Web服务、数据库和静态网页计划。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者的静态网页发布。无限站点，支持自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 一个站点，50页，50 MB存储，仅限170+预定义块中的主要块，无自定义字体、无favicon、无自定义域名。
* [Vercel](https://vercel.com/) — 构建、部署和托管Web应用，带免费SSL、全球CDN，每次`git push`生成唯一预览URL。完美支持Next.js和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器 — 无限网站，70+块，五个模板，自定义CSS、favicon、SEO和表单。无自定义域名。
* [Qoddi](https://qoddi.com) — 类似Heroku的PaaS服务，开发者为中心，全功能。免费层级支持静态资源、暂存和开发者应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的免费Flarum托管，最多250用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 一个项目免费托管，两周容器TTL，每个项目500 MB RAM，SFTP — 1G磁盘空间。
* [Serv00.com](https://serv00.com/) — 3 GB免费网络托管，每日备份（7天）。支持：Crontab任务、SSH访问、仓库（GIT、SVN和Mercurial），支持MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
* [Sevalla](https://sevalla.com/) — 简化应用、数据库和静态网站部署和管理的托管平台 — 1GB站点限制，100GB免费带宽，600免费构建分钟，每个账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 含API支持的免费DNS服务，提供多项免费DNS功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全性的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名区域（10条记录）。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，支持5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费动态DNS服务，可管理多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名（注册后通过"Subdomains"菜单获取）。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪/广告的免费动态DNS服务，域名数量无限制。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名（需每30天确认）。
* [sslip.io](https://sslip.io/) - 输入含IP地址的主机名即可返回该IP的免费DNS服务。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管服务。
* [zonewatcher.com](https://zonewatcher.com) - 免费监控1个域名的DNS变更并自动备份。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 无订阅/广告的高性能免费动态DNS服务。
* [LocalCert](https://localcert.net) - 提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名服务
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名服务

**[⬆️ 返回顶部](#目录)**  

（注：根据要求保留了所有格式标记、链接结构和技术术语，同时调整了中英文语序差异。最后一行根据中文习惯将"Back to Top"译为"返回顶部"，并保持锚点标记不变）

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求的免费额度
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra服务，提供[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，包含函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和网页端数据管理器。免费方案含5GB存储和每分钟60次API调用，支持2名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点配置为2核CPU、2GiB内存和8GiB存储，每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层包含每月50万次命令、256MB最大数据库容量和20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的托管数据库集群，含1个节点和8GB存储，专为开发者在物联网到AI领域构建下一代应用设计
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务，免费额度含25MB内存、1个代理服务器和基础分析功能
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — Seafile团队开发的类电子表格灵活数据库，免费版含无限表格、2,000行数据、1个月版本历史和最多25名团队成员
* [skyvia.com](https://skyvia.com/) — 云端数据平台，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能与主流商业应用集成的工具，免费方案包含无限用户、10个堆栈和每个堆栈2GB附件
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系数据库，TiDB Serverless免费层每月提供5GB行存储、5GB列存储和5,000万请求单位(RUs)
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发体验，永久免费方案含9GB总存储、500个数据库、3个位置、每月10亿行读取量及SQLite本地开发支持
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费额度为每5分钟3MB写入/30MB读取和10,000个基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务，提供模式化结构、关联关系、自动REST API（支持类MongoDB查询）和多用户管理界面。免费方案支持3个用户、2,500条记录和每秒1次API请求
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万请求单位(RUs)和10GiB存储（价值15美元）([请求单位说明](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html))
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库/分析平台，支持Cypher查询语言和REST API，免费版限制图规模（5万节点/17.5万关系）
* [Neon](https://neon.tech/) — 托管PostgreSQL服务，免费层含0.5GB总存储、1个项目、10个分支、无限数据库、主分支永不休眠（非主分支计算资源5分钟后自动暂停），每月20小时非主分支活跃时长
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超高速托管PostgreSQL，免费版含1GB存储、10个数据库，与Prisma ORM深度集成
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库，提供GraphQL API接口，免费层限制每日1MB数据传输
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入，可将SQL查询发布为托管HTTP API。免费版无时间限制，含10GB存储和每日1,000次API请求
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库/分析平台，提供类SQL图查询语言和REST API。免费实例含2核vCPU、8GB内存和50GB存储，闲置1小时后休眠
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发者免费，企业部署和支持需付费
* [filess.io](https://filess.io) - 可免费创建2个数据库（每个最大10MB），支持MySQL/MariaDB/MongoDB/PostgreSQL
* [Xata Lite](https://lite.xata.io/) - 内置强大搜索分析功能的无服务器数据库，提供统一API、多类型安全客户端库和优化开发流程。免费方案含10个分支和15GB存储，无暂停或冷启动
* [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL的全栈低代码开发平台，提供UI应用构建器快速开发网页应用。免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算资源和5个客户端应用用户
* [Nile](https://www.thenile.dev/) — 面向B2B应用的PostgreSQL平台，免费层包含：无限数据库、永不休眠、1GB总存储、5,000万查询令牌、自动扩展和无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费方案支持最多5人加入的无限网络，可安全扩展类LAN网络至分布式团队。
* [Mirna Sockets](https://mirna.cloud/) - 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并可监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露至互联网。无需安装或注册。提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。不限节点数。(Hamachi替代方案)
* [segment.com](https://segment.com/) — 事件翻译与路由中心，可转发至第三方服务。免费10万事件/月。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook至公共或内部(如localhost)目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点(`https://yoursubdomain.webrelay.io <----> http://localhost:8080`)。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何位置开发、测试和监控webhook。免费方案包含10万请求/月和10万尝试/月，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽，限速，单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端的端到端加密网络。支持桌面/移动/NA客户端；可通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，可将localhost服务器暴露至互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行的服务至公共自定义URL，并通过访问控制保障安全。免费方案支持单个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露至互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理与SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目交付平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间追踪。最多3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网与项目管理工具。免费版提供5GB空间支持无限用户
* [cacoo.com](https://cacoo.com/) — 实时在线图表工具：流程图、UML图、网络拓扑图。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 基于团队的敏捷估算工具。免费支持5名用户，提供Jira集成、无限视频会议、团队和会话
* [clickup.com](https://clickup.com/) — 项目管理平台。免费版含云存储，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪工具。永久免费，不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台。免费版提供5人团队不限仓库/项目/文档，每月500分钟CI/CD时长和30,000分钟无服务器代码运行时长
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目，不限用户，1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理。免费版不限项目/用户/存储空间
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具。免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 复杂项目管理套件。SaaS免费版前5用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具。通过关键词生成非正式UML类图/对象图/ER图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比GraphQL模式变更，标记破坏性/非破坏性/危险修改
* [Helploom](https://helploom.com) - 永久免费的轻量级客户支持软件，提供实时聊天功能
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用Bug反馈SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 支持多维度查看的基础设施交互图表工具。免费版不限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具。免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具。免费版2个看板/2名用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具。免费版1名用户不限看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的产研协作平台。免费版250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具。完全免费
* [Kumu.io](https://kumu.io/) — 关系图谱工具。免费版不限公开项目，学生可享私有项目
* [Linear](https://linear.app/) — 极简问题追踪系统。免费版不限成员，支持10MB文件/250个事项
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS。免费版支持10名用户/20个字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具。免费版3个可编辑文档+100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具。免费版支持3个项目
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum看板工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件。免费版提供100MB存储/5名用户，不限工作区/会议/任务单
* [Ora](https://ora.pm/) - 敏捷任务管理工具。免费版支持3名用户（10MB文件限制）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限公开项目，免费私有项目2个（3名活跃用户+不限只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台。免费版2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具。免费版不限成员（5MB文件/1000个事项）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具。免费版每月每应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tarai.ai/) — 简洁的迭代管理服务。免费版支持无限制任务、迭代和工作区，且不设用户数量上限
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，从看板到Scrum几乎涵盖所有流程。免费版支持无限用户和1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版包含1个工作区（任务和项目数量不限）、1GB文件存储、1周项目历史记录，以及每次视频会议最多5名参与者
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会议和迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，另有付费方案可选
* [teleretro.com](https://www.teleretro.com/) — 融合破冰游戏、动图和表情的趣味回顾会议工具。免费版包含3次回顾会议和无限成员
* [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具。采用自愿付费模式，用户可选择0元使用且无功能限制{[详情](https://tenzu.net/pricing/)}
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版支持每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理工具。免费版功能：5个活跃项目/每个项目5名用户/5MB文件上传/3个筛选器/1周活动历史记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版含无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台集成与众测服务，免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 提供项目设计、版本控制和问题追踪的服务。免费版含无限项目与协作者，3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具，最多3名用户免费且项目数量不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 为开源项目及私有项目提供免费托管版（InCloud），含时间追踪和敏捷看板功能（3名用户免费）
* [zenhub.com](https://www.zenhub.com) — 深度集成GitHub的项目管理方案，公共仓库/非营利组织/开源项目免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，5名成员以内免费（含5GB附件）
* [Zube](https://zube.io) — 免费版支持4个项目4名用户的项目管理工具，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报表等功能，专为自由职业者设计）和[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版支持无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，可在事项/任务内实现结构化清单/模板/审批流程。小团队适用免费方案

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件托管](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时优化和尺寸调整。免费套餐含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化与CDN服务，提供多种尺寸调整、压缩和水印功能。含响应式图像/360度图像制作/图像编辑的开源插件。免费月套餐含25GB CDN流量、25GB缓存存储及无限转换。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等库的图像上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，支持客户端处理且服务器零数据访问。免费上传1GB以内文件且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换与交付服务，免费支持250个文件/500次转换/3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图像/音频/视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 支持网页界面和API的免费文件共享存储平台，无文件大小/带宽/下载次数限制。但文件十天无下载将自动删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图像视频托管、处理和流媒体服务。免费套餐含250GB/月视频流量和30GB/月图像流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图像图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图像的开源友好机器人，在不损失质量的前提下减小文件体积。对开源项目免费。
* [ImgBB](https://imgbb.com/) — 无限图像托管服务，支持拖拽上传（单图限32MB）。上传后可获取直链、BBCode和HTML缩略图代码，登录可查看历史记录。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图像缓存管理与CDN服务。免费套餐含1000张原始图、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图像优化服务，免费支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速（缓存/图像代码优化/CDN）。免费支持5000次页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享与统一管理工具。基础版支持无限文件传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供有限免费计划，开源项目可申请特殊方案。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目/黑客松/移动应用的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理平台，提供友好界面和API。免费套餐含1GB存储及API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务
* [plot.ly](https://plot.ly/) — 数据图表制作与共享平台。免费版支持无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队的基础版功能体验（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的快速批量二维码生成器，单次最多支持100个URL导出。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表与二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图像优化API，已集成至WordPress/Drupal/Magento等主流CMS平台，累计处理超70亿张图像仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成与编辑API，免费每月可渲染20分钟视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 处理文件上传及视频/音频/图像/文档编码。通过GitHub学生开发者包对开源项目/慈善机构/学生免费。商业应用可免费试用2GB流量。
* [twicpics.com](https://www.twicpics.com) - 响应式图像服务，提供图像CDN/处理API/前端自动化优化库。免费套餐含3GB流量/月。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具集，开发者可免费使用所有功能：文件上传API/UI、图像CDN/源服务、自适应交付和智能压缩。免费层含3000次上传/3GB流量/3GB存储。
* [imagekit.io](https://imagekit.io) – 可快速集成的图像CDN服务，支持自动优化与实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私的零知识文件存储服务，注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费提供20GB空间（支持3台设备），推荐用户可获5GB奖励（账户90天不活跃将失效）。

  * [ImageEngine](https://imageengine.io/) – 全球易用的图片CDN服务，60秒内完成配置。支持AVIF/JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[免费开发者账户申请入口](https://imageengine.io/developer-program/)
* [DocsParse](https://docsparse.com/) – 基于GPT的AI文档处理工具，可将PDF/图片转换为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡/代金券/促销活动的定制二维码，支持样式/颜色/LOGO等自定义设置
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成平台，无追踪无数据收集
* [Doradrop](https://doradrop.com) — 无限存储的零广告文件共享平台，无需登录即可通过安全链接即时分享文件

* [Ente](https://ente.io/) - 端到端加密的云存储服务，支持照片/视频/2FA密钥存储。可自托管，免费版永久享有10GB空间（免费用户数据仅保留单副本）

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代化响应式网站，非设计师也能轻松打造精美设计
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板库，提供丰富主页模板，下载代码包即可快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，团队可构建/记录/发布/扩展/维护设计系统。免费版支持3名编辑人员协作1个设计系统，查看人数不限
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费在线社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式互转，包含视频和GIF转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附代码片段
* [CodedThemes](https://codedthemes.com/) - 精心打造的管理后台模板和UI套件，加速现代网页开发
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者，2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库（含模特/场景授权）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变选择工具
* [Icon Horse](https://icon.horse) - 通过简易API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源（需标注来源）
* [landen.co](https://www.landen.co) - 无代码生成/编辑/发布精美网站与着陆页，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加尺寸参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，提供Android/iOS/Web的Lottie动画工具与插件
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 免费无限量云存储思维导图，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) - 创建逼真的T恤与服装模型（40个免费模板）
* [Modeldraw.com](https://modeldraw.com) - 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) - 完全免费的浏览器矢量编辑器
* [NSPolygon](https://nspolygon.com) - 免费图库/图标/插画资源站
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具，实时创建结构并与团队/客户协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计与原型工具，支持SVG格式
* [pexels.com](https://www.pexels.com/) - 免版税商用图库，提供按关键词搜索的免费API
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器，支持PSD/XCF/Sketch格式（媲美Photoshop/Gimp/Sketch）
* [pixlr.com](https://pixlr.com/) - 专业级免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 快速易用的网页设计与页面构建器，可集成到代码库中，支持响应式页面/复杂组件开发（可选代码扩展）
* [Pravatar](https://pravatar.cc/) - 生成随机虚拟头像，支持直接热链引用
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器内直接转换（无需上传），完全客户端处理确保隐私安全
* [Proto.io](https://www.proto.io) - 无需编码的完全交互式UI原型工具，免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) - 简易应用图标尺寸调整与管理服务

  * [storyset.com](https://storyset.com/) — 为您的项目创建令人惊叹的免费定制插画
* [smartmockups.com](https://smartmockups.com/) — 产品模型制作工具，提供200个免费模型模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 实时预览主题在不同组件和布局中的变化效果
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可复制粘贴的免费可编辑SVG图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui的优雅主题，实时自定义颜色、排版等参数
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，支持通过URL参数配置
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可免署名自由使用
* [unsplash.com](https://unsplash.com/) - 无限制商用版权的高清图库
* [vectr.com](https://vectr.com/) — 网页端/桌面端免费矢量设计工具
* [walkme.com](https://www.walkme.com/) — 企业级用户引导平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便签/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者的协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特视觉内容
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线模型图编辑器，含持续增长的免费模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览与多框架转换工具（开源项目）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 无水印的浏览器视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的极简落地页生成器，免费1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌LOGO库，内置简易编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 可商用的免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - SVG形状/背景/图案生成器
* [Canva](https://canva.com) - 免费在线平面设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端开发平台，免费3个项目且支持代码导出
* [vector.express](https://vector.express) — 多格式矢量文件转换器
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含开发者工具）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持PWA安装
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格SVG切割文件库
* [Lucide](https://lucide.dev) - 免费可定制的SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌LOGO的API服务，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费商用Bootstrap/Angular/React/Vue组件库
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 减少类名书写的Tailwind组件库
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条样式设计工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind渐变色库与生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标集的统一搜索平台
* [NextUI](https://nextui.org/) -- 免费现代化的React/Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑的开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制的精美开源组件库
* [HyperUI](https://www.hyperui.dev/) -- 开源Tailwind组件集合
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标
* [Image BG Blurer](https://imagebgblurer.com/) -- 为图片生成模糊背景框
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代方案
* [Nappy](https://nappy.co/) -- 黑人/棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind资源合集与代码生成器
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线手绘风格白板工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费图形设计工具

  * [SVG转换器](https://svgconverter.online/) -- 支持调色板定制的免费JPG/PNG转SVG工具
* [OKLCH](https://oklch.net/) -- 为网页设计师和开发者提供的免费OKLCH取色器与转换工具

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目类别筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自真实应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动端截图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲和世界领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用完整流程的视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图与地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动）的地图API与SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能。每月包含200万次免费基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索与情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API及SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务与SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务与可视化SDK。免费矢量瓦片每周更新，包含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap提供的免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排序的地理编码与搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP运行环境，支持300+个PHP版本执行代码片段
  * [Android Studio](https://developer.android.com/studio) — 官方Android开发工具，提供跨平台（Windows/Mac/Linux/ChromeOS）的快速应用构建能力，开源且完全免费
  * [AndroidIDE](https://m.androidide.com/) — 基于Gradle的安卓设备端开源开发环境
  * [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境与模块化应用框架
  * [apiary.io](https://apiary.io/) — 协作式API设计平台（免费版支持无限量API蓝图和用户，含托管文档）
  * [BBEdit](https://www.barebones.com/) - macOS平台专业文本编辑器，免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的免费公共服务
  * [BlueJ](https://bluej.org) — 面向初学者的Java教学IDE，由Oracle支持并提供简易图形界面
  * [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
  * [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级代码编辑器
  * [cacher.io](https://www.cacher.io) — 支持100+语言的代码片段管理工具（带标签功能）
  * [Code::Blocks](https://codeblocks.org) — 跨平台C/C++/Fortran开源IDE
  * [Cody](https://sourcegraph.com/cody) - 智能编程助手（支持VS Code/JetBrains/网页版），可编写/理解/修复代码
  * [codiga.io](https://codiga.io/) — IDE内嵌的代码片段搜索与管理工具（个人及小团队免费）
  * [codesnip.com.br](https://codesnip.com.br) — 带分类/标签的简易代码片段管理器
  * [cocalc.com](https://cocalc.com/) — 云端协作计算平台（预装Python/LaTeX/Jupyter等数学科学工具）
  * [code.cs50.io](https://code.cs50.io/) - CS50课程定制的网页版VS Code开发环境
  * [codepen.io](https://codepen.io/) — 前端代码在线演练场
  * [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular等框架的在线IDE
  * [Components.studio](https://webcomponents.dev/) - 可视化组件开发与发布平台
  * [Eclipse Che](https://www.eclipse.org/che/) — 基于Kubernetes的多语言云端IDE（Red Hat提供[在线实例](https://workspaces.openshift.com/)）
  * [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据
  * [ForgeCode](https://forgecode.dev/) — 集成CLI/IDE的AI编程助手（免费版含基础模型）
  * [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux环境（免费版每日5次VM）
  * [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE（免费版含1GB内存/10GB存储）
  * [JDoodle](https://www.jdoodle.com) — 60+语言在线编译器（每日200次API调用额度）
  * [jetbrains.com](https://jetbrains.com/products.html) — 开发者工具套件（学生/教师/开源项目可申请免费许可）
  * [jsbin.com](https://jsbin.com) — 支持Markdown/Jade/Sass的前端代码沙盒
  * [jsfiddle.net](https://jsfiddle.net/) — 带协作功能的前端代码演练场
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API服务
  * [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速开发工具
  * [MarsCode](https://www.marscode.com/) - 云端AI编程IDE
  * [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级JSON模拟API服务
  * [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务
  * [mockaroo](https://mockaroo.com/) — 测试数据生成工具（支持CSV/JSON/SQL格式）
  * [Mocklets](https://mocklets.com) - HTTP接口模拟器（终身免费版）
  * [Paiza](https://paiza.cloud/en/) — 无配置浏览器开发环境（免费版每日4小时运行时间）
  * [Prepros](https://prepros.io/) - 前端代码实时编译与浏览器同步工具
  * [Replit](https://replit.com/) — 多语言云端编程环境
  * [SoloLearn](https://code.sololearn.com) — 免注册的代码运行沙盒（含免费编程课程）
  * [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发平台（快捷入口[node.new](https://node.new)）
  * [Sublime Text](https://www.sublimetext.com/) - 高度可定制的专业级文本编辑器

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能IDE，拥有数千款扩展，支持跨平台应用开发（可下载Microsoft扩展用于iOS和Android）、桌面/网页/云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) — 社区驱动的VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，免费版功能有限
* [Wave Terminal](https://waveterm.dev/) — 开源跨平台终端工具，支持内联渲染、会话保存和历史记录，基于开放网络标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58个模板支持独立开发Web组件，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) — 高效免费数据库IDE，含服务器发现、ER图、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) — Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) — 支持70+语言的在线编译器（含Java/Python/C++/JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [DocBeacon](https://docbeacon.io) - 安全文档共享平台，提供文档追踪和参与度分析。免费版支持最多20个PDF文档（最大10MB）、10个联系人，每份文档可分享2次，并提供基础的查看、下载、时长和参与度分析。
  * [Userbird](https://userbird.com) - 替代Google Analytics的热图分析工具，支持会话录制和收入追踪。
  * [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史追踪面板。免费版允许监控单个仓库的流量数据（突破14天限制）。
  * [Dwh.dev](https://dwh.dev) - Snowflake数据云观测方案，个人使用免费。
  * [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库中的客户数据同步至CRM、营销和支持工具。免费版支持同步到1个目标平台。
  * [Avo](https://avo.app/) - 简化的分析发布流程。提供统一跟踪计划、类型安全分析库、应用内调试器和数据可观测性。免费版支持2名工作区成员和1小时数据回溯。
  * [Branch](https://www.branch.io) - 移动应用分析平台。免费版支持10,000名移动应用用户，包含深度链接等服务。
  * [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。可将数据仓库中的10个字段同步至60+个SaaS平台（如Salesforce/Zendesk/Amplitude）。
  * [Clicky](https://clicky.com) - 网站分析平台。免费版支持1个网站和3,000次页面浏览分析。
  * [Databox](https://databox.com) - 商业智能分析平台，可整合其他分析工具。免费版支持3个用户、仪表板和数据源，包含1,100万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2,000次页面浏览
  * [amplitude.com](https://amplitude.com/) - 每月100万次事件追踪（支持2个应用）
  * [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台，提供托管服务（非商业用途免费）或自托管选项。作为Google Analytics/Matao的替代方案，注重隐私保护。免费版支持无限网站、6个月数据保留和每月10万次页面浏览。
  * [Google Analytics](https://analytics.google.com/) - 谷歌分析
  * [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费版每月支持100万次页面浏览（无需信用卡）。
  * [Expensify](https://www.expensify.com/) - 费用报告工具，免费提供个人报销审批流程
  * [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，每月3,000次事件以内免费。
  * [heap.io](https://heap.io) - 自动记录iOS/Web应用中的用户行为。免费版支持每月10,000次会话。
  * [Hotjar](https://hotjar.com) - 网站分析与报告工具。免费版每日2,000次页面浏览，100个快照/日（上限300个），可存储3个热图（保留365天），支持无限团队成员。应用内调查和反馈组件每月可创建3个调查+3个反馈组件（收集20条回复）。
  * [Keen](https://keen.io/) - 自定义数据分析平台。免费版每月1,000次事件
  * [Yandex.Datalens](https://datalens.yandex.com/) - 俄罗斯Yandex云数据可视化分析服务。完全免费，无用户数和请求量限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析
  * [Mixpanel](https://mixpanel.com/) - 每月追踪10万用户，无限数据历史和席位，支持美国/欧盟数据存储
  * [Moesif](https://www.moesif.com) - REST/GraphQL API分析工具（每月50万次API调用免费）
  * [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费基础版支持1个网站+1个iOS应用+1个安卓应用
  * [Microsoft PowerBI](https://powerbi.com) - 微软商业智能分析平台。免费版有限制（100万用户许可证）。
  * [Row Zero](https://rowzero.io) - 极速联机电子表格。可直接连接数据库、S3和API，即时分析/图表化/共享数百万行数据。永久免费3个工作簿。
  * [sematext.com](https://sematext.com/cloud/) - 每月5万次操作免费，1天数据保留，无限仪表板/用户等
  * [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版每项指标显示5个结果，提供1个月移动应用数据和3个月网站数据。
  * [StatCounter](https://statcounter.com/) - 网站访问者分析。免费版可查看最近500位访客数据。
  * [Statsig](https://statsig.com) - 集成分析、功能标记和A/B测试的全能平台。每月100万次计量事件内免费。
  * [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者计划提供Tableau Online个人沙盒许可证（最新预发布版本），供数据开发者测试所有功能。
  * [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试工具。免费版支持1个用户无限次测试
  * [woopra.com](https://www.woopra.com/) - 免费用户分析平台（50万次操作/90天数据保留/30+一键集成）
  * [counter.dev](https://counter.dev) - 简洁且注重隐私的网站分析工具。永久免费或捐赠付费。
  * [PostHog](https://posthog.com) - 完整产品分析套件（每月100万次追踪事件免费），另提供无限应用内调查（每月250条回复）。
  * [Uptrace](https://uptrace.dev) - 分布式追踪工具，开源项目可申请个人订阅免费版。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为录制工具。
  * [Beampipe.io](https://beampipe.io) - 简洁隐私优先的网站分析工具。免费支持5个域名和每月1万次页面浏览。
  * [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析工具。支持Swift/Kotlin/React Native/Flutter/Electron等SDK。每月2万次事件免费。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析和营销数据问题，支持生产环境实时流量分析和回归测试覆盖（无需编码）。
  * [LogSpot](https://logspot.io) - 一体化网站与产品分析平台（含嵌入式分析组件和自动化机器人）。免费版每月1万次事件。
  * [Umami](https://umami.is/) - 简洁、快速、注重隐私的开源Google Analytics替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私优先分析工具。无限页面浏览/访客/热图/目标追踪。免费支持3个域名（每个域名600次会话回放）。

  * [Seline](https://seline.so) - Seline 是一款简单且注重隐私的网站与产品分析工具。无Cookie、轻量级、独立运营。免费方案包含每月3,000次事件记录，并提供所有功能访问权限，包括仪表盘、用户旅程、漏斗分析等。
  * [Peasy](https://peasy.so) - Peasy 是一款轻量级、以隐私为核心的网站与产品分析工具。免费方案包含每月3,000次事件记录。
  * [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie且操作体验提升10倍。免费方案支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次调用

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整定价，助您拓展全球业务并触达新兴市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式移动应用订阅解决方案，支持iOS、Android、React Native、Flutter、Unity及网页应用。每月收入低于1万美元免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月10,000次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率数据。免费开发者计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率数据，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限制。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单纠纷。免费微计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持连接Stripe、Chargebee等平台。免费层级每月30,000次事件记录。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购买与订阅平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购买与订阅后端服务（iOS和Android）。每月追踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟10次请求限制。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库用于构建存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant 虚拟机的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的零障碍博客平台
* [Medium](https://medium.com/) — 深度探讨您关心的话题
* [AyeDot](https://ayedot.com/) — 免费发布现代多媒体短格式微博客，与世界分享您的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中建立活跃社区
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件，可将 GitHub issues 用于博客评论、维基页面等场景
* [Disqus](https://disqus.com/) - Disqus 是网络化的社区平台，被全球数十万网站采用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随您支付"模式，提供"单个管理员可完全控制少数域名的外观和行为"服务
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种平台提供的功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间及视窗尺寸调整。
* [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据，包括元标签标准化、精美链接预览、爬虫功能及截图即服务。每日250次免费请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。基于Google Cloud构建，具备高扩展性。每月100次免费截图。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。支持任意URL截图，快速、免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照服务。每月100次免费快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次截图（支持png/gif/jpg格式），包含整页截图而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费版每日500页次限额，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图及域名智能API服务。每月100次免费请求。
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月1,000次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管式移动应用持续集成/持续交付平台。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) —— 一个极速的x86虚拟机，可运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队使用且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能同意管理合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射功能。免费版包含核心同意管理功能，并为经过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成美观图片（适用于Twitter/Facebook）或链接（适用于聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台，免费开发者计划包含5台设备、云端及数据存储，配套移动应用可用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Calcmatic](https://calcmatic.app) — 电商利润、支付手续费、物流成本及个人财务的免费在线计算器，无需登录
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于Twitter或博客展示
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的时间追踪与编码指标插件
* [Codepng](https://www.codepng.app) - 生成专业级源代码快照用于社交媒体分享
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环Webhook调度服务，免费版支持5次临时调度
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月5次预约含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费支持5个域名及20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化编辑器，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞扫描平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加带队列/重试/日志的Webhook功能，免费版每日100次投递+14天留存+3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN/ISP/地理位置等信息，集成多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram等接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时查看图片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表板管理PDF模板，API动态生成文档，免费版每月300份
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode插件创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥与密码的移动端友好工具
* [ray.so](https://ray.so/) - 制作精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向服务，免费版含10个源+10万次月访问
* [Renamer.ai](https://renamer.ai) — 支持OCR/元数据提取的AI文件重命名工具，免费版每月15文件含桌面应用
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具，支持GET/POST等方法和Token认证
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电池/车门控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉内容创作平台，免费版支持3个同时编辑+5次AI代码解释
* [日出日落时间API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的RSS订阅与分析服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具，免费版每份问卷限10题100回复
* [Tiledesk](https://tiledesk.com) - 创建全渠道聊天机器人（网站/WhatsApp等），免费版不限机器人数量
* [UUID生成器](https://newuuid.com/) - 即时生成各类UUID/GUID/CUID/NanoID/ULID
* [Versionfeeds](https://versionfeeds.com) — 定制软件更新RSS源，免费版支持3个订阅
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者编码/解码/数据处理工具集
* [Volume Shader BM](https://volumeshaderbm.org) — 基于WebGL的浏览器GPU基准测试工具
* [XKit](https://xkit.io) — 包含开发者工具/对比工具/计算器/转换器等免费在线工具合集

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
* [RemSupp](https://remsupp.com) — 按需技术支持及永久设备访问（免费版每天2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，包括精灵图、瓦片集和角色包
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏艺术家提供的免费资源
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费的2D、3D、音频和GUI资源
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF
* [CraftPix](https://craftpix.net) — 免费/付费的2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 像素艺术创作工具平台，提供教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 2D/3D资源与音频的市场平台，兼作作品集展示空间
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建游戏素材
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型与PBR材质库
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的2D/3D/音频/UI资源
* [Poliigon](https://www.poliigon.com/) — 含多分辨率贴图的免费/付费纹理、模型、HDRIs和笔刷，提供Blender等软件的免费插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的协作式免费音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为localhost开发提供更优质的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单
* [github.com — 开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据算法评估）
* [PHP中心](https://phphub.net/) — PHP工具集合，含格式化器、验证器、沙盒环境、正则测试器等
* [Pyrexp正则测试](https://pythonium.net/regex) — 基于网页的正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，另提供免费电子书参考
* [SMS测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups自动化备份](https://simplebackups.com/) — 服务器及数据库（MySQL/PostgreSQL/MongoDB）备份服务，直接存储至云平台（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter云备份](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直连数据库/文件系统/应用备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题及UI套件，加速应用开发
* [Web性能检测](https://web.dev/measure/) — 免费网站性能与SEO优化工具，提升搜索引擎排名
* [开发者小工具集](https://smalldev.tools/) — 支持编解码/代码压缩美化/测试数据生成等功能的免费工具集，拥有愉悦的交互界面
* [Layercode数据导入工具](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门方案，支持100MB文件上传及无限导入器创建
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮库
* [WrapPixel后台模板](https://www.wrappixel.com/) — 免费/高级Angular/React/VueJs/NextJS/NuxtJS管理后台模板下载
* [Utils.fun本地工具](https://utils.fun/en) — 基于浏览器算力的离线工具集（含水印生成/录屏/编解码/加密/代码格式化等），完全免费且不上传云端
* [IT工具大全](https://it-tools.tech/) - 开发者与IT从业者实用工具集合
* [免费代码工具](https://freecodetools.org/) — 100%免费的Markdown编辑器/代码优化器/二维码生成器/Open Graph生成器等
* [正则101调试器](https://regex101.com/) — 免费正则表达式测试与调试平台，提供编辑器和学习资源
* [Kody开发者工具](https://www.kodytools.com/dev-tools) — 100+款格式化/压缩/转换工具
* [AdminMart后台模板](https://adminmart.com/) — 高质量免费/高级Angular/Bootstrap/React/VueJs后台模板
* [Glob模式测试器](https://globster.xyz/) — 可视化Glob模式设计与测试平台
* [MySQL简易恢复](https://simplerestore.io) - 无需代码即可将MySQL备份恢复到任意远程数据库
* [360格式转换](https://www.360converter.com/) - 免费视频转文字/音频转文字/实时语音转文字/YouTube字幕生成工具
* [最佳二维码生成](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI内容优化](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版支持每月手动发布1篇
* [PageTools网页工具](https://pagetools.co/) - 永久免费的AI工具集，一键生成网站政策/社交媒体简介/网页内容
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化优化工具
* [Killer Coda交互实验室](https://killercoda.com/) - 浏览器内Linux/Kubernetes/容器/编程/DevOps/网络交互学习平台
* [Axonomy发票工具](https://axonomy-app.com/) - 免费版每月支持10张发票的创建与管理
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）
* [JSON可视化工具](https://jsonviewertool.com/) – 浏览器内直接查看/格式化/验证/压缩/转换JSON数据（无需API密钥）
* [ToolsHref开发套件](https://toolshref.com) - 免费开发者工具集（含Java代码生成/静态分析/DevOps配置构建等功能）

**[⬆️ 返回顶部](#目录)**