'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Quote, MapPin, Calendar } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      location: 'Singapore',
      certification: 'PADI Advanced Open Water',
      rating: 5,
      date: '2 weeks ago',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      testimonial: 'Absolutely incredible experience diving in the Maldives! The team was professional, the equipment was top-notch, and seeing manta rays up close was a dream come true. ScubaDiversPlanet made everything seamless.',
      diveLocation: 'Maldives',
      highlight: 'Manta Ray Encounter'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      location: 'Barcelona, Spain',
      certification: 'PADI Rescue Diver',
      rating: 5,
      date: '1 month ago',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      testimonial: 'The Red Sea expedition exceeded all expectations. Crystal clear waters, vibrant coral reefs, and an amazing group of fellow divers. The dive masters were knowledgeable and safety-focused throughout.',
      diveLocation: 'Red Sea, Egypt',
      highlight: 'Coral Gardens'
    },
    {
      id: 3,
      name: 'Jennifer Wong',
      location: 'Vancouver, Canada',
      certification: 'PADI Divemaster',
      rating: 5,
      date: '3 weeks ago',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      testimonial: 'Raja Ampat was beyond spectacular! The biodiversity is unmatched, and the conservation efforts are truly inspiring. This trip reinforced my passion for marine protection and underwater photography.',
      diveLocation: 'Raja Ampat, Indonesia',
      highlight: 'Marine Biodiversity'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Sydney, Australia',
      certification: 'PADI Open Water',
      rating: 5,
      date: '5 days ago',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      testimonial: 'First time diving and I couldn&apos;t have asked for a better introduction! The instructors were patient, encouraging, and made sure I felt completely comfortable before each dive. Great Barrier Reef was magical!',
      diveLocation: 'Great Barrier Reef',
      highlight: 'First-Time Experience'
    },
    {
      id: 5,
      name: 'Luna Nakamura',
      location: 'Tokyo, Japan',
      certification: 'PADI Specialty Diver',
      rating: 5,
      date: '1 week ago',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      testimonial: 'The cenotes in Mexico were absolutely mystical! Swimming through underwater caves with crystal-clear water and stunning formations was an otherworldly experience. Highly recommend for adventure seekers.',
      diveLocation: 'Cenotes, Mexico',
      highlight: 'Cave Diving'
    },
    {
      id: 6,
      name: 'Alex Morrison',
      location: 'London, UK',
      certification: 'PADI Advanced Open Water',
      rating: 5,
      date: '2 months ago',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      testimonial: 'Palau&apos;s Jellyfish Lake was a once-in-a-lifetime experience! Swimming among millions of harmless jellyfish felt like floating in an alien world. The entire trip was perfectly organized and unforgettable.',
      diveLocation: 'Palau, Micronesia',
      highlight: 'Jellyfish Lake'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const getCertificationColor = (certification: string) => {
    if (certification.includes('Divemaster') || certification.includes('Instructor')) {
      return 'bg-purple-100 text-purple-800'
    } else if (certification.includes('Rescue') || certification.includes('Advanced')) {
      return 'bg-blue-100 text-blue-800'
    } else if (certification.includes('Specialty')) {
      return 'bg-green-100 text-green-800'
    } else {
      return 'bg-yellow-100 text-yellow-800'
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
          What <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-600">Divers Say</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hear from our amazing diving community about their unforgettable underwater adventures 
          and the experiences that changed their lives.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={cardVariants}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-12 h-12 text-accent-500" />
            </div>

            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover ring-4 ring-white shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <div className="flex items-center space-x-1 text-gray-500 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {testimonial.rating}.0
                </span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 leading-relaxed mb-6 text-sm">
                &ldquo;{testimonial.testimonial}&rdquo;
              </blockquote>

              {/* Footer */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getCertificationColor(testimonial.certification)}`}>
                      {testimonial.certification}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Dive Location:</strong> {testimonial.diveLocation}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-xs font-medium">
                    {testimonial.highlight}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Trust Indicators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-600">Average Rating</div>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-600 mb-2">25,000+</div>
            <div className="text-sm text-gray-600">Verified Reviews</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-conservation-600 mb-2">50,000+</div>
            <div className="text-sm text-gray-600">Happy Divers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary-600 mb-2">200+</div>
            <div className="text-sm text-gray-600">Destinations</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonials 