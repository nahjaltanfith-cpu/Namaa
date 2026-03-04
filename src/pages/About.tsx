import { useLang } from "@/i18n/LanguageContext";

import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Eye, Target, Shield, HeartHandshake, Star, Users, Lightbulb, CheckCircle2, BookOpen, Compass, Crosshair, ArrowUpRight, Briefcase, Building2, UserCheck, GraduationCap } from "lucide-react";

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
        <Navbar />
        <PageHero title={t.about.title[lang]} subtitle={t.about.subtitle[lang]} />

        {/* Our Story */}
        <section className="py-24 bg-background">
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
                    <motion.div
                      key={i}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="p-6 rounded-2xl bg-soft border border-border text-center"
                    >
                      <CheckCircle2 className="text-gold mx-auto mb-3" size={28} />
                      <p className="text-foreground font-semibold text-sm">{item[lang]}</p>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <AnimatedSection direction="left">
                <motion.div whileHover={{ y: -4 }} className="p-10 rounded-3xl bg-background border border-border shadow-card h-full text-center">
                  <div className="inline-flex w-16 h-16 rounded-2xl gradient-primary items-center justify-center mb-6">
                    <Eye className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{t.vision.title[lang]}</h3>
                  <div className="w-12 h-1 gradient-gold rounded-full mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg leading-relaxed">{t.vision.text[lang]}</p>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right">
                <motion.div whileHover={{ y: -4 }} className="p-10 rounded-3xl bg-background border border-border shadow-card h-full text-center">
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
                const Icon = valueIcons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -8, rotate: 2 }}
                      className="flex flex-col items-center text-center p-8 rounded-2xl bg-soft border border-border shadow-card hover:shadow-card-hover transition-all"
                    >
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

        {/* Strategic Directions */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4 max-w-5xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>التوجهات <span className="text-gradient-gold">الاستراتيجية</span></> : <>Strategic <span className="text-gradient-gold">Directions</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.about.strategicDirections.items.map((item, i) => {
                const Icon = directionIcons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -4, x: lang === "ar" ? -4 : 4 }}
                      className="group flex items-center gap-5 p-6 rounded-2xl bg-background border border-border shadow-card hover:shadow-card-hover transition-all"
                    >
                      <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground text-lg">{item[lang]}</h3>
                      </div>
                      <ArrowUpRight className="text-gold opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Strategic Goals */}
        <section className="py-24 gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 start-0 w-96 h-96 rounded-full bg-gold/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {lang === "ar" ? <>الأهداف <span className="text-gradient-gold">الاستراتيجية</span></> : <>Strategic <span className="text-gradient-gold">Goals</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.about.strategicGoals.items.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                      <Crosshair className="text-gold-foreground" size={18} />
                    </div>
                    <p className="font-semibold text-primary-foreground/90">{item[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Work Model */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {lang === "ar" ? <>نموذج <span className="text-gradient-gold">العمل</span></> : <>Work <span className="text-gradient-gold">Model</span></>}
              </h2>
              <div className="w-16 h-1 rounded-full gradient-gold mx-auto" />
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.about.workModel.beneficiaries.map((item, i) => {
                const Icon = beneficiaryIcons[i];
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group p-8 rounded-2xl bg-soft border border-border shadow-card hover:shadow-card-hover transition-all"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          <Icon className="text-gold-foreground" size={22} />
                        </div>
                        <h3 className="font-bold text-foreground text-lg">{item.name[lang]}</h3>
                      </div>
                      <div className="ps-16">
                        <p className="text-muted-foreground leading-relaxed">{item.service[lang]}</p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Executive Committee */}
        <section className="py-24 bg-soft">
          <div className="container mx-auto px-4 max-w-4xl">
            <AnimatedSection className="text-center">
              <div className="p-10 rounded-3xl bg-background border border-border shadow-card">
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

        {/* Board of Trustees */}
        <section className="py-24 bg-background">
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
                  <motion.div whileHover={{ y: -8 }} className="group text-center">
                    <div className="relative mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-gold/30 group-hover:border-gold/60 transition-all duration-500 shadow-lg">
                      <img src={memberImages[i]} alt={member.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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
        <section className="py-24 bg-soft">
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
                  <motion.div whileHover={{ y: -8 }} className="group text-center p-6 rounded-2xl bg-background border border-border hover:shadow-card-hover transition-all duration-300">
                    <div className="relative mb-4 mx-auto w-28 h-28 rounded-2xl overflow-hidden shadow-md">
                      <img src={memberImages[i]} alt={member.name[lang]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-1">{member.name[lang]}</h3>
                    <p className="text-gold text-xs font-semibold">{member.role[lang]}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
