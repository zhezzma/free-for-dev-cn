# free-for.dev

如今，开发者和开源作者拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间才能做出明智决策。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能认为有用的内容。我们喜爱所有免费服务，但保持主题相关性很重要。有时界限较为模糊，因此本清单带有主观判断；若未采纳您的贡献，请勿介意。

这份清单汇集了1600多人提交的Pull Request、评审、建议和贡献成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除已变更或停用的服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务化（as-a-Service）产品，不包含自托管软件。入选服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们也会从安全角度评估免费层级——支持SSO，但拒绝将TLS功能限制在付费层级的服务。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [数据分析、事件与统计](#数据分析、事件与统计)
  * [API、数据与机器学习](#API、数据与机器学习)
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
  * [域名服务](#域名服务)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
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
  * [Flutter相关与免Mac编译iOS应用](#Flutter相关与免Mac编译iOS应用)
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

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储空间，每天50,000次读取、20,000次写入和20,000次删除操作
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美至所有区域（中国和澳大利亚除外）的出站流量
    * Cloud Storage - 5GB存储空间，1GB出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储，每周限用60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，10GB存储空间
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
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型（SSD）或磁性存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro、db.t3.micro或db.t4g.micro实例，20GB通用型（SSD）存储，20GB备份存储（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，20,000次Get请求和2,000次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整详细列表 - https://aws.amazon.com/free/

* [Microsoft Azure](https://azure.microsoft.com)
    * [Virtual Machines](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM和1个B1S Windows VM（12个月）
    * [App Service](https://azure.microsoft.com/services/app-service/) - 10个Web、移动或API应用（每天60 CPU分钟）
    * [Functions](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、轻量的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个存储用户/月
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目在Linux、macOS和Windows上无时间限制
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限事务
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，免费支持10,000个文档
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100,000次操作
    * 完整详细列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可作为1个VM或最多4个VM使用
       - 当[判定为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时实例将被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps
    * 数据库 - 2个数据库，每个20GB
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出站流量，x64 VM限速50 Mbps，基于Arm的VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次投递选项，每月1000封邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * 可用性监控 - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS、DDoS防护、CDN及免费SSL、防火墙规则和页面规则、WAF、机器人缓解、免费不限次速率限制（每域名1条规则）、分析、邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求、1000次写入请求、1000次删除请求、1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建、100个自定义域名、集成SSL、无限访问席位、无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器和一个静态站点），提供从构建、部署到扩展应用所需的一切功能，让您无需操心"服务器事务"，可在任意云平台运行
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署及管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，用于优化Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI、OPA集成及分层配置模型。无SSO附加费用，所有功能开放。每月免费使用50次运行额度
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限制部署静态站点、网络服务和环境，每月提供20次包含预览和自动部署的免费任务执行额度

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多支持5名用户的无限量公共及私有Git仓库，提供CI/CD流水线功能  
* [chiselapp.com](https://chiselapp.com/) — 无限量的公共与私有Fossil代码仓库  
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB存储空间和两名协作者  
* [Codeberg](https://codeberg.org/) — 免费开源项目可享无限量公共/私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管，[Codeberg's CI](https://docs.codeberg.org/ci/)实现CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)支持翻译托管。另含软件包/容器托管、项目管理和问题追踪功能  
* [GitGud](https://gitgud.io) — 无限量公共及私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD  
* [GitHub](https://github.com/) — 无限量公共仓库与私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI Copilot  
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限量公共/私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪  
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的代码托管平台，含CI、静态页面、项目页面和问题追踪  
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制  
* [ionicframework.com](https://ionicframework.com/appflow) — Ionic应用开发仓库与工具集，含专属Ionic仓库  
* [NotABug](https://notabug.org) — 基于Git的自由许可证项目协作平台  
* [OSDN](https://osdn.net/) — 面向开源开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库托管  
* [Pagure.io](https://pagure.io) — 基于Git的FOSS许可证项目协作平台  
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git/Mercurial/SVN仓库  
* [pijul.com](https://pijul.com/) — 无限量免费开源的分布式版本控制系统。基于创新的补丁理论，解决git/hg/svn/darcs的诸多痛点  
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源组织及非营利机构免费  
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/Subversion）含50MB存储空间  
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务，支持无限量公共/私有仓库  
* [savannah.gnu.org](https://savannah.gnu.org/) — GNU项目专用的自由软件协作开发管理系统  
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 非GNU项目专用的自由软件协作开发管理系统  

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转化为强大的API，快速开发原型、网站、应用等。每月免费提供500次请求。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测、电子邮件验证等。
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量、性能漂移等问题根因分析。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察AI代理。Maxim是端到端的评估和可观测性平台，帮助团队可靠地发布AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每天免费50次请求，公共仪表盘，开放端点（任何拥有仪表盘链接的人都可以查看提交和响应）。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限制或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
* [Calendarific](https://calendarific.com) - 覆盖200多个国家的企业级公共假期API服务。免费计划每月包含500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月包含100次调用。
* [Clarifai](https://www.clarifai.com) — 自定义人脸识别和检测的图像API。可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用API平台，完整访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 基于Web的免费Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - 从训练到生产的MLOps平台，涵盖实验跟踪、模型生产管理、模型注册和完整数据溯源。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、下单和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API和Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，在应用间同步数据。可创建实时仪表盘和报告，转换和操作值，收集和备份洞察。免费计划限制为一个用户、数据连接、数据源和数据目的地，且需要手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。自动解决验证码并防止被屏蔽。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织为一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件分享。数据访问后自毁。通过浏览器或命令行客户端上传和下载数据。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。类似Postman的界面在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。每月包含10GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），从网页提取数据为CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - 用Python构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可的精简数据库也免费。
* [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型，每个模型10个表。
* [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费计划支持每月10个活跃用户（MAU）并跟踪最多4张人脸。

  * [Disease.sh](https://disease.sh/) — 免费API，提供准确数据用于构建与Covid-19相关的实用应用程序
* [Doczilla](https://www.doczilla.app/) — SaaS API服务，支持直接从HTML/CSS/JS代码生成截图或PDF。免费计划每月可生成250份文档
* [Doppio](https://doppio.sh/) — 托管式API，采用顶尖渲染技术生成并私有化存储PDF和截图。免费计划每月允许生成400份PDF和截图
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页及物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成包含实时文档和用户管理的完整REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20个积分
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月允许50次API调用并访问模板库
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。支持本地免费使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。免费试用包含2个项目，每个项目10张表
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费计划每月250页，用户数不限，支持3个模板
* [file.coffee](https://file.coffee/) - 单文件存储上限15MB（注册用户30MB）的平台
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划每日允许300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) - 基于浏览器的免费工具，即时实现JSON数据的格式化、验证、比较和压缩
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡支付欺诈交易筛查服务。该REST API根据订单输入参数检测所有可能的欺诈特征。免费Micro计划每月处理500笔交易
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置搜索服务。免费API每月可查询500次
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，免费计划每日2,000次请求
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图像和5个模板
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版支持最多5个项目
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，帮助在线产品轻松提供webhooks功能。免费版每日派发100个事件，保留7天历史记录
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器
* [huggingface.co](https://huggingface.co) - 为Pytorch、TensorFlow和JAX构建、训练和部署NLP模型。免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，可自定义调色板和字体
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（通常用于Power BI或Power Query）访问Exact Online、Twinfield等70多个云平台。含数据复制和交换功能。开发者与实施顾问可免费使用特定平台（有数据量限制）
* [ipaddress.sh](https://ipaddress.sh) — 以不同[格式](https://about.ipaddress.sh/)获取公网IP地址的简易服务
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费计划同一IP地址限45次/分钟
* [ipbase.com](https://ipbase.com) - IP地理定位API - 永久免费计划每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API - 开发者永久免费计划每日1,000次请求限制
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API - 允许1,000次免费请求
* [IPLocate](https://www.iplocate.io) — IP地理定位API，免费每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP归属企业查询等功能。IPLocate还提供可下载的IP与国家/ASN映射数据库（CSV或GeoIP兼容的MMDB格式）
* [IP2Location](https://www.ip2location.com) — 免费增值IP地理定位服务。LITE数据库可免费下载，支持在服务器本地查询城市、坐标和ISP信息
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP地理定位API。获取城市、坐标、ISP等数据。免费计划每月5万积分。另提供每月500次免费WHOIS和托管域名查询服务，支持查看域名注册详情及特定IP的托管域名（付费计划解锁更多功能）
* [ipapi](https://ipapi.co/) - Kloudend公司出品的IP地址定位API - 基于AWS构建的可靠地理定位服务，财富500强企业信赖。免注册免费版每月3万次查询（每日1,000次）
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP地址API，具备顶级主机检测能力。免注册免费版提供1,000次查询
* [IPinfo](https://ipinfo.io/) — 快速精准的免费IP地址数据API（每月5万次上限）。提供地理定位、企业关联、运营商、IP范围、域名、滥用联系人等详细数据的API接口。所有付费API均可免费试用
* [IPQuery](https://ipquery.io) — 开发者专属的无速率限制、无定价限制的无限IP API
* [IPTrace](https://iptrace.io) — 极简API，为企业提供可靠的IP地理定位数据，每月免费5万次查询
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频和社交媒体视频的编辑API
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址。免费层无需注册，支持通过CORS直接在浏览器端JS中请求数据。适用于监控客户端与服务器IP变更的服务。请求次数无限制
* [JSON Serve](https://jsonserve.com/) — 免费服务，帮助开发者存储JSON对象并将其作为REST API用于应用程序
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码、头部和响应体
* [konghq.com](https://konghq.com/) — API市场及强大的私有/公有API工具集。免费层的监控、告警和支持功能有限
* [Kreya](https://kreya.app) — 免费gRPC GUI客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC API

  * [LoginLlama](https://loginllama.app) - 一款登录安全API，用于检测欺诈和可疑登录行为并向客户发送通知。每月免费提供1,000次登录检测。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月可验证100次。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。"永久免费"API层级每天允许100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报天气数据。预报基于多个天气模型的机器学习组合以提高准确性。免费计划每天可调用400次。
* [microlink.io](https://microlink.io/) – 将任何网站转化为元标签标准化、精美链接预览、爬取能力或截图服务等数据。每天50次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用工作流程。免费层级每月提供500页处理量。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式playground。免费支持1位编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的简易工具。适用于原型设计/测试/学习。每个项目免费提供2个资源。
* [Mockfly](https://www.mockfly.dev/) — 值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层级每天500次请求。
* [Mocki](https://mocki.io) - 创建与GitHub仓库同步的GraphQL和REST API模拟工具。简易REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，在云端选择要模拟的端点并检查流量，完全免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简易web应用。[开源版本](https://github.com/julien-lafont/Mocky)也可用。
* [Mock N Roll](https://mpcknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。前端开发、QA测试和DevOps团队的理想选择。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的呈现方式。适用于测试基于规则的DNS分流工具如Control D。
* [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价格域名。每日免费查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件并返回JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费支持5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问权限。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者友好PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API轻松将HTML或URL转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费每日流数据库服务。所有操作通过API执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 通过API开发协作平台Postman简化工作流并更快创建更好API。永久免费使用Postman应用。Postman云功能在特定限制下也永久免费。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试REST及GraphQL API
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍易用的AI网络爬取，近乎零学习成本，节省现有工作流85%+时间，比人工研究快4倍且无妥协，包含所有研究任务的REST API端点。每月前1,000积分免费。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者通过趣味挑战（含解决方案！）和交互示例连接数千个API进行开发。
* [RequestBin.com](https://requestbin.com) — 创建免费端点接收HTTP请求。发送到该端点的所有HTTP请求及其有效载荷和头部将被记录，便于观察webhook等服务请求。
* [reqres.in](https://reqres.in) - 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层级每月包含30积分。
* [ROBOHASH](https://robohash.org/) - 从任意文本生成独特酷炫图像的web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API用于爬取。匿名爬取无需担心限制、封锁或验证码。每月前100次成功爬取免费（含JavaScript渲染，联系支持可获更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome爬取API和免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费10,000 API积分。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费计划包含100次云端爬取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。

  * [Shipyard](https://www.shipyardapp.com) — 面向云端的低代码数据编排平台。支持混合使用低代码模板与自定义代码（Python、Node.js、Bash、SQL）。免费开发者计划每月提供10小时运行时，单用户可用——足以自动化多个工作流。
  * [Siterelic](https://siterelic.com/) - Siterelic API提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能。免费计划每月包含100次API请求。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月包含100次成功API调用。
  * [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供节省时间和成本的开发者工具。免费层包含每月300个处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
  * [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件即可通过API即时访问数据，加速应用开发。免费计划包含2个API和每月2,500次调用，无需信用卡。
  * [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，直接在浏览器中将CSV文件转换为结构化JSON数据。
  * [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含SQL格式化与验证器、SQL正则测试器、假数据生成器和交互式数据库沙盒。
  * [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS平台。免费计划提供设计、模拟和文档工具。
  * [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建50张图片。
  * [Svix](https://www.svix.com/) - Webhook即服务。免费版每月可发送50,000条消息。
  * [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，支持研究结果组织。免费层每月1,000次请求，无需信用卡。
  * [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址的位置信息，包括国家、城市、区域等。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
  * [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，包含历史数据和天气监测方案。
  * [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。提供高级日志聚合、可观测性、文档和调试功能。免费层包含所有功能，但每月限250,000次请求。
  * [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率。免费计划无限次API调用，适合开发者和金融应用。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
  * [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐小时/每日预报和天气警报。集成AI模型与ML系统以提升预报精度。免费层每月10,000次API调用。
  * [Webhook Store](https://www.openwebhook.io) - 存储第三方Webhook并在本地调试的工具（类似ngrok）。开源且可自托管。免费个人域名*username*.github.webhook.store，免费公共域名*anything*.webhook.store。
  * [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API。每月2,000次免费调用。
  * [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验追踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储。
  * [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月限25,000个token（约10次PR）。
  * [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API。每月30,000次调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页抓取API，定价透明。每月1,000次免费调用，学生和非营利组织可获额外额度。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮编API，覆盖全球邮政编码数据。每月5,000次免费请求。
  * [Zipcodestack](https://zipcodestack.com) - 免费邮编API与邮政编码验证。每月10,000次免费请求。
  * [Zuplo](https://zuplo.com/) - 免费API管理平台，支持设计、构建和部署API至边缘节点。快速为任意API添加密钥认证、限速、开发者文档和商业化功能。原生支持OpenAPI，可通过Web标准API和Typescript完全编程。免费计划包含10个项目、不限量生产环境、每月100万次请求和10GB出口流量。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT等构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) — 托管GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 易用的Maven、RPM、DEB、PyPi、NPM和RubyGem包托管服务（含免费层）。
  * [repsy.io](https://repsy.io) — 提供1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用。免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包和Docker注册表的私有云仓库，开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费版提供10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作编码。
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的方式来存储、共享和同步敏感数据。
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、历史记录和集成，并提供可自托管的开源版本。
* [cally.com](https://cally.com/) — 为会议寻找最佳时间和日期。操作简单，适用于小型和大型团队。
* [Calendly](https://calendly.com) — 连接和安排会议的工具。免费计划提供每位用户1个日历连接和无限会话，同时提供桌面和移动应用。
* [Discord](https://discord.com/) — 支持公开/私密房间的聊天工具。具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制。
* [Fibo](https://fibo.dev) - 敏捷团队免费使用的实时Scrum扑克工具，支持无限成员估算故事点以加速规划。
* [Telegram](https://telegram.org/) — 为需要快速可靠消息和通话的用户设计。企业用户和小团队可享受大群组、用户名、桌面应用和强大的文件共享功能。
* [DevToolLab](https://devtoollab.com) — 在线开发者工具，免费使用所有基础工具，支持每个工具自动保存一条记录，标准处理速度和社区支持。
* [Dubble](https://dubble.so/) — 免费的分步指南创建工具。支持截图、流程文档和团队协作，同时提供异步屏幕录制功能。
* [Duckly](https://duckly.com/) — 与团队实时交流协作。支持IDE配对编程、终端共享、语音、视频和屏幕共享，小团队免费。
* [Dyte](https://dyte.io) - 最友好的开发者实时音视频SDK，配备协作插件提升效率和参与度。免费套餐包含每月10,000分钟音视频使用时长。
* [evernote.com](https://evernote.com/) — 信息整理工具，支持共享笔记和协作。
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费，最多2GB存储空间。
* [flock.com](https://flock.com) — 团队沟通的更快方式。免费提供无限消息、频道、用户、应用和集成。
* [Gather](https://www.gather.town/) - 更好的在线会议方式。围绕可定制空间设计，让社区互动如现实般轻松。最多支持10名并发用户免费使用。
* [gokanban.io](https://gokanban.io) - 基于语法、无需注册的看板工具，无限制免费使用。
* [flat.social](https://flat.social) - 团队会议和社交活动的交互式可定制空间。会议数量无限制，最多8名并发用户免费。
* [GitDailies](https://gitdailies.com) - GitHub上团队提交和拉取请求活动的每日报告。包含推送可视化、同行认可系统和自定义提醒构建器。免费层支持无限用户、3个仓库和3个提醒配置。
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。公开和私密房间无限制，25人以下团队免费。
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档写作工具。类似Google Docs但专为Markdown设计。私人笔记和模板的协作者数量[有限制](https://hackmd.io/pricing)，但笔记数量无限制。
* [hangouts.google.com](https://hangouts.google.com/) — 所有对话的一站式平台，需谷歌账号，免费使用。
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，最多5名用户免费。
* [helplightning.com](https://www.helplightning.com/) — 通过增强现实提供视频帮助，免费版无分析、加密和支持功能。
* [ideascale.com](https://ideascale.com/) — 客户提交想法并投票的平台，1个社区25名成员免费。
* [Igloo](https://www.igloosoftware.com/) — 内部门户，用于共享文档、博客、日历等，最多10名用户免费。
* [Keybase](https://keybase.io/) — Slack的开源替代品，保障聊天和文件安全，适用于家庭、社区和企业。
* [Google Meet](https://meet.google.com/) — 企业在线视频会议工具，提供安全易用的会议体验。
* [/meet for Slack](https://meetslack.com) - 直接在Slack中使用/meet命令启动Google Meet，支持任意频道、群组或私信，完全免费无限制。
* [Livecycle](https://www.livecycle.io/) — 包容性协作平台，简化跨职能产品团队和开源项目的工作流程。
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预订和锁定会议室、开发环境、服务器等共享资源，免费支持最多2个资源。
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图像上收集反馈的工具。
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享和通行密钥的密码管理器，支持网页、浏览器扩展、移动应用和桌面端。
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具。
* [meet.jit.si](https://meet.jit.si/) — 一键开启视频对话和屏幕共享，完全免费。
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集聊天、内容和应用于一体的数字中心，最多支持50万用户免费使用。
* [Miro](https://miro.com/) - 可扩展、安全、跨设备的企业级协作白板，支持分布式团队，提供免费套餐。
* [nootiz](https://www.nootiz.com/) - 收集和管理网站视觉反馈的首选工具。
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown笔记与协作应用，被描述为一体化工作空间，支持多平台应用和网页访问。
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识、文档和笔记协作维基，免费计划包含所有核心功能，最多50个条目和5GB存储。
* [OnlineInterview.io](https://onlineinterview.io/) - 免费代码面试平台，内置视频聊天、画板和在线代码编辑器，支持浏览器编译运行代码，一键创建远程面试房间。
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简单的团队时间表和工时追踪应用，免费版支持最多10名用户的时间追踪和报告生成。
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub Pull Requests添加视觉评审功能，无需部署网站。每月免费10个页面和100MB总存储空间。
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，通过易用界面和有价值的统计数据帮助更高效管理时间。
* [Pumble](https://pumble.com) - 免费团队聊天应用，永久免费且无用户和消息历史限制。
* [Raindrop.io](https://raindrop.io) - 支持macOS、Windows、Android、iOS和网页的私密安全书签应用，免费提供无限书签和协作功能。

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。云版本仅提供1GB空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器与协作者共享屏幕
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，最多支持10名用户免费使用
* [slack.com](https://slack.com/) — 不限用户数量的免费版本（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页，可追踪上游服务提供商的状态页面
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个面板、不限用户数和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载问题。永久免费个人版
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持看板泳道和完整Scrum实现，集成时间追踪功能。免费支持5用户和3个项目组合
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会改进开发流程。包含完整的远程团队休假管理功能。5人以下小团队免费
* [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费
* [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录
* [TimeCamp](https://www.timecamp.com/) - 不限用户的免费时间追踪软件，轻松集成Jira/Trello/Asana等项目工具
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代方案）- 不限用户数，每工作区10GB存储和10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一站式项目管理应用
* [twist.com](https://twist.com) — 异步友好的团队通讯应用，保持对话条理清晰。提供免费无限量方案，合格团队可享折扣
* [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，支持智能箭头、吸附对齐、便利贴和SVG导出。多人协作编辑模式，另有官方VS Code扩展
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签页/任务管理器，支持文件夹协作的自定义在线桌面
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论想法
* [Tugboat](https://tugboat.qa) - 自动按需预览每个pull request。全员免费，非营利组织额外赠送Nano套餐
* [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建生产级自动化流程和内部应用。免费用户最多创建/加入3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) — 极简视频托管营销平台。单键上传视频，支持录制/管理/分享等功能。免费版每月10个视频/1GB存储/10GB带宽
* [userforge.com](https://userforge.com/) - 互联在线角色/用户故事/情境映射工具，保持设计与开发同步。免费支持3个角色和2名协作者
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度及品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务。不限分享次数，单文件最大5GB
* [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。超过5GB文件采用点对点传输
* [zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费会议限时40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版含1万条历史消息和5GB存储，另有可自托管开源版本
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件。免费体验云功能并实现简单自动化：每月240分钟机器人时长/10次助手运行/100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代品，小团队免费方案含完整消息历史/无限私聊/1个群组对话/1GB存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，永久免费支持10人小团队：不限公私对话/可搜索历史/无限语音通话/语音留言/10个集成/20GB团队存储
* [ruttl.com](https://ruttl.com/) — 全能反馈工具，收集网站/PDF/图片的数字化反馈
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台。免费版含无限频道/剧本/看板/用户和10GB存储
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，直接在网页应用/图片/PDF/设计文件上开展开发协作
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人上限）
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人上限）
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（产品文档/内部知识库/API文档等）。开发者个人免费
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易粘贴站

  * [腾讯实时音视频（Tencent RTC）](https://trtc.io/) — 提供多人音视频通话解决方案，首年每月赠送10,000分钟免费时长。
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴服务，支持客户端加密、多标签粘贴、API接口、语法高亮编辑器等功能。
* [SiteDots](https://sitedots.com/) - 直接在网站页面上收集用户反馈，无需模拟界面或画布操作。免费版功能完整无阉割。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。开发者免费套餐可用，同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。开发者免费个人套餐。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM 系统，内置 GraphQL API。免费版包含无限用户、1000 个目录项、5GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) — 小型项目免费套餐。基于 GraphQL 的 CMS，基础套餐提供 10 万次/月 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的本地或云端资源与数据库内容管理平台，无功能限制。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) — 内容即服务平台，兼具无头 CMS 优势与营销支持。开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言的交付/管理 API 及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS。全托管可扩展 API 的内容管理界面。社区计划为单个用户提供无限 API 调用、文档、自定义类型、资源和多语言支持。开源内容项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) — 结构化内容平台，含开源编辑环境和实时托管数据库。每个项目免费包含无限管理员用户、3 个普通用户、2 个数据集、50 万次 API CDN 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) — API 优先的无头 CMS，为企业级需求设计。开发者计划含 3 用户、500 内容项、3 内置角色、25+5 内容类型、完整 REST API、文档预览生成和 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown/MDX/JSON。基础套餐免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) — 快速灵活的框架，支持任意 CMS/API/数据库构建网站。部署无头网站以提升流量、转化率和收益。
* [Hygraph](https://hygraph.com/) — 小型项目免费套餐。GraphQL 优先 API，助力从传统方案迁移至原生 GraphQL 无头 CMS，实现全渠道内容交付。
* [Squidex](https://squidex.io/) — 小型项目免费套餐。API/GraphQL 优先，开源且基于事件溯源（自动记录每次变更）。
* [InstaWP](https://instawp.com/) — 秒级部署 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) — 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区（免费）版包含管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化支持、2500 个资源管理、图片优化服务、搜索查询、Webhook 及 250GB/月流量。
* [WPJack](https://wpjack.com) — 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制，完全自主掌控。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可以完全访问源代码和无限的 API 与路由，实现广泛集成。免费方案包含三个项目、五个数据表和 Google 插件支持。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程 AI 助手，利用 AI 和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody 提供多种 LLM 选择（包括本地推理），支持多种 IDE 和主流编程语言，并有免费方案。免费方案每月提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
* [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计无缝转换为动态 Flutter 和 React 应用，优化工作流程，助您以前所未有的速度打造卓越的移动和网页体验。
* [Fern](https://buildwithfern.com) - 编写 API 定义并生成 TypeScript、Python、Java、Go 等流行语言的 SDK/客户端库。完全支持 OpenAPI。免费方案最多可为 20 个端点生成代码。
* [Metalama](https://www.postsharp.net/metalama) - 仅支持 C#。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目免费使用，商业友好型免费方案包含三个切面。
* [Supermaven](https://www.supermaven.com/) — Supermaven 是适用于 VSCode、JetBrains 和 Neovim 的快速 AI 代码补全插件。免费方案提供无限行内补全。
* [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习洞察，帮助开发者更快创建更好的软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0 使用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，初始赠送 1200 积分，每月还可获得 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1名用户和1个100MB存储的代码仓库
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器测试服务，免费版仅限3分钟会话（Vista系统下IE9浏览器，分辨率1024×768）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共及私有仓库不限量免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的基础设施即代码自动化审查工具，集成GitHub/Bitbucket/GitLab（含自托管版本）。除常规语言外，还支持分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [CodeBeat](https://codebeat.co) — 多语言支持的自动化代码审查平台，公共仓库永久免费（含Slack和邮件集成）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目及组织私有仓库免费（最多4名协作者），学生和教育机构亦可免费使用
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目及1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版支持无限用户、公共仓库及1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版含200文件/小时、3次审查/小时、50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 根据开发者工作模式优先处理技术债务，可视化团队耦合度等组织因素，开源项目免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪工具，通过精准指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能/可访问性/安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷/安全漏洞/性能及API问题，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及最多30名开发者的私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析工具，开源项目免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，检测安全/性能/反模式/风险缺陷/文档/风格问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — Go语言包代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交代码质量评论服务，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构工具，支持框架迁移/带修复方案的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共及个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器与中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续代码审查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub PR与提交差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目元数据徽章生成服务
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析工具，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — 含代码验证与多设备测试的SEO工具集
* [zoompf.com](https://zoompf.com/) — 网站性能优化与深度分析工具

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的依赖库搜索与更新通知，开源项目免费使用  
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等平台搜索项目名称可用性  
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索引擎，开源项目免费  
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助定位需要改进的代码区域  
* [CodeKeep](https://codekeep.io) - 代码片段版Google Keep。提供代码片段管理、发现与分享功能，内置强大的代码截图工具（含预设模板）和链接特性  

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
  * [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台创建标准化应用环境，内置持续部署自动化和高级可观测性。免费计划支持1个用户和1个应用环境。
  * [Argonaut](https://argonaut.dev/) - 数分钟内在您的云平台上部署应用和基础设施。支持Kubernetes和Lambda环境下的自定义及第三方应用部署。免费层允许5个域名和2个用户无限制应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD。每月200次免费构建，每次10分钟构建时间，支持2名团队成员。开源项目可获得45分钟构建时间、+1并发和无限制团队规模。
  * [buddy.works](https://buddy.works/) — 提供5个免费项目和1个并发运行（每月120次执行）的CI/CD平台
  * [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时间。测试分析免费开发者层包含每月10万次测试执行，开源项目可获得更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
  * [CircleCI](https://circleci.com/) — 包含所有功能的免费托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。多资源类型、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟执行时间免费，无限制协作者，私有项目30个并行任务，开源项目最高8万分钟免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
  * [cirun.io](https://cirun.io) - 公开GitHub仓库免费
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建、1个环境、共享服务器、无限制公开仓库
  * [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建
  * [codeship.com](https://codeship.com/) — 每月100次私有构建、5个私有项目，开源项目无限制
  * [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
  * [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时间）
  * [drone](https://cloud.drone.io/) - Drone Cloud支持开发者在单一平台运行跨架构（包括x86和Arm的32位/64位）的持续交付流水线
  * [LayerCI](https://layerci.com) — 全栈项目CI。提供5GB内存和3核CPU的全栈预览环境。
  * [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限制公开/私有仓库，最高2GB VM规格。
  * [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
  * [Mergify](https://mergify.io) — GitHub工作流自动化和合并队列 — 公开GitHub仓库免费
  * [Make](https://www.make.com/en) — 通过UI连接应用并自动化工作流的工具。支持众多应用和热门API。公开GitHub仓库免费，免费层包含100 Mb存储、1000次操作和15分钟最小间隔。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作、Terraform模块注册表、ChatOps集成、Open Policy Agent持续资源合规、SAML 2.0单点登录，公共工作池访问：每月200分钟
  * [microtica.com](https://microtica.com/) - 提供预制基础设施组件的初创环境，免费在AWS上部署应用并支持生产负载。免费层包含1个环境（在您的AWS账户）、2个Kubernetes服务、每月100分钟构建时间和20次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化端到端测试分割加速CI中的单体仓库。免费计划支持最多30名贡献者，包含15万点数的慷慨额度。
  * [blacksmith](https://www.blacksmith.sh/) - GitHub Actions托管性能运行器，每月提供3000分钟免费时长，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate是面向Terraform、OpenTofu和Terragrunt等基础设施即代码（IaC）工具的编排管理平台。最多2名用户免费使用全部功能。
  * [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化，支持拉取请求驱动的工作流、通过自托管运行器实现项目隔离，以及有序操作的分层运行。最多3名用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户免费版每周有有限的检查点配额。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接通过浏览器测试您的Android和iOS应用。免费套餐包含每月两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，可在iOS和Android上无限制测试。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量无限制，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能回归。所有公共项目免费使用。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。额外付费可获得云监控和CI/CD集成。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商的一小部分成本监控API和应用。采用"监控即代码"工作流和Playwright驱动。为开发者提供慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站可免费使用。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否针对给定域名启用了CORS并识别漏洞。获取可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress测试运行器始终免费开源且无限制。Cypress仪表盘对开源项目免费，最多支持5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外均为开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试功能。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在问题影响客户前发现弱点。免费版支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包含最多4个并行节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供适用于各规模团队和测试成熟度级别的测试平台，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API端到端测试（KTests）和模拟/桩（KMocks）。开源项目免费使用。
* [knapsackpro.com](https://knapsackpro.com) - 在任何CI提供商上通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持最多10分钟测试文件，开源项目可享无限免费套餐。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员无限制，开源项目完全免费，每月7,000张快照。
* [octomind.dev](https://www.octomind.dev/) - 通过AI辅助测试用例生成自动创建、运行和维护Playwright UI测试
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、样式指南或组件库添加视觉测试。团队成员无限制，含演示应用和无限项目，每月5,000张快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI构建的无代码移动应用测试自动化工具。支持原生应用、flutter、react-native、web、ionic等多种应用框架。免费版限iOS和Android各10个测试，但包含付费计划的大部分功能，包括无限次测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、录制含网络和控制台日志的会话。免费版最多创建10条规则。开源项目免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供有用的SEO学习资源和改进任何技术栈网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试（每次最多3分钟）。发现错误？可复制测试的唯一URL向开发人员展示如何复现错误。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）情况。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)
* [TestSpace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和通过GitHub将手动测试实现为代码的框架。[开源项目免费](https://github.com/marketplace/testspace-com)使用，每月450条结果配额。

  * [UseWebhook.com](https://usewebhook.com) - 直接在浏览器中捕获和检查webhook。支持转发到本地主机或从历史记录重放。免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成工具、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量，提供五年免费维护。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络和服务器工具。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过唯一URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中遭入侵的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API垃圾邮件过滤器。免费计划每域名每天支持200次请求。
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式。目前处于测试阶段。
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全性与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)。完整列表通过API提供。
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可对代码、文件、目录或容器进行公证
* [crypteron.com](https://www.crypteron.com/) — 面向云环境、开发者友好的安全平台，防止.NET和Java应用数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web应用，无需复杂工具或编程语言即可分析编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管。
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供全生命周期策略管理，用于创建、部署和管理Open Policy Agent(OPA)授权
* [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表遵循最佳实践及企业策略，防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块及GitHub Actions的依赖项。
* [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django站点的安全漏洞。衍生自Pony Checkup项目。
* [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步至各类云服务商。免费版支持5个用户及基础访问控制。
* [Dotenv](https://dotenv.org/) — 安全快捷地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，避免重要配置丢失。免费支持最多3名团队成员。
* [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复，防止敏感信息泄露至源代码。扫描Git仓库中350+种密钥和敏感文件——个人及25人以下团队免费使用。
* [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API。
* [hostedscan.com](https://hostedscan.com) — 针对Web应用、服务器和网络的在线漏洞扫描器。每月10次免费扫描。
* [Infisical](https://infisical.com/) — 开源平台，集中管理开发者在本地环境至生产环境第三方服务中的密钥。最多支持5名开发者免费使用。
* [Internet.nl](https://internet.nl) — 测试IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE等现代互联网标准
* [keychest.net](https://keychest.net) - SSL证书过期管理及购买平台，集成证书透明度(CT)数据库
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
* [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目不限数量。
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞。
* [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序及配置的安全监控，免费支持25个用户和30天历史记录。
* [openapi.security](https://openapi.security/) - 快速检测任何基于OpenAPI/Swagger的API安全性的免费工具。无需注册。
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人，作为自动化产品安全工程师为Java代码库提交PR以修复漏洞。即将支持更多语言！
* [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目不限数量。
* [qualys.com](https://www.qualys.com/community-edition) — 发现Web应用漏洞，审计OWASP风险
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
* [ringcaptcha.com](https://ringcaptcha.com/) — 将电话号码作为身份验证工具，提供免费方案
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询[点击此处](https://account.seclookup.com/)。
* [snyk.io](https://snyk.io) — 发现并修复开源依赖项的已知安全漏洞。开源项目无限次测试与修复，私有项目每月限200次测试。
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次免费SCA扫描。在发布前检测并修复安全威胁，通过简单高效的方案保护项目。
* [StackHawk](https://www.stackhawk.com/) 在流水线中自动化应用扫描，发现并修复生产环境前的安全漏洞。单个应用支持无限次扫描和环境。
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检查与恶意软件扫描
* [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒及PHP服务器防火墙(WAF)。注册用户免费层包含邮件通知功能。
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等。不限于HTTPS。
* [threatconnect.com](https://threatconnect.com) — 威胁情报平台：专为研究人员、分析师及刚接触网络威胁情报的组织设计。最多3个用户免费。
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划支持每周XSS扫描。
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单个应用每月100万次加解密免费。
* [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具与服务。最多250个用户的应用程序免费。
* [Vulert](https://vulert.com) - Vulert持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费。
* [Escape GraphQL Quickscan](https://escape.tech/) - 一键扫描GraphQL端点安全性。免费无需登录。

  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。我们支持用户通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证、授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费计划包含25,000名MAU、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO。包含完整前端组件。免费额度5000名MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费额度100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费额度10,000名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费额度100名用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证。无限MAU免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK两种方式。免费7500名活跃用户/月，50个租户(含5个SAML/SSO租户)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费额度7500名MAU。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10名用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动端等应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。免费额度100名MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，免费包含3个企业应用和5个个人应用，支持无限用户。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能、无限团队成员、200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，提供实时更新和无代码策略UI。免费额度1000名MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费额度1000名用户和10个SSO连接，使用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费计划包含无限MAU、无限组织和2个SSO/SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费额度10,000名MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟即可上手。可免费自托管，或使用含1万免费MAU的托管SaaS版本。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，可快速启动同时掌控用户体验。免费额度5000名MAU。
* [Warrant](https://warrant.dev/) - 为企业级应用提供托管的授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理，支持多租户(B2B)场景。免费额度2.5万次认证请求，包含OTP、无密码认证、策略等所有安全功能。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可支持任意规模企业客户。免费额度200名用户和1万封事务邮件(带"Powered by PropelAuth"水印)。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，支持认证与授权。免费额度5000名MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证，支持100万MAU。提供邮箱密码登录、社交账号认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 移动应用质量保障的一站式平台。免费版支持：单个应用、数据分析、无限版本与安装、用户反馈收集。
* [Loadly](https://loadly.io) - iOS & Android测试版应用分发服务，提供完全免费的无限下载、高速传输和无限上传。
* [Diawi](https://www.diawi.com) - 直接将iOS & Android应用部署到设备。免费版包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 无线分发iOS & Android应用。免费版支持：无限上传、私有链接（访客2天有效期/注册用户60天）。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费版包含：1个应用项目、3个应用版本、500MB存储空间、每月100次安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费版支持：5个应用、每月50次下载、单文件最大100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费提供100台设备授权和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理工具，免费支持3台设备  
* [Miradore](https://miradore.com) — 设备管理服务，实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理平台。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台，提供免费单服务器方案
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP服务器，免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ云服务。"小狐猴"套餐包含：每月最多100万条消息、20个并发连接、100个队列、10,000条队列消息，支持跨可用区的多节点部署
* [courier.com](https://www.courier.com/) - 统一推送API，支持应用内消息、邮件、聊天、短信等多种渠道，提供模板管理等功能。免费套餐包含每月10,000条消息
* [engagespot.co](https://engagespot.co/) - 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐包含每月10,000条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理服务。永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) - 开发者通知基础设施。通过单次API调用即可发送应用内消息、邮件、短信、Slack和推送通知。免费套餐包含每月10,000条消息
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知功能。免费套餐包含每月10,000条通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) - 开源通知基础设施。统一管理邮件、短信、站内信、应用内消息和推送通知的组件与API。免费套餐包含每月30,000条通知（保留90天）
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持最多100个同时连接和每日200,000条消息
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持最多20个同时连接和每日100,000个事件
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)云服务。覆盖全球及AWS/GCP/Azure平台，永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
* [pubnub.com](https://www.pubnub.com/) - 支持Swift/Kotlin/React的消息服务，每月100万次事务（每次事务可包含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API服务，支持实时数据注入、视频布局、录制等功能，提供托管Web UI或自定义UI组件包。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)包含每月1000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知服务。免费支持最多10,000订阅用户，推送通知数量不限
* [httpSMS](https://httpsms.com) - 将安卓手机作为短信网关收发短信。免费套餐支持每月200条短信收发
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可立即使用的弹性Serverless MQTT代理。永久免费套餐包含每月100万会话分钟数（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。支持API/Webhook集成，免费套餐包含每日50条消息（限1台设备1个应用）
* [SuprSend](https://www.suprsend.com/) - 采用API优先设计的通知基础设施，通过单一API实现交易通知、定时通知和互动通知的多渠道发送。免费套餐每月10,000条通知，支持摘要、批量发送、多通道、用户偏好等多节点工作流

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万行日志存储，保留24小时  
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志，保留7天  
* [logz.io](https://logz.io/) — 每日免费1GB日志存储，保留1天  
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版包含50GB存储，15天保留期和7天日志检索  
* [papertrailapp.com](https://papertrailapp.com/) — 48小时日志检索，7天归档，每月50MB额度  
* [sematext.com](https://sematext.com/logsene) — 每日免费500MB日志，保留7天  
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志，保留7天  
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志，保留3天  
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天  
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目  
* [openobserve.ai](https://openobserve.ai/) — 每月免费200GB日志摄入，保留15天  

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [crowdin.com](https://crowdin.com/) — 开源项目无限量：支持无限项目、无限字符串和协作成员
* [gitlocalize.com](https://gitlocalize.com) - 公私仓库全免费，无使用限制
* [Lecto](https://lecto.ai/) - 含免费层的机器翻译API（30次免费请求/次限1000字符），已集成至Loco Translate WordPress插件
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，支持无限语言和贡献者，提供初创企业与开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，支持无限语言与项目
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，每项目支持10种语言/1000个可翻译资源
* [oneskyapp.com](https://www.oneskyapp.com/) — 限5用户免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串与语言，提供初创优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译量的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言与项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层限1万条字符串源），支持无限量自托管部署
* [Free PO editor](https://pofile.net/free-po-editor) — 全民免费使用
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持网页与移动端本地化。可自备LLM，或通过Lingo托管引擎每月免费使用1万字符

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控(APM)服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，APM代理限制为一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版数据保留时长为1小时
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集成了可用性监控、事件管理、值班调度/告警和状态页面的产品。免费版包含10个监测点，3分钟检查频率和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个可用性监控、无限用户、无限仪表盘、无限告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/合成监控与深度API监控。免费方案包含1个用户、1万次API & 网络检查/1.5千次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与可用性监控。免费版包含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控点，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个可用性监控点，5分钟检查间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助厘清云基础设施支出。每月Google Cloud Platform消费不超过5000美元可免费使用
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供的即时性能洞察。24小时数据保留的免费方案
* [fivenines.io](https://fivenines.io/) — 提供实时仪表盘和告警的Linux服务器监控 — 永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版：3用户、10个仪表盘、100条告警、Prometheus和Graphite指标存储（1万条时间序列，14天保留）、Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务和后台作业。最多20个检查点免费
* [Hydrozen.io](https://hydrozen.io) — 可用性监控与状态页面，免费方案：10个可用性监控、5个心跳监控、1个域名监控和1个状态页
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务和SaaS状态页聚合器 - 永久免费提供20个监控点和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费方案
* [instatus.com](https://instatus.com) - 10秒创建美观的状态页。永久免费且不限订阅用户和团队数量
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费版支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立网速测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL证书监控，最多5个监控点免费
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（最多100页）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控应用和技术栈，支持大规模问题诊断。开发者社区永久免费方案包含：100万条日志事件监控、2台主机的基础设施监控和APM
* [MonitorMonk](https://monitormonk.com) - 极简可用性监控与精美状态页。"永久免费"方案支持HTTPS、关键词、SSL和响应时间监控（10个网站或API端点），提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源的实时指标收集工具。这个不断发展的产品也可以在GitHub找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师构建更完善的软件。从单体架构到无服务器，您可以检测所有组件，然后分析、排查和优化整个软件栈。免费版每月提供100GB数据摄入、1个全权限用户和无限基础用户
* [nixstats.com](https://nixstats.com) - 免费监控1台服务器。支持邮件通知、公开状态页、60秒检查间隔等功能
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站和API的可用性监控、定时任务监控以及状态页服务。免费版包含5个检查点（3分钟间隔），支持Slack、Discord和邮件告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国和美国服务器的DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警与值班管理系统，保障服务持续运行。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包含告警、强大可视化能力和基础报表。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监控点（每日检查）
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（集成Pagerduty、OpsGenie）。免费支持1个团队（一个团队指一个值班组）
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 可用性监控服务，免费支持10万次事件（不限项目和状态页数量）
* [pingbreak.com](https://pingbreak.com/) — 现代可用性监控服务。不限URL数量，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个可用性监控点（10分钟间隔）。支持SSH、HTTP、HTTPS和任意TCP端口监控
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费版包含1个可定制的公开状态页（SSL子域名）。开源项目和非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 永久免费提供10个监控点、6个月历史可用性/日志数据、无限状态页和自定义域名！无限期免费邮件告警，无需信用卡

  * [sematext.com](https://sematext.com/) — 提供24小时指标免费监控，支持无限服务器、10个自定义指标、50万自定义数据点、无限仪表盘和用户等
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL证书监控，每类提供5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 免费2个监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级可用性监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理平台，帮助实践SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试（功能受限）
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、可用性监控、DNS和域名监控。免费监控10台服务器、10个可用性指标和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，支持告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 提供20个5分钟间隔的可用性监测器和可定制状态页（支持商业用途）。通过邮件和Telegram实时无限通知。无需信用卡即可开始使用
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - 稳定可用性监控平台，支持Cron任务、关键词、网站、端口、Ping等多种监测类型。免费提供25个3分钟间隔的监测器，支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 可用性监控：20个免费；Linux和Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪工具。开源项目免费使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月可免费追踪2,000个错误
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控服务。为开源项目提供免费的小型企业订阅方案。
* [Embrace](https://embrace.io/) — 移动应用监控服务。小型团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等功能。每月免费3,000次事件/1名用户。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪工具。兼容开源Sentry SDK。每月免费1,000次事件，或无限量自托管。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费方案包含每月5,000次错误、无限用户、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费方案。每月5,000次错误/1名用户免费，自托管不限量使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。包含Vercel等平台集成，支持通过邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用一站式免费熔断开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告工具。免费方案支持无限次报错。
* [Whitespace](https://whitespace.dev) – 浏览器内一键提交错误报告。个人用户免费方案支持无限次录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 提供具备容错、相关性优化的托管搜索解决方案，附带UI组件库可快速构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。另提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)  
* [bonsai.io](https://bonsai.io/) — 免费1GB内存与1GB存储空间  
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI插件，支持用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费版支持每月1000名活跃用户，不限指令数量  
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，单索引10万文档，不限全文/向量/混合搜索次数，60天数据分析  
* [searchly.com](http://www.searchly.com/) — 免费2个索引与20MB存储空间  
* [easysitesearch.com](https://easysitesearch.com/) — 搜索组件与API服务，支持基于网络爬虫的自动索引。免费版提供不限次搜索（最多50个子页面）  

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量资深专业人士的简历模板，支持克隆、完整编辑和下载，经过ATS优化
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业领袖的免费短期课程，1小时内掌握最新生成式AI工具与实践
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程与数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发路线的免费学习指南
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等领域的免费认证课程
* [MIT开放课程](https://ocw.mit.edu/) - 麻省理工学院公开2500+门课程资料，YouTube频道请访问[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 包含HTML/CSS基础与进阶、JavaScript及SQL的免费在线指南
* [全栈公开课](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL和TypeScript，支持在线自主学习
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费课程，专注计算机科学、工程与数据科学
* [Django教程网](https://django-tutorial.dev) - Django框架入门免费指南，并为用户文章提供dofollow反向链接

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费临时邮箱服务，适用于测试场景
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费发送1000封邮件，免费套餐支持无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可创建无限免费邮件别名
* [Antideo](https://www.antideo.com) — 免费层每小时提供10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每日300封免费额度
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，支持1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 电子报服务，免费支持最多100名订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件及事务性发件服务，每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似联系表单版的Bitly）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每日上限300封
* [EmailOctopus](https://emailoctopus.com) - 免费支持2500名订阅者，每月10000封邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，而是客户端邮件发送工具（无需暴露凭证），免费层包含200次月请求量、2个邮件模板、50KB请求限制和有限联系人历史记录
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于），完全免费的反事务性邮件服务（邮件永不实际投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 多域名临时/一次性邮件生成器，页面刷新即更新邮箱地址，完全免费无付费项目
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮件生成器，支持10个域名且可创建无限地址（含广告），除此之外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件免费转发服务，可创建无限域名邮箱地址（注意：使用.casa/.cf/.click/.email/.fit/.ga/.gdn/.gq/.lat/.loan/.london/.men/.ml/.pl/.rest/.ru/.tk/.top/.work等TLD域名需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD流程中的邮件功能，免费账户永久享有每日15封邮件额度
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [EForw](https://www.eforw.com) – 单域名免费邮件转发服务，支持收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每日创建最多3个临时邮箱（可通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱（邮件3天后自动删除），开源且支持自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC配置，每月20次免费测试
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC配置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月3000封免费额度
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约每月86,400次）
* [Mailchimp](https://mailchimp.com/) — 免费支持500名订阅者，每月1000封邮件
* [Maildroppa](https://maildroppa.com) - 免费支持100名订阅者，无限邮件发送及自动化功能
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封邮件免费额度
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，事务性邮件每月3000封免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮箱测试免费API，提供公共邮箱托管、外发捕获、邮件转Slack/Websocket/Webhook功能（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员限制、每秒2封邮件、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者专用临时邮箱，可通过网页或API即时创建地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，支持网页或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID、1个域名、1个收件箱（所有ID共享）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件→提取数据→发送至服务器）
* [pepipost.com](https://pepipost.com) — 首月3万封免费，之后每日前100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限次DMARC周报
* [Proton Mail](https://proton.me/mail) - 内置端到端加密的免费安全邮箱服务，提供1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，免费层每月10000封，支持异步发送、多SMTP服务器、黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailVerification.com) — 每日免费验证100个邮箱，同时提供DEA检测器、DNS查询、SPF检测器等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封（每日100封）免费额度，支持1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者免费额度
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封邮件免费
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮件别名/转发方案，免费5个别名，无限带宽和收发。教育工作者（学生/研究人员等）完全免费
* [Substack](https://substack.com) — 无限免费电子报服务，仅在收费时开始支付
* [Sweego](https://www.sweego.io/) - 面向开发者的事务性邮件API（欧洲地区），每日500封免费

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱及邮件转发功能  
* [tinyletter.com](https://tinyletter.com/) — 每月免费支持5,000名订阅者  
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单生成器和自动化流程。免费版支持有限数量的潜在客户和自动化操作  
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址服务，支持邮件转发和自动过期功能  
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费提供1GB存储空间和一个日历功能（Tuta也提供[付费方案](https://tuta.com/pricing)）。该平台部分[开源](https://github.com/tutao/tutanota)，支持自托管  
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测，每日免费验证25次  
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务，每月免费验证100次  
* [Zoho](https://www.zoho.com) — 最初作为邮箱服务商，现提供包含免费方案的多项服务：  
   - [邮箱](https://zoho.com/mail) 免费支持5个用户，每人5GB容量，附件限制25MB，支持一个域名  
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业及个人用途  
   - [Sprints](https://zoho.com/sprints) 免费支持5个用户、5个项目及500MB存储  
   - [文档](https://zoho.com/docs) — 免费支持5个用户，上传限制1GB，存储空间5GB，捆绑提供Zoho办公套件（Writer、Sheets和Show）  
   - [项目](https://zoho.com/projects) — 免费支持3个用户、2个项目，附件限制10MB。[Bugtracker](https://zoho.com/bugtracker)适用相同方案  
   - [Connect](https://zoho.com/connect) — 团队协作工具免费支持25个用户，包含3个群组、3个自定义应用、3个看板、3个手册、10个集成以及频道/活动/论坛功能  
   - [会议](https://zoho.com/meeting) — 最多支持3名会议参与者与10名网络研讨会 attendees  
   - [Vault](https://zoho.com/vault) — 个人用户可用的密码管理工具  
   - [Showtime](https://zoho.com/showtime) — 面向远程培训的会议软件，最多支持5名参与者  
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品  
   - [Wiki](https://zoho.com/wiki) — 免费支持3个用户，50MB存储，无限页面，ZIP备份，RSS/Atom订阅，访问控制和自定义CSS  
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理免费支持20个客户/订阅和1个用户，支付托管由Zoho完成，保留最近40条订阅记录  
   - [Checkout](https://zoho.com/checkout) — 产品账单管理支持3个页面和最多50笔支付  
   - [Desk](https://zoho.com/desk) — 客户支持管理工具免费支持3个客服、私有知识库和邮件工单，可集成[Assist](https://zoho.com/assist)实现1个远程技术支持人员和5台无人值守计算机  
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件免费提供100GB存储，无限用户，每个频道100人，支持SSO  
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销  
   - [Forms](https://zoho.com/forms) - 表单生成器  
   - [Sign](https://zoho.com/sign) - 无纸化签名  
   - [Surveys](https://zoho.com/surveys) - 在线调查  
   - [Bookings](https://zoho.com/bookings) - 预约排期  
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证、黑名单监控、邮件测试等功能  

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队规模，提供卓越的技术支持与合理定价。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求额度。
* [Flagsmith](https://flagsmith.com) - 安全发布功能，统一管理Web、移动端和服务器端应用的功能开关。支持托管API服务、私有云部署或本地化部署方案。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，功能开关和实验数量无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试与分析系统，具备Git式版本控制和同步内存本地开关评估。免费版支持5人团队，功能开关与A/B测试数量无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试工具。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展的多区域功能开关管理平台。免费版包含10个开关、2个环境且请求次数不限，永久免费计划包含SDK、分析看板、发布日历和Slack通知等全套功能。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析一体化平台。免费版提供无限席位、功能开关、实验和动态配置，支持每月100万次事件量。
* [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试方案，支持代码化配置与全类型TypeScript SDK。深度集成Next.js和React等框架，提供高性价比的免费方案与扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，分为免费软件、共享软件、试用版或公共领域作品。
* [Everything Fonts](https://everythingfonts.com/) - 提供多款工具：@font-face生成器、单位转换器、字体提示器和字体提交工具。
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权商用免费字体库，精选字体并以易用格式呈现。
* [Google Fonts](https://fonts.google.com/) - 海量免费字体，支持下载或通过Google CDN链接快速部署到网站。
* [FontGet](https://www.fontget.com/) - 分类标签清晰的可下载字体库。
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，个人和商业用途均100%免费。
* [Befonts](https://befonts.com/) - 提供多款个人/商用的独特字体。
* [Font of web](https://fontofweb.com/) - 检测网站使用的所有字体及其应用方式。
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文字快速筛选。
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供开源字体的免费服务。
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，含CJK（中/日/韩）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版包含无限表单和20次提交/月，展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交，提供现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点服务。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能可免费使用。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点服务，免费版每月允许100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单解决方案。无需注册即可免费使用，每月支持500次提交和可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月及邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版包含无限表单数量、250次提交/月及客服团队支持。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制为每个表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点服务。永久免费且无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案提供终身免费套餐。用户可创建1个免费表单并接收无限提交，付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，免费版含1个表单、50次提交、单文件上传和100MB存储空间。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。可通过界面将提交内容转发至邮箱/Slack/Zapier。无需服务器代码，免费版提供无限表单和100次提交/月。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持无限表单和提交，含预制模板、反垃圾功能和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款功能、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码快速创建邮件表单等。个人账户每月免费支持50次提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点服务，完美适配静态网站。免费版支持1个网站和50次提交/月。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单和1000次提交/月。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单和调研工具，含50+专家设计模板。免费账户限制为1个活跃调研、100次回复/调研和8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析平台。永久免费版支持500月活用户、无限回复和事件、多平台集成及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版含50次提交/月、250MB存储、Zapier集成、CSV/JSON导出及Telegram/Slack机器人通知。
* [Survicate](https://survicate.com/) — 一站式多渠道反馈收集工具，支持AI自动分析。免费版提供邮件/网站/应用内/移动端调研、AI问卷生成器和25次回复/月。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务端代码即可免费集成HTML表单。提交内容将通过邮件发送至注册地址。
* [stepFORM.io](https://stepform.io) - 问卷和表单构建工具。免费版支持5个表单、每表单最多3个步骤和50次回复/月。
* [Typeform.com](https://www.typeform.com/) — 为网站嵌入精美设计的表单。免费版限制为每表单10个字段和100次回复/月。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持Webhook通知。免费版会对签署文件添加水印，但允许无限信封和签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的无后端代码联系表单。免费版支持无限表单、无限域名和250次提交/月。
* [WebAsk](https://webask.io) - 调研表单构建工具。免费版含3个调研/账户、100次回复/月和每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限制100次提交。
* [formpost.app](https://formpost.app) - 免费无限次表单转邮件服务。可设置自定义重定向、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。免费版不限制表单数量和功能，每月支持100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF文件，每PDF允许3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动计分和AI功能的在线表单。免费版可收集100次回复，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研工具。使用Qualli AI生成完美问题。免费版支持500月活用户，可创建无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次应用内调研或带回放功能的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈，提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率调研收集反馈。免费版包含1个活跃调研、每调研25次回复和可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复来自Cursor、Windsurf和Copilot等工具的输出来满足企业的质量与合规标准。免费套餐包含每日100次MCP服务器工具调用，以及通过GitHub App每日25次免费自动化Pull Request审查。
* [Keywords AI](https://keywordsai.co) - 最佳LLM监控平台。仅需2行代码即可调用200+个LLM模型。每月10,000次免费请求，平台功能零费用！
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，配备可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估工具、提示词游乐场和数据管理平台。免费计划每周提供最多1,000条私有评估数据行。
* [Findr](https://www.usefindr.com/) - 跨应用统一搜索引擎，可同时检索所有应用数据。智能搜索助手能基于您的信息回答问题。免费计划提供无限统一搜索和每日5次协同查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要自带API密钥即可永久免费使用全平台功能。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业工具套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码和监管功能。专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词与数据集，并调试LLM应用性能问题。为所有LLM生成开放遥测标准追踪数据，提升可观测性且兼容任意观测客户端。免费计划每月提供5万次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，协助AI团队从可靠性、成本效益和性能维度测量、监控及优化LLM应用。通过强大的DSPy组件，促进技术团队与非技术团队协作微调并投产生成式AI产品。免费计划包含全平台功能、每月1k次追踪和1个DSPy优化工作流。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产全生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，助力团队协作调试、分析和迭代LLM应用。永久免费计划包含每月5万次观测和全平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 免注册、无需API密钥的易用免费图像生成AI，提供多种网站/工作流集成方案。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 面向Tableau/Power BI/Looker的AI原生替代方案，快速、简洁且安全。利用大语言模型(LLM)分钟级交付定制商业智能方案。永久免费计划提供1个工作区、5个数据源连接和无限分析功能。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供DeepSeek R1/V3、Llama、Moonshot AI等多种免费AI模型，在自然语言处理领域表现优异，适用于多样化开发需求。注意免费模型存在速率限制，另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型满足进阶需求。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和Font Awesome的CDN服务  
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。顶尖的内容分发服务。cdnjs是由Cloudflare驱动的免费开源CDN，被全球超过11%的网站信任  
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最受欢迎的开源JavaScript库内容分发网络  
* [Stellate](https://stellate.co/) - Stellate是为GraphQL API提供的极速可靠CDN，免费支持两项服务  
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等  
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了jQuery等流行的第三方JavaScript库，可轻松集成到Web应用中  
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书  
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费100万次请求  
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件  
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简易方式，宣称单个站点永久免费  
* [statically.io](https://statically.io/) — 为Git仓库（GitHub/GitLab/Bitbucket）、WordPress资源和图片提供的CDN  
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理服务，确保持续交付。个人开发者免费（无技术支持）  
* [UNPKG](https://unpkg.com/) — npm全库CDN服务  
* [weserv](https://images.weserv.nl/) — 图片缓存与尺寸调整服务，支持实时处理并全球缓存  
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护  
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，含免费DNS托管  
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心节点，支持1个域名和通用SSL证书  

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket），含认证服务。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链。商业用途免费，项目数量无限制。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) — 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析实现自动基础设施的后端框架，无样板代码。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供永久运行的免费实例，PostgreSQL免费版限制2连接、10,000行且无备份。
* [Glitch](https://glitch.com/) — 带代码共享和实时协作功能的免费公开托管。免费计划每月限1,000小时。
* [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，提供快速增长所需支持。免费版含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台。基于任意触发器开发工作流。[免费运行](https://docs.pipedream.com/pricing/)代码化工作流，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费基础账户含1个your-username.pythonanywhere.com域名应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月5万次。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 面向开发者的全球无服务器平台。通过Git部署Docker容器、Web应用和API，含自动扩展、全球边缘网络和服务网格。免费实例可部署至德国法兰克福或美国华盛顿，免费PostgreSQL数据库位于法兰克福/华盛顿/新加坡。512MB内存/2GB存储/0.1CPU。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用PaaS服务，含免费MongoDB共享托管和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI构建微服务、任务和托管数据库。免费版含2个服务/2个定时任务/1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台。免费版含[1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)含3个项目/1GB出口流量/每月300分钟构建时间。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费3个服务，每月5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，创建生产级测试环境。
* [genezio](https://genezio.com/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse Platform的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动和Web后端即服务，免费提供1GB文件存储、每月50,000次推送通知和1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，支持在线编辑器或本地工具免费构建和托管。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — 提供构建和部署企业级数字创新的文档与资源。包含平台、SDK和组件库的完整个人沙箱访问权限。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1000名用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可访问，正式版后将提供慷慨的免费套餐。
* [Firebase](https://firebase.com) — 助力应用开发与运营。免费Spark计划包含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、崩溃报告、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板全集。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能（通常需数周）。
* [hasura.io](https://hasura.io/) — 为现有数据库提供即时GraphQL API，支持Web、移动端及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费套餐包含PostgreSQL、GraphQL(Hasura)、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月10,000封邮件发送，联系人无上限且支持自动预热功能。
* [paraio.com](https://paraio.com) — 具备灵活身份验证、全文搜索和缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2000名订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) — 2000名月活用户免费无限推送通知。iOS/Android统一API。
* [quickblox.com](https://quickblox.com/) — 即时通讯、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含身份验证、数据、文件、邮件API等服务的服务器，并通过管道组合实现数据转换。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 拖拽工具快速构建应用，点击式数据模型定制，Apex代码扩展，强大API集成，企业级安全防护，前沿UI框架支持。免费开发者计划开放完整Lightning平台权限。
* [simperium.com](https://simperium.com/) — 实时跨平台数据同步，结构化数据无限收发存储，每月最多2500名用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供身份验证、实时数据库和对象存储的免费套餐。
* [tyk.io](https://tyk.io/) — 含身份验证、配额、监控和分析的API管理平台。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次触发/每月100次任务免费。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟更新间隔/5个活跃自动化/webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储/256MB实例/每日3千次API请求/1万次推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账号注册超过180天的用户提供每月5美元免费额度，适合托管应用及数据库等。（[免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理后台、内部工具和仪表盘的低代码项目。支持15+种数据库和任意API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理后台和仪表盘的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专为构建业务流程应用设计的低代码平台，提供可定制的移动和Web应用。具有拖拽界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个低代码平台，帮助工程团队和产品经理快速构建内部工具、定制用户旅程、数字体验、自动化流程、管理后台和运营应用，效率提升10倍。
* [lil'bots](https://www.lilbots.io/) — 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费版包含完整API访问权限、AI编程助手和每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持所有用户，每应用0.5 GB存储和1 GB内存。免费版还包含Studio和Studio Pro IDE。
* [outsystems.com](https://www.outsystems.com/) — 面向本地或云的企业级Web开发PaaS，免费"个人环境"提供无限代码和最多1 GB数据库。
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，高度可定制。能用JavaScript和API实现的功能，均可通过ReTool完成。免费版每月支持最多5名用户，不限应用数量和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑和代码扩展功能，集中管理集成、认证、权限和审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发应用。
* [UI Bakery](https://uibakery.io) — 低代码平台，加速定制Web应用开发。支持通过JavaScript、Python和SQL高度定制拖拽式UI。提供云和自托管方案，最多5名用户免费。
* [manubes](https://www.manubes.com) — 强大的无代码云平台，专注于工业生产管理。免费版支持1名用户和每月100万次工作流活动（[另有德语版本](https://www.manubes.de)）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+免费短域名，支持PHP、MySQL、应用安装器、邮件发送且无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用+开发者优先的部署与开发平台，最小化基础设施困扰并加速配置。
* [Bubble](https://bubble.io/) — 可视化编程工具，无需代码即可构建网页和移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) - 专注于Web3前端的去中心化托管平台，提升在线率与安全性，并为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform入门级免费构建并部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管至网络。仅限静态站点，永久免费。每个Google/Microsoft账户限一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) - 开发者桌面应用，用于本地托管站点并实时公开分享。可通过美观的UI、API或CLI自由操作。
* [Fern](https://buildwithfern.com) - 在Fern免费计划中构建并托管基于Markdown的文档站点。甚至可从API定义文件自动生成站点API参考。站点托管于_yoursite_.docs.buildwithfern.com。
* [Free Hosting](https://freehostingnoads.net/) — 免费主机支持PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP邮箱、免费子域名、免费域名托管、DNS区域编辑器、网站统计及更多其他免费主机未提供的功能。
* [Freehostia](https://www.freehostia.com) — 提供免费托管服务，含行业领先的控制面板及50+款应用的1键安装。即时配置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利免费虚拟主机，配备Plesk控制面板，支持PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite，IMAP/POP3/SMTP邮箱，无限带宽，免费子域名，1000 MB存储空间免费并可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署最多100个静态站点，支持自定义域名与SSL，每月100 GB流量，覆盖260+ Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) - 支持SFTP文件上传下载的虚拟主机，提供PHP支持。
* [Neocities](https://neocities.org) — 静态托管，1 GB免费存储空间及200 GB流量。
* [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，含100 GB数据与每月100 GB带宽。
* [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种托管形式（静态托管、容器托管、WordPress等托管应用一键安装）。免费套餐含一个静态或容器托管站点及一个数据库，100GB带宽与300分钟构建时长/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管，自动化DevOps及可扩展架构。开发者与代理商免费使用，不支持自定义域名。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，构建并运行应用与站点，提供免费SSL、全球CDN、私有网络、Git自动部署，Web服务、数据库及静态网页完全免费。
* [SourceForge](https://sourceforge.net/) — 免费查找、创建及发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者静态网页发布工具。无限站点且支持自定义域名。
* [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 单个站点，50个页面，50 MB存储空间，仅限170+预设区块中的基础模块，无自定义字体、网站图标及域名。
* [Vercel](https://vercel.com/) — 构建、部署并托管Web应用，每次`git push`均生成带免费SSL、全球CDN的专属预览URL。特别适合Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的网站构建器，无限网站、70+区块、5套模板，支持自定义CSS、网站图标、SEO及表单。无自定义域名。
* [Qoddi](https://qoddi.com) - 类Heroku的PaaS服务，开发者友好且功能全面。免费套餐支持静态资源、测试环境及开发应用。
* [FreeFlarum](https://freeflarum.com/) - 社区驱动的免费Flarum托管，支持最多250名用户（捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) - 单项目免费托管，容器存活期两周，每项目500 MB内存，SFTP支持1G磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易用云平台，付费服务中包含三个静态站点的免费托管。
* [Serv00.com](https://serv00.com/) — 3GB免费虚拟主机，含每日备份（保留7天）。支持：定时任务、SSH访问、代码仓库（GIT/SVN/Mercurial），兼容MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等。
* [Sevalla](https://sevalla.com/) - 简化应用、数据库及静态网站部署管理的托管平台，限制：1GB站点空间、100GB免费流量、600分钟构建时长，每账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项DNS功能。
* [cloudns.net](https://www.cloudns.net/) — 免费DNS托管，支持1个域名和50条记录。
* [deSEC](https://desec.io) — 注重安全的免费DNS托管服务，支持API。基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务。免费方案支持1个DNS区域（域名）和最多10条记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多支持5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API调用](https://dynv6.com/docs/apis)及多种记录类型管理（如CNAME、MX、SPF、SRV、TXT等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，并提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名。注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) — 免费DNS托管，支持3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS服务，域名数量无限制。
* [nextdns.io](https://nextdns.io) — 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册、无跟踪、无日志、无广告的免费动态DNS服务，域名数量不限。
* [noip](https://www.noip.com/) — 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含IP地址的主机名时返回该IP地址。
* [zilore.com](https://zilore.com/en/dns) — 免费DNS托管，支持5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费DNS托管服务。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份和DNS变更监控，免费支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为提供的免费DNS托管服务。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费DNS托管，最多支持3个域名，提供DNSSEC支持。
* [VolaryDDNS](https://volaryddns.net) — 高性能免费动态DNS服务，无订阅或广告。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名服务
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名服务

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间，150KB以下的Arweave文件上传完全免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB对象存储（类Amazon S3服务）
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费的5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB外传流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Redis 方案。单节点配置为 1 CPU、1GB 内存，PostgreSQL 和 MySQL 还包含 5GB 存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行和每月 1,000 次 API 请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 服务，提供 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端及 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查询、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用，支持 2 名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点配置为 2 CPU、2 GiB 内存、8 GiB 存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器 Redis 服务，免费层每日 10,000 次请求、最大数据库容量 256MB 和 20 个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建，支持从物联网到 AI 的下一代应用开发
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
* [redsmin.com](https://www.redsmin.com/) — Redis 在线实时监控与管理服务，免费监控 1 个 Redis 实例
* [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
* [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费支持最多 25MB、1 个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供 PaaS，但也包含 128MB 至 192MB 的 MySQL、PostgreSQL 或 MongoDB 免费层
* [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活、类电子表格数据库。无限表格、2,000 行、1 个月版本历史，最多支持 25 名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 结合电子表格灵活性、数据库强大功能及与常用商业应用内置集成的工具。免费方案包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源、兼容 MySQL 的分布式 HTAP 关系型数据库。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5,000 万请求单位 (RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验。Turso 提供永久免费入门方案，包含 9 GB 总存储、最多 500 个数据库、最多 3 个位置、每月 10 亿行读取和 SQLite 本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费支持每 5 分钟 3MB 写入、每 5 分钟 30MB 读取和 10,000 基数序列
* [restdb.io](https://restdb.io/) - 快速简单的 NoSQL 云数据库服务。提供模式、关系、自动 REST API（支持类 MongoDB 查询）和高效的多用户管理界面。免费方案支持 3 用户、2,500 条记录和每秒 1 次 API 请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供 5,000 万 RUs 和 10 GiB 存储（价值 15$）。([什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html))
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图大小（5 万节点、17.5 万关系）。
* [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 存储（总计）、1 个项目、10 个分支、无限数据库、始终可用的主分支（5 分钟后自动暂停），非主分支计算每月 20 小时活跃时间（总计）。
* [Prisma Postgres](https://prisma.io/postgres) - 基于 unikernels 并在裸机上运行的超快托管 Postgres，1GB 存储、10 个数据库，与 Prisma ORM 集成。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供 GraphQL API。限制每日 1 MB 数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持通过 HTTP 无连接数据摄取，并可将 SQL 查询发布为托管 HTTP API。免费层无时间限制，10GB 存储 + 每日 1,000 次 API 请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类 SQL 图查询语言和 REST API。免费实例包含 2 vCPU、8GB 内存和 50GB 存储，闲置 1 小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，TerminusDB 是用 Prolog 和 Rust 编写的文档和图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - filess.io 是一个平台，可免费创建两个数据库，每个数据库最多 10 MB，支持以下数据库管理系统：MySQL、MariaDB、MongoDB 和 PostgreSQL。
* [xata.io](https://xata.io) - Xata 是一个无服务器数据库，内置强大的搜索和分析功能。一个 API，多个类型安全的客户端库，并针对开发工作流进行了优化。永久免费层适合业余开发者，包含三个 Xata 单位，单位定义请参阅网站。
* [8base.com](https://www.8base.com/) - 8base 是一个面向 JavaScript 开发者的全栈低代码开发平台，基于 MySQL 和 GraphQL 构建，提供无服务器后端即服务。允许使用 UI 应用构建器快速构建 Web 应用程序并快速扩展，免费层包括：2,500 行、500 存储、1Gb/h 无服务器计算和 5 个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库、始终可用不关闭、1GB 存储（总计）、5,000 万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost生成公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi托管式VPN服务，免费方案支持最多5人参与的无限局域网式网络扩展。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码时提供wss:// URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到公网。无需安装注册，免费子域名无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网。不限节点数（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件路由中转站，免费支持每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，基于开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook到公网或内网（如localhost）。通过隧道获取公共HTTP端点暴露私有网络服务（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 全功能webhook开发测试监控平台。免费版每月10万请求+10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 不限STUN用量+500MB/月TURN带宽，单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端的端到端加密网络，提供桌面/移动/NA客户端，可通过网页配置路由规则和审批私有网络节点。
* [LocalXpose](https://localxpose.io) — 将本地服务器暴露到公网的反向代理。免费版隧道有效期15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地服务到自定义公共URL，并通过访问控制保障安全。免费版支持单个集群5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10个用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间追踪。免费版支持3个项目、20个用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具，免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 实时在线图表工具（流程图/UML/网络图），免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 基于团队的敏捷估算工具，免费支持5个用户，提供Jira集成、不限量视频会议和团队会话
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费版和云存储高级版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单个用户创建不限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版提供5人团队不限量仓库/项目/文档，每月500分钟CI/CD时长和30,000分钟无服务器代码运行时长
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10个用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目、不限用户数和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月提供3个公共看板和每个看板1次调研
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的免费文本转图表工具，支持非正式UML类图/对象图/ER图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比两个GraphQL模式的差异，标记破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — GitHub Issues项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用全功能Bug反馈SDK，免费版支持1个应用和1个成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多维度基础设施交互图表工具，免费版支持不限量私有图表（最多3个查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10个用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费版和高级版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版提供2个看板和2个用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1个用户不限量看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理工具（含Chrome插件），完全免费
* [Kumu.io](https://kumu.io/) — 动态关系图谱工具，免费版支持不限量公开项目，学生可享私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版不限成员，支持10MB文件上传和250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10用户/20自定义字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具，免费版提供3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目且不限成员
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板功能）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版提供100MB存储和5个用户，支持不限量工作区/会议/工时表
* [Ora](https://ora.pm/) - 敏捷任务协作工具，免费版支持3个用户（文件限制10MB）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公开项目+2个私有项目（3个活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台，免费版支持2用户+10客户+500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版不限成员（文件限制5MB，支持1000个问题）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具（计划扑克）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每应用支持10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版支持无限制任务、迭代和工作区且无用户数量限制
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，涵盖看板、Scrum等多种流程。免费版支持无限用户和1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具。免费版包含1个工作区（任务和项目数量不限）、1GB文件存储、1周项目历史记录及每次视频会议最多5名参与者
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾和迭代规划工具，最多15名用户免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供高级付费方案
* [teleretro.com](https://www.teleretro.com/) — 融合破冰活动、动图和表情的趣味回顾工具，免费版包含3次回顾会议且成员数量不限
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版支持每个图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作与个人任务管理工具。免费版功能：5个活跃项目、每个项目5名成员、5MB文件上传、3个筛选器和1周活动历史记录
* [trello.com](https://trello.com/) — 基于看板的项目管理工具，免费版包含无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台集成与众测服务，免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 提供项目、版本控制和问题追踪的产品设计服务，免费版支持无限项目与协作者及3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具，最多3名用户免费且项目数量不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 为开源项目及私有项目提供免费托管版（InCloud，最多3名用户），包含时间追踪和敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — 深度集成GitHub的项目管理方案，公共仓库、开源项目和非营利组织免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，免费版支持最多5名成员和5GB附件
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报表等功能，专为自由职业者设计）和[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间轴）
* [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售及客户支持打造的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。免费提供10GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，提供多种图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费套餐每月含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图片上传、强大编辑、存储和交付服务，支持Ruby、Python、Java、PHP、Objective-C等语言库。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL访问（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集。支持文档、图片、音频、视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 通过网页界面和API使用的免费文件共享存储平台。无文件大小、带宽和下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图片视频托管、处理和流媒体服务。免费套餐每月含250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限次图片图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在保持质量的同时减小文件体积。开源项目免费使用。
* [ImgBB](https://imgbb.com/) — 无限容量的图片托管服务。支持拖拽上传（单图上限32MB），获取直链、BBCode和HTML缩略图。登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 无水印的无限次社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费版支持1MB以内文件。
* [kvstore.io](https://www.kvstore.io/) — 键值存储服务。免费套餐支持100个键（1KB/键）、100次调用/小时。
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速（缓存、图片代码优化、CDN）。免费套餐每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 集中管理云端存储文件的加密、共享、复制和移动。基础版支持无限传输（单文件上限250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供有限免费套餐，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 专为个人项目、黑客马拉松和移动应用设计的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理平台，提供友好界面和API。免费套餐含1GB存储和API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版支持无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队试用基础版功能（用户管理除外）
* [QRME.SH](https://qrme.sh) - 无需登录、无水印、无广告的快速批量二维码生成器。单次最多导出100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表、图形和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持2个用户
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等主流CMS平台。累计处理超70亿图片仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费套餐每月可渲染20分钟视频
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩与尺寸调整API，每月免费500次压缩
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码处理。开源项目、慈善机构和学生通过GitHub学生开发者包免费。商业应用可试用2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN、媒体处理API和前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具包。开发者可免费使用所有功能：文件上传API/UI、图片CDN、自适应传输和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 数分钟即可集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于零知识证明的绝对隐私文件存储服务。注册即享永久免费10GB空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间（支持3台设备），推荐用户可获5GB奖励（90天不活跃失效）。
* [MConverter.eu](https://mconverter.eu/) – 支持[AVIF](https://mconverter.eu/convert/to/avif/)等格式的批量文件转换工具，可从视频提取所有帧画面。每日免费处理10个100MB以内文件（每次批量处理2个）。

  * [DocsParse](https://docsparse.com/) – 基于GPT的AI处理工具，可将PDF、图片转换为JSON、CSV、EXCEL等结构化数据格式。每月免费提供30次额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、Logo...
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪机制。完全免费且不收集用户数据。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板，提供丰富首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑共同维护1个设计系统（不限查看者）
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，也提供付费组件集成方案
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能文件转换工具（含视频/GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线调色板生成与灵感平台
* [coolors](https://coolors.co/) - 免费配色方案生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费CMYK转Pantone等色彩模型的秒级转换工具
* [Branition](https://branition.com/colors) - 专为品牌打造的精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 跨浏览器CSS渐变生成工具（支持RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量素材库
* [figma.com](https://www.figma.com) - 在线协作设计工具，免费版支持2名编辑+3个项目（不限文件与查看者）
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持2名编辑+3个项目（不限查看者）
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版权商用图库（含模特/物权授权）
* [Gradientos](https://www.gradientos.app) - 极简渐变配色工具
* [Icon Horse](https://icon.horse) - 通过API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库（数千图标），支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐素材库，免费版有分辨率限制（需标注来源）
* [landen.co](https://www.landen.co) - 无代码建站平台，免费版支持1个全功能定制网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具（通过URL参数调整尺寸）
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画平台，提供Android/iOS/Web动画工具
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量思维导图工具（全平台实时同步）
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 设计协作工具，免费版支持3用户5项目（全功能开放）
* [mockupmark.com](https://mockupmark.com/create/free) - 电商/社交媒体服装效果图生成工具（40个免费模板）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（波浪/斑点/图案等）
* [movingpencils.com](https://movingpencils.com) - 浏览器端矢量编辑器（完全免费）
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具（实时协作）
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计工具（支持SVG）
* [pexels.com](https://www.pexels.com/) - 免费商用图库（提供关键词搜索API）
* [photopea.com](https://www.photopea.com) - 在线高级设计编辑器（兼容PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) - 专业级在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成器（支持直链引用）
* [Proto.io](https://www.proto.io) - 无代码交互原型工具，免费版含1用户/1项目/5原型/100MB存储
* [resizeappicon.com](https://resizeappicon.com/) - 应用图标尺寸调整工具
* [Rive](https://rive.app) - 多平台动画创作平台（个人用户永久免费）
* [storyset.com](https://storyset.com/) - 定制化免费插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品效果图制作工具（200个免费模板）
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) - 主题效果预览工具（跨组件实时预览）
* [Tailark](https://tailark.com/) - 营销网站专用现代化响应式UI区块库
* [tabler-icons.io](https://tabler-icons.io/) - 1500+可编辑SVG图标库（支持复制粘贴）

  * [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像。URL可直接嵌入网页/应用，支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可完全免费使用且无需署名
* [unsplash.com](https://unsplash.com/) - 商用与非商用的免费图库（无限制使用授权）
* [vectr.com](https://vectr.com/) — 网页端+桌面端的免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持创建3个最多5步的操作指引
* [Webflow](https://webflow.com) - 可视化网站构建工具，含动画功能与托管服务。免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的可视化网站构建工具。非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图工具。免费创建最多4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，可展示设计稿、资源和样式指南。免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形与图像
* [Responsively App](https://responsively.app) - 免费开发工具，助力更快速精准的响应式网页开发
* [SceneLab](https://scenelab.io) - 在线样机图形编辑器，内含持续扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - 将Sketch设计文件预览并转换为Angular/React/Vue等框架代码（开源项目见 https://github.com/xlayers/xlayers）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大且SEO优化的网页构建工具。前5个页面免费，支持无限自定义域名和完整功能
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器。无水印，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 轻松创建含托管的落地页。免费支持一个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/合集/品牌标志库，内置浏览器端矢量编辑工具
* [svgrepo.com](https://www.svgrepo.com/) - 搜索各类矢量库中的商用免费SVG素材
* [haikei.app](https://www.haikei.app/) - 生成独特SVG图形/背景/图案的在线工具，适配设计工作流
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击即可创建独特背景/图案/图形的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台，支持无头静态网站协作创建。免费3个项目，无限协作者，可导出代码
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG/DXF/EPS等矢量格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，含JPG转SVG/JSON转XML等开发者工具
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/JPG/SVG/WEBP格式，无需注册
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 包含4400万+品牌的LOGO API，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费个人/商用Bootstrap/Angular/React/Vue UI套件，含700+组件与教程
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库，设计更优功能更强
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库，减少类名书写
* [Scrollbar.app](https://scrollbar.app) -- 简易网页滚动条设计工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色合集与生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一检索平台，支持SVG导出
* [NextUI](https://nextui.org/) -- 免费现代化React & Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费可编辑的开源图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美开源组件库
* [HyperUI](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年份独特日历图标
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片毛玻璃背景框
* [Webstudio](https://webstudio.is/) -- Webflow开源替代品，免费版支持无限子域名网站
* [Nappy](https://nappy.co/) -- 黑人及棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/代码生成器合集
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存的免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的免费图形设计工具，离线可用
* [Flows](https://flows.sh/) -- 产品引导互动平台，免费支持250月活用户

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常来自非实际应用场景。
* [Landings](https://landings.dev/) - [网页截图] 根据偏好查找最佳着陆页设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供免费设计书籍和UI套件资源。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图，包含桌面端、平板和移动端视图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可搜索的移动应用截图库，节省UI/UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先企业的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师、开发者和产品人员提供精选的UI/UX模式库（iOS和Android）。
* [Page Flows](https://pageflows.com/) - [移动/网页视频及截图] 多款应用的完整流程视频与截图，支持高效搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取最新网页和移动应用UI设计趋势灵感，可按模式和应用筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考库，支持标签和搜索功能。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据与公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，支持地理数据存储、分析、地理编码、路径规划等功能。每月免费额度包括：200万次底图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算及5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等时线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传实现地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示服务与SDK，提供地理空间解决方案
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与可视化SDK。免费矢量瓦片含每周更新和四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap免费地理编码服务，提供全球地址搜索与反向地理编码功能
* [nextbillion.ai](https://nextbillion.ai/) — 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) — 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) — 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) — 通过IP地址定位和识别网站访客
* [Geokeo api](https://geokeo.com) — 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）。
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务。
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享网站，支持300+种PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。开源IDE免费开放，是Android应用开发的最佳选择。支持Windows、Mac、Linux及ChromeOS系统。
* [AndroidIDE](https://m.androidide.com/) — 开源IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台及应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - macOS平台热门可扩展编辑器。免费版提供[强大核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，支持升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转为交互式笔记本集合。免费公共服务。
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI界面。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制。
* [cacher.io](https://www.cacher.io) - 代码片段管理工具，支持标签分类和100+编程语言。
* [Code::Blocks](https://codeblocks.org) — 免费Fortran和C/C++ IDE。开源支持Windows、macOS和Linux。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持编写（代码块、自动补全、单元测试）、理解（全代码库知识）、修复和查找代码。适用于VS Code、JetBrains及在线使用。
* [codiga.io](https://codiga.io/) — 编程辅助工具，支持在IDE中直接搜索、定义和复用代码片段。个人和小型团队免费。
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类、搜索和标签功能。完全免费且无限制。
* [cocalc.com](https://cocalc.com/) — （原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等。
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，为师生适配GitHub Codespaces。
* [codepen.io](https://codepen.io/) — 前端网页开发 playground（HTML/CSS/JavaScript）。
* [codesandbox.io](https://codesandbox.io/) — 支持React、Vue、Angular、Preact等框架的在线开发环境。
* [Components.studio](https://webcomponents.dev/) - 独立开发代码组件，可视化故事测试，并发布至npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持团队IDE。开源社区驱动。Red Hat托管实例：[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟数据。描述需求后API返回JSON格式数据，加速创意落地。
* [GetVM](https://getvm.io) — 即时免费Linux和IDE Chrome侧边栏。免费版每日5个VM额度。
* [GitPod](https://www.gitpod.io) — GitHub项目即时开发环境。免费版每月50小时。
* [ide.goorm.io](https://ide.goorm.io) goormIDE是云端全功能IDE。支持多语言、基于Linux容器的完整终端、端口转发、自定义URL、实时协作聊天、链接分享、Git/Subversion。免费版含1GB内存和10GB存储（5个容器槽位）。
* [JDoodle](https://www.jdoodle.com) — 60+语言在线编译器，免费版REST API每日200次编译额度。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具套件（含[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源团队可免费使用。
* [jsbin.com](https://jsbin.com) — 前端网页开发 playground（支持HTML/CSS/JavaScript/Markdown/Jade/Sass）。
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端网页开发 playground。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 返回模拟JSON数据的REST API端点。源码可本地部署。
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 免费AI驱动的云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量API模拟服务，生成虚假JSON数据。
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据。
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式测试数据，支持后端API模拟。
* [Mocklets](https://mocklets.com) - HTTP模拟API工具，终身免费版支持并行开发和全面测试。
* [Paiza](https://paiza.cloud/en/) — 浏览器内开发Web应用。免费版提供24小时有效服务器（每日4小时运行，2核CPU/2GB内存/1GB存储）。
* [Prepros](https://prepros.io/) - 支持Sass/Less/Stylus/Pug/Haml等预处理器编译，实时浏览器重载，可自定义工具。
* [Replit](https://replit.com/) — 多语言云端编程环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端playground。支持多种语言，运行代码无需注册。提供免费编程课程。
* [stackblitz.com](https://stackblitz.com/) — 全栈应用云端IDE。支持主流NodeJs框架。新建项目短链：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - 多功能高度可定制文本编辑器，适用于编码和文本编辑。
* [Visual Studio Code](https://code.visualstudio.com/) - 微软开发的现代化代码编辑器，优化Web和云端应用开发调试体验。

  * [VSCodium](https://vscodium.com/) - 社区驱动的 Microsoft 编辑器 VSCode 二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动数据，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持内联渲染、会话保存和历史记录，基于开放网络标准，支持 MacOS 和 Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内 Web Components 开发 IDE，提供 58 种模板，支持故事书和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP 在线开发环境
* [WebDB](https://webdb.app) - 免费高效的数据库 IDE，具备服务发现、ERD、数据生成器、AI、NoSQL 结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由 Atom 和 Tree-sitter 团队打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持 70+ 语言的在线编译器（含 Java/Python/C++/JavaScript 等）

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将客户数据从数据仓库同步至CRM、营销和支持工具。免费版支持同步到一个目标应用
* [Avo](https://avo.app/) - 简化的分析发布流程。提供单一事实来源的跟踪方案、类型安全的分析跟踪库、应用内调试器和数据可观测性，确保发布前发现所有数据问题。免费版支持2名工作区成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费版支持最多1万移动应用用户，包含深度链接等服务
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。免费版支持从数据仓库同步10个字段到60多个SaaS平台（如Salesforce、Zendesk或Amplitude）
* [Clicky](https://clicky.com) - 网站分析平台。免费版支持单个网站3000次浏览分析
* [Databox](https://databox.com) - 通过整合其他分析与BI平台提供商业洞察。免费版支持3个用户、仪表板和数据源，包含1100万条历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万次事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台，提供托管服务（非商业用途免费）或自托管选项。作为Google Analytics和Matomo的替代方案，提供易用且注重隐私的网站分析。免费版支持非商业用途，包含无限网站、6个月数据保留和每月10万页面浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费版每月支持2万页面浏览且无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告工具，免费提供个人报销审批流程
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，每月免费支持3000次事件
* [heap.io](https://heap.io) - 自动记录iOS或Web应用中的每个用户操作。免费版支持每月1万次会话
* [Hotjar](https://hotjar.com) - 网站分析与报告。免费版每日支持2000次页面浏览、100个快照（上限300个），可存储3个热图长达365天，支持无限团队成员。还提供应用内和独立调查、带截图的反馈组件。免费版每月可创建3个调查和3个反馈组件，收集20条回复
* [Keen](https://keen.io/) - 自定义数据分析平台，用于数据收集、分析和可视化。每月免费1000次事件
* [Yandex.Datalens](https://datalens.yandex.com/) - Yandex云数据可视化与分析服务。完全免费，无用户数和请求数限制
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万跟踪用户，无限数据历史和席位，支持美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) - REST和GraphQL的API分析工具（每月免费50万次API调用）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费入门版支持1个网站、1个iOS和1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能与分析工具。免费版有限使用，包含100万用户许可
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接数据库、S3和API，即时导入、分析、绘图和共享数百万行数据。永久免费3个工作簿
* [sematext.com](https://sematext.com/cloud/) - 每月免费5万次操作，1天数据保留，无限仪表板、用户等
* [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版每个指标提供5个结果，包含1个月移动应用数据和3个月网站数据
* [StatCounter](https://statcounter.com/) - 网站访问者分析。免费版可分析最近500位访客
* [Statsig](https://statsig.com) - 集分析、功能标记和A/B测试于一体的平台。每月免费100万计量事件
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者计划提供个人开发沙盒许可，可使用Tableau Online最新预发布版本测试所有功能
* [usabilityhub.com](https://usabilityhub.com/) - 在真实用户上测试设计和原型并跟踪访问者。免费版支持1个用户，无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台，支持50万次操作、90天数据保留和30多个一键集成
* [counter.dev](https://counter.dev) - 简洁且注重隐私的网站分析工具。免费或按需捐赠
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费100万跟踪事件。还提供每月250条回复的无限应用内调查
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。提供免费计划，开源项目可获赠个人订阅，并有开源版本
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的工具，记录用户真实使用网站的方式
* [Beampipe.io](https://beampipe.io) - 简洁隐私优先的网站分析工具。免费支持5个域名和每月1万页面浏览
* [Aptabase](https://aptabase.com) - 面向移动和桌面应用的开源隐私友好型简易分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等SDK。每月免费2万次事件
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新跟踪方案并促进无缝协作。可部署到生产环境或为回归测试添加分析覆盖而无需编写代码
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包含可嵌入分析组件和自动化机器人（Slack、Telegram和Webhooks）。免费版每月1万次事件
* [Umami](https://umami.is/) - 简单快速、注重隐私的Google Analytics开源替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私优先的Google Analytics替代方案。无限页面浏览、访客、页面热图和目标跟踪。免费支持3个域名，每个域名600次会话回放
* [AppFit](https://appfit.io) - 全面的分析和产品管理工具，支持跨平台管理分析和产品更新。免费版每月1万次事件，包含产品日志和每周洞察
* [Seline](https://seline.so) - 简洁私密的网站和产品分析工具。无Cookie、轻量级、独立运行。免费版每月3000次事件，提供仪表板、用户旅程、漏斗等全部功能
* [Peasy](https://peasy.so) - 轻量级隐私优先的网站和产品分析工具。免费版每月3000次事件

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，提供用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，提供三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次免费会话
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次免费会话
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次免费会话
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗分析，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次免费API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力业务全球化并开拓新市场（购买力平价）。免费计划包含每月7,500次API调用。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，提供实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月收入低于1万美元免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，为iOS、Android、React Native、Flutter、Unity或网页应用集成移动端应用内订阅。每月收入低于1万美元免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率，支持JSON和XML格式。免费层每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠的汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费层每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和拒付。免费微型计划每月提供500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版本需标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费实现API变现。可连接Stripe、Chargebee等。免费层每月3万次事件。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购与订阅平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购和订阅后端（支持iOS和Android）。每月追踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟增值税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换和汇率数据API。私有用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像  
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐为私有仓库提供1GB存储空间  
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像  
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的实践平台  
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库  
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表  

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant Cloud 云服务。Vagrant box 托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与网站构建平台
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的技术社区  
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件
* [Medium](https://medium.com/) — 深入思考对你重要的事物  
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的想法、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论插件。可用 GitHub issues 实现博客评论、维基页面等功能！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万个网站采用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随喜付费"模式，支持"一个管理员管理多个域名，完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截取、捕捉时间点和视窗尺寸调整。
* [microlink.io](https://microlink.io/) — 将任意网站转化为结构化数据，包括元标签标准化、美观链接预览、爬虫功能和截图服务。每日免费250次请求。
* [ScreenshotAPI.net](https://screenshotapi.net/) — 通过简单API调用生成任何网站的截图。基于Google Cloud构建，具备弹性扩展能力。每月免费100次截图。
* [screenshotlayer.com](https://screenshotlayer.com/) — 可高度定制化的网站快照服务。每月免费100张快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次截图（png/gif/jpg格式），支持整页截取而不仅是首页。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费版每日500页配额，自2017年持续提供免费层。
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名情报API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与免Mac编译iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的理想平台。无需 Mac 设备即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是全托管的移动应用持续集成与交付平台。通过图形化 CI/CD 工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，配备 2.3 GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽工具，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) —— 一款极速x86虚拟机，可在浏览器中运行Linux和Windows 2000
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队且仅提供SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR合规代理到Cookie横幅的一站式同意管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量限制下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理(DSARs)和数据映射。免费版含核心同意管理功能，并为验证过的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台，免费开发者计划支持5台设备、免费云存储，含移动端应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于Twitter或博客展示
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等编辑器的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为社交媒体分享截图
* [Cronhooks](https://cronhooks.io/) - 定时或周期性Webhook调度服务，免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，提供无限次免费任务
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月限5次预订，包含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费支持5个域名及每月20万次请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的规模化端到端管理方案（许可证合规与漏洞检测）
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加Webhook支持（含队列管理/退避重试/日志记录），免费版每日100次投递，保留14天，支持3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN/ISP/地理位置等托管信息，含多款DNS相关工具
* [http2.pro](https://http2.pro) — HTTP/2协议支持测试与客户端检测API
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库加速应用开发
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看照片EXIF数据（含GPS定位信息）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF，免费版每月300份
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言类型安全的模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥与密码的移动端友好工具
* [ray.so](https://ray.so/) - 为代码片段创建美观图片
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具（营销与SEO优化）
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理，免费版含10个源地址和每月10万次跳转
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具，支持GET/POST/PUT/DELETE/HEAD方法及令牌认证，含基础请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量电量/里程表/车门锁控等汽车API
* [snappify](https://snappify.com) - 开发者视觉化工具（从代码片段到技术演示），免费版支持3个同时编辑项目，含5次AI代码解释
* [日出日落时间](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间API
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub订阅与数据分析，免费版功能受限
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具，免费版每份问卷限10题100回复
* [Tiledesk](https://tiledesk.com) - 全渠道对话机器人构建平台（从网站聊天窗到WhatsApp），免费版机器人数量不限
* [Versionfeeds](https://versionfeeds.com) — 定制软件更新RSS订阅源（免费支持前3个订阅）
* [videoinu](https://videoinu.com) — 在线录屏与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具集（编解码与数据处理）

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制  
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关  
* [RemSupp](https://remsupp.com) — 按需技术支持与设备永久访问权限（每日免费2次会话）  
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！  
* [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制  

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏素材
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 在线像素画创作工具，提供大量教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D素材与音频市场，也可用于作品集展示
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建游戏素材
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型与PBR材质纹理库
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的2D、3D、音频和UI素材
* [Poliigon](https://www.poliigon.com/) — 免费/付费纹理（支持多分辨率）、模型、HDRI和笔刷，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的协作式免费音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供经过公共CA签名的`*.localhost.direct`通配符SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [github.com — 开发者开源软件集](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源来开发Microsoft 365解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据评估）
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试与可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的红帽产品免费访问权（包括RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务
* [SimpleBackups.com](https://simplebackups.com/) — 面向服务器和数据库（MySQL/PostgreSQL/MongoDB）的备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直接备份数据库/文件系统/应用到s3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量、现代化、专业易用的免费管理后台模板、HTML主题和UI套件，加速应用开发
* [Web.Dev测评工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名的工具
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码、代码压缩/美化、生成测试数据（JSON/CSV等），拥有友好界面
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供无信用卡免费入门，支持100MB文件导入
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+种可直接使用的按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun](https://utils.fun/en) — 基于浏览器计算的离线工具集（水印生成/屏幕录制/编解码/加密/代码格式化等），完全免费不上传数据
* [IT工具集](it-tools.tech) - 面向开发者和IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的代码工具集（Markdown编辑器/代码压缩美化/二维码生成/Open Graph生成器等）
* [正则101](https://regex101.com/) — 免费的正则表达式测试调试平台，提供编辑器与学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理后台模板（支持Angular/Bootstrap/React/VueJs等）
* [Glob模式测试器](https://globster.xyz/) — 可视化设计测试glob模式的平台
* [SimpleRestore](https://simplerestore.io) - 无需代码即可将MySQL备份恢复到任意远程数据库
* [360转换器](https://www.360converter.com/) - 免费转换工具：视频转文字/音频转文字/实时语音转文字/YouTube视频转文字/添加视频字幕
* [最佳二维码生成器](https://qrcode.best/) - 提供13种模板的隐私保护二维码生成服务，支持追踪像素和团队协作
* [PostPulse](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版每月可手动发布1篇
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集，一键生成网站政策/社交媒体资料/网页内容
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出可视化工具
* [Killer Coda](https://killercoda.com/) - 浏览器内的Linux/Kubernetes/容器/编程/DevOps/网络交互式学习平台
* [Axonomy应用](https://axonomy-app.com/) - 免费发票管理工具（每月10张免费额度）
* [表格格式转换器](https://www.tableformatconverter.com) - 免费转换表格数据格式（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**