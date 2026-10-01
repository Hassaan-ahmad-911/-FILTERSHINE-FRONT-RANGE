import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyFilterShineSection } from '../components/WhyFilterShineSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
import { TestimonialsAndFaqSection } from '../components/TestimonialsAndFaqSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { ContactStrip } from '../components/ContactStrip';

interface HomePageProps {
  onRequestService: () => void;
  onSelectService: (serviceId: string) => void;
  onNavigateToServices: () => void;
  onNavigateToServiceArea: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onRequestService,
  onSelectService,
  onNavigateToServices,
  onNavigateToServiceArea,
}) => {
  return (
    <main>
      {/* 1. Hero Section with HD Technician & Kitchen Background */}
      <HeroSection onRequestService={onRequestService} />

      {/* 2. Core Commercial Services Section (4 Core Solutions) */}
      <ServicesSection
        onSelectService={onSelectService}
        onViewAllServices={onNavigateToServices}
      />

      {/* 3. Why FilterShine Section (Metrics Ribbon, In-House vs Exchange Matrix, Savings Calculator, 4-Step Process) */}
      <WhyFilterShineSection onRequestService={onRequestService} />

      {/* 4. Regional Route Coverage Section (Colorado & Southern Wyoming) */}
      <ServiceAreaSection onViewServiceAreaPage={onNavigateToServiceArea} />

      {/* 5. Verified Client Testimonials & Interactive FAQ Accordion */}
      <TestimonialsAndFaqSection onRequestService={onRequestService} />

      {/* 6. Final Call To Action Banner */}
      <FinalCtaSection onRequestService={onRequestService} />

      {/* 7. Contact Information Strip */}
      <ContactStrip />
    </main>
  );
};
