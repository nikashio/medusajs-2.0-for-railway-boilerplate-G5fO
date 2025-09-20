"use client"

import { MagnifyingGlassMini } from "@medusajs/icons"
import { useRouter } from "next/navigation"
import { useState, FormEvent } from "react"

/**
 * Simple search component for the header navigation
 * Redirects to search results page when form is submitted
 */
const HeaderSearch = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/results/${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="w-48 lg:w-64 pl-10 pr-4 py-2 text-sm bg-white border border-leather-300 rounded-full focus:outline-none focus:ring-2 focus:ring-craft-gold focus:border-transparent transition-all duration-300 placeholder-leather-500"
        />
        <MagnifyingGlassMini className="absolute left-3 top-1/2 transform -translate-y-1/2 text-leather-500 w-4 h-4" />
      </div>
    </form>
  )
}

export default HeaderSearch
