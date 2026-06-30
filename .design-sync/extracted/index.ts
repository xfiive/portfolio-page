// Barrel entry for the extracted portfolio design system. esbuild bundles this
// into window.PortfolioDS for claude.ai/design. Components are lifted verbatim
// (markup + Tailwind classes) from app/page.tsx, decoupled from page data and
// the framer-motion scroll wrapper.

export { Button } from "./foundation/button"
export { Eyebrow } from "./foundation/eyebrow"
export { Tag } from "./foundation/tag"
export { SectionHeading } from "./foundation/section-heading"
export { PortraitFrame } from "./foundation/portrait-frame"

export { ProjectCard } from "./patterns/project-card"
export { ExperienceItem } from "./patterns/experience-item"
export { EducationItem } from "./patterns/education-item"
export { FounderCallout } from "./patterns/founder-callout"
