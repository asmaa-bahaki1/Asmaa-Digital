import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Globe2 } from "lucide-react";
import logo from "./images/logo.png";
import { useLanguage } from "../i18n/LanguageContext";
import { languageLabels } from "../i18n/translations";

const links = (t) => [
  ["/", t.nav.home],
  ["/services", t.nav.services],
  ["/portfolio", t.nav.portfolio],
  ["/a-propos", t.nav.about],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-100/70 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          <img src={logo} alt="BH Digital Studio" className="h-16 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links(t).map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) =>
              `text-sm font-semibold transition ${isActive ? "text-brand-600" : "text-slate-700 hover:text-brand-600"}`
            }>{label}</NavLink>
          ))}

          <div className="flex items-center gap-1 rounded-full border border-brand-100 bg-white p-1" aria-label="Language selector">
            <Globe2 size={16} className="mx-2 text-brand-600" />
            {Object.entries(languageLabels).map(([code, label]) => (
              <button key={code} type="button" onClick={() => setLanguage(code)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${language === code ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-brand-50"}`}>
                {label}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-full border border-brand-100 bg-white p-1 lg:hidden">
            {Object.entries(languageLabels).map(([code, label]) => (
              <button key={code} type="button" onClick={() => setLanguage(code)}
                className={`rounded-full px-2.5 py-1.5 text-xs font-bold ${language === code ? "bg-brand-600 text-white" : "text-slate-600"}`}>
                {label}
              </button>
            ))}
          </div>
          <Link to="/contact" className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition hover:-translate-y-0.5 hover:bg-brand-700 lg:flex">
            <Phone size={16} /> {t.nav.contact}
          </Link>
          <button type="button" onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? t.nav.close : t.nav.open} aria-expanded={open}
            className="flex items-center justify-center rounded-lg p-2 text-slate-800 transition hover:bg-brand-50 lg:hidden">
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute left-1/2 top-full h-[73dvh] w-[88%] -translate-x-1/2 rounded-2xl border border-brand-100 bg-white shadow-xl lg:hidden">
          <nav className="flex h-full flex-col gap-6 overflow-y-auto p-4 pt-6">
            {links(t).map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)}
                className={({ isActive }) => `rounded-xl px-4 py-4 text-center text-lg font-semibold transition ${isActive ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-brand-50"}`}>
                {label}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-4 text-lg font-bold text-white transition hover:bg-brand-700">
              <Phone size={16} /> {t.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
