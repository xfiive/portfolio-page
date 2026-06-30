import * as React from "react"

/**
 * The square, rounded portrait frame from the hero — a hairline white border,
 * a deep petrol backing, and a soft drop shadow, cropped toward the upper face.
 * (In the live site this wraps a Next `<Image fill>`; here it's a plain `<img>`.)
 *
 * @category foundation
 */
export interface PortraitFrameProps {
  src: string
  alt: string
  className?: string
}

export function PortraitFrame({ src, alt, className }: PortraitFrameProps) {
  return (
    <div
      className={`relative aspect-square w-full overflow-hidden rounded-2xl border border-white/30 bg-[#06262c] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]${
        className ? ` ${className}` : ""
      }`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover object-[center_20%]" />
    </div>
  )
}
