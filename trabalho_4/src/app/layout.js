
import "./globals.css";
import Header from "@/app/componentes/Header";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Clinica medica",
  description: "responsivo",
  charset: 'UTF-8',
  author: 'Ana Cordeiro',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        <Link rel="icon" type="image/png" href="/imagens/CliniSys_transparent-.ico"></Link>
        {children}
      </body>
    </html>
  );
}