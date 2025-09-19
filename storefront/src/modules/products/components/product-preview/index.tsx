import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"
import { getProductsById } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  })

  if (!pricedProduct) {
    return null
  }

  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="artisan-card h-full flex flex-col">
        {/* Image container with hover effect */}
        <div className="relative overflow-hidden bg-leather-100">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-leather-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
            <span className="text-leather-50 text-sm font-medium">View Details →</span>
          </div>

          {/* Badge for featured items */}
          {isFeatured && (
            <div className="absolute top-4 left-4 bg-craft-gold text-leather-900 px-3 py-1 text-xs font-craft uppercase tracking-wider rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Product details */}
        <div className="flex-1 p-6 flex flex-col">
          {/* Category tag */}
          {product.categories && product.categories.length > 0 && (
            <span className="text-xs text-craft-copper uppercase tracking-wider mb-2">
              {product.categories[0].name}
            </span>
          )}

          {/* Product title */}
          <h3
            className="font-serif text-lg text-leather-800 mb-2 group-hover:text-craft-gold transition-colors duration-300"
            data-testid="product-title"
          >
            {product.title}
          </h3>

          {/* Product subtitle/description */}
          {product.subtitle && (
            <p className="text-sm text-leather-600 mb-4 line-clamp-2">
              {product.subtitle}
            </p>
          )}

          {/* Price and details */}
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                {cheapestPrice && (
                  <div className="flex items-baseline gap-2">
                    <PreviewPrice price={cheapestPrice} />
                    {product.variants?.length > 1 && (
                      <span className="text-xs text-leather-500">
                        {product.variants.length} options
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Quick action icon */}
              <div className="w-8 h-8 rounded-full bg-leather-200 group-hover:bg-craft-gold transition-colors duration-300 flex items-center justify-center">
                <svg className="w-4 h-4 text-leather-600 group-hover:text-leather-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Craftsmanship indicator */}
            <div className="mt-3 pt-3 border-t border-leather-200">
              <div className="flex items-center gap-2 text-xs text-leather-500">
                <span>✋</span>
                <span>Handcrafted</span>
                <span className="text-leather-300">•</span>
                <span>⏱️</span>
                <span>Made to Order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}