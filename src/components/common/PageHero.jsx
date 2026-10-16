export default function PageHero({
  title,
  description,
  category = "Indian Statistical Institute",
}) {
  return (
    <section className="relative bg-[#002147] bg-gradient-to-r from-[#001530] via-[#002147] to-[#001530] text-white py-10 md:py-14 border-b-4 border-isi-gold-500 overflow-hidden shadow-lg">
      {/* Background Watermark */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 md:right-10 pointer-events-none opacity-15">
        <img
          src="/Indian-statistical-institute-logo.png"
          alt=""
          className="w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] object-contain filter invert select-none"
        />
      </div>

      <div className="container-shell relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#001530] border border-isi-gold-500/50 text-[11px] font-bold uppercase tracking-[0.2em] text-isi-gold-400 mb-3 shadow.sm">
            <span className="w-2 h-2 rounded-full bg-isi-gold-500"></span>
            {category}
          </div>
          <h1 className="font-serif text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight drop-shadow-sm">
            {title}
          </h1>
          {description && (
            <p className="mt-3.5 max-w-2xl text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-normal opacity-95">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
