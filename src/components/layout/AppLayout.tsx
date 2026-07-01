import { NavLink, Outlet } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function AppLayout() {
  const totalQuantity = useCartStore((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0),
  );

  return (
    <div className="app-shell">
      <header className="site-header">
        <NavLink className="brand" to="/home">
          ShopLite
        </NavLink>

        <nav className="site-nav" aria-label="主要導覽">
          <NavLink to="/home">首頁</NavLink>
          <NavLink to="/products">商品列表</NavLink>
          <NavLink to="/cart">購物車</NavLink>
        </nav>

        <NavLink className="cart-link" to="/cart" aria-label={`購物車，共 ${totalQuantity} 件商品`}>
          購物車
          <span>{totalQuantity}</span>
        </NavLink>
      </header>

      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
