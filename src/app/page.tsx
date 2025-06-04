import Hero from '@/components/home/Hero'
import FeaturedDestinations from '@/components/home/FeaturedDestinations'
import ConservationHighlight from '@/components/home/ConservationHighlight'
import MarineLifeCalendar from '@/components/home/MarineLifeCalendar'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import PartnerCertifications from '@/components/home/PartnerCertifications'
import CallToAction from '@/components/home/CallToAction'

export const metadata = {
  title: 'ScubaDiversPlanet | Dive Into Adventure - PADI Courses & Marine Conservation',
  description: 'Discover world-class scuba diving experiences, PADI certification courses, and marine conservation programs. Join thousands of divers exploring underwater wonders worldwide.',
  keywords: 'scuba diving, PADI certification, dive tours, marine conservation, underwater adventures, dive centers, diving destinations',
}

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <Hero />
      
      {/* Features Section */}
      <WhyChooseUs />
      
      {/* Featured Destinations */}
      <section className="section-padding bg-gray-50">
        <FeaturedDestinations />
      </section>
      
      {/* Conservation Highlight */}
      <section className="section-padding bg-conservation-50">
        <ConservationHighlight />
      </section>
      
      {/* Marine Life Calendar */}
      <section className="section-padding">
        <MarineLifeCalendar />
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-primary-50">
        <Testimonials />
      </section>
      
      {/* Partner Certifications */}
      <section className="py-12 bg-white">
        <PartnerCertifications />
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}
