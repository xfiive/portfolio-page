import * as React from "react"
import { ArrowUpRight } from "lucide-react"

/**
 * A project card from the Projects grid: a mono category row (dot-separated,
 * ember separators), a Space-Grotesk title with a trailing arrow, and a muted
 * description. Sits on the ink canvas and lifts on hover (border → ember,
 * surface → a lighter petrol). Renders as a link when `href` is set.
 *
 * @category patterns
 */
export interface ProjectCardProps {
  title: string
  description: string
  /** short tech/category labels, rendered dot-separated */
  categories: string[]
  href?: string
}

export function ProjectCard({ title, description, categories, href }: ProjectCardProps) {
  const external = !!href && href.startsWith("http")
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      className="block h-full rounded-xl border border-ink-700 bg-ink-800 px-6 pb-7 pt-[26px] transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-ember hover:bg-[#0d3138]"
    >
      <div className="mb-6 flex flex-wrap gap-[7px]">
        {categories.map((c, j) => (
          <span key={c} className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-muted-dark">
            {c}
            {j < categories.length - 1 && <span className="ml-[7px] text-ember">·</span>}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2 font-head text-2xl font-semibold tracking-[-0.01em] text-white">
        {title} <ArrowUpRight className="h-5 w-5 opacity-80" />
      </div>
      <div className="mt-3 text-[0.98rem] leading-[1.6] text-muted-dark">{description}</div>
    </a>
  )
}
