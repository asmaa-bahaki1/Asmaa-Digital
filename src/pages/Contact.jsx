import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { t, language } = useLanguage();
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", typeProjet: t.contact.types[0], message: "" });

  function handleChange(e) {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    const whatsappNumber = "212623468868";
    const labels = t.contact;
    const text = `${labels.whatsappMessage}

${labels.name} : ${form.nom}
${labels.email} : ${form.email}
${labels.phone} : ${form.telephone || (language === "ar" ? "غير محدد" : language === "en" ? "Not provided" : "Non renseigné")}
${labels.projectType} : ${form.typeProjet}

${labels.message} :
${form.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <section className="bg-grid px-5 py-20 lg:px-8">
        <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.intro}/>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
        <div className="rounded-[2rem] bg-brand-700 p-8 text-white md:p-10">
          <h2 className="font-display text-3xl font-bold">{t.contact.stay}</h2>
          <p className="mt-4 leading-7 text-white/75">{t.contact.stayText}</p>
          <div className="mt-9 space-y-6">
            <a href="tel:+212623468868" className="flex items-start gap-4"><Phone/><span><b className="block">{t.contact.phone}</b><span className="text-white/70">+212 6 23 46 88 68</span></span></a>
            <a href="mailto:bikaasmaa334@gmail.com" className="flex items-start gap-4"><Mail/><span><b className="block">{t.contact.email}</b><span className="text-white/70">bikaasmaa334@gmail.com</span></span></a>
            <a href="https://wa.me/212623468868" target="_blank" rel="noreferrer" className="flex items-start gap-4"><MessageCircle/><span><b className="block">{t.contact.whatsapp}</b><span className="text-white/70">{t.contact.whatsappText}</span></span></a>
            <div className="flex items-start gap-4"><MapPin/><span><b className="block">{t.contact.location}</b><span className="text-white/70">Casablanca · Maroc</span></span></div>
            <div className="flex items-start gap-4"><Clock/><span><b className="block">{t.contact.availability}</b><span className="text-white/70">{t.contact.hours}</span></span></div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-[2rem] border border-brand-100 bg-white p-7 shadow-sm md:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="text-sm font-semibold">{t.contact.name}<input required name="nom" value={form.nom} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" placeholder={t.contact.namePlaceholder}/></label>
            <label className="text-sm font-semibold">{t.contact.email}<input required type="email" name="email" value={form.email} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" placeholder={t.contact.emailPlaceholder}/></label>
            <label className="text-sm font-semibold">{t.contact.phone}<input name="telephone" value={form.telephone} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" placeholder={t.contact.phonePlaceholder}/></label>
            <label className="text-sm font-semibold">{t.contact.projectType}<select name="typeProjet" value={form.typeProjet} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500">{t.contact.types.map(x => <option key={x}>{x}</option>)}</select></label>
          </div>
          <label className="mt-5 block text-sm font-semibold">{t.contact.message}<textarea required rows="7" name="message" value={form.message} onChange={handleChange} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500" placeholder={t.contact.messagePlaceholder}/></label>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-4 font-bold text-white hover:bg-brand-700"><Send size={18}/> {t.contact.send}</button>
        </form>
      </section>
    </main>
  );
}
