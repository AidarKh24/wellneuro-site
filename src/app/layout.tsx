import "./globals.css";

export const metadata = {
  title: "Велнейро — франшиза центра здоровья",
  description:
    "Велнейро — система интегративного оздоровления. Франшиза: обучение, инструменты, сопровождение.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-[#1A2B3C] antialiased">
        {/* Мягкий фон-перелив на весь сайт */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[#3FB4E6]/20 blur-3xl" />
          <div className="absolute top-10 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#00A99D]/18 blur-3xl" />
          <div className="absolute bottom-[-220px] left-[18%] h-[620px] w-[620px] rounded-full bg-[#E9E3F6]/55 blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}
