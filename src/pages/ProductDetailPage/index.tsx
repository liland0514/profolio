import { useParams } from "react-router-dom";
import { products } from "../../services/products";
import { useCartStore } from "../../store/cartStore";
import { Link } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const addToCart = useCartStore((state) => state.addToCart);

  if (!product) {
    return (
      <section className="empty-state">
        <h1>找不到商品</h1>
        <p>這項商品可能已下架，請返回列表重新選擇。</p>
        <Link className="button" to="/products">
          返回商品列表
        </Link>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <div className="product-detail__media">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-detail__info">
        <Link className="text-link" to="/products">
          返回商品列表
        </Link>
        <p className="eyebrow">Product detail</p>
        <h1>{product.name}</h1>
        <p className="detail-price">${product.price.toLocaleString()}</p>
        <p className="detail-copy">
          這是一款精選商品，適合放進購物車比較與結帳。版面已保留原本資料來源，未改動商品資料架構。
        </p>

        <div className="action-row">
          <button className="button" onClick={() => addToCart(product)}>
            加入購物車
          </button>
          <Link className="button button--secondary" to="/cart">
            前往購物車
          </Link>
        </div>
      </div>
    </section>
  );
}
