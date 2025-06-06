'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Star, 
  ThermometerSun, 
  Eye, 
  Waves, 
  Users,
  Camera,
  Search
} from 'lucide-react'

export default function DestinationsPage() {
  const destinations = [
    {
      id: 'great-barrier-reef',
      name: 'Great Barrier Reef',
      location: 'Queensland, Australia',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
      rating: 4.9,
      reviews: 2847,
      price: 'From $189',
      difficulty: 'Beginner',
      temperature: '24-28°C',
      visibility: '15-30m',
      bestMonths: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      highlights: ['Coral Gardens', 'Marine Park', 'Tropical Fish', 'Turtles'],
      description: 'Explore the world&apos;s largest coral reef system with incredible marine biodiversity.',
      diveInfo: {
        maxDepth: '30m',
        experience: 'All levels',
        diveSites: 25,
        certification: 'Open Water'
      }
    },
    {
      id: 'blue-hole-belize',
      name: 'Blue Hole',
      location: 'Belize',
      image: 'https://images.unsplash.com/photo-1583212292506-2dace2e7e279?w=800&h=600&fit=crop',
      rating: 4.8,
      reviews: 1923,
      price: 'From $299',
      difficulty: 'Advanced',
      temperature: '26-29°C',
      visibility: '30-60m',
      bestMonths: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      highlights: ['Stalactites', 'Reef Sharks', 'Deep Dive', 'Ancient Formations'],
      description: 'Dive into one of the world&apos;s most famous blue holes with ancient formations.',
      diveInfo: {
        maxDepth: '130m',
        experience: 'Advanced',
        diveSites: 8,
        certification: 'Advanced Open Water'
      }
    },
    {
      id: 'raja-ampat',
      name: 'Raja Ampat',
      location: 'West Papua, Indonesia',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      rating: 4.9,
      reviews: 1654,
      price: 'From $259',
      difficulty: 'Intermediate',
      temperature: '27-30°C',
      visibility: '20-40m',
      bestMonths: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      highlights: ['Manta Rays', 'Coral Triangle', 'Biodiversity', 'Walking Sharks'],
      description: 'Discover the crown jewel of marine biodiversity with pristine reefs.',
      diveInfo: {
        maxDepth: '40m',
        experience: 'Intermediate',
        diveSites: 50,
        certification: 'Advanced Open Water'
      }
    },
    {
      id: 'cenotes-mexico',
      name: 'Cenotes Dos Ojos',
      location: 'Tulum, Mexico',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      rating: 4.7,
      reviews: 1245,
      price: 'From $149',
      difficulty: 'Intermediate',
      temperature: '24-25°C',
      visibility: '100m+',
      bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      highlights: ['Cave Diving', 'Stalactites', 'Crystal Waters', 'Haloclines'],
      description: 'Experience mystical cenote diving in crystal-clear freshwater caves.',
      diveInfo: {
        maxDepth: '40m',
        experience: 'Cavern/Cave',
        diveSites: 15,
        certification: 'Cavern Diver'
      }
    },
    {
      id: 'red-sea-egypt',
      name: 'Red Sea',
      location: 'Hurghada, Egypt',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop',
      rating: 4.6,
      reviews: 3421,
      price: 'From $129',
      difficulty: 'All Levels',
      temperature: '22-28°C',
      visibility: '20-40m',
      bestMonths: ['Mar', 'Apr', 'May', 'Sep', 'Oct', 'Nov'],
      highlights: ['Shipwrecks', 'Coral Walls', 'Sharks', 'Dolphins'],
      description: 'Explore historic shipwrecks and vibrant coral reefs in warm waters.',
      diveInfo: {
        maxDepth: '50m',
        experience: 'All levels',
        diveSites: 40,
        certification: 'Open Water'
      }
    },
    {
      id: 'palau-micronesia',
      name: 'Palau',
      location: 'Micronesia',
      image: 'https://images.unsplash.com/photo-1571749712193-8cc90bcce8b6?w=800&h=600&fit=crop',
      rating: 4.8,
      reviews: 987,
      price: 'From $399',
      difficulty: 'All Levels',
      temperature: '28-30°C',
      visibility: '30-50m',
      bestMonths: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      highlights: ['Jellyfish Lake', 'WWII Wrecks', 'Drop-offs', 'Mandarin Fish'],
      description: 'Swim with harmless jellyfish and explore pristine Pacific waters.',
      diveInfo: {
        maxDepth: '60m',
        experience: 'All levels',
        diveSites: 35,
        certification: 'Open Water'
      }
    }
  ]

  const regions = [
    { name: 'Caribbean', count: 45, icon: '🏝️' },
    { name: 'Indo-Pacific', count: 78, icon: '🐠' },
    { name: 'Mediterranean', count: 32, icon: '🏛️' },
    { name: 'Red Sea', count: 28, icon: '🕌' },
    { name: 'Atlantic', count: 35, icon: '🌊' },
    { name: 'Indian Ocean', count: 42, icon: '🦈' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-accent-500 to-conservation-500 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              World's Best <span className="text-accent-200">Diving Destinations</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Discover underwater paradises across the globe, from coral gardens to mysterious wrecks
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations, marine life, dive sites..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Regions */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl mb-3">{region.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{region.name}</h3>
                <p className="text-sm text-gray-500">{region.count} destinations</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hand-picked diving locations offering the best underwater experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.price}
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{destination.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {destination.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{destination.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Dive Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <ThermometerSun className="w-4 h-4 text-red-500" />
                      <span>{destination.temperature}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-blue-500" />
                      <span>{destination.visibility}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Waves className="w-4 h-4 text-accent-500" />
                      <span>{destination.diveInfo.maxDepth}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-conservation-500" />
                      <span>{destination.diveInfo.experience}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.slice(0, 3).map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/destinations/${destination.id}`}
                    className="w-full bg-gradient-to-r from-accent-500 to-primary-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Explore Destination</span>
                    <Camera className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Book Your Next Diving Adventure?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of divers who have discovered their passion underwater
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Book Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Contact Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 