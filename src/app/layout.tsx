// Modules
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// CSS
import './globals.css'

// Subsets
const inter = Inter({ subsets: ['latin'] })

// Metadata
export const metadata: Metadata = {
  title: "Proyecto Programadores Venezuela",
  description: "Proyecto open source para alentar y medir las capacidades de los programadores en venezuela",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
