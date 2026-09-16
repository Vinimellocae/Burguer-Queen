import { Outlet } from "react-router";
import Header from "../Header/Header";
import { useState } from "react";
import CartSidebar from "../Sidebar/CartSidebar";
import Watermark from "../Watermark/Watermark";

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
    </div>
  );
};

export default AppLayout;
