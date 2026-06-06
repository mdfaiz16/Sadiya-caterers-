"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Heart, 
  Cake, 
  Gift, 
  Home, 
  Briefcase, 
  Sparkles, 
  GraduationCap, 
  Moon, 
  PartyPopper 
} from "lucide-react"

const events = [
  {
    icon: Heart,
    title: "Marriages & Weddings",
    description: "Grand feasts for your special day",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Delicious celebrations for all ages",
  },
  {
    icon: Gift,
    title: "Anniversary Celebrations",
    description: "Romantic dinners & family gatherings",
  },
  {
    icon: Home,
    title: "House Warming",
    description: "Welcome guests with great food",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description: "Professional catering solutions",
  },
  {
    icon: Sparkles,
    title: "Engagement Ceremonies",
    description: "Begin your journey with us",
  },
  {
    icon: GraduationCap,
    title: "Graduation Parties",
    description: "Celebrate academic achievements",
  },
  {
    icon: Moon,
    title: "Religious & Festivals",
    description: "Traditional festive menus",
  },
  {
    icon: PartyPopper,
    title: "Social Get-Togethers",
    description: "Perfect for any occasion",
  },
]

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="events" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm tracking-[0.2em] uppercase font-medium">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1B4E] mt-3 mb-4">
            Events We Cater
          </h2>
          <div className="w-24 h-1 bg-[#F5A623] mx-auto" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-pretty">
            From intimate gatherings to grand celebrations, we bring exceptional 
            culinary experiences to every event.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#F5A623] hover:shadow-xl hover:shadow-[#F5A623]/10 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#f8f5ff] flex items-center justify-center group-hover:bg-[#2D1B4E] transition-colors flex-shrink-0">
                  <event.icon className="w-7 h-7 text-[#2D1B4E] group-hover:text-[#F5A623] transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#2D1B4E] group-hover:text-[#F5A623] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
