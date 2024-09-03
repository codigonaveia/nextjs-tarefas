import styels from "@/styles/home.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styels.header}>
      <section className={styels.content}>
        <nav className={styels.nav}>
          <h5>Sistemas de gestão de projetos</h5>
          <Link href="/dashboard" className={styels.linkPanel}>Painel</Link>
        </nav>
        <button className={styels.loginButton}>Login</button>
      </section>
    </header>
  );
};
export default Header; 
