"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, MapPin, User, Send, Calendar, MessageSquare } from "lucide-react"

const eventTypes = [
  "Wedding / Marriage",
  "Birthday Party",
  "Anniversary",
  "Corporate Event",
  "House Warming",
  "Engagement",
  "Religious / Festival",
  "Other",
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Construct WhatsApp message
    const message = `Hello! I'm interested in catering services.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEvent Type: ${formData.eventType}%0ADate: ${formData.date}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/919705230588?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#F5A623] text-sm tracking-[0.2em] uppercase font-medium">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D1B4E] mt-3 mb-4">
            Contact & Booking
          </h2>
          <div className="w-24 h-1 bg-[#F5A623] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#2D1B4E] rounded-2xl p-8 md:p-10 h-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-8">
                Let&apos;s Create Your Perfect Event
              </h3>

              <div className="space-y-6">
                {/* Owner */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-[#2D1B4E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Owner</p>
                    <p className="text-white text-lg font-semibold">Iqbal Ahmed</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#2D1B4E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Call Us</p>
                    <a
                      href="tel:+919705230588"
                      className="text-white text-lg font-semibold hover:text-[#F5A623] transition-colors"
                    >
                      +91 97052 30588
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F5A623] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#2D1B4E]" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Location</p>
                    <p className="text-white text-lg font-semibold">Yakutpura, Hyderabad</p>
                    <a
                      href="https://maps.app.goo.gl/5pK4pvVsQamCUcFAA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-[#F5A623] hover:text-[#ffb84d] transition-colors text-sm font-medium"
                    >
                      View on Google Maps
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative */}
              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm">Working Hours</p>
                <p className="text-white font-medium">Open 7 Days a Week • 9 AM - 10 PM</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              {/* Event Type & Date */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all appearance-none bg-white"
                  >
                    <option value="">Select event</option>
                    {eventTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:border-[#F5A623] focus:ring-2 focus:ring-[#F5A623]/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your event requirements..."
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-[#F5A623] text-[#2D1B4E] py-4 rounded-xl font-bold text-lg hover:bg-[#ffb84d] transition-colors shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                Submit Enquiry via WhatsApp
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
