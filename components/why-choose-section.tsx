"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Leaf, Utensils, MapPin } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "15+ Years of Experience",
    description: "Trusted expertise in catering excellence since 2009",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients, No Compromise",
    description: "Quality ingredients sourced daily for authentic flavors",
  },
  {
    icon: Utensils,
    title: "Veg, Non-Veg & Vegan Options",
    description: "Diverse menus catering to all dietary preferences",
  },
  {
    icon: MapPin,
    title: "Serving All Hyderabad",
    description: "From Yakutpura to the entire city, we come to you",
  },
]

export function WhyChooseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-[#2D1B4E]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm tracking-[0.2em] uppercase font-medium">
            Our Promise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-[#F5A623] mx-auto" />
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#3d2a5f] rounded-2xl p-8 text-center hover:bg-[#4a3670] transition-all duration-300 overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F5A623]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F5A623] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-[#2D1B4E]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
