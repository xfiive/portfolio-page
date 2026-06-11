"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronDown, Download } from "lucide-react"
import { MotionConfig, motion } from "framer-motion"
import { useEffect, useState } from "react"
import type React from "react"

const EASE = [0.16, 1, 0.3, 1] as const

const CONTAINER = "mx-auto w-full max-w-6xl px-6 md:px-8"

const BTN =
    "inline-flex items-center gap-2.5 rounded-xl border border-transparent px-[22px] py-3.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-premium hover:-translate-y-px"

/* ---------------------------------- data ---------------------------------- */

const NAV = ["About", "Experience", "Projects", "Education"]

const EXPERIENCE = [
    {
        role: "Solutions & AI Engineer",
        org: "Slovenská sporiteľňa",
        date: "Jul 2025 — Present",
        summary: "MCP-based AI tooling · High-load banking platforms · Kafka pipelines.",
        bullets: [
            "Designed and built an MCP-based AI assistant that summarizes and cross-references corporate-lending data across internal banking systems — replacing slow, manual multi-system lookups.",
            "Architected the AI's data access as a least-privilege, fully auditable MCP tool layer (Azure OpenAI behind a gateway) — safe inside a regulated bank without touching the core approval workflow.",
            "Built change-detection that surfaces and explains shifts across products, limits, collateral and client data, so reviewers catch material changes they'd otherwise miss.",
            "Delivered a six-figure cost reduction by replacing a legacy workflow with an in-house Kafka pipeline.",
            "Cut response times 85% for two high-load services serving 2M+ customers.",
        ],
        tags: ["Kotlin", "Spring", "MCP", "Azure OpenAI", "Apache Kafka", "Podman", "React"],
    },
    {
        role: "Founding AI Engineer",
        org: "Seedfast",
        date: "Oct 2025 — Present",
        summary: "Agentic data generation · self-optimizing LLM evals · 1st at DDAccelerator.",
        bullets: [
            "Built an AI system that generates realistic, referentially-correct data for any database — sparing AI, QA and dev teams days of manual data-engineering per dataset, in a single run.",
            "Re-architected the generation core into an agentic code-execution model — an LLM that writes and runs its own data-generation code — with independent verification that eliminated a class of silent data-integrity failures.",
            "Engineered a GEPA-based self-optimizing eval harness (deterministic checks + LLM-as-judge) that more than doubled the combined success / quality / speed score on held-out evaluation.",
            "Raised generated-data quality from 28% to 73% on a multi-dimensional benchmark, with locale-aware output in any language.",
            "Shipped the developer-facing Go CLI and an MCP server — letting engineers and AI agents run Seedfast in CI/CD and agentic workflows.",
        ],
        tags: ["Python", "Go", "LangGraph", "GEPA", "MCP", "OpenAI", "LangSmith", "AWS"],
    },
    {
        role: "Software Engineer",
        org: "The Designery s.r.o.",
        date: "Apr — Jul 2025",
        summary: "GDPR-first backend for a mental-health startup.",
        bullets: [
            "Built a secure, EU GDPR-compliant backend from scratch on Spring WebFlux + GCP, encrypting sensitive patient data in real time.",
            "Automated a CI/CD pipeline that cut deploys from 12 to 4 minutes.",
        ],
        tags: ["Java", "Spring WebFlux", "GCP", "Firestore", "Firebase Auth"],
    },
    {
        role: "Software Engineer",
        org: "VitSBS",
        date: "May — Oct 2024",
        summary: "Certification automation + GraalPy trend analytics.",
        bullets: [
            "Automated equipment certification, cutting document-certification time ~50%.",
            "Built GraalPy trend analytics that accelerated product decisions ~25%.",
        ],
        tags: ["Java", "Spring", "GraalVM / GraalPy", "PostgreSQL", "MongoDB", "Docker"],
    },
    {
        role: "Backend Developer",
        org: "ArenaPizza",
        date: "Oct 2023 — Mar 2024",
        summary: "Secure REST API + scheduling optimization.",
        bullets: [
            "Shipped a secure Spring Boot REST API with OAuth2 / JWT authentication.",
            "Cut shift-approval time from 5 days to 2 through schedule optimization.",
        ],
        tags: ["Java", "Spring Boot", "OAuth2 / JWT", "PostgreSQL", "Redis"],
    },
]

