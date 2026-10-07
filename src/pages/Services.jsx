import { Globe, ShoppingBag, Smartphone, Code2, Palette, ShieldCheck, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Globe, ShoppingBag, Smartphone, Code2, Palette, ShieldCheck];

export default function Services() {
  const { t } = useLanguage();
  return (
    <main>
      <section className="bg-grid px-5 py-20 lg:px-8">
        <SectionTitle eyebrow={t.services.eyebrow} title={t.services.title} text={t.services.intro}/>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map(([title, desc, points], i) => {
            const Icon = icons[i];
            return <article key={title} className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm hover:shadow-soft">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-700"><Icon/></div>
              <h2 className="mt-6 text-2xl font-bold">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{desc}</p>
              <ul className="mt-6 space-y-3">{points.map(x => <li key={x} className="flex gap-2 text-sm text-slate-700"><Check size={18} className="mt-0.5 shrink-0 text-brand-600"/>{x}</li>)}</ul>
              <Link to="/contact" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-700">{t.services.quote} <ArrowRight size={17}/></Link>
            </article>
          })}
        </div>
      </section>
    </main>
  );
}
