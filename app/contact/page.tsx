import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleBackground } from "@/components/particle-background"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
