import Image from "next/image";
import Header from "../components/header";
import styles from '@/styles/home.module.css'
import imagem from '../../public/images/Tarefas.png'
export default function Home() {
  return (
    <div  className={styles.container}>
     <Header/>
      <main className={styles.main}>
        <Image 
        className={styles.image}
        alt="Logo" src={imagem}
        priority
        />
        
      </main>
    </div>
  );
}
