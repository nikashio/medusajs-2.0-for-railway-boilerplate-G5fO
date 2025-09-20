import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import HeaderSearch from "@modules/layout/components/header-search"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Top Bar */}
      <div className="bg-leather-900 text-leather-200 py-2">
        <div className="content-container flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span>✋ Handcrafted with Pride</span>
            <span className="text-leather-400">|</span>
            <span>🚚 Free Shipping on Orders Over $150</span>
          </div>
          <div className="flex items-center gap-4">
            <span>📞 (555) 123-4567</span>
            <span className="text-leather-400">|</span>
            <span>📧 craft@heritageleather.co</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="relative bg-leather-50 border-b-2 border-leather-200">
        <nav className="content-container flex items-center justify-between h-30">
          {/* Left Navigation */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="hidden md:flex items-center gap-8">
              <LocalizedClientLink
                href="/"
                className="font-medium text-leather-700 hover:text-craft-gold transition-colors duration-300"
              >
                Home
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/store"
                className="font-medium text-leather-700 hover:text-craft-gold transition-colors duration-300"
              >
                Store
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/account"
                className="font-medium text-leather-700 hover:text-craft-gold transition-colors duration-300"
              >
                Account
              </LocalizedClientLink>
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-4">
              <LocalizedClientLink
                href="/store"
                className="font-medium text-leather-700 hover:text-craft-gold transition-colors duration-300"
              >
                Store
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/account"
                className="font-medium text-leather-700 hover:text-craft-gold transition-colors duration-300"
              >
                Account
              </LocalizedClientLink>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="flex flex-col items-center group"
              data-testid="nav-store-link"
            >
              {/* Logo Mark */}
              <div className="w-16 h-16 relative mb-1">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M50 10 L70 30 L70 70 L50 90 L30 70 L30 30 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-leather-600 group-hover:text-craft-gold transition-colors duration-300"
                  />
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    className="font-craft text-2xl fill-leather-600 group-hover:fill-craft-gold transition-all duration-300"
                  >
                    HLC
                  </text>
                </svg>
              </div>
              <span className="font-serif text-lg text-leather-800 group-hover:text-craft-gold transition-colors duration-300">
                Heritage Leather Co.
              </span>
            </LocalizedClientLink>
          </div>

          {/* Search & Cart */}
          <div className="flex items-center gap-x-4 h-full flex-1 basis-0 justify-end">
            {/* Desktop Search */}
            <div className="hidden lg:flex items-center">
              <HeaderSearch />
            </div>
            
            {/* Mobile Search Icon */}
            <div className="lg:hidden">
              <LocalizedClientLink
                href="/search"
                className="text-leather-700 hover:text-craft-gold transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </LocalizedClientLink>
            </div>
            
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-leather-700 hover:text-craft-gold transition-colors duration-300 flex items-center gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span className="hidden sm:inline font-medium">Cart</span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>

        {/* Decorative leather texture bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-leather-300 via-craft-gold to-leather-300 opacity-30"></div>
      </header>
    </div>
  )
}