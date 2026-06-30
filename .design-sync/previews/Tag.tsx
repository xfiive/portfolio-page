import type { ReactNode } from "react"
import { Tag } from "my-v0-project"

function Stage({ children, surface }: { children: ReactNode; surface: "ink" | "paper" }) {
  return (
    <div className={`${surface === "ink" ? "bg-ink-900" : "bg-paper"} flex flex-wrap items-center gap-2 px-10 py-12`}>
      {children}
    </div>
  )
}

export function Tech() {
  return (
    <Stage surface="paper">
      <Tag variant="tech">Kotlin</Tag>
      <Tag variant="tech">Spring</Tag>
      <Tag variant="tech">MCP</Tag>
      <Tag variant="tech">Apache Kafka</Tag>
    </Stage>
  )
}

export function AccentDark() {
  return (
    <Stage surface="ink">
      <Tag variant="accent-dark">Founder</Tag>
    </Stage>
  )
}

export function AccentLight() {
  return (
    <Stage surface="paper">
      <Tag variant="accent-light">Languages</Tag>
    </Stage>
  )
}
