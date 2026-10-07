import { Link } from "react-router-dom";
import { ArrowRight, Globe, Smartphone, Code2, CheckCircle2, Star, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import logo from "../components/images/logo.png";
import { useLanguage } from "../i18n/LanguageContext";

const icons = [Globe, Smartphone, Code2];
const projects = [
  { name: "Maison Sillage", type: "E-commerce premium", tag: "Shopify" },
  { name: "Dugshy", type: "Boutique digitale", tag: "Next.js" },
  { name: "Business Dashboard", type: "Solution web", tag: "React" },
];

export default function Home() {
  const { t } = useLanguage();
  return (
    <main>
      <section className="relative overflow-hidden bg-grid">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"/>
        <div className="absolute -right-20 top-24 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl"/>
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-4 py-2 text-sm font-semibold text-brand-700">
              <Sparkles size={16}/> {t.home.badge}
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-slate-950 md:text-7xl">
              {t.home.title} <span className="gradient-text">{t.home.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">{t.home.intro}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-bold text-white shadow-xl shadow-brand-500/20 hover:bg-brand-700">
                {t.home.start} <ArrowRight size={19}/>
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-7 py-4 font-bold text-brand-700 hover:bg-brand-50">
                {t.home.projects}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              {t.home.checks.map((x) => <span key={x} className="flex items-center gap-2"><CheckCircle2 className="text-brand-600" size={18}/> {x}</span>)}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-pink-200 to-white blur-xl"/>
            <div className="relative rounded-[2rem] border border-white bg-white p-4 shadow-soft">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-brand-50 via-white to-pink-100 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-brand-300"/><span className="h-3 w-3 rounded-full bg-brand-200"/><span className="h-3 w-3 rounded-full bg-pink-100"/>
                  <div className="ml-auto h-5 w-28 rounded-full bg-white"/>
                </div>
                <div className="grid min-h-[390px] place-items-center rounded-2xl border border-brand-100 bg-white/80 p-8 text-center">
                  <div>
                    <div className="mx-auto grid h-16 w-16 place-items-center border-slate-900 font-display text-2xl">
                      <img src={logo} alt="" className="w-23 h-23" />
                    </div>
                    <div className="mt-2 text-xs font-bold tracking-[.3em] text-brand-700">BH DIGITAL STUDIO</div>
                    <h3 className="mt-5 font-display text-4xl font-bold">{t.home.services[2].title}<br/><span className="gradient-text">{t.home.titleAccent}</span></h3>
                    <Link to="/services"><button className="mt-6 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white">{t.home.discover} →</button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-6 hidden rounded-2xl border border-brand-100 bg-white p-4 shadow-soft sm:block">
              <div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-brand-700"><Star size={18} fill="currentColor"/></div><div><b>{t.home.premium}</b><div className="text-xs text-slate-500">{t.home.premiumText}</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle eyebrow={t.home.expertise} title={t.home.expertiseTitle} text={t.home.expertiseText}/>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.home.services.map(({title, text}, i) => {
            const Icon = icons[i];
            return <div key={title} className="group rounded-3xl border border-brand-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className={`mb-7 grid h-16 w-16 place-items-center rounded-2xl ${["bg-pink-100","bg-fuchsia-100","bg-rose-100"][i]} text-brand-700`}><Icon size={30}/></div>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
              <Link to="/services" className="mt-7 inline-flex items-center gap-2 font-bold text-brand-700">{t.home.learnMore} <ArrowRight size={17}/></Link>
            </div>
          })}
        </div>
      </section>

      <section className="bg-[#fff0f6] py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow={t.nav.portfolio} title={t.home.portfolioTitle} text={t.home.portfolioText}/>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <div key={p.name} className="overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm">
                <div className={`h-56 p-6 ${i===0 ? "bg-gradient-to-br from-[#20151b] to-[#7c314f]" : i===1 ? "bg-gradient-to-br from-pink-100 to-brand-300" : "bg-gradient-to-br from-slate-900 to-brand-700"}`}>
                  <div className="flex h-full items-end"><div className="rounded-2xl bg-white/90 p-4 backdrop-blur"><div className="text-xs font-bold uppercase tracking-widest text-brand-700">{p.tag}</div><div className="font-display text-2xl font-bold">{p.name}</div></div></div>
                </div>
                <div className="p-6"><h3 className="text-xl font-bold">{p.name}</h3><p className="mt-1 text-slate-500">{p.type}</p></div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link to="/portfolio" className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-6 py-3 font-bold text-brand-700">{t.home.viewPortfolio} <ArrowRight size={18}/></Link></div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <div className="rounded-[2rem] bg-brand-700 px-7 py-14 text-white shadow-soft md:px-14">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-white/15"><Sparkles/></div>
          <h2 className="font-display text-4xl font-bold md:text-5xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">{t.home.ctaText}</p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-bold text-brand-700 hover:bg-pink-50">{t.home.ctaButton}</Link>
        </div>
      </section>
    </main>
  );
}
