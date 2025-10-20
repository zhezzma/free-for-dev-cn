# free-for.dev

如今，开发者和开源作者可以享受众多提供免费层级的服务，但要全面了解这些服务并做出明智选择需要耗费大量时间。

这里整理了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单特别聚焦于基础设施开发者（系统管理员、DevOps从业者等）可能觉得实用的资源。我们虽然喜爱所有免费服务，但仍希望保持主题相关性。这条界限有时比较模糊，因此清单内容带有主观判断；若未能采纳您的贡献，还请见谅。

这份清单汇集了1600多位人士提交的Pull Requests、评审意见、创意和实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加新服务，或移除已变更或终止的服务项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅包含服务化（as-a-Service）产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用版）。若采用时间分段模式，免费层级至少需持续一年。我们也会从安全角度评估免费层级——支持SSO的服务可以入选，但将TLS功能限制在付费层级的服务不予收录。

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
  * [Flutter相关与无Mac开发iOS应用](#Flutter相关与无Mac开发iOS应用)
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
  * [基于浏览器的硬件模拟](#基于浏览器的硬件模拟)
  * [远程桌面工具](#远程桌面工具)
  * [游戏开发](#游戏开发)
  * [其他免费资源](#其他免费资源)

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，9个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB从北美到所有区域目的地的网络出口流量（不包括中国和澳大利亚）
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简的dev-test环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译器、人脸检测、机器人等），包含有限交易的免费层
    * [Cognitive Search](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索和索引服务，10,000个文档免费
    * [Azure Kubernetes Service](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [Event Grid](https://azure.microsoft.com/services/event-grid/) - 每月100K操作
    * 完整详细列表 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个基于AMD的计算VM，每个1/8 OCPU和1GB内存
       - 4个基于Arm的Ampere A1核心和24GB内存，可用作1个VM或最多4个VM
       - 实例在[被视为空闲](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)时将被回收
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
    * [应用服务](https://www.cloudflare.com/plans/) - 无限数量域名的免费DNS，DDoS保护，CDN及免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费不限量速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，三个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 可视化构建和管理端到端云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含1台部署服务器和1个静态站点），无需操心"服务器相关事务"，提供在任意云上构建、部署和发展应用所需的一切
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Terraform自动化与协作平台(TACO)，用于改进Terraform管理的基础设施和配置的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上自动化部署。免费版支持单个开发者无限制部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户可享无限量公共及私有Git仓库，含CI/CD流水线功能
* [chiselapp.com](https://chiselapp.com/) — 无限量公共与私有Fossil代码仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB存储空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目无限量公共/私有Git仓库（协作者不限），基于[Forgejo](https://forgejo.org/)。静态网站托管支持[Codeberg Pages](https://codeberg.page/)，CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)，翻译托管使用[Codeberg Translate](https://translate.codeberg.org/)。包含软件包/容器托管、项目管理和问题追踪
* [GitGud](https://gitgud.io) — 无限量公共/私有仓库永久免费（基于GitLab & Sapphire，不提供CI/CD）
* [GitHub](https://github.com/) — 无限量公共仓库及私有仓库（协作者不限），含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手
* [gitlab.com](https://about.gitlab.com/) — 无限量公共/私有Git仓库（最多5名协作者），含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab搭建的代码托管平台，含CI、静态页面、项目页和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发仓库与工具集（含专属Ionic仓库）
* [NotABug](https://notabug.org) — 自由许可证项目的Git代码协作平台
* [OSDN](https://osdn.net/) — 面向开源开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — FOSS许可项目的Git代码协作平台
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云存储，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) — 无限量免费开源分布式版本控制系统，基于创新的补丁理论，解决git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 面向个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git/SVN）含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管，无限量公共/私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) — GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) — 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
* [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。现成的爬虫、集成代理和自定义解决方案。免费计划每月包含5美元平台积分。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier和Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端所需的所有工具，包括自动API合约验证和监控。免费计划覆盖每天最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月最多50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和根因分析，如数据质量和性能漂移。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3个席位）永久免费。
* [Beeceptor](https://beeceptor.com) - 秒级模拟REST API，伪造API响应等。每天50次免费请求，公共仪表板，开放端点（任何拥有仪表板链接的人都可以查看提交和响应）。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费每月1k积分，相当于1k并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1k请求。
* [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检测数据等。免费层包括每月100次请求，覆盖所有9个端点。
* [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划包括每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划包括每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API，用于自定义人脸识别和检测。可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用API平台，完整访问广泛的API库，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
* [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据谱系，覆盖从训练到生产的整个工作流程。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可从任何前端构建、下单和管理订单。开发者计划允许每月100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLMs的集成平台。集成200多个工具，覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
* [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层包括每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用之间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限制为一个用户、一个数据连接、一个数据源和一个数据目标。还需要手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1000次调用免费。
* [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划包括每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划包括每月5,000次调用。
* [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，将其组织为一致的定义，并交付给每个应用。使用Cube Cloud是最快的方式，其免费层限制为每天1,000次查询。
* [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据在访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
* [Data Fetcher](https://datafetcher.com) - 无需代码即可将Airtable连接到任何应用或API。Postman式界面，用于在Airtable中运行API请求。预建集成数十个应用。免费计划包括每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 用于连接、清理和导入数据到Salesforce的工具。免费计划包括每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包括10 GB存储和每月120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1k请求。CC-BY 4.0许可下的精简数据库也是免费的。

  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费计划支持每月最多10名活跃用户(MAU)并追踪4张人脸
* [Deepnote](https://deepnote.com) - 新型数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费层包含无限个人项目、基础机型(5GB内存+2vCPU)无限制使用，团队最多3名编辑者。
* [Disease.sh](https://disease.sh/) — 提供准确新冠数据的免费API，用于构建相关应用。
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费计划每月允许生成250份文档。
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的托管API，用于生成和私有存储PDF及截图。免费计划每月允许400次PDF/截图生成。
* [drawDB](https://drawdb.app/) — 无需注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 面向移动端、网页和物联网应用的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储系统或外部服务后，可立即生成包含实时文档和用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20次积分。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费计划每月50次API调用并可使用模板库。
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台。可视化任意计算图。本地使用免费。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。免费试用包含2个项目，每个项目10张表。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端。
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费计划每月250页，用户不限，支持3个模板。
* [file.coffee](https://file.coffee/) - 单文件最大15MB的存储平台(注册用户30MB)。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。根据订单参数识别所有潜在欺诈特征。免费微型计划每月500笔交易。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的定位服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费计划每日2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图像和5个模板。
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作数据平台。免费社区版最多5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，帮助产品轻松提供webhook功能。免费版每日100次事件分发，历史记录保留7天。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 为Pytorch/TensorFlow/JAX构建、训练和部署NLP模型。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4(通常用于Power BI/Power Query)访问70多个云平台如Exact Online/Twinfield等。含数据复制交换功能。开发者与实施顾问免费计划，特定平台有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，无需API密钥，免费版同一IP每分钟限45次请求。
* [ipbase.com](https://ipbase.com) - IP定位API - 永久免费计划每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API - 开发者永久免费计划每日1,000次请求限制。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API - 允许1,000次免费请求。
* [IPLocate](https://www.iplocate.io) — IP定位API，免费每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP关联企业等信息。同时提供可下载的IP与国家/ASN对应CSV或GeoIP兼容MMDB格式数据库。
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务。LITE数据库可免费下载，支持本地查询城市/坐标/ISP信息。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP定位API。获取城市/坐标/ISP/ASN等数据。免费计划每月5万积分。另提供500次免费WHOIS和托管域名查询服务。
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的可靠IP定位API。免费层每月3万次查询(每日1k)无需注册。
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP地址API，具备顶级主机检测能力。免费计划提供1,000次无注册查询。
* [IPinfo](https://ipinfo.io/) — 快速准确的免费(每月5万次)IP数据API。提供地理位置/企业/运营商/IP范围/域名/滥用联系人等详细信息API。所有付费API可免费试用。
* [IPQuery](https://ipquery.io) — 无速率限制和费用的开发者无限IP API。
* [IPTrace](https://iptrace.io) — 极简API，每月5万次免费查询提供可靠IP定位数据。
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址。免费层无需注册，支持通过CORS直接在浏览器端JS调用。适用于监控客户端和服务端IP变更的服务。请求无限制。
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON对象并作为REST API使用的服务。

  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss是一款强大的在线JSON查看器、编辑器和验证工具。通过AI驱动的修复功能，支持格式化、可视化、搜索和操作JSON数据，提供树状视图、表格视图，可生成12+种编程语言的代码，并能将JSON转换为CSV、XML、YAML、属性文件等格式。
* [konghq.com](https://konghq.com/) — API市场及强大的私有和公共API工具。免费版功能如监控、告警和支持有限。
* [Kreya](https://kreya.app) — 免费的gRPC GUI客户端，用于调用和测试gRPC API。支持通过服务反射导入gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过使用正确的数据提升机器学习模型性能。免费提供最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月可验证100次。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等实时和历史金融数据。永久免费API层允许每天100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预报天气数据。预报基于机器学习结合多天气模型以提高准确性。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取能力或截图服务。每天50次免费请求。
* [Mindee](https://developers.mindee.com) – Mindee是一款强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用工作流程。免费层每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式 playground。免费支持1名编辑。
* [MockAPI](https://www.mockapi.io/) — MockAPI是一款简单工具，可快速模拟API、生成自定义数据并通过RESTful接口执行操作。适用于原型设计/测试/学习。每个项目免费支持1个项目/2个资源。
* [Mockfly](https://www.mockfly.dev/) — Mockfly是值得信赖的API模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) - 可创建与GitHub仓库同步的模拟GraphQL和REST API的工具。简单REST API无需注册即可免费开发和使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，选择在云端模拟的端点并检查流量，免费。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义HTTP响应以模拟HTTP请求的简单Web应用。也提供[开源版本](https://github.com/julien-lafont/Mocky)。
* [Mock N Roll](https://mocknroll.me/) - 免费模拟API服务——无需后端延迟即可模拟真实API响应的强大工具。适合前端开发、QA测试和DevOps团队。[仓库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和Docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简单工具，检查多节点出口IP地址，了解IP在不同全球区域和服务中的表现。适用于测试基于规则的DNS拆分工具如Control D。
* [Namekit](https://namekit.app/) - AI驱动的域名发现——即时查找可用标准价格域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻，获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API - 每月100次免费请求。
* [OCR.Space](https://ocr.space/) — OCR API解析图像和PDF文件，以JSON格式返回文本结果。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 免费可视化创建Open API 3定义。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费支持5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF、邮件提取数据。AI驱动。完整API访问。
* [PDFBolt](https://pdfbolt.com) - 面向开发者的PDF生成API，注重隐私。提供Stripe风格文档，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 轻松将HTML或URL转为PDF的简单API。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费计划包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过API执行。支持热图和折线图可视化。
* [Postman](https://postman.com) — 通过协作平台Postman简化工作流并更快创建更好API。Postman应用永久免费。Postman云功能也有永久免费限制版。
* [Insomnia](https://insomnia.rest) - 开源API客户端，用于设计和测试API，支持REST和GraphQL。
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包括5个部署工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管的Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop提供10倍易用的AI网络爬取，接近零采用时间，节省现有工作流85%+时间，比手动研究快4倍且无妥协，包含所有研究任务的REST API端点。每月前1000积分免费。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API。ProxySentry.io在rapidapi.com上提供每月10k次请求的免费层。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) - 全球最大API中心，数百万开发者连接数千API，通过趣味挑战（含解决方案！）和交互示例进行API开发。
* [Rendi](https://rendi.dev) - FFmpeg API - FFmpeg的REST API，无需处理基础设施即可在线运行FFmpeg。免费层包含月度处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费端点接收HTTP请求。发送到该端点的任何HTTP请求将记录相关负载和标头，便于观察来自Webhook和其他服务的建议。
* [reqres.in](https://reqres.in) - 免费托管的REST-API，随时响应AJAX请求。

  * [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特酷炫图片的Web服务
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API爬虫工具。匿名抓取数据，无需担心限制、封锁或验证码。每月前100次成功抓取免费（含JavaScript渲染），联系客服可获更多额度
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬虫API与免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度
* [ScrapX](https://www.scrapx.io/) — 监控目标网站视觉/文本变化及数据提取。免费版每月支持5个URL
* [Simplescraper](https://simplescraper.io) — 每次操作后触发webhook。免费计划包含100次云端抓取额度
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析与归档数据。免费轻量版支持2个数据源/1,000张表/25个用户
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费计划包含每表1,000行额度
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能。免费版每月100次API请求
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API。返回Google/YouTube/Bing/百度/Walmart等平台的结构化JSON数据。免费版每月100次成功调用
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供高效开发工具。免费版含300处理单元/月，支持浏览器上传/数据隔离/熔断机制/任务提醒
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API。无需信用卡，免费版含2个API/2,500次调用/月
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费、隐私优先的在线工具，浏览器内即可将CSV转为结构化JSON
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，含格式化器/验证器/正则测试器/假数据生成器/交互式数据库沙盒
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费版提供设计/模拟/文档工具
* [Supportivekoala](https://supportivekoala.com/) — 通过模板自动生成图像。免费版每月50张
* [Svix](https://www.svix.com/) - Webhook即服务。免费版每月50,000条消息
* [Tavily AI](https://tavily.com/) - 在线搜索与研究API，可整理研究成果。免费版1,000次请求/月（无需信用卡）
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费查询。提供国家/城市/区域等位置信息
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 免费天气API。提供全球覆盖的精准预报/历史数据/监测方案
* [Treblle](https://www.treblle.com) - API全生命周期管理平台。含日志聚合/可观测性/文档/调试功能。免费版每月250,000次请求
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币实时汇率API。免费版无限调用，适合开发者与金融应用
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月150次免费验证
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API（实时/逐时/每日预报/警报）。融合AI模型提升预测精度。免费版10,000次调用/月
* [WebScraping.AI](https://webscraping.ai) - 内置解析/Chrome渲染/代理的简易爬虫API。每月2,000次免费调用
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪/数据集版本控制/模型管理加速开发。个人项目免费版含100GB存储
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版每月25,000token（约10个PR）
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识算法库
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转为参数化API。每月30,000次调用
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器/住宅IP的爬虫API。每月1,000次免费调用，学生与非营利组织可获额外额度
* [Zipcodebase](https://zipcodebase.com) - 全球邮政编码API。每月5,000次免费查询
* [Zipcodestack](https://zipcodestack.com) - 邮政编码验证API。每月10,000次免费请求
* [Zuplo](https://zuplo.com/) - API管理平台（设计/部署/边缘发布）。分钟级配置API密钥认证/限流/文档/商业化。免费版支持10个项目/无限生产环境/100万请求/10GB出口流量
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位数据结构差异
* [FreeIPAPI](https://freeipapi.com) - 免费高速IP地理定位API（商业/非商业用途），支持JSON格式

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公有Maven及PyPi仓库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源项目免费。
  * [jitpack.io](https://jitpack.io/) — GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) — 1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有及公有制品仓库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公开项目、5GB存储、基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公开项目免费计划。
  * [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅供个人使用的自托管版本。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人与团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费使用，支持无限用户、完整历史记录与集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 智能匹配会议最佳时间，操作简单，适用于各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与日程安排工具。免费版支持1个日历连接和无限场次会议，提供桌面端与移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的多功能聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队实时Scrum扑克估算工具，无限成员免费使用，加速用户故事点评估
* [Telegram](https://telegram.org/) — 为所有人提供快速可靠的消息与通话服务。大容量群组、用户名系统、桌面客户端和强大文件分享功能特别适合商业用户与小团队
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度与社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队沟通协作平台。集成IDE配对编程、终端共享、音视频通话及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件。免费版每月包含10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与多人协作
* [Fibery](https://fibery.io/) — 互联工作空间平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队沟通工具。免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台。通过可定制虚拟空间实现真实社交体验，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册语法式看板工具，无功能限制完全免费
* [flat.social](https://flat.social) - 可定制互动空间，适用于团队会议与社交活动。会议数量无限制，免费支持8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub团队每日提交与PR活动报告工具。含推送可视化、同伴认可系统及自定义提醒功能，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub生态聊天工具，25人以下团队可免费创建无限公私聊房间
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作编辑工具。类似Google Docs的Markdown文件处理，私有笔记协作人数与模板功能有所限制
* [hangouts.google.com](https://hangouts.google.com/) — Google账户即可使用的全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间线与视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频技术支持平台，免费版不含分析、加密及支持服务
* [ideascale.com](https://ideascale.com/) — 创意收集与投票平台，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 内部文档博客日历共享门户，10人以下团队免费
* [Keybase](https://keybase.io/) — 开源Slack替代方案，为家庭、社区和企业提供安全通讯与文件共享
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的入会体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道/私聊中输入/meet发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理系统，支持标签分类与多工作区协作。免费版含4个工作区和10个成员席位
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目协作平台，实现无缝工作流
* [Lockitbot](https://www.lockitbot.com/) — Slack内共享资源（会议室/开发环境/服务器等）预约锁定工具，免费支持2个资源
* [MarkUp](https://www.markup.io/) — 网站/PDF/图片可视化批注反馈工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享与通行密钥的密码管理器，支持全平台使用
* [Visual Debug](https://visualdebug.com) - 提升客户-开发沟通效率的可视化反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键发起视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容与应用的数字化协作中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的分布式团队协作白板工具，企业级安全与跨设备支持，提供免费方案
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务/维基/数据库的Markdown笔记协作应用，全平台可用的全能工作区
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含核心功能、50个条目与5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天/画板/在线编译器的技术面试平台，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁团队时间追踪应用，免费版支持10人使用时间记录与报告生成
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加可视化评审功能，无需部署网站。免费版每月10个页面与100MB总存储
* [Pendulums](https://pendulums.io/) - 直观易用的免费时间追踪工具，提供有价值的数据统计
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户与完整消息历史

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、语音视频通话，并能轻松与其他服务集成。
* [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整历史记录。
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB空间。
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告。
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作。完全免费。
* [Slab](https://slab.com/) — 面向团队的现代知识管理服务，免费支持最多10名用户。
* [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
* [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务提供商的状态页。
* [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记。免费版支持3个面板、无限用户和1GB存储。
* [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
* [talky.io](https://talky.io/) — 免费群组视频聊天。匿名点对点连接，无需插件、注册或付费。
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum实现，含时间追踪功能。免费支持5用户和3个项目组合。
* [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会优化开发流程，包含完整的远程团队休假管理。小团队（≤5人）免费。
* [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费。
* [TeleType](https://teletype.oorja.io/) — 共享终端、语音、代码、白板等。开发者端到端加密协作无需登录。
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪软件，轻松集成Jira/Trello/Asana等项目管理工具。
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代品），无限用户，每工作区10GB存储和10GB音视频流量。
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一站式项目管理应用。
* [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理清晰。提供免费无限版，合格团队可享折扣。
* [tldraw.com](https://tldraw.com) — 免费开源白板与图表工具，含智能箭头、吸附、便签和SVG导出功能。支持多人协作编辑，另有官方免费VS Code扩展。
* [BookmarkOS.com](https://bookmarkos.com) - 免费全能书签/标签/任务管理器，基于可定制云桌面支持文件夹协作。
* [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意
* [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织享Nano级免费套餐。
* [whereby.com](https://whereby.com/) — 一键视频通话（原appear.in），永久免费
* [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区。
* [vadoo.tv](https://vadoo.tv/) — 极简视频托管与营销平台。单键上传视频，支持录制/管理/分享等功能。免费版每月10个视频、1GB存储和10GB带宽。
* [userforge.com](https://userforge.com/) - 互联在线角色画像与用户故事映射工具，保持设计与开发同步。免费支持3个角色和2名协作者。
* [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频额度含品牌播放器
* [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务。无限次分享≤5GB文件给任意数量接收者。
* [Wormhole](https://wormhole.app/) - 端到端加密分享≤5GB文件（有效期24小时），大文件采用P2P直传。
* [zoom.us](https://zoom.us/) — 安全视频会议工具，免费版限时40分钟。
* [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版含1万条历史消息和5GB文件存储，另提供可自托管开源版本。
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件。免费体验云功能并实现简单自动化：每月240分钟机器人时长、10次助手运行和100MB存储。
* [Fleep.io](https://fleep.io/) — Slack替代品，小团队免费版含完整消息历史、无限私聊、1个群组对话和1GB存储。
* [Chanty.com](https://chanty.com/) — 另一款Slack替代方案，永久免费支持10人小团队：无限公私对话、可搜索历史、无限1对1语音通话、语音留言、10个集成和20GB团队存储。
* [ruttl.com](https://ruttl.com/) — 全能数字反馈工具，支持网站/PDF/图片评审。
* [Mattermost](https://mattermost.com/) — 技术团队安全协作平台。免费版含无限频道/剧本/看板/用户和10GB存储。
* [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，直接在实时网站/Web应用/图片/PDF/设计文件上开展开发协作。
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台。
* [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人参会（单次40分钟）。
* [RingCentral](https://www.ringcentral.com/) — 视频会议平台，免费版支持100人参会（单次50分钟）。
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台，涵盖产品文档/内部知识库/API文档等。个人开发者免费。
* [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件。
* [paste.sh](https://paste.sh/) — 基于JavaScript与加密的简易粘贴站点。

  * [腾讯实时音视频(TRTC)](https://trtc.io/) — 提供群组音视频通话解决方案，首年每月赠送10,000分钟免费时长
* [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴平台，支持客户端加密/多标签粘贴/API接口/语法高亮编辑器等特性
* [SiteDots](https://sitedots.com/) - 直接在网站项目上收集用户反馈，无需模拟器/画布或变通方案，免费版功能完整

* [Cushion](https://cushion.so/) - 面向分布式小团队的异步协作工具，免费版支持30条消息/5名成员及不限量访客

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal站点托管服务。提供开发者免费套餐，同时可获取免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API，免费社区空间包含5个用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS及API工具包，为开发者提供免费个人方案。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统，内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月带宽和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层级的GraphQL架构CMS，基础版每月10万次API调用。
* [Directus](https://directus.io) — 开源无头CMS，完全免费且无限制，支持本地或云端管理资产与数据库内容。
* [FrontAid](https://frontaid.io/) — 将JSON内容直接存储于Git仓库的无头CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，开发者计划包含2个用户、无限项目（每个项目2个环境）、500条内容、2种语言及API支持。
* [Prismic](https://www.prismic.io/) — 无头CMS，社区计划为单个用户提供无限API调用、文档、自定义类型和资源。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，免费套餐包含无限项目、3个非管理员用户、50万次API调用和5GB资源存储。
* [sensenet](https://sensenet.com) - API优先的无头CMS，开发者计划支持3个用户、500条内容及完整REST API访问。
* [TinaCMS](https://tina.io/) — 开源Git驱动的无头CMS，免费基础版支持2个用户，兼容Markdown/MDX/JSON。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，可对接任何CMS/API/数据库构建无头网站。
* [Hygraph](https://hygraph.com/) - 小型项目免费层级的GraphQL原生无头CMS。
* [Squidex](https://squidex.io/) - 基于事件溯源的开源无头CMS，提供免费层级。
* [InstaWP](https://instawp.com/) - 秒级WordPress站点部署，免费版含5个活跃站点、500MB空间及48小时有效期。
* [Storyblok](https://www.storyblok.com) - 开发者与营销人员适用的无头CMS，社区版含2500个资源管理和250GB/月流量。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress，免费套餐含1台服务器、2个站点及无限定时任务。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，无需信用卡即可获取自定义域名。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的无代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量 API 和路由，支持深度集成。免费方案包含 3 个项目、5 张数据表和 Google 插件支持。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是智能编程助手，通过 AI 技术和对代码库的深度理解，帮助开发者更快编写和理解代码。支持多款 LLM（含本地推理）、兼容主流 IDE、覆盖所有热门编程语言，并提供免费方案。免费用户每月可获得 20 条聊天消息（使用 Claude 3 Sonnet 模型）和 500 次自动补全（基于 Starcoder 16b 模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 的创新代码生成技术，将 Figma 设计稿无缝转化为动态 Flutter 和 React 应用，优化工作流程，助您以前所未有的速度打造卓越的移动端和网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 专为 C# 设计。Metalama 在编译时动态生成样板代码，保持源代码整洁。开源项目免费使用，商业友好型免费版包含 3 个切面功能。
  * [Supermaven](https://www.supermaven.com/) — Supermaven 是面向 VSCode、JetBrains 和 Neovim 的极速 AI 代码补全插件。免费版提供无限行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习洞察，帮助开发者更快打造优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0 利用 AI 模型根据简单文本提示生成代码。基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，新用户初始获得 1200 积分，每月还可领取 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1个用户和100 MB存储空间的1个代码库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有代码库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有库（最多4名协作者）免费，学生和教育机构也可免费使用
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版包含无限用户、公有代码库和1个私有库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) - 基于开发者工作模式优先处理技术债务，可视化团队耦合和系统掌握度等组织因素，开源项目免费
* [CodSpeed](https://codspeed.io) - CI流水线中的自动化性能追踪。通过精准一致的指标在部署前发现性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) - 每月5次免费网站性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷、安全漏洞、性能和API问题。实时分析支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源项目和最多30名开发者的私有库免费
* [deepscan.io](https://deepscan.io) — 高级静态分析自动发现JavaScript代码运行时错误，开源项目免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库和SQL查询的关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub代码库的Gerrit审查服务
* [gocover.io](https://gocover.io/) — 任何[Go](https://golang.org/)包的代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化的头号静态代码分析器，自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。提供框架迁移/带修复的代码分析/大规模代码转换，开发者可专注创新而非维护旧代码，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub代码库审查工具，公有或个人库免费
* [parsers.dev](https://parsers.dev/) - 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub PR和提交差异分析，公有库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和最多5名成员的组织免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证和多设备支持
* [zoompf.com](https://zoompf.com/) — 网站性能优化与深度分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供代码片段管理、发现与分享功能，包含强大的代码截图工具（预设模板+链接功能）

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — 将自动化网页无障碍测试集成到开发流程中。开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化构建、测试和发布移动应用，加速发布周期。免费版每构建最多30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的CD服务，开源免费
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云上设置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 几分钟内在您的云上部署应用和基础设施。支持Kubernetes和Lambda环境上的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD，支持原生或混合应用。每月200次免费构建，10分钟构建时间和2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD，免费5个项目和1个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线，免费3个用户和每月5k任务分钟。测试分析免费开发者层包括每月100k测试执行，开源项目有更多免费包含。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
* [CircleCI](https://circleci.com/) — 包含所有功能的综合免费计划，托管CI/CD服务支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级CI/CD功能。每月最多6000分钟执行时间，无限协作者，私有项目30个并行任务，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，1个环境，共享服务器，无限公共仓库
* [codemagic.io](https://codemagic.io/) - 每月500免费构建分钟
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源无限
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30构建分钟）
* [drone](https://cloud.drone.io/) - Drone Cloud让开发者能在单一平台运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线
* [LayerCI](https://layerci.com) — 全栈项目CI。一个全栈预览环境，5GB内存和3个CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源免费，每月100次私有构建
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限公共和私有仓库，VM大小最多2 GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库
* [Mergify](https://mergify.com) — GitHub工作流自动化和合并队列 — 公共GitHub仓库免费
* [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用和自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层100 Mb，1000次操作，最小间隔15分钟。
* [Shipfox](https://www.shipfox.io/) - 让GitHub Actions运行速度提升2倍，每月免费3,000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，Open Policy Agent持续资源合规，SAML 2.0 SSO，访问公共工作池：每月最多200分钟
* [microtica.com](https://microtica.com/) - 使用现成基础设施组件启动环境，免费在AWS上部署应用，支持生产工作负载。免费层包括1个环境（在您的AWS账户上），2个Kubernetes服务，每月100构建分钟和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割e2e测试运行加速CI上的monorepos。免费计划最多30个贡献者，包含慷慨的150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月免费3,000分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具如Terraform、OpenTofu和Terragrunt的编排和管理平台。最多2个用户免费，包含所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，分层运行有序操作。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。几乎可与所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费，单用户免费版每周有有限的检查点。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上直接在浏览器中测试您的Android和iOS应用。免费版每月包含两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一套持续基准测试工具套件，用于捕捉CI性能回归。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上免费运行无限次测试。额外月费可获得云监控和CI/CD集成。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于Monitoring as Code工作流和Playwright。开发者享有慷慨的免费层。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，检查API是否针对给定域启用了CORS并识别差距。获取可操作的见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试工具。Cypress Test Runner始终免费开源，无限制。Cypress Dashboard对开源项目免费，最多5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地注入故障以发现弱点，避免影响客户。Gremlin Free支持在最多5台主机或容器上执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费计划支持最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或存根（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费计划支持最多10分钟测试文件，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费版每月模拟最多50并发用户，持续60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事及Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，7,000快照/月。
* [octomind.dev](https://www.octomind.dev/) - 自动生成、运行和维护Playwright UI测试，含AI辅助测试用例生成
* [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费计划每日10次测试、每周5次实验、每月最大15GB数据摄入。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，5,000快照/月。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷及衡量影响。免费层包含所有核心功能，500MB附件存储和最多3用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费版限10次iOS和10次Android测试，但包含付费版大部分功能，如无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费层最多10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源及改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试（每次最多3分钟）。发现错误？可复制测试唯一URL向开发者展示如何复现。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费版包含Jira集成、无限项目、CSV/XLSx测试用例导入、时间跟踪及1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台，支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook，支持转发至本地或历史记录回放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展UI，集成工具链、组件和设计系统以加速迭代、优化设计并简化开发流程。无限项目支持，含五年免费维护期。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 通过唯一URL调试检查webhook和HTTP请求，完全免费且支持无限URL创建与接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证webhook、外发HTTP请求或电子邮件，临时URL及邮箱地址永久免费。
  * [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、EOL等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名检测。
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 发现网络中遭入侵的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾过滤服务。免费计划每个域名每天200次请求。
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式（测试版）。
* [cloudsploit.com](https://cloudsploit.com/) — AWS安全性与合规性审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可公证代码/文件/目录/容器
* [crypteron.com](https://www.crypteron.com/) — 面向.NET和Java应用的云原生安全平台，防止数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具即可编解码数据的简易Web工具，如同密码学瑞士军刀。所有功能免费无限制，支持自托管开源版本。
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及组织策略来防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby/JavaScript/Python/PHP/Elixir/Rust/Java(.NET/Go/Elm/Docker/Terraform/Git子模块/GitHub Actions)的依赖项
* [DJ Checkup](https://djcheckup.com) — Django站点安全漏洞自动扫描工具（基于Pony Checkup二次开发）
* [Doppler](https://doppler.com/) — 支持同步到多云的通用密钥管理器，免费版支持5个用户基础权限控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享，免费支持3人团队
* [GitGuardian](https://www.gitguardian.com) — 自动检测并修复代码中的350+种密钥和敏感文件，25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — Web应用/服务器/网络漏洞扫描器，每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境的全流程管理，5名开发者内免费
* [Internet.nl](https://internet.nl) — 测试IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
* [meterian.io](https://www.meterian.io/) - 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项漏洞，1个私有项目免费，开源项目不限量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 检测并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25用户30天历史记录
* [openapi.security](https://openapi.security/) - 无需注册即可快速检测OpenAPI/Swagger接口安全性的免费工具
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人自动提交PR修复Java代码漏洞（即将支持多语言）
* [pyup.io](https://pyup.io) — Python依赖项漏洞监控及自动更新，1个私有项目免费，开源项目不限量
* [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞及OWASP风险
* [report-uri.io](https://report-uri.io/) — CSP和HPKP违规报告
* [seclookup.com](https://www.seclookup.com/) - 通过API丰富SIEM中的域名威胁指标，提供50,000次免费查询额度[点击获取](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 开源项目不限次漏洞检测与修复，私有项目每月200次检测限额
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案，含应用和CLI防火墙工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目不限次SCA扫描，在发布前检测修复安全威胁
* [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化扫描应用漏洞，单个应用支持不限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站的免费安全检测/防火墙(WAF)服务，注册用户可获邮件通知
* [TestTLS.com](https://testtls.com) - 不限HTTPS的SSL/TLS服务安全配置检测
* [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，3个用户内免费
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版支持每周XSS检测
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密与自动密钥管理，免费支持1个应用每月100万次加密
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全工具，250用户内免费
* [Vulert](https://vulert.com) - 无需安装或代码访问即可持续监控开源依赖项漏洞，开源项目免费

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个GitHub公开仓库、代码片段、议题和评论中泄露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用程序和API提供细粒度授权服务。免费额度包含1000名月活跃用户和100个授权器实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端应用SDK。免费额度包含1000名月活跃用户和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式单点登录服务。免费计划包含25,000名月活跃用户、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP验证、双因素认证(2FA)和单点登录(SSO)。包含完整前端组件。免费额度5000名月活跃用户。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商集成（包括Facebook、Google、Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)解决方案，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。提供细粒度权限控制，免费额度100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理系统，包含认证、2FA/MFA功能，提供预构建的登录/注册/个人资料等UI组件。免费额度10,000名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费额度100名用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) - 为新旧应用添加优先使用通行密钥(passkey)的认证方案。不限月活跃用户数。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，支持无代码和API/SDK两种方式。免费额度7,500名月活跃用户/50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 为网站或应用提供双因素认证(2FA)服务。免费支持10名用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，数分钟即可集成。免费额度7,500名月活跃用户。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)方案，免费支持10名用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动端应用实现无密码认证方案。
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权服务。免费额度100名月活跃用户。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)与单点登录提供商，免费支持3个企业应用和5个个人应用（不限用户数）。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，支持无限团队成员、200名日活跃用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC权限模型，提供实时更新和无代码策略界面。免费额度1000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理方案。免费域支持1000名用户和10个SSO连接，包含增强版Keycloak容器（集成[组织管理](https://phasetwo.io/product/organizations/)扩展）。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业级SSO。免费计划包含不限量月活跃用户和组织，2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 一体化认证与反欺诈平台，提供API和SDK。免费计划包含10,000名月活跃用户、不限量组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开源易用的认证方案，5分钟快速入门。可免费自托管，SaaS版本提供1万名免费月活跃用户。
* [SuperTokens](https://supertokens.com/) - 开源用户认证系统，原生集成到应用中。免费额度5000名月活跃用户。
* [Warrant](https://warrant.dev/) - 企业级授权与访问控制服务。免费层包含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度25,000次认证请求，包含所有安全功能（OTP/无密码登录/策略等功能无付费墙）。
* [PropelAuth](https://propelauth.com) - 快速为企业客户构建认证系统，免费额度200名用户和1万封事务邮件（含"Powered by PropelAuth"水印标识）。
* [Logto](https://logto.io/) - 用户身份开发与安全管理平台（包含认证和授权功能）。免费额度5000名月活跃用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万名月活跃用户。包含邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您首选的移动应用测试平台，确保应用正常运行。免费计划包含：1个应用、分析功能、无限版本与安装、反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费计划包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费计划包含：无限制上传、私有链接（访客2天有效期/注册用户60天有效期）。
* [GetUpdraft](https://www.getupdraft.com) - 移动应用测试分发平台。免费计划包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包含：5个应用、每月50次下载、最大文件100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM开发运维平台。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器管理与部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。免费层级支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、10,000条排队消息，支持多可用区节点部署。
  * [courier.com](https://www.courier.com/) — 统一推送、应用内消息、邮件、聊天、短信等多渠道通知API，含模板管理等功能。免费套餐每月10,000条消息。
  * [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件、推送、短信、产品导览、横幅等）。每月最多1,000名活跃用户免费。
  * [engagespot.co](https://engagespot.co/) — 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 连接MQTT设备至云原生物联网消息代理。永久免费支持100台设备连接（无需信用卡）。
  * [knock.app](https://knock.app) – 开发者通知基础设施。通过单次API调用发送应用内、邮件、短信、Slack和推送等多渠道消息。免费套餐每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 5分钟为任何软件添加用户通知。免费套餐含10,000条通知/月+100条短信和自动语音呼叫。
  * [Novu.co](https://novu.co) — 开源通知基础设施。统一管理邮件、短信、站内信、应用内和推送的组件与API。免费套餐30,000条通知/月，保留90天数据。
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持100个同时连接和20万条消息/天。
  * [scaledrone.com](https://www.scaledrone.com/) — 实时消息服务。免费支持20个同时连接和10万次事件/天。
  * [synadia.com](https://synadia.com/ngs) — [NATS.io](https://nats.io)托管服务。覆盖全球及AWS/GCP/Azure。永久免费套餐含4KB消息大小、50个活跃连接和5GB数据/月。
  * [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）。
  * [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费层](https://apiservice.eyeson.com/api-pricing)含1,000分钟会议/月。
  * [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持10,000订阅用户，推送不限量，含浏览器内消息功能。
  * [httpSMS](https://httpsms.com) - 通过Android手机作为短信网关收发短信。每月免费200条收发额度。
  * [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全MQTT代理。永久免费100万会话分钟/月（无需信用卡）。
  * [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。支持API/Webhook集成，免费套餐每天50条消息至1台设备1个应用。
  * [SuprSend](https://www.suprsend.com/) - 通过API优先的架构简化产品通知。免费套餐每月10,000条通知，支持摘要、批量、多渠道等高级工作流节点。
  * [SMSGate](https://sms-gate.app) - Android™短信网关，通过云路由收发短信。完全免费的云服务（建议日超1万条时通知以保障服务质量）。

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

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可实现即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量项目、字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的限量免费版，开源免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键值免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源免费
* [Translation.io](https://translation.io) - 开源免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条源字符串），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 全员免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管本地化引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时指标免费服务，应用性能管理代理限用于一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试任务控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费计划
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费计划包含10个监控器，检查频率为3分钟，并提供状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器、无限用户、无限仪表盘、无限告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控及深度API监控。免费计划包含1个用户和10,000次API及网络/1,500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版：自动扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史记录
* [cronitor.io](https://cronitor.io/) - 为定时任务、网站、API等提供性能洞察和正常运行时间监控。免费层包含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费提供一个监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监控器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施费用。每月在Google云平台上花费不超过5,000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。免费版提供24小时数据保留
* [fivenines.io](https://fivenines.io/) — 带实时仪表盘和告警的Linux服务器监控 — 永久免费支持最多5台被监控服务器，60秒间隔。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的观测平台，将指标和日志与Grafana集成。免费版：3个用户、10个仪表盘、100条告警，Prometheus和Graphite中的指标存储（10,000个序列，14天保留期），Loki中的日志存储（50GB日志，14天保留期）
* [healthchecks.io](https://healthchecks.io) — 监控您的定时任务和后台任务。最多20个检查免费
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 20个监控器和2个通知渠道（Slack和Discord）永久免费
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可完成的实时监控仪表盘，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，包含无限订阅和无限团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站最多100页免费，开源项目完全免费
* [loader.io](https://loader.io/) — 免费负载测试工具，有限制
* [Middleware.io](https://middleware.io/) - Middleware观测平台提供对应用和堆栈的完整可见性，以便大规模监控和诊断问题。他们为开发者社区提供永久免费计划，支持最多1M日志事件的日志监控，以及最多2台主机的基础设施监控和APM
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控，带美观状态页面。永久免费计划提供10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，以及2个仪表盘/状态页面
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个开源工具，用于收集实时指标。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台旨在帮助工程师创建更完美的软件。从单体应用到无服务器，您可以检测一切，然后分析、排查和优化整个软件堆栈。免费层提供每月100GB的免费数据摄入、一个完全访问的免费用户和无限免费主要用户
* [nixstats.com](https://nixstats.com) - 一台服务器免费。支持邮件通知、公共状态页面、60秒间隔等
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot为网站和API提供正常运行时间监控，以及定时任务和计划任务的监控。还提供状态页面。前五个检查以3分钟间隔免费。免费层通过Slack、Discord和邮件发送告警
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国长城防火墙屏蔽。通过比较中国服务器和美国服务器检测到的DNS结果和ASN信息，识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警和值班管理，用于运营始终在线的服务。最多5个用户免费
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括告警、强大的可视化能力和基本报告。最多100个传感器免费
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变化，最多6个监控器每日检查免费
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班）
* [pageradar.io](https://pageradar.io/) — 监控网站的核心网页指标、SEO变化和正常运行时间。免费计划包含5个URL、每日核心网页指标监控、10个HTML/SEO变化监控器、167个国家/地区的联盟链接监控和邮件告警
* [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。最多5个用户免费
* [phare.io](https://phare.io/) - 正常运行时间监控，最多100,000个事件免费，支持无限项目和无限状态页面
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。检查无限URL并通过Discord、Slack或邮件获取停机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任何自定义TCP端口
* [pingpong.one](https://pingpong.one/) — 高级状态页面平台，带监控。免费层包含一个可公开自定义的状态页面，带SSL子域名。开源项目和非营利组织可免费使用专业计划
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月的历史正常运行时间/日志、无限状态页面和自定义域名！永久免费且无限邮件告警。无需信用卡

  * [sematext.com](https://sematext.com/) — 免费提供24小时指标监控，支持无限服务器、10个自定义指标、50万个自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台上的强大服务器监控，整合指标与日志功能，零配置复杂度。免费支持1台服务器
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务及SSL监控，每类提供5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 免费2个监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级可用性监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页面等功能。免费版包含10个HTTP监测器、1个DNS监测器和1个状态页面
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，帮助实践SRE最佳实践。永久免费计划支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（含功能限制）
* [statusgator.com](https://statusgator.com/) — 状态页面监控，免费3个监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、可用性监控、DNS及域名监控。免费监控10台服务器、10个可用性指标和10个域名
* [syagent.com](https://syagent.com/) — 非商业用途的免费服务器监控服务，含告警与指标功能
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20个主流Web服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个可用性监测器（5分钟间隔）和可定制状态页面（含商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页面
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理与响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 提供Cron任务、关键词、网站、端口、Ping等多种监控类型。免费25个可用性检查（3分钟间隔），支持电话、短信、邮件和Webhook告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 可用性监控：20个免费；Linux/Windows服务器监控：5个免费；状态页面：1个免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费。
* [elmah.io](https://elmah.io/) — 为Web开发者提供的错误日志和正常运行时间监控。开源项目可免费使用小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小型团队每年100万用户会话免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且易于自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简单、开源错误追踪。兼容开源Sentry SDKs。每月1,000次事件免费，或自托管无限使用。
* [honeybadger.io](https://www.honeybadger.io) - 异常、正常运行时间和定时任务监控。小型团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备免费支持100台设备。
* [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月5,000次错误，无限用户，30天保留期。
* [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常并提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用。
* [Axiom](https://axiom.co/) — 存储高达0.5 TB日志，保留30天。包含与Vercel等平台的集成，以及通过电子邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用的一键全功能终止开关。
* [Jam](https://jam.dev) - 开发者友好的一键错误报告。免费计划无限次使用。
* [Whitespace](https://whitespace.dev) – 浏览器内一键错误报告。个人使用免费计划无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管式搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松创建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于Web的UI组件/插件，允许用户在您的产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索小工具和API，支持基于网络爬虫的自动索引。免费不限搜索次数，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可完整克隆编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业领袖主讲的免费短期课程，1小时内掌握最新生成式AI工具实操技巧
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发的学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证对齐的免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 公开2500+门MIT课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS基础与进阶、JavaScript及SQL免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL/TypeScript，支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，专注计算机/工程/数据科学领域
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南平台，为用户文章提供dofollow外链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click与Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 免费临时邮箱，用于测试
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史
* [Buttondown](https://buttondown.email/) — 新闻简报服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性外发邮件 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似联系表单的短链接服务）
* [debugmail.io](https://debugmail.io/) — 开发者使用的简易测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天最多300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送服务，免费层包含200次月请求、2个邮件模板、50KB请求限制、有限联系人历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户，完全免费的反事务性邮件服务
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，每次刷新页面都会更新地址，完全免费
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器，支持10个域名，可创建无限地址（含广告）
* [forwardemail.net](https://forwardemail.net) — 自定义域名免费邮件转发，无限邮箱地址创建（注：部分TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发
* [Inboxes App](https://inboxesapp.com) — 每天创建3个临时邮箱，可通过Chrome扩展管理
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱，邮件3天后自动删除，可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS设置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API服务，每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 100名订阅者免费，无限邮件和自动化
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，任意收件箱可用
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封限制）
* [Mailnesia](https://mailnesia.com) - 免费临时邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API，每月1500次请求限制
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器，免费版1个收件箱/100封邮件
* [Mail7.io](https://www.mail7.io/) — QA开发者免费临时邮箱，支持API创建
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱，支持RSS订阅
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个统一收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，端到端加密，1GB存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API，每月10000封免费
* [QuickEmailVerification](https://quickemailverification.com) — 每日100次免费邮箱验证
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封免费
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮箱别名方案，免费5个别名
* [Substack](https://substack.com) — 无限免费新闻简报服务，收费时开始支付
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每日500封免费

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告，无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持邮箱确认和一次性邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱提供商，现提供一系列服务，部分含免费方案。含免费方案的服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费方案包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储空间
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储空间。捆绑Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名会议参与者和10名网络研讨会 attendees
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理
   - [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5名参与者的远程培训
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储空间，无限页面，zip备份，RSS和Atom订阅，访问控制和可定制CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理20个客户/订阅免费，1用户，所有支付托管由Zoho完成。存储最后40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品账单管理3个页面，最多50次支付
   - [Desk](https://zoho.com/desk) — 客户支持管理3个客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件100GB存储空间，无限用户，每频道100用户，SSO
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建器
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约安排
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队规模，提供卓越的技术支持且价格合理。免费方案包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 安全发布功能：跨Web、移动端和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费支持3名用户，功能开关和实验数量无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。5人团队免费使用，功能开关和A/B测试数量无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试平台。免费支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展的多区域功能开关管理平台。免费方案包含10个开关、2个环境且请求不限次。SDK、分析看板、发布日历、Slack通知等所有功能均包含在永久免费方案中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析的一站式平台。免费方案支持无限席位、开关、实验和动态配置，每月100万次事件额度。
* [Abby](https://www.tryabby.com) - 开源功能开关&A/B测试平台。支持代码化配置和全类型TypeScript SDK，深度集成Next.js和React等框架。提供慷慨的免费层级和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 该网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 经过商业使用授权的免费字体库，精心挑选并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 提供大量免费字体，可通过下载或链接Google CDN快速部署到网站
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰的可下载字体库
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，所有字体均可用于个人和商业用途
* [Befonts](https://befonts.com/) - 提供多款个人/商用的独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，包含中日韩(CJK)字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月允许250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。提供垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST提交等功能。免费版含无限表单，每月20次提交（展示Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交，提供友好的现代界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。免费版适用于基础需求。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版含无限表单，每月250次提交，客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过界面转发提交至邮件/Slack/Zapier。无需服务器代码。免费版含无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持无限表单和提交，含预制模板、反垃圾及100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码快速创建表单转邮件等功能。个人账户免费提供每月50次提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点、1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业级表单和调研工具。50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析工具。永久免费版支持500月活用户，无限回复和事件，多集成导出及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版每月50次提交，250MB存储，支持Zapier集成、CSV/JSON导出、自定义重定向/响应页、Telegram/Slack机器人及单邮件通知。
* [Survicate](https://survicate.com/) — 一站式多渠道反馈收集与跟进调研工具。AI自动分析反馈生成洞察。免费版含邮件/网站/产品内/移动端调研，AI问卷生成器，25次回复/月。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷与表单构建工具。免费版含5个表单，每表单最多3步，每月50次回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版每表单限10个字段，每月100次回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持Webhook通知。免费版文档加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态&JAMStack网站的联系表单，无需后端代码。免费版含无限表单/域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研与表单构建工具。免费版含3个调研/账户，每月100次回复，每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。
* [formpost.app](https://formpost.app) - 永久免费的表单转邮件服务。支持自定义重定向、自动回复、Webhooks等。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特表单。免费版每月100次提交，无功能限制。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版可收集100次回复，支持网站嵌入或链接分享。
* [Qualli](https://usequalli.com) - 移动端应用内调研工具，使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次产品内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版可收集25条反馈，提供React/Vue组件轻松集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调研收集反馈。免费版含1个活跃调研，每调研25次回复，支持自定义模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复来自Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200多种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索，可同时搜索所有应用。搜索助手可让您使用您的信息回答问题。免费计划提供无限统一搜索和每天5次共同飞行员查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并可与任何可观测性客户端配合使用。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。凭借强大的DSPy组件，我们使工程师和非技术团队能够无缝协作，微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源的LLM工程平台，帮助团队协作调试、分析和迭代他们的LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流中的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大型语言模型（LLM）在几分钟内提供定制的商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。请注意，这些模型虽然免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的声音清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的CDN服务。cdnjs是由Cloudflare提供支持的开源免费CDN，被全球超过11%的网站所信赖
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您将其添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不失败的持续交付。个人使用免费，限一名开发者，无技术支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。在全球缓存中即时处理图片
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月1TB流量和100万次请求免费，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月最高5TB免费CDN流量，19个核心节点，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划包含最多5个用户和每日1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python的Web应用开发平台。免费版支持无限应用数量，但执行超时限制为30秒。
* [appwrite](https://appwrite.io) - 支持无限项目且无暂停限制（含Websocket支持）的认证服务平台。免费版每个项目包含1个数据库、3个存储桶和5个函数。
* [configure.it](https://www.configure.it/) - 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) - 面向Java/Kotlin开发者的开源跨平台移动应用开发工具链。商业用途免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析功能，特别适合内容密集型和企业级电商网站。免费版每月支持5,000页面浏览或个人/开源项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求和每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) - 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版含1GB存储和1GB月流量，仅限免费域名。
* [encore.dev](https://encore.dev/) - 通过静态分析实现自动基础设施的无样板代码后端框架。包含业余项目的免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务和数据库等。个人GitHub仓库开发者可享免费层，AWS费用通过AWS结算（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用提供1个永不休眠的免费实例和2连接数/10,000行数据/无备份的PostgreSQL免费数据库。
* [leapcell](https://leapcell.io/) - 可靠的分布式应用平台，支持业务快速增长所需功能。免费计划含10万次服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，可基于任意触发器[免费](https://docs.pipedream.com/pricing/)运行代码化工作流，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) - Python云应用托管。初级账户免费，含1个your-username.pythonanywhere.com域名应用、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次、每日2,500次、每月5万次调用，自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 支持全球部署的开发者友好型无服务器平台，可通过Git部署Docker容器/Web应用/API，含自动扩缩容和内置服务网格。免费实例限法兰克福或华盛顿区域，免费PostgreSQL数据库限法兰克福/华盛顿/新加坡，配置为512MB内存/2GB存储/0.1CPU。
* [Napkin](https://www.napkin.io/) - 内存500MB/超时15秒的FaaS服务，免费每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) - Meteor应用的PaaS服务Galaxy，含免费MongoDB共享托管和自动SSL。
* [Northflank](https://northflank.com) - 通过UI/API/CLI构建部署微服务、定时任务和托管数据库。免费版含2个服务、2个定时任务和1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全能平台，兼具NoCode工具敏捷性与编程语言能力。免费版含[1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台，内置CI/CD和自动HTTPS。[免费计划](https://wundergraph.com/pricing)支持3个项目/1GB出口流量/300分钟构建时长。
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务和每月5美元额度。
* [mogenius](https://mogenius.com) - 简化Kubernetes服务部署，免费版支持本地Kubernetes连接以创建类生产环境。
* [DeployApps](https://deployapps.dev/) - 非商业/学术专属的无服务器函数服务，免费提供每月100万次调用/100GB流量/10个定时任务。
* [Choreo](https://wso2.com/choreo/) - AI原生的内部开发者PaaS平台，免费版含5个组件和每月100美元额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如：当应用中触发事件时发送Slack消息或添加Google表格行。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web后端即服务，免费包含1GB文件存储、每月5万次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — 提供文档与资源，为企业构建和部署数字化解决方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。支持最多1000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录/500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版将提供慷慨免费套餐。
* [Firebase](https://firebase.com) — 助力构建和运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测和远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI构建器和模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的应用内聊天、消息、视频音频及信息流功能（替代数周开发）。
* [hasura.io](https://hasura.io/) — 为现有数据库提供即时GraphQL API，安全支持Web、移动及数据集成。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划含PostgreSQL、GraphQL(Hasura)、认证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月1万封邮件，联系人无上限且支持自动预热。
* [paraio.com](https://paraio.com) — 带灵活认证、全文搜索和缓存的后端API。单个应用免费，含1GB数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务。2000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) — 2000月活用户内免费无限推送通知，统一支持iOS和Android的API。
* [quickblox.com](https://quickblox.com/) — 即时消息、视频语音通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 通过拖拽工具快速构建应用，点击定制数据模型，用Apex代码扩展，强大API集成，企业级安全保护，支持主流前端框架。免费开发者计划开放完整Lightning平台。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，结构化数据无限收发存储，每月最多2500用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供认证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) — 含认证、配额、监控和分析的API管理。免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5次Zap/每月100次任务。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个Applet。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟更新/5个自动化流程/Webhook。
* [LeanCloud](https://leancloud.app/) — 移动后端。免费1GB数据存储/256MB实例/每日3K API请求/10K推送。（API与Parse平台高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供每月5美元免费额度。适合托管应用、数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持15+种数据库和任意API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，提供可定制的移动端和Web应用。具有拖拽式界面，支持离线操作、实时位置追踪及多种第三方服务集成
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理10倍速构建内部工具、自定义用户流程、数字体验、自动化系统、管理面板和运营应用的低代码平台
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并团队共享。免费层包含完整API访问权限、AI编程助手和每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，每个应用0.5GB存储和1GB内存。免费层也包含Studio和Studio Pro IDE
* [OutSystems](https://www.outsystems.com/) — 支持本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可扩展性。免费层支持每月最多5个用户，不限应用数量和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。支持AI生成、可视化编辑和代码扩展，提供集成、认证、权限和审计日志等集中管控功能
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。支持连接数据库、云存储、GraphQL、API端点、Airtable等，并通过拖拽式应用构建器开发程序
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台，支持通过JavaScript/Python/SQL进行深度定制的拖拽式UI构建。提供云服务和自托管方案，5人以下团队免费
* [Manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。单个用户每月100万次工作流活动免费（[德语版本](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB免费虚拟主机，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可运行自定义Web服务器，支持FTP/WebDAV/SSH访问，包含邮箱、邮件列表和应用安装器。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+免费短域名，支持PHP/MySQL，提供应用安装器和邮件发送功能，无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用，开发者优先的部署开发平台，简化基础设施配置流程。
* [Bubble](https://bubble.io/) — 可视化编程构建无代码网页/移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注Web3前端的去中心化托管平台，提升在线率与安全性，提供额外用户访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 应用平台Starter套餐免费部署3个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive/OneDrive发布静态网站，永久免费，每个Google/Microsoft账号限1个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，支持本地托管并实时公开分享站点，提供可视化界面/API/CLI多种操作方式。
* [Free Hosting](https://freehostingnoads.net/) — 免费PHP5/Perl/CGI/MySQL/FTP托管，含文件管理器、POP邮箱、子域名、DNS编辑、网站统计等功能。
* [Freehostia](https://www.freehostia.com) — 提供行业领先控制面板和50+应用一键安装，即时配置，无强制广告。
* [HelioHost](https://heliohost.org) — 非盈利免费主机，含Plesk面板，支持PHP/Node.js/Python/.NET等，1000MB存储，可升级配置。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持SSL自定义域名，100GB月流量，260+Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 支持SFTP上传下载和PHP的网页托管。
* [Neocities](https://neocities.org) — 静态网站托管，1GB存储+200GB流量。
* [Netlify](https://www.netlify.com/) — 每月300积分（相当于30GB带宽）免费构建部署静态站点/应用。
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供静态/容器化等多种托管形式，免费套餐含1个站点+1个数据库（100GB流量/300分钟构建时长）。
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管，自动化DevOps，开发者与机构免费（无自定义域名）。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能。
* [render.com](https://render.com) — 统一云平台，免费提供SSL/全球CDN/私有网络/Git自动部署，含Web服务/数据库/静态页面免费方案。
* [SourceForge](https://sourceforge.net/) — 免费发现、创建和发布开源软件。
* [surge.sh](https://surge.sh/) — 前端开发者静态发布工具，无限站点支持自定义域名。
* [telegra.ph](https://telegra.ph/) 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 1个站点/50页/50MB存储，仅限170+预设基础模块，无自定义字体/图标/域名。
* [Vercel](https://vercel.com/) — 免费SSL/全球CDN托管，每次git push生成专属预览URL，完美支持Next.js等静态生成器。
* [Versoly](https://versoly.com/) — SaaS建站工具，无限网站/70+模块/5套模板，支持自定义CSS/SEO/表单（无自定义域名）。
* [Qoddi](https://qoddi.com) — 类Heroku的全功能PaaS，免费套餐支持静态资源/预发布环境/开发应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的Flarum论坛托管（250用户内免费，捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，500MB RAM/1GB SFTP空间。
* [Patr Cloud](https://patr.cloud/) — 易用云平台，付费服务中含3个静态站点免费托管。
* [Serv00.com](https://serv00.com/) — 3GB免费空间每日备份（保留7天），支持Crontab/SSH/GIT/SVN，兼容MySQL/PostgreSQL/MongoDB及多种编程语言。
* [Sevalla](https://sevalla.com/) — 简化应用/数据库/静态网站管理的托管平台，免费套餐含1GB空间/100GB流量/600分钟构建时长/100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 含API支持的免费DNS服务，提供多项高级DNS功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条DNS记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，最多5个域名，含多种环境配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API管理](https://dynv6.com/docs/apis)的免费动态DNS服务，可配置多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户共享域名的[子域名注册](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册、无追踪、无广告的免费动态DNS服务，域名数量不限。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) - 特殊DNS服务，查询含IP地址的主机名时将返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管服务。
* [zonewatcher.com](https://zonewatcher.com) - 免费监控1个域名的DNS变更并自动备份。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的免费DNS托管，支持API。
* [Glauca](https://docs.glauca.digital/hexdns/) - 最多3个域名的免费DNS托管，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅无广告。
* [LocalCert](https://localcert.net) - 免费提供`.localcert.net`子域名，兼容公共CA证书，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储来自IPFS和Arweave网络的文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1 CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云部署。
* [airtable.com](https://airtable.com/) — 界面类似电子表格的关系型数据库，无限基数库，每个库1,200行，每月1,000次API请求
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，包含2名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2 CPU、2 GiB内存、8 GiB存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库256MB，20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代应用（从物联网到AI）设计
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512 MB
* [redsmin.com](https://www.redsmin.com/) — Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费层含25MB存储、1个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行、1个月版本历史，最多25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云端数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库能力及与常用商业应用内置集成的工具。免费方案含无限用户、10个堆栈和每个堆栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系型数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RU)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费入门方案含9GB总存储、最多500个数据库、3个位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式、关系、自动REST API（支持类MongoDB查询）和高效多用户数据管理界面。免费方案允许3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月5,000万RU和10 GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点，17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL，0.5 GB总存储，1个项目，10个分支，无限数据库，主分支始终可用（非主分支计算5分钟后自动暂停），每月20小时活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储，10个数据库，与Prisma ORM集成。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库管理系统，提供GraphQL API。限制每日1 MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时间限制，10GB存储+每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2 vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，这是用Prolog和Rust编写的文档和图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库最大10MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
* [xata.io](https://xata.io) - Xata是内置强大搜索和分析的无服务器数据库。单一API，多类型安全客户端库，优化开发工作流。永久免费层适合业余开发者，包含三个Xata单位（单位定义见官网）。
* [8base.com](https://www.8base.com/) - 8base是基于MySQL和GraphQL构建的全栈低代码开发平台，面向JavaScript开发者提供无服务器后端即服务。可通过UI应用构建器快速开发Web应用并轻松扩展。免费层包含：2,500行、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库，始终可用不关机，1GB总存储，5,000万查询令牌，自动扩展，无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版隧道时长为60分钟。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费方案支持最多5人加入的无限量局域网式网络。
* [Mirna Sockets](https://mirna.cloud/) - 免费Socket即服务平台，部署WebSocket服务器代码时可获得wss:// URL并监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装注册，免费子域名无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网网络。不限节点数。(Hamachi替代方案)
* [segment.com](https://segment.com/) — 事件中转中心，可将事件路由至第三方服务。免费10万事件/月。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有webhook到公共或内部地址（如localhost）。通过隧道将内网服务暴露为HTTP端点（`https://子域名.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何位置开发、测试和监控webhook。免费版每月10万请求+10万尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+500MB/月TURN带宽，限速单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端的端到端加密网络，提供桌面/移动/NA客户端，可通过网页配置路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理工具，将本地服务器暴露到互联网。免费版隧道时长为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地服务到自定义公共URL，并通过访问控制保障安全。免费版支持1个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题追踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式平台满足团队发布优秀项目的所有需求。免费版提供1个项目、10名用户和100MB存储空间。
* [Basecamp](https://basecamp.com/personal) - 待办清单、里程碑管理、论坛式消息、文件共享和时间追踪。最多支持3个项目、20名用户和1GB存储空间。
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具。免费版提供5GB空间支持无限用户。
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具：流程图、UML图、网络图。免费版最多15名用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 基于团队的敏捷估算工具，节省冲刺评估时间。免费支持5名用户，集成Jira，无限视频通话、团队和会话。
* [clickup.com](https://clickup.com/) — 项目管理工具。提供免费版和含云存储的付费版。支持移动应用和Git集成。
* [Clockify](https://clockify.me) - 跨项目追踪工时的计时器和工时表应用。永久免费，不限用户数。
* [Cloudcraft](https://cloudcraft.co/) — 通过可视化设计器快速创建专业架构图，专为AWS优化并支持实时数据显示。免费版允许单个用户创建无限私有图表。
* [Codegiant](https://codegiant.io) — 集成代码仓库托管和CI/CD的项目管理平台。免费版提供无限仓库、项目和文档（最多5名成员），每月500分钟CI/CD时长和30000分钟无服务器代码运行时长，1GB仓库存储。
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian的知识协作工具，帮助团队高效协作与共享知识。免费版最多支持10名用户。
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费入门版包含5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费支持3个项目，不限用户数，1GB存储空间。
* [diagrams.net](https://app.diagrams.net/) — 存储在Google Drive/OneDrive/Dropbox的在线图表工具。完全免费且支持所有存储层级
* [freedcamp.com](https://freedcamp.com/) - 任务管理、讨论区、里程碑、时间追踪、日历、文件和密码管理器。免费版支持无限项目、用户和文件存储。
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的敏捷回顾工具。免费版每月可创建3个公共看板和每个看板1次调查。
* [GForge](https://gforge.com) — 面向复杂项目的管理及问题追踪工具集，提供自托管和SaaS选项。SaaS免费版前5名用户免费，开源项目完全免费。
* [gleek.io](https://www.gleek.io) — 开发者专用的免费描述转图表工具。通过关键词快速创建非正式UML类图、对象图或实体关系图。
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 对比两个GraphQL模式并标记变更类型（破坏性/非破坏性/危险级），每个差异点都有详细说明。
* [Hygger](https://hygger.io) — 项目管理平台。免费版提供无限用户、项目和看板，100MB存储空间。
* [Instabug](https://instabug.com) — 移动应用全功能Bug报告及应用内反馈SDK。免费版支持1个应用和1名成员。
* [WishKit](https://wishkit.io) — 收集iOS/macOS应用的用户反馈并按投票优先级排序功能需求。免费版支持1个应用。
* [Ilograph](https://www.ilograph.com/)  — 支持多视角多层级查看基础设施的交互式图表工具，可用代码表达图表结构。免费版允许创建无限私有图表（最多3名查看者）。
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版最多支持10名用户。
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具。提供功能有限的免费版
* [kanbantool.com](https://kanbantool.com/) — 看板式项目管理工具。免费版包含2个看板和2名用户（不支持附件）。
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用，助您一站式组织工作、追踪进度并交付成果。免费版支持1名用户创建无限看板/列表/卡片。
* [Kitemaker.co](https://kitemaker.co) - 贯穿产品开发全周期的协作平台，集成Slack/Discord/Figma/Github。不限用户和空间数量，免费版支持250个工作项。
* [Kiter.app](https://www.kiter.app/) - 求职管理工具，追踪面试、机会和人脉。提供网页版和Chrome扩展程序，完全免费。
* [Kumu.io](https://kumu.io/)  — 支持动画、装饰、筛选、聚类、表格导入等功能的关系图谱工具。免费版允许创建无限公开项目（不限图谱规模），学生可享私有项目权限，沙盒模式支持脱机编辑文件。
* [Linear](https://linear.app/) — 界面简洁的问题追踪工具。免费版支持无限成员，单个文件上限10MB，250个问题（归档除外）
* [leiga.com](https://www.leiga.com/) — 运用AI自动管理项目的SaaS产品，帮助团队聚焦核心并释放潜能。免费版支持10名用户、20个自定义字段、2GB存储空间，AI视频录制限5分钟/条，自动化执行20次/用户/月。
* [Lucidchart](https://www.lucidchart.com/) - 具备协作功能的在线图表工具。免费版包含3个可编辑文档、100个专业模板和基础协作功能。
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具。免费版支持3个项目且不限成员数量。
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，支持团队协作、计划制定、分析及日常任务管理。永久免费的基础版提供100MB存储和5名用户/团队，不限工作区/会议/任务分配/工时表/问题追踪数量。
* [Ora](https://ora.pm/) - 敏捷任务管理与团队协作工具。免费版最多3名用户，文件限制为10MB。
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 无限公开项目免费，私有项目限2个且活跃用户（读写权限）最多3名，被动用户（只读权限）不限数量。
* [plan.io](https://plan.io/) — 集成代码仓库托管等功能的项目管理平台。免费版支持2名用户、10个客户和500MB存储空间
* [Plane](https://plane.so/) - 简洁、可扩展的开源项目和产品管理工具。免费版支持无限成员，单个文件上限5MB，1000个问题。
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）
* [point.poker](https://www.point.poker/) - 在线计划扑克（基于共识的估算工具）。完全免费且不限用户/团队/会话/轮次/投票数量，无需注册即可使用。

  * [Shake](https://www.shakebugs.com/) - 移动应用内错误报告和反馈工具。免费版每应用每月可提交10个错误报告。
* [Shortcut](https://shortcut.com/) - 项目管理平台。永久免费支持最多10名用户。
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费使用。
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费。
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务。免费版提供无限制任务、迭代和工作区，且不设用户上限。
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理，支持从看板到Scrum等多种流程。免费版不限用户数，最多1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}。
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲。免费版包含1个工作区（无限制任务/项目）、1GB文件存储、1周项目历史记录及5人视频会议。
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具。最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成。
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会和迭代规划工具。15人以下免费。
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具。免费版支持5名用户和2个项目，提供付费升级选项。
* [teleretro.com](https://www.teleretro.com/) — 融合破冰活动、动图和表情的趣味回顾工具。免费版包含3次回顾会议且成员不限。
* [testlio.com](https://testlio.com/) — 问题跟踪、测试管理与Beta测试平台。私人使用免费。
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具。免费版每图最多4个层级。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版功能：5个活跃项目/每项目5名用户/5MB文件上传/3个过滤器/1周活动历史。
* [trello.com](https://trello.com/) — 看板式项目管理。无限个人看板，10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具。
* [ubertesters.com](https://ubertesters.com/) — 测试平台含集成与众测服务，免费版支持2个项目5名成员。
* [Wikifactory](https://wikifactory.com/) — 含项目、版本控制与问题追踪的产品设计平台。免费版提供无限项目/协作者和3GB存储。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具。最多3名用户免费，项目数量不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），适用于开源项目及私有项目（3用户免费）。含时间追踪与敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) — GitHub内集成的独家项目管理方案。公开仓库、开源组织及非营利机构免费。
* [zenkit.com](https://zenkit.com) — 项目管理与协作平台。免费版支持5名成员及5GB附件。
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户。提供GitHub集成。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报告），以及面向独立开发者的[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版含无限任务/里程碑/时间线）。
* [Sflow](https://sflow.io) — 专为敏捷软件开发、营销、销售及客户支持打造的项目管理平台，特别适合外包与跨组织协作项目。免费版支持3个项目5名成员。
* [Pulse.red](https://pulse.red) — 免费极简时间追踪与项目工时表应用。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [Android文件托管](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。免费10GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，提供10GB免费存储空间
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费存储空间
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费存储空间
* [sirv.com](https://sirv.com/) — 智能图像CDN，支持实时图像优化和调整尺寸。免费套餐包含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图像优化和CDN服务，提供多种图像调整、压缩和水印功能。开源插件支持响应式图像、360度图像制作和图像编辑。免费月套餐含25GB CDN流量、25GB缓存存储和无限转换。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等库的图像上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图像转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图像缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图像/音频/视频等格式转换和编辑。
* [GoFile.io](https://gofile.io/) - 支持网页界面和API的免费文件共享存储平台，无文件大小/带宽/下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 通过CDN提供图像视频托管、处理和流媒体服务。免费套餐含250GB/月视频流量和30GB/月图像流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图像图表生成服务
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化开源项目图像的机器人，在保持质量的同时减小文件体积。
* [ImgBB](https://imgbb.com/) — 无限图像托管服务，支持拖拽上传（单图32MB限制），生成直链/BBCode/HTML缩略图，登录后可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无水印社交媒体封面图生成API
* [imgix](https://www.imgix.com/) - 图像缓存管理和CDN服务，免费套餐含1000个源图像、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图像优化服务，免费支持1MB以下文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务
* [nitropack.io](https://nitropack.io/) - 自动前端优化加速服务（缓存/图像代码优化/CDN），免费支持5000次页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 云存储文件加密共享/复制/移动管理工具，基础版支持无限传输（单文件250MB限制）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库，提供有限免费计划，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目/黑客松/移动应用的简易JSON存储API
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费套餐含1GB存储和API访问权限。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台，免费版支持无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 支持最多5人团队使用的协作平台，可体验基础版功能（用户管理除外）。
* [QRME.SH](https://qrme.sh) - 无需登录/无水印/无广告的快速批量二维码生成器，单次最多导出100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图像图表/图形和二维码
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图像优化API，已集成至WordPress/Drupal/Magento等主流CMS，累计处理超70亿张图像仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图像压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 处理视频/音频/图像/文档的上传编码，开源项目/慈善机构/学生可通过GitHub学生开发者包获取免费服务。商业应用可试用2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图像服务，提供图像CDN/媒体处理API和前端优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理工具链，开发者可免费使用文件上传API/UI、图像CDN/源服务、自适应交付和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 可快速集成的图像CDN，提供自动优化/实时转换/存储功能。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私理念的零知识文件存储服务，注册即享永久免费10GB空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费提供20GB空间（支持3台设备），推荐用户可获5GB奖励（90天不活跃将失效）。

  * [ImageEngine](https://imageengine.io/) – 全球图像CDN，60秒内即可完成配置。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[免费开发者账户申请](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI工具，可将PDF、图像处理为JSON、CSV、EXCEL等结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡、代金券和促销活动的定制二维码。支持自定义样式、颜色、logo等。
* [LibreQR](https://libreqr.com) – 注重隐私保护的免费二维码生成器，无追踪无数据收集。
* [Doradrop](https://doradrop.com) – 无限存储空间的无广告文件分享平台，无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，可快速创建现代响应式网站，即使非设计师也能轻松上手
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（不限查看人数）
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费网页应用，支持绘制SVG并导出为SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，同时提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能转换工具（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线调色板生成器，或从顶级配色方案获取灵感
* [coolors](https://coolors.co/) - 免费配色方案生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色号及其他色彩模型
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变色工具（支持RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版包含无限文件与查看者（最多2名编辑和3个项目）
* [Flyon UI](https://flyonui.com/)- 最易用的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者+2名编辑+3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版税商用图库（含模特/物品授权书）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变色选择工具
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站的高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库（含数千图标），支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源（需标注来源）
* [landen.co](https://www.landen.co) - 无代码建站工具，免费版可发布1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 免费时尚占位图生成器（URL后添加尺寸参数即可获取随机图片）
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画平台，提供Android/iOS/Web的Lottie动画工具与插件
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集（渐变色/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) - 免费无限量云存储思维导图工具（全平台即时同步）
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版支持3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) - 社交媒体与电商服装模型生成器（40个免费模板）
* [Modeldraw.com](https://modeldraw.com) - 完整图表平台（支持UML/系统架构/流程图/思维导图/敏捷工作流），不限团队成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) - 完全免费的浏览器矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具（实时创建与共享）
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计与原型工具（支持SVG）
* [pexels.com](https://www.pexels.com/) - 免版税商用图库（提供关键词搜索API）
* [photopea.com](https://www.photopea.com) - 免费高级在线设计编辑器（兼容PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成至代码库的网页设计与页面构建工具（支持响应式页面/复杂组件开发，可代码扩展）
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成器（支持URL直链）
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器内直接转换（无需上传，完全客户端处理保障隐私）
* [Proto.io](https://www.proto.io) - 无代码交互式UI原型工具，免费版包含1用户/1项目/5原型/100MB存储空间
* [resizeappicon.com](https://resizeappicon.com/) - 简易应用图标尺寸调整工具
* [Rive](https://rive.app) - 永久免费的跨平台动画创作工具（含编辑器与多平台运行时）
* [storyset.com](https://storyset.com/) - 免费定制化插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成工具（200个免费模板）

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可复制粘贴的免费SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui的优雅主题，实时自定义颜色、排版等参数
* [UI头像生成器](https://ui-avatars.com/) - 根据姓名首字母生成头像，支持通过URL参数配置
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图库，可免授权自由使用
* [unsplash.com](https://unsplash.com/) - 商用/非商用免费图库（无限制许可）
* [vectr.com](https://vectr.com/) — 网页端/桌面端免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导平台，免费版支持3个5步以内的操作指引
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - 基于TailwindCSS的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形与图像
* [Responsively App](https://responsively.app) - 响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线样机编辑器，含海量免费设计模板
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 浏览器端免费视频编辑器，支持1080p导出无水印
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页生成器，免费1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌LOGO库，内置简易编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 可商用免费SVG矢量图库
* [haikei.app](https://www.haikei.app/) - SVG形状/背景/图案生成器
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端平台，免费3个项目且支持代码导出
* [vector.express](https://vector.express) — 多格式矢量文件转换工具
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含开发者工具）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出多种格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌LOGO的API服务，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费Bootstrap/Angular/React/Vue UI套件
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) - Tailwind CSS组件库（减少类名书写）
* [Scrollbar.app](https://scrollbar.app) - 网页滚动条设计工具
* [css.glass](https://css.glass/) - 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) - Tailwind CSS渐变色库
* [iconify.design](https://icon-sets.iconify.design/) - 100+图标集统一搜索平台
* [NextUI](https://nextui.org/) - 免费现代化React/Next.js UI库
* [Glyphs](https://glyphs.fyi/) - 开源可编辑图标系统
* [ShadcnUI](https://ui.shadcn.com/) - 可复制粘贴的组件库（开源可定制）
* [HyperUI](https://www.hyperui.dev/) - 开源Tailwind CSS组件
* [日历图标生成器](https://calendariconsgenerator.app/) - 一键生成全年日期图标
* [图片背景模糊器](https://imagebgblurer.com/) - 为Notion/Trello等工具生成模糊背景框
* [Webstudio](https://webstudio.is/) - Webflow开源替代方案
* [Nappy](https://nappy.co/) - 黑人群体专属免费图库
* [Tailkits](https://tailkits.com/) - Tailwind模板/组件/工具合集
* [Tailcolors](https://tailcolors.com/) - Tailwind CSS v4调色板
* [Excalidraw](https://excalidraw.com/) - 免费在线手绘风格白板工具
* [Lunacy](https://icons8.com/lunacy) - 内置素材的免费图形设计工具
* [Flows](https://flows.sh/) - 产品引导平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶尖网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可按UI/UX项目类别筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最佳着陆页作为设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，还提供设计师免费书籍和来自网络的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 经常更新的着陆页截图。包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动截图] 通过我们50,000+完全可搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动截图] 探索非洲和世界领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图] 一个设计灵感库，展示最精美的UI UX模式（iOS和Android），供设计师、开发人员和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动 / 网页视频和截图] 许多移动和网页应用完整流程的视频。还包括截图。高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动截图] 精心挑选的最精美应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据和公共数据创建地图及地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API和SDK，包含地理空间数据存储、分析、地理编码、路径规划等功能。每月免费额度：200万基础地图瓦片、2万次非存储地理编码、2万次简单路径规划、5千次行驶时间计算、5GB瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量/栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 支持API或CSV上传的地理编码服务。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理定位查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图及位置感知应用的API与SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与地图可视化SDK。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap提供的免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日2,500次免费地图浏览与API请求
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [Geokeo api](https://geokeo.com) - 支持语言校正等功能的地理编码API，覆盖全球范围。每日2,500次免费查询

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，适用于Fedora和EL系统
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP运行环境和代码片段分享平台，支持300+个PHP版本运行代码
* [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快开发工具的开源IDE，支持Windows、Mac、Linux和ChromeOS系统
* [AndroidIDE](https://m.androidide.com/) — 开源移动端IDE，可在Android设备上开发基于Gradle的真实应用
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境、工具平台和应用框架
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时API模拟和文档生成（免费版支持无限量API蓝图和用户，含一个管理员账户和托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台知名可扩展编辑器，免费版提供[核心功能集](https://www.barebones.com/products/bbedit/comparison.html)并支持升级高级功能
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的免费Java开发环境，全球数百万人使用，由Oracle支持并提供简易GUI界面
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器，易用且高度可定制
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理工具，可添加标签分类
* [Code::Blocks](https://codeblocks.org) — 免费开源的Fortran/C/C++ IDE，支持Windows、macOS和Linux系统
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持代码编写（代码块、自动补全、单元测试）、代码理解（全代码库知识）、修复和检索功能，兼容VS Code、JetBrains及在线使用
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索、定义和复用代码片段的编程助手，个人和小型团队免费
* [codesnip.com.br](https://codesnip.com.br) — 支持分类、搜索和标签的简易代码片段管理器，完全免费无限制
* [cocalc.com](https://cocalc.com/) — （原SageMathCloud）云端协作计算平台，内置数学/科学/数据科学工具链：Python、LaTeX、Jupyter Notebooks、SageMath、scikit-learn等
* [code.cs50.io](https://code.cs50.io/) - CS50专属的Visual Studio Code网页版，基于GitHub Codespaces适配教学场景
* [codepen.io](https://codepen.io/) — 前端开发者的代码游乐场
* [codesandbox.io](https://codesandbox.io/) — 支持React/Vue/Angular/Preact等框架的在线开发环境
* [Components.studio](https://webcomponents.dev/) - 独立开发可视化组件，通过故事书测试并发布到npm
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言Web IDE，开源社区驱动。Red Hat提供在线实例[workspaces.openshift.com](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据，加速产品原型开发
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4/Grok/Deepseek/Gemini等AI模型的编程助手，原生CLI集成与IDE无缝衔接，免费版含基础AI模型本地处理能力
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux虚拟机和IDE，免费版每日5次VM使用额度
* [GitPod](https://www.gitpod.io) — GitHub项目即时开发环境，免费版每月50小时额度
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持多语言、Linux容器终端、端口转发、实时协作等功能（免费版含1GB内存/10GB存储，5个容器槽位）
* [JDoodle](https://www.jdoodle.com) — 支持60+语言的在线编译器，免费版REST API每日200次调用额度
* [jetbrains.com](https://jetbrains.com/products.html) — 知名开发工具套件（含[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等），学生/教师/开源团队可申请免费授权
* [jsbin.com](https://jsbin.com) — 前端网页开发游乐场（HTML/CSS/JavaScript），同时支持Markdown/Jade/Sass
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API接口，源码可本地部署
* [Lazarus](https://www.lazarus-ide.org/) — 跨平台Delphi兼容的快速应用开发IDE
* [MarsCode](https://www.marscode.com/) - 免费AI驱动的云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务，用于生成虚假JSON数据
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP接口模拟服务，支持返回JSON/XML数据
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL/Excel格式的测试数据，支持后端API模拟
* [Mocklets](https://mocklets.com) - HTTP协议API模拟器，终身免费版支持并行开发和全面测试
* [Paiza](https://paiza.cloud/en/) — 无需配置的浏览器开发环境，免费版提供24小时有效期的服务器（每日4小时运行时间，2核CPU/2GB内存/1GB存储）
* [Prepros](https://prepros.io/) - 支持Sass/Less/Stylus/Pug等语言的实时编译工具，内置浏览器热重载功能
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程平台，支持多种语言（运行代码无需注册），同时提供免费编程课程
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线开发环境，支持主流NodeJS框架，快捷入口：[https://node.new](https://node.new)

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新定义并优化的代码编辑器。由Microsoft开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载适用于iOS和Android的Microsoft扩展）、桌面、Web和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/追踪、自由许可的Microsoft编辑器VSCode二进制分发版。
  * [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化您的编码活动，提供免费有限计划。
  * [Wave Terminal](https://waveterm.dev/) - Wave是一款开源、跨平台的终端工具，支持无缝工作流。内联渲染任何内容。保存会话和历史记录。基于开放Web标准构建，支持MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板独立编写Web组件，包含故事和测试功能。
  * [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境。
  * [WebDB](https://webdb.app) - 免费高效的数据库IDE。功能包括服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等。
  * [Zed](https://zed.dev/) - Zed是Atom和Tree-sitter创作者开发的高性能多人协作代码编辑器。
  * [OneCompiler](https://onecompiler.com/) - 支持70多种语言（包括Java、Python、C++、JavaScript）的免费在线编译器。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 替代Google Analytics的热图分析工具，支持会话录制和收入追踪
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史仪表盘（突破14天限制）。免费版支持监控单个仓库
* [Dwh.dev](https://dwh.dev) - Snowflake数据云可观测性方案（个人使用免费）
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库的客户数据同步至CRM/营销/客服工具。免费版支持1个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布流程：统一跟踪方案、类型安全分析库、应用内调试器和数据可观测性。免费版支持2名成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台（免费支持1万MAU的深度链接等服务）
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台（免费支持从数据仓库同步10个字段至60+SaaS产品）
* [Clicky](https://clicky.com) - 网站分析平台（免费版支持单站3000次浏览分析）
* [Databox](https://databox.com) - 多平台整合的商业洞察工具（免费版含3用户/仪表盘/数据源，1100万历史数据记录）
* [Hitsteps.com](https://hitsteps.com/) - 单网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件（支持2个应用）
* [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台（非商业用途免费），支持自托管，提供隐私友好的替代方案
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私保护型GA替代方案（免费支持每月100万PV）
* [Expensify](https://www.expensify.com/) - 费用报销系统（免费个人审批流程）
* [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析（免费支持3000事件/月）
* [heap.io](https://heap.io) - 自动记录iOS/Web应用所有用户行为（免费支持1万月会话）
* [Hotjar](https://hotjar.com) - 网站分析与热力图工具（免费版含2000PV/天+100日快照）
* [Keen](https://keen.io/) - 自定义数据分析平台（免费1000事件/月）
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务（完全免费）
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限量免费分析
* [Mixpanel](https://mixpanel.com/) - 10万月活跃用户跟踪（不限数据历史记录和席位）
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析（免费50万API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试工具（免费版支持1网站+1iOS/Android应用）
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具（免费版含100万用户授权）
* [Row Zero](https://rowzero.io) - 高速互联电子表格（永久免费3个工作簿）
* [sematext.com](https://sematext.com/cloud/) - 5万次操作/月免费（1天数据保留）
* [Similar Web](https://similarweb.com) - 网站/移动应用分析（免费版含5指标结果+1月APP数据）
* [StatCounter](https://statcounter.com/) - 网站访问分析（免费追踪500最近访客）
* [Statsig](https://statsig.com) - 全功能分析平台（免费100万计量事件/月）
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者沙盒环境（最新预发布版）
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型测试工具（单人无限测试免费）
* [woopra.com](https://www.woopra.com/) - 用户行为分析平台（免费50万次动作+90天数据保留）
* [counter.dev](https://counter.dev) - 简约隐私友好的网站统计（捐赠模式）
* [PostHog](https://posthog.com) - 全功能产品分析套件（免费100万事件/月）
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（开源项目可申请个人订阅）
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为记录工具
* [Beampipe.io](https://beampipe.io) - 简约隐私导向的网站分析（免费5域名+1万PV/月）
* [Aptabase](https://aptabase.com) - 开源隐私友好的应用分析（免费2万事件/月）
* [Trackingplan](https://www.trackingplan.com/) - 自动化数字分析监测工具
* [LogSpot](https://logspot.io) - 全功能分析平台（免费1万事件/月）
* [Umami](https://umami.is/) - 简约快速的隐私友好型GA替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私分析工具（免费3域名+600次会话回放）
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具（免费1万事件/月）

  * [Peasy](https://peasy.so) - 一款轻量级、注重隐私的网站与产品分析工具。免费版每月包含3,000次事件记录。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无需Cookie且操作体验提升10倍。免费版支持每月3,000次事件记录。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，含开发者工具用于错误复现、实时会话支持及产品分析套件。每月1,000次会话，全功能可用，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，一个月数据保留，三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
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

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。每月追踪收入低于1万美元免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式移动应用内订阅解决方案，支持iOS、Android、React Native、Flutter、Unity或Web应用。每月收入低于1万美元免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层每月提供1万次API调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费DEVELOPER计划每月支持1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限1万次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率，支持JSON和XML格式。免费层每月提供1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率和货币转换服务，每月100次免费API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费层每日更新一次，每月限1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家预防支付欺诈和退单。免费Micro计划每月支持500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费层需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API盈利，可连接Stripe、Chargebee等平台。免费层每月支持3万次事件。
* [Nami ML](https://www.namiml.com/) - iOS和Android应用内购买与订阅全功能平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购买与订阅后端服务（支持iOS和Android）。每月追踪收入低于2,500美元免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证和欧盟增值税率API，每月100次免费请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟限10次。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库，用于构建和存储Docker镜像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费套餐提供1GB私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
  * [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant 虚拟机的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深度探讨您关心的话题
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享您的观点、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 构建的轻量级评论组件，可将 GitHub issues 用于博客评论、维基页面等场景
* [Disqus](https://disqus.com/) - Disqus 是网络化的社区平台，被全球数十万网站采用
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"一个管理员在少数域名上完全控制评论行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种平台提供的功能丰富的评论系统

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截取、捕捉时间点和视窗尺寸调整。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据：元标签标准化、精美链接预览、爬虫功能，或按需截图服务。每日免费250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。基于Google Cloud构建，具备扩展能力。每月免费100张截图。
  * [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。支持任意URL截取，快速、免费且可扩展。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照服务。每月免费100次快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（png/gif/jpg格式），支持整页截取而不仅是首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页额度（自2017年持续提供）。
  * [Webshrinker.com](https://webshrinker.com) — 提供网站截图及域名情报API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一款现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - Codemagic 是一款全托管移动应用持续集成/持续交付服务。通过图形化 CI/CD 工具实现构建、测试和部署。免费版每月提供 500 分钟构建时长，使用 2.3GHz 处理器和 8GB 内存的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) —— 一个能运行Linux和Windows 2k的超快x86虚拟机
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**  

（注：根据要求保留了所有格式标记、链接结构和技术术语，调整了部分语序使其更符合中文表达习惯，并添加了中文标点符号）

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规要求。免费版仅限小型团队使用且仅支持SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能同意管理合规平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策/Cookie政策及同意管理解决方案。免费版提供有限的隐私政策/Cookie政策和Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计和同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在访客数量受限的情况下提供大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射功能。免费版包含核心同意管理功能，并向通过验证的开源项目提供更高级的免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他分类

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图。
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成美观的图片（如Twitter/Facebook帖子）或链接（如聊天或论坛）。
* [Blynk](https://blynk.io) — 提供API控制的SaaS平台，用于构建和评估物联网设备。免费开发者计划支持5台设备，含免费云存储和数据存储。移动应用也可用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的笔记应用（PWA）。
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图式图片格式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等编辑器的时间追踪和编码指标插件。
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照。
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为社交媒体分享的截图。
* [Cronhooks](https://cronhooks.io/) - 定时或周期性触发Webhook。免费版允许5个临时计划任务。
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费。
* [datelist.io](https://datelist.io) - 在线预约系统，免费每月5次预订，含1个日历。
* [Domain Forward](https://domain-forward.com/) - 简单易用的URL/域名转发工具，免费支持5个域名和20万次请求/月。
* [Elementor](https://elementor.com) — WordPress网站构建器，免费版含40+基础组件。
* [Exif Editor](https://exifeditor.io/) — 即时在线查看、编辑、清理、分析图片元数据（含GPS位置信息）。
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具。
* [FOSSA](https://fossa.com/) - 第三方代码的规模化端到端管理，支持许可证合规性和漏洞检测。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用轻松添加Webhook功能：自带队列、退避重试和日志。免费版每日100次推送，14天留存，3个Webhook端点。
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN、ISP、地理位置等托管信息，含多款DNS相关工具。
* [kandi](https://kandi.openweaver.com/) — 加速应用开发：通过代码片段和开源库复用快速构建自定义功能及完整应用。
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线Base64数据编解码工具。
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/Webhook接收GitHub、GitLab等平台的新版本发布通知。
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看图片EXIF数据（含GPS位置信息）。
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF。免费每月300份文档。
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展生成可定制化的精美代码片段截图。
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言模型/序列化代码，安全高效处理数据。
* [RandomKeygen](https://randomkeygen.com/) - 免费生成多种随机密钥/密码，用于保护应用/服务/设备。
* [ray.so](https://ray.so/) - 创建优雅的代码片段图片。
* [readme.com](https://readme.com/) — 开源项目免费使用的美观文档生成工具。
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具，支持营销与SEO。
* [redirect.pizza](https://redirect.pizza/) - 带HTTPS支持的重定向管理工具，免费版含10个源和10万次访问/月。
* [Renamer.ai](https://renamer.ai) — AI驱动的文件重命名工具，支持OCR和20+语言元数据提取。免费版每月15个文件，含桌面端批量重命名功能。
* [ReqBin](https://reqbin.com/) — 在线发送HTTP请求（GET/POST/PUT/DELETE/HEAD），支持Header和Token认证，可保存请求记录。
* [Smartcar API](https://smartcar.com) - 车辆API：定位、油量/电量查询、里程读取、车门锁控制等。
* [snappify](https://snappify.com) - 开发者视觉创作工具，从代码片段到技术演示。免费版支持3个同时编辑项目，每月5次AI代码解释。
* [日出日落时间](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间。
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed分析服务，免费版功能有限。
* [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查，免费版每份问卷限10个问题和100份回复。
* [Tiledesk](https://tiledesk.com) - 构建全渠道聊天机器人（网站/WhatsApp），免费版不限机器人数量。
* [UUID生成器](https://newuuid.com/) - 即时生成UUID/GUID/CUID/NanoID/ULID，企业级性能与安全。
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅，免费版支持3个订阅源。
* [videoinu](https://videoinu.com) — 在线编辑录屏视频。
* [Webacus](https://webacus.dev) — 免费开发者工具集（编解码/数据处理）。
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的免费GPU基准测试（WebGL），帮助开发者跨设备对比着色器性能。

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 2台设备免费使用，会话次数和时长无限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) — 按需技术支持及设备永久访问权限（每日2次免费会话）
  * [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！
  * [AnyDesk](https://anydesk.com) — 3台设备免费使用，会话次数和时长无限制

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [itch.io](https://itch.io/game-assets) — 免费/付费资源，如精灵图、瓦片集和角色包。
* [Gamefresco.com](https://gamefresco.com/) — 发现、收集并分享来自全球游戏艺术家的免费游戏资源。
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，包括2D、3D、音频和GUI素材。
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF动画。
* [CraftPix](https://craftpix.net) — 免费/付费资源，涵盖2D、3D、音频、GUI、背景、图标、瓦片集和游戏套件。
* [Game Icons](https://game-icons.net/) — 基于CC-BY许可的可定制SVG/PNG图标库。
* [LoSpec](https://lospec.com/) — 在线像素艺术创作工具，提供教程和调色板列表，适用于限制性数字艺术。
* [ArtStation](https://www.artstation.com/) — 2D/3D资源与音频的市场平台，也可用于作品集展示。
* [Rive](https://rive.app/community/) — 社区资源库，支持免费计划创建自定义游戏素材。
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) — 8000+免费/付费3D模型和PBR材质纹理库。
* [Kenney](https://www.kenney.nl/assets/) — 采用CC0 1.0通用许可的2D/3D/音频/UI游戏资源。
* [Poliigon](https://www.poliigon.com/) — 免费及付费纹理（多分辨率）、模型、HDR环境和笔刷，提供Blender等软件的导出插件。
* [Freesound](https://freesound.org/) — 采用不同CC协议的免费协作音效库。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 提供更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名的本地开发环境
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表
* [GitHub开发者FOSS资源](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - HTML/CSV/PDF/JSON/Excel与Markdown互转工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境和工具，开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度自动续期
* [Pyrex正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（包括RHEL/OpenShift/CodeReady等），仅限个人计划，同时提供免费电子书
* [SMS测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups](https://simplebackups.com/) — 服务器和数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务
* [SnapShooter](https://snapshooter.com/) — DigitalOcean/AWS/LightSail/Hetzner/Exoscale备份方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份
* [主题精选](https://themeselection.com/) — 精选高质量现代化免费管理后台模板、HTML主题和UI套件，加速应用开发
* [网站性能检测](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名
* [开发者小工具](https://smalldev.tools/) — 支持编解码/代码压缩美化/生成测试数据等功能的免费工具集，界面友好
* [UseCSV数据导入](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，免费版支持无限导入器和100MB文件
* [按钮生成器](https://markdenic.com/tools/buttons-generator/) — 100+可商用按钮样式
* [WrapPixel模板](https://www.wrappixel.com/) — 高质量免费/付费后台模板（支持Angular/React/VueJs/NextJS/NuxtJS）
* [Utils.fun工具集](https://utils.fun/en) — 基于浏览器运算的离线工具（水印生成/录屏/编解码/加密/代码格式化等），完全免费不上传数据
* [IT工具集](it-tools.tech) - 开发者和IT人员实用工具
* [免费代码工具](https://freecodetools.org/) — 100%免费的Markdown编辑器/代码美化/二维码生成/OG标签生成等工具
* [正则测试101](https://regex101.com/) — 免费正则表达式调试平台，提供编辑器和学习资源
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发者工具（格式化/压缩/转换等）
* [AdminMart模板](https://adminmart.com/) — 高质量免费/付费后台模板（支持Angular/Bootstrap/React/VueJs等）
* [Glob模式测试](https://globster.xyz/) — 可视化Glob模式设计与测试平台
* [SimpleRestore](https://simplerestore.io) - 无需代码即可远程恢复MySQL备份
* [360转换器](https://www.360converter.com/) - 免费音视频转文字工具，支持实时语音/YouTube字幕生成
* [最佳二维码生成](https://qrcode.best/) - 13种模板的隐私保护二维码生成器，支持追踪像素和团队协作
* [PostPulseAI](https://PostPulseAI.com) - AI生成SEO优化内容，免费版每月可手动发布1篇
* [PageTools](https://pagetools.co/) - 永久免费的AI工具集，一键生成网站政策/社交媒体内容
* [MySQL可视化解释](https://mysqlexplain.com) - 免费慢查询优化可视化工具
* [Killer Coda](https://killercoda.com/)  - 浏览器交互式学习平台（Linux/Kubernetes/编程/DevOps等）
* [Axonomy发票工具](https://axonomy-app.com/) - 免费版每月可生成10张发票
* [表格格式转换器](https://www.tableformatconverter.com) - 免费表格数据转换工具（CSV/HTML/JSON/Markdown等）

**[⬆️ 返回顶部](#目录)**