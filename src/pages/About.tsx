import { useLang } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Eye, Target, Shield, HeartHandshake, Star, Users, Lightbulb, CheckCircle2 } from "lucide-react";

const icons = [Shield, HeartHandshake, Star, Users, Lightbulb];

const About = () => {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHero title={t.about.title[lang]} subtitle={t.about.subtitle[lang]} />

        {/* Who We Are */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t.about.whoWeAre[lang]}</h2>
                <div className="w-16 h-1 rounded-full bg-accent mb-6" />
                <p className="text-muted-foreground text-lg leading-loose">{t.about.whoWeAreText[lang]}</p>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {t.about.whyNamaItems.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="p-6 rounded-2xl bg-soft border border-border text-center"
                    >
                      <CheckCircle2 className="text-accent mx-auto mb-3" size={28} />
                      <p className="text-foreground font-semibold text-sm">{item[lang]}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Vision & Mission Full */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatedSection direction="left">
                <motion.div whileHover={{ y: -4 }} className="p-10 rounded-3xl bg-background border border-border shadow-card h-full text-center">
                  <div className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-6">
                    <Eye className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.vision.title[lang]}</h3>
                  <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.vision.text[lang]}</p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <motion.div whileHover={{ y: -4 }} className="p-10 rounded-3xl bg-background border border-border shadow-card h-full text-center">
                  <div className="inline-flex w-16 h-16 rounded-2xl gradient-accent items-center justify-center mb-6">
                    <Target className="text-accent-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.mission.title[lang]}</h3>
                  <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.mission.text[lang]}</p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.values.title[lang]}</h2>
              <div className="w-16 h-1 rounded-full bg-accent mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {t.values.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -8, rotate: 2 }}
                      className="flex flex-col items-center text-center p-8 rounded-2xl bg-soft border border-border shadow-card hover:shadow-card-hover transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <h3 className="font-bold text-foreground">{item[lang]}</h3>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
