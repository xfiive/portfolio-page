# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build for production (static export to out/)
pnpm lint       # Run ESLint
```

Deployment: GitHub Actions (`.github/workflows/pages.yml`) builds and deploys to GitHub Pages on every push to `main`. There is no manual deploy script.

Package manager: pnpm (v10.11.0)
Node version: >=18

## Architecture

This is a Next.js 15 single-page portfolio website using the App Router, statically exported (`output: "export"` in next.config.mjs) and deployed to GitHub Pages at https://mikhail.shytsko.com.

### Key Files
- `app/page.tsx` - Entire portfolio in one `"use client"` file. Sections (in order): fixed Header (transparent → ink on scroll), Hero on a baked raster gradient (`public/hero-bg.jpg`, portrait + intro), "Currently building at" band, About/Summary (with Seedfast founder callout), Experience (numbered accordions), Projects (card grid), Education (numbered list), Contact CTA + footer (on `public/contact-bg.jpg`). Section data lives in const arrays (`EXPERIENCE`, `PROJECTS`, `EDUCATION`, …) at the top of the file.
- `app/layout.tsx` - Root layout with ThemeProvider (next-themes, dark mode only); loads Space Grotesk / Inter / JetBrains Mono via `next/font/google` (exposed as `--font-head` / `--font-body` / `--font-mono`); also holds SEO metadata, OG tags, and JSON-LD structured data (ProfilePage schema for AI citation).
- `app/globals.css` - shadcn HSL theme variables (remapped to the ink/red palette) + custom scrollbar.
- `app/robots.ts` / `app/sitemap.ts` - Next.js metadata routes generating `robots.txt` and `sitemap.xml` at build time.
- `components/particles-background.tsx` / `components/email-service.tsx` / `app/api/send-email/route.ts` - **Unused leftovers** from the previous dark-purple particle design (the redesign removed the particle canvas and the contact form). The API route is never deployed under `output: "export"` anyway.

### Tech Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS; design tokens extended in `tailwind.config.ts` (`ink`, `crimson`, `paper`, `muted-light`/`muted-dark`, `font-head/body/mono`, `ease-premium`, `animate-marquee`). shadcn/ui components exist under `components/ui/` but the page itself uses plain Tailwind markup. Lucide icons.
- **Animations**: Framer Motion — staggered fade-up scroll reveals via a `Reveal` helper (`whileInView`, `cubic-bezier(0.16,1,0.3,1)`), wrapped in `MotionConfig reducedMotion="user"`. Accordions animate via the CSS `grid-template-rows: 0fr/1fr` trick, the marquee via a CSS keyframe.
- **Static Export**: No server-side features at runtime; images unoptimized; ESLint and TypeScript errors ignored during builds

### Build-time Behavior
`next.config.mjs` runs `git log -1 --format=%cI` at build time and injects the last commit date as the `NEXT_PUBLIC_LAST_UPDATED` env var (used in the page to show a "last updated" date). Builds outside a git checkout fall back to the current date.

### Path Aliases
- `@/components` → components/
- `@/lib` → lib/
- `@/hooks` → hooks/

### Design Theme
"Premium enterprise-tech" aesthetic inspired by sudolabs.com (see `DESIGN.md`): alternating dark/light section rhythm on a deep purple-black ink canvas with a single red accent. Tokens: `ink-900 #15002e`, `ink-800 #1c0834`, `ink-700 #2e1a4d`, red `#f40000` (hero edge `#e6001a`), light band `paper #f6f5f8`, text-on-light `ink #1b1230`, muted `#6b6478` (light) / `#b9a9c9` (dark). Hero and contact use baked raster gradient backgrounds (`public/hero-bg.jpg`, `public/contact-bg.jpg`, 1440×742, fine grain matched to sudolabs). Type: Space Grotesk headings (tight tracking), Inter body, JetBrains Mono for red uppercase eyebrows/numerals/tags. Purple is only ever a dark background — never neon; red is the only accent. The footer must keep the sudolabs.com palette disclaimer.
