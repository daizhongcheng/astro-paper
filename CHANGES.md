# CHANGES

> 记录按时间倒序排列，最新改动在最上方。每次改动追加在文件顶部，不覆盖历史。

## 2026-10-04 — `main`

**改动概述：** 首页整体重构为深色"编译器"叙事风格，并修复 i18n 语言切换单向失效 Bug。

**修复：**
- 语言切换由"读取按钮静态属性"改为"基于当前语言反向 toggle"（`toggleLanguage()`），连续反复点击与刷新后状态保持均稳定。

**首页重构（暗色 · Design-Engineer 风）：**
- 设计 Token：背景 `#0A0A0B` 深蓝黑 + 极淡网格底纹；正文 `zinc-400`，强调荧光青 `cyan-400`；卡片 `rounded-xl` / `border-white/5` / `bg-white/[0.02]`；动效 `cubic-bezier(0.16,1,0.3,1)`。
- Hero：呼吸灯 Badge + 5 级大标题（`text-5xl md:text-7xl`）+ 防空洞编译器 Terminal（打字机：LLM 代码 → DYNPHI 拦截 → `✓ Build Success`）。
- Why 区：Bento Grid（`md:auto-rows-[200px]`）——红色未校验代码卡、绿色约束清单卡、99.9% 拦截率、2ms 编译延迟两张数字卡。
- What 区：Z 字形左右交替三产品（Runtime / Analyzer / Platform），左文右带语法高亮 CodeBlock（行号 + 注释/关键字着色）。
- How 区：垂直 4 步编译流水线（符号解析 → 物理编译 → 沙盒推演 → 现实下发），节点渐变虚线连接。
- 微交互（无第三方依赖）：IntersectionObserver 滚动揭示（Fade up + Blur）、卡片鼠标跟随边缘光晕、数字滚动动画、终端打字机。
- 导航锚点更新：Overview/Products/Tech Stack → Why / What / How / About。

**影响范围：** `src/utils/i18n.ts`（新增 toggleLanguage）、`src/components/Navbar.astro`（toggle 回调 + 按钮 label）、`src/styles/theme.css`（深色 Token + 动画）、`src/scripts/motion.ts`（新增交互脚本）、`src/components/{Hero,WhyBento,WhatDX,HowPipeline,CodeBlock}.astro`（新首页区块）、`src/pages/index.astro`（组装）、`astro-paper.config.ts` / `src/config.ts` / `src/types/config.ts`（新增首页区块中英文文案与类型）。

## 2026-10-04 \u2014 `main`\u200b\u200b

**改动概述：** 三个产品卡片改为整卡可点，分别跳转到三套独立博客栏目；建立三套彼此隔离的博客系统（代码分析 / 物理 AI / Agent），各含列表页与文章详情页，用户可按栏目写文章。

**新增功能：**
- 三套独立博客栏目，路由 \`/blog/code-analysis\`、\`/blog/physics-ai\`、\`/blog/agent\`，各含栏目列表页与 \`\[slug\]\` 文章详情页。
- 写文章方式：在 \`src/content/blog/<栏目>/\` 下新建 \`.md\` 文件（frontmatter 含 title / description / pubDatetime / tags）即自动进入对应栏目。
- 首页三个产品卡片整卡可点 -> 对应栏目；CTA 文案改为「Read the blog / 进入专栏」。

**影响范围：** \`src/content.config.ts\`（新增 3 个独立 collection）；\`src/utils/blogColumns.ts\`（栏目元信息与排序/slug 工具）；\`src/pages/blog/\`（动态列表页 + 详情页）；\`src/components/ProductCards.astro\`（整卡可点）；\`astro-paper.config.ts\`（产品跳转地址与 CTA）。

**技术备注：** prerender 下 \`getStaticPaths\` 会被提取到独立 chunk，模块级私有函数（如排序、slug 计算）需移到可 import 的 util 模块，否则构建报 `xxx is not defined`。

## 2026-10-04 — `main`​​

**改动概述：** 界面信息清理与产品卡片大气化。技术栈标签从模板默认的「Astro / Tailwind CSS / MDX / Content Collections」替换为 DYNPHI 真实底层技术「C++ / 物理仿真 / 编译器技术 / 大模型 / 智能 Agent」；GitHub 引导区去掉「本站 fork 自 AstroPaper 模板」的表述，改为开源理念文案；产品三卡片进一步提升大气度（更大内边距 `p-10`、圆角 `rounded-2xl`、图标 `h-14` + hover 填充动画、标题放大为 `text-2xl`、CTA 按钮化带箭头 + hover 上浮）。

**影响范围：** `astro-paper.config.ts`（techStackTags / githubDescription 的 en、zh 文案）；`src/components/ProductCards.astro`（卡片样式强化）。

**是否涉及配置或依赖变更：** 仅文案与样式调整，无破坏性变更。

## 2026-10-04 — `main`

**改动概述：** 视觉方向再次调整：从深色硬核风改回**浅色大气科技风**。背景改柔和近白（`#fbfcfb`）、正文深墨绿（`#14221a`）、点缀低饱和品牌绿（`#2f7d4f`）；同时在布局上全面提升大气度——落地页容器从 `max-w-5xl`(1024px) 加宽至 `max-w-6xl`(1152px)，各区块纵向留白增至 `py-28`，Hero 放大为 `text-7xl` 大标题 + 顶部 eyebrow 标签 + 更舒展的双 CTA 按钮，Overview 改为「左标题右正文」两栏布局，产品卡片加大内边距与图标。

