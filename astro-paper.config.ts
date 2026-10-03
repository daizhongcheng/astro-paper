import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dynphi.com/",
    title: "DYNPHI",
    description:
      "DYNPHI is a physics-first AI company encoding first principles into models — replacing statistical guessing with deterministic physical equations to eliminate physics hallucination at the source.",
    author: "DYNPHI",
    profile: "https://dynphi.com/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: false,
    editPost: { enabled: false },
    search: false,
  },
  socials: [
    { name: "github", url: "https://github.com/daizhongcheng/astro-paper" },
    { name: "x", url: "https://x.com/dynphi" },
    { name: "mail", url: "mailto:hello@dynphi.com" },
  ],
  shareLinks: [],
  landing: {
    brand: "DYNPHI",
    phi: "φ",
    heroEyebrow: "Dynamic × Physics",
    heroTitle: "The science of intelligent motion.",
    heroSubtitle:
      "DYNPHI is a physics-first AI company. We encode deterministic physical equations directly into our models — replacing statistical guessing with causally-grounded inference, so physics hallucination never happens in the first place.",
    heroCtaPrimary: "View GitHub",
    heroCtaSecondary: "Learn More",
    overviewTitle: "The Soul of Physics AI",
    overviewParagraphs: [
      "DYNPHI stands for Dynamic × Physics. Most LLMs predict by statistical association — and when it comes to physical laws, they confidently fabricate: physics hallucination. We fix this at the source by encoding first principles like Newtonian mechanics directly into the model architecture, forcing inference to run under deterministic physical constraints rather than guessing across a data distribution.",
      "When every prediction is constrained by explicit physical equations, the output becomes traceable, verifiable, even invertible. In robotics control, structural stress, motion planning and other precision-critical domains, an AI's decision is no longer a 'most probable guess' but a path certified by the laws of physics.",
      "Our long-term vision is a 'computable common sense of physics' — AI with a coherent causal intuition from micro to macro, from Newtonian mechanics to fluid dynamics. On that basis, we open three capabilities to the engineering and research community: Code Analysis, a Physics AI core, and a self-developed Agent platform.",
    ],
    productsTitle: "What We Build",
    productsSubtitle:
      "Three product lines, one mission — grounding intelligence in physics.",
    products: [
      {
        index: "01",
        title: "Code Analysis",
        description:
          "Architecture breakdown, algorithm analysis and static/dynamic code analysis of open-source robotics projects such as ROS, producing structured technical deep-dives so the engineering and research community can quickly understand complex robotics codebases.",
        linkLabel: "Read the blog",
        linkHref: "/blog/code-analysis",
        icon: "code",
      },
      {
        index: "02",
        title: "Physics AI",
        description:
          "First principles such as Newtonian mechanics encoded directly into the model, replacing statistical guessing with deterministic physical equations to eliminate physics hallucination at the source.",
        linkLabel: "Read the blog",
        linkHref: "/blog/physics-ai",
        icon: "physics",
      },
      {
        index: "03",
        title: "Agent",
        description:
          "DYNPHI's proprietary AI Agent platform, with reserved API endpoints ready to plug into a dynamic backend and build autonomous agents for the physical world.",
        linkLabel: "Read the blog",
        linkHref: "/blog/agent",
        icon: "agent",
      },
    ],
    techStackTitle: "Tech Stack",
    techStackSubtitle:
      "A lean, modern stack built for a fast, static, developer-friendly site.",
    techStackTags: [
      "C++",
      "Physics Simulation",
      "Compiler Technology",
      "Large Language Models",
      "Intelligent Agents",
    ],
    githubTitle: "Built in the Open",
    githubDescription:
      "Open-source by principle. Explore the source, star the project, and help ground AI in physics.",
    githubCta: "View on GitHub",
    githubHref: "https://github.com/daizhongcheng/astro-paper",
    aboutTitle: "About DYNPHI",
    aboutParagraphs: [
      "DYNPHI is a physics-first AI company — the union of Dynamic and Physics — with a mission to encode deterministic physical laws into AI's 'intuition'. We believe true intelligence is not an accumulation of probabilities but a product of causation and law.",
      "We champion openness and first principles: code open-sourced to the community, methods shared with peers, and questions always approached from physics itself.",
    ],
    footerTagline: "The science of intelligent motion.",
    contactLabel: "Contact",
    contactHref: "mailto:hello@dynphi.com",
    nav: [
      { label: "Overview", href: "#overview" },
      { label: "Products", href: "#products" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "About", href: "#about" },
    ],
    skipToContent: "Skip to content",
    navA11y: "Main navigation",
    gitHubA11y: "GitHub repository",
  },
  landingZh: {
    brand: "DYNPHI",
    phi: "φ",
    nav: [
      { label: "概览", href: "#overview" },
      { label: "产品", href: "#products" },
      { label: "技术栈", href: "#tech-stack" },
      { label: "关于", href: "#about" },
    ],
    heroEyebrow: "动×相",
    heroTitle: "让 AI 循物理而动",
    heroSubtitle:
      "DYNPHI 是一家以物理为先的 AI 公司。我们把确定性的物理方程直接编码进模型，用因果可推导、可校验的推理替代统计猜测，从源头杜绝物理幻觉。",
    heroCtaPrimary: "访问 GitHub",
    heroCtaSecondary: "了解项目",
    overviewTitle: "物理 AI 的灵魂",
    overviewParagraphs: [
      "DYNPHI（Dynamic × Physics）专注于物理 AI。绝大多数大模型靠统计关联做预测，一旦涉及物理规律，常常『一本正经地编造』——这就是物理幻觉。我们从源头改变它：把牛顿力学等第一性原理直接编码进模型架构，让推理在确定性物理方程的约束下进行，而不是在数据分布上瞎猜。",
      "当每一段预测都被明确的物理方程约束，模型的输出就变得可追踪、可校验、甚至可反演。这意味着在机器人控制、结构受力、运动规划等对精度要求苛刻的场景，AI 的判断不再是『概率最高的猜测』，而是一条被物理定律证明的路径。",
      "我们的长期愿景，是建立一座『可计算的物理常识库』——让 AI 具备从微观到宏观、从牛顿力学到流体动力学都一致的因果直觉。在此之上，我们向工程与科研社区开放三条产品线：代码分析、物理 AI 内核与自研 Agent 平台。",
    ],
    productsTitle: "我们在构建什么",
    productsSubtitle: "三条产品线，一个使命——让智能扎根于物理。",
    products: [
      {
        index: "01",
        title: "代码分析",
        description:
          "对 ROS 等开源机器人项目进行架构拆解、算法解析与静态/动态代码分析，输出结构化技术解读，帮助工程与科研社区快速读懂复杂机器人代码库。",
        linkLabel: "进入专栏",
        linkHref: "/blog/code-analysis",
        icon: "code",
      },
      {
        index: "02",
        title: "物理 AI",
        description:
          "将牛顿力学等第一性原理直接编码进模型，用确定性物理方程替代统计猜测，从源头解决物理幻觉问题。",
        linkLabel: "进入专栏",
        linkHref: "/blog/physics-ai",
        icon: "physics",
      },
      {
        index: "03",
        title: "Agent 平台",
        description:
          "DYNPHI 自研 AI Agent 平台，预留 API 接入点，可接入动态后端，构建面向物理世界的自主智能体。",
        linkLabel: "进入专栏",
        linkHref: "/blog/agent",
        icon: "agent",
      },
    ],
    techStackTitle: "技术栈",
    techStackSubtitle: "一套精简、现代的工程栈，为快速、静态、开发者友好的站点而生。",
    techStackTags: [
      "C++",
      "物理仿真",
      "编译器技术",
      "大模型",
      "智能 Agent",
    ],
    githubTitle: "在开放中构建",
    githubDescription:
      "以开源为原则。浏览源码、Star 项目，帮助人工智能生根于物理。",
    githubCta: "在 GitHub 上查看",
    githubHref: "https://github.com/daizhongcheng/astro-paper",
    aboutTitle: "关于 DYNPHI",
    aboutParagraphs: [
      "DYNPHI 是一家物理 AI 公司——Dynamic 与 Physics 的结合。使命是把确定性的物理规律，编码进 AI 的『直觉』里。我们相信：真正的智能不是概率的堆砌，而是因果与规律的产物。",
      "我们崇尚开放与第一性原理：代码向社区开源，方法向同行公开，问题始终从物理本身出发。",
    ],
    footerTagline: "让 AI 循物理而动。",
    contactLabel: "联系我们",
    contactHref: "mailto:hello@dynphi.com",
    skipToContent: "跳到主要内容",
    navA11y: "主导航",
    gitHubA11y: "GitHub 仓库",
  },
});