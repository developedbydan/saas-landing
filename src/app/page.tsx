import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import PricingSection from "@/components/pricing-section";
import CallToAction from "@/components/cta-section";
export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <PricingSection />
      <CallToAction />
    </div>
  );
}
