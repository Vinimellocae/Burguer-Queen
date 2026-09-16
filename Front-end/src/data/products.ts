import type { Product } from "@/types/ProductType";

export const products: Product[] = [
  // ===== Hambúrgueres =====
  {
    id: "burguer-1",
    title: "X-Burguer",
    description:
      "Mega lanche com duas carnes, pão com gergelim, alface selecionado, queijo e molho irresistível.",
    price: 44.9,
    imageUrl:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    category: "hamburguer",
  },
  {
    id: "burguer-2",
    title: "X-Bacon",
    description:
      "Lanche com queijo, carne e bacon, uma das opções mais apetitosas do Burguer Queen!",
    price: 44.9,
    imageUrl:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80",
    category: "hamburguer",
  },
  {
    id: "burguer-3",
    title: "Big-Gordinho",
    description:
      "A especialidade da casa, hambúrguer para grandes fomes num x-tudo!",
    price: 44.9,
    imageUrl:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=500&q=80",
    category: "hamburguer",
  },
  {
    id: "burguer-4",
    title: "X-Salada",
    description:
      "Clássico com carne suculenta, queijo, alface, tomate e maionese da casa.",
    price: 38.9,
    imageUrl:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80",
    category: "hamburguer",
  },

  // ===== Bebidas =====
  {
    id: "bebida-1",
    title: "Coca-Cola Lata",
    description: "Refrigerante gelado 350ml, o combo perfeito pro seu lanche.",
    price: 12.5,
    imageUrl:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
    category: "bebida",
  },
  {
    id: "bebida-2",
    title: "Suco de Laranja",
    description: "Suco natural 500ml, feito na hora, sem adição de açúcar.",
    price: 17.9,
    imageUrl:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=500&q=80",
    category: "bebida",
  },
  {
    id: "bebida-3",
    title: "Milk-Shake de Chocolate",
    description: "Cremoso, com calda de chocolate belga e chantilly.",
    price: 21.9,
    imageUrl:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=500&q=80",
    category: "bebida",
  },

  // ===== Aperitivos =====
  {
    id: "aperitivo-1",
    title: "Batata Frita",
    description: "Porção crocante média, temperada com sal e ervas finas.",
    price: 18.9,
    imageUrl:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=500&q=80",
    category: "aperitivo",
  },
  {
    id: "aperitivo-2",
    title: "Onion Rings",
    description:
      "Anéis de cebola empanados e crocantes, acompanha molho barbecue.",
    price: 21.9,
    imageUrl:
      "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=500&q=80",
    category: "aperitivo",
  },
  {
    id: "aperitivo-3",
    title: "Nuggets de Frango",
    description: "Porção com 10 unidades, acompanha molho a sua escolha.",
    price: 19.9,
    imageUrl:
      "https://images.unsplash.com/photo-1562967914-01efa7e87832?auto=format&fit=crop&w=500&q=80",
    category: "aperitivo",
  },
];
