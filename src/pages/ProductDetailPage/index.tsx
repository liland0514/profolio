import { useParams } from "react-router-dom";
import { products } from "../../services/products";

export default function ProductDetailPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1>找不到商品</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <img src={product.image} alt={product.name} />

      <p>價格：${product.price}</p>
    </div>
  );
}
