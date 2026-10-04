/**
 * Client-side language switching for the DYNPHI landing page.
 *
 * Approach: the landing copy for both languages is merged into arrays
 * (`DATA_EN`, `DATA_ZH`), and every localised string element carries
 * `data-i18n="key"` + a `data-zh` / `data-en` copy attribute authored in the
 * component. On load we pick a default language (explicit cookie >> browser
 * language starting with zh >> English), then we swap the text content of all
 * `[data-i18n]` nodes and flip `.data-lang` classes accordingly.
 *
 * Call `initI18n()` once after DOM ready.
 */

const STORAGE_KEY = "dynphi-lang";

function detectDefaultLanguage(): "en" | "zh" {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "zh" || saved === "en") return saved;
  } catch {
    /* storage disabled */
  }
  if (typeof navigator !== "undefined") {
    const nav = navigator.language || "";
    if (nav.toLowerCase().startsWith("zh")) return "zh";
  }
  return "en";
}

function applyLanguage(lang: "en" | "zh") {
  document.documentElement.dataset.lang = lang;
  // Flip text of every localised node.
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach(node => {
    const zh = node.getAttribute("data-zh");
    const en = node.getAttribute("data-en");
    if (zh === null || en === null) return;
    node.textContent = lang === "zh" ? zh : en;
  });
  // Sync the toggle button label / aria-pressed state.
  document.querySelectorAll<HTMLElement>("[data-lang-toggle]").forEach(btn => {
    btn.setAttribute(
      "aria-pressed",
      String(btn.getAttribute("data-lang-toggle") === lang)
    );
    const labelEn = btn.getAttribute("data-label-en");
    const labelZh = btn.getAttribute("data-label-zh");
    if (labelEn && labelZh) btn.textContent = lang === "zh" ? labelZh : labelEn;
  });
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
}

export function initI18n() {
  const initial = detectDefaultLanguage();
  applyLanguage(initial);
}

export function setLanguage(lang: "en" | "zh") {
  applyLanguage(lang);
}

/**
 * Toggle between zh <-> en based on the *current* state.
 * Relies on the live `document.documentElement.dataset.lang`, so every click
 * flips the language (en->zh or zh->en) and persists the new value.
 */
export function toggleLanguage(): "en" | "zh" {
  const next: "en" | "zh" = getLanguage() === "zh" ? "en" : "zh";
  applyLanguage(next);
  return next;
}

export function getLanguage(): "en" | "zh" {
  return document.documentElement.dataset.lang === "zh" ? "zh" : "en";
}