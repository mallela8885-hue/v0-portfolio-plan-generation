"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO at TechStartup",
    avatar: "/professional-woman-headshot.png",
    content:
      "Working with this developer was an absolute pleasure. They delivered our AI-powered platform ahead of schedule with exceptional quality. Their technical expertise and communication skills are top-notch.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at Fortune 500",
    avatar: "/professional-asian-man-headshot.png",
    content:
      "Incredible attention to detail and deep understanding of modern web technologies. The e-commerce platform they built for us increased our conversion rate by 40%. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder at AI Ventures",
    avatar: "/latina-professional-headshot.png",
    content:
      "Their expertise in AI and machine learning is remarkable. They built a custom ML pipeline that transformed our data processing capabilities. A true full-stack talent.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Engineering Lead at CloudTech",
    avatar: "/professional-man-headshot-korean.jpg",
    content:
      "Outstanding DevOps skills and a great team player. They set up our entire CI/CD infrastructure from scratch, reducing deployment time by 80%. Would definitely work with them again.",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-32 bg-card/30">
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
              Testimonials
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">What People Say</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Feedback from clients and colleagues I've had the pleasure to work with
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="pt-8 pb-8 px-8 md:px-12">
                    <Quote className="h-10 w-10 text-primary/30 mb-6" />
                    <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-14 w-14">
                        <AvatarImage src={testimonials[currentIndex].avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {testimonials[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonials[currentIndex].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button variant="outline" size="icon" onClick={goToPrev}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAutoPlaying(false)
                        setCurrentIndex(index)
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={goToNext}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
