'use client';

import React, { useMemo, useState } from 'react';

type CalcState = {
  avgCheck: number;     // средний чек
  clientsPerDay: number;
  workDays: number;
  monthlyCosts: number; // аренда/зарплаты/прочее
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full border-t border-neutral-200 py-12">
      <div className="mx-auto w-full max-w-5xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <div className="mt-4 text-neutral-700">{children}</div>
      </div>
    </section>
  );
}

function LeadForm({ title = 'Получить консультацию' }: { title?: string }) {
  // Пока “простая” форма без бэкенда: на следующем шаге подключим нормальный сбор лидов.
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="text-lg font-semibold">{title}</div>
      <p className="mt-1 text-sm text-neutral-600">
        Оставьте контакт — пришлю условия, инвестиции и отвечу на вопросы.
      </p>

      <div className="mt-4 grid gap-3">
        <input
          className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500"
          placeholder="Телефон / Telegram"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button
          className="rounded-xl bg-black px-4 py-3 text-white hover:opacity-90"
          onClick={() => {
            // Временный вариант: просто копируй/вставляй в чат/почту.
            alert(`Заявка:\nИмя: ${name}\nКонтакт: ${phone}\n\n(Следующим шагом подключим отправку в почту/Telegram)`);
          }}
        >
          Отправить заявку
        </button>
        <p className="text-xs text-neutral-500">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        </p>
      </div>
    </div>
  );
}

