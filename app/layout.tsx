import { Barlow_Condensed } from 'next/font/google'
import type { Metadata } from "next";
import './globals.css'

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
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
    <html lang="en" className={barlow.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
