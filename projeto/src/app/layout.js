// import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Minha primeira aplicação",
  description: "Aplicação de front end 2",
  charset: 'UTF-8',
  author: 'Ana Cordeiro',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
