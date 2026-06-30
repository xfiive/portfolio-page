import type { ReactNode } from "react"
import { ExperienceItem } from "my-v0-project"

// Experience rows live on the paper band; group them under a shared top border
// the way the Experience section does.
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-paper p-8">
      <div className="border-t border-ink/15">{children}</div>
    </div>
  )
}

export function Expanded() {
  return (
    <Stage>
      <ExperienceItem
        index={1}
        role="Solutions & AI Engineer"
        org="Slovenská sporiteľňa"
        date="Jul 2025 — Present"
        summary="MCP-based AI tooling · High-load banking platforms · Kafka pipelines."
        bullets={[
          "Designed and built an MCP-based AI assistant that summarizes and cross-references lending data spread across several internal banking systems — replacing the manual, multi-system lookup that slows credit review.",
          "Delivered a six-figure cost reduction by replacing a legacy workflow with an in-house Kafka pipeline — production-ready, end-to-end from a one-page spec.",
          "Cut response times 85% for two high-load services serving 2M+ customers by taking sole ownership of inherited services.",
        ]}
        tags={["Kotlin", "Spring", "MCP", "Azure OpenAI", "Apache Kafka", "React"]}
        defaultOpen
      />
    </Stage>
  )
}

export function Collapsed() {
  return (
    <Stage>
      <ExperienceItem
        index={2}
        role="Founding AI Engineer"
        org="Seedfast"
        date="Oct 2025 — Present"
        summary="AI-native data generation · Custom evaluation frameworks · Autonomous data engineering."
        bullets={[
          "Built an AI system that generates realistic, referentially-correct data for any database in a single run.",
          "Shipped the developer-facing Go CLI and an MCP server for production, CI/CD and agentic workflows.",
        ]}
        tags={["Python", "Go", "LangGraph", "MCP", "OpenAI", "PostgreSQL"]}
      />
    </Stage>
  )
}
