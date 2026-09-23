import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.tsx";
import { CartProvider } from "./contexts/CartContext.tsx";
import { OrdersProvider } from "./contexts/OrdersContext.tsx";
import { ReviewsProvider } from "./contexts/ReviewsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <OrdersProvider>
        <ReviewsProvider>
          <RouterProvider router={router} />
        </ReviewsProvider>
      </OrdersProvider>
    </CartProvider>
  </StrictMode>,
);
