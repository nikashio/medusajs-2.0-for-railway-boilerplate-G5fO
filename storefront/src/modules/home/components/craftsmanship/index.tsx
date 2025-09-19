"use client"

import { useState } from "react"

const CraftsmanshipSection = () => {
  const [activeStep, setActiveStep] = useState(0)

  const craftSteps = [
    {
      number: "01",
      title: "Material Selection",
      description: "We handpick only the finest full-grain leather hides from ethical suppliers",
      icon: "🐄"
    },
    {
      number: "02",
      title: "Pattern Cutting",
      description: "Each piece is carefully cut using traditional patterns refined over decades",
      icon: "✂️"
    },
    {
      number: "03",
      title: "Hand Stitching",
      description: "Our artisans use saddle stitching techniques for unmatched durability",
      icon: "🪡"
    },
    {
      number: "04",
      title: "Edge Finishing",
      description: "Edges are burnished by hand to create a smooth, refined finish",
      icon: "✨"
    },
    {
      number: "05",
      title: "Quality Control",
      description: "Every product undergoes rigorous inspection before leaving our workshop",
      icon: "🔍"
    }
  ]

  return (
    <section className="py-20 bg-leather-100 relative overflow-hidden">
      <div className="absolute inset-0 craft-paper"></div>

      <div className="content-container relative z-10">
        <div className="text-center mb-16">
          <span className="vintage-badge text-sm">Our Process</span>
          <h2 className="font-serif text-4xl md:text-5xl text-leather-800 mt-6 mb-4">
            The Art of Leather Crafting
          </h2>
          <p className="text-leather-600 text-lg max-w-2xl mx-auto">
            From raw hide to finished product, every step is a testament to our dedication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Process Steps */}
          <div className="space-y-6">
            {craftSteps.map((step, index) => (
              <div
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === index ? "scale-105" : ""
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`flex items-start gap-6 p-6 rounded-lg ${
                  activeStep === index
                    ? "bg-leather-50 shadow-lg border-2 border-craft-gold"
                    : "bg-white/50 border-2 border-transparent hover:bg-leather-50"
                }`}>
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                      activeStep === index
                        ? "bg-gradient-to-br from-craft-gold to-craft-copper text-white"
                        : "bg-leather-200"
                    }`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`font-craft text-2xl ${
                        activeStep === index ? "text-craft-gold" : "text-leather-400"
                      }`}>
                        {step.number}
                      </span>
                      <h3 className="font-serif text-xl text-leather-800">
                        {step.title}
                      </h3>
                    </div>
                    <p className={`text-leather-600 transition-all duration-300 ${
                      activeStep === index ? "opacity-100" : "opacity-70"
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Display */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-leather-200 to-leather-300 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">
                    {craftSteps[activeStep].icon}
                  </div>
                  <h3 className="font-serif text-2xl text-leather-800 mb-2">
                    {craftSteps[activeStep].title}
                  </h3>
                  <p className="text-leather-600 px-8">
                    {craftSteps[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-craft-gold"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-craft-gold"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-craft-gold"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-craft-gold"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-leather-600 text-leather-50 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="font-craft text-3xl">100%</div>
                <div className="text-xs uppercase tracking-wider">Handmade</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CraftsmanshipSection