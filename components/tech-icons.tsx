"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiFlutter,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiGithubactions,
  SiLinux,
  SiTerraform,
  SiFirebase,
  SiRedis,
  SiGraphql,
  SiGit,
  SiVercel,
  SiFramer,
  SiThreedotjs,
  SiAndroidstudio,
  SiHuggingface,
  SiLangchain,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiMysql,
  SiJenkins,
  SiNginx,
  SiApachekafka,
  SiElasticsearch,
  SiGrafana,
  SiAnsible,
  SiGooglecloud,
  SiSpring,
  SiKotlin,
  SiSwift,
  SiDart,
  SiRust,
  SiCplusplus,
  SiC,
  SiGo,
  SiPhp,
  SiLaravel,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPrisma,
  SiSupabase,
  SiStripe,
  SiTwilio,
  SiSocketdotio,
  SiWebrtc,
  SiElectron,
  SiJest,
  SiCypress,
  SiPlaywright,
  SiSelenium,
  SiPostman,
  SiSwagger,
  SiFigma,
  SiAdobexd,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiKeras,
  SiApachespark,
  SiJupyter,
  SiOpencv,
  SiArduino,
  SiRaspberrypi,
  SiGradle,
  SiApachemaven,
  SiJunit5,
  SiSqlite,
  SiVisualstudiocode,
} from "react-icons/si"
import { FaJava, FaMicrosoft, FaBell, FaInfinity, FaProjectDiagram, FaSitemap } from "react-icons/fa"
import { Code2, Cpu, Database, Globe, Layers, Terminal, Brain, Cloud, Bot, Shield, Workflow } from "lucide-react"

