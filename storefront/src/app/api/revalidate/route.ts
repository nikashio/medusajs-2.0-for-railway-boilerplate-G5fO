import { NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

/**
 * API endpoint for revalidating Next.js cache when data is updated in Medusa backend.
 * Accepts tags as query parameters to determine which cache paths to revalidate.
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const tags = searchParams.get("tags") as string

  if (!tags) {
    return NextResponse.json({ error: "No tags provided" }, { status: 400 })
  }

  const tagsArray = tags.split(",")
  
  try {
    await Promise.all(
      tagsArray.map(async (tag) => {
        switch (true) {
          case tag === "products":
            // Revalidate store page (product listing)
            revalidatePath("/[countryCode]/(main)/store", "page")
            // Revalidate all product detail pages
            revalidatePath("/[countryCode]/(main)/products/[handle]", "page")
            // Revalidate home page in case it shows featured products
            revalidatePath("/[countryCode]/(main)", "page")
            break
          
          case tag.startsWith("product-"):
            // Revalidate specific product page
            const productId = tag.replace("product-", "")
            revalidatePath("/[countryCode]/(main)/products/[handle]", "page")
            // Also revalidate store page to update product listings
            revalidatePath("/[countryCode]/(main)/store", "page")
            break
          
          case tag === "categories":
            // Revalidate category pages
            revalidatePath("/[countryCode]/(main)/categories/[...category]", "page")
            revalidatePath("/[countryCode]/(main)/store", "page")
            break
          
          case tag === "collections":
            // Revalidate collection pages
            revalidatePath("/[countryCode]/(main)/collections/[handle]", "page")
            revalidatePath("/[countryCode]/(main)/store", "page")
            break
          
          default:
            console.log(`Unknown tag: ${tag}`)
        }
      })
    )

    return NextResponse.json({ 
      message: "Cache revalidated successfully", 
      tags: tagsArray 
    }, { status: 200 })
    
  } catch (error) {
    console.error("Error revalidating cache:", error)
    return NextResponse.json({ 
      error: "Failed to revalidate cache" 
    }, { status: 500 })
  }
}
