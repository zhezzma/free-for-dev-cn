# free-for.dev

开发者和开源作者现在有了很多服务提供免费版，但要逐一找到来做明智的决定就需要时间。

以下是软件（SaaS、PaaS、IaaS 等）和其他服务的免费开发者版列表。

这个特定列表的范围仅限于系统管理员、DevOps 实践者等基础设施开发者可能会发现有用的东西。我们热爱所有免费服务，但还是希望保持主题。这有时是一条灰色地带，所以带有主观性；如果我不接受你的贡献，请不要感到被冒犯。

这份列表源于拉取请求、审查、想法和来自 1600 多人的贡献。你还可以通过发送[拉取请求](https://github.com/ripienaar/free-for-dev)来添加更多服务或移除服务，或者删除由于服务提供改变或已退役的分支。

[![跟踪精彩列表](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/ripienaar/free-for-dev)

**注意**：这个列表仅适用于服务即服务（SaaS）产品，而不是自托管软件。要符合条件，服务必须提供免费版，而不仅仅是免费试用。如果时间分段，免费版至少需要一年。我们还会从安全角度考虑免费版，因此 SSO 是可以的，但我不会接受那些将 TLS 限制到付费版的服务。

# 目录

1. 主要云服务商的免费额度
   * 云管理解决方案
   * 分析、事件和统计
   * API、数据和机器学习
   * 版本库
   * BaaS（Backend-as-a-Service）
   * 低代码平台
   * 内容分发网络与保护
   * 持续集成与交付（CI/CD）
   * 内容管理系统（CMS）
   * 代码生成
   * 代码质量
   * 代码搜索和浏览
   * 崩溃和异常处理
   * 地图上的数据可视化
   * 管理式数据服务
   * 设计与用户界面（UI）
   * 设计灵感
   * 开发者博客网站
   * DNS（域名系统）
   * Docker相关服务
   * 域名注册和管理
   * 教育与职业发展
   * 电子邮件服务
   * 特性开关管理平台
   * 字体服务
   * 表单构建
   * 生成式人工智能
   * IaaS（基础设施即服务）
   * 集成开发环境（IDE）及代码编辑
   * 国际移动号码验证API和SDK
   * 问题跟踪与项目管理
   * 日志管理
   * 移动应用分发与反馈
   * 管理系统
   * 消息与流媒体
   * 其他
   * 监控服务
   * PaaS（平台即服务）
   * 包构建系统
   * 支付与计费集成
   * 隐私管理
   * 截屏APIs
   * Flutter相关服务与不需Mac构建iOS应用
   * 搜索服务
   * 安全与数字证书
   * 身份验证、授权与用户管理
   * 代码源库
   * 存储与媒体处理
   * 网关、WebRTC、WebSocket服务器及其他网络路由器
   * 测试工具
   * 团队协作工具
   * 翻译管理
   * Vagrant相关服务
   * 访客会话记录
   * 网站托管
   * 协议讨论平台
   * 基于浏览器的硬件模拟（JavaScript实现）
   * 远

## Major Cloud Providers

  * [Google 云端平台](https://cloud.google.com)
  - App Engine：每天28个前端实例小时，9个后端实例小时
  - Cloud Firestore：每天1GB存储空间，50,000次读取，20,000次写入和20,000次删除操作
  - Compute Engine：1个非抢占性e2-micro实例，30GB硬盘，5GB快照存储（限某些区域）以及北美与所有区域目的地1GB的网络出口流量（不包括中国和澳大利亚）每月
  - Cloud Storage：5GB存储空间，1GB网络出口
  - Cloud Shell：基于网络的Linux shell/主要IDE，具有5GB持久存储。每周限制60小时
  - Cloud Pub/Sub：每月10GB消息
  - Cloud Functions：每月200万个调用次数（包括背景和HTTP调用）
  - Cloud Run：每月200万次请求，360,000GB-秒内存，180,000vCPU-秒计算时间，北美每月1GB网络出口流量
  - Google Kubernetes Engine：对一个区划内的集群管理费免费，每个用户节点按标准Compute Engine定价收费
  - BigQuery：每月1TB查询，每月10GB存储
  - Cloud Build：每天120分钟构建时间
  - Cloud Source Repositories：最多5个用户，50GB存储和50GB出口
  - [Google Colab](https://colab.research.google.com/)：免费的Jupyter Notebooks开发环境
  - [idx.dev](https://idx.dev)：Google idx项目。基于Google云的在线VSCode
  - 更完整和详细的列表：https://cloud.google.com/free

* [亚马逊网络服务](https://aws.amazon.com)
  - [CloudFront](https://aws.amazon.com/cloudfront/)：每月1TB出口流量和2M函数调用次数
  - [CloudWatch](https://aws.amazon.com/cloudwatch/)：10个自定义指标和10个警报
  - [CodeBuild](https://aws.amazon.com/codebuild/)：每月100分钟构建时间
  - [CodeCommit](https://aws.amazon.com/codecommit/)：5个活跃用户，50GB存储和每月10000个

    * [Azure Pipeline](https://azure.microsoft.com/zh-cn/services/devops/pipelines/)：开源免费项目可获得10个并行执行任务，每个任务每月提供无限时长，适用于Linux、macOS和Windows平台
    * [Azure IoT Hub](https://azure.microsoft.com/zh-cn/services/iot-hub/)：每天8,000条消息
    * [负载均衡器](https://azure.microsoft.com/zh-cn/services/load-balancer/)：免费公共负载均衡IP（VIP）
    * [通知中心](https://azure.microsoft.com/zh-cn/services/notification-hubs/)：100万条推送通知
    * [带宽](https://azure.microsoft.com/pricing/details/bandwidth/)：15GB下行（12个月）及5GB上行带宽/月
    * [Cosmos DB](https://azure.microsoft.com/zh-cn/services/cosmos-db/)：25GB存储与1,000个预配读写速率单位
    * [静态网站应用](https://azure.microsoft.com/pricing/details/app-service/static/)：免费SSL、身份验证/授权和自定义域名，用于构建、部署和托管静态应用及托管无服务器函数
    * [存储](https://azure.microsoft.com/zh-cn/services/storage/)：12个月的5GB LRS文件或Blob存储
    * [认知服务](https://azure.microsoft.com/zh-cn/services/cognitive-services/)：AI/ML API（如计算机视觉、翻译、面部识别、机器人等），免费版提供有限交易次数
    * [认知搜索](https://azure.microsoft.com/zh-cn/services/search/#features)：基于AI的搜索与索引服务，免费支持10,000条文档
    * [Azure Kubernetes服务](https://azure.microsoft.com/zh-cn/services/kubernetes-service/)：免费的集群管理服务
    * [事件网格](https://azure.microsoft.com/zh-cn/services/event-grid/)：每月100,000次操作
    * 更全面的列表：[这里](https://azure.microsoft.com/zh-cn/free/)

  * [Oracle Cloud](https://www.oracle.com/zh-cn/cloud/)：
    * 计算资源：
       - AMD架构的2个计算VM，每个有1/8 CPU和1GB内存
       - Arm架构，基于Ampere A1的4个

    * [Workers KV](https://developers.cloudflare.com/kv) - 每天100k读取请求，1000个写入请求，1000个删除请求，1000个列出请求，最多存储1GB的数据。
   * [R2](https://developers.cloudflare.com/r2/) - 每月10GB，100万个A类操作，1000万个B类操作。
   * [D1](https://developers.cloudflare.com/d1/) - 每天最多500万行读取，10k行写入，1GB存储空间。
   * [Pages](https://developers.cloudflare.com/pages/) - 在Cloudflare快速、安全的全球网络上构建和部署您的网络应用。每月500次构建，100个自定义域名，集成SSL，无限可访问席位，无限预览部署，并可通过Cloudflare Workers集成实现全栈能力。
   * [Queues](https://developers.cloudflare.com/queues/) - 每月百万次操作。
   * [TURN](https://developers.cloudflare.com/calls/turn/) - 每月免费（出站）流量1TB。

**[⬆️ 返回顶部](#目录)**

## Cloud management solutions

  * [Brainboard](https://www.brainboard.co) - 针对端到端的云基础设施构建和管理提供协作解决方案。
  * [Cloud 66](https://www.cloud66.com/) - 个人项目免费 (包含一个部署服务器和一个静态网站)，Cloud 66 集成了从构建、部署到应用程序扩展所需的一切，让他们完成云平台的工作而无需顾虑“服务器管理”的复杂性。
  * [Pulumi](https://www.pulumi.com/) — 一个现代化的基础设施即代码平台，允许您使用熟悉的编程语言和工具来构建、部署和管理工作负载。
  * [terraform.io](https://www.terraform.io/) — Terraform Cloud。提供免费的远程状态管理和团队协作， Up to 500 资源数量。
  * [scalr.com](https://scalr.com/) - Scalr 是 Terraform 的自动化与合作 (TACO) 产品，提升在 Terraform 管理的基础设施和配置上的协作和自动化。支持完整的 Terraform CLI、OPA 整合以及层级配置模式。没有单点登录 (SSO) 的困扰，所有功能都包括在内。免费版提供每月50次运行。
  * [deployment.io](https://deployment.io) - Deployment.io 通过自动化在 AWS 上部署。在免费版中，开发者（单用户）可以部署无限量静态站点、Web 服务和环境，每月免费提供 20 次作业执行，包括预览和自动部署。

**[⬆️ 返回顶部](#目录)**

## Source Code Repos

  以下是列出的支持代码仓库的平台，包括公共仓库和/或私有仓库，并可能包含其他功能：

1. [Bitbucket](https://bitbucket.org/) - 提供无限公共和私有Git仓库，最多5个用户，支持CI/CD自动化。

2. [chiselapp.com](https://chiselapp.com/) - 提供无限公共和私有Fossil仓库。

3. [codebasehq.com](https://www.codebasehq.com/) - 免费项目，但空间限制为100 MB，用户数为2个。

4. **[Codeberg](https://codeberg.org/)** - 无限免费和开源的Git存储库，不限制合作者。支持平台包括静态网站（Codeberg Pages）、CI/CD（Codeberg CI）、翻译服务（Codeberg Translate）等。

5. [GitGud](https://gitgud.io) - 无限公共和私有仓库，永久免费，不支持CI/CD。

6. [GitHub](https://github.com/) - 无限公共仓库，无限私有仓库（无限合作者），功能包括CI/CD、开发环境、静态站点、包和容器存储、项目管理、AI Copilot等。

7. [gitlab.com](https://about.gitlab.com/) - 提供无限公共和私有Git存储库，最多支持5个合作者，包括CI/CD、静态站点、容器注册表、任务管理等。

8. [framagit.org](https://framagit.org/) - 基于GitLab的开源软件存储库平台，包括CI、静态页面、项目页面和问题跟踪。

9. [heptapod.net](https://foss.heptapod.net/) - 是GitLab开源版的支持Mercurial的分支，提供类似服务。

10. [ionicframework.com](https://ionicframework.com/appflow) - 提供开发Ionic应用程序的存储库和工具，以及Ionic自己的项目。

11. [NotABug](https://notabug.org) - 一个免费的基于开源许可的代码协作平台，支持Git。

12. [OSDN](https://osdn.net/) - 提供SVN/Git/Mercurial/Bazaar/CVS仓库的服务，面向开源软件开发者。

13. [Pagure.io](https://pagure.io) - 免费且开源的协作平台，用于FOSS项目的

## APIs, Data, and ML

  * [jsongrid.com](https://jsongrid.com) - 免费工具，用于可视化、编辑和过滤复杂JSON数据，使其变为美观的表格网格。通过链接保存和分享JSON数据。
  * [zerosheets.com](https://zerosheets.com) - 将您的Google Sheets电子表格转化为强大的API，快速开发原型、网站、应用程序等。免费提供每月500次请求。
  * [ip.city](https://ip.city) — 每天免费提供100次IP位置查询。
  * [abstractapi.com](https://www.abstractapi.com) — 包含多种用途的API包，包括IP位置、性别识别或电子邮件验证。
  * [apify.com](https://www.apify.com/) - 网页抓取和自动化平台，为任何网站创建API并提取数据。内置代理、自定义解决方案，免费计划每月包含5美元平台积分。
  * [apitemplate.io](https://apitemplate.io) - 使用简单的API或自动化工具如Zapier和Airtable自动生成图像和PDF文档。免费版包含每月50个图像和3个模板。
  * [apitoolkit.io](https://apitoolkit.io) - 用于理解API和后端的全套工具。自动API合同验证和监控。免费计划覆盖每月20,000次请求的服务器。
  * [apiverve.com](https://apiverve.com) - 拥有120多个API，专注于质量、一致性和可靠性。免费版每月50个API令牌。
  * [arize.com](https://arize.com/) - 机器学习可观察性服务，用于模型监控和问题根源分析（如数据质量及性能漂移）。免费提供至多两个模型。
  * [atlastk.org](https://atlastk.org/) - 用于开发单页Web应用的轻量级库，无缝可用。支持Java、Node.js、Perl、Python和Ruby。
  * [beeceptor.com](https://beeceptor.com) - 在几秒钟内模拟REST API，伪造API响应等。免费版每天可用50次请求，开放端点，任何人都可通过仪表板链接查看提交和答案。
  * [bigml.com](https://bigml.com/) — 提供托管机器学习算法。开发阶段无限免费任务，每个任务数据限制为16

  * [转换工具](https://conversiontools.io/) - 在线文件转换器，用于文档、图片、视频、音频和电子书。提供REST API，并支持Node.js、PHP、Python等库。对于付费计划，支持最多50GB文件大小。免费版限制文件大小和每天转换次数。
* [国家-州-城市微服务平台](https://country-state-city.rebuscando.info/) - 提供广泛信息的API和微服务，包括国家、地区、省份、城市、邮政编码等。免费版包含每天最多100次请求。
* [CurlHub](https://curlhub.io) - API代理服务，用于查看和调试API调用。免费版提供每月10,000次请求。
* [CraftMyPDF](https://craftmypdf.com) - 通过可重用模板自动创建PDF文档，提供拖放编辑器和支持简单的API。免费版包括每月100个PDF和3个模板。
* [数据立方体](https://cube.dev/) - 助力数据工程师和开发者访问现代数据存储、组织数据一致性定义并提供给所有应用。用法最方便是通过Cube Cloud，免费版每月可通过1GB数据。
* [数据丢弃处](https://datadeaddrop.com) - 简单的免费文件分享服务，访问后数据自动销毁。通过浏览器或命令行客户端上传和下载数据。
* [数据抓取器](https://datafetcher.com) - 无需代码，即可连接Airtable到任何应用或API。使用类似Postman的界面在Airtable中运行API请求。免费版包含每月100次运行。
* [数据导入器](https://www.dataimporter.io) - 连接、清理并在Salesforce中导入数据的工具。免费版每月支持20,000条记录。
* [数据乐园](https://datalore.jetbrains.com) - JetBrains提供的Python笔记。包含每月10GB存储和120小时运行时。
* [数据矿工](https://dataminer.io/) - 用于从网页提取数据的浏览器扩展（适用于Chrome、MS Edge）。免费版提供每月500页的数据提取。
* [Datapane](https://datapane.com) - 提供Python和Jupyter Notebook互动报告的API，还可以分发为自助服务工具。免费版支持构建Python脚本和报告。


  * [Doppio](https://doppio.sh/) — 提供管理和私有存储PDF和屏幕截图的API，使用顶级渲染技术。免费计划每月允许400个PDF和屏幕截图。
  * [dreamfactory.com](https://dreamfactory.com/) — 开源REST API后端，适用于移动应用、Web应用和物联网应用。可以与任何SQL或NoSQL数据库、文件存储系统或外部服务连接，它将立即创建一个全面的REST API平台，包括实时文档和用户管理。
  * [DynamicDocs](https://advicement.io) — 通过基于LaTeX模板的JSON到PDF API生成PDF文档。免费计划每月50个API调用，可访问模板库。
  * [Efemarai](https://efemarai.com) — 用于机器学习模型和数据的测试和调试平台。可视化任何计算图。为开发者提供每月30次免费调试会话。
  * [ExtendsClass](https://extendsclass.com/rest-client-online.html) — 免费在线HTTP客户端，用于发送HTTP请求。
  * [Export SDK](https://exportsdk.com) — 提供拖放模板编辑器的PDF生成API，提供SDK和无代码集成。免费版每月有250页，不限用户，三款模板。
  * [Fern](https://buildwithfern.com) — 使用API定义自动生成流行语言的SDK，并生成API参考文档网页。在API参考中添加Markdown页面，通过Fern托管，实现完整的文档解决方案。支持OpenAPI完全。
  * [file.coffee](https://file.coffee/) — 平台，单个文件最大存储15MB（账户下30MB）。
  * [FraudLabs Pro](https://www.fraudlabspro.com) — 对于信用卡支付欺诈，对订单交易进行筛查。免费微型计划每月500次交易。
  * [Geekflare API](https://geekflare.com/api) — 提供截图、审计网站、TLS扫描、DNS查找、测试TTFB等功能的API。免费计划提供3,000个API请求。
  * [GeoCod](https://geocod.xyz) — 免费地理编码API，可将邮政地址转换为地理坐标，或反向转换为邮政地址。
  * [GeoDataSource](https://www.geodatasource.com) —

  以下是一些提供公开IP地址和相关地理信息的服务，以及它们的特点：

1. [ipaddress.sh](https://ipaddress.sh) — 一个简单的服务，可以获取不同格式的公有IP地址。它有不同的API格式选项。

2. [ipbase.com](https://ipbase.com) - 免费的IP地理定位API，每月最多150个请求。

3. [IP Geolocation](https://ipgeolocation.io/) — 提供给开发者的免费计划，每月3万个请求（每天1000个）的IP地理定位API。

4. [Abstract API](https://www.abstractapi.com/ip-geolocation-api) — 从Abstract获取的IP地理定位API，有2万个每月免费请求的广泛计划。

5. [IP2Location](https://www.ip2location.com) — Freemium服务，包含 lite 数据库免费下载，可以本地查询城市、坐标和ISP信息。

6. [IP2Location.io](https://www.ip2location.io/) — 可靠且免费的API，提供地区、坐标、ISP等信息，免费计划每月3万个信用，更多高级功能需购买，或联系获取个性化计划。

7. [ipapi](https://ipapi.co/) — Kloudend公司出品的IP位置API，基于AWS，免费层级每破解20k次查找，无需注册，每日限制1k次。

8. [ipapi.is](https://ipapi.is/) — 开发者为开发者打造的IP地址API，提供最好的主机检测功能，免费计划提供1000次查找。

9. [IPinfo](https://ipinfo.io/) — 快速、准确且免费（每月最多5万个请求）的IP地址数据API，提供详细地理位置和相关数据，付费API可免费试用。

10. [BigDataCloud](https://www.bigdatacloud.com/) - 提供快速、准确的免费（无限或每月10k-50k）API，包括地理定位、查反、网络洞察、邮箱和电话验证等现代网页需求。

11. [IPTrace](https://iptrace.io) — 一个简洁的API，为企业提供有用的数据在IP地理位置上的配置。

12. [JSON2Video](https://json2video.com) — 一个可以实现自动化视频营销和社交媒体视频的视频编辑API，支持无代码。

13

  以下是提供的服务及其描述和免费额度：

1. **[microlink.io](https://microlink.io/)** – 将任何网站转化为数据，如元标签规范化、美观链接预览、抓取能力或服务中的截图。每天免费额度为100个请求。
2. **[Mindee](https://developers.mindee.com/docs)** – 一个强大的OCR软件和API平台，通过计算机视觉和机器学习识别文档关键信息，帮助开发者自动化工作流。免费版每月提供250页的处理量。
3. **[Mintlify](https://mintlify.com)** – 提供现代API文档的标准，拥有易用且可维护的UI组件、内建搜索和互动示例。1个编辑器免费使用。
4. **[MonkeyLearn.com](https://monkeylearn.com/)** – 机器学习文本分析，每月免费查询额度为300次。
5. **[MockAPI](https://www.mockapi.io/)** – 用于快速搭建API、生成自定义数据和操作的简单工具。免费版包括1个项目和每个项目4个资源。
6. **[Mockfly](https://www.mockfly.dev/)**
   - 一个可信赖的API模拟和特征旗管理工具。每日免费请求额度为500次。
7. **[Mocki](https://mocki.io)**
   - 创建与GitHub仓库同步的Mock GraphQL和REST API。简单REST API在无需注册的情况下可以免费开发和使用。
8. **[Mocko.dev](https://mocko.dev/)**
     - 为API代理您的接口，云端选择哪些端点并分析流量。免费版可以加快开发和集成测试速度。
9. **[Mocky](https://designer.mocky.io/)**
     - 创建定制的HTTP响应用于模拟HTTP请求。开源版本：[github.com/julien-lafont/Mocky](https://github.com/julien-lafont/Mocky)。
10. **[reqres.in](https://reqres.in)**
     - 一个免费的托管REST API，可用于响应AJAX请求。
11. **[microenv.com](https://microenv.com)**
     - 为开发者创建伪造的REST API，还可以生成代码并用Docker容器运行。
12. **[Multi-Exit IP Address Checker](https://ip.alstra.ca/)**


  * **PDF-API.io** - PDF自动化API，提供视觉模板编辑器、HTML到PDF转换、动态数据集成和PDF渲染服务。免费版赠送一个模板和每月100个PDF文件的访问权限。 [PDF-API.io](https://pdf-api.io)
* **Pixela** - 免费的天流数据库服务。所有操作都基于API，支持热力图和线图的可视化。 [Pixela](https://pixe.la/)
* **Postbacks** - 支持延迟请求的HTTP回调服务。注册后赠送8000次免费请求。 [Postbacks](https://postbacks.io/)
* **Postman** - 用于简化API开发和测试的协作平台。Postman App永久免费，Postman云部分功能终身免费，但有使用限制。 [Postman](https://postman.com)
* **Insomnia** - 开源API客户端，支持REST和GraphQL设计和测试。 [Insomnia](https://insomnia.rest)
* **PrefectCloud** - 数据流自动化平台，所有套餐每月包含20000次免费运行。对于大多数小企业来说，这已经足够执行ETL操作。 [PrefectCloud](https://www.prefect.io/cloud/)
* **Preset Cloud** - 一款托管的Apache Superset服务。5用户以下的团队免费，提供无限的仪表板和图表、无编码图表构建器和协作SQL编辑器。 [Preset Cloud](https://preset.io/)
* **PromptLeo** - 提供创作者和开发者的提示工程平台，包括提示工程库、表格和API。免费版包含一个提示结构，一个提示API端点，以及每月30次生成。 [PromptLeo](https://promptleo.com/)
* **PromptLoop** - 通过在Google Sheets中使用AI和大语言模型（如GPT-3）处理文本，进行转换、理解分析。每月前2000个信用免费。 [PromptLoop](https://www.promptloop.com/)
* **Crawlbase** - 不需要代理、基础设施或浏览器的网页抓取和解析服务，能自动解码验证码，防止阻止。首次1000个调用免费。 [Crawlbase](https://crawlbase.com/)
* **Public-Apis GithubRepo** - 一个免费公共API的列表。 [Public-Apis Github Repo](https://github.com/public-apis/public-apis

  * [ScrapingAnt](https://scrapingant.com/) — 使用无头Chrome的抓取API和免费的检查代理服务。提供了JavaScript渲染、付费轮换代理和验证码规避功能。有免费版本可用。
  * [ScraperBox](https://scraperbox.com/) — 使用真人Chrome浏览器和代理轮换进行无检测抓取的API。只需简单的API调用即可抓取任何网页。免费版每月有1000个请求。
  * [ScrapingDog](https://scrapingdog.com/) — ScrapingDog处理数百万代理、浏览器和验证码，允许您通过单个API调用获取任何网页的HTML。它还包括Web Scraper for Chrome & Firefox和用于即时抓取需求的软件。也提供免费版本。
  * [scrapinghub.com](https://scrapinghub.com) — 提供可视化界面和插件的数据抓取。免费版本包括共享服务器上的不限制抓取。
  * [Simplescraper](https://simplescraper.io) — 每次操作后触发Webhook。免费版包括100个云抓取积分。
  * [Select Star](https://www.selectstar.com/) — 智能数据发掘平台，能自动分析和记录数据。带1个数据源、最多100张表格和10用户的免费轻量级版。
  * [Sheetson](https://sheetson.com) — 即刻将任何Google Sheets转换为RESTful API。提供免费计划。
  * [Shipyard](https://www.shipyardapp.com) — 云计算中的低代码数据编排平台。使用低代码模板和自定义代码（Python、Node.js、Bash和SQL）构建。免费开发者版每月提供10小时的运行时间，足以自动化多个工作流。
  * [shrtcode API](https://shrtco.de/docs) — 无需授权和请求限制的免费URL缩短API。
  * [SerpApi](https://serpapi.com/) — 实时搜索引擎抓取API，获取Google、YouTube、Bing、Baidu、Walmart等搜索引擎的结构化JSON结果。免费版每月最多100个成功API调用。
  * [SmartParse](https://smartparse.io) — 数据迁移和CSV到API平台，提供节省时间和成本的开发者工具。免费版包含每月300

  * [wit.ai](https://wit.ai/) - 供开发人员使用的自然语言处理 (NLP)。
  * [wolfram.com](https://wolfram.com/language/) - 云端内置基于知识的算法。
  * [wrapapi.com](https://wrapapi.com/) - 将任意网站转化为参数化的 API ，每月 30,000 个调用。
  * [ZenRows](https://www.zenrows.com/) - 无需验证码的 Web 抓取 API 和代理服务器，支持 js 渲染、代理轮换和定位。免费版赠送 1,000 个调用。
  * [Zenscrape](https://zenscrape.com/web-scraping-api) - 准备好了浏览器的 Web 抓取 API ，支持居民 IP、简洁价格。学生和非营利组织有额外的调用权限，月内免费赠送 1,000 个。
  * [ip-api](https://ip-api.com) - IP 地理定位 API ，免费使用，非商业用途，免费计划中同一 IP 地址每分钟限制 45 个请求。
  * [WebScraping.AI](https://webscraping.ai) - 包含解析功能的简单 Web 抓取 API ，支持 Chrome 渲染和代理。每月免费调用 2,000 次。
  * [Zipcodebase](https://zipcodebase.com) - 免费的 ZIP 编码 API ，提供全球邮政编码数据。每月免费 10,000 个请求。
  * [huggingface.co](https://huggingface.co) - 用于 Pytorch、TensorFlow 和 JAX 的 NLP 模型构建、训练和部署。每月免费使用 30,000 个输入字符。
  * [vatcheckapi.com](https://vatcheckapi.com) - 简单易用的 VAT 号码验证 API ，每月免费 500 个请求。
  * [numlookupapi.com](https://numlookupapi.com) - 免费电话号码验证 API ，每月免费提供 100,000 个请求。
  * [Volca](https://volca.io#api) - 提供编程语言和数据库系统等多种技术列表的免费 API ，无请求限制

## Artifact Repos

  * [Artifactory](https://jfrog.com/start-free/) - 这是一个 artifact 存储库，支持多种包格式，例如 Maven、Docker、Cargo、Helm、PyPI、CocoaPods 和 GitLFS。它包含了包扫描工具 XRay 和 CI/CD 工具 Pipelines（之前是 Shippable），每月提供 2,000 分钟的免费 CI/CD 时间。
  * [central.sonatype.org](https://central.sonatype.org) — 这是 Apache Maven、SBT 和其他构建系统的默认 artifact 存储库。
  * [cloudrepo.io](https://cloudrepo.io) - 基于云的私有和公共 Maven 和 PyPi 存储库。开源项目免费。
  * [cloudsmith.io](https://cloudsmith.io) — 提供简单、安全、集中的服务，适用于 Java/Maven、Red Hat、Debian、Python、Ruby、Vagrant 等。免费级别加上对开源项目的免费支持。
  * [jitpack.io](https://jitpack.io/) — 为 GitHub 上的 JVM 和 Android 项目提供 Maven 存储库，公开项目免费。
  * [packagecloud.io](https://packagecloud.io/users/new?plan=free_usage_plan) — 提供易于使用的存储库托管服务，支持 Maven、RPM、DEB、PyPi、NPM 和 RubyGem 包（有免费额度）。
  * [repsy.io](https://repsy.io) — 提供 1 GB 免费的私有/公共 Maven 存储库。
  * [Gemfury](https://gemfury.com) — 提供私有和公共 artifact 存储库，适用于 Maven、PyPi、NPM、Go Module、Nuget、APT 和 RPM 存储库。公开项目免费。
  * [paperspace](https://www.paperspace.com/) — 提供 AI 模型构建与扩展、AI 应用开发、训练和部署服务，免费计划为公开项目提供 5GB 存储、基础实例。
  * [RepoForge](https://repoforge.io) - 提供私有云托管的存储库，适用于 Python、Debian、NPM 包和 Docker 注册表。开源/公开项目有免费版。
  * [RepoFlow](https://repoflow.io) - RepoFlow

## Tools for Teams and Collaboration

  * [3Cols](https://3cols.com/) - 一个供个人和团队使用的免费云端代码片段管理器。
  * [Bitwarden](https://bitwarden.com) - 最简单、最安全的个人、团队和企业组织存储、共享和同步敏感数据的方式。
  * [Braid](https://www.braidchat.com/) - 专为团队设计的聊天应用。免费版本适用于公开访问组，无限用户、历史记录和集成。它还提供开源的自托管版本。
  * [cally.com](https://cally.com/) - 搜索并安排最佳会议时间。易于使用且适用于大、小团队。
  * [Calendly](https://calendly.com) - 用于连接和安排会议的工具。免费计划提供每个用户1个日历连接和无限会话。还提供桌面和移动应用程序。
  * [Discord](https://discord.com/) - 具有公共/私人房间聊天功能，支持Markdown文本、语音、视频和屏幕共享。免费版适用于无限用户。
  * [Telegram](https://telegram.org/) - 适合追求快速、可靠消息和通话的人群，特别适合企业用户和小团队，因为支持大群聊、用户名、桌面应用程序和强大的文件共享。
  * [Dubble](https://dubble.so/) - 免费的步骤式指南创建器。可进行截图、文档，并与团队协作，还支持录制屏幕。
  * [Duckly](https://duckly.com/) - 实时与团队聊天和合作。包括IDE、终端共享、语音、视频以及屏幕共享。小团队可免费使用。
  * [Dyte](https://dyte.io) - 提供协作插件增强生产力和参与度的视频和音频SDK。免费版包括每月10,000分钟的实时视频/音频使用时间。
  * [evernote.com](https://evernote.com/) - 组织信息的工具。可以共享笔记和与他人协作。
  * [Fibery](https://fibery.io/) - 连接式工作空间平台。单用户免费，提供2GB的磁盘空间。
  * [flock.com](https://flock.com) - 一个更快的团队通信方式。免费提供无限消息、频道、用户、应用程序和集成。
  * [Gather](https://www.gather.town/) -

  * [Keybase](https://keybase.io/) — Keybase 是开源的 Slack 替代品，保守每个人的聊天和文件安全，从家庭到社区到公司。
  * [Google Meet](https://meet.google.com/) — 用于企业在线视频会议的 Google Meet。Meet 提供安全便捷的在线会议。
  * [通过 Slack 使用 /meet](https://meetslack.com) — 从 Slack 中直接启动 Google 会议，只需使用任何频道、群组或私人消息中的 `/meet`。免费且功能不限。
  * [Livecycle](https://www.livecycle.io/) — Livecycle 是一个包容性的协作平台，使跨职能产品团队和开源项目的工作流程无需摩擦。
  * [Lockitbot](https://www.lockitbot.com/) — 在 Slack 中预留和锁定共享资源，如房间、开发环境、服务器等。免费提供不超过 2 个资源。
  * [MarkUp](https://www.markup.io/) — MarkUp 让您可以在网站、PDF 和图像上直接收集反馈。
  * [Proton Pass](https://proton.me/pass) — 搭载内置电子邮件别名、双因素认证器、分享和密钥的密码管理器。应用于网页、浏览器扩展、移动应用和桌面。
  * [Visual Debug](https://visualdebug.com) — 一个用于改进客户端-开发人员沟通的视觉反馈工具。
  * [meet.jit.si](https://meet.jit.si/) — 一键视频会议和屏幕共享，免费使用。
  * [Microsoft Teams](https://products.office.com/microsoft-teams/free) — Microsoft Teams 是基于聊天的数字化中心，将对话、内容和应用整合到一个统一体验中。免费提供最高500,000个用户的使用权。
  * [Miro](https://miro.com/) — 可扩展、安全、跨平台且面向企业的协作白板，适用于分布式团队。遵循免费和付费计划。
  * [nootiz](https://www.nootiz.com/) — 一款为获取并管理任何网站上的视觉反馈而设计的工具。
  * [Notion](https://www.notion.so/) — Notion 是一款支持 Markdown 的笔记和协作应用，整合任务、wiki 和数据库，被誉为全方位的工作区，适用于记笔记、项目管理和任务管理。可以通过大多数 web 浏览器访问或下载应用程序。


  * [Sema](https://www.semasoftware.com/) - 一个免费的开发者个人作品集工具，可以汇总并截取多个仓库的贡献到一个报告中。
  * [Screen Sharing via Browser](https://screensharing.net) - 免费屏幕分享工具，通过您的浏览器与协作者共享屏幕，无需下载或注册。完全免费。
  * [Slab](https://slab.com/) - 一个现代的团队知识管理服务。10名用户以内免费。
  * [slack.com](https://slack.com/) - 无限用户免费，但有一些功能限制。
  * [Spectrum](https://spectrum.chat/) - 免费创建公共或私有社区。
  * [StatusPile](https://www.statuspile.com/) - 一个状态页面的集合器，能跟踪上游服务供应商的状态页面吗？
  * [Stickies](https://stickies.app/) - 视觉协作应用程序，适用于头脑风暴、内容策划和笔记。最多3个墙壁、无限用户和1GB存储免费。
  * [Stacks](https://betterstacks.com/) - 融合笔记、链接和文件存储的内容工作区，帮助对抗信息过载。个人计划永久免费。
  * [talky.io](https://talky.io/) - 免费的群组视频聊天。匿名的、对等的，无需插件、注册或付费。
  * [Teamhood](https://teamhood.com/) - 免费的项目、任务和问题追踪软件。支持 Kanban 和 Scrum，有内置时间跟踪功能。可免费使用五名用户和三个项目组合。
  * [Teamplify](https://teamplify.com) - 用团队分析和智能日常站立会改善团队开发流程。对远程为主的团队有完整的时间休假管理功能。小团队（最多5名用户）免费。
  * [Tefter](https://tefter.io) - 简单易用的书签应用，其与Slack的强大集成。开源团队免费。
  * [TeleType](https://teletype.oorja.io/) - 分享终端、语音、代码、白板等。开发者无需登录即可享受端到端加密的优秀协作。免费。
  * TimeCamp(https://www.timecamp.com/) - 免费时间跟踪软件，不限用户。容易集成到 PM 工具，

  以下是链接列表和简介翻译：

1. [wistia.com](https://wistia.com/) — 带有观众分析、高清视频分发和营销工具的视频托管服务，适用于理解访问者，提供25个视频和品牌为 Wistia 的播放器。
2. [wormhol.org](https://www.wormhol.org/) — 简单的文件共享服务。可以无限分享5GB大小的文件，与任意数量的参与者共享。
3. [Wormhole](https://wormhole.app/) — 提供端到端加密的文件分享，最多24小时有效。大于5GB的文件通过点对点传输直接发送。
4. [zoom.us](https://zoom.us/) — 提供安全的视频和网络会议扩展。免费计划限制为40分钟会议。
5. [Zulip](https://zulip.com/) — 实时聊天，具有独特类似电子邮件的线程模型。免费版包括搜索历史记录10,000条和5GB文件存储。也有自托管的开源版本。
6. [robocorp.com](https://robocorp.com) — 动态操作（Automation Ops）的开源平台。免费试用云功能并实现简单的自动化。每月机器人工作时间240分钟，10个助手运行，100MB存储。
7. [Fleep.io](https://fleep.io/) — 作为Slack的替代方案。免费计划适合小型团队，包括完整的历史信息，无限一对一对话，一个群组对话和1GB文件存储。
8. [Chanty.com](https://chanty.com/) — 另一个Slack的替代品。为不超过10人的小团队提供永久免费计划，包含无限的公开和私人对话，可搜索历史，无限音频通话，无限语音信息，10个集成，以及每团队20GB存储。
9. [ruttl.com](https://ruttl.com/) — 最好的一站式反馈工具，用于收集数字反馈和审查网站、PDF和图像。
10. [Mattermost](https://mattermost.com/) — 专为技术团队设计的安全协作。免费版包含无限频道、工作流、看板、用户，以及10GB存储等。
11. [Webvizio](https://webvizio.com) — 网站反馈工具，网站审查软件，针对网页

## CMS

  * [Acquia.com](https://www.acquia.com/) — 提供Drupal网站的托管服务。开发者免费，免费开发工具（如Acquia Dev Desktop）也提供。
* [Contentful](https://www.contentful.com/) — 头尾独立CMS。云中的内容管理和交付API。自由版提供一个Community空间，包含5个用户、25,000条记录、48个内容类型和2个本地化区域。
* [Cosmic](https://www.cosmicjs.com/) — 头尾独立CMS和API工具箱。开发者个人计划免费。
* [Crystallize](https://crystallize.com) — 集成了电商支持的头尾独立产品信息管理（PIM）。内置GraphQL API。免费版包含无限用户、1,000个目录项目、每月5GB带宽和每月25,000次API调用。
* [DatoCMS](https://www.datocms.com/) — 提供免费版本供小型项目使用。DatoCMS基于GraphQL的CMS。较低层次，每月有10万次调用。
* [Directus](https://directus.io) — 头尾独立的CMS。一个完全免费和开源的平台，用于在本地或云端管理资产和数据库内容。没有限制，没有付费墙。
* [FrontAid](https://frontaid.io/) — 存储JSON内容的头尾独立CMS，它直接将内容存储在您的Git仓库中。无限制。
* [kontent.ai](https://www.kontent.ai) — 内容服务平台，同时赋予营销人员更多权力。开发者计划提供两个用户，无限项目，每项目两个环境，500个内容项，两种语言配送和管理API，以及自定义元素支持。您可以使用更详细的计划以满足您的需求。
* [Prismic](https://www.prismic.io/) — 头尾独立CMS。内容管理界面带有完全托管和可扩展的API。社区计划为一个用户提供无限的API调用、文档、自定义类型、资产和本地化区域。适用于您的下一个项目，更大的免费计划适用于开放内容/开源项目。
* [Sanity.io](https://www.sanity.io/) — 提供结构化内容的平台，拥有开源编辑环境和实时托管数据存储。无限项目，每个项目免费包括无限管理员用户、三个非管理员用户

[回到顶部](#目录)

## Code Generation

  * [Appinvento](https://appinvento.io/) — AppInvento 是一个免费的无代码应用构建器。在自动生成的后端代码中，用户对源代码有完全访问权限，并且不限制API和路由，可以进行深度集成。免费计划包括三个项目、五个表和一个Google插件。
  * [Cody AI](https://sourcegraph.com/cody) — Cody 是一个编程AI助手，它利用AI和对代码库的深入理解来帮助你更快地编写和理解代码。Cody为开发者提供了LLM（包括本地推断）的选择，支持各种IDE，支持所有流行编程语言，并有一个免费计划。免费计划每月提供20条聊天消息（使用Claude 3 Sonnet LLM）和500次自动完成功能（使用Starcoder 16b）。
  * [DhiWise](https://www.dhiwise.com/) — DhiWise利用创新的代码生成技术将Figma设计无缝转换成动态的Flutter和React应用程序，优化你的工作流程，帮助你比以往更快地创建出色移动和网页体验。
  * [Codeium](https://www.codeium.com/) — Codeium是一个免费的AI驱动的代码提示工具。它支持20多种编程语言（如Python、JavaScript、Java、TypeScript、PHP、C/C++、Go等），并与所有主流的独立和Web IDE集成。
  * [Fern](https://buildwithfern.com) — 使用Fern定义API并利用它们生成TypeScript、Python、Java、Go等流行语言的SDK和客户端库。完全支持OpenAPI。免费版最多可生成20个端点的代码。
  * [Metalama](https://www.postsharp.net/metalama) — 仅适用于C#。 Metalama在编译时动态生成代码骨架，保持源代码的清晰。对于开源项目是免费的，其商业友好型免费版包括三个方面。
  * [Supermaven](https://www.supermaven.com/) — Supermaven是一个快速的AI代码提示插件，适用于VSCode、JetBrains和Neovim。免费版提供无限的内联提示。
  * [tabnine.com](https://www.tabnine.com/) — Tabnine通过提供从全球所有代码中学习到的洞察，帮助开发者更快地创建更优秀的软件。插件可用。
 

## Code Quality

  * [beanstalkapp.com](https://beanstalkapp.com/) — 提供写、审阅和部署代码的完整流程，每个用户可免费获得一个账户，以及一个存储空间为100MB的仓库
  * [browserling.com](https://www.browserling.com/) — 活动的跨浏览器测试服务，但只有MS IE 9在Vista系统下1024x768分辨率下的3分钟免费试用
  * [codacy.com](https://www.codacy.com/) — 自动代码审查工具，支持PHP、Python、Ruby、Java、JavaScript、Scala、CSS和CoffeeScript，对公开和私有的无限制仓库提供免费服务
  * [Codeac.io](https://www.codeac.io/infrastructure-as-code.html?ref=free-for-dev) — 自动基础设施跨代码审查工具，与GitHub、Bitbucket和GitLab（包括自托管）集成。除了标准语言外，它还分析Ansible、Terraform、CloudFormation、Kubernetes等。开源免费（open-source free）
  * [CodeBeat](https://codebeat.co) — 自动代码审查平台，提供多种语言支持。对公开仓库免费，支持Slack和电子邮件集成
  * [codeclimate.com](https://codeclimate.com/) — 自动代码审查服务，开源和无限制的非开源组织内私人仓库（有4名合作者限制）为免费。同时对学生和机构也免费提供服务
  * [codecov.io](https://codecov.io/) — 代码覆盖率工具（SaaS），对开源代码和服务提供者免费，有一个免费的私人仓库权限
  * [CodeFactor](https://www.codefactor.io) — Git上的自动代码审查，免费版包括不限制用户和公共仓库，但只有一个私有仓库权限
  * [coderabbit.ai](https://coderabbit.ai) — 人工智能驱动的代码审查工具，支持GitHub和GitLab集成。免费版包含200个文件/小时、3个评审/小时、50个对话/小时，开源项目支持免费
  * [codescene.io](https://codescene.io/) — 通过分析开发人员如何与代码交互找出技术债，并可视化团队耦合和系统精通等组织因素，对开源项目免费
  * [CodSpeed](https://codspeed.io) — 自动化性能跟踪，

  * [houndci.com](https://houndci.com/) — 关于代码质量的GitHub提交评论，开源免费
  * [Moderne.io](https://app.moderne.io) — 自动源代码重构工具。Moderne提供框架迁移、代码分析与修复，并在大规模上提供无与伦比的代码转换功能，让开发者可以把更多时间花在构建新东西上，而不是维护旧代码。开源项目免费
  * [reviewable.io](https://reviewable.io/) — 用于GitHub存储库的代码审查，公共或个人存储库免费
  * [parsers.dev](https://parsers.dev/) — 提供基于云的抽象语法树解析器和中间表示编译器服务
  * [scan.coverity.com](https://scan.coverity.com/) — 为Java、C/C++、C#和JavaScript等语言提供静态代码分析，开源免费
  * [scrutinizer-ci.com](https://scrutinizer-ci.com/) — 连续检查平台，开源项目免费
  * [semanticdiff.com](https://app.semanticdiff.com/) — 为GitHub拉取请求和提交提供符合编程语言的差异查看，公共存储库免费
  * [shields.io](https://shields.io) — 为开源项目提供质量元数据徽章
  * [sonarcloud.io](https://sonarcloud.io) — 自动化的源代码分析工具，支持Java、JavaScript、C/C++、C#、VB.NET、PHP、Objective-C、Swift、Python和Groovy等语言，开源项目免费
  * [SourceLevel](https://sourcelevel.io/) — 自动化代码审查和团队分析，开源免费，5名协作者以上的组织有限制
  * [webceo.com](https://www.webceo.com/) — SEO工具，同时提供代码验证及各种设备类型的检查
  * [zoompf.com](https://zoompf.com/) — 提升网站性能，提供详尽的分析报告

**[⬆️ 返回顶部](#目录)**

## Code Search and Browsing

  * [libraries.io](https://libraries.io/) — 搜索并获取32种不同包管理器的依赖更新通知，开源免费
  * [Namae](https://namae.dev/) - 浏览GitHub、Gitlab、Heroku、Netlify等不同网站，查找您的项目名称的可用性。
  * [searchcode.com](https://searchcode.com/) — 全面的基于文本的代码搜索，开源免费
  * [tickgit.com](https://www.tickgit.com/) — 搜索`TODO`注释（以及其他标记），以便识别值得返回改进的代码区域。
  * [CodeKeep](https://codekeep.io) - Google Keep的代码片段版。组织、发现和分享代码片段，带有强大的代码截图工具，包含预设模板和链接功能。

**[回到顶部](#目录)**

## CI and CD

  以下是Markdown文本翻译后的中文：

* [AccessLint](https://github.com/marketplace/accesslint) — AccessLint 将自动化的网页可访问性测试引入到您的开发流程中。开源或教育目的免费。
  * [appcircle.io](https://appcircle.io) — 一个企业级移动DevOps平台，它可以自动化移动应用的构建、测试和发布，提高更快、更高效的发布周期。免费包含每构建的最大30分钟构建时间、每月20个构建和1个并发构建。
  * [appveyor.com](https://www.appveyor.com/) — 针对Windows的CD服务，开源项目免费。
  * [Argonaut](https://argonaut.dev/) — 在几分钟内部署应用和基础设施到您的云端。支持自定义部署和在Kubernetes和Lambda环境下的第三方应用部署。免费版允许无限个应用和部署，范围在5个域名和2个用户。
  * [bitrise.io](https://www.bitrise.io/) — 专为移动应用（原生或混合）设计的CI/CD服务。200个免费构建/月，10分钟构建时间；开源项目拥有45分钟构建时间、直至+1个并发构建以及不限团队数量。
  * [buddy.works](https://buddy.works/) — CI/CD，免费包括五个项目，一个并发运行（每月120次执行）。
  * [Buildkite](https://buildkite.com) — CI Pipeline 免费提供3个用户和每月5000个作业分钟。Test Analytics 的免费开发者版包括每月10万个测试执行，开源项目会有更多免费资源。
  * [bytebase.com](https://www.bytebase.com/) — 数据库CI/CD 和 DevOps。免费计划适用于20个以下用户和十个数据库实例。
  * [CircleCI](https://circleci.com/) — 提供包括GitHub、GitLab、Bitbucket等平台的托管CI/CD服务，所有功能均包含。免费版限6000分钟/月执行时间、无限合作者、30个并行项目在私有项目中，且开源项目有最多80000分钟/月的免费构建时间。
  * [cirrus-ci.org](https://cirrus-ci.org) - 公众GitHub仓库免费。
  * [cirun.io](https://

  * [microtica.com](https://microtica.com/) - 提供即开即用的基础设施组件的创业环境，免费部署 AWS 应用，支持您的生产负载。免费版包括1个环境（在您的 AWS 帐户上）、2个 Kubernetes 服务、每月100分钟构建时间以及每月20次部署。
  * [Nx Cloud](https://nx.dev/ci) - 通过远程缓存、任务分发到多台机器甚至自动分隔端到端测试运行等功能，加速您的单片库在 CI 中的速度。免费方案针对最多30名贡献者，赠送大量150k积分。
  * [blacksmith](https://www.blacksmith.sh/) - 为 GitHub Actions 提供的管理性能运行器，每月免费提供3,000分钟，无需信用卡。
  * [Terramate](https://terramate.io/) - 一个针对 Infrastructure as Code (IAC) 工具如 Terraform、OpenTofu 和 Terragrunt 的编排和管理平台。可免费供2名用户使用，含所有功能。

**[⬆️ 返回目录顶部](#目录)**

## Testing

  * [Applitools.com](https://applitools.com/) — 为Web、原生移动和桌面应用提供智能视觉验证。它几乎与所有自动化解决方案（如Selenium和Karma）和远程运行器（如Sauce Labs和Browser Stack）集成。开源项目是免费的。一名用户可使用有限的检查点，有免费版本。
  * [Appetize](https://appetize.io) — 用基于云的Android设备或平板电脑模拟器以及iPhone/iPad模拟器在浏览器内测试您的Android和iOS应用。免费版包括两个并发会话，每月30分钟使用时间，无应用大小限制。
  * [Apptim](https://apptim.com) — 是一款移动测试工具，它允许没有性能工程技能的人评估应用的性能和用户体验（UX）。使用自己的设备的桌面版本是100%免费的，不限制iOS和Android上的测试次数。
  * [Argos](https://argos-ci.com) — 开源视觉测试工具，无限项目，每月可捕获5,000张屏幕截图。开源项目是免费的。
  * [Bencher](https://bencher.dev/) — 是一款持续基准工具套件，用于识别持续集成性能的退化。对所有公开项目都是免费的。
  * [browserstack.com](https://www.browserstack.com/) — 手动和自动化浏览器测试，[开源项目免费](https://www.browserstack.com/open-source?ref=pricing)。
  * [BugBug](https://bugbug.io/) — 是一个轻量级的Web应用测试自动化工具，无需编码就可以学习和使用。在自己的电脑上可以免费运行无限数量的测试。对于云监控和CI/CD集成，每月有额外费用。
  * [Checkly](https://checklyhq.com) - 适合现代DevOps的基于代码的合成监控。以传统供应商几倍的价格监测您的API和应用。由“监控如代码”工作流和Playwright提供动力。开发者有慷慨的免费版。
  * [checkbot.io](https://www.checkbot.io/) — 是一个浏览器扩展，检查您的网站是否遵循50多项SEO、速度和安全性最佳实践。对于小型网站提供免费版。
  * [cypress.io](https://www.cypress.io/) — 对运行在浏览器中的任何东西提供快速、简单、可靠的测试

  * [loadmill.com](https://www.loadmill.com/) - 自动创建 API 和负载测试，通过分析网络流量进行分析。每月免费提供最多50个并发用户的模拟，最多60分钟。

  * [lost-pixel.com](https://lost-pixel.com) - 整体视觉回归测试，适用于Storybook、Ladle、Histoire 故事和Web应用程序。开源团队不限成员，完全免费，每月7,000张快照。

  * [octomind.dev](https://www.octomind.dev/) - AI辅助的Playwright UI测试生成和维护，无需编写。

  * [percy.io](https://percy.io) - 添加视觉测试到任何Web应用、静态站点、样式指南或组件库。不限团队成员，提供演示应用和无限项目，每月最多5,000张快照。

  * [preflight.com](https://preflight.com) - 无需代码的自动化Web测试。在浏览器上记录测试，确保对UI更改的健壮性，并在Windows机器上运行。免费计划包括50次每月视频、HTML会话等测试运行。

  * [qase.io](https://qase.io) - 测试管理系统，为Dev和QA团队提供测试案例管理、构建测试执行、执行测试、跟踪缺陷和衡量影响。免费版包括所有核心功能，500MB可用于附件，最多3个用户。

  * [Repeato](https://repeato.app/) - 无代码移动应用测试自动化工具，基于计算机视觉和AI。适用于原生应用、Flutter、React Native、Web、Ionic等。免费计划有限制了iOS和Android的10个测试，请注意大部分付费功能是免费的，包括无限次测试执行。

  * [Requestly](https://requestly.com/) - 跨平台Chrome扩展，可以拦截、重定向和模拟HTTP请求。提供Web调试器、Mock服务器、API客户端和会话录音功能。免费版10条规则，适用于开源开发人员。

  * [seotest.me](https://seotest.me/) - 免费的SEO网站测试工具，每日最多10个网站爬取。提供SEO学习资源和改善网站SEO的建议。

  * [snippets.uilicious.com](https://snippets.uilicious.com) - 类似CodePen的跨浏览器测试，

  * [Vaadin](https://vaadin.com) - 使用 Java 或 TypeScript构建可扩展的用户界面，并利用集成的工具、组件和设计系统快速迭代、设计更好的界面并简化开发流程。包含五个免费维护年的无限项目。

* [websitepulse.com](https://www.websitepulse.com/tools/) - 提供多种免费的网络和服务器工具。

* [webhook-test.com](https://webhook-test.com) - 用于集成的线上调试和检查 Webhook 和 HTTP 请求的独特 URL。完全免费，可以创建无限个 URL 并接收推荐。

* [webhook.site](https://webhook.site) - 通过自定义 URL 验证 Webhook、出站 HTTP 请求或电子邮件。始终提供临时 URL 和电子邮件地址，免费使用。

* [webhookbeam.com](https://webhookbeam.com) - 设置 Webhook 并通过推送通知和电子邮件监控它们。

**[⬆️ 返回顶部](#目录)**

## Security and PKI

  * [aikido.dev](https://www.aikido.dev) — 包含SCA、SAST、CSPM、DAST、机密管理、IaC、恶意软件、容器扫描、EOL等全方位应用安全平台。免费版包含两个用户，可扫描10个仓库，1个云环境，2个容器和1个域名。
  * [alienvault.com](https://www.alienvault.com/open-threat-exchange/reputation-monitor) — 检测您网络中的被入侵系统
  * [Altcha.org](https://altcha.org/anti-spam) - 基于自然语言处理和机器学习的网站和API的反垃圾邮件服务。免费版每天200个请求/域名。
  * [atomist.com](https://atomist.com/) — 提高自动化了各种开发任务的便捷性。现处于测试阶段。
  * [cloudsploit.com](https://cloudsploit.com/) — 为Amazon Web Services (AWS) 实施安全和合规审计和监控
  * [Public Cloud Threat Intelligence](https://cloudintel.himanshuanand.com/) — 提供公共云基础设施高可信度的潜在入侵标志(IOC)，部分数据在GitHub上开源(https://github.com/unknownhad/AWSAttacks)，完整列表可通过API获取。
  * [CodeNotary.io](https://www.codenotary.io/) — 提供不变证明的开源平台，用于印章代码、文件、目录或容器
  * [crypteron.com](https://www.crypteron.com/) — 一款云优先、为开发者友好的安全平台，防止.NET和Java 应用中的数据泄露
  * [CyberChef](https://gchq.github.io/CyberChef/) — 一个无需复杂工具或编程语言后台的简单直观的网络应用程序，用于分析和解码编码数据。就像是加密与加密的瑞士军刀。所有功能免费使用，无限制。您可以自建开源版本。
  * [DAS](https://signup.styra.com/) — Styra DAS 免费，提供完整的政策生命周期管理，用来创建、部署和管理Open Policy Agent (OPA) 权限控制
  * [Datree](https://www.datree.io/) — 开源命令行工具，确保Kubernetes配置正确遵循最佳实践及您的组织政策，防止误

  * [Mozilla Observatory](https://observatory.mozilla.org/)：查找并修复您网站中的安全漏洞。
  * [opswat.com](https://www.opswat.com/)：电脑、设备、应用、配置的免费安全监控，免费版支持25个用户及30天历史记录。
  * [openapi.security](https://openapi.security/)：免费检查任何基于OpenAPI / Swagger的API的安全性，无需注册。
  * [pixee.ai](https://pixee.ai)：自动化产品安全工程师，免费的GitHub机器人，用于自动解决Java项目中的漏洞，其他语言即将推出。
  * [pyup.io](https://pyup.io)：监控Python依赖关系中的安全漏洞并自动更新，单个私有项目免费，开源项目无限。
  * [qualys.com](https://www.qualys.com/community-edition)：发现Web应用漏洞，审计OWASP风险。
  * [report-uri.io](https://report-uri.io/)：CSP和HPKP违规报告。
  * [ringcaptcha.com](https://ringcaptcha.com/)：工具利用电话号码作为ID，提供免费服务。
  * [seclookup.com](https://www.seclookup.com/)：Seclookup API能够丰富域威胁指标到SIEM中，提供域名的全面信息，提升威胁检测和响应。[免费获取 50K 查询](https://account.seclookup.com/)。
  * [snyk.io](https://snyk.io)：找出并修复开源依赖中的已知安全漏洞。开源项目无限测试和补救，私有项目每月限制200次测试。
  * [ssllabs.com](https://www.ssllabs.com/ssltest/)：详细了解任何SSL web服务器的配置。
  * [SOOS](https://soos.io)：免费、无限次数的开源项目SCA扫描，检测并修复发布前的安全威胁。为您提供简单有效的保护。
  * [StackHawk](https://www.stackhawk.com/)：自动化应用程序扫描，在整个管道中查找并修复安全漏洞，单个应用程序的无限扫描和环境。
  * [Sucuri SiteCheck](https://sitecheck.sucuri.net)：免费网站安全检查和恶意软件扫描。
  * [Protectumus](https://protectumus.com)：免费网站安全检查，网站防病毒，PHP服务器防火墙(WAF)。免费版通过电子邮件通知

## Authentication, Authorization, and User Management

  * [Aserto](https://www.aserto.com) — 应用和API的细粒度授权服务。提供免费的1000 MAU和100个授权实例。
  * [asgardeo.io](https://wso2.com/asgardeo) — 将SSO、MFA、无密码身份验证和更多无缝集成。包括前端和后端应用的SDK。提供免费的1000 MAU和5个身份提供程序。
  * [Auth0](https://auth0.com/) — 云托管SSO。免费版包括25,000 MAU，不限制社交连接，自定义域名等功能。
  * [Authgear](https://www.authgear.com) - 几分钟内在您的应用中实现无密码登录、一次性密码、多因素身份验证和SSO。包含前端所有内容。提供免费的5000 MAU。
  * [Authress](https://authress.io/) — 身份验证登录和访问控制，为任何项目提供无限制的身份提供程序。支持Facebook、Google、Twitter等。前1000次API调用免费。
  * [Authy](https://authy.com) - 多设备的二因素认证(2FA)带备份功能。可作为Google Authenticator的替代品。前100次成功的身份验证免费。
  * [Cerbos Hub](https://www.cerbos.dev/product-cerbos-hub) — 一个完整的授权管理系统，用于编写、测试和部署访问策略。提供细粒度授权和访问控制，免费100个月活跃主体计数。
  * [Clerk](https://clerk.com) — 用户管理、身份验证、2FA/MFA，以及预先构建的登录、注册、用户资料等功能的UI组件。免费提供10,000 MAU。
  * [Cloud-IAM](https://www.cloud-iam.com/) — Keycloak作为服务的身份和访问管理。免费提供100个用户和一个领域。
  * [Corbado](https://www.corbado.com/) — 在新应用或现有应用中添加密钥密码认证。免费提供无限的MAU。
  * [Descope](https://www.descope.com/) — 极其可定制的身份验证流程，既有无代码和API/SDK方法，免费提供7,

  * **[Warrant](https://warrant.dev/)** — 一款托管的企业级授权和访问控制服务，适用于您的应用。免费套餐包括每月1百万个API请求和1000个授权规则。
  * **[ZITADEL Cloud](https://zitadel.com)** — 一站式用户管理和访问控制解决方案，适用于您的业务并支持多租户（B2B）场景。免费提供25,000个经过身份验证的请求，所有安全功能（无费用门槛，包括OTP、无密码登录、策略等）。
  * **[PropelAuth](https://propelauth.com)** — 几行代码即可立即为任何规模的企业提供服务，免费提供支持最多200个用户和10000条交易电子邮件（水印品牌：“由PropelAuth提供支持”）。
  * **[Logto](https://logto.io/)** — 开发、保护和管理您的产品的用户身份，包括身份验证和授权。免费提供支持最多5,000个MAU（每月活跃用户数），还提供开源的本地部署选项。
  * **[WorkOS](https://workos.com/)】 — 免费提供最多1百万MAU的用户管理和身份验证服务。支持电子邮件/密码登录、社交登录、魔法验证、双因素认证等功能。

**[⬆️ 返回顶部](#目录)**

## Mobile App Distribution and Feedback

  * [TestApp.io](https://testapp.io) - 测试您的移动应用是否正常运行的首选平台。免费计划：一个应用、分析、无限版本和安装数，以及反馈收集。
  * [Loadly](https://loadly.io) - 提供iOS和Android应用的beta分发服务，完全免费，提供无限下载、高速下载和无限上传。
  * [Diawi](https://www.diawi.com) - 直接向设备部署iOS和Android应用。免费计划：应用上传、密码保护的链接、1天过期期、10次安装。
  * [InstallOnAir](https://www.installonair.com) - 空中分发iOS和Android应用。免费计划：无限上传、私有链接、来宾2天过期，注册用户60天。
  * [GetUpdraft](https://www.getupdraft.com) - 分发移动应用用于测试。免费计划包括一个应用项目、三个应用版本、500 MB存储和每月100个应用安装。
  * [Appho.st](https://appho.st) - 移动应用托管平台。免费计划包括5个应用、每月50次下载，最大文件大小为100 MB。

**[返回顶部](#目录)**

## Management System

  * [bitnami.com](https://bitnami.com/) — 在 IaaS 上部署预处理应用。可免费管理 1 个 AWS 微型实例
  * [Esper](https://esper.io) — 适用于 Android 设备的 MDM 和 MAM 解决方案与 DevOps 服务。提供 100 台设备免费服务，并配备一个用户许可以及 25 MB 应用存储空间
  * [jamf.com](https://www.jamf.com/) — 用于 iPad、iPhone 和 Mac 的设备管理，免费提供 3 台设备
  * [Miradore](https://miradore.com) — 设备管理服务。保持设备舰队的最新状态并为无限设备提供安全保障。免费计划提供基础功能
  * [moss.sh](https://moss.sh) — 帮助开发者部署和管理他们的web应用和服务器。每月最多可免费部署 25 个 git 部署
  * [runcloud.io](https://runcloud.io/) — 主要关注 PHP 项目的服务器管理。免费提供最多 1 台服务器的服务
  * [ploi.io](https://ploi.io/) — 用于轻松管理与部署服务器和网站的服务器管理工具。免费提供对单台服务器的支持

## Messaging and Streaming

  * [Ably](https://www.ably.com/) - 实时消息服务，具有存在、持久性和保证交付功能。免费计划包括每月300万条消息、最大100个并发连接和100个频道。
  * [cloudamqp.com](https://www.cloudamqp.com/) - RabbitMQ 服务。Little Lemur 计划：每月最大100万条消息、最多20个并发连接、最多100个队列、最多1万个待发消息，支持在不同AZ的多个节点。
  * [courier.com](https://www.courier.com/) - 提供一个API，用于推送、应用内、电子邮件、即时通讯、短信和其他渠道信息的多重推送，支持模板管理等功能。免费计划包括每月1万个消息。
  * [engagespot.co](https://engagespot.co/) - 专为开发者设计的多渠道通知基础设施，内建应用内邮箱、无代码模板编辑器。免费版包含每月10000条消息。
  * [HiveMQ](https://www.hivemq.com/mqtt-cloud-broker/) - 将MQTT设备连接到云原生物联网消息代理器。永久免费连接不超过100个设备（无需信用卡）。
  * [knock.app](https://knock.app) - 为开发者提供的通知基础设施，支持多渠道（如应用内、电邮、短信、Slack和推送）推送。免费版包含每月1万个消息。
  * [NotificationAPI.com](https://www.notificationapi.com/) - 5分钟内向任何软件添加用户通知。免费版包含每月1万个通知，100条短信和自动电话。
  * [Novu.co](https://novu.co) - 开源通知基础设施，包括电子邮件、短信、直接、应用内和推送等多种通信渠道的管理组件和API。提供免费版，每月3万个通知，数据保留90天。
  * [pusher.com](https://pusher.com/) - 实时消息服务。免费版支持最多100个并发连接和每日200,000条消息。
  * [scaledrone.com](https://www.scaledrone.com/) - 实时消息服务。免费版支持最多20个并发连接和每天100,000条消息。
  * [synadia.com](https

## Log Management

  - [bugfender.com](https://bugfender.com/) - 免费提供每日最多 100,000 行日志，保留时间为 24 小时
- [logentries.com](https://logentries.com/) - 免费每月最多提供 5 GB 存储空间，保留时间为 7 天
- [loggly.com](https://www.loggly.com/) - 单个用户免费，每日最多 200 MB，保留时间为 7 天
- [logz.io](https://logz.io/) - 免费提供每日最多 1 GB 存储，保留时间为 1 天
- [ManageEngine Log360 Cloud](https://www.manageengine.com/cloud-siem/) - 由 ManageEngine 提供的日志管理服务。免费版提供 50 GB 存储空间，搜索保留时间为 15 天，存储保留时间为 7 天。
- [papertrailapp.com](https://papertrailapp.com/) - 搜索保留 48 小时，归档保留 7 天，每月 50 MB
- [sematext.com](https://sematext.com/logsene) - 免费提供每日最多 500 MB 存储，保留时间为 7 天
- [sumologic.com](https://www.sumologic.com/) - 免费每日最多 500 MB 存储，保留时间为 7 天
- [logflare.app](https://logflare.app/) - 对每个应用每月最多 12,960,000 条记录免费，保留时间为 3 天
- [logtail.com](https://logtail.com/) - 基于 ClickHouse 的 SQL 兼容的日志管理。每月免费 1 GB，保留时间为 3 天。
- [logzab.com](https://logzab.com/) - 审计跟踪管理系统。每月免费提供 1,000 条用户活动日志记录，针对最多 5 个项目，保留时间为 1 个月。
- [openobserve.ai](https://openobserve.ai/) - 免费提供每月 200 GB 的数据摄入，保留时间为 15 天。

**[回到顶部](#目录)**

## Translation Management

  * [crowdin.com](https://crowdin.com/) — 提供无限的项目、无限的字符串和开源协作
  * [gitlocalize.com](https://gitlocalize.com) — 免费且不限制私有库和公共库
  * [Lecto](https://lecto.ai/) — 机器翻译API，免费级别（30个免费请求，每个请求1000个翻译字符）。与Loco Translate的WordPress插件集成。
  * [lingohub.com](https://lingohub.com/) — 免费版本适用于最多3名用户，开源项目始终免费
  * [localazy.com](https://localazy.com) — 单语言源字符串免费，不限制语言、贡献者，对初创企业和开源项目提供优惠
  * [Localeum](https://localeum.com) — 免费1000条字符串，单用户，不限语言，无限项目
  * [localizely.com](https://localizely.com/) — 对开源免费
  * [Loco](https://localise.biz/) — 免费2000次翻译，无限翻译者，每项目10种语言，每项目1000个可翻译内容
  * [oneskyapp.com](https://www.oneskyapp.com/) — 有限的免费版供最多5名用户，开源项目免费
  * [POEditor](https://poeditor.com/) — 免费版本最多1000条字符串
  * [SimpleLocalize](https://simplelocalize.io/) - 免费版本最多100条翻译键，无限制字符串、语言集群，初创公司优惠
  * [Texterify](https://texterify.com/) - 免费供单个用户使用
  * [Tolgee](https://tolgee.io) — 免费SAAS服务，暂有限制翻译，自建版本永远免费
  * [transifex.com](https://www.transifex.com/) — 对开源免费
  * [Translation.io](https://translation.io) — 对开源免费
  * [Translized](https://translized.com) - 免费1000条字符串，单用户，无限语言，无限项目
  * [webtranslateit.com](https://webtranslateit.com/) — 免费最多500

## Monitoring

  * [UptimeObserver.com](https://uptimeobserver.com) - 提供 20 个带有 5 分钟间隔的监控器，以及可定制的状态页面，甚至适用于商业用途。享受无限的实时电子邮件和 Telegram 通知。无需信用卡即可开始使用，完全免费。
  * [Pingmeter.com](https://pingmeter.com/) - 提供 5 个带有 10 分钟间隔的监控器，可监控 SSH、HTTP、HTTPS 和自定义 TCP 端口。
  * [alerty.ai](https://www.alerty.ai) - 免费提供 FE、BE、DB 等的 APM 和监控，以及免费的运行次数。
  * [appdynamics.com](https://www.appdynamics.com/) — 免费提供 24 小时的数据指标，但应用性能管理代理的限制是一个 Java、一个 .NET、一个 PHP 和一个 Node.js 动态包。
  * [appneta.com](https://www.appneta.com/) — 免费提供，数据保留时间为 1 小时。
  * [appspector.com](https://appspector.com/) - 远程 iOS/Android/Flutter 调试的控制中心。免费提供可支持小流量使用（64MB 日志）。
  * [assertible.com](https://assertible.com) — 自动化的 API 测试和监控。团队和个人的免费计划。
  * [bleemeo.com](https://bleemeo.com) - 免费提供 3 台服务器、5 个监控器、无限用户、无限仪表板和报警规则。
  * [checklyhq.com](https://checklyhq.com) - 开源的端到端/合成监控和深度 API 监控，面向开发者。免费版包含 5 个用户和 50,000+ 检测运行次数。
  * [cloudsploit.com](https://cloudsploit.com) — 用于 AWS 安全性和配置监控。免费版：无限按需扫描、无限用户、无限存储账户。订阅版提供自动扫描、API 访问等功能。
  * [cronitor.io](https://cronitor.io/) - 用于 cron 作业、网站、API 等的性能洞察和可用性监控。免费版提供 5 个监控器。
  * [datadoghq

  * [netdata.cloud](https://www.netdata.cloud/) — Netdata 是一个开源工具，用于收集实时指标。这是一个不断增长的产品，也可以在 GitHub 上找到！
  * [newrelic.com](https://www.newrelic.com) — 新 Relic 是一个监控平台，旨在帮助工程师创建更完美的软件。从单体应用到无服务器，你可以为所有东西添加监控，然后分析、诊断和优化整个软件栈。免费版提供每月 100GB 的免费数据摄入，一个免费的完全访问用户和无限数量的免费主要用户。
  * [Middleware.io](https://middleware.io/) - Middleware 监控平台提供全面的应用和堆栈可见性，以便你可以在大规模下监控和诊断问题。他们的免费版计划是为开发者社区提供的，允许监控最多 100 万个日志事件，基础设施监控和 APM 为最多 2 个主机。
  * [nixstats.com](https://nixstats.com) - 对单个服务器免费。电子邮件通知、公共状态页面、60 秒间隔等。
  * [OnlineOrNot.com](https://onlineornot.com/) - OnlineOrNot 提供网站和 API 的可用性监控，以及对 cron 作业和计划任务的监控。它还提供状态页面。免费版在 3 分钟间隔内提供前五个检查，并通过 Slack、Discord 和电子邮件发送警报。
  * [OntarioNet.ca CN Test](https://cntest.ontarionet.ca) — 检查网站是否在中国的防火墙中被封锁。它通过比较中国和美国的服务器检测到的 DNS 结果和 AS 节点信息来识别 DNS 污染。
  * [opsgenie.com](https://www.opsgenie.com/) — 为运营 24/7 服务的强大报警和应急管理。免费提供 5 个用户。
  * [paessler.com](https://www.paessler.com/) — 强大的基础设施和网络监控解决方案，包括报警、强大的可视化功能和基本报告。免费版提供 100 个传感器。
  * [pagecrawl.io](https://pagecrawl.io/) - 监控网站更改，免费版包括每天检查的最多 6 个监控器。
  * [syagent.com](https://syagent.com/) — 非商业性的免费服务器监控服务

  * [statuscake.com](https://www.statuscake.com/) — 网站监控，无限次测试但有限制
  * [statusgator.com](https://statusgator.com/) — 状态页面监控，3个监控免费
  * [SweetUptime](https://dicloud.net/sweetuptime-server-uptime-monitoring/) — 服务器监控、运行时监控、DNS/域名监控。免费可以监测10台服务器、10个运行状态和10个域名。
  * [thousandeyes.com](https://www.thousandeyes.com/) — 网络和用户体验监控。免费提供3个位置和20个主要网络服务的数据源。
  * [uptimerobot.com](https://uptimerobot.com/) — 网站监控，50个监控免费
  * [uptimetoolbox.com](https://uptimetoolbox.com/) — 为5个网站提供免费监控，每60秒一次，公开状态页面。
  * [zenduty.com](https://www.zenduty.com/) — 全面的事件管理、报警、值班管理以及响应编排平台，适用于网络运营、系统可靠性工程和DevOps团队。最多5个用户是免费的。
  * [instatus.com](https://instatus.com) - 仅需10秒即可获得丰富的状态页面。永久免费，不限子账户和团队数量。
  * [Squadcast.com](https://squadcast.com) - Squadcast是一个综合的事件管理软件，旨在推广SRE最佳实践。10个用户可无限期享受免费版。
  * [RoboMiri.com](https://robomiri.com/) - RoboMiri是一款稳定的运行状态监控工具，提供多种监控类型：定时任务、关键词、网站、端口、ping。免费版包含25个选项，每3分钟检查一次，可通过电话、短信、电子邮件和Webhook发送警报。
  * [Better Stack](https://betterstack.com/better-uptime) — 运行状态监控、事件管理、值班调度/报警和状态页面在一个产品中。免费版包括10个监控，频率每3分钟，以及状态页面。
  * [Pulsetic](https://pulsetic.com) - 包括10个监控、6个月的历史运行状态/日志、无限状态页面和自定义域名！

## Crash and Exception Handling

  * [CatchJS.com](https://catchjs.com/) - 提供屏幕截图和点击跟踪的 JavaScript 错误跟踪。对开源项目免费。
  * [bugsnag.com](https://www.bugsnag.com/) — 初始试用期后，每月最多提供 2,000 个错误的免费服务。
  * [elmah.io](https://elmah.io/) — 为 web 开发者提供错误日志和监控。为开源项目的中小型企业订阅是免费的。
  * [Embrace](https://embrace.io/) — 移动应用监控。对于小团队和每年最多 1,000,000 次用户会话是免费的。
  * [exceptionless](https://exceptionless.com) — 实时的错误、功能、日志报告等。每月 3,000 事件或 1 个用户免费，开源并易于自托管以满足无限使用。
  * [GlitchTip](https://glitchtip.com/) — 简单的开源错误跟踪。免费获得每月 1,000 个事件，或者可以自托管无限制使用。
  * [honeybadger.io](https://www.honeybadger.io) - 异常、上行时间和定时器监控。对小团队和开源项目免费（每月 12,000 个错误）。
  * [memfault.com](https://memfault.com) — 云设备可观测性和调试平台。Nordic、NXP 和 Laird 设备有 100 个免费设备。
  * [rollbar.com](https://rollbar.com/) — 异常和错误监控，免费版包含每月 5,000 个错误，不限用户，30 天的保留记录。
  * [sentry.io](https://sentry.io/) — Sentry 实时跟踪应用异常，有小型免费计划。免费版限制为每月5,000 个错误/1 用户，若自托管则无限制。
  * [Axiom](https://axiom.co/) — 存储最多 0.5 TB 的日志，保留 30 天。包括与 Vercel 等平台的集成和电子邮件/Discord 通知的高级数据分析功能。
  * [Semaphr](https://semaphr

## Search

  * [algolia.com](https://www.algolia.com/) — 提供带有拼写容错、相关性和UI库的托管搜索解决方案，轻松构建搜索体验。免费的“Build”计划包括100万份文档和每月10,000次搜索。还提供免费的[开发者文档搜索](https://docsearch.algolia.com/)。
  * [bonsai.io](https://bonsai.io/) — 免费1GB内存和1GB存储空间
  * [CommandBar](https://www.commandbar.com/) - 作为服务的统一搜索栏，基于网络的UI组件/插件，允许用户在您的产品中搜索内容、导航、功能等，提高可发现性。对于每月活跃用户不超过1,000名，无限命令是免费的。
  * [Magny](https://magny.io) - 一款SaaS服务，可帮助实现命令面板（例如，在应用内搜索），显著减少用户在应用中查找任何内容的时间，提高用户体验和效率。
  * [Orama Cloud](https://orama.com/pricing) - 免费提供3个索引、10万份文档/索引、无限的全文文本/向量/混合搜索、60天的分析数据。
  * [searchly.com](http://www.searchly.com/) — 提供2个索引和20MB存储空间的免费服务。

## Education and Career Development

  * [FreeCodeCamp](https://www.freecodecamp.org/) - 提供免费课程和认证，专注于数据分析、信息安全、网页开发等领域。
  * [The Odin Project](https://www.theodinproject.com/) - 免费、开源平台，其课程专注于JavaScript和Ruby，用于网页开发。
  * [Free Professional Resume Templates & Editor](https://www.overleaf.com/latex/templates/tagged/cv) - 提供大量专业的简历模板，可克隆并修改下载，适用于申请工作，涵盖AI优化。
  * [DeepLearning.AI Short Courses](https://www.deeplearning.ai/short-courses/) - 行业领袖提供的免费短课程，只需一小时或更短时间，就能了解最新生成AI工具和技巧。
  * [LabEx](https://labex.io) - 通过互动实验室和实际项目来提升Linux、DevOps、网络安全、编程、数据科学等技能。
  * [Roadmap.sh](https://roadmap.sh) - 包括区块链与用户体验设计在内的全面学习路线图，全部免费。
  * [Cisco Networking Academy, Skills for All](https://skillsforall.com/) - 提供免费的与认证相关的课程，覆盖网络安全、网络技术、Python等领域。
  * [MIT OpenCourseWare](https://ocw.mit.edu/) -麻省理工学院的在线课程资源库，免费分享来自2500多门课程的知识，YouTube频道网址：[@mitocw](https://www.youtube.com/@mitocw/featured)
  * [W3Schools](https://www.w3schools.com/) - 提供关于HTML、CSS、JavaScript等网络开发技术的免费教程。
  * [Khan Academy](https://www.khanacademy.org/computing/computer-programming) - 免费线上指南，涵盖基础和高级HTML/CSS、JavaScript和SQL学习。

**[⬆️ 返回顶部](#目录)**

## Email

  * [10minutemail](https://10minutemail.com) - 提供免费、临时的电子邮件进行测试。
  * [AhaSend](https://ahasend.com) - 交易式电子邮件服务，免费版每月提供1000封邮件的配额，不限域名，团队成员，webhooks 和消息路由。
  * [AnonAddy](https://anonaddy.com) - 开源匿名电子邮件转发，创建无限电子邮件别名，完全免费。
  * [Antideo](https://www.antideo.com) — 免费版提供每小时10次的验证请求，包括电子邮件、IP和电话号码验证，无需信用卡。
  * [Brevo](https://www.brevo.com/) — 免费版提供每月9000封邮件、每日300封邮件的配额。
  * [OneSignal](https://onesignal.com/) — 免费版提供每月10000封电子邮件，无需信用卡。
  * [Bump](https://bump.email/) - 免费提供10个Bump电子邮件地址，一个自定义域名。
  * [Burnermail](https://burnermail.io/) - 免费提供5个Burner电子邮件地址，1个邮箱，7天邮箱历史记录。
  * [Buttondown](https://buttondown.email/) — 新闻简讯服务，免费版支持最多100个订阅者。
  * [CloudMailin](https://www.cloudmailin.com/) - 免费版每月提供10000封邮件的入站电子邮件和交易性出站邮件（通过HTTP POST）。
  * [Contact.do](https://contact.do/) — 创建链接形式的联系表单（适用于联系表单的bitly）。
  * [debugmail.io](https://debugmail.io/) — 开发者专用的邮件服务器测试工具，简单易用。
  * [DNSExit](https://dnsexit.com/) - 免费提供2个电子邮件地址，每个域名带100MB存储空间。支持IMAP、POP3、SMTP、SPF/DKIM。
  * [EmailLabs.io](https://emaillabs.io/en) — 免费版每月发送邮件不超过9000封，每天不超过300封。
  * [EmailOctopus](https://emailoctopus.com) -

  * [mail-tester.com](https://www.mail-tester.com) — 检查电子邮件的 DNS/SPF/DKIM/DMARC 设置是否正确，每月免费20个。
  * [dkimvalidator.com](https://dkimvalidator.com/) — 测试电子邮件的 DNS/SPF/DKIM/DMARC 设置，由 roundsphere.com 提供的免费服务。
  * [mailcatcher.me](https://mailcatcher.me/) — 捕获邮件并通过 Web 界面提供。
  * [mailchannels.com](https://www.mailchannels.com) - 邮件 API，具有 REST API 和 SMTP 集成，免费版每月至多支持3,000封邮件。
  * [Mailcheck.ai](https://www.mailcheck.ai/) - 防止用户使用临时邮箱注册，每小时120次请求（约为每月86,400次）。
  * [Mailchimp](https://mailchimp.com/) — 免费版包含500个订阅者和1,000封每月邮件。
  * [Maildroppa](https://maildroppa.com) — 免费版包括最多100个订阅者和无限数量邮件，以及自动化功能。
  * [MailerLite.com](https://www.mailerlite.com) — 免费版每月1,000个订阅者和 12,000 封邮件。
  * [MailerSend.com](https://www.mailersend.com) — 邮件 API，SMTP，免费版每月提供3,000封交易邮件发送（每天200封发送限制）。
  * [mailinator.com](https://www.mailinator.com/) — 免费的公共电子邮件系统，您可以用任何想要的邮箱。
  * [Mailjet](https://www.mailjet.com/) — 免费版每月最多6,000封邮件（每天发送限制为200封）。
  * [Mailnesia](https://mailnesia.com) - 免费临时/消耗性电子邮件，用于自动访问注册链接。
  * [mailsac.com](https://mailsac.com) — 提供临时电子邮件测试的免费 API，以及公共电子邮件托管、出站捕获、电子邮件到 Slack/Websocket/Webhook（每月1,500次 API 限制）。


  * **[外卖](https://takeout.bysourfruit.com)**：实时更新的电子邮件服务，让发送电子邮件变得简单。每月免费500封交易邮件。
  * **[temp-mail.io](https://temp-mail.io)**：一个一次性使用的免费临时电子邮件服务，支持一次性发送多个邮件和转发。
  * **[tinyletter.com](https://tinyletter.com/)**：每月免费5000个订阅者的服务。
  * **[Touchlead](https://touchlead.app)**：多功能营销自动化工具，包括线索管理、表单创建和自动化。免费版有限制的线索和自动化操作。
  * **[trashmail.com](https://www.trashmail.com)**：免费提供一次性无效邮件地址，支持转发和邮件自动过期。
  * **[Tuta](https://tuta.com/)**：免费的secure电子邮件服务，内置端到端加密，无广告、无跟踪。1GB免费存储，1个日历（Tuta也有[付费版](https://tuta.com/pricing)）。Tuta部分开源（[GitHub](https://github.com/tutao/tutanota)），你可以自己搭建。
  * **[Verifalia](https://verifalia.com/email-verification-api)**：实时邮件验证API，包括邮箱确认和检测无效邮件地址的功能；每日赠送25次验证。
  * **[verimail.io](https://verimail.io/)**：批量和API验证电子邮件服务。每月免费100次验证。
  * **[Zoho](https://www.zoho.com)**：提供电子邮件和其他服务套件，部分服务有免费版：
     - **[电子邮件](https://zoho.com/mail)**：5个用户免费，每个用户5GB存储及25MB附件限制，支持一个域名。
     - **[Zoho Assist](https://www.zoho.com/assist)**：免费版包括一个并发远程支持许可证和不限时、不限使用人的5个离线电脑许可证。
     - **[Sprints](https://zoho.com/sprints)**：5个用户、5个项目和500MB存储免费。
     - **[Docs](https://zoho.com/docs)**：5个用户免费，上传限制1GB，存储空间5GB。Zoho Office套件（Writer、Sheets及Show）附带。
     - **[Projects](

  [Maileroo](https://maileroo.com) - 针对开发者的SMTP转发和电子邮件API。每月5,000封邮件，不限域名，免费电子邮件验证，黑名单监控，邮件测试器等功能。

**[⬆️ 返回目录顶端](#目录)**

## Feature Toggles Management Platforms

  * [ConfigCat](https://configcat.com) - ConfigCat是一个专注于开发者的特征旗服务，具有无限制的团队规模、优秀的支持和合理的价格。免费计划包含10个旗标、两个环境、1个产品和每月500万次请求。
  * [Flagsmith](https://flagsmith.com) - 信心满满地发布功能；在web、移动和服务器端应用中管理特征旗。使用托管API、部署到私有云或在本地运行。
  * [GrowthBook](https://growthbook.io) - 开源的特征旗和A/B测试提供者，内置贝叶斯统计分析引擎。3个用户的免费版本，无限制的旗标和实验。
  * [Hypertune](https://www.hypertune.com) - 安全的特征旗、A/B测试、分析和应用配置，提供Git风格版本控制和内存中同步的本地旗标评估。5位团队成员的免费版包含无限制的旗标和A/B测试。
  * [Molasses](https://www.molasses.app) - 功能强大的特征旗和A/B测试。免费计划包含3个环境，每个环境有5个特征旗。
  * [Toggled.dev](https://www.toggled.dev) - 企业级、可扩展的多区域特征开关管理平台。免费版包含10个旗标、两个环境，无限请求。SDK、分析仪表板、发布日历、Slack通知等功能都包含在内。
  * [Statsig](https://www.statsig.com) - 功能强大的管理平台，提供特征管理、A/B测试、分析等功能。它的慷慨免费计划提供了无限的座位、旗标、实验和动态配置，支持每月100万事件。
  * [Abby](https://www.tryabby.com) - 开源特征旗和A/B测试，配置为代码和完全类型的TypeScript SDKs。框架如Next.js和React的强集成。提供慷慨的免费层次和低成本的扩展选项。

## Font

  以下是一些网站，它们提供各种字体下载或用于网页的工具：

1. [dafont](https://www.dafont.com/) - 网站上展示的字体是作者的财产，有些是免费软件、共享软件、演示版或公共领域。
2. [Everything Fonts](https://everythingfonts.com/) - 提供多种工具，如 @font-face、单位转换器、字体渲染器和字体提交器。
3. [Font Squirrel](https://www.fontsquirrel.com/) - 提供商业可用的免费字体，精选优质字体，便于使用。
4. [Google Fonts](https://fonts.google.com/) - 许多免费字体可轻松通过下载或链接至Google的CDN安装到网站。
5. [FontGet](https://www.fontget.com/) - 各种字体可供下载并根据标签分类整齐。
6. [Fontshare](https://www.fontshare.com/) - 免费字体服务，包括专业级字体，个人或商业用途均可免费使用。
7. [Befonts](https://befonts.com/) - 提供独特的字体，供个人或商业使用。
8. [Font of web](https://fontofweb.com/) - 分析网站上使用的所有字体和使用方式。
9. [Bunny](https://fonts.bunny.net) - 专注于隐私的Google字体服务。
10. [FontsKey](https://www.fontskey.com/) - 提供免费和付费商业字体，适合个人使用，可快速筛选。
11. [fonts.xz.style](https://fonts.xz.style/) - 针对网页提供的免费开源字体分发服务，使用CSS加载字体。
12. [Fontsensei](https://fontsensei.com/) - 用户标记的开源Google字体，支持CJK字符集（中文、日文、韩文）的标签。

**[⬆️ 返回目录](#目录)**

## Forms

  * [Feathery](https://feathery.io) - 功能强大且用户体验设计友好的表单构建平台。可用于创建注册、登录、用户引导、支付流程、复杂的财务应用等。免费计划每月可支持250次提交和5个活跃表单。

  * [Form-Data](https://form-data.com) - 非代码表单后端解决方案。包含垃圾邮件过滤器、邮件通知、自动回复、webhook、Zapier支持、重定向、以及AJAX或POST请求等功能。免费计划不限制表单数量，每月20次提交，同时额外提供2000次提交权限，通过显示Form-Data徽章。

  * [FabForm](https://fabform.io/) - 设计者的表单后端平台。月免费许可提供每月250次提交。现代友好的图形用户界面，支持与Google Sheets、Airtable、Slack、邮箱等集成。

  * [Form.taxi](https://form.taxi/) - 提供HTML表单提交处理的集中端点。提供通知、垃圾邮件拦截以及符合GDPR规定的数据处理。基础应用免费。

  * [Formcarry.com](https://formcarry.com) - HTTP POST表单接收端点，免费计划每月有100次提交。

  * [formingo.co](https://www.formingo.co/) - 适用于静态网站的简单HTML表单解决方案。无需注册即可免费开始，免费计划每月500次提交，定制回复邮件地址。

  * [FormKeep.com](https://www.formkeep.com/) - 无限多的表单，每月50次提交，垃圾邮件防护，邮件通知以及拖放设计工具。更多特性包括定制字段规则、团队支持、Google Sheets、Slack、ActiveCampaign和Zapier集成。

  * [formlets.com](https://formlets.com/) - 在线表格服务，每月无限形式，每月100次提交，邮件通知功能。

  * [formspark.io](https://formspark.io/) - 发送邮件的表单到邮件服务。免费计划不限制表单数量，每月250次提交，客户服务团队支持。

  * [Formspree.io](https://formspree.io/) - 利用HTTP POST请求发送邮件。免费层级限制每表格每月50次提交。

  * [Formsubmit.co](https://

  * [smartforms.dev](https://smartforms.dev/) - 一个功能强大且易用的网站表单后端，免费计划每月允许50个提交，250MB文件存储，Zapier集成，CSV/JSON出口，自定义重定向，自定义响应页面，Telegram和Slack机器人，单个电子邮件通知。
  * [Survicate](https://survicate.com/) — 使用一个工具从所有来源收集反馈并发送跟进调查。自动分析反馈并使用AI提取洞察。免费功能包括电子邮件、网站、产品内或移动调查，AI调查创建工具，以及每月25个响应。
  * [staticforms.xyz](https://www.staticforms.xyz/) - 免费集成HTML表单，无需任何服务器端代码。用户提交表单后，表单内容将以邮件形式发送到您注册的地址。
  * [stepFORM.io](https://stepform.io) - 问答和表单构建器。免费计划包含了五个表单，每张表单最多三个步骤和每月50个响应。
  * [Typeform.com](https://www.typeform.com/) — 将设计精美 的表单添加到网站上。免费版仅限每张表单十个字段和每月100个响应。
  * [WaiverStevie.com](https://waiverstevie.com) - 带REST API的电子签名平台。您可以使用Webhooks接收通知。免费版会在签署文件上加水印，但不限制信封和签名数量。
  * [Web3Forms](https://web3forms.com) - 无需编写后端代码，适用于静态和JAMStack网站的联系表单。免费计划包含无限个表单、无限个域名和每月250个提交。
  * [WebAsk](https://webask.io) - 调查和表单构建器。免费计划每个账户有三个调查，每月100个响应，每个调查限十个元素。
  * [Wufoo](https://www.wufoo.com/) - 快速在网站上使用的表单。免费版每月提交限制为100个。
  * [formpost.app](https://formpost.app) - 免费无限制的表单到邮件服务。设置自定义重定向、自动响应和Webhooks等功能都是免费的。
  * [Formester.com](https://

## Generative AI

  * [Keywords AI](https://keywordsai.co) - 最好的LLM监控平台。只需两行代码即可调用200多个LLM。每月免费10,000次请求，平台功能免费！
  * [Portkey](https://portkey.ai/) - 为Gen AI应用提供控制面板，包括观测套件和AI网关。每月免费发送并记录最多10,000个请求。
  * [Braintrust](https://www.braintrustdata.com/) - 包括评估、提示游戏区和数据管理的Gen AI解决方案。免费计划每周提供最多1,000行私人评估。
  * [Findr](https://www.usefindr.com/) - 能够同时搜索所有应用程序的通用搜索。使用您的数据回答问题的搜索助手。免费版提供无限统一搜索和每天5次共乘查询。
  * [ReportGPT](https://report-gpt.io) - AI驱动的写作助手。整个平台免费，只要您提供自己的API密钥即可使用。
  * [Clair](https://askclair.ai/) - 临床AI参考工具。学生可以免费访问专业工具套件，包括开放搜索、临床摘要、医学审查、药物相互作用、ICD-10代码和 stewardship。此外，专业套件提供免费试用。
  * [Langtrace](https://langtrace.ai) - 帮助开发者追踪、评估和管理提示、数据集问题，并调试与LLM应用程序性能相关的事项。创建任何LLM的标准观测性跟踪，有助于观测和与任何观测客户端配合。免费计划每月提供50K次跟踪。
  * [Ultra AI](https://ultraai.app) - 为您的产品提供AI命令中心。功能包括多提供商AI网关、提示管理、缓存、日志、分析、模型降级和用户速率限制。免费的'永远免费'计划提供每月10,000+请求，所有功能（除了缓存）都包含在内。
  * [Comet Opik](https://www.comet.com/site/products/opik/) - 在开发和生产周期中评估、测试和部署LLM应用的工具。
  * [Langfuse](https://langfuse.com/) - 开源LLM工程平台，帮助团队协作调试、分析和迭代LLM应用。免费版包含每月50,000

## CDN and Protection

  - [**bootstrapcdn.com**](https://www.bootstrapcdn.com/) — 提供bootstrap、bootswatch和fontawesome.io的CDN
  - [cdnjs.com](https://cdnjs.com/) — 简单、快速、可靠。最优秀的内容分发服务。cdnjs是一个以Cloudflare为后盾的免费开源CDN，被超过11%的网站信任。
  - [**developers.google.com**](https://developers.google.com/speed/libraries/) — Google Hosted Libraries是Google提供的Open Source JavaScript库的分发网络
  - [Stellate](https://stellate.co/) — 一个非常快、可靠的用于GraphQL API的CDN，初学者可享受两个服务的免费版
  - [jsdelivr.com](https://www.jsdelivr.com/) — 免费、快速、可靠的开源CDN，支持npm、GitHub、WordPress、Deno等
  - [Microsoft Ajax](https://docs.microsoft.com/en-us/aspnet/ajax/cdn/overview) — 微软Ajax CDN托管了像jQuery这样的流行第三方JavaScript库，让添加Web应用变得轻松
  - [ovh.ie](https://www.ovh.ie/ssl-gateway/) — 提供免费DDoS防护和SSL证书
  - [Skypack](https://www.skypack.dev/) — 100%基于ES模块的JavaScript CDN，个人项目每月免费1M请求
  - [raw.githack.com](https://raw.githack.com/) — 使用Cloudflare的替代品，为文件提供存储服务
  - [section.io](https://www.section.io/) — 简单快捷的Varnish Cache解决方案，对一个站点永久免费
  - [statically.io](https://statically.io/) — 为Git仓库(GitHub、GitLab、Bitbucket)、WordPress相关资源和图片提供的CDN服务
  - [toranproxy.com](https://toranproxy.com/) — 包括Packagist和GitHub在内的代理。免失败CDN。个人使用和个人开发者版完全免费，但不提供支持
  - [UNPKG](https://unpkg.com/) — 提供npm上所有内容的CDN服务
  - [weserv](https://images.weserv.nl/) — 实时的图片缓存与缩放服务。即时处理全球缓存中的图片
  - [Namecheap Supersonic

## PaaS

  * [anvil.works](https://anvil.works) - 使用Python构建Web应用。免费版提供无限应用和30秒超时。
  * [appwrite](https://appwrite.io) - 允许无限项目使用，无项目暂停，并提供WebSocket支持和身份验证服务。免费版包含1个数据库、3个存储桶、每个项目5个函数。
  * [configure.it](https://www.configure.it/) — 移动应用开发平台，针对两个项目免费，功能有限但无资源限制。
  * [codenameone.com](https://www.codenameone.com/) - 开源的移动应用开发工具链，专为Java/Kotlin开发者打造，商业用途免费，不限项目数量。
  * [deco.cx](https://www.deco.cx/en/dev) - 用于构建边缘原生前端的平台，通过TypeScript代码生成视觉CMS。包含A/B测试、内容分段和实时分析，适合内容密集型企业电商网站。免费提供5000页/月访问量或开源/个人项目。
  * [Deno Deploy](https://deno.com/deploy) - 分布式系统，用于在全球边缘运行JavaScript、TypeScript和WebAssembly。免费版包含每天100,000次请求和每月100 GB数据传输权限。
  * [domcloud.co](https://domcloud.co) - 提供CI/CD服务的Linux托管服务，支持GitHub、SSH和MariaDB/Postgres数据库。免费版包含1GB存储和1GB每月网络流量，仅限免费域名。
  * [encore.dev](https://encore.dev/) - 后端框架，利用静态分析提供基础设施、无样板代码等。免费提供爱好项目云端托管服务。
  * [flightcontrol.dev](https://flightcontrol.dev/) - 在您的AWS账户上部署Web服务、数据库等。免费版适用于个人GitHub仓库上的1名开发人员。AWS费用由AWS计费，但也可以使用积分和免费额度。
  * [gigalixir.com](https://gigalixir.com/) - 提供了一个从不休眠的免费实例和一个用于Elixir/Phoenix应用的免费PostgreSQL数据库，限制为2个连接、10,000行和无备份。
  * [Glitch](https://glitch.com/) - 免费公开托管服务，支持

  * [Meteor Cloud](https://www.meteor.com/cloud) — Galaxy托管服务。 Meteor的针对Meteor应用的平台即服务包括免费的MongoDB共享托管和自动SSL。

  * [Northflank](https://northflank.com) — 使用强大的UI、API和CLI构建并部署微服务、作业与管理数据库。无缝从版本控制和外部Docker注册表扩展容器。免费版包括两个服务、两个cron作业和一个数据库。

  * [YepCode](https://yepcode.io) - 一个集成了API和服务的全功能平台，可在无代码环境中运行。它保留了NoCode工具的敏捷性和优势，同时使用编程语言提供所有功能。免费版包含[1000 yeps](https://yepcode.io/pricing/)。

  * [WunderGraph](https://cloud.wundergraph.com) - 开源平台，快速构建和管理现代API。内置CI/CD、GitHub集成和自动HTTPS。免费版提供3个项目、1GB出站带宽和每月300分钟的构建时间，详细可参考[免费计划](https://wundergraph.com/pricing)。

  * [Zeabur](https://zeabur.com) - 一键部署服务。免费版提供3个服务，每月免费额度为5美元。

  * [mogenius](https://mogenius.com) - 便于在Kubernetes上构建、部署并运行服务。免费版支持本地Kubernetes与mogenius连接，帮助个体开发者在机器上建立类似生产环境的测试环境。

  * [genezio](https://genezio.com/) - 提供服务器less函数投递，独家为非商业或学术用途提供每月100万次 函数调用、100GB带宽和10个cron作业。

**[⬆️ 返回目录顶部](#目录)**

## BaaS

  * [Activepieces](https://www.activepieces.com) - 构建自动化流程来整合应用后台。例如，当应用程序中的事件发生时，发送Slack消息或在Google表格中添加一行。每个月免费提供5,000个任务处理。

* [back4app.com](https://www.back4app.com) - back4app是一个易于使用、灵活且可扩展的基于Parse平台的后端服务。

* [backendless.com](https://backendless.com/) - 提供移动和Web应用程序的后端即服务，免费存储1 GB文件，每月50,000条推送通知，表中可存储1,000条数据对象。

* [bismuth.cloud](https://www.bismuth.cloud/) - 人工智能自动生成Python API，在函数运行时和托管存储上构建和托管，您可以在在线编辑器中免费创建，或使用您最喜欢的工具进行本地开发。

* [BMC Developer Program](https://developers.bmc.com/site/global/bmc_helix_platform/program/overview/index.gsp) - BMC开发者计划提供文档和资源，用于构建和部署针对企业的数字化创新。该计划包括全面的个人沙箱，包括平台、SDK和组件库，用以构建和定制应用。

* [connectycube.com](https://connectycube.com) - 提供无限聊天消息、点对点语音和视频通话、文件附件及推送通知。适用于1,000名用户以下的免费应用。

* [convex.dev](https://convex.dev/) - 可反应式后端服务，托管您的数据（包含关系和序列化ACID事务的文档）、无服务器函数和WebSocket流，用来向不同客户端更新。小型项目免费，包括1M记录和每月5M函数调用。

* [darklang.com](https://darklang.com/) - 包括编辑器和基础设施在内的托管语言。在 beta 版本期间可访问，计划在 beta 之后提供慷慨的免费试用。

* [Firebase](https://firebase.com) - Firebase有助于成功构建和运行应用程序。Spark 计划提供免费的身份验证、托管、Firebase ML、实时数据库、云存储、测试实验室等。下面功能永久免费：A/B测试、分析、应用分发、应用索引、云消息 (FCM)、Crashlytics、动态链接、推送通知、实时消息、性能监控、

  * [quickblox.com](https://quickblox.com/) — 针对即时消息、视频通话、语音通话和推送通知的通信后端
  * [restspace.io](https://restspace.io/) - 使用身份验证、数据、文件、电子邮件接口、模板等服务配置服务器，然后组合成管道并转换数据。
  * [Salesforce Developer Program](https://developer.salesforce.com/signup) — 使用拖放工具快速构建应用。通过点击自定义数据模型。使用Apex代码进一步扩展。通过强大的API与任何东西集成。通过企业级安全保护数据。通过点击或任何先进的web框架自定义UI。免费开发人员计划提供对完整 Lightning 平台的访问。
  * [ServiceNow Developer Program](https://developer.servicenow.com/) — 快速构建、测试和部署让您的组织工作更好的应用程序。提供免费实例和对早期预览的访问。
  * [simperium.com](https://simperium.com/) — 实时将数据自动地、无压力地移动到每个地方，跨平台，结构化数据的无限发送和存储，每月最多2500名用户。
  * [Singlebase.cloud](https://singlebase.cloud) — SinglebaseCloud 是一个基于 AI 的一站式后端平台，旨在加速应用开发。它提供了如矢量数据库、关系文档数据库、身份验证、搜索和存储等工具，旨在简化后端开发。免费/入门版提供关系文档数据库、身份验证、搜索和存储。
  * [stackstorm.com](https://stackstorm.com/) — 为应用、服务和工作流提供基于事件的自动化，无流程、访问控制、LDAP 的免费服务。
  * [streamdata.io](https://streamdata.io/) — 将任何 REST API 转换为事件驱动的流 API。免费计划最多可处理100万消息和10个并发连接。
  * [Supabase](https://supabase.com) — 一个开源 Firebase 替代品，用于构建后端。免费版提供身份验证、实时数据库和对象存储。
  * [tyk.io](https://tyk.io/) — 提供包括身份验证、配额、监控和分析的API管理。免费提供云服务。
  * [zapier.com](https://zapier.com/) — 连接你使用的应用，自动化任务。每月5个

## Low-code Platform

  * [Clappia](https://www.clappia.com) — 专为构建具有可定制移动和Web应用的业务流程应用而设计的低代码平台。它提供拖放界面、离线支持、实时位置追踪以及与各种第三方服务的集成。
  * [Basedash](https://www.basedash.com) — 用于构建内部管理面板和仪表板的低代码平台。支持SQL数据库和REST API。
  * [BudiBase](https://budibase.com/) — Budibase是一个开源低代码平台，可在几分钟内创建内部应用。支持PostgreSQL、MySQL、MSSQL、MongoDB、Rest API、Docker、K8s。
  * [Appsmith](https://www.appsmith.com/) — 用于构建管理面板、内部工具和仪表板的低代码项目。它与多种数据库和任何API集成。
  * [ToolJet](https://www.tooljet.com/) — 可扩展的低代码框架，用于构建业务应用。可连接数据库、云存储、GraphQL、API端点、Airtable等，通过拖放式应用构建器进行开发。
  * [ReTool](https://retool.com/) — 用于构建内部应用的低代码平台。ReTool高度可扩展，可以用JavaScript和API编写的内容都能在ReTool中制作。免费版允许每月最多5个用户，不限应用程序和API连接。
  * [DronaHQ](https://www.dronahq.com/) — DronaHQ是一个帮助工程团队和产品经理快速创建内部工具、定制用户体验、自动化流程的低代码平台。
  * [ILLA Cloud](https://www.illacloud.com/) — 一个强大的开源低代码平台，供开发人员构建内部工具。通过使用ILLA的组件和操作库，开发人员可以节省大量时间。免费用于5名团队成员。
  * [Outsystems.com](https://www.outsystems.com/) — 针对企业的一款Web开发PaaS，可在本地或云端部署，提供免费的“个人环境”，用于无限制的代码和最多1 GB数据库。
  * [UI Bakery](https://uibakery.io) — 协助更快构建定制Web应用的低代码平台。支持使用拖放构建UI，通过JavaScript、Python和SQL提供高级定制。提供云和自托管解决方案，免费版最多支持5个用户。
  * [Mendix](https://www.m

## Web Hosting

  * [Alwaysdata](https://www.alwaysdata.com/) — 免费的100 MB web托管，支持MySQL、PostgreSQL、CouchDB、MongoDB、PHP、Python、Ruby、Node.js、Elixir、Java、Deno、自定义Web服务器，可以通过FTP、WebDAV和SSH访问；还包括邮箱、邮件列表和应用安装器。
  * [Awardspace.com](https://www.awardspace.com) — 免费Web托管服务，附赠一个免费短域名，支持PHP、MySQL，附带App安装器、电子邮件发送，且无广告。
  * [Bohr](https://bohr.io) — 非商业项目免费，同时提供开发者优先的部署和开发平台，简化基础设施管理并加快部署速度。
  * [Bubble](https://bubble.io/) — 不需要编码的视觉编程，用于构建Web和移动应用，Bubble品牌可见的免费版本。
  * [dAppling Network](https://www.dappling.network/) — 去中心化的Web托管平台，注重提高网站可用性和安全性，为用户另外提供一个访问入口。
  * [DigitalOcean](https://www.digitalocean.com/pricing) — 在App平台入门级可以免费构建和部署三个静态站点。
  * [Drive To Web](https://drv.tw) — 直接通过Google Drive和OneDrive托管到Web上，仅限静态站点，终身免费，每个Google/微软账户一个站点。
  * [Fenix Web Server](https://preview.fenixwebserver.com) — 开发者桌面应用，用于本地站点托管和实时分享，可按个人喜好工作，使用美观的用户界面、API或命令行界面。
  * [Fern](https://buildwithfern.com) — 在Fern的免费版上构建和托管基于Markdown的文档站点，可以自动生成API参考，托管在 _yoursite_.docs.buildwithfern.com上。
  * [Free Hosting](https://freehostingnoads.net/) — 提供PHP 5、Perl、CGI、MySQL等服务的免费托管，包含文件管理器等其他免费主机提供的功能。
  * [Freehostia](https://www.freehostia.com) — 提供控制台和一键安装50多种免费应用的免费托管服务，即时设置，无强迫广告。
  * [HelioHost](https://helio

  * [Vercel](https://vercel.com/) — 使用免费SSL、全球CDN和每次`git push`都会生成的独特预览URL来构建、部署和托管Web应用。特别适合Next.js和其他静态站点生成器。
* [Versoly](https://versoly.com/) — 专注于SaaS的网站构建器，提供无限网站、70+块、5种模板、自定义CSS、favicon、SEO和表单。不支持自定义域名。
* [Qoddi](https://qoddi.com) - 类似Heroku的PaaS服务，注重开发者，包含全面功能。免费版适用于静态资产、预览和开发者应用。
* [FreeFlarum](https://freeflarum.com/) - 社区支持的免费Flarum托管，适用于最多250个用户（可通过捐赠移除页脚的水印）。
* [fleek.co](https://fleek.co/) - 在Open Web及其协议上无缝构建现代网站和应用，提供免费无限制网站和每月50GB带宽。
* [MDB GO](https://mdbgo.com/) - 免费为一个项目提供 hosting，包括两周的容器TTL、每个项目500 MB RAM、SFTP支持 - 1GB磁盘空间。
* [Patr Cloud](https://patr.cloud/) — 易用的云平台，付费服务之一是免费托管三个静态网站。
* [Serv00.com](https://serv00.com/) — 提供3GB免费web托管，每日备份（7天），支持：cron任务、SSH访问、存储库（GIT、SVN、Mercurial）、支持：MySQL、PostgreSQL、MongoDB、PHP、Node.js、Python、Ruby、Java、Perl、TCL/TK、Lua、Erlang、Rust、Pascal、C、C++、D、R等更多编程语言。

**[⬆️ 返回顶部](#目录)**

## DNS

  以下是一些免费的DNS服务提供商，包括：

1. [1.1.1.1](https://developers.cloudflare.com/1.1.1.1/) - 由Cloudflare提供的免费公共DNS查询器，速度快且安全（可以加密你的DNS查询），适用于绕过网络提供商的DNS封锁，防止DNS查询跟踪，并能阻止成人和恶意内容。同时提供API访问。注意：这只是DNS解析器，不是DNS服务器。

2. [1984.is](https://www.1984.is/product/freedns/) - 提供API和其他免费DNS功能的免费DNS服务。

3. [cloudns.net](https://www.cloudns.net/) - 可免费托管1个域名，最多50个记录的DNS服务。

4. [deSEC](https://desec.io) - 一款以安全为中心设计的免费DNS托管服务，基于开源软件运行，由[SSE](https://www.securesystems.de/)支持。

5. [dns.he.net](https://dns.he.net/) - 提供动态DNS支持的免费DNS托管服务。

6. [Zonomi](https://zonomi.com/) - 具有即时DNS传播的免费DNS托管，免费计划支持一个域名及其最多10个DNS记录。

7. [dnspod.com](https://www.dnspod.com/) - 免费DNS托管服务。

8. [duckdns.org](https://www.duckdns.org/) - 免费提供至5个域名的动态DNS（DDNS），并提供各种配置指南。

9. [Dynv6.com](https://dynv6.com/) - 提供API支持的免费DDNS服务，支持多种DNS记录类型（如CNAME, MX, SPF, SRV, TXT等）的管理。

10. [freedns.afraid.org](https://freedns.afraid.org/) - 免费DNS托管，还提供基于多个公共用户贡献域名的免费子域名。

11. [luadns.com](https://www.luadns.com/) - 提供免费DNS托管，最多支持三个域名，功能有合理限制。

12. [namecheap.com](https://www.namecheap.com/domains/freedns/) - 免费DNS服务，无域名数量限制。

13. [nextdns.io](https://nextdns.io) - 基于DNS的防火墙，

## Domain

  * [eu.org](https://nic.eu.org) — 提供免费的`.eu.org`域名。申请通常会在14天内批准。
  * [pp.ua](https://nic.ua/) — 免费的`.pp.ua`子域名。
  * [us.kg](https://nic.us.kg/) - 免费的`.us.kg`子域名。

**[⬆️ 返回顶部](#目录)**

## IaaS

  * [4EVERLAND](https://www.4everland.org/) — 支持与 AWS S3 兼容 - 支持 API、界面操作、命令行接口和其他上传方式，从 IPFS 和 Arweave 网络安全、方便且高效地上传和存储文件。注册用户可免费获得 6 GB 的 IPFS 存储和 300 MB 的 Arweave 存储。小于此限制的 Arweave 文件上传免费。
  * [backblaze.com](https://www.backblaze.com/b2/) — Backblaze B2 云存储。在无限时间内免费提供 10 GB ( 类似 Amazon S3) 对象存储。
  * [filebase.com](https://filebase.com/) - 基于区块链的 S3 兼容对象存储。无限期免费提供 5 GB 存储空间。
  * [Tebi](https://tebi.io/) - S3 兼容的对象存储。免费提供 25 GB 存储和 250 GB 出站传输。
  * [iDrive e2](https://www.idrive.com/e2/) - S3 兼容的对象存储。每月免费提供 10 GB 存储空间和 10 GB 下载带宽。
  * [C2 对象存储](https://c2.synology.com/en-us/pricing/object-storage) - S3 兼容对象存储。每月免费提供 15 GB 存储和 15 GB 下载量。

**[⬆️ 返回目录顶部](#目录)**

## Managed Data Services

  以下是提供的服务列表，按照提供的免费资源分类：

### 面向关系数据库 - 非常有限的免费服务
1. [airtable.com](https://airtable.com/) - 可以视为电子表格的数据库，1,200行每基表限制和每月1,000 API 请求免费。
2. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - 免费512 MB存储。
3. [redislabs](https://redislabs.com/try-free/) - 免费30MB Redis 实例。
4. [MemCachier](https://www.memcachier.com/) - 免费版包含25MB内存，1个代理服务器和基本分析。

### 面向NoSQL数据库 - 有限的免费服务
- [Aiven](https://aiven.io/) - 分布式数据库平台，免费单节点1 CPU，1GB RAM和5GB存储（PostgreSQL、MySQL）。
- [CrateDB](https://crate.io/) - 分布式Open Source SQL数据库，[免费CRFREE](https://crate.io/lp-crfree)提供2 CPU、2 GiB内存和8 GiB存储。
- [FaunaDB](https://fauna.com/) - 提供GraphQL、多模型访问，有每天的免费限额。
- [Upstash](https://upstash.com/) - Serverless Redis 实例，每天免费10,000请求等。
- [StackBy](https://stackby.com/) - 免费包括无限用户、10个堆栈和2GB每个堆栈附件。
- [TiDB Cloud](https://en.pingcap.com/tidb-cloud/) - TiDB Serverless提供每月免费5GB行存储、列存储和RU。
- [Tursio by ChiselStrike](https://chiselstrike.com/) - SQLite开发者体验，提供免费 Starter 计划。
- [InfluxDB](https://www.influxdata.com/) - 时间序列数据库，免费版有限制。

### 云数据库平台和管理工具
- [Astra](https://www.datastax.com/products/datastax-astra/) - 提供免费80GB存储。
- [redsmin.com](https://www.redsmin.com/) - 免费监控1 Redis 实例。
- [skyvia.com](https://skyvia.com/) -

  以下是一些数据库管理服务平台的简介及其主要特性：

- **[Neon](https://neon.tech/)** — 提供管理的PostgreSQL服务，包括0.5GB存储空间（总），1个项目、10个分支，不限数据库，主分支 Always-available，5分钟后自动暂停，每月20小时活跃时间（总），非主分支计算。

- **[Dgraph Cloud](https://cloud.dgraph.io/pricing?type=free)** — 管理的原生图数据库系统，提供GraphQL API，限制每日数据传输为1MB。

- **[Tinybird](https://tinybird.co)** — 无服务器点击（ClickHouse）数据库，通过HTTP进行无连接数据导入，SQL查询可作为HTTP API来管理。免费版没有时间限制，提供10GB存储和每日1000个API请求。

- **[TigerGraph Cloud](https://www.tigergraph.com/cloud/)** — 管理的原生图数据库/分析平台，支持SQL-like图查询语言并提供REST API，免费实例包含2个vCPU、8GB内存和50GB存储，1小时不活跃后会暂停。

- **[TerminusCMS](https://terminusdb.com/pricing)** — 为TerminusDB（用Prolog和Rust编写的文档和图数据库）提供的免费服务，开发者免费，企业部署和支持需要付费。

- **[YugabyteDB](https://cloud.yugabyte.com)** — 分布式SQL数据库，兼容PostgreSQL，云免费版包括2个vCPU、4GB RAM和10GB磁盘。

- **[filess.io](https://filess.io)** — 平台允许创建MySQL、 MariaDB、MongoDB 和 PostgreSQL数据库，不限数量，免费。

- **[xata.io](https://xata.io)** — 无服务器数据库，带内置搜索和分析功能。支持多种类型安全的客户端库，针对开发流程优化。免费版对初学者足够，包括3个Xata单位（请参阅网站了解“单位”的定义）。

- **[8base.com](https://www.8base.com/) — 是一个JavaScript开发者构建的低代码开发平台，基于MySQL和GraphQL，提供无服务器后端服务。免费版本包含以下功能：行数2500、存储500、每小时服务器less计算1GB，客户应用

## Tunneling, WebRTC, Web Socket Servers and Other Routers

  以下是一些可以将本地服务器暴露到公共URL的工具和服务，以及它们的特性：

1. [Pinggy](https://pinggy.io) - 零配置将localhost服务转换为HTTPS/TCP/TLS隧道。免费计划提供60分钟隧道寿命。
2. [conveyor.cloud](https://conveyor.cloud/) - Visual Studio插件，将IIS Express暴露给本地网络或通过隧道提供到公共URL。
3. [Hamachi](https://www.vpn.net/) - LogMeIn提供的免费版VPNs让你能够安全地扩展到分布团队的局域网网络，提供无限网络，最多支持5人。
4. [Mirna Sockets](https://mirna.cloud/) - 免费的Socket-as-a-Service平台，为Websocket服务器提供wss:// URL，还可以监控性能。
5. [localhost.run](https://localhost.run/) - 通过隧道为本地运行的服务器提供公共URL访问。
6. [localtunnel](https://theboroer.github.io/localtunnel-www/) - 类似localhost.run，为本地服务器提供公开隧道。免费托管版和开源。
7. [ngrok.com](https://ngrok.com/) - 同样是暴露本地服务器到公共URL的服务。
8. [cname.dev](https://cname.dev/) - 免费且安全的动态反向代理服务。
9. [serveo](https://serveo.net/) - 零安装、零注册地将本地服务器推向互联网。免费二级域名，无使用限制。
10. [Radmin VPNS](https://www.radmin-vpn.com/) - 实现多台设备间通过VPNs连接，类似Hamachi的替代方案。无限制连接器。
11. [segment.com](https://segment.com/) - 用于事件路由的中枢，每月10万事件免费。
12. Google STUN: [stun:stun.l.google.com:19302](stun:stun.l.google.com:19302)
13. Twilio STUN: [stun:global.stun.twilio.com:3478?transport=udp](stun:global.stun.twilio.com:3478?transport=udp)
14. [Tailscale](https://tailscale.com/) - 零设置的 WireGuard协议的VPN服务。适合多种平台，个人

## Issue Tracking and Project Management

  - [acunote.com](https://www.acunote.com/) — 免费项目管理和敏捷软件，最多支持5个团队成员
  - [asana.com](https://asana.com/) — 提供不含协作的私人项目免费版
  - [Backlog](https://backlog.com) — 一个平台，团队需要的一切来发布优秀的项目。免费版包括1个项目的10个用户和100MB的存储空间。
  - [Basecamp](https://basecamp.com/personal) — 提供待办事项列表、里程碑管理、类似论坛的通讯、文件共享和时间追踪。免费版最多支持3个项目、20个用户和1GB的存储空间。
  - [bitrix24.com](https://www.bitrix24.com/) — 内部网和项目管理工具。免费版提供5GB的存储空间，不限用户数量。
  - [cacoo.com](https://cacoo.com/) — 在线实时图表：流程图、UML和网络图。免费版最多15个用户/图表，25张图纸。
  - [Chpokify](https://chpokify.com/) — 以团队为基础的规划扑克，节省冲刺估算时间。免费版包含最多5个用户、免费的Jira集成、无限视频通话、无限团队、无限会话。
  - [clickup.com](https://clickup.com/) — 项目管理，免费版提供云存储。提供移动应用程序和Git集成。
  - [Clockify](https://clockify.me) - 时间追踪和工时记录工具，可用于跨项目追踪工作时间。完全免费，不限用户。
  - [Cloudcraft](https://cloudcraft.co/) — 几分钟内为AWS设计专业架构图，视觉设计师优化且带有智能组件展示实时数据。免费版单用户可有无限私人图表。
  - [Codegiant](https://codegiant.io) — 包括仓库宿主和CI/CD的项目管理工具。免费版包括无限的仓库、项目和文档，以及与5个团队成员。每月500分钟的CI/CD、30000分钟的无服务器代码运行和1GB的存储空间。
  - [Confluence](https://www.atlassian.com/software/confluence) — Atlassian的协作内容工具，帮助团队高效协作和分享知识。免费版

  * [Ilograph](https://www.ilograph.com/) — 可交互的图表，让用户从多个角度和详细程度查看基础设施。图表可以以代码形式表达。免费版支持无限量私人图表，最多允许3名查看者。
  * [Jira](https://www.atlassian.com/software/jira) — 在许多企业环境中使用的高级软件开发项目管理工具。免费版可供10名用户使用。
  * [kanbanflow.com](https://kanbanflow.com/) — 基于面板的项目管理。免费版提供更多选项，付费版本可以选择。
  * [kanbantool.com](https://kanbantool.com/) — 基于看板的项目管理工具。免费版允许两个看板和两个用户，但不支持附件或文件上传。
  * [Kitemaker.co](https://kitemaker.co) — 跨Slack、Discord、Figma和Github的产品开发全阶段协作工具，跟踪工作进展。免费版提供无限用户和空间，工作项上限为250个。
  * [Kiter.app](https://www.kiter.app/) — 让任何人都能管理求职以及跟踪面试、机会和联系人。有强大的Web应用和Chrome扩展，完全免费。
  * [Kumu.io](https://kumu.io/) — 能动画、装饰、过滤、聚类等功能的关联图。免费版支持无限公共项目，不限图的大小。学生用户有免费私人项目，沙箱模式提供离线编辑选项。
  * [Linear](https://linear.app/) — 简化界面的缺陷跟踪工具。免费版不限成员，但文件上传大小为10MB，250个问题（不包括归档）。
  * [leiga.com](https://www.leiga.com/) — 采用AI自动项目管理的SaaS产品，协助团队保持专注，释放潜力，确保项目按计划推进。免费版面向10名用户、20个自定义字段和2GB存储空间，视频录制AI限制在5分钟内，自动化执行每月限20次。
  * [Lucidchart](https://www.lucidchart.com/) — 具有协作功能的在线图表工具。免费版包含三个可编辑文档，100款专业模板，以及基础协作功能。
  * [MeisterTask](https://www.meistertask.com/)

  * [Tadum](https://tadum.app) - 适合定期会议的会议议程和纪要应用，最多支持10人团队免费使用。
  * [taiga.io](https://taiga.io/) — 项目管理平台，适合初创公司和敏捷开发者，开源项目免费。
  * [Tara AI](https://tara.ai/) — 简单的冲刺管理服务，免费版无限任务、冲刺和工作区，无用户限制。
  * [targetprocess.com](https://www.targetprocess.com/) — 一种可视化项目管理工具，涵盖看板、敏捷和其他操作流程，免费版支持无限用户，最多1,000条数据实体（更多详情见[此处](https://www.targetprocess.com/pricing/)）。
  * [taskade.com](https://www.taskade.com/) — 实时协作任务列表和团队大纲。免费版包含一个工作区，不限制任务和项目数量，还有1GB文件存储、1周项目记录，以及每次视频会议5位参与者。
  * [taskulu.com](https://taskulu.com/) — 基于角色的项目管理。免费版本最多支持5名用户，可与GitHub、Trello、Dropbox和Google Drive等集成。
  * [Teaminal](https://www.teaminal.com) - 适用于远程团队的站立会议、回顾会议和冲刺规划工具。免费版最多支持15名用户。
  * [teamwork.com](https://teamwork.com/) — 项目管理及团队聊天。免费版提供5名用户和2个项目，有付费版。
  * [teleretro.com](https://www.teleretro.com/) — 简单有趣的回顾工具，包含破冰活动、表情和动图。免费版包括3次回顾和不限成员数。
  * [testlio.com](https://testlio.com/) — 问题跟踪、测试管理和版固测试平台。限定免费用于私人项目。
  * [terrastruct.com](https://terrastruct.com/) — 专门用于软件架构的在线图表制作工具。免费版最多可创建4层图。
  * [todoist.com](https://todoist.com/) — 协作和个人任务管理。免费版包括5个活动项目、项目中5名用户、5MB文件上传、3个过滤器和一周的活动记录。
  * [trello.com](

**[返回目录顶部](#目录)**

## Storage and Media Processing

  * [AndroidFileHost](https://androidfilehost.com/) - 提供免费文件共享平台，不限速、带宽和文件数量，主要用于提供Android相关的文件，如APK构建、自定义ROM及修改等，但也接受其他文件。
  * [borgbase.com](https://www.borgbase.com/) - 为Borg Backup提供简单安全的在线备份托管服务。免费备份空间10 GB，两个存储库。
  * [icedrive.net](https://www.icedrive.net/) - 简单的云存储服务，免费提供10 GB存储空间。
  * [sync.com](https://www.sync.com/) - 结构安全云存储服务，5 GB免费存储。
  * [pcloud.com](https://www.pcloud.com/) - 云存储服务，提供最多10 GB的免费存储空间。
  * [sirv.com](https://sirv.com/) - 智能图像CDN，提供实时的图像优化和调整大小功能。免费层级包括500 MB的存储和2 GB的带宽。
  * [cloudimage.io](https://www.cloudimage.io/en/home) - 全面的图像优化和CDN服务，全球有1500多个点，提供多种图像缩放、压缩和水印功能。提供每月免费计划，包含25 GB的CDN流量、25 GB的缓存存储和无限次转换。
  * [cloudinary.com](https://cloudinary.com/) - 提供图像上传、强大的操作、存储和发布服务，支持多种编程语言（如Ruby、Python、Java、PHP、Objective-C等）。免费层级包含25个月的信用额度，1个信用等于1000次图像转换、1 GB存储或1 GB CDN使用。
  * [embed.ly](https://embed.ly/) - 提供网页中的媒体嵌入、响应式图片缩放和网页元素提取API。每月最多免费支持5,000个URL，每秒15次请求。
  * [filestack.com](https://www.filestack.com/) - 文件选择、转换和传输服务，250个文件免费，500次转换和3 GB带宽。
  * [file.io](https://www.file.io) - 提供2 GB的文件存储，文件在下载一次后自动删除。通过REST API与存储交互。每分钟

  * [otixo.com](https://www.otixo.com/)[ Otixo ]—— 从一个地方加密、分享、复制和移动所有云存储文件。基本计划提供了无限文件传输，最大文件大小为250MB，并允许加密5个文件。
  * [packagecloud.io](https://packagecloud.io/)[ PackageCloud.io ]—— 为YUM、APT、RubyGem和PyPI提供托管软件包仓库。有限的免费计划和开源计划可通过申请获取。
  * [getpantry.cloud](https://getpantry.cloud/)[ GetPantry ]—— 一个简单的JSON数据存储API，非常适合个人项目、黑客马拉松和移动应用！
  * [Pinata IPFS](https://pinata.cloud)[ Pinata IPFS ]—— Pinata是上传和管理IPFS文件的最简单方式。我们的用户界面和IPFS API使其成为对创作者和收藏家来说最易用的IPFS锁定服务。1GB免费存储和API访问。
  * [placekitten.com](https://placekitten.com/)[ PlaceKitten ]—— 拥有一个快速简单的服务，提供小猫图片用作占位符。
  * [plot.ly](https://plot.ly/)[ Plotly ]—— 图形化和分享你的数据。免费版包括无限公开文件和10个私人文件。
  * [podio.com](https://podio.com/)[ Podio ]—— 您可以与最多五人的团队一起使用Podio，并尝试基本计划的功能，但不包括用户管理。
  * [QuickChart](https://quickchart.io)[ QuickChart ]—— 生成可嵌入的图像图表、图形和二维码。
  * [redbooth.com](https://redbooth.com/)[ Redbooth ]—— 文件对等同步，最多支持2名用户免费。
  * [resmush.it](https://resmush.it/)[ reSmush.it ]—— reSmush.it是一个免费的API，提供图像优化。reSmush.it已在WordPress、Drupal、Magento等常见CMS上实施。reSmush.it是最常用的图像优化API，处理了超过70亿张图片，且始终是免费的。
  * [Shotstack](https://shotstack.io)[ Shotstack ]—— 视频生成和编辑的API，免费可生成每月20分钟的渲染视频。
  * [tinypng.com](https://

  * [DocsParse](https://docsparse.com/) — GPT驱动的人工智能处理PDF、图片，将它们转化为结构化的JSON、CSV、EXCEL格式数据。每月免费赠送30个信用点。


**⬆️ 返回目录顶部**

## Design and UI

  * [AllTheFreeStock](https://allthefreestock.com) - 提供免费的 Stock 图片、音频和视频的整理列表。
  * [Float UI](https://floatui.com/) - 一个免费的 web 开发工具，帮助快速创建响应式设计的现代网站，即使对非设计师也友好。
  * [Ant Design Landing Page](https://landing.ant.design/) - 提供由 Ant Motion 动画组件构建的模板。它拥有丰富的首页模板，下载模板代码包，可以快速使用。也可以用编辑器快速创建专属页面。
  * [Backlight](https://backlight.dev/) - 一个专注于开发者与设计师团队合作的完整编码平台。免费计划允许最多3个编辑器在同一设计系统上工作，并提供无限观众。
  * [BoxySVG](https://boxy-svg.com/app) - 一个可以安装的 Web 应用，用于绘制 SVG 图像并导出 SVG、PNG、jpeg 等格式。
  * [Carousel Hero](https://carouselhero.com/) - 一个免费的在线工具，用于创建社交媒体轮播图。
  * [Circum Icons](https://circumicons.com) - 提供如 React、Vue 和 Svelte 等支持的统一开源图标。
  * [clevebrush.com](https://www.cleverbrush.com/) - 免费的图形设计/照片拼贴应用。他们还提供付费集成为组件。
  * [cloudconvert.com](https://cloudconvert.com/) - 一个在线工具，可以转换多种格式（包括视频和 GIF），几乎无所不能。
  * [CodeMyUI](https://codemyui.com) - 收录精选的 Web 设计与 UI 启发及其代码片段。
  * [ColorKit](https://colorkit.co/) - 在线创建或获取顶级配色方案的灵感。
  * [coolors](https://coolors.co/) - 颜色调色板生成器，免费使用。
  * [Branition](https://branition.com/colors) - 精心挑选的品牌最合适的色彩组合。
  * [css-gradient.com](https://www.css-gradient.com/) - 快速生成浏览器兼容的自定义 CSS 渐变工具，支持 RGB 和 HEX 格式。
  * [easyvectors.com](https://easyvectors.com/) - 提供

  * [LottieFiles](https://lottiefiles.com/) - 设计师、开发者和更多人的全球最大的在线平台，用于世界上最微小的动画格式。访问Lottie动画工具和适用于Android、iOS和Web的插件。
  * [MagicPattern](https://www.magicpattern.design/tools) - 包括背景生成器和工具的集合，用于渐变、图案和斑点，用于CSS和SVG。
  * [marvelapp.com](https://marvelapp.com/) - 设计、原型制作和协作工具，免费计划仅限于一个用户和一个项目。
  * [Mindmup.com](https://www.mindmup.com/) - 免费无限思维导图，并将它们存储在云端。你的思维导图可以从任何设备随时随地访问。
  * [Mockplus iDoc](https://www.mockplus.com/idoc) - Mockplus iDoc 是一款强大的设计协作和手头交接工具。免费计划包括三个用户和五个项目，所有功能均可使用。
  * [mockupmark.com](https://mockupmark.com/create/free) - 为社交媒体和电子商务创建真实的T恤和服装草图，40个免费草图。
  * [Mossaik](https://mossaik.app) - 免费SVG图像生成器，具有海绵、波浪和图案等各种工具。
  * [movingpencils.com](https://movingpencils.com) - 快速的基于浏览器的矢量编辑器。完全免费。
  * [Octopus.do](https://octopus.do) - 实时可视网站结构建图器。建立你的网站结构并与团队或客户共享。
  * [Pencil](https://github.com/evolus/pencil) - 使用Electron的开源设计工具。
  * [Penpot](https://penpot.app) - 基于网络的开源设计和原型制作工具，支持SVG。完全免费。
  * [pexels.com](https://www.pexels.com/) - 用于商业用途的免费股票照片。免费API允许您通过关键字搜索照片。
  * [photopea.com](https://www.photopea.com) - 免费且功能强大的在线设计编辑器，具有Adobe Photoshop界面，支持PSD、XCF和Sketch格式（Adobe Photoshop、GIMP和Sketch应用）。
  * [pixlr.com](https://pixlr.com/) -

  * [Webflow](https://webflow.com) - 基于WYSIWYG的网站构建器，支持动画和网站托管。对于两个项目是免费的。
  * [Updrafts.app](https://updrafts.app) - 适用于基于Tailwind CSS设计的WYSIWYG网站构建器。对于非商业用途是免费的。
  * [whimsical.com](https://whimsical.com/) - 可以协作创建流程图、线框、便利贴和思维导图的工具。免费创建最多4个板。
  * [Zeplin](https://zeplin.io/) — 设计师和开发者协作平台。展示设计、资产和样式指南。一项目免费。
  * [Pixelixe](https://pixelixe.com/) — 在线创建和编辑吸引人的独特图形和图像。
  * [Responsively App](https://responsively.app) - 一个免费的开发工具，加快响应式Web应用的精确开发。
  * [SceneLab](https://scenelab.io) - 在线 Mockup 图形编辑器，拥有不断增加的免费设计模板库。
  * [xLayers](https://xlayers.dev) - 在线预览和转换 Sketch 设计文件为 Angular、React、Vue、LitElement、Stencil、Xamarin 等（开源免费版本：https://github.com/xlayers/xlayers）。
  * [Grapedrop](https://grapedrop.com/) — 响应式、强大、SEO优化的网页构建器，基于 GrapesJS框架。免费创建五个页面，无限自定义域名，所有功能和简单使用。
  * [Mastershot](https://mastershot.app) - 完全免费的基于浏览器的视频编辑器。没有水印，输出至1080p的选项。
  * [Unicorn Platform](https://unicornplatform.com/) - 简单的落地页构建器，包含托管服务。免费创建一个网站。
  * [SVGmix.com](https://www.svgmix.com/) - 收集有30多万个免费SVG图标、集合和品牌标志。提供简单的浏览器内矢量编辑功能，方便快速修改文件。
  * [svgrepo.com](https://www.svgrepo.com/) - 搜索、浏览并找到适用于项目的最适合图标或矢量图，支持多个矢量库。提供免费SVG矢量下载

  * [Scrollbar.app](https://scrollbar.app) -- 一个简单免费的网络应用，用于为网页设计自定义滚动条。
  * [css.glass](https://css.glass/) -- 免费的网络应用，使用CSS创建玻璃质感设计。
  * [hypercolor.dev](https://hypercolor.dev/) -- 收录了Tailwind CSS颜色渐变的集合，还提供了多种生成器来创建你自己的。
  * [iconify.design](https://icon-sets.iconify.design/) -- 收集了100多个图标包的集合，具有统一的界面。可以跨包搜索图标并导出单个图标为SVG，或者为流行的Web框架提供。

  * [NextUI](https://nextui.org/) -- 免费。美丽，快速，现代的React和Next.js UI库。
  * [Glyphs](https://glyphs.fyi/) -- 免费，网页上最强壮的图标，完全可编辑且开源的设计师系统。
  * [ShadcnUI](https://ui.shadcn.com/) -- 美观设计的组件，可以直接复制到你的应用程序。可访问，可定制，开源。
  * [HyperUI](https://www.hyperui.dev/) -- 免费开源的Tailwind CSS组件。
  * [Calendar Icons Generator](https://calendariconsgenerator.app/) -- 一键生成一整年的独特图标，完全免费。
  * [Image BG Blurer](https://imagebgblurer.com/) -- 根据图片源生成模糊背景，适用于Notion、Trello、Jira等工具。
  * [Webstudio](https://webstudio.is/) -- Webflow的开源替代品。免费计划提供无限制的网站，但需要使用他们的域名。五个定制域名网站，每月十万个页面浏览量，2GB文件存储。
  * [Nappy](https://nappy.co/) -- 免费展示黑人和棕色人种的美丽照片，适用于商业和个人用途。

**[⬆️ 返回顶部](#目录)**

## Design Inspiration

  * [awwwards.](https://www.awwwards.com/) - [优秀设计网站](https://www.awwwards.com/)，展示所有设计得最好的网站（由设计师投票）。
  * [Behance](https://www.behance.net/) - [设计展示台](https://www.behance.net/)，设计师展示作品的地方。可根据UI/UX项目分类查看。
  * [dribbble](https://dribbble.com/) - [设计灵感库](https://dribbble.com/)，提供独特的设计灵感，通常不是来自实际应用。
  * [Landings](https://landings.dev/) - [网页截图](https://landings.dev/)，根据你的喜好找到最具设计灵感的登录页面。
  * [Lapa Ninja](https://www.lapa.ninja/) - [登录页面/ UI组件/网页截图](https://www.lapa.ninja/)，包含6025个最好的登录页面示例、设计师免费书籍以及来自网络的免费UI组件。
  * [LovelyLanding.net](https://www.lovelylanding.net/) - [登录页面设计](https://www.lovelylanding.net/)，经常更新登陆页面截图，包含桌面、平板和移动设备。
  * [Mobbin](https://mobbin.design/) - [移动截图](https://mobbin.design/)，通过搜索我们的50,000+个移动应用完整可筛选的UI/UX截图来节省时间研究。
  * [Uiland Design](https://uiland.design/) - [移动/网页UI设计](https://uiland.design/) ，展示非洲和世界各地领先公司的移动和网页UI设计。
  * [Mobile Patterns](https://www.mobile-patterns.com/) - [移动截图](https://www.mobile-patterns.com/)，针对设计师、开发者和产品制造者提供精心挑选的UI/UX模式的灵感库（适用于iOS和Android）。
  * [Page Flows](https://pageflows.com/) - [移动/网页视频和截图](https://pageflows.com/)，展示多个移动和网页应用的完整流程。也包括截图，搜索引擎高度优化。
  * [Screenlane](https://screenlane.com/) - [移动截图](https://screenlane.com/)，获取灵感和了解最新的UI设计趋势。可通过模式和应用进行过滤。
  * [scrnshts](https://scrnshts.club/) - [手机截图](

## Data Visualization on Maps

  * [IP位置追踪](https://ipgeolocation.io/) — 提供免费的开发者计划，每月30,000个请求。
  * [carto.com](https://carto.com/) — 创建地图和从公共或私人数据生成地理空间API。
  * [Clockwork Micro](https://clockworkmicro.com/) — 出色的地图工具。每月免费5万个查询（地图瓦片、db2vector、高程）。
  * [developers.arcgis.com](https://developers.arcgis.com) — 提供地图、空间数据存储、分析、地理编码、路由等多个方面的API和SDK，支持网页、桌面和移动平台。每个月可免费使用200万个基础地图瓦片、20,000个非存储的地理编码、20,000条简单的路线、5,000个行驶时间计算以及每月5GB的免费瓦片和数据存储。
  * [Foursquare](https://developer.foursquare.com/) — 通过Places API和Pilgrim SDK提供位置发现、场馆搜索和与位置相关的上下文内容。
  * [geoapify.com](https://www.geoapify.com/) — 提供矢量和栅格地图瓦片、地理编码、地点、路由、等值线API。每日免费请求3,000次。
  * [geocod.io](https://www.geocod.io/) — 通过API或CSV上传进行地理编码。每日免费查询2,500次。
  * [geocodify.com](https://geocodify.com/) — 通过API或CSV上传进行地理编码和地理解析。每月免费查询10,000次。
  * [geojs.io](https://www.geojs.io/) — 提供高度可用的REST/JSON/JSONP IP位置查询API。
  * [giscloud.com](https://www.giscloud.com/) — 在线可视、分析和分享地理数据。
  * [graphhopper.com](https://www.graphhopper.com/) — 提供免费开发者包，包括路由、路线优化、距离矩阵、地理编码和地图匹配等功能。
  * [here](https://developer.here.com/) — 提供地图和位置相关应用的API和SDK。每月免费250,000次交易。
  * [locationiq.com](https://locationiq.com/)

## Package Build System

  * [build.opensuse.org](https://build.opensuse.org/)：适用于多个发行版（SUSE、EL、Fedora、Debian 等）的软件包构建服务。
  * [copr.fedorainfracloud.org](https://copr.fedorainfracloud.org)：基于 Mock 的用于 Fedora 和 EL 的 RPM 构建服务。
  * [help.launchpad.net](https://help.launchpad.net/Packaging)：Ubuntu 和 Debian 的构建服务。

**[⬆️ 返回顶部](#目录)**

## IDE and Code Editing

  * [3v4l](https://3v4l.org/) - 这是一个免费的在线PHP壳和代码片段分享站点，它可以在300+个PHP版本上运行你的代码
  * [Android Studio](https://developer.android.com/studio) - Android Studio 是一个 Android 应用开发最快的工具，支持各种类型的 Android 设备。开源 IDE 免费，且适合所有人使用，适用于 Windows、Mac、Linux 和 ChromeOS 等平台
  * [AndroidIDE](https://m.androidide.com/) - 这是一个开源的 IDE，用于在 Android 设备上开发真正的、基于 Gradle 的 Android 应用程序
  * [Apache NetBeans](https://netbeans.apache.org/) - 这是一个开发环境、工具平台和应用框架
  * [apiary.io](https://apiary.io/) - 一个协作设计 API，提供即时 API 模拟和生成的文档 (免费版提供无限的 API 蓝图和无限用户，但有一名管理员账户和托管文档的限制)
  * [BBEdit](https://www.barebones.com/) - BBEdit 是一个流行的且可扩展的 macOS 文本编辑器。 Free Mode 提供强大的核心功能集，可升级至更高级功能
  * [Binder](https://mybinder.org/) - 将 Git 存储库变为一系列互动笔记本。这是一个免费的公开服务
  * [BlueJ](https://bluej.org) - 一款针对初学者设计的免费 Java 开发环境，由 Oracle 提供动力，有简单的 GUI 用户界面，方便初学者
  * [Bootify.io](https://bootify.io/) - 一个用于生成 Spring Boot 应用的工具，可自定义数据库和 REST API
  * [Brackets](http://brackets.io/) - 这是一个专为 Web 开发设计的开源文本编辑器，轻便、易用且高度可定制
  * [cacher.io](https://www.cacher.io) - 款代码片段组织工具，提供标签和对100多种编程语言的支持
  * [Code::Blocks](https://codeblocks.org) - 免费的 Fortran 和 C/C++ 代码编辑器，开源，支持 Windows、macOS 和 Linux 系统
  * [Cody](https://sourcegraph.com/cody) - 免费

  * [GitPod](https://www.gitpod.io) — 为 GitHub 项目提供即时可用的编码环境。免费版每月包含 50 个小时。
  * [ide.goorm.io](https://ide.goorm.io) goormIDE 是云上的全功能 IDE，支持多种语言，基于 Linux 的容器可通过功能丰富的 Web 终端，端口转发、自定义 URL、实时协作和聊天以及分享链接等功能。免费版包含 1GB 内存和每个容器 10GB 存储空间，5 个容器槽位。
  * [JDoodle](https://www.jdoodle.com) — 是一款在线编译器和编辑器，支持 60 多种编程语言，免费版提供 REST API 编译每日高达 200 信用积分的上限。
  * [jetbrains.com](https://jetbrains.com/products.html) 主要产品包括生产力工具、IDE 和部署工具（如 [IntelliJ IDEA](https://www.jetbrains.com/idea/)、[PyCharm](https://www.jetbrains.com/pycharm/) 等）。学生、教师、开源项目和用户组用户可免费获取许可证。
  * [jsbin.com](https://jsbin.com) — 是一个前端 Web（HTML、CSS 和 JavaScript）的玩具场和代码分享站点，还支持 Markdown、Jade 和 Sass。
  * [jsfiddle.net](https://jsfiddle.net/) — 也是前端 Web 开发的玩具场和代码分享站点，支持协作。
  * [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — 提供一些返回假数据的 JSON 格式 REST API 端点。如果你想要本地运行服务器，源代码也提供。
  * [Lazarus](https://www.lazarus-ide.org/) — Lazarus 是一个与 Delphi 兼容的跨平台快速应用开发（RAD）IDE。
  * [MarsCode](https://www.marscode.com/) — 是一个基于云的 AI 驱动的 IDE，可免费使用。
  * [micro-jaymock](https://micro-jaymock.now.sh/) — 是一个小型 API 模拟微服务，用于生成假 JSON 数据。
  * [mockable.io](https://www.mockable.io/) — 用作 RESTful API 或 SOAP Web 服务模拟器，简单且可配置，允许快速

  * [VSCodium](https://vscodium.com/) - 社区驱动的、不包含日志追踪并且是免费提供微软编辑器Visual Studio Code的专版
  * [wakatime.com](https://wakatime.com/) - 通过文本编辑器插件，提供有关您的编码活动的量化指标，免费版有限制
  * [Wave Terminal](https://waveterm.dev/) - Wave是一个开源、跨平台的终端，用于无缝工作流程。可在线渲染任何内容，保存会话和历史记录。基于开放网络标准，适用于MacOS和Linux
  * [WebComponents.dev](https://webcomponents.dev/) — 在浏览器上的IDE，您可以独立编写Web组件，支持58个模板、故事和测试功能
  * [PHPSandbox](https://phpsandbox.io/) - 一个在线PHP开发环境
  * [WebDB](https://webdb.app) - 免费高效的数据库IDE。具有服务器发现、ERD、数据生成器、AI、NoSQL结构管理器、数据库版本控制等功能
  * [Zed](https://zed.dev/) - 由Atom和Tree-sitter的创作者开发的高性能多人代码编辑器

## Analytics, Events and Statistics

  * **Dwh.dev** - 数据云可观测性解决方案（Snowflake）。个人用户免费。
  * **Hightouch** - Hightouch 是一个逆向 ETL 平台，可帮助您将客户数据从数据仓库同步到 CRM、营销和支持工具。免费版提供一个数据同步目的地。
  * **Avo** - 简化的分析发布工作流，提供单一来源的事实跟踪计划、类型安全的分析跟踪库、内置调试器以及数据观察能力，在发布前捕捉所有数据问题。免费版支持两个工作区成员和1小时的数据观察回顾。
  * **Branch** - 移动分析平台。免费版提供最多10,000个移动应用用户的深度链接和其他服务。
  * **Cauldron** - 分析开源解决方案，允许用户从多个协作平台聚合信息，将它们作为不同类型的数据源（如Git、GitHub和GitLab）。免费版包括无限数量的报告。
  * **Census** - 逆向 ETL 及操作分析平台。免费版允许从您的数据仓库同步10个字段到60多个SaaS服务，如Salesforce、Zendesk或Amplitude。
  * **Clicky** - 网站分析平台。免费版适用于一个网站，分析3000个视图。
  * **Databox** - 业务洞察与分析，通过组合其他分析和BI平台实现。免费版提供3个用户、仪表板和数据源，以及1100万历史数据记录。
  * **Hitsteps.com** - 1个网站每月2000页浏览量。
  * **amplitude.com** - 1百万月活动次数，最多支持2个应用。
  * **GoatCounter** - 开源网页分析平台（供免费非商业使用或自托管）。免费版面向非商业使用，提供无限网站、六个月的数据保留和每月100,000页浏览量。
  * **Google Analytics** - Google Analytics
  * **MetricsWave** - 专为开发者设计的隐私友好的 Google Analytics 替代品。免费版限20,000页浏览量/月，无需信用卡。
  * **Expensify** - 报销报告，提供免费个人审批流程。
  * **getinsights.io** - 隐私聚焦、无Cookie分析，每月最多3

  * [Row Zero](https://rowzero.io) — 快速的、多联接电子表格。直接连接到数据数据库、S3和API。能够即时导入、分析、绘图并共享大量数据。初始有三个免费版工作簿。
  * [Sematext](https://sematext.com/cloud/) — 时长限制和免费用户数限制为每月50,000个操作，数据保留时间为一天，无限个仪表盘、用户等。
  * [Similar Web](https://similarweb.com) — 针对网页和移动应用的分析服务。免费版提供每个指标查询五个结果，同时提供一个月的移动应用数据和三个月的网站数据。
  * [StatCounter](https://statcounter.com/) — 网站访问者分析。免费版本可分析最近500位访问者的数据。
  * [Statsig](https://statsig.com) — 包含分析、特征标记和A/B测试功能的全栈平台。免费版提供每月1,000,000个量化的事件。
  * [Tableau Developer Program](https://www.tableau.com/developer) — 创新、构建并使Tableau完美适用于您的组织。免费开发人员计划提供Tableau Online的个人研发沙箱许可证，使用最新预发布版本，便于Dev人员测试功能。
  * [usabilityhub.com](https://usabilityhub.com/) — 在真人用户上测试设计和原型，并追踪访问。免费计划包含一个用户，无限测试。
  * [Woopra](https://www.woopra.com/) — 免费用户分析平台，提供500,000个操作的免费次月和90天的数据保留，可用30多个“一键”集成。
  * [counter.dev](https://counter.dev) — 简单而隐私友好的网页分析服务。提供免费版本或按捐赠金额捐赠。
  * [PostHog](https://posthog.com) — 免费的产品分析套件，每月提供1,000,000次跟踪事件。另外提供无限的内置应用市场调查，每月最多250个回复。
  * [Uptrace](https://uptrace.dev) — 分布式追踪工具，帮助开发者定位失败并找出性能瓶颈。有免费计划，还为开源项目提供个人订阅，同时提供

**[回到顶部](#目录)**

## Visitor Session Recording

  * [Reactflow.com](https://www.reactflow.com/) - 每个站点每日查看页面：1,000，三个热图，三个小部件，免费错误跟踪
  * [OpenReplay.com](https://www.openreplay.com) - 开源会话回放，包括开发工具以复现错误，实时会话支持以及产品分析套件。每月1,000次会话，拥有所有功能权限和7天保留期。
  * [LogRocket.com](https://www.logrocket.com) - 每月1,000次会话，30天保留期，错误追踪，实时模式
  * [FullStory.com](https://www.fullstory.com) - 每月1,000次会话，一个月的数据保留期和三个用户席位。更多信息请[见这里](https://help.fullstory.com/hc/en-us/articles/360020623354-FullStory-Free-Edition)。
  * [hotjar.com](https://www.hotjar.com/) - 每个站点：每月1,050页浏览量，无限热图，数据保留三个月
  * [inspectlet.com](https://www.inspectlet.com/) - 免费赠送一个网站每月2,500次会话
  * [Microsoft Clarity](https://clarity.microsoft.com/) - 会话录制完全免费，无流量限制，无项目限制，无采样
  * [mouseflow.com](https://mouseflow.com/) - 一个网站每月免费500次会话
  * [mousestats.com](https://www.mousestats.com/) - 一个网站每月免费100次会话
  * [smartlook.com](https://www.smartlook.com/) - 对于Web和移动应用有免费套餐（每月1,500次会话），三个热图，一个漏斗和1个月的数据历史
  * [howuku.com](https://howuku.com) - 跟踪用户交互，参与度和事件。每月免费访问量上限为5,000次
  * [UXtweak.com](https://www.uxtweak.com/) - 记录并观看用户如何使用您的网站或应用。对于小型项目提供无限免费试用时间

**[⬆️ 返回顶部](#目录

## International Mobile Number Verification API and SDK

  * [numverify](https://numverify.com/) — 全球电话号码验证和查询JSON API。每月100次API请求
  * [veriphone](https://veriphone.io/) — 全球电话号码验证，免费、快速、可靠的JSON API。每月1000次请求

**[⬆️ 返回顶部](#目录)**

## Payment and Billing Integration

  * [Qonversion](http://qonversion.io/) - 全能跨平台订阅管理平台，提供分析、A/B测试、Apple Search Ads、远程配置和增长工具，优化iOS、Android、React Native、Flutter、Unity、Cordova、Stripe和网页应用的内购与变现。免费版可追踪每月10,000美元收入。
  * [ParityVend](https://www.ambeteco.com/ParityVend/) – 自动根据访客地理位置调整价格，拓展全球业务并触及新市场（购买力平价）。免费计划包含每月7,500个API请求。
  * [Glassfy](https://glassfy.io/) - 内购订阅基础设施，提供iOS、Android、Stripe和Paddle的实时订阅事件和内置变现工具。免费版可追踪每月10,000美元收入。
  * [Adapty.io](https://adapty.io/) - 跨平台的移动内购订阅集成解决方案，免费版支持iOS、Android、React Native、Flutter、Unity或网页应用，可追踪每月10,000美元收入。
  * [CoinMarketCap](https://coinmarketcap.com/api/) – 提供加密货币市场数据，包括最新的加密货币和法币汇率。免费版提供每月10,000个调用信用。
  * [CurrencyFreaks](https://currencyfreaks.com/) - 提供现时和历史汇率查询，DEVELOPER免费计划，每月1,000个请求。
  * [CoinGecko](https://www.coingecko.com/en/api) - 提供加密货币市场数据，包括最新加密货币交易所率和历史数据。演示版API有限制，每分钟稳定访问频率为30次，每月调用上限为10,000次。
  * [CurrencyApi](https://currencyapi.net/) - 实时汇率和货币转换API，免费版每月提供1,250个请求。
  * [currencylayer](https://currencylayer.com/) - 可靠的货币兑换和货币转换服务，免费版每月100个请求。
  * [exchangerate-api.com](https://www.exchangerate-api.com) - 易用的货币转换JSON API，免费版每日更新一次，每月调用限制为1,500次。


## Docker Related

  * [canister.io](https://canister.io/) — 为开发者提供20个免费的私有仓库，团队则可免费拥有30个私有仓库，用于构建和存储 Docker 镜像
  * [Container Registry Service](https://container-registry.com/) - 基于 Harbor 的容器管理解决方案。免费版提供1GB的私人仓库存储空间
  * [Docker Hub](https://hub.docker.com) — 可以免费创建一个私有仓库和无限的公共仓库，用于构建和存储 Docker 镜像
  * [Play with Docker](https://labs.play-with-docker.com/) — 一个简单、互动且有趣的平台，用于学习 Docker
  * [quay.io](https://quay.io/) — 提供无限数量的免费公共仓库，用于构建和存储容器镜像
  * [ttl.sh](https://ttl.sh/) — 一个匿名且临时的 Docker 镜像仓库

**[⬆️ 返回顶部](#目录)**

## Vagrant Related

  * [Vagrant Cloud](https://app.vagrantup.com) - HashiCorp提供了一个Vagrant的虚拟机存储平台。  
  * [Vagrantbox.es](https://www.vagrantbox.es/) - 另一个公共镜像索引网站。  
**[⬆️ 返回顶部](#目录)**

## Dev Blogging Sites

  * [BearBlog](https://bearblog.dev/) - 极简的，基于 Markdown 的博客和网站构建工具。
  * [Dev.to](https://dev.to/) - 程序员分享观点并互相成长的地方。
  * [Hashnode](https://hashnode.com/) — 为开发者量身打造的免烦恼博客软件！
  * [Medium](https://medium.com/) — 对你所关注的事情进行更为深入的思考。
  * [AyeDot](https://ayedot.com/) — 免费以现代多媒体短格式迷你博客的形式，与世界分享你的想法、知识和故事。

**[⬆️ 返回顶部](#目录)**

## Commenting Platforms

  * **[GraphComment](https://graphcomment.com/)：**一个帮助您从网站受众中建立活跃社区的评论平台。
  * **[Utterances](https://utteranc.es/)：**基于GitHub问题的轻量级评论小部件。使用GitHub问题为博客评论、wiki页面等提供更多功能！
  * **[Disqus](https://disqus.com/)：**被互联网上成千上万的网站使用的社区平台网络。
  * **[Remarkbox](https://www.remarkbox.com/)：**开源托管评论平台，按需付费，提供“一名管理员对少数域名的完全控制，可调整行为和外观”。
  * **[IntenseDebate](https://intensedebate.com/)：**为WordPress、Tumblr、Blogger和其他众多网站平台提供功能丰富的评论系统。

**[⬆️ 返回顶部](#目录)**

## Screenshot APIs

  * [ApiFlash](https://apiflash.com) - 基于AWS Lambda和Chrome的截图API。支持全页面捕获、时间戳记录和视口尺寸。
  * [microlink.io](https://microlink.io/) — 将任何网站转换为元标记标准化、美观的链接预览、抓取功能或服务中的截图。每天免费250个请求。
  * [ScreenshotAPI.net](https://screenshotapi.net/) - 使用简单API调用来生成网站截图。构建以适应大规模，且部署在Google Cloud上。每月免费提供100张截图。
  * [screenshotlayer.com](https://screenshotlayer.com/) - 提供高度定制化捕获的任意网站截图。每月免费100张截图。
  * [screenshotmachine.com](https://www.screenshotmachine.com/) - 捕获每月100张截图，支持png、gif和jpg格式，包括完整页面捕获，不仅限于首页。
  * [PhantomJsCloud](https://PhantomJsCloud.com) — 提供浏览器自动化和页面渲染。免费套餐每日最多支持500个页面。自2017年起提供免费套餐。
  * [Webshrinker.com](https://webshrinker.com) - 提供网站截图和域名智能API服务。免费每月100个请求。
  * [Httpic.com](https://httpic.com) — 将任何网址转换为jpg、png或pdf格式。支持全页面截图、设置视口和注入自定义代码。免费版每月150张图片。
  * [Screenshots](https://screenshotson.click) — 你的截图API。提供高度定制的捕获选项。每月免费100张截图。

**[⬆️ 返回目录](#目录)**

## Flutter Related and Building IOS Apps without Mac

  * [FlutLab](https://flutlab.io/) - FlutLab 是一个现代化的 Flutter 在线集成开发环境，是创建、调试和构建跨平台项目的最佳场所。使用 Flutter 构建 iOS(无需 Mac) 和 Android 应用。

* [CodeMagic](https://codemagic.io/) - CodeMagic 是一个完全托管和管理的移动应用的 CI/CD。您可以使用基于图形用户界面的 CI/CD 工具进行构建、测试和部署。免费版每月提供 500 分钟免费使用时长，以及一台配备 2.3 GHz 处理器和 8 GB 内存的 Mac Mini 实例。

* [FlutterFlow](https://flutterflow.io/) - FlutterFlow 是一个基于浏览器的拖放界面，用于使用 Flutter 构建移动应用。

## Browser-based hardware emulation written in Javascript

  * [JsLinux](https://bellard.org/jslinux) — 一个非常快速的x86虚拟机，能够运行Linux和Windows 2k。
  * [Jor1k](https://s-macke.github.io/jor1k/demos/main.html) — 一个可以支持网络的OpenRISC虚拟机，用于运行Linux。
  * [v86](https://copy.sh/v86) — 一种能够在浏览器直接运行Linux和其他操作系统的x86虚拟机。

**[⬆️ 返回顶部](#目录)**

## Privacy Management

  * [Bearer](https://www.bearer.sh/) - 通过审核和持续工作流程帮助实施隐私设计原则，以使组织符合GDPR和其他法规。免费版仅适用于较小团队，而SaaS版本限制较多。
  * [Osano](https://www.osano.com/) - 提供从GDPR代理到Cookie条幅的合规管理和同意管理平台。免费版提供基本功能。
  * [Iubenda](https://www.iubenda.com/) - 隐私和Cookie政策以及同意管理工具。免费版提供有限的隐私和Cookie政策以及Cookie条幅。
  * [Cookiefirst](https://cookiefirst.com/) - Cookie条幅、审计和多语言同意管理解决方案。免费版提供一次性扫描和单个Cookie条幅。
  * [Ketch](https://www.ketch.com/) - 同意管理和隐私框架工具。免费版提供大多数功能，但访客数有限制。
  * [Concord](https://www.concord.tech/) - 全方位数据隐私平台，包括同意管理、数据请求处理（DSARs）和数据映射。免费版包括核心同意管理功能，且对已验证的开源项目提供更高级计划的免费权。

**[回到顶部](#目录)**

## Miscellaneous

  * [BackgroundStyler.com](https://backgroundstyler.com) - 用于创建代码、文本或图像美观截屏以便在社交媒体上分享。
  * [BinShare.net](https://binshare.net) - 创建并分享代码或二进制文件。可作为美观图像分享，如在Twitter/Facebook帖子中，或作为链接分享，如用于聊天或论坛。
  * [Blynk](https://blynk.io) - 一个提供API的云端服务，用于控制、构建和评估IoT设备。免费开发者计划包含5个设备，免费云存贮和数据存贮。同时也包含移动应用。
  * [Bricks Note Calculator](https://free.getbricks.app/) - 一个笔记应用(PWA)，自带强大的多行计算器功能。
  * [Carbon.now.sh](https://carbon.now.sh) - 用于创建并分享代码片段，格式类似于美观的截图。通常用于在Twitter或博客帖子中分享代码片段。
  * [Code Time](https://www.software.com/code-time) - 在VS Code、Atom、IntelliJ、Sublime Text等编辑器上的时间跟踪和编码指标扩展。
  * [Codepng](https://www.codepng.app) - 用于从源代码创建高质量截图以便在社交媒体上分享。
  * [CodeToImage](https://codetoimage.com/) - 创建代码或文本截图，以美观方式分享在社交媒体上。
  * [Cronhooks](https://cronhooks.io/) - 定时或定期创建webhook。免费计划允许每天5次临时任务调度。
  * [Cron-job.org](https://cron-job.org) - 远程cron作业服务，不限制的免费工作计划。
  * [datelist.io](https://datelist.io) - 在线预约/调度系统。每月免费5个预约，包含1个日历。
  * [Domain Forward](https://domain-forward.com/) - 简单工具将任何URL或域名重定向。免费版提供5个域名和每月20万个请求。
  * [Elementor](https://elementor.com) - WordPress网站构建器，提供基础版的40多个小部件，免费版可用。
  * [Format Express](https://www.format-express.dev) - 在线工具，实时格式化JSON/ XML/ SQL。
  * [FOSSA](https://fossa.com/)

  * [readme.com](https://readme.com/) — 提供简单易用的优美文档，开源免费。
  * [redirection.io](https://redirection.io/) — SaaS 工具，用于企业管理 HTTP 重定向，适用于业务、营销和 SEO。
  * [redirect.ing](https://redirect.ing/) — 快速且安全的域名转发，无需管理服务器或 SSL 证书。免费版包括 10 个别名和每月 10 万次请求。
  * [redirect.pizza](https://redirect.pizza/) — 简单管理重定向，支持 HTTPS。免费版包括 10 个源和每月 10 万次访问。
  * [ReqBin](https://reqbin.com/) — 在线发送 HTTP 请求。常用请求方法包括 GET、POST、PUT、DELETE 和 HEAD。支持头信息和令牌身份验证。包含一个基本登录系统来保存请求。
  * [Smartcar API](https://smartcar.com) — 为汽车提供 API，可以查找、获取油箱、电池电量、里程计、解锁/锁车门等。
  * [snappify](https://snappify.com) — 允许开发者创建惊艳的视觉效果。从美观的代码片段到完整的技术演示。免费版可同时创建最多 3 个效果，无限次下载，每月有 5 次 AI 助力的代码解释。
  * [Sunrise and Sunset](https://sunrisesunset.io/api/) — 获取给定经度和纬度的日出和日落时间。
  * [superfeedr.com](https://superfeedr.com/) — 提供实时 PubSubHubbub 兼容的动态频道，支持出口、分析。免费版定制功能较少。
  * [SurveyMonkey.com](https://www.surveymonkey.com) — 创建在线调查。在线分析结果。免费版仅允许每份调查包含 10 个问题和 100 个回答。
  * [Tiledesk](https://tiledesk.com) — 创建聊天机器人和会话应用。实现多渠道通信：从网站（聊天框）到 WhatsApp。免费版无限制聊天机器人。
  * [Versionfeeds](https://versionfeeds.com) — 为喜欢的软件创建定制 RSS 版本更新_feed。将编程语言、库或

## Remote Desktop Tools

  * [Getscreen.me](https://getscreen.me) - 免费用于2台设备，不限会话数和持续时间
  * [Apache Guacamole™](https://guacamole.apache.org/) - 开源无客户端远程桌面网关
  * [RemSupp](https://remsupp.com) - 需求支持和设备长期访问（免费每天2个会话）
  * [RustDesk](https://rustdesk.com/) - 为所有人提供开源的虚拟/远程桌面基础设施！

**[⬆️ 返回顶部](#目录)**

## Game Development

  - [itch.io](https://itch.io/game-assets) — 提供免费/付费素材，如精灵、贴图集和角色包。
- [Gamefresco.com](https://gamefresco.com/) — 发现、收集并共享来自世界各地游戏艺术家的免费游戏资源。
- [GameDevMarket](https://gamedevmarket.net) — 免费/付费素材，包括2D、3D、音频、GUI。
- [OpenGameArt](https://opengameart.org) — 提供开源游戏素材，如音乐、声音、精灵和GIF。
- [CraftPix](https://craftpix.net) — 提供免费/付费素材，如2D、3D、音频、GUI、背景、图标、贴图集和游戏套件。
- [Game Icons](https://game-icons.net/) — 提供免费且可定制的SVG/PNG图标，基于CC-BY许可。
- [LoSpec](https://lospec.com/) — 在线工具，用于创建像素艺术和其他受限制的数字艺术，提供大量教程和调色板列表供游戏使用。
- [ArtStation](https://www.artstation.com/) - 免费/付费2D、3D素材及音频、图标、贴图集和游戏套件市场，也可以用作展示你的艺术作品库。
- [Rive](https://rive.app/community/) — 社区资产，还可使用其免费计划创建游戏资产。
- [Poly Pizza](https://poly.pizza/) — 提供免费低多边形3D资产。
- [3Dassets.one](https://3dassets.one/) — 提供超过8000个免费/付费3D模型，和用于制作纹理的PBR材质。
- [Kenney](https://www.kenney.nl/assets/) — 提供免费的CC0 1.0 Universal许可的2D、3D、音频和UI游戏素材。
- [Poliigon](https://www.poliigon.com/) — 提供免费和付费材质（可调整分辨率）、模型、HDRIs和画笔。还提供将3D项目导出到Blender等软件的免费插件。
- [Freesound](https://freesound.org/) — 提供协作的免费声库，包含不同版权限制的音效。

## Other Free Resources

  * [维基因特开发者](https://developer.wikimint.com/p/tools.html) - 提供 web 开发者的一些免费工具，包括 CSS 压缩/解压缩、图像优化、图像调整尺寸、大小写转换器、CSS 验证器、JavaScript 编译器、HTML 编辑器等。
  * [ElevateAI](https://www.elevateai.com) - 每月可免费获得高达 200 小时的音频转录服务。
  * [get.localhost.direct](https://get.localhost.direct) — 一个更好的用于本地开发的 `*.localhost.direct` 公共 CA 签名 SSL 证书，支持子域。
  * [Framacloud](https://degooglisons-internet.org/en/) - 由 French non-profit [Framasoft](https://framasoft.org/en/) 提供的免费/开源软件和 SaaS 列表。
  * [GitHub — 免费开源开发资源](https://github.com/tvvocold/FOSS-for-Dev) - 为开发者提供一款免费开源软件的集散地。
  * [GitHub 教育版](https://education.github.com/pack) - 提供给学生的免费服务集。需要注册。
  * [Markdown 工具](https://markdowntools.com) - 用于 HTML、CSV、PDF、JSON 和 Excel 文件与 Markdown 之间的转换工具。
  * [微软 365 开发人员计划](https://developer.microsoft.com/microsoft-365/dev-program) — 提供免费沙箱、工具和其他资源，以构建微软 365 平台的解决方案。订阅是为期 90 天的 [微软 365 E5 订阅](https://www.microsoft.com/microsoft-365/enterprise/e5)（不包括 Windows），可续订。若你持续进行开发（通过 telemetry 数据和算法衡量），则会自动续订。
  * [Pyrexp](https://pythonium.net/regex) — 一个免费的在线正则表达式测试器和可视化工具，用于调试正则表达式。
  * [红帽开发人员](https://developers.redhat.com) - 为开发者提供免费访问 Red Hat 产品的权限，包括 RHEL、OpenShift、CodeReady 等。仅限个人计划，

  * [Free Code Tools](https://freecodetools.org/) — 提供100%免费的高效代码工具，包括Markdown编辑器、代码压缩/美化工具、二维码生成器、Open Graph生成器、Twitter卡片生成器等。
  * [regex101](https://regex101.com/) — 免费网站，用于测试和调试正则表达式（regex），提供正则表达式编辑器、测试器，以及学习regex的有用文档和资源。
  * [Kody Tools](https://www.kodytools.com/dev-tools) — 包括格式化器、压缩器和转换器在内的100多种开发工具。
  * [AdminMart](https://adminmart.com/) — 使用Angular、Bootstrap、React、VueJs、NextJS和NuxtJS等创建的高质量免费和付费管理仪表板和网站模板。
  * [Glob tester](https://globster.xyz/) — 一个设计和测试glob模式的网站，还提供glob模式学习资源。
  * [SimpleRestore](https://simplerestore.io) — 简单易用的MySQL备份恢复服务，无需代码或服务器即可将备份恢复到远程数据库。
  * [360Converter](https://www.360converter.com/) — 免费版本的网站，可转换视频到文本、音频到文本、语音到文本等，并支持实时音频到文本转换，适用于短视频转换或短暂的YouTube教程。
  * [QRCodeBest](https://qrcode.best/) — 13种模板的自定义二维码创建器，重视隐私、个性化并提供追踪像素、项目分类和无限团队使用权限。
  * [PostPulse](https://post-pulse.io) — 提升在线可见度，优化SEO和站点排名，每月AI生成的SEO优化文章，免费版可手动每月在我们的网站上发布一篇帖子。
  * [PageTools](https://pagetools.co/) — 提供一套免费的AI驱动工具，帮助你快速创建网站政策、社交媒体资料、帖子和网页。
  * [MySQL Visual Explain](https://mysqlexplain.com) — 易于理解的MySQL EXPLAIN输出可视化工具，用于优化慢查询。
  * [Killer Coda](https://killercoda.com/) — 浏览器中的交互式学习平台，覆盖Linux、Kubernetes、容器、编程