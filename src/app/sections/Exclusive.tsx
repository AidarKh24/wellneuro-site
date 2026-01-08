export default function Exclusive() {
  return (
    <section
      id="exclusive"
      className="w-full px-6 py-16 md:py-20 bg-white"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* top label */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C7D0DB] bg-white px-4 py-2 text-xs font-medium text-[#6B7785]">
          <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
          Эксклюзив • Разработки • Инструменты
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          {/* LEFT: copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-[#1A2B3C]">
              Оборудование и разработки,
              <span className="text-[#0D3B66]"> усиливающие практику</span>
            </h2>

            <p className="mt-5 text-base md:text-lg leading-relaxed text-[#6B7785]">
              В ядре Велнейро — не только методы и протоколы, но и собственные
              прикладные решения: инструменты, учебные материалы и технологические
              разработки, которые повышают точность работы и качество результата.
            </p>

            <div className="mt-5 rounded-2xl border border-[#C7D0DB] bg-[#F2F2F2] p-5">
              <p className="text-sm md:text-base leading-relaxed text-[#1A2B3C]">
                Партнёр получает <span className="font-semibold">готовую систему внедрения</span>:
                что делать, в каком порядке и как объяснять ценность — чтобы практика
                выглядела уверенно и “дорого” уже с первых шагов.
              </p>
            </div>

            <ul className="mt-6 space-y-3 text-sm md:text-base text-[#1A2B3C]">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#1F5E9C]" />
                <span>
                  <span className="font-semibold">Конкурентное преимущество</span> — за счёт доступа к
                  эксклюзивным решениям экосистемы.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#00A99D]" />
                <span>
                  <span className="font-semibold">Обновления</span> — развитие методов и инструментов
                  внутри системы, чтобы оставаться актуальным.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#3FB4E6]" />
                <span>
                  <span className="font-semibold">Внедрение без “разработки с нуля”</span> —
                  партнёр применяет готовые модели.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#lead"
                className="inline-flex items-center justify-center rounded-xl bg-[#0D3B66] px-6 py-3 text-sm md:text-base font-medium text-white hover:opacity-95 transition"
              >
                Получить презентацию
              </a>

              <a
                href="#economics"
                className="inline-flex items-center justify-center rounded-xl border border-[#C7D0DB] bg-white px-6 py-3 text-sm md:text-base font-medium text-[#1A2B3C] hover:bg-[#F2F2F2] transition"
              >
                Посмотреть экономику
              </a>
            </div>

            <p className="mt-4 text-xs text-[#6B7785]">
              Мы не раскрываем коммерческие детали публично. Полное описание формата, материалов и условий — в презентации.
            </p>
          </div>

          {/* RIGHT: visuals */}
          <div className="grid grid-cols-1 gap-4">
            <div className="rounded-3xl border border-[#C7D0DB] bg-white p-5 shadow-[0_10px_30px_rgba(13,59,102,0.08)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#00A99D]">01 — Основатель</div>
                  <div className="mt-1 text-base font-semibold text-[#1A2B3C]">
                    Лицо и доверие бренда
                  </div>
                  <div className="mt-1 text-sm text-[#6B7785]">
                    Фото основателя / короткая подпись (позже добавим).
                  </div>
                </div>
                <div className="shrink-0 rounded-2xl border border-[#C7D0DB] bg-[#F2F2F2] px-3 py-2 text-xs text-[#6B7785]">
                  IMG
                </div>
              </div>

              <div className="mt-4 h-40 w-full rounded-2xl border border-[#C7D0DB] bg-gradient-to-br from-[#E9E3F6] via-white to-[#D9F3F1]" />
            </div>

            <div className="rounded-3xl border border-[#C7D0DB] bg-white p-5 shadow-[0_10px_30px_rgba(0,169,157,0.10)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#1F5E9C]">02 — Оборудование</div>
                  <div className="mt-1 text-base font-semibold text-[#1A2B3C]">
                    Инструмент преимущества
                  </div>
                  <div className="mt-1 text-sm text-[#6B7785]">
                    Фото аппарата / визуальный “якорь” уникальности.
                  </div>
                </div>
                <div className="shrink-0 rounded-2xl border border-[#C7D0DB] bg-[#F2F2F2] px-3 py-2 text-xs text-[#6B7785]">
                  IMG
                </div>
              </div>

              <div className="mt-4 h-40 w-full rounded-2xl border border-[#C7D0DB] bg-gradient-to-br from-[#D7ECFF] via-white to-[#E9E3F6]" />
            </div>

            <div className="rounded-3xl border border-[#C7D0DB] bg-white p-5 shadow-[0_10px_30px_rgba(63,180,230,0.12)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold text-[#0D3B66]">03 — Система</div>
                  <div className="mt-1 text-base font-semibold text-[#1A2B3C]">
                    Материалы, обучение, сопровождение
                  </div>
                  <div className="mt-1 text-sm text-[#6B7785]">
                    Скрин/схема/фото центра — добавим позже.
                  </div>
                </div>
                <div className="shrink-0 rounded-2xl border border-[#C7D0DB] bg-[#F2F2F2] px-3 py-2 text-xs text-[#6B7785]">
                  IMG
                </div>
              </div>

              <div className="mt-4 h-40 w-full rounded-2xl border border-[#C7D0DB] bg-gradient-to-br from-[#D9F3F1] via-white to-[#D7ECFF]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
