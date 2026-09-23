// KanbanColumn.tsx
import type { Order, OrderStatus } from "@/types/Order";
import styles from "./KanbanColumn.module.css";
import { OrderCard } from "..";

interface KanbanColumnProps {
  title: string;
  status: OrderStatus;
  orders: Order[];
}

const dotClasses: Record<OrderStatus, string> = {
  pendente: styles.dotPendente,
  "em-preparo": styles.dotEmPreparo,
  pronto: styles.dotPronto,
};

const KanbanColumn = ({ title, status, orders }: KanbanColumnProps) => {
  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={`${styles.dot} ${dotClasses[status]}`} />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <span className={styles.count}>{orders.length}</span>
      </div>

      <div className={styles.list}>
        {orders.length === 0 ? (
          <p className={styles.empty}>Nenhum pedido</p>
        ) : (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
