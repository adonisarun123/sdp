import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-accent-500 py-16">
      <div className="max-width container-padding text-center text-white">
        <h2 className="heading-lg mb-6">Ready to Start Your Diving Adventure?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of divers exploring the world&apos;s most amazing underwater destinations
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/destinations" className="btn-secondary text-lg px-8 py-4 group">
            Explore Destinations
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/courses" className="btn-outline border-white text-white hover:bg-white hover:text-primary-600">
            PADI Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CallToAction 