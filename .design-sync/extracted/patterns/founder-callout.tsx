import * as React from "react"
import { ArrowUpRight } from "lucide-react"

/**
 * The framed founder callout from the About section: an ember "Founder" pill,
 * a linked Space-Grotesk venture name with a trailing arrow, a right-aligned
 * domain, and a muted description paragraph. Built for the ink canvas.
 *
 * @category patterns
 */
export interface FounderCalloutProps {
  /** venture / product name, e.g. "Seedfast" */
  name: string
  href: string
  /** bare domain shown on the right, e.g. "seedfa.st" */
  url: string
  description: string
  /** pill label; defaults to "Founder" */
  label?: string
}

export function FounderCallout({ name, href, url, description, label = "Founder" }: FounderCalloutProps) {
  return (
    <div className="rounded-xl border border-ink-700 bg-ink-800 px-[26px] py-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-ink-700 px-2.5 py-[5px] font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ember">
          {label}
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-[7px] font-head text-2xl font-semibold tracking-[-0.01em] text-white transition-colors hover:text-ember"
        >
          {name} <ArrowUpRight className="h-4 w-4" />
        </a>
        <span className="ml-auto font-mono text-[0.74rem] tracking-[0.06em] text-muted-dark max-[600px]:ml-0 max-[600px]:w-full">
          {url}
        </span>
      </div>
      <p className="mt-4 leading-[1.65] text-muted-dark">{description}</p>
    </div>
  )
}
