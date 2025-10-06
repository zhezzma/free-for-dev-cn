# free-for.dev

开发者与开源贡献者如今拥有众多提供免费层级的服务，但要全面了解这些选项需要花费时间才能做出明智选择。

这里整理了一系列提供开发者免费层级的软件（SaaS、PaaS、IaaS等）及其他服务。

本清单特别聚焦于基础设施开发者（系统管理员、DevOps从业者等）可能觉得实用的资源。我们虽喜爱所有免费服务，但仍希望保持主题相关性。虽然界限有时模糊，但这里会基于主观判断进行筛选；若未采纳您的贡献建议，还请见谅。

这份清单汇集了1600多位人士提交的Pull Requests、评审意见、创意贡献及实际工作成果。您也可以通过提交[Pull Requests](https://github.com/ripienaar/free-for-dev)来协助添加新服务，或移除已变更或停服的项目。

[![追踪Awesome清单](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：本清单仅包含服务化(As-a-Service)产品，不含自托管软件。入选服务必须提供永久免费层级（而非限时试用），若采用时间计量则免费期需至少持续一年。同时我们会从安全角度评估免费层级——支持SSO的服务可以接受，但将TLS功能限制在付费层级的服务不予收录。

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
    * App Engine - 每天28小时前端实例，9小时后端实例
    * Cloud Firestore - 1GB存储，每天5万次读取，2万次写入，2万次删除
    * Compute Engine - 1个非抢占式e2-micro实例，30GB HDD，5GB快照存储（限特定区域），每月1GB北美至全球（除中国和澳大利亚）的出站流量
    * Cloud Storage - 5GB存储，1GB出站流量
    * Cloud Shell - 基于Web的Linux shell/主IDE，5GB持久化存储，每周60小时使用限制
    * Cloud Pub/Sub - 每月10GB消息量
    * Cloud Functions - 每月200万次调用（包含后台和HTTP调用）
    * Cloud Run - 每月200万次请求，36万GB秒内存，18万vCPU秒计算时间，每月1GB北美出站流量
    * Google Kubernetes Engine - 1个区域集群免管理费，节点按标准Compute Engine计费
    * BigQuery - 每月1TB查询量，10GB存储
    * Cloud Build - 每天120构建分钟
    * Cloud Source Repositories - 最多5用户，50GB存储，50GB出站流量
    * [Google Colab](https://colab.research.google.com/) - 免费Jupyter Notebook开发环境
    * [Firebase Studio](https://firebase.studio) Google Firebase Studio（原Project IDX），运行在Google Cloud的在线VSCode
    * 完整清单 - https://cloud.google.com/free

  * [Amazon Web Services](https://aws.amazon.com)
    * [CloudFront](https://aws.amazon.com/cloudfront/) - 每月1TB出站流量和200万次函数调用
    * [CloudWatch](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和10个告警
    * [CodeBuild](https://aws.amazon.com/codebuild/) - 每月100分钟构建时间
    * [CodeCommit](https://aws.amazon.com/codecommit/) - 5个活跃用户，50GB存储，每月1万次请求
    * [CodePipeline](https://aws.amazon.com/codepipeline/) - 每月1个活跃流水线
    * [DynamoDB](https://aws.amazon.com/dynamodb/) - 25GB NoSQL数据库
    * [EC2](https://aws.amazon.com/ec2/) - 每月750小时t2.micro或t3.micro实例（12个月），每月100GB出站流量
    * [EBS](https://aws.amazon.com/ebs/) - 每月30GB通用型(SSD)或磁存储（12个月）
    * [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/) - 每月750小时（12个月）
    * [RDS](https://aws.amazon.com/rds/) - 每月750小时db.t2.micro/db.t3.micro/db.t4g.micro实例，20GB通用型(SSD)存储，20GB备份（12个月）
    * [S3](https://aws.amazon.com/s3/) - 5GB标准对象存储，2万次Get请求和2千次Put请求（12个月）
    * [Glacier](https://aws.amazon.com/glacier/) - 10GB长期对象存储
    * [Lambda](https://aws.amazon.com/lambda/) - 每月100万次请求
    * [SNS](https://aws.amazon.com/sns/) - 每月100万次发布
    * [SES](https://aws.amazon.com/ses/) - 每月3,000封邮件（12个月）
    * [SQS](https://aws.amazon.com/sqs/) - 100万次消息队列请求
    * 完整清单 - https://aws.amazon.com/free/

  * [Microsoft Azure](https://azure.microsoft.com)
    * [虚拟机](https://azure.microsoft.com/services/virtual-machines/) - 1个B1S Linux VM和1个B1S Windows VM（12个月）
    * [应用服务](https://azure.microsoft.com/services/app-service/) - 10个Web/移动/API应用（每天60 CPU分钟）
    * [函数](https://azure.microsoft.com/services/functions/) - 每月100万次请求
    * [开发测试实验室](https://azure.microsoft.com/services/devtest-lab/) - 快速创建轻量级开发测试环境
    * [Active Directory](https://azure.microsoft.com/services/active-directory/) - 50万个对象
    * [Active Directory B2C](https://azure.microsoft.com/services/active-directory/external-identities/b2c/) - 5万月活跃存储用户
    * [Azure DevOps](https://azure.microsoft.com/services/devops/) - 5个活跃用户，无限私有Git仓库
    * [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/) — 10个免费并行任务，开源项目无时间限制（支持Linux/macOS/Windows）
    * [Microsoft IoT Hub](https://azure.microsoft.com/services/iot-hub/) - 每天8,000条消息
    * [负载均衡器](https://azure.microsoft.com/services/load-balancer/) - 1个免费公网负载均衡IP(VIP)
    * [通知中心](https://azure.microsoft.com/services/notification-hubs/) - 100万次推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/) - 15GB入站（12个月）和每月5GB出站
    * [Cosmos DB](https://azure.microsoft.com/services/cosmos-db/) - 25GB存储和1000 RU预置吞吐量
    * [静态Web应用](https://azure.microsoft.com/pricing/details/app-service/static/) — 构建部署静态应用和无服务器函数，含免费SSL、身份验证/授权和自定义域名
    * [存储](https://azure.microsoft.com/services/storage/) - 5GB LRS文件或Blob存储（12个月）
    * [认知服务](https://azure.microsoft.com/services/cognitive-services/) - AI/ML API（计算机视觉、翻译、人脸检测、机器人等），免费层包含有限次数调用
    * [认知搜索](https://azure.microsoft.com/services/search/#features) - 基于AI的搜索索引服务，免费支持1万份文档
    * [Azure Kubernetes服务](https://azure.microsoft.com/services/kubernetes-service/) - 托管Kubernetes服务，免费集群管理
    * [事件网格](https://azure.microsoft.com/services/event-grid/) - 每月10万次操作
    * 完整清单 - https://azure.microsoft.com/free/

  * [Oracle Cloud](https://www.oracle.com/cloud/)
    * 计算
       - 2个AMD计算VM，各1/8 OCPU和1GB内存
       - 4个Arm架构Ampere A1核心和24GB内存（可单VM或最多4个VM使用）
       - [闲置实例](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm#compute__idleinstances)会被回收
    * 块存储 - 2个卷，总计200GB（用于计算）
    * 对象存储 - 10GB
    * 负载均衡器 - 1个实例，10 Mbps带宽
    * 数据库 - 2个数据库，各20GB
    * 监控 - 5亿数据点采集，10亿数据点检索
    * 带宽 - 每月10TB出站流量，x64 VM限速50Mbps，ARM VM限速500Mbps*核心数
    * 公网IP - 2个IPv4（用于VM），1个IPv4（用于负载均衡器）
    * 通知 - 每月100万次投递选项，1000封邮件
    * 完整清单 - https://www.oracle.com/cloud/free/

  * [IBM Cloud](https://www.ibm.com/cloud/free/)
    * Cloudant数据库 - 1GB数据存储
    * Db2数据库 - 100MB数据存储
    * API Connect - 每月5万次API调用
    * 可用性监控 - 每月300万数据点
    * 日志分析 - 每天500MB日志
    * 完整清单 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名免费DNS，DDoS防护，CDN含免费SSL，防火墙规则和页面规则，WAF，机器人缓解，不限量速率限制（每域名1条规则），分析，邮件转发
    * [零信任&SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50用户，24小时活动日志，3个网络位置

    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare全球网络上免费部署无服务器代码——每日10万次请求
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日10万次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列表请求，1GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10GB存储，每月100万次A类操作，每月1000万次B类操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1GB存储空间
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速安全的全球网络上开发和部署Web应用。每月500次构建，100个自定义域名，集成SSL，无限访问席位，无限预览部署，通过Cloudflare Workers集成实现全栈能力
    * [Queues](https://developers.cloudflare.com/queues/) - 每月100万次操作
    * [TURN](https://developers.cloudflare.com/calls/turn/) – 每月1TB免费（出站）流量

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 端到端可视化构建和管理云基础设施的协作解决方案
* [Cloud 66](https://www.cloud66.com/) - 个人项目免费（包含一个部署服务器、一个静态站点），Cloud 66 提供构建、部署和发展云应用所需的一切功能，让您无需操心"服务器事务"
* [Pulumi](https://www.pulumi.com/) — 现代基础设施即代码平台，允许使用熟悉的编程语言和工具来构建、部署和管理云基础设施
* [terraform.io](https://www.terraform.io/) — Terraform Cloud。免费提供最多500个资源的远程状态管理和团队协作
* [scalr.com](https://scalr.com/) - Scalr是Terraform自动化与协作(TACO)产品，用于在Terraform管理的基础设施和配置上实现更好的协作与自动化。完整支持Terraform CLI，集成OPA，采用分层配置模型。无SSO附加费用。包含所有功能。每月免费使用50次运行
* [deployment.io](https://deployment.io) - Deployment.io帮助开发者在AWS上实现部署自动化。免费版支持单个开发者（单用户）无限制部署静态站点、网络服务和环境。每月免费提供20次作业执行，包含预览和自动部署功能

**[⬆️ 返回顶部](#目录)**

## 源代码仓库

  * [Bitbucket](https://bitbucket.org/) — 最多5名用户的无限公共和私有Git仓库，包含CI/CD流水线
* [chiselapp.com](https://chiselapp.com/) — 无限公共和私有Fossil仓库
* [codebasehq.com](https://www.codebasehq.com/) — 一个免费项目，含100MB空间和两名用户
* [Codeberg](https://codeberg.org/) — 免费开源项目的无限公共和私有Git仓库（协作者不限）。基于[Forgejo](https://forgejo.org/)。静态网站托管通过[Codeberg Pages](https://codeberg.page/)。CI/CD托管通过[Codeberg's CI](https://docs.codeberg.org/ci/)。翻译托管通过[Codeberg Translate](https://translate.codeberg.org/)。包含软件包和容器托管、项目管理及问题追踪
* [GitGud](https://gitgud.io) — 无限公共和私有仓库。永久免费。基于GitLab & Sapphire。不提供CI/CD
* [GitHub](https://github.com/) — 无限公共仓库和私有仓库（协作者不限）。包含CI/CD、开发环境、静态托管、软件包和容器托管、项目管理及AI Copilot
* [gitlab.com](https://about.gitlab.com/) — 最多5名协作者的无限公共和私有Git仓库。包含CI/CD、静态托管、容器注册表、项目管理及问题追踪
* [framagit.org](https://framagit.org/) — Framagit是Framasoft基于Gitlab的软件协作平台，包含CI、静态页面、项目页面和问题追踪
* [heptapod.net](https://foss.heptapod.net/) — Heptapod是GitLab社区版的分支，支持Mercurial
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；同时提供Ionic仓库
* [NotABug](https://notabug.org) — NotABug.org是自由许可证项目的免费代码协作平台，基于Git
* [OSDN](https://osdn.net/) - OSDN.net为开源开发者提供免费服务，支持SVN/Git/Mercurial/Bazaar/CVS仓库
* [Pagure.io](https://pagure.io) — Pagure.io是FOSS许可证项目的免费开源代码协作平台，基于Git
* [perforce.com](https://www.perforce.com/products/helix-teamhub) — 免费1GB云空间，支持Git、Mercurial或SVN仓库
* [pijul.com](https://pijul.com/) - 无限免费开源的分布式版本控制系统。其独特之处基于补丁的可靠理论，易于学习、使用和分发。解决了git/hg/svn/darcs的诸多问题
* [plasticscm.com](https://plasticscm.com/) — 对个人、开源及非营利组织免费
* [projectlocker.com](https://projectlocker.com) — 一个免费私有项目（Git和Subversion），含50MB空间
* [RocketGit](https://rocketgit.com) — 基于Git的仓库托管。无限公共和私有仓库
* [savannah.gnu.org](https://savannah.gnu.org/) - 作为自由软件项目（GNU项目）的协作软件开发管理系统
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 作为自由软件项目（非GNU项目）的协作软件开发管理系统

**[⬆️ 返回顶部](#目录)**

## API、数据与机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，可将复杂JSON数据可视化、编辑、筛选为美观的表格网格。通过链接保存和分享JSON数据。
  * [Zerosheets](https://zerosheets.com) - 将Google表格转换为强大API，快速开发原型、网站、应用等。每月500次请求免费。
  * [JSON转表格](https://jsontotable.org) - 将JSON转换为交互式表格，实现在线快速查看、编辑和分享。
  * [IP.City](https://ip.city) — 每天100次免费IP地理定位请求
  * [Abstract API](https://www.abstractapi.com) — 适用于多种场景的API套件，包括IP地理定位、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — 网络爬虫和自动化平台，可为任何网站创建API并提取数据。提供现成爬虫、集成代理和定制解决方案。免费计划每月包含5美元平台积分。
  * [APITemplate.io](https://apitemplate.io) - 通过简单API或Zapier、Airtable等自动化工具自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 全面了解API和后端所需的所有工具，包括自动API合约验证和监控。免费计划支持每天最多10,000次请求的服务器。
  * [APIVerve](https://apiverve.com) - 免费即时访问120多个API，注重质量、一致性和可靠性。免费计划每月包含50个API令牌。（可能已下线，2025-06-25）
  * [Arize AI](https://arize.com/) - 机器学习可观测性，用于模型监控和根本原因分析，如数据质量和性能漂移。免费支持最多两个模型。
  * [Maxim AI](https://getmaxim.ai/) - 模拟、评估和观察您的AI代理。Maxim是一个端到端的评估和可观测性平台，帮助团队可靠地部署AI代理，速度提升5倍以上。独立开发者和小团队（3人）永久免费。
  * [Beeceptor](https://beeceptor.com) - 秒速模拟REST API，伪造API响应等。每天50次免费请求，公共仪表板，开放端点（任何拥有仪表板链接的人均可查看提交和响应）。
  * [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确且免费（无限或每月10K-50K次）的现代Web API，如IP地理定位、反向地理编码、网络洞察、电子邮件和电话验证、客户端信息等。
  * [Browse AI](https://www.browse.ai) — 提取和监控网络数据。免费每月1k积分，相当于1k并发请求。
  * [BrowserCat](https://www.browsercat.com) - 无头浏览器API，用于自动化、爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1k次请求。
  * [CarAPI.dev](https://carapi.dev) — 全面的汽车数据API，包括VIN解码、被盗车辆检查、车辆估值、检测数据等。免费层每月包含100次请求，覆盖所有9个端点。
  * [Calendarific](https://calendarific.com) - 企业级公共假期API服务，覆盖200多个国家。免费计划每月500次调用。
  * [Canopy](https://www.canopyapi.co/) - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月100次调用。
  * [Clarifai](https://www.clarifai.com) — 图像API，用于自定义人脸识别和检测。可训练AI模型。免费计划每月1,000次调用。
  * [Cloudmersive](https://cloudmersive.com/) — 实用API平台，提供广泛的API库访问，包括文档转换、病毒扫描等，每月600次调用，仅限北美可用区，最大文件大小2.5MB。
  * [Colaboratory](https://colab.research.google.com) — 免费的基于Web的Python笔记本环境，配备Nvidia Tesla K80 GPU。
  * [CometML](https://www.comet.com/site/) - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据谱系，覆盖从训练到生产的整个工作流程。个人和学术用户免费。
  * [Commerce Layer](https://commercelayer.io) - 可组合的商务API，可从任何前端构建、下单和管理订单。开发者计划每月允许100个订单和最多1,000个SKU免费。
  * [Composio](https://composio.dev/) - AI代理和LLM的集成平台。集成200多个工具，覆盖代理互联网。
  * [Conversion Tools](https://conversiontools.io/) - 在线文件转换器，支持文档、图像、视频、音频和电子书。提供REST API。支持Node.js、PHP、Python库。付费计划支持最大50GB文件。免费层限制文件大小（20MB）和转换次数（30/天，300/月）。
  * [Country-State-City Microservice API](https://country-state-city.rebuscando.info/) - 提供国家、地区、省份、城市、邮政编码等广泛信息的API和微服务。免费层每天最多100次请求。
  * [Coupler](https://www.coupler.io/) - 数据集成工具，可在应用间同步数据。可创建实时仪表板和报告，转换和操作值，收集和备份洞察。免费计划限制为一个用户、数据连接、数据源和数据目的地。还需手动刷新数据。
  * [CraftMyPDF](https://craftmypdf.com) - 通过拖放编辑器和简单API从可重用模板自动生成PDF文档。免费计划每月100个PDF和三个模板。
  * [Crawlbase](https://crawlbase.com/) — 无需代理、基础设施或浏览器即可爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1000次调用免费。
  * [CurlHub](https://curlhub.io) — 用于检查和调试API调用的代理服务。免费计划每月10,000次请求。
  * [CurrencyScoop](https://currencyscoop.com) - 金融科技应用的实时货币数据API。免费计划每月5,000次调用。
  * [Cube](https://cube.dev/) - Cube帮助数据工程师和应用开发者从现代数据存储中访问数据，将其组织为一致的定义，并交付给每个应用。最快的方式是使用Cube Cloud，其免费层每天限制1,000次查询。
  * [Data Dead Drop](https://datadeaddrop.com) - 简单、免费的文件共享。数据访问后自毁。通过浏览器或您喜欢的命令行客户端上传和下载数据。
  * [Data Fetcher](https://datafetcher.com) - 无需代码将Airtable连接到任何应用或API。在Airtable中运行API请求的Postman式界面。预建与数十个应用的集成。免费计划每月100次运行。
  * [Dataimporter.io](https://www.dataimporter.io) - 将数据连接、清理并导入Salesforce的工具。免费计划每月最多20,000条记录。
  * [Datalore](https://datalore.jetbrains.com) - Jetbrains的Python笔记本。包含10 GB存储和每月120小时运行时间。
  * [Data Miner](https://dataminer.io/) - 用于从网页提取数据到CSV或Excel的浏览器扩展（Google Chrome、MS Edge）。免费计划每月500页。
  * [Datapane](https://datapane.com) - 用于在Python中构建交互式报告并将Python脚本和Jupyter Notebook部署为自助工具的API。
  * [DB-IP](https://db-ip.com/api/free) - 免费IP地理定位API，每个IP每天1k次请求。CC-BY 4.0许可下的精简数据库也是免费的。
  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库模式设计和建模工具，免费入门计划包含2个数据库模型和每个模型10个表。

  * [Deepnote](https://deepnote.com) - 新一代数据科学笔记本。兼容Jupyter，支持实时协作和云端运行。免费套餐包含无限个人项目、基础机型（5GB内存+2vCPU）以及最多3名编辑的团队协作。
* [Disease.sh](https://disease.sh/) — 提供新冠疫情精准数据的免费API，用于构建相关应用。
* [Doczilla](https://www.doczilla.app/) — 支持从HTML/CSS/JS代码直接生成截图或PDF的SaaS API。免费版每月可生成250份文档。
* [Doppio](https://doppio.sh/) — 采用顶级渲染技术的托管API，用于生成和私有存储PDF及截图。免费版每月400次生成额度。
* [drawDB](https://drawdb.app/) — 免注册的免费开源在线数据库图表编辑器。
* [dreamfactory.com](https://dreamfactory.com/) — 为移动端、Web及物联网应用提供的开源REST API后端。连接任意SQL/NoSQL数据库、文件存储或外部服务后，可即时生成包含实时文档和用户管理的完整REST API平台。
* [Duply.co](https://duply.co) — 通过API和URL创建动态图像，设计模板可重复使用。免费版提供20点积分。
* [DynamicDocs](https://advicement.io) - 基于LaTeX模板的JSON转PDF API文档生成工具。免费版每月50次API调用并可使用模板库。
* [Efemarai](https://efemarai.com) - 机器学习模型与数据的测试调试平台，可可视化任意计算图。本地使用免费。
* [ERD Lab](https://www.erdlab.io) — 面向开发者的免费云端实体关系图工具。试用版包含2个项目（各10张表）。
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - 基于网页的免费HTTP客户端。
* [Export SDK](https://exportsdk.com) - 提供拖拽式模板编辑器的PDF生成API，含SDK和无代码集成方案。免费版每月250页，支持无限用户和3个模板。
* [file.coffee](https://file.coffee/) - 单文件存储平台（匿名用户15MB/文件，注册用户30MB/文件）。
* [Financial Data](https://financialdata.net/) - 股票市场与金融数据API。免费版每日300次请求。
* [FormatJSONOnline.com](https://formatjsononline.com) - 即时格式化/验证/比较/压缩JSON数据的免费浏览器工具。
* [FraudLabs Pro](https://www.fraudlabspro.com) — 信用卡交易欺诈检测REST API。免费微型版每月500笔交易检测。
* [GeoDataSource](https://www.geodatasource.com) — 通过经纬度坐标查询城市名称的位置服务。免费版每月500次API查询。
* [Geolocated.io](https://geolocated.io) — 多大陆服务器的IP定位API，免费版每日2,000次请求。
* [Glitterly](https://glitterly.app/) - 通过基础模板编程生成动态图像，提供REST API和无代码集成。免费版每月50张图像和5个模板。
* [Hex](https://hex.tech/) - 面向笔记本/数据应用/知识库的协作数据平台。社区免费版支持5个项目。
* [Hook0](https://www.hook0.com/) - 开源Webhooks即服务(WaaS)平台，免费版每日100次事件分发并保留7天历史记录。
* [Hoppscotch](https://hoppscotch.io) - 免费、快速、美观的API请求构建器。
* [huggingface.co](https://huggingface.co) - 面向Pytorch/TensorFlow/JAX的NLP模型构建/训练/部署平台。免费版每月3万输入字符。
* [Hybiscus](https://hybiscus.dev/) - 使用声明式API构建PDF报告。14天免费试用包含50份单页报告，支持调色板和字体定制。
* [Invantive Cloud](https://cloud.invantive.com/) — 通过Invantive SQL或OData4（如Power BI/Power Query）访问70多个云平台（如Exact Online/Twinfield）。含数据复制交换功能。开发者免费版有数据量限制。
* [ipaddress.sh](https://ipaddress.sh) — 以多种[格式](https://about.ipaddress.sh/)获取公网IP的简易服务。
* [ip-api](https://ip-api.com) — IP地理定位API，非商业用途免费，无需API密钥，免费版同一IP限45次/分钟。
* [ipbase.com](https://ipbase.com) - IP地理定位API，永久免费版每月150次请求。
* [IP Geolocation](https://ipgeolocation.io/) — IP地理定位API，开发者永久免费版每日1,000次请求。
* [IP Geolocation API](https://www.abstractapi.com/ip-geolocation-api) — Abstract提供的IP地理定位API，免费1,000次请求。
* [IPLocate](https://www.iplocate.io) — IP地理定位API，免费版每日1,000次请求。含代理/VPN/托管检测、ASN数据、IP关联公司等。另提供免费可下载的IP与国家/ASN映射数据库（CSV或GeoIP兼容MMDB格式）。
* [IP2Location](https://www.ip2location.com) — 免费增值IP地理定位服务，LITE数据库可免费下载。
* [IP2Location.io](https://www.ip2location.io/) — 快速可靠的免费增值IP地理定位API。免费版每月5万积分，另提供500次免费WHOIS和托管域名查询。
* [ipapi](https://ipapi.co/) - Kloudend公司基于AWS构建的可靠IP定位API。免注册免费版每月3万次查询（每日1,000次）。
* [ipapi.is](https://ipapi.is/) - 开发者打造的可靠IP定位API，具备顶级托管检测能力。免注册免费版1,000次查询。
* [IPinfo](https://ipinfo.io/) — 快速精准的免费IP数据API（每月5万次）。提供地理定位/公司/运营商/IP范围/域名/滥用联系人等API。所有付费API可免费试用。
* [IPQuery](https://ipquery.io) — 无速率限制和定价的开发者无限IP API。
* [IPTrace](https://iptrace.io) — 极简IP地理定位API，每月5万次免费查询。
* [JSON2Video](https://json2video.com) - 通过编程或无代码方式自动化生成营销视频的编辑API。
* [JSON IP](https://getjsonip.com) — 返回请求客户端的公网IP地址。免费版无需注册，支持通过CORS用客户端JS直接请求数据。适用于监控客户端/服务器IP变更的服务，请求次数无限。
* [JSON Serve](https://jsonserve.com/) — 帮助开发者存储JSON对象并作为REST API使用的免费服务。
* [JSONing](https://jsoning.com/api/) — 从JSON对象创建模拟REST API，可自定义HTTP状态码/头部/响应体。

  * [konghq.com](https://konghq.com/) — API市场及强大的私有和公共API工具。免费版功能受限，如监控、告警和支持服务。
* [Kreya](https://kreya.app) — 免费gRPC图形客户端，支持调用和测试gRPC API。可通过服务反射导入gRPC API。
* [Lightly](https://www.lightly.ai/) — 通过正确数据提升机器学习模型。免费支持最多1000个样本的数据集。
* [LoginLlama](https://loginllama.app) — 登录安全API，用于检测欺诈和可疑登录并通知客户。每月免费处理1000次登录。
* [MailboxValidator](https://www.mailboxvalidator.com) — 通过真实邮件服务器连接验证邮箱有效性的服务。免费API计划每月提供100次验证。
* [Market Data API](https://www.marketdata.app) — 提供股票、期权、共同基金等实时和历史金融数据。永久免费API层允许每天100次免费请求。
* [Meteosource Weather API](https://www.meteosource.com/) — 全球天气API，提供当前和预测天气数据。预测基于多天气模型的机器学习组合以提高准确性。免费计划每天400次调用。
* [microlink.io](https://microlink.io/) — 将任何网站转化为数据，如元标签标准化、美观链接预览、爬取功能或截图服务。每天50次免费请求。
* [Mindee](https://developers.mindee.com) — 强大的OCR软件和API优先平台，通过计算机视觉和机器学习识别关键信息，自动化文档处理流程。免费层每月500页。
* [Mintlify](https://mintlify.com) — 现代API文档标准。美观易维护的UI组件、应用内搜索和交互式沙盒。免费支持1名编辑。
* [MockAPI](https://www.mockapi.io/) — 快速模拟API、生成自定义数据并通过RESTful接口操作的工具。适用于原型设计/测试/学习。免费版每个项目支持2个资源。
* [Mockfly](https://www.mockfly.dev/) — 可信赖的API模拟和功能标志管理工具。通过直观界面快速生成和控制模拟API。免费层每天500次请求。
* [Mocki](https://mocki.io) — 创建与GitHub仓库同步的模拟GraphQL和REST API的工具。简单REST API无需注册即可免费开发使用。
* [Mocko.dev](https://mocko.dev/) — 代理您的API，选择云端模拟端点并检查流量。加速开发和集成测试。
* [Mocky](https://designer.mocky.io/) — 生成自定义HTTP响应以模拟请求的简单Web应用。[开源版本](https://github.com/julien-lafont/Mocky)可用。
* [Mock N Roll](https://mocknroll.me/) — 免费模拟API服务，无需后端延迟即可模拟真实API响应。适合前端开发、QA测试和DevOps团队。[代码库](https://github.com/haerulmuttaqin/mocknroll-web)。
* [microenv.com](https://microenv.com) — 为开发者创建虚假REST API，支持生成代码和Docker容器应用。
* [Multi-Exit IP Address Checker](https://ip.alstra.ca/) — 免费工具，检查多节点出口IP地址，了解IP在不同区域的呈现方式。适用于测试基于规则的DNS分流工具如Control D。
* [Namekit](https://namekit.app/) — AI驱动的域名发现工具，即时查找可用标准价格域名。免费每日查询。
* [News API](https://newsapi.org) — 通过代码搜索网络新闻并获取JSON结果。开发者每天100次免费查询。文章有24小时延迟。
* [numlookupapi.com](https://numlookupapi.com) — 免费电话号码验证API，每月100次免费请求。
* [OCR.Space](https://ocr.space/) — 解析图像和PDF文件并返回JSON文本结果的OCR API。每月25,000次免费请求，文件大小限制1MB。
* [OpenAPI3 Designer](https://openapidesigner.com/) — 可视化创建Open API 3定义，完全免费。
* [parsehub.com](https://parsehub.com/) — 从动态网站提取数据，将动态网站转为API，免费支持5个项目。
* [Parseur](https://parseur.com) — 每月20页免费：从PDF和邮件提取数据。AI驱动，完整API访问。
* [PDFBolt](https://pdfbolt.com) — 注重隐私的PDF生成API，提供Stripe风格文档。每月500次免费PDF转换。
* [pdfEndpoint.com](https://pdfendpoint.com) — 通过简单API将HTML或URL转为PDF。每月100次免费转换。
* [PDF-API.io](https://pdf-api.io) — PDF自动化API，可视化模板编辑器或HTML转PDF，动态数据集成和PDF渲染API。免费版包含1个模板，每月100次PDF生成。
* [Pixela](https://pixe.la/) — 免费日流数据库服务。所有操作通过API执行。支持热图和折线图可视化。
* [Postman](https://postman.com) — 简化工作流并更快创建更好API的协作平台。Postman应用永久免费。云功能在限制内也永久免费。
* [Insomnia](https://insomnia.rest) — 开源API客户端，支持设计和测试REST及GraphQL API。
* [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化完整平台。免费计划包含5个部署工作流和每月500分钟无服务器计算积分。
* [Preset Cloud](https://preset.io/) — 托管版Apache Superset服务。5人以下团队永久免费，包含无限仪表盘和图表、无代码图表构建器和协作SQL编辑器。
* [PromptLoop](https://www.promptloop.com/) — AI网络爬虫工具，节省85%以上时间，比手动研究快4倍，并提供REST API端点。每月前1000积分免费。
* [ProxySentry](https://proxysentry.io/) — 检测住宅代理和VPN的IP API。免费层每月1万次请求（通过rapidapi.com提供）。
* [Public-Apis Github仓库](https://github.com/public-apis/public-apis) — 免费公共API列表。
* [Rapidapi](https://rapidapi.com/) — 全球最大API中心，数百万开发者连接数千API，通过趣味挑战（含解决方案！）和交互示例进行API开发。
* [Rendi](https://rendi.dev) — FFmpeg API：无需管理基础设施的在线FFmpeg REST API。免费层包含月度处理配额和4个vCPU。
* [RequestBin.com](https://requestbin.com) — 创建免费HTTP请求接收端点。所有发送到该端点的请求及其负载和头信息将被记录，便于观察Webhook等服务调用。
* [reqres.in](https://reqres.in) — 可即时响应AJAX请求的免费托管REST-API。
* [Roboflow](https://roboflow.com) — 无需机器学习经验即可创建和部署自定义计算机视觉模型。免费层每月30积分。
* [ROBOHASH](https://robohash.org/) — 通过任意文本生成独特酷炫图像的Web服务。

  * [ScrapingAnt](https://scrapingant.com/) — Headless Chrome 爬取 API 和免费代理检测服务。支持 JavaScript 渲染、高级轮换代理、绕过验证码。免费提供 10,000 次 API 调用额度。
  * [Simplescraper](https://simplescraper.io) — 每次操作后触发您的 Webhook。免费计划包含 100 次云端爬取额度。
  * [Select Star](https://www.selectstar.com/) - 智能数据发现平台，自动分析和记录您的数据。免费轻量版支持 2 个数据源、最多 1,000 张表和 25 个用户。
  * [Sheetson](https://sheetson.com) - 即时将任何 Google 表格转换为 RESTful API。提供免费计划，每张表格包含 1,000 行免费额度。
  * [Siterelic](https://siterelic.com/) - Siterelic API 提供网站截图、审计、TLS 扫描、DNS 查询、TTFB 测试等功能。免费计划每月提供 100 次 API 请求。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎爬取 API。返回 Google、YouTube、Bing、百度、沃尔玛等平台的结构化 JSON 结果。免费计划每月包含 100 次成功 API 调用。
  * [SmartParse](https://smartparse.io) - SmartParse 是数据迁移和 CSV 转 API 平台，提供节省时间和成本的开发者工具。免费层每月包含 300 个处理单元、浏览器上传、数据隔离、熔断机制和任务提醒。
  * [Sofodata](https://www.sofodata.com/) - 从 CSV 文件创建安全的 RESTful API。上传 CSV 文件后即可通过 API 快速访问数据，加速应用开发。免费计划包含 2 个 API 和每月 2,500 次 API 调用。无需信用卡。
  * [YourGPT CSV 转 JSON](https://yourgpt.ai/tools/csv-to-json) — 快速、免费且注重隐私的在线工具，可直接在浏览器中将 CSV 文件转换为结构化 JSON 数据。
  * [Sqlable](https://sqlable.com/) - 免费在线 SQL 工具集合，包括 SQL 格式化器和验证器、SQL 正则表达式测试器、假数据生成器和交互式数据库沙盒。
  * [Stoplight](https://stoplight.io/) - 用于协作设计和记录 API 的 SaaS。免费计划提供设计、模拟和文档工具。
  * [Supportivekoala](https://supportivekoala.com/) — 通过模板根据输入自动生成图像。免费计划每月可创建最多 50 张图像。
  * [Svix](https://www.svix.com/) - Webhooks 即服务。免费每月发送最多 50,000 条消息。
  * [Tavily AI](https://tavily.com/) - 在线搜索和快速洞察的综合研究 API，具备整理研究成果的能力。免费层每月提供 1,000 次请求，无需信用卡。
  * [The IP API](https://theipapi.com/) - IP 地理定位 API，每天免费 1,000 次请求。提供 IP 地址的位置信息，包括国家、城市、地区等。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑 API。核心功能免费且无使用限制。
  * [Tomorrow.io 天气 API](https://www.tomorrow.io/weather-api/) - 提供免费天气 API 计划。提供准确且最新的天气预报，覆盖全球，包含历史数据和天气监测解决方案。
  * [Treblle](https://www.treblle.com) - Treblle 帮助团队构建、发布和管理 API。具备高级 API 日志聚合、可观测性、文档和调试功能。免费层包含所有功能，但每月限制 25 万次请求。
  * [UniRateAPI](https://unirateapi.com) – 590+ 种货币和加密货币的实时汇率。免费计划提供无限 API 调用，适合开发者和金融应用。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单免费的增值税号验证 API。每月免费验证 150 次。
  * [WeatherXu](https://weatherxu.com/) — 全球天气数据 API，包括当前状况、每小时和每日预报以及天气警报。集成 AI 模型和 ML 系统，分析并组合多种天气模型以提高预报准确性。免费层每月包含 10,000 次 API 调用。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页爬取 API，内置解析、Chrome 渲染和代理。每月免费 2,000 次 API 调用。
  * [Weights & Biases](https://wandb.ai) — 开发者优先的 MLOps 平台。通过实验跟踪、数据集版本控制和模型管理更快构建更好的模型。免费层仅限个人项目，包含 100 GB 存储。
  * [What The Diff](https://whatthediff.ai) - AI 驱动的代码审查助手。免费计划每月限制 25,000 个令牌（约 10 次 PR）。
  * [wolfram.com](https://wolfram.com/language/) — 云端内置基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化 API。每月 30,000 次 API 调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 网页爬取 API，支持无头浏览器、住宅 IP 和透明定价。每月免费 1,000 次 API 调用，学生和非营利组织可获额外额度。
  * [Zipcodebase](https://zipcodebase.com) - 免费邮政编码 API，访问全球邮政编码数据。每月免费 5,000 次请求。
  * [Zipcodestack](https://zipcodestack.com) - 免费邮政编码 API 和邮政编码验证。每月免费 10,000 次请求。
  * [Zuplo](https://zuplo.com/) - 免费 API 管理平台，用于设计、构建和部署 API 到边缘。几分钟内为任何 API 添加 API 密钥认证、速率限制、开发者文档和货币化功能。原生支持 OpenAPI，完全可编程，使用 Web 标准 API 和 TypeScript。免费计划提供最多 10 个项目、无限生产边缘环境、每月 100 万次请求和 10GB 出口流量。
  * [DiffJSON](https://diffjson.com) - 在线工具，用于比较两个 JSON 数据结构的差异，帮助您快速定位 JSON 数据中的不同之处。
  * [FreeIPAPI](https://freeipapi.com) - 免费、快速且可靠的 IP 地理定位 API，适用于商业和非商业用户，支持 JSON 格式。

**[⬆️ 返回顶部](#目录)**

## 制品仓库

  * [Artifactory](https://jfrog.com/start-free/) - 支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的制品仓库。包含包扫描工具XRay和CI/CD工具Pipelines（原Shippable），免费层每月提供2,000分钟CI/CD时长。
* [central.sonatype.org](https://central.sonatype.org) — Apache Maven、SBT和其他构建系统的默认制品仓库。
* [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共Maven及PyPi仓库。开源项目免费。
* [cloudsmith.io](https://cloudsmith.io) — 简单、安全且集中的仓库服务，支持Java/Maven、RedHat、Debian、Python、Ruby、Vagrant等。免费层+开源免费。
* [jitpack.io](https://jitpack.io/) — 针对GitHub上JVM和Android项目的Maven仓库，公开项目免费。
* [repsy.io](https://repsy.io) — 1GB免费的私有/公共Maven仓库。
* [Gemfury](https://gemfury.com) — 支持Maven、PyPi、NPM、Go Module、Nuget、APT和RPM仓库的私有及公共制品仓库。公开项目免费。
* [paperspace](https://www.paperspace.com/) — 构建和扩展AI模型，开发、训练和部署AI应用，免费计划：公开项目、5GB存储、基础实例。
* [RepoForge](https://repoforge.io) - 托管在云端的私有仓库，支持Python、Debian、NPM包和Docker注册表。开源/公共项目免费计划。
* [RepoFlow](https://repoflow.io) - RepoFlow简化包管理，支持npm、PyPI、Docker、Go、Helm等。免费试用包含10GB存储、10GB带宽、100个包和无限用户（云端），或仅限个人使用的自托管版本。

**[⬆️ 返回顶部](#目录)**

## 团队协作工具

  * [3Cols](https://3cols.com/) - 免费的云端代码片段管理器，支持个人和团队协作
* [Bitwarden](https://bitwarden.com) — 为个人、团队和企业组织提供最简便安全的数据存储、共享和同步方案
* [Braid](https://www.braidchat.com/) — 专为团队设计的聊天应用。公开群组免费，支持无限用户、完整历史记录和集成功能，并提供可自托管的开源版本
* [cally.com](https://cally.com/) — 快速找到会议最佳时间，操作简单，适合各种规模团队
* [Calendly](https://calendly.com) — 专业会议连接与排期工具，免费版支持1个日历连接和无限会话，提供桌面和移动端应用
* [Discord](https://discord.com/) — 支持公开/私密频道的聊天平台，具备Markdown文本、语音、视频和屏幕共享功能，用户数量无限制
* [Fibo](https://fibo.dev) - 免费的在线实时敏捷估算工具，支持无限成员进行故事点评估以加速计划会议
* [Telegram](https://telegram.org/) — 为所有人提供的快速可靠通讯工具，商务用户和小团队可享受大群组、用户名系统、桌面应用和强大文件共享功能
* [DevToolLab](https://devtoollab.com) — 在线开发者工具平台，免费使用所有基础工具，支持每个工具自动保存一条记录，提供标准处理速度和社区支持
* [Dubble](https://dubble.so/) — 免费的分步指南创建工具，支持截图记录流程、团队协作及异步屏幕录制
* [Duckly](https://duckly.com/) — 实时团队交流协作平台，支持IDE配对编程、终端共享、音视频及屏幕共享，小团队免费使用
* [Dyte](https://dyte.io) - 开发者友好的实时音视频SDK，配备提升效率的协作插件，免费版每月包含10,000分钟使用时长
* [evernote.com](https://evernote.com/) — 信息整理工具，支持笔记共享与协作
* [Fibery](https://fibery.io/) — 互联工作区平台，单用户免费版提供2GB存储空间
* [flock.com](https://flock.com) — 高效的团队通讯工具，免费版支持无限消息、频道、用户及应用集成
* [Gather](https://www.gather.town/) - 创新的在线会议平台，通过可定制虚拟空间实现真实社交体验，免费支持最多10人同时在线
* [gokanban.io](https://gokanban.io) - 基于语法的免注册看板工具，完全免费无功能限制
* [flat.social](https://flat.social) - 可定制的团队会议与社交互动空间，会议数量无限制，免费支持最多8人同时在线
* [GitDailies](https://gitdailies.com) - GitHub提交和PR活动的每日报告工具，含推送可视化、同伴认可系统和自定义提醒功能，免费版支持3个仓库和3个提醒配置
* [gitter.im](https://gitter.im/) — GitHub专属聊天工具，公开和私密房间无限制，25人以下团队免费
* [Hackmd.io](https://hackmd.io/) - 实时协作的Markdown文档工具，类似Google Docs但支持Markdown格式，免费版笔记数量无限制但私有笔记协作人数和模板功能受限
* [hangouts.google.com](https://hangouts.google.com/) — 谷歌账户即可使用的全能通讯平台
* [HeySpace](https://hey.space) - 集成聊天、日历、时间轴和视频通话的任务管理工具，5人以下团队免费
* [helplightning.com](https://www.helplightning.com/) — 增强现实视频协助工具，免费版不含分析、加密和支持服务
* [ideascale.com](https://ideascale.com/) — 客户意见征集与投票平台，免费支持25名成员和1个社区
* [Igloo](https://www.igloosoftware.com/) — 企业内部门户平台，支持文档、博客、日历等共享，10人以下团队免费
* [Keybase](https://keybase.io/) — Slack的开源替代方案，为家庭、社区和企业提供安全的聊天与文件存储
* [Google Meet](https://meet.google.com/) — 企业级在线视频会议解决方案，提供安全便捷的会议体验
* [/meet for Slack](https://meetslack.com) - 直接在Slack频道、群组或私信中通过/meet命令发起Google会议，完全免费无限制
* [Linkinize](https://linkinize.com) — 团队书签管理工具，支持标签、多工作区和协作功能，免费版包含4个工作区和10名成员
* [Livecycle](https://www.livecycle.io/) — 跨职能团队和开源项目的无障碍协作平台
* [Lockitbot](https://www.lockitbot.com/) — 在Slack中锁定共享资源（如会议室、开发环境等），免费版支持2个资源
* [MarkUp](https://www.markup.io/) — 直接在网站、PDF和图片上收集反馈意见的工具
* [Proton Pass](https://proton.me/pass) — 集成邮箱别名、2FA验证器、共享功能和通行密钥的密码管理器，支持网页、浏览器扩展及多端应用
* [Visual Debug](https://visualdebug.com) - 提升客户与开发沟通效率的视觉反馈工具
* [meet.jit.si](https://meet.jit.si/) — 一键式免费视频会议与屏幕共享
* [Microsoft Teams](https://products.office.com/microsoft-teams/free) — 集成聊天、内容和应用的数字化协作中心，免费支持最多50万用户
* [Miro](https://miro.com/) - 可扩展的安全跨设备协作白板，企业级分布式团队解决方案，提供免费增值计划
* [nootiz](https://www.nootiz.com/) - 网站视觉反馈收集与管理工具
* [Notion](https://www.notion.so/) - 集成任务、维基和数据库的Markdown协作笔记应用，被描述为"一体化工作空间"
* [Nuclino](https://www.nuclino.com) - 轻量级团队知识库与文档协作工具，免费版包含所有核心功能，支持50个条目和5GB存储
* [OnlineInterview.io](https://onlineinterview.io/) - 嵌入式视频聊天、画板和在线代码编译器的技术面试平台，一键创建远程面试房间
* [Quidlo Timesheets](https://www.quidlo.com/timesheets) - 简洁的团队时间追踪与报表工具，免费版支持10名用户
* [PageShare.dev](https://www.pageshare.dev) - 为GitHub PR添加可视化评审功能而无需部署网站，免费版每月10个页面和100MB总存储
* [Pendulums](https://pendulums.io/) - 免费的时间追踪工具，通过直观界面和有价值的统计数据提升时间管理能力
* [Pumble](https://pumble.com) - 永久免费的团队聊天应用，支持无限用户和完整消息历史记录

  * [element.io](https://element.io/) — 基于Matrix构建的去中心化开源通信工具。支持群聊、私信、加密文件传输、音视频通话，并轻松与其他服务集成。
  * [Rocket.Chat](https://rocket.chat/) - 开源通信平台，具备全渠道功能、Matrix联邦协议、多应用桥接、无限消息和完整消息历史记录。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储解决方案，支持文件共享、同步和讨论。免费版仅提供1GB云空间。
  * [Sema](https://www.semasoftware.com/) - 免费开发者作品集工具，可整合多个代码库的贡献并生成统一报告。
  * [浏览器屏幕共享](https://screensharing.net) - 免费屏幕共享工具，无需下载或注册即可通过浏览器实时协作。完全免费。
  * [Slab](https://slab.com/) — 面向团队的现代知识管理服务。10人以下团队免费使用。
  * [slack.com](https://slack.com/) — 无限用户免费使用，部分功能受限
  * [Spectrum](https://spectrum.chat/) - 免费创建公开或私密社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可追踪上游服务提供商的状态页。
  * [Stickies](https://stickies.app/) - 可视化协作应用，用于头脑风暴、内容整理和笔记记录。免费版支持3个工作墙、无限用户和1GB存储。
  * [Stacks](https://betterstacks.com/) - 集成笔记、链接和文件存储的内容工作区，应对信息过载。永久免费个人版。
  * [talky.io](https://talky.io/) — 免费群组视频聊天。匿名。点对点传输。无需插件、注册或付费。
  * [Teamhood](https://teamhood.com/) - 免费项目/任务/问题跟踪软件。支持看板泳道和完整Scrum实现，集成时间追踪功能。5用户3项目组合免费。
  * [Teamplify](https://teamplify.com) - 通过团队分析和智能每日站会优化开发流程。包含完整的远程团队休假管理功能。5人以下小团队免费。
  * [Tefter](https://tefter.io) - 书签应用，提供强大的Slack集成。开源团队免费使用。
  * [TeleType](https://teletype.oorja.io/) — 共享终端/语音/代码/白板等。开发者端到端加密协作无需登录。
  * [TimeCamp](https://www.timecamp.com/) - 免费时间追踪软件，支持无限用户。轻松集成Jira/Trello/Asana等项目管理工具。
  * [Huly](https://huly.io/) - 全能项目管理平台（替代Linear/Jira/Slack/Notion/Motion），每个工作区支持无限用户、10GB存储和10GB音视频流量。
  * [Teamcamp](https://www.teamcamp.app) - 软件开发公司专用的一体化项目管理应用。
  * [twist.com](https://twist.com) — 异步友好型团队沟通应用，保持对话条理化。提供免费无限量计划，合格团队可享折扣。
  * [tldraw.com](https://tldraw.com) — 免费开源白板和图表工具，具备智能箭头/吸附/便签/SVG导出功能。支持多人协作编辑，另有官方免费VS Code扩展。
  * [BookmarkOS.com](https://bookmarkos.com) - 免费一体化书签/标签/任务管理器，提供可定制云桌面及文件夹协作功能。
  * [typetalk.com](https://www.typetalk.com/) — 通过网页或移动端即时消息与团队分享讨论创意。
  * [Tugboat](https://tugboat.qa) - 自动按需预览每个Pull Request。全员免费，非营利组织可享Nano级免费套餐。
  * [whereby.com](https://whereby.com/) — 一键视频会议（原appear.in），永久免费。
  * [windmill.dev](https://windmill.dev/) - 开源开发者平台，可通过Python/Typescript脚本快速构建生产级多步骤自动化和内部应用。免费用户最多创建/加入3个非高级工作区。
  * [vadoo.tv](https://vadoo.tv/) — 极简视频托管与营销平台。单键上传视频，支持录制/管理/分享等功能。免费版每月10个视频、1GB存储和10GB带宽。
  * [userforge.com](https://userforge.com/) - 互联在线角色/用户故事和场景映射工具，保持设计与开发同步。免费版支持3个角色和2名协作者。
  * [wistia.com](https://wistia.com/) — 带观看分析的高清视频托管平台，提供25个视频额度及品牌化播放器。
  * [wormhol.org](https://www.wormhol.org/) — 直截了当的文件共享服务。无限次分享5GB以内文件，支持任意数量接收方。
  * [Wormhole](https://wormhole.app/) - 端到端加密分享5GB内文件（有效期24小时）。超过5GB文件采用P2P传输。
  * [zoom.us](https://zoom.us/) — 安全视频/网络会议工具，免费会议限时40分钟。
  * [Zulip](https://zulip.com/) — 采用独特邮件式线程模型的实时聊天工具。免费版包含10,000条可搜索消息和5GB文件存储，另提供可自托管的开源版本。
  * [robocorp.com](https://robocorp.com) - 自动化运维开源技术栈。免费试用云功能并实现简单自动化：每月240分钟机器人时长、10次助手运行和100MB存储。
  * [Fleep.io](https://fleep.io/) — Slack替代方案，小团队免费计划包含完整消息历史、无限私聊、1个群组对话和1GB文件存储。
  * [Chanty.com](https://chanty.com/) — 另一款Slack替代工具。永久免费版支持10人小团队，包含无限公私对话、可搜索历史、无限1对1语音通话、语音消息、10个集成和20GB团队存储。
  * [ruttl.com](https://ruttl.com/) — 最佳一体化反馈工具，用于收集网站/PDF/图像的数字反馈。
  * [Mattermost](https://mattermost.com/) — 技术团队专用安全协作平台。免费版含无限频道/剧本/看板/用户和10GB存储等。
  * [Webvizio](https://webvizio.com) — 网站反馈工具和Bug报告系统，直接在实时网站/应用/图像/PDF/设计文件上简化开发协作流程。
  * [Pullflow](https://pullflow.com) — 提供AI增强的代码评审协作平台，支持GitHub/Slack/VS Code三端联动。
  * [Webex](https://www.webex.com/) — 视频会议工具，免费会议限时40分钟（100人参与）。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议工具，免费会议限时50分钟（100人参与）。
  * [GitBook](https://www.gitbook.com/) — 技术知识沉淀平台，涵盖产品文档/内部知识库/API文档等。开发者个人免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单快速安全的文件传输界面。无需订阅即可发送照片视频等大文件。
  * [paste.sh](https://paste.sh/) — 基于JavaScript和加密技术的简易粘贴站点。

  * [腾讯实时音视频](https://trtc.io/) — Tencent Real-Time Communication (TRTC) 提供群组音视频通话解决方案。首年每月赠送10,000分钟免费时长。
  * [Pastefy](https://pastefy.app/) - 美观简洁的代码粘贴服务，支持客户端加密、多标签粘贴、API接口、高亮编辑器等功能。
  * [SiteDots](https://sitedots.com/) - 直接在网站上收集网站项目反馈，无需模拟器、画布或变通方案。免费版功能完整可用。

  * [Cushion](https://cushion.so/) - 专为高效协作的分布式小团队设计的Slack替代品。免费版支持30条消息、5名成员及不限量访客。

**[⬆️ 返回顶部](#目录)**

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — Drupal 网站托管服务。开发者可享免费套餐，并提供免费开发工具（如 Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/) — 无头 CMS。云端内容管理与交付 API。免费社区空间包含 5 个用户、2.5 万条记录、48 种内容类型和 2 种语言环境。
* [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。开发者可享免费个人计划。
* [Crystallize](https://crystallize.com) — 支持电商的无头 PIM。内置 GraphQL API。免费版包含无限用户、1000 个目录项、5 GB/月带宽和 2.5 万次/月 API 调用。
* [DatoCMS](https://www.datocms.com/) - 为小型项目提供免费套餐。基于 GraphQL 的 CMS，基础套餐每月支持 10 万次 API 调用。
* [Directus](https://directus.io) — 无头 CMS。完全免费开源的本地或云端内容管理平台，无功能限制或付费墙。
* [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储于 Git 仓库的无头 CMS，无任何限制。
* [kontent.ai](https://www.kontent.ai) - 内容即服务平台，兼具无头 CMS 优势与营销赋能。开发者计划支持 2 个用户、无限项目（每个项目 2 个环境）、500 个内容项、2 种语言，并提供交付/管理 API 及自定义元素支持。
* [Prismic](https://www.prismic.io/) — 无头 CMS。提供全托管可扩展 API 的内容管理界面，社区计划含无限 API 调用、文档、自定义类型、资源和多语言支持（限 1 个用户）。开源项目可申请更大免费套餐。
* [Sanity.io](https://www.sanity.io/) - 结构化内容平台，配备开源编辑环境和实时托管数据库。每个项目免费包含无限管理员用户、3 个普通用户、2 个数据集、50 万次 CDN API 请求、10GB 带宽和 5GB 资源。
* [sensenet](https://sensenet.com) - API 优先的无头 CMS，为企业级需求提供解决方案。开发者计划含 3 个用户、500 个内容项、3 种内置角色、25+5 种内容类型、全功能 REST API 及 Office 在线编辑。
* [TinaCMS](https://tina.io/) — Forestry.io 替代方案。开源 Git 托管的无头 CMS，支持 Markdown/MDX/JSON，基础套餐免费支持 2 个用户。
* [GatsbyjsCMS](https://www.gatsbyjs.com/) - 快速灵活的框架，可对接任意 CMS/API/数据库构建网站，打造更高流量、更高转化的无头网站。
* [Hygraph](https://hygraph.com/) - 小型项目免费套餐。GraphQL 优先的 API，用原生无头 CMS 替代传统方案，实现全渠道内容交付。
* [Squidex](https://squidex.io/) - 小型项目免费套餐。API/GraphQL 优先的开源方案，采用事件溯源架构（自动记录每次变更）。
* [InstaWP](https://instawp.com/) - 秒建 WordPress 站点。免费套餐含 5 个活跃站点、500MB 空间，站点 48 小时后过期。
* [Storyblok](https://www.storyblok.com) - 面向开发者和营销人员的无头 CMS，兼容所有现代框架。社区（免费）版含管理 API、可视化编辑器、10 个数据源、自定义字段类型、多语言支持、2500 个资源管理、图片优化服务和每月 250GB 流量。
* [WPJack](https://wpjack.com) - 5 分钟在任何云端部署 WordPress！免费套餐含 1 台服务器、2 个站点、免费 SSL 证书和无限定时任务，无时间限制。
* [Solo](https://soloist.ai) - Mozilla 推出的免费 AI 建站工具，通过简单输入生成精美商业网站。免信用卡，支持自定义域名。

**[⬆️ 返回顶部](#目录)**

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一款免费的 No code 应用构建工具。自动生成的后端代码中，用户可完全访问源代码及无限量的 API 和路由，支持深度集成。免费方案包含 3 个项目、5 张数据表和 Google 插件支持。
* [Cody AI](https://sourcegraph.com/cody) - Cody 是一款编程 AI 助手，通过 AI 技术和对代码库的深度理解，帮助开发者更快编写和理解代码。Cody 提供多款 LLM 选择（含本地推理），支持多种 IDE 及主流编程语言，并有免费方案。免费用户每月可获得 20 条聊天消息（使用 Claude 3 Sonnet 模型）和 500 次自动补全（基于 Starcoder 16b 模型）。
* [DhiWise](https://www.dhiwise.com/) — 通过 DhiWise 创新的代码生成技术，将 Figma 设计稿无缝转化为动态 Flutter 和 React 应用，优化工作流程，助您以前所未有的速度打造卓越的移动端与网页体验。
* [Metalama](https://www.postsharp.net/metalama) - 仅限 C# 语言。Metalama 在编译时动态生成样板代码，保持源码整洁。开源项目可免费使用，商业友好型免费版包含三个功能模块。
* [Supermaven](https://www.supermaven.com/) — Supermaven 是面向 VSCode、JetBrains 和 Neovim 的极速 AI 代码补全插件。免费版提供无限量的行内补全功能。
* [tabnine.com](https://www.tabnine.com/) — Tabnine 通过从全球代码中学习到的洞察，帮助开发者更快构建更优质软件。提供插件支持。
* [v0.dev](https://v0.dev/) — v0 利用 AI 模型根据简单文本提示生成代码。它基于 shadcn/ui 和 Tailwind CSS 生成可直接复用的 React 代码。每次生成至少消耗 30 积分，新用户初始获得 1200 积分，每月还可领取 200 免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 完整的代码编写、审查和部署工作流，提供单用户免费账户和100 MB存储空间的1个代码仓库
* [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，免费版仅支持3分钟测试会话（Vista系统下1024x768分辨率的MS IE 9）
* [codacy.com](https://www.codacy.com/) — 支持PHP/Python/Ruby/Java/JavaScript/Scala/CSS/CoffeeScript的自动化代码审查，公共和私有仓库均无限免费
* [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 面向DevOps的自动化基础设施即代码审查工具，集成GitHub/Bitbucket/GitLab（含自托管版）。除标准语言外，还支持Ansible/Terraform/CloudFormation/Kubernetes等（开源免费）
* [codeclimate.com](https://codeclimate.com/) — 自动化代码审查，开源项目和组织私有仓库（最多4名协作者）免费，学生和教育机构同样免费
* [codecov.io](https://codecov.io/) — 代码覆盖率工具(SaaS)，开源项目和1个私有仓库免费
* [CodeFactor](https://www.codefactor.io) — Git自动化代码审查。免费版含无限用户、公共仓库和1个私有仓库
* [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具。免费层包含200文件/小时、3次审查/小时和50次对话/小时。开源项目永久免费
* [codescene.io](https://codescene.io/) — 基于开发者代码交互模式优先处理技术债务，可视化团队耦合度等组织因素。开源项目免费
* [CodSpeed](https://codspeed.io) — CI流水线中的自动化性能追踪。通过精准一致的指标在部署前发现性能退化。开源项目永久免费
* [coveralls.io](https://coveralls.io/) — 测试覆盖率报告展示，开源项目免费
* [dareboost](https://dareboost.com) — 每月5次免费网站性能、可访问性和安全性分析报告
* [deepcode.ai](https://www.deepcode.ai) — 基于AI检测代码缺陷/安全漏洞/性能及API问题。实时分析支持Java/C/C++/JavaScript/Python/TypeScript，集成GitHub/BitBucket/GitLab。开源项目和最多30名开发者的私有仓库免费
* [deepscan.io](https://deepscan.io) — JavaScript代码运行时错误高级静态分析，开源项目免费
* [DeepSource](https://deepsource.io/) — 持续分析代码变更，自动修复安全/性能/反模式/风险缺陷/文档/风格问题。原生集成GitHub/GitLab/Bitbucket
* [DiffText](https://difftext.com) — 即时比对两段代码差异。完全免费使用
* [eversql.com](https://www.eversql.com/) — 数据库优化平台，自动获取数据库及SQL查询关键洞察
* [gerrithub.io](https://review.gerrithub.io/) — GitHub仓库的Gerrit代码审查服务
* [gocover.io](https://gocover.io/) — 任何Go语言包的代码覆盖率工具
* [goreportcard.com](https://goreportcard.com/) — Go项目代码质量分析，开源项目免费
* [gtmetrix.com](https://gtmetrix.com/) — 网站优化报告与详细建议
* [holistic.dev](https://holistic.dev/) — PostgreSQL优化静态代码分析工具，自动检测性能/安全/架构问题
* [houndci.com](https://houndci.com/) — GitHub提交的代码质量评论，开源项目免费
* [Moderne.io](https://app.moderne.io) — 自动化源代码重构。支持框架迁移/带修复的代码分析/大规模代码转换，让开发者专注创新而非维护。开源项目免费
* [reviewable.io](https://reviewable.io/) — GitHub仓库代码审查，公共或个人仓库免费
* [parsers.dev](https://parsers.dev/) — 抽象语法树解析器和中间表示编译器即服务
* [scan.coverity.com](https://scan.coverity.com/) — Java/C/C++/C#/JavaScript静态代码分析，开源项目免费
* [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 持续检查平台，开源项目免费
* [semanticdiff.com](https://app.semanticdiff.com/) — 编程语言感知的GitHub PR和提交差异分析，公共仓库免费
* [shields.io](https://shields.io) — 开源项目质量元数据徽章生成
* [sonarcloud.io](https://sonarcloud.io) — 支持Java/JavaScript/C/C++/C#/VB.NET/PHP/Objective-C/Swift/Python/Groovy等语言的自动化源代码分析，开源项目免费
* [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析。开源项目和最多5名协作者的组织免费
* [webceo.com](https://www.webceo.com/) — SEO工具含代码验证和多设备测试
* [zoompf.com](https://zoompf.com/) — 网站性能优化与详细分析

**[⬆️ 返回顶部](#目录)**

## 代码搜索与浏览

  * [libraries.io](https://libraries.io/) — 支持32种不同包管理器的搜索和依赖更新通知，开源项目免费使用
* [Namae](https://namae.dev/) - 在GitHub、Gitlab、Heroku、Netlify等多个平台搜索您的项目名称可用性
* [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源项目免费
* [tickgit.com](https://www.tickgit.com/) — 标记`TODO`注释（及其他标记）以识别需要返工优化的代码区域
* [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，配备强大的代码截图工具（含预设模板）和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成与交付

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint将自动化网页无障碍测试集成到您的开发流程中。开源和教育用途免费。
  * [appcircle.io](https://appcircle.io) — 企业级移动DevOps平台，自动化移动应用的构建、测试和发布流程，实现更快速高效的发布周期。免费版包含每次构建最多30分钟构建时间，每月20次构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — Windows平台的持续交付服务，开源项目免费
  * [LocalOps](https://localops.co/) - 在30分钟内在AWS/GCP/Azure上部署您的应用。在任何云平台上设置标准化的应用环境，内置持续部署自动化和高级可观测性。免费计划允许1个用户和1个应用环境。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内部署应用和基础设施到您的云平台。支持Kubernetes和Lambda环境上的自定义和第三方应用部署。免费层允许5个域名和2个用户的无限制应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 移动应用的CI/CD，支持原生或混合应用。免费版包含每月200次构建，每次构建10分钟时间和2个团队成员。开源项目获得45分钟构建时间，+1并发和无限制团队规模。
  * [buddy.works](https://buddy.works/) — CI/CD服务，免费版包含5个项目和1个并发运行（每月120次执行）
  * [Buildkite](https://buildkite.com) CI流水线免费支持3个用户和每月5000分钟任务时间。测试分析免费开发者层包含每月10万次测试执行，开源项目有更多免费额度。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。20个用户和10个数据库实例以下免费
  * [CircleCI](https://circleci.com/) — 全面的免费计划，包含GitHub、GitLab和BitBucket仓库托管CI/CD服务的所有功能。多种资源类、Docker、Windows、Mac OS、ARM执行器、本地运行器、测试分割、Docker层缓存等高级CI/CD功能。免费版每月6000分钟执行时间，无限协作者，私有项目30个并行任务，开源项目最多80,000分钟免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公开GitHub仓库免费
  * [cirun.io](https://cirun.io) - 公开GitHub仓库免费
  * [codefresh.io](https://codefresh.io) — 终身免费计划：1次构建，1个环境，共享服务器，无限公开仓库
  * [codemagic.io](https://codemagic.io/) - 每月500分钟免费构建时间
  * [codeship.com](https://codeship.com/) — 每月100次私有构建，5个私有项目，开源项目无限制
  * [deploybot.com](https://www.deploybot.com/) — 1个仓库10次部署，开源项目免费
  * [deployhq.com](https://www.deployhq.com/) — 1个项目每日10次部署（每月30分钟构建时间）
  * [drone](https://cloud.drone.io/) - Drone Cloud使开发者能在单一平台上运行跨多种架构（包括x86和Arm，32位和64位）的持续交付流水线
  * [LayerCI](https://layerci.com) — 全栈项目的CI。1个全栈预览环境，5GB内存和3个CPU。
  * [semaphoreci.com](https://semaphoreci.com/) — 开源项目免费，每月100次私有构建
  * [Squash Labs](https://www.squash.io/) — 为每个分支创建VM并通过唯一URL访问您的应用，无限公开和私有仓库，VM大小最多2GB。
  * [styleci.io](https://styleci.io/) — 仅限公开GitHub仓库
  * [Mergify](https://mergify.io) — GitHub的工作流自动化和合并队列 — 公开GitHub仓库免费
  * [Make](https://www.make.com/en) — 工作流自动化工具，通过UI连接应用并自动化工作流。支持多种应用和最流行的API。公开GitHub仓库免费，免费层包含100Mb，1000次操作和15分钟最小间隔。
  * [Shipfox](https://www.shipfox.io/) - 以2倍速度运行您的GitHub Actions，每月3000分钟免费构建时间。
  * [Spacelift](https://spacelift.io/) - 基础设施即代码管理平台。免费计划功能：IaC协作，Terraform模块注册表，ChatOps集成，Open Policy Agent持续资源合规，SAML 2.0单点登录，访问公共工作池：每月最多200分钟
  * [microtica.com](https://microtica.com/) - 包含现成基础设施组件的启动环境，免费在AWS上部署应用并支持生产工作负载。免费层包含1个环境（在您的AWS账户上），2个Kubernetes服务，每月100分钟构建时间和20次部署。
  * [Nx Cloud](https://nx.dev/ci) - Nx Cloud通过远程缓存、跨机器任务分发甚至自动化分割端到端测试运行等功能加速您的monorepo在CI上的表现。免费计划支持最多30个贡献者，包含150,000积分。
  * [blacksmith](https://www.blacksmith.sh/) - GitHub Actions的托管性能运行器，每月提供3000分钟免费时间，无需信用卡。
  * [Terramate](https://terramate.io/) - Terramate是基础设施即代码（IaC）工具如Terraform、OpenTofu和Terragrunt的编排和管理平台。最多2个用户免费，包含所有功能。
  * [Terrateam](https://terrateam.io) - GitOps优先的Terraform自动化，通过拉取请求驱动的工作流，自托管运行器实现的项目隔离，以及有序操作的分层运行。最多3个用户免费。

**[⬆️ 返回顶部](#目录)**

## 测试工具

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）及远程运行器（Sauce Labs、Browser Stack）集成。开源项目免费使用，个人用户每周有限检查点免费。
* [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器中直接测试您的Android和iOS应用。免费套餐包括每月30分钟的两个并发会话，无应用大小限制。
* [Apptim](https://apptim.com) — 一款移动测试工具，使不具备性能工程技能的人员也能评估应用的性能和用户体验（UX）。使用自有设备的桌面版100%免费，iOS和Android上测试次数不限。
* [Argos](https://argos-ci.com) - 面向开发者的开源视觉测试工具。项目数量不限，每月5,000张截图。开源项目免费。
* [Bencher](https://bencher.dev/) - 一套持续基准测试工具，用于捕捉CI性能回归。所有公共项目免费。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) - 轻量级Web应用测试自动化工具，易于学习且无需编码。可在自有计算机上无限次免费运行测试。云监控和CI/CD集成需额外月费。
* [Checkly](https://checklyhq.com) - 面向现代DevOps的代码优先合成监控。以传统供应商一小部分的价格监控API和应用。基于"监控即代码"工作流和Playwright。开发者享有慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展，测试网站是否符合50多项SEO、速度和安全性最佳实践。小型网站免费。
* [CORS-Tester](https://cors-error.dev/cors-tester/) - 开发者和API测试人员免费工具，检查API是否针对给定域启用CORS并识别差距。获取可操作见解。
* [cypress.io](https://www.cypress.io/) - 快速、简单且可靠的浏览器内测试。Cypress测试运行器始终免费开源，无限制。Cypress仪表板对开源项目免费，最多5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) - 在浏览器中创建AI驱动的Cypress测试/POM模型。除AI部分外开源。每月免费创建5次测试，含自愈脚本、邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并回放浏览器中的所有操作步骤并生成脚本，免费版功能较少
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具可安全地向系统注入故障，在导致客户问题前发现弱点。Gremlin Free支持对最多5台主机或容器执行关机和CPU攻击。
* [gridlastic.com](https://www.gridlastic.com/) — Selenium Grid测试，免费套餐含最多4个并发节点/10次网格启动/4,000测试分钟每月
* [katalon.com](https://katalon.com) - 提供测试平台，适合不同测试成熟度的各种规模团队，包括Katalon Studio、TestOps（含免费视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。记录API调用可生成API端到端测试（KTests）及模拟或存根（KMocks）。开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过最优测试套件并行化加速测试。在并行CI节点上拆分Ruby、JavaScript测试以节省时间。免费套餐支持10分钟测试文件，开源项目无限免费。
* [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图及基于Selenium和Cypress的自动化浏览器测试，[开源项目免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool)
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。免费每月模拟最多50个并发用户60分钟。
* [lost-pixel.com](https://lost-pixel.com) - 为Storybook、Ladle、Histoire故事和Web应用提供全面的视觉回归测试。团队成员不限，开源完全免费，每月7,000快照。
* [octomind.dev](https://www.octomind.dev/) - 使用AI辅助测试用例生成自动创建、运行和维护Playwright UI测试
* [pagegym.com](https://pagegym.com) - 加载行为和页面速度分析与优化工具。免费套餐每日10次测试、每周5次实验、每月最大15GB数据摄入。
* [percy.io](https://percy.io) - 为任何Web应用、静态站点、风格指南或组件库添加视觉测试。团队成员不限，演示应用和项目不限，每月5,000快照。
* [qase.io](https://qase.io) - 面向开发和QA团队的测试管理系统。管理测试用例、组合测试运行、执行测试、跟踪缺陷并衡量影响。免费层包含所有核心功能，500MB附件存储和最多3名用户。
* [Repeato](https://repeato.app/) 基于计算机视觉和AI的无代码移动应用测试自动化工具。支持原生应用、Flutter、React-Native、Web、Ionic等多种框架。免费套餐限iOS和Android各10次测试，但包含付费计划的大部分功能，包括无限测试运行。
* [Requestly](https://requestly.com/) 开源Chrome扩展，用于拦截、重定向和模拟HTTP请求。含[调试器](https://requestly.com/products/web-debugger/)、[模拟服务器](https://requestly.com/products/mock-server/)、[API客户端](https://requestly.com/products/api-client/)和[会话记录](https://requestly.com/products/session-book/)。重定向URL、修改HTTP头、模拟API、注入自定义JS、修改GraphQL请求、生成模拟API端点、记录含网络和控制台日志的会话。免费套餐最多10条规则。开源免费。
* [seotest.me](https://seotest.me/) — 免费页面SEO网站测试工具。每日10次免费网站爬取。提供实用SEO学习资源和改进任何技术网站页面SEO结果的建议。
* [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen但用于跨浏览器测试。UI-licious让您像编写用户故事一样编写测试，并提供免费平台UI-licious Snippets，无需注册即可在Chrome上无限次运行测试，每次最多3分钟。发现错误？可复制测试唯一URL向开发者展示如何复现。
* [SSR (服务器端渲染) 检查器](https://www.crawlably.com/ssr-checker/) - 通过视觉比较页面服务器渲染版本与常规版本，检查任何URL的SSR（服务器端渲染）。
* [TestCollab](https://testcollab.com) - 用户友好的测试管理软件，免费套餐包含Jira集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1GB文件存储。
* [testingbot.com](https://testingbot.com/) — Selenium浏览器和设备测试，[开源项目免费](https://testingbot.com/open-source)

  * [tesults.com](https://www.tesults.com) — 测试结果报告与测试用例管理平台。支持主流测试框架集成。开源软件开发者、个人用户、教育机构及初创小团队可申请基础免费项目之外的折扣或免费方案。
* [UseWebhook.com](https://usewebhook.com) - 通过浏览器捕获并检查webhook请求。支持转发至本地环境或从历史记录重放。完全免费使用。
* [Vaadin](https://vaadin.com) — 使用Java或TypeScript构建可扩展的用户界面，通过集成工具链、组件和设计系统加速迭代、优化设计并简化开发流程。无限项目数量且享受五年免费维护期。
* [websitepulse.com](https://www.websitepulse.com/tools/) — 提供多种免费网络及服务器工具集。
* [webhook-test.com](https://webhook-test.com) - 在集成过程中通过专属URL调试和检查webhook及HTTP请求。完全免费，可创建无限URL并获取建议报告。
* [webhook.site](https://webhook.site) - 通过自定义URL验证webhook、外发HTTP请求或电子邮件。临时URL和邮箱地址永久免费。
* [webhookbeam.com](https://webhookbeam.com) - 配置webhook并通过推送通知和邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## 安全与公钥基础设施

  * [aikido.dev](https://www.aikido.dev) — 一体化应用安全平台，涵盖SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件、容器扫描、EOL等。免费计划包含2个用户、10个代码库扫描、1个云账户、2个容器和1个域名扫描
* [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受感染的系统
* [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站及API反垃圾邮件过滤器。免费计划每个域名每天200次请求
* [atomist.com](https://atomist.com/) — 自动化各类开发任务的快捷方式，目前处于测试阶段
* [cloudsploit.com](https://cloudsploit.com/) — AWS安全与合规性审计监控平台
* [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 针对公有云基础设施的高置信度入侵指标(IOC)，部分数据可在GitHub获取(https://github.com/unknownhad/AWSAttacks)，完整列表通过API提供
* [CodeNotary.io](https://www.codenotary.io/) — 提供不可篡改存证的开源平台，可对代码、文件、目录或容器进行公证
* [crypteron.com](https://www.crypteron.com/) — 面向.NET和Java应用的云原生安全平台，防止数据泄露
* [CyberChef](https://gchq.github.io/CyberChef/) — 无需复杂工具或编程语言即可分析编解码数据的简易Web应用，堪称密码学瑞士军刀。所有功能免费无限制，支持开源自托管
* [DAS](https://signup.styra.com/) — Styra DAS免费版，提供Open Policy Agent(OPA)授权的全生命周期策略管理
* [Datree](https://www.datree.io/) — 开源CLI工具，通过检查Kubernetes清单和Helm图表是否符合最佳实践及企业策略来防止配置错误
* [Dependabot](https://dependabot.com/) 自动更新Ruby/JavaScript/Python/PHP/Elixir/Rust/Java(.NET/Go/Elm/Docker/Terraform/Git子模块/GitHub Actions)的依赖项
* [DJ Checkup](https://djcheckup.com) — Django站点安全漏洞扫描工具（基于Pony Checkup开源项目）
* [Doppler](https://doppler.com/) — 支持同步到多云的通用密钥管理器，免费版支持5个用户及基础权限控制
* [Dotenv](https://dotenv.org/) — 安全快速地同步.env文件，杜绝通过Slack/邮件等不安全渠道共享，免费支持3名团队成员
* [GitGuardian](https://www.gitguardian.com) — 自动检测并修复源代码中的敏感信息，可扫描350+种密钥类型，25人以下团队免费
* [Have I been pwned?](https://haveibeenpwned.com) — 数据泄露信息查询REST API
* [hostedscan.com](https://hostedscan.com) — 每月10次免费Web应用/服务器/网络漏洞扫描
* [Infisical](https://infisical.com/) — 开源密钥管理平台，支持从本地开发到生产环境的全流程管理，5名开发者内免费
* [Internet.nl](https://internet.nl) — 测试IPv6/DNSSEC/HTTPS/DMARC/STARTTLS/DANE等现代互联网标准
* [keychest.net](https://keychest.net) — SSL证书到期管理及购买平台，集成证书透明度数据库
* [letsencrypt.org](https://letsencrypt.org/) — 受主流浏览器信任的免费SSL证书颁发机构
* [meterian.io](https://www.meterian.io/) — 监控Java/JavaScript/.NET/Scala/Ruby/NodeJS项目的依赖项漏洞，1个私有项目免费，开源项目不限量
* [Mozilla Observatory](https://observatory.mozilla.org/) — 检测并修复网站安全漏洞
* [opswat.com](https://www.opswat.com/) — 计算机/设备/应用/配置的安全监控，免费支持25用户及30天历史数据
* [openapi.security](https://openapi.security/) — 无需注册即可快速检测OpenAPI/Swagger接口安全性的工具
* [pixee.ai](https://pixee.ai) — 免费GitHub安全机器人，自动提交PR修复Java代码漏洞（即将支持多语言）
* [pyup.io](https://pyup.io) — Python依赖项安全监控与自动更新，1个私有项目免费，开源项目不限量
* [qualys.com](https://www.qualys.com/community-edition) — 检测Web应用漏洞及OWASP风险
* [report-uri.io](https://report-uri.io/) — CSP与HPKP违规报告平台
* [seclookup.com](https://www.seclookup.com/) — 提供5万次免费域名威胁情报查询[点此获取](https://account.seclookup.com/)，可增强SIEM威胁检测能力
* [snyk.io](https://snyk.io) — 开源项目不限次漏洞检测与修复，私有项目每月限200次
* [Socket](https://socket.dev) — 为个人开发者/小团队/开源项目提供免费供应链安全防护，包含70+风险指标的检测能力
* [ssllabs.com](https://www.ssllabs.com/ssltest/) — SSL服务器配置深度分析
* [SOOS](https://soos.io) — 开源项目不限次SCA扫描，在发布前发现并修复安全威胁
* [StackHawk](https://www.stackhawk.com/) — 单应用不限次自动化安全扫描，在部署前发现漏洞
* [Sucuri SiteCheck](https://sitecheck.sucuri.net) — 免费网站安全检测与恶意软件扫描
* [Protectumus](https://protectumus.com) — PHP网站的免费安全检测、防病毒及WAF防火墙，注册用户可获邮件通知
* [TestTLS.com](https://testtls.com) — 不限HTTPS的SSL/TLS服务安全测试
* [threatconnect.com](https://threatconnect.com) — 威胁情报分析平台，3用户内免费
* [tinfoilsecurity.com](https://www.tinfoilsecurity.com/) — 自动化漏洞扫描，免费版每周XSS检测
* [Ubiq Security](https://ubiqsecurity.com/) — 三行代码实现数据加密/解密，每月100万次操作内免费
* [Virgil Security](https://virgilsecurity.com/) — 端到端加密/数据库保护/IoT安全工具，250用户内免费
* [Vulert](https://vulert.com) — 无需安装或访问代码即可持续监控开源依赖项漏洞，开源项目免费

  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 免费搜索2000万个公开GitHub仓库、代码片段、问题和评论中暴露的敏感信息
* [Project Gatekeeper](https://gatekeeper.binarybiology.top/) - 一站式SSL工具包，提供私钥&CSR生成器、SSL证书解码器、证书匹配器和SSL证书订购等功能。用户可通过CNAME记录（而非TXT记录）从Let's Encrypt、Google Trust和BuyPass获取免费SSL证书。

**[⬆️ 返回顶部](#目录)**

## 认证授权与用户管理

  * [Aserto](https://www.aserto.com) - 为应用和API提供细粒度授权服务。免费额度包含1000月活用户(MAU)和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录(SSO)、多因素认证(MFA)、无密码认证等功能。提供前后端SDK。免费额度包含1000月活用户和5个身份提供商。
* [Auth0](https://auth0.com/) — 托管式单点登录服务。免费计划包含25,000月活用户、无限社交账号连接、自定义域名等功能。
* [Authgear](https://www.authgear.com) - 快速为应用集成无密码登录、OTP验证、双因素认证(2FA)和单点登录(SSO)。包含完整前端组件。免费额度5000月活用户。
* [Authress](https://authress.io/) — 认证登录与访问控制服务，支持无限身份提供商。集成Facebook、Google、Twitter等平台。前1000次API调用免费。
* [Authy](https://authy.com) - 多设备双因素认证(2FA)服务，支持备份功能。可替代Google Authenticator。免费支持100次成功认证。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，支持策略编写、测试和部署。细粒度访问控制，免费额度100月活跃主体。
* [Clerk](https://clerk.com) — 用户管理系统，提供认证、2FA/MFA功能，预置登录/注册/个人资料等UI组件。免费额度10,000月活用户。
* [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak身份与访问管理即服务。免费额度100用户和1个域(realm)。
* [Corbado](https://www.corbado.com/) — 为新老应用添加优先通行密钥认证。无限月活用户免费。
* [Descope](https://www.descope.com/) — 高度可定制的认证流程，提供无代码和API/SDK两种方式。免费7500活跃用户/月，50个租户（含5个SAML/SSO租户）。
* [duo.com](https://duo.com/) — 网站/应用双因素认证(2FA)服务。免费支持10个用户，包含所有认证方式、无限集成和硬件令牌。
* [Kinde](https://kinde.com/) - 简单强大的认证系统，几分钟即可集成。免费额度7500月活用户。
* [logintc.com](https://www.logintc.com/) — 基于推送通知的双因素认证(2FA)，免费支持10个用户，适用于VPN、网站和SSH。
* [MojoAuth](https://mojoauth.com/) - 快速为Web/移动应用实现无密码认证，最快仅需几分钟。
* [Okta](https://developer.okta.com/signup/) — 用户管理与认证授权服务。免费额度100月活用户。
* [onelogin.com](https://www.onelogin.com/) — 身份即服务(IDaaS)，单点登录身份提供商，免费支持3个企业应用和5个个人应用，用户数量不限。
* [Ory](https://ory.sh/) - 认证/授权/OAuth2.0/零信任安全管理平台。永久免费开发者账户包含所有安全功能，无限团队成员，200日活用户和2.5万/月权限检查。
* [Permit.io](https://permit.io) - 授权即服务平台，支持RBAC/ABAC/ReBAC权限模型，提供实时更新和无代码策略UI。免费额度1000月活用户。
* [Phase Two](https://phasetwo.io) - Keycloak开源身份与访问管理服务。免费额度1000用户和10个SSO连接，使用包含[组织管理](https://phasetwo.io/product/organizations/)扩展的增强版Keycloak容器。
* [SSOJet](https://ssojet.com/) - 无需重构现有认证系统即可添加企业SSO。免费计划包含无限月活用户、无限组织、2个SSO和2个SCIM连接。
* [Stytch](https://www.stytch.com/) - 提供认证与反欺诈API/SDK的一体化平台。免费额度1万月活用户、无限组织、5个SSO/SCIM连接和1000个M2M令牌。
* [Stack Auth](https://stack-auth.com) — 开箱即用的开源认证方案，5分钟快速上手。可免费自托管，SaaS版提供1万免费月活用户。
* [SuperTokens](https://supertokens.com/) - 原生集成到应用中的开源用户认证方案，在控制用户体验的同时快速实现功能。免费额度5000月活用户。
* [Warrant](https://warrant.dev/) — 企业级授权与访问控制托管服务。免费层包含100万次月度API请求和1000条授权规则。
* [ZITADEL Cloud](https://zitadel.com) — 开箱即用的用户与访问管理系统，支持多租户(B2B)场景。免费额度2.5万次认证请求，包含OTP/无密码登录/策略等完整安全功能。
* [PropelAuth](https://propelauth.com) — 通过几行代码即可支持任意规模企业客户。免费额度200用户和1万封事务邮件（含"Powered by PropelAuth"水印）。
* [Logto](https://logto.io/) - 为产品开发、保护和管理用户身份，涵盖认证与授权功能。免费额度5000月活用户，提供开源自托管选项。
* [WorkOS](https://workos.com/) - 免费用户管理与认证服务，支持100万月活用户。包含邮箱密码登录、社交账号认证、Magic Auth、MFA等功能。

**[⬆️ 返回顶部](#目录)**

## 移动应用分发与反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用测试首选平台。免费方案包含：一个应用、分析功能、无限版本与安装、以及反馈收集功能。
* [Loadly](https://loadly.io) - iOS和Android测试版应用分发服务，提供完全免费的无限制下载、高速下载和无限制上传功能。
* [Diawi](https://www.diawi.com) - 直接将iOS和Android应用部署到设备。免费方案包含：应用上传、密码保护链接、1天有效期、10次安装。
* [InstallOnAir](https://www.installonair.com) - 通过无线方式分发iOS和Android应用。免费方案包含：无限上传、私有链接、访客2天有效期、注册用户60天有效期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试的移动应用分发服务。免费方案包含：1个应用项目、3个应用版本、500MB存储空间、每月100次应用安装。
* [Appho.st](https://appho.st) - 移动应用托管平台。免费方案包含：5个应用、每月50次下载、最大文件大小100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在IaaS上部署预配置应用。免费管理1个AWS微型实例
* [Esper](https://esper.io) — 面向Android设备的MDM和MAM解决方案，含DevOps功能。免费支持100台设备，包含1个用户许可证和25MB应用存储空间
* [jamf.com](https://www.jamf.com/) — iPad、iPhone和Mac设备管理，免费支持3台设备
* [Miradore](https://miradore.com) — 设备管理服务。实时掌握设备动态，免费管理无限设备。免费版提供基础功能
* [moss.sh](https://moss.sh) - 帮助开发者部署和管理Web应用及服务器。每月免费25次git部署
* [runcloud.io](https://runcloud.io/) - 专注于PHP项目的服务器管理。免费支持1台服务器
* [ploi.io](https://ploi.io/) - 简易服务器与站点管理工具。免费支持1台服务器
* [xcloud.host](https://xcloud.host) — 带友好界面的服务器管理与部署平台。提供单台服务器的免费套餐
* [serveravatar.com](https://serveravatar.com) — 通过自动化配置管理PHP服务器。免费支持1台服务器

**[⬆️ 返回顶部](#目录)**

## 消息与流处理

  * [Ably](https://www.ably.com/) - 具备在线状态、持久化和消息必达的实时消息服务。免费套餐包含每月300万条消息、100个峰值连接数和100个峰值频道数
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ托管服务。Little Lemur套餐：每月最多100万条消息、20个并发连接、100个队列、1万条排队消息、跨可用区的多节点部署
* [courier.com](https://www.courier.com/) - 统一推送API（应用内消息/邮件/聊天/SMS等），含模板管理等功能。免费套餐包含每月1万条消息
* [Engage](https://engage.so/) - SaaS客户互动与自动化工具（邮件/推送/SMS/产品导览/横幅等）。每月最多1,000名活跃用户免费
* [engagespot.co](https://engagespot.co/) - 开发者多通道通知基础设施，内置应用内收件箱和无代码模板编辑器。免费套餐含每月1万条消息
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 云原生物联网消息代理，永久免费连接100台设备（无需信用卡）
* [knock.app](https://knock.app) - 开发者通知基础设施，单次API调用支持应用内/邮件/SMS/Slack/推送等多通道。免费套餐含每月1万条消息
* [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟为任何软件添加用户通知。免费套餐含每月1万条通知+100条SMS和自动语音呼叫
* [Novu.co](https://novu.co) - 开源通知基础设施，统一管理邮件/SMS/站内信/推送等通道。免费套餐含每月3万条通知（保留90天）
* [pusher.com](https://pusher.com/) - 实时消息服务，免费支持100个同时连接和每日20万条消息
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务，免费支持20个同时连接和每日10万次事件
* [synadia.com](https://synadia.com/ngs) - NATS.io托管服务（全球/AWS/GCP/Azure），永久免费：4KB消息大小、50个活跃连接、每月5GB数据
* [pubnub.com](https://www.pubnub.com/) - Swift/Kotlin/React消息服务，每月100万次事务（单事务可含多条消息）
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC的视频通信API（SFU/MCU），支持实时数据注入/视频布局/录制，含[开发者免费层](https://apiservice.eyeson.com/api-pricing)每月1,000分钟会议时长
* [webpushr](https://www.webpushr.com/) - 网页推送通知，免费支持1万订阅用户（推送次数不限）
* [httpSMS](https://httpsms.com) - 使用Android手机作为SMS网关收发短信，每月免费200条
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可扩展的安全Serverless MQTT代理，永久免费100万会话分钟/月（无需信用卡）
* [Pocket Alert](https://pocketalert.app) - 向iOS/Android设备发送推送通知，免费套餐：每日50条消息（限1设备1应用）
* [SuprSend](https://www.suprsend.com/) - 通知基础设施API，免费套餐含每月1万条通知（支持摘要/批量/多通道/租户/广播等流程节点）
* [SMSG](https://sms-gate.app) - Android™短信云网关服务，完全免费（建议每日超1万条时通知以保障服务质量）

**[⬆️ 返回顶部](#目录)**

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日免费10万条日志，保留24小时
* [logentries.com](https://logentries.com/) — 每月免费5GB，保留7天
* [loggly.com](https://www.loggly.com/) — 单用户免费，每日200MB，保留7天
* [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费版提供50GB存储，保留15天，支持7天内的日志搜索。
* [sumologic.com](https://www.sumologic.com/) — 每日免费500MB，保留7天
* [log.dog](https://log.dog/) — LogDog是一款远程调试/日志记录SDK（支持iOS和Android），提供Web界面。实时捕获所有日志、请求和事件，并支持拦截功能。每月免费100MB日志额度。
* [logflare.app](https://logflare.app/) — 每个应用每月免费12,960,000条日志，保留3天
* [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月免费1GB，保留3天。
* [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月免费1,000条用户活动日志，保留1个月，最多支持5个项目。
* [openobserve.ai](https://openobserve.ai/) - 每月免费200GB日志摄入，保留15天

**[⬆️ 返回顶部](#目录)**

## 翻译管理

  * [AutoLocalise.com](https://www.autolocalise.com/) — 无需管理翻译文件即可即时本地化。每月免费10,000字符，支持无限语言
* [crowdin.com](https://crowdin.com/) — 开源项目无限量项目、字符串和协作者
* [gitlocalize.com](https://gitlocalize.com) - 私有和公共仓库均免费且无限制
* [Lecto](https://lecto.ai/) - 含免费层的机器翻译API（30次免费请求，每次请求1000字符）。与Loco Translate Wordpress插件集成
* [lingohub.com](https://lingohub.com/) — 最多3用户免费，开源项目永久免费
* [localazy.com](https://localazy.com) - 1000条源语言字符串免费，无限语言，无限贡献者，初创企业和开源优惠
* [Localeum](https://localeum.com) - 1000条字符串免费，单用户，无限语言，无限项目
* [Localit](https://localit.io) – 快速、开发者友好的本地化平台，无缝免费集成GitHub/GitLab，AI辅助与人工翻译，慷慨的免费计划（含2用户、500键值和无限项目）
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
* [weblate.org](https://weblate.org/) — 自由项目免费（免费层最多10,000条源字符串），无限自托管本地部署
* [Free PO editor](https://pofile.net/free-po-editor) — 全员免费
* [Lingo.dev](https://lingo.dev) – 开源AI驱动的CLI工具，用于Web和移动端本地化。自带LLM，或通过Lingo.dev托管引擎每月免费使用10,000词

**[⬆️ 返回顶部](#目录)**

## 监控服务

  * [alerty.ai](https://www.alerty.ai) - 免费的前端、后端、数据库等应用性能监控服务 + 免费代理运行
* [appdynamics.com](https://www.appdynamics.com/) — 24小时指标免费，应用性能管理代理限制为一个Java、一个.NET、一个PHP和一个Node.js
* [appneta.com](https://www.appneta.com/) — 免费提供1小时数据保留
* [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试任务控制台。小流量使用免费（64MB日志）。
* [assertible.com](https://assertible.com) — 自动化API测试与监控。团队和个人免费计划。
* [Better Stack](https://betterstack.com/better-uptime) - 在一个产品中集成可用性监控、事件管理、值班调度/告警和状态页面。免费计划包含10个监控器，3分钟检查频率和状态页面。
* [bleemeo.com](https://bleemeo.com) - 免费支持3台服务器，5个可用性监控器，无限用户、仪表板和告警规则。
* [checklyhq.com](https://checklyhq.com) - 面向开发者的开源端到端/综合监控与深度API监控。免费计划包含1个用户和1万次API及网络/1.5千次浏览器检查运行。
* [cloudsploit.com](https://cloudsploit.com) — AWS安全与配置监控。免费：无限按需扫描、无限用户、无限存储账户。订阅：自动化扫描、API访问等。
* [Core Web Vitals History](https://punits.dev/core-web-vitals-historical/) - 查询URL或网站的核心网页指标历史记录。
* [cronitor.io](https://cronitor.io/) - 针对定时任务、网站、API等的性能洞察与可用性监控。免费层包含5个监控器。
* [datadoghq.com](https://www.datadoghq.com/) — 最多5个节点免费
* [deadmanssnitch.com](https://deadmanssnitch.com/) — 定时任务监控。一个免费监控器，推荐他人注册可获得更多
* [downtimemonkey.com](https://downtimemonkey.com/) — 60个可用性监控器，5分钟间隔。支持邮件、Slack告警。
* [economize.cloud](https://economize.cloud) — Economize通过组织云资源来优化和报告成本，帮助解密云基础设施费用。每月在Google云平台上花费不超过5,000美元免费。
* [elastic.co](https://www.elastic.co/solutions/apm) — 为JS开发者提供即时性能洞察。24小时数据保留免费
* [fivenines.io](https://fivenines.io/) — 实时仪表板和告警的Linux服务器监控 — 永久免费支持最多5台监控服务器，60秒间隔。无需信用卡。
* [Grafana Cloud](https://grafana.com/products/cloud/) - Grafana Cloud是一个可组合的观测平台，将指标和日志与Grafana集成。免费：3个用户，10个仪表板，100个告警，Prometheus和Graphite中的指标存储（10,000系列，14天保留），Loki中的日志存储（50GB日志，14天保留）
* [healthchecks.io](https://healthchecks.io) — 监控您的定时任务和后台任务。最多20个检查免费。
* [incidenthub.cloud](https://incidenthub.cloud/) — 云和SaaS状态页面聚合器 - 20个监控器和2个通知渠道（Slack和Discord）永久免费。
* [inspector.dev](https://www.inspector.dev) - 不到一分钟即可获得完整的实时监控仪表板，永久免费层。
* [instatus.com](https://instatus.com) - 10秒内获得美观的状态页面。永久免费，无限订阅和团队。
* [instrumentalapp.com](https://instrumentalapp.com) - 美观易用的应用和服务器监控，免费提供最多500个指标和3小时数据可见性
* [keychest.net/speedtest](https://keychest.net/speedtest) - 针对Digital Ocean的独立速度测试和TLS握手延迟测试
* [letsmonitor.org](https://letsmonitor.org) - SSL监控，最多5个监控器免费
* [linkok.com](https://linkok.com) - 在线坏链检查器，小型网站最多100页免费，开源项目完全免费。
* [loader.io](https://loader.io/) — 有限制的免费负载测试工具
* [Middleware.io](https://middleware.io/) - Middleware观测平台提供对应用和堆栈的完整可见性，以便您可以大规模监控和诊断问题。他们为开发者社区提供永久免费计划，支持最多100万日志事件的日志监控，以及最多2台主机的基础设施监控和APM。
* [MonitorMonk](https://monitormonk.com) - 简约的可用性监控与美观的状态页面。永久免费计划提供对10个网站或API端点的HTTPS、关键词、SSL和响应时间监控，以及2个仪表板/状态页面。
* [netdata.cloud](https://www.netdata.cloud/) — Netdata是一个用于收集实时指标的开源工具。这是一个不断发展的产品，也可以在GitHub上找到！
* [newrelic.com](https://www.newrelic.com) — New Relic观测平台旨在帮助工程师创建更完美的软件。从单体应用到无服务器，您可以对所有内容进行检测，然后分析、排查和优化整个软件堆栈。免费层提供每月100GB的免费数据摄入，一个免费全访问用户和无限免费主要用户。
* [nixstats.com](https://nixstats.com) - 一台服务器免费。支持邮件通知、公共状态页面、60秒间隔等。
* [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot提供网站和API的可用性监控，定时任务和计划任务的监控。还提供状态页面。前五个检查3分钟间隔免费。免费层通过Slack、Discord和邮件发送告警。
* [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否被中国长城防火墙屏蔽。通过比较中国和美国服务器检测到的DNS结果和ASN信息来识别DNS污染。
* [opsgenie.com](https://www.opsgenie.com/) — 强大的告警和值班管理，用于运营始终在线的服务。最多5个用户免费。
* [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括告警、强大的可视化功能和基本报告。最多100个传感器免费。
* [pagecrawl.io](https://pagecrawl.io/) - 监控网站变化，最多6个监控器每日检查免费。
* [pagerly.io](https://pagerly.io/) - 在Slack上管理值班（与Pagerduty、OpsGenie集成）。最多1个团队免费（一个团队指一个值班）
* [pageradar.io](https://pageradar.io/) — 监控网站的核心网页指标、SEO变化和可用性。免费计划包含5个URL、每日核心网页指标监控、10个HTML/SEO变化监控器、167个国家联盟链接监控和邮件告警。
* [pagertree.com](https://pagertree.com/) - 简单的告警和值班管理界面。最多5个用户免费。
* [phare.io](https://phare.io/) - 可用性监控，无限项目和无限状态页面的10万次事件免费。
* [pingbreak.com](https://pingbreak.com/) — 现代可用性监控服务。检查无限URL并通过Discord、Slack或邮件获取停机通知。
* [Pingmeter.com](https://pingmeter.com/) - 5个可用性监控器，10分钟间隔。监控SSH、HTTP、HTTPS和任何自定义TCP端口。
* [pingpong.one](https://pingpong.one/) — 带监控的高级状态页面平台。免费层包含一个可自定义的公共状态页面，带SSL子域名。开源项目和非营利组织免费提供专业计划。
* [Pulsetic](https://pulsetic.com) - 10个监控器，6个月的历史可用性/日志，无限状态页面和自定义域名包含！永久免费且无限邮件告警。无需信用卡。

  * [sematext.com](https://sematext.com/) — 24小时指标免费，无限服务器，10个自定义指标，50万自定义指标数据点，无限仪表盘和用户等
* [Simple Observability](https://simpleobservability.com) — 统一平台提供强大的服务器监控（指标与日志），零配置复杂度。单台服务器免费
* [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron任务和SSL证书监控，每类5个免费监测器
* [sitesure.net](https://sitesure.net) - 网站与Cron任务监控 - 2个免费监测器
* [skylight.io](https://www.skylight.io/) — 前10万次请求免费（仅限Rails）
* [Servervana](https://servervana.com) - 支持大型项目和团队的高级运行时间监控，提供HTTP监控、浏览器监控、DNS监控、域名监控、状态页等。免费版含10个HTTP监测器、1个DNS监测器和1个状态页
* [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检测Ping、DNS等
* [Squadcast.com](https://squadcast.com) - 端到端事件管理软件，助力实践SRE最佳实践。永久免费计划支持最多10名用户
* [stathat.com](https://www.stathat.com/) — 免费开始使用10项统计指标，无期限限制
* [statuscake.com](https://www.statuscake.com/) — 网站监控，无限测试但有功能限制
* [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监测器
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时间监控、DNS与域名监控。免费监控10台服务器、10项运行时间和10个域名
* [syagent.com](https://syagent.com/) — 非商业免费服务器监控服务，含告警与指标
* [thousandeyes.com](https://www.thousandeyes.com/) — 网络与用户体验监控。免费提供3个监测位置和20项主流网络服务数据源
* [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监测器（5分钟间隔）和可定制状态页（含商业用途）。通过邮件和Telegram享受无限实时通知。无需信用卡即可开始
* [uptimetoolbox.com](https://uptimetoolbox.com/) — 免费监控5个网站，60秒间隔，公开状态页
* [zenduty.com](https://www.zenduty.com/) — 面向网络运维、站点可靠性工程和DevOps团队的端到端事件管理、告警、值班管理与响应协调平台。最多5名用户免费
* [RoboMiri.com](https://robomiri.com/) - 稳定运行时间监控，支持Cron任务、关键词、网站、端口、Ping等多种监测类型。25个免费监测器（3分钟间隔），通过电话、短信、邮件和Webhook发送告警
* [Wachete](https://www.wachete.com) - 监控5个页面，每24小时检查一次
* [Xitoring.com](https://xitoring.com/) — 运行时间监控：20个免费；Linux/Windows服务器监控：5个免费；状态页：1个免费 - 含移动应用、多通知渠道等丰富功能

**[⬆️ 返回顶部](#目录)**

## 崩溃与异常处理

  * [CatchJS.com](https://catchjs.com/) - 提供带截图和点击轨迹的JavaScript错误追踪服务。开源项目免费使用。
* [Bugsink](https://www.bugsink.com/) — 兼容Sentry-SDK的错误追踪平台。每月5,000次错误免费额度，自托管可无限使用。
* [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月2,000次错误免费额度
* [elmah.io](https://elmah.io/) — 为Web开发者提供的错误日志和运行状态监控服务。开源项目可免费使用Small Business订阅套餐。
* [Embrace](https://embrace.io/) — 移动应用监控平台。小型团队每年100万用户会话内免费使用。
* [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等服务。每月3,000次事件/1用户免费。开源且支持自托管无限使用。
* [GlitchTip](https://glitchtip.com/) — 简洁的开源错误追踪系统。兼容开源版Sentry SDK。每月1,000次事件免费，自托管无限制。
* [honeybadger.io](https://www.honeybadger.io) - 异常、运行状态和定时任务监控。小型团队和开源项目每月12,000次错误免费。
* [memfault.com](https://memfault.com) — 云端设备可观测性与调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备可免费监控100台设备。
* [rollbar.com](https://rollbar.com/) — 异常与错误监控，免费套餐含每月5,000次错误、不限用户数、30天数据保留
* [sentry.io](https://sentry.io/) — 实时追踪应用异常，提供小型免费套餐。每月5,000次错误/1用户免费，自托管无限使用
* [Axiom](https://axiom.co/) — 存储0.5TB日志并保留30天。含Vercel等平台集成及支持邮件/Discord通知的高级数据查询功能。
* [Semaphr](https://semaphr.com) — 移动应用一站式免费紧急开关解决方案。
* [Jam](https://jam.dev) - 开发者友好的一键式错误报告工具。免费套餐不限报告数量。
* [Whitespace](https://whitespace.dev) – 浏览器内一键生成错误报告。个人用户免费套餐不限录制次数。

**[⬆️ 返回顶部](#目录)**

## 搜索服务

  * [algolia.com](https://www.algolia.com/) — 托管搜索解决方案，具备拼写容错、相关性排序和UI组件库，可轻松构建搜索体验。免费"Build"套餐包含100万份文档和每月1万次搜索。还提供免费的[开发者文档搜索服务](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 一体化搜索栏服务，基于网页的UI组件/插件，允许用户在产品内搜索内容、导航、功能等，提升功能可发现性。免费版支持最多1,000名月活跃用户，不限指令数量。
  * [Orama Cloud](https://orama.com/pricing) — 免费3个索引，每个索引10万份文档，不限全文/向量/混合搜索次数，60天数据分析
  * [searchly.com](http://www.searchly.com/) — 免费2个索引和20MB存储空间
  * [easysitesearch.com](https://easysitesearch.com/) — 搜索组件和API，支持基于网络爬虫的自动索引。免费版不限搜索次数，最多支持50个子页面。

**[⬆️ 返回顶部](#目录)**

## 教育与职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供数据分析、信息安全、Web开发等领域的免费课程和认证
* [The Odin Project](https://www.theodinproject.com/) - 专注于JavaScript和Ruby的Web开发免费开源课程平台
* [专业简历模板免费编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量ATS优化的专业简历模板，可克隆、完整编辑并下载
* [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业专家提供的免费短期课程，1小时内掌握最新生成式AI工具实操技巧
* [LabEx](https://labex.io) - 通过交互式实验和真实项目学习Linux、DevOps、网络安全、编程、数据科学等技能
* [Roadmap.sh](https://roadmap.sh) - 涵盖区块链到UX设计等全领域开发技能的免费学习路线图
* [思科网络学院Skills for All](https://skillsforall.com/) - 提供网络安全、网络工程、Python等认证对齐的免费课程
* [MIT开放课程](https://ocw.mit.edu/) - 汇集MIT 2500+门课程资料，YouTube频道[@mitocw](https://www.youtube.com/@mitocw/featured)
* [W3Schools](https://www.w3schools.com/) - HTML/CSS/JavaScript等Web开发技术免费教程
* [可汗学院](https://www.khanacademy.org/computing/computer-programming) - 提供HTML/CSS基础与进阶、JavaScript和SQL的免费学习指南
* [全栈开放课程](https://fullstackopen.com/en/) - 大学级现代Web开发课程，涵盖React/Node.js/GraphQL/TypeScript等，支持在线自学
* [edX](https://www.edx.org/) - 提供哈佛/MIT等250所顶尖机构的4000+免费课程，专注计算机科学/工程/数据科学领域
* [Django教程网](https://django-tutorial.dev) - 首个Django框架学习指南平台，用户撰写文章可获得dofollow反向链接
* [DevNet学院](https://devnet-academy.com/) - 思科DevNet专家/CCIE自动化认证免费自学课程，涵盖Python Click与Flask-RESTx

**[⬆️ 返回顶部](#目录)**

## 电子邮件服务

  * [10分钟邮箱](https://10minutemail.com) - 用于测试的免费临时邮箱服务
* [AhaSend](https://ahasend.com) - 事务性邮件服务，每月免费1000封邮件，免费套餐包含无限域名、团队成员、Webhook和消息路由
* [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发服务，可创建无限免费邮件别名
* [Antideo](https://www.antideo.com) — 免费层每小时10次API请求，用于邮箱验证、IP和手机号验证，无需信用卡
* [Brevo](https://www.brevo.com/) — 每月9000封邮件，每天300封免费额度
* [OneSignal](https://onesignal.com/) — 每月10000封邮件，无需信用卡
* [Bump](https://bump.email/) - 免费10个Bump邮箱地址，1个自定义域名
* [Burnermail](https://burnermail.io/) – 免费5个临时邮箱地址，1个收件箱，7天邮件历史记录
* [Buttondown](https://buttondown.email/) — 邮件订阅服务，免费支持100名订阅者
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收邮件和事务性发件，每月10000封免费邮件
* [Contact.do](https://contact.do/) — 链接式联系表单（类似Bitly的短链接形式）
* [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器
* [DNSExit](https://dnsexit.com/) - 免费提供2个域名邮箱地址，100MB存储空间，支持IMAP/POP3/SMTP/SPF/DKIM
* [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送9000封邮件，每日上限300封
* [EmailOctopus](https://emailoctopus.com) - 免费支持2500名订阅者，每月10000封邮件
* [EmailJS](https://www.emailjs.com/) – 非完整邮件服务器，客户端邮件发送工具（无需暴露凭证），免费层包含200次月请求量/2个邮件模板/50KB请求限制/有限联系人历史
* [EtherealMail](https://ethereal.email) - 模拟SMTP服务（主要面向Nodemailer和EmailEngine用户），完全免费的反事务性邮件服务（邮件永不实际投递）
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮箱生成器，每次页面刷新即更新地址，完全免费无付费项目
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证200个邮箱，检测是否为临时邮箱
* [Emailvalidation.io](https://emailvalidation.io) - 每月100次免费邮箱验证
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国临时邮箱生成器，支持10个域名且可创建无限地址（含广告但完全免费）
* [forwardemail.net](https://forwardemail.net) — 自定义域名邮件转发服务（注：使用.casa/.cf等特定TLD需付费）
* [Imitate Email](https://imitate.email) - 沙箱邮件服务器，永久免费账户每日15封邮件
* [ImprovMX](https://improvmx.com) – 免费邮件转发服务
* [EForw](https://www.eforw.com) – 单域名免费邮件转发，支持收发邮件
* [Inboxes App](https://inboxesapp.com) — 每日创建3个临时邮箱（通过Chrome扩展管理），适合测试注册流程
* [inboxkitten.com](https://inboxkitten.com/) - 免费临时收件箱（邮件3天后自动删除），开源可自托管
* [mail-tester.com](https://www.mail-tester.com) — 检测邮件DNS/SPF/DKIM/DMARC设置，每月20次免费
* [dkimvalidator.com](https://dkimvalidator.com/) - 检测邮件DNS/SPF/DKIM/DMARC设置（roundsphere.com提供的免费服务）
* [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过Web界面展示
* [mailchannels.com](https://www.mailchannels.com) - 邮件API服务（支持REST API和SMTP），每月3000封免费
* [Mailcheck.ai](https://www.mailcheck.ai/) - 阻止用户使用临时邮箱注册，每小时120次请求（约86,400次/月）
* [Mailchimp](https://mailchimp.com/) — 500名订阅者，每月1000封免费邮件
* [Maildroppa](https://maildroppa.com) - 免费支持100名订阅者，无限邮件及自动化功能
* [MailerLite.com](https://www.mailerlite.com) — 每月1000名订阅者，12000封免费邮件
* [MailerSend.com](https://www.mailersend.com) — 邮件API/SMTP服务，每月3000封免费事务性邮件
* [mailinator.com](https://www.mailinator.com/) — 免费公共邮件系统（可使用任意收件箱）
* [Mailjet](https://www.mailjet.com/) — 每月6000封免费邮件（每日200封发送限制）
* [Mailnesia](https://mailnesia.com) - 免费临时邮箱（自动访问注册链接）
* [mailsac.com](https://mailsac.com) - 临时邮箱测试API（1500次月请求限制），支持邮件转Slack/Webhook等功能
* [Mailtrap.io](https://mailtrap.io/) — 开发用模拟SMTP服务器（免费版含1个收件箱/100条消息/无团队协作功能）
* [Mail7.io](https://www.mail7.io/) — 开发者QA用临时邮箱（支持Web界面和API即时创建）
* [Momentary Email](https://www.momentaryemail.com/) — 免费临时邮箱（支持网站或RSS阅读）
* [Mutant Mail](https://www.mutantmail.com/) – 免费10个邮箱ID/1个域名/1个收件箱（所有ID共享收件箱）
* [Outlook.com](https://outlook.live.com/owa/) - 免费个人邮箱和日历服务
* [Parsio.io](https://parsio.io) — 免费邮件解析器（转发邮件提取数据到服务器）
* [pepipost.com](https://pepipost.com) — 首月30000封免费，之后每日100封免费
* [Plunk](https://useplunk.com) - 每月3000封免费邮件
* [Postmark](https://postmarkapp.com/) - 每月100封免费邮件，无限DMARC周报
* [Proton Mail](https://proton.me/mail) - 免费安全邮箱服务（端到端加密），1GB存储空间
* [Queuemail.dev](https://queuemail.dev) — 可靠邮件投递API（每月10000封免费），支持异步发送/多SMTP服务器/黑名单等功能
* [QuickEmailVerification](https://quickemailverification.com) — 每日100次免费邮箱验证，含DEA检测/DNS查询等附加API
* [Resend](https://resend.com) - 开发者事务性邮件API（每月3000封/每日100封免费，1个自定义域名）
* [Sender](https://www.sender.net) 每月15000封邮件，2500名订阅者免费额度
* [Sendpulse](https://sendpulse.com) — 每月500名订阅者，15000封免费邮件
* [SimpleLogin](https://simplelogin.io/) – 开源可自托管邮件别名方案（免费5个别名/无限收发），教育工作者免费
* [Substack](https://substack.com) — 无限免费通讯服务（收费时开始付费）
* [Sweego](https://www.sweego.io/) - 欧洲事务性邮件API（每日500封免费）

  * [temp-mail.io](https://temp-mail.io) — 免费一次性临时邮箱服务，支持同时使用多个邮箱和邮件转发
* [tinyletter.com](https://tinyletter.com/) — 每月5,000名订阅者免费
* [Touchlead](https://touchlead.app) - 多功能营销自动化工具，包含潜在客户管理、表单构建器和自动化功能。免费版限制潜在客户数量和自动化次数
* [trashmail.com](https://www.trashmail.com) - 免费一次性邮箱地址，支持转发和自动过期
* [Tuta](https://tuta.com/) - 免费安全邮箱服务提供商，内置端到端加密，无广告无追踪。免费1GB存储空间，一个日历（Tuta也提供[付费方案](https://tuta.com/pricing)）。Tuta部分[开源](https://github.com/tutao/tutanota)，可自行托管
* [Verifalia](https://verifalia.com/email-verification-api) — 实时邮箱验证API，支持收件箱确认和一次性邮箱检测；每天25次免费验证
* [verimail.io](https://verimail.io/) — 批量及API邮箱验证服务。每月100次免费验证
* [Zoho](https://www.zoho.com) — 最初作为邮箱提供商，现提供多种服务，部分含免费方案。免费方案服务列表：
   - [邮箱](https://zoho.com/mail) 5用户免费。5GB/用户，25MB附件限制，一个域名
   - [Zoho Assist](https://www.zoho.com/assist) — 永久免费版包含1个并发远程支持许可和5台无人值守计算机的无限期访问权限，适用于专业和个人用途
   - [Sprints](https://zoho.com/sprints) 5用户免费，5个项目及500MB存储
   - [文档](https://zoho.com/docs) — 5用户免费，1GB上传限制及5GB存储。捆绑Zoho办公套件（Writer、Sheets和Show）
   - [项目](https://zoho.com/projects) — 3用户免费，2个项目及10MB附件限制。[Bugtracker](https://zoho.com/bugtracker)适用相同方案
   - [Connect](https://zoho.com/connect) — 团队协作工具，25用户免费，含3个群组、3个自定义应用、3个看板、3个手册和10个集成，以及频道、活动和论坛
   - [会议](https://zoho.com/meeting) — 最多3名参会者的会议及10名网络研讨会 attendees
   - [Vault](https://zoho.com/vault) — 个人可用的密码管理
   - [Showtime](https://zoho.com/showtime) — 另一款会议软件，支持最多5名参会者的远程培训
   - [Notebook](https://zoho.com/notebook) — Evernote的免费替代品
   - [Wiki](https://zoho.com/wiki) — 3用户免费，50MB存储，无限页面，zip备份，RSS和Atom订阅，访问控制和可定制CSS
   - [Subscriptions](https://zoho.com/subscriptions) — 循环账单管理，20个客户/订阅和1用户免费，所有支付由Zoho托管。存储最后40个订阅指标
   - [Checkout](https://zoho.com/checkout) — 产品账单管理，3个页面和最多50笔支付
   - [Desk](https://zoho.com/desk) — 客户支持管理，3个客服，私有知识库和邮件工单。集成[Assist](https://zoho.com/assist)提供1个远程技术员和5台无人值守计算机
   - [Cliq](https://zoho.com/cliq) — 团队聊天软件，100GB存储，无限用户，每个频道100用户和SSO
   - [Campaigns](https://zoho.com/campaigns) - 邮件营销
   - [Forms](https://zoho.com/forms) - 表单创建器
   - [Sign](https://zoho.com/sign) - 无纸化签名
   - [Surveys](https://zoho.com/surveys) - 在线调查
   - [Bookings](https://zoho.com/bookings) - 预约安排
* [Maileroo](https://maileroo.com) - 面向开发者的SMTP中继和邮件API。每月5,000封邮件，无限域名，免费邮箱验证，黑名单监控，邮件测试等功能

**[⬆️ 返回顶部](#目录)**

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - 以开发者为核心的特性开关服务，支持无限团队规模，提供卓越支持且价格合理。免费方案包含10个开关、2个环境、1个产品和每月500万次请求。
* [Flagsmith](https://flagsmith.com) - 自信地发布功能：跨Web、移动和服务器端应用管理特性开关。可使用托管API、部署到私有云或本地运行。
* [GrowthBook](https://growthbook.io) - 开源特性开关和A/B测试平台，内置贝叶斯统计分析引擎。免费支持3个用户，不限开关数量和实验次数。
* [Hypertune](https://www.hypertune.com) - 类型安全的特性开关、A/B测试、分析和应用配置，具备Git式版本控制和同步内存本地开关评估。免费支持5人团队，不限开关和A/B测试。
* [Molasses](https://www.molasses.app) - 强大的特性开关和A/B测试工具。免费提供3个环境，每个环境5个开关。
* [Toggled.dev](https://www.toggled.dev) - 企业级可扩展多区域特性开关管理平台。免费方案含10个开关、2个环境且不限请求量。SDK、分析面板、发布日历、Slack通知等功能均包含在永久免费方案中。
* [Statsig](https://www.statsig.com) - 功能管理、A/B测试、分析等一体化平台。免费方案不限席位、开关、实验和动态配置，支持每月100万次事件。
* [Abby](https://www.tryabby.com) - 开源特性开关和A/B测试工具，支持代码化配置和全类型TypeScript SDK。深度集成Next.js和React等框架，提供慷慨免费层和低成本扩展方案。

**[⬆️ 返回顶部](#目录)**

## 字体服务

  * [dafont](https://www.dafont.com/) - 本网站展示的字体均为作者所有，包含免费软件、共享软件、试用版或公共领域字体
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具：@font-face、单位转换器、字体提示器和字体提交工具
* [Font Squirrel](https://www.fontsquirrel.com/) - 授权可用于商业用途的免费字体，经过人工精选并以易用格式呈现
* [Google Fonts](https://fonts.google.com/) - 提供大量免费字体，可通过下载或链接Google CDN快速部署到网站
* [FontGet](https://www.fontget.com/) - 提供分类标签清晰、可供下载的多样化字体库
* [Fontshare](https://www.fontshare.com/) - 专业级免费字体服务，所有字体均可100%免费用于个人和商业用途
* [Befonts](https://befonts.com/) - 为个人或商业用途提供多款独特字体
* [Font of web](https://fontofweb.com/) - 识别网站使用的所有字体及其应用方式
* [Bunny](https://fonts.bunny.net) 注重隐私保护的Google Fonts替代方案
* [FontsKey](https://www.fontskey.com/) - 提供免费和商用付费字体，支持输入文字快速筛选
* [fonts.xz.style](https://fonts.xz.style/) 通过CSS为网站提供免费开源字体服务的平台
* [Fontsensei](https://fontsensei.com/) 用户标注的Google字体开源库，包含中日韩(CJK)字体标签

**[⬆️ 返回顶部](#目录)**

## 表单工具

  * [Feathery](https://feathery.io) - 强大且开发者友好的表单构建工具。可创建注册登录、用户引导、支付流程、复杂金融应用等。免费版每月支持250次提交和5个活跃表单。
* [Form-Data](https://form-data.com) - 无代码表单后端。含垃圾邮件过滤、邮件通知与自动回复、Webhooks、Zapier集成、重定向、AJAX/POST等功能。免费版提供无限表单，每月20次提交（展示Form-Data标识可额外获得2000次提交）。
* [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台。免费版每月250次提交，提供现代化友好界面，支持Google Sheets、Airtable、Slack、邮件等集成。
* [Form.taxi](https://form.taxi/) — HTML表单提交终端。含通知、垃圾信息拦截和GDPR合规数据处理。基础功能免费。
* [Formcarry.com](https://formcarry.com) - HTTP POST表单终端，免费版每月100次提交。
* [formingo.co](https://www.formingo.co/)- 静态网站简易HTML表单。无需注册即可免费使用，每月500次提交，可自定义回复邮箱。
* [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，含垃圾防护、邮件通知和可导出HTML的拖拽设计器。高级功能包括自定义字段规则、团队协作及Google Sheets/Slack/ActiveCampaign/Zapier集成。
* [formlets.com](https://formlets.com/) — 在线表单，无限单页表单/月，100次提交/月，邮件通知。
* [formspark.io](https://formspark.io/) - 表单转邮件服务，免费版无限表单，每月250次提交，提供客户支持团队协助。
* [Formspree.io](https://formspree.io/) — 通过HTTP POST请求发送邮件。免费版每表单每月限50次提交。
* [Formsubmit.co](https://formsubmit.co/) — 为HTML表单提供简易终端。永久免费，无需注册。
* [Formlick.com](https://formlick.com) - Typeform替代方案，含终身免费套餐。用户可创建1个免费表单并接收无限提交。付费版支持无限表单和提交。
* [getform.io](https://getform.io/) - 面向设计师和开发者的表单后端平台，1个表单，50次提交，单文件上传，100MB存储。
* [HeroTofu.com](https://herotofu.com/) - 带机器人检测和加密存储的表单后端。可通过界面转发提交至邮件/Slack/Zapier。无需服务器代码。免费版无限表单，每月100次提交。
* [HeyForm.net](https://heyform.net/) - 拖拽式在线表单构建工具。免费版支持无限表单和提交，提供预制模板、反垃圾和100MB文件存储。
* [Tally.so](https://tally.so/) - 99%功能免费。免费版含：无限表单、无限提交、邮件通知、表单逻辑、收款、文件上传、自定义感谢页等。
* [Hyperforms.app](https://hyperforms.app/) — 无需后端代码快速创建表单转邮件等功能。个人账户每月50次免费提交。
* [Kwes.io](https://kwes.io/) - 功能丰富的表单终端，完美适配静态网站。免费版支持1个网站，每月50次提交。
* [Pageclip](https://pageclip.co/) - 免费版支持1个站点、1个表单，每月1000次提交。
* [Qualtrics Survey](https://qualtrics.com/free-account) — 专业表单与调研工具。50+专家设计模板。免费账户限1个活跃调研，100次回复/调研，8种回复类型。
* [Screeb](https://screeb.app/) - 应用内调研与用户行为分析工具。永久免费版支持500月活用户，无限回复与事件，多平台集成导出及定期报告。
* [smartforms.dev](https://smartforms.dev/) - 强大易用的网站表单后端。永久免费版每月50次提交，250MB存储，Zapier集成，CSV/JSON导出，自定义重定向与响应页，Telegram/Slack机器人，单邮件通知。
* [Survicate](https://survicate.com/) — 全渠道收集反馈并发送跟进调研。AI自动分析提取洞察。免费版含邮件/网站/应用内/移动端调研，AI问卷生成器，25次月回复。
* [staticforms.xyz](https://www.staticforms.xyz/) - 无需服务器代码轻松集成HTML表单。提交后内容将发送至注册邮箱。
* [stepFORM.io](https://stepform.io) - 问卷与表单构建工具。免费版5个表单，每表单最多3步骤，50次月回复。
* [Typeform.com](https://www.typeform.com/) — 在网站嵌入精美设计表单。免费版每表单限10字段，100次月回复。
* [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。可通过Webhook接收通知。免费版签署文件带水印，但支持无限信封+签名。
* [Web3Forms](https://web3forms.com) - 静态与JAMStack网站联系表单，无需后端代码。免费版无限表单与域名，每月250次提交。
* [WebAsk](https://webask.io) - 调研与表单构建工具。免费版3个调研/账户，100次月回复，每调研10个元素。
* [Wufoo](https://www.wufoo.com/) - 快速创建网站表单。免费版每月限100次提交。
* [formpost.app](https://formpost.app) - 永久免费的表单转邮件服务。支持自定义重定向、自动回复、Webhook等。
* [Formester.com](https://formester.com) - 在网站分享嵌入独特表单。无表单数量或功能限制。免费版每月100次提交。
* [SimplePDF.eu](https://simplepdf.eu/embed) - 在网站嵌入PDF编辑器，将任意PDF转为可填写表单。免费版无限PDF，每PDF限3次提交。
* [forms.app](https://forms.app/) — 创建带条件逻辑、自动计分和AI的在线表单。免费版收集100次回复，可嵌入网站或通过链接使用。
* [Qualli](https://usequalli.com) - 专为移动端设计的应用内调研。使用Qualli AI生成完美问题。免费版支持500月活用户，无限表单与触发器。
* [Sprig](https://sprig.com/) - 每月1次应用内调研或带回放的调研，含GPT驱动的AI分析。
* [feedback.fish](https://feedback.fish/) - 免费版限25次反馈提交。提供React/Vue组件便于集成。
* [Vidhook](https://vidhook.io/) - 通过高响应率趣味调研收集反馈。免费版含1个活跃调研，每调研25次回复，支持自定义模板。

**[⬆️ 返回顶部](#目录)**

## 生成式AI

  * [Zenable](https://zenable.io) - 通过Policy as Code构建的防护栏，即时自动修复Cursor、Windsurf和Copilot等工具的输出，以满足您公司的质量和合规标准。免费套餐包括每天100次MCP服务器工具调用，以及通过GitHub App每天25次免费的自动化拉取请求审查。
* [Keywords AI](https://keywordsai.co) - 最佳的LLM监控平台。只需2行代码即可调用200多种LLM。每月10,000次免费请求，平台功能完全免费！
* [Portkey](https://portkey.ai/) - 生成式AI应用的控制面板，包含可观测性套件和AI网关。每月免费发送和记录多达10,000次请求。
* [Braintrust](https://www.braintrustdata.com/) - 生成式AI的评估、提示游乐场和数据管理。免费计划每周提供多达1,000条私有评估行。
* [Findr](https://www.usefindr.com/) - 通用搜索，可同时搜索所有应用。搜索助手可让您使用自己的信息回答问题。免费计划提供无限统一搜索和每天5次共同驾驶查询。
* [ReportGPT](https://ReportGPT.app) - AI驱动的写作助手。只要您自带API密钥，整个平台完全免费。
* [Clair](https://askclair.ai/) - 临床AI参考工具。学生可免费访问专业工具套件，包括开放搜索、临床摘要、药物审查、药物相互作用、ICD-10代码和管理。此外，专业套件还提供免费试用。
* [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估、管理提示和数据集，并调试与LLM应用性能相关的问题。它为任何LLM创建开放遥测标准追踪，有助于可观测性，并可与任何可观测性客户端配合使用。免费计划每月提供50,000次追踪。
* [LangWatch](https://langwatch.ai) - 一个LLMOps平台，帮助AI团队测量、监控和优化LLM应用的可靠性、成本效益和性能。通过强大的DSPy组件，我们促进工程师和非技术团队之间的无缝协作，以微调并将生成式AI产品投入生产。免费计划包括所有平台功能、每月1,000次追踪和1个工作流DSPy优化器。[#开源](https://github.com/langwatch/langwatch)
* [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和部署LLM应用。[#开源](https://github.com/comet-ml/opik/)
* [Langfuse](https://langfuse.com/) - 开源的LLM工程平台，帮助团队协作调试、分析和迭代其LLM应用。永久免费计划包括每月50,000次观察和所有平台功能。[#开源](https://github.com/langfuse/langfuse)
* [Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，并提供多种集成到网站或工作流的选项。[#开源](https://github.com/pollinations/pollinations)
* [Othor AI](https://othor.ai/) - 一种AI原生的快速、简单且安全的替代方案，可替代Tableau、Power BI和Looker等流行的商业智能解决方案。Othor利用大型语言模型（LLM）在几分钟内提供定制的商业智能解决方案。永久免费计划提供一个工作区、五个数据源连接和一个用户，且分析无限制。[#开源](https://github.com/othorai/othor.ai)
* [OpenRouter](https://openrouter.ai/models?q=free) - 提供各种免费AI模型，包括DeepSeek R1、V3、Llama和Moonshot AI。这些模型在自然语言处理方面表现出色，适合多样化的开发需求。请注意，虽然这些模型免费使用，但受速率限制。此外，OpenRouter还提供付费模型以满足更高级的需求，例如Claude、OpenAI、Grok、Gemini和Nova。
* [Mediaworkbench.ai](https://mediaworkbench.ai) - MediaWorkbench.ai为Azure OpenAI、DeepSeek和Google Gemini模型提供100,000个免费单词，使用户能够访问强大的工具进行代码生成、深度研究和图像创建。
* [Audio Enhancer](https://voice-clone.org/tools/audio-enhancer) — AI驱动的音频增强SaaS，可去除噪音和回声，同时保留自然的人声清晰度。完全免费：无限一键增强，无需登录，支持MP3/WAV/FLAC格式。

**[⬆️ 返回顶部](#目录)**

## CDN与安全防护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — 提供Bootstrap、Bootswatch和FontAwesome的CDN服务
* [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络。cdnjs是由Cloudflare提供支持的免费开源CDN服务，被全球超过11%的网站所信任
* [developers.google.com](https://developers.google.com/speed/libraries/) — Google托管库是最流行的开源JavaScript库的内容分发网络
* [Stellate](https://stellate.co/) — 为GraphQL API提供的极速可靠CDN，免费支持两项服务
* [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速且可靠的开源CDN。支持npm、GitHub、WordPress、Deno等
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN托管了如jQuery等流行的第三方JavaScript库，方便您轻松将其添加到Web应用中
* [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费DDoS防护和SSL证书
* [Skypack](https://www.skypack.dev/) — 100%原生ES模块JavaScript CDN。每月每个域名100万次请求免费
* [raw.githack.com](https://raw.githack.com/) — **rawgit.com**的现代替代品，使用Cloudflare简单托管文件
* [section.io](https://www.section.io/) — 快速启动和管理完整Varnish缓存解决方案的简单方式。据称一个站点永久免费
* [statically.io](https://statically.io/) — 为Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资源和图片提供的CDN
* [toranproxy.com](https://toranproxy.com/) — Packagist和GitHub的代理。永不失败的持续交付。个人使用免费，限一名开发者，无支持
* [UNPKG](https://unpkg.com/) — npm上所有内容的CDN
* [weserv](https://images.weserv.nl/) — 图片缓存和调整大小服务。即时处理图片并拥有全球缓存
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan) — 免费DDoS防护
* [Gcore](https://gcorelabs.com/) — 全球内容分发网络，每月1TB流量和100万次请求免费，并提供免费DNS托管
* [CacheFly](https://portal.cachefly.com/signup/free2023) — 每月最高5TB免费CDN流量，19个核心PoP，1个域名和通用SSL
* [PromoProxy](https://promoproxy.net/) — 免费云端安全Web网关。免费计划包含最多5个用户和每天1GB流量

**[⬆️ 返回顶部](#目录)**

## 平台即服务

  * [anvil.works](https://anvil.works) - 纯Python开发Web应用。免费版支持无限应用，30秒超时限制。
* [appwrite](https://appwrite.io) - 无限项目且无暂停限制（支持WebSocket）的认证服务。免费版每个项目含1个数据库、3个存储桶、5个函数。
* [configure.it](https://www.configure.it/) — 移动应用开发平台，免费支持两个项目，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) — 面向Java/Kotlin开发者的开源跨平台移动应用工具链。商业用途免费，项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于TypeScript代码自动生成可视化CMS的边缘原生前端平台。内置A/B测试、内容分段和实时分析。适合内容密集型和企业级电商网站。免费版每月5,000页面浏览或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘节点运行JavaScript/TypeScript/WebAssembly的分布式系统。免费版每日10万请求，每月100GiB数据传输。
* [domcloud.co](https://domcloud.co) – 提供GitHub CI/CD、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版1GB存储，每月1GB流量，限用免费域名。
* [encore.dev](https://encore.dev/) — 通过静态分析自动提供基础设施的无样板后端框架。含业余项目免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 在自有AWS账户上通过Git推送式工作流部署Web服务/数据库等。个人GitHub仓库开发者可享免费层，AWS费用由AWS直接计费（可使用AWS免费额度）。
* [gigalixir.com](https://gigalixir.com/) - Elixir/Phoenix应用免费实例（永不休眠）和PostgreSQL免费层（2连接/1万行/无备份）。
* [leapcell](https://leapcell.io/) - 可靠分布式应用平台，支持快速扩展。免费计划含10万服务调用、1万异步任务和10万Redis命令。
* [pipedream.com](https://pipedream.com) - 开发者集成平台。[免费运行](https://docs.pipedream.com/pricing/)任意触发器的工作流代码，无需管理服务器。
* [pythonanywhere.com](https://www.pythonanywhere.com/) — Python云应用托管。免费基础账户含1个Python Web应用（your-username.pythonanywhere.com域名）、512MB私有存储和1个MySQL数据库。
* [ampt.dev](https://getampt.com/) - 无需复杂配置即可在AWS上构建部署JavaScript应用。免费预览版每小时500次调用，每日2,500次，每月5万次。自定义域名仅限付费计划。
* [Koyeb](https://www.koyeb.com) - 全球化无服务器平台，支持Docker容器/Web应用/API的Git部署。免费实例可部署Web服务至德国法兰克福或美国华盛顿，含512MB内存/2GB存储/0.1CPU。免费托管PostgreSQL数据库位于德国/美国/新加坡。
* [Napkin](https://www.napkin.io/) - FaaS服务，500MB内存/15秒超时/每月5,000次API调用（限速5次/秒）。
* [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管平台。Meteor应用PaaS含免费MongoDB共享托管和自动SSL。
* [Northflank](https://northflank.com) — 通过UI/API/CLI部署微服务/定时任务/托管数据库。免费层含2个服务/2个定时任务/1个数据库。
* [YepCode](https://yepcode.io) - 无服务器环境连接API服务的全能平台。[免费层含1,000次yeps](https://yepcode.io/pricing/)。
* [WunderGraph](https://cloud.wundergraph.com) - 快速构建管理现代API的开源平台。[免费计划](https://wundergraph.com/pricing)含3个项目/1GB出口流量/每月300分钟构建时间。
* [Zeabur](https://zeabur.com) - 一键部署服务。免费支持3个服务，每月5美元额度。
* [mogenius](https://mogenius.com) - 在Kubernetes上轻松构建部署服务。免费版支持本地Kubernetes连接，创建生产级测试环境。
* [DeployApps](https://deployapps.dev/) - 无服务器函数服务，免费提供100万次调用/100GB流量/10个定时任务（限非商业/学术用途）。

**[⬆️ 返回顶部](#目录)**

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用连接至您的应用后端。例如，当应用中触发事件时发送Slack消息或添加Google表格行。每月免费额度高达5,000次任务。
* [back4app.com](https://www.back4app.com) - Back4App是基于Parse平台的易用、灵活且可扩展的后端服务。
* [backendless.com](https://backendless.com/) - 移动与Web后端即服务(BaaS)，免费提供1GB文件存储、每月50,000次推送通知及1,000个数据表对象。
* [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在函数运行时和托管存储上快速搭建您的Python API，支持在线编辑器免费构建托管或本地使用您喜爱的工具开发。
* [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档与资源，助力企业构建部署数字化方案。包含平台、SDK及组件库的完整个人沙箱环境。
* [connectycube.com](https://connectycube.com) - 无限聊天消息、P2P音视频通话、文件附件及推送通知。支持最多1,000名用户的应用免费使用。
* [convex.dev](https://convex.dev/) - 响应式后端即服务，托管您的数据（支持关系型文档与可序列化ACID事务）、无服务器函数及WebSocket实时更新。小项目免费——100万条记录，每月500万次函数调用。
* [darklang.com](https://darklang.com/) - 集成编辑器与基础设施的托管语言。Beta期间可访问，正式版后将提供慷慨的免费层级。
* [Firebase](https://firebase.com) - Firebase助您构建并运营成功应用。免费Spark计划包含认证、托管、Firebase ML、实时数据库、云存储、Testlab。A/B测试、分析、应用分发、索引、云消息(FCM)、Crashlytics、动态链接、应用内消息、性能监控、预测及远程配置永久免费。
* [Flutter Flow](https://flutterflow.io) - 无需编写代码即可构建Flutter应用界面，集成Firebase。免费计划包含UI构建器及免费模板的完整访问权限。
* [getstream.io](https://getstream.io/) - 数小时内实现可扩展的应用内聊天、消息、音视频及信息流功能，替代数周开发。
* [hasura.io](https://hasura.io/) - Hasura扩展您现有数据库，即时生成可通过GraphQL安全访问的API，适用于Web、移动及数据集成场景。每月1GB数据流量免费。
* [nhost.io](https://nhost.io) - 为Web与移动应用提供的无服务器后端。免费计划包含PostgreSQL、GraphQL(Hasura)、认证、存储及无服务器函数。
* [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月10,000封邮件发送，联系人无限制且支持自动预热功能。
* [paraio.com](https://paraio.com) - 具备灵活认证、全文搜索与缓存的后端API服务。单个应用免费，含1GB应用数据。
* [pubnub.com](https://www.pubnub.com/) - 每月100万条消息及100台活跃设备的免费推送通知。
* [pushbots.com](https://pushbots.com/) - 推送通知服务。每月150万次推送免费。
* [pushcrew.com](https://pushcrew.com/) - 推送通知服务。2,000订阅者内通知无限制。
* [pusher.com](https://pusher.com/beams) - 每月2,000活跃用户的免费无限推送通知。支持iOS与Android设备的统一API。
* [quickblox.com](https://quickblox.com/) - 即时消息、音视频通话及推送通知的通信后端。
* [restspace.io](https://restspace.io/) - 配置包含认证、数据、文件、邮件API、模板等服务的服务器，组合成管道并转换数据。
* [Salesforce开发者计划](https://developer.salesforce.com/signup) - 使用拖拽工具快速构建应用，点击自定义数据模型，通过Apex代码扩展，强大API实现万物集成，企业级安全防护，前沿Web框架定制UI。免费开发者计划开放完整Lightning平台权限。
* [simperium.com](https://simperium.com/) - 实时自动同步多平台数据，结构化数据无限收发存储，每月最多2,500用户。
* [Supabase](https://supabase.com) - 开源Firebase替代方案，提供认证、实时数据库与对象存储的免费计划。
* [tyk.io](https://tyk.io/) - 含认证、配额、监控与分析功能的API管理平台。提供免费云服务。
* [zapier.com](https://zapier.com/) - 连接应用自动化任务。每15分钟5次触发，每月100次任务免费。
* [IFTTT](https://ifttt.com) - 自动化您喜爱的应用与设备。免费2个Applet。
* [Integrately](https://integrately.com) - 一键自动化繁琐任务。免费100次任务、15分钟更新延迟、5个活跃自动化流程及Webhook支持。
* [LeanCloud](https://leancloud.app/) - 移动后端服务。免费含1GB数据存储、256MB实例、每日3,000次API请求及10,000次推送。（API与Parse平台高度相似）
* [Claw.cloud](https://run.claw.cloud) - PaaS平台为GitHub账号注册超过180天的用户提供每月5美元免费额度，适合托管应用、数据库等。（[含免费额度的注册链接](https://ap-southeast-1.run.claw.cloud/signin)）。

**[⬆️ 返回顶部](#目录)**

## 低代码平台

  * [appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。支持15+种数据库和任意API集成
* [Basedash](https://www.basedash.com) — 构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API
* [BudiBase](https://budibase.com/) — 开源低代码平台，可快速创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s
* [Clappia](https://www.clappia.com) — 专为业务流程应用设计的低代码平台，可构建定制化移动/web应用。提供拖拽界面、离线支持、实时定位追踪及第三方服务集成
* [DronaHQ](https://www.dronahq.com/) — 帮助工程团队和产品经理10倍速构建内部工具、定制用户旅程、数字体验、自动化流程、管理面板和运营应用的低代码平台
* [lil'bots](https://www.lilbots.io/) - 在线编写运行脚本，内置OpenAI、Anthropic、Firecrawl等免费API。适合构建AI代理/内部工具并团队共享。免费层包含完整API访问权限、AI编程助手和每月10,000次执行额度
* [Mendix](https://www.mendix.com/) — 企业级快速应用开发平台，免费沙盒环境支持无限用户，单应用0.5GB存储和1GB内存。免费层可使用Studio和Studio Pro IDE
* [outsystems.com](https://www.outsystems.com/) — 本地或云端企业级web开发PaaS，免费"个人环境"提供无限代码和1GB数据库
* [ReTool](https://retool.com/) — 高度可定制的内部应用低代码平台。能用JavaScript+API实现的功能都可在Retool构建。免费层支持每月5用户，不限应用和API连接
* [Superblocks](https://superblocks.com/) — 面向开发者和半技术团队的企业级开放应用平台。通过AI生成、可视化编辑和代码扩展，集中管理集成、认证、权限和审计日志
* [ToolJet](https://www.tooljet.com/) — 可扩展的业务应用低代码框架。连接数据库、云存储、GraphQL、API端点、Airtable等数据源，通过拖拽生成应用
* [UI Bakery](https://uibakery.io) — 通过JavaScript/Python/SQL高度定制化的拖拽式web应用开发平台。提供云服务和自托管方案，5人以下团队免费
* [manubes](https://www.manubes.com) - 专注工业生产管理的强大无代码云平台。免费版支持1用户每月100万次工作流活动（[德语版](https://www.manubes.de)）

**[⬆️ 返回顶部](#目录)**

## 网站托管

  * [Alwaysdata](https://www.alwaysdata.com/) — 100 MB 免费虚拟主机，支持 MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，可自定义 Web 服务器，支持 FTP、WebDAV 和 SSH 访问；包含邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费虚拟主机 + 免费短域名，支持 PHP、MySQL、应用安装器、邮件发送且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费使用 + 开发者优先的部署和开发平台，减少基础设施烦恼并加速设置。
  * [Bubble](https://bubble.io/) — 可视化编程，无需代码即可构建 Web 和移动应用，免费版带 Bubble 品牌标识。
  * [dAppling Network](https://www.dappling.network/) — 专注于 Web3 前端的去中心化虚拟主机平台，旨在提高正常运行时间和安全性，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) — 在 App Platform Starter 层级免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从 Google Drive 和 OneDrive 托管到 Web。仅限静态站点。永久免费。每个 Google/Microsoft 账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 一款开发者桌面应用，用于本地托管站点并公开实时共享。通过其美观的用户界面、API 和/或 CLI 按您喜欢的方式工作。
  * [Free Hosting](https://freehostingnoads.net/) — 免费虚拟主机，支持 PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP 电子邮件、免费子域名、免费域名托管、DNS 区域编辑器、网站统计、免费在线支持以及许多其他免费主机未提供的功能。
  * [Freehostia](https://www.freehostia.com) — FreeHostia 提供免费虚拟主机服务，包括行业最佳的控制面板和 50 多个免费应用的一键安装。即时设置。无强制广告。
  * [HelioHost](https://heliohost.org) — 非营利免费虚拟主机，提供 Plesk 控制面板，支持 PHP、Node.js、Python、Django、Flask、.NET、Perl、CGI、MySQL、PostgreSQL、SQLite、IMAP/POP3/SMTP 电子邮件，无限带宽，免费子域名，1000 MB 存储空间，并可选择升级。
  * [Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/) — 免费部署最多 100 个静态站点，支持自定义域名和 SSL，每月 100 GB 带宽，260+ Cloudflare CDN 节点。
  * [Lecturify](https://www.lecturify.net/index.en.html) — 支持 SFTP 访问上传和下载文件的虚拟主机，提供 PHP 支持。
  * [Neocities](https://neocities.org) — 静态站点，1 GB 免费存储空间和 200 GB 带宽。
  * [Netlify](https://www.netlify.com/) — 免费构建、部署和托管静态站点/应用，提供 100 GB 数据和每月 100 GB 带宽。
  * [PandaStack](https://www.pandastack.io/) — 开发者生态系统，提供多种形式的虚拟主机（静态虚拟主机、基于容器的虚拟主机、WordPress 等众多托管应用，一键即可使用）。一个免费虚拟主机（静态或容器化）和一个免费数据库，100 GB 带宽和每月 300 构建分钟。
  * [pantheon.io](https://pantheon.io/) — Drupal 和 WordPress 托管，自动化 DevOps 和可扩展基础设施。开发者和机构免费使用。不支持自定义域名。
  * [readthedocs.org](https://readthedocs.org/) — 免费文档托管，支持版本控制、PDF 生成等功能。
  * [render.com](https://render.com) — 统一云平台，用于构建和运行应用及站点，提供免费 SSL、全球 CDN、私有网络、Git 自动部署，以及完全免费的 Web 服务、数据库和静态网页计划。
  * [SourceForge](https://sourceforge.net/) — 免费查找、创建和发布开源软件。
  * [surge.sh](https://surge.sh/) — 面向前端开发者的静态 Web 发布服务。无限站点，支持自定义域名。
  * [telegra.ph](https://telegra.ph/) 使用 Quill 轻松创建网页。
  * [tilda.cc](https://tilda.cc/) — 一个站点，50 个页面，50 MB 存储空间，仅限 170+ 可用预定义主区块，不支持自定义字体、网站图标和域名。
  * [Vercel](https://vercel.com/) — 构建、部署和托管 Web 应用，提供免费 SSL、全球 CDN 和每次 `git push` 后的唯一预览 URL。非常适合 Next.js 和其他静态站点生成器。
  * [Versoly](https://versoly.com/) — 专注于 SaaS 的网站构建器 — 无限网站，70+ 区块，五个模板，支持自定义 CSS、网站图标、SEO 和表单。不支持自定义域名。
  * [Qoddi](https://qoddi.com) — 类似 Heroku 的 PaaS 服务，采用开发者中心的方法和全包功能。免费层级支持静态资源、暂存环境和开发者应用。
  * [FreeFlarum](https://freeflarum.com/) — 社区支持的免费 Flarum 托管，最多支持 250 名用户（捐赠可移除页脚水印）。
  * [MDB GO](https://mdbgo.com/) — 一个项目的免费托管，容器 TTL 两周，每个项目 500 MB RAM，SFTP — 1G 磁盘空间。
  * [Patr Cloud](https://patr.cloud/) — 易于使用的云平台，在其付费服务中提供三个静态站点的免费托管。
  * [Serv00.com](https://serv00.com/) — 3 GB 免费虚拟主机，每日备份（保留 7 天）。支持：Crontab 任务、SSH 访问、仓库（GIT、SVN 和 Mercurial），支持 MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R 等多种语言。
  - [Sevalla](https://sevalla.com/) — 旨在简化应用、数据库和静态网站部署和管理的托管平台 — 1GB 站点限制，100GB 免费带宽，600 免费构建分钟，每个账户 100 个站点。

**[⬆️ 返回顶部](#目录)**

## 域名解析

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS解析服务，快速且安全（加密DNS查询）。可用于绕过网络运营商的DNS封锁、防止DNS查询被窥探，以及[屏蔽成人内容和恶意软件](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。还支持[通过API调用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注：仅为DNS解析器，非DNS托管服务。
* [1984.is](https://www.1984.is/product/freedns/) - 提供API支持的免费DNS服务，包含多项高级功能。
* [cloudns.net](https://www.cloudns.net/) - 免费托管1个域名，支持50条记录。
* [deSEC](https://desec.io) - 注重安全的免费DNS托管服务，支持API，基于开源软件，由[SSE](https://www.securesystems.de/)提供支持。
* [dns.he.net](https://dns.he.net/) - 支持动态DNS的免费托管服务。
* [Zonomi](https://zonomi.com/) - 即时生效的免费DNS托管，免费版支持1个域名和10条记录。
* [dnspod.com](https://www.dnspod.com/) - 免费DNS托管。
* [duckdns.org](https://www.duckdns.org/) - 免费动态DNS服务，支持5个域名，提供多平台配置指南。
* [Dynv6.com](https://dynv6.com/) - 支持[API](https://dynv6.com/docs/apis)的免费动态DNS服务，可管理多种记录类型（如CNAME、MX、SPF等）。
* [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，并提供基于用户贡献域名的[子域名注册](https://freedns.afraid.org/domain/registry/)，注册后可在"Subdomains"菜单获取。
* [luadns.com](https://www.luadns.com/) - 免费托管3个域名，功能全面且限制合理。
* [namecheap.com](https://www.namecheap.com/domains/freedns/) - 无限域名数量的免费DNS服务。
* [nextdns.io](https://nextdns.io) - DNS防火墙服务，每月30万次免费查询。
* [noip.at](https://noip.at/) - 无需注册的免费动态DNS服务，无追踪、无广告、无限域名。
* [noip](https://www.noip.com/) - 动态DNS服务，免费支持3个主机名，需每30天确认一次。
* [sslip.io](https://sslip.io/) - 免费DNS服务，输入含IP地址的主机名即可返回该IP。
* [zilore.com](https://zilore.com/en/dns) - 免费托管5个域名。
* [zoneedit.com](https://www.zoneedit.com/free-dns/) - 支持动态DNS的免费托管。
* [zonewatcher.com](https://zonewatcher.com) - 免费监控1个域名的DNS变更并自动备份。
* [huaweicloud.com](https://www.huaweicloud.com/intl/en-us/product/dns.html) - 华为云提供的免费DNS托管。
* [Hetzner](https://www.hetzner.com/dns-console) - Hetzner提供的支持API的免费DNS托管。
* [Glauca](https://docs.glauca.digital/hexdns/) - 免费托管3个域名，支持DNSSEC。
* [VolaryDDNS](https://volaryddns.net) - 高性能免费动态DNS，无订阅和广告。
* [LocalCert](https://localcert.net) - 免费提供与公共CA兼容的`.localcert.net`子域名，适用于私有网络。

**[⬆️ 返回顶部](#目录)**

## 域名注册

  * [pp.ua](https://nic.ua/) — 免费pp.ua子域名
* [us.kg](https://nic.us.kg/) - 免费us.kg子域名

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 兼容AWS S3 API、界面操作、CLI等多种上传方式，可安全便捷高效地将文件上传存储至IPFS和Arweave网络。注册用户可免费获得6GB IPFS存储空间和300MB Arweave存储空间。任何小于150KB的Arweave文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2云存储。永久免费的10GB（类Amazon S3）对象存储
  * [filebase.com](https://filebase.com/) - 基于区块链的S3兼容对象存储。永久免费的5GB存储空间
  * [Tebi](https://tebi.io/) - S3兼容对象存储。免费25GB存储空间及250GB出站流量
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容对象存储。每月10GB免费存储空间及10GB下载带宽
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容对象存储。每月15GB免费存储空间及15GB下载流量

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven在其开源数据平台上提供免费的PostgreSQL、MySQL和Valkey（兼容Redis）方案。单节点配置为1核CPU、1GB内存，PostgreSQL和MySQL还包含1GB存储空间。可轻松迁移至更高级方案或跨云平台。
* [airtable.com](https://airtable.com/) — 界面类似电子表格，实为关系型数据库，提供无限基础表、每表1,200行和每月1,000次API请求的免费方案
* [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生Cassandra服务，含[80GB免费层](https://www.datastax.com/products/datastax-astra/pricing)
* [codehooks.io](https://codehooks.io/) — 易用的JavaScript无服务器API/后端及NoSQL数据库服务，支持函数、类MongoDB查询、键值查询、任务系统、实时消息、工作队列、强大CLI和基于Web的数据管理器。免费方案含5GB存储和每分钟60次API调用，支持2名开发者，无需信用卡。
* [CrateDB](https://crate.io/) - 用于实时分析的开源分布式SQL数据库。[免费层CRFREE](https://crate.io/lp-crfree)：单节点2核CPU、2GiB内存、8GiB存储，每个组织可创建一个集群，无需支付方式。
* [Upstash](https://upstash.com/) — 无服务器Redis服务，免费层每日10,000次请求，最大数据库容量256MB，支持20个并发连接
* [Couchbase Capella](https://www.couchbase.com/products/capella/) - 部署永久免费的完全托管数据库集群，专为开发者构建下一代应用（从物联网到AI）设计
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供512MB存储
* [redsmin.com](https://www.redsmin.com/) — Redis实时监控与管理服务，免费监控1个Redis实例
* [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis实例
* [MemCachier](https://www.memcachier.com/) — 托管Memcache服务。免费层支持25MB内存、1个代理服务器和基础分析
* [scalingo.com](https://scalingo.com/) — 主要提供PaaS服务，但包含128MB至192MB的MySQL/PostgreSQL/MongoDB免费层
* [SeaTable](https://seatable.io/) — 由Seafile团队开发的灵活电子表格式数据库。无限表格、2,000行数据、1个月版本历史，最多支持25名团队成员。
* [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，测试期间所有方案完全免费
* [StackBy](https://stackby.com/) — 融合电子表格灵活性、数据库功能及主流商业应用集成的工具。免费方案含无限用户、10个堆栈和每个堆栈2GB附件。
* [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB是开源MySQL兼容的分布式HTAP关系数据库。TiDB Serverless每月免费提供5GB行存储、5GB列存储和5,000万请求单位(RUs)。
* [Turso by ChiselStrike](https://chiselstrike.com/) - Turso是边缘数据库中的SQLite开发体验。永久免费入门方案含9GB总存储、最多500个数据库、3个位置、每月10亿行读取及SQLite本地开发支持。
* [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费层支持每5分钟3MB写入/30MB读取和10,000基数序列
* [restdb.io](https://restdb.io/) - 快速简洁的NoSQL云数据库服务。提供模式化、关联关系、自动REST API（支持类MongoDB查询）及高效多用户数据管理界面。免费方案支持3用户、2,500条记录和每秒1次API请求。
* [CockroachDB Cloud](https://www.cockroachlabs.com/pricing/) — 免费层每月提供5,000万RUs和10GiB存储（价值15美元）。（[什么是请求单位](https://www.cockroachlabs.com/docs/cockroachcloud/metrics-request-units.html)）
* [Neo4j Aura](https://neo4j.com/cloud/aura/) — 托管原生图数据库/分析平台，支持Cypher查询语言和REST API。限制图规模（5万节点/17.5万关系）。
* [Neon](https://neon.tech/) — 托管PostgreSQL，0.5GB总存储、1个项目、10个分支、无限数据库、主分支持续可用（非活跃5分钟后暂停），非主分支计算每月20小时活跃时间。
* [Prisma Postgres](https://prisma.io/postgres) - 基于unikernel和裸金属运行的超快托管Postgres，1GB存储、10个数据库，集成Prisma ORM。
* [Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free) — 托管原生图数据库，提供GraphQL API。限制每日1MB数据传输。
* [Tinybird](https://tinybird.co) - 无服务器托管ClickHouse，支持HTTP无连接数据摄取，可将SQL查询发布为托管HTTP API。免费层无时间限制，含10GB存储和每日1,000次API请求。
* [TigerGraph Cloud](https://www.tigergraph.com/cloud/) — 托管原生图数据库/分析平台，提供类SQL图查询语言和REST API。免费实例含2vCPU、8GB内存和50GB存储，闲置1小时后休眠。
* [TerminusCMS](https://terminusdb.com/pricing) — TerminusDB的托管免费服务，该数据库是用Prolog和Rust编写的文档与图数据库。开发者免费，企业部署和支持需付费。
* [filess.io](https://filess.io) - 可免费创建两个数据库（每个最大10MB），支持MySQL/MariaDB/MongoDB/PostgreSQL。
* [xata.io](https://xata.io) - 内置强大搜索分析的无服务器数据库。单一API、多类型安全客户端库，优化开发工作流。永久免费层满足业余开发者需求，含3个Xata单位（具体定义见官网）。
* [8base.com](https://www.8base.com/) - 基于MySQL和GraphQL构建的全栈低代码开发平台，提供UI应用构建器。免费层含2,500行数据、500MB存储、1GB/小时无服务器计算和5个客户端应用用户。
* [Nile](https://www.thenile.dev/) — 面向B2B应用的Postgres平台。无限数据库、持续可用不休眠、1GB总存储、5,000万查询令牌、自动扩展、无限向量嵌入

**[⬆️ 返回顶部](#目录)**

## 隧道、WebRTC、WebSocket服务器及其他路由

  * [Pinggy](https://pinggy.io) — 通过单条命令为localhost提供公共URL，无需下载。支持HTTPS/TCP/TLS隧道。免费版隧道有效期为60分钟。
* [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道生成公共URL。
* [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是托管VPN服务，可安全地将类LAN网络扩展到分布式团队。免费版支持最多5人加入的无限网络。
* [Mirna Sockets](https://mirna.cloud/) — 免费Socket即服务平台，部署WebSocket服务器代码时提供wss:// URL，并可监控性能。
* [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露为公共URL。
* [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地服务器暴露为公共URL。提供免费托管版本和[开源代码](https://github.com/localtunnel/localtunnel)。
* [ngrok.com](https://ngrok.com/) — 通过隧道将本地服务器暴露为公共URL。
* [cname.dev](https://cname.dev/) — 免费安全的动态反向代理服务。
* [serveo](https://serveo.net/) — 将本地服务器暴露到互联网。无需安装或注册。提供免费子域名且无限制。
* [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN连接多台电脑形成类LAN网络。支持无限节点（Hamachi替代方案）。
* [segment.com](https://segment.com/) — 事件翻译和路由中心，可转发到第三方服务。免费版每月10万次事件。
* Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
* Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
* [Tailscale](https://tailscale.com/) — 零配置VPN，使用开源WireGuard协议。支持MacOS/iOS/Windows/Linux/Android设备。个人免费版支持100个设备和3个用户。
* [webhookrelay.com](https://webhookrelay.com) — 管理、调试、分发和代理所有Webhook到公共或内部（如localhost）目标。还可通过隧道将私有网络中的服务器暴露为公共HTTP端点（`https://yoursubdomain.webrelay.io <----> http://localhost:8080`）。
* [Hookdeck](https://hookdeck.com/pricing) — 从任何地方开发、测试和监控Webhook。免费版每月10万次请求和10万次尝试，保留3天数据。
* [Xirsys](https://www.xirsys.com/pricing/) — 无限STUN使用+每月500MB TURN带宽（限速），单地理区域。
* [ZeroTier](https://www.zerotier.com) — 开源托管虚拟以太网服务。免费版支持25个客户端的端到端加密网络。提供桌面/移动/NA客户端，可通过网页界面配置自定义路由规则和审批私有网络新节点。
* [LocalXpose](https://localxpose.io) — 反向代理，可将localhost服务器暴露到互联网。免费版隧道有效期为15分钟。
* [Traefik-Hub](https://traefik.io/traefik-hub/) - 通过隧道发布本地运行的服务到公共自定义URL，并通过访问控制保护。免费版支持1个集群中的5个服务。
* [Expose](https://expose.dev/) - 通过安全隧道暴露本地站点。免费版包含欧盟服务器、随机子域名和单用户支持。
* [btunnel](https://www.btunnel.in/) — 将localhost和本地TCP服务器暴露到互联网。免费版包含文件服务器、自定义HTTP请求/响应头、基础认证保护和1小时隧道超时。

**[⬆️ 返回顶部](#目录)**

## 问题跟踪与项目管理

  * [acunote.com](https://www.acunote.com/) — 最多支持5名团队成员的免费项目管理和SCRUM软件
* [asana.com](https://asana.com/) — 私人项目协作免费版
* [Backlog](https://backlog.com) — 一站式项目发布平台。免费版提供1个项目、10名用户和100MB存储空间
* [Basecamp](https://basecamp.com/personal) - 任务清单、里程碑管理、论坛式消息、文件共享和时间跟踪。免费版支持3个项目、20名用户和1GB存储空间
* [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具。免费版提供5GB空间且不限用户数
* [cacoo.com](https://cacoo.com/) — 在线实时图表工具（流程图/UML/网络图）。免费版最多15用户/图表，25张工作表
* [Chpokify](https://chpokify.com/) — 团队版敏捷估算工具。免费支持5名用户，提供Jira集成、不限视频会议/团队/会话
* [clickup.com](https://clickup.com/) — 项目管理平台。基础功能免费，含云存储的付费版。支持移动端和Git集成
* [Clockify](https://clockify.me) - 跨项目工时追踪应用。不限用户数，永久免费
* [Cloudcraft](https://cloudcraft.co/) — AWS架构可视化设计工具，组件支持实时数据展示。免费版提供个人用户不限量私有图表
* [Codegiant](https://codegiant.io) — 集成代码仓库与CI/CD的项目管理平台。免费版支持5人团队、不限仓库/项目/文档，每月500分钟CI/CD时长和30,000分钟无服务器代码运行时长，1GB仓库存储
* [Confluence](https://www.atlassian.com/software/confluence) - Atlassian知识协作工具。免费版最多10名用户
* [contriber.com](https://www.contriber.com/) — 可定制项目管理平台，免费版提供5个工作区
* [Crosswork](https://crosswork.app/) - 多功能项目管理平台。免费版支持3个项目、不限用户数、1GB存储
* [diagrams.net](https://app.diagrams.net/) — 支持Google Drive/OneDrive/Dropbox存储的在线图表工具。全功能免费
* [freedcamp.com](https://freedcamp.com/) - 任务/讨论/里程碑/时间追踪/日历/文件/密码管理。免费版不限项目/用户/存储空间
* [easyretro.io](https://www.easyretro.io/) — 简洁敏捷回顾工具。免费版每月3个公共看板和每个看板1次调研
* [GForge](https://gforge.com) — 复杂项目管理与问题追踪套件，SaaS免费版前5名用户免费，开源项目完全免费
* [gleek.io](https://www.gleek.io) — 开发者免费使用的描述转图表工具，可通过关键词生成非正式UML类图/对象图/实体关系图
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) - 可视化对比两个GraphQL模式差异，标记破坏性/非破坏性/危险变更
* [huboard.com](https://huboard.com/) — GitHub Issues项目管理工具，开源项目免费
* [Hygger](https://hygger.io) — 项目管理平台。免费版不限用户/项目/看板，提供100MB存储
* [Instabug](https://instabug.com) — 移动应用全功能Bug报告与反馈SDK。免费版支持1个应用和1名成员
* [WishKit](https://wishkit.io) — 收集iOS/macOS应用内用户反馈并按投票排优先级。免费版支持1个应用
* [Ilograph](https://www.ilograph.com/)  — 支持多视角查看的基础设施交互式图表工具。免费版提供不限量私有图表（最多3名查看者）
* [Jira](https://www.atlassian.com/software/jira) — 企业级软件开发项目管理工具。免费版最多10名用户
* [kanbanflow.com](https://kanbanflow.com/) — 看板式项目管理。基础功能免费
* [kanbantool.com](https://kanbantool.com/) — 看板项目管理工具。免费版提供2个看板和2名用户（不含附件功能）
* [kan.bn](https://kan.bn/) - 灵活强大的看板应用。免费版支持1名用户创建不限量看板/列表/卡片
* [Kitemaker.co](https://kitemaker.co) - 集成Slack/Discord/Figma/Github的全周期产品协作平台。不限用户/空间，免费版支持250个工作项
* [Kiter.app](https://www.kiter.app/) - 求职进度管理工具（面试/机会/人脉追踪），含网页版和Chrome插件，完全免费
* [Kumu.io](https://kumu.io/)  — 支持动画/装饰/筛选/聚类/表格导入的关系图谱工具。免费版不限公开项目规模，学生可享私有项目，沙盒模式支持临时编辑
* [Linear](https://linear.app/) — 极简问题追踪工具。免费版不限成员数，支持10MB文件上传和250个问题（归档除外）
* [leiga.com](https://www.leiga.com/) — AI驱动的自动化项目管理SaaS。免费版支持10名用户/20个自定义字段/2GB存储，视频AI分析限5分钟/条，自动化执行20次/用户/月
* [Lucidchart](https://www.lucidchart.com/) - 在线协作图表工具。免费版提供3个可编辑文档、100个专业模板和基础协作功能
* [MeisterTask](https://www.meistertask.com/) — 团队在线任务管理。免费版支持3个项目且不限成员
* [MeuScrum](https://www.meuscrum.com/en) - 含看板功能的免费在线Scrum工具
* [nTask](https://www.ntaskmanager.com/) — 团队协作项目管理软件。免费版永久提供100MB存储和5名用户/团队，支持不限量工作区/会议/任务单/工时表/问题追踪
* [Ora](https://ora.pm/) - 敏捷任务管理与团队协作工具。免费版支持3名用户，文件限制10MB
* [pivotaltracker.com](https://www.pivotaltracker.com/) — 不限量公开项目免费，私有项目限2个（3名活跃用户+不限量只读用户）
* [plan.io](https://plan.io/) — 集成代码仓库的项目管理平台。免费版支持2名用户/10个客户/500MB存储
* [Plane](https://plane.so/) - 简洁可扩展的开源产品管理工具。免费版不限成员，支持5MB文件上传和1000个问题
* [planitpoker.com](https://www.planitpoker.com/) — 免费在线敏捷估算工具（计划扑克）

  * [ScrumFast](https://www.scrumfast.com) - 界面直观的Scrum看板工具，最多支持5名用户免费使用
* [Shake](https://www.shakebugs.com/) - 移动应用内错误报告与反馈工具，免费版每月每应用可提交10个错误报告
* [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费支持最多10名用户
* [Tadum](https://tadum.app) - 专为周期性会议设计的议程与纪要应用，10人以下团队免费
* [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，开源项目免费
* [Tara AI](https://tara.ai/) — 简洁的迭代管理服务，免费版支持无限制任务/迭代/工作区且不设用户上限
* [targetprocess.com](https://www.targetprocess.com/) — 可视化项目管理工具，从看板到Scrum支持各类流程，免费版不限用户数（最多1,000个数据实体）{[详情](https://www.targetprocess.com/pricing/)}
* [taskade.com](https://www.taskade.com/) — 实时协作任务清单与团队大纲工具，免费版包含1个工作区（任务/项目无限制）、1GB文件存储、1周项目历史记录及5人视频会议
* [taskulu.com](https://taskulu.com/) — 基于角色的项目管理工具，最多5名用户免费，支持GitHub/Trello/Dropbox/Google Drive集成
* [Teaminal](https://www.teaminal.com) - 远程团队站会/回顾/迭代规划工具，15人以下团队免费
* [teamwork.com](https://teamwork.com/) — 项目管理与团队聊天工具，免费版支持5用户+2项目
* [teleretro.com](https://www.teleretro.com/) — 趣味回顾工具（含破冰/GIF/表情），免费版支持3次回顾会议且成员不限
* [testlio.com](https://testlio.com/) — 问题跟踪/测试管理/公测平台，个人使用免费
* [terrastruct.com](https://terrastruct.com/) — 专为软件架构设计的在线图表工具，免费版每图最多4层结构
* [todoist.com](https://todoist.com/) — 协同与个人任务管理，免费版含：5个活跃项目/每项目5用户/5MB文件上传/3个筛选器/1周活动记录
* [trello.com](https://trello.com/) — 看板式项目管理工具，免费版含无限个人看板+10个团队看板
* [Tweek](https://tweek.so/) — 极简周计划日历与任务管理工具
* [ubertesters.com](https://ubertesters.com/) — 测试平台（含集成与众测），免费版支持2个项目+5名成员
* [Wikifactory](https://wikifactory.com/) — 产品设计服务（含项目/VCS/问题跟踪），免费版支持无限项目与协作者+3GB存储
* [Yodiz](https://www.yodiz.com/) — 敏捷开发与问题跟踪工具，最多3名用户免费且项目不限
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) — 免费托管版YouTrack（InCloud），开源项目与私有项目均可使用（3用户免费），含时间跟踪与敏捷看板功能
* [zenhub.com](https://www.zenhub.com) — GitHub内嵌的独家项目管理方案，公开仓库/非营利组织/开源项目免费
* [zenkit.com](https://zenkit.com) — 项目管理与协作工具，5人以下团队免费（含5GB附件）
* [Zube](https://zube.io) — 项目管理工具，免费版支持4个项目+4名用户，提供GitHub集成
* [Toggl](https://toggl.com/) — 提供两款免费效率工具：[Toggl Track](https://toggl.com/track/)时间跟踪应用（面向自由职业者，免费版含无限记录/项目/客户/标签/报告），以及[Toggl Plan](https://toggl.com/plan/)任务规划工具（个人开发者免费版含无限任务/里程碑/时间线）
* [Sflow](https://sflow.io) — 专为敏捷软件开发/营销/销售/客户支持打造的项目管理工具，特别适合外包与跨组织协作项目，免费版支持3个项目+5名成员
* [Pulse.red](https://pulse.red) — 极简时间跟踪与项目工时表应用

**[⬆️ 返回顶部](#目录)**

## 存储与媒体处理

  * [AndroidFileHost](https://androidfilehost.com/) - 免费文件共享平台，提供无限速度、带宽、文件数量和下载次数。主要面向Android开发者相关文件（如APK构建、自定义ROM和修改等），但也接受其他类型文件。
* [borgbase.com](https://www.borgbase.com/) — 为Borg Backup提供的简单安全异地备份托管服务。免费提供10GB备份空间和两个存储库。
* [icedrive.net](https://www.icedrive.net/) - 简易云存储服务。10GB免费存储空间。
* [sync.com](https://www.sync.com/) - 端到端加密云存储服务。5GB免费存储空间。
* [pcloud.com](https://www.pcloud.com/) - 云存储服务。最高10GB免费存储空间。
* [sirv.com](https://sirv.com/) — 智能图片CDN，支持实时图片优化和调整尺寸。免费套餐包含500MB存储空间和2GB带宽。
* [cloudimage.io](https://www.cloudimage.io/en/home) — 全球1500+节点的完整图片优化和CDN服务。提供多种图片缩放、压缩和水印功能。开源插件支持响应式图片、360度图片制作和图片编辑。免费月套餐包含25GB CDN流量、25GB缓存存储和无限转换次数。
* [cloudinary.com](https://cloudinary.com/) — 图片上传、强大处理、存储和交付服务，支持Ruby、Python、Java、PHP、Objective-C等多种语言库。免费套餐每月25积分（1积分=1000次图片转换/1GB存储/1GB CDN用量）。
* [Dropshare](https://dropsha.re) - 零知识文件共享。采用AES-256-GCM加密的端到端加密文件共享，客户端处理且服务器零数据访问。免费支持最大1GB文件上传且不收集数据。
* [embed.ly](https://embed.ly/) — 提供网页媒体嵌入API、响应式图片缩放和网页元素提取服务。免费套餐每月5000个URL（15请求/秒）。
* [filestack.com](https://www.filestack.com/) — 文件选择器、转换和交付服务，免费支持250个文件、500次转换和3GB带宽。
* [file.io](https://www.file.io) - 2GB文件存储空间。文件下载一次后自动删除。提供REST API接口，限速1请求/分钟。
* [freetools.site](https://freetools.site/) — 免费在线工具。转换或编辑文档、图片、音频、视频等。
* [GoFile.io](https://gofile.io/) - 免费文件共享和存储平台，支持网页界面和API。无文件大小、带宽、下载次数限制，但十天无下载的文件会被删除。
* [gumlet.com](https://www.gumlet.com/) — 图片视频托管、处理和CDN流媒体服务。免费套餐每月250GB视频流量和30GB图片流量。
* [image-charts.com](https://www.image-charts.com/) — 带水印的无限图片图表生成服务。
* [Imgbot](https://github.com/marketplace/imgbot) — 自动优化图片的友好机器人，在不损失质量的前提下减小文件体积。对开源项目免费。
* [ImgBB](https://imgbb.com/) — 无限图片托管服务。拖拽图片到任意位置上传（单图限32MB）。获取直链、BBCode和HTML缩略图。登录可查看上传历史。
* [imgen](https://www.jitbit.com/imgen/) - 免费无限社交媒体封面图生成API，无水印。
* [imgix](https://www.imgix.com/) - 图片缓存、管理和CDN服务。免费套餐含1000张原始图片、无限转换和100GB带宽。
* [kraken.io](https://kraken.io/) — 网站性能图片优化服务，免费支持最大1MB文件。
* [npoint.io](https://www.npoint.io/) — 支持协作模式编辑的JSON存储服务。
* [nitropack.io](https://nitropack.io/) - 自动前端加速优化（缓存、图片和代码优化、CDN）。免费支持每月5000次页面浏览。
* [otixo.com](https://www.otixo.com/) — 加密、共享、复制和移动所有云存储文件。基础版支持无限文件传输（单文件最大250MB）和5个加密文件。
* [packagecloud.io](https://packagecloud.io/) — YUM/APT/RubyGem/PyPI软件包托管仓库。提供有限免费计划，开源项目可申请特殊计划。
* [getpantry.cloud](https://getpantry.cloud/) — 适用于个人项目、黑客松和移动应用的简易JSON存储API。
* [Pinata IPFS](https://pinata.cloud) — 最简单的IPFS文件上传管理工具。友好界面和API，免费提供1GB存储空间。
* [placekitten.com](https://placekitten.com/) — 快速获取猫咪占位图的简易服务。
* [plot.ly](https://plot.ly/) — 数据图表制作与分享。免费版含无限公开文件和10个私有文件。
* [podio.com](https://podio.com/) — 最多5人团队可使用基础版功能（不含用户管理）。
* [QRME.SH](https://qrme.sh) - 快速批量生成美观QR码——无需登录/无水印/无广告。每批最多100个URL。
* [QuickChart](https://quickchart.io) — 生成可嵌入的图表、图形和QR码。
* [redbooth.com](https://redbooth.com) — P2P文件同步，免费支持最多2个用户。
* [resmush.it](https://resmush.it) — 免费图片优化API，已集成WordPress/Drupal/Magento等主流CMS。已处理超70亿张图片仍保持免费。
* [Shotstack](https://shotstack.io) - 大规模视频生成编辑API。免费每月20分钟渲染视频。
* [tinypng.com](https://tinypng.com/) — PNG/JPEG图片压缩API，每月免费500次压缩。
* [transloadit.com](https://transloadit.com/) — 文件上传及视频/音频/图片/文档转码服务。开源项目/慈善机构/学生通过GitHub学生包免费。商业应用可免费试用2GB。
* [twicpics.com](https://www.twicpics.com) - 响应式图片即服务。提供图片CDN、媒体处理API和前端自动化优化库。免费套餐每月3GB流量。
* [uploadcare.com](https://uploadcare.com/hub/developers/) — 基于尖端算法的媒体处理管线工具包。开发者可免费使用：文件上传API/UI、图片CDN、自适应交付和智能压缩。免费套餐含3000次上传、3GB流量和3GB存储。
* [imagekit.io](https://imagekit.io) – 分钟级集成的图片CDN，支持自动优化和实时转换。免费套餐每月20GB带宽。
* [internxt.com](https://internxt.com) – 基于绝对隐私和极致安全的零知识文件存储服务。注册即获永久免费10GB空间。
* [degoo.com](https://degoo.com/) – AI云存储服务，免费20GB空间（支持3台设备），推荐用户可获5GB奖励（90天不活跃将失效）。

  * [ImageEngine](https://imageengine.io/) – ImageEngine 是一款简单易用的全球图片 CDN 服务，60 秒内即可完成配置。支持 AVIF 和 JPEGXL 格式，提供 WordPress、Magento、React、Vue 等插件。点击[此处](https://imageengine.io/developer-program/)申请免费开发者账户。
* [DocsParse](https://docsparse.com/) – 基于 GPT 的 AI 处理工具，可将 PDF、图片转换为 JSON、CSV、EXCEL 等结构化数据。每月免费赠送 30 积分。
* [VaocherApp 二维码生成器](https://www.vaocherapp.com/qr-code-generator) – 轻松为礼品卡、代金券和促销活动创建自定义二维码。支持自定义样式、颜色、Logo 等。
* [LibreQR](https://libreqr.com) — 注重隐私且无追踪的免费二维码生成器。完全免费使用，不收集任何数据。
* [Doradrop](https://doradrop.com) — Doradrop 是一个无广告且提供无限存储的文件共享平台。无需登录即可通过安全链接即时分享文件。

**[⬆️ 返回顶部](#目录)**

## 设计与用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 精选的免费图库、音频和视频资源列表
* [Float UI](https://floatui.com/) - 免费网页开发工具，即使非设计师也能快速创建现代响应式网站
* [Ant Design 着陆页](https://landing.ant.design/) - 由Ant Motion动效组件构建的模板，提供丰富的首页模板，可快速使用模板代码包，还支持通过编辑器快速构建专属页面
* [Backlight](https://backlight.dev/) - 专为开发设计协作打造的完整编码平台，免费版支持3名编辑人员共同维护1个设计系统（不限查看人数）
* [BoxySVG](https://boxy-svg.com/app) - 可安装的免费SVG绘制工具，支持导出SVG/PNG/JPEG等格式
* [Carousel Hero](https://carouselhero.com/) - 免费社交媒体轮播图制作工具
* [Circum Icons](https://circumicons.com) - 风格统一的开源图标库，提供React/Vue/Svelte适用的SVG图标
* [clevebrush.com](https://www.cleverbrush.com/) - 免费图形设计/照片拼贴应用，同时提供付费组件集成服务
* [cloudconvert.com](https://cloudconvert.com/) - 支持208种格式的万能转换工具（含视频和GIF）
* [CodeMyUI](https://codemyui.com) - 精选网页设计与UI灵感库（含代码片段）
* [ColorKit](https://colorkit.co/) - 在线调色板生成与灵感获取工具
* [coolors](https://coolors.co/) - 免费配色方案生成器
* [CMYK Pantone](https://www.cmyktopantone.com/) - 免费CMYK转Pantone等色彩模型的快速转换工具
* [Branition](https://branition.com/colors) - 专为品牌设计精选的调色板
* [css-gradient.com](https://www.css-gradient.com/) - 免费生成跨浏览器CSS渐变的工具（支持RGB/HEX格式）
* [easyvectors.com](https://easyvectors.com/) - 免费SVG矢量图库
* [figma.com](https://www.figma.com) - 在线团队协作设计工具，免费版包含无限文件（最多2名编辑+3个项目）
* [Flyon UI](https://flyonui.com/)- 最简易的Tailwind CSS组件库
* [framer.com](https://www.framer.com/) - 专业原型设计工具，免费版支持无限查看者+2名编辑+3个项目
* [freeforcommercialuse.net](https://freeforcommercialuse.net/) - 免版权商用图库（含模特/场景授权）
* [Gradientos](https://www.gradientos.app) - 快速便捷的渐变选择工具
* [Icon Horse](https://icon.horse) - 通过简单API获取任意网站高清favicon
* [Iconoir](https://iconoir.com) - 开源图标库（数千图标），支持React/React Native/Flutter/Vue/Figma/Framer
* [Icons8](https://icons8.com) - 图标/插画/照片/音乐/设计工具集，免费版提供有限格式的低分辨率资源
* [landen.co](https://www.landen.co) - 无代码建站工具，免费版可发布1个完全可定制的网站
* [Quant Ux](https://quant-ux.com/) - 完全免费开源的原型设计工具
* [lensdump.com](https://lensdump.com/) - 免费云图床服务
* [Lorem Picsum](https://picsum.photos/) - 时尚占位图生成工具（URL后添加尺寸参数即可获取随机图片）
* [LottieFiles](https://lottiefiles.com/) - 全球最大轻量动画平台，提供Android/iOS/Web的Lottie动画工具
* [MagicPattern](https://www.magicpattern.design/tools) - CSS/SVG背景生成工具集（渐变/图案/斑点等）
* [marvelapp.com](https://marvelapp.com/) - 设计/原型/协作平台（免费版限1用户1项目）
* [Mindmup.com](https://www.mindmup.com/) - 云端无限量思维导图工具（全平台即时同步）
* [Mockplus iDoc](https://www.mockplus.com/idoc) - 强大的设计协作交付工具（免费版含3用户5项目全功能）
* [mockupmark.com](https://mockupmark.com/create/free) - 免费40款T恤/服装电商模型生成器
* [Modeldraw.com](https://modeldraw.com) - 完整图表平台（UML/系统架构/流程图/思维导图/敏捷工作流），支持无限成员实时协作
* [Mossaik](https://mossaik.app) - 免费SVG生成工具（波浪/斑点/图案等）
* [movingpencils.com](https://movingpencils.com) - 浏览器端免费矢量编辑器
* [Octopus.do](https://octopus.do) - 可视化网站地图构建工具（实时协作）
* [Pencil](https://github.com/evolus/pencil) - 基于Electron的开源设计工具
* [Penpot](https://penpot.app) - 开源网页版设计原型工具（完全免费，支持SVG）
* [pexels.com](https://www.pexels.com/) - 免版权商用图库（提供关键词搜索API）
* [photopea.com](https://www.photopea.com) - 免费在线高级设计编辑器（支持PSD/XCF/Sketch格式）
* [pixlr.com](https://pixlr.com/) - 媲美商业软件的免费在线图片编辑器
* [Plasmic](https://www.plasmic.app/) - 可集成到代码库的网页设计与页面构建工具（支持响应式设计与代码扩展）
* [Pravatar](https://pravatar.cc/) - 随机虚拟头像生成服务（支持URL直链）
* [PNG转WebP转换器](https://pngtowebpconverter.com/) - 浏览器端直接转换工具（无需上传，完全客户端处理）
* [Proto.io](https://www.proto.io) - 无代码交互式UI原型工具（免费版含1用户/1项目/5原型/100MB存储）
* [resizeappicon.com](https://resizeappicon.com/) - 简易应用图标尺寸管理工具
* [Rive](https://rive.app) - 多平台动画创作工具（个人永久免费），提供编辑器与各平台运行时
* [storyset.com](https://storyset.com/) - 免费定制插画生成工具
* [smartmockups.com](https://smartmockups.com/) - 产品模型生成工具（200个免费模板）

  * [Tailark](https://tailark.com/) - 专为营销网站设计的现代化响应式预制UI组件库
* [tabler-icons.io](https://tabler-icons.io/) — 1500+可自由复制粘贴的SVG可编辑图标
* [tweakcn](https://tweakcn.com/) — shadcn/ui精美主题库，支持实时自定义颜色与排版
* [UI Avatars](https://ui-avatars.com/) - 根据姓名生成首字母头像，支持URL直接调用与参数配置
* [unDraw](https://undraw.co/) - 持续更新的免版权精美SVG插图库
* [unsplash.com](https://unsplash.com/) - 可商用的免版权图库（无限制使用许可）
* [vectr.com](https://vectr.com/) — 网页/桌面端免费矢量设计工具
* [walkme.com](https://www.walkme.com/) — 企业级用户引导平台，免费版支持3个5步以内的操作指引
* [Webflow](https://webflow.com) - 带动画功能的可视化建站工具，免费支持2个项目
* [Updrafts.app](https://updrafts.app) - TailwindCSS可视化建站工具，非商业用途免费
* [whimsical.com](https://whimsical.com/) - 协作式流程图/线框图/便利贴/思维导图工具，免费创建4个看板
* [Zeplin](https://zeplin.io/) — 设计师与开发者协作平台，免费支持1个项目
* [Pixelixe](https://pixelixe.com/) — 在线创意图形设计编辑器
* [Responsively App](https://responsively.app) - 免费响应式网页开发调试工具
* [SceneLab](https://scenelab.io) - 在线样机设计编辑器，含海量免费模板
* [xLayers](https://xlayers.dev) - Sketch设计文件预览转换工具（支持转Angular/React/Vue等框架）
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式建站工具，免费支持5个页面
* [Mastershot](https://mastershot.app) - 无水印的免费浏览器视频编辑器，支持1080p导出
* [Unicorn Platform](https://unicornplatform.com/) - 带托管的极简落地页生成器，免费1个网站
* [SVGmix.com](https://www.svgmix.com/) - 30万+免费SVG图标/品牌LOGO库，内置简易矢量编辑器
* [svgrepo.com](https://www.svgrepo.com/) - 可商用免费SVG矢量资源搜索引擎
* [haikei.app](https://www.haikei.app/) - SVG形状/背景/图案生成器
* [Canva](https://canva.com) - 免费在线视觉设计工具
* [Superdesigner](https://superdesigner.co) - 一键生成独特背景/图案/形状的设计工具集
* [TeleportHQ](https://teleporthq.io/) - 低代码前端协作平台，免费3个项目且支持代码导出
* [vector.express](https://vector.express) — 多格式矢量文件快速转换器
* [Vertopal](https://www.vertopal.com) - 免费在线文件格式转换平台（含开发者专用转换器）
* [okso.app](https://okso.app) - 极简在线绘图工具，支持导出PNG/JPG/SVG/WEBP格式
* [Wdrfree SVG](https://wdrfree.com/free-svg) - 黑白风格免费SVG切割文件
* [Lucide](https://lucide.dev) - 免费可定制SVG图标工具包
* [Logo.dev](https://www.logo.dev) - 4400万+品牌LOGO的API接口，前1万次调用免费
* [MDBootstrap](https://mdbootstrap.com/) - 免费商用Bootstrap/Angular/React/Vue组件库（含700+组件）
* [TW Elements](https://tw-elements.com/) - 基于Tailwind CSS重构的Bootstrap组件库
* [DaisyUI](https://daisyui.com/) - Tailwind CSS组件库（减少类名书写）
* [Scrollbar.app](https://scrollbar.app) - 网页滚动条样式设计工具
* [css.glass](https://css.glass/) - 毛玻璃效果CSS生成器
* [hypercolor.dev](https://hypercolor.dev/) - Tailwind CSS渐变色库与生成器
* [iconify.design](https://icon-sets.iconify.design/) - 100+图标库统一搜索平台
* [NextUI](https://nextui.org/) - 免费现代化React & Next.js组件库
* [Glyphs](https://glyphs.fyi/) - 开源可编辑图标设计系统
* [ShadcnUI](https://ui.shadcn.com/) - 可复制粘贴的优美开源组件库
* [HyperUI](https://www.hyperui.dev/) - 开源Tailwind CSS组件库
* [Calendar Icons Generator](https://calendariconsgenerator.app/) - 一键生成全年日期图标
* [Image BG Blurer](https://imagebgblurer.com/) - 图片背景模糊化生成器（适配Notion/Trello等工具）
* [Webstudio](https://webstudio.is/) - Webflow开源替代方案，免费版支持5个自定义域名网站
* [Nappy](https://nappy.co/) - 黑人及棕色人种主题免费图库
* [Tailkits](https://tailkits.com/) - Tailwind模板/组件/工具合集
* [Tailcolors](https://tailcolors.com/) - Tailwind CSS v4调色板工具
* [Excalidraw](https://excalidraw.com/) - 免费在线手绘风格绘图工具
* [Lunacy](https://icons8.com/lunacy) - 内置素材的免费图形设计工具（离线可用）
* [Flows](https://flows.sh/) - 产品用户引导平台（免费支持250月活用户）

**[⬆️ 返回顶部](#目录)**

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 展示所有最佳设计的网站（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计作品集] 设计师展示作品的平台。可按UI/UX项目分类筛选。
  * [dribbble](https://dribbble.com/) - [设计灵感] 独特的设计灵感来源，通常并非来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好，寻找最佳着陆页作为设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [着陆页 / UI套件 / 网页截图] Lapa Ninja是一个展示6025个最佳着陆页案例的图库，提供设计师免费书籍和来自网络的免费UI套件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [着陆页设计] 定期更新的着陆页截图。包括桌面、平板和移动端截图。
  * [Mobbin](https://mobbin.design/) - [移动端截图] 通过我们50,000+可完全搜索的移动应用截图库，节省UI & UX研究时间。
  * [Uiland Design](https://uiland.design/) - [移动端截图] 探索来自非洲及全球领先公司的移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动端截图] 一个设计灵感库，展示最优秀的UI UX模式（iOS和Android），供设计师、开发者和产品制造者参考。
  * [Page Flows](https://pageflows.com/) - [移动端 / 网页视频和截图] 许多移动和网页应用的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动端截图] 获取灵感并跟上最新的网页和移动应用UI设计趋势。可按模式和应用程序筛选。
  * [scrnshts](https://scrnshts.club/) - [移动端截图] 精心挑选的最精美的应用商店设计截图集合。
  * [Refero](https://refero.design/) - [网页截图] 来自优秀网页应用的设计参考集合，已标记并可搜索。


**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 提供免费开发者计划，每月30,000次请求
* [carto.com](https://carto.com/) — 基于您的数据与公共数据创建地图和地理空间API
* [Clockwork Micro](https://clockworkmicro.com/) — 精准如钟表的地图工具。每月五万次免费查询（地图瓦片、db2vector、高程数据）
* [developers.arcgis.com](https://developers.arcgis.com) — 提供跨平台（网页/桌面/移动端）的地图API与SDK，支持地理空间数据存储、分析、地理编码、路径规划等功能。每月包含200万次免费底图瓦片调用、2万次非存储地理编码、2万次简单路径规划、5,000次行驶时间计算及5GB免费瓦片+数据存储
* [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK实现位置发现、场所搜索与情境感知内容
* [geoapify.com](https://www.geoapify.com/) — 矢量与栅格地图瓦片、地理编码、地点搜索、路径规划、等值线API。每日3,000次免费请求
* [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日2,500次免费查询
* [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码与地理解析。每月1万次免费查询
* [geojs.io](https://www.geojs.io/) — 高可用性的REST/JSON/JSONP IP地理位置查询API
* [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析与共享地理数据
* [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐包含路径规划、路线优化、距离矩阵、地理编码和地图匹配功能
* [here](https://developer.here.com/) — 地图与位置感知应用的API和SDK。每月25万次免费事务处理
* [locationiq.com](https://locationiq.com/) — 地理编码、地图与路径规划API。每日5,000次免费请求
* [mapbox.com](https://www.mapbox.com/) — 提供地图数据展示所需的地图服务、地理空间服务及SDK
* [maptiler.com](https://www.maptiler.com/cloud/) — 矢量地图服务与地图可视化SDK。免费矢量瓦片每周更新，含四种地图样式
* [nominatim.org](https://nominatim.org/) — OpenStreetMap的免费地理编码服务，支持全球地址搜索与反向地理编码
* [nextbillion.ai](https://nextbillion.ai/) - 地图相关服务：地理编码、导航（方向查询、路径规划、路线优化、距离矩阵）、地图SDK（矢量/静态/移动端）。[每项服务均有免费配额](https://nextbillion.ai/pricing)
* [opencagedata.com](https://opencagedata.com) — 聚合OpenStreetMap等开放地理数据源的地理编码API。每日2,500次免费查询
* [osmnames](https://osmnames.org/) — 地理编码服务，搜索结果按相关维基百科页面热度排序
* [positionstack](https://positionstack.com/) - 全球地点与坐标的免费地理编码服务。个人用户每月25,000次请求
* [stadiamaps.com](https://stadiamaps.com/) — 地图瓦片、路径规划、导航等地理空间API。非商业用途及测试每日2,500次免费地图浏览与API请求
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

  * [3v4l](https://3v4l.org/) - 免费在线PHP shell和代码片段分享网站，可在300多个PHP版本中运行您的代码
* [Android Studio](https://developer.android.com/studio) — Android Studio为各类Android设备提供最快的应用构建工具。这款开源IDE对所有人免费，是开发Android应用的最佳选择。支持Windows、Mac、Linux甚至ChromeOS！
* [AndroidIDE](https://m.androidide.com/) — 一款开源IDE，可在Android设备上开发基于Gradle的真实Android应用。
* [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用框架。
* [apiary.io](https://apiary.io/) — 协作式API设计工具，提供即时API模拟和生成文档（免费版支持无限API蓝图和无限用户，包含一个管理员账户和托管文档）。
* [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费版提供[强大的核心功能集](https://www.barebones.com/products/bbedit/comparison.html)，并可升级至高级功能。
* [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本集合。这是一项免费的公共服务。
* [BlueJ](https://bluej.org) — 专为初学者设计的免费Java开发环境，全球数百万人使用。由Oracle支持，提供简单GUI帮助初学者。
* [Bootify.io](https://bootify.io/) - 支持自定义数据库和REST API的Spring Boot应用生成器。
* [Brackets](http://brackets.io/) - Brackets是一款专为网页开发设计的开源文本编辑器。它轻量、易用且高度可定制。
* [cacher.io](https://www.cacher.io) — 代码片段管理器，支持标签和100多种编程语言。
* [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
* [Cody](https://sourcegraph.com/cody) - 免费AI编程助手，可编写（代码块、自动补全、单元测试）、理解（了解整个代码库）、修复和查找代码。支持VS Code、JetBrains和在线使用。
* [codiga.io](https://codiga.io/) — 编码助手，可直接在IDE中搜索、定义和重用代码片段。个人和小型组织免费。
* [codesnip.com.br](https://codesnip.com.br) — 简单的代码片段管理器，支持分类、搜索和标签。免费且无限制。
* [cocalc.com](https://cocalc.com/) —（原cloud.sagemath.com）— 云端协作计算。通过浏览器访问完整的Ubuntu系统，内置协作工具和大量数学、科学、数据科学免费软件，预装Python、LaTeX、Jupyter Notebooks、SageMath、scikitlearn等。
* [code.cs50.io](https://code.cs50.io/) - CS50的Visual Studio Code是一款Web应用，适配GitHub Codespaces供学生和教师使用。
* [codepen.io](https://codepen.io/) — CodePen是前端开发的游乐场。
* [codesandbox.io](https://codesandbox.io/) — 在线React、Vue、Angular、Preact等开发环境。
* [Components.studio](https://webcomponents.dev/) - 隔离式代码组件开发，可视化故事、测试并发布到npm。
* [Eclipse Che](https://www.eclipse.org/che/) - 基于Web和Kubernetes的多语言支持IDE，面向开发团队。开源且社区驱动。Red Hat托管的在线实例可在[workspaces.openshift.com](https://workspaces.openshift.com/)访问。
* [fakejson.com](https://fakejson.com/) — FakeJSON通过API快速生成虚假数据。描述需求后，API返回JSON格式数据。加速创意上市过程，先模拟后实现。
* [ForgeCode](https://forgecode.dev/) — 支持Claude、GPT4系列、Grok、Deepseek、Gemini等前沿模型的AI编程助手。原生兼容CLI，无缝集成任何IDE。免费层包含本地处理的基本AI模型访问。
* [GetVM](https://getvm.io) — 即时免费的Linux和IDE Chrome侧边栏。免费层每天提供5个VM。
* [GitPod](https://www.gitpod.io) — 即时可用的GitHub项目开发环境。免费层每月50小时。
* [ide.goorm.io](https://ide.goorm.io) goormIDE是云端全功能IDE。支持多语言，基于Linux容器的完整Web终端，端口转发、自定义URL、实时协作与聊天、链接分享、Git/Subversion支持。更多功能（免费层包含1GB RAM和10GB存储/容器，5个容器槽）。
* [JDoodle](https://www.jdoodle.com) — 60多种语言的在线编译器和编辑器，免费计划每天200次REST API代码编译。
* [jetbrains.com](https://jetbrains.com/products.html) — 生产力工具、IDE和部署工具（如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/)等）。学生、教师、开源和用户组免费。
* [jsbin.com](https://jsbin.com) — JS Bin是前端网页（HTML、CSS和JavaScript）的游乐场和代码分享站点。还支持Markdown、Jade和Sass。
* [jsfiddle.net](https://jsfiddle.net/) — JS Fiddle是前端网页的游乐场和协作式代码分享站点。
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 返回虚假JSON数据的REST API端点。也可本地运行服务器。
* [Lazarus](https://www.lazarus-ide.org/) — Lazarus是Delphi兼容的跨平台快速应用开发IDE。
* [MarsCode](https://www.marscode.com/) - 免费的AI驱动云端IDE。
* [micro-jaymock](https://micro-jaymock.now.sh/) - 生成虚假JSON数据的微型API模拟服务。
* [mockable.io](https://www.mockable.io/) — Mockable是简单的可配置服务，用于模拟RESTful API或SOAP Web服务。快速定义端点并返回JSON或XML数据。
* [mockaroo](https://mockaroo.com/) — Mockaroo生成CSV、JSON、SQL和Excel格式的测试数据。也可创建后端API模拟。
* [Mocklets](https://mocklets.com) - 基于HTTP的模拟API工具，支持终身免费层，加速并行开发和全面测试。
* [Paiza](https://paiza.cloud/en/) — 无需配置即可在浏览器中开发Web应用。免费计划提供24小时有效期的服务器，每天4小时运行时间，2核CPU、2GB RAM和1GB存储。
* [Prepros](https://prepros.io/) - Prepros可编译Sass、Less、Stylus、Pug/Jade、Haml、Slim、CoffeeScript和TypeScript，自动刷新浏览器，简化网站开发和测试。点击几下即可添加自定义工具。
* [Replit](https://replit.com/) — 支持多种语言的云端编程环境。
* [SoloLearn](https://code.sololearn.com) — 适合运行代码片段的云端编程游乐场。支持多种语言。运行代码无需注册，保存代码需注册。还提供初级和中级编程免费课程。
* [stackblitz.com](https://stackblitz.com/) — 在线/云端代码IDE，创建、编辑和部署全栈应用。支持任何流行的基于NodeJS的前后端框架。创建新项目的短链接：[https://node.new](https://node.new)。

  * [Visual Studio Code](https://code.visualstudio.com/) - 专为构建和调试现代Web及云应用重新定义并优化的代码编辑器。由Microsoft开发。
* [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能完整的IDE，拥有数千个扩展，支持跨平台应用开发（可下载适用于iOS和Android的Microsoft扩展）、桌面、Web和云端开发，多语言支持（C#、C++、JavaScript、Python、PHP等）。
* [VSCodium](https://vscodium.com/) - 社区驱动、无遥测/追踪、自由许可的Microsoft编辑器VSCode二进制分发版。
* [wakatime.com](https://wakatime.com/) — 通过文本编辑器插件量化你的编码活动数据，提供免费有限计划。
* [Wave Terminal](https://waveterm.dev/) - Wave是一款开源跨平台终端，支持无缝工作流。可内联渲染任何内容，保存会话和历史记录。基于开放Web标准构建，支持MacOS和Linux。
* [WebComponents.dev](https://webcomponents.dev/) — 浏览器内IDE，支持58种模板隔离开发Web组件，包含故事和测试功能。
* [PHPSandbox](https://phpsandbox.io/) — PHP在线开发环境
* [WebDB](https://webdb.app) - 免费高效的数据库IDE。功能包括服务器发现、ER图、数据生成器、AI、NoSQL结构管理器、数据库版本控制等。
* [Zed](https://zed.dev/) - Zed是由Atom和Tree-sitter创建者开发的高性能多人协作代码编辑器。
* [OneCompiler](https://onecompiler.com/) - 支持70+语言的免费在线编译器，包括Java、Python、C++、JavaScript等。

**[⬆️ 返回顶部](#目录)**

## 数据分析、事件与统计

  * [Userbird](https://userbird.com) - 具备热力图、会话录制和收入追踪功能的Google Analytics替代方案
* [Repohistory](https://repohistory.com) - 美观的GitHub仓库流量历史看板（突破14天限制）。免费版支持监控单个仓库
* [Dwh.dev](https://dwh.dev) - Snowflake数据云可观测性方案（个人使用免费）
* [Hightouch](https://hightouch.com/) - 反向ETL平台，可将数据仓库的客户数据同步至CRM/营销/客服工具。免费版支持1个数据同步目标
* [Avo](https://avo.app/) - 简化的分析发布流程：单一事实来源的追踪方案、类型安全分析库、应用内调试器及数据可观测性。免费支持2名成员和1小时数据回溯
* [Branch](https://www.branch.io) - 移动分析平台（免费版支持1万MAU的深度链接等服务）
* [Census](https://www.getcensus.com/) - 反向ETL与运营分析平台（免费版支持从数据仓库同步10个字段至60+SaaS平台）
* [Clicky](https://clicky.com) - 网站分析平台（免费版支持单站点3000次浏览分析）
* [Databox](https://databox.com) - 多平台整合的商业智能分析工具（免费版含3用户/看板/数据源，1.1亿历史数据记录）
* [Hitsteps.com](https://hitsteps.com/) - 单网站每月2000次页面浏览
* [amplitude.com](https://amplitude.com/) - 每月100万事件量（支持2个应用）
* [GoatCounter](https://www.goatcounter.com/) - 开源Web分析平台（非商业用途免费），含6个月数据保留和10万月页面浏览
* [Google Analytics](https://analytics.google.com/) - 谷歌分析
* [MetricsWave](https://metricswave.com) - 开发者友好的隐私优先GA替代方案（免费版100万月页面浏览且无需信用卡）
* [Expensify](https://www.expensify.com/) - 费用报告工具（免费个人审批工作流）
* [getinsights.io](https://getinsights.io) - 隐私优先的无Cookie分析（免费3000事件/月）
* [heap.io](https://heap.io) - 自动记录iOS/Web应用用户行为（免费1万月会话）
* [Hotjar](https://hotjar.com) - 网站分析与热力图工具（免费版2000日页面浏览+100日快照+3张全年存储热力图），含应用内调查工具（免费3问卷+3反馈组件+20月响应量）
* [Keen](https://keen.io/) - 自定义数据分析平台（免费1000事件/月）
* [Yandex.Datalens](https://datalens.yandex.com/) - 数据可视化分析服务（完全免费无限制）
* [Yandex.Metrica](https://metrica.yandex.com/) - 无限免费分析工具
* [Mixpanel](https://mixpanel.com/) - 10万月追踪用户（无限数据历史与席位，可选欧美数据中心）
* [Moesif](https://www.moesif.com) - REST/GraphQL接口分析（免费50万API调用/月）
* [optimizely.com](https://www.optimizely.com) - A/B测试工具（免费版支持1网站+1iOS+1Android应用）
* [Microsoft PowerBI](https://powerbi.com) - 微软商业智能工具（免费版限100万用户许可证）
* [Row Zero](https://rowzero.io) - 实时连接数据库的极速电子表格（永久免费3个工作簿）
* [sematext.com](https://sematext.com/cloud/) - 免费5万事件/月（1天数据保留+无限看板）
* [Similar Web](https://similarweb.com) - 网站与移动应用分析（免费版含5指标结果+1月App数据+3月网站数据）
* [StatCounter](https://statcounter.com/) - 网站访问分析（免费版显示最近500访客）
* [Statsig](https://statsig.com) - 集成分析/功能标记/A/B测试的全能平台（免费100万计量事件/月）
* [Tableau Developer Program](https://www.tableau.com/developer) - Tableau开发者沙盒（免费获取最新预发布版在线许可证）
* [usabilityhub.com](https://usabilityhub.com/) - 设计原型用户测试平台（免费单用户无限测试）
* [woopra.com](https://www.woopra.com/) - 用户行为分析（免费50万事件+90天数据保留+30+一键集成）
* [counter.dev](https://counter.dev) - 极简隐私友好型网站分析（免费或捐赠付费）
* [PostHog](https://posthog.com) - 全功能产品分析套件（免费100万追踪事件/月+250月调查响应）
* [Uptrace](https://uptrace.dev) - 分布式追踪工具（免费计划+开源项目专属个人订阅）
* [Microsoft Clarity](https://clarity.microsoft.com/) - 免费易用的真实用户行为捕捉工具
* [Beampipe.io](https://beampipe.io) - 简易隐私优先网站分析（免费5域名+1万月页面浏览）
* [Aptabase](https://aptabase.com) - 开源隐私友好的移动/桌面应用分析（免费2万事件/月，支持多平台SDK）
* [Trackingplan](https://www.trackingplan.com/) - 自动化数字分析监测与协作平台（无需代码实现生产环境监控）
* [LogSpot](https://logspot.io) - 统一Web与产品分析平台（免费1万事件/月，含嵌入式组件与自动化机器人）
* [Umami](https://umami.is/) - 简洁快速、隐私优先的开源GA替代方案
* [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 轻量级隐私优先分析工具（免费3域名+600次会话回放/域名，含热力图与目标追踪）
* [AppFit](https://appfit.io) - 跨平台分析与产品管理工具（免费1万事件/月+产品日志+每周洞察）

  * [Peasy](https://peasy.so) - Peasy是一款轻量级、注重隐私的网站和产品分析工具。免费版每月包含3,000次事件追踪。
* [Rybbit](https://rybbit.io) - 开源的Google Analytics替代方案，无需Cookie且操作体验提升10倍。免费版支持每月3,000次事件追踪。

**[⬆️ 返回顶部](#目录)**

## 访客会话录制

  * [Reactflow.com](https://www.reactflow.com/) — 每站点：每日1,000次页面浏览，三个热力图，三个小组件，免费错误追踪
* [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，含开发者工具用于错误复现、实时会话支持及产品分析套件。每月1,000次会话，可访问全部功能，数据保留7天。
* [LogRocket.com](https://www.logrockocket.com) - 每月1,000次会话，30天数据保留，错误追踪，实时模式
* [FullStory.com](https://www.fullstory.com) — 每月1,000次会话，数据保留一个月，三个用户席位。更多信息[见此](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
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

  * [numverify](https://numverify.com/) — 全球电话号码验证与查询 JSON API。每月100次免费调用
* [veriphone](https://veriphone.io/) — 免费、快速、可靠的全球电话号码验证 JSON API。每月1000次免费调用

**[⬆️ 返回顶部](#目录)**

## 支付与账单集成

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购和变现。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和Web。每月10,000美元以下跟踪收入免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访问者位置自动调整定价，助您拓展全球业务并触达新市场（购买力平价）。免费计划包含每月7,500次API请求。
* [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和开箱即用的变现工具，支持iOS、Android、Stripe和Paddle。每月10,000美元以下收入免费。
* [Adapty.io](https://adapty.io/) – 提供开源SDK的一站式解决方案，用于移动应用内订阅集成，支持iOS、Android、React Native、Flutter、Unity或Web应用。每月10,000美元以下收入免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) — 提供加密货币市场数据，包括最新的加密货币和法币汇率。免费层每月提供10,000次调用额度。
* [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币汇率。免费DEVELOPER计划每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) — 提供加密货币市场数据，包括最新的加密货币汇率和历史数据。演示API稳定限制为每分钟30次调用，每月上限10,000次调用。
* [CurrencyApi](https://currencyapi.net/) — 提供实物货币和加密货币的实时汇率，支持JSON和XML格式。免费层每月1,250次API请求。
* [currencylayer](https://currencylayer.com/) — 为您的业务提供可靠的汇率和货币转换服务，免费每月100次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 简单易用的货币转换JSON API。免费层每天更新一次，每月限制1,500次请求。
* [FraudLabsPRO](https://www.fraudlabspro.com) — 帮助商家防止支付欺诈和拒付。免费Micro计划每月500次查询。
* [FxRatesAPI](https://fxratesapi.com) — 提供实时和历史汇率。免费层需注明来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于用量的计费从API中创收。可连接Stripe、Chargebee等。免费层每月30,000次事件。
* [Nami ML](https://www.namiml.com/) - 完整的应用内购买和订阅平台，支持iOS和Android，包括无代码付费墙、CRM和分析。运行IAP业务的所有基础功能免费。
* [RevenueCat](https://www.revenuecat.com/) — 托管后端服务，用于应用内购买和订阅（iOS和Android）。每月2,500美元以下跟踪收入免费。
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

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp Vagrant 云服务。托管 Vagrant 虚拟机的平台。

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义的Markdown博客与建站工具
* [Dev.to](https://dev.to/) - 程序员分享观点与互助成长的社区
* [Hashnode](https://hashnode.com/) — 为开发者打造的零障碍博客平台
* [Medium](https://medium.com/) — 深入思考对你真正重要的事物
* [AyeDot](https://ayedot.com/) — 通过现代多媒体短格式Miniblog免费分享你的创意、知识与故事

**[⬆️ 返回顶部](#目录)**

## 评论平台

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站访客中建立活跃社区。
* [Utterances](https://utteranc.es/) - 基于 GitHub issues 的轻量级评论组件。可用于博客评论、维基页面等场景！
* [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被全球数十万网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，采用"按需付费"模式，支持"一个管理员在少数域名上完全控制行为与外观"
* [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多种平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## 截图API

  * [ApiFlash](https://apiflash.com) — 基于AWS Lambda和Chrome的截图API。支持整页截图、捕捉时间戳和视窗尺寸。
  * [microlink.io](https://microlink.io/) – 将任何网站转化为结构化数据，包括元标签标准化、美观链接预览、爬虫功能及截图服务。每日免费250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 通过简单API调用生成任意网站截图。基于Google Cloud构建，支持高扩展性。每月免费100次截图。
  * [screenshotbase.com](https://screenshotbase.com) - 每月300次免费截图。从任意URL快速生成可扩展的免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — 高度自定义的网站快照服务。每月免费100次快照。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — 每月100次免费截图（PNG/GIF/JPG格式），支持整页滚动截图而非仅首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化与页面渲染服务。免费层每日500页，自2017年持续提供。
  * [Webshrinker.com](https://webshrinker.com) — 提供网站截图及域名智能API服务。每月免费100次请求。

**[⬆️ 返回顶部](#目录)**

## Flutter相关与无Mac编译IOS应用

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳平台。无需 Mac 即可构建 iOS 和 Android 应用。
* [CodeMagic](https://codemagic.io/) - Codemagic 是一个全托管式移动应用持续集成/持续交付平台。您可以通过图形化界面的 CI/CD 工具进行构建、测试和部署。免费套餐每月提供 500 分钟构建时长，并使用配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是基于浏览器的可视化拖拽界面，用于使用 Flutter 构建移动应用。

**[⬆️ 返回顶部](#目录)**

## 基于浏览器的硬件模拟（JavaScript实现）

  * [JsLinux](https://bellard.org/jslinux) —— 一个能运行Linux和Windows 2k的超快x86虚拟机
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) —— 支持网络功能的OpenRISC虚拟机，可运行Linux系统
* [v86](https://copy.sh/v86) —— 能在浏览器中直接运行Linux等操作系统的x86虚拟机

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流帮助实现"隐私设计"，使企业符合GDPR等法规要求。免费版仅限小型团队使用SaaS版本。
* [Osano](https://www.osano.com/) - 从GDPR代理到Cookie横幅的全功能合规管理平台。免费版提供基础功能。
* [Iubenda](https://www.iubenda.com/) - 隐私政策/Cookie政策及同意管理解决方案。免费版提供有限的隐私政策/Cookie政策及Cookie横幅功能。
* [Cookiefirst](https://cookiefirst.com/) - 多语言Cookie横幅、审计及同意管理方案。免费版提供单次扫描和单个横幅服务。
* [Ketch](https://www.ketch.com/) - 同意管理框架与隐私工具。免费版在有限访问量下开放大部分功能。
* [Concord](https://www.concord.tech/) - 完整的数据隐私平台，包含同意管理、隐私请求处理(DSARs)和数据映射。免费版包含核心同意管理功能，并向通过验证的开源项目提供高级功能免费套餐。

**[⬆️ 返回顶部](#目录)**

## 其他类别

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为代码、文本或图片创建精美的社交媒体分享截图
* [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件，支持生成美观图片（如Twitter/Facebook帖子）或链接（如聊天/论坛）
* [Blynk](https://blynk.io) — 提供API控制的SaaS物联网开发平台，免费开发者计划包含5台设备、云存储及数据存储，支持移动端应用
* [Bricks Note Calculator](https://free.getbricks.app/) - 内置强大多行计算器的渐进式网页应用(PWA)笔记工具
* [Carbon.now.sh](https://carbon.now.sh) - 生成类似截图的精美代码片段图像，常用于在Twitter或博客中优雅展示代码
* [Code Time](https://www.software.com/code-time) - VS Code/Atom/IntelliJ/Sublime等IDE的编码时间追踪与指标分析插件
* [Codepng](https://www.codepng.app) - 为源代码创建高质量的社交媒体分享快照
* [CodeToImage](https://codetoimage.com/) - 将代码或文本转换为可分享的截图
* [Cronhooks](https://cronhooks.io/) - 定时或循环触发webhook服务，免费版支持5个临时计划
* [cron-job.org](https://cron-job.org) - 在线定时任务服务，无限任务免费
* [datelist.io](https://datelist.io) - 在线预约系统，免费版每月5次预约（含1个日历）
* [Domain Forward](https://domain-forward.com/) - 简易域名/URL转发工具，免费支持5个域名及20万次月请求
* [Elementor](https://elementor.com) — WordPress可视化建站工具，免费版含40+基础组件
* [Exif Editor](https://exifeditor.io/) — 浏览器即时查看/编辑/清除/分析图片元数据（含GPS定位信息）
* [Format Express](https://www.format-express.dev) - JSON/XML/SQL在线即时格式化工具
* [FOSSA](https://fossa.com/) - 第三方代码的端到端合规管理与漏洞检测平台
* [Hook Relay](https://www.hookrelay.dev/) - 为应用添加无忧webhook支持：内置队列、退避重试和日志，免费版每日100次投递/14天留存/3个端点
* [Hosting Checker](https://hostingchecker.co) - 查询域名/网站/IP的ASN/ISP/地理位置等主机信息，集成多款DNS相关工具
* [kandi](https://kandi.openweaver.com/) — 通过代码片段和开源库复用加速应用开发
* [Base64解码/编码器](https://devpal.co/base64-decode/) — 免费在线数据编解码工具
* [newreleases.io](https://newreleases.io/) - 通过邮件/Slack/Telegram/Discord/webhook接收GitHub/GitLab/NPM/PyPI等平台的新版本通知
* [OnlineExifViewer](https://onlineexifviewer.com/) — 在线即时查看照片EXIF数据（含GPS定位信息）
* [PDFMonkey](https://www.pdfmonkey.io/) — 仪表盘管理PDF模板，通过API动态生成PDF，免费版每月300份文档
* [Pika代码截图](https://pika.style/templates/code-image) — 通过VSCode扩展创建可定制化的精美代码片段截图
* [QuickType.io](https://quicktype.io/) - 从JSON/GraphQL快速生成多语言模型/序列化代码
* [RandomKeygen](https://randomkeygen.com/) - 移动端友好的随机密钥生成工具
* [ray.so](https://ray.so/) - 创建优雅的代码片段图像
* [readme.com](https://readme.com/) — 开源项目免费使用的精美文档生成平台
* [redirection.io](https://redirection.io/) — 企业级HTTP重定向管理SaaS工具
* [redirect.pizza](https://redirect.pizza/) - 支持HTTPS的简易重定向管理，免费版含10个源地址/10万次月访问
* [Renamer.ai](https://renamer.ai) — AI文件重命名工具（支持OCR/元数据提取/20+语言），免费版每月15文件（含桌面端/批量重命名/AI自动命名）
* [ReqBin](https://reqbin.com/) — 在线HTTP请求测试工具（支持GET/POST/HEAD等方法及Token认证），含基础请求保存功能
* [Smartcar API](https://smartcar.com) - 车辆定位/油量/电量/里程/车门锁控制等汽车API
* [snappify](https://snappify.com) - 开发者视觉化创作工具（从代码片段到技术演示文稿），免费版支持3个同时编辑/无限下载/每月5次AI代码解释
* [日出日落API](https://sunrisesunset.io/api/) - 根据经纬度获取日出日落时间
* [superfeedr.com](https://superfeedr.com/) — 实时PubSubHubbub兼容的RSS订阅分析服务（免费版功能受限）
* [SurveyMonkey.com](https://www.surveymonkey.com) — 在线问卷工具，免费版每份问卷限10问题/100回复
* [Tiledesk](https://tiledesk.com) - 全渠道聊天机器人开发平台（从网站实时聊天到WhatsApp），免费版不限机器人数量
* [UUID生成器](https://newuuid.com/) - 即时生成UUIDv1/v4/v7/GUID/Nil/CUID/NanoID/ULID等ID类型
* [Versionfeeds](https://versionfeeds.com) — 为软件版本创建定制RSS订阅（免费版支持3个订阅源）
* [videoinu](https://videoinu.com) — 在线录屏与视频编辑工具
* [Webacus](https://webacus.dev) — 开发者工具集（编解码/数据处理等）
* [Volume Shader BM](https://volumeshaderbm.org) — 基于WebGL的免费GPU基准测试工具，帮助开发者跨浏览器/设备测试着色器性能

**[⬆️ 返回顶部](#目录)**

## 远程桌面工具

  * [Getscreen.me](https://getscreen.me) — 免费支持2台设备，会话次数和时长无限制
* [Apache Guacamole™](https://guacamole.apache.org/) — 开源的无客户端远程桌面网关
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
* [ArtStation](https://www.artstation.com/) — 免费/付费的2D、3D资源及音频、图标、瓦片集、游戏套件的市场。也可用于展示艺术作品集。
* [Rive](https://rive.app/community/) — 社区资源，同时可使用免费计划创建自己的游戏资源。
* [Poly Pizza](https://poly.pizza/) — 免费的低多边形3D资源。
* [3Dassets.one](https://3dassets.one/) — 超过8,000个免费/付费3D模型和PBR材质，用于制作纹理。
* [Kenney](https://www.kenney.nl/assets/) — 免费（CC0 1.0通用许可）的2D、3D、音频和UI游戏资源。
* [Poliigon](https://www.poliigon.com/) — 免费和付费的纹理（支持多种分辨率）、模型、HDRIs和笔刷。提供免费插件以导出到Blender等软件。
* [Freesound](https://freesound.org/) — 免费的协作声音库，提供不同的CC许可。

**[⬆️ 返回顶部](#目录)**

## 其他免费资源

  * [Wikimint 开发者工具](https://developer.wikimint.com/p/tools.html) - 永久免费的网页开发者工具集，包含CSS压缩/解压缩、图片优化、图片缩放、大小写转换、CSS验证、JavaScript编译、HTML编辑器等。
* [ElevateAI](https://www.elevateai.com) - 每月免费获取长达200小时的音频转录服务。
* [get.localhost.direct](https://get.localhost.direct) — 提供更好的`*.localhost.direct`通配符公共CA签名SSL证书，支持子域名的本地开发环境。
* [Framacloud](https://degooglisons-internet.org/en/) — 由法国非营利组织[Framasoft](https://framasoft.org/en/)维护的自由开源软件及SaaS列表。
* [GitHub — 开发者开源软件集](https://github.com/tvvocold/FOSS-for-Dev) — 开发者免费开源软件资源中心。
* [GitHub 教育包](https://education.github.com/pack) — 面向学生的免费服务集合（需注册）。
* [Markdown 工具](https://markdowntools.com) - HTML、CSV、PDF、JSON与Excel文件与Markdown互转工具。
* [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费沙盒环境、工具及其他资源，用于开发Microsoft 365平台解决方案。提供90天可续期的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），根据开发活跃度（通过遥测数据算法评估）自动续期。
* [Pyrexp](https://pythonium.net/regex) — 免费网页版正则表达式测试与可视化调试工具。
* [红帽开发者计划](https://developers.redhat.com) — 开发者专属红帽产品免费访问权限（包括RHEL、OpenShift、CodeReady等），仅限个人计划，另提供免费电子书参考。
* [sandbox.httpsms.com](https://sandbox.httpsms.com) — 免费收发测试短信服务。
* [SimpleBackups.com](https://simplebackups.com/) — 服务器与数据库（MySQL/PostgreSQL/MongoDB）备份自动化服务，直接存储至云存储（AWS/DigitalOcean/Backblaze），免费版支持1个备份任务。
* [SnapShooter](https://snapshooter.com/) — DigitalOcean/AWS/LightSail/Hetzner/Exoscale备份解决方案，支持数据库/文件系统/应用直接备份至S3存储，免费版提供单资源每日备份。
* [主题精选](https://themeselection.com/) — 精选高质量、现代化、专业易用的免费管理后台模板、HTML主题与UI工具包，加速应用开发！
* [Web.Dev 测速工具](https://web.dev/measure/) — 免费检测网站性能并优化SEO排名。
* [SmallDev.tools](https://smalldev.tools/) — 开发者多功能工具：编解码/HTML/CSS/JS压缩美化/生成测试数据（JSON/CSV等），界面友好。
* [Layercode的UseCSV](https://layercode.com/usecsv) — 快速为网页应用添加CSV/Excel导入功能，提供愉悦的数据导入体验。无需信用卡即可免费创建无限导入器，支持100MB文件。
* [按钮生成器](https://markodenic.com/tools/buttons-generator/) — 100+可直接使用的项目按钮集。
* [WrapPixel](https://www.wrappixel.com/) — 下载高质量免费/付费管理模板（支持Angular/React/VueJs/NextJS/NuxtJS）。
* [Utils.fun](https://utils.fun/en) — 基于浏览器算力的离线工具集（水印生成/录屏/编解码/加密/代码格式化等），完全免费且不上传数据至云端。
* [IT工具集](it-tools.tech) - 开发者与IT人员实用工具。
* [免费代码工具](https://freecodetools.org/) — 100%免费高效工具：Markdown编辑器/代码压缩美化/二维码生成/Open Graph与Twitter卡片生成等。
* [regex101](https://regex101.com/) — 免费正则表达式测试调试平台，提供编辑器与学习资源。
* [Kody工具集](https://www.kodytools.com/dev-tools) — 100+开发工具（格式化/压缩/转换等）。
* [AdminMart](https://adminmart.com/) — 高质量免费/付费管理模板与网站主题（支持Angular/Bootstrap/React/VueJs/NextJS/NuxtJS）。
* [Glob模式测试器](https://globster.xyz/) — 设计与测试glob模式的网站，附学习资源。
* [SimpleRestore](https://simplerestore.io) - 无忧MySQL备份恢复工具，无需代码或服务器即可将备份还原至任意远程数据库。
* [360转换器](https://www.360converter.com/) - 免费转换工具：视频/音频/语音/实时音频/YouTube视频转文字及添加字幕，适合短视频处理。
* [QRCode最佳实践](https://qrcode.best/) - 13种模板创建自定义二维码，完全隐私保护与品牌定制，支持追踪像素/项目分类/无限团队席位。
* [PostPulseAI](https://PostPulseAI.com) - 通过每月AI生成SEO优化内容提升在线影响力，免费版允许每月手动发布1篇内容。
* [PageTools](https://pagetools.co/) - 永久免费AI工具集：一键生成网站政策/社交媒体简介/帖子/网页。
* [MySQL可视化执行计划](https://mysqlexplain.com) - 免费易用的MySQL EXPLAIN输出可视化工具，优化慢查询。
* [Killer Coda](https://killercoda.com/) - 浏览器交互式学习环境（Linux/Kubernetes/容器/编程/DevOps/网络）。
* [Axonomy应用](https://axonomy-app.com/) - 免费创建管理发票工具，每月10张免费发票额度。
* [表格格式转换器](https://www.tableformatconverter.com) - 免费将表格数据转换为CSV/HTML/JSON/Markdown等格式。

**[⬆️ 返回顶部](#目录)**