import type { CartItem, Product } from "@/types/ProductType";
import { createContext, useContext, useState, type ReactNode } from "react";

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateAmount: (productId: string, amount: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item,
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  const updateAmount = (productId: string, amount: number) => {
    setItems((prev) =>
      amount <= 0
        ? prev.filter((item) => item.id !== productId)
        : prev.map((item) =>
            item.id === productId ? { ...item, amount } : item,
          ),
    );
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
};
