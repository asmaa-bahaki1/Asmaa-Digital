import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import logo1 from "./images/logo1.png";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="mt-20 bg-[#24141f] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="mb-2 flex items-center gap-3">
            <div className="grid h-16 w-16 place-items-center font-display text-lg">
              <img src={logo1} alt="BH Digital Studio" className="w-23 h-23 mr-3" />
            </div>
            <div>
              <div className="font-bold tracking-[.25em]">BH DIGITAL STUDIO</div>
              <div className="mt-0.5 text-xs text-pink-200">Ideas to digital reality ♡</div>
            </div>
          </div>
          <p className="max-w-md leading-7 text-white/65">{t.footer.description}</p>
          <div className="mt-6 flex gap-3">
            <a href="https://www.instagram.com/bh_digital_studio/" aria-label="Instagram" className="rounded-full bg-white/10 p-3 hover:bg-brand-600"><Instagram size={18}/></a>
            <a href="https://www.linkedin.com/in/asmaa-bahaki-51269b252/?isSelfProfile=true" aria-label="LinkedIn" className="rounded-full bg-white/10 p-3 hover:bg-brand-600"><Linkedin size={18}/></a>
            <a href="https://web.facebook.com/profile.php?id=61594942629036" aria-label="Facebook" className="rounded-full bg-white/10 p-3 hover:bg-brand-600"><Facebook size={18}/></a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">{t.footer.navigation}</h3>
          <div className="space-y-3 text-white/65">
            <Link className="block hover:text-white" to="/">{t.nav.home}</Link>
            <Link className="block hover:text-white" to="/services">{t.nav.services}</Link>
            <Link className="block hover:text-white" to="/portfolio">{t.nav.portfolio}</Link>
            <Link className="block hover:text-white" to="/a-propos">{t.nav.about}</Link>
            <Link className="block hover:text-white" to="/contact">{t.nav.contact}</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">{t.footer.contact}</h3>
          <div className="space-y-4 text-sm text-white/70">
            <a href="tel:+212623468868" className="flex gap-3 hover:text-white"><Phone size={18}/> +212 6 23 46 88 68</a>
            <a href="mailto:bikaasmaa334@gmail.com" className="flex gap-3 hover:text-white"><Mail size={18}/> bikaasmaa334@gmail.com</a>
            <div className="flex gap-3"><MapPin size={18}/> {t.footer.city}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">
        © {new Date().getFullYear()} BH Digital Studio. {t.footer.rights}
      </div>
    </footer>
  );
}
