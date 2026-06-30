import * as React from "react"

/**
 * The portfolio's single button style — a mono, uppercase, pill-cornered
 * control that lifts 1px on hover. Renders an `<a>` when `href` is set,
 * otherwise a `<button>`. Pair with a trailing `icon` (e.g. an ArrowUpRight
 * or Download glyph).
 *
 * @category foundation
 */
export interface ButtonProps {
  children: React.ReactNode
  /** solid: white fill → ember on hover · ember: ember fill · outline: hairline on dark */
  variant?: "solid" | "ember" | "outline"
  href?: string
  /** trailing icon node, e.g. <ArrowUpRight className="h-[18px] w-[18px]" /> */
  icon?: React.ReactNode
  className?: string
}

const BASE =
  "inline-flex items-center gap-2.5 rounded-xl border border-transparent px-[22px] py-3.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-premium hover:-translate-y-px"

const VARIANTS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  solid: "bg-white text-ink hover:bg-ember hover:text-white",
  ember: "bg-ember text-white hover:bg-ember-deep",
  outline: "border-white/30 text-white hover:bg-white/10",
}

export function Button({ children, variant = "solid", href, icon, className }: ButtonProps) {
  const cls = `${BASE} ${VARIANTS[variant]}${className ? ` ${className}` : ""}`
  const content = (
    <>
      {children}
      {icon}
    </>
  )
  if (href) {
    return (
      <a href={href} className={cls}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={cls}>
      {content}
    </button>
  )
}
