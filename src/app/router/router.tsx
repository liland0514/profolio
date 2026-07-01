import { Navigate, createBrowserRouter } from "react-router-dom";
import AppLayout from "../../components/layout/AppLayout";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";
import ProductPage from "../../pages/ProductPage";
import ProductDetailPage from "../../pages/ProductDetailPage/index";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
    ],
  },
]);
