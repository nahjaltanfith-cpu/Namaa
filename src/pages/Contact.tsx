import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(2000),
});

const Contact = () => {
  const { lang, t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as string;
        fieldErrors[field] = lang === "ar" ? "هذا الحقل مطلوب" : "This field is required";
        if (err.code === "too_big") fieldErrors[field] = lang === "ar" ? "النص طويل جداً" : "Too long";
        if (field === "email" && err.code === "invalid_string") fieldErrors[field] = lang === "ar" ? "بريد إلكتروني غير صالح" : "Invalid email";
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-3.5 rounded-xl border ${errors[field] ? "border-destructive" : "border-border"} bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all`;

  return (
    <PageTransition>
      <div className="min-h-screen">
        
        <PageHero title={t.contact.title[lang]} subtitle={t.contact.subtitle[lang]} />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Form */}
              <AnimatedSection direction="left" className="lg:col-span-3">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-20 px-8 rounded-3xl bg-soft border border-border"
                  >
                    <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mb-6">
                      <CheckCircle2 className="text-gold-foreground" size={36} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {lang === "ar" ? "تم إرسال رسالتك بنجاح!" : "Message Sent Successfully!"}
                    </h3>
                    <p className="text-muted-foreground">
                      {lang === "ar" ? "سنتواصل معك في أقرب وقت ممكن" : "We'll get back to you as soon as possible"}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.name[lang]}</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          maxLength={100}
                          className={inputClass("name")}
                        />
                        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.email[lang]}</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          maxLength={255}
                          className={inputClass("email")}
                        />
                        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.subject[lang]}</label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        maxLength={200}
                        className={inputClass("subject")}
                      />
                      {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">{t.contact.message[lang]}</label>
                      <textarea
                        rows={6}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        maxLength={2000}
                        className={`${inputClass("message")} resize-none`}
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-gold-foreground font-bold shadow-xl hover:shadow-2xl transition-shadow"
                    >
                      <Send size={18} />
                      {t.contact.send[lang]}
                    </motion.button>
                  </form>
                )}
              </AnimatedSection>

              {/* Contact Info */}
              <AnimatedSection direction="right" className="lg:col-span-2">
                <div className="space-y-6">
                  <div className="p-8 rounded-3xl bg-soft border border-border">
                    <h3 className="text-xl font-bold text-foreground mb-8">
                      {lang === "ar" ? <>معلومات <span className="text-gradient-gold">التواصل</span></> : <><span className="text-gradient-gold">Contact</span> Information</>}
                    </h3>
                    <div className="space-y-6">
                      {[
                        { icon: Mail, label: lang === "ar" ? "البريد الإلكتروني" : "Email", value: "info@nama.org.sa" },
                        { icon: Phone, label: lang === "ar" ? "الهاتف" : "Phone", value: "+966 XX XXX XXXX" },
                        { icon: MapPin, label: lang === "ar" ? "العنوان" : "Address", value: lang === "ar" ? "جدة، المملكة العربية السعودية" : "Jeddah, Saudi Arabia" },
                        { icon: Clock, label: lang === "ar" ? "أوقات العمل" : "Working Hours", value: lang === "ar" ? "الأحد - الخميس: 8 ص - 4 م" : "Sun - Thu: 8 AM - 4 PM" },
                      ].map(({ icon: Icon, label, value }, i) => (
                        <motion.div key={i} whileHover={{ x: lang === "ar" ? -4 : 4 }} className="flex items-start gap-4 group">
                          <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Icon className="text-gold-foreground" size={20} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-0.5">{label}</p>
                            <p className="font-semibold text-foreground">{value}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-soft">
          <AnimatedSection className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>موقعنا على <span className="text-gradient-gold">الخريطة</span></> : <>Find Us on the <span className="text-gradient-gold">Map</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449771!2d39.15!3d21.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sar!2ssa!4v1700000000000!5m2!1sar!2ssa"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={lang === "ar" ? "موقع جمعية نماء" : "Nama Association Location"}
              />
            </div>
          </AnimatedSection>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
