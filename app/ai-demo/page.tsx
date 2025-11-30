import { Navbar } from "@/components/navbar"
import { AISection } from "@/components/ai-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function AIDemoPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <AISection />
      </div>
      <Footer />
    </main>
  )
}
