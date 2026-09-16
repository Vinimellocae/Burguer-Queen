export type ProductCategory = "hamburguer" | "bebida" | "aperitivo";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: ProductCategory;
}

export interface CartItem extends Product {
  amount: number;
  observation?: string; // já que você tem o textarea, pode centralizar aqui também
}
