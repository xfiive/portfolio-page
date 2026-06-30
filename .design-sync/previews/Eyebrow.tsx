import type { ReactNode } from "react"
import { Eyebrow } from "my-v0-project"

function Stage({ children, surface }: { children: ReactNode; surface: "ink" | "paper" }) {
  return <div className={`${surface === "ink" ? "bg-ink-900" : "bg-paper"} px-10 py-12`}>{children}</div>
}

export function OnInk() {
  return (
    <Stage surface="ink">
      <Eyebrow tone="dark">Software &amp; AI Engineer</Eyebrow>
    </Stage>
  )
}

export function OnPaper() {
  return (
    <Stage surface="paper">
      <Eyebrow tone="light">Currently building at</Eyebrow>
    </Stage>
  )
}

export function OnImage() {
  return (
    <div className="bg-[#0a2228] px-10 py-12">
      <Eyebrow tone="onImage">Contact</Eyebrow>
    </div>
  )
}
