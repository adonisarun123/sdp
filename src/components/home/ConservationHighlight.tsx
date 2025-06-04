import { Heart } from 'lucide-react'

const ConservationHighlight = () => {
  return (
    <div className="max-width container-padding">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">
          <Heart className="w-8 h-8 inline-block mr-3 text-conservation-500" />
          Marine Conservation
        </h2>
        <p className="text-xl text-gray-600">Protecting our oceans for future generations</p>
      </div>
      <div className="bg-gradient-to-r from-conservation-400 to-conservation-600 rounded-2xl p-12 text-white text-center">
        <h3 className="text-3xl font-bold mb-4">Join Our Conservation Efforts</h3>
        <p className="text-xl mb-8">Every dive makes a difference</p>
        <button className="btn-conservation">Learn More</button>
      </div>
    </div>
  )
}

export default ConservationHighlight 