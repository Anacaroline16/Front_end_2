// import Image from "next/image";
import styles from "./page.module.css";
import Image from "next/image";
// INDEX
export default function Home() {
  const nome = 'ANA'
  return (
    <div>
        <h1>Olá word</h1>
        <p>parágrafo da MINHA aplicação</p>
        <p>Autor {nome}</p>
        <Image  className= {styles.imagem} src='/images/depositphotos_190376900-stock-photo-overworked-young-woman-sitting-workplace.jpg' alt="Imagem de uma pessoa cansada na sexta-feira
        " width={600} height={400}/>
        <p>Socorro</p>
    </div>
  );
}
