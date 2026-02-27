"use client"
import Link from "next/link"
import Image from "next/image"
import {
    Github,
    Linkedin,
    Mail,
    ExternalLink,
    ChevronDown,
    Download,
    Briefcase,
    GraduationCap,
    User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { useState, useRef, useCallback } from "react"
import ParticlesBackground, { type ParticlesHandle } from "@/components/particles-background"

export default function Portfolio() {
    const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

    const containerRef = useRef(null)
    const particlesRef = useRef<ParticlesHandle>(null)

    const handleContainerClick = useCallback((e: React.MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, input, textarea, [role="button"], .no-particles')) {
            return
        }
        particlesRef.current?.burst(e.clientX, e.clientY)
    }, [])
    const heroRef = useRef(null)
    const experienceRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    const { scrollYProgress } = useScroll()
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0])

    const { scrollYProgress: heroScrollProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    })

    const heroY = useTransform(heroScrollProgress, [0, 1], [100, -100])
    const heroScale = useTransform(heroScrollProgress, [0, 0.5], [0.8, 1])

    const toggleExperience = (id: string) => {
        if (expandedExperience === id) {
            setExpandedExperience(null)
        } else {
            setExpandedExperience(id)
        }
    }

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    }

    return (
        <div className="min-h-screen bg-[#15002e] text-white relative overflow-hidden" ref={containerRef} onClick={handleContainerClick}>
            {/* Animated Background */}
            <ParticlesBackground ref={particlesRef} />

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#ee0000]/5 blur-3xl"
                style={{ y: y1 }}
            />
            <motion.div
                className="absolute bottom-[30%] left-[10%] w-96 h-96 rounded-full bg-[#ee0000]/5 blur-3xl"
                style={{ y: y2 }}
            />

            {/* Header */}
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="fixed top-0 z-50 w-full border-b border-[#ee0000] border-b-4 bg-[#15002e]/80 backdrop-blur"
            >
                <div className="container flex h-16 items-center justify-between">
                    <div className="font-bold text-xl">
                        <span className="text-[#ee0000]">Mikhail Shytsko's</span> Portfolio
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#about" className="text-[#a79cb6] hover:text-[#ee0000] transition-colors">
                            About
                        </Link>
                        <Link href="#summary" className="text-[#a79cb6] hover:text-[#ee0000] transition-colors">
                            Summary
                        </Link>
                        <Link href="#experience" className="text-[#a79cb6] hover:text-[#ee0000] transition-colors">
                            Experience
                        </Link>
                        <Link href="#education" className="text-[#a79cb6] hover:text-[#ee0000] transition-colors">
                            Education
                        </Link>
                        <Link href="#projects" className="text-[#a79cb6] hover:text-[#ee0000] transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-[#a79cb6] hover:text-[#ee0000] transition-colors">
                            Contact
                        </Link>
                    </nav>
                    <Link href="/cv.pdf" target="_blank" download>
                        <Button variant="outline"
                            className="flex border-[#ee0000]/30 text-white hover:bg-[#ee0000]/10 gap-2">
                            <Download className="h-4 w-4" />
                            Resume
                        </Button>
                    </Link>
                </div>
            </motion.header>

            <main className="container pt-24 pb-8 md:pb-12 relative z-10">
                {/* Hero Section */}
                <section id="about" className="py-12 md:py-24" ref={heroRef}>
                    <motion.div style={{ scale: heroScale, y: heroY }} className="grid gap-8 md:grid-cols-2 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <Badge
                                className="px-3 py-1 text-sm bg-[#ee0000]/10 text-[#ee0000] border-[#ee0000]/20 hover:bg-[#ee0000]/20 hover:text-[#ee0000]">
                                Software Engineer
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Hi, I'm <span className="text-[#ee0000]">Mikhail Shytsko</span>
                            </h1>
                            <p className="text-lg text-[#a79cb6] max-w-md">
                                Passionate software engineer with expertise in building modern web applications. I
                                specialize in
                                creating elegant solutions to complex problems.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://www.linkedin.com/in/mikhail-shytsko/" target="_blank"
                                    rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-[#ee0000]/30 text-white hover:bg-[#ee0000]/10"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                        <span className="sr-only">LinkedIn</span>
                                    </Button>
                                </Link>
                                <Link href="https://x.com/mikhailshytsko" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-[#ee0000]/30 text-white hover:bg-[#ee0000]/10"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-twitter"
                                        >
                                            <path
                                                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                        </svg>
                                        <span className="sr-only">X (Twitter)</span>
                                    </Button>
                                </Link>
                                <Link href="https://github.com/xfiive" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-[#ee0000]/30 text-white hover:bg-[#ee0000]/10"
                                    >
                                        <Github className="h-5 w-5" />
                                        <span className="sr-only">GitHub</span>
                                    </Button>
                                </Link>
                                <Link href="https://linktr.ee/mikhsh" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-[#ee0000]/30 text-white hover:bg-[#ee0000]/10"
                                    >
                                        <ExternalLink className="h-5 w-5" />
                                        <span className="sr-only">Linktr.ee</span>
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-4 border-[#ee0000] bg-[#15002e]"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-[#8e839d]"></div>

                            <Image
                                src="/avatar.jpg"
                                alt="Mikhail Shytsko"
                                width={400}
                                height={400}
                                className="object-cover object-bottom w-full h-full"
                            />
                        </motion.div>

                    </motion.div>
                </section>

                {/* Summary Section */}
                <section id="summary" className="py-12 md:py-24 border-t border-[#ee0000] border-t-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-[#ee0000]" />
                                <Badge
                                    className="px-3 py-1 text-sm bg-[#ee0000]/10 text-[#ee0000] border-[#ee0000]/20 hover:bg-[#ee0000]/20 hover:text-[#ee0000]">
                                    Professional Summary
                                </Badge>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                        </div>

                        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                <CardContent className="pt-6">
                                    <p className="text-lg leading-relaxed">
                                        Product-oriented backend developer with deep experience in Spring and
                                        passion for building scalable systems
                                        that solve real user problems. Adept at applying clean architecture and rapid
                                        iteration to achieve meaningful results
                                        <span className="block mt-4 text-[#ee0000] font-medium">
                                            Focused on creating value, not just writing code.
                                        </span>
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Seedfast Founder Section */}
                        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}
                            className="mt-12">
                            <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 relative">
                                            <Image
                                                src="/logo-symbol-white.png"
                                                alt="Seedfast"
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div className="break-words whitespace-normal max-w-full">
                                            <CardTitle
                                                className="text-xl break-words max-w-full"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                Founder at Seedfast
                                            </CardTitle>
                                            <Link
                                                href="https://seedfa.st"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#ee0000] hover:text-[#ff3333] transition-colors flex items-center gap-1 mt-1 break-words max-w-full"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                <ExternalLink className="h-4 w-4" />
                                                seedfa.st
                                            </Link>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-[#a79cb6]">
                                        Developers waste ~12 hours a week hunting for test data. Seedfast fixes that:
                                        one CLI command reads your PostgreSQL schema, understands relationships and
                                        constraints, and fills every table with realistic, coherent data in under
                                        3 minutes. No config files, no seed scripts, no boilerplate. As a founder, I'm
                                        tackling a $4.7B synthetic data market where 90% of teams still rely on tools
                                        built 15+ years ago, shipping AI-native developer tooling with MCP integration,
                                        CI/CD pipelines, and cross-platform support out of the box.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-12 md:py-24 border-t border-[#ee0000] border-t-4"
                    ref={experienceRef}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-[#ee0000]" />
                                <Badge
                                    className="px-3 py-1 text-sm bg-[#ee0000]/10 text-[#ee0000] border-[#ee0000]/20 hover:bg-[#ee0000]/20 hover:text-[#ee0000]">
                                    Experience
                                </Badge>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                            <p className="text-[#a79cb6] max-w-3xl">My professional journey as a software engineer</p>
                        </div>

                        <div className="space-y-6">
                            {/* Experience 1 */}
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Solutions Engineer, Slovenska Sporitelna, a.s.</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-[#ee0000]/30 w-fit">
                                                July 2025 - Today
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-[#a79cb6] text-lg">Project: Internal banking projects</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-[#a79cb6]">
                                                Built a greenfield Kafka service from a raw business spec, saving the
                                                bank over 300K EUR by delivering in-house what was previously outsourced.
                                                Took over two high-load microservices from external vendors as the sole
                                                engineer on the bank's side, and grew a team from zero to three engineers
                                                that doubled delivery throughput within one quarter.
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Kotlin
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Spring WebFlux
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Product Ownership
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Identity Verification
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Hiring & Mentoring
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#ee0000] hover:text-[#ff3333] flex items-center gap-1"
                                                    onClick={() => toggleExperience("exp4")}
                                                >
                                                    {expandedExperience === "exp4" ? "Show less" : "Show more"}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${expandedExperience === "exp4" ? "rotate-180" : ""}`}
                                                    />
                                                </Button>

                                                <AnimatePresence>
                                                    {expandedExperience === "exp4" && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-[#a79cb6]">
                                                                    <li>
                                                                        Took a one-page business spec and independently
                                                                        delivered a production service: identified gaps the
                                                                        spec didn't cover, challenged requirements with
                                                                        stakeholders, made architecture trade-offs, and
                                                                        launched a Kafka pipeline processing 50K+ daily
                                                                        events that replaced an entire manual operations
                                                                        workflow, saving the bank 300K+ EUR compared to
                                                                        outsourcing
                                                                    </li>
                                                                    <li>
                                                                        Inherited two high-load microservices from external
                                                                        vendors and became the sole engineer responsible for
                                                                        their development and stability on the bank's side,
                                                                        driving optimizations that cut infrastructure costs
                                                                        and reduced response times by 85%, improving SLA
                                                                        performance for 2M+ customers
                                                                    </li>
                                                                    <li>
                                                                        Developed an internal pilot for liveness detection
                                                                        with anti-spoofing and face matching against
                                                                        government-issued IDs, validating a new approach to
                                                                        KYC compliance and fraud prevention at the onboarding
                                                                        stage
                                                                    </li>
                                                                    <li>
                                                                        Developed high-load, data-driven interfaces for
                                                                        internal analytical tools using React, Redux,
                                                                        TypeScript, and REST API integration, deeply
                                                                        leveraging the bank&apos;s proprietary UI component
                                                                        library with custom theming and complex form
                                                                        workflows
                                                                    </li>
                                                                    <li>
                                                                        Identified talent gaps, drove the hiring process from
                                                                        role definitions to final offers (20+ candidates
                                                                        screened), and built a 3-person squad. Introduced
                                                                        structured code reviews with mandatory approval gates,
                                                                        trunk-based development with short-lived feature
                                                                        branches, pair programming sessions for knowledge
                                                                        sharing, and sprint retrospectives with tracked action
                                                                        items, which doubled feature delivery throughput
                                                                        within the first quarter
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-[#a79cb6]">
                                                                    Spring WebFlux, Kotlin, React, TypeScript, Kafka, OracleDB, Podman, GitLab
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Experience 2 */}
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Software Engineer, The Designery
                                                s.r.o.</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-[#ee0000]/30 w-fit">
                                                Apr 2025 - July 2025
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-[#a79cb6] text-lg">Project: Mental Health
                                            Startup</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-[#a79cb6]">
                                                Architected and shipped the entire backend for a mental health startup
                                                from zero, designing for GDPR compliance from day one. Built real-time
                                                encrypted data streams on GCP, led a team of three developers, and
                                                automated CI/CD that cut deployment time by 3x.
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Spring WebFlux
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Google Cloud Platform
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    GDPR Compliance
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Team Lead
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#ee0000] hover:text-[#ff3333] flex items-center gap-1"
                                                    onClick={() => toggleExperience("exp1")}
                                                >
                                                    {expandedExperience === "exp1" ? "Show less" : "Show more"}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${expandedExperience === "exp1" ? "rotate-180" : ""}`}
                                                    />
                                                </Button>

                                                <AnimatePresence>
                                                    {expandedExperience === "exp1" && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-[#a79cb6]">
                                                                    <li>
                                                                        Designed and launched the backend architecture
                                                                        on Spring WebFlux and Google Cloud Platform
                                                                        from scratch, optimizing for minimal
                                                                        infrastructure costs from day one so the startup
                                                                        could scale without burning through runway
                                                                    </li>
                                                                    <li>
                                                                        Implemented real-time streaming data encryption
                                                                        that ensured zero unauthorized reads and full EU
                                                                        GDPR compliance, a critical requirement for
                                                                        handling sensitive mental health patient data
                                                                    </li>
                                                                    <li>
                                                                        Led a team of three developers, established task
                                                                        prioritization and delivery workflows, and
                                                                        automated CI/CD pipelines in GitLab that reduced
                                                                        deployment time from 12 minutes to 4 minutes
                                                                        with zero-downtime releases
                                                                    </li>
                                                                    <li>
                                                                        Made key technology decisions (Firestore over
                                                                        SQL, Firebase Auth over custom auth, Cloud
                                                                        Functions for event-driven processing) that
                                                                        allowed the startup to ship faster with a lean
                                                                        team
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-[#a79cb6]">
                                                                    Spring WebFlux, GCP, Firestore, Firebase Auth, Cloud Functions, Docker, GitLab CI/CD
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Experience 3 */}
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Software Engineer, VitSBS</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-[#ee0000]/30 w-fit">
                                                May 2024 - Oct 2024
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-[#a79cb6] text-lg">
                                            Project: Automated Certification System & Experimental IoT for Air Quality
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-[#a79cb6]">
                                                Built a certification automation platform that cut document processing
                                                time by 50%, eliminating a manual bottleneck that was slowing down the
                                                company's core revenue stream. Developed a prototype IoT air quality
                                                monitoring system and created reusable internal tooling adopted across
                                                multiple projects.
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Spring
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Process Automation
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    IoT
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Data Analytics
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#ee0000] hover:text-[#ff3333] flex items-center gap-1"
                                                    onClick={() => toggleExperience("exp2")}
                                                >
                                                    {expandedExperience === "exp2" ? "Show less" : "Show more"}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${expandedExperience === "exp2" ? "rotate-180" : ""}`}
                                                    />
                                                </Button>

                                                <AnimatePresence>
                                                    {expandedExperience === "exp2" && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-[#a79cb6]">
                                                                    <li>
                                                                        Automated the equipment certification workflow
                                                                        end-to-end, reducing document processing time by
                                                                        nearly 50% and removing a manual bottleneck that
                                                                        was delaying the company's ability to certify
                                                                        and sell equipment
                                                                    </li>
                                                                    <li>
                                                                        Built a trend analytics module using GraalPy that
                                                                        gave the business team real-time visibility into
                                                                        certification patterns and equipment demand,
                                                                        accelerating product decision-making by 25%
                                                                    </li>
                                                                    <li>
                                                                        Created a reusable Spring AOP audit library that
                                                                        standardized transaction logging across projects,
                                                                        cutting the time engineers spent searching for
                                                                        internal transaction data and ensuring reliable
                                                                        collection of critical audit trails
                                                                    </li>
                                                                    <li>
                                                                        Developed a prototype IoT system for air quality
                                                                        monitoring using time-series databases, validating
                                                                        a potential new product line for the company
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-[#a79cb6]">
                                                                    Spring Framework, PostgreSQL, MongoDB, Vaadin, Spring AOP, GraalVM, Docker, GitHub Actions
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Experience 4 */}
                            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Backend Developer, ArenaPizza</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-[#ee0000]/30 w-fit">
                                                Oct 2023 - Mar 2024
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-[#a79cb6] text-lg">
                                            Project: Order Management & Logistics Optimization
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-[#a79cb6]">
                                                Designed and shipped a schedule management system that cut shift
                                                approval time from 5 days to 2, and built a QR coupon mailing system
                                                that became a key driver of repeat customer visits. Secured all
                                                customer-facing APIs with OAuth2 and JWT from the ground up.
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Spring Boot
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    OAuth2 & Security
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Redis
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                    Marketing Automation
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#ee0000] hover:text-[#ff3333] flex items-center gap-1"
                                                    onClick={() => toggleExperience("exp3")}
                                                >
                                                    {expandedExperience === "exp3" ? "Show less" : "Show more"}
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${expandedExperience === "exp3" ? "rotate-180" : ""}`}
                                                    />
                                                </Button>

                                                <AnimatePresence>
                                                    {expandedExperience === "exp3" && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-[#a79cb6]">
                                                                    <li>
                                                                        Built a secure REST API on Spring Boot with
                                                                        OAuth2 and JWT authentication, establishing the
                                                                        security foundation for all customer-facing
                                                                        services and ensuring compliance with data
                                                                        protection requirements
                                                                    </li>
                                                                    <li>
                                                                        Redesigned the shift scheduling system with
                                                                        feature toggles, reducing shift approval cycles
                                                                        from 5 days to 2 and giving managers real-time
                                                                        control over staffing, which improved operational
                                                                        efficiency during peak hours
                                                                    </li>
                                                                    <li>
                                                                        Developed a QR coupon mailing system with A/B
                                                                        testing capabilities that became a core marketing
                                                                        channel, driving measurable increases in repeat
                                                                        customer visits and promotional campaign ROI
                                                                    </li>
                                                                    <li>
                                                                        Implemented Redis-based caching for high-traffic
                                                                        endpoints, reducing database load during order
                                                                        rushes and keeping response times consistent even
                                                                        at peak demand
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-[#a79cb6]">
                                                                    Spring Boot, OAuth2, JWT, PostgreSQL, Redis, GitHub Actions
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Education Section */}
                <section id="education" className="py-12 md:py-24 border-t border-[#ee0000] border-t-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-[#ee0000]" />
                                <Badge
                                    className="px-3 py-1 text-sm bg-[#ee0000]/10 text-[#ee0000] border-[#ee0000]/20 hover:bg-[#ee0000]/20 hover:text-[#ee0000]">
                                    Education
                                </Badge>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Education & Additional Information</h2>
                        </div>

                        <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Card className="bg-[#15002e]/50 border-[#ee0000] border-2">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <CardTitle className="text-xl">Bachelor of Computer Science - Technical University of Kosice</CardTitle>
                                        <Badge variant="outline" className="mt-2 md:mt-0 border-[#ee0000]/30 w-fit">
                                            September 2022 - June 2025
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6 break-words whitespace-normal">
                                        <div>
                                            <h4 className="font-medium text-lg mb-2">Personal achievements:</h4>
                                            <ul className="list-disc pl-5 space-y-2 text-[#a79cb6] break-words">
                                                <li>
                                                    Successfully participated in multiple hackathons with&nbsp;
                                                    <a
                                                        href="https://linktr.ee/argonteam"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        Argon&nbsp;team
                                                    </a>
                                                    , including&nbsp;
                                                    <a
                                                        href="https://www.erstedigital.com/sk/hackathon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        Erste&nbsp;Digital
                                                    </a>
                                                    ,&nbsp;
                                                    <a
                                                        href="https://datahackathon.sk/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        GymBeam
                                                    </a>
                                                    &nbsp;and&nbsp;
                                                    <a
                                                        href="https://hackathon.deutschetelekomitsolutions.sk/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        T-Systems&nbsp;Hackathon
                                                    </a>
                                                </li>

                                                <li>
                                                    Founded project <strong>HackPN</strong> and successfully organised 2
                                                    hackathons with it — offline one in the city of Piešťany and an
                                                    online one with&nbsp;
                                                    <a
                                                        href="https://upliftmedia.us/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        UpliftMedia
                                                    </a>
                                                    &nbsp;for Slovak and American students
                                                </li>

                                                <li>
                                                    Was qualified for participation in&nbsp;
                                                    <a
                                                        href="https://startupcentrum.sk/project/meetera-2/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        UVP Startup Accelerator
                                                    </a>
                                                    &nbsp;with project&nbsp;
                                                    <a
                                                        href="https://linktr.ee/meetera"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        meetera
                                                    </a>
                                                    &nbsp;and got into top 3 startups at UVP Startup Finals
                                                </li>

                                                <li>
                                                    Won 1st place at&nbsp;
                                                    <a
                                                        href="https://technologytransferdays.fit.cvut.cz/leaderboard"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        DDAccelerator&nbsp;Finals
                                                    </a>
                                                    &nbsp;with&nbsp;
                                                    <a
                                                        href="https://www.ddaccelerator.com/news/seedfast-makes-database-seeding-fast-clean-and-reliable-straight-from-the-cli"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-[#e2dce9] break-words"
                                                    >
                                                        Seedfast
                                                    </a>
                                                    &nbsp;— representing Slovakia as the only startup from the
                                                    country and winning 1st place among teams from 9 countries
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium text-lg mb-2">Languages:</h4>
                                            <ul className="list-disc pl-5 space-y-2 text-[#a79cb6] break-words">
                                                <li>
                                                    <span className="text-white">Russian</span> (native)
                                                </li>
                                                <li>
                                                    <span className="text-white">Belarussian</span> (native)
                                                </li>
                                                <li>
                                                    <span className="text-white">Slovak</span> (professional working
                                                    proficiency)
                                                </li>
                                                <li>
                                                    <span className="text-white">English</span> (full professional
                                                    proficiency — C1 level, IELTS Academic band 8.0)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-12 md:py-24 border-t border-[#ee0000] border-t-4"
                    ref={projectsRef}>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <Badge
                                className="px-3 py-1 text-sm bg-[#ee0000]/10 text-[#ee0000] border-[#ee0000]/20 hover:bg-[#ee0000]/20 hover:text-[#ee0000]">
                                Projects
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Personal Projects</h2>
                            <p className="text-[#a79cb6] max-w-3xl">
                                Showcasing my passion for software development through personal projects
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Project 1 */}
                            <motion.div variants={item} whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>JHMS | High-Performance JVM & System Monitoring API</CardTitle>
                                        <CardDescription className="text-[#a79cb6]">
                                            Java API for monitoring JVM and system metrics using GraalVM with virtual
                                            threads and native calls, reducing memory and
                                            CPU consumption
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                GraalVM
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Project Loom
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Project Panama
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div variants={item} whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>Endor | IoT Platform for Energy Efficiency</CardTitle>
                                        <CardDescription className="text-[#a79cb6]">
                                            Scalable network of IoT devices and with mobile control application for
                                            energy
                                            management and energy usage reduction
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Spring
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Tasmota Firmware
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Kotlin
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div variants={item} whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>Providentia | AI-Driven Predictive Analytics Suite</CardTitle>
                                        <CardDescription className="text-[#a79cb6]">
                                            A Java-based real-time predictive analytics platform that uses machine
                                            learning algorithms and optimised computation to improve prediction accuracy
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Deeplearning4j
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Apache Flink
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Apache Cassandra
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 4 */}
                            <motion.div variants={item} whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}>
                                <Card className="bg-[#15002e]/50 border-[#ee0000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>Pulse | Retail Analytics & Inventory Management</CardTitle>
                                        <CardDescription className="text-[#a79cb6]">
                                            A sales analytics and inventory management platform for retailers that
                                            improves demand forecasting accuracy and reduces excess inventory
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Spring
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                Apache Tomcat
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#15002e] hover:bg-[#ee0000]/15">
                                                PostgreSQL
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Contact Section */}
                <section
                    id="contact"
                    className="py-12 md:py-24 border-t-4 border-[#ee0000] max-w-full break-words whitespace-normal"
                    ref={contactRef}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-full break-words whitespace-normal"
                    >
                        <div className="space-y-2 max-w-full break-words whitespace-normal">
                            <Badge
                                className="px-3 py-1 text-sm bg-[#ee0000]/10 text-[#ee0000] border-[#ee0000]/20 hover:bg-[#ee0000]/20 hover:text-[#ee0000]">
                                Contact
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                            <p className="text-[#a79cb6] max-w-3xl break-words whitespace-normal">
                                Feel free to reach out for collaborations or just a friendly chat!
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto max-w-full break-words whitespace-normal">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Card
                                    className="bg-[#15002e]/50 border-2 border-[#ee0000] max-w-full break-words whitespace-normal"
                                    style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                >
                                    <CardHeader>
                                        <CardTitle
                                            className="break-words whitespace-normal"
                                            style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                        >
                                            Contact Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6 max-w-full break-words whitespace-normal">
                                        {/** Email **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <Mail className="h-5 w-5 text-[#ee0000]" />
                                            <a
                                                href="mailto:mikhail.shytsko@gmail.com"
                                                className="text-white hover:text-[#ee0000] transition-colors break-words whitespace-normal"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                mikhail.shytsko@gmail.com
                                            </a>
                                        </div>

                                        {/** LinkedIn **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <Linkedin className="h-5 w-5 text-[#ee0000]" />
                                            <Link
                                                href="https://www.linkedin.com/in/mikhail-shytsko/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#ee0000] transition-colors break-words whitespace-normal"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                linkedin.com/in/mikhail-shytsko
                                            </Link>
                                        </div>

                                        {/** GitHub **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <Github className="h-5 w-5 text-[#ee0000]" />
                                            <Link
                                                href="https://github.com/xfiive"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#ee0000] transition-colors break-words whitespace-normal"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                github.com/xfiive
                                            </Link>
                                        </div>

                                        {/** X (Twitter) **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-[#ee0000]"
                                            >
                                                <path
                                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                            </svg>
                                            <Link
                                                href="https://x.com/mikhailshytsko"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#ee0000] transition-colors break-words whitespace-normal"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                x.com/mikhailshytsko
                                            </Link>
                                        </div>

                                        {/** Linktree **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <ExternalLink className="h-5 w-5 text-[#ee0000]" />
                                            <Link
                                                href="https://linktr.ee/mikhsh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#ee0000] transition-colors break-words whitespace-normal"
                                                style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                                            >
                                                linktr.ee/mikhsh
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t-4 border-[#ee0000] bg-[#15002e] relative z-10">
                <div className="container mx-auto py-6 flex flex-col items-center gap-2">
                    <p className="text-center text-sm text-[#a79cb6]">
                        © {new Date().getFullYear()} Mikhail Shytsko. All rights reserved.
                    </p>
                    <p className="text-center text-sm text-[#8e839d]">
                        Last updated: {new Date(process.env.NEXT_PUBLIC_LAST_UPDATED!).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                    </p>
                    <p className="text-center text-xs text-[#756984] max-w-lg mt-2">
                        This is a personal non-commercial portfolio. The color palette is inspired by{" "}
                        <a href="https://sudolabs.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#a79cb6] transition-colors">
                            sudolabs.com
                        </a>
                        . No affiliation, endorsement, or commercial use implied. If you represent Sudo Labs and have any concerns, please{" "}
                        <a href="mailto:mikhail.shytsko@gmail.com" className="underline underline-offset-2 hover:text-[#a79cb6] transition-colors">
                            mail me
                        </a>.
                    </p>
                </div>
            </footer>

        </div>
    )
}
