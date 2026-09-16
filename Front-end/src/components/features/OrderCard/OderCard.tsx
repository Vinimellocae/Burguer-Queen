// OrderCard.tsx
import styles from "./OrderCard.module.css";

export type OrderStatus = "pendente" | "em-preparo" | "pronto";

// OrderCard.tsx — atualizando a interface
export interface Order {
  id: string;
  itemName: string;
  description?: string;
  time: string;
  status: OrderStatus;
  table: number;
}

interface OrderCardProps {
  order: Order;
}

const statusLabels: Record<OrderStatus, string> = {
  pendente: "Pendente",
  "em-preparo": "Em preparo",
  pronto: "Pronto",
};

const statusClasses: Record<OrderStatus, string> = {
  pendente: styles.statusPendente,
  "em-preparo": styles.statusEmPreparo,
  pronto: styles.statusPronto,
};

const OrderCard = ({ order }: OrderCardProps) => {
  const { itemName, description, time, status } = order;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{itemName}</h3>
        <span className={`${styles.status} ${statusClasses[status]}`}>
          {statusLabels[status]}
        </span>
      </div>

      {description && <p className={styles.description}>{description}</p>}

      <div className={styles.footer}>
        <span className={styles.table}>Mesa {order.table}</span>
        <p className={styles.time}>{order.time}</p>
      </div>
    </article>
  );
};

export default OrderCard;
