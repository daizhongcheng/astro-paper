// DYNPHI is a fixed dark theme (no light/dark toggle).
// This script only keeps the <meta name="theme-color"> in sync with the
// actual background colour so mobile browser chrome matches the page.

const DARK = "dark";

function reflect(): void {
  const root = document.firstElementChild;
  root?.setAttribute("data-theme", DARK);
  root?.classList.add(DARK);
  const bg = window.getComputedStyle(document.body).backgroundColor;
  document
    .querySelector("meta[name='theme-color']")
    ?.setAttribute("content", bg);
}

reflect();

// Re-run after View Transitions navigation.
document.addEventListener("astro:after-swap", reflect);

// Carry the theme-color value across View Transitions to prevent the
// Android navigation bar from flashing during page transitions.
document.addEventListener("astro:before-swap", event => {
  const color = document
    .querySelector("meta[name='theme-color']")
    ?.getAttribute("content");
  if (color) {
    (event as { newDocument: Document }).newDocument
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }
});