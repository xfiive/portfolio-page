# Design System — "Sudolabs-inspired" portfolio restyle

This document describes a new design system for `mikhail.shytsko.com`, inspired by
[sudolabs.com](https://sudolabs.com/). It is **not a copy** — we extract their principles
(palette, typography, spacing, section patterns, motion) and apply them to your content.

Status: **draft for review.** No code yet — we agree on the direction first.

---

## 1. What we take from Sudolabs

Their aesthetic is "premium enterprise-tech": high contrast, lots of breathing room,
restrained but bold red. Key observations from the live site:

| Technique | How they do it | What we adopt |
|---|---|---|
| **Red hero** | Full-screen red gradient (≈`#e0001a` → dark maroon/black), white text | Hero section as a "cover", a large gradient instead of neon particles |
| **Theme alternation** | Dark purple-black sections ↔ light near-white sections | A "dark / light" rhythm between blocks instead of one solid dark background |
| **Eyebrow labels** | Small RED uppercase monospace text with letter-spacing above the heading (`AI CAPABILITIES`) | A mini-label above each section (`EXPERIENCE`, `PROJECTS`…) |
| **Huge headings** | Very large bold grotesk, 2 lines | Hero and section headings larger and bolder than current |
| **Numbering** | Red `01 / 02 / 03` on steps and accordions | Work experience / projects as a numbered list |
| **Stat blocks** | Giant figures (`90%+`, `500+`) + caption | A block of key metrics (years of experience, projects, etc.) |
| **Cards** | Grid of case studies, slightly raised cards on dark | Project and experience cards |
| **Accordions** | FAQ and "capabilities" with number + chevron | Expandable work experience (already present) + an FAQ block |
| **Hairline dividers** | Thin lines between list items | Dividers in the experience/education lists |
| **Buttons** | Outline button, uppercase, letter-spacing (`LET'S TALK`) | "Contact" CTA in the same style |

---

## 2. Palette

Your current colors (`#1a0033` + `#c10000`) are **already close** to sudolabs — their dark
sections are also a deep purple-black, and the accent is red. So the restyle is mostly
refining the shades + adding a light theme for the alternation.

### Tokens (HSL format — to fit the existing CSS variables in `globals.css`)

| Role | Hex | HSL | Purpose |
|---|---|---|---|
| `ink-900` (dark bg) | `#16001f` | `280 100% 6%` | Background of dark sections (a touch deeper than current) |
| `ink-800` (card) | `#21082f` | `283 71% 11%` | Cards/header on dark |
| `ink-700` (border) | `#3a1d4d` | `274 45% 21%` | Borders, hairlines on dark |
| `red-600` (primary) | `#d10000` | `0 100% 41%` | Primary accent, links, numbers |
| `red-500` (hero) | `#e6001a` | `353 100% 45%` | Bright edge of the hero gradient |
| `paper-50` (light bg) | `#f6f5f8` | `260 18% 97%` | Background of light sections |
| `paper-100` (card-light) | `#ffffff` | `0 0% 100%` | Cards on light |
| `ink-on-paper` | `#1b1230` | `262 45% 13%` | Text/headings on light |
| `muted-on-paper` | `#6b6478` | `265 9% 43%` | Secondary text on light |
| `muted-on-dark` | `#b9a9c9` | `276 24% 73%` | Secondary text on dark |

> Decision for review: **drop purple entirely as a "neon" color** and keep it only as a
> deep dark background. The accent is exclusively red. This gives a more "premium" look,
> like sudolabs. (Alternative — keep a subtle purple glow; tell me if you want a compromise.)

### Hero gradient
```css
/* radial/diagonal red, like sudolabs */
background: radial-gradient(120% 120% at 30% 30%, #e6001a 0%, #b00014 35%, #2a0010 75%, #16001f 100%);
```

---

## 3. Typography

Sudolabs uses a bold grotesk for headings and monospace for labels.
Free equivalents for Next.js (`next/font/google`), with no licensing risk:

- **Display headings:** `Space Grotesk` *(or `Inter Tight` — more neutral)*
- **Body:** `Inter`
- **Eyebrow labels / mono numerals:** `JetBrains Mono` *(or `Geist Mono`)*

### Scale

| Token | Size (desktop) | Weight | Usage |
|---|---|---|---|
| `display-xl` | `clamp(3rem, 7vw, 6rem)` | 700 | Hero heading |
| `display-lg` | `clamp(2.25rem, 4.5vw, 3.75rem)` | 700 | Section headings |
| `heading` | `1.5rem` | 600 | Cards, items |
| `body` | `1rem` / `1.125rem` | 400 | Body text |
| `eyebrow` | `0.75rem`, `letter-spacing: 0.15em`, uppercase, mono | 500 | Section labels (red) |
| `stat` | `clamp(2.5rem, 5vw, 4.5rem)` | 700 | Large metric figures |

Headings — tight `line-height: 1.05`, negative tracking `-0.02em`.

---

## 4. Spacing and grid

- **Container:** `max-w-6xl` (≈1152px), side padding `px-6 md:px-8`.
- **Vertical section rhythm:** `py-24 md:py-32` (sudolabs is very "airy").
- **Card grid:** 1 → 2 → 3 columns (`grid md:grid-cols-2 lg:grid-cols-3`, `gap-6`).
- **Radii:** bump `--radius` from `0.5rem` to `0.75rem` (softer, like their cards).
- **Shadows:** on light — soft (`shadow-sm`/`shadow-md`); on dark — no shadows, separation via border.

---

## 5. Component patterns

1. **Section eyebrow** — `<p class="eyebrow text-red-600">EXPERIENCE</p>` above each `display-lg` heading.
2. **Numbered list** — large red `01` on the left, heading + description on the right, hairline divider below. For experience and "how I work".
3. **Stat row** — 3–4 large figures (`stat`) with captions: e.g. "6+ years of experience", "N projects", "AI / Solutions".
4. **Project card** — card with category tags (uppercase mono), title, description, arrow link.
5. **Accordion** — number + title + chevron; expansion via Framer Motion (you already have this for experience — bring it to the new style).
6. **CTA button** — `outline`, uppercase, `letter-spacing`, red fill on hover.
7. **Logo / skill marquee** — a horizontal scrolling strip (like their client logos) → your tech stack.
8. **Footer CTA** — large heading "Let's talk" + button, like their `Let's map your AI opportunity`.

---

## 6. Motion

Sudolabs has restrained motion, no "neon". Proposal:

- **Remove/soften** the canvas particles (`particles-background.tsx`): either delete them, or
  replace with a static red gradient + subtle noise. The cursor-following particles are the
  main "non-premium" element right now.
- **Reveal on scroll:** staggered fade-up (`opacity 0→1`, `y 16→0`), duration 0.5s, ease `[0.16,1,0.3,1]`.
- **Hover:** cards lift slightly (`-translate-y-1`) + border turns red.
- **Parallax** kept only in the hero, very subtle.

---

## 7. Section alternation (proposed rhythm)

| Section | Theme |
|---|---|
| Header (sticky) | Dark, transparent → `ink-800` on scroll |
| Hero / About | **Red gradient** |
| Stats | Light (`paper-50`) |
| Summary | Dark (`ink-900`) |
| Experience | Light |
| Projects | Dark |
| Education | Light |
| FAQ *(new, optional)* | Dark |
| Contact / Footer CTA | Red gradient → dark |

---

## 8. File changes (implementation plan, after approval)

- `app/globals.css` — new CSS variables (palette above), radius, scrollbar tuned to red/dark.
- `tailwind.config.ts` — font tokens, extra colors (`paper`, `ink`), `eyebrow`/`stat` utilities.
- `app/layout.tsx` — wire up fonts via `next/font` (Space Grotesk + Inter + JetBrains Mono).
- `app/page.tsx` — apply section patterns, eyebrow labels, theme alternation, numbering.
- `components/particles-background.tsx` — simplify/replace (see §6).
- *(optional)* a new `components/marquee.tsx` component for the skills strip.

---

## 9. Open questions for you

1. **Purple:** drop it entirely (dark background only) or keep a subtle glow? *(default — drop it)*
2. **Particles:** delete, simplify to a gradient, or keep as is?
3. **Fonts:** `Space Grotesk` (distinctive) or `Inter Tight` (more neutral) for headings?
4. **FAQ section:** add a new one (like theirs) or not needed for a portfolio?
5. **Stats content:** which 3–4 metrics to show (years of experience / projects / stack)?
