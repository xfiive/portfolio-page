# design-sync notes — Portfolio Design System

This repo has **no real design system**. The DS is *extracted* from the
portfolio app (`app/page.tsx`, which holds every component inline) into
`.design-sync/extracted/`, and the converter runs in **synth-entry mode** over
those extracted files. claude.ai/design project: `Portfolio Design System`
(`4a23adf9-b862-436b-87f0-03eb40438f09`).

## How the build is wired (non-standard)

- **No `dist/`.** PKG_DIR would resolve to `node_modules/my-v0-project` (absent),
  so we pass `--entry .design-sync/extracted/index.ts` (a barrel re-exporting all
  9 components). The package.json walk from there lands PKG_DIR on the repo root,
  and `componentSrcMap` (in config) declares + pins all 9 components.
- **Build/validate command (run from the repo ROOT):**
  ```
  node .design-sync/build-css.mjs        # cfg.buildCmd — recompiles cssEntry
  node .ds-sync/package-build.mjs --config .design-sync/config.json \
    --node-modules ./node_modules --entry .design-sync/extracted/index.ts --out ./ds-bundle
  node .ds-sync/package-validate.mjs ./ds-bundle
  ```
- **`build-css.mjs` is mandatory before each `package-build`** when components OR
  previews change: it runs the repo's Tailwind over `.design-sync/tailwind.ds.cjs`
  (content = extracted + previews + app) to produce `cssEntry` (`.design-sync/build/ds.css`).
  A preview-only arbitrary class (e.g. `bg-[#0a2228]`) that isn't recompiled
  renders unstyled — this exact bug bit once during the first sync.
- **`dtsPropsFor` is hand-written for all 9** — synth-entry has no shipped `.d.ts`,
  so auto-extraction emits empty `{ [key: string]: unknown }`. Edit the prop
  contracts there, in `.design-sync/config.json`, not just in the `.tsx`.
- **`safelist` in `.design-sync/tailwind.ds.cjs`** ships the full token palette
  (bg/text/border × ink/ember/paper/muted, fonts, ease-premium, opacity variants)
  so the design agent's vocabulary resolves against the *static* compiled CSS
  (claude.ai/design has no Tailwind JIT at design time).
- **Fonts are REMOTE** (`@import` of Google Fonts in `.design-sync/build/_tw-input.css`)
  → reported as `[FONT_REMOTE]`, by design. Not shipped in `fonts/`.

## Environment

- Playwright: cached chromium **build 1200** lives at `%LOCALAPPDATA%\ms-playwright`
  (the Windows default). Install **playwright@1.57.0** in `.ds-sync` (pins 1200) —
  already done. `typescript@5` is also installed there for the `.d.ts` parse check.
- Run everything from the repo root. A stray `cd` once put `.ds-sync` under
  `.design-sync/build/`; verify `pwd` before staging.
- A transient Windows `EBUSY rmdir ds-bundle` can hit `package-build` (chromium
  handle); just re-run.

## Known render warns

- None. 9/9 render clean. `tokens: 1 missing, below threshold` is non-blocking.

## Re-sync risks (what can silently go stale)

- **The extracted components are a SNAPSHOT of `app/page.tsx`.** If the portfolio's
  inline components change (palette, classes, new sections), `.design-sync/extracted/`
  does NOT auto-update — re-extract by hand. This is the dominant staleness risk.
- **Token duplication:** `.design-sync/tailwind.ds.cjs` duplicates the theme from
  the repo's `tailwind.config.ts`. If the repo's tokens change, update the copy.
- **PortraitFrame preview** uses the live `https://mikhail.shytsko.com/avatar.jpg`.
  If that URL moves/goes down the preview photo breaks (the frame still renders).
- **Remote fonts:** if Google Fonts is unreachable in the render environment,
  text falls back to system fonts. Self-host (cfg.extraFonts) if that ever matters.
- The conventions header (`.design-sync/conventions.md`) names specific token
  classes — re-validate them against the compiled CSS on any token change.
