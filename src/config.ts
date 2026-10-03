/**
 * Internal resolved configuration used throughout the codebase.
 *
 * Prefer editing `astro-paper.config.ts` instead of this file. This module exists to
 * apply defaults and expose a fully-resolved config shape (`ResolvedAstroPaperConfig`).
 */
import userConfig from "@/astro-paper.config";
import type { ResolvedAstroPaperConfig } from "./types/config";
import { PUBLIC_GOOGLE_SITE_VERIFICATION } from "astro:env/client";

const DEFAULT_OG_IMAGE = "default-og.jpg";

const config: ResolvedAstroPaperConfig = {
  site: {
    ...userConfig.site,
    ogImage: userConfig.site.ogImage ?? DEFAULT_OG_IMAGE,
    lang: userConfig.site.lang ?? "en",
    timezone: userConfig.site.timezone ?? "UTC",
    dir: userConfig.site.dir ?? "ltr",
    googleVerification:
      userConfig.site.googleVerification || PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  posts: {
    perPage: userConfig.posts?.perPage ?? 4,
    perIndex: userConfig.posts?.perIndex ?? 4,
    scheduledPostMargin:
      userConfig.posts?.scheduledPostMargin ?? 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: userConfig.features?.lightAndDarkMode ?? true,
    dynamicOgImage: userConfig.features?.dynamicOgImage ?? true,
    showArchives: userConfig.features?.showArchives ?? true,
    showBackButton: userConfig.features?.showBackButton ?? true,
    editPost: userConfig.features?.editPost ?? { enabled: false },
    search: userConfig.features?.search ?? "pagefind",
  },
  socials: userConfig.socials ?? [],
  shareLinks: userConfig.shareLinks ?? [],
  landing: userConfig.landing ?? {
    // Safe fallback so `config.landing` is never undefined at runtime.
    // Copy lives in `astro-paper.config.ts`.
    brand: "DYNPHI",
    phi: "φ",
    nav: [
      { label: "Overview", href: "#overview" },
      { label: "Products", href: "#products" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "About", href: "#about" },
    ],
    heroTitle: "",
    heroSubtitle: "",
    heroCta: "",
    overviewTitle: "",
    overviewParagraphs: [],
    productsTitle: "",
    productsSubtitle: "",
    products: [],
    techStackTitle: "",
    techStackSubtitle: "",
    techStackTags: [],
    githubTitle: "",
    githubDescription: "",
    githubCta: "",
    githubHref: "",
    aboutTitle: "",
    aboutParagraphs: [],
    footerTagline: "",
    contactLabel: "",
    contactHref: "",
    skipToContent: "Skip to content",
    navA11y: "Main navigation",
    gitHubA11y: "GitHub repository",
  },
  landingZh: userConfig.landingZh ?? userConfig.landing ?? {
    // Chinese fallback mirrors default English copy.
    brand: "DYNPHI",
    phi: "φ",
    nav: [
      { label: "概览", href: "#overview" },
      { label: "产品", href: "#products" },
      { label: "技术栈", href: "#tech-stack" },
      { label: "关于", href: "#about" },
    ],
    heroTitle: "让 AI 循物理而动",
    heroSubtitle: "DYNPHI 是一家以物理为先的 AI 公司。我们把确定性的物理方程直接编码进模型，用因果可推导的推理替代统计猜测，从源头杜绝物理幻觉。",
    heroCta: "开始探索",
    overviewTitle: "物理 AI 的灵魂",
    overviewParagraphs: [],
    productsTitle: "我们在构建什么",
    productsSubtitle: "三大产品线，一个使命——让智能扎根于物理。",
    products: [],
    techStackTitle: "技术栈",
    techStackSubtitle: "一套精简、现代的工程栈，为快速、静态、开发者友好的站点而生。",
    techStackTags: [],
    githubTitle: "在开放中构建",
    githubDescription: "本站 fork 自 AstroPaper 模板。欢迎 Fork、Star 或浏览源码——物理，宜开源。",
    githubCta: "在 GitHub 上查看",
    githubHref: "https://github.com/daizhongcheng/astro-paper",
    aboutTitle: "关于 DYNPHI",
    aboutParagraphs: [],
    footerTagline: "让 AI 循物理而动。",
    contactLabel: "联系我们",
    contactHref: "mailto:hello@dynphi.com",
    skipToContent: "跳到主要内容",
    navA11y: "主导航",
    gitHubA11y: "GitHub 仓库",
  },
};

export default config;
