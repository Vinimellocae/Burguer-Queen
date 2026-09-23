// contexts/OrdersContext.tsx
import { orders as initialOrders } from "@/data/orders";
import type { Order, OrderStatus } from "@/types/Order";
import type { CartItem } from "@/types/Product";
import { createContext, useContext, useState, type ReactNode } from "react";

interface OrdersContextType {
  orders: Order[];
  createOrdersFromCart: (items: CartItem[]) => void;
  updateStatus: (id: string, status: OrderStatus) => void;
}

const OrdersContext = createContext<OrdersContextType | undefined>(undefined);

export const OrdersProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const updateStatus = (id: string, status: OrderStatus) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order)),
    );
  };

  const createOrdersFromCart = (items: CartItem[]) => {
    const now = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    // próximo número = maior número existente + 1
    const nextNumber =
      orders.reduce((max, o) => Math.max(max, o.orderNumber), 0) + 1;

    const newOrders: Order[] = items.flatMap((item) =>
      Array.from({ length: item.amount }, (_, i) => ({
        id: `${item.id}-${Date.now()}-${i}`,
        orderNumber: nextNumber,
        itemName: item.title,
        description: item.observation,
        time: now,
        status: "pendente" as const,
      })),
    );

    setOrders((prev) => [...newOrders, ...prev]);
  };

  return (
    <OrdersContext.Provider
      value={{ orders, createOrdersFromCart, updateStatus }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context)
    throw new Error("useOrders deve ser usado dentro de OrdersProvider");
  return context;
};
