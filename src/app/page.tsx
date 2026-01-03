export default function Page() {
  const faqs = [
    {
      q: "Кому подходит партнёрство Велнейро?",
      a: "Тем, кто хочет работать в сфере оздоровления и развивать практику на основе ясной системы. Подходит специалистам, предпринимателям и руководителям центров, а также тем, кто готов учиться и работать по подходам Велнейро.",
    },
    {
      q: "Нужно ли быть врачом или иметь медицинский диплом?",
      a: "Нет. В экосистеме Велнейро важны этика, обучаемость, ответственность и готовность следовать подходам/философии оздоровления. Формат вашей деятельности подбирается так, чтобы оставаться корректным в формулировках и в рамках требований вашего региона.",
    },
    {
      q: "Это про медицину или про оздоровление?",
      a: "В публичных коммуникациях и в клиентском позиционировании Велнейро — про оздоровление и благополучие. Мы аккуратно используем формулировки и строим процессы так, чтобы не уходить в декларацию медицинских услуг там, где это требует лицензирования.",
    },
    {
      q: "Что именно я получаю как партнёр?",
      a: "Систему методов и приёмов, обучение, методические материалы, сопровождение, обновления и доступ к эксклюзивным разработкам и инструментам внутри экосистемы Велнейро. Это создаёт конкурентное преимущество и помогает быстрее выйти на уверенную практику.",
    },
    {
      q: "Насколько это “живая” система? Она обновляется?",
      a: "Да. Велнейро строится как система постоянного развития: подходы, методики и инструменты совершенствуются, появляются новые решения и обновления. Партнёр растёт вместе с экосистемой и остаётся всегда актуален.",
    },
    {
      q: "Сколько времени занимает запуск?",
      a: "Зависит от выбранного формата (личная практика / центр / команда), стартовых условий и вовлечённости. Мы выстраиваем путь по шагам: знакомство → формат → обучение → подготовка → запуск → сопровождение.",
    },
    {
      q: "Есть ли эксклюзив и чем вы отличаетесь от “обычных” школ/курсов?",
      a: "Ключевое отличие — квинтэссенция методов, практическая системность и эксклюзивные разработки/инструменты внутри Велнейро. Это не набор разрозненных техник, а цельная логика работы, поддержанная обучением, процессами и развитием.",
    },
    {
      q: "Как устроена поддержка после запуска?",
      a: "Партнёр не остаётся один: сопровождение, обратная связь, уточнение нюансов, обновления материалов и развитие компетенций. Это важная часть модели — качество и устойчивость практики растут со временем.",
    },
    {
      q: "Будут ли на сайте обещания результатов или “гарантии”?",
      a: "Нет. Мы строим доверие на взрослой коммуникации: показываем систему, логику, формат обучения и сопровождения. Без агрессивных триггеров, без громких обещаний и без “миллионов за месяц”.",
    },
    {
      q: "Как обсуждается экономика и финансовая модель?",
      a: "Честно и по входным данным: город, формат, загрузка, команда, расходы. На лендинге — логика и принципы. Пример финмодели — в презентации по запросу, чтобы не давать цифры “в вакууме”.",
    },
  ];

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
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(2,132,199,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(16,185,129,0.10),transparent_45%)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
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

          <div className="flex items-center justify-center">
            <div className="w-full rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-neutral-900">Экосистема Велнейро</div>
                  <div className="mt-1 text-xs text-neutral-600">
                    Методы • обучение • сопровождение • разработки
                  </div>
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
              применять <span className="font-medium text-neutral-900">проверенные методы и приёмы</span>, чтобы получать
              устойчивый результат без многолетнего хаотичного поиска.
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

      {/* PARTNERS (filled) */}
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
            Партнёрство с Велнейро — это доступ к целостной системе, в которой уже собраны, структурированы и проверены
            методы, инструменты и подходы.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Систему методов и приёмов",
              text: "Чётко структурированная логика работы, позволяющая быстро ориентироваться и уверенно применять методы на практике.",
            },
            {
              title: "Обучение и передачу знаний",
              text: "Обучающие программы, которые формируют понимание, а не механическое повторение.",
            },
            {
              title: "Эксклюзивные разработки",
              text: "Авторские методы и технические решения, недоступные вне экосистемы Велнейро.",
            },
            {
              title: "Сопровождение и поддержку",
              text: "Поддержка, обратная связь и развитие вместе с системой.",
            },
            {
              title: "Готовую модель работы",
              text: "Понятная структура практики без хаоса и бессистемных поисков.",
            },
            {
              title: "Рост вместе с экосистемой",
              text: "Партнёр работает в системе постоянного развития и всегда актуален для рынка и клиентов.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-neutral-200 bg-white p-6">
              <div className="text-lg font-semibold">{item.title}</div>
              <p className="mt-2 text-sm text-neutral-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS (filled) */}
      <section id="steps" className="mx-auto max-w-6xl px-4 py-20 border-t border-neutral-200/70 scroll-mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-sky-600" />
              Запуск партнёра
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Путь партнёра: ясно, спокойно, по шагам
            </h2>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              В Велнейро не “заходят вслепую”. С самого начала процесс выстроен так, чтобы у вас были{" "}
              <span className="font-medium text-neutral-900">понимание, ясность и уверенность</span> на каждом этапе.
            </p>

            <div className="mt-7 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">Опора партнёра</div>
              <p className="mt-2 text-sm text-neutral-700">
                Вы идёте по системе, в которой уже собраны методы, обучение и инструменты. Это даёт{" "}
                <span className="font-medium text-neutral-900">
                  уверенность и поддержку на каждом этапе работы и развития
                </span>
                .
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#economics"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Посмотреть экономику
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
            <ol className="relative space-y-6">
              {[
                {
                  step: "1",
                  title: "Знакомство и диалог",
                  text: "Вы получаете презентацию, знакомитесь с философией и возможностями. Обсуждаем цели, формат участия и ожидания.",
                  dot: "bg-emerald-500",
                },
                {
                  step: "2",
                  title: "Выбор формата и модели",
                  text: "Определяем оптимальную модель: личная практика, центр с командой или партнёрский формат — с учётом города и ресурсов.",
                  dot: "bg-sky-600",
                },
                {
                  step: "3",
                  title: "Обучение и освоение системы",
                  text: "Обучение выстроено так, чтобы сформировать понимание и уверенность в применении методов на практике.",
                  dot: "bg-neutral-900",
                },
                {
                  step: "4",
                  title: "Подготовка к запуску",
                  text: "Параллельно формируем структуру работы, методические материалы и процессы приёма. Помогаем избежать типичных ошибок.",
                  dot: "bg-sky-600",
                },
                {
                  step: "5",
                  title: "Старт практической работы",
                  text: "Первые приёмы, обратная связь, уточнение деталей. Вы развиваете практику в контакте с системой.",
                  dot: "bg-emerald-500",
                },
                {
                  step: "6",
                  title: "Сопровождение и развитие",
                  text: "Поддержка, ответы, развитие навыков и обновления методов. Вы работаете в системе постоянного развития и всегда актуальны.",
                  dot: "bg-neutral-900",
                },
              ].map((item, i, arr) => (
                <li key={i} className="relative pl-10">
                  {i !== arr.length - 1 && (
                    <div className="absolute left-[18px] top-7 h-[calc(100%+8px)] w-px bg-neutral-200" />
                  )}

                  <div className={`absolute left-3 top-1.5 h-3 w-3 rounded-full ${item.dot}`} />

                  <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-sm font-semibold text-neutral-900">{item.title}</div>
                      <div className="text-xs text-neutral-500">Этап {item.step}</div>
                    </div>
                    <p className="mt-2 text-sm text-neutral-700">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="text-xs text-neutral-500">Итог</div>
              <div className="mt-1 text-sm text-neutral-700">
                Процесс запуска построен так, чтобы вы сохраняли ясность и уверенность — и могли расти вместе с системой.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECONOMICS (filled) */}
      <section id="economics" className="mx-auto max-w-6xl px-4 py-20 border-t border-neutral-200/70 scroll-mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Экономика и логика модели
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Понятная модель, честная логика, без «обещаний»
            </h2>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              Велнейро — это не “упаковка ради упаковки”. Экономика опирается на три устойчивых источника ценности:
              <span className="font-medium text-neutral-900"> системная логика</span>,{" "}
              <span className="font-medium text-neutral-900">обучение и сопровождение</span>,{" "}
              <span className="font-medium text-neutral-900">эксклюзивные разработки</span>.
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              Мы избегаем громких цифр на лендинге: финансовая модель зависит от города, формата, загрузки и команды.
              Поэтому показываем <span className="font-medium text-neutral-900">логику расчёта</span> и даём пример
              финмодели по запросу.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Запросить пример финмодели
              </a>
              <a
                href="#faq"
                className="rounded-2xl border border-neutral-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-neutral-900 hover:bg-white"
              >
                Вопросы и ответы
              </a>
            </div>

            <div className="mt-7 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">Что делает модель сильнее</div>
              <p className="mt-2 text-sm text-neutral-700">
                Эксклюзивные разработки и инструменты внутри системы — то, что сложнее всего скопировать. А постоянное
                обновление подходов помогает оставаться всегда актуальными.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">1) Практика</div>
                <div className="mt-1 font-semibold text-neutral-900">Приёмы и программы</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Доход формируется из регулярной практики и программ сопровождения.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">2) Обучение</div>
                <div className="mt-1 font-semibold text-neutral-900">Рост компетенций</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Обучение повышает качество и уверенность, а значит — доверие клиентов и стабильность загрузки.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">3) Эксклюзив</div>
                <div className="mt-1 font-semibold text-neutral-900">Разработки и инструменты</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Технологическая дифференциация: методы и решения внутри экосистемы Велнейро.
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-4">
                <div className="text-xs text-neutral-500">4) Устойчивость</div>
                <div className="mt-1 font-semibold text-neutral-900">Система развития</div>
                <div className="mt-2 text-sm text-neutral-700">
                  Обновления, сопровождение, методическая база — чтобы партнёр рос вместе с системой.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="text-xs text-neutral-500">Как читать финмодель</div>
              <ul className="mt-2 space-y-2 text-sm text-neutral-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                  Формат: личная практика / центр / команда
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  Загрузка: количество клиентов и повторяемость
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-neutral-900" />
                  Структура: расходы, операционные процессы, роль партнёра
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="text-xs text-neutral-500">Важно</div>
              <div className="mt-1 text-sm text-neutral-700">
                Мы обсуждаем экономику по входным данным. Поэтому финмодель — в презентации по запросу.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (filled) */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-20 border-t border-neutral-200/70 scroll-mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
              <span className="h-2 w-2 rounded-full bg-neutral-900" />
              FAQ
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Вопросы и ответы — спокойно и по делу
            </h2>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              Мы заранее отвечаем на основные вопросы партнёров. Это помогает принять решение без суеты и без лишних
              ожиданий.
            </p>

            <div className="mt-7 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm">
              <div className="text-sm font-semibold text-neutral-900">Если у вас другой вопрос</div>
              <p className="mt-2 text-sm text-neutral-700">
                Напишите — и мы разберём вашу ситуацию: формат, город, цели, стартовые условия. Это часть правильного
                “знакомства и диалога”.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-2xl bg-neutral-900 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-neutral-800"
              >
                Получить презентацию
              </a>
              <a
                href="#partners"
                className="rounded-2xl border border-neutral-300 bg-white/70 px-6 py-3 text-center text-sm font-semibold text-neutral-900 hover:bg-white"
              >
                Вернуться к партнёрству
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="space-y-3">
              {faqs.map((item, idx) => (
                <details
                  key={idx}
                  className="group rounded-2xl border border-neutral-200 bg-white p-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-neutral-900">{item.q}</span>
                    <span className="text-neutral-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-700 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4">
              <div className="text-xs text-neutral-500">Принцип коммуникации</div>
              <div className="mt-1 text-sm text-neutral-700">
                Мы строим доверие без шаблонных “продающих” штампов: ясность, уважение, система и поддержка.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-16 border-t border-neutral-200/70 scroll-mt-24">
        <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white">
          <h2 className="text-2xl font-semibold tracking-tight">Получить презентацию Велнейро</h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Напиши мне в удобный канал, и я пришлю PDF-презентацию партнёрства и пример финансовой логики.
            (На следующем шаге мы сделаем здесь красивую форму-заявку.)
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
