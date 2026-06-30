// Compile the extracted design system's Tailwind stylesheet → .design-sync/build/ds.css.
// This is cfg.buildCmd: run it (from the repo root) before the converter whenever
// the extracted components or their previews change. Uses the repo's own
// tailwindcss install so output matches what Next would produce.
import { execFileSync } from "node:child_process"
import { existsSync } from "node:fs"
import { resolve } from "node:path"

const root = process.cwd()
const cli = resolve(root, "node_modules/tailwindcss/lib/cli.js")
if (!existsSync(cli)) {
  console.error(`tailwindcss not found at ${cli} — run the repo install (pnpm i) first.`)
  process.exit(1)
}

execFileSync(
  process.execPath,
  [
    cli,
    "-c", resolve(root, ".design-sync/tailwind.ds.cjs"),
    "-i", resolve(root, ".design-sync/build/_tw-input.css"),
    "-o", resolve(root, ".design-sync/build/ds.css"),
  ],
  { stdio: "inherit", cwd: root },
)
console.error("✓ wrote .design-sync/build/ds.css")
