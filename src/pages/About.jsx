import { Heart, Target, Rocket, Users } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Target, Heart, Rocket, Users];

export default function About() {
  const { t } = useLanguage();
  return (
    <main>
      <section className="bg-grid px-5 py-20 lg:px-8">
        <SectionTitle eyebrow={t.about.eyebrow} title={t.about.title} text={t.about.intro}/>
      </section>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-br from-brand-100 to-white p-10">
          <div className="text-sm font-bold uppercase tracking-[.25em] text-brand-700">{t.about.vision}</div>
          <h2 className="mt-5 flex items-center gap-2 font-display text-4xl font-bold">{t.about.priority} <Heart className="mt-1.5" /></h2>
          <p className="mt-6 leading-8 text-slate-600">{t.about.text1}</p>
          <p className="mt-4 leading-8 text-slate-600">{t.about.text2}</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {t.about.values.map(([title, text], i) => {
            const Icon = icons[i];
            return <div key={title} className="rounded-3xl border border-brand-100 bg-white p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700"><Icon size={22}/></div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          })}
        </div>
      </section>
    </main>
  );
}
