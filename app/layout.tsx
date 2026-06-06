import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Sadiya Caterers | Premium Catering Service in Hyderabad',
  description: 'Sadiya Caterers - 15+ years of culinary excellence in Hyderabad. Specializing in Hyderabadi, Chinese, Mughalai & Deccani cuisines for weddings, parties & corporate events.',
  keywords: 'catering, Hyderabad, biryani, weddings, events, Hyderabadi food, Mughalai, Chinese food, caterers Yakutpura',
  verification: {
    google: 'FGZ-ZwKPcSy2zjbS0-WNViWy5yNa3M8SB_6KeiMqetU',
  },
  openGraph: {
    title: 'Sadiya Caterers | Premium Catering Service in Hyderabad',
    description: '15+ years of culinary excellence. Serving authentic Hyderabadi, Chinese, Mughalai & Deccani cuisines across Hyderabad.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#2D1B4E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
