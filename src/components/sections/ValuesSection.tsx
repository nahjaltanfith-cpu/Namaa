import { useLang } from "@/i18n/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, HeartHandshake, Star, Users, Lightbulb } from "lucide-react";

const icons = [Shield, HeartHandshake, Star, Users, Lightbulb];

const ValuesSection = () => {
  const { lang, t } = useLang();

  return (
    <section className="py-24 bg-soft">
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
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground text-sm">{item[lang]}</h3>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
