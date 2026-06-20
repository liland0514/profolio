// src/pages/ProductPage/index.tsx

import { products } from "../../services/products";
import ProductCard from "../../components/ui/ProductCard";

export default function ProductPage() {

  return (
    <div>
      <h1>商品列表</h1>

      <div style={{ display: "flex", gap: 16 }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
    
  );
}
