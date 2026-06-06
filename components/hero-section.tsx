"use client"

import { motion } from "framer-motion"
import { Phone, Calendar } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2D1B4E]/80 via-[#2D1B4E]/70 to-[#2D1B4E]/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-0.5 bg-[#F5A623]" />
            <span className="text-[#F5A623] text-sm tracking-[0.3em] uppercase font-medium">
              Since 2009
            </span>
            <span className="w-12 h-0.5 bg-[#F5A623]" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight text-balance">
            A Legacy of Taste
            <span className="block text-[#F5A623] mt-2">
              15+ Years of Culinary Excellence
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Hyderabadi • Chinese • Mughalai • Deccani Cuisine
            <span className="block mt-2 text-white/70">
              — Served With Love Across Hyderabad
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="tel:+919705230588"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#F5A623] text-[#2D1B4E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ffb84d] transition-all shadow-lg hover:shadow-[#F5A623]/30"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </motion.a>
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#2D1B4E] transition-all"
            >
              <Calendar className="w-5 h-5" />
              Book Your Event
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-[#F5A623] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
