// CartSidebar.tsx
import CartCard from "@/components/features/Cart/CartCard/CartCard";
import { useCart } from "@/contexts/CartContext";
import { X } from "lucide-react";
import styles from "./CartSidebar.module.css";
import { useOrders } from "@/contexts/OrdersContext";
import { toast } from "sonner";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, removeItem, updateAmount, clearCart, updateObservation } =
    useCart();
  const { createOrdersFromCart } = useOrders();
  const emptyCart = items.length === 0;

  const total = items.reduce((sum, item) => sum + item.price * item.amount, 0);

  const handleOrder = () => {
    if (emptyCart) return;

    createOrdersFromCart(items);
    clearCart();
    toast.success("Pedido feito com sucesso!");

    onClose();
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : styles.overlayClosed}`}
        onClick={onClose}
      />

      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : styles.sidebarClosed}`}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Carrinho</h2>
          <X size={18} onClick={onClose} className={styles.closeIcon} />
        </div>

        <div className={styles.list}>
          {emptyCart && (
            <p className={styles.empty}>Seu carrinho está vazio...</p>
          )}

          {items.map((item) => (
            <CartCard
              key={item.id}
              item={item}
              onRemove={() => {
                removeItem(item.id);
                toast.success(`${item.title} removido do carrinho!`);
              }}
              onAmountChange={(amount) => updateAmount(item.id, amount)}
              onObservationChange={(observation) =>
                updateObservation(item.id, observation)
              }
            />
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalValue}>{formatPrice(total)}</span>
          </div>

          <button
            type="button"
            className={styles.orderButton}
            onClick={handleOrder}
            disabled={emptyCart}
          >
            Fazer pedido
          </button>
        </div>
      </aside>
    </>
  );
};

export default CartSidebar;
