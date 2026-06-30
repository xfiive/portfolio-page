# Portfolio Design System — how to build with it

A small, opinionated kit extracted from the mikhail.shytsko.com portfolio:
"premium enterprise-tech" in a **petrol + vermilion** palette. Components are
plain React, styled entirely with **Tailwind utility classes** against a custom
token scale — there is no theme provider and no CSS-in-JS.

## Setup

- **Load `styles.css` once at the app root.** It `@import`s the compiled
  component CSS (`_ds_bundle.css` — tokens + every utility the components use)
  and pulls the three brand fonts from Google Fonts. Without it, components
  render unstyled.
- **No provider, no context.** Render any component directly from
  `window.PortfolioDS.<Name>`; nothing needs wrapping.
- Components are surface-aware: most are built for the **dark ink canvas**
  (`ProjectCard`, `FounderCallout`, `Button`, `PortraitFrame`), a few for the
  **light paper band** (`ExperienceItem`, `EducationItem`). Several take a
  `tone="dark" | "light"` (or `"onImage"`) prop — match it to the surface.

## Styling idiom — the token vocabulary

Style your own layout glue with these utility families (real names from the
compiled stylesheet). **Vermilion is the only accent.**

| Role | Classes |
|---|---|
| Dark surfaces | `bg-ink-900` (#04191d, primary canvas) · `bg-ink-800` (#07242a, cards) · `bg-ink-700`/`border-ink-700` (#16363d, hairlines & hover) |
| Light surface | `bg-paper` (#f5f4f0) · `text-ink` (#0c1b1e) · `border-ink/15` (hairlines) |
| Accent | `text-ember`/`bg-ember`/`border-ember` (#ff4d14, on dark) · `text-ember-deep` (#c0320b, on paper — small text needs the deeper red for contrast) |
| Muted text | `text-muted-dark` (#a3b8b6, on ink) · `text-muted-light` (#65696a, on paper) · `text-white/85` (on image gradients) |
| Type | `font-head` (Space Grotesk — display headings, tight tracking e.g. `tracking-[-0.02em]`) · `font-body` (Inter — body) · `font-mono` (JetBrains Mono — UPPERCASE eyebrows/tags/dates, `uppercase tracking-[0.12em]`) |
| Motion | `ease-premium` (cubic-bezier(0.16,1,0.3,1)) on transitions · hover lifts (`hover:-translate-y-1` / `-translate-y-px`) |

Page rhythm: alternate full-bleed `bg-ink-900` and `bg-paper` sections; wrap
content in `mx-auto w-full max-w-6xl px-6 md:px-8`. Eyebrow → big `font-head`
heading is the recurring section opener (`SectionHeading` does exactly this).

## Where the truth lives

- `styles.css` and the `_ds_bundle.css` it imports — the tokens and every
  utility class, authoritative.
- Each component's `<Name>.prompt.md` (usage + props) and `<Name>.d.ts` (the
  exact prop contract). Read these before composing a component.

## One idiomatic snippet

```tsx
// window.PortfolioDS
import { SectionHeading, ProjectCard } from "PortfolioDS"

export function Work() {
  return (
    <section className="bg-ink-900 py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Projects"
          title="Selected work."
          description="A mix of products, platforms and developer tooling."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 min-[980px]:grid-cols-3">
          <ProjectCard
            title="Seedfast"
            href="https://seedfa.st"
            categories={["PostgreSQL", "LLM", "CLI"]}
            description="Schema-aware synthetic data, generated in under 3 minutes."
          />
        </div>
      </div>
    </section>
  )
}
```
