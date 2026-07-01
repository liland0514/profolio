import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <article className="product-card">
      <Link className="product-card__media" to={`/products/${product.id}`}>
        <img src={product.image} alt={product.name} />
      </Link>

      <div className="product-card__body">
        <h2>{product.name}</h2>
        <p className="product-card__price">${product.price.toLocaleString()}</p>
        <Link className="button button--secondary" to={`/products/${product.id}`}>
          查看詳情
        </Link>
      </div>
    </article>
  );
}
