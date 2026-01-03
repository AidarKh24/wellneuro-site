export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-neutral-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">wellneuro.ru</div>
              <div className="text-xs text-neutral-500">Велнейро</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-neutral-700 md:flex">
            <a className="hover:text-neutral-900" href="#system">
              Система
            </a>
            <a className="hover:text-neutral-900" href="#partners">
              Партнёрство
            </a>
            <a className="hover:text-neutral-900" href="#steps">
              Этапы
            </a>
            <a className="hover:text-neutral-900" href="#economics">
              Экономика
            </a>
            <a className="hover:text-neutral-900" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            Получить презентацию
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,132,199,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.10),transparent_45%)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          {/* Left: Text */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Франшиза в сфере оздоровления • система • обучение • поддержка
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              Профессия со смыслом.
              <br />
              Бизнес с будущим.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-neutral-700 md:text-lg">
              <span className="font-semibold text-neutral-900">Велнейро</span> — франшиза центра осознанного
              оздоровления, где многолетняя практика, исследования и авторские разработки упакованы в{" "}
              <span className="font-medium text-neutral-900">понятную систему методов</span>, обучение и сопровождение.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                Чёткие механизмы и приёмы: ясная логика действий и практическая применимость
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                Эксклюзивные разработки и инструменты внутри системы — конкурентное преимущество
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                Уверенность и поддержка на каждом этапе работы и развития
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Получить презентацию и пример финмодели
              </a>
              <a
                href="#system"
                className="rounded-2xl border border-neutral-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-neutral-900 hover:bg-white"
              >
                Узнать, как устроена система
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500">PDF • без обязательств • по запросу</p>
          </div>

          {/* Right: Visual card */}
          <div className="flex items-center justify-center">
            <div className="w-full rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Экосистема Велнейро</div>
                  <div className="mt-1 text-xs text-neutral-600">Методы • обучение • сопровождение • разработки</div>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-xs text-neutral-500">Фокус</div>
                  <div className="mt-1 font-semibold text-neutral-900">Причины, не симптомы</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-xs text-neutral-500">Формат</div>
                  <div className="mt-1 font-semibold text-neutral-900">Франшиза + обучение</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-xs text-neutral-500">Поддержка</div>
                  <div className="mt-1 font-semibold text-neutral-900">Сопровождение</div>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                  <div className="text-xs text-neutral-500">Преимущество</div>
                  <div className="mt-1 font-semibold text-neutral-900">Эксклюзивные разработки</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">Следующий шаг</div>
                <div className="mt-1 text-sm text-neutral-700">
                  Получите презентацию партнёрства и пример финансовой логики — и обсудим формат участия.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM (filled) */}
      <section id="system" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-sky-600" />
              Система • методы • эксклюзивные разработки
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Сложное становится понятным — и начинает работать
            </h2>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              Велнейро — это квинтэссенция практики и исследований, собранная в ясную систему:{" "}
              <span className="font-medium text-neutral-900">как быстро и точно находить причину состояния</span> и
              применять <span className="font-medium text-neutral-900">проверенные методы и приёмы</span>, чтобы
              получать устойчивый результат без многолетнего хаотичного поиска.
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              При этом система постоянно развивается: появляются новые подходы, методики и инструменты. Партнёр работает{" "}
              <span className="font-medium text-neutral-900">в системе постоянного развития</span>, остаётся{" "}
              <span className="font-medium text-neutral-900">всегда актуален</span> для рынка и клиентов и растёт вместе
              с экосистемой Велнейро.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#partners"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Что получает партнёр
              </a>
              <a
                href="#cta"
                className="rounded-2xl border border-neutral-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-neutral-900 hover:bg-white"
              >
                Получить презентацию
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">01 — Ясная логика</div>
                <div className="mt-1 font-semibold text-neutral-900">Причина → решение → результат</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Понимаете, что делать и почему — без “угадываний” и бесконечных проб.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">02 — Методы и приёмы</div>
                <div className="mt-1 font-semibold text-neutral-900">Отобрано и проверено</div>
                <div className="mt-2 text-sm text-neutral-700">
                  В системе оставлено то, что реально работает. Лишнее — отброшено.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">03 — Алгоритмы</div>
                <div className="mt-1 font-semibold text-neutral-900">Понятный ход приёма</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Структура работы помогает сохранять ясность и уверенность на практике.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">04 — Эксклюзивность</div>
                <div className="mt-1 font-semibold text-neutral-900">Разработки и инструменты</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Авторские решения и технологические разработки внутри системы создают конкурентное преимущество.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500" />
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Что важно</div>
                  <p className="mt-1 text-sm text-neutral-700">
                    Велнейро сочетает глубину и практичность: система даёт ясные механизмы работы — и при этом остаётся
                    живой, обновляемой и исследовательской.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections (we will fill these next, step-by-step) */}
      <section id="partners" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-200/70 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Партнёрство</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Здесь будет блок «Что получает партнёр Велнейро» — конкретно, спокойно и без “пакетов”.
        </p>
      </section>

      <section id="steps" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-200/70 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Этапы запуска</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Здесь вставим пошаговый путь партнёра: от знакомства до запуска и развития.
        </p>
      </section>

      <section id="economics" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-200/70 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">Экономика</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Здесь будет блок про финансовую логику и уникальные конкурентные преимущества (квинтэссенция методов +
          разработки/оборудование).
        </p>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-200/70 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
        <p className="mt-3 max-w-2xl text-neutral-700">
          Здесь соберём ответы на вопросы (без триггеров, спокойно и взрослым тоном).
        </p>
      </section>

      <section id="cta" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-200/70 scroll-mt-24">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">Получить презентацию Велнейро</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Напиши мне в удобный канал, и я пришлю PDF-презентацию партнёрства и пример финансовой логики. (На следующем
            шаге мы сделаем здесь красивую форму-заявку.)
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#top"
              className="rounded-2xl bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-900 hover:bg-neutral-100"
            >
              Вернуться наверх
            </a>
            <a
              href="#system"
              className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-white/15"
            >
              Посмотреть систему
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200/70 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-500">
          © {new Date().getFullYear()} Велнейро • wellneuro.ru
        </div>
      </footer>
    </main>
  );
}
