import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import Homepage from "./pages/Homepage";
import DisplayShop from "./pages/Shop";
import ShoppingCart from "./pages/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
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

  return <RouterProvider router={router} />;
}

export default Router;