import { PortraitFrame } from "my-v0-project"

// Uses the live site's portrait so the card shows the frame in real use; the
// component accepts any src. If the image is unreachable the frame (border,
// petrol backing, shadow) still renders.
export function Portrait() {
  return (
    <div className="bg-ink-900 p-10">
      <div className="w-[320px]">
        <PortraitFrame src="https://mikhail.shytsko.com/avatar.jpg" alt="Mikhail Shytsko" />
      </div>
    </div>
  )
}
