export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment} mb-8`}>
      {eyebrow && <span className="eyebrow mb-3.5 inline-flex">{eyebrow}</span>}
      <div className="relative">
        <h2 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-brand-900 leading-snug">
          {title}
        </h2>
        <div className={`h-1 w-16 bg-isi-gold-500 rounded mt-2.5 ${align === 'center' ? 'mx-auto' : ''}`}></div>
      </div>
      {description && (
        <p className="mt-3.5 text-sm md:text-base text-slate-600 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}

