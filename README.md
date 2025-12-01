# free-for.dev

如今，开发者和开源作者可以享受众多提供免费层级的服务，但要全面了解这些服务以做出明智选择仍需耗费时间。

这里列出了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本列表特别限定于基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此这里会带有主观判断；如果未采纳您的贡献，请勿介意。

这份清单汇集了1600多人提交的Pull Requests、评审、想法和工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来帮助添加更多服务，或移除那些已变更或终止的条目。

[![追踪Awesome列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本列表仅包含服务型（as-a-Service）产品，不包括自托管软件。入选服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们也会从安全角度评估免费层级——支持SSO的服务可以接受，但限制TLS功能仅限付费层级的服务将不予收录。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
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
  * [设计与UI](#设计与UI)
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
  * [国际手机号验证API/SDK](#国际手机号验证API/SDK)
  * [问题追踪与项目管理](#问题追踪与项目管理)
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
  * [Flutter相关/无Mac开发iOS应用](#Flutter相关/无Mac开发iOS应用)
  * [搜索服务](#搜索服务)
  * [安全与公钥基础设施](#安全与公钥基础设施)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道/WebRTC/WebSocket路由](#隧道/WebRTC/WebSocket路由)
  * [测试工具](#测试工具)
  * [团队协作工具](#团队协作工具)
  * [翻译管理](#翻译管理)
  * [Vagrant相关](#Vagrant相关)
  * [访客会话录制](#访客会话录制)
  * [网站托管](#网站托管)
  * [评论平台](#评论平台)
  * [基于浏览器的硬件模拟(JS实现)](#基于浏览器的硬件模拟(JS实现))
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美到所有区域（不包括中国和澳大利亚）的网络出站流量
    * Cloud Storage - 5GB存储，1GB网络出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储。每周限制60小时
    * Cloud Pub/Sub - 每月10GB消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-seconds内存，180,000 vCPU-seconds计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 一个区域集群免管理费。用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询，每月10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX）。运行在Google Cloud上的在线VSCode
    * 完整详细列表 - https://cloud.google.com/free

* [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个警报
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月10,000次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃管道
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月）。每月100GB出站流量
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、简便、轻量的开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP(VIP)
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预配置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），包含有限交易的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
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
    * 监控 - 5亿个数据采集点，10亿个数据检索点
    * 带宽 - 每月10TB出站流量，x64 VM限速50 Mbps，ARM VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次递送选项，每月1000封邮件
    * 完整详细列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，邮件转发
    * [零信任 & SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66为您提供在任意云上构建、部署和发展应用所需的一切，无需操心"服务器相关事务"
  * [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
  * [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用。所有功能均包含在内。每月免费使用50次运行
  * [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上自动化部署。免费版支持单个开发者无限部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户可享无限量公共及私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限量公共及私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目无限量公共及私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)构建。静态网站托管服务[Codeberg Pages](https://codeberg.page/)。CI/CD托管服务[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管平台[Codeberg Translate](https://translate.codeberg.org/)。包含软件包/容器托管、项目管理和问题追踪
* [GitGud](https://gitgud.io) — 无限量公共及私有仓库，永久免费。基于GitLab & Sapphire构建，不提供CI/CD
* [GitHub](https://github.com/) — 无限量公共仓库及私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限量公共及私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件协作平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发代码库及工具集，同时提供Ionic仓库
* [NotABug](https://notabug.org) — 自由许可证项目的Git代码协作平台
* [OSDN](https://osdn.net/) - 开源开发者免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — FOSS许可证项目的Git代码协作平台
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) - 无限量免费开源分布式版本控制系统。基于补丁理论构建，易学易用，解决git/hg/svn/darcs诸多痛点
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/SVN）含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管，无限量公共及私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API/数据/机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选成美观的表格网格。通过链接保存和分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大的API，快速开发原型、网站、应用等。每月500次请求免费。
  * [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
  * [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
  * [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和根本原因分析，如数据质量和性能漂移。免费支持最多两个模型。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
  * [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的即时服务器、CRUD和有状态模拟、代理和CORS管理，以加速集成和测试。免费计划每天包含50次请求，并提供公共仪表板/端点，任何拥有仪表板URL的人都可以查看提交的请求和响应。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费每月1,000积分，相当于1,000次并发请求。
  * [BrowserCat](https://www.browsercat.com) - 用于自动化、爬虫、AI代理网络访问、图像/PDF生成等的无头浏览器API。免费计划每月1,000次请求。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检查数据等。免费层每月包含100次请求，覆盖所有9个端点。
  * [Calendarific](https://calendarific.com) - 面向200多个国家的企业级公共假期API服务。免费计划每月包含500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月包含100次调用。
  * [Clarifai](https://www.clarifai.com) — 用于自定义人脸识别和检测的图像API。可训练AI模型。免费计划每月1,000次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用程序API平台，完全访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美AZ，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - 用于实验跟踪、模型生产管理、模型注册和完整数据谱系的MLOps平台，涵盖从训练到生产的工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层受限于文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 在应用之间同步的数据集成工具。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限于一个用户、数据连接、数据源和数据目的地。还需要手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1,000次调用免费。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织成一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制1,000次查询。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据在访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需代码即可将Airtable连接到任何应用或API。Postman式界面，用于在Airtable中运行API请求。预建与数十个应用的集成。免费计划每月100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括10 GB存储和每月120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 用于从网页提取数据到CSV或Excel的浏览器扩展（Google Chrome、MS Edge）。免费计划每月500页。
  * [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计与建模工具，免费入门计划包含2个数据库模型，每个模型10张表
* [DeepAR](https://developer.deepar.ai) — 跨平台增强现实人脸滤镜SDK，免费计划支持10名月活跃用户(MAU)和最多4张人脸追踪
* [Deepnote](https://deepnote.com) - 新型数据科学笔记本，兼容Jupyter并支持云端实时协作。免费层包含无限个人项目、基础机型（5GB内存+2vCPU）以及最多3名编辑者的团队协作
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，用于构建相关应用
* [Doczilla](https://www.doczilla.app/) — 通过HTML/CSS/JS代码直接生成截图或PDF的SaaS API，免费计划每月250份文档
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的托管API，用于生成和存储PDF/截图，免费计划每月400次生成
* [drawDB](https://drawdb.app/) — 无需注册的免费开源在线数据库图表编辑器
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端/Web/IoT的开源REST API后端，可连接任意SQL/NoSQL数据库或外部服务，即时生成带实时文档和用户管理的REST API平台
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，模板设计一次即可重复使用，免费层提供20次积分
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API，免费计划每月50次API调用并可使用模板库
* [Efemarai](https://efemarai.com) - ML模型与数据的测试调试平台，可可视化计算图，支持免费本地使用
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具，试用版包含2个项目（各10张表）
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端
* [Export SDK](https://exportsdk.com) - 带拖拽式模板编辑器的PDF生成API，提供SDK和无代码集成，免费计划含250页/月、无限用户和3个模板
* [file.coffee](https://file.coffee/) - 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API，免费计划每日300次请求
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API，免费微型计划每月500次交易
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的服务，免费API每月500次查询
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP地理定位API，免费计划每日2,000次请求
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像，提供REST API和无代码集成，免费层每月50张图像和5个模板
* [Hex](https://hex.tech/) - 协作式数据平台（笔记本/数据应用/知识库），免费社区版支持5个项目
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，免费版每日100个事件+7天历史记录
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器
* [huggingface.co](https://huggingface.co) - 构建/训练/部署Pytorch/TensorFlow/JAX的NLP模型，免费版每月3万输入字符
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告，14天免费试用含50份单页报告（可自定义调色板和字体）
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个云平台（如Exact Online/Twinfield），含数据复制交换功能，开发者免费版有数据量限制
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务
* [ip-api](https://ip-api.com) — IP地理定位API（非商业用途免费），无需API密钥，免费版同IP限45次/分钟
* [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费计划每月150次请求
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费版每日1,000次请求
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，允许1,000次免费请求
* [IPLocate](https://www.iplocate.io) — IP地理定位API（每日1,000次免费请求），含代理/VPN/主机检测、ASN数据、IP关联公司等功能，并提供免费可下载的IP与国家/ASN对应数据库
* [IP2Location](https://www.ip2location.com) — 免费版IP地理定位服务，LITE数据库可免费下载到本地服务器查询城市/坐标/ISP信息
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的IP地理定位API（每月5万免费积分），含城市/坐标/ISP/ASN等数据，另提供每月500次免费WHOIS和域名查询
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的IP定位API，免费层每月3万次查询（每日1,000次）无需注册
* [ipapi.is](https://ipapi.is/) - 开发者打造的IP定位API（含顶级主机检测能力），免注册免费查询1,000次
* [IPinfo](https://ipinfo.io/) — 快速精准的IP数据API（每月5万次免费请求），提供地理位置/公司/运营商/IP范围/域名/滥用联系人等数据，所有付费API可免费试用
* [IPQuery](https://ipquery.io) — 无速率限制和定价的开发者无限IP API
* [IPTrace](https://iptrace.io) — 极简IP地理定位API（每月5万次免费查询）
* [JSON2Video](https://json2video.com) - 通过API或无代码方式自动化生成营销视频的编辑平台
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP（无需注册），支持通过CORS在浏览器端JS直接调用，适合监控IP变更场景，请求次数无限制

  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，并可自定义HTTP状态码、请求头和响应体。
  * [JSONSwiss](https://www.jsonswiss.com/) - 强大的在线JSON查看器、编辑器和验证工具。支持AI智能修复、树状视图、表格视图、12+种编程语言的代码生成，以及JSON转CSV/XML/YAML/Properties等功能。
  * [konghq.com](https://konghq.com/) — API市场及强大的公私API工具。免费版功能受限，如监控、告警和支持服务。
  * [Kreya](https://kreya.app) — 免费gRPC图形客户端，支持调用和测试gRPC API，可通过服务反射导入API。
  * [Lightly](https://www.lightly.ai/) — 通过正确数据提升机器学习模型。免费支持1000个样本的数据集。
  * [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费1000次登录检测。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月100次验证。
  * [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融数据的实时和历史查询。"永久免费"层级每天允许100次API调用。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报数据。预报基于多天气模型的机器学习组合以提高准确性。免费计划每天400次调用。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为元标签标准化、美观链接预览、爬取能力或截图服务等数据。每日50次免费请求。
  * [Mindee](https://developers.mindee.com) – 通过计算机视觉和机器学习识别关键信息的OCR软件和API优先平台，帮助开发者自动化文档处理流程。免费层级每月500页。
  * [Mintlify](https://mintlify.com) — 现代API文档标准。提供美观易维护的UI组件、应用内搜索和交互式演练场。免费支持1名编辑者。
  * [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口执行操作的原型设计/测试/学习工具。免费版每个项目支持2个资源。
  * [Mockfly](https://www.mockfly.dev/) — 可信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层每日500次请求。
  * [Mocki](https://mocki.io) - 创建与GitHub仓库同步的模拟GraphQL和REST API的工具。简单REST API无需注册即可免费开发使用。
  * [Mocko.dev](https://mocko.dev/) — 免费代理您的API，选择云端模拟端点并检查流量。加速开发和集成测试。
  * [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟请求的简单Web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
  * [Mock N Roll](https://mocknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。适合前端开发、QA测试和DevOps团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
  * [microenv.com](https://microenv.com) — 为开发者创建模拟REST API，支持生成代码和Docker容器应用。
  * [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费工具检查多节点出口IP地址，了解IP在不同全球区域和服务中的表现。适用于测试Control D等基于规则的DNS分流工具。
  * [Namekit](https://namekit.app/) - AI驱动的域名发现工具——即时查找可用标准价格域名。免费每日查询。
  * [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每日100次免费查询，文章有24小时延迟。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API——每月100次免费请求。
  * [OCR.Space](https://ocr.space/) — 解析图像和PDF文件返回JSON格式文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
  * [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化免费创建Open API 3定义。
  * [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费5个项目。
  * [Parseur](https://parseur.com) — 每月20页免费：从PDF和邮件提取数据。AI驱动，完整API访问。
  * [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者PDF生成API，提供Stripe风格文档，每月500次免费PDF转换。
  * [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML或URL转为PDF。每月100次免费转换。
  * [PDF-API.io](https://pdf-api.io) - PDF自动化API，包含可视化模板编辑器、HTML转PDF、动态数据集成和PDF渲染API。免费计划含1个模板，每月100次PDF生成。
  * [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行，支持热力图和折线图可视化。
  * [Postman](https://postman.com) — 通过API开发协作平台Postman简化工作流并更快创建更好API。Postman应用永久免费，云功能也有永久免费限制版。
  * [Insomnia](https://insomnia.rest) - 开源API客户端，支持设计和测试REST与GraphQL API
  * [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含5个部署工作流和每月500分钟无服务器计算积分。
  * [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
  * [PromptLoop](https://www.promptloop.com/) - 提供10倍易用性的AI网页爬取工具，接近零学习成本，节省85%+现有工作流时间，比人工研究快4倍且不妥协，包含所有研究任务的REST API端点。每月首1000积分免费。
  * [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。在rapidapi.com上提供每月1万次请求的免费层。
  * [Public-Apis Github仓库](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Reducto](https://reducto.ai) - 将非结构化文档(PDF/XLSX/JPG/PPTX等)转为结构化JSON数据。解析、提取数据并编辑PDF表单。免费层含1.5万积分和按量付费。
  * [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者连接数千个API，通过趣味挑战(含解决方案！)和交互示例进行API开发。
  * [Rendi](https://rendi.dev) - FFmpeg API - 为FFmpeg提供的REST API，无需处理基础设施即可在线运行FFmpeg。免费层包含月度处理配额和4个vCPU资源。

  * [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应您的AJAX请求。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分。
* [ROBOHASH](https://robohash.org/) - 通过任何文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，用于网页抓取。匿名抓取，无需担心限制、封锁或验证码。每月前100次成功抓取免费，包括JavaScript渲染（联系支持可获取更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API及免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度。
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的任何视觉或文本变化及数据提取。免费计划每月支持最多5个URL。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发您的Webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持2个数据源、最多1,000张表和25个用户。
* [Sheetson](https://sheetson.com) - 即时将Google表格转换为RESTful API。提供免费计划，每表包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API可截取网页截图、审计网站、TLS扫描、DNS查询、测试TTFB等。免费计划每月提供100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月包含100次成功API调用。
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供省时省力的开发工具。免费层每月包含300个处理单元，支持浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV文件即可通过API快速访问数据，加速应用开发。免费计划包含2个API和每月2,500次调用，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包括SQL格式化与验证器、SQL正则测试器、假数据生成器及交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 协作设计与记录API的SaaS平台。免费计划提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。免费发送最多50,000条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与快速洞察API，支持研究成果整理。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址的位置信息，包括国家、城市、区域等。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，包含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API的平台。具备高级日志聚合、可观测性、文档和调试功能。免费层包含所有功能，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率。免费计划无限API调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，包含实时状况、逐小时/每日预报及天气警报。集成AI模型与ML系统以提升预报精度。免费层每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API。每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理更快构建优质模型。仅限个人项目的免费层包含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月25,000个token（约10个PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识库算法。
* [wrapapi.com](https://wrapapi.com/) — 将任何网站转化为参数化API。每月30,000次API调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 配备无头浏览器和住宅IP的网页抓取API，定价透明。每月1,000次免费调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，提供全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，用于设计、构建和部署边缘API。分钟级实现API密钥认证、速率限制、开发者文档和商业化。原生支持OpenAPI，完全可编程（Web标准API与TypeScript）。免费计划支持10个项目、不限量生产环境、每月100万次请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位JSON数据结构差异。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的IP地理定位API，适用于商业与非商业用户，支持JSON格式。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT及其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管方案。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录与集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 轻松为会议找到最佳时间，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与预约工具。免费版支持1个日历连接和无限会话，提供桌面端与移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 免费敏捷团队实时故事点估算工具，无限成员参与加速迭代规划
* [Telegram](https://telegram.org/) — 为所有人提供快速可靠的消息与通话服务。大容量群组、用户名系统、桌面应用和强大文件分享功能特别适合商业用户与小团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度与社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 团队实时语音协作平台。集成IDE配对编程、终端共享、视频会议与屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月包含10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与多人协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队沟通工具。免费无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台。通过可定制虚拟空间实现真实社区互动，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册语法式看板工具，功能完整无限制
* [flat.social](https://flat.social) - 可定制互动空间，适用于团队会议与社交活动。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动日报系统。含推送可视化、同伴认可机制和自定义提醒功能，免费版支持3个仓库与3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具，公开/私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作工具。类似Google Docs的Markdown编辑器，免费无限笔记数量，但[私有笔记协作人数](https://hackmd.io/pricing)受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能通讯平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间线与视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助平台，免费版不含分析/加密/支持服务
* [ideascale.com](https://ideascale.com/) — 客户意见征集与投票系统，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 文档/博客/日历共享内网门户，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭/社区/企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的参会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/群组/私信中通过/meet指令发起Google会议，功能完整无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签/多工作区协作。免费版含4个工作区与10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目的高效协作平台
* [Lockitbot](https://www.lockitbot.com/) — Slack内资源预约锁定工具（如会议室/开发环境等），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站/PDF/图片上收集反馈的协作工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名/2FA验证/共享功能的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Visual Debug](https://visualdebug.com) - 提升客户-开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天/内容/应用的数字中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的安全白板协作平台，支持跨设备与企业级应用，含免费套餐
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务/维基/数据库的Markdown协作应用，全平台可用的全能工作空间
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含核心功能/50个项目/5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频面试平台，含绘图板与在线可编译代码编辑器，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁团队时间追踪应用，免费版支持10人时间记录与报告生成
* [Pendulums](https://pendulums.io/) - 直观易用的免费时间管理工具，提供有价值的数据统计
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户与完整消息历史
* [Raindrop.io](https://raindrop.io) - 跨平台安全书签工具，免费无限书签与协作功能

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版提供1GB云存储
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，10人以下团队免费
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页，可追踪上游服务商状态
* [Stickies](https://stickies.app/) - 可视化协作工具，用于头脑风暴、内容整理和笔记。免费版支持3个面板、无限用户和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，永久免费个人计划
* [StreamBackdrops](https://streambackdrops.com) — 免费高清虚拟背景库，适用于Zoom/Teams/Google Meet等视频会议，无需注册
* [talky.io](https://talky.io/) — 免费群组视频聊天，匿名P2P连接，无需插件或注册
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum流程，含时间追踪功能。5用户3项目组合免费
* [Teamplify](https://teamplify.com) - 通过团队分析和智能站会优化开发流程，含完整的远程团队休假管理。5人以下小组免费
* [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成，开源团队免费
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板等端到端加密协作工具，无需登录
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费的时间追踪软件，支持Jira/Trello/Asana等项目管理工具集成
* [Huly](https://huly.io/) - 全能项目管理平台(替代Linear/Jira/Slack/Notion/Motion)，每工作区10GB存储+10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用项目管理应用
* [twist.com](https://twist.com) — 异步友好型团队通讯应用，提供免费无限量计划
* [tldraw.com](https://tldraw.com) — 免费开源白板与图表工具，支持智能箭头/吸附/便签/SVG导出，提供多人协作模式和VS Code扩展
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签/任务管理器，支持文件夹协作的云端桌面
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动化按需预览每个PR，非营利组织可享免费Nano套餐
* [whereby.com](https://whereby.com/) — 一键式免费视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，可用Python/Typescript快速构建多步骤自动化和内部应用，免费用户最多创建3个非高级工作区
* [vadoo.tv](https://vadoo.tv/) — 简易视频托管与营销平台，免费版提供10个视频/1GB存储/10GB月流量
* [userforge.com](https://userforge.com/) - 互联角色画像与用户故事工具，免费支持3个角色和2名协作者
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管服务，免费版支持25个视频和品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件分享服务，支持5GB以内文件无限次分享
* [Wormhole](https://wormhole.app/) - 端到端加密文件分享（24小时内有效），超过5GB文件使用P2P传输
* [zoom.us](https://zoom.us/) — 安全视频会议工具，免费会议限时40分钟
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具，免费版含1万条历史消息和5GB存储，提供开源自托管版本
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件，免费版提供240分钟/月机器人运行时长+10次助手执行+100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费计划包含完整消息历史、无限私聊和1个群组对话+1GB存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，10人以下团队永久免费，含无限对话/可搜索历史/无限语音消息/10个集成/20GB存储
* [ruttl.com](https://ruttl.com/) — 全能数字反馈工具，支持网站/PDF/图片审阅
* [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台，免费版含无限频道/剧本/看板/用户+10GB存储
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，可直接在实时网站/图片/PDF/设计文件上标注
* [Pullflow](https://pullflow.com) — 集成GitHub/Slack/VS Code的AI增强代码评审平台
* [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人）
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人）
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台，开发者个人免费
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面，无需订阅即可发送照片视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易粘贴站

  * [腾讯实时音视频](https://trtc.io/) — Tencent Real-Time Communication (TRTC) 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴服务，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟、画布或变通方案。完全可用的免费版本。

  * [Cushion](https://cushion.so/) - 专为小型分布式高效团队设计的Slack替代方案。免费版支持30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 站点托管服务。开发者免费套餐。同时提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM。内置 GraphQL API。免费版包含无限用户、1000 个目录项、5 GB/月流量和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础套餐包含 10 万次/月 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的本地或云端资源与数据库内容管理平台，无任何功能限制或付费墙。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者计划提供 2 个用户、无限项目（每个项目含 2 个环境）、500 个内容项、2 种语言的交付/管理 API 及自定义元素支持。可按需选择更详细套餐。
* [Prismic](https://www.prismic.io/) — 无头 CMS。具备全托管可扩展 API 的内容管理界面。社区计划为单个用户提供无限 API 调用、文档、自定义类型、资源和多语言支持。开放内容/开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，含开源编辑环境和实时托管数据库。每个项目免费包含：无限项目、无限管理员用户、3 个非管理员用户、2 个数据集、50 万次 API CDN 请求、10GB 流量和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划包含 3 个用户、500 个内容项、3 种内置角色、25+5 种内容类型、全功能 REST API、文档预览生成和 Office Online 编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown、MDX 和 JSON。基础套餐免费提供 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，让使用任何 CMS/API/数据库构建网站重获乐趣。构建并部署能带来更多流量、更高转化率和收益的无头网站！
* [Hygraph](https://hygraph.com/) - 为小型项目提供免费套餐。GraphQL 优先 API，助您从传统方案迁移至 GraphQL 原生的无头 CMS，实现多渠道内容优先交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先，开源且基于事件溯源（自动记录每次变更）。
* [InstaWP](https://instawp.com/) - 数秒内启动 WordPress 站点。免费套餐含 5 个活跃站点、500 MB 空间、48 小时站点有效期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区（免费）版包含：管理 API、可视化编辑器、10 个数据源、自定义字段类型、国际化（无限语言/地区）、资源管理器（最多 2500 个资源）、图片优化服务、搜索查询、Webhook 及每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟内在任意云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务。无时间限制，完全自主掌控。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，通过简单输入即可创建精美商业网站。提供免费自定义域名，无需信用卡。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的API和路由，实现广泛集成。免费方案包含3个项目、5张数据表和1个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody提供多种LLM选择（包括本地推理），支持各类IDE环境，兼容所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动补全（使用Starcoder 16b模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计稿无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源代码整洁。开源项目可免费使用，其商业友好型免费版包含三个功能模块。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的快速AI代码补全插件。免费版提供无限量的行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞察，帮助开发者更快打造更优质的软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。它基于shadcn/ui和Tailwind CSS生成可直接复用的React代码。每次生成至少消耗30积分，新用户初始获得1200积分，每月还可领取200免费积分。


**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1个用户和1个代码仓库（100MB存储空间）
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器交互测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 自动化代码审查（支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript），公共和私有仓库无限免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（包括自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版支持无限用户、公共仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发者工作模式优先处理技术债务，可视化团队协作和系统掌握度等组织因素。开源免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪。通过精准一致的指标在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI的缺陷/安全漏洞/性能/API问题检测工具，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源项目和最多30名开发者的私有仓库免费
* [deepscan.io](https://deepscan.io) — 高级静态分析工具，自动发现JavaScript代码运行时错误，开源免费
* [DeepSource](https://deepsource.io/) — 持续分析源代码变更，发现并修复安全/性能/反模式/风险缺陷/文档/风格等问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库和SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何Go语言包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub拉取请求和提交差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和最多5名协作者的组织免费
* [webceo.com](https://www.webceo.com/) — SEO工具集（含代码验证和多设备测试）
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，提供强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动化网页无障碍测试集成到您的开发流程中。开源和教育用途免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动 DevOps 平台，自动化移动应用的构建、测试和发布流程，实现更快的发布周期。免费版每构建最多 30 分钟构建时间，每月 20 次构建和 1 个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows 平台的持续交付服务，开源项目免费。
  * [LocalOps](https://localops.co/) - 在 30 分钟内在 AWS/GCP/Azure 上部署您的应用。在任何云上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许 1 个用户和 1 个应用环境。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云上。支持在 Kubernetes 和 Lambda 环境上部署自定义和第三方应用。免费层允许 5 个域名和 2 个用户的无限制应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的 CI/CD，支持原生或混合应用。每月 200 次免费构建，每次构建 10 分钟，支持两名团队成员。开源项目获得 45 分钟构建时间，+1 并发和无限制团队规模。
  * [buddy.works](https://buddy.works/) — CI/CD 服务，免费提供五个项目和一次并发运行（每月 120 次执行）。
  * [Buildkite](https://buildkite.com) CI 流水线免费支持 3 个用户和每月 5,000 分钟作业时间。测试分析免费开发者层包括每月 10 万次测试执行，开源项目有更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 数据库 CI/CD 和 DevOps。20 个用户和十个数据库实例以下免费。
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包含所有功能的托管 CI/CD 服务，支持 GitHub、GitLab 和 BitBucket 仓库。多种资源类、Docker、Windows、Mac OS、ARM 执行器、本地运行器、测试分割、Docker 层缓存等高级 CI/CD 功能。每月最多 6,000 分钟执行时间免费，无限协作，私有项目 30 个并行作业，开源项目最多 80,000 分钟免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公共 GitHub 仓库免费。
  * [cirun.io](https://cirun.io) - 公共 GitHub 仓库免费。
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1 次构建，一个环境，共享服务器，无限公共仓库。
  * [codemagic.io](https://codemagic.io/) - 每月 500 分钟免费构建时间。
  * [codeship.com](https://codeship.com/) — 每月 100 次私有构建，五个私有项目，开源项目无限。
  * [deploybot.com](https://www.deploybot.com/) — 1 个仓库和十次部署，开源项目免费。
  * [deployhq.com](https://www.deployhq.com/) — 1 个项目，每日十次部署（每月 30 分钟构建时间）。
  * [drone](https://cloud.drone.io/) - Drone Cloud 使开发者能够在多种架构（包括 x86 和 Arm，32 位和 64 位）上运行持续交付流水线。
  * [LayerCI](https://layerci.com) — 全栈项目的 CI。一个全栈预览环境，5GB 内存和 3 个 CPU。
  * [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月 100 次私有构建。
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建虚拟机，并通过唯一 URL 提供您的应用，无限公共和私有仓库，虚拟机大小最多 2 GB。
  * [styleci.io](https://styleci.io/) — 仅限公共 GitHub 仓库。
  * [Mergify](https://mergify.com) — GitHub 的工作流自动化和合并队列 — 公共 GitHub 仓库免费。
  * [Make](https://www.make.com/en) — 工作流自动化工具，让您通过 UI 连接应用并自动化工作流。支持许多应用和最流行的 API。公共 GitHub 仓库免费，免费层包括 100 Mb、1,000 次操作和 15 分钟的最小间隔。
  * [Shipfox](https://www.shipfox.io/) - 让您的 GitHub Actions 运行速度提升 2 倍，每月免费 3,000 分钟构建时间。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码的管理平台。免费计划功能：IaC 协作、Terraform 模块注册表、ChatOps 集成、Open Policy Agent 的持续资源合规性、SAML 2.0 的 SSO，以及访问公共工作池：每月最多 200 分钟。
  * [microtica.com](https://microtica.com/) - 提供预构建基础设施组件的启动环境，免费在 AWS 上部署应用，并支持生产工作负载。免费层包括 1 个环境（在您的 AWS 账户上）、2 个 Kubernetes 服务、每月 100 分钟构建时间和 20 次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud 通过远程缓存、跨机器任务分发甚至自动化分割 e2e 测试运行等功能加速您的 monorepos 在 CI 上的运行。免费计划支持最多 30 名贡献者，包含慷慨的 150,000 积分。
  * [blacksmith](https://www.blacksmith.sh/) - GitHub Actions 的托管性能运行器，每月提供 3,000 分钟免费时间，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate 是基础设施即代码（IaC）工具（如 Terraform、OpenTofu 和 Terragrunt）的编排和管理平台。最多 2 个用户免费，包括所有功能。
  * [Terrateam](https://terrateam.io) - GitOps 优先的 Terraform 自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，以及分层运行以实现有序操作。最多 3 个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。几乎兼容所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）。开源项目免费使用，个人用户每周可享有限检查点的免费套餐。
* [Appetize](https://appetize.io) — 在云端Android手机/平板模拟器和iPhone/iPad模拟器中直接测试您的Android和iOS应用。免费套餐包含每月30分钟的双并发会话，无应用大小限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让非性能工程专业人员也能评估应用性能和用户体验（UX）。使用自有设备的桌面版完全免费，支持iOS和Android无限次测试。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 持续基准测试工具套件，用于捕捉CI性能退化。所有公开项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用自动化测试工具，无需编码即可轻松上手。本地计算机可无限次免费运行测试，额外付费可享云端监控和CI/CD集成。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控方案。以传统供应商零头价格监控API和应用，采用"监控即代码"工作流和Playwright技术。开发者专享慷慨免费层。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展程序，检测网站是否符合50+项SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员专用工具，免费检测指定域名的API是否启用CORS并识别漏洞，提供可操作建议。
* [cypress.io](https://www.cypress.io/) - 浏览器环境快速、简便、可靠的测试方案。Cypress测试运行器始终免费开源且无限制，Cypress仪表盘对最多5用户的开源项目免费。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外完全开源，每月免费生成5次含自愈脚本、邮件和视觉测试的测试用例。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器操作步骤生成脚本，免费版功能受限。
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — 混沌工程工具，安全注入系统故障以暴露隐患。免费版支持对最多5台主机/容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试服务，免费套餐含4并发节点/10次网格启动/4,000测试分钟每月。
* [katalon.com](https://katalon.com) - 全阶段测试成熟度团队适用的测试平台，包含Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - 开发者功能测试工具包，通过记录API调用生成E2E测试（KTests）及模拟/桩程序（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速CI测试。免费计划支持10分钟测试文件，开源项目享无限量套餐。
* [lambdatest.com](https://www.lambdatest.com/) — Selenium和Cypress上的手动、视觉、截图及自动化浏览器测试，[开源免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费套餐每月模拟50并发用户60分钟。
* [lost-pixel.com](https://lost-pixel.com) - Storybook/Ladle/Histoire组件及Web应用的全方位视觉回归测试。无限团队成员，开源完全免费，7,000次快照/月。
* [octomind.dev](https://www.octomind.dev/) - AI辅助生成、运行和维护Playwright UI测试用例。
* [pagegym.com](https://pagegym.com) - 加载行为与页面速度分析优化工具。免费版每日10次测试、每周5次实验、15GB月度数据上限。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、样式指南或组件库添加视觉测试。无限团队成员、演示应用和项目，5,000次快照/月。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。免费层含核心功能、500MB附件空间及最多3用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试工具，支持原生应用/Flutter/React-Native/Web/Ionic等框架。免费版限10次iOS和10次Android测试，但包含付费版大部分功能（含无限次测试运行）。
* [Requestly](https://requestly.com/) 开源Chrome扩展，可拦截/重定向/模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)功能。免费版可创建10条规则，开源项目免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO检测工具。每日10次网站爬取，提供SEO学习资源和改进建议（不限技术栈）。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 跨浏览器测试版CodePen。无需注册即可在Chrome上无限次运行测试（每次限3分钟），通过唯一URL分享复现步骤。
* [SSR (服务端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉对比服务端渲染版与常规版页面，检测任意URL的SSR状态。
* [TestCollab](https://testcollab.com) - 易用测试管理软件，免费版含Jira集成、无限项目、CSV/XLSx测试用例导入、时间追踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器与设备测试，[开源免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育机构及初创小团队可申请基础免费项目之外的折扣或免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook。支持转发至本地主机或历史记录回放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，通过集成工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量且提供五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议。
  * [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中遭入侵的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
  * [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式，目前处于测试阶段
  * [cloudsploit.com](https://cloudsploit.com/) — Amazon Web Services (AWS) 安全性与合规性审计及监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可对代码、文件、目录或容器进行公证
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，防止.NET和Java应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 简洁直观的Web应用，无需复杂工具或编程语言即可分析/编解码数据。如同密码学领域的瑞士军刀。所有功能免费无限制使用，支持开源自托管
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过确保Kubernetes清单和Helm图表符合最佳实践及组织策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions的依赖项
  * [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django站点的安全漏洞。衍生自Pony Checkup项目
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到多种云服务商。免费版支持5个用户及基础访问控制
  * [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件。不再通过Slack或邮件等不安全渠道共享.env文件，且永不丢失重要配置。免费支持最多3名团队成员
  * [GitGuardian](https://www.gitguardian.com) — 通过自动化密钥检测与修复，防止敏感信息进入源代码。扫描Git仓库中350+种密钥和敏感文件——个人及25人以下团队免费使用
  * [Have I been pwned?](https://haveibeenpwned.com) — 获取数据泄露信息的REST API
  * [hostedscan.com](https://hostedscan.com) — Web应用、服务器及网络的在线漏洞扫描器。每月10次免费扫描
  * [Infisical](https://infisical.com/) — 开源平台，管理从本地开发到生产环境第三方服务的团队密钥。最多5名开发者免费
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准支持度：IPv6、DNSSEC、HTTPS、DMARC、STARTTLS和DANE
  * [keychest.net](https://keychest.net) - SSL证书到期管理及购买，集成证书透明度数据库
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - 监控Java、JavaScript、.NET、Scala、Ruby和NodeJS项目的依赖项安全漏洞。1个私有项目免费，开源项目数量不限
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
  * [opswat.com](https://www.opswat.com/) — 计算机、设备、应用程序及配置的安全监控，免费支持25个用户和30天历史数据
  * [openapi.security](https://openapi.security/) - 快速检测OpenAPI/Swagger接口安全性的免费工具，无需注册
  * [pixee.ai](https://pixee.ai) - 免费GitHub机器人，自动提交PR修复Java代码库漏洞（即将支持其他语言）
  * [pyup.io](https://pyup.io) — 监控Python依赖项的安全漏洞并自动更新。1个私有项目免费，开源项目数量不限
  * [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，审计OWASP风险
  * [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
  * [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息，提升威胁检测与响应能力。免费获取5万次查询额度[点此注册](https://account.seclookup.com/)
  * [snyk.io](https://snyk.io) — 发现并修复开源依赖项中的已知漏洞。开源项目无限次测试与修复，私有项目每月限200次测试
  * [Socket](https://socket.dev) — 为个人开发者、小团队及开源项目提供的免费供应链安全方案。包含应用和防火墙CLI工具，防护70+种供应链风险指标
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置的深度分析
  * [SOOS](https://soos.io) - 开源项目无限次SCA扫描。在发布前检测并修复安全威胁，提供简单高效的防护方案
  * [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化应用扫描，确保生产环境前的漏洞修复。单个应用支持无限次扫描和环境
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
  * [Protectumus](https://protectumus.com) - 免费网站安全检查、站点杀毒及PHP服务器防火墙(WAF)。注册用户可获取邮件通知
  * [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务的安全配置、证书链等，不限于HTTPS
  * [threatconnect.com](https://threatconnect.com) — 威胁情报平台，适合刚接触网络威胁情报的研究员、分析师及组织。免费支持3个用户
  * [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描。免费计划每周可进行XSS检测
  * [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。免费支持1个应用和每月100万次加密
  * [Virgil Security](https://virgilsecurity.com/) — 为数字解决方案提供端到端加密、数据库保护、物联网安全等工具与服务。免费支持最多250个用户的应用
  * [Vulert](https://vulert.com) - 持续监控开源依赖项的新漏洞并推荐修复方案，无需安装或访问代码库。开源项目免费使用

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个公开GitHub仓库、代码片段、问题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户(MAU)和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。提供前后端SDK。免费支持1000MAU和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含25,000MAU、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速实现无密码登录、OTP、2FA和SSO。包含完整前端组件。免费支持5000MAU。
* [Authress](https://authress.io/) - 认证登录与访问控制，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度访问控制，免费支持100月活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新老应用添加优先使用通行密钥(passkey)的认证方案。无限MAU免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费额度包含7,500月活用户和50个租户(其中5个支持SAML/SSO)。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)。免费支持10用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费提供7,500MAU起步套餐。
* [logintc.com](https://www.logintc.com/) - 通过推送通知实现2FA，免费支持10用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web、移动等应用实现无密码认证，只需几分钟即可完成集成。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权服务。免费支持100MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)，单点登录身份提供商，支持3个公司应用和5个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费的开发者账户包含所有安全功能，支持无限团队成员、200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC、ABAC和ReBAC，适用于需要实时更新的可扩展微服务，提供无代码策略UI。免费层支持1000MAU。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费层支持1000用户和10个SSO连接，使用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业SSO。免费方案包含无限MAU、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费方案包含10,000MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开箱即用的开源认证方案。最开发者友好的解决方案，5分钟即可上手。可免费自托管，也提供含10k免费MAU的SaaS托管版。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，可快速启动同时保持对用户体验的控制。免费支持5000MAU。
* [Warrant](https://warrant.dev/) - 为企业应用提供的托管式授权与访问控制服务。免费层包含100万次月度API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费支持25,000次认证请求，包含所有安全功能(OTP、无密码认证、策略等功能无付费墙)。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可实现面向任意规模企业的销售功能。免费支持200用户和10k封事务邮件(含"Powered by PropelAuth"水印)。
* [Logto](https://logto.io/) - 为产品开发、保护和管理用户身份，同时支持认证与授权。免费支持5,000MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。提供邮箱+密码、社交登录、Magic Auth、MFA等多种方式。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：一个应用、分析功能、无限版本与安装、以及反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、十次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费方案包含：一个应用项目、三个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：五个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM DevOps方案。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。免费支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持跨多可用区部署节点
  * [courier.com](https://www.courier.com/) — 统一API集成推送、应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐包含每月10,000条消息
  * [Engage](https://engage.so/) - 面向SaaS的一站式客户互动与自动化工具（邮件、推送、短信、产品导览、横幅通知等）。每月免费支持1,000名活跃用户
  * [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐包含每月10,000条消息
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备接入云原生物联网消息代理。永久免费连接100台设备（无需信用卡）
  * [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用实现应用内消息、邮件、短信、Slack和推送等多渠道发送。免费套餐包含每月10,000条消息
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含每月10,000条通知+100条短信和自动语音呼叫
  * [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件、短信、站内信、应用内消息和推送的组件与API。免费套餐含每月30,000条通知（保留90天）
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和每日200,000条消息
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和每日100,000次事件
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure云平台。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单次事务可含多条消息）
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API服务，支持实时数据注入、视频布局、录制，提供全功能托管Web UI或自定义UI套件。[开发者免费套餐](https://apiservice.eyeson.com/api-pricing)含每月1,000分钟会议时长
  * [webpushr](https://www.webpushr.com/) - 网页推送通知 - 免费支持10,000订阅用户，推送数量无限制，支持浏览器内消息
  * [httpSMS](https://httpsms.com) - 将Android手机作为短信网关收发短信。每月免费收发200条消息
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全Serverless MQTT代理。永久免费套餐含每月100万会话分钟数（无需信用卡）
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API或Webhook轻松集成，完整掌控提醒设置。免费套餐：每日50条消息至1台设备1个应用
  * [SuprSend](https://www.suprsend.com/) - 采用API优先的智能通知基础设施，通过单一API发送事务性、定时任务和互动类多通道通知。免费套餐含每月10,000条通知，支持摘要、批量、多渠道、偏好设置、租户、广播等流程节点
  * [SMSGate](https://sms-gate.app) - Android™短信网关服务，通过云端路由收发短信。完全免费的云服务（建议每日超10,000条用量时通知以保障服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB日志存储，保留7天  
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB日志存储，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储空间，15天存储保留期和7天日志检索
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB日志存储，保留7天
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志条目，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB日志，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限量：无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费且无限制
* [Lecto](https://lecto.ai/) - 提供免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成。
* [lingohub.com](https://lingohub.com/) — 最多3名用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，1名用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（包含2名用户、500个键和无限项目）。
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5名用户的有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，1名用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费，免费层支持10,000条字符串源，无限自托管本地部署。
* [Free PO editor](https://pofile.net/free-po-editor) — 面向所有人免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev管理的本地化引擎每月免费使用10,000词。

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 24小时指标免费，应用性能管理代理限一个Java、一个.NET、一个PHP和一个Node.js
* [appneta.com](https://www.appneta.com/) — 免费版数据保留1小时
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。团队和个人免费计划
* [Better Stack](https://betterstack.com/better-uptime) - 将正常运行时间监控、事件管理、值班调度/警报和状态页面整合为一款产品。免费计划包含10个监控器，检查频率为3分钟
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器，不限用户数、仪表板和警报规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控及深度API监控。免费计划含1个用户、1万次API及网络检查/1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：不限按需扫描、用户数和存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控器，推荐他人注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack警报
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助厘清云基础设施开支。每月Google Cloud Platform消费不超过5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。24小时数据保留免费
* [fivenines.io](https://fivenines.io/) — 带实时仪表板和警报的Linux服务器监控 — 永久免费监控最多5台服务器，60秒间隔。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版：3用户、10个仪表板、100条警报，Prometheus和Graphite指标存储（1万序列，14天保留），Loki日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务和后台任务。最多20个检查免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页面聚合器 - 永久免费20个监控器和2个通知渠道（Slack和Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表板，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅数和团队数
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线死链检测工具，小型网站（100页内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控应用和堆栈，支持大规模问题诊断。开发者社区永久免费计划包含100万日志事件监控、2台主机的基础设施监控和APM
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与美观状态页。永久免费计划支持HTTPS、关键词、SSL和响应时间监控10个网站或API端点，提供2个仪表板/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标收集工具。发展迅速，GitHub上也可找到！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台帮助工程师打造更完美软件。从单体到无服务器，可检测一切并分析、排查和优化整个软件堆栈。免费层每月100GB数据摄入、1个全权限用户和不限基础用户
* [nixstats.com](https://nixstats.com) - 免费监控1台服务器。支持邮件通知、公开状态页、60秒间隔等
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API正常运行时间监控、定时任务监控及状态页。前5个检查（3分钟间隔）免费。免费层通过Slack、Discord和邮件发送警报
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中国和美国服务器的DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 强大警报与值班管理，保障服务永续运行。最多5用户免费
* [paessler.com](https://www.paessler.com/) — 强大基础设施和网络监控方案，含警报、强大可视化能力和基础报告。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变更，免费支持6个监控器每日检查
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（集成Pagerduty、OpsGenie）。免费支持1个团队（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更和正常运行时间。免费计划含5个URL、每日核心网页指标监控、10个HTML/SEO变更监控器、167国联盟链接监控和邮件警报
* [pagertree.com](https://pagertree.com/) - 简洁的警报与值班管理界面。最多5用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控永久免费支持10万事件，不限项目和状态页
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。不限URL检测，通过Discord、Slack或邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任意TCP端口
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可自定义公开状态页（SSL子域名）。开源项目和非营利组织免费提供专业版
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月历史正常运行时间/日志、不限状态页和自定义域名！永久免费且不限邮件警报。无需信用卡

  * [sematext.com](https://sematext.com/) — 24小时指标免费，支持无限服务器、10个自定义指标、50万自定义数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标和日志），无需复杂配置。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站和Cron任务监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10个用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS和域名监控。免费监控10台服务器、10个运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警和指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监测器（5分钟间隔）和可定制状态页（含商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理和响应协调平台。最多5个用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供多种监测类型：Cron任务、关键词、网站、端口、Ping。25个运行时间检查（3分钟间隔）免费。支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux/Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 带截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
  * [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费额度，自托管可无限使用。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费额度
  * [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控。开源项目可免费使用小型企业订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话内免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等服务。每月3,000次事件/1用户免费。开源且支持无限量自托管。
  * [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，支持无限量自托管。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时间和定时任务监控。小型团队和开源项目每月12,000次错误免费。
  * [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
  * [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含每月5,000次错误、不限用户数、30天数据保留
  * [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管不限量使用
  * [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
  * [Semaphr](https://semaphr.com) — 移动应用一站式免费应急开关解决方案。
  * [Jam](https://jam.dev) - 开发者友好的一键式错误报告。免费计划支持无限量报告。
  * [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用途免费计划支持无限量录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万文档，不限全文/向量/混合搜索，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完整编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目培养Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到UX设计等开发全领域的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证对齐的免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 发布2,500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 基础/高级HTML/CSS、JavaScript和SQL的免费在线指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React、Node.js、GraphQL、TypeScript等，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4,000+免费课程，专注计算机科学、工程与数据科学
* [Django教程](https://django-tutorial.dev) - 首个框架学习指南，为用户文章提供免费dofollow反向链接
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学培训，涵盖Python Click和Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言开源教育平台，含人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 新闻简报服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件及事务性外发邮件，每月10000封免费
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly的联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供最多2个您域名下的邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 这不是完整的邮件服务器，只是一个邮件客户端，允许您直接从客户端发送邮件而不暴露凭据。免费层每月200次请求，2个邮件模板，请求大小限制50KB，有限的联系人历史记录
* [EtherealMail](https://ethereal.email) - Ethereal是一个假的SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。它是一个完全免费的反事务性邮件服务，邮件永远不会被投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成器，使用多种域名。每次页面刷新时邮箱地址会更新。完全免费，无任何收费服务
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检查是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮件生成器。支持10个域名，允许创建无限地址（包含广告），除此之外完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限数量的邮箱地址（**注意**：使用.casa、.cf、.click、.email、.fit、.ga、.gdn、.gq、.lat、.loan、.london、.men、.ml、.pl、.rest、.ru、.tk、.top、.work等顶级域名需付费，因垃圾邮件问题）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD中的邮件功能。免费账户每天永久15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 一个域名的免费邮件转发。接收和发送来自您域名的邮件
* [Inboxes App](https://inboxesapp.com) — 每天最多创建3个临时邮箱，完成后可通过方便的Chrome扩展删除。非常适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件自动删除最多3天。开源并可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月最多3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约每月86400次）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件及自动化功能免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API、SMTP，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每天200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 免费API用于临时邮件测试，免费公共邮件托管，外发捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API、SMTP，每月3500封免费事务性和营销邮件。邮件沙箱 - 用于开发的假SMTP服务器，免费套餐包含1个收件箱，100条消息，无团队成员，每秒2封邮件，无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者的免费临时邮箱。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共享一个收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件，提取数据，发送到您的服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费邮件，之后每天前100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC每周摘要
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务提供商，内置端到端加密。免费1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠的邮件投递API。免费层（每月10000封邮件）。异步发送。使用多个SMTP服务器。黑名单、日志、跟踪、Webhook等
* [QuickEmailVerification](https://quickemailverification.com) — 免费层每天验证100个邮箱，以及其他免费API如DEA检测器、DNS查询、SPF检测器等
* [Resend](https://resend.com) - 面向开发者的事务性邮件API。每月3000封邮件，每天100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源、可自托管的邮箱别名/转发解决方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究人员等）免费
* [Substack](https://substack.com) — 无限免费新闻简报服务。开始收费时再付费

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封免费事务性邮件
* [temp-mail.io](https://temp-mail.io) — 免费临时邮箱服务，支持同时使用多个邮箱地址和邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期功能
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和临时邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮件服务商，现提供包含免费方案的多项服务：
   - [邮件](https://zoho.com/mail) 5用户免费。每人5GB存储，25MB附件限制，支持一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费方案包含1个并发远程支持许可和5台无人值守计算机许可
   - [Sprints](https://zoho.com/sprints) 5用户免费，支持5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储，包含Zoho办公套件（Writer/Sheets/Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制，[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 25用户免费团队协作，含3个群组/自定义应用/看板/手册及10个集成
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议及10名网络研讨会观众
   - [Vault](https://zoho.com/vault) — 个人版免费密码管理
   - [Showtime](https://zoho.com/showtime) — 支持最多5名参与者的远程培训会议软件
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，支持自定义CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 20个客户/订阅免费循环账单管理
   - [Checkout](https://zoho.com/checkout) — 3个页面及50笔付款免费的产品账单管理
   - [Desk](https://zoho.com/desk) — 3个客服坐席免费的支持管理系统，集成[Assist](https://zoho.com/assist)远程支持
   - [Cliq](https://zoho.com/cliq) — 100GB存储的免费团队聊天软件
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建工具
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线问卷调查
   - [Bookings](https://zoho.com/bookings) - 预约排期系统
* [Maileroo](https://maileroo.com) - 开发者专用SMTP中继和邮件API。每月5,000封邮件，无限域名，含邮件验证和黑名单监控

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 一款以开发者为中心的功能开关服务，支持无限团队规模，提供优质支持且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能；跨Web、移动和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关和A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验数量不限。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试数量不限。
* [Molasses](https://www.molasses.app) - 强大的功能开关和A/B测试。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境且请求不限。SDK、分析仪表盘、发布日历、Slack通知等所有功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等强大平台。免费版提供无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关和A/B测试。支持代码化配置和全类型TypeScript SDK，与Next.js和React等框架深度集成。提供慷慨的免费层级和低成本扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费版、共享版、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多款工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 可用于商业用途的免费字体库，经过人工精选并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接至Google CDN，可快速便捷地为网站安装众多免费字体
* [FontGet](https://www.fontget.com/) - 提供分类清晰且带标签的多样化可下载字体
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，个人和商业用途均可100%免费使用
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供个人可用的免费/付费商业字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，含中日韩(CJK)字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知和自动回复、Webhooks、Zapier集成、重定向、AJAX或POST等功能。免费版包含无限表单，每月20次提交，若显示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代GUI界面，支持与Google Sheets、Airtable、Slack、Email等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾邮件拦截和GDPR合规数据处理。基础用途免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单。无需注册即可免费使用，免费版每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾邮件防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets、Slack、ActiveCampaign和Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每月每表单50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过UI转发提交至邮箱、Slack或Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版无限表单和提交，含预制模板、反垃圾邮件和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点，1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单和调查工具。50+专家设计模板。免费账户限1个活跃调查，100次响应/调查，8种响应类型。
* [Screeb](https://screeb.app/) - 应用内调查和用户行为分析产品。永久免费版允许500月活用户，无限响应和事件，多集成，导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义重定向和响应页，Telegram & Slack机器人，单次邮件通知。
* [Survicate](https://survicate.com/) — 一站式多渠道反馈收集和跟进调查工具。AI自动分析反馈。免费版含邮件、网站、产品内或移动端调查，AI调查生成器，25次月响应。
* [staticforms.xyz](https://www.staticforms.xyz/) - 免费无服务器代码集成HTML表单。提交后表单内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 测验和表单构建工具。免费版5个表单，每表单最多3步，50次月响应。
* [Typeform.com](https://www.typeform.com/) — 网站嵌入精美表单。免费版每表单限10个字段，100次月响应。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版文档添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站联系表单，无需后端代码。免费版无限表单和域名，每月250次提交。
* [WebAsk](https://webask.io) - 调查和表单构建工具。免费版3个调查/账户，100次月响应，每调查10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月限100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特表单。无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将PDF转为可填写表单。免费版无限PDF，每PDF3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版收集100次响应，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 移动端应用内调查工具。使用Qualli AI设计问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调查或带回放的调查，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版收集25次反馈提交。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调查收集反馈。免费版含1个活跃调查，每调查25次响应，可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包含每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费的自动化拉取请求审查。
  * [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200+种LLM。每月10,000次免费请求，平台功能完全免费！
  * [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
  * [Arize AX](https://arize.com) - AI工程平台，帮助AI工程师和产品经理评估和观察AI应用及代理，内置Alyx代理。免费产品包括每月25k spans和1GB的摄入量。
  * [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估行。
  * [Findr](https://www.usefindr.com/) - 通用搜索，让您一次性搜索所有应用。搜索助手可让您使用您的信息回答问题。免费计划提供无限统一搜索和每天5次协同查询。
  * [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
  * [Clair](https://askclair.ai/) - 临床AI参考。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件还提供免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并与任何可观测性客户端兼容。免费计划每月提供50K次追踪。
  * [LangWatch](https://langwatch.ai) - LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1k次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代他们的LLM应用。永久免费计划包括每月50k次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
  * [Phoenix](https://github.com/Arize-ai/phoenix) - 开源平台，用于追踪、模型评估和AI代理实验，由Arize AI团队开发。所有功能在Elastic License 2.0 (ELv2)下开源。
  * [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
  * [Othor AI](https://othor.ai/) - AI原生的快速、简单且安全的商业智能解决方案，替代Tableau、Power BI和Looker等流行工具。Othor利用大型语言模型（LLMs）在几分钟内提供定制商业智能解决方案。永久免费计划提供一个工作空间、五个数据源连接和一个用户，分析无限制。[#开源](https://github.com/othorai/othor.ai)
  * [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。请注意，这些模型虽免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级需求，例如Claude、OpenAI、Grok、Gemini和Nova。
  * [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai提供100,000个免费单词，用于Azure OpenAI、DeepSeek和Google Gemini模型，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
  * [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，去除噪音和回声，同时保留自然声音清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供 Bootstrap、Bootswatch 和 Font Awesome 的 CDN 服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs 是一个由 Cloudflare 提供支持的开源免费 CDN 服务，被全球超过 11% 的网站所信赖。
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是最流行的开源 JavaScript 库的内容分发网络
* [Stellate](https://stellate.co/) - Stellate 是一个极速、可靠的 GraphQL API CDN，免费支持两项服务。
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速且可靠的开源 CDN。支持 npm、GitHub、WordPress、Deno 等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 托管了如 jQuery 等流行的第三方 JavaScript 库，方便您轻松将其添加到 Web 应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费 DDoS 防护和 SSL 证书
* [Skypack](https://www.skypack.dev/) — 100% 原生 ES 模块 JavaScript CDN。每月每个域名免费支持 100 万次请求。
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com** 的现代替代品，使用 Cloudflare 托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整 Varnish Cache 解决方案的简单方式。据称单个站点永久免费
* [statically.io](https://statically.io/) — 为 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资源和图片提供的 CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理。永不宕机的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整尺寸服务。全球缓存即时处理图片。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费 DDoS 防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费 1 TB 流量和 100 万次请求，并提供免费 DNS 托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费 5 TB CDN 流量，19 个核心节点，1 个域名和通用 SSL。
* [PromoProxy](https://promoproxy.net/) - 免费云端安全 Web 网关。免费计划支持最多 5 名用户和每日 1 GB 流量。

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用数量，30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持websockets），含认证服务。免费版每项目含1个数据库、3个存储桶、5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 开源跨平台移动应用开发工具链，面向Java/Kotlin开发者。商业用途免费，项目数量无限制。
* [deco.cx](https://www.deco.cx/en/dev) - 基于边缘计算的前端平台，通过TypeScript代码自动生成可视化CMS。内置A/B测试、内容分群和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储+1GB流量/月，限用免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析自动生成基础设施的后端框架，免样板代码。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费实例（永不休眠）+免费PostgreSQL数据库（2连接/1万行/无备份）。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持业务快速增长。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台，基于任意触发器构建工作流。[免费运行代码](https://docs.pipedream.com/pricing/)，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费基础账户含1个your-username.pythonanywhere.com应用、512MB私有存储、1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月5万次。自定义域名仅限付费版。
* [Koyeb](https://www.koyeb.com) - 全球部署的开发者友好无服务器平台。通过Git部署Docker容器/Web应用/API，含自动扩缩容和全球边缘网络。免费实例限法兰克福/华盛顿区域，免费托管PostgreSQL数据库限法兰克福/华盛顿/新加坡。512MB内存+2GB存储+0.1CPU。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Meteor应用PaaS托管，含免费MongoDB共享主机和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2个服务+2个定时任务+1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API的全能平台，兼具NoCode敏捷性与编程语言能力。免费版含[1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。内置CI/CD和GitHub集成。[免费计划](https://wundergraph.com/pricing)含3个项目/1GB出口流量/300分钟构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务+每月5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，可创建类生产环境测试。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务/月（限非商业/学术用途）。
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者PaaS平台。免费版含5个组件+每月100美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动与Web Baas服务，免费提供1GB文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - 提供文档与资源，为企业构建部署数字化方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1,000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录，每月500万次函数调用。
* [darklang.com](https://darklang.com/) - 集成语言、编辑器与基础设施的托管平台。Beta期间可用，正式版后将提供慷慨免费层。
* [Firebase](https://firebase.com) - 助力应用开发与运营。免费Spark计划含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等多项功能永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI生成器和免费模板。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的聊天、消息、音视频及信息流功能，替代数周开发。
* [hasura.io](https://hasura.io/) - 为现有数据库提供即时GraphQL API，支持Web、移动及数据集成。每月1GB数据传输免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划含PostgreSQL、GraphQL（Hasura）、认证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送，联系人无限制且支持自动预热。
* [paraio.com](https://paraio.com) - 灵活认证、全文搜索与缓存的API后端服务。单个应用免费，含1GB数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息及100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2,000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) - 每月2,000活跃用户的免费无限推送通知。统一API支持iOS和Android设备。
* [quickblox.com](https://quickblox.com/) - 即时消息、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置含认证、数据、文件等服务的服务器，并通过管道组合转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用，通过点击定制数据模型，集成企业级安全防护。免费开发者计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) - 实时自动同步多平台数据，结构化数据无限收发存储，每月最多2,500用户。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，提供认证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) - 含认证、配额、监控及分析的API管理。提供免费云服务。
* [zapier.com](https://zapier.com/) - 连接应用实现任务自动化。每15分钟5次触发，每月100次任务。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用和设备。免费支持2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务/15分钟更新，5个活跃自动化流程及Webhook支持。
* [LeanCloud](https://leancloud.app/) - 移动后端服务。免费含1GB数据存储、256MB实例、每日3,000次API请求及10,000次推送。（API与Parse Platform高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账号注册超过180天的用户提供每月5美元免费额度，适合托管应用及数据库等。（[免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持与15+种数据库及任何API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，提供可定制的移动端和网页应用。具有拖拽式界面、离线支持、实时位置追踪及第三方服务集成功能
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理10倍速构建内部工具、自定义用户旅程、数字体验、自动化流程、管理面板和运营应用的低代码平台
* [lil'bots](https://www.lilbots.io/) - 在线编写并运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含API全权限访问、AI编程助手及每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，单应用0.5GB存储和1GB内存。免费层也包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 支持本地或云部署的企业级网页开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可扩展性。免费层支持每月5个用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台，支持AI生成、可视化编辑和代码扩展，提供集成、认证、权限和审计日志等中心化管理功能
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建商业应用。支持连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发程序
* [UI Bakery](https://uibakery.io) — 加速定制化网页应用开发的低代码平台，支持通过JavaScript、Python和SQL进行深度定制的拖拽式UI构建，提供云端和自托管方案。5人以下团队免费
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台，免费版支持1个用户每月100万次工作流活动（[另有德语版本](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义Web服务器，支持FTP/WebDAV/SSH访问，包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+免费短域名，支持PHP、MySQL，提供应用安装器和邮件发送功能，无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用+开发者优先的部署开发平台，最大限度简化基础设施配置，加速项目搭建。
* [Bubble](https://bubble.io/) — 可视化编程构建网页/移动应用，无需代码，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) - 面向Web3前端的去中心化托管平台，专注提升在线率与安全性，为用户提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) - 在App Platform入门套餐中免费构建部署三个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive发布网页，仅限静态站点，永久免费，每个Google/Microsoft账号限一个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) - 开发者桌面应用，支持本地托管站点并实时公开分享，可通过图形界面/API/CLI操作。
* [Free Hosting](https://freehostingnoads.net/) — 免费主机支持PHP5/Perl/CGI/MySQL/FTP，含文件管理器/POP邮箱/免费子域名/DNS区域编辑器/网站统计等独家功能。
* [Freehostia](https://www.freehostia.com) — 提供行业领先控制面板和50+应用一键安装，即时配置，无强制广告。
* [HelioHost](https://heliohost.org) — 非营利性免费主机，配备Plesk面板，支持PHP/Node.js/Python/Django/Flask/.NET/Perl/CGI，数据库含MySQL/PostgreSQL/SQLite，含IMAP/POP3/SMTP邮箱，无限流量，免费子域名，基础套餐1GB存储可升级。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持自定义域名与SSL，每月100GB流量，覆盖260+Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) - 支持SFTP文件传输的网页托管，提供PHP环境。
* [Neocities](https://neocities.org) — 静态网站托管，1GB免费存储+200GB月流量。
* [Netlify](https://www.netlify.com/) — 每月300积分额度（相当于30GB流量）内免费构建部署静态站点/应用。
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供多种托管形式（静态/容器化/WordPress等一键部署应用），免费套餐含1个静态/容器化站点+1个数据库，100GB流量+300构建分钟/月。
* [pantheon.io](https://pantheon.io/) — Drupal和WordPress托管平台，含自动化DevOps与弹性架构，开发者与代理商免费使用（不支持自定义域名）。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能。
* [render.com](https://render.com) — 一体化云平台，免费提供SSL/全球CDN/私有网络/Git自动部署，Web服务/数据库/静态网页均有免费方案。
* [SourceForge](https://sourceforge.net/) — 免费发现、创建与发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者专用静态发布工具，支持无限站点与自定义域名。
* [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 免费版支持1个站点/50个页面/50MB存储，仅限170+预设区块中的基础模块，无自定义字体/网站图标/域名。
* [Vercel](https://vercel.com/) — 每次`git push`自动生成带SSL的预览URL，全球CDN加速，特别适合Next.js等静态站点生成器。
* [Versoly](https://versoly.com/) — 专注SaaS的建站工具，免费版支持无限网站/70+区块/5套模板，含自定义CSS/网站图标/SEO/表单功能（无自定义域名）。
* [Qoddi](https://qoddi.com) - 类Heroku的PaaS服务，全功能开发者平台，免费套餐支持静态资源/测试环境/开发应用。
* [FreeFlarum](https://freeflarum.com/) - 社区运营的免费Flarum论坛托管（250用户上限，捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) - 单项目免费托管，容器存活期两周，500MB内存，1GB SFTP存储空间。
* [Patr Cloud](https://patr.cloud/) — 易用云平台，付费服务中包含三个免费静态站点托管。
* [Serv00.com](https://serv00.com/) — 3GB免费空间含每日备份（保留7天），支持定时任务/SSH访问/GIT/SVN/Mercurial仓库，环境涵盖MySQL/PostgreSQL/MongoDB/PHP/Node.js/Python/Ruby/Java/Perl等数十种语言。
* [Sevalla](https://sevalla.com/) - 简化应用/数据库/静态网站管理的托管平台，免费版限制1GB空间/100GB流量/600构建分钟/每账户100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) — 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管，免费版支持1个域名和10条记录。
* [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务，最多5个域名，提供多种配置指南。
* [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API](https://dynv6.com/docs/apis)，可管理多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，并提供基于用户共享域名的[子域名服务](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) — 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) — 免费DNS托管，域名数量无限制。
* [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) — 无需注册的免费动态DNS服务，无追踪、日志或广告，域名数量不限。
* [noip](https://www.noip.com/) — 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含IP地址的主机名时返回该IP。
* [zilore.com](https://zilore.com/en/dns) — 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费托管服务。
* [zonewatcher.com](https://zonewatcher.com) — 自动备份与DNS变更监控，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) — 华为云提供的免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) — Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) — 免费托管最多3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅或广告。
* [LocalCert](https://localcert.net) - 提供免费的`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。无限期免费提供10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费5GB存储空间。
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）方案。单节点，1 CPU，1GB 内存，PostgreSQL 和 MySQL 还包含 1GB 存储空间。可轻松迁移至更高级方案或跨云平台。
  * [airtable.com](https://airtable.com/) — 看似电子表格，实为关系型数据库，提供无限基础表、每表 1,200 行和每月 1,000 次 API 请求
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 即服务，提供 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键值查找、任务系统、实时消息、工作队列、强大 CLI 和基于 Web 的数据管理器。免费方案含 5GB 存储和每分钟 60 次 API 调用。包含 2 名开发者席位，无需信用卡。
  * [CrateDB](https://crate.io/) - 用于实时分析的开源分布式 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：单节点含 2 CPU、2 GiB 内存、8 GiB 存储。每个组织一个集群，无需支付方式。
  * [Upstash](https://upstash.com/) — 无服务器 Redis，免费层每月 50 万次命令、256MB 最大数据库大小和 20 个并发连接
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，含 1 节点和 8GB 存储，专为开发者打造，支持从物联网到人工智能的下一代应用开发
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — Redis 在线实时监控与管理服务，免费监控 1 个 Redis 实例
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费支持最高 25MB、1 个代理服务器和基础分析
  * [scalingo.com](https://scalingo.com/) — 主要提供 PaaS，但也包含 128MB 至 192MB 的 MySQL、PostgreSQL 或 MongoDB 免费层
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队开发的灵活类电子表格数据库。无限表格、2,000 行、1 个月版本历史、最多 25 名团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
  * [StackBy](https://stackby.com/) — 结合电子表格灵活性、数据库强大功能及与常用商业应用内置集成的工具。免费方案包含无限用户、10 个堆栈和每个堆栈 2GB 附件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是开源兼容 MySQL 的分布式 HTAP 关系型数据库。TiDB Serverless 每月免费提供 5GB 行存储、5GB 列存储和 5,000 万请求单位 (RUs)。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验。Turso 提供永久免费入门方案，9 GB 总存储、最多 500 个数据库、最多 3 个位置、每月 10 亿行读取及 SQLite 本地开发支持。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费支持每 5 分钟 3MB 写入、每 5 分钟 30MB 读取和 10,000 基数序列
  * [restdb.io](https://restdb.io/) - 快速简单的 NoSQL 云数据库服务。通过 restdb.io 可获得模式、关系、自动 REST API（支持类 MongoDB 查询）及高效的多用户管理界面处理数据。免费方案允许 3 用户、2,500 条记录和每秒 1 次 API 请求。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供 5,000 万 RUs 和 10 GiB 存储（价值 15$）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图大小（5 万节点、17.5 万关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 存储（总计）、1 项目、10 分支、无限数据库、始终可用的主分支（5 分钟后自动暂停）、非主分支计算每月 20 小时活跃时间（总计）。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于 unikernels 并在裸机上运行的超快托管 Postgres，1GB 存储、10 数据库，与 Prisma ORM 集成。
  * [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，支持 GraphQL API。限制每天 1 MB 数据传输。
  * [Tinybird](https://tinybird.co) - 无服务器托管 ClickHouse，支持基于 HTTP 的无连接数据摄取，并可将 SQL 查询发布为托管 HTTP API。免费层无时间限制，10GB 存储 + 每天 1,000 次 API 请求。
  * [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类 SQL 图查询语言和 REST API。一个免费实例含 2 vCPU、8GB 内存和 50GB 存储，闲置 1 小时后休眠。
  * [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB 的托管免费服务，TerminusDB 是用 Prolog 和 Rust 编写的文档和图数据库。免费用于开发，企业部署和支持需付费服务。
  * [filess.io](https://filess.io) - filess.io 是一个平台，可免费创建两个数据库，每个数据库最多 10 MB，支持以下数据库管理系统：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [Xata Lite](https://lite.xata.io/) - Xata Lite 是一个无服务器数据库，内置强大的搜索和分析功能。一个 API，多个类型安全客户端库，并针对开发工作流优化。免费方案提供 10 分支和 15 GB 存储，无暂停或冷启动。
  * [8base.com](https://www.8base.com/) - 8base 是一个全栈低代码开发平台，专为 JavaScript 开发者构建，基于 MySQL 和 GraphQL 及无服务器后端即服务。允许快速使用 UI 应用构建器构建 Web 应用并快速扩展，免费层包括：2,500 行、500 存储、1Gb/h 无服务器计算和 5 个客户端应用用户。
  * [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库，始终可用不关闭，1GB 存储（总计），5,000 万查询令牌，自动扩展，无限向量嵌入



**[⬆️ 返回顶部](#目录)**

## 隧道/WebRTC/WebSocket路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全地将类LAN网络扩展到分布式团队，免费方案支持最多5人参与的无限网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket即服务平台，部署Web Socket服务器代码时提供wss:// URL，并可监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露为公共URL。提供免费托管版本和[开源代码](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装或注册。提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件翻译和路由中心，可将事件转发至其他第三方服务。每月10万次免费事件。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费方案支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook到公共或内部（如localhost）目的地。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控webhook。每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+每月500MB TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费方案支持25个客户端的端到端加密网络。提供桌面/移动/NA客户端；通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理服务，可将localhost服务器暴露到互联网。免费方案提供15分钟隧道有效期。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道将本地运行的服务发布为公共自定义URL，并通过访问控制保障安全。单个集群免费支持5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费方案包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费方案包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题追踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内联网和项目管理工具，免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表和25张图纸
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5名用户，提供Jira集成、不限量视频会议/团队/会话
* [clickup.com](https://clickup.com/) — 项目管理平台，含免费版及云存储高级版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版包含5人团队不限量仓库/项目/文档，每月500分钟CI/CD时长和30000分钟无服务器代码运行时长
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版支持10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目且不限用户数（1GB存储）
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理，免费版不限项目/用户/存储空间
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具，免费版每月提供3个公共看板和每个看板1次调研
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具，可通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比GraphQL模式变更，精准标记破坏性/非破坏性/危险变更
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板（100MB存储）
* [Instabug](https://instabug.com) — 移动应用全栈Bug报告与反馈SDK，免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集与需求投票工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多维度基础设施交互图表工具，免费版支持无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版支持10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，含免费版与高级版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版提供2个看板和2名用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用，免费版支持1名用户创建无限看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理与面试追踪工具，提供网页版和Chrome扩展，完全免费
* [Kumu.io](https://kumu.io/) — 动态关系图谱工具，免费版支持无限量公共项目，学生可创建私有项目
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版不限成员数（10MB文件上限/250个问题）
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS，免费版支持10名用户/20个字段/2GB存储/5分钟AI视频录制
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版包含3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目且不限成员
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版提供100MB存储和5人团队，支持无限工作区/会议/工时表
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3名用户（10MB文件限制）
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 免费支持无限量公共项目和2个私有项目（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台，免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源可扩展的项目管理工具，免费版不限成员数（5MB文件上限/1000个问题）
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克估算工具
* [point.poker](https://www.point.poker/) - 在线计划扑克工具，不限用户/团队/会话/轮次/投票且无需注册

  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告和反馈工具。免费版每应用每月可提交10个错误报告。
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户。
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程和会议纪要应用，10人以下团队免费使用。
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费。
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版提供不限量的任务、迭代和工作区，且无用户数量限制。
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，支持从看板到Scrum等多种运营流程。免费版不限用户数，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}。
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单和团队大纲。免费版包含1个工作区（不限任务和项目）、1GB文件存储、1周项目历史记录及每次视频会议最多5名参与者。
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费。支持GitHub/Trello/Dropbox/Google Drive集成。
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾和迭代计划工具。15人以下团队免费。
* [teamwork.com](https://teamwork.com/) — 项目管理和团队聊天工具。免费版支持5名用户和2个项目，提供付费升级选项。
* [teleretro.com](https://www.teleretro.com/) — 融合破冰游戏、动图和表情的轻量回顾工具。免费版包含3次回顾会议且成员不限。
* [Tenzu](https://tenzu.net/) — 敏捷团队轻量项目管理工具。SaaS模式依赖自愿付费，用户可选择支付0元且无功能限制{[详情](https://tenzu.net/pricing/)}。
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理和Beta测试平台。个人使用免费。
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版支持每图最多4个层级。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版功能：5个活跃项目/每项目5名用户/5MB文件上传/3个过滤器/1周活动记录。
* [trello.com](https://trello.com/) — 看板式项目管理工具。免费版提供不限量个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具。
* [ubertesters.com](https://ubertesters.com/) — 测试平台集成与众测服务，免费版支持2个项目5名成员。
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台（含项目管理、版本控制和问题追踪）。免费版提供不限量项目与协作者及3GB存储空间。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具。最多3名用户免费，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目及私有项目（3名用户免费）。含时间追踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — 唯一内嵌于GitHub的项目管理方案。公开仓库、开源组织及非营利机构免费。
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具。最多5名成员免费，支持5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间管理应用（免费版含无限记录/项目/客户/标签/报告），以及面向独立开发者的[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版含无限任务/里程碑/时间线）。
* [Sflow](https://sflow.io) — 专为敏捷开发、营销、销售及客服设计的项目管理工具，特别适合外包和跨组织协作项目。免费版支持3个项目5名成员。
* [Pulse.red](https://pulse.red) — 极简项目时间追踪与工时表应用。
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的效率工具，支持结构化清单/模板/任务内审批流程。小团队可使用免费版。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和尺寸调整。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化和CDN服务。提供多种图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费月套餐含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等语言的图片上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图片转换或1GB存储/CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM端到端加密，客户端处理且服务器零数据访问。支持1GB以内文件免费上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务。免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具。支持文档、图片、音频、视频等格式转换和编辑。
* [GoFile.io](https://gofile.io/) - 可通过网页界面和API使用的免费文件共享存储平台。无文件大小、带宽和下载次数限制，但十天无下载的文件会被自动删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图片视频托管、处理和流媒体服务。免费套餐含每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图片的友好机器人，可在保持质量的同时减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务。拖拽上传32MB以内图片，获取直链、BBCode和HTML缩略图。登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无水印社交媒体封面图生成API。
* [imgix](https://www.imgix.com/) - 图片缓存管理和CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图片代码优化/CDN）。免费支持5000次页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享和统一管理工具。基础版支持无限传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供受限免费版，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目、黑客松和移动应用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队使用的协作平台，可体验基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 无需登录/水印/广告的快速批量二维码生成器，单次最多支持100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表和二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成WordPress/Drupal/Magento等主流CMS平台，处理量超70亿次仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月500次免费压缩。
* [transloadit.com](https://transloadit.com/) — 处理视频/音频/图片/文档的上传转码服务。开源项目/慈善机构/学生可通过GitHub学生包免费使用，商业应用可试用2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN、媒体处理API和前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具集。开发者可免费使用所有功能：文件上传API/UI、图片CDN、自适应交付和智能压缩。免费版含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN服务，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即享10GB永久免费空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费提供20GB空间（支持3台设备），推荐用户可获5GB奖励（90天不活跃将失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款简单易用的全球图片CDN。60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。立即申请[免费开发者账户](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI处理工具，可将PDF、图片转换为JSON、CSV、EXCEL等结构化数据格式。每月免费赠送30次额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建定制二维码。支持自定义样式、颜色、logo等。
* [LibreQR](https://libreqr.com) — 注重隐私保护的免费二维码生成器，无追踪功能。完全免费且不收集用户数据。
* [Doradrop](https://doradrop.com) — Doradrop 是一个无广告的无限存储文件共享平台。无需登录即可通过安全链接即时分享文件。

* [Ente](https://ente.io/) - Ente 是端到端加密的云存储服务，支持照片、视频和2FA密钥存储。可自托管，永久免费版提供10GB存储空间。免费版用户数据仅保留单副本。

**[⬆️ 返回顶部](#目录)**

## 设计与UI

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，快速创建现代化响应式网站，非设计师也能轻松打造精美界面
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板库，提供丰富首页模板，下载代码包即可快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，团队可构建、文档化、发布、扩展和维护设计系统。免费版支持3名编辑人员协作1个设计系统，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费在线社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，同时提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 全格式转换工具，支持208种格式（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [ColorKit](https://colorkit.co/) - 在线创建调色板或获取顶级配色灵感
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变色工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，支持布局迭代与动效制作。免费版允许无限查看者，最多2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版税商用图库（含模特/物品授权书）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变色选择工具
* [Icon Horse](https://icon.horse) – 通过简易API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) – 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐/设计工具集。免费版提供有限格式的低分辨率资源，使用时需标注来源
* [landen.co](https://www.landen.co) — 无代码创建发布精美网站与落地页，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加宽高参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，为设计师/开发者提供Lottie动画工具及Android/iOS/Web插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变色/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 免费无限量云存储思维导图，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 创建逼真的T恤与服装模型（40个免费模板），适用于社交媒体与电商
* [Modeldraw.com](https://modeldraw.com) — 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 浏览器端快速矢量编辑器（完全免费）
* [NSPolygon](https://nspolygon.com) — 免费图库/图标/插画资源站
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建并快速分享协作
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 网页端开源设计与原型工具，支持SVG（完全免费）
* [pexels.com](https://www.pexels.com/) - 免版税商用图库，提供免费API关键词搜索
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，具有Photoshop界面风格，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 无缝集成代码库的网页设计与页面构建工具，可创建响应式页面/复杂组件，支持代码扩展并发布到生产环境
* [Pravatar](https://pravatar.cc/) - 生成随机虚拟头像，支持URL直链调用
* [PNG to WebP转换器](https://pngtowebpconverter.com/) - 浏览器端直接转换PNG为WebP格式，无需上传，完全客户端处理确保隐私安全
* [Proto.io](https://www.proto.io) - 无需编码的全交互UI原型工具。免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) — 简易应用图标尺寸调整工具
* [Rive](https://rive.app) — 创建并发布精美动画到任意平台。个人用户永久免费，提供编辑器托管服务及多平台运行时支持

  * [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局下的主题变化
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可复制粘贴的免费可编辑SVG图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui精美主题。实时自定义颜色、排版等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成首字母头像。URL可直接热链到网页/应用中。支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图片集合，完全免费且无需署名
* [unsplash.com](https://unsplash.com/) - 商业和非商业用途的免费图库（随心所欲许可证）
* [vectr.com](https://vectr.com/) — 网页+桌面版免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的引导流程
* [Webflow](https://webflow.com) - 带动画和网站托管的可视化网站构建器。免费支持两个项目
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的可视化网站构建器。非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图、线框图、便利贴和思维导图。免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计、资产和样式指南。免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人注目的独特图形图像
* [Responsively App](https://responsively.app) - 免费开发工具，用于更快速精准的响应式网页应用开发
* [SceneLab](https://scenelab.io) - 在线模型图形编辑器，拥有不断扩充的免费设计模板库
* [xLayers](https://xlayers.dev) - 预览并将Sketch设计文件转换为Angular/React/Vue等框架（开源项目：https://github.com/xlayers/xlayers）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式强大SEO优化网页构建器。前5页免费，无限自定义域名
* [Mastershot](https://mastershot.app) - 完全免费的浏览器视频编辑器。无水印，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页构建器。免费建一个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/集合/品牌Logo库。内置浏览器矢量编辑工具
* [svgrepo.com](https://www.svgrepo.com/) - 探索海量矢量库，为项目寻找最合适的图标/矢量图。可商用免费下载
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的网页工具，可直接用于设计工作流
* [Canva](https://canva.com) - 创建视觉内容的免费在线设计工具
* [Superdesigner](https://superdesigner.co) - 通过点击即可创建独特背景/图案/形状的免费设计工具集合
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。免费3个项目，无限协作者，支持代码导出
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG等矢量格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台，含JPG转SVG等开发者工具
* [okso.app](https://okso.app) - 极简在线绘图工具。支持导出PNG/JPG/SVG/WEBP。可安装为PWA
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制的一致性SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 包含4400万品牌的LogoAPI，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 个人/商用免费的Bootstrap/Angular/React/VueUI套件，含700+组件
* [TW Elements](https://tw-elements.com/) - 用TailwindCSS重构的Bootstrap组件，设计更优功能更强
* [DaisyUI](https://daisyui.com/) -- 免费。"用更少的类名使用TailwindCSS"，提供按钮等组件
* [Scrollbar.app](https://scrollbar.app) -- 设计网页自定义滚动条的简易免费工具
* [css.glass](https://css.glass/) -- 用CSS创建玻璃态设计的免费网页工具
* [hypercolor.dev](https://hypercolor.dev/) -- 精选TailwindCSS渐变色集合，含多种生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标包统一接口库，支持跨包搜索和框架导出
* [NextUI](https://nextui.org/) -- 免费。美观/快速的现代React&Next.jsUI库
* [Glyphs](https://glyphs.fyi/) -- 免费开源设计系统，包含强大可编辑图标
* [ShadcnUI](https://ui.shadcn.com/) -- 可直接复用的精美组件库。支持无障碍/自定义/开源
* [HyperUI](https://www.hyperui.dev/) -- 免费开源TailwindCSS组件库
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年份独特图标，完全免费
* [Image BG Blurer](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片背景模糊框
* [Webstudio](https://webstudio.is/) -- Webflow开源替代方案。免费版支持无限子域名网站
* [Nappy](https://nappy.co/) -- 黑人/棕色人种的免费精美照片，可商用
* [Tailkits](https://tailkits.com/) -- 精选Tailwind模板/组件/工具集合，含代码生成器
* [Tailcolors](https://tailcolors.com/) -- 精美TailwindCSSv4调色板，即时预览复制色值
* [Excalidraw](https://excalidraw.com/) -- 支持本地保存和导出的免费在线绘图工具
* [Lunacy](https://icons8.com/lunacy) -- 内置素材库的免费离线设计工具，基础功能免费
* [Flows](https://flows.sh/) -- 完全可定制的用户引导平台。免费支持250月活用户

  * [OKLCH](https://oklch.net/) -- 为网页设计师和开发者提供的免费OKLCH颜色选择器与转换工具。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台。可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常并非来自真实应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好，寻找最佳着陆页设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页案例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动端截图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们包含50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图及地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 面向Web/桌面/移动端的地图API与SDK，涵盖地理空间数据存储、分析、地理编码、路径规划等功能。每月免费额度：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5,000次行驶时间计算、5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用API/SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务与SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与SDK，支持每周更新的免费矢量瓦片和四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap提供的免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[各服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版（SUSE、EL、Fedora、Debian等）的软件包构建服务
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境和代码片段分享平台，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快速的应用开发工具。这款开源IDE完全免费，是最佳的Android应用开发环境。支持Windows、Mac、Linux及ChromeOS系统。
* [AndroidIDE](https://m.androidide.com/) — 开源移动端IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境、工具平台及应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户及托管文档）。
* [BBEdit](https://www.barebones.com/) - macOS平台热门可扩展编辑器。免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，可升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转化为交互式笔记本集合的免费公共服务。
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简易GUI界面。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源文本编辑器，轻量易用且高度可定制。
* [cacher.io](https://www.cacher.io) - 支持100+编程语言的代码片段管理工具，支持标签分类。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE，开源且支持Windows、macOS及Linux系统。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持编写（代码块、自动补全、单元测试）、理解（全代码库知识）、修复和查找代码。兼容VS Code、JetBrains及在线使用。
* [codiga.io](https://codiga.io/) - 直接在IDE中搜索、定义和复用代码片段的编程助手，个人和小型团队免费。
* [codesnip.com.br](https://codesnip.com.br) - 简易代码片段管理器，支持分类、搜索和标签功能，完全免费无限制。
* [cocalc.com](https://cocalc.com/) - （原cloud.sagemath.com）云端协作计算平台。通过浏览器访问完整Ubuntu系统，内置数学、科学、数据科学等免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikit-learn等。
* [code.cs50.io](https://code.cs50.io/) - CS50专用Visual Studio Code网页版，基于GitHub Codespaces适配师生需求。
* [codepen.io](https://codepen.io/) - 前端网页开发演练场（HTML/CSS/JavaScript）。
* [codesandbox.io](https://codesandbox.io/) - 支持React、Vue、Angular、Preact等框架的在线开发环境。
* [Components.studio](https://webcomponents.dev/) - 独立开发代码组件，通过故事可视化展示，测试后发布至npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，开源且社区驱动。Red Hat提供在线实例：[workspaces.openshift.com](https://workspaces.openshift.com/)。
* [fakejson.com](https://fakejson.com/) - 通过API快速生成模拟JSON数据，加速产品概念验证阶段。
* [ForgeCode](https://forgecode.dev/) - 支持Claude/GPT4/Grok/Deepseek/Gemini等前沿模型的AI结对编程工具，原生CLI集成并兼容所有IDE。免费版包含基础AI模型本地处理能力。
* [GetVM](https://getvm.io) - 即时免费的Linux及IDE侧边栏工具，每日限5个VM实例。
* [ide.goorm.io](https://ide.goorm.io) - 全功能云端IDE，支持多语言、基于Linux容器的终端、端口转发、自定义URL、实时协作聊天、Git/Subversion等功能（免费版含1GB内存/10GB存储，5个容器槽位）。
* [JDoodle](https://www.jdoodle.com) - 支持60+语言的在线编译器，免费版REST API每日200次编译额度。
* [jetbrains.com](https://jetbrains.com/products.html) - 生产力工具与IDE套件（含[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等），学生/教师/开源团队可申请免费授权。
* [jsbin.com](https://jsbin.com) - 前端网页开发演练场（支持HTML/CSS/JavaScript/Markdown/Jade/Sass）。
* [jsfiddle.net](https://jsfiddle.net/) - 支持协作的前端网页代码分享平台。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - 返回模拟JSON数据的REST API端点，提供本地部署源码。
* [Lazarus](https://www.lazarus-ide.org/) - 跨平台Delphi兼容快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 基于AI的免费云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务，用于生成虚假JSON数据。
* [mockable.io](https://www.mockable.io/) - 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据。
* [mockaroo](https://mockaroo.com/) - 生成CSV/JSON/SQL/Excel格式的测试数据，支持后端API模拟。
* [Mocklets](https://mocklets.com) - HTTP协议模拟API工具，终身免费版支持并行开发和全面测试。
* [Paiza](https://paiza.cloud/en/) - 免配置的浏览器开发环境，免费版提供24小时有效期的服务器（每日4小时运行时间，2核CPU/2GB内存/1GB存储）。
* [Prepros](https://prepros.io/) - 实时编译Sass/Less/Stylus/Pug/Haml等语言，支持浏览器热重载和自定义工具扩展。
* [Replit](https://replit.com/) - 多语言云端编程环境。
* [SoloLearn](https://code.sololearn.com) - 适合运行代码片段的云端编程平台，支持多种语言（运行代码无需注册），同时提供免费编程课程。
* [stackblitz.com](https://stackblitz.com/) - 在线全栈应用开发IDE，支持主流NodeJs框架。快速创建项目链接：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - 广受欢迎的多功能文本编辑器，支持高度自定义的编码环境。

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完备的IDE，拥有数千款扩展，支持跨平台应用开发（可下载适用于iOS和Android的Microsoft扩展）、桌面/网页/云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) - 社区驱动的VSCode二进制发行版，无遥测/追踪，采用自由许可证
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编码活动数据，免费版功能有限
* [Wave Terminal](https://waveterm.dev/) - 开源跨平台终端工具，支持内联渲染、会话保存和历史记录，基于开放网络标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，提供58种模板支持独立开发Web组件，含故事模式和测试功能
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效数据库IDE，具备服务器发现、ERD、数据生成器、AI、NoSQL结构管理、数据库版本控制等功能
* [Zed](https://zed.dev/) - 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器（含Java/Python/C++/JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 数据分析/事件/统计

  * [Userbird](https://userbird.com) - 带有热图、会话记录和收入追踪的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 追踪GitHub仓库14天以上流量历史的精美仪表盘。免费计划允许用户监控单个仓库的流量
* [Dwh.dev](https://dwh.dev) - 数据云可观测性解决方案（Snowflake）。个人使用免费
* [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布工作流。单一事实来源的追踪计划、类型安全的分析追踪库、应用内调试器和数据可观测性，在发布前捕获所有数据问题。免费提供两名工作区成员和1小时数据可观测性回溯
* [Branch](https://www.branch.io) - 移动分析平台。免费层提供最多10K移动应用用户，包含深度链接和其他服务
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。从数据仓库同步10个字段到60多个SaaS平台，如Salesforce、Zendesk或Amplitude
* [Clicky](https://clicky.com) - 网站分析平台。免费计划支持一个网站，提供3000次浏览分析
* [Databox](https://databox.com) - 通过整合其他分析和BI平台提供商业洞察和分析。免费计划提供3个用户、仪表盘和数据源，包含11M历史数据记录
* [Hitsteps.com](https://hitsteps.com/) - 每月2000次页面浏览（1个网站）
* [amplitude.com](https://amplitude.com/) - 每月100万次事件，最多2个应用
* [GoatCounter](https://www.goatcounter.com/) - 开源网络分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网络分析，作为Google Analytics或Matomo的替代方案。免费层适用于非商业用途，包含无限网站、六个月数据保留和每月100K页面浏览
* [Google Analytics](https://analytics.google.com/) - Google分析
* [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费计划每月允许1M页面浏览，无需信用卡
* [Expensify](https://www.expensify.com/) - 费用报告，免费个人报告审批工作流
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月最多3K事件免费
* [heap.io](https://heap.io) - 自动捕获iOS或Web应用中的每个用户操作。每月最多10K会话免费
* [Hotjar](https://hotjar.com) - 网站分析和报告。免费计划每天允许2000次页面浏览，每天100个快照（最大容量：300），可存储3个热图365天。无限团队成员。还包括应用和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20个响应
* [Keen](https://keen.io/) - 用于数据收集、分析和可视化的自定义分析。每月1000次事件免费
* [Yandex.Datalens](https://datalens.yandex.com/) - Yandex Cloud数据可视化和分析服务。服务免费提供，不限制用户数量和请求
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析
* [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，无限数据历史和席位，美国或欧盟数据驻留
* [Moesif](https://www.moesif.com) - REST和GraphQL的API分析。（每月最多50万次API调用免费）
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费入门计划，一个网站、1个iOS和1个Android应用
* [Microsoft PowerBI](https://powerbi.com) - Microsoft提供的商业洞察和分析。免费计划提供有限使用，包含1百万用户许可证
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿
* [sematext.com](https://sematext.com/cloud/) - 每月最多50K次操作免费，1天数据保留，无限仪表盘、用户等
* [Similar Web](https://similarweb.com) - Web和移动应用分析。免费计划提供每个指标五个结果，一个月的移动应用数据和三个月的网站数据
* [StatCounter](https://statcounter.com/) - 网站访问者分析。免费计划分析最近的500名访问者
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月最多1m计量事件免费
* [Tableau Developer Program](https://www.tableau.com/developer) - 创新、创建并使Tableau完美适应您的组织。免费开发者计划提供Tableau Online的个人开发沙盒许可证。版本是最新的预发布版本，数据开发者可以测试该平台的每个功能
* [usabilityhub.com](https://usabilityhub.com/) - 在真实用户上测试设计和模型并追踪访问者。一个用户免费，无限测试
* [woopra.com](https://www.woopra.com/) - 免费用户分析平台，提供500K次操作、90天数据保留、30多个一键集成
* [counter.dev](https://counter.dev) - 简单且隐私友好的Web分析。免费或按捐赠付费
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月最多1m追踪事件免费。还提供每月250次响应的无限应用内调查
* [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障和性能瓶颈。提供免费计划，为开源项目提供免费个人订阅，并有开源版本
* [Microsoft Clarity](https://clarity.microsoft.com/) - Clarity是一款免费易用的工具，捕捉真实用户如何使用您的网站
* [Beampipe.io](https://beampipe.io) - 简单、注重隐私的Web分析。最多5个域名和每月10K页面浏览免费
* [Aptabase](https://aptabase.com) - 开源、隐私友好且简单的移动和桌面应用分析。提供Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月最多20,000次事件免费
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的追踪计划，促进无缝协作。部署到生产环境或为回归测试添加分析覆盖，无需编写代码
* [LogSpot](https://logspot.io) - 完整的统一Web和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包含每月10,000次事件
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级、注重隐私的Google Analytics替代方案。无限页面浏览、无限访问者、无限页面热图和目标追踪。最多3个域名和每个域名600次会话回放免费
* [AppFit](https://appfit.io) - 全面的分析和产品管理工具，便于跨平台管理分析和产品更新。免费计划包括每月10,000次事件、产品日志和每周洞察

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站与产品分析工具。免费方案每月包含3,000次事件记录
* [Rybbit](https://rybbit.io) - Google Analytics的开源无Cookie替代方案，操作体验提升10倍。免费版支持每月3,000次事件分析

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每天1,000次页面浏览，三个热图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问所有功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API/SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询 JSON API。每月100次API请求
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证 JSON API 服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。每月追踪收入低于1万美元免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力业务全球化并开拓新市场（购买力平价）。免费计划包含每月7,500次API调用。
* [Adapty.io](https://adapty.io/) – 开源SDK一站式解决方案，为iOS、Android、React Native、Flutter、Unity或网页应用提供移动端应用内订阅集成。每月收入低于1万美元免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月提供1万次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月包含1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新交易汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实物货币与加密货币的实时汇率，支持JSON和XML格式。免费层级每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率和货币转换服务，每月免费100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费微计划每月提供500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需标注数据来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现。支持连接Stripe、Chargebee等平台。免费层级每月3万次事件处理。
* [Nami ML](https://www.namiml.com/) - iOS和Android应用内购与订阅全功能平台，含无代码支付墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购与订阅后端服务（iOS和Android）。每月追踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证及欧盟增值税率API，每月免费100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟限10次。

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

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。Vagrant 虚拟机托管平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你重要的事物
* [AyeDot](https://ayedot.com/) — 以现代多媒体短格式Miniblog形式免费与世界分享你的想法、知识和故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中建立活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件。可用 GitHub issues 实现博客评论、维基页面等功能！
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万网站采用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，支持"一个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截图、捕获时间和视口尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、美观链接预览、爬取功能或截图服务。每天250次免费请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任何网站的截图。专为扩展设计并托管在Google Cloud上。每月提供100次免费截图。
  * [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL获取截图。快速、免费且可扩展。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 捕获高度可定制的网站快照。每月100次免费快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照，支持png、gif和jpg格式，包括整页截图，不限首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费层每天最多500页。自2017年起提供免费层。
  * [Webshrinker.com](https://webshrinker.com) — 提供网站截图和域名智能API服务。每月100次免费请求。
  * [thumbnail.ws](https://thumbnail.ws) — 生成网站缩略图的API。每月1,000次免费请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关/无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可开发 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是完全托管的一站式移动应用持续集成/持续交付平台。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供 500 分钟构建时长，使用 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于快速构建 Flutter 移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟(JS实现)

  * [JsLinux](https://bellard.org/jslinux) — 一个极速的x86虚拟机，可直接在浏览器中运行Linux和Windows 2000
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux及其他操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅适用于小型团队且仅限SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的一站式同意管理与合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限的隐私/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计与同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访问量限制下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据图谱。免费版含核心同意管理功能，并为经过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图片创建美观的截图，便于在社交媒体分享。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成精美图片（如用于Twitter/Facebook帖子）或链接（如用于聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估物联网设备。免费开发者计划支持5台设备，含免费云存储和数据存储。同时提供移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的笔记应用（PWA）。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于在Twitter或博客中展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标插件。
* [Codepng](https://www.codepng.app) - 为源代码生成精美快照，便于社交媒体分享。
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为截图用于社交媒体分享。
* [Cronhooks](https://cronhooks.io/) - 定时或周期性触发Webhook。免费版允许5个临时计划任务。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。免费版每月5次预约，含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单易用的URL/域名转发工具。免费版支持5个域名和每月20万次请求。
* [Elementor](https://elementor.com) — WordPress网站构建器，免费版含40+基础组件。
* [Exif Editor](https://exifeditor.io/) — 即时在线查看、编辑、清理、分析图片元数据（含GPS位置信息）。
* [Format Express](https://www.format-express.dev) - 即时在线格式化JSON/XML/SQL。
* [FOSSA](https://fossa.com/) - 第三方代码的端到端管理方案，涵盖许可证合规性与漏洞检测。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook支持：内置队列、退避重试和日志功能。免费版每日100次投递，14天留存，3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN、ISP、地理位置等托管信息，并提供多种DNS相关工具。
* [kandi](https://kandi.openweaver.com/) — 加速应用开发：通过代码片段和开源库复用快速构建自定义功能及完整应用。
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线Base64数据转换工具。
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/自定义Webhook接收GitHub、GitLab等平台的新版本通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看图片EXIF数据（含GPS位置信息）。
* [PDFMonkey](https://www.pdfmonkey.io/) — 在仪表板管理PDF模板，通过API动态生成PDF。免费版每月300份文档。
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode插件为代码片段生成可定制的美观截图。
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成模型/序列化代码，支持多种语言。将JSON转换为类型安全的优雅代码。
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成工具，用于保护应用/服务/设备安全。
* [ray.so](https://ray.so/) - 为代码片段创建美观图片。
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成工具。
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具，适用于营销与SEO。
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的轻量级重定向管理。免费版含10个源和每月10万次访问。
* [Renamer.ai](https://renamer.ai) — AI驱动的文件重命名工具，支持OCR和20+语言元数据提取。免费版每月15个文件，含桌面端批量重命名功能。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求，支持GET/POST/PUT/DELETE/HEAD方法及令牌认证，含基础请求保存功能。
* [Smartcar API](https://smartcar.com) - 车辆API：定位、油量/电量查询、里程记录、车门锁控制等。
* [snappify](https://snappify.com) - 开发者视觉创作工具，从代码片段到技术演示。免费版同时保存3个作品，含5次AI代码解释。
* [日出日落时间API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub订阅源服务，免费版功能较少。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷调查工具。免费版每份问卷限10个问题和100份回复。
* [Tiledesk](https://tiledesk.com) - 创建全渠道聊天机器人（从网站实时聊天到WhatsApp）。免费版不限机器人数量。
* [UUID生成器](https://newuuid.com/) - 即时生成UUID/GUID/NanoID等各类标识符，具备企业级性能与安全性。
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建自定义RSS订阅，免费版支持3个订阅源。
* [videoinu](https://videoinu.com) — 在线创建和编辑录屏视频。
* [Webacus](https://webacus.dev) — 开发者工具集：编解码、数据转换等。
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的免费GPU基准测试（WebGL），帮助开发者跨设备对比着色器性能。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
  * [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供大量教程和调色板资源
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D/3D资源市场，兼作艺术作品集展示平台
* [Rive](https://rive.app/community/) — 社区资源库，支持使用免费方案自主创建游戏素材
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型和PBR材质纹理库
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的2D/3D/音频/UI游戏素材
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（多分辨率）、模型、HDR环境贴图和笔刷，提供Blender等软件的免费导出插件
* [Freesound](https://freesound.org/) — 采用不同CC协议的协作式免费音效库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩解压、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [GitHub — 开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取沙盒环境、工具等资源来开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期（通过遥测数据算法评估）
* [PHPhub](https://phphub.net/) — PHP工具集合，包含格式化器、验证器、沙盒、正则测试器等
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（含RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书资源
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — 面向DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代风格免费管理后台模板、HTML主题和UI套件，加速应用开发
* [Web.Dev测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具集，支持编解码/代码压缩美化/生成测试数据等，提供愉悦界面体验
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，免费版支持无限导入器创建和100MB文件上传
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮样式
* [WrapPixel](https://www.wrappixel.com/) — 下载基于Angular/React/VueJs/NextJS/NuxtJS的高质量免费/付费管理后台模板
* [Utils.fun](https://utils.fun/en) — 完全离线的日常/开发工具集（水印生成/屏幕录制/编解码/加解密/代码格式化等），数据不上云处理
* [IT工具集](https://it-tools.tech/) - 面向开发者和IT从业者的实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的效率工具集（Markdown编辑器/代码压缩美化/二维码生成/OG生成器等）
* [regex101正则测试](https://regex101.com/) — 免费正则表达式在线调试平台，附带学习文档资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart](https://adminmart.com/) — 基于Angular/Bootstrap/React/VueJs/NextJS/NuxtJS的高质量免费&付费管理模板
* [Glob模式测试器](https://globster.xyz/) — 可视化设计测试glob模式的学习平台
* [SimpleRestore](https://simplerestore.io) - 免代码MySQL备份恢复工具，支持远程数据库直接还原
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具（含实时语音/YouTube字幕生成），适合短视频处理
* [QRCode最佳实践](https://qrcode.best/) - 13种模板的隐私友好型二维码生成器，支持追踪像素/项目分类/无限团队席位
* [PostPulseAI](https://PostPulseAI.com) - 通过AI生成SEO优化内容提升网站排名，免费版每月可手动发布1篇内容
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集（网站政策生成/社交媒体文案/网页快速创建）
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费直观的MySQL EXPLAIN输出分析工具
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习平台（Linux/Kubernetes/DevOps/编程等）
* [Axonomy发票工具](https://axonomy-app.com/) - 免费版每月可创建10张发票的在线管理工具
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**