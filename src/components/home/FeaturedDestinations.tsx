const FeaturedDestinations = () => {
  return (
    <div className="max-width container-padding">
      <div className="text-center mb-12">
        <h2 className="heading-lg mb-4">Featured Destinations</h2>
        <p className="text-xl text-gray-600">Explore the world's most spectacular diving locations</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card p-6">
            <div className="h-48 bg-gradient-to-r from-accent-400 to-primary-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Destination {i}</h3>
            <p className="text-gray-600">Amazing diving experience awaits...</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedDestinations 