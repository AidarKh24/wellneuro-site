import "./globals.css";

export const metadata = {
  title: "Велнейро — Центр здоровья",
  description:
    "Велнейро — франшиза центра оздоровления: система методов, обучение, инструменты и сопровождение партнёра.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-[#1A2B3C]">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#C7D0DB]/50">
          <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
            {/* Logo (пока текстовый вариант, позже подключим картинку) */}
            <a href="#top" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#0D3B66] text-white flex items-center justify-center font-semibold">
                WN
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-tight">ВЕЛНЕЙРО</div>
                <div className="text-xs text-[#6B7785]">центр здоровья</div>
              </div>
            </a>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-[#1A2B3C]">
              <a href="#system" className="hover:text-[#1F5E9C] transition">
                Система
              </a>
              <a href="#exclusive" className="hover:text-[#1F5E9C] transition">
                Эксклюзив
              </a>
              <a href="#faq" className="hover:text-[#1F5E9C] transition">
                FAQ
              </a>
            </nav>

            {/* CTA */}
            <a
              href="#partnership"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-[#00A99D] text-white hover:opacity-90 transition"
            >
              Оставить заявку
            </a>
          </div>
        </header>

        {/* Page */}
        <main id="top">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[#C7D0DB]/50">
          <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-[#6B7785] flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} Велнейро</div>
            <div className="flex gap-4">
              <a className="hover:text-[#1F5E9C] transition" href="#partnership">
                Контакты
              </a>
              <a className="hover:text-[#1F5E9C] transition" href="#faq">
                Вопросы
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
