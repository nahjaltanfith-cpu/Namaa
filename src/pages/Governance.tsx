import { useLang } from "@/i18n/LanguageContext";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Shield, Users, FileCheck, Scale, Eye, Download } from "lucide-react";

const governanceItems = [
  {
    icon: Shield,
    title: { ar: "الشفافية والمساءلة", en: "Transparency & Accountability" },
    desc: { ar: "نلتزم بأعلى معايير الشفافية في جميع عملياتنا وقراراتنا لضمان المساءلة الكاملة أمام أصحاب المصلحة", en: "We adhere to the highest standards of transparency in all our operations and decisions" },
  },
  {
    icon: Users,
    title: { ar: "مجلس الأمناء", en: "Board of Trustees" },
    desc: { ar: "يتولى مجلس الأمناء الإشراف على التوجهات الاستراتيجية والتأكد من تحقيق أهداف الجمعية بكفاءة وفعالية", en: "The Board of Trustees oversees strategic directions and ensures the association's goals are achieved" },
  },
  {
    icon: FileCheck,
    title: { ar: "السياسات والإجراءات", en: "Policies & Procedures" },
    desc: { ar: "نعمل وفق سياسات وإجراءات واضحة ومعتمدة تضمن سير العمل بشكل منظم ومتسق", en: "We operate under clear, approved policies and procedures ensuring organized workflows" },
  },
  {
    icon: Scale,
    title: { ar: "الامتثال والتنظيم", en: "Compliance & Regulation" },
    desc: { ar: "نلتزم بجميع الأنظمة والتشريعات المحلية والدولية المتعلقة بالقطاع غير الربحي", en: "We comply with all local and international regulations related to the non-profit sector" },
  },
  {
    icon: Eye,
    title: { ar: "الرقابة الداخلية", en: "Internal Oversight" },
    desc: { ar: "نظام رقابة داخلي فعال يضمن حسن استخدام الموارد وتحقيق الأهداف المرجوة", en: "Effective internal oversight system ensuring proper resource utilization" },
  },
];

const DRIVE_PDF_EMBED = "https://drive.google.com/file/d/1gJPWYm-rTZQBUqZYb1SdgtEgjdWMR9ZE/preview";

const Governance = () => {
  const { lang } = useLang();

  return (
    <PageTransition>
      <div className="min-h-screen">
        <PageHero
          title={lang === "ar" ? "الحوكمة" : "Governance"}
          subtitle={lang === "ar" ? "نلتزم بأعلى معايير الحوكمة والشفافية لضمان تحقيق رسالتنا" : "We adhere to the highest governance and transparency standards"}
        />

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-6">
              {governanceItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ x: lang === "ar" ? -6 : 6 }}
                      className="flex items-start gap-5 p-6 rounded-2xl bg-card border border-border hover:border-amber-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title[lang]}</h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc[lang]}</p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Basic Regulations PDF Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <AnimatedSection>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                    <FileCheck className="text-white" size={22} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {lang === "ar" ? "اللائحة الأساسية" : "Basic Regulations"}
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                  {lang === "ar"
                    ? "يمكنك الاطلاع على اللائحة الأساسية للجمعية وتصفحها أدناه"
                    : "Browse and review the association's basic regulations below"}
                </p>
                <motion.a
                  href="https://drive.google.com/uc?export=download&id=1gJPWYm-rTZQBUqZYb1SdgtEgjdWMR9ZE"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Download size={18} />
                  {lang === "ar" ? "تحميل اللائحة الأساسية" : "Download Basic Regulations"}
                </motion.a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                <iframe
                  src={DRIVE_PDF_EMBED}
                  className="w-full h-[600px] md:h-[850px]"
                  title={lang === "ar" ? "اللائحة الأساسية" : "Basic Regulations"}
                  allow="autoplay"
                  sandbox="allow-scripts allow-same-origin allow-popups"
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

export default Governance;
