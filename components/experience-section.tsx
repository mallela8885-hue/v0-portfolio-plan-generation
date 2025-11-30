"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, ChevronDown, MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { techIcons } from "./tech-icons"

const experiences = [
  {
    id: 1,
    role: "Senior Full-Stack Developer",
    company: "Tech Corp",
    type: "Full-time",
    period: "2023 - Present",
    location: "Remote",
    description: "Leading development of cloud-native applications and AI-powered features for enterprise clients.",
    achievements: [
      "Led team of 5 developers on critical product launches",
      "Reduced API response times by 60% through optimization",
      "Implemented AI-powered recommendation engine increasing engagement by 40%",
      "Established CI/CD pipelines reducing deployment time by 75%",
    ],
    tech: ["React", "Node.js", "AWS", "OpenAI API", "Kubernetes"],
  },
  {
    id: 2,
    role: "AI/ML Engineer",
    company: "AI Startup",
    type: "Full-time",
    period: "2021 - 2023",
    location: "Remote",
    description: "Developed and deployed machine learning models for natural language processing and computer vision.",
    achievements: [
      "Built NLP pipeline processing 10M+ documents daily",
      "Deployed computer vision models with 95% accuracy",
      "Created automated ML training infrastructure",
      "Published 2 research papers on transformer architectures",
    ],
    tech: ["Python", "TensorFlow", "PyTorch", "AWS", "Docker"],
  },
  {
    id: 3,
    role: "DevOps Engineer",
    company: "Cloud Solutions Inc",
    type: "Contract",
    period: "2020 - 2021",
    location: "Remote",
    description: "Designed and maintained cloud infrastructure for high-traffic applications.",
    achievements: [
      "Migrated legacy systems to Kubernetes, improving scalability 10x",
      "Implemented zero-downtime deployment strategies",
      "Reduced infrastructure costs by 45% through optimization",
      "Set up monitoring and alerting for 99.99% uptime",
    ],
    tech: ["Kubernetes", "Terraform", "AWS", "GitHub Actions", "Linux"],
  },
  {
    id: 4,
    role: "Software Developer Intern",
    company: "Innovation Labs",
    type: "Internship",
    period: "2019 - 2020",
    location: "India",
    description: "Full-stack development on various client projects and internal tools.",
    achievements: [
      "Built 5 production-ready web applications",
      "Contributed to open-source projects with 500+ stars",
      "Developed Chrome extension with 10K+ users",
      "Mentored 3 junior interns",
    ],
    tech: ["React", "Node.js", "MongoDB", "Python"],
  },
]

function TechBadge({ tech }: { tech: string }) {
  const techInfo = techIcons[tech]
  const IconComponent = techInfo?.icon

  return (
    <Badge
      variant="outline"
      className="text-xs flex items-center gap-1.5 py-1 px-2"
      style={techInfo ? { borderColor: `${techInfo.color}40` } : undefined}
    >
      {IconComponent && <IconComponent className="h-3 w-3" style={{ color: techInfo?.color }} />}
      {tech}
    </Badge>
  )
}

function TimelineItem({ experience, index }: { experience: (typeof experiences)[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

      {/* Timeline dot with pulse */}
      <motion.div
        className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 hidden md:block z-10"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
      >
        <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background relative">
          <motion.div
            className="absolute inset-0 bg-primary rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      <div className={cn("md:w-1/2 md:pr-12", index % 2 === 1 && "md:ml-auto md:pl-12 md:pr-0")}>
        <Card
          className={cn(
            "bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden",
            isExpanded && "border-primary/50",
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <CardContent className="pt-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{experience.role}</h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <Building className="h-4 w-4" />
                  <span>{experience.company}</span>
                  <Badge variant="secondary" className="text-xs">
                    {experience.type}
                  </Badge>
                </div>
              </div>
              <motion.button
                className="text-muted-foreground hover:text-primary transition-colors"
                animate={{ rotate: isExpanded ? 180 : 0 }}
              >
                <ChevronDown className="h-5 w-5" />
              </motion.button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </span>
            </div>

            <p className="text-muted-foreground mb-4">{experience.description}</p>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              className="overflow-hidden"
            >
              <div className="pt-4 border-t border-border">
                <h4 className="font-semibold mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">●</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <div className="flex flex-wrap gap-2 mt-4">
              {experience.tech.map((t) => (
                <TechBadge key={t} tech={t} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30">
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
              Experience
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Professional Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A timeline of my career milestones and professional growth
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {experiences.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
