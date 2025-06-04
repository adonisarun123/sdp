import { Calendar } from 'lucide-react'

const MarineLifeCalendar = () => {
  return (
    <div className="max-width container-padding">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">
          <Calendar className="w-8 h-8 inline-block mr-3 text-accent-500" />
          Marine Life Calendar
        </h2>
        <p className="text-xl text-gray-600">When and where to see your favorite marine species</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
          <div key={index} className="card-ocean p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{month}</h3>
            <p className="text-gray-600">Marine life encounters</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarineLifeCalendar 