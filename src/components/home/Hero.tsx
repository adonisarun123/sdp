'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Play, 
  Search, 
  MapPin, 
  Users, 
  Award,
  ChevronDown,
  Star,
  ArrowRight
} from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)

  // Optimized hero slides with smaller, optimized images
  const heroSlides = [
    {
      title: 'Discover Underwater Wonders',
      subtitle: 'World-Class PADI Courses & Diving Adventures',
      description: 'Join thousands of certified divers exploring the most breathtaking underwater destinations worldwide.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=800&fit=crop&q=80&auto=format',
      cta: 'Start Your Journey',
      ctaLink: '/destinations'
    },
    {
      title: 'Protect Our Oceans',
      subtitle: 'Marine Conservation Programs',
      description: 'Participate in meaningful conservation efforts while experiencing unforgettable diving adventures.',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=1200&h=800&fit=crop&q=80&auto=format',
      cta: 'Join Conservation',
      ctaLink: '/conservation'
    },
    {
      title: 'Find Your Diving Career',
      subtitle: 'Professional Opportunities Worldwide',
      description: 'Explore exciting career opportunities in the global diving industry with top-rated dive centers.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=800&fit=crop&q=80&auto=format',
      cta: 'Browse Jobs',
      ctaLink: '/jobs'
    }
  ]

  const stats = [
    { icon: Users, value: '50,000+', label: 'Certified Divers' },
    { icon: MapPin, value: '200+', label: 'Destinations' },
    { icon: Award, value: '1,500+', label: 'PADI Centers' },
    { icon: Star, value: '4.9/5', label: 'Average Rating' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider - Optimized for LCP */}
      <div className="absolute inset-0 w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={index === 0 ? 90 : 75}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+i+gaVO7bqkZeGBL7q6w=="
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Hero Content - Simplified animations for faster render */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heroSlides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-cyan-300 mb-4 font-medium">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href={heroSlides[currentSlide].ctaLink}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center group"
            >
              {heroSlides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="flex items-center space-x-3 text-white hover:text-cyan-300 transition-colors group">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <form onSubmit={handleSearch} className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search destinations, marine life, or dive centers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-3 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                  >
                    <Search className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-3">
                <stat.icon className="w-8 h-8 text-cyan-300 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-cyan-400 w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/70 hidden lg:block">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  )
}

export default Hero 