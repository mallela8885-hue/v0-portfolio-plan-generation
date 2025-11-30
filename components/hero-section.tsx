"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { motion } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Float,
  Ring,
  Stars,
  Torus,
  Box,
  Icosahedron,
  Octahedron,
} from "@react-three/drei"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  Github,
  Linkedin,
  ChevronDown,
  Mail,
  Code2,
  Brain,
  Bot,
} from "lucide-react"
import Link from "next/link"
import { FloatingTechIcon } from "./tech-icons"
import type * as THREE from "three"

const roles = [
  "Full-Stack Developer",
  "AI/ML Engineer",
  "Chrome Extension Developer",
  "Agent Developer",
  "App Creator",
  "DevOps Engineer",
  "Competitive Programmer",
  "Java Developer",
  "Python Expert",
]

const floatingTechNames = [
  "React",
  "Python",
  "Node.js",
  "TensorFlow",
  "Docker",
  "AWS",
  "Flutter",
  "TypeScript",
  "MongoDB",
  "Kubernetes",
  "Next.js",
  "OpenAI",
  "Java",
  "Go",
  "Firebase",
  "GraphQL",
]

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null)
  const spheres = Array.from({ length: 40 }, (_, i) => ({
    angle: (i / 40) * Math.PI * 4,
    y: (i - 20) * 0.3,
    radius: 1.5,
  }))

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={groupRef} position={[4, 0, -2]}>
      {spheres.map((s, i) => (
        <group key={i}>
          <mesh position={[Math.cos(s.angle) * s.radius, s.y, Math.sin(s.angle) * s.radius]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[-Math.cos(s.angle) * s.radius, s.y, -Math.sin(s.angle) * s.radius]}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
          </mesh>
          {i % 4 === 0 && (
            <mesh position={[0, s.y, 0]}>
              <cylinderGeometry args={[0.02, 0.02, s.radius * 2, 8]} rotation={[0, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  )
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null)
  const boxRef = useRef<THREE.Mesh>(null)
  const icoRef = useRef<THREE.Mesh>(null)
  const octRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.3
      torusRef.current.rotation.y = t * 0.2
      torusRef.current.position.y = Math.sin(t * 0.5) * 0.5 + 2
    }
    if (boxRef.current) {
      boxRef.current.rotation.x = t * 0.4
      boxRef.current.rotation.z = t * 0.3
      boxRef.current.position.y = Math.sin(t * 0.7 + 1) * 0.3 - 2
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = t * 0.5
      icoRef.current.position.x = Math.sin(t * 0.3) * 0.5 - 4
    }
    if (octRef.current) {
      octRef.current.rotation.x = t * 0.4
      octRef.current.rotation.y = t * 0.3
      octRef.current.position.x = Math.sin(t * 0.4) * 0.5 + 4
    }
  })

  return (
    <>
      <Float speed={2} rotationIntensity={0.5}>
        <Torus ref={torusRef} args={[0.5, 0.2, 16, 32]} position={[-4, 2, -3]}>
          <meshStandardMaterial color="#22d3ee" metalness={0.8} roughness={0.2} />
        </Torus>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3}>
        <Box ref={boxRef} args={[0.6, 0.6, 0.6]} position={[4, -2, -2]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.2} wireframe />
        </Box>
      </Float>
      <Float speed={1.8} rotationIntensity={0.4}>
        <Icosahedron ref={icoRef} args={[0.5, 0]} position={[-4, -1, -4]}>
          <meshStandardMaterial color="#06b6d4" metalness={0.9} roughness={0.1} />
        </Icosahedron>
      </Float>
      <Float speed={2.2} rotationIntensity={0.6}>
        <Octahedron ref={octRef} args={[0.5, 0]} position={[4, 1, -3]}>
          <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
        </Octahedron>
      </Float>
    </>
  )
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringRef1 = useRef<THREE.Mesh>(null)
  const ringRef2 = useRef<THREE.Mesh>(null)
  const ringRef3 = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x = state.clock.elapsedTime * 0.3
      ringRef1.current.rotation.z = state.clock.elapsedTime * 0.2
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y = state.clock.elapsedTime * 0.4
      ringRef2.current.rotation.x = state.clock.elapsedTime * -0.1
    }
    if (ringRef3.current) {
      ringRef3.current.rotation.z = state.clock.elapsedTime * 0.5
      ringRef3.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.8}>
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.95}
          />
        </Sphere>

        <Ring ref={ringRef1} args={[2.2, 2.35, 64]} rotation={[Math.PI / 3, 0, 0]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} side={2} />
        </Ring>
        <Ring ref={ringRef2} args={[2.6, 2.75, 64]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} side={2} />
        </Ring>
        <Ring ref={ringRef3} args={[3, 3.1, 64]} rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <meshStandardMaterial color="#f59e0b" transparent opacity={0.3} side={2} />
        </Ring>

        <Sphere args={[0.8, 32, 32]} scale={1.8}>
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.15} />
        </Sphere>
      </group>
    </Float>
  )
}

