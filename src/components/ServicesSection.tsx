import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onViewAllServices: () => void;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'filter-cleaning',
    title: 'Grease Filter Cleaning',
    image: '/images/service_cleaning_hd.png',
    shortDesc: 'State-of-the-art soak tank system ensuring thorough grease removal and NFPA 96 code compliance.',
    fullDesc:
      'Our specialized off-site commercial grease filter cleaning service utilizes high-efficiency soak tanks and eco-safe degreasers. We eliminate stubborn baked-on grease, restoring air circulation and significantly lowering fire hazards for your commercial exhaust hoods.',
    features: [
      'Eco-friendly commercial soak tank process',
      'NFPA 96 fire safety compliance',
      'Restores maximum airflow and hood suction',
      'Eliminates dangerous grease accumulation',
    ],
  },
  {
    id: 'filter-exchange',
    title: 'Grease Filter Exchange',
    image: '/images/service_exchange_hd.png',
    shortDesc: 'Regular scheduled replacement with pristine, polished stainless steel baffle filters.',
    fullDesc:
      'Never wash greasy filters in your kitchen dish sink again. Our signature exchange program delivers fresh, sparkling clean baffle filters directly to your commercial kitchen on a scheduled weekly, bi-weekly, or monthly rotation.',
    features: [
      'Seamless scheduled filter swapping',
      'Heavy-duty stainless steel baffle filters provided',
      'Zero kitchen employee labor or messy sink washing',
      'Consistent compliance records for health & fire inspectors',
    ],
  },
  {
    id: 'kitchen-services',
    title: 'Kitchen Services',
    image: '/images/service_kitchen_hd.png',
    shortDesc: 'Comprehensive commercial cookline, equipment, and kitchen line maintenance solutions.',
    fullDesc:
      'We support Colorado and Southern Wyoming commercial kitchens with targeted maintenance solutions that keep your cook line running safely, cleanly, and without costly downtime during peak operating hours.',
    features: [
      'Hood canopy and backsplash inspections',
      'Grease containment checks',
      'Drip cup and gutter maintenance',
      'Support for restaurants, hospitals, hotels, & commissaries',
    ],
  },
  {
    id: 'exhaust-services',
    title: 'Exhaust Services',
    image: '/images/service_exhaust_hd.png',
    shortDesc: 'Commercial exhaust hood and duct ventilation support ensuring fire-safe airflow.',
    fullDesc:
      'Your commercial kitchen ventilation system is the heartbeat of your kitchen environment. Our exhaust services ensure your rooftop exhaust and baffle intake systems operate with optimal static pressure and safety clearance.',
    features: [
      'Exhaust airflow and draw evaluation',
      'Filter fitment and air bypass prevention',
      'Fire code alignment with local municipal fire marshals',
      'Rooftop grease containment integration',
    ],
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  return (
    <section className="bg-[#F7F3EA] py-16 sm:py-20 lg:py-24 border-b border-[#EADFCF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          {/* Top category indicator */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#C96F22] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#C96F22]">
              Our Services
            </span>
          </div>

          {/* Section Headline */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#07191A] leading-tight">
              Commercial Kitchen <span className="text-[#C96F22]">Services</span>
            </h2>

            <button
              onClick={onViewAllServices}
              className="hidden sm:inline-flex items-center space-x-2 text-sm font-semibold text-[#07191A] hover:text-[#C96F22] transition-colors"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Cards Grid - Pixel-perfect match to mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#07191A] aspect-[4/5] flex flex-col justify-end"
            >
              {/* Card Photo */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Card Content & Action Button */}
              <div className="relative z-10 p-5 flex items-end justify-between gap-3">
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm group-hover:text-[#F7F3EA] transition-colors">
                  {service.title}
                </h3>

                {/* Circular Arrow Button from Mockup */}
                <div className="w-9 h-9 shrink-0 rounded-full border border-white/80 group-hover:border-[#C96F22] group-hover:bg-[#C96F22] flex items-center justify-center text-white transition-all duration-200">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
