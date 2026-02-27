"use client"

import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  alpha: number
  life?: number
  maxLife?: number
}

export interface ParticlesHandle {
  burst: (clientX: number, clientY: number) => void
}

const ParticlesBackground = forwardRef<ParticlesHandle>(function ParticlesBackground(_, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particles = useRef<Particle[]>([])
  const particleCount = 100
  const colors = ["#ee0000", "#ff0000", "#ff3333", "#ff6666"]
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)

  useImperativeHandle(ref, () => ({
    burst(clientX: number, clientY: number) {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      for (let i = 0; i < 20; i++) {
        particles.current.push({
          x,
          y,
          size: Math.random() * 4 + 1,
          speedX: Math.random() * 4 - 2,
          speedY: Math.random() * 4 - 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.8,
          life: 0,
          maxLife: Math.random() * 60 + 30,
        })
      }
    },
  }))

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: Math.random() * 0.7 - 0.35,
        speedY: Math.random() * 0.7 - 0.35,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.3 + 0.1,
      })
    }

    // Handle mouse move to track position
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    document.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.current = particles.current.filter((particle) => {
        // If particle has life property, increment it and check if it should be removed
        if (particle.life !== undefined && particle.maxLife !== undefined) {
          particle.life++
          if (particle.life >= particle.maxLife) {
            return false
          }
          // Fade out as life increases
          particle.alpha = 0.8 * (1 - particle.life / particle.maxLife)
        }

        // Move particle
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.fill()

        // Connect particles that are close to each other
        particles.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = 0.15 * (1 - distance / 120) * particle.alpha * otherParticle.alpha
            ctx.lineWidth = 0.6
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })

        // Connect to mouse position if close enough
        if (mousePosition) {
          const dx = particle.x - mousePosition.x
          const dy = particle.y - mousePosition.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = 0.2 * (1 - distance / 150) * particle.alpha
            ctx.lineWidth = 0.8
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(mousePosition.x, mousePosition.y)
            ctx.stroke()
          }
        }

        return true
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
  )
})

export default ParticlesBackground
