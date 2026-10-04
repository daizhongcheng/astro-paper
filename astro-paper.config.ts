import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://dynphi.com/",
    title: "DYNPHI",
    description:
      "DYNPHI is a compiler layer for AI — compiling the laws of physics directly into intelligent agents. From symbolic reasoning to physical reality, at compiler-grade precision.",
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
    nav: [
      { label: "Why", href: "#why" },
      { label: "What", href: "#what" },
      { label: "How", href: "#how" },
      { label: "About", href: "#about" },
    ],
    heroEyebrow: "Compile × Physics",
    heroTitle: "Compile Physical Laws. Sustain Intelligent Agents.",
    heroSubtitle:
      "Compile physics at design time; adapt to any body at run time.",
    heroCtaPrimary: "Read the story",
    heroCtaSecondary: "View on GitHub",
    overviewTitle: "The Soul of Physics AI",
    overviewParagraphs: [
      "DYNPHI stands for Dynamic × Physics. Most LLMs predict by statistical association — and when it comes to physical laws, they confidently fabricate: physics hallucination. We fix this at the source by encoding first principles like Newtonian mechanics directly into the model, forcing inference to run under deterministic physical constraints rather than guessing across a data distribution.",
      "When every prediction is constrained by explicit physical equations, the output becomes traceable, verifiable, even invertible.",
    ],
    productsTitle: "What We Build",
    productsSubtitle:
      "Three product lines, one mission — grounding intelligence in physics.",
    products: [
      {
        index: "01",
        title: "Code Analysis",
        description:
          "Architecture breakdown and static/dynamic code analysis of robotics projects.",
        linkLabel: "Read the blog",
        linkHref: "/blog/code-analysis",
        icon: "code",
      },
      {
        index: "02",
        title: "Physics AI",
        description:
          "First principles encoded into the model, replacing statistical guessing with deterministic equations.",
        linkLabel: "Read the blog",
        linkHref: "/blog/physics-ai",
        icon: "physics",
      },
      {
        index: "03",
        title: "Agent",
        description:
          "A proprietary AI Agent platform ready to plug into a dynamic backend.",
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
      "DYNPHI is a physics-first AI company — the union of Dynamic and Physics — with a mission to encode deterministic physical laws into AI's 'intuition'.",
      "We champion openness and first principles: code open-sourced to the community, methods shared with peers.",
      "A single brain, ready for every body.",
    ],
    footerTagline: "Compile physical laws. Sustain intelligent agents.",
    contactLabel: "Contact",
    contactHref: "mailto:hello@dynphi.com",
    skipToContent: "Skip to content",
    navA11y: "Main navigation",
    gitHubA11y: "GitHub repository",
    heroBadge: "Symbol-to-physics compiler infrastructure",
    terminalTitle: "dynphi",
    terminalPrompt: "$",
    terminalSource:
      "fn move_arm(target: Vec3) -> Trajectory {\n  let plan = llm.plan(\"reach target\");\n  // intercepted by DYNPHI\n  return plan;\n}",
    terminalOk: "✓ Build Success",
    terminalNote:
      "157 deterministic constraints injected · Verified by sandbox · 0 hallucinations",
    terminalRun: "dynphi --compile",
    whyTitle: "Why a compiler layer?",
    whySubtitle:
      "LLMs reason in symbols. The physical world runs on laws. A compiler is what reconciles them.",
    whyDilemmaTitle: "The dilemma — statistical guessing",
    whyDilemmaDesc:
      "A plain LLM returns the most probable token, not a physically valid one. Under load, it confidently hallucinates.",
    whyDilemmaCode:
      "fn plan() -> Path {\n  let p = llm.predict(\"route\");\n  // ⚠ no constraint check\n  return p; // may pass through a wall\n}",
    whyConstraintTitle: "DYNPHI's contract — laws are first-class",
    whyConstraintDesc:
      "No output can leave the model until it has been compiled against explicit physical equations.",
    whyConstraintPoints: [
      "Newtonian constraints enforced at graph level",
      "Sandbox simulation validates every branch",
      "Outputs are traceable and invertible",
    ],
    whyMetric1Value: "99.9",
    whyMetric1Label: "Interception rate",
    whyMetric1Caption: "of invalid physical outputs rejected pre-issue",
    whyMetric2Value: "2",
    whyMetric2Label: "Compile latency",
    whyMetric2Caption: "ms median, on top of inference",
    whatTitle: "What it compiles",
    whatSubtitle:
      "Three surfaces of the same compiler runtime — inspect, compile, deploy.",
    whatTagBuild: "DYNPHI",
    whatItems: [
      {
        title: "Runtime",
        tech: "C++ · Rust",
        caption:
          "The execution surface — runs every agent decision through the physics kernel before dispatch.",
        code:
          "// runtime/compile.ts\nconst action = compile(plan, {\n  constraints: newton(9.81),\n  verify: simulate(action),\n});\nif (action.verified) dispatch(action);",
      },
      {
        title: "Analyzer",
        tech: "LLVM · Static Analysis",
        caption:
          "The inspection surface — statically verifies code against physical invariants and dataflow.",
        code:
          "// analyzer/inspect.ts\nconst invariants = analyze(ast).physical();\nreport(invariants, { violations: 0 });",
      },
      {
        title: "Platform",
        tech: "Agent Toolchain",
        caption:
          "The deployment surface — plug a backend, ship agents that act in the physical world.",
        code:
          "// platform/agent.ts\nconst agent = createAgent(env(\"BACKEND\"));\nawait agent.deploy({ policy: \"physical-first\" });",
      },
    ],
    howTitle: "How it works",
    howSubtitle:
      "A four-stage pipeline turns symbolic intent into an action certified by physics.",
    howTag: "DYNPHI PIPELINE",
    howSteps: [
      {
        title: "Symbolic Parse",
        desc: "Resolve intent and constraints into a compilable symbolic IR.",
      },
      {
        title: "Physical Compile",
        desc: "Synthesize Newtonian, fluid and material laws into a verifiable graph.",
      },
      {
        title: "Sandbox Simulate",
        desc: "Simulate every branch in a physical sandbox; prune the invalid paths.",
      },
      {
        title: "Real-world Dispatch",
        desc: "Only physics-verified products are released to the real world.",
      },
    ],
  },
  landingZh: {
    brand: "DYNPHI",
    phi: "φ",
    nav: [
      { label: "为什么", href: "#why" },
      { label: "是什么", href: "#what" },
      { label: "如何做", href: "#how" },
      { label: "愿景", href: "/vision" },
      { label: "关于", href: "#about" },
    ],
    heroEyebrow: "编译 × 物理",
    heroTitle: "编译物理律，承载智能体",
    heroSubtitle:
      "设计期编译物理，运行期驾驭任意躯体。",
    heroCtaPrimary: "阅读故事",
    heroCtaSecondary: "访问 GitHub",
    overviewTitle: "物理 AI 的灵魂",
    overviewParagraphs: [
      "DYNPHI（Dynamic × Physics）专注于物理 AI。绝大多数大模型靠统计关联做预测，一旦涉及物理规律，常常『一本正经地编造』——这就是物理幻觉。我们从源头改变它：把牛顿力学等第一性原理直接编码进模型架构。",
      "当每一段预测都被明确的物理方程约束，模型的输出就变得可追踪、可校验、甚至可反演。",
    ],
    productsTitle: "我们在构建什么",
    productsSubtitle: "三条产品线，一个使命——让智能扎根于物理。",
    products: [
      {
        index: "01",
        title: "代码分析",
        description:
          "对 ROS 等开源机器人项目进行架构拆解与静态/动态代码分析，输出结构化技术解读。",
        linkLabel: "进入专栏",
        linkHref: "/blog/code-analysis",
        icon: "code",
      },
      {
        index: "02",
        title: "物理 AI",
        description:
          "将牛顿力学等第一性原理直接编码进模型，用确定性物理方程替代统计猜测。",
        linkLabel: "进入专栏",
        linkHref: "/blog/physics-ai",
        icon: "physics",
      },
      {
        index: "03",
        title: "Agent 平台",
        description:
          "DYNPHI 自研 AI Agent 平台，预留 API 接入点，可构建面向物理世界的自主智能体。",
        linkLabel: "进入专栏",
        linkHref: "/blog/agent",
        icon: "agent",
      },
    ],
    techStackTitle: "技术栈",
    techStackSubtitle: "一套精简、现代的工程栈，为快速、静态、开发者友好的站点而生。",
    techStackTags: ["C++", "物理仿真", "编译器技术", "大模型", "智能 Agent"],
    githubTitle: "在开放中构建",
    githubDescription:
      "以开源为原则。浏览源码、Star 项目，帮助人工智能生根于物理。",
    githubCta: "在 GitHub 上查看",
    githubHref: "https://github.com/daizhongcheng/astro-paper",
    aboutTitle: "关于 DYNPHI",
    aboutParagraphs: [
      "DYNPHI 是一家物理 AI 公司——Dynamic 与 Physics 的结合。使命是把确定性的物理规律，编码进 AI 的『直觉』里。",
      "我们崇尚开放与第一性原理：代码向社区开源，方法向同行公开。",
      "一颗大脑，适配每一副躯体。",
    ],
    footerTagline: "编译物理律，承载智能体。",
    contactLabel: "联系我们",
    contactHref: "mailto:hello@dynphi.com",
    skipToContent: "跳到主要内容",
    navA11y: "主导航",
    gitHubA11y: "GitHub 仓库",
    heroBadge: "连接符号推理与物理现实的编译基础设施",
    terminalTitle: "dynphi",
    terminalPrompt: "$",
    terminalSource:
      "fn move_arm(target: Vec3) -> Trajectory {\n  let plan = llm.plan(\"reach target\");\n  // intercepted by DYNPHI\n  return plan;\n}",
    terminalOk: "✓ 构建成功",
    terminalNote:
      "已注入 157 条确定性约束 · 沙盒已验证 · 0 幻觉",
    terminalRun: "dynphi --compile",
    whyTitle: "为什么需要编译层？",
    whySubtitle:
      "大模型在符号里推理，物理世界由规律运行。编译器，就是用来调和两者的。",
    whyDilemmaTitle: "困境——统计猜测",
    whyDilemmaDesc:
      "普通 LLM 只返回概率最高的 token，而非物理合法的结果。压力之下，它会自信地编造。",
    whyDilemmaCode:
      "fn plan() -> Path {\n  let p = llm.predict(\"route\");\n  // ⚠ 无约束检查\n  return p; // 可能穿墙\n}",
    whyConstraintTitle: "DYNPHI 的契约——规律是头等公民",
    whyConstraintDesc:
      "任何输出在离开模型之前，都必须被显式的物理方程编译验证。",
    whyConstraintPoints: [
      "在计算图层面强制牛顿约束",
      "沙盒仿真正在验证每条分支",
      "输出可追踪、可反演",
    ],
    whyMetric1Value: "99.9",
    whyMetric1Label: "拦截率",
    whyMetric1Caption: "无效物理输出在发布前即被剔除的比例",
    whyMetric2Value: "2",
    whyMetric2Label: "编译延迟",
    whyMetric2Caption: "推理之上的中位毫秒级开销",
    whatTitle: "它编译什么",
    whatSubtitle:
      "同一编译运行时的三个面——检视、编译、部署。",
    whatTagBuild: "DYNPHI",
    whatItems: [
      {
        title: "运行时 Runtime",
        tech: "C++ · Rust",
        caption:
          "执行面——在分派前，让每个智能体的决策都经过物理内核校验。",
        code:
          "// runtime/compile.ts\nconst action = compile(plan, {\n  constraints: newton(9.81),\n  verify: simulate(action),\n});\nif (action.verified) dispatch(action);",
      },
      {
        title: "分析器 Analyzer",
        tech: "LLVM · 静态分析",
        caption:
          "检视面——针对物理不变量与数据流，对代码做静态验证。",
        code:
          "// analyzer/inspect.ts\nconst invariants = analyze(ast).physical();\nreport(invariants, { violations: 0 });",
      },
      {
        title: "平台 Platform",
        tech: "Agent 工具链",
        caption:
          "部署面——接入后端，发布能在物理世界中行动的智能体。",
        code:
          "// platform/agent.ts\nconst agent = createAgent(env(\"BACKEND\"));\nawait agent.deploy({ policy: \"physical-first\" });",
      },
    ],
    howTitle: "它是如何工作的",
    howSubtitle:
      "一条四阶段流水线，把符号意图编译成被物理认证的动作。",
    howTag: "DYNPHI 流水线",
    howSteps: [
      {
        title: "符号解析",
        desc: "把意图与约束解析为可编译的符号中间表示（IR）。",
      },
      {
        title: "物理编译",
        desc: "把牛顿、流体与材料定律合成为可验证的执行图。",
      },
      {
        title: "沙盒推演",
        desc: "在物理沙盒中推演每条分支，剔除不通路径。",
      },
      {
        title: "现实下发",
        desc: "仅放行被物理验证的产物，交付到真实世界。",
      },
    ],
  },
});