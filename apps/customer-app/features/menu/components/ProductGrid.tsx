import { ProductCard } from "@restaurant/ui";
import { Product } from "../data/products";

type Props = {
  products: Product[];
};

export function ProductGrid({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id} 
          title={product.name}
          price={product.price}
          image={product.image}
          onAdd={() => console.log(`Buy ${product.name}`)}
        />
      ))}
    </div>
  );
}

