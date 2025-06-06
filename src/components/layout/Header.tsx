'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/AuthContext'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Menu, 
  X, 
  User, 
  ChevronDown,
  Globe,
  Heart,
  MapPin,
  Calendar,
  Briefcase,
  Lightbulb,
  LogIn,
  UserPlus,
  Settings,
  BookOpen,
  LogOut,
  Waves
} from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const { user, signOut } = useAuth()
  const userMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const navigation = [
    {
      name: 'Destinations',
      href: '/destinations',
      icon: MapPin,
      description: 'Explore diving destinations worldwide',
      color: 'text-blue-600'
    },
    {
      name: 'Marine Life',
      href: '/marine-life',
      icon: Heart,
      description: 'Discover marine species calendar',
      color: 'text-pink-600'
    },
    {
      name: 'Conservation',
      href: '/conservation',
      icon: Globe,
      description: 'Join marine conservation efforts',
      color: 'text-green-600'
    },
    {
      name: 'Dive Jobs',
      href: '/jobs',
      icon: Briefcase,
      description: 'Find your dream diving career',
      color: 'text-purple-600'
    },
    {
      name: 'Community',
      href: '/community',
      icon: Lightbulb,
      description: 'Share ideas and connect',
      color: 'text-orange-600'
    },
    {
      name: 'Calendar',
      href: '/calendar',
      icon: Calendar,
      description: 'Seasonal diving calendar',
      color: 'text-cyan-600'
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const mobileMenuVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    open: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  }

  return (
    <motion.header 
      {...headerVariants}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group relative z-10"
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-primary-500 rounded-xl group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
                  <Waves className="w-5 h-5 lg:w-6 lg:h-6 text-accent-500" />
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                ScubaDiversPlanet
              </h1>
              <p className={`text-xs lg:text-sm -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-accent-600' : 'text-accent-200'
              }`}>
                Dive Into Adventure
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 ${
                    isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4 transition-colors duration-300" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-accent-500 to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.description}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative group">
              <div className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                isSearchFocused || searchQuery 
                  ? 'bg-white shadow-lg ring-2 ring-accent-500/20' 
                  : isScrolled 
                    ? 'bg-gray-100 hover:bg-white hover:shadow-md' 
                    : 'bg-white/20 hover:bg-white/30 backdrop-blur-md'
              }`}>
                <input
                  type="text"
                  placeholder="Search destinations, marine life..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className={`w-full pl-12 pr-4 py-3 bg-transparent transition-colors duration-300 focus:outline-none ${
                    isSearchFocused || searchQuery || isScrolled
                      ? 'text-gray-900 placeholder-gray-500' 
                      : 'text-white placeholder-white/70'
                  }`}
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <Search className={`w-5 h-5 transition-colors duration-300 ${
                    isSearchFocused || searchQuery 
                      ? 'text-accent-500' 
                      : isScrolled 
                        ? 'text-gray-400' 
                        : 'text-white/70'
                  }`} />
                </div>
                
                {/* Search suggestions could go here */}
                {searchQuery && (
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-500 text-white p-1.5 rounded-full hover:bg-accent-600 transition-colors duration-200"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Enhanced User Actions */}
          <div className="flex items-center space-x-3">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/20"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-primary-500 rounded-full flex items-center justify-center ring-2 ring-white/20">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    isUserMenuOpen ? 'rotate-180' : ''
                  } ${isScrolled ? 'text-gray-600' : 'text-white/80'}`} />
                </motion.button>
                
                {/* Enhanced User Dropdown */}
                <AnimatePresence>
                  {isUserMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-4 bg-gradient-to-r from-accent-500 to-primary-500 text-white">
                        <p className="font-semibold truncate">{user.email}</p>
                        <p className="text-sm text-white/80">Diver Member</p>
                      </div>
                      
                      <div className="py-2">
                        {[
                          { icon: User, text: 'Profile', href: '/profile' },
                          { icon: BookOpen, text: 'My Bookings', href: '/bookings' },
                          { icon: Heart, text: 'Saved Destinations', href: '/saved' },
                          { icon: Settings, text: 'Settings', href: '/settings' },
                        ].map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                            onClick={() => setIsUserMenuOpen(false)}
                          >
                            <item.icon className="w-5 h-5 text-gray-400" />
                            <span className="font-medium">{item.text}</span>
                          </Link>
                        ))}
                        
                        <hr className="my-2 border-gray-100" />
                        
                        <button
                          onClick={() => {
                            signOut()
                            setIsUserMenuOpen(false)
                          }}
                          className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="font-medium">Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  href="/login"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-gray-100' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </Link>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/register"
                    className="flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span className="hidden sm:inline">Sign Up</span>
                  </Link>
                </motion.div>
              </div>
            )}

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50"
            >
              {/* Mobile Search */}
              <div className="p-4 border-b border-gray-100">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search destinations, marine life..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors duration-200"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </form>
              </div>

              {/* Mobile Navigation Links */}
              <div className="py-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center space-x-4 px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-primary-600 transition-all duration-200 border-l-4 border-transparent hover:border-accent-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className={`p-2 rounded-lg bg-gray-100 ${item.color}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header 