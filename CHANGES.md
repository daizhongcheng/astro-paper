# CHANGES

## 2026-10-03 — feature/dynphi-homepage — 首次改造：DYNPHI 公司官网落地页

- **Commit:** 见下方各条记录
- **改动概述：** 将 AstroPaper 博客模板改造为 DYNPHI 公司官网单页落地页。
- **影响范围：** 首页（src/pages/index.astro）重写为单页落地页；新增 Navbar / Hero / Overview / ProductCards / TechStack / GitHubCta / About / Footer 八个区块组件；更新站点元数据与落地页文案集中到 astro-paper.config.ts / config.ts；配色切换为低饱和绿色系；移除 Google Fonts 运行时依赖改用系统字体栈；博客页面（posts/tags/archives/search/og.png）移出 `src/pages` 归档到 `archive/blog-pages/` 保留代码，`src/content/` 内容集合保留以备后续扩展；更新 404 / about 页面组件复用。
- **配置或依赖变更：** 是。astro.config.ts（字体 provider 变更、fonts 置空）、tsconfig.json（exclude 增加 archive）、pnpm-workspace.yaml（补充 packages 字段以修复安装）、package.json 未变。

### 提交明细
- `docs(changes): 新增 CHANGES.md` — 建立本变更记录。
- `config(site): 更新 DYNPHI 站点元数据并集中落地页文案` — astro-paper.config.ts / src/config.ts / src/types/config.ts。
- `style(theme): 切换为低饱和绿色配色并新增落地页容器` — theme.css / global.css。
- `build(fonts): 移除 Google Fonts 依赖改用系统字体栈` — astro.config.ts / Layout.astro。
- `feat(landing): 新增落地页区块组件并重写首页` — components/ + index.astro。
- `refactor(pages): 归档博客页面并保留内容集合` — archive/blog-pages/ + tsconfig.json。
- `fix(pages): 404 与 about 复用新导航组件` — 404.astro / about.astro / about.md。

> **破坏性变更：** `src/pages/posts|tags|archives|search|og.png` 已移出，原博客路由不再生成；`src/config.ts` 的 `site.title` 等字段用途变更为公司站点元数据。迁移方式见交付说明。

> **注意：** 本次交付在云端沙箱完成构建验证，未在当前仓库实际运行过安装（共享盘 I/O 慢）。commit hash 依赖的构建产物来自 /tmp 验证副本，地址一致。