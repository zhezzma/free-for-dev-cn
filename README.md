# free-for.dev

开发者与开源作者如今拥有众多提供免费层级的服务，但要全面了解这些服务需要花费时间才能做出明智选择。

这是一份包含免费开发者层级的软件（SaaS、PaaS、IaaS等）及其他服务的清单。

本清单的范围限定为基础设施开发者（系统管理员、DevOps从业者等）可能觉得有用的内容。我们虽喜爱所有免费服务，但仍希望保持主题相关性。有时界限较为模糊，因此这份清单带有主观判断；若未采纳您的贡献，请勿介意。

本清单汇集了1600多位人士提交的Pull Requests、评审、建议及工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加更多服务，或移除已变更或停供的服务。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅适用于服务型产品（as-a-Service），不包含自托管软件。入选服务必须提供免费层级（而非仅限免费试用）。若采用时间分段模式，免费层级至少需持续一年。我们还会从安全角度评估免费层级——支持SSO，但拒绝将TLS功能限制在付费层级的服务。

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
  * [其他杂项](#其他杂项)
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
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限于特定区域），每月1GB北美到所有区域（不包括中国和澳大利亚）的网络出口流量
    * Cloud Storage - 5GB存储，1GB网络出口流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月1GB北美网络出口流量
    * Google Kubernetes Engine - 一个区域集群免管理费，用户节点按标准Compute Engine定价计费
    * BigQuery - 每月1TB查询量，每月10GB存储空间
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5个用户，50GB存储空间，50GB出口流量
    * [Google Colab](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud上的在线VSCode
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
    * [DevTest Labs](https://azure.microsoft.com/services/devtest-lab/) - 快速、轻松、精简的开发和测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 500,000个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 50,000个每月存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行作业，Linux、macOS和Windows开源项目无限分钟
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [Load Balancer](https://azure.microsoft.com/services/load-balancer/) - 1个免费公共负载均衡IP（VIP）
    * [Notification Hubs](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [Bandwidth](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站流量（12个月）和每月5GB出口流量
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储空间和1000 RU预置吞吐量
    * [Static Web Apps](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建、部署和托管静态应用及无服务器功能，免费SSL、身份验证/授权和自定义域名
    * [Storage](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [Cognitive Services](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限交易
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
    * 监控 - 5亿个数据点摄入，10亿个数据点检索
    * 带宽 - 每月10TB出口流量，x64-based VM限速50 Mbps，ARM-based VM限速500 Mbps * 核心数
    * 公共IP - 2个IPv4用于VM，1个IPv4用于负载均衡器
    * 通知 - 每月100万次交付选项，每月1000封电子邮件发送
    * 完整详细列表 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月50,000次API调用
    * Availability Monitoring - 每月300万个数据点
    * 日志分析 - 每天500MB日志
    * 完整详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN及免费SSL，防火墙规则和页面规则，WAF，机器人缓解，免费无限制速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任和SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，1000次写入请求，1000次删除请求，1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，100万次A类操作，1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，10万行写入，1GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费(出站)流量

  * [Zoho](https://www.zoho.com) — 最初作为电子邮件提供商，现提供一系列服务，部分含免费计划。含免费计划的服务列表：
    * [Email](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
    * [Zoho Assist](https://www.zoho.com/assist) — 永久免费计划包含1个并发远程支持许可和5个无人值守计算机许可，适用于专业和个人用途
    * [Sprints](https://zoho.com/sprints) 5用户免费，5个项目，500MB存储
    * [Docs](https://zoho.com/docs) — 5用户免费，1GB上传限制，5GB存储。捆绑Zoho Office套件(Writer, Sheets & Show)
    * [Projects](https://zoho.com/projects) — 3用户免费，2个项目，10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同计划
    * [Connect](https://zoho.com/connect) — 团队协作25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
    * [Meeting](https://zoho.com/meeting) — 最多3名会议参与者和10名网络研讨会 attendees
    * [Vault](https://zoho.com/vault) — 个人可用的密码管理
    * [Showtime](https://zoho.com/showtime) — 面向培训的会议软件，支持最多5名远程参会者
    * [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
    * [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，zip备份，RSS & Atom订阅，访问控制和可定制CSS
    * [Subscriptions](https://zoho.com/subscriptions) — 周期性账单管理，20个客户/订阅免费，1个用户，所有支付由Zoho托管。存储最近40个订阅指标
    * [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面，最多50次支付
    * [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。与[Assist](https://zoho.com/assist)集成，支持1名远程技术人员和5台无人值守计算机
    * [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储，无限用户，每个频道100用户，SSO
    * [Campaigns](https://zoho.com/campaigns) - 电子邮件营销
    * [Forms](https://zoho.com/forms) - 表单创建工具
    * [Sign](https://zoho.com/sign) - 无纸化签名
    * [Surveys](https://zoho.com/surveys) - 在线调查
     * [Bookings](https://zoho.com/bookings) - 预约排期

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建与管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含1台部署服务器和1个静态站点），提供从构建、部署到扩展应用的全套功能，让您无需操心"服务器相关事务"即可在任何云上运行应用
* [deployment.io](https://deployment.io) - 帮助开发者在AWS上实现自动化部署。免费版支持单个开发者无限制部署静态站点、网络服务及环境，每月提供10次免费任务执行（含预览和自动部署功能）
* [Pulumi](https://www.pulumi.com/) — 现代化基础设施即代码平台，支持使用熟悉的编程语言和工具来构建、部署及管理云基础设施
* [scalr.com](https://scalr.com/) - Terraform自动化协作平台(TACO)，通过完整Terraform CLI支持、OPA集成和分层配置模型提升Terraform管理的基础设施与配置的协作效率。无SSO附加费用，所有功能开放，免费版每月支持50次运行

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限量公共及私有Git仓库，提供CI/CD流水线
  * [Codeberg](https://codeberg.org/) — 免费开源项目的无限量公共及私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)。静态网站托管服务[Codeberg Pages](https://codeberg.page/)。CI/CD托管服务[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管平台[Codeberg Translate](https://translate.codeberg.org/)。包含软件包/容器托管、项目管理和问题追踪
  * [framagit.org](https://framagit.org/) — Framasoft组织基于Gitlab搭建的软件托管平台，包含CI、静态页面、项目页和问题追踪
  * [GitGud](https://gitgud.io) — 无限量公共及私有仓库。永久免费。基于GitLab & Sapphire。不提供CI/CD
  * [GitHub](https://github.com/) — 无限量公共仓库及私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包/容器托管、项目管理和AI编程助手
  * [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限量公共及私有Git仓库。包含CI/CD、静态托管、容器注册、项目管理和问题追踪
  * [heptapod.net](https://foss.heptapod.net/) — GitLab社区版友好分支，支持Mercurial版本控制系统
  * [Pagure.io](https://pagure.io) — 基于Git的免费开源软件协作平台（仅限FOSS许可项目）
  * [pijul.com](https://pijul.com/) - 免费开源的分布式版本控制系统。其独特之处在于基于严谨的补丁理论，易学易用且便于分发。解决了git/hg/svn/darcs的诸多问题
  * [projectlocker.com](https://projectlocker.com) — 1个免费私有项目（支持Git和Subversion），50MB存储空间
  * [RocketGit](https://rocketgit.com) — 基于Git的代码托管平台。无限量公共及私有仓库
  * [savannah.gnu.org](https://savannah.gnu.org/) - GNU项目的自由软件协作开发管理系统
  * [savannah.nongnu.org](https://savannah.nongnu.org/) - 非GNU项目的自由软件协作开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [Abstract API](https://www.abstractapi.com) — 提供IP地理定位、性别检测、电子邮件验证等多种用途的API套件
* [Apify](https://www.apify.com/) — 网页抓取与自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台信用额度
* [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier等自动化工具自动生成图像和PDF文档，无需CSS/HTML知识。免费计划每月可生成50张图片并使用3个模板
* [APIVerve](https://apiverve.com) - 免费即时访问120+个高品质API，免费计划每月包含50个API令牌（可能已下线，2025-06-25）
* [Arize AI](https://arize.com/) - 机器学习可观测性平台，用于模型监控和数据质量等问题的根因分析。免费支持最多两个模型
* [Beeceptor](https://beeceptor.com) - 无代码云平台，支持REST/SOAP/gRPC/GraphQL等多协议API的模拟调试，提供基于规则的逻辑、CRUD操作、状态模拟、代理和CORS管理。免费计划每天50次请求，提供公开仪表盘查看请求与响应
* [BigDataCloud](https://www.bigdatacloud.com/) - 提供IP地理定位、反向地理编码等现代Web API服务，免费版每月10K-50K次请求或无限制
* [Browse AI](https://www.browse.ai) — 网页数据提取与监控服务。免费计划每月1k信用额度（相当于1k次并发请求）
* [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理访问等场景。免费计划每月1k次请求
* [Calendarific](https://calendarific.com) - 覆盖200+国家的企业级节假日API服务。免费计划每月500次调用
* [Canopy](https://www.canopyapi.co/) - 亚马逊商品数据的GraphQL API。免费计划每月100次调用
* [CarAPI.dev](https://carapi.dev) — 汽车数据API，支持VIN解码、被盗车辆查询等功能。免费层每月100次请求（覆盖9个端点）
* [Cloudmersive](https://cloudmersive.com/) — 实用工具API平台，免费版每月600次调用（仅限北美可用区），支持文档转换、病毒扫描等功能
* [Colaboratory](https://colab.research.google.com) — 基于网页的免费Python笔记本环境，配备Nvidia Tesla K80 GPU
* [CometML](https://www.comet.com/site/) - 面向个人和学术用户的MLOps平台，支持实验跟踪、模型管理等全流程
* [Commerce Layer](https://commercelayer.io) - 可组合商务API，开发者计划免费支持每月100笔订单和1,000个SKU
* [Composio](https://composio.dev/) - AI代理与LLM集成平台，支持200+工具连接
* [Conversion Tools](https://conversiontools.io/) - 在线文件转换服务（文档/图像/视频/电子书等），免费版每日30次转换（每月300次），文件上限20MB
* [Country-State-City微服务API](https://country-state-city.rebuscando.info/) - 提供国家/地区/城市等地理数据的API，免费层每日100次请求
* [Coupler](https://www.coupler.io/) - 数据集成工具，免费版限制1个用户/数据连接/数据源/目的地，需手动刷新数据
* [CraftMyPDF](https://craftmypdf.com) - 通过拖拽编辑器和API自动生成PDF。免费版每月100份PDF（3个模板）
* [Cube](https://cube.dev/) - 数据访问与组织平台，Cube Cloud免费版每日1,000次查询
* [CurlHub](https://curlhub.io) — API调用调试代理服务，免费版每月10,000次请求
* [CurrencyScoop](https://currencyscoop.com) - 实时货币数据API，免费计划每月5,000次调用
* [CustomJS](https://www.customjs.io) - HTML转PDF/PDF转PNG等文档处理API，免费层每月600次调用
* [Data Fetcher](https://datafetcher.com) - 无代码连接Airtable与其他应用的API工具，免费版每月100次运行
* [Data Miner](https://dataminer.io/) - 浏览器数据抓取扩展（Chrome/Edge），免费版每月500页
* [Dataimporter.io](https://www.dataimporter.io) - Salesforce数据导入工具，免费版每月20,000条记录
* [Datalore](https://datalore.jetbrains.com) - Jetbrains出品的Python笔记本，免费版含10GB存储和每月120小时运行时间
* [DB Designer](https://www.dbdesigner.net/) — 云端数据库建模工具，免费版支持2个模型（每个模型10张表）
* [DB-IP](https://db-ip.com/api/free) - IP地理定位API，每日每IP 1k次免费请求
* [DeepAR](https://developer.deepar.ai) — 跨平台AR人脸滤镜SDK，免费版支持10个MAU和4张人脸追踪
* [Deepnote](https://deepnote.com) - 新型数据科学笔记本（兼容Jupyter），免费版包含无限个人项目+5GB RAM基础机器+3人团队编辑
* [DiffJSON](https://diffjson.com) - JSON数据差异比较在线工具
* [Disease.sh](https://disease.sh/) — 免费提供新冠疫情相关数据的API
* [Doczilla](https://www.doczilla.app/) — 从HTML/CSS/JS代码生成截图/PDF的SaaS API，免费版每月250份文档
* [Doppio](https://doppio.sh/) — PDF/截图生成与私有存储API，免费版每月400次生成
* [drawDB](https://drawdb.app/) — 免注册的开源在线数据库图表编辑器
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API，免费版每月50次调用

  * [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，支持SDK和无代码集成。免费计划包含每月250页、不限用户数和3个模板。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端，用于发送HTTP请求。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费计划允许每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 一款基于浏览器的免费工具，可即时格式化、验证、比较和压缩JSON数据。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 订单交易信用卡支付欺诈检测REST API。免费Micro计划每月支持500笔交易。
* [FreeIPAPI](https://freeipapi.com) - 为商业和非商业用户提供的免费、快速、可靠的IP地理定位JSON API。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器部署的IP地理定位API，免费计划每日2,000次请求。
* [Hex](https://hex.tech/) - 面向笔记本、数据应用和知识库的协作式数据平台。社区免费版支持最多5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)平台，免费版支持每日100次事件分发并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 为Pytorch/TensorFlow/JAX构建、训练和部署NLP模型。免费版每月3万字符输入限额。
* [Insomnia](https://insomnia.rest) - 开源API客户端，支持REST和GraphQL接口设计与测试。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4访问70多个云平台数据。开发者免费版有数据量限制。
* [IP Geolocation API by ipwho.org](https://ipwho.org/) - 每日2,000次免费请求。12+区域服务器部署。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，免费1,000次请求。
* [IP Geolocation](https://ipgeolocation.io/) — 开发者永久免费计划每日1,000次请求限制。
* [ip-api](https://ip-api.com) — 非商业用途免费的IP地理定位API，每分钟同IP限45次请求。
* [IP.City](https://ip.city) — 每日100次免费IP地理定位请求。
* [IP2Location.io](https://www.ip2location.io/) — 免费计划每月5万信用点，含500次WHOIS查询。
* [ipaddress.sh](https://ipaddress.sh) — 获取多种格式公网IP地址的简易服务。
* [ipapi.is](https://ipapi.is/) - 无需注册即可使用1,000次查询的可靠IP定位API。
* [ipapi](https://ipapi.co/) - Kloudend公司提供的AWS架构IP定位API，免费版每月3万次查询(每日1k)。
* [ipbase.com](https://ipbase.com) - 永久免费计划每月150次请求的IP地理定位API。
* [IPinfo](https://ipinfo.io/) — 每月5万次免费请求的快速精准IP数据API。
* [IPLocate](https://www.iplocate.io) — 每日1,000次免费请求的IP定位API，含代理/VPN检测功能。
* [IPTrace](https://iptrace.io) — 每月5万次免费查询的极简IP地理定位API。
* [JSON IP](https://getjsonip.com) — 返回客户端公网IP的无注册限制API。
* [JSON to Table](https://jsontotable.org) - 将JSON转换为可交互表格进行在线查看编辑。
* [JSON2Video](https://json2video.com) - 通过API或无代码方式自动化制作营销视频。
* [JSONGrid](https://jsongrid.com) - 免费工具将复杂JSON数据可视化呈现为表格网格。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API。
* [JSONSwiss](https://www.jsonswiss.com/) - 支持AI修复的在线JSON查看编辑器，可生成12+语言代码。
* [KillBait API](https://killbait.com/api/doc) - 检测标题党内容的API，免费版每小时1次提交。
* [Kreya](https://kreya.app) — 免费的gRPC图形客户端，支持服务反射导入API。
* [LoginLlama](https://loginllama.app) - 登录安全API，免费版每月1,000次登录检测。
* [Market Data API](https://www.marketdata.app) - 提供实时金融数据的永久免费API，每日100次请求。
* [Maxim AI](https://getmaxim.ai/) - AI代理评估平台，小团队永久免费(3席位)。
* [microlink.io](https://microlink.io/) – 网站数据提取服务，每日50次免费请求。
* [Mintlify](https://mintlify.com) — 现代化API文档工具，免费支持1名编辑者。
* [MockAPI](https://www.mockapi.io/) — 快速创建模拟API的简易工具，免费版支持1个项目2个资源。

  * [Mockfly](https://www.mockfly.dev/) — 值得信赖的API模拟与功能开关管理开发工具。通过直观界面快速生成和控制模拟API，免费版每日提供500次请求。
* [Mocko.dev](https://mocko.dev/) — 云端代理您的API，自由选择需要模拟的端点并监控流量，完全免费。加速开发和集成测试流程。
* [Multi-Exit IP地址检测工具](https://ip.alstra.ca/) — 免费简易的多节点出口IP检测工具，可了解您的IP在不同地区和服务中的呈现方式，特别适合测试Control D等基于规则的DNS分流工具。
* [News API](https://newsapi.org) — 通过代码检索网络新闻并获取JSON格式结果。开发者每日可免费查询100次，文章内容存在24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证API，每月提供100次免费请求。
* [OCR.Space](https://ocr.space/) — 将图像/PDF文件解析为JSON文本的OCR API。免费版每月25,000次请求，文件大小限制1MB。
* [OpenAPI3设计器](https://openapidesigner.com/) — 可视化免费创建OpenAPI 3定义。
* [Parseur](https://parseur.com) — 每月20页免费额度：从PDF/邮件提取数据的AI驱动工具，提供完整API访问权限。
* [PDF-API.io](https://pdf-api.io) - PDF自动化API，含可视化模板编辑器、HTML转PDF、动态数据集成和PDF渲染服务。免费方案包含1个模板和每月100次PDF生成。
* [PDFBolt](https://pdfbolt.com) - 注重隐私的开发者PDF生成API，提供类似Stripe的文档说明，每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) - 通过简单API将HTML/URL轻松转为PDF，每月100次免费转换。
* [Pixela](https://pixe.la/) - 免费日流数据库服务，所有操作通过API完成，支持热力图和折线图可视化。
* [Postman](https://postman.com) — API开发协作平台，永久免费使用Postman应用，云端功能在限额内永久免费。
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化全功能平台，免费版包含5个部署工作流和每月500分钟无服务器计算额度。
* [Preset Cloud](https://preset.io/) - 托管版Apache Superset服务，5人以下团队永久免费，支持无限仪表盘/图表、无代码图表构建器和协作式SQL编辑器。
* [ProxySentry](https://proxysentry.io/) - 检测住宅代理和VPN的IP API，在rapidapi.com上提供每月1万次请求的免费层级。
* [Reducto](https://reducto.ai) - 将非结构化文档(PDF/XLSX/JPG等)转为结构化JSON数据，支持PDF表单解析/编辑。免费层含1.5万积分和按量付费选项。
* [Rendi](https://rendi.dev) - FFmpeg REST API，无需管理基础设施即可在线运行FFmpeg。免费层包含月度处理配额和4个vCPU资源。
* [RequestBin.com](https://requestbin.com) — 创建免费HTTP请求接收端点，记录所有请求内容及头部信息，方便观察Webhook等服务的调用情况。
* [ROBOHASH](https://robohash.org/) - 根据任意文本生成独特酷炫图像的Web服务。
* [Scraper's Proxy](https://scrapersproxy.com) — 简易HTTP代理API，匿名爬取数据无惧限制/封锁/验证码。每月前100次成功抓取免费（含JavaScript渲染）。
* [ScrapingAnt](https://scrapingant.com/) — Headless Chrome爬取API与免费代理服务，支持JS渲染、高级轮换代理和验证码规避。免费1万API积分。
* [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取API，返回Google/YouTube/Bing等结构化JSON结果。免费版每月100次成功调用。
* [Sheetson](https://sheetson.com) - 即时将Google表格转为RESTful API。免费方案支持每表1000行数据。
* [Simplescraper](https://simplescraper.io) — 每次操作后触发Webhook。免费版含100次云端抓取额度。
* [Siterelic](https://siterelic.com/) - 提供网站截图、审计、TLS扫描、DNS查询、TTFB测试等功能的API。免费层每月100次请求。
* [SmartParse](https://smartparse.io) - 数据迁移与CSV转API平台，免费层包含每月300处理单元、浏览器上传、数据隔离和任务警报功能。
* [Sofodata](https://www.sofodata.com/) - 从CSV文件创建安全RESTful API，加速应用开发。免费版含2个API和每月2500次调用，无需信用卡。
* [Sqlable](https://sqlable.com/) - 免费在线SQL工具集，包含格式化器、验证器、正则测试器、假数据生成器和交互式数据库沙盒。
* [Supportivekoala](https://supportivekoala.com/) — 通过模板自动生成图像，免费版每月可创建50张图片。
* [Svix](https://www.svix.com/) - Webhook即服务，免费发送5万条消息/月。
* [Tavily AI](https://tavily.com/) - 在线搜索与深度研究API，可整理研究成果。免费层每月1000次请求，无需绑卡。
* [The IP API](https://theipapi.com/) - IP地理定位API，每日1000次免费请求，提供国家/城市/区域等位置信息。
* [TinyMCE](https://www.tiny.cloud) - 富文本编辑API，核心功能无限免费使用。
* [Tomorrow.io天气API](https://www.tomorrow.io/weather-api/) - 提供免费天气API方案，覆盖全球的精准天气预报和历史数据。
* [Treblle](https://www.treblle.com) - API全生命周期管理平台，含日志聚合、可观测性文档和调试功能。免费层每月25万次请求限额。
* [UniRateAPI](https://unirateapi.com) – 590+种法币与加密货币实时汇率API，免费版无调用限制。
* [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证API，每月150次免费验证。
* [WeatherXu](https://weatherxu.com/) — 全球天气数据API，整合AI模型提升预报精度。免费层每月1万次API调用。
* [WebScraping.AI](https://webscraping.ai) - 内置解析/Chrome渲染/代理的网页抓取API，每月2000次免费调用。

  * [What The Diff](https://whatthediff.ai) - AI驱动的代码审查助手。免费计划每月限额25,000个token（约10个PR）
* [wolfram.com](https://wolfram.com/language/) - 云端内置基于知识的算法
* [wrapapi.com](https://wrapapi.com/) - 将任何网站转化为参数化API。每月3万次API调用
* [Zenscrape](https://zenscrape.com/web-scraping-api) - 配备无头浏览器、住宅IP的网页抓取API，提供透明定价。每月1,000次免费API调用，学生和非营利组织可获额外额度
* [Zipcodebase](https://zipcodebase.com) - 免费邮编API，提供全球邮政编码数据。每月5,000次免费请求
* [Zipcodestack](https://zipcodestack.com) - 免费邮编API及邮政编码验证服务。每月1万次免费请求
* [Zuplo](https://zuplo.com/) - 免费API管理平台，支持API设计、构建及边缘部署。可快速添加API密钥认证、速率限制、开发者文档和商业化功能。基于OpenAPI标准，完全支持Web标准API和Typescript编程。免费版提供10个项目、不限量生产级边缘环境、每月100万次请求和10GB出口流量

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM的私有/公有制品仓库。公开项目免费使用。
* [jitpack.io](https://jitpack.io/) — 为GitHub上的JVM和Android项目提供的Maven仓库，公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用。免费方案：公开项目可用，5GB存储，基础实例。
* [RepoFlow](https://repoflow.io) - 支持npm、PyPI、Docker、Go、Helm等技术的包管理平台。免费版提供10GB存储、10GB带宽、100个软件包和无限用户（仅限云端使用），自托管版本仅限个人使用。
* [RepoForge](https://repoforge.io) - 托管Python、Debian、NPM包和Docker镜像的私有云仓库。开源/公开项目可享免费方案。
* [repsy.io](https://repsy.io) — 提供1GB免费空间的私有/公有Maven仓库。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人及团队协作
* [BookmarkOS.com](https://bookmarkos.com) - 多功能书签管理工具，集成标签页管理和任务管理，提供可定制的在线桌面环境及文件夹协作功能
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费无限用户，完整历史记录和集成支持，并提供可自建的开源版本
* [Calendly](https://calendly.com) — 智能会议排期工具。免费版支持1个日历连接和无限次预约会议，提供桌面端和移动端应用
* [cally.com](https://cally.com/) — 为会议寻找最佳时间。操作简单，适合大小团队使用
* [Chanty.com](https://chanty.com/) — Slack的替代品。小团队（10人内）永久免费，含无限公私对话、可搜索历史记录、无限1对1语音通话、语音留言、10个集成和20GB团队存储
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费提供所有基础工具，支持每个工具自动保存一条记录，标准处理速度和社区支持
* [Discord](https://discord.com/) — 支持公私频道的聊天平台。具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制
* [Dubble](https://dubble.so/) — 免费分步指南创建工具。截图记录流程并与团队协作，支持异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流协作平台。支持IDE配对编程、终端共享、语音视频及屏幕共享，小团队免费
* [element.io](https://element.io/) — 基于Matrix的去中心化开源通讯工具。提供群聊、私信、加密文件传输、音视频通话，并易于与其他服务集成
* [evernote.com](https://evernote.com/) — 知识管理工具，支持共享笔记和协同编辑
* [Fibery](https://fibery.io/) — 互联工作空间平台。个人用户免费，提供2GB存储空间
* [Fibo](https://fibo.dev) - 免费的敏捷团队实时Scrum Poker工具，支持无限成员快速估算故事点
* [Fizzy](https://www.fizzy.do/) - 基于看板的项目管理工具。免费版支持创建公共看板、设置Webhook、卡片标记和无限用户（上限1000条内容）
* [flat.social](https://flat.social) - 可定制的团队会议虚拟空间。会议数量无限制，免费支持8人同时在线
* [flock.com](https://flock.com) — 高效的团队通讯工具。免费无限消息、频道、用户、应用和集成
* [GitBook](https://www.gitbook.com/) — 技术知识管理平台，从产品文档到内部知识库和API文档。个人开发者免费
* [GitDailies](https://gitdailies.com) - GitHub提交和PR活动的每日报告工具。含推送可视化、同伴认可系统和自定义提醒，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具。无限公私房间，25人以下团队免费
* [gokanban.io](https://gokanban.io) - 免注册的语法驱动看板工具，完全免费无限制
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具。类似Google Docs但支持Markdown，免费无限笔记（但私有笔记协作人数[有限制](https://hackmd.io/pricing)）
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [Huly](https://huly.io/) - 全能项目管理平台（替代Linear/Jira/Slack/Notion/Motion），免费版含无限用户、10GB工作区存储和10GB音视频流量
* [Keybase](https://keybase.io/) — Slack的开源替代品，为家庭、社区和企业提供安全的聊天和文件传输
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签、多工作区和协作。免费版含4个工作区和10名成员
* [Lockitbot](https://www.lockitbot.com/) — 在Slack内预约共享资源（如会议室/开发环境/服务器等），免费支持2个资源
* [meet.jit.si](https://meet.jit.si/) — 一键开启免费视频会议和屏幕共享
* [Miro](https://miro.com/) - 可扩展的分布式团队协作白板，提供免费增值计划
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作笔记应用，被描述为"一体化工作空间"，支持多平台和网页访问
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识协作平台，免费版含核心功能、50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 免费编程面试平台，集成视频聊天、画板和在线代码编辑器（支持浏览器编译运行），一键创建远程面试间
* [paste.sh](https://paste.sh/) — 基于JavaScript和加密的简易代码粘贴站
* [Pastefy](https://pastefy.app/) - 美观的Pastebin工具，可选客户端加密、多标签粘贴、API支持和高亮编辑器
* [Pendulums](https://pendulums.io/) - 免费时间追踪工具，通过直观界面和有效统计帮助提升时间管理
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享和Passkeys的密码管理器，支持网页/浏览器扩展/移动端/桌面端
* [Pullflow](https://pullflow.com) — 跨GitHub/Slack/VS Code的AI增强代码评审协作平台
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，无限用户和消息历史
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简易团队时间表追踪工具，免费版支持10人以内的时间记录和报告生成
* [Raindrop.io](https://raindrop.io) - 跨平台加密书签工具，免费无限书签和协作
* [Revolt.chat](https://revolt.chat/) — Discord的开源替代品，尊重用户隐私。免费提供绝大多数Discord专有功能，支持（官方/非官方）插件
* [Rocket.Chat](https://rocket.chat/) - 开源通讯平台，具备全渠道功能、Matrix联邦协议、无限消息和完整历史记录
* [ruttl.com](https://ruttl.com/) — 一站式数字反馈收集工具，支持网站/PDF/图片评审

  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步、讨论。云版本仅提供1GB空间
  * [SiteDots](https://sitedots.com/) - 直接在您的网站上收集项目反馈，无需模拟、画布或变通方案。完全可用的免费版本。
  * [Slab](https://slab.com/) — 面向团队的现代知识管理服务。最多10名用户免费。
  * [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务商的状态页吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容整理和笔记的可视化协作工具。免费版支持3个面板墙、无限用户和1GB存储。
  * [StreamBackdrops](https://streambackdrops.com) — 视频会议高清虚拟背景库。提供Zoom、Teams和Google Meet的专业背景。无需注册，个人使用免费。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费
  * [Teamcamp](https://www.teamcamp.app) - 软件开发公司的一体化项目管理应用
  * [Teamhood](https://teamhood.com/) - 免费项目/任务/问题追踪软件。支持带泳道看板和完整Scrum实现，含时间追踪功能。5用户+3项目组合免费。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会优化开发流程。包含面向远程团队的完整休假管理功能。5人以下小团队免费。
  * [Telegram](https://telegram.org/) — 为需要快速可靠通讯的用户设计。大群组、用户名系统、桌面端和强大文件分享功能适合企业用户和小团队。
  * [Tencent RTC](https://trtc.io/) — 腾讯实时音视频(TRTC)提供群组通话解决方案。首年每月1万分钟免费。
  * [TimeCamp](https://www.timecamp.com/) - 无限用户免费的时间追踪软件。轻松集成Jira/Trello/Asana等项目管理工具。
  * [tldraw.com](https://tldraw.com) — 免费开源白板绘图工具，含智能箭头/吸附/便签/SVG导出功能。支持多人协作编辑。另有官方VS Code扩展。
  * [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件。
  * [Tugboat](https://tugboat.qa) - 自动化按需预览每个Pull Request。全员免费，非营利组织可享Nano套餐。
  * [twist.com](https://twist.com) — 异步友好型团队通讯应用，保持对话条理清晰。提供免费无限版，合格团队可享折扣。
  * [userforge.com](https://userforge.com/) - 互联在线的用户画像/用户故事/场景映射工具。保持设计与开发同步，免费支持3个角色+2名协作者。
  * [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的可视化反馈工具
  * [Webex](https://www.webex.com/) — 视频会议工具，免费版支持100人40分钟会议。
  * [Webvizio](https://webvizio.com) — 网站反馈与Bug报告工具，可直接在网页/应用/图片/PDF/设计文件上标注开发任务。
  * [whereby.com](https://whereby.com/) — 一键发起视频对话（原appear.in）
  * [windmill.dev](https://windmill.dev/) - 开源开发平台，用Python/TypeScript快速构建多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区。
  * [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，25个视频容量含品牌化播放器
  * [wormhol.org](https://www.wormhol.org/) — 简洁的文件分享服务。5GB以内文件无限分享给任意人数。
  * [Wormhole](https://wormhole.app/) - 端到端加密传输5GB文件（有效期24小时）。超过5GB时启用P2P直传。
  * [zoom.us](https://zoom.us/) — 安全的视频网络会议工具，免费版限时40分钟。
  * [Zulip](https://zulip.com/) — 独特邮件式线程模型的实时聊天工具。免费版含1万条历史消息搜索和5GB存储。另有可自建的开源版本。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [Contentful](https://www.contentful.com/) — 无头CMS。云端内容管理与交付API。免费社区空间包含5个用户、2.5万条记录、48种内容类型和2种语言设置。
* [Cosmic](https://www.cosmicjs.com/) — 无头CMS与API工具包。开发者免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头PIM系统。内置GraphQL API。免费版包含无限用户、1000个目录项、5GB/月带宽和2.5万次/月API调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费层级的GraphQL架构CMS。基础版每月10万次API调用。
* [Hygraph](https://hygraph.com/) - 小型项目免费方案。优先采用GraphQL API的无头CMS，实现全渠道内容交付。
* [Prismic](https://www.prismic.io/) — 无头CMS。完全托管且可扩展的API内容管理界面。社区计划为单个用户提供无限API调用、文档、自定义类型、资源和多语言支持。开放内容/开源项目可申请更大免费方案。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据库。每个项目免费包含无限项目、无限管理员用户、3个非管理员用户、2个数据集、50万次CDN API请求、10GB带宽和5GB资源。
* [Solo](https://soloist.ai) - Mozilla推出的免费AI建站工具，通过简单输入即可生成精美商业网站。提供免费自定义域名，无需信用卡。
* [Squidex](https://squidex.io/) - 小型项目免费方案。API/GraphQL优先架构。基于事件溯源（自动记录所有变更）的开源系统。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头CMS，兼容所有现代框架。免费社区版包含管理API、可视化编辑器、10个数据源、自定义字段类型、国际化支持（无限语言/区域）、资源管理器（最多2500项资源）、图片优化服务、搜索查询、Webhook及250GB/月流量。
* [TinaCMS](https://tina.io/) — Forestry.io替代方案。支持Markdown/MDX/JSON的开源Git无头CMS。基础版免费支持2个用户。
* [WPJack](https://wpjack.com) - 5分钟内在任意云端部署WordPress！免费套餐包含1台服务器、2个站点、免费SSL证书和无限定时任务。无时间限制——完全自主掌控网站。

**[⬆️ 返回顶部](#目录)**

## 代码生成

* [Appinvento](https://appinvento.io/) —— 免费的无代码应用构建平台。提供自动生成的后端源代码完全访问权限，支持无限量API和路由。免费方案包含3个项目与5张数据表。
* [DhiWise](https://www.dhiwise.com/) —— 将Figma设计稿转换为动态Flutter和React应用。其代码生成技术专为优化生产级移动端/网页体验的开发流程而设计。
* [Karbon Sites](https://www.karbonsites.space) —— 基于AI的站点构建器与编辑器，可通过文字描述、草图或简历生成生产级前端代码。支持原生Android（APK）导出，免费版每月提供5次生成额度（使用自定义Gemini API密钥可无限生成）。
* [Metalama](https://www.postsharp.net/metalama) —— 专为C#设计的工具，能在编译时动态生成样板代码以保持源码整洁。开源项目可免费使用，商业友好型免费方案最多支持3个切面。
* [Supermaven](https://www.supermaven.com/) —— 面向VS Code/JetBrains/Neovim的高速AI代码补全插件。免费版提供无限制的行内补全功能，主打超低延迟体验。
* [v0.dev](https://v0.dev/) —— Vercel推出的React代码生成工具，基于shadcn/ui与Tailwind CSS生成可直接复用的代码。采用积分制，新用户获赠1,200初始积分，每月另赠200免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、评审和部署工作流，免费账户支持1个用户和100MB存储的1个代码库
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，无限公有和私有仓库免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 面向DevOps的基础设施即代码自动化审查工具，支持GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还能分析Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公有仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [CodSpeed](https://codspeed.io) - 在CI流水线中自动化追踪性能表现。通过精准一致的指标，在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源免费
* [deepscan.io](https://deepscan.io) — 用于自动发现JavaScript运行时错误的高级静态分析工具，开源免费
* [DeepSource](https://deepsource.io/) - 持续分析源代码变更，发现并修复安全/性能/反模式/潜在错误/文档/风格等问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) - 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 排名第一的数据库优化平台，自动获取数据库和SQL查询的关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务（免费）
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) - PostgreSQL优化排名第一的静态代码分析器。自动检测性能/安全/架构等数据库问题
* [houndci.com](https://houndci.com/) — 针对GitHub提交的代码质量评论，开源免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公有或个人仓库免费
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续审查平台，开源免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 支持编程语言语义的GitHub PR与提交差异分析，公有仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源免费

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具，提供预设模板和链接功能。
* [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个网站搜索您的项目名称可用性。
* [tickgit.com](https://www.tickgit.com/) — 展示代码中的`TODO`注释（及其他标记），帮助识别需要后续改进的代码区域。

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更高效的发布周期。免费版支持每次构建最长30分钟，每月20次构建和1个并发构建。
* [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
* [bitrise.io](https://www.bitrise.io/) — 面向原生或混合移动应用的CI/CD平台。免费版每月200次构建，每次构建10分钟，支持2名团队成员。开源项目可享45分钟构建时长、+1并发和无限制团队规模。
* [buddy.works](https://buddy.works/) — CI/CD服务，免费支持5个项目和一个并发运行（每月120次执行）
* [Buildkite](https://buildkite.com) CI流水线免费支持3名用户和每月5000分钟任务时长。测试分析免费开发者层级包含每月10万次测试执行，开源项目可享更多免费额度。
* [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps工具。20名用户和10个数据库实例内免费
* [CircleCI](https://circleci.com/) — 功能全面的免费托管CI/CD服务，支持GitHub、GitLab和BitBucket仓库。包含多资源类型、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级功能。每月6000分钟执行时长免费，无限协作者，私有项目30个并行任务，开源项目最高8万构建分钟免费。
* [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
* [cirun.io](https://cirun.io) - 公开GitHub仓库免费
* [codemagic.io](https://codemagic.io/) - 每月500构建分钟免费
* [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30构建分钟）
* [LocalOps](https://localops.co/) - 30分钟内在AWS/GCP/Azure上部署应用。在任何云平台配置标准化应用环境，内置持续部署自动化和高级可观测性。免费版支持1名用户和1个应用环境。
* [Make](https://www.make.com/en) — 通过可视化界面连接应用并自动化工作流的工具，支持大量应用和主流API。公开GitHub仓库免费，免费层含100MB存储、1000次操作和15分钟最小间隔。
* [Mergify](https://mergify.com) — GitHub工作流自动化与合并队列工具 — 公开GitHub仓库免费
* [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、任务分布式执行和自动化E2E测试分割加速CI中的单体仓库。免费计划支持30名贡献者，含15万点数的额度。
* [RunMyJob](https://runmyjob.io) - 通过实时扩展的Spike实例更智能地运行GitHub Actions和GitLab CI流水线。免费层包含400 vCPU分钟、800 GB分钟和10个并发高性能任务（每个任务12 vCPU和32GB内存）。
* [Shipfox](https://www.shipfox.io/) - 以2倍速度运行GitHub Actions，每月免费3000构建分钟。
* [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费版功能：IaC协作、Terraform模块注册表、ChatOps集成、通过Open Policy Agent实现持续资源合规、SAML 2.0单点登录，以及公共工作池访问：每月200分钟。
* [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过专属URL访问应用，无限公开/私有仓库，最高2GB VM规格。
* [Terramate](https://terramate.io/) - Terraform、OpenTofu和Terragrunt等IaC工具的编排管理平台。2名用户内免费包含全部功能。
* [Terrateam](https://terrateam.io) - 采用GitOps优先的Terraform自动化方案，支持PR驱动的工作流、通过自托管运行器实现项目隔离，以及分层运行有序操作。3名用户内免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Appetize](https://appetize.io) — 直接在浏览器中测试您的Android和iOS应用，基于云的Android手机/平板模拟器和iPhone/iPad模拟器。免费套餐每月包含2个并发会话，每次使用30分钟。应用大小无限制。
  * [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。无限项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 持续性能基准测试工具套件，用于捕捉CI性能回归。所有公共项目免费。
  * [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具。易于学习且无需编码。您可以在自己的计算机上免费运行无限次测试。额外付费可获得云监控和CI/CD集成。
  * [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试您的网站是否符合50多种SEO、速度和安全性最佳实践。小型网站免费。
  * [Checkly](https://checklyhq.com) - 现代DevOps的代码优先合成监控。以传统供应商的一小部分价格监控您的API和应用。基于"Monitoring as Code"工作流和Playwright。开发者免费套餐慷慨。
  * [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员的免费工具，用于检查API是否为给定域启用CORS并识别差距。获取可操作的见解。
  * [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器测试工具。Cypress测试运行器始终免费且开源，无限制。Cypress仪表板对开源项目免费，最多5个用户。
  * [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放Web浏览器中的所有步骤并创建脚本，免费版功能较少。
  * [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐包括最多4个并发Selenium节点/10次网格启动/4,000测试分钟每月。
  * [katalon.com](https://katalon.com) - 提供测试平台，适用于不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（+免费视觉测试）、TestCloud和Katalon Recorder。
  * [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用生成API的E2E测试（KTests）和模拟或存根（KMocks）。开源项目免费。
  * [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月免费模拟最多50个并发用户，最长60分钟。
  * [lost-pixel.com](https://lost-pixel.com) - 全面的Storybook、Ladle、Histoire故事和Web应用的视觉回归测试。无限团队成员，开源完全免费，7,000快照/月。
  * [pagegym.com](https://pagegym.com) - 负载行为和页面速度分析与优化工具。免费套餐每天10次测试，每周5次实验，每月最多15GB数据摄入。
  * [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。无限团队成员、演示应用和无限项目，5,000快照/月。
  * [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费套餐包含所有核心功能，500MB附件存储，最多3个用户。
  * [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种应用框架。免费套餐限制为10个iOS测试和10个Android测试，但包含付费计划的大部分功能，包括无限测试运行。
  * [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。包含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录会话的网络和控制台日志。免费套餐最多创建10条规则。开源免费。
  * [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每天10次免费网站爬取。提供有用的SEO学习资源和改进任何技术网站页面SEO结果的建议。
  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似于CodePen，但用于跨浏览器测试。UI-licious允许您像用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上运行无限测试，每次测试运行最多3分钟。发现错误？您可以复制测试的唯一URL，向开发人员展示如何重现错误。
  * [SSR (Server-side Rendering) Checker](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面的服务器渲染版本和常规版本，检查任何URL的SSR（服务器端渲染）。
  * [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源免费](https://testingbot.com/open-source)。
  * [Testspace.com](https://testspace.com/) - 发布自动化测试结果的仪表板和通过GitHub实现手动测试代码化的框架。服务对[开源免费](https://github.com/marketplace/testspace-com)，每月450个结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行测试框架集成。开源软件开发者、个人、教育工作者和小团队可以申请超出基本免费项目的折扣和免费服务。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查Webhook。转发到本地主机或从历史记录重放。免费使用。
  * [Vaadin](https://vaadin.com) — 用Java或TypeScript构建可扩展UI，并使用集成的工具、组件和设计系统更快迭代、更好设计和简化开发流程。无限项目，五年免费维护。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一URL调试和检查Webhook和HTTP请求。完全免费，您可以创建无限URL并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证Webhook、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费网络和服务器工具。
  * [kogiQA](https://kogiqa.com) — 无需选择器的Web UI自动化工具。每位开发者每月免费获得500次操作。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、密钥管理、IaC、恶意软件、容器扫描、生命周期终止等。免费版包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描。
  * [CertKit](https://www.certkit.io/certificate-management) - SSL证书签发、续期和监控管理工具。可搜索证书透明度日志。测试期结束后免费支持3个证书和1个用户。
  * [crypteron.com](https://www.crypteron.com/) — 面向云原生的开发者友好型安全平台，为.NET和Java应用提供数据泄露防护
  * [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言即可进行数据编解码分析的简易网页工具。堪称密码学领域的瑞士军刀。所有功能免费无限制使用。支持开源自托管。
  * [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略，防止配置错误
  * [Dependabot](https://dependabot.com/) 自动化依赖项更新工具，支持Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven/Gradle）、.NET、Go、Elm、Docker、Terraform、Git子模块和GitHub Actions。
  * [DJ Checkup](https://djcheckup.com) — 免费自动化检测工具，扫描Django网站的安全漏洞。基于Pony Checkup站点开发。
  * [Doppler](https://doppler.com/) — 通用密钥管理器，支持同步到各类云服务商。免费版支持5个用户及基础访问控制。
  * [Dotenv](https://dotenv.org/) — 安全快捷地同步.env文件。杜绝通过Slack/邮件等不安全渠道共享.env文件，永久避免.env文件丢失。免费支持3人团队。
  * [GitGuardian](https://www.gitguardian.com) — 自动化密钥检测与修复工具，防止敏感信息泄露到源代码。可扫描350+种密钥类型，25人以下团队免费使用。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费检索2000万条GitHub公开仓库、代码片段、议题和评论中的泄露密钥
  * [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
  * [hostedscan.com](https://hostedscan.com) — 网页应用/服务器/网络漏洞扫描平台。每月10次免费扫描额度。
  * [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境全流程管理。5名开发者内免费使用。
  * [Internet.nl](https://internet.nl) — 现代互联网标准测试工具（IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等）
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，所有主流浏览器均信任其证书
  * [meterian.io](https://www.meterian.io/) - Java/JavaScript/.NET/Scala/Ruby/NodeJS项目依赖项安全监控。1个私有项目免费，开源项目不限量。
  * [Mozilla Observatory](https://observatory.mozilla.org/) — 网站安全漏洞检测与修复工具
  * [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 多功能SSL工具包，包含密钥/CSR生成器、证书解码器、证书匹配器和SSL订购功能。支持通过CNAME记录（非TXT记录）获取Let's Encrypt/Google Trust/BuyPass免费证书。
  * [Protectumus](https://protectumus.com) - PHP网站免费安全检测、网页杀毒和服务器防火墙(WAF)。注册用户可获取邮件通知。
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据已在GitHub公开(https://github.com/unknownhad/AWSAttacks)，完整列表需通过API获取
  * [pyup.io](https://pyup.io) — Python依赖项安全漏洞监控与自动更新工具。1个私有项目免费，开源项目不限量。
  * [qualys.com](https://www.qualys.com/community-edition) — 网页应用漏洞扫描工具，支持OWASP风险审计
  * [Socket](https://socket.dev) — 为个人开发者、小团队和开源项目提供的免费供应链安全方案。包含应用和防火墙CLI工具，可检测70+种供应链风险指标。
  * [SOOS](https://soos.io) - 开源项目不限次SCA扫描。在发布前检测并修复安全威胁，通过简洁方案保护项目安全。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL网页服务器配置深度分析工具
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net) - 免费网站安全检测与恶意软件扫描工具
  * [TestTLS.com](https://testtls.com) - SSL/TLS服务安全配置测试工具（不限于HTTPS），支持证书链等多项检测
  * [Virgil Security](https://virgilsecurity.com/) — 端到端加密、数据库保护、物联网安全等数字安全解决方案。250用户内应用免费使用。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [360用户名搜索](https://360username.com/) - 免费工具，可在90多个社交平台搜索用户名以匹配个人资料。
* [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费支持1000名月活跃用户和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成SSO、MFA、无密码认证等功能。包含前后端应用SDK。免费支持1000名月活跃用户和5个身份提供商。
* [Auth0](https://auth0.com/) - 托管式SSO服务。免费套餐包含25,000名月活跃用户、无限社交连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP、2FA和SSO。包含完整前端。免费支持5000名月活跃用户。
* [Authress](https://authress.io/) - 认证登录和访问控制，支持任意项目的无限身份提供商（Facebook/Google/Twitter等）。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)，支持备份。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持编写、测试和部署访问策略。细粒度权限控制，免费支持100个月度活跃主体。
* [Clerk](https://clerk.com) - 用户管理、认证、2FA/MFA，提供登录/注册/用户资料等预制UI组件。免费支持10,000名月活跃用户。
* [Cloud-IAM](https://www.cloud-iam.com/) - Keycloak身份与访问管理即服务。免费支持100个用户和1个域。
* [Descope](https://www.descope.com/) - 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500名活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) - 网站/应用双因素认证(2FA)。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费7500名月活跃用户起步。
* [logintc.com](https://www.logintc.com/) - 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN/网站/SSH。
* [Logto](https://logto.io/) - 开发、保护和管理产品用户身份，涵盖认证与授权。免费5000名月活跃用户，支持开源自托管。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动等应用实现无密码认证。
* [Okta](https://developer.okta.com/signup/) - 用户管理、认证与授权。免费支持100名月活跃用户。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，无限团队成员，200名日活用户和2.5万次/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC，提供实时更新和无代码策略UI。免费1000名月活跃用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理。免费域支持1000个用户和10个SSO连接，采用包含[组织](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [PropelAuth](https://propelauth.com) - 通过几行代码即可向任意规模企业销售，免费支持200个用户和1万封事务邮件（带"Powered by PropelAuth"水印）。
* [Stack Auth](https://stack-auth.com) - 不反人类的开源认证方案。5分钟快速入门，开发者友好。可免费自托管或使用含1万免费月活跃用户的SaaS版。
* [Stytch](https://www.stytch.com/) - 提供认证和防欺诈API/SDK的一体化平台。免费套餐含1万名月活跃用户、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证，快速入门同时掌控用户体验。免费支持5000名月活跃用户。
* [WorkOS](https://workos.com/) - 免费用户管理和认证，支持100万月活跃用户。包含邮箱密码、社交登录、Magic Auth、MFA等功能。
* [ZITADEL Cloud](https://zitadel.com) - 开箱即用的用户和访问管理，支持多租户(B2B)场景。免费2.5万次认证请求，包含所有安全功能（OTP/无密码/策略等功能无付费墙）。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [Appho.st](https://appho.st) - 移动应用托管平台。免费套餐包含5个应用、每月50次下载，最大文件尺寸100MB。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费版功能：应用上传、密码保护链接、1天有效期、10次安装。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发平台。免费套餐包含1个应用项目、3个应用版本、500MB存储空间及每月100次应用安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费版功能：无限次上传、私有链接、访客2天有效期、注册用户60天有效期。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限次上传服务。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时监控设备群并免费保护无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理部署服务器和站点。免费支持1台服务器
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理和监控基于PHP的Web服务器。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 具有友好界面的服务器管理与部署平台。免费层支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接和100个峰值频道
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。小狐猴套餐：每月最多100万条消息、20个并发连接、100个队列、1万条队列消息、跨可用区的多节点部署
* [courier.com](https://www.courier.com/) - 统一API集成推送、应用内消息、邮件、聊天、短信等多渠道通知，含模板管理功能。免费套餐每月1万条消息
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可即时获取的弹性安全无服务器MQTT代理。永久免费100万会话分钟/月（无需信用卡）
* [Engage](https://engage.so/) - SaaS客户互动与自动化全流程工具（邮件/推送/SMS/产品导览/横幅等）。每月免费支持1,000名活跃用户
* [engagespot.co](https://engagespot.co/) - 开发者多渠道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月1万条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理，永久免费连接100台设备（无需信用卡）
* [httpSMS](https://httpsms.com) - 将安卓手机作为短信网关收发短信。免费套餐每月200条消息
* [knock.app](https://knock.app) - 开发者通知基础设施，单次API调用即可发送应用内/邮件/SMS/Slack/推送等多渠道消息。免费套餐含每月1万条消息
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含每月1万次通知+100条短信和自动语音呼叫
* [Novu.co](https://novu.co) - 开源通知基础设施，统一管理邮件/SMS/站内信/应用内/推送等多渠道。免费套餐含每月3万条通知（保留90天）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，支持API/Webhook集成。免费套餐：每日50条消息至1台设备1个应用
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）
* [pusher.com](https://pusher.com/) - 实时消息服务，免费支持100个同时连接和每日20万条消息
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务，免费支持20个同时连接和每日10万次事件
* [SMSGate](https://sms-gate.app) - 安卓™短信网关云服务，完全免费（建议日超1万条时通知以保障服务质量）
* [SuprSend](https://www.suprsend.com/) - API优先的通知基础设施，单接口实现事务性/定时/互动等多渠道通知。免费套餐含每月1万条通知，支持摘要/批次/多通道/租户等流程节点
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)托管服务，覆盖全球/AWS/GCP/Azure。永久免费套餐支持4KB消息大小、50个活跃连接和每月5GB数据
* [webpushr](https://www.webpushr.com/) - 网页推送通知，免费支持1万订阅用户且推送数量不限

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志存储，保留24小时
* [log.dog](https://log.dog/) — LogDog是面向iOS和Android的远程调试/日志记录SDK，提供网页界面。实时捕获所有日志、请求和事件并支持拦截功能。每月免费100MB日志额度
* [logflare.app](https://logflare.app/) — 每个应用每月免费1,296万条记录，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理服务。每月免费1GB额度，保留3天
* [logzab.com](https://logzab.com/) — 审计追踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — ManageEngine提供的日志管理服务。免费版包含50GB存储空间，15天存储保留期和7天日志检索
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入量，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限项目、无限字符串和协作者
* [Free PO editor](https://pofile.net/free-po-editor) — 完全免费使用
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，支持网页和移动端本地化。可自带LLM，或通过Lingo.dev托管引擎每月免费使用10,000词
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 免费支持1,000条源语言字符串，无限语言和贡献者，提供初创企业和开源优惠
* [Localit](https://localit.io) – 快速开发者友好型本地化平台，无缝免费集成GitHub/GitLab，AI辅助和人工翻译，提供慷慨免费计划（含2用户、500键值和无限项目）
* [localizely.com](https://localizely.com/) — 开源项目免费
* [Loco](https://localise.biz/) — 免费支持2,000条翻译，无限译者，10种语言/项目，1,000个可翻译资源/项目
* [POEditor](https://poeditor.com/) — 免费支持1,000条字符串
* [SimpleLocalize](https://simplelocalize.io/) - 免费支持100个翻译键值，无限字符串和语言，提供初创企业优惠
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 有限翻译的免费SaaS服务，永久免费的自托管版本
* [transifex.com](https://www.transifex.com/) — 开源项目免费

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [assertible.com](https://assertible.com) — 自动化API测试与监控。为团队和个人提供免费方案。
* [Better Stack](https://betterstack.com/better-uptime) - 集正常运行时间监控、事件管理、值班排班/告警和状态页面于一体的产品。免费方案包含10个监测器（3分钟检查频率）和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器、5个正常运行时间监测器，无限制用户/仪表盘/告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费方案含1用户、1万次API及网络检查/1.5千次浏览器检查运行。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查看URL或网站的核心网页指标历史数据。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与正常运行时间监控。免费层提供5个监测器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。1个免费监测器，推荐注册可获更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个正常运行时间监测器，5分钟间隔。支持邮件/Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过云资源优化与报告帮助厘清云基础设施成本。每月Google Cloud Platform消费不超过5,000美元免费。
* [fivenines.io](https://fivenines.io/) — 实时仪表盘与告警的Linux服务器监控——永久免费监控最多5台服务器（60秒间隔）。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是可组合的可观测性平台，集成指标与日志。免费版含3用户、10仪表盘、100告警，Prometheus/Graphite指标存储（1万序列，14天保留），Loki日志存储（50GB日志，14天保留）。
* [healthchecks.io](https://healthchecks.io) - 监控定时任务与后台任务。最多20个检查免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云与SaaS状态页聚合器——永久免费提供20个监测器和2个通知渠道（Slack/Discord）。
* [inspector.dev](https://www.inspector.dev) - 一分钟内搭建完整的实时监控仪表盘，提供永久免费层。
* [instatus.com](https://instatus.com) - 10秒创建美观状态页。永久免费支持无限制订阅与团队。
* [linkok.com](https://linkok.com) - 在线失效链接检查器，小型网站（100页内）免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 带限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware可观测性平台全面监控应用与技术栈，支持规模化诊断。开发者社区永久免费版含100万日志事件监控、2台主机的基础设施监控与应用性能监控。
* [MonitorMonk](https://monitormonk.com) - 极简正常运行时间监控与精美状态页。永久免费方案支持10个网站/API端点的HTTPS/关键词/SSL/响应时间监控，提供2个仪表盘/状态页。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是开源实时指标收集工具。发展迅速，GitHub可寻！
* [newrelic.com](https://www.newrelic.com) — New Relic可观测性平台助力工程师构建更完善软件。从单体到无服务架构，可检测全栈并分析、排障、优化。免费层含每月100GB数据摄入、1个全权限用户与无限制基础用户。
* [OnlineOrNot.com](https://onlineornot.com/) - 提供网站/API正常运行时间监控、定时任务监控及状态页。前5个检查（3分钟间隔）免费。免费层通过Slack/Discord/邮件发送告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检测网站是否被中国防火墙屏蔽。通过对比中美服务器DNS结果与ASN信息识别DNS污染。
* [pagecrawl.io](https://pagecrawl.io/) - 网站变更监控，免费支持6个监测器每日检查。
* [pagertree.com](https://pagertree.com/) - 简洁的告警与值班管理界面。最多5用户免费。
* [phare.io](https://phare.io/) - 正常运行时间监控免费支持10万事件，无限制项目与状态页。
* [pingbreak.com](https://pingbreak.com/) — 现代正常运行时间监控服务。无限制URL检测，通过Discord/Slack/邮件接收宕机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个正常运行时间监测器（10分钟间隔）。支持SSH/HTTP/HTTPS及自定义TCP端口监控。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页平台。免费层含1个可公开定制的SSL子域名状态页。开源项目与非营利组织免费提供专业版。
* [Pulsetic](https://pulsetic.com) - 10个监测器、6个月历史正常运行时间/日志、无限制状态页与自定义域名！永久免费且无限制邮件告警。无需信用卡。
* [robusta.dev](https://home.robusta.dev/) — 基于Prometheus的强大Kubernetes监控。自带Prometheus或安装一体化套件。免费层支持20个Kubernetes节点。通过Slack/Microsoft Teams/Discord等告警。集成PagerDuty/OpsGenie/VictorOps/DataDog等工具。
* [Servervana](https://servervana.com) - 支持大型项目与团队的高级正常运行时间监控。提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等。免费层含10个HTTP监测器、1个DNS监测器和1个状态页。
* [Simple Observability](https://simpleobservability.com) — 统一指标与日志的强力服务器监控平台，无复杂配置。1台服务器免费。
* [sitesure.net](https://sitesure.net) - 网站与定时任务监控——免费2个监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [stathat.com](https://www.stathat.com/) — 免费开始使用10个统计指标，无期限
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限制测试（带限制）
* [statusgator.com](https://statusgator.com/) — 状态页监控，免费3个监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、正常运行时间监控、DNS与域名监控。免费监控10台服务器、10个正常运行时间、10个域名。
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标。
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个正常运行时间监测器（5分钟间隔）和可定制状态页（商用亦可）。通过邮件/Telegram享受无限制实时通知。无需信用卡即可开始。
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站（60秒间隔），公开状态页。
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次。

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [Axiom](https://axiom.co/) — 提供0.5TB日志存储（保留30天），包含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪服务，每月5,000次错误免费，自托管可无限使用
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后每月2,000次错误免费
* [CatchJS.com](https://catchjs.com/) - 带屏幕截图和点击轨迹的JavaScript错误追踪，开源项目免费
* [elmah.io](https://elmah.io/) — 面向Web开发者的错误日志与运行时间监控，开源项目可获免费小型商业订阅
* [Embrace](https://embrace.io/) — 移动应用监控，小团队每年100万用户会话内免费
* [exceptionless](https://exceptionless.com) — 实时错误/功能/日志报告等，每月3,000次事件/1用户免费，开源且支持无限量自托管
* [GlitchTip](https://glitchtip.com/) — 简洁开源错误追踪，兼容Sentry SDK，每月1,000次事件免费，自托管无限制
* [honeybadger.io](https://www.honeybadger.io) - 异常/运行时间/cron监控，小团队和开源项目免费（每月12,000次错误）
* [Jam](https://jam.dev) - 开发者友好的一键报错工具，免费计划支持无限次报错
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台，[Nordic](https://app.memfault.com/register-nordic)/[NXP](https://app.memfault.com/register-nxp)/[Laird](https://app.memfault.com/register-laird)设备免费支持100台
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费计划含5,000次错误/月，无限用户，30天留存
* [Semaphr](https://semaphr.com) — 移动应用免费一体化紧急开关
* [sentry.io](https://sentry.io/) — 实时应用异常追踪，提供小型免费计划（5,000次错误/月/1用户），自托管不限量
* [Whitespace](https://whitespace.dev) – 浏览器内一键报错工具，个人用途免费计划支持无限录制

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)服务。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。每月前1,000名活跃用户免费，不限指令数量。
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程和Python等领域的免费认证课程
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 来自行业顶尖专家的免费短期课程，通过一小时内的实践掌握最新生成式AI工具与技术
* [DevNet Academy](https://devnet-academy.com/) – 为Cisco DevNet Expert/CCIE Automation认证提供的免费自学课程，涵盖Python Click和Flask-RESTx框架
* [Django教程网](https://django-tutorial.dev) - 提供Django框架的免费在线学习指南，并为用户撰写的文章提供dofollow反向链接
* [edX](https://www.edx.org/) - 提供哈佛、MIT等250所顶尖机构的4000+免费在线课程，专注计算机科学、工程与数据科学领域
* [Exercism](https://exercism.org) – 支持75+编程语言的免费开源编程教育平台，提供人工指导服务（非营利组织运营）
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，支持完整克隆编辑与下载
* [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台提供数据分析、信息安全、Web开发等领域的免费课程与认证
* [全栈开放课程](https://fullstackopen.com/en/) – 大学级现代Web开发免费课程，涵盖React、Node.js、GraphQL、TypeScript等技术，支持在线自学
* [智能交互简历](https://interactive-cv.com) — 具备实时编辑和ATS优化功能的AI简历生成器，免费版包含高级模板转换（哈佛/欧式）、PDF导出、无限职位追踪及带聊天/语音功能的简历分享
* [可汗学院编程课程](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS、JavaScript和SQL从基础到进阶的免费学习指南
* [LabEx](https://labex.io) - 通过交互式实验和真实项目培养Linux、DevOps、网络安全、编程与数据科学等技能
* [MIT开放课程](https://ocw.mit.edu/) - 汇集2500+门MIT课程资料，向全球学习者免费开放知识资源。YouTube频道请访问[@mitocw](https://www.youtube.com/@mitocw/featured)
* [技术路线图](https://roadmap.sh) - 涵盖区块链到UX设计等开发全领域的免费学习路线指南
* [The Odin Project](https://www.theodinproject.com/) - 专注JavaScript和Ruby的Web开发免费开源课程平台
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源的匿名邮件转发服务，免费创建无限邮箱别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和电话号码验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 新闻简报服务，最多100名免费订阅者
* [Contact.do](https://contact.do/) — 链接形式的联系表单（类似Bitly的联系表单）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [dkimvalidator.com](https://dkimvalidator.com/) - 测试邮件的DNS/SPF/DKIM/DMARC设置是否正确，由roundsphere.com提供的免费服务
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，仅客户端邮件发送工具，免费层每月200次请求，2个邮件模板，请求上限50KB，有限联系人历史记录
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每天300封
* [EmailOctopus](https://emailoctopus.com) - 最多2500名订阅者，每月10000封免费邮件
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务，主要面向Nodemailer和EmailEngine用户，完全免费的防事务性邮件服务
* [forwardemail.net](https://forwardemail.net) — 自定义域名的免费邮件转发服务（注意：使用.casa/.cf/.click等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每天15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发
* [Inboxes App](https://inboxesapp.com) — 每天创建最多3个临时邮箱，可通过Chrome扩展管理
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱，邮件自动保留3天，可自托管
* [mail-tester.com](https://www.mail-tester.com) — 邮件DNS/SPF/DKIM/DMARC设置测试，每月20次免费
* [Maileroo](https://maileroo.com) - 开发者SMTP中继和邮件API，每月5000封邮件，含邮件验证/黑名单监控等功能
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过网页界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API服务，每月3000封免费邮件
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求
* [Maildroppa](https://maildroppa.com) - 最多100名订阅者，无限邮件和自动化流程
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统，任意收件箱可用
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封限制）
* [mailsac.com](https://mailsac.com) - 临时邮件测试API，每月1500次请求限制
* [Mailtrap.io](https://mailtrap.io/) — 邮件API/SMTP服务，开发用模拟SMTP服务器
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID，1个域名，1个统一收件箱
* [OneSignal](https://onesignal.com/) — 每月10000封免费邮件，无需信用卡
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据）
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费1GB存储的加密邮箱服务
* [Resend](https://resend.com) - 开发者事务性邮件API，每月3000封免费邮件
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管的邮箱别名方案，教育工作者免费
* [Substack](https://substack.com) — 无限免费新闻简报服务，收费时开始付费
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API，每天100封免费
* [temp-mail.io](https://temp-mail.io) — 多账号临时邮件服务
* [Temp-Mail.org](https://temp-mail.org/en/) - 完全免费的临时邮件生成器
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200次邮箱是否为临时地址
* [trashmail.com](https://www.trashmail.com) - 带转发和自动过期的临时邮箱
* [Tuta](https://tuta.com/) - 免费1GB存储的加密邮箱服务，可部分自托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，每天25次免费
* [verimail.io](https://verimail.io/) — 批量邮箱验证服务，每月100次免费
* [Wraps](https://wraps.dev) - 邮件自动化工具，5000次免费事件跟踪

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [Abby](https://www.tryabby.com) - 开源功能开关与A/B测试平台。支持代码化配置和全类型化TypeScript SDK。深度集成Next.js、React等框架。提供慷慨的免费额度与经济高效的扩展方案。
* [ConfigCat](https://configcat.com) - 面向开发者的功能开关服务，支持无限团队成员，提供卓越支持与合理定价。免费版包含10个开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 安全发布功能：跨Web、移动端和服务端应用管理功能开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源功能开关与A/B测试平台，内置贝叶斯统计分析引擎。免费版支持3名用户，不限功能开关与实验数量。
* [Hypertune](https://www.hypertune.com) - 类型安全的功能开关、A/B测试、分析与应用配置平台，具备Git式版本控制和同步内存本地开关评估。5人以下团队免费，不限功能开关与A/B测试数量。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试与分析一体化平台。免费版提供无限席位、开关、实验和动态配置，支持每月100万次事件。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域功能开关管理平台。免费版包含10个开关、2个环境且不限请求次数。SDK、分析面板、发布日历、Slack通知等所有功能均包含在永久免费计划中。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [Befonts](https://befonts.com/) - 提供多种独特字体，可用于个人或商业用途
* [Bunny](https://fonts.bunny.net) 注重隐私的Google Fonts替代方案
* [dafont](https://www.dafont.com/) - 本站所有字体均为作者原创，包含免费版、共享版、试用版及公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face生成器、单位转换器、字体提示器和字体提交工具
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Font Squirrel](https://www.fontsquirrel.com/) - 精选可商用的免费字体库，以易用格式呈现
* [FontGet](https://www.fontget.com/) - 提供分类标签整理的多样化字体下载资源
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标记的开源Google字体库，包含中日韩文字体标签
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体库，个人和商业用途均可100%免费使用
* [Google Fonts](https://fonts.google.com/) - 通过下载或链接Google CDN即可快速在网站上使用的免费字体库

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月允许250次表单提交。友好的现代化图形界面，支持与Google Sheets、Airtable、Slack、电子邮件等平台集成。
* [Feathery](https://feathery.io) - 功能强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等场景。免费版每月允许250次提交和5个活跃表单。
* [feedback.fish](https://feedback.fish/) - 免费版可收集总计25条反馈提交。提供React和Vue组件便于集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交终端。具备通知、垃圾信息拦截和GDPR合规数据处理功能。基础使用免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单终端，免费版每月允许100次提交。
* [Formester.com](https://formester.com) - 在网站分享和嵌入独特风格的表单——不限创建数量或功能限制。免费版每月可获100次提交。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单数量，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。额外功能包括自定义字段规则、团队协作及与Google Sheets、Slack、ActiveCampaign和Zapier的集成。
* [formlets.com](https://formlets.com/) — 在线表单工具，免费版支持无限单页表单/月，100次提交/月，含邮件通知。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动评分计算器和AI等强大功能的在线表单。免费版可收集100条回复，支持网站嵌入或链接分享。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版支持无限表单，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版限制每表单每月50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易终端。永久免费，无需注册。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。通过界面将提交内容转发至邮箱、Slack或Zapier。支持自定义前端，无需服务器代码。免费版提供无限表单和每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建器。免费版可创建无限表单并收集无限提交，含预制模板、反垃圾功能和100MB文件存储。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单终端，特别适合静态网站。免费版支持1个网站每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个网站、1个表单和每月1,000次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版支持无限PDF文件，每个PDF允许3次提交。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端，永久免费版包含每月50次提交、250MB文件存储、Zapier集成、CSV/JSON导出、自定义跳转/响应页面、Telegram & Slack机器人通知及单邮件提醒。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码即可免费集成HTML表单。用户提交后，表单内容将发送至注册邮箱。
* [Survicate](https://survicate.com/) — 统一收集多渠道反馈并发送跟进调查。通过AI自动分析反馈提取洞察。免费版含邮件/网站/产品内/移动端调查工具、AI问卷生成器和每月25条回复。
* [Tally.so](https://tally.so/) - 99%功能免费开放。免费版包含：无限表单、无限提交、邮件通知、表单逻辑、支付收集、文件上传、自定义致谢页等。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计的表单。免费版限制每表单10个字段和每月100条回复。
* [Vidhook](https://vidhook.io/) - 通过高响应率的趣味调查收集反馈。免费版包含1个活跃问卷、每问卷25条回复和可定制模板。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台，支持webhook通知。免费版会对签署文件添加水印，但允许无限信封+签名。
* [Web3Forms](https://web3forms.com) - 无需编写后端代码即可为静态&JAMStack网站添加联系表单。免费版支持无限表单、无限域名和每月250次提交。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限制100次提交。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Arize AX](https://arize.com) - 帮助AI工程师/产品经理评估和观测AI应用与智能体的工程平台，内置Alyx智能体。免费版包含每月25,000次调用和1GB数据吞吐量
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — 基于AI的音频增强SaaS服务，可消除噪声和回声同时保持人声自然清晰。完全免费：支持无限次一键增强，无需登录，兼容MP3/WAV/FLAC格式
* [Braintrust](https://www.braintrustdata.com/) - 面向生成式AI的评估系统、提示词沙盒及数据管理平台。免费计划每周提供最多1,000条私有评估记录
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费使用专业套件，包含开放检索、临床摘要、药物审查、药物相互作用、ICD-10编码及管理功能。专业套件同时提供免费试用
* [Comet Opik](https://www.comet.com/site/products/opik/) - 全生命周期评估、测试和部署LLM应用。[#开源项目](https://github.com/comet-ml/opik/)
* [Keywords AI](https://keywordsai.co) - 顶尖LLM监控平台。两行代码即可调用200+个LLM模型。每月10,000次免费请求，平台功能完全免费！
* [Langfuse](https://langfuse.com/) - 开源LLM工程平台，协助团队协作调试、分析和迭代LLM应用。永久免费版包含每月50,000次观测及全部平台功能。[#开源项目](https://github.com/langfuse/langfuse)
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示词与数据集，并调试LLM应用性能问题。通过开放遥测标准为任意LLM生成追踪数据，兼容所有观测客户端。免费版每月提供50,000次追踪
* [LangWatch](https://langwatch.ai) - LLMOps平台，助力AI团队测量、监控和优化LLM应用的可靠性、成本效益及性能。通过强大的DSPy组件，促进技术与非技术团队协作调优生成式AI产品。免费版包含全部平台功能，每月1,000次追踪和1个工作流DSPy优化器。[#开源项目](https://github.com/langwatch/langwatch)
* [Mediaworkbench.ai](https://mediaworkbench.ai) - 提供100,000个免费词次的Azure OpenAI、DeepSeek和Google Gemini模型使用权，支持代码生成、深度研究和图像创建
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供多种免费AI模型包括DeepSeek R1/V3、Llama和Moonshot AI，擅长自然语言处理并适用于多样化开发需求。注意免费模型存在速率限制，另提供Claude/OpenAI/Grok/Gemini/Nova等付费模型满足进阶需求
* [Othor AI](https://othor.ai/) - 基于大语言模型的快速、简洁、安全的新型商业智能方案，可替代Tableau/Power BI/Looker。免费永久版提供1个工作区、5个数据源连接及无限次分析。[#开源项目](https://github.com/othorai/othor.ai)
* [Pollinations.AI](https://pollinations.ai/) - 免注册、无API密钥的免费图像生成AI，提供多种网站/工作流集成方案。[#开源项目](https://github.com/pollinations/pollinations)
* [Portkey](https://portkey.ai/) - 生成式AI应用控制面板，含观测套件和AI网关。每月免费处理10,000次请求
* [ReportGPT](https://ReportGPT.app) - AI写作助手。只要自带API密钥即可完全免费使用
* [Zenable](https://zenable.io) - 通过策略即代码构建的防护栏，自动修正Cursor/Windsurf/Copilot等工具的输出以满足企业质量与合规标准。免费版包含每日100次MCP服务器调用和25次GitHub自动PR审查

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [CacheFly](https://portal.cachefly.com/signup/free2023) - 每月免费5TB CDN流量，19个核心节点，1个域名及通用SSL证书
* [cdnjs.com](https://cdnjs.com/) — 简洁、快速、可靠的内容分发网络。由Cloudflare提供支持，全球超过11%的网站使用
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库为最流行的开源JavaScript库提供内容分发网络
* [Gcore](https://gcorelabs.com/) 全球内容分发网络，每月免费1TB流量和100万次请求，含免费DNS托管
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN。支持npm、GitHub、WordPress、Deno等平台
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管jQuery等流行第三方JavaScript库
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [PromoProxy](https://promoproxy.net/) - 免费云端安全Web网关。免费版支持最多5个用户和每日1GB流量
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代方案，使用Cloudflare托管文件
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名免费100万次请求
* [statically.io](https://statically.io/) — 为Git仓库（GitHub/GitLab/Bitbucket）、WordPress资源和图片提供CDN服务
* [Stellate](https://stellate.co/) - 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理服务。个人开发者免费（无技术支持）
* [UNPKG](https://unpkg.com/) — npm全库CDN服务
* [weserv](https://images.weserv.nl/) — 图片缓存和尺寸调整服务。实时处理图片并全球缓存

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [ampt.dev](https://getampt.com/) - Ampt 让团队无需复杂配置或管理基础设施即可在 AWS 上构建、部署和扩展 JavaScript 应用。免费预览计划包含每小时 500 次调用、每日 2,500 次调用和每月 50,000 次调用。自定义域名仅在付费计划中允许。
  * [anvil.works](https://anvil.works) - 仅用 Python 开发 Web 应用。免费层包含无限应用和 30 秒超时。
  * [Apply.build](https://apply.build/) — 免费构建和部署你的 GitHub 应用，包含 0.5 vCPU / 512 MiB 内存、欧洲服务器、自动防火墙、实时性能指标。支持 Node.js、Python、Go、Java、静态网站、微服务等。
  * [appwrite](https://appwrite.io) - 无限项目且无项目暂停（支持 WebSocket）和认证服务。免费层每个项目包含 1 个数据库、3 个存储桶和 5 个函数。
  * [Choreo](https://wso2.com/choreo/) - AI 原生的内部开发者平台即服务。免费层包含最多 5 个组件和每月 100 美元额度。
  * [codenameone.com](https://www.codenameone.com/) — 面向 Java/Kotlin 开发者的开源跨平台移动应用开发工具链。商业用途免费，项目数量不限。
  * [Daestro](https://daestro.com) - 跨云提供商和本地运行计算任务。免费层包含最多 10 个并发任务运行、2 个计算实例、自托管计算、1 个云提供商、1 个容器注册表和 1 个定时任务。
  * [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的 JavaScript、TypeScript 和 WebAssembly 分布式系统。免费层包含每天 100,000 次请求和每月 100 GiB 数据传输。
  * [domcloud.co](https://domcloud.co) – 提供 GitHub CI/CD、SSH 和 MariaDB/Postgres 数据库的 Linux 托管服务。免费版包含 1 GB 存储和每月 1 GB 网络流量限制，且仅限于免费域名。
  * [encore.dev](https://encore.dev/) — 使用静态分析提供自动基础设施、无样板代码等的后端框架。包含业余项目的免费云托管。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 通过 Git 推送式工作流在你自己的 AWS 账户上部署 Web 服务、数据库等。个人 GitHub 仓库的开发者免费层。AWS 费用通过 AWS 计费，但可使用额度和 AWS 免费层。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir 提供一个永不休眠的免费实例和一个免费层 PostgreSQL 数据库，限制为 2 个连接、10,000 行且无备份，适用于 Elixir/Phoenix 应用。
  * [Koyeb](https://www.koyeb.com) - Koyeb 是一个开发者友好的无服务器平台，用于全球部署应用。无缝运行 Docker 容器、Web 应用和 API，支持基于 Git 的部署、原生自动扩展、全球边缘网络及内置服务网格和发现。免费实例可在德国法兰克福或美国华盛顿特区部署 Web 服务。免费托管 PostgreSQL 数据库在德国法兰克福、美国华盛顿特区和新加坡可用。512MB 内存、2GB 存储和 0.1 CPU。
  * [leapcell](https://leapcell.io/) - Leapcell 是一个可靠的分布式应用平台，提供支持快速增长所需的一切。免费计划包含 10 万次服务调用、1 万次异步任务和 10 万次 Redis 命令。
  * [Northflank](https://northflank.com) — 通过强大的 UI、API 和 CLI 构建和部署微服务、任务和托管数据库。从版本控制和外部 Docker 注册表无缝扩展容器。免费层包含 2 个服务、2 个定时任务和 1 个数据库。
  * [pipedream.com](https://pipedream.com) - 为开发者构建的集成平台。基于任何触发器开发任何工作流。工作流是可[免费](https://docs.pipedream.com/pricing/)运行的代码。无需管理服务器或云资源。
  * [Railway](https://railway.app/) - 通过基于 Git 的部署、自动 CI/CD 和内置数据库部署任何内容。免费层每月包含 5 美元额度。
  * [pythonanywhere.com](https://www.pythonanywhere.com/) — 云端 Python 应用托管。新手账户免费，包含 1 个 Python Web 应用（your-username.pythonanywhere.com 域名）、512 MB 私有文件存储和 1 个 MySQL 数据库。
  * [WunderGraph](https://cloud.wundergraph.com) - 一个开源平台，可快速构建、发布和管理现代 API。内置 CI/CD、GitHub 集成和自动 HTTPS。[免费计划](https://wundergraph.com/pricing)包含最多 3 个项目、1GB 出口流量和每月 300 分钟构建时间。
  * [YepCode](https://yepcode.io) - 一体化平台，用于在无服务器环境中连接 API 和服务。它结合了 NoCode 工具的敏捷性和优势，同时保留了使用编程语言的全部能力。免费层包含 [1,000 次 yeps](https://yepcode.io/pricing/)。
  * [Zeabur](https://zeabur.com) - 一键部署你的服务。免费支持三个服务，每月 5 美元免费额度。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度5,000次任务。
* [back4app.com](https://www.back4app.com) - 基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) — 移动与Web后端即服务，含1GB免费文件存储、每月5万次推送通知及1000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在函数运行时和托管存储上启动您的Python API，支持在线编辑器免费构建托管或使用本地工具开发。
* [Claw.cloud](https://run.claw.cloud) - 为GitHub账户注册超过180天的用户提供每月5美元免费额度的PaaS平台，适合托管应用、数据库等（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件和推送通知。1000用户以下应用免费。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管数据（支持关系型文档和可序列化ACID事务）、无服务器函数及WebSocket实时更新。小型项目免费——100万条记录/500万次月度函数调用。
* [ETLR](https://etlr.io) - 使用YAML定义、版本化和部署自动化脚本。开发者优先的拖拽工具替代方案，适用于定时任务、AI代理和基础设施监控。免费层含100积分/月。
* [Flutter Flow](https://flutterflow.io) — 无需编写代码即可构建Flutter应用UI，集成Firebase。免费计划包含UI生成器和模板全集。
* [getstream.io](https://getstream.io/) — 数小时内构建可扩展的应用内聊天、消息、音视频及信息流功能（通常需数周）。
* [IFTTT](https://ifttt.com) — 自动化您喜爱的应用和设备。免费2个小程序。
* [Integrately](https://integrately.com) — 一键自动化繁琐任务。免费100次任务/15分钟。
* [LeanCloud](https://leancloud.app/) — 移动后端。1GB数据存储/256MB实例/每日3千次API请求/1万次推送免费。（API与Parse平台高度相似）
* [nhost.io](https://nhost.io) - 为Web和移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
* [onesignal.com](https://onesignal.com/) — 无限免费推送通知。每月1万封邮件发送额度，含无限联系人和自动预热功能。
* [paraio.com](https://paraio.com) — 具备灵活身份验证、全文搜索和缓存的后端API服务。单个应用免费/1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) — 每月100万条消息/100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) — 推送通知服务。每月150万次推送免费。
* [pusher.com](https://pusher.com/beams) — 2000月活用户免费无限推送通知。iOS/Android统一API。
* [simperium.com](https://simperium.com/) — 即时自动同步多平台数据，结构化数据无限收发存储，每月最多2500用户。
* [Supabase](https://supabase.com) — 开源Firebase替代方案，提供身份验证、实时数据库和对象存储的免费计划。
* [tyk.io](https://tyk.io/) — 含身份验证、配额、监控和分析的API管理平台。提供免费云服务。
* [zapier.com](https://zapier.com/) — 连接应用实现任务自动化。每15分钟5个Zaps/每月100次任务。

更新时间：五个活跃自动化流程，支持Webhooks。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持15+种数据库和任意API集成
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker和K8s
* [Clappia](https://www.clappia.com) — 专注于业务流程应用的低代码平台，可定制移动端和Web应用。提供拖拽式界面、离线支持、实时定位追踪及第三方服务集成功能
* [lil'bots](https://www.lilbots.io/) - 在线编写和运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并团队共享。免费层包含完整API访问权限、AI编程助手及每月10,000次执行额度
* [manubes](https://www.manubes.com) - 专注于工业生产管理的强大无代码云平台。单个用户每月100万次工作流活动免费（[德语版本](https://www.manubes.de)同样可用）
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，提供无限访问的沙盒环境，支持总用户数不限，单应用0.5GB存储和1GB内存。免费层也包含Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 支持本地或云部署的企业级Web开发PaaS，免费"个人环境"提供无限代码和最高1GB数据库
* [ReTool](https://retool.com/) — 构建内部应用的低代码平台，具有高度可定制性。能用JavaScript和API实现的功能均可通过ReTool完成。免费层每月支持5个用户，不限应用数量和API连接
* [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，并通过拖拽式应用构建器开发程序
* [UI Bakery](https://uibakery.io) — 加速定制Web应用开发的低代码平台。通过JavaScript/Python/SQL实现深度定制化的拖拽式UI构建。提供云服务和自托管方案，最多5个用户免费使用

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 1GB免费虚拟主机，支持MySQL、PostgreSQL、RabbitMQ、.NET、Deno、Elixir、Go、Java、Lua、Node.js、PHP、Python、Ruby、Rust。支持自定义Web服务器，可通过FTP/WebDAV/SSH访问，含邮箱/邮件列表/应用安装器，免费版不支持自定义域名
* [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机+短域名，支持PHP/MySQL/应用安装器/邮件发送，无广告
* [Bubble](https://bubble.io/) — 可视化编程构建网页/移动应用，免费版带Bubble品牌标识
* [dAppling Network](https://www.dappling.network/) — 面向Web3前端的去中心化托管平台，专注提升可用性与安全性，为用户提供额外访问入口
* [DigitalOcean](https://www.digitalocean.com/pricing) — 应用平台入门级免费托管3个静态站点
* [FreeFlarum](https://freeflarum.com/) — 社区驱动的Flarum免费托管（支持250用户，捐赠可移除页脚水印）
* [Kinsta静态站点托管](https://kinsta.com/static-site-hosting/) — 免费部署100个静态站点，支持SSL自定义域名，100GB月流量，260+Cloudflare CDN节点
* [MDB GO](https://mdbgo.com/) — 单项目免费托管，容器存活期两周，500MB内存，1GB SFTP存储空间
* [Neocities](https://neocities.org) — 静态站点托管，1GB存储+200GB流量
* [Netlify](https://www.netlify.com/) — 每月300积分额度（约30GB流量）的静态站点构建部署托管服务
* [Oaysus](https://oaysus.com) — 面向React/Vue/Svelte组件的可视化页面构建器，免费版含1个站点（不限页面数）、表单提交和全球CDN托管
* [PandaStack](https://www.pandastack.io/) — 开发者生态平台，提供多种托管形式（静态/容器化/WordPress等一键部署应用），免费包含1个网站托管+1个数据库，100GB流量+300分钟构建时长/月
* [pantheon.io](https://pantheon.io/) — Drupal/WordPress托管与自动化DevOps，开发者与代理商免费，不支持自定义域名
* [Qoddi](https://qoddi.com) — 类Heroku的PaaS服务，免费版支持静态资源/预发布环境/开发应用
* [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制/PDF生成等功能
* [render.com](https://render.com) — 一体化云平台，免费提供SSL/全球CDN/私有网络/Git自动部署，支持Web服务/数据库/静态网页的完全免费方案
* [Serv00.com](https://serv00.com/) — 3GB免费虚拟主机含每日备份（保留7天），支持定时任务/SSH访问/GIT/SVN/Mercurial仓库，兼容MySQL/PostgreSQL/MongoDB/PHP/Node.js/Python/Ruby/Java等数十种技术栈
* [SourceForge](https://sourceforge.net/) — 免费发现、创建与发布开源软件
* [surge.sh](https://surge.sh/) — 前端开发者专用静态网页发布平台，支持无限站点与自定义域名
* [tilda.cc](https://tilda.cc/) — 1个站点50页50MB存储，仅限170+预设区块中的基础模块，不支持自定义字体/网站图标/域名
* [Vercel](https://vercel.com/) — 每次git push自动生成带SSL/全球CDN的预览URL，完美支持Next.js等静态站点生成器
* [Versoly](https://versoly.com/) — 专注SaaS的建站工具，免费版含无限网站/70+区块/5套模板/自定义CSS/网站图标/SEO优化/表单功能，不支持自定义域名

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（可加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供API支持的免费DNS服务，包含多项高级功能。
  * [cloudns.net](https://www.cloudns.net/) — 免费托管1个域名（50条记录上限）的DNS服务。
  * [deSEC](https://desec.io) - 注重安全性的免费DNS托管服务，支持API，基于开源软件运行，由[SSE](https://www.securesystems.de/)提供支持。
  * [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费托管服务。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
  * [duckdns.org](https://www.duckdns.org/) — 免费动态DNS服务（最多5个域名），提供多种环境配置指南。
  * [Dynv6.com](https://dynv6.com/) — 免费动态DNS服务，支持[API管理](https://dynv6.com/docs/apis)及多种记录类型（如CNAME、MX、SPF、SRV、TXT等）。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS托管，同时提供基于用户[贡献域名](https://freedns.afraid.org/domain/registry/)的免费子域名（注册后通过"Subdomains"菜单获取）。
  * [Glauca](https://docs.glauca.digital/hexdns/) – 最多托管3个域名的免费DNS服务，支持DNSSEC。
  * [Hetzner](https://www.hetzner.com/dns-console) – Hetzner提供的免费DNS托管服务，支持API。
  * [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) – 华为云免费DNS托管。
  * [LocalCert](https://localcert.net) - 提供与公共CA兼容的`.localcert.net`子域名，适用于私有网络。
  * [luadns.com](https://www.luadns.com/) — 免费DNS托管（3个域名），功能全面且限制合理。
  * [namecheap.com](https://www.namecheap.com/domains/freedns/) — 不限域名数量的免费DNS服务。
  * [nextdns.io](https://nextdns.io) - 基于DNS的防火墙服务，每月30万次免费查询。
  * [noip.at](https://noip.at/) — 免注册、无追踪/日志/广告的免费动态DNS服务，域名数量无限制。
  * [noip](https://www.noip.com/) — 动态DNS服务，免费版支持3个主机名（需每30天确认一次）。
  * [sslip.io](https://sslip.io/) — 免费DNS服务，当查询包含IP地址的主机名时直接返回该IP。
  * [VolaryDDNS](https://volaryddns.net) - 无订阅/广告的高性能免费动态DNS服务。
  * [zilore.com](https://zilore.com/en/dns) — 免费托管5个域名的DNS服务。
  * [zoneedit.com](https://www.zoneedit.com/free-dns/) — 支持动态DNS的免费托管服务。
  * [Zonomi](https://zonomi.com/) — 即时生效的免费DNS托管服务，免费版支持1个DNS区域（域名）和10条记录。

**[⬆️ 返回顶部](#目录)**

## 域名服务

  * [DigitalPlat](https://domain.digitalplat.org) — 免费二级域名服务
* [isroot.in](https://isroot.in) — 免费提供isroot.in二级域名
* [pp.ua](https://nic.ua/) — 免费pp.ua二级域名服务

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，安全便捷高效地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储服务。无限期免费提供10GB（类Amazon S3）对象存储
  * [C2对象存储](https://c2.synology.com/en-us/pricing/object-storage) - 兼容S3协议的对象存储服务。每月免费15GB存储空间及15GB下载流量。
  * [filebase.com](https://filebase.com/) - 基于区块链技术的S3兼容对象存储。永久免费5GB存储空间。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [8base.com](https://www.8base.com/) - 8base 是一个基于 MySQL 和 GraphQL 构建的全栈低代码开发平台，专为 JavaScript 开发者设计，提供无服务器后端即服务。它允许您快速使用 UI 应用构建器开始构建 Web 应用，并快速扩展。免费套餐包括：2,500 行数据、500MB 存储空间、1GB/小时的无服务器计算和 5 个客户端应用用户。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但实际上是一个关系型数据库，提供无限的基础表、每个表 1,200 行和每月 1,000 次 API 请求。
  * [Aiven](https://aiven.io/) - Aiven 在其开源数据平台上提供免费的 PostgreSQL、MySQL 和 Valkey（兼容 Redis）计划。单节点，1 CPU，1GB RAM，PostgreSQL 和 MySQL 提供 1GB 存储空间。可轻松迁移到更广泛的计划或跨云迁移。
  * [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费套餐每月提供 5000 万 RU 和 10 GiB 存储空间（价值 15 美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，包含函数、类 MongoDB 查询、键/值查找、任务系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划提供 5GB 存储空间和每分钟 60 次 API 调用。包含 2 名开发者。无需信用卡。
  * [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署一个永久免费的托管数据库集群，包含 1 个节点和 8GB 存储空间，专为开发者设计，用于创建从物联网到人工智能的下一代应用。
  * [CrateDB](https://crate.io/) - 用于实时分析的开源分布式 SQL 数据库。[免费套餐 CRFREE](https://crate.io/lp-crfree)：单节点，2 CPU，2 GiB 内存，8 GiB 存储空间。每个组织一个集群，无需支付方式。
  * [filess.io](https://filess.io) - filess.io 是一个平台，您可以免费创建两个数据库，每个数据库最多 10 MB，支持的 DBMS 包括：MySQL、MariaDB、MongoDB 和 PostgreSQL。
  * [InfluxDB](https://www.influxdata.com/) — 时间序列数据库，免费套餐包括每 5 分钟 3MB 写入、每 5 分钟 30MB 读取和 10,000 个基数序列。
  * [MemCachier](https://www.memcachier.com/) — 托管 Memcache 服务。免费套餐提供最多 25MB、1 个代理服务器和基本分析。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费套餐提供 512 MB。
  * [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管的原生图数据库管理系统/分析平台，支持 Cypher 查询语言和 REST API。限制图大小（50k 节点，175k 关系）。
  * [Neon](https://neon.tech/) — 托管 PostgreSQL，0.5 GB 存储空间（总计），1 个项目，10 个分支，无限数据库，始终可用的主分支（5 分钟后自动暂停），非主分支计算每月 20 小时活跃时间（总计）。
  * [Nile](https://www.thenile.dev/) — 面向 B2B 应用的 Postgres 平台。无限数据库，始终可用且不关闭，1GB 存储空间（总计），5000 万查询令牌，自动扩展，无限向量嵌入。
  * [Prisma Postgres](https://prisma.io/postgres) - 基于 unikernels 并在裸机上运行的超快托管 Postgres，1GB 存储空间，10 个数据库，与 Prisma ORM 集成。
  * [restdb.io](https://restdb.io/) - 快速且简单的 NoSQL 云数据库服务。通过 restdb.io，您可以获得模式、关系、自动 REST API（支持类 MongoDB 查询）以及一个高效的多用户管理 UI 来处理数据。免费计划允许 3 个用户、2500 条记录和每秒 1 次 API 请求。
  * [scalingo.com](https://scalingo.com/) — 主要是一个 PaaS，但提供 128MB 到 192MB 的免费 MySQL、PostgreSQL 或 MongoDB 套餐。
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队构建的灵活的类电子表格数据库。无限表格，2,000 行，1 个月版本控制，最多 25 个团队成员。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费套餐，所有计划在测试期间完全免费。
  * [StackBy](https://stackby.com/) — 一个工具，结合了电子表格的灵活性、数据库的强大功能以及与您喜爱的业务应用的内置集成。免费计划包括无限用户、10 个堆栈和每个堆栈 2GB 附件。
  * [Tinybird](https://tinybird.co) - 一个无服务器托管的 ClickHouse，支持通过 HTTP 进行无连接数据摄取，并允许您将 SQL 查询发布为托管的 HTTP API。免费套餐无时间限制，10GB 存储空间 + 每天 1000 次 API 请求。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是边缘数据库中的 SQLite 开发者体验。Turso 提供永久免费的入门计划，9 GB 总存储空间，最多 500 个数据库，最多 3 个位置，每月 10 亿行读取，以及支持本地开发的 SQLite。
  * [Upstash](https://upstash.com/) — 无服务器 Redis，免费套餐每月最多 50 万次命令，256MB 最大数据库大小和 20 个并发连接。
  * [Xata Lite](https://lite.xata.io/) - Xata Lite 是一个无服务器数据库，内置强大的搜索和分析功能。一个 API，多个类型安全的客户端库，并针对您的开发工作流程进行了优化。免费计划提供 10 个分支和 15 GB 存储空间，无暂停或冷启动。

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由工具

  * [btunnel](https://www.btunnel.in/) — 将本地主机和TCP服务器暴露到公网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露到局域网或通过隧道生成公网URL
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持
* [Hamachi](https://www.vpn.net/) — LogMeIn提供的托管VPN服务，可安全扩展类局域网网络，免费版支持最多5人无限组网
* [Hookdeck](https://hookdeck.com/pricing) — 随时随地开发、测试和监控Webhook。每月10万请求/10万次尝试，数据保留3天
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务暴露为公网URL
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 提供免费托管版和[开源版本](https://github.com/localtunnel/localtunnel)的本地服务暴露方案
* [LocalXpose](https://localxpose.io) — 支持将本地主机服务暴露到公网的反向代理，免费版隧道有效期15分钟
* [ngrok.com](https://ngrok.com/) — 最流行的本地服务公网暴露方案
* [Pinggy](https://pinggy.io) — 单命令生成公网URL（无需下载），支持HTTPS/TCP/TLS隧道，免费版隧道有效期60分钟
* [Radmin VPN](https://www.radmin-vpn.com/) — 组建VPN虚拟局域网（Hamachi替代方案），支持无限节点
* [serveo](https://serveo.net/) — 无需安装注册的本地服务暴露方案，提供免费子域名且无限制
* [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp) Twilio STUN服务
* [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302) 谷歌STUN服务
* [Tailscale](https://tailscale.com/) — 基于WireGuard协议的无配置VPN，支持Mac/iOS/Windows/Linux/Android设备，个人免费版支持100个设备和3个用户
* [webhookrelay.com](https://webhookrelay.com) — 提供Webhook管理调试、扇出代理功能，支持通过隧道将内网服务暴露为公网HTTP端点（`https://子域名.webrelay.io <----> http://localhost:8080`）
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN调用+500MB/月TURN流量（限速单区域）
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务，免费版支持25个客户端组成的端到端加密网络，提供桌面/移动/NA客户端，可通过网页配置路由规则和审批私有网络节点

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 支持协作者的私人项目免费使用
* [Backlog](https://backlog.com) — 一站式项目管理平台，免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 内网和项目管理工具，免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图），免费版最多15用户/图表和25张工作表
* [clickup.com](https://clickup.com/) — 项目管理平台，提供免费版和含云存储的付费版，支持移动应用和Git集成
* [Clockify](https://clockify.me) - 跨项目时间追踪工具，永久免费且不限用户数
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，免费版支持单人无限量私有图表
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具，免费版最多支持10名用户
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台，免费版支持3个项目且不限用户数（1GB存储）
* [diagrams.net](https://app.diagrams.net/) — 支持本地存储至Google Drive/OneDrive/Dropbox的在线图表工具，全功能免费
* [easyretro.io](https://www.easyretro.io/) — 简洁直观的迭代回顾工具，免费版每月提供3个公共看板和每看板1次调研
* [freedcamp.com](https://freedcamp.com/) - 集成任务/讨论/里程碑/时间跟踪/日历/文件/密码管理，免费版不限项目/用户/存储
* [GForge](https://gforge.com) — 支持自托管和SaaS的复杂项目管理套件，SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者专用的免费描述转图表工具，可通过关键词创建非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可对比两个GraphQL模式差异的工具，会标记破坏性/非破坏性/危险变更
* [Helploom](https://helploom.com) - 提供永久免费在线客服系统的轻量级工具，通过复制粘贴脚本即可部署
* [Hygger](https://hygger.io) — 项目管理平台，免费版不限用户/项目/看板（100MB存储）
* [Ilograph](https://www.ilograph.com/) — 支持多视角查看的基础设施交互图表工具，免费版可创建无限量私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具，免费版最多支持10名用户
* [kan.bn](https://kan.bn/) - 功能强大的看板工具，免费版支持1名用户创建无限量看板/列表/卡片
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理工具，提供免费基础版和高级付费版
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具，免费版提供2个看板和2名用户（不支持附件）
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 免费的求职管理工具（含Chrome扩展），可追踪面试/机会/人脉
* [Kumu.io](https://kumu.io/) — 支持动画/装饰/筛选/集群/表格导入的关系图谱工具，免费版可创建无限量公共项目，学生可享私有项目
* [leiga.com](https://www.leiga.com/) — AI驱动的项目管理SaaS，免费版支持10名用户/20个自定义字段/2GB存储/5分钟AI视频录制
* [Linear](https://linear.app/) — 极简问题追踪工具，免费版不限成员数（10MB文件/250个问题）
* [Lucidchart](https://www.lucidchart.com/) - 在线图表协作工具，免费版提供3个可编辑文档和100个专业模板
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理工具，免费版支持3个项目且不限成员
* [MeuScrum](https://www.meuscrum.com/en) - 免费的在线Scrum看板工具
* [nTask](https://www.ntaskmanager.com/) — 项目管理软件，免费基础版提供100MB存储和5名用户，支持无限工作区/会议/任务单
* [Plane](https://plane.so/) - 开源项目/产品管理工具，免费版不限成员数（5MB文件/1000个问题）
* [planitpoker.com](https://www.planitpoker.com/) — 免费的在线计划扑克估算工具
* [point.poker](https://www.point.poker/) - 无需注册的在线计划扑克工具，支持无限用户/团队/会话
* [Pulse.red](https://pulse.red) — 极简项目时间追踪工具
* [ScrumFast](https://www.scrumfast.com) - 直观的Scrum看板工具，免费版最多支持5名用户
* [Sflow](https://sflow.io) — 专为外包/跨组织协作设计的敏捷项目管理工具，免费版支持3个项目5名成员
* [Shake](https://www.shakebugs.com/) - 移动应用内Bug反馈工具，免费版每月10个Bug报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持10名用户
* [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发者的项目管理平台，开源项目免费
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单工具，免费版提供1个工作区（含1GB存储/1周历史记录/5人视频会议）
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/计划工具，免费支持15名用户

  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰游戏、GIF和表情符号。免费版支持3次回顾会议和无限成员。
* [Tenzu](https://tenzu.net/) — 轻量级敏捷团队项目管理工具。该SaaS产品采用自愿付费模式，用户可选择支付0元且无功能限制 {[详情](https://tenzu.net/pricing/)}
* [titanapps.io](https://titanapps.io/) — 为Jira和monday.com提供的生产力工具，支持在问题/任务中创建结构化清单、模板和审批流程。小团队可免费使用。
* [todoist.com](https://todoist.com/) — 协作与个人任务管理。免费版包含：5个活跃项目/每个项目5名成员/5MB文件上传/3个过滤器/1周活动记录。
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间追踪应用（免费版含无限记录/项目/客户/标签/报表），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（免费版支持个人开发者无限任务/里程碑/时间线）。
* [trello.com](https://trello.com/) — 看板式项目管理。免费版含无限个人看板和10个团队看板。
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理。
* [Wikifactory](https://wikifactory.com/) — 产品设计平台（含项目管理/版本控制/问题追踪）。免费版支持无限项目&协作者+3GB存储。
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题追踪。免费版最多3用户且项目不限。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版（InCloud）支持开源项目及私有项目（3用户免费），含时间追踪和敏捷看板。
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌的项目管理方案。公开仓库/开源组织/非营利机构免费。
* [zenkit.com](https://zenkit.com) — 项目管理协作平台。免费版最多5成员+5GB附件。
* [Zube](https://zube.io) — 项目管理工具（免费版支持4项目+4用户），集成GitHub功能。

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 专为Borg Backup设计的简易安全异地备份托管服务。提供10GB免费备份空间和两个存储库。
* [cloudinary.com](https://cloudinary.com/) — 为网站和应用提供图片上传、强大编辑、存储和交付服务，支持Ruby/Python/Java/PHP/Objective-C等多种语言库。免费版每月25点信用额度（1信用点=1000次图片转换/1GB存储/1GB CDN用量）。
* [degoo.com](https://degoo.com/) – 基于AI的云存储服务，免费提供20GB空间和三台设备支持，推荐好友可获5GB奖励（账户90天不活跃将失效）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器无法访问数据。免费支持1GB以下文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放及网页元素提取服务。免费版每月5,000个URL处理额度（15请求/秒）。
* [Ente](https://ente.io/) - 端到端加密的照片、视频和2FA秘密云存储，支持自托管。永久免费版提供10GB空间（免费用户数据仅保留单副本）。
* [file.io](https://www.file.io) - 2GB文件存储空间，文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具集，支持文档/图片/音频/视频等格式转换与编辑。
* [getpantry.cloud](https://getpantry.cloud/) — 简易JSON数据存储API，非常适合个人项目、黑客松和移动应用。
* [GoFile.io](https://gofile.io/) - 免费文件共享存储平台，支持网页界面和API操作。无文件大小、带宽和下载次数限制（文件十天无下载将自动删除）。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管、处理和CDN流媒体服务。免费版每月提供250GB视频流量和30GB图片流量。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务，10GB免费空间。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限量图片图表生成服务。
* [ImageEngine](https://imageengine.io/) – 全球图片CDN服务，60秒内完成配置。支持AVIF/JPEGXL格式，提供WordPress/Magento/React/Vue等插件。开发者可申请[免费账户](https://imageengine.io/developer-program/)。
* [imagekit.io](https://imagekit.io) – 图片CDN服务，支持自动优化、实时转换和快速集成。免费版每月20GB带宽。
* [ImgBB](https://imgbb.com/) — 无限量图片托管服务，支持拖拽上传（单图32MB限制）。提供直链、BBCode和HTML缩略图，登录后可查看上传历史。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的机器人，在不损失质量的前提下减小文件体积。开源项目免费使用。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限制社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费版包含1000张原始图片、无限转换和100GB带宽。
* [internxt.com](https://internxt.com) – 基于零知识证明的绝对隐私文件存储服务，注册即享永久10GB免费空间。
* [kraken.io](https://kraken.io/) — 网站性能优化图片处理服务，免费版支持1MB以下文件。
* [LibreQR](https://libreqr.com) — 注重隐私的无追踪免费二维码生成器。
* [nitropack.io](https://nitropack.io/) - 自动前端加速服务（缓存/图片代码优化/CDN）。免费版每月5000页面浏览量。
* [npoint.io](https://www.npoint.io/) — 支持协同模式编辑的JSON存储服务。
* [otixo.com](https://www.otixo.com/) — 云端文件加密共享管理工具。基础版支持无限文件传输（单文件250MB限制）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。可通过申请获取限量免费计划和开源计划。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务，最高10GB免费空间。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具，提供友好界面和API。免费版含1GB存储空间和API访问权限。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享平台。免费版支持无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 最多5人团队可免费使用基础版功能（不含用户管理）。
* [Proton Drive](https://proton.me/drive) - 超安全云存储服务，免费版提供5GB空间。
* [QRME.SH](https://qrme.sh) - 快速批量二维码生成器（无需登录/无水印/无广告），支持单次导出100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图片图表和二维码。
* [redbooth.com](https://redbooth.com) — P2P文件同步工具，免费支持2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已处理超70亿张图片，兼容WordPress/Drupal/Magento等主流CMS。
* [sirv.com](https://sirv.com/) — 智能图片CDN服务，支持实时优化和尺寸调整。免费版含500MB存储和2GB带宽。
* [SlingSite](https://slingsite.github.io) - 免费批量生成图片视频的优化版本：图片输出AVIF/WEBP/JPG三种格式（桌面/平板/移动三分辨率），视频输出WebM(VP9)/MP4(HEVC)/MP4(AVC)及封面图。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务，5GB免费空间。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 文件上传及音视频/图片/文档转码服务。开源项目/慈善机构/学生（通过GitHub学生包）可免费使用，商业应用测试期享2GB免费额度。
* [twicpics.com](https://www.twicpics.com) - 响应式图片服务，提供图片CDN、媒体处理API和前端自动化优化库。免费版每月3GB流量。

  * [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) - 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo...

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Ant Design 落地页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可快速下载使用，也可通过编辑器快速搭建专属页面
* [Backlight](https://backlight.dev/) — 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（不限查看人数）
* [BoxySVG](https://boxy-svg.com/app) — 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Branition调色板](https://branition.com/colors) - 专为品牌设计精心挑选的配色方案
* [日历图标生成器](https://calendariconsgenerator.app/) -- 一键生成全年独特图标，完全免费
* [Canva](https://canva.com) - 在线视觉设计工具
* [轮播英雄](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum图标库](https://circumicons.com) - 风格统一的开源SVG图标，支持React/Vue/Svelte
* [clevebrush.com](https://www.cleverbrush.com/) — 免费图形设计/照片拼贴工具，也提供付费组件集成服务
* [云端格式转换](https://cloudconvert.com/) — 支持208种格式互转（含视频和GIF）
* [CMYK转潘通](https://www.cmyktopantone.com/) - 快速免费将CMYK值转换为最接近的潘通色号
* [CodedThemes](https://codedthemes.com/) - 精心打造的管理后台模板和UI套件，加速现代Web开发
* [UI代码灵感库](https://codemyui.com) - 精选网页设计与UI灵感（含代码片段）
* [ColorKit调色板](https://colorkit.co/) - 在线创建配色方案或获取灵感
* [渐变色生成器](https://colorr.me/) - 色彩与渐变生成工具
* [coolors配色](https://coolors.co/) - 免费配色方案生成器
* [CSS渐变生成](https://www.css-gradient.com/) - 快速生成跨浏览器CSS渐变代码（RGB/HEX格式）
* [毛玻璃CSS生成](https://css.glass/) -- 用CSS实现玻璃拟态效果的在线工具
* [DaisyUI组件库](https://daisyui.com/) -- 基于Tailwind CSS的简洁组件库（如按钮等），减少类名书写
* [免费矢量图库](https://easyvectors.com/) — 可免费下载优质矢量素材
* [Excalidraw手绘工具](https://excalidraw.com/) -- 支持本地保存和导出的在线绘图工具
* [Figma协作设计](https://www.figma.com) — 团队在线协作设计工具，免费版支持无限文件查看（最多2名编辑和3个项目）
* [Float UI](https://floatui.com/) - 快速创建现代响应式网站的工具（适合非设计师）
* [Flows用户引导平台](https://flows.sh/) -- 完全可定制的产品引导系统，免费支持250名月活跃用户
* [Flyon UI组件库](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [Framer交互动效](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者+2名编辑+3个项目
* [商用免费图库](https://freeforcommercialuse.net/) — 含模特/物权授权的免版税图库
* [Glyphs图标库](https://glyphs.fyi/) -- 强大可编辑的开源图标系统
* [Gradientos渐变工具](https://www.gradientos.app) - 快速挑选渐变方案
* [Grapedrop建站工具](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，前5页免费（支持自定义域名）
* [Haikei形状生成](https://www.haikei.app/) - 生成独特SVG形状/背景/图案的在线工具
* [Tailwind渐变色库](https://hypercolor.dev/) -- 精选Tailwind CSS渐变色合集+生成器
* [HyperUI组件库](https://www.hyperui.dev/) -- 免费开源Tailwind CSS组件
* [网站图标提取](https://icon.horse) – 通过API获取任意网站的高清favicon
* [百万图标库](https://icon-sets.iconify.design/) -- 100+图标集统一搜索平台，支持导出SVG或框架组件
* [Iconoir开源图标](https://iconoir.com) – 支持React/Flutter/Vue等框架的数千个开源图标
* [Icons8素材库](https://icons8.com) — 图标/插画/照片/音乐等资源，免费版有分辨率限制（需署名）
* [图片背景模糊工具](https://imagebgblurer.com/) -- 为Notion/Trello等工具生成图片模糊背景框
* [Landen建站平台](https://www.landen.co) — 无代码创建精美网站（免费版支持1个全功能网站）
* [免费图床](https://lensdump.com/) - 云端图片托管服务
* [Logo查询API](https://www.logo.dev) - 包含4400万+品牌的Logo查询API（前1万次调用免费）
* [Lorem Picsum占位图](https://picsum.photos/) - 通过URL参数获取随机图片（指定宽高即可）
* [Lottie动画平台](https://lottiefiles.com/) - 全球最大轻量动画资源平台（支持Android/iOS/Web）
* [Lucide图标库](https://lucide.dev) - 免费可定制的SVG图标工具包
* [Lunacy设计工具](https://icons8.com/lunacy) -- 内置素材的离线设计工具（免费版含10个云文档+基础功能）
* [MagicPattern生成器](https://www.magicpattern.design/tools) — CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [Marvel原型设计](https://marvelapp.com/) — 设计协作平台（免费版限1用户1项目）
* [Mastershot视频编辑器](https://mastershot.app) - 无水印的浏览器视频编辑工具（最高支持1080P导出）
* [MD Bootstrap套件](https://mdbootstrap.com/) - 免费商用Bootstrap/Angular/React/Vue UI套件（700+组件）
* [Mindmup思维导图](https://www.mindmup.com/) — 云端无限量免费思维导图（全平台实时同步）
* [Mockplus协作工具](https://www.mockplus.com/idoc) - 设计协作与交付平台（免费版支持3用户5项目）

  * [Modeldraw.com](https://modeldraw.com) — 完整的图表平台，支持UML、系统架构图、流程图、思维导图和敏捷工作流。支持无限团队成员实时协作，无需信用卡。
* [Mossaik](https://mossaik.app) - 免费SVG图像生成器，提供波浪、博客和图案等多种工具。
* [movingpencils.com](https://movingpencils.com) — 基于浏览器的快速矢量编辑器，完全免费。
* [Nappy](https://nappy.co/) -- 免费的黑人和棕色人种精美照片，可用于商业和个人用途。
* [NextUI](https://nextui.org/) -- 免费、美观、快速的现代React & Next.js UI库。
* [NSPolygon](https://nspolygon.com) — 免费库存照片、图标和插图。
* [Octopus.do](https://octopus.do) — 可视化网站地图构建器。实时构建网站结构并快速分享以与团队或客户协作。
* [OKLCH](https://oklch.net/) -- 免费的OKLCH颜色选择器和转换器，适合网页设计师和开发者。
* [okso.app](https://okso.app) - 简约的在线绘图应用。可快速创建草图和视觉笔记。支持导出为PNG、JPG、SVG和WEBP格式。也可作为PWA安装。完全免费使用（无需注册）。
* [Pencil](https://github.com/evolus/pencil) - 使用Electron的开源设计工具。
* [Penpot](https://penpot.app) - 基于网页的开源设计和原型工具。支持SVG。完全免费。
* [pexels.com](https://www.pexels.com/) - 免费商用库存照片。提供免费API，可按关键词搜索照片。
* [photopea.com](https://www.photopea.com) — 免费高级在线设计编辑器，界面类似Adobe Photoshop，支持PSD、XCF和Sketch格式（Adobe Photoshop、Gimp和Sketch App）。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑独特且引人注目的图形和图像。
* [pixlr.com](https://pixlr.com/) — 免费在线浏览器编辑器，功能媲美商业软件。
* [Plasmic](https://www.plasmic.app/) - 快速、易用且强大的网页设计工具和页面构建器，可集成到代码库中。构建响应式页面或复杂组件；可选代码扩展；发布到生产网站和应用。
* [PNG to WebP Converter](https://pngtowebpconverter.com/) - 在浏览器中直接将PNG图像转换为WebP图像。无需上传，完全客户端处理，确保最高隐私和安全性。
* [Pravatar](https://pravatar.cc/) - 生成随机/占位假头像，URL可直接热链到网页/应用中。
* [Proto.io](https://www.proto.io) - 无需编码即可创建完全交互式UI原型。免费试用结束后仍可使用免费版，包括1个用户、1个项目、5个原型、100MB在线存储和proto.io应用预览。
* [Quant Ux](https://quant-ux.com/) - Quant Ux是一款原型和设计工具，完全免费且开源。
* [resizeappicon.com](https://resizeappicon.com/) — 简单的服务，用于调整和管理应用图标。
* [Responsively App](https://responsively.app) - 免费开发工具，可更快更精准地进行响应式网页应用开发。
* [Rive](https://rive.app) — 创建并发布精美动画到任何平台。个人用户永久免费。服务包含编辑器，并在其服务器上托管所有图形。还提供多平台运行时以运行使用Rive制作的图形。
* [SceneLab](https://scenelab.io) - 在线模型图形编辑器，提供不断扩展的免费设计模板库。
* [Scrollbar.app](https://scrollbar.app) -- 简单的免费网页应用，用于设计网页自定义滚动条。
* [Shadcn Studio](https://shadcnstudio.com/theme-editor) — 预览不同组件和布局中的主题变化。
* [ShadcnUI](https://ui.shadcn.com/) -- 精美设计的组件，可直接复制粘贴到应用中。可访问、可定制、开源。
* [smartmockups.com](https://smartmockups.com/) — 创建产品模型，200个免费模型。
* [storyset.com](https://storyset.com/) — 使用此工具为项目创建惊人的免费定制插图。
* [Superdesigner](https://superdesigner.co) - 免费设计工具集合，只需点击几下即可创建独特的背景、图案、形状、图像等。
* [SVG Converter](https://svgconverter.online/) -- 免费的JPG/PNG转SVG转换器，支持调色板定制。
* [SVGmix.com](https://www.svgmix.com/) - 包含30万+免费SVG图标、合集和品牌标志的庞大库。内置浏览器中的简单矢量编辑程序，可快速编辑文件。
* [svgrepo.com](https://www.svgrepo.com/) - 探索、搜索并找到最适合项目的图标或矢量，使用多种矢量库。下载免费商用SVG矢量。
* [tabler-icons.io](https://tabler-icons.io/) — 1500+免费可复制粘贴的SVG可编辑图标。
* [Tailark](https://tailark.com/) - 专为营销网站设计的现代响应式预制UI块集合。
* [Tailcolors](https://tailcolors.com/) -- 精美的Tailwind CSS v4调色板。即时预览并复制完美的Tailwind CSS颜色类。
* [Tailkits](https://tailkits.com/) -- 精选的Tailwind模板、组件和工具集合，外加代码、网格、阴影等实用生成器。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作式前端平台，可即时创建和发布无头静态网站。三个免费项目，无限协作，免费代码导出。
* [TW Elements](https://tw-elements.com/) - 使用Tailwind CSS重新创建的免费Bootstrap组件，设计更优，功能更多。
* [tweakcn](https://tweakcn.com/) — 为shadcn/ui设计的精美主题。实时自定义颜色、排版等。
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成带首字母的头像。URL可直接热链到网页/应用中。支持通过URL配置参数。
* [unDraw](https://undraw.co/) - 不断更新的精美SVG图像集合，可完全免费使用且无需署名。
* [Unicorn Platform](https://unicornplatform.com/) - 轻松构建带托管的落地页。一个网站免费。
* [unsplash.com](https://unsplash.com/) - 免费商用和非商用库存照片（随心所欲许可证）。
* [Updrafts.app](https://updrafts.app) - 基于tailwindcss的WYSIWYG网站构建器。非商业用途免费。
* [vector.express](https://vector.express) — 快速轻松转换AI、CDR、DWG、DXF、EPS、HPGL、PDF、PLT、PS和SVG矢量文件。
* [vectr.com](https://vectr.com/) — 网页+桌面免费设计应用。
* [Vertopal](https://www.vertopal.com) - Vertopal是免费在线文件转换平台，支持多种格式，包括开发者转换器如JPG转SVG、GIF转APNG、PNG转WEBP、JSON转XML等。
* [Volume](https://volumecolor.io) — OKLCH颜色选择器和调色板生成器。
* [walkme.com](https://www.walkme.com/) — 企业级引导和互动平台，免费版提供三个最多5步的引导流程。
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白免费SVG切割文件。
* [Webflow](https://webflow.com) - 带动画和网站托管的WYSIWYG网站构建器。两个项目免费。
* [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费版提供无限网站托管在其域名下。五个自定义域名网站。每月一万次页面浏览。2GB资源存储。
* [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。免费创建最多4个面板。

  * [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台。展示设计稿、资源文件和样式指南。单个项目免费使用。

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）
* [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台，可按UI/UX项目分类筛选
* [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常来自非真实应用场景
* [Landings](https://landings.dev/) - [网页截图] 根据偏好寻找最佳着陆页设计灵感
* [Lapa Ninja](https://www.lapa.ninja/) - [着陆页/UI套件/网页截图] 展示6025个最佳着陆页案例，提供设计师免费资源和网络UI套件
* [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 持续更新的着陆页截图集，包含桌面端、平板和移动端视图
* [Mobbin](https://mobbin.design/) - [移动端截图] 通过5万+可完全检索的移动应用截图库节省UI/UX研究时间
* [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 为设计师/开发者/产品人员提供精选UIUX模式库（iOS和Android）
* [Page Flows](https://pageflows.com/) - [移动/网页流程视频] 多款应用的完整操作流程视频记录，含截图，支持高效检索
* [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的可标记和检索的设计参考集合
* [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并掌握最新网页&移动应用UI设计趋势，支持按模式和应用筛选
* [scrnshts](https://scrnshts.club/) - [移动端截图] 精选应用商店设计截图合集
* [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动和网页UI设计

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [Clockwork Micro](https://clockworkmicro.com/) — 精密如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [Foursquare](https://developer.foursquare.com/) - 通过Places API和Pilgrim SDK实现位置发现、场所搜索和情境感知内容
* [geoapify.com](https://www.geoapify.com/) - 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日三千次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日两千五百次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理定位查询API
* [Geokeo api](https://geokeo.com) - 支持语言校正等功能的地理编码API。全球覆盖范围。每日2500次免费查询
* [graphhopper.com](https://www.graphhopper.com/) 为路径规划、路线优化、距离矩阵、地理编码和地图匹配提供免费开发者套餐
* [here](https://developer.here.com/) — 地图和位置感知应用的API与SDK。每月25万次免费事务处理
* [IP Geolocation](https://ipgeolocation.io/) — 提供包含每月3万次请求的免费开发者计划
* [ipstack](https://ipstack.com/) - 通过IP地址定位和识别网站访问者
* [locationiq.com](https://locationiq.com/) — 地理编码、地图和路径规划API。每日五千次免费请求
* [mapbox.com](https://www.mapbox.com/) — 地图数据展示相关的地图服务、地理空间服务和SDK
* [maps.stamen.com](http://maps.stamen.com/) - 免费地图瓦片及托管服务
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图、地图服务及可视化SDK。每周更新的免费矢量瓦片和四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，提供全球地址搜索和反向地理编码功能
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日两千五百次免费查询
* [osmnames](https://osmnames.org/) — 根据相关维基百科页面热度排序的地理编码与搜索结果
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月2.5万次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途每日两千五百次免费地图浏览和API请求

**[⬆️ 返回顶部](#目录)**

## 软件包构建系统

  * [build.opensuse.org](https://build.opensuse.org/) — 支持多发行版的软件包构建服务（SUSE、EL、Fedora、Debian等）
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的Fedora和EL系统RPM构建服务
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu与Debian系统的构建服务

**[⬆️ 返回顶部](#目录)**

## IDE与代码编辑

  * [Android Studio](https://developer.android.com/studio) — 为各类Android设备提供最快的应用构建工具。开源IDE免费向所有人开放，是Android应用开发的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 在Android设备上开发基于Gradle的真实Android应用的开源IDE。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作设计API，提供即时API模拟和生成文档（免费版支持无限API蓝图和用户，一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费模式提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级到高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。这是一项免费的公共服务。
* [BlueJ](https://bluej.org) — 专为初学者设计的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简单GUI帮助初学者。
* [Bootify.io](https://bootify.io/) - 带有自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - Brackets是专为网页开发设计的开源文本编辑器。它轻量、易用且高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持标签和100多种编程语言。
* [cocalc.com](https://cocalc.com/) — （原SageMathCloud，cloud.sagemath.com）— 云端协作计算。通过浏览器访问完整Ubuntu系统，内置协作工具和大量预装数学、科学、数据科学免费软件：Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等。
* [code.cs50.io](https://code.cs50.io/) - CS50的Visual Studio Code是一个基于GitHub Codespaces的网页应用，专为学生和教师设计。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
* [codepen.io](https://codepen.io/) — CodePen是前端开发的游乐场。
* [codesandbox.io](https://codesandbox.io/) — 在线React、Vue、Angular、Preact等框架的游乐场。
* [codiga.io](https://codiga.io/) — 编码助手，可直接在IDE中搜索、定义和复用代码片段。个人和小型组织免费。
* [Components.studio](https://webcomponents.dev/) - 隔离式代码组件开发，可视化故事，测试并发布到npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，面向开发团队。开源且社区驱动。Red Hat托管的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)访问。
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI配对编程工具。原生支持CLI，无缝集成任何IDE。免费层提供基础AI模型访问和本地处理。
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏。免费层每天提供5个VM。
* [JDoodle](https://www.jdoodle.com) — 支持60多种编程语言的在线编译器和编辑器，免费计划每天提供200次REST API代码编译积分。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE和部署工具（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源和用户组可免费使用。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 提供返回虚假JSON数据的REST API端点。源代码也可用于本地运行服务器。
* [Lazarus](https://www.lazarus-ide.org/) — Lazarus是兼容Delphi的跨平台RAD IDE。
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 用于生成虚假JSON数据的微型API模拟服务。
* [mockable.io](https://www.mockable.io/) — Mockable是简单的可配置服务，用于模拟RESTful API或SOAP Web服务。可快速定义REST API或SOAP端点并返回JSON或XML数据。
* [mockaroo](https://mockaroo.com/) — Mockaroo可生成CSV、JSON、SQL和Excel格式的测试数据，也可模拟后端API。
* [Mocklets](https://mocklets.com) - 基于HTTP的模拟API工具，支持更快并行开发和全面测试，提供终身免费层。
* [OneCompiler](https://onecompiler.com/) - 支持70多种语言的免费在线编译器，包括Java、Python、C++、JavaScript。
* [Paiza](https://paiza.cloud/en/) — 无需设置即可在浏览器中开发Web应用。免费计划提供24小时生命周期服务器，每天4小时运行时间，2核CPU、2GB RAM和1GB存储。
* [PHPSandbox](https://phpsandbox.io/) — PHP的在线开发环境。
* [Replit](https://replit.com/) — 支持多种编程语言的云端编码环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程游乐场。支持多种语言。运行代码无需注册，保存代码需注册。还提供面向初、中级开发者的免费课程。
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码IDE，用于创建、编辑和部署全栈应用。支持任何流行的基于NodeJS的前后端框架。创建新项目的短链接：[https://node.new](https://node.new)。
* [Sublime Text](https://www.sublimetext.com/) - Sublime Text是流行、多功能且高度可定制的文本编辑器，适用于编码和文本编辑任务。
* [Visual Studio Code](https://code.visualstudio.com/) - 为构建和调试现代Web及云应用优化的代码编辑器。由微软开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能齐全的IDE，数千扩展支持跨平台应用开发（微软扩展支持iOS和Android）、桌面、Web和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
* [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/跟踪、自由许可的微软VSCode二进制分发版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化编码活动，免费版功能有限。
* [Wave Terminal](https://waveterm.dev/) - Wave是开源跨平台终端，支持无缝工作流。内联渲染任何内容，保存会话和历史记录。基于开放Web标准，支持MacOS和Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板，隔离式开发Web组件，支持故事和测试。
* [Zed](https://zed.dev/) - Zed是Atom和Tree-sitter创作者开发的高性能多人协作代码编辑器。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [amplitude.com](https://amplitude.com/) — 每月100万次事件，最多2个应用
* [AppFit](https://appfit.io) - AppFit是一款全面的分析和产品管理工具，旨在实现跨平台的无缝分析和产品更新管理。免费计划包含每月10,000次事件、产品日志和每周洞察。
* [Aptabase](https://aptabase.com) — 面向移动和桌面应用的开源、隐私友好且简单的分析工具。支持Swift、Kotlin、React Native、Flutter、Electron等多种SDK。每月免费提供20,000次事件。
* [Avo](https://avo.app/) — 简化的分析发布工作流。单一真实来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据可观察性，确保在发布前发现所有数据问题。免费提供2名工作区成员和1小时数据可观察性回溯。
* [Beampipe.io](https://beampipe.io) - Beampipe是一款简单、注重隐私的网站分析工具。免费支持最多5个域名和每月10,000次页面浏览。
* [Census](https://www.getcensus.com/) — 反向ETL和运营分析平台。将数据仓库中的10个字段同步到60多个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) — 网站分析平台。免费计划支持一个网站和3,000次浏览分析。
* [counter.dev](https://counter.dev) — 简单且隐私友好的网站分析工具。免费或按捐赠付费。
* [DocBeacon](https://docbeacon.io) - 安全的文档共享工具，包含文档跟踪和参与度分析。免费计划支持最多20个PDF文档（最大10 MB）、10个联系人和每文档2次分享，提供基本的浏览、下载、时间和参与度分析。
* [Dwh.dev](https://dwh.dev) - 数据云可观察性解决方案（Snowflake）。个人使用免费。
* [Expensify](https://www.expensify.com/) — 费用报告，免费个人报告审批工作流。
* [getinsights.io](https://getinsights.io) - 注重隐私、无Cookie的分析工具，每月免费提供3,000次事件。
* [GoatCounter](https://www.goatcounter.com/) — GoatCounter是一款开源网站分析平台，提供托管服务（非商业用途免费）或自托管应用。旨在提供易于使用且有意义的隐私友好型网站分析，作为Google Analytics或Matomo的替代品。免费层适用于非商业用途，包含无限站点、六个月数据保留和每月100,000次页面浏览。
* [Google Analytics](https://analytics.google.com/) — Google Analytics。
* [heap.io](https://heap.io) — 自动捕获iOS或Web应用中的每个用户操作。每月免费提供10,000次会话。
* [Hightouch](https://hightouch.com/) - Hightouch是一款反向ETL平台，帮助您将客户数据从数据仓库同步到CRM、营销和支持工具。免费层提供一个目标数据同步。
* [Hotjar](https://hotjar.com) — 网站分析和报告。免费计划允许每天2,000次页面浏览。每天100次快照（最大容量：300）。可存储三张热图365天。无限团队成员。还包括应用和独立调查、带截图的反馈小部件。免费层允许创建3个调查和3个反馈小部件，每月收集20条回复。
* [LogSpot](https://logspot.io) - 完整的统一网站和产品分析平台，包括可嵌入的分析小部件和自动化机器人（Slack、Telegram和Webhooks）。免费计划包含每月10,000次事件。
* [MetricsWave](https://metricswave.com) — 面向开发者的隐私友好型Google Analytics替代品。免费计划允许每月100万次页面浏览，无需信用卡。
* [Mixpanel](https://mixpanel.com/) — 每月跟踪100,000名用户，无限数据历史和席位，美国或欧盟数据存储。
* [Moesif](https://www.moesif.com) — REST和GraphQL的API分析。（每月免费500,000次API调用）。
* [PostHog](https://posthog.com) - 完整的产品分析套件，每月免费跟踪100万次事件。还提供每月250次回复的无限应用内调查。
* [Repohistory](https://repohistory.com) - 美观的仪表板，用于跟踪GitHub仓库流量历史超过14天。免费计划允许用户监控单个仓库的流量。
* [Row Zero](https://rowzero.io) - 极速连接的电子表格。直接连接到数据库、S3和API。即时导入、分析、图表和共享数百万行数据。三个永久免费的工作簿。
* [Rybbit](https://rybbit.io) - Google Analytics的开源和无Cookie替代品，直观性提升10倍。免费计划每月3,000次事件。
* [Seline](https://seline.so) - Seline是一款简单且隐私友好的网站和产品分析工具。无Cookie、轻量级、独立。免费计划包含每月3,000次事件，并提供所有功能访问，如仪表板、用户旅程、漏斗等。
* [StatCounter](https://statcounter.com/) — 网站访问者分析。免费计划分析最近的500名访问者。
* [Statsig](https://statsig.com) - 涵盖分析、功能标记和A/B测试的一体化平台。每月免费提供100万次计量事件。
* [TraceLog](https://tracelog.io/) - 电子商务的AI分析。用自然语言提问您的分析数据，获取可操作的建议，并通过AI驱动的洞察增加收入。每月免费提供10,000次事件。
* [Trackingplan](https://www.trackingplan.com/) - 自动检测数字分析、营销数据和像素问题，维护最新的跟踪计划，促进无缝协作。将其部署到生产环境或为回归测试添加分析覆盖，无需编写代码。
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级、注重隐私的Google Analytics替代品。无限页面浏览、无限访客、无限页面热图和目标跟踪。免费支持最多3个域名和每个域名600次会话回放。
* [Umami](https://umami.is/) - 简单、快速、注重隐私的开源Google Analytics替代品。
* [usabilityhub.com](https://usabilityhub.com/) — 在真实用户上测试设计和原型，并跟踪访问者。免费供一名用户使用，无限测试。
* [Userbird](https://userbird.com) - 带有热图、会话记录和收入跟踪的Google Analytics替代品。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月并提供三个用户席位。更多信息[点击此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* [howuku.com](https://howuku.com) — 追踪用户交互、参与度和事件。每月免费支持5,000次访问。
* [inspectlet.com](https://www.inspectlet.com/) — 单个网站每月2,500次会话免费。
* [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天数据保留，包含错误追踪和实时模式。
* [Microsoft Clarity](https://clarity.microsoft.com/) - 完全免费的会话录制，无流量限制、无项目限制且无采样。
* [mouseflow.com](https://mouseflow.com/) — 单个网站每月500次会话免费。
* [OpenReplay.com](https://www.openreplay.com) - 开源的会话回放工具，提供用于错误复现的开发工具、实时会话支持以及产品分析套件。每月1,000次会话，可访问所有功能并保留7天数据。
* [Reactflow.com](https://www.reactflow.com/) — 每个站点：每日1,000次页面浏览，三个热图，三个小组件，免费错误追踪。
* [smartlook.com](https://www.smartlook.com/) — 适用于网页和移动应用的免费套餐（每月1,500次会话），三个热图，一个漏斗，1个月数据历史。
* [UXtweak.com](https://www.uxtweak.com/) — 记录并观察访客如何使用您的网站或应用。小型项目无限时长免费。

**[⬆️ 返回顶部](#目录)**

## 国际手机号验证API与SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询JSON API。每月100次免费API调用
* [veriphone](https://veriphone.io/) — 提供免费、快速、可靠的全球电话号码验证JSON API服务。每月1000次请求额度

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Adapty.io](https://adapty.io/) – 一站式开源SDK解决方案，为iOS、Android、React Native、Flutter、Unity或Web应用提供移动端订阅集成服务。月收入1万美元以下免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新加密货币与法币汇率。免费版每月10,000次API调用额度。
* [Currencyapi](https://currencyapi.com) — 免费货币转换与汇率数据API。个人用途每月300次请求，每分钟10次请求限制。
* [CurrencyApi](https://currencyapi.net/) — 实时物理货币与加密货币汇率，支持JSON和XML格式。免费版每月1,250次API请求。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供实时和历史货币汇率。免费开发者计划每月1,000次请求。
* [currencylayer](https://currencylayer.com/) — 为企业提供可靠汇率与货币转换服务，免费版每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费版每日更新一次，每月1,500次请求限制。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防范支付欺诈与退单。免费微型计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率数据。免费版需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过用量计费实现API盈利，支持Stripe、Chargebee等支付系统。免费版每月30,000次事件记录。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者地理位置自动调整定价，助力全球业务拓展（购买力平价）。免费计划每月7,500次API请求。
* [Qonversion](http://qonversion.io/) - 全平台订阅管理平台，提供分析、A/B测试、Apple搜索广告、远程配置等增长工具，优化应用内购与变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe及网页端。月跟踪收入1万美元以下免费。
* [RevenueCat](https://www.revenuecat.com/) — 应用内购与订阅托管后端（支持iOS/Android）。月跟踪收入2,500美元以下免费。
* [vatlayer](https://vatlayer.com/) — 即时增值税号验证与欧盟税率API，免费版每月100次API请求。

**[⬆️ 返回顶部](#目录)**

## Docker相关

  * [容器注册表服务](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1GB私有仓库存储空间
* [Docker Hub](https://hub.docker.com) — 1个免费私有仓库和无限量公共仓库，用于构建和存储Docker镜像
* [Docker游乐场](https://labs.play-with-docker.com/) — 一个简单、互动、有趣的学习Docker的实践平台
* [quay.io](https://quay.io/) — 构建和存储容器镜像，提供无限量免费公共仓库
* [ttl.sh](https://ttl.sh/) - 匿名临时Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [AyeDot](https://ayedot.com/) — 以现代多媒体短格式微博客形式免费与世界分享您的想法、知识和故事
* [BearBlog](https://bearblog.dev/) - 极简主义、支持Markdown的博客和网站构建工具
* [Dev.to](https://dev.to/) - 程序员分享想法并互相帮助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的无障碍博客软件
* [Medium](https://medium.com/) — 深入思考对您重要的事物
* [JustBlogged](https://justblogged.com) — 支持自定义域名的免费博客平台，具备全球高速性能

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，帮助您从网站访客中建立活跃社区
* [IntenseDebate](https://intensedebate.com/) - 为WordPress、Tumblr、Blogger等多种网站平台提供的功能丰富的评论系统
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"随付随用"模式，支持"一个管理员在少数域名上完全控制行为与外观"
* [Utterances](https://utteranc.es/) - 基于GitHub issues构建的轻量级评论组件，可将GitHub issues用于博客评论、维基页面等场景

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于Aws Lambda和Chrome的截图API。支持整页截取、捕获时间及视窗尺寸。
* [microlink.io](https://microlink.io/) — 将任何网站转化为数据，包括元标签标准化、精美链接预览、爬取功能或截图服务。每日免费250次请求。
* [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染。免费层每日提供500页服务，自2017年持续免费。
* [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速获取截图，免费且可扩展。
* [screenshotlayer.com](https://screenshotlayer.com/) — 高度可定制的网站快照服务。每月免费100次快照。
* [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次免费快照，支持png/gif/jpg格式，包含整页截取（不限于首页）。
* [thumbnail.ws](https://thumbnail.ws) — 网站缩略图生成API。每月免费1,000次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac开发iOS应用

  * [CodeMagic](https://codemagic.io/) - Codemagic 是一款专为移动应用打造的云端托管CI/CD服务。通过图形化界面工具实现构建、测试和部署。免费套餐每月提供500分钟构建时长，配备2.3GHz处理器和8GB内存的Mac Mini实例。
* [FlutLab](https://flutlab.io/) - FlutLab 是现代化Flutter在线IDE，为跨平台项目提供创建、调试和构建的一站式解决方案。无需Mac设备即可构建iOS及Android应用。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽工具，用于快速构建Flutter移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟

  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [JsLinux](https://bellard.org/jslinux) — 超高速x86虚拟机，可运行Linux和Windows 2000系统
* [v86](https://copy.sh/v86) — 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现隐私设计，使组织符合GDPR等法规。免费版仅适用于小型团队且仅限SaaS版本。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理（DSARs）和数据映射。免费版包含核心同意管理功能，并为经过验证的开源项目提供更高级的免费方案。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计和多语言同意管理解决方案。免费版提供一次性扫描和单个横幅。
* [Iubenda](https://www.iubenda.com/) - 隐私和Cookie政策及同意管理。免费版提供有限的隐私和Cookie政策以及Cookie横幅。
* [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大部分功能但限制访客数量。

**[⬆️ 返回顶部](#目录)**

## 其他杂项

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建美观的社交媒体分享截图
* [Base64 解码/编码工具](https://devpal.co/base64-decode/) — 免费在线数据解码与编码工具
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成精美图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网平台，免费开发者计划含5台设备、云端存储及移动应用
* [Bricks 笔记计算器](https://free.getbricks.app/) - 集成强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 以美观的截图形式创建和分享代码片段，常用于Twitter或博客展示
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ等编辑器的编码时间追踪插件
* [Codepng](https://www.codepng.app) - 为源代码生成精美的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [cron-job.org](https://cron-job.org) - 免费无限制的在线定时任务服务
* [Cronhooks](https://cronhooks.io/) - 定时/循环Webhook调度服务，免费版支持5个临时计划
* [datelist.io](https://datelist.io) - 在线预约系统，免费每月5次预订含1个日历
* [Domain Forward](https://domain-forward.com/) - 简易域名转发工具，免费支持5个域名及20万次月请求
* [Exif Editor](https://exifeditor.io/) — 即时在线查看/编辑/清除图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL即时在线格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的许可证合规与漏洞管理平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加Webhook支持（含队列/重试/日志），免费版每日100次投递
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的主机信息（ASN/ISP/位置等），含多款DNS相关工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack等接收GitHub/GitLab/NPM等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片EXIF数据（含GPS定位）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表板管理PDF模板并通过API生成动态PDF，每月300份免费
* [Pika 代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制的精美代码截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL自动生成多语言类型安全的模型与序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 生成各类随机密钥与密码的移动端友好工具
* [ray.so](https://ray.so/) - 创建精美的代码片段图片
* [readme.com](https://readme.com/) — 开源项目免费使用的优雅文档生成平台
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的跳转管理服务，免费版含10个源和10万次月访问
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [Renamer.ai](https://renamer.ai) — AI驱动的文件重命名工具（支持OCR/元数据提取），免费版每月15个文件
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具（支持GET/POST等方法与Token认证）
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/里程/车门控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉创作工具（从代码片段到技术演示），免费版含3个同时编辑项目
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度查询日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时RSS订阅服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷调查工具（免费版每份问卷限10题100回复）
* [UUID生成器](https://newuuid.com/) - 即时生成UUIDv1/v4/v7/GUID/NanoID等多种ID
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅（前3个订阅免费）
* [videoinu](https://videoinu.com) — 在线屏幕录像与视频编辑工具
* [Volume Shader BM](https://volumeshaderbm.org) — 基于WebGL的免费GPU性能基准测试工具
* [Webacus](https://webacus.dev) — 开发者编码/解码与数据处理工具集
* [XKit](https://xkit.io) — 包含开发者工具/差异对比/计算器/转换器等功能的在线工具集合

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [AnyDesk](https://anydesk.com) — 免费支持3台设备，会话次数和时长无限制
* [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [RemSupp](https://remsupp.com) — 按需技术支持及永久设备访问（每日免费2次会话）
* [RustDesk](https://rustdesk.com/) - 面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## 游戏开发

  * [3Dassets.one](https://3dassets.one/) - 提供8000+免费/付费3D模型和PBR材质贴图资源
* [ArtStation](https://www.artstation.com/) - 2D/3D资源与音频交易市场，含图标/瓦片集/游戏套件，同时可作为作品集展示平台
* [CraftPix](https://craftpix.net) — 涵盖2D/3D/音频/GUI/背景/图标/瓦片集/游戏套件的免费&付费资源库
* [Freesound](https://freesound.org/) - 采用多种CC协议的免费协作音效库
* [Game Icons](https://game-icons.net/) - 基于CC-BY许可的可定制SVG/PNG风格化图标
* [GameDevMarket](https://gamedevmarket.net) — 提供2D/3D/音频/GUI等免费&付费资源
* [Gamefresco.com](https://gamefresco.com/) — 发现、收藏并分享全球游戏美术师的免费资源
* [itch.io](https://itch.io/game-assets) — 精灵图/瓦片集/角色包等免费&付费资源
* [Kenney](https://www.kenney.nl/assets/) - 采用CC0 1.0通用许可的2D/3D/音频/UI游戏素材
* [LoSpec](https://lospec.com/) — 像素艺术创作工具站，提供海量教程/调色板资源
* [OpenGameArt](https://opengameart.org) — 开源游戏资源库，含音乐/音效/精灵图/GIF等
* [Poliigon](https://www.poliigon.com/) - 支持多分辨率的免费&付费纹理/模型/HDRI/笔刷，提供Blender等软件的免费导出插件
* [Poly Pizza](https://poly.pizza/) - 免费低多边形3D资源库

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [360Converter](https://www.360converter.com/) - 免费的视频转文字、音频转文字、语音转文字、实时音频转文字、YouTube视频转文字及添加视频字幕工具。可能对短视频转换或简短YouTube教程有所帮助:)
* [AdminMart](https://adminmart.com/) — 基于Angular、Bootstrap、React、VueJs、NextJS和NuxtJS开发的高质量免费与付费管理后台和网站模板！
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+种可直接用于项目的按钮样式。
* [ElevateAI](https://www.elevateai.com) - 每月免费获取200小时音频转录服务。
* [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织[Framasoft](https://framasoft.org/en/)提供的自由开源软件及SaaS清单。
* [免费代码工具](https://freecodetools.org/) — 100%免费的实用代码工具集。包含Markdown编辑器、代码压缩/美化、二维码生成器、Open Graph生成器、Twitter卡片生成器等。
* [get.localhost.direct](https://get.localhost.direct) — 为本地开发提供更优的`*.localhost.direct`通配符CA签名SSL证书，支持子域名。
* [GitHub教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）。
* [Glob测试器](https://globster.xyz/) — 可视化设计并测试glob模式的网站，附带学习资源。
* [IT工具集](https://it-tools.tech/) - 为开发者和IT从业者提供的实用工具。
* [JSON查看工具](https://jsonviewertool.com/) – 直接在浏览器中查看、格式化、验证、压缩和转换JSON数据（无需API密钥）。
* [Killer Coda](https://killercoda.com/)  - 浏览器内的Linux、Kubernetes、容器、编程、DevOps和网络交互式学习平台。
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+种开发工具，包括格式化器、压缩器和转换器。
* [Markdown工具](https://markdowntools.com) - HTML、CSV、PDF、JSON和Excel文件与Markdown互转工具。
* [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具等资源来构建Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）续期。
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，用于优化慢查询。
* [PageTools](https://pagetools.co/) - 提供永久免费的AI工具套件，一键生成网站政策、社交媒体简介、帖子和网页。
* [Pyrexp](https://pythonium.net/regex) — 基于网页的正则表达式测试与可视化调试工具。
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属的RHEL、OpenShift、CodeReady等红帽产品免费访问权限（仅限个人计划），另提供免费电子书参考。
* [regex101](https://regex101.com/) — 免费的正则表达式测试调试平台，提供编辑器、测试器及学习资源。
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信。
* [SimpleBackups.com](https://simplebackups.com/) — 面向服务器和数据库（MySQL/PostgreSQL/MongoDB）的备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务。
* [SimpleRestore](https://simplerestore.io) - 无代码MySQL备份恢复工具，支持将备份还原至任意远程数据库。
* [SnapShooter](https://snapshooter.com/) — 支持DigitalOcean/AWS/LightSail/Hetzner/Exoscale的备份方案，可直连数据库/文件系统/应用备份至S3存储，免费版每日备份1个资源。
* [表格格式转换器](https://www.tableformatconverter.com) - 免费工具，支持CSV/HTML/JSON/Markdown等表格数据互转。
* [主题精选](https://themeselection.com/) — 精选高质量、现代化、专业易用的免费管理后台模板。
* [ToolsHref](https://toolshref.com) - 免费开发者工具套件，含Java代码生成（JSON转POJO/cURL转Java）、静态分析及DevOps配置构建（Docker/K8s/Nginx）。
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的全离线工具集，包含水印生成、屏幕录制、编解码、加密解密及代码格式化等，完全免费且不上传云端处理。
* [Wikimint开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发工具，包括CSS压缩/解压、图片优化/缩放、大小写转换、CSS验证器、JavaScript编译器、HTML编辑器等。
* [WrapPixel](https://www.wrappixel.com/) — 下载基于Angular/React/VueJs/NextJS/NuxtJS的高质量免费与付费管理模板！加速应用开发的HTML主题和UI套件！

**[⬆️ 返回顶部](#目录)**