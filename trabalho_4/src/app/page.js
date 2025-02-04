import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";

export default function Home() {
  return(
    <div className={styles.container_page}>    
      <h1 className={styles.container_page_titulo}>Bem vindo a CliniSys </h1>
      <p className={styles.container_page_texto}>Aqui, sua saúde vem em primeiro lugar. Contamos com uma equipe experiente e preparada para oferecer um atendimento acolhedor e eficiente. Com a tecnologia ao nosso lado, facilitamos o agendamento de consultas e a organização de pacientes e médicos, proporcionando mais praticidade para você. Cuidar do seu bem-estar nunca foi tão simples!</p>
    </div>

    
  );
}
