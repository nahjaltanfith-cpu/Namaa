import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHero title={t.contact.title[lang]} subtitle={t.contact.subtitle[lang]} />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <AnimatedSection direction="left" className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.name[lang]}</label>
                      <input
                        type="text"
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.email[lang]}</label>
                      <input
                        type="email"
                        required
                        className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.subject[lang]}</label>
                    <input
                      type="text"
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.message[lang]}</label>
                    <textarea
                      rows={6}
                      required
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-primary text-primary-foreground font-bold shadow-xl hover:shadow-2xl transition-shadow"
                  >
                    <Send size={18} />
                    {submitted
                      ? (lang === "ar" ? "✓ تم الإرسال" : "✓ Sent!")
                      : t.contact.send[lang]
                    }
                  </motion.button>
                </form>
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection direction="right" className="lg:col-span-2">
                <div className="p-8 rounded-3xl bg-soft border border-border h-full">
                  <h3 className="text-xl font-bold text-foreground mb-8">{t.contact.info[lang]}</h3>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: lang === "ar" ? "البريد الإلكتروني" : "Email", value: "info@nama.org.sa" },
                      { icon: Phone, label: lang === "ar" ? "الهاتف" : "Phone", value: "+966 XX XXX XXXX" },
                      { icon: MapPin, label: lang === "ar" ? "العنوان" : "Address", value: lang === "ar" ? "المملكة العربية السعودية" : "Saudi Arabia" },
                    ].map(({ icon: Icon, label, value }, i) => (
                      <motion.div key={i} whileHover={{ x: lang === "ar" ? -4 : 4 }} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="text-primary-foreground" size={20} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-0.5">{label}</p>
                          <p className="font-semibold text-foreground">{value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
