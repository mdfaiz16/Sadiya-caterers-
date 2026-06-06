"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, MapPin, Utensils } from "lucide-react"

const stats = [
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Crafting culinary excellence",
  },
  {
    icon: MapPin,
    value: "All Over",
    label: "Hyderabad",
    description: "Serving across the city",
  },
  {
    icon: Utensils,
    value: "Veg & Non-Veg",
    label: "Specialists",
    description: "For all dietary preferences",
  },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm tracking-[0.2em] uppercase font-medium">
            Our Story
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1B4E] mt-3 mb-4">
            About Sadiya Caterers
          </h2>
          <div className="w-24 h-1 bg-[#F5A623] mx-auto" />
        </motion.div>

        {/* Story Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#f8f5ff] to-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#e5e0ec] mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <p className="text-lg text-[#4a4a5a] leading-relaxed mb-6">
                Founded by <span className="font-semibold text-[#2D1B4E]">Iqbal Ahmed</span>, 
                Sadiya Caterers has been crafting unforgettable dining experiences for over 
                <span className="text-[#F5A623] font-semibold"> 15 years</span> in the heart 
                of Hyderabad. What started as a passion for authentic Hyderabadi cuisine has 
                grown into one of the most trusted catering services in the city.
              </p>
              <p className="text-lg text-[#4a4a5a] leading-relaxed">
                From intimate family gatherings to grand weddings, we bring the same dedication 
                to quality, authenticity, and service that has made us a household name in 
                <span className="font-semibold text-[#2D1B4E]"> Yakutpura</span> and beyond. 
                Every dish we serve carries the legacy of traditional recipes perfected over generations.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-[#2D1B4E] flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl font-serif font-bold text-[#F5A623]">15+</span>
                    <span className="block text-white text-sm mt-1">Years of Trust</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-[#F5A623] flex items-center justify-center">
                  <Award className="w-8 h-8 text-[#2D1B4E]" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-[#e5e0ec] hover:shadow-xl hover:border-[#F5A623]/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#2D1B4E] flex items-center justify-center group-hover:bg-[#F5A623] transition-colors">
                  <stat.icon className="w-7 h-7 text-[#F5A623] group-hover:text-[#2D1B4E] transition-colors" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-[#2D1B4E]">{stat.value}</span>
                  <h3 className="text-lg font-semibold text-[#2D1B4E]">{stat.label}</h3>
                  <p className="text-sm text-[#6b5b7a] mt-1">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 sm:w-32 h-0.5 bg-gradient-to-r from-transparent to-[#F5A623]" />
            <span className="w-3 h-3 rotate-45 bg-[#F5A623]" />
            <span className="w-16 sm:w-32 h-0.5 bg-gradient-to-l from-transparent to-[#F5A623]" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
