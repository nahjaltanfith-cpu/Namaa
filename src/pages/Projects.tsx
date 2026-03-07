import { useLang } from "@/i18n/LanguageContext";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import projectEvents from "@/assets/project-events.png";

const Projects = () => {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <PageHero title={t.projects.title[lang]} subtitle={t.projects.subtitle[lang]} />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-lg">
                <img
                  src={projectEvents}
                  alt={lang === "ar" ? "مشاريع وفعاليات الجمعية" : "Association Projects & Events"}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Projects;
