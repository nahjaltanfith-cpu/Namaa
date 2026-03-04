import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowDown, ArrowLeft, ArrowRight, Eye, Target, Shield, HeartHandshake, Star, Users, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection, { useCounter } from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";

const heroImages = [hero1, hero2, hero3];
const memberImages = [member1, member2, member3, member4, member5];

const Index = () => {
  const { lang, t } = useLang();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero with Image Carousel */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Carousel Background */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img src={heroImages[currentSlide]} alt="" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-nama-800/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-nama-900/60 via-transparent to-nama-900/30" />

          {/* Slide indicators */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "w-10 bg-gold" : "w-4 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gold/20 backdrop-blur-md border border-gold/30 shadow-2xl"
            >
              <span className="font-cairo font-bold text-5xl text-gold-light">ن</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 leading-tight"
            >
              {lang === "ar" ? (
                <>جمعية <span className="text-gradient-gold">نماء</span></>
              ) : (
                <><span className="text-gradient-gold">Nama</span> Association</>
              )}
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
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-gold-foreground font-bold text-base shadow-xl hover:shadow-2xl transition-shadow"
                >
                  {t.hero.cta1[lang]}
                  {lang === "ar" ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                </motion.span>
              </Link>
              <Link to="/projects">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-gold/40 text-primary-foreground font-bold text-base hover:bg-gold/10 transition-colors"
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

        {/* Our Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>قصـ<span className="text-gradient-gold">تـنـا</span></> : <>Our <span className="text-gradient-gold">Story</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-8" />
              <p className="text-muted-foreground text-lg leading-loose max-w-3xl mx-auto">
                {t.about.story[lang]}
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <AnimatedSection direction="left">
                <div className="group p-10 rounded-3xl bg-background border border-border hover:shadow-card-hover transition-all duration-500 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 group-hover:scale-110 transition-all duration-500">
                    <Eye className="text-primary-foreground" size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.vision.title[lang]}</h2>
                  <div className="w-12 h-1 rounded-full gradient-gold mx-auto mb-5 group-hover:w-24 transition-all duration-500" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.vision.text[lang]}</p>
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="group p-10 rounded-3xl bg-background border border-border hover:shadow-card-hover transition-all duration-500 text-center h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-gold mb-6 group-hover:scale-110 transition-all duration-500">
                    <Target className="text-gold-foreground" size={28} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{t.mission.title[lang]}</h2>
                  <div className="w-12 h-1 rounded-full gradient-gold mx-auto mb-5 group-hover:w-24 transition-all duration-500" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.mission.text[lang]}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {lang === "ar" ? <>الـ<span className="text-gradient-gold">قيم</span></> : <>Our <span className="text-gradient-gold">Values</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {t.values.items.map((item, i) => {
                const icons = [Shield, HeartHandshake, Star, Users, Lightbulb];
                const Icon = icons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -8, scale: 1.03 }}
                      className="group flex flex-col items-center text-center p-7 rounded-2xl bg-soft border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4"
                      >
                        <Icon className="text-gold-foreground" size={24} />
                      </motion.div>
                      <h3 className="font-bold text-foreground text-sm">{item[lang]}</h3>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Board of Trustees */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>مجلس <span className="text-gradient-gold">الأمناء</span></> : <>Board of <span className="text-gradient-gold">Trustees</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {t.board.members.map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group text-center"
                  >
                    <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-lg">
                      <img
                        src={memberImages[i]}
                        alt={member.name[lang]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{member.name[lang]}</h3>
                    <p className="text-gold text-xs font-semibold">{member.role[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>فريق <span className="text-gradient-gold">العمل</span></> : <>Our <span className="text-gradient-gold">Team</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
              {t.team.members.map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group text-center p-6 rounded-2xl bg-soft border border-border hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="relative mb-4 mx-auto w-28 h-28 rounded-2xl overflow-hidden shadow-md">
                      <img
                        src={memberImages[i]}
                        alt={member.name[lang]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{member.name[lang]}</h3>
                    <p className="text-gold text-xs font-semibold">{member.role[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="py-24 gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 start-0 w-96 h-96 rounded-full bg-gold/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {lang === "ar" ? <>أثرنا <span className="text-gradient-gold">بالأرقام</span></> : <>Our Impact <span className="text-gradient-gold">in Numbers</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gold/30 text-gold-light hover:bg-gold/10 transition-colors text-sm font-medium"
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
                {lang === "ar" ? <>شاركنا في صناعة <span className="text-gradient-gold">التغيير</span></> : <>Join Us in Making <span className="text-gradient-gold">a Difference</span></>}
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
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-gold text-gold-foreground font-bold shadow-xl"
                  >
                    {t.nav.contact[lang]}
                  </motion.span>
                </Link>
                <Link to="/partnerships">
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-gold/20 text-foreground font-bold hover:bg-gold/5 transition-colors"
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
          className="text-4xl md:text-5xl font-bold mb-3 font-cairo text-gradient-gold"
        >
          {count > 0 ? `+${count.toLocaleString()}` : "0"}
        </motion.div>
        <p className="text-primary-foreground/60 text-sm font-medium">{label}</p>
      </div>
    </AnimatedSection>
  );
};

export default Index;
