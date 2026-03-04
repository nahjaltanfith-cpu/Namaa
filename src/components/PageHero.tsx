import { useLang } from "@/i18n/LanguageContext";
import AnimatedSection from "@/components/AnimatedSection";
import heroBg from "@/assets/hero-bg.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-nama-800/80" />
      </div>
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-nama-800 via-nama-700 to-nama-600 bg-[length:400%_400%] animate-gradient-shift" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <AnimatedSection>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">{title}</h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
          )}
          <div className="w-20 h-1 rounded-full bg-accent mx-auto mt-6" />
        </AnimatedSection>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background">
          <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default PageHero;
