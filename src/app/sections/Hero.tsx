export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        {/* мини-плашка */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(199,208,219,0.75)] bg-white/70 px-4 py-2 text-sm text-[rgba(107,119,133,0.95)] shadow-sm backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-[#00A99D]" />
          Франшиза в сфере оздоровления
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div className="glass p-7 sm:p-9">
            <h1 className="font-serif text-[42px] leading-[1.02] tracking-[-0.02em] text-[#1A2B3C] sm:text-[56px]">
              Профессия со смыслом.
              <br />
              Бизнес с{" "}
              <span className="bg-[linear-gradient(90deg,#0D3B66,#00A99D,#3FB4E6)] bg-clip-text text-transparent">
                будущим
              </span>
              .
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B7785]">
              Велнейро — экосистема интегративного оздоровления, где многолетняя
              практика, авторские разработки и инструменты упакованы в ясную
              систему методов, обучение и сопровождение партнёра.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#partnership"
                className="btn-sheen inline-flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(13,59,102,0.22)] transition hover:translate-y-[-1px]"
                style={{
                  background:
                    "linear-gradient(135deg, #0D3B66 0%, #1F5E9C 45%, #00A99D 100%)",
                }}
              >
                Заявка на презентацию
              </a>

              <a
                href="#system"
                className="inline-flex items-center justify-center rounded-2xl border border-[rgba(199,208,219,0.90)] bg-white/70 px-7 py-4 text-base font-semibold text-[#1A2B3C] shadow-sm backdrop-blur transition hover:translate-y-[-1px] hover:bg-white"
              >
                Узнать о системе
              </a>
            </div>

            <div className="mt-6 text-sm text-[rgba(107,119,133,0.9)]">
              Без обязательств • по делу • взрослый тон
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА — карточки */}
          <div className="grid gap-4">
            <div className="glass p-5">
              <div className="text-sm font-semibold text-[#00A99D]">
                01 — ясная логика
              </div>
              <div className="mt-2 text-lg font-semibold text-[#1A2B3C]">
                Причина → Решение
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Понимаете, что делать и почему — с опорой на систему, без
                угадываний.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-sm font-semibold text-[#00A99D]">
                02 — методы
              </div>
              <div className="mt-2 text-lg font-semibold text-[#1A2B3C]">
                Отобрано и проверено
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                В системе остаётся только то, что реально работает в практике.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-sm font-semibold text-[#00A99D]">
                03 — алгоритмы
              </div>
              <div className="mt-2 text-lg font-semibold text-[#1A2B3C]">
                Понятный ход приёма
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Структура работы помогает сохранять уверенность и качество
                результата.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-sm font-semibold text-[#00A99D]">
                04 — эксклюзив
              </div>
              <div className="mt-2 text-lg font-semibold text-[#1A2B3C]">
                Разработки и инструменты
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Авторские технические решения усиливают эффективность и
                конкурентное преимущество.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
