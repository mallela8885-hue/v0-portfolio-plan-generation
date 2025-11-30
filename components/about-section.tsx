"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Download, MapPin, Calendar, Briefcase, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const stats = [
  { label: "Projects Completed", value: 150, suffix: "+" },
  { label: "Domains Covered", value: 8, suffix: "" },
  { label: "GitHub Stars", value: 2500, suffix: "+" },
  { label: "Contributions", value: 1200, suffix: "+" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-4"
            >
              About Me
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Passionate Developer & Problem Solver
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Visual Side - Using Kranthi's profile photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-card rounded-3xl border border-border overflow-hidden">
                  <img src="/kranthi-kiran-profile.jpeg" alt="Kranthi Kiran" className="w-full h-full object-cover" />
                </div>
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">Top Rated</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">5+ Years Exp</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Text Side - Updated bio for Kranthi Kiran */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-4 mb-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  India
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Available for hire
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I'm <span className="text-primary font-semibold">Kranthi Kiran</span>, a passionate full-stack developer
                with a deep love for creating innovative solutions that make a real impact. With expertise spanning web
                development, artificial intelligence, mobile applications, and DevOps, I bring a holistic approach to
                every project I undertake.
              </p>

              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                My journey began with competitive programming, which honed my problem-solving skills and algorithmic
                thinking. Today, I leverage these skills to build scalable applications, intelligent AI agents, and
                seamless user experiences across multiple platforms.
              </p>

              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge through technical writing and mentorship.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  Download CV
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Let's Connect</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <Card className="text-center bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <p className="text-muted-foreground mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
