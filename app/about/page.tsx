import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
