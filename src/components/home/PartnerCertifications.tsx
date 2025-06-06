'use client'

import { motion } from 'framer-motion'
import { Award, Shield, Star, CheckCircle } from 'lucide-react'

const PartnerCertifications = () => {
  const certifications = [
    {
      name: 'PADI',
      fullName: 'Professional Association of Diving Instructors',
      description: 'World\'s leading scuba training organization',
      icon: Award,
      logo: '🏆',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      established: '1966',
      members: '6,600+ Centers'
    },
    {
      name: 'SSI',
      fullName: 'Scuba Schools International',
      description: 'Digital learning and training innovation',
      icon: Star,
      logo: '⭐',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      established: '1970',
      members: '3,500+ Centers'
    },
    {
      name: 'NAUI',
      fullName: 'National Association of Underwater Instructors',
      description: 'Excellence in diver education since 1960',
      icon: Shield,
      logo: '🛡️',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      established: '1960',
      members: '1,300+ Centers'
    },
    {
      name: 'BSAC',
      fullName: 'British Sub-Aqua Club',
      description: 'UK\'s national diving organization',
      icon: CheckCircle,
      logo: '🇬🇧',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      established: '1953',
      members: '1,000+ Clubs'
    },
    {
      name: 'CMAS',
      fullName: 'Confédération Mondiale des Activités Subaquatiques',
      description: 'International confederation of underwater activities',
      icon: Award,
      logo: '🌍',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      established: '1959',
      members: '130+ Countries'
    }
  ]

  const trustFeatures = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All dive centers meet the highest safety standards'
    },
    {
      icon: Award,
      title: 'Certified Excellence',
      description: 'Only work with internationally recognized organizations'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assured',
      description: 'Regular audits and quality assessments'
    },
    {
      icon: Star,
      title: 'Global Recognition',
      description: 'Certifications valid worldwide'
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
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-600">Certifications</span>
        </h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Recognized and certified by the world's leading diving organizations, 
          ensuring the highest standards of safety, education, and professionalism.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 text-center"
          >
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
            
            <div className="relative z-10">
              {/* Logo */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {cert.logo}
              </div>
              
              {/* Certification Name */}
              <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
              
              {/* Full Name */}
              <p className="text-sm font-medium text-gray-600 mb-2">{cert.fullName}</p>
              
              {/* Description */}
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{cert.description}</p>
              
              {/* Stats */}
              <div className="space-y-1 mb-3">
                <div className="text-xs text-gray-400">
                  Est. {cert.established}
                </div>
                <div className={`text-xs font-medium ${cert.textColor}`}>
                  {cert.members}
                </div>
              </div>
              
              {/* Badge */}
              <div className={`inline-flex items-center space-x-1 px-2 py-1 ${cert.bgColor} ${cert.textColor} rounded-full text-xs font-medium`}>
                <cert.icon className="w-3 h-3" />
                <span>Certified</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Why Our Certifications Matter
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our partnerships with world-renowned diving organizations ensure that you receive 
            the highest quality training and certification.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-accent-500" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">1,500+</div>
            <div className="text-sm text-gray-600">Certified Dive Centers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-2">50,000+</div>
            <div className="text-sm text-gray-600">Certified Divers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-conservation-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">Countries Worldwide</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PartnerCertifications 