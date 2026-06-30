import type { ReactNode } from "react"
import { Button } from "my-v0-project"
import { ArrowUpRight, Download } from "lucide-react"

// Buttons live on the dark canvas / hero gradient in the portfolio, so every
// cell sits on the ink surface.
function Stage({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3.5 bg-ink-900 p-10">{children}</div>
}

export function Primary() {
  return (
    <Stage>
      <Button href="#contact" variant="solid" icon={<ArrowUpRight className="h-[18px] w-[18px]" />}>
        Let&apos;s talk
      </Button>
    </Stage>
  )
}

export function Ember() {
  return (
    <Stage>
      <Button variant="ember" icon={<ArrowUpRight className="h-[18px] w-[18px]" />}>
        Get started
      </Button>
    </Stage>
  )
}

export function Outline() {
  return (
    <Stage>
      <Button href="#projects" variant="outline">
        View work
      </Button>
    </Stage>
  )
}

export function WithIcon() {
  return (
    <Stage>
      <Button variant="outline" icon={<Download className="h-[15px] w-[15px]" />}>
        Download CV
      </Button>
    </Stage>
  )
}
