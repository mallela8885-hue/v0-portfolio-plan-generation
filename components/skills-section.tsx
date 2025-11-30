"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { techIcons } from "./tech-icons"
import { Code2, Server, Brain, Smartphone, Cloud, Trophy, Bot, Workflow } from "lucide-react"

const skillCategories = [
  {
    id: "fullstack",
    name: "Full Stack Developer",
    icon: Code2,
    color: "#22d3ee",
    description: "End-to-end web application development with modern technologies",
    skills: [
      { name: "HTML5", level: 99 },
      { name: "CSS3", level: 98 },
      { name: "JavaScript", level: 98 },
      { name: "TypeScript", level: 97 },
      { name: "React", level: 98 },
      { name: "Next.js", level: 97 },
      { name: "Node.js", level: 97 },
      { name: "Express.js", level: 96 },
      { name: "MongoDB", level: 95 },
      { name: "PostgreSQL", level: 94 },
      { name: "Tailwind CSS", level: 98 },
      { name: "GraphQL", level: 93 },
      { name: "REST APIs", level: 98 },
      { name: "Prisma", level: 94 },
      { name: "Redis", level: 92 },
    ],
  },
  {
    id: "java",
    name: "Java Developer",
    icon: Server,
    color: "#ED8B00",
    description: "Enterprise-grade Java applications and microservices",
    skills: [
      { name: "Java", level: 96 },
      { name: "Spring Boot", level: 95 },
      { name: "MySQL", level: 95 },
      { name: "PostgreSQL", level: 94 },
      { name: "Kafka", level: 92 },
      { name: "Elasticsearch", level: 91 },
      { name: "REST APIs", level: 98 },
      { name: "Gradle", level: 93 },
      { name: "Maven", level: 94 },
      { name: "JUnit", level: 95 },
      { name: "Docker", level: 97 },
      { name: "Kubernetes", level: 94 },
    ],
  },
  {
    id: "aiml",
    name: "AI/ML Engineer",
    icon: Brain,
    color: "#8b5cf6",
    description: "Building intelligent systems with cutting-edge AI technologies",
    skills: [
      { name: "Python", level: 98 },
      { name: "TensorFlow", level: 96 },
      { name: "PyTorch", level: 95 },
      { name: "OpenAI API", level: 98 },
      { name: "LangChain", level: 97 },
      { name: "Hugging Face", level: 94 },
      { name: "Scikit-learn", level: 95 },
      { name: "Keras", level: 94 },
      { name: "NumPy", level: 97 },
      { name: "Pandas", level: 96 },
      { name: "OpenCV", level: 93 },
      { name: "NLP", level: 95 },
      { name: "Computer Vision", level: 94 },
      { name: "Deep Learning", level: 95 },
      { name: "Jupyter", level: 96 },
    ],
  },
  {
    id: "agents",
    name: "Agent Developer",
    icon: Bot,
    color: "#ec4899",
    description: "Creating autonomous AI agents and automation systems",
    skills: [
      { name: "LangChain", level: 97 },
      { name: "OpenAI API", level: 98 },
      { name: "AutoGPT", level: 95 },
      { name: "CrewAI", level: 94 },
      { name: "Python", level: 98 },
      { name: "FastAPI", level: 96 },
      { name: "Automation", level: 97 },
      { name: "Chrome APIs", level: 96 },
      { name: "Selenium", level: 94 },
      { name: "Playwright", level: 95 },
      { name: "Node.js", level: 97 },
      { name: "WebRTC", level: 92 },
    ],
  },
  {
    id: "mobile",
    name: "Mobile App Developer",
    icon: Smartphone,
    color: "#06b6d4",
    description: "Cross-platform and native mobile application development",
    skills: [
      { name: "Flutter", level: 96 },
      { name: "Dart", level: 95 },
      { name: "React Native", level: 95 },
      { name: "Android Studio", level: 93 },
      { name: "Kotlin", level: 92 },
      { name: "Swift", level: 90 },
      { name: "Firebase", level: 97 },
      { name: "Supabase", level: 95 },
      { name: "REST APIs", level: 98 },
      { name: "SQLite", level: 94 },
      { name: "Push Notifications", level: 95 },
    ],
  },
  {
    id: "devops",
    name: "DevOps Engineer",
    icon: Cloud,
    color: "#3b82f6",
    description: "Infrastructure automation and cloud deployment solutions",
    skills: [
      { name: "Docker", level: 97 },
      { name: "Kubernetes", level: 94 },
      { name: "AWS", level: 95 },
      { name: "Google Cloud", level: 93 },
      { name: "Azure", level: 91 },
      { name: "GitHub Actions", level: 98 },
      { name: "Jenkins", level: 94 },
      { name: "Terraform", level: 93 },
      { name: "Ansible", level: 92 },
      { name: "Linux", level: 96 },
      { name: "Nginx", level: 95 },
      { name: "Grafana", level: 93 },
      { name: "CI/CD", level: 97 },
    ],
  },
  {
    id: "competitive",
    name: "Competitive Programmer",
    icon: Trophy,
    color: "#ffa116",
    description: "Problem solving with optimal algorithms and data structures",
    skills: [
      { name: "Data Structures", level: 98 },
      { name: "Algorithms", level: 97 },
      { name: "C++", level: 96 },
      { name: "Python", level: 98 },
      { name: "Java", level: 96 },
      { name: "LeetCode", level: 96 },
      { name: "Codeforces", level: 95 },
      { name: "CodeChef", level: 94 },
      { name: "System Design", level: 95 },
      { name: "Dynamic Programming", level: 96 },
      { name: "Graph Theory", level: 95 },
    ],
  },
  {
    id: "tools",
    name: "Tools & Technologies",
    icon: Workflow,
    color: "#10b981",
    description: "Essential development tools and productivity enhancers",
    skills: [
      { name: "Git", level: 98 },
      { name: "VS Code", level: 99 },
      { name: "Postman", level: 97 },
      { name: "Figma", level: 94 },
      { name: "Swagger", level: 95 },
      { name: "Jest", level: 95 },
      { name: "Cypress", level: 94 },
      { name: "Electron", level: 93 },
      { name: "Vercel", level: 97 },
      { name: "Stripe", level: 94 },
      { name: "Twilio", level: 92 },
    ],
  },
]

function SkillCard({
  skill,
  isInView,
  delay,
  categoryColor,
}: {
  skill: { name: string; level: number }
  isInView: boolean
  delay: number
  categoryColor: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  const getSkillLevel = (level: number) => {
    if (level >= 95) return { label: "Master", color: "text-yellow-500", bg: "bg-yellow-500/10" }
    if (level >= 90) return { label: "Expert", color: "text-green-500", bg: "bg-green-500/10" }
    if (level >= 85) return { label: "Advanced", color: "text-blue-500", bg: "bg-blue-500/10" }
    return { label: "Proficient", color: "text-cyan-500", bg: "bg-cyan-500/10" }
  }

  const skillLevel = getSkillLevel(skill.level)
  const tech = techIcons[skill.name]
  const Icon = tech?.icon || Code2
  const iconColor = tech?.color || categoryColor

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        className="bg-card/40 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-4 transition-all duration-300 cursor-pointer"
        style={{
          boxShadow: isHovered ? `0 10px 40px ${iconColor}20` : "none",
        }}
      >
        <div className="flex flex-col items-center text-center gap-3">
          {/* Icon */}
          <motion.div
            className="p-3 rounded-xl"
            style={{ backgroundColor: `${iconColor}15` }}
            animate={isHovered ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <Icon className="h-8 w-8" style={{ color: iconColor }} />
          </motion.div>

          {/* Name & Level */}
          <div className="space-y-1">
            <h4 className="font-semibold text-sm">{skill.name}</h4>
            <Badge className={`${skillLevel.bg} ${skillLevel.color} border-0 text-xs`}>{skillLevel.label}</Badge>
          </div>

          {/* Progress bar */}
          <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${skill.level}%` } : {}}
              transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
              className="h-full rounded-full relative overflow-hidden"
              style={{ backgroundColor: iconColor }}
            >
              {skill.level >= 95 && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              )}
            </motion.div>
          </div>
          <span className="text-xs text-muted-foreground">{skill.level}%</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" className="py-20 md:py-32">
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
              Skills & Expertise
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Technical Mastery</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Master-level proficiency across multiple domains with hands-on experience in 150+ projects
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: catIndex * 0.1 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border overflow-hidden">
                  {/* Category Header */}
                  <CardHeader className="border-b border-border/50">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="p-4 rounded-2xl"
                        style={{ backgroundColor: `${category.color}20` }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <category.icon className="h-10 w-10" style={{ color: category.color }} />
                      </motion.div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl font-bold" style={{ color: category.color }}>
                          {category.name}
                        </CardTitle>
                        <p className="text-muted-foreground mt-1">{category.description}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="hidden sm:flex"
                        style={{ borderColor: category.color, color: category.color }}
                      >
                        {category.skills.length} Skills
                      </Badge>
                    </div>
                  </CardHeader>

                  {/* Skills Grid */}
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillCard
                          key={skill.name}
                          skill={skill}
                          isInView={isInView}
                          delay={catIndex * 0.05 + skillIndex * 0.03}
                          categoryColor={category.color}
                        />
                      ))}
                    </div>
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
