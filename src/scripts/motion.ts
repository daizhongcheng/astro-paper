/**
 * DYNPHI homepage micro-interactions (Astro / vanilla, no external deps):
 *  1. Scroll reveal  — fade-up + blur via IntersectionObserver on `.reveal`.
 *  2. Spotlight      — per-card edge glow following the pointer on `.spotlight-card`.
 *  3. Number ticker  — count-up animation for `[data-ticker]` targets.
 *  4. Terminal typing— typewriter effect inside `[data-terminal]`.
 * Call `initMotion()` once after DOM ready.
 */

export function initMotion() {
  bindReveal();
  bindSpotlight();
  bindTickers();
  bindTerminals();
}

/* ---------- 1. Scroll reveal ---------- */
function bindReveal() {
  const els = document.querySelectorAll<HTMLElement>(".reveal");
  if (!els.length) return;
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  els.forEach(el => io.observe(el));
}

/* ---------- 2. Spotlight ---------- */
function bindSpotlight() {
  const cards = document.querySelectorAll<HTMLElement>(".spotlight-card");
  cards.forEach(card => {
    if ((card as any).__spot) return;
    (card as any).__spot = true;
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--sx", `${e.clientX - r.left}px`);
      card.style.setProperty("--sy", `${e.clientY - r.top}px`);
    });
  });
}

/* ---------- 3. Number ticker ---------- */
function bindTickers() {
  const tickers = document.querySelectorAll<HTMLElement>("[data-ticker]");
  if (!tickers.length) return;
  const animate = (el: HTMLElement) => {
    if ((el as any).__ticked) return;
    (el as any).__ticked = true;
    const target = parseFloat(el.getAttribute("data-target") || "0");
    const decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1100;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      const val = target * eased;
      el.textContent = val.toFixed(decimals) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };
  if (!("IntersectionObserver" in window)) {
    tickers.forEach(el => {
      const t = el.getAttribute("data-target") || "0";
      const d = parseInt(el.getAttribute("data-decimals") || "0", 10);
      el.textContent = parseFloat(t).toFixed(d) + (el.getAttribute("data-suffix") || "");
    });
    return;
  }
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  tickers.forEach(el => io.observe(el));
}

/* ---------- 4. Terminal typing ---------- */
function bindTerminals() {
  const terms = document.querySelectorAll<HTMLElement>("[data-terminal]");
  terms.forEach(term => {
    if ((term as any).__typed) return;
    (term as any).__typed = true;
    const delay = parseInt(term.getAttribute("data-delay") || "300", 10);
    const lines = Array.from(term.querySelectorAll<HTMLElement>("[data-type-line]"));
    const cursor = term.querySelector<HTMLElement>("[data-type-cursor]");
    const done = term.querySelector<HTMLElement>("[data-type-done]");
    let li = 0;

    // Initially hide everything except the prompt + cursor.
    lines.forEach(l => (l.style.opacity = "0"));
    if (done) done.style.opacity = "0";

    const typeLine = (line: HTMLElement, text: string, i: number, cb: () => void) => {
      line.style.opacity = "1";
      line.textContent = "";
      let ci = 0;
      const iv = setInterval(() => {
        line.textContent = text.slice(0, ++ci);
        if (ci >= text.length) {
          clearInterval(iv);
          cb();
        }
      }, 14);
      void i;
    };

    const next = () => {
      if (li < lines.length) {
        const line = lines[li];
        const lang = document.documentElement.dataset.lang === "zh" ? "zh" : "en";
        const text =
          line.getAttribute(`data-text-${lang}`) ||
          line.getAttribute("data-text") ||
          "";
        line.classList.remove("term-line");
        typeLine(line, text, li, () => {
          li++;
          setTimeout(next, 120);
        });
      } else {
        if (cursor) cursor.style.display = "inline-block";
        if (done) done.style.opacity = "1";
        if (done) {
          done.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
      }
    };
    setTimeout(next, delay);
  });
}

// Re-run handlers after client navigation (Astro view transitions).
document.addEventListener("astro:after-swap", initMotion);