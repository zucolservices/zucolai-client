import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DarkFooter from '@/components/DarkFooter';
import GetInTouchSection from '@/components/GetInTouchSection';
import TrustedCompanies from '@/components/TrustedCompanies';
import ServicesSection from '@/components/ServicesSection';
import StatsComponent from '@/components/StatsComponent';
import SolutionsSection from '@/components/SolutionsSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import FaqSection from '@/components/FaqSection';

export default function Home() {
  return (
    <div className="p-0 md:p-2">
      <main>
        <Header />
        <HeroSection />
        <GetInTouchSection />
        {/* <TrustedCompanies /> */}
        <ServicesSection />
        <StatsComponent />
        <SolutionsSection />
        <CapabilitiesSection />
        <FaqSection />
      </main>
      <DarkFooter />
    </div>
  );
}
