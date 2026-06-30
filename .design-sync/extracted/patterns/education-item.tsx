import * as React from "react"

/**
 * A numbered row from the Education / highlights list, designed for the paper
 * band: a zero-padded mono index, a Space-Grotesk title with a muted
 * "· organisation" suffix, a supporting note, and a right-aligned mono date.
 *
 * @category patterns
 */
export interface EducationItemProps {
  /** 1-based position; rendered zero-padded (01, 02, …) */
  index: number
  title: string
  org: string
  date: string
  note: string
}

export function EducationItem({ index, title, org, date, note }: EducationItemProps) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-baseline gap-x-[22px] gap-y-1.5 border-b border-ink/15 px-1 py-7 text-ink sm:grid-cols-[auto_1fr_auto]">
      <span className="font-mono text-[0.85rem] font-semibold text-ember-deep">{String(index).padStart(2, "0")}</span>
      <div className="min-w-0">
        <div className="font-head text-[1.15rem] font-semibold tracking-[-0.01em] sm:text-[1.35rem]">
          {title} <span className="text-[1.02rem] font-medium text-muted-light">· {org}</span>
        </div>
        <div className="mt-2 max-w-[62ch] leading-[1.55] text-muted-light">{note}</div>
      </div>
      <span className="col-start-2 font-mono text-[0.76rem] tracking-[0.08em] text-muted-light sm:col-auto sm:whitespace-nowrap">
        {date}
      </span>
    </div>
  )
}
