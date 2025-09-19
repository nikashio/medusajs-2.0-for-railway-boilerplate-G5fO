import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import CraftsmanshipSection from "@modules/home/components/craftsmanship"
import MaterialsSection from "@modules/home/components/materials"
import TestimonialsSection from "@modules/home/components/testimonials"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Heritage Leather Co. - Handcrafted Leather Goods",
  description:
    "Artisanal leather goods handcrafted with tradition and passion. Premium wallets, bags, and accessories made to last a lifetime.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-b from-leather-50 to-leather-100">
        <div className="content-container">
          <div className="text-center mb-12">
            <span className="vintage-badge text-sm">Premium Collection</span>
            <h2 className="font-serif text-4xl md:text-5xl text-leather-800 mt-6 mb-4">
              Timeless Leather Goods
            </h2>
            <p className="text-leather-600 text-lg max-w-2xl mx-auto">
              Each piece tells a story of craftsmanship, tradition, and the beauty of natural materials
            </p>
          </div>
          <FeaturedProducts collections={collections} region={region} />
        </div>
      </section>

      {/* Craftsmanship Section */}
      <CraftsmanshipSection />

      {/* Materials Section */}
      <MaterialsSection />
    </>
  )
}
