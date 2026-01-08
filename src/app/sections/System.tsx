export default function System() {
  return (
    <section id="system" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Левая колонка */}
          <div className="glass p-7 sm:p-9">
            <div className="text-sm font-semibold text-[#00A99D]">
              Что такое Велнейро
            </div>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight text-[#1A2B3C]">
              Экосистема, где оздоровление становится понятной системой
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#6B7785]">
              Велнейро объединяет методы, протоколы, обучение и инструменты в
              единый подход, который помогает специалисту работать уверенно,
              последовательно и результативно — в рамках ясной логики.
            </p>

            <p className="mt-4 leading-relaxed text-[#1AA7A1] font-medium">
              Партнёр получает доступ к обновляемой базе знаний и практических
              решений, чтобы оставаться актуальным и развивать своё дело без
              хаотичного поиска новых “популярных” методик.
            </p>
          </div>

          {/* Правая колонка — 3 “уровня” */}
          <div className="grid gap-4">
            <div className="glass p-6">
              <div className="text-sm font-semibold text-[#3FB4E6]">
                Уровень 1
              </div>
              <div className="mt-2 text-xl font-semibold text-[#1A2B3C]">
                Нервная система и психоэмоциональные процессы
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Основание целостного состояния: устойчивость, внимание, сон,
                реактивность, стресс-нагрузка.
              </p>
            </div>

            <div className="glass p-6">
              <div className="text-sm font-semibold text-[#3FB4E6]">
                Уровень 2
              </div>
              <div className="mt-2 text-xl font-semibold text-[#1A2B3C]">
                Структурно-физический уровень
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Работа с телом, связями и функциональными паттернами — там, где
                формируются ограничения и “фон” самочувствия.
              </p>
            </div>

            <div className="glass p-6">
              <div className="text-sm font-semibold text-[#3FB4E6]">
                Уровень 3
              </div>
              <div className="mt-2 text-xl font-semibold text-[#1A2B3C]">
                Биохимический уровень и регуляция
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Понимание того, как поддерживать внутреннюю среду и
                восстановительные процессы — системно, без крайностей.
              </p>
            </div>

            {/* мини-акцент */}
            <div className="glass p-6">
              <div className="text-sm font-semibold text-[#00A99D]">
                Принцип Велнейро
              </div>
              <div className="mt-2 text-xl font-semibold text-[#1A2B3C]">
                Система развивается централизованно — партнёр внедряет готовое
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7785]">
                Экосистема задаёт вектор, обновляет методы и инструменты, а
                партнёр концентрируется на практике, качестве и росте.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
