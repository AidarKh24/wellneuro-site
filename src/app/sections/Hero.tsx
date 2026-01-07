export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white">
      {/* Header */}
      <header className="absolute top-6 left-6 text-lg font-medium text-[#1A2B3C]">
        Велнейро
      </header>

      {/* Main content */}
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#1A2B3C] mb-6">
          Велнейро — экосистема интегративного оздоровления
        </h1>

        <p className="text-lg md:text-xl text-[#5F6F7E] mb-10 leading-relaxed">
          Мы создаём и развиваем систему, в которой специалисты работают
          на уровне причин, а не симптомов, используя квинтэссенцию
          эффективных методов, авторские протоколы и собственные разработки,
          недоступные вне экосистемы Велнейро.
        </p>

        <a
          href="#partnership"
          className="inline-block px-8 py-4 rounded-xl bg-[#0D3B66] text-white text-base font-medium hover:opacity-90 transition"
        >
          Исследовать возможности партнёрства
        </a>
      </div>
    </section>
  );
}
