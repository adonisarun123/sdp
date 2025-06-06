'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Fish, 
  Camera, 
  MapPin, 
  Calendar,
  Eye,
  Shield,
  Heart,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react'

export default function MarineLifePage() {
  const marineSpecies = [
    {
      id: 'manta-ray',
      name: 'Manta Ray',
      scientificName: 'Mobula birostris',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      size: 'Up to 7m wingspan',
      depth: '0-40m',
      habitat: 'Open ocean, cleaning stations',
      bestSeen: ['Indonesia', 'Maldives', 'Ecuador', 'Mexico'],
      months: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
      conservationStatus: 'Vulnerable',
      description: 'The largest ray species, known for their intelligence and graceful swimming.',
      rarity: 'Uncommon',
      category: 'Rays & Skates'
    },
    {
      id: 'whale-shark',
      name: 'Whale Shark',
      scientificName: 'Rhincodon typus',
      image: 'https://images.unsplash.com/photo-1583212292506-2dace2e7e279?w=800&h=600&fit=crop',
      size: 'Up to 12m length',
      depth: '0-60m',
      habitat: 'Pelagic waters, plankton-rich areas',
      bestSeen: ['Philippines', 'Australia', 'Thailand', 'Maldives'],
      months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      conservationStatus: 'Endangered',
      description: 'The world\'s largest fish species, gentle giants that feed on plankton.',
      rarity: 'Rare',
      category: 'Sharks'
    },
    {
      id: 'sea-turtle',
      name: 'Green Sea Turtle',
      scientificName: 'Chelonia mydas',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
      size: '1-1.5m length',
      depth: '0-50m',
      habitat: 'Coral reefs, seagrass beds',
      bestSeen: ['Costa Rica', 'Hawaii', 'Australia', 'Egypt'],
      months: ['All year'],
      conservationStatus: 'Endangered',
      description: 'Graceful marine reptiles essential to ocean ecosystem health.',
      rarity: 'Common',
      category: 'Reptiles'
    },
    {
      id: 'octopus',
      name: 'Common Octopus',
      scientificName: 'Octopus vulgaris',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      size: '30-60cm',
      depth: '0-60m',
      habitat: 'Rocky reefs, caves',
      bestSeen: ['Mediterranean', 'Atlantic', 'Pacific'],
      months: ['All year'],
      conservationStatus: 'Least Concern',
      description: 'Highly intelligent cephalopods known for their camouflage abilities.',
      rarity: 'Common',
      category: 'Mollusks'
    },
    {
      id: 'hammerhead',
      name: 'Hammerhead Shark',
      scientificName: 'Sphyrna mokarran',
      image: 'https://images.unsplash.com/photo-1571749712193-8cc90bcce8b6?w=800&h=600&fit=crop',
      size: '3-6m length',
      depth: '1-80m',
      habitat: 'Continental shelves, seamounts',
      bestSeen: ['Galápagos', 'Costa Rica', 'Egypt', 'South Africa'],
      months: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      conservationStatus: 'Critically Endangered',
      description: 'Distinctive sharks with unique head structure for enhanced sensory capability.',
      rarity: 'Rare',
      category: 'Sharks'
    },
    {
      id: 'seahorse',
      name: 'Seahorse',
      scientificName: 'Hippocampus spp.',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800&h=600&fit=crop',
      size: '2-25cm',
      depth: '0-30m',
      habitat: 'Seagrass beds, coral reefs',
      bestSeen: ['Philippines', 'Indonesia', 'Caribbean'],
      months: ['All year'],
      conservationStatus: 'Various',
      description: 'Unique fish with upright swimming posture and prehensile tail.',
      rarity: 'Uncommon',
      category: 'Fish'
    }
  ]

  const categories = [
    { name: 'Sharks', count: 45, icon: '🦈', color: 'bg-gray-500' },
    { name: 'Rays & Skates', count: 28, icon: '🟫', color: 'bg-amber-500' },
    { name: 'Fish', count: 120, icon: '🐠', color: 'bg-blue-500' },
    { name: 'Mollusks', count: 35, icon: '🐙', color: 'bg-purple-500' },
    { name: 'Reptiles', count: 12, icon: '🐢', color: 'bg-green-500' },
    { name: 'Mammals', count: 18, icon: '🐋', color: 'bg-cyan-500' }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critically Endangered': return 'bg-red-100 text-red-800'
      case 'Endangered': return 'bg-orange-100 text-orange-800'
      case 'Vulnerable': return 'bg-yellow-100 text-yellow-800'
      case 'Least Concern': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Rare': return 'bg-red-500'
      case 'Uncommon': return 'bg-yellow-500'
      case 'Common': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-600 via-primary-500 to-conservation-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Fish className="w-12 h-12 text-accent-200" />
              <h1 className="text-4xl lg:text-6xl font-bold">
                Marine <span className="text-accent-200">Life Guide</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-4xl mx-auto">
              Discover the incredible diversity of marine species you can encounter while diving, 
              from gentle giants to colorful reef fish.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search marine species, locations, or habitats..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-500">{category.count} species</p>
                <div className={`w-full h-2 ${category.color} rounded-full mt-3 opacity-60 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Species Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Marine Species
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about the amazing creatures you might encounter on your diving adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marineSpecies.map((species, index) => (
              <motion.div
                key={species.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={species.image}
                    alt={species.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Conservation Status */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(species.conservationStatus)}`}>
                    {species.conservationStatus}
                  </div>
                  
                  {/* Rarity Indicator */}
                  <div className="absolute top-4 right-4 flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getRarityColor(species.rarity)}`} />
                    <span className="text-white text-xs font-medium bg-black/50 px-2 py-1 rounded-full">
                      {species.rarity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {species.name}
                    </h3>
                    <p className="text-sm italic text-gray-500 mb-2">
                      {species.scientificName}
                    </p>
                    <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-medium">
                      {species.category}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {species.description}
                  </p>

                  {/* Species Info */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Size:</span>
                      <span className="font-medium">{species.size}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Depth:</span>
                      <span className="font-medium">{species.depth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Habitat:</span>
                      <span className="font-medium text-xs">{species.habitat}</span>
                    </div>
                  </div>

                  {/* Best Locations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best Locations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {species.bestSeen.slice(0, 3).map((location, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {location}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Best Months */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Best Months:</h4>
                    <div className="flex flex-wrap gap-1">
                      {species.months.slice(0, 6).map((month, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-conservation-100 text-conservation-700 text-xs rounded-full"
                        >
                          {month}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link
                    href={`/marine-life/${species.id}`}
                    className="w-full bg-gradient-to-r from-accent-500 to-primary-600 text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Section */}
      <section className="py-16 bg-conservation-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Shield className="w-16 h-16 text-conservation-500 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Protecting Marine Life
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Many marine species face threats from climate change, pollution, and overfishing. 
              Learn how you can help protect these incredible creatures during your dives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/conservation"
                className="bg-conservation-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-conservation-600 transition-colors"
              >
                Conservation Programs
              </Link>
              <Link
                href="/marine-life/identification"
                className="border-2 border-conservation-500 text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:bg-conservation-500 hover:text-white transition-colors"
              >
                Species ID Guide
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 