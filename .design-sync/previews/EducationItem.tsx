import type { ReactNode } from "react"
import { EducationItem } from "my-v0-project"

function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-paper p-8">
      <div className="border-t border-ink/15">{children}</div>
    </div>
  )
}

export function Degree() {
  return (
    <Stage>
      <EducationItem
        index={1}
        title="BS Computer Science"
        org="Technical University of Košice"
        date="Sep 2022 — Jun 2025"
        note="Backend, distributed systems and applied AI. Hackathons with the Argon team — Erste Digital, GymBeam, T-Systems."
      />
    </Stage>
  )
}

export function Award() {
  return (
    <Stage>
      <EducationItem
        index={4}
        title="1st place · DDAccelerator Finals"
        org="with Seedfast"
        date="2026"
        note="Won the Intelligent Digital Technology category as the only Slovak startup competing across 9 countries."
      />
    </Stage>
  )
}
