import type { CartItem } from "@/types/Product";
import styles from "./CartCard.module.css";
import { ChevronLeft, ChevronRight, Trash } from "lucide-react";

interface CartCardProps {
  item: CartItem;
  onRemove: () => void;
  onAmountChange: (amount: number) => void;
  onObservationChange: (observation: string) => void;
}

const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

const CartCard = ({
  item,
  onRemove,
  onAmountChange,
  onObservationChange,
}: CartCardProps) => {
  const { title, price, imageUrl, amount, observation } = item;

  return (
    <article className={styles.card}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img
            src={imageUrl}
            alt={title}
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.content}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <h3 className={styles.title}>{title}</h3>

              <div className="flex gap-2 items-center">
                <ChevronLeft
                  size={20}
                  onClick={() => onAmountChange(amount - 1)}
                  className="cursor-pointer"
                />
                <p className="text-md">{amount}</p>
                <ChevronRight
                  size={20}
                  onClick={() => onAmountChange(amount + 1)}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <textarea
              className={styles.observationInput}
              placeholder="Adicione uma observação opcional"
              rows={2}
              value={observation ?? ""}
              onChange={(e) => onObservationChange(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <p className={styles.price}>{formatPrice(price * amount)}</p>
        <button
          type="button"
          className={styles.removeButton}
          onClick={onRemove}
          aria-label={`Remover ${title} do carrinho`}
        >
          <Trash size={18} />
        </button>
      </div>
    </article>
  );
};

export default CartCard;
