import { HttpTypes } from "@medusajs/types"
import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (
    <div className="py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h3 className="font-serif text-3xl text-leather-800">{collection.title}</h3>
          <p className="text-leather-600 mt-2">Handcrafted with passion and precision</p>
        </div>
        <InteractiveLink
          href={`/collections/${collection.handle}`}
          className="group flex items-center gap-2 text-leather-600 hover:text-craft-gold transition-colors duration-300"
        >
          <span className="font-medium">View Collection</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </InteractiveLink>
      </div>

      <div className="relative">
        {/* Decorative line */}
        <div className="absolute -top-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-leather-300 to-transparent"></div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products &&
            products.map((product, index) => (
              <li
                key={product.id}
                className="animate-fade-in-top"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* @ts-ignore */}
                <ProductPreview product={product} region={region} isFeatured />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}