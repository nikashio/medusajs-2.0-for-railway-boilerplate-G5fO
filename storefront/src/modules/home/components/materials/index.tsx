const MaterialsSection = () => {
  const materials = [
    {
      name: "Full-Grain Leather",
      description: "The highest quality leather that retains the complete grain",
      features: ["Ages beautifully", "Develops patina", "Water resistant"],
      color: "bg-gradient-to-br from-leather-500 to-leather-700"
    },
    {
      name: "Vegetable Tanned",
      description: "Eco-friendly tanning using natural materials",
      features: ["Chemical free", "Biodegradable", "Rich colors"],
      color: "bg-gradient-to-br from-leather-400 to-leather-600"
    },
    {
      name: "Brass Hardware",
      description: "Solid brass fittings that age with character",
      features: ["Corrosion resistant", "Lifetime durability", "Classic aesthetic"],
      color: "bg-gradient-to-br from-craft-gold to-craft-copper"
    },
    {
      name: "Waxed Thread",
      description: "Premium thread for superior strength",
      features: ["Water repellent", "UV resistant", "Extra strong"],
      color: "bg-gradient-to-br from-leather-300 to-leather-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-leather-50 to-white">
      <div className="content-container">
        <div className="text-center mb-16">
          <span className="vintage-badge text-sm">Premium Quality</span>
          <h2 className="font-serif text-4xl md:text-5xl text-leather-800 mt-6 mb-4">
            Materials That Matter
          </h2>
          <p className="text-leather-600 text-lg max-w-2xl mx-auto">
            We believe in transparency. Here's exactly what goes into every piece we create
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-all duration-500 hover:-translate-y-2"
            >
              {/* Card Background */}
              <div className="artisan-card h-full">
                {/* Material Sample */}
                <div className={`h-32 ${material.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 leather-texture opacity-30"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-leather-800 mb-2">
                    {material.name}
                  </h3>
                  <p className="text-leather-600 text-sm mb-4">
                    {material.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-leather-700"
                      >
                        <span className="text-craft-gold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-craft-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="mt-16 pt-12 border-t-2 border-leather-200">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                <span className="text-3xl">🌿</span>
              </div>
              <span className="text-xs text-leather-600 uppercase tracking-wider">Eco-Friendly</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <span className="text-xs text-leather-600 uppercase tracking-wider">Lifetime Warranty</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                <span className="text-3xl">🤝</span>
              </div>
              <span className="text-xs text-leather-600 uppercase tracking-wider">Ethically Sourced</span>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                <span className="text-3xl">🏆</span>
              </div>
              <span className="text-xs text-leather-600 uppercase tracking-wider">Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MaterialsSection