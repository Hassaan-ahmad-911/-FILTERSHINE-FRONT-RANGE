import { useState } from 'react';
import type { PageId, ServiceItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceAreaPage } from './pages/ServiceAreaPage';
import { ContactPage } from './pages/ContactPage';
import { RequestServiceModal } from './components/RequestServiceModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { servicesData } from './components/ServicesSection';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenRequestModal = () => {
    setIsRequestModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    const found = servicesData.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F3EA] text-[#26363A] font-sans antialiased selection:bg-[#C96F22] selection:text-white relative">
      {/* Brand Copper Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* 1. Sticky Navigation Bar */}
      <Header
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onRequestService={handleOpenRequestModal}
      />

      {/* 2. Main Page Content View */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onRequestService={handleOpenRequestModal}
            onSelectService={handleSelectService}
            onNavigateToServices={() => navigateTo('services')}
            onNavigateToServiceArea={() => navigateTo('service-area')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onRequestService={handleOpenRequestModal} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onRequestService={handleOpenRequestModal}
            onSelectService={handleSelectService}
          />
        )}

        {currentPage === 'service-area' && (
          <ServiceAreaPage onRequestService={handleOpenRequestModal} />
        )}

        {currentPage === 'contact' && <ContactPage />}
      </div>

      {/* 3. Modern Multi-Column Footer */}
      <Footer
        currentPage={currentPage}
        setCurrentPage={navigateTo}
        onRequestService={handleOpenRequestModal}
      />

      {/* Request Service Intake Modal */}
      <RequestServiceModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
        preselectedService={selectedService?.id}
      />

      {/* Service Detail Inspection Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={handleOpenRequestModal}
      />
    </div>
  );
}

export default App;
