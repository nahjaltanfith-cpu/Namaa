import { useLang } from "@/i18n/LanguageContext";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import {
  Eye,
  Target,
  Shield,
  HeartHandshake,
  Star,
  Users,
  Lightbulb,
  CheckCircle2,
  Compass,
  Crosshair,
  ArrowUpRight,
  Briefcase,
  Building2,
  UserCheck,
  GraduationCap,
  MapPin,
  FileText,
  Award,
  CircleDot,
  User,
  Crown,
  Gem,
} from "lucide-react";

import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";

const valueIcons = [Shield, HeartHandshake, Star, Users, Lightbulb];
const memberImages = [member1, member2, member3, member4, member5];
const directionIcons = [GraduationCap, Briefcase, Building2, Users];
const beneficiaryIcons = [Building2, UserCheck, Shield, Briefcase];

const About = () => {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">

        <PageHero title={t.about.title[lang]} subtitle={t.about.subtitle[lang]} />

        {/* ── Our Story ── */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection direction="left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {lang === "ar" ? <>قصـ<span className="text-gradient-gold">تـنـا</span></> : <>Our <span className="text-gradient-gold">Story</span></>}
                </h2>
                <div className="w-16 h-1 rounded-full gradient-gold mb-6" />
                <p className="text-muted-foreground text-lg leading-loose mb-6">{t.about.story[lang]}</p>
                <p className="text-muted-foreground text-lg leading-loose">{t.about.whoWeAreText[lang]}</p>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {t.about.whyNamaItems.map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -4, scale: 1.02 }} className="p-6 rounded-2xl bg-background border border-border text-center shadow-card">
                      <CheckCircle2 className="text-gold mx-auto mb-3" size={28} />
                      <p className="text-foreground font-semibold text-sm">{item[lang]}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatedSection direction="left">
                <motion.div whileHover={{ y: -4 }} className="p-10 rounded-3xl bg-soft border border-border shadow-card h-full text-center">
                  <div className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-6">
                    <Eye className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.vision.title[lang]}</h3>
                  <div className="w-12 h-1 gradient-gold rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.vision.text[lang]}</p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <motion.div whileHover={{ y: -4 }} className="p-10 rounded-3xl bg-soft border border-border shadow-card h-full text-center">
                  <div className="inline-flex w-16 h-16 rounded-2xl gradient-gold items-center justify-center mb-6">
                    <Target className="text-gold-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.mission.title[lang]}</h3>
                  <div className="w-12 h-1 gradient-gold rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.mission.text[lang]}</p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Association Goals (13 goals) ── */}
        <section className="py-24 gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 start-0 w-96 h-96 rounded-full bg-gold/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <AnimatedSection className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {lang === "ar" ? <>أهداف <span className="text-gradient-gold">الجمعية</span></> : <>Association <span className="text-gradient-gold">Goals</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto mb-6" />
              <p className="text-primary-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
                {t.associationGoals.intro[lang]}
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
              {t.associationGoals.items.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ scale: 1.02, x: lang === "ar" ? -4 : 4 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl gradient-gold flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-gold-foreground font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="font-semibold text-primary-foreground/90 text-[15px] leading-relaxed">{item[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
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
                const Icon = valueIcons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div whileHover={{ y: -8, rotate: 2 }} className="flex flex-col items-center text-center p-8 rounded-2xl bg-soft border border-border shadow-card hover:shadow-card-hover transition-all">
                      <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center mb-4">
                        <Icon className="text-gold-foreground" size={24} />
                      </div>
                      <h3 className="font-bold text-foreground">{item[lang]}</h3>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>



        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>مجلس <span className="text-gradient-gold">الإدارة</span></> : <>Board of <span className="text-gradient-gold">Directors</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>

            {/* Chairman - featured */}
            <AnimatedSection className="mb-10">
              <motion.div
                whileHover={{ y: -4 }}
                className="max-w-md mx-auto text-center p-8 rounded-3xl bg-soft border-2 border-gold/30 shadow-card"
              >
                <div className="w-20 h-20 rounded-full gradient-gold flex items-center justify-center mx-auto mb-5">
                  <Crown className="text-gold-foreground" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {t.boardOfDirectors.members[0].name[lang]}
                </h3>
                <p className="text-gold font-bold text-sm">{t.boardOfDirectors.members[0].role[lang]}</p>
              </motion.div>
            </AnimatedSection>

            {/* Other members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {t.boardOfDirectors.members.slice(1).map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="group text-center p-7 rounded-2xl bg-soft border border-border shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all"
                  >
                    <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <User className="text-primary-foreground" size={24} />
                    </div>
                    {member.title[lang] && (
                      <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold text-[11px] font-bold mb-2">
                        {member.title[lang]}
                      </span>
                    )}
                    <h3 className="font-bold text-foreground text-sm mb-1">{member.name[lang]}</h3>
                    <p className="text-muted-foreground text-xs font-semibold">{member.role[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Association Members ── */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4 max-w-5xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>أعضاء <span className="text-gradient-gold">الجمعية</span></> : <>Association <span className="text-gradient-gold">Members</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {t.associationMembers.members.map((member, i) => (
                <AnimatedSection key={i} delay={i * 0.04}>
                  <motion.div
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border shadow-card hover:shadow-card-hover hover:border-gold/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                      <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
                    </div>
                    <p className="font-bold text-foreground text-sm leading-tight">{member[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Executive Committee ── */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection className="text-center">
              <div className="p-10 rounded-3xl bg-soft border border-border shadow-card">
                <div className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-6">
                  <Compass className="text-primary-foreground" size={28} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {lang === "ar" ? <>اللجنة <span className="text-gradient-gold">التنفيذية</span></> : <>Executive <span className="text-gradient-gold">Committee</span></>}
                </h2>
                <div className="w-12 h-1 gradient-gold rounded-full mx-auto mb-6" />
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  {t.about.executiveCommittee.desc[lang]}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
