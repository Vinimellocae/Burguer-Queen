import CartCard from "@/components/features/CartCard/CartCard";
import { useCart } from "@/contexts/CartContext";
import { X } from "lucide-react";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, removeItem, updateAmount } = useCart();
  const emptyCart = items.length === 0;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[var(--surface-1)] border-l border-[var(--border-subtle)] z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-subtle)]">
          <h2 className="text-[var(--text-primary)] font-semibold">Carrinho</h2>
          <X
            size={18}
            onClick={onClose}
            className="text-[var(--text-secondary)] cursor-pointer"
          />
        </div>

        <div className="flex flex-col p-4 gap-2">
          {emptyCart && (
            <p className="text-[var(--text-secondary)] text-sm">
              Seu carrinho está vazio...
            </p>
          )}

          {items.map((item) => (
            <CartCard
              item={item}
              onRemove={() => removeItem(item.id)}
              onAmountChange={(amount) => updateAmount(item.id, amount)}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