const PROJECTS = [
    {
        cat: ["PostgreSQL", "LLM", "CLI"],
        title: "Seedfast",
        href: "https://seedfa.st",
        desc: "Schema-aware synthetic-data generator. AI-native test data for PostgreSQL — referentially-consistent in under 3 minutes for compliance-sensitive industries. 1st place at DDAccelerator.",
    },
    {
        cat: ["GraalVM", "Project Loom", "Project Panama"],
        title: "JHMS",
        href: "#contact",
        desc: "High-performance JVM & system-monitoring API using virtual threads and native calls to slash memory and CPU overhead.",
    },
    {
        cat: ["Spring", "Tasmota Firmware", "Kotlin"],
        title: "Endor",
        href: "#contact",
        desc: "IoT platform for energy efficiency: a network of IoT devices with a mobile control app for energy management.",
    },
    {
        cat: ["Deeplearning4j", "Apache Flink", "Apache Cassandra"],
        title: "Providentia",
        href: "#contact",
        desc: "AI-driven predictive-analytics suite delivering real-time ML predictions over streaming data.",
    },
    {
        cat: ["Spring", "Apache Tomcat", "PostgreSQL"],
        title: "Pulse",
        href: "#contact",
        desc: "Retail analytics & inventory management — improves demand forecasting and reduces excess inventory.",
    },
]

const EDUCATION = [
    {
        title: "BS Computer Science",
        org: "Technical University of Košice",
        date: "Sep 2022 — Jun 2025",
        note: "Backend, distributed systems and applied AI. Hackathons with the Argon team — Erste Digital, GymBeam, T-Systems.",
    },
    {
        title: "Founder · HackPN",
        org: "Student hackathon community",
        date: "2024 — 2025",
        note: "Founded HackPN and ran two hackathons end to end — sponsorship, logistics and judging.",
    },
    {
        title: "Top-3 · UVP Startup Finals",
        org: "with “meetera”",
        date: "2025",
        note: "Reached the top three at the University Science Park startup finals with meetera — an app for sparking meaningful, high-value connections at live events.",
    },
    {
        title: "1st place · DDAccelerator Finals",
        org: "with Seedfast",
        date: "2026",
        note: "Won the Intelligent Digital Technology category as the only Slovak startup competing across 9 countries.",
    },
]

const SOCIALS = [
    { label: "Email", href: "mailto:mikhail.shytsko@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mikhail-shytsko" },
    { label: "GitHub", href: "https://github.com/xfiive" },
    { label: "X", href: "https://x.com/mikhailshytsko" },
    { label: "Linktree", href: "https://linktr.ee/mikhsh" },
]

/* ------------------------------- shared bits ------------------------------ */

const revealTags = {
    div: motion.div,
    h1: motion.h1,
    h2: motion.h2,
    p: motion.p,
} as const

function Reveal({
    i = 0,
    as = "div",
    className,
    children,
}: {
    i?: number
    as?: keyof typeof revealTags
    className?: string
    children: React.ReactNode
}) {
    const Tag = revealTags[as]
    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -8% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
        >
            {children}
        </Tag>
    )
}

function Eyebrow({
    children,
    onRed = false,
    onLight = false,
}: {
    children: React.ReactNode
    onRed?: boolean
    onLight?: boolean
}) {
    return (
        <span
            className={`inline-block font-mono text-xs font-semibold uppercase tracking-[0.15em] ${
                onRed ? "text-white/85" : onLight ? "text-ember-deep" : "text-ember"
            }`}
        >
            {children}
        </span>
    )
}

/* --------------------------------- header --------------------------------- */

