import { Product } from "../data/products"

export function useMenuFilter(products: Product[], category: string) {
  if (category === "all") return products

  return products.filter((product) => product.category === category)
}
