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
    heroTitle: "Encoding First Principles into AI",
    heroSubtitle:
      "DYNPHI is a physics-first AI company. We code deterministic physical equations directly into our models — replacing statistical guessing with causally-grounded inference, so physics hallucination never happens in the first place.",
    heroCta: "Explore",
    overviewTitle: "The Soul of Physics AI",
    overviewParagraphs: [
      "DYNPHI（Dynamic + Physics）是专注于物理 AI 的公司。大多数 LLM 依赖统计关联进行预测，遇到物理规律时常常『一本正经地编造』——也就是物理幻觉。我们从源头改变这一现状：把牛顿力学等第一性原理直接编码进模型架构，让模型在确定性物理方程的约束下推理，而不是在数据分布上猜测。",
      "当每一段预测都被明确的物理方程约束，模型的输出是可追踪、可校验甚至可反演的。这意味着在机器人控制、结构受力、运动规划等对精度要求苛刻的场景，AI 的判断不再是一个『概率最高的猜测』，而是一条被物理定律证明的路径。",
      "我们的长期愿景是建立一座『可计算的物理常识库』：让 AI 具备从微观到宏观、从牛顿力学到流体动力学一致的因果直觉。在这一背景下，我们向工程与科研社区开放代码分析、物理 AI 内核与自研 Agent 三大能力。",
    ],
    productsTitle: "What We Build",
    productsSubtitle:
      "Three product lines, one mission — grounding intelligence in physics.",
    products: [
      {
        index: "01",
        title: "Code Analysis",
        description:
          "对 ROS 等开源机器人项目进行架构拆解、算法解析与代码动态/静态分析，输出结构化的技术解读，帮助工程与科研社区快速读懂复杂机器人代码库。",
        linkLabel: "Learn more",
        linkHref: "#code-analysis",
        icon: "code",
      },
      {
        index: "02",
        title: "Physics AI",
        description:
          "将牛顿力学等第一性原理直接编码进模型，用确定性物理方程替代统计猜测，从源头解决物理幻觉问题。",
        linkLabel: "Learn more",
        linkHref: "#physics-ai",
        icon: "physics",
      },
      {
        index: "03",
        title: "Agent",
        description:
          "DYNPHI 自研 AI Agent 平台，预留 API 接入点，后续可接入动态后端，构建面向物理世界的自主智能体。",
        linkLabel: "Learn more",
        linkHref: "#agent",
        icon: "agent",
      },
    ],
    techStackTitle: "Tech Stack",
    techStackSubtitle:
      "A lean, modern stack built for a fast, static, developer-friendly site.",
    techStackTags: [
      "Astro",
      "Tailwind CSS",
      "TypeScript",
      "Cloudflare Pages",
      "MDX",
      "Content Collections",
    ],
    githubTitle: "Built in the Open",
    githubDescription:
      "This site is a fork of the AstroPaper template. Fork it, star it, or explore the source — the physics is best served open.",
    githubCta: "View on GitHub",
    githubHref: "https://github.com/daizhongcheng/astro-paper",
    aboutTitle: "About DYNPHI",
    aboutParagraphs: [
      "DYNPHI 是一家物理 AI 公司——Dynamic 与 Physics 的结合，使命是把确定性的物理规律编码进 AI 的『直觉』里。我们相信，真正的智能不应是概率的堆砌，而是因果与规律的产物。",
      "我们崇尚开放与第一性原理：代码向社区开源，方法向同行公开，问题始终从物理本身出发。",
    ],
    footerTagline: "Encoding first principles into AI.",
    contactLabel: "Contact",
    contactHref: "mailto:hello@dynphi.com",
  },
});