function ProfitCalculator() {
  const [s, setS] = useState<CalcState>({
    avgCheck: 17000,
    clientsPerDay: 3,
    workDays: 22,
    monthlyCosts: 250000,
  });

  const revenue = useMemo(
    () => Math.max(0, s.avgCheck) * Math.max(0, s.clientsPerDay) * Math.max(0, s.workDays),
    [s]
  );
  const profit = useMemo(() => revenue - Math.max(0, s.monthlyCosts), [revenue, s.monthlyCosts]);

  const Field = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: number;
    onChange: (v: number) => void;
  }) => (
    <label className="grid gap-1">
      <span className="text-sm text-neutral-600">{label}</span>
      <input
        type="number"
        className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:border-neutral-500"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );

  return (
    <div className="mt-4 grid gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Средний чек (₽)" value={s.avgCheck} onChange={(v) => setS({ ...s, avgCheck: v })} />
        <Field
          label="Клиентов в день"
          value={s.clientsPerDay}
          onChange={(v) => setS({ ...s, clientsPerDay: v })}
        />
        <Field label="Рабочих дней в месяц" value={s.workDays} onChange={(v) => setS({ ...s, workDays: v })} />
        <Field
          label="Ежемесячные расходы (₽)"
          value={s.monthlyCosts}
          onChange={(v) => setS({ ...s, monthlyCosts: v })}
        />
      </div>

      <div className="grid gap-2 rounded-xl bg-neutral-50 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600">Выручка/мес</span>
          <b>{revenue.toLocaleString('ru-RU')} ₽</b>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-neutral-600">Чистая прибыль/мес (примерно)</span>
          <b>{profit.toLocaleString('ru-RU')} ₽</b>
        </div>
        <p className="text-xs text-neutral-500">
          Это примерная модель. Финальные цифры зависят от города, загрузки, команды и набора услуг.
        </p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HERO / Блок 1 */}
      <header className="w-full">
        <div className="mx-auto w-full max-w-5xl px-6 py-14">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm text-neutral-600">Франшиза «Велнейро»</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight">
                Откройте оздоровительный центр и зарабатывайте от 350 000 ₽/мес
              </h1>
              <p className="mt-4 text-neutral-700">
                С ростом прибыли до 800 000 ₽ и выше — по понятным алгоритмам и методикам бренда.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <a className="rounded-xl border border-neutral-300 px-4 py-2" href="#services">
                  7 услуг
                </a>
                <a className="rounded-xl border border-neutral-300 px-4 py-2" href="#support">
                  Поддержка
                </a>
                <a className="rounded-xl border border-neutral-300 px-4 py-2" href="#steps">
                  План открытия
                </a>
                <a className="rounded-xl bg-black px-4 py-2 text-white" href="#lead">
                  Оставить заявку
                </a>
              </div>

              <ul className="mt-6 list-disc pl-5 text-sm text-neutral-600">
                <li>Окупаемость: от 4 месяцев (по модели)</li>
                <li>Вечная ниша спроса: здоровье и благополучие</li>
                <li>Подходит в т.ч. без мед.образования (с выдачей сертификата)</li>
              </ul>
            </div>

            <div>
              <LeadForm title="Узнать условия франшизы" />
            </div>
          </div>
        </div>
      </header>

      {/* Блок 2 */}
      <Section id="demand" title="Почему ниша востребована">
        <p>Здоровье — “вечная потребность”: спрос не заканчивается, люди готовы инвестировать в качество жизни.</p>
      </Section>

      {/* Блок 3 */}
      <Section id="brand" title="Сила бренда и ценность бизнеса">
        <p>Экологичный бизнес: вы не только зарабатываете, но и помогаете людям получать ощутимые результаты.</p>
      </Section>

      {/* Блок 4 */}
      <Section id="expert" title="Про эксперта и методики">
        <p>
          Здесь делаем акцент на “понятные алгоритмы и методики”, без перегиба в “медицину”.
          Дипломы не показываем — максимум образец сертификата для франчайзи.
        </p>
      </Section>

      {/* Блок 4 (по ТЗ) / Services */}
      <Section id="services" title="Что вы будете продавать: 7 услуг">
        <ul className="mt-2 grid gap-2 md:grid-cols-2">
          <li className="rounded-xl border border-neutral-200 p-4">Первичная консультация</li>
          <li className="rounded-xl border border-neutral-200 p-4">Аппаратная коррекция</li>
          <li className="rounded-xl border border-neutral-200 p-4">Коррекция физического тела</li>
          <li className="rounded-xl border border-neutral-200 p-4">Коррекция эмоций и психосоматики</li>
          <li className="rounded-xl border border-neutral-200 p-4">Комплексный прием</li>
          <li className="rounded-xl border border-neutral-200 p-4">Онлайн-сопровождение 1 месяц</li>
          <li className="rounded-xl border border-neutral-200 p-4">Выезд на дом</li>
        </ul>

        <div className="mt-6">
          <a className="inline-flex rounded-xl bg-black px-4 py-2 text-white" href="#lead">
            Обсудить условия
          </a>
        </div>
      </Section>

      {/* Блок 5 */}
      <Section id="math" title="Математика доходности">
        <p>Примерный расчет выручки и прибыли. Затем заменим на финальную модель и ваши цифры.</p>
        <ProfitCalculator />
      </Section>

      {/* Блок 6 */}
      <Section id="support" title="Поддержка франчайзи">
        <ul className="mt-2 list-disc pl-5">
          <li>Операционное управление</li>
          <li>Обучение</li>
          <li>Формирование команды</li>
          <li>Организационная поддержка (помещение, ремонт, оборудование)</li>
          <li>Маркетинг (скрипты, материалы, настройка рекламы)</li>
          <li>Учет, аналитика, финансы</li>
        </ul>
      </Section>

      {/* Блок 7 */}
      <Section id="steps" title="План открытия (первые клиенты через ~20 дней)">
        <ol className="mt-2 list-decimal pl-5">
          <li>Созвон/консультация → уточняем город, формат, цели</li>
          <li>Договор → план запуска</li>
          <li>Подбор помещения/ремонт/оборудование</li>
          <li>Обучение + скрипты + маркетинг</li>
          <li>Открытие и первые лиды/клиенты</li>
        </ol>
        <div className="mt-6">
          <a className="inline-flex rounded-xl border border-neutral-300 px-4 py-2" href="#lead">
            Получить план под мой город
          </a>
        </div>
      </Section>

      {/* Блок 8 */}
      <Section id="results" title="Результаты для партнера">
        <ul className="mt-2 list-disc pl-5">
          <li>Уверенность в модели и поддержка эксперта</li>
          <li>Социальная миссия: реальная помощь людям</li>
          <li>Окупаемость 4–6 месяцев (по модели)</li>
        </ul>
      </Section>

      {/* Блок 9 */}
      <Section id="who" title="Кому подойдет">
        <p>Начинающим, практикующим специалистам, предпринимателям; подходит и без медобразования (с выдачей сертификата).</p>
      </Section>

      {/* Блок 10 */}
      <Section id="map" title="География франшизы">
        <p>Тут будет карта (в следующем шаге сделаем простой блок “ваш город / свободен/занят”).</p>
      </Section>

      {/* Блок 11 */}
      <Section id="faq" title="FAQ: вопросы и ответы">
        <div className="grid gap-3">
          <div className="rounded-xl border border-neutral-200 p-4">
            <b>Нужно ли медобразование?</b>
            <p className="mt-1 text-neutral-700">Нет, модель подходит и без него. Плюс выдача сертификата.</p>
          </div>
          <div className="rounded-xl border border-neutral-200 p-4">
            <b>Сколько времени до первых клиентов?</b>
            <p className="mt-1 text-neutral-700">Ориентир — около 20 дней при выполнении плана запуска.</p>
          </div>
        </div>
      </Section>

      {/* Блок 12 */}
      <Section id="cases" title="Кейсы партнеров">
        <p>Добавим 2–3 кейса: запрос → запуск → результат (пока поставим заглушку).</p>
      </Section>

      {/* Блок 13 */}
      <Section id="invest" title="Инвестиции и прибыль">
        <p>Дальше добавим таблицу: расходы, паушальный/роялти (если используем), прогноз прибыли.</p>
      </Section>

      {/* Финальный CTA */}
      <Section id="lead" title="Готов обсудить условия франшизы?">
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <p>
              Оставьте контакт — пришлю презентацию/условия и отвечу на вопросы по вашему городу.
            </p>
          </div>
          <LeadForm title="Стать партнером" />
        </div>
      </Section>

      <footer className="border-t border-neutral-200 py-10">
        <div className="mx-auto w-full max-w-5xl px-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Велнейро
        </div>
      </footer>
    </main>
  );
}
