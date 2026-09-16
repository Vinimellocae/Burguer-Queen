import KanbanColumn from "@/components/features/Kanban/KanbanColumn";
import type { OrderStatus } from "@/components/features/OrderCard/OderCard";
import { orders } from "@/data/orders";

const columns: { title: string; status: OrderStatus }[] = [
  { title: "Pendente", status: "pendente" },
  { title: "Em preparo", status: "em-preparo" },
  { title: "Pronto", status: "pronto" },
];

const Orders = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <p className="text-md pb-4 font-semibold items-center">
        Veja os status dos pedidos! (Para admin)
      </p>
      <div className="flex flex-col md:flex-row gap-4 md:items-start">
        {columns.map(({ title, status }) => (
          <KanbanColumn
            key={status}
            title={title}
            status={status}
            orders={orders.filter((o) => o.status === status)}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
