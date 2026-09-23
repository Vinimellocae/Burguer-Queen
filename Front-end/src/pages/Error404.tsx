import { Link } from "react-router";
import paths from "@/routes/paths";
import { logo } from "@/assets";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-5 text-center">
      <img src={logo} alt="Burguer Queen logo" className="w-50 h-50 mb-2" />

      <p className="text-3xl font-bold text-[var(--accent-soft)]">404</p>
      <h1 className="text-xl font-semibold text-[var(--text-primary)]">
        Página não encontrada
      </h1>
      <p className="text-sm text-[var(--text-secondary)] max-w-[360px]">
        O link que você acessou não existe ou foi movido. Volte para o cardápio
        e continue de onde parou.
      </p>

      <Link
        to={paths.menu}
        className="mt-3 px-4 py-2 rounded-[var(--radius-md)] border-2 border-[var(--accent)] text-[var(--accent-soft)] text-sm font-medium no-underline transition-colors hover:bg-[var(--accent)] hover:text-[var(--accent-contrast)]"
      >
        Voltar ao cardápio
      </Link>
    </div>
  );
};

export default Error404;
