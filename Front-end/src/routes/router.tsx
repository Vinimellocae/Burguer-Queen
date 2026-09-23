import { createBrowserRouter } from "react-router";
import Menu from "../pages/Menu";
import paths from "./paths";
import Orders from "@/pages/Orders";
import Reviews from "@/pages/Reviews";
import { AppLayout } from "@/components/layout";
import Error404 from "@/pages/Error404";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: paths.menu,
        element: <Menu />,
      },
      {
        path: paths.orders,
        element: <Orders />,
      },
      {
        path: paths.reviews,
        element: <Reviews />,
      },
    ],
  },
]);
