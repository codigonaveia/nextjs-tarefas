
"use client"
import styels from "@/styles/home.module.css";
import Link from "next/link";
import{useSession, signIn, signOut} from 'next-auth/react'

const Header = () => {

const {data: session, status} = useSession();


  return (
    <header className={styels.header}>
      <section className={styels.content}>
        <nav className={styels.nav}>
          <h5>Sistemas de gestão de projetos</h5>
          <Link href="/dashboard" className={styels.linkPanel}>Painel</Link>
        </nav>
        {status==="loading"?(
          <></>
        ):session?(
          <button className={styels.loginButton} onClick={()=> signOut()}>
            Olá, {session?.user?.name}
          </button>
        ):(
          <button className={styels.loginButton} onClick={()=> signIn("google")}>
            Login
          </button>
        )}
        
      </section>
    </header>
  );
};
export default Header; 
