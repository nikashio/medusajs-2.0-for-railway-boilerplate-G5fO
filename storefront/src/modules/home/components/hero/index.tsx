"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Heritage Leather Craft",
      subtitle: "Handmade with Passion",
      description: "Each piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations",
      image: "/images/hero-1.jpg",
      cta: "Explore Collection"
    },
    {
      title: "Premium Materials",
      subtitle: "Full-Grain Leather",
      description: "We source only the finest full-grain leather that ages beautifully and develops a unique patina over time",
      image: "/images/hero-2.jpg",
      cta: "Learn About Our Process"
    },
    {
      title: "Built to Last",
      subtitle: "Lifetime Quality",
      description: "Our commitment to excellence means every product is built to be your companion for life",
      image: "/images/hero-3.jpg",
      cta: "Shop Now"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background with leather texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-leather-900 to-leather-700">
        <div className="absolute inset-0 leather-texture opacity-20"></div>
      </div>

      {/* Decorative corner stitching */}
      <div className="absolute top-8 left-8 w-32 h-32 border-l-2 border-t-2 border-craft-gold opacity-50"></div>
      <div className="absolute top-8 right-8 w-32 h-32 border-r-2 border-t-2 border-craft-gold opacity-50"></div>
      <div className="absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-craft-gold opacity-50"></div>
      <div className="absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-craft-gold opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="content-container text-center">
          {/* Logo/Brand Mark */}
          <div className="mb-8 animate-float">
            <div className="inline-block">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 10 L70 30 L70 70 L50 90 L30 70 L30 30 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-craft-gold"
                  />
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    className="font-craft text-2xl fill-craft-gold"
                  >
                    HLC
                  </text>
                </svg>
              </div>
              <span className="text-craft-gold text-sm tracking-[0.3em] uppercase font-craft">
                Est. 1985
              </span>
            </div>
          </div>

          {/* Main Title with animation */}
          <div className="overflow-hidden mb-6">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-leather-50 mb-2 animate-slide-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-craft-gold text-xl md:text-2xl font-craft uppercase tracking-[0.2em]">
              {slides[currentSlide].subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-leather-200 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/store">
              <button className="leather-btn text-leather-50 px-10 py-4 rounded-md text-lg font-medium min-w-[200px]">
                {slides[currentSlide].cta}
              </button>
            </Link>
            <Link href="/about">
              <button className="px-10 py-4 border-2 border-craft-gold text-craft-gold rounded-md hover:bg-craft-gold hover:text-leather-900 transition-all duration-300 text-lg font-medium min-w-[200px]">
                Our Story
              </button>
            </Link>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-3 justify-center mt-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 transition-all duration-300 ${
                  index === currentSlide
                    ? "w-12 bg-craft-gold"
                    : "w-2 bg-leather-400 hover:bg-leather-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-craft-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero