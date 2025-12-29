# free-for.dev

开发者与开源贡献者如今可享受众多提供免费层级的服务，但要全面了解这些选项需要耗费时间进行调研。

本清单收录了各类软件（SaaS、PaaS、IaaS等）及其他提供免费开发者层级的服务。

本清单特别聚焦于基础设施开发者（系统管理员、DevOps从业者等）可能感兴趣的实用工具。我们虽推崇所有免费服务，但仍需保持主题相关性。由于界限有时较为模糊，本清单存在主观判断标准，若未采纳您的贡献还请见谅。

这份清单凝聚了1600多位人士的拉取请求、评审、创意与协作成果。您也可以通过提交[拉取请求](https://github.com/ripienaar/free-for-dev)来添加新服务，或移除已变更或终止的服务项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅限服务型产品，不含自托管软件。入选服务必须提供永久免费层级（非限时试用版）。若为时限型免费，则有效期至少需达一年。同时我们从安全角度评估免费层级，支持SSO验证，但拒绝将TLS功能限制在付费层的服务。

# 目录

  * [主流云服务商永久免费额度](#主流云服务商永久免费额度)
  * [云管理解决方案](#云管理解决方案)
  * [分析/事件/统计](#分析/事件/统计)
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
  * [域名](#域名)
  * [教育与职业发展](#教育与职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式AI](#生成式AI)
  * [基础设施即服务](#基础设施即服务)
  * [IDE与代码编辑](#IDE与代码编辑)
  * [国际手机号验证API/SDK](#国际手机号验证API/SDK)
  * [问题跟踪与项目管理](#问题跟踪与项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发与反馈](#移动应用分发与反馈)
  * [管理系统](#管理系统)
  * [消息与流处理](#消息与流处理)
  * [其他类别](#其他类别)
  * [监控](#监控)
  * [平台即服务](#平台即服务)
  * [包构建系统](#包构建系统)
  * [支付与账单集成](#支付与账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * [Flutter相关/无Mac构建iOS应用](#Flutter相关/无Mac构建iOS应用)
  * [搜索](#搜索)
  * [安全与PKI](#安全与PKI)
  * [认证授权与用户管理](#认证授权与用户管理)
  * [源代码仓库](#源代码仓库)
  * [存储与媒体处理](#存储与媒体处理)
  * [隧道/WebRTC/WebSocket路由](#隧道/WebRTC/WebSocket路由)
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

## 主流云服务商永久免费额度

  * [Google Cloud Platform](https://cloud.google.com)
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储，每天5万次读取、2万次写入和2万次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（不含中国和澳大利亚）的出站流量
    * Cloud Storage - 5GB存储，1GB出站流量
    * Cloud Shell - 基于Web的Linux Shell/主IDE，5GB持久存储，每周限60小时
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（含后台和HTTP调用）
    * Cloud Run - 每月200万请求，36万GB秒内存，18万vCPU秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，节点按标准Compute Engine计费
    * BigQuery - 每月1TB查询量，10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebook开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud的在线VSCode
    * 完整列表 - https://cloud.google.com/free

* [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月1万次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro（12个月），100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro，20GB通用型(SSD)存储和20GB备份（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，2万次Get和2千次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000条消息（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整列表 - https://aws.amazon.com/free/

* [Microsoft Azure](https://azure.microsoft.com)
    * [虚拟机](https://azure.microsoft.com/services/virtual-machines/) - 1台B1S Linux和1台B1S Windows（12个月）
    * [应用服务](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每天60 CPU分钟）
    * [函数](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [开发测试实验室](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月度存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无限分钟（支持Linux/macOS/Windows）
    * [物联网中心](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [负载均衡器](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP
    * [通知中心](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000RU预置吞吐量
    * [静态Web应用](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证和自定义域名
    * [存储](https://azure.microsoft.com/services/storage/) - 5GB LRS文件/Blob存储（12个月）
    * [认知服务](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），含有限次数的免费层
    * [认知搜索](https://azure.microsoft.com/services/search/#features) - AI搜索索引服务，免费支持1万份文档
    * [Azure Kubernetes服务](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [事件网格](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整列表 - https://azure.microsoft.com/free/

* [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2台AMD虚拟机（1/8 OCPU+1GB内存）
       - 4个Arm Ampere A1核心+24GB内存（可拆分为最多4台VM）
       - [闲置实例](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)会被回收
    * 块存储 - 2个卷共200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个10 Mbps实例
    * 数据库 - 2个库各20GB
    * 监控 - 5亿数据点采集/10亿数据点查询
    * 带宽 - 每月10TB出站（x64限50Mbps，ARM限500Mbps*核心数）
    * 公网IP - 2个IPv4（VM用）+1个IPv4（负载均衡用）
    * 通知 - 每月100万次投递选项+1000封邮件
    * 完整列表 - https://www.oracle.com/cloud/free/

* [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万数据点
    * 日志分析 - 每天500MB日志
    * 完整列表 - https://www.ibm.com/cloud/free/

* [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS、DDoS防护、CDN含免费SSL、防火墙规则、页面规则、WAF、机器人防护、不限量速率限制（每域名1条规则）、分析、邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户、24小时活动日志、3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
* [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求/1000次写入请求/1000次删除请求/1000次列表请求，1GB存储数据
* [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储/100万次A类操作/1000万次B类操作
* [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取/10万行写入，1GB存储空间
* [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发部署Web应用。每月500次构建/100个自定义域名/集成SSL/无限协作席位/无限预览部署/通过Cloudflare Workers集成实现全栈能力
* [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
* [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供构建、部署和发展云应用所需的一切功能，无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，支持使用熟悉的编程语言和工具构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作功能
* [scalr.com](https://scalr.com/) - Scalr 是 Terraform 自动化与协作平台(TACO)，用于加强 Terraform 管理的基础设施和配置的协作与自动化。完整支持 Terraform CLI，集成 OPA，采用分层配置模型。无单点登录限制，包含全部功能。每月免费50次运行额度
* [deployment.io](https://deployment.io) - Deployment.io 帮助开发者在 AWS 上实现自动化部署。免费版支持单个开发者无限量部署静态站点、网络服务和环境。每月免费提供20次作业执行额度，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限量公共和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限量公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 免费项目包含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限量公共和私有Git仓库（协作人数不限）。基于[Forgejo](https://forgejo.org/)构建。通过[Codeberg Pages](https://codeberg.page/)提供静态网站托管。[Codeberg's CI](https://docs.codeberg.org/ci/)提供CI/CD托管。[Codeberg Translate](https://translate.codeberg.org/)提供翻译托管。包含软件包/容器托管、项目管理和问题追踪
* [GitGud](https://gitgud.io) — 无限量公共和私有仓库。永久免费。基于GitLab & Sapphire构建。不提供CI/CD
* [GitHub](https://github.com/) — 无限量公共仓库和私有仓库（协作人数不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作成员的无限量公共和私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理和问题追踪
* [framagit.org](https://framagit.org/) — Framasoft基于Gitlab构建的软件协作平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — GitLab社区版的分支项目，支持Mercurial版本控制
* [ionicframework.com](https://ionicframework.com/appflow) - Ionic应用开发的代码库和工具集，同时提供Ionic代码库
* [NotABug](https://notabug.org) — 自由许可证项目的免费软件代码协作平台，基于Git
* [OSDN](https://osdn.net/) - 面向开源开发者的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — 自由开源许可证项目的免费代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git/Mercurial/SVN仓库
* [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统。其独特之处在于基于严谨的补丁理论，易于学习使用。解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源和非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 免费私有项目（Git和Subversion）包含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管服务。无限量公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - GNU自由软件项目的协作开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU自由软件项目的协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API/数据/机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选成美观的表格网格。通过链接保存和分享JSON数据。
* [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转换为强大的API，快速开发原型、网站、应用等。免费版每月提供500次请求。
* [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，便于快速查看、编辑和在线分享。
* [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
* [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
* [Apify](https://www.apify.com/) — 网络爬取和自动化平台，可为任何网站创建API并提取数据。提供现成的爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台信用。
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月提供50张图片和三个模板。
* [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端运行情况所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
* [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月提供最多50个API令牌。（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和根因分析（如数据质量和性能漂移）。免费支持最多两个模型。
* [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3人）永久免费。
* [Beeceptor](https://beeceptor.com) - 无代码、基于云的多协议API（REST、SOAP、gRPC和GraphQL）模拟和调试平台，提供基于规则的即时服务器、CRUD和状态模拟、代理及CORS管理，加速集成和测试。免费计划每天50次请求，提供公共仪表板/端点，任何拥有仪表板URL的人均可查看提交的请求和响应。
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
* [Browse AI](https://www.browse.ai) — 网络数据提取和监控。免费版每月1,000积分，相当于1,000次并发请求。
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬取、AI代理网络访问、图像/PDF生成等。免费计划每月1,000次请求。
* [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检测数据等。免费层每月100次请求，覆盖所有9个端点。
* [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
* [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
* [Clarifai](https://www.clarifai.com) — 图像API，支持自定义人脸识别和检测。可训练AI模型。免费计划每月1,000次调用。
* [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供广泛的API库访问权限，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，文件最大2.5MB。
* [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
* [CometML](https://www.comet.com/site/) - MLOps平台，涵盖实验跟踪、模型生产管理、模型注册和完整数据谱系，从训练到生产全流程。个人和学术用户免费。
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，可从任何前端构建、放置和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
* [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API及Node.js、PHP、Python库。付费计划支持最大50GB文件。免费版限制文件大小（20MB）和转换次数（30次/天，300次/月）。
* [国家-州-城市微服务API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
* [Coupler](https://www.coupler.io/) - 数据集成工具，支持应用间同步。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限制为1个用户、1个数据连接、1个数据源和1个数据目的地，且需手动刷新数据。
* [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
* [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。自动解决验证码并防止被屏蔽。前1,000次调用免费。
* [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，适用于金融科技应用。免费计划每月5,000次调用。
* [CustomJS](https://www.customjs.io) - HTML转PDF或PDF转PNG/文本及PDF合并/提取/合并API。免费层每月600次调用。
* [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储访问数据，组织成一致定义，并交付给每个应用。最快方式是使用Cube Cloud，其免费层每天限制1,000次查询。
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable到任何应用或API。类似Postman的界面，在Airtable中运行API请求。预建数十个应用集成。免费计划每月100次运行。
* [Dataimporter.io](https://www.dataimporter.io) - 连接、清理和导入数据到Salesforce的工具。免费计划每月最多20,000条记录。
* [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。每月包含10 GB存储和120小时运行时间。
* [Data Miner](https://dataminer.io/) - 浏览器扩展（Google Chrome、MS Edge），用于从网页提取数据到CSV或Excel。免费计划每月500页。
* [Datapane](https://datapane.com) - 用于构建交互式报告的API，并可部署Python脚本和Jupyter Notebook作为自助工具。
* [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1,000次请求。CC-BY 4.0许可下的精简数据库也免费。

  * [DeepAR](https://developer.deepar.ai) — 适用于任何平台的增强现实人脸滤镜SDK。免费方案支持每月最多10名活跃用户(MAU)并追踪4张人脸
* [Deepnote](https://deepnote.com) - 新一代数据科学笔记本。兼容Jupyter，支持实时协作与云端运行。免费层包含无限个人项目、基础机型(5GB内存+2vCPU)及最多3名编辑的团队协作。
* [Disease.sh](https://disease.sh/) — 提供精准新冠数据的免费API，助力构建相关应用。
* [Doczilla](https://www.doczilla.app/) — 通过SaaS API将HTML/CSS/JS代码直接转换为截图或PDF。免费方案每月可生成250份文档。
* [Doppio](https://doppio.sh/) — 采用顶尖渲染技术的托管API，用于生成和私有存储PDF及截图。免费方案每月允许400次生成。
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 为移动端、Web及物联网应用提供的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储或外部服务后，可即时生成包含实时文档和用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费层提供20积分。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成服务。免费方案每月50次API调用并开放模板库。
* [Earnings Feed](https://earningsfeed.com/api) - 实时SEC文件、内幕交易和机构持仓API。免费层每分钟15次请求。
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台。可视化任意计算图。本地使用免费。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图(ERD)工具。试用版包含2个项目，每个项目10张表。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端。
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费层每月250页，用户不限，支持3个模板。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费方案每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化、验证、比较及压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费Micro方案每月500笔交易。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名的定位服务。免费API每月500次查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP定位API，免费方案每日2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像。提供RESTful API和无代码集成。免费层每月50张图像和5个模板。
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。免费社区版支持5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)，免费方案每日100次事件推送并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 为PyTorch、TensorFlow和JAX构建、训练及部署NLP模型。免费版每月3万字符输入。
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个(云)平台如Exact Online、Twinfield等。含数据复制交换功能。开发者与实施顾问免费，特定平台有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP定位API，非商业用途免费，无需API密钥，免费方案同一IP每分钟限45次请求。
* [ipbase.com](https://ipbase.com) - IP定位API，永久免费方案每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP定位API，开发者永久免费方案每日1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP定位API，免费1,000次请求。
* [IPLocate](https://www.iplocate.io) — IP定位API，免费每日1,000次请求。含代理/VPN/主机检测、ASN数据、IP关联企业等。另提供可下载的IP与国家/ASN映射数据库(CSV/MMDB格式)。
* [IP2Location](https://www.ip2location.com) — 免费增值IP定位服务。LITE数据库可免费下载，支持本地查询城市坐标和ISP信息。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP定位API。获取城市坐标、ISP、ASN等数据。免费方案每月5万积分，另含500次免费WHOIS和托管域名查询。
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的可靠IP定位API。免注册免费方案每月3万次查询(每日1k)。
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP定位API，具备顶级主机检测能力。免注册免费方案1,000次查询。
* [IPinfo](https://ipinfo.io/) — 快速精准的免费(每月5万次)IP数据API。提供地理位置、企业、运营商等详细信息。所有付费API可免费试用。
* [IPQuery](https://ipquery.io) — 无速率限制和费用的开发者无限IP API。
* [IPTrace](https://iptrace.io) — 极简IP定位API，每月免费5万次查询。
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP。免注册免费层支持通过CORS在浏览器端直接调用JS获取数据。适用于监控客户端与服务器IP变更的服务。请求不限次数。
* [JSON Serve](https://jsonserve.com/) — 免费存储JSON对象并作为REST API使用的服务。

  * [JSONSwiss](https://www.jsonswiss.com/) - JSONSwiss 是一款强大的在线 JSON 查看器、编辑器和验证工具。支持 AI 辅助修复、树状视图、表格视图、12+ 种编程语言的代码生成，可将 JSON 转换为 CSV、XML、YAML、Properties 等格式。
* [konghq.com](https://konghq.com/) — API 市场及强大的公私 API 工具集。免费版功能受限，如监控、告警和支持服务。
* [Kreya](https://kreya.app) — 免费 gRPC 图形客户端，用于调用和测试 gRPC API。支持通过服务反射导入 gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过优质数据提升机器学习模型性能。免费支持最多 1000 个样本的数据集。
* [LoginLlama](https://loginllama.app) - 登录安全 API，用于检测欺诈和可疑登录并向客户发出警报。每月免费处理 1,000 次登录。
* [KillBait API](https://killbait.com/api/doc) - KillBait API 允许用户提交 URL 进行内容评估，检测潜在标题党并对文章分类。API 设计适用于中等发布频率，限制为每小时 1 次、每天 10 次提交。媒体合作伙伴可申请更高限额。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费 API 计划每月提供 100 次验证。
* [Market Data API](https://www.marketdata.app) - 提供股票、期权、共同基金等金融产品的实时和历史数据。"永久免费" API 层级每天允许 100 次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气 API，提供当前和预报天气数据。预报基于多天气模型的机器学习组合以实现更高精度。免费计划每天 400 次调用。
* [microlink.io](https://microlink.io/) – 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图服务。每天 50 次免费请求。
* [Mindee](https://developers.mindee.com) – 强大的 OCR 软件和 API 优先平台，通过计算机视觉和机器学习识别关键信息，帮助开发者自动化应用工作流。免费层级每月 500 页。
* [Mintlify](https://mintlify.com) — 现代 API 文档标准。精美易维护的 UI 组件、应用内搜索和交互式演练场。免费支持 1 位编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速模拟 API、生成自定义数据并通过 RESTful 接口执行操作的简易工具。适用于原型设计/测试/学习。免费版每个项目支持 1 个项目/2 个资源。
* [Mockfly](https://www.mockfly.dev/) — 值得信赖的 API 模拟和功能标志管理开发工具。通过直观界面快速生成和控制模拟 API。免费层每天 500 次请求。
* [Mocki](https://mocki.io) - 创建与 GitHub 仓库同步的 GraphQL 和 REST API 模拟工具。简易 REST API 无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 云端代理您的 API，自由选择要模拟的端点并检查流量。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) - 生成自定义 HTTP 响应以模拟请求的简易网页应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mocknroll.me/) - 免费模拟 API 服务——无需后端延迟即可模拟真实 API 响应的强大工具。完美适配前端开发、QA 测试和 DevOps 团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假 REST API，支持代码生成和 Docker 容器应用部署。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费简易工具，检查多节点出口 IP 地址，了解您的 IP 在不同全球区域和服务中的呈现方式。适用于测试 Control D 等基于规则的 DNS 分流工具。
* [Namekit](https://namekit.app/) - AI 驱动的域名发现工具——即时查找可用标准价域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取 JSON 结果。开发者每天 100 次免费查询。文章有 24 小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API - 每月 100 次免费请求。
* [OCR.Space](https://ocr.space/) — 将图像和 PDF 解析为 JSON 文本结果的 OCR API。每月 25,000 次免费请求，文件大小限制 1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化创建 Open API 3 定义的免费工具。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为 API，免费支持 5 个项目。
* [Parseur](https://parseur.com) — 每月 20 页免费：从 PDF、邮件提取数据。AI 驱动。完整 API 访问权限。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者友好 PDF 生成 API。提供 Stripe 风格文档，包含每月 500 次免费 PDF 转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单 API 将 HTML 或 URL 轻松转为 PDF。每月 100 次免费转换。
* [PDF-API.io](https://pdf-api.io) - PDF 自动化 API，包含可视化模板编辑器、HTML 转 PDF、动态数据集成和 PDF 渲染 API。免费计划提供 1 个模板，每月 100 次 PDF 生成。
* [Pixela](https://pixe.la/) - 免费日流数据库服务。所有操作通过 API 执行。支持热力图和折线图可视化。
* [Postman](https://postman.com) — 使用 API 开发协作平台 Postman 简化工作流并更快创建优质 API。Postman 应用永久免费。Postman 云功能在特定限制下也永久免费。
* [Insomnia](https://insomnia.rest) - 开源 API 客户端，用于设计和测试 REST 及 GraphQL API
* [PrefectCloud](https://www.prefect.io/cloud/) — 完整的数据流自动化平台。免费计划包含 5 个部署工作流和每月 500 分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) - 托管版 Apache Superset 服务。5 人以下团队永久免费，功能包括无限仪表盘和图表、无代码图表构建器和协作式 SQL 编辑器。
* [PromptLoop](https://www.promptloop.com/) - PromptLoop 提供 10 倍易用的 AI 网页爬取，接近零学习成本，节省现有工作流 85%+ 时间，且运行速度比人工研究快 4 倍不妥协，包含所有研究任务的 REST API 端点。每月首 1,000 积分免费。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和 VPN 的 IP API。ProxySentry.io 在 rapidapi.com 上提供每月 10k 次请求的免费层。
* [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共 API 列表。
* [Reducto](https://reducto.ai) - 将非结构化文档（PDF、XLSX、JPG、PPTX 等）转为结构化 JSON 数据。解析 PDF 表单、提取数据并编辑。免费层含 15k 积分并支持按量付费。
* [Rapidapi](https://rapidapi.com/) - 全球最大 API 中心，数百万开发者连接数千个 API，通过趣味挑战（含解决方案！）和交互示例进行 API 开发。

  * [RequestBin.com](https://requestbin.com) — 创建可接收HTTP请求的免费端点，所有发送到该端点的请求及其负载和头部信息都会被记录，便于观察来自Webhook和其他服务的调用情况。
* [reqres.in](https://reqres.in) - 一个托管的免费REST-API，随时响应您的AJAX请求。
* [Roboflow](https://roboflow.com) - 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费套餐每月包含30个积分。
* [ROBOHASH](https://robohash.org/) - 通过任意文本生成独特酷炫图片的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，专为网页抓取设计。匿名抓取数据，无需担心限制、封锁或验证码。每月前100次成功抓取免费，含JavaScript渲染功能（联系支持可获取更多额度）。
* [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API及免费代理服务。支持JavaScript渲染、高级轮换代理、绕过验证码。免费提供10,000次API调用额度。
* [ScrapX](https://www.scrapx.io/) — 监控目标网站的任何视觉或文本变化，并提取数据。免费计划允许每月监测最多5个URL。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发您的Webhook。免费计划包含100次云端抓取额度。
* [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析并归档您的数据。免费轻量版支持2个数据源、1,000张表和25名用户。
* [Sheetson](https://sheetson.com) - 即时将Google表格转换为RESTful API。提供免费计划，每表包含1,000行免费额度。
* [Siterelic](https://siterelic.com/) - Siterelic API提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能。免费计划每月100次API请求。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。返回Google、YouTube、Bing、百度、沃尔玛等平台的结构化JSON结果。免费计划每月100次成功调用。
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，提供省时省力的开发工具。免费版含每月300处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全的RESTful API。上传CSV即可通过API快速访问数据，加速应用开发。免费计划含2个API和2,500次调用/月，无需信用卡。
* [YourGPT CSV转JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且隐私优先的在线工具，直接在浏览器中将CSV文件转换为结构化JSON数据。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，含SQL格式化校验器、SQL正则测试器、假数据生成器及交互式数据库沙盒。
* [Stoplight](https://stoplight.io/) - 协作式API设计与文档SaaS平台。免费版提供设计、模拟和文档工具。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图片。免费版每月可生成50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务。免费版每月发送50,000条消息。
* [Tavily AI](https://tavily.com/) - 在线搜索与深度研究API，支持整理研究成果。免费层每月1,000次请求，无需信用卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1,000次免费请求。提供IP地址所属国家、城市、区域等信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API计划。覆盖全球的精准天气预报，含历史数据和天气监测方案。
* [Treblle](https://www.treblle.com) - 帮助团队构建、发布和管理API。含高级日志聚合、可观测性、文档和调试功能。免费版所有功能可用，每月限250,000次请求。
* [UniRateAPI](https://unirateapi.com) – 590+种货币与加密货币的实时汇率API。免费计划无限调用，适合开发者和金融应用。
* [vatcheckapi.com](https://vatcheckapi.com) - 简易免费增值税号验证API。每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，含实时状况、逐小时/日预报及天气警报。通过AI模型融合多源数据提升预测精度。免费层每月10,000次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析、Chrome渲染和代理的简易网页抓取API。每月2,000次免费调用。
* [Weights & Biases](https://wandb.ai) — 开发者优先的MLOps平台。通过实验跟踪、数据集版本控制和模型管理加速模型开发。免费版仅限个人项目，含100GB存储。
* [What The Diff](https://whatthediff.ai) - AI代码审查助手。免费版每月25,000个token（约10次PR）。
* [wolfram.com](https://wolfram.com/language/) — 云端内置知识驱动算法。
* [wrapapi.com](https://wrapapi.com/) — 将任意网站转化为参数化API。每月30,000次调用。
* [Zenscrape](https://zenscrape.com/web-scraping-api) — 含无头浏览器、住宅IP的网页抓取API。每月1,000次免费调用，学生和非营利组织可获额外额度。
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，覆盖全球邮政编码数据。每月5,000次免费请求。
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证。每月10,000次免费请求。
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持设计、构建和边缘部署API。快速添加API密钥认证、限流、开发者文档和商业化功能。原生支持OpenAPI，完全可编程（Web标准API与TypeScript）。免费版含10个项目、无限生产环境、每月100万请求和10GB出口流量。
* [DiffJSON](https://diffjson.com) - 在线JSON差异对比工具，快速定位JSON数据结构差异。
* [FreeIPAPI](https://freeipapi.com) - 免费、快速、可靠的IP地理定位API，支持商业与非商业用途，返回JSON格式数据。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
  * [central.sonatype.org](https://central.sonatype.org) - Apache Maven、SBT等构建系统的默认制品仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有/公有Maven和PyPi仓库，开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) - 简单安全的集中式仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。提供免费层且开源项目免费。
  * [jitpack.io](https://jitpack.io/) - GitHub上JVM和Android项目的Maven仓库，公开项目免费。
  * [repsy.io](https://repsy.io) - 提供1GB免费私有/公有Maven仓库。
  * [Gemfury](https://gemfury.com) - 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库，公开项目免费。
  * [paperspace](https://www.paperspace.com/) - 构建和扩展AI模型，开发、训练和部署AI应用，免费计划支持公开项目、5GB存储和基础实例。
  * [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表，开源/公开项目免费。
  * [RepoFlow](https://repoflow.io) - 简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费版提供10GB存储、10GB带宽、100个包和无限用户（云端），或自托管仅限个人使用。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理工具，支持个人及团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享与同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录与集成，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 精准匹配会议时间。操作简单，适用于各类规模团队
* [Calendly](https://calendly.com) — 智能会议调度工具。免费版支持1个日历连接与无限会话，提供桌面和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台。具备Markdown文本、语音、视频及屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 敏捷团队免费实时Scrum扑克工具，支持无限成员快速估算故事点
* [Telegram](https://telegram.org/) — 高速可靠的消息与通话工具。企业用户和小团队可享受大群组、用户名系统、桌面端应用及强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每工具自动保存一条记录，提供标准处理速度与社区支持
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。支持截图标注、流程文档协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队协作平台。集成IDE配对编程、终端共享、音视频通话及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备协作插件提升效率。免费版含每月10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 知识管理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作空间平台。个人用户免费，提供2GB存储空间
* [flock.com](https://flock.com) — 高效团队通讯工具。免费无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 沉浸式在线会议平台。自定义虚拟空间，免费支持10人同时在线
* [gokanban.io](https://gokanban.io) - 免注册语法看板工具，完全免费无限制
* [flat.social](https://flat.social) - 可定制化团队互动空间，支持无限会议，免费至8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交与PR活动日报系统。含推送可视化、同伴认可机制及自定义提醒，免费版支持3个仓库和3条提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。无限公私房间，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时Markdown协作编辑器。类似Google Docs但专注Markdown，免费无限笔记但[私有笔记协作人数受限](https://hackmd.io/pricing)
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能对话平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间线与视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — AR增强现实远程协助，基础版免费（无分析/加密/支持）
* [ideascale.com](https://ideascale.com/) — 客户提案与投票平台，25人以下社区免费
* [Igloo](https://www.igloosoftware.com/) — 内部文档博客日历门户，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭社区企业提供安全聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级安全在线视频会议工具
* [/meet for Slack](https://meetslack.com) - 直接在Slack输入/meet发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持多工作区与标签协作。免费版含4个工作区及10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队与开源项目无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约共享资源（如会议室/开发环境/服务器等），免费支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网页/PDF/图片上收集反馈的标注工具
* [Proton Pass](https://proton.me/pass) — 内置邮箱别名、2FA验证器、共享与通行密钥的密码管理器，全平台可用
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键开启视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集聊天、内容与应用于一体的数字中心，免费支持50万用户
* [Miro](https://miro.com/) - 可扩展的安全跨设备协作白板，企业级分布式团队解决方案（含免费版）
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基与数据库的Markdown协作笔记应用，全平台一站式工作空间
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版含50个条目与5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天/画板/在线编译器的代码面试平台，一键创建远程面试间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁团队工时表追踪应用，免费版支持10人时间记录与报告生成
* [Pendulums](https://pendulums.io/) - 直观易用的免费时间追踪工具，提供高效时间管理与数据统计
* [Pumble](https://pumble.com) - 永久免费团队聊天应用，无限用户与历史消息
* [Raindrop.io](https://raindrop.io) - 全平台安全书签工具，支持无限书签与协作

  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息传递和完整消息历史记录
* [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版提供1GB云存储空间
* [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献记录并生成统一报告
* [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作
* [Slab](https://slab.com/) — 现代化团队知识管理服务，10人以下团队免费使用
* [slack.com](https://slack.com/) — 无限用户免费版（部分功能受限）
* [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区
* [StatusPile](https://www.statuspile.com/) - 状态页聚合平台，可监控上游服务商状态
* [Stickies](https://stickies.app/) - 可视化协作工具，支持脑暴/内容整理/笔记。免费版包含3面数字墙、无限用户和1GB存储
* [Stacks](https://betterstacks.com/) - 集成笔记/链接/文件存储的内容工作区，永久免费个人版
* [StreamBackdrops](https://streambackdrops.com) — 高清视频会议虚拟背景库，支持Zoom/Teams/Google Meet，免注册个人免费使用
* [talky.io](https://talky.io/) — 匿名P2P群组视频聊天，无需插件/注册/付费
* [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件，支持看板泳道和完整Scrum框架，含时间追踪功能（5用户+3项目组合免费）
* [Teamplify](https://teamplify.com) - 通过团队分析智能站会优化开发流程，含完整休假管理功能（5人以下小组免费）
* [Tefter](https://tefter.io) - 书签管理应用，深度集成Slack，开源团队免费
* [TeleType](https://teletype.oorja.io/) — 终端/语音/代码/白板实时协作工具，端到端加密无需登录
* [TimeCamp](https://www.timecamp.com/) - 无限用户免费时间追踪软件，支持Jira/Trello/Asana等集成
* [Huly](https://huly.io/) - 全能项目管理平台（Linear/Jira/Slack/Notion/Motion替代方案），无限用户+10GB存储/工作区+10GB音视频流量
* [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用全功能项目管理应用
* [twist.com](https://twist.com) — 异步友好型团队通讯工具，提供免费无限量计划
* [tldraw.com](https://tldraw.com) — 开源白板绘图工具，支持智能箭头/吸附/便签/SVG导出，含多人协作模式，提供官方VS Code扩展
* [BookmarkOS.com](https://bookmarkos.com) - 云端可协作桌面环境，集成书签/标签/任务管理功能
* [typetalk.com](https://www.typetalk.com/) — 网页/移动端即时消息讨论平台
* [Tugboat](https://tugboat.qa) - 自动化按需PR预览，非营利组织可享免费Nano套餐
* [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in）
* [windmill.dev](https://windmill.dev/) - 开源开发平台，可通过Python/Typescript脚本快速构建自动化流程和内部应用（免费用户最多创建3个非高级工作区）
* [vadoo.tv](https://vadoo.tv/) — 简易视频托管营销平台，免费版支持10个视频/1GB存储/10GB月流量
* [userforge.com](https://userforge.com/) - 角色画像与用户故事关联工具（3个角色+2协作者免费）
* [wistia.com](https://wistia.com/) — 带分析功能的视频托管平台，免费版支持25个视频+品牌水印
* [wormhol.org](https://www.wormhol.org/) — 直连文件分享服务，支持5GB以下文件无限次分享
* [Wormhole](https://wormhole.app/) - 端到端加密文件传输（5GB内24小时有效，大文件采用P2P传输）
* [zoom.us](https://zoom.us/) — 视频会议工具（免费版单次限40分钟）
* [Zulip](https://zulip.com/) — 独特邮件式线程设计的实时聊天工具，免费版含1万条历史消息+5GB存储，提供开源自托管版本
* [robocorp.com](https://robocorp.com) - 自动化运维开源套件，免费版含240分钟/月机器人时长+10次助手运行+100MB存储
* [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费版含完整消息历史+无限私聊+1个群组+1GB存储
* [Chanty.com](https://chanty.com/) — 另一款Slack替代工具，10人以下永久免费含无限对话/语音消息+10个集成+20GB团队存储
* [ruttl.com](https://ruttl.com/) — 全能数字内容反馈工具，支持网页/PDF/图片批注
* [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台，免费版含无限频道/剧本/看板+10GB存储
* [Webvizio](https://webvizio.com) — 实时网站/图像/PDF/设计文件反馈与Bug报告工具
* [Pullflow](https://pullflow.com) — 集成GitHub/Slack/VS Code的AI增强代码评审平台
* [Webex](https://www.webex.com/) — 视频会议工具（免费版单次会议限40分钟/100人）
* [RingCentral](https://www.ringcentral.com/) — 视频会议工具（免费版单次会议限50分钟/100人）
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台（个人开发者免费）
* [transfernow](https://www.transfernow.net/) — 极简安全文件传输界面，无需订阅即可发送照片/视频等大文件
* [paste.sh](https://paste.sh/) — 基于JavaScript与加密技术的简易代码粘贴站

  * [腾讯实时音视频](https://trtc.io/) — Tencent Real-Time Communication (TRTC) 提供群组音视频通话解决方案。首年每月赠送10,000免费分钟。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴板，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟器、画布或变通方案。完全可用的免费版本。

  * [Cushion](https://cushion.so/) - 异步协作版Slack替代品，专为高效分布式小团队设计。免费版支持30条消息、5名成员及不限量访客。
  * [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理与问题追踪平台。可创建公共看板、设置网络钩子、使用卡片标记功能，免费版支持1000个条目内不限用户数。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal网站托管服务。开发者可享免费套餐，同时提供免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区空间包含5个用户、2.5万条记录、48种内容类型和2种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS及API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统，内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月流量及2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) — 小型项目免费套餐。基于GraphQL的CMS，基础版每月10万次API调用。
* [Directus](https://directus.io) — 无头CMS。完全免费开源的内容管理平台，支持本地或云端部署，无功能限制。
* [FrontAid](https://frontaid.io/) — 将JSON内容直接存储于Git仓库的无头CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) — 内容即服务平台，开发者计划包含2个用户、无限项目（每项目2个环境）、500个内容项、2种语言及API支持。
* [Prismic](https://www.prismic.io/) — 无头CMS。社区计划含无限API调用、文档、自定义类型和资源，适合个人项目。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) — 结构化内容平台，免费套餐包含无限项目、3个非管理员用户、2个数据集及50万次API调用。
* [sensenet](https://sensenet.com) — API优先的无头CMS，开发者计划支持3个用户、500个内容项和完整REST API访问。
* [TinaCMS](https://tina.io/) — 开源Git托管无头CMS，支持Markdown/MDX/JSON。基础版免费供2个用户使用。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) — 快速灵活的网站构建框架，可对接任何CMS/API/数据库。
* [Hygraph](https://hygraph.com/) — GraphQL原生无头CMS，提供小型项目免费套餐。
* [Squidex](https://squidex.io/) — 基于事件溯源的开源无头CMS，含免费套餐。
* [InstaWP](https://instawp.com/) — 快速创建WordPress站点，免费版含5个活跃站点、500MB空间，48小时有效期。
* [Storyblok](https://www.storyblok.com) — 开发者与营销人员适用的无头CMS，社区版含2500个资源管理和250GB/月流量。
* [WPJack](https://wpjack.com) — 5分钟云端部署WordPress，免费套餐含1台服务器、2个站点及无限定时任务。
* [Solo](https://soloist.ai) — Mozilla推出的免费AI建站工具，无需信用卡即可创建企业网站并绑定自定义域名。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的零代码应用构建工具。在自动生成的后端代码中，用户可完全访问源代码及无限量的API与路由，实现深度集成。免费方案包含3个项目、5张数据表和1个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程AI助手，通过AI技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody支持开发者选择多种大语言模型（包括本地推理），兼容各类IDE环境，适配所有主流编程语言，并提供免费方案。免费用户每月可获得20条聊天消息（使用Claude 3 Sonnet模型）和500次自动补全（使用Starcoder 16b模型）。
  * [DhiWise](https://www.dhiwise.com/) — 通过DhiWise创新的代码生成技术，将Figma设计无缝转化为动态Flutter和React应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
  * [Metalama](https://www.postsharp.net/metalama) - 仅支持C#。Metalama在编译时动态生成样板代码，保持源码整洁。开源项目可免费使用，商业友好型免费方案包含3个切面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是面向VSCode、JetBrains和Neovim的极速AI代码补全插件。免费版提供无限行内补全功能。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过从全球代码中学习洞见，帮助开发者更快打造更优质软件。提供插件支持。
  * [v0.dev](https://v0.dev/) — v0利用AI模型根据简单文本提示生成代码。其生成的React代码基于shadcn/ui和Tailwind CSS，可直接复制粘贴到项目中。每次生成至少消耗30积分，新用户初始获得1200积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，免费账户支持1个用户和1个代码仓库（100MB存储空间）
* [browserling.com](https://www.browserling.com/) — 实时跨浏览器测试服务，免费版仅支持3分钟会话（在1024x768分辨率下测试Vista系统的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共和私有仓库均无限免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库免费（最多4名协作者），学生和教育机构同样免费
* [codecov.io](https://codecov.io/) — 代码覆盖率分析工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查，免费版含无限用户、公共仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费版支持200文件/小时、3次审查/小时和50次对话/小时，开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发行为优先处理技术债务，可视化团队耦合度等组织因素，开源项目免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪，通过精准指标预防性能退化，开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能、可访问性与安全分析报告
* [deepcode.ai](https://www.deepcode.ai) — AI驱动的代码缺陷/安全漏洞/性能问题检测，支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab，开源项目及30人以下团队免费
* [deepscan.io](https://deepscan.io) — JavaScript运行时错误高级静态分析，开源项目免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，自动修复安全/性能/反模式等问题，原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异，完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动提供关键性能洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任意Go语言包的代码覆盖率分析
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量评估，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构，支持框架迁移/带修复的代码分析/大规模代码转换，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言的GitHub差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 多语言源代码自动化分析（含Java/JavaScript/C++/C#/PHP等），开源免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查与团队分析，开源项目及5人以下团队免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证与多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与深度分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等网站搜索您的项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记代码中的`TODO`注释（及其他标记），帮助识别需要改进的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。提供强大的代码截图工具（含预设模板和链接功能），支持代码片段整理、发现与共享

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到开发流程中，开源和教育用途免费。
* [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化构建、测试和发布移动应用到应用商店，加速发布周期。免费版每构建最多30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源免费。
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云上设置标准化应用环境，内置持续部署自动化和高级可观测性。免费版允许1个用户和1个应用环境。
* [Argonaut](https://argonaut.dev/) - 几分钟内在您的云上部署应用和基础设施。支持Kubernetes和Lambda环境上的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
* [bitrise.io](https://www.bitrise.io/) — 移动应用CI/CD，支持原生或混合应用。每月200次免费构建，10分钟构建时间和2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费5个项目和1个并发运行（每月120次执行）。
* [Buildkite](https://buildkite.com) CI流水线免费3个用户和每月5k任务分钟。测试分析免费开发者层包括每月100k测试执行，开源项目有更多免费包含。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例免费。
* [CircleCI](https://circleci.com/) — 包含所有功能的免费计划，托管CI/CD服务支持GitHub、GitLab和BitBucket仓库。多种资源类、Docker、Windows、Mac OS、ARM执行器，本地运行器，测试分割，Docker层缓存等高级CI/CD功能。每月最多6000分钟执行时间，无限协作者，私有项目30个并行任务，开源项目最多80,000免费构建分钟。
* [cirrus-ci.org](https://cirrus-ci.org) - 公共GitHub仓库免费。
* [cirun.io](https://cirun.io) - 公共GitHub仓库免费。
* [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，1个环境，共享服务器，无限公共仓库。
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费。
* [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源无限。
* [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源免费。
* [deployhq.com](https://www.deployhq.com/) — 1个项目每天10次部署（每月30构建分钟）。
* [drone](https://cloud.drone.io/) - Drone Cloud使开发者能在单一平台运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线。
* [LayerCI](https://layerci.com) — 全栈项目CI。一个全栈预览环境，5GB内存和3 CPU。
* [semaphoreci.com](https://semaphoreci.com/) — 开源免费，每月100次私有构建。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问应用，无限公共和私有仓库，VM大小最多2 GB。
* [styleci.io](https://styleci.io/) — 仅限公共GitHub仓库。
* [Mergify](https://mergify.com) — GitHub工作流自动化和合并队列 — 公共GitHub仓库免费。
* [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并自动化工作流。支持许多应用和最流行的API。公共GitHub仓库免费，免费层100 Mb，1000次操作，15分钟最小间隔。
* [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub Actions，每月免费3,000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，Open Policy Agent持续资源合规，SAML 2.0 SSO，访问公共工作池：每月最多200分钟。
* [microtica.com](https://microtica.com/) - 使用现成基础设施组件启动环境，在AWS上免费部署应用，支持生产工作负载。免费层包括1个环境（在您的AWS账户上），2个Kubernetes服务，每月100构建分钟和20次部署。
* [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割端到端测试运行加速您的monorepo CI。免费计划最多30个贡献者，包含150k积分。
* [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3,000免费分钟，无需信用卡。
* [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具如Terraform、OpenTofu和Terragrunt的编排和管理平台。最多2个用户免费，包含所有功能。
* [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，支持拉取请求驱动的工作流，通过自托管运行器实现项目隔离，分层运行有序操作。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行平台（Sauce Labs、Browser Stack）集成。开源项目免费，个人用户每周有限检查点免费。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接通过浏览器测试您的Android和iOS应用。免费套餐每月包含两个并发会话，每次使用30分钟。应用大小无限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，让不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能退化。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"监控即代码"工作流和Playwright。开发者享有慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员免费工具，检查API是否针对给定域名启用CORS并识别差距。获取可操作见解。
* [cypress.io](https://www.cypress.io/) - 对浏览器中运行内容进行快速、简单和可靠的测试。Cypress测试运行器始终免费开源且无限制。Cypress仪表板对开源项目免费，最多5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在导致面向客户的问题前发现弱点。Gremlin Free支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐含最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供测试平台，可帮助不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）及模拟或桩（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试，支持任何CI提供商。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持最多10分钟测试文件，开源项目无限套餐免费。
* [lambdatest.com](https://www.lambdatest.com/) — 在Selenium和Cypress上进行手动、视觉、截图和自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费套餐每月模拟最多50个并发用户，最长60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
* [octomind.dev](https://www.octomind.dev/) - 使用AI辅助测试用例生成自动生成、运行和维护Playwright UI测试
* [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐每日10次测试，每周5次实验，每月最多15GB数据摄入。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限iOS和Android各10次测试，但包含付费计划大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话录制](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费套餐最多10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源及改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen，但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最长3分钟。发现错误？可复制测试唯一URL向开发者展示如何复现。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
* [TestCollab](https://testcollab.com) - 用户友好型测试管理软件，免费套餐包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育工作者及初创小团队可申请基础免费项目之外的折扣或免费服务。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求，支持转发至本地服务器或历史记录回放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，集成工具链、组件和设计系统可加速迭代、优化设计并简化开发流程。无限项目支持且提供五年免费维护。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 通过专属URL调试检查webhook与HTTP请求，支持集成测试。完全免费，可创建无限URL并获取诊断建议。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL与邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知与邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与PKI

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥、IaC、恶意软件、容器扫描、EOL等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的更快捷方式。目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — 亚马逊云服务(AWS)安全与合规审计监控
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期与监控管理。可查询证书透明度日志。测试期间免费支持3个证书和1个用户
* [CodeNotary.io](https://www.codenotary.io/) — 开源平台提供不可篡改的代码/文件/目录/容器公证存证
* [crypteron.com](https://www.crypteron.com/) — 面向.NET和Java应用的云原生安全平台，预防数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言即可分析编解码数据的简易Web工具，堪称加密领域的瑞士军刀。所有功能无限免费使用，支持自托管开源版本
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略来预防配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby/JavaScript/Python/PHP/Elixir/Rust/Java(.NET/Go/Elm/Docker/Terraform/Git子模块/GitHub Actions)项目依赖
* [DJ Checkup](https://djcheckup.com) — Django站点安全漏洞自动扫描工具（基于Pony Checkup项目）
* [Doppler](https://doppler.com/) — 支持同步至多云的通用密钥管理器，免费版支持5个用户及基础权限控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享.env文件。免费支持最多3个团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动检测并修复源代码中的密钥泄露问题，支持350+种密钥类型扫描。25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — 网页应用/服务器/网络漏洞扫描服务，每月10次免费扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境第三方服务的全流程密钥管理。最多5名开发者免费
* [Internet.nl](https://internet.nl) — 测试IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等现代互联网标准支持度
* [keychest.net](https://keychest.net) — SSL证书到期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
* [meterian.io](https://www.meterian.io/) - Java/JavaScript/.NET/Scala/Ruby/NodeJS项目依赖项安全监控。1个私有项目免费，开源项目不限量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 发现并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置安全监控，免费支持25个用户和30天历史记录
* [openapi.security](https://openapi.security/) - 无需注册即可快速检测OpenAPI/Swagger接口安全性的免费工具
* [pixee.ai](https://pixee.ai) - 免费GitHub机器人自动提交PR修复Java代码漏洞（即将支持其他语言）
* [pyup.io](https://pyup.io) — Python依赖项安全监控与自动更新。1个私有项目免费，开源项目不限量
* [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞，审计OWASP风险项
* [report-uri.io](https://report-uri.io/) — CSP与HPKP违规报告服务
* [seclookup.com](https://www.seclookup.com/) - Seclookup API可丰富SIEM中的域名威胁指标，提供域名全面信息以提升威胁检测响应能力。免费获取5万次查询额度[点击此处](https://account.seclookup.com/)
* [snyk.io](https://snyk.io) — 检测修复开源依赖项已知漏洞。开源项目无限次测试与修复，私有项目每月限200次测试
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供的免费供应链安全方案，含应用防火墙CLI工具，可检测70+种供应链风险指标
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL Web服务器配置深度分析
* [SOOS](https://soos.io) - 开源项目无限次SCA扫描。在发布前检测修复安全威胁
* [StackHawk](https://www.stackhawk.com/) 在CI/CD流程中自动化应用扫描，单应用支持无限次扫描和环境
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) - PHP网站免费安全检测、服务器防火墙(WAF)及站点杀毒服务，注册用户可获邮件通知
* [TestTLS.com](https://testtls.com) - 测试SSL/TLS服务安全配置/证书链等，不限于HTTPS协议
* [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，适合个人研究者及初学组织。最多3个用户免费
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版每周可执行XSS扫描
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加解密及自动密钥管理。单应用每月100万次加解密免费
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全等数字安全工具。250用户以下应用免费

  * [Escape GraphQL 快速扫描](https://escape.tech/) - 一键式 GraphQL 端点安全扫描。免费，无需登录。
  * [我的秘密泄露了吗](https://gitguardian.com/hasmysecretleaked) - 免费搜索 2000 万条公开 GitHub 仓库、代码片段、议题和评论中暴露的敏感信息
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 全能 SSL 工具包，提供私钥 & CSR 生成器、SSL 证书解码器、证书匹配器和 SSL 证书订购等功能。用户可通过 CNAME 记录（而非 TXT 记录）从 Let's Encrypt、Google Trust 和 BuyPass 获取免费 SSL 证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000名月活跃用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码验证等功能。提供前后端应用SDK。免费支持1000名MAU和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费方案包含2.5万名MAU、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速实现无密码登录、OTP验证、双因素认证(2FA)和SSO。包含完整前端组件。免费支持5000名MAU。
* [360username](https://360username.com/) - 免费用户名检索工具，可跨90+社交平台查找匹配的个人资料。
* [Authress](https://authress.io/) - 认证登录与访问控制服务，支持无限身份提供商集成（包括Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)解决方案，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度访问控制服务，免费支持100名月活跃主体。
* [Clerk](https://clerk.com) - 用户管理系统，提供2FA/MFA及预构建的登录/注册/个人资料等UI组件。免费支持1万名MAU。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100名用户和1个域。
* [Corbado](https://www.corbado.com/) - 为新旧应用添加优先通行密钥认证。不限MAU永久免费。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500名活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)方案。免费支持10名用户，包含全认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 分钟级集成的轻量级认证方案。免费启动包含7500名MAU。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的2FA方案，免费支持10名用户，适用于VPN/网站/SSH场景。
* [MojoAuth](https://mojoauth.com/) - 快速实现无密码认证，支持Web/移动/各类应用集成。
* [Okta](https://developer.okta.com/signup/) - 用户管理与认证授权服务。免费支持100名MAU。
* [onelogin.com](https://www.onelogin.com/) - 身份即服务(IDaaS)与SSO提供商，免费支持3个企业应用+5个个人应用（不限用户数）。
* [Ory](https://ory.sh/) - 零信任安全平台，集成AuthN/AuthZ/OAuth2.0。开发者账户永久免费，包含全安全功能、无限团队成员、200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC策略，含实时更新和无代码策略界面。免费1000名MAU。
* [Phase Two](https://phasetwo.io) - 增强版Keycloak开源身份管理方案。免费域支持1000名用户+10个SSO连接，包含[组织管理](https://phasetwo.io/product/organizations/)扩展功能。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证即可添加企业SSO。免费方案含无限MAU、无限组织、2个SSO+2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 集成认证与反欺诈的全能平台。免费方案含1万名MAU、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) - 开发者友好的开源认证方案，5分钟快速入门。可免费自托管，SaaS版提供1万名免费MAU。
* [SuperTokens](https://supertokens.com/) - 原生集成的开源用户认证方案，在快速启动同时保持用户体验可控。免费支持5000名MAU。
* [Warrant](https://warrant.dev/) - 企业级托管授权服务。免费层含100万次月API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的多租户(B2B)用户与访问管理系统。免费2.5万次认证请求，全安全功能无限制（OTP/无密码/策略等均开放）。
* [PropelAuth](https://propelauth.com) - 快速实现企业级销售功能，免费支持200名用户和1万封事务邮件（含"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 集成开发、安全与管理的用户身份方案（含认证授权功能）。免费5000名MAU，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万MAU。集成邮箱密码登录、社交认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用质量保障首选平台。免费方案包含：一个应用、分析功能、无限版本与安装、以及反馈收集。
* [Loadly](https://loadly.io) - iOS 和 Android 测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传。
* [Diawi](https://www.diawi.com) - 直接将 iOS 和 Android 应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、十次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发 iOS 和 Android 应用。免费方案包含：无限制上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发。免费方案包含一个应用项目、三个应用版本、500 MB 存储空间以及每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含五个应用、每月50次下载以及最大100 MB 文件大小。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM工具（含DevOps功能）。免费支持100台设备，包含1个用户许可和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad/iPhone/Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时管理设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理部署工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。提供单台服务器的免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理监控PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态感知、消息持久化和投递保证的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道。
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、1万条队列消息，支持多可用区节点部署。
* [courier.com](https://www.courier.com/) - 统一API集成推送、应用内消息、邮件、聊天、短信等多渠道通知，含模板管理等功能。免费套餐每月1万条消息。
* [Engage](https://engage.so/) - SaaS客户互动与自动化全栈工具（邮件/推送/SMS/产品导览/横幅等）。每月免费支持1,000名活跃用户。
* [engagespot.co](https://engagespot.co/) - 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐每月1万条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网MQTT消息代理。永久免费连接100台设备（无需信用卡）。
* [knock.app](https://knock.app) - 开发者通知基础设施。单次API调用支持应用内/邮件/SMS/Slack/推送等多渠道发送。免费套餐每月1万条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含1万条通知/月+100条SMS和自动语音呼叫。
* [Novu.co](https://novu.co) - 开源通知基础设施。统一管理邮件/SMS/站内信/应用内/推送等渠道，免费套餐每月3万条通知（保留90天）。
* [pusher.com](https://pusher.com/) - 实时消息服务。免费支持100个同时连接和20万条消息/天。
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费支持20个同时连接和10万事件/天。
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务。覆盖全球/AWS/GCP/Azure，永久免费套餐含4KB消息大小、50个活跃连接和5GB数据/月。
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC(SFU/MCU)的视频通信API，支持实时数据注入、视频布局、录制及全功能托管UI。[开发者免费层](https://apiservice.eyeson.com/api-pricing)含每月1000分钟会议时长。
* [webpushr](https://www.webpushr.com/) - 网页推送通知。免费支持1万订阅用户，推送次数不限，含浏览器内消息功能。
* [httpSMS](https://httpsms.com) - 通过Android手机作为SMS网关收发短信。免费套餐每月200条消息。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 秒级获取的可扩展安全Serverless MQTT代理。永久免费100万会话分钟/月（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知。通过API/Webhooks轻松集成，免费套餐每天50条消息至1台设备1个应用。
* [SuprSend](https://www.suprsend.com/) - API优先的智能通知基础设施，统一处理事务性/定时/互动通知。免费套餐每月1万条通知，含摘要/批量/多渠道/租户等高级功能。
* [SMSGate](https://sms-gate.app) - Android™短信云网关服务，完全免费（建议日超1万条时通知以维持服务质量）。

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费计划包含50GB存储，保留15天，支持7天内的搜索。
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB，保留7天
* [log.dog](https://log.dog/) — LogDog是一款远程调试/日志记录SDK（支持iOS和Android），提供Web界面。实时捕获所有日志、请求和事件，并支持拦截。每月免费100MB日志。
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天。
* [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目。
* [openobserve.ai](https://openobserve.ai/) — 每月免费200GB数据摄入，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言。
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库完全免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层级的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成。
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助与人工翻译，慷慨的免费计划（含2用户、500键、无限项目）。
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 2000条翻译免费，无限译者，10种语言/项目，1000个可翻译资源/项目
* [oneskyapp.com](https://www.oneskyapp.com/) — 最多5用户的有限免费版，开源项目免费
* [POEditor](https://poeditor.com/) — 1000条字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 100个翻译键免费，无限字符串，无限语言，初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费
* [Translation.io](https://translation.io) - 开源项目免费
* [Translized](https://translized.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [webtranslateit.com](https://webtranslateit.com/) — 500条字符串免费
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层10,000条字符串源），无限自托管本地部署。
* [Free PO editor](https://pofile.net/free-po-editor) — 全员免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费10,000词。

**[⬆️ 返回顶部](#目录)**

## 监控

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 提供24小时免费指标监控，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js应用
* [appneta.com](https://www.appneta.com/) — 免费版提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试控制中心。小流量使用免费（64MB日志）
* [assertible.com](https://assertible.com) — 自动化API测试与监控。提供团队和个人免费方案
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班调度/告警和状态页面于一体的产品。免费方案包含10个监测点（3分钟检查频率）和状态页面
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监控器，无限用户/仪表盘/告警规则
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控及深度API监控。免费方案含1用户和1万次API&网络检查/1500次浏览器检查运行
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费版：无限按需扫描/用户/存储账户。订阅版：自动化扫描、API访问等
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史数据
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行监控。免费层含5个监控器
* [datadoghq.com](https://www.datadoghq.com/) — 免费支持最多5个节点
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。免费1个监控点，推荐注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行监控器，5分钟间隔。支持邮件、Slack告警
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费低于5000美元免费
* [elastic.co](https://www.elastic.co/solutions/apm) — JS开发者即时性能洞察。24小时数据保留免费
* [fivenines.io](https://fivenines.io/) — 实时仪表盘与告警的Linux服务器监控——永久免费监控最多5台服务器（60秒间隔）。无需信用卡
* [Grafana Cloud](https://grafana.com/products/cloud/) - 可组合观测平台，集成指标与日志。免费版：3用户/10仪表盘/100告警，Prometheus和Graphite指标存储（1万序列14天保留），Loki日志存储（50GB日志14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控定时任务与后台作业。免费支持最多20个检查点
* [incidenthub.cloud](https://incidenthub.cloud/) — 云服务与SaaS状态页聚合器——永久免费提供20个监控点和2个通知渠道（Slack与Discord）
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整实时监控面板，提供永久免费层
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费且不限订阅用户与团队
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用与服务器监控，免费支持500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立测速与TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，免费最多5个监测点
* [linkok.com](https://linkok.com) - 在线死链检测器，小网站（100页内）免费，开源项目完全免费
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware观测平台提供应用与技术栈全景可视性，支持规模化监控与诊断。开发者社区永久免费版含100万日志事件监控、2台主机的基础设施监控与APM
* [MonitorMonk](https://monitormonk.com) - 极简正常运行监控与精美状态页。"永远免费"方案支持10个网站/API端点的HTTPS、关键词、SSL及响应时间监控，提供2个仪表盘/状态页
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标收集工具。发展中的产品，GitHub也可找到！
* [newrelic.com](https://www.newrelic.com) — 为工程师打造的可观测性平台，助力构建更完美软件。从单体到无服务架构，可检测全栈并分析、排查、优化。免费层含100GB/月数据摄入、1个全权限用户及不限基础用户
* [nixstats.com](https://nixstats.com) - 单服务器免费。含邮件通知、公开状态页、60秒间隔等
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API正常运行监控、定时任务监控及状态页。免费层含5个检查点（3分钟间隔），通过Slack、Discord和邮件告警
* [OntarioNet.ca CN测试](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中美服务器DNS结果与ASN信息识别DNS污染
* [opsgenie.com](https://www.opsgenie.com/) — 强大告警与值班管理，保障服务永续运行。免费支持5用户
* [paessler.com](https://www.paessler.com/) — 强大基础设施与网络监控方案，含告警、可视化及基础报表。免费支持100个传感器
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监测点每日检查
* [pagerly.io](https://pagerly.io/) - Slack值班管理（集成Pagerduty/OpsGenie）。免费支持1个团队（一个团队指一个值班组）
* [pageradar.io](https://pageradar.io/) — 监控网站核心网页指标、SEO变更与正常运行时间。免费方案含5个URL、每日核心指标监控、10个HTML/SEO变更监测器、167国联盟链接监控及邮件告警
* [pagertree.com](https://pagertree.com/) - 简洁告警与值班管理界面。免费支持5用户
* [phare.io](https://phare.io/) - 正常运行监控，免费支持10万事件（不限项目与状态页）
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行监控服务。无限URL检查，通过Discord/Slack/邮件接收宕机通知
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行监控器（10分钟间隔）。支持SSH/HTTP/HTTPS及自定义TCP端口监控
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可定制公开状态页（SSL子域名）。开源项目与非营利组织可免费使用专业版
* [Pulsetic](https://pulsetic.com) - 10个监控器、6个月历史运行数据/日志、无限状态页与自定义域名！永久免费且不限邮件告警。无需信用卡

  * [sematext.com](https://sematext.com/) — 免费提供24小时指标监控，支持无限服务器、10个自定义指标、50万自定义指标数据点、无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台下的强大服务器监控，整合指标与日志功能，零配置复杂度。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务及SSL证书监控，每类提供5个免费监控项
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 免费2个监控项
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails应用）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行状态监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等功能。免费版包含10个HTTP监控器、1个DNS监控器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，助力实践SRE最佳方案。永久免费计划支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，免费无限测试（含功能限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监控项
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS及域名监控。免费监控10台服务器、10个运行时间项和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标功能
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20个主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监控项（5分钟间隔）及可定制状态页（含商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、SRE和DevOps团队的端到端事件管理、告警、值班管理与响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 稳定运行时间监控平台，支持Cron任务、关键词、网站、端口、Ping等多种监控类型。免费提供25个监控项（3分钟检查间隔），通过电话、短信、邮件和Webhook发送告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20项免费；Linux/Windows服务器监控：5项免费；状态页：1项免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 支持截图和点击轨迹的JavaScript错误追踪。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务。每月5,000次错误免费，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费记录
* [elmah.io](https://elmah.io/) — 为开发者提供的错误日志与运行状态监控。开源项目可免费使用小型企业订阅。
* [Embrace](https://embrace.io/) — 移动应用监控。小团队每年100万用户会话内免费。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000次事件/1用户免费。开源且支持无限量自托管。
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪。兼容开源Sentry SDK。每月1,000次事件免费，自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态及定时任务监控。小团队和开源项目免费（每月12,000次错误）。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备100台免费。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含每月5,000次错误、无限用户、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费计划。每月5,000次错误/1用户免费，自托管无限使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志（保留30天）。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询。
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好型一键错误报告。免费计划无限次提交。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用途免费无限录制。

**[⬆️ 返回顶部](#目录)**

## 搜索

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。另提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
* [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
* [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费支持最多1,000名月活跃用户，不限指令数量。
* [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
* [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板与编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可完整克隆编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具与技术
* [LabEx](https://labex.io) - 通过交互式实验室和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等开发领域的免费学习路线图
* [思科网络学院-Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证对齐的免费课程
* [MIT开放式课程](https://ocw.mit.edu/) - 发布2500+门MIT课程资料，向全球学习者免费开放。YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - 提供HTML/CSS/JavaScript等Web开发技术的免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 免费学习基础/高级HTML/CSS、JavaScript和SQL的在线指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL/TypeScript等，完全在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，专注计算机/工程/数据科学领域
* [Django教程网](https://django-tutorial.dev) - 免费Django学习指南，为用户文章提供dofollow反链
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证的免费自学培训，涵盖Python Click和Flask-RESTx
* [Exercism](https://exercism.org) - 非营利组织提供的75+编程语言免费教育平台，含人工指导

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源的匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，最多100名免费订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件及事务性外发 - 每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly但用于联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者易用的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP、POP3、SMTP、SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具，可避免暴露凭证。免费层包含200次月请求、2个邮件模板、50KB请求限制及有限联系历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户（但不限于）。完全免费的反事务性邮件服务，邮件永不投递
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，使用多种域名。每次刷新页面即更新邮箱地址。完全免费无收费服务
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200封邮件，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时/一次性邮箱生成器。支持10个域名，可创建无限地址（含广告），但服务完全免费
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发。创建并转发无限量域名邮箱（注意：使用.casa、.cf等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，用于测试构建/QA和CI/CD中的邮件功能。免费账户永久每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，可收发域名邮件
* [Inboxes App](https://inboxesapp.com) — 每天创建最多3个临时邮箱，完成后通过Chrome扩展删除。适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时/一次性收件箱，邮件3天后自动删除。开源且可自托管
* [mail-tester.com](https://www.mail-tester.com) — 测试邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件DNS/SPF/DKIM/DMARC设置，roundsphere.com提供的免费服务
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 提供REST API和SMTP集成的邮件API，每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约86400次/月）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件及自动化流程免费
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP，每月3000封事务性邮件免费
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，可使用任意收件箱
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时/一次性邮箱，自动访问注册链接
* [mailsac.com](https://mailsac.com) - 临时邮件测试免费API，公共邮件托管，出站捕获，邮件转Slack/WebSocket/Webhook（每月1500次API限制）
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP，每月3500封事务性和营销邮件免费。开发用模拟SMTP服务器，免费套餐含1个收件箱、100条消息、无团队成员、每秒2封邮件、无转发规则
* [Mail7.io](https://www.mail7.io/) — QA开发者免费临时邮箱。通过Web界面或API即时创建邮箱地址
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱地址。通过网站或RSS阅读收件
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个收件箱。所有邮箱ID共用单一收件箱
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据并发送至服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周摘要
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务，内置端到端加密。1GB免费存储
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API。免费层（每月10000封）。异步发送。多SMTP服务器支持。黑名单、日志、追踪、Webhook等功能
* [QuickEmailVerification](https://quickemailverification.com) — 每日免费验证100封邮件，并提供DEA检测、DNS查询、SPF检测等免费API
* [Resend](https://resend.com) - 开发者事务性邮件API。每月3000封，每日100封免费，1个自定义域名
* [Sender](https://www.sender.net) 每月15000封邮件，最多2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管的邮箱别名/转发方案。免费5个别名，无限带宽，无限回复/发送。教育工作者（学生、研究员等）免费
* [Substack](https://substack.com) — 无限免费新闻稿服务。收费时开始付费

  * [Takeout](https://takeout.bysourfruit.com) - 持续更新的邮件服务，轻松发送邮件。每月500封事务性邮件免费。
* [temp-mail.io](https://temp-mail.io) — 免费的一次性临时邮件服务，支持同时使用多个邮箱和邮件转发
* [trashmail.com](https://www.trashmail.com) - 免费的一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费的安全邮箱服务提供商，内置端到端加密，无广告，无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管。
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持邮箱确认和一次性邮箱检测；每天25次免费验证。
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱提供商，现提供一系列服务，部分含免费方案。免费方案服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名。
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费方案包含一个并发远程支持许可和5台无人值守电脑的无限时长访问，适用于专业及个人用途。
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储。
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储。捆绑Zoho Office套件（Writer、Sheets和Show）。
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案。
   - [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛。
   - [会议](https://zoho.com/meeting) — 最多3名参会者及10名网络研讨会 attendees。
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理。
   - [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5名 attendees的远程培训。
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品。
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，zip备份，RSS和Atom订阅，访问控制和可定制CSS。
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理20客户/订阅免费，1用户，支付托管由Zoho完成。存储最近40条订阅指标。
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面及最多50笔支付。
   - [Desk](https://zoho.com/desk) — 客户支持管理，3名客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)支持1名远程技术员和5台无人值守电脑。
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储，无限用户，每频道100用户及SSO。
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约安排
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等。

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的功能开关服务，支持无限团队成员，提供卓越支持且价格合理。免费版包含10个功能开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能，跨Web、移动和服务器端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。最多3名用户免费，功能开关和实验无限制。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置，具备Git式版本控制和同步内存本地开关评估。最多5名团队成员免费，功能开关和A/B测试无限制。
* [Molasses](https://www.molasses.app) - 强大的功能开关与A/B测试。免费版支持3个环境，每个环境5个功能开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境、不限请求次数。SDK、分析面板、发布日历、Slack通知等所有功能均包含在永久免费计划中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。免费版提供无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试。代码即配置与全类型TypeScript SDK，深度集成Next.js和React等框架。提供慷慨免费层级和低成本扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、演示版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多款工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 专为商业用途授权的免费字体，以易用格式精心挑选呈现
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接Google CDN，可快速便捷地将众多免费字体嵌入网站
* [FontGet](https://www.fontget.com/) - 提供分类清晰且带标签的多样化可下载字体库
* [Fontshare](https://www.fontshare.com/) - 专业级字体免费服务平台，个人和商业用途均100%免费
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google字体替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费/付费商用字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的Google字体开源库，含CJK（中日韩）字体标签

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。含垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版提供无限表单，每月20次提交，展示Form-Data标识可额外获得2000次提交。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月250次提交。现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交端点。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站的简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，客户团队支持。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每表单每月50次提交限制。
* [Formsubmit.co](https://formsubmit.co/) — 简易HTML表单端点。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。可创建1个表单且提交无限制。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过UI转发提交至邮件/Slack/Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版无限表单和提交，含预制模板、反垃圾和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。含无限表单/提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单端点，完美适配静态站点。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版1个站点1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单和调研工具。50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研和用户行为分析产品。永久免费版支持500月活用户，无限回复和事件，多集成导出和定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端。永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义跳转/响应页，Telegram/Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件/网站/应用内/移动端调研，AI创作工具，25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码的HTML表单集成。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷和表单构建器。免费版5个表单，每表单最多3步骤，50次月回复。
* [Typeform.com](https://www.typeform.com/) — 网站嵌入精美表单。免费版每表单10个字段，100次月回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。支持Webhook通知。免费版签署文件带水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态和JAMStack网站的联系表单，无需后端代码。免费版无限表单/域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研和表单构建器。免费版3个调研/账户，100次月回复，每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速网站表单工具。免费版每月100次提交限制。
* [Formester.com](https://formester.com) - 在网站分享独特风格表单。无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版无限PDF，每PDF3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分和AI的在线表单。免费版收集100次回复，可嵌入网站或链接使用。
* [Qualli](https://usequalli.com) - 移动端应用内调研工具。使用Qualli AI设计完美问题。免费版支持500月活用户，无限表单和触发器。
* [Sprig](https://sprig.com/) - 每月1次应用内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版收集25条总反馈。提供React和Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率趣味调研收集反馈。免费版含1个活跃调研，每调研25次回复，可定制模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护机制，自动即时修复Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub应用每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。仅需2行代码即可调用200多种LLM的统一格式。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Arize AX](https://arize.com) - AI工程平台，帮助AI工程师/项目经理通过内置的Alyx代理评估和观察AI应用及代理。免费产品包括每月25k spans和1GB的摄入量。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供最多1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索，可同时搜索所有应用。搜索助手可利用您的信息回答问题。免费计划提供无限统一搜索和每天5次协同飞行员查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件提供免费试用。
* [Langtrace](https://langtrace.ai) - 使开发者能够追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并与任何可观测性客户端兼容。免费计划每月提供50K次追踪。
* [LangWatch](https://langwatch.ai) - LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1k次追踪和1个DSPy优化工作流。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。永久免费计划包括每月50k次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Phoenix](https://github.com/Arize-ai/phoenix) - 开源平台，用于追踪、模型评估和AI代理实验，由Arize AI团队开发。所有功能在Elastic License 2.0 (ELv2)下开源。
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流中的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - AI原生的快速、简单且安全的商业智能解决方案替代品，如Tableau、Power BI和Looker。Othor利用大型语言模型(LLMs)在几分钟内提供定制商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适用于多样化的开发需求。请注意，这些模型虽免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，去除噪音和回声，同时保留自然的人声清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。由Cloudflare提供支持，全球超过11%的网站信任的开源免费CDN服务
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库内容分发网络
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等平台
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管流行的第三方JavaScript库如jQuery，方便集成到Web应用
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [section.io](https://www.section.io/) — 快速部署和管理完整Varnish缓存解决方案的简易方式，宣称单个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub/GitLab/Bitbucket）、WordPress资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理服务。个人开发者免费（无技术支持）
* [UNPKG](https://unpkg.com/) — npm全资源CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和尺寸调整服务，支持实时图片处理与全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护CDN
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，含免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名及通用SSL证书
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费计划支持5用户和每日1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用，30秒超时限制
* [Apply.build](https://apply.build/) — 免费部署GitHub应用，配置0.5 vCPU/512MB内存，欧洲服务器，自动防火墙，实时性能监控。支持Node.js/Python/Go/Java/静态网站/微服务等
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket），含认证服务。免费版每项目包含1数据库/3存储桶/5云函数
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链，商业用途免费且项目数量不限
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript自动生成可视化CMS的边缘原生前端平台，内置A/B测试/内容分段/实时分析，适合内容型网站和企业级电商。免费支持5k月访问量或开源/个人项目
* [Deno Deploy](https://deno.com/deploy) - 全球边缘计算系统，支持JavaScript/TypeScript/WebAssembly。免费版每日10万请求+100GB月流量
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD/SSH/MariaDB/Postgres的Linux主机服务。免费版1GB存储+1GB月流量，限用免费域名
* [encore.dev](https://encore.dev/) — 通过静态分析自动生成基础设施的无样板后端框架，含业余项目免费云托管
* [flightcontrol.dev](https://flightcontrol.dev/) - 通过Git推送式工作流在自有AWS账户部署Web服务/数据库等。个人GitHub仓库开发者可享免费层（AWS费用另计）
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费实例永不休眠，PostgreSQL免费版限2连接/1万行且无备份
* [leapcell](https://leapcell.io/) - 分布式应用平台，免费版含10万次服务调用/1万异步任务/10万Redis命令
* [pipedream.com](https://pipedream.com) - 开发者专属集成平台，基于任意触发器构建无服务器[免费](https://docs.pipedream.com/pricing/)工作流
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费版含1个your-username.pythonanywhere.com应用/512MB存储/1个MySQL库
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS部署JavaScript应用。免费预览版每小时500次调用（每日2,500次/月5万次），付费版支持自定义域名
* [Koyeb](https://www.koyeb.com) - 全球部署的无服务器平台，支持Docker容器/Web应用/API。免费实例位于德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1CPU，法兰克福/华盛顿/新加坡提供免费托管PostgreSQL
* [Napkin](https://www.napkin.io/) - FaaS服务含500MB内存/15秒超时/月5千次API调用（限速5次/秒）
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管平台，Meteor应用免费含MongoDB共享主机和自动SSL
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费版含2服务/2定时任务/1数据库
* [YepCode](https://yepcode.io) - 无代码界面编程语言赋能的API连接平台，免费版含[1,000次yeps](https://yepcode.io/pricing/)
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)含3项目/1GB出口流量/300分钟月构建时长
* [Zeabur](https://zeabur.com) - 一键部署服务，免费支持3个服务+每月5美元额度
* [mogenius](https://mogenius.com) - 简易Kubernetes服务部署平台，免费版支持本地Kubernetes连接
* [DeployApps](https://deployapps.dev/) - 非商业/学术专属无服务器函数服务，免费含100万次调用/100GB流量/10个定时任务
* [Choreo](https://wso2.com/choreo/) - AI原生内部开发者平台，免费版含5组件+100美元月额度
* [Daestro](https://daestro.com) - 多云&本地混合计算任务平台，免费版含10并发任务/2计算实例/1云厂商/1容器仓库/1定时任务

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用内触发事件时发送Slack消息或添加Google Sheet行记录。每月免费支持5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与网页Baas服务，免费提供1GB文件存储、每月5万次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上快速搭建Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — 提供文档与资源以构建企业级数字创新方案，包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1000用户的免费应用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录，500万次月度函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器和基础设施的托管语言。Beta期间可用，正式版后将提供慷慨免费套餐。
* [Firebase](https://firebase.com) — 助力构建成功应用。免费Spark计划包含身份验证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发等多项功能永久免费。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用界面，集成Firebase。免费计划含完整UI生成器和免费模板。
* [getstream.io](https://getstream.io/) — 数小时内实现可扩展的聊天、消息、视频音频及信息流功能。
* [hasura.io](https://hasura.io/) — 为现有数据库提供即时GraphQL API，免费额度1GB/月数据传输。
* [nhost.io](https://nhost.io) - 网页与移动应用的无服务器后端，免费套餐含PostgreSQL、GraphQL（Hasura）、身份验证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月1万封邮件发送，不限联系人且支持自动预热。
* [paraio.com](https://paraio.com) — 带灵活身份验证、全文搜索和缓存的后端API。单个应用免费，1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息、100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务，每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) — 推送通知服务，2000订阅者内不限通知次数。
* [pusher.com](https://pusher.com/beams) — 2000月活跃用户内免费无限推送通知，统一iOS/Android API。
* [quickblox.com](https://quickblox.com/) — 即时消息、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置含身份验证、数据、文件等服务的服务器，组合成数据转换管道。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) — 使用低代码工具快速构建应用，免费计划开放完整Lightning平台功能。
* [simperium.com](https://simperium.com/) — 实时自动同步多平台数据，免费额度2500用户/月。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，免费计划含身份验证、实时数据库和对象存储。
* [tyk.io](https://tyk.io/) — 含身份验证、配额监控的API管理服务，提供免费云版本。
* [zapier.com](https://zapier.com/) — 连接应用实现自动化，免费版每15分钟5次触发/100任务每月。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用与设备，免费支持2个小程序。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务，免费100次任务/15分钟更新/5个自动化流程/Webhook支持。
* [LeanCloud](https://leancloud.app/) — 移动后端服务，免费含1GB数据存储、256MB实例、每日3千次API请求和1万次推送。
* [Claw.cloud](https://run.claw.cloud) - PaaS平台，为GitHub账号注册超过180天的用户提供5美元/月免费额度，适合托管应用及数据库等。（[含免费额度注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [Appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表盘的低代码项目。支持15+种数据库和任意API集成。
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表盘的低代码平台。支持SQL数据库和REST API。
* [BudiBase](https://budibase.com/) — Budibase是一个开源的快速创建内部应用的低代码平台。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s。
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，提供可定制的移动和Web应用。具备拖拽式界面、离线支持、实时位置追踪及多种第三方服务集成功能。
* [DronaHQ](https://www.dronahq.com/) — DronaHQ帮助工程团队和产品经理以10倍速度构建内部工具、自定义用户流程、数字体验、自动化系统、管理面板和运营应用的低代码平台。
* [lil'bots](https://www.lilbots.io/) - 在线编写并运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并与团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度。
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙箱环境，支持总用户数、0.5GB存储和1GB内存/应用。免费层亦包含Studio和Studio Pro IDE使用权。
* [outsystems.com](https://www.outsystems.com/) — 支持本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限制代码和最高1GB数据库。
* [ReTool](https://retool.com/) — 高度可定制的低代码内部应用构建平台。支持JavaScript和API开发，免费层允许每月最多5名用户，不限应用数量和API连接。
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑及代码扩展功能，集中管理集成、认证、权限与审计日志。
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码业务应用框架。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，并通过拖拽式构建器开发应用。
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。支持通过JavaScript、Python和SQL深度定制拖拽式UI，提供云服务和自托管方案。5人以下团队免费使用。
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。免费版支持1名用户每月100万次工作流活动（[德语版本](https://www.manubes.de)同样可用）。

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费虚拟主机，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。可自定义Web服务器，支持FTP/WebDAV/SSH访问。含邮箱、邮件列表和应用安装器。免费版不支持自定义域名。
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL，含应用安装器和邮件发送功能，无广告。
* [Bohr](https://bohr.io) — 非商业项目免费使用，开发者优先的部署平台，简化基础设施配置流程。
* [Bubble](https://bubble.io/) — 可视化编程构建网页/移动应用，免费版带Bubble品牌标识。
* [dAppling Network](https://www.dappling.network/) — 专注Web3前端的去中心化托管平台，提升运行时间与安全性，提供额外访问入口。
* [DigitalOcean](https://www.digitalocean.com/pricing) — 应用平台免费Starter套餐可部署3个静态站点。
* [Drive To Web](https://drv.tw) — 直接从Google Drive/OneDrive发布静态网站，永久免费，每个账户限1个站点。
* [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，支持本地托管与实时公开分享，提供UI/API/CLI多种操作方式。
* [Free Hosting](https://freehostingnoads.net/) — 免费PHP5/Perl/CGI/MySQL/FTP托管，含文件管理器/POP3邮箱/子域名/DNS编辑/网站统计等特色功能。
* [Freehostia](https://www.freehostia.com) — 提供行业领先控制面板和50+应用一键安装，即时设置且无强制广告。
* [HelioHost](https://heliohost.org) — 非盈利性免费主机，含Plesk面板/Python/Node.js/.NET/Perl等支持，1000MB存储+无限带宽+免费子域名。
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持SSL自定义域名，100GB月流量+260+Cloudflare CDN节点。
* [Lecturify](https://www.lecturify.net/index.en.html) — 支持SFTP上传下载的PHP虚拟主机。
* [Neocities](https://neocities.org) — 静态网站托管，1GB存储+200GB流量。
* [Netlify](https://www.netlify.com/) — 每月300信用点（相当于30GB流量）的静态站点构建部署托管服务。
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，含静态/容器化托管及WordPress等应用，免费套餐含1个托管实例+1个数据库+100GB流量+300分钟构建时长。
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管平台，含自动化DevOps工具，开发者与代理商免费使用（无自定义域名）。
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能。
* [render.com](https://render.com) — 一体化云平台，免费提供SSL/全球CDN/私有网络/Git自动部署，支持Web服务/数据库/静态页面托管。
* [SourceForge](https://sourceforge.net/) — 免费创建发布开源软件的协作平台。
* [surge.sh](https://surge.sh/) — 前端开发者专用静态发布工具，支持无限站点与自定义域名。
* [telegra.ph](https://telegra.ph/) — 使用Quill轻松创建网页。
* [tilda.cc](https://tilda.cc/) — 1个站点/50页/50MB存储，仅限170+预设区块中的基础模块，不支持字体/图标/自定义域名。
* [Vercel](https://vercel.com/) — 支持Next.js等静态生成器的Web应用托管平台，每次git push生成专属预览URL，含免费SSL/全球CDN。
* [Versoly](https://versoly.com/) — SaaS建站工具，无限网站+70+区块+5模板+自定义CSS/SEO/表单，无自定义域名。
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，免费套餐支持静态资源/预发布环境/开发应用。
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的Flarum论坛托管（最多250用户，捐赠可移除页脚水印）。
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周/500MB内存/SFTP-1GB磁盘空间。
* [Serv00.com](https://serv00.com/) — 3GB免费空间含每日备份（保留7天），支持Crontab/SSH/Git/SVN/Mercurial及多种编程语言环境。
* [Sevalla](https://sevalla.com/) — 简化应用/数据库/静态网站管理的托管平台，免费套餐含1GB空间/100GB流量/600分钟构建时长/100个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - Cloudflare提供的免费公共DNS解析服务，快速安全（加密DNS查询）。可用于绕过ISP的DNS封锁、防止DNS查询窥探，并支持[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还提供[API调用方式](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 含API的免费DNS服务，集成多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费DDNS服务，支持5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费DDNS，可管理CNAME/MX/SPF/SRV/TXT等多种记录。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户贡献域名的[子域名服务](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面有限额。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙，每月30万次免费查询。
* [noip.at](https://noip.at/) - 免注册无追踪的免费DDNS，域名数量不限。
* [noip](https://www.noip.com/) - 动态DNS服务，免费版支持3个主机名，需每30天确认。
* [sslip.io](https://sslip.io/) - 输入含IP的主机名即返回该IP的免费DNS服务。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - DNS变更监控与自动备份，免费版支持1个域名。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的支持API的免费DNS托管。
* [Glauca](https://docs.glauca.digital/hexdns/) - 最多3个域名的免费托管，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费DDNS，无订阅无广告。
* [LocalCert](https://localcert.net) - 免费提供与公共CA兼容的`.localcert.net`子域名，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地存储IPFS和Arweave网络文件。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。150KB以下的Arweave文件上传完全免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储服务
  * [filebase.com](https://filebase.com/) - 区块链驱动的S3兼容对象存储。永久免费5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月免费10GB存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月免费15GB存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) - 界面类似电子表格，实为关系型数据库，提供无限基数库、每个库1,200行数据和每月1,000次API请求
* [Astra](https://www.datastax.com/products/datastax-astra/) - 云原生Cassandra即服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) - 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类Mongdb查询、键值查找、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用。包含2名开发者席位，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2核CPU、2GiB内存、8GiB存储。每个组织一个集群，无需支付方式。
* [Upstash](https://upstash.com/) - 无服务器Redis服务，免费层每月50万次命令、最大256MB数据库容量和20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，含1节点和8GB存储，专为开发者打造以构建从物联网到AI的下一代应用
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费层提供512MB空间
* [redsmin.com](https://www.redsmin.com/) - Redis在线实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) - 托管Memcache服务。25MB以内免费，含1个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) - 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) - Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行数据、1个月版本历史、最多25名团队成员。
* [skyvia.com](https://skyvia.com/) - 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) - 融合电子表格灵活性、数据库能力与主流商业应用集成的工具。免费方案包含无限用户、10个堆栈和每个堆栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) - TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单元(RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发者体验。永久免费入门方案含9GB总存储、最多500个数据库、3个地理位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) - 时间序列数据库，免费额度为每5分钟3MB写入、30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式化、关联、自动REST API（支持类MongoDB查询）及高效多用户数据管理界面。免费方案支持3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) - 免费层每月提供5,000万请求单元和10GiB存储（价值15美元）。（[什么是请求单元](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) - 托管原生图数据库管理系统/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点、17.5万关系）。
* [Neon](https://neon.tech/) - 托管PostgreSQL，0.5GB总存储、1个项目、10个分支、无限数据库、主分支永久可用（5分钟后自动暂停）、非主分支计算每月20小时活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸机运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) - 托管原生图数据库管理系统，提供GraphQL API。限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时间限制，10GB存储+每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) - 托管原生图数据库管理系统/分析平台，支持类SQL图查询语言和REST API。免费实例含2vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) - TerminusDB的托管免费服务，这是用Prolog和Rust编写的文档与图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个数据库的平台，每个数据库最大10MB，支持MySQL、MariaDB、MongoDB和PostgreSQL。
* [Xata Lite](https://lite.xata.io/) - 内置强大搜索与分析的无服务器数据库。单一API、多类型安全客户端库，优化开发工作流。免费方案提供10个分支和15GB存储，无暂停或冷启动。
* [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL构建的全栈低代码开发平台，为JavaScript开发者提供无服务器后端即服务。可通过UI应用构建器快速开发Web应用并轻松扩展，免费层包含：2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) - 面向B2B应用的Postgres平台。无限数据库、永久可用不关机、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道/WebRTC/WebSocket路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为本地主机提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费方案提供60分钟隧道有效期。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，免费方案支持最多5人加入的无限量局域网式分布式网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket服务平台，部署WebSocket服务器代码后提供wss://URL，并支持性能监控。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务暴露为公共URL。提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装注册，提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑组建类局域网网络。不限节点数。(Hamachi替代方案)
* [segment.com](https://segment.com/) — 事件路由中转中心，免费支持每月10万次事件转发。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，采用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部(如localhost)目标，也可通过隧道将私有网络中的服务器暴露为公共HTTP端点。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控Webhook。免费版每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 不限STUN使用量+500MB/月TURN带宽，限速单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端组成的端到端加密网络，提供桌面/移动/NA客户端及自定义路由配置网页界面。
* [LocalXpose](https://localxpose.io) — 将本地主机服务器暴露到互联网的反向代理。免费版隧道有效期15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行服务到自定义公共URL，并通过访问控制保障安全。免费版支持单集群5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户。
* [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到互联网。免费版包含文件服务器、自定义HTTP头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内网和项目管理工具，免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表和25张工作表
* [Chpokify](https://chpokify.com/) — 团队版计划扑克工具，免费支持5名用户，含Jira集成、无限视频通话和团队会话
* [clickup.com](https://clickup.com/) — 项目管理工具，提供免费版和云存储付费版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 时间追踪和工时表应用，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台，免费版支持5人团队、不限仓库/项目/文档，每月500分钟CI/CD时长和1GB存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版最多10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目、不限用户数和1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具，全功能免费
* [freedcamp.com](https://freedcamp.com/) - 集成任务/讨论/里程碑/时间跟踪/日历/文件/密码管理，免费版不限项目/用户/存储
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具，免费版每月3个公共看板和1次调研
* [GForge](https://gforge.com) — 复杂项目管理与问题跟踪工具，SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专属的文本转图表工具，支持非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比GraphQL模式变更，标记破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 客户支持软件，永久免费版含实时聊天功能，通过脚本快速部署
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用Bug报告与反馈SDK，免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — iOS/macOS应用内用户反馈收集工具，免费版支持1个应用
* [Ilograph](https://www.ilograph.com/) — 多视角基础设施交互图表工具，免费版支持无限私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级敏捷开发管理工具，免费版最多10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版支持2个看板和2名用户（不含附件）
* [kan.bn](https://kan.bn/) - 灵活看板工具，免费版支持1名用户创建无限看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职管理与面试追踪工具，完全免费
* [Kumu.io](https://kumu.io/) — 关系图谱工具，免费版支持无限量公共项目，学生可创建私有项目
* [Linear](https://linear.app/) — 极简问题跟踪工具，免费版不限成员数，支持10MB文件上传和250个问题
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10名用户/20个字段/2GB存储，视频录制限5分钟
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版支持3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队任务管理工具，免费版支持3个项目且不限成员
* [MeuScrum](https://www.meuscrum.com/en) - 免费在线Scrum工具（含看板功能）
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费版提供100MB存储和5名用户，支持无限工作区/会议/工时表
* [Ora](https://ora.pm/) - 敏捷任务管理工具，免费版支持3名用户和10MB文件
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公共项目+2个私有项目（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台，免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版不限成员数，支持5MB文件上传和1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线计划扑克（估算工具）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版支持无限制任务、迭代和工作区，且不设用户数量上限
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，涵盖看板、Scrum等多种流程，免费版支持无限用户和1,000个数据实体{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具，免费版提供1个工作区（含无限任务与项目）、1GB文件存储、1周项目历史记录及每次视频会议最多5人参与
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会、回顾会议与迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5名用户和2个项目，提供高级付费方案
* [teleretro.com](https://www.teleretro.com/) — 趣味性回顾会议工具（含破冰活动/GIF/表情包），免费版包含3次回顾会议和无限成员
* [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具，采用自愿付费模式，用户可选择支付0元且所有功能无限制{[详情](https://tenzu.net/pricing/)}
* [testlio.com](https://testlio.com/) — 问题追踪、测试管理与Beta测试平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版支持每张图表最多4个层级
* [todoist.com](https://todoist.com/) — 协作式与个人任务管理工具，免费版包含：5个活跃项目/每个项目5名用户/5MB文件上传/3个过滤器/1周活动历史记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版提供无限个人看板和10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台与众测服务，免费版支持2个项目5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务平台（含项目/VCS/问题追踪），免费版提供无限项目与协作者及3GB存储空间
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪工具，最多3名用户免费且项目数量不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），支持开源项目与私人项目（3名用户免费），含时间追踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌式项目管理方案，公共仓库/开源组织/非营利机构免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，5名成员以下免费（含5GB附件）
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（专为自由职业者设计，免费版含无限记录/项目/客户/标签/报告等功能）和[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版含无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具（特别适合外包与跨组织协作），免费版支持3个项目5名成员
* [Pulse.red](https://pulse.red) — 极简主义项目时间追踪与工时表应用
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具（含结构化检查清单/模板/任务内审批流程），小团队可使用免费方案

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — Borg Backup的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时优化和调整尺寸。免费套餐含500MB存储和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化与CDN服务，提供多种尺寸调整、压缩和水印功能。含开源插件支持响应式图片、360度图像制作和编辑。免费月套餐含25GB CDN流量、25GB缓存存储及无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 支持Ruby/Python/Java/PHP/Objective-C等库的图片上传、强大处理、存储和交付服务。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放及网页元素提取服务。免费额度为每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间，单次下载后自动删除文件。提供REST API交互，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档、图片、音视频等格式转换与编辑。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API。无限文件大小、带宽和下载次数，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管与CDN流处理服务。免费套餐含每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，开源项目免费使用。优化后文件更小且质量无损。
* [ImgBB](https://imgbb.com/) — 无限图片托管服务，单图限32MB。拖拽上传后可获取直链、BBCode和HTML缩略图，登录查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图片缓存管理与CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费支持1MB以内文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端加速（缓存、图片代码优化、CDN）。免费支持5000次页面浏览/月。
* [otixo.com](https://www.otixo.com/) — 云存储文件加密共享与移动工具。基础版支持无限传输（单文件限250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI托管仓库。限量免费版和开源计划需申请。
* [getpantry.cloud](https://getpantry.cloud/) — 个人项目/黑客松/移动应用适用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费1GB存储。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 5人以下团队可免费使用基础版功能（除用户管理外）。
* [QRME.SH](https://qrme.sh) - 快速批量生成无登录/水印/广告的二维码，每批次最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表与二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持2用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成至WordPress/Drupal/Magento等CMS。处理超70亿图片仍免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API，免费每月20分钟渲染时长。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG压缩API，每月500次免费压缩。
* [transloadit.com](https://transloadit.com/) — 文件上传与音视频/图片/文档转码服务。开源项目/慈善机构/学生通过GitHub学生包免费，商用测试享2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片服务，含CDN/处理API/前端自动化优化库。免费3GB流量/月。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于先进算法的媒体处理管线工具包。开发者免费使用全部功能：文件上传API/UI、图片CDN/源服务、自适应交付和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN，支持自动优化与实时转换。免费套餐含20GB/月带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私的零知识文件存储服务。注册即享永久10GB免费空间。
* [degoo.com](https://degoo.com/) – 基于AI的云存储，免费20GB空间支持三台设备，推荐用户可获5GB奖励（90天不活跃失效）。

  * [ImageEngine](https://imageengine.io/) – 全球图像CDN，60秒快速部署。支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。[免费开发者账户申请](https://imageengine.io/developer-program/)。
* [DocsParse](https://docsparse.com/) – 基于GPT的AI工具，可将PDF/图像转为JSON/CSV/EXCEL结构化数据。每月赠送30次免费额度。
* [VaocherApp二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松创建礼品卡/代金券/促销活动的定制二维码，支持样式/颜色/LOGO等自定义设置。
* [LibreQR](https://libreqr.com) – 注重隐私的免费二维码生成器，无追踪无数据收集。
* [Doradrop](https://doradrop.com) – 无限存储/零广告的文件共享平台，无需登录即可通过安全链接即时分享文件。

* [Ente](https://ente.io/) - 端到端加密的云存储服务，支持照片/视频/2FA密钥托管。可自托管，免费版提供10GB永久存储（仅保留单副本数据）。

**[⬆️ 返回顶部](#目录)**

## 设计与UI

  * [AllTheFreeStock](https://allthefreestock.com) - 精选免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，快速创建现代化响应式网站，非设计师也能轻松打造精美界面
* [Ant Design Landing Page](https://landing.ant.design/) - 基于Ant Motion动效组件构建的模板库，提供丰富主页模板，可下载代码包快速使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，支持设计系统的构建、文档化、发布和维护。免费版允许3名编辑人员参与1个设计系统项目，观众数量不限
* [BoxySVG](https://boxy-svg.com/app) — 可安装的网页版SVG绘制工具，支持导出SVG/PNG/JPEG等多种格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供适用于React/Vue/Svelte的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴应用，同时提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) — 支持208种格式的万能转换工具，包含视频和GIF转换
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库，附带代码片段
* [CodedThemes](https://codedthemes.com/) - 提供精心打造的管理后台模板和UI套件，加速现代网页开发流程
* [ColorKit](https://colorkit.co/) - 在线调色板生成工具，也可从顶级配色方案中获取灵感
* [colorr.me](https://colorr.me/) - 颜色与渐变生成器
* [coolors](https://coolors.co/) - 免费调色板生成工具
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费快速将CMYK值转换为最接近的潘通色及其他色彩模式
* [Branition](https://branition.com/colors) - 为品牌量身定制的手工精选配色方案
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具，支持RGB和HEX格式
* [easyvectors.com](https://easyvectors.com/) — 免费SVG矢量图库，可下载优质矢量图形资源
* [figma.com](https://www.figma.com) — 在线团队协作设计工具，免费版包含无限文件与查看者，最多2名编辑和3个项目
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 界面原型设计与动效制作工具，专业版免费体验包含无限查看者、2名编辑和3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) — 免版权商用图库（含模特/场景授权）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变配色选择工具
* [Icon Horse](https://icon.horse) – 通过简易API获取任意网站最高分辨率favicon
* [Iconoir](https://iconoir.com) – 开源图标库，含数千图标，支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) — 图标/插画/照片/音乐及设计工具集，免费版提供有限格式的低分辨率资源（需标注来源）
* [landen.co](https://www.landen.co) — 无代码生成、编辑和发布精美网站与落地页，免费版支持1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费且开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具，在URL后添加宽高参数即可获取随机图片
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画格式平台，提供适用于Android/iOS/Web的Lottie动画工具与插件
* [MagicPattern](https://www.magicpattern.design/tools) — CSS/SVG背景生成器合集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) — 设计/原型/协作平台，免费版限1用户1项目
* [Mindmup.com](https://www.mindmup.com/) — 云端无限量思维导图工具，多设备实时同步
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作与交付工具，免费版包含3用户5项目（全功能可用）
* [mockupmark.com](https://mockupmark.com/create/free) — 创建逼真的T恤与服装模型（40个免费模板），适用于社交媒体与电商
* [Modeldraw.com](https://modeldraw.com) — 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限团队成员实时协作（无需信用卡）
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器（含波浪/斑点/图案等工具）
* [movingpencils.com](https://movingpencils.com) — 浏览器端矢量编辑器，完全免费
* [NSPolygon](https://nspolygon.com) — 免费图库/图标/插画资源站
* [Octopus.do](https://octopus.do) — 可视化网站地图构建工具，实时创建并快速分享网站结构
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 网页版开源设计与原型工具，支持SVG格式
* [pexels.com](https://www.pexels.com/) - 免版权商用图库，提供按关键词搜索的免费API
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，具有Photoshop风格界面，支持PSD/XCF/Sketch格式
* [pixlr.com](https://pixlr.com/) — 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 快速易用的网页设计与页面构建工具，可集成到代码库中，支持响应式页面与复杂组件开发
* [Pravatar](https://pravatar.cc/) - 生成随机占位头像，支持直接热链引用
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器端直接转换PNG为WebP格式，无需上传，完全客户端处理保障隐私安全
* [Proto.io](https://www.proto.io) - 无需编码的完全交互式UI原型工具，免费版包含1用户/1项目/5原型/100MB存储空间及app预览功能
* [resizeappicon.com](https://resizeappicon.com/) — 简易应用图标尺寸调整与管理服务

  * [storyset.com](https://storyset.com/) — 为您的项目创建令人惊叹的免费定制插画
* [smartmockups.com](https://smartmockups.com/) — 制作产品模型，200个免费模板
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览主题在不同组件和布局中的变化效果
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI区块集合
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可复制粘贴的免费可编辑SVG图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui的优雅主题，实时自定义颜色、排版等
* [UI Avatars](https://ui-avatars.com/) - 根据姓名首字母生成头像，URL可直接嵌入网页/应用，支持通过URL配置参数
* [unDraw](https://undraw.co/) - 持续更新的精美SVG图片库，可免授权自由使用
* [unsplash.com](https://unsplash.com/) - 免版权商用/非商用图库（无限制许可）
* [vectr.com](https://vectr.com/) — 网页+桌面版免费设计工具
* [walkme.com](https://www.walkme.com/) — 企业级引导互动平台，免费版支持3个最多5步的导览流程
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持两个项目
* [Updrafts.app](https://updrafts.app) - TailwindCSS设计的可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便签/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持一个项目
* [Pixelixe](https://pixelixe.com/) — 在线创建编辑独特图形图像
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线模型图编辑器，含海量免费设计模板
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，前5页免费
* [Mastershot](https://mastershot.app) - 无水印的免费浏览器视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的简易落地页生成器，免费建1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌LOGO库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的免费工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端开发平台，免费3个项目且支持代码导出
* [vector.express](https://vector.express) — 快速转换AI/CDR/DWG等矢量格式
* [Vertopal](https://www.vertopal.com) - 免费在线文件转换平台（含JPG转SVG等开发者工具）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/SVG等格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌LOGO的API服务，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费商用Bootstrap/Angular/React/Vue组件库（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) -- 免费Tailwind CSS组件库（减少类名书写）
* [Scrollbar.app](https://scrollbar.app) -- 网页滚动条设计工具
* [css.glass](https://css.glass/) -- 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) -- Tailwind CSS渐变色合集与生成器
* [iconify.design](https://icon-sets.iconify.design/) -- 100+图标库统一搜索平台
* [NextUI](https://nextui.org/) -- 免费现代化React/Next.js UI库
* [Glyphs](https://glyphs.fyi/) -- 免费开源可编辑图标系统
* [ShadcnUI](https://ui.shadcn.com/) -- 可复制粘贴的优美开源组件
* [HyperUI](https://www.hyperui.dev/) -- 免费Tailwind CSS组件库
* [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成全年日期图标
* [Image BG Blurer](https://imagebgblurer.com/) -- 为图片生成模糊背景框（支持Notion等工具）
* [Webstudio](https://webstudio.is/) -- Webflow开源替代品，免费版支持无限网站
* [Nappy](https://nappy.co/) -- 黑人/棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) -- Tailwind模板/组件/工具合集
* [Tailcolors](https://tailcolors.com/) -- Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) -- 免费在线绘图工具（支持本地保存）
* [Lunacy](https://icons8.com/lunacy) -- 内置素材的免费图形设计工具（离线可用）

  * [SVG转换器](https://svgconverter.online/) -- 支持调色板定制的免费JPG/PNG转SVG工具
* [OKLCH](https://oklch.net/) -- 为网页设计师和开发者提供的免费OKLCH取色器及转换工具

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
* [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台，可按UI/UX项目分类筛选。
* [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常并非来自实际应用。
* [Landings](https://landings.dev/) - [网页截图] 根据您的偏好寻找最佳着陆页设计灵感。
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] Lapa Ninja是一个展示6025个最佳着陆页示例的画廊，提供设计师免费书籍和网络上的免费UI套件。
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图，包括桌面、平板和移动设备截图。
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI和UX研究时间。
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索非洲及全球领先公司的移动和网页UI设计。
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
* [Page Flows](https://pageflows.com/) - [移动端/网页视频和截图] 多个移动和网页应用的完整流程视频，还包括截图，高度可搜索和索引。
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势，可按模式和应用程序筛选。
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的应用商店设计截图集合。
* [Refero](https://refero.design/) - [网页截图] 标记和可搜索的优秀网页应用程序设计参考集合。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求。
* [carto.com](https://carto.com/) — 从您的数据和公共数据创建地图和地理空间API。
* [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样精准的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程）。
* [developers.arcgis.com](https://developers.arcgis.com) — 为Web、桌面和移动设备提供地图、地理空间数据存储、分析、地理编码、路径规划等API和SDK。每月免费提供两百万次基础地图瓦片、20,000次非存储地理编码、20,000次简单路径规划、5,000次行驶时间计算和5GB免费瓦片+数据存储。
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK提供位置发现、场所搜索和情境感知内容。
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点、路径规划、等值线API。每天3,000次免费请求。
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天2,500次免费查询。
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月10,000次免费查询。
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理位置查询API。
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析并共享地理数据。
* [graphhopper.com](https://www.graphhopper.com/) — 免费开发者套餐提供路径规划、路径优化、距离矩阵、地理编码和地图匹配服务。
* [here](https://developer.here.com/) — 为地图和位置感知应用提供API和SDK。每月25万次免费事务处理。
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每天5,000次免费请求。
* [mapbox.com](https://www.mapbox.com/) — 地图、地理空间服务及展示地图数据的SDK。
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。免费矢量瓦片每周更新并提供四种地图样式。
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索功能和反向地理编码能力。
* [nextbillion.ai](https://nextbillion.ai/) — 地图相关服务：地理编码、导航（方向、路径规划、路径优化、距离矩阵）、地图SDK（矢量、静态、移动SDK）。[每项服务均有免费配额](https://nextbillion.ai/pricing)。
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap及其他开放地理数据源的地理编码API。每天2,500次免费查询。
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面的受欢迎程度排序。
* [positionstack](https://positionstack.com/) — 全球地点与坐标的免费地理编码服务。个人使用每月25,000次请求。
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航及其他地理空间API。非商业用途和测试每天2,500次免费地图浏览和API请求。
* [maps.stamen.com](http://maps.stamen.com/) — 免费地图瓦片及瓦片托管服务。
* [ipstack](https://ipstack.com/) — 通过IP地址定位和识别网站访问者。
* [Geokeo api](https://geokeo.com) — 支持语言校正的地理编码API，覆盖全球范围。每天2,500次免费查询。

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [3v4l](https://3v4l.org/) - 免费在线PHP执行环境，支持300+个PHP版本运行代码片段
* [Android Studio](https://developer.android.com/studio) — 官方Android开发IDE，支持全类型设备应用开发。开源免费，支持Windows/Mac/Linux/ChromeOS系统
* [AndroidIDE](https://m.androidide.com/) — 开源Android设备专用IDE，支持基于Gradle的真实应用开发
* [Apache Netbeans](https://netbeans.apache.org/) — 集成开发环境与工具平台
* [apiary.io](https://apiary.io/) — 协作式API设计平台，提供即时模拟接口和文档生成（免费版支持无限量API蓝图和用户，含托管文档）
* [BBEdit](https://www.barebones.com/) - macOS平台知名可扩展编辑器，[免费版提供核心功能集](https://www.barebones.com/products/bbedit/comparison.html)
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的免费公共服务
* [BlueJ](https://bluej.org) — 面向初学者的Java开发环境，全球数百万人使用，由Oracle支持
* [Bootify.io](https://bootify.io/) - Spring Boot应用生成器，支持自定义数据库和REST API
* [Brackets](http://brackets.io/) - 专为网页开发设计的开源轻量级文本编辑器
* [cacher.io](https://www.cacher.io) — 支持100+编程语言的代码片段管理器
* [Code::Blocks](https://codeblocks.org) — 免费Fortran/C/C++ IDE，支持Windows/macOS/Linux
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，支持代码补全/理解/修复/搜索，兼容VS Code/JetBrains/网页版
* [codiga.io](https://codiga.io/) — 直接在IDE中搜索/定义/复用代码片段的工具，个人和小团队免费
* [codesnip.com.br](https://codesnip.com.br) — 简易代码片段管理器，支持分类/搜索/标签
* [cocalc.com](https://cocalc.com/) — 云端协作计算平台，预装Python/LaTeX/Jupyter/SageMath等数学科学工具
* [code.cs50.io](https://code.cs50.io/) - CS50课程专用网页版VS Code，基于GitHub Codespaces
* [codepen.io](https://codepen.io/) — 前端开发者的代码游乐场
* [codesandbox.io](https://codesandbox.io/) — React/Vue/Angular等框架的在线沙盒
* [Components.studio](https://webcomponents.dev/) - 独立开发组件，可视化故事测试并发布至npm
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Kubernetes的多语言Web IDE，[Red Hat托管实例](https://workspaces.openshift.com/)
* [fakejson.com](https://fakejson.com/) — 通过API快速生成模拟JSON数据
* [ForgeCode](https://forgecode.dev/) — 支持Claude/GPT4等模型的AI编程助手，免费版含基础模型访问
* [GetVM](https://getvm.io) — 浏览器侧边栏即时Linux环境，免费版每日5次VM使用
* [ide.goorm.io](https://ide.goorm.io) 云端全功能IDE，支持多语言/网页终端/实时协作/Git，免费版含1GB内存和10GB存储
* [JDoodle](https://www.jdoodle.com) — 60+语言在线编译器，免费版每日200次API调用
* [jetbrains.com](https://jetbrains.com/products.html) — IntelliJ/PyCharm等IDE，学生/教师/开源团队免费
* [jsbin.com](https://jsbin.com) — 前端开发游乐场，支持HTML/CSS/JS/Markdown等
* [jsfiddle.net](https://jsfiddle.net/) — 支持协作的前端代码分享平台
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供模拟JSON数据的REST API
* [Lazarus](https://www.lazarus-ide.org/) — Delphi兼容的跨平台快速开发IDE
* [MarsCode](https://www.marscode.com/) - 免费AI云端IDE
* [micro-jaymock](https://micro-jaymock.now.sh/) - 轻量级API模拟服务
* [mockable.io](https://www.mockable.io/) — 可配置的REST/SOAP模拟服务
* [mockaroo](https://mockaroo.com/) — 生成CSV/JSON/SQL等格式的测试数据
* [Mocklets](https://mocklets.com) - HTTP模拟API工具，提供终身免费版
* [Paiza](https://paiza.cloud/en/) — 浏览器内开发Web应用，免费版提供24小时有效期的服务器
* [Prepros](https://prepros.io/) - 支持Sass/Less/TypeScript等语言的实时编译工具
* [Replit](https://replit.com/) — 多语言云端编程环境
* [SoloLearn](https://code.sololearn.com) — 云端代码执行平台，含免费编程课程
* [stackblitz.com](https://stackblitz.com/) — 全栈应用在线IDE，支持Node.js框架，快捷入口：[node.new](https://node.new)
* [Sublime Text](https://www.sublimetext.com/) - 高度可定制化的流行文本编辑器

  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 全功能集成开发环境，拥有数千款扩展，支持跨平台应用开发（提供适用于iOS和Android的Microsoft扩展下载）、桌面/网页/云端开发，支持多语言（C#、C++、JavaScript、Python、PHP等）
* [VSCodium](https://vscodium.com/) — 社区驱动的Microsoft编辑器VSCode二进制发行版，无遥测/追踪功能，采用自由软件许可
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编程活动的自我评估工具，提供免费基础版
* [Wave Terminal](https://waveterm.dev/) — 开源跨平台终端工具，支持无缝工作流。可内联渲染任意内容，保存会话与历史记录，基于开放网络标准，支持MacOS和Linux
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板的Web组件隔离开发，含故事板与测试功能
* [PHPSandbox](https://phpsandbox.io/) — 在线的PHP开发环境
* [WebDB](https://webdb.app) — 免费高效的数据库IDE，功能包含服务器发现、ER图、数据生成器、AI支持、NoSQL结构管理、数据库版本控制等
* [Zed](https://zed.dev/) — 由Atom和Tree-sitter创作者打造的高性能多人协作代码编辑器
* [OneCompiler](https://onecompiler.com/) — 支持70+语言的免费在线编译器（含Java/Python/C++/JavaScript等）

**[⬆️ 返回顶部](#目录)**

## 分析/事件/统计

  * [DocBeacon](https://docbeacon.io) - 安全文档共享平台，提供文档追踪与参与度分析。免费版支持最多20个PDF文档（单个最大10MB）、10个联系人、每文档2次分享，并提供基础的查看/下载量、时长及参与度分析。
  * [Userbird](https://userbird.com) - 替代Google Analytics的工具，提供热力图、会话录制和收入追踪功能。
  * [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史追踪面板（突破14天限制）。免费版允许监控单个仓库的流量。
  * [Dwh.dev](https://dwh.dev) - 面向Snowflake的数据云可观测性解决方案。个人使用免费。
  * [Hightouch](https://hightouch.com/) - 反向ETL平台，帮助将客户数据从数据仓库同步至CRM、营销和支持工具。免费层支持一个数据同步目标。
  * [Avo](https://avo.app/) - 简化的分析发布工作流。提供单一事实来源的追踪计划、类型安全的分析库、应用内调试器和数据可观测性。免费版支持2名工作区成员和1小时数据回溯。
  * [Branch](https://www.branch.io) - 移动端分析平台。免费层支持最多1万移动应用用户，包含深度链接等服务。
  * [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台。免费版支持从数据仓库同步10个字段至60+个SaaS应用（如Salesforce、Zendesk等）。
  * [Clicky](https://clicky.com) - 网站分析平台。免费版支持单个网站3000次浏览分析。
  * [Databox](https://databox.com) - 通过整合其他分析与BI平台提供商业洞察。免费版支持3用户、仪表板及数据源，包含1100万条历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) - 单个网站每月2000次页面浏览免费
  * [amplitude.com](https://amplitude.com/) - 每月100万次事件追踪，最多2个应用
  * [GoatCounter](https://www.goatcounter.com/) - 开源网站分析平台，提供托管服务（非商业用途免费）或自托管选项。作为Google Analytics的隐私友好型替代方案，免费层支持无限网站、6个月数据保留和每月10万页面浏览。
  * [Google Analytics](https://analytics.google.com/) - 谷歌分析
  * [MetricsWave](https://metricswave.com) - 面向开发者的隐私友好型Google Analytics替代方案。免费版每月支持100万页面浏览且无需信用卡。
  * [Expensify](https://www.expensify.com/) - 费用报告工具，免费提供个人报销审批流程
  * [getinsights.io](https://getinsights.io) - 注重隐私的无Cookie分析工具，免费支持每月3000次事件。
  * [heap.io](https://heap.io) - 自动记录iOS或Web应用中的每个用户行为。免费版支持每月1万次会话。
  * [Hotjar](https://hotjar.com) - 网站分析与报告工具。免费版每日2000次页面浏览、100份快照（上限300份）、3份热图可存储365天。同时提供应用内独立调查和带截图的反馈组件，免费层每月可创建3个调查和3个反馈组件，收集20条回复。
  * [Keen](https://keen.io/) - 自定义数据分析平台，支持数据收集、分析与可视化。免费版每月1000次事件
  * [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化与分析服务，完全免费且无用户数与请求限制。
  * [Yandex.Metrica](https://metrica.yandex.com/) - 无限制免费分析工具
  * [Mixpanel](https://mixpanel.com/) - 每月10万追踪用户，无限数据历史记录与席位，可选美国或欧盟数据存储
  * [Moesif](https://www.moesif.com) - REST与GraphQL API分析工具（免费每月50万次API调用）
  * [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，免费入门计划支持1个网站、1个iOS和1个Android应用
  * [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具。免费版有限制，包含100万用户许可。
  * [Row Zero](https://rowzero.io) - 极速联机电子表格。直接连接数据库、S3和API，即时导入/分析/图表化/共享数百万行数据。永久免费3个工作簿。
  * [sematext.com](https://sematext.com/cloud/) - 免费每月5万次操作，1天数据保留，无限仪表板与用户
  * [Similar Web](https://similarweb.com) - 网站与移动应用分析。免费版每指标5个结果，1个月移动应用数据和3个月网站数据。
  * [StatCounter](https://statcounter.com/) - 网站访问者分析。免费版统计最近500位访客。
  * [Statsig](https://statsig.com) - 集分析、功能开关和A/B测试于一体的平台。免费每月100万次计量事件。
  * [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者计划提供个人沙盒许可证，可测试最新预发布版本的所有功能。
  * [usabilityhub.com](https://usabilityhub.com/) - 在真实用户中测试设计原型并追踪访客。单人免费，无限测试
  * [woopra.com](https://www.woopra.com/) - 免费用户分析平台，支持50万次操作，90天数据保留，30+一键集成。
  * [counter.dev](https://counter.dev) - 简约且隐私友好的网站分析工具。免费或按需捐赠。
  * [PostHog](https://posthog.com) - 完整产品分析套件，免费每月100万次事件追踪。同时提供无限应用内调查（每月250条回复）。
  * [Uptrace](https://uptrace.dev) - 分布式追踪工具，帮助开发者定位故障与性能瓶颈。提供免费计划，并为开源项目赠送个人订阅。
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的用户行为录制工具。
  * [Beampipe.io](https://beampipe.io) - 简约隐私优先的网站分析工具。免费支持5个域名和每月1万页面浏览。
  * [Aptabase](https://aptabase.com) - 面向移动和桌面应用的开源隐私友好型简易分析工具。支持Swift/Kotlin/React Native/Flutter/Electron等SDK。免费每月2万次事件。
  * [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护实时追踪计划并促进协作。可直接部署至生产环境或为回归测试添加分析覆盖而无需编码。
  * [LogSpot](https://logspot.io) - 统一网站与产品分析平台，含嵌入式分析组件和自动化机器人（Slack/Telegram/Webhook）。免费版每月1万次事件。
  * [Umami](https://umami.is/) - 简约、快速、隐私优先的开源Google Analytics替代方案。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私优先的Google Analytics替代方案。无限页面浏览/访客/热图/目标追踪。免费支持3个域名且每个域名600次会话回放。

  * [Seline](https://seline.so) - Seline是一款简单私密的网站与产品分析工具。无Cookie、轻量级、独立运营。免费方案每月包含3,000次事件追踪，并提供仪表盘、用户旅程、转化漏斗等完整功能。
* [Peasy](https://peasy.so) - Peasy是专注隐私保护的轻量级网站与产品分析工具。免费方案每月支持3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无Cookie设计且操作体验提升10倍。免费版支持每月3,000次事件追踪。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小工具，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放工具，包含用于错误复现的开发工具、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，数据保留30天，含错误追踪和实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，提供三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [hotjar.com](https://www.hotjar.com/) — 每站点：每月1,050次页面浏览，无限热力图，数据存储三个月
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，"无流量限制"，无项目限制，无采样
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费
* [mousestats.com](https://www.mousestats.com/) — 单个网站每月100次会话免费
* [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500次会话），三个热力图，一个漏斗分析，1个月数据历史
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月最多5,000次访问免费
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限期免费使用

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API/SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次API调用
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页端。免费额度为每月1万美元跟踪收入。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力业务全球化并开拓新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式移动应用订阅解决方案，支持iOS、Android、React Native、Flutter、Unity及网页应用。免费额度为每月1万美元收入。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费层级每月10,000次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率数据。免费开发者计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率，支持JSON和XML格式。免费层级每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 可靠的企业级汇率与货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限制。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈和退单。免费微计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API变现，支持Stripe、Chargebee等支付系统。免费层级每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - 完整的iOS和Android应用内购买与订阅平台，含无代码付费墙、CRM和分析工具。基础功能永久免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管式应用内购买与订阅后端服务（iOS和Android）。免费额度为每月2,500美元跟踪收入。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费每月100次请求。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟10次请求限制。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库用于构建和存储Docker镜像
* [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1GB私有仓库存储空间。
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的游乐场
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant相关

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp Vagrant云服务。托管Vagrant虚拟机的平台。

**[⬆️ 返回顶部](#目录)**  

（注：根据要求保留了所有格式和专有名词，仅对描述性文本进行了本地化翻译。由于原文没有提供完整的上下文和目录锚点，返回顶部的链接保持了原文格式）

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown驱动博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享创意与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客平台
* [Medium](https://medium.com/) — 深度探讨对你重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式微博客免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中构建活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可用 GitHub issues 实现博客评论、维基页面等功能！
* [Disqus](https://disqus.com/) - Disqus 是一个网络社区平台，被全球数十万网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"单个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于AWS Lambda和Chrome的截图API。支持整页截图、捕获时间及视窗尺寸控制
* [microlink.io](https://microlink.io/) – 将任意网站转化为结构化数据，包括元标签标准化、精美链接预览、爬虫功能及截图服务。每日免费250次请求
* [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任何网站的截图。基于Google Cloud构建，支持弹性扩展。每月提供100次免费截图
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图服务。支持任意URL截图，快速、免费且可扩展
* [screenshotlayer.com](https://screenshotlayer.com/) — 可高度定制化的网站快照服务。每月免费100次快照
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次快照（支持PNG/GIF/JPG格式），包含整页截图而不仅限首页
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层级每日500页额度（自2017年持续提供）
* [Webshrinker.com](https://webshrinker.com) — 提供网站截图及域名情报API服务。每月免费100次请求
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求

**[⬆️ 返回顶部](#目录)**

## Flutter相关/无Mac构建iOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab是一款现代化的Flutter在线IDE，是创建、调试和构建跨平台项目的最佳平台。无需Mac即可构建iOS和Android应用。
* [CodeMagic](https://codemagic.io/) - Codemagic是一个全托管的移动应用CI/CD平台。您可以通过基于图形界面的CI/CD工具进行构建、测试和部署。免费套餐每月提供500分钟构建时长，使用2.3GHz处理器和8GB内存的Mac Mini实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow是基于浏览器的拖拽式界面工具，用于使用Flutter构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [JsLinux](https://bellard.org/jslinux) — 一个极快的x86虚拟机，可运行Linux和Windows 2000系统
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使企业符合GDPR等法规要求。免费版仅限小型团队使用且仅支持SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策、Cookie政策及同意管理解决方案。免费版提供有限制的隐私/Cookie政策及横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计与同意管理方案。免费版包含单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理与隐私框架工具。免费版在有限访问量下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整数据隐私平台，涵盖同意管理、隐私请求处理(DSAR)及数据映射。免费版包含核心同意管理功能，并向通过验证的开源项目提供高级免费方案。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图片创建精美的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。支持生成美观图片（适用于Twitter/Facebook）或链接（适用于聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台，免费开发者计划包含5台设备、云端及数据存储，配套移动应用可用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Calcmatic](https://calcmatic.app) — 免费在线计算器集合（含电商利润、支付手续费、物流成本及个人财务），无需登录
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的类截图形式创建和分享代码片段，常用于在Twitter或博客中优雅展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等IDE的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环Webhook调度服务，免费版允许5个临时任务
* [cron-job.org](https://cron-job.org) - 无限任务的免费在线定时任务服务
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月5次预约（含1个日历）
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费版支持5个域名及20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清理/分析图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞扫描方案
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加免运维的Webhook支持（含队列/退避重试/日志），免费版每日100次投递（14天留存+3个端点）
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的主机信息（ASN/ISP/地理位置等），含多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库快速构建自定义功能与应用
* [Base64编解码器](https://devpal.co/base64-decode/) — 免费在线Base64数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/Webhook接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 即时在线查看图片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF，免费版每月300份文档
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/Schema/GraphQL快速生成多语言类型安全代码与序列化器
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥/密码生成工具
* [ray.so](https://ray.so/) - 创建艺术风格的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向服务，免费版含10个源地址+10万次月访问
* [Renamer.ai](https://renamer.ai) — 支持OCR/元数据提取的AI文件重命名工具（20+语言），免费版每月15文件（含桌面端/批量更名/自动命名）
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具（支持GET/POST/PUT/DELETE/HEAD方法及Token认证），含基础请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电量/里程/门锁控制等功能的汽车API
* [snappify](https://snappify.com) - 开发者视觉内容创作平台（从代码片段到技术演示），免费版支持3个同时编辑项目（含无限下载+每月5次AI代码解释）
* [日出日落时间API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的Feed订阅与分析服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷设计与分析平台，免费版每份问卷限10问题+100回复
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人构建平台（支持网站实时聊天到WhatsApp），免费版含无限机器人
* [UUID生成器](https://newuuid.com/) - 即时生成UUIDv1/v4/v7/GUID/Nil/CUID/NanoID/ULID等标识符
* [Versionfeeds](https://versionfeeds.com) — 自定义软件更新RSS订阅服务（免费版支持3个订阅源）
* [videoinu](https://videoinu.com) — 在线屏幕录制与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具集（编码/解码/数据转换等）
* [Volume Shader BM](https://volumeshaderbm.org) — 基于浏览器的免费GPU基准测试工具（WebGL），帮助开发者跨设备对比着色器性能
* [XKit](https://xkit.io) — 面向开发者/学生的免费在线工具集（含开发工具/差异对比/计算器/转换器/生成器等）

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
* [GameDevMarket](https://gamedevmarket.net) — 免费/付费资源，如2D、3D、音频、GUI。
* [OpenGameArt](https://opengameart.org) — 开源游戏资源，如音乐、音效、精灵图和GIF。
* [CraftPix](https://craftpix.net) — 免费/付费资源，如2D、3D、音频、GUI、背景、图标、瓦片集、游戏套件。
* [Game Icons](https://game-icons.net/) — 免费可定制的SVG/PNG图标，基于CC-BY许可提供。
* [LoSpec](https://lospec.com/) — 在线工具，用于创建像素艺术和其他限制性数字艺术，提供大量教程和调色板列表供游戏使用。
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D资源及音频、图标、瓦片集、游戏套件的市场。也可用于展示个人艺术作品集。
* [Rive](https://rive.app/community/) — 社区资源，同时可使用其免费计划创建自己的游戏资源。
* [Poly Pizza](https://poly.pizza/) — 免费低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) — 超过8,000个免费/付费3D模型和PBR材质，用于制作纹理。
* [Kenney](https://www.kenney.nl/assets/) — 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资源。
* [Poliigon](https://www.poliigon.com/) — 免费和付费的纹理（可变分辨率）、模型、HDRIs和笔刷。提供免费插件导出到Blender等软件。
* [Freesound](https://freesound.org/) — 免费协作音效库，提供不同的CC许可。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压、图片优化、图片缩放、大小写转换、CSS验证器、JavaScript编译器、HTML编辑器等
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务
* [get.localhost.direct](https://get.localhost.direct) — 为localhost开发提供更优的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单
* [GitHub开源开发工具集](https://github.com/tvvocold/FOSS-for-Dev) — 开发者专属的自由开源软件中心
* [GitHub教育包](https://education.github.com/pack) — 学生专属免费服务集合（需注册）
* [Markdown工具集](https://markdowntools.com) - 支持HTML/CSV/PDF/JSON/Excel与Markdown互转的工具
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源用于Microsoft 365平台开发（90天可续期的E5订阅，不含Windows）
* [PHPhub](https://phphub.net/) — PHP工具合集，含格式化器、验证器、沙盒、正则测试器等
* [Pyrexp正则测试器](https://pythonium.net/regex) — 基于网页的正则表达式调试可视化工具
* [红帽开发者计划](https://developers.redhat.com) — 开发者专享红帽产品（RHEL/OpenShift等）及免费电子书
* [SMS测试沙盒](https://sandbox.httpsms.com) — 免费收发测试短信
* [SimpleBackups](https://simplebackups.com/) — 服务器/数据库备份自动化服务（免费版支持1个备份）
* [SnapShooter](https://snapshooter.com/) — 云资源备份方案（每日免费备份1个资源）
* [主题精选](https://themeselection.com/) — 高质量免费管理后台模板/HTML主题/UI套件
* [网站性能检测](https://web.dev/measure/) — 免费SEO优化与性能测评工具
* [开发者百宝箱](https://smalldev.tools/) — 编解码/压缩美化/测试数据生成等全能工具
* [UseCSV数据导入](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能（免费版支持100MB文件）
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可商用按钮样式
* [WrapPixel模板库](https://www.wrappixel.com/) — 免费/高级后台模板（支持Angular/React/Vue等框架）
* [Utils.fun工具集](https://utils.fun/en) — 纯离线工具（水印/录屏/编解码/代码格式化等）
* [IT工具大全](https://it-tools.tech/) - 开发者与IT从业者实用工具
* [免费代码工具](https://freecodetools.org/) — Markdown编辑器/代码压缩美化/二维码生成等
* [正则101](https://regex101.com/) — 正则表达式在线测试与调试平台
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换等）
* [AdminMart模板](https://adminmart.com/) — 免费/高级后台模板（支持多框架）
* [Glob模式测试](https://globster.xyz/) — 通配符模式设计与测试工具
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具
* [360转换器](https://www.360converter.com/) - 音视频转文字免费工具
* [最佳二维码](https://qrcode.best/) - 支持13种模板的隐私安全二维码生成器
* [PostPulseAI](https://PostPulseAI.com) - SEO内容自动发布平台（免费版月发1篇）
* [PageTools](https://pagetools.co/) - AI生成网站政策/社交媒体内容的一键工具
* [MySQL可视化解释](https://mysqlexplain.com) - 慢查询优化可视化工具
* [Killer Coda](https://killercoda.com/)  - 浏览器交互式学习平台（Linux/K8s/编程等）
* [Axonomy发票工具](https://axonomy-app.com/) - 免费版每月10张发票管理
* [表格格式转换](https://www.tableformatconverter.com) - 支持CSV/HTML/JSON等多格式互转
* [JSON可视化工具](https://jsonviewertool.com/) — 浏览器内直接操作JSON数据
* [ToolsHref](https://toolshref.com) - 开发者工具集（Java代码生成/静态分析/DevOps配置）