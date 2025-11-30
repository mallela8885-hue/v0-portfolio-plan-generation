import { Navbar } from "@/components/navbar"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
