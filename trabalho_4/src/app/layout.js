import "./globals.css";
import Header from "@/app/componentes/Header";


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
        {children}
      </body>
    </html>
  );
}