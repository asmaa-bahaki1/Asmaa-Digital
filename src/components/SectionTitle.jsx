export default function SectionTitle({ eyebrow, title, text, center = true }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      {eyebrow && <div className="mb-3 text-sm font-bold uppercase tracking-[.25em] text-brand-600">{eyebrow}</div>}
      <h2 className="font-display text-4xl font-bold leading-tight text-slate-900 md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
    </div>
  );
}