**影响范围：** `src/styles/theme.css`（浅色色板）、`src/styles/global.css`（容器加宽）、`src/components/` 全部区块（Hero/Overview/Products/TechStack/GitHubCta/About/Footer/Navbar 增大留白与标题层级）、`astro-paper.config.ts` / `src/config.ts` / `src/types/config.ts`（新增 `heroEyebrow` 字段）。

**是否涉及配置或依赖变更：** 是。

- `src/styles/theme.css`：色板切回浅色，移除深色变量。
- 新增 `LandingContent.heroEyebrow`（Hero 顶部小标签，en=`Dynamic × Physics` / zh=`动×相`）。
- 破坏性变更：新增 `heroEyebrow` 字段，旧配置需补齐（缺省时组件读不到会显示空，建议补齐）。

## 2026-10-04 — `feature/dark-hardcore-theme`

**改动概述：** 落地页视觉全面切换为「深色硬核极简科技风」。背景改为近黑深灰（GitHub Dark 基底 `#0d1117`），正文浅灰白，点缀色改用低饱和蓝紫（`#7aa2f7`），仅用于按钮 / 强调文字 / hover，无大面积渐变。移除深浅色切换开关，固定深色主题。Hero 增加双 CTA（访问 GitHub 主按钮 + 了解项目次按钮）。

**影响范围：** `src/styles/theme.css`（色板全量切换 + 单个深色主题变量）；`src/layouts/Layout.astro` 与 `src/scripts/theme.ts`（FOUC 脚本与主题逻辑改为始终强制深色，仅同步 theme-color）；`src/components/Hero.astro`（双 CTA 按钮）；`astro-paper.config.ts` / `src/config.ts` / `src/types/config.ts`（`heroCta` 拆分为 `heroCtaPrimary` / `heroCtaSecondary`，en/zh 各一组）。

**是否涉及配置或依赖变更：** 是。

- `src/styles/theme.css`：色板改为深色科技风；`:root, [data-theme="dark"]` 定义单个深色变量集。
- `src/layouts/Layout.astro` / `src/scripts/theme.ts`：移除浅色分支与切换逻辑，固定 `data-theme="dark"`（不再提供深浅切换开关）。
- `heroCta` 拆分为 `heroCtaPrimary`（访问 GitHub / 访问 GitHub）与 `heroCtaSecondary`（Learn More / 了解项目）。
- 破坏性变更：`LandingContent.heroCta` 更名拆分为 `heroCtaPrimary` / `heroCtaSecondary`；使用旧配置的项目需替换字段名。

## 2026-10-04 — `feature/dynphi-homepage`

**改动概述：** 落地页品牌与中英双语文案改造。以希腊字母 φ（Georgia 衬线小写）作为品牌图形标（导航/页脚/ favicon 统一），更新 Hero 主 slogan 为 "The science of intelligent motion."、Overview / About / 产品全文案为正式英文版，并新增完整中文版本落地页文案；实现客户端中英切换（按浏览器语言/IP 判断默认语言 + 导航切换按钮，文案仍集中在 config）；替换正式 OG 图为白绿 φ 品牌视觉。

**影响范围：** 全部落地页组件（Navbar / Hero / Overview / ProductCards / TechStack / GitHubCta / About / Footer / index）改为 `data-i18n` 双语渲染；新增 `src/utils/i18n.ts` 语言切换逻辑；`public/default-og.jpg` 替换为正式 OG 图；新增 `public/logo-phi.svg`、`public/favicon.svg`（φ 图标）；`scripts/copy-pagefind.cjs` 代替 POSIX `cp -r` 保证跨平台构建。

