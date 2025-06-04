const PartnerCertifications = () => {
  return (
    <div className="max-width container-padding">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Certifications</h3>
        <p className="text-gray-600">Recognized by leading diving organizations</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        {['PADI', 'SSI', 'NAUI', 'BSAC', 'CMAS'].map((cert, index) => (
          <div key={index} className="text-lg font-semibold text-gray-700">{cert}</div>
        ))}
      </div>
    </div>
  )
}

export default PartnerCertifications 