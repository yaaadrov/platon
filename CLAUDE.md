# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for "Мастерская Платона" — a custom woodworking/furniture workshop. One-page site in Russian, fully responsive (desktop + mobile). The site must feel calm, confident, and professional — matching the brand's character (not aggressive, not corporate, no exclamation marks or marketing clichés).

## Tech Stack

- **Next.js** (static export) + **TypeScript**
- **Tailwind CSS** — styling & responsive layout
- **Framer Motion** — scroll-triggered animations, page transitions
- **Lenis** — smooth scrolling via `lenis/react`
- **Deploy**: Vercel (free tier, `next build` + static export)

## Commands

```bash
npm run dev       # Start dev server
npm run build     # Production build (static export)
npm run start     # Serve production build locally
npm run lint      # Run ESLint
```

## Brandbook Specifications

### Color Palette

| Role             | Hex       | Usage                                    |
|------------------|-----------|------------------------------------------|
| Главный (Main)   | `#291806` | Primary backgrounds, hero sections       |
| Вторичный (Sec.) | `#D8C3A4` | Accent elements, borders, secondary text |
| Дополнительный   | `#1B1D1C` | Near-black accent, dark sections         |
| Нейтральный      | `#F4EFE9` | Light backgrounds, body text on dark     |

### Typography

- **SOVMOD** — Logo, headings (h1–h3), accents. Bold, geometric, all-caps for key titles.
- **Poiret One** — Body text, captions, cards, descriptions. Elegant, lighter weight.

Both fonts are available on Google Fonts. Load via `next/font` or Google Fonts CDN.

### Logo

- Symbol: a hand plane (столярный рубанок) — flat, no shadows, technical illustration style.
- Meaning: "remove the excess, leave what's precise" (убрать лишнее, оставить точное).
- Min size: 80px digital / 20mm print.
- **Never**: stretch, rotate, tilt, change colors, add effects, place on busy backgrounds, use below minimum size.

### Brand Voice

- Calm, confident, professional, specific.
- Emphasize: materiality (wood, texture, grain), precision (control, system), humanity (real master, not faceless production).
- **Forbidden**: emotional slogans, aggressive sales language, corporate jargon, exclamation marks, marketing clichés.

## Site Sections — Detailed Design Spec

### Section 1: Hero / Landing

**Layout**: Full viewport height (`100vh`), centered content, no scroll needed to see everything.

**Background**: `#291806` (Главный). Solid fill — no gradients, no images. The darkness creates a strong first impression and lets the logo/text stand out.

**Content** (vertically centered, stacked):

1. **Logo** (`photos/logo.png`) — centered, rendered in `#D8C3A4` (Вторичный) on the dark background. Size: ~120px width on desktop, ~90px on mobile.
2. **Workshop name** — "МАСТЕРСКАЯ ПЛАТОНА" — font: SOVMOD, all-caps, size: clamp(2rem, 5vw, 4rem), color: `#F4EFE9` (Нейтральный), letter-spacing: 0.15em. Below the logo with ~24px gap.
3. **Tagline** — "Авторская мебель из дерева" — font: Poiret One, size: clamp(1rem, 2vw, 1.5rem), color: `#D8C3A4`, letter-spacing: 0.08em. Below the name with ~12px gap.

**Scroll indicator**: At the bottom of the viewport, centered. A thin vertical line (`#D8C3A4`, 1px wide, ~40px tall) with a subtle pulse animation (opacity 0.3→0.7→0.3, 2s loop). Above it, tiny text "листайте вниз" in Poiret One, `#D8C3A4` at 0.5 opacity, font-size 0.7rem, letter-spacing 0.1em.

**Entry animation**: On page load, content fades in with a slight upward motion using Framer Motion `motion.div` with `initial={{ opacity: 0, y: 30 }}` → `animate={{ opacity: 1, y: 0 }}`, duration 1.2s, ease "easeOut". Logo appears first (delay 0), then name (delay 0.3s), then tagline (delay 0.6s), then scroll indicator (delay 1.2s).

**Scroll behavior**: As user scrolls past the hero, the entire hero block fades out and slightly scales down (0.95) using `useScroll` + `useTransform` on `scrollYProgress` range [0, 0.15].

---

### Section 2: About the Workshop

**Background**: `#F4EFE9` (Нейтральный) — warm light surface. Provides visual contrast with the dark hero above.

**Layout**: Two-column on desktop (master photo left, text right), single column stacked on mobile (photo on top, text below). Max-width container: 1200px, centered, padding: 80px horizontal on desktop, 24px on mobile.

**Left column — Master photo**:
- `photos/master.jpg`, displayed in a rectangular frame with 8px border in `#D8C3A4`.
- Desktop: width ~45% of container, height auto (aspect ratio preserved).
- Mobile: full width, max-height 400px, object-fit cover.
- Entry animation: photo slides in from left (`x: -60 → 0`) with fade-in, triggered when section enters viewport (Framer Motion `whileInView`, viewport `{ once: true, amount: 0.3 }`), duration 0.8s.

**Right column — Text content**:

1. **Section label** — "О МАСТЕРСКОЙ" — font: SOVMOD, all-caps, size: 0.75rem, color: `#291806` at 0.5 opacity, letter-spacing: 0.2em. Upper margin: 0.
2. **Heading** — "Мастерская Платона" — font: SOVMOD, size: clamp(1.8rem, 3vw, 2.8rem), color: `#291806`, letter-spacing: 0.02em. Margin top: 12px.
3. **Philosophy text** — "Мастерская Платона строится на уважении к материалу, ремеслу и процессу. Здесь дерево не маскируется под декор, а сохраняет естественную структуру, текстуру и характер. Работа строится без компромиссов между качеством и скоростью: изделие создаётся столько, сколько требует точность." — font: Poiret One, size: clamp(1rem, 1.5vw, 1.2rem), line-height 1.7, color: `#291806`. Margin top: 24px.
4. **Principles** — four lines, each preceded by an em-dash:
   - — честность к материалу
   - — честность к технологии
   - — честность к клиенту
   - — честность к срокам и ожиданиям
   Font: Poiret One, same size as philosophy, color: `#D8C3A4` (on dark) — **wait**, background is light here, so color should be `#291806` with slightly reduced opacity (0.8) or simply same as philosophy text. Use `#291806` at full color with a left border accent of 2px in `#D8C3A4`. Margin top: 20px.
5. **USP line** — "Полный цикл работы одним исполнителем. Заказчик взаимодействует напрямую с мастером на всех этапах." — font: Poiret One, italic or same weight, size same as philosophy, color: `#291806`. Margin top: 32px. Could be set apart with a thin `#D8C3A4` divider line above it (1px, 60px wide, left-aligned).

**Entry animation**: Text content slides in from right (`x: 60 → 0`) with fade-in, `whileInView`, same trigger as photo. Duration 0.8s, delay 0.2s after photo.

**Section padding**: padding-top: 120px, padding-bottom: 120px on desktop; 80px each on mobile.

---

### Section 3: Gallery / Products

**Background**: `#1B1D1C` (Дополнительный) — near-black, creates a dark gallery feel. Makes the furniture photos pop as bright focal points.

**Section header**: Centered at the top of the section, before the card stack begins. "ИЗДЕЛИЯ" — font: SOVMOD, all-caps, size: clamp(1.8rem, 3vw, 2.8rem), color: `#D8C3A4`, letter-spacing: 0.15em. Below it a thin horizontal line (1px, 40px wide, `#D8C3A4` at 0.5 opacity), centered. Padding-top: 100px.

**Card-stack implementation** (adapted from `skiper16.tsx`):

- Container: `position: relative`, `padding-bottom: 100vh` (extra scroll space for the stacking effect). `useScroll` tracks `scrollYProgress` over the container with `offset: ["start start", "end end"]`.
- Each card is a `sticky` element (`position: sticky, top: 0`), centered, using `flex items-center justify-center`.
- Card dimensions: desktop `500px × 350px` (landscape orientation suits furniture photos); mobile `85vw × 60vw`. Rounded corners: `border-radius: 16px` (`rounded-2xl`). Overflow hidden.
- Card content: a single `<img>` with `object-fit: cover`, filling the entire card. No text overlay on cards — let the photos speak.
- **Stacking animation**: Each card has `useTransform(progress, range, [1, targetScale])` where `targetScale = max(0.5, 1 - (totalCards - i - 1) * 0.1)`. Range for card i: `[i * (1/totalCards) * 0.75, 1]`. As the next card appears over the current one, the current card scales down slightly and stays behind, creating the stacking effect.
- Card offset: `top: calc(-5vh + ${i * 20 + 250}px)` on desktop, adjusted for mobile (`i * 15 + 200px`).
- **Card border**: subtle 1px border in `#D8C3A4` at 0.3 opacity — just enough to separate cards visually when stacked.

