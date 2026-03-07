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

        {/* Values - Star Shape */}
        <section className="py-24 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {lang === "ar" ? <>الـ<span className="text-gradient-gold">قيم</span></> : <>Our <span className="text-gradient-gold">Values</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="relative max-w-sm md:max-w-md mx-auto aspect-square flex items-center justify-center"
            >
              {/* Center Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                animate={{ rotate: -360 }}
                style={{ rotate: 0 }}
                className="absolute z-10 w-28 h-28 md:w-36 md:h-36 rounded-full bg-white border-4 border-gold/40 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.25)]"
              >
                <motion.img
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  src={logo} alt="Nama" className="w-20 h-20 md:w-28 md:h-28 object-contain"
                />
              </motion.div>

              {/* Connecting Lines + Values */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                {t.values.items.map((_, i) => {
                  const total = t.values.items.length;
                  const angle = (i * 360) / total - 90;
                  const radius = 40;
                  const cx = 50 + radius * Math.cos((angle * Math.PI) / 180);
                  const cy = 50 + radius * Math.sin((angle * Math.PI) / 180);
                  return (
                    <motion.line
                      key={i}
                      x1="50" y1="50" x2={cx} y2={cy}
                      stroke="hsl(var(--gold))"
                      strokeWidth="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 * i + 0.3 }}
                    />
                  );
                })}
              </svg>

              {/* Value Boxes */}
              {t.values.items.map((item, i) => {
                const total = t.values.items.length;
                const angle = (i * 360) / total - 90;
                const radius = 40;
                const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
                const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

                return (
                  <div
                    key={i}
                    className="absolute z-20"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.15 }}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-background border-2 border-gold/30 shadow-lg flex items-center justify-center hover:border-gold/60 hover:shadow-xl transition-all duration-300"
                    >
                      <span className="text-foreground font-bold text-[10px] md:text-xs text-center px-1 leading-tight">{item[lang]}</span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Strategic Directions - Parallax */}
        <section
          className="relative py-28 text-primary-foreground overflow-hidden bg-fixed bg-center bg-cover"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
                {lang === "ar" ? <>التوجهات <span className="text-gradient-gold">الاستراتيجية</span></> : <>Strategic <span className="text-gradient-gold">Directions</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {t.directions.items.map((item, i) => {
                const Icon = directionIcons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500 overflow-hidden"
                    >
                      <div className="absolute top-0 start-0 w-1 h-full gradient-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                          <Icon className="text-gold-foreground" size={22} />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-gold mb-2 block">0{i + 1}</span>
                          <p className="text-white/90 font-semibold text-sm leading-relaxed">{item[lang]}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA - Bordered Card */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="max-w-3xl mx-auto">
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center p-12 md:p-16 rounded-3xl border-2 border-gold/25 bg-soft shadow-[0_0_40px_rgba(212,175,55,0.08)] hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] hover:border-gold/40 transition-all duration-500"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  {lang === "ar" ? <>شاركنا في صناعة <span className="text-gradient-gold">التغيير</span></> : <>Join Us in Making <span className="text-gradient-gold">a Difference</span></>}
                </h2>
                <p className="text-muted-foreground text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
                  {lang === "ar"
                    ? "نؤمن بأن التعاون هو المفتاح لتنمية القطاع غير الربحي. انضم إلينا لبناء مستقبل أفضل."
                    : "We believe collaboration is key to developing the non-profit sector. Join us in building a better future."}
                </p>
                <Link to="/contact" className="inline-block">
                  <motion.span
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-12 py-5 rounded-full gradient-gold text-gold-foreground font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {t.nav.contact[lang]}
                  </motion.span>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;