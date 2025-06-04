'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Award, 
  Globe, 
  Users, 
  Heart, 
  Star, 
  Clock, 
  Headphones,
  MapPin,
  Camera,
  BookOpen,
  Compass
} from 'lucide-react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'PADI Certified Excellence',
      description: 'Access to 1,500+ PADI certified dive centers worldwide with the highest safety and training standards.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Globe,
      title: 'Global Destinations',
      description: 'Explore 200+ carefully curated diving destinations across all continents and oceans.',
      color: 'text-accent-500',
      bgColor: 'bg-accent-50'
    },
    {
      icon: Heart,
      title: 'Conservation Focus',
      description: 'Every dive contributes to marine conservation efforts and sustainable ocean practices.',
      color: 'text-conservation-500',
      bgColor: 'bg-conservation-50'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive insurance coverage and 24/7 emergency support for all our divers.',
      color: 'text-secondary-500',
      bgColor: 'bg-secondary-50'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with 50,000+ certified divers and professional instructors worldwide.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50'
    },
    {
      icon: Star,
      title: 'Verified Reviews',
      description: 'Over 25,000 authentic reviews with an average 4.9/5 rating from real divers.',
      color: 'text-sand-600',
      bgColor: 'bg-sand-50'
    }
  ]

  const stats = [
    {
      icon: BookOpen,
      number: '15,000+',
      label: 'Courses Completed',
      description: 'PADI certifications issued'
    },
    {
      icon: Camera,
      number: '500K+',
      label: 'Marine Photos',
      description: 'Shared by our community'
    },
    {
      icon: MapPin,
      number: '50+',
      label: 'Countries',
      description: 'Diving destinations'
    },
    {
      icon: Compass,
      number: '1M+',
      label: 'Dive Logs',
      description: 'Recorded adventures'
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="max-width container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="heading-lg mb-6">
            Why <span className="gradient-text">Divers Choose</span> ScubaDiversPlanet
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Join the world&apos;s most trusted diving community and experience underwater adventures 
            with unmatched safety, expertise, and environmental responsibility.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card p-8 h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Trusted by Divers Worldwide
            </h3>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Our numbers tell the story of adventure, safety, and ocean conservation
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-4">
                  <stat.icon className="w-8 h-8 text-accent-300 mx-auto mb-4" />
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-accent-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-primary-200">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Plus Many More Benefits
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Clock, text: '24/7 Support' },
              { icon: Headphones, text: 'Expert Guidance' },
              { icon: Shield, text: 'Safety Guarantee' },
              { icon: Heart, text: 'Eco-Friendly' }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-gray-50 px-6 py-3 rounded-full"
              >
                <benefit.icon className="w-5 h-5 text-accent-500" />
                <span className="font-medium text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs 