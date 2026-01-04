"use client";

import { useMemo, useState } from "react";

export default function Page() {
  const faqs = useMemo(
    () => [
      {
        q: "Кому подходит партнёрство Велнейро?",
        a: "Тем, кто хочет работать в сфере оздоровления и развивать практику на основе ясной системы. Подходит специалистам, предпринимателям и руководителям центров, а также тем, кто готов учиться и работать по подходам Велнейро.",
      },
      {
        q: "Нужно ли быть врачом или иметь медицинский диплом?",
        a: "Нет. В экосистеме Велнейро важны этика, обучаемость, ответственность и готовность следовать подходам и философии оздоровления. Формат вашей деятельности подбирается так, чтобы оставаться корректным в формулировках и в рамках требований вашего региона.",
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
        q: "Система обновляется?",
        a: "Да. Велнейро строится как система постоянного развития: подходы, методики и инструменты совершенствуются, появляются новые решения и обновления. Партнёр растёт вместе с экосистемой и остаётся всегда актуален.",
      },
      {
        q: "Сколько времени занимает запуск?",
        a: "Зависит от выбранного формата (личная практика / центр / команда), стартовых условий и вовлечённости. Мы выстраиваем путь по шагам: знакомство → формат → обучение → подготовка → запуск → сопровождение.",
      },
      {
        q: "Чем вы отличаетесь от обычных школ/курсов?",
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
    ],
    []
  );

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const [touched, setTouched] = useState<{ [k: string]: boolean }>({});
  const [form, setForm] = useState({
    name: "",
    contact: "",
    city: "",
    format: "Личная практика",
    background: "Специалист",
    message: "",
    consent: true,
  });

  const required = {
    name: form.name.trim().length > 1,
    contact: form.contact.trim().length > 3,
    city: form.city.trim().length > 1,
  };

  const canSubmit = required.name && required.contact && required.city && form.consent;

  const leadText = useMemo(() => {
    const lines = [
      "Заявка на презентацию Велнейро",
      "—",
      `Имя: ${form.name || "—"}`,
      `Контакт (TG/WhatsApp/Email): ${form.contact || "—"}`,
      `Город: ${form.city || "—"}`,
      `Формат интереса: ${form.format}`,
      `Кто я: ${form.background}`,
      `Комментарий: ${form.message || "—"}`,
      "—",
      `Источник: wellneuro.ru (landing)`,
    ];
    return lines.join("\n");
  }, [form]);

  function setField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function markTouched(key: string) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, contact: true, city: true, consent: true });
    setSendError(null);

    if (!canSubmit) return;

    setSending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          city: form.city,
          format: form.format,
          background: form.background,
          message: form.message,
          source: "wellneuro.ru (landing)",
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        const reason =
          data?.error || data?.telegram?.reason || data?.email?.reason || `HTTP ${res.status}`;
        setSendError(
          `Не удалось отправить автоматически. Можно скопировать текст заявки ниже. (${reason})`
        );
        setSubmitted(true);
        return;
      }

      setSubmitted(true);
    } catch (err: any) {
      setSendError(`Ошибка сети. Можно скопировать текст заявки ниже. (${err?.message || "network"})`);
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#1A2B3C]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#C7D0DB]/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
  <img
    src="\logo wellneuro.jpg"
    alt="Велнейро"
    className="h-10 w-auto"
  />
  <div className="leading-tight">
    <div className="text-sm font-semibold tracking-tight text-[#1A2B3C]">
      Велнейро
    </div>
    <div className="text-xs text-[#6B7785]">
      Центр здоровья и благополучия
    </div>
  </div>
</a>


          <nav className="hidden items-center gap-6 text-sm text-[#6B7785] md:flex">
            <a className="hover:text-[#1A2B3C]" href="#system">
              Система
            </a>
            <a className="hover:text-[#1A2B3C]" href="#partners">
              Партнёрство
            </a>
            <a className="hover:text-[#1A2B3C]" href="#steps">
              Этапы
            </a>
            <a className="hover:text-[#1A2B3C]" href="#economics">
              Экономика
            </a>
            <a className="hover:text-[#1A2B3C]" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href="#cta"
            className="rounded-xl bg-[#0D3B66] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1F5E9C]"
          >
            Оставить заявку
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#3FB4E6]/20 blur-3xl" />
          <div className="absolute -bottom-48 right-[-120px] h-[520px] w-[520px] rounded-full bg-[#00A99D]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(63,180,230,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,169,157,0.10),transparent_45%)]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C7D0DB] bg-white/70 px-3 py-1 text-xs text-[#6B7785]">
              <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
              Франшиза в сфере оздоровления • система • обучение • сопровождение
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#1A2B3C] md:text-5xl">
              Профессия со смыслом.
              <br />
              Бизнес с будущим.
            </h1>

            <p className="mt-5 text-base leading-relaxed text-[#6B7785] md:text-lg">
              <span className="font-semibold text-[#1A2B3C]">Велнейро</span> — франшиза центра осознанного оздоровления, где
              многолетняя практика и авторские разработки упакованы в{" "}
              <span className="font-medium text-[#0D3B66]">понятную систему методов</span>, обучение и сопровождение.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#6B7785] md:text-base">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3FB4E6]" />
                Чёткие механизмы и приёмы: ясная логика действий и практическая применимость
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A99D]" />
                Эксклюзивные разработки и инструменты — конкурентное преимущество
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0D3B66]" />
                Уверенность и поддержка на каждом этапе работы и развития
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="rounded-2xl bg-[#0D3B66] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#1F5E9C]"
              >
                Оставить заявку на презентацию
              </a>
              <a
                href="#system"
                className="rounded-2xl border border-[#C7D0DB] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[#1A2B3C] hover:bg-white"
              >
                Узнать, как устроена система
              </a>
            </div>

            <p className="mt-4 text-xs text-[#6B7785]">Без обязательств • по делу • взрослый тон</p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full rounded-3xl border border-[#C7D0DB] bg-white/70 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-[#1A2B3C]">Экосистема Велнейро</div>
                  <div className="mt-1 text-xs text-[#6B7785]">Методы • обучение • сопровождение • разработки</div>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-[#3FB4E6] to-[#00A99D]" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">Фокус</div>
                  <div className="mt-1 font-semibold text-[#1A2B3C]">Причины, не симптомы</div>
                </div>
                <div className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">Формат</div>
                  <div className="mt-1 font-semibold text-[#1A2B3C]">Франшиза + обучение</div>
                </div>
                <div className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">Поддержка</div>
                  <div className="mt-1 font-semibold text-[#1A2B3C]">Сопровождение</div>
                </div>
                <div className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">Преимущество</div>
                  <div className="mt-1 font-semibold text-[#1A2B3C]">Эксклюзивные разработки</div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#C7D0DB] bg-white p-4">
                <div className="text-xs text-[#6B7785]">Следующий шаг</div>
                <div className="mt-1 text-sm text-[#6B7785]">
                  Оставьте заявку — и получите презентацию партнёрства и пример финансовой логики.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section id="system" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#C7D0DB] bg-white/70 px-3 py-1 text-xs text-[#6B7785]">
              <span className="h-2 w-2 rounded-full bg-[#3FB4E6]" />
              Система • методы • эксклюзивные разработки
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-[#1A2B3C]">
              Сложное становится понятным — и начинает работать
            </h2>

            <p className="mt-4 text-[#6B7785] leading-relaxed">
              Велнейро — это квинтэссенция практики и исследований, собранная в ясную систему:{" "}
              <span className="font-medium text-[#1A2B3C]">как быстро и точно находить причину состояния</span> и применять{" "}
              <span className="font-medium text-[#1A2B3C]">проверенные методы и приёмы</span>, чтобы получать устойчивый результат
              без многолетнего хаотичного поиска.
            </p>

            <p className="mt-4 text-[#6B7785] leading-relaxed">
              Система постоянно развивается: появляются новые подходы, методики и инструменты. Партнёр работает{" "}
              <span className="font-medium text-[#1A2B3C]">в системе постоянного развития</span> и остаётся{" "}
              <span className="font-medium text-[#1A2B3C]">всегда актуален</span>.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#partners"
                className="rounded-2xl bg-[#0D3B66] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#1F5E9C]"
              >
                Что получает партнёр
              </a>
              <a
                href="#cta"
                className="rounded-2xl border border-[#C7D0DB] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[#1A2B3C] hover:bg-white"
              >
                Оставить заявку
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#C7D0DB] bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  label: "01 — Ясная логика",
                  title: "Причина → решение → результат",
                  text: "Понимаете, что делать и почему — без угадываний и бесконечных проб.",
                  color: "#3FB4E6",
                },
                {
                  label: "02 — Методы и приёмы",
                  title: "Отобрано и проверено",
                  text: "В системе оставлено то, что реально работает. Лишнее — отброшено.",
                  color: "#00A99D",
                },
                {
                  label: "03 — Алгоритмы",
                  title: "Понятный ход приёма",
                  text: "Структура работы помогает сохранять ясность и уверенность на практике.",
                  color: "#3FB4E6",
                },
                {
                  label: "04 — Эксклюзивность",
                  title: "Разработки и инструменты",
                  text: "Авторские решения и разработки внутри системы создают конкурентное преимущество.",
                  color: "#B9A7D9",
                },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">{c.label}</div>
                  <div className="mt-1 font-semibold text-[#1A2B3C]">{c.title}</div>
                  <div className="mt-2 text-sm text-[#6B7785]">{c.text}</div>
                  <div className="mt-3 h-1.5 w-20 rounded-full" style={{ background: c.color }} />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#C7D0DB] bg-[#EEF3F8]/70 backdrop-blur p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-9 w-9 rounded-2xl bg-gradient-to-br from-[#3FB4E6] to-[#00A99D]" />
                <div>
                  <div className="text-sm font-semibold text-[#1A2B3C]">Что важно</div>
                  <p className="mt-1 text-sm text-[#6B7785]">
                    Велнейро сочетает глубину и практичность: система даёт ясные механизмы работы — и при этом остаётся живой,
                    обновляемой и исследовательской.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section
        id="partners"
        className="mx-auto max-w-6xl px-4 py-20 scroll-mt-24 border-t border-[#C7D0DB]/70 bg-[#F2F2F2]"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C7D0DB] bg-white/70 px-3 py-1 text-xs text-[#6B7785]">
            <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
            Партнёрство Велнейро
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-[#1A2B3C]">
            Что получает партнёр Велнейро
          </h2>

          <p className="mt-4 text-[#6B7785] leading-relaxed">
            Партнёрство с Велнейро — это доступ к целостной системе, в которой уже собраны, структурированы и проверены методы,
            инструменты и подходы.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Систему методов и приёмов",
              text: "Структурированная логика работы, позволяющая уверенно применять методы на практике.",
            },
            {
              title: "Обучение и передачу знаний",
              text: "Обучающие программы, которые формируют понимание, а не механическое повторение.",
            },
            {
              title: "Эксклюзивные разработки",
              text: "Авторские методы и технические решения внутри экосистемы Велнейро.",
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
              text: "Партнёр работает в системе постоянного развития и остаётся всегда актуален.",
            },
          ].map((item, i) => (
            <div key={i} className="rounded-3xl border border-[#C7D0DB] bg-white p-6">
              <div className="text-lg font-semibold text-[#1A2B3C]">{item.title}</div>
              <p className="mt-2 text-sm text-[#6B7785]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section id="steps" className="mx-auto max-w-6xl px-4 py-20 border-t border-[#C7D0DB]/70 scroll-mt-24 bg-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C7D0DB] bg-white/70 px-3 py-1 text-xs text-[#6B7785]">
              <span className="h-2 w-2 rounded-full bg-[#3FB4E6]" />
              Запуск партнёра
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-[#1A2B3C]">
              Путь партнёра: ясно, спокойно, по шагам
            </h2>

            <p className="mt-4 text-[#6B7785] leading-relaxed">
              В Велнейро процесс выстроен так, чтобы у вас были{" "}
              <span className="font-medium text-[#1A2B3C]">понимание, ясность и уверенность</span> на каждом этапе.
            </p>

            <div className="mt-7 rounded-3xl border border-[#C7D0DB] bg-[#EEF3F8]/70 backdrop-blur p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#1A2B3C]">Опора партнёра</div>
              <p className="mt-2 text-sm text-[#6B7785]">
                Вы идёте по системе, где уже собраны методы, обучение и инструменты. Это даёт{" "}
                <span className="font-medium text-[#1A2B3C]">уверенность и поддержку</span> на каждом этапе работы и развития.
              </p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#economics"
                className="rounded-2xl bg-[#0D3B66] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#1F5E9C]"
              >
                Посмотреть экономику
              </a>
              <a
                href="#cta"
                className="rounded-2xl border border-[#C7D0DB] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[#1A2B3C] hover:bg-white"
              >
                Оставить заявку
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#C7D0DB] bg-white/70 p-6 shadow-sm backdrop-blur">
            <ol className="relative space-y-6">
              {[
                {
                  step: "1",
                  title: "Знакомство и диалог",
                  text: "Вы получаете презентацию, знакомитесь с философией и возможностями. Обсуждаем цели, формат участия и ожидания.",
                  dot: "bg-[#00A99D]",
                },
                {
                  step: "2",
                  title: "Выбор формата и модели",
                  text: "Определяем оптимальную модель: личная практика, центр с командой или партнёрский формат — с учётом города и ресурсов.",
                  dot: "bg-[#3FB4E6]",
                },
                {
                  step: "3",
                  title: "Обучение и освоение системы",
                  text: "Обучение выстроено так, чтобы сформировать понимание и уверенность в применении методов на практике.",
                  dot: "bg-[#0D3B66]",
                },
                {
                  step: "4",
                  title: "Подготовка к запуску",
                  text: "Параллельно формируем структуру работы, методические материалы и процессы. Помогаем избежать типичных ошибок.",
                  dot: "bg-[#3FB4E6]",
                },
                {
                  step: "5",
                  title: "Старт практической работы",
                  text: "Первые приёмы, обратная связь, уточнение деталей. Вы развиваете практику в контакте с системой.",
                  dot: "bg-[#00A99D]",
                },
                {
                  step: "6",
                  title: "Сопровождение и развитие",
                  text: "Поддержка, ответы, развитие навыков и обновления методов. Вы растёте вместе с системой и остаётесь актуальны.",
                  dot: "bg-[#0D3B66]",
                },
              ].map((item, i, arr) => (
                <li key={i} className="relative pl-10">
                  {i !== arr.length - 1 && <div className="absolute left-[18px] top-7 h-[calc(100%+8px)] w-px bg-[#C7D0DB]" />}

                  <div className={`absolute left-3 top-1.5 h-3 w-3 rounded-full ${item.dot}`} />

                  <div className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="text-sm font-semibold text-[#1A2B3C]">{item.title}</div>
                      <div className="text-xs text-[#6B7785]">Этап {item.step}</div>
                    </div>
                    <p className="mt-2 text-sm text-[#6B7785]">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ECONOMICS */}
      <section
        id="economics"
        className="mx-auto max-w-6xl px-4 py-20 border-t border-[#C7D0DB]/70 scroll-mt-24 bg-[#F2F2F2]"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C7D0DB] bg-white/70 px-3 py-1 text-xs text-[#6B7785]">
              <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
              Экономика и логика модели
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-[#1A2B3C]">
              Понятная модель, честная логика, без “обещаний”
            </h2>

            <p className="mt-4 text-[#6B7785] leading-relaxed">
              Экономика опирается на три устойчивых источника ценности:{" "}
              <span className="font-medium text-[#1A2B3C]">системная логика</span>,{" "}
              <span className="font-medium text-[#1A2B3C]">обучение и сопровождение</span>,{" "}
              <span className="font-medium text-[#1A2B3C]">эксклюзивные разработки</span>.
            </p>

            <p className="mt-4 text-[#6B7785] leading-relaxed">
              Мы не публикуем “цифры в вакууме”: финмодель зависит от города, формата, загрузки и команды. Дадим пример по
              запросу — по вашим входным данным.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-2xl bg-[#0D3B66] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#1F5E9C]"
              >
                Запросить пример финмодели
              </a>
              <a
                href="#faq"
                className="rounded-2xl border border-[#C7D0DB] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[#1A2B3C] hover:bg-white"
              >
                Вопросы и ответы
              </a>
            </div>

            <div className="mt-7 rounded-3xl border border-[#C7D0DB] bg-white/70 p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#1A2B3C]">Что делает модель сильнее</div>
              <p className="mt-2 text-sm text-[#6B7785]">
                Эксклюзивные разработки и инструменты — то, что сложнее всего скопировать. А постоянное обновление подходов
                помогает оставаться всегда актуальными.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-[#C7D0DB] bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                {
                  label: "1) Практика",
                  title: "Приёмы и программы",
                  text: "Доход формируется из регулярной практики и программ сопровождения.",
                  bar: "#3FB4E6",
                },
                {
                  label: "2) Обучение",
                  title: "Рост компетенций",
                  text: "Обучение повышает качество и уверенность, а значит — доверие и стабильность.",
                  bar: "#00A99D",
                },
                {
                  label: "3) Эксклюзив",
                  title: "Разработки и инструменты",
                  text: "Технологическая дифференциация: методы и решения внутри экосистемы Велнейро.",
                  bar: "#B9A7D9",
                },
                {
                  label: "4) Устойчивость",
                  title: "Система развития",
                  text: "Обновления, сопровождение, методическая база — чтобы партнёр рос вместе с системой.",
                  bar: "#0D3B66",
                },
              ].map((c, i) => (
                <div key={i} className="rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">{c.label}</div>
                  <div className="mt-1 font-semibold text-[#1A2B3C]">{c.title}</div>
                  <div className="mt-2 text-sm text-[#6B7785]">{c.text}</div>
                  <div className="mt-3 h-1.5 w-20 rounded-full" style={{ background: c.bar }} />
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-[#C7D0DB] bg-white p-4">
              <div className="text-xs text-[#6B7785]">Как читать финмодель</div>
              <ul className="mt-2 space-y-2 text-sm text-[#6B7785]">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3FB4E6]" />
                  Формат: личная практика / центр / команда
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#00A99D]" />
                  Загрузка: количество клиентов и повторяемость
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#0D3B66]" />
                  Структура: расходы, процессы, роль партнёра
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl border border-[#C7D0DB] bg-[#EEF3F8]/70 backdrop-blur p-4">
              <div className="text-xs text-[#6B7785]">Важно</div>
              <div className="mt-1 text-sm text-[#6B7785]">
                Финмодель обсуждаем по входным данным — поэтому пример даём в презентации по запросу.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-20 border-t border-[#C7D0DB]/70 scroll-mt-24 bg-white">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C7D0DB] bg-white/70 px-3 py-1 text-xs text-[#6B7785]">
              <span className="h-2 w-2 rounded-full bg-[#0D3B66]" />
              FAQ
            </div>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl text-[#1A2B3C]">
              Вопросы и ответы — спокойно и по делу
            </h2>

            <p className="mt-4 text-[#6B7785] leading-relaxed">
              Мы заранее отвечаем на основные вопросы партнёров. Это помогает принять решение без суеты и без лишних ожиданий.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cta"
                className="rounded-2xl bg-[#0D3B66] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#1F5E9C]"
              >
                Оставить заявку
              </a>
              <a
                href="#partners"
                className="rounded-2xl border border-[#C7D0DB] bg-white/70 px-6 py-3 text-center text-sm font-semibold text-[#1A2B3C] hover:bg-white"
              >
                Вернуться к партнёрству
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-[#C7D0DB] bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="space-y-3">
              {faqs.map((item, idx) => (
                <details key={idx} className="group rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#1A2B3C]">{item.q}</span>
                    <span className="text-[#6B7785] transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-[#6B7785] leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA with lead form */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-20 border-t border-[#C7D0DB]/70 scroll-mt-24 bg-[#F2F2F2]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-start">
          {/* LEFT — мягкая инфо-карточка вместо чёрного блока */}
          <div className="rounded-3xl border border-[#C7D0DB] bg-white p-8 text-[#1A2B3C] shadow-sm">
            <div className="mb-6 h-2 w-24 rounded-full bg-gradient-to-r from-[#3FB4E6] to-[#00A99D]" />
            <h2 className="text-2xl font-semibold tracking-tight">Заявка на презентацию Велнейро</h2>
            <p className="mt-3 max-w-xl text-[#6B7785]">
              Оставьте контакты — и заявка уйдёт автоматически: <b className="text-[#1A2B3C]">в Telegram</b> и{" "}
              <b className="text-[#1A2B3C]">на Email</b>.
              <br />
              <span className="text-[#6B7785]">Если что-то пойдёт не так — вы всё равно сможете скопировать текст заявки.</span>
            </p>

            <div className="mt-6 rounded-2xl border border-[#C7D0DB] bg-[#EEF3F8]/70 backdrop-blur p-4">
              <div className="text-xs text-[#6B7785]">Взрослый принцип</div>
              <div className="mt-1 text-sm text-[#6B7785]">
                Без громких обещаний. Сначала — система, формат и условия. Затем — решение.
              </div>
            </div>
          </div>

          {/* RIGHT — форма */}
          <div className="rounded-3xl border border-[#C7D0DB] bg-white p-6 shadow-sm">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-[#1A2B3C]">Имя *</label>
                  <input
                    value={form.name}
                    onChange={(e) => setField("name", e.target.value)}
                    onBlur={() => markTouched("name")}
                    placeholder="Как к вам обращаться"
                    className={[
                      "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition",
                      touched.name && !required.name ? "border-red-400" : "border-[#C7D0DB]",
                      "focus:border-[#1F5E9C]",
                    ].join(" ")}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#1A2B3C]">Контакт (TG/WhatsApp/Email) *</label>
                  <input
                    value={form.contact}
                    onChange={(e) => setField("contact", e.target.value)}
                    onBlur={() => markTouched("contact")}
                    placeholder="@telegram или +7... или email"
                    className={[
                      "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition",
                      touched.contact && !required.contact ? "border-red-400" : "border-[#C7D0DB]",
                      "focus:border-[#1F5E9C]",
                    ].join(" ")}
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#1A2B3C]">Город *</label>
                  <input
                    value={form.city}
                    onChange={(e) => setField("city", e.target.value)}
                    onBlur={() => markTouched("city")}
                    placeholder="Ваш город"
                    className={[
                      "mt-2 w-full rounded-2xl border px-4 py-3 text-sm outline-none transition",
                      touched.city && !required.city ? "border-red-400" : "border-[#C7D0DB]",
                      "focus:border-[#1F5E9C]",
                    ].join(" ")}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-[#1A2B3C]">Формат интереса</label>
                    <select
                      value={form.format}
                      onChange={(e) => setField("format", e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#C7D0DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#1F5E9C]"
                    >
                      <option>Личная практика</option>
                      <option>Центр с командой</option>
                      <option>Партнёрский формат</option>
                      <option>Инвестор / управляющий</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-[#1A2B3C]">Кто вы</label>
                    <select
                      value={form.background}
                      onChange={(e) => setField("background", e.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#C7D0DB] bg-white px-4 py-3 text-sm outline-none focus:border-[#1F5E9C]"
                    >
                      <option>Специалист</option>
                      <option>Предприниматель</option>
                      <option>Руководитель центра</option>
                      <option>Ищу новое дело</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-[#1A2B3C]">Комментарий (необязательно)</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                    placeholder="Что важно учесть? Какие цели и ожидания?"
                    className="mt-2 w-full rounded-2xl border border-[#C7D0DB] px-4 py-3 text-sm outline-none focus:border-[#1F5E9C]"
                    rows={4}
                  />
                </div>

                <label className="flex items-start gap-3 rounded-2xl border border-[#C7D0DB] bg-[#F2F2F2] p-4">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setField("consent", e.target.checked)}
                    onBlur={() => markTouched("consent")}
                    className="mt-1"
                  />
                  <span className="text-xs text-[#6B7785]">
                    Я согласен(на) на обработку контактных данных для связи по запросу презентации.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit || sending}
                  className={[
                    "w-full rounded-2xl px-6 py-3 text-sm font-semibold text-white transition",
                    canSubmit && !sending ? "bg-[#0D3B66] hover:bg-[#1F5E9C]" : "bg-[#C7D0DB] cursor-not-allowed",
                  ].join(" ")}
                >
                  {sending ? "Отправляю..." : "Отправить заявку"}
                </button>

                <p className="text-xs text-[#6B7785]">Данные отправляются на сервер, затем — в Telegram и на Email.</p>
              </form>
            ) : (
              <div>
                <div className="rounded-3xl border border-[#C7D0DB] bg-white p-5">
                  <div className="text-sm font-semibold text-[#1A2B3C]">
                    {sendError ? "Заявка сохранена, но авто-отправка не прошла ⚠️" : "Заявка отправлена ✅"}
                  </div>
                  <p className="mt-2 text-sm text-[#6B7785]">
                    {sendError
                      ? sendError
                      : "Я получил заявку. Если хотите — добавьте ещё пару деталей в сообщении."}
                  </p>

                  <div className="mt-4 rounded-2xl border border-[#C7D0DB] bg-[#F2F2F2] p-4">
                    <pre className="whitespace-pre-wrap text-xs text-[#1A2B3C]">{leadText}</pre>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(leadText);
                        } catch {}
                      }}
                      className="rounded-2xl bg-[#0D3B66] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#1F5E9C]"
                    >
                      Скопировать текст
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setTouched({});
                        setSendError(null);
                      }}
                      className="rounded-2xl border border-[#C7D0DB] bg-white px-6 py-3 text-center text-sm font-semibold text-[#1A2B3C] hover:bg-[#F2F2F2]"
                    >
                      Отправить ещё раз
                    </button>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border border-[#C7D0DB] bg-white p-4">
                  <div className="text-xs text-[#6B7785]">Подсказка</div>
                  <div className="mt-1 text-sm text-[#6B7785]">
                    Если хотите, напишите: желаемый формат (личная практика/центр), опыт, ресурс и сроки.
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#C7D0DB]/70 py-10 bg-white">
        <div className="mx-auto max-w-6xl px-4 text-sm text-[#6B7785]">
          © {new Date().getFullYear()} Велнейро
        </div>
      </footer>
    </main>
  );
}
