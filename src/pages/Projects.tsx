import { useLang } from "@/i18n/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: project1,
    title: { ar: "برنامج بناء القدرات المؤسسية", en: "Institutional Capacity Building" },
    desc: { ar: "تطوير مهارات وقدرات العاملين في القطاع غير الربحي من خلال برامج تدريبية متخصصة ومنهجيات حديثة", en: "Developing skills and capacities of non-profit workers through specialized training programs and modern methodologies" },
    tag: { ar: "تطوير مؤسسي", en: "Institutional Development" },
  },
  {
    img: project2,
    title: { ar: "مشروع التدريب والتأهيل", en: "Training & Development" },
    desc: { ar: "تدريب وتأهيل الكوادر البشرية في المنظمات غير الربحية لرفع مستوى الأداء والكفاءة", en: "Training and qualifying human resources in non-profit organizations to raise performance levels" },
    tag: { ar: "تدريب", en: "Training" },
  },
  {
    img: project3,
    title: { ar: "مبادرة الاستدامة المالية", en: "Financial Sustainability Initiative" },
    desc: { ar: "تعزيز الاستدامة المالية للمنظمات غير الربحية من خلال تطوير نماذج أعمال مبتكرة", en: "Enhancing financial sustainability through innovative business model development" },
    tag: { ar: "استدامة", en: "Sustainability" },
  },
];

const Projects = () => {
  const { lang, t } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <PageHero title={t.projects.title[lang]} subtitle={t.projects.subtitle[lang]} />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group rounded-3xl overflow-hidden border border-border bg-background shadow-card hover:shadow-card-hover transition-all duration-500 h-full"
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img
                        src={project.img}
                        alt={project.title[lang]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-nama-800/0 group-hover:bg-nama-800/50 transition-colors duration-500 flex items-center justify-center">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="opacity-0 group-hover:opacity-100 text-primary-foreground font-bold text-lg transition-opacity duration-300"
                        >
                          {lang === "ar" ? "عرض التفاصيل" : "View Details"}
                        </motion.span>
                      </div>
                      <span className="absolute top-4 start-4 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-bold backdrop-blur-sm">
                        {project.tag[lang]}
                      </span>
                    </div>
                    <div className="p-7">
                      <h3 className="text-xl font-bold text-foreground mb-3">{project.title[lang]}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.desc[lang]}</p>
                    </div>
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

export default Projects;