**Scroll hint**: Before the card stack, centered text "листайте, чтобы увидеть изделия" in Poiret One, `#D8C3A4` at 0.4 opacity, font-size 0.8rem, letter-spacing 0.08em. Same pulse-style subtle animation as hero scroll indicator.

**Data**: 6 cards, one per image in `photos/furniture/img1.jpg` through `img6.jpg`.

**Section padding**: padding-bottom: 100vh (required for scroll space), padding-top: 60px.

---

### Section 4: Contacts

**Background**: `#291806` (Главный) — returns to the dark tone, bookending the site (dark hero → light about → dark gallery → dark contacts).

**Layout**: Centered, minimal. Vertically centered in viewport (`min-height: 60vh`, `flex items-center justify-center`).

**Content** (stacked, centered):

1. **Section label** — "КОНТАКТЫ" — font: SOVMOD, all-caps, size: 0.75rem, color: `#D8C3A4` at 0.5 opacity, letter-spacing: 0.2em.
2. **Heading** — "Связаться с мастерской" — font: SOVMOD, size: clamp(1.8rem, 3vw, 2.8rem), color: `#F4EFE9`, letter-spacing: 0.02em. Margin top: 12px.
3. **Phone number** — "+7 (921) 386-44-64" — font: Poiret One, size: clamp(1.2rem, 2vw, 1.8rem), color: `#D8C3A4`. Rendered as a `<a href="tel:+79213864464">` link. Hover: underline, color shifts to `#F4EFE9`. Margin top: 32px. No Telegram link.
4. **Closing line** — small text at the bottom of the section: "Мастерская Платона © 2025" — font: Poiret One, size: 0.75rem, color: `#D8C3A4` at 0.4 opacity.

**Entry animation**: Content fades in upward (`y: 40 → 0, opacity: 0 → 1`), `whileInView`, duration 0.8s.

**Section padding**: padding-top: 100px, padding-bottom: 60px.

---

### Global Scrolling & Transitions

- **Lenis** (`ReactLenis root`) wraps the entire page for butter-smooth scrolling.
- **Between-section dividers**: no visible dividers. Sections transition purely through background color changes, which are hard-cut (no gradient fades between sections).
- **Viewport entry animations**: All sections use Framer Motion `whileInView` with `viewport: { once: true, amount: 0.2 }` so animations play only once when first scrolled into view.

### Responsive Breakpoints

- Mobile: < 768px — single-column layouts, reduced padding, smaller card sizes.
- Desktop: >= 768px — two-column About section, full card sizes.

## Assets

- **Logo**: `photos/logo.png`
- **Master photo**: `photos/master.jpg`
- **Furniture gallery**: `photos/furniture/img1.jpg` through `img6.jpg`

## Animation Reference

`skiper16.tsx` demonstrates the target gallery interaction pattern:
- Uses `framer-motion` (`motion`, `useScroll`, `useTransform`) + `lenis/react` (`ReactLenis`)
- Sticky cards that scale down progressively as the user scrolls
- `scrollYProgress` drives card scale transforms via `useTransform`
- Implement this pattern for the Gallery section; adapt for product furniture photos

## Key Implementation Notes

- All text content must be in **Russian**.
- All scroll animations should feel smooth and intentional — Lenis handles smooth scrolling globally.
- Respect brandbook color constraints strictly — no invented palette colors.
- Logo usage rules from brandbook are non-negotiable (no stretching, color changes, effects, etc.).
- Mobile responsiveness is a hard requirement — test all sections at mobile breakpoints.
- Static export (`output: 'export'` in `next.config.js`) is required for Vercel free-tier deployment.
