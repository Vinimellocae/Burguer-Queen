import ProductCard from "@/components/features/ProductCard/ProductCard";
import Filter from "@/components/ui/Filter/Filter";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import type { Product } from "@/types/ProductType";
import { useMemo, useState } from "react";

type FilterType = "Hamburguer" | "Bebida" | "Aperitivo";

const categoryMap: Record<FilterType, Product["category"]> = {
  Hamburguer: "hamburguer",
  Bebida: "bebida",
  Aperitivo: "aperitivo",
};

const Menu = () => {
  const [filter, setFilter] = useState<FilterType>("Hamburguer");
  const { addItem } = useCart();

  const filteredProducts = useMemo(
    () => products.filter((p) => p.category === categoryMap[filter]),
    [filter],
  );

  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 bg-[var(--surface-page)]/90 backdrop-blur-sm border-b border-[var(--border-subtle)] py-4">
        <div className="flex justify-center gap-2">
          <Filter
            isActive={filter === "Hamburguer"}
            title="Hambúrgueres"
            onAction={() => setFilter("Hamburguer")}
          />
          <Filter
            isActive={filter === "Bebida"}
            onAction={() => setFilter("Bebida")}
            title="Bebidas"
          />
          <Filter
            isActive={filter === "Aperitivo"}
            onAction={() => setFilter("Aperitivo")}
            title="Aperitivos"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-md pb-4 font-semibold items-center">
          Nosso cardápio!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={() => addItem(p)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
