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
        <p>Socorro</p>
    </div>
  );
}
