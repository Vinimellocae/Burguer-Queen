// ProductCard.tsx
import { ShoppingBagIcon } from "lucide-react";
import styles from "./ProductCard.module.css";
import type { Product } from "@/types/Product";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { title, description, price, imageUrl } = product;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.footer}>
          <p className={styles.price}>{formatPrice(price)}</p>

          <button
            type="button"
            className={styles.addButton}
            onClick={() => onAddToCart?.(product)}
            aria-label={`Adicionar ${title} ao carrinho`}
          >
            <ShoppingBagIcon size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
