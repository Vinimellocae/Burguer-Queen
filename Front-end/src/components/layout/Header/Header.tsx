// Header.tsx
import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";
import {
  LogOut,
  NotebookPen,
  ShoppingCartIcon,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import paths from "@/routes/paths";
import { logo } from "@/assets";

interface HeaderProps {
  onCartClick: () => void;
  onLogout?: () => void;
}

const Header = ({ onCartClick, onLogout }: HeaderProps) => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={paths.menu} className={styles.brand}>
          <img src={logo} className={styles.logo} alt="Burguer Queen logo" />
          <span className={styles.brandName}>
            Burguer <span>Queen</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <NavLink to={paths.menu} className={navLinkClass}>
            <UtensilsCrossed size={18} />
            Cardápio
          </NavLink>
          <NavLink to={paths.orders} className={navLinkClass}>
            <NotebookPen size={18} />
            Pedidos
          </NavLink>
          <NavLink to={paths.reviews} className={navLinkClass}>
            <Star size={18} />
            Avaliações
          </NavLink>
          <button type="button" className={styles.link} onClick={onCartClick}>
            <ShoppingCartIcon size={18} />
            Carrinho
          </button>

          <div className={styles.user}>
            ADM Burguer Queen
            <LogOut size={22} className={styles.icon} onClick={onLogout} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
