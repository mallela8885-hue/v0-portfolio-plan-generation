import { Navbar } from "@/components/navbar"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function EducationPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <EducationSection />
      </div>
      <Footer />
    </main>
  )
}
