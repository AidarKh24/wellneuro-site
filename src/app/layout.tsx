import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Велнейро — Центр здоровья",
  description: "Франшиза центра осознанного оздоровления.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
