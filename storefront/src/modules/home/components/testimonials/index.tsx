"use client"

import { useState } from "react"

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "James Mitchell",
      role: "Architect",
      location: "New York, USA",
      content: "The wallet I purchased five years ago still looks better than the day I bought it. The patina it's developed is absolutely gorgeous.",
      product: "Classic Bifold Wallet",
      rating: 5
    },
    {
      name: "Sofia Rodriguez",
      role: "Fashion Designer",
      location: "Milan, Italy",
      content: "I've never seen such attention to detail. Every stitch is perfect, and the leather quality is unmatched. This is true craftsmanship.",
      product: "Messenger Bag",
      rating: 5
    },
    {
      name: "Thomas Chen",
      role: "Entrepreneur",
      location: "San Francisco, USA",
      content: "Worth every penny. The durability is incredible, and the customer service was exceptional. They even personalized it with my initials.",
      product: "Executive Briefcase",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Photographer",
      location: "London, UK",
      content: "My camera bag has traveled the world with me. Rain or shine, it protects my gear perfectly while looking absolutely stunning.",
      product: "Camera Bag",
      rating: 5
    }
  ]

  return (
    <section className="py-20 bg-leather-800 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 leather-texture opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-craft-gold/20 to-transparent"></div>

      <div className="content-container relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-leather-700/30 backdrop-blur-sm rounded-lg p-8 md:p-12 border-2 border-craft-gold/20">
            {/* Quote mark */}
            <div className="text-6xl text-craft-gold/30 font-serif leading-none mb-6">"</div>

            {/* Content */}
            <p className="text-leather-100 text-xl md:text-2xl leading-relaxed mb-8 font-light">
              {testimonials[activeTestimonial].content}
            </p>

            {/* Product and Rating */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="leather-tag bg-craft-gold/20 text-craft-gold border border-craft-gold/30">
                {testimonials[activeTestimonial].product}
              </span>
              <div className="flex gap-1">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-craft-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Author */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-serif text-xl text-leather-50">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-leather-300 text-sm">
                  {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`transition-all duration-300 ${
                  index === activeTestimonial
                    ? "w-12 h-3 bg-craft-gold rounded-full"
                    : "w-3 h-3 bg-leather-400 rounded-full hover:bg-leather-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection