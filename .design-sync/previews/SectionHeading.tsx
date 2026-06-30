import { SectionHeading } from "my-v0-project"

export function OnInk() {
  return (
    <div className="bg-ink-900 px-10 py-14">
      <SectionHeading
        tone="dark"
        eyebrow="Projects"
        title="Selected work."
        description="A mix of products, platforms and developer tooling — built to be owned, not just demoed."
      />
    </div>
  )
}

export function OnPaper() {
  return (
    <div className="bg-paper px-10 py-14">
      <SectionHeading tone="light" eyebrow="Experience" title="Where I've shipped." />
    </div>
  )
}
