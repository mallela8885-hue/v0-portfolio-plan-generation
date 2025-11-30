import { Navbar } from "@/components/navbar"
import { SkillsSection } from "@/components/skills-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  )
}
