import * as React from "react"
import { Eyebrow } from "./eyebrow"

/**
 * The recurring section header: a mono `Eyebrow` over a large Space-Grotesk
 * display heading, with an optional supporting paragraph. `tone` switches the
 * whole block between the ink canvas (`dark`) and the paper band (`light`).
 *
 * @category foundation
 */
export interface SectionHeadingProps {
  eyebrow: string
  title: React.ReactNode
  tone?: "dark" | "light"
  /** optional supporting line rendered under the heading */
  description?: React.ReactNode
}

export function SectionHeading({ eyebrow, title, tone = "dark", description }: SectionHeadingProps) {
  const headColor = tone === "light" ? "text-ink" : "text-white"
  const descColor = tone === "light" ? "text-muted-light" : "text-muted-dark"
  return (
    <div>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3.5 max-w-[18ch] font-head text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em] ${headColor}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-[42ch] text-[1.05rem] leading-[1.55] ${descColor}`}>{description}</p>
      ) : null}
    </div>
  )
}
