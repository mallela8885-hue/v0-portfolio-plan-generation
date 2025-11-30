import { Navbar } from "@/components/navbar"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  )
}
