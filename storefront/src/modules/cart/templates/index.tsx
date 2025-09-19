import ItemsTemplate from "./items"
import Summary from "./summary"
import EmptyCartMessage from "../components/empty-cart-message"
import SignInPrompt from "../components/sign-in-prompt"
import Divider from "@modules/common/components/divider"
import { HttpTypes } from "@medusajs/types"

const CartTemplate = ({
  cart,
  customer,
}: {
  cart: HttpTypes.StoreCart | null
  customer: HttpTypes.StoreCustomer | null
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-leather-50 to-white py-12">
      <div className="content-container" data-testid="cart-container">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl text-leather-800 mb-3">Your Artisan Selection</h1>
          <p className="text-leather-600">Each piece handcrafted with care and precision</p>
        </div>

        {cart?.items?.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">
            {/* Cart Items */}
            <div className="space-y-6">
              {!customer && (
                <div className="artisan-card p-6 mb-6">
                  <SignInPrompt />
                </div>
              )}

              <div className="artisan-card p-6">
                <div className="p-6 border-b-2 border-leather-200">
                  <h2 className="font-serif text-2xl text-leather-800">Your Items</h2>
                  <p className="text-sm text-leather-600 mt-1">
                    {cart.items.length} handcrafted {cart.items.length === 1 ? 'piece' : 'pieces'} selected
                  </p>
                </div>
                <ItemsTemplate items={cart?.items} />
              </div>

              {/* Craftsmanship Note */}
              <div className="stitched p-6 bg-leather-100">
                <h3 className="font-serif text-lg text-leather-800 mb-3">
                  About Your Order
                </h3>
                <ul className="space-y-2 text-sm text-leather-600">
                  <li className="flex items-start gap-2">
                    <span className="text-craft-gold mt-0.5">✓</span>
                    <span>Each item is handcrafted to order, ensuring unique character</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-craft-gold mt-0.5">✓</span>
                    <span>Estimated crafting time: 5-7 business days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-craft-gold mt-0.5">✓</span>
                    <span>Your pieces will develop a beautiful patina over time</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-24 h-fit">
              {cart && cart.region && (
                <div className="artisan-card overflow-hidden">
                  {/* Header with leather texture */}
                  <div className="p-6 bg-gradient-to-br from-leather-600 to-leather-700 text-leather-50">
                    <h2 className="font-serif text-2xl">Order Summary</h2>
                  </div>

                  <div className="p-6">
                    <Summary cart={cart as any} />
                  </div>

                  {/* Trust badges */}
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-leather-200">
                      <div className="flex justify-around text-center">
                        <div>
                          <span className="text-xl">🔒</span>
                          <p className="text-xs text-leather-600 mt-1">Secure Checkout</p>
                        </div>
                        <div>
                          <span className="text-xl">📦</span>
                          <p className="text-xs text-leather-600 mt-1">Free Shipping</p>
                        </div>
                        <div>
                          <span className="text-xl">↩️</span>
                          <p className="text-xs text-leather-600 mt-1">Easy Returns</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gift Note Option */}
              <div className="mt-6 artisan-card p-6">
                <h3 className="font-medium text-leather-800 mb-3">Make it Special</h3>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 text-craft-gold rounded" />
                  <span className="text-sm text-leather-600">Add gift wrapping (+$5)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer mt-2">
                  <input type="checkbox" className="w-4 h-4 text-craft-gold rounded" />
                  <span className="text-sm text-leather-600">Include handwritten note (+$3)</span>
                </label>
              </div>
            </div>
          </div>
        ) : (
          <EmptyCartMessage />
        )}

        {/* Continue Shopping */}
        {cart?.items?.length ? (
          <div className="text-center mt-12 pt-12 border-t-2 border-leather-200">
            <a
              href="/store"
              className="inline-flex items-center gap-2 text-leather-600 hover:text-craft-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span className="font-medium">Continue Shopping</span>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default CartTemplate