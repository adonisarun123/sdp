'use client'

import { motion } from 'framer-motion'
import { Calendar, Fish, Waves, Thermometer, Eye } from 'lucide-react'

const MarineLifeCalendar = () => {
  const marineLifeData = [
    {
      month: 'January',
      short: 'Jan',
      temperature: '18-22°C',
      visibility: '15-25m',
      highlights: ['Hammerhead Sharks', 'Eagle Rays', 'Nudibranchs', 'Whale Sharks'],
      bestFor: 'Macro Photography',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: '🦈',
      spots: [
        { color: 'bg-blue-500', species: 'Hammerheads' },
        { color: 'bg-purple-500', species: 'Eagle Rays' },
        { color: 'bg-pink-500', species: 'Nudibranchs' }
      ]
    },
    {
      month: 'February',
      short: 'Feb',
      temperature: '19-23°C',
      visibility: '20-30m',
      highlights: ['Whale Sharks', 'Manta Rays', 'Turtles', 'Dolphins'],
      bestFor: 'Large Pelagics',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      icon: '🐋',
      spots: [
        { color: 'bg-cyan-500', species: 'Whale Sharks' },
        { color: 'bg-blue-500', species: 'Manta Rays' },
        { color: 'bg-green-500', species: 'Turtles' }
      ]
    },
    {
      month: 'March',
      short: 'Mar',
      temperature: '21-25°C',
      visibility: '25-35m',
      highlights: ['Coral Spawning', 'Reef Sharks', 'Groupers', 'Wrasse'],
      bestFor: 'Coral Gardens',
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      icon: '🪸',
      spots: [
        { color: 'bg-orange-500', species: 'Coral Spawning' },
        { color: 'bg-gray-500', species: 'Reef Sharks' },
        { color: 'bg-yellow-500', species: 'Groupers' }
      ]
    },
    {
      month: 'April',
      short: 'Apr',
      temperature: '23-27°C',
      visibility: '20-30m',
      highlights: ['Dolphins', 'Barracuda', 'Angelfish', 'Butterflyfish'],
      bestFor: 'Marine Encounters',
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: '🐬',
      spots: [
        { color: 'bg-blue-500', species: 'Dolphins' },
        { color: 'bg-silver-500', species: 'Barracuda' },
        { color: 'bg-yellow-500', species: 'Angelfish' }
      ]
    },
    {
      month: 'May',
      short: 'May',
      temperature: '25-29°C',
      visibility: '15-25m',
      highlights: ['Seahorses', 'Pipefish', 'Anemones', 'Clownfish'],
      bestFor: 'Macro Diving',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: '🌊',
      spots: [
        { color: 'bg-orange-500', species: 'Seahorses' },
        { color: 'bg-green-500', species: 'Pipefish' },
        { color: 'bg-purple-500', species: 'Anemones' }
      ]
    },
    {
      month: 'June',
      short: 'Jun',
      temperature: '27-31°C',
      visibility: '20-30m',
      highlights: ['Octopus', 'Cuttlefish', 'Eels', 'Lobsters'],
      bestFor: 'Night Diving',
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: '🐙',
      spots: [
        { color: 'bg-red-500', species: 'Octopus' },
        { color: 'bg-purple-500', species: 'Cuttlefish' },
        { color: 'bg-green-500', species: 'Eels' }
      ]
    },
    {
      month: 'July',
      short: 'Jul',
      temperature: '28-32°C',
      visibility: '25-35m',
      highlights: ['Mobula Rays', 'Tuna', 'Marlins', 'Sailfish'],
      bestFor: 'Pelagic Species',
      color: 'from-red-400 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: '🐟',
      spots: [
        { color: 'bg-black', species: 'Mobula Rays' },
        { color: 'bg-blue-500', species: 'Tuna' },
        { color: 'bg-indigo-500', species: 'Marlins' }
      ]
    },
    {
      month: 'August',
      short: 'Aug',
      temperature: '28-32°C',
      visibility: '20-30m',
      highlights: ['Whale Migration', 'Pilot Whales', 'Rays', 'Dolphins'],
      bestFor: 'Whale Watching',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      icon: '🐋',
      spots: [
        { color: 'bg-gray-500', species: 'Whales' },
        { color: 'bg-black', species: 'Pilots' },
        { color: 'bg-blue-500', species: 'Rays' }
      ]
    },
    {
      month: 'September',
      short: 'Sep',
      temperature: '26-30°C',
      visibility: '25-35m',
      highlights: ['Thresher Sharks', 'Silky Sharks', 'Jacks', 'Trevally'],
      bestFor: 'Shark Encounters',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      icon: '🦈',
      spots: [
        { color: 'bg-gray-600', species: 'Threshers' },
        { color: 'bg-blue-500', species: 'Silkies' },
        { color: 'bg-silver-500', species: 'Jacks' }
      ]
    },
    {
      month: 'October',
      short: 'Oct',
      temperature: '24-28°C',
      visibility: '20-30m',
      highlights: ['Manta Cleaning', 'Reef Fish', 'Crustaceans', 'Nudibranch'],
      bestFor: 'Cleaning Stations',
      color: 'from-indigo-400 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      icon: '🐠',
      spots: [
        { color: 'bg-black', species: 'Mantas' },
        { color: 'bg-yellow-500', species: 'Reef Fish' },
        { color: 'bg-red-500', species: 'Crustaceans' }
      ]
    },
    {
      month: 'November',
      short: 'Nov',
      temperature: '22-26°C',
      visibility: '15-25m',
      highlights: ['Frogfish', 'Scorpionfish', 'Flatworms', 'Ghost Pipefish'],
      bestFor: 'Rare Species',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: '🐸',
      spots: [
        { color: 'bg-orange-500', species: 'Frogfish' },
        { color: 'bg-red-500', species: 'Scorpionfish' },
        { color: 'bg-purple-500', species: 'Flatworms' }
      ]
    },
    {
      month: 'December',
      short: 'Dec',
      temperature: '20-24°C',
      visibility: '20-30m',
      highlights: ['Christmas Wrasse', 'Parrotfish', 'Triggerfish', 'Sweetlips'],
      bestFor: 'Festive Diving',
      color: 'from-emerald-400 to-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: '🎄',
      spots: [
        { color: 'bg-green-500', species: 'Christmas Wrasse' },
        { color: 'bg-blue-500', species: 'Parrotfish' },
        { color: 'bg-yellow-500', species: 'Triggerfish' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
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
        <div className="flex items-center justify-center space-x-3 mb-6">
          <Calendar className="w-10 h-10 text-accent-500" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Marine Life <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-600">Calendar</span>
          </h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover when and where to encounter your favorite marine species throughout the year. 
          Plan your perfect diving adventure based on seasonal wildlife patterns.
        </p>
      </motion.div>

      {/* Calendar Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
      >
        {marineLifeData.map((month) => (
          <motion.div
            key={month.month}
            variants={cardVariants}
            className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${month.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
            
            {/* Content */}
            <div className="relative p-6">
              {/* Month Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{month.short}</h3>
                  <p className="text-sm text-gray-500">{month.month}</p>
                </div>
                <div className="text-3xl">{month.icon}</div>
              </div>

              {/* Environment Info */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <Thermometer className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-gray-600">{month.temperature}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">{month.visibility}</span>
                </div>
              </div>

              {/* Best For */}
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${month.color} text-white text-xs font-medium rounded-full mb-4`}>
                {month.bestFor}
              </div>

              {/* Marine Life Highlights */}
                             <div>
                 <h4 className="text-sm font-semibold text-gray-700 mb-2">Marine Life:</h4>
                 <div className="space-y-2">
                   {month.spots.map((spot, idx) => (
                     <div key={idx} className="flex items-center space-x-2">
                       <div className={`w-3 h-3 rounded-full ${spot.color}`} />
                       <span className="text-xs text-gray-600">{spot.species}</span>
                     </div>
                   ))}
                 </div>
                 
                 {/* Color Legend */}
                 <div className="flex flex-wrap gap-1 mt-3">
                   {month.spots.map((spot, idx) => (
                     <div key={idx} className={`w-2 h-2 rounded-full ${spot.color}`} />
                   ))}
                 </div>
               </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
      >
        <div className="text-center max-w-4xl mx-auto">
          <Waves className="w-12 h-12 text-accent-500 mx-auto mb-6" />
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Perfect Timing for Every Dive
          </h3>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our marine life calendar is based on decades of diving experience and scientific research. 
            Each destination offers unique seasonal patterns, ensuring you witness nature&apos;s most spectacular underwater shows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Seasonal Patterns</h4>
              <p className="text-sm text-gray-600">Track migration and breeding cycles</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Thermometer className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Water Conditions</h4>
              <p className="text-sm text-gray-600">Temperature and visibility data</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-conservation-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Species Spotting</h4>
              <p className="text-sm text-gray-600">Best times for rare encounters</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MarineLifeCalendar 