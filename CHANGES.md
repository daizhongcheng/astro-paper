# CHANGES

> 记录按时间倒序排列，最新改动在最上方。每次改动追加在文件顶部，不覆盖历史。

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