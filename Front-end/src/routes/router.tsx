import { createBrowserRouter } from "react-router";
import Menu from "../pages/Menu";
import AppLayout from "../components/layout/AppLayout/AppLayout";
import paths from "./paths";
import Orders from "@/pages/Orders";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: paths.menu,
        element: <Menu />,
      },
      {
        path: paths.orders,
        element: <Orders />,
      },
    ],
  },
]);
