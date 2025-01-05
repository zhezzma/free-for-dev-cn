# free-for.dev

开发人员和开源（Open Source）作者现在有许多提供免费套餐的服务，但要找到所有这些服务并做出明智的决定需要花费时间。

这是一个软件（软件即服务（SaaS），平台即服务（PaaS），基础设施即服务（IaaS）等）和其他提供免费开发人员套餐的服务列表。

这个列表的范围仅限于基础设施开发人员（系统管理员，DevOps实践者等）可能会发现有用的东西。我们喜欢所有免费的服务，但保持主题会更好。有时这是一个灰色地带，所以这是一个带有个人观点的列表；如果我不接受你的贡献，请不要感到冒犯。

这个列表是通过1600多人提交的Pull Requests、审查、想法和工作结果汇总而成的。你也可以通过Pull Requests到[free-for-dev](https://github.com/ripienaar/free-for-dev)添加更多服务或删除更改或停用的服务。

[![跟踪精彩列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：此列表仅适用于（aaS）服务，不适用于自托管软件。要符合条件，服务必须提供免费套餐，而不仅仅是免费试用。免费套餐必须至少持续一年，如果是按时间分配的。我们也从安全角度考虑免费套餐，因此单点登录（SSO）是可以的，但我不会接受限制TLS（安全套接层）到仅付费套餐的服务。

# 目录

  * [主要云服务提供商的永远免费限制](#主要云服务提供商的永远免费限制)
  * [云管理解决方案](#云管理解决方案)
  * [分析、事件和统计](#分析、事件和统计)
  * [API、数据和机器学习](#API、数据和机器学习)
  * [构件仓库](#构件仓库)
  * [后端即服务](#后端即服务)
  * [低代码平台](#低代码平台)
  * [内容分发网络和保护](#内容分发网络和保护)
  * [持续集成和持续部署](#持续集成和持续部署)
  * [内容管理系统](#内容管理系统)
  * [代码生成](#代码生成)
  * [代码质量](#代码质量)
  * [代码搜索和浏览](#代码搜索和浏览)
  * [崩溃和异常处理](#崩溃和异常处理)
  * [数据可视化在地图上](#数据可视化在地图上)
  * [托管数据服务](#托管数据服务)
  * [设计和用户界面](#设计和用户界面)
  * [设计灵感](#设计灵感)
  * [开发者博客平台](#开发者博客平台)
  * [域名服务](#域名服务)
  * [Docker相关](#Docker相关)
  * [域名](#域名)
  * [教育和职业发展](#教育和职业发展)
  * [电子邮件](#电子邮件)
  * [功能开关管理平台](#功能开关管理平台)
  * [字体](#字体)
  * [表单](#表单)
  * [生成式人工智能](#生成式人工智能)
  * [基础设施即服务](#基础设施即服务)
  * [集成开发环境和代码编辑](#集成开发环境和代码编辑)
  * [国际移动号码验证API和SDK](#国际移动号码验证API和SDK)
  * [问题跟踪和项目管理](#问题跟踪和项目管理)
  * [日志管理](#日志管理)
  * [移动应用分发和反馈](#移动应用分发和反馈)
  * [管理系统](#管理系统)
  * [消息队列和流处理](#消息队列和流处理)


## 主要云服务提供商的永远免费限制

  * [Google Cloud Platform（谷歌云平台）](https://cloud.google.com)
    * App Engine - 每天 28 小时前端实例，9 小时后端实例
    * Cloud Firestore - 1GB 存储，每天 50,000 次读取，20,000 次写入，20,000 次删除
    * Compute Engine - 1 个非抢占式 e2-micro 实例，30GB 硬盘，5GB 快照存储（仅限部分区域），每月 1 GB 的网络出口（来自北美，到所有区域目的地，除中国和澳大利亚）
    * Cloud Storage - 5GB 存储，1GB 网络出口
    * Cloud Shell - 基于 Web 的 Linux shell/主 IDE，具有 5GB 持久存储，每周 60 小时限制
    * Cloud Pub/Sub - 每月 10GB 消息
    * Cloud Functions - 每月 200 万次调用（包括后台和 HTTP 调用）
    * Cloud Run - 每月 200 万次请求，360,000 GB-秒内存，180,000 vCPU-秒计算时间，每月 1 GB 网络出口（来自北美）
    * Google Kubernetes Engine - 为一个区域集群提供免费的集群管理，每个用户节点按标准 Compute Engine 收费
    * BigQuery - 每月 1 TB 查询，每月 10 GB 存储
    * Cloud Build - 每天 120 分钟构建
    * Cloud Source Repositories - 最多 5 个用户，50 GB 存储，50 GB 出站流量
    * [Google Colab（谷歌协作笔记本）](https://colab.research.google.com/) - 免费 Jupyter 笔记本开发环境
    * [idx.dev（谷歌项目 IDX）](https://idx.dev) - 在线 VSCode，在谷歌云上运行
    * 完整、详细列表 - https://cloud.google.com/free

  * [Amazon Web Services（亚马逊网络服务）](https://aws.amazon.com)
    * [CloudFront（云前端）](https://aws.amazon.com/cloudfront/) - 每月 1TB 出站流量和 200 万函数调用
    * [CloudWatch（云观察）](https://aws.amazon.com

    * 日志分析 - 每日500MB的日志
    * 完整、详细列表 - https://www.ibm.com/cloud/free/

  * [Cloudflare](https://www.cloudflare.com/)
    * [应用服务](https://www.cloudflare.com/plans/) - 无限域名的免费DNS，DDoS防护，CDN以及免费的SSL，防火墙规则和页面规则，WAF，机器人缓解，免费的不计量速率限制 - 每个域名1条规则，分析，电子邮件转发
    * [零信任与SASE](https://www.cloudflare.com/plans/zero-trust-services/) - 最多50个用户，24小时的活动日志，三个网络位置
    * [Cloudflare隧道](https://www.cloudflare.com/products/tunnel/) - 您可以将本地运行的HTTP端口通过隧道暴露给trycloudflare.com上的一个随机子域，使用[快速隧道](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/run-tunnel/trycloudflare)，无需账户。更多功能（TCP隧道，负载均衡，VPN）在[零信任](https://www.cloudflare.com/products/zero-trust/)免费计划中。
    * [工人](https://developers.cloudflare.com/workers/) - 在Cloudflare的全球网络上免费部署 无服务器代码—每日10万个请求。
    * [工人KV](https://developers.cloudflare.com/kv) - 每日10万个读取请求，每日1000个写入请求，每日1000个删除请求，每日1000个列表请求，每日1 GB存储数据
    * [R2](https://developers.cloudflare.com/r2/) - 每月10 GB，每月100万个类A操作，每月1亿个类B操作
    * [D1](https://developers.cloudflare.com/d1/) - 每日500万行读取，每日10万行写入，1 GB存储
    * [页面](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上开发和部署您的Web应用。每月500次构建，100个自定义域名，集成SSL，不限可访问席位，不限预览部署，并通过Cloudflare工人集成实现全栈

## 云管理解决方案

  * [Brainboard](https://www.brainboard.co) - 结合视觉化构建和管理从端到端的云基础设施的协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 面向个人项目的免费服务（包括一个部署服务器和一个静态站点），Cloud 66 为您提供在任何云上构建、部署和增长应用程序所需的一切，而不需要考虑“服务器之类”的繁琐事务。
  * [Pulumi](https://www.pulumi.com/) — 现代基础设施代码平台，允许您使用熟悉的编程语言和工具来构建、部署和管理云基础设施。
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。最多可管理 500 个资源的免费远程状态管理和团队协作。
  * [scalr.com](https://scalr.com/) - Scalr 是一种 Terraform 自动化和协作 (TACO) 产品，用于增强基础设施和配置（由 Terraform 管理）上的协作和自动化。支持完整的 Terraform CLI，集成了 OPA，并具有层次化配置模型。无单点登录（SSO）税收。所有功能都包含在内。免费使用最多 50 次运行/月。
  * [deployment.io](https://deployment.io) - Deployment.io 帮助开发人员自动化在 AWS 上的部署。在我们的免费层级中，开发人员（单用户）可以无限制地部署静态站点、Web 服务和环境。我们每月提供 20 次免费的作业执行，包括预览和自动部署，均包含在免费层级中。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  * [Bitbucket](https://bitbucket.org/) — 为最多 5 名用户提供无限的公共和私有 Git 仓库，并配备 [Pipelines](https://bitbucket.org/[Pipelines](https://bitbucket.org/)) CI/CD
  * [chiselapp.com](https://chiselapp.com/) — 为 [Fossil](https://zh.wikipedia.org/wiki/Fossil) 提供无限的公共和私有仓库
  * [codebasehq.com](https://www.codebasehq.com/) — 提供一个免费项目，空间为 100 MB，用户数为 2
  * [Codeberg](https://codeberg.org/) — 为免费和开源项目提供无限的公共和私有 Git 仓库（支持无限协作者）。由 [Forgejo](https://forgejo.org/) 提供支持。提供静态网站托管 [Codeberg Pages](https://codeberg.page/)，CI/CD 托管 [Codeberg's CI](https://docs.codeberg.org/ci/)，翻译托管 [Codeberg Translate](https://translate.codeberg.org/)。包含包和容器托管，项目管理和问题跟踪
  * [GitGud](https://gitgud.io) — 提供无限的私有和公有仓库，永久免费。由 [GitLab](https://about.gitlab.com/) 和 [Sapphire](https://sapphire.rs/) 提供支持，不包括 CI/CD
  * [GitHub](https://github.com/) — 提供无限的公有仓库和私有仓库（支持无限协作者）。包含 CI/CD，开发环境，静态托管，包和容器托管，项目管理和 AI Copilot
  * [gitlab.com](https://about.gitlab.com/) — 为最多 5 名协作者提供无限的公共和私有 Git 仓库。包含 CI/CD，静态托管，容器注册，项目管理和问题跟踪
  * [framagit.org](https://framagit.org/) — Framagit 是基于 [Gitlab](https://about.gitlab.com/) 软件的 [Framasoft](https://framasoft.org/) 软件仓库，包括 CI，静态页面，项目页面和问题跟踪
  * [he

## API、数据和机器学习

  * [JSONGrid](https://jsongrid.com) - 免费工具，用于可视化、编辑和过滤复杂的JSON数据到美丽的表格中。可以保存和共享JSON数据通过链接。
  * [Zerosheets](https://zerosheets.com) - 将您的Google Sheets表格转换为强大的API，快速开发原型、网站、应用程序等。免费版每月可使用500个请求。
  * [IP.City](https://ip.city) — 每天100个免费的IP的地理位置请求
  * [Abstract API](https://www.abstractapi.com) — 用于各种用途的API套件，包括IP地理位置、性别检测或电子邮件验证。
  * [Apify](https://www.apify.com/) — Web抓取和自动化平台，用于为任何网站创建API并提取数据。预制的抓取工具、集成代理和自定义解决方案。免费计划包含每月$5的平台积分。
  * [APITemplate.io](https://apitemplate.io) - 使用简单的API或自动化工具（如Zapier和Airtable）自动生成图像和PDF文档。无需CSS/HTML。免费计划包含每月50张图像和三个模板。
  * [APIToolkit.io](https://apitoolkit.io) - 所有您需要的工具，以完全理解您的API和后端发生了什么。具有自动API合同验证和监控。免费计划涵盖每月最多20,000个请求的服务器。
  * [APIVerve](https://apiverve.com) - 获取120+个API的即时访问，具有质量、一致性和可靠性。免费计划涵盖每月最多50个API令牌。
  * [Arize AI](https://arize.com/) - 机器学习可观察性，用于模型监控和查找问题的根源，例如数据质量和性能漂移。免费使用最多两个模型。
  * [Atlas工具包](https://atlastk.org/) - 轻量级库，用于开发单页Web应用程序，这些应用程序可以立即访问。适用于Java，Node.js，Perl，Python和Ruby。
  * [Beeceptor](https://beeceptor.com) -

  * [DB Designer](https://www.dbdesigner.net/) — 基于云的（Cloud-based）数据库（Database）模式设计和建模工具，免费入门计划包括2个数据库模型（Database models）和每个模型10个表（tables）
  * [DeepAR](https://developer.deepar.ai) — 增强现实（Augmented reality）面部滤镜（face filters）适用于任何平台（platform），仅需一个软件开发工具包（SDK）。免费计划（free plan）提供最多10个月活跃用户（MAU）和跟踪最多4个面部（faces）
  * [Deepnote](https://deepnote.com) - 新的数据科学笔记本（data science notebook），兼容 Jupyter，支持实时协作（real-time collaboration）和云运行（running in the cloud）。免费层（free tier）包括无限个人项目（unlimited personal projects）、最多750小时标准硬件（standard hardware）和最多3个编辑器（editors）的团队（teams）
  * [Diggernaut](https://www.diggernaut.com/) — 基于云的（Cloud-based）网页抓取（web scraping）和数据提取（data extraction）平台，用于将任何网站转换为数据集（dataset）或作为API（Application Programming Interface）进行操作。免费计划（free plan）包括每月5,000页请求（page requests）
  * [Disease.sh](https://disease.sh/) — 提供准确数据的免费API（Application Programming Interface），用于构建Covid-19相关的有用应用程序（Apps）
  * [Doczilla](https://www.doczilla.app/) — 生成截图（screenshots）或PDF（Portable Document Format）文件的软件即服务（SaaS API），直接从HTML/ CSS/ JS代码生成。免费计划（free plan）允许每月250个文档（documents）
  * [Doppio](https://doppio.sh/) — 使用顶级渲染技术（top rendering technology）生成和私密存储PDF文件和截图的托管API（Managed API）。免费计划（free plan）允许每月400个PDF文件和截图（PDFs and Screenshots）
  * [dreamfactory.com](https://dreamfactory.com/) — 基于REST的

  * [IPTrace](https://iptrace.io) — 一个简单的API，提供可靠且有用的IP地理位置数据。
  * [JSON2Video](https://json2video.com) - 一个视频编辑API，用于自动化视频营销和社交媒体视频，程序化或无需代码。
  * [JSON IP](https://getjsonip.com) — 返回请求它的客户端的公共IP地址。无需注册即可使用免费套餐。使用CORS，数据可以直接通过浏览器中的客户端JavaScript请求。适用于监控客户端和服务器IP变化的服务。无限请求。
  * [JSON Serve](https://jsonserve.com/) — 一个免费服务，帮助开发人员存储JSON对象并在应用程序中将其用作REST API。
  * [JSONing](https://jsoning.com/api/) — 从JSON对象创建虚假的REST API，并自定义HTTP状态代码、头部和响应体。
  * [konghq.com](https://konghq.com/) — API市场和强大的私有和公共API工具。使用免费套餐，某些功能如监控、警报和支持将受到限制。
  * [Kreya](https://kreya.app) — 免费的gRPC GUI客户端，用于调用和测试gRPC API。可以通过服务器反射导入gRPC API。
  * [Lightly](https://www.lightly.ai/) — 通过使用正确的数据来改进机器学习模型。可使用最多1000个样本的数据集，免费。
  * [LoginLlama](https://loginllama.app) - 一个用于检测欺诈和可疑登录并向客户通知的登录安全API。每月免费用于1000个登录。
  * [MailboxValidator](https://www.mailboxvalidator.com) — 一个使用实际邮件服务器连接确认有效电子邮件的电子邮件验证服务。免费API计划每月有300次验证。
  * [Market Data API](https://www.marketdata.app) - 提供实时和历史金融数据，用于股票、期权、mutual基金等。免费永远API层允许每天进行100次API请求，不收费。
  * [Meteosource Weather API](https://www.meteosource.com/) — 全

  * [Insomnia](https://insomnia.rest) - 开源的 [API](应用程序接口) 客户端，用于设计和测试 [API](应用程序接口)，支持 [REST](代表性状态转移) 和 [GraphQL](查询语言)
  * [PrefectCloud](https://www.prefect.io/cloud/) — 数据流自动化的完整平台。所有计划每月包含20,000次免费运行。这足以为大多数小型企业提供 [ETL](数据Extract、Transform、Load) 支持。
  * [Preset Cloud](https://preset.io/) - 基于 [Apache Superset](一种数据探索和可视化平台) 的托管服务。对于5个用户以下的团队永久免费，具有无限的仪表盘和图表，无代码图表生成器和协作 [SQL](结构化查询语言) 编辑器。
  * [PromptLeo](https://promptleo.com/) - 面向创作者和开发者的提示工程平台。它提供提示工程库、表单和 [API](应用程序接口)。免费计划提供一个提示生成、一个提示 [API](应用程序接口) 端点和每月30次生成。
  * [PromptLoop](https://www.promptloop.com/) - 使用简单的电子表格公式在 [Google Sheets](谷歌表格) 中使用 [AI](人工智能) 和大型语言模型（如 [GPT-3](第三代通用预训练模型)）来转换、理解和分析文本。每月前2000个积分免费。
  * [Crawlbase](https://crawlbase.com/) — 不需要代理、基础设施或浏览器即可网页爬取。我们为您解决 [CAPTCHAs](验证码) 并防止被屏蔽。前1000次调用免费。
  * [Public-Apis Github Repo](https://github.com/public-apis/public-apis) — 免费公共 [API](应用程序接口) 列表。
  * [Supportivekoala](https://supportivekoala.com/) — 通过模板实现图片自动生成。免费计划允许您每周创建最多100张图片。
  * [QuickMocker](https://quickmocker.com/) — 在您的子域名下管理在线假 [API](应用程序接口)

  * [Webhook Store](https://www.openwebhook.io) - 用于存储第三方Webhook (Web钩子) 并在localhost（ngrok风格）上调试的工具。开源且可自托管。免费的个人域名 *username*.github.webhook.store，免费的公共域名 *anything*.webhook.store。
  * [Weights & Biases](https://wandb.ai) — 面向开发者的MLOps平台。使用实验跟踪、数据集版本控制和模型管理来更快地构建更好的模型。个人项目的免费套餐包含100 GB的存储空间。
  * [wit.ai](https://wit.ai/) — 面向开发者的NLP（自然语言处理）工具。
  * [wolfram.com](https://wolfram.com/language/) —集成知识库算法的云计算平台。
  * [wrapapi.com](https://wrapapi.com/) — 将任何网站转换为参数化API。每月30k次API调用。
  * [ZenRows](https://www.zenrows.com/) — Web抓取API和代理服务器，可以绕过任何反爬虫解决方案，并提供JavaScript渲染、代理轮换和地理定位。免费套餐包含1000次API调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) — 具有headless浏览器、居住IP和直接定价的Web抓取API。每月1000次免费API调用，学生和非营利组织可获得额外积分。
  * [ip-api](https://ip-api.com) — IP地理位置API，非商业用途免费，无需API密钥，同一IP地址每分钟最多45个请求。
  * [WebScraping.AI](https://webscraping.ai) - 简单的Web抓取API，内置解析、Chrome渲染和代理。每月2000次免费API调用。
  * [Zipcodebase](https://zipcodebase.com) - 免费的邮政编码API，访问全球邮政编码数据。每月1万次免费请求。
  * [huggingface.co](https://huggingface.co) - 为PyTorch、TensorFlow和JAX构建、训练和部署

## 构件仓库

  * [Artifactory](https://jfrog.com/start-free/) - 一个支持多种包格式的项目仓库，例如 [Maven](https://maven.apache.org/)，[Docker](https://www.docker.com/)，[Cargo](https://doc.rust-lang.org/cargo/)，[Helm](https://helm.sh/)，[PyPI](https://pypi.org/)，[CocoaPods](https://cocoapods.org/) 和 [GitLFS](https://git-lfs.github.com/)。包含包扫描工具 [XRay](https://jfrog.com/xray/) 和持续集成/持续部署工具 [Pipelines](https://jfrog.com/pipelines/)（前身为 [Shippable](https://www.shippable.com/)），每月有 2,000 分钟的 CI/CD 免费使用时长。
  * [central.sonatype.org](https://central.sonatype.org) — [Apache Maven](https://maven.apache.org/)、[SBT](https://www.scala-sbt.org/) 和其他构建系统的默认项目仓库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公开的 [Maven](https://maven.apache.org/) 和 [PyPi](https://pypi.org/) 仓库，对开放源码项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 简单、安全、集中的仓库服务，支持 [Java](https://www.java.com/)/[Maven](https://maven.apache.org/)、[RedHat](https://www.redhat.com/)、[Debian](https://www.debian.org/)、[Python](https://www.python.org/)、[Ruby](https://www.ruby-lang.org/)、[Vagrant](https://www.vagrantup.com/) 等。有免费使用时长，对开放源码项目免费。
  * [jitpack.io](https://jitpack.io/) — 面向 [GitHub](https://github.com/) 上的 [JVM](https://www.java.com/) 和 [Android](https://www.android.com/) 项目的 [Maven](https://maven.apache.org/) 仓库，对公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 易于使用的仓库

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个免费的云端代码片段管理器，适用于个人和团队代码管理。
  * [Bitwarden](https://bitwarden.com) — 最安全、最简单的个人、团队和企业敏感数据存储、共享和同步方式。
  * [Braid](https://www.braidchat.com/) — 为团队设计的聊天应用，提供免费的公开群聊、无限用户、历史记录和集成功能，还有自托管的开源版本。
  * [cally.com](https://cally.com/) — 帮助找到会议的最佳时间和日期，易于使用，适合小型和大型团队。
  * [Calendly](https://calendly.com) — 一种连接和安排会议的工具，免费计划提供每用户1个日历连接、不限会议次数，还提供桌面和移动应用。
  * [Discord](https://discord.com/) — 支持公开/私有房间的聊天，支持Markdown文本、语音、视频和屏幕分享，免费支持无限用户。
  * [Telegram](https://telegram.org/) — 为所有想要快速、可靠的消息和通话的人设计，商业用户和小团队可能会喜欢大群组、用户名、桌面应用和强大的文件共享选项。
  * [Dubble](https://dubble.so/) — 免费的分步指南创建工具，支持截图、文档和团队协作，还支持异步屏幕录制。
  * [Duckly](https://duckly.com/) — 实时与团队沟通和协作，支持IDE对、终端共享、语音、视频和屏幕共享，免费适用于小团队。
  * [Dyte](https://dyte.io) - 最适合开发者的实时视频和音频SDK，具有提高生产力和参与度的协作插件，免费层包括每月10,000分钟的实时视频/音频使用。
  * [evernote.com](https://evernote.com/) — 用于组织信息的工具，支持分享笔记和与他人合作。
  * [Fibery](https://fibery.io/) — 连接工作空间平台，免费适用于单

  * [Pendulums](https://pendulums.io/) - Pendulums 是一个免费的时间跟踪工具，帮助你用简单易用的界面和有价值的统计数据来管理时间。
  * [Pumble](https://pumble.com) - 免费的团队聊天应用。无限用户和消息历史，免费使用。
  * [Raindrop.io](https://raindrop.io) - 专为macOS、Windows、Android、iOS和Web打造的私人安全书签应用。免费无限书签和协作。
  * [element.io](https://element.io/) — 一个建立在 [Matrix](https://matrix.org) (矩阵协议) 之上的去中心化开源通信工具。支持群组聊天、直接消息、加密文件传输、语音和视频聊天，并可以轻松集成其他服务。
  * [Rocket.Chat](https://rocket.chat/) - 开源的通信平台，具有全渠道功能、[Matrix](https://matrix.org) 联盟、桥接其他应用、无限制消息和完整消息历史。
  * [seafile.com](https://www.seafile.com/) — 私人或云存储、文件共享、同步、讨论。云版本仅有 1 GB
  * [Sema](https://www.semasoftware.com/) - 免费的开发者作品集工具，可以整合和快照多个仓库的贡献，生成单个报告。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费的屏幕共享工具，从浏览器直接与协作者共享屏幕，无需下载或注册。
  * [Slab](https://slab.com/) — 适用于团队的现代知识管理服务。可用于最多 10 个用户。
  * [slack.com](https://slack.com/) — 对无限用户免费使用，但有一些功能限制
  * [Spectrum](https://spectrum.chat/) - 可以创建免费的公共或私人社区。
  * [StatusPile](https://www.statuspile.com/) - 状态页的状态页。可以追踪上游提供商的状态页？
  * [Stickies](https://stickies.app/) - 用于头脑风暴、内容策划和笔记的视

  * [Pullflow](https://pullflow.com) — Pullflow 提供一个AI增强的代码审查协作平台，支持 [GitHub](https://github.com)（GitHub 网站） 、 [Slack](https://slack.com)（Slack 团队协作平台） 和 [VS Code](https://code.visualstudio.com)（VS Code 编辑器） 。
  * [Webex](https://www.webex.com/) — 视频会议，免费计划提供每次会议40分钟，支持100名与会者。
  * [RingCentral](https://www.ringcentral.com/) — 视频会议，免费计划提供每次会议50分钟，支持100名参与者。
  * [GitBook](https://www.gitbook.com/) — 一个用于捕获和记录技术知识的平台，从产品文档到内部知识库和 [API](https://zh.wikipedia.org/wiki/API)（应用程序接口） 。为个人开发者提供免费计划。
  * [transfernow](https://www.transfernow.net/) — 最简单、最快、最安全的文件传输和共享接口。无需强制订阅即可发送照片、视频和其他大文件。
  * [paste.sh](https://paste.sh/) — 一个基于 [JavaScript](https://zh.wikipedia.org/wiki/JavaScript) 和 [加密](https://zh.wikipedia.org/wiki/加密) 的简单粘贴站点。
  * [Revolt.chat](https://revolt.chat/) — 一个开源的 [Discord](https://discord.com/)（Discord 聊天平台） 替代品，尊重您的隐私。它还具有大多数来自 Discord 的专有功能，并且全部免费。Revolt 是一个安全、快速的全功能应用程序，并且100%免费。所有功能都免费。他们还支持（官方和非官方）插件，不同于大多数主流聊天应用程序。
  * [Tencent RTC](https://trtc.io/) — [Tencent](https://www.tencent.com/)（腾讯） 实时通信（TRTC）提供群组音频/视频通话解决方案。首年每月免费10,000分钟。
  * [Pastefy](https://pastefy.app/) - 一个带有可选客户端加密、多标签粘贴、 [

## 内容管理系统

  * [acquia.com](https://www.acquia.com/) — 用于 [Drupal](Drupal 网站内容管理系统) 站点的托管服务。面向开发者的免费层级。同时还提供免费的开发工具（如 Acquia Dev Desktop）。
  * [Contentful](https://www.contentful.com/) — 无头 [CMS](内容管理系统)。在云端提供内容管理和分发 [API](应用程序接口)。包含一个免费的社区空间，包括五个用户、25K 记录、48 个内容类型和 2 个区域设置。
  * [Cosmic](https://www.cosmicjs.com/) — 无头 CMS 和 API 工具包。面向开发者的免费个人计划。
  * [Crystallize](https://crystallize.com) — 支持电子商务的无头 [PIM](产品信息管理)。内置 [GraphQL](查询语言) API。免费版本包括无限用户、1000 个目录项、5 GB/月带宽和 25k/月 API 调用。
  * [DatoCMS](https://www.datocms.com/) - 为小项目提供免费层级。DatoCMS 是基于 [GraphQL](查询语言) 的 CMS。在低层级，您每月有 100k 次调用。
  * [Directus](https://directus.io) — 无头 CMS。完全免费和开源的平台，用于在本地或云端管理资产和数据库内容。没有任何限制或付费墙。
  * [FrontAid](https://frontaid.io/) — 将 JSON 内容直接存储在 Git 存储库中的无头 CMS。没有任何限制。
  * [kontent.ai](https://www.kontent.ai) - 一种 [Content-as-a-Service](内容即服务) 平台，既提供无头 CMS 的所有好处，又赋予营销人员权力。开发者计划为两个用户提供无限数量的项目，每个项目有两个环境，500 个内容项，两个语言的交付和管理 API，以及自定义元素支持。您可以使用更详细的计划来满足您的需求。
  * [Prismic](https://www.prismic.io/) — 无头 CMS。内容管理界面，完全托管且可扩展的 API。社区计划为一个用户提供无限的 API

## 代码生成

  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用构建工具（No code app builder）。在自动生成的后端代码中，用户可以完全访问源代码和无限的 API 和路由，从而实现广泛的集成。免费计划包括三个项目、五个表格和一个 Google 插件。
  * [Cody AI](https://sourcegraph.com/cody) - Cody 是一个使用 AI 和对代码库深入理解来帮助开发人员更快地编写和理解代码的编码 AI 助手。Cody 为开发人员提供了多种大型语言模型（LLM）的选择（包括本地推理），支持各种集成开发环境（IDE），支持所有流行的编程语言，并且有免费计划。免费计划每月为开发人员提供 20 条聊天消息（使用 Claude 3 Sonnet 作为 LLM）和 500 次自动补全（使用 Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — 使用 DhiWise 创新的代码生成技术，可以无缝地将 Figma 设计转换为动态的 Flutter 和 React 应用程序，优化工作流程，帮助开发人员更快地创建出色的移动和 Web 体验。
  * [Codeium](https://www.codeium.com/) — Codeium 是一个免费的 AI 驱动的代码补全工具，支持 20 多种编程语言（Python、JavaScript、Java、TypeScript、PHP、C/C++、Go 等），并与所有主要的独立和 Web 集成开发环境（IDE）集成。
  * [Fern](https://buildwithfern.com) - 编写 API 定义，并使用它们生成流行语言（如 TypeScript、Python、Java、Go 等）的 SDK/客户端库。完全支持 OpenAPI。免费套餐可生成最多 20 个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) - 仅适用于 C#。Metalama 在编译期间实时生成代码的样板，因此您的源代码保持清晰。对于开源项目，它是免费的，其商业友好免费套餐包括三个方面。
  * [Supermaven](https://www.supermaven.com

## 代码质量

  * [beanstalkapp.com](https://beanstalkapp.com/) — 一个完整的工作流程，用于编写、审查和部署代码，免费账户适用于一个用户和一个存储空间为100 MB的仓库
  * [browserling.com](https://www.browserling.com/) — 实时交互式跨浏览器测试，仅限3分钟的会话，仅支持MS IE 9在Vista下的1024 x 768分辨率
  * [codacy.com](https://www.codacy.com/) — 自动代码审查，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript，免费适用于无限公共和私有仓库
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) - 自动化基础设施代码审查工具，集成GitHub、Bitbucket和GitLab（包括自托管）。除了标准语言外，还分析Ansible、Terraform、CloudFormation、Kubernetes等（开源免费）
  * [CodeBeat](https://codebeat.co) — 自动代码审查平台，适用于多种语言，免费适用于公共仓库，包含Slack和电子邮件集成
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查，免费适用于开源和无限组织拥有的私有仓库（最多4名协作者）。也免费适用于学生和机构
  * [codecov.io](https://codecov.io/) — 代码覆盖工具（SaaS），免费适用于开源和一个私有仓库
  * [CodeFactor](https://www.codefactor.io) — 自动代码审查，适用于Git。免费版本包括无限用户、公共仓库和一个私有仓库
  * [coderabbit.ai](https://coderabbit.ai) — 集成GitHub/GitLab的AI代码审查工具，免费层包含每小时200个文件、每小时3次审查和每小时50次对话。适用于开源项目免费永久
  * [codescene.io](https://codescene.io/) - CodeScene根据开发人员如何处理代码来优先考虑技术债务，并可视化团队耦合和系统掌握等组织因素等。免费

## 代码搜索和浏览

  * [libraries.io](https://libraries.io/) — 查找和依赖项更新通知，支持32种不同的包管理器，对开源项目免费
  * [Namae](https://namae.dev/) - 在像GitHub、Gitlab、Heroku、Netlify等多个网站中搜索项目名称的可用性
  * [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，对开源项目免费
  * [tickgit.com](https://www.tickgit.com/) — 展示`TODO`注释（和其他标记），以识别出值得改进的代码区域
  * [CodeKeep](https://codekeep.io) - 代码片段的Google Keep。组织、发现和分享代码片段，具有强大的代码截图工具，包括预设模板和链接功能

**[⬆️ 返回顶部](#目录)**

## 持续集成和持续部署

  * [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动的网页无障碍测试集成到您的开发工作流中。对于开源和教育目的，它是免费的。
  * [appcircle.io](https://appcircle.io) — 一个面向企业的移动DevOps平台，自动执行移动应用的构建、测试和发布，实现更快、更高效的发布周期。对于最大30分钟的构建时间，每次构建20个月，且每次构建一个并发构建，它是免费的。
  * [appveyor.com](https://www.appveyor.com/) — 适用于Windows的持续交付（CD）服务，适用于开源软件，是免费的
  * [Argonaut](https://argonaut.dev/) - 在几分钟内在您的云上部署应用和基础设施。支持在Kubernetes和Lambda环境中进行自定义和第三方应用部署。免费版允许无限的应用和部署，适用于5个域和2个用户。
  * [bitrise.io](https://www.bitrise.io/) — 一个适用于移动应用（本地或混合）的持续集成和持续交付（CI/CD）工具。它每月提供200次免费构建，构建时间为10分钟，并允许两个团队成员。对于开源项目，它提供45分钟的构建时间，+1并发性和无限团队规模。
  * [buddy.works](https://buddy.works/) — 一个持续集成和持续交付（CI/CD）工具，提供5个免费项目和一个并发运行（120次执行/月）
  * [Buildkite](https://buildkite.com) CI管道适用于3个用户和每月5,000分钟的作业，免费。测试分析免费开发者级别包括每月100,000次测试执行，并为开源项目提供更多免费内容。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD和DevOps。对于少于20个用户和十个数据库实例，它是免费的
  * [CircleCI](https://circleci.com/) — 一个全面的免费计划，包括所有功能，在GitHub、GitLab和BitBucket存储库中提供托管

## Testing

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动应用和桌面应用提供智能视觉验证。集成到几乎所有自动化解决方案（如 [Selenium](https://www.selenium.dev/) 和 [Karma](https://karma-runner.github.io/)）和远程运行器（[Sauce Labs](https://saucelabs.com/)、[Browser Stack](https://www.browserstack.com/)）。对开源项目免费。单用户免费套餐，每周有限的校验点。
  * [Appetize](https://appetize.io) — 在基于云的Android手机/平板模拟器和iPhone/iPad模拟器上测试您的Android和iOS应用，直接在浏览器中运行。免费套餐包括两个并发会话，每月30分钟的使用时间。应用大小无限制。
  * [Apptim](https://apptim.com) — 一个移动测试工具，使得没有性能工程技能的人也能评估应用的性能和用户体验（UX）。使用您自己的设备的桌面版本100%免费，在iOS和Android上进行无限次测试。
  * [Argos](https://argos-ci.com) - 开源的面向开发者的视觉测试。无限制项目，每月5,000张截图。开源项目免费。
  * [Bencher](https://bencher.dev/) - 连续基准测试工具套件，用于捕获CI性能回归。所有公共项目免费。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)
  * [BugBug](https://bugbug.io/) - 为Web应用程序提供轻量级测试自动化工具。易于学习，无需编码。在您的计算机上免费运行无限次测试。您还可以获得基于云的监控和CI/CD集成，需额外付费。
  * [Checkly](https://checklyhq.com) - 为现代DevOps提供代码优先的合成监控。以传统提供商的很小一部分成本监控您的API和应用。由监控即代码工作流和[Playwright](https://playwright.dev/)驱动。为开发者

  * [TestCollab](https://testcollab.com) - 一个用户友好的测试管理软件，其免费计划包括 [Jira](https://www.atlassian.com/zh/software/jira) 集成、无限项目、使用 CSV/XLSx 导入测试用例、时间跟踪和 1 GB 文件存储。
  * [testingbot.com](https://testingbot.com/) — [Selenium](https://www.selenium.dev/) 浏览器和设备测试，[免费用于开源项目](https://testingbot.com/open-source)
  * [Testspace.com](https://testspace.com/) - 一个用于发布自动化测试结果的仪表盘和一个使用 [GitHub](https://github.com/) 实现手动测试作为代码的框架。该服务是 [免费用于开源项目](https://github.com/marketplace/testspace-com)，并且支持每月 450 个测试结果。
  * [tesults.com](https://www.tesults.com) — 测试结果报告和测试用例管理。与流行的测试框架集成。开源软件开发者、个人、教育工作者和刚开始的小团队可以申请折扣和免费服务，除基本免费项目 Dışında。
  * [UseWebhook.com](https://usewebhook.com) - 捕获和检查来自浏览器的 webhooks。转发到 localhost 或从历史记录中重播。免费使用。
  * [Vaadin](https://vaadin.com) — 使用 [Java](https://www.java.com/zh-CN/) 或 [TypeScript](https://www.typescriptlang.org/) 构建可扩展的 UI，并使用集成工具、组件和设计系统来更快地迭代、更好地设计和简化开发过程。拥有无限项目和五年免费维护。
  * [websitepulse.com](https://www.websitepulse.com/tools/) — 各种免费的网络和服务器工具。
  * [webhook-test.com](https://webhook-test.com) - 在集成期间使用唯一 URL 调试和检查 webhooks 和 HTTP 请求。完全免费，您可以创建无限 URL 并接收建议。
  * [webhook.site](https://webhook.site) - 使用自定义 URL 验证 webhooks、出站 HTTP 请求或电子邮件。临时 URL 和电子邮件

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 全面的应用安全平台，涵盖SCA、SAST、CSPM、DAST、Secrets、IaC、Malware、容器扫描、EOL等。免费计划包括两个用户、10个仓库、1个云、2个容器和1个域名的扫描。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) —发现网络中的受损系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站和API垃圾邮件过滤器。免费计划包括每天每个域名200个请求。
  * [atomist.com](https://atomist.com/) —更快、更便捷地自动化各种开发任务。目前处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) —Amazon Web Services（AWS）安全性和合规性审计和监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) —针对公共云基础设施的高置信度 Compromise Indicator（IOC），部分可在github（https://github.com/unknownhad/AWSAttacks）上找到。完整列表可通过API获取。
  * [CodeNotary.io](https://www.codenotary.io/) —开源平台，提供不可篡改的代码、文件、目录或容器的公证
  * [crypteron.com](https://www.crypteron.com/) —云原生、开发者友好的安全平台，防止.NET和Java应用程序中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) —分析和解码/编码数据的简单、直观的Web应用程序，无需处理复杂的工具或编程语言。像一把瑞士军刀的加密和解密工具。所有功能均可免费使用，无限制。开源，因此可以自托管。
  * [DAS](https://signup.styra.com/) —Styra DAS免费版，整个生命周期的策略管理，用于创建、部署和管理Open Policy Agent（OPA）授权


  * [Ubiq Security](https://ubiqsecurity.com/) — 使用三行代码和自动密钥管理来加密和解密数据。对于一个应用程序和每月1,000,000次加密免费。
  * [Virgil Security](https://virgilsecurity.com/) — 为您的数字解决方案提供端到端加密、数据库保护、物联网安全等工具和服务。对于拥有250个用户或以下的应用程序免费。
  * [Vulert](https://vulert.com) - Vulert持续监控您的开源依赖项，发现新漏洞并推荐修复，不需要安装或访问您的代码库。对于开源项目免费。
  * [Escape GraphQL Quickscan](https://escape.tech/) - 一键安全扫描您的GraphQL端点。免费，无需登录。
  * [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) - 在超过2000万个公开的GitHub仓库、代码片段、问题和评论中搜索泄露的密钥。免费。

**[⬆️ 返回顶部](#目录)**

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) - 针对应用程序和 API 的细粒度授权服务。最多可用于1000个月活跃用户（MAU）和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) - 无缝集成单点登录（SSO）、多因素认证（MFA）、免密码认证等功能。包括前端和后端应用的SDK。最多可用于1000个MAU和5个身份提供者。
  * [Auth0](https://auth0.com/) — 主机单点登录。免费计划包括25,000个MAU、无限社交连接、自定义域名等。
  * [Authgear](https://www.authgear.com) - 在几分钟内为应用程序添加免密码、一次性密码（OTP）、双因素认证（2FA）和单点登录（SSO）等功能。所有前端功能均已包含。最多可用于5000个MAU。
  * [Authress](https://authress.io/) — 身份验证登录和访问控制，任何项目均可使用无限身份提供者。包括Facebook、Google、Twitter等。前1000个API调用免费。
  * [Authy](https://authy.com) - 在多个设备上进行双因素认证（2FA），并支持备份。可替代Google Authenticator。最多可用于100次成功认证。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) - 完整的授权管理系统，用于编写、测试和部署访问策略。细粒度授权和访问控制，可最多免费使用100个月活跃主体。
  * [Clerk](https://clerk.com) — 用户管理、身份验证、2FA/MFA、预建UI组件用于登录、注册、用户配置文件等。最多可免费使用10,000个月活跃用户。
  * [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak身份和访问管理服务。最多可免费使用100个用户和1个域。
  * [Corbado](https://www.corbado.com/) — 将基于密钥的认

## 移动应用分发和反馈

  * [TestApp.io](https://testapp.io) - 你的移动应用测试保障平台，免费计划包括一个应用、分析、无限版本与安装、反馈收集。 
  * [Loadly](https://loadly.io) - 面向iOS与Android的Beta应用分发服务，完全免费，具有无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接在设备上部署iOS与Android应用。免费计划包括应用上传、密码保护链接、有效期一天和10次安装。
  * [InstallOnAir](https://www.installonair.com) - 在空中分发iOS与Android应用。免费计划包括无限上传、 私人链接、访客有效期2天和注册用户有效期60天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用以进行测试。免费计划包括一个应用项目、三个应用版本、500 MB存储空间和每月100次应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括五个应用、50次每月下载和最大文件大小100 MB。

**[⬆️ 返回顶部](#目录)**

## 管理系统

  * [bitnami.com](https://bitnami.com/) — 在 IaaS 上部署准备好的应用程序。免费管理一个 AWS 微实例
  * [Esper](https://esper.io) — 适用于 Android 设备的 MDM 和 MAM，具有 DevOps 功能。一百个设备免费，需购买一个用户许可证和 25 MB 应用程序存储空间。
  * [jamf.com](https://www.jamf.com/) — 管理 iPad、iPhone 和 Mac 设备，免费管理三个设备
  * [Miradore](https://miradore.com) — 设备管理服务。保持设备集群更新并免费安全管理无限设备。免费计划提供基本功能。
  * [moss.sh](https://moss.sh) - 帮助开发人员部署和管理他们的 Web 应用程序和服务器。每月免费提供 25 个 Git 部署
  * [runcloud.io](https://runcloud.io/) - 专注于 PHP 项目的服务器管理。免费管理最多 1 台服务器。
  * [ploi.io](https://ploi.io/) - 服务器管理工具，轻松管理和部署服务器和网站。免费管理一台服务器。

**[⬆️ 返回顶部](#目录)**

## 消息队列和流处理

  * [Ably](https://www.ably.com/) - 实时消息服务，支持存在感（presence）、持久化和保证递送。免费计划包括每月300万条消息、100个峰值连接和100个峰值频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) — [RabbitMQ](RabbitMQ消息队列服务)作为服务。Little Lemur计划：每月最多100万条消息、最多20个并发连接、最多100个队列、最多10,000条排队消息、不同可用区（AZ）的多个节点。
  * [courier.com](https://www.courier.com/) — 单一API用于推送、应用内、电子邮件、聊天、短信和其他消息频道，具有模板管理和其他功能。免费计划包括每月10,000条消息。
  * [engagespot.co](https://engagespot.co/) — 为开发者提供的多渠道通知基础设施，具有预构建的应用内收件箱和无代码模板编辑器。免费计划包括每月10,000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接到云原生IoT消息代理。免费连接最多100个设备（无需信用卡）永久有效。
  * [knock.app](https://knock.app) – 为开发者提供的通知基础设施。使用单一API调用向多个频道（如应用内、电子邮件、短信、Slack和推送）发送消息。免费计划包括每月10,000条消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) — 在5分钟内将用户通知添加到任何软件中。免费计划包括每月10,000个通知+100个短信和自动通话。
  * [Novu.co](https://novu.co) — 开源通知基础设施，为开发者提供服务。简单的组件和API用于管理所有通信渠道：电子邮件、短信、直接、应用内和推送。免费计划包括每月30,000个通知，保留期为90天。
  * [pusher.com](https://pusher.com/) — 实时消息服务。

## 日志管理

  * [bugfender.com](https://bugfender.com/) — 每天最多100k日志行，保留24小时
  * [logentries.com](https://logentries.com/) — 每月最多5 GB，保留七天
  * [loggly.com](https://www.loggly.com/) — 单用户免费，每天200MB，保留七天
  * [logz.io](https://logz.io/) — 每天最多1 GB，保留一天
  * [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) — 基于Manage Engine的日志管理服务。免费计划提供50 GB存储空间，保留15天，搜索保留7天。
  * [papertrailapp.com](https://papertrailapp.com/) — 搜索48小时，存档七天，每月50 MB
  * [sematext.com](https://sematext.com/logsene) — 每天最多500 MB，保留七天
  * [sumologic.com](https://www.sumologic.com/) — 每天最多500 MB，保留七天
  * [logflare.app](https://logflare.app/) — 每个应用每月最多12,960,000条日志，保留3天
  * [logtail.com](https://logtail.com/) — 基于ClickHouse的SQL兼容日志管理。每月最多1 GB，保留三天。
  * [logzab.com](https://logzab.com/) — 审计跟踪管理系统。每月最多1,000条用户活动日志，保留1个月，适用于最多5个项目。
  * [openobserve.ai](https://openobserve.ai/) - 每月最多200 GB的日志采集，保留15天

**[⬆️ 返回顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 无限的项目、字符串和协作者，适用于开源（Open Source）项目
  * [gitlocalize.com](https://gitlocalize.com) - 面向私有和公开仓库的免费和无限翻译服务
  * [Lecto](https://lecto.ai/) - 机器翻译 API（应用程序接口），包含免费层（每天 30 次免费请求， 每次请求 1000 个翻译字符）。集成到 Loco Translate Wordpress 插件中。
  * [lingohub.com](https://lingohub.com/) — 最多 3 个用户免费，开源项目永远免费
  * [localazy.com](https://localazy.com) - 免费提供 1000 个源语言字符串，支持无限语言、无限贡献者，启动和开源项目优惠
  * [Localeum](https://localeum.com) - 最多 1000 个字符串，一个用户，支持无限语言，支持无限项目
  * [localizely.com](https://localizely.com/) — 开源项目免费
  * [Loco](https://localise.biz/) — 最多 2000 个翻译，支持无限翻译人员，每个项目支持 10 个语言， 每个项目支持 1000 个可翻译资产
  * [oneskyapp.com](https://www.oneskyapp.com/) — 限制性免费版本，支持最多 5 个用户，开源项目免费
  * [POEditor](https://poeditor.com/) — 最多 1000 个字符串免费
  * [SimpleLocalize](https://simplelocalize.io/) - 最多 100 个翻译键，支持无限字符串，支持无限语言，启动项目优惠
  * [Texterify](https://texterify.com/) - 单用户免费
  * [Tolgee](https://tolgee.io) - 免费的 SaaS（软件即服务）版本，提供有限的翻译服务，支持自托管版本永久免费
  * [transifex.com](https://www.transifex.com/) — 开源项目免费
  * [Translation.io](https://translation.io) - 开源项目免费
  * [Translized](https

## Monitoring

  * [UptimeObserver.com](https://uptimeobserver.com) - 获取20个运行时间监控器，间隔5分钟，以及可自定义的状态页面，即使用于商业用途。通过电子邮件和 Telegram 享受无限的实时通知。无需信用卡即可开始使用。
  * [Pingmeter.com](https://pingmeter.com/) - 5个运行时间监控器，间隔10分钟。监控SSH、HTTP、HTTPS和任何自定义的TCP端口。
  * [alerty.ai](https://www.alerty.ai) - 为您的前端（FE）、后端（BE）、数据库（DB）等提供免费的应用性能监控（APM）和监控，以及免费的代理运行。
  * [appdynamics.com](https://www.appdynamics.com/) — 免费使用24小时的指标，应用性能管理代理仅限于一个Java、一个.NET、一个PHP和一个Node.js
  * [appneta.com](https://www.appneta.com/) — 免费使用，数据保留1小时
  * [appspector.com](https://appspector.com/) - 远程iOS/Android/Flutter调试的任务控制中心。适用于小流量使用（64MB日志）的免费套餐。
  * [assertible.com](https://assertible.com) — 自动化API测试和监控。为团队和个人提供免费套餐。
  * [bleemeo.com](https://bleemeo.com) - 免费适用于3个服务器、5个运行时间监控器、无限用户、无限仪表盘和无限告警规则。
  * [checklyhq.com](https://checklyhq.com) - 面向开发者的开源E2E/合成监控和深度API监控。免费套餐包含五个用户和50,000+检查运行。
  * [cloudsploit.com](https://cloudsploit.com) — AWS安全和配置监控。免费：无限的按需扫描、无限用户、无限存储帐户。订阅：自动扫描、API访问等。
  * [cronitor.io](https://cronitor.io/) - cron作业、网站、API等的性能洞察和运行时间监控。免费套餐包含五个监控器。


  * [sematext.com](https://sematext.com/) — 为24小时指标、无限服务器、十个自定义指标、500,000个自定义指标数据点、无限仪表盘、用户等提供免费服务
  * [sitemonki.com](https://sitemonki.com/) — 提供网站、域名、Cron & SSL 监控，每个类别5个免费监控
  * [sitesure.net](https://sitesure.net) -网站和Cron监控，2个免费监控
  * [skylight.io](https://www.skylight.io/) — 为前100,000个请求提供免费服务（仅限 [Rails](https://rubyonrails.org/，ruby on rails））
  * [speedchecker.xyz](https://probeapi.speedchecker.xyz/) — 性能监控 [API](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E5%BC%8F) ，检查 [Ping](https://zh.wikipedia.org/wiki/Ping) 、 [DNS](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F) 等
  * [stathat.com](https://www.stathat.com/) — 您可以免费开始使用十个统计数据，无过期时间
  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限免费测试（带有一些限制）
  * [statusgator.com](https://statusgator.com/) — 状态页监控，3个免费监控
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、 uptime 监控、 [DNS](https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F) & 域名监控。您可以免费监控10个服务器、10个 uptime 和10个域名
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。三个位置和20个主要 [Web](https://zh.wikipedia.org/wiki/%E7%BD%91%E

## 崩溃和异常处理

  * [CatchJS.com](https://catchjs.com/) - JavaScript 错误追踪，提供截图和点击轨迹。开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 面向开发者提供错误跟踪，试用期后每月前2,000个错误免费。
  * [elmah.io](https://elmah.io/) — Web开发者的错误日志记录和运行时监控。开源项目免费享受Small Business订阅。
  * [Embrace](https://embrace.io/) — 移动应用程序监控。小团队每年最多1,000万个用户会话免费。
  * [exceptionless](https://exceptionless.com) — 实时错误、功能、日志报告等。每月3k事件/1用户免费。开源且易于自托管使用，无使用限制。
  * [GlitchTip](https://glitchtip.com/) — 简单、开源的错误追踪，与Sentry的SDK兼容。每月1,000个事件免费，或者可以自托管无限制使用。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、运行时和定时任务监控。小团队和开源项目每月12,000个错误免费。
  * [memfault.com](https://memfault.com) — 云设备可观察性和调试平台。Nordic、NXP和Laird设备每月100台设备免费。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，每月5,000个错误免费，用户数量无限制，30天保留期。
  * [sentry.io](https://sentry.io/) — Sentry实时追踪应用异常，拥有小型免费计划。每月5k错误/1用户免费，自托管时无限制使用。
  * [Axiom](https://axiom.co/) — 存储最多0.5TB的日志，保留30天。包括Vercel等平台的集成和高级数据查询功能，支持email/Discord通知。
  * [Semaphr](https://semaphr.com) — 移动应用的免费全能“Kill Switch

## Search

  * [algolia.com](https://www.algolia.com/) — 专门的搜索解决方案，具备 [负载搜索](load balancing search) 功能、[相关性](relevance) 和 [UI 库](UI libraries)，可轻松创建搜索体验。免费的“构建”计划包括 1M 文档和 10K 次搜索/月。同时还提供免费的 [开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费 1 GB 内存和 1 GB 存储
  * [CommandBar](https://www.commandbar.com/) - 统一搜索栏（Search Bar）服务，基于 web 的 UI 小部件/插件，允许用户在产品中搜索内容、导航、功能等，有助于提高发现效率。对于最多 1,000 名月活跃用户免费，命令无限。
  * [Magny](https://magny.io) - SaaS 服务，帮助实施命令调色板（例如内置搜索），显著减少用户在应用程序中查找内容的时间，提高用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) — 免费 3 个索引，100K 文档/索引，无限制全文/向量/混合搜索，60 天分析
  * [searchly.com](http://www.searchly.com/) — 免费 2 个索引和 20 MB 存储

**[⬆️ 返回顶部](#目录)**

## 教育和职业发展

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 开源平台，提供免费的数据分析、信息安全、Web开发等课程和认证。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，关注JavaScript和Ruby的Web开发课程。
  * [免费专业简历模板和编辑器](https://www.overleaf.com/latex/templates/tagged/cv) - 免费平台，提供大量经验丰富的专业人士的简历模板，支持克隆、编辑和下载，优化了申请者跟踪系统（ATS）。
  * [DeepLearning.AI短期课程](https://www.deeplearning.ai/short-courses/) - 行业领先专家的免费短期课程，通过1小时或更短的时间内获得最新的生成人工智能工具和技术的实践经验。
  * [LabEx](https://labex.io) - 通过交互式实验室和真实世界项目开发Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 覆盖从区块链到用户体验设计（UX Design）所有开发方面的免费学习路线图。
  * [思科网络学院，技能为所有人](https://skillsforall.com/) - 提供网络安全、网络和Python等主题的免费认证课程。
  * [MIT开放课程](https://ocw.mit.edu/) - MIT开放课程是一个在线出版的平台，共享超过2500个MIT课程的材料，免费与世界各地的学习者和教育者分享。YouTube频道可以在[@mitocw](https://www.youtube.com/@mitocw/featured)找到。
  * [W3Schools](https://www.w3schools.com/) - 提供有关HTML、CSS、JavaScript等Web开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费的HTML/CSS、JavaScript和SQL基本和高级学习指导。

**[⬆️ 返回顶部](#目录)**

## 电子邮件

  * [10minutemail](https://10minutemail.com) - 免费、临时邮箱，用于测试。
  * [AhaSend](https://ahasend.com) - 交易邮件服务，免费发送 1000 封邮件每月，且不限域名、团队成员、Webhooks 和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名邮件转发，免费创建无限邮件别名。
  * [Antideo](https://www.antideo.com) — 每小时 10 个 API 请求用于邮箱验证、IP 和电话号码验证，不需要信用卡。
  * [Brevo](https://www.brevo.com/) — 每月 9,000 封邮件，每天 300 封邮件免费。
  * [OneSignal](https://onesignal.com/) — 每月 10,000 封邮件，不需要信用卡。
  * [Bump](https://bump.email/) -免费获得 10 个 Bump 邮箱地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) – 免费获得 5 个 Burner 邮箱地址，1 个邮箱，7 天的邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 答问服务，最多 100 个订阅者免费。
  * [CloudMailin](https://www.cloudmailin.com/) - 通过 HTTP POST 接受输入邮件和发送交易邮件 - 每月 10,000 封邮件免费。
  * [Contact.do](https://contact.do/) — 联系表单链接（类似 bitly 链接，但用于联系表单）。
  * [debugmail.io](https://debugmail.io/) — 开发者友好的测试邮件服务器。
  * [DNSExit](https://dnsexit.com/) - 免费获得 2 个邮箱地址，100MB 存储空间，支持 IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) — 每月免费发送 9,000 封邮件，每天最多 300 封邮件。
  * [EmailOctopus](https://emailoctopus.com) - 最多 2,500 位订阅者

  * [QuickEmailVerification](https://quickemailverification.com) — 每天验证100封电子邮件的免费版，另外还包括DEA检测、DNS查找、SPF检测等免费API。
  * [Resend](https://resend.com) - 面向开发者的交易电子邮件API。每月3,000封电子邮件，每天100封电子邮件免费，一个自定义域名。
  * [Sender](https://www.sender.net) 最多15,000封电子邮件/月， 最多2,500订阅者
  * [SendGrid](https://sendgrid.com/) — 每天100封电子邮件和2,000个联系人免费
  * [Sendpulse](https://sendpulse.com) — 500订阅者/月，15,000封电子邮件/月免费
  * [SimpleLogin](https://simplelogin.io/) – 开源的、可自托管的电子邮件别名/转发解决方案。5个别名免费，带宽无限制，回复/发送无限制。对于教育人员（学生、研究人员等）免费。
  * [Substack](https://substack.com) — 无限制的免费新闻邮件服务。当你开始收费时才开始付费。
  * [Sweego](https://www.sweego.io/) - 面向开发者的欧洲交易电子邮件API。每天500封电子邮件免费。
  * [Takeout](https://takeout.bysourfruit.com) - 一个不断更新的电子邮件服务，使发送电子邮件变得容易。五百个交易电子邮件/月免费。
  * [temp-mail.io](https://temp-mail.io) — 提供多个电子邮件同时使用和转发的免费一次性临时电子邮件服务
  * [tinyletter.com](https://tinyletter.com/) — 5,000订阅者/月免费
  * [Touchlead](https://touchlead.app) - 一个多用途的营销自动化工具，具有潜在客户管理、表单构建和自动化功能。对于有限数量的潜在客户和自动化免费。
  * [trashmail.com](https://www.trashmail.com) - 提供转发和自动地址过期的免费一次性电子邮件地址

## 功能开关管理平台

  * [ConfigCat](https://configcat.com) - ConfigCat 是一个针对开发者的特性开关（feature flag）服务，具有无限的团队规模、良好的支持和合理的价格标签。免费计划可支持最多 10 个标志、两个环境、1 个产品和每月 500 万个请求。
  * [Flagsmith](https://flagsmith.com) - 用信心发布特性；管理 Web、移动和服务器端应用程序中的特性标志。使用我们的托管 API、部署到您的私有云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 一款开源的特性开关和 A/B 测试提供者，内置贝叶斯统计分析引擎。免费支持最多 3 个用户、无限的特性标志和实验。
  * [Hypertune](https://www.hypertune.com) - 类型安全的特性标志、A/B 测试、分析和应用程序配置，具有 Git 风格的版本控制和同步、内存中的本地标志评估。免费支持最多 5 个团队成员、无限的特性标志和 A/B 测试。
  * [Molasses](https://www.molasses.app) - 强大的特性标志和 A/B 测试。免费支持最多 3 个环境，每个环境最多 5 个特性标志。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域特性切换管理平台。免费计划支持最多 10 个标志、两个环境、无限请求。SDK、分析仪表板、发布日历、Slack 通知和所有其他功能都包含在无限免费计划中。
  * [Statsig](https://www.statsig.com) - 一个用于特性管理、A/B 测试、分析等的强大平台。其慷慨的免费计划提供无限的席位、标志、实验和动态配置，支持每月最多 100 万个事件。
  * [Abby](https://www.tryabby.com) - 开源特性标志和 A/B 测试。代码即配置（Configuration as Code）和完全类型化的 Typescript SDK

## 字体

  * [dafont](https://www.dafont.com/) - 本网站上呈现的字体是其作者的财产，属于免费软件（freeware）、共享软件（shareware）、演示版或公共领域。
  * [Everything Fonts](https://everythingfonts.com/) - 提供多种工具；@font-face、单位转换器（Units Converter）、字体线条优化器（Font Hinter）和字体提交器（Font Submitter）。
  * [Font Squirrel](https://www.fontsquirrel.com/) - 为商业工作授权的免费字体。手选这些字体并以易于使用的格式呈现。
  * [Google Fonts](https://fonts.google.com/) - 许多免费字体可以通过下载或链接到Google的[内容分发网络](https://baike.baidu.com/item/%E5%86%85%E5%AE%B9%E5%88%86%E5%8F%91%E7%BD%91%E7%BB%9C/1516583)（CDN）轻松快速地安装在网站上。
  * [FontGet](https://www.fontget.com/) - 提供多种可下载的字体，并以标签（tags）分类整理。
  * [Fontshare](https://www.fontshare.com/) - 是一个免费字体服务。它是一个日益增长的专业级字体集合，对个人和商业使用100%免费。
  * [Befonts](https://befonts.com/) - 为个人或商业用途提供多种独特的字体。
  * [Font of web](https://fontofweb.com/) -识别网站上使用的所有字体以及它们的使用方式。
  * [Bunny](https://fonts.bunny.net) 以隐私为导向的[Google Fonts](https://fonts.google.com/)。
  * [FontsKey](https://www.fontskey.com/) - 提供免费和付费字体用于个人使用，可以输入文本快速过滤。
  * [fonts.xz.style](https://fonts.xz.style/) 免费开源服务，使用CSS为网站提供字体家族。
  * [Fontsensei](https://fontsensei.com/) 由用户标记的开源[Google Fonts](https://fonts.google.com/)，包含[中文](https://

## 表单

  * [Feathery](https://feathery.io) - 强大的、开发者友好的表单构建器。可用于构建注册和登录、用户引导、支付流程、复杂的金融应用等。免费计划允许每月最多250次提交和五个活跃表单。
  * [Form-Data](https://form-data.com) - 无需编码的表单后端。支持垃圾邮件过滤、电子邮件通知和自动回复、Webhook、Zapier、重定向、AJAX或POST等。免费计划提供无限表单、每月20次提交，并且带有Form-Data徽标可获得额外2000次提交。
  * [FabForm](https://fabform.io/) - 为智能开发者设计的表单后端平台。免费计划每月允许250次表单提交。具有友好的现代GUI。与Google Sheets、Airtable、Slack、电子邮件等集成。
  * [Form.taxi](https://form.taxi/) - 支持通知、垃圾邮件拦截和GDPR合规数据处理的HTML表单提交端点。免费计划适用于基本用途。
  * [Formcarry.com](https://formcarry.com) - HTTP POST表单端点，免费计划允许每月100次提交。
  * [formingo.co](https://www.formingo.co/) - 适用于静态网站的简单HTML表单。您可以免费开始使用，无需注册帐户。免费计划允许每月500次提交和可自定义的回复邮箱地址。
  * [FormKeep.com](https://www.formkeep.com/) - 提供无限表单、每月50次提交、垃圾邮件保护、电子邮件通知和拖放式设计器，可导出HTML。其他功能包括自定义字段规则、团队和集成到Google Sheets、Slack、ActiveCampaign和Zapier。
  * [formlets.com](https://formlets.com/) - 在线表单，无限单页表单/月，100次提交/月，电子邮件通知。
  * [formspark.io](https://formspark.io/) - 表单发送至电子邮件服务，免费计划允许无限表单，每月250

  * [Sprig](https://sprig.com/) - 每月1个产品内 [调查表](https://zh.wikipedia.org/zh-cn/%E8%B0%83%E7%A0%94) 或带[重放](https://zh.wikipedia.org/zh-cn/%E9%87%8D%E6%94%BE) 的调查表，附带 [GPT](https://zh.wikipedia.org/zh-cn/GPT)(通用预训练Transformer) 人工智能分析。
  * [feedback.fish](https://feedback.fish/) - 免费计划允许收集25个反馈提交。易于集成 [React](https://zh.wikipedia.org/zh-cn/React) 和 [Vue](https://zh.wikipedia.org/zh-cn/Vue.js) 组件。
  
**[⬆️ 返回顶部](#目录)**

## 生成式人工智能

  * [Keywords AI](https://keywordsai.co) - 最好的大型语言模型（LLM）监控平台。只需两行代码，即可以一种格式调用200多个LLM， 每月有10,000次免费请求，平台功能无需付费！
  * [Portkey](https://portkey.ai/) - 面向基于 [生成式人工智能](https://zh.wikipedia.org/wiki/%E7%94%9F%E6%88%90%E5%BC%8F%E4%BA%BA%E5%B7%A5%E6%99%BA) 应用的控制面板，具有可观察性套件和人工智能网关。每月可免费发送和记录最高10,000次请求。
  * [Braintrust](https://www.braintrustdata.com/) - 适用于基于生成式人工智能的.eval，提示游乐场和数据管理。免费计划每周可提供最高1,000个私有评估行。
  * [Findr](https://www.usefindr.com/) - 允许您一次性搜索所有应用程序的通用搜索。搜索助手允许您使用您的信息来回答问题。免费计划提供无限统一搜索和每天5个合作飞行员查询。
  * [ReportGPT](https://report-gpt.io) - 人工智能驱动的写作助手。只要您带有自己的[API](https://zh.wikipedia.org/wiki/%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E6%8E%A5%E5%8F%A3)密钥，该平台将永远免费。
  * [Clair](https://askclair.ai/) - 临床人工智能参考。学生可以免费访问专业工具套件，其中包括 [Open Search](https://baike.baidu.com/item/Open%20Search/6688133)，临床摘要，Med审查，药物相互作用，[ICD-10](https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E7%97%85%E7%8A%B6%E5%88%86%E7%B1%BB)代码和管理。此外，专业套件还提供免费试用。
  * [Langtrace](https://langtrace

## 内容分发网络和保护

  * [bootstrapcdn.com](https://www.bootstrapcdn.com/) — [Bootstrap](Bootstrap，前端开发框架) 的 [CDN](内容分发网络)，同时支持 [Bootswatch](Bootswatch，Bootstrap主题) 和 [Font Awesome](Font Awesome，图标字体) 
  * [cdnjs.com](https://cdnjs.com/) — 简单、高效、可靠的内容分发网络，[cdnjs](cdnjs，是一个免费开源的 CDN 服务) 是一个免费开源的 [CDN](内容分发网络) 服务，受到11%以上网站的信任，采用 [Cloudflare](Cloudflare，内容分发网络) 强力驱动。
  * [developers.google.com](https://developers.google.com/speed/libraries/) — [Google 主机库](Google Hosted Libraries) 是一个针对热门开源 [JavaScript](JavaScript) 库的内容分发网络
  * [Stellate](https://stellate.co/) - [Stellate](Stellate，是一个针对 GraphQL API 的内容分发网络) 是一个针对 [GraphQL](GraphQL 查询语言) API 的极快、可靠的 [CDN](内容分发网络)，为两个服务提供免费支持。
  * [jsdelivr.com](https://www.jsdelivr.com/) — 一个免费、快速、可靠的开源 [CDN](内容分发网络)，支持 [npm](npm，Node.js包管理器)、[GitHub](GitHub，代码托管平台)、[WordPress](WordPress，内容管理系统)、[Deno](Deno，运行时环境) 等。
  * [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — [Microsoft Ajax CDN](Microsoft Ajax，异步JavaScript和XML) 主机托管流行的第三方 [JavaScript](JavaScript) 库，如 [jQuery](jQuery，JavaScript库)，并且让你轻松将它们添加到 Web 应用中
  * [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 免费的 [DDoS](分布式拒绝服务) 保护和 [SSL](安全套接字层) 证书
  * [Skypack](https://www.skypack.dev/) — 100% 本地 [ES](ECMAScript) 模块 [JavaScript](JavaScript) [CDN](内容分

## PaaS

  * [anvil.works](https://anvil.works) - 使用Python进行Web应用开发，不需要其他语言。免费套餐包含无限应用和30秒超时。
  * [appwrite](https://appwrite.io) - 支持无限项目，不会暂停项目（支持websockets），并提供身份验证服务。免费套餐包含1个数据库、3个桶、5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，免费用于2个项目，功能有限，但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) — 开源、跨平台、移动应用开发工具链，适用于Java/Kotlin开发者。免费用于商业用途，支持无限项目。
  * [deco.cx](https://www.deco.cx/en/dev) - 边缘原生前端平台，提供视觉CMS，自动从TypeScript代码生成。内置A/B测试、内容分段和实时分析。适用于内容密集型和企业电子商务网站。免费使用量达到5k页视图/月或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，运行JavaScript、TypeScript和WebAssembly边缘节点。免费套餐包含每天100,000个请求和每月100 GiB数据传输。
  * [domcloud.co](https://domcloud.co) – Linux托管服务，提供CI/CD与GitHub、SSH和MariaDB/Postgres数据库。免费版本包含1 GB存储和1 GB网络/月限制，仅限免费域名。
  * [encore.dev](https://encore.dev/) — 后端框架使用静态分析，提供自动基础设施、无样板代码等。包含免费云托管，适用于爱好者项目。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 部署Web服务、数据库和更多服务到您的AWS账户，使用Git推送风格工作流。免费套餐适用于一个开发者，个人GitHub仓库。AWS费用通过AWS计费，但您可以使用积分和AWS免费套餐。
  * [gigalixir.com](https://gigalixir.com/) - Gigalixir提供一个永不休眠

## 后端即服务

  * [Activepieces](https://www.activepieces.com) - 构建自动化工作流以建立多个应用程序之间的连接，例如，当应用程序中的事件触发时，发送Slack消息或添加Google 表格行。每月最高 5,000 个任务免费。
  * [back4app.com](https://www.back4app.com) - Back4App 是基于 Parse Platform 的易于使用、灵活且可扩展的后端。
  * [backendless.com](https://backendless.com/) — 移动和 Web 后端服务，1 GB 文件存储免费，50,000 条每月推送通知，表格中有 1000 个数据对象。
  * [bismuth.cloud](https://www.bismuth.cloud/) — 我们的 AI 将启动您在我们函数运行时和托管存储上的 Python API，免费建立和托管在我们的在线编辑器或使用您喜欢的工具进行本地构建。
  * [BMC 开发者计划](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) — BMC 开发者计划提供文档和资源以建立和部署企业级的数字创新。访问包括平台、SDK 和组件库的综合个人沙盒，可以用来建立和定制应用程序。
  * [connectycube.com](https://connectycube.com) - 不限聊天消息、点对点语音和视频通话、文件附件和推送通知。最多 1000 名用户的应用程序免费。
  * [convex.dev](https://convex.dev/) - 反应式后端服务，托管数据（具有关系的文档和可序列化的 ACID 事务）、无服务器函数和 WebSockets 以流式传输更新到各种客户端。适用于小型项目免费 - 最多 1M 记录、5M 每月函数调用。
  * [darklang.com](https://darklang.com/) - 与编辑器和基础设施相结合的托管语言。在 beta期间可以访问，一旦 beta 结束，将提供慷慨的免费层。
  * [Firebase](https://firebase.com) — Firebase 帮助您建立和运行成功的应用程序。免费的 Spark 计划提供身份验证、托管、Firebase ML、实时数据库

## 低代码平台

  * [Clappia](https://www.clappia.com) — 一个低代码平台，用于构建具有自定义移动和 web 应用的业务流程应用程序。提供拖放界面，支持离线模式、实时位置跟踪和与各种第三方服务集成等功能。
  * [Basedash](https://www.basedash.com) — 低代码平台，用于构建内部管理面板和仪表盘。支持 SQL 数据库和 REST API。
  * [BudiBase](https://budibase.com/) — BudiBase 是一个开放源代码的低代码平台，用于在几分钟内创建内部应用程序。支持 PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [appsmith](https://www.appsmith.com/) — 低代码项目，用于构建管理面板、内部工具和仪表盘。与 15+ 个数据库和任何 API 集成。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用程序。连接数据库、云存储、GraphQL、API 端点、Airtable 等，可以使用拖放式应用程序构建器来构建应用程序。
  * [ReTool](https://retool.com/) — 低代码平台，用于构建内部应用程序。ReTool 高度可定制。如果可以使用 JavaScript 和 API 编写代码，可以在 ReTool 中制作。免费版本允许每月最多 5 名用户，无限应用程序和 API 连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ - 一个低代码平台，帮助工程团队和产品经理以 10 倍的速度构建内部工具、自定义用户旅程、数字体验、自动化、自定义管理面板和运营应用程序。
  * [ILLA Cloud](https://www.illacloud.com/) — ILLA Cloud - 一个强大的开放源代码低代码平台，用于开发人员构建内部工具。通过使用 ILLA 的组件和操作库，开发人员可以节省大量构建工具的时间。对于 5 名团队成员免费。
  * [outsystems.com](https://www.outsystems.com/) — 企业网页开发 PaaS，适

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 提供100 MB免费网页托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义网页服务器，通过FTP、WebDAV和SSH访问，还包括邮箱、邮件列表和应用程序安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费网页托管，免费短域名，PHP、MySQL、应用程序安装器、电子邮件发送，不带广告。
  * [Bohr](https://bohr.io) — 为非商业项目提供免费服务，采用的开发者优先的部署和开发平台，尽量减少基础设施麻烦，加快设置速度。
  * [Bubble](https://bubble.io/) — 通过视觉编程方式构建网页和移动应用，无需代码，免费使用 Bubble 的品牌标识。
  * [dAppling Network](https://www.dappling.network/) - 一个为Web3前端关注点增加正常运行时间和安全的去中心化网页托管平台，并为用户提供额外的访问点。
  * [DigitalOcean](https://www.digitalocean.com/pricing) - 在应用程序平台的起始级别上免费搭建和部署三个静态网站。
  * [Drive To Web](https://drv.tw) — 直接从Google Drive和OneDrive托管至网页，仅限静态网站，永久免费，每个Google/Microsoft账户仅限一个网站。
  * [Fenix Web Server](https://preview.fenixwebserver.com) - 一个开发者桌面应用程序，用于本地托管网站，并实时公开共享。使用其美丽的用户界面、API和/或CLI按您喜欢的方式工作。
  * [Fern](https://buildwithfern.com) - 在Fern的免费计划上构建和托管基于Markdown的文档网站。您甚至可以从API定义文件自动生成网站的API引用。该网站托管在_yoursite_.docs.buildwithfern.com。
  * [Free Hosting](https://freehostingnoads.net/) — 免费托管，支持PHP 5、Perl、CGI、MySQL、FTP、文件

## 域名服务

  * [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 免费的公用DNS解析器（[DNS Resolver](https://zh.wikipedia.org/wiki/DNS%E8%A7%A3%E6%9E%90%E5%99%A8)），速度快，安全性高（加密DNS查询），由[Cloudflare](https://zh.wikipedia.org/wiki/Cloudflare)提供。有助于绕过互联网服务提供商的DNS屏蔽，防止DNS查询嗅探，并且可以[屏蔽成人和恶意内容](https://developers.cloudflare.com/1.1.1.1/1.1.1.1-for-families)。它也可以通过[API](https://developers.cloudflare.com/1.1.1.1/encrypted-dns/dns-over-https/make-api-requests)使用。注意：仅仅是一个DNS解析器，而不是DNS宿主。
  * [1984.is](https://www.1984.is/product/freedns/) — 提供API和许多其他免费DNS功能的免费DNS服务。
  * [cloudns.net](https://www.cloudns.net/) — 为1个域名提供高达50条记录的免费DNS托管。
  * [deSEC](https://desec.io) - 具有API支持的免费DNS托管，专注于安全性。运行在开源软件上，并由[SSE](https://www.securesystems.de/)支持。
  * [dns.he.net](https://dns.he.net/) — 支持动态DNS的免费DNS托管服务。
  * [Zonomi](https://zonomi.com/) — 具有即时DNS传播的免费DNS托管服务。免费计划：支持1个DNS区域（域名），最多10条DNS记录。
  * [dnspod.com](https://www.dnspod.com/) — 免费DNS托管。
  * [duckdns.org](https://www.duckdns.org/) — 支持最多5个域名的免费动态DNS服务。包含针对各种设置的配置指南。
  * [Dynv6.com](https://dynv6.com/) — 支持[API](https://dynv6.com/docs/apis)的免费动态DNS服务，管理多种DNS记录类型（

## 域名

  * [eu.org](https://nic.eu.org) — 免费 eu.org 域名，通常14天内审批通过。 
  * [pp.ua](https://nic.ua/) — 免费 pp.ua 子域名。
  * [us.kg](https://nic.us.kg/) - 免费 us.kg 子域名。

**[⬆️ 返回顶部](#目录)**

## 基础设施即服务

  * [4EVERLAND](https://www.4everland.org/) — 与 AWS S3 兼容，支持 API、接口操作、CLI 和其他上传方法，以安全、方便、 高效的方式从 IPFS（星际文件系统） 和 Arweave（一块下链） 网络上传和存储文件。注册用户可以免费获得 6 GB 的 IPFS存储空间和 300 MB 的 Arweave 存储空间。小于 150 KB 的任何 Arweave 文件上传均免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2 云存储。提供免费的 10 GB（类似 Amazon S3 的对象存储），无时间限制。
  * [filebase.com](https://filebase.com/) - 受区块链驱动的 S3 兼容对象存储。提供 5 GB 的免费存储空间，无时间限制。
  * [Tebi](https://tebi.io/) - S3兼容的对象存储。提供 25 GB 的免费存储空间和 250 GB 的出站传输带宽。
  * [Idrive e2](https://www.idrive.com/e2/) - S3兼容的对象存储。提供 10 GB 的免费存储空间和每月 10 GB 的下载带宽。
  * [C2 Object Storage](https://c2.synology.com/en-us/pricing/object-storage) - S3兼容的对象存储。提供 15 GB 的免费存储空间和每月 15 GB 的下载量。

**[⬆️ 返回顶部](#目录)**

## 托管数据服务

  * [Aiven](https://aiven.io/) - Aiven 提供免费的 PostgreSQL、MySQL 和 Redis 计划，在其开源数据平台上。单节点，1 CPU，1GB RAM，对于 PostgreSQL 和 MySQL，有 5GB 存储空间。易于迁移到更广泛的计划或跨云迁移。
  * [airtable.com](https://airtable.com/) — 看起来像电子表格，但它是一个关系数据库，具有无限的数据库，1,200 行/数据库，和 1,000 次 API 请求/月
  * [Astra](https://www.datastax.com/products/datastax-astra/) — 云原生 Cassandra 作为服务，拥有 [80GB 免费层](https://www.datastax.com/products/datastax-astra/pricing)
  * [codehooks.io](https://codehooks.io/) — 易于使用的 JavaScript 服务器无服务器 API/后端和 NoSQL 数据库服务，具有函数、Mongdb-ish 查询、键值查找、作业系统、实时消息、工作队列、强大的 CLI 和基于 Web 的数据管理器。免费计划有 5GB 存储空间和 60 次 API 调用/分钟。包含 2 个开发者，不需要信用卡。
  * [CrateDB](https://crate.io/) - 分布式开源 SQL 数据库，用于实时分析。[免费层 CRFREE](https://crate.io/lp-crfree)：一节点，2 CPU，2 GiB 内存，8 GiB 存储空间。每个组织一个集群，无需支付方式。
  * [FaunaDB](https://fauna.com/) — 服务器无服务器云数据库，具有原生 GraphQL，多模型访问，每日免费层，最多 100 MB
  * [Upstash](https://upstash.com/) — 服务器无服务器 Redis，免费层最多 10,000 次请求/天，256MB 最大数据库大小，20 个并发连接
  * [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) — 免费层提供 512 MB
  * [redsmin.com](https://www.redsmin.com/) — 在线实时监控和管理服务，用于 Redis，监控 1 个 Redis 实例免费
  * [redislabs](https://redislabs

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  * [Pinggy](https://pinggy.io) — 使用单个命令为本地主机创建公共URL，无需下载。支持HTTPS/TCP/TLS隧道，免费计划的隧道生命周期为60分钟。
  * [conveyor.cloud](https://conveyor.cloud/) — Visual Studio扩展，用于将IIS Express暴露给本地网络或通过隧道暴露给公共URL。
  * [Hamachi](https://www.vpn.net/) — LogMeIn Hamachi是一个托管的VPN服务，允许您安全地将类似局域网的网络扩展到分布式团队，免费计划允许创建无限网络，最多5人。
  * [Mirna Sockets](https://mirna.cloud/) - 免费的Socket即服务平台，为您提供wss:// URL用于部署Web Socket Server代码，并允许您监视其性能。
  * [localhost.run](https://localhost.run/) — 通过隧道将本地运行的服务器暴露给公共URL。
  * [localtunnel](https://theboroer.github.io/localtunnel-www/) — 通过隧道将本地运行的服务器暴露给公共URL。免费托管版本和[开源](https://github.com/localtunnel/localtunnel)。
  * [ngrok.com](https://ngrok.com/) — 通过隧道将本地运行的服务器暴露给公共URL。
  * [cname.dev](https://cname.dev/) — 免费且安全的动态反向代理服务。
  * [serveo](https://serveo.net/) — 将本地服务器暴露给互联网。无需安装，无需注册。免费子域名，无限制。
  * [Radmin VPN](https://www.radmin-vpn.com/) — 通过VPN启用的类似局域网的网络连接多台计算机。无限节点。 (Hamachi 替代品)
  * [segment.com](https://segment.com/) — 翻译和路由事件到其他第三方服务的中心。免费100,000次事件/月
  * Google STUN — [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
  * Twilio STUN — [stun:global.stun.twilio.com:3478?transport=udp

## 问题跟踪和项目管理

  * [acunote.com](https://www.acunote.com/) — 免费的项目管理和 [SCRUM](SCRUM 敏捷开发方法) 软件，适用于最多 5 名团队成员
  * [asana.com](https://asana.com/) — 面向包含协作者的私有项目免费
  * [Backlog](https://backlog.com) — 一个平台包含了您的团队发布优秀项目所需的一切。免费计划提供 1 个项目、10 名用户和 100MB 的存储空间。
  * [Basecamp](https://basecamp.com/personal) - 任务列表、里程碑管理、类论坛消息、文件共享和时间跟踪。最多 3 个项目、20 名用户和 1GB 的存储空间。
  * [bitrix24.com](https://www.bitrix24.com/) — 企业内网和项目管理工具。免费计划为无限用户提供 5GB 存储空间。
  * [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、[UML](统一建模语言)、网络图。免费的最大 15 名用户/图表，25 张表格
  * [Chpokify](https://chpokify.com/) — 基于团队的规划扑克牌，节省在 [Sprint](敏捷开发中的一个迭代周期) 估算上的时间。免费适用于最多 5 名用户，免费的 [Jira](一种项目管理工具) 集成，免费的视频呼叫，无限团队，无限会议。
  * [clickup.com](https://clickup.com/) — 项目管理。免费，具有云存储的高级版。移动应用和 [Git](版本控制系统) 集成可用。
  * [Clockify](https://clockify.me) - 时间跟踪器和时间表应用，允许您跨项目跟踪工作时间。无限用户，永久免费。
  * [Cloudcraft](https://cloudcraft.co/) — 设计专业的体系结构图，仅需几分钟，使用 Cloudcraft 视觉设计器，针对 [AWS](亚马逊网络服务) 优化，具有显示实时数据的智能组件。免费计划为单用户提供无

  * [plan.io](https://plan.io/) — 项目管理，具有仓库托管和更多选项。免费提供两位用户、十位客户和500MB存储空间
  * [Plane](https://plane.so/) -  Plane是一个简单、可扩展、开源的项目和产品管理工具。免费提供无限成员、最高5MB文件上传、1000个问题。
  * [planitpoker.com](https://www.planitpoker.com/) — 免费的在线规划扑克（估计工具）
  * [point.poker](https://www.point.poker/) - 在线规划扑克（基于共识的估计工具）。免费提供无限用户、团队、会话、回合和投票，不需要注册。
  * [ScrumFast](https://www.scrumfast.com) - 使用非常直观的界面的Scrum板，免费提供给五位用户。
  * [Shake](https://www.shakebugs.com/) - 移动应用程序的应用内错误报告和反馈工具。免费提供每个应用程序每月10个错误报告。
  * [Shortcut](https://shortcut.com/) - 项目管理平台，免费提供给十位用户，永久有效。
  * [Tadum](https://tadum.app) - 为反复举行的会议设计的会议议程和会议纪要应用程序，免费提供给最多10人的团队。
  * [taiga.io](https://taiga.io/) — 面向初创企业和敏捷开发者的项目管理平台，免费提供给开源项目
  * [Tara AI](https://tara.ai/) — 简单的 Sprint 管理服务。免费计划提供无限任务、Sprint 和工作空间，无用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 从 Kanban 和 Scrum 到几乎任何操作流程的视觉项目管理。免费提供给无限用户，最高1000个数据实体 {[更多细节](https://www.targetprocess.com/pricing/)}
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费计划提供一个工作空间，具有无限任务和项目；1GB文件存储空间；1周项目历史；以及每次视频

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 免费的文件分享平台，无限速率、带宽、文件数量、下载次数等。主要针对Android 开发相关的文件，如APK构建、自定义ROM和修改等。但也可以接受其他类型的文件。
  * [borgbase.com](https://www.borgbase.com/) — Borg Backup 的简单且安全的离站备份Hosting。10 GB免费备份空间和两个仓库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务。10 GB免费存储空间
  * [sync.com](https://www.sync.com/) - End-to-End云存储服务。5 GB免费存储空间
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务。最多10 GB免费存储空间
  * [sirv.com](https://sirv.com/) — 智能图像内容分发网络（CDN），具有实时图像优化和调整大小功能。免费版本包括500 MB存储空间和2 GB带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) — 全面的图像优化和CDN服务，在全球拥有1500多个节点。各种图像调整大小、压缩和加水印功能。支持响应式图像、360度图像制作和图像编辑的开源插件。免费套餐每月包含25GB的CDN流量、25GB的缓存存储空间和无限转换。
  * [cloudinary.com](https://cloudinary.com/) — 对于网站和应用程序的图像上传、强大的处理、存储和分发，支持Ruby、Python、Java、PHP、Objective-C等语言库。免费版本包含25个每月积分，每个积分相当于1,000次图像转换、1 GB存储空间或1 GB的CDN使用量。
  * [embed.ly](https://embed.ly/) — 提供在网页中嵌入媒体、响应式图像缩放和从网页中提取元素的API。对于每月最多5,000个URL和每秒15个请求免费。
  * [filestack.com](https://www.filestack.com/) — 文件选择、

  * [imagekit.io](https://imagekit.io) – 内容分发网络（CDN）与自动优化、实时变换和存储集成，可以在几分钟内与现有设置集成。免费计划包含每月高达20GB的带宽。
  * [internxt.com](https://internxt.com) – Internxt Drive是一种基于绝对隐私和坚不可摧安全性的零知识文件存储服务。注册并获取10 GB永久免费空间！
  * [degoo.com](https://degoo.com/) – 基于人工智能（AI）的云存储，免费使用高达20 GB，支持三个设备，5 GB推荐奖励（90天账户不活跃）。
  * [MConverter.eu](https://mconverter.eu/) – 批量转换文件，支持多种文件格式，包括新格式如[AVIF](https://mconverter.eu/convert/to/avif/)。从视频中提取所有图像帧。免费使用，每天批量处理两个文件，高达10个100MB文件。
  * [ImageEngine](https://imageengine.io/) – ImageEngine是一个易于使用的全球图像内容分发网络（CDN）。设置时间少于60秒，支持AVIF和JPEGXL格式，提供WordPress、Magento、React、Vue等插件。申请您的免费开发者账户[这里](https://imageengine.io/developer-program/)。
  * [DocsParse](https://docsparse.com/) – 使用GPT的人工智能（AI）处理PDF、图像等文件，输出结构化数据格式为JSON、CSV、EXCEL。每月可免费使用30个积分。

**[⬆️ 返回顶部](#目录)**

## 设计和用户界面

  * [AllTheFreeStock](https://allthefreestock.com) - 一个精选的免费 [股票图片](Stock Photos) 、音频和视频列表。
  * [Float UI](https://floatui.com/) - 一个免费的 [Web](Web) 开发工具，用于快速创建现代响应式网站，具有时尚的设计，即使对于非设计师也适用。
  * [Ant Design 登陆页](https://landing.ant.design/) - Ant Design 登陆页提供了由 Ant Motion 的动画组件构建的模板。它具有丰富的首页模板，下载模板代码包，可以快速使用。您还可以使用编辑器快速构建自己的专用页面。
  * [Backlight](https://backlight.dev/) — 在开发者和设计师之间的合作心态下，Backlight 是一个完整的编码平台，团队可以在这里构建、记录、发布、扩展和维护 [设计系统](Design System) 。免费计划允许最多 3 名编辑者在一个设计系统上工作，观众数量不限。
  * [BoxySVG](https://boxy-svg.com/app) — 一个免费的、可安装的 Web 应用程序，用于绘制 [SVG](SVG) 图像并以 SVG、PNG、JPEG 等格式导出。
  * [Carousel Hero](https://carouselhero.com/) - 免费在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 适用于 [React](React)、[Vue](Vue) 和 [Svelte](Svelte) 的一致的开源图标，包括 SVG 格式。
  * [clevebrush.com](https://www.cleverbrush.com/) — 免费的图形设计/照片拼贴应用程序。他们还提供作为组件的付费集成。
  * [cloudconvert.com](https://cloudconvert.com/) — 将任何文件转换为任何格式。支持 208 个格式，包括视频和 GIF。
  * [CodeMyUI](https://codemyui.com) - 精选的 Web 设计与 UI 灵感，配备代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建色彩调色板或从顶级调色板中获取灵

  * [storyset.com](https://storyset.com/) — 使用此工具创建不可思议的免费定制插图用于您的项目。
  * [smartmockups.com](https://smartmockups.com/) — 创建产品模拟图，200个免费模拟图。
  * [tabler-icons.io](https://tabler-icons.io/) — 超过1500个免费的可复制和粘贴的SVG可编辑图标。
  * [UI Avatars](https://ui-avatars.com/) - 生成带有首字母的头像。 URL可以直接热链接到您的网页或应用程序。支持通过URL配置参数。
  * [unDraw](https://undraw.co/) - 一个不断更新的漂亮SVG图像集合，您可以完全免费使用，不需要署名。
  * [unsplash.com](https://unsplash.com/) - 用于商业和非商业目的的免费股票照片（随意使用许可）。
  * [vectr.com](https://vectr.com/) — Web + Desktop的免费设计应用程序。
  * [walkme.com](https://www.walkme.com/) — 企业级指导和参与平台，免费计划包括三个步骤不超过5步的导览。
  * [Webflow](https://webflow.com) - 支持动画和网站托管的WYSIWYG网站生成器。两个项目免费。
  * [Updrafts.app](https://updrafts.app) - 适用于基于tailwindcss的设计的WYSIWYG网站生成器。非商业用途免费。
  * [whimsical.com](https://whimsical.com/) - 协作流程图、线框图、便利贴和思维导图。创建最多四个免费的板块。
  * [Zeplin](https://zeplin.io/) — 设计师和开发人员的协作平台。展示设计、资产和样式指南。一个项目免费。
  * [Pixelixe](https://pixelixe.com/) — 在网上创建和编辑引人注目、独特的图形和图像。
  * [Responsively App](https://responsively.app) - 更快、更准确的响应式Web应用程序开发的免费开发工具。
  * [SceneLab](https://scenelab.io) -

## 设计灵感

  * [awwwards](https://www.awwwards.com/) - [顶级网站] 设计师投票选出的最佳设计网站展示。
  * [Behance](https://www.behance.net/) - [设计展示] 设计师展示作品的平台，可以按类别（如 [UI/UX](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2_(%E8%AE%BE%E8%AE%A1)) 项目）筛选。
  * [dribbble](https://dribbble.com/) - [设计展示] 独特的设计灵感，通常不来自真实应用。
  * [Landings](https://landings.dev/) - [Web 屏幕截图] 根据您的偏好找到最好的登录页面设计灵感。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登录页面 / UI 工具包 / Web 屏幕截图] Lapa Ninja 是一个展示最佳登录页面示例的画廊，包括来自网络的免费书籍和 UI 工具包。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登录页面设计] 经常更新的登录页面屏幕截图，包括桌面、平板和移动设备截图。
  * [Mobbin](https://mobbin.design/) - [移动应用截图] 使用我们 50,000+ 个可搜索的移动应用截图库来节省您的 [UI](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2) 和 [UX](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E9%80%9A%E7%94%A8%E7%8E%AF%E5%A2%83) 研究时间。
  * [Uiland Design](https://uiland.design/) - [移动应用截图] 探索来自非洲和世界顶级公司的移动和 Web [UI](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E7%95%8C%E9%9D%A2) 设计。
  * [Mobile Patterns](https://www

## 数据可视化在地图上

  * [IP Geolocation](https://ipgeolocation.io/) — 免费的 DEVELOPER 计划，每月可使用 30K 次请求。
  * [carto.com](https://carto.com/) — 使用自己的和公共数据创建地图和地理空间 API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 像钟表一样工作的,map 工具。每月可免费使用五万个查询（地图瓦片、db2vector、海拔）。
  * [developers.arcgis.com](https://developers.arcgis.com) —针对 Web、桌面和移动设备的地图、地理空间数据存储、分析、地理编码、路线规划等 API 和 SDK。每月可免费使用 200 万个基本地图瓦片、20,000 个非存储地理编码、20,000 个简单路线、5,000 个驾驶时间计算和 5GB 免费瓦片 + 数据存储。
  * [Foursquare](https://developer.foursquare.com/) - 位置发现、场所搜索和来自 Places API 和 Pilgrim SDK 的上下文相关内容。
  * [geoapify.com](https://www.geoapify.com/) - 矢量和光栅地图瓦片、地理编码、场所、路线规划、等时线 API。每天可免费使用 3,000 个请求。
  * [geocod.io](https://www.geocod.io/) — 通过 API 或 CSV 上传进行地理编码。每天可免费使用 2,500 个查询。
  * [geocodify.com](https://geocodify.com/) — 通过 API 或 CSV 上传进行地理编码和地理解析。每月可免费使用 10,000 个查询。
  * [geojs.io](https://www.geojs.io/) - 高可用性 REST/JSON/JSONP IP 地理位置查找 API。
  * [giscloud.com](https://www.giscloud.com/) —在线可视化、分析和共享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) 免费开发者套餐，提供路线规划、路线优化、距离矩阵、地理编码和地图匹配服务。
  *

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/) — 为多个发行版（SUSE， [EL](English Linux) ，Fedora， [Debian](Debian) 等）提供的包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org) — 基于 [Mock](Mock) 的 [RPM](RPM) 包构建服务，适用于 Fedora 和 EL。
  * [help.launchpad.net](https://help.launchpad.net/Packaging) — [Ubuntu](Ubuntu) 和 [Debian](Debian) 的包构建服务。

**[⬆️ 返回顶部](#目录)**

## 集成开发环境和代码编辑

  * [3v4l](https://3v4l.org/) - 免费的在线PHP Shell和代码分享网站，支持300+个PHP版本
  * [Android Studio](https://developer.android.com/studio) — Android Studio提供了构建所有类型的Android设备应用的最快工具。开源的IDE免费，适合所有人，是最好的Android应用开发工具。支持Windows、Mac、Linux，甚至ChromeOS！
  * [AndroidIDE](https://m.androidide.com/) — 一个开源的IDE，用于在Android设备上开发真正的、基于Gradle的Android应用。
  * [Apache Netbeans](https://netbeans.apache.org/) — 开发环境、工具平台和应用程序框架。
  * [apiary.io](https://apiary.io/) — 协作设计API，具有即时API模拟和生成文档（免费，支持无限API蓝图、无限用户，一个管理员帐户和托管文档）。
  * [BBEdit](https://www.barebones.com/) - BBEdit是macOS上流行且可扩展的编辑器。免费模式提供强大的核心功能集和高级功能的升级路径。
  * [Binder](https://mybinder.org/) - 将Git仓库转换为交互式笔记本的集合。它是一个免费的公共服务。
  * [BlueJ](https://bluej.org) — 一种免费的Java开发环境，适合初学者，全球数百万用户使用。由Oracle支持，具有简单的GUI帮助初学者。
  * [Bootify.io](https://bootify.io/) - Spring Boot应用程序生成器，支持自定义数据库和REST API。
  * [Brackets](http://brackets.io/) - Brackets是一个开源的文本编辑器，专门为Web开发设计。它轻量、易用且高度可定制。
  * [cacher.io](https://www.cacher.io) — 代码片段组织器，支持标签和100+种编程语言。
  * [Code::Blocks](https://codeblocks.org) — 免费的Fortran和C/C++ IDE。开源，支持Windows、macOS和Linux。
  * [Cody](https://sourcegraph.com/cody) - 免费的AI编码助手，可以编写

  * [SoloLearn](https://code.sololearn.com) — 一个云端编程平台（cloud programming playground），非常适合运行代码片段。支持多种编程语言（programming languages）。运行代码不需要注册，但在其平台上保存代码时需要注册。同时，也提供了针对初学者和中级编码者的免费课程（free courses）。
  * [stackblitz.com](https://stackblitz.com/) — 在线/云端代码 IDE（Integrated Development Environment），用于创建、编辑和部署全栈应用（full-stack apps）。支持任何基于 NodeJs 的前端和后端框架（frontend & backend frameworks）。创建新项目的快捷链接：[https://node.new](https://node.new)。
  * [Sublime Text](https://www.sublimetext.com/) - Sublime Text 是一个流行的、多功能的、可高度定制的文本编辑器（text editor），用于编码和文本编辑任务。
  * [Visual Studio Code](https://code.visualstudio.com/) - 由 Microsoft 开发的代码编辑器，重新定义和优化了构建和调试现代 Web 和云应用程序（web and cloud applications）的过程。
  * [Visual Studio Community](https://visualstudio.microsoft.com/vs/community/) — 功能齐全的 IDE（Integrated Development Environment），拥有数千个扩展（extensions），支持跨平台应用开发（cross-platform app development）（可下载Microsoft扩展用于iOS和Android）、桌面、Web和云开发（desktop, web and cloud development），多语言支持（C#、C++、JavaScript、Python、PHP等）。
  * [VSCodium](https://vscodium.com/) - 社区驱动的（community-driven），无跟踪/监测（without telemetry/tracking），并且免费的二进制分布版本（freely-licensed binary distribution）Microsoft 的编辑器 VSCode。
  * [wakatime.com](https://wakatime.com/) — 使用文本编辑器插件（text editor plugins）量化（quantified self-metrics）你的编码活动（coding activity），有限制的免费计划（limited plan for free）。
  * [Wave Terminal](https://waveterm.dev/) - Wave 是一个开源的（open-source）、跨平台的终端（terminal），用于无缝工作流（se

## 分析、事件和统计

  * [Dwh.dev](https://dwh.dev) - 数据云观测解决方案（Snowflake）。个人使用免费。
  * [Hightouch](https://hightouch.com/) - Hightouch 是一个反向 ETL 平台，帮助您从数据仓库同步客户数据到 CRM、营销和支持工具。免费套餐提供一个目标用于同步数据。
  * [Avo](https://avo.app/) — 简化的分析发布工作流。单一来源的跟踪计划、类型安全的分析跟踪库、应用内调试器和数据观测性以捕获所有数据问题在发布之前。两个工作空间成员和 1 小时数据观测性回顾免费。
  * [Branch](https://www.branch.io) — 移动分析平台。免费套餐提供最多 10K 移动应用用户，具有深度链接和其他服务。
  * [Cauldron](https://cauldron.io) — 分析开源解决方案，允许用户从多个协作平台聚合信息作为不同类型的数据源（Git、Github 和 Gitlab）。免费套餐包括无限数量的报告。
  * [Census](https://www.getcensus.com/) — 反向 ETL 和操作分析平台。从数据仓库同步 10 个字段到 60+ SaaS，如 Salesforce、Zendesk 或 Amplitude。
  * [Clicky](https://clicky.com) — 网站分析平台。免费计划适用于一个网站，具有 3000 次查看分析。
  * [Databox](https://databox.com) — 通过组合其他分析和 BI 平台的业务洞察和分析。免费计划提供 3 个用户、仪表板和数据源，11M 历史数据记录。
  * [Hitsteps.com](https://hitsteps.com/) — 每月 2,000 次页面查看，适用于 1 个网站
  * [amplitude.com](https://amplitude.com/) — 每月 100 万个事件，最高 2 个应用
  * [GoatCounter](https://www.goatcounter.com/) — GoatCounter 是一个开源的 Web 分析平台，作为托管服务（免费用于非商业用途）或自托管应用提供。它旨在提供易于使用和有

  * [Umami](https://umami.is/) - 一个简单、快速、注重隐私的开源替代[谷歌分析（Google Analytics）](https://analytics.google.com/)工具
  * [TrackWith Dicloud](https://dicloud.net/trackwith-privacy-focused-analytics/) - 一种免费的轻量级且注重隐私的替代[谷歌分析（Google Analytics）](https://analytics.google.com/)工具。无限页面浏览量，无限访客，页面热图和目标跟踪。最多可支持 3 个域名，每个域名 600 次会话回放，均可免费使用。
  * [AppFit](https://appfit.io) - AppFit 是一款综合的分析和产品管理工具，旨在实现跨平台的分析和产品更新管理。免费计划包括每月 10,000 个事件、产品日记和每周洞察。
  * [Seline](https://seline.so) - Seline 是一种简单和私有的网站和产品分析工具。无 Cookie、轻量、独立。免费计划包括每月 3,000 个事件，并提供访问所有功能的权限，包括仪表盘、用户旅程、漏斗等。

**[⬆️ 返回顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) — 每个网站：1,000 页面浏览量/天，三个热图，三个小部件，免费的错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，具备开发工具用于重现错误，实时支持和产品分析套件。每月1,000个会话，拥有所有功能，保留7天。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000个会话，保留30天，错误跟踪，实时模式
  * [FullStory.com](https://www.fullstory.com) — 每月1,000个会话，保留一个月的数据，三个用户席位。更多信息 [请参考](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) — 每个网站：每月1,050页浏览量，無限热图，数据存储三个月
  * [inspectlet.com](https://www.inspectlet.com/) — 每个网站每月2,500个会话免费
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，无流量限制，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) — 每个网站每月500个会话免费
  * [mousestats.com](https://www.mousestats.com/) — 每个网站每月100个会话免费
  * [smartlook.com](https://www.smartlook.com/) — 网页和移动应用免费套餐（每月1,500个会话），三个热图，一个漏斗，1个月数据历史
  * [howuku.com](https://howuku.com) — 跟踪用户交互，参与度和事件。最多5,000次访问免费
  * [UXtweak.com](https://www.uxtweak.com/) — 录制并观看访客如何使用您的网站或应用程序。小型项目免费，时间不限

**[⬆️ 返回顶部](#目录)**

## 国际移动号码验证API和SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询 JSON API，每月100个API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证，免费、快速、可靠的JSON API，每月1000个请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 一站式跨平台订阅管理平台，提供分析、A/B 测试、Apple Search Ads、远程配置和增长工具，用于优化应用内购买和盈利。支持 iOS、Android、React Native、Flutter、Unity、Cordova、Stripe 和 Web。免费使用，最高可达每月 10,000 美元的跟踪收入。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 根据访客位置自动调整价格，以扩大全球业务并进入新的市场（购买力平价）。免费计划包括每月 7,500 次 API 请求。
  * [Glassfy](https://glassfy.io/) – 应用内订阅基础设施，实时订阅事件和Web及iOS、Android、Stripe和Paddle的即配套的变现工具。免费使用，最高可达每月 10,000 美元的收入。
  * [Adapty.io](https://adapty.io/) – 一站式解决方案，具有开源SDK用于集成iOS、Android、React Native、Flutter、Unity或Web应用的移动应用内订阅。免费使用，最高可达每月 10,000 美元的收入。
  * [CoinMarketCap](https://coinmarketcap.com/api/) — 提供包括最最新的加密货币（cryptocurrency）和法定货币（fiat currency）兑换率的加密货币市场数据。免费级别提供每月 10,000 次调用积分。
  * [CurrencyFreaks](https://currencyfreaks.com/) — 提供当前和历史货币兑换率。免费的 DEVELOPER 计划可用，每月 1,000 次请求。
  * [CoinGecko](https://www.coingecko.com/en/api) — 提供包括最新加密货币兑换率和历史数据的加密货币市场数据。演示 API 每分钟有稳定的 30 次调用率限制，每月 10,000 次调用上限。
  * [CurrencyApi](https://currencyapi.net/) — 提供实时货币汇率，包括货币 和加密货币，通过 JSON 和 XML 交付。免费级别提供每月 1,250 次 API 请求。


## Docker相关

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，为团队提供30个免费的私有仓库，以构建和存储Docker镜像
  * [Container Registry Service](https://container-registry.com/) - 基于Harbor的容器管理解决方案。免费版提供1 GB的私有仓库存储空间。
  * [Docker Hub](https://hub.docker.com) — 提供一个免费的私有仓库和无限公有仓库，以构建和存储Docker镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、交互式、有趣的沙盒环境，用于学习Docker。
  * [quay.io](https://quay.io/) — 构建和存储容器镜像，无限免费公有仓库
  * [ttl.sh](https://ttl.sh/) - 匿名和短暂的Docker镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant 云](https://app.vagrantup.com) - HashiCorp [Vagrant](Vagrant 虚拟机环境管理器) 云。用于托管 [Vagrant box](Vagrant 虚拟机环境)。
  * [Vagrantbox.es](https://www.vagrantbox.es/) — 一个替代的公共 [Vagrant box](Vagrant 虚拟机环境) 索引

**[⬆️ 返回顶部](#目录)**

## 开发者博客平台

  * [BearBlog](https://bearblog.dev/) - 极简主义风格，基于Markdown的博客和网站生成器。
  * [Dev.to](https://dev.to/) - 程序员分享想法和帮助彼此成长的平台。
  * [Hashnode](https://hashnode.com/) — Development者的无忧无虑博客软件（Hassle-free Blogging Software for Developers）。
  * [Medium](https://medium.com/) — 更重视所关心的事物的平台（Get more thoughtful about what matters to you）。
  * [AyeDot](https://ayedot.com/) — 在极简的Miniblogs（简短多媒体博客）形式中与世界分享您的想法、知识和故事，免费且无限。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * [GraphComment](https://graphcomment.com/) - GraphComment 是一个评论平台，帮助您从网站的受众中建立一个活跃的社区。
  * [Utterances](https://utteranc.es/) - 一个建立在 GitHub [GitHub（网页开发平台）] 问题上的轻量级评论小部件。使用 GitHub 问题进行博客评论、wiki 页面和更多！
  * [Disqus](https://disqus.com/) - Disqus 是一个被数十万个网站使用的网络社区平台。
  * [Remarkbox](https://www.remarkbox.com/) - 开源的托管评论平台，以“可自由定价”方式提供服务，适用于“少数域名上的单个管理员，对行为和外观有完全的控制权”
  * [IntenseDebate](https://intensedebate.com/) - 为 WordPress、Tumblr、Blogger 等多个网站平台提供的功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) — 一个基于 Aws Lambda 和 Chrome 的截图 API。它支持全页截图、捕获计时和视口尺寸。
  * [microlink.io](https://microlink.io/) – 它可以将任何网站转化为数据，包括元标签规范化、链接预览、网页抓取功能或截图服务。每天免费提供 250 次请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - Screenshot API 使用简单的 API 调用来生成任何网站的截图。它基于 Google Cloud 搭建，以满足大规模需求，每月提供 100 次免费截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) — Capture 高度可定制的网站快照。免费提供每月 100 次快照
  * [screenshotmachine.com](https://www.screenshotmachine.com/) — Capture 每月 100 次快照，支持 png、gif 和 jpg 格式，包括全页截图，不仅限于首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 浏览器自动化和网页渲染。免费层提供每天最多 500 页。2017 年开始提供免费层。
  * [Webshrinker.com](https://webshrinker.com) — Web Shrinker 提供网站截图和域名智能 API 服务。免费提供每月 100 次请求。
  * [Httpic.com](https://httpic.com) — 将任何网站转化为 jpg、png 或 pdf。Capture 全页截图，调整视口，并注入自定义代码。免费层每月提供 150 张图片。
  * [Screenshots](https://screenshotson.click) — 您的截图 API。具有高度可定制的捕获选项。免费提供每月 100 次截图。

**[⬆️ 返回顶部](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代的 Flutter 在线 IDE，也是创建、调试和构建跨平台项目的最佳场所。使用 Flutter 构建 iOS（无需 Mac）和 Android 应用。
  * [CodeMagic](https://codemagic.io/) - CodeMagic 是一种完全托管的移动应用 CI/CD。您可以使用基于 GUI 的 CI/CD 工具构建、测试和部署。免费层提供每月 500 分钟和 2.3 GHz、8 GB RAM 的 Mac Mini 实例。
  * [FlutterFlow](https://flutterflow.io/) -  FlutterFlow 是一个基于浏览器的拖放界面，用于构建使用 Flutter 的移动应用。

**[⬆️ 返回顶部](#目录)**

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个速度非常快的x86虚拟机，可以运行Linux和Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个OpenRISC虚拟机，可以运行具有网络支持的Linux。
  * [v86](https://copy.sh/v86) — 一个x86虚拟机，可以直接在浏览器中运行Linux和其他操作系统。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审计和持续的工作流来帮助实行隐私设计，使得组织能够遵守通用数据保护条例（[GDPR](https://gdpr-info.eu/)）和其他法规。免费版本仅适用于小型团队和[软件即服务](https://zh.wikipedia.org/wiki/%E8%BD%AF%E4%BB%B6%E6%98%AF%E6%9C%8D%E5%8A%A1)版本。
  * [Osano](https://www.osano.com/) - 同意管理和合规平台，提供从GDPR代表到[cookie](https://zh.wikipedia.org/wiki/%E7%BD%91%E8%B8%AA%E9%87%8F)公告的所有功能。免费版本提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和[cookie](https://zh.wikipedia.org/wiki/%E7%BD%91%E8%B8%AA%E9%87%8F)政策以及同意管理。免费版本提供有限的隐私和[cookie](https://zh.wikipedia.org/wiki/%E7%BD%91%E8%B8%AA%E9%87%8F)政策以及[cookie](https://zh.wikipedia.org/wiki/%E7%BD%91%E8%B8%AA%E9%87%8F)公告。
  * [Cookiefirst](https://cookiefirst.com/) - [Cookie](https://zh.wikipedia.org/wiki/%E7%BD%91%E8%B8%AA%E9%87%8F)公告、审计和多语言同意管理解决方案。免费版本提供一次扫描和单个[cookie](https://zh.wikipedia.org/wiki/%E7%BD%91%E8%B8%AA%E9%87%8F)公告。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版本提供大多数功能，访客数量有限。
  * [Concord](https://www.concord.tech/) - 全面的数据隐私平台，包括同意管理、[数据主体访问请求](https://en.wikipedia.org/wiki/Data_subject_access_request)（[DSARs](https://en.wikipedia.org/wiki/Data_subject_access_request)）处理和数据映射

## Miscellaneous

  * [BackgroundStyler.com](https://backgroundstyler.com) - 为您的代码、文本或图片创建美观的截图，以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建和分享代码或二进制文件。可作为美观的图片分享（例如Twitter/Facebook帖子）或作为链接分享（例如聊天或论坛）。
  * [Blynk](https://blynk.io) — 一个具有API的SaaS（云服务），用于控制、构建和评估IoT设备。开发者计划免费，包含5台设备、免费云存储和数据存储。同时提供移动应用。
  * [砖块记事本计算器](https://free.getbricks.app/) - 一个具有强大的内置多行计算器的记事本应用（Progressive Web App，PWA）。
  * [Carbon.now.sh](https://carbon.now.sh) - 创建和分享代码片段的美观截图格式。通常用于在Twitter或博客文章中展示代码片段。
  * [代码时间](https://www.software.com/code-time) - 针对VS Code、Atom、IntelliJ、Sublime Text等的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 从您的源代码创建优秀的截图，以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本的截图，以便在社交媒体上分享。
  * [Cronhooks](https://cronhooks.io/) - 安排按时或重复的Webhook。免费计划允许5个临时安排。
  * [cron-job.org](https://cron-job.org) - 在线cronjob服务。无限任务免费。
  * [datelist.io](https://datelist.io) - 在线预订/预约调度系统。免费至5个预订每月，包含1个日历。
  * [域名转发](https://domain-forward.com/) - 一个直接的工具，用于转发任何URL或域名。免费至5个域名和每月200k请求。
  * [Elementor](https://elementor.com) — WordPress网站构建器。免费计划可用，

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) —  可免费用于2台设备，无会话数量和时长限制
  * [Apache Guacamole™](https://guacamole.apache.org/) — 一个开源的无客户端远程桌面网关（Remote Desktop Gateway）
  * [RemSupp](https://remsupp.com) — 按需支持和永久访问设备（每天2个免费会话）
  * [RustDesk](https://rustdesk.com/) - 一个面向所有人的开源虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## Game Development

  * [itch.io](https://itch.io/game-assets) （资产商店）— 免费/付费的像素艺术（sprites）、地图瓦片集（tile sets）和角色包（character packs）。
  * [Gamefresco.com](https://gamefresco.com/) （游戏艺术品平台）— 发现、收藏和分享来自世界各地游戏艺术家的免费游戏资产。
  * [GameDevMarket](https://gamedevmarket.net) （游戏开发市场）— 免费/付费的资产，如2D、3D、音频、GUI（图形用户界面）。
  * [OpenGameArt](https://opengameart.org) （开源游戏艺术）— 开源游戏资产，如音乐、声音、像素艺术和GIF动图。
  * [CraftPix](https://craftpix.net) （手工像素平台）— 免费/付费的资产，如2D、3D、音频、GUI、背景、图标、地图瓦片集和游戏套件。
  * [Game Icons](https://game-icons.net/) （游戏图标）- 免费的可样式化SVG/PNG图标，采用CC-BY许可证。
  * [LoSpec](https://lospec.com/) （低色调平台）— 在线工具，用于创建像素艺术和其他限制性数字艺术，提供许多教程和色板列表可供选择。
  * [ArtStation](https://www.artstation.com/) （艺术站）- 市场平台，为免费/付费的2D、3D资产和音频、图标、地图瓦片集和游戏套件提供服务。同时，也可以用来展示您的艺术作品集。
  * [Rive](https://rive.app/community/) （rive社区）- 社区资产，以及可以使用其免费计划创建自己的游戏资产。
  * [Poly Pizza](https://poly.pizza/) （多边形披萨）- 免费的低多邊形3D资产。
  * [3Dassets.one](https://3dassets.one/) （3D资产商店）- 超过8,000个免费/付费的3D模型和PBR材质，用于创建纹理。
  * [Kenney](https://www.kenney.nl/assets/) （肯尼资产）- 免费（CC0

## Other Free Resources

  * [Wikimint 开发者](https://developer.wikimint.com/p/tools.html) - 为 Web 开发者提供的永久免费工具，包括CSS压缩、解压缩、图像优化器、图像缩放器、大小写转换器、CSS校验器、JavaScript编译器、HTML编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月免费提供长达200小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) — 一种更好的 `*.localhost.direct` 通配符公共CA签名SSL证书，用于localhost开发，支持子域名。
  * [Framacloud](https://degooglisons-internet.org/en/) — 法国非营利组织 [Framasoft](https://framasoft.org/en/) 提供的免费/开源软件和SaaS列表。
  * [github.com — FOSS for Dev](https://github.com/tvvocold/FOSS-for-Dev) — 一个为开发者提供免费和开源软件的中心。
  * [GitHub教育版](https://education.github.com/pack) — 为学生收集的一系列免费服务。需要注册。
  * [Markdown工具](https://markdowntools.com) - 将HTML、CSV、PDF、JSON和Excel文件转换为Markdown以及相反的转换工具。
  * [Microsoft 365开发者计划](https://developer.microsoft.com/microsoft-365/dev-program) — 获取免费的沙盒、工具和构建Microsoft 365平台解决方案所需的资源。该订阅包括90天的[Microsoft 365 E5订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括Windows），可续期，续期条件为您处于活跃的开发状态（通过遥测数据和算法衡量）。
  * [Pyrexp](https://pythonium.net/regex) — 一个免费的基于Web的正则表达式测试器和可视化工具，用于调试正则表达式。
  * [RedHat开发者](https://developers.redhat.com) — 为开发者提供免费访问Red Hat产品，包括RHEL、OpenShift、CodeReady等。仅限个人计划，还提供免费电子书用于参考