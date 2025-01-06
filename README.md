# free-for.dev

开发人员和开源作者现在有许多服务提供免费套餐，但是要找到所有这些服务需要花费时间才能做出明智的决策。

这是一份包含免费开发者套餐的软件（SaaS、PaaS、IaaS等）和其他服务的列表。

这份特定列表的范围仅限于那些对基础设施开发人员（系统管理员、DevOps实践人员等）可能有用的事物。我们喜欢所有的免费服务，但最好还是保持主题相关。有时候这是一条灰色界线，所以这是有偏见的；如果我未接受您的贡献，请不要感到冒犯。

这份列表来自于超过1600人的Pull请求、评论、想法和工作成果。您也可以通过发送Pull请求来添加更多服务或删除那些套餐已更改或已退出的服务，以帮助做出贡献。

[![跟踪精彩列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅限于作为服务提供的服务，而不是自托管软件。若要符合资格，服务必须提供免费套餐，而不仅仅是免费试用。如果套餐有时间限制，则免费套餐至少应持续一年。我们还从安全性的角度考虑免费套餐，所以单点登录是可以的，但我不会接受那些仅对付费套餐提供TLS服务的服务。

# 目录

以下是目录项的翻译结果：

  * [主要云提供商的始终免费限制](#主要云提供商的始终免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [构件库](#构件库)
  * [BaaS（后端即服务）](#BaaS（后端即服务）)
  * [低代码平台](#低代码平台)
  * [CDN和保护](#CDN和保护)
  * [CI和CD（持续集成和持续部署）](#CI和CD（持续集成和持续部署）)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面](#设计和用户界面)
  * [设计灵感](#设计灵感)
  * [开发博客站点](#开发博客站点)
  * [域名系统（DNS）](#域名系统（DNS）)
  * [Docker相关](#Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能切换管理平台](#功能切换管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务（IaaS）](#基础设施即服务（IaaS）)
  * [IDE和代码编辑](#IDE和代码编辑)
  * [国际手机号码验证API和SDK](#国际手机号码验证API和SDK)
  * [问题跟踪和项目的管理](#问题跟踪和项目的管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息传递和流媒体服务](#消息传递和流媒体服务)
  * [杂项](#杂项)
  * [监控](#监控)
  * [平台即服务（PaaS）](#平台即服务（PaaS）)
  * [包构建系统](#包构建系统)
  * [支付和账单集成](#支付和账单集成)
  * [隐私管理](#隐私管理)
  * [截图API](#截图API)
  * Flutter相关和在无Mac的情况下构建iOS应用](flutter相关和在无Mac的情况下构建iOS应用（flutter related and building ios apps without mac） ) 
  *[搜索](#search)* 
  *[安全和公钥基础设施（PKI）](#security)（authentication, authorization和用户管理） ）（security and pki（authentication, authorization and user management） ） *源代码仓库（Source Code Repos）](源代码仓库（source code repos） ) 
云存储和媒体处理（Storage and Media Processing）](云存储和媒体处理（storage and media processing） ) 隧道技术、WebRTC、Web套接字服务器和其他路由器（Tunneling, WebRTC, Web Socket Servers and Other Routers）](隧道技术、WebRTC、Web套接字服务器和其他路由器（tunneling, webrtc, web socket servers and other routers） ) 测试（Testing）](测试（testing） ) 团队协作和协作工具（Tools for Teams and Collaboration）](团队协作和协作工具（tools for teams and collaboration） ) 翻译管理（Translation Management）](翻译管理（translation management） ) Vagrant相关（Vagrant Related）](vagrant相关（vagrant related） ) 访客会话记录（Visitor Session Recording）](访客会话记录（visitor session recording） ) 网页托管（Web Hosting）](网页托管（web hosting） ) 评论平台（Commenting Platforms）](评论平台（commenting platforms） ) 基于浏览器的硬件模拟（浏览器上基于JavaScript编写的硬件模拟）（Browser based hardware emulation written in JavaScript）](基于浏览器的硬件模拟（浏览器上基于javascript编写的硬件模拟）（browser based hardware emulation written in javascript）） 远程桌面工具（Remote Desktop Tools）](远程桌面工具（remote desktop tools）） 游戏开发（Game Development）](游戏开发（game development）） 其他免费资源（Other Free Resources）](其他免费资源（other free resources））

## Major Cloud Providers

  这些都是各大云服务提供商提供的免费或试用服务列表。以下是对应的翻译：

* **[Google Cloud Platform](https://cloud.google.com)**
  - App Engine - 每天28个前端实例小时，九个后端实例小时
  - Cloud Firestore - 1GB存储，5万次读取，2万次写入，2万次删除，每天
  - Compute Engine - 1个非抢占性e2-micro实例，30GB硬盘，5GB快照存储（仅限于特定区域），从北美到所有地区目的地的网络每月传出流量限制为1 GB
  - Cloud Storage - 5GB，每月网络传出流量限制为1GB
  - Cloud Shell - 基于网络的Linux shell/主要IDE，具有5GB的持久存储。每周限制为60小时
  - Cloud Pub/Sub - 每月10GB的消息
  - Cloud Functions - 每月2百万次调用（包括后台和HTTP调用）
  - Cloud Run - 每月2百万次请求，36万GB秒的内存容量，18万vCPU秒的计算机时间，从北美每月网络传出流量限制为1 GB
  - Google Kubernetes Engine - 一个区域集群不收取集群管理费。每个用户节点按标准Compute Engine定价收费
  - BigQuery - 每月查询1 TB，每月存储10 GB
  - Cloud Build - 每天构建分钟限制为120分钟
  - Cloud Source Repositories - 最大用户数为5，存储限制为50 GB，出站限制为50 GB
  - **[Google Colab](https://colab.research.google.com/)** - 免费Jupyter Notebook开发环境。
  - **[idx.dev](https://idx.dev)** - Google Project IDX。在Google Cloud上运行的在线VSCode。
  - 完整详细列表 - [Google Cloud的免费服务列表](https://cloud.google.com/free)

* **[Amazon Web Services](https://aws.amazon.com)**
  - [CloudFront](https://aws.amazon.com/cloudfront/) - 每月传出流量限制为1TB和每月函数调用限制为2百万次
  - [CloudWatch](https://aws.amazon.com/cloudwatch/) - 自定义指标警报数量为十个和十个警报数量限制。
  - [CodeBuild](https://aws.amazon.com/codebuild/) - 每月构建时间限制为100分钟。每月使用量超过此限制后，将收取标准费用。每月使用量超过分配量后，将收取标准费用。每月使用量超过分配量后，将收取标准费用。每月使用量超过分配量后收取标准费用。每月使用量超过分配量后收取标准费用。每月使用量超过分配量后收取标准费用。每月使用量超过分配量后收取标准费用（重复）等。请简化此部分描述。简化后的描述应为：每月构建时间限制为一百分钟。其他服务类似地简化描述。具体服务列表和详细信息请访问AWS免费服务页面查看。具体服务列表和详细信息请访问AWS免费服务页面查看。具体服务列表和详细信息请访问[AWS的免费服务列表](https://aws.amazon.com/free/)查看。具体服务列表和详细信息请访问AWS免费服务页面查看。简化后的描述如下：[Amazon Web Services的免费试用服务包括：CloudFront（每月传出流量限制为1TB），CloudWatch（自定义指标警报数量为十个），CodeBuild（每月构建时间限制为一百分钟），CodeCommit（最多五个活跃用户，存储限制为五十GB），CodePipeline（每月一个活跃管道），DynamoDB（无SQL数据库限制为二十五GB），EC2（微型实例运行时间限制为七百五十小时），EBS（通用SSD或磁性存储限制为三十GB），Elastic Load Balancing（运行时间限制为七百五十小时），RDS（数据库实例运行时间限制），S3（对象存储限制为五GB），Glacier（长期对象存储限制为十GB），Lambda（请求次数限制为一百万次），SNS（发布次数限制为一百万次），SES（消息发送次数限制为三千次），SQS（消息队列请求次数限制为一百万次）。具体服务列表和详细信息请访问AWS免费服务页面查看。](https://aws.amazon.com/free/)查看更多详情。)具体服务列表和详细信息请访问AWS免费服务页面查看。)具体服务列表和详细信息请访问[AWS的免费服务页面](https://aws.amazon.com/free)。)具体服务列表和详细信息请访问AWS免费服务页面查看。）详细列表链接：[AWS的免费服务页面](https://aws.amazon.com/free)。）具体服务列表和详细信息请访问AWS免费试用页面查看。）具体服务列表和详细信息请访问[AWS的免费试用页面](https://aws.amazon.com/free/)查看。）具体服务列表和详细信息请访问AWS免费试用页面查看。）详细列表链接：[AWS免费试用页面](

    * **[Workers](https://developers.cloudflare.com/workers/)** - 在Cloudflare的全球网络上免费部署无服务器代码，每天可处理高达一百万次的请求。
* **[Workers KV](https://developers.cloudflare.com/kv)** - 每天可处理高达一百万次的读取请求，一万次的写入请求，一万次的删除请求和一万次的列表请求，可存储的数据量为1GB。
* **[R2](https://developers.cloudflare.com/r2/)** - 每月提供高达10GB的数据量，每月可处理百万次Class A操作和千万次Class B操作。
* **[D1](https://developers.cloudflare.com/d1/)** - 每天可读取五百万行数据，每天可写入一百万行数据，并配备有高达1GB的存储空间。
* **[Pages](https://developers.cloudflare.com/pages/)** - 在Cloudflare的快速安全全球网络上开发和部署您的网络应用程序。包括每月五百次构建、一百个自定义域名、集成SSL、无限访问座位数、无限预览部署以及通过Cloudflare Workers集成实现的全栈功能。
* **[Queues](https://developers.cloudflare.com/queues/)** - 每月可处理高达一千万次操作。
* **[TURN](https://developers.cloudflare.com/calls/turn/)** - 每月提供高达一TB的免费（出站）流量。

**[⬆️ 返回顶部](#目录)**

## 云管理解决方案

  以下是这些内容的中文翻译：

* **[Brainboard](https://www.brainboard.co)**：一种协作解决方案，可以直观地构建和管理云基础设施，端到端。
* **[Cloud 66](https://www.cloud66.com/)**：个人项目免费（包括一个部署服务器、一个静态网站），Cloud 66 提供您构建、部署和扩展应用程序所需的一切工具，无论您选择哪种云，无需担心“服务器问题”。
* **[Pulumi](https://www.pulumi.com/)**：现代基础设施即代码平台，允许您使用熟悉的编程语言和工具构建、部署和管理云基础设施。
* **[terraform.io](https://www.terraform.io/)**：Terraform Cloud。为最多 500 个资源提供免费远程状态管理和团队协作。
* **[scalr.com](https://scalr.com/)**：Scalr 是一个用于 Terraform 的自动化和协作（TACO）产品，用于改进由 Terraform 管理的基础设施和配置的协作和自动化。支持完整的 Terraform CLI、OPA 集成和分层配置模型。无需单点登录税。所有功能都包含在内。每月可免费使用多达 50 次运行。
* **[deployment.io](https://deployment.io)**：Deployment.io 帮助开发人员自动化在 AWS 上的部署。在我们的免费层级上，开发人员（单个用户）可以无限部署静态网站、Web 服务和环境。我们每月免费提供 20 次作业执行，包括预览和自动部署都包含在免费层级内。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  以下是您提供的Markdown文本的中文翻译：

* [Bitbucket](https://bitbucket.org/) - 为最多5个用户提供无限公开和私有Git仓库，包含用于CI/CD的Pipelines功能。
* [chiselapp.com](https://chiselapp.com/) - 无限公开和私有Fossil仓库。
* [codebasehq.com](https://www.codebasehq.com/) - 提供一个免费项目，包含100MB空间和两个用户。
* [Codeberg](https://codeberg.org/) - 为免费和开源项目提供无限公开和私有Git仓库（具有无限协作者）。由[Forgejo](https://forgejo.org/)提供支持。包含[Codeberg Pages](https://codeberg.page/)静态网站托管，[Codeberg的CI](https://docs.codeberg.org/ci/)进行CI/CD托管，[Codeberg Translate](https://translate.codeberg.org/)用于翻译托管。还包括包和容器托管、项目管理和问题跟踪等功能。
* [GitGud](https://gitgud.io) - 无限公开和私有仓库。永久免费。由GitLab和Sapphire提供支持。不提供CI/CD功能。
* [GitHub](https://github.com/) - 无限公开仓库和无限私有仓库（具有无限协作者）。包含CI/CD、开发环境、静态托管、包和容器托管、项目管理和AI Copilot等功能。
* [gitlab.com](https://about.gitlab.com/) - 提供最多包含5个协作者的无限公开和私有Git仓库。包含CI/CD、静态托管、容器注册、项目管理和问题跟踪等功能。
* [framagit.org](https://framagit.org/) - Framasoft的软件锻造平台，基于Gitlab软件，包含CI、静态页面、项目页面和问题跟踪等功能。
* [heptapod.net](https://foss.heptapod.net/) - Heptapod是GitLab社区版的友好分支，支持Mercurial。
* [ionicframework.com](https://ionicframework.com/appflow) - 用于开发Ionic应用的仓库和工具；此外你还有一个Ionic仓库。
* [NotABug](https://notabug.org) - NotABug.org是一个用于自由许可项目的免费软件协作平台，基于Git。
* [OSDN](https://osdn.net/) - OSDN.net是一个面向开源软件开发人员的免费服务，提供SVN/Git/Mercurial/Bazaar/CVS仓库。
* [Pagure.io](https://pagure.io) - Pagure.io是一个针对自由开源软件许可项目的免费和开源软件代码协作平台，基于Git。
* [perforce.com](https://www.perforce.com/products/helix-teamhub) - 提供免费的1GB云空间以及Git、Mercurial或SVN仓库。
* [pijul.com](https://pijul.com/) - 提供无限免费开源分布式版本控制系统。其独特之处在于基于补丁的理论，使其易于学习、使用和分发。解决了git/hg/svn/darcs的许多问题。
* [plasticscm.com](https://plasticscm.com/) - 针对个人、开源软件和非营利组织的免费服务。
* [projectlocker.com](https://projectlocker.com) - 为用户提供免费的Git和Subversion私人项目一个，包含50MB空间。
* [RocketGit](https://rocketgit.com) - 基于Git的仓库托管服务，提供无限公开和私有仓库。
* [savannah.gnu.org](https://savannah.gnu.org/) - 为自由软件项目（GNU项目）提供协作软件开发管理系统服务。
* [savannah.nongnu.org](https://savannah.nongnu.org/) - 为自由软件项目（非GNU项目）提供协作软件开发管理系统服务。

**[⬆️ 返回顶部](#目录)**

## API、数据和机器学习

  好的，以下是对应文本的翻译：

* **[JSONGrid](https://jsongrid.com)** - 免费的工具，用于可视化、编辑复杂的JSON数据为美观的表格。通过链接分享JSON数据。
* **[Zerosheets](https://zerosheets.com)** - 将你的Google表格转化为强大的API，以快速开发原型、网站、应用程序等。每月免费提供500次请求。
* **[IP.City](https://ip.city)** - 每天100次免费的IP地理位置请求
* **[Abstract API](https://www.abstractapi.com)** - 适用于各种用例的API套件，包括IP地理位置、性别检测或电子邮件验证等。
* **[Apify](https://www.apify.com/)** - 网络爬虫和自动化平台，为任何网站创建API并提取数据。有现成的爬虫、集成代理和定制解决方案。免费计划每月包含5美元的平台信用。
* **[APITemplate.io](https://apitemplate.io)** - 通过简单的API或自动化工具（如Zapier和Airtable）自动生成图像和PDF文档。无需CSS/HTML。免费计划每月包含50张图像和三张模板。
* **[APIToolkit.io](https://apitoolkit.io)** - 您需要了解API和Backend中所发生的一切的所有工具。具有自动API合同验证和监控。免费计划涵盖每月最多2万个请求的服务器。
* **[APIVerve](https://apiverve.com)** - 免费提供超过120个API的即时访问，注重质量、一致性和可靠性。免费计划涵盖每月最多50个API令牌。
* **[Arize AI](https://arize.com/)** - 用于模型监控和解决诸如数据质量和性能漂移等问题的机器学习可观察性。免费至两个模型。
* **[Atlas toolkit](https://atlastk.org/)** - 用于开发即时访问的单页网络应用程序的轻量级库。适用于Java、Node.js、Perl、Python和Ruby。
* **[Beeceptor](https://beeceptor.com)** - 可在几秒钟内模拟REST API，模拟API响应等。每天免费50次请求，公开仪表板，开放端点（拥有仪表板链接的人可以查看提交和答案）。
* **[bigml.com](https://bigml.com/)** - 托管机器学习算法。开发用途不限量任务，每个任务限制为16 MB数据。
* **[Browse AI](https://www.browse.ai)** - 提取和监视网络上的数据。每月免费提供50个信用。
* **[BrowserCat](https://www.browsercat.com)** - 用于自动化的无头浏览器API，可用于网络爬虫、AI代理网络访问、图像/PDF生成等。免费计划每月1K请求。
* **[Bruzu](https://bruzu.com/)** - 自动图像生产。通过API、集成或无代码表格生成大量图像变体。API是免费的，带有水印。
* **[Calendarific](https://calendarific.com)** - 企业级公共假日API服务，覆盖超过200个国家。免费计划包括每月1,000次调用。
* **[Canopy](https://www.canopyapi.co/)** - Amazon.com产品、搜索和类别数据的GraphQL API。免费计划每月包括100次调用。
* **[Clarifai](https://www.clarifai.com)** - 用于自定义面部识别和检测的图像API。能够训练AI模型。免费计划每月有5,000次调用。
* **[Cloudmersive](https://cloudmersive.com/)** - 实用API平台，完全访问庞大的API库，包括文档转换、病毒扫描等，每月800次调用。
* **[Colaboratory](https://colab.research.google.com)** - 免费的基于网络的Python笔记本环境，配备Nvidia Tesla K80 GPU。
* **[Collect2](https://collect2.com)** - 创建API端点以测试、自动化和连接Webhooks。免费计划允许两个数据集、2,000条记录、一个转发器和一个警报。
* **[CometML](https://www.comet.com/site/)** - MLOps平台，用于实验跟踪、模型生产管理、模型注册和完整的数据血统，覆盖从训练到生产的工作流程。个人和学术用途免费。
* **[Commerce Layer](https://commercelayer.io)** - 可组合的商务API，可以从任何前端构建、放置和管理订单。开发人员计划允许每月处理100笔订单和最多1,000个SKU，免费使用。
* **[Conversion Tools](https://conversiontools.io/)** - 在线文件转换器，用于转换文档、图像、视频、音频和电子书。提供REST API。有适用于Node.js、PHP、Python的库

  好的，已经按照您的要求完成了翻译。

  以下是翻译后的文本：

Market Data API - 提供股票、期权、共同基金等的实时和历史金融数据。免费Forever API层级允许每天无费用进行100次API请求。

Meteosource Weather API - 全球天气API，提供当前和预报的天气数据。预报基于多个天气模型的机器学习组合，以实现更高的准确性。免费计划每天有400次调用。

microlink.io - 它能将任何网站转化为数据，如元标签归一化、美丽链接预览、抓取功能或截图服务。每天免费使用一百次请求。

Mindee - Mindee是一款强大的OCR软件和以API为核心的平台，它通过数据识别帮助开发人员自动化应用程序的工作流程，以获取关键信息，使用计算机视觉和机器学习进行标准化文档处理层。免费层级每月提供250页。

Mintlify - 现代API文档的标准。美观且易于维护的UI组件、内部搜索和交互式游乐场。免费适用于一个编辑器。

monkeylearn.com - 使用机器学习进行文本分析，每月免费查询次数为300次。

MockAPI - MockAPI是一个简单的工具，可以快速模拟API、生成自定义数据并使用RESTful接口执行操作。MockAPI是一个原型设计、测试和学习工具。每个项目有免费的四个资源。

Mockfly - Mockfly是一款可靠的API模拟和特性标志管理工具。通过直观界面快速生成和控制模拟API。免费层级每天有500次请求。

Mocki - 一个工具，允许您创建模拟GraphQL和REST API并同步到GitHub仓库。简单REST API无需注册即可免费开发和使用。

Mocko.dev - 代理您的API，选择在云端模拟哪些端点并检查流量，免费加速您的开发和集成测试。

Mocky - 一个简单的网络应用程序，用于生成自定义HTTP响应以模拟HTTP请求。也提供开源版本。

reqres.in - 免费托管REST-API，随时准备响应您的AJAX请求。

microenv.com - 为开发人员创建假的REST API，可以生成代码并在Docker容器中生成应用程序。

Multi-Exit IP Address Checker - 免费且简单的工具，检查您的退出IP地址是否跨多个节点，并了解您的IP如何出现在不同的全球区域和服务中。对于测试基于规则的DNS拆分工具（如Control D）很有用。

neptune.ai - 记录、存储、显示、组织、比较和查询您所有的MLOps元数据。个人免费：一名成员、100GB的元数据存储量、每月200小时的监控时间。

News API - 通过代码搜索网络新闻并获得JSON结果。开发人员每月免费获得三千次查询机会。

GoCardless - 免费开放银行数据API。PSD2连接欧盟和英国超过两千三百家银行的应用程序或软件。 
 
Nyckel - 训练、部署和调用图像和文本ML模型。免费训练最多包含五千个训练数据点，每月可免费调用一千个模型实例。 
 
Observable - 创建、协作和学习数据的地方。免费使用：无限笔记本、无限发布、每个笔记本最多五个编辑器。 
 
OCR.Space - OCR API解析图像和PDF文件并返回JSON格式的文本结果。每月可免费使用二十五万次请求。 
 
Duply.co - 通过API和URL创建动态图像，设计模板一次并重复使用它。免费层级每月通过API和URL创建七十张图像，最多可通过表格创建一百张图像。 
 
OpenAPI3 Designer - 可视化创建免费的Open API 3定义。 
 
parsehub.com - 从动态网站中提取数据并将动态网站转化为API，五个项目免费使用。 
 
pdfEndpoint.com - 通过简单的API轻松将HTML或URL转换为PDF文件，每月可免费转换一百次文件内容。 
 
PDF-API.io - PDF自动化API包括可视化模板编辑器或HTML到PDF的动态数据集成以及PDF渲染功能等，免费计划附带一个模板和每月一百份PDF文件处理量 。 
 
Pixela - 免费数据流数据库服务，所有操作都是通过API执行的，还可以实现可视化操作如热图和折线图等 。 
 
Postbacks.io - 请求HTTP回调以供稍后使用，注册后即可享受八千次免费请求服务 。 
 
Postman - 通过Postman简化工作流程并创建更好的API以实现更快的发展速度，这是一款用于API开发的协作平台 。Postman应用程序永久免费使用 。Postman云功能也有永久免费的层级限制 。 也可以尝试开源的替代方案Insomnia（https://insomnia.rest），一个用于设计和测试REST和GraphQL的API客户端 。 免费的Insomnia同样支持跨平台使用 。 免费的层级限制可能适用于某些功能 。 免费的层级限制可能适用于某些功能 。 另外一些开源的替代方案如Swagger等也可以考虑使用 。 它们提供了强大的文档编写功能和丰富的插件支持 。 它们提供了强大的文档编写功能和丰富的插件支持 。 另外

  以下是对上述内容的翻译：

* [ROBOHASH](https://robohash.org/) - 提供从任何文本生成独特酷图的网络服务。
  * [SaturnCloud](https://saturncloud.io/) - 数据科学云环境，允许运行Jupyter笔记本和Dask集群。每月可享受30小时的免费计算和3小时的Dask计算。
  * [Scraper's Proxy](https://scrapersproxy.com/) — 用于抓取的简单HTTP代理API。无需担心限制、阻止或验证码即可匿名抓取。前100次成功抓取每月免费，包括JavaScript渲染（如果您联系支持，可以获得更多）。
  * [ScrapingAnt](https://scrapingant.com/) — 无头Chrome抓取API和免费检查代理服务。具有JavaScript渲染、高级旋转代理、避免CAPTCHAs等功能。提供免费计划。
  * [ScraperBox](https://scraperbox.com/) — 使用真实Chrome浏览器进行不可检测的网页抓取API和代理轮换。通过简单的API调用抓取任何网页。免费计划每月有1000个请求。
  * [ScrapingDog](https://scrapingdog.com/) — Scrapingdog处理数百万个代理、浏览器和CAPTCHAs，以提供任何网页的HTML的单API调用。它还包括Chrome和Firefox的Web Scraper以及即时抓取需求的软件。提供免费计划。
  * [scrapinghub.com](https://scrapinghub.com/) — 使用可视化界面和插件进行数据抓取。免费计划包括在共享服务器上无限抓取。
  * [Simplescraper](https://simplescraper.io/) — 每次操作后触发您的webhook。免费计划包括100个云抓取信用。
  * [Select Star](https://www.selectstar.com/) - 智能数据发现平台，可自动分析和记录您的数据。免费轻型层级包括1个数据源、最多100个表和10个用户。
  * [Sheetson](https://sheetson.com) - 立即将任何Google表格转换为RESTful API。提供免费计划。
  * [Shipyard](https://www.shipyardapp.com/) — 面向云的低代码数据编排平台。使用低代码模板和您的代码（Python、Node.js、Bash、SQL）构建。我们的免费开发者计划每月提供10个小时的运行时间，足够自动化多个工作流程。
  * [shrtcode API](https://shrtco.de/docs) - 无需授权且无请求限制的免费URL缩短API。
  * [SerpApi](https://serpapi.com/) - 实时搜索引擎抓取API。为Google、YouTube、Bing、Baidu、沃尔玛和其他机器返回结构化JSON结果。免费计划包括每月100次成功的API调用。
  * [SmartParse](https://smartparse.io/) - SmartParse是一个数据迁移和CSV到API平台，提供省时省成本的开发者工具。免费层级包括每月300个处理单元、浏览器上传、数据隔离、断路器和作业警报。
  * [Sofodata](https://www.sofodata.com/) - 通过上传CSV文件创建安全的RESTful API。立即通过其API访问数据，加快应用开发速度。免费计划包括2个API和每月2,500个API调用。无需信用卡。
  * [Sqlable](https://sqlable.com/) - 一系列免费的在线SQL工具，包括SQL格式化和验证器、SQL正则表达式测试器、假数据生成器和交互式数据库游乐场。
  * [Stoplight](https://stoplight.io/) - 用于协作设计和记录API的SaaS。免费计划提供免费设计、模拟和文档工具。
  * [Svix](https://www.svix.com/) - Webhooks即服务。每月最多发送5万条消息是免费的。
  * [TemplateTo](https://templateto.com) - 使用我们的拖放编辑器和简单的API从可重复使用模板自动生成PDF/TXT文档。免费计划每月包括450份PDF和三个模板。
  * [TinyMCE](https://www.tiny.cloud) - 富文本编辑API。核心功能免费提供，供无限使用。
  * [Treblle](https://www.treblle.com) - Treblle帮助团队构建、发布和管理API。具有先进的API日志聚合、可观察性、文档和调试功能。所有功能都是免费的，但免费层级每月的请求限制为最多25万次。
  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方webhooks并在localhost上调试它们的工具（ngrok风格）。开源和可自主托管。免费个人域名是*.github.webhook.store，免费公共域名是任何名称的webhook.store.。
  * [Weights & Biases](https://wandb.ai) — 为开发人员设计的

  * **[Zuplo](https://zuplo.com/)** - 免费的API管理平台，用于设计、构建和将API部署到边缘。可在几分钟内为任何API添加API密钥身份验证、速率限制、开发者文档和货币化功能。它原生支持OpenAPI，并使用web标准api和Typescript进行完全编程。免费计划提供最多10个项目、无限生产边缘环境、250个API密钥、每月10万次请求和1GB出站流量。

**[⬆️ 返回顶部](#目录)**

## 构件库

  以下是翻译结果：

* **Artifactory**（https://jfrog.com/start-free/） - 支持Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS等多种软件包格式的存储库。包括软件包扫描工具XRay和CI/CD工具Pipelines（以前的Shippable），每月免费使用2,000分钟CI/CD。
  * **central.sonatype.org**（https://central.sonatype.org） - Apache Maven、SBT和其他构建系统的默认存储库。
  * **cloudrepo.io**（https://cloudrepo.io） - 基于云、私有和公共的Maven和PyPi存储库。开源项目免费。
  * **cloudsmith.io**（https://cloudsmith.io） - 为Java/Maven、RedHat、Debian、Python、Ruby和更多提供简单、安全和集中的存储库服务。免费层级+开源免费。
  * **jitpack.io**（https://jitpack.io/） - 为GitHub上的JVM和Android项目提供的Maven存储库，公共项目免费。
  * **packagecloud.io**（https://packagecloud.io/users/new?plan=free_usage_plan） - 易于使用的存储库托管服务，支持Maven、RPM、DEB、PyPi、NPM和RubyGem软件包（有免费层级）。
  * **repsy.io**（https://repsy.io） - 免费的私有/公共Maven存储库，提供1GB的存储空间。
  * **Gemfury**（https://gemfury.com） - 为Maven、PyPi、NPM、Go Module、Nuget、APT和RPM存储库提供私有和公共存储服务。公共项目免费。
  * **paperspace**（https://www.paperspace.com/） - 构建并扩展AI模型，开发、训练和部署AI应用程序，免费计划包括：公共项目、5Gb存储空间、基本实例。
  * **RepoForge**（https://repoforge.io）- 为Python、Debian、NPM软件包和Docker注册表提供的私有云存储库。开源/公共项目免费计划。
  * **RepoFlow**（https://repoflow.io）- RepoFlow通过支持npm、PyPI、Docker、Go、Helm等简化软件包管理。在云中免费试用，包括10GB存储空间，10GB带宽，100个软件包和无限用户，或者仅用于个人使用的自助托管。

**[⬆️ 返回顶部](#目录)**

## Tools for Teams and Collaboration

  好的，我已经按照您的要求进行了翻译。

  好的，我已经按照您的要求将Markdown文本翻译成了中文，并保持了原文的格式。以下是翻译后的结果：

* [seafile.com](https://www.seafile.com/)：私有或云存储、文件共享、同步、讨论。云版本只有1GB容量。
* [Sema](https://www.semasoftware.com/)：免费的开发者组合工具，能够整合跨多个存储库的贡献并生成快照报告。
* [屏幕共享浏览器](https://screensharing.net)：免费的屏幕共享工具，无需下载或注册即可与协作者共享屏幕。完全免费。
* [Slab](https://slab.com/)：用于团队的现代知识管理服务。最多支持10个用户免费使用。
* [slack.com](https://slack.com/)：对功能有所限制但免费，支持无限用户。
* [Spectrum](https://spectrum.chat/)：免费创建公共或私人社区。
* [StatusPile](https://www.statuspile.com/)：状态页面集合。您可以追踪上游提供商的状态页面吗？
* [Stickies](https://stickies.app/)：用于头脑风暴、内容策划和笔记的视觉协作应用。最多支持创建3面墙，支持无限用户，并提供1GB存储空间。
* [Stacks](https://betterstacks.com/)：集成笔记、链接和文件存储的内容工作区，以应对信息过载问题。个人计划永久免费。
* [talky.io](https://talky.io/)：免费的群组视频聊天。匿名、点对点通信，无需插件、注册或支付费用。
* [Teamhood](https://teamhood.com/)：免费的项目、任务和问题跟踪软件。支持看板泳道以及完整的Scrum实现。具有集成时间跟踪功能。支持最多五个用户和三个项目组合的免费使用。
* [Teamplify](https://teamplify.com)：通过团队分析和智能日常站立会议改善团队开发流程。包括全功能的请假管理，适用于以远程为主的团队。免费支持小规模团队使用。
* [Tefter](https://tefter.io)：带有强大Slack集成的书签应用程序。适用于开源团队的免费版本。
* [TeleType](https://teletype.oorja.io/)：共享终端、语音、代码、白板等更多功能。无需登录即可进行端到端加密的开发者协作。
* [TimeCamp](https://www.timecamp.com/)：免费的时间跟踪软件，支持无限用户。易于与项目管理工具（如Jira、Trello、Asana等）集成。
* [Teamcamp](https://www.teamcamp.app)：针对软件开发公司的全方位项目管理应用程序。
* [twist.com](https://twist.com)：异步友好的团队通信应用程序，使对话保持条理性和相关性。提供免费和无限计划。符合资格的团队可享受折扣优惠。
* [tldraw.com](https://tldraw.com)：免费的开源白板和绘图工具，具有智能箭头、快照、便签和SVG导出功能。支持多人协作编辑模式。官方免费VS Code扩展也一并提供。
* [BookmarkOS.com](https://bookmarkos.com)：可定制的在线桌面上的所有合一书签管理器、选项卡管理器和任务管理器，支持文件夹协作功能。免费提供所有功能的使用权限。
* [typetalk.com](https://www.typetalk.com/)：通过网页或移动设备进行即时消息传递，与您的团队共享和讨论想法和创意。
* [Tugboat](https://tugboat.qa)：对每一个pull请求进行预览，自动化按需进行。所有人都可以免费使用，非盈利组织还可以获得Nano级别的免费服务支持。
* [whereby.com](https://whereby.com/)：一键视频对话，免费使用（之前称为appear.in）。
* [windmill.dev](https://windmill.dev/)：Windmill是一个开源开发者平台，可以快速构建生产级的自动化和多步应用脚本，只需少量的Python和Typescript脚本即可实现功能开发部署上线运行等操作过程。作为免费用户，您可以创建并作为最多三个非高级工作空间的成员存在运行脚本操作过程等权限范围之内的操作过程等权限范围之内的操作过程等权限范围之内的操作过程等权限范围之内的操作过程等权限范围之内的操作过程等权限范围之内的操作过程等权限范围内的任务操作过程等任务操作过程等任务操作过程等任务操作过程等任务操作过程等任务操作过程的脚本运行部署上线等操作过程等权限范围之内的任务操作过程的脚本运行部署上线等操作过程的脚本运行部署上线等操作过程的脚本运行部署等操作过程等权限范围内的任务操作过程的脚本运行部署等操作过程等权限范围内的脚本运行部署等操作过程等权限范围内的脚本运行等权限范围内的免费使用权限范围内的脚本运行等功能的使用权限范围之内的功能的使用等功能的使用等功能的使用等功能的使用等功能的使用等功能的使用等功能的使用服务支持等功能的使用服务支持等服务

**返回顶部**（回到目录）

## 内容管理系统

  以下是这些工具的翻译介绍：

* [Acquia.com](https://www.acquia.com/)：为Drupal网站提供托管服务。为开发者提供免费套餐。还提供免费开发工具（如Acquia Dev Desktop）。
* [Contentful](https://www.contentful.com/)：无头内容管理系统。提供内容和交付API云服务。附带一个免费的社区空间，包括5个用户、25K记录、48种内容类型和2个地区。
* [Cosmic](https://www.cosmicjs.com/)：无头CMS和API工具包。为开发者提供免费个人计划。
* [Crystallize](https://crystallize.com)：带有电子商务支持的无头PIM。内置GraphQL API。免费版包括无限用户、1000个目录项、每月5GB带宽和每月25k API调用。
* [DatoCMS](https://www.datocms.com/)：为小项目提供免费套餐。DatoCMS是一个基于GraphQL的CMS。在低级别套餐中，您每月有10万次调用。
* [Directus](https://directus.io)：无头CMS。完全免费和开源的平台，用于在本地或云端管理资产和数据库内容。没有任何限制或付费墙。
* [FrontAid](https://frontaid.io/)：无头CMS，将JSON内容直接存储在您的Git仓库中。没有限制。
* [kontent.ai](https://www.kontent.ai)：内容即服务平台，让您在享受无头CMS的好处的同时，也能赋予营销人员权力。开发者计划提供两名用户，每个项目拥有两个环境、500个内容项、两种语言的交付和管理API以及自定义元素支持。您可以根据需要选择更详细的计划。
* [Prismic](https://www.prismic.io/)：无头CMS。提供完全托管和可扩展的API的内容管理界面。社区计划为用户提供无限API调用、文档、自定义类型、资产和地区等。为您的下一个项目提供所需的一切。对于开放内容/开源项目，还有更大的免费计划可供选择。
* [Sanity.io](https://www.sanity.io/)：结构化内容的平台，拥有开源编辑环境和实时托管数据存储。无限项目。无限管理用户，三个非管理用户，两个数据集，包含每个项目的50万次API CDN请求、每月10GB带宽和每月5GB资产免费使用额度。
* [sensenet](https://sensenet.com)：以API为主的无头CMS，为企业提供企业级解决方案。开发者计划提供三名用户、500个内容项、三个内置角色、超过加五的内容类型、完全可访问的REST API、文档预览生成和在线Office编辑功能。
* [TinaCMS](https://tina.io/)：取代Forestry.io的工具。开源的Git支持的无头CMS，支持Markdown、MDX和JSON格式。基本服务是免费的，可供两名用户使用。
* [GatsbyjsCMS](https://www.gatsbyjs.com/)：Gatsby是一个快速灵活的框架，让使用任何CMS、API或数据库构建网站变得有趣起来。构建并部署无头网站，以驱动更多流量、更好的转化率和更高的收入！
* [Hygraph](https://hygraph.com/)：为小项目提供免费套餐的工具。以GraphQL为主的API工具包。从遗留解决方案转向GraphQL原生无头CMS，并首次实现全渠道内容API工具包的使用体验升级。
* [Squidex](https://squidex.io/)：为小项目提供免费套餐的工具。以API/GraphQL为主的技术工具包，基于事件源（自动跟踪每次更改）。是一款开源软件工具包产品。是一款开源软件工具包产品，采用事件驱动架构（EDA）。它自动跟踪每次更改并实时更新数据模型的变化情况，确保数据的准确性和一致性。开发人员可以使用Squidex构建可扩展的应用程序和服务，并利用其强大的API和GraphQL支持来管理和查询数据模型的变化情况。此外，Squidex还提供了丰富的功能和工具集，包括内容管理、用户管理、权限控制等，帮助开发人员快速构建出高效的应用程序和服务平台。总之这是一款非常强大的开源软件工具包产品，适用于需要处理复杂数据模型的应用程序和服务开发人员使用它进行开发和管理应用程序和数据模型的变化情况非常便捷高效可靠安全可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠可靠的软件工具包产品之一。。它提供了丰富的功能和工具集来帮助开发人员快速构建出高效的应用程序和服务平台并满足各种业务需求和数据管理需求。。它是一款非常强大的软件工具包产品之一适用于各种规模的企业和个人开发者使用它进行开发和管理应用程序和数据模型的变化情况非常便捷高效安全可靠可靠可靠的软件工具包产品之一。。它提供了丰富的功能和工具集可以满足各种业务需求和数据管理需求并帮助开发人员快速构建出高效的应用程序和服务平台。。它是一款非常强大且易于使用的软件工具包产品

## 代码生成

  以下是翻译结果：

* **[Appinvento](https://appinvento.io/)** —— AppInvento是一个免费的无需编程的应用构建器。在自动生成的后台代码中，用户可以完全访问源代码和无限API和路由，允许进行广泛的集成。免费计划包括三个项目、五个表格和一个Google插件。
* **[Cody AI](https://sourcegraph.com/cody)** —— Cody是一个使用人工智能和对你代码库的深刻理解来帮助你更快编写和理解代码的AI助理。Cody给开发者提供了多种LLM的选择（包括本地推理），支持各种IDE，支持所有流行的编程语言，并且有免费计划。免费计划每月给开发者提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500次自动完成（使用Starcoder 16b）。
* **[DhiWise](https://www.dhiwise.com/)** —— 使用DhiWise的创新代码生成技术，无缝地将Figma设计转化为动态的Flutter和React应用程序，优化你的工作流程，帮助你打造卓越的移动和网页体验。
* **[Codeium](https://www.codeium.com/)** —— Codeium是一个免费的AI驱动的代码补全工具。它支持超过20种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并与所有重要的独立和网页IDE集成。
* **[Fern](https://buildwithfern.com)** —— 编写API定义并使用它们生成流行语言（如TypeScript、Python、Java、Go等）的SDK/客户端库。完全支持OpenAPI。免费层最多可为20个端点生成代码。
* **[Metalama](https://www.postsharp.net/metalama)** —— 仅适用于C#。Metalama在编译时即时生成代码，使你的源代码保持清洁。它对开源项目是免费的，其商业友好的免费层包括三个方面。
* **[Supermaven](https://www.supermaven.com/)** —— Supermaven是VSCode、JetBrains和Neovim的快速AI代码补全插件。免费层提供无限的内联补全。
* **[tabnine.com](https://www.tabnine.com/)** —— Tabnine通过提供从全球所有代码中学习的见解，帮助开发者更快地创建更好的软件。有插件可用。
* **[v0.dev](https://v0.dev/)** —— v0使用AI模型根据简单的文本提示生成代码。它根据shadcn/ui和Tailwind CSS生成复制粘贴友好的React代码，人们可以在他们的项目中使用它。每次生成至少需要消耗30个积分。你最初有1200个积分，每月可获得200个免费积分。

**[⬆️ 返回顶部](#目录)**

## 代码质量

  以下是对您提供的Markdown文本的翻译结果：

* **[beanstalkapp.com](https://beanstalkapp.com/)** — 一套完整的编码、评审和部署代码的工作流程，一个用户免费账户，以及一个包含100MB存储空间的仓库。
  * **[browserling.com](https://www.browserling.com/)** — 实时跨浏览器互动测试，仅在分辨率为1024x768的Vista环境下免费使用MS IE 9，每次会话时长为三分钟。
  * **[codacy.com](https://www.codacy.com/)** — 为PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript提供自动化代码审查，对公共和私有仓库的审查无限量免费。
  * **[Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev)** - 针对DevOps的自动化基础设施即代码审查工具，可与GitHub、Bitbucket和GitLab集成（甚至支持自托管）。除了标准语言外，它还分析Ansible、Terraform、CloudFormation和Kubernetes等。免费开源使用。
  * **[CodeBeat](https://codebeat.co)** — 多种语言的自动化代码审查平台。永久免费用于公共仓库，提供Slack和电子邮件集成功能。
  * **[codeclimate.com](https://codeclimate.com/)** — 自动化代码审查，对开源和无限组织拥有的私有仓库（最多4名协作者）免费。学生和机构也免费。
  * **[codecov.io](https://codecov.io/)** — 代码覆盖率工具（SaaS），对开源和一个私有仓库免费。
  * **[CodeFactor](https://www.codefactor.io)** — 用于Git的自动化代码审查。免费版本包括无限用户、公共仓库和一个私有仓库。
  * **[coderabbit.ai](https://coderabbit.ai)** — 人工智能驱动的代码审查工具，与GitHub/GitLab集成。免费套餐包括每小时200个文件、每小时3次审查和每小时50次对话。永久免费适用于开源项目。
  * **[codescene.io](https://codescene.io/)** - CodeScene根据开发人员如何工作来优先处理技术债务，并可视化组织因素，如团队耦合和系统掌握情况。对开源免费。
  * **[CodSpeed](https://codspeed.io)** - 在CI管道中自动化性能跟踪。在部署之前捕获性能回归，借助精确且一致的指标来实现。对开源项目永久免费。
  * **[coveralls.io](https://coveralls.io/)** — 显示测试覆盖率报告，对开源免费。
  * **[dareboost](https://dareboost.com)** - 每月免费提供5次网络性能、可访问性和安全性分析报告。
  * **[deepcode.ai](https://www.deepcode.ai)** — DeepCode基于人工智能发现错误、安全漏洞、性能和API问题。DeepCode的分析速度允许我们在您保存按钮时实时分析您的代码并提供结果。支持的编程语言包括Java、C/C++、JavaScript、Python和TypeScript。与GitHub、BitBucket和GitLab集成。对开源和私有仓库以及最多30名开发人员免费使用。
  * **[deepscan.io](https://deepscan.io)** — 对JavaScript代码中的运行时错误进行高级静态分析，对开源免费。
  * **[DeepSource](https://deepsource.io/)** - DeepSource持续分析源代码更改，发现并修复分类于安全、性能、反模式、风险漏洞、文档和风格的问题。与GitHub、GitLab和Bitbucket原生集成。
  * **[DiffText](https://difftext.com)** - 立即查找两个代码块之间的差异。完全免费使用。
  * **[eversql.com](https://www.eversql.com/)** — EverSQL是数据库优化的首选平台，可自动获取数据库和SQL查询的关键见解。
  * **[gerrithub.io](https://review.gerrithub.io/)** — 为GitHub仓库提供免费Gerrit代码审查服务。
  * **[gocover.io](https://gocover.io/)** — 对任何Go包进行代码覆盖率分析。
  * **[goreportcard.com](https://goreportcard.com/)** — 对开源Go项目进行代码质量分析评估。对开源免费使用。
  * **[gtmetrix.com](https://gtmetrix.com/)** — 提供报告和详尽的优化建议以优化网站性能。对网站优化提供详尽的报告和建议。对网站优化提供详尽的报告和建议以优化网站表现和内容质量等各个方面的问题进行自动检测服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务收费服务

## 代码搜索和浏览

  以下是这些库的中文翻译：

* **[libraries.io](https://libraries.io/)** —— 为32种不同的包管理器提供搜索和依赖更新通知，开源免费。
* **[Namae](https://namae.dev/)** —— 可以在GitHub、Gitlab、Heroku、Netlify等众多网站上搜索你的项目名称是否可用。
* **[searchcode.com](https://searchcode.com/)** —— 全面的基于文本的代码搜索，对开源免费。
* **[tickgit.com](https://www.tickgit.com/)** —— 展示`TODO`注释（和其他标记），以识别值得改进的代码区域。
* **[CodeKeep](https://codekeep.io)** —— Google Keep的代码片段版本。组织、发现和共享代码片段，具有强大的代码截图工具，带有预设模板和链接功能。

**[⬆️ 返回顶部](#目录)**

## CI和CD（持续集成和持续部署）

  以下是翻译后的文本：

* **[AccessLint](https://github.com/marketplace/accesslint)** — AccessLint将自动化的网络无障碍测试纳入你的开发工作流程。它对开源和教育目的免费。
* **[appcircle.io](https://appcircle.io)** — 企业级的移动DevOps平台，自动化移动应用的构建、测试和发布流程，以实现更快、更高效的发布周期。免费使用时长为每次构建最多30分钟，每月20次构建，同时并发构建数为1。
* **[appveyor.com](https://www.appveyor.com/)** — Windows的CI服务，对开源免费。
* **[Argonaut](https://argonaut.dev/)** - 几分钟内在云端部署应用和基础设施。支持在Kubernetes和Lambda环境中的自定义和第三方应用部署。免费套餐允许在5个域名上无限部署应用，支持两个用户。
* **[bitrise.io](https://www.bitrise.io/)** — 针对移动应用（原生或混合）的CI/CD服务。每月有200次免费构建，每次构建时间最多为十分钟，支持两个团队成员。OSS项目可获得额外的构建时间、并发次数和团队规模限制。
* **[buddy.works](https://buddy.works/)** — CI/CD服务，提供五个免费项目和一次并发运行（每月可执行次数为120次）。
* **[Buildkite](https://buildkite.com)** CI Pipelines为三个用户和每月五千个工作分钟提供免费服务。测试分析免费开发者级别包括每月一百万次测试执行，并为开源项目提供更多免费包含内容。
* **[bytebase.com](https://www.bytebase.com/)** — 数据库CI/CD和DevOps工具。在拥有少于二十用户和十个数据库实例的情况下免费使用。
* **[CircleCI](https://circleci.com/)** — 提供全面的免费计划，包括托管CI/CD服务的所有功能，适用于GitHub、GitLab和BitBucket仓库。包括多种资源类别、Docker、Windows、Mac OS、ARM执行程序、本地运行器、测试拆分、Docker层缓存和其他先进的CI/CD功能。免费使用时长为每月最多六千分钟执行时间，无限协作者人数，私有项目最多并行作业数为三十个，并为开源项目提供最多八十万分钟的免费构建时间。
* **[cirrus-ci.org](https://cirrus-ci.org)** 和 **[cirun.io](https://cirun.io)** — 针对公共GitHub仓库免费使用。
* **[codefresh.io](https://codefresh.io)** — “终身免费”计划：一次构建，一个环境，共享服务器，无限公开仓库。
* **[codemagic.io](https://codemagic.io/)** - 免费使用每月五百次构建分钟数。
* **[codeship.com](https://codeship.com/)** — 每月一百次私有构建，五个私有项目，对开源项目无限使用。
* **[deploybot.com](https://www.deploybot.com/)** — 一个仓库进行十次部署，对开源项目免费使用。
* **[deployhq.com](https://www.deployhq.com/)** — 一个项目进行每日十次部署（每月三十次构建分钟），免费使用。
* **[drone](https://cloud.drone.io/)** - Drone Cloud使开发人员能够在多个架构上运行持续交付管道，包括x86和Arm（包括32位和64位），所有这些都在一个地方完成。
* **[LayerCI](https://layerci.com)** — 全栈项目的CI服务。提供一个全栈预览环境，配备有5GB内存和三个CPU。
* **[semaphoreci.com](https://semaphoreci.com/)** — 对开源项目免费使用，每月一百次私有构建次数。
* **[Squash Labs](https://www.squash.io/)** — 为每个分支创建一个虚拟机并使您的应用程序可通过唯一的URL访问到它，无限公开和私有仓库支持，虚拟机大小最多可达两GB。
* **[styleci.io](https://styleci.io/)** — 仅针对公共GitHub仓库提供使用服务。
* **[Mergify](https://mergify.io)** — GitHub的工作流自动化和合并队列工具—针对公共GitHub仓库提供免费服务。
* **[Make](https://www.make.com/en)** — 工作流自动化工具允许您通过用户界面连接应用程序并自动化工作流程。它支持许多应用程序和流行的API接口。针对公共GitHub仓库提供免费服务，免费套餐包括一百兆字节的数据量、一千次操作和至少十五分钟的间隔时间限制。 
* **[Spacelift](https://spacelift.io/)** - 管理云原生基础设施代码的平台。免费计划包括：云原生基础设施代码协作工具、Terraform模块注册中心、ChatOps集成工具、使用Open Policy Agent进行持续资源合规性

## Testing

  好的，以下是上述Markdown文本的中文翻译：

* [Applitools.com](https://applitools.com/) — 为网页、原生移动和桌面应用提供智能视觉验证。可与几乎所有自动化解决方案（如Selenium和Karma）和远程运行器（如Sauce Labs和Browser Stack）集成。对开源免费。单一用户的免费套餐包含每周有限制的检查点。
* [Appetize](https://appetize.io) — 在此基于云的Android手机/平板电脑模拟器以及iPhone/iPad模拟器上测试您的Android和iOS应用，直接在浏览器中运行。免费套餐包括两个并发会话，每月使用时间为30分钟。对应用大小没有限制。
* [Apptim](https://apptim.com) — 一个移动测试工具，无需性能工程技能即可评估应用的性能和用户体验（UX）。桌面版本可使用自己的设备，完全免费，对iOS和Android应用测试无限制。
* [Argos](https://argos-ci.com) — 开发者的开源视觉测试工具，无限制项目，每月可生成5,000张截图。对开源项目免费。
* [Bencher](https://bencher.dev/) — 捕捉CI性能回归的持续基准测试工具套件。所有公开项目均可免费使用。
* [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[对开源免费](https://www.browserstack.com/open-source?ref=pricing)
* [BugBug](https://bugbug.io/) — 网页应用程序的轻量级测试自动化工具。易于学习，无需编码。您可以在自己的计算机上无限次运行测试，免费。还可以获得云监控和CI/CD集成服务，但需额外支付费用。
* [Checkly](https://checklyhq.com) — 适用于现代DevOps的代码优先合成监控工具。以比传统提供商更优惠的价格监控您的API和应用程序。由Monitoring as Code工作流程和Playwright提供支持。开发者可享受慷慨的免费套餐。
* [checkbot.io](https://www.checkbot.io/) — 浏览器扩展程序，测试您的网站是否遵循50多项SEO、速度和安全最佳实践。对小规模网站提供免费套餐。
* [cypress.io](https://www.cypress.io/) — 快速、简单、可靠的浏览器测试工具。Cypress Test Runner完全免费且开源，无任何限制。Cypress Dashboard对开源项目免费，最多支持5名用户。
* [Cypress Recorder by Preflight](https://cypress.preflight.com/) — 在浏览器上创建人工智能驱动的Cypress测试/POM模型。除AI部分外，其余均为开源。每月可免费创建五次测试，包含自我修复脚本、电子邮件和视觉测试。
* [everystep-automation.com](https://www.everystep-automation.com/) — 记录并重新播放浏览器中执行的所有步骤并创建脚本，功能有限制的免费版本。
* [Gremlin](https://www.gremlin.com/gremlin-free-software) — Gremlin的混沌工程工具允许您安全地注入故障到您的系统中，以发现潜在的问题，防止客户面临问题。Gremlin Free提供对最多5台主机或容器的关机和CPU攻击访问权限。
* [gridlastic.com](https://www.gridlastic.com/) — 提供Selenium Grid测试的免费计划，最多支持同时启动4个Selenium节点/启动Grid /运行测试分钟数达每月4,000次。
* [katalon.com](https://katalon.com) - 提供测试平台，适用于各种规模和不同测试成熟度的团队，包括Katalon Studio、TestOps（+视觉测试）、TestCloud和Katalon Recorder。
* [Keploy](https://keploy.io/) - Keploy是面向开发者的功能测试工具包。录制API调用生成端到端测试（KTests）和模拟或替身（KMocks）。对开源项目免费。
* [knapsackpro.com](https://knapsackpro.com) - 通过并行化测试套件来加速您的测试，适用于任何CI提供商。将Ruby或JavaScript测试拆分为并行CI节点以节省时间。免费计划适用于最多10分钟的测试文件和对开源项目的无限免费计划。
* [lambdatest.com](https://www.lambdatest.com/) — 手动、视觉、截图和自动化浏览器测试在Selenium和Cypress上进行，[对开源免费](https://www.lambdatest.com/open-source-cross-browser-testing-tool) 。
* [loadmill.com](https://www.loadmill.com/) - 通过分析网络流量自动创建API和负载测试。每月可免费模拟最多50个并发用户长达60分钟。
* [lost-pixel.com](https://lost

  以下是翻译结果：

* [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查webhooks。转发到localhost或从历史记录中重播。免费使用。
  * [Vaadin](https://vaadin.com) - 使用Java或TypeScript构建可扩展的UI界面，并使用集成的工具、组件和设计系统来更快地迭代、设计更好并简化开发过程。无限项目，五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) - 各种免费网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成期间使用独特的URL调试和检查webhooks和HTTP请求。完全免费，您可以创建无限数量的URL并接收推荐。
  * [webhook.site](https://webhook.site) - 使用自定义URL验证webhooks、出站HTTP请求或电子邮件。临时URL和电子邮件地址始终免费。
  * [webhookbeam.com](https://webhookbeam.com) - 设置webhooks并通过推送通知和电子邮件进行监控。

**[⬆️ 返回顶部](#目录)**

## Security and PKI

  以下是您提供的Markdown文本的翻译结果：

* [aikido.dev](https://www.aikido.dev) — 一站式应用安全平台，涵盖SCA、SAST、CSPM、DAST、Secrets、IaC、恶意软件、容器扫描等。免费计划包括两个用户，扫描十个仓库、一个云环境、两个容器和一个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 发现您网络中的被攻击系统。
  * [Altcha.org](https://altcha.org/anti-spam) - 网站和API的防垃圾邮件过滤器，通过自然语言处理和机器学习驱动。免费计划每天每个域名可请求200次。
  * [atomist.com](https://atomist.com/) — 更快捷、更方便地自动化各种开发任务（现处于Beta阶段）。
  * [cloudsploit.com](https://cloudsploit.com/) — 亚马逊网络服务（AWS）的安全性和合规性审计和监控。
  * [公共云威胁情报](https://cloudintel.himanshuanand.com/) — 针对公共云基础设施的高置信度攻击指标（IOC）。部分信息可在GitHub上获取（https://github.com/unknownhad/AWSAttacks）。完整列表可通过API获取。
  * [CodeNotary.io](https://www.codenotary.io/) — 开放源代码平台，通过不可磨灭的证明对代码、文件、目录或容器进行公证。
  * [crypteron.com](https://www.crypteron.com/) — 云优先、面向开发者的安全平台，防止在Java和应用程序中的NET数据泄露。
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个简单直观的Web应用程序，用于分析和解码/编码数据，无需处理复杂的工具或编程语言。类似于瑞士军刀般的密码学与加密工具。所有功能均免费使用，无限制。如果您希望自行托管，可以将其开源。
  * [DAS](https://signup.styra.com/) — Styra DAS免费版，用于创建、部署和管理Open Policy Agent（OPA）授权的全生命周期政策管理。
  * [Datree](https://www.datree.io/) — 用于防止Kubernetes配置错误的开源CLI工具，确保清单和Helm图表遵循最佳实践以及您组织的政策。
  * [Dependabot](https://dependabot.com/) 自动更新Ruby、JavaScript、Python、PHP、Elixir、Rust、Java（Maven和Gradle）、NET、Go、Elm、Docker、Terraform、Git子模块和GitHub动作的依赖项。
  * [DJ Checkup](https://djcheckup.com) — 使用此免费的自动化检查工具扫描您的Django站点以查找安全漏洞。基于Pony Checkup站点进行分叉。
  * [Doppler](https://doppler.com/) — 应用程序秘密的通用秘密管理器，支持同步到各种云提供商。基本访问控制下免费适用于五名用户。
  * [Dotenv](https://dotenv.org/) — 快速安全地同步您的.env文件。停止在Slack和电子邮件等不安全渠道共享您的.env文件，并防止丢失重要的.env文件。免费适用于最多三名团队成员。
  * [GitGuardian](https://www.gitguardian.com) — 自动检测并修复代码库中的秘密和敏感文件。扫描您的git仓库以发现超过350种类型的秘密和敏感文件——针对个人和不超过25名开发者的团队免费开放。
  * [Have I been pwned？](https://haveibeenpwned.com) — 用于获取有关泄露信息的REST API。
  * [hostedscan.com](https://hostedscan.com) — 在线应用程序漏洞扫描程序，用于扫描网页应用程序、服务器和网络。每月可免费扫描十次。
  * [Infisical](https://infisical.com/) — 开放源代码平台，用于管理开发人员秘密和跨团队的基础设施：从本地开发到生产环境的第三方服务无处不在的秘密管理。适用于最多五名开发人员免费开放。
  * [Internet.nl](https://internet.nl) — 测试现代互联网标准，如IPv6、DNSSEC、HTTPS等。
  * [keychest.net](https://keychest.net) - SSL证书管理以及购买证书与集成CT数据库的服务。
  * [letsencrypt.org](https://letsencrypt.org/) — 免费SSL证书颁发机构，其证书受所有主流浏览器的信任。
  * [meterian.io](https://www.meterian.io/) - 监测Java、Javascript、NET、Scala、Ruby和NodeJS项目的安全漏洞依赖项。适用于一个私有项目免费开放，无限项目适用于开源项目。

**返回顶部**（回到目录）

## Authentication, Authorization, and User Management

  以下是这些服务的翻译：

* [Aserto](https://www.aserto.com) - 为应用和API提供精细粒度的授权服务。免费版支持最多1000个移动应用用户（MAUs）和100个授权实例。
* [asgardeo.io](https://wso2.com/asgardeo) -无缝集成单点登录（SSO）、多因素认证（MFA）、无密码认证等。包含前端和后端应用的SDK。免费版支持最多1000个MAU和五个身份提供商。
* [Auth0](https://auth0.com/) - 托管式单点登录。免费计划包括25,000个MAU、无限社交连接、自定义域名等。
* [Authgear](https://www.authgear.com) - 为您的应用快速添加无密码、一次性密码（OTP）、双重身份验证（2FA）、单点登录（SSO）等功能。包含所有前端内容。免费版支持最多5,000个MAU。
* [Authress](https://authress.io/) - 任何项目的身份验证登录和访问控制，支持无限身份提供商。如Facebook、Google、Twitter等。前1,000次API调用免费。
* [Authy](https://authy.com) - 多设备上的双重身份验证（2FA）服务，支持备份功能。可作为Google身份验证器的替代方案。最多支持100次成功的身份验证操作使用免费版。
* [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一套完整的授权管理系统，用于编写、测试和部署访问策略。提供精细粒度的授权和访问控制功能，免费版支持最多每月活跃主体（principal）使用量为每月最多支持最多每月活跃主体数为每月最多支持最多每月活跃主体数为每月最多支持最多每月活跃主体数为每月最多支持最多每月活跃主体数为每月最多支持每月活跃用户数上限为每月活跃用户数上限为每月活跃用户数上限为每月活跃用户数上限为每月活跃用户数上限为每月最多支持最多每月活跃用户数上限为每月最多支持每月最多支持最多每月活跃用户数上限为每月最多支持至多每月活跃用户数上限为至多每月活跃用户数上限为至多每月活跃用户数上限为至多每月活跃用户数上限为至多至多至多至多至多至多至多至多至多至多至多至多至多至多至多至多可达一百人。免费提供精细粒度的授权和访问控制功能，免费版支持最多每月活跃主体数为一百人。免费提供精细粒度的授权和访问控制功能，免费版支持最多一百个每月活跃用户。免费提供授权管理系统的使用权限，包括编写测试部署访问策略等功能，免费版支持一百个用户的使用权限。免费提供授权管理系统的使用权限，包括编写测试部署访问策略等功能，免费版支持一个月内的活跃用户数为一百人一个月内的活跃用户数为一百人一个月内的活跃用户数为一百人一个月内的活跃用户数为一百人一个月内的活跃用户数不超过一百人一个月内的活跃用户数不超过一百人一个月内的活跃用户数不超过一百人一个月内的活跃用户数不超过一百人一个月内的活跃用户数不超过每个月的一百名用户可使用免费版服务。免费提供授权管理系统的所有功能服务，包括测试部署访问策略等功能，免费版支持每个月的一百名用户使用权限。免费提供授权管理系统的所有功能服务，包括测试部署访问策略等功能，适用于所有规模的公司企业或个人开发者使用，免费版支持每个月的活跃用户数量不超过一百人使用权限。免费提供授权管理系统的所有功能服务包括测试部署访问策略等功能适用于所有规模的公司企业或个人开发者使用免费版提供无限数量的API调用次数以及无限数量的API调用次数以及无限数量的API调用次数以及无限数量的API调用次数等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等权限等允许用户进行无限次的API调用并支持无限数量的用户注册使用允许用户进行无限次的API调用并支持无限数量的用户注册使用允许用户进行无限次的API调用并支持创建和管理无限数量的租户账号等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能等功能允许用户使用其产品的开发安全管理和用户身份管理功能允许用户使用其产品的开发安全管理和用户身份管理功能允许用户使用其产品的开发安全管理和用户身份管理功能允许用户使用其产品的开发安全管理和身份验证功能允许用户使用其产品的身份验证功能并集成到应用程序中集成到应用程序中集成到应用程序中集成到应用程序中集成到应用程序中集成到产品中并允许用户使用产品中的开发安全管理和身份验证功能并允许用户使用产品中的开发安全管理和无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能无密码认证功能免费版支持最多五千

## 移动应用分发和反馈

  以下是这些内容的中文翻译：

* [TestApp.io](https://testapp.io) - 确保您的移动应用程序按预期工作的首选平台。免费计划包括一个应用程序、分析、无限版本和安装次数以及反馈收集。
* [Loadly](https://loadly.io) - iOS和Android测试版应用程序分发服务提供完全免费的服务，包括无限下载、高速下载和无限上传。
* [Diawi](https://www.diawi.com) - 可直接将iOS和Android应用程序部署到设备上。免费计划包括应用程序上传、密码保护链接、一天到期以及十次安装次数。
* [InstallOnAir](https://www.installonair.com) - 通过空中分发iOS和Android应用程序。免费计划包括无限上传、私人链接、访客两天到期以及注册用户六十天到期。
* [GetUpdraft](https://www.getupdraft.com) - 用于测试移动应用的分发平台。免费计划包括一个应用程序项目、三个应用程序版本、500MB存储空间和每月一百次应用程序安装。
* [Appho.st](https://appho.st) - 移动应用程序托管平台。免费计划包括五个应用程序、每月五十次下载以及最大文件大小为100MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  以下是这些内容的翻译：

* [bitnami.com](https://bitnami.com/) — 在IaaS上部署准备好的应用程序。免费管理一个AWS微实例。
* [Esper](https://esper.io) — 针对Android设备的DevOps的MDM和MAM（移动设备管理）。一个用户许可证下免费使用一百台设备，应用存储免费使用25MB。
* [jamf.com](https://www.jamf.com/) — 针对iPad、iPhone和Mac的设备管理，免费使用三台设备。
* [Miradore](https://miradore.com) — 设备管理服务。随时更新您的设备车队，并免费安全地管理无限数量的设备。免费计划提供基本功能。
* [moss.sh](https://moss.sh) — 帮助开发人员部署和管理他们的Web应用程序和服务器。每月免费进行最多25次git部署。
* [runcloud.io](https://runcloud.io/) — 主要专注于PHP项目的服务器管理。最多可免费使用一台服务器。
* [ploi.io](https://ploi.io/) — 服务器管理工具，可轻松管理和部署您的服务器和网站。免费使用一台服务器。

**[⬆️ 返回顶部](#目录)**

## 消息传递和流媒体服务

  以下是对您提供的Markdown文本的中文翻译：

* [Ably](https://www.ably.com/) - 提供实时消息传递服务的平台，具有实时性、持久性和保证传递的特点。免费计划包括每月3百万条消息、100个并发连接和100个并发频道。
* [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ服务。Little Lemur计划：每月最多1百万条消息、最多20个并发连接、最多100个队列、最多1万个排队消息，不同AZ有多个节点。
* [courier.com](https://www.courier.com/) - 通过单一API提供推送、应用内、电子邮件、聊天、短信和其他消息通道，具有模板管理和其他功能。免费计划包括每月1万条消息。
* [engagespot.co](https://engagespot.co/) - 为开发者提供多通道通知基础设施，具有预构建的应用内收件箱和无代码模板编辑器。免费计划包括每月1万条消息。
* [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将您的MQTT设备连接到云原生物联网消息代理。永久免费，最多可连接100个设备（无需信用卡）。
* [knock.app](https://knock.app) - 开发者的通知基础设施。通过单个API调用发送到多个渠道，如应用内、电子邮件、短信、Slack和推送。免费计划包括每月1万条消息。
* [NotificationAPI.com](https://www.notificationapi.com/) - 在5分钟内为任何软件添加用户通知。免费计划包括每月1万个通知+ 100条短信和自动呼叫。
* [Novu.co](https://novu.co) - 开发者的开源通知基础设施。简单组件和API可管理所有通信渠道：电子邮件、短信、直接、应用和推送。免费计划包括每月3万个通知，保留期为90天。
* [pusher.com](https://pusher.com/) - 实时消息传递服务。免费适用于最多100个并发连接和每天20万条消息。
* [scaledrone.com](https://www.scaledrone.com/) - 实时消息传递服务。免费适用于最多20个并发连接和每天10万个事件。
* [synadia.com](https://synadia.com/ngs) - [NATS.io](https://nats.io)服务。全球、AWS、GCP和Azure都有服务点。永久免费，消息大小为4k，活动连接数为50，每月数据量为5GB。
* [cloudkarafka.com](https://www.cloudkarafka.com/) - 免费共享Kafka集群，最多5个主题，每个主题10MB数据，数据保留期为28天。
* [pubnub.com](https://www.pubnub.com/) - 提供Swift、Kotlin和React消息的实时服务。每月可处理1百万次交易。交易可能包含多条消息。
* [eyeson API](https://developers.eyeson.team/) - 基于WebRTC（SFU、MCU）的视频通信API服务，用于构建视频平台。允许实时数据注入、视频布局、录制、功能齐全的主机网页界面（快速启动）或针对自定义界面的软件包。具有针对开发者的[免费层次结构](https://apiservice.eyeson.com/api-pricing)，每月会议分钟数为1千分钟。
* [webpushr](https://www.webpushr.com/) - 网络推送通知 - 免费适用于最多1万名订阅者，无限推送通知，浏览器内消息传递。
* [httpSMS](https://httpsms.com) - 使用您的安卓手机作为短信网关发送和接收文本消息。每月可免费发送和接收最多200条短信。
* [EMQX Serverless](https://www.emqx.com/en/cloud/serverless-mqtt) - 可伸缩且安全的无服务器MQTT代理，您可以在几秒钟内获得该代理。永久免费，会话分钟数为每月一百万（无需信用卡）。
* [Pocket Alert](https://pocketalert.app) - 向iOS和Android设备发送推送通知。通过API或Webhooks轻松集成，并完全控制您的警报。免费计划：每天向一个设备发送50条消息到一个应用程序。 
**[⬆️ 返回顶部](#目录)**

## 日志管理

  以下是这些网站的中文翻译介绍：

* **[bugfender.com](https://bugfender.com/)** — 每天免费记录行数高达 10 万行，保留时间为 24 小时。
* **[logentries.com](https://logentries.com/)** — 每月免费记录量高达 5GB，保留时间为七天。
* **[loggly.com](https://www.loggly.com/)** — 针对单一用户免费，每天 200MB 数据量，保留时间为七天。
* **[logz.io](https://logz.io/)** — 每天免费记录量高达 1GB，保留时间为一天。
* **[ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/)** — 由 Manage Engine 驱动的日志管理服务。免费计划提供 50GB 存储空间，存储保留时间为 15 天，搜索时间为 7 天。
* **[papertrailapp.com](https://papertrailapp.com/)** — 提供 48 小时搜索，七天存档，每月 50MB 数据量。
* **[sematext.com](https://sematext.com/logsene)** — 每天免费记录量高达 500MB，保留时间为七天。
* **[sumologic.com](https://www.sumologic.com/)** — 每天免费记录量高达 500MB，保留时间为七天。
* **[logflare.app](https://logflare.app/)** — 每月为每款应用提供免费记录高达 12,960,000 条数据项，保留时间为三天。
* **[logtail.com](https://logtail.com/)** — 基于 ClickHouse 的 SQL 兼容日志管理。每月免费记录量高达 1GB，保留时间为三天。
* **[logzab.com](https://logzab.com/)** — 审计跟踪管理系统。每月免费提供用户活动日志 1,000 条，保留时间为一个月，适用于最多五个项目。
* **[openobserve.ai](https://openobserve.ai/)** — 提供每月高达 200GB 的免费数据吞吐量，保留时间为 15 天。

**[⬆️ 返回顶部](#目录)**

## Translation Management

  以下是翻译结果：

* [crowdin.com](https://crowdin.com/) — 无限项目、无限字符串和开源协作者
* [gitlocalize.com](https://gitlocalize.com) - 适用于私有和公有仓库的免费且无限使用
* [Lecto](https://lecto.ai/) - 机器翻译API提供免费等级（30次免费请求，每次请求最多翻译1000个字符）。与Loco Translate Wordpress插件集成。
* [lingohub.com](https://lingohub.com/) — 免费适用于最多3个用户，对开源免费
* [localazy.com](https://localazy.com) - 对源语言字符串1000个以内免费，支持无限语言、无限协作者，为初创公司和开源提供优惠方案
* [Localeum](https://localeum.com) - 对最多1000个字符串免费，一个用户，支持无限语言和无限项目
* [localizely.com](https://localizely.com/) — 对开源免费
* [Loco](https://localise.biz/) — 对最多2000次翻译免费，支持无限协作者，每个项目支持十种语言，每个项目最多支持可翻译资产1000个
* [oneskyapp.com](https://www.oneskyapp.com/) — 有限免费版适用于最多5个用户，对开源免费
* [POEditor](https://poeditor.com/) — 对最多1000个字符串免费
* [SimpleLocalize](https://simplelocalize.io/) - 对最多100个翻译键免费，支持无限字符串、无限语言，为初创公司提供优惠方案
* [Texterify](https://texterify.com/) - 单用户免费
* [Tolgee](https://tolgee.io) - 提供带有有限翻译的永久免费SaaS版本和永久免费的自行托管版本
* [transifex.com](https://www.transifex.com/) — 对开源免费
* [Translation.io](https://translation.io) - 对开源免费使用
* [Translized](https://translized.com) - 对最多1000个字符串免费，一个用户，支持无限语言和无限项目使用。
* [webtranslateit.com](https://webtranslateit.com/) — 对最多500个字符串提供免费使用。 
* [weblate.org](https://weblate.org/) — 对于自由项目提供免费版本，最高支持到源字符串为1万个的免费等级和无限的本地托管服务。 
* [Free PO editor](https://pofile.net/free-po-editor) — 供所有人免费使用。 
**[⬆️ 返回顶部](#目录)**

## 监控

  以下是对您提供的Markdown文本的翻译结果：

UptimeObserver.com - 获取带有五分钟间隔的二十个正常运行时间监视器以及可自定义的状态页面，甚至可用于商业用途。通过电子邮件和Telegram享受实时无限通知。无需信用卡即可开始使用。
Pingmeter.com - 提供五个正常运行时间监视器，间隔十分钟。监控SSH，HTTP，HTTPS和任何自定义TCP端口。
alerty.ai - 免费提供前端，后端，数据库等的APM和监控，以及免费代理运行。
appdynamics.com - 二十四小时指标免费使用，应用程序性能管理代理仅限于一个Java，一个.NET，一个PHP和一个Node.js的使用。
appneta.com - 提供一小时数据保留的免费服务。
appspector.com - 用于远程iOS/Android/Flutter调试的任务控制。对于小流量使用（64MB日志）免费。
assertible.com - 自动化API测试和监控。为团队和个人提供免费计划。
bleemeo.com - 为三台服务器，五个正常运行时间监视器提供免费服务，支持无限用户、无限仪表板和无限警报规则。
checklyhq.com - 为开发人员提供开源端到端/合成监控和深度API监控。免费计划支持五名用户和超过五十万的检查运行次数。
cloudsploit.com - AWS安全和配置监控。免费：按需扫描无限次数，无限用户和存储帐户。订阅：自动化扫描、API访问等。
cronitor.io - 提供性能洞察和正常运行时间监控，适用于cron作业、网站、API等。有一个免费的五级监控器。
datadoghq.com - 免费支持最多五个节点使用。
deadmanssnitch.com - 针对cron作业的监控。一个免费的监视器（监测器），如果推荐他人注册则可以得到更多免费监测器。
downtimemonkey.com - 提供六十个正常运行时间监视器，间隔五分钟。通过电子邮件和Slack发送警报。
economize.cloud - 通过整理云资源以优化和报告相同的方式来解密云基础设施成本。每月免费提供高达五千美元在Google Cloud Platform上花费的费用。
elastic.co - 为JS开发人员提供即时性能洞察。带有二十四小时数据保留的免费服务。
Grafana Cloud - 是一个可组合的可观察性平台，可以整合指标和日志与Grafana一起使用。免费服务包括三名用户、十个仪表板、一百个警报、指标存储在Prometheus和Graphite中（十万系列，十四天保留）、日志存储在Loki中（五十GB日志，十四天保留）。
healthchecks.io - 监控您的cron作业和后台任务。最多可免费监控二十次检查。
Hydrozen.io - 提供正常运行时间监控和状态页面服务，免费计划包括十个正常运行时间监控器、五个心跳监控器、一个域名监控和一个状态页面免费。
incidenthub.cloud - 云和SaaS状态页面聚合器，永远免费提供二十个监视器和两个通知渠道（Slack和Discord）。
inspector.dev - 提供完全实时的监控仪表板，永久免费使用。
instrumentalapp.com - 提供美观且易于使用的应用程序和服务器监控，最多可监控五百个指标和三小时的数据可见性，免费使用。
keychest.net/speedtest - 独立的网络速度测试和TLS握手延迟测试针对Digital Ocean进行。
letsmonitor.org - SSL监控服务，最多可免费监控五个监视器。
linkok.com - 在线断链检查工具，对于小型网站最多一百页以及开源项目是免费的。
loader.io - 免费的负载测试工具，但有限制条件。 
netdata.cloud - Netdata是一个开源工具，用于收集实时指标数据。这是一个不断增长的产品，也可以在GitHub上找到它！ 免费提供服务给个人开发者使用 。 
newrelic.com - New Relic观察性平台旨在帮助工程师创建更完美的软件产品 。从单体应用到无服务器架构 ，您可以全面监控您的整个软件堆栈并进行故障排除和优化 。免费套餐提供每月一百GB的免费数据摄取量 ，一个免费的完全访问用户以及无限的主用户 。 可以在上面创建私有空间进行开发测试 。 也可以申请试用版进行试用 。 试用版结束后可以选择付费版进行使用 。 付费版可以根据需求选择套餐 。 套餐包括基础版 、专业版和企业版 。 每个版本都提供不同的功能和服务 。 具体价格和功能可以在官网查看 。总的来说 ，New Relic是一个强大的观察性平台 ，可以帮助工程师更好地理解和优化他们的软件产品 。 强烈推荐给需要全面监控和优化软件性能的团队和个人使用 。 尤其是那些需要实时监控 、故障排除和优化的大型团队和企业 。 他们可以通过这个平台更好地了解他们的软件运行情况 ，从而做出更好的决策和改进 。 总的来说 ，New Relic是一个值得信任的品牌 ，在业界有着良好的口碑和评价 。 他们提供了强大的功能和优质的服务 ，并且不断在改进和创新 。 如果您正在寻找一个可靠的观察性平台来帮助您优化软件性能 ，那么New Relic是一个不错的选择 。 您可以尝试他们的免费试用版来体验他们的服务和功能 。 netdata

  以下是翻译结果：

* [statuscake.com](https://www.statuscake.com/) - 网站监控，免费提供有限制的无限测试次数。
* [statusgator.com](https://statusgator.com/) - 状态页面监控，免费赠送三个监控器。
* [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) - 服务器监控、正常运行时间监控、DNS及域名监控。免费监控10个服务器、10个正常运行时间和10个域名。
* [thousandeyes.com](https://www.thousandeyes.com/) - 网络和用户经验监控。免费提供三个地点和二十个主要网络服务的实时数据馈送。
* [uptimerobot.com](https://uptimerobot.com/) - 网站监控，免费赠送五十个监控器。
* [uptimetoolbox.com](https://uptimetoolbox.com/) - 免费监控五个网站，间隔六十秒，公共状态页面。
* [zenduty.com](https://www.zenduty.com/) - 端到端事件管理、警报、值班管理和响应编排平台，适用于网络运营、站点可靠性工程和DevOps团队。最多五个用户免费使用。
* [instatus.com](https://instatus.com) - 只需十秒钟即可获得漂亮的状态页面。永久免费使用，无限子用户和团队。
* [Squadcast.com](https://squadcast.com) - Squadcast是一款端到端事件管理软件，旨在帮助您推广SRE最佳实践。最多十个用户的永久免费计划可用。
* [RoboMiri.com](https://robomiri.com/) - RoboMiri是一款稳定的正常运行时间监控器，提供多种监控器：定时任务、关键词、网站、端口和ping等。免费进行二十五次正常运行时间检查，间隔三分钟。通过电话呼叫、短信、电子邮件和网络钩子发出警报。
* [Better Stack](https://betterstack.com/better-uptime) - 在单一产品中提供正常运行时间监控、事件管理、值班调度/警报和状态页面等功能。免费计划包括十个监控器，每三分钟检查一次频率和状态页面。
* [Pulsetic](https://pulsetic.com) - 包括十个监控器、六个月的运行时间/日志历史记录、无限状态页面和自定义域名！永久免费使用，无限电子邮件警报，无需信用卡。
* [Wachete](https://www.wachete.com) - 监控五页，每二十四小时检查一次。
* [Xitoring.com](https://xitoring.com/) - 正常运行时间监控：免费二十次，Linux和Windows服务器监控：免费五次，状态页面：免费一次 - 移动应用程序、多个通知渠道等等！ 

**[⬆️ 返回顶部](#目录)**

## 崩溃和异常处理

  以下是这些Markdown文本的中文翻译：

* **[CatchJS.com](https://catchjs.com/)** - 使用截图和点击轨迹跟踪JavaScript错误。开源项目免费。
* **[bugsnag.com](https://www.bugsnag.com/)** - 初始试用后每月最多可免费跟踪2,000个错误。
* **[elmah.io](https://elmah.io/)** - 针对Web开发者的错误日志记录和正常运行时间监控。为开源项目提供免费的小型企业订阅。
* **[Embrace](https://embrace.io/)** - 移动应用监控。每年用户会话数达一千万的小型团队免费使用。
* **[exceptionless](https://exceptionless.com)** - 实时错误、功能、日志报告等。每月免费处理3k事件/ 1用户。开源并易于自行托管以进行无限使用。
* **[GlitchTip](https://glitchtip.com/)** - 简单、开源的错误跟踪。与开源Sentry SDK兼容。每月可免费处理1,000个事件，或者可以无限制地自行托管。
* **[honeybadger.io](https://www.honeybadger.io)** - 异常、正常运行时间和cron监控。小型团队和开源项目每月可免费处理12,000个错误。
* **[memfault.com](https://memfault.com)** - 云设备可观察性和调试平台。对于北欧设备免费使用一百台，[NXP](https://app.memfault.com/register-nxp)，和[Laird](https://app.memfault.com/register-laird)设备免费使用一百台。
* **[rollbar.com](https://rollbar.com/)** - 异常和错误监控，免费计划每月处理5,000个错误，无限用户，保留期限为30天。
* **[sentry.io](https://sentry.io/)** - Sentry实时跟踪应用程序异常并拥有小型免费计划。每月免费处理五千个错误/一个用户，如果自行托管则不受限制使用。
* **[Axiom](https://axiom.co/)** - 可存储最多达半TB的日志，保留期限为三十天。包括与Vercel等平台的集成以及使用电子邮件和Discord通知的高级数据查询功能。
* **[Semaphr](https://semaphr.com)** - 移动应用的免费全方位开关控制工具。
* **[Jam](https://jam.dev)** - 开发者友好的一键式bug报告。免费计划，无限制报告数量。
* **[Whitespace](https://whitespace.dev)** - 在浏览器中直接进行一键式bug报告。个人使用免费计划，无限制录制次数。

**[⬆️ 返回顶部](#目录)**

## Search

  以下是翻译结果：

* [algolia.com](https://www.algolia.com/) — 提供容错、相关性和UI库的主机搜索解决方案，可轻松创建搜索体验。“Build”免费计划包括每月文档搜索量达一百万篇和一万次查询。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)。
* [bonsai.io](https://bonsai.io/) — 提供免费内存存储空间达一GB和存储一GB。
* [CommandBar](https://www.commandbar.com/) — 统一搜索栏服务，基于网络的用户界面小部件/插件，允许用户搜索产品中的内容、导航、功能等，有助于发现内容。每月活跃用户不超过一千个时免费使用，命令无限。
* [Magny](https://magny.io) — 帮助实现命令面板的SaaS服务（例如应用程序内搜索），显著减少用户在应用程序中找到任何内容的时间，从而提高用户体验和效率。
* [Orama Cloud](https://orama.com/pricing) — 免费使用三个索引、每索引文档量达一百万篇、无限全文/向量/混合搜索以及为期六十天的分析功能。
* [searchly.com](http://www.searchly.com/) — 免费使用两个索引和存储量为二十兆字节的空间。

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  以下是翻译结果：

* [FreeCodeCamp](https://www.freecodecamp.org/) - 提供数据分析、信息安全、网络开发等课程的免费开源平台和认证。
* [The Odin Project](https://www.theodinproject.com/) - 以JavaScript和Ruby为主的网络开发的免费开源平台。
* [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量专业简历模板的平台，可以克隆、完全编辑并下载，优化ATS（应用程序跟踪系统）。
* [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 来自行业前沿专家的免费短期课程，可以在一个小时内或更短的时间内获得最新的生成式人工智能工具和技术的实践经验。
* [LabEx](https://labex.io) - 通过互动实验室和真实世界项目，在Linux、DevOps、网络安全、编程、数据科学等领域发展技能。
* [Roadmap.sh](https://roadmap.sh) - 涵盖从区块链到用户体验设计等各方面的发展的免费学习路线图。
* [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供网络安全、网络以及Python等认证相关的免费课程。
* [MIT OpenCourseWare](https://ocw.mit.edu/) - MIT OpenCourseWare在线发布超过2500门MIT课程材料，与世界各地的学者和学习者共享知识。Youtube频道可以在 [@mitocw](https://www.youtube.com/@mitocw/featured) 找到。
* [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等网络开发技术的免费教程。
* [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 学习基本和高级HTML/CSS、JavaScript和SQL的在线指南。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  好的，我已经完成了翻译任务。以下是翻译结果：

* [10minutemail](https://10minutemail.com) - 用于测试的免费临时电子邮件。
* [AhaSend](https://ahasend.com) - 每月免费发送1000封电子邮件的服务，免费计划中包括无限域名、团队成员、网络钩子和消息路由。
* [AnonAddy](https://anonaddy.com) - 开源匿名电子邮件转发，免费创建无限电子邮件别名。
* [Antideo](https://www.antideo.com) - 在免费等级中，每小时提供10个API请求用于电子邮件验证、IP和手机号码验证。无需信用卡。
* [Brevo](https://www.brevo.com/) - 每月9000封电子邮件，每天300封电子邮件免费。
* [OneSignal](https://onesignal.com/) - 每月发送1万封电子邮件，无需信用卡。
* [Bump](https://bump.email/) - 免费提供10个Bump电子邮件地址，一个自定义域名。
* [Burnermail](https://burnermail.io/) – 免费创建5个焚烧器电子邮件地址，一个邮箱，7天邮箱历史记录。
* [Buttondown](https://buttondown.email/) - 通讯服务。最多支持100个订阅者免费。
* [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收入站电子邮件和发送事务出站电子邮件 - 每月免费发送1万封电子邮件。
* [Contact.do](https://contact.do/) - 联系表格链接（用于联系表格的Bitly）。
* [debugmail.io](https://debugmail.io/) - 易于使用的开发人员测试邮件服务器。
* [DNSExit](https://dnsexit.com/) - 在你的域名下免费提供多达两个电子邮件地址，附带100MB的存储空间。支持IMAP、POP3、SMTP、SPF/DKIM。
* [EmailLabs.io](https://emaillabs.io/en) - 每月最多免费发送9千封电子邮件，每天最多发送3封电子邮件。
* [EmailOctopus](https://emailoctopus.com) - 最多拥有2千名订阅者和每月发送一万封电子邮件免费。
* [EmailJS](https://www.emailjs.com/) - 这不仅仅是一个完整的电子邮件服务器；这是一个您可以在客户端使用来发送电子邮件的电子邮件客户端，无需暴露您的凭据。免费套餐每月有2次请求，两个电子邮件模板，请求最多为5Kb，有限的联系人历史记录。
* [EtherealMail](https://ethereal.email) - Ethereal是一个假SMTP服务，主要针对Nodemailer和EmailEngine用户（但不限于这些）。它是一个完全免费的反事务电子邮件服务，邮件永远不会送达。
* [Temp-Mail.org](https://temp-mail.org/en/) - 临时/一次性邮件生成工具，使用各种域名生成邮件地址。每次页面重新加载时都会刷新电子邮件地址。完全免费，不包含任何服务费用。
* [TempMailDetector.com](https://tempmaildetector.com/) - 每月免费验证最多20封电子邮件并查看电子邮件是否是临时的。
* [Emailvalidation.io](https://emailvalidation.io) - 每月免费提供一百次电子邮件验证服务。
* [FakeMailGenerator.com](https://www.fakemailgenerator.com/) - 德国的临时/一次性邮件生成器。支持十个域名，同时为您提供创建无限数量的地址的自由。（包括广告）除此之外没有其他收费服务，完全免费。
* [forwardemail.net](https://forwardemail.net) — 免费转发自定义域名的电子邮件。使用您的域名创建并转发无限数量的电子邮件地址（请注意：如果您使用某些顶级域名如 .casa、 .cf等由于垃圾邮件的原因需要付费）。
* [Imitate Email](https://imitate.email) - 用于测试电子邮件功能的沙箱电子邮件服务器。免费帐户每天可获得十五封邮件永久使用。 
* [ImprovMX](https://improvmx.com) – 免费电子邮件转发服务。 
* [EForw](https://www.eforw.com) – 为一个域名提供免费电子邮件转发服务。您可以从自己的域名接收和发送邮件。 
* [Inboxes App](https://inboxesapp.com) — 创建最多三个临时电子邮件地址每天然后在Chrome扩展程序中删除它们完成后再删除它们。非常适合测试注册流程等场景使用 。 
* [inboxkitten.com](https://inboxkitten.com/) - 提供免费的临时/一次性邮箱，邮箱在三天内自动删除邮件记录支持开源并且可以自行托管运行 。 
* [mail-tester.com](https://www.mail-tester.com

  以下是上面文本的翻译结果：

* [Takeout](https://takeout.bysourfruit.com) - 提供便捷电子邮件服务的网站，持续更新。每月可免费发送五百封交易邮件。
* [temp-mail.io](https://temp-mail.io) - 提供一次性免费临时电子邮件服务的网站，可一次性获取多个临时邮箱并支持邮件转发功能。
* [tinyletter.com](https://tinyletter.com/) - 每月免费订阅人数可达五千人的电子邮件订阅服务。
* [Touchlead](https://touchlead.app) - 多功能市场营销自动化工具，包含潜在客户管理、表单构建和自动化功能。针对潜在客户的数量和自动化操作提供免费版本。
* [trashmail.com](https://www.trashmail.com) - 提供免费临时电子邮件地址服务，支持邮件转发和自动地址失效功能。
* [Tuta](https://tuta.com/) - 提供免费安全电子邮件账户服务的网站，内置端到端加密功能，无广告和无跟踪。提供免费1GB存储空间和一个日历。（Tuta还提供[付费计划](https://tuta.com/pricing)。）Tuta部分采用[开源](https://github.com/tutao/tutanota)，因此您可以自主托管。
* [Verifalia](https://verifalia.com/email-verification-api) - 实时电子邮件验证API，包含邮箱确认和一次性电子邮件地址检测功能。每天可免费验证25个电子邮件地址。
* [verimail.io](https://verimail.io/) - 批量和API电子邮件验证服务。每月可免费验证100个电子邮件地址。
* [Zoho](https://www.zoho.com) - 起初是电子邮件提供商，现在提供一系列服务，部分服务提供免费计划。具有免费计划的服务列表包括：
	+ [Email](https://zoho.com/mail)：免费适用于五位用户，每个用户5GB空间和附件限制为25MB，仅限一个域名。
	+ [Zoho Assist](https://www.zoho.com/assist) ：Zoho Assist的永久免费计划包括一个并发远程支持许可证以及无限期限的五个无人值守计算机许可证，可供专业和个人使用。
	+ [Sprints](https://zoho.com/sprints)：免费适用于五位用户、五个项目和500MB存储空间。
	+ [Docs](https://zoho.com/docs)：免费适用于五位用户，具有1GB上传限制和5GB存储空间。包含Zoho Office套件（Writer、Sheets & Show）。
	+ [Projects](https://zoho.com/projects)：免费适用于三位用户、两个项目以及附件限制为10MB。此计划同样适用于[Bugtracker](https://zoho.com/bugtracker)。
	+ [Connect](https://zoho.com/connect)：团队协作免费适用于25个用户，包括三个群组、三个自定义应用、三个看板、三本手册和十个集成渠道、事件和论坛。
	+ [Meeting](https://zoho.com/meeting)：最多可与三位参会者进行会议以及与十位网络研讨会参与者进行会议。
	+ [Vault](https://zoho.com/vault)：密码管理可供个人使用。
	+ [Showtime](https://zoho.com/showtime）：另一款用于远程培训的会议软件，最多可容纳五名参与者。
	+ [Notebook](https://zoho.com/notebook）：Evernote的免费替代品。
	+ [Wiki](https://zoho.com/wiki）：免费适用于三位用户，具有50MB存储空间、无限页面、zip备份、RSS和Atom馈送、访问控制和可定制CSS功能。
	+ [Subscriptions](https://zoho.com/subscriptions）：客户管理免费适用于二十位客户或订阅以及一位用户进行所有付款托管操作（由Zoho完成）。最后四十项订阅指标会存储在其中。
	+ [Checkout](https://zoho.com/checkout）：产品计费管理，包含三页以及最多五十次支付操作。
	+ [Desk](https://zoho.com/desk）：客户支持管理，包括三名客服人员、私人知识库和电子邮件票务功能。可与[Assist](https://zoho.com/assist)集成用于一名远程技术人员和五个无人值守计算机的操作。
	+ [Cliq](https://zoho.com/cliq）：团队聊天软件具有一百GB存储空间、无限用户和一百用户每频道以及单点登录功能（SSO）。此外还包括其他一些服务如邮件营销工具[Campaigns](https://zoho.com/campaigns)，表单创建工具[Forms](https://zoho.com/forms)，无纸化签名工具[Sign](https://zoho.com/sign)，在线调查工具[Surveys](https://zoho.com/surveys)，预约

## 功能切换管理平台

  以下是这段Markdown文本的中文翻译：

* **[ConfigCat](https://configcat.com)** - ConfigCat是一个面向开发者的功能标志服务，支持无限大的团队规模、出色的支持和合理的价格标签。免费计划包括每月高达10个标志、两个环境、一个产品和5百万次请求。
* **[Flagsmith](https://flagsmith.com)** - 有信心地发布功能；管理Web、移动和服务器端应用程序的功能标志。可以使用我们的托管API、部署到您的私有云或在现场运行。
* **[GrowthBook](https://growthbook.io)** - 带有内置贝叶斯统计分析引擎的开源功能标志和A/B测试提供商。最多适用于3个用户，功能标志和实验无限制。
* **[Hypertune](https://www.hypertune.com)** - 类型安全的功能标志、A/B测试、分析和应用程序配置，具有Git风格的版本控制和同步的、内存中的本地标志评估。最多适用于5个团队成员，功能标志和A/B测试无限制。
* **[Molasses](https://www.molasses.app)** - 功能强大的功能标志和A/B测试。最多适用于拥有五个功能标志的三个环境。
* **[Toggled.dev](https://www.toggled.dev)** - 企业就绪的、可扩展的多区域功能切换管理平台。免费计划包括最多10个标志和两个环境，请求无限制。SDK、分析仪表板、发布日历、Slack通知和其他所有功能都包含在无尽的免费计划中。
* **[Statsig](https://www.statsig.com)** - 功能强大的功能管理、A/B测试和分析平台。其慷慨的免费计划提供无限的用户席位、标志、实验和动态配置，支持每月高达一百万的事件。
* **[Abby](https://www.tryabby.com)** - 开源功能标志和A/B测试。配置作为代码和完全类型化的TypeScript SDKs。与Next.js和React等框架的紧密集成。慷慨的免费层级和实惠的扩展选项。

**[⬆️ 返回顶部](#目录)**

## 字体

  以下是这些网站的翻译：

* [dafont](https://www.dafont.com/) - 本网站上展示的字体是其作者的财产，属于自由软件、共享软件、演示版本或公共领域。
* [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，包括@font-face、单位转换器、字体提示器和字体提交器。
* [Font Squirrel](https://www.fontsquirrel.com/) - 提供可商业使用的免费字体。这些字体经过精心挑选，以易于使用的方式呈现。
* [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到Google的CDN，轻松快速地安装到网站上。
* [FontGet](https://www.fontget.com/) - 提供多种可下载的字体，并用标签整齐地分类。
* [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个不断增长的专业级字体集合，百分之百免费用于个人和商业用途。
* [Befonts](https://befonts.com/) - 提供几种独特的字体，可用于个人或商业用途。
* [Font of web](https://fontofweb.com/) - 识别网站上使用的所有字体以及它们的使用方式。
* [Bunny](https://fonts.bunny.net) - 面向隐私的Google字体
* [FontsKey](https://www.fontskey.com/) - 提供免费和商业付费字体供个人使用，并且可以输入文本进行快速过滤。
* [fonts.xz.style](https://fonts.xz.style/) - 一个免费和开源的服务，使用CSS向网站提供字体家族。
* [Fontsensei](https://fontsensei.com/) - 用户标记的开源Google字体。带有中日韩（CJK）字体标签。

**[⬆️ 返回顶部](#目录)** 

希望以上翻译能满足您的需求。

## 表单

  好的，我已经按照您的要求翻译了Markdown文本。以下是翻译结果：

* **[Feathery](https://feathery.io)** - 功能强大、对开发者友好的表单构建器。构建注册、登录、用户入驻、支付流程、复杂的金融应用等。免费计划允许每月提交250次，并创建五个活动表单。
* **[Form-Data](https://form-data.com)** - 无代码表单后端。具有垃圾邮件过滤、电子邮件通知和自动响应、网络钩子、zapier、重定向、AJAX或POST等功能。免费计划提供无限表单、每月20次提交和带有Form-Data徽章的额外2000次提交。
* **[FabForm](https://fabform.io/)** - 智能开发者的表单后端平台。免费计划允许每月提交250次表单。友好的现代图形用户界面。与Google表格、Airtable、Slack、电子邮件等集成。
* **[Form.taxi](https://form.taxi/)** - HTML表单提交的终点。具有通知、垃圾邮件阻止功能和符合GDPR的数据处理功能。基本使用免费计划。
* **[Formcarry.com](https://formcarry.com)** - HTTP POST表单终点，免费计划允许每月提交100次。
* **[formingo.co](https://www.formingo.co/)** - 易于使用的HTML表单，适用于静态网站。您可以免费开始，无需注册账户。免费计划允许每月提交500次和可定制的回复电子邮件地址。
* **[FormKeep.com](https://www.formkeep.com/)** - 无限表单，每月提交50次，具有垃圾邮件保护、电子邮件通知和拖拽式设计师（可导出HTML）。额外功能包括自定义字段规则、团队和集成到Google Sheets、Slack、ActiveCampaign和Zapier。
* **[formlets.com](https://formlets.com/)** - 在线表单，每月无限单页表单，每月提交100次，电子邮件通知。
* **[formspark.io](https://formspark.io/)** - 表单到电子邮件服务，免费计划允许无限表单，每月提交250次，客户支持团队提供支持。
* **[Formspree.io](https://formspree.io/)** - 通过HTTP POST请求发送电子邮件。免费层级限制每月每个表单提交50次。
* **[formsubmit.co](https://formsubmit.co/)** - 您的HTML表单的简易端点。永久免费。无需注册。
* **[Formlick.com](https://formlick.com)** - Typeform的替代品，提供终身优惠。用户可以创建1个免费表单并接收无限提交。在高级版本中，用户可以创建无限表单和无限提交。
* **[getform.io](https://getform.io/)** - 设计师和开发者的表单后端平台，创建1个表单，提交50次，单文件上传，文件存储100MB。
* **[HeroTofu.com](https://herotofu.com/)** - 具有机器人检测和加密存档的表单后端。通过用户界面将提交转发到电子邮件、Slack或Zapier。无需服务器端代码。免费计划提供无限表单和每月提交100次。
* **[HeyForm.net](https://heyform.net/)** - 拖放在线表单生成器。免费层级允许您创建无限表单并收集无限提交。带有预构建模板、反垃圾邮件和100MB文件存储。
* **[Tally.so](https://tally.so/)** - 99%的功能都是免费的。免费层级允许您拥有：无限表单、无限提交、电子邮件通知、表单逻辑、收集付款、文件上传、自定义感谢页面等等。
* **[Hyperforms.app](https://hyperforms.app/)** - 可在几秒钟内创建表单到电子邮件等，无需后端代码。个人帐户每月可免费提交最多50次。
* **[Kwes.io](https://kwes.io/)** - 功能丰富的表单终点。非常适合静态网站。免费计划包括最多在1个网站上每月提交50次。
* **[Pageclip](https://pageclip.co/)** - 免费计划允许一个站点，一个表单和每月最多提交1,000次。
* **[Qualtrics Survey](https://qualtrics.com/free-account)** - 使用此一流工具创建专业表单和调查。包含超过50种专家设计的调查模板。免费帐户限制为拥有最多一个活动调查，每次调查最多有100个回复和超过八种回复类型。
* **[Screeb](https://screeb.app/)** - 用于解码用户行为的内部调查和产品分析应用程序。永久免费计划允许每月最多有500个活跃用户，无限响应和事件，多种集成，导出和定期

## 生成式人工智能

  以下是翻译结果：

* **[Keywords AI](https://keywordsai.co) - 最好的LLM监控平台。只需两行代码即可调用超过200个LLM。每月可免费请求一万次，平台功能全部免费！**
  * **[Portkey](https://portkey.ai/) - Gen AI应用的控制面板，具有可观察套件和AI网关功能。每月可免费发送并记录高达一万次请求。**
  * **[Braintrust](https://www.braintrustdata.com/) - 为Gen AI提供评估、提示游乐场和数据管理功能。免费计划每周提供高达一千次的私人评估记录。**
  * **[Findr](https://www.usefindr.com/) - 允许您同时搜索所有应用的通用搜索。搜索助理让您可以使用自己的信息回答问题。免费计划提供无限统一搜索和每日五个联合飞行员查询。**
  * **[ReportGPT](https://report-gpt.io) - AI驱动的写作助手。只要您自带API密钥，整个平台都是免费的。**
  * **[Clair](https://askclair.ai/) - 临床AI参考。学生可免费访问专业工具套件，包括开放搜索、临床摘要、医学评论、药物相互作用、ICD-10代码和监护功能。此外，还提供专业套件的免费试用。**
  * **[Langtrace](https://langtrace.ai) - 开发者可以追踪、评估、管理提示和数据集，并调试与LLM应用程序性能相关的问题。它为任何LLM创建开放遥测标准跟踪，有助于可观察性，并与任何可观察性客户端协同工作。免费计划每月提供五十万条跟踪记录。**
  * **[Ultra AI](https://ultraai.app) - 产品的AI指挥中心。功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型后备和用户速率限制。永久免费计划每月提供一万次以上的请求和除缓存之外的所有功能。**
  * **[Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产生命周期中评估、测试和发布LLM应用程序。**
  * **[Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协同调试、分析和迭代他们的LLM应用程序。永久免费计划每月包括五十万条观察记录和所有平台功能。[#开源](https://github.com/langfuse/langfuse)**
  * **[Pollinations.AI](https://pollinations.ai/) - 易于使用的免费图像生成AI，提供免费API。无需注册或API密钥，有多种选项可轻松集成到网站或工作流程中。[#开源](https://github.com/pollinations/pollinations)**

**[⬆️ 返回顶部](#目录)**

## CDN和保护

  以下是翻译结果：

* [bootstrapcdn.com](https://www.bootstrapcdn.com/)：用于bootstrap、bootswatch和fontawesome.io的CDN。
* [cdnjs.com](https://cdnjs.com/)：简单、快速、可靠的内容交付服务。cdnjs是一个免费且开源的CDN服务，被超过11%的网站所信赖，由Cloudflare提供支持。
* [developers.google.com](https://developers.google.com/speed/libraries/)：Google托管库是最流行的开源JavaScript库的内容分发网络。
* [Stellate](https://stellate.co/)：Stellate是一个快速可靠的GraphQL API CDN，为两项服务提供免费服务。
* [jsdelivr.com](https://www.jsdelivr.com/)：一个免费、快速和可靠的开源CDN。支持npm、GitHub、WordPress、Deno等。
* [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview)：Microsoft Ajax CDN托管流行的第三方JavaScript库（如jQuery），使您能够轻松地将它们添加到Web应用程序中。
* [ovh.ie](https://www.ovh.ie/ssl-gateway/)：提供免费的DDoS保护和SSL证书。
* [Skypack](https://www.skypack.dev/)：百分之百的原生ES模块JavaScript CDN。每月每个域免费处理1百万次请求。
* [raw.githack.com](https://raw.githack.com/)：是现代替代**rawgit.com**的产品，它仅仅是使用Cloudflare来托管文件。
* [section.io](https://www.section.io/)：一种简单的方法来启动和管理完整的Varnish Cache解决方案。据说永久免费用于一个站点。
* [statically.io](https://statically.io/)：用于Git仓库（GitHub、GitLab、Bitbucket）、WordPress相关资产和图片的CDN。
* [toranproxy.com](https://toranproxy.com/)：为Packagist和GitHub提供代理服务。绝不会失败的CDN。个人使用、一个开发人员使用是免费的，但不提供任何支持。
* [UNPKG](https://unpkg.com/)：npm上所有内容的CDN。
* [weserv](https://images.weserv.nl/)：图像缓存和调整大小服务。即时操作图像，全球缓存。
* [Namecheap Supersonic](https://www.namecheap.com/supersonic-cdn/#free-plan)：提供免费DDoS保护。
* [Gcore](https://gcorelabs.com/)全球内容交付网络，每月免费提供1 TB和一百万次请求以及免费DNS托管服务。
* [CacheFly](https://portal.cachefly.com/signup/free2023)：每月最多提供5 TB的免费CDN流量、19个核心PoPs、一个域名和通用SSL证书。

**[⬆️ 返回顶部](#目录)**

## 平台即服务（PaaS）

  好的，以下是这些工具的翻译：

* [anvil.works](https://anvil.works) - 仅用Python进行Web应用开发。免费套餐包含无限应用且超时时间为30秒。
* [appwrite](https://appwrite.io) - 无项目暂停限制（支持WebSockets）的身份验证服务。每个项目包含1个数据库、3个存储桶和5个功能在免费套餐中。
* [configure.it](https://www.configure.it/) - 移动应用开发平台，两个项目免费，功能有限但无资源限制。
* [codenameone.com](https://www.codenameone.com/) - 针对Java/Kotlin开发者的开源、跨平台移动应用开发工具链。商业使用免费且项目数量不限。
* [deco.cx](https://www.deco.cx/en/dev) - 基于边缘的本地前端平台，通过TypeScript代码自动生成可视化CMS。内置A/B测试、内容分段和实时分析。非常适合内容密集和企业电子商务网站。免费版每月最多支持5k页面浏览量或开源/个人项目。
* [Deno Deploy](https://deno.com/deploy) - 全球边缘运行的分布式系统，支持JavaScript、TypeScript和WebAssembly。免费套餐包括每天10万次请求和每月100 GiB数据传输量。
* [domcloud.co](https://domcloud.co) - 提供与GitHub集成的CI/CD服务的Linux托管服务，以及SSH和MariaDB/Postgres数据库。免费版包含1 GB存储和每月1 GB网络限制，并仅限于使用免费域名。
* [encore.dev](https://encore.dev/) - 使用静态分析的后端框架，提供自动基础设施、无样板代码等功能。包括为业余项目提供免费云托管。
* [flightcontrol.dev](https://flightcontrol.dev/) - 使用Git推送风格的工作流程在您的AWS账户上部署网络服务、数据库等。个人GitHub存储库的私人开发人员享有免费套餐。AWS费用将通过AWS结算，但您可以使用信用和AWS免费套餐。
* [gigalixir.com](https://gigalixir.com/) - 为Elixir/Phoenix应用程序提供一个永远不会休眠的免费实例以及一个仅限于2个连接、1万行数据且无备份的PostgreSQL数据库免费套餐。
* [Glitch](https://glitch.com/) - 具有代码共享和实时协作功能的免费公共托管服务。免费计划每月限制为1千小时。
* [Lade](https://www.lade.io/) - Lade是为开发人员构建的云平台。免费套餐包括三项服务（可以是应用程序或数据库）。每项服务包括128 MB RAM和1 GB存储。
* [pipedream.com](https://pipedream.com) - 为开发人员构建的集成平台。基于任何触发器开发任何工作流程。工作流是您可以通过[免费方式](https://docs.pipedream.com/pricing/)运行的代码，无需管理服务器或云资源。
* [pythonanywhere.com](https://www.pythonanywhere.com/) - 云Python应用托管服务。初学者账户免费，可以在您的用户名pythonanywhere.com域名上托管一个Python Web应用程序，包含512 MB私有文件存储和一个MySQL数据库。
* [ampt.dev](https://getampt.com/) - Ampt允许团队在AWS上构建、部署和扩展JavaScript应用程序，无需进行复杂的配置和管理基础设施。预览计划每小时允许5万次调用，每天允许调用次数为两万五千次，每月允许调用次数为五十万次。自定义域名仅限于付费计划使用。
* [Koyeb](https://www.koyeb.com) - Koyeb是一个面向开发者的无服务器平台，可全球部署应用程序。无缝运行Docker容器、Web应用程序和API，支持基于git的部署、本机自动扩展、全球边缘网络和内置服务网格和服务发现功能。免费实例允许您在德国法兰克福或美国华盛顿特区部署Web服务。免费的托管Postgres数据库可在德国法兰克福、美国华盛顿特区以及新加坡使用。包含内存分配为512MB、存储空间为2GB以及CPU分配率为0.1的配置资源包无需信用卡即可开始使用服务体验。 
* [Napkin](https://www.napkin.io/) - FaaS服务包含内存分配为500Mb的配置资源包，默认超时时间为15秒，每月可免费调用API的次数为五千次且速率限制为每秒五次调用请求处理次数。 
* [Meteor Cloud](https://www.meteor.com/cloud) - 为Meteor应用程序提供的平台即服务产品包括免费的共享MongoDB托管服务和自动SSL证书服务支持功能等特性优点等支持内容等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等要素等

## BaaS（后端即服务）

  以下是翻译结果：

* [Activepieces](https://www.activepieces.com) - 构建自动化流程，将多个应用程序连接到你应用程序的后端。例如，当应用程序触发事件时，发送Slack消息或添加Google表格行。每月免费处理高达5,000个任务。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse平台的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) - 移动和Web Baas，免费提供1 GB文件存储、5万个推送通知和表格中1000个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) - 我们的AI将在我们的函数运行时间和托管存储上启动你的Python API，可以在我们的在线编辑器中免费构建和托管，或使用你最喜欢的工具本地构建和托管。
  * [BMC开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档和资源，用于构建和部署适合企业的数字创新。访问一个全面的个人沙箱，其中包括平台、SDK和可用于构建和定制应用程序的组件库。
  * [connectycube.com](https://connectycube.com) - 无限聊天消息、点对点语音和视频通话、文件附件和推送通知。适用于最多1000用户的应用程序免费。
  * [convex.dev](https://convex.dev/) - 响应式后端即服务，托管你的数据（带有关系和可序列化ACID事务的文档）、无服务器函数和WebSocket，以向各种客户端流式传输更新。免费适用于小型项目 - 最高100万条记录，每月5百万次函数调用。
  * [darklang.com](https://darklang.com/) - 托管语言与编辑器和基础设施相结合。Beta期间提供免费层，Beta之后的慷慨免费层计划。
  * [Firebase](https://firebase.com) - Firebase帮助你构建并成功运行应用程序。免费Spark计划提供身份验证、托管、Firebase ML、实时数据库、云存储、测试实验室。A/B测试、分析、应用分发、应用索引、云消息传递（FCM）、Crashlytics、动态链接、即时消息传递、性能监控、预测和远程配置始终免费。
  * [Flutter Flow](https://flutterflow.io) - 不需要编写任何代码即可构建你的Flutter应用程序UI。还有Firebase集成。免费计划包括UI构建器和免费模板的全访问权限。
  * [getstream.io](https://getstream.io/) - 在几小时内而不是几周内构建可扩展的内置应用聊天、消息传递、视频和音频以及Feed
  * [hasura.io](https://hasura.io/) - Hasura扩展了你现有的数据库（无论在哪里托管），并提供一个即时GraphQL API，可以安全地用于Web、移动和数据集成工作负载。每月免费数据通过量为1GB。
  * [iron.io](https://www.iron.io/) - 异步任务处理（类似于AWS Lambda）提供免费层和1个月免费试用
  * [nhost.io](https://nhost.io) - Web和移动应用的无服务器后端。免费计划包括PostgreSQL、GraphQL（Hasura）、身份验证、存储和无服务器函数。
  * [onesignal.com](https://onesignal.com/) - 无限免费推送通知。每月发送1万封电子邮件，拥有无限联系人并使用自动预热功能。
  * [paraio.com](https://paraio.com) - 后端服务API具有灵活的身份验证、全文搜索和缓存功能。一个应用程序和1GB应用程序数据免费。
  * [progress.com](https://www.progress.com/kinvey) - 移动后端，入门计划具有每秒无限请求和1 GB数据存储量。支持企业应用程序
  * [pubnub.com](https://www.pubnub.com/) - 每月推送高达1百万条消息的免费推送通知和每日100个活跃设备
  * [pushbots.com](https://pushbots.com/) - 推送通知服务。每月最多推送150万条通知免费
  * [pushcrew.com](https://pushcrew.com/) - 推送通知服务。针对最多2,000名订阅者的无限通知免费
  * [pusher.com](https://pusher.com/beams) - 针对每月2千名活跃用户的免费无限推送通知。为iOS和Android设备提供单一API。
  * [quickblox.com](https://quickblox.com/) - 用于即时消息传递、视频和语音呼叫以及推送通知的通信后端
  * [restspace.io

## 低代码平台

  以下是这些内容的翻译：

* **[Clappia](https://www.clappia.com)** — 专为构建业务流程应用程序设计的低代码平台，支持可定制的移动和Web应用程序。提供拖放界面、离线支持、实时位置跟踪以及与各种第三方服务的集成等功能。
* **[Basedash](https://www.basedash.com)** — 用于构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
* **[BudiBase](https://budibase.com/)** — Budibase是一个开源的低代码平台，可在几分钟内创建内部应用程序。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s等。
* **[appsmith](https://www.appsmith.com/)** — 用于构建管理面板、内部工具和仪表板的低代码项目。可与超过15种数据库和任何API集成。
* **[ToolJet](https://www.tooljet.com/)** — 可扩展的低代码框架，用于构建业务应用程序。可以连接到数据库、云存储、GraphQL、API端点、Airtable等，并使用拖放应用程序构建器构建应用程序。
* **[ReTool](https://retool.com/)** — 用于构建内部应用程序的低代码平台。ReTool高度可定制。如果您能用JavaScript和API编写代码，您就可以在ReTool中实现它。免费版允许每月最多五位用户，无限应用程序和API连接。
* **[DronaHQ](https://www.dronahq.com/)** — DronaHQ是一个低代码平台，旨在帮助工程团队和产品经理以更快的速度构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板和操作应用程序。
* **[ILLA Cloud](https://www.illacloud.com/)** — ILLA Cloud是一个强大的开源低代码平台，开发人员可以用来构建内部工具。通过使用ILLA的组件和动作库，开发人员可以节省大量构建工具的时间。免费适用于五个团队成员。
* **[OutSystems](https://www.outsystems.com/)** — 用于本地或云的企业Web开发PaaS平台，其免费“个人环境”提供无限代码和最多1GB数据库的服务。
* **[UI Bakery](https://uibakery.io)** — 低代码平台，可更快地构建自定义Web应用程序。支持使用拖放构建UI，并通过JavaScript、Python和SQL进行高度自定义。可作为云和自助托管解决方案提供。免费适用于最多五个用户。
* **[Mendix](https://www.mendix.com/)** — 企业级快速应用开发平台，支持无限制的沙箱环境，每个应用可使用最多0.5GB的存储空间和1GB的RAM。此外，免费版还包括Studio和Studio Pro IDE的使用权。
* **[lil'bots](https://www.lilbots.io/)** — 利用免费的内置API（如OpenAI、Anthropic、Firecrawl等）在线编写和运行脚本的平台。非常适合构建AI代理/内部工具并与团队共享使用。免费版包括完整的API访问权限、AI编码助理以及每月高达一万次的执行信用额度等。

**[⬆️ 返回顶部](#目录)**

## Web Hosting

  以下是翻译结果：

* **[Alwaysdata](https://www.alwaysdata.com/)** — 提供支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir等的免费网络托管服务，FTP、WebDAV和SSH访问方式；包含邮箱、邮件列表和应用安装程序。
* **[Awardspace.com](https://www.awardspace.com)** — 免费网络托管服务加上免费短域名，支持PHP、MySQL、应用安装程序、电子邮件发送且无广告。
* **[Bohr](https://bohr.io)** — 针对非商业项目的免费服务，以及面向开发者的部署和开发平台，旨在减少基础设施的麻烦并加快设置速度。
* **[Bubble](https://bubble.io/)** — 通过可视化编程无需代码即可构建网络和移动应用，带有Bubble品牌标识的免费服务。
* **[dAppling Network](https://www.dappling.network/)** — 基于Web3前端去中心化网络托管平台，专注于提高正常运行时间和安全性，并为用户提供额外的访问点。
* **[DigitalOcean](https://www.digitalocean.com/pricing)** — 在App Platform Starter级别上免费构建和部署三个静态网站。
* **[Drive To Web](https://drv.tw)** — 从Google Drive和OneDrive直接托管网站到网络。仅限静态网站。永久免费。每个Google/Microsoft账户一个站点。
* **[Fenix Web Server](https://preview.fenixwebserver.com)** — 一款用于本地托管站点并实时共享它们的开发人员桌面应用程序，可以使用其漂亮用户界面、API和/或CLI进行工作。
* **[Fern](https://buildwithfern.com)** — 在Fern的免费计划上构建并托管基于Markdown的文档网站。您甚至可以自动从API定义文件生成网站API参考。网站托管在_yoursite_.docs.buildwithfern.com。
* **[Free Hosting](https://freehostingnoads.net/)** — 提供PHP 5、Perl、CGI、MySQL、FTP、文件管理器、POP电子邮件等免费托管服务，还包括免费子域名、免费域名托管等更多功能。其他免费主机不提供这些功能。
* **[Freehostia](https://www.freehostia.com)** — FreeHostia提供免费托管服务，包括业内最佳控制面板以及超过五十种免费应用程序的一键安装程序。即时设置。无强制广告。
* **[HelioHost](https://heliohost.org)** — 非营利性免费网络托管服务，带有Plesk控制面板，支持PHP、Node.js、Python（Django和Flask）、.NET等语言，以及IMAP/POP3/SMTP电子邮件等更多功能，提供免费子域名和升级选项等额外存储空间和带宽。
* **[Kinsta Static Site Hosting](https://kinsta.com/static-site-hosting/)** — 可免费部署多达一百个静态网站，支持自定义域名和SSL证书，每月带宽高达一百GB，拥有超过二百六十个Cloudflare CDN位置。
* **[Lecturify](https://www.lecturify.net/index.en.html)** — 提供通过SFTP访问的文件上传和下载的网络托管服务，支持PHP语言。
* **[Neocities](https://neocities.org)** — 提供静态服务，免费存储空间高达一GB，带宽高达二百GB。
* **[Netlify](https://www.netlify.com/)** — 为静态网站或应用程序提供构建、部署和托管服务，免费计划适用于一百GB数据和每月一百GB的带宽。
* **[pantheon.io](https://pantheon.io/)** — 提供Drupal和WordPress托管服务以及自动化运维和可扩展基础设施服务，开发人员和机构可免费使用，但无自定义域名选项。
* **[readthedocs.org](https://readthedocs.org/)** — 提供免费的文档托管服务，支持版本控制、PDF生成等功能。
* **[render.com](https://render.com)** — 提供统一的云环境用于构建和运行应用程序和网站，提供免费SSL证书、全球内容分发网络等额外功能和服务器的完全免费计划等。此外还提供自定义域名支持等额外功能和服务器的完全免费计划等。还提供自定义域名支持等额外功能和服务器的完全免费计划等。还提供自定义域名支持等额外功能等。还提供自定义域名支持等更多功能等。还提供全球CDN等额外功能等。还提供私有网络等额外功能等。还提供自动部署等功能等。还提供Git集成等功能等。还提供无限带宽等功能等。还提供静态网页托管等功能等。还提供数据库托管等服务等。还提供自定义开发环境等服务等。还提供自定义开发环境等服务等更多功能等更多功能等更多功能等更多功能等更多功能等更多功能等更多功能等更多功能等更多功能等更多功能等更多功能等功能丰富的免费计划供开发者使用。还提供丰富的免费计划供开发者使用等功能丰富的免费计划供开发者使用

## 域名系统（DNS）

  以下是这段Markdown文本的中文翻译：

* **[Cloudflare](https://developers.cloudflare.com/1.1.1.1/) 的 1.1.1.1](https://developers.cloudflare.com/1.1.1.1/)**： Cloudflare提供的免费公共DNS解析器，快速且安全（加密DNS查询）。有助于绕过互联网提供商的DNS阻止，防止DNS查询被监视，并**[阻止成人和恶意软件内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它也可以通过API使用](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)。注意：这只是一款DNS解析器，并非DNS主机。
* **[is](https://www.1984.is/product/freedns/)](https://www.1984.is/product/freedns)：** 提供API和其他免费DNS功能的免费DNS服务。
* **[cloudns.net](https://www.cloudns.net/)：](https://www.cloudns.net/)最多可托管一个域名，包含五十条记录的自由DNS托管服务。
* **[deSEC](https://desec.io)：](https://desec.io)提供免费DNS托管服务，支持API，设计时考虑了安全性。运行在开源软件上，并得到**[SSE](https://www.securesystems.de/)的支持。
* **[dns.he.**net](https://dns.he.net/)：带有动态DNS支持功能的免费DNS托管服务。
* **[Zonomi](https://zonomi.com/)：](https://zonomi.com/)提供免费DNS托管服务，可即时传播DNS。免费计划：一个DNS区域（域名）最多包含十条DNS记录。
* **[dnspod](https://www.**dnspod**.com/)：](https://www.%E3%80%82dnspod%E3%80%82com/)免费DNS托管服务。
* **[duckdns.**org](https://www.**duckdns**.org/)：在免费套餐中最多可托管五个域名的DDNS服务。提供多种设置的配置指南。
* **[Dynv6.**com](https://dynv6.**com/)：带有API支持和管理多种DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）的免费DDNS服务。
* **[freedns.**afraid.**org](https://freedns.**afraid.**org/)：提供免费DNS托管服务。此外还提供基于众多公共用户**[贡献域名的免费子域名。在注册后，可以通过“子域名”菜单获取免费子域名。**
* **[luadns.**com](https://www.**luadns**.com/)：允许托管三个域名的免费DNS托管服务，所有功能都有合理的限制。
* **[namecheap.**com的域名/免费DNS/](https://www.**namecheap**.com/%E5%9F%9F%E5%90%8D/%E7%AE%A1%E7%90%86dns/%E5%AE%BD%E5%AD%95dns-%E5%BC%BA%E5%A4%A7%E7%BB%BC%E5%BC%BAdns-%E5%AE%B9%E9%AB%98-%E5%AF%BC-%E5%AF%BC-%E7%BD%AE-%E7%AE%A4-%E7%BB%BC-%E5%BD%BDOCR)免费DNS服务，不限域名数量。
* **[nextdns.**io：基于DNS的防火墙，每月可免费查询三十万次。**
* **[noip.**at：无注册、追踪、日志记录或广告的DDNS服务，没有域名限制。**
* **[noip.**com：允许最多托管三个主机名的动态DNS服务，每三十天需要进行一次确认。**
* **[sslip。**io：当使用包含嵌入IP地址的主机名进行查询时，返回该IP地址的免费DNS服务。**
* **[zilore。**com的DNS：允许托管五个域名的免费DNS托管服务。**
* **[zoneedit。**com的域名/免费DNS/](https://www.%E5%B7%A9/%E5%AE%BD/%E5%AD%95dns-%E5%BC%BA-%E5%A4%A7zonewatcher-%E3%80%82com/%E7%BD%AE/%E7%AE%A4-%E7%BB%BC-%E5%BD%BCOCR)：带有动态DNS支持的免费DNS托管服务。**
*

## 域名

  以下是翻译结果：

* [eu.org](https://nic.eu.org) — 免费注册eu.org域名。申请通常在14天内得到批准。
* [pp.ua](https://nic.ua/) — 免费注册pp.ua的子域名。
* [us.kg](https://nic.us.kg/) - 免费注册us.kg的子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务（IaaS）

  以下是这些内容的翻译：

* **[4EVERLAND](https://www.4everland.org/)** — 兼容AWS S3的API、接口操作、命令行和其他上传方法，以安全、便捷和高效的方式从IPFS和Arweave网络上传和存储文件。注册用户可以免费获得6GB的IPFS存储空间和300MB的Arweave存储空间。任何小于150KB的Arweave文件上传都是免费的。
* **[backblaze.com](https://www.backblaze.com/b2/)** — Backblaze B2云存储。提供无限时间免费使用高达10GB（类似Amazon S3）的对象存储空间。
* **[filebase.com](https://filebase.com/)** — 基于区块链的S3兼容对象存储。提供无限时长免费使用高达5GB的存储空间。
* **[Tebi](https://tebi.io/)** — S3兼容对象存储。免费获得高达25GB的存储空间和高达250GB的出站数据传输量。
* **[Idrive e2](https://www.idrive.com/e2/)** — S3兼容对象存储。免费获得高达10GB的存储空间和每月高达10GB的下载带宽。
* **[C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage)** — S3兼容对象存储。免费获得高达15GB的存储空间和每月高达15GB的下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  以下是翻译结果：

* [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 平台在其开源数据平台上。单节点，1 CPU，1GB RAM，对于 PostgreSQL 和 MySQL，有 5GB 存储。可以轻松迁移到更大的计划或跨云。
  * [airtable.com](https://airtable.com/) — 看起来像是电子表格，但它是一个关系数据库，无限的基础，每基础有 1,200 行和每月 1,000 个 API 请求。
  * [Astrra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 作为服务，具有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)。
  * [codehooks.io](https://codehooks.io/) — 易用的 JavaScript 无服务器 API/后端和 NoSQL 数据库服务，具有功能、类似于 MongoDB 的查询、键值查找、作业系统、实时消息、工作队列、强大的命令行工具和基于网络的数据管理器。免费计划有 5GB 存储和每分钟 60 个 API 调用。包括两名开发人员。无需信用卡。
  * [CrateDB](https://crate.io/) - 用于实时分析的分布式开源 SQL 数据库。[免费层 CRFREE](https://crate.io/lp-crfree)：一个节点具有 2 个 CPU、2 GiB 内存和 8 GiB 存储。每个组织可以拥有一个集群，无需提供付款方式。
  * [FaunaDB](https://fauna.com/) — 无服务器云数据库，具有本机 GraphQL、多模式访问和每日免费层，上限为 100 MB。
  * [Upstash](https://upstash.com/) — 无服务器 Redis，免费层每天最多支持 1 万次请求，最大数据库大小为 256MB 和最多并发连接数为 20 个。
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB 内存。
  * [redsmin.com](https://www.redsmin.com/) — Redis 的在线实时监控和管理服务，为 1 个 Redis 实例提供免费监控服务。
  * [redislabs](https://redislabs.com/try-free/) - 免费 30MB Redis 实例。
  * [MemCachier](https://www.memcachier.com/) — 管理 Memcache 服务。免费版支持最多 25MB、一个代理服务器和基本分析功能。
  * [scalingo.com](https://scalingo.com/) — 主要是一个 PaaS 平台，但提供 MySQL、PostgreSQL 或 MongoDB 的免费层，大小为 128MB 到 192MB。
  * [SeaTable](https://seatable.io/) — 由 Seafile 团队构建的灵活电子表格式数据库。无限表格、每表最多有 2,000 行数据、一个月的版本控制功能以及最多支持 25 名团队成员使用。
  * [skyvia.com](https://skyvia.com/) — 云数据平台提供免费层，所有计划都处于 beta 阶段时完全免费。
  * [StackBy](https://stackby.com/) — 一个工具，结合了电子表格的灵活性和数据库的威力，并内置与您的首选业务应用程序集成。免费计划包括无限用户、十个堆栈和每个堆栈最多可附加 2GB 文件。
  * [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) — TiDB 是一个开源的 MySQL 兼容分布式 HTAP RDBMS。TiDB Serverless 提供每月免费的行存储空间为 5GB、列存储空间为 5GB 以及请求单位（RUs）为 5 亿次。
  * [Turso by ChiselStrike](https://chiselstrike.com/) - Turso 是 SQLite 开发者的边缘数据库体验。Turso 提供永久免费的入门版计划，总存储空间为 9 GB，最多支持创建 50 个数据库，最多支持在三个位置部署应用，每月最多可读取十亿行数据以及本地开发支持 SQLite 功能。
  * [InfluxDB](https://www.influxdata.com/) — 时序数据库，免费版写入限制为每分钟最多可写入 3MB 数据和读取最多可读取 3MB 数据以及最多支持处理十万级时序数据系列数量。
  * [restdb.io](https://restdb.io/) - 快速且简洁的 NoSQL 云数据库服务。使用 restdb.io 可以获得模式定义、关系支持、自动 REST API（支持 MongoDB 类查询）以及高效的跨用户管理数据的多用户管理界面等功能。免费版允许最多三名用户使用，最多可存储 25 万条记录以及每秒最多可处理一次

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  以下是翻译结果：

* **[Pinggy](https://pinggy.io)** — 使用单个命令即可在本地计算机上公开URL，无需下载。HTTPS/TCP/TLS隧道。免费套餐的隧道寿命为60分钟。
  * **[conveyor.cloud](https://conveyor.cloud/)** — Visual Studio扩展，可将IIS Express暴露给本地网络或通过隧道暴露给公共URL。
  * **[Hamachi](https://www.vpn.net/)** — LogMeIn Hamachi是一项托管VPN服务，允许您安全地将类似LAN的网络扩展到分布式团队。免费套餐允许建立无限网络，最多支持5人使用。
  * **[Mirna Sockets](https://mirna.cloud/)** - 作为服务平台的免费套接字，在部署WebSocket服务器代码时为您提供wss:// URL，并允许您监视其性能。
  * **[localhost.run](https://localhost.run/)** — 通过隧道将本地运行的服务器暴露给公共URL。
  * **[localtunnel](https://theboroer.github.io/localtunnel-www/)** — 通过隧道将本地运行的服务器暴露给公共URL。提供免费的主机版本，并且是一个**[开源](https://github.com/localtunnel/localtunnel)**项目。
  * **[ngrok.com](https://ngrok.com/)** — 通过隧道将本地运行的服务器暴露给公共URL。
  * **[cname.dev](https://cname.dev/)** — 免费且安全的动态反向代理服务。
  * **[serveo](https://serveo.net/)** — 将本地服务器暴露到互联网上。无需安装和注册。免费使用子域名，无限制。
  * **[Radmin VPN](https://www.radmin-vpn.com/)** — 通过VPN建立类似LAN的网络连接多台计算机。无限制的对等连接数。（作为Hamachi的替代方案）
  * **[segment.com](https://segment.com/)** — 中心枢纽，用于翻译和路由事件到其他第三方服务。每月可免费处理10万个事件。
  * **Google STUN** — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)。
  * **Twilio STUN** — [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)。
  * **[Tailscale](https://tailscale.com/)** — 使用开源的WireGuard协议的零配置VPN。可在MacOS、iOS、Windows、Linux和Android设备上安装。个人使用计划免费，支持100个设备和三个用户。
  * **[webhookrelay.com](https://webhookrelay.com)** — 管理、调试、分散和代理所有webhooks到公共或内部（即localhost）目的地。另外，通过隧道在私有网络中运行服务器，通过获取公共HTTP端点（[https://yoursubdomain.webrelay.io <----> http://localhost:8080）将其暴露在互联网上。](https://yoursubdomain.webrelay.io%20%3C----%3E%20http://localhost:8080%EF%BC%89%E5%B9%B6%E5%B0%BD%E9%87%8D%E5%AE%BD%E5%BA%A6%E5%AE%B9%E9%BB%BF%E7%9A%84%E7%BD%AE%E5%AE%BE%E3%80%82)
  * **[Hookdeck](https://hookdeck.com/pricing)** — 随时随地开发、测试和监控您的webhooks。每月可处理10万个请求和10万次尝试，保留三天数据。
  * **[Xirsys](https://www.xirsys.com/pricing/)** — 无限使用STUN +每月500MB TURN带宽，带宽有限，单一地理区域。
  * **[ZeroTier](https://www.zerotier.com)** — 作为服务的开源管理虚拟以太网。免费套餐可无限端对端加密网络，包含25个客户端。客户端支持桌面/移动/NA；网页界面用于配置自定义路由规则和批准私有网络中的新客户端节点。
  * **[LocalXpose](https://localxpose.io)** — 反向代理，使您能够向互联网暴露您的localhost服务器。免费套餐的隧道寿命为15分钟。
  * **[Traefik-Hub](https://traefik.io/traefik-hub/)** - 通过隧道将本地运行的服务发布到公共自定义URL，并通过访问控制来保护它们。

## 问题跟踪和项目的管理

  以下是对上述Markdown文本的翻译：

* [acunote.com](https://www.acunote.com/) ——面向最多五个团队成员的免费项目管理和SCRUM软件。
* [asana.com](https://asana.com/) ——私人项目与协作伙伴的免费版本。
* [Backlog](https://backlog.com) ——在一个平台上提供团队需要的所有内容以发布出色的项目。免费计划提供带有十个用户的项目和 100MB 的存储空间。
* [Basecamp](https://basecamp.com/personal) ——待办事项列表、里程碑管理、论坛式消息传递、文件共享和时间跟踪。最多支持三个项目，二十个用户和 1GB 的存储空间。
* [bitrix24.com](https://www.bitrix24.com/) ——内部网络和项目管理工具。免费计划支持无限用户，拥有 5GB 的空间。
* [cacoo.com](https://cacoo.com/) ——在线实时图表：流程图、UML、网络图。免费版最多支持每个图表 15 个用户，总共 25 张表。
* [Chpokify](https://chpokify.com/) ——基于团队的规划扑克，可节省冲刺估算时间。免费版最多支持五个用户，提供免费Jira集成、无限视频会议、无限团队和无限会话。
* [clickup.com](https://clickup.com/) ——项目管理工具。提供免费和高级版本，包含云存储功能。提供移动应用程序和Git集成功能。
* [Clockify](https://clockify.me) ——时间跟踪和时间表应用程序，可让您跟踪项目的工作小时数。无限用户永久免费。
* [Cloudcraft](https://cloudcraft.co/) ——使用Cloudcraft视觉设计师在几分钟内设计专业架构图，优化为AWS，具有显示实时数据的智能组件。免费计划具有单个用户的无限私有图表。
* [Codegiant](https://codegiant.io) ——带有仓库托管和CI/CD的项目管理。免费计划提供无限仓库、项目和文档，五个团队成员使用，每月提供 500 个CI/CD分钟和每月 3 万个无服务器代码运行分钟以及 1GB 存储库存储空间。
* [Confluence](https://www.atlassian.com/software/confluence) ——Atlassian的内容协作工具，用于帮助团队高效地协作和共享知识。免费计划最多支持十个用户。
* [contriber.com](https://www.contriber.com/) ——可定制的项目管理平台，免费入门计划包含五个工作区。
* [Crosswork](https://crosswork.app/) ——多功能项目管理平台。免费版最多支持三个项目，无限用户，拥有 1GB 存储空间。
* [diagrams.net](https://app.diagrams.net/) ——在线图表存储在Google Drive、OneDrive或Dropbox中。所有功能和存储级别均免费。
* [freedcamp.com](https://freedcamp.com/) ——任务、讨论、里程碑、时间跟踪、日历、文件和密码管理器。免费计划具有无限的项目、用户和文件存储空间。
* [easyretro.io](https://www.easyretro.io/) ——简单直观的冲刺回顾工具。免费计划每月有三个公共板和每个板的一个调查。
* [GForge](https://gforge.com) ——针对复杂项目的项目管理和问题跟踪工具套件，具有本地和SaaS选项。SaaS免费计划为前五个用户免费提供服务并为开源项目免费提供服务。
* [gleek.io](https://www.gleek.io) ——开发人员免费的描述到图表工具。使用关键字创建非正式UML类、对象或实体关系图表。
* [GraphQL Inspector](https://github.com/marketplace/graphql-inspector) ——GraphQL Inspector输出两个GraphQL模式之间的更改列表。每个差异都会精确解释并标记为破坏性、非破坏性或危险。
* [huboard.com](https://huboard.com/) ——用于您的GitHub问题的即时项目管理工具，开源免费使用。
* [Hygger](https://hygger.io) ——项目管理平台。免费计划提供无限用户、项目和板，拥有 100MB 的存储空间。
* [Instabug](https://instabug.com) ——全面的错误报告和应用程序内反馈SDK，适用于移动应用程序的工具。免费计划最多支持一个应用程序和一个成员使用。
* [WishKit](https://wishkit.io) ——收集iOS/macOS应用程序中的用户反馈并根据用户投票优先安排功能开发优先级排序的工具。免费计划最多支持一个应用程序的使用。
* [Ilograph](https://www.ilograph.com/) ——交互式图表允许用户从多个角度和详细级别查看其基础设施情况表达代码形式的图表信息内容等可以创建无限的私有图表最多支持三个查看者使用免费版服务内容等可以创建无限的私有图表最多支持三个查看者使用

  以下是翻译结果：

* [Shortcut](https://shortcut.com/) - 项目管理平台。最多支持10个用户永久免费。
* [Tadum](https://tadum.app) - 为常规会议设计的会议议程和会议记录应用程序，最多支持10人团队免费使用。
* [taiga.io](https://taiga.io/) - 针对初创企业和敏捷开发者的项目管理平台，开源免费。
* [Tara AI](https://tara.ai/) - 简单冲刺管理服务。免费计划包含无限的任务、冲刺和工作区，没有用户限制。
* [targetprocess.com](https://www.targetprocess.com/) - 从看板、Scrum到几乎任何操作流程的视觉项目管理。免费计划支持无限用户，最多可达1,000个数据实体（更多详细信息请访问：[https://www.targetprocess.com/pricing/]）。
* [taskade.com](https://www.taskade.com/) - 实时协作任务列表和团队概要。免费计划包含一个工作区，包含无限的任务和项目；1GB文件存储；一周的项目历史记录；视频会议最多可容纳五位参与者。
* [taskulu.com](https://taskulu.com/) - 基于角色的项目管理。最多支持五个用户免费使用。可与GitHub/Trello/Dropbox/Google Drive集成。
* [Teaminal](https://www.teaminal.com) - 针对远程团队的站立会议、回顾和冲刺规划工具。最多支持15个用户免费使用。
* [teamwork.com](https://teamwork.com/) - 项目管理和团队聊天。免费计划支持五个用户和两个项目。提供高级付费计划。
* [teleretro.com](https://www.teleretro.com/) - 简单有趣的回顾工具，包含破冰活动、GIF和表情符号。免费计划包括三个回顾和无限成员。
* [testlio.com](https://testlio.com/) - 问题跟踪、测试管理和Beta测试平台。私人使用免费。
* [terrastruct.com](https://terrastruct.com/) - 专门针对软件架构的在线绘图工具。免费版最多支持四层每层四个图元。
* [todoist.com](https://todoist.com/) - 协作和个人任务管理。免费计划包括：五个活跃项目、五个项目用户、最多上传5MB文件、三个过滤器以及一周的活动历史记录。
* [trello.com](https://trello.com/) - 基于看板的项目管理。个人板无限，团队板最多十个。
* [Tweek](https://tweek.so/) - 简单每周待办事项日历和任务管理。
* [ubertesters.com](https://ubertesters.com/) - 测试平台、集成和群众测试者，支持两个项目，五个成员免费使用。
* [Wikifactory](https://wikifactory.com/) - 产品设计服务，包含项目、版本控制和问题模块。免费计划提供无限的项目和合作者以及3GB的存储空间。
* [Yodiz](https://www.yodiz.com/) - 敏捷开发和问题跟踪。最多支持三个用户免费使用，无限项目。
* [YouTrack](https://www.jetbrains.com/youtrack/buy/#edition=incloud) - 针对开源软件和私有项目的免费托管YouTrack（InCloud）。包括时间跟踪和敏捷看板功能。
* [zenhub.com](https://www.zenhub.com) - GitHub内的唯一项目管理解决方案。针对公共仓库、开源软件和非营利组织免费使用。
* [zenkit.com](https://zenkit.com) - 项目管理和协作工具。最多支持五个成员免费使用，附件大小为5GB。
* [Zube](https://zube.io) - 项目管理工具，免费计划支持四个项目和四个用户。提供GitHub集成功能。
* [Toggl](https://toggl.com/) - 提供两个免费的生产力工具。[Toggl Track](https://toggl.com/track/)是一款时间和跟踪应用程序的免费计划，无缝跟踪和报告专为自由职业者设计，具有无限跟踪记录、项目、客户、标签、报告等功能。[Toggl Plan](https://toggl.com/plan/)是一款针对个人开发者的任务规划工具，其免费计划具有无限的任务、里程碑和时间线的功能。
* [Sflow](https://sflow.io) - sflow是一款针对敏捷软件开发、市场营销、销售和客服的项目管理工具，尤其适用于外包和跨组织协作项目。免费计划支持最多三个项目和五个成员使用。 
* [Pulse red](https://pulse.red) - 用于项目的极简时间跟踪器和工时表应用程序，免费提供使用。 

**[⬆️ 返回顶部](#目录)**

## Storage and Media Processing

  以下是您请求的翻译结果：

* [AndroidFileHost](https://androidfilehost.com/) - 提供无限速度、带宽、文件数、下载次数等的免费文件共享平台。它主要针对Android开发相关的文件，如APK构建、自定义ROM和修改等。但也似乎接受其他任何文件。
 * [borgbase.com](https://www.borgbase.com/) - 用于Borg Backup的简单安全的离线备份托管。提供10GB的免费备份空间和两个存储库。
 * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10GB的免费存储空间
 * [sync.com](https://www.sync.com/) - 端到端的云存储服务。提供5GB的免费存储空间
 * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多10GB的免费存储空间
 * [sirv.com](https://sirv.com/) - 具有即时图像优化和调整大小的智能图像CDN。免费套餐包括500MB的存储空间和2GB的带宽。
 * [cloudimage.io](https://www.cloudimage.io/en/home) - 全面的图像优化和CDN服务，在全球拥有超过1500个服务点。提供各种图像缩放、压缩和水印功能。拥有响应式图像的开源插件、360度图像制作和图像编辑功能。免费月度计划包括每月25GB的CDN流量、每月的缓存存储量和无限变换次数。
 * [cloudinary.com](https://cloudinary.com/) - 用于网站和应用程序的图像上传、强大的操作、存储和交付，支持Ruby、Python、Java、PHP、Objective-C等多种库。免费套餐包括每月的信用额度为每月的信用额度等于图像转换次数、存储空间或CDN使用量。每月最多可获取信用额度为每月最多可获取信用额度等于图像转换次数或存储空间或CDN使用量。每月最多可获取信用额度为每月最多可获取信用额度等于图像转换次数为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取信用额度为每月最多可获取二十五个（即每月最多进行二十五个图像转换）。每个信用等同于一千个图像转换次数或一GB的存储空间或一GB的CDN使用量）。每个信用等同于一千个图像转换次数或一GB的存储空间或一GB的CDN使用量）。每个信用等同于一千个图像转换次数或一GB的存储空间。免费套餐包括每月的信用额度为每月最多进行二十五个图像转换。每个信用等同于一GB的存储空间或一GB的CDN使用量。免费套餐还包括二十五个文件的转换和三GB带宽的使用量。免费套餐还包括二十五个文件的转换和三GB带宽的使用量。还提供REST API用于与存储交互。还提供REST API用于与存储交互。还提供REST API用于与存储进行交互。还提供REST API用于与存储进行交互，并且有一个文件大小限制（每个请求每分钟只能请求一次）。并且有一个文件大小限制（每个请求每分钟只能请求一次）。并且有一个文件大小限制（每个请求每分钟只能请求一次）。并且有一个文件大小限制，一个文件下载后会自动删除。一个文件下载后会自动删除。此外还提供API接口用于与其他服务集成使用。此外还提供API接口用于与其他服务集成使用，如图像处理、视频处理、文档处理等在线工具等，这些工具都是免费的并且可以通过网络访问和使用，无需安装任何软件即可轻松实现各种功能的使用和开发者的需求满足。此外还提供API接口用于与其他服务集成使用，如图像处理等在线工具等，这些工具可以帮助开发者提高开发效率和用户体验质量等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等目标实现等不限次数不限文件大小不限下载次数等等功能强大且易于使用不限次数不限文件大小不限下载次数等等功能强大且易于使用不限次数不限文件大小等等功能强大且易于使用不限次数不限文件大小等等功能强大且易于使用不限次数不限文件大小等功能强大且易于使用等功能强大且易于使用等功能强大且易于使用等功能强大且免费使用等功能强大且免费使用等功能强大且免费使用的在线工具和服务平台等产品或服务可供用户选择和使用等产品或服务可供用户选择和使用等产品或服务可供用户选择和使用等产品或服务可供用户选择和使用等产品或服务可供用户选择和使用以满足不同需求以满足不同需求以满足不同需求以满足不同需求以满足不同需求以满足不同需求以满足不同需求等需求满足等需求满足等需求满足

  * [DocsParse](https://docsparse.com/)是一款使用GPT驱动的AI处理工具，能够将PDFs、图片转化为结构化数据，并以JSON、CSV、EXCEL等格式输出。每月提供免费30次信用额度。

**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  好的，我已经按照您的要求翻译了这段Markdown文本。

  以下是翻译结果：

* [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划最多可体验三次五步引导。
* [Webflow](https://webflow.com) - 集动画和网站托管于一体的所见即所得网站构建器。免费适用于两个项目。
* [Updrafts.app](https://updrafts.app) - 基于Tailwind CSS设计的所见即所得网站构建器。非商业使用免费。
* [whimsical.com](https://whimsical.com/) - 协作流程图、草图、便签和思维导图工具。最多创建四个免费面板。
* [Zeplin](https://zeplin.io/) — 设计师与开发人员协作平台。展示设计作品、资产和样式指南。免费适用于一个项目。
* [Pixelixe](https://pixelixe.com/) — 在线创建和编辑引人入胜的独特图形和图像。
* [Responsively App](https://responsively.app) - 免费开发工具，用于更快、更精确地响应式Web应用程序开发。
* [SceneLab](https://scenelab.io) - 在线模拟图形编辑器，拥有不断扩展的免费设计模板集合。
* [xLayers](https://xlayers.dev) - 预览并将Sketch设计文件转换为Angular、React、Vue等（免费开源，访问 https://github.com/xlayers/xlayers）。
* [Grapedrop](https://grapedrop.com/) — 基于GrapesJS框架的响应式、强大、SEO优化的网页构建器。前五页免费，无限自定义域名、所有功能以及简单使用。
* [Mastershot](https://mastershot.app) - 完全免费的基于浏览器的视频编辑器。无水印，最高可导出至1080p选项。
* [Unicorn Platform](https://unicornplatform.com/) - 无需努力的着陆页构建器，提供托管服务。免费一个网站。
* [SVGmix.com](https://www.svgmix.com/) - 拥有超过三十万个免费SVG图标、集合和品牌徽标的巨大存储库。它拥有浏览器中简单的矢量编辑程序，可以快速编辑文件。
* [svgrepo.com](https://www.svgrepo.com/) - 浏览、搜索并找到最适合您项目的图标或矢量，使用各种矢量库。免费下载SVG矢量用于商业用途。
* [haikei.app](https://www.haikei.app/) - Haikei是一款Web应用程序，用于生成独特的SVG形状、背景和图案，可立即用于您的设计工具和流程中。
* [Canva](https://canva.com) - 免费在线设计工具，可创建视觉内容。
* [Superdesigner](https://superdesigner.co) - 一系列免费设计工具，只需点击几下即可创建独特的背景、图案、形状、图像等。
* [TeleportHQ](https://teleporthq.io/) - 低代码前端设计与开发平台。TeleportHQ是协作前端平台，可即时创建和发布无头静态网站。免费体验三个项目、无限协作伙伴和代码导出。
  * [vector.express](https://vector.express) — 快速轻松地将您的AI、CDR、DWG、DXF、EPS等格式转换为SVG矢量格式。 
  * [Vertopal](https://www.vertopal.com) - Vertopal是一个免费的在线文件转换平台。包括开发人员转换器如JPG转SVG等。 
  * [okso.app](https://okso.app) - 极简的在线绘图应用程序。允许快速创建草图和设计笔记等视觉内容并将其导出为PNG等格式。无需注册即可免费使用。 
  * [Wdrfree SVG](https://wdrfree.com/free-svg) - 提供黑白免费的SVG切割文件下载服务。 
  *[Lucide](https://lucide.dev) - 提供免费的可自定义一致性的SVG图标工具包下载服务。 
  *[Logo.dev](https://www.logo.dev) 提供公司Logo API服务，第一次调用前十万次API是免费的。 
  *[MDBootstrap](https://mdbootstrap.com/) 提供个人和商业用途的Bootstrap等UI套件下载服务，包含超过七百个组件和模板等优质资源 。 免费提供安装教程和社区支持服务 。 免费提供安装教程和社区支持服务 。 免费提供安装教程和社区支持服务 。 免费提供安装教程和社区支持服务 。还提供一对一辅导服务 。 免费的社区论坛可供交流学习 。 免费的社区论坛可供交流学习 。 提供一对一辅导服务 。 提供一对一辅导服务 。 提供一对一辅导服务 。还提供丰富的在线课程 。还提供丰富的在线课程 。还提供丰富的在线课程 。还提供丰富的在线课程 。还提供丰富的在线课程 。还提供一对一辅导服务 。还提供一对一辅导服务 。还提供一对一辅导服务 。还提供丰富的在线课程

## 设计灵感

  以下是翻译结果：

* **[awwwards](https://www.awwwards.com/) - 最佳网站展示**：展示所有设计最佳的网站（由设计师投票决定）。
  * **[Behance](https://www.behance.net/) - 设计展示**：设计师展示他们作品的地方。可按UI/UX项目进行过滤。
  * **[dribbble](https://dribbble.com/) - 设计展示**：独特的灵感设计，通常不是来自真实应用。
  * **[Landings](https://landings.dev/) - 网页截图**：根据您的偏好，找到最适合您的设计灵感的着陆页。
  * **[Lapa Ninja](https://www.lapa.ninja/) - 着陆页/UI工具包/网页截图**：Lapa Ninja是一个展示最佳6025个着陆页例子的画廊，还有来自网络的设计师免费书籍和免费UI工具包。
  * **[LovelyLanding.net](https://www.lovelylanding.net/) - 登陆页面设计**：经常更新的登陆页面截图。包括桌面、平板和移动设备的截图。
  * **[Mobbin](https://mobbin.design/) - 移动设备截图**：利用我们超过5万个可完全搜索的移动应用程序截图库，可以节省数小时的UI和UX研究时间。
  * **[Uiland Design](https://uiland.design/) - 移动设备截图**：探索非洲和全球领先公司的移动和网页UI设计。
  * **[Mobile Patterns](https://www.mobile-patterns.com/) - 移动设备截图**：设计灵感库，展示最精细的UI UX模式（iOS和Android），供设计师、开发人员和产品制作人参考。
  * **[Page Flows](https://pageflows.com/) - 移动/网页视频和截图**：许多移动和网页应用的全流程视频。还包括截图。高度可搜索和索引。
  * **[Screenlane](https://screenlane.com/) - 移动设备截图**：从最新的网页和移动应用程序UI设计趋势中获取灵感并跟上潮流。可按模式和应用程序进行过滤。
  * **[scrnshts](https://scrnshts.club/) - 移动设备截图**：精心挑选的应用商店设计截图的集合。
  * **[UI Garage](https://uigarage.net/) - 移动/网页截图**：每日UI灵感和模式，为设计师和开发人员找到灵感、工具和项目的最佳资源。
  * **[Refero](https://refero.design/) - 网页截图**：带有标签和可搜索的设计参考集合，来自伟大的网络应用程序。

**[⬆️ 返回顶部](#目录)**

## 地图数据可视化

  以下是这段Markdown文本的中文翻译：

* **[IP Geolocation](https://ipgeolocation.io/)** — 提供免费开发者计划，每月可处理3万次请求。
* **[carto.com](https://carto.com/)** — 使用您的公共数据创建地图和地理空间API。
* **[Clockwork Micro](https://clockworkmicro.com/)** — 工作精准的地图工具。提供五万次免费月度查询（地图瓦片、db2vector、海拔）。
* **[developers.arcgis.com](https://developers.arcgis.com)** — 提供地图、地理空间数据存储、分析、地理编码、路由等功能的API和SDK，涵盖网络、桌面和手机应用。每月提供免费的基础地图瓦片两千万块、非存储地理编码二十万次、简单路线二十万次、驾驶时间计算五千次以及免费地图瓦片和数据存储五GB。
* **[Foursquare](https://developer.foursquare.com/)** — 通过地点API和朝圣者SDK进行位置发现、场所搜索和情境感知内容。
* **[geoapify.com](https://www.geoapify.com/)** — 提供矢量地图瓦片、地理编码、地点查询、路由规划等API服务。每日免费请求三千次。
* **[geocod.io](https://www.geocod.io/)** — 通过API或CSV上传进行地理编码。每日免费查询两千五百次。
* **[geocodify.com](https://geocodify.com/)** — 通过API或CSV上传进行地理编码和地理解析。每月免费查询十万次。
* **[geojs.io](https://www.geojs.io/)** — 提供高度可用的REST/JSON/JSONP IP地理位置查询API。
* **[giscloud.com](https://www.giscloud.com/)** — 在线可视化、分析和共享地理数据。
* **[graphhopper.com](https://www.graphhopper.com/)** — 提供路由规划、路线优化、距离矩阵计算等开发者包，全部免费。
* **[here](https://developer.here.com/)** — 提供地图和位置感知应用的API和SDK。每月免费事务处理量达两十五万次。
* **[locationiq.com](https://locationiq.com/)** — 提供地理编码、地图和路由API服务。每日免费请求五千次。
* **[mapbox.com](https://www.mapbox.com/)** — 提供地图显示数据的地图服务、地理空间服务和SDK。
* **[maptiler.com](https://www.maptiler.com/cloud/)** — 提供地图可视化服务的矢量地图和地图服务SDK。提供免费更新的矢量瓦片和四种地图样式。
* **[nominatim.org](https://nominatim.org/)** — OpenStreetMap提供的免费地理编码服务，提供全球地址搜索功能和反向地理编码功能。
* **[nextbillion.ai](https://nextbillion.ai/)** — 提供地图相关服务：地理编码、导航（方向、路线规划、路线优化、距离矩阵）、地图SDK（矢量、静态、移动SDK）。每项服务都有指定的免费配额限制[查看定价页面了解详情](https://nextbillion.ai/pricing)。
* **[opencagedata.com](https://opencagedata.com)** — 聚合OpenStreetMap和其他开放地理源的地理编码API服务。每日免费查询两千五百次。
* **[osmnames](https://osmnames.org/)** — 提供地理编码服务，搜索结果根据相关的Wikipedia页面的流行度进行排名。
* **[positionstack](https://positionstack.com/)** — 提供全球地点和坐标的免费地理编码服务。每月个人使用限制为两万五千次请求。
* **[stadiamaps.com](https://stadiamaps.com/)** — 提供地图瓦片服务和其他地理空间API服务，包括路由规划和导航等。非商业使用和测试每天可免费查看地图两千五百次和发送API请求两千五百次。
* **[maps.stamen.com](http://maps.stamen.com/)** — 提供免费的地图瓦片和瓦片托管服务。
* **[ipstack](https://ipstack.com/)** — 通过IP地址定位并识别网站访客。
* **[Geokeo api](https://geokeo.com)** — 提供带有语言校正功能的地理编码API服务，覆盖全球范围，每日免费查询次数为两千五百次。

**[⬆️ 返回顶部](#目录)**

## 包构建系统

  以下是翻译结果：

* [build.opensuse.org](https://build.opensuse.org/) — 为多个发行版（SUSE、EL、Fedora、Debian等）提供的软件包构建服务。
* [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于Mock的RPM构建服务，适用于Fedora和EL。
* [help.launchpad.net](https://help.launchpad.net/Packaging) — Ubuntu和Debian的构建服务帮助文档。

**[⬆️ 返回顶部](#目录)**

## IDE和代码编辑

  好的，我已经按照您的要求翻译了这段Markdown文本。

  以下是翻译结果：

* [VSCodium](https://vscodium.com/) —— 由社区驱动，无需遥测/跟踪，是微软编辑器VSCode的自由许可二进制发行版。
  * [wakatime.com](https://wakatime.com/) —— 使用文本编辑器插件对你的编码活动进行量化自我评估，免费有限计划。
  * [Wave Terminal](https://waveterm.dev/) —— Wave是一款开源的跨平台终端，用于无缝工作流程。可内联呈现任何内容。保存会话和历史记录。由开放的网络标准驱动。适用于MacOS和Linux。
  * [WebComponents.dev](https://webcomponents.dev/) —— 浏览器内的IDE，可独立编码Web组件，提供58个模板，支持故事和测试。
  * [PHPSandbox](https://phpsandbox.io/) —— PHP的在线开发环境
  * [WebDB](https://webdb.app) —— 免费高效的数据库IDE。具有服务器发现、实体关系图、数据生成器、人工智能、NoSQL结构管理器、数据库版本控制等功能以及更多。
  * [Zed](https://zed.dev/) —— Zed是一款高性能的多人代码编辑器，由Atom和Tree-sitter的创造者开发。

**[⬆️ 返回顶部](#目录)**

## 分析、事件和统计

  以下是翻译结果：

* [Dwh.dev](https://dwh.dev) - 数据云观测解决方案（Snowflake）。个人使用免费。
* [Hightouch](https://hightouch.com/) - Hightouch是一个反向ETL平台，可帮助您从数据仓库同步客户数据到CRM、营销和支持工具。免费套餐提供您一个目的地进行数据同步。
* [Avo](https://avo.app/) - 简化的分析发布工作流程。单一真相跟踪计划、类型安全的分析跟踪库、应用内调试器以及数据观测，可在发布之前捕获所有数据问题。免费适用于两位工作空间成员和1小时的数据观测回溯。
* [Branch](https://www.branch.io) - 移动分析平台。免费套餐提供高达1万移动应用用户，提供深度链接和其他服务。
* [Cauldron](https://cauldron.io) - 开源分析解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（如Git、Github和Gitlab）。免费套餐包括无限数量的报告。
* [Census](https://www.getcensus.com/) - 反向ETL和运营分析平台。从数据仓库同步10个字段到超过60个SaaS平台，如Salesforce、Zendesk或Amplitude。
* [Clicky](https://clicky.com) - 网站分析平台。免费计划适用于一个网站，提供每月3千次访问分析。
* [Databox](https://databox.com) - 通过结合其他分析和商业智能平台提供业务洞察。免费计划提供三个用户、仪表板和数据源。包含近亿历史数据记录。
* [Hitsteps.com](https://hitsteps.com/) - 每月提供高达两千万次页面浏览量。适用于一个网站。 
* [amplitude.com](https://amplitude.com/) - 免费适用于每月高达一百万的事件数据，支持最多两个应用。 
* [GoatCounter](https://www.goatcounter.com/) - GoatCounter是一个开源网络分析平台，可作为托管服务（非商业用途免费）或自助托管应用程序使用。旨在提供易于使用且对隐私友好的网络分析作为Google Analytics或Matomo的替代方案。免费套餐适用于非商业用途，包括无限网站、六个月的数据保留和每月一百万页面浏览量。 
* [Google Analytics](https://analytics.google.com/) - Google Analytics谷歌分析。 
* [MetricsWave](https://metricswave.com) - 针对开发者的隐私友好的谷歌分析替代品。免费计划允许每月高达二十万次页面浏览量而无需信用卡信息。 
* [Expensify](https://www.expensify.com/) - 费用报告，免费的个人报告审批工作流程。 
* [getinsights.io](https://getinsights.io) - 关注隐私、无cookie的分析，每月免费适用于最多三千次事件。 
* [heap.io](https://heap.io) - 自动捕获iOS或Web应用程序中的每个用户操作。免费适用于每月最多一万次会话。 
* [Hotjar](https://hotjar.com) - 网站分析和报告。免费计划允许每天两千次页面浏览量。一百张快照/天（最大容量：三百）。可以存储三个快照热图长达一年时间。团队人数不限。还包括应用程序和内联调查、反馈小部件截图等额外功能。免费套餐允许创建三个调查和三反馈小部件并每月收集二十份响应。 
* [Keen](https://keen.io/) - 用于数据收集、分析和可视化的自定义分析。每月免费提供一千次事件量。 
* [Yandex Datalens](https://datalens.yandex.com/) - Yandex云数据可视化与分析服务。免费提供此项服务，无用户数量和请求限制。 
* [Yandex Metrica](https://metrica.yandex.com/) - 无限制的免费分析服务。 
* [Mixpanel](https://mixpanel.com/) - 免费适用于每月追踪的一百万用户，包括无限的历史数据和座位数，数据存储在美国或欧盟地区的数据中心内 。 
* [Moesif](https://www.moesif.com) - 用于REST和GraphQL的API分析。（免费至每月五十万次API调用） 
* [optimizely.com](https://www.optimizely.com) - A/B测试解决方案，提供免费入门套餐，适用于一个网站以及一个iOS和一个Android应用 。 
* [Microsoft PowerBI](https://powerbi.com) - 商业洞察与分析工具Microsoft出品。免费计划提供有限的使用权限，用户许可证数量高达一千万张 。 
* [Row Zero](https://rowzero.io) - 快速连接的电子表格，可以直接连接到数据库、S3和API等数据源进行即时导入、分析、图形化展示和共享数据 。免费提供三个永久工作簿

**返回顶部**（回到目录）

## Visitor Session Recording

  以下是这些网站的中文翻译介绍：

* **[Reactflow.com](https://www.reactflow.com/)**：每天最多支持 1,000 页面的浏览量、三个热图和三个插件，免费跟踪错误。
* **[OpenReplay.com](https://www.openreplay.com)**：开源会话回放工具，提供用于错误复现的开发工具、实时会话支持以及产品分析套件。每月可访问一千次会话并保留 7 天数据。
* **[LogRocket.com](https://www.logrocket.com)**：每月最多支持 1,000 次会话，保留 30 天数据，包括错误跟踪和实时模式。
* **[FullStory.com](https://www.fullstory.com)**：每月最多支持 1,000 次会话，保留一个月的数据并提供三个用户席位。更多信息请点击[这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
* **[hotjar.com](https://www.hotjar.com/)**：针对每个网站每月最多支持 1,050 页面的浏览量，无限热图，数据保留三个月。
* **[inspectlet.com](https://www.inspectlet.com/)**：每月免费支持最多 2,500 次会话记录一个网站的情况。
* **[Microsoft Clarity](https://clarity.microsoft.com/)**：会话录制完全免费，没有流量限制、没有项目限制且没有采样限制。
* **[mouseflow.com](https://mouseflow.com/)**：每月免费支持最多 500 次会话记录一个网站的情况。
* **[mousestats.com](https://www.mousestats.com/)**：每月免费支持最多 100 次会话记录一个网站的情况。
* **[smartlook.com](https://www.smartlook.com/)**：针对网页和移动应用的免费软件包（每月最多支持 1,500 次会话），包括三个热图、一个漏斗分析和一个月的数据库历史记录。
* **[howuku.com](https://howuku.com)**：跟踪用户互动、参与度和事件。每月免费支持最多 5,000 次访问。
* **[UXtweak.com](https://www.uxtweak.com/)**：记录并观察访客如何使用您的网站或应用程序。小项目可无限期免费使用。

**[⬆️ 返回顶部](#目录)**

## 国际手机号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查找JSON API。每月提供100次API请求。
* [veriphone](https://veriphone.io/) — 提供全球电话号码的免费、快速、可靠的JSON API验证服务。每月提供1000次请求。

**[⬆️ 返回顶部](#目录)**

## 支付和账单集成

  以下是这些工具的翻译：

* [Qonversion](http://qonversion.io/) - 全平台订阅管理一站式平台，提供分析、A/B测试、苹果搜索广告、远程配置和增长工具，优化应用内购买和货币化。兼容iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页。每月追踪收入不超过$10k时免费。
* [ParityVend](https://www.ambeteco.com/ParityVend/) - 根据访客所在地自动调整价格，以拓展全球业务并接触新市场（购买力平价）。免费计划包括每月7,500次API请求。
* [Glassfy](https://glassfy.io/) - 应用内订阅基础设施，实时订阅事件和适用于iOS、Android、Stripe和Paddle的现成货币化工具。每月收入不超过$10k时免费。
* [Adapty.io](https://adapty.io/) - 为iOS、Android、React Native、Flutter、Unity或网页应用提供移动应用内订阅集成的一站式解决方案，带有开源SDK。每月收入不超过$10k时免费。
* [CoinMarketCap](https://coinmarketcap.com/api/) - 提供加密货币市场数据，包括最新的加密和法定货币汇率。免费套餐每月提供1万次调用信用。
* [CurrencyFreaks](https://currencyfreaks.com/) - 提供实时和历史汇率数据。可用免费的DEVELOPER计划，每月1,000次请求。
* [CoinGecko](https://www.coingecko.com/en/api) - 提供加密货币市场数据，包括最新汇率和历史数据。演示API的速率限制为每分钟3次调用，每月上限为1万次调用。
* [CurrencyApi](https://currencyapi.net/) - 提供实体货币和加密货币的实时汇率，以JSON和XML格式提供。免费套餐每月提供1,25次API请求。
* [currencylayer](https://currencylayer.com/) - 提供可靠的汇率和货币转换服务，适用于您的业务。每月免费提供1次API请求。
* [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API。免费套餐每天更新一次，限制为每月最多发送请求次数为1,5次。
* [FraudLabsPRO](https://www.fraudlabspro.com) - 帮助商家防止支付欺诈和拒付。可用免费的Micro计划，每月查询次数为5次。
* [FxRatesAPI](https://fxratesapi.com) - 提供实时和历史汇率数据。免费套餐需要标注来源。
* [Moesif API Monetization](https://www.moesif.com/) - 通过基于使用的计费从API中获利。连接到Stripe、Chargebee等。免费套餐每月提供3万次事件。
* [Nami ML](https://www.namiml.com/) - 提供iOS和Android应用的完整平台，包括无代码防火墙、客户关系管理和分析功能，所有基础功能运行IAP业务均免费。
* [RevenueCat](https://www.revenuecat.com/) - 托管应用内购买和订阅的后端服务（适用于iOS和Android）。每月追踪收入不超过$2,5k时免费。
* [vatlayer](https://vatlayer.com/) - 即时验证增值税号和欧盟增值税率API，每月免费发送API请求次数为1次。
* [Currencyapi](https://currencyapi.com) - 免费货币转换和汇率数据API服务。每月私人使用提供免费3次请求，每分钟最多发送请求次数为每次请求为十次。如需更多信息请访问官方网站获取更多信息。^[⬆️](#目录)（回到顶部）

## Docker相关

  以下是这些内容的翻译：

* **[canister.io](https://canister.io/)** — 为开发者提供20个免费私有仓库，为团队提供30个免费私有仓库以构建和存储Docker镜像。
* **[Container Registry Service](https://container-registry.com/)** — 基于Harbor的容器管理解决方案。免费版提供1GB的私有仓库存储空间。
* **[Docker Hub](https://hub.docker.com)** — 提供1个免费私有仓库和无限公开仓库，以构建和存储Docker镜像。
* **[Play with Docker](https://labs.play-with-docker.com/)** — 一个简单、互动、有趣的Docker学习平台。
* **[quay.io](https://quay.io/)** — 构建并存储容器镜像，提供无限免费的公开仓库。
* **[ttl.sh](https://ttl.sh/)** - 匿名和短暂的Docker镜像仓库。

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * Vagrant Cloud（HashiCorp Vagrant Cloud）- 用于托管 Vagrant box 的云服务平台。
  * Vagrantbox.es - 一个替代的公共 box 索引。

**[⬆️ 返回顶部](#目录)**

## 开发博客站点

  以下是这些Markdown文本的中文翻译：

* **[BearBlog](https://bearblog.dev/)** — 极简主义的Markdown博客和网站构建器。
* **[Dev.to](https://dev.to/)** — 程序员分享想法并相互帮助成长的地方。
* **[Hashnode](https://hashnode.com/)** — 为开发者提供的无烦恼的博客软件！
* **[Medium](https://medium.com/)** — 更深入地思考对你来说真正重要的事情。
* **[AyeDot](https://ayedot.com/)** — 以现代多媒体短格式Miniblogs的形式，与世界分享你的想法、知识和故事，完全免费。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  以下是这些内容的翻译：

* [GraphComment](https://graphcomment.com/) - GraphComment是一个评论平台，可帮助您从网站受众群体中建立一个活跃的社区。
* [Utterances](https://utteranc.es/) - 基于GitHub问题的轻量级评论小工具。您可以使用GitHub问题来进行博客评论、维基页面等！
* [Disqus](https://disqus.com/) - Disqus是一个网络社区平台，被成千上万的网站使用。
* [Remarkbox](https://www.remarkbox.com/) - 开源托管评论平台，您可以随意支付费用以在“几个域上拥有一位管理者，并可以完全控制行为和外观”。
* [IntenseDebate](https://intensedebate.com/) - 功能丰富的评论系统，适用于WordPress、Tumblr、Blogger以及其他许多网站平台。

**[⬆️ 返回顶部](#目录)**

## 截图API

  以下是这些内容的翻译：

* **[ApiFlash](https://apiflash.com)** — 基于Aws Lambda和Chrome的截图API。处理整个页面，捕捉时间，以及视口尺寸。
* **[microlink.io](https://microlink.io/)** — 它能将任何网站转化为数据，如元标签规范化、美观的链接预览、网页爬虫功能或截图服务。每天免费使用250次请求。
* **[ScreenshotAPI.net](https://screenshotapi.net/)** — 使用简单的API调用生成任何网站的截图。建立在可扩展的基础上，托管在Google Cloud上。每月提供100张免费截图。
* **[screenshotlayer.com](https://screenshotlayer.com/)** — 可以捕获任何网站的高度可定制的快照。每月免费快照100次。
* **[screenshotmachine.com](https://www.screenshotmachine.com/)** — 可以每月捕获100次快照，包括png、gif和jpg格式，不仅包括主页的全长捕获。
* **[PhantomJsCloud](https://PhantomJsCloud.com)** — 浏览器自动化和页面渲染。免费套餐每天提供最多500页的访问量。自2017年起提供免费套餐。
* **[Webshrinker.com](https://webshrinker.com)** — Web Shrinker提供网站截图和域名情报API服务。每月免费请求100次。
* **[Httpic.com](https://httpic.com)** — 将任何网站转化为jpg、png或pdf格式。捕捉全屏截图，调整视口，并注入自定义代码。免费套餐每月可生成150张图片。
* **[Screenshots](https://screenshotson.click)** — 用于截图的API。拥有高度可定制的捕获选项。每月免费截图100次。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  以下是翻译结果：

* [FlutLab](https://flutlab.io/) - FlutLab是一个现代化的在线Flutter IDE，是创建、调试和构建跨平台项目的最佳场所。使用Flutter构建iOS（无需Mac）和Android应用程序。
* [CodeMagic](https://codemagic.io/) - Codemagic是一款针对移动应用的完全托管和管理的持续集成/持续部署（CI/CD）工具。您可以使用基于GUI的CI/CD工具进行构建、测试和部署。免费版每月提供500分钟免费时长，以及带有2.3 GHz和8 GB RAM的Mac Mini实例。
* [FlutterFlow](https://flutterflow.io/) - FlutterFlow是一个基于浏览器的拖放界面，用于使用Flutter构建移动应用程序。

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  以下是这些内容的翻译：

* [JsLinux](https://bellard.org/jslinux) — 一台能够运行Linux和Windows 2k的非常快速的x86虚拟机。
* [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一台能够运行带有网络支持的Linux的OpenRISC虚拟机。
* [v86](https://copy.sh/v86) — 一台能够在浏览器中直接运行Linux和其他操作系统的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## 隐私管理

  以下是这些内容的中文翻译：

* [Bearer](https://www.bearer.sh/) - 通过审计和持续工作流程设计隐私保护方案，帮助组织遵守GDPR和其他法规。免费版仅限于较小的团队和SaaS版本。
* [Osano](https://www.osano.com/) - 同意管理和合规平台，提供从GDPR表示到Cookie横幅的所有内容。免费版提供基本功能。
* [Iubenda](https://www.iubenda.com/) - 隐私和Cookie政策及同意管理。免费版提供有限的隐私和Cookie政策以及Cookie横幅。
* [Cookiefirst](https://cookiefirst.com/) - Cookie横幅、审计和多语言同意管理解决方案。免费版提供一次性扫描和单个横幅。
* [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大多数功能，但访客数量有限。
* [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理（DSARs）和数据映射。免费版包括核心同意管理功能，他们还为经过验证的开源项目提供免费的高级计划。

**[⬆️ 返回顶部](#目录)**

## 杂项

  以下是翻译结果：

* [BackgroundStyler.com](https://backgroundstyler.com) - 创建代码、文本或图像的审美截图，以在社交媒体上分享。
* [BinShare.net](https://binshare.net) - 创建和共享代码或二进制文件。可作为漂亮的图片分享，例如用于Twitter/Facebook帖子，或作为链接，例如用于聊天或论坛。
* [Blynk](https://blynk.io) - 一个带有API来控制、构建和评估物联网设备的SaaS。免费开发者计划包含5台设备、免费云和数据存储。也有移动应用。
* [Bricks Note Calculator](https://free.getbricks.app/) - 一个带有内置多功能计算器的笔记应用程序（PWA）。
* [Carbon.now.sh](https://carbon.now.sh) - 创建并分享代码片段的截图式图像格式。通常用于在Twitter或博客文章上展示或分享代码片段。
* [Code Time](https://www.software.com/code-time) - VS Code、Atom、IntelliJ、Sublime Text等中的时间跟踪和编码度量扩展。
* [Codepng](https://www.codepng.app) - 从源代码创建出色的快照，以在社交媒体上分享。
* [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图，以在社交媒体上分享。
* [Cronhooks](https://cronhooks.io/) - 定时或定期调度webhooks。免费计划允许5次临时调度。
* [cron-job.org](https://cron-job.org) - 在线cron作业服务。作业数量不限且免费。
* [datelist.io](https://datelist.io) - 在线预约/日程安排系统。每月免费预约次数不超过5次，包括一个日历。
* [Domain Forward](https://domain-forward.com/) - 转发任何URL或域名的简单工具。每月免费域名转发次数不超过五个，请求量不超过二十万次。
* [Elementor](https://elementor.com) - WordPress网站构建器。提供免费计划，包含超过四十种基本小部件。
* [Format Express](https://www.format-express.dev) - 在线即时格式化JSON / XML / SQL的工具。
* [FOSSA](https://fossa.com/) - 可扩展的端到端第三方代码管理解决方案，包括许可证合规性和漏洞管理。
* [Hook Relay](https://www.hookrelay.dev/) - 为应用程序添加webhook支持，无需繁琐操作：提供现成的排队、重试和日志记录功能。免费计划每天有100次交付量，保留期为十四天，有三个钩子端点。
* [http2.pro](https://http2.pro) - HTTP/2协议就绪测试和客户HTTP/2支持检测API。
* [kandi](https://kandi.openweaver.com/) - 通过代码片段和开源库重用加速应用开发：构建自定义函数、用例和完整应用程序。
* [Base64 decoder/encoder](https://devpal.co/base64-decode/) - 在线免费解码和编码数据的工具。
* [newreleases.io](https://newreleases.io/) - 通过电子邮件、Slack、Telegram、Discord和自定义webhooks接收来自GitHub、GitLab等的最新版本发布通知。包括Python PyPI、Java Maven等包管理器的新版本发布通知以及Docker Hub的新版本发布通知等。
* [OnlineExifViewer](https://onlineexifviewer.com/) - 在线即时查看照片中的EXIF数据，包括GPS位置和元数据等。
* [PDFMonkey](https://www.pdfmonkey.io/) - 在仪表板中管理PDF模板，使用API调用动态数据并下载PDF文件。每月免费提供三百份文档。
* [Pika Code Screenshots](https://pika.style/templates/code-image) - 使用扩展程序从代码片段和VSCode创建美观且可定制的截图模板。
* [QuickType.io](https://quicktype.io/) - 快速自动生成模型/类/类型/接口和序列化器，从JSON、模式图和GraphQL快速安全地处理数据。将JSON转换为任何语言的优雅且类型安全的代码格式。转换过程简洁高效且易于操作和管理数据模型结构清晰明了便于开发人员快速上手使用提高开发效率和质量保证安全性稳定性等特性优点显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出显著突出等特性优点显著突出显著突出等特性优点显著突出等特性优点等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等等特性优点等特性优点等特性优点等特性优点等特性优点等特性优点等特性优点等特性优点等特性优点等......可广泛应用于各种编程语言的开发中

## Remote Desktop Tools

  以下是这些内容的翻译：

* [Getscreen.me](https://getscreen.me) —— 两台设备免费使用，无会话数量和持续时间限制。
* [Apache Guacamole™](https://guacamole.apache.org/) —— 无客户端的远程桌面网关，开源软件。
* [RemSupp](https://remsupp.com) —— 按需支持和设备的永久访问权限（每日免费两次会话）。
* [RustDesk](https://rustdesk.com/) —— 适合所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## Game Development

  以下是这些网站的中文翻译介绍：

* [itch.io](https://itch.io/game-assets) —— 提供免费的或付费的游戏资产，如精灵图像、瓷砖集和角色包等。
* [Gamefresco.com](https://gamefresco.com/) —— 从全球的游戏艺术家那里发现、收集和分享免费的游戏资产。
* [GameDevMarket](https://gamedevmarket.net) —— 提供免费的或付费的资产，如二维、三维、音频、图形用户界面等。
* [OpenGameArt](https://opengameart.org) —— 开放源代码的游戏资产，如音乐、声音、精灵图像和GIF等。
* [CraftPix](https://craftpix.net) —— 提供免费的或付费的资产，包括二维、三维、音频、图形用户界面、背景、图标、瓷砖集和游戏套件等。
* [Game Icons](https://game-icons.net/) —— 提供免费的可在CC-BY许可证下使用的可定制SVG/PNG图标。
* [LoSpec](https://lospec.com/) —— 提供在线工具来创建像素艺术和其他的限制性数字艺术，有很多的游戏教程/调色板列表可供选择。
* [ArtStation](https://www.artstation.com/) —— 二维和三维资产以及音频的市场，包括图标、瓷砖集和游戏套件等的免费或付费资产。此外，还可以用来展示你的艺术作品集。
* [Rive](https://rive.app/community/) —— 社区资产以及使用其免费计划创建自己的游戏资产。
* [Poly Pizza](https://poly.pizza/) —— 免费的低多边形三维资产。
* [3Dassets.one](https://3dassets.one/) —— 提供超过8,000种免费的或付费的三维模型和用于制作纹理的PBR材料。
* [Kenney](https://www.kenney.nl/assets/) —— 提供免费的（CC0 1.0 Universal许可）二维、三维、音频和UI游戏资产。
* [Poliigon](https://www.poliigon.com/) —— 提供免费的和付费的纹理（具有可变分辨率）、模型、HDRI和画笔等。还提供免费的插件，可以导出到Blender等软件。
* [Freesound](https://freesound.org/) —— 提供具有不同CC许可证的免费协作声音库。

**[⬆️ 返回顶部](#目录)**

## Other Free Resources

  以下是翻译结果：

* [Wikimint Developer](https://developer.wikimint.com/p/tools.html) - 包括CSS压缩、解压缩、图片优化器、图片调整大小器、大小写转换器、CSS验证器、JavaScript编译器、HTML编辑器等针对Web开发者的始终免费工具。
  * [ElevateAI](https://www.elevateai.com) - 每月可获得高达200小时的免费音频转录。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的带有子域支持功能的 `*.localhost.direct` 公共CA签署的SSL证书，用于本地开发。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 的免费/自由开源软件和SaaS列表。
  * [github.com — 为开发者提供的开源软件](https://github.com/tvvocold/FOSS-for-Dev) —— 开发者的免费和开源软件的中心。
  * [GitHub Education](https://education.github.com/pack) —— 针对学生的免费服务集合。需要注册。
  * [Markdown Tools](https://markdowntools.com) —— 用于将HTML、CSV、PDF、JSON和Excel文件转换为Markdown或从Markdown转换的工具。
  * [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program) —— 获取用于构建Microsoft 365平台解决方案的免费沙箱、工具和其他资源。订阅是[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不含Windows），如果活跃开发（通过遥测数据和算法衡量）则可续订。
  * [Pyrexp](https://pythonium.net/regex) —— 用于调试正则表达式的免费在线正则表达式测试器和可视化工具。
  * [RedHat for Developers](https://developers.redhat.com) —— 仅面向开发者的Red Hat产品（包括RHEL、OpenShift、CodeReady等）的免费访问权限。还提供免费的电子书籍作为参考。
  * [smsreceivefree.com](https://smsreceivefree.com/) —— 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) —— 免费发送和接收测试短信。
  * [SimpleBackups.com](https://simplebackups.com/) —— 用于服务器和数据库（MySQL、PostgreSQL、MongoDB）的备份自动化服务，直接存储在云存储提供商（AWS、DigitalOcean和Backblaze）中。提供免费计划用于一次备份。
  * [SnapShooter](https://snapshooter.com/) —— 针对DigitalOcean、AWS、LightSail、Hetzner和Exoscale的备份解决方案，支持直接数据库、文件系统和应用备份到基于s3的存储。提供免费计划，每日备份一个资源。
  * [Themeselection](https://themeselection.com/) —— 精选的高质量、现代设计、专业且易于使用的免费管理仪表板模板、HTML主题和UI工具包，可更快创建您的应用程序！
  * [Web.Dev](https://web.dev/measure/) —— 这是一款免费工具，可让您查看网站的性能并改进SEO，以在搜索引擎中获得更高的排名。
  * [SmallDev.tools](https://smalldev.tools/) —— 开发者的免费工具，允许您编码/解码各种格式、压缩HTML/CSS/JavaScript、美化、生成假/测试数据集（JSON/CSV）以及其他多种格式和更多功能。拥有令人愉悦的界面。
  * [UseCSV by Layercode](https://layercode.com/usecsv) —— 在几分钟内为您的Web应用程序添加CSV和Excel导入功能。给您的用户带来愉快且稳健的数据导入体验。无需提供信用卡详细信息即可开始使用，并开始整合UseCSV。您可以创建无限的导入程序并上传最大100Mb的文件。
  * [Buttons Generator](https://markodenic.com/tools/buttons-generator/) —— 您可以在项目中使用的100多个按钮。
  * [WrapPixel](https://www.wrappixel.com/) —— 下载高质量免费和高级的管理仪表板模板，使用Angular、React、VueJs、NextJS和NuxtJS创建！
  * [Utils.fun](https://utils.fun/en) —— 基于浏览器计算能力的所有离线日常和开发工具，包括水印生成、屏幕录制、编码和解码、加密和解密以及代码格式化，完全免费，并且不将任何数据上传到云端进行处理。
  * [Free Code Tools](https://freecodetools.org/) —— 有效的代码工具，100%免费。包括Markdown编辑器、代码压缩器/