import type { ReactNode } from "react"
import { ProjectCard } from "my-v0-project"

// Project cards sit on the ink canvas in the Projects grid; constrain to a
// single grid column's width so the card reads at its real size.
function Stage({ children }: { children: ReactNode }) {
  return (
    <div className="bg-ink-900 p-8">
      <div className="max-w-[380px]">{children}</div>
    </div>
  )
}

export function Featured() {
  return (
    <Stage>
      <ProjectCard
        title="Seedfast"
        href="https://seedfa.st"
        categories={["PostgreSQL", "LLM", "CLI"]}
        description="An AI-native platform generating large-scale synthetic datasets for compliance-sensitive industries — finance, pharma, medtech. It reads database schemas and produces realistic, relationship-aware data in under 3 minutes."
      />
    </Stage>
  )
}

export function Internal() {
  return (
    <Stage>
      <ProjectCard
        title="JHMS"
        categories={["GraalVM", "Project Loom", "Project Panama"]}
        description="High-performance JVM & system-monitoring API using virtual threads and native calls to slash memory and CPU overhead."
      />
    </Stage>
  )
}

export function Grid() {
  return (
    <div className="grid grid-cols-1 gap-5 bg-ink-900 p-8 sm:grid-cols-2">
      <ProjectCard
        title="Endor"
        categories={["Spring", "Tasmota", "Kotlin"]}
        description="IoT platform for energy efficiency: a network of devices with a mobile control app for energy management."
      />
      <ProjectCard
        title="Providentia"
        categories={["Deeplearning4j", "Flink", "Cassandra"]}
        description="AI-driven predictive-analytics suite delivering real-time ML predictions over streaming data."
      />
    </div>
  )
}
