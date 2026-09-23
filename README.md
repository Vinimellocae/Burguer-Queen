# 🍔 Burguer Queen

Cardápio digital com autoatendimento, painel de cozinha e acompanhamento de pedidos, desenvolvido como projeto acadêmico do 2º semestre.

Projeto fictício de uma hamburgueria que enfrenta problemas recorrentes de atendimento presencial — fila de espera, erros de anotação, falta de visibilidade na cozinha e ausência de canal de feedback — resolvidos através de um sistema web de autoatendimento.

## 📋 Sobre o projeto

Este projeto foi desenvolvido como trabalho acadêmico, com o objetivo de identificar problemas reais enfrentados por um estabelecimento comercial e propor uma solução de software que os sanasse. Foi definida uma hamburgueria fictícia, a **Burguer Queen**, e mapeados os seguintes problemas e soluções:

| Problema                                    | Solução implementada                                                                                                                                   |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Fila de espera e demora no atendimento      | Cardápio digital com autoatendimento, onde o cliente escolhe os itens e envia o pedido direto para a cozinha.                                          |
| Erros e rasuras nas anotações               | Campo de observação por item no carrinho, permitindo personalizações por escrito de forma clara, sem depender de anotação manual por um atendente.     |
| Falta de visibilidade da cozinha            | Painel de pedidos em formato Kanban, com colunas organizadas por etapa (Pendente, Em preparo, Pronto).                                                 |
| Ansiedade do cliente com o status do pedido | O mesmo painel Kanban da cozinha é acessível ao cliente, que acompanha a progressão do seu pedido pelas colunas sem precisar perguntar a um atendente. |
| Falta de canal de feedback                  | Página de avaliações, onde o cliente registra uma nota de 1 a 5 estrelas e um comentário opcional sobre sua experiência.                               |

## ✨ Funcionalidades

- **Cardápio** — listagem de produtos filtrável por categoria (Hambúrgueres, Bebidas, Aperitivos)
- **Carrinho** — adição de itens, controle de quantidade, observações por item e cálculo automático do total
- **Pedidos (Kanban)** — visualização dos pedidos organizados por status, com navegação manual entre etapas
- **Avaliações** — formulário de avaliação com sistema de estrelas e histórico de avaliações enviadas
- **Notificações** — feedback visual (toast) para ações como adicionar item, remover item e confirmar pedido
- **Layout responsivo** — adaptado para desktop e mobile, incluindo menu de navegação retrátil

## 🛠️ Tecnologias utilizadas

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [React Router](https://reactrouter.com/) — navegação entre telas
- [Tailwind CSS](https://tailwindcss.com/) + CSS Modules — estilização
- [Context API](https://react.dev/reference/react/useContext) — gerenciamento de estado global (carrinho, pedidos, avaliações)
- [Sonner](https://sonner.emilkowal.ski/) — notificações toast
- [Lucide React](https://lucide.dev/) — ícones

## 🚀 Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) instalado.

```bash
# Clonar o repositório
git clone <url-do-repositorio>
cd <nome-da-pasta>

# Instalar dependências
npm install

# Rodar em ambiente de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`.

## 📁 Estrutura do projeto

```
src/
├── assets/              # Imagens e logo
├── components/
│   ├── features/        # Componentes de domínio (CartCard, ProductCard, OrderCard...)
│   └── ui/               # Componentes de interface reutilizáveis (Filter, StarRating...)
├── contexts/             # Contextos globais (Cart, Orders, Reviews)
├── pages/                # Telas da aplicação (Menu, Orders, Reviews, Error404...)
├── routes/               # Definição de rotas e paths
└── types/                # Tipagens compartilhadas
```

## ⚠️ Escopo e observações

Por se tratar de um projeto acadêmico com fins de demonstração visual, algumas decisões de escopo foram tomadas conscientemente:

- **Sem backend/persistência** — todos os dados (produtos, pedidos, avaliações) são armazenados em memória via Context API. Ao recarregar a página, o estado retorna ao inicial.
- **Sem autenticação real** — o nome de usuário exibido no cabeçalho e nas avaliações é fixo (hardcoded), já que o fluxo de login não faz parte do escopo proposto.
- **Painel único para cliente e cozinha** — o Kanban de pedidos não possui diferenciação de permissões; tanto o cliente quanto a cozinha visualizam e podem alterar o status dos pedidos na mesma tela.

## 👥 Autores

- Vinícius de Mello
- Gustavo de Barros
- Wilguimpson Pierre
- Gisella Savoia
- Bruno Rinolfi

---

Projeto acadêmico desenvolvido para a disciplina de PROJETO DE EXTENSAO EM DESENVOLVIMENTO DE SISTEMAS — UNINOVE, 2026.
