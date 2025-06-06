'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Fish, 
  Sun,
  Thermometer,
  Eye,
  Heart,
  Filter
} from 'lucide-react'
import { useState } from 'react'

export default function CalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedFilter, setSelectedFilter] = useState('all')

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const diveEvents = [
    {
      id: 1,
      title: 'Maldives Manta Ray Season',
      type: 'Marine Life',
      location: 'Maldives',
      startDate: '2024-05-01',
      endDate: '2024-11-30',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
      description: 'Best time to encounter manta rays in Maldivian waters',
      participants: 450,
      difficulty: 'All Levels'
    },
    {
      id: 2,
      title: 'Great White Shark Expedition',
      type: 'Adventure',
      location: 'Guadalupe Island, Mexico',
      startDate: '2024-08-15',
      endDate: '2024-08-22',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'Cage diving with great white sharks',
      participants: 24,
      difficulty: 'Advanced'
    },
    {
      id: 3,
      title: 'Coral Restoration Workshop',
      type: 'Conservation',
      location: 'Great Barrier Reef, Australia',
      startDate: '2024-06-10',
      endDate: '2024-06-17',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      description: 'Hands-on coral restoration and research program',
      participants: 30,
      difficulty: 'Intermediate'
    },
    {
      id: 4,
      title: 'Whale Shark Photography Safari',
      type: 'Photography',
      location: 'Ningaloo Reef, Australia',
      startDate: '2024-07-01',
      endDate: '2024-07-08',
      image: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=400&h=300&fit=crop',
      description: 'Photography-focused whale shark encounters',
      participants: 18,
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Night Diving Certification',
      type: 'Training',
      location: 'Red Sea, Egypt',
      startDate: '2024-09-15',
      endDate: '2024-09-18',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      description: 'PADI Night Diving specialty certification',
      participants: 12,
      difficulty: 'Advanced Open Water'
    },
    {
      id: 6,
      title: 'Cenote Cave Diving',
      type: 'Technical',
      location: 'Tulum, Mexico',
      startDate: '2024-10-05',
      endDate: '2024-10-12',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop',
      description: 'Explore the mystical cenotes of Yucatan',
      participants: 16,
      difficulty: 'Advanced'
    }
  ]

  const marineLifeCalendar = [
    {
      month: 'January',
      highlights: ['Mola Mola Season (Bali)', 'Humpback Whales (Ecuador)', 'Manta Rays (Maldives)'],
      temperature: '24-26°C',
      visibility: '25-30m',
      weather: 'Dry Season'
    },
    {
      month: 'February',
      highlights: ['Hammerhead Sharks (Galápagos)', 'Whale Sharks (Philippines)', 'Sardine Run (South Africa)'],
      temperature: '25-27°C',
      visibility: '30-35m',
      weather: 'Optimal Conditions'
    },
    {
      month: 'March',
      highlights: ['Gray Whales (Mexico)', 'Manta Rays (Indonesia)', 'Coral Spawning (Australia)'],
      temperature: '26-28°C',
      visibility: '25-30m',
      weather: 'Transition Season'
    },
    {
      month: 'April',
      highlights: ['Whale Sharks (Maldives)', 'Diving Season Begins (Mediterranean)', 'Sea Turtles (Costa Rica)'],
      temperature: '27-29°C',
      visibility: '30-40m',
      weather: 'Excellent'
    },
    {
      month: 'May',
      highlights: ['Manta Rays Peak (Maldives)', 'Bluefin Tuna (Malta)', 'Macro Life (Indonesia)'],
      temperature: '28-30°C',
      visibility: '35-40m',
      weather: 'Perfect Diving'
    },
    {
      month: 'June',
      highlights: ['Whale Sharks (Mexico)', 'Mako Sharks (California)', 'Nudibranch Season (Philippines)'],
      temperature: '29-31°C',
      visibility: '30-35m',
      weather: 'Summer Season'
    },
    {
      month: 'July',
      highlights: ['Blue Whales (California)', 'Mobula Rays (Mexico)', 'Jellyfish Lake (Palau)'],
      temperature: '30-32°C',
      visibility: '25-30m',
      weather: 'Warm Waters'
    },
    {
      month: 'August',
      highlights: ['Great Whites (South Africa)', 'Thresher Sharks (Philippines)', 'Dolphin Superpods (Azores)'],
      temperature: '29-31°C',
      visibility: '20-25m',
      weather: 'Peak Summer'
    },
    {
      month: 'September',
      highlights: ['Tiger Sharks (Bahamas)', 'Orcas (Norway)', 'Seahorses (Australia)'],
      temperature: '28-30°C',
      visibility: '25-30m',
      weather: 'Transitioning'
    },
    {
      month: 'October',
      highlights: ['Hammerheads (Galápagos)', 'Fur Seals (South Africa)', 'Coral Spawning (Caribbean)'],
      temperature: '27-29°C',
      visibility: '30-35m',
      weather: 'Excellent'
    },
    {
      month: 'November',
      highlights: ['Humpback Whales (Australia)', 'Bull Sharks (Fiji)', 'Manta Rays (Ecuador)'],
      temperature: '26-28°C',
      visibility: '35-40m',
      weather: 'Great Visibility'
    },
    {
      month: 'December',
      highlights: ['Whale Sharks (Thailand)', 'Eagle Rays (Azores)', 'Christmas Worms (Great Barrier Reef)'],
      temperature: '25-27°C',
      visibility: '30-35m',
      weather: 'Cool Season'
    }
  ]

  const upcomingEvents = [
    {
      date: '15',
      month: 'Jun',
      title: 'Marine Biology Workshop',
      time: '2:00 PM',
      type: 'online',
      attendees: 234
    },
    {
      date: '22',
      month: 'Jun',
      title: 'Coral Restoration Dive',
      time: '8:00 AM',
      type: 'in-person',
      attendees: 45
    },
    {
      date: '28',
      month: 'Jun',
      title: 'Photography Contest',
      time: '6:00 PM',
      type: 'online',
      attendees: 156
    },
    {
      date: '05',
      month: 'Jul',
      title: 'Night Diving Course',
      time: '7:00 PM',
      type: 'in-person',
      attendees: 18
    }
  ]

  const filters = [
    { id: 'all', label: 'All Events', color: 'bg-gray-500' },
    { id: 'Marine Life', label: 'Marine Life', color: 'bg-blue-500' },
    { id: 'Adventure', label: 'Adventure', color: 'bg-red-500' },
    { id: 'Conservation', label: 'Conservation', color: 'bg-green-500' },
    { id: 'Photography', label: 'Photography', color: 'bg-purple-500' },
    { id: 'Training', label: 'Training', color: 'bg-orange-500' },
    { id: 'Technical', label: 'Technical', color: 'bg-yellow-500' }
  ]

  const filteredEvents = selectedFilter === 'all' 
    ? diveEvents 
    : diveEvents.filter(event => event.type === selectedFilter)

  const getTypeColor = (type: string) => {
    const colors = {
      'Marine Life': 'bg-blue-100 text-blue-800',
      'Adventure': 'bg-red-100 text-red-800',
      'Conservation': 'bg-green-100 text-green-800',
      'Photography': 'bg-purple-100 text-purple-800',
      'Training': 'bg-orange-100 text-orange-800',
      'Technical': 'bg-yellow-100 text-yellow-800'
    }
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getDifficultyColor = (difficulty: string) => {
    if (difficulty.includes('Advanced')) return 'bg-red-100 text-red-800'
    if (difficulty.includes('Intermediate')) return 'bg-yellow-100 text-yellow-800'
    return 'bg-green-100 text-green-800'
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Diving <span className="text-accent-200">Calendar</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Plan your perfect diving adventure with our comprehensive calendar of 
              marine life seasons, events, and optimal diving conditions worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#events"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>View Events</span>
              </Link>
              <Link
                href="#marine-calendar"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Marine Life Calendar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">250+</div>
              <div className="text-gray-600">Annual Events</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-conservation-500 to-conservation-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Marine Species</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600">Destinations</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">12,500+</div>
              <div className="text-gray-600">Participants</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming This Month</h2>
            <p className="text-lg text-gray-600">Don&apos;t miss these exciting diving events and opportunities</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{event.date}</div>
                    <div className="text-sm text-gray-500 uppercase">{event.month}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{event.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === 'online' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {event.type}
                  </span>
                  <span className="text-sm text-gray-500">{event.attendees} joining</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Filters and List */}
      <section id="events" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dive Events & Expeditions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join curated diving experiences around the world, from marine life encounters 
              to technical training and conservation projects.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 shadow-md'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 ${filter.color} rounded-full`}></div>
                  <span>{filter.label}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                      {event.difficulty}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors">
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{event.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.startDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marine Life Calendar */}
      <section id="marine-calendar" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Marine Life Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best times to encounter specific marine species and 
              optimal diving conditions throughout the year.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marineLifeCalendar.map((month, index) => (
              <motion.div
                key={month.month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{month.month}</h3>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Thermometer className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                      <div className="text-blue-800 font-medium">{month.temperature}</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded-lg">
                      <Eye className="w-4 h-4 text-green-600 mx-auto mb-1" />
                      <div className="text-green-800 font-medium">{month.visibility}</div>
                    </div>
                    <div className="bg-yellow-50 p-2 rounded-lg">
                      <Sun className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
                      <div className="text-yellow-800 font-medium text-xs">{month.weather}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Fish className="w-4 h-4 mr-2 text-primary-600" />
                    Marine Life Highlights
                  </h4>
                  <ul className="space-y-2">
                    {month.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-conservation-600 to-conservation-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Plan Your Perfect Dive</h2>
            <p className="text-xl text-conservation-100 mb-8 max-w-2xl mx-auto">
              Use our calendar to discover the best times and places for your next underwater adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/destinations"
                className="bg-white text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Explore Destinations
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-conservation-600 transition-all duration-300"
              >
                Get Expert Advice
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 