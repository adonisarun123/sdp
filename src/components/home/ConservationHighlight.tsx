'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Waves, Fish, Leaf, ArrowRight, Users, Target, Globe } from 'lucide-react'

const ConservationHighlight = () => {
  const stats = [
    {
      icon: Heart,
      value: '2.5M',
      label: 'Coral Fragments',
      description: 'Restored to reefs'
    },
    {
      icon: Fish,
      value: '150+',
      label: 'Species',
      description: 'Protected annually'
    },
    {
      icon: Users,
      value: '25,000+',
      label: 'Eco-Divers',
      description: 'Joined our mission'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Marine Parks',
      description: 'Supported worldwide'
    }
  ]

  const initiatives = [
    {
      title: 'Coral Restoration',
      description: 'Plant and nurture coral fragments to rebuild damaged reef systems',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=300&fit=crop',
      impact: '2.5M fragments planted'
    },
    {
      title: 'Marine Cleanup',
      description: 'Remove plastic waste and debris from diving sites and beaches',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      impact: '500 tons removed'
    },
    {
      title: 'Species Protection',
      description: 'Monitor and protect endangered marine species habitats',
      image: 'https://images.unsplash.com/photo-1583212292506-2dace2e7e279?w=400&h=300&fit=crop',
      impact: '150+ species protected'
    }
  ]

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
          <Heart className="w-10 h-10 text-conservation-500" />
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Marine <span className="text-transparent bg-clip-text bg-gradient-to-r from-conservation-500 to-accent-600">Conservation</span>
          </h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Protecting our oceans for future generations through sustainable diving practices, 
          active conservation efforts, and community engagement.
        </p>
      </motion.div>

      {/* Main Conservation Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-gradient-to-r from-conservation-500 to-conservation-600 rounded-3xl p-8 lg:p-12 text-white mb-16 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <Waves className="absolute top-4 right-4 w-32 h-32" />
          <Fish className="absolute bottom-4 left-4 w-24 h-24" />
          <Leaf className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40" />
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Every Dive Makes a Difference
              </h3>
              <p className="text-xl text-conservation-100 mb-8 leading-relaxed">
                Join our global community of eco-conscious divers in protecting marine ecosystems. 
                Through responsible diving practices and active conservation efforts, we're creating 
                a sustainable future for our oceans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/conservation"
                  className="inline-flex items-center space-x-3 bg-white text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 group"
                >
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="inline-flex items-center space-x-3 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-conservation-600 transition-all duration-300">
                  <span>Learn More</span>
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-conservation-200 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-conservation-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-conservation-300">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Conservation Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-16"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Conservation Initiatives</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the specific ways we're working to protect and restore marine ecosystems worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-conservation-500 px-3 py-1 rounded-full text-sm font-medium">
                    {initiative.impact}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-conservation-600 transition-colors">
                  {initiative.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-gradient-to-r from-primary-50 to-conservation-50 rounded-3xl p-8 lg:p-12 text-center"
      >
        <Target className="w-16 h-16 text-conservation-500 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Make an Impact?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Every certified diver can contribute to marine conservation. Join our community 
          and become part of the solution for healthier oceans.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/conservation/get-involved"
            className="inline-flex items-center space-x-3 bg-conservation-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-conservation-600 transition-all duration-300 group"
          >
            <span>Get Involved</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/conservation/donate"
            className="inline-flex items-center space-x-3 border-2 border-conservation-500 text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:bg-conservation-500 hover:text-white transition-all duration-300"
          >
            <Heart className="w-5 h-5" />
            <span>Support Our Mission</span>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ConservationHighlight 