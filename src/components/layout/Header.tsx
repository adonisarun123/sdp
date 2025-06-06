'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search, 
  Menu, 
  X, 
  LogIn,
  UserPlus,
  Waves
} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Destinations', href: '/destinations' },
    { name: 'Marine Life', href: '/marine-life' },
    { name: 'Conservation', href: '/conservation' },
    { name: 'Dive Jobs', href: '/jobs' },
    { name: 'Community', href: '/community' },
    { name: 'Calendar', href: '/calendar' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-xl border-b border-gray-100' 
          : 'bg-white/98 backdrop-blur-md shadow-lg'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Enhanced Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-4 group"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <Waves className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                ScubaDiversPlanet
              </h1>
              <p className="text-sm text-blue-600 font-medium -mt-1">
                Dive Into Adventure
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Enhanced Bold Design */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2.5 text-gray-700 hover:text-blue-600 font-bold text-sm uppercase tracking-wide transition-all duration-300 relative group rounded-lg hover:bg-blue-50"
              >
                {item.name}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:block flex-1 max-w-sm mx-8">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              <input
                type="text"
                placeholder="Search destinations, marine life..."
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 font-medium placeholder-gray-500"
              />
            </div>
          </div>

          {/* Enhanced Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/login"
              className="hidden sm:flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-bold transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
            
            <Link
              href="/register"
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <UserPlus className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Up</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 text-gray-700 hover:text-blue-600 transition-colors duration-300 rounded-lg hover:bg-gray-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-200 py-6 bg-white"
          >
            {/* Mobile Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all font-medium"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 font-bold uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Links */}
            <div className="space-y-3 pt-4 border-t border-gray-200">
              <Link
                href="/login"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-all duration-300 font-bold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-center hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header 