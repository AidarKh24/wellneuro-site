export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm">
          <p className="text-sm font-semibold tracking-widest text-slate-500">
            wellneuro.ru
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
            Велнейро — центр здоровья и благополучия
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-700">
            Технический запуск. Далее добавим разделы: услуги, врачи, расписание,
            отзывы, и старт /franchise.
          </p>
        </div>
      </div>
    </main>
  );
}
