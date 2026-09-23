import { useState } from "react";
import { CartSidebar, Header, Watermark } from "..";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const AppLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col flex-1 min-h-0 min-w-0">
        <Header onCartClick={() => setIsCartOpen(true)} />

        <main className="flex-1 p-0 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Watermark />
      <Toaster
        position="bottom-left"
        theme="dark"
        toastOptions={{
          style: {
            background: "var(--surface-2)",
            border: "1px solid var(--border-subtle)",
            color: "var(--text-primary)",
          },
        }}
      />
    </div>
  );
};

export default AppLayout;
