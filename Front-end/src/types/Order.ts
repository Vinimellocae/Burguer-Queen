export type OrderStatus = "pendente" | "em-preparo" | "pronto";

export interface Order {
  id: string;
  orderNumber: number;
  itemName: string;
  description?: string;
  time: string;
  status: OrderStatus;
}
