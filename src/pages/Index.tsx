import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection, { useCounter } from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Eye, Target, Shield, HeartHandshake, Star, Users, Lightbulb, Zap, Rocket, ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-nama-800/70" />
          </div>
          <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-nama-800 via-nama-700 to-nama-600 bg-[length:400%_400%] animate-gradient-shift" />
          
          {/* Floating shapes */}
          <motion.div
            animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute top-1/4 start-[10%] w-24 h-24 rounded-full bg-accent/10 blur-xl"
          />
          <motion.div
            animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-1/3 end-[15%] w-32 h-32 rounded-full bg-nama-600/10 blur-xl"
          />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-accent/20 backdrop-blur-md border border-accent/30 shadow-2xl"
            >
              <span className="font-cairo font-bold text-5xl text-primary-foreground">ن</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight"
            >
              {t.hero.title[lang]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl md:text-3xl text-primary-foreground/80 font-medium mb-6"
            >
              {t.hero.subtitle[lang]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="text-base md:text-lg text-primary-foreground/55 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              {t.hero.description[lang]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center gap-5"
            >
              <Link to="/about">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-base shadow-xl hover:shadow-2xl transition-shadow"
                >
                  {t.hero.cta1[lang]}
                  {lang === "ar" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </motion.span>
              </Link>
              <Link to="/projects">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-foreground/25 text-primary-foreground font-bold text-base hover:bg-primary-foreground/10 transition-colors"
                >
                  {t.hero.cta2[lang]}
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
              <ArrowDown className="text-primary-foreground/40" size={28} />
            </motion.div>
          </motion.div>
        </section>

        {/* Vision & Mission Quick */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <AnimatedSection direction="left">
                <div className="group p-10 rounded-3xl bg-soft border border-border hover:shadow-card-hover transition-all duration-500 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Eye className="text-primary-foreground" size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.vision.title[lang]}</h2>
                  <div className="w-12 h-1 rounded-full bg-accent mx-auto mb-5 group-hover:w-24 transition-all duration-500" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.vision.text[lang]}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="group p-10 rounded-3xl bg-soft border border-border hover:shadow-card-hover transition-all duration-500 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <Target className="text-accent-foreground" size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.mission.title[lang]}</h2>
                  <div className="w-12 h-1 rounded-full bg-accent mx-auto mb-5 group-hover:w-24 transition-all duration-500" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.mission.text[lang]}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.values.title[lang]}</h2>
              <div className="w-16 h-1 rounded-full bg-accent mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {t.values.items.map((item, i) => {
                const icons = [Shield, HeartHandshake, Star, Users, Lightbulb];
                const Icon = icons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="group flex flex-col items-center text-center p-7 rounded-2xl bg-background border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4"
                      >
                        <Icon className="text-primary-foreground" size={24} />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-sm">{item[lang]}</h3>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-24 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.impact.title[lang]}</h2>
              <div className="w-16 h-1 rounded-full bg-accent mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {t.impact.items.map((item, i) => (
                <CounterCard key={i} value={item.value} label={item.label[lang]} delay={i * 0.1} />
              ))}
            </div>
            <AnimatedSection delay={0.5} className="text-center mt-14">
              <Link to="/impact">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-primary-foreground/20 text-primary-foreground/80 hover:bg-primary-foreground/10 transition-colors text-sm font-medium"
                >
                  {lang === "ar" ? "المزيد عن أثرنا" : "More About Our Impact"}
                  {lang === "ar" ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                </motion.span>
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {lang === "ar" ? "شاركنا في صناعة التغيير" : "Join Us in Making a Difference"}
              </h2>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                {lang === "ar"
                  ? "نؤمن بأن التعاون هو المفتاح لتنمية القطاع غير الربحي. انضم إلينا لبناء مستقبل أفضل."
                  : "We believe collaboration is key to developing the non-profit sector. Join us in building a better future."}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-primary text-primary-foreground font-bold shadow-xl"
                  >
                    {t.nav.contact[lang]}
                  </motion.span>
                </Link>
                <Link to="/partnerships">
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary/20 text-foreground font-bold hover:bg-muted transition-colors"
                  >
                    {t.nav.partnerships[lang]}
                  </motion.span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

const CounterCard = ({ value, label, delay }: { value: number; label: string; delay: number }) => {
  const { count, ref } = useCounter(value);
  return (
    <AnimatedSection delay={delay}>
      <div ref={ref} className="text-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-4xl md:text-5xl font-bold mb-3 font-cairo"
        >
          {count > 0 ? `+${count.toLocaleString()}` : "0"}
        </motion.div>
        <p className="text-primary-foreground/60 text-sm font-medium">{label}</p>
      </div>
    </AnimatedSection>
  );
};

export default Index;
