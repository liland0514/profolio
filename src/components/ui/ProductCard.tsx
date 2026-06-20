// src/components/ui/ProductCard.tsx

import type { Product } from "../../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12 }}>
      <img src={product.image} width={120} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}
