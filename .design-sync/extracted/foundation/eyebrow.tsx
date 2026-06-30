import * as React from "react"

/**
 * The uppercase JetBrains-Mono section label that sits above every heading.
 * Tone tracks the surface it lands on: `dark` (ember on the ink canvas),
 * `light` (ember-deep on the paper band — small text needs the deeper red for
 * WCAG contrast), or `onImage` (white/85, for the baked hero/contact gradients).
 *
 * @category foundation
 */
export interface EyebrowProps {
  children: React.ReactNode
  tone?: "dark" | "light" | "onImage"
}

const TONE: Record<NonNullable<EyebrowProps["tone"]>, string> = {
  dark: "text-ember",
  light: "text-ember-deep",
  onImage: "text-white/85",
}

export function Eyebrow({ children, tone = "dark" }: EyebrowProps) {
  return (
    <span className={`inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] ${TONE[tone]}`}>
      {children}
    </span>
  )
}
