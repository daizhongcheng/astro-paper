interface SiteConfig {
  /** Deployed URL of the site, e.g. "https://example.com" */
  url: string;
  /** Blog title shown in header and meta tags */
  title: string;
  /** Short description used in SEO meta and RSS feed */
  description: string;
  /** Default post author name */
  author: string;
  /** Author profile URL (used in structured data) */
  profile?: string;
  /** Fallback OG image filename in /public, e.g. "og.jpg" */
  ogImage?: string;
  /** HTML lang attribute, defaults to "en" */
  lang?: string;
  /** IANA timezone for post dates, e.g. "Asia/Bangkok" */
  timezone?: string;
  /** Text direction */
  dir?: "ltr" | "rtl" | "auto";
  /** Google Search Console verification meta tag value */
  googleVerification?: string;
}

interface PostsConfig {
  /** Posts per page on paginated listing pages */
  perPage?: number;
  /** Posts shown on the index/home page */
  perIndex?: number;
  /**
   * Scheduled posts within this window (ms) of their pubDatetime
   * are shown as published. Defaults to 15 minutes.
   */
  scheduledPostMargin?: number;
}

interface FeaturesConfig {
  /** Enable light/dark mode toggle. Defaults to true. */
  lightAndDarkMode?: boolean;
  /**
   * Generate dynamic OG images per post and provide `/og.png` when the static
   * `public/{site.ogImage}` file is absent. When false, that file is required
   * for the default layout OG image (build fails if missing).
   */
  dynamicOgImage?: boolean;
  /** Show the /archives page and link it in nav. Defaults to true. */
  showArchives?: boolean;
  /** Show back button on post detail pages. Defaults to true. */
  showBackButton?: boolean;
  /** "Edit page" link shown on post detail pages. */
  editPost?:
    | {
        enabled: true;
        /** Base URL for the edit link, e.g. GitHub edit URL */
        url: string;
      }
    | { enabled: false };
  /**
   * Search provider. "pagefind" ships in the base template.
   * Set to false to disable search entirely.
   */
  search?: "pagefind" | false;
}

interface SocialLink {
  /**
   * Must match an SVG filename in src/assets/icons/socials/.
   * e.g. "github" → src/assets/icons/socials/github.svg
   */
  name: string;
  url: string;
  /**
   * Accessible label for the icon link (aria-label, title attribute).
   * Auto-generated if omitted: "{site.title} on GitHub", "Send an email to {site.title}", etc.
   * Override when the default wording doesn't fit.
   */
  linkTitle?: string;
}

interface ShareLink {
  /**
   * Must match an SVG filename in src/assets/icons/socials/.
   * e.g. "facebook" → src/assets/icons/socials/facebook.svg
   */
  name: string;
  /** Base share URL. The post URL will be appended as a query param. */
  url: string;
  /**
   * Accessible label for the icon link (aria-label, title attribute).
   * Auto-generated if omitted: "Share this post on Facebook", "Share this post via WhatsApp", etc.
   * Override when the default wording doesn't fit.
   */
  linkTitle?: string;
}

interface AstroPaperConfig {
  site: SiteConfig;
  posts?: PostsConfig;
  features?: FeaturesConfig;
  /** Social profile links shown in header/footer */
  socials?: SocialLink[];
  /** Share links shown on post detail pages */
  shareLinks?: ShareLink[];
}

type ResolvedSiteConfig = Required<
  Pick<
    SiteConfig,
    | "url"
    | "title"
    | "description"
    | "author"
    | "lang"
    | "timezone"
    | "dir"
    | "ogImage"
  >
> &
  Pick<SiteConfig, "profile" | "googleVerification">;

export interface ResolvedAstroPaperConfig {
  site: ResolvedSiteConfig;
  posts: Required<PostsConfig>;
  features: Required<FeaturesConfig>;
  socials: SocialLink[];
  shareLinks: ShareLink[];
  landing: LandingContent;
  /** Chinese (zh) variant of the landing copy, same shape as `landing` */
  landingZh: LandingContent;
}

/**
 * Landing page content for the single-page marketing site.
 * Centralised copy keeps text out of component templates.
 */
interface LandingContent {
  /** Brand name shown in the navbar / footer */
  brand: string;
  /** Greek letter phi mark used as the brand glyph (U+03C6) */
  phi: string;
  /** Nav links (label + anchor), localised */
  nav: { label: string; href: string }[];
  /** Hero claim */
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  /** Overview section */
  overviewTitle: string;
  overviewParagraphs: string[];
  /** Products */
  productsTitle: string;
  productsSubtitle: string;
  products: {
    index: string;
    title: string;
    description: string;
    linkLabel: string;
    linkHref: string;
    icon: string;
  }[];
  /** Tech stack */
  techStackTitle: string;
  techStackSubtitle: string;
  techStackTags: string[];
  /** GitHub CTA */
  githubTitle: string;
  githubDescription: string;
  githubCta: string;
  githubHref: string;
  /** About */
  aboutTitle: string;
  aboutParagraphs: string[];
  /** Footer / contact */
  footerTagline: string;
  contactLabel: string;
  contactHref: string;
  /** Accessibility strings */
  skipToContent: string;
  navA11y: string;
  gitHubA11y: string;
  /** -------- Dark "compiler" homepage sections (new) -------- */
  heroBadge: string;
  terminalTitle: string;
  terminalPrompt: string;
  terminalSource: string;
  terminalOk: string;
  terminalNote: string;
  terminalRun: string;
  whyTitle: string;
  whySubtitle: string;
  whyDilemmaTitle: string;
  whyDilemmaDesc: string;
  whyDilemmaCode: string;
  whyConstraintTitle: string;
  whyConstraintDesc: string;
  whyConstraintPoints: string[];
  whyMetric1Value: string;
  whyMetric1Label: string;
  whyMetric1Caption: string;
  whyMetric2Value: string;
  whyMetric2Label: string;
  whyMetric2Caption: string;
  whatTitle: string;
  whatSubtitle: string;
  whatTagBuild: string;
  whatItems: {
    title: string;
    tech: string;
    caption: string;
    code: string;
  }[];
  howTitle: string;
  howSubtitle: string;
  howTag: string;
  howSteps: {
    title: string;
    desc: string;
  }[];
}

interface AstroPaperConfig {
  site: SiteConfig;
  posts?: PostsConfig;
  features?: FeaturesConfig;
  /** Social profile links shown in header/footer */
  socials?: SocialLink[];
  /** Share links shown on post detail pages */
  shareLinks?: ShareLink[];
  /** DYNPHI landing page copy — English (single-page marketing site) */
  landing?: LandingContent;
  /** DYNPHI landing page copy — Chinese (mirrors `landing` shape) */
  landingZh?: LandingContent;
}

/**
 * Type helper for astro-paper.config.ts.
 * Provides full IntelliSense without any runtime overhead.
 */
export function defineAstroPaperConfig(
  config: AstroPaperConfig
): AstroPaperConfig {
  return config;
}
