"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Salad, Check } from "lucide-react"

const veganItems = [
  { icon: "🥗", name: "Fresh Salads", description: "Garden-fresh greens" },
  { icon: "🧆", name: "Veg Starters", description: "Crispy appetizers" },
  { icon: "🍲", name: "Dal & Curries", description: "Rich, aromatic dishes" },
  { icon: "🌾", name: "Vegan Desserts", description: "Sweet indulgence" },
]

export function VeganSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-100 relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Leaf className="w-32 h-32 text-green-900" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Salad className="w-40 h-40 text-green-900" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Leaf className="w-4 h-4" />
            Veg & Vegan Friendly
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1B4E] mb-4 text-balance">
            Pure, Wholesome & Delicious
          </h2>
          <p className="text-xl text-emerald-800 font-medium">
            We Never Compromise on Quality
          </p>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Sadiya Caterers, we understand that great food should be inclusive. 
              Our dedicated vegetarian and vegan menus are crafted with the same passion 
              and expertise as our signature non-vegetarian dishes.
            </p>
            <ul className="space-y-4">
              {[
                "Separate cooking facilities for veg items",
                "Fresh, locally-sourced vegetables",
                "Traditional recipes with modern presentation",
                "Custom menus for dietary requirements",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Icon Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              {veganItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-green-200 hover:shadow-xl hover:border-green-400 transition-all text-center group"
                >
                  <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <h3 className="font-semibold text-[#2D1B4E] mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
