"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useState, useMemo } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ExternalLink, Github, Code2, Brain, Smartphone, Globe, Cloud, Bot } from "lucide-react"
import { techIcons } from "./tech-icons"

const categories = [
  { name: "All", icon: Globe },
  { name: "Web", icon: Globe },
  { name: "AI/ML", icon: Brain },
  { name: "Mobile", icon: Smartphone },
  { name: "Chrome Extensions", icon: Code2 },
  { name: "DevOps", icon: Cloud },
  { name: "Agents", icon: Bot },
]

const projects = [
  {
    id: 1,
    title: "AI-Powered Code Assistant",
    description:
      "An intelligent coding companion that helps developers write better code with real-time suggestions and explanations.",
    longDescription:
      "Built with OpenAI's GPT-4, this VS Code extension provides context-aware code suggestions, automatic documentation generation, and intelligent refactoring recommendations. It learns from your coding patterns to provide personalized assistance.",
    category: "AI/ML",
    tech: ["Python", "OpenAI API", "TypeScript"],
    features: ["Real-time suggestions", "Auto documentation", "Code explanation", "Refactoring hints"],
    image: "/ai-code-assistant-dark-theme-interface.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced features like real-time inventory and AI recommendations.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js, featuring real-time inventory management, AI-powered product recommendations, multi-vendor support, and advanced analytics dashboard.",
    category: "Web",
    tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
    features: ["Real-time inventory", "AI recommendations", "Multi-vendor", "Analytics"],
    image: "/modern-ecommerce-dashboard-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    description:
      "Cross-platform mobile app for comprehensive fitness tracking with AI-powered workout recommendations.",
    longDescription:
      "A Flutter-based fitness app that tracks workouts, nutrition, and sleep patterns. Uses machine learning to provide personalized workout plans and nutrition advice based on user goals and progress.",
    category: "Mobile",
    tech: ["Flutter", "Firebase", "TensorFlow"],
    features: ["Workout tracking", "Nutrition logging", "AI coach", "Progress analytics"],
    image: "/fitness-mobile-app-dark-theme-mockup.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Tab Manager Pro",
    description: "Chrome extension for intelligent tab management with AI-powered grouping and memory optimization.",
    longDescription:
      "A powerful Chrome extension that automatically groups tabs by topic using NLP, hibernates inactive tabs to save memory, and provides a beautiful dashboard for tab management.",
    category: "Chrome Extensions",
    tech: ["JavaScript", "TypeScript", "NLP"],
    features: ["Auto grouping", "Memory optimization", "Search", "Sync"],
    image: "/chrome-extension-tab-manager-dark-interface.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 5,
    title: "Kubernetes Auto-Scaler",
    description: "Intelligent auto-scaling solution for Kubernetes clusters based on predictive analytics.",
    longDescription:
      "A custom Kubernetes controller that uses machine learning to predict traffic patterns and proactively scale resources, reducing costs while maintaining performance during peak loads.",
    category: "DevOps",
    tech: ["Docker", "Kubernetes", "Python", "TensorFlow"],
    features: ["Predictive scaling", "Cost optimization", "Custom metrics", "Alerting"],
    image: "/kubernetes-dashboard-monitoring-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 6,
    title: "Customer Support Agent",
    description: "Autonomous AI agent that handles customer inquiries with human-like understanding.",
    longDescription:
      "An AI-powered customer support agent built with LangChain that can understand context, access knowledge bases, and provide accurate responses. Includes escalation protocols and sentiment analysis.",
    category: "Agents",
    tech: ["LangChain", "OpenAI API", "Node.js", "React"],
    features: ["Natural language", "Knowledge base", "Escalation", "Analytics"],
    image: "/ai-chatbot-customer-support-interface-dark.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 7,
    title: "Real-time Collaboration Tool",
    description: "Google Docs-like collaboration platform with video chat and AI writing assistance.",
    longDescription:
      "A real-time document collaboration platform featuring simultaneous editing, integrated video chat, AI writing suggestions, and version history. Built with WebRTC and CRDTs for conflict-free synchronization.",
    category: "Web",
    tech: ["React", "Node.js", "PostgreSQL"],
    features: ["Real-time editing", "Video chat", "AI assistance", "Version history"],
    image: "/collaborative-document-editor-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 8,
    title: "Image Generation API",
    description: "Scalable API for AI image generation with custom model fine-tuning capabilities.",
    longDescription:
      "A production-ready API service for generating images using Stable Diffusion, with support for custom model fine-tuning, batch processing, and integration with popular platforms.",
    category: "AI/ML",
    tech: ["Python", "Docker", "Redis"],
    features: ["Custom models", "Batch processing", "Rate limiting", "Webhooks"],
    image: "/ai-image-generation-interface-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 9,
    title: "Social Media App",
    description: "Feature-rich social platform with stories, live streaming, and AI content moderation.",
    longDescription:
      "A full-featured social media application with posts, stories, live streaming, and real-time messaging. Includes AI-powered content moderation and recommendation algorithms.",
    category: "Mobile",
    tech: ["React Native", "Node.js", "MongoDB", "AWS"],
    features: ["Stories", "Live streaming", "AI moderation", "Recommendations"],
    image: "/social-media-mobile-app-dark-theme.jpg",
    github: "https://github.com",
    demo: "https://demo.com",
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

function ProjectCard({ project, onClick }: { project: (typeof projects)[0]; onClick: () => void }) {
  const CategoryIcon = categories.find((c) => c.name === project.category)?.icon || Globe

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card
        className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all cursor-pointer overflow-hidden group"
        onClick={onClick}
      >
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <motion.div
            className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 15 }}
          >
            <CategoryIcon className="h-4 w-4 text-primary" />
          </motion.div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="gap-1">
              <CategoryIcon className="h-3 w-3" />
              {project.category}
            </Badge>
          </div>
          <h3 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">{project.title}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.slice(0, 3).map((t) => (
              <TechBadge key={t} tech={t} />
            ))}
            {project.tech.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tech.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="pt-0">
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" className="gap-2" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Demo
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredProjects = useMemo(() => {
    return activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  return (
    <section id="projects" className="py-20 md:py-32">
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
              Projects
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects from my portfolio of 150+ creations across multiple domains
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.name}
                  variant={activeCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveCategory(category.name)
                    setVisibleCount(6)
                  }}
                  className="rounded-full gap-2"
                >
                  <IconComponent className="h-4 w-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
              ))}
            </AnimatePresence>
          </div>

          {/* Load More */}
          {visibleCount < filteredProjects.length && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-12">
              <Button size="lg" variant="outline" onClick={() => setVisibleCount((prev) => prev + 6)}>
                Load More Projects
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <Badge>{selectedProject.category}</Badge>
                </div>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-auto"
                  />
                </div>

                <div>
                  <h4 className="font-semibold mb-2">About this project</h4>
                  <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <TechBadge key={t} tech={t} />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="gap-2 flex-1" asChild>
                    <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="gap-2 flex-1 bg-transparent" asChild>
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
