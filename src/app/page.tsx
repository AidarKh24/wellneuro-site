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
            <a className="hover:text-neutral-900" href="#system">Система</a>
            <a className="hover:text-neutral-900" href="#partners">Партнёрство</a>
            <a className="hover:text-neutral-900" href="#steps">Этапы</a>
            <a className="hover:text-neutral-900" href="#economics">Экономика</a>
            <a className="hover:text-neutral-900" href="#faq">FAQ</a>
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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Франшиза в сфере оздоровления
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl">
              Профессия со смыслом.
              <br />
              Бизнес с будущим.
            </h1>

            <p className="mt-5 text-neutral-700 md:text-lg">
              <span className="font-semibold text-neutral-900">Велнейро</span> — система осознанного оздоровления,
              объединяющая методы, обучение, сопровождение и эксклюзивные разработки в единую экосистему.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-neutral-700 md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-sky-600" />
                Чёткие механизмы и понятная логика работы
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-emerald-600" />
                Эксклюзивные методы и инструменты внутри системы
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-neutral-900" />
                Уверенность и поддержка на каждом этапе развития
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#cta" className="rounded-2xl bg-neutral-900 px-6 py-3 text-sm font-semibold text-white">
                Получить презентацию
              </a>
              <a href="#system" className="rounded-2xl border border-neutral-300 px-6 py-3 text-sm font-semibold">
                Узнать о системе
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      {/* (оставляем как есть — уже добавлена ранее) */}

      {/* PARTNERS */}
      <section id="partners" className="mx-auto max-w-6xl px-4 py-20 scroll-mt-24 border-t border-neutral-200/70">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Партнёрство Велнейро
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            Что получает партнёр Велнейро
          </h2>

          <p className="mt-4 text-neutral-700 leading-relaxed">
            Партнёрство с Велнейро — это доступ к целостной системе, в которой уже собраны,
            структурированы и проверены методы, инструменты и подходы.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Систему методов и приёмов",
              text: "Чётко структурированная логика работы, позволяющая быстро ориентироваться и уверенно применять методы на практике."
            },
            {
              title: "Обучение и передачу знаний",
              text: "Обучающие программы, которые формируют понимание, а не механическое повторение."
            },
            {
              title: "Эксклюзивные разработки",
              text: "Авторские методы и технические решения, недоступные вне экосистемы Велнейро."
            },
            {
              title: "Сопровождение и поддержку",
              text: "Поддержка, обратная связь и развитие вместе с системой."
            },
            {
              title: "Готовую модель работы",
              text: "Понятная структура практики без хаоса и бессистемных поисков."
            },
            {
              title: "Рост вместе с экосистемой",
              text: "Партнёр работает в системе постоянного развития и остаётся актуальным."
            }
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <div className="text-lg font-semibold">{item.title}</div>
              <p className="mt-2 text-sm text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-20 border-t border-neutral-200/70 scroll-mt-24">
        <div className="rounded-3xl bg-neutral-900 p-8 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">Получить презентацию Велнейро</h2>
          <p className="mt-3 text-white/80 max-w-2xl">
            PDF-презентация партнёрства и пример финансовой логики — без обязательств.
          </p>
          <a
            href="#top"
            className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-neutral-900"
          >
            Вернуться наверх
          </a>
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
