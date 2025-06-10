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
          ? 'bg-white shadow-lg border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                <Waves className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                ScubaDiversPlanet
              </span>
              <span className="text-xs text-blue-600 font-medium -mt-1 hidden sm:block">
                Dive Into Adventure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Auth Buttons */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="/login"
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
              
              <Link
                href="/register"
                className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-gray-200 py-4 bg-white"
          >
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                />
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1 mb-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2.5 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Links */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <Link
                href="/login"
                className="flex items-center justify-center space-x-1 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-all duration-200 py-2.5 font-medium text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In</span>
              </Link>
              <Link
                href="/register"
                className="flex items-center justify-center space-x-1 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-all duration-200 py-2.5"
                onClick={() => setIsMenuOpen(false)}
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up</span>
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header 