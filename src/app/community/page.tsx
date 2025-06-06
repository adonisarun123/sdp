'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Users, 
  MessageCircle, 
  Calendar, 
  Camera, 
  Heart, 
  MapPin,
  Award,
  Clock,
  Eye,
  ThumbsUp,
  Share2,
  Star,
  Globe,
  Fish,
} from 'lucide-react'

export default function CommunityPage() {
  const forumCategories = [
    {
      id: 1,
      title: 'General Discussion',
      description: 'Share your diving experiences and connect with fellow divers',
      posts: 2847,
      lastActivity: '2 minutes ago',
      icon: MessageCircle,
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: 'Destination Reviews',
      description: 'Rate and review diving destinations around the world',
      posts: 1923,
      lastActivity: '15 minutes ago',
      icon: MapPin,
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'Photography',
      description: 'Share your underwater photography and get feedback',
      posts: 3456,
      lastActivity: '1 hour ago',
      icon: Camera,
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: 'Marine Life',
      description: 'Discuss marine life encounters and identification',
      posts: 1654,
      lastActivity: '3 hours ago',
      icon: Fish,
      color: 'bg-orange-500'
    },
    {
      id: 5,
      title: 'Equipment & Gear',
      description: 'Get advice on diving equipment and gear reviews',
      posts: 2134,
      lastActivity: '5 hours ago',
      icon: Award,
      color: 'bg-red-500'
    },
    {
      id: 6,
      title: 'Conservation',
      description: 'Share conservation efforts and marine protection initiatives',
      posts: 987,
      lastActivity: '1 day ago',
      icon: Heart,
      color: 'bg-conservation-500'
    }
  ]

  const recentPosts = [
    {
      id: 1,
      title: 'Amazing manta ray encounter in Maldives!',
      author: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face',
      category: 'General Discussion',
      time: '2 hours ago',
      likes: 47,
      replies: 12,
      views: 234,
      snippet: 'Just got back from an incredible dive in the Maldives where we encountered a group of manta rays...'
    },
    {
      id: 2,
      title: 'Best underwater camera setup for beginners?',
      author: 'Marcus Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face',
      category: 'Photography',
      time: '4 hours ago',
      likes: 23,
      replies: 18,
      views: 156,
      snippet: 'Looking for recommendations on a good underwater camera setup for someone just starting...'
    },
    {
      id: 3,
      title: 'Raja Ampat conservation project update',
      author: 'Jennifer Wong',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face',
      category: 'Conservation',
      time: '6 hours ago',
      likes: 89,
      replies: 7,
      views: 445,
      snippet: 'Great news from our coral restoration project in Raja Ampat! We&apos;ve successfully planted...'
    },
    {
      id: 4,
      title: 'Identifying this unusual fish species',
      author: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face',
      category: 'Marine Life',
      time: '8 hours ago',
      likes: 15,
      replies: 9,
      views: 98,
      snippet: 'Spotted this beautiful fish during a dive in the Red Sea. Anyone know what species this might be?'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Virtual Marine Biology Workshop',
      date: 'June 15, 2024',
      time: '2:00 PM UTC',
      attendees: 234,
      type: 'Online',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Coral Restoration Dive - Maldives',
      date: 'June 22, 2024',
      time: '8:00 AM Local',
      attendees: 45,
      type: 'In-Person',
      image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Photography Contest Judging',
      date: 'June 28, 2024',
      time: '6:00 PM UTC',
      attendees: 156,
      type: 'Online',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop'
    }
  ]

  const memberSpotlights = [
    {
      id: 1,
      name: 'Dr. Elena Rodriguez',
      title: 'Marine Biologist & Conservation Leader',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      achievement: 'Led coral restoration project that planted 50,000 coral fragments',
      posts: 156,
      reputation: 4.9,
      joinDate: 'Member since 2019'
    },
    {
      id: 2,
      name: 'Captain Mike Johnson',
      title: 'Technical Diving Instructor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      achievement: 'Certified over 1,000 divers and discovered 3 new dive sites',
      posts: 289,
      reputation: 4.8,
      joinDate: 'Member since 2018'
    },
    {
      id: 3,
      name: 'Luna Nakamura',
      title: 'Underwater Photographer',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      achievement: 'Won National Geographic underwater photography award',
      posts: 423,
      reputation: 4.9,
      joinDate: 'Member since 2020'
    }
  ]

  const communityStats = [
    { label: 'Active Members', value: '25,847', icon: Users },
    { label: 'Forum Posts', value: '147,293', icon: MessageCircle },
    { label: 'Photos Shared', value: '89,432', icon: Camera },
    { label: 'Countries', value: '127', icon: Globe }
  ]

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
              Join Our <span className="text-accent-200">Diving Community</span>
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Connect with passionate divers worldwide, share experiences, and explore 
              the underwater world together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#forums"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Join Discussions</span>
              </Link>
              <Link
                href="#events"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
              >
                View Events
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section id="forums" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Community Forums</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join discussions, share knowledge, and connect with divers who share your passion for the underwater world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {category.title}
                      </h3>
                      <div className="text-sm text-gray-500">{category.posts} posts</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Last activity: {category.lastActivity}</span>
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Discussions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay up to date with the latest conversations in our diving community.
            </p>
          </motion.div>

          <div className="space-y-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
              >
                <div className="flex items-start space-x-4">
                  <Image
                    src={post.avatar}
                    alt={post.author}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                      <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span>by {post.author}</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.time}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{post.snippet}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{post.views} views</span>
                      </div>
                      <button className="flex items-center space-x-1 hover:text-primary-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join fellow divers at workshops, dive trips, and conservation events around the world.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
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
                  <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Join Event
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Spotlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Member Spotlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet exceptional members of our diving community who are making waves in marine conservation and exploration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {memberSpotlights.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center"
              >
                <Image
                  src={member.avatar}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full object-cover mx-auto mb-4 ring-4 ring-primary-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.title}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.achievement}</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{member.posts} posts</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span>{member.reputation}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">{member.joinDate}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="bg-gradient-to-r from-conservation-600 to-conservation-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Dive In?</h2>
            <p className="text-xl text-conservation-100 mb-8 max-w-2xl mx-auto">
              Join our thriving community of ocean lovers and start sharing your underwater adventures today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-white text-conservation-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Create Account
              </Link>
              <Link
                href="/login"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-conservation-600 transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 