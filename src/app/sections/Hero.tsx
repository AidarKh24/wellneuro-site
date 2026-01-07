export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      {/* мягкий локальный градиент сверху, чтобы “дороже” ощущалось */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(800px_520px_at_50%_20%,rgba(63,180,230,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_520px_at_18%_78%,rgba(0,169,157,0.14),transparent_62%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        {/* верхняя мини-плашка */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(199,208,219,0.7)] bg-white/70 px-4 py-2 text-sm text-[var(--wn-muted)] shadow-sm backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--wn-teal)]" />
          Франшиза в сфере оздоровления
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          {/* ЛЕВАЯ КОЛОНКА */}
          <div>
            <h1 className="font-serif text-[42px] leading-[1.02] tracking-[-0.02em] text-[var(--wn-text)] sm:text-[56px]">
              Профессия со смыслом.
              <br />
              Бизнес с <span className="text-gradient">будущим</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--wn-muted)]">
              Велнейро — экосистема интегративного оздоровления, где многолетняя практика,
              авторские разработки и инструменты упакованы в ясную систему методов,
              обучение и сопровождение партнёра.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#partnership"
                className="btn-sheen inline-flex items-center justify-center rounded-2xl bg-[var(--wn-primary)] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(13,59,102,0.22)] transition hover:translate-y-[-1px] hover:bg-[var(--wn-primary-hover)]"
              >
                Заявка на презентацию
              </a>

              <a
                href="#system"
                className="inline-flex items-center justify-center rounded-2xl border border-[rgba(199,208,219,0.85)] bg-white/70 px-7 py-4 text-base font-semibold text-[var(--wn-text)] shadow-sm backdrop-blur transition hover:translate-y-[-1px] hover:bg-white"
              >
                Узнать о системе
              </a>
            </div>

            <div className="mt-6 text-sm text-[rgba(107,119,133,0.9)]">
              Без обязательств • по делу • взрослый тон
            </div>

            {/* “легкий” баннер без лилового — серо-голубой */}
            <div className="mt-8 glass px-6 py-5">
              <div className="text-base font-semibold text-[var(--wn-text)]">
                Система постоянного развития
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--wn-muted)]">
                Появляются новые подходы, методики и инструменты. Партнёр растёт вместе
                с экосистемой и остаётся всегда актуален.
              </p>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА — карточки, без чёрных блоков */}
          <div className="grid gap-4">
            <div className="glass p-5">
              <div className="text-sm font-semibold text-[var(--wn-teal)]">
                01 — ясная логика
              </div>
              <div className="mt-2 text-lg font-semibold text-[var(--wn-text)]">
                Причина → Решение
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--wn-muted)]">
                Понимаете, что делать и почему — с опорой на систему, без угадываний.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-sm font-semibold text-[var(--wn-teal)]">
                02 — методы
              </div>
              <div className="mt-2 text-lg font-semibold text-[var(--wn-text)]">
                Отобрано и проверено
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--wn-muted)]">
                В системе остаётся только то, что реально работает в практике.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-sm font-semibold text-[var(--wn-teal)]">
                03 — алгоритмы
              </div>
              <div className="mt-2 text-lg font-semibold text-[var(--wn-text)]">
                Понятный ход приёма
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--wn-muted)]">
                Структура работы помогает сохранять уверенность и качество результата.
              </p>
            </div>

            <div className="glass p-5">
              <div className="text-sm font-semibold text-[var(--wn-teal)]">
                04 — эксклюзив
              </div>
              <div className="mt-2 text-lg font-semibold text-[var(--wn-text)]">
                Разработки и инструменты
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[var(--wn-muted)]">
                Авторские технические решения усиливают эффективность и конкурентное преимущество.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
