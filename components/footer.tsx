"use client"

import Image from "next/image"
import { Phone, MapPin, Mail } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#cuisines", label: "Our Cuisines" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
]

const cuisineLinks = [
  "Hyderabadi Biryani",
  "Chinese Cuisine",
  "Mughalai Dishes",
  "Deccani Specials",
  "Vegetarian Menu",
]

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-[#2D1B4E] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.jpg"
                alt="Sadiya Caterers Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <span className="text-2xl font-serif font-bold text-white">SADIYA</span>
                <span className="block text-sm text-[#F5A623] tracking-widest">CATERERS</span>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4 italic font-serif">
              &quot;Crafting Memories, One Meal at a Time&quot;
            </p>
            <p className="text-white/60 text-sm">
              Premium catering services in Hyderabad with 15+ years of culinary excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-white/70 hover:text-[#F5A623] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Cuisines */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Our Cuisines</h4>
            <ul className="space-y-3">
              {cuisineLinks.map((cuisine) => (
                <li key={cuisine}>
                  <span className="text-white/70">{cuisine}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919705230588"
                  className="text-white/70 hover:text-[#F5A623] transition-colors"
                >
                  +91 97052 30588
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Yakutpura, Hyderabad, Telangana</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F5A623] mt-0.5 flex-shrink-0" />
                <span className="text-white/70">info@sadiyacaterers.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center sm:text-left">
            © 2025 Sadiya Caterers. All Rights Reserved.
          </p>
          <p className="text-white/40 text-sm">
            Designed with ❤️ in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  )
}
