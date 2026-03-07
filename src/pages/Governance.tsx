import { useLang } from "@/i18n/LanguageContext";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Shield, Users, FileCheck, Scale, Eye } from "lucide-react";

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

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Governance;
