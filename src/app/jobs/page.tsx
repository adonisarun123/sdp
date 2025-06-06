'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Clock, 
  Users, 
  Briefcase, 
  Heart, 
  Globe, 
  Star,
  ArrowRight,
  DollarSign,
  Calendar,
  Award,
  GraduationCap
} from 'lucide-react'

export default function JobsPage() {
  const jobListings = [
    {
      id: 1,
      title: 'PADI Dive Instructor',
      location: 'Maldives',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$45,000 - $65,000',
      posted: '2 days ago',
      description: 'Lead diving courses and guide underwater adventures in pristine Maldivian waters.',
      requirements: ['PADI Open Water Scuba Instructor certification', 'Minimum 2 years teaching experience', 'Strong swimming and diving skills'],
      benefits: ['Accommodation provided', 'Meals included', 'Equipment supplied', 'Career development']
    },
    {
      id: 2,
      title: 'Marine Biologist',
      location: 'Great Barrier Reef, Australia',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$55,000 - $75,000',
      posted: '1 week ago',
      description: 'Conduct marine research and lead educational diving programs focusing on coral conservation.',
      requirements: ['Marine Biology degree', 'Advanced diving certification', 'Research experience'],
      benefits: ['Research funding', 'International conferences', 'Publication opportunities', 'Health insurance']
    },
    {
      id: 3,
      title: 'Dive Operations Manager',
      location: 'Red Sea, Egypt',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$50,000 - $70,000',
      posted: '3 days ago',
      description: 'Oversee daily dive operations, manage staff, and ensure safety protocols at our Red Sea center.',
      requirements: ['Divemaster or Instructor certification', 'Management experience', 'Multilingual preferred'],
      benefits: ['Leadership training', 'Performance bonuses', 'Relocation assistance', 'Team building events']
    },
    {
      id: 4,
      title: 'Underwater Photographer',
      location: 'Raja Ampat, Indonesia',
      type: 'Contract',
      experience: '2+ years',
      salary: '$40,000 - $55,000',
      posted: '5 days ago',
      description: 'Capture stunning underwater imagery for marketing and conservation documentation.',
      requirements: ['Professional photography portfolio', 'Advanced diving skills', 'Photo/video editing expertise'],
      benefits: ['Equipment provided', 'Travel expenses covered', 'Portfolio development', 'Exhibition opportunities']
    },
    {
      id: 5,
      title: 'Conservation Program Coordinator',
      location: 'Palau, Micronesia',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$48,000 - $62,000',
      posted: '1 week ago',
      description: 'Coordinate marine conservation initiatives and community outreach programs.',
      requirements: ['Environmental science background', 'Project management skills', 'Community engagement experience'],
      benefits: ['Impact-driven work', 'Conference attendance', 'Grant writing training', 'Housing allowance']
    },
    {
      id: 6,
      title: 'Digital Marketing Specialist',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      salary: '$42,000 - $58,000',
      posted: '4 days ago',
      description: 'Develop and execute digital marketing strategies for our global diving community.',
      requirements: ['Digital marketing experience', 'Social media expertise', 'Content creation skills'],
      benefits: ['Remote work', 'Flexible hours', 'Professional development', 'Health benefits']
    }
  ]

  const benefits = [
    {
      icon: Globe,
      title: 'Travel the World',
      description: 'Work in exotic locations across the globe from tropical paradises to pristine marine sanctuaries.'
    },
    {
      icon: Heart,
      title: 'Make a Difference',
      description: 'Contribute to marine conservation efforts and help protect our oceans for future generations.'
    },
    {
      icon: Users,
      title: 'Amazing Community',
      description: 'Join a passionate team of divers, marine biologists, and ocean enthusiasts.'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Advance your career with continuous training, certifications, and leadership opportunities.'
    },
    {
      icon: GraduationCap,
      title: 'Learning Opportunities',
      description: 'Access to courses, workshops, and professional development programs.'
    },
    {
      icon: Star,
      title: 'Work-Life Balance',
      description: 'Enjoy flexible schedules and time to explore the underwater world you love.'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-green-100 text-green-800'
      case 'Part-time': return 'bg-blue-100 text-blue-800'
      case 'Contract': return 'bg-orange-100 text-orange-800'
      default: return 'bg-gray-100 text-gray-800'
    }
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
              Dive Into Your <span className="text-accent-200">Dream Career</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join our global team of ocean enthusiasts and turn your passion for diving 
              into a rewarding career that makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#positions"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Briefcase className="w-5 h-5" />
                <span>View Open Positions</span>
              </Link>
              <Link
                href="#benefits"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                Learn About Benefits
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we provide a lifestyle that combines 
              your passion for the ocean with meaningful career growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exciting career opportunities in diving, marine conservation, 
              and ocean education around the world.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(job.type)}`}>
                          {job.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Posted {job.posted}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
                    </div>
                    <div className="lg:ml-8">
                      <button className="w-full lg:w-auto bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-conservation-500 rounded-full mt-2 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-conservation-600 to-conservation-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Ocean Career?</h2>
            <p className="text-xl text-conservation-100 mb-8 max-w-2xl mx-auto">
              Join our team and help us protect the oceans while building your dream career in the diving industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:careers@scubadiversplanet.com"
                className="bg-white text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contact Our HR Team
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-conservation-600 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 