export const techIcons: Record<string, { icon: React.ComponentType<{ className?: string }>; color: string }> = {
  // Frontend
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  CSS3: { icon: SiCss3, color: "#1572B6" },
  SASS: { icon: SiSass, color: "#CC6699" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  "Framer Motion": { icon: SiFramer, color: "#0055FF" },
  "Three.js": { icon: SiThreedotjs, color: "#ffffff" },

  // Backend
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "#ffffff" },
  Python: { icon: SiPython, color: "#3776AB" },
  Java: { icon: FaJava, color: "#ED8B00" },
  "Spring Boot": { icon: SiSpring, color: "#6DB33F" },
  Kotlin: { icon: SiKotlin, color: "#7F52FF" },
  Go: { icon: SiGo, color: "#00ADD8" },
  Golang: { icon: SiGo, color: "#00ADD8" },
  Rust: { icon: SiRust, color: "#DEA584" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  C: { icon: SiC, color: "#A8B9CC" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  Django: { icon: SiDjango, color: "#092E20" },
  Flask: { icon: SiFlask, color: "#ffffff" },
  FastAPI: { icon: SiFastapi, color: "#009688" },

  // Databases
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  Prisma: { icon: SiPrisma, color: "#2D3748" },
  Supabase: { icon: SiSupabase, color: "#3ECF8E" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Elasticsearch: { icon: SiElasticsearch, color: "#005571" },
  SQLite: { icon: SiSqlite, color: "#003B57" },

  // AI/ML
  TensorFlow: { icon: SiTensorflow, color: "#FF6F00" },
  PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
  "OpenAI API": { icon: SiOpenai, color: "#412991" },
  OpenAI: { icon: SiOpenai, color: "#412991" },
  "Hugging Face": { icon: SiHuggingface, color: "#FFD21E" },
  LangChain: { icon: SiLangchain, color: "#1C3C3C" },
  "Scikit-learn": { icon: SiScikitlearn, color: "#F7931E" },
  Keras: { icon: SiKeras, color: "#D00000" },
  NumPy: { icon: SiNumpy, color: "#013243" },
  Pandas: { icon: SiPandas, color: "#150458" },
  OpenCV: { icon: SiOpencv, color: "#5C3EE8" },
  Jupyter: { icon: SiJupyter, color: "#F37626" },
  "Apache Spark": { icon: SiApachespark, color: "#E25A1C" },
  NLP: { icon: Brain, color: "#8B5CF6" },
  "Computer Vision": { icon: Brain, color: "#10B981" },
  "Deep Learning": { icon: Brain, color: "#F59E0B" },

  // Mobile
  Flutter: { icon: SiFlutter, color: "#02569B" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "Android Studio": { icon: SiAndroidstudio, color: "#3DDC84" },
  Swift: { icon: SiSwift, color: "#F05138" },
  Dart: { icon: SiDart, color: "#0175C2" },
  "Push Notifications": { icon: FaBell, color: "#FF6B6B" },

  // DevOps & Cloud
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  AWS: { icon: SiAmazonwebservices, color: "#FF9900" },
  "Google Cloud": { icon: SiGooglecloud, color: "#4285F4" },
  Azure: { icon: FaMicrosoft, color: "#0078D4" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Kafka: { icon: SiApachekafka, color: "#231F20" },
  "CI/CD": { icon: FaInfinity, color: "#2088FF" },

  // Build Tools
  Gradle: { icon: SiGradle, color: "#02303A" },
  Maven: { icon: SiApachemaven, color: "#C71A36" },
  JUnit: { icon: SiJunit5, color: "#25A162" },

  // Tools & Others
  Git: { icon: SiGit, color: "#F05032" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Electron: { icon: SiElectron, color: "#47848F" },
  "Socket.io": { icon: SiSocketdotio, color: "#010101" },
  WebRTC: { icon: SiWebrtc, color: "#333333" },
  Stripe: { icon: SiStripe, color: "#635BFF" },
  Twilio: { icon: SiTwilio, color: "#F22F46" },
  Jest: { icon: SiJest, color: "#C21325" },
  Cypress: { icon: SiCypress, color: "#17202C" },
  Playwright: { icon: SiPlaywright, color: "#2EAD33" },
  Selenium: { icon: SiSelenium, color: "#43B02A" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Swagger: { icon: SiSwagger, color: "#85EA2D" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "Adobe XD": { icon: SiAdobexd, color: "#FF61F6" },
  Arduino: { icon: SiArduino, color: "#00979D" },
  "Raspberry Pi": { icon: SiRaspberrypi, color: "#A22846" },
  "VS Code": { icon: SiVisualstudiocode, color: "#007ACC" },

  // Competitive Programming
  "Data Structures": { icon: Layers, color: "#22D3EE" },
  Algorithms: { icon: Cpu, color: "#A855F7" },
  LeetCode: { icon: Code2, color: "#FFA116" },
  Codeforces: { icon: Terminal, color: "#1F8ACB" },
  CodeChef: { icon: Code2, color: "#5B4638" },
  "System Design": { icon: Globe, color: "#10B981" },
  "Dynamic Programming": { icon: FaProjectDiagram, color: "#F59E0B" },
  "Graph Theory": { icon: FaSitemap, color: "#8B5CF6" },

  // APIs & Services
  "REST APIs": { icon: Cloud, color: "#22D3EE" },
  "Chrome APIs": { icon: Globe, color: "#4285F4" },
  "VS Code API": { icon: Code2, color: "#007ACC" },
  SQL: { icon: Database, color: "#4479A1" },

  // Agent Development
  "AI Agents": { icon: Bot, color: "#8B5CF6" },
  AutoGPT: { icon: Bot, color: "#412991" },
  CrewAI: { icon: Bot, color: "#22D3EE" },
  Automation: { icon: Workflow, color: "#F59E0B" },

  // Security
  Cybersecurity: { icon: Shield, color: "#EF4444" },
  OAuth: { icon: Shield, color: "#EB5424" },
  JWT: { icon: Shield, color: "#000000" },
}

export function TechIcon({
  name,
  size = "md",
  showLabel = true,
  animate = true,
}: {
  name: string
  size?: "sm" | "md" | "lg" | "xl"
  showLabel?: boolean
  animate?: boolean
}) {
  const tech = techIcons[name]
  const Icon = tech?.icon || Code2
  const color = tech?.color || "#22D3EE"

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  }

  const containerSizes = {
    sm: "p-2",
    md: "p-3",
    lg: "p-4",
    xl: "p-5",
  }

  return (
    <motion.div
      className="flex flex-col items-center gap-2 group"
      whileHover={animate ? { scale: 1.1, y: -5 } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div
        className={`${containerSizes[size]} rounded-xl bg-card/50 backdrop-blur-sm border border-border group-hover:border-primary/50 transition-all duration-300`}
        style={{ boxShadow: `0 0 20px ${color}15` }}
      >
        <Icon className={`${sizeClasses[size]} transition-colors duration-300`} style={{ color }} />
      </div>
      {showLabel && (
        <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {name}
        </span>
      )}
    </motion.div>
  )
}

export function FloatingTechIcon({
  name,
  delay = 0,
  x,
  y,
}: {
  name: string
  delay?: number
  x: number
  y: number
}) {
  const tech = techIcons[name]
  const Icon = tech?.icon || Code2
  const color = tech?.color || "#22D3EE"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.4, 0.8, 0.4],
        scale: 1,
        x: [x - 20, x + 20, x - 20],
        y: [y - 20, y + 20, y - 20],
        rotateY: [0, 360],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
      }}
      className="absolute pointer-events-none"
      style={{
        left: "50%",
        top: "50%",
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
      }}
    >
      <div
        className="p-3 rounded-xl backdrop-blur-md border shadow-lg"
        style={{
          backgroundColor: `${color}15`,
          borderColor: `${color}40`,
          boxShadow: `0 0 30px ${color}30`,
        }}
      >
        <Icon className="h-6 w-6" style={{ color }} />
      </div>
    </motion.div>
  )
}
