import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import DisplayShop from "./pages/Shop";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Homepage />,
    },
    {
      path: '/shop',
      element: <DisplayShop />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;