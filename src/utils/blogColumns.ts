/**
 * Shared metadata for the three independent DYNPHI blog columns.
 * Each column maps to exactly one content collection and one folder
 * under src/content/blog/<slug>/. Columns are fully isolated.
 */
export type BlogColumn = {
  slug: string;
  collectionKey: "codeAnalysisPosts" | "physicsAiPosts" | "agentPosts";
  icon: "code" | "physics" | "agent";
  /** Link target on the hero landing page (product card). */
  landingHref: string;
  title: { en: string; zh: string };
  description: { en: string; zh: string };
  index: string;
};

export const BLOG_COLUMNS: BlogColumn[] = [
  {
    slug: "code-analysis",
    collectionKey: "codeAnalysisPosts",
    icon: "code",
    landingHref: "/blog/code-analysis",
    index: "01",
    title: { en: "Code Analysis", zh: "代码分析" },
    description: {
      en: "Static & dynamic analysis of C++ and robotics codebases — architecture breakdowns, algorithm deep-dives and structured technical write-ups.",
      zh: "面向 C++ 与机器人代码库的静态/动态分析——架构拆解、算法深读与结构化技术文档。",
    },
  },
  {
    slug: "physics-ai",
    collectionKey: "physicsAiPosts",
    icon: "physics",
    landingHref: "/blog/physics-ai",
    index: "02",
    title: { en: "Physics AI", zh: "物理 AI" },
    description: {
      en: "Encoding deterministic physical laws into models — simulation, causal inference and eliminating physics hallucination at the source.",
      zh: "把确定性物理规律编码进模型——仿真、因果推理，从源头消除物理幻觉。",
    },
  },
  {
    slug: "agent",
    collectionKey: "agentPosts",
    icon: "agent",
    landingHref: "/blog/agent",
    index: "03",
    title: { en: "Agent", zh: "Agent 平台" },
    description: {
      en: "DYNPHI's agent platform for the physical world — autonomous agents, orchestration, tool use and reserved API endpoints.",
      zh: "DYNPHI 面向物理世界的 Agent 平台——自主智能体、编排、工具调用与预留 API。",
    },
  },
];

export function getColumn(slug: string): BlogColumn | undefined {
  return BLOG_COLUMNS.find(c => c.slug === slug);
}

/** Extract a URL-safe slug from a content entry id (e.g. "welcome.md" -> "welcome"). */
export function postSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/i, "").split("/").pop() ?? id;
}

/**
 * Sort/filter blog posts for a column listing.
 * Lives in this module (not inline in a page) so Astro's prerender chunk
 * reliably bundles it when referenced from `getStaticPaths`.
 */
export function sortBlogPosts(posts: any[]): any[] {
  return posts
    .filter(p => !p.data?.draft)
    .sort(
      (a, b) =>
        new Date(
          b.data.modDatetime ?? b.data.pubDatetime
        ).getTime() -
        new Date(
          a.data.modDatetime ?? a.data.pubDatetime
        ).getTime()
    );
}