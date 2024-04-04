import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DisplayShop from "./components/Shop";
import ShoppingCart from "./components/Cart";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import { CartProvider } from "./components/CartContext";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: '/shop',
      element: <DisplayShop />,
    },
    {
      path: '/cart',
      element: <ShoppingCart />,
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default Router;