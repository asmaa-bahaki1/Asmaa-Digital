import { ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

const projectData = [
  { title: "Moroccan Caftan", tech: "ReactJS · CSS", href: "https://www.linkedin.com/feed/update/urn:li:activity:7213930779687481345/", cls: "from-[#6e4433] to-[#e7b48c]" },
  { title: "HOTEL LINE", tech: "ReactJS · Tailwind CSS", href: "https://www.linkedin.com/feed/update/urn:li:activity:7332521997492436992/", cls: "from-[#6e4433] to-[#e7b48c]" },
  { title: "ShopBag", tech: "Next JS · Tailwind CSS", href: "https://www.linkedin.com/feed/update/urn:li:activity:7391913287010897920/", cls: "from-[#6e4433] to-[#e7b48c]" },
];

export default function Portfolio() {
  const { t } = useLanguage();
  return (
    <main>
      <section className="bg-grid px-5 py-20 lg:px-8">
        <SectionTitle eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} text={t.portfolio.intro}/>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {t.portfolio.items.map(([title, category, desc], i) => {
            const p = projectData[i];
            return <article key={title} className="group overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className={`relative h-64 bg-gradient-to-br ${p.cls} p-6`}>
                <div className="flex h-full items-end"><div className="rounded-2xl bg-white/90 p-4 backdrop-blur"><div className="text-xs font-bold uppercase tracking-widest text-brand-700">{category}</div><div className="font-display text-2xl font-bold">{title}</div></div></div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-brand-600">{p.tech}</div>
                <p className="mt-2 leading-7 text-slate-600">{desc}</p>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-brand-700 transition-colors hover:text-brand-900">
                  {t.portfolio.view}<ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1"/>
                </a>
              </div>
            </article>
          })}
        </div>
      </section>
    </main>
  );
}
