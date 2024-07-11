import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Proyecto Programadores Venezuela",
  description:
    "Proyecto open source para alentar y medir las capacidades de los programadores en venezuela",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  );
}
