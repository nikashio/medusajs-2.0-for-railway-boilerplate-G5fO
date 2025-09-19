import React, { Suspense } from "react"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import ProductActionsWrapper from "./product-actions-wrapper"
import { HttpTypes } from "@medusajs/types"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <div className="content-container py-4 border-b border-leather-200">
        <nav className="flex items-center gap-2 text-sm">
          <a href="/" className="text-leather-500 hover:text-craft-gold transition-colors">Home</a>
          <span className="text-leather-400">/</span>
          <a href="/store" className="text-leather-500 hover:text-craft-gold transition-colors">Products</a>
          <span className="text-leather-400">/</span>
          <span className="text-leather-800 font-medium">{product.title}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="bg-gradient-to-b from-leather-50 to-white">
        <div
          className="content-container grid grid-cols-1 lg:grid-cols-2 gap-12 py-12"
          data-testid="product-container"
        >
          {/* Image Gallery */}
          <div className="relative">
            <ImageGallery images={product?.images || []} />

            {/* Craftsmanship badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <span className="vintage-badge text-xs">Handmade</span>
              <span className="bg-leather-800 text-leather-50 px-3 py-1 text-xs font-medium rounded-full">
                Limited Edition
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8">
            {/* Product Info */}
            <div>
              <ProductInfo product={product} />

              {/* Craftsmanship Story */}
              <div className="mt-6 p-6 bg-leather-100 rounded-lg border-2 border-leather-200">
                <h3 className="font-serif text-lg text-leather-800 mb-3">The Craftsman's Touch</h3>
                <p className="text-sm text-leather-600 leading-relaxed">
                  Each piece is carefully handcrafted by our master artisans who have honed their skills over decades.
                  From selecting the perfect hide to the final polish, every step is performed with meticulous attention to detail.
                </p>
              </div>
            </div>

            {/* Product Actions */}
            <Suspense
              fallback={
                <ProductActions
                  disabled={true}
                  product={product}
                  region={region}
                />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-leather-200">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                  <span className="text-xl">🛡️</span>
                </div>
                <span className="text-xs text-leather-600">Lifetime Warranty</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                  <span className="text-xl">📦</span>
                </div>
                <span className="text-xs text-leather-600">Free Shipping</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-leather-100 flex items-center justify-center">
                  <span className="text-xl">↩️</span>
                </div>
                <span className="text-xs text-leather-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="bg-leather-100 py-16">
        <div className="content-container">
          <ProductTabs product={product} />
        </div>
      </div>

      {/* Care Instructions */}
      <div className="py-16 bg-gradient-to-br from-leather-800 to-leather-900 text-leather-50">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-3xl mb-6">Leather Care Instructions</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl mb-3">🧴</div>
                <h4 className="font-medium mb-2">Clean Regularly</h4>
                <p className="text-sm text-leather-200">Use a soft, damp cloth to wipe away dust and dirt</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💧</div>
                <h4 className="font-medium mb-2">Condition Monthly</h4>
                <p className="text-sm text-leather-200">Apply leather conditioner to maintain suppleness</p>
              </div>
              <div>
                <div className="text-3xl mb-3">☀️</div>
                <h4 className="font-medium mb-2">Store Properly</h4>
                <p className="text-sm text-leather-200">Keep away from direct sunlight and extreme temperatures</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div
        className="content-container my-16"
        data-testid="related-products-container"
      >
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-leather-800 mb-4">You Might Also Like</h2>
          <p className="text-leather-600">Handpicked pieces that complement your selection</p>
        </div>
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate