"use client"

import { useState } from "react"
import { CategoryPills } from "@restaurant/ui"
import { products } from "../data/products"
import { useMenuFilter } from "../hooks/useMenuFilter"
import { ProductGrid } from "./ProductGrid"

const categories = [
  { id: "all", label: "All" },
  { id: "ice-coffee", label: "Ice Coffee" },
  { id: "hot-coffee", label: "Hot Coffee" },
  { id: "dessert", label: "Dessert" },
  { id: "snacks", label: "Snacks" },
]

export function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const filteredProducts = useMenuFilter(products, selectedCategory)

  return (
    <section className="space-y-6">
      <div className="overflow-x-auto scrollbar-hide">
        <CategoryPills
          items={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <ProductGrid products={filteredProducts} />
    </section>
  )
}
