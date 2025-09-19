import type {
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/framework"

/**
 * Subscriber that handles product update events and triggers cache revalidation
 * in the Next.js storefront when a product is updated in the admin.
 */
export default async function productUpdatedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const logger = container.resolve("logger")
  
  try {
    // Send request to Next.js storefront to revalidate cache
    const storefrontUrl = process.env.STOREFRONT_URL
    
    if (!storefrontUrl) {
      logger.warn("STOREFRONT_URL environment variable not set. Cache revalidation skipped.")
      return
    }

    const response = await fetch(`${storefrontUrl}/api/revalidate?tags=products,product-${data.id}`)
    
    if (!response.ok) {
      logger.error(`Failed to revalidate cache for product ${data.id}: ${response.statusText}`)
    } else {
      logger.info(`Successfully triggered cache revalidation for product ${data.id}`)
    }
  } catch (error) {
    logger.error(`Error triggering cache revalidation for product ${data.id}:`, error)
  }
}

export const config: SubscriberConfig = {
  event: "product.updated",
}
