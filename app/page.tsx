import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CuisinesSection } from "@/components/cuisines-section"
import { VeganSection } from "@/components/vegan-section"
import { EventsSection } from "@/components/events-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CuisinesSection />
      <VeganSection />
      <EventsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
