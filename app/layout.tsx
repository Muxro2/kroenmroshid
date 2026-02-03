import { Brawler } from 'next/font/google'
import type { Metadata } from "next";
import './globals.css'

const brawler = Brawler({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: "Kroen",
  description: "The only place to get your Kroen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={brawler.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
