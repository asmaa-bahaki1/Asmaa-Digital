import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return <main className="grid min-h-[60vh] place-items-center px-5 text-center"><div><div className="font-display text-7xl font-bold text-brand-600">404</div><h1 className="mt-3 text-3xl font-bold">{t.notFound.title}</h1><Link to="/" className="mt-6 inline-block rounded-full bg-brand-600 px-6 py-3 font-bold text-white">{t.notFound.back}</Link></div></main>;
}
