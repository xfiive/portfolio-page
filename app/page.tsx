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
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {motion, AnimatePresence, useScroll, useTransform} from "framer-motion"
import {useState, useRef} from "react"
import ParticlesBackground from "@/components/particles-background"

export default function Portfolio() {
    const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

    const containerRef = useRef(null)
    const heroRef = useRef(null)
    const experienceRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    const {scrollYProgress} = useScroll()
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0])

    const {scrollYProgress: heroScrollProgress} = useScroll({
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
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    }

    return (
        <div className="min-h-screen bg-[#1a0033] text-white relative overflow-hidden" ref={containerRef}>
            {/* Animated Background */}
            <ParticlesBackground/>

            {/* Decorative Elements */}
            <motion.div
                className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#c10000]/5 blur-3xl"
                style={{y: y1}}
            />
            <motion.div
                className="absolute bottom-[30%] left-[10%] w-96 h-96 rounded-full bg-[#c10000]/5 blur-3xl"
                style={{y: y2}}
            />

            {/* Header */}
            <motion.header
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5}}
                className="sticky top-0 z-50 w-full border-b border-[#c10000] border-b-4 bg-[#1a0033]/80 backdrop-blur"
            >
                <div className="container flex h-16 items-center justify-between">
                    <div className="font-bold text-xl">
                        <span className="text-[#c10000]">Mikhail Shytsko's</span> Portfolio
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="#about" className="text-zinc-400 hover:text-[#c10000] transition-colors">
                            About
                        </Link>
                        <Link href="#summary" className="text-zinc-400 hover:text-[#c10000] transition-colors">
                            Summary
                        </Link>
                        <Link href="#experience" className="text-zinc-400 hover:text-[#c10000] transition-colors">
                            Experience
                        </Link>
                        <Link href="#education" className="text-zinc-400 hover:text-[#c10000] transition-colors">
                            Education
                        </Link>
                        <Link href="#projects" className="text-zinc-400 hover:text-[#c10000] transition-colors">
                            Projects
                        </Link>
                        <Link href="#contact" className="text-zinc-400 hover:text-[#c10000] transition-colors">
                            Contact
                        </Link>
                    </nav>
                    <Link href="/cv.pdf" target="_blank" download>
                        <Button variant="outline"
                                className="hidden md:flex border-red-900/50 text-white hover:bg-red-900/20 gap-2">
                            <Download className="h-4 w-4"/>
                            Resume
                        </Button>
                    </Link>
                </div>
            </motion.header>

            <main className="container py-8 md:py-12 relative z-10">
                {/* Hero Section */}
                <section id="about" className="py-12 md:py-24" ref={heroRef}>
                    <motion.div style={{scale: heroScale, y: heroY}} className="grid gap-8 md:grid-cols-2 items-center">
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.6}}
                            className="space-y-6"
                        >
                            <Badge
                                className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                                Software Engineer
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                Hi, I'm <span className="text-[#c10000]">Mikhail Shytsko</span>
                            </h1>
                            <p className="text-lg text-zinc-400 max-w-md">
                                Passionate software engineer with expertise in building modern web applications. I
                                specialize in
                                creating elegant solutions to complex problems.
                            </p>
                            <div className="flex gap-4">
                                <Link href="https://www.linkedin.com/in/mikhail-shytsko-029a5a297/" target="_blank"
                                      rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
                                    >
                                        <Linkedin className="h-5 w-5"/>
                                        <span className="sr-only">LinkedIn</span>
                                    </Button>
                                </Link>
                                <Link href="https://x.com/mikhailshytsko" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
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
                                                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                        </svg>
                                        <span className="sr-only">X (Twitter)</span>
                                    </Button>
                                </Link>
                                <Link href="https://github.com/xfiive" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
                                    >
                                        <Github className="h-5 w-5"/>
                                        <span className="sr-only">GitHub</span>
                                    </Button>
                                </Link>
                                <Link href="https://linktr.ee/mikhsh" target="_blank" rel="noopener noreferrer">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
                                    >
                                        <ExternalLink className="h-5 w-5"/>
                                        <span className="sr-only">Linktr.ee</span>
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-4 border-[#c10000] bg-[#1a0033]"
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-zinc-500"></div>

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
                <section id="summary" className="py-12 md:py-24 border-t border-[#c10000] border-t-4">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-[#c10000]"/>
                                <Badge
                                    className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                                    Professional Summary
                                </Badge>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                        </div>

                        <motion.div whileHover={{scale: 1.01}} transition={{type: "spring", stiffness: 300}}>
                            <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                                <CardContent className="pt-6">
                                    <p className="text-lg leading-relaxed">
                                        Product-oriented backend developer with deep experience in Spring and
                                        passion for building scalable systems
                                        that solve real user problems. Adept at applying clean architecture and rapid
                                        iteration to achieve meaningful results
                                        <span className="block mt-4 text-[#c10000] font-medium">
                      Focused on creating value, not just writing code.
                    </span>
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Meetera Co-founder Section */}
                        <motion.div whileHover={{scale: 1.01}} transition={{type: "spring", stiffness: 300}}
                                    className="mt-12">
                            <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                                <CardHeader>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 relative">
                                            <svg
                                                width="48"
                                                height="48"
                                                viewBox="0 0 139 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M66.9606 0.015308L79.7405 -1.15152e-05L87.7181 0.0047319C90.1048 0.00158106 92.4941 0.136095 94.8268 0.643002C97.1722 1.15267 100.113 1.96534 101.747 3.08099C103.644 4.37572 105.119 5.92695 106.172 7.73469C107.46 5.7236 109.054 4.11368 110.953 2.90493C113.903 0.968311 117.296 0 121.132 0C124.555 0 127.594 0.76291 130.249 2.28873C132.964 3.81456 135.088 5.95658 136.622 8.71479C138.157 11.4143 138.924 14.554 138.924 18.1338V50H127.328V20.8627C127.328 18.75 126.945 16.9308 126.178 15.4049C125.41 13.8791 124.348 12.7054 122.991 11.8838C121.634 11.0035 119.981 10.5634 118.034 10.5634C116.205 10.5634 114.582 11.0035 113.166 11.8838C111.75 12.7054 110.658 13.8791 109.891 15.4049C109.124 16.9308 108.74 18.75 108.74 20.8627V50H97.1444V20.8627C97.1444 18.75 96.7609 16.9308 95.9937 15.4049C95.2266 13.8791 94.1349 12.7054 92.7187 11.8838C91.3614 11.0035 89.7386 10.5634 87.8503 10.5634C86.021 10.5634 84.3982 11.0035 82.982 11.8838C81.5657 12.7054 80.474 13.8791 79.7069 15.4049C78.9397 16.9308 78.5562 18.75 78.5562 20.8627V41.2459C78.5562 46.0807 74.6521 50 69.8362 50C67.932 50 66.0407 49.6869 64.2373 49.0732L36.3701 39.5897H62.2935C64.8711 39.5897 66.9606 37.492 66.9606 34.9043C66.9606 32.7083 65.4413 30.8069 63.306 30.3305L20.8156 20.8512H62.3845C64.9118 20.8512 66.9606 18.7944 66.9606 16.2571C66.9606 14.0422 65.3863 12.1426 63.2168 11.7397L0.07621 0.015308H66.9606Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div className="break-words whitespace-normal max-w-full">
                                            <CardTitle
                                                className="text-xl break-words max-w-full"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                            >
                                                Co-founder at meetera
                                            </CardTitle>
                                            <Link
                                                href="https://linktr.ee/meetera"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[#c10000] hover:text-red-400 transition-colors flex items-center gap-1 mt-1 break-words max-w-full"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                            >
                                                <ExternalLink className="h-4 w-4"/>
                                                linktr.ee/meetera
                                            </Link>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-zinc-400">
                                        meetera is the AI-powered platform that turns chaotic event planning into a
                                        10-minute task - as a co-founder of meetera, I'm building innovative solutions
                                        to connect people
                                        and create meaningful interactions.
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-12 md:py-24 border-t border-[#c10000] border-t-4"
                         ref={experienceRef}>
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-[#c10000]"/>
                                <Badge
                                    className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                                    Experience
                                </Badge>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                            <p className="text-zinc-400 max-w-3xl">My professional journey as a software engineer</p>
                        </div>

                        <div className="space-y-6">
                            {/* Experience 1 */}
                            <motion.div whileHover={{scale: 1.01}} transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Software Engineer, The Designery
                                                s.r.o.</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-red-900/50 w-fit">
                                                Apr 2025 - Present
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-zinc-400 text-lg">Project: Mental Health
                                            Platform</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-zinc-400">
                                                Designed the architecture and implemented a backend application with
                                                reactive data processing, providing data streams encryption and close
                                                interaction with Google Cloud Platform environment.
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    Spring
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    Google Cloud Platform
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    DevOps
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#c10000] hover:text-red-400 flex items-center gap-1"
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
                                                            initial={{height: 0, opacity: 0}}
                                                            animate={{height: "auto", opacity: 1}}
                                                            exit={{height: 0, opacity: 0}}
                                                            transition={{duration: 0.3}}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                                                    <li>
                                                                        Designed architecture and built reactive backend
                                                                        application
                                                                        on Spring WebFlux using Google Cloud Platform
                                                                        ecosystem
                                                                    </li>
                                                                    <li>Successfully implemented on-the-fly encrypted
                                                                        big data streaming
                                                                    </li>
                                                                    <li>
                                                                        Led the project development team, combining with
                                                                        architect and devOps responsibilities
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-zinc-400">
                                                                    Worked with: Spring Framework, GCP, Firestore,
                                                                    Firebase Auth, Cloud Functions, Docker, GitLab CI/CD
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
                            <motion.div whileHover={{scale: 1.01}} transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Software Engineer, VitSBS</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-red-900/50 w-fit">
                                                May 2024 - Oct 2024
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-zinc-400 text-lg">
                                            Project: Automated Certification System & Experimental IoT for Air Quality
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-zinc-400">
                                                Developed a certification automation platform and prototype IoT system,
                                                applying Spring and time-series databases to accelerate data
                                                processing, improve transaction visibility, and eliminate manual
                                                operations
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    Spring
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    MongoDB
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    Vaadin
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#c10000] hover:text-red-400 flex items-center gap-1"
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
                                                            initial={{height: 0, opacity: 0}}
                                                            animate={{height: "auto", opacity: 1}}
                                                            exit={{height: 0, opacity: 0}}
                                                            transition={{duration: 0.3}}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                                                    <li>
                                                                        Built an equipment certification automation
                                                                        platform using Spring Boot and PostgreSQL,
                                                                        reducing accounting
                                                                        errors by 45% and accelerating workflow by 30%
                                                                        by eliminating manual processes
                                                                    </li>
                                                                    <li>
                                                                        Integrated numpy via GraalPy into Spring Boot
                                                                        service to analyse product trends, increasing
                                                                        data processing
                                                                        speed by 25% and accelerating decision making by
                                                                        the product team
                                                                    </li>
                                                                    <li>
                                                                        Developed a modular audit library on Spring AOP,
                                                                        improving transaction traceability and reducing
                                                                        post-processing time by 15% for certifications
                                                                        by region and hardware type
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-zinc-400">
                                                                    Worked with: Spring Framework, PostgreSQL, MongoDB,
                                                                    InfluxDB,
                                                                    ESP32, Tasmota, Paho MQTT, Vaadin, WebSockets,
                                                                    Spring AOP, Spring MQTT, GraalVM, iText, Docker,
                                                                    GitHub, GitHub Actions, Maven, Junit 5
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
                            <motion.div whileHover={{scale: 1.01}} transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                                    <CardHeader className="pb-2">
                                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                            <CardTitle className="text-xl">Backend Developer, ArenaPizza</CardTitle>
                                            <Badge variant="outline" className="mt-2 md:mt-0 border-red-900/50 w-fit">
                                                Oct 2023 - Mar 2024
                                            </Badge>
                                        </div>
                                        <CardDescription className="text-zinc-400 text-lg">
                                            Project: Order Management & Logistics Optimization
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <p className="text-zinc-400">
                                                Designed and implemented flexible and secure schedule management and a
                                                QR coupon
                                                mailing system to increase customer engagement and marketing
                                                effectiveness.
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    OAuth2
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    Redis
                                                </Badge>
                                                <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                    Spring
                                                </Badge>
                                            </div>

                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="p-0 h-auto text-[#c10000] hover:text-red-400 flex items-center gap-1"
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
                                                            initial={{height: 0, opacity: 0}}
                                                            animate={{height: "auto", opacity: 1}}
                                                            exit={{height: 0, opacity: 0}}
                                                            transition={{duration: 0.3}}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pt-4 space-y-2">
                                                                <h4 className="font-medium">Key Responsibilities:</h4>
                                                                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                                                    <li>
                                                                        Implemented a secure REST API using OAuth2 and
                                                                        JWT, improving customer data security
                                                                        and compliance
                                                                    </li>
                                                                    <li>
                                                                        Improved shift scheduling with feature-toggle,
                                                                        reducing update failures by 40% and
                                                                        simplifying in-store deployment
                                                                    </li>
                                                                    <li>
                                                                        Developed A/B testing system with Kafka,
                                                                        increasing customer engagement by and
                                                                        increasing promotional sales by 15%, improving
                                                                        marketing effectiveness
                                                                    </li>
                                                                </ul>

                                                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                                                <p className="text-zinc-400">
                                                                    Worked with: Spring Framework, OAuth2, JWT,
                                                                    PostgreSQL, Redis, ZXing, GitHub, GitHub Actions,
                                                                    Maven, Mockito,
                                                                    Junit 5
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
                <section id="education" className="py-12 md:py-24 border-t border-[#c10000] border-t-4">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-[#c10000]"/>
                                <Badge
                                    className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                                    Education
                                </Badge>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight">Education & Additional Information</h2>
                        </div>

                        <motion.div whileHover={{scale: 1.01}} transition={{type: "spring", stiffness: 300}}>
                            <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                                <CardHeader className="pb-2">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <CardTitle className="text-xl">Technical University of Kosice, FEI,
                                            Informatics</CardTitle>
                                        <Badge variant="outline" className="mt-2 md:mt-0 border-red-900/50 w-fit">
                                            September 2022 - June 2025
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-6 break-words whitespace-normal">
                                        <div>
                                            <h4 className="font-medium text-lg mb-2">Personal achievements:</h4>
                                            <ul className="list-disc pl-5 space-y-2 text-zinc-400 break-words">
                                                <li>
                                                    Successfully participated in multiple hackathons with&nbsp;
                                                    <a
                                                        href="https://linktr.ee/argonteam"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
                                                    >
                                                        Argon&nbsp;team
                                                    </a>
                                                    , including&nbsp;
                                                    <a
                                                        href="https://www.erstedigital.com/sk/hackathon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
                                                    >
                                                        Erste&nbsp;Digital
                                                    </a>
                                                    ,&nbsp;
                                                    <a
                                                        href="https://datahackathon.sk/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
                                                    >
                                                        GymBeam
                                                    </a>
                                                    &nbsp;and&nbsp;
                                                    <a
                                                        href="https://hackathon.deutschetelekomitsolutions.sk/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
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
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
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
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
                                                    >
                                                        UVP Startup Accelerator
                                                    </a>
                                                    &nbsp;with project&nbsp;
                                                    <a
                                                        href="https://linktr.ee/meetera"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-white underline underline-offset-4 hover:text-zinc-200 break-words"
                                                    >
                                                        meetera
                                                    </a>
                                                    &nbsp;and got into top 3 startups at UVP Startup Finals
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium text-lg mb-2">Languages:</h4>
                                            <ul className="list-disc pl-5 space-y-2 text-zinc-400 break-words">
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
                <section id="projects" className="py-12 md:py-24 border-t border-[#c10000] border-t-4"
                         ref={projectsRef}>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: true}}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <Badge
                                className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                                Projects
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Personal Projects</h2>
                            <p className="text-zinc-400 max-w-3xl">
                                Showcasing my passion for software development through personal projects
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {/* Project 1 */}
                            <motion.div variants={item} whileHover={{scale: 1.02}}
                                        transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>JHMS | High-Performance JVM & System Monitoring API</CardTitle>
                                        <CardDescription className="text-zinc-400">
                                            Java API for monitoring JVM and system metrics using GraalVM with virtual
                                            threads and native calls, reducing memory and
                                            CPU consumption
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                GraalVM
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Project Loom
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Project Panama
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div variants={item} whileHover={{scale: 1.02}}
                                        transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>Endor | IoT Platform for Energy Efficiency</CardTitle>
                                        <CardDescription className="text-zinc-400">
                                            Scalable network of IoT devices and with mobile control application for
                                            energy
                                            management and energy usage reduction
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Spring
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Tasmota Firmware
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Kotlin
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 3 */}
                            <motion.div variants={item} whileHover={{scale: 1.02}}
                                        transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>Providentia | AI-Driven Predictive Analytics Suite</CardTitle>
                                        <CardDescription className="text-zinc-400">
                                            A Java-based real-time predictive analytics platform that uses machine
                                            learning algorithms and optimised computation to improve prediction accuracy
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Deeplearning4j
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Apache Flink
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Apache Cassandra
                                            </Badge>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Project 4 */}
                            <motion.div variants={item} whileHover={{scale: 1.02}}
                                        transition={{type: "spring", stiffness: 300}}>
                                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                                    <CardHeader>
                                        <CardTitle>Pulse | Retail Analytics & Inventory Management</CardTitle>
                                        <CardDescription className="text-zinc-400">
                                            A sales analytics and inventory management platform for retailers that
                                            improves demand forecasting accuracy and reduces excess inventory
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Spring
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                                                Apache Tomcat
                                            </Badge>
                                            <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
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
                    className="py-12 md:py-24 border-t-4 border-[#c10000] max-w-full break-words whitespace-normal"
                    ref={contactRef}
                >
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.5}}
                        viewport={{once: true}}
                        className="space-y-8 max-w-full break-words whitespace-normal"
                    >
                        <div className="space-y-2 max-w-full break-words whitespace-normal">
                            <Badge
                                className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                                Contact
                            </Badge>
                            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
                            <p className="text-zinc-400 max-w-3xl break-words whitespace-normal">
                                Feel free to reach out for collaborations or just a friendly chat!
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto max-w-full break-words whitespace-normal">
                            <motion.div
                                whileHover={{scale: 1.02}}
                                transition={{type: "spring", stiffness: 300}}
                            >
                                <Card
                                    className="bg-[#1a0033]/50 border-2 border-[#c10000] max-w-full break-words whitespace-normal"
                                    style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                >
                                    <CardHeader>
                                        <CardTitle
                                            className="break-words whitespace-normal"
                                            style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                        >
                                            Contact Information
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6 max-w-full break-words whitespace-normal">
                                        {/** Email **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <Mail className="h-5 w-5 text-[#c10000]"/>
                                            <a
                                                href="mailto:mikhail.shytsko@gmail.com"
                                                className="text-white hover:text-[#c10000] transition-colors break-words whitespace-normal"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                            >
                                                mikhail.shytsko@gmail.com
                                            </a>
                                        </div>

                                        {/** LinkedIn **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <Linkedin className="h-5 w-5 text-[#c10000]"/>
                                            <Link
                                                href="https://www.linkedin.com/in/mikhail-shytsko-029a5a297/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#c10000] transition-colors break-words whitespace-normal"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                            >
                                                linkedin.com/in/mikhail-shytsko
                                            </Link>
                                        </div>

                                        {/** GitHub **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <Github className="h-5 w-5 text-[#c10000]"/>
                                            <Link
                                                href="https://github.com/xfiive"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#c10000] transition-colors break-words whitespace-normal"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
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
                                                className="text-[#c10000]"
                                            >
                                                <path
                                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                                            </svg>
                                            <Link
                                                href="https://x.com/mikhailshytsko"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#c10000] transition-colors break-words whitespace-normal"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
                                            >
                                                x.com/mikhailshytsko
                                            </Link>
                                        </div>

                                        {/** Linktree **/}
                                        <div
                                            className="flex items-center gap-3 max-w-full break-words whitespace-normal">
                                            <ExternalLink className="h-5 w-5 text-[#c10000]"/>
                                            <Link
                                                href="https://linktr.ee/mikhsh"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white hover:text-[#c10000] transition-colors break-words whitespace-normal"
                                                style={{wordBreak: 'break-word', overflowWrap: 'break-word'}}
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
            <footer className="border-t-4 border-[#c10000] bg-[#1a0033]">
                <div className="container mx-auto py-6 flex justify-center">
                    <p className="text-center text-sm text-zinc-400">
                        © {new Date().getFullYear()} Mikhail Shytsko. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    )
}
