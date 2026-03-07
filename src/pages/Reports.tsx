import { useLang } from "@/i18n/LanguageContext";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { FileText, Download, Calendar, BarChart3 } from "lucide-react";

const reports = [
  {
    title: { ar: "التقرير السنوي 2024", en: "Annual Report 2024" },
    desc: { ar: "تقرير شامل عن إنجازات ونشاطات الجمعية خلال عام 2024", en: "Comprehensive report on the association's achievements in 2024" },
    year: "2024",
    type: { ar: "تقرير سنوي", en: "Annual Report" },
  },
  {
    title: { ar: "التقرير السنوي 2023", en: "Annual Report 2023" },
    desc: { ar: "تقرير شامل عن إنجازات ونشاطات الجمعية خلال عام 2023", en: "Comprehensive report on the association's achievements in 2023" },
    year: "2023",
    type: { ar: "تقرير سنوي", en: "Annual Report" },
  },
  {
    title: { ar: "تقرير الأثر الاجتماعي", en: "Social Impact Report" },
    desc: { ar: "قياس وتقييم الأثر الاجتماعي لمشاريع وبرامج الجمعية", en: "Measuring and evaluating the social impact of the association's projects" },
    year: "2024",
    type: { ar: "تقرير أثر", en: "Impact Report" },
  },
  {
    title: { ar: "التقرير المالي", en: "Financial Report" },
    desc: { ar: "الإفصاح المالي والشفافية في إدارة موارد الجمعية", en: "Financial disclosure and transparency in resource management" },
    year: "2024",
    type: { ar: "تقرير مالي", en: "Financial Report" },
  },
];

const Reports = () => {
  const { lang } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <PageHero
          title={lang === "ar" ? "التقارير" : "Reports"}
          subtitle={lang === "ar" ? "نؤمن بالشفافية والإفصاح كجزء أساسي من حوكمتنا" : "We believe in transparency and disclosure as a core part of our governance"}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              {reports.map((report, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: lang === "ar" ? -4 : 4 }}
                    className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                      <FileText className="text-white" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700">
                          {report.type[lang]}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar size={12} /> {report.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{report.title[lang]}</h3>
                      <p className="text-sm text-muted-foreground">{report.desc[lang]}</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 hover:bg-amber-100 transition-colors"
                    >
                      <Download size={18} />
                    </motion.button>
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

export default Reports;
