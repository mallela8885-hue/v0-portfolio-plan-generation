"use client"

import { motion, useInView } from "framer-motion"
import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Icosahedron, MeshDistortMaterial, Stars } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, ExternalLink, Trophy, Code, BookOpen, Target, Star, CheckCircle } from "lucide-react"
import type * as THREE from "three"

const education = {
  degree: "Bachelor of Technology in Computer Science",
  university: "Vignan Foundation Science and Technologies",
  period: "2023 - 2027",
  gpa: "3.9/4.0",
  specialization: "Artificial Intelligence & Machine Learning",
  thesis: "Deep Learning Approaches for Natural Language Understanding",
  highlights: [
    "Dean's List all semesters",
    "Computer Science Honor Society",
    "Research Assistant - AI Lab",
    "Hackathon Winner (5x)",
    "Published 3 research papers",
    "Teaching Assistant for Data Structures",
    "Best Project Award - Final Year",
    "Merit Scholarship Recipient",
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Distributed Systems",
    "Cloud Computing",
    "Database Management",
    "Software Engineering",
    "Computer Networks",
  ],
}

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
    badge: "Professional",
    color: "#FF9900",
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    link: "#",
    badge: "Expert",
    color: "#FF6F00",
  },
  {
    name: "Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "2023",
    link: "#",
    badge: "Certified",
    color: "#326CE5",
  },
  {
    name: "Meta Frontend Developer",
    issuer: "Meta",
    date: "2022",
    link: "#",
    badge: "Professional",
    color: "#0668E1",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    link: "#",
    badge: "Professional",
    color: "#4285F4",
  },
  {
    name: "MongoDB Developer",
    issuer: "MongoDB University",
    date: "2022",
    link: "#",
    badge: "Certified",
    color: "#47A248",
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker",
    date: "2023",
    link: "#",
    badge: "Associate",
    color: "#2496ED",
  },
  {
    name: "Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023",
    link: "#",
    badge: "Associate",
    color: "#0078D4",
  },
]

const competitiveProfiles = [
  {
    platform: "LeetCode",
    handle: "@mallelakranthikiran",
    rating: "2150+",
    rank: "Top 3%",
    problems: "500+",
    color: "#FFA116",
    link: "https://leetcode.com/u/mallelakranthikiran/",
    achievements: ["Knight Badge", "100 Day Streak", "Contest Rating 2000+"],
  },
  {
    platform: "Codeforces",
    handle: "@Kranthi88",
    rating: "1850",
    rank: "Expert",
    problems: "400+",
    color: "#1F8ACB",
    link: "https://codeforces.com/profile/Kranthi88",
    achievements: ["Expert Title", "100+ Contests", "Div 2 Winner"],
  },
  {
    platform: "CodeChef",
    handle: "@kranthi88",
    rating: "2100",
    rank: "5 Star",
    problems: "300+",
    color: "#5B4638",
    link: "https://www.codechef.com/users/kranthi88",
    achievements: ["5 Star Coder", "Long Challenge Winner", "Cook-Off Expert"],
  },
  {
    platform: "HackerRank",
    handle: "@kranthikiran",
    rating: "Gold",
    rank: "Top 5%",
    problems: "200+",
    color: "#00EA64",
    link: "https://hackerrank.com",
    achievements: ["Gold Badge (5)", "Problem Solving Expert", "SQL Expert"],
  },
]

function EducationScene() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#22d3ee" />
      <Stars radius={50} depth={30} count={1000} factor={3} saturation={0} fade speed={0.5} />
      <Float speed={2} rotationIntensity={0.3}>
        <Icosahedron ref={meshRef} args={[2, 1]} position={[0, 0, -5]}>
          <MeshDistortMaterial color="#22d3ee" transparent opacity={0.3} distort={0.3} speed={2} />
        </Icosahedron>
      </Float>
    </>
  )
}

export function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="education" className="py-20 md:py-32 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Suspense fallback={null}>
            <EducationScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Education & Achievements
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Academic Excellence</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A journey of continuous learning and achievement in technology
            </p>
          </div>

          {/* ... existing code for education and certifications ... */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <motion.div className="p-3 rounded-xl bg-primary/10" whileHover={{ rotate: 10, scale: 1.1 }}>
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl">Education</CardTitle>
                      <p className="text-sm text-muted-foreground">{education.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                    <p className="text-primary font-medium">{education.university}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="secondary">GPA: {education.gpa}</Badge>
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {education.specialization}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Thesis
                    </h4>
                    <p className="text-sm text-muted-foreground italic">"{education.thesis}"</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary" />
                      Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {education.highlights.map((highlight, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.05 }}
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          {highlight}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      Key Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <motion.div className="p-3 rounded-xl bg-primary/10" whileHover={{ rotate: -10, scale: 1.1 }}>
                      <Award className="h-8 w-8 text-primary" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-xl">Certifications</CardTitle>
                      <p className="text-sm text-muted-foreground">{certifications.length} Professional Certificates</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-8 rounded-full" style={{ backgroundColor: cert.color }} />
                          <div>
                            <p className="font-medium text-sm group-hover:text-primary transition-colors">
                              {cert.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {cert.issuer} • {cert.date}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="text-xs hidden sm:flex"
                            style={{ borderColor: cert.color, color: cert.color }}
                          >
                            {cert.badge}
                          </Badge>
                          <Button variant="ghost" size="icon" className="h-8 w-8" asChild>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <motion.div
                    className="p-3 rounded-xl bg-yellow-500/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </motion.div>
                  <div>
                    <CardTitle className="text-xl">Competitive Programming</CardTitle>
                    <p className="text-sm text-muted-foreground">1000+ problems solved across platforms</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {competitiveProfiles.map((profile, index) => (
                    <motion.a
                      key={profile.platform}
                      href={profile.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="block p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all cursor-pointer"
                      style={{ boxShadow: `0 0 20px ${profile.color}10` }}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${profile.color}20` }}>
                          <Code className="h-6 w-6" style={{ color: profile.color }} />
                        </div>
                        <div>
                          <h4 className="font-bold">{profile.platform}</h4>
                          <p className="text-xs text-muted-foreground">{profile.handle}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Rating</span>
                          <span className="font-bold text-lg" style={{ color: profile.color }}>
                            {profile.rating}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Rank</span>
                          <Badge variant="secondary">{profile.rank}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Problems</span>
                          <span className="font-medium">{profile.problems}</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-border/50">
                        <p className="text-xs text-muted-foreground mb-2">Achievements</p>
                        <div className="flex flex-wrap gap-1">
                          {profile.achievements.map((achievement) => (
                            <Badge
                              key={achievement}
                              variant="outline"
                              className="text-xs"
                              style={{ borderColor: `${profile.color}50` }}
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
