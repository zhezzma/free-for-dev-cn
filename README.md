# free-for.dev

如今，开发者和开源作者们拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间才能做出明智决策。

这里整理了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单的范围限定于基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此这份清单带有主观判断；如果未能采纳您的贡献，还请见谅。

这份清单汇集了1600多位人士提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或终止的条目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包含自托管软件。入选标准要求服务必须提供免费层级（而非仅限免费试用）。若采用时间计量，免费层级至少需持续一年。我们还会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

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
  * [隧道、WebRTC、WebSocket服务器与其他路由](#隧道、WebRTC、WebSocket服务器与其他路由)
  * [测试](#测试)
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
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储空间，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至所有区域（不含中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储空间，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，每月10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储空间，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储空间，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型(SSD)存储，20GB存储备份（12个月）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，Linux/macOS/Windows开源项目无时间限制
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），包含有限次数的免费层级
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - [空闲实例](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据采集点，10亿个数据检索点
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500 Mbps*核心数
    * 公网IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次投递选项，1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，不限次数的速率限制（每域名1条规则），分析，邮件转发
    * [零信任&SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) - 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一台部署服务器和一个静态站点），无需操心"服务器事务"，提供在任意云上构建、部署和发展应用所需的一切功能
  * [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
  * [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于优化Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO限制，包含全部功能。每月免费使用50次运行额度
  * [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现部署自动化。免费版支持单个开发者无限制部署静态站点、网络服务和环境，每月提供20次免费任务执行（含预览和自动部署功能）

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公共和私有Git仓库，提供CI/CD流水线功能
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共和私有Fossil代码仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB存储空间和两个用户
* [Codeberg](https://codeberg.org/) — 免费开源项目可享无限量公共/私有Git仓库（协作者人数不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包/容器托管、项目管理和问题追踪功能
* [GitGud](https://gitgud.io) — 无限量公共/私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD功能
* [GitHub](https://github.com/) — 无限量公共仓库和私有仓库（协作者人数不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手功能
* [gitlab.com](https://about.gitlab.com/) — 无限量公共/私有Git仓库（最多5名协作者）。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪功能
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件托管平台，包含CI、静态页面、项目页面和问题追踪功能
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版的友好分支，支持Mercurial版本控制系统
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发所需的代码仓库和工具，同时提供ionic专属仓库
* [NotABug](https://notabug.org) — 基于Git的自由软件代码协作平台，专为自由许可证项目设计
* [OSDN](https://osdn.net/) - 面向开源软件开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库托管
* [Pagure.io](https://pagure.io) — 基于Git的自由开源软件代码协作平台，专为FOSS许可证项目设计
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统，无使用限制。其独特之处在于基于完善的补丁理论，易于学习使用和分发，解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人用户、开源项目和非营利组织免费开放
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git和Subversion）包含50MB存储空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公共/私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 为自由软件项目（GNU项目）提供协作式软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 为自由软件项目（非GNU项目）提供协作式软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转化为强大API，快速开发原型、网站、应用等。每月500次请求免费。
  * [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
  * [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问120+个API，注重质量、一致性和可靠性。免费计划每月最多50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性工具，用于模型监控和根因分析（如数据质量和性能漂移）。免费支持最多两个模型。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端评估和可观测性平台，帮助团队可靠地发布AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
  * [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每天50次免费请求，公共仪表盘，开放端点（任何拥有仪表盘链接的人均可查看提交和响应）。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费每月1,000积分，相当于1,000次并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [Clarifai](https://www.clarifai.com) — 自定义人脸识别和检测的图像API。可训练AI模型。免费计划每月1,000次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用工具API平台，完整访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，涵盖实验跟踪、模型生产管理、模型注册和完整数据溯源，从训练到生产全流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月免费100个订单和最多1,000个SKU。
  * [Composio](https://composio.dev/) - AI代理和LLMs的集成平台。集成200+个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，在应用间同步数据。可创建实时仪表盘和报告，转换和操作值，收集和备份洞察。免费计划限1个用户、数据连接、数据源和数据目的地。还需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。自动解决验证码并防止被封锁。前1,000次调用免费。
  * [CurlHub](https://curlhub.io) — 检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致定义，并交付给每个应用。最快方式是使用Cube Cloud，免费层每天限1,000次查询。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单免费的文件分享。数据访问后自毁。通过浏览器或命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。Postman式界面在Airtable中运行API请求。预建数十个应用集成。免费计划每月100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含10GB存储和每月120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），从网页提取数据为CSV或Excel。免费计划每月500页。
  * [Datapane](https://datapane.com) - 用Python构建交互式报告并部署Python脚本和Jupyter Notebooks为自助工具的API。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可的精简数据库也免费。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型，每个模型10个表。
  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实面部滤镜，一个SDK搞定。免费计划支持最多10个每月活跃用户（MAU），最多跟踪4张脸。

  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据用于构建与Covid-19相关的实用应用程序。
  * [Doczilla](https://www.doczilla.app/) — SaaS API服务，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月允许生成250份文档。
  * [Doppio](https://doppio.sh/) — 托管式API，采用顶级渲染技术生成并私有存储PDF和截图。免费计划每月允许生成400份PDF和截图。
  * [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页和物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成带有实时文档和用户管理功能的完整REST API平台。
  * [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20个积分。
  * [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月允许50次API调用并提供模板库访问权限。
  * [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。支持免费本地使用。
  * [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。免费试用包含2个项目，每个项目10张表。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费计划每月250页，用户不限量，支持3个模板。
  * [file.coffee](https://file.coffee/) - 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）。
  * [Financial Data](https://financialdata.net/) - 股票市场与金融数据API，免费计划每日允许300次请求。
  * [FormatJSONOnline.com](https://formatjsononline.com) - 基于浏览器的免费工具，即时实现JSON数据格式化、验证、比较和压缩。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡支付欺诈交易筛查REST API，根据订单输入参数检测所有可能的欺诈特征。免费Micro计划每月处理500笔交易。
  * [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置搜索服务，免费API每月允许500次查询。
  * [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP地理定位API，免费计划每日2,000次请求。
  * [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像，提供RESTful API和无代码集成。免费层每月50张图像和5个模板。
  * [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台，免费社区版支持最多5个项目。
  * [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)平台，帮助在线产品轻松提供Webhooks功能。免费版每日可分发100个事件，历史记录保留7天。
  * [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建工具。
  * [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型，免费版每月3万输入字符。
  * [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体自定义。
  * [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问70多个(云)平台如Exact Online、Twinfield等，含数据复制和交换功能。面向开发者和实施顾问的免费计划，特定平台免费但有数据量限制。
  * [ipaddress.sh](https://ipaddress.sh) — 以不同[格式](https://about.ipaddress.sh/)获取公网IP地址的简易服务。
  * [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费计划同一IP地址每分钟限45次请求。
  * [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费计划每月150次请求。
  * [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费计划每日限1,000次请求。
  * [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，允许1,000次免费请求。
  * [IPLocate](https://www.iplocate.io) — IP地理定位API，免费版每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP归属企业查询等功能，另提供免费可下载的IP与国家/ASN对应CSV或GeoIP兼容MMDB格式数据库。
  * [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务，LITE数据库可免费下载。在服务器导入后可通过本地查询获取城市坐标和ISP信息。
  * [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP地理定位API，获取城市坐标、ISP等数据。免费计划每月5万积分，另提供500次免费WHOIS和托管域名查询（查看域名注册详情及特定IP托管域名），付费计划解锁更多功能。
  * [ipapi](https://ipapi.co/) - Kloudend公司推出的IP地址定位API，基于AWS构建的可靠服务，受财富500强信赖。免费层每月3万次查询（每日1k次），无需注册。
  * [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP地址API，具备顶级主机检测能力。免费计划提供1,000次免注册查询。
  * [IPinfo](https://ipinfo.io/) — 快速精准的IP地址数据API（免费版每月5万次）。提供地理定位、企业、运营商、IP范围、域名、滥用联系人等详细API，所有付费API均可免费试用。
  * [IPQuery](https://ipquery.io) — 面向开发者的无限量IP API，无速率限制或费用。
  * [IPTrace](https://iptrace.io) — 极简API，为企业提供可靠实用的IP地理定位数据，每月5万次免费查询。
  * [JSON2Video](https://json2video.com) - 视频编辑API，支持编程或无代码方式自动化生成营销视频和社交媒体视频。
  * [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址。免费层无需注册，支持通过CORS直接在浏览器端JS发起数据请求。适用于监控客户端和服务端IP变更的服务，请求次数无限制。
  * [JSON Serve](https://jsonserve.com/) — 帮助开发者存储JSON对象并在应用中将其作为REST API使用的免费服务。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码、头部和响应体。
  * [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看器、编辑器和验证器。通过AI辅助修复、树形视图、表格视图、12+种编程语言代码生成等功能实现JSON数据格式化、可视化、搜索和转换（支持转CSV/XML/YAML/Properties等格式）。

  * [Kreya](https://kreya.app) — 免费gRPC图形界面客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC接口。
* [Lightly](https://www.lightly.ai/) — 通过使用正确数据提升机器学习模型效果。免费提供最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并向客户发送通知。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月可验证100次。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。永久免费API层级每天允许100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报天气数据。预报基于多种天气模型的机器学习组合以提高准确性。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据，包括元标签标准化、美观链接预览、爬取能力或截图服务。每天50次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，标准化文档处理层以自动化应用工作流。免费层级每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式演练场。免费支持1名编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的简易工具。适用于原型设计/测试/学习。免费版每个项目支持2个资源。
* [Mockfly](https://www.mockfly.dev/) — 值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层级每天500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的模拟GraphQL和REST API工具。简易REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 免费代理您的API，在云端选择要模拟的端点并检查流量。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易Web应用。也提供[开源版本](https://github.com/julien-lafont/Mocky)。
* [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。完美适配前端开发、QA测试和DevOps团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的呈现方式。适用于测试Control D等基于规则的DNS分流工具。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API——每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件并返回JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问权限。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者导向PDF生成API，提供Stripe风格文档，包含每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL轻松转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用API开发协作平台Postman简化工作流并更快创建更好API。永久免费使用Postman应用。Postman云功能在特定限制下也永久免费。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试REST与GraphQL接口
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作式SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍易用的AI网络爬取，接近零学习成本，节省现有工作流85%+时间，比人工研究快4倍且不妥协，包含所有研究任务的REST API端点。每月前1000积分免费。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者发现并连接数千个API，通过趣味挑战（含解决方案！）和交互示例进行API开发。
* [Rendi](https://rendi.dev) - FFmpeg API - 为FFmpeg提供的REST API，无需处理基础设施即可在线运行FFmpeg。免费层级包含月度处理配额和4个可用vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费端点用于接收HTTP请求。发送到该端点的所有HTTP请求将与相关载荷和头信息一起被记录，方便观察webhook等服务调用。
* [reqres.in](https://reqres.in) - 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层级每月30积分。
* [ROBOHASH](https://robohash.org/) - 从任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API用于爬取。匿名爬取无需担心限制、封锁或验证码。每月前100次成功爬取免费（含JavaScript渲染，联系支持可获取更多额度）。

  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将任何Google表格转换为RESTful API。提供免费计划，每张表格包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API可进行网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能。免费计划每月提供100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月包含100次成功API调用。
* [SmartParse](https://smartparse.io) - 数据迁移和CSV转API平台，提供节省时间和成本的开发工具。免费版每月包含300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒功能。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件即可通过API快速访问数据，加速应用开发。免费计划包含2个API和每月2,500次调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化器、验证器、正则表达式测试器、假数据生成器和交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS平台。免费计划提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费版每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。每月免费发送50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，具备研究成果整理能力。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每天1,000次免费请求。提供IP地址的位置信息，包括国家、城市、地区等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能可无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，包含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。具备高级API日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币和加密货币的实时汇率。免费计划无限次API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐小时/每日预报和天气警报。整合AI模型和ML系统分析多源气象数据，提升预报精度。免费层每月10,000次API调用。
* [Webhook Store](https://www.openwebhook.io) - 存储第三方webhook并在本地调试的工具（类似ngrok）。开源且可自托管。提供免费个人域名*username*.github.webhook.store和公共域名*anything*.webhook.store。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API。每月2,000次免费API调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验追踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储空间。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月25,000个token额度（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转化为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器、住宅IP和透明定价的网页抓取API。每月1,000次免费API调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，获取全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API和邮政编码验证服务。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持在边缘设计、构建和部署API。可快速添加API密钥认证、速率限制、开发者文档和盈利功能。原生支持OpenAPI，完全可编程（Web标准API和Typescript）。免费计划包含10个项目、不限量生产环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，帮助快速定位JSON数据结构差异。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含软件包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有及公共Maven和PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 提供1GB免费私有/公共Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有及公共制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目可享免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个软件包和无限用户（云端版），或仅供个人使用的自托管版本。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人及团队协作。
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的方式存储、共享和同步敏感数据。
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本。
* [cally.com](https://cally.com/) — 快速找到会议的最佳时间。操作简单，适用于小型和大型团队。
* [Calendly](https://calendly.com) — 连接与安排会议的工具。免费版提供每位用户1个日历连接和无限会话，同时支持桌面端和移动端应用。
* [Discord](https://discord.com/) — 支持公开/私密房间的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制。
* [Fibo](https://fibo.dev) - 免费的敏捷团队实时Scrum Poker工具，支持无限成员快速估算故事点以加速规划。
* [Telegram](https://telegram.org/) — 为追求快速可靠消息和通话的用户打造。大群组、用户名支持、桌面应用及强大文件共享功能尤其适合商业用户和小型团队。
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持。
* [Dubble](https://dubble.so/) — 免费的分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制。
* [Duckly](https://duckly.com/) — 实时团队交流协作平台。支持IDE配对编程、终端共享、语音视频通话及屏幕共享，小团队免费使用。
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率与参与度的协作插件。免费版每月含10,000分钟音视频使用时长。
* [evernote.com](https://evernote.com/) — 信息整理工具，支持共享笔记与多人协作。
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费，提供2GB存储空间。
* [flock.com](https://flock.com) — 更高效的团队沟通工具。免费版支持无限消息、频道、用户及应用集成。
* [Gather](https://www.gather.town/) - 创新的在线会议方式。通过高度可定制的虚拟空间，让社区互动如现实般自然。免费支持最多10人同时在线。
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，无限制免费使用。
* [flat.social](https://flat.social) - 可定制的互动空间，适用于团队会议与社交聚会。会议数量无限制，最多支持8人同时免费使用。
* [GitDailies](https://gitdailies.com) - GitHub团队每日提交与PR活动报告工具。含提交可视化、同伴认可系统及自定义提醒功能。免费版支持无限用户、3个仓库和3个提醒配置。
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具，公开及私密房间无限制，25人以下团队免费。
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但专为Markdown设计。免费版笔记数量无限制，但私有笔记的协作者人数和模板功能[将受限制](https://hackmd.io/pricing)。
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可免费使用的全能对话平台。
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴与视频通话的任务管理工具，最多5用户免费。
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助工具，免费版不含分析、加密及支持服务。
* [ideascale.com](https://ideascale.com/) — 客户意见提交与投票平台，1个社区25名成员内免费。
* [Igloo](https://www.igloosoftware.com/) — 内部文档、博客、日历共享门户，最多10用户免费。
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天与文件存储。
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议工具，提供安全便捷的参会体验。
* [/meet for Slack](https://meetslack.com) - 在Slack任意频道、群组或私聊中输入/meet即可发起Google会议，完全免费无限制。
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目的无障碍协作平台。
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约锁定会议室、开发环境等共享资源，免费支持最多2个资源。
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈的工具。
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享与通行密钥的密码管理器，支持网页、浏览器扩展及多端应用。
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具。
* [meet.jit.si](https://meet.jit.si/) — 一键开启免费视频通话与屏幕共享。
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化中心，免费支持最多50万用户。
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，提供免费增值方案。
* [nootiz](https://www.nootiz.com/) - 一站式网站视觉反馈收集与管理工具。
* [Notion](https://www.notion.so/) - 集成任务、维基与数据库的Markdown协作笔记应用，被描述为"一体化工作空间"，支持多平台应用与网页访问。
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识协作Wiki，免费版含核心功能、50个条目和5GB存储。
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板与在线代码编辑器的免费编程面试平台，支持浏览器编译运行代码，一键创建远程面试间。
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间表与追踪应用，免费版支持最多10用户的时间追踪与报告生成。
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加视觉评审功能而无需部署网站，每月免费10个页面及100MB总存储。
* [Pendulums](https://pendulums.io/) - 界面友好、数据直观的免费时间管理工具。
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户与完整消息历史。
* [Raindrop.io](https://raindrop.io) - 跨平台私密书签管理工具（macOS/Windows/Android/iOS/Web），免费无限书签与协作功能。

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享与同步讨论。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可直接通过浏览器与协作者共享屏幕
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 不限用户数量的免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页面的聚合站，可追踪上游服务商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个工作墙、不限用户数和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载问题。永久免费个人版
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点通信，无需插件、注册或付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum实现，含时间追踪功能。免费版支持5名用户和3个项目组合
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程，包含完整的远程团队休假管理功能。5人以下小团队免费
* [Tefter](https://tefter.io) - 书签管理应用，具备强大的Slack集成功能。开源团队免费使用
* [TeleType](https://teletype.oorja.io/) — 共享终端/语音/代码/白板等，开发者端到端加密协作无需登录
* [TimeCamp](https://www.timecamp.com/) - 不限用户数量的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion的替代方案），不限用户数，每个工作区10GB存储和10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用
* [twist.com](https://twist.com) — 异步友好的团队通讯应用，保持对话条理清晰。提供免费无限量方案，合格团队可享折扣
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，支持智能箭头/吸附/便签/SVG导出功能，含多人协作模式。官方提供免费VS Code扩展
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签/任务管理器，支持文件夹协作的自定义在线桌面
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。所有人免费，非营利组织额外赠送Nano套餐
* [whereby.com](https://whereby.com/) — 一键式免费视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多可创建/加入3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) — 简化的视频托管与营销平台，单次点击上传视频。免费版提供10个视频/1GB存储/每月10GB带宽
* [userforge.com](https://userforge.com/) - 互联在线角色/用户故事和场景映射工具，保持设计与开发同步。免费版支持3个角色和2名协作者
* [wistia.com](https://wistia.com/) — 含观看者分析的高清视频托管服务，25个视频配额且使用Wistia品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务，可分享最多5GB文件且不限共享对象数量
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB以内文件（有效期24小时），大文件采用点对点传输
* [zoom.us](https://zoom.us/) — 安全视频/网络会议服务，免费版限时40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具，免费版含1万条可搜索消息和5GB文件存储，并提供可自托管的开源版本
* [robocorp.com](https://robocorp.com) - 自动化运维开源技术栈，免费体验云功能并实现简单自动化。每月240分钟机器人运行时长/10次助手执行/100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版含完整消息历史/无限私聊/1个群组对话/1GB文件存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，永久免费版支持10人小团队，含无限公私对话/可搜索历史/无限一对一语音通话/无限语音消息/10个集成/20GB团队存储
* [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，用于收集网站/PDF/图片的数字化反馈
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台，免费版含无限频道/剧本/看板/用户和10GB存储
* [Webvizio](https://webvizio.com) — 网站反馈工具和缺陷报告系统，可直接在实时网站/Web应用/图片/PDF/设计文件上进行开发协作
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Webex](https://www.webex.com/) — 视频会议服务，免费版支持100人40分钟会议
* [RingCentral](https://www.ringcentral.com/) — 视频会议服务，免费版支持100人50分钟会议
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台，从产品文档到内部知识库和API文档。开发者个人免费
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输分享界面，无需订阅即可发送照片/视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易代码粘贴站

  * [腾讯实时音视频 TRTC](https://trtc.io/) — 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、语法高亮编辑器等特性
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟画布或变通方案，免费版功能完整

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。提供开发者免费套餐，同时可免费使用开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 与 API 工具包。提供开发者免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 条目录项、5GB/月带宽和 2.5万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础版每月支持 10 万次 API 调用。
* [Directus](https://directus.io) — 开源无头 CMS。完全免费的平台，支持本地或云端管理数字资产与数据库内容，无任何功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销功能。开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 条内容项、2 种语言支持（含内容交付与管理 API）及自定义元素功能。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面。社区计划包含单用户无限 API 调用、文档、自定义类型、资源及多语言支持。开源/开放内容项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境与实时托管数据库。每个项目免费包含无限管理员用户、3 个普通用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划包含 3 个用户、500 条内容项、3 种内置角色、25+5 种内容类型、完整 REST API 访问、文档预览生成及 Office Online 编辑功能。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown、MDX 和 JSON。基础版免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，让使用任何 CMS/API/数据库构建网站重获乐趣。构建并部署能提升流量、转化率与收入的无头网站！
* [Hygraph](https://hygraph.com/) - 为小型项目提供免费套餐。GraphQL 优先的 API，助您从传统方案迁移至 GraphQL 原生的无头 CMS，实现全渠道内容优先交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先，基于事件溯源（自动记录所有变更）的开源方案。
* [InstaWP](https://instawp.com/) - 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者与营销人员的无头 CMS，兼容所有现代框架。社区（免费）版包含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持（无限语言/地区）、资源管理器（最多 2500 项资源）、图片优化服务、搜索查询、Webhook 及每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐包含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制——完全自主掌控您的网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的API和路由，实现深度集成。免费方案包含3个项目、5张数据表和Google插件支持。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。支持开发者选择多种大语言模型（含本地推理），兼容多款IDE，适配所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（使用Starcoder 16b模型）。
* [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源码整洁。开源项目可免费使用，商业友好型免费版包含三个功能模块。
* [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限制的行内补全功能。
* [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞察，帮助开发者更快构建更优质的软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。基于shadcn/ui和Tailwind CSS生成可直接粘贴使用的React代码。每次生成至少消耗30积分，新用户初始获得1200积分，每月另有200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、评审和部署工作流，提供单用户免费账户及100 MB存储空间的单个代码仓库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟会话（Vista系统下MS IE 9浏览器，分辨率1024 x 768）
  * [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共与私有仓库数量不限
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版本）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
  * [CodeBeat](https://codebeat.co) — 多语言支持的自动化代码评审平台，永久免费提供公共仓库集成（含Slack和邮件通知）
  * [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库（最多4名协作者）免费，学生和教育机构同样免费
  * [codecov.io](https://codecov.io/) — 代码覆盖率检测工具(SaaS)，开源项目及1个私有仓库免费
  * [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版支持无限用户、公共仓库及1个私有仓库
  * [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版包含200文件/小时、3次评审/小时和50次对话/小时，开源项目永久免费
  * [codescene.io](https://codescene.io/) - 基于开发者工作模式优先处理技术债务，可视化团队耦合度与系统掌控度等组织因素，开源项目免费
  * [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪工具，通过精准一致的指标在部署前发现性能退化，开源项目永久免费
  * [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
  * [dareboost](https://dareboost.com) - 每月5次免费网站性能、可访问性与安全性分析报告
  * [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷、安全漏洞、性能及API问题，实时分析支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下私有仓库免费
  * [deepscan.io](https://deepscan.io) — 高级静态分析工具，自动发现JavaScript代码运行时错误，开源项目免费
  * [DeepSource](https://deepsource.io/) - 持续分析源代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
  * [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
  * [eversql.com](https://www.eversql.com/) — 数据库优化首选平台，自动获取数据库与SQL查询的关键洞察
  * [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
  * [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率检测
  * [goreportcard.com](https://goreportcard.com/) — Go项目代码质量检测，开源项目免费
  * [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
  * [holistic.dev](https://holistic.dev/) - PostgreSQL优化首选静态代码分析器，自动检测性能/安全/架构等数据库问题
  * [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源项目免费
  * [Moderne.io](https://app.moderne.io) — 自动化源代码重构工具，支持框架迁移/带修复方案的代码分析/大规模代码转换，开源项目免费
  * [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
  * [parsers.dev](https://parsers.dev/) - 抽象语法树解析器与中间表示编译器即服务
  * [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码审查平台，开源项目免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub拉取请求与提交差异分析，公共仓库免费
  * [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
  * [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
  * [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
  * [webceo.com](https://www.webceo.com/) — SEO工具集，含代码验证与多设备类型检测
  * [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖项更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索您的项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供强大的代码截图工具（含预设模板和链接功能），可组织、发现和分享代码片段

**[⬆️ 返回顶部](#目录)**

## 持续集成与持续交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中，开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台持续交付服务，开源项目免费
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云端配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 分钟级云端应用和基础设施部署。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层允许5个域名和2个用户下的无限应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD（原生或混合），每月200次免费构建，每次10分钟构建时间，支持2名团队成员。开源项目可获得45分钟构建时间，+1并发和无限团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目，1个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时长。测试分析免费开发者层包含每月10万次测试执行，开源项目有更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps，20个用户和10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 完整免费方案，包含GitHub/GitLab/BitBucket仓库托管CI/CD所有功能。多资源类型、Docker/Windows/MacOS/ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟免费执行时长，无限协作者，私有项目30个并行任务，开源项目最高8万分钟构建时长。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费方案：1次构建，1个环境，共享服务器，无限公开仓库
* [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时长
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限额
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时长）
* [drone](https://cloud.drone.io/) - Drone云支持跨架构持续交付流水线（包括x86和Arm的32/64位），一站式运行
* [LayerCI](https://layerci.com) — 全栈项目CI，提供5GB内存和3核CPU的全栈预览环境
* [semaphoreci.com](https://semaphoreci.com/) — 开源免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问，无限公开/私有仓库，最高2GB VM规格
* [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
* [Mergify](https://mergify.io) — GitHub工作流自动化和合并队列，公开仓库免费
* [Make](https://www.make.com/en) — 通过UI连接应用并自动化工作流的工具，支持多数主流API。公开GitHub仓库免费，免费层含100Mb存储、1000次操作和15分钟最小间隔。
* [Shipfox](https://shipfox.io/) - 以2倍速度运行GitHub Actions，每月3000分钟免费构建时长。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费方案功能：IaC协作、Terraform模块注册表、ChatOps集成、OPA持续资源合规、SAML 2.0单点登录，公共工作池访问：每月200分钟
* [microtica.com](https://microtica.com/) - 提供预置基础设施组件的启动环境，免费在AWS上部署应用并支持生产负载。免费层包含1个环境（在您的AWS账户）、2个Kubernetes服务、每月100分钟构建时长和20次部署。
* [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、任务分布式执行和自动化E2E测试分割加速CI中的单体仓库。免费方案支持最多30名贡献者，包含15万点数的额度。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月提供3000分钟免费时长，无需信用卡。
* [Terramate](https://terramate.io/) - Terraform/OpenTofu/Terragrunt等IaC工具的编排管理平台，2个用户内免费包含全部功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化，支持PR驱动的工作流、通过自托管运行器实现项目隔离，以及有序操作的分层运行。3个用户内免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。几乎兼容所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）。开源项目免费使用，个人用户每周可享有限检查点的免费套餐。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接通过浏览器测试您的Android和iOS应用。免费套餐包含每月两个并发会话，每次使用30分钟，无应用大小限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的用户也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版完全免费，可无限次测试iOS和Android应用。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。每月5,000张截图的无限制项目，开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能退化。所有公开项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具，易学无需编码。可免费在本地无限次运行测试，云监控和CI/CD集成需额外付费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的零头价格监控API和应用，采用"Monitoring as Code"工作流和Playwright技术。开发者可享丰厚免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，检测网站是否符合50多项SEO、速度和安全性最佳实践。小型网站可享免费套餐。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否针对特定域名启用CORS并识别漏洞，提供可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单、可靠的浏览器测试方案。Cypress测试运行器始终免费开源无限制，Cypress仪表盘对开源项目免费支持最多5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外完全开源，每月可免费创建5个含自愈脚本、邮件和视觉测试的测试用例。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器操作步骤生成脚本，免费版功能较少。
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — 混沌工程工具，安全注入故障以发现系统弱点。免费版支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试服务，免费套餐含4个并发节点/10次网格启动/4,000测试分钟每月。
* [katalon.com](https://katalon.com) - 提供适应不同测试成熟度团队的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - 面向开发者的功能测试工具包，通过记录API调用生成E2E测试（KTests）和模拟/桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速CI测试。免费套餐支持10分钟测试文件，开源项目享无限免费计划。
* [lambdatest.com](https://www.lambdatest.com/) — 基于Selenium和Cypress的手动、视觉、截图及自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费套餐每月可模拟50个并发用户持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。无限团队成员，开源完全免费，每月7,000张快照。
* [octomind.dev](https://www.octomind.dev/) - 通过AI辅助生成、运行和维护Playwright UI测试用例。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员和项目，演示应用，每月5,000张快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试工具，支持原生应用、Flutter、React-Native、Web、Ionic等框架。免费版限10个iOS和10个Android测试用例，但包含付费版大部分功能（含无限测试运行）。
* [Requestly](https://requestly.com/) 开源的Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)功能。免费版可创建10条规则，开源项目免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO检测工具。每日10次网站爬取，提供SEO学习资源和改进建议（不限技术栈）。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen的跨浏览器测试平台。无需注册即可在Chrome上无限次运行测试（每次最多3分钟），可通过唯一URL分享复现步骤。
* [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉对比检查任何URL的服务器端渲染效果。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、CSV/XLSx测试用例导入、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
* [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板，以及通过GitHub实现手动测试代码化的框架。[开源项目免费](https://github.com/marketplace/testspace-com)，每月450条结果额度。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获并检查webhook。支持转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成的工具链、组件和设计系统实现更快迭代、更优设计和简化开发流程。无限项目且提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费版包含两名用户、10个代码库扫描、1个云账户、2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾过滤器。免费计划每个域名每天可处理200次请求。
  * [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — Amazon Web Services (AWS)安全性与合规性审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)。完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，用于公证代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 面向云端的开发者友好型安全平台，防止.NET和Java应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web应用，无需复杂工具或编程语言即可分析/解码/编码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表遵循最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项。
  * [DJ Checkup](https://djcheckup.com) — 使用这款免费的自动化检查工具扫描Django网站的安全漏洞。基于Pony Checkup站点分叉开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5名用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，且永不丢失重要.env文件。最多支持3名团队成员免费使用。
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测和修复防止密钥泄露到源代码中。可扫描350+种密钥和敏感文件——25人以下团队或个人开发者免费使用。
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API。
  * [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描。
  * [Infisical](https://infisical.com/) — 开源平台，可跨团队和基础设施管理开发者密钥：从本地开发到生产环境第三方服务全覆盖。最多支持5名开发者免费使用。
  * [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
  * [keychest.net](https://keychest.net) - SSL证书到期管理及购买，集成证书透明度(CT)数据库
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java、Javascript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目数量不限。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞。
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序和配置的安全监控，免费版支持25个用户和30天历史记录。
  * [openapi.security](https://openapi.security/) - 快速检查任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册。
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人形式的自动化产品安全工程师，可自动提交PR解决Java代码库中的漏洞。其他语言支持即将推出！
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目数量不限。
  * [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io) — 发现并修复开源依赖项中的已知安全漏洞。开源项目无限次测试和修复。私有项目每月限200次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置的深度分析
  * [SOOS](https://soos.io) - 开源项目免费无限次SCA扫描。在发布前检测并修复安全威胁。通过简单高效的方案保护项目安全。
  * [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，在生产环境前发现并修复安全漏洞。单个应用支持无限次扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描
  * [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒及PHP服务器防火墙(WAF)。注册用户免费层可获取邮件通知。
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书、链等。不限于HTTPS。
  * [threatconnect.com](https://threatconnect.com) — 威胁情报：专为刚开始学习网络威胁情报的研究人员、分析师和组织设计。最多3名用户免费。
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。250用户以下应用免费。
  * [Vulert](https://vulert.com) - Vulert持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式GraphQL端点安全扫描。免费无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个GitHub公开仓库、代码片段、问题和评论中的暴露密钥

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费额度包含1000 MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000 MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000 MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持任意项目的无限身份提供商集成（Facebook、Google、Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度权限控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供预构建的登录/注册/用户资料等UI组件。免费支持10,000 MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证方案。不限MAU免费使用。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500月活用户和50个租户（其中5个支持SAML/SSO）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成到产品中。免费提供7,500 MAU的起步套餐。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等应用实现无密码认证，仅需几分钟即可完成集成。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100月活用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个企业应用和5个个人应用，不限用户数量。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费的开发者账户包含所有安全功能，支持无限团队成员、200日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于需要实时更新的可扩展微服务，提供无代码策略UI。免费层包含1000 MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费支持1000用户和10个SSO连接，基于包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业SSO。免费方案包含不限MAU、不限组织数量、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化平台，提供认证与防欺诈的API和SDK。免费方案包含10,000 MAU、不限组织数量、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，五分钟即可上手。可免费自托管，也提供含10k免费MAU的SaaS托管版本。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，既能快速启动又可完全控制用户体验。免费支持5000 MAU。
* [Warrant](https://warrant.dev/) - 为企业级应用提供托管的授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度包含25,000次认证请求，所有安全功能无付费墙（OTP、无密码登录、策略等全功能开放）。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户，免费支持200用户和1万封事务邮件（含"Powered by PropelAuth"水印标识）。
* [Logto](https://logto.io/) - 开发、保护并管理产品用户身份，同时支持认证与授权。免费支持5,000 MAU，并提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱+密码、社交账号、Magic Auth、MFA等多种认证方式。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 移动应用质量保障首选平台。免费方案包含：单个应用、分析功能、无限版本与安装、用户反馈收集。
  * [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限下载、高速传输和无限上传。
  * [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
  * [InstallOnAir](https://www.installonair.com) - 无线分发iOS和Android应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
  * [GetUpdraft](https://www.getupdraft.com) - 测试用移动应用分发平台。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大100MB文件大小。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 配备友好界面的服务器管理与部署平台。提供单台服务器免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP网络服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息，支持多可用区节点部署。
  * [courier.com](https://www.courier.com/) - 统一推送API，集成应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐每月1万条消息。
  * [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件/推送/SMS/产品导览/横幅等）。每月免费支持1,000名活跃用户。
  * [engagespot.co](https://engagespot.co/) - 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月1万条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理。永久免费连接100台设备（无需信用卡）。
  * [knock.app](https://knock.app) - 开发者通知基础设施。单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐每月1万条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含每月1万次通知+100条短信和自动语音呼叫。
  * [Novu.co](https://novu.co) - 开源通知基础设施。统一管理邮件/SMS/站内信/应用内/推送等通信渠道，免费套餐每月3万条通知（保留90天）。
  * [pusher.com](https://pusher.com/) - 实时消息服务。免费支持100个同时连接和每日20万条消息。
  * [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持20个同时连接和每日10万次事件。
  * [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure，永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据。
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）。
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制，提供托管WebUI或自定义UI组件包。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长。
  * [webpushr](https://www.webpushr.com/) - 网页推送通知，免费支持1万订阅用户，不限推送次数，含浏览器内消息功能。
  * [httpSMS](https://httpsms.com) - 将Android手机作为短信网关收发短信。每月免费200条收发额度。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全MQTT代理。永久免费100万会话分钟/月（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费套餐：每日50条消息至1台设备1个应用。
  * [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知系统，单接口支持事务性/定时/互动等多渠道通知。免费套餐每月1万条通知，含摘要/批量/多通道/偏好设置/租户/广播等工作流节点。
  * [SMSGate](https://sms-gate.app) - Android™短信网关，通过云端路由收发短信。完全免费的云服务（建议每日超1万条使用时通知以保障服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志存储，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储空间，15天存储保留期和7天日志检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志存储，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量项目、字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费无限制
* [Lecto](https://lecto.ai/) - 含免费层的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，提供初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨的免费计划（含2用户、500个键和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费，免费层支持10,000条源字符串，自托管无限量
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev管理的本地化引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限免支持一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集成了可用性监控、事件管理、值班调度/告警和状态页面的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个可用性监控器，不限用户数、仪表盘和告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1个用户、1万次API/网络检查和1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描次数、用户数和存储账户数。订阅版：自动化扫描、API访问等功能
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与可用性监控。免费层包含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费提供1个监控点，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个可用性监控器，5分钟检查间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察工具。免费提供24小时数据保留
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控 — 永久免费支持最多5台服务器（60秒检查间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合的观测平台，集成指标与日志。免费版：3用户、10个仪表盘、100条告警，Prometheus和Graphite指标存储（1万条时间序列，14天保留期），Loki日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。最多20个检查点免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页面聚合器 - 永久免费提供20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费方案
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅数和团队数
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立网速测试与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL证书监控，最多5个监控点免费
* [linkok.com](https://linkok.com) - 在线死链检测工具，100页以内的小型网站免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware观测平台提供应用与技术栈的完整可视化，支持大规模监控与诊断问题。开发者社区永久免费方案包含：100万条日志事件监控、2台主机的基础设施监控与应用性能监控
* [MonitorMonk](https://monitormonk.com) - 极简可用性监控与美观状态页。"永久免费"方案支持10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标采集工具。这个不断发展的产品也可以在GitHub找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台帮助工程师打造更完美的软件。从单体架构到无服务器架构，您可以检测所有组件并分析、排查和优化整个软件栈。免费层提供每月100GB数据摄入、1个全权限用户和不限量的基础用户
* [nixstats.com](https://nixstats.com) - 免费监控1台服务器。含邮件通知、公开状态页、60秒检查间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API可用性监控、定时任务监控和状态页服务。免费层包含5个检查点（3分钟间隔），支持Slack、Discord和邮件告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火长城屏蔽。通过对比中国服务器与美国服务器的DNS结果和ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 针对高可用服务的强大告警与值班管理工具。最多5个用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施与网络监控方案，包含告警、可视化功能和基础报表。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监控点（每日检查）
* [pagerly.io](https://pagerly.io/) - 通过Slack管理值班（集成Pagerduty、OpsGenie）。免费支持1个团队（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更和可用性。免费方案包含5个URL、每日核心网页指标监控、10个HTML/SEO变更监控器、167个国家联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5个用户免费
* [phare.io](https://phare.io/) - 可用性监控服务，免费支持10万次事件（不限项目和状态页数量）
* [pingbreak.com](https://pingbreak.com/) — 现代可用性监控服务。不限URL数量，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个可用性监控器（10分钟间隔）。支持SSH、HTTP、HTTPS和自定义TCP端口监控
* [pingpong.one](https://pingpong.one/) — 带监控功能的高级状态页平台。免费层包含1个可定制的公开状态页（带SSL子域名）。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监控器、6个月历史可用性/日志数据、不限量状态页和自定义域名！无限期免费邮件告警，无需绑定信用卡

  * [sematext.com](https://sematext.com/) — 免费提供24小时指标监控，支持无限服务器、10个自定义指标、50万个自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标和日志），无需复杂配置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL证书监控，每类提供5个免费监控项
* [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 免费2个监控项
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监控、1个DNS监控和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计项，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（有限制条件）
* [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监控项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS和域名监控。免费监控10台服务器、10个运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，提供告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 免费获取20个运行时间监控（5分钟间隔）和可定制状态页（支持商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供多种监控类型：Cron任务、关键词、网站、端口、Ping。免费25个运行时间检查（3分钟间隔）。支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux和Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
  * [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
  * [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志和运行时间监控。为开源项目提供免费的小型企业订阅套餐。
  * [Embrace](https://embrace.io/) — 移动应用监控服务。小型团队每年100万用户会话内免费使用。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等功能。每月3,000次事件/1名用户免费。开源且支持无限量自托管。
  * [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪工具。兼容开源版Sentry SDK。每月1,000次事件免费，自托管无限制
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
  * [memfault.com](https://memfault.com) — 云端设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费套餐包含每月5,000次错误、不限用户数、30天数据保留
  * [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常，提供小型免费套餐。每月5,000次错误/1名用户免费，自托管无限制
  * [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。集成Vercel等平台，支持高级数据查询和邮件/Discord通知。
  * [Semaphr](https://semaphr.com) — 移动应用免费一站式紧急开关解决方案。
  * [Jam](https://jam.dev) - 开发者友好的一键式错误报告工具。免费套餐支持无限次报告。
  * [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用户免费套餐支持无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还免费提供[开发者文档搜索](https://docsearch.algolia.com/)服务。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1,000名活跃用户免费，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费无限次搜索，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的免费开源Web开发课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化简历模板，可完整克隆编辑并下载的专业平台
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家主讲的免费短期课程，一小时快速掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程与数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等认证级免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 汇集2500+门MIT课程资料，向全球学习者免费开放。YouTube频道请访问[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 包含基础/高级HTML/CSS、JavaScript和SQL的免费在线指南
* [全栈公开课](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL和TypeScript等，支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，专注计算机科学、工程与数据科学领域
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南平台，为用户文章提供免费dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学课程，涵盖Python Click与Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱服务，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可创建无限免费邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发邮件 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者专用的简易测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每日上限300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送服务（无需暴露凭证），免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系人历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于），完全免费的反事务性邮件服务（邮件永不投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 多域名临时/一次性邮箱生成器，页面刷新即更新邮箱地址，完全免费无付费方案
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名且可创建无限地址（含广告），完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务，可创建无限域名邮箱地址（注意：使用.casa/.cf/.click/.email/.fit/.ga/.gdn/.gq/.lat/.loan/.london/.men/.ml/.pl/.rest/.ru/.tk/.top/.work等TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD流程中的邮件功能，免费账户永久享有每日15封邮件额度
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，可收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每日创建最多3个临时邮箱（通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱（邮件3天后自动删除），开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置（roundsphere.com提供的免费服务）
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约每月86,400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件及自动化流程
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API（每月1500次限制），免费公共邮件托管，外发捕获，邮件转Slack/Websocket/Webhook
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员、每秒2封邮件限制、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者专用临时邮箱，通过网页或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址，可通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送至服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（内置端到端加密），1GB存储空间
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，免费层每月10000封邮件，支持异步发送、多SMTP服务器、黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 每日免费验证100个邮箱，同时提供DEA检测/DNS查询/SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封/每日100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名/转发方案，免费5个别名，无限带宽和收发，教育工作者（学生/研究人员等）免费
* [Substack](https://substack.com) — 无限免费新闻通讯服务，收费时开始支付
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每日500封免费邮件

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱地址和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址服务，支持转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间和一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持邮箱确认和一次性邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供多款含免费方案的服务：
   - [邮箱](https://zoho.com/mail) 5用户免费。每人5GB存储，25MB附件限制，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制和5GB存储空间，包含Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，包含3个群组、3个自定义应用、3个看板、3个手册和10个集成，支持频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议和10名网络研讨会 attendees
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理工具
   - [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5人参加的远程培训课程
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS和Atom订阅，访问控制和可定制CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅和1用户免费，所有支付由Zoho托管。保留最近40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面和最多50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件票据。集成[Assist](https://zoho.com/assist)提供1个远程技术支持许可和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储空间，无限用户，每个频道100用户和SSO支持
   - [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约排程
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一款以开发者为核心的功能开关服务，支持无限团队规模，提供卓越的技术支持且价格合理。免费方案包含10个功能开关、2个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨Web、移动端和服务器端应用程序管理功能开关。可使用托管API、部署到私有云或本地运行。
  * [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多支持3名用户免费使用，不限功能开关和实验数量。
  * [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。5人以下团队免费，不限功能开关和A/B测试数量。
  * [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试平台。免费支持3个环境，每个环境5个功能开关。
  * [Toggled.dev](https://www.toggled.dev) - 企业级可扩展的多区域功能开关管理平台。免费方案包含10个开关、2个环境且不限请求次数。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费方案中。
  * [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化强大平台。其慷慨的免费方案提供无限席位、开关、实验和动态配置，每月支持高达100万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台。支持代码化配置和全类型TypeScript SDK，深度集成Next.js和React等框架。提供丰厚的免费层级和低成本扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体。精心挑选的字体库并以易用格式呈现。
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接到Google CDN，可快速轻松地为网站安装众多免费字体。
* [FontGet](https://www.fontget.com/) - 提供分类清晰且带标签的各种可下载字体。
* [Fontshare](https://www.fontshare.com/) - 免费字体服务，不断增长的专业级字体库，100%免费用于个人和商业用途。
* [Befonts](https://befonts.com/) - 提供多款独特字体，支持个人或商业使用。
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和商用付费字体，支持输入文本快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台。
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含CJK（中文、日文、韩文）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX或POST提交等功能。免费版包含无限表单，每月20次提交，若展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。提供友好的现代化图形界面，支持与Google Sheets、Airtable、Slack、电子邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。提供基础用途的免费方案。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月允许500次提交，可自定义回复邮箱地址。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾邮件防护、邮件通知和可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版包含无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单数量，每月250次提交，享受客户支持团队服务。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制为每个表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，提供终身套餐。用户可创建1个免费表单并接收无限提交。高级版支持无限表单和无限提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版包含1个表单，50次提交，单文件上传，100MB文件存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密归档的表单后端。通过界面将提交内容转发至邮箱、Slack或Zapier。可使用自有前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版允许创建无限表单并收集无限提交，内置模板库、反垃圾功能及100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款功能、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码，秒级创建邮件表单等。个人账户每月免费提供50次表单提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点、1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 使用这款一流工具创建专业表单和调查。含50+专家设计模板。免费账户限制为1个活跃调查，每调查100条回复，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调查和用户行为分析工具。永久免费版支持500月活用户，无限响应和事件，多种集成、导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB文件存储，支持Zapier集成、CSV/JSON导出、自定义重定向/响应页、Telegram & Slack机器人、单邮件通知。
* [Survicate](https://survicate.com/) — 一站式收集全渠道反馈并发送跟进调查。通过AI自动分析反馈获取洞察。免费版含邮件、网站、产品内或移动端调查，AI调查生成器，25次月响应。
* [staticforms.xyz](https://www.staticforms.xyz/) - 免费无服务器代码轻松集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建器。免费版含5个表单，每表单最多3个步骤，每月50次响应。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版限制为每表单10个字段，每月100次响应。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持Webhook通知。免费版会对签署文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态&JAMStack网站联系表单解决方案，无需编写后端代码。免费版支持无限表单、无限域名，每月250次提交。
* [WebAsk](https://webask.io) - 调查与表单构建器。免费版含3个调查/账户，每月100次响应，每调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。
* [formpost.app](https://formpost.app) - 免费无限次表单转邮件服务。可设置自定义重定向、自动回复、Webhooks等。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特风格的表单，不限表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF，每个PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分计算和AI等强大功能的在线表单。免费版可收集100次响应，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调查工具，使用Qualli AI生成完美问题。免费版支持500月活用户，不限表单和触发器数量。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集总计25条反馈提交。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的愉悦调查收集反馈。免费版含1个活跃调查，每调查25次响应，支持自定义模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足企业质量和合规标准。免费版包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费自动化Pull Request审查。
  * [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。用两行代码即可调用200+个LLM的统一接口。每月10,000次免费请求，平台功能完全免费！
  * [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，提供可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
  * [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估系统、提示词工作台和数据管理平台。免费计划每周提供1,000条私有评估数据行。
  * [Findr](https://www.usefindr.com/) - 跨应用统一搜索工具，可同时检索所有应用数据。智能搜索助手能基于您的信息回答问题。免费版提供无限统一搜索和每日5次协同查询。
  * [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可永久免费使用全平台。
  * [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包含开放搜索、临床摘要、药物审查、药物相互作用、ICD-10编码和用药管理功能。专业套件还提供免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词和数据集，并调试LLM应用性能问题。为所有LLM生成开放遥测标准追踪数据，提升可观测性，兼容任意观测客户端。免费计划每月5万次追踪。
  * [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，实现技术团队与非技术团队在生成式AI产品调优和投产上的无缝协作。免费版包含全平台功能，每月1,000次追踪和1个工作流DSPy优化器。[#开源项目](https://github.com/langwatch/langwatch)
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和产品生命周期中评估、测试和部署LLM应用。[#开源项目](https://github.com/comet-ml/opik/)
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包含每月5万次观测和全平台功能。[#开源项目](https://github.com/langfuse/langfuse)
  * [Pollinations.AI](https://pollinations.ai/) - 简单易用的免费图像生成AI，提供免费API。无需注册或API密钥，支持多种网站和工作流集成方式。[#开源项目](https://github.com/pollinations/pollinations)
  * [Othor AI](https://othor.ai/) - 面向Tableau/Power BI/Looker等商业智能方案的AI原生替代品，快速、简单且安全。利用大语言模型(LLM)在数分钟内交付定制商业智能方案。永久免费版提供1个工作区、5个数据源连接和单用户无限分析。[#开源项目](https://github.com/othorai/othor.ai)
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型包括DeepSeek R1/V3、Llama和Moonshot AI，这些模型在自然语言处理表现优异，适合多样化开发需求。注意免费模型存在速率限制，另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型满足进阶需求。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供10万免费字数额度，支持Azure OpenAI、DeepSeek和Google Gemini模型，赋能代码生成、深度研究和图像创作等场景。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。顶尖的内容分发服务。cdnjs是由Cloudflare提供支持的免费开源CDN，被全球超过11%的网站所信赖
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - 为您的GraphQL API提供极速可靠的CDN服务，免费支持两个服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您轻松将其添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费提供DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费提供100万次请求
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速启动和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供CDN服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不宕机的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。实时处理图片并拥有全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心PoP节点，1个域名和通用SSL

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持websockets），含认证服务。免费版每项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析功能，特别适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量限制，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的无样板后端框架，含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务和数据库等。个人GitHub仓库开发者可享免费层，AWS费用通过AWS计费但可使用抵扣额和免费层。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供1个永不休眠的免费实例，PostgreSQL免费层限制2连接、10,000行且无备份。
* [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，为快速增长提供全面支持。免费计划含10万服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 为开发者打造的集成平台，基于任意触发器开发工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。新手账户免费，含your-username.pythonanywhere.com域名下的1个Python Web应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月50,000次。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 面向开发者的全球无服务器部署平台，支持Docker容器、Web应用和API。免费实例可部署至德国法兰克福或美国华盛顿，含512MB内存、2GB存储和0.1CPU。免费托管PostgreSQL数据库覆盖法兰克福、华盛顿和新加坡。
* [Napkin](https://www.napkin.io/) - FaaS服务提供500MB内存，默认15秒超时，每月5,000次免费API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务，为Meteor应用提供含免费MongoDB共享托管和自动SSL的PaaS。
* [Northflank](https://northflank.com) — 通过强大UI/API/CLI构建部署微服务、定时任务和托管数据库。免费层含2个服务、2个定时任务和1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全功能平台，兼具NoCode工具敏捷性与编程语言能力。免费版含[1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，内置CI/CD和GitHub集成。[免费计划](https://wundergraph.com/pricing)支持3个项目、1GB出口流量和每月300分钟构建时间。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务，每月赠送5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费层支持连接本地Kubernetes，为开发者提供类生产测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供每月100万次调用、100GB带宽和10个定时任务，仅限非商业或学术用途。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
  * [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
  * [backendless.com](https://backendless.com/) — 移动和Web Baas（后端即服务），免费提供1GB文件存储、每月50,000次推送通知和1000个数据表对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，支持在线编辑器或本地工具免费构建和托管。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发者计划提供文档和资源，为企业构建和部署数字创新方案。包含平台、SDK及组件库的完整个人沙箱访问权限。
  * [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P语音视频通话、文件附件和推送通知。支持最多1000用户的免费应用。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录、500万次月度函数调用。
  * [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可访问，正式版后将提供慷慨的免费方案。
  * [Firebase](https://firebase.com) — 助力构建和运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
  * [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI。集成Firebase。免费方案包含UI生成器和免费模板的完整访问权限。
  * [getstream.io](https://getstream.io/) — 数小时内构建可扩展的应用内聊天、消息、音视频及信息流功能（传统开发需数周）。
  * [hasura.io](https://hasura.io/) — 扩展任意托管环境的现有数据库，提供即时GraphQL API，安全支持Web、移动和数据集成场景。每月1GB数据流量免费。
  * [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费方案包含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
  * [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，无限联系人并支持自动预热功能。
  * [paraio.com](https://paraio.com) — 具备灵活认证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
  * [pubnub.com](https://www.pubnub.com/) — 每月100万条消息和100个活跃设备的免费推送通知。
  * [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
  * [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2000订阅者内支持无限通知。
  * [pusher.com](https://pusher.com/beams) — 每月2000活跃用户的免费无限推送通知。iOS和Android统一API。
  * [quickblox.com](https://quickblox.com/) — 即时通讯、音视频通话及推送通知的通信后端。
  * [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API、模板等服务的服务器，并组合成数据转换管道。
  * [Salesforce开发者计划](https://developer.salesforce.com/signup) — 通过拖拽工具快速构建应用。点击定制数据模型。使用Apex代码深入开发。通过强大API实现集成。企业级安全保障。用点击或前沿Web框架定制UI。免费开发者计划开放完整Lightning平台权限。
  * [simperium.com](https://simperium.com/) — 即时自动同步多平台数据，结构化数据无限收发存储，每月最多2,500用户。
  * [Supabase](https://supabase.com) — 开源Firebase替代方案，用于构建后端。免费方案提供认证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) — 含认证、配额、监控和分析的API管理服务。提供免费云方案。
  * [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次Zap触发，每月100次任务。
  * [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
  * [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务、15分钟更新间隔、5个活跃自动化流程、Webhook支持。
  * [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储、256MB实例、每日3K API请求和10K推送。（API与Parse Platform高度相似）
  * [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。完美支持应用、数据库等托管。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持与15+种数据库及任何API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源的快速创建内部应用的低代码平台。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，可定制移动和Web应用。提供拖拽界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个帮助工程团队和产品经理快速构建内部工具、自定义用户流程、数字体验、自动化、管理面板和运营应用的低代码平台，效率提升10倍。
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，利用OpenAI、Anthropic、Firecrawl等内置免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编程助手和每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数、每个应用0.5GB存储和1GB内存。免费层还包含Studio和Studio Pro IDE。
* [outsystems.com](https://www.outsystems.com/) — 面向本地或云的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台。Retool具有高度可扩展性，任何能用JavaScript和API实现的功能都可以在Retool中完成。免费层每月支持最多5个用户，不限应用和API连接数。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。使用AI生成、可视化编辑并通过代码扩展。集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发应用。
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。支持通过JavaScript、Python和SQL进行高度定制的拖拽式UI构建。提供云和自托管两种方案，最多5个用户免费。
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。单个用户每月100万次工作流活动免费（[德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP/WebDAV/SSH访问，包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+免费短域名，支持PHP、MySQL，提供应用安装器和邮件发送功能，无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用，开发者优先的部署和开发平台，简化基础设施配置并加速项目搭建。
* [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建网页和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 面向Web3前端的去中心化托管平台，专注于提升在线率与安全性，并为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 在App Platform入门套餐中免费构建并部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管至网络（仅限静态站点），永久免费，每个Google/Microsoft账户限一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，支持本地托管站点并实时公开分享，可通过图形界面、API或CLI操作。
* [Free Hosting](https://freehostingnoads.net/) — 免费主机支持PHP 5/Perl/CGI/MySQL/FTP，提供文件管理器、POP邮箱、免费子域名/域名托管、DNS区域编辑器、网站统计及在线支持等独家功能。
* [Freehostia](https://www.freehostia.com) — 提供行业领先的控制面板和50+应用一键安装，即时配置且无强制广告。
* [HelioHost](https://heliohost.org) — 非营利性免费主机，配备Plesk面板，支持PHP/Node.js/Python/Django/Flask/.NET/Perl/CGI，数据库含MySQL/PostgreSQL/SQLite，含IMAP/POP3/SMTP邮箱，无限带宽，免费子域名，基础套餐1GB存储可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名与SSL，每月100GB流量，覆盖260+Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 支持SFTP文件传输的PHP虚拟主机。
* [Neocities](https://neocities.org) — 静态站点托管，1GB免费存储+200GB月流量。
* [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，含100GB数据与100GB/月流量。
* [PandaStack](https://www.pandastack.io/) — 开发者生态体系，提供多种托管形式（静态/容器化/WordPress等一键部署应用），免费套餐含1个静态/容器站点+1个数据库，100GB带宽+300分钟构建时长/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管平台，含自动化DevOps与弹性架构，开发者与代理商免费使用（不支持自定义域名）。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，提供免费SSL、全球CDN、私有网络、Git自动部署，免费套餐适用于Web服务、数据库和静态网页。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者专用静态发布工具，支持无限站点与自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 免费版限制：1个站点/50页/50MB存储，仅能使用170+预设区块中的基础模块，不支持自定义字体、网站图标和域名。
* [Vercel](https://vercel.com/) — 通过`git push`自动构建、部署和托管Web应用，提供免费SSL、全球CDN及独特预览URL，特别适合Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的建站工具，免费版支持无限网站、70+区块、5套模板，可自定义CSS/网站图标/SEO/表单（无自定义域名）。
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，全功能开发者平台，免费套餐适用于静态资源、测试环境和开发应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的Flarum免费托管（最多250用户，捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 免费托管单个项目，容器存活期两周，500MB内存，SFTP空间1GB。
* [Patr Cloud](https://patr.cloud/) — 易用云平台，付费服务中包含三个免费静态站点托管。
* [Serv00.com](https://serv00.com/) — 3GB免费空间含每日备份（保留7天），支持Crontab任务/SSH访问/GIT/SVN/Mercurial仓库，兼容MySQL/PostgreSQL/MongoDB及PHP/Node.js/Python/Ruby/Java/Perl等数十种语言环境。
* [Sevalla](https://sevalla.com/) — 简化应用/数据库/静态站点管理的托管平台，免费版限制：1GB站点容量/100GB流量/600分钟构建时长/每账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供API接口的免费DNS服务，包含多种DNS高级功能。
  * [cloudns.net](https://www.cloudns.net/) — 免费托管1个域名（50条记录上限）的DNS服务
  * [deSEC](https://desec.io) - 注重安全性的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
  * [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务
  * [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务。免费版支持1个DNS区域（域名）和10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS托管
  * [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多支持5个域名，提供多种环境配置指南。
  * [Dynv6.com](https://dynv6.com/) — 支持[API调用](https://dynv6.com/docs/apis)的免费动态DNS服务，可管理多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管服务，同时提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后通过"Subdomains"菜单获取。
  * [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持三个域名，所有功能均有合理限制
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) — 无限域名数量的免费DNS服务
  * [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询
  * [noip.at](https://noip.at/) — 无需注册的免费动态DNS服务，无追踪、日志或广告，域名数量不限。
  * [noip](https://www.noip.com/) — 动态DNS服务，免费提供3个主机名，需每30天确认一次
  * [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含嵌入IP地址的主机名时返回该IP地址
  * [zilore.com](https://zilore.com/en/dns) — 免费托管5个域名的DNS服务
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管
  * [zonewatcher.com](https://zonewatcher.com) — 自动备份与DNS变更监控，免费支持1个域名
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 华为云提供的免费DNS托管
  * [Hetzner](https://www.hetzner.com/dns-console) – Hetzner提供的免费DNS托管服务，支持API
  * [Glauca](https://docs.glauca.digital/hexdns/) – 最多支持3个域名的免费DNS托管，提供DNSSEC支持
  * [VolaryDDNS](https://volaryddns.net) - 无订阅、无广告的高性能免费动态DNS服务
  * [LocalCert](https://localcert.net) - 免费提供与公共CA兼容的`.localcert.net`子域名，适用于私有网络环境

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名服务
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名服务

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点，1核CPU，1GB内存，PostgreSQL和MySQL各1GB存储空间。可轻松迁移至更高级方案或跨云部署。
  * [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类Mongdb查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用。包含2名开发者席位，无需信用卡。
  * [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2核CPU、2GiB内存、8GiB存储。每个组织可创建一个集群，无需支付方式。
  * [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，20个并发连接
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建从物联网到AI的下一代应用
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB空间
  * [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
  * [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
  * [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费层支持25MB内存、1个代理服务器和基础分析
  * [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
  * [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行数据、1个月版本历史、最多25名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
  * [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能与主流商业应用集成的工具。免费方案包含无限用户、10个堆栈和每个堆栈2GB附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RUs)。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验方案。永久免费入门计划提供9GB总存储、最多500个数据库、3个地理位置、每月10亿行读取及SQLite本地开发支持。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000基数序列
  * [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式化、关联关系、自动REST API（支持类MongoDB查询）及高效多用户管理界面。免费方案允许3个用户、2,500条记录和每秒1次API请求。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点/17.5万关系）。
  * [Neon](https://neon.tech/) — 托管PostgreSQL，0.5GB总存储、1个项目、10个分支、无限数据库、常驻主分支（5分钟后自动暂停）、非主分支计算每月20小时活跃时长。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，与Prisma ORM集成。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
  * [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse服务，支持HTTP无连接数据摄入，可将SQL查询发布为托管HTTP API。免费层无时限，10GB存储+每日1,000次API请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，提供类SQL图查询语言和REST API。免费实例含2vCPU/8GB内存/50GB存储，闲置1小时后休眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发免费，企业部署和支持需付费。
  * [filess.io](https://filess.io) - 可免费创建两个数据库（每个最大10MB），支持MySQL/MariaDB/MongoDB/PostgreSQL。
  * [xata.io](https://xata.io) - 内置强大搜索分析的无服务器数据库。单一API、多类型安全客户端库，优化开发工作流。永久免费层满足爱好者需求，含3个Xata单位（具体定义见官网）。
  * [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL的全栈低代码开发平台，提供无服务器后端即服务。通过UI应用构建器快速开发Web应用，免费层包含：2,500行、500MB存储、1Gb/h无服务器计算和5个客户端应用用户。
  * [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、永不停机、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器与其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为本地主机提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全地将类LAN网络扩展到分布式团队，免费方案支持最多5人无限网络。
  * [Mirna Sockets](https://mirna.cloud/) - 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并支持性能监控。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务暴露为公共URL。提供免费托管版本和[开源版本](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务暴露为公共URL。
  * [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装和注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。无限节点。(Hamachi替代方案)
  * [segment.com](https://segment.com/) — 事件翻译和路由枢纽，可转发到其他第三方服务。每月10万次事件免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
  * [Tailscale](https://tailscale.com/) — 零配置VPN，使用开源的WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
  * [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook到公共或内部(如localhost)目的地。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点(`https://yoursubdomain.webrelay.io <----> http://localhost:8080`)。
  * [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控webhook。每月10万次请求和10万次尝试，保留3天数据。
  * [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+每月500MB TURN带宽，限速带宽，单一地理区域。
  * [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端的端到端加密网络。支持桌面/移动/NA客户端；可通过网页界面配置自定义路由规则和审批私有网络新节点。
  * [LocalXpose](https://localxpose.io) — 反向代理，可将本地主机服务器暴露到互联网。免费方案提供15分钟隧道有效期。
  * [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布为公共自定义URL，并通过访问控制保障安全。单个集群免费支持5个服务。
  * [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包括欧盟服务器、随机子域名和单用户支持。
  * [btunnel](https://www.btunnel.in/) — 将本地主机和本地TCP服务器暴露到互联网。免费方案包括文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB空间（用户数不限）
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5个用户，提供Jira集成、无限视频会议、团队和会话
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费云存储版，提供移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且用户数不限
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版包含5人团队、无限仓库/项目/文档、500分钟CI/CD时长和1GB存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10个用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费支持3个项目（用户数不限）和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版支持无限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5用户免费，开源项目免费
* [gleek.io](https://www.gleek.io) — 开发者专属的免费描述转图表工具，支持非正式UML类图/对象图/ER图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - GraphQL模式差异检测工具，精确标记破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — GitHub issues项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台，免费版支持无限用户/项目/看板和100MB存储
* [Instabug](https://instabug.com) — 移动应用Bug报告与反馈SDK，免费版支持1个应用和1个成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多视角交互式图表工具，免费版支持无限私有图表（最多3个查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10个用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费增值版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2个用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1个用户（看板/列表/卡片数量不限）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度追踪工具（含Chrome扩展），完全免费
* [Kumu.io](https://kumu.io/) — 关系图谱工具，免费版支持无限公开项目，学生可享私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版支持无限成员、10MB文件上传和250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10个用户/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版支持3个可编辑文档
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版支持5个用户/团队和100MB存储
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3个用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费支持无限公开项目和2个私有项目（3个活跃用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台，免费版支持2个用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版支持无限成员/5MB文件上传/1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）

  * [ScrumFast](https://www.scrumfast.com) - 拥有直观界面的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每个应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与会议记录应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版提供无用户限制的任务、迭代和工作区
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，从看板到Scrum几乎涵盖所有运营流程。无限用户免费，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版包含1个工作区（支持无限任务与项目）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会议和迭代计划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供高级付费方案
* [teleretro.com](https://www.teleretro.com/) — 融合破冰游戏、动图和表情的趣味回顾会议工具，免费版包含3次回顾会议且成员不限
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台，私人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理工具。免费版功能：5个活跃项目/每个项目5名用户/5MB文件上传/3个过滤器/1周活动历史
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版提供无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台，含集成与众测功能，免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目管理、版本控制与问题追踪），免费版提供无限项目与协作者及3GB存储
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具，最多3名用户免费且项目不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud）适用于开源项目与私人项目（3名用户免费），含时间追踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内集成的独家项目管理方案，公共仓库、开源组织与非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，5名成员以内免费，支持5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目与4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告等功能，专为自由职业者设计）；[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售及客户支持打造的项目管理工具，特别适合外包与跨组织协作项目。免费版支持3个项目与5名成员
* [Pulse.red](https://pulse.red) — 极简时间追踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也支持其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时图像优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化和CDN服务。提供多种图像缩放、压缩和水印功能。开源插件支持响应式图像、360度图像制作和图像编辑。免费月套餐包含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图像上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。支持1GB以内文件免费上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务。免费套餐支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档、图像、音频、视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 支持网页界面和API的免费文件共享存储平台。无限文件大小、带宽和下载次数，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 图像视频托管及CDN处理流媒体服务。免费套餐每月250GB视频流量和30GB图像流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图像图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图像的开源机器人，在保持质量的同时减小文件体积（开源项目免费）。
* [ImgBB](https://imgbb.com/) — 无限图像托管服务。支持拖拽上传（单图32MB限制），提供直链、BBCode和HTML缩略图。登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图像缓存管理和CDN服务。免费套餐包含1000个源图像、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能优化图像处理服务，免费版支持1MB以内文件。
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费套餐支持100个键（1KB/键）、100次调用/小时。
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图像代码优化/CDN）。免费套餐每月5000页面浏览。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享/复制/移动管理工具。基础版支持无限传输（单文件250MB上限）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取有限免费计划和开源计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目、黑客松和移动应用的简易JSON存储API！
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储和API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队使用的协作平台，可体验基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 无需登录/水印/广告的快速批量二维码生成器。单次最多导出100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图像优化API，已处理超70亿张图像。支持WordPress/Drupal/Magento等主流CMS。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费套餐每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图像/文档编码服务。开源项目/慈善机构/学生可通过GitHub学生包免费使用，商业应用测试期享2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图像服务。提供图像CDN、媒体处理API和前端优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具集。开发者可免费使用所有功能：文件上传API/UI、图像CDN/源服务、自适应交付和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 支持自动优化/实时转换/快速集成的图像CDN。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私的零知识文件存储服务。注册即享永久10GB免费空间！
* [degoo.com](https://degoo.com/) – AI云存储服务，免费20GB空间（支持3台设备），推荐用户可获5GB奖励（账户90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款简单易用的全球图片CDN服务。60秒内即可完成配置，支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件支持。[点击此处](https://imageengine.io/developer-program/)申请免费开发者账户。
  * [DocsParse](https://docsparse.com/) – 基于GPT的AI文档处理工具，可将PDF、图片转换为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度。
  * [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、Logo等。
  * [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪机制，使用完全免费且不收集用户数据。
  * [Doradrop](https://doradrop.com) — Doradrop是无广告的无限存储文件共享平台，无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精心整理的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板，提供丰富主页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，团队可构建、文档化、发布、扩展和维护设计系统。免费版支持3名编辑人员协作1个设计系统，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费Web应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，也提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 全格式转换工具，支持208种格式（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [coolors](https://coolors.co/) - 免费调色板生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业级原型设计工具，支持无限查看者，最多2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/物权授权）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变选择工具
* [Icon Horse](https://icon.horse) – 通过简单API获取任意网站最高分辨率favicon
* [Iconoir](https://iconoir.com) – 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源（需标注来源）
* [landen.co](https://www.landen.co) — 无代码生成/编辑/发布精美网站与落地页，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，URL后添加宽高参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大Lottie动画平台，提供Android/iOS/Web动画工具与插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 无限量免费思维导图云端存储，多设备即时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 为社交媒体和电商创建逼真服装效果图，提供40个免费模板
* [Modeldraw.com](https://modeldraw.com) — 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限团队成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 完全免费的浏览器矢量编辑器
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 基于Web的开源设计与原型工具，支持SVG格式
* [pexels.com](https://www.pexels.com/) - 商用免费图库，提供按关键词搜索的免费API
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，具有Photoshop界面风格，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线浏览器编辑器
* [Plasmic](https://www.plasmic.app/) - 快速易用的网页设计与页面构建工具，可集成到代码库中，支持响应式页面/复杂组件开发，可发布至生产环境
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持URL直链调用
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 浏览器内直接转换PNG为WebP格式，无需上传，完全客户端处理确保隐私安全
* [Proto.io](https://www.proto.io) - 无需编码创建完全交互式UI原型，免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) — 简单的应用图标尺寸调整管理服务
* [Rive](https://rive.app) — 创建并发布精美动画至任何平台，个人用户永久免费（含编辑器服务和多平台运行时）
* [storyset.com](https://storyset.com/) — 为项目创建定制化插画的免费工具
* [smartmockups.com](https://smartmockups.com/) — 产品效果图制作工具，提供200个免费模板

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — 专为shadcn/ui设计的精美主题，支持实时自定义颜色、排版等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，URL可直接热链到网页/应用中，支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可完全免费使用且无需署名
* [unsplash.com](https://unsplash.com/) - 商业与非商业用途的免费图库（无限制许可）
* [vectr.com](https://vectr.com/) — 网页端+桌面端的免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画效果和网站托管的可视化建站工具，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建最多4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，展示设计稿/资源/样式指南，免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形与图像
* [Responsively App](https://responsively.app) - 免费开发工具，助力更快速精准的响应式网页开发
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，内含持续扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等，开源项目见https://github.com/xlayers/xlayers）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式强大SEO建站工具，前5页免费，支持无限自定义域名和全功能
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器，无水印，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页生成器，免费支持一个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌LOGO库，内置浏览器矢量编辑工具
* [svgrepo.com](https://www.svgrepo.com/) - 通过多种矢量库搜索最适合项目的图标/矢量图，可商用免费下载
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具，可直接用于设计工作流
* [Canva](https://canva.com) - 免费在线视觉内容设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击即可创建独特背景/图案/形状的免费设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，免费支持3个项目/不限协作人数/代码导出
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG/DXF/EPS等矢量格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台，含开发者专用转换器（如JPG转SVG等）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/JPG/SVG/WEBP，可安装为PWA，免注册使用
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 包含4400万+品牌的公司LOGO API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 个人与商用免费的Bootstrap/Angular/React/Vue UI套件，含700+组件/模板/教程
* [TW Elements](https://tw-elements.com/) - 用Tailwind CSS重构的Bootstrap组件库，设计更优功能更强
* [DaisyUI](https://daisyui.com/) -- 免费。"用更少类名实现Tailwind CSS效果"的组件库（含按钮等）
* [Scrollbar.app](https://scrollbar.app) -- 简易免费网页滚动条设计工具
* [css.glass](https://css.glass/) -- 用CSS创建玻璃拟态设计的免费工具
* [hypercolor.dev](https://hypercolor.dev/) -- 精选Tailwind CSS渐变色集合，含多种生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标包的统一接口库，支持跨包搜索及导出SVG/框架代码
* [NextUI](https://nextui.org/) -- 免费。美观/快速/现代的React & Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费。全网最强图标库，完全可编辑的真正开源设计系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可直接复制粘贴的优美组件库，具备可访问性与可定制性
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件库
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年独特日历图标，完全免费
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello/Jira等工具生成图像背景模糊框
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代品，免费版支持无限网站（5个自定义域名）/1万PV/2GB资源存储
* [Nappy](https://nappy.co/) -- 黑人及棕色人种的免费精美照片（商用与个人用途）
* [Tailkits](https://tailkits.com/) -- 精选Tailwind模板/组件/工具集，含代码/网格/阴影等生成器
* [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板，即时预览复制颜色类
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存与导出的免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库（图标/照片/插画）的离线图形设计工具，免费版含10个云文档/30天历史记录/基础工具
* [Flows](https://flows.sh/) -- 完全可定制的产品引导平台，免费支持250名月活跃用户

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计网站（由设计师投票选出）
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常非真实应用案例
* [Landings](https://landings.dev/) - [网页截图] 根据偏好寻找最佳着陆页设计灵感
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供设计师免费电子书和网络UI套件资源
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图集，包含桌面端、平板和移动端视图
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全检索的移动应用截图库节省UI/UX研究时间
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动与网页UI设计
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师/开发者/产品人员提供的优质UI/UX模式库（iOS和Android）
* [Page Flows](https://pageflows.com/) - [移动/网页流程视频与截图] 多款应用的完整操作流程视频，含截图资源，支持高效检索
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取最新网页和移动应用UI设计趋势灵感，可按模式和应用程序筛选
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考库，支持标签分类和搜索

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月3万次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月5万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 面向Web/桌面/移动端的地图API和SDK，提供地理空间数据存储、分析、地理编码、路径规划等功能。每月免费额度：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5000次行驶时间计算、5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析及共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日5000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图展示服务及SDK，提供地理空间数据解决方案
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务及SDK，支持地图可视化。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2500次免费地图浏览和API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 面向多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，支持Fedora和EL系统
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享网站，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。这款开源IDE对所有人免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实Android应用
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）
* [BBEdit](https://www.barebones.com/) - macOS上流行且可扩展的编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。完全免费的公共服务
* [BlueJ](https://bluej.org) — 专为初学者设计的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI帮助新手入门
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器。轻量易用且高度可定制
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持标签分类和100+编程语言
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源且支持Windows、macOS和Linux
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，能编写（代码块、自动补全、单元测试）、理解（掌握整个代码库知识）、修复和查找代码。支持VS Code、JetBrains和在线使用
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索、定义和复用代码片段的编程助手。对个人和小型组织免费
* [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，支持分类、搜索和标签。完全免费且无限制
* [cocalc.com](https://cocalc.com/) —（原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：预装Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，为师生适配GitHub Codespaces
* [codepen.io](https://codepen.io/) — 前端网页开发 playground
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等的在线Playground
* [Components.studio](https://webcomponents.dev/) - 独立编写组件代码，通过故事可视化展示，测试并发布到npm
* [Eclipse Che](https://www.eclipse.org/che/) - 基于网页和Kubernetes的多语言支持IDE，开源且社区驱动。Red Hat托管实例可通过[workspaces.openshift.com](https://workspaces.openshift.com/)访问
* [fakejson.com](https://fakejson.com/) — 通过API快速生成虚假数据。描述需求后API即返回JSON格式数据，加速创意落地过程
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI结对编程工具。原生集成CLI并与任何IDE无缝协作。免费版包含基础AI模型本地处理能力
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏工具。免费版每天可使用5个VM
* [GitPod](https://www.gitpod.io) — 为GitHub项目提供即时可用的开发环境。免费版每月50小时
* [ide.goorm.io](https://ide.goorm.io) goormIDE是云端全功能IDE。支持多语言、基于Linux容器的完整终端、端口转发、自定义URL、实时协作聊天、链接分享、Git/Subversion。免费版包含1GB内存、10GB存储/容器，5个容器槽位
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器和编辑器，免费版REST API每天可编译200次
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具套件（含[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。为学生、教师、开源项目及用户组提供免费授权
* [jsbin.com](https://jsbin.com) — 前端网页开发 playground（支持HTML、CSS、JavaScript，以及Markdown、Jade和Sass）
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端网页开发 playground
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回虚假JSON数据的REST API端点，源码可本地运行
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假JSON数据的微型API模拟服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST API/SOAP模拟服务，快速定义返回JSON/XML数据的端点
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式的测试数据，也可模拟后端API
* [Mocklets](https://mocklets.com) - HTTP协议API模拟器，提供终身免费版，加速并行开发和全面测试
* [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器开发Web应用。免费版提供24小时有效期的服务器，每天4小时运行时间（2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 开箱即用的Sass/Less/Stylus/Pug/Jade/Haml/Slim/CoffeeScript/TypeScript编译器，支持浏览器实时重载，点击即可添加自定义工具
* [Replit](https://replit.com/) — 支持多种语言的云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程playground。运行代码无需注册，保存代码需登录。同时提供面向初/中级开发者的免费课程
* [stackblitz.com](https://stackblitz.com/) — 在线/云端全栈应用开发IDE。支持所有主流NodeJs前后端框架。创建新项目短链接：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新设计的代码编辑器，由Microsoft开发
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能集成开发环境，提供数千个扩展，支持跨平台应用开发（可通过Microsoft扩展下载iOS和Android组件）、桌面/Web/云开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的VSCode二进制发行版，无遥测/追踪，采用自由软件许可
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持无缝工作流。可内联渲染任何内容，保存会话历史记录，基于开放Web标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58种模板支持独立开发Web组件，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效的数据库IDE，具备服务器发现、ER图、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器，包括Java、Python、C++、JavaScript等

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - Google Analytics替代方案，提供热图、会话记录和收入追踪功能。
  * [Repohistory](https://repohistory.com) - 美观的仪表板，用于追踪GitHub代码库超过14天的流量历史。免费计划允许用户监控单个代码库的流量。
  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助你将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个数据同步目标。
  * [Avo](https://avo.app/) — 简化的分析发布工作流。单一事实来源的追踪计划、类型安全的分析追踪库、应用内调试器和数据可观测性，确保在发布前发现所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯。
  * [Branch](https://www.branch.io) — 移动分析平台。免费层支持最多1万移动应用用户，提供深度链接等服务。
  * [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。从数据仓库同步10个字段到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站，提供3000次浏览分析。
  * [Databox](https://databox.com) — 通过整合其他分析和BI平台提供商业洞察和分析。免费计划支持3名用户、仪表板和数据源，包含1100万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月2000次页面浏览（1个网站）
  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多2个应用
  * [GoatCounter](https://www.goatcounter.com/) — 开源网络分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且注重隐私的替代方案，与Google Analytics或Matomo竞争。免费层适用于非商业用途，包含无限站点、6个月数据保留和每月10万次页面浏览。
  * [Google Analytics](https://analytics.google.com/) — Google Analytics
  * [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月支持100万次页面浏览，无需信用卡。
  * [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流
  * [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月免费支持3000次事件。
  * [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。免费支持每月1万次会话。
  * [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划每日支持2000次页面浏览，每日100次快照（最大容量300），可存储3个热图快照365天。无限团队成员。还包括应用内和独立调查、带截图的反馈组件。免费层允许创建3个调查和3个反馈组件，每月收集20条回复。
  * [Keen](https://keen.io/) — 自定义分析工具，用于数据收集、分析和可视化。每月免费1000次事件
  * [Yandex.Datalens](https://datalens.yandex.com/) — Yandex Cloud数据可视化和分析服务。免费提供，无用户和请求数量限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) — 无限免费分析
  * [Mixpanel](https://mixpanel.com/) — 每月10万跟踪用户，无限数据历史和席位，美国或欧盟数据驻留
  * [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月免费50万次API调用）
  * [optimizely.com](https://www.optimizely.com) — A/B测试解决方案，免费入门计划支持1个网站、1个iOS和1个Android应用
  * [Microsoft PowerBI](https://powerbi.com) — 微软的商业洞察和分析工具。免费计划有限制使用，提供100万用户许可证。
  * [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接数据库、S3和API。即时导入、分析、图表化和共享数百万行数据。三个永久免费的工作簿。
  * [sematext.com](https://sematext.com/cloud/) — 每月免费5万次操作，1天数据保留，无限仪表板、用户等。
  * [Similar Web](https://similarweb.com) — 网站和移动应用分析。免费计划每个指标提供5个结果，1个月移动应用数据和3个月网站数据。
  * [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划分析最近500名访问者。
  * [Statsig](https://statsig.com) - 一体化平台，涵盖分析、功能标记和A/B测试。每月免费100万次计量事件。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、创建并使Tableau完美适配你的组织。免费开发者计划提供Tableau Online的个人开发沙盒许可证。版本为最新预发布版，数据开发者可以测试这一卓越平台的每个功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型并追踪访问者。免费支持一名用户，无限测试
  * [woopra.com](https://www.woopra.com/) — 免费用户分析平台，支持50万次操作，90天数据保留，30多个一键集成。
  * [counter.dev](https://counter.dev) — 简单且注重隐私的网络分析。免费或按捐赠付费。
  * [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费跟踪100万次事件。还提供每月250次回复的无限应用内调查。
  * [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。有免费计划，为开源项目提供个人订阅优惠，并有开源版本。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一款免费易用的工具，捕捉真实用户如何使用你的网站。
  * [Beampipe.io](https://beampipe.io) - Beampipe是简单且注重隐私的网络分析。免费支持最多5个域名和每月1万次页面浏览。
  * [Aptabase](https://aptabase.com) — 开源、注重隐私且简单的移动和桌面应用分析。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费2万次事件。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的追踪计划，促进无缝协作。部署到生产环境使用真实流量，或在不编写代码的情况下为回归测试添加分析覆盖。
  * [LogSpot](https://logspot.io) - 完整的统一网络和产品分析平台，包括可嵌入的分析组件和自动化机器人（Slack、Telegram和Webhooks）。免费计划每月包含1万次事件。
  * [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级注重隐私的Google Analytics替代方案。无限页面浏览、无限访客、无限页面热图和目标追踪。免费支持最多3个域名，每个域名600次会话回放。
  * [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在简化跨平台的分析和产品更新管理。免费计划包括每月1万次事件、产品日志和每周洞察。

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站与产品分析工具。免费方案包含每月3,000次事件记录。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无需Cookie且操作直观性提升10倍。免费方案支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，提供用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目数量限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个转化漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用额度
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入1万美元以下免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费套餐包含每月7,500次API请求。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供iOS、Android、Stripe和Paddle平台的实时订阅事件与开箱即用的变现工具。每月收入1万美元以下免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，为iOS、Android、React Native、Flutter、Unity或网页应用集成移动应用内订阅功能。每月收入1万美元以下免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密与法币汇率。免费层级每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率数据。免费DEVELOPER套餐包含每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API支持每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 提供实物货币与加密货币的实时汇率数据，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率与货币转换服务，免费套餐每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费套餐每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费Micro套餐每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版本需注明数据来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持连接Stripe、Chargebee等平台。免费套餐每月3万次事件。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购与订阅平台，包含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购与订阅后端服务（支持iOS和Android）。每月追踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟增值税率API，免费套餐每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库用于构建和存储Docker镜像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的实践平台
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
  * [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册服务

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant box 的官方平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的平台
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件
* [Medium](https://medium.com/) — 深度探讨对你重要的话题
* [AyeDot](https://ayedot.com/) — 以现代多媒体短格式Miniblog的形式免费分享你的想法、知识和故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可用 GitHub issues 实现博客评论、维基页面等功能！
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万个网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管式评论平台，采用"按需付费"模式，支持"少数域名下的完全控制评论行为与外观的单一管理员"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕捉时间信息和视口尺寸控制。
* [microlink.io](https://microlink.io/) — 将任何网站转化为结构化数据，包括标准化元标签、美观链接预览、爬虫功能和截图即服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) — 通过简单API调用生成任意网站截图。基于Google Cloud构建，具备弹性扩展能力。每月提供100次免费截图。
* [screenshotlayer.com](https://screenshotlayer.com/) — 支持高度自定义的网页快照服务。每月100张免费快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照额度，支持png/gif/jpg格式，包含整页截图而不仅限首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度，自2017年持续提供。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图与域名智能API服务。每月100次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线 IDE，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 设备即可构建 iOS 和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - Codemagic 是全托管的移动应用 CI/CD 服务平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一款极速x86虚拟机，可直接在浏览器中运行Linux和Windows 2000
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 基于x86架构的虚拟机，支持在浏览器中直接运行Linux及其他操作系统

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且为SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理与合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计与同意管理方案。免费版提供单次扫描和单个横幅。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版提供大部分功能但限制访问者数量。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射。免费版包含核心同意管理功能，并向通过验证的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成美观的图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估物联网设备。免费开发者计划支持5台设备，含免费云存储和数据存储，提供移动应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以类似截图的精美格式创建和分享代码片段，常用于在Twitter或博客中优雅地展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime Text等编辑器的时间追踪与编码指标插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为社交媒体分享截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环触发webhook的服务，免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，提供无限免费任务
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月支持5次预订（含1个日历）
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费版支持5个域名和20万次月请求
* [Elementor](https://elementor.com) — WordPress网站构建器，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除/分析图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端管理方案（许可证合规性与漏洞）
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加webhook支持（含队列/退避重试/日志），免费版每日100次投递（14天保留期+3个端点）
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的主机信息（ASN/ISP/地理位置等），含多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库复用加速应用开发
* [Base64解码/编码工具](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab/Bitbucket等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表板管理PDF模板，通过API动态生成PDF，免费版每月300份文档
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的精美代码片段截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言模型/序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥/密码的移动端友好工具
* [ray.so](https://ray.so/) - 创建精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档生成工具
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理，免费版含10个源和10万次月访问
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求（GET/POST/PUT/DELETE/HEAD），支持头部和令牌认证，含基础请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电量/里程表/车门锁控等汽车API
* [snappify](https://snappify.com) - 开发者视觉创作工具（从代码片段到技术演示），免费版支持3个同时编辑项目（无限下载+每月5次AI代码解释）
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容订阅源（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查（免费版每份问卷限10个问题和100份回复）
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台（从网站实时聊天到WhatsApp），免费版支持无限机器人
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅（免费版支持3个订阅源）
* [videoinu](https://videoinu.com) — 在线创建和编辑录屏视频
* [Webacus](https://webacus.dev) — 开发者工具集（编解码/数据转换等）

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
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏美术师的免费游戏素材
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费的2D、3D、音频和GUI资源
* [OpenGameArt](https://opengameart.org) — 开源游戏素材，包括音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费的2D/3D素材、音频、GUI、背景图、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供大量教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D/3D素材、音频、图标和游戏套件市场，也可用于作品集展示
* [Rive](https://rive.app/community/) — 社区资源库，支持通过免费方案自主创建游戏素材
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型及PBR材质纹理资源
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的免费2D/3D素材、音频和UI资源
* [Poliigon](https://www.poliigon.com/) — 含多分辨率选项的免费/付费纹理、模型、HDR贴图和笔刷，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的免费协作音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为localhost开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS列表
* [GitHub开发者免费开源软件库](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件资源中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML、CSV、PDF、JSON和Excel文件与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）自动续期
* [Pyrexp正则表达式工具](https://pythonium.net/regex) — 基于网页的免费正则表达式测试与可视化调试工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL、OpenShift、CodeReady等），仅限个人计划，同时提供免费电子书参考
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储提供商（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直接备份数据库/文件系统/应用到s3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题和UI套件，助您快速构建应用！
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO以提升搜索引擎排名的工具
* [SmallDev.tools开发者工具箱](https://smalldev.tools/) — 支持多种格式编解码、HTML/CSS/JavaScript压缩/美化、生成JSON/CSV测试数据等功能的免费工具集，拥有优雅界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供愉悦的数据导入体验。无需信用卡即可免费开始集成，支持创建无限导入器及100MB文件上传
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮库
* [WrapPixel](https://www.wrappixel.com/) — 下载基于Angular/React/VueJs/NextJS/NuxtJS构建的高质量免费&付费管理后台模板
* [Utils.fun工具集](https://utils.fun/en) — 基于浏览器算力的全离线日常/开发工具（含水印生成、屏幕录制、编解码、加密解密、代码格式化等），完全免费且不上传任何云端数据
* [IT工具集](it-tools.tech) - 面向开发者及IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具集：Markdown编辑器、代码压缩/美化、二维码生成、Open Graph生成器、Twitter卡片生成器等
* [正则表达式101](https://regex101.com/) — 免费的正则表达式测试调试平台，提供编辑器、测试器及学习文档
* [Kody开发者工具](https://www.kodytools.com/dev-tools) — 100+开发工具（含格式化、压缩、转换器）
* [AdminMart](https://adminmart.com/) — 基于Angular/Bootstrap/React/VueJs/NextJS/NuxtJS构建的高质量免费&付费管理后台模板
* [Glob模式测试器](https://globster.xyz/) — 设计与测试glob模式的网站，附带学习资源
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持远程数据库直接恢复
* [360转换器](https://www.360converter.com/) - 免费转换工具：视频转文字/音频转文字/语音转文字/实时音频转文字/YouTube视频转文字/添加视频字幕，适合短视频处理
* [QRCode最佳实践](https://qrcode.best/) - 13种模板的定制二维码生成器，完全隐私保护，支持追踪像素、项目分类及无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升在线影响力，免费版允许每月手动发布1篇内容
* [PageTools](https://pagetools.co/) - 永久免费的AI工具套件，一键生成网站政策/社交媒体简介/帖子/网页
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，优化慢查询
* [Killer Coda](https://killercoda.com/) - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互式学习平台
* [Axonomy应用](https://axonomy-app.com/) - 免费创建/管理/共享发票工具，每月10张免费额度
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（支持CSV/HTML/JSON/Markdown等格式）

**[⬆️ 返回顶部](#目录)**