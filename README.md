# free-for.dev

开发人员和开源作者现在可以使用许多提供免费服务的平台，但是要找到所有这些平台并做出明智的决定需要花费大量时间。

这是一个包含免费开发者服务层的软件（[SaaS](https://zh.wikipedia.org/wiki/软件即服务) （软件即服务）、[PaaS](https://zh.wikipedia.org/wiki/平台即服务)（平台即服务）、[IaaS](https://zh.wikipedia.org/wiki/基础设施即服务)（基础设施即服务）等）和其他服务的列表。

这个列表的范围仅限于基础设施开发人员（系统管理员、[DevOps](https://zh.wikipedia.org/wiki/DevOps) 实践者等）可能会觉得有用的东西。我们喜欢所有免费的服务，但最好保持主题的连贯性。有时界限会变得模糊，所以这是一种有主见的选择；如果我不接受你的贡献，请不要感到冒犯。

这个列表是由 1600 多人通过 [Pull Requests](https://github.com/ripienaar/free-for-dev) 、审核、想法和工作制作而成的。你也可以通过发送 [Pull Requests](https://github.com/ripienaar/free-for-dev) 来添加更多服务或删除已更改或停用的服务来帮助我们。

[![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅适用于即服务的产品，而不适用于自托管软件。要符合条件，服务必须提供免费层，而不仅仅是免费试用。免费层必须至少为一年，如果是按时间划分的。我们还从安全角度考虑免费层，因此单点登录（[SSO](https://zh.wikipedia.org/wiki/单点登录)）是可以的，但我不会接受仅将 [TLS](https://zh.wikipedia.org/wiki/%E4%BC%A0%E8%BE%93%E5%B1%82%E5%AE%89%E5%85%A8) 限制在付费层的服务。

# 目录

  * [主要云服务商的永久免费服务](#主要云服务商的永久免费服务)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [构件存储库](#构件存储库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成和持续部署](#持续集成和持续部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [地图数据可视化](#地图数据可视化)
  * [托管数据服务](#托管数据服务)
  * [设计和UI](#设计和UI)
  * [设计灵感](#设计灵感)
  * [开发者博客平台](#开发者博客平台)
  * [域名系统](#域名系统)
  * [Docker相关](#Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式AI](#生成式AI)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际手机号码验证API和SDK](#国际手机号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息队列和流媒体](#消息队列和流媒体)
  * [杂项](#misc

## 主要云服务商的永久免费服务

  * [Google Cloud Platform（谷歌云平台）](https://cloud.google.com)
    * App Engine - 每天28个前端实例小时，九个后端实例小时
    * Cloud Firestore - 1GB存储，每天50,000次读取，20,000次写入，20,000次删除
    * Compute Engine - 一个非抢占式的e2-micro实例，30GB HDD，5GB快照存储（仅限于某些区域），每月从北美到所有区域的1 GB网络出口（不包括中国和澳大利亚）
    * Cloud Storage - 5GB，1GB网络出口
    * Cloud Shell - 基于Web的Linux shell/主要IDE，具有5GB的持久存储，每周60小时限制
    * Cloud Pub/Sub - 每月10GB的消息
    * Cloud Functions - 每月200万次调用（包括后台和HTTP调用）
    * Cloud Run - 每月200万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月从北美1 GB网络出口
    * Google Kubernetes Engine - 一个区域集群的集群管理费为零，每个用户节点按照标准Compute Engine定价收费
    * BigQuery - 每月1 TB的查询，10 GB的存储
    * Cloud Build - 每天120个构建分钟
    * Cloud Source Repositories - 最多5个用户，50 GB存储，50 GB出口
    * [Google Colab（谷歌Colab）](https://colab.research.google.com/) - 免费的Jupyter Notebooks开发环境。
    * [idx.dev（idx.dev）](https://idx.dev)谷歌项目IDX。在谷歌云上运行的在线VSCode。
    * 完整、详细列表 - https://cloud.google.com/free

  * [Amazon Web Services（亚马逊网络服务）](https://aws.amazon.com)
    * [CloudFront（云前端）](https://aws.amazon.com/cloudfront/) - 每月1TB出口和200万函数调用
    * [CloudWatch（云监控）](https://aws.amazon.com/cloudwatch/) - 10个自定义指标和十个报警
    * [CodeBuild（代码构建）](https://aws.amazon.com

    * 日志分析 - 每日500MB日志
    * 完整、详细列表 - https://www.ibm.com/cloud/free/ （IBM云免费服务）

  * [Cloudflare](https://www.cloudflare.com/)（Cloudflare）
    * [应用服务](https://www.cloudflare.com/plans/) - 不限个数域名的免费DNS，DDoS保护，CDN以及免费SSL，防火墙规则和页面规则，WAF，BotMitigation，免费不限制流量率限制 - 每个域名1个规则，分析，电子邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时活动日志，三个网络位置
    * [Cloudflare隧道](https://www.cloudflare.com/products/tunnel/) - 可以通过隧道将本地运行的HTTP端口暴露给trycloudflare.com上的一个随机子域名，使用[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)，无需帐户。更多功能（TCP隧道，负载均衡，VPN）在[零信任](https://www.cloudflare.com/products/zero-trust/)免费计划中。
    * [Workers](https://developers.cloudflare.com/workers/) - 在Cloudflare的全球网络上免费部署无服务器代码—每日100k请求。
    * [Workers KV](https://developers.cloudflare.com/kv) - 每日100k次读取请求，每日1000次写入请求，每日1000次删除请求，每日1000次列出请求，1 GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10 GB，每月1百万类A操作，每月1千万类B操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取， 每日10万行写入，1 GB存储
    * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署Web应用程序。每月500次构建，100个自定义域名，集成SSL，不限访问席位，不限预览部署，并通过Cloudflare Workers集成实现全

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 一种协作解决方案，用于可视化构建和管理从端到端的云基础设施。
  * [Cloud 66](https://www.cloud66.com/) - 适用于个人项目的免费解决方案（包括一个部署服务器和一个静态站点），Cloud 66 提供了您所有需要的功能来构建、部署和扩展您的应用程序，无需处理“服务器配置”方面的麻烦。
  * [Pulumi](https://www.pulumi.com/) —— 一种使用熟悉的编程语言和工具来构建、部署和管理云基础设施的现代基础设施即代码平台。
  * [terraform.io](https://www.terraform.io/) —— Terraform Cloud。对于最多 500 个资源，提供免费的远程状态管理和团队协作功能。
  * [scalr.com](https://scalr.com/) - Scalr 是一种 Terraform 自动化和协作 (TACO) 产品，用于增强基础设施和配置的协作和自动化，所有这些都由 Terraform 管理。完全支持 Terraform CLI，集成了 OPA，并采用层次化配置模型。无单点登录（SSO）费用。所有功能都包含在内。可以在免费版中使用每月最多 50 次运行。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员自动化在 AWS 上的部署。我们的免费版可以让单个开发者部署无限数量的静态站点、Web 服务和环境。我们每月提供 20 次作业执行并包括预览和自动部署功能在免费版中。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 为最多 5 名用户提供无限公共和私有 Git 代码仓库，并提供 [Pipelines](https://confluence.atlassian.com/bitbucket/bitbucket-pipelines-878777644.html) 进行 [CI/CD](https://zh.wikipedia.org/wiki/%E9%9B%86%E6%88%90%E9%83%A8%E7%BD%B2) 
  * [chiselapp.com](https://chiselapp.com/) — 提供无限公共和私有 [Fossil](https://zh.wikipedia.org/wiki/Fossil) 代码仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 提供一个免费项目，包含 100 MB 空间和两个用户
  * [Codeberg](https://codeberg.org/) — 为免费和开源项目提供无限公共和私有 Git 代码仓库（无限协作者）。由 [Forgejo](https://forgejo.org/) 提供支持。通过 [Codeberg Pages](https://codeberg.page/) 提供静态网站托管。通过 [Codeberg's CI](https://docs.codeberg.org/ci/) 提供 [CI/CD](https://zh.wikipedia.org/wiki/%E9%9B%86%E6%88%90%E9%83%A8%E7%BD%B2) 托管。通过 [Codeberg Translate](https://translate.codeberg.org/) 提供翻译托管。包括包和容器托管、项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 提供无限私有和公有仓库。永久免费。由 [GitLab](https://zh.wikipedia.org/wiki/GitLab) 和 [Sapphire](https://zh.wikipedia.org/wiki/%E7%8F%A0%E7%9F%B3) 提供支持。不提供 [CI/CD](https://zh.wikipedia.org/wiki/%E9%9B%86%E6%88%90%E9%83%A8%E7%BD%B2)
  * [GitHub](https://github.com/) — 提供无限公有仓库和无限私有仓库（无限协作者）。包括 [CI/CD](https://zh.wikipedia.org/wiki/%E9%9B%86%E6%88

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑、过滤复杂的JSON数据，生成漂亮的表格。可以保存和分享JSON数据通过链接。
  * [Zerosheets](https://zerosheets.com) - 将Google Sheets电子表格转化为强大的API，快速开发原型、网站、应用程序等。免费计划每月有500个请求。
  * [IP.City](https://ip.city) — 每天100次免费的IP地理位置请求
  * [Abstract API](https://www.abstractapi.com) — 适用于各种用例的API套件，包括IP地理位置、性别检测、电子邮件验证等。
  * [Apify](https://www.apify.com/) — 网页抓取和自动化平台，用于为任何网站创建API并提取数据。已经构建好的抓取器、集成代理和自定义解决方案。免费计划包含每月5美元的平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的API或自动化工具（如Zapier & Airtable）自动生成图像和PDF文档。不需要CSS/HTML。免费计划每月包含50张图片和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 所有工具您需要来完全理解API和后端的运行情况。具有自动API合同验证和监控。免费计划涵盖每月高达20,000个请求的服务器。
  * [APIVerve](https://apiverve.com) - 即刻获取120+个免费API，具有高质量、连贯性和可靠性。免费计划每月包含高达50个API Token。
  * [Arize AI](https://arize.com/) - 用于模型监控和根因分析（如数据质量和性能漂移）的人工智能可观察性。两个模型免费。
  * [Atlas工具包](https://atlastk.org/) - 轻量级库，用于开发单页Web应用程序，这些应用程序可以立即访问。适用于Java、Node.js、Perl、Python和Ruby。
  * [Beeceptor](https://beeceptor.com) - 在几秒钟内模拟REST API，模

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的数据库架构设计和建模工具，提供包含2个数据库模型和每个模型10个表的免费入门计划。
  * [DeepAR](https://developer.deepar.ai) — 支持任何平台的增强现实面部滤镜，仅需一个SDK。免费计划提供最多10个月活跃用户（MAU）和跟踪最多4个面部
  * [Deepnote](https://deepnote.com) - 一款新的数据科学笔记本。 Jupyter 兼容实时协作和云端运行。免费层包括无限个人项目、最多750小时的标准硬件和最多3个编辑器的团队。
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的网络爬虫和数据提取平台，用于将任何网站转换为数据集或作为API进行处理。免费计划包括每月5K页请求。
  * [Disease.sh](https://disease.sh/) — 提供准确数据以构建与Covid-19相关的有用应用程序的免费API。
  * [Doczilla](https://www.doczilla.app/) — SaaS API，直接从HTML/CSS/JS代码生成屏幕截图或PDF。免费计划每月允许250个文档。
  * [Doppio](https://doppio.sh/) — 管理API，使用顶级渲染技术生成和私存PDF和截图。免费计划每月允许400个PDF和截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 面向移动、Web和物联网应用程序的开源REST API后端。连接任何SQL/NoSQL数据库、文件存储系统或外部服务，它会立即创建一个具有实时文档和用户管理的综合REST API平台。
  * [DynamicDocs](https://advicement.io) - 使用基于LaTeX模板的JSON到PDF API生成PDF文档。免费计划每月允许50个API调用和访问模板库。
  * [Efemarai](https://efemarai.com) - 用于机器学习模型和数据的测试和调试平台。可视化任何计算图。开发者每月

  * [IPTrace](https://iptrace.io) — 一个简单的API，提供可靠且有用的 IP 地理位置数据给你的业务。
  * [JSON2Video](https://json2video.com) - 一个视频编辑 API，用于自动化视频营销和社交媒体视频，既可以通过编程实现，也可以无需编码。
  * [JSON IP](https://getjsonip.com) — 返回发出请求的客户端的公共 IP 地址。对于免费版本，不需要注册。使用 [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS) ，可以直接从浏览器使用客户端 [JS](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 请求数据。该服务对于监测客户端和服务器 IP 地址的变化很有用。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 一个免费服务，帮助开发者存储 [JSON](https://www.json.org/json-zh.html) 对象，并将这些 [JSON](https://www.json.org/json-zh.html) 对象用作应用程序中的 [REST API](https://restfulapi.net/) 。
  * [JSONing](https://jsoning.com/api/) — 从 [JSON](https://www.json.org/json-zh.html) 对象创建一个假的 [REST API](https://restfulapi.net/) ，并自定义 [HTTP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP) 状态代码、头部和响应体。
  * [konghq.com](https://konghq.com/) — [API](https://zh.wikipedia.org/wiki/API) 市场和强大的私有和公有 [API](https://zh.wikipedia.org/wiki/API) 工具。使用免费版本，一些功能（如监控、报警和支持）有限。
  * [Kreya](https://kreya.app) — 免费的 [gRPC](https://grpc.io/) 图形界面客户端，用于调用和测试 [gRPC](https://grpc.io/) [API](https://zh.wikipedia.org/wiki/API) 。可以通过服务器反射导入 [gRPC](https://grpc.io/) [API](https://zh.wikipedia.org/wiki/API) 。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进你的

  以下是将Markdown文本翻译成中文，同时遵守提供的规则：
* [Insomnia](https://insomnia.rest) - 开源的API客户端，用于设计和测试API，支持REST和GraphQL
  * [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化的完整平台。所有计划都包含每月20,000次免费运行，足以满足大多数小型企业的ETL需求。
  * [Preset Cloud](https://preset.io/) -托管的Apache Superset服务。对于最多5个用户的团队，永久免费，功能包括无限的仪表盘和图表、无代码图表构建器和协作SQL编辑器。
  * [PromptLeo](https://promptleo.com/) - 面向创作者和开发者的提示工程平台。它提供提示工程库、表单和API。免费计划提供一个提示形成、一个提示API端点和每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用简单的电子表格公式，以GPT-3等大型语言模型分析和转换文本在Google表格中。前2,000个积分每月免费。
  * [Crawlbase](https://crawlbase.com/) — 不需要代理、基础设施或浏览器来爬取和抓取网站。我们为您解决验证码并防止被屏蔽。前1000次调用免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共API列表。
  * [Supportivekoala](https://supportivekoala.com/) — 允许您通过模板自动生成图片。免费计划允许您每周创建最多100张图片。
  * [QuickMocker](https://quickmocker.com/) — 在自己的子域名下管理在线假API终端，为webhooks开发和测试转发请求到本地URL，使用正则表达式和多个HTTP方法进行URL路径，优先考虑终端，响应模板的代码片段（动态或伪响应值）超过100个，从OpenAPI（Swagger）规范JSON格式导入，代理请求，通过IP地址和授权头限制终端。免费账户提供一个随机子域名，

  * [Webhook Store](https://www.openwebhook.io) - 第三方Webhook存储工具，支持在localhost（ngrok风格）调试。开源且可自托管。为个人提供免费的域名 *username*.github.webhook.store，并为公众提供免费的域名 *anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai) — 面向开发者的MLOps（机器学习运维）平台。通过实验跟踪、数据集版本管理和模型管理，能够更快地构建更好的模型。个人项目的免费版本包含100 GB的存储空间。
  * [wit.ai](https://wit.ai/) — 为开发者提供的NLP（自然语言处理）工具。
  * [wolfram.com](https://wolfram.com/language/) — 云端基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) — 将任意网站转换为可参数化的API。每月提供30,000次API调用。
  * [ZenRows](https://www.zenrows.com/) — 网页抓取API和代理服务器，可以绕过任何反爬虫解决方案，同时提供JavaScript渲染、旋转代理和地理定位。免费版本包含1,000次API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 提供无头浏览器、常住IP和直接定价的网页抓取API。每月提供1,000次免费API调用，并为学生和非营利组织提供额外的学分。
  * [ip-api](https://ip-api.com) — IP地址的地理位置API，非商业用途免费，免费版本无需API密钥，每分钟最多允许45个请求。
  * [WebScraping.AI](https://webscraping.ai) - 简单的网页抓取API，内置解析、Chrome渲染和代理服务器。每月提供2,000次免费API调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费的邮政编码API，提供全球邮编数据。每月最多10,000次免费请求。
  * [huggingface.co](https://huggingface.co) - 为Py

## 构件存储库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持多种包格式（如Maven、Docker、Cargo、Helm、PyPI、CocoaPods和GitLFS）的[工件库]( Artifact Repository)。包括包扫描工具XRay和[CI/CD]( Continuous Integration/Continuous Deployment )工具[Pipelines](https://www.google.com/search?q=Pipelines+CI%2FCD) （前身为Shippable），每月有2,000分钟的[CI/CD]( Continuous Integration/Continuous Deployment )时间的免费套餐。
  * [central.sonatype.org](https://central.sonatype.org) — Apache [Maven](https://maven.apache.org/)、[SBT](https://www.scala-sbt.org/)和其他构建系统的默认[工件库]( Artifact Repository)。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公有[Maven](https://maven.apache.org/)和[PyPi](https://pypi.org/)仓库。开源项目免费使用。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中的仓库服务，支持[Java](https://www.java.com/)/[Maven](https://maven.apache.org/)、[RedHat](https://www.redhat.com/)、[Debian](https://www.debian.org/)、[Python](https://www.python.org/)、[Ruby](https://www.ruby-lang.org/)、[Vagrant](https://www.vagrantup.com/)等。免费套餐+开源项目免费。
  * [jitpack.io](https://jitpack.io/) — [GitHub](https://github.com/)上的[JVM](https://www.java.com/)和[Android](https://www.android.com/)项目的[Maven](https://maven.apache.org/)仓库，公有项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — [Maven](https://maven.apache.org/)、[RPM](https://rpm.org/)、[DEB](https://www.debian.org/)、[PyPi](https://pypi.org/)、[NPM](https://www.npmjs.com/)和[RubyGem](https://rubygems.org/)包的托管仓库

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的基于云的代码片段管理器，用于个人和协作代码。
  * [Bitwarden](https://bitwarden.com) — 最容易和最安全的方式让个人、团队和企业组织存储、共享和同步敏感数据。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用。公共群组、无限用户、历史记录和集成均无限制，也提供自托管的开源版本。
  * [cally.com](https://cally.com/) — 找到会议的最佳时间和日期。使用简单，对小型和大型团队都很有效。
  * [Calendly](https://calendly.com) — Calendly是连接和安排会议的工具。免费计划每用户提供1个日历连接和无限会话。也提供桌面和移动应用。
  * [Discord](https://discord.com/) — 支持公开/私人房间。支持Markdown文本、语音、视频和屏幕共享。无限用户免费。
  * [Telegram](https://telegram.org/) — Telegram适合所有想要快速、可靠消息和通话的人。商业用户和小团队可能会喜欢大型群组、用户名、桌面应用和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建工具。可以截屏、记录过程并与团队协作。也支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 与团队实时通话和协作。支持IDE配对编程、终端共享、语音、视频和屏幕共享。适用于小团队免费使用。
  * [Dyte](https://dyte.io) - 最适合开发者的实时视频和音频SDK，具有增强生产力和参与度的协作插件。免费套餐包括每月10,000分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/) — 信息组织工具。可以共享笔记并与他人合作。
  * [Fibery](https://fibery.io/) — 连接

  * [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，通过简单易用的界面和有价值的统计数据帮助您更好地管理时间。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用程序，无限用户和消息历史，永久免费。
  * [Raindrop.io](https://raindrop.io) - 适用于 macOS、Windows、Android、iOS 和 Web 的私密安全书签应用程序。免费无限书签和协作。
  * [element.io](https://element.io/) — 一个建立在 Matrix 上的去中心化和开源通信工具。群聊、直接消息、加密文件传输、语音和视频聊天，并且可以轻松集成其他服务。
  * [Rocket.Chat](https://rocket.chat/) - 开源的通信平台，具有 Omnichannel 功能、Matrix Federation、与其他应用程序桥接、无限消息和完整消息历史。
  * [seafile.com](https://www.seafile.com/) — 私有或云存储、文件共享、同步、讨论。云版本仅有 1 GB
  * [Sema](https://www.semasoftware.com/) - 免费的开发者作品集工具，可以合并和快照多个存储库的贡献到单个报告中。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，可以直接从浏览器中与合作伙伴分享您的屏幕，无需下载或注册。
  * [Slab](https://slab.com/) — 现代的面向团队的知识管理服务。最多 10 名用户免费。
  * [slack.com](https://slack.com/) — 对于无限用户来说有一些功能限制，永久免费
  * [Spectrum](https://spectrum.chat/) - 免费创建公共或私人社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页面的状态页面。您可以跟踪上游提供商的状态页面吗？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容策划和笔记的视觉协作应用程序。最多 3 个 Walls，

  * [Pullflow](https://pullflow.com) — Pullflow 提供了一个基于 [AI](人工智能) 的平台，用于在 [GitHub](https://github.com) 、[Slack](https://slack.com) 和 [VS Code](https://code.visualstudio.com) 上进行代码审查合作。
  * [Webex](https://www.webex.com/) — 视频会议，免费计划提供每次会议 40 分钟，支持 100 位与会者。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议，免费计划提供每次会议 50 分钟，支持 100 位参与者。
  * [GitBook](https://www.gitbook.com/) — 一个用于捕获和记录技术知识的平台 —— 从产品文档到内部知识库和 [API](应用程序接口) 。个人开发者免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单、最快、最安全的文件传输和分享接口。无需订阅即可发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/) — 一个基于 [JavaScript](https://www.javascript.com) 和 [Crypto](加密技术) 的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/) — 一个开源的 [Discord](https://discord.com/) 替代品，尊重您的隐私。它也提供了来自 [Discord](https://discord.com/)的大部分专有功能，完全免费。 [Revolt](https://revolt.chat/) 是一个安全、快速的全能应用，100% 免费。所有功能均免费。它还支持（官方和非官方）插件，区别于大多数主流聊天应用。
  * [Tencent RTC](https://trtc.io/) — [Tencent](腾讯) 实时通信（[TRTC](https://trtc.io/)）提供群组音频/视频通话解决方案。首年每月 10,000 分钟免费。
  * [Pastefy](https://pastefy.app/) - 一个美观简单的 [Pastebin](https://pastebin.com/) ，具有可选的客户端加密、多标签粘贴、 [API](https://past

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) —适用于 [Drupal](https://www.drupal.org/ "内容管理系统") 网站的托管服务。开发者可使用免费套餐。免费开发工具（如 [Acquia Dev Desktop](https://dev.acquia.com/ "开发工具")）也可供使用。
  * [Contentful](https://www.contentful.com/) — 无头 [CMS](https://zh.wikipedia.org/wiki/%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F "内容管理系统")。云端内容管理和交付 [API](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%9E%84%E6%8E%A5%E8%F9%9A "应用程序接口")。包括一个免费的社区空间，包含五个用户，25K 记录，48 个内容类型，2 个区域设置。
  * [Cosmic](https://www.cosmicjs.com/) — 无头 [CMS](https://zh.wikipedia.org/wiki/%E5%86%85%E5%AE%B9%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F "内容管理系统") 和 [API](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%9E%84%E6%8E%A5%E8%F9%9A "应用程序接口") 工具包。开发者可使用免费的个人计划。
  * [Crystallize](https://crystallize.com) — 支持电子商务的无头 [PIM](https://zh.wikipedia.org/wiki/%E4%BA%A7%E5%93%81%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86 "产品信息管理")。内置 [GraphQL](https://graphql.org/ "查询语言") [API](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento是一个免费的无代码应用生成器（No code app builder）。在自动生成的后端代码中，用户可以完全访问源代码和无限的API和路由，从而实现广泛的集成。免费计划包括三个项目、五个表格和一个谷歌（Google）插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody是一个使用人工智能（AI）和对代码库深入理解来帮助开发人员更快地编写和理解代码的编码助手。Cody为开发人员提供了LLM（包括本地推理）的选择，支持各种集成开发环境（IDE），支持所有流行编程语言，并且有免费计划。免费计划每月为开发人员提供20条聊天消息（使用Claude 3 Sonnet作为LLM）和500个自动完成（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — DhiWise的创新代码生成技术可以无缝地将Figma设计转换为动态Flutter和React应用，优化了工作流程，帮助开发人员比以往任何时候都快地创建出色的移动和网络体验。
  * [Codeium](https://www.codeium.com/) — Codeium是一个免费的AI驱动的代码补全工具，支持20多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并集成所有重要的独立和网络集成开发环境（IDE）。
  * [Fern](https://buildwithfern.com) - 编写API定义并使用它们在流行语言（如TypeScript、Python、Java、Go等）中生成软件开发工具包（SDK）/客户端库。完全支持OpenAPI。免费层可以生成最多20个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于C#。Metalama在编译期间自动生成代码的样板，从而保持源代码的清洁。它适用于开源项目，为商业友好免费层次包括三个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是VSCode、

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个用于编写、审查和部署代码的完整工作流程，免费账户适用于一个用户和一个存储空间为100MB的仓库
  * [browserling.com](https://www.browserling.com/) — 交互式跨浏览器测试，免费使用3分钟，支持MS IE 9 dướiVista，分辨率为1024 x 768
  * [codacy.com](https://www.codacy.com/) — 为 [PHP](https://www.php.net/)、[Python](https://www.python.org/)、[Ruby](https://www.ruby-lang.org/)、[Java](https://www.java.com/)、[JavaScript](https://www.javascript.com/)、[Scala](https://www.scala-lang.org/)、[CSS](https://www.w3schools.com/css/) 和 [CoffeeScript](https://coffeescript.org/) 提供自动代码审查，免费适用于无限公共仓库和私有仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 自动化的Infrastructure as Code审查工具，适用于[DevOps](https://devops.com/)，集成[GitHub](https://github.com/)、[Bitbucket](https://bitbucket.org/)和[GitLab](https://about.gitlab.com/)（包括自托管）。除了标准语言外，还支持[Ansible](https://www.ansible.com/)、[Terraform](https://www.terraform.io/)、[CloudFormation](https://aws.amazon.com/cloudformation/)、[Kubernetes](https://kubernetes.io/)等（开源免费）
  * [CodeBeat](https://codebeat.co) — 适用于多种语言的自动代码审查平台。免费适用于公共仓库，并支持[Slack](https://slack.com/)和电子邮件集成
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查，免费适用于开源和无限组织所有的私有仓库（最多4个协作者）。也适用于免费的学生和机构
  * [codecov.io](https://codecov.io/) — 代码覆盖工具([SaaS](https://www.salesforce.com/cn/t

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 检索和依赖更新通知，支持32种不同包管理器，开源项目免费
  * [Namae](https://namae.dev/) - 检索GitHub、Gitlab、Heroku、Netlify等多个网站中项目名称的可用性
  * [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) — 显示`TODO`注释（和其他标记），以确定需要改进的代码区域
  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和共享代码片段，具有强大的代码截图工具、预设模板和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动的 Web 无障碍测试（Automated web accessibility testing）引入您的开发工作流中。它对开源项目和教育目的免费。
  * [appcircle.io](https://appcircle.io) — 一个针对移动应用的企业级 DevOps 平台，它自动化移动应用的构建、测试和发布过程，从而实现更快、更高效的发布周期。对于每次构建最长 30 分钟、每月 20 次构建和 1 个并发构建，均可免费使用。
  * [appveyor.com](https://www.appveyor.com/) — 为 Windows 提供的持续交付（CD）服务，免费用于开源项目。
  * [Argonaut](https://argonaut.dev/) - 在几分钟内在您的云环境中部署应用和基础设施。支持在 Kubernetes 和 Lambda 环境中进行自定义和第三方应用部署。免费层允许针对 5 个域和 2 个用户进行无限应用和部署。
  * [bitrise.io](https://www.bitrise.io/) — 一个适用于移动应用（无论是原生还是混合应用）的持续集成和持续交付（CI/CD）工具。每月有 200 次免费构建、10 分钟的构建时间和 2 个团队成员。开源项目每月可获得 45 分钟的构建时间、+1 并发性和无限团队大小。
  * [buddy.works](https://buddy.works/) — 一个提供 5 个免费项目和 1 个并发运行（每月 120 次执行）的 CI/CD 工具。
  * [Buildkite](https://buildkite.com) CI 流水线每月 3 个用户和 5,000 次作业分钟免费。测试分析开发人员层免费包括每月 100,000 次测试执行，并为开源项目提供更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 提供数据库 CI/CD 和 DevOps 服务，免费使用人数不超过 20 人，数据库实例不超过 10 个。
  * [CircleCI](https://circleci.com/) — 一个全面免费的

## Testing

  * [Applitools.com](https://applitools.com/) — 为web、原生移动应用和桌面应用提供智能视觉验证。集成几乎所有的自动化解决方案（如 [Selenium](https://www.selenium.dev/) 和 [Karma](https://karma-runner.github.io/)）以及远程运行器（[Sauce Labs](https://saucelabs.com/)、[Browser Stack](https://www.browserstack.com/)）。对于开源项目免费。单用户免费级别，每周检查点有限。
  * [Appetize](https://appetize.io) — 在基于云的[Android](https://www.android.com/) 手机/平板电脑模拟器和[iPhone](https://www.apple.com/iphone/)/[iPad](https://www.apple.com/ipad/) 模拟器中测试您的 [Android](https://www.android.com/) 和 [iOS](https://www.apple.com/ios/) 应用程序，直接在您的浏览器中。免费级别包括两个并发会话，每月使用 30 分钟。应用程序大小无限制。
  * [Apptim](https://apptim.com) — 一种移动测试工具，允许没有性能工程技能的人评估应用程序的性能和用户体验（[UX](https://en.wikipedia.org/wiki/User_experience)）。使用您自己的设备的桌面版本完全免费，在 [iOS](https://www.apple.com/ios/) 和 [Android](https://www.android.com/) 上进行无限次测试。
  * [Argos](https://argos-ci.com) - 面向开发人员的开源视觉测试。项目不限，月度截图 5000 张。对于开源项目免费。
  * [Bencher](https://bencher.dev/) - 连续基准测试工具套件，用于捕获 [CI](https://en.wikipedia.org/wiki/Continuous_integration) 性能回归。对于所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[对于开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 轻量级 [Web](https://www.apple.com/safari/) 应用程序测试自动化工具。易于学习，无需编

  * [TestCollab](https://testcollab.com) - 一个用户友好的测试管理软件，其免费计划包括 [Jira](https://www.atlassian.com/software/jira)（项目管理工具）集成、无限项目、使用CSV/XLSx导入测试用例、时间跟踪和1 GB文件存储。
  * [testingbot.com](https://testingbot.com/) — [Selenium](https://www.selenium.dev/) 浏览器和设备测试，[免费用于开源项目](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 一个用于发布自动化测试结果和一个用于使用 [GitHub](https://github.com/)以代码方式实现手动测试的框架。该服务是 [免费用于开源项目](https://github.com/marketplace/testspace-com)，并且每月最多支持450个测试结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。集成到流行的测试框架中。开源软件开发者、个人、教育工作者和刚刚开始的小团队可以申请折扣和免费服务，超出基本的免费项目。
  * [UseWebhook.com](https://usewebhook.com) - 从浏览器捕获和检查 [Webhook](https://en.wikipedia.org/wiki/Webhook)（网络钩子）。可以转发到本地主机，也可以从历史记录中重放。完全免费使用。
  * [Vaadin](https://vaadin.com) — 使用 [Java](https://www.java.com/) 或 [TypeScript](https://www.typescriptlang.org/) 构建可扩展的 UI（用户界面），并使用集成工具、组件和设计系统来迭代更快、设计更好并简化开发过程。无限项目，五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成过程中使用唯一的 URL 调试和检查 Webhook 和 HTTP 请求。完全免费，您可以创建无限的 URL 并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 集成的应用安全平台，涵盖 SCA（[软件组件分析](Software Composition Analysis））、SAST（[静态应用安全测试](Static Application Security Testing））、CSPM（[云安全态势管理](Cloud Security Posture Management））、DAST（[动态应用安全测试](Dynamic Application Security Testing））、Secrets、IaC（[基础设施即代码](Infrastructure as Code））、Malware、容器扫描、EOL（[产品生命周期终止](End of Life）等）。免费计划包括两个用户、10个仓库、1个云、2个容器和1个域名的扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测网络中受损的系统
  * [Altcha.org](https://altcha.org/anti-spam) - 为网站和API提供的反垃圾邮件过滤器，基于自然语言处理和机器学习。免费计划每天每个域名200个请求。
  * [atomist.com](https://atomist.com/) — 更快、更方便的开发任务自动化方式。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — [Amazon Web Services (AWS)](Amazon Web Services) 安全性和合规性审计和监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 公共云基础设施的高置信度 GaussDB 指标，部分内容可在github（https://github.com/unknownhad/AWSAttacks）上获取，完整列表可通过API获取
  * [CodeNotary.io](https://www.codenotary.io/) — 开源平台，提供不可篡改的代码、文件、目录或容器认证
  * [crypteron.com](https://www.crypteron.com/) — 面向云的、开发者友好的安全平台，防止 .NET 和 Java 应用程序发生数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个用于分析和编码/解码数据的简单、直观的 Web 应用，不

  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码和自动密钥管理来加密和解密数据。适用于一个应用程序和每月高达1,000,000次加密的免费服务。
  * [Virgil Security](https://virgilsecurity.com/) — 为您的数字解决方案提供端到端加密、数据库保护、[IoT](https://baike.baidu.com/item/物联网) 安全等工具和服务。适用于最多250个用户的免费应用程序。
  * [Vulert](https://vulert.com) - Vulert持续监控您的开源依赖项以发现新漏洞，推荐修复方案，无需安装或访问您的代码库。适用于开源项目的免费服务。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键式扫描您的 [GraphQL](https://graphql.org/) 端点的安全性。免费，无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 搜索公开的 [GitHub](https://github.com/) 仓库、代码片段、问题和评论中的2000万个泄露的密钥。免费服务。


**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 为应用程序和 API 提供的细粒度授权服务。最多 1000 名月活跃用户和 100 个授权实例免费。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录 (SSO)、多因素认证 (MFA)、免密认证等。包含前端和后端应用的 SDK。最多 1000 名月活跃用户和五个身份提供者免费。
  * [Auth0](https://auth0.com/) —托管的单点登录。免费计划包含 25,000 名月活跃用户、无限制的社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - мгновенно将免密登录、一次性密码 (OTP)、两因素认证 (2FA)、单点登录 (SSO) 等功能添加到您的应用程序中。所有前端功能都包含在内。最多 5000 名月活跃用户免费。
  * [Authress](https://authress.io/) —身份验证登录和访问控制，支持无限的身份提供者，适用于任意项目。支持 Facebook、Google、Twitter 等。前 1000 次 API 调用免费。
  * [Authy](https://authy.com) - 在多个设备上进行双因素认证 (2FA)，支持备份。可以替代 Google Authenticator。最多 100 次成功认证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 一个用于编写、测试和部署访问策略的完整授权管理系统。细粒度授权和访问控制，最多 100 个月活跃主体免费。
  * [Clerk](https://clerk.com) — 用户管理、身份验证、两因素/多因素认证、预建 UI 组件用于登录、注册、用户资料等。最多 10,000 名月活跃用户免费。
  * [Cloud-IAM](https://www.cloud-iam.com/) — 基于 [Keycloak](https://www.keycloak.org/) 的身份和访问管理服务。最多 100 名用户和

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 您的移动应用测试必备平台，确保您的应用按照预期工作。免费计划：一个应用，分析，versions和安装无限制，以及反馈收集。
  * [Loadly](https://loadly.io) - iOS和Android应用分发服务，提供完全免费的服务，无限下载，高速下载，无限上传。
  * [Diawi](https://www.diawi.com) - 将iOS和Android应用直接部署到设备。免费计划：应用上传，密码保护链接，有效期1天，十次安装。
  * [InstallOnAir](https://www.installonair.com) - 在空中分发iOS和Android应用。免费计划：无限上传，私有链接，2天有效期（访客），60天（注册用户）。
  * [GetUpdraft](https://www.getupdraft.com) - 为测试分发移动应用。免费计划包括一个应用项目，三个应用版本，500 MB存储空间，和每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括五个应用，50次月下载，最大文件大小100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在 IaaS 上部署预准备好的应用。可以免费管理一个 AWS 微型实例（1 AWS micro instance）
  * [Esper](https://esper.io) — 针对 Android 设备的移动设备管理（MDM）和移动应用管理（MAM），支持 DevOps。可以免费使用 100 台设备和 25 MB 应用存储，需要一个用户许可。
  * [jamf.com](https://www.jamf.com/) — 面向 iPads、iPhones 和 Macs 的设备管理，允许免费管理 3 台设备。
  * [Miradore](https://miradore.com) — 设备管理服务。可以免费使用基本功能，跟踪和管理您的设备群，无限制设备数量。
  * [moss.sh](https://moss.sh) - 帮助开发者部署和管理 Web 应用和服务器。每月可免费进行 25 次 Git 部署。
  * [runcloud.io](https://runcloud.io/) - 主要针对 PHP 项目的服务器管理，免费支持 1 台服务器。
  * [ploi.io](https://ploi.io/) - 一种服务器管理工具，帮助轻松管理和部署服务器及网站。免费支持 1 台服务器。

**[⬆️ 返回顶部](#目录)**

## 消息队列和流媒体

  * [Ably](https://www.ably.com/) - 实时消息服务，具有存在感、持久性和保证交付功能。免费计划包括每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — [RabbitMQ](RabbitMQ消息队列)即服务。Little Lemur计划：每月最大100万条消息、最大20个并发连接、最大100个队列、最大10,000条排队消息、多个节点在不同的可用区。
  * [courier.com](https://www.courier.com/) — 单一API用于推送、应用内、电子邮件、聊天、短信和其他消息渠道，具有模板管理和其他功能。免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 为开发者提供的多渠道通知基础设施，具有预建的应用内收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接到云原生IoT消息代理。免费连接最多100个设备（无需信用卡），永久有效。
  * [knock.app](https://knock.app) – 面向开发者的通知基础设施。通过单个API调用发送到多个渠道，如应用内、电子邮件、短信、Slack和推送。免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟内将用户通知添加到任何软件。免费计划包括每月10,000个通知+100个短信和自动呼叫。
  * [Novu.co](https://novu.co) — 开源的通知基础设施，用于开发者。简单的组件和API，用于管理所有通信渠道的单一位置：电子邮件、短信、直接、应用内和推送。免费计划包括每月30,000个通知，保留期90天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。免费支持最多100个同时连接

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每日最多100k条日志（24小时保留）
  * [logentries.com](https://logentries.com/) — 每月最多5 GB（7天保留）
  * [loggly.com](https://www.loggly.com/) — 单用户免费，200MB/天（7天保留）
  * [logz.io](https://logz.io/) — 每天最多1 GB（1天保留）
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — Manage Engine提供的日志管理服务。免费计划提供50 GB存储空间，15天的存储保留和7天的搜索。
  * [papertrailapp.com](https://papertrailapp.com/) — 48小时搜索，7天存档，50 MB/月
  * [sematext.com](https://sematext.com/logsene) — 每天最多500 MB（7天保留）
  * [sumologic.com](https://www.sumologic.com/) — 每天最多500 MB（7天保留）
  * [logflare.app](https://logflare.app/) — 每个应用每月最多12,960,000条记录，3天保留
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月最多1 GB，3天保留。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月最多1,000个用户活动日志，1个月保留，适用于最多5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月200 GB的免费摄取，15天保留

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 为Open Source提供无限项目、字符串和协作者
  * [gitlocalize.com](https://gitlocalize.com) - 面向私有和公开仓库的免费和无限服务
  * [Lecto](https://lecto.ai/) - 机器翻译API，拥有免费套餐（30个免费请求，每个请求1000个翻译字符）。与Loco Translate Wordpress插件集成。
  * [lingohub.com](https://lingohub.com/) — 为3个用户免费，面向Open Source始终免费
  * [localazy.com](https://localazy.com) - 免费的1000个源语言字符串，支持无限语言，支持无限贡献者，并有针对启动和开源项目的特别优惠
  * [Localeum](https://localeum.com) - 免费支持1000个字符串，一个用户，无限语言，无限项目
  * [localizely.com](https://localizely.com/) — 面向Open Source免费
  * [Loco](https://localise.biz/) — 免费支持2000个翻译，支持无限翻译人员，项目内支持十种语言，项目内支持1000个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限的免费版，支持最多5个用户，面向Open Source免费
  * [POEditor](https://poeditor.com/) — 免费支持1000个字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费支持100个翻译键，支持无限字符串，支持无限语言，并有针对启动项目的特别优惠
  * [Texterify](https://texterify.com/) - 免费适用于单用户
  * [Tolgee](https://tolgee.io) - 提供免费的SaaS服务，翻译数量有限；同时有无限期免费的自托管版本
  * [transifex.com](https://www.transifex.com/) — 面向Open Source免费
  * [Translation.io](https://translation.io) - 面向Open Source免费
  * [Translized](https://translized.com) - 免费支持1000个字符串，

## Monitoring

  * [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监控器，间隔5分钟，具有自定义状态页，即使用于商业用途也可免费使用。通过电子邮件和Telegram Enjoy享受无限的实时通知，无需信用卡即可开始。
  * [Pingmeter.com](https://pingmeter.com/) - 5个运行时间监控器，间隔10分钟。监控SSH，HTTP，HTTPS和任何自定义TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 面向前端，后端，数据库等的免费APM和监控，免费代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 24小时内的免费指标，应用程序性能管理代理仅限于一个Java，一个.NET，一个PHP和一个Node.js
  * [appneta.com](https://www.appneta.com/) — 使用1小时的数据保留期免费使用
  * [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的任务控制台。对于小型流量使用（64MB的日志）免费。
  * [assertible.com](https://assertible.com) — 自动化API测试和监控。为团队和个人提供免费计划。
  * [bleemeo.com](https://bleemeo.com) -对于3个服务器，5个运行时间监控器，免费使用，包括无限用户，无限仪表盘，无限警报规则。
  * [checklyhq.com](https://checklyhq.com) - 开源的E2E/合成监控和深度API监控，适用于开发人员。免费计划可以包括五个用户和50k+检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控。免费：无限的按需扫描，无限用户，无限存储账户。订阅：自动扫描，API访问等。
  * [cronitor.io](https://cronitor.io/) -适用于cron作业，网站，API等的性能洞察和运行时间监控。具有五个监控器的免费级别。
  * [datadoghq.com](https://www.datadogh

  * [sematext.com](https://sematext.com/) — 24小时指标免费，服务器无限，十个自定义指标，500,000个自定义指标数据点，无限仪表盘、用户等
  * [sitemonki.com](https://sitemonki.com/) — 网站、域名、Cron & SSL 监控，每个类别免费五个监控
  * [sitesure.net](https://sitesure.net) - 网站和Cron监控，两个监控免费
  * [skylight.io](https://www.skylight.io/) — 首100,000个请求免费（仅限Rails）
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控API，检查Ping、DNS等
  * [stathat.com](https://www.stathat.com/) — 最初十个统计免费，无过期
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，免费测试无限，但有限制
  * [statusgator.com](https://statusgator.com/) — 状态页监控，三个监控免费
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、启动时间监控、DNS & 域名监控。监控十个服务器、十个启动时间、十个域名免费
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控，三个位置和二十个主要Web服务数据流免费
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，五十个监控免费
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 五个网站的免费监控，60秒间隔，公共状态页
  * [zenduty.com](https://www.zenduty.com/) — 端到端事件管理，警报、值班管理和响应编排平台，适用于网络运营、网站可靠性工程和DevOps团队。五个用户免费
  * [instatus.com](https://instatus.com) - 在十秒钟内获得漂亮的状态页。无限订阅和团队，永久免费


## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - 使用截图和点击轨迹进行JavaScript错误跟踪。对开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 在初始试用期后，免费支持每月最多2,000个错误
  * [elmah.io](https://elmah.io/) — 面向web开发者的错误日志记录和运行时监控。开源项目可免费使用Small Business订阅。
  * [Embrace](https://embrace.io/) — 移动应用监控。小型团队可免费使用，每年最多支持1百万个用户会话。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3,000个事件或1个用户免费。开源且易于自行托管以实现无限使用。
  * [GlitchTip](https://glitchtip.com/) — 简单、开源的错误跟踪。兼容开源Sentry SDK。每月1,000个事件免费，或者可以自行托管无限制使用。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时和cron监控。小型团队和开源项目免费（每月12,000个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观察性和调试平台。[Nordic](https://app.memfault.com/register-nordic)、[NXP](https://app.memfault.com/register-nxp)和[Laird](https://app.memfault.com/register-laird)设备最多支持100个设备免费。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费计划每月最多5,000个错误，无限用户，30天保留期
  * [sentry.io](https://sentry.io/) — Sentry实时跟踪应用异常，并具有小免费计划。每月5,000个错误/1用户免费，自行托管时无限制使用。
  * [Axiom](https://axiom.co/) — 存储最多0.5 TB的日志，保留期30天。包括

## Search

  * [algolia.com](https://www.algolia.com/) — 支持拼写容忍、相关性和 UI 库的托管搜索解决方案，以便轻松创建搜索体验。免费的 "Build" 计划包含 1M 文档和 10K 次搜索/月。还提供免费的 [开发人员文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费 1 GB 内存和 1 GB 存储
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏作为服务，基于 Web 的 UI 小部件/插件，允许用户在您的产品中搜索内容、导航、功能等，从而提高discoverability。免费适用于最高 1,000 个月活跃用户，命令无限制。
  * [Magny](https://magny.io) - SaaS 服务，帮助实现命令面板（例如内'app搜索），这显著减少用户在应用程序中找到任何内容所需的时间，利用用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费 3 个索引，100K 文档/索引，无限全文/向量/混合搜索，60 天分析
  * [searchly.com](http://www.searchly.com/) — 免费 2 个索引和 20 MB 存储

**[⬆️ 回到顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供免费的数据分析、信息安全、Web开发等课程和认证
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，专注于JavaScript和Ruby的Web开发课程
  * [免费专业简历模板和编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量经验丰富的简历模板，支持克隆、编辑和下载，兼容ATS（[应用跟踪系统](https://baike.baidu.com/item/%E5%BA%94%E7%94%A8%E8%B7%9F%E8%B8%AA%E7%B3%BB%E7%BB%9F)）
  * [DeepLearning.AI 短期课程](https://www.deeplearning.ai/short-courses/) - 行业顶尖专家的免费短期课程，提供最新的生成式人工智能工具和技术的实践经验，只需一小时或更短时间
  * [LabEx](https://labex.io) - 通过互动实验和真实世界项目开发Linux、DevOps、网络安全、编程、数据科学等技能
  * [Roadmap.sh](https://roadmap.sh) - 免费的学习路线图，涵盖从区块链到用户体验设计的所有开发方面
  * [Cisco网络学院，技能通](https://skillsforall.com/) - 免费提供网络安全、网络和Python等主题的认证课程
  * [MIT开放课程](https://ocw.mit.edu/) - MIT开放课程是一个在线出版物，涵盖2500多门课程的材料，免费与世界各地的学习者和教育者分享知识。YouTube频道在[@mitocw](https://www.youtube.com/@mitocw/featured)找到
  * [W3Schools](https://www.w3schools.com/) - 提供HTML、CSS、JavaScript等Web开发技术的免费教程
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费的在线指南，用于学习基本和高级HTML/CSS、JavaScript和SQL

**[⬆️ 返回顶部](#table

## 电子邮件

  * [10分钟邮箱](https://10minutemail.com) - 免费、临时邮箱用于测试。
  * [AhaSend](https://ahasend.com) - 交易性电子邮件服务，免费发送1000封邮件每月，不限域名、团队成员、Webhooks和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名电子邮件转发，免费创建无限电子邮件别名
  * [Antideo](https://www.antideo.com) — 每小时10个API请求用于电子邮件验证、IP和电话号码验证，免费套餐不需要信用卡。
  * [Brevo](https://www.brevo.com/) — 每月9,000封电子邮件，每天300封电子邮件免费
  * [OneSignal](https://onesignal.com/) — 每月10,000封电子邮件，无信用卡要求。
  * [Bump](https://bump.email/) - 免费10个Bump电子邮件地址，一个自定义域名
  * [Burnermail](https://burnermail.io/) – 免费5个Burner Email地址，1个邮箱，7天邮箱历史
  * [Buttondown](https://buttondown.email/) — 新闻稿服务。最多100个订阅者免费
  * [CloudMailin](https://www.cloudmailin.com/) - 通过HTTP POST接收电子邮件和发送交易性电子邮件 - 每月免费10,000封电子邮件
  * [Contact.do](https://contact.do/) — 联系表单链接（Contact表单的Bitly）
  * [debugmail.io](https://debugmail.io/) — 易于使用的测试邮件服务器，适用于开发人员
  * [DNSExit](https://dnsexit.com/) - 最多2个电子邮件地址在您的域名下免费，100MB存储空间。IMAP、POP3、SMTP、SPF/DKIM支持。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月最多发送9,000封电子邮件，每天最多300封电子邮件。
  * [EmailOctopus](https://emailoctopus.com) - 最多2,500名订阅者和每月

  * [QuickEmailVerification](https://quickemailverification.com) — 每天可免费验证 100 封邮件的基本层，以及其他免费 API，如 DEA 探测器（DEA Detector）、DNS 查找（DNS Lookup）、SPF 探测器（SPF Detector）等。
  * [Resend](https://resend.com) - 面向开发者的交易邮件 API。每月 3,000 封邮件/每天 100 封邮件免费，一个自定义域名。
  * [Sender](https://www.sender.net) 每月最多 15,000 封邮件，最大 2,500 名订阅者
  * [SendGrid](https://sendgrid.com/) — 每天 100 封邮件和 2,000 个联系人免费
  * [Sendpulse](https://sendpulse.com) — 每月 500 名订阅者，每月 15,000 封邮件免费
  * [SimpleLogin](https://simplelogin.io/) – 开源的、可自行托管的邮箱别名/转发解决方案。5 个别名免费，带宽无限制，回复/发送无限制。免费用于教育人员（学生、researcher 等）。
  * [Substack](https://substack.com) — 无限免费新闻稿服务。当你开始收费时才开始付费。
  * [Sweego](https://www.sweego.io/) - 面向开发者的欧洲交易邮件 API。每天 500 封邮件免费。
  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的邮件服务，使发送邮件变得容易。每月五百个交易邮件免费。
  * [temp-mail.io](https://temp-mail.io) — 免费的一次性临时邮件服务，支持多个邮件同时发送和转发
  * [tinyletter.com](https://tinyletter.com/) — 每月 5,000 名订阅者免费
  * [Touchlead](https://touchlead.app) - 一个多功能的营销自动化工具，包含潜在客户管理、表单生成器和自动化。适用于有限数量的潜在客户和自动化的免费版本
  * [trashmail.com](https://www.trashmail

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat是一个面向开发者的功能开关服务，具有无限团队大小、优秀的支持和合理的价格标签。免费计划支持最多10个Flags、两个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) -Released released可靠的功能发布；Manage功能标志，跨web，移动和server-side应用程序。使用我们的托管API，部署到您自己的私有云，或在本地运行。
  * [GrowthBook](https://growthbook.io) -开源功能标志和A/B测试提供商，具有内置的贝叶斯统计分析引擎。对于最多3个用户免费，具有无限的功能标志和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全功能标志，A/B测试，分析和应用程序配置，具有类似Git的版本控制和同步，内存，局部标志评估。对于最多5名团队成员免费，具有无限的功能标志和A/B测试。
  * [Molasses](https://www.molasses.app) - 函数强大的功能标志和A/B测试。免费支持最多3个环境，每个环境5个功能标志。
  * [Toggled.dev](https://www.toggled.dev) - 面向企业的，具有多区域功能切换管理平台。免费计划支持最多10个Flags，两个环境，无限请求。SDK，分析仪表盘，发布日历，Slack通知，以及所有其他功能都包含在无限制的免费计划中。
  * [Statsig](https://www.statsig.com) - 一个功能管理，A/B测试，分析等的强健平台。它的慷慨免费计划提供无限座位，标志，实验和动态配置，支持每月最多1百万次事件。
  * [Abby](https://www.tryabby.com) - 开源功能标志和A/B测试。配置代码和完全类型的typescript SDK。与框架（如Next.js和React）强集成。慷慨的免费层和廉价的扩展选项。

**[⬆️ 返回顶部](#table-of

## 字体

  * [dafont](https://www.dafont.com/) - 本网站中的字体是其作者的财产，或者是免费软件（freeware）、共享软件（shareware）、演示版（demo）或者公共领域（public domain）。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器（Units Converter）、字体凹槽（Font Hinter）和字体提交器（Font Submitter）。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 免费字体，适用于商业工作。手选这些字体并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到Google的内容分发网络（CDN）轻松快速地安装在网站上。
  * [FontGet](https://www.fontget.com/) - 提供各种可下载的字体，并通过标签进行整理。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个不断增长的专业级字体集合，100%免费用于个人和商业用途。
  * [Befonts](https://befonts.com/) - 为个人或商业用途提供多种独特的字体。
  * [Font of web](https://fontofweb.com/) - 识别网站中使用的所有字体及其使用方式。
  * [Bunny](https://fonts.bunny.net) - 重视隐私的Google Fonts。
  * [FontsKey](https://www.fontskey.com/) - 为个人用途提供免费和商业付费字体，可以输入文本进行快速过滤。
  * [fonts.xz.style](https://fonts.xz.style/) - 使用CSS为网站提供字体家族的免费和开源服务。
  * [Fontsensei](https://fontsensei.com/) - 用户标记的开源Google字体。包括中文、日文、韩文（CJK）字体标签。

**[⬆️ 返回顶部](#目录)**

## 表单

  * [Feathery](https://feathery.io) - 功能强大、开发者友好的表单构建工具（Form Builder）。可以创建注册与登录、用户入门、付款流程、复杂的金融应用程序等。免费计划允许每月最多250次提交和5个活跃表单。
  * [Form-Data](https://form-data.com) - 无代码表单后端（No-code Forms Backend）。提供垃圾邮件过滤、电子邮件通知和自动回复、Webhooks、Zapier、重定向、AJAX或POST等功能。免费计划提供无限表单、20次提交/月，并且带有Form-Data徽标的额外2000次提交。
  * [FabForm](https://fabform.io/) - 面向智能开发者的表单后端平台（Form Backend Platform for Intelligent Developers）。免费计划允许每月250次表单提交。提供友好的现代GUI，集成Google Sheets、Airtable、Slack、Email等。
  * [Form.taxi](https://form.taxi/) — HTML表单提交端点（Endpoint for HTML Forms Submissions），具有通知、垃圾邮件拦截和GDPR合规的数据处理。基础免费计划。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点（HTTP POST Form Endpoint），免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/) - 面向静态网站的简单HTML表单（Easy HTML Forms for Static Websites）。可以免费开始，无需注册帐户。免费计划允许每月500次提交，并自定义回复电子邮件地址。
  * [FormKeep.com](https://www.formkeep.com/) - 无限表单，每月50次提交，垃圾邮件保护、电子邮件通知和拖放式设计器，可导出HTML。附加功能包括自定义字段规则、团队、集成Google Sheets、Slack、ActiveCampaign和Zapier。
  * [formlets.com](https://formlets.com/) — 在线表单，每月单页无限表单、100次提交、电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单到电子

  * [Sprig](https://sprig.com/) - 每月一项产品内调查或带回放的调查，并配备 [GPT](自然语言处理模型) 驱动的 AI 分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集 25 条反馈提交。提供与 [React](javascript 库) 和 [Vue](javascript 框架) 组件的轻松集成。
 
**[⬆️ 回到顶部](#目录)**

## 生成式AI

  * [关键词 AI](https://keywordsai.co) - 最好的大型语言模型（LLM）监控平台。使用两行代码即可以一种格式调用200多种LLM。每月可免费请求10,000次，平台功能免费！
  * [Portkey](https://portkey.ai/) - 面向Gen AI应用的控制面板，具有可观察性套件和AI网关。每月可免费发送和记录多达10,000个请求。
  * [Braintrust](https://www.braintrustdata.com/) - 评估、提示游乐场和Gen AI数据管理。免费计划每周提供最多1,000个私人评估行。
  * [Findr](https://www.usefindr.com/) - 通用搜索，允许您一次性搜索所有应用程序。搜索助手允许您使用您的信息回答问题。免费计划提供无限制的统一搜索和每天5个共同飞行员查询。
  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。只要您带来自己的API密钥，整个平台都是免费的。
  * [Clair](https://askclair.ai/) - 临床AI参考。学生可以免费访问专业工具套件，包括Open Search、临床摘要、医学审查、药物相互作用、ICD-10代码和管理。另外，专业套件还有免费试用。
  * [Langtrace](https://langtrace.ai) - 允许开发人员跟踪、评估、管理提示和数据集，并调试与LLM应用程序性能相关的问题。它为任何LLM创建开放遥测标准跟踪，有助于可观察性，并与任何可观察性客户端配合使用。免费计划每月提供50K跟踪。
  * [Ultra AI](https://ultraai.app) - 您产品的AI命令中心。功能包括多提供商AI网关、提示管理器、缓存、日志、分析、模型回退和用户速率限制。免费永远计划每月提供10k+请求，并提供除缓存以外的所有功能。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在整个开发和生产生命周期中评估、测试和部

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — Bootstrap（前端框架）、Bootswatch（Bootstrap 自定义主题）和 fontawesome.io（图标库） 的 CDN
  * [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠的内容分发网络，cdnjs 是一个免费开放源代码的 CDN 服务，由 Cloudflare 提供支持，已被超过 11% 的网站所信任。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — Google 托管库是一个用于流行的开源 JavaScript 库的内容分发网络
  * [Stellate](https://stellate.co/) - Stellate 是一个针对 GraphQL API 的快速且可靠的 CDN，对两个服务免费。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 CDN，支持 npm、GitHub、WordPress、Deno 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — Microsoft Ajax CDN 主要托管流行的第三方 JavaScript 库，如 jQuery，方便您将其添加到 Web 应用程序中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 提供免费的 DDoS 保护和 SSL 证书
  * [Skypack](https://www.skypack.dev/) — 100% 本土的 ES 模块 JavaScript CDN，每个域名每月 1 百万次请求免费。
  * [raw.githack.com](https://raw.githack.com/) — rawgit.com 的现代替代品，使用 Cloudflare 托管文件
  * [section.io](https://www.section.io/) — 一个简单的方法来设置和管理 Varnish Cache 解决方案，适用于一个站点的免费使用。
  * [statically.io](https://statically.io/) — 针对 Git 仓库（GitHub、GitLab、Bitbucket）、WordPress 相关资产和图片的 CDN
  * [toranproxy.com](https://toranproxy.com/) — Packagist 和 GitHub 的代理服务，个人使用、一个开发者且无需支持时免费。
  * [UNPKG](https://unpkg.com/) — npm 上所有内容的 CDN
  *

## PaaS

  * [anvil.works](https://anvil.works) - 使用Pure Python开发Web应用，免费套餐拥有无限应用和30秒超时限制。
  * [appwrite](https://appwrite.io) - 支持WebSockets和身份验证服务，免费套餐包含无限项目、1个数据库、3个桶、5个函数，每个项目。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，免费版本支持两个项目，功能有限但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) — 开源、跨平台的移动应用开发工具链，适用于Java/Kotlin开发者。商业用途免费，支持无限项目。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，具有从TypeScript代码自动生成的视觉CMS。内置A/B测试、内容分段和实时分析。适合内容密集和企业电子商务网站。免费版本支持每月5,000次页面浏览或开源/个人项目。
  * [Deno部署](https://deno.com/deploy) - 分布式系统，运行JavaScript、TypeScript和WebAssembly以边缘分布式。免费套餐包含每天100,000次请求和每月100 GiB数据传输。
  * [domcloud.co](https://domcloud.co) – 支持GitHub、SSH和MariaDB/Postgres数据库的Linux主机服务。免费版本具有1 GB存储和1 GB网络/月限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 后端框架，通过静态分析提供自动基础设施、无样板代码等。包括免费的云托管，适用于爱好者项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 使用Git推送样式工作流程部署Web服务、数据库等到自己的AWS帐户。免费套餐适用于个人GitHub仓库中的1名开发人员。AWS费用通过AWS计费，但您可以使用积分和AWS免费套餐。
  * [gigalixir.com](https://gigalixir.com/) - 提供一个永不休眠的免费实例和一个免费的Post

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化工作流以在应用程序后端连接多个应用程序。例如，当应用程序中发生事件时，发送Slack消息或将行添加到Google表中。每月最多5000个任务免费。
  * [back4app.com](https://www.back4app.com) - Back4App是一个基于Parse Platform的易于使用、灵活和可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和Web后端服务，提供1 GB文件存储、每月50,000条推送通知和1000个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的AI将在我们的函数运行时和托管存储中启动您的Python API，免费构建和托管在我们的在线编辑器或本地使用您喜欢的工具。
  * [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC开发人员计划提供文档和资源以构建和部署数字创新。访问一个包括平台、SDK和组件库的综合个人沙盒，可以用来构建和定制应用程序。
  * [connectycube.com](https://connectycube.com) - 最多1000个用户的应用程序免费，无限聊天消息，p2p语音和视频通话，文件附件和推送通知。
  * [convex.dev](https://convex.dev/) - 反应式后端服务，托管您的数据（带有关系和可序列化ACID事务的文档）、无服务器函数和WebSockets，用于将更新流式传输到各种客户端。适用于小项目免费，最高1M记录，5M月度函数调用。
  * [darklang.com](https://darklang.com/) - 与编辑器和基础设施相结合的托管语言。在beta期间可访问，beta后将提供慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase帮助您构建和运行成功的应用程序。免费的Spark计划提供身份验证、托管、Firebase ML、实时数据库、云存储、Testlab、A/B测试、分析、应用程序

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个低代码平台，用于构建具有可定制的移动和 web 应用的业务流程应用程序。提供拖拽界面、离线支持、实时位置跟踪和与各种第三方服务集成等功能。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表板。支持 SQL 数据库和 REST API。
  * [BudiBase](https://budibase.com/) — BudiBase 是一个开源的低代码平台，用于在几分钟内创建内部应用程序。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表板。集成 15+ 个数据库和任意 API。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用程序。连接数据库、云存储、GraphQL、API 端点、Airtable 等，并使用拖拽应用程序构建器构建应用程序。
  * [ReTool](https://retool.com/) — 低代码平台，用于构建内部应用程序。ReTool 具有高度的可定制性，如果可以使用 JavaScript 和 API 编写，则可以在 ReTool 中实现。免费版本允许每月最多 5 名用户，应用程序和 API 连接无限制。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ - 一个低代码平台，帮助工程团队和产品经理构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板、运营应用程序，速度提高 10 倍。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud - 一个强大的开源低代码平台，供开发人员构建内部工具。通过使用 ILLA 的组件和操作库，开发人员可以节省大量构建工具的时间。对于 5 名团队成员免费使用。
  * [outsystems.com](https://www.outsystems.com/) — 企业 web 开

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 提供100 MB免费网页托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno，自定义Web服务器，通过FTP、WebDAV和SSH访问；包含邮箱、邮件列表和应用程序安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费网页托管+免费短域名、PHP、MySQL、应用程序安装器、邮件发送和无广告。
  * [Bohr](https://bohr.io) — 适用于非商业项目的免费托管，开发者优先的部署和开发平台，最大限度地减少基础设施麻烦并加快设置速度。
  * [Bubble](https://bubble.io/) — 通过视觉编程构建Web和移动应用程序，无需代码，免费使用Bubble的品牌。
  * [dAppling Network](https://www.dappling.network/) - 不可中断的Web3前端托管平台，专注于提高正常运行时间和安全性，为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在应用程序平台入门级别上免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管网站。仅限静态网站。永久免费，每个Google/Microsoft帐户一个网站。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个开发人员桌面应用程序，用于托管本地站点并实时共享它们。
  * [Fern](https://buildwithfern.com) - 构建和托管基于Markdown的文档站点在Fern的免费计划中。您甚至可以从API定义文件自动生成API参考。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管PHP 5，Perl，CGI，MySQL，FTP，文件管理器，POP电子邮件，免费子域名，免费域名托管，DNS区域编辑器，网站统计，免费在线支持等。
  * [Freehostia](https://www.freehost

## 域名系统

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费公用[DNS](域名解析服务)解析器，速度快、安全（加密您的DNS查询），由[Cloudflare](网宿科技)提供。用途：绕过您的互联网服务提供商的DNS屏蔽，防止DNS查询窥探，[阻止成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它也可以[通过API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：仅是一个DNS解析器，不是DNS主机。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供API和许多其他免费DNS功能的免费DNS服务。
  * [cloudns.net](https://www.cloudns.net/) — 最多1个域名的免费DNS主机，最高50条记录
  * [deSEC](https://desec.io) -FACEBOOK免费DNS主机，带有API支持，着重于安全性。采用开源软件，并由[SSE](Secure Systems Engineering 保密系统工程)支持。
  * [dns.he.net](https://dns.he.net/) — 带有动态DNS支持的免费DNS主机服务
  * [Zonomi](https://zonomi.com/) — 带有瞬时DNS传播的免费DNS主机服务。免费计划：1个DNS区域（域名），最多10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS主机。
  * [duckdns.org](https://www.duckdns.org/) — 最多5个域名的免费动态DNS。含有各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) — 支持[API](https://dynv6.com/docs/apis)和管理大量DNS记录类型（如CNAME、MX、SPF、SRV、TXT等）的免费动态DNS服务。
  * [freedns.afraid.org](https://freedns.afraid.org/) — 免费DNS主机。

## 域名

  * [eu.org](https://nic.eu.org) — 免费的 eu.org 域名，通常在14天内批准。
  * [pp.ua](https://nic.ua/) — 免费的 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费的 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 与 [AWS](Amazon Web Services, 亚马逊云服务) S3 兼容 - 支持 [API](应用程序接口), 接口操作, [CLI](命令行接口), 以及其他上传方法，以安全、方便、-efficient 的方式从 [IPFS](星际文件系统) 和 [Arweave](去中心化存储网络) 网络上传和存储文件。注册用户可以免费获得 6 GB 的 IPFS 存储和 300MB 的 Arweave 存储。小于 150 KB 的 Arweave 文件上传免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — [Backblaze](备份和云存储提供商) B2 云存储。免费 10 GB (类似 [Amazon](亚马逊) S3) 对象存储，适用于无限时间
  * [filebase.com](https://filebase.com/) - 基于 [Blockchain](区块链) 的 S3 兼容对象存储。5 GB 免费存储，适用于无限时间。
  * [Tebi](https://tebi.io/) - S3 兼容对象存储。免费 25 GB 存储和 250GB 出站传输。
  * [Idrive e2](https://www.idrive.com/e2/) - S3 兼容对象存储。10 GB 免费存储和每月 10 GB 下载带宽。
  * [C2 对象存储](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容对象存储。15 GB 免费存储和每月 15 GB 下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，在其开源数据平台上。单节点、1 CPU、1GB RAM，以及对于 PostgreSQL 和 MySQL，5GB 存储。易于迁移到更广泛的计划或跨云。
  * [airtable.com](https://airtable.com/) — 看起来像一个电子表格，但它是一个关系型数据库，拥有无限的库，1,200 行/库，和 1,000 API 请求/月
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 即服务，具有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 服务器无代码 API/后端和 NoSQL 数据库服务，具有函数、Mongdb 风格的查询、键值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划具有 5GB 存储和 60/API 调用/分钟。包含 2 名开发人员。无需信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。 [免费层 CRFREE](https://crate.io/lp-crfree)：一个节点，2 CPU，2 GiB 内存，8 GiB 存储。每个组织一个集群，无需支付方法。
  * [FaunaDB](https://fauna.com/) — 服务器无代码云数据库，具有原生 GraphQL、多模型访问和每日免费层，最高 100 MB
  * [Upstash](https://upstash.com/) — 服务器无代码 Redis，免费层最高 10,000 次请求/天，256MB 最大数据库大小，20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — 在线实时监控和管理服务，用于 Redis，监控 1 个 Redis 实例免费
  * [redislabs](https://redislabs.com/try-free

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 在不需要下载的情况下，只需一条命令就能为本地主机（localhost）创建公共 URL。支持HTTPS、TCP和TLS隧道，免费计划的隧道生存时间为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — 一款Visual Studio扩展，允许将IIS Express暴露在本地网络或通过隧道暴露为公共 URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一种托管的VPN服务，允许您安全地将类似局域网（LAN）的网络扩展到分布式团队，免费计划允许无限网络，每个网络最多5人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的 Socket即服务（SaaS）平台，当您部署 WebSocket 服务器代码时，它会为您提供一个 wss:// URL，并允许您监控其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露为公共 URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露为公共 URL。免费托管版本和[开源](https://github.com/localtunnel/localtunnel)版本。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露为公共 URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露到互联网，不需要安装，不需要注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过启用类似局域网的网络连接多台计算机。无限对等点（Hamachi的替代品）。
  * [segment.com](https://segment.com/) — 事件的中心枢纽，能够将事件转换并路由到其他第三方服务。每月10万次事件免费。
  * Google STUN — [stun:stun.l.google.com:19302](stun

## 问题跟踪和项目管理

  以下是翻译后的Markdown文本：

* [acunote.com](https://www.acunote.com/) — 免费的项目管理和SCRUM軟體（敏捷軟體開發），支持最多5個团队成员
  * [asana.com](https://asana.com/) — 免费适用于私人项目的协作工具
  * [Backlog](https://backlog.com) — 一站式项目管理平台，提供一个项目、10个用户和100MB存储空间的免费计划
  * [Basecamp](https://basecamp.com/personal) - 任务列表、里程碑管理、论坛式消息、文件共享和时间跟踪。支持最多3个项目、20个用户和1GB存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 公司內網和项目管理工具。免费计划支持无限用户，5GB存储空间。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、UML、网络。免费版本最多支持15个用户/图表，25个表格
  * [Chpokify](https://chpokify.com/) — 基于团队的Planning Poker（规划扑克），节省冲刺估算时间。免费支持最多5个用户、无限团队和会议。
  * [clickup.com](https://clickup.com/) — 项目管理。免费，高级版本包含云存储。支持移动应用和Git集成。
  * [Clockify](https://clockify.me) - 时间追踪和时间表应用，支持跨项目跟踪工作时间。无限用户，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的架构图，几分钟内完成，针对AWS优化。免费计划支持单用户无限私人图表。
  * [Codegiant](https://codegiant.io) — 项目管理，代码仓库托管和CI/CD。免费计划支持无限仓库、项目和文档，5个团队成员，500 CI/CD分钟/月，30000 Serverless Code Run分钟/月，1GB仓库存储。
  * [Confluence](https://www.atlassian.com/software/confluence

  * [plan.io](https://plan.io/) — 项目管理平台，提供仓库托管和更多选项，两名用户免费，十个客户，500MB 存储空间
  * [Plane](https://plane.so/) - Plane是一个简单、可扩展的开源项目和产品管理工具，免费用于无限成员，文件上传大小最高5MB，1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 网上规划扑克（估算工具）免费
  * [point.poker](https://www.point.poker/) - 网上规划扑克（基于共识的估算工具），免费用于无限用户、团队、会议、轮次和投票，无需注册。
  * [ScrumFast](https://www.scrumfast.com) - 敏捷开发看板，非常直观的界面，免费用于最多5名用户。
  * [Shake](https://www.shakebugs.com/) - 移动应用程序的应用内bug报告和反馈工具，免费计划，每个应用程序每月10个bug报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台，永久免费最多10名用户。
  * [Tadum](https://tadum.app) - 为定期会议设计的会议日程和会议记录应用程序，免费用于最多10人的团队。
  * [taiga.io](https://taiga.io/) — 面向初创公司和敏捷开发者的项目管理平台，免费用于开源项目
  * [Tara AI](https://tara.ai/) — 简单的迭代管理服务，免费计划具有无限任务、迭代和工作空间，无用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 视觉项目管理，从看板和Scrum到几乎任何操作流程，免费用于无限用户，最多1,000个数据实体 {[更多详细信息](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲，免费计划具有一个工作区，无限任务和项目；1GB文件存储；1周项目历史记录；和五个视频会议与会

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件共享平台，具有无限速率、带宽、文件数、下载数等功能。主要面向安卓开发相关文件，如APK构建、定制ROM和修改等。但似乎也接受其他文件。
  * [borgbase.com](https://www.borgbase.com/) — 简单安全的异地备份托管，用于[Borg Backup](https://en.wikipedia.org/wiki/Borg_(backup_software))（Borg备份软件）。提供10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。提供10 GB免费存储空间
  * [sync.com](https://www.sync.com/) - 端到端的云存储服务。提供5 GB免费存储空间
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多可享受10 GB免费存储空间
  * [sirv.com](https://sirv.com/) — 智能图像[CDN](https://zh.wikipedia.org/wiki/%E5%85%B1%E6%90%8D%E7%BD%91%E7%BB%9C)（内容分发网络），具有即时图像优化和调整大小功能。免费套餐包括500 MB存储空间和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，全球拥有1500+个节点。提供各种图像调整大小、压缩和添加水印功能。为响应式图像、360度图像创建和图像编辑提供开源插件。免费月度计划包括25GB CDN流量、25GB缓存存储空间和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 图像上传、强大的操作、存储和交付服务，支持[Ruby](https://zh.wikipedia.org/wiki/Ruby)（红宝石）、[Python](https://zh.wikipedia.org/wiki/Python)（蟒蛇）、[Java](https://zh.wikipedia.org/wiki/Java)（爪哇）、[PHP](https://zh.wikipedia.org/wiki/PHP)（超文本预处理

  * [imagekit.io](https://imagekit.io) – 图像CDN，具有自动优化、实时转换和存储功能，可以在几分钟内与现有设置集成。免费计划包括每月最多20GB的带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive是一个基于绝对隐私和严格安全的零知识文件存储服务。注册並获得10 GB的免费存储空间，永久有效！
  * [degoo.com](https://degoo.com/) – 基于人工智能的云存储，免费容量高达20 GB，支持三个设备，5 GB推荐奖励（90天账户非活跃期）。
  * [MConverter.eu](https://mconverter.eu/) – 批量文件转换。支持多种文件格式，包括新格式如 [AVIF](https://mconverter.eu/convert/to/avif/)。从视频中提取所有图像帧。每天免费处理最多十个100MB文件，每批处理两个文件。
  * [ImageEngine](https://imageengine.io/) – ImageEngine是一个易于使用的全球图像CDN。设置时间不到60秒。支持AVIF和JPEGXL，提供WordPress、Magento、React、Vue等插件。[注册免费开发者账户](https://imageengine.io/developer-program/)。
  * [DocsParse](https://docsparse.com/) – 由GPT提供的PDF、图像等文件的AI处理，生成JSON、CSV、EXCEL格式的结构化数据。每月免费30个积分。

**[⬆️ 返回顶部](#目录)**

## 设计和UI

  * [AllTheFreeStock](https://allthefreestock.com) - 一个免费的股票图片、音频和视频列表
  * [Float UI](https://floatui.com/) - 免费的网页开发工具，用于快速创建现代化、响应式的网站，具有时尚的设计，即使对于非设计师也同样适用
  * [Ant Design Landing Page](https://landing.ant.design/) - Ant Design Landing Page 提供由 Ant Motion 的动态组件构建的模板。它有一个富有内容的首页模板，下载模板代码包，可以快速使用。你也可以使用编辑器快速构建自己的专用页面
  * [Backlight](https://backlight.dev/) — Backlight 是一个完整的编码平台，开发者和设计师之间的协作是其核心。它使团队能够构建、记录、发布、扩展和维护设计系统。免费计划允许最多 3 个编辑员在一个设计系统上工作，且拥有无限的查看者
  * [BoxySVG](https://boxy-svg.com/app) — 一个免费的可安装 Web 应用，用于绘制 SVG 和以 SVG、PNG、JPEG 等格式导出
  * [Carousel Hero](https://carouselhero.com/) - 免费的在线工具，用于创建社交媒体轮播
  * [Circum Icons](https://circumicons.com) - 一致的开源图标，如用于 React、Vue 和 Svelte 的 SVG
  * [cleverbrush.com](https://www.cleverbrush.com/) — 免费的图形设计/照片拼贴应用程序。同时还提供付费组件集成
  * [cloudconvert.com](https://cloudconvert.com/) — 可将任何格式转换为任何其他格式。支持 208 种格式，包括视频和 GIF
  * [CodeMyUI](https://codemyui.com) - 精心收集的 Web 设计和 UI 灵感，附带代码片段
  * [ColorKit](https://colorkit.co/) - 在线创建颜色调色板或从顶级调色板中获取灵感
  * [coolors](https://coolors.co/) - 免费的颜色调色板生成器
  * [Branition

  * [storyset.com](https://storyset.com/) — 使用该工具为您的项目创建难以置信的自定义插图，完全免费。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模拟，200 个免费模拟。
  * [tabler-icons.io](https://tabler-icons.io/) — 超过 1500 个免费的可复制和粘贴的 SVG 可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 根据姓名初始化生成头像。可以直接热链到您的网页或应用中。支持通过 URL 配置参数。
  * [unDraw](https://undraw.co/) - 一个不断更新的集合美丽的 SVG 图片，可以完全免费使用，无需署名。
  * [unsplash.com](https://unsplash.com/) - 免费的商业和非商业用途的股票照片（随心所欲许可）。
  * [vectr.com](https://vectr.com/) — 面向 Web 和台式机的免费设计应用程序。
  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划可创建最多三步骤的流程。
  * [Webflow](https://webflow.com) - 支持动画和网站托管的所见即所得（WYSIWYG）网站构建工具。可免费使用两个项目。
  * [Updrafts.app](https://updrafts.app) - 面向基于 tailwindcss 设计的所见即所得（WYSIWYG）网站构建工具。非商业使用免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。可创建最多四个免费白板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。可免费使用一个项目。
  * [Pixelixe](https://pixelixe.com/) — 创建和编辑在线引人入胜的独特图形和图像。
  * [Responsively App](https://responsively.app) - 一个免费的开发工具，用于更快更精确的响应

## 设计灵感

  * [awwwards.](https://www.awwwards.com/) - [顶级网站] 所有最佳设计网站的展示（由设计师投票选出）。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的地方。可以按类别（如 UI/UX 项目）筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自真实应用。
  * [Landings](https://landings.dev/) - [网页截图] 根据您的偏好找到最好的登录页面以供设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登录页面 / UI 套件 / 网页截图] Lapa Ninja 是一个展示来自网络的最佳 6025 个登录页面示例、免费书籍和 UI 套件的画廊。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登录页面设计] 经常更新的登录页面截图。包括桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动设备截图] 通过我们的移动应用截图库（超过 50,000 张，可完全搜索）节省 UI 和 UX 研究的时间。
  * [Uiland Design](https://uiland.design/) - [移动设备截图] 探索来自非洲和全球领先公司的移动和 Web UI 设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动设备截图] 一个设计灵感库，展示 iOS 和 Android 平台的最优秀的 UI UX 模式（设计师、开发人员和产品制作者的参考）。
  * [Page Flows](https://pageflows.com/) - [移动和 Web 视频及截图] 许多移动和 Web 应用的完整流程视频。还包括截图。高度可搜索和索引。
  * [Screenlane](https://screenlane.com/) - [移动设备截图] 获取灵感，跟上最新的 Web 和移动应用 UI 设计趋势。可以按模式和应用筛选。
  * [scrnshts](https://scrnshts.club/) - [移动设备

## 地图数据可视化

  * [IP Geolocation](https://ipgeolocation.io/) — 免费的开发者计划，每月可使用30K次请求。
  * [carto.com](https://carto.com/) — 从你的和公共数据创建地图和地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样工作的Map工具。每月五万个免费查询（地图瓦片，db2vector，海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 为web、桌面和移动设备提供地图、地理空间数据存储、分析、地理编码、路由等API和SDK。每月免费200万基础地图瓦片、20,000个非存储地理编码、20,000个简单路线、5,000个驾驶时间计算和5GB免费瓦片+数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、场所搜索和Places API和Pilgrim SDK的上下文感知内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和栅格地图瓦片、地理编码、场所、路由、等时线API。每天3000个免费请求。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每天2500个免费查询。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月1万个免费查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性的REST/JSON/JSONP IP地理位置查找API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 为路由、路线优化、距离矩阵、地理编码和地图匹配提供免费的开发者包。
  * [here](https://developer.here.com/) — 为地图和位置感知应用提供API和SDK。每月25万笔

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 为多个Linux发行版（SUSE， EL，Fedora，Debian等）提供的软件包 [构建服务](https://baike.baidu.com/item/%E6%9E%84%E5%BB%BA%E6%9C%8D%E5%8A%A1/5208264)。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于 [Mock](https://fedoraproject.org/wiki/Using_Mock_to_test_package_builds) 的 [RPM](https://baike.baidu.com/item/RPM/4378413)软件包构建服务，用于Fedora和EL。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — [Ubuntu](https://baike.baidu.com/item/Ubuntu/234336) 和 Debian 的软件包构建服务。

**[⬆️ 回到顶部](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP shell和代码共享网站，支持300+个PHP版本
  * [Android Studio](https://developer.android.com/studio) — Android Studio提供了构建Android应用的最快工具，支持所有类型的Android设备。开源IDE（Integrated Development Environment，集成开发环境）免费供所有人使用，是Android应用开发的最佳选择。支持Windows、Mac、Linux和ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) — 一个用于在Android设备上开发真正的Gradle-based Android应用的开源IDE（Integrated Development Environment，集成开发环境）。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 协作式API设计，支持即时API模拟和生成文档（Free计划支持无限的API蓝图和无限的用户，包括一个管理员账户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是macOS上一个流行且可扩展的编辑器。免费版本提供了强大的核心功能集和升级到高级功能的途径。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的集合，这是一个免费的公共服务。
  * [BlueJ](https://bluej.org) — 一个免费的Java开发环境，专为初学者设计，全球数百万用户使用。由Oracle支持，提供简单的GUI界面帮助初学者。
  * [Bootify.io](https://bootify.io/) - Spring Boot应用程序生成器，支持自定义数据库和REST API。
  * [Brackets](http://brackets.io/) - Brackets是一个专门为Web开发设计的开源文本编辑器。它轻量、易于使用、可高度定制。
  * [cacher.io](https://www.cacher.io) — 代码片段组织工具，支持标签和100+编程语言。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran & C/C++ IDE（Integrated Development Environment，集成开发环境）。开源，

  * [SoloLearn](https://code.sololearn.com) — 一款云端编程游乐场，非常适合运行代码片段（code snippets）。支持多种编程语言，无需注册即可运行代码，但是在他们的平台上保存代码时需要注册。同时也为初学者和中级程序员提供了免费的课程。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云代码 IDE，用于创建、编辑和部署全栈应用程序。支持任何流行的基于 NodeJs 的前端和后端框架。创建新项目的快捷链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一种流行、多功能和高度可定制的文本编辑器，用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 代码编辑器重新定义和优化，用于构建和调试现代 Web 和云应用程序。由 Microsoft 开发。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 具有数千个扩展的全功能 IDE，支持跨平台应用程序开发（Microsoft 为 iOS 和 Android 提供可下载的扩展）、桌面应用程序开发、Web 和云开发、多语言支持（C#、C++、JavaScript、Python、PHP 等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动的、不包含遥测/追踪的、自由许可的 Microsoft 编辑器 VSCode 二进制发行版
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件获取有关您编码活动的量化自我度量指标，免费计划有限。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一种开源、跨平台的终端，支持无缝的工作流程。内联渲染任何内容。保存会话和历史记录。由开放 Web 标准提供支持。支持 MacOS 和 Linux。
  * [WebComponents.dev](https://webcomponents.dev/) — 在浏览器中编码 Web 组件的 IDE，具有 58 个可用的模板，支持 story 和测试

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - Data Cloud Observability Solution (Snowflake 雪花智能数据云)。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，它可以帮助您将客户数据从数据仓库同步到 CRM、营销和支持工具。免费版提供一个目标来同步数据。
  * [Avo](https://avo.app/) — 简化分析发布工作流程。单一数据源跟踪计划、类型安全分析跟踪库、应用内调试器和数据可观察性来捕捉所有数据问题在发布之前。两个工作空间成员和 1 小时数据可观察性回放免费。
  * [Branch](https://www.branch.io) — 移动分析平台。免费版提供高达 10K 移动应用用户的深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，它允许用户从多个协作平台聚合信息，作为不同类型的数据源（Git、Github 和 Gitlab）。免费版包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 和运营分析平台。从您的数据仓库同步 10 个字段到 60+ SaaS，例如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划为一个网站提供 3000 次浏览量的分析。
  * [Databox](https://databox.com) — 通过组合其他分析和 BI 平台的商业洞察和分析。免费计划提供 3 个用户、仪表板和数据源，11M 历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 2,000 次页面浏览量，适用于 1 个网站
  * [amplitude.com](https://amplitude.com/) — 每月 1 百万次事件，高达 2 个应用程序
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源的 Web 分析平台，作为托管服务（非商业用途免费

  * [Umami](https://umami.is/) - 简单、快速、注重隐私、开源的 [Google Analytics](https://www.google.com/analytics/) 替代品。
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 免费、轻量、注重隐私的 [Google Analytics](https://www.google.com/analytics/) 替代品。支持无限页面浏览量、访客数、页面热图和目标跟踪。最多支持3个域名，每个域名可录制600个会话回放。
  * [AppFit](https://appfit.io) - [AppFit](https://appfit.io) 是一款全面性的分析和产品管理工具，旨在实现跨平台的分析和产品更新管理。免费计划包括每月10,000个事件、产品日志和每周洞察。
  * [Seline](https://seline.so) - [Seline](https://seline.so) 是一款简单且注重隐私的网站和产品分析工具。无需Cookie、轻量、独立。免费计划包括每月3,000个事件，并提供访问所有功能的权限，如仪表板、用户旅程、漏斗等。

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个站点：每天1,000次页面查看，三个热力图，三个小工具，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，带有用于错误复现的开发工具，实时支持的实时会话和产品分析套件。每月1,000个会话，其中包含所有功能和7天的保留期。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000个会话，保留期30天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000个会话，数据保留期一个月，三个用户席位。更多信息请参见[此处](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个站点：每月1,050次页面查看，不限热力图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 一个网站每月2,500个会话免费
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，无“流量限制”，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 一个网站每月500个会话免费
  * [mousestats.com](https://www.mousestats.com/) — 一个网站每月100个会话免费
  * [smartlook.com](https://www.smartlook.com/) — Web和移动应用的免费套餐（每月1,500个会话），三个热力图，一个漏斗，1个月的数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户交互，参与度和事件。对于每月最多5,000次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 记录和观看访客如何使用您的网站或应用程序。对于小型项目免费，时限不限

**[⬆️ 返回顶部](

## 国际手机号码验证API和SDK

  * [numverify](https://numverify.com/) —— 全球电话号码验证和查询 JSON API。每月 100 次 API 请求
  * [veriphone](https://veriphone.io/) —— 全球电话号码验证，快速、可靠的 JSON API。每月 1000 次请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 一体化的跨平台订阅管理平台，提供分析、A/B 测试、Apple 搜索广告、远程配置和增长工具，以优化应用内购买和盈利。兼容 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 Web。月度跟踪收入在 10k 美元以下免费使用。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，以便拓展您的业务到全球市场并覆盖新的市场（购买力平价）。免费计划包括每月 7,500 个 API 请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和预先集成的盈利工具，支持 iOS、Android、Stripe 和 Paddle。月度收入在 10k 美元以下免费使用。
  * [Adapty.io](https://adapty.io/) – 面向移动应用内订阅集成的开源 SDK 和一站式解决方案，支持 iOS、Android、React Native、Flutter、Unity 或 Web 应用。月度收入在 10k 美元以下免费使用。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供包括最新加密货币和法定货币兑换率在内的加密货币市场数据。免费层提供每月 10K 个调用额度。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币兑换率。开发者计划免费，包含每月 1,000 个请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供包括最新加密货币兑换率和历史数据在内的加密货币市场数据。演示 API 具有每分钟 30 个调用和每月 10,000 个调用限制。
  * [CurrencyApi](https://currencyapi.net/) — 实时提供实物货币和加密货币的汇率，格式为 JSON 和 XML。免费层提供每月 1,250 个 API 请求。
  * [currencylayer](https://currencylayer.com/) —

## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，为团队提供30个免费的私有仓库，用于构建和存储Docker镜像
  * [容器注册服务（Container Registry Service）](https://container-registry.com/) - 基于Harbor的容器管理解决方案，免费层提供1 GB的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 提供一个免费的私有仓库和无限的公开仓库用于构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的Docker学习平台。
  * [quay.io](https://quay.io/) — 提供无限的免费公开仓库用于构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) - 匿名和短暂的Docker镜像注册表

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp [Vagrant](Vagrant 虚拟机管理工具) 云。[Vagrant box](Vagrant 虚拟机镜像) 主机托管。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个替代的公共 [Vagrant box](Vagrant 虚拟机镜像) 索引

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义、基于Markdown的博客和网站构建器（网站建设工具）。
  * [Dev.to](https://dev.to/) - 程序员分享想法、互相帮助成长的平台。
  * [Hashnode](https://hashnode.com/) — 为开发者提供的无烦恼博客软件（开发者博客平台）。
  * [Medium](https://medium.com/) — 更深思熟虑地思考那些与你相关的事情。
  * [AyeDot](https://ayedot.com/) — 与世界分享你的想法、知识和故事，免费发布现代多媒体短格式微博。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站观众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个轻量级的评论小工具，构建于 [GitHub Issue](https://github.com/)(GitHub 问题) 之上。使用 GitHub Issue 作为博客评论、Wiki 页面等的评论。
  * [Disqus](https://disqus.com/) - Disqus 是一个网络化社区平台，被数十万个网站使用。
  * [Remarkbox](https://www.remarkbox.com/) - 开源的评论平台，按“一名管理员在几个域名上拥有完全控制权”收费。
  * [IntenseDebate](https://intensedebate.com/) - 一款为 [WordPress](https://wordpress.org/)(WordPress) 、 [Tumblr](https://www.tumblr.com/)(Tumblr) 、 [Blogger](https://www.blogger.com/)(Blogger) 等网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 一个基于 [Aws Lambda](AWS Lambda) 和 [Chrome](谷歌浏览器) 的截图API。支持全页截图、定时截图和视口尺寸截图。
  * [microlink.io](https://microlink.io/) – 将任何网站转换为数据，例如元标签归一化、美化链接预览、网页抓取功能或截图服务。每天免费250次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简单的API调用生成任何网站的截图。设计用于大规模扩展，托管在 [Google Cloud](谷歌云) 上。每月免费提供100次截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — capture任何网站的定制快照。每月免费100次快照
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — capture 100 次快照/月，支持png、gif和jpg格式，包括全长截图，不仅限于首页
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和页面渲染。免费套餐每天提供最多500页。自2017年起提供免费套餐。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名intelligence API服务。每月免费100次请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转换为jpg、png或pdf。捕获全页截图，调整视口并注入自定义代码。免费套餐每月150张图片。
  * [Screenshots](https://screenshotson.click) — 您的截图API。具有高度可定制的截图选项。每月免费100次截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是现代化的 [Flutter](Flutter 框架) 在线集成开发环境，是创建、调试和构建跨平台项目的最佳场所。可以使用 [Flutter](Flutter 框架) 构建 [iOS](iOS 操作系统)（无需 [Mac](苹果电脑)）和 [Android](安卓操作系统) 应用程序。
  * [CodeMagic](https://codemagic.io/) - [CodeMagic](代码魔术) 是一个完全托管的移动应用 [CI/CD](持续集成/持续部署)。您可以使用基于图形用户界面的 [CI/CD](持续集成/持续部署) 工具进行构建、测试和部署。免费版本提供每月 500 分钟、2.3 GHz 处理器和 8 GB [RAM](内存) 的 [Mac Mini](迷你版苹果电脑) 实例。
  * [FlutterFlow](https://flutterflow.io/) -  [FlutterFlow](Flutter 流) 是一个基于浏览器的拖拽界面，用于使用 [Flutter](Flutter 框架) 构建移动应用程序。

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快的 x86 虚拟机，能够运行 Linux 和 Windows 2000。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个 OpenRISC 虚拟机，能够运行具有网络支持的 Linux。
  * [v86](https://copy.sh/v86) — 一个 x86 虚拟机，能够直接在浏览器中运行 Linux 和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续的工作流程帮助实施以隐私为中心的设计，使组织符合 [GDPR（通用数据保护条例)](https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E6%95%B0%E6%8D%AE%E4%BF%9D%E6%8A%A4%E6%9D%A1%E4%BE%8B) 和其他法规。免费版本仅限于小型团队和 [SaaS（软件即服务)](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E5%8D%B3%E6%9C%8D%E5%8A%A1) 版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，提供从 [GDPR](https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E6%95%B0%E6%8D%AE%E4%BF%9D%E6%8A%A4%E6%9D%A1%E4%BE%8B) 代理到 Cookie 横幅的所有功能。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和 Cookie 政策以及同意管理。免费版本提供有限的隐私和 Cookie 政策以及 Cookie 横幅。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie 横幅、审计和多语言同意管理解决方案。免费版本提供单次扫描和单个横幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，拥有有限的访客数量。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、隐私请求处理 ([DSARs](https://en.wikipedia.org/wiki/Data_Subject_Access_Request)) 和数据映射。免费版本包括核心同意管理功能，它们还为经过验证的开源项目提供更高级的免费计划。

**[⬆️ 返回顶部](#目录)**

## Miscellaneous

  * [背景样式器](https://backgroundstyler.com) - 创建代码、文本或图像的美观截图，分享到社交媒体。
  * [BinShare.net](https://binshare.net) - 创建和共享代码或二进制文件。可作为美观的图像分享，例如用于 Twitter 或 Facebook 发帖，或作为链接，例如用于聊天或论坛。
  * [Blynk](https://blynk.io) — 一种 [SaaS（软件即服务）](# "Software as a Service") 平台，具有 API，用来控制、构建和评估 [IoT（物联网）](# "Internet of Things") 设备。开发者计划提供 5 个设备，免费云存储和数据存储。移动应用也可用。
  * [砖记法计算器](https://free.getbricks.app/) - 一个带有强大的内置多行计算器的 [PWA（渐进式网页应用）](# "Progressive Web App") 笔记应用。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建和分享以美观的截图形式的代码片段。通常用于在 Twitter 或博客文章中美观地分享/展示代码片段。
  * [代码时间](https://www.software.com/code-time) - 一款用于 [VS Code](# "Visual Studio Code")、[Atom](# "Atom")、[IntelliJ](# "IntelliJ IDEA")、[Sublime Text](# "Sublime Text") 等的时间追踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从源代码创建优异的快照，分享到社交媒体。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图，分享到社交媒体。
  * [Cronhooks](https://cronhooks.io/) - 计划一次性或定期的 [webhook（网络钩子）](# "Webhook")。免费计划允许 5 个一次性的时间表。
  * [cron-job.org](https://cron-job.org) - 在线 [cron 任务](# "Cron job") 服务。无限任务免费。
  * [datelist.io](https://datelist.io)

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) —  支持2个设备，无文件数和会话持续时间限制 
  * [Apache Guacamole™](https://guacamole.apache.org/) — 一个开源无客户端的远程桌面网关 
  * [RemSupp](https://remsupp.com) — 按需支持和永久访问设备（免费2次/天）
  * [RustDesk](https://rustdesk.com/) - 为每个人提供开源虚拟/远程桌面基础设施！ 

**[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) — 找到免费/付费的资产，如精灵（sprite）、贴图集（tile sets）和角色包（character packs）。
  * [Gamefresco.com](https://gamefresco.com/) — 发现、收集和分享来自全世界游戏艺术家的免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) — 免费/付费资产，如2D、3D、音频、GUI。
  * [OpenGameArt](https://opengameart.org) — 开源游戏资产，如音乐、声音、精灵和GIF。
  * [CraftPix](https://craftpix.net) — 免费/付费资产，如2D、3D、音频、GUI、背景、图标、贴图集和游戏套件。
  * [Game Icons](https://game-icons.net/) - 免费的样式化SVG/PNG图标，采用CC-BY许可证。
  * [LoSpec](https://lospec.com/) — 用于创建像素艺术和其他限制性数字艺术的在线工具，许多教程/调色板列表可供选择，适用于您的游戏。
  * [ArtStation](https://www.artstation.com/) - 2D、3D资产和音频的商 城市（MarketPlace），包括免费/付费的图标、贴图集和游戏套件。同时，也可以用于展示您的艺术作品集。
  * [Rive](https://rive.app/community/) - 社区资产，以及使用其免费计划创建您自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) - 免费的低多边形3D资产。
  * [3Dassets.one](https://3dassets.one/) - 超过8,000个免费/付费的3D模型和PBR材料，用于创建纹理。
  * [Kenney](https://www.kenney.nl/assets/) - 免费（CC0 1.0 Universal许可）的2D、3D、音频和UI游戏资产。
  * [Poliigon](https://www.poliigon.com/) - 免费和付费的纹理（具有变换分辨率）、模型、HDRIs和刷子。提供免费插件以导出到像Blender这样的软件。


## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 面向 Web 开发者的免费工具，包括 CSS 最小化、图像优化、图像缩放、大小写转换器、CSS 验证器、JavaScript 编译器、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可免费获得高达 200 小时的音频转录。
  * [get.localhost.direct](https://get.localhost.direct) — 为 localhost 开发提供更好的 `*.localhost.direct` 通配符公共 CA 签名 SSL 证书，支持子域。
  * [Framacloud](https://degooglions-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/开源软件和 SaaS 列表。
  * [github.com — 开发者开源软件](https://github.com/tvvocold/FOSS-for-Dev) — 面向开发者的免费和开源软件中心。
  * [GitHub 教育](https://education.github.com/pack) — 面向学生的免费服务集合，需要注册。
  * [Markdown 工具](https://markdowntools.com) - 将 HTML、CSV、PDF、JSON 和 Excel 文件相互转换的工具。
  * [Microsoft 365 开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒、工具和其他建立 Microsoft 365 平台解决方案所需的资源。该订阅是 90 天的 [Microsoft 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续期。
  * [Pyrexp](https://pythonium.net/regex) — 面向正则表达式调试的免费网页测试和可视化工具。
  * [RedHat 开发者](https://developers.redhat.com) — 面向开发者的 Red Hat 产品免费使用，包括 RHEL、OpenShift、CodeReady 等。
  * [smsreceivefree.com](https://smsreceivefree.com/) — 提供免费的临时和一次性电话号码。
  * [sandbox.httpsms.com](https://sandbox.httpsms.com) —