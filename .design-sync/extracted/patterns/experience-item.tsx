import * as React from "react"
import { ChevronDown } from "lucide-react"

/**
 * A numbered experience row from the Experience accordion, built for the paper
 * band. The header (mono index, role "· org", summary, mono date, chevron)
 * toggles a body of dash-bulleted achievements and a row of tech `Tag`s, using
 * the `grid-template-rows: 0fr → 1fr` reveal. Uncontrolled: pass `defaultOpen`
 * to render it expanded.
 *
 * @category patterns
 */
export interface ExperienceItemProps {
  /** 1-based position; rendered zero-padded (01, 02, …) */
  index: number
  role: string
  org: string
  date: string
  summary: string
  bullets: string[]
  tags: string[]
  defaultOpen?: boolean
}

export function ExperienceItem({
  index,
  role,
  org,
  date,
  summary,
  bullets,
  tags,
  defaultOpen = false,
}: ExperienceItemProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  return (
    <div className="border-b border-ink/15 text-ink">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="grid w-full grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1.5 px-1 py-[22px] text-left sm:grid-cols-[auto_1fr_auto_auto] sm:gap-5 sm:py-[26px]"
      >
        <span className="font-mono text-[0.85rem] font-semibold text-ember-deep">{String(index).padStart(2, "0")}</span>
        <span className="min-w-0">
          <span
            className={`block font-head text-[1.15rem] font-semibold tracking-[-0.01em] transition-colors sm:text-[1.4rem] ${
              open ? "text-ember-deep" : "text-ink"
            }`}
          >
            {role}{" "}
            <span className="mt-[3px] block text-[0.95rem] font-medium text-muted-light sm:mt-0 sm:inline sm:text-[1.05rem]">
              · {org}
            </span>
          </span>
          <span className="mt-[5px] block text-[0.95rem] text-muted-light">{summary}</span>
        </span>
        <span className="col-start-2 font-mono text-[0.78rem] tracking-[0.08em] text-muted-light sm:col-auto sm:whitespace-nowrap">
          {date}
        </span>
        <ChevronDown
          className={`hidden h-[22px] w-[22px] flex-none text-ink transition-transform duration-300 ease-premium sm:block ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] [transition-duration:400ms] ease-premium"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <ul className="flex max-w-[70ch] flex-col gap-3 pb-[18px] pt-1">
            {bullets.map((b) => (
              <li
                key={b}
                className="relative pl-[26px] leading-[1.6] text-ink before:absolute before:left-1 before:top-[0.6em] before:h-0.5 before:w-2 before:bg-ember-deep before:content-['']"
              >
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pb-[26px]">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-ink/20 px-[11px] py-[5px] font-mono text-[0.68rem] uppercase tracking-[0.08em] text-muted-light"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
