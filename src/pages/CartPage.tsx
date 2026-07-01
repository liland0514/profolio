import { useCartStore } from "../store/cartStore";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page">
      <div className="page-heading">
        <p className="eyebrow">Cart</p>
        <h1>購物車</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <p>購物車是空的</p>
          <Link className="button" to="/products">
            去逛商品
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            {cart.map((item) => (
              <article className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item__info">
                  <h2>{item.name}</h2>
                  <p>${item.price.toLocaleString()}</p>
                </div>

                <div className="quantity-control" aria-label={`${item.name} 數量`}>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>

                <button className="text-button" onClick={() => removeFromCart(item.id)}>
                  移除
                </button>
              </article>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>訂單摘要</h2>
            <div>
              <span>商品數量</span>
              <strong>{cart.reduce((sum, item) => sum + item.quantity, 0)}</strong>
            </div>
            <div>
              <span>總金額</span>
              <strong>${total.toLocaleString()}</strong>
            </div>
            <button className="button" type="button">
              前往結帳
            </button>
            <button className="text-button" type="button" onClick={clearCart}>
              清空購物車
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
