import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import { ArrowLeft, ArrowRight, Eye, Target, ChevronLeft, ChevronRight, Zap, Rocket, Puzzle, TrendingUp, Coins } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import logo from "/logo.png";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];
const directionIcons = [Zap, Rocket, Puzzle, TrendingUp, Coins];

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

  const springTransition = {
    type: "spring",
    stiffness: 120,
    damping: 15,
    mass: 0.8,
  } as const;

  return (
    <PageTransition>
      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
                src={heroImages[currentSlide]} 
                alt="" 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-nama-900/90 via-nama-900/20 to-transparent backdrop-blur-[1px]" />

          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "w-10 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]" : "w-4 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <div className="relative z-10 container mx-auto px-4 text-center mt-12">
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...springTransition, duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <img 
                src={logo} 
                alt="Nama Logo" 
                className="w-32 h-auto md:w-48 lg:w-56 object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]" 
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.01 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-lg"
            >
              {lang === "ar" ? (
                <>جمعية <span className="text-gradient-gold">نماء</span></>
              ) : (
                <><span className="text-gradient-gold">Nama</span> Association</>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-xl md:text-3xl text-white/95 font-semibold mb-6 drop-shadow-md"
            >
              {t.hero.subtitle[lang]}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="text-base md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-sm"
            >
              {t.hero.description[lang]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
            >
              <Link to="/about" className="w-full sm:w-auto">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-10 py-4 w-full rounded-full gradient-gold text-gold-foreground font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                >
                  {t.hero.cta1[lang]}
                  {lang === "ar" ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                </motion.span>
              </Link>
              <Link to="/projects" className="w-full sm:w-auto">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-10 py-4 w-full rounded-full backdrop-blur-md border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  {t.hero.cta2[lang]}
                </motion.span>
              </Link>
            </motion.div>
          </div>

         
        </section>

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

       <section 
  className="relative py-24 text-primary-foreground overflow-hidden bg-fixed bg-center bg-cover"
  style={{ backgroundImage: `url(${hero1})` }}
>
  <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
  
  <div className="container mx-auto px-4 relative z-10">
    <AnimatedSection className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
        {lang === "ar" ? <>أثرنا <span className="text-gradient-gold">بالأرقام</span></> : <>Our Impact <span className="text-gradient-gold">in Numbers</span></>}
      </h2>
      <div className="w-16 h-1 rounded-full gradient-gold mx-auto shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gold/40 text-gold-light hover:bg-gold/20 transition-all text-sm font-bold backdrop-blur-sm shadow-lg hover:shadow-gold/20"
        >
          {lang === "ar" ? "المزيد عن أثرنا" : "More About Our Impact"}
          {lang === "ar" ? <ArrowLeft size={16} strokeWidth={2.5} /> : <ArrowRight size={16} strokeWidth={2.5} />}
        </motion.span>
      </Link>
    </AnimatedSection>
  </div>
</section>

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
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-10 py-4 w-full rounded-full gradient-gold text-gold-foreground font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {t.nav.contact[lang]}
                  </motion.span>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-10 py-4 w-full rounded-full border-2 border-gold/20 text-foreground font-bold hover:bg-gold/5 transition-all duration-300"
                  >
                    {t.nav.contact[lang]}
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