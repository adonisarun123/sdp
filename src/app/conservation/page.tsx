'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  Fish, 
  Users, 
  Target, 
  Globe,
  Shield,
  Camera,
  ArrowRight,
  MapPin
} from 'lucide-react'

export default function ConservationPage() {
  const initiatives = [
    {
      title: 'Coral Restoration Program',
      description: 'Plant and nurture coral fragments to rebuild damaged reef systems worldwide',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
      impact: '2.5M fragments planted',
      progress: 85,
      location: 'Great Barrier Reef, Australia',
      participants: 1200
    },
    {
      title: 'Marine Debris Cleanup',
      description: 'Remove plastic waste and debris from diving sites and beaches globally',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      impact: '500 tons removed',
      progress: 92,
      location: 'Pacific Ocean',
      participants: 3400
    },
    {
      title: 'Endangered Species Protection',
      description: 'Monitor and protect endangered marine species habitats and migration routes',
      image: 'https://images.unsplash.com/photo-1583212292506-2dace2e7e279?w=800&h=600&fit=crop',
      impact: '150+ species protected',
      progress: 75,
      location: 'Raja Ampat, Indonesia',
      participants: 850
    }
  ]

  const stats = [
    { icon: Heart, value: '2.5M', label: 'Coral Fragments', sublabel: 'Restored to reefs' },
    { icon: Fish, value: '150+', label: 'Species Protected', sublabel: 'Annually monitored' },
    { icon: Users, value: '25,000+', label: 'Eco-Divers', sublabel: 'Joined our mission' },
    { icon: Globe, value: '50+', label: 'Marine Parks', sublabel: 'Supported worldwide' }
  ]

  const partnerships = [
    {
      name: 'Ocean Conservancy',
      description: 'Leading marine debris cleanup efforts',
      logo: '🌊',
      focus: 'Plastic Pollution'
    },
    {
      name: 'Coral Restoration Foundation',
      description: 'Pioneering coral restoration techniques',
      logo: '🪸',
      focus: 'Coral Reefs'
    },
    {
      name: 'Marine Protected Areas',
      description: 'Protecting critical marine ecosystems',
      logo: '🛡️',
      focus: 'Habitat Protection'
    },
    {
      name: 'Project AWARE',
      description: 'Diver-driven ocean conservation',
      logo: '🤿',
      focus: 'Diver Education'
    }
  ]

  const getInvolvedOptions = [
    {
      title: 'Adopt a Coral',
      description: 'Sponsor coral restoration efforts',
      price: '$25/month',
      icon: Heart,
      benefits: ['Monthly progress photos', 'GPS coordinates', 'Certificate']
    },
    {
      title: 'Eco-Dive Certification',
      description: 'Learn sustainable diving practices',
      price: '$150',
      icon: Shield,
      benefits: ['4-hour course', 'Digital certification', 'Eco-diving guidelines']
    },
    {
      title: 'Volunteer Program',
      description: 'Join conservation expeditions',
      price: 'Free + Travel',
      icon: Users,
      benefits: ['7-day programs', 'Accommodation included', 'Expert guidance']
    },
    {
      title: 'Citizen Science',
      description: 'Contribute to marine research',
      price: 'Free',
      icon: Camera,
      benefits: ['Data collection training', 'Research participation', 'Impact reports']
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-conservation-600 via-accent-500 to-primary-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Heart className="w-12 h-12 text-conservation-200" />
              <h1 className="text-4xl lg:text-6xl font-bold">
                Marine <span className="text-conservation-200">Conservation</span>
              </h1>
            </div>
            <p className="text-xl lg:text-2xl text-conservation-100 mb-8 max-w-4xl mx-auto">
              Protecting our oceans for future generations through sustainable diving practices, 
              active conservation efforts, and community engagement worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#get-involved"
                className="bg-white text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="#initiatives"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-conservation-600 transition-colors"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Conservation Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable results from our ongoing marine conservation efforts worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-conservation-500 to-conservation-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-conservation-600 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Initiatives */}
      <section id="initiatives" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Active Conservation Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our ongoing initiatives that are making a real difference in marine conservation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="bg-conservation-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {initiative.impact}
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{initiative.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {initiative.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Progress</span>
                      <span className="text-sm text-conservation-600">{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-conservation-500 to-conservation-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${initiative.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{initiative.participants} participants</span>
                    </div>
                    <Link
                      href={`/conservation/${initiative.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-conservation-600 hover:text-conservation-700 font-medium text-sm flex items-center space-x-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conservation Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Working together with leading organizations to maximize our conservation impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{partner.description}</p>
                <span className="inline-block bg-conservation-100 text-conservation-700 px-3 py-1 rounded-full text-xs font-medium">
                  {partner.focus}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How You Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you&apos;d like to contribute to marine conservation efforts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getInvolvedOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-conservation-500 to-conservation-600 rounded-xl flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                <div className="text-2xl font-bold text-conservation-600 mb-4">{option.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-conservation-500 rounded-full" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gradient-to-r from-conservation-500 to-conservation-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-conservation-600 to-accent-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Target className="w-16 h-16 mx-auto mb-6 text-conservation-200" />
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Every Action Counts
            </h2>
            <p className="text-xl text-conservation-100 mb-8 max-w-2xl mx-auto">
              Join our global community of ocean protectors and help preserve marine ecosystems for future generations of divers and marine life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/conservation/donate"
                className="bg-white text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Make a Donation
              </Link>
              <Link
                href="/conservation/volunteer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-conservation-600 transition-colors"
              >
                Volunteer Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 