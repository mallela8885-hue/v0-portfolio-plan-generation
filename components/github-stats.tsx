"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GitBranch, Star, GitFork, Users, Activity, Code } from "lucide-react"

const githubStats = [
  { icon: Star, label: "Total Stars", value: "2,500+", color: "#FFD700" },
  { icon: GitFork, label: "Forks", value: "850+", color: "#22d3ee" },
  { icon: GitBranch, label: "Repositories", value: "150+", color: "#10B981" },
  { icon: Users, label: "Followers", value: "1,200+", color: "#8B5CF6" },
  { icon: Activity, label: "Contributions", value: "3,000+", color: "#F59E0B" },
  { icon: Code, label: "Lines of Code", value: "500K+", color: "#EC4899" },
]

export function GithubStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 md:py-32">
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
              GitHub Activity
            </motion.span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Open Source Contributions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My GitHub activity and open source involvement at a glance
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {githubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all text-center h-full">
                  <CardContent className="pt-6">
                    <stat.icon className="h-8 w-8 mx-auto mb-3" style={{ color: stat.color }} />
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contribution Graph Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Contribution Activity</h3>
                <div className="grid grid-cols-52 gap-1">
                  {Array.from({ length: 364 }).map((_, i) => {
                    const intensity = Math.random()
                    let bgColor = "bg-secondary"
                    if (intensity > 0.8) bgColor = "bg-primary"
                    else if (intensity > 0.6) bgColor = "bg-primary/70"
                    else if (intensity > 0.4) bgColor = "bg-primary/40"
                    else if (intensity > 0.2) bgColor = "bg-primary/20"

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9 + i * 0.001 }}
                        className={`w-2 h-2 rounded-sm ${bgColor}`}
                      />
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
