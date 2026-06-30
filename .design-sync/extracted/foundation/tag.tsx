import * as React from "react"

/**
 * The hairline mono pill used for tech stacks and labels. Three on-brand
 * variants: `tech` (muted outline on the paper band — the experience tech
 * tags), `accent-dark` (ember text on the ink canvas — the "Founder" pill),
 * `accent-light` (ember-deep on paper — the "Languages" pill).
 *
 * @category foundation
 */
export interface TagProps {
  children: React.ReactNode
  variant?: "tech" | "accent-dark" | "accent-light"
}

const VARIANTS: Record<NonNullable<TagProps["variant"]>, string> = {
  tech: "border-ink/20 px-[11px] py-[5px] text-[0.68rem] tracking-[0.08em] text-muted-light",
  "accent-dark": "border-ink-700 px-2.5 py-[5px] text-[0.62rem] tracking-[0.14em] text-ember",
  "accent-light": "border-ink/20 px-2.5 py-[5px] text-[0.62rem] tracking-[0.14em] text-ember-deep",
}

export function Tag({ children, variant = "tech" }: TagProps) {
  return (
    <span className={`inline-block rounded-full border font-mono uppercase ${VARIANTS[variant]}`}>{children}</span>
  )
}