**是否涉及配置或依赖变更：** 是。

- `astro-paper.config.ts` / `src/config.ts` / `src/types/config.ts`：`landing` 结构调整并新增 `landingZh`（中文文案副本），`LandingContent` 增加 `phi` / `nav` / 无障碍字符串字段。
- `package.json`：`build` 脚本中 POSIX `cp -r` 改为 `node scripts/copy-pagefind.cjs`（Windows 兼容）。
- 破坏性变更：`LandingContent` 字段结构扩展（新增 `phi`、`nav`、`skipToContent`、`navA11y`、`gitHubA11y`），使用旧配置结构的项目需补齐以上字段。

### 提交明细

| 提交短哈希 | 提交信息 | 说明 |
| --- | --- | --- |

---

## 2026-10-03 — `feature/dynphi-homepage`

**改动概述：** 将 AstroPaper 博客模板改造为 DYNPHI 公司官网单页落地页。

**影响范围：** 首页（`src/pages/index.astro`）重写为单页落地页；新增 Navbar / Hero / Overview / ProductCards / TechStack / GitHubCta / About / Footer 八个区块组件；更新站点元数据并将落地页文案集中到 `astro-paper.config.ts` / `src/config.ts`；配色切换为低饱和绿色系；移除 Google Fonts 运行时依赖改用系统字体栈；博客页面（posts/tags/archives/search/og.png）移出 `src/pages` 归档到 `archive/blog-pages/` 保留代码，`src/content/` 内容集合保留以备后续扩展。

**是否涉及配置或依赖变更：** 是。

- `astro.config.ts`：移除 `fontProviders.google()`，`fonts` 置空，减少运行时外部依赖。
- `tsconfig.json`：`exclude` 增加 `archive` 与 `node_modules`，归档代码不再参与类型检查。
- `pnpm-workspace.yaml`：补充 `packages` 字段，修复 `pnpm install` 无法解析工作区的问题。
- `package.json`：未变更（依赖无增减）。

### 提交明细

| 提交短哈希 | 提交信息 | 说明 |
| --- | --- | --- |
| `76efeea` | `refactor(pages): 移除 src/pages 下已归档的博客路由源码` | 删除 src/pages 下归档后的博客路由（跟踪删除） |
| `996bfd5` | `fix(pages): 404 与 about 复用新导航组件并更新内容` | 404/about 改用 Navbar，更新 about.md 为 DYNPHI 内容 |
| `98a4556` | `chore(build): 修复 pnpm-workspace 补充 packages 字段` | 修复 pnpm 安装 |
| `946c9d2` | `refactor(pages): 归档博客页面至 archive/ 并保留内容集合` | 博客路由移入 archive/blog-pages，保留 src/content/ |
| `2dd6eba` | `feat(landing): 新增落地页区块组件并重写首页为单页站点` | 8 个新区块组件 + index.astro 落地页 |
| `78206e3` | `build(fonts): 移除 Google Fonts 依赖改用系统字体栈` | astro.config.ts + Layout.astro 字体改造 |
| `339bb2c` | `style(theme): 切换为低饱和绿色配色并新增落地页容器` | theme.css + global.css |
| `e18a78a` | `config(site): 更新 DYNPHI 站点元数据并集中落地页文案` | astro-paper.config.ts / config.ts / types/config.ts |
| `b92213f` | `docs(changes): 新增 CHANGES.md 变更记录` | 建立本文件 |

### 破坏性变更

- **博客路由下线：** `src/pages/posts|tags|archives|search|og.png` 已移出 `src/pages`，原 `/posts`、`/tags`、`/archives`、`/search` 路由不再生成。代码完整保留在 `archive/blog-pages/`。
- **OG 图字体依赖：** OG 动态图生成脚本 `og.png.ts` 已随博客归档，Google Fonts 字体 provider 已移除。Landing 与 about 页使用 `public/default-og.jpg` 作为 OG 图。
- **站点字段用途：** `astro-paper.config.ts` 的 `site.title` 等字段现为公司站点语义（DYNPHI），落地页文案通过新增 `landing` 字段集中管理；原 `site` 字段结构未改。

**迁移方式：** 若后续重新启用博客，将 `archive/blog-pages/` 内容移回 `src/pages/`，并在 `astro-paper.config.ts` 中恢复 `fontProviders.google()`（需要能访问 Google Fonts 的构建环境）；动态 OG 图需恢复字体依赖。