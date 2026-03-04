import { useLang } from "@/i18n/LanguageContext";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { lang, t } = useLang();
  const navItems = [
    { label: t.nav.home[lang], href: "#home" },
    { label: t.nav.about[lang], href: "#vision" },
    { label: t.nav.strategy[lang], href: "#directions" },
    { label: t.nav.areas[lang], href: "#areas" },
    { label: t.nav.projects[lang], href: "#projects" },
    { label: t.nav.contact[lang], href: "#footer" },
  ];

  return (
    <footer id="footer" className="gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-cairo font-bold text-lg">ن</span>
              </div>
              <span className="font-cairo font-bold text-xl">{lang === "ar" ? "نماء" : "Nama"}</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{t.footer.description[lang]}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.quickLinks[lang]}</h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.contactInfo[lang]}</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail size={16} />
                <span>{t.footer.email[lang]}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone size={16} />
                <span>{t.footer.phone[lang]}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} />
                <span>{lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia"}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} {lang === "ar" ? "جمعية نماء" : "Nama Association"} - {t.footer.rights[lang]}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
