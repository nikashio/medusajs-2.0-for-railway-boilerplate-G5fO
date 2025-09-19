import { Metadata } from "next"
import { notFound } from "next/navigation"

import Wrapper from "@modules/checkout/components/payment-wrapper"
import CheckoutForm from "@modules/checkout/templates/checkout-form"
import CheckoutSummary from "@modules/checkout/templates/checkout-summary"
import { enrichLineItems, retrieveCart } from "@lib/data/cart"
import { HttpTypes } from "@medusajs/types"
import { getCustomer } from "@lib/data/customer"

export const metadata: Metadata = {
  title: "Secure Checkout | Heritage Leather Co.",
  description: "Complete your order for handcrafted leather goods"
}

const fetchCart = async () => {
  const cart = await retrieveCart()
  if (!cart) {
    return notFound()
  }

  if (cart?.items?.length) {
    const enrichedItems = await enrichLineItems(cart?.items, cart?.region_id!)
    cart.items = enrichedItems as HttpTypes.StoreCartLineItem[]
  }

  return cart
}

export default async function Checkout() {
  const cart = await fetchCart()
  const customer = await getCustomer()

  return (
    <div className="min-h-screen bg-gradient-to-b from-leather-50 to-white">
      {/* Checkout Header */}
      <div className="bg-leather-800 text-leather-50 py-6">
        <div className="content-container">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl">Secure Checkout</h1>
              <p className="text-leather-200 text-sm mt-1">Your information is safe with us</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-craft-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">SSL Encrypted</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="bg-leather-100 py-4">
        <div className="content-container">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-craft-gold text-leather-900 flex items-center justify-center font-medium text-sm">1</div>
                <span className="text-sm font-medium text-leather-800">Cart</span>
              </div>
              <div className="w-12 h-px bg-leather-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-craft-gold text-leather-900 flex items-center justify-center font-medium text-sm">2</div>
                <span className="text-sm font-medium text-leather-800">Checkout</span>
              </div>
              <div className="w-12 h-px bg-leather-300"></div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-leather-300 text-leather-600 flex items-center justify-center font-medium text-sm">3</div>
                <span className="text-sm text-leather-600">Confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div className="content-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-12">
          <div>
            <Wrapper cart={cart}>
              <CheckoutForm cart={cart} customer={customer} />
            </Wrapper>
          </div>
          <div className="lg:sticky lg:top-24 h-fit">
            <CheckoutSummary cart={cart} />
          </div>
        </div>
      </div>
    </div>
  )
}
