import { getCategoriesList } from "@lib/data/categories"
import { getCollectionsList } from "@lib/data/collections"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)

  return (
    <footer className="bg-gradient-to-b from-leather-800 to-leather-900 text-leather-200">
      {/* Main Footer Content */}
      <div className="content-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <LocalizedClientLink href="/" className="inline-block mb-6">
              <div className="w-20 h-20 mb-4">
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
                    y="58"
                    textAnchor="middle"
                    className="font-craft text-2xl fill-craft-gold"
                  >
                    HLC
                  </text>
                </svg>
              </div>
              <h3 className="font-serif text-xl text-leather-50 mb-2">Heritage Leather Co.</h3>
            </LocalizedClientLink>
            <p className="text-sm text-leather-300 leading-relaxed">
              Crafting premium leather goods since 1985. Each piece tells a story of tradition, quality, and timeless design.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-leather-400 hover:text-craft-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-leather-400 hover:text-craft-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="text-leather-400 hover:text-craft-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="font-serif text-lg text-leather-50 mb-6">Shop</h4>
            <ul className="space-y-3" data-testid="footer-categories">
              {product_categories?.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <LocalizedClientLink
                    className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                    href={`/categories/${c.handle}`}
                    data-testid="category-link"
                  >
                    {c.name}
                  </LocalizedClientLink>
                </li>
              ))}
              <li>
                <LocalizedClientLink
                  className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                  href="/store"
                >
                  View All Products
                </LocalizedClientLink>
              </li>
            </ul>
          </div>

          {/* Collections Section */}
          {collections && collections.length > 0 && (
            <div>
              <h4 className="font-serif text-lg text-leather-50 mb-6">Collections</h4>
              <ul className="space-y-3">
                {collections?.slice(0, 5).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg text-leather-50 mb-6">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <LocalizedClientLink
                  className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                  href="/about"
                >
                  About Us
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                  href="/craftsmanship"
                >
                  Our Craftsmanship
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                  href="/care-guide"
                >
                  Leather Care Guide
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                  href="/shipping"
                >
                  Shipping & Returns
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink
                  className="text-leather-300 hover:text-craft-gold transition-colors text-sm"
                  href="/contact"
                >
                  Contact Us
                </LocalizedClientLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-12 border-t border-leather-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-serif text-xl text-leather-50 mb-2">Stay in Touch</h4>
              <p className="text-sm text-leather-300">Subscribe for exclusive offers and new product announcements</p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-leather-700 text-leather-50 rounded border border-leather-600 focus:border-craft-gold focus:outline-none placeholder:text-leather-400"
              />
              <button className="px-6 py-2 bg-craft-gold text-leather-900 rounded font-medium hover:bg-craft-copper transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-leather-700">
        <div className="content-container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-leather-400">
              © {new Date().getFullYear()} Heritage Leather Co. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-leather-400 hover:text-craft-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-leather-400 hover:text-craft-gold transition-colors">
                Terms of Service
              </a>
              <a href="/warranty" className="text-leather-400 hover:text-craft-gold transition-colors">
                Warranty
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-leather-700 via-craft-gold to-leather-700"></div>
    </footer>
  )
}