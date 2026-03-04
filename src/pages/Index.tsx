import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import ValuesSection from "@/components/sections/ValuesSection";
import DirectionsSection from "@/components/sections/DirectionsSection";
import WorkAreasSection from "@/components/sections/WorkAreasSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionMissionSection />
      <ValuesSection />
      <DirectionsSection />
      <WorkAreasSection />
      <ImpactSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default Index;