function Header() {
    const [solid, setSolid] = useState(false)
    useEffect(() => {
        const onScroll = () => setSolid(window.scrollY > 40)
        window.addEventListener("scroll", onScroll)
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-premium ${
                solid ? "bg-ink-900/95 backdrop-blur-sm" : "bg-transparent"
            }`}
        >
            <div className={`${CONTAINER} flex h-[72px] items-center justify-between`}>
                <a href="#top" className="whitespace-nowrap font-head text-[1.05rem] font-bold tracking-[-0.01em]">
                    Mikhail Shytsko
                </a>
                <nav className="hidden gap-[30px] min-[840px]:flex">
                    {NAV.map((n) => (
                        <a
                            key={n}
                            href={`#${n.toLowerCase()}`}
                            className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-white"
                        >
                            {n}
                        </a>
                    ))}
                </nav>
                <a
                    href="/cv.pdf"
                    download
                    className={`${BTN} border-white/25 px-[18px] py-[11px] text-white hover:border-ember hover:bg-ember`}
                >
                    Download CV <Download className="h-[15px] w-[15px]" />
                </a>
            </div>
        </header>
    )
}

/* ---------------------------------- hero ---------------------------------- */

function Hero() {
    return (
        <section
            id="top"
            className="relative overflow-hidden bg-[url(/hero-bg.jpg)] bg-cover bg-center pb-20 pt-32 sm:pb-24 sm:pt-[150px]"
        >
            <div className={`${CONTAINER} relative grid grid-cols-1 gap-12 min-[900px]:grid-cols-[1.35fr_0.9fr] min-[900px]:items-center min-[900px]:gap-16`}>
                <div>
                    <Reveal i={0}>
                        <Eyebrow onRed>Software &amp; AI Engineer</Eyebrow>
                    </Reveal>
                    <Reveal
                        i={1}
                        as="h1"
                        className="mt-5 max-w-[15ch] font-head text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[1.03] tracking-[-0.025em]"
                    >
                        Hi, I&apos;m
                        <br />
                        <span className="whitespace-nowrap [box-shadow:inset_0_-0.12em_0_rgba(255,255,255,0.45)]">
                            Mikhail Shytsko
                        </span>
                    </Reveal>
                    <Reveal i={2} as="p" className="mt-[26px] max-w-[46ch] text-lg leading-relaxed text-white/85">
                        Founder of{" "}
                        <a
                            href="https://seedfa.st"
                            target="_blank"
                            rel="noopener"
                            className="font-semibold text-white [box-shadow:inset_0_-0.1em_0_rgba(255,255,255,0.5)]"
                        >
                            Seedfast
                        </a>
                        . Solutions &amp; AI Engineer at Slovenská sporiteľňa, based in Bratislava, Slovakia. BS in
                        Computer Science, Technical University of Košice (2025).
                    </Reveal>
                    <Reveal i={3} className="mt-[34px] flex flex-wrap gap-3.5">
                        <a href="#contact" className={`${BTN} bg-white text-ink hover:bg-ember hover:text-white`}>
                            Let&apos;s talk <ArrowUpRight className="h-[18px] w-[18px]" />
                        </a>
                        <a href="#projects" className={`${BTN} border-white/30 text-white hover:bg-white/10`}>
                            View work
                        </a>
                    </Reveal>
                </div>
                <div className="w-full max-w-[380px] max-[600px]:max-w-none min-[900px]:ml-auto">
                    <Reveal i={2}>
                        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/30 bg-[#06262c] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                            <Image
                                src="/avatar.jpg"
                                alt="Portrait of Mikhail Shytsko"
                                fill
                                priority
                                sizes="(min-width: 900px) 380px, 100vw"
                                className="object-cover object-[center_20%]"
                            />
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

/* ------------------------------ currently at ------------------------------ */

function Worked() {
    return (
        <section className="bg-paper py-16 text-ink md:py-20">
            <div className={`${CONTAINER} text-center`}>
                <Reveal i={0}>
                    <Eyebrow onLight>Currently building at</Eyebrow>
                </Reveal>
                <Reveal
                    i={1}
                    className="mt-5 grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-2 font-head text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.02em] sm:grid-cols-[1fr_auto_1fr]"
                >
                    <a
                        href="https://www.slsp.sk/"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 leading-[1.08] transition-colors duration-300 ease-premium hover:text-ember-deep sm:justify-self-end"
                    >
                        <span className="sm:text-right">
                            Slovenská{" "}
                            <br className="hidden sm:inline" />
                            sporiteľňa
                        </span>
                        <ArrowUpRight className="h-[0.7em] w-[0.7em] opacity-70" />
                    </a>
                    <span className="text-ember-deep" aria-hidden="true">
                        ·
                    </span>
                    <a
                        href="https://seedfa.st"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 transition-colors duration-300 ease-premium hover:text-ember-deep sm:justify-self-start"
                    >
                        Seedfast <ArrowUpRight className="h-[0.7em] w-[0.7em] opacity-70" />
                    </a>
                </Reveal>
            </div>
        </section>
    )
}

/* --------------------------------- summary --------------------------------- */

function Summary() {
    return (
        <section id="about" className="bg-ink-900 py-24 md:py-32">
            <div className={`${CONTAINER} grid grid-cols-1 gap-8 min-[900px]:grid-cols-[1fr_1.1fr] min-[900px]:gap-[72px]`}>
                <div>
                    <Reveal i={0}>
                        <Eyebrow>About</Eyebrow>
                    </Reveal>
                    <Reveal
                        i={1}
                        as="h2"
                        className="mt-3.5 max-w-[18ch] font-head text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em]"
                    >
                        Focused on creating value, not just writing code.
                    </Reveal>
                </div>
                <div>
                    <Reveal i={2} as="p" className="text-lg leading-[1.7] text-muted-dark">
                        Building AI-native systems and the backends behind them — MCP-based agents, LLM pipelines and
                        high-load services — with a strong Spring/JVM background now applied in Kotlin and Python. At
                        Slovenská sporiteľňa — Slovakia&apos;s largest retail bank — I build the pipelines and AI
                        tooling behind services serving millions of customers.
                    </Reveal>
                    <Reveal i={3} className="mt-8 rounded-xl border border-ink-700 bg-ink-800 px-[26px] py-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-ink-700 px-2.5 py-[5px] font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ember">
                                Founder
                            </span>
                            <a
                                href="https://seedfa.st"
                                target="_blank"
                                rel="noopener"
                                className="inline-flex items-center gap-[7px] font-head text-2xl font-semibold tracking-[-0.01em] text-white transition-colors hover:text-ember"
                            >
                                Seedfast <ArrowUpRight className="h-4 w-4" />
                            </a>
                            <span className="ml-auto font-mono text-[0.74rem] tracking-[0.06em] text-muted-dark max-[600px]:ml-0 max-[600px]:w-full">
                                seedfa.st
                            </span>
                        </div>
                        <p className="mt-4 leading-[1.65] text-muted-dark">
                            An AI-native platform generating large-scale synthetic datasets for compliance-sensitive
                            industries — finance, pharma, medtech. It reads database schemas and produces realistic,
                            relationship-aware data in under 3 minutes. Won 1st place at DDAccelerator Finals as the
                            only Slovak startup competing across 9 countries.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

/* ------------------------------- experience -------------------------------- */

function ExperienceItem({
    x,
    n,
    open,
    onToggle,
}: {
    x: (typeof EXPERIENCE)[number]
    n: number
    open: boolean
    onToggle: () => void
}) {
    return (
        <div className="border-b border-ink/15">
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={open}
                className="grid w-full grid-cols-[auto_1fr] items-center gap-x-4 gap-y-1.5 px-1 py-[22px] text-left sm:grid-cols-[auto_1fr_auto_auto] sm:gap-5 sm:py-[26px]"
            >
                <span className="font-mono text-[0.85rem] font-semibold text-ember-deep">
                    {String(n).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                    <span
                        className={`block font-head text-[1.15rem] font-semibold tracking-[-0.01em] transition-colors sm:text-[1.4rem] ${
                            open ? "text-ember-deep" : "text-ink"
                        }`}
                    >
                        {x.role}{" "}
                        <span className="mt-[3px] block text-[0.95rem] font-medium text-muted-light sm:mt-0 sm:inline sm:text-[1.05rem]">
                            · {x.org}
                        </span>
                    </span>
                    <span className="mt-[5px] block text-[0.95rem] text-muted-light">{x.summary}</span>
                </span>
                <span className="col-start-2 font-mono text-[0.78rem] tracking-[0.08em] text-muted-light sm:col-auto sm:whitespace-nowrap">
                    {x.date}
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
                        {x.bullets.map((b) => (
                            <li
                                key={b}
                                className="relative pl-[26px] leading-[1.6] text-ink before:absolute before:left-1 before:top-[0.6em] before:h-0.5 before:w-2 before:bg-ember-deep before:content-['']"
                            >
                                {b}
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pb-[26px]">
                        {x.tags.map((t) => (
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

function Experience() {
    const [open, setOpen] = useState(0)
    return (
        <section id="experience" className="bg-paper py-24 text-ink md:py-32">
            <div className={CONTAINER}>
                <div className="mb-14">
                    <Reveal i={0}>
                        <Eyebrow onLight>Experience</Eyebrow>
                    </Reveal>
                    <Reveal
                        i={1}
                        as="h2"
                        className="mt-3.5 max-w-[18ch] font-head text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em]"
                    >
                        Where I&apos;ve shipped.
                    </Reveal>
                </div>
                <Reveal i={2} className="border-t border-ink/15">
                    {EXPERIENCE.map((x, i) => (
                        <ExperienceItem
                            key={x.org}
                            x={x}
                            n={i + 1}
                            open={open === i}
                            onToggle={() => setOpen(open === i ? -1 : i)}
                        />
                    ))}
                </Reveal>
            </div>
        </section>
    )
}

/* -------------------------------- projects --------------------------------- */

function Projects() {
    return (
        <section id="projects" className="bg-ink-900 py-24 md:py-32">
            <div className={CONTAINER}>
                <div className="mb-14 flex flex-col gap-[18px] min-[820px]:flex-row min-[820px]:items-end min-[820px]:justify-between">
                    <div>
                        <Reveal i={0}>
                            <Eyebrow>Projects</Eyebrow>
                        </Reveal>
                        <Reveal
                            i={1}
                            as="h2"
                            className="mt-3.5 max-w-[18ch] font-head text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em]"
                        >
                            Selected work.
                        </Reveal>
                    </div>
                    <Reveal i={2} as="p" className="max-w-[36ch] text-[1.05rem] leading-[1.55] text-muted-dark">
                        A mix of products, platforms and developer tooling — built to be owned, not just demoed.
                    </Reveal>
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 min-[980px]:grid-cols-3">
                    {PROJECTS.map((p, i) => {
                        const external = p.href.startsWith("http")
                        return (
                            <Reveal key={p.title} i={i % 3}>
                                <a
                                    href={p.href}
                                    target={external ? "_blank" : undefined}
                                    rel={external ? "noopener" : undefined}
                                    className="block h-full rounded-xl border border-ink-700 bg-ink-800 px-6 pb-7 pt-[26px] transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-ember hover:bg-[#0d3138]"
                                >
                                    <div className="mb-6 flex flex-wrap gap-[7px]">
                                        {p.cat.map((c, j) => (
                                            <span
                                                key={c}
                                                className="font-mono text-[0.64rem] uppercase tracking-[0.1em] text-muted-dark"
                                            >
                                                {c}
                                                {j < p.cat.length - 1 && (
                                                    <span className="ml-[7px] text-ember">·</span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 font-head text-2xl font-semibold tracking-[-0.01em]">
                                        {p.title} <ArrowUpRight className="h-5 w-5 opacity-80" />
                                    </div>
                                    <div className="mt-3 text-[0.98rem] leading-[1.6] text-muted-dark">{p.desc}</div>
                                </a>
                            </Reveal>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

/* -------------------------------- education -------------------------------- */

function Education() {
    return (
        <section id="education" className="bg-paper py-24 text-ink md:py-32">
            <div className={CONTAINER}>
                <div className="mb-14">
                    <Reveal i={0}>
                        <Eyebrow onLight>Education</Eyebrow>
                    </Reveal>
                    <Reveal
                        i={1}
                        as="h2"
                        className="mt-3.5 max-w-[18ch] font-head text-[clamp(2.25rem,4.5vw,3.75rem)] font-bold leading-[1.05] tracking-[-0.02em]"
                    >
                        Background &amp; highlights.
                    </Reveal>
                </div>
                <div className="border-t border-ink/15">
                    {EDUCATION.map((e, i) => (
                        <Reveal
                            key={e.title}
                            i={i}
                            className="grid grid-cols-[auto_1fr] items-baseline gap-x-[22px] gap-y-1.5 border-b border-ink/15 px-1 py-7 sm:grid-cols-[auto_1fr_auto]"
                        >
                            <span className="font-mono text-[0.85rem] font-semibold text-ember-deep">
                                {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                                <div className="font-head text-[1.15rem] font-semibold tracking-[-0.01em] sm:text-[1.35rem]">
                                    {e.title}{" "}
                                    <span className="text-[1.02rem] font-medium text-muted-light">· {e.org}</span>
                                </div>
                                <div className="mt-2 max-w-[62ch] leading-[1.55] text-muted-light">{e.note}</div>
                            </div>
                            <span className="col-start-2 font-mono text-[0.76rem] tracking-[0.08em] text-muted-light sm:col-auto sm:whitespace-nowrap">
                                {e.date}
                            </span>
                        </Reveal>
                    ))}
                </div>
                <Reveal i={1} className="mt-7 flex flex-wrap items-baseline gap-3.5">
                    <span className="rounded-full border border-ink/20 px-2.5 py-[5px] font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ember-deep">
                        Languages
                    </span>
                    <span>English · Slovak · Russian · Belarusian</span>
                </Reveal>
            </div>
        </section>
    )
}

/* ----------------------------- contact / footer ---------------------------- */

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[url(/contact-bg.jpg)] bg-cover bg-center pt-[120px]"
        >
            <div className={`${CONTAINER} relative pb-[90px] text-center`}>
                <Reveal i={0}>
                    <Eyebrow onRed>Contact</Eyebrow>
                </Reveal>
                <Reveal
                    i={1}
                    as="h2"
                    className="mt-[18px] font-head text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.04] tracking-[-0.025em]"
                >
                    Get In Touch
                </Reveal>
                <Reveal i={2} as="p" className="mx-auto mt-[18px] max-w-[42ch] text-[1.1rem] leading-[1.6] text-white/85">
                    Open to collaborations, interesting problems, or just a friendly chat.
                </Reveal>
                <Reveal i={3} className="mt-[38px]">
                    <a
                        href="mailto:mikhail.shytsko@gmail.com"
                        className={`${BTN} bg-white text-ink hover:bg-ember hover:text-white`}
                    >
                        mikhail.shytsko@gmail.com <ArrowUpRight className="h-[18px] w-[18px]" />
                    </a>
                </Reveal>
                <Reveal i={4} className="mt-11 flex flex-wrap justify-center gap-7">
                    {SOCIALS.map((s) => {
                        const external = s.href.startsWith("http")
                        return (
                            <a
                                key={s.label}
                                href={s.href}
                                target={external ? "_blank" : undefined}
                                rel={external ? "noopener" : undefined}
                                className="font-mono text-[0.74rem] uppercase tracking-[0.12em] text-white/80 transition-colors [box-shadow:inset_0_-0.08em_0_rgba(255,255,255,0.25)] hover:text-white"
                            >
                                {s.label}
                            </a>
                        )
                    })}
                </Reveal>
            </div>
            <div className={`${CONTAINER} relative flex flex-col justify-between gap-2 border-t border-ink-700 py-7 sm:flex-row sm:items-center`}>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted-dark">
                    © {new Date().getFullYear()} Mikhail Shytsko · Software &amp; AI Engineer · Bratislava, Slovakia ·
                    Last updated{" "}
                    {new Date(process.env.NEXT_PUBLIC_LAST_UPDATED!).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                    })}
                </span>
                <span className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-muted-dark">
                    Designed & built by Mikhail Shytsko
                </span>
            </div>
        </section>
    )
}

/* ---------------------------------- page ----------------------------------- */

export default function Portfolio() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="min-h-screen bg-ink-900 font-body text-white antialiased">
                <Header />
                <main>
                    <Hero />
                    <Worked />
                    <Summary />
                    <Experience />
                    <Projects />
                    <Education />
                    <Contact />
                </main>
            </div>
        </MotionConfig>
    )
}
