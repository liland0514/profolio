import { Link } from "react-router-dom";
import { products } from "../services/products";

export default function HomePage() {
  return (
    <section className="home-page">
      <div className="hero">
        <p className="eyebrow">精選 3C 商品</p>
        <h1>把常用科技裝備整理成好逛的購物體驗</h1>
        <p className="hero__text">
          從商品列表、詳情到購物車，保留簡潔架構，同時補上更完整的瀏覽與下單動線。
        </p>
        <Link className="button" to="/products">
          開始選購
        </Link>
      </div>

      <div className="summary-grid">
        <div>
          <strong>{products.length}</strong>
          <span>項商品</span>
        </div>
        <div>
          <strong>RWD</strong>
          <span>支援手機與桌面</span>
        </div>
        <div>
          <strong>Cart</strong>
          <span>購物車數量同步</span>
        </div>
      </div>
    </section>
  );
}
