import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import PlatformDistribution from "@/components/PlatformDistribution";
import ValueSection from "@/components/ValueSection";
import MonetizationSection from "@/components/MonetizationSection";
import StatusSection from "@/components/StatusSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <HowItWorks />
      <PlatformDistribution />
      <ValueSection />
      <MonetizationSection />
      <StatusSection />
      <Footer />
    </div>
  );
};

export default Index;
