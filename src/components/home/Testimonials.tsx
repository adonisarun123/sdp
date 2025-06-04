import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className="max-width container-padding">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">What Divers Say</h2>
        <p className="text-xl text-gray-600">Hear from our amazing diving community</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card p-6">
            <div className="flex mb-4">
              {[1,2,3,4,5].map(star => (
                <Star key={star} className="w-5 h-5 text-sand-500 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">"Amazing diving experience with professional guides!"</p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-400 to-primary-500 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold">Diver {i}</p>
                <p className="text-sm text-gray-500">PADI Advanced</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials 