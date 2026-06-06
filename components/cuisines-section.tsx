"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const cuisines = [
  {
    name: "Hyderabadi",
    description: "Authentic Dum Biryani, Haleem, Mirchi ka Salan",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop",
    icon: "🍛",
  },
  {
    name: "Chinese",
    description: "From Manchurian to Noodles, crafted with finesse",
    image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
    icon: "🥡",
  },
  {
    name: "Mughalai",
    description: "Royal Kormas, Kebabs & aromatic gravies",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop",
    icon: "👑",
  },
  {
    name: "Deccani",
    description: "Rustic, slow-cooked Deccan plateau flavors",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=800&auto=format&fit=crop",
    icon: "🌿",
  },
]

export function CuisinesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="cuisines" className="py-20 bg-[#2D1B4E]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm tracking-[0.2em] uppercase font-medium">
            Explore
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mt-3 mb-4">
            Our Cuisines
          </h2>
          <div className="w-24 h-1 bg-[#F5A623] mx-auto" />
          <p className="text-white/80 mt-6 max-w-2xl mx-auto text-pretty">
            From the aromatic Hyderabadi Biryani to the subtle flavors of Deccani cuisine, 
            we bring you a culinary journey through the finest tastes of India and beyond.
          </p>
        </motion.div>

        {/* Cuisines Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={cuisine.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#F5A623] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cuisine.image}
                  alt={cuisine.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D1B4E] via-[#2D1B4E]/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{cuisine.icon}</span>
                  <h3 className="text-xl font-serif font-bold text-white">
                    {cuisine.name}
                  </h3>
                </div>
                <p className="text-white/80 text-sm">{cuisine.description}</p>
              </div>

              {/* Gold Corner Accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-[#F5A623] border-l-[60px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
