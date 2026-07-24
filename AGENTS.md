# AGENTS.md

## Project

Static landing page (no build step, no bundler, no framework). Served as-is — `index.html` loads CSS and JS files directly. Language is **pt-BR**.

## Architecture

- **Entrypoint:** `index.html` — the only HTML file
- **CSS:** Split into `css/tokens.css` (design tokens), `css/reset.css`, `css/global.css`, `css/utilities.css`, `css/components.css`, `css/animations.css`, plus per-section files under `css/sections/`
- **JS:** `js/main.js` (back-to-top, smooth scroll, mobile menu), `js/gsap-animations.js` (all GSAP + ScrollTrigger animations). `js/word-reveal.js` is **deprecated** — not loaded in HTML
- **GSAP/ScrollTrigger:** Loaded from CDN (`gsap@3.12.5`) in `index.html`, not a local dependency. Animation files reference `gsap` and `ScrollTrigger` as globals
- **Assets:** `assets/alexandre.png` (hero photo). No other image assets

## Key Conventions

- **Design tokens live in `css/tokens.css`** — colors, gradients, spacing, radii, transitions are all CSS custom properties. Do not hardcode values from tokens; use `var(--token-name)`
- **Section styles are one-file-per-section** under `css/sections/` — new sections get their own file and a `<link>` in `index.html`
- **All animations go through GSAP** (never CSS transitions for accordion/tabs/scroll-reveal). CSS `@keyframes` in `animations.css` are limited to decorative loops (shimmer, float, textShine) and initial `opacity:0` states
- **Animation rules:** max duration 0.8s, easing `power2.out`, max y-offset 40px, max stagger 0.12s. Scroll-driven animations use `scrub:1`. No bounce/elastic/back eases
- **Accordion and tab interactions** are fully GSAP-driven (`maxHeight`/`opacity` for accordion, `display`+`opacity` for tabs) — no CSS transitions on those elements

## WhatsApp CTAs

All CTA links point to `api.whatsapp.com/send?phone=553497227855` with different pre-filled messages per context. Do not normalize or consolidate these URLs — each context intentionally has a distinct message

## Gotchas

- Hero elements start with `opacity:0` via `animations.css` and are revealed by `gsap.fromTo()`. If animations fail, hero content will be invisible — never remove the `opacity:0` CSS without also updating GSAP
- Word reveal section uses `pin:true` + `scrub:1` with `end: '+=150%'`. This section pins the viewport during scroll — layout changes here affect scroll length
- `#contato` anchor is placed as a separate `<div>` with negative top offset (`top:-100px`). This offset anchor exists to compensate for the fixed header