import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import WhyChooseUs from '@/components/home/WhyChooseUs'

// Lazy load below-the-fold components for better Speed Index
const FeaturedDestinations = dynamic(() => import('@/components/home/FeaturedDestinations'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse rounded-lg" />
})

const ConservationHighlight = dynamic(() => import('@/components/home/ConservationHighlight'), {
  loading: () => <div className="h-96 bg-green-50 animate-pulse rounded-lg" />
})

const MarineLifeCalendar = dynamic(() => import('@/components/home/MarineLifeCalendar'), {
  loading: () => <div className="h-96 bg-white animate-pulse rounded-lg" />
})

const Testimonials = dynamic(() => import('@/components/home/Testimonials'), {
  loading: () => <div className="h-96 bg-blue-50 animate-pulse rounded-lg" />
})

const PartnerCertifications = dynamic(() => import('@/components/home/PartnerCertifications'), {
  loading: () => <div className="h-48 bg-white animate-pulse rounded-lg" />
})

const CallToAction = dynamic(() => import('@/components/home/CallToAction'), {
  loading: () => <div className="h-64 bg-blue-600 animate-pulse rounded-lg" />
})

export const metadata = {
  title: 'ScubaDiversPlanet | Dive Into Adventure - PADI Courses & Marine Conservation',
  description: 'Discover world-class scuba diving experiences, PADI certification courses, and marine conservation programs. Join thousands of divers exploring underwater wonders worldwide.',
  keywords: 'scuba diving, PADI certification, dive tours, marine conservation, underwater adventures, dive centers, diving destinations',
}

export default function HomePage() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Critical above-the-fold content - Load immediately */}
      <Hero />
      <WhyChooseUs />
      
      {/* Lazy-loaded below-the-fold content - Improve Speed Index */}
      <section className="section-padding bg-gray-50">
        <FeaturedDestinations />
      </section>
      
      <section className="section-padding bg-green-50">
        <ConservationHighlight />
      </section>
      
      <section className="section-padding">
        <MarineLifeCalendar />
      </section>
      
      <section className="section-padding bg-blue-50">
        <Testimonials />
      </section>
      
      <section className="py-12 bg-white">
        <PartnerCertifications />
      </section>
      
      <CallToAction />
    </div>
  )
}
