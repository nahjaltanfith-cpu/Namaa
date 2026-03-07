import { useLang } from "@/i18n/LanguageContext";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import { FileCheck } from "lucide-react";

const DRIVE_PDF_EMBED = "https://drive.google.com/file/d/1_r3hP7G4RkYdjQDXZX4PIZEdBXcaXBQA/preview";

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
            <AnimatedSection>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md">
                    <FileCheck className="text-white" size={22} />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {lang === "ar" ? "قرار التأسيس" : "Founding Resolution"}
                  </h2>
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {lang === "ar"
                    ? "يمكنك الاطلاع على قرار تأسيس الجمعية وتصفحه أدناه"
                    : "Browse and review the association's founding resolution below"}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl border border-border bg-card shadow-lg overflow-hidden">
                <iframe
                  src={DRIVE_PDF_EMBED}
                  className="w-full h-[600px] md:h-[850px]"
                  title={lang === "ar" ? "قرار التأسيس" : "Founding Resolution"}
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

export default Reports;
