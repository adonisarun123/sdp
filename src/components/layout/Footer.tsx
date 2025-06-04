'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Linkedin,
  Send,
  Heart,
  Shield,
  Award,
  Globe
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    
    // Simulate newsletter signup
    setTimeout(() => {
      setIsSubscribing(false)
      setEmail('')
      alert('Thank you for subscribing to our newsletter!')
    }, 1000)
  }

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'PADI Courses', href: '/courses' },
    { name: 'Dive Centers', href: '/dive-centers' },
    { name: 'Certification', href: '/certification' },
    { name: 'Equipment', href: '/equipment' },
    { name: 'Safety', href: '/safety' },
  ]

  const destinations = [
    { name: 'Maldives', href: '/destinations/maldives' },
    { name: 'Red Sea, Egypt', href: '/destinations/red-sea' },
    { name: 'Great Barrier Reef', href: '/destinations/great-barrier-reef' },
    { name: 'Cenotes, Mexico', href: '/destinations/cenotes-mexico' },
    { name: 'Palau', href: '/destinations/palau' },
    { name: 'Raja Ampat', href: '/destinations/raja-ampat' },
  ]

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Booking Support', href: '/booking-support' },
    { name: 'Cancellation', href: '/cancellation' },
    { name: 'Travel Insurance', href: '/travel-insurance' },
    { name: 'FAQ', href: '/faq' },
  ]

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/scubadiversplanet' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/scubadiversplanet' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/scubadiversplanet' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/scubadiversplanet' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/scubadiversplanet' },
  ]

  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-accent-600 to-primary-600 py-12">
        <div className="max-width container-padding">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Dive into Our Newsletter
            </h3>
            <p className="text-accent-100 mb-6">
              Get the latest diving destinations, marine life encounters, and exclusive offers delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="bg-white text-accent-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                {isSubscribing ? (
                  <div className="spinner w-4 h-4" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-width container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.svg"
                    alt="ScubaDiversPlanet"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold">ScubaDiversPlanet</h2>
                  <p className="text-sm text-gray-300">Dive Into Adventure</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner for world-class scuba diving experiences, 
                PADI certification courses, and marine conservation initiatives worldwide.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent-400" />
                  <span className="text-gray-300">+1 (555) 123-DIVE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent-400" />
                  <span className="text-gray-300">hello@scubadiversplanet.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent-400" />
                  <span className="text-gray-300">Global Operations</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Top Destinations</h3>
              <ul className="space-y-3">
                {destinations.map((destination) => (
                  <li key={destination.name}>
                    <Link
                      href={destination.href}
                      className="text-gray-300 hover:text-accent-400 transition-colors"
                    >
                      {destination.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                {support.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-accent-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Certifications & Trust Badges */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-accent-400" />
                <span className="text-gray-300">PADI Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-accent-400" />
                <span className="text-gray-300">SSL Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-6 h-6 text-accent-400" />
                <span className="text-gray-300">Global Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-6 h-6 text-conservation-400" />
                <span className="text-gray-300">Ocean Conservation</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full hover:bg-accent-600 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-950 py-6">
        <div className="max-width container-padding">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 ScubaDiversPlanet. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 