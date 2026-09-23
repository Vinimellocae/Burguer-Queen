// Header.tsx
import { useState } from "react";
import { Link, NavLink } from "react-router";
import styles from "./Header.module.css";
import {
  LogOut,
  Menu,
  NotebookPen,
  ShoppingCartIcon,
  Star,
  UtensilsCrossed,
  X,
} from "lucide-react";
import paths from "@/routes/paths";
import { logo } from "@/assets";

interface HeaderProps {
  onCartClick: () => void;
  onLogout?: () => void;
}

const Header = ({ onCartClick, onLogout }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${styles.link} ${styles.linkActive}` : styles.link;

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to={paths.menu} className={styles.brand} onClick={closeMenu}>
          <img src={logo} className={styles.logo} alt="Burguer Queen logo" />
          <span className={styles.brandName}>
            Burguer <span>Queen</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <NavLink to={paths.menu} className={navLinkClass} onClick={closeMenu}>
            <UtensilsCrossed size={18} />
            Cardápio
          </NavLink>
          <NavLink
            to={paths.orders}
            className={navLinkClass}
            onClick={closeMenu}
          >
            <NotebookPen size={18} />
            Pedidos
          </NavLink>
          <NavLink
            to={paths.reviews}
            className={navLinkClass}
            onClick={closeMenu}
          >
            <Star size={18} />
            Avaliações
          </NavLink>
          <button
            type="button"
            className={styles.link}
            onClick={() => {
              onCartClick();
              closeMenu();
            }}
          >
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
