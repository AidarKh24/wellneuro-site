'use client';

import React, { useMemo, useState } from 'react';

type CalcState = {
  avgCheck: number;
  clientsPerDay: number;
  workDays: number;
  monthlyCosts: number;
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
      {children}
    </span>
  );
}

function PrimaryButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99]"
    >
      {children}
      <span className="text-white/70">→</span>
    </a>
  );
}

function GhostButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white active:scale-[0.99]"
    >
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="w-full border-t border-slate-200/70 py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Icon({
  name,
}: {
  name: 'spark' | 'shield' | 'clock' | 'chart' | 'heart' | 'zap';
}) {
  const common = 'h-5 w-5';
  switch (name) {
    case 'spark':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'shield':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2l8 4v6c0 6-4 9-8 10C8 21 4 18 4 12V6l8-4z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'clock':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 8v5l3 2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M12 21a9 9 0 1 0-9-9 9 9 0 0 0 9 9z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case 'chart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 19V5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M7 16l4-5 3 3 5-7"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'heart':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s-7-4.5-9-9a5.5 5.5 0 0 1 9-6 5.5 5.5 0 0 1 9 6c-2 4.5-9 9-9 9z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'zap':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="none">
          <path
            d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

function StatCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm">
      <div className="text-sm font-medium text-slate-600">{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-1 text-sm text-slate-500">{hint}</div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
        {icon}
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
}) {
  return (
    <label className="block">
      <div className="text-xs font-medium text-slate-600">{label}</div>
      <div className="mt-2 flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3 py-2 shadow-sm">
        <input
          className="w-full bg-transparent text-sm text-slate-900 outline-none"
          type="number"
          value={Number.isFinite(value) ? value : 0}
          min={0}
          onChange={(e) => onChange(Number(e.target.value))}
        />
        {suffix ? (
          <span className="text-xs font-medium text-slate-500">{suffix}</span>
        ) : null}
      </div>
    </label>
  );
}

function formatMoney(n: number) {
  const safe = Number.isFinite(n) ? n : 0;
  return safe.toLocaleString('ru-RU');
}

export default function Home() {
  // ⚠️ Тексты ниже — “умная заготовка”. Мы потом заменим на твои точные формулировки из концепции/транскрипта.
  const brand = 'Wellneuro';

  const [calc, setCalc] = useState<CalcState>({
    avgCheck: 2500,
    clientsPerDay: 10,
    workDays: 22,
    monthlyCosts: 180000,
  });

  const economics = useMemo(() => {
    const revenue = calc.avgCheck * calc.clientsPerDay * calc.workDays;
    const profit = revenue - calc.monthlyCosts;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
    return { revenue, profit, margin };
  }, [calc]);

  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-white/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900 text-white shadow-sm flex items-center justify-center font-semibold">
              W
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">{brand}</div>
              <div className="text-xs text-slate-500">лендинг v1</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#product" className="text-sm text-slate-600 hover:text-slate-900">
              Продукт
            </a>
            <a href="#benefits" className="text-sm text-slate-600 hover:text-slate-900">
              Польза
            </a>
            <a href="#calc" className="text-sm text-slate-600 hover:text-slate-900">
              Экономика
            </a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-slate-900">
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#lead"
              className="hidden rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white md:inline-flex"
            >
              Получить консультацию
            </a>
            <a
              href="#lead"
              className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Старт
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="w-full py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
          <div className="max-w-xl">
            <div className="flex flex-wrap gap-2">
              <Badge>Нейро-подход</Badge>
              <Badge>Премиальный сервис</Badge>
              <Badge>Лендинг v1</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              {brand}: современный <span className="text-slate-700">wellbeing-</span>
              <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-500 bg-clip-text text-transparent">
                продукт
              </span>{' '}
              для роста качества жизни и энергии
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Это “умный” лендинг, который продаёт: ясное позиционирование, выгоды,
              доверие, FAQ и мини-калькулятор. Дальше мы добавим твои точные смыслы
              из транскрипта и сделаем версию v2.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#lead">Получить консультацию</PrimaryButton>
              <GhostButton href="#product">Посмотреть, как работает</GhostButton>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <StatCard title="Формат" value="Лендинг" hint="быстро запускаем" />
              <StatCard title="Цель" value="Заявки" hint="консультации / запись" />
              <StatCard title="Дальше" value="Сайт" hint="структура готова" />
            </div>
          </div>

          {/* Visual block */}
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900">
                Дашборд (макет)
              </div>
              <div className="text-xs text-slate-500">v1</div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-medium text-slate-500">Фокус</div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  Сон • стресс • энергия
                </div>
                <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
                  <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-500" />
                </div>
                <div className="mt-2 text-xs text-slate-500">прогресс недели</div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-medium text-slate-500">Результат</div>
                <div className="mt-2 text-sm font-semibold text-slate-900">
                  “чувствую больше сил”
                </div>
                <div className="mt-3 grid gap-2">
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[58%] rounded-full bg-slate-900" />
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[40%] rounded-full bg-slate-700" />
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-[78%] rounded-full bg-slate-500" />
                  </div>
                </div>
              </div>

              <div className="col-span-2 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-500">
                    План внедрения (3 шага)
                  </div>
                  <div className="text-xs text-slate-500">просто</div>
                </div>
                <div className="mt-3 grid gap-2">
                  {[
                    'Диагностика и цель',
                    'Персональная программа',
                    'Сопровождение и измеримый прогресс',
                  ].map((t, i) => (
                    <div
                      key={t}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <div className="h-7 w-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-semibold">
                        {i + 1}
                      </div>
                      <div className="text-sm font-medium text-slate-800">{t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-600/10 via-violet-500/10 to-sky-500/10 p-4">
              <div className="text-sm font-semibold text-slate-900">
                Мы сделаем это “продающим”
              </div>
              <p className="mt-1 text-sm text-slate-600">
                Чёткая ценность, доверие, оффер, CTA и ответы на возражения — в правильном порядке.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <Section
        id="product"
        title="Что это за продукт и кому он нужен"
        subtitle="Здесь мы скоро вставим твой точный смысл из транскрипта. Пока — аккуратная, универсальная версия."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Icon name="heart" />}
            title="Для людей, которые устали “держаться”"
            text="Если энергии мало, стресс высокий, а качество жизни просело — нужна система, а не хаос."
          />
          <FeatureCard
            icon={<Icon name="spark" />}
            title="Для тех, кто хочет прогресса, а не мотивации"
            text="План + сопровождение + измеримость = спокойная, уверенная динамика."
          />
          <FeatureCard
            icon={<Icon name="shield" />}
            title="Для тех, кто ценит безопасность и качество"
            text="Без “магии”. Трезвый подход, внимание к контексту и аккуратные решения."
          />
        </div>
      </Section>

      {/* BENEFITS */}
      <Section
        id="benefits"
        title="Почему это работает"
        subtitle="Люди покупают не “услугу”, а понятный результат и уверенность, что всё получится."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeatureCard
            icon={<Icon name="clock" />}
            title="Экономит время и снижает хаос"
            text="Не нужно перебирать десятки методик — ты идёшь по ясному маршруту."
          />
          <FeatureCard
            icon={<Icon name="zap" />}
            title="Даёт ощущение контроля"
            text="Понятно что делать сегодня, завтра и на неделе — без перегруза."
          />
          <FeatureCard
            icon={<Icon name="chart" />}
            title="Можно измерять прогресс"
            text="Меньше сомнений: видно, что улучшается и что корректировать."
          />
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-slate-900">
                Главный оффер (пока заготовка)
              </div>
              <div className="mt-1 text-sm text-slate-600">
                “Понятная программа + сопровождение → устойчивое улучшение самочувствия”.
              </div>
            </div>
            <PrimaryButton href="#lead">Хочу консультацию</PrimaryButton>
          </div>
        </div>
      </Section>

      {/* CALC */}
      <Section
        id="calc"
        title="Мини-калькулятор (для бизнеса/франшизы)"
        subtitle="Ты говорил про франшизу/экономику — пусть будет инструмент, который повышает доверие. Потом настроим под твою реальность."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Ввод</div>
            <div className="mt-5 grid gap-4">
              <Input
                label="Средний чек"
                value={calc.avgCheck}
                onChange={(v) => setCalc((s) => ({ ...s, avgCheck: v }))}
                suffix="₽"
              />
              <Input
                label="Клиентов в день"
                value={calc.clientsPerDay}
                onChange={(v) => setCalc((s) => ({ ...s, clientsPerDay: v }))}
              />
              <Input
                label="Рабочих дней в месяц"
                value={calc.workDays}
                onChange={(v) => setCalc((s) => ({ ...s, workDays: v }))}
              />
              <Input
                label="Ежемесячные расходы"
                value={calc.monthlyCosts}
                onChange={(v) => setCalc((s) => ({ ...s, monthlyCosts: v }))}
                suffix="₽"
              />
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              Это “первый прототип”. Потом подставим реальные статьи расходов и добавим варианты.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">Результат</div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-medium text-slate-500">Выручка / месяц</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">
                  {formatMoney(economics.revenue)} ₽
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-medium text-slate-500">Прибыль / месяц</div>
                <div className="mt-2 text-2xl font-semibold text-slate-900">
                  {formatMoney(economics.profit)} ₽
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  Маржинальность: {economics.margin.toFixed(1)}%
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-indigo-600/10 via-violet-500/10 to-sky-500/10 p-4">
                <div className="text-sm font-semibold text-slate-900">
                  Хотишь — сделаем “калькулятор франшизы”
                </div>
                <p className="mt-1 text-sm text-slate-600">
                  Добавим паушальный взнос, роялти, окупаемость, сценарии и сравнение.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <PrimaryButton href="#lead">Обсудить запуск</PrimaryButton>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        id="faq"
        title="FAQ — снимаем возражения"
        subtitle="Это самая “продающая” часть. Мы позже перепишем строго под твои реальные возражения."
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              q: 'Это про “психологию” или “медицину”?',
              a: 'Мы сделаем корректную формулировку под твой продукт. Важно: никаких обещаний “вылечить”, только честное позиционирование и пользу.',
            },
            {
              q: 'Сколько нужно времени, чтобы увидеть результат?',
              a: 'Ответ будет зависеть от формата. На лендинге мы дадим безопасную, правдивую рамку и примеры сценариев.',
            },
            {
              q: 'А если у меня не получится / сорвусь?',
              a: 'Снимаем страх: сопровождение, маленькие шаги, адаптация под реальность — это ключ к устойчивости.',
            },
            {
              q: 'Почему вы, а не “любая программа из интернета”?',
              a: 'Потому что “интернет” не держит фокус, не адаптирует, не измеряет прогресс и не помогает пройти сложные моменты.',
            },
          ].map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div className="text-sm font-semibold text-slate-900">{item.q}</div>
                <div className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs text-slate-500 transition group-open:rotate-180">
                  ▼
                </div>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* LEAD */}
      <section id="lead" className="w-full border-t border-slate-200/70 py-14 md:py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm md:p-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Сделаем лендинг, который продаёт — и не стыдно показывать
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  Дальше твоя задача: дать мне смыслы (транскрипт/позиционирование),
                  а моя — собрать это в структуру, тексты, секции и “путь” пользователя.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge>структура</Badge>
                  <Badge>копирайт</Badge>
                  <Badge>логика продажи</Badge>
                  <Badge>визуал</Badge>
                </div>
              </div>

              {/* simple form (placeholder) */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="text-sm font-semibold text-slate-900">
                  Получить консультацию (заглушка)
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  Пока без отправки — позже подключим форму (Tally/Telegram/Email).
                </p>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                    Имя (позже)
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500">
                    Телефон / Telegram (позже)
                  </div>
                  <a
                    href="mailto:hello@wellneuro.ru"
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                  >
                    Написать на email
                  </a>
                  <p className="text-xs text-slate-500">
                    Заменим email/контакты на твои реальные.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-start justify-between gap-3 text-sm text-slate-500 md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Wellneuro. Все права защищены.</div>
            <div className="flex gap-4">
              <a className="hover:text-slate-700" href="#product">
                Продукт
              </a>
              <a className="hover:text-slate-700" href="#faq">
                FAQ
              </a>
              <a className="hover:text-slate-700" href="#lead">
                Контакты
              </a>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
