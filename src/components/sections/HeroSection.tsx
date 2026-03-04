import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { lang, t } = useLang();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-nama-800/70" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-nama-800 via-nama-700 to-nama-600 bg-[length:400%_400%] animate-gradient-shift" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/30"
        >
          <span className="font-cairo font-bold text-4xl text-primary-foreground">ن</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4"
        >
          {t.hero.title[lang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-xl md:text-2xl text-primary-foreground/80 font-medium mb-6"
        >
          {t.hero.subtitle[lang]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base md:text-lg text-primary-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.description[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#vision"
            className="px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold text-base hover:bg-accent-light transition-all hover:scale-105 shadow-lg"
          >
            {t.hero.cta1[lang]}
          </a>
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-base hover:bg-primary-foreground/10 transition-all hover:scale-105"
          >
            {t.hero.cta2[lang]}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="text-primary-foreground/50" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
