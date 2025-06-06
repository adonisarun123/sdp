'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Camera, ArrowRight, Heart, Thermometer } from 'lucide-react'

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Great Barrier Reef',
      location: 'Queensland, Australia',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
      rating: 4.9,
      reviews: 2847,
      highlights: ['Coral Gardens', 'Marine Park', 'Tropical Fish'],
      price: 'From $189',
      difficulty: 'Beginner',
      temperature: '24-28°C',
      description: 'Explore the world\'s largest coral reef system with incredible marine biodiversity.'
    },
    {
      id: 2,
      name: 'Blue Hole',
      location: 'Belize',
      image: 'https://images.unsplash.com/photo-1583212292506-2dace2e7e279?w=800&h=600&fit=crop',
      rating: 4.8,
      reviews: 1923,
      highlights: ['Stalactites', 'Sharks', 'Deep Dive'],
      price: 'From $299',
      difficulty: 'Advanced',
      temperature: '26-29°C',
      description: 'Dive into one of the world\'s most famous blue holes with ancient formations.'
    },
    {
      id: 3,
      name: 'Raja Ampat',
      location: 'West Papua, Indonesia',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      rating: 4.9,
      reviews: 1654,
      highlights: ['Manta Rays', 'Coral Triangle', 'Biodiversity'],
      price: 'From $259',
      difficulty: 'Intermediate',
      temperature: '27-30°C',
      description: 'Discover the crown jewel of marine biodiversity with pristine reefs.'
    },
    {
      id: 4,
      name: 'Cenotes Dos Ojos',
      location: 'Tulum, Mexico',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      rating: 4.7,
      reviews: 1245,
      highlights: ['Cave Diving', 'Stalactites', 'Crystal Waters'],
      price: 'From $149',
      difficulty: 'Intermediate',
      temperature: '24-25°C',
      description: 'Experience mystical cenote diving in crystal-clear freshwater caves.'
    },
    {
      id: 5,
      name: 'Red Sea',
      location: 'Hurghada, Egypt',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop',
      rating: 4.6,
      reviews: 3421,
      highlights: ['Shipwrecks', 'Coral Walls', 'Sharks'],
      price: 'From $129',
      difficulty: 'All Levels',
      temperature: '22-28°C',
      description: 'Explore historic shipwrecks and vibrant coral reefs in warm waters.'
    },
    {
      id: 6,
      name: 'Palau',
      location: 'Micronesia',
      image: 'https://images.unsplash.com/photo-1571749712193-8cc90bcce8b6?w=800&h=600&fit=crop',
      rating: 4.8,
      reviews: 987,
      highlights: ['Jellyfish Lake', 'WWII Wrecks', 'Drop-offs'],
      price: 'From $399',
      difficulty: 'All Levels',
      temperature: '28-30°C',
      description: 'Swim with harmless jellyfish and explore pristine Pacific waters.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-blue-100 text-blue-800'
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-600">Destinations</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the world's most spectacular diving locations, each offering unique underwater adventures 
          and unforgettable marine encounters.
        </p>
      </motion.div>

      {/* Destinations Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {destinations.map((destination) => (
          <motion.div
            key={destination.id}
            variants={cardVariants}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Heart Icon */}
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors group">
                <Heart className="w-5 h-5 text-white hover:text-red-500 transition-colors" />
              </button>
              
              {/* Price Badge */}
              <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {destination.price}
              </div>
              
              {/* Difficulty Badge */}
              <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(destination.difficulty)}`}>
                {destination.difficulty}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Location & Rating */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{destination.rating}</span>
                  <span className="text-xs text-gray-500">({destination.reviews})</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {destination.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2 mb-4">
                {destination.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              {/* Temperature */}
              <div className="flex items-center space-x-2 mb-4">
                <Thermometer className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">{destination.temperature}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Link
                  href={`/destinations/${destination.id}`}
                  className="flex-1 bg-gradient-to-r from-accent-500 to-primary-600 text-white py-2.5 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="p-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <Camera className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-12"
      >
        <Link
          href="/destinations"
          className="inline-flex items-center space-x-3 bg-white border-2 border-accent-500 text-accent-600 px-8 py-4 rounded-xl font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300 group"
        >
          <span>View All Destinations</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </div>
  )
}

export default FeaturedDestinations 