import React from 'react';
import { servicesData } from '../components/ServicesSection';
import { CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, Sparkles, Wind } from 'lucide-react';
import { ContactStrip } from '../components/ContactStrip';

interface ServicesPageProps {
  onRequestService: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onRequestService,
  onSelectService,
}) => {
  const serviceIcons = [
    <Sparkles className="w-5 h-5 text-[#C96F22]" />,
    <RefreshCw className="w-5 h-5 text-[#C96F22]" />,
    <ShieldCheck className="w-5 h-5 text-[#C96F22]" />,
    <Wind className="w-5 h-5 text-[#C96F22]" />,
  ];

  return (
    <div className="bg-[#F7F3EA] min-h-screen">
      {/* Page Header */}
      <section className="bg-[#07191A] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D97724] rounded-full inline-block" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#D97724]">
              Commercial Services
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Commercial Kitchen <span className="text-[#D97724]">Services</span>
          </h1>
          <p className="text-base sm:text-lg text-[#C8D1D4] max-w-2xl font-normal">
            Specialized grease filter exchange, deep tank cleaning, and exhaust maintenance engineered specifically for high-volume commercial kitchens.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {servicesData.map((service, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-[#EADFCF] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo Column */}
                  <div
                    className={`lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[280px] relative bg-[#07191A] ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:hidden" />
                  </div>

                  {/* Text Column */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-10 space-y-5 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FAECE0] flex items-center justify-center">
                        {serviceIcons[index % serviceIcons.length]}
                      </div>
                      <span className="text-xs uppercase font-bold tracking-wider text-[#697477]">
                        Service 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-[#07191A]">
                      {service.title}
                    </h2>

                    <p className="text-base text-[#4A575A] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#697477] mb-3">
                        Included Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feat, fidx) => (
                          <div key={fidx} className="flex items-start space-x-2 text-sm text-[#26363A]">
                            <CheckCircle2 className="w-4 h-4 text-[#C96F22] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={onRequestService}
                        className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#C96F22] hover:bg-[#B35E19] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs"
                      >
                        <span>Schedule Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onSelectService(service.id)}
                        className="text-sm font-semibold text-[#07191A] hover:text-[#C96F22] transition-colors"
                      >
                        Quick Overview →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works Section */}
        <div className="mt-20 pt-16 border-t border-[#EADFCF]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C96F22]">
              Simple Route Process
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#07191A] mt-2">
              How the Filter Exchange Works
            </h2>
            <p className="text-sm sm:text-base text-[#697477] mt-3">
              We take grease filter cleaning completely out of your kitchen so your cooks and dishwashers can focus on food service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Hood Audit & Sizing',
                desc: 'We count and measure your kitchen exhaust hoods to stock identical stainless-steel baffle filters.',
              },
              {
                step: '02',
                title: 'Scheduled Swap',
                desc: 'On your set route day, our technician takes down dirty filters and installs sparkling clean ones.',
              },
              {
                step: '03',
                title: 'Off-Site Soak Tank',
                desc: 'Dirty filters are transported to our Fort Collins facility for deep degreasing in commercial soak tanks.',
              },
              {
                step: '04',
                title: 'NFPA Compliance',
                desc: 'Your hoods maintain steady airflow, reduced fire load, and full compliance for fire marshals.',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#EADFCF] shadow-xs relative"
              >
                <div className="text-2xl font-black text-[#C96F22] font-mono mb-2">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-[#07191A] mb-2">{step.title}</h3>
                <p className="text-xs text-[#697477] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <ContactStrip />
    </div>
  );
};
