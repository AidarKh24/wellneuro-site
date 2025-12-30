import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://wellneuro.ru"),
  title: "Велнейро — Центр здоровья и благополучия",
  description:
    "Интегративный подход к здоровью и благополучию: психоэмоциональный, структурно-физический и биохимический уровни. Запись онлайн."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