function OrbitingParticles() {
  const groupRef = useRef<THREE.Group>(null)
  const particles = Array.from({ length: 80 }, (_, i) => ({
    radius: 3 + Math.random() * 3,
    speed: 0.5 + Math.random() * 0.5,
    offset: Math.random() * Math.PI * 2,
    y: (Math.random() - 0.5) * 4,
    size: 0.02 + Math.random() * 0.03,
    color: ["#22d3ee", "#8b5cf6", "#06b6d4", "#f59e0b"][Math.floor(Math.random() * 4)],
  }))

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={[Math.cos(p.offset) * p.radius, p.y, Math.sin(p.offset) * p.radius]}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshBasicMaterial color={p.color} />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#06b6d4" />
      <pointLight position={[10, -10, 10]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[0, 10, 0]} intensity={0.5} color="#f59e0b" />
      <spotLight position={[0, 10, 0]} intensity={0.5} color="#22d3ee" />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      <AnimatedSphere />
      <FloatingGeometry />
      <DNAHelix />
      <OrbitingParticles />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

function TypingAnimation() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2500)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  return (
    <span className="text-primary">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block ml-1"
      >
        |
      </motion.span>
    </span>
  )
}

export function HeroSection() {
  const iconPositions = floatingTechNames.map((_, i) => {
    const angle = (i / floatingTechNames.length) * Math.PI * 2
    const radius = 350
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    }
  })

  const expertiseBadges = [
    { icon: Code2, label: "150+ Projects", color: "#22d3ee" },
    { icon: Brain, label: "AI/ML Expert", color: "#8b5cf6" },
    { icon: Bot, label: "Agent Developer", color: "#ec4899" },
  ]

  const quickStats = [
    { value: "5+", label: "Years Experience" },
    { value: "150+", label: "Projects Delivered" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      {/* Floating Tech Icons - Desktop Only, Performance Optimized */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden 2xl:block">
        {floatingTechNames.slice(0, 8).map((name, index) => (
          <FloatingTechIcon
            key={name}
            name={name}
            delay={index * 0.5}
            x={iconPositions[index].x}
            y={iconPositions[index].y}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container px-4 py-12 sm:py-16 md:py-20 flex items-center justify-center min-h-screen">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-5xl">
          {/* Profile Image Section */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-12"
          >
            <div className="relative w-fit">
              {/* Soft shadow backdrop - Reduced motion for performance */}
              <motion.div
                className="absolute -inset-8 md:-inset-10 bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 rounded-full blur-3xl opacity-50"
                animate={{
                  opacity: [0.45, 0.55, 0.45],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              />

              {/* Thin neon teal ring */}
              <div className="absolute -inset-2 rounded-full border border-cyan-400/60 shadow-lg shadow-cyan-400/20" />

              {/* Image container */}
              <div className="relative rounded-full overflow-hidden w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 shadow-lg shadow-black/40 bg-card flex-shrink-0">
                <Image
                  src="/kranthi-kiran-profile.jpeg"
                  alt="Kranthi Kiran"
                  width={224}
                  height={224}
                  priority
                  quality={85}
                  className="w-full h-full object-cover brightness-110 contrast-125"
                />
              </div>
            </div>
          </motion.div>

          {/* Professional Tagline Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-6 py-3 rounded-full bg-primary/15 text-primary text-sm font-semibold border border-primary/30 backdrop-blur-sm hover:bg-primary/20 transition-colors">
              Building Smart AI Agents & Scalable Systems
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-center mb-4"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-primary text-glow">Kranthi Kiran</span>
            </h1>
          </motion.div>

          {/* Professional Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground tracking-wide">
              AI Agent Engineer <span className="text-primary">|</span> Full-Stack Developer <span className="text-primary">|</span> DevOps Specialist
            </p>
          </motion.div>

          {/* Expertise Badges - Minimal, Performance Optimized */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mb-12"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {expertiseBadges.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.45 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge
                    variant="secondary"
                    className="px-4 py-2 text-sm gap-2 bg-card/70 hover:bg-card/90 backdrop-blur-sm border border-border/70 cursor-pointer transition-all"
                  >
                    <item.icon className="h-4 w-4 flex-shrink-0" style={{ color: item.color }} />
                    {item.label}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Primary CTA Buttons - Bigger and More Visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="gap-2 glow-primary text-lg px-10 py-7 font-bold rounded-lg w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">
                <Mail className="h-6 w-6" />
                Hire Me
              </Link>
            </Button>
            <Button
              size="lg"
              className="gap-2 text-lg px-10 py-7 font-bold rounded-lg w-full sm:w-auto bg-primary/20 hover:bg-primary/30 border-2 border-primary/60"
              variant="outline"
            >
              <Download className="h-6 w-6" />
              Download Resume
            </Button>
            <Button
              size="lg"
              className="gap-2 text-lg px-10 py-7 font-bold rounded-lg w-full sm:w-auto bg-primary/20 hover:bg-primary/30 border-2 border-primary/60"
              variant="outline"
              asChild
            >
              <Link href="/projects">
                <Code2 className="h-6 w-6" />
                View Projects
              </Link>
            </Button>
          </motion.div>

          {/* Secondary Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 text-muted-foreground"
          >
            <a
              href="https://github.com/kranthikiran885366"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
              title="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/kranthi-kiran-mallela-2464ab2b0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
          <Link
            href="/about"
            className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm mb-2 font-medium">Explore More</span>
            <ChevronDown className="h-6 w-6" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
