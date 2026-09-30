import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ServiceAreaSection } from '../components/ServiceAreaSection';
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
      {/* 1. Hero Section */}
      <HeroSection onRequestService={onRequestService} />

      {/* 2. Services Section (4 Cards) */}
      <ServicesSection
        onSelectService={onSelectService}
        onViewAllServices={onNavigateToServices}
      />

      {/* 3. Service Area Section (Colorado & Southern Wyoming) */}
      <ServiceAreaSection onViewServiceAreaPage={onNavigateToServiceArea} />

      {/* 4. Final CTA Section (Need Grease Filter Service?) */}
      <FinalCtaSection onRequestService={onRequestService} />

      {/* 5. Contact Information Strip */}
      <ContactStrip />
    </main>
  );
};
