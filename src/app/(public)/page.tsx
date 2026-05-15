import PublicHeader from "@/components/layout/public-header";
import HeroSection from "@/features/landing/components/hero-section";
import TrustStrip from "@/features/landing/components/trust-strip";
import FeaturesSection from "@/features/landing/components/features-section";
import HowItWorks from "@/features/landing/components/how-it-works";
import SectorsGrid from "@/features/landing/components/sectors-grid";
import BlockchainSection from "@/features/landing/components/blockchain-section";
import CTASection from "@/features/landing/components/cta-section";
import LandingFooter from "@/features/landing/components/landing-footer";

export default function LandingPage() {
  return (
    <main>
      <PublicHeader />
      <HeroSection />
      <TrustStrip />
      <FeaturesSection />
      <HowItWorks />
      <SectorsGrid />
      <BlockchainSection />
      <CTASection />
      <LandingFooter />
    </main>
  );
}
