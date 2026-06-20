import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import ProductPage from "../../pages/ProductPage";
import ProductDetailPage from "../../pages/ProductDetailPage/index";


export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
]);
