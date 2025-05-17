"use client"

import type React from "react"
import Link from "next/link"
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
import { useState, useRef } from "react"
import ParticlesBackground from "@/components/particles-background"

export default function Portfolio() {
  const [isEmailSent, setIsEmailSent] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  // Refs for scroll animations
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0])

  // Scroll-triggered animations
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  })

  const heroY = useTransform(heroScrollProgress, [0, 1], [100, -100])
  const heroScale = useTransform(heroScrollProgress, [0, 0.5], [0.8, 1])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // This would be connected to your email sending service

    // Simulate sending for demo purposes
    setTimeout(() => {
      setIsEmailSent(true)
      setTimeout(() => setIsEmailSent(false), 3000)
    }, 1000)
  }

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
    <div className="min-h-screen bg-[#1a0033] text-white relative overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <ParticlesBackground />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-[20%] right-[5%] w-64 h-64 rounded-full bg-[#c10000]/5 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-96 h-96 rounded-full bg-[#c10000]/5 blur-3xl"
        style={{ y: y2 }}
      />

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
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
            <Button variant="outline" className="hidden md:flex border-red-900/50 text-white hover:bg-red-900/20 gap-2">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </Link>
        </div>
      </motion.header>

      <main className="container py-8 md:py-12 relative z-10">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24" ref={heroRef}>
          <motion.div style={{ scale: heroScale, y: heroY }} className="grid gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Badge className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                Software Engineer
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-[#c10000]">Mikhail Shytsko</span>
              </h1>
              <p className="text-lg text-zinc-400 max-w-md">
                Passionate software engineer with expertise in building modern web applications. I specialize in
                creating elegant solutions to complex problems.
              </p>
              <div className="flex gap-4">
                <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
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
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                    <span className="sr-only">X (Twitter)</span>
                  </Button>
                </Link>
                <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linktr.ee/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-red-900/50 text-white hover:bg-red-900/20"
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
              className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full border-4 border-[#c10000] bg-[#1a0033]"
            >
              <div className="absolute inset-0 flex items-center justify-center text-zinc-500">Your Photo Here</div>
              {/* Replace with your actual photo */}
              {/* <Image 
                src="/placeholder.svg?height=400&width=400" 
                alt="Your Name" 
                fill 
                className="object-cover"
              /> */}
            </motion.div>
          </motion.div>
        </section>

        {/* Summary Section */}
        <section id="summary" className="py-12 md:py-24 border-t border-[#c10000] border-t-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-[#c10000]" />
                <Badge className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                  Professional Summary
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                <CardContent className="pt-6">
                  <p className="text-lg leading-relaxed">
                    Product-oriented backend developer with deep experience with Spring Boot and a passion for building
                    scalable systems that solve real user problems. Adept at applying clean architecture and right
                    libraries to achieve the desired results.
                    <span className="block mt-4 text-[#c10000] font-medium">
                      Focused on creating value, not just writing code.
                    </span>
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Meetera Co-founder Section */}
            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }} className="mt-12">
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
                    <div>
                      <CardTitle className="text-xl">Co-founder at Meetera</CardTitle>
                      <Link
                        href="https://linktr.ee/meetera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c10000] hover:text-red-400 transition-colors flex items-center gap-1 mt-1"
                      >
                        <ExternalLink className="h-4 w-4" />
                        linktr.ee/meetera
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">
                    As a co-founder of Meetera, I'm building innovative solutions to connect people and create
                    meaningful interactions. Our platform leverages cutting-edge technology to solve real-world social
                    challenges and create value for our users.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-24 border-t border-[#c10000] border-t-4" ref={experienceRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-[#c10000]" />
                <Badge className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                  Experience
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
              <p className="text-zinc-400 max-w-3xl">My professional journey as a software engineer.</p>
            </div>

            <div className="space-y-6">
              {/* Experience 1 */}
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <CardTitle className="text-xl">Software Engineer, The Designery s.r.o.</CardTitle>
                      <Badge variant="outline" className="mt-2 md:mt-0 border-red-900/50 w-fit">
                        Apr 2023 - Present
                      </Badge>
                    </div>
                    <CardDescription className="text-zinc-400 text-lg">Project: Mental Health Platform</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-zinc-400">
                        Designed and built reactive backend applications on Spring WebFlux using Google Cloud Platform
                        ecosystem.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          Spring WebFlux
                        </Badge>
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          Google Cloud
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
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-2">
                                <h4 className="font-medium">Key Responsibilities:</h4>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                  <li>
                                    Designed and built reactive backend applications on Spring WebFlux using Google
                                    Cloud Platform ecosystem
                                  </li>
                                  <li>Successfully implemented orchestration layer</li>
                                  <li>
                                    Led the project development team, while also being an architect and DevOps
                                    specialist at the project
                                  </li>
                                </ul>

                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                <p className="text-zinc-400">
                                  Worked with: Spring Framework, PostgreSQL, MongoDB, ESDB, Temporal, Pub/Sub, Kotlin,
                                  Kotlin Coroutines, Java, Gradle, Spring MQTT, GraalVM, JTest, Docker, GitHub, GitHub
                                  Actions, Maven, Junit 5.
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
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <CardTitle className="text-xl">Software Engineer, VISBS</CardTitle>
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
                        Built an equipment certification automation platform using Spring Boot and PostgreSQL, reducing
                        accounting time by 15% and accelerating product delivery by 30%.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          Spring Boot
                        </Badge>
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          PostgreSQL
                        </Badge>
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          GraalVM
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
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-2">
                                <h4 className="font-medium">Key Responsibilities:</h4>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                  <li>
                                    Built an equipment certification automation platform using Spring Boot and
                                    PostgreSQL, reducing accounting time by 15% and accelerating product delivery by 30%
                                    by eliminating manual processes
                                  </li>
                                  <li>
                                    Integrated hungry via GraalVM into Spring Boot service to analyze product trends,
                                    increasing data processing speed by 25% and accelerating decision making by
                                    improving data visualization
                                  </li>
                                  <li>
                                    Developed a certification API for mobile and web applications, improving
                                    accessibility and reducing processing time by 15% for certify by region and hardware
                                    type
                                  </li>
                                </ul>

                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                <p className="text-zinc-400">
                                  Worked with: Spring Framework, PostgreSQL, MongoDB, ESDB, Temporal, Pub/Sub, Kotlin,
                                  Kotlin Coroutines, Java, Gradle, Spring MQTT, GraalVM, JTest, Docker, GitHub, GitHub
                                  Actions, Maven, Junit 5.
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
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                  <CardHeader className="pb-2">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <CardTitle className="text-xl">Backend/DevOps Intern, WatchPizza</CardTitle>
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
                        Implemented a secure REST API using OAuth2 and JWT, improving customer data security and
                        compliance.
                      </p>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          OAuth2
                        </Badge>
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          JWT
                        </Badge>
                        <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                          Spring Framework
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
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 space-y-2">
                                <h4 className="font-medium">Key Responsibilities:</h4>
                                <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                                  <li>
                                    Implemented a secure REST API using OAuth2 and JWT, improving customer data security
                                    and compliance
                                  </li>
                                  <li>
                                    Improved shift scheduling with feature-toggle, reducing update failures by 40% and
                                    simplifying in-store deployment
                                  </li>
                                  <li>
                                    Developed A/B testing system with Kafka, increasing customer engagement by 25% and
                                    increasing promotional sales by 15%, improving marketing effectiveness
                                  </li>
                                </ul>

                                <h4 className="font-medium pt-2">Technologies Used:</h4>
                                <p className="text-zinc-400">
                                  Worked with: Spring Framework, PostgreSQL, Kafka, Docker, OAuth, GitHub, GitHub
                                  Actions, Maven, JUnit 5.
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-[#c10000]" />
                <Badge className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                  Education
                </Badge>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Education & Additional Information</h2>
            </div>

            <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-[#1a0033]/50 border-[#c10000] border-2">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-xl">Technical University of Kosice, FEI, Informatics</CardTitle>
                    <Badge variant="outline" className="mt-2 md:mt-0 border-red-900/50 w-fit">
                      Sep 2022 - Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-lg mb-2">Personal achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                        <li>
                          Successfully participated in multiple hackathons with Abyss team, including{" "}
                          <span className="text-white">Erste Digital 2024</span>,{" "}
                          <span className="text-white">Bratislava Data Hackathon</span> and{" "}
                          <span className="text-white">T-Systems Hackathon 2024</span>
                        </li>
                        <li>
                          Founded project HackFIN and successfully implemented 2 hackathons at the one in the city of
                          Prešov and online one with UnitMedia for Slovak and American Students
                        </li>
                        <li>
                          Active participation in UPJŠ Hackathon with project{" "}
                          <span className="text-white">meetera</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-lg mb-2">Languages:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-zinc-400">
                        <li>
                          <span className="text-white">Russian</span> (native)
                        </li>
                        <li>
                          <span className="text-white">Slovak</span> (professional working proficiency)
                        </li>
                        <li>
                          <span className="text-white">English</span> (C1 level, IELTS Academic band 8.0)
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-lg mb-2">Last sport number:</h4>
                      <p className="text-zinc-400">24450 (1338)/VKPV/2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-24 border-t border-[#c10000] border-t-4" ref={projectsRef}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Personal Projects</h2>
              <p className="text-zinc-400 max-w-3xl">
                Showcasing my passion for software development through personal projects.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Project 1 */}
              <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                  <CardHeader>
                    <CardTitle>AI-Powered Task Manager</CardTitle>
                    <CardDescription className="text-zinc-400">
                      A task management application with AI features to prioritize and categorize tasks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        OpenAI
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Prisma
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 2 */}
              <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                  <CardHeader>
                    <CardTitle>Crypto Dashboard</CardTitle>
                    <CardDescription className="text-zinc-400">
                      Real-time cryptocurrency tracking dashboard with advanced analytics.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        React
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        D3.js
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        WebSockets
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 3 */}
              <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                  <CardHeader>
                    <CardTitle>E-Commerce Platform</CardTitle>
                    <CardDescription className="text-zinc-400">
                      A modern e-commerce platform with cart and payment processing.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Next.js
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Stripe
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Tailwind
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Project 4 */}
              <motion.div variants={item} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                  <CardHeader>
                    <CardTitle>Developer Blog</CardTitle>
                    <CardDescription className="text-zinc-400">
                      A technical blog built with modern web technologies.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Astro
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        MDX
                      </Badge>
                      <Badge variant="secondary" className="bg-[#1a0033] hover:bg-red-900/30">
                        Vercel
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24 border-t border-[#c10000] border-t-4" ref={contactRef}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <Badge className="px-3 py-1 text-sm bg-[#c10000]/10 text-[#c10000] border-[#c10000]/20 hover:bg-[#c10000]/20 hover:text-[#c10000]">
                Contact
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
              <p className="text-zinc-400 max-w-3xl">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#c10000]" />
                      <a
                        href="mailto:your.email@example.com"
                        className="text-white hover:text-[#c10000] transition-colors"
                      >
                        your.email@example.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-[#c10000]" />
                      <Link
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#c10000] transition-colors"
                      >
                        linkedin.com/in/yourname
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-[#c10000]" />
                      <Link
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#c10000] transition-colors"
                      >
                        github.com/yourusername
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
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
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                      <Link
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#c10000] transition-colors"
                      >
                        twitter.com/yourusername
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <ExternalLink className="h-5 w-5 text-[#c10000]" />
                      <Link
                        href="https://linktr.ee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#c10000] transition-colors"
                      >
                        linktr.ee/yourusername
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-[#1a0033]/50 border-[#c10000] border-2 h-full">
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-red-900/50 bg-[#1a0033]/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#c10000] focus:ring-offset-2 focus:ring-offset-[#1a0033]"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-zinc-200">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-red-900/50 bg-[#1a0033]/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#c10000] focus:ring-offset-2 focus:ring-offset-[#1a0033]"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-red-900/50 bg-[#1a0033]/50 px-3 py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#c10000] focus:ring-offset-2 focus:ring-offset-[#1a0033]"
                          placeholder="Your message"
                        />
                      </div>
                      <motion.div whileTap={{ scale: 0.95 }}>
                        <Button type="submit" className="w-full bg-[#c10000] hover:bg-[#a00000]">
                          {isEmailSent ? "Message Sent!" : "Send Message"}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#c10000] border-t-4 bg-[#1a0033] py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-zinc-400">
            © {new Date().getFullYear()} Mikhail Shytsko. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-[#c10000]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-[#c10000]">
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
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </Link>
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-[#c10000]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linktr.ee/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-[#c10000]">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Linktr.ee</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
