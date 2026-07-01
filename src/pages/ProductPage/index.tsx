import { products } from "../../services/products";
import ProductCard from "../../components/ui/ProductCard";

export default function ProductPage() {
  return (
    <section className="products-page">
      <div className="page-heading">
        <p className="eyebrow">Products</p>
        <h1>商品列表</h1>
        <p>挑選商品後可進入詳情頁查看資訊，並加入購物車。</p>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
