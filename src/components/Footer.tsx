import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { lang, t } = useLang();
  const navItems = [
    { label: t.nav.home[lang], href: "/" },
    { label: t.nav.about[lang], href: "/about" },
    { label: t.nav.strategy[lang], href: "/strategy" },
    { label: t.nav.areas[lang], href: "/areas" },
    { label: t.nav.projects[lang], href: "/projects" },
    { label: t.nav.partnerships[lang], href: "/partnerships" },
    { label: t.nav.impact[lang], href: "/impact" },
    { label: t.nav.contact[lang], href: "/contact" },
  ];

  return (
    <footer className="gradient-hero text-primary-foreground relative">
      {/* Back to top */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-6 start-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <ArrowUp className="text-accent-foreground" size={20} />
      </motion.button>

      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary-foreground/15 flex items-center justify-center backdrop-blur-sm">
                <span className="font-cairo font-bold text-xl">ن</span>
              </div>
              <span className="font-cairo font-bold text-xl">{lang === "ar" ? "نماء" : "Nama"}</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-loose">{t.footer.description[lang]}</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">{t.footer.quickLinks[lang]}</h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-primary-foreground/60 hover:text-primary-foreground hover:translate-x-1 rtl:hover:-translate-x-1 transition-all duration-200 text-sm inline-block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-5">{t.footer.contactInfo[lang]}</h4>
            <div className="flex flex-col gap-4">
              {[
                { icon: Mail, text: t.footer.email[lang] },
                { icon: Phone, text: t.footer.phone[lang] },
                { icon: MapPin, text: lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-primary-foreground/60 group">
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center group-hover:bg-primary-foreground/20 transition-colors">
                    <Icon size={14} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} {lang === "ar" ? "جمعية نماء لتنمية القطاع غير الربحي" : "Nama Association for Non-Profit Sector Development"} — {t.footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
