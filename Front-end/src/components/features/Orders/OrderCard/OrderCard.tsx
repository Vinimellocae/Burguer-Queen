// OrderCard.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useOrders } from "@/contexts/OrdersContext";
import styles from "./OrderCard.module.css";

export type OrderStatus = "pendente" | "em-preparo" | "pronto";

export interface Order {
  id: string;
  orderNumber: number;
  itemName: string;
  description?: string;
  time: string;
  status: OrderStatus;
}

const STATUS_FLOW: OrderStatus[] = ["pendente", "em-preparo", "pronto"];

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

const OrderCard = ({ order }: { order: Order }) => {
  const { updateStatus } = useOrders();
  const { id, itemName, description, time, status, orderNumber } = order;

  const currentIndex = STATUS_FLOW.indexOf(status);
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < STATUS_FLOW.length - 1;

  const goBack = () =>
    canGoBack && updateStatus(id, STATUS_FLOW[currentIndex - 1]);
  const goForward = () =>
    canGoForward && updateStatus(id, STATUS_FLOW[currentIndex + 1]);

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
        <span className={styles.table}>Pedido #{orderNumber}</span>
        <p className={styles.time}>{time}</p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.actionButton}
            onClick={goBack}
            disabled={!canGoBack}
            aria-label="Voltar etapa"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            className={styles.actionButton}
            onClick={goForward}
            disabled={!canGoForward}
            aria-label="Avançar etapa"
          >
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default OrderCard;
