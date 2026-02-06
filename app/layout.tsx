import { Vollkorn, Zalando_Sans_Expanded } from 'next/font/google'
import type { Metadata } from "next";
import './globals.css'

const vollkorn = Vollkorn({
  weight: ['400', '600', '800'],
  variable: '--font-vollkorn',
})

const zalando = Zalando_Sans_Expanded({
  weight: ['200', '400', '500', '600', '800'],
  variable: '--font-zalando',
})

export const metadata: Metadata = {
  title: "Kroen",
  description: "Kroen by MR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`${vollkorn.variable}`}>
      <body className={zalando.className}>
        {children}
      </body>
    </html>
  );
}
