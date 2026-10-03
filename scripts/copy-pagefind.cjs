// Cross-platform helper: copy dist/pagefind into public/ after build.
// Uses a manual recursive walk to avoid fs.cpSync stack-overflow on large trees.
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const src = path.join(root, "dist", "pagefind");
const dest = path.join(root, "public", "pagefind");

function copyDir(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const s = path.join(from, entry.name);
    const d = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else if (entry.isFile()) {
      fs.copyFileSync(s, d);
    }
  }
}

try {
  if (fs.existsSync(src)) {
    fs.rmSync(dest, { recursive: true, force: true });
    copyDir(src, dest);
    console.log("pagefind copied to public/pagefind");
  } else {
    console.log("pagefind output not found; skipping copy");
  }
} catch (err) {
  console.warn("pagefind copy skipped:", err.message);
  process.exit(0);
}